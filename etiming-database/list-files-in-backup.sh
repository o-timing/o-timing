
# oppskrift hentet fra: https://learn.microsoft.com/en-us/sql/linux/tutorial-restore-backup-in-sql-server-container?view=sql-server-ver16&tabs=prod

docker exec -it etiming-database-sqlserver-1 /opt/mssql-tools/bin/sqlcmd -S localhost \
   -U SA -P '<YourStrong!Passw0rd>' \
   -Q 'RESTORE FILELISTONLY FROM DISK = "/backup.bak"'
