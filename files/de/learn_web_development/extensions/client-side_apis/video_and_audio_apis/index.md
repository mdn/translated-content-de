---
title: Video- und Audio-APIs
short-title: Video und Audio
slug: Learn_web_development/Extensions/Client-side_APIs/Video_and_audio_APIs
l10n:
  sourceCommit: 6ba4f3b350be482ba22726f31bbcf8ad3c92a9c6
---

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_APIs/Introduction", "Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics", "Learn_web_development/Extensions/Client-side_APIs")}}

HTML bietet Elemente zum Einbetten von Multimediadaten in Dokumente – {{htmlelement("video")}} und {{htmlelement("audio")}} –, die wiederum über eigene APIs verfügen, um die Wiedergabe, das Suchen usw. zu steuern. Dieser Artikel zeigt Ihnen, wie man häufige Aufgaben wie die Erstellung benutzerdefinierter Wiedergabesteuerungen durchführt.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>, insbesondere <a href="/de/docs/Learn_web_development/Core/Scripting/Object_basics">JavaScript-Objektgrundlagen</a> und Kern-API-Abdeckungen wie <a href="/de/docs/Learn_web_development/Core/Scripting/DOM_scripting">DOM-Scripting</a> und <a href="/de/docs/Learn_web_development/Core/Scripting/Network_requests">Netzwerkanfragen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        <ul>
          <li>Was Codecs sind und die unterschiedlichen Video- und Audioformate.</li>
          <li>Verstehen der wichtigsten Funktionen im Zusammenhang mit Audio und Video – abspielen, pausieren, stoppen, vor- und zurückspulen, Dauer und aktuelle Zeit.</li>
          <li>Verwendung der <code>HTMLMediaElement</code>-API, um einen einfachen benutzerdefinierten Mediaplayer zu erstellen, für mehr Barrierefreiheit oder mehr Konsistenz zwischen Browsern.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## HTML Video und Audio

Die {{htmlelement("video")}}- und {{htmlelement("audio")}}-Elemente ermöglichen es uns, Videos und Audios in Webseiten einzubetten. Wie wir in [HTML Video und Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio) gezeigt haben, sieht eine typische Implementierung folgendermaßen aus:

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

Dadurch wird ein Videoplayer im Browser wie folgt erstellt:

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

