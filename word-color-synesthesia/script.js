// Word-to-Color Synesthesia Mapping Library
const wordColorMap = {
    // Positive emotions - bright, warm, happy colors
    positive: {
        words: ['love', 'joy', 'happy', 'beautiful', 'wonderful', 'amazing', 'brilliant', 'fantastic', 'great', 'excellent', 'good', 'nice', 'kind', 'gentle', 'sweet', 'lovely', 'delightful', 'charming', 'pleasant', 'cheerful', 'bright', 'sunny', 'warm', 'cozy', 'comfortable', 'hope', 'faith', 'trust', 'believe', 'dream', 'smile', 'laugh', 'peace', 'calm', 'serene', 'grateful', 'thankful', 'blessed', 'lucky', 'fortunate', 'success', 'win', 'victory', 'triumph', 'achieve', 'accomplish', 'glory', 'honor', 'proud', 'freedom', 'liberty', 'free'],
        colors: ['#FFD700', '#FFA500', '#FFB6C1', '#87CEEB', '#98FB98', '#F0E68C', '#FFDAB9']
    },

    // Negative emotions - dark, cool, heavy colors
    negative: {
        words: ['hate', 'sad', 'angry', 'fear', 'terrible', 'awful', 'horrible', 'bad', 'evil', 'cruel', 'mean', 'nasty', 'ugly', 'dark', 'gloomy', 'depressed', 'miserable', 'unhappy', 'pain', 'hurt', 'suffer', 'agony', 'torture', 'death', 'die', 'kill', 'murder', 'war', 'violence', 'blood', 'enemy', 'danger', 'threat', 'harm', 'damage', 'destroy', 'ruin', 'loss', 'fail', 'defeat', 'failure', 'nightmare', 'terror', 'horror', 'dread', 'despair', 'hopeless', 'helpless', 'weak', 'broken', 'shattered'],
        colors: ['#2C3E50', '#34495E', '#5D6D7E', '#566573', '#4A235A', '#512E5F', '#1C2833']
    },

    // Action/Energy - bold, vibrant, energetic colors
    action: {
        words: ['fight', 'battle', 'struggle', 'strive', 'push', 'pull', 'run', 'jump', 'move', 'action', 'power', 'force', 'strength', 'strong', 'mighty', 'fierce', 'bold', 'brave', 'courage', 'dare', 'challenge', 'compete', 'race', 'rush', 'charge', 'attack', 'defend', 'strike', 'hit', 'punch', 'kick', 'march', 'advance', 'conquer', 'dominate', 'control', 'command', 'lead', 'rule', 'reign', 'rise', 'climb', 'ascend', 'soar', 'fly'],
        colors: ['#E74C3C', '#C0392B', '#D35400', '#E67E22', '#F39C12', '#FF6347', '#DC143C']
    },

    // Peace/Calm - serene, soft, tranquil colors
    peaceful: {
        words: ['peace', 'calm', 'quiet', 'still', 'serene', 'tranquil', 'gentle', 'soft', 'smooth', 'easy', 'relax', 'rest', 'sleep', 'dream', 'meditate', 'breathe', 'flow', 'float', 'drift', 'harmony', 'balance', 'center', 'zen', 'mindful', 'present', 'aware', 'conscious', 'clear', 'pure', 'clean', 'fresh', 'light', 'airy', 'breeze', 'whisper', 'silent', 'hush', 'lull', 'soothe', 'comfort', 'embrace', 'tender'],
        colors: ['#AED6F1', '#85C1E2', '#7DCEA0', '#A3E4D7', '#D5F4E6', '#E8F8F5', '#ABEBC6']
    },

    // Inspiration/Hope - bright, uplifting colors
    inspiring: {
        words: ['inspire', 'motivate', 'encourage', 'uplift', 'empower', 'transform', 'change', 'grow', 'evolve', 'improve', 'better', 'enhance', 'enrich', 'elevate', 'aspire', 'ambition', 'vision', 'imagine', 'create', 'innovate', 'discover', 'explore', 'adventure', 'journey', 'quest', 'mission', 'purpose', 'meaning', 'destiny', 'fate', 'potential', 'possible', 'opportunity', 'chance', 'new', 'begin', 'start', 'launch', 'initiate', 'spark', 'ignite', 'kindle', 'awaken'],
        colors: ['#3498DB', '#5DADE2', '#85C1E2', '#F4D03F', '#F7DC6F', '#F8C471', '#FAD7A0']
    },

    // Wisdom/Knowledge - deep, thoughtful colors
    wisdom: {
        words: ['wisdom', 'knowledge', 'learn', 'teach', 'understand', 'comprehend', 'realize', 'recognize', 'perceive', 'insight', 'truth', 'reality', 'fact', 'evidence', 'proof', 'logic', 'reason', 'rational', 'think', 'thought', 'ponder', 'contemplate', 'reflect', 'consider', 'analyze', 'study', 'research', 'investigate', 'examine', 'explore', 'question', 'answer', 'solve', 'solution', 'idea', 'concept', 'theory', 'philosophy', 'science', 'art', 'craft', 'skill'],
        colors: ['#8E44AD', '#9B59B6', '#6C3483', '#7D3C98', '#5B2C6F', '#4A235A', '#BB8FCE']
    },

    // Love/Connection - warm, connecting colors
    love: {
        words: ['love', 'heart', 'soul', 'spirit', 'connection', 'bond', 'unite', 'together', 'family', 'friend', 'companion', 'partner', 'ally', 'support', 'help', 'care', 'nurture', 'protect', 'cherish', 'treasure', 'value', 'appreciate', 'respect', 'honor', 'admire', 'adore', 'devotion', 'loyalty', 'faithful', 'true', 'sincere', 'honest', 'genuine', 'authentic', 'real', 'share', 'give', 'offer', 'provide', 'serve', 'sacrifice', 'dedicate'],
        colors: ['#FF69B4', '#FF1493', '#DB7093', '#FFC0CB', '#FFB6C1', '#F78FB3', '#FA8072']
    },

    // Nature - earthy, natural colors
    nature: {
        words: ['nature', 'earth', 'sky', 'sun', 'moon', 'star', 'ocean', 'sea', 'water', 'river', 'stream', 'lake', 'mountain', 'hill', 'valley', 'forest', 'tree', 'flower', 'plant', 'garden', 'seed', 'grow', 'bloom', 'blossom', 'leaf', 'branch', 'root', 'soil', 'stone', 'rock', 'sand', 'cloud', 'rain', 'snow', 'wind', 'fire', 'flame', 'light', 'shadow', 'dawn', 'dusk', 'season', 'spring', 'summer', 'autumn', 'winter'],
        colors: ['#27AE60', '#229954', '#52BE80', '#82E0AA', '#7DCEA0', '#A9DFBF', '#D5F4E6']
    }
};

