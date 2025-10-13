---
title: Video- und Audio-APIs
short-title: Video und Audio
slug: Learn_web_development/Extensions/Client-side_APIs/Video_and_audio_APIs
l10n:
  sourceCommit: 9cfc2285428932f448a1747e347b1e35a3e0172b
---

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_APIs/Introduction", "Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics", "Learn_web_development/Extensions/Client-side_APIs")}}

HTML bietet Elemente zum Einbetten von Rich-Media in Dokumente — {{htmlelement("video")}} und {{htmlelement("audio")}} — die wiederum eigene APIs zum Steuern der Wiedergabe, Suche usw. mitbringen. Dieser Artikel zeigt Ihnen, wie Sie gängige Aufgaben wie das Erstellen benutzerdefinierter Wiedergabesteuerungen durchführen können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>, insbesondere <a href="/de/docs/Learn_web_development/Core/Scripting/Object_basics">Grundlagen zu JavaScript-Objekten</a> und Kern-APIs wie <a href="/de/docs/Learn_web_development/Core/Scripting/DOM_scripting">DOM-Scripting</a> und <a href="/de/docs/Learn_web_development/Core/Scripting/Network_requests">Netzwerkanfragen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        <ul>
          <li>Was Codecs sind, und die verschiedenen Video- und Audioformate.</li>
          <li>Verstehen der zentralen Funktionen in Bezug auf Audio und Video — Abspielen, Pause, Stoppen, Rückwärts- und Vorwärtssuchen, Dauer und aktuelle Zeit.</li>
          <li>Die Verwendung der <code>HTMLMediaElement</code>-API zum Aufbau eines einfachen benutzerdefinierten Mediaplayers zur besseren Zugänglichkeit oder für mehr Konsistenz über Browser hinweg.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## HTML-Video und -Audio

Die {{htmlelement("video")}}- und {{htmlelement("audio")}}-Elemente ermöglichen uns das Einbetten von Video und Audio in Webseiten. Wie wir in [HTML Video und Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio) gezeigt haben, sieht eine typische Implementierung so aus:

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

