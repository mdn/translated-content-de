---
title: Video- und Audio-APIs
slug: Learn/JavaScript/Client-side_web_APIs/Video_and_audio_APIs
l10n:
  sourceCommit: 5f76b99045f87349ed030bbd6a3c2e43badb3c22
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Client-side_web_APIs/Drawing_graphics", "Learn/JavaScript/Client-side_web_APIs/Client-side_storage", "Learn/JavaScript/Client-side_web_APIs")}}

HTML bietet Elemente zum Einbetten von Multimedia-Inhalten in Dokumente — {{htmlelement("video")}} und {{htmlelement("audio")}} — die eigene APIs zum Steuern der Wiedergabe, des Suchens usw. mitbringen. Dieser Artikel zeigt Ihnen, wie Sie häufige Aufgaben wie das Erstellen benutzerdefinierter Wiedergabesteuerelemente ausführen können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        JavaScript-Grundlagen (siehe
        <a href="/de/docs/Learn/JavaScript/First_steps">Erste Schritte</a>,
        <a href="/de/docs/Learn/JavaScript/Building_blocks"
          >Bausteine</a
        >,
        <a href="/de/docs/Learn/JavaScript/Objects">JavaScript-Objekte</a>),
        die
        <a href="/de/docs/Learn/JavaScript/Client-side_web_APIs/Introduction"
          >Grundlagen der Client-seitigen APIs</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen, wie man Browser-APIs zur Steuerung der Video- und Audiowiedergabe verwendet.
      </td>
    </tr>
  </tbody>
</table>

## HTML Video und Audio

Die {{htmlelement("video")}} und {{htmlelement("audio")}} Elemente ermöglichen das Einbetten von Video und Audio in Webseiten. Wie in [Video- und Audioinhalte](/de/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content) gezeigt, sieht eine typische Implementierung so aus:

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

Dies erstellt einen Videoplayer im Browser wie folgt:

{{EmbedGHLiveSample("learning-area/html/multimedia-and-embedding/video-and-audio-content/multiple-video-formats.html", '100%', 380)}}

