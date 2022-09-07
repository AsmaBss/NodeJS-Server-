const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
  GraphQLSchema,
  GraphQLNonNull,
  GraphQLFloat,
  GraphQLInputObjectType,
} = require("graphql");
const Db = require("./db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const TypeFacture = new GraphQLObjectType({
  name: "Type",
  description: "This represents FactureType",
  fields: () => {
    return {
      id: {
        type: GraphQLInt,
        resolve(type) {
          return type.id;
        },
      },
      type: {
        type: GraphQLString,
        resolve(type) {
          return type.type;
        },
      },
      numHeight: {
        type: GraphQLFloat,
        resolve(type) {
          return type.numHeight;
        },
      },
      numWidth: {
        type: GraphQLFloat,
        resolve(type) {
          return type.numWidth;
        },
      },
      numX: {
        type: GraphQLFloat,
        resolve(type) {
          return type.numX;
        },
      },
      numY: {
        type: GraphQLFloat,
        resolve(type) {
          return type.numY;
        },
      },
      dateHeight: {
        type: GraphQLFloat,
        resolve(type) {
          return type.dateHeight;
        },
      },
      dateWidth: {
        type: GraphQLFloat,
        resolve(type) {
          return type.dateWidth;
        },
      },
      dateX: {
        type: GraphQLFloat,
        resolve(type) {
          return type.dateX;
        },
      },
      dateY: {
        type: GraphQLFloat,
        resolve(type) {
          return type.dateY;
        },
      },
      topayHeight: {
        type: GraphQLFloat,
        resolve(type) {
          return type.topayHeight;
        },
      },
      topayWidth: {
        type: GraphQLFloat,
        resolve(type) {
          return type.topayWidth;
        },
      },
      topayX: {
        type: GraphQLFloat,
        resolve(type) {
          return type.topayX;
        },
      },
      topayY: {
        type: GraphQLFloat,
        resolve(type) {
          return type.topayY;
        },
      },
    };
  },
});

const Factures = new GraphQLObjectType({
  name: "Factures",
  description: "This respresents Factures",
  fields: () => {
    return {
      id: {
        type: GraphQLInt,
        resolve(factures) {
          return factures.id;
        },
      },
      num: {
        type: GraphQLInt,
        resolve(factures) {
          return factures.num;
        },
      },
      date: {
        type: GraphQLString,
        resolve(factures) {
          return factures.date;
        },
      },
      topay: {
        type: GraphQLFloat,
        resolve(factures) {
          return factures.topay;
        },
      },
      type: {
        type: GraphQLString,
        resolve(factures) {
          return factures.type;
        },
      },
      status: {
        type: GraphQLString,
        resolve(factures) {
          return factures.status;
        },
      },
    };
  },
});

const Users = new GraphQLObjectType({
  name: "Users",
  description: "This respresents Users",
  fields: () => {
    return {
      id: {
        type: GraphQLInt,
        resolve(users) {
          return users.id;
        },
      },
      firstname: {
        type: GraphQLString,
        resolve(users) {
          return users.firstname;
        },
      },
      lastname: {
        type: GraphQLString,
        resolve(users) {
          return users.lastname;
        },
      },
      email: {
        type: GraphQLString,
        resolve(users) {
          return users.email;
        },
      },
      password: {
        type: GraphQLString,
        resolve(users) {
          return users.password;
        },
      },
      birthDate: {
        type: GraphQLString,
        resolve(users) {
          return users.birthDate;
        },
      },
      address: {
        type: GraphQLString,
        resolve(users) {
          return users.address;
        },
      },
      image: {
        type: GraphQLString,
        resolve(users) {
          return users.image;
        },
      },
    };
  },
});

//
const AuthData = new GraphQLObjectType({
  name: "auth",
  fields: () => {
    return {
      userId: {
        type: GraphQLInt,
      },
      token: {
        type: GraphQLString,
      },
      tokenExpiration: {
        type: GraphQLInt,
      },
    };
  },
});

