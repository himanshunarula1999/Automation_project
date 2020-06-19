let puppeteer = require("puppeteer");
let fs = require("fs");
let credentialsFile = process.argv[2];

(async function () {
    let data = await fs.promises.readFile(credentialsFile, "utf-8");
    let credentials = JSON.parse(data);
    login = credentials.login;
    name = credentials.Name;
    email = credentials.Email;
    pwd = credentials.CreatePassword;
    mono = credentials.Mobilenumber;
    currloc = credentials.CurrentLocation;
    state = credentials.State;
    inst = credentials.Institute;
    skill = credentials.Skills;
    skill1 = credentials.First;
    ver1 = credentials.Ver1;
    skill2 = credentials.Second;
    ver2 = credentials.Ver2;
    skill3 = credentials.Third;
    ver3 = credentials.Ver3;
    
    //starts browser
    let browser = await puppeteer.launch({ //launch Chromium command
        headless: false,
        defaultViewport: null,
        args: ["--start-maximized", "--incognito"]
    });
    //creates an empty page
    //await browser.newPage();
    //returns array of currently open tab
    let numberOfPages = await browser.pages();
    let tab = numberOfPages[0];
    //goto page
//1.
    await tab.goto(login, {
        waitUntil: "networkidle0"
    });
//2.
    await tab.waitForSelector(".action-btn.fresh");
    await Promise.all([tab.waitForNavigation({
        waitUntil : "networkidle2"
    }), tab.click(".action-btn.fresh")]);
//3.
    await tab.waitForSelector('#fname');
    await tab.type("#fname", name,{delay: 100});
    
    await tab.waitForSelector('#email');
    await tab.type("#email", email,{delay: 100});
    
    await tab.waitForSelector('.input.ng-pristine.ng-untouched.ng-valid.ng-valid-minlength.ng-valid-maxlength');
    await tab.type(".input.ng-pristine.ng-untouched.ng-valid.ng-valid-minlength.ng-valid-maxlength", pwd,{delay: 100});
    
    await tab.waitForSelector('.input.mobile.ng-pristine.ng-untouched.ng-valid.ng-valid-maxlength');
    await tab.type(".input.mobile.ng-pristine.ng-untouched.ng-valid.ng-valid-maxlength", mono,{delay: 100});
    
    await tab.waitForSelector('.sugInp');
    await tab.type(".sugInp", currloc,{delay: 100});

    await tab.waitForSelector("input[ng-focus='showDrop()']");
    await tab.click("input[ng-focus='showDrop()']",{delay: 100});

    await tab.waitForSelector("li[ng-repeat-done-notification='171']");
    await tab.click("li[ng-repeat-done-notification='171']",{delay: 100});

    await tab.waitForSelector(".uploadCV input[type=file]");
    await tab.waitFor(1000);
    const inputUploadHandle = await tab.$(".uploadCV input[type=file]");
    let fileToUpload = 'C:/Users/narul/OneDrive/Pictures/khari baoli,delhi/Documents/GTBIT/AutomationProject/file/adiyut.docx';
    inputUploadHandle.uploadFile(fileToUpload);

    await tab.waitFor(2000);

    await tab.waitForSelector(".submit-box>.primary-btn");
    await Promise.all([tab.waitForNavigation({
        waitUntil : "networkidle2"
    }), tab.click(".submit-box>.primary-btn")]);

    /*********************Education Details***********************/
//4.
    await tab.waitForSelector("input[tnmdependent='educationTypeId_0']");
    await tab.click("input[tnmdependent='educationTypeId_0']",{delay: 100});
    
    await tab.waitForSelector("li[ng-repeat-done-notification='1']");
    await tab.click("li[ng-repeat-done-notification='1']",{delay: 100});
    
    await tab.waitForSelector("input[tnmdependent='courseId_0']");
    await tab.click("input[tnmdependent='courseId_0']",{delay: 100});
    
    await tab.waitForSelector("li[ng-repeat-done-notification='12']");
    await tab.click("li[ng-repeat-done-notification='12']",{delay: 100});
    
    await tab.waitForSelector("input[tnmdependent='specId_0']");
    await tab.click("input[tnmdependent='specId_0']",{delay: 100});

    await tab.waitForSelector("li[ng-repeat-done-notification='9']");
    await tab.click("li[ng-repeat-done-notification='9']",{delay: 100});

    await tab.waitForSelector("input[ng-focus='onInputFocus()']");
    await tab.type("input[ng-focus='onInputFocus()']", inst, {delay: 100});

    await tab.waitForSelector(".profileToggle.toggleBox>.customRadioLbl");
    await tab.click(".profileToggle.toggleBox>.customRadioLbl" ,{delay: 100});

    await tab.waitForSelector("input[tnmdependent='yearOfCompletion_0']");
    await tab.click("input[tnmdependent='yearOfCompletion_0']" ,{delay: 100});

    await tab.waitForSelector("li[ng-repeat-done-notification='2021']");
    await tab.click("li[ng-repeat-done-notification='2021']" ,{delay: 100});

    await tab.waitForSelector("input[tnmdependent='keySkills']");
    await tab.type("input[tnmdependent='keySkills']", skill, {delay: 100});

    await tab.waitForSelector("li[ng-repeat-done-notification='Web Technologies']");
    await tab.click("li[ng-repeat-done-notification='Web Technologies']",{delay: 100});

    await tab.waitForSelector(".submit-box>.primary-btn");
    await Promise.all([tab.waitForNavigation({
        waitUntil : "networkidle2"
    }), tab.click(".submit-box>.primary-btn")]);

    await tab.waitFor(3000);

    /**************************Additionals Details***********************/

    await tab.waitForSelector(".ddIcon.srchTxt");
    await tab.click(".ddIcon.srchTxt" ,{delay: 100});

    await tab.waitForSelector("li[ng-repeat-done-notification='261']");
    await tab.click("li[ng-repeat-done-notification='261']" ,{delay: 100});
//
    await tab.waitForSelector(".ddIcon.srchTxt");
    await tab.click(".ddIcon.srchTxt" ,{delay: 100});

    await tab.waitForSelector("li[ng-repeat-done-notification='290']");
    await tab.click("li[ng-repeat-done-notification='290']" ,{delay: 100});
//
    await tab.waitForSelector(".ddIcon.srchTxt");
    await tab.click(".ddIcon.srchTxt" ,{delay: 100});

    await tab.waitForSelector("li[ng-repeat-done-notification='289']");
    await tab.click("li[ng-repeat-done-notification='289']" ,{delay: 100});
//
    await tab.waitForSelector("label[data-content='Permanent']");
    await tab.click("label[data-content='Permanent']" ,{delay: 100});
    //
    await tab.waitForSelector("label[data-content='Full Time']");
    await tab.click("label[data-content='Full Time']", {delay:100});
    //
    await tab.waitForSelector("input[name='skill0']");
    await tab.type("input[name='skill0']",skill1,{delay:100});
    await tab.waitFor(1000);

    await tab.waitForSelector("li[ng-repeat-done-notification='HTML']");
    await tab.click("li[ng-repeat-done-notification='HTML']",{delay:100});

    await tab.waitForSelector("input[name='version0']");
    await tab.type("input[name='version0']",ver1,{delay:100});

    await tab.waitForSelector("input[name='lastUsedYear0']");
    await tab.click("input[name='lastUsedYear0']", {delay:100});

    await tab.waitForSelector("li[ng-repeat-done-notification='2018']");
    await tab.click("li[ng-repeat-done-notification='2018']", {delay:100});

    await tab.waitForSelector("input[name='expYear0']");
    await tab.click("input[name='expYear0']", {delay:100});

    await tab.waitForSelector("li[ng-repeat-done-notification='2']");
    await tab.click("li[ng-repeat-done-notification='2']", {delay:100});

    await tab.waitForSelector("a[ng-if='status.showAddSkillBtn']");
    await tab.click("a[ng-if='status.showAddSkillBtn']", {delay:100});
    await tab.waitFor(1000);

    /************************** */
    await tab.waitForSelector("input[name='skill1']");
    await tab.type("input[name='skill1']",skill2,{delay:100});

    await tab.waitFor(1000);

    await tab.waitForSelector("li[ng-repeat-done-notification='CSS']");
    await tab.click("li[ng-repeat-done-notification='CSS']",{delay:100});

    await tab.waitForSelector("input[name='version1']");
    await tab.type("input[name='version1']",ver2,{delay:100});

    await tab.waitForSelector("input[name='lastUsedYear1']");
    await tab.click("input[name='lastUsedYear1']", {delay:100});

    await tab.waitForSelector("li[ng-repeat-done-notification='2019']");
    await tab.click("li[ng-repeat-done-notification='2019']", {delay:100});

    await tab.waitForSelector("input[name='expYear1']");
    await tab.click("input[name='expYear1']", {delay:100});

    await tab.waitForSelector("li[ng-repeat-done-notification='1']");
    await tab.click("li[ng-repeat-done-notification='1']", {delay:100});

    await tab.waitForSelector("a[ng-if='status.showAddSkillBtn']");
    await tab.click("a[ng-if='status.showAddSkillBtn']", {delay:100});
    await tab.waitFor(1000);

    /************************************* */

    await tab.waitForSelector("input[name='skill2']");
    await tab.type("input[name='skill2']",skill3,{delay:100});

    await tab.waitFor(1000);

    await tab.waitForSelector("li[ng-repeat-done-notification='JavaScript']");
    await tab.click("li[ng-repeat-done-notification='JavaScript']",{delay:100});

    await tab.waitForSelector("input[name='version2']");
    await tab.type("input[name='version2']",ver3,{delay:100});

    await tab.waitForSelector("input[name='lastUsedYear2']");
    await tab.click("input[name='lastUsedYear2']", {delay:100});

    await tab.waitForSelector("li[ng-repeat-done-notification='2020']");
    await tab.click("li[ng-repeat-done-notification='2020']", {delay:100});

    await tab.waitForSelector("input[name='expYear2']");
    await tab.click("input[name='expYear2']", {delay:100});

    await tab.waitForSelector("li[ng-repeat-done-notification='0']");
    await tab.click("li[ng-repeat-done-notification='0']", {delay:100});
    // //
    await tab.waitForSelector("label[data-content='Male']");
    await tab.click("label[data-content='Male']", {delay:100});

    await tab.waitForSelector(".submit-box>.primary-btn");
    await Promise.all([tab.waitForNavigation({
        waitUntil : "networkidle2"
    }), tab.click(".submit-box>.primary-btn")]);

    await tab.waitForSelector(".pdlf18");
    await Promise.all([tab.waitForNavigation({
        waitUntil : "networkidle2"
    }), tab.click(".pdlf18")]);

    await tab.waitFor(5000);

    await tab.waitForSelector(".feedbackBtn.waves-effect.waves-light.transparent");
    await Promise.all([tab.waitForNavigation({
        waitUntil : "networkidle2"
    }), tab.click(".feedbackBtn.waves-effect.waves-light.transparent")]);
})()