Im oben verlinkten Artikel können Sie alle HTML-Funktionen überprüfen; für unsere Zwecke hier ist das interessanteste Attribut [`controls`](/de/docs/Web/HTML/Reference/Elements/video#controls), das die Standard-Wiedergabesteuerungen aktiviert. Wenn Sie dies nicht angeben, erhalten Sie keine Wiedergabesteuerungen:

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

Dies ist zwar für die Videowiedergabe nicht sofort nützlich, hat jedoch Vorteile. Ein großes Problem bei den nativen Browser-Steuerungen ist, dass sie in jedem Browser unterschiedlich sind – was nicht ideal für die plattformübergreifende Unterstützung ist! Ein weiteres großes Problem ist, dass die nativen Steuerungen in den meisten Browsern nicht sehr tastaturfreundlich sind.

Sie können diese Probleme lösen, indem Sie die nativen Steuerungen ausblenden (durch Entfernen des `controls`-Attributs) und Ihre eigenen mit HTML, CSS und JavaScript programmieren. Im nächsten Abschnitt werden wir uns die grundlegenden Tools ansehen, die uns dafür zur Verfügung stehen.

## Die HTMLMediaElement API

Teil der HTML-Spezifikation, die [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-API bietet Funktionen, mit denen Sie Video- und Audio-Player programmatisch steuern können – zum Beispiel [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play), [`HTMLMediaElement.pause()`](/de/docs/Web/API/HTMLMediaElement/pause) usw. Diese Schnittstelle ist sowohl für {{htmlelement("audio")}}- als auch für {{htmlelement("video")}}-Elemente verfügbar, da die Funktionen, die Sie implementieren möchten, nahezu identisch sind. Lassen Sie uns ein Beispiel durchgehen und dabei Funktionen hinzufügen.

Unser fertiges Beispiel wird ähnlich aussehen und funktionieren wie das folgende:

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

Um mit diesem Beispiel zu beginnen, folgen Sie diesen Schritten:

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

4. Erstellen Sie eine weitere neue Datei im Verzeichnis namens `custom-player.js`. Lassen Sie sie vorerst leer.

An diesem Punkt sollten Sie beim Laden der HTML eine ganz normale HTML-Videoplayer sehen, mit den nativen Steuerelementen visualisiert.

#### Erkundung der HTML

Öffnen Sie die HTML-Indexdatei. Sie werden auf eine Reihe von Funktionen stoßen; die HTML wird von dem Videoplayer und seinen Steuerungen dominiert:

- Der gesamte Player ist in ein {{htmlelement("div")}}-Element eingebettet, sodass er bei Bedarf als eine Einheit gestylt werden kann.
- Das {{htmlelement("video")}}-Element enthält zwei {{htmlelement("source")}}-Elemente, sodass je nach dem Browser, der die Seite anzeigt, verschiedene Formate geladen werden können.
- Die HTML-Steuerelemente sind wahrscheinlich das Interessanteste:
  - Wir haben vier {{htmlelement("button")}}s – abspielen/pausieren, stoppen, zurückspulen und vorspulen.
  - Jedes `<button>` hat einen `class`-Namen, ein `data-icon`-Attribut zum Definieren, welches Symbol auf jedem Button angezeigt werden soll (wir zeigen, wie das im unten stehenden Abschnitt funktioniert), und ein `aria-label`-Attribut, um eine verständliche Beschreibung jedes Buttons bereitzustellen, da wir innerhalb der Tags keine für Menschen lesbaren Etiketten bereitstellen. Die Inhalte der `aria-label`-Attribute werden von Bildschirmlesegeräten vorgelesen, wenn ihre Benutzer die Elemente fokussieren, die sie enthalten.
  - Es gibt auch ein Timer-{{htmlelement("div")}}, das die vergangene Zeit meldet, während das Video abgespielt wird. Nur zum Spaß bieten wir zwei Berichtmechanismen an — ein {{htmlelement("span")}}, das die vergangene Zeit in Minuten und Sekunden enthält, und ein zusätzliches `<div>`, das wir verwenden werden, um eine horizontale Indikatorleiste zu erstellen, die länger wird, wenn die Zeit verstreicht.

#### Erkundung der CSS

Öffnen Sie jetzt die CSS-Datei und sehen Sie hinein. Die CSS für das Beispiel ist nicht zu kompliziert, aber wir werden die interessantesten Teile hier hervorheben. Zuerst einmal beachten Sie das `.controls`-Styling:

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

- Wir beginnen mit der {{cssxref("visibility")}} der benutzerdefinierten Steuerungen auf `hidden`. In unserem JavaScript später stellen wir die Steuerungen auf `visible` ein und entfernen das `controls`-Attribut vom `<video>`-Element. Dies ist so, dass die Benutzer das Video immer noch mit den nativen Steuerungen nutzen können, wenn das JavaScript aus irgendeinem Grund nicht geladen wird.
- Wir geben den Steuerungen standardmäßig eine {{cssxref("opacity")}} von `0.5`, damit sie beim Ansehen des Videos weniger ablenkend sind. Nur wenn Sie mit dem Mauszeiger über den Player fahren oder ihn fokussieren, erscheinen die Steuerungen in voller Opazität.
- Wir ordnen die Schaltflächen innerhalb der Steuerleiste mit Flexbox an ({{cssxref("display")}}: flex), um die Dinge zu erleichtern.

Schauen wir uns als nächstes unsere Button-Symbole an:

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

Zuerst verwenden wir am Anfang der CSS einen {{cssxref("@font-face")}}-Block, um eine benutzerdefinierte Webschrift zu importieren. Dies ist eine Symbolschrift – alle Zeichen des Alphabets entsprechen gängigen Symbolen, die Sie in einer Anwendung verwenden möchten.

Als nächstes verwenden wir erzeugten Inhalt, um ein Symbol auf jedem Button anzuzeigen:

- Wir verwenden den {{cssxref("::before")}}-Selektor, um den Inhalt vor jedem {{htmlelement("button")}}-Element anzuzeigen.
- Wir verwenden die {{cssxref("content")}}-Eigenschaft, um den anzuzeigenden Inhalt in jedem Fall so einzustellen, dass er dem Inhalt des [`data-icon`](/de/docs/Web/HTML/How_to/Use_data_attributes)-Attributs entspricht. Im Fall unseres Play-Buttons enthält `data-icon` ein großes "P".
- Wir wenden die benutzerdefinierte Webschrift auf unsere Schaltflächen an, indem wir {{cssxref("font-family")}} verwenden. In dieser Schriftart ist "P" tatsächlich ein "Play"-Symbol, daher hat die Play-Taste ein "Play"-Symbol darauf angezeigt.

Symbolschriften sind aus vielen Gründen cool – sie reduzieren HTTP-Anfragen, da Sie diese Symbole nicht als Bilddateien herunterladen müssen, bieten eine große Skalierbarkeit und Sie können Textstileigenschaften verwenden, um sie zu gestalten – wie {{cssxref("color")}} und {{cssxref("text-shadow")}}.

Zuletzt, aber nicht zu vergessen, schauen wir uns das CSS für den Timer an:

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

- Wir setzen das äußere `.timer`-Element auf `flex: 5`, sodass es den größten Teil der Breite der Steuerungsleiste einnimmt. Wir geben ihm auch {{cssxref("position", "position: relative")}}, damit wir bequem Elemente innerhalb seiner Grenzen und nicht den Grenzen des {{htmlelement("body")}}-Elements positionieren können.
- Das innere `<div>` ist absolut positioniert, um direkt auf dem äußeren `<div>` zu sitzen. Es erhält auch eine Anfangsbreite von 0, sodass Sie es überhaupt nicht sehen können. Während das Video abgespielt wird, wird die Breite über JavaScript erhöht, während das Video fortschreitet.
- Der `<span>`-Element ist auch absolut positioniert, um sich in der Nähe der linken Seite der Zeitanzeigeleiste zu befinden.
- Wir geben unserem inneren `<div>` und `<span>` auch den richtigen {{cssxref("z-index")}}, damit der Timer oben angezeigt wird und das innere `<div>` darunter. Auf diese Weise stellen wir sicher, dass wir alle Informationen sehen können – ein Feld verdeckt nicht ein anderes.

### Implementierung des JavaScripts

Wir haben bereits eine ziemlich vollständige HTML- und CSS-Oberfläche; nun müssen wir nur noch alle die Buttons miteinander verkabeln, damit die Steuerungen funktionieren.

1. Fügen Sie oben in der `custom-player.js`-Datei den folgenden Code ein:

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

   Hier erstellen wir Konstanten, um Referenzen auf alle Objekte zu halten, die wir manipulieren möchten. Wir haben drei Gruppen:
   - Das `<video>`-Element und die Steuerleiste.
   - Die Tasten für Abspielen/Pause, Stoppen, Rückspulen und Vorspulen.
   - Den äußeren Timer-Wrapper `<div>`, die digitale Timeranzeige `<span>` und das innere `<div>`, das breiter wird, während die Zeit vergeht.

2. Fügen Sie als Nächstes das Folgende am Ende Ihres Codes ein:

   ```js
   media.removeAttribute("controls");
   controls.style.visibility = "visible";
   ```

   Diese beiden Zeilen entfernen die Standard-Browsersteuerungen vom Video und machen die benutzerdefinierten Steuerungen sichtbar.

#### Abspielen und Pausieren des Videos

Lassen Sie uns den wahrscheinlich wichtigsten Steuerung – die Abspielen/Pausieren-Taste – implementieren.

1. Fügen Sie zunächst das folgende am Ende Ihres Codes hinzu, sodass die `playPauseMedia()`-Funktion aufgerufen wird, wenn die Wiedergabetaste geklickt wird:

   ```js
   play.addEventListener("click", playPauseMedia);
   ```

2. Definieren Sie nun `playPauseMedia()` – fügen Sie das Folgende, ebenfalls am Ende Ihres Codes, hinzu:

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

   Hier verwenden wir eine [`if`](/de/docs/Web/JavaScript/Reference/Statements/if...else)-Anweisung, um zu überprüfen, ob das Video angehalten ist. Die [`HTMLMediaElement.paused`](/de/docs/Web/API/HTMLMediaElement/paused)-Eigenschaft gibt `true` zurück, wenn das Medium angehalten ist, was immer der Fall ist, wenn das Video nicht abgespielt wird, einschließlich wenn es nach dem ersten Laden auf 0 Dauer eingestellt ist. Wenn es angehalten ist, setzen wir den Wert des `data-icon`-Attributs auf den Wiedergabeknopf auf "u", ein "Pausen"-Symbol, und rufen die [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play)-Methode auf, um das Medium abzuspielen.

   Beim zweiten Klick wird die Taste wieder zurückgeschaltet – das "Play"-Symbol wird wieder angezeigt und das Video mit [`HTMLMediaElement.pause()`](/de/docs/Web/API/HTMLMediaElement/pause) angehalten.

#### Stoppen des Videos

1. Fügen Sie als Nächstes die Funktionalität hinzu, um das Video zu stoppen. Fügen Sie die folgenden [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)-Zeilen unter den vorherigen hinzu:

   ```js
   stop.addEventListener("click", stopMedia);
   media.addEventListener("ended", stopMedia);
   ```

   Das [`click`](/de/docs/Web/API/Element/click_event)-Ereignis ist offensichtlich – wir möchten das Video stoppen, indem wir unsere `stopMedia()`-Funktion aufrufen, wenn die Stopp-Taste gedrückt wird. Wir möchten das Video jedoch auch stoppen, wenn es fertig abgespielt ist — dies wird erkennbar, indem das [`ended`](/de/docs/Web/API/HTMLMediaElement/ended_event)-Ereignis ausgelöst wird, sodass wir ebenfalls einen Listener einrichten, um die Funktion beim Auslösen dieses Ereignisses auszuführen.

2. Definieren Sie als Nächstes `stopMedia()` — fügen Sie die folgende Funktion unterhalb `playPauseMedia()` hinzu:

   ```js
   function stopMedia() {
     media.pause();
     media.currentTime = 0;
     play.setAttribute("data-icon", "P");
   }
   ```

   Es gibt keine `stop()`-Methode in der HTMLMediaElement-API – das Equivalent ist, das Video zu `pause()`n und seine [`currentTime`](/de/docs/Web/API/HTMLMediaElement/currentTime)-Eigenschaft auf 0 zu setzen. Durch das Festlegen von `currentTime` auf einen Wert (in Sekunden) springt das Medium sofort zu dieser Position.

   Alles, was noch zu tun ist, ist das angezeigte Symbol auf das "Play"-Symbol zu setzen. Unabhängig davon, ob das Video pausiert oder abgespielt wurde, als die Stopptaste gedrückt wurde, möchten Sie, dass es danach bereit ist, abgespielt zu werden.

#### Vor- und Zurückspulen

Es gibt viele Möglichkeiten, die Funktionalität für das Zurückspulen und Vorspulen zu implementieren; hier zeigen wir Ihnen einen relativ komplexen Weg, der nicht kaputt geht, wenn die verschiedenen Tasten in einer unerwarteten Reihenfolge gedrückt werden.

1. Fügen Sie zunächst die folgenden zwei [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)-Zeilen unter den vorherigen hinzu:

   ```js
   rwd.addEventListener("click", mediaBackward);
   fwd.addEventListener("click", mediaForward);
   ```

2. Nun zu den Ereignishandler-Funktionen — fügen Sie den folgenden Code unter Ihren vorherigen Funktionen hinzu, um `mediaBackward()` und `mediaForward()` zu definieren:

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

   Lassen Sie uns `mediaBackward()` durchgehen (die Funktionalität für `mediaForward()` ist genau die gleiche, jedoch umgekehrt):
   1. Wir löschen alle Klassen und Intervalle, die auf die Vorspielfunktionalität gesetzt sind – wir tun dies, weil wir, wenn wir die `rwd`-Taste nach dem Drücken der `fwd`-Taste drücken, die Vorspielfunktionalität abbrechen und sie durch die Zurückspul-Funktionalität ersetzen möchten. Wenn wir versuchten, beide auf einmal zu tun, würde der Player kaputt gehen.
   2. Wir verwenden eine `if`-Anweisung, um zu überprüfen, ob die `active`-Klasse auf dem `rwd`-Button gesetzt ist und darauf hinweist, dass sie bereits gedrückt wurde. Die [`classList`](/de/docs/Web/API/Element/classList) ist eine ziemlich praktische Eigenschaft, die auf jedem Element existiert – sie enthält eine Liste aller Klassen, die auf dem Element gesetzt sind, sowie Methoden zum Hinzufügen/Entfernen von Klassen usw. Wir verwenden die Methode `classList.contains()`, um zu überprüfen, ob die Liste die `active`-Klasse enthält. Dies gibt ein Boolean `true`/`false`-Ergebnis zurück.
   3. Wenn `active` auf dem `rwd`-Button gesetzt wurde, entfernen wir es mit `classList.remove()`, löschen das Intervall, das gesetzt wurde, als der Button zuerst gedrückt wurde (siehe unten für mehr Erklärung), und verwenden [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play), um das Zurückspulen zu beenden und das Video normal abzuspielen.
   4. Wenn es noch nicht gesetzt wurde, fügen wir die `active`-Klasse dem `rwd`-Button mit `classList.add()` hinzu, pausieren das Video mit [`HTMLMediaElement.pause()`](/de/docs/Web/API/HTMLMediaElement/pause), und setzen dann die `intervalRwd`-Variable auf einen [`setInterval()`](/de/docs/Web/API/Window/setInterval)-Aufruf. Wenn aufgerufen, erstellt `setInterval()` ein aktives Intervall, was bedeutet, dass es die Funktion, die als erster Parameter gegeben wird, alle x Millisekunden ausführt, wobei x der Wert des zweiten Parameters ist. Also hier führen wir die Funktion `windBackward()` alle 200 Millisekunden aus – wir werden diese Funktion verwenden, um das Video kontinuierlich rückwärts zu spulen. Um ein [`setInterval()`](/de/docs/Web/API/Window/setInterval) zu stoppen, müssen Sie [`clearInterval()`](/de/docs/Web/API/Window/clearInterval) aufrufen und den identifizierenden Namen des zu löschenden Intervalls angeben, was in diesem Fall der Variablenname `intervalRwd` ist (siehe den `clearInterval()`-Aufruf früher in der Funktion).

3. Zuletzt müssen wir die Funktionen `windBackward()` und `windForward()` definieren, die in den `setInterval()`-Aufrufen aufgerufen werden. Fügen Sie das folgende unter Ihren beiden vorherigen Funktionen hinzu:

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

   Wieder einmal werden wir nur die erste dieser Funktionen durchgehen, da sie fast identisch, aber umgekehrt zu einander arbeiten. In `windBackward()` machen wir Folgendes – bedenken Sie, dass, wenn das Intervall aktiv ist, diese Funktion einmal alle 200 Millisekunden ausgeführt wird.
   1. Wir beginnen mit einer `if`-Anweisung, die prüft, ob die aktuelle Zeit weniger als 3 Sekunden beträgt, d.h. ob das Rückspulen um weitere drei Sekunden über den Anfang des Videos hinausgehen würde. Dies würde seltsame Verhaltensweise verursachen, deshalb, wenn dies der Fall ist, stoppen wir das Abspielen des Videos durch Aufrufen von `stopMedia()`, entfernen die `active`-Klasse von der Zurückspultaste und löschen das `intervalRwd`-Intervall, um die Zurückspulfunktionalität zu stoppen. Wenn wir diesen letzten Schritt nicht machen würden, würde das Video einfach für immer rückwärts spulen.
   2. Wenn die aktuelle Zeit nicht innerhalb von 3 Sekunden des Anfangs des Videos ist, entfernen wir, indem wir `media.currentTime -= 3` ausführen, drei Sekunden von der aktuellen Zeit. So spulen wir das Video im Effekt alle 200 Millisekunden um 3 Sekunden zurück.

#### Aktualisierung der verstrichenen Zeit

Das allerletzte Stück unseres Mediaplayers, das implementiert werden muss, sind die Zeitanzeigen, die die verstrichene Zeit anzeigen. Dazu führen wir eine Funktion aus, die die Zeitanzeigen jedes Mal aktualisiert, wenn das [`timeupdate`](/de/docs/Web/API/HTMLMediaElement/timeupdate_event)-Ereignis auf dem `<video>`-Element ausgelöst wird. Die Häufigkeit, mit der dieses Ereignis ausgelöst wird, hängt von Ihrem Browser, Ihrer CPU-Leistung usw. ab. ([siehe diesen Stack Overflow-Beitrag](https://stackoverflow.com/questions/9678177/how-often-does-the-timeupdate-event-fire-for-an-html5-video)).

1. Fügen Sie die folgende `addEventListener()`-Zeile direkt unter den anderen hinzu:

   ```js
   media.addEventListener("timeupdate", setTime);
   ```

2. Definieren Sie nun die Funktion `setTime()`. Fügen Sie das folgende am Ende Ihrer Datei hinzu:

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

Dies ist eine ziemlich lange Funktion, daher lassen Sie uns sie Schritt für Schritt durchgehen:

1. Zuerst berechnen wir die Anzahl Minuten und Sekunden im [`HTMLMediaElement.currentTime`](/de/docs/Web/API/HTMLMediaElement/currentTime)-Wert.
2. Dann initialisieren wir zwei weitere Variablen — `minuteValue` und `secondValue`. Wir verwenden {{jsxref("String/padStart", "padStart()")}}, um sicherzustellen, dass jeder Wert 2 Zeichen lang ist, selbst wenn der numerische Wert nur eine einstellige Zahl ist.
3. Der tatsächlich anzuzeigende Zeitwert wird als `minuteValue` plus einem Doppelpunkt-Zeichen plus `secondValue` eingestellt.
4. Der [`Node.textContent`](/de/docs/Web/API/Node/textContent)-Wert des Timers wird auf den Zeitwert eingestellt, damit er in der Benutzeroberfläche angezeigt wird.
5. Die Länge, auf die wir das innere `<div>` einstellen sollen, wird berechnet, indem wir zuerst die Breite des äußeren `<div>` berechnen (die [`clientWidth`](/de/docs/Web/API/Element/clientWidth)-Eigenschaft eines Elements enthält seine Länge) und sie dann mit der [`HTMLMediaElement.currentTime`](/de/docs/Web/API/HTMLMediaElement/currentTime) durch die gesamte [`HTMLMediaElement.duration`](/de/docs/Web/API/HTMLMediaElement/duration) des Mediums multiplizieren.
6. Wir stellen die Breite des inneren `<div>` auf die berechnete Längenleiste plus "px" ein, damit sie auf diese Anzahl von Pixeln eingestellt wird.

#### Abspielen und Pausieren anpassen

Es gibt noch ein Problem zu beheben. Wenn die Abspielen/Pausieren- oder Stopptasten gedrückt werden, während die Zurückspulen- oder Vorspulfunktionalität aktiv ist, funktionieren sie einfach nicht. Wie können wir es beheben, dass sie die `rwd`/`fwd`-Button-Funktionalität abbrechen und das Video so abspielen/anhalten, wie Sie es erwarten würden? Dies ist ziemlich einfach zu beheben.

1. Fügen Sie zuerst die folgenden Zeilen in die `stopMedia()`-Funktion hinzu – überall, wo es passt:

   ```js
   rwd.classList.remove("active");
   fwd.classList.remove("active");
   clearInterval(intervalRwd);
   clearInterval(intervalFwd);
   ```

2. Fügen Sie nun die gleichen Zeilen am Anfang der `playPauseMedia()`-Funktion hinzu (direkt vor dem Start der `if`-Anweisung).

3. An diesem Punkt können Sie die entsprechenden Zeilen aus den `windBackward()`- und `windForward()`-Funktionen löschen, da diese Funktionalität stattdessen in der `stopMedia()`-Funktion implementiert wurde.

> [!NOTE]
> Sie könnten auch die Effizienz des Codes weiter verbessern, indem Sie eine separate Funktion erstellen, die diese Zeilen ausführt, und diese dann überall aufrufen, wo sie benötigt werden, anstatt die Zeilen mehrmals im Code zu wiederholen. Aber das überlassen wir Ihnen.

## Zusammenfassung

Ich denke, wir haben Ihnen genug in diesem Artikel beigebracht. Die [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-API bietet eine Fülle von Funktionalitäten, um einfache Video- und Audioplayer zu erstellen, und das ist nur die Spitze des Eisbergs. Siehe den Abschnitt "Siehe auch" unten für Links zu komplexeren und interessanteren Funktionalitäten.

Hier sind einige Vorschläge, wie Sie das bestehende Beispiel, das wir aufgebaut haben, verbessern könnten:

1. Die Zeitanzeige bricht derzeit zusammen, wenn das Video eine Stunde oder länger ist (es wird keine Stunden anzeigen; nur Minuten und Sekunden). Können Sie herausfinden, wie Sie das Beispiel ändern können, um Stunden anzuzeigen?
2. Da `<audio>`-Elemente die gleiche [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-Funktionalität zur Verfügung haben, könnten Sie diesen Player auch leicht auf ein `<audio>`-Element arbeiten lassen. Versuchen Sie dies zu tun.
3. Können Sie einen Weg herausfinden, das Timer-Innen-`<div>`-Element in eine echte Suchleiste/Scroller zu verwandeln – d.h. wenn Sie irgendwo auf die Leiste klicken, springt es zu dieser relativen Position in der Videowiedergabe? Als Hinweis: Sie können die X- und Y-Werte der linken/rechten und oberen/bottom Seiten des Elements über die Methode [`getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect) herausfinden, und Sie können die Koordinaten eines Mausklicks über das Ereignisobjekt des Klickereignisses, das auf dem [`Document`](/de/docs/Web/API/Document) aufgerufen wird, herausfinden. Zum Beispiel:

   ```js
   document.onclick = function (e) {
     console.log(e.x, e.y);
   };
   ```

## Siehe auch

- [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)
- [HTML Video und Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio) — einfacher Leitfaden für `<video>` und `<audio>` HTML.
- [Audio und Video Bereitstellung](/de/docs/Web/Media/Guides/Audio_and_video_delivery) — detaillierter Leitfaden zur Bereitstellung von Medien im Browser, mit vielen Tipps, Tricks und Links zu weiterführenden, fortgeschrittenen Tutorials.
- [Audio und Video Manipulation](/de/docs/Web/Media/Guides/Audio_and_video_manipulation) — detaillierter Leitfaden zur Manipulation von Audio und Video, z.B. mit der [Canvas API](/de/docs/Web/API/Canvas_API), [Web Audio API](/de/docs/Web/API/Web_Audio_API) und mehr.
- {{htmlelement("video")}} und {{htmlelement("audio")}} Referenzseiten.
- [Leitfaden zu Medientypen und Formaten im Web](/de/docs/Web/Media/Guides/Formats)

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_APIs/Introduction", "Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics", "Learn_web_development/Extensions/Client-side_APIs")}}
