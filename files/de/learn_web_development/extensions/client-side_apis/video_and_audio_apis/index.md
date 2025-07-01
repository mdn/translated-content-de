---
title: Video- und Audio-APIs
short-title: Video und Audio
slug: Learn_web_development/Extensions/Client-side_APIs/Video_and_audio_APIs
l10n:
  sourceCommit: 03e992bd263d9bd3d0c8db197dd1c4829e8dd206
---

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_APIs/Introduction", "Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics", "Learn_web_development/Extensions/Client-side_APIs")}}

HTML kommt mit Elementen zur Einbettung von reichhaltigen Medien in Dokumente — {{htmlelement("video")}} und {{htmlelement("audio")}} — die jeweils über eigene APIs zur Steuerung der Wiedergabe, des Suchens usw. verfügen. Dieser Artikel zeigt Ihnen, wie Sie gängige Aufgaben wie das Erstellen benutzerdefinierter Wiedergabesteuerungen ausführen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>, insbesondere <a href="/de/docs/Learn_web_development/Core/Scripting/Object_basics">JavaScript-Objektgrundlagen</a> und grundlegende API-Abdeckung wie <a href="/de/docs/Learn_web_development/Core/Scripting/DOM_scripting">DOM-Scripting</a> und <a href="/de/docs/Learn_web_development/Core/Scripting/Network_requests">Netzwerkanfragen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        <ul>
          <li>Was Codecs sind und die verschiedenen Video- und Audioformate.</li>
          <li>Verstehen der Schlüsselfunktionen, die mit Audio und Video verbunden sind — abspielen, pausieren, stoppen, rückwärts und vorwärts suchen, Dauer und aktuelle Zeit.</li>
          <li>Verwendung der <code>HTMLMediaElement</code>-API zum Erstellen eines einfachen benutzerdefinierten Media Players, für bessere Barrierefreiheit oder mehr Konsistenz über verschiedene Browser hinweg.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## HTML-Video und Audio

Die {{htmlelement("video")}}- und {{htmlelement("audio")}}-Elemente ermöglichen es uns, Video- und Audiodateien in Webseiten einzubetten. Wie wir in [HTML-Video und Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio) gezeigt haben, sieht eine typische Implementierung so aus:

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

{{EmbedGHLiveSample("learning-area/html/multimedia-and-embedding/video-and-audio-content/multiple-video-formats.html", '100%', 380)}}

