---
title: Video- und Audio-APIs
short-title: Video und Audio
slug: Learn_web_development/Extensions/Client-side_APIs/Video_and_audio_APIs
l10n:
  sourceCommit: 2530db14de9ac226cf06f84540fa0101e804ca9b
---

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_APIs/Introduction", "Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics", "Learn_web_development/Extensions/Client-side_APIs")}}

HTML bietet Elemente zum Einbetten von reichhaltigen Medien in Dokumente — {{htmlelement("video")}} und {{htmlelement("audio")}} — die wiederum ihre eigenen APIs zum Steuern der Wiedergabe, zum Suchen usw. bieten. Dieser Artikel zeigt Ihnen, wie Sie gängige Aufgaben wie das Erstellen benutzerdefinierter Wiedergabesteuerungen ausführen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>, insbesondere <a href="/de/docs/Learn_web_development/Core/Scripting/Object_basics">JavaScript-Objektgrundlagen</a> und grundlegende API-Abdeckung wie <a href="/de/docs/Learn_web_development/Core/Scripting/DOM_scripting">DOM-Skripting</a> und <a href="/de/docs/Learn_web_development/Core/Scripting/Network_requests">Netzwerkanfragen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Zielsetzung:</th>
      <td>
        <ul>
          <li>Was Codecs sind und die verschiedenen Video- und Audioformate.</li>
          <li>Verstehen der Schlüssel-Funktionalität, die mit Audio und Video verbunden ist — abspielen, pausieren, stoppen, vor- und zurücksuchen, Dauer und aktuelle Zeit.</li>
          <li>Verwendung der <code>HTMLMediaElement</code>-API, um einen einfachen benutzerdefinierten Media-Player zu erstellen, für bessere Barrierefreiheit oder mehr Konsistenz zwischen Browsern.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## HTML-Video und -Audio

Die {{htmlelement("video")}}- und {{htmlelement("audio")}}-Elemente erlauben es uns, Videos und Audios in Webseiten einzubetten. Wie wir in [HTML-Video und -Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio) gezeigt haben, sieht eine typische Implementierung so aus:

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

{{EmbedGHLiveSample("learning-area/html/multimedia-and-embedding/video-and-audio-content/multiple-video-formats.html", '100%', 380)}}

