var N=”#162F77”,B=”#3A6EDB”,Y=”#FFDE00”;
var WS=new Date(2026,4,11);
var DAY=[“MON”,“TUE”,“WED”,“THU”,“FRI”,“SAT”,“SUN”];
var DN2=[“Monday”,“Tuesday”,“Wednesday”,“Thursday”,“Friday”,“Saturday”,“Sunday”];
var MN=[“Jan”,“Feb”,“Mar”,“Apr”,“May”,“Jun”,“Jul”,“Aug”,“Sep”,“Oct”,“Nov”,“Dec”];
var DOTS={run:”#c8380a”,swim:”#1a5fad”,lift:”#1a7a45”,rest:”#4a4090”,bike:”#8a6a00”};
var TAGCSS={
swim:“background:rgba(26,95,173,0.1);color:#1a5fad;border:1px solid rgba(26,95,173,0.25)”,
lift:“background:rgba(26,122,69,0.1);color:#1a7a45;border:1px solid rgba(26,122,69,0.25)”,
run:“background:rgba(200,56,10,0.1);color:#c8380a;border:1px solid rgba(200,56,10,0.25)”,
rest:“background:rgba(74,64,144,0.1);color:#4a4090;border:1px solid rgba(74,64,144,0.25)”,
bike:“background:rgba(138,106,0,0.1);color:#8a6a00;border:1px solid rgba(138,106,0,0.25)”
};
var W=[
{t:“Easy Swim + Back & Biceps”,s:“Easy Swim - Upper Body”,tags:[“swim”,“lift”],
bq:“Active recovery - aerobic blood flow accelerates muscle repair from Durham. Every easy day protects the quality days ahead.”,
parts:{
cardio:{type:“swim”,lbl:“MORNING - PARKWEST POOL - 25M PER LENGTH”,sum:“Easy recovery swim. Low intensity, full body flush. HR under 120.”,
sets:[{n:“Warmup”,d:“Easy, any stroke, get loose”,l:“8 lengths”,m:“200m”},
{n:“Main Set - 6x4 lengths”,d:“30 sec rest, target 1:55-2:05 per 100m”,l:“24 lengths”,m:“600m”},
{n:“Cooldown”,d:“Slow, long strokes”,l:“8 lengths”,m:“200m”}],
tot:“40 lengths - 1000m - 25 min”,dl:“Distance (e.g. 1000m)”},
strength:{type:“lift”,lbl:“LUNCH - GYM - UPPER ONLY”,sum:“Pull-focused upper body. No legs.”,
ex:[{n:“Chest-Supported DB Row”,s:“3x8-10”},{n:“Lat Pulldown”,s:“3x8-10”},
{n:“Seated Cable Row”,s:“3x10-12”},{n:“Machine Rear Delt Fly”,s:“3x10-12”},
{n:“Dumbbell Curl”,s:“3x10-12”},{n:“Cable Curl”,s:“3x10-12”},{n:“21s”,s:“2 sets”}]}},
coach:“No legs today. Keep the swim relaxed.”},
{t:“Chest & Triceps”,s:“Upper Body - Push Day”,tags:[“lift”],
bq:“Pure upper body maintenance. 225 baseline protected. Legs get a full rest.”,
parts:{strength:{type:“lift”,lbl:“LUNCH - GYM”,sum:“Heavy push day. Protect your 225 bench baseline.”,
ex:[{n:“Flat Barbell Bench Press”,s:“4x5-6”,k:true},{n:“Incline DB Press”,s:“3x8-10”},
{n:“Machine Chest Press”,s:“3x10-12”},{n:“Cable Fly”,s:“3x12-15”},
{n:“Tricep Rope Pushdown”,s:“3x12”},{n:“Tricep Extension Machine”,s:“3x10-12”},{n:“Dips”,s:“2x10”}]}},
coach:“Full chest day. Hit 225. No running today.”},
{t:“Aerobic Swim”,s:“Pool - Zone 2”,tags:[“swim”],
bq:“Zone 2 swimming builds the same aerobic engine that carries you past mile 20.”,
parts:{cardio:{type:“swim”,lbl:“MORNING - PARKWEST POOL - 25M PER LENGTH”,sum:“Sustained aerobic effort. Zone 2 the entire way.”,
sets:[{n:“Warmup”,d:“Relaxed, settle into rhythm”,l:“8 lengths”,m:“200m”},
{n:“Main Set - 4x8 lengths”,d:“45 sec rest, target 1:50-2:00 per 100m”,l:“32 lengths”,m:“800m”},
{n:“Cooldown”,d:“Slow, wind it down”,l:“4 lengths”,m:“100m”}],
tot:“44 lengths - 1100m - 28 min”,dl:“Distance completed”}},
coach:“No gym today. Still aerobic - if joints flare, back off.”},
{t:“First Run Back”,s:“Road + Modified Legs”,tags:[“run”,“lift”],
bq:“This is a check-in run, not a training run. The data from today tells me how fast we progress next week.”,
parts:{
cardio:{type:“run”,lbl:“MORNING - ROAD”,sum:“First run since Durham. Flat route, no watch pressure, purely by feel.”,
stats:[{l:“Duration”,v:“20-25 min”,h:true},{l:“Pace”,v:“9:30+ per mi”,h:true},
{l:“HR Cap”,v:“140 bpm”},{l:“Surface”,v:“Flat only”},{l:“Walk breaks”,v:“Take freely”}],
dl:“Distance (mi)”,pl:“Avg pace”},
strength:{type:“lift”,lbl:“LUNCH - GYM - HALF VOLUME”,sum:“Reintroducing leg work at half volume. Hip abduction is non-negotiable.”,
ex:[{n:“Romanian Deadlift”,s:“2x8”},{n:“Bulgarian Split Squat”,s:“2x10”},
{n:“Hip Abduction Machine”,s:“2x15”,k:true},{n:“Seated Calf Raise”,s:“2x15”},
{n:“Single-Leg Glute Bridge”,s:“2x12”}]}},
coach:“Run is a check-in, not a workout. Any joint tweak - stop.”},
{t:“Shoulders & Arms”,s:“Light Upper - Pre-Long Run”,tags:[“lift”],
bq:“Light day by design. Legs rest ahead of Saturday. Face pulls protect shoulder health.”,
parts:{strength:{type:“lift”,lbl:“LUNCH - GYM - LIGHT DAY”,sum:“In and out in 40 minutes. Nothing heavy.”,
ex:[{n:“Shoulder Press Machine”,s:“3x10-12”},{n:“Machine Lateral Raise”,s:“3x12-15”},
{n:“Face Pulls”,s:“3x15”,k:true},{n:“EZ-Bar Curl”,s:“3x10-12”},
{n:“Cable Tricep Pushdown”,s:“3x12-15”},{n:“Cable Curl”,s:“2x12”}]}},
coach:“In and out in 40 min. Long run tomorrow.”},
{t:“Easy Run #2”,s:“Road - Run Only”,tags:[“run”],
bq:“Second run back. Aerobic base is the single most important predictor of marathon performance.”,
parts:{cardio:{type:“run”,lbl:“MORNING - ROAD - RUN ONLY”,sum:“Easy aerobic run. Conversational pace the entire way.”,
stats:[{l:“Duration”,v:“30-35 min”,h:true},{l:“Pace”,v:“9:00-9:30 per mi”,h:true},
{l:“HR Cap”,v:“145 bpm”},{l:“Feel”,v:“Conversational”},{l:“Gym”,v:“None today”}],
dl:“Distance (mi)”,pl:“Avg pace”}},
coach:“If Thursday felt good, step it up. No ego.”},
{t:“Full Rest”,s:“Complete Recovery”,tags:[“rest”],
bq:“Rest is training. Your body adapts and gets faster on recovery days. Non-negotiable.”,
parts:{},coach:“No running. No gym. No swimming. Sleep well.”}
];
var PLAN=[
{wk:“Week 1 - May 11-17”,b:“RECOVERY”,days:[
{d:“MON”,n:“Easy Swim + Back & Biceps”,dt:“1000m - 40 lengths - Upper lift”,bq:“Active recovery. Aerobic flush accelerates healing from Durham.”},
{d:“TUE”,n:“Chest & Triceps”,dt:“Bench baseline - Full push session”,bq:“Upper body only. 225 protected. Legs rest completely.”},
{d:“WED”,n:“Aerobic Swim”,dt:“1100m - 44 lengths - Zone 2”,bq:“Zone 2 swim builds the same engine that carries you past mile 20.”},
{d:“THU”,n:“First Run Back + Legs”,dt:“20-25 min - 9:30+/mi - Modified legs”,bq:“Check-in run only. Data from this run shapes all of next week.”},
{d:“FRI”,n:“Shoulders & Arms”,dt:“Light upper - Face pulls”,bq:“Light day. Legs rest ahead of Saturday.”},
{d:“SAT”,n:“Easy Run #2”,dt:“30-35 min - 9:00-9:30/mi”,bq:“Aerobic base is the number one predictor of marathon performance.”},
{d:“SUN”,n:“Full Rest”,dt:“No activity”,bq:“Rest is training. Body adapts on recovery days.”}
]},
{wk:“Week 2 - May 18-24”,b:“BASE”,days:[
{d:“MON”,n:“Easy Run + Posterior Chain”,dt:“30-35 min easy - Full leg session”,bq:“First full leg day. Hip abduction is your runners knee insurance.”},
{d:“TUE”,n:“Easy Run + Back & Biceps”,dt:“35-40 min - 8:45-9:15/mi”,bq:“Building aerobic volume. Consistent easy mileage is the foundation.”},
{d:“WED”,n:“Swim + Legs Heavy”,dt:“1200m - 48 lengths - Full legs”,bq:“Nordic hamstring curls start this week. Injury prevention.”},
{d:“THU”,n:“Easy Run + Chest & Triceps”,dt:“35-40 min - 8:45-9:15/mi”,bq:“Third run of the week. Mileage building steadily.”},
{d:“FRI”,n:“Bike + Shoulders & Arms”,dt:“18-22 mi - Alt: 45 min swim”,bq:“Cross-training aerobic capacity without run stress.”},
{d:“SAT”,n:“Long Run”,dt:“60-70 min - 8:30-9:00/mi”,bq:“First real long run since Durham. Practice fueling today.”},
{d:“SUN”,n:“Full Rest”,dt:“No activity”,bq:“Non-negotiable rest. Absorb the week.”}
]}
];
var lg={};
try{lg=JSON.parse(localStorage.getItem(“rtbv8”)||”{}”);}catch(e){}
function sv(){try{localStorage.setItem(“rtbv8”,JSON.stringify(lg));}catch(e){}}
var lc={},ef={};
function gst(i){
var d=lg[i];if(!d)return”none”;
var w=W[i],hc=!!(w.parts&&w.parts.cardio),hs=!!(w.parts&&w.parts.strength);
var c=d.c,s=d.s;
if(hc&&hs)return(c&&s)?“full”:(c||s)?“half”:“none”;
if(hc)return c?“full”:“none”;
if(hs)return s?“full”:“none”;
return”none”;
}
function gti(){var d=Math.floor((new Date()-WS)/86400000);return d<0?0:d>6?6:d;}
function gds(){return Math.max(0,Math.ceil((new Date(2026,10,7)-new Date())/86400000));}
function gts(){var n=new Date(),w=n.getDay(),i=w===0?6:w-1;return DN2[i]+”, “+MN[n.getMonth()]+” “+n.getDate();}
function tag(t){return ‘\x3Cspan class=“tag” style=”’+TAGCSS[t]+’”>’+t+”\x3C/span>”;}
function bqb(txt){return ‘\x3Cdiv class=“bqb”>\x3Cspan style=“font-size:14px;flex-shrink:0”>🎯\x3C/span>\x3Cdiv>\x3Cdiv class=“bqbl”>BQ Context\x3C/div>\x3Cdiv class=“bqbt”>’+txt+”\x3C/div>\x3C/div>\x3C/div>”;}
function showTab(id){
[“today”,“plan”,“progress”].forEach(function(t){
document.getElementById(“pg-”+t).classList.toggle(“on”,t===id);
document.getElementById(“nb-”+t).classList.toggle(“on”,t===id);
});
document.getElementById(“scroll”).scrollTop=0;
if(id===“progress”)rProg();
}
function rToday(){
var ti=gti(),w=W[ti];
var done=[0,1,2,3,4,5,6].filter(function(i){return gst(i)===“full”;}).length;
var ld=lg[ti]||{};
var hlog=””;
if(ld.c||ld.s){
hlog=’\x3Cdiv class=“hlog”>’;
if(ld.c)hlog+=’\x3Cdiv class=“hlc”>Cardio ‘+ld.c.e+”/10”+(ld.c.d?” - “+ld.c.d:””)+”\x3C/div>”;
if(ld.s)hlog+=’\x3Cdiv class=“hls”>Strength ‘+ld.s.e+”/10\x3C/div>”;
hlog+=”\x3C/div>”;
}
var tagsH=w.tags.map(tag).join(””);
var rows=””;
for(var i=0;i<7;i++){
var st=gst(i),iT=i===ti;
var dt2=new Date(WS.getTime()+i*86400000);
var dot=DOTS[W[i].tags[0]]||”#b0bbd0”;
var d2=lg[i]||{};
var chkcls=“dc”+(st===“full”?” full”:st===“half”?” half”:””);
var chktxt=st===“full”?”✓”:st===“half”?”◑”:””;
var badges=””;
if(d2.c||d2.s){
badges=’\x3Cdiv class=“dbs”>’;
if(d2.c)badges+=’\x3Cdiv class=“lbc”>Cardio ‘+d2.c.e+”/10”+(d2.c.d?” - “+d2.c.d:””)+”\x3C/div>”;
if(d2.s)badges+=’\x3Cdiv class=“lbs”>Str ‘+d2.s.e+”/10\x3C/div>”;
badges+=”\x3C/div>”;
}
rows+=’\x3Cdiv class=“dr’+(iT?” tod”:””)+’” onclick=“oSh(’+i+’)”>’;
rows+=’\x3Cdiv class=“drm”>’;
rows+=’\x3Cdiv class=”’+chkcls+’”>’+chktxt+”\x3C/div>”;
rows+=’\x3Cdiv class=“dtd” style=“background:’+dot+’”>\x3C/div>’;
rows+=’\x3Cdiv class=“di”>\x3Cdiv class=“dl”>’+DAY[i]+” - “+MN[dt2.getMonth()]+” “+dt2.getDate()+(iT?” - TODAY”:””)+”\x3C/div>”;
rows+=’\x3Cdiv class=“dn’+(st===“full”?” done”:””)+’”>’+W[i].t+”\x3C/div>\x3C/div>”;
rows+=’\x3Cdiv class=“dch”>›\x3C/div>\x3C/div>’+badges+”\x3C/div>”;
}
document.getElementById(“pg-today”).innerHTML=
‘\x3Cdiv class=“dbar”>’+gts()+” - Recovery Week\x3C/div>”+
‘\x3Cdiv style=“padding:13px 13px 0”>’+
‘\x3Cdiv class=“hero” onclick=“oSh(’+ti+’)”>’+
‘\x3Cdiv class=“htop”>\x3Cdiv>\x3Cdiv class=“htitle”>’+w.t+’\x3C/div>\x3Cdiv class=“hsub”>’+w.s+”\x3C/div>\x3C/div>”+
‘\x3Cdiv class=“harr”>›\x3C/div>\x3C/div>’+
‘\x3Cdiv class=“htags”>’+tagsH+”\x3C/div>”+
‘\x3Cdiv class=“hstats”>’+
‘\x3Cdiv class=“sp”>\x3Cdiv class=“spl”>Phase\x3C/div>\x3Cdiv class=“spv”>Recovery\x3C/div>\x3C/div>’+
‘\x3Cdiv class=“sp”>\x3Cdiv class=“spl”>Week\x3C/div>\x3Cdiv class=“spv”>May 11-17\x3C/div>\x3C/div>’+
‘\x3Cdiv class=“sp”>\x3Cdiv class=“spl”>Status\x3C/div>\x3Cdiv class=“spv”>’+(gst(ti)===“full”?“Done”:“Active”)+”\x3C/div>\x3C/div>\x3C/div>”+
hlog+”\x3C/div>\x3C/div>”+
‘\x3Cdiv class=“shdr”>\x3Cdiv class=“st”>This Week\x3C/div>\x3Cdiv class=“sm”>’+done+”/7 done\x3C/div>\x3C/div>”+
‘\x3Cdiv class=“wkl”>’+rows+”\x3C/div>”;
}
function rPlan(){
var h=’\x3Cdiv class=“plan-hdr”>\x3Cdiv class=“plan-title”>2-Week Plan\x3C/div>\x3Cdiv class=“plan-sub”>Recovery to Base - Tap any day\x3C/div>\x3C/div>’;
PLAN.forEach(function(wk,wi){
h+=’\x3Cdiv class=“pw”>\x3Cdiv class=“pwh”>\x3Cdiv class=“pwn”>’+wk.wk+’\x3C/div>\x3Cdiv class=“pwb”>’+wk.b+”\x3C/div>\x3C/div>”;
h+=’\x3Cdiv class=“pll”>’;
wk.days.forEach(function(day,di){
h+=’\x3Cdiv class=“pr” onclick=“oPl(’+wi+’,’+di+’)”>\x3Cdiv class=“prd”>’+day.d+”\x3C/div>”;
h+=’\x3Cdiv class=“prc”>\x3Cdiv class=“prn”>’+day.n+’\x3C/div>\x3Cdiv class=“prdt”>’+day.dt+”\x3C/div>\x3C/div>”;
h+=’\x3Cdiv class=“pra”>›\x3C/div>\x3C/div>’;
});
h+=”\x3C/div>\x3C/div>”;
});
document.getElementById(“pg-plan”).innerHTML=h;
}
function rProg(){
var runMi=0,swimM=0,bikeMi=0,liftN=0;
for(var i=0;i<7;i++){
var d=lg[i];if(!d)continue;
var tags=W[i].tags;
if(d.c&&d.c.d){var v=parseFloat(d.c.d);if(!isNaN(v)){if(tags.indexOf(“run”)>=0)runMi+=v;else if(tags.indexOf(“swim”)>=0)swimM+=v;else if(tags.indexOf(“bike”)>=0)bikeMi+=v;}}
if(d.s&&d.s.e)liftN++;
}
var h=’\x3Cdiv class=“prog-hdr”>\x3Cdiv class=“prog-title”>Progress\x3C/div>\x3Cdiv class=“prog-sub”>Post-Durham - Road to Boston\x3C/div>\x3C/div>’;
h+=’\x3Cdiv class=“shdr”>\x3Cdiv class=“st”>This Week\x3C/div>\x3Cdiv class=“sm”>May 11-17\x3C/div>\x3C/div>’;
h+=’\x3Cdiv class=“wstats”>’;
[{ic:”🏃”,v:runMi.toFixed(1),u:“miles”,l:“Running”,c:”#c8380a”},
{ic:”🏊”,v:Math.round(swimM),u:“meters”,l:“Swimming”,c:”#1a5fad”},
{ic:”🚲”,v:bikeMi.toFixed(1),u:“miles”,l:“Biking”,c:”#8a6a00”},
{ic:”🏋”,v:liftN,u:“sessions”,l:“Strength”,c:”#1a7a45”}
].forEach(function(s){
h+=’\x3Cdiv class=“wsc” style=“border-top:3px solid ‘+s.c+’”>’;
h+=’\x3Cdiv class=“wsci”>’+s.ic+”\x3C/div>”;
h+=’\x3Cdiv class=“wscv”>’+s.v+”\x3C/div>”;
h+=’\x3Cdiv class=“wscu”>’+s.u+”\x3C/div>”;
h+=’\x3Cdiv class=“wscl”>’+s.l+”\x3C/div>\x3C/div>”;
});
h+=”\x3C/div>”;
h+=’\x3Cdiv class=“shdr”>\x3Cdiv class=“st”>Season\x3C/div>\x3C/div>’;
h+=’\x3Cdiv class=“sgrid”>’;
[{l:“Current PR”,v:“3:10:55”,c:”#7a85a0”,sz:20},
{l:“BQ Target”,v:“2:57:59”,c:N,sz:20,note:“2:01 buffer”,bt:N},
{l:“Days to Indy”,v:gds(),c:”#0e1628”,sz:30,u:“days”},
{l:“VO2 Max”,v:“59”,c:”#1a7a45”,sz:30,u:“Garmin est”}
].forEach(function(s){
h+=’\x3Cdiv class=“sc”’+(s.bt?’ style=“border-top:3px solid ‘+s.bt+’”’:’’)+’>’;
h+=’\x3Cdiv class=“scl”>’+s.l+’\x3C/div>’;
h+=’\x3Cdiv class=“scv2” style=“font-size:’+s.sz+‘px;color:’+s.c+’”>’+s.v+’\x3C/div>’;
if(s.u)h+=’\x3Cdiv class=“scu”>’+s.u+”\x3C/div>”;
if(s.note)h+=’\x3Cdiv class=“scn”>’+s.note+”\x3C/div>”;
h+=”\x3C/div>”;
});
h+=”\x3C/div>”;
h+=’\x3Cdiv class=“ic”>\x3Cdiv class=“icl”>Race History\x3C/div>’;
[{r:“Chicago Marathon”,t:“3:32:44”},
{r:“Durham Marathon”,t:“3:10:55”,sub:”-21:49 PR”,sc:”#1a7a45”},
{r:“Indianapolis Monumental”,t:“sub-2:57:59”,sub:“BQ Target - 6:46/mi”,sc:B,hi:true}
].forEach(function(r){
h+=’\x3Cdiv class=“rr”>\x3Cdiv>\x3Cdiv class=“rn’+(r.hi?” hi”:””)+’”>’+r.r+”\x3C/div>”;
if(r.sub)h+=’\x3Cdiv class=“rs” style=“color:’+r.sc+’”>’+r.sub+”\x3C/div>”;
h+=”\x3C/div>”;
h+=’\x3Cdiv class=“rt’+(r.hi?” hi”:””)+’”>’+r.t+”\x3C/div>\x3C/div>”;
});
h+=”\x3C/div>”;
h+=’\x3Cdiv class=“fn”>BQ standard M18-34 is 3:00:00. Target 2:57:59 gives a 2:01 buffer for field cuts and registration timing.\x3C/div>’;
document.getElementById(“pg-progress”).innerHTML=h;
}
function oSh(idx){
if(!lc[idx])lc[idx]={};
if(!ef[idx])ef[idx]={c:null,s:null};
document.getElementById(“wkov”).classList.add(“on”);
document.body.style.overflow=“hidden”;
rSh(idx);
}
function cSh(){
document.getElementById(“wkov”).classList.remove(“on”);
document.body.style.overflow=””;
rToday();
}
document.getElementById(“wkov”).addEventListener(“click”,function(e){if(e.target===this)cSh();});
function rSh(idx){
var w=W[idx],d=lg[idx]||{};
var hb=w.parts.cardio&&w.parts.strength;
var ir=Object.keys(w.parts).length===0;
var lci=lc[idx]||{},efi=ef[idx]||{};
var dt2=new Date(WS.getTime()+idx*86400000);
var dts=DN2[idx]+”, “+MN[dt2.getMonth()]+” “+dt2.getDate();
var iT=idx===gti();
var tagsH=w.tags.map(tag).join(””);
var h=’\x3Cdiv class=“shhnd”>\x3Cdiv class=“shbar”>\x3C/div>\x3C/div>’;
h+=’\x3Cdiv class=“shhdr”>\x3Cdiv>’;
h+=’\x3Cdiv class=“shdate”>’+dts+(iT?” - Today”:””)+”\x3C/div>”;
h+=’\x3Cdiv class=“shtitle”>’+w.t+”\x3C/div>”;
h+=’\x3Cdiv class=“shsub”>’+w.s+”\x3C/div>”;
h+=’\x3Cdiv style=“display:flex;gap:5px;flex-wrap:wrap”>’+tagsH+”\x3C/div>\x3C/div>”;
h+=’\x3Cbutton class=“shclose” onclick=“cSh()”>✕\x3C/button>\x3C/div>’;
h+=’\x3Cdiv class=“shbody”>’;
if(w.bq)h+=bqb(w.bq);
if(ir){h+=’\x3Cdiv class=“restbig”>OFF\x3C/div>\x3Cdiv class=“restsub”>No running. No gym. No swimming.\x3Cbr>Sleep well.\x3C/div>’;}
if(w.parts.cardio){
if(hb)h+=’\x3Cdiv class=“pdiv”>\x3Cdiv class=“pdivc” style=“background:#1a5fad”>\x3C/div>\x3Cdiv class=“pdivl” style=“color:#1a5fad”>Cardio\x3C/div>\x3C/div>’;
if(w.parts.cardio.sum)h+=’\x3Cdiv class=“psum”>’+w.parts.cardio.sum+”\x3C/div>”;
h+=’\x3Cdiv class=“wsec”>\x3Cdiv class=“slbl”>’+w.parts.cardio.lbl+”\x3C/div>”;
if(w.parts.cardio.type===“swim”){
w.parts.cardio.sets.forEach(function(s){
h+=’\x3Cdiv class=“swr”>\x3Cdiv>\x3Cdiv class=“swn”>’+s.n+’\x3C/div>\x3Cdiv class=“swd”>’+s.d+’\x3C/div>\x3C/div>’;
h+=’\x3Cdiv style=“text-align:right;flex-shrink:0”>\x3Cdiv class=“swl”>’+s.l+’\x3C/div>\x3Cdiv class=“swm”>’+s.m+”\x3C/div>\x3C/div>\x3C/div>”;
});
if(w.parts.cardio.tot)h+=’\x3Cdiv class=“swt”>\x3Cspan class=“swtl”>Total\x3C/span>\x3Cspan class=“swtv”>’+w.parts.cardio.tot+”\x3C/span>\x3C/div>”;
}
if(w.parts.cardio.type===“run”){
w.parts.cardio.stats.forEach(function(s){
h+=’\x3Cdiv class=“rnrw”>\x3Cspan class=“rnl”>’+s.l+’\x3C/span>\x3Cspan class=“rnv’+(s.h?” h”:””)+’”>’+s.v+”\x3C/span>\x3C/div>”;
});
}
h+=”\x3C/div>”;
}
if(w.parts.strength){
if(hb)h+=’\x3Cdiv class=“pdiv”>\x3Cdiv class=“pdivc” style=“background:#1a7a45”>\x3C/div>\x3Cdiv class=“pdivl” style=“color:#1a7a45”>Strength\x3C/div>\x3C/div>’;
if(w.parts.strength.sum)h+=’\x3Cdiv class=“psum”>’+w.parts.strength.sum+”\x3C/div>”;
h+=’\x3Cdiv class=“wsec”>\x3Cdiv class=“slbl”>’+w.parts.strength.lbl+”\x3C/div>”;
w.parts.strength.ex.forEach(function(e,ei){
var chk=lci[ei]||false;
h+=’\x3Cdiv class=“lrow”>’;
h+=’\x3Cdiv class=“lchk’+(chk?” on”:””)+’” onclick=“tLift(’+idx+’,’+ei+’)”>’+(chk?”✓”:””)+”\x3C/div>”;
h+=’\x3Cspan class=“lname’+(e.k?” k”:””)+(chk?” dk”:””)+’”>’+e.n+”\x3C/span>”;
h+=’\x3Cspan class=“lsets’+(e.k?” k”:””)+’”>’+e.s+”\x3C/span>\x3C/div>”;
});
h+=”\x3C/div>”;
}
if(w.coach)h+=’\x3Cdiv class=“cn”>\x3Cdiv class=“cnl”>Coach\x3C/div>\x3Cdiv class=“cnt”>’+w.coach+”\x3C/div>\x3C/div>”;
if(!ir){
h+=’\x3Cdiv class=“logsec”>\x3Cdiv class=“logsl”>Log Workout\x3C/div>’;
if(w.parts.cardio){
var ec=d.c,curC=efi.c||(ec&&ec.e)||null;
var isRun=w.parts.cardio.type===“run”;
h+=’\x3Cdiv class=“plc plcc”>\x3Cdiv class=“plcl plclc”>Log Cardio\x3C/div>’;
h+=’\x3Cdiv class=“effl”>Effort 1-10\x3C/div>\x3Cdiv class=“effr”>’;
for(var n=1;n<=10;n++)h+=’\x3Cbutton class=“eb’+(curC===n?” ebc”:””)+’” onclick=“sEf(’+idx+’,“c”,’+n+’)”>’+n+”\x3C/button>”;
h+=”\x3C/div>”;
h+=’\x3Cdiv class=“fg’+(isRun?” fg2”:””)+’”>’;
h+=’\x3Cdiv>\x3Cdiv class=“fl”>’+(w.parts.cardio.dl||“Distance”)+’\x3C/div>\x3Cinput class=“fi” id=“di’+idx+’” value=”’+(ec&&ec.d||””)+’” placeholder=”’+(isRun?“3.1 mi”:“1000m”)+’”>\x3C/div>’;
if(isRun)h+=’\x3Cdiv>\x3Cdiv class=“fl”>Avg Pace\x3C/div>\x3Cinput class=“fi” id=“pi’+idx+’” value=”’+(ec&&ec.p||””)+’” placeholder=“9:24 /mi”>\x3C/div>’;
h+=”\x3C/div>”;
h+=’\x3Cbutton class=“lb’+(ec?’ lbsv’:curC?’ lbrc’:’’)+’” data-idx=”’+idx+’” data-part=“c” onclick=“hLog(this)”>’+(ec?‘Cardio Logged’:‘Log Cardio’)+’\x3C/button>\x3C/div>’;
}
if(w.parts.strength){
var es=d.s,curS=efi.s||(es&&es.e)||null;
h+=’\x3Cdiv class=“plc plcs”>\x3Cdiv class=“plcl plcls”>Log Strength\x3C/div>’;
h+=’\x3Cdiv class=“effl”>Effort 1-10\x3C/div>\x3Cdiv class=“effr”>’;
for(var ns=1;ns<=10;ns++)h+=’\x3Cbutton class=“eb’+(curS===ns?” ebs”:””)+’” onclick=“sEf(’+idx+’,“s”,’+ns+’)”>’+ns+”\x3C/button>”;
h+=”\x3C/div>”;
h+=’\x3Cbutton class=“lb’+(es?’ lbsv’:curS?’ lbrs’:’’)+’” data-idx=”’+idx+’” data-part=“s” onclick=“hLog(this)”>’+(es?‘Strength Logged’:‘Log Strength’)+’\x3C/button>\x3C/div>’;
}
h+=”\x3C/div>”;
}
h+=”\x3C/div>”;
document.getElementById(“wksh”).innerHTML=h;
document.getElementById(“wksh”).scrollTop=0;
}
function tLift(idx,ei){if(!lc[idx])lc[idx]={};lc[idx][ei]=!lc[idx][ei];rSh(idx);}
function sEf(idx,p,n){if(!ef[idx])ef[idx]={c:null,s:null};ef[idx][p]=n;rSh(idx);}
// lPart replaced by hLog

// lPart replaced by hLog
function oPl(wi,di){
var day=PLAN[wi].days[di];
var h=’\x3Cdiv class=“shhnd”>\x3Cdiv class=“shbar”>\x3C/div>\x3C/div>’;
h+=’\x3Cdiv class=“shhdr”>\x3Cdiv>\x3Cdiv class=“shdate”>’+day.d+”\x3C/div>”;
h+=’\x3Cdiv class=“shtitle” style=“font-size:19px”>’+day.n+”\x3C/div>\x3C/div>”;
h+=’\x3Cbutton class=“shclose” onclick=“cPl()”>✕\x3C/button>\x3C/div>’;
h+=’\x3Cdiv class=“shbody”>\x3Cdiv style=“font-size:13px;color:#7a85a0;margin-bottom:14px;line-height:1.5”>’+day.dt+”\x3C/div>”;
h+=bqb(day.bq)+”\x3C/div>”;
document.getElementById(“plsh”).innerHTML=h;
document.getElementById(“plov”).classList.add(“on”);
document.body.style.overflow=“hidden”;
}
function cPl(){document.getElementById(“plov”).classList.remove(“on”);document.body.style.overflow=””;}
document.getElementById(“plov”).addEventListener(“click”,function(e){if(e.target===this)cPl();});
function hLog(btn){
var idx=parseInt(btn.getAttribute(‘data-idx’));
var p=btn.getAttribute(‘data-part’);
var efi=ef[idx]||{},d=lg[idx]||{};
var e2=efi[p]||(d[p]&&d[p].e);
if(!e2)return;
var di2=document.getElementById(‘di’+idx);
var pi2=document.getElementById(‘pi’+idx);
if(!lg[idx])lg[idx]={};
lg[idx][p]={e:e2,d:di2?di2.value:’’,p:pi2?pi2.value:’’};
sv();rSh(idx);
}
rToday();rPlan();rProg();
