---
title: Video- und Audio-APIs
short-title: Video und Audio
slug: Learn_web_development/Extensions/Client-side_APIs/Video_and_audio_APIs
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_APIs/Introduction", "Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics", "Learn_web_development/Extensions/Client-side_APIs")}}

HTML bietet Elemente zum Einbetten von Rich-Media in Dokumente — {{htmlelement("video")}} und {{htmlelement("audio")}} — die jeweils eigene APIs zum Steuern der Wiedergabe, zum Suchen usw. haben. Dieser Artikel zeigt Ihnen, wie Sie häufige Aufgaben wie das Erstellen benutzerdefinierter Wiedergabesteuerungen erledigen können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>, insbesondere mit den <a href="/de/docs/Learn_web_development/Core/Scripting/Object_basics">Grundlagen von JavaScript-Objekten</a> und zentralen API-Themen wie <a href="/de/docs/Learn_web_development/Core/Scripting/DOM_scripting">DOM-Scripting</a> und <a href="/de/docs/Learn_web_development/Core/Scripting/Network_requests">Netzwerkanfragen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        <ul>
          <li>Was Codecs sind und die verschiedenen Video- und Audioformate verstehen.</li>
          <li>Verstehen der wichtigsten Funktionalitäten im Zusammenhang mit Audio und Video — Abspielen, Pause, Stopp, rückwärts und vorwärts suchen, Dauer und aktuelle Zeit.</li>
          <li>Verwendung der <code>HTMLMediaElement</code>-API, um einen grundlegenden benutzerdefinierten Mediaplayer zu erstellen, um bessere Zugänglichkeit oder mehr Konsistenz über verschiedene Browser hinweg zu erreichen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## HTML Video und Audio

Die {{htmlelement("video")}}- und {{htmlelement("audio")}}-Elemente ermöglichen das Einbetten von Video und Audio in Webseiten. Wie wir im Artikel [HTML Video und Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio) gezeigt haben, sieht eine typische Implementierung so aus:

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

Dies erzeugt einen Videoplayer innerhalb des Browsers, der so aussieht:

{{EmbedGHLiveSample("learning-area/html/multimedia-and-embedding/video-and-audio-content/multiple-video-formats.html", '100%', 380)}}

