window.EXAM_DATA = {
  meta: { testNumber: 'ETS-PT3' },

  // ── MODULE 1 ────────────────────────────────────────────────────────────────
  m1: {
    r1: {
      segs: [
        "Conservation is the effort to protect plants and animals that are endangered because of human activities. Conservationists ",
        " endangered ",
        " by ",
        " areas ",
        " they ",
        " live ",
        ". Conservationists ",
        " educate ",
        " public ",
        " the ",
        " of preserving the natural world. Conservation is based on research about wildlife and ecosystems that aims to understand their needs and the threats they face.",
        " By taking care of the environment, conservationists help ensure a healthy planet for future generations."
      ],
      blanks: [
        { prefix: "sa",     suffix: "ve",      ans: "save"       },
        { prefix: "spe",    suffix: "cies",    ans: "species"    },
        { prefix: "crea",   suffix: "ting",    ans: "creating"   },
        { prefix: "wh",     suffix: "ere",     ans: "where"      },
        { prefix: "c",      suffix: "an",      ans: "can"        },
        { prefix: "saf",    suffix: "ely",     ans: "safely"     },
        { prefix: "al",     suffix: "so",      ans: "also"       },
        { prefix: "t",      suffix: "he",      ans: "the"        },
        { prefix: "ab",     suffix: "out",     ans: "about"      },
        { prefix: "impor",  suffix: "tance",   ans: "importance" }
      ]
    },
    reading: {
      texts: [
        {
          title: "Maintenance Notice",
          tag: "Email",
          content: "Subject: Maintenance Notice\n\nDear Mr. Brown,\n\nWe are pleased that you are considering our facility for your mother's birthday party.\n\nOur maintenance team is scheduled to paint your apartment's living room on March 11 starting at 9:00 a.m. We ask that you leave the apartment and not return until one hour after the painters have finished at 12:00 p.m.\n\nBest regards,\nAnna Davis",
          qi: [0, 1]
        },
        {
          title: "Welcome to the Library Quiet Zone!",
          tag: "Notice",
          content: "This area is specifically designated for quiet reading and study to ensure a peaceful environment for all patrons. Please adhere to the following guidelines:\n\n1. Noise Levels: Please keep noise to a minimum. This includes refraining from loud conversations and phone calls.\n\n2. Electronic Devices: Ensure that all electronic devices, such as phones and laptops, are set to silent mode. The volume on headphones must be kept low.\n\n3. Conversations: If you need to have a conversation, please conduct it quietly or proceed to another area of the library.\n\n4. Music and Media: Listening to music or watching videos without headphones is not allowed. Please keep the volume of headphones at a level that only you can hear.\n\n5. Respect for Others: Be mindful of those around you who are studying or reading. Your cooperation helps maintain a serene environment for everyone.",
          qi: [2, 3, 4]
        },
        {
          title: "Jet Stream Dynamics",
          tag: "Academic Passage",
          content: "The jet stream is a fast-moving ribbon of air high in the atmosphere that affects global weather. Flowing west to east at speeds of up to 200 miles per hour, it forms due to the temperature contrast between cold polar air and warm tropical air, which creates pressure differences that generate strong winds. In the northern hemisphere, when the jet stream dips southward, it brings cold air and storms to lower latitudes.\n\nThe jet stream also influences cyclones and anticyclones, affecting precipitation and wind patterns. The jet stream's dynamics are influenced by factors like the Earth's rotation and uneven heating of its surface. Seasonal changes play a role; it's stronger in winter due to the greater temperature contrast between the poles and the equator. Understanding the jet stream's behavior helps meteorologists predict weather and plan for climate events.\n\nRecent research shows that climate change is impacting the jet stream. The warming Arctic reduces the temperature difference between polar and tropical air masses, which may weaken the jet stream. A weaker jet stream can lead to slower-moving weather systems, resulting in prolonged periods of extreme weather, such as heatwaves or heavy rainfall.",
          qi: [5, 6, 7, 8, 9]
        }
      ],
      qs: [
        { q: "What room in the apartment will be painted?", opts: ["The kitchen", "The dining room", "The living room", "The bedroom"], ans: 2 },
        { q: "When can Mr. Brown return to the apartment?", opts: ["At 9:00 AM", "At 11:00 AM", "At 12:00 PM", "At 1:00 PM"], ans: 3 },
        { q: "What can be concluded about the library?", opts: ["It has areas that are not specifically designated as quiet zones.", "It has received numerous complaints about noise levels.", "It is located on the campus of a university.", "It holds a large collection of film and music recordings."], ans: 0 },
        { q: "The phrase \"adhere to\" in the opening paragraph is closest in meaning to", opts: ["notice", "read", "follow", "admire"], ans: 2 },
        { q: "What is indicated about headphones?", opts: ["They are not permitted in the library's quiet zone.", "They are only allowed for use with smartphones and laptop computers.", "They may not be shared between two users.", "They should be kept at a low volume."], ans: 3 },
        { q: "What causes the formation of the jet stream?", opts: ["The behavior of cyclones", "The uneven heating of the Earth's surface", "The difference in temperature between air masses", "The temperature changes that occur seasonally"], ans: 2 },
        { q: "How does the jet stream affect weather systems in the northern hemisphere when it dips southward?", opts: ["It brings warmer air to lower latitudes.", "It leads to more stable conditions.", "It brings storms to places further south.", "It brings cyclones to higher latitudes."], ans: 2 },
        { q: "What is one of the main factors influencing the jet stream's behavior?", opts: ["The Earth's rotation", "The presence of cyclones", "The amount of precipitation", "The direction of wind patterns"], ans: 0 },
        { q: "What does the author suggest about the impact of climate change on the jet stream?", opts: ["It will have no significant effect on the jet stream.", "It is reducing the temperature difference between polar and tropical air masses.", "It is causing the jet stream to move faster.", "It is increasing the temperature contrast between the poles and the equator."], ans: 1 },
        { q: "The word \"prolonged\" in the passage is closest in meaning to", opts: ["extended", "seasonal", "rapid", "short-term"], ans: 0 }
      ]
    }
  },

  // ── MODULE 2 ────────────────────────────────────────────────────────────────
  m2: {
    r1: {
      segs: [
        "Economics is the study of how societies allocate resources and make decisions about production, distribution, and consumption. It ",
        " the behavior ",
        " governments, ",
        ", and ",
        " in ",
        " marketplace. ",
        " economics ",
        " not ",
        " for ",
        " who ",
        " to become economists or bankers. Gaining a basic understanding of economic concepts, like supply and demand, inflation, and employment, benefits everyone.",
        " It enables us to make informed decisions and understand the broader economic forces that shape our daily lives."
      ],
      blanks: [
        { prefix: "exam",   suffix: "ines",    ans: "examines"    },
        { prefix: "o",      suffix: "f",       ans: "of"          },
        { prefix: "busin",  suffix: "esses",   ans: "businesses"  },
        { prefix: "indiv",  suffix: "iduals",  ans: "individuals" },
        { prefix: "t",      suffix: "he",      ans: "the"         },
        { prefix: "Stud",   suffix: "ying",    ans: "Studying"    },
        { prefix: "i",      suffix: "s",       ans: "is"          },
        { prefix: "ju",     suffix: "st",      ans: "just"        },
        { prefix: "th",     suffix: "ose",     ans: "those"       },
        { prefix: "asp",    suffix: "ire",     ans: "aspire"      }
      ]
    },
    reading: {
      texts: [
        {
          title: "Medical Appointment",
          tag: "Email",
          content: "Subject: Medical appointment\n\nDear Ms. Patel,\n\nYour appointment at Lakeside Medical Center is scheduled for May 10 at 3:00 P.M. Please arrive 15 minutes early for paperwork. You will be seen by Dr. Liu. Click the link below to confirm. To reschedule or cancel, call us at 756-8793.\n\nRegards,\nBrittany Jones",
          qi: [0, 1]
        },
        {
          title: "Riverdale Parks Department — Volunteer Opportunity",
          tag: "Advertisement",
          content: "Riverdale Parks Department seeks dedicated volunteers to assist with weekend nature programs for families.\n\nThe programs will begin on May 1.\n\nVolunteers must be available Saturdays or Sundays, 9 A.M. to 4 P.M., and complete a four-hour training session before starting.\n\nTraining sessions are scheduled for the week of April 15.\n\nPrevious experience with children preferred but not required.\n\nResponsibilities include leading nature walks, supervising craft activities, and helping with educational demonstrations.\n\nApplication deadline: March 15.\n\nBackground check required for all accepted volunteers.\n\nContact Sarah Mitchell at 555-0199 for more information.",
          qi: [2, 3, 4]
        },
        {
          title: "The Golden Age of Television",
          tag: "Academic Passage",
          content: "The Golden Age of Television is often considered to have occurred during the 1950s and 1960s, when TV became a dominant cultural force. This era was marked by groundbreaking shows that experimented with new formats and storytelling techniques.\n\nDuring this time period, TV saw the rise of anthology series, which presented different stories and characters in each episode, in contrast to traditional ongoing narratives. One influential anthology series was The Twilight Zone, which blended science fiction, horror, and drama in thought-provoking ways. Sitcoms reflecting everyday life, like I Love Lucy, became a cultural phenomenon. Despite its simple format, the show tackled complex social issues including gender roles and family dynamics. There was also a new focus on live broadcasts, providing viewers with real-time coverage of events and entertainers.\n\nHowever, the Golden Age was not without challenges. TV networks navigated the balance between artistic innovation and commercial pressures. Advertisers sought to influence content to appeal to mass audiences, which sometimes clashed with creative visions. Nonetheless, the period left an indelible mark on the television industry, setting standards for future programming and contributing to the medium's evolution.",
          qi: [5, 6, 7, 8, 9]
        }
      ],
      qs: [
        { q: "What time should Ms. Patel arrive for her appointment?", opts: ["10:00 AM", "2:45 PM", "3:00 PM", "3:15 PM"], ans: 1 },
        { q: "How can Ms. Patel cancel her appointment?", opts: ["By replying to the e-mail", "By clicking a link", "By calling a phone number", "By sending a text message"], ans: 2 },
        { q: "What is this advertisement mainly about?", opts: ["Career opportunities at the Riverdale Parks Department", "Educational programs for children", "Volunteer opportunities for community members", "Training courses for nature guides"], ans: 2 },
        { q: "What must volunteers do before they can start working?", opts: ["Submit references from previous employers", "Complete training and pass a background check", "Demonstrate experience working with children", "Commit to working both Saturday and Sunday"], ans: 1 },
        { q: "When is the latest someone can apply for this program?", opts: ["March 15th", "April 15th", "May 1st", "May 9th"], ans: 0 },
        { q: "The word \"dominant\" in the passage is closest in meaning to", opts: ["relevant", "favorite", "leading", "entertaining"], ans: 2 },
        { q: "Why does the author mention The Twilight Zone?", opts: ["To illustrate the popularity of science fiction during the Golden Age", "To highlight the innovative nature of anthology series", "To discuss the impact of horror on television", "To compare different types of TV formats"], ans: 1 },
        { q: "What does the author suggest about sitcoms like I Love Lucy?", opts: ["They made TV less popular during the Golden Age", "They focused on people's daily lives.", "They reduced the influence of advertisers", "They were more popular than anthology series"], ans: 1 },
        { q: "What is the relationship between paragraphs 2 and 3?", opts: ["Paragraph 3 expands on the challenges mentioned in paragraph 2.", "Paragraph 3 provides examples of the formats discussed in paragraph 2.", "Paragraph 3 introduces a new issue that was not covered in paragraph 2.", "Paragraph 3 contradicts the success of TV shows mentioned in paragraph 2."], ans: 2 },
        { q: "Why does the author mention advertisers in the passage?", opts: ["To explain a challenge faced by TV networks", "To point out how TV shows were funded at the time", "To illustrate the role of commercials during live broadcasts", "To criticize the quality of programming during the Golden Age"], ans: 0 }
      ]
    }
  },

  // ── WRITING ─────────────────────────────────────────────────────────────────

  // w1: prefix = pre-filled text shown BEFORE the chip area (not arranged by student)
  //     suffix = pre-filled text shown AFTER the chip area (not arranged by student)
  //     words  = chips available to arrange (may include one distractor)
  //     ans    = the part the student must arrange (excluding prefix and suffix)
  w1: [
    {
      ctx:    "I'm planning to study abroad next year.",
      prefix: "",
      suffix: " to visit.",
      words:  ["you", "which", "planning", "countries", "in Europe", "are", "plan"],
      ans:    "Which countries in Europe are you planning"
    },
    {
      ctx:    "I'm excited to go camping this weekend.",
      prefix: "",
      suffix: " near the campground?",
      words:  ["that", "you", "have", "black bears", "live", "heard"],
      ans:    "Have you heard that black bears live"
    },
    {
      ctx:    "I'm planning to take a photography class.",
      prefix: "What type",
      suffix: "?",
      words:  ["the", "interests", "more", "you", "photography", "most", "of"],
      ans:    "of photography interests you the most"
    },
    {
      ctx:    "I'm thinking of adopting a dog this summer.",
      prefix: "Which breed",
      suffix: "?",
      words:  ["of dog", "you", "do", "plan", "to adopt", "planning"],
      ans:    "of dog do you plan to adopt"
    },
    {
      ctx:    "I'm going to start writing a biography.",
      prefix: "Which historical figure",
      suffix: "?",
      words:  ["have", "about", "to write", "chosen", "you", "choose"],
      ans:    "have you chosen to write about"
    },
    {
      ctx:    "I'm moving to a new city next month.",
      prefix: "",
      suffix: "?",
      words:  ["to move", "from here", "away", "why", "have", "chosen", "you"],
      ans:    "Why have you chosen to move away from here"
    },
    {
      ctx:    "I'm planning to start a new project at work.",
      prefix: "",
      suffix: "?",
      words:  ["to complete", "the new assignment", "when", "expect", "you", "do"],
      ans:    "When do you expect to complete the new assignment"
    },
    {
      ctx:    "I'm going to submit my application today.",
      prefix: "Have",
      suffix: "?",
      words:  ["the position", "applied", "your coworkers", "any", "has", "of", "for"],
      ans:    "any of your coworkers applied for the position"
    },
    {
      ctx:    "I'm attending a friend's wedding next week.",
      prefix: "",
      suffix: " afterward?",
      words:  ["plan to attend", "the wedding reception", "you", "do"],
      ans:    "Do you plan to attend the wedding reception"
    },
    {
      ctx:    "I had a great time at the dinner party last night.",
      prefix: "Did",
      suffix: "?",
      words:  ["serve", "they", "the main course", "before", "any appetizers"],
      ans:    "they serve any appetizers before the main course"
    }
  ],

  w2: {
    situation: "You are a member of the neighborhood association, and you have noticed that the local park needs some maintenance. You decide to contact the association president, Mr. Williams, to discuss the issues and offer a suggestion.",
    tasks: [
      "Describe the maintenance issue you have observed in the park.",
      "Explain why it is important to address the issue.",
      "Make a suggestion for how to deal with the issue."
    ],
    toLine:  "mr.williams@neighborhood.org",
    subLine: "Concern about park maintenance",
    range:   [80, 120],
    rubric:  "A student writing an email to a neighborhood association president describing a park maintenance issue and suggesting a practical solution."
  },

  w3: {
    course: "Sociology",
    prof: {
      name: "Dr. Diaz",
      msg:  "Next week we'll be discussing the impact of urbanization on community life. Urbanization has led to the development of large cities with diverse populations. Some people believe that urbanization fosters a sense of community and cultural exchange, while others think it leads to social isolation and the breakdown of close-knit communities usually found in small towns and villages. What are your thoughts on this and why?"
    },
    sa: {
      name: "Student A",
      txt:  "I believe urbanization fosters a sense of community and cultural exchange. Large cities bring together people from different backgrounds, creating opportunities for cultural interaction and mutual understanding. Urban areas often have vibrant social scenes that encourage community building."
    },
    sb: {
      name: "Student B",
      txt:  "In my opinion, urbanization leads to social isolation and the breakdown of close-knit communities. The fast-paced city life can make it difficult for people to form meaningful connections. Traditional community bonds, often found in smaller towns, tend to weaken in urban settings."
    },
    inst:  "Express and support your opinion on whether urbanization fosters community and cultural exchange or leads to social isolation. Your response should be between 100 and 150 words.",
    range: [100, 150],
    rubric: "Student contributing to a discussion on whether urbanization fosters community and cultural exchange or leads to social isolation and the breakdown of close-knit communities."
  }
};
