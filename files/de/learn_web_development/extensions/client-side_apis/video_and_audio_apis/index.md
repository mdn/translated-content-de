---
title: Video- und Audio-APIs
short-title: Video und Audio
slug: Learn_web_development/Extensions/Client-side_APIs/Video_and_audio_APIs
l10n:
  sourceCommit: 9f7e7e9075e9f2b1937d2c8000f52a8ff76bff52
---

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_APIs/Introduction", "Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics", "Learn_web_development/Extensions/Client-side_APIs")}}

HTML enthält Elemente zum Einbetten von Rich Media in Dokumente — {{htmlelement("video")}} und {{htmlelement("audio")}} — die wiederum ihre eigenen APIs zum Steuern der Wiedergabe, zum Suchen usw. haben. Dieser Artikel zeigt Ihnen, wie Sie gängige Aufgaben wie das Erstellen von benutzerdefinierten Wiedergabesteuerelementen durchführen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>, insbesondere <a href="/de/docs/Learn_web_development/Core/Scripting/Object_basics">Grundlagen der JavaScript-Objekte</a> und der Abdeckung grundlegender APIs wie <a href="/de/docs/Learn_web_development/Core/Scripting/DOM_scripting">DOM-Skripting</a> und <a href="/de/docs/Learn_web_development/Core/Scripting/Network_requests">Netzwerkanfragen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        <ul>
          <li>Was Codecs sind und die verschiedenen Video- und Audioformate.</li>
          <li>Verstehen der grundlegenden Funktionalität im Zusammenhang mit Audio und Video: abspielen, pausieren, stoppen, Suche vorwärts und rückwärts, Dauer und aktuelle Zeit.</li>
          <li>Verwendung der <code>HTMLMediaElement</code>-API zum Erstellen eines einfachen benutzerdefinierten Media-Players, um bessere Zugänglichkeit oder mehr Konsistenz über verschiedene Browser hinweg zu erzielen.</li>
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

Dies erstellt einen Videoplayer im Browser, der so aussieht:

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