// Build a lookup map for faster word-to-color mapping
const wordLookup = {};
for (const [category, data] of Object.entries(wordColorMap)) {
    data.words.forEach(word => {
        wordLookup[word.toLowerCase()] = {
            category: category,
            colors: data.colors
        };
    });
}

// Function to get color for a word
function getColorForWord(word) {
    const cleanWord = word.toLowerCase().replace(/[^a-z]/g, '');

    // Direct match
    if (wordLookup[cleanWord]) {
        const colors = wordLookup[cleanWord].colors;
        return colors[Math.floor(Math.random() * colors.length)];
    }

    // Partial match (contains)
    for (const [key, value] of Object.entries(wordLookup)) {
        if (cleanWord.includes(key) || key.includes(cleanWord)) {
            const colors = value.colors;
            return colors[Math.floor(Math.random() * colors.length)];
        }
    }

    // Default neutral color for unmatched words
    return '#B0B0B0';
}

// Function to analyze text and create color array
function analyzeText(text) {
    const words = text.split(/\s+/).filter(word => word.length > 0);
    const colorData = words.map(word => ({
        word: word,
        color: getColorForWord(word)
    }));
    return colorData;
}

// Function to create gradient from colors
function createGradient(colors) {
    if (colors.length === 0) return 'linear-gradient(90deg, #B0B0B0, #B0B0B0)';
    if (colors.length === 1) return `linear-gradient(90deg, ${colors[0]}, ${colors[0]})`;

    const step = 100 / (colors.length - 1);
    const gradientStops = colors.map((color, index) => {
        return `${color} ${index * step}%`;
    }).join(', ');

    return `linear-gradient(90deg, ${gradientStops})`;
}

