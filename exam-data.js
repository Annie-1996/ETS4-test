window.EXAM_DATA = {
  meta: { testNumber: 'ETS-PT4' },

  // ── MODULE 1 ────────────────────────────────────────────────────────────────
  m1: {
    r1: {
      segs: [
        "Modern biochemistry focuses on the chemical processes within and related to living organisms. It ",
        " a laboratory-based ",
        " that ",
        " biology ",
        " chemistry. Biochemists ",
        " how cells ",
        " and ",
        ", exploring ",
        " fundamental ",
        " that ",
        " life. The field has advanced our understanding of how diseases occur and how they can be treated or prevented.",
        " Techniques such as molecular cloning and protein analysis are central to biochemistry, leading to innovations in medicine and biotechnology."
      ],
      blanks: [
        { prefix: "i",      suffix: "s",        ans: "is"          },
        { prefix: "sci",    suffix: "ence",      ans: "science"     },
        { prefix: "comb",   suffix: "ines",      ans: "combines"    },
        { prefix: "a",      suffix: "nd",        ans: "and"         },
        { prefix: "inves",  suffix: "tigate",    ans: "investigate" },
        { prefix: "func",   suffix: "tion",      ans: "function"    },
        { prefix: "commu",  suffix: "nicate",    ans: "communicate" },
        { prefix: "t",      suffix: "he",        ans: "the"         },
        { prefix: "mecha",  suffix: "nisms",     ans: "mechanisms"  },
        { prefix: "sus",    suffix: "tain",      ans: "sustain"     }
      ]
    },
    reading: {
      texts: [
        {
          title: "Bella Italia Reservation",
          tag: "Email",
          content: "Subject: Bella Italia reservation\n\nDear Ms. Green,\n\nThis concerns your table reservation for 4 at Bella Italia Restaurant for December 5 at 7:00 P.M. Since you made your reservation more than two weeks ago, the $10.00 charge at the door for the night's live musical entertainment is waived.\n\nThank you,\nAnthony Russos",
          qi: [0, 1]
        },
        {
          title: "Library Computer Reservation System",
          tag: "Notice",
          content: "LIBRARY COMPUTER RESERVATION SYSTEM\n\n☐ Basic (Internet only)     ☐ Premium (Full software access)\n\nName: _______________\nLibrary Card Number: _______________\nComputer Station Preference: _______________\nRequested Date: _______________\nTime Slot:  ☐ 9–11 A.M.   ☐ 11 A.M.–1 P.M.   ☐ 1–3 P.M.   ☐ 3–5 P.M.\n\nMaximum reservation time: 2 hours per day. Premium stations require advance booking and may be reserved up to one week in advance. Basic stations are available on a first-come first-served basis same day only. Late arrival (more than 15 minutes) results in automatic cancellation. Photo ID required at check-in.",
          qi: [2, 3, 4]
        },
        {
          title: "Ancient Egyptian Medicine",
          tag: "Academic Passage",
          content: "Ancient Egyptian medicine was advanced for its time and laid the foundation for many modern practices. Egyptians believed the body was a system of channels similar to the Nile River. Illness was thought to be caused by blockages in these channels, like a blocked canal causing flooding. Treatments focused on unblocking channels using herbal remedies and physical interventions. One significant contribution of Egyptian medicine was surgical techniques. Ancient texts describe procedures like the removal of tumors and the setting of broken bones. They also record practices like cleaning wounds and disinfecting medical instruments. This suggests that Egyptian doctors understood the connection between cleanliness and preventing infections, a concept widely accepted only much later in history. In addition to surgery, Egyptians were skilled in pharmacology. They used substances like honey and willow bark to treat ailments. Modern science has validated some ancient remedies; for example, willow bark contains salicin, a precursor to aspirin, with pain-relieving properties. While Egyptians demonstrated an impressive body of knowledge, Egyptian medicine was also intertwined with religion. Many treatments involved prayers and rituals to invoke the favor of the gods. This blend of empirical practice and spiritual belief shows the complexity of ancient Egyptian medicine.",
          qi: [5, 6, 7, 8, 9]
        }
      ],
      qs: [
        { q: "How many people will dine with Ms. Green?", opts: ["2", "3", "4", "5"], ans: 1 },
        { q: "What will Ms. Green not be charged for?", opts: ["Canceling the reservation", "Rescheduling the reservation", "Listening to live music", "Inviting additional guests"], ans: 2 },
        { q: "What is this form used for?", opts: ["Applying for a new library card", "Reporting problems with library computers", "Booking time to use library computers", "Requesting software installation on computers"], ans: 2 },
        { q: "How far in advance can someone reserve a Premium station?", opts: ["The same day only", "Up to one week ahead", "Up to one month ahead", "Up to two weeks in advance"], ans: 1 },
        { q: "What happens if someone arrives 20 minutes late for their reservation?", opts: ["They can still use the computer for the remaining time.", "They must pay an additional fee.", "Their reservation is automatically canceled.", "They are moved to a Basic station instead."], ans: 2 },
        { q: "The author mentions \"a blocked canal causing flooding\" to explain", opts: ["the importance of the Nile River for Egyptian culture", "the ancient Egyptians' idea of why humans became sick", "the wide variety of illnesses common in ancient Egypt", "the connection between agriculture and medicine"], ans: 1 },
        { q: "The passage suggests that which of the following was a surprising achievement of ancient Egyptian medicine?", opts: ["Its procedures improved greatly over time.", "It understood the importance of cleanliness in preventing infections.", "Its use of Nile River water was often successful.", "Its understanding of the cause of illnesses was largely accurate."], ans: 1 },
        { q: "Why does the author discuss the use of willow bark?", opts: ["To suggest that some ancient remedies could be harmful", "To explain the invention of aspirin", "To highlight the variety of natural remedies available in Egypt", "To show that some ancient Egyptian remedies were effective"], ans: 3 },
        { q: "The word \"invoke\" in the passage is closest in meaning to", opts: ["request", "understand", "increase", "express"], ans: 0 },
        { q: "What role did religion play in ancient Egyptian medicine?", opts: ["Doctors were trained by religious authorities.", "Religious beliefs limited the kinds of medicine that could be used.", "Prayers and rituals were often a part of medical treatment.", "Doctors were thought to have special connections to the gods."], ans: 2 }
      ]
    }
  },

  // ── MODULE 2 ────────────────────────────────────────────────────────────────
  m2: {
    r1: {
      segs: [
        "Cognitive science and the study of consciousness delve into how humans and animals perceive the world, process information, and experience awareness. Cognition ",
        " mental ",
        " like ",
        ", learning, ",
        " decision-making, ",
        " consciousness ",
        " the ",
        " experience ",
        " being ",
        ". Researchers ",
        " tools such as brain imaging to explore these complex processes.",
        " Findings in this field have far-reaching implications, from improving mental health care to advancing artificial intelligence and educational practices."
      ],
      blanks: [
        { prefix: "encom",  suffix: "passes",   ans: "encompasses" },
        { prefix: "activ",  suffix: "ities",    ans: "activities"  },
        { prefix: "mem",    suffix: "ory",       ans: "memory"      },
        { prefix: "a",      suffix: "nd",        ans: "and"         },
        { prefix: "whe",    suffix: "reas",      ans: "whereas"     },
        { prefix: "invo",   suffix: "lves",      ans: "involves"    },
        { prefix: "subje",  suffix: "ctive",     ans: "subjective"  },
        { prefix: "o",      suffix: "f",         ans: "of"          },
        { prefix: "aw",     suffix: "are",       ans: "aware"       },
        { prefix: "u",      suffix: "se",        ans: "use"         }
      ]
    },
    reading: {
      texts: [
        {
          title: "Photography Class",
          tag: "Email",
          content: "Subject: Photography class\n\nDear Mr. Clark,\n\nUnfortunately, the photography class you registered for on October 20 has been rescheduled. It will now meet on October 28 at 6:00 P.M. instead of October 26 at 5:00 P.M. Your registration fee will be refunded if you have a scheduling conflict.\n\nRegards,\nEmily Rodriguez",
          qi: [0, 1]
        },
        {
          title: "Effective Communication in the Modern Workplace",
          tag: "Advertisement",
          content: "Effective Communication in the Modern Workplace\n\nA one-day intensive workshop for managers and team leaders. Learn practical strategies for conducting productive meetings, providing constructive feedback, and resolving workplace conflicts. Experienced facilitators will guide participants through interactive exercises and real-world scenarios. Workshop includes comprehensive workbook and light refreshments.\n\nEarly bird registration (before April 1): $195. Regular price: $245.\n\nLimited to 25 participants to ensure personalized attention.\n\nCertificate of completion provided for continuing education requirements.",
          qi: [2, 3, 4]
        },
        {
          title: "The Origins of Theater",
          tag: "Academic Passage",
          content: "European theater has ancient roots, evolving from the rituals and storytelling of early societies. The earliest performances took place in ancient Greece, where festivals honoring the god Dionysus included dramatic contests. These performances were essential to communal life and aimed to convey moral lessons. The Greeks developed distinct genres: tragedy and comedy. Tragedies by Aeschylus and others explored themes of fate, justice, and suffering. Comedies, like those by Aristophanes, satirized society and politics. The structure of Greek theater, with its chorus and masks, had a lasting impact on later cultures.\n\nThe tradition of theater continued in the ancient Roman Empire, where it became popular entertainment. [A] Roman theater borrowed from Greek precedents but introduced new elements like elaborate stage designs including, for example, statues of heroes or portraits of the imperial family. [B] These added layers of meaning and context to the plays and helped to convey the themes and narratives more effectively. Despite its rich history, theater faced decline during the Middle Ages in Europe (the period between 500 and 1500 C.E.). [C] However, it saw a resurgence during the following Renaissance period, leading to the flourishing of theater that laid the groundwork for modern theater. [D]",
          qi: [5, 6, 7, 8, 9]
        }
      ],
      qs: [
        { q: "When did Mr. Clark register for the class?", opts: ["On October 20", "On October 25", "On October 26", "On October 29"], ans: 0 },
        { q: "Why may Mr. Clark receive a refund?", opts: ["If he registered for the wrong class", "If he could not attend the class", "If he was dissatisfied with the class", "If he rescheduled the class"], ans: 1 },
        { q: "What is this advertisement promoting?", opts: ["A job training program for new employees", "A professional workshop on workplace communication", "A management certification course", "A conflict-resolution consulting service"], ans: 1 },
        { q: "What does someone gain by registering early?", opts: ["A reduction in cost", "A special certificate", "Guaranteed seating in the front row", "A one-on-one session with a facilitator"], ans: 0 },
        { q: "Why is participation limited to 25 people?", opts: ["To keep costs affordable for participants", "To meet continuing education requirements", "To provide personalized attention to participants", "To ensure everyone receives a workbook"], ans: 2 },
        { q: "A goal of the earliest theater performances in ancient Greece was to", opts: ["tell stories about the ancient societies that Greece evolved from", "honor important people in the community", "bring people from different groups together", "provide guidance on good and bad behavior"], ans: 3 },
        { q: "How did the plays of Aristophanes compare to those of Aeschylus?", opts: ["They were in a different genre.", "They were more focused on fate, justice, and suffering.", "They were more popular among politicians and other important members of society.", "They had a greater impact on later cultures."], ans: 0 },
        { q: "What was one effect of the elaborate stage designs of Roman theater?", opts: ["They added Greek elements to plays.", "They directed attention to the plays' creators.", "They increased the popularity of plays among members of the imperial family.", "They improved the communication of the plays' themes and narratives to viewers."], ans: 3 },
        { q: "The word \"resurgence\" in the passage is closest in meaning to", opts: ["change", "debate", "history", "comeback"], ans: 3 },
        { q: "There are four locations in the passage that indicate where the following sentence could be added: 'Few performances occurred around this time.' Where would it best fit?", opts: ["Option A", "Option B", "Option C", "Option D"], ans: 2 }
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
      ctx:    "Where did you get your shoes?",
      prefix: "",
      suffix: ".",
      words:  ["visited", "had", "it", "last month", "the shop", "a sale", "I"],
      ans:    "The shop I visited last month had a sale"
    },
    {
      ctx:    "The workshop yesterday was very informative.",
      prefix: "",
      suffix: " soon?",
      words:  ["another one", "do", "there", "if", "be", "you know", "will"],
      ans:    "Do you know if there will be another one"
    },
    {
      ctx:    "The new restaurant downtown has amazing reviews.",
      prefix: "",
      suffix: "?",
      words:  ["know", "do", "if", "has", "vegetarian options", "have", "you", "they"],
      ans:    "Do you know if they have vegetarian options"
    },
    {
      ctx:    "That was a great movie we watched last night.",
      prefix: "Would you",
      suffix: "?",
      words:  ["that", "by", "director", "would", "like", "another film", "to see"],
      ans:    "like to see another film by that director"
    },
    {
      ctx:    "I'm planning to visit my grandparents next weekend.",
      prefix: "",
      suffix: "?",
      words:  ["to the airport", "tell me", "you", "can", "need", "a lift", "whether"],
      ans:    "Can you tell me whether you need a lift to the airport"
    },
    {
      ctx:    "The book you lent me was fascinating.",
      prefix: "",
      suffix: "?",
      words:  ["has", "you know", "have", "the author", "if", "other books", "do", "written"],
      ans:    "Do you know if the author has written other books"
    },
    {
      ctx:    "The new software update looks promising.",
      prefix: "On",
      suffix: "?",
      words:  ["able", "which", "the download", "website", "to find", "were you"],
      ans:    "which website were you able to find the download"
    },
    {
      ctx:    "The new coffee shop downtown is very popular.",
      prefix: "Is",
      suffix: "?",
      words:  ["that", "football matches", "you can", "on screen", "watch", "where", "the one"],
      ans:    "that the one where you can watch football matches on screen"
    },
    {
      ctx:    "We had a great time at the concert last night.",
      prefix: "",
      suffix: "?",
      words:  ["that band", "is performing", "when", "how", "find out", "again", "can we"],
      ans:    "How can we find out when that band is performing again"
    },
    {
      ctx:    "I really enjoyed the hiking trip last weekend.",
      prefix: "",
      suffix: " for this month?",
      words:  ["if", "more trips", "planned", "there are", "you", "tell me", "can"],
      ans:    "Can you tell me if there are more trips planned"
    }
  ],

  w2: {
    situation: "You are a student organizing a study group for an upcoming exam. You want to invite your classmates to join the group and explain to them your ideas about how the group should proceed.",
    tasks: [
      "Explain the purpose of the study group.",
      "Describe the topics you plan to cover during the study sessions and other ideas you have for the sessions.",
      "Suggest a time and location for the first meeting."
    ],
    toLine:  "classmates@university.edu",
    subLine: "Invitation to join study group",
    range:   [80, 120],
    rubric:  "A student writing an email to classmates inviting them to join a study group for an upcoming exam and suggesting how the sessions should be organized."
  },

  w3: {
    course: "Digital Media",
    prof: {
      name: "Dr. Achebe",
      msg:  "Next week we'll be discussing the impact of digital media on traditional forms of communication. Some argue that digital media has had a beneficial effect overall, as it has greatly improved global communication and connectivity. Others believe it has had a largely negative effect, leading to the decline of face-to-face interactions and reduced quality of relationships. What is your opinion on this?"
    },
    sa: {
      name: "Student A",
      txt:  "I believe digital media has primarily had a positive effect. It allows people to stay in touch over long distances with friends and family with whom they may not have had much contact otherwise. The convenience and speed of digital media allow people to communicate with ease."
    },
    sb: {
      name: "Student B",
      txt:  "Although it seems like a good thing on the surface, I think digital media has led to some serious problems. People often spend more time online than engaging in real-life conversations, which can erode social bonds and reduce the quality of communication with others. We need to find a balance between digital and traditional communication."
    },
    inst:  "Express and support your opinion on whether digital media has had a beneficial or negative effect on traditional forms of communication. Your response should be between 100 and 150 words.",
    range: [100, 150],
    rubric: "Student contributing to a discussion on whether digital media has had a beneficial or negative effect on traditional forms of communication."
  },

  // ── LISTENING ────────────────────────────────────────────────────────────────
  l1: {
    sections: [
      {
        type: 'listenResponse',
        title: 'Choose the Best Response',
        qStart: 0,
        audios: [
          'audio/Listening/Listen and Response/Listening1_Listen_Response_Question1.ogg',
          'audio/Listening/Listen and Response/Listening1_Listen_Response_Question2.ogg',
          'audio/Listening/Listen and Response/Listening1_Listen_Response_Question3.ogg',
          'audio/Listening/Listen and Response/Listening1_Listen_Response_Question4.ogg',
          'audio/Listening/Listen and Response/Listening1_Listen_Response_Question5.ogg',
          'audio/Listening/Listen and Response/Listening1_Listen_Response_Question6.ogg',
          'audio/Listening/Listen and Response/Listening1_Listen_Response_Question7.ogg',
          'audio/Listening/Listen and Response/Listening1_Listen_Response_Question8.ogg'
        ],
        qs: [
          { prompt: "Man: Is the library open now?", opts: ["Yes, until nine p.m.", "Maybe last week.", "Every book.", "No, dinner is at eight p.m."], ans: 0 },
          { prompt: "Woman: Could you help me organize these files?", opts: ["Sure, I can.", "The calendar is current.", "Yes, on the left.", "The kitchen is large."], ans: 0 },
          { prompt: "Man: It looks like you didn't finish the slides for the presentation.", opts: ["Yes, I agree with the manager.", "The concert was fantastic.", "Sorry—I forgot.", "Yes, I'll leave tomorrow evening."], ans: 2 },
          { prompt: "Woman: It's quite warm, isn't it?", opts: ["I haven't had a chance to check the schedule.", "It's not in the budget for this year.", "The hallway lights are out again.", "Especially for this time of year."], ans: 3 },
          { prompt: "Man: Will you be able to meet the deadline for your research paper?", opts: ["Sure, I'll call them tomorrow.", "Sorry to hear that.", "I'm on track to finish on time.", "Not such a good idea."], ans: 2 },
          { prompt: "Woman: When is your job interview?", opts: ["It will be in the conference room.", "It's been rescheduled to Monday morning.", "I'll do that next time.", "We went out for lunch afterward."], ans: 1 },
          { prompt: "Man: I'm having trouble resetting my password.", opts: ["Let me find the instructions for you.", "I can't attend tonight.", "I don't know how many.", "Set the documents on the table."], ans: 0 },
          { prompt: "Woman: I can't find the invoice for last month's catering order.", opts: ["Did you check the file folder?", "Two copies of the billing statement.", "Didn't they offer to write a review?", "A month from now."], ans: 0 }
        ]
      },
      {
        type: 'conversation',
        title: 'Short Conversation',
        qStart: 8,
        dirAudio: 'audio/Listening/Short Conversation/Listening1_Conversation_Directions_9-10.ogg',
        qAudio:   'audio/Listening/Short Conversation/Listening1_Conversation_Questions_9-10.ogg',
        script: "Man: I've been having trouble with my car lately. It makes a weird sound every time I start it.\n\nWoman: That's annoying. Have you taken it to get checked out?\n\nMan: Not yet. I'm planning to go tomorrow.\n\nWoman: That's a good idea. It might be something minor, but it's better to be safe.\n\nMan: Exactly. I just pray it doesn't cost me an arm and a leg. And I hope to get my car back by Sunday. I need to pick up my mother at the airport then.\n\nWoman: Fingers crossed!",
        qs: [
          { q: "What problem is the man having with his car?", opts: ["It cannot start.", "It makes a strange noise.", "It is unable to move fast.", "It is unsafe to drive."], ans: 1 },
          { q: "What does the man imply at the end of the conversation?", opts: ["He wants to buy a new car.", "He needs his car for an important errand he must do.", "He needs advice about a mechanic to use.", "He hopes an issue is minor."], ans: 3 }
        ]
      },
      {
        type: 'conversation',
        title: 'Short Conversation',
        qStart: 10,
        dirAudio: 'audio/Listening/Short Conversation/Listening1_Conversation_Directions_11-12.ogg',
        qAudio:   'audio/Listening/Short Conversation/Listening1_Conversation_Questions_11-12.ogg',
        script: "Woman: I heard you're planning a trip to Sky-High Ski Resort this winter. Have you booked everything yet?\n\nMan: Well, I've booked the cabin to stay, but I still need to reserve skis and ski boots.\n\nWoman: You don't have your own?\n\nMan: No, this will actually be my first time skiing. I'm a bit nervous.\n\nWoman: You'll do fine. By the way, there's a great Thai restaurant next to the resort, and I don't think it requires reservations.\n\nMan: Great! What's the name?\n\nWoman: Can't remember off the top of my head. Lemme look it up on my phone.",
        qs: [
          { q: "What does the man still need to book?", opts: ["Transportation", "A restaurant table", "A cabin", "Skiing equipment"], ans: 3 },
          { q: "What will the woman do next?", opts: ["Look up a recipe", "Check the name of a restaurant", "Offer the man some skiing advice", "Make a phone call"], ans: 1 }
        ]
      },
      {
        type: 'announcement',
        title: 'Announcement',
        qStart: 12,
        dirAudio: 'audio/Listening/Announcements/Listening1_Announcement_Directions_13-14.ogg',
        qAudio:   'audio/Listening/Announcements/Listening1_Announcement_Questions_13-14.ogg',
        script: "Woman: I want to let everyone know that my office hours will be changing. Starting next week, I will be available on Mondays and Wednesdays from 2 to 4 p.m., instead of the current 1 to 3 p.m. If you have an urgent need to meet with me and these times don't work for you, please email me and I can schedule an appointment. Keep in mind that office hours are a great opportunity to discuss any questions or concerns you have about the course material.",
        qs: [
          { q: "What is the main topic of the announcement?", opts: ["A revision to a schedule", "The process for making an appointment", "Updates to course material", "An upcoming exam"], ans: 0 },
          { q: "What does the professor encourage students to do?", opts: ["Form study groups with classmates", "Begin planning their schedule for next semester", "Meet with her if they have questions", "Email her a list of their concerns"], ans: 2 }
        ]
      },
      {
        type: 'academicTalk',
        title: 'Academic Talk',
        subject: 'Neuroscience',
        qStart: 14,
        dirAudio: 'audio/Listening/Academic Talk/Listening1_Academic_Talk_Directions_15-18.ogg',
        qAudio:   'audio/Listening/Academic Talk/Listening1_Academic_Talk_Questions_15-18.ogg',
        script: "Man: Let's talk a little about language acquisition, which is the process by which humans learn to understand and use language. There are two main types of language acquisition: first language acquisition and second language acquisition. First language acquisition occurs naturally and with relative ease during early childhood, through interaction with family and the surrounding environment. Children are able to pick up their native language quickly due to their innate linguistic capabilities, a concept supported by the linguist Noam Chomsky's theory of Universal Grammar.\n\nUniversal Grammar suggests that the ability to acquire language is innate to humans and that all human languages share a common underlying structure. Second language acquisition, on the other hand, often requires more conscious effort and formal education and typically happens later in life. Several factors influence the ease and success of second language acquisition, including exposure to the language, age, and motivation. Motivation, in particular, plays a crucial role—highly motivated individuals are more likely to engage actively with the language and persist in their learning efforts.\n\nAge is also significant; according to the critical period hypothesis, there is an optimal window in early childhood during which language acquisition occurs most easily. After this period, acquiring a new language can be more challenging. Understanding these processes helps educators and linguists develop effective teaching methods and language learning tools.",
        qs: [
          { q: "How is the talk mainly organized?", opts: ["It contrasts children's innate linguistic capabilities with those of adults.", "It lists the principles of Noam Chomsky's theory of Universal Grammar.", "It describes the differences between two methods of teaching language.", "It discusses the two main types of language acquisition."], ans: 3 },
          { q: "Why does the speaker mention Noam Chomsky's theory of Universal Grammar?", opts: ["To highlight the importance of formal education in language learning", "To explain why children are able to pick up their native language quickly", "To describe how some languages are more complex than others", "To provide background on the critical period hypothesis"], ans: 1 },
          { q: "What does the speaker say about motivation and language acquisition?", opts: ["Higher motivation makes it easier for a person to acquire a second language.", "Motivation becomes less important to language acquisition as a person ages.", "Children with increased exposure to a second language are more motivated to learn it.", "Formal education does not motivate people to acquire a second language."], ans: 0 },
          { q: "According to the speaker, what is suggested by the critical period hypothesis?", opts: ["People with innate linguistic capabilities acquire language easily.", "There is an optimal window in early childhood for language acquisition.", "A longer period of language exposure supports better learning.", "Second language acquisition occurs most easily in early adulthood."], ans: 1 }
        ]
      }
    ]
  },

  l2: {
    sections: [
      {
        type: 'listenResponse',
        title: 'Choose the Best Response',
        qStart: 0,
        audios: [
          'audio/Listening/Listen and Response/Listening2_Listen_Response_Question1.ogg',
          'audio/Listening/Listen and Response/Listening2_Listen_Response_Question2.ogg',
          'audio/Listening/Listen and Response/Listening2_Listen_Response_Question3.ogg',
          'audio/Listening/Listen and Response/Listening2_Listen_Response_Question4.ogg',
          'audio/Listening/Listen and Response/Listening2_Listen_Response_Question5.ogg',
          'audio/Listening/Listen and Response/Listening2_Listen_Response_Question6.ogg',
          'audio/Listening/Listen and Response/Listening2_Listen_Response_Question7.ogg',
          'audio/Listening/Listen and Response/Listening2_Listen_Response_Question8.ogg'
        ],
        qs: [
          { prompt: "Man: Would you mind closing the window?", opts: ["Sure, I'll call tomorrow.", "Check under the table.", "No problem.", "Closed on Mondays."], ans: 2 },
          { prompt: "Woman: The seminar meets at eight thirty a.m. on Wednesdays.", opts: ["Nearly 90 minutes.", "Thank you for reminding me.", "The bookstore opens at noon on Sundays.", "About 200 faculty members."], ans: 1 },
          { prompt: "Man: Have you created the syllabus for the art history course?", opts: ["Sure, I'll check them.", "No, the artwork is being shipped.", "I'll have time tomorrow morning.", "The professor called me back."], ans: 2 },
          { prompt: "Woman: Where can I find the cafeteria?", opts: ["On the ground floor.", "A bigger lobby.", "Usually at eleven thirty a.m.", "Good meal selections."], ans: 0 },
          { prompt: "Man: Who will summarize our team's research findings?", opts: ["Jacob already found his.", "No more than 1,000 words.", "Emily would do a great job.", "Different lab equipment."], ans: 2 },
          { prompt: "Woman: How do you use this software?", opts: ["Follow the tutorial.", "Purchase a computer.", "A soft touch is needed.", "Thursday afternoons."], ans: 0 },
          { prompt: "Man: Is the café open now?", opts: ["Around back.", "Coffee and tea.", "It's closed.", "She is available."], ans: 2 },
          { prompt: "Man: Let's schedule an extra study-group meeting.", opts: ["Doesn't the librarian know?", "Longer than expected.", "I ordered a subscription yesterday.", "For Thursday evening?"], ans: 3 }
        ]
      },
      {
        type: 'conversation',
        title: 'Short Conversation',
        qStart: 8,
        dirAudio: 'audio/Listening/Short Conversation/Listening2_Conversation_Directions_9-10.ogg',
        qAudio:   'audio/Listening/Short Conversation/Listening2_Conversation_Questions_9-10.ogg',
        script: "Man: I've been eyeing the new gym downtown…\n\nWoman: Have you checked their facilities?\n\nMan: Yes, they have modern equipment and offer various classes.\n\nWoman: Are the prices reasonable?\n\nMan: The daily use fees are higher than I expected. So maybe I'll get a long-term membership instead.\n\nWoman: Well, if you think you'll go regularly…\n\nMan: Yeah, the fitness book I'm reading says that's the way to get in shape anyway.",
        qs: [
          { q: "What did the man dislike about the new gym?", opts: ["The location", "The facilities", "The equipment", "The prices for one-time use"], ans: 3 },
          { q: "Why does the man mention a book?", opts: ["To offer a reading suggestion for the woman", "To explain how he found out about the new gym", "To give an extra reason for getting a long-term membership", "To point out that there are many different ways to get in shape"], ans: 2 }
        ]
      },
      {
        type: 'announcement',
        title: 'Announcement',
        qStart: 10,
        dirAudio: 'audio/Listening/Announcements/Listening2_Announcement_Directions_11-12.ogg',
        qAudio:   'audio/Listening/Announcements/Listening2_Announcement_Questions_11-12.ogg',
        script: "Man: Due to some recent changes in university policy, we need everyone to update their contact information in the student portal. Doing so will ensure that you receive important notifications, including about class cancellations and emergency alerts. Please complete the update by the end of this week. Don't take a chance on missing out on critical information.",
        qs: [
          { q: "Why does the speaker mention class cancellations and emergency alerts?", opts: ["To inform students about recent policy changes", "To emphasize the importance of updating contact information", "To promote a new program on personal health", "To point out that classes are often canceled because of bad weather"], ans: 1 },
          { q: "What does the speaker imply when he says, \"Don't take a chance on missing out on critical information\"?", opts: ["Students should make updates quickly.", "Class attendance is mandatory.", "The portal can be difficult to navigate.", "Important information has just been posted."], ans: 0 }
        ]
      },
      {
        type: 'academicTalk',
        title: 'Academic Talk',
        subject: 'Chemistry',
        qStart: 12,
        dirAudio: 'audio/Listening/Academic Talk/Listening2_Academic_Talk_Directions_13-16.ogg',
        qAudio:   'audio/Listening/Academic Talk/Listening2_Academic_Talk_Questions_13-16.ogg',
        script: "Woman: Today we're discussing the notion of the ecological footprint, something that measures the impact of human activities on the environment, in terms of the amount of natural resources we consume and the waste we generate. The ecological footprint is often expressed in terms of number of global hectares. This number represents the total area of biologically productive land or water needed in order to support human activity.\n\nIt considers various factors, including carbon emissions, food consumption, water usage, and land development. One primary component of the ecological footprint is the carbon footprint, which measures the amount of greenhouse gases emitted due to consumption of fossil fuels like petroleum and coal. High carbon footprints contribute significantly to global warming. Another important aspect is our consumption of natural resources like water and food, which can lead to resource depletion and environmental degradation. The concept of ecological footprint is crucial for understanding and addressing the sustainability of human activities. By measuring our ecological footprint, individuals, companies, and even whole countries can identify areas where they can reduce their impact on the environment. This could include adopting practices like recycling, conserving water, using renewable energy, and reducing waste.",
        qs: [
          { q: "What is the main topic of the talk?", opts: ["Replacing fossil fuels with more sustainable energy sources", "A way of measuring the effects of human activities on the environment", "How fossil fuel use leads to global warming", "The importance of water conservation to a sustainable future"], ans: 1 },
          { q: "According to the speaker, the ecological footprint is expressed in terms of", opts: ["area of land and water needed", "amount of greenhouse gas produced", "global temperature increase", "number of natural resources consumed"], ans: 0 },
          { q: "What does the speaker say about the carbon footprint?", opts: ["It primarily applies to industrial activities.", "It includes tracking the biodiversity of an ecosystem.", "It is a component of the ecological footprint.", "It considers the number of vehicles in a given area."], ans: 2 },
          { q: "What is one cause of resource depletion that the speaker mentions?", opts: ["Environmental policies", "Food consumption", "Generation of waste", "Carbon emissions"], ans: 1 }
        ]
      }
    ]
  },

  // ── SPEAKING ─────────────────────────────────────────────────────────────────
  sp: {
    listenRepeat: {
      context: "You are being trained to assist visitors at a nature reserve. Listen to your trainer and repeat what he says. Repeat only once.",
      dirAudio: 'audio/Speaking/Listen and Repeat/Speaking_Listen_Repeat_Directions.ogg',
      items: [
        { text: "Welcome to our local nature reserve.", audio: 'audio/Speaking/Listen and Repeat/Speaking_Listen_Repeat_1.ogg' },
        { text: "Take a nature walk on our hiking trails.", audio: 'audio/Speaking/Listen and Repeat/Speaking_Listen_Repeat_2.ogg' },
        { text: "The picnic area's a perfect place to enjoy your lunch.", audio: 'audio/Speaking/Listen and Repeat/Speaking_Listen_Repeat_3.ogg' },
        { text: "The visitor center has helpful information for guests.", audio: 'audio/Speaking/Listen and Repeat/Speaking_Listen_Repeat_4.ogg' },
        { text: "The observation tower offers a great view of the forest.", audio: 'audio/Speaking/Listen and Repeat/Speaking_Listen_Repeat_5.ogg' },
        { text: "Our restroom facilities are located just beside the entrance.", audio: 'audio/Speaking/Listen and Repeat/Speaking_Listen_Repeat_6.ogg' },
        { text: "While you're exploring the grounds, please respect all wildlife and follow the posted rules at all times.", audio: 'audio/Speaking/Listen and Repeat/Speaking_Listen_Repeat_7.ogg' }
      ]
    },
    interview: {
      context: "You have volunteered for a research study about food preferences. You will have a short online interview with a researcher. The researcher will ask you some questions.",
      dirAudio: 'audio/Speaking/Interview/Speaking_Interview_Directions.ogg',
      qs: [
        { q: "In your opinion, what kinds of meals do people your age enjoy most? Are they traditional, modern, or something in between?", audio: 'audio/Speaking/Interview/Speaking_Interview_1.mp4' },
        { q: "What kind of meals do you usually have on busy days—do you cook, eat out, or pick up something ready-made?", audio: 'audio/Speaking/Interview/Speaking_Interview_2.mp4' },
        { q: "Many people say that modern life has changed how we eat. Do you think people today have healthier eating habits than in the past? Why or why not?", audio: 'audio/Speaking/Interview/Speaking_Interview_3.mp4' },
        { q: "Some people believe that preparing traditional meals at home is an important way to stay connected to one's culture. Do you agree, or do you think it's possible to connect with culture in other ways? Why?", audio: 'audio/Speaking/Interview/Speaking_Interview_4.mp4' }
      ]
    }
  }
};
