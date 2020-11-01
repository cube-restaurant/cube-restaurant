# Other Todos

- [ ] create your own postgres docker image and create postgres file

  - file contains script to create multiple database with different users
    - prod server users does not have admin prevelieges
  - file install uuid extension on all databases
    `CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`

- @cube/backend - contain backend code
- @cube/abstract - contain schemas for DB and type graphql and other features
