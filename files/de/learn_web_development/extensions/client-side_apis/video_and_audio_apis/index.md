---
title: Video- und Audio-APIs
short-title: Video und Audio
slug: Learn_web_development/Extensions/Client-side_APIs/Video_and_audio_APIs
l10n:
  sourceCommit: 328ca42e0da893fa5cd60145c5a3f0044c2a012b
---

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_APIs/Introduction", "Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics", "Learn_web_development/Extensions/Client-side_APIs")}}

HTML enthält Elemente zum Einbetten von Medien in Dokumenten — {{htmlelement("video")}} und {{htmlelement("audio")}} — die wiederum eigene APIs zur Steuerung der Wiedergabe, des Suchens usw. bieten. Dieser Artikel zeigt Ihnen, wie Sie allgemeine Aufgaben wie das Erstellen benutzerdefinierter Wiedergabesteuerungen durchführen können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>, insbesondere grundlegende <a href="/de/docs/Learn_web_development/Core/Scripting/Object_basics">JavaScript-Objekte</a> und grundlegende API-Abdeckung wie <a href="/de/docs/Learn_web_development/Core/Scripting/DOM_scripting">DOM-Scripting</a> und <a href="/de/docs/Learn_web_development/Core/Scripting/Network_requests">Netzwerkanfragen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        <ul>
          <li>Was Codecs sind und die verschiedenen Video- und Audioformate.</li>
          <li>Verstehen der wesentlichen Funktionalitäten im Zusammenhang mit Audio und Video — Abspielen, Anhalten, Stoppen, Rückwärts- und Vorwärtssuchen, Dauer und aktuelle Zeit.</li>
          <li>Verwendung der <code>HTMLMediaElement</code>-API zur Erstellung eines einfachen benutzerdefinierten Mediaplayers, für bessere Barrierefreiheit oder mehr Konsistenz zwischen Browsern.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## HTML-Video und Audio

Die {{htmlelement("video")}}- und {{htmlelement("audio")}}-Elemente ermöglichen uns, Video und Audio in Webseiten einzubetten. Wie wir im [HTML video and audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio) gezeigt haben, sieht eine typische Implementierung so aus:

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

