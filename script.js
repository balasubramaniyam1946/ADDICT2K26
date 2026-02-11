// Scroll Reveal Observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

// Rules and Content Data
// Rules and Content Data
const rulesData = {
    'ADZAP': ["Each team shall consist of a maximum of two (2) members(Individual Registration is MUST).",
              "Two to three topics will be provided on the spot to each team.",
              "Participants are required to design and advertise a product based on the given topic.",
              "A total of 30 minutes will be allotted for poster creation and 10 minutes will be provided for presentation and advertisement of the created product."
               ,"The use of AI-generated images or graphics is strictly prohibited.",
                    "Participants must create their poster only on the platform provided by the organizers.",
                    "Posters and presentations must not include political, religious, or controversial content.",
                    "The poster creation process must begin from scratch; the use of pre-designed templates, previously created content, or stored materials is not permitted."],
    
                    'PAPER PRISM': ["Each team must consist of 2 members only(Individual Registration is MUST).", "The PowerPoint presentation should contain exactly 10 slides.", "The presentation duration will be 5 minutes per team.","An additional 2 minutes will be allotted for queries and discussion.","The PPT must be submitted on or before 23.02.2026.","A confirmation email will be sent to the participants who are shortlisted/selected."],
    
                    'INNOVIZ': ["Participants can only participate individually.",
                "The quiz consists of two exciting rounds, centred on Computer Science and Engineering concepts.",
                "Every question comes with a ticking clock — think fast and answer before time runs out!",
                "Only the top performers will advance, shortlisted based on accuracy and response time.",
                "The theme for the second round will be revealed on the spot — stay sharp!",
                "Winners will be announced during the grand valediction ceremony.",
                "Any form of malpractice or misconduct will lead to immediate disqualification from the competition.",
                "Be punctual — late arrivals may forfeit their opportunity to participate."
],
    'BUG BUSTERS': ["The task is to identify and debug the given code within the allotted time.",
                   "Mobile phones and external resources are not allowed during the event.",
                  "Any form of malpractice or rule violation will lead to immediate disqualification.",
                  "Shortlisting will be done based on accuracy and response time.",
                  "Participants must strictly follow the instructions provided by the event coordinators.",
                  "The competition is conducted in two stages of debugging.",
                  "Winners will be announced during the valedictory ceremony"
],
    'CYBERNOVA': ["Abstracts must be submitted on or before 23.02.2026.(Individual Registration is MUST)",
                "Participation   is allowed individually or in teams of a maximum of two members.",
                "Projects may be based on hardware or software models.",
                "Each participant/team will be given 5 minutes for presentation.",
                "2 minutes will be allotted for Q&A with the judges.",
                "A working demo or prototype is mandatory.",
                "Software projects can be demonstrated through live execution.",    
                "Participants must report 30 minutes before the event starts.",
                "Participants should bring their own laptop and required software/tools.",
                "Projects must be original and self-developed; copied projects will lead to disqualification."

]
};

// Target Date: March 3, 2026, 9:00 AM
const targetDate = new Date("March 3, 2026 09:00:00").getTime();

// Countdown Timer Update
setInterval(() => {
    const distance = targetDate - new Date().getTime();
    const d = Math.floor(distance / 86400000);
    const h = Math.floor((distance % 86400000) / 3600000);
    const m = Math.floor((distance % 3600000) / 60000);
    const s = Math.floor((distance % 60000) / 1000);
    
    document.getElementById("countdown").innerText = `${d}D : ${h}H : ${m}M : ${s}S`;
}, 1000);
// Modal Control Functions
function openModal(title, venue, coordinatorName, phone) {
    // 1. Update Text Content
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalVenue').innerText = `VENUE: ${venue}`;
    document.getElementById('modalCoords').innerText = `COORD: ${coordinatorName}`;

    // 2. Fix: Clean the phone number for links
    // Removes spaces or dashes to ensure the link works
    const cleanPhone = phone.toString().replace(/\D/g, ''); 

    // Update Call Link
    document.getElementById('callCoordinator').href = `tel:${cleanPhone}`;
    
    // Update WhatsApp Link (Adds '91' for India country code)
    document.getElementById('whatsappCoordinator').href = `https://wa.me/91${cleanPhone}`;
    
    // 3. Populate Rules
    const list = document.getElementById('modalRules');
    list.innerHTML = "";
    
    // Safety check: if rules exist for this title, show them
    const rules = (typeof rulesData !== 'undefined' && rulesData[title]) ? rulesData[title] : ["Contact coordinator for details."];
    
    rules.forEach(r => {
        const li = document.createElement('li');
        li.innerText = `${r}`;
        list.appendChild(li);
    });
    
    // 4. Show Modal
    document.getElementById('rulesModal').style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Prevent background scroll
}

function closeModal() { 
    document.getElementById('rulesModal').style.display = 'none'; 
    document.body.style.overflow = 'auto'; // Re-enable scroll
}

// Close on outside click
window.onclick = e => { 
    if(e.target.id === 'rulesModal') closeModal(); 
}