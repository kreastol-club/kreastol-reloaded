CREATE DATABASE testdb;
\connect testdb;
CREATE SCHEMA testschema;
CREATE TABLE testschema.parent_table (
    id SERIAL PRIMARY KEY,
    name TEXT,
    description TEXT,
    created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
COMMENT ON TABLE testschema.parent_table IS
'Provide a description for your parent table.';
CREATE TABLE testschema.child_table (
    id SERIAL PRIMARY KEY,
    name TEXT,
    description TEXT,
    created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    parent_table_id INTEGER NOT NULL REFERENCES testschema.parent_table(id)
);
COMMENT ON TABLE testschema.child_table IS
'Provide a description for your child table.';