Sie können in dem oben verlinkten Artikel nachlesen, was alle HTML-Funktionen bewirken; für unsere Zwecke hier ist das interessanteste Attribut [`controls`](/de/docs/Web/HTML/Reference/Elements/video#controls), das den Standardsatz von Wiedergabesteuerungen aktiviert. Wenn Sie dies nicht angeben, erhalten Sie keine Wiedergabesteuerungen:

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

Dies ist nicht unmittelbar nützlich für die Videowiedergabe, hat jedoch Vorteile. Ein großes Problem mit den nativen Browser-Steuerungen ist, dass sie in jedem Browser unterschiedlich sind — nicht sehr gut für plattformübergreifende Unterstützung! Ein weiteres großes Problem ist, dass die nativen Steuerungen in den meisten Browsern nicht sehr tastaturzugänglich sind.

Sie können beide Probleme lösen, indem Sie die nativen Steuerungen ausblenden (durch Entfernen des `controls`-Attributs) und Ihre eigenen mit HTML, CSS und JavaScript programmieren. Im nächsten Abschnitt schauen wir uns die grundlegenden Werkzeuge an, die uns dafür zur Verfügung stehen.

## Die HTMLMediaElement-API

Teil der HTML-Spezifikation, die [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-API bietet Funktionen, mit denen Sie Video- und Audioplayer programmatisch steuern können — zum Beispiel [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play), [`HTMLMediaElement.pause()`](/de/docs/Web/API/HTMLMediaElement/pause) usw. Diese Schnittstelle ist sowohl für {{htmlelement("audio")}}- als auch {{htmlelement("video")}}-Elemente verfügbar, da die Funktionen, die Sie implementieren möchten, nahezu identisch sind. Lassen Sie uns ein Beispiel durchgehen und Schritt für Schritt Funktionen hinzufügen.

Unser fertiges Beispiel wird ungefähr so aussehen (und funktionieren):

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
  background: linear-gradient(to bottom, #222, #666);
}

button:before {
  font-family: HeydingsControlsRegular;
  font-size: 20px;
  position: relative;
  content: attr(data-icon);
  color: #aaa;
  text-shadow: 1px 1px 0px black;
}

.play:before {
  font-size: 22px;
}

button,
.timer {
  height: 38px;
  line-height: 19px;
  box-shadow: inset 0 -5px 25px rgba(0, 0, 0, 0.3);
  border-right: 1px solid #333;
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

.active:before {
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

### Einstieg

Um mit diesem Beispiel zu beginnen, führen Sie folgende Schritte aus:

1. Erstellen Sie ein neues Verzeichnis auf Ihrer Festplatte namens `custom-video-player`.
2. Erstellen Sie eine neue Datei darin namens `index.html` und füllen Sie sie mit folgendem Inhalt:

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

3. Erstellen Sie eine weitere neue Datei im Verzeichnis namens `style.css` und füllen Sie sie mit folgendem Inhalt:

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
     background: linear-gradient(to bottom, #222, #666);
   }

   button:before {
     font-family: HeydingsControlsRegular;
     font-size: 20px;
     position: relative;
     content: attr(data-icon);
     color: #aaa;
     text-shadow: 1px 1px 0px black;
   }

   .play:before {
     font-size: 22px;
   }

   button,
   .timer {
     height: 38px;
     line-height: 19px;
     box-shadow: inset 0 -5px 25px rgba(0, 0, 0, 0.3);
     border-right: 1px solid #333;
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

   .active:before {
     color: red;
   }
   ```

4. Erstellen Sie eine weitere neue Datei im Verzeichnis namens `custom-player.js`. Lassen Sie sie vorerst leer.

An diesem Punkt sollten Sie, wenn Sie das HTML laden, einen ganz normalen HTML-Videoplayer mit den nativen Steuerungen sehen.

#### Erkundung des HTML

Öffnen Sie die HTML-Indexdatei. Sie werden eine Reihe von Funktionen sehen; das HTML wird von dem Videoplayer und seinen Steuerungen dominiert:

- Der gesamte Player ist in einem {{htmlelement("div")}}-Element umschlossen, sodass er bei Bedarf als eine Einheit gestylt werden kann.
- Das {{htmlelement("video")}}-Element enthält zwei {{htmlelement("source")}}-Elemente, damit je nach dem verwendeten Browser unterschiedliche Formate geladen werden können.
- Das Steuerungen-HTML ist wahrscheinlich das interessanteste:
  - Wir haben vier {{htmlelement("button")}}s — Play/Pause, Stop, Zurückspulen und Vorspulen.
  - Jedes `<button>` hat einen `class`-Namen, ein `data-icon`-Attribut, das definiert, welches Symbol auf jedem Button angezeigt werden soll (wir zeigen, wie dies im nächsten Abschnitt funktioniert) und ein `aria-label`-Attribut, das eine verständliche Beschreibung jedes Buttons bereitstellt, da wir innerhalb der Tags keine menschenlesbaren Beschriftungen bereitstellen. Der Inhalt von `aria-label`-Attributen wird vorgelesen, wenn Benutzer von Screenreadern sich auf die enthaltenen Elemente fokussieren.
  - Es gibt auch einen Timer {{htmlelement("div")}}, der die verstrichene Zeit anzeigt, während das Video abgespielt wird. Zum Spaß bieten wir zwei Anzeigeinstrumente an — ein {{htmlelement("span")}}, das die verstrichene Zeit in Minuten und Sekunden enthält, und ein weiteres `<div>`, das wir verwenden, um eine horizontale Anzeigebalken zu erstellen, die länger wird, während die Zeit vergeht.

#### Erkundung des CSS

Öffnen Sie jetzt die CSS-Datei und schauen Sie hinein. Das CSS für das Beispiel ist nicht zu kompliziert, aber wir heben hier die interessantesten Teile hervor. Zuerst beachten Sie das `.controls`-Styling:

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

- Wir beginnen mit der {{cssxref("visibility")}} der benutzerdefinierten Steuerungen auf 'hidden' gesetzt. In unserem JavaScript später stellen wir die Steuerungen auf 'visible' ein und entfernen das `controls`-Attribut aus dem `<video>`-Element. Dies ist so, dass, falls das JavaScript aus irgendeinem Grund nicht geladen wird, die Nutzer das Video dennoch mit den nativen Steuerungen verwenden können.
- Wir geben den Steuerungen standardmäßig eine {{cssxref("opacity")}} von `0.5`, damit sie weniger ablenken, wenn Sie versuchen, das Video zu sehen. Nur wenn Sie den Player überfahren/fokussieren, erscheinen die Steuerungen in voller Deckkraft.
- Wir ordnen die Schaltflächen innerhalb der Steuerleiste mit Flexbox ({{cssxref("display")}}: flex) an, um die Dinge zu erleichtern.

Als nächstes werfen wir einen Blick auf unsere Button-Symbole:

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

Zunächst verwenden wir oben im CSS einen {{cssxref("@font-face")}}-Block, um eine benutzerdefinierte Web-Schriftart zu importieren. Dies ist eine Icon-Schriftart — alle Zeichen des Alphabets entsprechen häufigen Symbolen, die Sie in einer Anwendung verwenden möchten.

Als Nächstes verwenden wir generierten Inhalt, um ein Symbol auf jedem Button anzuzeigen:

- Wir verwenden den {{cssxref("::before")}}-Selektor, um den Inhalt vor jedem {{htmlelement("button")}}-Element anzuzeigen.
- Wir verwenden die {{cssxref("content")}}-Eigenschaft, um den anzuzeigenden Inhalt in jedem Fall gleich dem Inhalt des [`data-icon`](/de/docs/Web/HTML/How_to/Use_data_attributes)-Attributs zu setzen. Im Fall unseres Wiedergabe-Buttons enthält `data-icon` ein großes "P".
- Wir wenden die benutzerdefinierte Web-Schriftart auf unsere Buttons mit {{cssxref("font-family")}} an. In dieser Schriftart ist "P" tatsächlich ein "Play"-Symbol, sodass der Wiedergabe-Button daher ein "Play"-Symbol auf sich hat.

Icon-Schriften sind aus vielen Gründen cool — sie reduzieren die Anzahl der HTTP-Anfragen, weil Sie diese Icons nicht als Bilddateien herunterladen müssen, bieten eine große Skalierbarkeit, und Sie können Text-Eigenschaften verwenden, um sie zu stylen — wie {{cssxref("color")}} und {{cssxref("text-shadow")}}.

Zu guter Letzt, lassen Sie uns das CSS für den Timer ansehen:

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

- Wir setzen das äußere `.timer`-Element auf `flex: 5`, sodass es den größten Teil der Breite der Steuerungsleiste einnimmt. Wir geben ihm auch {{cssxref("position", "position: relative")}}, sodass wir Elemente bequem innerhalb davon positionieren können, in Übereinstimmung mit seinen Begrenzungen und nicht den Begrenzungen des {{htmlelement("body")}}-Elements.
- Das innere `<div>` ist absolut positioniert, um direkt auf dem äußeren `<div>` zu liegen. Es erhält auch eine Anfangsbreite von 0, sodass Sie es überhaupt nicht sehen können. Während das Video abgespielt wird, wird die Breite über JavaScript erhöht, während das Video abläuft.
- Das `<span>` ist ebenfalls absolut positioniert, um nahe der linken Seite der Timerleiste zu sitzen.
- Wir geben unserem inneren `<div>` und `<span>` auch den richtigen {{cssxref("z-index")}}, sodass der Timer oben angezeigt wird und das innere `<div>` darunter. Auf diese Weise stellen wir sicher, dass wir alle Informationen sehen können — eine Box verdeckt nicht eine andere.

### Implementierung des JavaScript

Wir haben bereits eine ziemlich vollständige HTML- und CSS-Oberfläche; jetzt müssen wir nur noch alle Buttons verkabeln, um die Steuerungen zum Laufen zu bringen.

1. Fügen Sie oben in der Datei `custom-player.js` den folgenden Code ein:

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
   - Das `<video>`-Element und die Kontrollleiste.
   - Die Wiedergabe/Pause, Stopp, Zurückspulen und Vorspulen Buttons.
   - Die äußere Timer-Wrapper `<div>`, die digitale Timeranzeige `<span>` und das innere `<div>`, das breiter wird, wenn die Zeit vergeht.

2. Fügen Sie als nächstes das folgende am unteren Rand Ihres Codes ein:

   ```js
   media.removeAttribute("controls");
   controls.style.visibility = "visible";
   ```

   Diese beiden Zeilen entfernen die Standard-Browsersteuerungen vom Video und machen die benutzerdefinierten Steuerungen sichtbar.

#### Wiedergabe und Anhalten des Videos

Lassen Sie uns wahrscheinlich die wichtigste Steuerung implementieren — den Wiedergabe-/Pause-Button.

1. Fügen Sie zunächst das Folgende am unteren Rand Ihres Codes hinzu, sodass die `playPauseMedia()`-Funktion aufgerufen wird, wenn der Play-Button angeklickt wird:

   ```js
   play.addEventListener("click", playPauseMedia);
   ```

2. Nun, um `playPauseMedia()` zu definieren — fügen Sie folgendes hinzu, wiederum am unteren Rand Ihres Codes:

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

   Hier verwenden wir eine [`if`](/de/docs/Web/JavaScript/Reference/Statements/if...else)-Anweisung, um zu überprüfen, ob das Video pausiert ist. Die [`HTMLMediaElement.paused`](/de/docs/Web/API/HTMLMediaElement/paused)-Eigenschaft gibt `true` zurück, wenn das Medium pausiert ist, was jedes Mal der Fall ist, wenn das Video nicht abgespielt wird, einschließlich, wenn es bei 0 Dauer ist, nachdem es erstmals geladen wurde. Wenn es pausiert ist, setzen wir den Wert des `data-icon`-Attributs auf dem Wiedergabe-Button auf "u", was ein "Pause"-Symbol ist, und rufen die [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play)-Methode auf, um das Medium abzuspielen.

   Beim zweiten Klick wird der Button wieder zurückgeschaltet — das "Play"-Symbol wird wieder angezeigt und das Video wird mit [`HTMLMediaElement.pause()`](/de/docs/Web/API/HTMLMediaElement/pause) angehalten.

#### Stoppen des Videos

1. Als nächstes lassen Sie uns Funktionalität hinzufügen, um das Video zu stoppen. Fügen Sie die folgende [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)-Zeilen unter den vorherigen hinzu:

   ```js
   stop.addEventListener("click", stopMedia);
   media.addEventListener("ended", stopMedia);
   ```

   Das [`click`](/de/docs/Web/API/Element/click_event)-Ereignis liegt auf der Hand — wir möchten das Video stoppen, indem wir unsere `stopMedia()`-Funktion aufrufen, wenn der Stop-Button geklickt wird. Wir wollen jedoch auch das Video stoppen, wenn es das Abspielen beendet — dies wird durch das [`ended`](/de/docs/Web/API/HTMLMediaElement/ended_event)-Ereignis markiert, das ausgelöst wird, sodass wir auch einen Listener einrichten, um die Funktion beim Auslösen dieses Ereignisses auszuführen.

2. Als nächstes definieren wir `stopMedia()` — fügen Sie die folgende Funktion unter `playPauseMedia()` hinzu:

   ```js
   function stopMedia() {
     media.pause();
     media.currentTime = 0;
     play.setAttribute("data-icon", "P");
   }
   ```

   Es gibt keine `stop()`-Methode in der HTMLMediaElement-API — das Äquivalent ist, das Video zu `pause()`n und seine [`currentTime`](/de/docs/Web/API/HTMLMediaElement/currentTime)-Eigenschaft auf 0 zu setzen. Das Setzen von `currentTime` auf einen Wert (in Sekunden) springt das Medium sofort zu dieser Position.

   Alles, was danach noch zu tun ist, ist das angezeigte Symbol auf das "Play"-Symbol zu setzen. Unabhängig davon, ob das Video pausiert oder abgespielt war, wenn der Stop-Button gedrückt wird, sollen Sie es danach zur Wiedergabe bereit haben.

#### Hin- und Herspulen

Es gibt viele Möglichkeiten, wie Sie Rückspul- und Vorspul-Funktionalität implementieren können; hier zeigen wir Ihnen eine relativ komplexe Möglichkeit, die nicht kaputt geht, wenn die verschiedenen Buttons in unerwarteter Reihenfolge gedrückt werden.

1. Fügen Sie zuerst die folgenden zwei [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)-Zeilen unter den vorherigen Zeilen hinzu:

   ```js
   rwd.addEventListener("click", mediaBackward);
   fwd.addEventListener("click", mediaForward);
   ```

2. Jetzt zu den Ereignishandler-Funktionen — fügen Sie den folgenden Code unter Ihren vorherigen Funktionen hinzu, um `mediaBackward()` und `mediaForward()` zu definieren:

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

   Sie werden feststellen, dass wir zuerst zwei Variablen initialisieren — `intervalFwd` und `intervalRwd` — Sie werden später herausfinden, wofür sie sind.

   Lassen Sie uns `mediaBackward()` durchgehen (die Funktionalität für `mediaForward()` ist genau gleich, aber in umgekehrter Reihenfolge):
   1. Wir entfernen alle Klassen und Intervalle, die an die Vorspul-Funktionalität gebunden sind — wir tun dies, weil, wenn wir den `rwd`-Button drücken, nachdem wir den `fwd`-Button gedrückt haben, die Vorspul-Funktionalität abbrechen und durch die Rückspul-Funktionalität ersetzen wollen. Wenn wir versuchen würden, beide gleichzeitig auszuführen, würde der Player kaputtgehen.
   2. Wir verwenden eine `if`-Anweisung, um zu überprüfen, ob die `active`-Klasse auf dem `rwd`-Button gesetzt wurde, was anzeigt, dass dieser bereits gedrückt wurde. Die [`classList`](/de/docs/Web/API/Element/classList) ist eine sehr praktische Eigenschaft, die auf jedem Element existiert — sie enthält eine Liste aller auf dem Element gesetzten Klassen sowie Methoden zum Hinzufügen/Entfernen von Klassen usw. Wir verwenden die Methode `classList.contains()`, um zu überprüfen, ob die Liste die `active`-Klasse enthält. Dies ergibt ein boolean Ergebnis `true`/`false`.
   3. Wenn `active` auf dem `rwd`-Button gesetzt ist, entfernen wir es mit `classList.remove()`, löschen das Intervall, das gesetzt wurde, als der Button zuerst gedrückt wurde (siehe unten für weitere Erklärungen), und verwenden [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play), um das Rückspulen abzubrechen und das Video normal abspielen zu lassen.
   4. Wenn es noch nicht gesetzt wurde, fügen wir die `active`-Klasse zum `rwd`-Button mit `classList.add()` hinzu, pausieren das Video mit [`HTMLMediaElement.pause()`](/de/docs/Web/API/HTMLMediaElement/pause) und setzen dann die `intervalRwd`-Variable gleich einem [`setInterval()`](/de/docs/Web/API/Window/setInterval)-Aufruf. Bei der Ausführung erstellt `setInterval()` ein aktives Intervall, das bedeutet, dass es die Funktion, die als erster Parameter übergeben wird, alle x Millisekunden ausführt, wobei x der Wert des 2. Parameters ist. Wir führen also die `windBackward()`-Funktion alle 200 Millisekunden aus — wir werden diese Funktion verwenden, um das Video ständig zurückzuspulen. Um ein [`setInterval()`](/de/docs/Web/API/Window/setInterval) zu stoppen, müssen Sie [`clearInterval()`](/de/docs/Web/API/Window/clearInterval) aufrufen und ihm den identifizierenden Namen des zu löschenden Intervalls geben, was in diesem Fall der Variablenname `intervalRwd` ist (siehe den `clearInterval()`-Aufruf früher in der Funktion).

3. Schließlich müssen wir die `windBackward()`- und `windForward()`-Funktionen definieren, die in den `setInterval()`-Aufrufen aufgerufen werden. Fügen Sie das Folgende unter Ihre zwei vorherigen Funktionen hinzu:

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

   Erneut werden wir nur die erste dieser Funktionen durchgehen, da sie nahezu identisch arbeiten, jedoch umgekehrt zueinander. In `windBackward()` tun wir Folgendes — beachten Sie, dass diese Funktion bei aktiviertem Intervall alle 200 Millisekunden einmal ausgeführt wird.
   1. Wir beginnen mit einer `if`-Bedingung, die prüft, ob die aktuelle Zeit weniger als 3 Sekunden beträgt, d.h. ob das Rückspulen um weitere drei Sekunden es über den Anfang des Videos hinaus zurückbringen würde. Dies würde seltsames Verhalten verursachen, daher stoppen wir das Video, indem wir `stopMedia()` aufrufen, entfernen aktiv die Klasse vom Rückspul-Button und löschen das `intervalRwd`-Intervall, um die Rückspul-Funktionalität zu beenden. Wenn wir diesen letzten Schritt nicht setzen würden, würde das Video einfach ewig rückspulen.
   2. Wenn die aktuelle Zeit nicht innerhalb von 3 Sekunden nach dem Beginn des Videos liegt, entfernen wir drei Sekunden von der aktuellen Zeit, indem wir `media.currentTime -= 3` ausführen. In der Tat spulen wir das Video alle 200 Millisekunden um 3 Sekunden zurück.

#### Aktualisieren der verstrichenen Zeit

Das allerletzte Teil unseres Mediaplayers, das noch implementiert werden muss, ist die Anzeige der verstrichenen Zeit. Dazu führen wir eine Funktion aus, um die Zeitangaben bei jedem Auslösen des [`timeupdate`](/de/docs/Web/API/HTMLMediaElement/timeupdate_event)-Ereignisses auf dem `<video>`-Element zu aktualisieren. Die Häufigkeit, mit der dieses Ereignis ausgelöst wird, hängt von Ihrem Browser, der CPU-Leistung usw. ab ([siehe diesen Stack Overflow-Post](https://stackoverflow.com/questions/9678177/how-often-does-the-timeupdate-event-fire-for-an-html5-video)).

1. Fügen Sie die folgende `addEventListener()`-Zeile direkt unter den anderen hinzu:

   ```js
   media.addEventListener("timeupdate", setTime);
   ```

2. Jetzt können wir die `setTime()`-Funktion definieren. Fügen Sie die Folgende am Ende Ihrer Datei hinzu:

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

Dies ist eine recht lange Funktion, also lassen Sie uns sie Schritt für Schritt durchgehen:

1. Zunächst eruieren wir die Anzahl der Minuten und Sekunden im [`HTMLMediaElement.currentTime`](/de/docs/Web/API/HTMLMediaElement/currentTime)-Wert.
2. Danach initialisieren wir zwei weitere Variablen — `minuteValue` und `secondValue`. Wir verwenden {{jsxref("String/padStart", "padStart()")}}, um sicherzustellen, dass jeder Wert 2 Zeichen lang ist, auch wenn der numerische Wert nur einstellig ist.
3. Der anzuzeigende tatsächliche Zeitwert wird als `minuteValue` plus einem Doppelpunktzeichen plus `secondValue` gesetzt.
4. Der [`Node.textContent`](/de/docs/Web/API/Node/textContent)-Wert des Timers wird auf den Zeitwert gesetzt, sodass er in der Benutzeroberfläche angezeigt wird.
5. Die Länge, die wir das innere `<div>`-Element setzen sollten, wird ermittelt, indem wir zunächst die Breite des äußeren `<div>`-Elements ermitteln (ein beliebiges Element hat einen [`clientWidth`](/de/docs/Web/API/Element/clientWidth), der seine Länge enthält), und es dann mit dem [`HTMLMediaElement.currentTime`](/de/docs/Web/API/HTMLMediaElement/currentTime) geteilt durch die gesamte [`HTMLMediaElement.duration`](/de/docs/Web/API/HTMLMediaElement/duration) des Mediums multiplizieren.
6. Wir setzen die Breite des inneren `<div>`-Elements gleich der berechneten Balkenlänge plus "px", sodass es auf diese Anzahl von Pixeln gesetzt wird.

#### Behebung von Wiedergabe und Pause

Es gibt noch ein Problem zu beheben. Wenn die Wiedergabe/Pause- oder Stop-Buttons gedrückt werden, während die Rückspul- oder Vorspulfunktionalität aktiv ist, funktionieren sie einfach nicht. Wie können wir es beheben, damit sie die `rwd`-/`fwd`-Button-Funktionalität abbrechen und das Video wie erwartet abspielen/stoppen? Dies ist relativ leicht zu beheben.

1. Fügen Sie zunächst die folgenden Zeilen innerhalb der `stopMedia()`-Funktion hinzu — die Position spielt keine Rolle:

   ```js
   rwd.classList.remove("active");
   fwd.classList.remove("active");
   clearInterval(intervalRwd);
   clearInterval(intervalFwd);
   ```

2. Fügen Sie jetzt dieselben Zeilen am Anfang der `playPauseMedia()`-Funktion hinzu (direkt vor der If-Bedingung).

3. An diesem Punkt können Sie die entsprechenden Zeilen aus den `windBackward()`- und `windForward()`-Funktionen löschen, da diese Funktionalität in der `stopMedia()`-Funktion implementiert wurde.

> [!NOTE]
> Sie könnten auch die Effizienz des Codes weiter verbessern, indem Sie eine separate Funktion erstellen, die diese Linientauscht und dann überall dort aufruft, wo sie benötigt wird, anstatt die Zeilen mehrmals im Code zu wiederholen. Aber wir überlassen das Ihnen.

## Zusammenfassung

Ich denke, wir haben Ihnen genug in diesem Artikel beigebracht. Die [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-API bietet eine Fülle von Funktionen zum Erstellen einfacher Video- und Audioplayer, und das ist nur die Spitze des Eisbergs. Sehen Sie sich den Abschnitt "Siehe auch" unten für Links zu komplexeren und interessanteren Funktonalitäten an.

Hier sind einige Vorschläge, wie Sie das vorhandene Beispiel, das wir erstellt haben, verbessern könnten:

1. Die Zeitanzeige bricht derzeit zusammen, wenn das Video eine Stunde oder länger dauert (nun, es zeigt keine Stunden an; nur Minuten und Sekunden). Können Sie herausfinden, wie Sie das Beispiel ändern können, um es Stunden anzeigen zu lassen?
2. Da `<audio>`-Elemente die gleiche [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-Funktionalität zur Verfügung haben, könnten Sie diesen Player leicht für ein `<audio>`-Element auch verwenden. Versuchen Sie es.
3. Können Sie herausfinden, wie Sie das innere `<div>`-Element des Timers in eine echte Suchleiste/Scrollleiste verwandeln — d.h. wenn Sie irgendwo auf die Leiste klicken, springt es auf die relative Position in der Videowiedergabe? Einen Hinweis bieten Ihnen die X- und Y-Werte der linken/rechten und oberen/unten Kanten eines Elements, die Sie über die Methode [`getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect) herausfinden können, und Sie können die Koordinaten eines Mausklicks über das Ereignisobjekt des Klickereignisses, das auf das [`Document`](/de/docs/Web/API/Document)-Objekt aufgerufen wird, herausfinden. Zum Beispiel:

   ```js
   document.onclick = function (e) {
     console.log(e.x, e.y);
   };
   ```

## Siehe auch

- [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)
- [HTML video and audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio) — einfacher Leitfaden zu `<video>` und `<audio>` HTML.
- [Audio and video delivery](/de/docs/Web/Media/Guides/Audio_and_video_delivery) — detaillierter Leitfaden zur Bereitstellung von Medien im Browser, mit vielen Tipps, Tricks und Links zu weiteren fortgeschrittenen Tutorials.
- [Audio and video manipulation](/de/docs/Web/Media/Guides/Audio_and_video_manipulation) — detaillierter Leitfaden zur Manipulation von Audio und Video, z. B. mit der [Canvas API](/de/docs/Web/API/Canvas_API), der [Web Audio API](/de/docs/Web/API/Web_Audio_API) und mehr.
- {{htmlelement("video")}} und {{htmlelement("audio")}} Referenzseiten.
- [Guide to media types and formats on the web](/de/docs/Web/Media/Guides/Formats)

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_APIs/Introduction", "Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics", "Learn_web_development/Extensions/Client-side_APIs")}}
