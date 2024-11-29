import pymysql

# Replace with your local database credentials
connection = pymysql.connect(
    host='localhost',
    user='admin',         # Your MySQL username
    password='admin',      # Your MySQL password
    database='fms', # The database name you want to access
    port=3306                      # Default MySQL port
)

# Test connection
try:
    with connection.cursor() as cursor:
        cursor.execute("SHOW TABLES;")
        tables = cursor.fetchall()
        print("Tables in database:", tables)
except Exception as e:
    print("Connection failed:", e)
finally:
    connection.close()