Sie können überprüfen, was alle HTML-Features im oben verlinkten Artikel bewirken; für unsere Zwecke hier ist das interessanteste Attribut [`controls`](/de/docs/Web/HTML/Reference/Elements/video#controls), das die Standardsatz von Wiedergabesteuerungen aktiviert. Wenn Sie dies nicht angeben, erhalten Sie keine Wiedergabesteuerungen:

{{EmbedGHLiveSample("learning-area/html/multimedia-and-embedding/video-and-audio-content/multiple-video-formats-no-controls.html", '100%', 380)}}

Dies ist nicht sofort nützlich für die Videowiedergabe, hat aber Vorteile. Ein großes Problem mit den nativen Browsersteuerungen ist, dass sie in jedem Browser unterschiedlich sind — nicht sehr gut für die plattformübergreifende Unterstützung! Ein weiteres großes Problem ist, dass die nativen Steuerungen in den meisten Browsern nicht sehr gut per Tastatur zugänglich sind.

Sie können beide Probleme lösen, indem Sie die nativen Steuerungen ausblenden (durch Entfernen des `controls`-Attributs) und Ihre eigenen mit HTML, CSS und JavaScript programmieren. Im nächsten Abschnitt werden wir uns die grundlegenden Werkzeuge ansehen, die wir dafür zur Verfügung haben.

## Die HTMLMediaElement API

Teil der HTML-Spezifikation, bietet die [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) API Funktionen, die es ermöglichen, Video- und Audioplayer programmatisch zu steuern — zum Beispiel [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play), [`HTMLMediaElement.pause()`](/de/docs/Web/API/HTMLMediaElement/pause) usw. Diese Schnittstelle steht sowohl den {{htmlelement("audio")}}- als auch den {{htmlelement("video")}}-Elementen zur Verfügung, da die Funktionen, die Sie implementieren möchten, nahezu identisch sind. Lassen Sie uns durch ein Beispiel gehen und nach und nach Funktionen hinzufügen.

Unser fertiges Beispiel sieht (und funktioniert) ungefähr so aus:

{{EmbedGHLiveSample("learning-area/javascript/apis/video-audio/finished/", '100%', 360)}}

### Erste Schritte

Um mit diesem Beispiel zu beginnen, [laden Sie unser media-player-start.zip herunter](https://github.com/mdn/learning-area/blob/main/javascript/apis/video-audio/start/media-player-start.zip) und entpacken Sie es in ein neues Verzeichnis auf Ihrer Festplatte. Wenn Sie [unser Examples-Repo heruntergeladen haben](https://github.com/mdn/learning-area), finden Sie es in `javascript/apis/video-audio/start/`.

An diesem Punkt sollten Sie, wenn Sie das HTML laden, einen ganz normalen HTML-Videoplayer mit den nativen Steuerungen sehen.

#### Erkundung des HTML

Öffnen Sie die HTML-Indexdatei. Sie werden eine Reihe von Features sehen; das HTML wird von dem Videoplayer und seinen Steuerelementen beherrscht:

```html
<div class="player">
  <video controls>
    <source src="video/sintel-short.mp4" type="video/mp4" />
    <source src="video/sintel-short.webm" type="video/webm" />
    <!-- fallback content here -->
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
```

- Der gesamte Player ist in ein {{htmlelement("div")}}-Element gewickelt, sodass er bei Bedarf als eine Einheit gestylt werden kann.
- Das {{htmlelement("video")}}-Element enthält zwei {{htmlelement("source")}}-Elemente, sodass je nach dem Browser, der die Seite betrachtet, unterschiedliche Formate geladen werden können.
- Der HTML-Code für die Steuerungen ist wahrscheinlich der interessanteste:
  - Wir haben vier {{htmlelement("button")}}s — Wiedergabe/Pause, Stopp, Zurückspulen und Vorspulen.
  - Jeder `<button>` hat einen `class`-Namen, ein `data-icon`-Attribut, um zu definieren, welches Symbol auf jedem Button angezeigt werden soll (wir zeigen, wie das im folgenden Abschnitt funktioniert), und ein `aria-label`-Attribut, um eine verständliche Beschreibung jedes Buttons bereitzustellen, da wir innerhalb der Tags keine für Menschen lesbare Beschriftung anbieten. Die Inhalte der `aria-label`-Attribute werden von Screenreadern vorgelesen, wenn ihre Nutzer sich auf die Elemente konzentrieren, die sie enthalten.
  - Es gibt auch einen Timer-{{htmlelement("div")}}, der die verstrichene Zeit angibt, wenn das Video abgespielt wird. Nur zum Spaß stellen wir zwei Berichtsmechanismen zur Verfügung — ein {{htmlelement("span")}}, das die verstrichene Zeit in Minuten und Sekunden enthält, und ein zusätzliches `<div>`, das wir verwenden, um eine horizontale Indikatorleiste zu erstellen, die länger wird, je länger die Zeit vergeht. Um eine Vorstellung davon zu bekommen, wie das fertige Produkt aussehen wird, [sehen Sie sich unsere fertige Version an](https://mdn.github.io/learning-area/javascript/apis/video-audio/finished/).

#### Erkundung des CSS

Öffnen Sie nun die CSS-Datei und schauen Sie hinein. Das CSS für das Beispiel ist nicht allzu kompliziert, aber wir heben hier die interessantesten Teile hervor. Zunächst einmal beachten Sie das `.controls`-Styling:

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

- Wir beginnen mit der {{cssxref("visibility")}} der benutzerdefinierten Steuerungen, die auf `hidden` gesetzt ist. Später in unserem JavaScript setzen wir die Steuerungen auf `visible` und entfernen das `controls`-Attribut vom `<video>`-Element. Das ist so, dass die Nutzer das Video immer noch mit den nativen Steuerungen verwenden können, falls das JavaScript aus irgendeinem Grund nicht lädt.
- Wir geben den Steuerungen standardmäßig eine {{cssxref("opacity")}} von 0,5, damit sie weniger ablenkend sind, wenn Sie sich das Video ansehen möchten. Nur wenn Sie über den Player schweben oder sich darauf fokussieren, erscheinen die Steuerungen mit voller Deckkraft.
- Wir legen die Buttons innerhalb der Steuerungsleiste mit Flexbox ({{cssxref("display")}}: flex) aus, um die Dinge zu erleichtern.

Als Nächstes sehen wir uns unsere Button-Symbole an:

```css
@font-face {
  font-family: "HeydingsControlsRegular";
  src: url("fonts/heydings_controls-webfont.eot");
  src:
    url("fonts/heydings_controls-webfont.eot?#iefix")
      format("embedded-opentype"),
    url("fonts/heydings_controls-webfont.woff") format("woff"),
    url("fonts/heydings_controls-webfont.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}

button:before {
  font-family: HeydingsControlsRegular;
  font-size: 20px;
  position: relative;
  content: attr(data-icon);
  color: #aaa;
  text-shadow: 1px 1px 0px black;
}
```

Zuerst verwenden wir oben im CSS einen {{cssxref("@font-face")}}-Block, um eine benutzerdefinierte Web-Schriftart zu importieren. Dies ist eine Symbolschriftart — alle Buchstaben des Alphabets entsprechen gängigen Symbolen, die Sie in einer Anwendung verwenden möchten.

Als nächstes verwenden wir generierten Inhalt, um ein Symbol auf jedem Button anzuzeigen:

- Wir verwenden den {{cssxref("::before")}}-Selektor, um den Inhalt vor jedem {{htmlelement("button")}}-Element anzuzeigen.
- Wir verwenden die {{cssxref("content")}}-Eigenschaft, um den Inhalt festzulegen, der in jedem Fall gleich dem Inhalt des [`data-icon`](/de/docs/Web/HTML/How_to/Use_data_attributes)-Attributs ist. Im Fall unseres Wiedergabe-Buttons enthält `data-icon` ein großes "P".
- Wir wenden die benutzerdefinierte Web-Schriftart auf unsere Buttons mit {{cssxref("font-family")}} an. In dieser Schriftart ist "P" tatsächlich ein "Wiedergabe"-Symbol, daher hat der Wiedergabe-Button ein "Wiedergabe"-Symbol darauf angezeigt.

Symbolschriften sind aus vielen Gründen sehr nützlich — da Sie keine Symbole als Bilddateien herunterladen müssen, reduzieren sie die Anzahl der HTTP-Anfragen, sie sind hervorragend skalierbar und Sie können Texteigenschaften verwenden, um sie zu stylen — wie {{cssxref("color")}} und {{cssxref("text-shadow")}}.

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

- Wir setzen das äußere `.timer`-Element auf `flex: 5`, sodass es den Großteil der Breite der Steuerungsleiste einnimmt. Wir geben ihm auch {{cssxref("position", "position: relative")}}, damit wir Elemente darin bequem gemäß seinen Grenzen und nicht gemäß den Grenzen des {{htmlelement("body")}}-Elements positionieren können.
- Das innere `<div>` ist absolut positioniert, um direkt auf dem äußeren `<div>` zu sitzen. Es hat auch eine anfängliche Breite von 0, sodass Sie es überhaupt nicht sehen können. Während das Video abgespielt wird, wird die Breite per JavaScript erhöht, sobald das Video abläuft.
- Das `<span>` ist ebenfalls absolut positioniert, um sich in der Nähe der linken Seite der Timer-Leiste zu befinden.
- Wir geben unserem inneren `<div>` und `<span>` auch die richtige {{cssxref("z-index")}}, damit der Timer oben angezeigt wird und das innere `<div>` darunter. Auf diese Weise stellen wir sicher, dass alle Informationen sichtbar sind — eine Box verbirgt nicht die andere.

### Implementierung des JavaScript

Wir haben bereits eine ziemlich vollständige HTML- und CSS-Oberfläche; jetzt müssen wir nur alle Buttons verbinden, um die Steuerungen zum Laufen zu bringen.

1. Erstellen Sie eine neue JavaScript-Datei im selben Verzeichnisebene wie Ihre Datei index.html. Nennen Sie sie `custom-player.js`.
2. Am Anfang dieser Datei fügen Sie den folgenden Code ein:

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

   - Das `<video>`-Element und die Steuerungsleiste.
   - Die Wiedergabe-/Pause-, Stopp-, Rückspul- und Vorspul-Buttons.
   - Das äußere Zeitrahmen-`<div>`, die digitale Zeitangabe-`<span>` und das innere `<div>`, das breiter wird, sobald die Zeit vergeht.

3. Fügen Sie als Nächstes Folgendes am Ende Ihres Codes ein:

   ```js
   media.removeAttribute("controls");
   controls.style.visibility = "visible";
   ```

   Diese zwei Zeilen entfernen die Standard-Browser-Steuerungen vom Video und machen die benutzerdefinierten Steuerungen sichtbar.

#### Abspielen und Pausieren des Videos

Lassen Sie uns die wahrscheinlich wichtigste Steuerung implementieren — den Wiedergabe/Pause-Button.

1. Fügen Sie zunächst die folgende Funktion am Ende Ihres Codes hinzu, damit die `playPauseMedia()`-Funktion aufgerufen wird, wenn der Wiedergabe-Button angeklickt wird:

   ```js
   play.addEventListener("click", playPauseMedia);
   ```

2. Definieren Sie jetzt `playPauseMedia()` — fügen Sie Folgendes erneut am Ende Ihres Codes hinzu:

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

   Hier verwenden wir eine [`if`](/de/docs/Web/JavaScript/Reference/Statements/if...else)-Anweisung, um zu prüfen, ob das Video pausiert ist. Die [`HTMLMediaElement.paused`](/de/docs/Web/API/HTMLMediaElement/paused)-Eigenschaft gibt true zurück, wenn das Medium pausiert ist, was jedes Mal der Fall ist, wenn das Video nicht abgespielt wird, auch wenn es nach dem ersten Laden auf 0 Dauer gesetzt ist. Wenn es pausiert ist, setzen wir den `data-icon`-Attributswert auf dem Wiedergabe-Button auf "u", was ein "pausiertes" Symbol ist, und rufen die [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play)-Methode auf, um das Medium abzuspielen.

   Beim zweiten Klick wird der Button wieder zurückgesetzt — das "Wiedergabe"-Symbol wird erneut angezeigt und das Video wird mit [`HTMLMediaElement.pause()`](/de/docs/Web/API/HTMLMediaElement/pause) pausiert.

#### Stoppen des Videos

1. Fügen Sie anschließend Funktionalität hinzu, um das Video zu stoppen. Fügen Sie die folgenden [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)-Zeilen unterhalb der vorherigen hinzu:

   ```js
   stop.addEventListener("click", stopMedia);
   media.addEventListener("ended", stopMedia);
   ```

   Das [`click`](/de/docs/Web/API/Element/click_event)-Ereignis ist offensichtlich — wir möchten das Video stoppen, indem wir unsere `stopMedia()`-Funktion ausführen, wenn der Stopp-Button angeklickt wird. Wir möchten jedoch auch das Video stoppen, wenn es mit der Wiedergabe fertig ist — dies tritt auf, wenn das [`ended`](/de/docs/Web/API/HTMLMediaElement/ended_event)-Ereignis ausgelöst wird, also richten wir auch einen Listener ein, um die Funktion zu starten, wenn dieses Ereignis eintritt.

2. Definieren Sie als nächstes `stopMedia()` — fügen Sie die folgende Funktion unterhalb von `playPauseMedia()` hinzu:

   ```js
   function stopMedia() {
     media.pause();
     media.currentTime = 0;
     play.setAttribute("data-icon", "P");
   }
   ```

   Es gibt keine `stop()`-Methode in der HTMLMediaElement-API — das Äquivalent besteht darin, das Video zu `pause()`, und dessen [`currentTime`](/de/docs/Web/API/HTMLMediaElement/currentTime)-Eigenschaft auf 0 zu setzen. Wenn `currentTime` auf einen Wert (in Sekunden) gesetzt wird, springt das Medium sofort zu dieser Position.

   Alles, was danach noch zu tun ist, besteht darin, das angezeigte Symbol auf das "Wiedergabe"-Symbol zu setzen. Unabhängig davon, ob das Video pausiert oder abgespielt wird, wenn der Stopp-Button gedrückt wird, möchten Sie, dass es anschließend bereit ist, abgespielt zu werden.

#### Zurück- und Vorspulen

Es gibt viele Möglichkeiten, Rückwärts- und Vorwärts-Suchfunktionen zu implementieren; hier zeigen wir Ihnen eine relativ komplexe Möglichkeit, die nicht kaputt geht, wenn die verschiedenen Buttons in unerwarteter Reihenfolge gedrückt werden.

1. Fügen Sie zunächst die folgenden zwei [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)-Zeilen unterhalb der vorherigen hinzu:

   ```js
   rwd.addEventListener("click", mediaBackward);
   fwd.addEventListener("click", mediaForward);
   ```

2. Gehen wir nun zu den Event-Handler-Funktionen über — fügen Sie den folgenden Code unter Ihren vorherigen Funktionen hinzu, um `mediaBackward()` und `mediaForward()` zu definieren:

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

   Sie werden bemerken, dass wir zunächst zwei Variablen initialisieren — `intervalFwd` und `intervalRwd` — Sie werden später erfahren, wofür sie sind.

   Lassen Sie uns durch `mediaBackward()` gehen (die Funktionalität für `mediaForward()` ist genau gleich, aber umgekehrt):

   1. Wir löschen alle Klassen und Intervalle, die bei der Vorwärtsfunktion gesetzt sind — dies tun wir, weil wir, wenn wir den `rwd`-Button nach dem Drücken des `fwd`-Buttons drücken, jegliche Vorwärtsfunktionalität abbrechen und durch die Rückspul-Funktionalität ersetzen möchte. Wenn wir beide gleichzeitig versuchen würden auszuführen, würden wir den Player beschädigen.
   2. Wir verwenden eine `if`-Anweisung, um zu überprüfen, ob die `active`-Klasse auf dem `rwd`-Button gesetzt wurde, was darauf hinweist, dass sie bereits gedrückt wurde. Die [`classList`](/de/docs/Web/API/Element/classList) ist eine recht praktische Eigenschaft, die auf jedem Element existiert — sie enthält eine Liste aller auf dem Element gesetzten Klassen sowie Methoden zum Hinzufügen/Entfernen von Klassen usw. Wir verwenden die `classList.contains()`-Methode, um zu prüfen, ob die Liste die `active`-Klasse enthält. Dies gibt ein boolesches `true`/`false`-Ergebnis zurück.
   3. Wenn `active` auf dem `rwd`-Button gesetzt wurde, entfernen wir es mit `classList.remove()`, löschen das Intervall, das beim ersten Drücken des Buttons gesetzt wurde (siehe unten für mehr Erklärung), und verwenden [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play), um das Rückspulen zu beenden und das Video normal abzuspielen.
   4. Wenn es noch nicht gesetzt wurde, fügen wir die `active`-Klasse dem `rwd`-Button hinzu, indem wir `classList.add()` verwenden, das Video mit [`HTMLMediaElement.pause()`](/de/docs/Web/API/HTMLMediaElement/pause) anhalten, und setzen dann die `intervalRwd`-Variable gleich einem Aufruf von [`setInterval()`](/de/docs/Web/API/Window/setInterval). Wenn `setInterval()` aufgerufen wird, wird ein aktives Intervall erstellt, d.h. die Funktion, die als erster Parameter angegeben wird, wird alle x Millisekunden ausgeführt, wobei x der Wert des zweiten Parameters ist. Also rufen wir hier die `windBackward()`-Funktion alle 200 Millisekunden auf — wir verwenden diese Funktion, um das Video ständig zurückzuwickeln. Um ein [`setInterval()`](/de/docs/Web/API/Window/setInterval) zu stoppen, müssen Sie [`clearInterval()`](/de/docs/Web/API/Window/clearInterval) aufrufen, wobei der identifizierende Name des Intervalls, das gelöscht werden soll, in diesem Fall der Variablenname `intervalRwd` ist (siehe den `clearInterval()`-Aufruf früher in der Funktion).

3. Schließlich müssen wir die `windBackward()`- und `windForward()`-Funktionen definieren, die in den `setInterval()`-Aufrufen aufgerufen werden. Fügen Sie das folgende unterhalb Ihrer beiden vorherigen Funktionen hinzu:

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

   Auch hier werden wir nur durch die erste dieser Funktionen gehen, da sie fast identisch, aber umgekehrt zu einander arbeiten. In `windBackward()` führen wir die folgenden Schritte aus — beachten Sie, dass diese Funktion einmal alle 200 Millisekunden aufgerufen wird, wenn das Intervall aktiv ist.

   1. Wir beginnen mit einer `if`-Anweisung, die prüft, ob die aktuelle Zeit weniger als 3 Sekunden beträgt, d.h. ob das Zurückspulen um weitere drei Sekunden das Video über den Anfang hinaus zurückführen würde. Dies würde ein merkwürdiges Verhalten hervorrufen, weshalb wir in diesem Fall das Video mit `stopMedia()` stoppen, die `active`-Klasse vom Rückspul-Button entfernen und das `intervalRwd`-Intervall löschen, um die Rückspul-Funktionalität zu stoppen. Wenn wir diesen letzten Schritt nicht gemacht hätten, würde das Video einfach auf ewig zurückspulen.
   2. Wenn die aktuelle Zeit nicht innerhalb von 3 Sekunden des Videoanfangs liegt, ziehen wir drei Sekunden von der aktuellen Zeit, indem wir `media.currentTime -= 3` ausführen. Somit spulen wir das Video effektiv alle 200 Millisekunden um 3 Sekunden zurück.

#### Aktualisierung der vergangenen Zeit

Das letzte Stück unseres Mediaplayers, das wir umsetzen müssen, sind die Anzeigen der verstrichenen Zeit. Dazu werden wir eine Funktion ausführen, um die Zeitanzeigen jedes Mal zu aktualisieren, wenn das [`timeupdate`](/de/docs/Web/API/HTMLMediaElement/timeupdate_event) Ereignis auf dem `<video>`-Element ausgelöst wird. Die Häufigkeit, mit der dieses Ereignis ausgelöst wird, hängt von Ihrem Browser, der CPU-Leistung usw. ab. ([Siehe diesen Stack Overflow-Post](https://stackoverflow.com/questions/9678177/how-often-does-the-timeupdate-event-fire-for-an-html5-video)).

Fügen Sie die folgende `addEventListener()`-Zeile direkt unterhalb der anderen hinzu:

```js
media.addEventListener("timeupdate", setTime);
```

Jetzt definieren wir die `setTime()`-Funktion. Fügen Sie Folgendes am Ende Ihrer Datei hinzu:

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

Das ist eine ziemlich lange Funktion, daher gehen wir sie Schritt für Schritt durch:

1. Zuerst berechnen wir die Anzahl der Minuten und Sekunden im Wert [`HTMLMediaElement.currentTime`](/de/docs/Web/API/HTMLMediaElement/currentTime).
2. Dann initialisieren wir zwei weitere Variablen — `minuteValue` und `secondValue`. Wir verwenden {{jsxref("String/padStart", "padStart()")}}, um sicherzustellen, dass jeder Wert 2 Zeichen lang ist, auch wenn der numerische Wert nur einstellig ist.
3. Der tatsächlich anzuzeigende Zeitwert wird als `minuteValue` plus einem Doppelpunkt plus `secondValue` gesetzt.
4. Der [`Node.textContent`](/de/docs/Web/API/Node/textContent)-Wert des Timers wird auf den Zeitwert gesetzt, sodass er in der Benutzeroberfläche angezeigt wird.
5. Die Breite, die wir für das innere `<div>` festlegen sollten, wird ermittelt, indem zuerst die Breite des äußeren `<div>` ermittelt wird (jede`clientWidth`-Eigenschaft eines Elements enthält seine Länge), und dann mit der [`HTMLMediaElement.currentTime`](/de/docs/Web/API/HTMLMediaElement/currentTime) multipliziert wird, geteilt durch die gesamte [`HTMLMediaElement.duration`](/de/docs/Web/API/HTMLMediaElement/duration) des Mediums.
6. Wir setzen die Breite des inneren `<div>` auf die berechnete Balkenlänge, plus "px", sodass es auf diese Anzahl von Pixeln gesetzt wird.

#### Play und Pause beheben

Es gibt noch ein Problem zu beheben. Wenn die Wiedergabe/Pause- oder Stopp-Tasten gedrückt werden, während die Rückspul- oder Vorspulfunktionalität aktiv ist, funktionieren sie einfach nicht. Wie können wir das so beheben, dass sie `rwd`/`fwd`-Button-Funktionalität abbrechen und das Video wie erwartet abspielen/stoppen? Das ist ziemlich einfach zu beheben.

Fügen Sie zunächst die folgenden Zeilen in die `stopMedia()`-Funktion ein — egal wo:

```js
rwd.classList.remove("active");
fwd.classList.remove("active");
clearInterval(intervalRwd);
clearInterval(intervalFwd);
```

Fügen Sie nun dieselben Zeilen erneut ganz am Anfang der `playPauseMedia()`-Funktion hinzu (direkt vor Beginn der `if`-Anweisung).

An dieser Stelle könnten Sie die gleichwertigen Zeilen aus den Funktionen `windBackward()` und `windForward()` löschen, da diese Funktionalität stattdessen in der `stopMedia()`-Funktion implementiert wurde.

Hinweis: Sie könnten auch die Effizienz des Codes weiter verbessern, indem Sie eine separate Funktion erstellen, die diese Zeilen ausführt, und dann überall dort aufrufen, wo sie benötigt wird, anstatt die Zeilen mehrfach im Code zu wiederholen. Aber wir überlassen das Ihnen.

## Zusammenfassung

Ich denke, wir haben Ihnen in diesem Artikel genug beigebracht. Die [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-API bietet eine Vielzahl von Funktionen zum Erstellen einfacher Video- und Audioplayer, und das ist nur die Spitze des Eisbergs. Siehe den Abschnitt "Siehe auch" unten für Links zu komplexeren und interessanteren Funktionen.

Hier sind einige Vorschläge, wie Sie das bestehende Beispiel, das wir aufgebaut haben, verbessern könnten:

1. Die Zeitanzeige bricht derzeit zusammen, wenn das Video eine Stunde oder länger dauert (naja, es zeigt keine Stunden an; nur Minuten und Sekunden). Können Sie herausfinden, wie Sie das Beispiel ändern können, um Stunden anzuzeigen?
2. Da `<audio>`-Elemente dieselbe [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-Funktionalität zur Verfügung steht, könnten Sie diesen Player auch leicht für ein `<audio>`-Element funktionieren lassen. Versuchen Sie es.
3. Können Sie einen Weg finden, um das innere `<div>`-Element des Timers in eine echte Suchleiste/Scroller zu verwandeln — d.h. wenn Sie irgendwo auf die Leiste klicken, springt es an diese relative Position in der Videowiedergabe? Als Hinweis: Sie können die X- und Y-Werte der linken/rechten und oberen/unteren Seiten des Elements mithilfe der [`getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect)-Methode herausfinden, und Sie können die Koordinaten eines Mausklicks über das Ereignisobjekt des Klickereignisses ermitteln, das auf das [`Document`](/de/docs/Web/API/Document)-Objekt aufgerufen wird. Zum Beispiel:

   ```js
   document.onclick = function (e) {
     console.log(e.x, e.y);
   };
   ```

## Siehe auch

- [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)
- [HTML Video und Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio) — einfacher Leitfaden zu `<video>` und `<audio>` HTML.
- [Audio und Video Bereitstellung](/de/docs/Web/Media/Guides/Audio_and_video_delivery) — detaillierter Leitfaden zur Bereitstellung von Medien im Browser, mit vielen Tipps, Tricks und Links zu weiteren fortgeschrittenen Tutorials.
- [Audio- und Videobearbeitung](/de/docs/Web/Media/Guides/Audio_and_video_manipulation) — detaillierter Leitfaden zur Bearbeitung von Audio und Video, z.B. mit [Canvas API](/de/docs/Web/API/Canvas_API), [Web Audio API](/de/docs/Web/API/Web_Audio_API) und mehr.
- {{htmlelement("video")}} und {{htmlelement("audio")}} Referenzseiten.
- [Leitfaden zu Medientypen und Formaten im Web](/de/docs/Web/Media/Guides/Formats)

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_APIs/Introduction", "Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics", "Learn_web_development/Extensions/Client-side_APIs")}}
