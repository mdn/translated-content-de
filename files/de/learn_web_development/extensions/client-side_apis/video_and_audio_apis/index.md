---
title: Video- und Audio-APIs
short-title: Video und Audio
slug: Learn_web_development/Extensions/Client-side_APIs/Video_and_audio_APIs
l10n:
  sourceCommit: 91e08923c809ca8deded3e3294f49bbe1a4a00b3
---

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_APIs/Introduction", "Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics", "Learn_web_development/Extensions/Client-side_APIs")}}

HTML enthält Elemente zum Einbetten umfangreicher Medien in Dokumente — {{htmlelement("video")}} und {{htmlelement("audio")}} — die wiederum über eigene APIs zur Steuerung der Wiedergabe, zum Springen zu Positionen usw. verfügen. Dieser Artikel zeigt Ihnen, wie Sie häufige Aufgaben erledigen, beispielsweise das Erstellen benutzerdefinierter Wiedergabesteuerungen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>, insbesondere mit <a href="/de/docs/Learn_web_development/Core/Scripting/Object_basics">JavaScript-Grundlagen zu Objekten</a> und zentralen API-Themen wie <a href="/de/docs/Learn_web_development/Core/Scripting/DOM_scripting">DOM-Scripting</a> und <a href="/de/docs/Learn_web_development/Core/Scripting/Network_requests">Netzwerkanfragen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        <ul>
          <li>Was Codecs sind und welche verschiedenen Video- und Audioformate es gibt.</li>
          <li>Die wichtigsten Funktionen im Zusammenhang mit Audio und Video verstehen — Wiedergabe, Pause, Stopp, Vor- und Zurückspulen, Dauer und aktuelle Zeit.</li>
          <li>Die <code>HTMLMediaElement</code>-API verwenden, um einen einfachen benutzerdefinierten Media-Player zu erstellen, für bessere Barrierefreiheit oder mehr Konsistenz zwischen Browsern.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## HTML-Video und -Audio

Mit den Elementen {{htmlelement("video")}} und {{htmlelement("audio")}} können wir Video und Audio in Webseiten einbetten. Wie wir in [HTML-Video und -Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio) gezeigt haben, sieht eine typische Implementierung so aus:

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

Dadurch wird im Browser ein Video-Player wie folgt erstellt:

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