Sie können überprüfen, was alle HTML-Funktionen im oben verlinkten Artikel tun. Für unsere Zwecke ist das interessanteste Attribut [`controls`](/de/docs/Web/HTML/Reference/Elements/video#controls), das die Standardsumme von Wiedergabesteuerelementen aktiviert. Wenn Sie dies nicht angeben, erhalten Sie keine Wiedergabesteuerelemente:

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

Dies ist für die Videowiedergabe nicht sofort nützlich, hat aber Vorteile. Ein großes Problem mit den nativen Browser-Steuerelementen ist, dass sie in jedem Browser unterschiedlich sind — nicht sehr gut für die plattformübergreifende Unterstützung! Ein weiteres großes Problem ist, dass die nativen Steuerelemente in den meisten Browsern nicht sehr tastaturzugänglich sind.

Sie können diese beiden Probleme lösen, indem Sie die nativen Steuerelemente ausblenden (durch Entfernen des `controls`-Attributs) und Ihre eigenen mit HTML, CSS und JavaScript programmieren. Im nächsten Abschnitt sehen wir uns die grundlegenden Tools an, die wir zur Verfügung haben, um dies zu tun.

## Die HTMLMediaElement API

Als Teil der HTML-Spezifikation bietet die API [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) Funktionen, mit denen Sie Video- und Audioplayer programmatisch steuern können, z. B. [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play), [`HTMLMediaElement.pause()`](/de/docs/Web/API/HTMLMediaElement/pause) usw. Diese Schnittstelle steht sowohl {{htmlelement("audio")}}- als auch {{htmlelement("video")}}-Elementen zur Verfügung, da die Funktionen, die Sie implementieren möchten, nahezu identisch sind. Lassen Sie uns ein Beispiel durchgehen, in dem wir Funktionen hinzufügen, während wir fortfahren.

Unser fertiges Beispiel wird folgendermaßen aussehen (und funktionieren):

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

### Einstieg

Um mit diesem Beispiel zu beginnen, führen Sie folgende Schritte aus:

1. Erstellen Sie ein neues Verzeichnis auf Ihrer Festplatte namens `custom-video-player`.
2. Erstellen Sie eine neue Datei darin mit dem Namen `index.html` und füllen Sie sie mit folgendem Inhalt:

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

4. Erstellen Sie eine weitere neue Datei in dem Verzeichnis namens `custom-player.js`. Lassen Sie sie vorerst leer.

Zu diesem Zeitpunkt sollten Sie beim Laden des HTML einen vollkommen normalen HTML-Videoplayer mit den gerenderten nativen Steuerelementen sehen.

#### Erforschung des HTML

Öffnen Sie die HTML-Indexdatei. Sie werden eine Reihe von Funktionen sehen; das HTML wird vom Videoplayer und seinen Steuerelementen dominiert:

- Der gesamte Player ist in ein {{htmlelement("div")}}-Element eingebettet, damit er bei Bedarf als eine Einheit gestylt werden kann.
- Das {{htmlelement("video")}}-Element enthält zwei {{htmlelement("source")}}-Elemente, sodass je nach Ansicht des Browsers verschiedene Formate geladen werden können.
- Das HTML der Steuerelemente ist vermutlich am interessantesten:
  - Wir haben vier {{htmlelement("button")}}s — abspielen/pause, stoppen, zurückspulen und vorspulen.
  - Jeder `<button>` hat einen `class`-Namen, ein `data-icon`-Attribut zur Definition, welches Icon auf jedem Button angezeigt werden soll (wir zeigen, wie dies im folgenden Abschnitt funktioniert), und ein `aria-label`-Attribut, um eine verständliche Beschreibung jedes Buttons bereitzustellen, da wir innerhalb der Tags keine menschenlesbaren Bezeichnungen bereitstellen. Der Inhalt von `aria-label`-Attributen wird von Bildschirmlesern vorgelesen, wenn ihre Benutzer sich auf die sie enthaltenden Elemente konzentrieren.
  - Es gibt auch ein Timer-{{htmlelement("div")}}, das die vergangene Zeit anzeigt, wenn das Video abgespielt wird. Nur zum Spaß bieten wir zwei Berichtmechanismen — ein {{htmlelement("span")}}, das die verstrichene Zeit in Minuten und Sekunden enthält, und ein zusätzliches `<div>`, mit dem wir eine horizontale Indikatorleiste erstellen werden, die länger wird, während die Zeit verstreicht.

#### Erforschung des CSS

Öffnen Sie nun die CSS-Datei und sehen Sie sich darin um. Das CSS für das Beispiel ist nicht allzu kompliziert, aber wir heben hier die interessantesten Teile hervor. Zuerst einmal beachten wir das `.controls`-Styling:

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

- Wir beginnen mit der {{cssxref("visibility")}} der benutzerdefinierten Steuerelemente, die standardmäßig auf `hidden` gesetzt ist. In unserem JavaScript später stellen wir die Steuerelemente auf `visible` und entfernen das `controls`-Attribut vom `<video>`-Element. Dies dient dazu, dass Benutzer das Video auch dann mit den nativen Steuerelementen nutzen können, wenn das JavaScript aus irgendeinem Grund nicht geladen wird.
- Wir geben den Steuerelementen standardmäßig eine {{cssxref("opacity")}} von `0.5`, damit sie weniger ablenkend sind, wenn Sie versuchen, das Video anzusehen. Nur wenn Sie über den Player schweben/fokussieren, erscheinen die Steuerelemente mit voller Deckkraft.
- Wir gestalten die Tasten innerhalb der Steuerleiste mithilfe von Flexbox ({{cssxref("display")}}: flex), um die Sache zu vereinfachen.

Schauen wir uns als Nächstes unsere Button-Symbole an:

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
  font-family: "HeydingsControlsRegular";
  font-size: 20px;
  position: relative;
  content: attr(data-icon);
  color: #aaaaaa;
  text-shadow: 1px 1px 0px black;
}
```

Zuerst verwenden wir im oberen Bereich des CSS einen {{cssxref("@font-face")}}-Block, um eine benutzerdefinierte Webschriftart zu importieren. Dies ist eine Symbolschriftart — alle Buchstaben des Alphabets entsprechen gängigen Symbolen, die Sie möglicherweise in einer Anwendung verwenden möchten.

Als Nächstes verwenden wir generierten Inhalt, um ein Symbol auf jedem Button anzuzeigen:

- Wir verwenden den {{cssxref("::before")}}-Selektor, um den Inhalt vor jedem {{htmlelement("button")}}-Element anzuzeigen.
- Wir verwenden die {{cssxref("content")}}-Eigenschaft, um den in jedem Fall anzuzeigenden Inhalt gleich den Inhalten des [`data-icon`](/de/docs/Web/HTML/How_to/Use_data_attributes)-Attributs festzulegen. Im Fall unseres Abspielbuttons enthält `data-icon` ein großes "P".
- Wir verwenden die benutzerdefinierte Webschriftart für unsere Buttons mit {{cssxref("font-family")}}. In dieser Schriftart ist "P" tatsächlich ein "Abspielen"-Symbol, daher hat der Abspielbutton ein "Abspielen"-Symbol darauf angezeigt.

Symbolschriftarten sind aus vielen Gründen cool — sie reduzieren HTTP-Anfragen, da Sie diese Symbole nicht als Bilddateien herunterladen müssen, sie bieten großartige Skalierbarkeit und Sie können Texteigenschaften verwenden, um sie zu gestalten — wie {{cssxref("color")}} und {{cssxref("text-shadow")}}.

Zu guter Letzt werfen wir einen Blick auf das CSS für den Timer:

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

- Wir setzen das äußere `.timer`-Element auf `flex: 5`, damit es den größten Teil der Breite der Steuerleiste einnimmt. Wir geben ihm auch {{cssxref("position", "position: relative")}}, damit wir Elemente darin bequem entsprechend seinen Grenzen und nicht den Grenzen des {{htmlelement("body")}}-Elements positionieren können.
- Das innere `<div>` ist absolut positioniert, um direkt oben auf dem äußeren `<div>` zu sitzen. Es hat auch eine anfängliche Breite von 0, damit Sie es überhaupt nicht sehen können. Während das Video abgespielt wird, wird die Breite mit JavaScript erhöht, während das Video abläuft.
- Das `<span>` ist ebenfalls absolut positioniert, um sich nahe der linken Seite der Timerleiste zu befinden.
- Wir geben auch unserem inneren `<div>` und `<span>` den richtigen {{cssxref("z-index")}}, damit der Timer oben angezeigt wird und das innere `<div>` darunter. So stellen wir sicher, dass wir alle Informationen sehen können – ein Kasten verdeckt keinen anderen.

### Implementierung des JavaScripts

Wir haben bereits eine ziemlich vollständige HTML- und CSS-Schnittstelle; jetzt müssen wir nur noch alle Buttons verkabeln, um die Kontrollen zum Laufen zu bringen.

1. Fügen Sie am Anfang der Datei `custom-player.js` den folgenden Code ein:

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

   Hier erstellen wir Konstanten, um Referenzen zu allen Objekten zu halten, die wir manipulieren wollen. Wir haben drei Gruppen:
   - Das `<video>`-Element und die Steuerleiste.
   - Die Play/Pause-, Stop-, Rückspul- und Vorspulknöpfe.
   - Das äußere Timer-Wrapper-`<div>`, die digitale Timeranzeige-`<span>` und das innere `<div>`, das breiter wird, während die Zeit verstreicht.

2. Fügen Sie dann das Folgende am Ende Ihres Codes hinzu:

   ```js
   media.removeAttribute("controls");
   controls.style.visibility = "visible";
   ```

   Diese beiden Zeilen entfernen die Standardbrowsersteuerelemente vom Video und machen die benutzerdefinierten Steuerelemente sichtbar.

#### Abspielen und Pausieren des Videos

Lassen Sie uns wahrscheinlich die wichtigste Kontrolle implementieren — den Abspiel-/Pause-Knopf.

1. Fügen Sie zunächst das Folgende am Ende Ihres Codes hinzu, so dass die Funktion `playPauseMedia()` aufgerufen wird, wenn der Abspielknopf geklickt wird:

   ```js
   play.addEventListener("click", playPauseMedia);
   ```

2. Nun zur Definition von `playPauseMedia()` — fügen Sie das Folgende wieder am Ende Ihres Codes hinzu:

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

   Hier verwenden wir eine [`if`](/de/docs/Web/JavaScript/Reference/Statements/if...else)-Anweisung, um zu prüfen, ob das Video pausiert ist. Die [`HTMLMediaElement.paused`](/de/docs/Web/API/HTMLMediaElement/paused)-Eigenschaft gibt true zurück, wenn das Medium pausiert ist, was jedes Mal der Fall ist, wenn das Video nicht abgespielt wird, einschließlich wenn es nach dem ersten Laden auf 0 Dauer eingestellt ist. Wenn es pausiert ist, setzen wir den Wert des `data-icon`-Attributs auf den Play-Knopf auf "u", was ein "Pausiert"-Symbol ist, und rufen die Methode [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play) auf, um das Medium abzuspielen.

   Beim zweiten Klick wird der Button wieder zurückgeschaltet — das "Abspielen"-Symbol wird erneut angezeigt und das Video wird mit [`HTMLMediaElement.pause()`](/de/docs/Web/API/HTMLMediaElement/pause) pausiert.

#### Stoppen des Videos

1. Lassen Sie uns als Nächstes die Funktionalität zum Stoppen des Videos hinzufügen. Fügen Sie die folgenden [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)-Zeilen unter den vorherigen hinzu, die Sie hinzugefügt haben:

   ```js
   stop.addEventListener("click", stopMedia);
   media.addEventListener("ended", stopMedia);
   ```

   Das [`click`](/de/docs/Web/API/Element/click_event)-Event ist offensichtlich — wir möchten das Video stoppen, indem wir die Funktion `stopMedia()` ausführen, wenn der Stop-Button geklickt wird. Wir möchten jedoch auch das Video stoppen, wenn es zu Ende ist — dies wird durch das Auslösen des [`ended`](/de/docs/Web/API/HTMLMediaElement/ended_event)-Events angezeigt, daher richten wir auch einen Listener ein, um die Funktion bei Auslösung dieses Events auszuführen.

2. Lassen Sie uns nun `stopMedia()` definieren — fügen Sie die folgende Funktion unter `playPauseMedia()` hinzu:

   ```js
   function stopMedia() {
     media.pause();
     media.currentTime = 0;
     play.setAttribute("data-icon", "P");
   }
   ```

   Die HTMLMediaElement-API hat keine `stop()`-Methode — das Äquivalent ist, das Video zu `pause()` und seine [`currentTime`](/de/docs/Web/API/HTMLMediaElement/currentTime)-Eigenschaft auf 0 zu setzen. Das `currentTime` auf einen Wert (in Sekunden) zu setzen, springt das Medium sofort auf diese Position.

   Danach bleibt nur noch, das angezeigte Symbol auf das "Abspielen"-Symbol zu setzen. Unabhängig davon, ob das Video pausiert oder abgespielt wurde, als der Stopp-Button gedrückt wurde, möchten Sie, dass es danach bereit ist, abgespielt zu werden.

#### Vor- und Zurückspulen

Es gibt viele Möglichkeiten, wie Sie Rückspul- und Vorspul-Funktionalitäten implementieren können; hier zeigen wir Ihnen eine relativ komplexe Methode, bei der das Player nicht kaputtgeht, wenn die verschiedenen Tasten in unerwarteter Reihenfolge gedrückt werden.

1. Fügen Sie zunächst die folgenden zwei [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)-Zeilen unter den vorherigen hinzu:

   ```js
   rwd.addEventListener("click", mediaBackward);
   fwd.addEventListener("click", mediaForward);
   ```

2. Nun zu den Ereignishandlungsfunktionen — fügen Sie den folgenden Code unter Ihren vorherigen Funktionen ein, um `mediaBackward()` und `mediaForward()` zu definieren:

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

   Sie werden bemerken, dass wir zuerst zwei Variablen initialisieren — `intervalFwd` und `intervalRwd` — mehr dazu später.

   Lassen Sie uns `mediaBackward()` durchgehen (die Funktionalität von `mediaForward()` ist genau dieselbe, aber umgekehrt):
   1. Wir löschen alle Klassen und Intervalle, die in der Vorspielfunktion festgelegt sind — wir tun dies, weil wir, wenn wir die `rwd`-Taste nach der `fwd`-Taste drücken, jede Vorspielfunktionalität abbrechen und durch die Rückspielfunktionalität ersetzen möchten. Wenn wir versuchen, beides gleichzeitig zu tun, würde der Player kaputtgehen.
   2. Wir verwenden eine `if`-Anweisung, um zu prüfen, ob die `active`-Klasse auf den `rwd`-Button gesetzt ist, was darauf hinweist, dass er bereits gedrückt wurde. Die [`classList`](/de/docs/Web/API/Element/classList) ist eine ziemlich nützliche Eigenschaft, die auf jedem Element existiert — sie enthält eine Liste aller auf dem Element festgelegten Klassen sowie Methoden zum Hinzufügen/Entfernen von Klassen usw. Wir verwenden die Methode `classList.contains()`, um zu überprüfen, ob die Liste die `active`-Klasse enthält. Dies liefert ein boolesches `true`/`false`-Ergebnis zurück.
   3. Wenn `active` auf dem `rwd`-Button gesetzt ist, entfernen wir es mit `classList.remove()`, löschen das Intervall, das beim ersten Drücken der Taste festgelegt wurde (siehe unten für mehr Erklärung), und verwenden [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play), um das Rückspulen abzubrechen und das Video normal abzuspielen.
   4. Wenn es noch nicht gesetzt ist, fügen wir die Klasse `active` zum `rwd`-Button hinzu, indem wir `classList.add()` verwenden, pausieren das Video mit [`HTMLMediaElement.pause()`](/de/docs/Web/API/HTMLMediaElement/pause) und setzen dann die Variable `intervalRwd` gleich einem [`setInterval()`](/de/docs/Web/API/Window/setInterval)-Aufruf. Wenn aufgerufen, erstellt `setInterval()` ein aktives Intervall, was bedeutet, dass es die Funktion ausführt, die als erstes Parameter angegeben wird, alle x Millisekunden, wobei x der Wert des 2. Parameters ist. Hier führen wir also die `windBackward()`-Funktion alle 200 Millisekunden aus — wir verwenden diese Funktion, um das Video kontinuierlich rückwärts zu spulen. Um ein laufendes [`setInterval()`](/de/docs/Web/API/Window/setInterval) zu stoppen, müssen Sie [`clearInterval()`](/de/docs/Web/API/Window/clearInterval) aufrufen und den Identifikationsname des zu löschenden Intervalls angeben, was in diesem Fall der Variablenname `intervalRwd` ist (siehe den `clearInterval()`-Aufruf früher in der Funktion).

3. Schließlich müssen wir die `windBackward()`- und `windForward()`-Funktionen definieren, die in den `setInterval()`-Aufrufen ausgeführt werden. Fügen Sie das Folgende unter Ihre beiden vorherigen Funktionen hinzu:

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

   Wir werden nur durch die erste dieser Funktionen gehen, da sie fast identisch sind, aber in umgekehrter Richtung zueinander arbeiten. In `windBackward()` führen wir Folgendes durch — beachten Sie, dass diese Funktion, wenn das Intervall aktiv ist, einmal alle 200 Millisekunden ausgeführt wird.
   1. Wir beginnen mit einer `if`-Anweisung, die überprüft, ob die aktuelle Zeit weniger als 3 Sekunden beträgt, d.h. wenn das Rückwärtsspulen um weitere drei Sekunden es hinter den Anfang des Videos zurückführen würde. Dies würde seltsames Verhalten verursachen, also stoppen wir in diesem Fall das Video, indem wir `stopMedia()` aufrufen, entfernen die `active`-Klasse vom Rückspulbutton und löschen das Intervall `intervalRwd`, um die Rückspul-Funktionalität zu stoppen. Wenn wir diesen letzten Schritt nicht machen würden, würde das Video weiterhin für immer zurückgespult werden.
   2. Wenn die aktuelle Zeit nicht innerhalb von 3 Sekunden nach dem Start des Videos ist, entfernen wir drei Sekunden von der aktuellen Zeit, indem wir `media.currentTime -= 3` ausführen. So spulen wir das Video effektiv alle 200 Millisekunden um 3 Sekunden zurück.

#### Aktualisierung der verstrichenen Zeit

Das letzte Stück unseres Media-Players, das implementiert werden muss, sind die Zeitverläufe. Dazu führen wir eine Funktion aus, um die Zeitverläufe jedes Mal zu aktualisieren, wenn das [`timeupdate`](/de/docs/Web/API/HTMLMediaElement/timeupdate_event)-Event auf dem `<video>`-Element ausgelöst wird. Die Häufigkeit, mit der dieses Event ausgelöst wird, hängt von Ihrem Browser, der Leistung der CPU usw. ab ([siehe diesen Stack Overflow-Beitrag](https://stackoverflow.com/questions/9678177/how-often-does-the-timeupdate-event-fire-for-an-html5-video)).

1. Fügen Sie die folgende `addEventListener()`-Zeile direkt unter die anderen hinzu:

   ```js
   media.addEventListener("timeupdate", setTime);
   ```

2. Nun zur Definition der `setTime()`-Funktion. Fügen Sie das Folgende am unteren Ende Ihrer Datei hinzu:

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

Dies ist eine ziemlich lange Funktion, daher gehen wir sie Schritt für Schritt durch:

1. Zuerst berechnen wir die Anzahl der Minuten und Sekunden im Wert [`HTMLMediaElement.currentTime`](/de/docs/Web/API/HTMLMediaElement/currentTime).
2. Dann initialisieren wir zwei weitere Variablen — `minuteValue` und `secondValue`. Wir verwenden {{jsxref("String/padStart", "padStart()")}}, um jeden Wert auf 2 Zeichenlänge zu bringen, selbst wenn der Wert nur eine einzige Ziffer ist.
3. Der tatsächliche anzuzeigende Zeitwert wird festgelegt als `minuteValue` plus einem Doppelpunkt-Zeichen plus `secondValue`.
4. Der [`Node.textContent`](/de/docs/Web/API/Node/textContent)-Wert des Timers wird auf den Zeitwert gesetzt, sodass er in der Benutzeroberfläche angezeigt wird.
5. Die Länge, auf die wir das innere `<div>` setzen sollten, wird bestimmt, indem zunächst die Breite des äußeren `<div>` herausgefunden wird (die `clientWidth`-Eigenschaft eines Elements enthält seine Länge) und sie dann mit [`HTMLMediaElement.currentTime`](/de/docs/Web/API/HTMLMediaElement/currentTime) geteilt durch die gesamte [`HTMLMediaElement.duration`](/de/docs/Web/API/HTMLMediaElement/duration) des Mediums multipliziert.
6. Wir setzen die Breite des inneren `<div>` auf die berechnete Balkenlänge plus "px", damit es auf diese Anzahl von Pixeln gesetzt wird.

#### Beheben von Abspielen und Pausieren

Es gibt ein Problem, das noch zu beheben ist. Wenn die Abspiel-/Pause- oder Stopptasten gedrückt werden, während die Rück- oder Vorspielfunktionalität aktiv ist, funktionieren sie einfach nicht. Wie können wir es so reparieren, dass sie die `rwd`/`fwd`-Tasten-Funktionalität stornieren und das Video wie erwartet abspielen/stoppen? Dies ist ziemlich einfach zu beheben.

1. Fügen Sie zunächst die folgenden Zeilen in der `stopMedia()`-Funktion ein — es ist egal, wo:

   ```js
   rwd.classList.remove("active");
   fwd.classList.remove("active");
   clearInterval(intervalRwd);
   clearInterval(intervalFwd);
   ```

2. Fügen Sie nun dieselben Zeilen noch einmal ganz am Anfang der `playPauseMedia()`-Funktion (direkt vor Beginn der `if`-Anweisung) ein.

3. An diesem Punkt können Sie die entsprechenden Zeilen aus den `windBackward()`- und `windForward()`-Funktionen löschen, da diese Funktionalität stattdessen in der `stopMedia()`-Funktion implementiert wurde.

> [!NOTE]
> Sie könnten auch die Effizienz des Codes weiter verbessern, indem Sie eine separate Funktion erstellen, die diese Zeilen ausführt und dann überall dort aufrufen, wo es nötig ist, anstatt die Zeilen mehrmals im Code zu wiederholen. Aber wir überlassen das Ihnen.

## Zusammenfassung

Ich denke, wir haben Ihnen in diesem Artikel genug beigebracht. Die [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-API bietet eine Fülle von Funktionalitäten zur Erstellung einfacher Video- und Audioplayer, und das ist nur die Spitze des Eisbergs. Siehe den Abschnitt "Siehe auch" unten für Links zu komplexerer und interessanter Funktionalität.

Hier sind einige Vorschläge, wie Sie das bestehende Beispiel, das wir aufgebaut haben, verbessern könnten:

1. Die Zeitanzeige bricht derzeit, wenn das Video eine Stunde oder länger dauert (nun, es zeigt keine Stunden an; nur Minuten und Sekunden). Können Sie herausfinden, wie Sie das Beispiel ändern können, um Stunden anzuzeigen?
2. Da `<audio>`-Elemente dieselbe [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-Funktionalität zur Verfügung haben, könnten Sie diesen Player auch für ein `<audio>`-Element arbeiten lassen. Versuchen Sie es.
3. Können Sie eine Möglichkeit finden, das innere Timer-`<div>`-Element in eine echte Suchleiste/Scroller umzuwandeln — d.h. wenn Sie irgendwo auf die Leiste klicken, springt es zu dieser relativen Position in der Videowiedergabe? Als Hinweis, Sie können die X- und Y-Werte der Linken/Rechten und Oben/Unten-Seiten eines Elements über die [`getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect)-Methode herausfinden, und Sie können die Koordinaten eines Mausklicks über das Ereignisobjekt des Klick-Ereignisses herausfinden, das auf dem [`Document`](/de/docs/Web/API/Document)-Objekt aufgerufen wird. Beispielsweise:

   ```js
   document.onclick = function (e) {
     console.log(e.x, e.y);
   };
   ```

## Siehe auch

- [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)
- [HTML-Video und -Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio) — einfacher Leitfaden zu `<video>`- und `<audio>`-HTML.
- [Audio- und Videowiedergabe](/de/docs/Web/Media/Guides/Audio_and_video_delivery) — detaillierter Leitfaden zur Wiedergabe von Medien im Browser, mit vielen Tipps, Tricks und Links zu weiter fortgeschrittenen Tutorials.
- [Manipulation von Audio und Video](/de/docs/Web/Media/Guides/Audio_and_video_manipulation) — detaillierter Leitfaden zur Bearbeitung von Audio und Video, z. B. mit der [Canvas API](/de/docs/Web/API/Canvas_API), der [Web Audio API](/de/docs/Web/API/Web_Audio_API) und mehr.
- {{htmlelement("video")}} und {{htmlelement("audio")}} Referenzseiten.
- [Leitfaden zu Medientypen und Formaten im Web](/de/docs/Web/Media/Guides/Formats)

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_APIs/Introduction", "Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics", "Learn_web_development/Extensions/Client-side_APIs")}}
