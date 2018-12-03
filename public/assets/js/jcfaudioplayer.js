var callback = function(){
    var buttons = [
        [
            "fas fa-play jcfResize",
            function() {
                playAudio();
            }
        ],
        [
            "fas fa-stop jcfResize",
            function() {
                stopAudio();
            }
        ],
        [
            "fas fa-fast-backward jcfResize",
            function() {
                prevTrack();
            }
        ],
        [
            "fas fa-step-backward jcfResize",
            function() {
                rewind();
            }
        ],
        [
            "fas fa-step-forward jcfResize",
            function() {
                forward();
            }
        ],
        [
            "fas fa-fast-forward jcfResize",
            function() {
                nextTrack();
            }
        ]
    ];

    // Retrieve elements.
    var audioElement = document.createElement("audio");
    var nowPlaying = "0";
    var duration = audioElement.duration;

    var audioPlayerHeading = document.createElement("h3");
    audioPlayerHeading.id = "jcfAudioHeading";
    audioPlayerHeading.style.display = "inline-block";
    audioPlayerHeading.style.float = "left";
    audioPlayerHeading.style.width = "53%";
    audioPlayerHeading.style.height = "74%";
    audioPlayerHeading.style.lineHeight = "36px";
    audioPlayerHeading.style.margin = "0";
    audioPlayerHeading.style.padding = "0";
    audioPlayerHeading.style.textAlign = "center";
    audioPlayerHeading.style.fontSize = "1rem";
    audioPlayerHeading.style.borderRadius = "0.4rem";
    audioPlayerHeading.className = "jcfResize";
    audioPlayerHeading.innerHTML = "jcfAudioPlayer";

    var buttonList = document.createElement("div");
    buttonList.id = "jcfAudioButtons";
    buttonList.style.display = "inline-block";
    buttonList.style.float = "left";
    buttonList.style.width = "42%";
    buttonList.style.height = "74%";
    buttonList.style.margin = "0 0 0 5%";
    buttonList.style.padding = "0";

    var audioHead = document.createElement("div");
    audioHead.style.display = "inline-block";
    audioHead.style.float = "left";
    audioHead.style.width = "100%";
    audioHead.style.height = "30%";
    audioHead.style.margin = "0";
    audioHead.style.padding = "0";
    audioHead.appendChild(audioPlayerHeading);
    audioHead.appendChild(buttonList);

    // Create playhead.
    var playhead = document.createElement('div');
    playhead.id = "jcfAudioPlayhead";
    playhead.style.display = "inline-block";
    playhead.style.width = "4%";
    playhead.style.height = "100%";
    playhead.style.margin = "0";
    playhead.style.padding = "0";

    // Create track name element with inline styles.
    var trackName = document.createElement('p');
    trackName.id = "jcfAudioTrackName";
    trackName.className = "jcfResize";
    trackName.style.display = "inline-block";
    trackName.style.float = "left";
    trackName.style.clear = "both";
    trackName.style.width = "80%";
    trackName.style.height = "100%";
    trackName.style.margin = "0";
    trackName.style.padding = "0";
    trackName.style.fontSize = "1rem";
    trackName.style.animation = "jcfAudioMarquee 10s linear infinite";
    trackName.innerHTML = "Play to load track info";

    // Create current time element with inline styles.
    currentTime = document.createElement('div');
    currentTime.id = "jcfAudioTimeCurrent";
    currentTime.className = "jcfResize";
    currentTime.style.display = "inline-block";
    currentTime.style.float = "left";
    currentTime.style.width = "100%";
    currentTime.style.height = "40%";
    currentTime.style.margin = "0";
    currentTime.style.padding = "0";
    currentTime.innerHTML = "00:00";

    // Create track time element with inline styles.
    trackTime = document.createElement('div');
    trackTime.id = "jcfAudioTimeTotal";
    trackTime.className = "jcfResize";
    trackTime.style.display = "inline-block";
    trackTime.style.float = "left";
    trackTime.style.width = "100%";
    trackTime.style.height = "40%";
    trackTime.style.margin = "0";
    trackTime.style.padding = "0";
    trackTime.innerHTML = "00:00";

    var playIcon = document.createElement('i');
    playIcon.className = "fas fa-play jcfResize";
    playIcon.setAttribute("aria-hidden", "true");
    playIcon.style.display = "block";
    playIcon.style.width = "80%";
    playIcon.style.height = "80%";

    var playAnchor = document.createElement("a");
    playAnchor.appendChild(playIcon);

    var playButton = document.createElement("button");
    playButton.style.display = "inline-block";
    playButton.style.float = "left";
    playButton.style.width = "92%";
    playButton.style.height = "92%";
    playButton.style.margin = "0";
    playButton.style.padding = "4% 0 0 8%";
    playButton.style.outline = "none";
    playButton.style.border = "none";
    playButton.style.borderRadius = "0.2rem";
    playButton.style.textAlign = "center";
    playButton.appendChild(playAnchor);
    playButton.onclick = function() {
        playAudio();
    };

    var playButtonContainer = document.createElement("div");
    playButtonContainer.className = "button";
    playButtonContainer.appendChild(playButton);
    playButtonContainer.style.display = "inline-block";
    playButtonContainer.style.float = "left";
    playButtonContainer.style.width = "13%";
    playButtonContainer.style.height = "80%";
    playButtonContainer.style.margin = "0 0 0 3%";
    playButtonContainer.style.padding = "0";
    buttonList.appendChild(playButtonContainer);

    for(i=1;i<buttons.length;i++) {

        var icon = document.createElement('i');
        icon.className = buttons[i][0];
        icon.setAttribute("aria-hidden", "true");
        icon.style.display = "block";
        icon.style.width = "80%";
        icon.style.height = "80%";

        var anchor = document.createElement("a");
        anchor.appendChild(icon);

        var button = document.createElement("button");
        button.onclick = buttons[i][1];
        button.style.display = "inline-block";
        button.style.float = "left";
        button.style.width = "92%";
        button.style.height = "92%";
        button.style.margin = "0";
        button.style.padding = "4% 0 0 8%";
        button.style.outline = "none";
        button.style.border = "none";
        button.style.borderRadius = "0.2rem";
        button.style.textAlign = "center";
        button.appendChild(anchor);

        var buttonContainer = document.createElement("div");
        buttonContainer.className = "button";
        buttonContainer.appendChild(button);
        buttonContainer.style.display = "inline-block";
        buttonContainer.style.float = "left";
        buttonContainer.style.width = "13%";
        buttonContainer.style.height = "80%";
        buttonContainer.style.margin = "0 0 0 3%";
        buttonContainer.style.padding = "0";
        buttonList.appendChild(buttonContainer);
    }

    // Create details title.
    detailsHeading = document.createElement('h3');
    detailsHeading.id = "jcfAudioDetailsHeading";
    detailsHeading.className = "jcfResize";
    detailsHeading.style.display = "inline-block";
    detailsHeading.style.float = "left";
    detailsHeading.style.width = "100%";
    detailsHeading.style.height = "50%";
    detailsHeading.style.margin = "0";
    detailsHeading.style.padding = "0";
    detailsHeading.style.fontSize = "1rem";
    detailsHeading.innerHTML = "Now playing&nbsp;:";

    // Create track details element.
    trackDetails = document.createElement('div');
    trackDetails.id = "jcfAudioTrackDetails";
    trackDetails.style.display = "inline-block";
    trackDetails.style.float = "left";
    trackDetails.style.width = "76%";
    trackDetails.style.height = "50%";
    trackDetails.style.margin = "0";
    trackDetails.style.padding = "0";
    trackDetails.style.overflow = "hidden";
    trackDetails.style.whiteSpace = "nowrap";

    // Display track name on page.
    trackDetails.appendChild(trackName);

    // Create timeline.
    timeline = document.createElement("div");
    timeline.id = "jcfAudioTimeline";
    timeline.style.display = "inline-block";
    timeline.style.float = "left";
    timeline.style.width = "100%";
    timeline.style.height = "100%";
    timeline.style.margin = "0";
    timeline.style.padding = "0";

    // Create timeline container.
    timelineContainer = document.createElement("div");
    timelineContainer.id = "jcfAudioTimelineContainer";
    timelineContainer.style.display = "inline-block";
    timelineContainer.style.float = "left";
    timelineContainer.style.width = "51%";
    timelineContainer.style.height = "100%";
    timelineContainer.style.margin = "0";
    timelineContainer.style.padding = "0";

    // Arrange and display timeline.
    timeline.appendChild(playhead);
    timelineContainer.appendChild(timeline);

    // Create label for volume bar.
    var volLabel = document.createElement("h5");
    volLabel.className = "jcfResize";
    volLabel.style.display = "inline-block";
    volLabel.style.float = "left";
    volLabel.style.width ="15%";
    volLabel.style.height = "100%";
    volLabel.style.margin = "0";
    volLabel.style.padding = "0 2% 0 0";
    volLabel.style.textAlign = "right";
    volLabel.innerHTML = "Vol.";

    // Create volume bar.
    var volBar = document.createElement("input");
    volBar.id = "jcfAudioVol";
    volBar.type = "range";
    volBar.min = "0";
    volBar.max = "1";
    volBar.step = "0.01";
    volBar.value = "1";
    volBar.style.display = "inline-block";
    volBar.style.float = "left";
    volBar.style.width ="83%";
    volBar.style.height = "100%";
    volBar.style.margin = "0";
    volBar.style.padding = "0";
    volBar.onchange = function() {
        setVolume();
    };

    var volBarContainer = document.createElement("div");
    volBarContainer.style.display = "inline-block";
    volBarContainer.style.float = "left";
    volBarContainer.style.width = "49%";
    volBarContainer.style.height = "100%";
    volBarContainer.style.margin = "0";
    volBarContainer.style.padding = "0";
    volBarContainer.appendChild(volLabel);
    volBarContainer.appendChild(volBar);

    // Create time information container.
    sliders = document.createElement("div");
    sliders.id =  "jcfAudioSliders";
    sliders.style.display = "inline-block";
    sliders.style.float = "left";
    sliders.style.width = "100%";
    sliders.style.height = "15%";
    sliders.style.margin = "0";
    sliders.style.padding = "2% 0 0";
    sliders.appendChild(timelineContainer);
    sliders.appendChild(volBarContainer);

    // Create time display element.
    timeDisplay = document.createElement("div");
    timeDisplay.id = "jcfAudioTrackTime";
    timeDisplay.style.display = "inline-block";
    timeDisplay.style.float = "right";
    timeDisplay.style.width = "20%";
    timeDisplay.style.height = "80%";
    timeDisplay.style.margin = "0";
    timeDisplay.style.padding = "0";
    timeDisplay.style.fontSize = "1rem";
    timeDisplay.style.textAlign = "right";
    timeDisplay.style.verticalAlign = "middle";

    // Populate time display element.
    timeDisplay.appendChild(currentTime);
    timeDisplay.appendChild(trackTime);

    // Create track details display.
    details = document.createElement("div");
    details.id = "jcfAudioDetails";
    details.style.display = "inline-block";
    details.style.float = "left";
    details.style.width = "96%";
    details.style.height = "40%";
    details.style.margin = "0";
    details.style.padding = "1% 2%";
    details.style.borderRadius = "0.2rem";
    details.appendChild(detailsHeading);
    details.appendChild(trackDetails);
    details.appendChild(timeDisplay);

    var audioDisplay = document.createElement("div");
    audioDisplay.appendChild(audioHead);
    audioDisplay.appendChild(details);
    audioDisplay.appendChild(sliders);

    var audioPlayer = document.getElementById("jcfAudioPlayer");
    audioPlayer.innerHTML = "";
    audioPlayer.appendChild(audioElement);
    audioPlayer.appendChild(audioDisplay);

    // Scaling functions
    function autoSize() {
        resizeTimeline();
        resizeFont();
    }

    function resizeFont() {
        var elements  = document.getElementsByClassName('jcfResize');
        if (elements.length < 0) {
            return;
        }
        _len = elements.length;
        for (_i = 0; _i < _len; _i++) {
            var el = elements[_i];
            el.style.fontSize = "100%";
            for (var size = 100; el.scrollHeight > el.clientHeight; size -= 10) {
                el.style.fontSize = size + '%';
            }
        }
    }

    function fitButtons () {
        var buttons = document.getElementsByClassName("buttons");
        for(i = 0; i < buttons.length; i++) {
            var buttonWidth = buttons[i].style.width;
            var iconWidth = buttons[i].children[0].style.width;

            while (iconWidth > buttonWidth){
                buttons[i].children[0].children[0].children[0].width -= 0.5;
            }
        }
    }

    function resizeTimeline () {
        var time = audioElement.currentTime;
        timelineWidth = timeline.offsetWidth - playhead.offsetWidth;
        var playPercent = timelineWidth * (time / duration);
        playhead.style.marginLeft = playPercent + "px";
    }

    function loadTrack(nowPlaying) {
        audioElement.src = trackList[nowPlaying];
        playhead.style.marginLeft = "0px";
        audioElement.load();
        var currentTrack = trackList[nowPlaying].substring(trackList[nowPlaying].lastIndexOf("/") + 1);
        trackName.innerHTML = currentTrack.replace(new RegExp("%20", 'g'), " ");
        currentTime.innerHTML = "00:00";
        trackTime.innerHTML = "00:00";
    }

    // Button functions
    function playAudio() {
        if (audioElement.paused) {
            audioElement.play();
            playIcon.className = "fas fa-pause";
            trackDisplay();
            showTime();
        } else {
            audioElement.pause();
            playIcon.className = "fas fa-play";
        }
    }

    function stopAudio() {
        if (audioElement.paused) {
            audioElement.currentTime = 0;
        } else {
            audioElement.pause();
            audioElement.currentTime = 0;
            playIcon.className = "fas fa-play";
            playIcon.appendChild(i);
        }
    }

    function prevTrack() {
        if (audioElement.paused) {
            if(audioElement.currentTime > 0) {
                audioElement.currentTime = 0;
            } else {
                if(nowPlaying > 0) {
                    nowPlaying = nowPlaying - 1;
                    loadTrack(nowPlaying);
                } else {
                    nowPlaying = trackList.length-1;
                    loadTrack(nowPlaying);
                }
            }
        } else {
            audioElement.pause();
            audioElement.currentTime = 0;
            playIcon.className = "fas fa-play";
        }
    }

    function rewind() {
        var time = audioElement.currentTime;
        var nextTime = time - 10;
        if(nextTime > 0) {
            audioElement.currentTime = nextTime;
        } else {
            if(audioElement.paused) {
                audioElement.currentTime = 0;
            } else {
                audioElement.pause();
                audioElement.currentTime = 0;
                playIcon.className = "fas fa-play";
            }
        }
    }

    function forward() {
        var time = audioElement.currentTime;
        nextTime = time + 10;
        if(nextTime < duration) {
            audioElement.currentTime = nextTime;
        } else {
            if(audioElement.paused) {
                if(time < duration) {
                    audioElement.currentTime = duration;
                }
            } else {
                audioElement.pause();
                playIcon.className = "fas fa-play";
                audioElement.currentTime = duration;
            }
        }
    }

    function nextTrack() {
        var time = audioElement.currentTime;
        if(nowPlaying < trackList.length-1) {
            nowPlaying = nowPlaying + 1;
        } else {
            nowPlaying = 0;
        }
        if(!audioElement.paused) {
            audioElement.pause();
            playIcon.className = "fas fa-play";
            loadTrack(nowPlaying);
            audioElement.play();
            playIcon.className = "fas fa-pause";
        } else {
            playIcon.className = "fas fa-play";
            loadTrack(nowPlaying);
        }
    }

    // Slider functions
    function moveplayhead(event) {
        var newMargLeft = event.clientX - getPosition(timeline);

        if (newMargLeft >= 0 && newMargLeft <= timelineWidth) {
            playhead.style.marginLeft = newMargLeft + "px";
        }
        if (newMargLeft < 0) {
            playhead.style.marginLeft = "0px";
        }
        if (newMargLeft > timelineWidth) {
            playhead.style.marginLeft = timelineWidth + "px";
        }
    }

    // Slider calculations
    function clickPercent(event) {
        return (event.clientX - getPosition(timeline)) / timelineWidth;
    }

    function mouseDown() {
        onplayhead = true;
        window.addEventListener('mousemove', moveplayhead, true);
        audioElement.removeEventListener('timeupdate', timeUpdate, false);
    }

    function mouseUp(event) {
        if (onplayhead == true) {
            moveplayhead(event);
            window.removeEventListener('mousemove', moveplayhead, true);
            audioElement.currentTime = duration * clickPercent(event);
            audioElement.addEventListener('timeupdate', timeUpdate, false);
        }
        onplayhead = false;
    }

    function setVolume() {
        audioElement.volume = volBar.value;
    }

    function getPosition(el) {
        return el.getBoundingClientRect().left;
    }

    // Track info functions
    function trackDisplay() {
        var currentSrc = audioElement.currentSrc;
        var currentTrack = currentSrc.substring(currentSrc.lastIndexOf("/") + 1);
        trackName.innerHTML = currentTrack.replace(new RegExp("%20", 'g'), " ");
    }

    function showTime() {
        var time = audioElement.currentTime;
        var currMinutes = Math.round(Math.floor(time / 60));
        currMinutes = (currMinutes < 10 ? '0' : '') + currMinutes;
        var currSeconds = Math.round(time - currMinutes * 60);
        currSeconds = (currSeconds < 10 ? '0' : '') + currSeconds;
        var currTime = currMinutes + ":" + currSeconds;
        var totMinutes = Math.round(Math.floor(audioElement.duration / 60));
        totMinutes = (totMinutes < 10 ? '0' : '') + totMinutes;
        var totSeconds = Math.round(duration - totMinutes * 60);
        totSeconds = (totSeconds < 10 ? '0' : '') + totSeconds;
        var totTime = totMinutes + ":" + totSeconds;
        currentTime.innerHTML = currTime;
        trackTime.innerHTML = totTime;
    }

    function timeUpdate() {
        var time = audioElement.currentTime;
        var playPercent = timelineWidth * (time / duration);
        playhead.style.marginLeft = playPercent + "px";
        if (audioElement.currentTime == duration) {
            playIcon.className = "fas fa-play";
        }
        var currMinutes = Math.round(Math.floor(time / 60));
        currMinutes = (currMinutes < 10 ? '0' : '') + currMinutes;
        var currSeconds = Math.round(time - currMinutes * 60);
        currSeconds = (currSeconds < 10 ? '0' : '') + currSeconds;
        var currTime = currMinutes + ":" + currSeconds;
        currentTime.innerHTML = currTime;
    }

    function initDetails() {
        // Initialize variables.
        nowPlaying = 0;
        duration = audioElement.duration;
        timelineWidth = timeline.offsetWidth - playhead.offsetWidth;
        onplayhead = false;
        audioElement.volume = volBar.value;
    }

    loadTrack(nowPlaying);

    initDetails();

    autoSize();

    // Update timeline and fonts on window resize.
    window.addEventListener('resize', autoSize); 

    // Update current time based on slider position.
    audioElement.addEventListener("timeupdate", timeUpdate, false);

    // Reposition playhead and update current time when timeline is clicked.
    timeline.addEventListener("click", function(event) {
        moveplayhead(event);
        audioElement.currentTime = duration * clickPercent(event);
    }, false);

    playhead.addEventListener('mousedown', mouseDown, false);

    window.addEventListener('mouseup', mouseUp, false);

    // Generate track info.
    audioElement.addEventListener("canplaythrough", function() {
        duration = audioElement.duration;
        trackDisplay();
        showTime();
    }, false);
};

if (
    document.readyState === "complete" ||
    (document.readyState !== "loading" && !document.documentElement.doScroll)
) {
  callback();
} else {
  document.addEventListener("DOMContentLoaded", callback);
}