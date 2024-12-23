import { Question } from '../../types';

export const eceQuestions: Question[] = [
  {
    id: 'ece1',
    domain: 'ece',
    subDomain: 'core',
    question: 'What is the bandwidth of an ideal low-pass filter with cutoff frequency of 1 MHz?',
    options: ['500 kHz', '1 MHz', '2 MHz', '4 MHz'],
    correctAnswer: '1 MHz',
    explanation: 'The bandwidth of an ideal low-pass filter is equal to its cutoff frequency. For any low-pass filter, the cutoff frequency represents the highest frequency that can pass through the filter without significant attenuation.',
    difficulty: 'medium'
  },
  {
    id: 'ece2',
    domain: 'ece',
    subDomain: 'core',
    question: 'In a common-emitter amplifier configuration, the phase difference between input and output signal is:',
    options: ['0°', '90°', '180°', '270°'],
    correctAnswer: '180°',
    explanation: 'In a common-emitter amplifier, the output signal is inverted compared to the input. This inversion causes a 180° phase shift. Understanding the phase relation helps in designing amplifier circuits for desired signal processing.',
    difficulty: 'medium'
  },
  {
    id: 'ece3',
    domain: 'ece',
    subDomain: 'core',
    question: 'What is the purpose of a bypass capacitor in a CE amplifier circuit?',
    options: ['To stabilize voltage', 'To improve bandwidth', 'To reduce noise', 'To bypass AC signals'],
    correctAnswer: 'To bypass AC signals',
    explanation: 'A bypass capacitor in a common-emitter amplifier provides a low-impedance path for AC signals, effectively bypassing them around the emitter resistor. This enhances the AC gain of the amplifier.',
    difficulty: 'medium'
  },
  {
    id: 'ece4',
    domain: 'ece',
    subDomain: 'core',
    question: 'What is the main advantage of a CMOS technology over bipolar technology?',
    options: ['Lower power consumption', 'Higher speed', 'Higher current drive', 'Lower cost'],
    correctAnswer: 'Lower power consumption',
    explanation: 'CMOS (Complementary Metal-Oxide-Semiconductor) technology has the advantage of extremely low static power consumption because current flows only during switching. This makes it ideal for battery-powered devices.',
    difficulty: 'easy'
  },
  {
    id: 'ece5',
    domain: 'ece',
    subDomain: 'core',
    question: 'In a PN junction diode, the depletion region is formed due to:',
    options: ['Drift of charge carriers', 'Diffusion of charge carriers', 'Recombination of charge carriers', 'Thermal equilibrium'],
    correctAnswer: 'Diffusion of charge carriers',
    explanation: 'The depletion region in a PN junction forms due to the diffusion of electrons from the n-side to the p-side and holes from the p-side to the n-side. This diffusion leaves behind immobile ions, creating an electric field.',
    difficulty: 'medium'
  },
  {
    id: 'ece6',
    domain: 'ece',
    subDomain: 'core',
    question: 'What is the maximum efficiency of a Class B amplifier?',
    options: ['25%', '50%', '78.5%', '100%'],
    correctAnswer: '78.5%',
    explanation: 'The maximum theoretical efficiency of a Class B amplifier is 78.5%. This is achieved because the transistors conduct only during half of the input cycle, reducing power loss.',
    difficulty: 'medium'
  },
  {
    id: 'ece7',
    domain: 'ece',
    subDomain: 'core',
    question: 'In digital circuits, the term "fan-out" refers to:',
    options: ['The number of inputs a gate can drive', 'The number of gates a signal can fan into', 'The maximum current a gate can source', 'The speed of the circuit'],
    correctAnswer: 'The number of inputs a gate can drive',
    explanation: 'Fan-out refers to the number of inputs that can be connected to the output of a single logic gate without exceeding its current-driving capability. This parameter is crucial for designing robust digital circuits.',
    difficulty: 'easy'
  },
  {
    id: 'ece8',
    domain: 'ece',
    subDomain: 'core',
    question: 'In an oscilloscope, the time base controls:',
    options: ['The vertical position of the trace', 'The horizontal position of the trace', 'The time interval per division', 'The brightness of the trace'],
    correctAnswer: 'The time interval per division',
    explanation: 'The time base of an oscilloscope determines the time interval represented by each division on the horizontal axis. It controls how quickly the waveform sweeps across the screen.',
    difficulty: 'easy'
  },
  {
    id: 'ece9',
    domain: 'ece',
    subDomain: 'core',
    question: 'The main function of a Zener diode is:',
    options: ['To amplify signals', 'To regulate voltage', 'To rectify AC signals', 'To generate oscillations'],
    correctAnswer: 'To regulate voltage',
    explanation: 'A Zener diode operates in reverse breakdown to maintain a constant voltage across its terminals, making it ideal for voltage regulation applications.',
    difficulty: 'easy'
  },
  {
    id: 'ece10',
    domain: 'ece',
    subDomain: 'core',
    question: 'Which modulation technique is least affected by noise?',
    options: ['Amplitude Modulation', 'Frequency Modulation', 'Phase Modulation', 'Pulse Code Modulation'],
    correctAnswer: 'Pulse Code Modulation',
    explanation: 'Pulse Code Modulation (PCM) is a digital modulation technique where the signal is quantized and encoded. Being digital, it is less susceptible to noise compared to analog modulation techniques.',
    difficulty: 'medium'
  },
  {
    id: 'ece11',
    domain: 'ece',
    subDomain: 'core',
    question: 'The gain of an Op-Amp in an inverting configuration is given by:',
    options: ['-Rf/Rin', 'Rf/Rin', '-(Rf + Rin)', 'Rf + Rin'],
    correctAnswer: '-Rf/Rin',
    explanation: 'In an inverting amplifier configuration, the gain is calculated as -Rf/Rin, where Rf is the feedback resistor and Rin is the input resistor. The negative sign indicates phase inversion.',
    difficulty: 'medium'
  },
  {
    id: 'ece12',
    domain: 'ece',
    subDomain: 'core',
    question: 'Which antenna is used for satellite communication?',
    options: ['Dipole antenna', 'Horn antenna', 'Parabolic dish', 'Yagi-Uda antenna'],
    correctAnswer: 'Parabolic dish',
    explanation: 'Parabolic dish antennas are used in satellite communication due to their high directivity and ability to focus signals into a narrow beam.',
    difficulty: 'easy'
  },
  {
    id: 'ece13',
    domain: 'ece',
    subDomain: 'core',
    question: 'What is the purpose of negative feedback in amplifiers?',
    options: ['To increase gain', 'To stabilize gain', 'To introduce phase shift', 'To reduce bandwidth'],
    correctAnswer: 'To stabilize gain',
    explanation: 'Negative feedback stabilizes the gain of an amplifier, reduces distortion, and improves bandwidth. It is widely used in designing reliable circuits.',
    difficulty: 'medium'
  },
  {
    id: 'ece14',
    domain: 'ece',
    subDomain: 'core',
    question: 'The Nyquist criterion is used to determine:',
    options: ['System stability', 'System frequency response', 'System bandwidth', 'System noise'],
    correctAnswer: 'System stability',
    explanation: 'The Nyquist criterion helps determine the stability of a control system by analyzing the open-loop frequency response. It ensures the poles of the closed-loop transfer function are in the left half of the s-plane.',
    difficulty: 'hard'
  },
  {
    id: 'ece15',
    domain: 'ece',
    subDomain: 'core',
    question: 'In a SCR, the gate terminal is used to:',
    options: ['Control the current flow', 'Control the voltage drop', 'Trigger the SCR', 'Increase conduction'],
    correctAnswer: 'Trigger the SCR',
    explanation: 'The gate terminal of a Silicon Controlled Rectifier (SCR) is used to trigger the device into conduction by applying a small pulse of current.',
    difficulty: 'easy'
  },
  // {
  //   id: 'ece16',
  //   domain: 'ece',
  //   subDomain: 'core',
  //   question: 'What is the function of a rectifier in electronic circuits?',
  //   options: ['To convert AC to DC', 'To convert DC to AC', 'To amplify signals', 'To reduce noise'],
  //   correctAnswer: 'To convert AC to DC',
  //   explanation: 'A rectifier is used to convert alternating current (AC) into direct current (DC). This is a critical component in power supply circuits.',
  //   difficulty: 'easy'
  // },
  // {
  //   id: 'ece17',
  //   domain: 'ece',
  //   subDomain: 'core',
  //   question: 'What does VSWR stand for in antennas?',
  //   options: ['Voltage Standing Wave Ratio', 'Voltage Signal Wave Ratio', 'Vector Standing Wave Ratio', 'Vector Signal Wave Ratio'],
  //   correctAnswer: 'Voltage Standing Wave Ratio',
  //   explanation: 'VSWR (Voltage Standing Wave Ratio) is a measure of impedance matching in transmission lines and antennas. It indicates the ratio of maximum to minimum voltage in a standing wave pattern.',
  //   difficulty: 'medium'
  // },
  // {
  //   id: 'ece18',
  //   domain: 'ece',
  //   subDomain: 'core',
  //   question: 'The binary equivalent of decimal 13 is:',
  //   options: ['1100', '1011', '1101', '1110'],
  //   correctAnswer: '1101',
  //   explanation: 'To convert the decimal number 13 to binary, repeatedly divide the number by 2 and record the remainders. Reading the remainders in reverse gives 1101.',
  //   difficulty: 'easy'
  // },
  // {
  //   id: 'ece19',
  //   domain: 'ece',
  //   subDomain: 'core',
  //   question: 'What is the purpose of a Schottky diode in high-speed circuits?',
  //   options: ['To rectify AC', 'To regulate voltage', 'To reduce switching time', 'To increase power efficiency'],
  //   correctAnswer: 'To reduce switching time',
  //   explanation: 'Schottky diodes have a low forward voltage drop and fast switching speed, making them ideal for high-frequency and high-speed applications.',
  //   difficulty: 'medium'
  // },
  // {
  //   id: 'ece20',
  //   domain: 'ece',
  //   subDomain: 'core',
  //   question: 'In a JFET, the pinch-off voltage is the voltage at which:',
  //   options: ['The channel becomes fully open', 'The drain current becomes zero', 'The channel is completely depleted', 'The gate current is maximum'],
  //   correctAnswer: 'The channel is completely depleted',
  //   explanation: 'The pinch-off voltage in a JFET is the drain-source voltage at which the conductive channel is completely pinched off, and the drain current reaches saturation.',
  //   difficulty: 'medium'
  // },
  // {
  //   id: 'ece21',
  //   domain: 'ece',
  //   subDomain: 'core',
  //   question: 'What is the primary advantage of using a voltage divider bias in a transistor circuit?',
  //   options: ['Improved AC gain', 'Better thermal stability', 'Higher input resistance', 'Lower distortion'],
  //   correctAnswer: 'Better thermal stability',
  //   explanation: 'Voltage divider bias provides better thermal stability by fixing the base voltage of the transistor, reducing the impact of temperature variations on operating point.',
  //   difficulty: 'medium'
  // },
  // {
  //   id: 'ece22',
  //   domain: 'ece',
  //   subDomain: 'core',
  //   question: 'The main advantage of using OFDM in communication systems is:',
  //   options: ['High data rate', 'Low latency', 'Resilience to multipath fading', 'Simplified design'],
  //   correctAnswer: 'Resilience to multipath fading',
  //   explanation: 'Orthogonal Frequency Division Multiplexing (OFDM) is robust against multipath fading because it divides the data into multiple sub-carriers, making it ideal for wireless communication systems.',
  //   difficulty: 'hard'
  // },
  // {
  //   id: 'ece23',
  //   domain: 'ece',
  //   subDomain: 'core',
  //   question: 'What is the function of a voltage regulator IC such as 7805?',
  //   options: ['To amplify voltage', 'To step up voltage', 'To provide a constant 5V output', 'To step down voltage'],
  //   correctAnswer: 'To provide a constant 5V output',
  //   explanation: 'The 7805 voltage regulator IC provides a stable and constant 5V DC output, making it suitable for powering circuits requiring precise voltage.',
  //   difficulty: 'easy'
  // },
  // {
  //   id: 'ece24',
  //   domain: 'ece',
  //   subDomain: 'core',
  //   question: 'In a digital circuit, a flip-flop is primarily used for:',
  //   options: ['Analog signal amplification', 'Data storage', 'Power regulation', 'Clock signal generation'],
  //   correctAnswer: 'Data storage',
  //   explanation: 'Flip-flops are basic memory elements used in digital circuits to store one bit of data. They are building blocks for registers and memory units.',
  //   difficulty: 'easy'
  // }
];
