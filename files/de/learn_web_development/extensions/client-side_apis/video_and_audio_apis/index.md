---
title: Video- und Audio-APIs
short-title: Video und Audio
slug: Learn_web_development/Extensions/Client-side_APIs/Video_and_audio_APIs
l10n:
  sourceCommit: 2e427c5c185433c5a6612c63bf877753a5fedc99
---

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_APIs/Introduction", "Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics", "Learn_web_development/Extensions/Client-side_APIs")}}

HTML bietet Elemente zum Einbetten von reichhaltigen Medien in Dokumente — {{htmlelement("video")}} und {{htmlelement("audio")}}, die wiederum eigene APIs zum Steuern der Wiedergabe, zum Suchen etc. bieten. Dieser Artikel zeigt Ihnen, wie Sie gängige Aufgaben wie das Erstellen benutzerdefinierter Wiedergabesteuerungen ausführen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>, insbesondere <a href="/de/docs/Learn_web_development/Core/Scripting/Object_basics">JavaScript-Objekt-Grundlagen</a> und grundlegende API-Themen wie <a href="/de/docs/Learn_web_development/Core/Scripting/DOM_scripting">DOM-Scripting</a> und <a href="/de/docs/Learn_web_development/Core/Scripting/Network_requests">Netzwerkanfragen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        <ul>
          <li>Was Codecs sind und die verschiedenen Video- und Audioformate.</li>
          <li>Verstehen der Hauptfunktionen von Audio und Video — abspielen, pausieren, stoppen, rückwärts und vorwärts suchen, Dauer und aktuelle Zeit.</li>
          <li>Verwenden der <code>HTMLMediaElement</code>-API zum Erstellen eines einfachen benutzerdefinierten Mediaplayers für bessere Zugänglichkeit oder mehr Konsistenz zwischen verschiedenen Browsern.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## HTML-Video und -Audio

Die {{htmlelement("video")}}- und {{htmlelement("audio")}}-Elemente ermöglichen es uns, Video und Audio in Webseiten einzubetten. Wie wir in [HTML-Video und -Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio) gezeigt haben, sieht eine typische Implementierung so aus:

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

Dies erzeugt einen Videoplayer im Browser wie folgt:

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

