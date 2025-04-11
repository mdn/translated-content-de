---
title: Video- und Audio-APIs
short-title: Video und Audio
slug: Learn_web_development/Extensions/Client-side_APIs/Video_and_audio_APIs
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_APIs/Introduction", "Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics", "Learn_web_development/Extensions/Client-side_APIs")}}

HTML kommt mit Elementen zum Einbetten von Rich Media in Dokumente — {{htmlelement("video")}} und {{htmlelement("audio")}} — die wiederum eigene APIs zum Steuern der Wiedergabe, zum Suchen usw. haben. Dieser Artikel zeigt Ihnen, wie Sie allgemeine Aufgaben wie das Erstellen benutzerdefinierter Wiedergabesteuerungen ausführen können.

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
          <li>Funktionalität im Zusammenhang mit Audio und Video verstehen — abspielen, pausieren, stoppen, rückwärts und vorwärts suchen, Dauer und aktuelle Zeit.</li>
          <li>Verwendung der <code>HTMLMediaElement</code>-API zum Erstellen eines grundlegenden benutzerdefinierten Medienplayers für bessere Zugänglichkeit oder mehr Konsistenz über Browser hinweg.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## HTML-Video und Audio

Die {{htmlelement("video")}}- und {{htmlelement("audio")}}-Elemente ermöglichen es uns, Video und Audio in Webseiten einzubetten. Wie wir in [HTML-Video und Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio) gezeigt haben, sieht eine typische Implementierung so aus:

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