Sie können in dem oben verlinkten Artikel nachlesen, was all die HTML-Funktionen bewirken; für unsere Zwecke ist das interessanteste Attribut [`controls`](/de/docs/Web/HTML/Reference/Elements/video#controls), das die Standardsatz von Wiedergabesteuerungen aktiviert. Wenn Sie dies nicht angeben, erhalten Sie keine Wiedergabesteuerungen:

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

Dies ist nicht unmittelbar für die Videowiedergabe nützlich, hat aber Vorteile. Ein großes Problem mit den nativen Browser-Steuerelementen ist, dass sie in jedem Browser unterschiedlich sind — nicht sehr gut für die plattformübergreifende Unterstützung! Ein weiteres großes Problem ist, dass die nativen Steuerelemente in den meisten Browsern nicht sehr tastaturfreundlich sind.

Sie können beide Probleme lösen, indem Sie die nativen Steuerelemente ausblenden (indem Sie das `controls`-Attribut entfernen) und Ihre eigenen mit HTML, CSS und JavaScript programmieren. Im nächsten Abschnitt werden wir die grundlegenden Werkzeuge untersuchen, die uns zur Verfügung stehen, um dies zu tun.

## Die HTMLMediaElement-API

Teil der HTML-Spezifikation ist die [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-API, die Funktionen bietet, mit denen Sie Video- und Audioplayer programmatisch steuern können — zum Beispiel [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play), [`HTMLMediaElement.pause()`](/de/docs/Web/API/HTMLMediaElement/pause) usw. Diese Schnittstelle steht sowohl {{htmlelement("audio")}}- als auch {{htmlelement("video")}}-Elementen zur Verfügung, da die Funktionen, die Sie implementieren möchten, nahezu identisch sind. Gehen wir ein Beispiel durch und fügen dabei nach und nach Funktionen hinzu.

Unser fertiges Beispiel wird etwa so aussehen (und funktionieren):

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

Um mit diesem Beispiel zu beginnen, führen Sie die folgenden Schritte aus:

1. Erstellen Sie ein neues Verzeichnis auf Ihrer Festplatte mit dem Namen `custom-video-player`.
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

4. Erstellen Sie eine weitere neue Datei in dem Verzeichnis namens `custom-player.js`. Lassen Sie es vorläufig leer.

Zu diesem Zeitpunkt sollten Sie, wenn Sie das HTML laden, einen völlig normalen HTML-Videoplayer mit den nativen Steuerelementen sehen.

#### Erforschung des HTML

Öffnen Sie die HTML-Indexdatei. Sie werden eine Reihe von Funktionen sehen; das HTML wird vom Videoplayer und seinen Steuerelementen dominiert:

- Der gesamte Player ist in ein {{htmlelement("div")}}-Element eingebettet, sodass er bei Bedarf als eine Einheit gestylt werden kann.
- Das {{htmlelement("video")}}-Element enthält zwei {{htmlelement("source")}}-Elemente, sodass je nach dem betrachteten Browser unterschiedliche Formate geladen werden können.
- Das meist interessante Element ist wahrscheinlich das HTML der Steuerelemente:
  - Wir haben vier {{htmlelement("button")}}s — Wiedergabe/Pause, Stop, Rücklauf und Vorlauf.
  - Jedes `<button>` hat einen `class`-Namen, ein `data-icon`-Attribut zur Definition, welches Symbol auf jedem Button angezeigt werden soll (wir zeigen Ihnen, wie dies im folgenden Abschnitt funktioniert), und ein `aria-label`-Attribut, um eine verständliche Beschreibung jedes Buttons bereitzustellen, da wir kein menschenlesbares Label innerhalb der Tags bereitstellen. Der Inhalt der `aria-label`-Attribute wird von Screenreadern vorgelesen, wenn ihre Benutzer sich auf die Elemente fokussieren, die sie enthalten.
  - Es gibt auch ein Timer-{{htmlelement("div")}}, das die abgelaufene Zeit meldet, wenn das Video spielt. Zum Spaß bieten wir zwei Meldemechanismen an — ein {{htmlelement("span")}} mit der abgelaufenen Zeit in Minuten und Sekunden und ein weiteres `<div>`, das wir verwenden, um eine horizontale Indikatorleiste zu erstellen, die mit der Zeit länger wird.

#### Erforschung des CSS

Öffnen Sie nun die CSS-Datei und werfen Sie einen Blick hinein. Das CSS für das Beispiel ist nicht allzu kompliziert, aber wir heben hier die interessantesten Teile hervor. Erstens beachten Sie das `.controls`-Styling:

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

- Wir beginnen mit der {{cssxref("visibility")}} der benutzerdefinierten Steuerelemente, die auf `hidden` gesetzt ist. In unserem JavaScript setzen wir die Steuerelemente auf `visible` und entfernen das `controls`-Attribut aus dem `<video>`-Element. Dies dient dazu, dass, falls das JavaScript aus irgendeinem Grund nicht lädt, Benutzer weiterhin das Video mit den nativen Steuerelementen verwenden können.
- Wir geben den Steuerelementen standardmäßig eine {{cssxref("opacity")}} von `0.5`, damit sie weniger störend sind, wenn Sie das Video ansehen. Nur wenn Sie über den Player fahren oder fokussieren, erscheinen die Steuerelemente mit voller Deckkraft.
- Wir ordnen die Buttons innerhalb der Steuerleiste mit Flexbox ({{cssxref("display")}}: flex) an, um die Sache zu erleichtern.

Schauen wir uns als Nächstes unsere Schaltflächensymbole an:

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

Ganz oben im CSS verwenden wir zuerst einen {{cssxref("@font-face")}}-Block, um eine benutzerdefinierte Webschriftart zu importieren. Dies ist eine Symbolschriftart — alle Zeichen des Alphabets entsprechen gängigen Symbolen, die Sie in einer Anwendung verwenden möchten.

Als Nächstes verwenden wir generierten Inhalt, um ein Symbol auf jeder Schaltfläche anzuzeigen:

- Wir verwenden den {{cssxref("::before")}}-Selektor, um den Inhalt vor jedem {{htmlelement("button")}}-Element anzuzeigen.
- Wir verwenden die {{cssxref("content")}}-Eigenschaft, um den anzuzeigenden Inhalt in jedem Fall auf den Inhalt des [`data-icon`](/de/docs/Web/HTML/How_to/Use_data_attributes)-Attributs zu setzen. Im Fall unserer Play-Taste enthält `data-icon` ein großes "P".
- Wir wenden die benutzerdefinierte Webschrift auf unsere Schaltflächen mit {{cssxref("font-family")}} an. In dieser Schriftart ist "P" tatsächlich ein "Wiedergabe"-Symbol, daher hat die Wiedergabeschaltfläche ein "Wiedergabe"-Symbol darauf abgebildet.

Symbolschriften sind aus vielen Gründen cool — sie reduzieren HTTP-Anfragen, da Sie diese Symbole nicht als Bilddateien herunterladen müssen, bieten großartige Skalierbarkeit und die Tatsache, dass Sie Texteigenschaften wie {{cssxref("color")}} und {{cssxref("text-shadow")}} verwenden können, um sie zu stylen.

Zum Schluss schauen wir uns das CSS für den Timer an:

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

- Wir setzen das äußere `.timer`-Element auf `flex: 5`, sodass es den größten Teil der Breite der Steuerleiste einnimmt. Wir geben ihm auch {{cssxref("position", "position: relative")}}, damit wir Elemente innerhalb davon bequem nach seinen Grenzen und nicht den Grenzen des {{htmlelement("body")}}-Elements positionieren können.
- Das innere `<div>` ist absolut positioniert, sodass es direkt oben auf dem äußeren `<div>` sitzt. Es erhält auch eine anfängliche Breite von 0, sodass es überhaupt nicht sichtbar ist. Während das Video abgespielt wird, wird die Breite über JavaScript erhöht, da die Videozeit vergeht.
- Das `<span>` ist ebenfalls absolut positioniert, um sich nahe dem linken Rand der Timerleiste zu befinden.
- Wir geben unserem inneren `<div>` und `<span>` auch die richtige Menge an {{cssxref("z-index")}}, sodass der Timer oben und das innere `<div>` darunter angezeigt werden. Auf diese Weise stellen wir sicher, dass wir alle Informationen sehen können — ein Feld verdeckt kein anderes.

### Implementierung des JavaScripts

Wir haben bereits ein ziemlich vollständiges HTML- und CSS-Interface; jetzt müssen wir nur noch alle Schaltflächen anschließen, um die Steuerelemente funktionstüchtig zu machen.

1. Platzieren Sie oben in der `custom-player.js`-Datei den folgenden Code:

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
   - Das `<video>`-Element und die Steuerleiste.
   - Die Schaltflächen für Wiedergabe/Pause, Stopp, Rücklauf und Vorlauf.
   - Das äußere Timer-Wrapper-`<div>`, die Digitalanzeige-`<span>` und das innere `<div>`, das breiter wird, wenn die Zeit vergeht.

2. Fügen Sie als Nächstes Folgendes am Ende Ihres Codes ein:

   ```js
   media.removeAttribute("controls");
   controls.style.visibility = "visible";
   ```

   Diese zwei Zeilen entfernen die Standardbrowser-Steuerelemente aus dem Video und machen die benutzerdefinierten Steuerelemente sichtbar.

#### Abspielen und Pausieren des Videos

Implementieren wir wahrscheinlich das wichtigste Steuerelement — die Play/Pause-Schaltfläche.

1. Fügen Sie zuerst Folgendes an das Ende Ihres Codes hinzu, damit die `playPauseMedia()`-Funktion aufgerufen wird, wenn die Play-Schaltfläche angeklickt wird:

   ```js
   play.addEventListener("click", playPauseMedia);
   ```

2. Definieren wir nun `playPauseMedia()` — fügen Sie folgendes erneut am Ende Ihres Codes hinzu:

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

   Hier verwenden wir eine [`if`](/de/docs/Web/JavaScript/Reference/Statements/if...else)-Anweisung, um zu überprüfen, ob das Video pausiert ist. Die [`HTMLMediaElement.paused`](/de/docs/Web/API/HTMLMediaElement/paused)-Eigenschaft gibt true zurück, wenn das Medium angehalten ist, was jedes Mal der Fall ist, wenn das Video nicht abgespielt wird, einschließlich, wenn es nach dem ersten Laden auf 0-Dauer eingestellt ist. Wenn es pausiert ist, setzen wir den Wert des `data-icon`-Attributs auf der Play-Schaltfläche auf "u", was ein "pausiert"-Symbol ist, und rufen die [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play)-Methode auf, um das Medium abzuspielen.

   Beim zweiten Klick wird die Schaltfläche wieder zurückgeschaltet — das "Wiedergabe"-Symbol wird erneut angezeigt, und das Video wird mit [`HTMLMediaElement.pause()`](/de/docs/Web/API/HTMLMediaElement/pause) pausiert.

#### Beenden des Videos

1. Fügen wir als Nächstes die Funktionalität hinzu, um das Video zu stoppen. Fügen Sie die folgenden [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)-Zeilen unter den zuvor hinzugefügten ein:

   ```js
   stop.addEventListener("click", stopMedia);
   media.addEventListener("ended", stopMedia);
   ```

   Das [`click`](/de/docs/Web/API/Element/click_event)-Ereignis liegt auf der Hand — wir wollen das Video durch Ausführen unserer `stopMedia()`-Funktion stoppen, wenn die Stop-Schaltfläche geklickt wird. Wir wollen jedoch auch das Video stoppen, wenn es die Wiedergabe beendet — dies wird durch das [`ended`](/de/docs/Web/API/HTMLMediaElement/ended_event)-Ereignis angezeigt, sodass wir auch einen Listener einrichten, um die Funktion bei diesem Ereignisfeuer auszuführen.

2. Definieren wir als Nächstes `stopMedia()` — fügen Sie die folgende Funktion unter `playPauseMedia()` hinzu:

   ```js
   function stopMedia() {
     media.pause();
     media.currentTime = 0;
     play.setAttribute("data-icon", "P");
   }
   ```

   Es gibt keine `stop()`-Methode auf der HTMLMediaElement-API — das Äquivalent ist, das Video zu `pause()` und seine [`currentTime`](/de/docs/Web/API/HTMLMediaElement/currentTime)-Eigenschaft auf 0 zu setzen. Das Setzen von `currentTime` auf einen Wert (in Sekunden) springt das Medium sofort zu dieser Position.

   Das Einzige, was übrig bleibt, ist das angezeigte Symbol auf das "Wiedergabe"-Symbol zu setzen. Unabhängig davon, ob das Video pausiert oder abgespielt wird, wenn die Stop-Schaltfläche gedrückt wird, möchten Sie, dass es danach zum Abspielen bereit ist.

#### Rückwärts- und Vorwärtssuche

Es gibt viele Möglichkeiten, die Rücklauf- und Vorlauffunktionalität zu implementieren; hier zeigen wir Ihnen eine relativ komplexe Möglichkeit, dies zu tun, die nicht kaputtgeht, wenn die verschiedenen Tasten in einer unerwarteten Reihenfolge gedrückt werden.

1. Fügen Sie zuerst die folgenden zwei [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)-Zeilen unter den vorherigen ein:

   ```js
   rwd.addEventListener("click", mediaBackward);
   fwd.addEventListener("click", mediaForward);
   ```

2. Nun zu den Event-Handler-Funktionen — fügen Sie den folgenden Code unter Ihren vorherigen Funktionen hinzu, um `mediaBackward()` und `mediaForward()` zu definieren:

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

   Sie werden feststellen, dass wir zuerst zwei Variablen initialisieren — `intervalFwd` und `intervalRwd` — Sie werden später erfahren, wofür sie gedacht sind.

   Gehen wir Schritt für Schritt durch `mediaBackward()` (die Funktionalität für `mediaForward()` ist genau dieselbe, aber in umgekehrter Reihenfolge):
   1. Wir löschen alle Klassen und Intervalle, die auf der Schnellvorlauf-Funktionalität gesetzt sind — wir tun dies, weil, wenn wir die `rwd`-Taste nach dem Drücken der `fwd`-Taste drücken, wir alle Schnellvorlauffunktionen abbrechen und sie durch die Rückspul Funktionalität ersetzen möchten. Wenn wir versuchen würden, beides gleichzeitig zu tun, würde der Player kaputtgehen.
   2. Wir verwenden eine `if`-Anweisung, um zu überprüfen, ob die `active`-Klasse auf die `rwd`-Schaltfläche gesetzt wurde, was darauf hinweist, dass sie bereits gedrückt wurde. Die [`classList`](/de/docs/Web/API/Element/classList) ist eine recht nützliche Eigenschaft, die auf jedem Element existiert — sie enthält eine Liste aller auf dem Element gesetzten Klassen sowie Methoden zum Hinzufügen/Entfernen von Klassen usw. Wir verwenden die `classList.contains()`-Methode, um zu überprüfen, ob die Liste die `active`-Klasse enthält. Dies gibt ein boolesches `true`/`false` Ergebnis zurück.
   3. Wenn `active` auf die `rwd`-Schaltfläche gesetzt wurde, entfernen wir es mit `classList.remove()`, leeren das Interval, das gesetzt wurde, als die Schaltfläche zum ersten Mal gedrückt wurde (siehe unten für mehr Erklärungen), und verwenden [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play), um das Rückspulen abzubrechen und das Video normal abspielen zu lassen.
   4. Wenn es noch nicht gesetzt ist, fügen wir die `active`-Klasse mit `classList.add()` der `rwd`-Schaltfläche hinzu, pausieren das Video mit [`HTMLMediaElement.pause()`](/de/docs/Web/API/HTMLMediaElement/pause), und setzen dann die `intervalRwd`-Variable gleich einem [`setInterval()`](/de/docs/Web/API/Window/setInterval)-Aufruf. Wenn aufgerufen, erzeugt `setInterval()` ein aktives Intervall, was bedeutet, dass es die als erstes Parameter gegebene Funktion alle x Millisekunden ausführt, wobei x der Wert des zweiten Parameters ist. Also ziehen wir hier die `windBackward()`-Funktion alle 200 Millisekunden zurück — wir verwenden diese Funktion, um das Video ständig rückwärts zu spulen. Um ein [`setInterval()`](/de/docs/Web/API/Window/setInterval) zu stoppen, müssen Sie [`clearInterval()`](/de/docs/Web/API/Window/clearInterval) aufrufen, wobei Sie den identifizierenden Namen des zu löschenden Intervalls angeben müssen, in diesem Fall den Variablennamen `intervalRwd` (siehe `clearInterval()`-Aufruf weiter oben in der Funktion).

3. Schließlich müssen wir die `windBackward()`- und `windForward()`-Funktionen definieren, die in den `setInterval()`-Aufrufen aufgerufen werden. Fügen Sie Folgendes unterhalb Ihrer zwei vorherigen Funktionen hinzu:

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

   Wieder werden wir nur die erste dieser Funktionen durchgehen, da sie fast identisch arbeiten, aber in umgekehrter Richtung zueinander. In `windBackward()` führen wir folgende Schritte aus — beachten Sie, dass, wenn das Intervall aktiv ist, diese Funktion einmal alle 200 Millisekunden ausgeführt wird.
   1. Wir beginnen mit einer `if`-Anweisung, die überprüft, ob die aktuelle Zeit weniger als 3 Sekunden beträgt, d.h. ob ein weiteres Zurückspulen um drei Sekunden es zurück an den Anfang des Videos bringen würde. Dies würde seltsames Verhalten verursachen, also stoppen wir in diesem Fall die Videowiedergabe durch `stopMedia()`, entfernen die `active`-Klasse von der Rückspuls-Taste und löschen das `intervalRwd`-Intervall, um die Rückspulfunktionalität zu beenden. Wenn wir diesen letzten Schritt nicht machen würden, würde das Video einfach ewig weiter rückwärts laufen.
   2. Wenn die aktuelle Zeit nicht innerhalb von 3 Sekunden bis zum Start des Videos ist, entfernen wir drei Sekunden von der aktuellen Zeit, indem wir `media.currentTime -= 3` ausführen. Im Wesentlichen spulen wir das Video um 3 Sekunden zurück, einmal alle 200 Millisekunden.

#### Aktualisierung der abgelaufenen Zeit

Das letzte Stück unseres Mediaplayers, das wir implementieren müssen, sind die Zeitabstandsanzeigen. Dazu werden wir eine Funktion ausführen, um die Zeitanzeigen jedes Mal zu aktualisieren, wenn das [`timeupdate`](/de/docs/Web/API/HTMLMediaElement/timeupdate_event)-Ereignis auf dem `<video>`-Element ausgelöst wird. Die Häufigkeit, mit der dieses Ereignis ausgelöst wird, hängt von Ihrem Browser, der Prozessorleistung usw. ab ([siehe diesen Stack Overflow-Beitrag](https://stackoverflow.com/questions/9678177/how-often-does-the-timeupdate-event-fire-for-an-html5-video)).

1. Fügen Sie die folgende `addEventListener()`-Zeile direkt unter den anderen hinzu:

   ```js
   media.addEventListener("timeupdate", setTime);
   ```

2. Nun, um die `setTime()`-Funktion zu definieren. Fügen Sie folgende am Ende Ihrer Datei hinzu:

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

Dies ist eine ziemlich lange Funktion, also lassen Sie uns durchgehen, Schritt für Schritt:

1. Zuerst ermitteln wir die Anzahl der Minuten und Sekunden in dem [`HTMLMediaElement.currentTime`](/de/docs/Web/API/HTMLMediaElement/currentTime)-Wert.
2. Dann initialisieren wir zwei weitere Variablen — `minuteValue` und `secondValue`. Wir verwenden {{jsxref("String/padStart", "padStart()")}}, um jeden Wert 2 Zeichen lang zu machen, auch wenn der numerische Wert nur einstellig ist.
3. Der tatsächliche Zeitwert, der angezeigt werden soll, wird als `minuteValue` plus einem Doppelpunktzeichen plus `secondValue` gesetzt.
4. Der [`Node.textContent`](/de/docs/Web/API/Node/textContent)-Wert des Timers wird auf den Zeitwert gesetzt, sodass er in der Benutzeroberfläche angezeigt wird.
5. Die Länge, auf die wir das innere `<div>` setzen sollten, wird ermittelt, indem wir zuerst die Breite des äußeren `<div>` (jede Elementes [`clientWidth`](/de/docs/Web/API/Element/clientWidth)-Eigenschaft wird seine Länge enthalten) ermitteln und dann mit der [`HTMLMediaElement.currentTime`](/de/docs/Web/API/HTMLMediaElement/currentTime) geteilt durch die gesamte [`HTMLMediaElement.duration`](/de/docs/Web/API/HTMLMediaElement/duration) des Mediums multiplizieren.
6. Wir setzen die Breite des inneren `<div>` gleich der berechneten Balkenlänge, plus "px", sodass es auf diese Anzahl von Pixeln gesetzt wird.

#### Play und Pause Fix

Es gibt noch ein Problem zu lösen. Wenn die Wiedergabe/Pause- oder Stop-Tasten gedrückt werden, während die Rücklauf- oder Vorlauffunktionalität aktiv ist, funktionieren sie einfach nicht. Wie können wir es beheben, damit sie die `rwd`/`fwd`-Schaltflächenfunktionalität abbrechen und das Video wie erwartet abspielen/anhalten? Das ist ziemlich einfach zu beheben.

1. Fügen Sie zuerst die folgenden Zeilen innerhalb der `stopMedia()`-Funktion hinzu — irgendwo passt es:

   ```js
   rwd.classList.remove("active");
   fwd.classList.remove("active");
   clearInterval(intervalRwd);
   clearInterval(intervalFwd);
   ```

2. Fügen Sie die gleichen Zeilen erneut am ganz Anfang der `playPauseMedia()`-Funktion hinzu (gerade bevor die `if`-Anweisung beginnt).

3. An diesem Punkt können Sie die entsprechenden Zeilen aus den `windBackward()` und `windForward()`-Funktionen löschen, da diese Funktionalität im `stopMedia()` umgesetzt wurde.

> [!NOTE]
> Sie könnten auch die Effizienz des Codes weiter verbessern, indem Sie eine separate Funktion erstellen, die diese Zeilen ausführt und diese dann überall aufrufen, wo sie benötigt wird, anstatt die Zeilen mehrmals im Code zu wiederholen. Aber das überlassen wir Ihnen.

## Zusammenfassung

Ich glaube, wir haben Ihnen in diesem Artikel genug beigebracht. Die [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-API bietet eine Fülle von Funktionen zum Erstellen einfacher Video- und Audioplayer, und das ist nur die Spitze des Eisbergs. Siehe den Abschnitt "Siehe auch" unten für Links zu komplexerer und interessanterer Funktionalität.

Hier sind einige Vorschläge, wie Sie das bestehende Beispiel, das wir erstellt haben, erweitern könnten:

1. Die Zeitanzeige bricht derzeit zusammen, wenn das Video eine Stunde lang oder länger ist (nun, sie zeigt keine Stunden an; nur Minuten und Sekunden). Können Sie herausfinden, wie Sie das Beispiel so ändern können, dass es Stunden anzeigt?
2. Da `<audio>`-Elemente die gleiche [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-Funktionalität haben, können Sie diesen Player auch mit einem `<audio>`-Element verwenden. Versuchen Sie es.
3. Können Sie herausfinden, wie man das Timer-innere `<div>`-Element in eine echte Suchleiste / einen Scrollbalken verwandeln kann — d.h. Wenn Sie an einer Stelle auf der Leiste klicken, springt sie zu dieser relativen Position in der Videowiedergabe? Als Tipp können Sie die X- und Y-Werte der linken/rechten und oberen/unteren Seiten eines Elements via der [`getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect)-Methode herausfinden, und Sie können die Koordinaten eines Mausklicks über das Ereignisobjekt des Klickevents abrufen, das auf dem [`Document`](/de/docs/Web/API/Document)-Objekt aufgerufen wird. Zum Beispiel:

   ```js
   document.onclick = function (e) {
     console.log(e.x, e.y);
   };
   ```

## Siehe auch

- [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)
- [HTML-Video und -Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio) — einfacher Leitfaden zu `<video>` und `<audio>` HTML.
- [Audio- und Video-Delivery](/de/docs/Web/Media/Guides/Audio_and_video_delivery) — detaillierter Leitfaden zur Bereitstellung von Medien im Browser, mit vielen Tipps, Tricks und Links zu weiterführenden fortgeschrittenen Tutorials.
- [Audio- und Videobearbeitung](/de/docs/Web/Media/Guides/Audio_and_video_manipulation) — detaillierter Leitfaden zur Bearbeitung von Audio und Video, z.B. mit [Canvas API](/de/docs/Web/API/Canvas_API), [Web Audio API](/de/docs/Web/API/Web_Audio_API) und mehr.
- {{htmlelement("video")}} und {{htmlelement("audio")}} Referenzseiten.
- [Leitfaden zu Medientypen und Formaten im Web](/de/docs/Web/Media/Guides/Formats)

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_APIs/Introduction", "Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics", "Learn_web_development/Extensions/Client-side_APIs")}}