Sie können im oben verlinkten Artikel nachlesen, was alle HTML-Features bewirken; für unsere Zwecke hier ist das interessanteste Attribut [`controls`](/de/docs/Web/HTML/Reference/Elements/video#controls), das das Standard-Set von Wiedergabesteuerungen aktiviert. Wenn Sie dies nicht angeben, erhalten Sie keine Wiedergabesteuerungen:

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

Dies ist für die Videowiedergabe nicht sofort nützlich, hat jedoch Vorteile. Ein großes Problem mit den nativen Browser-Steuerungen besteht darin, dass sie in jedem Browser unterschiedlich sind — nicht sehr gut für die plattformübergreifende Unterstützung! Ein weiteres großes Problem ist, dass die nativen Steuerungen in den meisten Browsern nicht sehr tastaturfreundlich sind.

Sie können beide diese Probleme lösen, indem Sie die nativen Steuerungen ausblenden (indem Sie das `controls`-Attribut entfernen) und Ihre eigenen mit HTML, CSS und JavaScript programmieren. Im nächsten Abschnitt werden wir uns die grundlegenden Werkzeuge ansehen, die uns dafür zur Verfügung stehen.

## Die HTMLMediaElement-API

Teil der HTML-Spezifikation, die [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) API stellt Funktionen bereit, die es ermöglichen, Video- und Audioplayer programmatisch zu steuern — zum Beispiel [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play), [`HTMLMediaElement.pause()`](/de/docs/Web/API/HTMLMediaElement/pause) usw. Diese Schnittstelle ist sowohl für {{htmlelement("audio")}}- als auch für {{htmlelement("video")}}-Elemente verfügbar, da die Funktionen, die Sie implementieren möchten, fast identisch sind. Lassen Sie uns ein Beispiel durchgehen und dabei nach und nach Funktionen hinzufügen.

Unser fertiges Beispiel wird so aussehen (und funktionieren):

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
      <span aria-label="timer">00:00</span>
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
  src: url("https://mdn.github.io/learning-area/javascript/apis/video-audio/finished/fonts/heydings_controls-webfont.eot");
  src:
    url("https://mdn.github.io/learning-area/javascript/apis/video-audio/finished/fonts/heydings_controls-webfont.eot?#iefix")
      format("embedded-opentype"),
    url("https://mdn.github.io/learning-area/javascript/apis/video-audio/finished/fonts/heydings_controls-webfont.woff")
      format("woff"),
    url("https://mdn.github.io/learning-area/javascript/apis/video-audio/finished/fonts/heydings_controls-webfont.ttf")
      format("truetype");
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
  font-family: HeydingsControlsRegular;
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

Um mit diesem Beispiel zu beginnen, befolgen Sie diese Schritte:

1. Erstellen Sie ein neues Verzeichnis auf Ihrer Festplatte namens `custom-video-player`.
2. Erstellen Sie darin eine neue Datei namens `index.html` und füllen Sie sie mit folgendem Inhalt:

   ```html
   <!doctype html>
   <html lang="en-gb">
     <head>
       <meta charset="utf-8" />
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
             <span aria-label="timer">00:00</span>
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

3. Erstellen Sie eine weitere neue Datei darin namens `style.css` und füllen Sie sie mit folgendem Inhalt:

   ```css
   @font-face {
     font-family: "HeydingsControlsRegular";
     src: url("https://mdn.github.io/learning-area/javascript/apis/video-audio/finished/fonts/heydings_controls-webfont.eot");
     src:
       url("https://mdn.github.io/learning-area/javascript/apis/video-audio/finished/fonts/heydings_controls-webfont.eot?#iefix")
         format("embedded-opentype"),
       url("https://mdn.github.io/learning-area/javascript/apis/video-audio/finished/fonts/heydings_controls-webfont.woff")
         format("woff"),
       url("https://mdn.github.io/learning-area/javascript/apis/video-audio/finished/fonts/heydings_controls-webfont.ttf")
         format("truetype");
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
     font-family: HeydingsControlsRegular;
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

4. Erstellen Sie eine weitere neue Datei im Verzeichnis namens `custom-player.js`. Lassen Sie es zunächst leer.

Zu diesem Zeitpunkt sollten Sie, wenn Sie das HTML laden, einen völlig normalen HTML-Videoplayer sehen, mit den nativen Steuerungen gerendert.

#### Erforschung des HTML

Öffnen Sie die HTML-Indexdatei. Sie werden eine Reihe von Funktionen sehen; das HTML wird von dem Videoplayer und seinen Steuerungen dominiert:

- Der gesamte Player ist in einem {{htmlelement("div")}}-Element verpackt, sodass er bei Bedarf als eine Einheit gestylt werden kann.
- Das {{htmlelement("video")}}-Element enthält zwei {{htmlelement("source")}}-Elemente, sodass je nach dem die Webseite anzeigenden Browser verschiedene Formate geladen werden können.
- Die Steuerungen im HTML sind wahrscheinlich am interessantesten:
  - Wir haben vier {{htmlelement("button")}}s — Wiedergabe/Pause, Stopp, Rücklauf und Schnellvorlauf.
  - Jedes `<button>` hat einen `class`-Namen, ein `data-icon`-Attribut, das definiert, welches Symbol auf jedem Button angezeigt werden soll (wir werden weiter unten zeigen, wie das funktioniert), und ein `aria-label`-Attribut, um eine verständliche Beschreibung jedes Buttons bereitzustellen, da wir keinen menschenlesbaren Beschriftungstext innerhalb der Tags bereitstellen. Der Inhalt der `aria-label`-Attribute wird von Screenreadern vorgelesen, wenn ihre Benutzer auf die Elemente fokussieren, die diese Attribute enthalten.
  - Es gibt auch ein Timer-{{htmlelement("div")}}, das die vergangene Zeit anzeigt, wenn das Video abgespielt wird. Nur zum Spaß bieten wir zwei Meldeverfahren an — ein {{htmlelement("span")}}, das die vergangene Zeit in Minuten und Sekunden beinhaltet, sowie ein zusätzliches `<div>`, das wir verwenden, um eine horizontale Anzeigebalken zu erstellen, der länger wird, je mehr Zeit vergeht.

#### Erforschung des CSS

Öffnen Sie nun die CSS-Datei und werfen Sie einen Blick hinein. Das CSS für das Beispiel ist nicht zu kompliziert, aber wir werden hier die interessantesten Teile hervorheben. Zunächst einmal beachten Sie das `.controls`-Styling:

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

- Wir beginnen mit der {{cssxref("visibility")}} der benutzerdefinierten Steuerungen, die auf `hidden` gesetzt ist. In unserem JavaScript werden wir später die Steuerungen auf `visible` setzen und das `controls`-Attribut vom `<video>`-Element entfernen. Dies geschieht, damit, wenn das JavaScript aus irgendeinem Grund nicht geladen wird, Benutzer das Video trotzdem mit den nativen Steuerungen verwenden können.
- Wir geben den Steuerungen standardmäßig eine {{cssxref("opacity")}} von `0.5`, damit sie weniger ablenkend sind, wenn Sie versuchen, das Video zu sehen. Nur wenn Sie über den Player schweben/fokussieren, erscheinen die Steuerungen in voller Deckkraft.
- Wir gestalten die Buttons innerhalb der Steuerleiste mit Flexbox ({{cssxref("display")}}: flex), um es einfacher zu machen.

Als Nächstes schauen wir uns unsere Button-Icons an:

```css
@font-face {
  font-family: "HeydingsControlsRegular";
  src: url("https://mdn.github.io/learning-area/javascript/apis/video-audio/finished/fonts/heydings_controls-webfont.eot");
  src:
    url("https://mdn.github.io/learning-area/javascript/apis/video-audio/finished/fonts/heydings_controls-webfont.eot?#iefix")
      format("embedded-opentype"),
    url("https://mdn.github.io/learning-area/javascript/apis/video-audio/finished/fonts/heydings_controls-webfont.woff")
      format("woff"),
    url("https://mdn.github.io/learning-area/javascript/apis/video-audio/finished/fonts/heydings_controls-webfont.ttf")
      format("truetype");
  font-weight: normal;
  font-style: normal;
}

button::before {
  font-family: HeydingsControlsRegular;
  font-size: 20px;
  position: relative;
  content: attr(data-icon);
  color: #aaaaaa;
  text-shadow: 1px 1px 0px black;
}
```

Zunächst einmal verwenden wir am Anfang des CSS einen {{cssxref("@font-face")}}-Block, um eine benutzerdefinierte Webschriftart zu importieren. Dies ist eine Symbolschriftart — alle Buchstaben des Alphabets entsprechen gängigen Symbolen, die Sie vielleicht in einer Anwendung verwenden möchten.

Als nächstes verwenden wir erzeugten Inhalt, um ein Symbol auf jedem Button anzuzeigen:

- Wir verwenden den {{cssxref("::before")}}-Selektor, um den Inhalt vor jedem {{htmlelement("button")}}-Element anzuzeigen.
- Wir verwenden die {{cssxref("content")}}-Eigenschaft, um den anzuzeigenden Inhalt in jedem Fall so zu setzen, dass er mit dem Inhalt des [`data-icon`](/de/docs/Web/HTML/How_to/Use_data_attributes)-Attributs übereinstimmt. Im Fall unseres Wiedergabebuttons enthält `data-icon` ein großes "P".
- Wir wenden die benutzerdefinierte Webschriftart auf unsere Buttons mit {{cssxref("font-family")}} an. In dieser Schriftart ist "P" tatsächlich ein "Play"-Symbol, so dass der Wiedergabebutton ein "Play"-Symbol darauf angezeigt hat.

Symbolschriftarten sind aus vielen Gründen cool — sie verringern die Anzahl der HTTP-Anfragen, da Sie diese Symbole nicht als Bilddateien herunterladen müssen, bieten großartige Skalierbarkeit und die Tatsache, dass Sie Text-Stileigenschaften verwenden können, um sie zu gestalten, wie {{cssxref("color")}} und {{cssxref("text-shadow")}}.

Last but not least, werfen wir einen Blick auf das CSS für den Timer:

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

- Wir legen das äußere `.timer`-Element auf `flex: 5`, damit es den größten Teil der Breite der Steuerleiste einnimmt. Wir geben ihm auch {{cssxref("position", "position: relative")}}, damit wir bequem Elemente darin gemäß seinen Grenzen positionieren können und nicht denen des {{htmlelement("body")}}-Elements.
- Das innere `<div>` wird absolut positioniert, sodass es direkt auf dem äußeren `<div>` sitzt. Es bekommt auch eine anfängliche Breite von 0, sodass man es überhaupt nicht sehen kann. Während das Video abläuft, wird die Breite durch das JavaScript erhöht, während das Video abläuft.
- Das `<span>` wird ebenfalls absolut positioniert, um nahe der linken Seite der Timerleiste zu sitzen.
- Wir geben unserem inneren `<div>` und `<span>` auch den richtigen {{cssxref("z-index")}}, damit der Timer oben angezeigt wird und das innere `<div>` darunter. Auf diese Weise stellen wir sicher, dass wir alle Informationen sehen können — es wird keine Box von einer anderen verdeckt.

### Implementierung des JavaScript

Wir haben bereits ein ziemlich vollständiges HTML- und CSS-Interface; jetzt müssen wir nur noch alle Buttons mit Funktionen versehen, um die Steuerungen zum Laufen zu bringen.

1. Fügen Sie oben in der `custom-player.js`-Datei folgenden Code ein:

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

   Hier erstellen wir Konstanten zum Halten von Referenzen auf alle Objekte, die wir manipulieren möchten. Wir haben drei Gruppen:
   - Das `<video>`-Element und die Steuerleiste.
   - Die Play/Pause-, Stopp-, Rückspul- und Schnellvorlauf-Buttons.
   - Das äußere Timer-Wrapper `<div>`, die digitale Timer-Anzeige `<span>` und das innere `<div>`, das breiter wird, während die Zeit vergeht.

2. Fügen Sie als Nächstes das Folgende an das Ende Ihres Codes ein:

   ```js
   media.removeAttribute("controls");
   controls.style.visibility = "visible";
   ```

   Diese beiden Zeilen entfernen die Standard-Browsersteuerungen vom Video und machen die benutzerdefinierten Steuerungen sichtbar.

#### Abspielen und Pausieren des Videos

Lassen Sie uns wahrscheinlich die wichtigste Steuerung implementieren — den Play/Pause-Button.

1. Fügen Sie zunächst das Folgende am Ende Ihres Codes hinzu, sodass die `playPauseMedia()`-Funktion aufgerufen wird, wenn der Play-Button geklickt wird:

   ```js
   play.addEventListener("click", playPauseMedia);
   ```

2. Jetzt `playPauseMedia()` definieren — fügen Sie das folgende, ebenfalls am Ende Ihres Codes hinzu:

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

   Hier verwenden wir eine [`if`](/de/docs/Web/JavaScript/Reference/Statements/if...else)-Anweisung, um zu überprüfen, ob das Video pausiert ist. Die [`HTMLMediaElement.paused`](/de/docs/Web/API/HTMLMediaElement/paused)-Eigenschaft gibt `true` zurück, wenn das Medium pausiert ist, das heißt, immer wenn das Video nicht abgespielt wird, einschließlich wenn es nach dem ersten Laden auf 0 Sekunden eingestellt ist. Wenn es pausiert ist, setzen wir den `data-icon`-Attributwert auf dem Play-Button auf "u", welches ein "Pause"-Symbol ist, und rufen die [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play)-Methode auf, um das Medium abzuspielen.

   Beim zweiten Klick wird der Button wieder zurückgeschaltet — das "Play"-Symbol wird wieder angezeigt und das Video wird mit [`HTMLMediaElement.pause()`](/de/docs/Web/API/HTMLMediaElement/pause) pausiert.

#### Beenden des Videos

1. Fügen Sie als Nächstes Funktionalität zum Behandeln des Stoppen des Videos hinzu. Fügen Sie die folgenden [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)-Zeilen unterhalb der vorherigen hinzu:

   ```js
   stop.addEventListener("click", stopMedia);
   media.addEventListener("ended", stopMedia);
   ```

   Das [`click`](/de/docs/Web/API/Element/click_event)-Ereignis ist offensichtlich — wir möchten das Video stoppen, indem wir unsere `stopMedia()`-Funktion ausführen, wenn der Stop-Button geklickt wird. Wir möchten jedoch auch das Video stoppen, wenn es zu Ende abgespielt ist — dies wird durch das [`ended`](/de/docs/Web/API/HTMLMediaElement/ended_event)-Ereignis signalisiert, daher richten wir auch einen Listener ein, um die Funktion auszuführen, wenn dieses Ereignis ausgelöst wird.

2. Definieren Sie als Nächstes die Funktion `stopMedia()` — fügen Sie die folgende Funktion unter `playPauseMedia()` hinzu:

   ```js
   function stopMedia() {
     media.pause();
     media.currentTime = 0;
     play.setAttribute("data-icon", "P");
   }
   ```

   Es gibt keine `stop()`-Methode in der HTMLMediaElement-API — das Äquivalent besteht darin, das Video zu `pausieren` und seine [`currentTime`](/de/docs/Web/API/HTMLMediaElement/currentTime)-Eigenschaft auf 0 zu setzen. Einstellen von `currentTime` auf einen Wert (in Sekunden) springt das Medium sofort zu dieser Position.

   Alles, was noch zu tun bleibt, ist, das angezeigte Symbol auf das "Play"-Symbol zu setzen. Unabhängig davon, ob das Video pausiert oder abgespielt war, als der Stop-Button gedrückt wurde, möchten Sie, dass es danach bereit ist, abgespielt zu werden.

#### Zurück- und Vorspulen

Es gibt viele Möglichkeiten, Rückspul- und Schnellvorlauffunktionalität zu implementieren; hier zeigen wir Ihnen einen relativ komplexen Weg, der nicht kaputtgeht, wenn die verschiedenen Knöpfe in unerwarteter Reihenfolge gedrückt werden.

1. Fügen Sie zunächst die folgenden zwei [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)-Zeilen unterhalb der vorhergehenden hinzu:

   ```js
   rwd.addEventListener("click", mediaBackward);
   fwd.addEventListener("click", mediaForward);
   ```

2. Jetzt zu den Event-Handler-Funktionen — fügen Sie folgenden Code unter Ihren vorherigen Funktionen hinzu, um `mediaBackward()` und `mediaForward()` zu definieren:

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

   Sie werden feststellen, dass wir zuerst zwei Variablen initialisieren — `intervalFwd` und `intervalRwd` — Sie werden später sehen, wofür sie da sind.

   Gehen wir durch `mediaBackward()` (die Funktionalität für `mediaForward()` ist genau gleich, jedoch umgekehrt):
   1. Wir löschen alle Klassen und Intervalle, die bei der Schnellvorlauf-Funktionalität gesetzt sind — wir tun dies, weil, wenn wir den `rwd`-Button nach dem Drücken des `fwd`-Buttons drücken, wir jede Schnellvorlauffunktionalität abbrechen und durch die Rückspulfunktionalität ersetzen möchten. Wenn wir versuchen würden, beides gleichzeitig zu tun, würde der Player kaputt gehen.
   2. Wir verwenden eine `if`-Anweisung, um zu überprüfen, ob die `active`-Klasse auf dem `rwd`-Button gesetzt ist, was darauf hinweist, dass er bereits gedrückt wurde. Die [`classList`](/de/docs/Web/API/Element/classList) ist eine ziemlich nützliche Eigenschaft, die auf jedem Element existiert — sie enthält eine Liste aller Klassen, die auf dem Element gesetzt sind, sowie Methoden zum Hinzufügen/Entfernen von Klassen usw. Wir benutzen die `classList.contains()`-Methode, um zu überprüfen, ob die Liste die `active`-Klasse enthält. Dies ergibt ein boolesches `true`/`false`-Ergebnis.
   3. Wenn `active` auf dem `rwd`-Button gesetzt ist, entfernen wir es mit `classList.remove()`, löschen wir das Intervall, das gesetzt wurde, als der Button zuerst gedrückt wurde (siehe unten für mehr Erklärung), und rufen die [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play)-Methode auf, um das Rückspulen zu beenden und das Video normal abzuspielen.
   4. Wenn es noch nicht gesetzt wurde, fügen wir die `active`-Klasse zum `rwd`-Button mit `classList.add()` hinzu, pausieren das Video mit [`HTMLMediaElement.pause()`](/de/docs/Web/API/HTMLMediaElement/pause), und setzen dann die `intervalRwd`-Variable auf den Wert eines [`setInterval()`](/de/docs/Web/API/Window/setInterval)-Aufrufs. Wenn `setInterval()` aufgerufen wird, wird ein aktives Intervall erstellt, was bedeutet, dass es die Funktion, die als erster Parameter angegeben ist, alle x Millisekunden ausführt, wobei x der Wert des zweiten Parameters ist. Hier führen wir also alle 200 Millisekunden die `windBackward()`-Funktion aus — wir verwenden diese Funktion zum kontinuierlichen Rückspulen des Videos. Um ein [`setInterval()`](/de/docs/Web/API/Window/setInterval) zu stoppen, müssen Sie [`clearInterval()`](/de/docs/Web/API/Window/clearInterval) aufrufen, indem Sie ihm den identifizierenden Namen des zu löschenden Intervalls übergeben, der in diesem Fall `intervalRwd` ist (siehe den `clearInterval()`-Aufruf weiter oben in der Funktion).

3. Schließlich müssen wir die `windBackward()`- und `windForward()`-Funktionen definieren, die in den `setInterval()`-Aufrufen aufgerufen werden. Fügen Sie das Folgende unter Ihren beiden vorherigen Funktionen hinzu:

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

   Wir werden nur die erste dieser Funktionen durchgehen, da sie fast identisch funktionieren, aber in umgekehrter Richtung. In `windBackward()` machen wir folgendes — bedenken Sie, dass diese Funktion jedes Mal einmal alle 200 Millisekunden ausgeführt wird, wenn das Intervall aktiv ist.
   1. Wir beginnen mit einer `if`-Anweisung, die überprüft, ob die aktuelle Zeit weniger als 3 Sekunden beträgt, d.h. ob ein weiteres Zurückspulen um drei Sekunden das Video über den Anfang hinaus zurückbringen würde. Dies würde seltsames Verhalten verursachen, daher stoppen wir das Video in diesem Fall durch einen Aufruf von `stopMedia()`, entfernen die `active`-Klasse vom Rückspulbutton, und löschen das `intervalRwd`-Intervall, um die Rückspulfunktion zu stoppen. Wenn wir diesen letzten Schritt nicht tun, würde das Video einfach für immer zurückspulen.
   2. Wenn die aktuelle Zeit nicht innerhalb von 3 Sekunden nach Beginn des Videos liegt, ziehen wir drei Sekunden von der aktuellen Zeit ab, indem wir `media.currentTime -= 3` ausführen. In der Tat spulen wir das Video 3 Sekunden zurück, einmal alle 200 Millisekunden.

#### Aktualisierung der abgelaufenen Zeit

Das letzte Stück unseres Mediaplayers, das implementiert werden muss, sind die Anzeigen der verstrichenen Zeit. Um dies zu tun, führen wir eine Funktion aus, um die Zeit-Anzeigen jedes Mal zu aktualisieren, wenn das [`timeupdate`](/de/docs/Web/API/HTMLMediaElement/timeupdate_event) Ereignis auf dem `<video>`-Element ausgelöst wird. Die Häufigkeit, mit der dieses Ereignis ausgelöst wird, hängt von Ihrem Browser, der CPU-Leistung usw. ab. ([siehe diesen Stack Overflow-Post](https://stackoverflow.com/questions/9678177/how-often-does-the-timeupdate-event-fire-for-an-html5-video)).

1. Fügen Sie die folgende `addEventListener()`-Zeile direkt unterhalb der anderen hinzu:

   ```js
   media.addEventListener("timeupdate", setTime);
   ```

2. Jetzt definieren wir die `setTime()`-Funktion. Fügen Sie das folgende am Ende Ihrer Datei hinzu:

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

Dies ist eine ziemlich lange Funktion, also lassen Sie uns sie Schritt für Schritt durchgehen:

1. Zuerst ermitteln wir die Anzahl der Minuten und Sekunden in der [`HTMLMediaElement.currentTime`](/de/docs/Web/API/HTMLMediaElement/currentTime) Wert.
2. Dann initialisieren wir zwei weitere Variablen — `minuteValue` und `secondValue`. Wir verwenden {{jsxref("String/padStart", "padStart()")}}, um jeden Wert auf 2 Zeichen zu setzen, selbst wenn der numerische Wert nur ein einstelliger Wert ist.
3. Der tatsächliche anzuzeigende Zeitwert wird als `minuteValue` plus ein Doppelpunktzeichen plus `secondValue` gesetzt.
4. Der [`Node.textContent`](/de/docs/Web/API/Node/textContent) Wert des Timers wird auf den Zeitwert gesetzt, sodass er in der Benutzeroberfläche angezeigt wird.
5. Die Länge, die wir dem inneren `<div>` geben sollten, wird ermittelt, indem wir zuerst die Breite des äußeren `<div>` ermitteln (die [`clientWidth`](/de/docs/Web/API/Element/clientWidth)-Eigenschaft eines Elements enthält immer seine Länge), und dann mit der [`HTMLMediaElement.currentTime`](/de/docs/Web/API/HTMLMediaElement/currentTime) dividiert durch die totale [`HTMLMediaElement.duration`](/de/docs/Web/API/HTMLMediaElement/duration) des Mediums multiplizieren.
6. Wir setzen die Breite des inneren `<div>` gleich der berechneten Balkenlänge, plus "px", sodass es auf diese Anzahl von Pixeln gesetzt wird.

#### Korrektur von Abspielen und Pausieren

Es gibt ein letztes Problem, das behoben werden muss. Wenn die Abspielen/Pause- oder Stopptasten gedrückt werden, während die Rück- oder Vorwärtssuchfunktion aktiv ist, funktionieren sie einfach nicht. Wie können wir es so beheben, dass sie die `rwd`/`fwd`-Button-Funktionalität abbrechen und das Video wie erwartet abspielen/stoppen? Dies lässt sich relativ leicht beheben.

1. Fügen Sie zunächst die folgenden Zeilen in die `stopMedia()`-Funktion ein — irgendwo wird es funktionieren:

   ```js
   rwd.classList.remove("active");
   fwd.classList.remove("active");
   clearInterval(intervalRwd);
   clearInterval(intervalFwd);
   ```

2. Fügen Sie dieselben Zeilen erneut, ganz am Anfang der `playPauseMedia()` Funktion hinzu (direkt vor dem Beginn der `if`-Anweisung).

3. An diesem Punkt können Sie die entsprechenden Zeilen aus den `windBackward()` und `windForward()`-Funktionen löschen, da diese Funktionalität stattdessen in der `stopMedia()`-Funktion implementiert wurde.

> [!NOTE]
> Sie könnten die Effizienz des Codes weiter verbessern, indem Sie eine separate Funktion erstellen, die diese Zeilen ausführt, und diese dann überall aufruft, wo sie benötigt wird, anstatt die Zeilen mehrfach im Code zu wiederholen. Aber das überlassen wir Ihnen.

## Zusammenfassung

Ich denke, wir haben Ihnen genug in diesem Artikel beigebracht. Die [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) API bietet eine Fülle von Funktionalitäten zum Erstellen einfacher Video- und Audioplayer, und das ist nur die Spitze des Eisbergs. Siehe den Abschnitt "Siehe auch" unten für Links zu komplexeren und interessanteren Funktionen.

Hier sind einige Vorschläge, wie Sie das bestehende Beispiel, das wir aufgebaut haben, verbessern könnten:

1. Die Zeitanzeige bricht derzeit zusammen, wenn das Video eine Stunde oder länger dauert (nun, es zeigt keine Stunden an; nur Minuten und Sekunden). Können Sie herausfinden, wie Sie das Beispiel ändern, um es zur Anzeige von Stunden zu bringen?
2. Da `<audio>`-Elemente die gleiche [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-Funktionalität zur Verfügung haben, könnten Sie diesen Player leicht dazu bringen, auch für ein `<audio>`-Element zu funktionieren. Versuchen Sie dies.
3. Können Sie einen Weg finden, um das innere Timer-`<div>`-Element in eine echte Suchleiste/Scrollleiste zu verwandeln — d.h. wenn Sie irgendwo auf die Leiste klicken, wird an dieser relativen Position in der Video-Wiedergabe gesprungen? Ein Hinweis: Sie können die X und Y-Werte der linken/rechten und oberen/unten Seiten eines Elements durch die [`getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect) Methode ermitteln, und Sie können die Koordinaten eines Mausklicks über das Event-Objekt des Click-Events finden, das auf dem [`Document`](/de/docs/Web/API/Document) Objekt ausgelöst wird. Zum Beispiel:

   ```js
   document.onclick = function (e) {
     console.log(e.x, e.y);
   };
   ```

## Siehe auch

- [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)
- [HTML-Video und -Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio) — einfacher Leitfaden zu `<video>` und `<audio>` in HTML.
- [Audio- und Videobereitstellung](/de/docs/Web/Media/Guides/Audio_and_video_delivery) — ausführlicher Leitfaden zur Bereitstellung von Medien im Browser, mit vielen Tipps, Tricks und Links zu weiteren fortgeschrittenen Tutorials.
- [Manipulation von Audio und Video](/de/docs/Web/Media/Guides/Audio_and_video_manipulation) — ausführlicher Leitfaden zur Manipulation von Audio und Video, z.B. mit der [Canvas API](/de/docs/Web/API/Canvas_API), der [Web Audio API](/de/docs/Web/API/Web_Audio_API) und mehr.
- {{htmlelement("video")}} und {{htmlelement("audio")}} Referenzseiten.
- [Leitfaden zu Medientypen und Formaten im Web](/de/docs/Web/Media/Guides/Formats)

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_APIs/Introduction", "Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics", "Learn_web_development/Extensions/Client-side_APIs")}}
