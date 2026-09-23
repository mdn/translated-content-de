---
title: Video- und Audio-APIs
short-title: Video und Audio
slug: Learn_web_development/Extensions/Client-side_APIs/Video_and_audio_APIs
l10n:
  sourceCommit: 1402df2877308c09ea2aa1460f1c97c634bd7624
---

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_APIs/Introduction", "Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics", "Learn_web_development/Extensions/Client-side_APIs")}}

HTML bietet Elemente zum Einbetten von Medien in Dokumente — {{htmlelement("video")}} und {{htmlelement("audio")}}. Diese verfügen über eigene APIs, mit denen sich unter anderem die Wiedergabe steuern und eine bestimmte Position im Medium ansteuern lässt. Dieser Artikel zeigt Ihnen, wie Sie häufige Aufgaben erledigen, beispielsweise eigene Wiedergabesteuerelemente erstellen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>, insbesondere mit den <a href="/de/docs/Learn_web_development/Core/Scripting/Object_basics">Grundlagen zu JavaScript-Objekten</a> und zentralen APIs wie <a href="/de/docs/Learn_web_development/Core/Scripting/DOM_scripting">DOM-Scripting</a> und <a href="/de/docs/Learn_web_development/Core/Scripting/Network_requests">Netzwerkanfragen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verstehen, was Codecs sind und welche Video- und Audioformate es gibt.</li>
          <li>Wichtige Funktionen für Audio und Video verstehen: Wiedergabe, Pausieren, Stoppen, Vor- und Zurückspulen, Dauer und aktuelle Wiedergabeposition.</li>
          <li>Die <code>HTMLMediaElement</code>-API verwenden, um einen einfachen eigenen Mediaplayer zu erstellen, der barrierefreier ist oder sich browserübergreifend einheitlicher verhält.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## HTML-Video und -Audio

Mit den Elementen {{htmlelement("video")}} und {{htmlelement("audio")}} können wir Video und Audio in Webseiten einbetten. Wie unter [HTML-Video und -Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio) gezeigt, sieht eine typische Implementierung so aus:

```html
<video controls>
  <source src="rabbit320.mp4" type="video/mp4" />
  <source src="rabbit320.webm" type="video/webm" />
  <p>
    Your browser doesn't support HTML video. Here is a
    <a href="rabbit320.mp4">link to the video</a> instead.
  </p>
</video>
```

Dadurch entsteht im Browser ein Videoplayer wie dieser:

```html hidden live-sample___multiple-formats
<h1>Below is a video that will play in all modern browsers</h1>

<video controls>
  <source
    src="https://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/rabbit320.mp4"
    type="video/mp4" />
  <source
    src="https://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/rabbit320.webm"
    type="video/webm" />
</video>
```

{{EmbedLiveSample("multiple-formats", '100%', 380)}}

