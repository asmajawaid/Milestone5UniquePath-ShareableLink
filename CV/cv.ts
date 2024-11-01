import jsPDF from 'jspdf';

const myName = localStorage.getItem("FullName");

window.addEventListener("load", () => {

  const design = localStorage.getItem("design");
  const email = localStorage.getItem("email");
  const phone = localStorage.getItem("phone");
  const address = localStorage.getItem("address");
  const pass = localStorage.getItem("pass");
  const inst = localStorage.getItem("inst");
  const degree = localStorage.getItem("degree");
  const pass2 = localStorage.getItem("pass2");
  const inst2 = localStorage.getItem("inst2");
  const degree2 = localStorage.getItem("degree2");
  const skill1 = localStorage.getItem("skill1");
  const skill2 = localStorage.getItem("skill2");
  const skill3 = localStorage.getItem("skill3");
  const skill4 = localStorage.getItem("skill4");
  const skill5 = localStorage.getItem("skill5");
  const skill6 = localStorage.getItem("skill6");
  const language = localStorage.getItem("language");
  const language2 = localStorage.getItem("language2");
  const startyear = localStorage.getItem("startyear");
  const endyear = localStorage.getItem("endyear");
  const company = localStorage.getItem("company");
  const companyloc = localStorage.getItem("companyloc");
  const job = localStorage.getItem("job");
  const achvmnt1 = localStorage.getItem("achvmnt1");
  const achvmnt2 = localStorage.getItem("achvmnt2");
  const achvmnt3 = localStorage.getItem("achvmnt3");
  const picture = localStorage.getItem("profil_Pic")

 let resName : any = document.getElementById('resName');
 resName.textContent = myName


 let resdesign : any =  document.getElementById('resdesign');
 resdesign.textContent = design

 let resPhone : any =  document.getElementById('resPhone');
 resPhone.textContent = phone

 let resEmail : any =  document.getElementById('resEmail');
 resEmail.textContent = email

 let resAddress : any =  document.getElementById('resAddress');
 resAddress.textContent = address

 let resPass : any =  document.getElementById('resPass');
 resPass.textContent = pass

 let resInst : any =  document.getElementById('resInst');
 resInst.textContent = inst

 let resDegree : any =  document.getElementById('resDegree');
 resDegree.textContent = degree

 let resPass2 : any =  document.getElementById('resPass2');
 resPass2.textContent = pass2

 let resInst2 : any =  document.getElementById('resInst2');
 resInst2.textContent = inst2

 let resDegree2 : any =  document.getElementById('resDegree2');
 resDegree2.textContent = degree2

 let resSkill1 : any =  document.getElementById('resSkill1');
 resSkill1.textContent = skill1

 let resSkill2 : any =  document.getElementById('resSkill2');
 resSkill2.textContent = skill2

 let resSkill3 : any =  document.getElementById('resSkill3');
 resSkill3.textContent =skill3

 let resSkill4 : any =  document.getElementById('resSkill4');
 resSkill4.textContent = skill4

 let resSkill5 : any =  document.getElementById('resSkill5');
 resSkill5.textContent = skill5

 let resSkill6 : any =  document.getElementById('resSkill6');
 resSkill6.textContent = skill6

 let resLang1 : any = document.getElementById('resLang1');
 resLang1.textContent = language

 let resLang2 : any = document.getElementById('resLang2');
 resLang2.textContent = language2

 let resStartYear : any = document.getElementById('resStartYear');
 resStartYear.textContent = startyear

 let resEndYear : any = document.getElementById('resEndYear');
 resEndYear.textContent = endyear

 let resCompany : any = document.getElementById('resCompany');
 resCompany.textContent = company

 let resCompanyLoc : any = document.getElementById('resCompanyLoc');
 resCompanyLoc.textContent = companyloc

 let resJob : any = document.getElementById('resJob');
 resJob.textContent = job

 let resachvmnt1 : any = document.getElementById('resachvmnt1');
 resachvmnt1.textContent = achvmnt1

 let resachvmnt2 : any = document.getElementById('resachvmnt2');
 resachvmnt2.textContent = achvmnt2

 let resachvmnt3 : any = document.getElementById('resachvmnt3');
 resachvmnt3.textContent = achvmnt3

 let resprofilePic : any = document.getElementById('resprofilePic');
 resprofilePic.src = picture



});


// print button
const printBtn = document.getElementById("printBtn");

printBtn?.addEventListener("click", () => {
  alert("Click 'Destination' select 'Save as PDF' and save it.")
  window.print();
  
  
});

// edit button
const editBtn = document.getElementById("editBtn");

editBtn?.addEventListener('click', ()=>{
  window.history.back()
})

//Shareable link button
let share_btn = document.getElementById('shareBtn');
let anc = document.getElementById('anc')
  let userName;
  if(myName){
    userName= myName.toLowerCase().replace(/\s+/g , "-")
  }else{
    userName = "user"
  }

  const baseUrl = "file:///F:/FinalHackathone/Milestone5/CV/cv.html";
  const uniqueUrl = `${baseUrl}?/${myName}`

  share_btn?.addEventListener('click', ()=> {
    anc?.setAttribute("href", uniqueUrl)
});


 let copyBtn = document.getElementById('copyBtn');
 copyBtn?.addEventListener('click',()=>{
  navigator.clipboard.writeText(uniqueUrl).then(()=>{
    alert("Copy successful")
  })
 })