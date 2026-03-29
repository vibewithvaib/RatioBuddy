import { ChapterData } from '../types';

export const COMPARING_QUANTITIES_CONTENT: ChapterData = {
  subject: "Mathematics",
  class: "7",
  chapter: {
    id: "CH8",
    name: "Comparing Quantities",
    description: "Understanding ratios, proportions, percentages, profit-loss, and interest."
  },
  knowledge_components: [
    {
      kc_id: "KC1",
      name: "Simplify and Compare Ratios",
      prerequisite: "Fractions (Class 6)",
      topics: [
      {
        topic_id: "C1.1",
        title: "Introduction to Ratios",
        hook: "🌟 Big Idea: When we compare two quantities of the same kind, we can express that comparison as a Ratio. \n\n📏 For example, if Heena is 150 cm tall and Amir is 75 cm, Heena is twice as tall as Amir! \n\nIt's all about seeing how many times one thing fits into another! 🚀",
        subtopics: [
          "Understand ratio as a comparison of two quantities",
          "Express ratios in simplest form",
          "Ensure units are the same before comparing"
        ],
        exploration: "🚀 What is a Ratio? \n\nA ratio is a cool way to compare two quantities by division! 📏 \n\nIt tells us how many times one quantity is of another. \n\n✨ Example: \nIf Heena is 150 cm tall and Amir is 75 cm, the ratio of Heena's height to Amir's height is 150:75. \n\n✂️ Simplifying: \nWe can simplify this by dividing both numbers by 75, which gives us 2:1. \n\nThis means Heena is twice as tall as Amir! 🚀 \n\n🌍 Everywhere! \nRatios are everywhere—from scaling a map to mixing your favorite drink! 🥤",
        exploration_images: [
          "/assets/media/images/kc1/exp_1.jpg",
          "/assets/media/images/kc1/exp_2.jpg",
          "/assets/media/images/kc1/exp_3.jpg"
        ],
        explanation: "To find a ratio, we divide the first quantity by the second. ➗\n\nCrucial Rule: The units of both quantities must be the same before you compare them! For instance, you cannot directly compare 3 km to 300 m; you must first convert 3 km to 3000 m. 📏\n\nA ratio itself is a pure number and has no units. We often express ratios in their simplest form, similar to how we simplify fractions. 🍰\n\nIf the ratio is a:b, it can also be written as the fraction a/b. Remember, the order matters! 2:1 is different from 1:2. Always simplify using the Highest Common Factor (HCF). 🎯",
        video_url: "/assets/media/videos/kc1.mp4",
        real_life_example: "🐆 Real Life: \n\nThe speed of a Cheetah (120 km/h) compared to a Man (20 km/h) is 120:20 or 6:1. \n\n🏎️ This means the cheetah is 6 times faster than the man! \n\nIsn't that fast? 🚀",
        story_example: "Heena and Amir are comparing their heights. 📏 Heena is 150 cm and Amir is 75 cm. \n\nHeena says, 'I am 2 times your height!', which is a ratio of 2:1. \n\nAmir says, 'My height is half of yours!', which is a ratio of 1:2. 👫",
        material: {
          worked_example: {
            problem: "📝 Let's Solve: \nFind the ratio of 3 km to 300 m.",
            solution: "🔍 Step 1: Convert km to m: \n3 km = 3 × 1000 m = 3000 m \n\n✍️ Step 2: Write the ratio: \n3000 : 300 \n\n🎯 Step 3: Simplify by dividing both by 300: \n10 : 1 🏁"
          },
          summary: ["Units must match", "Ratio has no units", "Simplify using GCD", "Order of terms matters"]
        },
        quick_check: {
          question: "What is the most important rule when finding a ratio between two quantities?",
          options: ["The quantities must have the same units", "The quantities must be large numbers", "The ratio must always be 1:1"],
          correct_answer: "The quantities must have the same units"
        },
        questions: [
          {
            question_id: "Q1.1.1",
            question_type: "MCQ",
            difficulty: "easy",
            text: "Find the ratio of ₹ 5 to 50 paise.",
            options: ["1:10", "10:1", "1:1", "5:50"],
            correct_answer: "10:1",
            hints: {
              general: "Remember that ratios require same units. How many paise are in ₹ 1?",
              strategic: "Convert ₹ 5 to paise first. Then divide 500 by 50.",
              bottom_out: "₹ 5 = 500 paise. So the ratio is 500:50. Divide both by 50 to get 10:1."
            },
            explanation: "₹ 5 = 500 paise. Ratio = 500:50 = 10:1.",
            remedial: {
              text: "Always convert to the smaller unit first. ₹ 1 = 100 paise.",
              scaffolded_question: "5 * 100 = ?",
              scaffolded_answer: "500",
              remedial_images: ["/assets/media/images/kc1/rem_1.jpg", "/assets/media/images/kc1/rem_2.jpg"]
            }
          },
          {
            question_id: "Q1.1.2",
            question_type: "MCQ",
            difficulty: "medium",
            text: "Find the ratio of 15 kg to 210 g.",
            options: ["500:7", "7:500", "1:14", "14:1"],
            correct_answer: "500:7",
            hints: {
              general: "Convert kilograms to grams first.",
              strategic: "1 kg = 1000 g. So 15 kg = 15000 g. Now find the ratio of 15000 to 210.",
              bottom_out: "15000 / 210 = 1500 / 21. Divide both by 3 to get 500 / 7."
            },
            explanation: "15 kg = 15000 g. Ratio = 15000:210 = 500:7.",
            remedial: {
              text: "1 kg = 1000 g. Convert 15 kg to grams.",
              scaffolded_question: "15 * 1000 = ?",
              scaffolded_answer: "15000",
              remedial_images: ["/assets/media/images/kc1/rem_1.jpg", "/assets/media/images/kc1/rem_2.jpg"]
            }
          },
          {
            question_id: "Q1.1.3",
            question_type: "MCQ",
            difficulty: "easy",
            text: "Find the ratio of 9 m to 27 cm.",
            options: ["1:3", "3:1", "100:3", "3:100"],
            correct_answer: "100:3",
            hints: {
              general: "Convert meters to centimeters first.",
              strategic: "1 m = 100 cm. So 9 m = 900 cm.",
              bottom_out: "Ratio = 900:27. Both are divisible by 9."
            },
            explanation: "9 m = 900 cm. Ratio = 900:27 = 100:3.",
            remedial: {
              text: "1 m = 100 cm. How many cm in 9 m?",
              scaffolded_question: "9 * 100 = ?",
              scaffolded_answer: "900",
              remedial_images: ["/assets/media/images/kc1/rem_1.jpg", "/assets/media/images/kc1/rem_2.jpg"]
            }
          },
          {
            question_id: "Q1.1.4",
            question_type: "MCQ",
            difficulty: "medium",
            text: "Find the ratio of 30 days to 36 hours.",
            options: ["20:1", "1:20", "5:6", "6:5"],
            correct_answer: "20:1",
            hints: {
              general: "Convert days to hours.",
              strategic: "1 day = 24 hours. 30 days = 30 * 24 hours.",
              bottom_out: "30 * 24 = 720. Ratio = 720:36."
            },
            explanation: "30 days = 720 hours. Ratio = 720:36 = 20:1.",
            remedial: {
              text: "1 day = 24 hours. Multiply 30 by 24.",
              scaffolded_question: "30 * 24 = ?",
              scaffolded_answer: "720",
              remedial_images: ["/assets/media/images/kc1/rem_1.jpg", "/assets/media/images/kc1/rem_.jpg"]
            }
          },
          {
            question_id: "Q1.1.5",
            question_type: "MCQ",
            difficulty: "medium",
            text: "A recipe calls for 2 cups of flour for every 3 cups of sugar. What is the ratio of flour to sugar?",
            options: ["2:3", "3:2", "2:5", "3:5"],
            correct_answer: "2:3",
            hints: {
              general: "The order of terms in a ratio matters.",
              strategic: "Flour is mentioned first, so its quantity (2) comes first in the ratio.",
              bottom_out: "The ratio is Flour:Sugar = 2:3."
            },
            explanation: "The ratio is 2:3 as flour is 2 cups and sugar is 3 cups.",
            remedial: {
              text: "Ratios compare two quantities in a specific order.",
              scaffolded_question: "Which quantity is mentioned first?",
              scaffolded_answer: "flour",
              remedial_images: ["/assets/media/images/kc1/rem_1.jpg", "/assets/media/images/kc1/rem_2.jpg"]
            }
          },
          {
            question_id: "Q1.1.6",
            question_type: "MCQ",
            difficulty: "hard",
            text: "A map is drawn to a scale of 1:2,000,000. If two cities are 4 cm apart on the map, what is the actual distance between them?",
            options: ["80 km", "8 km", "800 km", "0.8 km"],
            correct_answer: "80 km",
            hints: {
              general: "The scale 1:2,000,000 means 1 cm on map = 2,000,000 cm in reality.",
              strategic: "Multiply 4 cm by 2,000,000 to get the actual distance in cm.",
              bottom_out: "4 * 2,000,000 = 8,000,000 cm. Now convert cm to km (1 km = 100,000 cm)."
            },
            explanation: "Actual distance = 4 * 2,000,000 = 8,000,000 cm = 80 km.",
            remedial: {
              text: "1 km = 100,000 cm. Divide 8,000,000 by 100,000.",
              scaffolded_question: "8,000,000 / 100,000 = ?",
              scaffolded_answer: "80",
              remedial_images: ["/assets/media/images/kc1/rem_1.jpg", "/assets/media/images/kc1/rem_2.jpg"]
            }
          },
          {
            question_id: "Q1.1.6",
            question_type: "MCQ",
            difficulty: "medium",
            text: "The ratio of boys to girls in a class is 5:3. If there are 24 girls, how many boys are there?",
            options: ["40", "15", "30", "20"],
            correct_answer: "40",
            hints: {
              general: "The ratio 5:3 means for every 3 girls, there are 5 boys.",
              strategic: "If 3 parts = 24 girls, then 1 part = 24 / 3 = 8.",
              bottom_out: "Now multiply 5 parts by 8 to find the number of boys."
            },
            explanation: "3 parts = 24 => 1 part = 8. Boys = 5 parts = 5 * 8 = 40.",
            remedial: {
              text: "Divide the number of girls by their ratio part to find the value of one 'part'.",
              scaffolded_question: "24 / 3 = ?",
              scaffolded_answer: "8",
              remedial_images: ["/assets/media/images/kc1/rem_1.jpg", "/assets/media/images/kc1/rem_2.jpg"]
            }
          },
          {
            question_id: "Q1.1.7",
            question_type: "MCQ",
            difficulty: "easy",
            text: "Which of the following ratios is in its simplest form?",
            options: ["15:20", "2:3", "4:6", "10:100"],
            correct_answer: "2:3",
            hints: {
              general: "A ratio is in simplest form if the only common factor is 1.",
              strategic: "Check if both numbers in each ratio can be divided by the same number.",
              bottom_out: "15 and 20 can be divided by 5. 4 and 6 by 2. 10 and 100 by 10. Only 2 and 3 have no common factor other than 1."
            },
            explanation: "2 and 3 have no common factors other than 1.",
            remedial: {
              text: "A ratio is simplified by dividing both parts by their Greatest Common Divisor.",
              scaffolded_question: "Can 4 and 6 both be divided by 2?",
              scaffolded_answer: "Yes",
              remedial_images: ["/assets/media/images/kc1/rem_1.jpg", "/assets/media/images/kc1/rem_2.jpg"]
            }
          },
          {
            question_id: "Q1.1.8",
            question_type: "MCQ",
            difficulty: "medium",
            text: "Find the ratio of 500 mL to 2 liters.",
            options: ["1:4", "4:1", "1:40", "250:1"],
            correct_answer: "1:4",
            hints: {
              general: "1 liter = 1000 mL.",
              strategic: "Convert 2 liters to mL first: 2 * 1000 = 2000 mL.",
              bottom_out: "Ratio = 500 : 2000. Divide both by 500."
            },
            explanation: "2 liters = 2000 mL. Ratio = 500:2000 = 1:4.",
            remedial: {
              text: "1 L = 1000 mL. How many mL in 2 liters?",
              scaffolded_question: "2 * 1000 = ?",
              scaffolded_answer: "2000",
              remedial_images: ["/assets/media/images/kc1/rem_1.jpg", "/assets/media/images/kc1/rem_2.jpg"]
            }
          },
          {
            question_id: "Q1.1.10",
            question_type: "MCQ",
            difficulty: "medium",
            text: "The ratio of red balls to blue balls is 4:7. If there are 28 blue balls, how many red balls are there?",
            options: ["16", "49", "11", "21"],
            correct_answer: "16",
            hints: {
              general: "The ratio tells us that for every 7 blue balls, there are 4 red balls.",
              strategic: "If 7 parts = 28, then 1 part = 28 / 7 = 4.",
              bottom_out: "Now multiply 4 parts by 4 to find the number of red balls."
            },
            explanation: "7 parts = 28 => 1 part = 4. Red balls = 4 parts = 4 * 4 = 16.",
            remedial: {
              text: "Divide the total of one quantity by its ratio part to find the value of one 'part'.",
              scaffolded_question: "28 / 7 = ?",
              scaffolded_answer: "4",
              remedial_images: ["/assets/media/images/kc1/rem_1.jpg", "/assets/media/images/kc1/rem_2.jpg"]
            }
          },
          {
            question_id: "Q1.1.11",
            question_type: "MCQ",
            difficulty: "medium",
            text: "The ratio of length to breadth of a rectangular field is 5:2. If the breadth is 40 m, find the length.",
            options: ["100 m", "80 m", "20 m", "50 m"],
            correct_answer: "100 m",
            hints: {
              general: "The ratio 5:2 means for every 2 units of breadth, there are 5 units of length.",
              strategic: "If 2 parts = 40 m, then 1 part = 40 / 2 = 20 m.",
              bottom_out: "Now multiply 5 parts by 20 m to find the length."
            },
            explanation: "2 parts = 40 => 1 part = 20. Length = 5 parts = 5 * 20 = 100 m.",
            remedial: {
              text: "Divide the breadth by its ratio part to find the value of one 'part'.",
              scaffolded_question: "40 / 2 = ?",
              scaffolded_answer: "20",
              remedial_images: ["/assets/media/images/kc1/rem_1.jpg", "/assets/media/images/kc1/rem_2.jpg"]
            }
          },
          {
            question_id: "Q1.1.12",
            question_type: "MCQ",
            difficulty: "hard",
            text: "A sum of ₹ 1200 is divided between A and B in the ratio 3:5. How much does B get?",
            options: ["₹ 750", "₹ 450", "₹ 600", "₹ 800"],
            correct_answer: "₹ 750",
            hints: {
              general: "First find the total number of parts.",
              strategic: "Total parts = 3 + 5 = 8. These 8 parts equal ₹ 1200.",
              bottom_out: "1 part = 1200 / 8 = 150. B gets 5 parts = 5 * 150."
            },
            explanation: "Total parts = 8. 1 part = 150. B = 5 * 150 = 750.",
            remedial: {
              text: "Total parts = Sum of ratio terms. Divide the total sum by total parts.",
              scaffolded_question: "What is 3 + 5?",
              scaffolded_answer: "8",
              remedial_images: ["/assets/media/images/kc1/rem_1.jpg", "/assets/media/images/kc1/rem_2.jpg"]
            }
          },
          {
            question_id: "Q1.1.13",
            question_type: "MCQ",
            difficulty: "medium",
            text: "The ratio of length to breadth of a rectangular field is 5:2. If the breadth is 40 m, find the length.",
            options: ["100 m", "80 m", "20 m", "50 m"],
            correct_answer: "100 m",
            hints: {
              general: "The ratio 5:2 means for every 2 units of breadth, there are 5 units of length.",
              strategic: "If 2 parts = 40 m, then 1 part = 40 / 2 = 20 m.",
              bottom_out: "Now multiply 5 parts by 20 m to find the length."
            },
            explanation: "2 parts = 40 => 1 part = 20. Length = 5 parts = 5 * 20 = 100 m.",
            remedial: {
              text: "Divide the breadth by its ratio part to find the value of one 'part'.",
              scaffolded_question: "40 / 2 = ?",
              scaffolded_answer: "20",
              remedial_images: ["/assets/media/images/kc1/rem_1.jpg", "/assets/media/images/kc1/rem_2.jpg"]
            }
          }
        ]
      }
    ]
  },
  {
    kc_id: "KC2",
    name: "Equivalent Ratios and Proportions",
    topics: [
      {
        topic_id: "C2.1",
        title: "Equivalent Ratios",
        hook: "🌟 Big Idea: If a cricket team wins 8 matches and loses 2, is their performance better than a team that wins 4 and loses 1? \n\n⚖️ We use Equivalent Ratios to find out! \n\nIt's like comparing two different sized pizzas to see which one has more toppings! 🍕",
        subtopics: [
          "Identify equivalent ratios",
          "Understand proportions",
          "Use unitary method to solve problems"
        ],
        exploration: "👯‍♂️ What are Equivalent Ratios? \n\nTwo ratios are equivalent if they represent the same comparison. \n\nFor example, 1:2 is the same as 2:4 or 5:10. \n\n✨ How to find them? \nWe can find equivalent ratios by multiplying or dividing both terms by the same non-zero number. \n\n🍰 This is just like finding equivalent fractions! \n\n⚖️ Proportion: \nWhen two ratios are equal, we say they are in proportion. \n\nProportions are super useful for scaling recipes or calculating travel time! 🏎️",
        exploration_images: [
          "/assets/media/images/kc2/exp_1.jpg",
          "/assets/media/images/kc2/exp_2.jpg"
        ],
        explanation: "To check if two ratios are equivalent, convert them to fractions and see if they are equal. 👯‍♂️ For example, is 1:2 equivalent to 2:4? Yes, because 1/2 = 2/4.\n\nProportion: If a:b = c:d, then a, b, c, and d are in proportion. ⚖️\n\n- The first and fourth terms (a and d) are called Extremes.\n- The second and third terms (b and c) are called Means.\n\nGolden Rule: Product of Extremes = Product of Means (a × d = b × c). This is a fast way to find a missing value! 🔑",
        video_url: "/assets/media/videos/kc2.mp4",
        real_life_example: "💻 Real Life: \n\nIn a computer lab, there are 3 computers for every 6 students. This is a ratio of 1:2. \n\n🎓 If there are 24 students, we need 12 computers to keep the same ratio! \n\nEveryone gets a turn! ✨",
        story_example: "Aruna made a sketch of a building. 🏗️ The ratio of heights in the drawing must be the same as the ratio of actual heights to look 'right'. \n\nIf the door is 1/10th the height of the building in reality, it must be 1/10th the height in the drawing too! ✍️",
        material: {
          worked_example: {
            problem: "📝 Let's Solve: \nAre the ratios 1:2 and 2:3 equivalent?",
            solution: "🔍 Step 1: Convert to fractions: \n1/2 and 2/3 \n\n✍️ Step 2: Find a common denominator (6): \n1/2 = 3/6 \n2/3 = 4/6 \n\n🎯 Step 3: Compare: \nSince 3/6 is not equal to 4/6, they are not equivalent. ❌"
          },
          summary: ["Proportions are equal ratios", "Unitary method finds value of one unit first", "Cross-multiplication can check proportion"]
        },
        quick_check: {
          question: "If two ratios are equal, what are they said to be in?",
          options: ["Proportion", "Addition", "Subtraction"],
          correct_answer: "Proportion"
        },
        questions: [
          {
            question_id: "Q2.1.1",
            question_type: "MCQ",
            difficulty: "medium",
            text: "In a computer lab, there are 3 computers for every 6 students. How many computers will be needed for 24 students?",
            options: ["12", "8", "15", "10"],
            correct_answer: "12",
            hints: {
              general: "Find the ratio of computers to students first.",
              strategic: "The ratio is 3:6, which is 1:2. This means 1 computer for every 2 students.",
              bottom_out: "Divide the total number of students (24) by 2."
            },
            explanation: "Ratio = 3/6 = 1/2. For 24 students, computers = 24 * (1/2) = 12.",
            remedial: {
              text: "If 6 students need 3 computers, then 1 student needs 3/6 = 0.5 computers.",
              scaffolded_question: "What is 0.5 * 24?",
              scaffolded_answer: "12",
              remedial_images: ["/assets/media/images/kc2/rem_1.jpg", "/assets/media/images/kc2/rem_2.jpg"]
            }
          },
          {
            question_id: "Q2.1.2",
            question_type: "MCQ",
            difficulty: "easy",
            text: "Are the ratios 1:2 and 2:4 equivalent?",
            options: ["Yes", "No"],
            correct_answer: "Yes",
            hints: {
              general: "Simplify both ratios to their simplest form.",
              strategic: "1:2 is already simple. 2:4 can be divided by 2.",
              bottom_out: "2/2 : 4/2 = 1:2. They are the same."
            },
            explanation: "2:4 = 1:2. So they are equivalent.",
            remedial: {
              text: "Divide both numbers in 2:4 by 2.",
              scaffolded_question: "What is 2 / 2 and 4 / 2?",
              scaffolded_answer: "1 and 2",
              remedial_images: ["/assets/media/images/kc2/rem_1.jpg", "/assets/media/images/kc2/rem_2.jpg"]
            }
          },
          {
            question_id: "Q2.1.3",
            question_type: "MCQ",
            difficulty: "medium",
            text: "If 6 bowls cost ₹ 90, what would be the cost of 10 such bowls?",
            options: ["₹ 150", "₹ 120", "₹ 100", "₹ 180"],
            correct_answer: "₹ 150",
            hints: {
              general: "Find the cost of one bowl first (Unitary Method).",
              strategic: "Cost of 1 bowl = 90 / 6.",
              bottom_out: "Cost of 1 bowl = ₹ 15. Now multiply by 10."
            },
            explanation: "Cost of 1 bowl = 90/6 = ₹ 15. Cost of 10 bowls = 15 * 10 = ₹ 150.",
            remedial: {
              text: "Divide the total cost by the number of bowls.",
              scaffolded_question: "What is 90 / 6?",
              scaffolded_answer: "15",
              remedial_images: ["/assets/media/images/kc2/rem_1.jpg", "/assets/media/images/kc2/rem_2.jpg"]
            }
          },
          {
            question_id: "Q2.1.4",
            question_type: "MCQ",
            difficulty: "hard",
            text: "Out of 32 students, 8 are absent. What is the ratio of present students to absent students?",
            options: ["3:1", "1:3", "4:1", "1:4"],
            correct_answer: "3:1",
            hints: {
              general: "First find the number of present students.",
              strategic: "Present students = Total - Absent = 32 - 8.",
              bottom_out: "Present = 24. Ratio = 24:8. Simplify it."
            },
            explanation: "Present = 24. Ratio = 24:8 = 3:1.",
            remedial: {
              text: "How many students are present if 8 out of 32 are absent?",
              scaffolded_question: "32 - 8 = ?",
              scaffolded_answer: "24",
              remedial_images: ["/assets/media/images/kc2/rem_1.jpg", "/assets/media/images/kc2/rem_2.jpg"]
            }
          },
          {
            question_id: "Q2.1.5",
            question_type: "MCQ",
            difficulty: "medium",
            text: "A car travels 90 km in 2.5 hours. How much distance will it cover in 2 hours with the same speed?",
            options: ["72 km", "80 km", "60 km", "70 km"],
            correct_answer: "72 km",
            hints: {
              general: "Find the speed of the car first (Distance / Time).",
              strategic: "Speed = 90 / 2.5. Then multiply speed by 2 hours.",
              bottom_out: "Speed = 36 km/h. Distance in 2 hours = 36 * 2."
            },
            explanation: "Speed = 90/2.5 = 36 km/h. Distance = 36 * 2 = 72 km.",
            remedial: {
              text: "Divide distance by time to get speed.",
              scaffolded_question: "What is 90 / 2.5?",
              scaffolded_answer: "36",
              remedial_images: ["/assets/media/images/kc2/rem_1.jpg", "/assets/media/images/kc2/rem_2.jpg"]
            }
          },
          {
            question_id: "Q2.1.6",
            question_type: "MCQ",
            difficulty: "medium",
            text: "Which ratio is greater: 2:3 or 5:8?",
            options: ["2:3", "5:8", "They are equal", "Cannot be determined"],
            correct_answer: "2:3",
            hints: {
              general: "Convert both ratios to fractions and compare.",
              strategic: "2/3 = 16/24 and 5/8 = 15/24.",
              bottom_out: "Compare the numerators 16 and 15."
            },
            explanation: "2/3 = 0.66... and 5/8 = 0.625. So 2:3 is greater.",
            remedial: {
              text: "Find a common denominator to compare fractions.",
              scaffolded_question: "What is 2/3 with denominator 24?",
              scaffolded_answer: "16/24",
              remedial_images: ["/assets/media/images/kc2/rem_1.jpg", "/assets/media/images/kc2/rem_2.jpg"]
            }
          },
          {
            question_id: "Q2.1.7",
            question_type: "MCQ",
            difficulty: "hard",
            text: "If x:10 = 15:25, find the value of x.",
            options: ["6", "5", "4", "8"],
            correct_answer: "6",
            hints: {
              general: "In a proportion, the product of means equals the product of extremes.",
              strategic: "x/10 = 15/25. Cross multiply: 25 * x = 15 * 10.",
              bottom_out: "25x = 150. Divide 150 by 25."
            },
            explanation: "x/10 = 3/5 => 5x = 30 => x = 6.",
            remedial: {
              text: "Simplify the known ratio first. 15/25 = 3/5.",
              scaffolded_question: "If x/10 = 3/5, what is x?",
              scaffolded_answer: "6",
              remedial_images: ["/assets/media/images/kc2/rem_1.jpg", "/assets/media/images/kc2/rem_2.jpg"]
            }
          },
          {
            question_id: "Q2.1.8",
            question_type: "MCQ",
            difficulty: "medium",
            text: "A recipe for 4 people uses 200g of flour. How much flour is needed for 6 people?",
            options: ["300g", "250g", "400g", "350g"],
            correct_answer: "300g",
            hints: {
              general: "Find the amount of flour per person first.",
              strategic: "Flour per person = 200 / 4 = 50g.",
              bottom_out: "Now multiply 50g by 6 people."
            },
            explanation: "Unit rate = 200/4 = 50g per person. For 6 people = 50 * 6 = 300g.",
            remedial: {
              text: "Use the unitary method: find for 1, then for 6.",
              scaffolded_question: "What is 200 / 4?",
              scaffolded_answer: "50",
              remedial_images: ["/assets/media/images/kc2/rem_1.jpg", "/assets/media/images/kc2/rem_2.jpg"]
            }
          },
          {
            question_id: "Q2.1.9",
            question_type: "MCQ",
            difficulty: "medium",
            text: "Are the ratios 15:20 and 45:60 equivalent?",
            options: ["Yes", "No"],
            correct_answer: "Yes",
            hints: {
              general: "Simplify both ratios to their lowest terms.",
              strategic: "15:20 = 3:4. 45:60 = 3:4.",
              bottom_out: "Since both simplify to 3:4, they are equivalent."
            },
            explanation: "15/20 = 3/4 and 45/60 = 3/4. They are equivalent.",
            remedial: {
              text: "Divide 45 and 60 by their greatest common factor (15).",
              scaffolded_question: "What is 45 / 15?",
              scaffolded_answer: "3",
              remedial_images: ["/assets/media/images/kc2/rem_1.jpg", "/assets/media/images/kc2/rem_2.jpg"]
            }
          }
        ]
      }
    ]
  },
  {
    kc_id: "KC3",
    name: "Fractions, Decimals and Percentages",
    topics: [
      {
        topic_id: "C3.1",
        title: "Meaning of Percentage",
        hook: "🌟 Big Idea: Anita got 320/400 and Rita got 300/360. Who did better? \n\n💯 We use Percentages to compare when the totals are different! \n\nIt brings everyone to a common ground of 100! 🎯",
        subtopics: [
          "Understand percentage as 'per hundred'",
          "Convert fractions to percentages",
          "Convert decimals to percentages",
          "Convert percentages back to fractions and decimals"
        ],
        exploration: "💯 What is a Percentage? \n\nPercentages are a way of expressing a number as a fraction of 100! \n\nThe word 'percent' comes from Latin, meaning 'by the hundred'. It is denoted by the symbol %. \n\n🧩 Example: \n1% means 1 out of 100 or 1/100. \n\n🖼️ The Big Picture: \nPercentages are great because they provide a standard scale for comparison. \n\nWhether it's exam scores or discounts, percentages help you see the 'big picture'! ✨",
        exploration_images: [
          "/assets/media/images/kc3/exp_1.jpg",
          "/assets/media/images/kc3/exp_2.jpg",
          "/assets/media/images/kc3/exp_3.jpg"
        ],
        explanation: "To convert any fraction or decimal to a percentage, multiply it by 100 and add the '%' sign. ➕\n\nConversely, to convert a percentage to a fraction or decimal, divide by 100 and remove the '%' sign. ➖\n\nWhy use 100? Because 100 is a convenient base that makes comparisons easy! 🎯 If you got 18/20 in one test and 22/25 in another, it's hard to tell which is better. But as percentages (90% and 88%), the winner is clear! 🏆",
        video_url: "/assets/media/videos/kc3.mp4",
        real_life_example: "📝 Real Life: \n\n80% marks means 80 marks out of every 100. \n\n🌟 If the total marks are 500, then 80% is 400 marks! \n\nGreat job! 🏆",
        story_example: "Rina made a table top with 100 tiles. 🧱 \n\n- 14 were yellow (14%) 🟡\n- 26 were green (26%) 🟢\n- The rest (60) were red (60%) 🔴\n\nAll together, they make 100%! 🌈",
        material: {
          worked_example: {
            problem: "📝 Let's Solve: \nConvert 0.75 to percentage and 40% to a fraction.",
            solution: "🔍 Step 1: Convert 0.75 to %: \n0.75 × 100 = 75% \n\n✍️ Step 2: Convert 40% to fraction: \n40% = 40/100 = 2/5 🍰"
          },
          summary: ["% means parts per 100", "Multiply by 100 to get %", "Divide by 100 to remove %"]
        },
        quick_check: {
          question: "What does the symbol '%' literally mean?",
          options: ["Per hundred", "Per thousand", "Per ten"],
          correct_answer: "Per hundred"
        },
        questions: [
          {
            question_id: "Q3.1.1",
            question_type: "MCQ",
            difficulty: "easy",
            text: "Convert 1/8 to per cent.",
            options: ["12.5%", "10%", "15%", "8%"],
            correct_answer: "12.5%",
            hints: {
              general: "To convert a fraction to percentage, multiply by 100.",
              strategic: "Calculate (1/8) * 100.",
              bottom_out: "100 divided by 8 is 12.5."
            },
            explanation: "(1/8) * 100 = 12.5%.",
            remedial: {
              text: "Divide 100 by the denominator.",
              scaffolded_question: "What is 100 / 8?",
              scaffolded_answer: "12.5",
              remedial_images: ["/assets/media/images/kc3/rem_1.jpg", "/assets/media/images/kc3/rem_2.jpg", "/assets/media/images/kc3/rem_3.jpg"]
            }
          },
          {
            question_id: "Q3.1.2",
            question_type: "MCQ",
            difficulty: "easy",
            text: "Convert 0.02 to per cent.",
            options: ["2%", "0.2%", "20%", "0.02%"],
            correct_answer: "2%",
            hints: {
              general: "Multiply the decimal by 100.",
              strategic: "0.02 * 100 = ?",
              bottom_out: "Moving the decimal point two places to the right gives 2."
            },
            explanation: "0.02 * 100 = 2%.",
            remedial: {
              text: "Did not multiply by 100.",
              scaffolded_question: "0.02 * 100 = ?",
              scaffolded_answer: "2",
              remedial_images: ["/assets/media/images/kc3/rem_1.jpg", "/assets/media/images/kc3/rem_2.jpg", "/assets/media/images/kc3/rem_3.jpg"]
            }
          },
          {
            question_id: "Q3.1.3",
            question_type: "MCQ",
            difficulty: "medium",
            text: "Convert 5/4 to per cent.",
            options: ["125%", "80%", "100%", "120%"],
            correct_answer: "125%",
            hints: {
              general: "Multiply the fraction by 100.",
              strategic: "(5/4) * 100 = ?",
              bottom_out: "5 * 25 = 125."
            },
            explanation: "(5/4) * 100 = 125%.",
            remedial: {
              text: "Multiply 5 by 100 and then divide by 4.",
              scaffolded_question: "What is 500 / 4?",
              scaffolded_answer: "125",
              remedial_images: ["/assets/media/images/kc3/rem_1.jpg", "/assets/media/images/kc3/rem_2.jpg", "/assets/media/images/kc3/rem_3.jpg"]
            }
          },
          {
            question_id: "Q3.1.4",
            question_type: "MCQ",
            difficulty: "easy",
            text: "Convert 35% to decimal.",
            options: ["0.35", "3.5", "35.0", "0.035"],
            correct_answer: "0.35",
            hints: {
              general: "To convert percentage to decimal, divide by 100.",
              strategic: "35 / 100 = ?",
              bottom_out: "Move the decimal point two places to the left."
            },
            explanation: "35% = 35/100 = 0.35.",
            remedial: {
              text: "Divide 35 by 100.",
              scaffolded_question: "What is 35 / 100?",
              scaffolded_answer: "0.35",
              remedial_images: ["/assets/media/images/kc3/rem_1.jpg", "/assets/media/images/kc3/rem_2.jpg", "/assets/media/images/kc3/rem_3.jpg"]
            }
          },
          {
            question_id: "Q3.1.5",
            question_type: "MCQ",
            difficulty: "medium",
            text: "Out of 25 children in a class, 15 are girls. What is the percentage of girls?",
            options: ["60%", "40%", "15%", "25%"],
            correct_answer: "60%",
            hints: {
              general: "Write the number of girls as a fraction of the total children.",
              strategic: "Fraction = 15/25. Now convert this to percentage.",
              bottom_out: "(15/25) * 100 = 3/5 * 100 = 60%."
            },
            explanation: "Percentage = (15/25) * 100 = 60%.",
            remedial: {
              text: "Divide 15 by 25 and multiply by 100.",
              scaffolded_question: "What is 15 * 4? (since 100/25 = 4)",
              scaffolded_answer: "60",
              remedial_images: ["/assets/media/images/kc3/rem_1.jpg", "/assets/media/images/kc3/rem_2.jpg", "/assets/media/images/kc3/rem_3.jpg"]
            }
          },
          {
            question_id: "Q3.1.6",
            question_type: "MCQ",
            difficulty: "medium",
            text: "Convert 2/3 to percentage (round to one decimal place).",
            options: ["66.7%", "66.6%", "67%", "60%"],
            correct_answer: "66.7%",
            hints: {
              general: "Multiply 2/3 by 100.",
              strategic: "200 / 3 = ?",
              bottom_out: "200 divided by 3 is 66.666... which rounds to 66.7."
            },
            explanation: "(2/3) * 100 = 66.66...% ≈ 66.7%.",
            remedial: {
              text: "Perform the division carefully.",
              scaffolded_question: "What is 200 / 3?",
              scaffolded_answer: "66.66",
              remedial_images: ["/assets/media/images/kc3/rem_1.jpg", "/assets/media/images/kc3/rem_2.jpg", "/assets/media/images/kc3/rem_3.jpg"]
            }
          },
          {
            question_id: "Q3.1.7",
            question_type: "MCQ",
            difficulty: "easy",
            text: "What is 100% written as a fraction in simplest form?",
            options: ["1/1", "100/1", "1/100", "10/10"],
            correct_answer: "1/1",
            hints: {
              general: "100% means 100 out of 100.",
              strategic: "Write 100/100 and simplify.",
              bottom_out: "100/100 = 1/1 = 1."
            },
            explanation: "100% = 100/100 = 1.",
            remedial: {
              text: "Any percentage is that number over 100.",
              scaffolded_question: "What is 100 / 100?",
              scaffolded_answer: "1",
              remedial_images: ["/assets/media/images/kc3/rem_1.jpg", "/assets/media/images/kc3/rem_2.jpg", "/assets/media/images/kc3/rem_3.jpg"]
            }
          },
          {
            question_id: "Q3.1.8",
            question_type: "MCQ",
            difficulty: "medium",
            text: "Convert 1.25 to percentage.",
            options: ["125%", "12.5%", "1.25%", "1250%"],
            correct_answer: "125%",
            hints: {
              general: "Multiply the decimal by 100.",
              strategic: "1.25 * 100 = ?",
              bottom_out: "Move the decimal two places to the right."
            },
            explanation: "1.25 * 100 = 125%.",
            remedial: {
              text: "Decimals greater than 1 result in percentages greater than 100%.",
              scaffolded_question: "What is 1.25 * 100?",
              scaffolded_answer: "125",
              remedial_images: ["/assets/media/images/kc3/rem_1.jpg", "/assets/media/images/kc3/rem_2.jpg", "/assets/media/images/kc3/rem_3.jpg"]
            }
          },
          {
            question_id: "Q3.1.9",
            question_type: "MCQ",
            difficulty: "medium",
            text: "Convert 3/8 to a percentage.",
            options: ["37.5%", "35%", "40%", "38%"],
            correct_answer: "37.5%",
            hints: {
              general: "Multiply the fraction by 100%.",
              strategic: "3/8 * 100 = 300 / 8.",
              bottom_out: "300 / 8 = 37.5."
            },
            explanation: "3/8 * 100% = 37.5%.",
            remedial: {
              text: "Divide 300 by 8.",
              scaffolded_question: "300 / 8 = ?",
              scaffolded_answer: "37.5",
              remedial_images: ["/assets/media/images/kc3/rem_1.jpg", "/assets/media/images/kc3/rem_2.jpg", "/assets/media/images/kc3/rem_3.jpg"]
            }
          },
          {
            question_id: "Q3.1.10",
            question_type: "MCQ",
            difficulty: "hard",
            text: "Which is greater: 0.6 or 65%?",
            options: ["65%", "0.6", "They are equal", "Cannot be determined"],
            correct_answer: "65%",
            hints: {
              general: "Convert both to the same format (either decimals or percentages).",
              strategic: "0.6 = 60%. Now compare 60% and 65%.",
              bottom_out: "65% is greater than 60%."
            },
            explanation: "0.6 = 60%. 65% > 60%.",
            remedial: {
              text: "Convert 0.6 to a percentage by multiplying by 100.",
              scaffolded_question: "What is 0.6 * 100?",
              scaffolded_answer: "60",
              remedial_images: ["/assets/media/images/kc3/rem_1.jpg", "/assets/media/images/kc3/rem_2.jpg", "/assets/media/images/kc3/rem_3.jpg"]
            }
          }
        ]
      }
    ]
  },
  {
    kc_id: "KC4",
    name: "Percentage of a Quantity",
    topics: [
      {
        topic_id: "C4.1",
        title: "Calculating Percentage of a Quantity",
        hook: "🌟 Big Idea: If 25% of a class of 40 children like playing football, how many children is that? \n\n⚽ We calculate the Percentage of a Quantity to find out! \n\nIt helps us understand parts of a group! 🏃‍♂️",
        subtopics: [
          "Find a percentage of a given number",
          "Solve real-life problems using percentages",
          "Find the whole quantity when a percentage of it is given"
        ],
        exploration: "🛒 Percentage of a Quantity \n\nCalculating a percentage of a quantity is one of the most common uses of math! \n\nWhether you're finding a 20% discount or calculating a 15% tip, you're using this concept. \n\n🤔 Think about it: \nIt's like saying, 'If there were 100 of these, I'd take x. So, how many do I take from the actual total?' \n\n🌍 This helps us understand the relative importance of a part within a larger whole! ✨",
        exploration_images: [
          "/assets/media/images/kc4/exp_1.jpg",
          "/assets/media/images/kc4/exp_2.jpg"
        ],
        explanation: "To find x% of a quantity, use this simple formula: 🧮\n\nResult = (x / 100) × Total Quantity\n\nFor example, to find 20% of 500, you calculate (20/100) × 500 = 0.2 × 500 = 100. 💡\n\nFinding the Whole: If you know the part and the percentage, you can find the total by dividing: Whole = Part / (x/100).\n\nPro Tip: Remember that 'of' in math usually means multiplication! ✖️",
        video_url: "/assets/media/videos/kc4.mp4",
        real_life_example: "⚽ Real Life: \n\nA survey of 40 children showed that 25% liked playing football. \n\n🏃‍♂️ 25% of 40 = (25/100) × 40 = 1/4 × 40 = 10 children! \n\nLet's play! 🏟️",
        story_example: "Rahul bought a sweater and saved ₹ 200 when a discount of 25% was given. 🧶 \n\nSince 25% (or 1/4) of the price is ₹ 200, the full price must be 4 times ₹ 200, which is ₹ 800! 💰",
        material: {
          worked_example: {
            problem: "📝 Let's Solve: \nFind 15% of 250 and find the number whose 75% is 15.",
            solution: "🔍 Step 1: Find 15% of 250: \n(15/100) × 250 = 37.5 \n\n✍️ Step 2: Find the whole number: \n75% of x = 15 \n(75/100) × x = 15 \nx = 15 × (100/75) = 15 × (4/3) = 20 🎯"
          },
          summary: ["x% of N = (x/100) * N", "To find the whole: Whole = (Part * 100) / Percentage"]
        },
        quick_check: {
          question: "How do you find 25% of a number?",
          options: ["Multiply the number by 25/100", "Divide the number by 25", "Add 25 to the number"],
          correct_answer: "Multiply the number by 25/100"
        },
        questions: [
          {
            question_id: "Q4.1.1",
            question_type: "MCQ",
            difficulty: "medium",
            text: "Find 75% of 12.",
            options: ["9", "8", "10", "6"],
            correct_answer: "9",
            hints: {
              general: "75% is the same as 3/4.",
              strategic: "Multiply 12 by 75/100 or 3/4.",
              bottom_out: "3/4 of 12 is 9."
            },
            explanation: "(75/100) * 12 = 9.",
            remedial: {
              text: "Forgot multiplication step.",
              scaffolded_question: "What is 0.75 * 12?",
              scaffolded_answer: "9",
              remedial_images: ["/assets/media/images/kc4/rem_1.jpg", "/assets/media/images/kc4/rem_2.jpg", "/assets/media/images/kc4/rem_3.jpg"]
            }
          },
          {
            question_id: "Q4.1.2",
            question_type: "MCQ",
            difficulty: "easy",
            text: "Find 15% of 250.",
            options: ["37.5", "3.75", "375", "35.5"],
            correct_answer: "37.5",
            hints: {
              general: "Multiply 250 by 15/100.",
              strategic: "15/100 is 0.15. So 250 * 0.15.",
              bottom_out: "25 * 1.5 = 37.5."
            },
            explanation: "(15/100) * 250 = 37.5.",
            remedial: {
              text: "Divide 15 by 100 and multiply by 250.",
              scaffolded_question: "What is 15 * 25?",
              scaffolded_answer: "375",
              remedial_images: ["/assets/media/images/kc4/rem_1.jpg", "/assets/media/images/kc4/rem_2.jpg", "/assets/media/images/kc4/rem_3.jpg"]
            }
          },
          {
            question_id: "Q4.1.3",
            question_type: "MCQ",
            difficulty: "medium",
            text: "Find 1% of 1 hour.",
            options: ["36 seconds", "60 seconds", "0.6 minutes", "1 minute"],
            correct_answer: "36 seconds",
            hints: {
              general: "Convert 1 hour to seconds first.",
              strategic: "1 hour = 3600 seconds. Now find 1% of 3600.",
              bottom_out: "1/100 * 3600 = 36."
            },
            explanation: "1 hour = 3600 seconds. 1% of 3600 = 36 seconds.",
            remedial: {
              text: "1 hour = 60 minutes = 3600 seconds.",
              scaffolded_question: "What is 1/100 of 3600?",
              scaffolded_answer: "36",
              remedial_images: ["/assets/media/images/kc4/rem_1.jpg", "/assets/media/images/kc4/rem_2.jpg", "/assets/media/images/kc4/rem_3.jpg"]
            }
          },
          {
            question_id: "Q4.1.4",
            question_type: "MCQ",
            difficulty: "hard",
            text: "If 25% of a number is 100, what is the number?",
            options: ["400", "200", "300", "500"],
            correct_answer: "400",
            hints: {
              general: "Let the number be x. Then 25% of x = 100.",
              strategic: "(25/100) * x = 100. Solve for x.",
              bottom_out: "x = 100 * (100/25) = 100 * 4 = 400."
            },
            explanation: "25% of x = 100 => x = 100 / 0.25 = 400.",
            remedial: {
              text: "If 1/4 of a number is 100, the number is 4 times 100.",
              scaffolded_question: "What is 4 * 100?",
              scaffolded_answer: "400",
              remedial_images: ["/assets/media/images/kc4/rem_1.jpg", "/assets/media/images/kc4/rem_2.jpg", "/assets/media/images/kc4/rem_3.jpg"]
            }
          },
          {
            question_id: "Q4.1.5",
            question_type: "MCQ",
            difficulty: "medium",
            text: "Find 20% of ₹ 2500.",
            options: ["₹ 500", "₹ 250", "₹ 750", "₹ 1000"],
            correct_answer: "₹ 500",
            hints: {
              general: "Multiply 2500 by 20/100.",
              strategic: "20/100 is 1/5. So divide 2500 by 5.",
              bottom_out: "2500 / 5 = 500."
            },
            explanation: "20% of 2500 = (20/100) * 2500 = 500.",
            remedial: {
              text: "20% is one-fifth of the total.",
              scaffolded_question: "What is 2500 / 5?",
              scaffolded_answer: "500",
              remedial_images: ["/assets/media/images/kc4/rem_1.jpg", "/assets/media/images/kc4/rem_2.jpg", "/assets/media/images/kc4/rem_3.jpg"]
            }
          },
          {
            question_id: "Q4.1.6",
            question_type: "MCQ",
            difficulty: "hard",
            text: "9% of a number is 45. What is the number?",
            options: ["500", "450", "405", "5000"],
            correct_answer: "500",
            hints: {
              general: "Let the number be x. 9% of x = 45.",
              strategic: "(9/100) * x = 45. x = 45 * (100/9).",
              bottom_out: "45 / 9 = 5. So x = 5 * 100 = 500."
            },
            explanation: "9% of x = 45 => x = 45 / 0.09 = 500.",
            remedial: {
              text: "Divide the part by the percentage (as a decimal).",
              scaffolded_question: "What is 45 / 0.09?",
              scaffolded_answer: "500",
              remedial_images: ["/assets/media/images/kc4/rem_1.jpg", "/assets/media/images/kc4/rem_2.jpg", "/assets/media/images/kc4/rem_3.jpg"]
            }
          },
          {
            question_id: "Q4.1.7",
            question_type: "MCQ",
            difficulty: "medium",
            text: "What is 12.5% of 800?",
            options: ["100", "125", "80", "150"],
            correct_answer: "100",
            hints: {
              general: "12.5% is the same as 1/8.",
              strategic: "Divide 800 by 8.",
              bottom_out: "800 / 8 = 100."
            },
            explanation: "12.5% of 800 = (12.5/100) * 800 = 1/8 * 800 = 100.",
            remedial: {
              text: "12.5% is exactly one-eighth.",
              scaffolded_question: "What is 800 / 8?",
              scaffolded_answer: "100",
              remedial_images: ["/assets/media/images/kc4/rem_1.jpg", "/assets/media/images/kc4/rem_2.jpg", "/assets/media/images/kc4/rem_3.jpg"]
            }
          },
          {
            question_id: "Q4.1.8",
            question_type: "MCQ",
            difficulty: "hard",
            text: "A man spends 70% of his salary and saves ₹ 9000. What is his total salary?",
            options: ["₹ 30,000", "₹ 27,000", "₹ 21,000", "₹ 35,000"],
            correct_answer: "₹ 30,000",
            hints: {
              general: "If he spends 70%, he saves 100% - 70% = 30%.",
              strategic: "30% of salary = 9000. Let salary be x.",
              bottom_out: "0.3 * x = 9000. x = 9000 / 0.3 = 30,000."
            },
            explanation: "Savings % = 30%. 30% of x = 9000 => x = 9000 / 0.3 = 30000.",
            remedial: {
              text: "Calculate the savings percentage first.",
              scaffolded_question: "What is 100 - 70?",
              scaffolded_answer: "30",
              remedial_images: ["/assets/media/images/kc4/rem_1.jpg", "/assets/media/images/kc4/rem_2.jpg", "/assets/media/images/kc4/rem_3.jpg"]
            }
          },
          {
            question_id: "Q4.1.9",
            question_type: "MCQ",
            difficulty: "hard",
            text: "If 40% of a number is 160, what is 60% of that same number?",
            options: ["240", "200", "300", "180"],
            correct_answer: "240",
            hints: {
              general: "First find the original number.",
              strategic: "40% of x = 160 => x = 160 / 0.4 = 400. Now find 60% of 400.",
              bottom_out: "0.6 * 400 = 240."
            },
            explanation: "x = 160/0.4 = 400. 60% of 400 = 240.",
            remedial: {
              text: "Find the whole number first.",
              scaffolded_question: "What is 160 / 0.4?",
              scaffolded_answer: "400",
              remedial_images: ["/assets/media/images/kc4/rem_1.jpg", "/assets/media/images/kc4/rem_2.jpg", "/assets/media/images/kc4/rem_3.jpg"]
            }
          },
          {
            question_id: "Q4.1.10",
            question_type: "MCQ",
            difficulty: "medium",
            text: "Find 25% of 2 minutes.",
            options: ["30 seconds", "45 seconds", "15 seconds", "60 seconds"],
            correct_answer: "30 seconds",
            hints: {
              general: "Convert 2 minutes to seconds first.",
              strategic: "2 minutes = 120 seconds. Now find 25% of 120.",
              bottom_out: "1/4 of 120 is 30."
            },
            explanation: "2 mins = 120 secs. 25% of 120 = 30 seconds.",
            remedial: {
              text: "Convert minutes to seconds first.",
              scaffolded_question: "What is 2 * 60?",
              scaffolded_answer: "120",
              remedial_images: ["/assets/media/images/kc4/rem_1.jpg", "/assets/media/images/kc4/rem_2.jpg", "/assets/media/images/kc4/rem_3.jpg"]
            }
          }
        ]
      }
    ]
  },
  {
    kc_id: "KC5",
    name: "Percentage Increase and Decrease",
    topics: [
      {
        topic_id: "C5.1",
        title: "Increase or Decrease as Per Cent",
        hook: "🌟 Big Idea: If the population of a city increases from 25,000 to 24,500, what is the percentage decrease? \n\n📈 We use Percentage Increase and Decrease to track changes over time! \n\nIt's like watching your plant grow or your battery drain! 🔋",
        subtopics: [
          "Calculate percentage increase",
          "Calculate percentage decrease",
          "Identify the base value for calculation",
          "Find the original value after a percentage change"
        ],
        exploration: "📈 Percentage Change \n\nPercentage change is a powerful tool for comparing how quantities grow or shrink! \n\n💰 Example: \nImagine you're tracking savings: if you started with ₹ 1000 and now have ₹ 1200, you've gained ₹ 200. \n\n🤔 Is that a 'big' gain? \nTo find out, we use percentage increase: (200 / 1000) * 100 = 20%. \n\nThis tells us your savings grew by one-fifth! \n\n🌍 Everyday Math: \nWe use these calculations every day—from battery life to population changes. Always compare the change to where you started! 🏁",
        exploration_images: [
          "/assets/media/images/kc5/exp_1.jpg"
        ],
        explanation: "To calculate percentage increase or decrease, follow these steps: 🪜\n\n1. Find the amount of change (New - Original for increase, or Original - New for decrease). 📉\n2. Divide the change by the Original Value. (Always the starting point!)\n3. Multiply by 100 to get the percentage. 💯\n\nThe Multiplier Method: \n- For an x% increase, multiply by (1 + x/100). E.g., 15% increase = multiply by 1.15. 📈\n- For an x% decrease, multiply by (1 - x/100). E.g., 15% decrease = multiply by 0.85. 📉\n\nFinding the Original: Original = Final / (1 ± Rate/100). 🔍",
        video_url: "/assets/media/videos/kc5.mp4",
        real_life_example: "🏆 Real Life: \n\nA school team won 6 games this year against 4 games last year. \n\n🚀 Increase = 2. \n% Increase = (2/4) × 100 = 50%! \n\nWhat a comeback! 🏅",
        story_example: "The number of illiterate persons in a country decreased from 150 lakhs to 100 lakhs. 📉 \n\nDecrease = 50 lakhs. \n% Decrease = (50/150) × 100 = 33 1/3 %. \n\nThis is a positive sign of progress in education! 📚",
        material: {
          worked_example: {
            problem: "📝 Let's Solve: \nPrice of a shirt decreased from ₹ 280 to ₹ 210. Find the percentage decrease. \n\nAlso, if a price increases by 10% to become ₹ 110, find the original price.",
            solution: "🔍 Step 1: Find % decrease: \nChange = 280 - 210 = 70 \n% Decrease = (70/280) × 100 = 25% \n\n✍️ Step 2: Find original price: \n110% of Original = 110 \n1.1 × Original = 110 \nOriginal = 110 / 1.1 = ₹ 100 💰"
          },
          summary: ["Always divide by the ORIGINAL value", "Change = Final - Initial", "New = Original * (1 ± Rate/100)"]
        },
        quick_check: {
          question: "When calculating percentage increase or decrease, which value should you always use as the denominator (base)?",
          options: ["The original value", "The new value", "The average of both values"],
          correct_answer: "The original value"
        },
        questions: [
          {
            question_id: "Q5.1.1",
            question_type: "MCQ",
            difficulty: "hard",
            text: "The population of a city decreased from 25,000 to 24,500. Find the percentage decrease.",
            options: ["2%", "5%", "10%", "1%"],
            correct_answer: "2%",
            hints: {
              general: "Find the amount of decrease first.",
              strategic: "Decrease = 25000 - 24500 = 500. Now divide 500 by the original population (25000).",
              bottom_out: "(500 / 25000) * 100 = 2%."
            },
            explanation: "Decrease = 500. % Decrease = (500/25000) * 100 = 2%.",
            remedial: {
              text: "Used new value instead of original as base.",
              scaffolded_question: "What is 500 / 25000?",
              scaffolded_answer: "0.02",
              remedial_images: ["/assets/media/images/kc5/rem_1.jpg", "/assets/media/images/kc5/rem_2.jpg", "/assets/media/images/kc5/rem_3.jpg"]
            }
          },
          {
            question_id: "Q5.1.2",
            question_type: "MCQ",
            difficulty: "medium",
            text: "Arun bought a car for ₹ 3,50,000. The next year, the price went up to ₹ 3,70,000. What was the Percentage increase?",
            options: ["5 5/7 %", "5%", "10%", "6%"],
            correct_answer: "5 5/7 %",
            hints: {
              general: "Find the increase in price first.",
              strategic: "Increase = 370000 - 350000 = 20000. Now divide by 350000.",
              bottom_out: "(20000 / 350000) * 100 = (2/35) * 100 = 40/7 = 5 5/7 %."
            },
            explanation: "Increase = 20000. % Increase = (20000/350000) * 100 = 5 5/7 %.",
            remedial: {
              text: "Always divide by the original price.",
              scaffolded_question: "What is 20000 / 350000 simplified?",
              scaffolded_answer: "2/35",
              remedial_images: ["/assets/media/images/kc5/rem_1.jpg", "/assets/media/images/kc5/rem_2.jpg", "/assets/media/images/kc5/rem_3.jpg"]
            }
          },
          {
            question_id: "Q5.1.3",
            question_type: "MCQ",
            difficulty: "medium",
            text: "A school team won 6 games this year against 4 games last year. What is the percentage increase?",
            options: ["50%", "25%", "100%", "20%"],
            correct_answer: "50%",
            hints: {
              general: "Find the increase in wins.",
              strategic: "Increase = 6 - 4 = 2. Original wins = 4.",
              bottom_out: "(2 / 4) * 100 = 50%."
            },
            explanation: "Increase = 2. % Increase = (2/4) * 100 = 50%.",
            remedial: {
              text: "The increase is 2 out of the original 4.",
              scaffolded_question: "What is 2 / 4 as a percentage?",
              scaffolded_answer: "50%",
              remedial_images: ["/assets/media/images/kc5/rem_1.jpg", "/assets/media/images/kc5/rem_2.jpg", "/assets/media/images/kc5/rem_3.jpg"]
            }
          },
          {
            question_id: "Q5.1.4",
            question_type: "MCQ",
            difficulty: "hard",
            text: "The number of illiterate persons in a country decreased from 150 lakhs to 100 lakhs in 10 years. What is the percentage of decrease?",
            options: ["33 1/3 %", "50%", "25%", "20%"],
            correct_answer: "33 1/3 %",
            hints: {
              general: "Find the decrease amount.",
              strategic: "Decrease = 150 - 100 = 50 lakhs. Original = 150 lakhs.",
              bottom_out: "(50 / 150) * 100 = 1/3 * 100 = 33 1/3 %."
            },
            explanation: "Decrease = 50. % Decrease = (50/150) * 100 = 33 1/3 %.",
            remedial: {
              text: "50 is what fraction of 150?",
              scaffolded_question: "50 / 150 = ?",
              scaffolded_answer: "1/3",
              remedial_images: ["/assets/media/images/kc5/rem_1.jpg", "/assets/media/images/kc5/rem_2.jpg", "/assets/media/images/kc5/rem_3.jpg"]
            }
          },
          {
            question_id: "Q5.1.5",
            question_type: "MCQ",
            difficulty: "medium",
            text: "A shopkeeper bought a chair for ₹ 375 and sold it for ₹ 400. Find the percentage increase in price.",
            options: ["6 2/3 %", "10%", "5%", "8%"],
            correct_answer: "6 2/3 %",
            hints: {
              general: "Find the increase amount.",
              strategic: "Increase = 400 - 375 = 25. Original = 375.",
              bottom_out: "(25 / 375) * 100 = (1/15) * 100 = 6 2/3 %."
            },
            explanation: "Increase = 25. % Increase = (25/375) * 100 = 6 2/3 %.",
            remedial: {
              text: "Divide the increase by the original price.",
              scaffolded_question: "What is 25 / 375 simplified?",
              scaffolded_answer: "1/15",
              remedial_images: ["/assets/media/images/kc5/rem_1.jpg", "/assets/media/images/kc5/rem_2.jpg", "/assets/media/images/kc5/rem_3.jpg"]
            }
          },
          {
            question_id: "Q5.1.6",
            question_type: "MCQ",
            difficulty: "hard",
            text: "If a number increases by 20% to become 180, what was the original number?",
            options: ["150", "160", "140", "120"],
            correct_answer: "150",
            hints: {
              general: "An increase of 20% means the new number is 120% of the original.",
              strategic: "120% of x = 180. 1.2 * x = 180.",
              bottom_out: "x = 180 / 1.2 = 1800 / 12 = 150."
            },
            explanation: "120% of x = 180 => x = 180 / 1.2 = 150.",
            remedial: {
              text: "New Value = Original * (1 + Rate/100).",
              scaffolded_question: "What is 180 / 1.2?",
              scaffolded_answer: "150",
              remedial_images: ["/assets/media/images/kc5/rem_1.jpg", "/assets/media/images/kc5/rem_2.jpg", "/assets/media/images/kc5/rem_3.jpg"]
            }
          },
          {
            question_id: "Q5.1.7",
            question_type: "MCQ",
            difficulty: "medium",
            text: "A price of ₹ 500 is reduced by 10%. What is the new price?",
            options: ["₹ 450", "₹ 490", "₹ 400", "₹ 550"],
            correct_answer: "₹ 450",
            hints: {
              general: "Find 10% of 500 and subtract it.",
              strategic: "10% of 500 = 50. New price = 500 - 50.",
              bottom_out: "500 - 50 = 450."
            },
            explanation: "New price = 500 - (10% of 500) = 500 - 50 = 450.",
            remedial: {
              text: "Subtract the decrease from the original.",
              scaffolded_question: "What is 500 - 50?",
              scaffolded_answer: "450",
              remedial_images: ["/assets/media/images/kc5/rem_1.jpg", "/assets/media/images/kc5/rem_2.jpg", "/assets/media/images/kc5/rem_3.jpg"]
            }
          },
          {
            question_id: "Q5.1.8",
            question_type: "MCQ",
            difficulty: "hard",
            text: "If a quantity decreases by 25% to become 75, what was the original quantity?",
            options: ["100", "125", "150", "90"],
            correct_answer: "100",
            hints: {
              general: "A decrease of 25% means the new quantity is 75% of the original.",
              strategic: "75% of x = 75. 0.75 * x = 75.",
              bottom_out: "x = 75 / 0.75 = 100."
            },
            explanation: "75% of x = 75 => x = 75 / 0.75 = 100.",
            remedial: {
              text: "New Value = Original * (1 - Rate/100).",
              scaffolded_question: "What is 75 / 0.75?",
              scaffolded_answer: "100",
              remedial_images: ["/assets/media/images/kc5/rem_1.jpg", "/assets/media/images/kc5/rem_2.jpg", "/assets/media/images/kc5/rem_3.jpg"]
            }
          },
          {
            question_id: "Q5.1.9",
            question_type: "MCQ",
            difficulty: "medium",
            text: "The price of a book increases from ₹ 80 to ₹ 100. What is the percentage increase?",
            options: ["25%", "20%", "15%", "30%"],
            correct_answer: "25%",
            hints: {
              general: "Find the increase amount first.",
              strategic: "Increase = 100 - 80 = 20. Original price = 80.",
              bottom_out: "(20 / 80) * 100 = 1/4 * 100 = 25%."
            },
            explanation: "Increase = 20. % Increase = (20/80) * 100 = 25%.",
            remedial: {
              text: "Always divide the change by the starting value.",
              scaffolded_question: "What is 20 / 80 simplified?",
              scaffolded_answer: "1/4",
              remedial_images: ["/assets/media/images/kc5/rem_1.jpg", "/assets/media/images/kc5/rem_2.jpg", "/assets/media/images/kc5/rem_3.jpg"]
            }
          },
          {
            question_id: "Q5.1.10",
            question_type: "MCQ",
            difficulty: "hard",
            text: "A number is increased by 10% and then the new number is decreased by 10%. What is the overall percentage change from the original number?",
            options: ["1% decrease", "No change", "1% increase", "2% decrease"],
            correct_answer: "1% decrease",
            hints: {
              general: "Try starting with a simple number like 100.",
              strategic: "100 + 10% = 110. Now find 10% of 110 and subtract it.",
              bottom_out: "10% of 110 is 11. 110 - 11 = 99. From 100 to 99 is a 1% decrease."
            },
            explanation: "Let original be 100. After 10% increase: 110. After 10% decrease: 110 - 11 = 99. Overall change = (1/100) * 100 = 1% decrease.",
            remedial: {
              text: "Successive changes are not additive. Calculate them one by one.",
              scaffolded_question: "If you have 110 and decrease it by 10%, what is the new value?",
              scaffolded_answer: "99",
              remedial_images: ["/assets/media/images/kc5/rem_1.jpg", "/assets/media/images/kc5/rem_2.jpg", "/assets/media/images/kc5/rem_3.jpg"]
            }
          },
          {
            question_id: "Q5.1.11",
            question_type: "MCQ",
            difficulty: "hard",
            text: "After a 40% discount, a dress costs ₹ 480. What was its original price?",
            options: ["₹ 800", "₹ 600", "₹ 720", "₹ 1200"],
            correct_answer: "₹ 800",
            hints: {
              general: "A 40% discount means you pay 60% of the original price.",
              strategic: "60% of Original = 480. 0.6 * x = 480.",
              bottom_out: "x = 480 / 0.6 = 4800 / 6 = 800."
            },
            explanation: "60% of x = 480 => x = 480 / 0.6 = 800.",
            remedial: {
              text: "Original = New / (1 - Discount Rate).",
              scaffolded_question: "What is 480 / 0.6?",
              scaffolded_answer: "800",
              remedial_images: ["/assets/media/images/kc5/rem_1.jpg", "/assets/media/images/kc5/rem_2.jpg", "/assets/media/images/kc5/rem_3.jpg"]
            }
          },
          {
            question_id: "Q5.1.12",
            question_type: "MCQ",
            difficulty: "medium",
            text: "A person's weight reduced from 80 kg to 76 kg. What is the percentage decrease?",
            options: ["5%", "4%", "10%", "8%"],
            correct_answer: "5%",
            hints: {
              general: "Find the weight loss first.",
              strategic: "Loss = 80 - 76 = 4 kg. Original weight = 80 kg.",
              bottom_out: "(4 / 80) * 100 = 1/20 * 100 = 5%."
            },
            explanation: "Loss = 4. % Decrease = (4/80) * 100 = 5%.",
            remedial: {
              text: "Divide the loss by the starting weight.",
              scaffolded_question: "What is 4 / 80 simplified?",
              scaffolded_answer: "1/20",
              remedial_images: ["/assets/media/images/kc5/rem_1.jpg", "/assets/media/images/kc5/rem_2.jpg", "/assets/media/images/kc5/rem_3.jpg"]
            }
          },
          {
            question_id: "Q5.1.13",
            question_type: "MCQ",
            difficulty: "medium",
            text: "A laptop's price was ₹ 40,000. During a sale, it was reduced by 15%. What is the new price?",
            options: ["₹ 34,000", "₹ 36,000", "₹ 35,000", "₹ 38,000"],
            correct_answer: "₹ 34,000",
            hints: {
              general: "Calculate 15% of 40,000 first.",
              strategic: "15% of 40,000 = 0.15 * 40,000 = 6,000. Now subtract this from the original price.",
              bottom_out: "40,000 - 6,000 = 34,000."
            },
            explanation: "15% of 40,000 = 6,000. New price = 40,000 - 6,000 = 34,000.",
            remedial: {
              text: "Subtract the discount from the original price.",
              scaffolded_question: "What is 15% of 40,000?",
              scaffolded_answer: "6000",
              remedial_images: ["/assets/media/images/kc5/rem_1.jpg", "/assets/media/images/kc5/rem_2.jpg", "/assets/media/images/kc5/rem_3.jpg"]
            }
          },
          {
            question_id: "Q5.1.14",
            question_type: "MCQ",
            difficulty: "hard",
            text: "A car's value depreciates by 10% every year. If it is worth ₹ 9,00,000 now, what will it be worth after one year?",
            options: ["₹ 8,10,000", "₹ 8,90,000", "₹ 8,00,000", "₹ 8,50,000"],
            correct_answer: "₹ 8,10,000",
            hints: {
              general: "Depreciation means a decrease in value.",
              strategic: "Calculate 10% of 9,00,000 and subtract it.",
              bottom_out: "10% of 9,00,000 = 90,000. 9,00,000 - 90,000 = 8,10,000."
            },
            explanation: "10% of 9,00,000 = 90,000. New value = 9,00,000 - 90,000 = 8,10,000.",
            remedial: {
              text: "Depreciation is just a percentage decrease.",
              scaffolded_question: "What is 10% of 9,00,000?",
              scaffolded_answer: "90000",
              remedial_images: ["/assets/media/images/kc5/rem_1.jpg", "/assets/media/images/kc5/rem_2.jpg", "/assets/media/images/kc5/rem_3.jpg"]
            }
          },
          {
            question_id: "Q5.1.15",
            question_type: "MCQ",
            difficulty: "hard",
            text: "A salary increases by 5% to become ₹ 21,000. What was the original salary?",
            options: ["₹ 20,000", "₹ 19,950", "₹ 20,500", "₹ 19,000"],
            correct_answer: "₹ 20,000",
            hints: {
              general: "105% of the original salary is ₹ 21,000.",
              strategic: "1.05 * Original = 21,000. Divide 21,000 by 1.05.",
              bottom_out: "21,000 / 1.05 = 2,100,000 / 105 = 20,000."
            },
            explanation: "105% of x = 21,000 => x = 21,000 / 1.05 = 20,000.",
            remedial: {
              text: "Original = Final / (1 + Rate/100).",
              scaffolded_question: "What is 21,000 / 1.05?",
              scaffolded_answer: "20000",
              remedial_images: ["/assets/media/images/kc5/rem_1.jpg", "/assets/media/images/kc5/rem_2.jpg", "/assets/media/images/kc5/rem_3.jpg"]
            }
          }
        ]
      }
    ]
  },
  {
    kc_id: "KC6",
    name: "Interpreting Percentages",
    topics: [
      {
        topic_id: "C6.1",
        title: "Real-World Percentages",
        hook: "🌟 Big Idea: If 30% of a city are females and 40% are males, what percentage are children? \n\n🌐 We use Interpreting Percentages to understand the parts of a whole! \n\nIt's like looking at the pieces of a puzzle! 🧩",
        subtopics: [
          "Convert ratios to percentages",
          "Solve multi-part percentage problems",
          "Understand how parts of a whole relate to percentages"
        ],
        exploration: "🌐 Percentages: The Universal Language \n\nPercentages are the universal language of comparison! \n\nImagine 30% of a city are children. This tells you a lot, whether the population is 1,000 or 1,000,000! \n\n🧩 Breaking it Down: \nPercentages allow us to break down a 'whole' into understandable parts. \n\nWe use them for surveys, material composition, and tracking progress. \n\n📊 Scannable Data: \nThe beauty of percentages is that they always relate back to a total of 100, making complex data scannable! ✨",
        exploration_images: [
          "/assets/media/images/kc6/exp_1.jpg",
          "/assets/media/images/kc6/exp_2.jpg"
        ],
        explanation: "Interpreting percentages often involves moving between ratios, fractions, and the 'whole'. 🔄\n\n1. From Ratios to Percentages: If a whole is divided in a ratio (e.g., 2:3:5), find the total parts (2+3+5=10). Each part's percentage is its share: (2/10)×100 = 20%, etc. 🍕\n\n2. Finding the 'Other' Part: Since the total is always 100%, if you know some parts, subtract from 100 to find the rest. If 70% are flowers, then 30% is grass! 🌿\n\n3. Practical Use: Multiply the percentage by the total quantity. E.g., 25% of 40 students is 0.25 × 40 = 10 students. Essential for tax, tips, and sharing! 🛒",
        video_url: "/assets/media/videos/kc6.mp4",
        real_life_example: "🍚 Real Life: \n\nTo make idlis, take 2 parts rice and 1 part urad dal. \n\n🥣 Total parts = 3. \nRice % = (2/3) × 100 = 66 2/3 %. \nUrad dal % = (1/3) × 100 = 33 1/3 %! \n\nDelicious! 😋",
        story_example: "In a city, 30% are females and 40% are males. 🏙️ \n\nThe rest are children. To find the percentage of children, we subtract the known parts from 100%: \n\n100% - (30% + 40%) = 30%! 🧒",
        material: {
          worked_example: {
            problem: "📝 Let's Solve: \nDivide ₹ 250 among Ravi, Raju and Roy in ratio 2:3:5. Find the percentage share of each.",
            solution: "🔍 Step 1: Find total parts: \n2 + 3 + 5 = 10 \n\n✍️ Step 2: Calculate Ravi's share: \n(2/10) × 100 = 20% \n\n🎯 Step 3: Calculate Raju's share: \n(3/10) × 100 = 30% \n\n✨ Step 4: Calculate Roy's share: \n(5/10) × 100 = 50% 💰"
          },
          summary: ["Total parts = Sum of ratio terms", "Percentage of a part = (Part / Total) * 100", "All parts add to 100%"]
        },
        quick_check: {
          question: "If a mixture has 3 parts milk and 1 part water, what is the total number of parts to use as the denominator?",
          options: ["4", "3", "1"],
          correct_answer: "4"
        },
        questions: [
          {
            question_id: "Q6.1.1",
            question_type: "MCQ",
            difficulty: "medium",
            text: "Chalk contains calcium, carbon and oxygen in ratio 10:3:12. Find the percentage of carbon in chalk.",
            options: ["12%", "10%", "30%", "15%"],
            correct_answer: "12%",
            hints: {
              general: "Find the total number of parts first.",
              strategic: "Total parts = 10 + 3 + 12 = 25. Carbon is 3 parts out of 25.",
              bottom_out: "(3/25) * 100 = 12%."
            },
            explanation: "Total parts = 25. Carbon % = (3/25) * 100 = 12%.",
            remedial: {
              text: "Did not calculate total parts correctly.",
              scaffolded_question: "What is 10 + 3 + 12?",
              scaffolded_answer: "25",
              remedial_images: ["/assets/media/images/kc6/rem_1.jpg", "/assets/media/images/kc6/rem_2.jpg", "/assets/media/images/kc6/rem_3.jpg"]
            }
          },
          {
            question_id: "Q6.1.2",
            question_type: "MCQ",
            difficulty: "medium",
            text: "If a city has 30% females and 40% males, what is the percentage of children?",
            options: ["30%", "70%", "40%", "20%"],
            correct_answer: "30%",
            hints: {
              general: "The total percentage must be 100%.",
              strategic: "Add female and male percentages, then subtract from 100.",
              bottom_out: "100 - (30 + 40) = 100 - 70 = 30."
            },
            explanation: "Children % = 100% - (30% + 40%) = 30%.",
            remedial: {
              text: "Total percentage is always 100.",
              scaffolded_question: "What is 100 - 70?",
              scaffolded_answer: "30",
              remedial_images: ["/assets/media/images/kc6/rem_1.jpg", "/assets/media/images/kc6/rem_2.jpg", "/assets/media/images/kc6/rem_3.jpg"]
            }
          },
          {
            question_id: "Q6.1.3",
            question_type: "MCQ",
            difficulty: "medium",
            text: "Divide ₹ 2500 among A, B and C in the ratio 1:2:2. What is the percentage share of A?",
            options: ["20%", "40%", "25%", "50%"],
            correct_answer: "20%",
            hints: {
              general: "Find the total parts in the ratio.",
              strategic: "Total parts = 1 + 2 + 2 = 5. A's share is 1 part out of 5.",
              bottom_out: "(1 / 5) * 100 = 20%."
            },
            explanation: "Total parts = 5. A's % = (1/5) * 100 = 20%.",
            remedial: {
              text: "A has 1 part out of a total of 5 parts.",
              scaffolded_question: "What is 100 / 5?",
              scaffolded_answer: "20",
              remedial_images: ["/assets/media/images/kc6/rem_1.jpg", "/assets/media/images/kc6/rem_2.jpg", "/assets/media/images/kc6/rem_3.jpg"]
            }
          },
          {
            question_id: "Q6.1.4",
            question_type: "MCQ",
            difficulty: "hard",
            text: "In a survey of 40 children, 25% said they like playing football. How many children like playing football?",
            options: ["10", "15", "20", "5"],
            correct_answer: "10",
            hints: {
              general: "Calculate 25% of 40.",
              strategic: "25% is 1/4. So divide 40 by 4.",
              bottom_out: "40 / 4 = 10."
            },
            explanation: "25% of 40 = (25/100) * 40 = 10.",
            remedial: {
              text: "25% is one-quarter of the total.",
              scaffolded_question: "What is 40 / 4?",
              scaffolded_answer: "10",
              remedial_images: ["/assets/media/images/kc6/rem_1.jpg", "/assets/media/images/kc6/rem_2.jpg", "/assets/media/images/kc6/rem_3.jpg"]
            }
          },
          {
            question_id: "Q6.1.5",
            question_type: "MCQ",
            difficulty: "medium",
            text: "If 65% of students in a class of 80 are boys, how many girls are there?",
            options: ["28", "52", "35", "45"],
            correct_answer: "28",
            hints: {
              general: "First find the percentage of girls.",
              strategic: "Girls % = 100% - 65% = 35%. Now find 35% of 80.",
              bottom_out: "(35/100) * 80 = 0.35 * 80 = 28."
            },
            explanation: "Girls % = 35%. Number of girls = (35/100) * 80 = 28.",
            remedial: {
              text: "If 65% are boys, then 100 - 65 = 35% are girls.",
              scaffolded_question: "What is 0.35 * 80?",
              scaffolded_answer: "28",
              remedial_images: ["/assets/media/images/kc6/rem_1.jpg", "/assets/media/images/kc6/rem_2.jpg", "/assets/media/images/kc6/rem_3.jpg"]
            }
          },
          {
            question_id: "Q6.1.6",
            question_type: "MCQ",
            difficulty: "hard",
            text: "A mixture contains milk and water in the ratio 4:1. What is the percentage of milk in the mixture?",
            options: ["80%", "75%", "20%", "25%"],
            correct_answer: "80%",
            hints: {
              general: "Find total parts first.",
              strategic: "Total parts = 4 + 1 = 5. Milk is 4 parts out of 5.",
              bottom_out: "(4/5) * 100 = 80%."
            },
            explanation: "Total parts = 5. Milk % = (4/5) * 100 = 80%.",
            remedial: {
              text: "Add the ratio parts to find the denominator.",
              scaffolded_question: "What is 4 + 1?",
              scaffolded_answer: "5",
              remedial_images: ["/assets/media/images/kc6/rem_1.jpg", "/assets/media/images/kc6/rem_2.jpg", "/assets/media/images/kc6/rem_3.jpg"]
            }
          },
          {
            question_id: "Q6.1.7",
            question_type: "MCQ",
            difficulty: "medium",
            text: "In a class of 50 students, 8% are absent. How many students are present?",
            options: ["46", "4", "42", "48"],
            correct_answer: "46",
            hints: {
              general: "Find the number of absent students first, or find the percentage of present students.",
              strategic: "Absent = 8% of 50 = 4. Present = 50 - 4.",
              bottom_out: "50 - 4 = 46."
            },
            explanation: "Absent = 4. Present = 50 - 4 = 46. Alternatively, Present % = 92%. 92% of 50 = 46.",
            remedial: {
              text: "Subtract the absent students from the total.",
              scaffolded_question: "What is 8% of 50?",
              scaffolded_answer: "4",
              remedial_images: ["/assets/media/images/kc6/rem_1.jpg", "/assets/media/images/kc6/rem_2.jpg", "/assets/media/images/kc6/rem_3.jpg"]
            }
          },
          {
            question_id: "Q6.1.8",
            question_type: "MCQ",
            difficulty: "hard",
            text: "If the ratio of angles of a triangle is 2:3:5, find the percentage of the largest angle relative to the sum of all angles.",
            options: ["50%", "30%", "20%", "10%"],
            correct_answer: "50%",
            hints: {
              general: "Total parts = 2 + 3 + 5 = 10. Largest part is 5.",
              strategic: "Calculate (5/10) * 100.",
              bottom_out: "5/10 is 1/2, which is 50%."
            },
            explanation: "Total parts = 10. Largest angle % = (5/10) * 100 = 50%.",
            remedial: {
              text: "The sum of angles in a triangle is 180°, but we only need the ratio parts here.",
              scaffolded_question: "What is 5 / 10 as a percentage?",
              scaffolded_answer: "50%",
              remedial_images: ["/assets/media/images/kc6/rem_1.jpg", "/assets/media/images/kc6/rem_2.jpg", "/assets/media/images/kc6/rem_3.jpg"]
            }
          },
          {
            question_id: "Q6.1.9",
            question_type: "MCQ",
            difficulty: "medium",
            text: "In the word 'PERCENTAGE', what percentage of the letters are vowels?",
            options: ["40%", "30%", "50%", "20%"],
            correct_answer: "40%",
            hints: {
              general: "Count the total letters and then count the vowels (A, E, I, O, U).",
              strategic: "Total letters = 10. Vowels are E, E, A, E (4 vowels).",
              bottom_out: "Ratio = 4/10. Convert to percentage."
            },
            explanation: "Total letters = 10. Vowels = 4. Percentage = (4/10) * 100 = 40%.",
            remedial: {
              text: "Count carefully! The vowels in 'PERCENTAGE' are E, E, A, and E.",
              scaffolded_question: "What is 4 / 10 as a percentage?",
              scaffolded_answer: "40%",
              remedial_images: ["/assets/media/images/kc6/rem_1.jpg", "/assets/media/images/kc6/rem_2.jpg", "/assets/media/images/kc6/rem_3.jpg"]
            }
          },
          {
            question_id: "Q6.1.10",
            question_type: "MCQ",
            difficulty: "hard",
            text: "In a school, 40% of students are girls. If 10% of the girls are in the school choir, what percentage of the total students are girls in the choir?",
            options: ["4%", "50%", "30%", "10%"],
            correct_answer: "4%",
            hints: {
              general: "You need to find 10% of 40%.",
              strategic: "Multiply the percentages: (10/100) * (40/100).",
              bottom_out: "0.1 * 40% = 4%."
            },
            explanation: "Girls = 40%. Choir girls = 10% of 40% = (10/100) * 40 = 4%.",
            remedial: {
              text: "This is a 'percentage of a percentage' problem.",
              scaffolded_question: "What is 10% of 40?",
              scaffolded_answer: "4",
              remedial_images: ["/assets/media/images/kc6/rem_1.jpg", "/assets/media/images/kc6/rem_2.jpg", "/assets/media/images/kc6/rem_3.jpg"]
            }
          },
          {
            question_id: "Q6.1.11",
            question_type: "MCQ",
            difficulty: "medium",
            text: "A family spends 30% of their income on food, 20% on rent, and 15% on education. What percentage of their income is left for other expenses?",
            options: ["35%", "65%", "45%", "25%"],
            correct_answer: "35%",
            hints: {
              general: "The total income is 100%.",
              strategic: "Add up all the spent percentages: 30 + 20 + 15.",
              bottom_out: "100 - 65 = 35."
            },
            explanation: "Spent % = 30 + 20 + 15 = 65%. Left % = 100 - 65 = 35%.",
            remedial: {
              text: "Subtract the total spent percentage from 100.",
              scaffolded_question: "What is 30 + 20 + 15?",
              scaffolded_answer: "65",
              remedial_images: ["/assets/media/images/kc6/rem_1.jpg", "/assets/media/images/kc6/rem_2.jpg", "/assets/media/images/kc6/rem_3.jpg"]
            }
          },
          {
            question_id: "Q6.1.12",
            question_type: "MCQ",
            difficulty: "hard",
            text: "In Class A, 20 out of 25 students passed. In Class B, 24 out of 30 students passed. Which class had a better pass percentage?",
            options: ["Both are equal", "Class A", "Class B", "Cannot be compared"],
            correct_answer: "Both are equal",
            hints: {
              general: "Convert both results to percentages to compare them.",
              strategic: "Class A: (20/25) * 100. Class B: (24/30) * 100.",
              bottom_out: "Class A = 80%. Class B = 80%."
            },
            explanation: "Class A = 80%. Class B = 80%. They are equal.",
            remedial: {
              text: "Percentages allow us to compare groups of different sizes.",
              scaffolded_question: "What is 20 / 25 as a percentage?",
              scaffolded_answer: "80%",
              remedial_images: ["/assets/media/images/kc6/rem_1.jpg", "/assets/media/images/kc6/rem_2.jpg", "/assets/media/images/kc6/rem_3.jpg"]
            }
          }
        ]
      }
    ]
  },
  {
    kc_id: "KC7",
    name: "Profit and Loss Percentage",
    topics: [
      {
        topic_id: "C7.1",
        title: "Profit and Loss",
        hook: "🌟 Big Idea: If you buy a toy for ₹ 72 and sell it for ₹ 80, did you make a profit? How much per cent? \n\n💰 Profit and Loss help us see if a deal was good or bad! \n\nIt's the heart of every shop and business! 🛒",
        subtopics: [
          "Understand Cost Price (CP) and Selling Price (SP)",
          "Calculate Profit or Loss",
          "Calculate Profit% or Loss% (always on CP)"
        ],
        exploration: "✅ Profit and Loss \n\nProfit and Loss tell us if a business deal was successful! \n\n💰 The Basics: \n- Profit = Selling Price - Cost Price (if you sold it for more than you bought it). \n- Loss = Cost Price - Selling Price (if you sold it for less). \n\n🛠️ Overheads: \nSometimes we spend extra on transport or repairs—these are Overhead Expenses. \n\nAlways add them to the original Cost Price to get the Total Cost Price! ✨",
        exploration_images: [
          "/assets/media/images/kc7/exp_1.jpg",
          "/assets/media/images/kc7/exp_2.jpg"
        ],
        explanation: "Profit% = (Profit / CP) × 100\nLoss% = (Loss / CP) × 100\n\nCrucial Rule: Profit or Loss percentage is ALWAYS calculated on the Cost Price (or Total Cost Price if there are overheads). 💰\n\nIt tells us how much we gained or lost for every ₹ 100 spent. 📈 If you know the CP and the Profit/Loss%, you can find the SP: SP = CP × (1 ± Rate/100). 🛒",
        video_url: "/assets/media/videos/kc7.mp4",
        real_life_example: "🧸 Real Life: \n\nA toy bought for ₹ 72 sold for ₹ 80. \n\n📈 Profit = ₹ 8. \nProfit% = (8/72) × 100 = 11 1/9 %! \n\nMaking money! 💰",
        story_example: "A shopkeeper buys a flower vase for ₹ 120. 🏺 He sells it at a loss of 10%. \n\nLoss = 10% of 120 = ₹ 12. \nSelling Price = 120 - 12 = ₹ 108! 📉",
        material: {
          worked_example: {
            problem: "📝 Let's Solve: \nCP = ₹ 200, SP = ₹ 240. Find profit percentage.",
            solution: "🔍 Step 1: Find profit: \nProfit = 240 - 200 = 40 \n\n✍️ Step 2: Calculate profit percentage: \nProfit% = (40/200) × 100 = 20% ✅"
          },
          summary: ["Profit = SP - CP", "Loss = CP - SP", "Percent is ALWAYS on CP"]
        },
        quick_check: {
          question: "Profit or Loss percentage is always calculated on which price?",
          options: ["Cost Price (CP)", "Selling Price (SP)", "Discounted Price"],
          correct_answer: "Cost Price (CP)"
        },
        questions: [
          {
            question_id: "Q7.1.1",
            question_type: "MCQ",
            difficulty: "hard",
            text: "A shopkeeper bought a chair for ₹ 375 and sold it for ₹ 400. Find the gain percentage.",
            options: ["6 2/3 %", "10%", "5%", "15%"],
            correct_answer: "6 2/3 %",
            hints: {
              general: "First find the profit amount.",
              strategic: "Profit = 400 - 375 = 25. Now divide 25 by the Cost Price (375).",
              bottom_out: "(25 / 375) * 100 = (1 / 15) * 100 = 6 2/3 %."
            },
            explanation: "Profit = ₹ 25. Profit% = (25/375) * 100 = 6 2/3 %.",
            remedial: {
              text: "Formula confusion — used SP instead of CP.",
              scaffolded_question: "What is 25 / 375 simplified?",
              scaffolded_answer: "1/15",
              remedial_images: ["/assets/media/images/kc7/rem_1.jpg", "/assets/media/images/kc7/rem_2.jpg"]
            }
          },
          {
            question_id: "Q7.1.2",
            question_type: "MCQ",
            difficulty: "medium",
            text: "A toy bought for ₹ 72 is sold for ₹ 80. Find the profit percentage.",
            options: ["11 1/9 %", "10%", "12%", "8%"],
            correct_answer: "11 1/9 %",
            hints: {
              general: "Profit = SP - CP.",
              strategic: "Profit = 80 - 72 = 8. CP = 72.",
              bottom_out: "(8 / 72) * 100 = 1/9 * 100 = 11 1/9 %."
            },
            explanation: "Profit = 8. Profit% = (8/72) * 100 = 11 1/9 %.",
            remedial: {
              text: "Profit percentage is always calculated on CP.",
              scaffolded_question: "What is 8 / 72 simplified?",
              scaffolded_answer: "1/9",
              remedial_images: ["/assets/media/images/kc7/rem_1.jpg", "/assets/media/images/kc7/rem_2.jpg"]
            }
          },
          {
            question_id: "Q7.1.3",
            question_type: "MCQ",
            difficulty: "hard",
            text: "A shopkeeper sells a flower vase for ₹ 540 at a loss of 10%. What was the cost price of the vase?",
            options: ["₹ 600", "₹ 500", "₹ 594", "₹ 650"],
            correct_answer: "₹ 600",
            hints: {
              general: "Loss of 10% means SP is 90% of CP.",
              strategic: "90% of CP = 540. So CP = 540 / 0.9.",
              bottom_out: "540 / 0.9 = 5400 / 9 = 600."
            },
            explanation: "SP = 90% of CP => 540 = 0.9 * CP => CP = 600.",
            remedial: {
              text: "If loss is 10%, SP = CP - 0.1CP = 0.9CP.",
              scaffolded_question: "What is 540 / 0.9?",
              scaffolded_answer: "600",
              remedial_images: ["/assets/media/images/kc7/rem_1.jpg", "/assets/media/images/kc7/rem_2.jpg"]
            }
          },
          {
            question_id: "Q7.1.4",
            question_type: "MCQ",
            difficulty: "medium",
            text: "I buy a T.V. for ₹ 10,000 and sell it at a profit of 20%. How much money do I get for it?",
            options: ["₹ 12,000", "₹ 11,000", "₹ 8,000", "₹ 15,000"],
            correct_answer: "₹ 12,000",
            hints: {
              general: "Find the profit amount first.",
              strategic: "Profit = 20% of 10,000 = 2,000. SP = CP + Profit.",
              bottom_out: "10,000 + 2,000 = 12,000."
            },
            explanation: "Profit = 2000. SP = 10000 + 2000 = 12000.",
            remedial: {
              text: "Add the profit to the cost price.",
              scaffolded_question: "What is 10,000 + 2,000?",
              scaffolded_answer: "12,000",
              remedial_images: ["/assets/media/images/kc7/rem_1.jpg", "/assets/media/images/kc7/rem_2.jpg"]
            }
          },
          {
            question_id: "Q7.1.5",
            question_type: "MCQ",
            difficulty: "hard",
            text: "Juhi sells a washing machine for ₹ 13,500. She loses 20% in the bargain. What was the price at which she bought it?",
            options: ["₹ 16,875", "₹ 16,000", "₹ 15,000", "₹ 17,000"],
            correct_answer: "₹ 16,875",
            hints: {
              general: "Loss of 20% means SP is 80% of CP.",
              strategic: "80% of CP = 13,500. So CP = 13,500 / 0.8.",
              bottom_out: "13,500 / 0.8 = 135,000 / 8 = 16,875."
            },
            explanation: "SP = 80% of CP => 13500 = 0.8 * CP => CP = 16875.",
            remedial: {
              text: "If loss is 20%, SP = 0.8 * CP.",
              scaffolded_question: "What is 13,500 / 0.8?",
              scaffolded_answer: "16,875",
              remedial_images: ["/assets/media/images/kc7/rem_1.jpg", "/assets/media/images/kc7/rem_2.jpg"]
            }
          },
          {
            question_id: "Q7.1.6",
            question_type: "MCQ",
            difficulty: "medium",
            text: "A shopkeeper buys a dozen eggs for ₹ 30 and sells them for ₹ 3 per egg. What is his profit percentage?",
            options: ["20%", "10%", "15%", "25%"],
            correct_answer: "20%",
            hints: {
              general: "Find the total Selling Price for 12 eggs.",
              strategic: "SP = 12 * 3 = ₹ 36. CP = ₹ 30. Profit = 36 - 30 = 6.",
              bottom_out: "(6 / 30) * 100 = 1/5 * 100 = 20%."
            },
            explanation: "CP = 30, SP = 36. Profit = 6. Profit% = (6/30) * 100 = 20%.",
            remedial: {
              text: "Calculate total SP first: 12 eggs at ₹ 3 each.",
              scaffolded_question: "What is 12 * 3?",
              scaffolded_answer: "36",
              remedial_images: ["/assets/media/images/kc7/rem_1.jpg", "/assets/media/images/kc7/rem_2.jpg"]
            }
          },
          {
            question_id: "Q7.1.7",
            question_type: "MCQ",
            difficulty: "hard",
            text: "A man buys an old refrigerator for ₹ 2500 and spends ₹ 500 on its repairs. He then sells it for ₹ 3300. Find his gain percentage.",
            options: ["10%", "12%", "15%", "8%"],
            correct_answer: "10%",
            hints: {
              general: "Add repair costs to the buying price to get the Total Cost Price.",
              strategic: "Total CP = 2500 + 500 = 3000. SP = 3300. Profit = 3300 - 3000 = 300.",
              bottom_out: "(300 / 3000) * 100 = 10%."
            },
            explanation: "Total CP = 3000. Profit = 300. Profit% = (300/3000) * 100 = 10%.",
            remedial: {
              text: "Overhead expenses (repairs) must be added to the CP.",
              scaffolded_question: "What is 2500 + 500?",
              scaffolded_answer: "3000",
              remedial_images: ["/assets/media/images/kc7/rem_1.jpg", "/assets/media/images/kc7/rem_2.jpg"]
            }
          },
          {
            question_id: "Q7.1.8",
            question_type: "MCQ",
            difficulty: "medium",
            text: "A book was bought for ₹ 400 and sold at a profit of 15%. What was the selling price?",
            options: ["₹ 460", "₹ 415", "₹ 450", "₹ 440"],
            correct_answer: "₹ 460",
            hints: {
              general: "Find 15% of 400 and add it to the CP.",
              strategic: "Profit = 0.15 * 400 = 60. SP = 400 + 60.",
              bottom_out: "400 + 60 = 460."
            },
            explanation: "Profit = 60. SP = 400 + 60 = 460.",
            remedial: {
              text: "SP = CP + Profit.",
              scaffolded_question: "What is 15% of 400?",
              scaffolded_answer: "60",
              remedial_images: ["/assets/media/images/kc7/rem_1.jpg", "/assets/media/images/kc7/rem_2.jpg"]
            }
          },
          {
            question_id: "Q7.1.9",
            question_type: "MCQ",
            difficulty: "hard",
            text: "By selling a radio for ₹ 900, a shopkeeper loses 10%. At what price should he sell it to gain 10%?",
            options: ["₹ 1100", "₹ 1000", "₹ 1200", "₹ 1080"],
            correct_answer: "₹ 1100",
            hints: {
              general: "First find the Cost Price using the 10% loss information.",
              strategic: "90% of CP = 900 => CP = 1000. Now find the SP for 10% gain on ₹ 1000.",
              bottom_out: "110% of 1000 = 1.1 * 1000 = 1100."
            },
            explanation: "CP = 900 / 0.9 = 1000. For 10% gain, SP = 1000 * 1.1 = 1100.",
            remedial: {
              text: "This is a two-step problem. Find CP first, then the new SP.",
              scaffolded_question: "If 0.9 * CP = 900, what is CP?",
              scaffolded_answer: "1000",
              remedial_images: ["/assets/media/images/kc7/rem_1.jpg", "/assets/media/images/kc7/rem_2.jpg"]
            }
          }
        ]
      }
    ]
  },
  {
    kc_id: "KC8",
    name: "Simple Interest",
    topics: [
      {
        topic_id: "C8.1",
        title: "Simple Interest",
        hook: "🌟 Big Idea: When you borrow money from a bank, you pay back more than you took. \n\n💸 That extra money is called Interest! \n\nIt's like paying a small fee for using someone else's money! 🏦",
        subtopics: [
          "Understand Principal, Rate, and Time",
          "Calculate Simple Interest (SI)",
          "Calculate Total Amount"
        ],
        exploration: "💸 What is Simple Interest? \n\nWhen you borrow money, you pay back a little extra as a 'thank you' for using it. That extra money is Interest! \n\n🏦 Key Terms: \n- The money you borrow is the Principal. \n- The total you pay back (Principal + Interest) is the Amount. \n\n🤝 Why 'Simple'? \nSimple Interest is 'simple' because it's always calculated on the original principal amount. \n\nIt's a fair way to handle loans and savings! ✨",
        exploration_images: [
          "/assets/media/images/kc8/exp_1.jpg",
          "/assets/media/images/kc8/exp_2.jpg"
        ],
        explanation: "The formula for Simple Interest (SI) is: 🧮\n\nSI = (P × R × T) / 100\n\nWhere:\n- P is the Principal (the original amount). 🏦\n- R is the Rate of Interest per year (%). 📈\n- T is the Time in years. ⏳\n\nAmount (A) = Principal (P) + Simple Interest (SI)\n\nNote: If time is in months, convert to years first! (e.g., 6 months = 0.5 years). 🗓️",
        video_url: "/assets/media/videos/kc8.mp4",
        real_life_example: "🏦 Real Life: \n\nAnita takes a loan of ₹ 5,000 at 15% per year. \n\n💸 Interest for 1 year = (5000 × 15 × 1) / 100 = ₹ 750! \n\nPlan your savings! 💰",
        story_example: "If you invest ₹ 10,000 at 5% interest for 1 year, you earn ₹ 500. 💰 \n\nYour total money (Amount) becomes ₹ 10,500! 🏦",
        material: {
          worked_example: {
            problem: "📝 Let's Solve: \nFind SI on ₹ 3,500 at 7% p.a. for 2 years.",
            solution: "🔍 Step 1: Identify values: \nP = 3500, R = 7, T = 2 \n\n✍️ Step 2: Apply formula: \nSI = (3500 × 7 × 2) / 100 \n\n🎯 Step 3: Calculate: \nSI = 35 × 14 = ₹ 490 💰"
          },
          summary: ["SI = PRT/100", "Amount = P + SI"]
        },
        quick_check: {
          question: "What does 'Principal' refer to in Simple Interest?",
          options: ["The sum of money borrowed or invested", "The extra money paid back", "The time period of the loan"],
          correct_answer: "The sum of money borrowed or invested"
        },
        questions: [
          {
            question_id: "Q8.1.1",
            question_type: "MCQ",
            difficulty: "hard",
            text: "What rate gives ₹ 280 as interest on a sum of ₹ 56,000 in 2 years?",
            options: ["0.25%", "0.5%", "1%", "2%"],
            correct_answer: "0.25%",
            hints: {
              general: "Use the SI formula: SI = (P * R * T) / 100.",
              strategic: "280 = (56000 * R * 2) / 100. Simplify to find R.",
              bottom_out: "280 = 1120 * R. So R = 280 / 1120 = 1/4 = 0.25%."
            },
            explanation: "R = (SI * 100) / (P * T) = (280 * 100) / (56000 * 2) = 0.25%.",
            remedial: {
              text: "Missing time factor or division by 100.",
              scaffolded_question: "What is 280 / 1120?",
              scaffolded_answer: "0.25",
              remedial_images: ["/assets/media/images/kc8/rem_1.jpg", "/assets/media/images/kc8/rem_2.jpg", "/assets/media/images/kc8/rem_3.jpg"]
            }
          },
          {
            question_id: "Q8.1.2",
            question_type: "MCQ",
            difficulty: "medium",
            text: "Find the interest to be paid at the end of 3 years if the principal is ₹ 1,200 at 12% p.a.",
            options: ["₹ 432", "₹ 360", "₹ 144", "₹ 400"],
            correct_answer: "₹ 432",
            hints: {
              general: "Use SI = (P * R * T) / 100.",
              strategic: "P = 1200, R = 12, T = 3.",
              bottom_out: "(1200 * 12 * 3) / 100 = 12 * 12 * 3 = 144 * 3 = 432."
            },
            explanation: "SI = (1200 * 12 * 3) / 100 = 432.",
            remedial: {
              text: "Multiply Principal, Rate, and Time, then divide by 100.",
              scaffolded_question: "What is 12 * 12 * 3?",
              scaffolded_answer: "432",
              remedial_images: ["/assets/media/images/kc8/rem_1.jpg", "/assets/media/images/kc8/rem_2.jpg", "/assets/media/images/kc8/rem_3.jpg"]
            }
          },
          {
            question_id: "Q8.1.3",
            question_type: "MCQ",
            difficulty: "hard",
            text: "If Meena gives an interest of ₹ 45 for one year at 9% rate p.a.. What is the sum she has borrowed?",
            options: ["₹ 500", "₹ 400", "₹ 600", "₹ 450"],
            correct_answer: "₹ 500",
            hints: {
              general: "Use the SI formula and solve for P.",
              strategic: "45 = (P * 9 * 1) / 100.",
              bottom_out: "P = (45 * 100) / 9 = 5 * 100 = 500."
            },
            explanation: "P = (SI * 100) / (R * T) = (45 * 100) / (9 * 1) = 500.",
            remedial: {
              text: "Rearrange the formula: P = (SI * 100) / (R * T).",
              scaffolded_question: "What is 4500 / 9?",
              scaffolded_answer: "500",
              remedial_images: ["/assets/media/images/kc8/rem_1.jpg", "/assets/media/images/kc8/rem_2.jpg", "/assets/media/images/kc8/rem_3.jpg"]
            }
          },
          {
            question_id: "Q8.1.4",
            question_type: "MCQ",
            difficulty: "medium",
            text: "Find the amount to be paid at the end of 2 years on a principal of ₹ 7,000 at 5% p.a.",
            options: ["₹ 7,700", "₹ 7,350", "₹ 7,000", "₹ 8,000"],
            correct_answer: "₹ 7,700",
            hints: {
              general: "First find the Simple Interest, then add it to the Principal.",
              strategic: "SI = (7000 * 5 * 2) / 100 = 700. Amount = P + SI.",
              bottom_out: "7000 + 700 = 7700."
            },
            explanation: "SI = 700. Amount = 7000 + 700 = 7700.",
            remedial: {
              text: "Amount = Principal + Interest.",
              scaffolded_question: "What is 7000 + 700?",
              scaffolded_answer: "7700",
              remedial_images: ["/assets/media/images/kc8/rem_1.jpg", "/assets/media/images/kc8/rem_2.jpg", "/assets/media/images/kc8/rem_3.jpg"]
            }
          },
          {
            question_id: "Q8.1.5",
            question_type: "MCQ",
            difficulty: "hard",
            text: "A sum of money doubles itself in 10 years. What is the rate of interest?",
            options: ["10%", "5%", "20%", "15%"],
            correct_answer: "10%",
            hints: {
              general: "If money doubles, then SI = Principal.",
              strategic: "Let P be the principal. Then SI = P. P = (P * R * 10) / 100.",
              bottom_out: "1 = (R * 10) / 100 => R = 10%."
            },
            explanation: "SI = P => P = (P * R * 10) / 100 => 1 = R/10 => R = 10%.",
            remedial: {
              text: "If it doubles, the interest earned is equal to the principal.",
              scaffolded_question: "If P = (P * R * 10) / 100, what is R?",
              scaffolded_answer: "10",
              remedial_images: ["/assets/media/images/kc8/rem_1.jpg", "/assets/media/images/kc8/rem_2.jpg", "/assets/media/images/kc8/rem_3.jpg"]
            }
          },
          {
            question_id: "Q8.1.6",
            question_type: "MCQ",
            difficulty: "medium",
            text: "Find the Simple Interest on ₹ 5000 at 10% p.a. for 6 months.",
            options: ["₹ 250", "₹ 500", "₹ 100", "₹ 300"],
            correct_answer: "₹ 250",
            hints: {
              general: "Convert 6 months into years first.",
              strategic: "6 months = 6/12 = 0.5 years. Now use SI = (P * R * T) / 100.",
              bottom_out: "(5000 * 10 * 0.5) / 100 = 50 * 5 = 250."
            },
            explanation: "T = 0.5 years. SI = (5000 * 10 * 0.5) / 100 = 250.",
            remedial: {
              text: "Time must be in years. 6 months is half a year.",
              scaffolded_question: "What is 6 / 12?",
              scaffolded_answer: "0.5",
              remedial_images: ["/assets/media/images/kc8/rem_1.jpg", "/assets/media/images/kc8/rem_2.jpg", "/assets/media/images/kc8/rem_3.jpg"]
            }
          },
          {
            question_id: "Q8.1.7",
            question_type: "MCQ",
            difficulty: "hard",
            text: "In how many years will ₹ 4000 yield ₹ 1200 as interest at 10% p.a.?",
            options: ["3 years", "2 years", "4 years", "5 years"],
            correct_answer: "3 years",
            hints: {
              general: "Use the formula T = (SI * 100) / (P * R).",
              strategic: "SI = 1200, P = 4000, R = 10.",
              bottom_out: "T = (1200 * 100) / (4000 * 10) = 120000 / 40000 = 3."
            },
            explanation: "T = (1200 * 100) / (4000 * 10) = 3 years.",
            remedial: {
              text: "Rearrange the SI formula to solve for T.",
              scaffolded_question: "What is 120,000 / 40,000?",
              scaffolded_answer: "3",
              remedial_images: ["/assets/media/images/kc8/rem_1.jpg", "/assets/media/images/kc8/rem_2.jpg", "/assets/media/images/kc8/rem_3.jpg"]
            }
          },
          {
            question_id: "Q8.1.8",
            question_type: "MCQ",
            difficulty: "hard",
            text: "At what rate per cent per annum will ₹ 800 amount to ₹ 1000 in 2.5 years?",
            options: ["10%", "8%", "12%", "5%"],
            correct_answer: "10%",
            hints: {
              general: "First find the Simple Interest (Amount - Principal).",
              strategic: "SI = 1000 - 800 = 200. Now use R = (SI * 100) / (P * T).",
              bottom_out: "R = (200 * 100) / (800 * 2.5) = 20000 / 2000 = 10."
            },
            explanation: "SI = 200. R = (200 * 100) / (800 * 2.5) = 10%.",
            remedial: {
              text: "Interest = Amount - Principal.",
              scaffolded_question: "What is 1000 - 800?",
              scaffolded_answer: "200",
              remedial_images: ["/assets/media/images/kc8/rem_1.jpg", "/assets/media/images/kc8/rem_2.jpg", "/assets/media/images/kc8/rem_3.jpg"]
            }
          },
          {
            question_id: "Q8.1.9",
            question_type: "MCQ",
            difficulty: "medium",
            text: "What will be the total amount to be paid on ₹ 2000 at 5% p.a. after 4 years?",
            options: ["₹ 2400", "₹ 400", "₹ 2200", "₹ 2500"],
            correct_answer: "₹ 2400",
            hints: {
              general: "Calculate Simple Interest first, then add it to the Principal.",
              strategic: "SI = (2000 * 5 * 4) / 100 = 400. Amount = 2000 + 400.",
              bottom_out: "2000 + 400 = 2400."
            },
            explanation: "SI = 400. Amount = 2000 + 400 = 2400.",
            remedial: {
              text: "Amount = Principal + Interest.",
              scaffolded_question: "What is 2000 + 400?",
              scaffolded_answer: "2400",
              remedial_images: ["/assets/media/images/kc8/rem_1.jpg", "/assets/media/images/kc8/rem_2.jpg", "/assets/media/images/kc8/rem_3.jpg"]
            }
          }
        ]
      }
    ]
  }
 ]
};