Im oben verlinkten Artikel können Sie nachlesen, was alle HTML-Funktionen bewirken; für unsere Zwecke ist hier das interessanteste Attribut [`controls`](/de/docs/Web/HTML/Reference/Elements/video#controls), das den Standardsatz an Wiedergabesteuerungen aktiviert. Wenn Sie dieses nicht angeben, erhalten Sie keine Wiedergabesteuerungen:

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

Für die Videowiedergabe ist dies nicht unmittelbar so nützlich, hat aber Vorteile. Ein großes Problem mit den nativen Browser-Steuerungen besteht darin, dass sie in jedem Browser unterschiedlich sind — nicht besonders gut für browserübergreifende Unterstützung! Ein weiteres großes Problem ist, dass die nativen Steuerungen in den meisten Browsern nicht besonders gut über die Tastatur zugänglich sind.

Sie können beide Probleme lösen, indem Sie die nativen Steuerungen ausblenden (durch Entfernen des `controls`-Attributs) und eigene Steuerungen mit HTML, CSS und JavaScript programmieren. Im nächsten Abschnitt betrachten wir die grundlegenden Werkzeuge, die uns dafür zur Verfügung stehen.

## Die HTMLMediaElement-API

Als Teil der HTML-Spezifikation bietet die [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-API Funktionen, mit denen Sie Video- und Audio-Player programmatisch steuern können — zum Beispiel [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play), [`HTMLMediaElement.pause()`](/de/docs/Web/API/HTMLMediaElement/pause) usw. Diese Schnittstelle steht sowohl für {{htmlelement("audio")}}- als auch für {{htmlelement("video")}}-Elemente zur Verfügung, da die Funktionen, die Sie implementieren möchten, nahezu identisch sind. Lassen Sie uns ein Beispiel durchgehen und dabei schrittweise Funktionen hinzufügen.

Unser fertiges Beispiel wird etwa wie folgt aussehen (und funktionieren):

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

Um mit diesem Beispiel zu beginnen, führen Sie folgende Schritte aus:

1. Erstellen Sie auf Ihrer Festplatte ein neues Verzeichnis namens `custom-video-player`.
2. Erstellen Sie darin eine neue Datei namens `index.html` und füllen Sie sie mit folgendem Inhalt:

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

3. Erstellen Sie darin eine weitere neue Datei namens `style.css` und füllen Sie sie mit folgendem Inhalt:

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

4. Erstellen Sie im Verzeichnis eine weitere neue Datei namens `custom-player.js`. Lassen Sie sie vorerst leer.

Wenn Sie das HTML an dieser Stelle laden, sollten Sie einen vollkommen normalen HTML-Video-Player mit den gerenderten nativen Steuerungen sehen.

#### Das HTML erkunden

Öffnen Sie die HTML-Indexdatei. Sie sehen eine Reihe von Funktionen; das HTML wird vom Video-Player und seinen Steuerungen dominiert:

- Der gesamte Player ist in ein {{htmlelement("div")}}-Element eingeschlossen, sodass bei Bedarf alles als eine Einheit formatiert werden kann.
- Das {{htmlelement("video")}}-Element enthält zwei {{htmlelement("source")}}-Elemente, damit abhängig vom Browser, der die Website betrachtet, unterschiedliche Formate geladen werden können.
- Das HTML der Steuerungen ist vermutlich am interessantesten:
  - Wir haben vier {{htmlelement("button")}}-Elemente — Wiedergabe/Pause, Stopp, Zurückspulen und Vorspulen.
  - Jedes `<button>` verfügt über einen `class`-Namen, ein `data-icon`-Attribut, das festlegt, welches Symbol auf jeder Schaltfläche angezeigt werden soll (wie dies funktioniert, zeigen wir im folgenden Abschnitt), sowie ein `aria-label`-Attribut, das eine verständliche Beschreibung jeder Schaltfläche bereitstellt, da wir innerhalb der Tags keine für Menschen lesbare Beschriftung bereitstellen. Die Inhalte von `aria-label`-Attributen werden von Screenreadern vorgelesen, wenn deren Nutzende den Fokus auf die Elemente setzen, die sie enthalten.
  - Außerdem gibt es ein Timer-{{htmlelement("div")}}, das die vergangene Zeit meldet, während das Video wiedergegeben wird. Der Vollständigkeit halber stellen wir zwei Anzeigemechanismen bereit — ein {{htmlelement("span")}}, das die vergangene Zeit in Minuten und Sekunden enthält, sowie ein zusätzliches `<div>`, das wir verwenden werden, um eine horizontale Anzeigeleiste zu erstellen, die mit fortschreitender Zeit länger wird.

#### Das CSS erkunden

Öffnen Sie nun die CSS-Datei und sehen Sie sich ihren Inhalt an. Das CSS für das Beispiel ist nicht zu kompliziert, aber wir heben hier die interessantesten Teile hervor. Beachten Sie zunächst die Formatierung von `.controls`:

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

- Wir beginnen mit der {{cssxref("visibility")}} der benutzerdefinierten Steuerungen auf `hidden`. Später in unserem JavaScript setzen wir die Steuerungen auf `visible` und entfernen das `controls`-Attribut aus dem `<video>`-Element. So können Nutzende das Video weiterhin mit den nativen Steuerungen verwenden, falls das JavaScript aus irgendeinem Grund nicht geladen wird.
- Wir geben den Steuerungen standardmäßig eine {{cssxref("opacity")}} von `0.5`, damit sie beim Ansehen des Videos weniger ablenken. Erst wenn Sie mit der Maus über den Player fahren oder ihn fokussieren, erscheinen die Steuerungen mit voller Deckkraft.
- Wir ordnen die Schaltflächen innerhalb der Steuerleiste mit Flexbox ({{cssxref("display")}}: flex) an, um die Dinge zu vereinfachen.

Sehen wir uns als Nächstes unsere Schaltflächensymbole an:

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

Zunächst verwenden wir am Anfang des CSS einen {{cssxref("@font-face")}}-Block, um eine benutzerdefinierte Webschriftart zu importieren. Dies ist eine Symbolschriftart — alle Zeichen des Alphabets entsprechen gängigen Symbolen, die Sie möglicherweise in einer Anwendung verwenden möchten.

Als Nächstes verwenden wir generierten Inhalt, um auf jeder Schaltfläche ein Symbol anzuzeigen:

- Wir verwenden den Selektor {{cssxref("::before")}}, um den Inhalt vor jedem {{htmlelement("button")}}-Element anzuzeigen.
- Wir verwenden die Eigenschaft {{cssxref("content")}}, um den in jedem Fall anzuzeigenden Inhalt auf den Inhalt des Attributs [`data-icon`](/de/docs/Web/HTML/How_to/Use_data_attributes) festzulegen. Im Fall unserer Wiedergabe-Schaltfläche enthält `data-icon` ein großes „P“.
- Wir wenden die benutzerdefinierte Webschriftart mit {{cssxref("font-family")}} auf unsere Schaltflächen an. In dieser Schriftart ist „P“ tatsächlich ein „Wiedergabe“-Symbol, daher wird auf der Wiedergabe-Schaltfläche ein Wiedergabe-Symbol angezeigt.

Symbolschriftarten sind aus vielen Gründen praktisch — sie verringern HTTP-Anfragen, weil Sie diese Symbole nicht als Bilddateien herunterladen müssen, bieten hervorragende Skalierbarkeit und ermöglichen es Ihnen, Texteigenschaften wie {{cssxref("color")}} und {{cssxref("text-shadow")}} zum Formatieren zu verwenden.

Zu guter Letzt sehen wir uns das CSS für den Timer an:

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

- Wir setzen für das äußere `.timer`-Element `flex: 5`, sodass es den größten Teil der Breite der Steuerleiste einnimmt. Außerdem geben wir ihm {{cssxref("position", "position: relative")}}, damit wir Elemente darin bequem relativ zu seinen Begrenzungen und nicht zu den Begrenzungen des {{htmlelement("body")}}-Elements positionieren können.
- Das innere `<div>` wird absolut positioniert, sodass es direkt über dem äußeren `<div>` liegt. Außerdem erhält es eine anfängliche Breite von 0, sodass Sie es überhaupt nicht sehen können. Während das Video wiedergegeben wird, wird seine Breite über JavaScript vergrößert, während die Zeit fortschreitet.
- Auch das `<span>` wird absolut positioniert, sodass es nahe der linken Seite der Timer-Leiste liegt.
- Außerdem geben wir unserem inneren `<div>` und `<span>` den richtigen {{cssxref("z-index")}}, sodass der Timer oben und das innere `<div>` darunter angezeigt wird. Auf diese Weise stellen wir sicher, dass alle Informationen sichtbar sind — ein Feld verdeckt kein anderes.

### Das JavaScript implementieren

Wir haben bereits eine ziemlich vollständige HTML- und CSS-Schnittstelle; jetzt müssen wir nur noch alle Schaltflächen verbinden, damit die Steuerungen funktionieren.

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

   Hier erstellen wir Konstanten, die Referenzen auf alle Objekte enthalten, die wir bearbeiten möchten. Wir haben drei Gruppen:
   - Das `<video>`-Element und die Steuerleiste.
   - Die Schaltflächen für Wiedergabe/Pause, Stopp, Zurückspulen und Vorspulen.
   - Das äußere Timer-Wrapper-`<div>`, die digitale Timer-Anzeige `<span>` und das innere `<div>`, das mit fortschreitender Zeit breiter wird.

2. Fügen Sie anschließend am Ende Ihres Codes Folgendes ein:

   ```js
   media.removeAttribute("controls");
   controls.style.visibility = "visible";
   ```

   Diese beiden Zeilen entfernen die Standard-Browser-Steuerungen aus dem Video und machen die benutzerdefinierten Steuerungen sichtbar.

#### Das Video wiedergeben und pausieren

Implementieren wir wahrscheinlich die wichtigste Steuerung — die Schaltfläche für Wiedergabe/Pause.

1. Fügen Sie zunächst Folgendes am Ende Ihres Codes hinzu, damit die Funktion `playPauseMedia()` aufgerufen wird, wenn auf die Wiedergabe-Schaltfläche geklickt wird:

   ```js
   play.addEventListener("click", playPauseMedia);
   ```

2. Nun definieren wir `playPauseMedia()` — fügen Sie erneut am Ende Ihres Codes Folgendes hinzu:

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

   Hier verwenden wir eine [`if`](/de/docs/Web/JavaScript/Reference/Statements/if...else)-Anweisung, um zu prüfen, ob das Video pausiert ist. Die Eigenschaft [`HTMLMediaElement.paused`](/de/docs/Web/API/HTMLMediaElement/paused) gibt true zurück, wenn das Medium pausiert ist, also immer dann, wenn das Video nicht wiedergegeben wird, einschließlich wenn es nach dem ersten Laden bei einer Dauer von 0 eingestellt ist. Wenn es pausiert ist, setzen wir den Wert des `data-icon`-Attributs auf der Wiedergabe-Schaltfläche auf „u“, was ein „Pausiert“-Symbol ist, und rufen die Methode [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play) auf, um das Medium wiederzugeben.

   Beim zweiten Klick wird die Schaltfläche wieder zurückgeschaltet — das „Wiedergabe“-Symbol wird erneut angezeigt und das Video wird mit [`HTMLMediaElement.pause()`](/de/docs/Web/API/HTMLMediaElement/pause) pausiert.

#### Das Video anhalten

1. Als Nächstes fügen wir Funktionen zum Anhalten des Videos hinzu. Fügen Sie die folgenden [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)-Zeilen unter der vorherigen hinzu:

   ```js
   stop.addEventListener("click", stopMedia);
   media.addEventListener("ended", stopMedia);
   ```

   Das [`click`](/de/docs/Web/API/Element/click_event)-Ereignis ist offensichtlich — wir möchten das Video anhalten, indem wir unsere Funktion `stopMedia()` ausführen, wenn auf die Stopp-Schaltfläche geklickt wird. Wir möchten das Video jedoch auch anhalten, wenn seine Wiedergabe beendet ist — dies wird durch das Auslösen des Ereignisses [`ended`](/de/docs/Web/API/HTMLMediaElement/ended_event) gekennzeichnet, daher richten wir auch einen Listener ein, der die Funktion bei Auslösung dieses Ereignisses ausführt.

2. Als Nächstes definieren wir `stopMedia()` — fügen Sie die folgende Funktion unter `playPauseMedia()` hinzu:

   ```js
   function stopMedia() {
     media.pause();
     media.currentTime = 0;
     play.setAttribute("data-icon", "P");
   }
   ```

   Die HTMLMediaElement-API verfügt über keine `stop()`-Methode — das Äquivalent besteht darin, das Video mit `pause()` anzuhalten und seine Eigenschaft [`currentTime`](/de/docs/Web/API/HTMLMediaElement/currentTime) auf 0 zu setzen. Das Setzen von `currentTime` auf einen Wert (in Sekunden) springt sofort zu dieser Position im Medium.

   Danach müssen Sie nur noch das angezeigte Symbol auf das „Wiedergabe“-Symbol setzen. Unabhängig davon, ob das Video pausiert war oder wiedergegeben wurde, als die Stopp-Schaltfläche gedrückt wurde, soll es anschließend zur Wiedergabe bereit sein.

#### Vor- und zurückspringen

Es gibt viele Möglichkeiten, Funktionen zum Zurückspulen und Vorspulen zu implementieren; hier zeigen wir Ihnen eine relativ komplexe Methode, die nicht fehlschlägt, wenn die verschiedenen Schaltflächen in einer unerwarteten Reihenfolge gedrückt werden.

1. Fügen Sie zunächst die folgenden zwei [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)-Zeilen unter den vorherigen hinzu:

   ```js
   rwd.addEventListener("click", mediaBackward);
   fwd.addEventListener("click", mediaForward);
   ```

2. Nun zu den Ereignis-Handler-Funktionen — fügen Sie unter Ihren vorherigen Funktionen den folgenden Code hinzu, um `mediaBackward()` und `mediaForward()` zu definieren:

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

   Sie werden feststellen, dass wir zuerst zwei Variablen initialisieren — `intervalFwd` und `intervalRwd` — später erfahren Sie, wofür sie gedacht sind.

   Gehen wir `mediaBackward()` durch (die Funktionalität von `mediaForward()` ist genau gleich, aber umgekehrt):
   1. Wir entfernen alle Klassen und Intervalle, die für die Vorspul-Funktionalität gesetzt sind — dies tun wir, weil wir beim Drücken der Schaltfläche `rwd` nach dem Drücken der Schaltfläche `fwd` jede Vorspul-Funktionalität abbrechen und durch die Zurückspul-Funktionalität ersetzen möchten. Wenn wir versuchen würden, beides gleichzeitig auszuführen, würde der Player nicht funktionieren.
   2. Wir verwenden eine `if`-Anweisung, um zu prüfen, ob die Klasse `active` auf der Schaltfläche `rwd` gesetzt wurde, was anzeigt, dass sie bereits gedrückt wurde. [`classList`](/de/docs/Web/API/Element/classList) ist eine äußerst praktische Eigenschaft, die für jedes Element vorhanden ist — sie enthält eine Liste aller auf dem Element gesetzten Klassen sowie Methoden zum Hinzufügen/Entfernen von Klassen usw. Wir verwenden die Methode `classList.contains()`, um zu prüfen, ob die Liste die Klasse `active` enthält. Dies gibt ein boolesches Ergebnis `true`/`false` zurück.
   3. Wenn `active` auf der Schaltfläche `rwd` gesetzt wurde, entfernen wir sie mit `classList.remove()`, löschen das Intervall, das beim ersten Drücken der Schaltfläche gesetzt wurde (siehe unten für weitere Erklärungen), und verwenden [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play), um das Zurückspulen abzubrechen und die normale Wiedergabe des Videos zu starten.
   4. Falls sie noch nicht gesetzt wurde, fügen wir der Schaltfläche `rwd` mit `classList.add()` die Klasse `active` hinzu, pausieren das Video mit [`HTMLMediaElement.pause()`](/de/docs/Web/API/HTMLMediaElement/pause) und setzen dann die Variable `intervalRwd` auf einen Aufruf von [`setInterval()`](/de/docs/Web/API/Window/setInterval). Beim Aufruf erstellt `setInterval()` ein aktives Intervall, was bedeutet, dass die als erster Parameter angegebene Funktion alle x Millisekunden ausgeführt wird, wobei x der Wert des zweiten Parameters ist. Hier führen wir also die Funktion `windBackward()` alle 200 Millisekunden aus — wir verwenden diese Funktion, um das Video fortlaufend zurückzuspulen. Um ein laufendes [`setInterval()`](/de/docs/Web/API/Window/setInterval) zu stoppen, müssen Sie [`clearInterval()`](/de/docs/Web/API/Window/clearInterval) aufrufen und ihm den identifizierenden Namen des zu löschenden Intervalls übergeben, der in diesem Fall der Variablenname `intervalRwd` ist (siehe den `clearInterval()`-Aufruf weiter oben in der Funktion).

3. Schließlich müssen wir die Funktionen `windBackward()` und `windForward()` definieren, die in den `setInterval()`-Aufrufen ausgeführt werden. Fügen Sie unter Ihren beiden vorherigen Funktionen Folgendes hinzu:

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

   Wiederum gehen wir nur die erste dieser Funktionen durch, da sie nahezu identisch, aber entgegengesetzt zueinander funktionieren. In `windBackward()` führen wir Folgendes aus — bedenken Sie, dass diese Funktion bei aktivem Intervall alle 200 Millisekunden ausgeführt wird.
   1. Wir beginnen mit einer `if`-Anweisung, die prüft, ob die aktuelle Zeit weniger als 3 Sekunden beträgt, d.h. ob ein weiteres Zurückspulen um drei Sekunden vor den Beginn des Videos zurückführen würde. Dies würde ein merkwürdiges Verhalten verursachen. Daher stoppen wir in diesem Fall die Videowiedergabe durch den Aufruf von `stopMedia()`, entfernen die Klasse `active` von der Zurückspul-Schaltfläche und löschen das Intervall `intervalRwd`, um die Zurückspul-Funktionalität zu beenden. Ohne diesen letzten Schritt würde das Video einfach endlos zurückgespult.
   2. Wenn die aktuelle Zeit nicht innerhalb von 3 Sekunden vom Beginn des Videos liegt, ziehen wir drei Sekunden von der aktuellen Zeit ab, indem wir `media.currentTime -= 3` ausführen. Tatsächlich spulen wir das Video also alle 200 Millisekunden um 3 Sekunden zurück.

#### Die vergangene Zeit aktualisieren

Der allerletzte Teil unseres Media-Players, den wir implementieren müssen, sind die Anzeigen der vergangenen Zeit. Dazu führen wir eine Funktion aus, die die Zeitanzeigen jedes Mal aktualisiert, wenn das Ereignis [`timeupdate`](/de/docs/Web/API/HTMLMediaElement/timeupdate_event) auf dem `<video>`-Element ausgelöst wird. Die Häufigkeit, mit der dieses Ereignis ausgelöst wird, hängt von Ihrem Browser, der CPU-Leistung usw. ab ([siehe diesen Stack-Overflow-Beitrag](https://stackoverflow.com/questions/9678177/how-often-does-the-timeupdate-event-fire-for-an-html5-video)).

1. Fügen Sie direkt unter den anderen die folgende `addEventListener()`-Zeile hinzu:

   ```js
   media.addEventListener("timeupdate", setTime);
   ```

2. Nun definieren wir die Funktion `setTime()`. Fügen Sie am Ende Ihrer Datei Folgendes hinzu:

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

Dies ist eine recht lange Funktion, daher gehen wir sie Schritt für Schritt durch:

1. Zunächst ermitteln wir die Anzahl der Minuten und Sekunden im Wert [`HTMLMediaElement.currentTime`](/de/docs/Web/API/HTMLMediaElement/currentTime).
2. Dann initialisieren wir zwei weitere Variablen — `minuteValue` und `secondValue`. Wir verwenden {{jsxref("String/padStart", "padStart()")}}, damit jeder Wert 2 Zeichen lang ist, auch wenn der numerische Wert nur aus einer einzigen Ziffer besteht.
3. Der tatsächlich anzuzeigende Zeitwert wird als `minuteValue` plus ein Doppelpunktzeichen plus `secondValue` festgelegt.
4. Der Wert [`Node.textContent`](/de/docs/Web/API/Node/textContent) des Timers wird auf den Zeitwert gesetzt, sodass er in der Benutzeroberfläche angezeigt wird.
5. Die Länge, auf die wir das innere `<div>` setzen sollten, wird ermittelt, indem zunächst die Breite des äußeren `<div>` berechnet wird (die Eigenschaft [`clientWidth`](/de/docs/Web/API/Element/clientWidth) eines Elements enthält dessen Länge) und diese dann mit [`HTMLMediaElement.currentTime`](/de/docs/Web/API/HTMLMediaElement/currentTime) geteilt durch die gesamte [`HTMLMediaElement.duration`](/de/docs/Web/API/HTMLMediaElement/duration) des Mediums multipliziert wird.
6. Wir setzen die Breite des inneren `<div>` auf die berechnete Leistenlänge plus „px“, sodass sie auf diese Anzahl von Pixeln gesetzt wird.

#### Wiedergabe und Pause korrigieren

Es bleibt noch ein Problem zu beheben. Wenn die Schaltflächen für Wiedergabe/Pause oder Stopp gedrückt werden, während die Zurückspul- oder Vorspul-Funktionalität aktiv ist, funktionieren sie einfach nicht. Wie können wir es so beheben, dass sie die Funktionalität der Schaltflächen `rwd`/`fwd` abbrechen und das Video wie erwartet wiedergeben/anhalten? Dies lässt sich recht einfach beheben.

1. Fügen Sie zunächst die folgenden Zeilen innerhalb der Funktion `stopMedia()` hinzu — die Position ist beliebig:

   ```js
   rwd.classList.remove("active");
   fwd.classList.remove("active");
   clearInterval(intervalRwd);
   clearInterval(intervalFwd);
   ```

2. Fügen Sie nun dieselben Zeilen ganz am Anfang der Funktion `playPauseMedia()` erneut hinzu (direkt vor Beginn der `if`-Anweisung).

3. An dieser Stelle können Sie die entsprechenden Zeilen aus den Funktionen `windBackward()` und `windForward()` löschen, da diese Funktionalität stattdessen in der Funktion `stopMedia()` implementiert wurde.

> [!NOTE]
> Sie könnten die Effizienz des Codes auch weiter verbessern, indem Sie eine separate Funktion erstellen, welche diese Zeilen ausführt, und sie dann überall dort aufrufen, wo sie benötigt wird, anstatt die Zeilen mehrfach im Code zu wiederholen. Das überlassen wir jedoch Ihnen.

## Zusammenfassung

Ich denke, wir haben Ihnen in diesem Artikel genug vermittelt. Die [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-API stellt eine Fülle von Funktionen zum Erstellen einfacher Video- und Audio-Player bereit, und das ist nur die Spitze des Eisbergs. Weitere komplexe und interessante Funktionen finden Sie im Abschnitt „Siehe auch“ weiter unten.

Hier sind einige Vorschläge, wie Sie das vorhandene Beispiel, das wir erstellt haben, erweitern könnten:

1. Die Zeitanzeige funktioniert derzeit nicht korrekt, wenn das Video eine Stunde oder länger dauert (sie zeigt keine Stunden an, sondern nur Minuten und Sekunden). Können Sie herausfinden, wie Sie das Beispiel ändern können, damit es Stunden anzeigt?
2. Da für `<audio>`-Elemente dieselbe [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-Funktionalität verfügbar ist, könnten Sie diesen Player problemlos auch für ein `<audio>`-Element verwenden. Versuchen Sie es.
3. Können Sie einen Weg finden, das innere `<div>`-Element des Timers in eine echte Suchleiste bzw. einen Scrollbalken umzuwandeln — d.h. wenn Sie auf eine Stelle in der Leiste klicken, springt die Videowiedergabe zu dieser relativen Position? Als Hinweis: Sie können die X- und Y-Werte der linken/rechten und oberen/unteren Seiten des Elements über die Methode [`getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect) ermitteln, und Sie können die Koordinaten eines Mausklicks über das Ereignisobjekt des Klick-Ereignisses herausfinden, das auf dem [`Document`](/de/docs/Web/API/Document)-Objekt aufgerufen wird. Zum Beispiel:

   ```js
   document.onclick = function (e) {
     console.log(e.x, e.y);
   };
   ```

## Siehe auch

- [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)
- [HTML-Video und -Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio) — einfacher Leitfaden zu HTML-`<video>` und `<audio>`.
- [Bereitstellung von Audio und Video](/de/docs/Web/Media/Guides/Audio_and_video_delivery) — detaillierter Leitfaden zur Bereitstellung von Medien im Browser mit vielen Tipps, Tricks und Links zu weiterführenden, fortgeschrittenen Tutorials.
- [Bearbeitung von Audio und Video](/de/docs/Web/Media/Guides/Audio_and_video_manipulation) — detaillierter Leitfaden zur Bearbeitung von Audio und Video, z. B. mit der [Canvas API](/de/docs/Web/API/Canvas_API), der [Web Audio API](/de/docs/Web/API/Web_Audio_API) und mehr.
- Referenzseiten für {{htmlelement("video")}} und {{htmlelement("audio")}}.
- [Leitfaden zu Medientypen und -formaten im Web](/de/docs/Web/Media/Guides/Formats)

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_APIs/Introduction", "Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics", "Learn_web_development/Extensions/Client-side_APIs")}}
