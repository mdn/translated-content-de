---
title: Video- und Audio-APIs
short-title: Video und Audio
slug: Learn_web_development/Extensions/Client-side_APIs/Video_and_audio_APIs
l10n:
  sourceCommit: 9381ac06accc1f6340cda5c90cec69cc66f67136
---

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_APIs/Introduction", "Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics", "Learn_web_development/Extensions/Client-side_APIs")}}

HTML bietet Elemente zum Einbetten von Rich Media in Dokumente — {{htmlelement("video")}} und {{htmlelement("audio")}} — die wiederum eigene APIs für die Steuerung der Wiedergabe, das Suchen usw. mitbringen. Dieser Artikel zeigt Ihnen, wie Sie gängige Aufgaben wie das Erstellen benutzerdefinierter Wiedergabesteuerungen ausführen können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>, insbesondere <a href="/de/docs/Learn_web_development/Core/Scripting/Object_basics">JavaScript-Objektgrundlagen</a> und Kern-API-Abdeckung wie <a href="/de/docs/Learn_web_development/Core/Scripting/DOM_scripting">DOM-Skripting</a> und <a href="/de/docs/Learn_web_development/Core/Scripting/Network_requests">Netzwerkanfragen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Zielsetzung:</th>
      <td>
        <ul>
          <li>Was Codecs sind und die verschiedenen Video- und Audioformate.</li>
          <li>Verstehen Sie die Schlüssel­funktionen, die mit Audio und Video verbunden sind — abspielen, pausieren, stoppen, vor- und zurückspulen, Dauer und aktuelle Zeit.</li>
          <li>Verwenden Sie die <code>HTMLMediaElement</code>-API, um einen einfachen benutzerdefinierten Mediaplayer zu erstellen, für bessere Zugänglichkeit oder mehr Konsistenz über Browser hinweg.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## HTML-Video und -Audio

Die {{htmlelement("video")}}- und {{htmlelement("audio")}}-Elemente ermöglichen es uns, Video und Audio in Webseiten einzubetten. Wie wir in [HTML Video und Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio) gezeigt haben, sieht eine typische Implementierung so aus:

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

Dies erzeugt einen Videoplayer innerhalb des Browsers:

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

