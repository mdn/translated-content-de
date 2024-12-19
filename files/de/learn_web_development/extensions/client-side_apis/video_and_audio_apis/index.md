---
title: Video- und Audio-APIs
slug: Learn_web_development/Extensions/Client-side_APIs/Video_and_audio_APIs
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_APIs/Introduction", "Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics", "Learn_web_development/Extensions/Client-side_APIs")}}

HTML enthält Elemente zum Einbetten von Rich Media in Dokumente — {{htmlelement("video")}} und {{htmlelement("audio")}} — die wiederum ihre eigenen APIs zum Steuern der Wiedergabe, des Suchens etc. haben. Dieser Artikel zeigt Ihnen, wie Sie gängige Aufgaben wie das Erstellen benutzerdefinierter Wiedergabesteuerelemente ausführen.

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
          <li>Verstehen der Hauptfunktionalitäten, die mit Audio und Video verbunden sind — abspielen, pausieren, stoppen, zurück und vorwärts suchen, Dauer und aktuelle Zeit.</li>
          <li>Verwendung der <code>HTMLMediaElement</code>-API, um einen grundlegenden benutzerdefinierten Medienplayer zu erstellen, für bessere Zugänglichkeit oder mehr Konsistenz über Browser hinweg.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## HTML-Video und -Audio

Die {{htmlelement("video")}} und {{htmlelement("audio")}}-Elemente ermöglichen es uns, Video- und Audiodateien in Webseiten einzubetten. Wie in [HTML-Video und -Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio) gezeigt, sieht eine typische Implementierung folgendermaßen aus:

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

