---
title: Video- und Audio-APIs
short-title: Video und Audio
slug: Learn_web_development/Extensions/Client-side_APIs/Video_and_audio_APIs
l10n:
  sourceCommit: 4c58f4735f986a91bee1b77e336143630df727a2
---

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_APIs/Introduction", "Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics", "Learn_web_development/Extensions/Client-side_APIs")}}

HTML bietet Elemente zum Einbetten von Multimedia in Dokumente — {{htmlelement("video")}} und {{htmlelement("audio")}} — die wiederum ihre eigenen APIs zur Steuerung der Wiedergabe, des Suchens usw. besitzen. Dieser Artikel zeigt Ihnen, wie man gängige Aufgaben erledigt, wie z.B. die Erstellung benutzerdefinierter Wiedergabesteuerungen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>, insbesondere <a href="/de/docs/Learn_web_development/Core/Scripting/Object_basics">Grundlagen von JavaScript-Objekten</a> und grundlegende API-Abdeckung wie <a href="/de/docs/Learn_web_development/Core/Scripting/DOM_scripting">DOM-Scripting</a> und <a href="/de/docs/Learn_web_development/Core/Scripting/Network_requests">Netzwerkanfragen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        <ul>
          <li>Was Codecs sind und die verschiedenen Video- und Audioformate.</li>
          <li>Verstehen der Schlüsselfunktionen im Zusammenhang mit Audio und Video — abspielen, pausieren, stoppen, rückwärts und vorwärts suchen, Dauer und aktuelle Zeit.</li>
          <li>Verwendung der <code>HTMLMediaElement</code>-API zum Erstellen eines einfachen benutzerdefinierten Mediaplayers, für bessere Zugänglichkeit oder mehr Konsistenz über Browser hinweg.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## HTML-Video und -Audio

Die Elemente {{htmlelement("video")}} und {{htmlelement("audio")}} ermöglichen es uns, Video und Audio in Webseiten einzubetten. Wie wir in [HTML-Video und -Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio) gezeigt haben, sieht eine typische Implementierung so aus:

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

Dies erstellt einen Videoplayer im Browser, der folgendermaßen aussieht:

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

