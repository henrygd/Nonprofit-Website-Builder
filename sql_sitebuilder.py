import sqlite3


def init_db():
    confirm = raw_input('THIS WILL DELETE YOUR DB IF IT EXISTS. Are you sure you want to continue? [Y/n]')
    if confirm == 'y' or confirm == 'Y':
        print 'creating db...'
        with sqlite3.connect("sitebuildercontactinfo.db") as connection:
            c = connection.cursor()
            c.execute("DROP TABLE IF EXISTS contactinfo")
            c.execute("CREATE TABLE contactinfo(email TEXT, url TEXT)")
    else:
        print 'Exiting without making changes...'


def addvalues(newpost):
    with sqlite3.connect("sitebuildercontactinfo.db") as connection:
        c = connection.cursor()
        c.execute('INSERT INTO contactinfo VALUES(?, ?)', (newpost))