Sie können in dem oben verlinkten Artikel nachlesen, was all die HTML-Features bewirken; für unsere Zwecke hier ist das interessanteste Attribut [`controls`](/de/docs/Web/HTML/Element/video#controls), das die Standardsatz der Wiedergabesteuerelemente aktiviert. Wenn Sie dies nicht angeben, erhalten Sie keine Wiedergabesteuerelemente:

{{EmbedGHLiveSample("learning-area/html/multimedia-and-embedding/video-and-audio-content/multiple-video-formats-no-controls.html", '100%', 380)}}

Dies ist nicht sofort nützlich für die Videowiedergabe, hat jedoch Vorteile. Ein großes Problem mit den nativen Browser-Steuerelementen ist, dass sie in jedem Browser unterschiedlich sind — nicht gerade gut für die Unterstützung über mehrere Browser hinweg! Ein weiteres großes Problem ist, dass die nativen Steuerelemente in den meisten Browsern nicht sehr tastaturzugänglich sind.

Sie können beide Probleme lösen, indem Sie die nativen Steuerelemente ausblenden (indem Sie das `controls`-Attribut entfernen) und Ihre eigenen mit HTML, CSS und JavaScript programmieren. Im nächsten Abschnitt werden wir uns die grundlegenden Werkzeuge ansehen, die wir dafür zur Verfügung haben.

## Die HTMLMediaElement-API

Teil der HTML-Spezifikation, die [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-API bietet Funktionen, die es ermöglichen, Video- und Audioplayer programmgesteuert zu steuern — zum Beispiel [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play), [`HTMLMediaElement.pause()`](/de/docs/Web/API/HTMLMediaElement/pause) usw. Diese Schnittstelle ist sowohl für {{htmlelement("audio")}} als auch {{htmlelement("video")}} Elemente verfügbar, da die Funktionen, die Sie implementieren möchten, nahezu identisch sind. Lassen Sie uns ein Beispiel durchgehen, bei dem wir schrittweise Funktionen hinzufügen.

Unser fertiges Beispiel wird wie folgt aussehen (und funktionieren):

{{EmbedGHLiveSample("learning-area/javascript/apis/video-audio/finished/", '100%', 360)}}

### Erste Schritte

Um mit diesem Beispiel zu beginnen, [laden Sie unser media-player-start.zip herunter](https://github.com/mdn/learning-area/blob/main/javascript/apis/video-audio/start/media-player-start.zip) und entpacken Sie es in ein neues Verzeichnis auf Ihrer Festplatte. Wenn Sie [unser Beispiel-Repository heruntergeladen haben](https://github.com/mdn/learning-area), finden Sie es unter `javascript/apis/video-audio/start/`.

Zu diesem Zeitpunkt sollte, wenn Sie die HTML-Datei laden, ein ganz normaler HTML-Videoplayer angezeigt werden, mit den nativen Steuerelementen.

#### Die HTML-Datei erkunden

Öffnen Sie die Index-Datei im HTML. Sie werden eine Reihe von Funktionen sehen; das HTML wird von dem Videoplayer und dessen Steuerelementen dominiert:

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

- Der gesamte Player ist in ein {{htmlelement("div")}}-Element eingewickelt, sodass er bei Bedarf als eine Einheit gestylt werden kann.
- Das {{htmlelement("video")}}-Element enthält zwei {{htmlelement("source")}}-Elemente, damit verschiedene Formate abhängig vom Browser geladen werden können, der die Seite betrachtet.
- Das HTML der Steuerelemente ist wahrscheinlich am interessantesten:

  - Wir haben vier {{htmlelement("button")}}s — abspielen/pausieren, stoppen, zurückspulen und vorspulen.
  - Jedes `<button>` hat einen `class`-Namen, ein `data-icon`-Attribut, um anzugeben, welches Symbol auf jedem Button angezeigt werden soll (wir werden im folgenden Abschnitt zeigen, wie das funktioniert), und ein `aria-label`-Attribut, um eine verständliche Beschreibung jedes Buttons bereitzustellen, da wir innerhalb der Tags kein menschenlesbares Label bereitstellen. Die Inhalte der `aria-label`-Attribute werden von Bildschirmlesern vorgelesen, wenn deren Benutzer auf die Elemente fokussieren, die sie enthalten.
  - Es gibt auch einen Timer-{{htmlelement("div")}}, der die verstrichene Zeit anzeigt, wenn das Video abgespielt wird. Nur aus Spaß bereitstellen wir zwei Berichtmechanismen — ein {{htmlelement("span")}}, das die verstrichene Zeit in Minuten und Sekunden enthält, und ein zusätzliches `<div>`, das wir verwenden werden, um eine horizontale Anzeigebalken zu erzeugen, die länger wird, je mehr Zeit verstreicht. Um eine Vorstellung davon zu bekommen, wie das fertige Produkt aussehen wird, [sehen Sie sich unsere fertige Version an](https://mdn.github.io/learning-area/javascript/apis/video-audio/finished/).

#### Die CSS-Datei erkunden

Öffnen Sie nun die CSS-Datei und werfen Sie einen Blick hinein. Das CSS für das Beispiel ist nicht zu kompliziert, aber wir werden hier die interessantesten Teile hervorheben. Beachten Sie zunächst das Styling `.controls`:

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

- Wir fangen mit der {{cssxref("visibility")}} der benutzerdefinierten Steuerelemente an, die auf `hidden` gesetzt ist. In unserem JavaScript werden wir später die Steuerelemente auf `visible` setzen und das `controls`-Attribut vom `<video>`-Element entfernen. Dies ist so, dass, falls das JavaScript aus irgendeinem Grund nicht geladen wird, die Benutzer das Video weiterhin mit den nativen Steuerelementen verwenden können.
- Wir geben den Steuerelementen standardmäßig eine {{cssxref("opacity")}} von 0,5, damit sie weniger ablenkend sind, wenn Sie versuchen, das Video anzusehen. Nur wenn Sie den Player schweben/fokussieren, werden die Steuerelemente mit voller Deckkraft angezeigt.
- Wir ordnen die Tasten innerhalb der Steuerleiste mit Flexbox ({{cssxref("display")}}: flex) an, um die Sache zu erleichtern.

Als nächstes schauen wir uns unsere Schaltflächensymbole an:

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

Zunächst einmal verwenden wir oben im CSS einen {{cssxref("@font-face")}}-Block, um eine benutzerdefinierte Webschriftart zu importieren. Dies ist eine Symbolschriftart — alle Buchstaben des Alphabets bedeuten gängige Symbole, die Sie möglicherweise in einer Anwendung verwenden möchten.

Als nächstes verwenden wir generierte Inhalte, um auf jeder Schaltfläche ein Symbol anzuzeigen:

- Wir verwenden den {{cssxref("::before")}}-Selektor, um den Inhalt vor jedem {{htmlelement("button")}}-Element anzuzeigen.
- Wir verwenden die {{cssxref("content")}}-Eigenschaft, um den in jedem Fall anzuzeigenden Inhalt gleich dem Inhalt des [`data-icon`](/de/docs/Learn_web_development/Howto/Solve_HTML_problems/Use_data_attributes)-Attributs zu setzen. Im Fall unserer Wiedergabeschaltfläche enthält `data-icon` ein großes "P".
- Wir wenden die benutzerdefinierte Webschriftart auf unsere Schaltflächen mit {{cssxref("font-family")}} an. In dieser Schriftart ist "P" tatsächlich ein "Wiedergabe"-Symbol, daher hat die Wiedergabeschaltfläche ein "Wiedergabe"-Symbol, das auf ihr angezeigt wird.

Symbolschriften sind aus vielen Gründen sehr cool — weniger HTTP-Anfragen, weil Sie diese Symbole nicht als Bilddateien herunterladen müssen, großartige Skalierbarkeit und die Tatsache, dass Sie Text-Eigenschaften verwenden können, um sie zu stylen — wie {{cssxref("color")}} und {{cssxref("text-shadow")}}.

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

- Wir setzen das äußere `.timer`-Element auf `flex: 5`, damit es den größten Teil der Breite der Steuerleiste einnimmt. Wir geben ihm auch {{cssxref("position", "position: relative")}}, damit wir die Elemente bequem innerhalb seiner Grenzen positionieren können und nicht innerhalb der Grenzen des {{htmlelement("body")}}-Elements.
- Das innere `<div>` ist absolut positioniert, um direkt über dem äußeren `<div>` zu sitzen. Es wird auch mit einer anfänglichen Breite von 0 versehen, sodass es überhaupt nicht sichtbar ist. Wenn das Video abgespielt wird, wird die Breite über JavaScript erhöht, wenn das Video fortschreitet.
- Das `<span>` ist ebenfalls absolut positioniert, um in der Nähe des linken Randes der Timerleiste zu sitzen.
- Wir geben unserem inneren `<div>` und `<span>` auch die richtige {{cssxref("z-index")}}, damit der Timer oben angezeigt wird und das innere `<div>` darunter. So stellen wir sicher, dass wir alle Informationen sehen können – ein Kasten verdeckt keinen anderen.

### Implementierung des JavaScripts

Wir haben bereits eine ziemlich vollständige HTML- und CSS-Oberfläche; jetzt müssen wir nur noch alle Schaltflächen verbinden, um die Steuerelemente zum Laufen zu bringen.

1. Erstellen Sie eine neue JavaScript-Datei im gleichen Verzeichnisebene wie Ihre index.html-Datei. Nennen Sie sie `custom-player.js`.
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

   Hier erstellen wir Konstanten, um Referenzen auf alle Objekte zu halten, die wir manipulieren möchten. Es gibt drei Gruppen:

   - Das `<video>`-Element und die Steuerleiste.
   - Die Schaltflächen abspielen/pausieren, stoppen, zurückspulen und vorspulen.
   - Die äußere Timer-Wrapper-`<div>`, die digitale Timer-Anzeige `<span>` und das innere `<div>`, das breiter wird, wenn die Zeit verstreicht.

3. Fügen Sie als nächstes Folgendes am Ende Ihres Codes ein:

   ```js
   media.removeAttribute("controls");
   controls.style.visibility = "visible";
   ```

   Diese beiden Zeilen entfernen die Standard-Browsersteuerelemente aus dem Video und machen die benutzerdefinierten Steuerelemente sichtbar.

#### Abspielen und Pausieren des Videos

Lassen Sie uns wahrscheinlich das wichtigste Steuerelement implementieren — die Abspielen/Pausieren-Schaltfläche.

1. Fügen Sie zunächst Folgendes am Ende Ihres Codes hinzu, damit die Funktion `playPauseMedia()` aufgerufen wird, wenn die Wiedergabetaste geklickt wird:

   ```js
   play.addEventListener("click", playPauseMedia);
   ```

2. Nun definieren Sie `playPauseMedia()` — fügen Sie Folgendes hinzu, wiederum am Ende Ihres Codes:

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

   Hier verwenden wir eine [`if`](/de/docs/Web/JavaScript/Reference/Statements/if...else)-Anweisung, um zu überprüfen, ob das Video angehalten ist. Die Eigenschaft [`HTMLMediaElement.paused`](/de/docs/Web/API/HTMLMediaElement/paused) gibt true zurück, wenn das Medium angehalten ist, was jedes Mal der Fall ist, wenn das Video nicht abgespielt wird, einschließlich wenn es auf 0 Zeitdauer gesetzt ist, nachdem es erstmals geladen wird. Wenn es angehalten ist, setzen wir den Wert des `data-icon`-Attributs auf dem Wiedergabeknopf auf "u", was ein "pausiert"-Symbol ist, und rufen die Methode [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play) auf, um das Medium abzuspielen.

   Beim zweiten Klick wird die Schaltfläche wieder zurückgeschaltet — das "Wiedergabe"-Symbol wird wieder angezeigt und das Video wird mit [`HTMLMediaElement.pause()`](/de/docs/Web/API/HTMLMediaElement/pause) pausiert.

#### Das Video stoppen

1. Als Nächstes fügen wir eine Funktionalität zum Stoppen des Videos hinzu. Fügen Sie die folgenden [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)-Zeilen unterhalb der vorherigen ein, die Sie hinzugefügt haben:

   ```js
   stop.addEventListener("click", stopMedia);
   media.addEventListener("ended", stopMedia);
   ```

   Das [`click`](/de/docs/Web/API/Element/click_event)-Ereignis ist offensichtlich — wir möchten das Video stoppen, indem wir unsere Funktion `stopMedia()` aufrufen, wenn die Stopptaste geklickt wird. Wir möchten jedoch auch, dass das Video stoppt, wenn es fertig abgespielt wird — dies wird durch das Auslösen des [`ended`](/de/docs/Web/API/HTMLMediaElement/ended_event)-Ereignisses markiert, daher richten wir auch einen Listener ein, der die Funktion beim Auslösen dieses Ereignisses ausführt.

2. Definieren wir als nächstes `stopMedia()` — fügen Sie die folgende Funktion unterhalb von `playPauseMedia()` hinzu:

   ```js
   function stopMedia() {
     media.pause();
     media.currentTime = 0;
     play.setAttribute("data-icon", "P");
   }
   ```

   Es gibt keine `stop()`-Methode in der HTMLMediaElement-API — das Äquivalent dazu ist, das Video zu `pausieren()` und seine Eigenschaft [`currentTime`](/de/docs/Web/API/HTMLMediaElement/currentTime) auf 0 zu setzen. Wenn Sie `currentTime` auf einen Wert (in Sekunden) setzen, springt das Medium sofort zu dieser Position.

   Alles, was danach übrig bleibt, ist das Anzeigen des "Wiedergabe"-Symbols. Unabhängig davon, ob das Video angehalten oder abgespielt wurde, als die Stopptaste gedrückt wurde, möchten Sie, dass es danach zum Abspielen bereit ist.

#### Rück- und Vorspulen

Es gibt viele Möglichkeiten, mit denen Sie Rückspul- und Vorspul-Funktionalität implementieren können; hier zeigen wir Ihnen eine relativ komplexe Methode, die nicht kaputt geht, wenn die verschiedenen Schaltflächen in unerwarteter Reihenfolge gedrückt werden.

1. Fügen Sie zunächst die folgenden zwei [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)-Zeilen unter den vorherigen hinzu:

   ```js
   rwd.addEventListener("click", mediaBackward);
   fwd.addEventListener("click", mediaForward);
   ```

2. Nun zu den Ereignis-Handler-Funktionen — fügen Sie den folgenden Code unterhalb Ihrer vorherigen Funktionen hinzu, um `mediaBackward()` und `mediaForward()` zu definieren:

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

   Sie werden feststellen, dass wir zunächst zwei Variablen initialisieren — `intervalFwd` und `intervalRwd` — Sie werden später erfahren, warum.

   Lassen Sie uns `mediaBackward()` durchgehen (die Funktionalität von `mediaForward()` ist genau gleich, jedoch umgekehrt):

   1. Wir löschen alle Klassen und Intervalle, die auf die Vorspul-Funktionalität gesetzt sind — wir tun dies, weil, wenn wir die `rwd`-Taste nach dem Drücken der `fwd`-Taste drücken, wir jegliche Vorspul-Funktionalität abbrechen möchten und sie durch die Rückspul-Funktionalität ersetzen wollen. Wenn wir versuchen würden, beide gleichzeitig auszuführen, würde der Player nicht funktionieren.
   2. Wir verwenden eine `if`-Anweisung, um zu überprüfen, ob die `active`-Klasse auf der `rwd`-Taste gesetzt wurde, was anzeigt, dass sie bereits gedrückt wurde. Die [`classList`](/de/docs/Web/API/Element/classList) ist eine ziemlich praktische Eigenschaft, die auf jedem Element existiert — sie enthält eine Liste aller auf dem Element gesetzten Klassen sowie Methoden zum Hinzufügen/Entfernen von Klassen usw. Wir verwenden die Methode `classList.contains()`, um zu überprüfen, ob die Liste die `active`-Klasse enthält. Dies gibt ein boolesches `true`/`false`-Ergebnis zurück.
   3. Wenn `active` auf der `rwd`-Taste gesetzt wurde, entfernen wir es mit `classList.remove()`, löschen das Intervall, das beim ersten Drücken der Taste eingestellt wurde (siehe unten für weitere Erläuterungen), und verwenden [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play), um das Zurückspulen abzubrechen und das Video normal abzuspielen.
   4. Wenn es noch nicht gesetzt ist, fügen wir die `active`-Klasse zur `rwd`-Taste mit `classList.add()` hinzu, pausieren das Video mit [`HTMLMediaElement.pause()`](/de/docs/Web/API/HTMLMediaElement/pause), und setzen dann die Variable `intervalRwd`, indem wir einen [`setInterval()`](/de/docs/Web/API/Window/setInterval)-Aufruf gleichsetzen. Wenn `setInterval()` aufgerufen wird, wird ein aktives Intervall erzeugt, was bedeutet, dass die Funktion, die als erster Parameter angegeben ist, alle x Millisekunden, wobei x der Wert des zweiten Parameters ist, ausgeführt wird. Daher führen wir hier alle 200 Millisekunden die Funktion `windBackward()` aus — wir verwenden diese Funktion, um das Video ständig rückwärts laufen zu lassen. Um ein [`setInterval()`](/de/docs/Web/API/Window/setInterval) zu stoppen, muss [`clearInterval()`](/de/docs/Web/API/Window/clearInterval) aufgerufen werden, wobei ihm der identifizierende Name des Intervalls gegeben wird, das gelöscht werden soll, in diesem Fall ist der Variablenname `intervalRwd` (siehe den früheren `clearInterval()`-Aufruf in der Funktion).

3. Schließlich müssen wir die Funktionen `windBackward()` und `windForward()` definieren, die in den `setInterval()`-Aufrufen aufgerufen werden. Fügen Sie folgende Funktion unter Ihren vorherigen hinzu:

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

   Nochmals, wir werden nur durch die erste dieser Funktionen gehen, da sie fast gleich arbeiten, jedoch umgekehrt zueinander. In `windBackward()` führen wir die folgenden Schritte aus — bedenken Sie, dass diese Funktion einmal alle 200 Millisekunden ausgeführt wird, wenn das Intervall aktiv ist.

   1. Wir beginnen mit einer `if`-Anweisung, die überprüft, ob die aktuelle Zeit weniger als 3 Sekunden beträgt, d.h., ob das Zurückspulen um weitere drei Sekunden es wieder zurück an den Anfang des Videos führen würde. Dies würde seltsames Verhalten verursachen, daher stoppen wir das Video abspielen, indem wir `stopMedia()` aufrufen, die `active`-Klasse von der Rückspul-Taste entfernen und das Intervall `intervalRwd` löschen, um die Rückspul-Funktionalität zu stoppen. Wenn wir diesen letzten Schritt nicht machten, würde das Video einfach immer wieder rückwärts spulen.
   2. Wenn die aktuelle Zeit nicht innerhalb von 3 Sekunden nach dem Start des Videos ist, entfernen wir drei Sekunden von der aktuellen Zeit, indem wir `media.currentTime -= 3` ausführen. Somit spulen wir das Video effektiv alle 200 Millisekunden um 3 Sekunden zurück.

#### Aktualisierung der verstrichenen Zeit

Das allerletzte Stück unseres Mediaplayers zu implementieren ist die Zeit-verstrichen-Anzeigen. Dazu werden wir eine Funktion ausführen, um die Zeitanzeigen jedes Mal zu aktualisieren, wenn das [`timeupdate`](/de/docs/Web/API/HTMLMediaElement/timeupdate_event)-Ereignis auf dem `<video>`-Element ausgelöst wird. Die Häufigkeit, mit der dieses Ereignis ausgelöst wird, hängt von Ihrem Browser, CPU-Leistung usw. ab ([siehe diesen Stack Overflow-Beitrag](https://stackoverflow.com/questions/9678177/how-often-does-the-timeupdate-event-fire-for-an-html5-video)).

Fügen Sie folgende `addEventListener()`-Zeile direkt unter den anderen hinzu:

```js
media.addEventListener("timeupdate", setTime);
```

Nun zur Definition der `setTime()`-Funktion. Fügen Sie das Folgende am Ende Ihrer Datei hinzu:

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

Dies ist eine ziemlich lange Funktion, also lasst uns sie Schritt für Schritt durchgehen:

1. Zuerst arbeiten wir die Anzahl der Minuten und Sekunden im [`HTMLMediaElement.currentTime`](/de/docs/Web/API/HTMLMediaElement/currentTime)-Wert aus.
2. Dann initialisieren wir zwei weitere Variablen — `minuteValue` und `secondValue`. Wir verwenden {{jsxref("String/padStart", "padStart()")}}, um jeden Wert auf 2 Zeichen zu setzen, selbst wenn der numerische Wert nur einstellig ist.
3. Der tatsächliche Zeitwert, der angezeigt werden soll, wird als `minuteValue` plus einem Doppelpunkt plus `secondValue` gesetzt.
4. Der [`Node.textContent`](/de/docs/Web/API/Node/textContent)-Wert des Timers wird auf den Zeitwert gesetzt, sodass er in der Benutzeroberfläche angezeigt wird.
5. Die Länge, die wir dem inneren `<div>` setzen sollten, wird erarbeitet, indem die Breite des äußeren `<div>` zuerst ermittelt wird (die [`clientWidth`](/de/docs/Web/API/Element/clientWidth)-Eigenschaft eines jeden Elements enthält seine Länge) und dann multiplizieren wir sie mit der [`HTMLMediaElement.currentTime`](/de/docs/Web/API/HTMLMediaElement/currentTime), dividiert durch die gesamte [`HTMLMediaElement.duration`](/de/docs/Web/API/HTMLMediaElement/duration) des Mediums.
6. Wir setzen die Breite des inneren `<div>` gleich die berechnete Balkenlänge plus "px", sodass es auf diese Anzahl von Pixeln gesetzt wird.

#### Abspielen und Pausieren reparieren

Es gibt ein Problem, das noch zu beheben ist. Wenn die Abspielen/Pausieren- oder Stopptasten gedrückt werden, während die Rückspul-/Vorspul-Funktionalität aktiv ist, funktionieren sie einfach nicht. Wie können wir es beheben, sodass sie die `rwd`/`fwd`-Schaltflächenfunktionalität abbrechen und das Video so abspielen/stoppen, wie Sie es erwarten würden? Dies ist ziemlich einfach zu beheben.

Fügen Sie zunächst folgende Zeilen innerhalb der `stopMedia()`-Funktion hinzu — irgendwo wird es passen:

```js
rwd.classList.remove("active");
fwd.classList.remove("active");
clearInterval(intervalRwd);
clearInterval(intervalFwd);
```

Fügen Sie nun die gleichen Zeilen erneut am Anfang der `playPauseMedia()`-Funktion hinzu (gleich vor Beginn der `if`-Anweisung).

An diesem Punkt könnten Sie die entsprechenden Zeilen aus den `windBackward()` und `windForward()` Funktionen löschen, da diese Funktionalität stattdessen in der `stopMedia()` Funktion implementiert wurde.

Hinweis: Sie können auch die Effizienz des Codes weiter verbessern, indem Sie eine separate Funktion erstellen, die diese Zeilen ausführt und diese dann überall dort aufrufen, wo sie benötigt werden, anstatt die Zeilen mehrmals im Code zu wiederholen. Aber das überlassen wir Ihnen.

## Zusammenfassung

Ich denke, wir haben Ihnen genug in diesem Artikel beigebracht. Die [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-API macht eine Fülle von Funktionen verfügbar, um einfache Video- und Audioplayer zu erstellen, und das ist nur die Spitze des Eisbergs. Sehen Sie sich den Abschnitt "Siehe auch" unten für Links zu komplexeren und interessanteren Funktionen an.

Hier sind einige Vorschläge, wie Sie das bestehende Beispiel, das wir erstellt haben, verbessern könnten:

1. Die Anzeige der Zeit bricht derzeit zusammen, wenn das Video eine Stunde oder länger ist (nun, sie wird keine Stunden anzeigen; nur Minuten und Sekunden). Können Sie herausfinden, wie Sie das Beispiel ändern, um Stunden anzuzeigen?
2. Da `<audio>`-Elemente über dieselbe [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-Funktionalität verfügen, könnten Sie diesen Player auch leicht für ein `<audio>`-Element arbeiten lassen. Versuchen Sie es.
3. Können Sie herausfinden, wie Sie das innere Timer-`<div>`-Element in eine echte Suchleiste/Scroller verwandeln können — d.h. wenn Sie irgendwo auf die Leiste klicken, springt es zu dieser relativen Position in der Videowiedergabe? Als Hinweis, Sie können die X- und Y-Werte der linken/rechten und oberen/unteren Seiten des Elements über die Methode [`getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect) herausfinden, und Sie können die Koordinaten eines Mausklicks über das Ereignisobjekt des Klickevents, das auf das [`Document`](/de/docs/Web/API/Document)-Objekt angewendet wird, herausfinden. Zum Beispiel:

   ```js
   document.onclick = function (e) {
     console.log(e.x, e.y);
   };
   ```

## Siehe auch

- [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)
- [HTML-Video und -Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio) — einfacher Leitfaden zu `<video>` und `<audio>` HTML.
- [Audio und Video Bereitstellung](/de/docs/Web/Media/Audio_and_video_delivery) — detaillierter Leitfaden zur Medienbereitstellung im Browser, mit vielen Tipps, Tricks und Links zu weiteren fortgeschrittenen Tutorials.
- [Audio und Video Manipulation](/de/docs/Web/Media/Audio_and_video_manipulation) — detaillierter Leitfaden zur Audio- und Videomanipulation, z.B. mit der [Canvas API](/de/docs/Web/API/Canvas_API), [Web Audio API](/de/docs/Web/API/Web_Audio_API) und mehr.
- {{htmlelement("video")}} und {{htmlelement("audio")}} Referenzseiten.
- [Leitfaden zu Medientypen und Formaten im Web](/de/docs/Web/Media/Formats)

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_APIs/Introduction", "Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics", "Learn_web_development/Extensions/Client-side_APIs")}}
