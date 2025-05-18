function welcomeMessage() {
  alert("🎉 Welcome to Mood Music Registration!");
}

function validateRegister() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var pass = document.getElementById("pass").value;
  var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!name || !email || !pass) {
    alert("All fields are mandatory!");
    return false;
  } else if (!emailPattern.test(email)) {
    alert("Invalid email format!");
    return false;
  } else if (pass.length < 6) {
    alert("Password must be at least 6 characters!");
    return false;
  } else {
    alert("✅ Registered successfully!");
    return true;
  }
}
const musicData = {
    happy: [
      { title: "Happy – Pharrell Williams", url: "https://www.youtube.com/watch?v=ZbZSe6N_BXs" },
      { title: "Can't Stop the Feeling!", url: "https://www.youtube.com/watch?v=ru0K8uYEZWw" },
      { title: "Good Time – Owl City", url: "https://www.youtube.com/watch?v=H7HmzwI67ec" }
    ],
    sad: [
      { title: "Let Her Go – Passenger", url: "https://www.youtube.com/watch?v=RBumgq5yVrA" },
      { title: "Someone Like You – Adele", url: "https://www.youtube.com/watch?v=hLQl3WQQoQ0" },
      { title: "Fix You – Coldplay", url: "https://www.youtube.com/watch?v=k4V3Mo61fJM" }
    ],
    angry: [
      { title: "Numb – Linkin Park", url: "https://www.youtube.com/watch?v=kXYiU_JCYtU" },
      { title: "Believer – Imagine Dragons", url: "https://www.youtube.com/watch?v=7wtfhZwyrcc" },
      { title: "Stronger – Kanye West", url: "https://www.youtube.com/watch?v=PsO6ZnUZI0g" }
    ],
    calm: [
      { title: "Weightless – Marconi Union", url: "https://www.youtube.com/watch?v=UfcAVejslrU" },
      { title: "Perfect – Ed Sheeran", url: "https://www.youtube.com/watch?v=2Vv-BfVoq4g" },
      { title: "River Flows in You – Yiruma", url: "https://www.youtube.com/watch?v=7maJOI3QMu0" }
    ]
  };
  
  function showMusic(mood) {
    const musicList = document.getElementById("musicList");
    musicList.innerHTML = ""; // Clear previous
  
    document.body.style.background = getMoodColor(mood);
  
    musicData[mood].forEach(music => {
      const link = document.createElement("a");
      link.href = music.url;
      link.target = "_blank";
      link.textContent = music.title;
      musicList.appendChild(link);
    });
  }
  
  function getMoodColor(mood) {
    switch (mood) {
      case "happy": return "#fff7c0";
      case "sad": return "#c9d6ff";
      case "angry": return "#ffcccc";
      case "calm": return "#d0f0c0";
      default: return "#f3f3f3";
    }
  }