Sie können in dem oben verlinkten Artikel nachlesen, was all die HTML-Features bewirken; für unsere Zwecke ist das interessanteste Attribut [`controls`](/de/docs/Web/HTML/Reference/Elements/video#controls), das den Standardsatz von Wiedergabesteuerungen aktiviert. Wenn Sie dies nicht angeben, erhalten Sie keine Wiedergabesteuerungen:

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

Dies ist für die Videowiedergabe nicht sofort nützlich, bietet jedoch Vorteile. Ein großes Problem mit den nativen Browser-Steuerungen ist, dass sie in jedem Browser anders sind — nicht sehr gut für plattformübergreifende Unterstützung! Ein weiteres großes Problem ist, dass die nativen Steuerungen in den meisten Browsern kaum über die Tastatur zugänglich sind.

Sie können beide Probleme beheben, indem Sie die nativen Steuerungen ausblenden (durch Entfernen des `controls`-Attributs) und Ihre eigenen mit HTML, CSS und JavaScript programmieren. Im nächsten Abschnitt betrachten wir die grundlegenden Werkzeuge, die wir zur Verfügung haben, um dies zu tun.

## Die HTMLMediaElement API

Teil der HTML-Spezifikation, die [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) API stellt Funktionen bereit, die es Ihnen ermöglichen, Video- und Audioplayer programmatisch zu steuern — zum Beispiel [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play), [`HTMLMediaElement.pause()`](/de/docs/Web/API/HTMLMediaElement/pause) usw. Diese Schnittstelle steht sowohl {{htmlelement("audio")}}- als auch {{htmlelement("video")}}-Elementen zur Verfügung, da die Features, die Sie implementieren möchten, fast identisch sind. Lassen Sie uns ein Beispiel durchgehen und dabei Funktionen hinzufügen.

Unser fertiges Beispiel wird wie folgt aussehen (und funktionieren):

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

### Erste Schritte

Um mit diesem Beispiel zu beginnen, folgen Sie diesen Schritten:

1. Erstellen Sie ein neues Verzeichnis auf Ihrer Festplatte mit dem Namen `custom-video-player`.
2. Erstellen Sie eine neue Datei darin mit dem Namen `index.html` und füllen Sie sie mit folgendem Inhalt:

   ```html
   <!doctype html>
   <html lang="en-gb">
     <head>
       <meta charset="utf-8" />
       <meta name="viewport" content="width=device-width" />
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

4. Erstellen Sie eine weitere neue Datei im Verzeichnis mit dem Namen `custom-player.js`. Lassen Sie sie zunächst leer.

Wenn Sie zu diesem Zeitpunkt das HTML laden, sollten Sie einen ganz normalen HTML-Videoplayer mit den nativen Steuerungen sehen.

#### Erkundung des HTML

Öffnen Sie die HTML-Indexdatei. Sie werden eine Reihe von Features sehen; das HTML wird durch den Videoplayer und seine Steuerungen dominiert:

- Der gesamte Player ist in ein {{htmlelement("div")}}-Element eingeschlossen, sodass er bei Bedarf als Einheit gestylt werden kann.
- Das {{htmlelement("video")}}-Element enthält zwei {{htmlelement("source")}}-Elemente, sodass verschiedene Formate abhängig vom Browser, der die Seite anzeigt, geladen werden können.
- Das HTML der Steuerungen ist wahrscheinlich das interessanteste:
  - Wir haben vier {{htmlelement("button")}}s — Wiedergabe/Pause, Stopp, Rücklauf und Vorlauf.
  - Jeder `<button>` hat einen `class`-Namen, ein `data-icon`-Attribut zur Definition, welches Symbol auf jedem Button angezeigt werden soll (wir zeigen später, wie dies funktioniert), und ein `aria-label`-Attribut, um eine verständliche Beschreibung jedes Buttons bereitzustellen, da wir im Inneren der Tags keine menschenlesbare Beschriftung bereitstellen. Der Inhalt der `aria-label`-Attribute wird von Screenreadern vorgelesen, wenn sich Benutzer auf die Elemente konzentrieren, die sie enthalten.
  - Es gibt auch einen Timer-{{htmlelement("div")}}, der die vergangene Zeit anzeigt, wenn das Video abgespielt wird. Nur zum Spaß bieten wir zwei Berichtmechanismen — einen {{htmlelement("span")}}, der die vergangene Zeit in Minuten und Sekunden enthält, und ein zusätzliches `<div>`, das wir verwenden, um eine horizontale Indikatorleiste zu erzeugen, die länger wird, während die Zeit abläuft.

#### Erkundung des CSS

Öffnen Sie nun die CSS-Datei und sehen Sie hinein. Das CSS für das Beispiel ist nicht allzu kompliziert, aber wir heben hier die interessantesten Teile hervor. Zuerst fällt das `.controls`-Styling auf:

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

- Wir beginnen mit der {{cssxref("visibility")}} der benutzerdefinierten Steuerungen, die auf `hidden` gesetzt ist. In unserem JavaScript später setzen wir die Steuerungen auf `visible` und entfernen das `controls`-Attribut vom `<video>`-Element. Dies dient dazu, dass, falls das JavaScript aus irgendeinem Grund nicht geladen wird, die Benutzer das Video dennoch mit den nativen Steuerungen verwenden können.
- Wir geben den Steuerungen eine {{cssxref("opacity")}} von `0.5` standardmäßig, damit sie weniger ablenkend sind, wenn Sie versuchen, das Video anzusehen. Nur wenn Sie über den Player fahren bzw. ihn fokussieren, erscheinen die Steuerungen mit voller Opazität.
- Wir legen die Buttons in der Steuerleiste mithilfe von Flexbox ({{cssxref("display")}}: flex) an, um die Sache zu erleichtern.

Schauen wir uns als Nächstes unsere Buttonsymbole an:

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

Zuerst verwenden wir ein {{cssxref("@font-face")}}-Block am Anfang des CSS, um eine benutzerdefinierte Webschriftart zu importieren. Dies ist eine Icon-Schriftart — alle Buchstaben des Alphabets entsprechen allgemeinen Symbolen, die Sie in einer Anwendung verwenden könnten.

Als Nächstes verwenden wir generierte Inhalte, um ein Symbol auf jedem Button anzuzeigen:

- Wir verwenden den {{cssxref("::before")}}-Selektor, um den Inhalt vor jedem {{htmlelement("button")}}-Element anzuzeigen.
- Wir verwenden die {{cssxref("content")}}-Eigenschaft, um den anzuzeigenden Inhalt in jedem Fall gleich dem Inhalt des [`data-icon`](/de/docs/Web/HTML/How_to/Use_data_attributes) Attributs zu setzen. Im Fall unseres Wiedergabebuttons enthält `data-icon` ein großes "P".
- Wir wenden die benutzerdefinierte Webschriftart auf unsere Buttons mit {{cssxref("font-family")}} an. In dieser Schriftart ist "P" tatsächlich ein "Wiedergabe"-Symbol, daher hat der Wiedergabebutton ein "Wiedergabe"-Symbol darauf angezeigt.

Icon-Schriftarten sind aus vielen Gründen cool — sie reduzieren HTTP-Anfragen, weil Sie diese Symbole nicht als Bilddateien herunterladen müssen, sie bieten großartige Skalierbarkeit und Sie können Text-Eigenschaften nutzen, um sie zu stylen — wie {{cssxref("color")}} und {{cssxref("text-shadow")}}.

Last but not least, schauen wir uns das CSS für den Timer an:

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

- Wir setzen das äußere `.timer`-Element auf `flex: 5`, damit es den größten Teil der Breite der Steuerleiste einnimmt. Wir geben ihm auch {{cssxref("position", "position: relative")}}, damit wir Elemente darin bequem nach seinen Grenzen positionieren können und nicht nach den Grenzen des {{htmlelement("body")}}-Elements.
- Das innere `<div>` ist völlig positioniert, um direkt oben auf dem äußeren `<div>` zu sitzen. Es hat auch eine anfängliche Breite von 0, sodass Sie es überhaupt nicht sehen können. Während das Video abspielt, wird die Breite über JavaScript erhöht, während das Video abläuft.
- Das `<span>` ist ebenfalls absolut positioniert, um in der Nähe der linken Seite der Timerleiste zu sitzen.
- Wir geben unserem inneren `<div>` und `<span>` auch den richtigen {{cssxref("z-index")}}, damit der Timer oben angezeigt wird und das innere `<div>` darunter. Auf diese Weise stellen wir sicher, dass wir alle Informationen sehen können — eine Box verdeckt keine andere.

### Implementierung des JavaScript

Wir haben bereits eine ziemlich komplette HTML- und CSS-Oberfläche; jetzt müssen wir nur noch alle Buttons anschließen, um die Steuerungen funktionsfähig zu machen.

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
   - Das `<video>`-Element und die Steuerleiste.
   - Die Buttons für Wiedergabe/Pause, Stopp, Rücklauf und Vorlauf.
   - Der äußere Timer-Rahmen `<div>`, die digitale Timeranzeige `<span>` und das innere `<div>`, das breiter wird, während die Zeit abläuft.

2. Fügen Sie als Nächstes Folgendes unten in Ihrem Code ein:

   ```js
   media.removeAttribute("controls");
   controls.style.visibility = "visible";
   ```

   Diese zwei Zeilen entfernen die Standard-Browser-Steuerungen vom Video und machen die benutzerdefinierten Steuerungen sichtbar.

#### Abspielen und Pausieren des Videos

Lassen Sie uns wahrscheinlich die wichtigste Steuerung implementieren — den Wiedergabe-/Pause-Button.

1. Fügen Sie zunächst Folgendes am Ende Ihres Codes hinzu, damit die `playPauseMedia()`-Funktion aufgerufen wird, wenn der Play-Button geklickt wird:

   ```js
   play.addEventListener("click", playPauseMedia);
   ```

2. Nun zur Definition von `playPauseMedia()` — fügen Sie Folgendes, erneut am Ende Ihres Codes, hinzu:

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

   Hier verwenden wir eine [`if`](/de/docs/Web/JavaScript/Reference/Statements/if...else)-Anweisung, um zu prüfen, ob das Video pausiert ist. Die Eigenschaft [`HTMLMediaElement.paused`](/de/docs/Web/API/HTMLMediaElement/paused) gibt true zurück, wenn das Medium pausiert ist, was jederzeit der Fall ist, wenn das Video nicht abgespielt wird, einschließlich wenn es bei 0 Dauer eingestellt ist, nachdem es geladen wurde. Wenn es pausiert ist, setzen wir den Wert des `data-icon`-Attributs auf dem Playbutton auf "u", was ein "pausiert"-Symbol ist, und rufen die Methode [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play) auf, um das Medium abzuspielen.

   Beim zweiten Klick wird der Button wieder umgeschaltet — das "Wiedergabe"-Symbol wird erneut angezeigt, und das Video wird mit [`HTMLMediaElement.pause()`](/de/docs/Web/API/HTMLMediaElement/pause) pausiert.

#### Stoppen des Videos

1. Als Nächstes fügen wir Funktionalität hinzu, um das Video zu stoppen. Fügen Sie die folgenden [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)-Zeilen unter den vorherigen hinzu:

   ```js
   stop.addEventListener("click", stopMedia);
   media.addEventListener("ended", stopMedia);
   ```

   Das [`click`](/de/docs/Web/API/Element/click_event)-Ereignis ist offensichtlich — wir möchten das Video stoppen, indem wir unsere `stopMedia()`-Funktion ausführen, wenn der Stopbutton gedrückt wird. Wir möchten jedoch auch das Video stoppen, wenn es fertig abgespielt ist — dies wird durch das [`ended`](/de/docs/Web/API/HTMLMediaElement/ended_event)-Ereignis markiert, sodass wir auch einen Listener einrichten, um die Funktion bei Eintreten dieses Ereignisses auszuführen.

2. Als Nächstes definieren wir `stopMedia()` — fügen Sie die folgende Funktion unter `playPauseMedia()` hinzu:

   ```js
   function stopMedia() {
     media.pause();
     media.currentTime = 0;
     play.setAttribute("data-icon", "P");
   }
   ```

   Es gibt keine `stop()`-Methode in der HTMLMediaElement-API — das Äquivalent ist das `pauschen()` des Videos und das Setzen seiner [`currentTime`](/de/docs/Web/API/HTMLMediaElement/currentTime)-Eigenschaft auf 0. Durch das Setzen von `currentTime` auf einen Wert (in Sekunden) springt das Medium sofort zu dieser Position.

   Alles, was danach noch zu tun ist, ist das angezeigte Symbol auf das "Wiedergabe"-Symbol zu setzen. Unabhängig davon, ob das Video pausiert oder abgespielt wurde, wenn der Stopbutton gedrückt wird, möchten Sie, dass es danach bereit zum Abspielen ist.

#### Rückwärts und Vorwärts suchen

Es gibt viele Möglichkeiten, Rücklauf- und Vorlauf-Funktionalität zu implementieren; hier zeigen wir Ihnen einen relativ komplexen Weg, der nicht kaputt geht, wenn die verschiedenen Buttons in einer unerwarteten Reihenfolge gedrückt werden.

1. Fügen Sie zunächst die folgenden zwei [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)-Zeilen unter den vorherigen hinzu:

   ```js
   rwd.addEventListener("click", mediaBackward);
   fwd.addEventListener("click", mediaForward);
   ```

2. Nun zu den Ereignis-Handler-Funktionen — fügen Sie den folgenden Code unter Ihren vorherigen Funktionen ein, um `mediaBackward()` und `mediaForward()` zu definieren:

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

   Sie bemerken, dass wir zuerst zwei Variablen initialisieren — `intervalFwd` und `intervalRwd` — Sie werden später erfahren, wofür sie da sind.

   Lassen Sie uns durch `mediaBackward()` gehen (die Funktionalität für `mediaForward()` ist genau die gleiche, jedoch umgekehrt):
   1. Wir löschen alle Klassen und Intervalle, die auf die Vorlauffunktion gesetzt sind — das machen wir, weil, wenn wir den `rwd`-Button nach dem Drücken des `fwd`-Buttons drücken, wir jegliche Vorlauffunktionalität abbrechen und durch Rücklauffunktionalität ersetzen möchten. Wenn wir versuchen würden, beides gleichzeitig zu tun, würde der Player kaputtgehen.
   2. Wir verwenden eine `if`-Anweisung, um zu überprüfen, ob die `active`-Klasse auf dem `rwd`-Knopf gesetzt wurde, was darauf hinweist, dass er bereits gedrückt wurde. Die [`classList`](/de/docs/Web/API/Element/classList) ist eine ziemlich praktische Eigenschaft, die auf jedem Element existiert — sie enthält eine Liste aller auf dem Element gesetzten Klassen sowie Methoden zum Hinzufügen/Entfernen von Klassen usw. Wir verwenden die Methode `classList.contains()`, um zu überprüfen, ob die Liste die `active`-Klasse enthält. Dies ergibt ein boolesches `true`/`false`-Ergebnis.
   3. Wenn `active` auf dem `rwd`-Button gesetzt wurde, entfernen wir es mit `classList.remove()`, löschen das Intervall, das gesetzt wurde, als der Button zuerst gedrückt wurde (siehe unten für mehr Erklärung) und verwenden [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play), um den Rücklauf abzubrechen und das Video normal abzuspielen.
   4. Wenn es noch nicht gesetzt wurde, fügen wir die `active`-Klasse zum `rwd`-Button mit `classList.add()` hinzu, pausieren das Video mit [`HTMLMediaElement.pause()`](/de/docs/Web/API/HTMLMediaElement/pause), und setzen dann die Variable `intervalRwd` auf einen [`setInterval()`](/de/docs/Web/API/Window/setInterval)-Aufruf. Wenn `setInterval()` aufgerufen wird, erstellt es ein aktives Intervall, was bedeutet, dass es die gegebene Funktion als ersten Parameter alle x Millisekunden ausführt, wobei x der Wert des zweiten Parameters ist. Hier lassen wir die `windBackward()`-Funktion alle 200 Millisekunden laufen — wir werden diese Funktion nutzen, um das Video ständig rückwärts zu spulen. Um ein [`setInterval()`](/de/docs/Web/API/Window/setInterval) zu stoppen, müssen Sie [`clearInterval()`](/de/docs/Web/API/Window/clearInterval) aufrufen, wobei Sie den identifizierenden Namen des Intervalls angeben, das gestoppt werden soll, in diesem Fall der Variablenname `intervalRwd` (siehe den `clearInterval()`-Aufruf weiter oben in der Funktion).

3. Schließlich müssen wir die `windBackward()` und `windForward()` Funktionen definieren, die in den `setInterval()`-Aufrufen aufgerufen werden. Fügen Sie das folgende unterhalb Ihrer beiden vorherigen Funktionen hinzu:

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

   Auch hier werden wir nur die erste dieser Funktionen durchgehen, da sie fast identisch funktionieren, jedoch in umgekehrter Richtung zueinander. In `windBackward()` tun wir Folgendes — beachten Sie, dass diese Funktion einmal alle 200 Millisekunden ausgeführt wird, während das Intervall aktiv ist.
   1. Wir beginnen mit einer `if`-Anweisung, die überprüft, ob die aktuelle Zeit weniger als 3 Sekunden beträgt, d.h. ob der Rücklauf um weitere drei Sekunden sie vor den Anfang des Videos zurückspulen würde. Dies würde seltsames Verhalten verursachen, also stoppen wir, wenn dies der Fall ist, das Video, indem wir `stopMedia()` aufrufen, entfernen die `active`-Klasse vom Rücklaufknopf und löschen das Intervall `intervalRwd`, um die Rücklauffunktionalität zu stoppen. Wenn wir diesen letzten Schritt nicht tun würden, würde das Video einfach für immer zurückspulen.
   2. Wenn die aktuelle Zeit nicht innerhalb von 3 Sekunden nach dem Start des Videos liegt, entfernen wir 3 Sekunden von der aktuellen Zeit, indem wir `media.currentTime -= 3` ausführen. Wir spulen das Video also in der Praxis um 3 Sekunden zurück, einmal alle 200 Millisekunden.

#### Aktualisieren der vergangenen Zeit

Das letzte Stück unseres Mediaplayers, das zu implementieren ist, sind die vergangene Zeit-Anzeigen. Dazu führen wir eine Funktion zum Aktualisieren der Zeitanzeigen jedes Mal aus, wenn das [`timeupdate`](/de/docs/Web/API/HTMLMediaElement/timeupdate_event)-Ereignis auf dem `<video>`-Element ausgelöst wird. Die Häufigkeit, mit der dieses Ereignis ausgelöst wird, hängt von Ihrem Browser, CPU-Leistung usw. ab. ([siehe diesen Stack Overflow Post](https://stackoverflow.com/questions/9678177/how-often-does-the-timeupdate-event-fire-for-an-html5-video)).

1. Fügen Sie die folgende `addEventListener()`-Zeile direkt unter die anderen hinzu:

   ```js
   media.addEventListener("timeupdate", setTime);
   ```

2. Nun zur Definition der `setTime()`-Funktion. Fügen Sie Folgendes am Ende Ihrer Datei hinzu:

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

Dies ist eine ziemlich lange Funktion, lassen Sie uns sie daher Schritt für Schritt durchgehen:

1. Zuerst berechnen wir die Anzahl der Minuten und Sekunden im [`HTMLMediaElement.currentTime`](/de/docs/Web/API/HTMLMediaElement/currentTime)-Wert.
2. Dann initialisieren wir zwei weitere Variablen — `minuteValue` und `secondValue`. Wir verwenden {{jsxref("String/padStart", "padStart()")}}, um jeden Wert auf 2 Zeichen zu verlängern, selbst wenn der numerische Wert nur eine Ziffer ist.
3. Der tatsächlich anzuzeigende Zeitwert wird als `minuteValue` plus einem Doppelpunkt-Zeichen plus `secondValue` festgelegt.
4. Der [`Node.textContent`](/de/docs/Web/API/Node/textContent)-Wert des Timers wird auf den Zeitwert gesetzt, sodass er in der Benutzeroberfläche angezeigt wird.
5. Die Länge, die wir auf das innere `<div>` setzen sollten, wird berechnet, indem wir zuerst die Breite des äußeren `<div>` (die [`clientWidth`](/de/docs/Web/API/Element/clientWidth)-Eigenschaft eines Elements enthält ihre Länge) herausfinden und es dann mit der Division von [`HTMLMediaElement.currentTime`](/de/docs/Web/API/HTMLMediaElement/currentTime) durch die gesamte [`HTMLMediaElement.duration`](/de/docs/Web/API/HTMLMediaElement/duration) des Mediums multiplizieren.
6. Wir setzen die Breite des inneren `<div>` auf gleich der berechneten Balkenlänge plus "px", sodass sie auf diese Anzahl von Pixeln gesetzt wird.

#### Behebung von Wiedergabe und Pause

Es gibt ein Problem, das behoben werden muss. Wenn die Wiedergabe-/Pause- oder Stoppbuttons gedrückt werden, während die Rücklauf- oder Vorlauffunktionalität aktiv ist, funktionieren sie einfach nicht. Wie können wir das beheben, damit sie die `rwd`/`fwd`-Button-Funktionalität abbrechen und das Video so abspielen/stoppen, wie Sie es erwarten würden? Das ist ziemlich einfach zu beheben.

1. Fügen Sie zuerst die folgenden Zeilen in die `stopMedia()`-Funktion ein — überall funktioniert:

   ```js
   rwd.classList.remove("active");
   fwd.classList.remove("active");
   clearInterval(intervalRwd);
   clearInterval(intervalFwd);
   ```

2. Fügen Sie nun dieselben Zeilen erneut ganz am Anfang der `playPauseMedia()`-Funktion ein (direkt vor Beginn der `if`-Anweisung).

3. An dieser Stelle können Sie die entsprechenden Zeilen aus den `windBackward()` und `windForward()` Funktionen löschen, da diese Funktionalität im `stopMedia()`-Funktion implementiert wurde.

> [!NOTE]
> Sie könnten die Effizienz des Codes weiter verbessern, indem Sie eine separate Funktion erstellen, die diese Zeilen ausführt, und dann diese Funktion überall dort aufrufen, wo sie benötigt wird, anstatt die Zeilen mehrfach im Code zu wiederholen. Aber wir überlassen das Ihnen.

## Zusammenfassung

Ich denke, wir haben Ihnen in diesem Artikel genug beigebracht. Die [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) API macht eine Fülle von Funktionen verfügbar, um einfache Video- und Audioplayer zu erstellen, und das ist nur die Spitze des Eisbergs. Siehe den Abschnitt "Siehe auch" unten für Links zu komplexerer und interessanterer Funktionalität.

Hier sind einige Vorschläge, wie Sie das bestehende Beispiel, das wir erarbeitet haben, erweitern könnten:

1. Die Zeitanzeige bricht derzeit zusammen, wenn das Video eine Stunde oder länger ist (nun, es zeigt keine Stunden an; nur Minuten und Sekunden). Können Sie herausfinden, wie man das Beispiel ändern könnte, um Stunden anzuzeigen?
2. Da `<audio>`-Elemente die gleiche [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-Funktionalität zur Verfügung haben, könnten Sie diesen Player auch für ein `<audio>`-Element funktionsfähig machen. Versuchen Sie es.
3. Können Sie einen Weg herausfinden, um das innere `<div>` Element des Timers in eine echte Fortschrittsanzeige/Scroller zu verwandeln — d.h. wenn Sie irgendwo auf die Leiste klicken, springt es zu dieser relativen Position in der Videowiedergabe? Als Hinweis, Sie können die X- und Y-Werte der linken/rechten und oberen/unteren Seiten des Elements über die Methode [`getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect) herausfinden, und Sie können die Koordinaten eines Mausklicks über das Ereignisobjekt des Klickevents herausfinden, das auf dem [`Document`](/de/docs/Web/API/Document)-Objekt aufgerufen wird. Beispielsweise:

   ```js
   document.onclick = function (e) {
     console.log(e.x, e.y);
   };
   ```

## Siehe auch

- [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)
- [HTML-Video und -Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio) — einfacher Leitfaden zu `<video>` und `<audio>` HTML.
- [Audio- und Videolieferung](/de/docs/Web/Media/Guides/Audio_and_video_delivery) — detaillierter Leitfaden zur Bereitstellung von Medien im Browser, mit vielen Tipps, Tricks und Links zu weiterführenden, fortgeschritteneren Tutorials.
- [Audio- und Videobearbeitung](/de/docs/Web/Media/Guides/Audio_and_video_manipulation) — detaillierter Leitfaden zur Bearbeitung von Audio und Video, z.B. mit der [Canvas API](/de/docs/Web/API/Canvas_API), [Web Audio API](/de/docs/Web/API/Web_Audio_API) und mehr.
- {{htmlelement("video")}} und {{htmlelement("audio")}} Referenzseiten.
- [Leitfaden zu Medientypen und -formaten im Web](/de/docs/Web/Media/Guides/Formats)

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_APIs/Introduction", "Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics", "Learn_web_development/Extensions/Client-side_APIs")}}