In dem oben verlinkten Artikel können Sie überprüfen, welche HTML-Funktionen was tun; für unsere Zwecke hier ist das interessanteste Attribut [`controls`](/de/docs/Web/HTML/Element/video#controls), das das Standardset von Wiedergabesteuerelementen aktiviert. Wenn Sie dies nicht angeben, erhalten Sie keine Wiedergabesteuerelemente:

{{EmbedGHLiveSample("learning-area/html/multimedia-and-embedding/video-and-audio-content/multiple-video-formats-no-controls.html", '100%', 380)}}

Dies ist für die Videowiedergabe nicht sofort nützlich, hat aber Vorteile. Ein großes Problem mit den nativen Browser-Steuerelementen ist, dass sie in jedem Browser unterschiedlich sind — nicht sehr gut für plattformübergreifende Unterstützung! Ein weiteres großes Problem ist, dass die nativen Steuerelemente in den meisten Browsern nicht sehr tastaturfreundlich sind.

Sie können beide Probleme lösen, indem Sie die nativen Steuerelemente ausblenden (indem Sie das `controls` Attribut entfernen) und Ihre eigenen mit HTML, CSS und JavaScript programmieren. Im nächsten Abschnitt schauen wir uns die grundlegenden Tools an, die uns dafür zur Verfügung stehen.

## Die HTMLMediaElement-API

Ein Teil der HTML-Spezifikation, die [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) API, bietet Funktionen, die es Ihnen ermöglichen, Video- und Audioplayer programmatisch zu steuern — zum Beispiel [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play), [`HTMLMediaElement.pause()`](/de/docs/Web/API/HTMLMediaElement/pause) usw. Diese Schnittstelle ist sowohl für {{htmlelement("audio")}} als auch für {{htmlelement("video")}} Elemente verfügbar, da die Funktionen, die Sie implementieren möchten, fast identisch sind. Lassen Sie uns ein Beispiel durchgehen und dabei Funktionen hinzufügen.

Unser fertiges Beispiel wird so aussehen (und funktionieren):

{{EmbedGHLiveSample("learning-area/javascript/apis/video-audio/finished/", '100%', 360)}}

### Erste Schritte

Um mit diesem Beispiel zu beginnen, [laden Sie unser media-player-start.zip herunter](https://github.com/mdn/learning-area/blob/main/javascript/apis/video-audio/start/media-player-start.zip) und entpacken Sie es in ein neues Verzeichnis auf Ihrer Festplatte. Wenn Sie unser Beispiele-Repo [heruntergeladen haben](https://github.com/mdn/learning-area), finden Sie es in `javascript/apis/video-audio/start/`.

An diesem Punkt sollten Sie, wenn Sie das HTML laden, einen ganz normalen HTML-Videoplayer sehen, bei dem die nativen Steuerelemente gerendert werden.

#### Das HTML erkunden

Öffnen Sie die HTML-Indexdatei. Sie werden eine Reihe von Funktionen sehen; das HTML wird von dem Videoplayer und seinen Steuerungen dominiert:

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

- Der gesamte Player ist in ein {{htmlelement("div")}} Element eingeschlossen, sodass alles bei Bedarf als eine Einheit gestylt werden kann.
- Das {{htmlelement("video")}} Element enthält zwei {{htmlelement("source")}} Elemente, sodass je nach dem betreibenden Browser unterschiedliche Formate geladen werden können.
- Die interessantesten HTML-Steuerelemente:

  - Wir haben vier {{htmlelement("button")}} — Play/Pause, Stop, Zurückspulen und Vorspulen.
  - Jedes `<button>` hat einen `class` Namen, ein `data-icon` Attribut, das definiert, welches Symbol auf jedem Button angezeigt werden soll (wir zeigen, wie das im folgenden Abschnitt funktioniert), und ein `aria-label` Attribut, um eine verständliche Beschreibung jedes Buttons bereitzustellen, da wir nicht innerhalb der Tags eine menschenlesbare Beschriftung bereitstellen. Die Inhalte von `aria-label` Attributen werden von Bildschirmlesern vorgelesen, wenn ihre Benutzer die Elemente fokussieren, die sie enthalten.
  - Es gibt auch einen Timer {{htmlelement("div")}}, der die verstrichene Zeit anzeigt, wenn das Video abgespielt wird. Nur zum Spaß stellen wir zwei Berichtsfunktionen bereit — einen {{htmlelement("span")}} mit der verstrichenen Zeit in Minuten und Sekunden, und ein zusätzliches `<div>`, das wir verwenden, um eine horizontale Anzeigebalken zu erstellen, der länger wird, je mehr Zeit vergeht. Um eine Vorstellung davon zu bekommen, wie das fertige Produkt aussehen wird, [sehen Sie sich unsere fertige Version an](https://mdn.github.io/learning-area/javascript/apis/video-audio/finished/).

#### Das CSS erkunden

Öffnen Sie nun die CSS-Datei und schauen Sie hinein. Das CSS für das Beispiel ist nicht zu kompliziert, aber wir heben hier die interessantesten Teile hervor. Zunächst beachten Sie das `.controls` Styling:

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

- Wir beginnen mit der {{cssxref("visibility")}} der benutzerdefinierten Steuerelemente, die auf `hidden` gesetzt ist. In unserem JavaScript werden wir später die Steuerelemente auf `visible` setzen und das `controls` Attribut vom `<video>` Element entfernen. Dies dient dazu, dass, wenn das JavaScript aus irgendeinem Grund nicht geladen wird, Benutzer das Video trotzdem mit den nativen Steuerelementen verwenden können.
- Wir geben den Steuerelementen standardmäßig eine {{cssxref("opacity")}} von 0.5, damit sie weniger ablenken, wenn Sie versuchen, das Video anzusehen. Nur wenn Sie über den Player schweben/fokussieren, erscheinen die Steuerelemente mit voller Deckkraft.
- Wir ordnen die Buttons innerhalb der Kontrollleiste mit Flexbox ({{cssxref("display")}}: flex) an, um die Dinge zu erleichtern.

Schauen wir uns nun unsere Button-Symbole an:

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

Zunächst einmal verwenden wir am Anfang des CSS einen {{cssxref("@font-face")}} Block, um eine benutzerdefinierte Webschriftart zu importieren. Dies ist eine Symbolschriftart — alle Buchstaben des Alphabets entsprechen gängigen Symbolen, die Sie möglicherweise in einer Anwendung verwenden möchten.

Anschließend verwenden wir generierten Inhalt, um ein Symbol auf jedem Button anzuzeigen:

- Wir verwenden den {{cssxref("::before")}} Selektor, um den Inhalt vor jedem {{htmlelement("button")}} Element anzuzeigen.
- Wir verwenden die {{cssxref("content")}} Eigenschaft, um den anzuzeigenden Inhalt in jedem Fall auf den Inhalt des [`data-icon`](/de/docs/Learn/HTML/Howto/Use_data_attributes) Attributs zu setzen. Im Fall unseres Play-Buttons enthält `data-icon` ein großes "P".
- Wir wenden die benutzerdefinierte Webschriftart auf unsere Buttons mit {{cssxref("font-family")}} an. In dieser Schriftart ist "P" tatsächlich ein "Play"-Symbol, sodass der Play-Button ein "Play"-Symbol darauf angezeigt hat.

Symbolschriftarten sind aus vielen Gründen sehr cool — Reduzierung von HTTP-Anfragen, da Sie diese Symbole nicht als Bilddateien herunterladen müssen, großartige Skalierbarkeit und die Tatsache, dass Sie Text-Eigenschaften verwenden können, um sie zu stylen — wie {{cssxref("color")}} und {{cssxref("text-shadow")}}.

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

- Wir setzen das äußere `.timer` Element auf `flex: 5`, sodass es den größten Teil der Breite der Kontrollleiste einnimmt. Wir geben ihm auch {{cssxref("position", "position: relative")}}, sodass wir Elemente darin bequem gemäß seinen Grenzen und nicht den Grenzen des {{htmlelement("body")}} Elements positionieren können.
- Das innere `<div>` ist absolut positioniert, um direkt oben auf dem äußeren `<div>` zu sitzen. Es bekommt auch eine anfängliche Breite von 0, sodass es überhaupt nicht sichtbar ist. Während das Video abgespielt wird, wird die Breite mithilfe von JavaScript erhöht, während das Video abläuft.
- Der `<span>` ist auch absolut positioniert, um in der Nähe der linken Seite der Timerleiste zu sitzen.
- Wir geben unserem inneren `<div>` und `<span>` auch den richtigen {{cssxref("z-index")}}, sodass der Timer oben angezeigt wird und das innere `<div>` darunter. Auf diese Weise stellen wir sicher, dass wir alle Informationen sehen können — ein Kasten verdeckt nicht einen anderen.

### Implementierung des JavaScript

Wir haben bereits eine ziemlich vollständige HTML- und CSS-Oberfläche. Jetzt müssen wir nur noch alle Buttons verdrahten, um die Steuerelemente zum Laufen zu bringen.

1. Erstellen Sie eine neue JavaScript-Datei auf der gleichen Verzeichnisebene wie Ihre index.html-Datei. Nennen Sie sie `custom-player.js`.
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

   Hier erstellen wir Konstanten, um Referenzen zu allen Objekten zu halten, die wir manipulieren möchten. Wir haben drei Gruppen:

   - Das `<video>` Element und die Steuerelementleiste.
   - Die Play/Pause, Stop, Zurückspulen und Vorspulen Knöpfe.
   - Der äußere Timerwrapper `<div>`, das digitale Timer-Anzeigefeld `<span>` und das innere `<div>`, das breiter wird, während die Zeit abläuft.

3. Fügen Sie als nächstes am Ende Ihres Codes Folgendes ein:

   ```js
   media.removeAttribute("controls");
   controls.style.visibility = "visible";
   ```

   Diese zwei Zeilen entfernen die Standardbrowser-Steuerelemente vom Video und machen die benutzerdefinierten Steuerelemente sichtbar.

#### Das Video abspielen und pausieren

Lassen Sie uns wahrscheinlich das wichtigste Steuerelement — den Play/Pause-Button — implementieren.

1. Fügen Sie zunächst Folgendes am Ende Ihres Codes hinzu, sodass die `playPauseMedia()` Funktion aufgerufen wird, wenn der Play-Button geklickt wird:

   ```js
   play.addEventListener("click", playPauseMedia);
   ```

2. Nun zur Definition von `playPauseMedia()` — fügen Sie Folgendes am Ende Ihres Codes hinzu:

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

   Hier verwenden wir ein [`if`](/de/docs/Web/JavaScript/Reference/Statements/if...else) Statement, um zu prüfen, ob das Video pausiert ist. Die [`HTMLMediaElement.paused`](/de/docs/Web/API/HTMLMediaElement/paused) Eigenschaft gibt `true` zurück, wenn das Medium pausiert ist, was zu jeder Zeit der Fall ist, wenn das Video nicht abgespielt wird, einschließlich wenn es beim ersten Laden auf 0 Dauer eingestellt ist. Wenn es pausiert ist, setzen wir den Wert des `data-icon` Attributs am Play-Button auf "u", welches ein "Pause"-Symbol ist, und führen die [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play) Methode aus, um das Medium abzuspielen.

   Beim zweiten Klick wird der Button erneut umgeschaltet — das "Play"-Symbol wird wieder angezeigt und das Video wird mit [`HTMLMediaElement.pause()`](/de/docs/Web/API/HTMLMediaElement/pause) pausiert.

#### Das Video stoppen

1. Lassen Sie uns als nächstes die Funktionalität zum Anhalten des Videos hinzufügen. Fügen Sie die folgende [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) Zeile unter der von Ihnen zuvor hinzugefügten ein:

   ```js
   stop.addEventListener("click", stopMedia);
   media.addEventListener("ended", stopMedia);
   ```

   Das [`click`](/de/docs/Web/API/Element/click_event) Ereignis ist klar — wir möchten das Video stoppen, indem wir unsere `stopMedia()` Funktion ausführen, wenn der Stop-Button geklickt wird. Wir möchten das Video jedoch auch stoppen, wenn es zu Ende gespielt hat — dies wird durch das [`ended`](/de/docs/Web/API/HTMLMediaElement/ended_event) Ereignis markiert, sodass wir auch einen Listener einrichten, um die Funktion bei Auslösung dieses Ereignisses auszuführen.

2. Definieren wir nun `stopMedia()` — fügen Sie die folgende Funktion unterhalb von `playPauseMedia()` hinzu:

   ```js
   function stopMedia() {
     media.pause();
     media.currentTime = 0;
     play.setAttribute("data-icon", "P");
   }
   ```

   Es gibt keine `stop()` Methode in der HTMLMediaElement API — das Äquivalent ist es, das Video zu `pause()` und seine [`currentTime`](/de/docs/Web/API/HTMLMediaElement/currentTime) Eigenschaft auf 0 zu setzen. Wenn `currentTime` auf einen Wert (in Sekunden) gesetzt wird, springt das Medium sofort auf diese Position.

   Alles, was danach noch zu tun ist, ist, das angezeigte Symbol auf das "Play"-Symbol zu setzen. Unabhängig davon, ob das Video pausiert oder abgespielt wurde, als der Stop-Button gedrückt wurde, möchten Sie, dass es danach bereit ist, abgespielt zu werden.

#### Zurück- und vorspulen

Es gibt viele Möglichkeiten, wie Sie die Rückspul- und Vorspul-Funktionalität implementieren können; hier zeigen wir Ihnen eine relativ komplexe Methode, die nicht bricht, wenn die verschiedenen Tasten in einer unerwarteten Reihenfolge gedrückt werden.

1. Fügen Sie zunächst die folgenden zwei [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) Zeilen unter den vorherigen hinzu:

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

   Sie werden feststellen, dass wir zuerst zwei Variablen initialisieren — `intervalFwd` und `intervalRwd` — Sie werden später erfahren, wofür sie gedacht sind.

   Gehen wir Schritt für Schritt durch `mediaBackward()` (die Funktionalität für `mediaForward()` ist genau gleich, aber umgekehrt):

   1. Wir löschen alle Klassen und Intervalle, die auf der Vorspul-Funktionalität gesetzt sind — wir tun dies, weil, wenn wir die `rwd` Taste nach Drücken der `fwd` Taste drücken, wir alle Vorspul-Funktionalität abbrechen und durch die Rückspul-Funktionalität ersetzen möchten. Wenn wir versuchten, beides gleichzeitig zu tun, würde der Player kaputt gehen.
   2. Wir verwenden eine `if` Anweisung, um zu prüfen, ob die `active` Klasse auf der `rwd` Taste gesetzt wurde, was darauf hindeutet, dass sie bereits gedrückt wurde. Der [`classList`](/de/docs/Web/API/Element/classList) ist eine ziemlich praktische Eigenschaft, die auf jedem Element existiert — es enthält eine Liste aller auf dem Element gesetzten Klassen sowie Methoden zum Hinzufügen/Entfernen von Klassen usw. Wir verwenden die `classList.contains()` Methode, um zu überprüfen, ob die Liste die `active` Klasse enthält. Dies ergibt ein `true`/`false` Ergebnis.
   3. Wenn `active` auf der `rwd` Taste gesetzt wurde, entfernen wir sie mit `classList.remove()`, löschen das Intervall, das gesetzt wurde, als die Taste zuerst gedrückt wurde (siehe unten für mehr Erklärung), und verwenden [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play), um das Zurückspulen abzubrechen und das Video normal abzuspielen.
   4. Wenn es noch nicht gesetzt wurde, fügen wir die `active` Klasse zur `rwd` Taste hinzu, pausieren das Video mit [`HTMLMediaElement.pause()`](/de/docs/Web/API/HTMLMediaElement/pause) und setzen dann die `intervalRwd` Variable gleich einem [`setInterval()`](/de/docs/Web/API/Window/setInterval) Aufruf. Wenn es aufgerufen wird, erstellt `setInterval()` ein aktives Intervall, was bedeutet, dass es die als ersten Parameter angegebene Funktion alle x Millisekunden ausführt, wobei x der Wert des 2. Parameters ist. Hier führen wir die `windBackward()` Funktion alle 200 Millisekunden aus — wir verwenden diese Funktion, um das Video konstant zurückzuspulen. Um ein [`setInterval()`](/de/docs/Web/API/Window/setInterval) zu stoppen, müssen Sie [`clearInterval()`](/de/docs/Web/API/Window/clearInterval) aufrufen und ihm den identifizierenden Namen des zu löschenden Intervalls geben, der in diesem Fall der Variablenname `intervalRwd` ist (siehe den `clearInterval()` Anruf früher in der Funktion).

3. Schließlich müssen wir die `windBackward()` und `windForward()` Funktionen definieren, die in den `setInterval()` Aufrufen aufgerufen wurden. Fügen Sie den folgenden Code unterhalb Ihrer beiden vorherigen Funktionen hinzu:

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

   Lassen Sie uns wieder nur die erste dieser Funktionen durchgehen, da sie nahezu identisch funktionieren, jedoch in umgekehrter Richtung zueinander. In `windBackward()` tun wir Folgendes — bedenken Sie, dass diese Funktion jedes Mal ausgeführt wird, wenn das Intervall aktiv ist, wobei dies einmal alle 200 Millisekunden geschieht.

   1. Wir beginnen mit einer `if` Anweisung, die überprüft, ob die aktuelle Zeit weniger als 3 Sekunden beträgt, d.h., ob das erneute Zurückspulen um weitere drei Sekunden sie über den Start des Videos hinausnehmen würde. Dies würde zu seltsamem Verhalten führen, daher stoppen wir in diesem Fall das Abspielen des Videos, indem wir `stopMedia()` aufrufen, entfernen die `active` Klasse von der Rückspultaste und löschen das `intervalRwd` Intervall, um die Rückspulfunktionalität zu stoppen. Wenn wir diesen letzten Schritt nicht ausführen würden, würde das Video einfach für immer zurückspulen.
   2. Wenn die aktuelle Zeit nicht innerhalb von 3 Sekunden nach dem Start des Videos liegt, entfernen wir drei Sekunden von der aktuellen Zeit, indem wir `media.currentTime -= 3` ausführen. In der Praxis spulen wir das Video also einmal alle 200 Millisekunden um 3 Sekunden zurück.

#### Die verstrichene Zeit aktualisieren

Das letzte Teil unseres Mediaplayers, das wir umsetzen müssen, sind die Zeit-verstrichen Anzeigen. Dazu führen wir eine Funktion aus, um die Zeitanzeigen jedes Mal zu aktualisieren, wenn das [`timeupdate`](/de/docs/Web/API/HTMLMediaElement/timeupdate_event) Ereignis auf dem `<video>` Element ausgelöst wird. Die Häufigkeit, mit der dieses Ereignis ausgelöst wird, hängt von Ihrem Browser, CPU-Leistung usw. ab. ([sehen Sie diesen Stack Overflow Post](https://stackoverflow.com/questions/9678177/how-often-does-the-timeupdate-event-fire-for-an-html5-video)).

Fügen Sie die folgende `addEventListener()` Zeile direkt unterhalb der anderen hinzu:

```js
media.addEventListener("timeupdate", setTime);
```

Definieren wir nun die `setTime()` Funktion. Fügen Sie Folgendes am Ende Ihrer Datei hinzu:

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

Dies ist eine ziemlich lange Funktion, lassen Sie uns sie Schritt für Schritt durchgehen:

1. Zuerst berechnen wir die Anzahl der Minuten und Sekunden in dem Wert der [`HTMLMediaElement.currentTime`](/de/docs/Web/API/HTMLMediaElement/currentTime).
2. Dann initialisieren wir zwei weitere Variablen — `minuteValue` und `secondValue`. Wir verwenden {{jsxref("String/padStart", "padStart()")}}, um jeden Wert 2 Zeichen lang zu machen, auch wenn der numerische Wert nur eine einzelne Ziffer ist.
3. Der tatsächliche Zeitwert, der angezeigt werden soll, wird als `minuteValue` plus einem Doppelpunkt-Zeichen plus `secondValue` festgelegt.
4. Der [`Node.textContent`](/de/docs/Web/API/Node/textContent) Wert des Timers wird auf den Zeitwert gesetzt, sodass er in der Benutzeroberfläche angezeigt wird.
5. Die Länge, die wir dem inneren `<div>` setzen sollten, wird berechnet, indem zuerst die Breite des äußeren `<div>` berechnet wird (die [`clientWidth`](/de/docs/Web/API/Element/clientWidth) Eigenschaft eines Elements enthält seine Länge), und dann multiplizieren wir sie mit der [`HTMLMediaElement.currentTime`](/de/docs/Web/API/HTMLMediaElement/currentTime) geteilt durch die gesamte [`HTMLMediaElement.duration`](/de/docs/Web/API/HTMLMediaElement/duration) des Mediums.
6. Wir setzen die Breite des inneren `<div>` auf die berechnete Balkenlänge plus "px", sodass es auf diese Anzahl von Pixeln gesetzt wird.

#### Wiedergabe und Pause korrigieren

Es bleibt ein Problem zu beheben. Wenn die Play/Pause- oder Stop-Tasten gedrückt werden, während die Rückspul- oder Vorspulfunktionalität aktiv ist, funktionieren sie einfach nicht. Wie können wir es beheben, damit sie die `rwd`/`fwd` Button-Funktionalität abbrechen und das Video wie erwartet abspielen/stoppen lassen? Dies ist relativ einfach zu beheben.

Fügen Sie zunächst die folgenden Zeilen innerhalb der `stopMedia()` Funktion hinzu — der Ort ist egal:

```js
rwd.classList.remove("active");
fwd.classList.remove("active");
clearInterval(intervalRwd);
clearInterval(intervalFwd);
```

Fügen Sie nun dieselben Zeilen zu Beginn der `playPauseMedia()` Funktion hinzu (direkt vor dem Beginn der `if` Anweisung).

An diesem Punkt könnten Sie die entsprechenden Zeilen aus den `windBackward()` und `windForward()` Funktionen löschen, da diese Funktionalität stattdessen in der `stopMedia()` Funktion implementiert wurde.

Hinweis: Sie könnten auch die Effizienz des Codes weiter verbessern, indem Sie eine separate Funktion erstellen, die diese Zeilen ausführt, und diese dann überall dort aufrufen, wo sie benötigt werden, anstatt die Zeilen mehrfach im Code zu wiederholen. Aber das überlassen wir Ihnen.

## Zusammenfassung

Ich denke, wir haben Ihnen genug in diesem Artikel beigebracht. Die [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) API bietet eine Fülle von Funktionen zum Erstellen einfacher Video- und Audioplayer, und das ist nur die Spitze des Eisbergs. Siehe den Abschnitt "Siehe auch" unten für Links zu komplexeren und interessanteren Funktionalitäten.

Hier sind einige Vorschläge, wie Sie das bestehende Beispiel, das wir entwickelt haben, erweitern könnten:

1. Die Zeitanzeige bricht derzeit zusammen, wenn das Video eine Stunde oder länger ist (nun, es wird keine Stunden anzeigen, sondern nur Minuten und Sekunden). Können Sie herausfinden, wie Sie das Beispiel ändern können, um Stunden anzuzeigen?
2. Da `<audio>` Elemente über die gleiche [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) Funktionalität verfügen, könnten Sie diesen Player leicht dazu bringen, auch für ein `<audio>` Element zu funktionieren. Versuchen Sie es.
3. Können Sie einen Weg finden, das innere `<div>` des Timers in eine tatsächliche Suchleiste/Scroller zu verwandeln — i.e., wenn Sie irgendwo auf die Leiste klicken, springt es zu dieser relativen Position in der Videowiedergabe? Als Hinweis, Sie können die X und Y Werte der linken/rechten und oberen/unteren Seiten des Elements über die [`getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect) Methode herausfinden, und Sie können die Koordinaten eines Mausklicks über das Ereignisobjekt des Klickereignisses auf das [`Document`](/de/docs/Web/API/Document) Objekt aufrufen. Zum Beispiel:

   ```js
   document.onclick = function (e) {
     console.log(e.x, e.y);
   };
   ```

## Siehe auch

- [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)
- [Video- und Audioinhalte](/de/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content) — einfacher Leitfaden zu `<video>` und `<audio>` HTML.
- [Audio- und Videowiedergabe](/de/docs/Web/Media/Audio_and_video_delivery) — ausführlicher Leitfaden zur Bereitstellung von Medien im Browser, mit vielen Tipps, Tricks und Links zu weiterführenden, fortgeschritteneren Tutorials.
- [Audio- und Videobearbeitung](/de/docs/Web/Media/Audio_and_video_manipulation) — ausführlicher Leitfaden zur Bearbeitung von Audio und Video, z.B. mit der [Canvas API](/de/docs/Web/API/Canvas_API), [Web Audio API](/de/docs/Web/API/Web_Audio_API) und mehr.
- {{htmlelement("video")}} und {{htmlelement("audio")}} Referenzseiten.
- [Leitfaden zu Medientypen und -formaten im Web](/de/docs/Web/Media/Formats)

{{PreviousMenuNext("Learn/JavaScript/Client-side_web_APIs/Drawing_graphics", "Learn/JavaScript/Client-side_web_APIs/Client-side_storage", "Learn/JavaScript/Client-side_web_APIs")}}