Sie können in dem oben verlinkten Artikel nachlesen, welche HTML-Funktionen alle vorhanden sind; für unsere Zwecke hier ist das interessanteste Attribut [`controls`](/de/docs/Web/HTML/Reference/Elements/video#controls), das das Standardset von Wiedergabesteuerungen aktiviert. Wenn Sie dies nicht angeben, erhalten Sie keine Wiedergabesteuerungen:

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

Dies ist für die Videowiedergabe nicht so nützlich, hat jedoch Vorteile. Ein großes Problem mit den nativen Browser-Steuerungen ist, dass sie in jedem Browser unterschiedlich sind — nicht sehr gut für Cross-Browser-Unterstützung! Ein weiteres großes Problem ist, dass die nativen Steuerungen in den meisten Browsern nicht sehr tastaturfreundlich sind.

Sie können beide Probleme lösen, indem Sie die nativen Steuerungen ausblenden (durch Entfernen des `controls`-Attributs) und Ihre eigenen mit HTML, CSS und JavaScript programmieren. Im nächsten Abschnitt werden wir uns die grundlegenden Werkzeuge ansehen, die uns dafür zur Verfügung stehen.

## Die HTMLMediaElement-API

Ein Teil der HTML-Spezifikation ist die [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-API, die Funktionen bietet, um Video- und Audioplayer programmgesteuert zu steuern — beispielsweise [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play), [`HTMLMediaElement.pause()`](/de/docs/Web/API/HTMLMediaElement/pause) usw. Diese Schnittstelle steht sowohl {{htmlelement("audio")}}- als auch {{htmlelement("video")}}-Elementen zur Verfügung, da die Funktionen, die Sie implementieren möchten, nahezu identisch sind. Lassen Sie uns ein Beispiel durchgehen und nach und nach Funktionen hinzufügen.

Unser abgeschlossenes Beispiel wird ungefähr so aussehen (und funktionieren):

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
2. Erstellen Sie eine neue Datei darin mit dem Namen `index.html` und füllen Sie sie mit folgendem Inhalt:

   ```html
   <!DOCTYPE html>
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

3. Erstellen Sie eine weitere neue Datei darin mit dem Namen `style.css` und füllen Sie sie mit folgendem Inhalt:

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

4. Erstellen Sie eine weitere neue Datei im Verzeichnis mit dem Namen `custom-player.js`. Lassen Sie sie vorerst leer.

An diesem Punkt sollten Sie, wenn Sie das HTML laden, einen ganz normalen HTML-Videoplayer sehen, mit den nativen Steuerungen dargestellt.

#### Das HTML erkunden

Öffnen Sie die HTML-Indexdatei. Sie werden eine Reihe von Funktionen sehen; das HTML wird vom Videoplayer und seinen Steuerungen dominiert:

- Der gesamte Player ist in einem {{htmlelement("div")}}-Element umwickelt, sodass er bei Bedarf als Einheit gestylt werden kann.
- Das {{htmlelement("video")}}-Element enthält zwei {{htmlelement("source")}}-Elemente, sodass je nach Browser, der die Seite anzeigt, verschiedene Formate geladen werden können.
- Das Steuerungs-HTML ist wahrscheinlich das interessanteste:
  - Wir haben vier {{htmlelement("button")}}s — abspielen/pausieren, stoppen, zurückspulen und vorwärts.
  - Jeder `<button>` hat einen `class`-Namen, ein `data-icon`-Attribut, um festzulegen, welches Symbol auf jedem Button angezeigt werden soll (wir zeigen weiter unten, wie dies funktioniert), und ein `aria-label`-Attribut, um eine nachvollziehbare Beschreibung jedes Buttons bereitzustellen, da wir kein menschenlesbares Label in den Tags bereitstellen. Die Inhalte von `aria-label`-Attributen werden von Screenreadern vorgelesen, wenn ihre Benutzer auf die Elemente fokussieren, die sie enthalten.
  - Es gibt auch ein Timer-{{htmlelement("div")}}, das die verstrichene Zeit meldet, während das Video abgespielt wird. Nur zum Spaß bieten wir zwei Melde­mechanismen an — einen {{htmlelement("span")}}, der die verstrichene Zeit in Minuten und Sekunden enthält, und ein zusätzliches `<div>`, das wir verwenden werden, um eine horizontale Anzeigeleiste zu erstellen, die länger wird, je mehr Zeit vergeht.

#### Das CSS erkunden

Öffnen Sie nun die CSS-Datei und sehen Sie hinein. Das CSS für das Beispiel ist nicht zu komplex, aber wir heben hier die interessantesten Teile hervor. Zunächst einmal beachten Sie das `.controls`-Styling:

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

- Wir beginnen mit der {{cssxref("visibility")}} der benutzerdefinierten Steuerungen auf `hidden`. In unserem JavaScript setzen wir die Steuerungen später auf `visible` und entfernen das `controls`-Attribut vom `<video>`-Element. Dies dient dazu, dass, wenn das JavaScript aus irgendeinem Grund nicht geladen wird, die Benutzer das Video weiterhin mit den nativen Steuerungen verwenden können.
- Wir geben den Steuerungen eine {{cssxref("opacity")}} von `0.5` standardmäßig, sodass sie weniger ablenkend sind, wenn Sie versuchen, das Video anzusehen. Nur wenn Sie über den Player schweben/fokussieren, erscheinen die Steuerungen mit voller Opazität.
- Wir platzieren die Buttons in der Steuerleiste mithilfe von Flexbox ({{cssxref("display")}}: flex), um es einfacher zu machen.

Als Nächstes schauen wir uns unsere Button-Symbole an:

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

Zuerst verwenden wir am Anfang des CSS einen {{cssxref("@font-face")}}-Block, um eine benutzerdefinierte Webschriftart zu importieren. Dies ist eine Symbolschriftart — alle Buchstaben des Alphabets entsprechen gemeinsamen Symbolen, die Sie möglicherweise in einer Anwendung verwenden möchten.

Als Nächstes verwenden wir generierten Inhalt, um ein Symbol auf jedem Button anzuzeigen:

- Wir verwenden den {{cssxref("::before")}}-Selektor, um den Inhalt vor jedem {{htmlelement("button")}}-Element anzuzeigen.
- Wir verwenden die {{cssxref("content")}}-Eigenschaft, um den anzuzeigenden Inhalt in jedem Fall gleich dem Inhalt des [`data-icon`](/de/docs/Web/HTML/How_to/Use_data_attributes)-Attributes zu setzen. Im Fall unseres Play-Buttons enthält `data-icon` ein großes "P".
- Wir wenden die benutzerdefinierte Webschriftart auf unsere Buttons mit {{cssxref("font-family")}} an. In dieser Schrift entspricht "P" tatsächlich einem "Abspiel"-Symbol, daher hat der Play-Button ein "Abspiel"-Symbol darauf angezeigt.

Symbolschriften sind aus vielen Gründen cool — sie reduzieren HTTP-Anfragen, weil Sie diese Symbole nicht als Bilddateien herunterladen müssen, sie sind sehr skalierbar und Sie können Text-Eigenschaften verwenden, um sie zu gestalten — wie {{cssxref("color")}} und {{ cssxref("text-shadow")}}.

Zu guter Letzt schauen wir uns das CSS für den Timer an:

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

- Wir stellen das äußere `.timer`-Element so ein, dass `flex: 5` verwendet wird, sodass es den größten Teil der Breite der Steuerleiste einnimmt. Wir geben ihm auch {{cssxref("position", "position: relative")}}, sodass wir Elemente darin praktisch gemäß seinen Grenzen positionieren können und nicht gemäß den Grenzen des {{htmlelement("body")}}-Elements.
- Das innere `<div>` wird absolut positioniert, um direkt auf dem äußeren `<div>` zu sitzen. Es wird auch auf eine Anfangsbreite von 0 gesetzt, sodass Sie es überhaupt nicht sehen können. Während das Video abgespielt wird, wird die Breite mit JavaScript erhöht, während das Video verstreicht.
- Der `<span>` wird ebenfalls absolut positioniert, um nahe der linken Seite der Timer-Leiste zu sitzen.
- Wir geben unserem inneren `<div>` und `<span>` auch den richtigen {{cssxref("z-index")}}, sodass der Timer oben angezeigt wird und das innere `<div>` darunter. Auf diese Weise stellen wir sicher, dass wir alle Informationen sehen können — keine Box wird von einer anderen verdeckt.

### Implementierung des JavaScripts

Wir haben bereits eine ziemlich vollständige HTML- und CSS-Oberfläche; jetzt müssen wir nur noch alle Buttons verkabeln, um die Steuerungen zum Laufen zu bringen.

1. Fügen Sie oben in der Datei `custom-player.js` folgenden Code ein:

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

   Hier erstellen wir Konstanten, um Referenzen zu allen Objekten zu halten, die wir manipulieren möchten. Wir haben drei Gruppen:
   - Das `<video>`-Element und die Steuer­leiste.
   - Die Play/Pause-, Stopp-, Rückspul- und Vorlauf-Buttons.
   - Die äußere Timerhülle `<div>`, die digitale Timeranzeige `<span>` und das innere `<div>`, das breiter wird, während die Zeit verstreicht.

2. Fügen Sie als Nächstes am Ende Ihres Codes Folgendes ein:

   ```js
   media.removeAttribute("controls");
   controls.style.visibility = "visible";
   ```

   Diese beiden Zeilen entfernen die Standard-Browser-Steuerungen aus dem Video und machen die benutzerdefinierten Steuerungen sichtbar.

#### Abspielen und Pausieren des Videos

Lassen Sie uns die wahrscheinlich wichtigste Steuerung implementieren — den Play/Pause-Button.

1. Fügen Sie zuerst am Ende Ihres Codes Folgendes hinzu, damit die Funktion `playPauseMedia()` aufgerufen wird, wenn der Play-Button angeklickt wird:

   ```js
   play.addEventListener("click", playPauseMedia);
   ```

2. Nun zur Definition von `playPauseMedia()` — fügen Sie folgendes, wieder am Ende Ihres Codes, hinzu:

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

   Hier verwenden wir eine [`if`](/de/docs/Web/JavaScript/Reference/Statements/if...else)-Anweisung, um zu überprüfen, ob das Video pausiert ist. Die [`HTMLMediaElement.paused`](/de/docs/Web/API/HTMLMediaElement/paused)-Eigenschaft gibt true zurück, wenn das Medium pausiert ist, was jedes Mal der Fall ist, wenn das Video nicht abgespielt wird, einschließlich wenn es auf 0 Dauer eingestellt ist, nachdem es zuerst geladen wurde. Wenn es pausiert ist, setzen wir den Wert des `data-icon`-Attributes auf dem Play-Button auf "u", was einem "Pausiert"-Symbol entspricht, und rufen die Methode [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play) auf, um das Medium abzuspielen.

   Beim zweiten Klick wird der Button wieder umgeschaltet — das "Abspiel"-Symbol wird wieder angezeigt und das Video wird mit [`HTMLMediaElement.pause()`](/de/docs/Web/API/HTMLMediaElement/pause) pausiert.

#### Anhalten des Videos

1. Als nächstes fügen wir Funktionalität hinzu, um das Anhalten des Videos zu behandeln. Fügen Sie die folgenden [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)-Zeilen unter den vorherigen hinzu, die Sie hinzugefügt haben:

   ```js
   stop.addEventListener("click", stopMedia);
   media.addEventListener("ended", stopMedia);
   ```

   Das [`click`](/de/docs/Web/API/Element/click_event)-Ereignis ist offensichtlich — wir möchten das Video durch Ausführen unserer Funktion `stopMedia()` anhalten, wenn der Stopp-Button angeklickt wird. Wir möchten das Video jedoch auch anhalten, wenn es fertig abgespielt wird — dies wird durch das [`ended`](/de/docs/Web/API/HTMLMediaElement/ended_event)-Ereignis markiert, das ausgelöst wird, also richten wir auch einen Listener ein, um die Funktion bei diesem Ereignis auszuführen.

2. Als nächstes definieren wir `stopMedia()` — fügen Sie die folgende Funktion unter `playPauseMedia()` hinzu:

   ```js
   function stopMedia() {
     media.pause();
     media.currentTime = 0;
     play.setAttribute("data-icon", "P");
   }
   ```

   es gibt keine `stop()`-Methode im HTMLMediaElement-API — das Äquivalent ist das Video mit `pause()` anzuhalten und seine [`currentTime`](/de/docs/Web/API/HTMLMediaElement/currentTime)-Eigenschaft auf 0 zu setzen. Das Setzen von `currentTime` auf einen Wert (in Sekunden) springt sofort das Medium an diese Position.

   Alles, was danach noch zu tun ist, ist das angezeigte Symbol auf das "Abspiel"-Symbol zu setzen. Unabhängig davon, ob das Video pausiert war oder abgespielt wurde, wenn der Stopp-Button gedrückt wird, möchten Sie, dass es danach bereit ist, abgespielt zu werden.

#### Vor- und Zurückspulen

Es gibt viele Wege, wie Sie Vorwärts- und Rückwärts­spulfunktionalität implementieren können; hier zeigen wir Ihnen einen relativ komplexen Weg, der nicht kaputtgeht, wenn die verschiedenen Buttons in unerwarteter Reihenfolge gedrückt werden.

1. Fügen Sie als erstes die folgenden zwei [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)-Zeilen unter den vorherigen hinzu:

   ```js
   rwd.addEventListener("click", mediaBackward);
   fwd.addEventListener("click", mediaForward);
   ```

2. Nun zu den Ereignis-Handler-Funktionen — fügen Sie den folgenden Code unter Ihren vorherigen Funktionen hinzu, um `mediaBackward()` und `mediaForward()` zu definieren:

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

   Sie werden bemerken, dass wir zuerst zwei Variablen initialisieren — `intervalFwd` und `intervalRwd` — Sie werden später herausfinden, wofür sie sind.

   Lass uns `mediaBackward()` durchgehen (die Funktionalität für `mediaForward()` ist genau gleich, nur umgekehrt):
   1. Wir löschen alle Klassen und Intervalle, die auf der Vorwärts-Funktionalität gesetzt sind — das tun wir, weil wir, wenn wir die `rwd`-Taste nach dem Drücken der `fwd`-Taste drücken, die Vorwärts-Funktionalität abbrechen und sie durch die Rückwärts-Funktionalität ersetzen möchten. Wenn wir versuchen würden, beides gleichzeitig zu tun, würde der Player brechen.
   2. Wir verwenden eine `if`-Anweisung, um zu überprüfen, ob die `active`-Klasse auf der `rwd`-Taste gesetzt wurde, was darauf hinweist, dass sie bereits gedrückt wurde. Die [`classList`](/de/docs/Web/API/Element/classList) ist eine ziemlich praktische Eigenschaft, die auf jedem Element existiert — sie enthält eine Liste aller auf dem Element gesetzten Klassen sowie Methoden zum Hinzufügen/Entfernen von Klassen usw. Wir verwenden die `classList.contains()`-Methode, um zu überprüfen, ob die Liste die `active`-Klasse enthält. Dies ergibt ein boolesches `true`/`false`-Ergebnis.
   3. Wenn `active` auf der `rwd`-Taste gesetzt wurde, entfernen wir sie mit `classList.remove()`, löschen das Intervall, das gesetzt wurde, als der Button zum ersten Mal gedrückt wurde (siehe unten für mehr Erklärung) und rufen [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play) auf, um das Zurückspulen abzubrechen und das Video normal abzuspielen.
   4. Wenn es noch nicht gesetzt wurde, fügen wir die `active`-Klasse zur `rwd`-Taste mit `classList.add()` hinzu, pausieren das Video mit [`HTMLMediaElement.pause()`](/de/docs/Web/API/HTMLMediaElement/pause) und setzen dann die Variable `intervalRwd` auf einen Aufruf von [`setInterval()`](/de/docs/Web/API/Window/setInterval) gleich. Wenn es aufgerufen wird, erstellt `setInterval()` ein aktives Intervall, das heißt, es führt die angegebene Funktion als ersten Parameter alle x Millisekunden aus, wobei x der Wert des 2. Parameters ist. Hier führen wir also die `windBackward()`-Funktion alle 200 Millisekunden aus — wir verwenden diese Funktion, um das Video kontinuierlich zurückzuspulen. Um ein [`setInterval()`](/de/docs/Web/API/Window/setInterval) zu stoppen, müssen Sie [`clearInterval()`](/de/docs/Web/API/Window/clearInterval) aufrufen, wobei Sie den identifizierenden Namen des zu löschenden Intervalls angeben, der in diesem Fall der Variablenname `intervalRwd` ist (siehe den `clearInterval()`-Aufruf früher in der Funktion).

3. Schließlich müssen wir die `windBackward()`- und `windForward()`-Funktionen definieren, die in den `setInterval()`-Aufrufen aufgerufen werden. Fügen Sie das Folgende unter Ihren zwei vorherigen Funktionen hinzu:

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

   Nochmals, wir werden nur durch die erste dieser Funktionen laufen, da sie fast identisch sind, aber umgekehrt zueinander arbeiten. In `windBackward()` tun wir das Folgende — beachten Sie, dass, wenn das Intervall aktiv ist, diese Funktion einmal alle 200 Millisekunden ausgeführt wird.
   1. Wir beginnen mit einer `if`-Anweisung, die überprüft, ob die aktuelle Zeit weniger als 3 Sekunden beträgt, d.h. ob das Zurückspulen um weitere drei Sekunden es zurück zum Start des Videos bringen würde. Dies würde seltsames Verhalten verursachen, deshalb stoppen wir in diesem Fall das Abspielen des Videos durch Aufruf von `stopMedia()`, entfernen die `active`-Klasse von der Rückspultaste und löschen das `intervalRwd`-Intervall, um die Rückspulfunktionalität zu stoppen. Wenn wir diesen letzten Schritt nicht machen würden, würde das Video einfach endlos zurückspulen.
   2. Wenn die aktuelle Zeit nicht innerhalb von 3 Sekunden vom Start des Videos liegt, entfernen wir drei Sekunden von der aktuellen Zeit durch Ausführen von `media.currentTime -= 3`. Im Effekt spulen wir das Video alle 200 Millisekunden um 3 Sekunden zurück.

#### Aktualisieren der verstrichenen Zeit

Das letzte Stück unseres Mediaplayers zur Implementierung sind die Zeit­verstrichen­anzeigen. Um dies zu tun, werden wir eine Funktion ausführen, um die Zeitanzeigen zu aktualisieren, jedesmal wenn das [`timeupdate`](/de/docs/Web/API/HTMLMediaElement/timeupdate_event)-Ereignis auf dem `<video>`-Element ausgelöst wird. Die Häufigkeit, mit der dieses Ereignis ausgelöst wird, hängt von Ihrem Browser, der CPU-Power usw. ab. ([siehe diesen Stack Overflow-Post](https://stackoverflow.com/questions/9678177/how-often-does-the-timeupdate-event-fire-for-an-html5-video)).

1. Fügen Sie die folgende `addEventListener()`-Zeile direkt unter die anderen hinzu:

   ```js
   media.addEventListener("timeupdate", setTime);
   ```

2. Nun zur Definition der `setTime()`-Funktion. Fügen Sie das folgende am Ende Ihrer Datei hinzu:

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

Dies ist eine ziemlich lange Funktion, also gehen wir sie Schritt für Schritt durch:

1. Zuerst arbeiten wir die Anzahl der Minuten und Sekunden im [`HTMLMediaElement.currentTime`](/de/docs/Web/API/HTMLMediaElement/currentTime)-Wert aus.
2. Dann initialisieren wir zwei weitere Variablen — `minuteValue` und `secondValue`. Wir verwenden {{jsxref("String/padStart", "padStart()")}}, um jeden Wert 2 Zeichen lang zu machen, auch wenn der Zahlenwert nur eine Stelle ist.
3. Der tatsächliche Zeitwert, der angezeigt werden soll, wird als `minuteValue` plus ein Doppelpunktzeichen plus `secondValue` gesetzt.
4. Der [`Node.textContent`](/de/docs/Web/API/Node/textContent)-Wert des Timers wird auf den Zeitwert gesetzt, sodass er in der Benutzeroberfläche angezeigt wird.
5. Die Länge, auf die wir das innere `<div>` setzen sollten, wird berechnet, indem wir zuerst die Breite des äußeren `<div>` herausfinden (die [`clientWidth`](/de/docs/Web/API/Element/clientWidth)-Eigenschaft eines beliebigen Elements enthält seine Länge) und dann multiplizieren wir es mit der [`HTMLMediaElement.currentTime`](/de/docs/Web/API/HTMLMediaElement/currentTime) durch die totale [`HTMLMediaElement.duration`](/de/docs/Web/API/HTMLMediaElement/duration) des Mediums.
6. Wir setzen die Breite des inneren `<div>` so, dass sie der berechneten Balkenlänge entspricht, plus "px", sodass sie auf diese Anzahl von Pixeln gesetzt wird.

#### Abspielen und Pausieren korrigieren

Es gibt ein Problem, das noch zu beheben ist. Wenn die Play/Pause- oder die Stopp-Tasten gedrückt werden, während die Rückspul- oder Vorlauf-Funktionalität aktiv ist, funktionieren sie einfach nicht. Wie können wir es so reparieren, dass sie die `rwd`/`fwd`-Button-Funktionalität abbrechen und das Video so abspielen/stoppen, wie Sie es erwarten würden? Dies ist ziemlich leicht zu reparieren.

1. Fügen Sie zuerst die folgenden Zeilen in der Funktion `stopMedia()` hinzu — überall dort ist es in Ordnung:

   ```js
   rwd.classList.remove("active");
   fwd.classList.remove("active");
   clearInterval(intervalRwd);
   clearInterval(intervalFwd);
   ```

2. Fügen Sie nun dieselben Zeilen erneut, ganz am Anfang der Funktion `playPauseMedia()` hinzu (direkt vor der `if`-Anweisung).

3. An diesem Punkt können Sie die äquivalenten Zeilen aus den Funktionen `windBackward()` und `windForward()` löschen, da diese Funktionalität stattdessen in der Funktion `stopMedia()` implementiert wurde.

> [!NOTE]
> Sie könnten die Effizienz des Codes weiter verbessern, indem Sie eine separate Funktion erstellen, die diese Zeilen ausführt, und sie dann überall dort aufrufen, wo sie benötigt werden, anstatt die Zeilen mehrmals im Code zu wiederholen. Aber wir überlassen das Ihnen.

## Zusammenfassung

Ich denke, wir haben Ihnen in diesem Artikel genug beigebracht. Die [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-API bietet eine Fülle von Funktionen, um einfache Video- und Audioplayer zu erstellen, und das ist nur die Spitze des Eisbergs. Siehe den Abschnitt "Siehe auch" weiter unten für Links zu komplexer und interessanter Funktionalität.

Hier sind einige Vorschläge, wie Sie das bereits erstellte Beispiel erweitern könnten:

1. Die Zeitanzeige bricht derzeit ab, wenn das Video eine Stunde oder länger ist (naja, es wird keine Stunden anzeigen; nur Minuten und Sekunden). Können Sie herausfinden, wie Sie das Beispiel ändern können, um Stunden anzuzeigen?
2. Da `<audio>`-Elemente die gleiche [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-Funktionalität haben, könnten Sie diesen Player leicht dazu bringen, auch für ein `<audio>`-Element zu funktionieren. Versuchen Sie es.
3. Können Sie einen Weg finden, um das innere `<div>`-Element des Timers zu einer echten Suchleiste/scroller zu machen — d.h. wenn Sie irgendwo auf die Leiste klicken, springt sie zu dieser relativen Position in der Videowiedergabe? Als Hinweis können Sie die X- und Y-Werte der linken/rechten und oberen/unteren Seiten des Elements mit der [`getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect)-Methode herausfinden, und Sie können die Koordinaten eines Mausklicks über das Ereignisobjekt des Klickereignisses herausfinden, das auf das [`Document`](/de/docs/Web/API/Document)-Objekt aufgerufen wird. Zum Beispiel:

   ```js
   document.onclick = function (e) {
     console.log(e.x, e.y);
   };
   ```

## Siehe auch

- [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)
- [HTML-Video und -Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio) — einfacher Leitfaden für `<video>` und `<audio>` HTML.
- [Audio- und Video­bereitstellung](/de/docs/Web/Media/Guides/Audio_and_video_delivery) — detaillierter Leitfaden zur Bereitstellung von Medien im Browser, mit vielen Tipps, Tricks und Links zu weiteren fortgeschrittenen Tutorials.
- [Audio- und Video­manipulation](/de/docs/Web/Media/Guides/Audio_and_video_manipulation) — detaillierter Leitfaden zur Manipulation von Audio und Video, z.B. mit der [Canvas API](/de/docs/Web/API/Canvas_API), der [Web Audio API](/de/docs/Web/API/Web_Audio_API) und mehr.
- {{htmlelement("video")}} und {{htmlelement("audio")}} Referenzseiten.
- [Leitfaden zu Medientypen und Formaten im Web](/de/docs/Web/Media/Guides/Formats)

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_APIs/Introduction", "Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics", "Learn_web_development/Extensions/Client-side_APIs")}}