Sie können in dem oben verlinkten Artikel nachlesen, was alle HTML-Funktionen tun; für unsere Zwecke hier ist das interessanteste Attribut [`controls`](/de/docs/Web/HTML/Reference/Elements/video#controls), welches den Standard-Satz von Wiedergabesteuerungen aktiviert. Wenn Sie dies nicht angeben, erhalten Sie keine Wiedergabesteuerungen:

{{EmbedGHLiveSample("learning-area/html/multimedia-and-embedding/video-and-audio-content/multiple-video-formats-no-controls.html", '100%', 380)}}

Dies ist für die Videowiedergabe nicht sofort nützlich, hat jedoch Vorteile. Ein großes Problem bei den nativen Browser-Steuerelementen ist, dass sie in jedem Browser unterschiedlich sind — nicht sehr gut für plattformübergreifende Unterstützung! Ein weiteres großes Problem ist, dass die nativen Steuerelemente in den meisten Browsern nicht sehr tastaturzugänglich sind.

Sie können beide Probleme lösen, indem Sie die nativen Steuerelemente ausblenden (durch Entfernen des `controls`-Attributs) und Ihre eigenen mit HTML, CSS und JavaScript programmieren. Im nächsten Abschnitt sehen wir uns die grundlegenden Werkzeuge an, die uns dafür zur Verfügung stehen.

## Die HTMLMediaElement-API

Teil der HTML-Spezifikation, bietet die [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-API Funktionen, mit denen Sie Video- und Audioplayer programmatisch steuern können — z.B. [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play), [`HTMLMediaElement.pause()`](/de/docs/Web/API/HTMLMediaElement/pause) usw. Diese Schnittstelle steht sowohl für {{htmlelement("audio")}}- als auch für {{htmlelement("video")}}-Elemente zur Verfügung, da die Funktionen, die Sie implementieren möchten, nahezu identisch sind. Gehen wir ein Beispiel durch und fügen dabei nach und nach Funktionen hinzu.

Unser fertiges Beispiel wird ungefähr so aussehen (und funktionieren):

{{EmbedGHLiveSample("learning-area/javascript/apis/video-audio/finished/", '100%', 360)}}

### Erste Schritte

Um mit diesem Beispiel zu beginnen, [laden Sie unser media-player-start.zip herunter](https://github.com/mdn/learning-area/blob/main/javascript/apis/video-audio/start/media-player-start.zip) und entpacken Sie es in ein neues Verzeichnis auf Ihrer Festplatte. Wenn Sie [unser Beispiel-Repository heruntergeladen haben](https://github.com/mdn/learning-area), finden Sie es in `javascript/apis/video-audio/start/`.

An diesem Punkt sollten Sie, wenn Sie das HTML laden, einen ganz normalen HTML-Video-Player mit den gerenderten nativen Steuerelementen sehen.

#### Untersuchung des HTML

Öffnen Sie die HTML-Indexdatei. Sie werden eine Reihe von Funktionen sehen; das HTML wird von dem Videoplayer und seinen Steuerelementen dominiert:

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

- Der gesamte Player ist in ein {{htmlelement("div")}}-Element eingeschlossen, sodass es bei Bedarf als eine Einheit gestylt werden kann.
- Das {{htmlelement("video")}}-Element enthält zwei {{htmlelement("source")}}-Elemente, damit je nach Browser, der die Seite ansieht, unterschiedliche Formate geladen werden können.
- Das HTML der Steuerelemente ist wahrscheinlich das interessanteste:

  - Wir haben vier {{htmlelement("button")}}s — abspielen/pausieren, stoppen, zurückspulen und vorspulen.
  - Jedes `<button>` hat einen `class`-Namen, ein `data-icon`-Attribut, um zu definieren, welches Symbol auf jedem Button angezeigt werden soll (wir zeigen, wie das im folgenden Abschnitt funktioniert), und ein `aria-label`-Attribut, um eine verständliche Beschreibung jedes Buttons bereitzustellen, da wir innerhalb der Tags keine menschenlesbare Beschriftung bereitstellen. Die Inhalte der `aria-label`-Attribute werden von Bildschirmlesern vorgelesen, wenn ihre Benutzer sich auf die Elemente konzentrieren, die sie enthalten.
  - Es gibt auch einen Timer-{{htmlelement("div")}}, der die verstrichene Zeit anzeigt, wenn das Video läuft. Zum Spaß bieten wir zwei Berichtmechanismen an — einen {{htmlelement("span")}}, der die verstrichene Zeit in Minuten und Sekunden enthält, und ein zusätzliches `<div>`, das wir verwenden werden, um eine horizontale Anzeigebalken zu erstellen, der länger wird, während die Zeit abläuft. Um eine Vorstellung davon zu bekommen, wie das fertige Produkt aussehen wird, [sehen Sie sich unsere fertige Version an](https://mdn.github.io/learning-area/javascript/apis/video-audio/finished/).

#### Untersuchung der CSS

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

- Wir beginnen mit der {{cssxref("visibility")}} der benutzerdefinierten Steuerelemente, die auf `hidden` gesetzt sind. In unserem späteren JavaScript werden wir die Steuerelemente auf `visible` setzen und das `controls`-Attribut aus dem `<video>`-Element entfernen. Dies dient dazu, dass, falls das JavaScript aus irgendeinem Grund nicht geladen wird, Benutzer das Video dennoch mit den nativen Steuerelementen verwenden können.
- Wir geben den Steuerelementen eine {{cssxref("opacity")}} von 0,5 standardmäßig, damit sie beim Abspielen des Videos weniger ablenkend sind. Nur wenn Sie über den Player schweben oder sich auf ihn konzentrieren, erscheinen die Steuerelemente in voller Opazität.
- Wir ordnen die Schaltflächen innerhalb der Steuerleiste mithilfe von Flexbox ({{cssxref("display")}}: flex) an, um die Dinge zu erleichtern.

Schauen wir uns als nächstes unsere Schaltflächensymbole an:

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

Zunächst verwenden wir am Anfang des CSS einen {{cssxref("@font-face")}}-Block, um eine benutzerdefinierte Webschriftart zu importieren. Dies ist eine Symbolschriftart — alle Buchstaben des Alphabets entsprechen gängigen Symbolen, die Sie in einer Anwendung verwenden möchten.

Als Nächstes verwenden wir generierten Inhalt, um ein Symbol auf jeder Schaltfläche anzuzeigen:

- Wir verwenden den {{cssxref("::before")}}-Selektor, um den Inhalt vor jedem {{htmlelement("button")}}-Element anzuzeigen.
- Wir verwenden die {{cssxref("content")}}-Eigenschaft, um den anzuzeigenden Inhalt festzulegen, indem er dem Inhalt des [`data-icon`](/de/docs/Learn_web_development/Howto/Solve_HTML_problems/Use_data_attributes)-Attributs entspricht. Im Fall unserer Wiedergabeschaltfläche enthält `data-icon` ein großes "P".
- Wir wenden die benutzerdefinierte Webschriftart auf unsere Schaltflächen mit {{cssxref("font-family")}} an. In dieser Schriftart ist "P" tatsächlich ein "Wiedergabe"-Symbol, daher wird auf der Wiedergabeschaltfläche ein "Wiedergabe"-Symbol angezeigt.

Symbolschriftarten sind aus vielen Gründen sehr cool — Sie reduzieren die Anzahl der HTTP-Anfragen, da Sie diese Symbole nicht als Bilddateien herunterladen müssen, sind großartig skalierbar und Sie können Texteigenschaften wie {{cssxref("color")}} und {{cssxref("text-shadow")}} verwenden, um sie zu gestalten.

Last but not least, werfen wir einen Blick auf das CSS für den Timer:

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

- Wir setzen das äußere `.timer`-Element auf `flex: 5`, damit es den größten Teil der Breite der Steuerleiste einnimmt. Wir geben ihm auch eine {{cssxref("position", "position: relative")}}, damit wir Elemente darin bequem entsprechend seinen Grenzen und nicht den Grenzen des {{htmlelement("body")}}-Elements positionieren können.
- Das innere `<div>` wird absolut so positioniert, dass es direkt auf dem äußeren `<div>` sitzt. Es hat auch eine anfängliche Breite von 0, sodass Sie es überhaupt nicht sehen können. Wenn das Video spielt, wird die Breite über JavaScript erhöht, während das Video abläuft.
- Der `<span>` wird ebenfalls absolut so positioniert, dass er sich nahe der linken Seite des Timer-Balkens befindet.
- Wir geben auch unserem inneren `<div>` und `<span>` den richtigen Betrag an {{cssxref("z-index")}}, damit der Timer oben angezeigt wird und das innere `<div>` darunter. Auf diese Weise sorgen wir dafür, dass wir alle Informationen sehen können — ein Kasten verdeckt nicht einen anderen.

### Implementierung des JavaScript

Wir haben bereits eine ziemlich vollständige HTML- und CSS-Oberfläche; Jetzt müssen wir nur noch alle Schaltflächen verkabeln, um die Steuerungen zum Laufen zu bringen.

1. Erstellen Sie eine neue JavaScript-Datei auf derselben Verzeichnisebene wie Ihre index.html-Datei. Nennen Sie sie `custom-player.js`.
2. Fügen Sie den folgenden Code am Anfang dieser Datei ein:

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

   Hier erstellen wir Konstanten, um Referenzen zu allen Objekten zu halten, die wir manipulieren wollen. Wir haben drei Gruppen:

   - Das `<video>`-Element und die Steuerleiste.
   - Die Schaltflächen für abspielen/pausieren, stoppen, zurückspulen und vorspulen.
   - Die äußere Timer-Wrapper-<`div`>, die digitale Timeranzeige `<span>` und das innere `<div>`, das breiter wird, während die Zeit abläuft.

3. Fügen Sie als nächstes das Folgende am Ende Ihres Codes ein:

   ```js
   media.removeAttribute("controls");
   controls.style.visibility = "visible";
   ```

   Diese beiden Zeilen entfernen die Standard-Browser-Steuerelemente aus dem Video und machen die benutzerdefinierten Steuerelemente sichtbar.

#### Abspielen und Pausieren des Videos

Lassen Sie uns die wahrscheinlich wichtigste Steuerung implementieren — den Abspielen/Pause-Knopf.

1. Fügen Sie zunächst Folgendes am Ende Ihres Codes hinzu, damit die `playPauseMedia()`-Funktion aufgerufen wird, wenn der Wiedergabeknopf angeklickt wird:

   ```js
   play.addEventListener("click", playPauseMedia);
   ```

2. Nun definieren wir `playPauseMedia()` — fügen Sie folgendes, wiederum am Ende Ihres Codes, hinzu:

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

   Hier verwenden wir eine [`if`](/de/docs/Web/JavaScript/Reference/Statements/if...else)-Anweisung, um zu prüfen, ob das Video pausiert ist. Die [`HTMLMediaElement.paused`](/de/docs/Web/API/HTMLMediaElement/paused)-Eigenschaft gibt `true` zurück, wenn das Medium pausiert ist, was jederzeit der Fall ist, wenn das Video nicht spielt, einschließlich wenn es bei 0 Dauer steht, nachdem es zuerst geladen hat. Wenn es pausiert ist, setzen wir den `data-icon`-Attributwert auf der Wiedergabeschaltfläche auf "u", was ein "pausiert"-Symbol ist, und rufen die [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play)-Methode auf, um das Medium abzuspielen.

   Beim zweiten Klick wird die Schaltfläche wieder umgeschaltet — das "Wiedergabe"-Symbol wird wieder angezeigt und das Video wird mit[`HTMLMediaElement.pause()`](/de/docs/Web/API/HTMLMediaElement/pause) pausiert.

#### Stoppen des Videos

1. Als nächstes fügen wir Funktionalität zum Stoppen des Videos hinzu. Fügen Sie die folgenden [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)-Zeilen unter denen hinzu, die Sie zuvor hinzugefügt haben:

   ```js
   stop.addEventListener("click", stopMedia);
   media.addEventListener("ended", stopMedia);
   ```

   Das [`click`](/de/docs/Web/API/Element/click_event)-Ereignis ist offensichtlich — wir möchten das Video stoppen, indem wir unsere `stopMedia()`-Funktion ausführen, wenn die Stop-Schaltfläche angeklickt wird. Wir möchten das Video jedoch auch stoppen, wenn es zu Ende gespielt hat — dies wird durch das [`ended`](/de/docs/Web/API/HTMLMediaElement/ended_event)-Ereignis markiert, also richten wir auch einen Listener ein, der die Funktion beim Auslösen dieses Ereignisses ebenfalls ausführt.

2. Als nächstes definieren wir `stopMedia()` — fügen Sie die folgende Funktion unterhalb von `playPauseMedia()` hinzu:

   ```js
   function stopMedia() {
     media.pause();
     media.currentTime = 0;
     play.setAttribute("data-icon", "P");
   }
   ```

   Es gibt keine `stop()`-Methode in der HTMLMediaElement-API — das Äquivalent dazu ist, das Video zu `pause()` zu setzen, und seine [`currentTime`](/de/docs/Web/API/HTMLMediaElement/currentTime)-Eigenschaft auf 0 zu setzen. Die `currentTime`-Eigenschaft auf einen Wert (in Sekunden) zu setzen, springt das Medium sofort an diese Position.

   Alles, was nach dem Setzen des `currentTime`-Werts bleibt, ist, das angezeigte Symbol auf das "Wiedergabe"-Symbol zu setzen. Unabhängig davon, ob das Video pausiert oder abgespielt wurde, als die Stopp-Taste gedrückt wurde, möchten Sie, dass es danach bereit zum Abspielen ist.

#### Rückwärts- und Vorwärtssuche

Es gibt viele Möglichkeiten, die Sie zum Implementieren der Rückwärts- und Vorspulfunktion verwenden können; Hier zeigen wir Ihnen einen relativ komplexen Weg, es zu tun, der nicht kaputtgeht, wenn die verschiedenen Tasten in einer unerwarteten Reihenfolge gedrückt werden.

1. Fügen Sie zunächst die folgenden zwei [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)-Zeilen unter denen hinzu, die Sie zuvor hinzugefügt haben:

   ```js
   rwd.addEventListener("click", mediaBackward);
   fwd.addEventListener("click", mediaForward);
   ```

2. Nun zu den Event-Handler-Funktionen — fügen Sie den folgenden Code unter Ihre vorherigen Funktionen hinzu, um `mediaBackward()` und `mediaForward()` zu definieren:

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

   Sie werden bemerken, dass wir zuerst zwei Variablen initialisieren - `intervalFwd` und `intervalRwd` - Sie werden später erfahren, wofür sie gut sind.

   Gehen wir `mediaBackward()` durch (die Funktionalität für `mediaForward()` ist genau dieselbe, aber umgekehrt):

   1. Wir räumen alle Klassen und Intervalle aus, die auf die Vorspulfunktion gesetzt sind — wir tun dies, weil wir, wenn wir die `rwd`-Schaltfläche nach dem Drücken der `fwd`-Schaltfläche drücken, die Vorspulfunktion abbrechen und sie durch die Rückspulfunktion ersetzen wollen. Wenn wir versuchen würden, beide auf einmal zu tun, würde der Player kaputt gehen.
   2. Wir verwenden eine `if`-Anweisung, um zu überprüfen, ob die `active`-Klasse auf der `rwd`-Schaltfläche gesetzt wurde, was anzeigt, dass sie bereits gedrückt wurde. Die [`classList`](/de/docs/Web/API/Element/classList) ist eine ziemlich nützliche Eigenschaft, die auf jedem Element existiert — sie enthält eine Liste aller auf dem Element gesetzten Klassen sowie Methoden zum Hinzufügen/Entfernen von Klassen usw. Wir verwenden die `classList.contains()`-Methode, um zu überprüfen, ob die Liste die `active`-Klasse enthält. Dies gibt ein boolean-Wahr-/Falsch-Ergebnis zurück.
   3. Wenn `active` auf der `rwd`-Schaltfläche festgelegt wurde, entfernen wir sie mit `classList.remove()`, löschen das Intervall, das gesetzt wurde, als die Taste zum ersten Mal gedrückt wurde (Siehe unten für mehr Erklärung), und verwenden [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play), um das Rückspulen zu beenden und das Video normal abzuspielen.
   4. Wenn es noch nicht eingestellt wurde, fügen wir die `active`-Klasse zur `rwd`-Schaltfläche mit `classList.add()` hinzu, pausieren das Video mit [`HTMLMediaElement.pause()`](/de/docs/Web/API/HTMLMediaElement/pause) und setzen dann die `intervalRwd`-Variable gleich einem [`setInterval()`](/de/docs/Web/API/Window/setInterval)-Aufruf. Wenn `setInterval()` aufgerufen wird, wird ein aktives Intervall erstellt, was bedeutet, dass es die als ersten Parameter gegebene Funktion alle x Millisekunden ausführt, wobei x der Wert des zweiten Parameters ist. Also, hier führen wir die `windBackward()`-Funktion alle 200 Millisekunden aus — wir verwenden diese Funktion, um das Video konstant zurückzuspulen. Um ein [`setInterval()`](/de/docs/Web/API/Window/setInterval) zu stoppen, müssen Sie [`clearInterval()`](/de/docs/Web/API/Window/clearInterval) aufrufen und den identifizierenden Namen des zu löschenden Intervalls angeben, in diesem Fall ist es der Variablenname `intervalRwd`(siehe den `clearInterval()`-Aufruf weiter oben in der Funktion).

3. Schließlich müssen wir die `windBackward()` und `windForward()`-Funktionen definieren, die in den `setInterval()`-Aufrufen aufgerufen werden. Fügen Sie die folgenden unter Ihren beiden vorherigen Funktionen hinzu:

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

   Nochmals, wir gehen nur durch die erste dieser Funktionen, da sie fast identisch arbeiten, aber umgekehrt zueinander. In `windBackward()` tun wir Folgendes — beachten Sie, dass wenn das Intervall aktiv ist, diese Funktion einmal alle 200 Millisekunden ausgeführt wird.

   1. Wir beginnen mit einer `if`-Anweisung, die prüft, ob die aktuelle Zeit weniger als 3 Sekunden ist, d.h. ob das Zurückspulen um weitere drei Sekunden es über den Anfang des Videos zurückbringen würde. Dies würde zu seltsamem Verhalten führen, also stoppen wir in diesem Fall das Video, indem wir `stopMedia()` aufrufen, die `active`-Klasse von der Rückspul-Taste entfernen und das `intervalRwd`-Intervall löschen, um die Rückspulfunktion zu beenden. Wenn wir diesen letzten Schritt nicht durchführen würden, würde das Video für immer zurückgespult werden.
   2. Falls die aktuelle Zeit nicht innerhalb von 3 Sekunden ab dem Beginn des Videos ist, ziehen wir der aktuellen Zeit drei Sekunden ab, indem wir `media.currentTime -= 3` ausführen. So spulen wir effektiv das Video alle 200 Millisekunden um 3 Sekunden zurück.

#### Aktualisieren der verstrichenen Zeit

Das allerletzte Teilstück unseres Mediaplayers, das wir implementieren müssen, ist die Anzeige der verstrichenen Zeit. Um dies zu tun, führen wir eine Funktion aus, um die Zeit-Anzeigen jedes Mal zu aktualisieren, wenn das [`timeupdate`](/de/docs/Web/API/HTMLMediaElement/timeupdate_event)-Ereignis auf dem `<video>`-Element ausgelöst wird. Die Häufigkeit, mit der dieses Ereignis ausgelöst wird, hängt von Ihrem Browser, Ihrer CPU-Leistung usw. ab. ([siehe diesen Stack Overflow-Beitrag](https://stackoverflow.com/questions/9678177/how-often-does-the-timeupdate-event-fire-for-an-html5-video)).

Fügen Sie die folgende `addEventListener()`-Zeile direkt unter den anderen hinzu:

```js
media.addEventListener("timeupdate", setTime);
```

Nun um die `setTime()`-Funktion zu definieren. Fügen Sie das folgende am Ende Ihrer Datei hinzu:

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

1. Zuerst berechnen wir die Anzahl der Minuten und Sekunden in dem [`HTMLMediaElement.currentTime`](/de/docs/Web/API/HTMLMediaElement/currentTime)-Wert.
2. Dann initialisieren wir zwei weitere Variablen — `minuteValue` und `secondValue`. Wir verwenden {{jsxref("String/padStart", "padStart()")}}, um jeden Wert auf 2 Zeichen zu bringen, auch wenn der numerische Wert nur eine einzelne Ziffer ist.
3. Der eigentliche Zeitwert, der angezeigt werden soll, wird als `minuteValue` plus einem Doppelpunktzeichen plus `secondValue` festgelegt.
4. Der `Node.textContent`-Wert des Timers wird auf den Zeitwert gesetzt, damit er in der Benutzeroberfläche angezeigt wird.
5. Die Länge, auf die wir das innere `<div>` setzen sollten, wird berechnet, indem zuerst die Breite des äußeren `<div>` (die `clientWidth`-Eigenschaft eines Elements enthält seine Länge) ermittelt wird, und sie dann mit der `HTMLMediaElement.currentTime` geteilt durch die Gesamt- `HTMLMediaElement.duration` des Mediums multipliziert wird.
6. Wir setzen die Breite des inneren `<div>` gleich der berechneten Balkenlänge plus "px", sodass es auf diese Anzahl von Pixeln gesetzt wird.

#### Beheben von Abspielen und Pausieren

Es gibt noch ein Problem zu beheben. Wenn die Wiedergabe-/Pausen- oder Stopp-Schaltflächen gedrückt werden, während die Rückspul- oder Vorspulfunktion aktiv ist, funktionieren sie einfach nicht. Wie können wir es beheben, dass sie die `rwd`/`fwd`-Schaltflächenfunktionalität abbrechen und das Video so abspielen/stoppen, wie Sie es erwarten würden? Dies ist ziemlich einfach zu beheben.

Fügen Sie zunächst die folgenden Zeilen in die `stopMedia()`-Funktion ein — ein beliebiger Ort ist in Ordnung:

```js
rwd.classList.remove("active");
fwd.classList.remove("active");
clearInterval(intervalRwd);
clearInterval(intervalFwd);
```

Fügen Sie nun dieselben Zeilen erneut, ganz am Anfang der `playPauseMedia()`-Funktion (direkt vor dem Beginn des `if`-Statements), hinzu.

An diesem Punkt könnten Sie die entsprechenden Zeilen aus den `windBackward()` und `windForward()`-Funktionen löschen, da diese Funktionalität stattdessen in der `stopMedia()`-Funktion implementiert wurde.

Hinweis: Sie könnten die Effizienz des Codes auch weiter verbessern, indem Sie eine separate Funktion erstellen, die diese Zeilen ausführt, und diese dann überall dort aufrufen, wo sie benötigt wird, anstatt die Zeilen mehrmals im Code zu wiederholen. Aber das überlassen wir Ihnen.

## Zusammenfassung

Ich denke, wir haben Ihnen in diesem Artikel genug beigebracht. Die [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-API stellt eine Fülle von Funktionen zur Verfügung, um einfache Video- und Audioplayer zu erstellen, und das ist nur die Spitze des Eisbergs. Siehe den Abschnitt "Siehe auch" unten für Links zu komplexerer und interessanter Funktionalität.

Hier sind einige Vorschläge, wie Sie das bestehende Beispiel, das wir aufgebaut haben, verbessern könnten:

1. Die Zeitanzeige bricht derzeit zusammen, wenn das Video eine Stunde oder länger ist (nun, es wird nicht Stunden anzeigen; nur Minuten und Sekunden). Können Sie herausfinden, wie Sie das Beispiel ändern können, um Stunden anzuzeigen?
2. Da `<audio>`-Elemente die gleiche [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-Funktionalität zur Verfügung haben, könnten Sie diesen Player leicht dazu bringen, auch für ein `<audio>`-Element zu arbeiten. Versuchen Sie, dies zu tun.
3. Können Sie einen Weg finden, das Timer-Innerelement `<div>` in einen echten Suchbalken/Scroller zu verwandeln — d.h. wenn Sie irgendwo auf den Balken klicken, springt er zu dieser relativen Position in der Videowiedergabe? Als Hinweis können Sie die X- und Y-Werte der linken/rechten und oberen/unteren Seiten des Elements über die [`getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect)-Methode ermitteln, und Sie können die Koordinaten eines Maus-Klicks über das Ereignisobjekt des Klickereignisses, aufgerufen am [`Document`](/de/docs/Web/API/Document)-Objekt, abrufen. Zum Beispiel:

   ```js
   document.onclick = function (e) {
     console.log(e.x, e.y);
   };
   ```

## Siehe auch

- [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)
- [HTML-Video und Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio) — einfacher Leitfaden zu `<video>` und `<audio>` HTML.
- [Audio- und Videoübertragung](/de/docs/Web/Media/Guides/Audio_and_video_delivery) — detaillierter Leitfaden zur Übertragung von Medien im Browser, mit vielen Tipps, Tricks und Links zu weiteren fortgeschritteneren Tutorials.
- [Audio- und Videomanipulation](/de/docs/Web/Media/Guides/Audio_and_video_manipulation) — detaillierter Leitfaden zur Manipulation von Audio und Video, z.B. mit der [Canvas API](/de/docs/Web/API/Canvas_API), [Web Audio API](/de/docs/Web/API/Web_Audio_API) und mehr.
- {{htmlelement("video")}} und {{htmlelement("audio")}} Referenzseiten.
- [Leitfaden zu Medientypen und Formaten im Web](/de/docs/Web/Media/Guides/Formats)

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_APIs/Introduction", "Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics", "Learn_web_development/Extensions/Client-side_APIs")}}
