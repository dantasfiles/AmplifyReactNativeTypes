// Connect
// https://aws-amplify.github.io/docs/js/api#connect

import React from 'react';
import {View, Text, TextInput, FlatList, Button} from 'react-native';
import {Connect} from 'aws-amplify-react-native';
import {graphqlOperation} from 'aws-amplify';
import * as mutations from './graphql/mutations';
import * as queries from './graphql/queries';
import * as subscriptions from './graphql/subscriptions';

interface Todo {
  id: string;
  name: string;
  description?: string;
}

interface iAddTodoProps {
  onCreate: (x: unknown) => void;
}
interface iAddTodoState {
  name: string;
  description: string;
}
class AddTodo extends React.Component<
  iAddTodoProps,
  iAddTodoState,
  iAddTodoState
> {
  constructor(props: iAddTodoProps) {
    super(props);
    this.submit = this.submit.bind(this);
    this.state = {
      name: '',
      description: '',
    };
  }

  async submit() {
    const {onCreate} = this.props;
    const input = {
      name: this.state.name,
      description: this.state.description,
    };
    console.log(input);

    try {
      await onCreate({input});
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    return (
      <View>
        <TextInput
          value={this.state.name}
          onChangeText={(text: string) => {
            this.setState({name: text});
          }}
        />
        <TextInput
          value={this.state.description}
          onChangeText={(text: string) => {
            this.setState({description: text});
          }}
        />
        <Button title="Add" onPress={this.submit} />
      </View>
    );
  }
}

class App extends React.Component {
  render() {
    interface iListViewProps {
      todos: Todo[];
    }
    const ListView = ({todos}: iListViewProps) => (
      <View>
        <Text>All Todos</Text>
        <FlatList
          data={todos}
          renderItem={({item}) => (
            <Text>
              {item.name} ({item.id})
            </Text>
          )}
          keyExtractor={(todo: Todo) => todo.id}
        />
      </View>
    );
    interface graphQLQueryResult {
      data: {listTodos: {items: Todo[]}};
      loading: boolean;
      errors: string;
    }
    interface graphQLSubscriptionData {
      onCreateTodo: Todo;
    }
    return (
      <View>
        <Connect mutation={graphqlOperation(mutations.createTodo)}>
          {({mutation}: {mutation: (x: unknown) => void}) => (
            <AddTodo onCreate={mutation} />
          )}
        </Connect>
        <Connect
          query={graphqlOperation(queries.listTodos)}
          subscription={graphqlOperation(subscriptions.onCreateTodo)}
          onSubscriptionMsg={(
            prev: graphQLSubscriptionData,
            {onCreateTodo}: graphQLSubscriptionData,
          ) => {
            console.log(onCreateTodo);
            return prev;
          }}>
          {({data: {listTodos}, loading, errors}: graphQLQueryResult) => {
            if (errors) {
              return <Text>Error</Text>;
            }
            if (loading || !listTodos) {
              return <Text>Loading...</Text>;
            }
            return <ListView todos={listTodos.items} />;
          }}
        </Connect>
      </View>
    );
  }
}

export default App;
