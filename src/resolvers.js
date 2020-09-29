const users = require('./user');
let resolvers = {
    Query: {
        greet(root, args) {
            console.log(args);
            let name = args.name;
            let age = args.age;
            return name + ' ' + age;
        },
        roles() {
            return users;
        }
    },
    Mutation: {
        createdJob(_, { input }) {
            input._id = users.length;
            users.push(input);
            console.log(input)
            return input
        }
    }
}
module.exports = resolvers;