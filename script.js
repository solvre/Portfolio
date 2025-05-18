 const root = document.documentElement;

  const lightMode = {
    '--bg-color': '#FCFAF9',       // light background
    '--text-color': '#443022',     // brown text
    '--accent-color': '#443022',     // brown accents
    '--border-color': '#443022'  
  };

  const darkMode = {
    '--bg-color': '#222124',       // dark background
    '--text-color': '#F3D0CE',     // soft light text
    '--accent-color': 'white',      // white accents
    '--border-color': 'white'
  };

  document.getElementById('light-mode-btn').addEventListener('click', () => {
    for (const [key, val] of Object.entries(lightMode)) {
      root.style.setProperty(key, val);
    }
  });

  document.getElementById('dark-mode-btn').addEventListener('click', () => {
    for (const [key, val] of Object.entries(darkMode)) {
      root.style.setProperty(key, val);
    }
  });