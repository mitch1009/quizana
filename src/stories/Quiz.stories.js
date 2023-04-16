import { within, userEvent } from '@storybook/testing-library';

import { QuizComponent } from '../components/Quiz';
export default {
  title: 'Components/Quiz',
  component: QuizComponent,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
  argTypes: {
    questions: {}
  }
};

export const Technical = {
  args: {
    candidateId: "",
    hasHeader: false,
    type:"Technical",
     questions: [
            {
                "id": 1,
                "question": "What is the primary purpose of a Web Worker in a web application?",
                "options": [
                    "To perform background tasks without blocking the main thread",
                    "To enable real-time communication between browsers",
                    "To store data locally for offline use",
                    "To draw graphics on the web"
                ],
                "answer": "To perform background tasks without blocking the main thread"
            },
            {
                "id": 2,
                "question": "How do you create a new Web Worker instance in JavaScript?",
                "options": [
                    "new Worker('worker.js')",
                    "new WebWorker('worker.js')",
                    "Worker.create('worker.js')",
                    "WebWorker.create('worker.js')"
                ],
                "answer": "new Worker('worker.js')"
            },
            {
                "id": 3,
                "question": "Which of the following methods is used to send a message from the main thread to a Web Worker?",
                "options": [
                    "postMessage()",
                    "sendMessage()",
                    "send()",
                    "message()"
                ],
                "answer": "postMessage()"
            },
            {
                "id": 4,
                "question": "How can a Web Worker communicate with the main thread?",
                "options": [
                    "By using the postMessage() method and listening for the 'message' event",
                    "By directly modifying the DOM",
                    "By using the XMLHttpRequest API",
                    "By using the Fetch API"
                ],
                "answer": "By using the postMessage() method and listening for the 'message' event"
            },
            {
                "id": 5,
                "question": "What is the main limitation of Web Workers regarding the DOM?",
                "options": [
                    "Web Workers cannot directly access or modify the DOM",
                    "Web Workers can only access a limited subset of the DOM",
                    "Web Workers can only modify the DOM if the main thread is idle",
                    "Web Workers can only access the DOM in read-only mode"
                ],
                "answer": "Web Workers cannot directly access or modify the DOM"
            },
            {
                "id": 6,
                "question": "Which of the following APIs can be used inside a Web Worker?",
                "options": [
                    "XMLHttpRequest",
                    "Fetch API",
                    "Both A and B",
                    "Neither A nor B"
                ],
                "answer": "Both A and B"
            },
            {
                "id": 7,
                "question": "Can Web Workers use the 'window' object?",
                "options": [
                    "Yes",
                    "No"
                ],
                "answer": "No"
            },
            {
                "id": 8,
                "question": "Which object is used inside a Web Worker to represent the global context?",
                "options": [
                    "self",
                    "worker",
                    "global",
                    "window"
                ],
                "answer": "self"
            },
            {
                "id": 9,
                "question": "How do you terminate a Web Worker from the main thread?",
                "options": [
                    "worker.terminate()",
                    "worker.stop()",
                    "worker.kill()",
                    "worker.close()"
                ],
                "answer": "worker.terminate()"
            },
            {
                "id": 10,
                "question": "Can a Web Worker create and manage other Web Workers?",
                "options": [
                    "Yes",
                    "No"
                ],
                "answer": "No"
            }
        ]
  }
}
export const Psychometric = {
  args: {
    hasHeader: false,
    candidateId:"",
    type: "Psychometric",
    questions: [
            {
                "id": 1,
                "question": "When faced with a difficult problem, do you tend to:",
                "options": [
                    {
                        "option": "Analyze the situation and come up with a logical solution",
                        "personality": "You are a logical and analytical person who likes to approach problems in a systematic way. You are good at breaking down complex problems into smaller, more manageable parts."
                    },
                    {
                        "option": "Trust your instincts and go with your gut feeling",
                        "personality": "You are an intuitive person who relies on your instincts and intuition to guide you. You are good at making quick decisions and trusting your gut."
                    },
                    {
                        "option": "Seek advice from others before making a decision",
                        "personality": "You are a collaborative person who values the opinions and input of others. You are good at working in teams and seeking out different perspectives."
                    },
                    {
                        "option": "Avoid the problem and hope it goes away",
                        "personality": "You are an avoidant person who tends to shy away from difficult or uncomfortable situations. You may struggle with confronting problems head-on."
                    }
                ]
            },
            {
                "id": 2,
                "question": "How do you handle criticism?",
                "options": [
                    {
                        "option": "Take it as an opportunity to improve and learn",
                        "personality": "You are a growth-oriented person who sees criticism as a chance to learn and improve. You are good at taking feedback and using it to make positive changes."
                    },
                    {
                        "option": "Get defensive and argue your point",
                        "personality": "You are a defensive person who may struggle with receiving criticism. You may have a tendency to become argumentative or dismissive when faced with negative feedback."
                    },
                    {
                        "option": "Ignore it and move on",
                        "personality": "You are a resilient person who is able to brush off criticism and move on quickly. You may have a thick skin and not take things too personally."
                    },
                    {
                        "option": "Take it personally and feel upset",
                        "personality": "You are a sensitive person who may struggle with criticism. You may take things too personally and have a hard time separating your work from your personal identity."
                    }
                ]
            },
            {
                "id": 3,
                "question": "When working in a team, do you prefer to:",
                "options": [
                    {
                        "option": "Take charge and lead the team",
                        "personality": "You are a natural leader who is comfortable taking charge and making decisions. You are good at delegating tasks and motivating others to work towards a common goal."
                    },
                    {
                        "option": "Contribute your ideas and work collaboratively",
                        "personality": "You are a collaborative person who values the input and ideas of others. You are good at working in teams and contributing your own unique perspective."
                    },
                    {
                        "option": "Follow instructions and do your part",
                        "personality": "You are a reliable and dependable person who is good at following instructions and doing your part. You may prefer to work independently rather than in a team."
                    },
                    {
                        "option": "Avoid working in a team altogether",
                        "personality": "You are an independent person who may struggle with working in a team. You may prefer to work alone and have a hard time collaborating with others."
                    }
                ]
            },
            {
                "id": 4,
                "question": "How do you handle stress?",
                "options": [
                    {
                        "option": "Take a break and do something relaxing",
                        "personality": "You are a self-care oriented person who knows how to take care of yourself when you are feeling stressed. You are good at recognizing when you need a break and taking time for yourself."
                    },
                    {
                        "option": "Push through and keep working until the task is done",
                        "personality": "You are a determined person who is good at pushing through difficult situations. You may have a high tolerance for stress and be able to work under pressure."
                    },
                    {
                        "option": "Talk to someone about your feelings",
                        "personality": "You are a social person who values connection and support from others. You are good at reaching out for help when you need it and talking through your feelings."
                    },
                    {
                        "option": "Avoid stressful situations altogether",
                        "personality": "You are an avoidant person who may struggle with stress. You may have a tendency to avoid difficult situations or procrastinate when faced with a challenging task."
                    }
                ]
            },
            {
                "id": 5,
                "question": "When faced with a challenge, do you tend to:",
                "options": [
                    {
                        "option": "Embrace    the challenge and see it as an opportunity for growth",
                        "personality": "You are a growth-oriented person who sees challenges as opportunities for learning and development. You are good at pushing yourself out of your comfort zone and taking on new challenges."
                    },
                    {
                        "option": "Feel overwhelmed and give up",
                        "personality": "You are a person who may struggle with resilience when faced with challenges. You may have a tendency to become overwhelmed and give up when things get difficult."
                    },
                    {
                        "option": "Try to find an easy way out",
                        "personality": "You are a person who may struggle with perseverance when faced with challenges. You may have a tendency to look for shortcuts or easy solutions rather than putting in the hard work."
                    },
                    {
                        "option": "Blame others for the challenge",
                        "personality": "You are a person who may struggle with taking responsibility when faced with challenges. You may have a tendency to blame others or external factors for the difficulty rather than looking inward."
                    }
                ]
            },
            {
                "id": 6,
                "question": "How do you handle failure?",
                "options": [
                    {
                        "option": "Learn from it and try again",
                        "personality": "You are a resilient person who is able to bounce back from failure and use it as a learning opportunity. You are good at taking feedback and using it to make positive changes."
                    },
                    {
                        "option": "Blame others or external factors",
                        "personality": "You are a person who may struggle with taking responsibility for failure. You may have a tendency to blame others or external factors rather than looking inward."
                    },
                    {
                        "option": "Give up and move on to something else",
                        "personality": "You are a person who may struggle with perseverance when faced with failure. You may have a tendency to give up and move on to something else rather than putting in the hard work to overcome the obstacle."
                    },
                    {
                        "option": "Feel ashamed and embarrassed",
                        "personality": "You are a person who may struggle with self-compassion when faced with failure. You may have a tendency to be hard on yourself and feel ashamed or embarrassed by your mistakes."
                    }
                ]
            },
            {
                "id": 7,
                "question": "When making a decision, do you tend to:",
                "options": [
                    {
                        "option": "Consider all the options and weigh the pros and cons",
                        "personality": "You are a thoughtful and analytical person who is good at considering all the options and making informed decisions. You may take your time when making decisions to ensure that you have all the information you need."
                    },
                    {
                        "option": "Go with your gut feeling",
                        "personality": "You are an intuitive person who trusts your instincts and may make decisions based on your gut feeling. You may be good at making quick decisions and trusting your intuition."
                    },
                    {
                        "option": "Ask others for their opinion",
                        "personality": "You are a collaborative person who values the input and opinions of others. You may seek out different perspectives before making a decision to ensure that you have considered all the options."
                    },
                    {
                        "option": "Avoid making decisions altogether",
                        "personality": "You are an indecisive person who may struggle with making decisions. You may have a tendency to avoid making decisions altogether or procrastinate when faced with a choice."
                    }
                ]
            },
            {
                "id": 8,
                "question": "How do you handle conflicts with others?",
                "options": [
                    {
                        "option": "Try to find a compromise and work towards a solution",
                        "personality": "You are a collaborative person who is good at finding common ground and working towards a solution that benefits everyone. You may be good at mediating conflicts and finding a win-win solution."
                    },
                    {
                        "option": "Get defensive and argue your point",
                        "personality": "You are a defensive person who may struggle with conflict resolution. You may have a tendency to become argumentative or dismissive when faced with a disagreement."
                    },
                    {
                        "option": "Avoid the conflict and hope it goes away",
                        "personality": "You are an avoidant person who may struggle with confrontation. You may have a tendency to avoid conflicts altogether or hope that they will resolve themselves without your intervention."
                    },
                    {
                        "option": "Blame the other person for the conflict",
                        "personality": "You are a person who may struggle with taking responsibility for conflicts. You may have a tendency to blame others or external factors rather than looking inward and taking ownership of your role in the conflict."
                    }
                ]
            },
            {
                "id": 9,
                "question": "When faced with a new challenge, do you tend tofeel excited and curious about the opportunity to learn something new",
                "options": [
                    {
                        "option": "Feel excited and curious about the opportunity to learn something new",
                        "personality": "You are a curious and adventurous person who is always looking for new challenges and opportunities to learn. You may be good at pushing yourself out of your comfort zone and trying new things."
                    },
                    {
                        "option": "Feel anxious and overwhelmed by the unknown",
                        "personality": "You are a person who may struggle with uncertainty and the unknown. You may have a tendency to become anxious or overwhelmed when faced with new challenges or situations."
                    },
                    {
                        "option": "Avoid the challenge and stick to what you know",
                        "personality": "You are a person who may struggle with taking risks or trying new things. You may have a tendency to stick to what you know and avoid challenges or situations that are outside of your comfort zone."
                    },
                    {
                        "option": "Feel resentful and frustrated by the challenge",
                        "personality": "You are a person who may struggle with a fixed mindset when faced with new challenges. You may have a tendency to become resentful or frustrated by the challenge rather than seeing it as an opportunity for growth."
                    }
                ]
            },
            {
                "id": 10,
                "question": "How do you handle success?",
                "options": [
                    {
                        "option": "Celebrate your achievements and feel proud of yourself",
                        "personality": "You are a confident and self-assured person who is good at celebrating your achievements and feeling proud of yourself. You may have a healthy sense of self-esteem and be able to recognize your own accomplishments."
                    },
                    {
                        "option": "Downplay your success and avoid drawing attention to yourself",
                        "personality": "You are a humble and modest person who may struggle with self-promotion. You may have a tendency to downplay your success and avoid drawing attention to yourself."
                    },
                    {
                        "option": "Feel guilty or undeserving of your success",
                        "personality": "You are a person who may struggle with imposter syndrome or feelings of inadequacy. You may have a tendency to feel guilty or undeserving of your success, even if you have worked hard to achieve it."
                    },
                    {
                        "option": "Feel anxious about maintaining your success",
                        "personality": "You are a person who may struggle with anxiety or pressure when it comes to maintaining your success. You may have a tendency to worry about the future and whether you will be able to sustain your achievements."
                    }
                ]
            }
        ]
  }
}
export const LoggedOut = {};

// // More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
// export const LoggedIn = {
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);
//     const loginButton = await canvas.getByRole('button', {
//       name: /Log in/i,
//     });
//     await userEvent.click(loginButton);
//   },
// };
