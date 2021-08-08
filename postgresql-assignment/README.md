# Initial Setup

```bash
# This will start a local Postgres instance in Docker and remove it when done
docker run --name my-postgres -e POSTGRES_PASSWORD=mysecretpassword -p 5432:5432 -d --rm postgres:13-alpine

# This will enter into the running instance and log you into the psql client as 'postgres' user
docker exec -it -u postgres my-postgres psql
```

```sql
-- create a new database to create table in
CREATE DATABASE unique_words;

-- connect to the created database
\c unique_words;
```

# Run the assignment

You can run the SQL statements in *assignment.sql* now