// Example speeches
const examples = {
    mlk: "I have a dream that one day this nation will rise up and live out the true meaning of its creed. We hold these truths to be self-evident that all men are created equal.",
    jfk: "Ask not what your country can do for you, ask what you can do for your country.",
    churchill: "We shall fight on the beaches, we shall fight on the landing grounds, we shall fight in the fields and in the streets, we shall never surrender.",
    mandela: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    positive: "Love joy peace hope faith dream wonderful beautiful amazing brilliant happiness sunshine rainbow butterfly garden flowers friendship kindness gentle sweet",
    negative: "Fear anger hate pain suffering darkness death terrible awful horrible violence war destruction sadness despair agony misery nightmare terror"
};

// DOM elements
const textInput = document.getElementById('textInput');
const visualizeBtn = document.getElementById('visualizeBtn');
const clearBtn = document.getElementById('clearBtn');
const colorVisualization = document.getElementById('colorVisualization');
const wordBreakdown = document.getElementById('wordBreakdown');
const exampleBtns = document.querySelectorAll('.example-btn');
const micBtn = document.getElementById('micBtn');
const micStatus = document.getElementById('micStatus');
const canvas = document.getElementById('colorCanvas');
const ctx = canvas ? canvas.getContext('2d') : null;

// Speech Recognition Setup
let recognition = null;
let isListening = false;

// Check if browser supports speech recognition
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if (SpeechRecognition) {
    recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = 'en-US';

    recognition.onstart = () => {
        isListening = true;
        micBtn.classList.add('recording');
        micStatus.textContent = '🎤 Listening... (click microphone again to stop)';
        micStatus.className = 'mic-status listening';
    };

    recognition.onresult = (event) => {
        let interimTranscript = '';
        let finalTranscript = '';

        for (let i = event.resultIndex; i < event.results.length; i++) {
            const transcript = event.results[i][0].transcript;
            if (event.results[i].isFinal) {
                finalTranscript += transcript + ' ';
            } else {
                interimTranscript += transcript;
            }
        }

        // Update textarea with final transcript
        if (finalTranscript) {
            textInput.value += finalTranscript;
        }

        // Show interim results in status
        if (interimTranscript) {
            micStatus.textContent = `🎤 "${interimTranscript}"`;
        }
    };

    recognition.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
        let errorMessage = 'Error: ';

        switch(event.error) {
            case 'no-speech':
                errorMessage += 'No speech detected. Try again.';
                break;
            case 'audio-capture':
                errorMessage += 'No microphone found.';
                break;
            case 'not-allowed':
                errorMessage += 'Microphone permission denied.';
                break;
            default:
                errorMessage += event.error;
        }

        micStatus.textContent = errorMessage;
        micStatus.className = 'mic-status error';
        stopListening();
    };

    recognition.onend = () => {
        if (isListening) {
            // If we're still supposed to be listening, restart
            try {
                recognition.start();
            } catch (e) {
                console.error('Failed to restart recognition:', e);
                stopListening();
            }
        }
    };
} else {
    // Browser doesn't support speech recognition
    console.warn('Speech recognition not supported in this browser');
    if (micBtn) {
        micBtn.style.display = 'none';
    }
    if (micStatus) {
        micStatus.textContent = 'Voice input not supported in this browser';
        micStatus.className = 'mic-status error';
    }
}

function startListening() {
    if (!recognition) return;

    try {
        recognition.start();
        isListening = true;
    } catch (e) {
        console.error('Failed to start recognition:', e);
        micStatus.textContent = 'Error: Could not start voice recognition';
        micStatus.className = 'mic-status error';
    }
}

function stopListening() {
    if (!recognition) return;

    isListening = false;
    try {
        recognition.stop();
    } catch (e) {
        console.error('Failed to stop recognition:', e);
    }
    micBtn.classList.remove('recording');
    micStatus.textContent = '';
    micStatus.className = 'mic-status';
}

function toggleListening() {
    if (isListening) {
        stopListening();
    } else {
        startListening();
    }
}

