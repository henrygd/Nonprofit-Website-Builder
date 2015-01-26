from flask import Flask, render_template, request, jsonify, send_file
import re
import sitebuilder
import sql_sitebuilder

app = Flask(__name__)


# returns home page at */makeawebsite
@app.route('/makeawebsite')
def websitebuilder():
    return render_template('sitebuilder.html')


# adds contact info to database
@app.route('/sitebuildercontactinfo', methods=['POST'])
def sitebuildercontactinfo():
    if request.form['siteurl'] == "" or request.form['email'] == "":
        return jsonify(result="error1")
    else:
        email, siteurl = request.form['email'], request.form['siteurl']
        goodemail = re.compile('[\w\.]+@\w+\.[\w\.]+')
        if goodemail.match(email):
            values = (email, siteurl)
            sql_sitebuilder.addvalues(values)
            return jsonify(result="success")
        else:
            return jsonify(result="error2")


# passes user variables to work function, returns generated
# site in preview iframe or as direct download + info modal
@app.route('/testsite', methods=['POST'])
def convert():
    content = sitebuilder.build(
        styles=request.form['style'],
        logo=request.form['logo'],
        background=request.form['background'],
        orgfont=request.form['orgfont']+'\n\t',
        showfont=request.form['showfont']+'\n\t',
        bodyfont=request.form['bodyfont']+'\n\t',
        butthov=request.form['butthov'],
        logocolor=request.form['logocolor'],
        barcolor=request.form['barcolor'],
        buttoncolor=request.form['buttoncolor'],
        navbartext=request.form['navbartext'],
        introtextcolor=request.form['introtextcolor'],
        aboutback=request.form['aboutback'],
        eventsback=request.form['eventsback'],
        contactback=request.form['contactback'],
        contacticons=request.form['contacticons'],
        linkcolor=request.form['linkcolor'],
        mapcoords=request.form['mapcoords'],
        twitter=request.form['twitter'],
        facebook=request.form['facebook'],
        youtube=request.form['youtube'],
        orgname=request.form['orgname'],
        navabout=request.form['navabout'],
        navevents=request.form['navevents'],
        navcontact=request.form['navcontact'],
        introtext=request.form['introtext'],
        abouthead=request.form['abouthead'],
        aboutsub=request.form['aboutsub'],
        aboutcont=request.form['aboutcont'],
        eventhead=request.form['eventhead'],
        contacthead=request.form['contacthead'],
        phone=request.form['phone'],
        address=request.form['address'],
        email=request.form['email'],
        mandrill_api=request.form['mandrill_api'],
        stripepk=request.form['stripepk'],
        cal_id=request.form['cal_id'],
        cal_api=request.form['cal_api'],
        eventstatus=request.form['eventstatus'],
        mapstatus=request.form['mapstatus']
        )
    if request.form['downloadstatus'] == "testbtn":
        with open('templates/test.html', 'w') as thefile:
            thefile.write(content)
        return jsonify(url='/preview', modal="#PreviewModal")
    else:
        with open('static/index.html', 'w') as thefile:
            thefile.write(content)
        return jsonify(url='/downloadsite', modal="#byeModal")


# preview iframe address
@app.route('/preview')
def preview():
    return render_template('test.html')


# sends site as attachment for download
@app.route('/downloadsite')
def downloadsite():
    return send_file('static/index.html', as_attachment=True)
