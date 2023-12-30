docker exec -it etiming-database-sqlserver-1 /opt/mssql-tools/bin/sqlcmd \
   -S localhost -U SA -P '<YourStrong!Passw0rd>' \
   -Q 'RESTORE DATABASE nytest_2023 FROM DISK = "/backup.bak" WITH MOVE "nytest_2023" TO "/var/opt/mssql/data/nytest_2023.mdf", MOVE "nytest_2023_log" TO "/var/opt/mssql/data/nytest_2023_log.ldf"'