// Draw smooth, blended color visualization on canvas
function drawColorVisualization(colors) {
    if (!canvas || !ctx) return;

    // Set canvas size to match container
    const rect = colorVisualization.getBoundingClientRect();
    canvas.width = rect.width * window.devicePixelRatio;
    canvas.height = rect.height * window.devicePixelRatio;
    canvas.style.width = rect.width + 'px';
    canvas.style.height = rect.height + 'px';
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

    // Clear canvas
    ctx.clearRect(0, 0, rect.width, rect.height);

    if (colors.length === 0) return;

    // Create smooth color blending using overlapping circles
    const numColors = colors.length;
    const positions = [];

    // Generate random positions for color blobs with some spacing
    for (let i = 0; i < numColors; i++) {
        const angle = (i / numColors) * Math.PI * 2;
        const distance = Math.random() * 0.3 + 0.2; // 0.2 to 0.5
        const x = rect.width * (0.5 + Math.cos(angle) * distance);
        const y = rect.height * (0.5 + Math.sin(angle) * distance);
        positions.push({ x, y, color: colors[i] });
    }

    // Enable smooth blending
    ctx.globalCompositeOperation = 'screen';

    // Draw multiple layers of blurred circles for smooth blending
    const maxRadius = Math.max(rect.width, rect.height) * 0.6;

    positions.forEach((pos, index) => {
        const gradient = ctx.createRadialGradient(
            pos.x, pos.y, 0,
            pos.x, pos.y, maxRadius
        );

        // Parse hex color to RGB
        const r = parseInt(pos.color.slice(1, 3), 16);
        const g = parseInt(pos.color.slice(3, 5), 16);
        const b = parseInt(pos.color.slice(5, 7), 16);

        gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, 0.8)`);
        gradient.addColorStop(0.5, `rgba(${r}, ${g}, ${b}, 0.4)`);
        gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, rect.width, rect.height);
    });

    // Reset composite operation
    ctx.globalCompositeOperation = 'source-over';

    // Show canvas
    canvas.style.display = 'block';

    // Hide placeholder
    const placeholder = colorVisualization.querySelector('.placeholder');
    if (placeholder) {
        placeholder.style.display = 'none';
    }
}

// Visualize function
function visualize() {
    const text = textInput.value.trim();
    if (!text) {
        alert('Please enter some text first!');
        return;
    }

    const colorData = analyzeText(text);
    const colors = colorData.map(item => item.color);

    // Draw smooth color visualization
    drawColorVisualization(colors);

    // Update word breakdown
    wordBreakdown.innerHTML = '<h3>Word-by-Word Breakdown:</h3><div class="word-chips"></div>';
    const chipsContainer = wordBreakdown.querySelector('.word-chips');

    colorData.forEach(item => {
        const chip = document.createElement('span');
        chip.className = 'word-chip';
        chip.textContent = item.word;
        chip.style.backgroundColor = item.color;
        chip.style.color = getContrastColor(item.color);
        chipsContainer.appendChild(chip);
    });
}

// Get contrasting text color (black or white) based on background
function getContrastColor(hexColor) {
    const r = parseInt(hexColor.slice(1, 3), 16);
    const g = parseInt(hexColor.slice(3, 5), 16);
    const b = parseInt(hexColor.slice(5, 7), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 128 ? '#000000' : '#FFFFFF';
}

// Clear function
function clear() {
    // Stop listening if active
    if (isListening) {
        stopListening();
    }

    textInput.value = '';

    // Hide canvas and show placeholder
    if (canvas) {
        canvas.style.display = 'none';
        if (ctx) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    }

    const placeholder = colorVisualization.querySelector('.placeholder');
    if (placeholder) {
        placeholder.style.display = 'block';
    }

    wordBreakdown.innerHTML = '';
}

// Event listeners
visualizeBtn.addEventListener('click', visualize);
clearBtn.addEventListener('click', clear);

// Microphone button event listener
if (micBtn) {
    micBtn.addEventListener('click', toggleListening);
}

textInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && e.ctrlKey) {
        visualize();
    }
});

exampleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const exampleKey = btn.dataset.example;
        textInput.value = examples[exampleKey];
        visualize();
    });
});

// Initial message
console.log('Word Color Synesthesia loaded! Try entering some text to see the emotional color spectrum.');