Sie können alle HTML-Funktionen im oben verlinkten Artikel überprüfen; für unsere Zwecke ist das interessanteste Attribut [`controls`](/de/docs/Web/HTML/Reference/Elements/video#controls), das das Standardsatz von Wiedergabesteuerungen aktiviert. Wenn Sie dies nicht angeben, erhalten Sie keine Wiedergabesteuerungen:

{{EmbedGHLiveSample("learning-area/html/multimedia-and-embedding/video-and-audio-content/multiple-video-formats-no-controls.html", '100%', 380)}}

Dies ist für die Videowiedergabe nicht so unmittelbar nützlich, aber es hat Vorteile. Ein großes Problem mit den nativen Browser-Steuerungen ist, dass sie in jedem Browser unterschiedlich sind - nicht sehr gut für die Unterstützung über verschiedene Browser hinweg! Ein weiteres großes Problem ist, dass die nativen Steuerungen in den meisten Browsern nicht sehr tastaturfreundlich sind.

Sie können beide diese Probleme lösen, indem Sie die nativen Steuerungen verstecken (indem Sie das `controls`-Attribut entfernen) und Ihre eigenen mit HTML, CSS und JavaScript programmieren. Im nächsten Abschnitt werden wir uns die grundlegenden Tools ansehen, die uns dafür zur Verfügung stehen.

## Die HTMLMediaElement API

Teil der HTML-Spezifikation, die [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-API bietet Funktionen, die Ihnen ermöglichen, Video- und Audio-Player programmgesteuert zu steuern — beispielsweise [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play), [`HTMLMediaElement.pause()`](/de/docs/Web/API/HTMLMediaElement/pause) usw. Diese Schnittstelle ist für beide {{htmlelement("audio")}}- und {{htmlelement("video")}}-Elemente verfügbar, da die Funktionen, die Sie implementieren möchten, nahezu identisch sind. Lassen Sie uns ein Beispiel durchgehen und dabei nach und nach Funktionen hinzufügen.

Unser fertiges Beispiel wird in Aussehen (und Funktionalität) in etwa dem folgenden ähnlich sein:

{{EmbedGHLiveSample("learning-area/javascript/apis/video-audio/finished/", '100%', 360)}}

### Erste Schritte

Um mit diesem Beispiel zu beginnen, [laden Sie unser media-player-start.zip herunter](https://github.com/mdn/learning-area/blob/main/javascript/apis/video-audio/start/media-player-start.zip) und entpacken Sie es in ein neues Verzeichnis auf Ihrer Festplatte. Wenn Sie [unser Beispiel-Repo heruntergeladen haben](https://github.com/mdn/learning-area), finden Sie es in `javascript/apis/video-audio/start/`.

An dieser Stelle sollten Sie beim Laden des HTML einen ganz normalen HTML-Videoplayer sehen, mit den nativen Steuerungen angezeigt.

#### Untersuchung des HTML

Öffnen Sie die HTML-Indexdatei. Sie werden eine Reihe von Funktionen sehen; das HTML wird vom Videoplayer und seinen Steuerungen dominiert:

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

- Der gesamte Player ist in ein {{htmlelement("div")}}-Element gewickelt, sodass er bei Bedarf als eine Einheit gestaltet werden kann.
- Das {{htmlelement("video")}}-Element enthält zwei {{htmlelement("source")}}-Elemente, damit je nach Browser, der die Seite anzeigt, verschiedene Formate geladen werden können.
- Das Kontroll-HTML ist wahrscheinlich das interessanteste:
  - Wir haben vier {{htmlelement("button")}}-Elemente — Play/Pause, Stop, Rücklauf und Vorspulen.
  - Jedes `<button>` hat einen `class`-Namen, ein `data-icon`-Attribut für die Definition, welches Icon auf jedem Button angezeigt werden soll (wir zeigen, wie das im untenstehenden Abschnitt funktioniert), und ein `aria-label`-Attribut, um eine verständliche Beschreibung jedes Buttons bereitzustellen, da wir in den Tags kein menschlich lesbares Label bereitstellen. Die Inhalte der `aria-label`-Attribute werden von Screen-Readern vorgelesen, wenn ihre Benutzer sich auf die Elemente fokussieren, die sie enthalten.
  - Es gibt auch einen Timer-{{htmlelement("div")}}, der die verstrichene Zeit anzeigt, wenn das Video abgespielt wird. Nur zum Spaß bieten wir zwei Berichtsmethoden an — ein {{htmlelement("span")}}, das die verstrichene Zeit in Minuten und Sekunden enthält, und ein zusätzliches `<div>`, das wir verwenden werden, um eine horizontale Anzeigeleiste zu erstellen, die länger wird, wenn die Zeit verstreicht. Um eine Vorstellung davon zu bekommen, wie das fertige Produkt aussehen wird, [schauen Sie sich unsere fertige Version an](https://mdn.github.io/learning-area/javascript/apis/video-audio/finished/).

#### Untersuchung des CSS

Öffnen Sie jetzt die CSS-Datei und sehen Sie hinein. Das CSS für das Beispiel ist nicht allzu kompliziert, aber wir werden hier die interessantesten Teile hervorheben. Zuerst die `.controls`-Styles:

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

- Wir beginnen mit der {{cssxref("visibility")}} der benutzerdefinierten Steuerungen auf `hidden`. In unserem JavaScript später werden wir die Steuerungen auf `visible` setzen und das `controls`-Attribut vom `<video>`-Element entfernen. Das ist so, dass, wenn das JavaScript aus irgendeinem Grund nicht geladen wird, Benutzer trotzdem das Video mit den nativen Steuerungen verwenden können.
- Wir geben den Steuerungen eine {{cssxref("opacity")}} von 0.5 standardmäßig, damit sie weniger ablenkend sind, wenn Sie versuchen, das Video zu sehen. Nur wenn Sie über den Player schweben/fokussieren, erscheinen die Steuerungen mit voller Deckkraft.
- Wir machen die Tasten in der Steuerungsleiste mithilfe von Flexbox ({{cssxref("display")}}: flex) flexibler, um die Dinge zu erleichtern.

Schauen wir uns als Nächstes unsere Button-Icons an:

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
  color: #aaa;
  text-shadow: 1px 1px 0px black;
}
```

Zunächst importieren wir oben im CSS mit einem {{cssxref("@font-face")}}-Block eine benutzerdefinierte Web-Schriftart. Dies ist eine Icon-Schriftart — alle Buchstaben des Alphabets entsprechen gängigen Icons, die Sie in einer Anwendung verwenden möchten.

Als Nächstes verwenden wir generierten Inhalt, um ein Icon auf jedem Button anzuzeigen:

- Wir verwenden den {{cssxref("::before")}}-Selektor, um den Inhalt vor jedem {{htmlelement("button")}}-Element anzuzeigen.
- Wir verwenden die {{cssxref("content")}}-Eigenschaft, um den anzuzeigenden Inhalt in jedem Fall gleich dem Inhalt des [`data-icon`](/de/docs/Web/HTML/How_to/Use_data_attributes)-Attributs zu setzen. Im Fall unseres Play-Buttons enthält `data-icon` ein großes "P".
- Wir wenden die benutzerdefinierte Web-Schriftart auf unsere Buttons mit {{cssxref("font-family")}} an. In dieser Schriftart ist "P" tatsächlich ein "play"-Icon, daher hat der Play-Button ein "play"-Icon angezeigt.

Icon-Schriftarten sind aus vielen Gründen sehr cool — sie reduzieren die HTTP-Anfragen, weil Sie diese Icons nicht als Bilddateien herunterladen müssen, haben eine großartige Skalierbarkeit und Sie können Text-Eigenschaften verwenden, um sie zu stylen — wie {{cssxref("color")}} und {{cssxref("text-shadow")}}.

Lassen Sie uns zum Schluss das CSS für den Timer ansehen:

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

- Wir setzen das äußere `.timer`-Element auf `flex: 5`, damit es den größten Teil der Breite der Steuerungsleiste ausfüllt. Wir geben ihm auch {{cssxref("position", "position: relative")}}, damit wir Elemente bequem gemäß seinen Begrenzungen platzieren können und nicht gemäß den Begrenzungen des {{htmlelement("body")}}-Elements.
- Das innere `<div>` wird absolut positioniert, um direkt auf dem äußeren `<div>` zu sitzen. Es erhält auch eine Anfangsbreite von 0, sodass Sie es überhaupt nicht sehen können. Während das Video abgespielt wird, wird die Breite über JavaScript erhöht, während das Video abläuft.
- Das `<span>` wird ebenfalls absolut positioniert, um sich in der Nähe der linken Seite der Timer-Leiste zu befinden.
- Wir geben unserem inneren `<div>` und `<span>` den passenden {{cssxref("z-index")}}, damit der Timer oben angezeigt wird und das innere `<div>` darunter. Auf diese Weise stellen wir sicher, dass wir alle Informationen sehen können — ein Feld verdeckt nicht ein anderes.

### Implementierung des JavaScripts

Wir haben bereits eine ziemlich vollständige HTML- und CSS-Oberfläche; jetzt müssen wir nur noch alle Tasten anschließen, um die Steuerungen funktionsfähig zu machen.

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
   - Das `<video>`-Element und die Steuerungsleiste.
   - Die Play/Pause-, Stopp-, Rücklauf- und Vorspul-Tasten.
   - Das äußere Timer-Wrapper-`<div>`, die digitale Timer-Anzeige-`<span>` und das innere `<div>`, das breiter wird, während die Zeit abläuft.

3. Fügen Sie als Nächstes das folgende am Ende Ihres Codes ein:

   ```js
   media.removeAttribute("controls");
   controls.style.visibility = "visible";
   ```

   Diese beiden Zeilen entfernen die Standard-Browser-Steuerungen vom Video und machen die benutzerdefinierten Steuerungen sichtbar.

#### Abspielen und Pausieren des Videos

Lassen Sie uns die wahrscheinlich wichtigste Steuerung implementieren — die Play/Pause-Taste.

1. Fügen Sie zunächst den folgenden Code am Ende Ihres Codes hinzu, damit die `playPauseMedia()`-Funktion aufgerufen wird, wenn die Wiedergabetaste geklickt wird:

   ```js
   play.addEventListener("click", playPauseMedia);
   ```

2. Jetzt um `playPauseMedia()` zu definieren — fügen Sie das folgende am Ende Ihres Codes hinzu:

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

   Hier verwenden wir eine [`if`](/de/docs/Web/JavaScript/Reference/Statements/if...else)-Anweisung, um zu überprüfen, ob das Video pausiert ist. Die [`HTMLMediaElement.paused`](/de/docs/Web/API/HTMLMediaElement/paused)-Eigenschaft gibt wahr zurück, wenn das Medium pausiert ist, was jedes Mal der Fall ist, wenn das Video nicht abgespielt wird, einschließlich wenn es nach dem ersten Laden auf 0 Dauer eingestellt ist. Wenn es pausiert ist, setzen wir den `data-icon`-Attributwert auf der Play-Taste auf "u", was ein "pausiert"-Icon ist, und rufen die [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play)-Methode auf, um das Medium abzuspielen.

   Beim zweiten Klick wird die Taste wieder zurückgeschaltet — das "Play"-Icon wird erneut angezeigt und das Video wird mit [`HTMLMediaElement.pause()`](/de/docs/Web/API/HTMLMediaElement/pause) pausiert.

#### Stoppen des Videos

1. Als nächstes fügen wir eine Funktionalität hinzu, um das Video zu stoppen. Fügen Sie die folgende [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)-Zeilen unter den bisherigen hinzu:

   ```js
   stop.addEventListener("click", stopMedia);
   media.addEventListener("ended", stopMedia);
   ```

   Das [`click`](/de/docs/Web/API/Element/click_event)-Ereignis ist offensichtlich — wir möchten das Video stoppen, indem wir unsere `stopMedia()`-Funktion ausführen, wenn die Stopp-Taste geklickt wird. Wir möchten das Video jedoch auch stoppen, wenn es die Wiedergabe beendet hat — dies wird durch das [`ended`](/de/docs/Web/API/HTMLMediaElement/ended_event)-Ereignis dargestellt, das ausgelöst wird, daher richten wir auch einen Listener ein, um die Funktion beim Auslösen dieses Ereignisses auszuführen.

2. Definieren wir als nächstes `stopMedia()` — fügen Sie die folgende Funktion unterhalb von `playPauseMedia()` hinzu:

   ```js
   function stopMedia() {
     media.pause();
     media.currentTime = 0;
     play.setAttribute("data-icon", "P");
   }
   ```

   Es gibt keine `stop()`-Methode in der HTMLMediaElement API — das Äquivalent ist das Pausieren des Videos durch `pause()`, und das Setzen seiner [`currentTime`](/de/docs/Web/API/HTMLMediaElement/currentTime)-Eigenschaft auf 0. Das Setzen von `currentTime` auf einen Wert (in Sekunden) springt das Medium sofort zu dieser Position.

   Alles, was danach noch zu tun ist, ist das angezeigte Icon auf das "Play"-Icon zu setzen. Unabhängig davon, ob das Video pausiert oder abgespielt wurde, als die Stopp-Taste gedrückt wurde, möchten Sie, dass es danach bereit ist, abgespielt zu werden.

#### Rückwärts- und Vorwärtssuchen

Es gibt viele Möglichkeiten, Rücklauf- und Vorspielfunktionalität zu implementieren; hier zeigen wir Ihnen eine relativ komplexe Methode, die nicht kaputtgeht, wenn die verschiedenen Tasten in unerwarteter Reihenfolge gedrückt werden.

1. Fügen Sie zunächst die folgenden zwei [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) Zeilen unter den vorherigen ein:

   ```js
   rwd.addEventListener("click", mediaBackward);
   fwd.addEventListener("click", mediaForward);
   ```

2. Nun zu den Ereignisbehandlungsfunktionen — fügen Sie den folgenden Code unterhalb Ihrer vorherigen Funktionen ein, um `mediaBackward()` und `mediaForward()` zu definieren:

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

   Sie werden bemerken, dass wir zuerst zwei Variablen initialisieren — `intervalFwd` und `intervalRwd` — Sie werden später erfahren, wozu sie dienen.

   Lassen Sie uns `mediaBackward()` durchgehen (die Funktionalität für `mediaForward()` ist genau dieselbe, nur umgekehrt):
   1. Wir löschen alle Klassen und Intervalle, die auf die Vorspielfunktionalität gesetzt sind — wir tun dies, weil, wenn wir die `rwd`-Taste nach dem Drücken der `fwd`-Taste drücken, wir jegliche Vorspielfunktionalität abbrechen und durch die Rückspulfunktionalität ersetzen möchten. Wenn wir versuchen würden, beides gleichzeitig zu tun, würde der Player kaputt gehen.
   2. Wir verwenden eine `if`-Anweisung, um zu überprüfen, ob die `active`-Klasse auf der `rwd`-Taste gesetzt wurde, was darauf hinweist, dass sie bereits gedrückt wurde. Die [`classList`](/de/docs/Web/API/Element/classList) ist eine ziemlich praktische Eigenschaft, die auf jedem Element existiert — sie enthält eine Liste aller auf dem Element gesetzten Klassen sowie Methoden zum Hinzufügen/Entfernen von Klassen usw. Wir verwenden die `classList.contains()`-Methode, um zu überprüfen, ob die Liste die `active`-Klasse enthält. Dies gibt ein boolesches `true`/`false`-Ergebnis zurück.
   3. Wenn `active` bereits auf der `rwd`-Taste gesetzt ist, entfernen wir es mit `classList.remove()`, löschen das Intervall, das beim ersten Drücken der Taste gesetzt wurde (siehe unten für mehr Erklärung), und verwenden [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play), um den Rücklauf abzubrechen und das Video normal abzuspielen.
   4. Wenn es noch nicht gesetzt wurde, fügen wir die `active`-Klasse zur `rwd`-Taste mit `classList.add()` hinzu, pausieren das Video mit [`HTMLMediaElement.pause()`](/de/docs/Web/API/HTMLMediaElement/pause), und setzen die `intervalRwd`-Variable gleich einem [`setInterval()`](/de/docs/Web/API/Window/setInterval)-Aufruf. Wenn `setInterval()` aufgerufen wird, wird ein aktives Intervall erstellt, was bedeutet, dass die Funktion, die als erster Parameter angeben ist, alle x Millisekunden ausgeführt wird, wobei x der Wert des zweiten Parameters ist. Hier führen wir also die `windBackward()`-Funktion alle 200 Millisekunden aus — wir verwenden diese Funktion, um das Video konstant zurückzuspulen. Um ein `setInterval()` ([`clearInterval()`](/de/docs/Web/API/Window/clearInterval)) zu stoppen, müssen Sie `clearInterval()` aufrufen und ihm den Identifikationsnamen des zu löschenden Intervalls geben, in diesem Fall den Variablennamen `intervalRwd` (siehe den `clearInterval()`-Aufruf früher in der Funktion).

3. Schließlich müssen wir die `windBackward()`- und `windForward()`-Funktionen definieren, die in den `setInterval()`-Aufrufen aufgerufen werden. Fügen Sie das Folgende unter Ihren beiden vorherigen Funktionen hinzu:

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

   Wieder werden wir nur die erste dieser Funktionen durchgehen, da sie fast identisch arbeiten, jedoch umgekehrt zueinander. In `windBackward()` tun wir Folgendes — beachten Sie, dass bei aktivem Intervall diese Funktion einmal alle 200 Millisekunden ausgeführt wird.
   1. Wir beginnen mit einer `if`-Anweisung, die überprüft, ob die aktuelle Zeit weniger als 3 Sekunden beträgt, d.h. wenn das Zurückspulen um weitere drei Sekunden es vor den Anfang des Videos bringen würde. Dies würde seltsames Verhalten verursachen, daher stoppen wir in diesem Fall die Videowiedergabe, indem wir `stopMedia()` aufrufen, die `active`-Klasse von der Rückspultaste entfernen und das `intervalRwd`-Intervall löschen, um die Rücklauf-Funktionalität zu stoppen. Wenn wir diesen letzten Schritt nicht machen würden, würde das Video einfach ewig zurückspulen.
   2. Wenn die aktuelle Zeit nicht innerhalb von 3 Sekunden vom Beginn des Videos liegt, entfernen wir drei Sekunden von der aktuellen Zeit, indem wir `media.currentTime -= 3` ausführen. So spulen wir das Video in Effekt alle 200 Millisekunden um 3 Sekunden zurück.

#### Aktualisierung der verstrichenen Zeit

Das allerletzte Stück unseres Medienplayers zu implementieren ist die Anzeige der verstrichenen Zeit. Dazu führen wir eine Funktion aus, um die Zeitdisplays jedes Mal zu aktualisieren, wenn das [`timeupdate`](/de/docs/Web/API/HTMLMediaElement/timeupdate_event)-Ereignis auf dem `<video>`-Element ausgelöst wird. Die Frequenz, mit der dieses Ereignis ausgelöst wird, hängt von Ihrem Browser, der CPU-Leistung usw. ab ([siehe diesen Stack Overflow-Beitrag](https://stackoverflow.com/questions/9678177/how-often-does-the-timeupdate-event-fire-for-an-html5-video)).

Fügen Sie die folgende `addEventListener()`-Zeile direkt unter den anderen hinzu:

```js
media.addEventListener("timeupdate", setTime);
```

Nun definieren wir die `setTime()`-Funktion. Fügen Sie das Folgende unten in Ihrer Datei hinzu:

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

1. Zunächst ermitteln wir die Anzahl der Minuten und Sekunden im [`HTMLMediaElement.currentTime`](/de/docs/Web/API/HTMLMediaElement/currentTime)-Wert.
2. Dann initialisieren wir zwei weitere Variablen — `minuteValue` und `secondValue`. Wir verwenden {{jsxref("String/padStart", "padStart()")}}, um jeden Wert 2 Zeichen lang zu machen, selbst wenn der numerische Wert nur ein einzelnes Ziffer ist.
3. Der tatsächlich anzuzeigende Zeitwert wird auf `minuteValue` plus ein Doppelpunktzeichen plus `secondValue` gesetzt.
4. Der [`Node.textContent`](/de/docs/Web/API/Node/textContent)-Wert des Timers wird auf den Zeitwert gesetzt, sodass er in der Benutzeroberfläche angezeigt wird.
5. Die Länge, die wir dem inneren `<div>` setzen sollten, wird berechnet, indem wir zuerst die Breite des äußeren `<div>` berechnen (die [`clientWidth`](/de/docs/Web/API/Element/clientWidth)-Eigenschaft eines beliebigen Elements enthält seine Länge), und dann multiplizieren wir sie mit der [`HTMLMediaElement.currentTime`](/de/docs/Web/API/HTMLMediaElement/currentTime) geteilt durch die gesamte [`HTMLMediaElement.duration`](/de/docs/Web/API/HTMLMediaElement/duration) des Mediums.
6. Wir setzen die Breite des inneren `<div>` auf die berechnete Balkenlänge, plus "px", damit es auf diese Anzahl von Pixeln gesetzt wird.

#### Fixieren von Play und Pause

Es gibt ein Problem, das noch zu beheben ist. Wenn die Play/Pause- oder die Stopp-Taste gedrückt werden, während die Rückspul- oder Vorspielfunktionalität aktiv ist, funktionieren sie einfach nicht. Wie können wir es beheben, damit sie die `rwd`/`fwd`-Tastenfunktionalität abbrechen und das Video so abspielen/stoppen, wie Sie es erwarten? Dies ist relativ einfach zu beheben.

Fügen Sie zunächst die folgenden Zeilen innerhalb der `stopMedia()`-Funktion hinzu — irgendwo wird es funktionieren:

```js
rwd.classList.remove("active");
fwd.classList.remove("active");
clearInterval(intervalRwd);
clearInterval(intervalFwd);
```

Nun fügen Sie die gleichen Zeilen erneut ganz am Anfang der `playPauseMedia()`-Funktion hinzu (direkt vor dem Start der `if`-Anweisung).

An dieser Stelle könnten Sie die äquivalenten Zeilen aus den Funktionen `windBackward()` und `windForward()` löschen, da diese Funktionalität stattdessen in der `stopMedia()`-Funktion implementiert wurde.

Hinweis: Sie könnten auch die Effizienz des Codes weiter verbessern, indem Sie eine eigene Funktion erstellen, die diese Zeilen ausführt, und diese dann überall dort aufrufen, wo sie benötigt werden, anstatt die Zeilen mehrmals im Code zu wiederholen. Aber das überlassen wir Ihnen.

## Zusammenfassung

Ich denke, wir haben Ihnen in diesem Artikel genug beigebracht. Die [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-API stellt eine Fülle von Funktionalitäten zur Verfügung, um einfache Video- und Audioplayer zu erstellen, und das ist nur die Spitze des Eisbergs. Siehe den Abschnitt "Siehe auch" unten für Links zu komplexeren und interessanteren Funktionen.

Hier einige Vorschläge, wie Sie das bestehende Beispiel, das wir aufgebaut haben, verbessern könnten:

1. Die Zeitanzeige bricht derzeit ab, wenn das Video eine Stunde oder länger ist (nun, es zeigt keine Stunden an; nur Minuten und Sekunden). Können Sie herausfinden, wie Sie das Beispiel ändern können, um Stunden anzuzeigen?
2. Da `<audio>`-Elemente die gleiche [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-Funktionalität verfügbar haben, könnten Sie diesen Player auch leicht für ein `<audio>`-Element arbeiten lassen. Versuchen Sie es zu tun.
3. Können Sie einen Weg finden, das innere `<div>`-Element des Timers in eine echte Suchleiste/Scroller umzuwandeln — d.h. wenn Sie irgendwo auf die Leiste klicken, springt es zu dieser relativen Position in der Videowiedergabe? Als Hinweis können Sie die X- und Y-Werte der linken/rechten und oberen/unteren Seiten des Elements über die [`getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect)-Methode herausfinden, und Sie können die Koordinaten eines Mausklicks über das Ereignisobjekt des Klickevents herausfinden, das auf dem [`Document`](/de/docs/Web/API/Document)-Objekt aufgerufen wird. Zum Beispiel:

   ```js
   document.onclick = function (e) {
     console.log(e.x, e.y);
   };
   ```

## Siehe auch

- [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)
- [HTML-Video und Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio) — einfache Anleitung zu `<video>` und `<audio>` HTML.
- [Audio- und Videoauslieferung](/de/docs/Web/Media/Guides/Audio_and_video_delivery) — detaillierte Anleitung zur Auslieferung von Medien im Browser, mit vielen Tipps, Tricks und Links zu weiterführenden, fortgeschritteneren Tutorials.
- [Audio- und Videobearbeitung](/de/docs/Web/Media/Guides/Audio_and_video_manipulation) — detaillierte Anleitung zur Bearbeitung von Audio und Video, z.B. mit [Canvas API](/de/docs/Web/API/Canvas_API), [Web Audio API](/de/docs/Web/API/Web_Audio_API) und mehr.
- Referenzseiten zu {{htmlelement("video")}} und {{htmlelement("audio")}}.
- [Leitfaden zu Medientypen und -formaten im Web](/de/docs/Web/Media/Guides/Formats)

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_APIs/Introduction", "Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics", "Learn_web_development/Extensions/Client-side_APIs")}}