const Query = new GraphQLObjectType({
  name: "Query",
  description: "This is a root query",
  fields: () => {
    return {
      getAllTypes: {
        type: new GraphQLList(TypeFacture),
        args: {
          id: {
            type: GraphQLInt,
          },
          numHeight: {
            type: GraphQLFloat,
          },
          numWidth: {
            type: GraphQLFloat,
          },
          numX: {
            type: GraphQLFloat,
          },
          numY: {
            type: GraphQLFloat,
          },
          dateHeight: {
            type: GraphQLFloat,
          },
          dateWidth: {
            type: GraphQLFloat,
          },
          dateX: {
            type: GraphQLFloat,
          },
          dateY: {
            type: GraphQLFloat,
          },
          topayHeight: {
            type: GraphQLFloat,
          },
          topayWidth: {
            type: GraphQLFloat,
          },
          topayX: {
            type: GraphQLFloat,
          },
          topayY: {
            type: GraphQLFloat,
          },
        },
        resolve(root, args) {
          return Db.models.type.findAll({ where: args });
        },
      },
      getByType: {
        type: new GraphQLList(TypeFacture),
        args: {
          id: {
            type: GraphQLInt,
          },
        },
        resolve(root, args) {
          return Db.models.type.findAll({ where: args });
        },
      },
      getAllFactures: {
        type: new GraphQLList(Factures),
        args: {
          id: {
            type: GraphQLInt,
          },
          num: {
            type: GraphQLInt,
          },
          date: {
            type: GraphQLString,
          },
          topay: {
            type: GraphQLFloat,
          },
          type: {
            type: GraphQLString,
          },
          status: {
            type: GraphQLString,
          },
        },
        resolve(root, args, req) {
          if (!req.isAuth) {
            throw new Error("Unauthenticated!");
          }
          return Db.models.factures.findAll({ where: args });
        },
      },
      getFacturesById: {
        type: new GraphQLList(Factures),
        args: {
          id: {
            type: GraphQLInt,
          },
        },
        resolve(root, args) {
          return Db.models.factures.findAll({ where: args });
        },
      },
      getFacturesByType: {
        type: new GraphQLList(Factures),
        args: {
          type: {
            type: GraphQLString,
          },
        },
        resolve(root, args) {
          return Db.models.factures.findAll({ where: args });
        },
      },
      getFacturesByStatus: {
        type: new GraphQLList(Factures),
        args: {
          status: {
            type: GraphQLString,
          },
        },
        resolve(root, args) {
          return Db.models.factures.findAll({ where: args });
        },
      },
      getAllUsers: {
        type: new GraphQLList(Users),
        args: {
          id: {
            type: GraphQLInt,
          },
          firstname: {
            type: GraphQLString,
          },
          lastname: {
            type: GraphQLString,
          },
          email: {
            type: GraphQLString,
          },
          password: {
            type: GraphQLString,
          },
          birthDate: {
            type: GraphQLString,
          },
          address: {
            type: GraphQLString,
          },
          image: {
            type: GraphQLString,
          },
        },
        resolve(root, args) {
          return Db.models.users.findAll({ where: args });
        },
      },
      getUserById: {
        type: new GraphQLList(Users),
        args: {
          id: {
            type: GraphQLInt,
          },
        },
        resolve(root, args) {
          return Db.models.users.findAll({ where: args });
        },
      },
      login: {
        type: AuthData,
        args: {
          email: {
            type: GraphQLString,
          },
          password: {
            type: GraphQLString,
          },
        },
        async resolve(root, { email, password }) {
          //args
          const user = await Db.models.users.findOne({
            where: { email: email },
            //where: { email: args.email },
          });
          if (!user) {
            throw new Error("User does not exist !");
          }
          console.log("password = ", password);
          console.log("user.password = ", user.password);

          const isEqual = await bcrypt.compare(
            password,
            //{ password: args.password },
            user.password
          );
          console.log(isEqual);
          if (!isEqual) {
            throw new Error("Password is incorrect !");
          }
          const token = jwt.sign(
            { userId: user.id, email: user.email },
            "somesupersecretkey",
            {
              expiresIn: "1h",
            }
          );
          return { userId: user.id, token: token, tokenExpiration: 1 };
        },
      },
    };
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  description: "Functions to create stuff",
  fields() {
    return {
      updateTypeFacture: {
        type: TypeFacture,
        args: {
          values: {
            type: new GraphQLInputObjectType({
              name: "TypeFactureInput",
              fields: () => ({
                numHeight: {
                  type: new GraphQLNonNull(GraphQLFloat),
                },
                numWidth: {
                  type: new GraphQLNonNull(GraphQLFloat),
                },
                numX: {
                  type: new GraphQLNonNull(GraphQLFloat),
                },
                numY: {
                  type: new GraphQLNonNull(GraphQLFloat),
                },
                dateHeight: {
                  type: new GraphQLNonNull(GraphQLFloat),
                },
                dateWidth: {
                  type: new GraphQLNonNull(GraphQLFloat),
                },
                dateX: {
                  type: new GraphQLNonNull(GraphQLFloat),
                },
                dateY: {
                  type: new GraphQLNonNull(GraphQLFloat),
                },
                topayHeight: {
                  type: new GraphQLNonNull(GraphQLFloat),
                },
                topayWidth: {
                  type: new GraphQLNonNull(GraphQLFloat),
                },
                topayX: {
                  type: new GraphQLNonNull(GraphQLFloat),
                },
                topayY: {
                  type: new GraphQLNonNull(GraphQLFloat),
                },
              }),
            }),
          },
          options: {
            type: new GraphQLInputObjectType({
              name: "TypeFactureIdInput",
              fields: () => ({
                id: {
                  type: new GraphQLNonNull(GraphQLInt),
                },
              }),
            }),
          },
        },
        resolve(_, args) {
          return Db.models.type.update(args.values, { where: args.options });
        },
      },
      addSonede: {
        type: Factures,
        args: {
          num: {
            type: new GraphQLNonNull(GraphQLInt),
          },
          date: {
            type: new GraphQLNonNull(GraphQLString),
          },
          topay: {
            type: new GraphQLNonNull(GraphQLFloat),
          },
          type: {
            type: new GraphQLNonNull(GraphQLString),
          },
          status: {
            type: new GraphQLNonNull(GraphQLString),
          },
        },
        resolve(_, args) {
          return Db.models.factures.create({
            num: args.num,
            date: args.date,
            topay: args.topay,
            type: args.type,
            status: args.status,
          });
        },
      },
      addUser: {
        type: Users,
        args: {
          firstname: {
            type: new GraphQLNonNull(GraphQLString),
          },
          lastname: {
            type: new GraphQLNonNull(GraphQLString),
          },
          email: {
            type: new GraphQLNonNull(GraphQLString),
          },
          password: {
            type: new GraphQLNonNull(GraphQLString),
          },
          birthDate: {
            type: new GraphQLNonNull(GraphQLString),
          },
          address: {
            type: new GraphQLNonNull(GraphQLString),
          },
          image: {
            type: new GraphQLNonNull(GraphQLString),
          },
        },
        async resolve(_, args) {
          const existingUser = await Db.models.users.findOne({
            where: { email: args.email },
          });
          if (existingUser) {
            throw new Error("User exists already.");
          }
          const hashedPassword = await bcrypt.hash(args.password, 12);

          return Db.models.users.create({
            firstname: args.firstname,
            lastname: args.lastname,
            email: args.email,
            password: hashedPassword,
            birthDate: args.birthDate,
            address: args.address,
            image: args.image,
          });
        },
      },
      updateUser: {
        type: Users,
        args: {
          values: {
            type: new GraphQLInputObjectType({
              name: "UserInput",
              fields: () => ({
                firstname: {
                  type: new GraphQLNonNull(GraphQLString),
                },
                lastname: {
                  type: new GraphQLNonNull(GraphQLString),
                },
                email: {
                  type: new GraphQLNonNull(GraphQLString),
                },
                birthDate: {
                  type: new GraphQLNonNull(GraphQLString),
                },
                address: {
                  type: new GraphQLNonNull(GraphQLString),
                },
                image: {
                  type: new GraphQLNonNull(GraphQLString),
                },
              }),
            }),
          },
          options: {
            type: new GraphQLInputObjectType({
              name: "UserIdInput",
              fields: () => ({
                id: {
                  type: new GraphQLNonNull(GraphQLInt),
                },
              }),
            }),
          },
        },
        resolve(_, args) {
          return Db.models.users.update(args.values, { where: args.options });
        },
      },
    };
  },
});

const schema = new GraphQLSchema({
  query: Query,
  mutation: Mutation,
});

module.exports = schema;

/*mutation {
  updateTypeFacture(
    values: {numHeight: 10, numWidth: 10, numX: 10, numY: 10, 
      dateHeight: 10, dateWidth: 10, dateX: 10, dateY: 10, 
      topayHeight: 10, topayWidth: 10, topayX: 10, topayY: 10}, 
    options: {id: 1}) {
    id
  }
}*/

/*mutation addSonede {
  addSonede(num:50, date:"09-08-2022", topay:50){
    id
  }
}*/

/*login(email:"asma@gmail.com", password:"asma"){
    userId
    token
    tokenExpiration
  }
*/
/*
mutation addUSer(
    $firstname: String!
    $lastname: String!
    $password: String!
    $email: String!
    $birthDate: String!
    $address: String!
    $image: String!
  ) {
    addUser(
      firstname: $firstname
      lastname: $lastname
      email: $email
      password: $password
      birthDate: $birthDate
      address: $address
      image: $image
    ) {
      id
      firstname
      lastname
      email
      password
      birthDate
      address
      image
    }
  }
*/

/* 
mutation addUser {
  addUser(
    firstname: "asma",
    lastname:"asma",
    password:"asma",
    email:"asmabs@gmail.com",
    birthDate:"10/08/1998",
    address:"grombalia",
    image:"asmaaaa.png"
  ){
    id
  }
}
*/