Was die einzelnen HTML-Funktionen bewirken, können Sie im oben verlinkten Artikel nachlesen. Für unsere Zwecke ist das Attribut [`controls`](/de/docs/Web/HTML/Reference/Elements/video#controls) am interessantesten: Es aktiviert die standardmäßigen Wiedergabesteuerelemente. Wenn Sie es nicht angeben, werden keine Wiedergabesteuerelemente angezeigt:

```html hidden live-sample___multiple-formats-no-controls
<h1>Below is a video that will play in all modern browsers</h1>

<video>
  <source
    src="https://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/rabbit320.mp4"
    type="video/mp4" />
  <source
    src="https://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/rabbit320.webm"
    type="video/webm" />
</video>
```

{{EmbedLiveSample("multiple-formats-no-controls", '100%', 380)}}

Für die Videowiedergabe ist das zunächst weniger nützlich, bietet aber auch Vorteile. Ein großes Problem der nativen Browsersteuerelemente ist, dass sie in jedem Browser anders aussehen — nicht gerade ideal für eine browserübergreifend einheitliche Darstellung! Ein weiteres Problem ist, dass die nativen Steuerelemente in den meisten Browsern nur eingeschränkt per Tastatur bedienbar sind.

Beide Probleme können Sie lösen, indem Sie die nativen Steuerelemente ausblenden (also das Attribut `controls` entfernen) und mit HTML, CSS und JavaScript eigene programmieren. Im nächsten Abschnitt sehen wir uns die grundlegenden Werkzeuge dafür an.

## Die HTMLMediaElement-API

Die [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-API ist Teil der HTML-Spezifikation und bietet Funktionen, mit denen Sie Video- und Audioplayer programmatisch steuern können, etwa [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play) und [`HTMLMediaElement.pause()`](/de/docs/Web/API/HTMLMediaElement/pause). Diese Schnittstelle steht sowohl {{htmlelement("audio")}}- als auch {{htmlelement("video")}}-Elementen zur Verfügung, da die benötigten Funktionen nahezu identisch sind. Sehen wir uns ein Beispiel an, das wir schrittweise erweitern.

Unser fertiges Beispiel wird ungefähr so aussehen und funktionieren:

```html hidden live-sample___custom-video-player
<div class="player">
  <video controls>
    <source src="/shared-assets/videos/sintel-short.mp4" type="video/mp4" />
    <source src="/shared-assets/videos/sintel-short.webm" type="video/webm" />
  </video>
  <div class="controls">
    <button class="play" data-icon="P" aria-label="play pause toggle"></button>
    <button class="stop" data-icon="S" aria-label="stop"></button>
    <div class="timer">
      <div></div>
      <span>00:00</span>
    </div>
    <button class="rwd" data-icon="B" aria-label="rewind"></button>
    <button class="fwd" data-icon="F" aria-label="fast forward"></button>
  </div>
</div>
<p>
  Sintel &copy; copyright Blender Foundation |
  <a href="https://studio.blender.org/films/sintel/"
    >studio.blender.org/films/sintel/</a
  >.
</p>
```

```css hidden live-sample___custom-video-player
body {
  overflow: hidden;
}

@font-face {
  font-family: "HeydingsControlsRegular";
  src: url("https://mdn.github.io/learning-area/javascript/apis/video-audio/finished/fonts/heydings_controls-webfont.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;
}

video {
  border: 1px solid black;
}

p {
  position: absolute;
  top: 310px;
}

.player {
  position: absolute;
}

.controls {
  visibility: hidden;
  opacity: 0.5;
  width: 400px;
  border-radius: 10px;
  position: absolute;
  bottom: 20px;
  left: 50%;
  margin-left: -200px;
  background-color: black;
  box-shadow: 3px 3px 5px black;
  transition: 1s all;
  display: flex;
}

.player:hover .controls,
.player:focus-within .controls {
  opacity: 1;
}

button,
.controls {
  background: linear-gradient(to bottom, #222222, #666666);
}

button::before {
  font-family: "HeydingsControlsRegular";
  font-size: 20px;
  position: relative;
  content: attr(data-icon);
  color: #aaaaaa;
  text-shadow: 1px 1px 0px black;
}

.play::before {
  font-size: 22px;
}

button,
.timer {
  height: 38px;
  line-height: 19px;
  box-shadow: inset 0 -5px 25px #0000004d;
  border-right: 1px solid #333333;
}

button {
  position: relative;
  border: 0;
  flex: 1;
  outline: none;
}

.play {
  border-radius: 10px 0 0 10px;
}

.fwd {
  border-radius: 0 10px 10px 0;
}

.timer {
  line-height: 38px;
  font-size: 10px;
  font-family: monospace;
  text-shadow: 1px 1px 0px black;
  color: white;
  flex: 5;
  position: relative;
}

.timer div {
  position: absolute;
  background-color: rgb(255 255 255 / 20%);
  left: 0;
  top: 0;
  width: 0;
  height: 38px;
  z-index: 2;
}

.timer span {
  position: absolute;
  z-index: 3;
  left: 19px;
}

button:hover,
button:focus {
  box-shadow: inset 1px 1px 2px black;
}

button:active {
  box-shadow: inset 3px 3px 2px black;
}

.active::before {
  color: red;
}
```

```js hidden live-sample___custom-video-player
const media = document.querySelector("video");
const controls = document.querySelector(".controls");

const play = document.querySelector(".play");
const stop = document.querySelector(".stop");
const rwd = document.querySelector(".rwd");
const fwd = document.querySelector(".fwd");

const timerWrapper = document.querySelector(".timer");
const timer = document.querySelector(".timer span");
const timerBar = document.querySelector(".timer div");

media.removeAttribute("controls");
controls.style.visibility = "visible";

play.addEventListener("click", playPauseMedia);
stop.addEventListener("click", stopMedia);
media.addEventListener("ended", stopMedia);
rwd.addEventListener("click", mediaBackward);
fwd.addEventListener("click", mediaForward);
media.addEventListener("timeupdate", setTime);

let intervalFwd;
let intervalRwd;

function playPauseMedia() {
  rwd.classList.remove("active");
  fwd.classList.remove("active");
  clearInterval(intervalRwd);
  clearInterval(intervalFwd);
  if (media.paused) {
    play.setAttribute("data-icon", "u");
    media.play();
  } else {
    play.setAttribute("data-icon", "P");
    media.pause();
  }
}

function stopMedia() {
  rwd.classList.remove("active");
  fwd.classList.remove("active");
  media.pause();
  media.currentTime = 0;
  clearInterval(intervalRwd);
  clearInterval(intervalFwd);
  play.setAttribute("data-icon", "P");
}

function mediaBackward() {
  clearInterval(intervalFwd);
  fwd.classList.remove("active");

  if (rwd.classList.contains("active")) {
    rwd.classList.remove("active");
    clearInterval(intervalRwd);
    media.play();
  } else {
    rwd.classList.add("active");
    media.pause();
    intervalRwd = setInterval(windBackward, 200);
  }
}

function mediaForward() {
  clearInterval(intervalRwd);
  rwd.classList.remove("active");

  if (fwd.classList.contains("active")) {
    fwd.classList.remove("active");
    clearInterval(intervalFwd);
    media.play();
  } else {
    fwd.classList.add("active");
    media.pause();
    intervalFwd = setInterval(windForward, 200);
  }
}

function windBackward() {
  if (media.currentTime <= 3) {
    rwd.classList.remove("active");
    clearInterval(intervalRwd);
    stopMedia();
  } else {
    media.currentTime -= 3;
  }
}

function windForward() {
  if (media.currentTime >= media.duration - 3) {
    fwd.classList.remove("active");
    clearInterval(intervalFwd);
    stopMedia();
  } else {
    media.currentTime += 3;
  }
}

function setTime() {
  const minutes = Math.floor(media.currentTime / 60);
  const seconds = Math.floor(media.currentTime - minutes * 60);

  const minuteValue = minutes.toString().padStart(2, "0");
  const secondValue = seconds.toString().padStart(2, "0");

  const mediaTime = `${minuteValue}:${secondValue}`;
  timer.textContent = mediaTime;

  const barLength =
    timerWrapper.clientWidth * (media.currentTime / media.duration);
  timerBar.style.width = `${barLength}px`;
}
```

{{EmbedLiveSample("custom-video-player", '100%', 360)}}

### Erste Schritte

Gehen Sie für dieses Beispiel wie folgt vor:

1. Erstellen Sie auf Ihrer Festplatte ein neues Verzeichnis namens `custom-video-player`.
2. Erstellen Sie darin eine neue Datei namens `index.html` mit folgendem Inhalt:

   ```html
   <!doctype html>
   <html lang="en-gb">
     <head>
       <meta charset="utf-8" />
       <meta name="viewport" content="width=device-width, initial-scale=1" />
       <title>Video player example</title>
       <link rel="stylesheet" type="text/css" href="style.css" />
     </head>
     <body>
       <div class="player">
         <video controls>
           <source
             src="/shared-assets/videos/sintel-short.mp4"
             type="video/mp4" />
           <source
             src="/shared-assets/videos/sintel-short.webm"
             type="video/webm" />
         </video>
         <div class="controls">
           <button
             class="play"
             data-icon="P"
             aria-label="play pause toggle"></button>
           <button class="stop" data-icon="S" aria-label="stop"></button>
           <div class="timer">
             <div></div>
             <span>00:00</span>
           </div>
           <button class="rwd" data-icon="B" aria-label="rewind"></button>
           <button class="fwd" data-icon="F" aria-label="fast forward"></button>
         </div>
       </div>
       <p>
         Sintel &copy; copyright Blender Foundation |
         <a href="https://studio.blender.org/films/sintel/"
           >studio.blender.org/films/sintel/</a
         >.
       </p>
       <script src="custom-player.js"></script>
     </body>
   </html>
   ```

3. Erstellen Sie darin eine weitere Datei namens `style.css` mit folgendem Inhalt:

   ```css
   @font-face {
     font-family: "HeydingsControlsRegular";
     src: url("https://mdn.github.io/learning-area/javascript/apis/video-audio/finished/fonts/heydings_controls-webfont.woff")
       format("woff");
     font-weight: normal;
     font-style: normal;
   }

   video {
     border: 1px solid black;
   }

   p {
     position: absolute;
     top: 310px;
   }

   .player {
     position: absolute;
   }

   .controls {
     visibility: hidden;
     opacity: 0.5;
     width: 400px;
     border-radius: 10px;
     position: absolute;
     bottom: 20px;
     left: 50%;
     margin-left: -200px;
     background-color: black;
     box-shadow: 3px 3px 5px black;
     transition: 1s all;
     display: flex;
   }

   .player:hover .controls,
   .player:focus-within .controls {
     opacity: 1;
   }

   button,
   .controls {
     background: linear-gradient(to bottom, #222222, #666666);
   }

   button::before {
     font-family: "HeydingsControlsRegular";
     font-size: 20px;
     position: relative;
     content: attr(data-icon);
     color: #aaaaaa;
     text-shadow: 1px 1px 0px black;
   }

   .play::before {
     font-size: 22px;
   }

   button,
   .timer {
     height: 38px;
     line-height: 19px;
     box-shadow: inset 0 -5px 25px #0000004d;
     border-right: 1px solid #333333;
   }

   button {
     position: relative;
     border: 0;
     flex: 1;
     outline: none;
   }

   .play {
     border-radius: 10px 0 0 10px;
   }

   .fwd {
     border-radius: 0 10px 10px 0;
   }

   .timer {
     line-height: 38px;
     font-size: 10px;
     font-family: monospace;
     text-shadow: 1px 1px 0px black;
     color: white;
     flex: 5;
     position: relative;
   }

   .timer div {
     position: absolute;
     background-color: rgb(255 255 255 / 20%);
     left: 0;
     top: 0;
     width: 0;
     height: 38px;
     z-index: 2;
   }

   .timer span {
     position: absolute;
     z-index: 3;
     left: 19px;
   }

   button:hover,
   button:focus {
     box-shadow: inset 1px 1px 2px black;
   }

   button:active {
     box-shadow: inset 3px 3px 2px black;
   }

   .active::before {
     color: red;
   }
   ```

4. Erstellen Sie im Verzeichnis außerdem eine Datei namens `custom-player.js`. Lassen Sie sie vorerst leer.

Wenn Sie jetzt die HTML-Datei laden, sollten Sie einen gewöhnlichen HTML-Videoplayer mit den nativen Steuerelementen sehen.

#### Das HTML untersuchen

Öffnen Sie die HTML-Datei `index.html`. Sie enthält mehrere Bestandteile; den größten Teil machen der Videoplayer und seine Steuerelemente aus:

- Der gesamte Player ist von einem {{htmlelement("div")}}-Element umschlossen, sodass er bei Bedarf als Einheit gestaltet werden kann.
- Das {{htmlelement("video")}}-Element enthält zwei {{htmlelement("source")}}-Elemente, damit je nach Browser unterschiedliche Formate geladen werden können.
- Das HTML für die Steuerelemente ist besonders interessant:
  - Es gibt vier {{htmlelement("button")}}-Elemente: für Wiedergabe/Pause, Stopp, Zurückspulen und Vorspulen.
  - Jedes `<button>`-Element hat einen `class`-Namen, ein `data-icon`-Attribut, das das anzuzeigende Symbol festlegt (wie das funktioniert, zeigen wir im nächsten Abschnitt), sowie ein `aria-label`-Attribut. Letzteres liefert eine verständliche Beschreibung der Schaltfläche, da zwischen den Tags keine lesbare Beschriftung steht. Screenreader lesen den Inhalt von `aria-label`-Attributen vor, wenn ihre Nutzer die betreffenden Elemente fokussieren.
  - Außerdem gibt es ein {{htmlelement("div")}}-Element für die Zeitanzeige. Es zeigt während der Wiedergabe die verstrichene Zeit an. Dafür verwenden wir zwei Darstellungen: ein {{htmlelement("span")}}-Element mit der verstrichenen Zeit in Minuten und Sekunden sowie ein zusätzliches `<div>`-Element für einen horizontalen Balken, der mit fortschreitender Wiedergabe länger wird.

#### Das CSS untersuchen

Öffnen Sie nun die CSS-Datei. Das CSS für dieses Beispiel ist nicht besonders kompliziert; wir heben hier die interessantesten Stellen hervor. Sehen Sie sich zunächst die Gestaltung von `.controls` an:

```css
.controls {
  visibility: hidden;
  opacity: 0.5;
  width: 400px;
  border-radius: 10px;
  position: absolute;
  bottom: 20px;
  left: 50%;
  margin-left: -200px;
  background-color: black;
  box-shadow: 3px 3px 5px black;
  transition: 1s all;
  display: flex;
}

.player:hover .controls,
.player:focus-within .controls {
  opacity: 1;
}
```

- Die {{cssxref("visibility")}} der eigenen Steuerelemente ist anfangs auf `hidden` gesetzt. Später setzen wir sie mit JavaScript auf `visible` und entfernen das Attribut `controls` vom `<video>`-Element. Falls JavaScript nicht geladen wird, können Nutzer das Video dadurch weiterhin mit den nativen Steuerelementen bedienen.
- Standardmäßig setzen wir die {{cssxref("opacity")}} der Steuerelemente auf `0.5`, damit sie beim Ansehen des Videos weniger ablenken. Erst wenn sich der Mauszeiger über dem Player befindet oder der Player fokussiert ist, erscheinen sie mit voller Deckkraft.
- Die Schaltflächen innerhalb der Steuerleiste ordnen wir mithilfe von Flexbox ({{cssxref("display")}}: flex) an.

Sehen wir uns als Nächstes die Symbole auf den Schaltflächen an:

```css
@font-face {
  font-family: "HeydingsControlsRegular";
  src: url("https://mdn.github.io/learning-area/javascript/apis/video-audio/finished/fonts/heydings_controls-webfont.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;
}

button::before {
  font-family: "HeydingsControlsRegular";
  font-size: 20px;
  position: relative;
  content: attr(data-icon);
  color: #aaaaaa;
  text-shadow: 1px 1px 0px black;
}
```

Oben in der CSS-Datei verwenden wir zunächst einen {{cssxref("@font-face")}}-Block, um eine eigene Webschriftart einzubinden. Dabei handelt es sich um eine Symbolschriftart: Die Buchstaben des Alphabets stehen für gängige Symbole, die in einer Anwendung nützlich sein können.

Anschließend verwenden wir generierten Inhalt, um auf jeder Schaltfläche ein Symbol anzuzeigen:

- Mit dem Selektor {{cssxref("::before")}} zeigen wir Inhalt vor jedem {{htmlelement("button")}}-Element an.
- Mit der Eigenschaft {{cssxref("content")}} legen wir fest, dass der jeweils angezeigte Inhalt dem Wert des Attributs [`data-icon`](/de/docs/Web/HTML/How_to/Use_data_attributes) entspricht. Bei unserer Wiedergabeschaltfläche enthält `data-icon` ein großes „P“.
- Mithilfe von {{cssxref("font-family")}} wenden wir die eigene Webschriftart auf die Schaltflächen an. In dieser Schriftart steht „P“ für ein Wiedergabesymbol, das somit auf der Wiedergabeschaltfläche erscheint.

Symbolschriftarten sind aus mehreren Gründen praktisch: Sie reduzieren die Zahl der HTTP-Anfragen, weil die Symbole nicht als Bilddateien heruntergeladen werden müssen, lassen sich gut skalieren und können mit Texteigenschaften wie {{cssxref("color")}} und {{cssxref("text-shadow")}} gestaltet werden.

Sehen wir uns zum Schluss das CSS für die Zeitanzeige an:

```css
.timer {
  line-height: 38px;
  font-size: 10px;
  font-family: monospace;
  text-shadow: 1px 1px 0px black;
  color: white;
  flex: 5;
  position: relative;
}

.timer div {
  position: absolute;
  background-color: rgb(255 255 255 / 20%);
  left: 0;
  top: 0;
  width: 0;
  height: 38px;
  z-index: 2;
}

.timer span {
  position: absolute;
  z-index: 3;
  left: 19px;
}
```

- Das äußere `.timer`-Element erhält `flex: 5` und nimmt dadurch den größten Teil der Breite der Steuerleiste ein. Außerdem erhält es {{cssxref("position", "position: relative")}}, damit wir Elemente innerhalb davon bequem relativ zu seinen Grenzen statt zu denen des {{htmlelement("body")}}-Elements positionieren können.
- Das innere `<div>`-Element ist absolut positioniert und liegt direkt über dem äußeren `<div>`-Element. Seine anfängliche Breite beträgt 0, sodass es nicht sichtbar ist. Während der Wiedergabe wird seine Breite per JavaScript vergrößert.
- Das `<span>`-Element ist ebenfalls absolut positioniert, und zwar nahe der linken Seite der Zeitleiste.
- Dem inneren `<div>`- und dem `<span>`-Element geben wir außerdem passende {{cssxref("z-index")}}-Werte. So erscheint die Zeitanzeige ganz oben und das innere `<div>`-Element darunter. Damit bleiben alle Informationen sichtbar, ohne dass ein Element ein anderes verdeckt.

### JavaScript implementieren

Die HTML- und CSS-Oberfläche ist bereits weitgehend fertig. Jetzt müssen wir die Schaltflächen mit Funktionen verknüpfen, damit die Steuerung funktioniert.

1. Fügen Sie am Anfang der Datei `custom-player.js` folgenden Code ein:

   ```js
   const media = document.querySelector("video");
   const controls = document.querySelector(".controls");

   const play = document.querySelector(".play");
   const stop = document.querySelector(".stop");
   const rwd = document.querySelector(".rwd");
   const fwd = document.querySelector(".fwd");

   const timerWrapper = document.querySelector(".timer");
   const timer = document.querySelector(".timer span");
   const timerBar = document.querySelector(".timer div");
   ```

   Hier erstellen wir Konstanten, die Referenzen auf alle Objekte enthalten, die wir verändern möchten. Es gibt drei Gruppen:
   - Das `<video>`-Element und die Steuerleiste.
   - Die Schaltflächen für Wiedergabe/Pause, Stopp, Zurückspulen und Vorspulen.
   - Das umschließende `<div>`-Element der Zeitanzeige, das `<span>`-Element für die digitale Zeitangabe und das innere `<div>`-Element, das mit fortschreitender Wiedergabe breiter wird.

2. Fügen Sie als Nächstes am Ende Ihres Codes Folgendes ein:

   ```js
   media.removeAttribute("controls");
   controls.style.visibility = "visible";
   ```

   Diese beiden Zeilen entfernen die standardmäßigen Browsersteuerelemente vom Video und machen die eigenen Steuerelemente sichtbar.

#### Video wiedergeben und pausieren

Implementieren wir die vermutlich wichtigste Steuerung: die Schaltfläche für Wiedergabe und Pause.

1. Fügen Sie zunächst am Ende Ihres Codes Folgendes hinzu, damit die Funktion `playPauseMedia()` beim Klicken auf die Wiedergabeschaltfläche aufgerufen wird:

   ```js
   play.addEventListener("click", playPauseMedia);
   ```

2. Definieren Sie nun `playPauseMedia()`, indem Sie ebenfalls am Ende Ihres Codes Folgendes hinzufügen:

   ```js
   function playPauseMedia() {
     if (media.paused) {
       play.setAttribute("data-icon", "u");
       media.play();
     } else {
       play.setAttribute("data-icon", "P");
       media.pause();
     }
   }
   ```

   Hier prüfen wir mit einer [`if`](/de/docs/Web/JavaScript/Reference/Statements/if...else)-Anweisung, ob das Video pausiert ist. Die Eigenschaft [`HTMLMediaElement.paused`](/de/docs/Web/API/HTMLMediaElement/paused) gibt `true` zurück, wenn das Medium nicht wiedergegeben wird — auch unmittelbar nach dem ersten Laden, wenn die Wiedergabeposition bei 0 liegt. Ist das Video pausiert, setzen wir den Wert des Attributs `data-icon` auf der Wiedergabeschaltfläche auf „u“, das Symbol für Pause, und rufen die Methode [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play) auf, um die Wiedergabe zu starten.

   Beim nächsten Klick wird die Schaltfläche zurückgeschaltet: Das Wiedergabesymbol erscheint wieder und das Video wird mit [`HTMLMediaElement.pause()`](/de/docs/Web/API/HTMLMediaElement/pause) pausiert.

#### Video stoppen

1. Als Nächstes ergänzen wir die Funktion zum Stoppen des Videos. Fügen Sie unter der zuvor hinzugefügten Zeile die folgenden [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)-Zeilen ein:

   ```js
   stop.addEventListener("click", stopMedia);
   media.addEventListener("ended", stopMedia);
   ```

   Das Ereignis [`click`](/de/docs/Web/API/Element/click_event) ist naheliegend: Wenn auf die Stoppschaltfläche geklickt wird, soll `stopMedia()` das Video stoppen. Das Video soll aber auch nach dem Ende der Wiedergabe gestoppt werden. Dies wird durch das Ereignis [`ended`](/de/docs/Web/API/HTMLMediaElement/ended_event) signalisiert. Deshalb richten wir auch dafür einen Listener ein, der die Funktion aufruft.

2. Definieren Sie nun `stopMedia()`, indem Sie die folgende Funktion unter `playPauseMedia()` einfügen:

   ```js
   function stopMedia() {
     media.pause();
     media.currentTime = 0;
     play.setAttribute("data-icon", "P");
   }
   ```

   Die HTMLMediaElement-API hat keine Methode `stop()`. Stattdessen wird das Video mit `pause()` pausiert und seine Eigenschaft [`currentTime`](/de/docs/Web/API/HTMLMediaElement/currentTime) auf 0 gesetzt. Wenn `currentTime` ein Wert in Sekunden zugewiesen wird, springt das Medium sofort an diese Position.

   Danach muss nur noch das Wiedergabesymbol angezeigt werden. Unabhängig davon, ob das Video beim Drücken der Stoppschaltfläche pausiert war oder wiedergegeben wurde, soll es anschließend zur Wiedergabe bereit sein.

#### Vor- und Zurückspulen

Vor- und Zurückspulen lässt sich auf verschiedene Arten implementieren. Hier zeigen wir einen vergleichsweise komplexen Ansatz, der auch dann funktioniert, wenn die verschiedenen Schaltflächen in einer unerwarteten Reihenfolge gedrückt werden.

1. Fügen Sie zunächst die folgenden beiden [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)-Zeilen unter den bisherigen ein:

   ```js
   rwd.addEventListener("click", mediaBackward);
   fwd.addEventListener("click", mediaForward);
   ```

2. Definieren Sie nun die Ereignisbehandlungsfunktionen `mediaBackward()` und `mediaForward()`, indem Sie den folgenden Code unter Ihren bisherigen Funktionen einfügen:

   ```js
   let intervalFwd;
   let intervalRwd;

   function mediaBackward() {
     clearInterval(intervalFwd);
     fwd.classList.remove("active");

     if (rwd.classList.contains("active")) {
       rwd.classList.remove("active");
       clearInterval(intervalRwd);
       media.play();
     } else {
       rwd.classList.add("active");
       media.pause();
       intervalRwd = setInterval(windBackward, 200);
     }
   }

   function mediaForward() {
     clearInterval(intervalRwd);
     rwd.classList.remove("active");

     if (fwd.classList.contains("active")) {
       fwd.classList.remove("active");
       clearInterval(intervalFwd);
       media.play();
     } else {
       fwd.classList.add("active");
       media.pause();
       intervalFwd = setInterval(windForward, 200);
     }
   }
   ```

   Zunächst initialisieren wir zwei Variablen: `intervalFwd` und `intervalRwd`. Wofür sie gebraucht werden, sehen Sie gleich.

   Gehen wir `mediaBackward()` Schritt für Schritt durch. `mediaForward()` funktioniert genauso, nur in umgekehrter Richtung:
   1. Wir entfernen alle Klassen und Intervalle, die für das Vorspulen gesetzt wurden. Wenn nach der Schaltfläche `fwd` die Schaltfläche `rwd` gedrückt wird, soll das Vorspulen beendet und durch Zurückspulen ersetzt werden. Würden beide Vorgänge gleichzeitig laufen, würde der Player nicht mehr richtig funktionieren.
   2. Mit einer `if`-Anweisung prüfen wir, ob auf der Schaltfläche `rwd` die Klasse `active` gesetzt ist. Das zeigt an, dass die Schaltfläche bereits gedrückt wurde. Die Eigenschaft [`classList`](/de/docs/Web/API/Element/classList) ist für jedes Element verfügbar. Sie enthält eine Liste aller für das Element gesetzten Klassen sowie Methoden, um Klassen hinzuzufügen oder zu entfernen. Mit `classList.contains()` prüfen wir, ob die Liste die Klasse `active` enthält. Das Ergebnis ist der boolesche Wert `true` oder `false`.
   3. Ist `active` auf der Schaltfläche `rwd` gesetzt, entfernen wir die Klasse mit `classList.remove()`, beenden das beim ersten Drücken der Schaltfläche gestartete Intervall (dazu gleich mehr) und rufen [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play) auf, um das Zurückspulen abzubrechen und die normale Wiedergabe zu starten.
   4. Ist die Klasse noch nicht gesetzt, fügen wir sie mit `classList.add()` zur Schaltfläche `rwd` hinzu, pausieren das Video mit [`HTMLMediaElement.pause()`](/de/docs/Web/API/HTMLMediaElement/pause) und weisen der Variablen `intervalRwd` das Ergebnis eines Aufrufs von [`setInterval()`](/de/docs/Web/API/Window/setInterval) zu. `setInterval()` richtet ein aktives Intervall ein: Die als erster Parameter übergebene Funktion wird alle x Millisekunden ausgeführt, wobei x der Wert des zweiten Parameters ist. Hier rufen wir `windBackward()` alle 200 Millisekunden auf, um das Video fortlaufend zurückzuspulen. Um ein mit [`setInterval()`](/de/docs/Web/API/Window/setInterval) eingerichtetes Intervall zu beenden, rufen Sie [`clearInterval()`](/de/docs/Web/API/Window/clearInterval) mit der Kennung des Intervalls auf. In diesem Fall ist sie in `intervalRwd` gespeichert (siehe den früheren `clearInterval()`-Aufruf in der Funktion).

3. Schließlich müssen wir die in den `setInterval()`-Aufrufen verwendeten Funktionen `windBackward()` und `windForward()` definieren. Fügen Sie Folgendes unter den beiden bisherigen Funktionen ein:

   ```js
   function windBackward() {
     if (media.currentTime <= 3) {
       rwd.classList.remove("active");
       clearInterval(intervalRwd);
       stopMedia();
     } else {
       media.currentTime -= 3;
     }
   }

   function windForward() {
     if (media.currentTime >= media.duration - 3) {
       fwd.classList.remove("active");
       clearInterval(intervalFwd);
       stopMedia();
     } else {
       media.currentTime += 3;
     }
   }
   ```

   Auch hier gehen wir nur die erste Funktion durch, da beide fast identisch arbeiten — lediglich in entgegengesetzte Richtungen. `windBackward()` führt die folgenden Schritte aus. Denken Sie daran, dass die Funktion bei aktivem Intervall alle 200 Millisekunden aufgerufen wird.
   1. Zunächst prüft eine `if`-Anweisung, ob die aktuelle Wiedergabeposition weniger als drei Sekunden vom Anfang entfernt ist. Ein Zurückspulen um weitere drei Sekunden würde dann über den Anfang des Videos hinausgehen und zu unerwartetem Verhalten führen. Deshalb stoppen wir in diesem Fall das Video mit `stopMedia()`, entfernen die Klasse `active` von der Zurückspulschaltfläche und beenden das Intervall `intervalRwd`. Ohne diesen letzten Schritt würde der Zurückspulvorgang weiterlaufen.
   2. Ist die Wiedergabeposition mindestens drei Sekunden vom Anfang entfernt, ziehen wir mit `media.currentTime -= 3` drei Sekunden von ihr ab. Das Video wird dadurch alle 200 Millisekunden um drei Sekunden zurückgespult.

#### Anzeige der verstrichenen Zeit aktualisieren

Als Letztes implementieren wir die Anzeige der verstrichenen Zeit. Dazu aktualisieren wir die Zeitanzeigen jedes Mal, wenn auf dem `<video>`-Element das Ereignis [`timeupdate`](/de/docs/Web/API/HTMLMediaElement/timeupdate_event) ausgelöst wird. Wie häufig das geschieht, hängt unter anderem vom Browser und der CPU-Leistung ab ([siehe diesen Stack-Overflow-Beitrag](https://stackoverflow.com/questions/9678177/how-often-does-the-timeupdate-event-fire-for-an-html5-video)).

1. Fügen Sie die folgende `addEventListener()`-Zeile direkt unter den anderen ein:

   ```js
   media.addEventListener("timeupdate", setTime);
   ```

2. Definieren Sie nun die Funktion `setTime()`. Fügen Sie dazu am Ende Ihrer Datei Folgendes ein:

   ```js
   function setTime() {
     const minutes = Math.floor(media.currentTime / 60);
     const seconds = Math.floor(media.currentTime - minutes * 60);

     const minuteValue = minutes.toString().padStart(2, "0");
     const secondValue = seconds.toString().padStart(2, "0");

     const mediaTime = `${minuteValue}:${secondValue}`;
     timer.textContent = mediaTime;

     const barLength =
       timerWrapper.clientWidth * (media.currentTime / media.duration);
     timerBar.style.width = `${barLength}px`;
   }
   ```

Die Funktion ist recht lang. Gehen wir sie Schritt für Schritt durch:

1. Zunächst ermitteln wir aus dem Wert von [`HTMLMediaElement.currentTime`](/de/docs/Web/API/HTMLMediaElement/currentTime) die Anzahl der Minuten und Sekunden.
2. Dann initialisieren wir zwei weitere Variablen: `minuteValue` und `secondValue`. Mit {{jsxref("String/padStart", "padStart()")}} sorgen wir dafür, dass jeder Wert zwei Zeichen lang ist, auch wenn sein Zahlenwert nur einstellig ist.
3. Der anzuzeigende Zeitwert setzt sich aus `minuteValue`, einem Doppelpunkt und `secondValue` zusammen.
4. Wir setzen den Wert von [`Node.textContent`](/de/docs/Web/API/Node/textContent) für die Zeitanzeige auf diesen Zeitwert, damit er in der Benutzeroberfläche erscheint.
5. Die benötigte Breite des inneren `<div>`-Elements berechnen wir anhand der Breite des äußeren `<div>`-Elements — die Eigenschaft [`clientWidth`](/de/docs/Web/API/Element/clientWidth) eines Elements enthält dessen Breite. Diese multiplizieren wir mit dem Verhältnis der aktuellen Wiedergabeposition [`HTMLMediaElement.currentTime`](/de/docs/Web/API/HTMLMediaElement/currentTime) zur Gesamtdauer [`HTMLMediaElement.duration`](/de/docs/Web/API/HTMLMediaElement/duration) des Mediums.
6. Die Breite des inneren `<div>`-Elements setzen wir auf die berechnete Balkenlänge plus „px“, also auf die entsprechende Anzahl von Pixeln.

#### Wiedergabe und Pause korrigieren

Ein Problem bleibt: Wenn während des Vor- oder Zurückspulens die Schaltfläche für Wiedergabe/Pause oder Stopp gedrückt wird, funktioniert sie nicht. Wie können wir dafür sorgen, dass diese Schaltflächen die Funktion von `rwd` oder `fwd` beenden und das Video wie erwartet wiedergeben beziehungsweise stoppen? Das lässt sich leicht beheben.

1. Fügen Sie zunächst die folgenden Zeilen an einer beliebigen Stelle innerhalb der Funktion `stopMedia()` ein:

   ```js
   rwd.classList.remove("active");
   fwd.classList.remove("active");
   clearInterval(intervalRwd);
   clearInterval(intervalFwd);
   ```

2. Fügen Sie dieselben Zeilen außerdem ganz am Anfang der Funktion `playPauseMedia()` ein, unmittelbar vor der `if`-Anweisung.

3. Anschließend können Sie die entsprechenden Zeilen aus `windBackward()` und `windForward()` entfernen, da diese Funktionalität nun stattdessen in `stopMedia()` implementiert ist.

> [!NOTE]
> Sie könnten den Code weiter verbessern, indem Sie eine eigene Funktion für diese Zeilen erstellen und sie an den benötigten Stellen aufrufen, statt die Zeilen mehrfach zu wiederholen. Das überlassen wir Ihnen.

## Zusammenfassung

Damit haben Sie die Grundlagen kennengelernt. Die [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-API bietet zahlreiche Funktionen zum Erstellen einfacher Video- und Audioplayer — und das ist nur die Spitze des Eisbergs. Im Abschnitt „Siehe auch“ finden Sie Links zu komplexeren und weiterführenden Funktionen.

Hier sind einige Vorschläge, wie Sie unser Beispiel erweitern können:

1. Die Zeitanzeige funktioniert derzeit nicht richtig, wenn das Video eine Stunde oder länger dauert: Sie zeigt nur Minuten und Sekunden an, keine Stunden. Können Sie das Beispiel so ändern, dass auch Stunden angezeigt werden?
2. Da `<audio>`-Elementen dieselben Funktionen der [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-API zur Verfügung stehen, können Sie den Player leicht auch für ein `<audio>`-Element nutzbar machen. Probieren Sie es aus.
3. Können Sie das innere `<div>`-Element der Zeitanzeige in eine interaktive Suchleiste umwandeln, sodass ein Klick auf eine Stelle des Balkens zu der entsprechenden Position im Video springt? Ein Hinweis: Mit der Methode [`getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect) können Sie die Koordinaten der linken, rechten, oberen und unteren Kante eines Elements ermitteln. Die Koordinaten eines Mausklicks finden Sie im Ereignisobjekt des Klickereignisses, das Sie auf dem [`Document`](/de/docs/Web/API/Document)-Objekt abfangen können. Zum Beispiel:

   ```js
   document.onclick = function (e) {
     console.log(e.x, e.y);
   };
   ```

## Siehe auch

- [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)
- [HTML-Video und -Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio) — ein einfacher Leitfaden zu `<video>` und `<audio>` in HTML.
- [Bereitstellung von Audio und Video](/de/docs/Web/Media/Guides/Audio_and_video_delivery) — ein ausführlicher Leitfaden zur Bereitstellung von Medien im Browser mit vielen Tipps, Tricks und Links zu weiterführenden Tutorials.
- [Bearbeitung von Audio und Video](/de/docs/Web/Media/Guides/Audio_and_video_manipulation) — ein ausführlicher Leitfaden zur Bearbeitung von Audio und Video, beispielsweise mit der [Canvas API](/de/docs/Web/API/Canvas_API), der [Web Audio API](/de/docs/Web/API/Web_Audio_API) und weiteren Werkzeugen.
- Referenzseiten zu {{htmlelement("video")}} und {{htmlelement("audio")}}.
- [Leitfaden zu Medientypen und -formaten im Web](/de/docs/Web/Media/Guides/Formats)

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_APIs/Introduction", "Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics", "Learn_web_development/Extensions/Client-side_APIs")}}
