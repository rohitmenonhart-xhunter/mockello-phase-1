import { Question } from '../../types';

export const generalQuestions: Question[] = [
  // Quantitative Aptitude
  {
    id: 'g-q1',
    domain: 'general',
    subDomain: 'quantitative',
    question: 'If a train travels 360 kilometers in 4 hours, what is its average speed in kilometers per hour?',
    options: ['80 km/h', '90 km/h', '85 km/h', '95 km/h'],
    correctAnswer: '90 km/h',
    explanation: 'To find average speed, divide total distance by total time: 360 ÷ 4 = 90 km/h',
    difficulty: 'easy'
  },
  {
    id: 'g-q2',
    domain: 'general',
    subDomain: 'quantitative',
    question: 'What is the compound interest on Rs. 1000 at 10% per annum for 2 years?',
    options: ['210', '220', '221', '200'],
    correctAnswer: '210',
    explanation: 'CI = P(1 + r/100)^t - P = 1000(1 + 10/100)^2 - 1000 = 1210 - 1000 = 210',
    difficulty: 'medium'
  },
  {
    id: 'g-q3',
    domain: 'general',
    subDomain: 'quantitative',
    question: 'A man buys an article for Rs. 240 and sells it at a profit of 25%. What is the selling price?',
    options: ['Rs. 250', 'Rs. 300', 'Rs. 280', 'Rs. 320'],
    correctAnswer: 'Rs. 300',
    explanation: 'Selling Price = Cost Price + Profit. Profit = 25% of 240 = 60. Selling Price = 240 + 60 = 300.',
    difficulty: 'easy'
  },
  {
    id: 'g-q4',
    domain: 'general',
    subDomain: 'quantitative',
    question: 'If a person can complete a task in 8 hours and another person can complete the same task in 6 hours, how long will it take for them to complete the task together?',
    options: ['3 hours', '4 hours', '3 hours 12 minutes', '5 hours'],
    correctAnswer: '3 hours 12 minutes',
    explanation: 'Combined Work Rate = 1/8 + 1/6 = 7/24. Time = 1 / (7/24) = 24/7 = 3 hours and 12 minutes.',
    difficulty: 'medium'
  },
  {
    id: 'g-q5',
    domain: 'general',
    subDomain: 'quantitative',
    question: 'What is the least number which when divided by 12, 15, and 18 leaves a remainder of 4 in each case?',
    options: ['184', '144', '154', '174'],
    correctAnswer: '184',
    explanation: 'Find LCM of 12, 15, and 18 = 180. The required number is 180 + 4 = 184.',
    difficulty: 'hard'
  },
  {
    id: 'g-q6',
    domain: 'general',
    subDomain: 'quantitative',
    question: 'The average of five consecutive even numbers is 30. What is the smallest number?',
    options: ['24', '26', '28', '30'],
    correctAnswer: '26',
    explanation: 'If the average is 30, the numbers are 26, 28, 30, 32, and 34. The smallest number is 26.',
    difficulty: 'easy'
  },
  {
    id: 'g-q7',
    domain: 'general',
    subDomain: 'quantitative',
    question: 'If the sum of the first 15 natural numbers is S, what is S?',
    options: ['105', '120', '135', '210'],
    correctAnswer: '120',
    explanation: 'The sum of the first n natural numbers is S = n(n + 1)/2. For n = 15, S = 15 × (15 + 1)/2 = 120.',
    difficulty: 'medium'
  },
  {
    id: 'g-q8',
    domain: 'general',
    subDomain: 'quantitative',
    question: 'What is the HCF of 60 and 48?',
    options: ['6', '12', '24', '36'],
    correctAnswer: '12',
    explanation: 'The highest common factor (HCF) of 60 and 48 is 12.',
    difficulty: 'easy'
  },
  {
    id: 'g-q9',
    domain: 'general',
    subDomain: 'quantitative',
    question: 'If 40% of a number is 80, what is the number?',
    options: ['200', '150', '180', '250'],
    correctAnswer: '200',
    explanation: '40% of the number = 80. Number = 80 × 100 / 40 = 200.',
    difficulty: 'medium'
  },
  {
    id: 'g-q10',
    domain: 'general',
    subDomain: 'quantitative',
    question: 'A car covers a distance of 540 km in 6 hours. What is its speed in meters per second?',
    options: ['25 m/s', '30 m/s', '20 m/s', '15 m/s'],
    correctAnswer: '25 m/s',
    explanation: 'Speed = Distance / Time = 540 km in 6 hours = 90 km/h. Convert to m/s: 90 × (1000/3600) = 25 m/s.',
    difficulty: 'hard'
  },
  {
    id: 'g-q11',
    domain: 'general',
    subDomain: 'quantitative',
    question: 'The ratio of the ages of two friends is 3:5. If the sum of their ages is 40, what is the age of the younger friend?',
    options: ['15', '20', '12', '18'],
    correctAnswer: '15',
    explanation: 'Let the ages be 3x and 5x. 3x + 5x = 40, x = 5. Younger friend\'s age = 3x = 15.',
    difficulty: 'medium'
  },
  {
    id: 'g-q12',
    domain: 'general',
    subDomain: 'quantitative',
    question: 'A sum of money triples itself in 12 years at simple interest. What is the rate of interest per annum?',
    options: ['25%', '30%', '15%', '20%'],
    correctAnswer: '20%',
    explanation: 'Simple Interest = P × R × T / 100. If the amount triples, SI = 2P. 2P = P × R × 12 / 100, R = 20%.',
    difficulty: 'hard'
  },
  {
    id: 'g-q13',
    domain: 'general',
    subDomain: 'quantitative',
    question: 'A pipe can fill a tank in 10 hours while another pipe can empty it in 15 hours. How long will it take to fill the tank if both pipes are opened together?',
    options: ['30 hours', '20 hours', '15 hours', '25 hours'],
    correctAnswer: '30 hours',
    explanation: 'Net rate = 1/10 - 1/15 = 1/30. Time = 30 hours.',
    difficulty: 'medium'
  },
  {
    id: 'g-q14',
    domain: 'general',
    subDomain: 'quantitative',
    question: 'The perimeter of a rectangle is 80 meters, and its length is twice its breadth. What is the area of the rectangle?',
    options: ['200 m²', '300 m²', '250 m²', '320 m²'],
    correctAnswer: '200 m²',
    explanation: 'Let breadth = x, length = 2x. 2(2x + x) = 80, x = 10. Area = 10 × 20 = 200 m².',
    difficulty: 'easy'
  },
  {
    id: 'g-q15',
    domain: 'general',
    subDomain: 'quantitative',
    question: 'If the selling price of an article is Rs. 720 and the profit is 20%, what is the cost price?',
    options: ['Rs. 600', 'Rs. 650', 'Rs. 580', 'Rs. 700'],
    correctAnswer: 'Rs. 600',
    explanation: 'SP = CP + Profit. 720 = CP × (1 + 20/100). CP = 720 / 1.2 = 600.',
    difficulty: 'medium'
  },
  {
    id: 'g-q16',
    domain: 'general',
    subDomain: 'quantitative',
    question: 'A boat goes 30 km downstream in 2 hours and comes back in 3 hours. What is the speed of the boat in still water?',
    options: ['10 km/h', '12 km/h', '15 km/h', '8 km/h'],
    correctAnswer: '12 km/h',
    explanation: 'Downstream speed = 30/2 = 15 km/h, Upstream speed = 30/3 = 10 km/h. Speed in still water = (15+10)/2 = 12 km/h.',
    difficulty: 'hard'
  },
  {
    id: 'g-q17',
    domain: 'general',
    subDomain: 'quantitative',
    question: 'The difference between the compound interest and simple interest on Rs. 5000 for 2 years at 10% per annum is:',
    options: ['Rs. 50', 'Rs. 25', 'Rs. 100', 'Rs. 200'],
    correctAnswer: 'Rs. 25',
    explanation: 'CI = P(1 + r/100)^t - P; SI = P × r × t / 100. Difference = Rs. 25.',
    difficulty: 'hard'
  },
  {
    id: 'g-q18',
    domain: 'general',
    subDomain: 'quantitative',
    question: 'The average of three numbers is 48. If the sum of two of them is 70, what is the third number?',
    options: ['50', '60', '54', '64'],
    correctAnswer: '64',
    explanation: 'Sum of three numbers = 48 × 3 = 144. Third number = 144 - 70 = 64.',
    difficulty: 'easy'
  },
  {
    id: 'g-q19',
    domain: 'general',
    subDomain: 'quantitative',
    question: 'If 15 workers can complete a task in 8 days, how many days will it take for 10 workers to complete the same task?',
    options: ['12', '10', '15', '8'],
    correctAnswer: '12',
    explanation: 'Work = 15 × 8 = 120. Time = Work / 10 = 120 / 10 = 12 days.',
    difficulty: 'medium'
  },
  {
    id: 'g-q20',
    domain: 'general',
    subDomain: 'quantitative',
    question: 'Find the missing number: 5, 10, 20, 40, ?',
    options: ['60', '80', '70', '100'],
    correctAnswer: '80',
    explanation: 'The sequence is multiplied by 2 at each step. 40 × 2 = 80.',
    difficulty: 'easy'
  },
  // {
  //   id: 'g-q21',
  //   domain: 'general',
  //   subDomain: 'quantitative',
  //   question: 'A student scores 90% in 5 subjects, each with a maximum of 100 marks. What is the total score?',
  //   options: ['450', '500', '460', '480'],
  //   correctAnswer: '450',
  //   explanation: 'Total score = 90% of 500 = 450.',
  //   difficulty: 'easy'
  // },
  // {
  //   id: 'g-q22',
  //   domain: 'general',
  //   subDomain: 'quantitative',
  //   question: 'The sides of a triangle are 3 cm, 4 cm, and 5 cm. What is its area?',
  //   options: ['6 cm²', '8 cm²', '10 cm²', '12 cm²'],
  //   correctAnswer: '6 cm²',
  //   explanation: 'It is a right triangle. Area = 1/2 × base × height = 1/2 × 3 × 4 = 6 cm².',
  //   difficulty: 'easy'
  // },
  // {
  //   id: 'g-q23',
  //   domain: 'general',
  //   subDomain: 'quantitative',
  //   question: 'If the cost of 12 pens is Rs. 96, what is the cost of 5 pens?',
  //   options: ['Rs. 40', 'Rs. 36', 'Rs. 42', 'Rs. 45'],
  //   correctAnswer: 'Rs. 40',
  //   explanation: 'Cost of one pen = 96/12 = 8. Cost of 5 pens = 8 × 5 = Rs. 40.',
  //   difficulty: 'easy'
  // },
  // {
  //   id: 'g-q24',
  //   domain: 'general',
  //   subDomain: 'quantitative',
  //   question: 'A man spends 60% of his income and saves Rs. 8000. What is his total income?',
  //   options: ['Rs. 20000', 'Rs. 25000', 'Rs. 30000', 'Rs. 22000'],
  //   correctAnswer: 'Rs. 20000',
  //   explanation: 'Savings = 40% of income. Income = 8000 / 0.4 = Rs. 20000.',
  //   difficulty: 'medium'
  // },
  // {
  //   id: 'g-q25',
  //   domain: 'general',
  //   subDomain: 'quantitative',
  //   question: 'If the price of an item is increased by 20%, and then decreased by 20%, what is the net percentage change in price?',
  //   options: ['4% decrease', '4% increase', '0%', '5% decrease'],
  //   correctAnswer: '4% decrease',
  //   explanation: 'Net % change = (x + y + xy/100)%. For x = 20 and y = -20, Net change = -4%.',
  //   difficulty: 'hard'
  // },

  // Logical Reasoning 
  {
    id: 'g-l1',
    domain: 'general',
    subDomain: 'logical',
    question: 'If all flowers are plants, and some plants are trees, which statement is definitely true?',
    options: [
      'All flowers are trees',
      'Some flowers are trees',
      'All flowers are plants',
      'No flowers are trees'
    ],
    correctAnswer: 'All flowers are plants',
    explanation: 'This is a syllogism. Only the given statement "All flowers are plants" is definitely true.',
    difficulty: 'medium'
  },
  {
    id: 'g-l2',
    domain: 'general',
    subDomain: 'logical',
    question: 'A is the father of B, but B is not the son of A. Who is B?',
    options: ['Daughter', 'Father', 'Cousin', 'Mother'],
    correctAnswer: 'Daughter',
    explanation: 'If B is not the son of A but is a child of A, then B must be the daughter.',
    difficulty: 'easy'
  },
  {
    id: 'g-l3',
    domain: 'general',
    subDomain: 'logical',
    question: 'If 3 pencils cost Rs. 15, how much will 10 pencils cost?',
    options: ['Rs. 45', 'Rs. 50', 'Rs. 60', 'Rs. 30'],
    correctAnswer: 'Rs. 50',
    explanation: 'Cost of 1 pencil = 15 ÷ 3 = Rs. 5. Cost of 10 pencils = 10 × 5 = Rs. 50.',
    difficulty: 'easy'
  },
  {
    id: 'g-l4',
    domain: 'general',
    subDomain: 'logical',
    question: 'A clock shows the time as 3:15. What is the angle between the hour hand and the minute hand?',
    options: ['0°', '7.5°', '15°', '30°'],
    correctAnswer: '7.5°',
    explanation: 'At 3:15, the hour hand has moved 7.5° from its exact position. The angle is calculated as (30 × hours) + (0.5 × minutes) = 7.5°.',
    difficulty: 'medium'
  },
  {
    id: 'g-l5',
    domain: 'general',
    subDomain: 'logical',
    question: 'If BLUE is written as ELUB, how will GREEN be written?',
    options: ['NEERG', 'NEERG', 'EERNG', 'NEGRE'],
    correctAnswer: 'NEERG',
    explanation: 'Reverse the order of the letters.',
    difficulty: 'easy'
  },
  {
    id: 'g-l6',
    domain: 'general',
    subDomain: 'logical',
    question: 'In a race of 5 participants, A finishes ahead of B but behind C, and E finishes behind B but ahead of D. Who finishes last?',
    options: ['A', 'B', 'C', 'D'],
    correctAnswer: 'D',
    explanation: 'The order is C > A > B > E > D. Hence, D finishes last.',
    difficulty: 'medium'
  },
  {
    id: 'g-l7',
    domain: 'general',
    subDomain: 'logical',
    question: 'If two statements are: 1. All cats are animals. 2. Some animals are dogs. Which conclusion follows?',
    options: [
      'All cats are dogs.',
      'All dogs are cats.',
      'Some animals are cats.',
      'Some dogs are animals.'
    ],
    correctAnswer: 'Some animals are cats.',
    explanation: 'The first statement confirms that cats are animals, so "Some animals are cats" follows.',
    difficulty: 'medium'
  },
  {
    id: 'g-l8',
    domain: 'general',
    subDomain: 'logical',
    question: 'Pointing to a photograph, Ravi said, "She is the mother of my father’s only son." How is the woman related to Ravi?',
    options: ['Mother', 'Aunt', 'Sister', 'Grandmother'],
    correctAnswer: 'Mother',
    explanation: 'Ravi’s father’s only son is Ravi himself. So, the woman in the photo is Ravi’s mother.',
    difficulty: 'easy'
  },
  {
    id: 'g-l9',
    domain: 'general',
    subDomain: 'logical',
    question: 'If 5 persons can complete a task in 20 days, how many persons are required to complete it in 5 days?',
    options: ['15', '20', '25', '30'],
    correctAnswer: '20',
    explanation: 'Work = People × Time. Required people = (5 × 20) ÷ 5 = 20.',
    difficulty: 'medium'
  },
  {
    id: 'g-l10',
    domain: 'general',
    subDomain: 'logical',
    question: 'If 7 is to 49, then 8 is to what?',
    options: ['56', '64', '72', '81'],
    correctAnswer: '64',
    explanation: '7 × 7 = 49, so 8 × 8 = 64.',
    difficulty: 'easy'
  },
  {
    id: 'g-l11',
    domain: 'general',
    subDomain: 'logical',
    question: 'If the day before yesterday was Friday, what day will it be two days from now?',
    options: ['Monday', 'Tuesday', 'Sunday', 'Wednesday'],
    correctAnswer: 'Monday',
    explanation: 'If the day before yesterday was Friday, today is Sunday. Two days from Sunday is Monday.',
    difficulty: 'easy'
  },
  {
    id: 'g-l12',
    domain: 'general',
    subDomain: 'logical',
    question: 'Which of the following does not belong in the group: Dog, Cat, Cow, Snake?',
    options: ['Dog', 'Cat', 'Cow', 'Snake'],
    correctAnswer: 'Snake',
    explanation: 'Dog, Cat, and Cow are mammals, while Snake is a reptile.',
    difficulty: 'easy'
  },
  {
    id: 'g-l13',
    domain: 'general',
    subDomain: 'logical',
    question: 'If a statement is: "All pens are books. Some books are chairs." Which conclusion follows?',
    options: [
      'Some chairs are pens.',
      'All books are pens.',
      'Some pens are books.',
      'No conclusion can be drawn.'
    ],
    correctAnswer: 'Some pens are books.',
    explanation: 'The first statement says "All pens are books," so "Some pens are books" logically follows.',
    difficulty: 'medium'
  },
  // Verbal Ability
  {
      id: 'g-v1',
      domain: 'general',
      subDomain: 'verbal',
      question: 'Choose the word that is closest in meaning to "BENEVOLENT"',
      options: ['Kind', 'Hostile', 'Indifferent', 'Cruel'],
      correctAnswer: 'Kind',
      explanation: 'Benevolent means kind and generous, showing goodwill.',
      difficulty: 'medium'
  },
  {
      id: 'g-v2',
      domain: 'general',
      subDomain: 'verbal',
      question: 'Select the word opposite in meaning to "ARDUOUS"',
      options: ['Tough', 'Effortless', 'Challenging', 'Exhausting'],
      correctAnswer: 'Effortless',
      explanation: 'Arduous means requiring effort, so effortless is its opposite.',
      difficulty: 'medium'
  },
  {
      id: 'g-v3',
      domain: 'general',
      subDomain: 'verbal',
      question: 'Fill in the blank: She ___ to the market every Sunday.',
      options: ['go', 'goes', 'gone', 'going'],
      correctAnswer: 'goes',
      explanation: 'The subject "She" requires the verb in the singular form: "goes."',
      difficulty: 'easy'
  },
  {
      id: 'g-v4',
      domain: 'general',
      subDomain: 'verbal',
      question: 'Which of the following is a synonym of "PLETHORA"?',
      options: ['Lack', 'Scarcity', 'Excess', 'Few'],
      correctAnswer: 'Excess',
      explanation: 'Plethora means an overabundance or excess.',
      difficulty: 'easy'
  },
  {
      id: 'g-v5',
      domain: 'general',
      subDomain: 'verbal',
      question: 'Choose the correctly spelled word:',
      options: ['Accommodate', 'Acommodate', 'Accomodate', 'Acommoddate'],
      correctAnswer: 'Accommodate',
      explanation: 'The correct spelling is "accommodate" with two "c"s and two "m"s.',
      difficulty: 'easy'
  },
  {
      id: 'g-v6',
      domain: 'general',
      subDomain: 'verbal',
      question: 'Identify the error in the sentence: "He do not know the answer."',
      options: ['He', 'do not', 'know', 'No error'],
      correctAnswer: 'do not',
      explanation: 'It should be "does not" since the subject "He" is singular.',
      difficulty: 'medium'
  },
  {
      id: 'g-v7',
      domain: 'general',
      subDomain: 'verbal',
      question: 'What is the antonym of "AMIABLE"?',
      options: ['Friendly', 'Hostile', 'Affable', 'Warm'],
      correctAnswer: 'Hostile',
      explanation: 'Amiable means friendly and pleasant, so its opposite is hostile.',
      difficulty: 'medium'
  },
  {
      id: 'g-v8',
      domain: 'general',
      subDomain: 'verbal',
      question: 'Find the correctly punctuated sentence:',
      options: [
        'Its a beautiful day.',
        "It's a beautiful day.",
        'Its a beautiful day!',
        'Its, a beautiful day.'
      ],
      correctAnswer: "It's a beautiful day.",
      explanation: "'It's' is a contraction of 'it is,' which is correct here.",
      difficulty: 'easy'
  },
  {
      id: 'g-v9',
      domain: 'general',
      subDomain: 'verbal',
      question: 'Choose the appropriate preposition: She is good ___ mathematics.',
      options: ['in', 'at', 'on', 'with'],
      correctAnswer: 'at',
      explanation: 'The correct preposition to use with "good" in this context is "at."',
      difficulty: 'easy'
  },
  {
      id: 'g-v10',
      domain: 'general',
      subDomain: 'verbal',
      question: 'What is the meaning of the idiom: "Bite the bullet"?',
      options: [
        'Take a risk',
        'Act tough',
        'Face something unpleasant',
        'Shoot quickly'
      ],
      correctAnswer: 'Face something unpleasant',
      explanation: 'To bite the bullet means to confront a difficult or unpleasant situation.',
      difficulty: 'medium'
  },
  {
      id: 'g-v11',
      domain: 'general',
      subDomain: 'verbal',
      question: 'Complete the sentence: "I wish I ___ a bird."',
      options: ['am', 'was', 'were', 'be'],
      correctAnswer: 'were',
      explanation: 'In hypothetical situations, "were" is used instead of "was."',
      difficulty: 'medium'
  },
  {
      id: 'g-v12',
      domain: 'general',
      subDomain: 'verbal',
      question: 'Find the synonym of "LUCID":',
      options: ['Clear', 'Dark', 'Complicated', 'Opaque'],
      correctAnswer: 'Clear',
      explanation: 'Lucid means clear and easy to understand.',
      difficulty: 'medium'
  },
  {
      id: 'g-v13',
      domain: 'general',
      subDomain: 'verbal',
      question: 'Identify the part of speech of the word "quickly" in the sentence: "She runs quickly."',
      options: ['Noun', 'Verb', 'Adjective', 'Adverb'],
      correctAnswer: 'Adverb',
      explanation: '"Quickly" describes the verb "runs," so it is an adverb.',
      difficulty: 'easy'
  },
  // {
  //     id: 'g-v14',
  //     domain: 'general',
  //     subDomain: 'verbal',
  //     question: 'Choose the word that is opposite in meaning to "PERNICIOUS":',
  //     options: ['Beneficial', 'Harmful', 'Deadly', 'Toxic'],
  //     correctAnswer: 'Beneficial',
  //     explanation: 'Pernicious means harmful, so its opposite is beneficial.',
  //     difficulty: 'medium'
  // },
  // {
  //     id: 'g-v15',
  //     domain: 'general',
  //     subDomain: 'verbal',
  //     question: 'Choose the grammatically correct sentence:',
  //     options: [
  //       'I am knowing the answer.',
  //       'I knows the answer.',
  //       'I know the answer.',
  //       'I knowing the answer.'
  //     ],
  //     correctAnswer: 'I know the answer.',
  //     explanation: 'The sentence is correct in present simple tense: "I know the answer."',
  //     difficulty: 'easy'
  // },
  // {
  //     id: 'g-v16',
  //     domain: 'general',
  //     subDomain: 'verbal',
  //     question: 'Fill in the blank: "The committee ___ to meet again next week."',
  //     options: ['decides', 'decided', 'decide', 'decision'],
  //     correctAnswer: 'decides',
  //     explanation: 'The subject "committee" is singular, so the verb should be "decides."',
  //     difficulty: 'easy'
  // }
  
  
];