Sie können in dem oben verlinkten Artikel überprüfen, was alle HTML-Funktionen tun; für unsere Zwecke hier ist das interessanteste Attribut [`controls`](/de/docs/Web/HTML/Reference/Elements/video#controls), das das Standardsatz von Wiedergabesteuerungen aktiviert. Wenn Sie dies nicht angeben, erhalten Sie keine Wiedergabesteuerungen:

{{EmbedGHLiveSample("learning-area/html/multimedia-and-embedding/video-and-audio-content/multiple-video-formats-no-controls.html", '100%', 380)}}

Dies ist nicht so unmittelbar nützlich für die Videowiedergabe, hat jedoch Vorteile. Ein großes Problem mit den nativen Browsersteuerungen ist, dass sie sich in jedem Browser unterscheiden — nicht sehr gut für die plattformübergreifende Unterstützung! Ein weiteres großes Problem ist, dass die nativen Steuerungen in den meisten Browsern nicht sehr tastaturfreundlich sind.

Sie können beide dieser Probleme lösen, indem Sie die nativen Steuerungen ausblenden (indem Sie das `controls`-Attribut entfernen) und Ihre eigenen mit HTML, CSS und JavaScript programmieren. Im nächsten Abschnitt werfen wir einen Blick auf die grundlegenden Werkzeuge, die uns dafür zur Verfügung stehen.

## Die HTMLMediaElement API

Teil der HTML-Spezifikation, die [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) API bietet Funktionen, um Video- und Audioplayer programmatisch zu steuern — zum Beispiel [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play), [`HTMLMediaElement.pause()`](/de/docs/Web/API/HTMLMediaElement/pause) usw. Diese Schnittstelle ist sowohl für {{htmlelement("audio")}}- als auch für {{htmlelement("video")}}-Elemente verfügbar, da die Funktionen, die Sie implementieren möchten, nahezu identisch sind. Lassen Sie uns ein Beispiel durchgehen und dabei Funktionen hinzufügen.

Unser fertiges Beispiel wird in etwa wie folgt aussehen (und funktionieren):

{{EmbedGHLiveSample("learning-area/javascript/apis/video-audio/finished/", '100%', 360)}}

### Erste Schritte

Um mit diesem Beispiel zu beginnen, [laden Sie unser media-player-start.zip herunter](https://github.com/mdn/learning-area/blob/main/javascript/apis/video-audio/start/media-player-start.zip) und entpacken Sie es in ein neues Verzeichnis auf Ihrer Festplatte. Wenn Sie [unser Repo mit Beispielen heruntergeladen haben](https://github.com/mdn/learning-area), finden Sie es unter `javascript/apis/video-audio/start/`.

An diesem Punkt sollten Sie, wenn Sie das HTML laden, einen ganz normalen HTML-Videoplayer mit gerenderten nativen Steuerungen sehen.

#### Erkunden des HTML

Öffnen Sie die HTML-Indexdatei. Sie werden eine Anzahl von Funktionen sehen; das HTML wird durch den Videoplayer und seine Steuerungen dominiert:

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

- Der gesamte Player ist in einem {{htmlelement("div")}}-Element eingebettet, sodass er als eine Einheit gestylt werden kann, falls benötigt.
- Das {{htmlelement("video")}}-Element enthält zwei {{htmlelement("source")}}-Elemente, sodass verschiedene Formate je nach dem Browser, der die Seite anzeigt, geladen werden können.
- Das Steuerungs-HTML ist wahrscheinlich das interessanteste:
  - Wir haben vier {{htmlelement("button")}}-s — Play/Pause, Stoppen, Zurückspulen, und Vorspulen.
  - Jede `<button>` hat einen `class` Namen, ein `data-icon` Attribut, das definiert, welches Icon auf jedem Button angezeigt werden soll (wir zeigen in dem untenstehenden Abschnitt, wie das funktioniert), und ein `aria-label` Attribut, um eine verständliche Beschreibung jedes Buttons zu liefern, da wir keinen menschenlesbaren Bezeichner innerhalb der Tags bereitstellen. Die Inhalte von `aria-label`-Attributen werden von Screenreadern vorgelesen, wenn deren Benutzer auf die Elemente fokussieren, die diese Attribute enthalten.
  - Es gibt auch ein Timer-{{htmlelement("div")}}, welches die verstrichene Zeit anzeigt, wenn das Video abgespielt wird. Zum Spaß bieten wir zwei Berichtsfunktionen an — ein {{htmlelement("span")}}, das die verstrichene Zeit in Minuten und Sekunden enthält, und ein zusätzliches `<div>`, das wir verwenden werden, um eine horizontale Anzeigebalken zu erstellen, die länger wird, je mehr Zeit vergeht. Um eine Vorstellung davon zu bekommen, wie das fertige Produkt aussehen wird, [sehen Sie sich unsere fertige Version an](https://mdn.github.io/learning-area/javascript/apis/video-audio/finished/).

#### Erkunden des CSS

Öffnen Sie nun die CSS-Datei und sehen Sie hinein. Das CSS des Beispiels ist nicht zu kompliziert, wir werden hier jedoch die interessantesten Teile hervorheben. Zuerst einmal, beachten Sie das Styling der `.controls`:

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

- Wir beginnen, indem wir die {{cssxref("visibility")}} der benutzerdefinierten Steuerungen auf `hidden` setzen. In unserem JavaScript später werden wir die Steuerungen auf `visible` setzen und das `controls`-Attribut aus dem `<video>`-Element entfernen. Dies dient dazu, dass Benutzer das Video weiterhin mit den nativen Steuerungen verwenden können, falls das JavaScript aus irgendeinem Grund nicht geladen wird.
- Wir geben den Steuerungen standardmäßig eine {{cssxref("opacity")}} von 0,5, damit sie weniger ablenkend sind, wenn Sie das Video ansehen. Nur beim Hovern/Fokussieren über die Steuerungen erscheinen sie in voller Opazität.
- Wir layouten die Buttons innerhalb der Steuerleiste mit Flexbox ({{cssxref("display")}}: flex), um es einfacher zu machen.

Sehen wir uns nun unsere Button-Icons an:

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

button::before {
  font-family: HeydingsControlsRegular;
  font-size: 20px;
  position: relative;
  content: attr(data-icon);
  color: #aaaaaa;
  text-shadow: 1px 1px 0px black;
}
```

Zuallererst nutzen wir am Anfang des CSS einen {{cssxref("@font-face")}}-Block, um eine benutzerdefinierte Webschriftart zu importieren. Dies ist eine Icon-Font — alle Buchstaben des Alphabets entsprechen den gebräuchlichen Icons, die Sie in einer Anwendung verwenden könnten.

Anschließend verwenden wir generierten Inhalt, um ein Icon auf jedem Button anzuzeigen:

- Wir verwenden den {{cssxref("::before")}}-Selektor, um den Inhalt vor jedem {{htmlelement("button")}}-Element anzuzeigen.
- Wir verwenden die {{cssxref("content")}}-Eigenschaft, um den anzuzeigenden Inhalt in jedem Fall gleichzusetzen mit dem Inhalt des [`data-icon`](/de/docs/Web/HTML/How_to/Use_data_attributes)-Attributs. Im Falle unseres Play-Buttons enthält `data-icon` ein großes "P".
- Wir wenden die benutzerdefinierte Webschriftart auf unsere Buttons an, indem wir {{cssxref("font-family")}} verwenden. In dieser Schriftart ist "P" tatsächlich ein "Play"-Icon, und daher hat der Play-Button ein "Play"-Icon darauf angezeigt.

Icon-Fonts sind aus vielen Gründen sehr cool — sie reduzieren die HTTP-Anfragen, weil Sie diese Icons nicht als Bilddateien herunterladen müssen, bieten große Skalierbarkeit und die Tatsache, dass Sie Texteigenschaften wie {{cssxref("color")}} und {{cssxref("text-shadow")}} verwenden können, um sie zu gestalten.

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

- Wir setzen das äußere `.timer`-Element auf `flex: 5`, damit es den größten Teil der Breite der Steuerleiste einnimmt. Wir geben ihm auch {{cssxref("position", "position: relative")}}, damit wir Elemente darin bequem relativ zu seinen Grenzen positionieren können und nicht zu den Grenzen des {{htmlelement("body")}}-Elements.
- Das innere `<div>` ist absolut positioniert, um direkt oben auf dem äußeren `<div>` zu liegen. Es erhält auch eine anfängliche Breite von 0, sodass Sie es überhaupt nicht sehen können. Wenn das Video abgespielt wird, wird die Breite durch JavaScript erhöht, je länger das Video läuft.
- Das `<span>` ist ebenfalls absolut positioniert, um sich nahe der linken Seite der Timer-Leiste zu befinden.
- Wir geben unserem inneren `<div>` und `<span>` auch den richtigen {{cssxref("z-index")}}, damit der Timer oben angezeigt wird, und das innere `<div>` darunter. Auf diese Weise stellen wir sicher, dass wir alle Informationen sehen können — ein Kasten verdeckt keinen anderen.

### Implementierung des JavaScript

Wir haben bereits eine ziemlich vollständige HTML- und CSS-Oberfläche; jetzt müssen wir nur noch alle Buttons verkabeln, um die Steuerungen zum Laufen zu bringen.

1. Erstellen Sie eine neue JavaScript-Datei auf derselben Verzeichnisebene wie Ihre index.html-Datei. Nennen Sie sie `custom-player.js`.
2. Fügen Sie am Anfang dieser Datei den folgenden Code ein:

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
   - Die Buttons Play/Pause, Stopp, Zurückspulen und Vorspulen.
   - Der äußere Timer-Wrapper `<div>`, die digitale Timer-Anzeige `<span>` und das innere `<div>`, das breiter wird, je länger das Video läuft.

3. Setzen Sie als Nächstes das Folgende am Ende Ihres Codes ein:

   ```js
   media.removeAttribute("controls");
   controls.style.visibility = "visible";
   ```

   Diese beiden Zeilen entfernen die Standard-Browser-Steuerungen vom Video und machen die benutzerdefinierten Steuerungen sichtbar.

#### Abspielen und Pausen des Videos

Lassen Sie uns wahrscheinlich die wichtigste Steuerung implementieren — den Play/Pause-Button.

1. Fügen Sie zunächst das folgende an das Ende Ihres Codes hinzu, damit die Funktion `playPauseMedia()` aufgerufen wird, wenn der Play-Button geklickt wird:

   ```js
   play.addEventListener("click", playPauseMedia);
   ```

2. Jetzt definieren wir `playPauseMedia()` — fügen Sie das Folgende erneut unten in Ihren Code ein:

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

   Hier verwenden wir eine [`if`](/de/docs/Web/JavaScript/Reference/Statements/if...else)-Anweisung, um zu überprüfen, ob das Video pausiert ist. Die [`HTMLMediaElement.paused`](/de/docs/Web/API/HTMLMediaElement/paused)-Eigenschaft gibt `true` zurück, wenn das Medium pausiert ist, was jedes Mal der Fall ist, wenn das Video nicht abgespielt wird, auch wenn es nach dem ersten Laden auf 0 Dauer eingestellt wurde. Wenn es pausiert ist, setzen wir den `data-icon` Attributwert am Play-Button auf "u", das ein "Pause"-Icon darstellt, und rufen die Methode [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play) auf, um das Medium abzuspielen.

   Beim zweiten Klick wird die Schaltfläche wieder umgeschaltet — das "Play"-Icon wird erneut angezeigt und das Video mit [`HTMLMediaElement.pause()`](/de/docs/Web/API/HTMLMediaElement/pause) pausiert.

#### Stoppen des Videos

1. Fügen Sie als nächstes die Funktionalität hinzu, um das Video anzuhalten. Fügen Sie die folgenden [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)-Zeilen unter den vorherigen ein:

   ```js
   stop.addEventListener("click", stopMedia);
   media.addEventListener("ended", stopMedia);
   ```

   Das [`click`](/de/docs/Web/API/Element/click_event)-Ereignis ist offensichtlich — wir möchten das Video anhalten, indem wir unsere `stopMedia()`-Funktion aufrufen, wenn der Stop-Button geklickt wird. Wir möchten das Video jedoch auch anhalten, wenn es das Abspielen beendet — dies wird durch das [`ended`](/de/docs/Web/API/HTMLMediaElement/ended_event)-Ereignis ausgelöst, weshalb wir auch einen Listener einrichten, der die Funktion ausführt, wenn dieses Ereignis aufgerufen wird.

2. Definieren Sie als nächstes `stopMedia()` — fügen Sie die folgende Funktion unterhalb von `playPauseMedia()` ein:

   ```js
   function stopMedia() {
     media.pause();
     media.currentTime = 0;
     play.setAttribute("data-icon", "P");
   }
   ```

   Es gibt keine `stop()`-Methode in der HTMLMediaElement-API — das Äquivalent ist das Video zu `pausieren` und seine [`currentTime`](/de/docs/Web/API/HTMLMediaElement/currentTime)-Eigenschaft auf 0 zu setzen. Wenn Sie `currentTime` auf einen Wert (in Sekunden) setzen, springt das Medium sofort zu dieser Position.

   Alles, was noch zu tun ist, ist das angezeigte Icon auf das "Play"-Icon zu setzen. Unabhängig davon, ob das Video pausiert oder abgespielt wird, wenn die Stop-Taste gedrückt wird, möchten Sie es danach zur Wiedergabe bereit halten.

#### Vor- und Zurückspulen

Es gibt viele Möglichkeiten, wie Sie die Funktionalität zum Rückspulen und Vorspulen implementieren können; hier zeigen wir Ihnen eine relativ komplexe Möglichkeit, die nicht kaputtgeht, wenn die verschiedenen Tasten in unerwarteter Reihenfolge gedrückt werden.

1. Fügen Sie zunächst die folgenden zwei [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)-Zeilen unter den vorherigen hinzu:

   ```js
   rwd.addEventListener("click", mediaBackward);
   fwd.addEventListener("click", mediaForward);
   ```

2. Nun zu den Event-Handler-Funktionen — fügen Sie den folgenden Code unterhalb Ihrer vorherigen Funktionen hinzu, um `mediaBackward()` und `mediaForward()` zu definieren:

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

   Sie werden bemerken, dass wir zuerst zwei Variablen initialisieren — `intervalFwd` und `intervalRwd` — Sie werden später herausfinden, wofür sie da sind.

   Lassen Sie uns `mediaBackward()` durchgehen (die Funktionalität für `mediaForward()` ist genau dieselbe, nur umgekehrt):
   1. Wir löschen alle Klassen und Intervalle, die auf die Vorspulfunktion gesetzt sind — wir tun dies, weil, wenn wir den `rwd`-Button nach dem Drücken des `fwd`-Buttons drücken, wir die Vorspulfunktion abbrechen und durch die Rückspulfunktion ersetzen möchten. Wenn wir versuchen würden, beides gleichzeitig zu tun, würde der Player kaputtgehen.
   2. Wir verwenden ein `if`-Statement, um zu überprüfen, ob die `active`-Klasse auf dem `rwd`-Button gesetzt ist, was darauf hinweist, dass sie bereits gedrückt wurde. Die [`classList`](/de/docs/Web/API/Element/classList) ist eine ziemlich praktische Eigenschaft, die auf jedem Element existiert — sie enthält eine Liste aller auf dem Element gesetzten Klassen sowie Methoden zum Hinzufügen/Entfernen von Klassen usw. Wir verwenden die Methode `classList.contains()`, um zu überprüfen, ob die Liste die `active` Kabase enthält. Dies ergibt ein boolean `true`/`false` Ergebnis.
   3. Wenn `active` auf dem `rwd`-Button gesetzt ist, entfernen wir es mit `classList.remove()`, löschen das Intervall, das beim ersten Drücken der Taste gesetzt wurde (siehe unten für mehr Erklärung), und verwenden [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play), um das Zurückspulen zu beenden und das Video normal abzuspielen.
   4. Falls es noch nicht gesetzt ist, fügen wir die `active`-Klasse zum `rwd`-Button hinzu, indem wir `classList.add()` verwenden, pausieren das Video mit [`HTMLMediaElement.pause()`](/de/docs/Web/API/HTMLMediaElement/pause), und setzen dann die Variable `intervalRwd` gleich einem [`setInterval()`](/de/docs/Web/API/Window/setInterval) Aufruf. Wenn es aufgerufen wird, erstellt `setInterval()` ein aktives Intervall, was bedeutet, dass es die als ersten Parameter angegebene Funktion alle x Millisekunden ausführt, wobei x der Wert des zweiten Parameters ist. Also lassen wir den `windBackward()`-Anruf alle 200 Millisekunden ausführen — wir verwenden diese Funktion, um das Video stetig zurückzuspulen. Um ein [`setInterval()`](/de/docs/Web/API/Window/setInterval) zu stoppen, müssen Sie [`clearInterval()`](/de/docs/Web/API/Window/clearInterval) aufrufen und ihm den Identitätsnamen des Intervalls angeben, um es zu löschen, welcher hier der Variablenname `intervalRwd` ist (siehe den `clearInterval()`-Aufruf früher in der Funktion).

3. Schließlich müssen wir die `windBackward()` und `windForward()` Funktionen definieren, die in den `setInterval()` Aufrufen aufgerufen werden. Fügen Sie das folgende unterhalb Ihrer beiden vorherigen Funktionen hinzu:

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

   Noch einmal, wir werden nur durch die erste dieser Funktionen laufen, da sie fast identisch arbeiten, aber umgekehrt zueinander. In `windBackward()` machen wir das folgende — beachten Sie bitte, dass wenn das Intervall aktiv ist, diese Funktion einmal alle 200 Millisekunden läuft.
   1. Wir beginnen mit einem `if`-Statement, das überprüft, ob die aktuelle Zeit weniger als 3 Sekunden beträgt, d.h. wenn das Rückspulen um weitere drei Sekunden es in der Zeit vor den Anfang des Videos bringen würde. Dies würde seltsames Verhalten verursachen, daher wenn dies der Fall ist, stoppen wir das Video mit `stopMedia()`, entfernen die `active`-Klasse vom Rückspul-Button, und löschen das `intervalRwd` Intervall, um die Rückspulfunktion zu stoppen. Ohne diesen letzten Schritt würde das Video für immer zurückspulen.
   2. Wenn die aktuelle Zeit nicht innerhalb von 3 Sekunden nach dem Anfang des Videos liegt, ziehen wir drei Sekunden von der aktuellen Zeit ab, indem wir `media.currentTime -= 3` ausführen. So in der Tat, spulen wir das Video alle 200 Millisekunden um 3 Sekunden zurück.

#### Aktualisieren der verstrichenen Zeit

Das allerletzte Stück unseres Media-Players, das implementiert werden muss, sind die Zeitverlauf-Anzeigen. Um dies zu tun, behalten wir eine Funktion, die die Zeit-Anzeigen aktualisiert, jedes Mal, wenn das [`timeupdate`](/de/docs/Web/API/HTMLMediaElement/timeupdate_event) Ereignis auf das `<video>`-Element gefeuert wird. Die Häufigkeit, mit der dieses Ereignis gefeuert wird, hängt von Ihrem Browser, Ihrer CPU-Leistung etc. ab ([siehe diesen Stack Overflow Beitrag](https://stackoverflow.com/questions/9678177/how-often-does-the-timeupdate-event-fire-for-an-html5-video)).

Fügen Sie die folgende `addEventListener()` Zeile direkt unter die anderen hinzu:

```js
media.addEventListener("timeupdate", setTime);
```

Nun definieren wir die `setTime()` Funktion. Fügen Sie das folgende am Ende Ihrer Datei hinzu:

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

1. Zuerst berechnen wir die Anzahl der Minuten und Sekunden im [`HTMLMediaElement.currentTime`](/de/docs/Web/API/HTMLMediaElement/currentTime) Wert.
2. Dann initialisieren wir zwei weitere Variablen — `minuteValue` und `secondValue`. Wir verwenden {{jsxref("String/padStart", "padStart()")}}, um jeden Wert 2 Zeichen lang zu machen, selbst wenn der numerische Wert nur einstellig ist.
3. Der tatsächliche anzuzeigende Zeitwert wird als `minuteValue` plus einem Doppelpunktzeichen plus `secondValue` gesetzt.
4. Der [`Node.textContent`](/de/docs/Web/API/Node/textContent) Wert des Timers wird auf den Zeitwert gesetzt, damit er in der Benutzeroberfläche angezeigt wird.
5. Die Länge, auf die wir das innere `<div>` setzen sollten, wird berechnet, indem wir zuerst die Breite des äußeren `<div>` bestimmen (die [`clientWidth`](/de/docs/Web/API/Element/clientWidth) Eigenschaft eines Elements enthält seine Länge), und dann multiplizieren wir es mit dem [`HTMLMediaElement.currentTime`](/de/docs/Web/API/HTMLMediaElement/currentTime), geteilt durch die gesamte [`HTMLMediaElement.duration`](/de/docs/Web/API/HTMLMediaElement/duration) des Mediums.
6. Wir setzen die Breite des inneren `<div>` auf die berechnete Balkenlänge, plus "px", sodass sie auf diese Anzahl an Pixeln gesetzt wird.

#### Beheben von Abspielen und Pausieren

Es gibt ein Problem, das noch behoben werden muss. Wenn die Play/Pause- oder Stopptasten gedrückt werden, während die Rückspul- oder Vorspulfunktion aktiv ist, funktionieren sie einfach nicht. Wie können wir es beheben, damit sie die `rwd`/`fwd` Tasten-Funktionalität abbrechen und das Video abspielen/stoppen, wie man es erwarten würde? Das ist ziemlich leicht zu beheben.

Fügen Sie zunächst die folgenden Zeilen in die `stopMedia()` Funktion ein — irgendwтом wird reichen:

```js
rwd.classList.remove("active");
fwd.classList.remove("active");
clearInterval(intervalRwd);
clearInterval(intervalFwd);
```

Fügen Sie nun dieselben Zeilen einmal mehr ganz am Anfang der `playPauseMedia()` Funktion hinzu (direkt vor dem Anfang des `if`-Statements).

An diesem Punkt könnten Sie die äquivalenten Zeilen aus den `windBackward()` und `windForward()` Funktionen löschen, da diese Funktionalität stattdessen in der `stopMedia()` Funktion implementiert wurde.

Hinweis: Sie könnten die Effizienz des Codes weiter verbessern, indem Sie eine separate Funktion erstellen, die diese Zeilen ausführt, und diese überall aufrufen, wo sie benötigt werden, anstatt die Zeilen mehrmals im Code zu wiederholen. Aber das überlassen wir Ihnen.

## Zusammenfassung

Ich denke, wir haben Ihnen in diesem Artikel genug beigebracht. Die [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) API bietet eine Vielzahl von Funktionen zum Erstellen simpler Video- und Audioplayer, und das ist nur die Spitze des Eisbergs. Siehe den "Auch ansehen"-Abschnitt unten für Links zu komplexeren und interessanteren Funktionen.

Hier sind einige Vorschläge, wie Sie das vorhandene Beispiel, das wir aufgebaut haben, verbessern könnten:

1. Die Zeitanzeige bricht derzeit ab, wenn das Video eine Stunde oder länger ist (naja, es zeigt keine Stunden an; nur Minuten und Sekunden). Können Sie herausfinden, wie Sie das Beispiel ändern könnten, damit es Stunden anzeigt?
2. Da `<audio>`-Elemente die gleiche [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) Funktionalität zur Verfügung haben, könnten Sie diesen Player ganz einfach auch für ein `<audio>`-Element arbeiten lassen. Versuchen Sie es.
3. Können Sie sich eine Möglichkeit überlegen, das innere `<div>` Timer-Element in einen echten Suchbalken/Scroller zu verwandeln — d.h. wenn Sie irgendwo auf die Leiste klicken, springt es zu dieser relativen Position in der Videowiedergabe? Als Tipp können Sie die X- und Y-Werte der linken/rechten und oberen/unteren Seiten des Elements durch die Methode [`getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect) herausfinden, und Sie können die Koordinaten eines Mausklicks über das Ereignisobjekt des Klickereignisses finden, das über das [`Document`](/de/docs/Web/API/Document) Objekt aufgerufen wird. Zum Beispiel:

   ```js
   document.onclick = function (e) {
     console.log(e.x, e.y);
   };
   ```

## Auch ansehen

- [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)
- [HTML-Video und -Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio) — einfacher Leitfaden zu `<video>` und `<audio>` HTML.
- [Audio- und Videoauslieferung](/de/docs/Web/Media/Guides/Audio_and_video_delivery) — detaillierter Leitfaden zur Bereitstellung von Medien im Browser, mit vielen Tipps, Tricks und Links zu weiterführenden, fortgeschritteneren Tutorials.
- [Audio- und Videomanipulation](/de/docs/Web/Media/Guides/Audio_and_video_manipulation) — detaillierter Leitfaden zur Manipulation von Audio und Video, z.B. mit [Canvas API](/de/docs/Web/API/Canvas_API), [Web Audio API](/de/docs/Web/API/Web_Audio_API) usw.
- {{htmlelement("video")}} und {{htmlelement("audio")}} Referenzseiten.
- [Leitfaden zu Medientypen und Formaten im Web](/de/docs/Web/Media/Guides/Formats)

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_APIs/Introduction", "Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics", "Learn_web_development/Extensions/Client-side_APIs")}}
