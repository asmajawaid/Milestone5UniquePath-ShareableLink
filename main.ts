const FullName:any = document.getElementById('full-name');
const design:any = document.getElementById('design');
const email:any = document.getElementById('email');
const phone:any = document.getElementById('phone');
const address:any = document.getElementById('address');
const pass:any = document.getElementById('pass');
const inst:any = document.getElementById('inst');
const degree:any = document.getElementById('degree');
const pass2:any = document.getElementById('pass2');
const inst2:any = document.getElementById('inst2');
const degree2:any = document.getElementById('degree2');
const skill1:any = document.getElementById('skill-1');
const skill2:any = document.getElementById('skill-2');
const skill3:any = document.getElementById('skill-3');
const skill4:any = document.getElementById('skill-4');
const skill5:any = document.getElementById('skill-5');
const skill6:any = document.getElementById('skill-6');
const language:any = document.getElementById('language');
const language2:any = document.getElementById('language2');
const startyear:any = document.getElementById('start-year');
const endyear:any = document.getElementById('end-year');
const company:any = document.getElementById('company');
const companyloc:any = document.getElementById('company-loc');
const job:any = document.getElementById('job');
const achvmnt1:any = document.getElementById('achvmnt-1');
const achvmnt2:any = document.getElementById('achvmnt-2');
const achvmnt3:any = document.getElementById('achvmnt-3');
const pic:any = document.getElementById('pic')

const submitBtn = document.getElementById('submitBtn');
const resumeform = document.getElementById('resume-form');

resumeform?.addEventListener('submit', (e)=>{
     e.preventDefault()
     localStorage.setItem("FullName",FullName.value)
     localStorage.setItem("design",design.value)
     localStorage.setItem("email",email.value)
     localStorage.setItem("phone",phone.value)
     localStorage.setItem("address",address.value)
     localStorage.setItem("pass",pass.value)
     localStorage.setItem("inst",inst.value)
     localStorage.setItem("degree",degree.value)
     localStorage.setItem("pass2",pass2.value)
     localStorage.setItem("inst2",inst2.value)
     localStorage.setItem("degree2",degree2.value)
     localStorage.setItem("skill1",skill1.value)
     localStorage.setItem("skill2",skill2.value)
     localStorage.setItem("skill3",skill3.value)
     localStorage.setItem("skill4",skill4.value)
     localStorage.setItem("skill5",skill5.value)
     localStorage.setItem("skill6",skill6.value)
     localStorage.setItem("language",language.value)
     localStorage.setItem("language2",language2.value)
     localStorage.setItem("startyear",startyear.value);
     localStorage.setItem("endyear",endyear.value);
     localStorage.setItem("company",company.value);
     localStorage.setItem("companyloc",companyloc.value);
     localStorage.setItem("job",job.value);
     localStorage.setItem("achvmnt1",achvmnt1.value);
     localStorage.setItem("achvmnt2",achvmnt2.value);
     localStorage.setItem("achvmnt3",achvmnt3.value);

     if(pic.files && pic.files[0]){
          let reader = new FileReader()
          reader.addEventListener('load', ()=>{
               let textpic: any = reader.result
               localStorage.setItem("profil_Pic", textpic) 
          })
          reader.readAsDataURL(pic.files[0])
     }


     window.location.href= "./CV/cv.html"
     
})