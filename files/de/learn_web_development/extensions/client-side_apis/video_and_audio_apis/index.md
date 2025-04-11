---
title: Video- und Audio-APIs
short-title: Video und Audio
slug: Learn_web_development/Extensions/Client-side_APIs/Video_and_audio_APIs
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_APIs/Introduction", "Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics", "Learn_web_development/Extensions/Client-side_APIs")}}

HTML bietet Elemente zum Einbetten von Multimedia-Inhalten in Dokumente — {{htmlelement("video")}} und {{htmlelement("audio")}} — die wiederum mit eigenen APIs zur Steuerung der Wiedergabe, Suche usw. versehen sind. Dieser Artikel zeigt Ihnen, wie Sie gewöhnliche Aufgaben wie das Erstellen benutzerdefinierter Wiedergabesteuerungen ausführen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>, insbesondere den <a href="/de/docs/Learn_web_development/Core/Scripting/Object_basics">JavaScript-Objekt-Grundlagen</a> und grundlegenden API-Themen wie <a href="/de/docs/Learn_web_development/Core/Scripting/DOM_scripting">DOM-Scripting</a> und <a href="/de/docs/Learn_web_development/Core/Scripting/Network_requests">Netzwerkanfragen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        <ul>
          <li>Was Codecs sind und die verschiedenen Video- und Audioformate.</li>
          <li>Verständnis der wesentlichen Funktionen im Zusammenhang mit Audio und Video — Abspielen, Pausieren, Stoppen, Zurück- und Vorspulen, Dauer und aktuelle Zeit.</li>
          <li>Verwendung der <code>HTMLMediaElement</code>-API, um einen grundlegenden benutzerdefinierten Medienplayer zu erstellen, für bessere Zugänglichkeit oder mehr Konsistenz zwischen Browsern.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## HTML Video und Audio

Die {{htmlelement("video")}}- und {{htmlelement("audio")}}-Elemente ermöglichen uns, Video und Audio in Webseiten einzubetten. Wie wir in [HTML Video und Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio) gezeigt haben, sieht eine typische Implementierung so aus:

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

Sie können überprüfen, was all die HTML-Funktionen im oben verlinkten Artikel tun; für unsere Zwecke hier ist das interessanteste Attribut [`controls`](/de/docs/Web/HTML/Reference/Elements/video#controls), welches das Set von Standard-Wiedergabesteuerungen aktiviert. Wenn Sie dies nicht angeben, erhalten Sie keine Wiedergabesteuerungen:

{{EmbedGHLiveSample("learning-area/html/multimedia-and-embedding/video-and-audio-content/multiple-video-formats-no-controls.html", '100%', 380)}}

Dies ist nicht sofort hilfreich für die Videowiedergabe, hat jedoch Vorteile. Ein großes Problem mit den nativen Browser-Steuerelementen ist, dass sie in jedem Browser unterschiedlich sind — nicht sehr gut für die Unterstützung mehrerer Browser! Ein weiteres großes Problem ist, dass die nativen Steuerelemente in den meisten Browsern nicht sehr gut mit der Tastatur zugänglich sind.

Sie können beide Probleme lösen, indem Sie die nativen Steuerelemente ausblenden (indem Sie das `controls`-Attribut entfernen) und Ihre eigenen mit HTML, CSS und JavaScript programmieren. Im nächsten Abschnitt werden wir die grundlegenden Werkzeuge betrachten, die uns hierfür zur Verfügung stehen.

## Die HTMLMediaElement API

Teil der HTML-Spezifikation ist die [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) API, die Funktionen bereitstellt, mit denen Sie Video- und Audioplayer programmatisch steuern können — zum Beispiel [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play), [`HTMLMediaElement.pause()`](/de/docs/Web/API/HTMLMediaElement/pause), usw. Diese Schnittstelle steht sowohl für {{htmlelement("audio")}} als auch für {{htmlelement("video")}}-Elemente zur Verfügung, da die Funktionen, die Sie implementieren möchten, nahezu identisch sind. Lassen Sie uns ein Beispiel durchgehen und dabei nach und nach Funktionen hinzufügen.

Unser fertiges Beispiel wird in etwa so aussehen (und funktionieren):

{{EmbedGHLiveSample("learning-area/javascript/apis/video-audio/finished/", '100%', 360)}}

### Erste Schritte

Um mit diesem Beispiel zu beginnen, [laden Sie unser media-player-start.zip herunter](https://github.com/mdn/learning-area/blob/main/javascript/apis/video-audio/start/media-player-start.zip) und entpacken Sie es in ein neues Verzeichnis auf Ihrer Festplatte. Wenn Sie [unser Repository mit den Beispielen heruntergeladen haben](https://github.com/mdn/learning-area), finden Sie es in `javascript/apis/video-audio/start/`.

An diesem Punkt sollten Sie, wenn Sie das HTML laden, einen ganz normalen HTML-Videoplayer mit den standardmäßig gerenderten Steuerungen sehen.

#### Erkundung des HTML

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

- Der gesamte Player ist in ein {{htmlelement("div")}}-Element eingeschlossen, so dass er bei Bedarf als Einheit gestaltet werden kann.
- Das {{htmlelement("video")}}-Element enthält zwei {{htmlelement("source")}}-Elemente, so dass je nach Browser, der die Seite betrachtet, unterschiedliche Formate geladen werden können.
- Der HTML-Code für die Steuerungen ist wahrscheinlich am interessantesten:

  - Wir haben vier {{htmlelement("button")}}s — abspielen/pausieren, stoppen, zurückspulen und vorspulen.
  - Jedes `<button>` hat einen `class`-Namen, ein `data-icon`-Attribut zur Definition, welches Symbol auf jedem Button angezeigt werden soll (wir zeigen unten, wie das funktioniert), und ein `aria-label`-Attribut, um eine verständliche Beschreibung jedes Knopfes bereitzustellen, da wir innerhalb der Tags keine für Menschen lesbaren Beschriftungen zur Verfügung stellen. Die Inhalte von `aria-label`-Attributen werden von Bildschirmlesern ausgegeben, wenn sich ihre Benutzer auf die Elemente konzentrieren, die sie enthalten.
  - Es gibt auch einen Timer-{{htmlelement("div")}}, der die verstrichene Zeit angibt, wenn das Video abgespielt wird. Zum Spaß bieten wir zwei Berichtsmechanismen an — einen {{htmlelement("span")}}, der die verstrichene Zeit in Minuten und Sekunden enthält, und einen zusätzlichen `<div>`, den wir verwenden werden, um eine horizontale Indikatorleiste zu erzeugen, die länger wird, wenn die Zeit abläuft. Um eine Vorstellung davon zu bekommen, wie das fertige Produkt aussehen wird, [schauen Sie sich unsere fertige Version an](https://mdn.github.io/learning-area/javascript/apis/video-audio/finished/).

#### Erkundung des CSS

Öffnen Sie nun die CSS-Datei und schauen Sie hinein. Das CSS für das Beispiel ist nicht zu kompliziert, aber wir heben hier die interessantesten Teile hervor. Zuerst die `.controls`-Stilsetzungen:

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

- Wir beginnen mit der {{cssxref("visibility")}} der benutzerdefinierten Steuerungen, die auf `hidden` gesetzt ist. In unserem JavaScript später werden wir die Steuerungen auf `visible` setzen und das `controls`-Attribut vom `<video>`-Element entfernen. Dies geschieht, damit Benutzer das Video weiterhin mit den nativen Steuerelementen verwenden können, falls das JavaScript aus irgendeinem Grund nicht geladen wird.
- Wir geben den Steuerungen standardmäßig einen {{cssxref("opacity")}} von 0.5, damit sie weniger ablenkend sind, wenn Sie versuchen, das Video anzusehen. Nur wenn Sie über den Player schweben/fokussieren, erscheinen die Steuerungen mit voller Deckkraft.
- Wir legen die Knöpfe innerhalb der Kontrollleiste mithilfe von Flexbox ({{cssxref("display")}}: flex) an, um die Sache zu erleichtern.

Als nächstes schauen wir uns unsere Symbole auf den Buttons an:

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

Zunächst verwenden wir am oberen Rand des CSS einen {{cssxref("@font-face")}}-Block, um eine benutzerdefinierte Webschriftart zu importieren. Dies ist eine Symbolschriftart — alle Zeichen des Alphabets entsprechen gängigen Symbolen, die Sie in einer Anwendung verwenden möchten.

Im nächsten Schritt verwenden wir generierte Inhalte, um auf jedem Knopf ein Symbol anzuzeigen:

- Wir verwenden den {{cssxref("::before")}}-Selektor, um die Inhalte vor jedem {{htmlelement("button")}}-Element anzuzeigen.
- Wir verwenden die {{cssxref("content")}}-Eigenschaft, um die in jedem Fall anzuzeigenden Inhalte gleich dem Inhalt des [`data-icon`](/de/docs/Learn_web_development/Howto/Solve_HTML_problems/Use_data_attributes)-Attributs zu setzen. Im Fall unseres Abspielknopfes enthält `data-icon` ein großes "P".
- Wir wenden die benutzerdefinierte Webschriftart auf unsere Knöpfe mit {{cssxref("font-family")}} an. In dieser Schriftart ist "P" tatsächlich ein "Wiedergabe"-Symbol, so dass der Abspielknopf ein "Wiedergabe"-Symbol darauf angezeigt hat.

Symbol-Schriftarten sind aus vielen Gründen sehr cool — Reduzierung von HTTP-Anfragen, weil Sie diese Symbole nicht als Bilddateien herunterladen müssen, große Skalierbarkeit und die Tatsache, dass Sie Text-Eigenschaften verwenden können, um sie zu stylen, wie {{cssxref("color")}} und {{cssxref("text-shadow")}}.

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

- Wir setzen das äußere `.timer`-Element auf `flex: 5`, so dass es den größten Teil der Breite der Steuerleiste einnimmt. Wir geben ihm auch {{cssxref("position", "position: relative")}}, damit wir Elemente darin bequem nach seinen Begrenzungen positionieren können und nicht nach den Begrenzungen des {{htmlelement("body")}}-Elements.
- Das innere `<div>` wird absolut positioniert, um direkt auf dem äußeren `<div>` zu sitzen. Es wird auch auf eine anfängliche Breite von 0 gesetzt, so dass Sie es überhaupt nicht sehen können. Während das Video abgespielt wird, wird die Breite mittels JavaScript erhöht, während das Video abläuft.
- Das `<span>` wird ebenfalls absolut positioniert, um sich in der Nähe der linken Seite der Timerleiste zu befinden.
- Wir geben unserem inneren `<div>` und `<span>` auch den richtigen {{cssxref("z-index")}}, so dass der Timer oben angezeigt wird und das innere `<div>` darunter. Auf diese Weise stellen wir sicher, dass wir alle Informationen sehen können — ein Feld verdeckt nicht das andere.

### Implementierung des JavaScript

Wir haben bereits eine ziemlich vollständige HTML- und CSS-Benutzeroberfläche; jetzt müssen wir nur noch alle Knöpfe verbinden, damit die Steuerelemente funktionieren.

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
   - Die Abspiel-/Pause-, Stopp-, Zurück- und Vorspultasten.
   - Das äußere Zeitmaß-Wrapper `<div>`, die digitale Zeitangabe `<span>` und das innere `<div>`, das breiter wird, während die Zeit abläuft.

3. Fügen Sie als nächstes Folgendes am Ende Ihres Codes ein:

   ```js
   media.removeAttribute("controls");
   controls.style.visibility = "visible";
   ```

   Diese beiden Zeilen entfernen die standardmäßigen Browser-Steuerelemente aus dem Video und machen die benutzerdefinierten Steuerelemente sichtbar.

#### Abspielen und Anhalten des Videos

Lassen Sie uns die wahrscheinlich wichtigste Steuerung implementieren — die Abspiel-/Pause-Taste.

1. Fügen Sie zunächst am Ende Ihres Codes folgendes hinzu, damit die `playPauseMedia()`-Funktion aufgerufen wird, wenn die Abspieltaste geklickt wird:

   ```js
   play.addEventListener("click", playPauseMedia);
   ```

2. Definieren Sie nun `playPauseMedia()` — fügen Sie erneut unten in Ihrem Code das folgende hinzu:

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

   Hier verwenden wir eine [`if`](/de/docs/Web/JavaScript/Reference/Statements/if...else)-Anweisung, um zu prüfen, ob das Video pausiert ist. Die [`HTMLMediaElement.paused`](/de/docs/Web/API/HTMLMediaElement/paused)-Eigenschaft gibt true zurück, wenn das Medium pausiert ist, was der Fall ist, wenn das Video nicht abgespielt wird, einschließlich, wenn es bei 0 Dauer eingestellt ist, nachdem es das erste Mal geladen wurde. Wenn es pausiert ist, setzen wir den `data-icon` Attributwert auf der Abspieltaste auf "u", welches ein "pausiert"-Symbol ist, und rufen die [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play)-Methode auf, um das Medium abzuspielen.

   Beim zweiten Klick wird der Knopf wieder zurückgeschaltet — das "Wiedergabe"-Symbol wird wieder angezeigt und das Video wird mit [`HTMLMediaElement.pause()`](/de/docs/Web/API/HTMLMediaElement/pause) pausiert.

#### Stoppen des Videos

1. Fügen Sie als nächstes die folgenden [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)-Zeilen unterhalb der vorherigen hinzu:

   ```js
   stop.addEventListener("click", stopMedia);
   media.addEventListener("ended", stopMedia);
   ```

   Das [`click`](/de/docs/Web/API/Element/click_event)-Ereignis ist offensichtlich — wir möchten das Video stoppen, indem wir unsere `stopMedia()`-Funktion aufrufen, wenn der Stoppknopf geklickt wird. Wir möchten das Video jedoch auch stoppen, wenn es mit dem Abspielen fertig ist — dies wird durch das [`ended`](/de/docs/Web/API/HTMLMediaElement/ended_event)-Ereignis ausgelöst, daher richten wir auch einen Listener ein, der die Funktion bei Auslösung dieses Ereignisses ausführt.

2. Definieren wir nun `stopMedia()` — fügen Sie die folgende Funktion unter `playPauseMedia()` ein:

   ```js
   function stopMedia() {
     media.pause();
     media.currentTime = 0;
     play.setAttribute("data-icon", "P");
   }
   ```

   Es gibt keine `stop()`-Methode in der HTMLMediaElement-API — das Äquivalent ist, das Video mit `pause()` zu pausieren und seine [`currentTime`](/de/docs/Web/API/HTMLMediaElement/currentTime)-Eigenschaft auf 0 zu setzen. Durch das Einstellen von `currentTime` auf einen Wert (in Sekunden) springt das Medium sofort zu dieser Position.

   Alles, was danach noch zu tun bleibt, ist, das angezeigte Symbol auf das "Wiedergabe"-Symbol einzustellen. Unabhängig davon, ob das Video pausiert oder abgespielt wurde, als die Stopp-Taste gedrückt wurde, möchten Sie, dass es danach bereit ist, abgespielt zu werden.

#### Vor- und Zurückspulen

Es gibt viele Möglichkeiten, wie Sie Zurück- und Vorspulfunktionalität implementieren können; hier zeigen wir Ihnen eine relativ komplexe Methode, die nicht kaputtgeht, wenn die verschiedenen Knöpfe in einer unerwarteten Reihenfolge gedrückt werden.

1. Fügen Sie zunächst die folgenden zwei [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)-Zeilen unter die vorherigen hinzu:

   ```js
   rwd.addEventListener("click", mediaBackward);
   fwd.addEventListener("click", mediaForward);
   ```

2. Nun zu den Ereignishandler-Funktionen — fügen Sie den folgenden Code unter Ihre vorherigen Funktionen ein, um `mediaBackward()` und `mediaForward()` zu definieren:

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

   Sie werden bemerken, dass wir zuerst zwei Variablen initialisieren — `intervalFwd` und `intervalRwd` — Sie werden später erfahren, wofür sie gedacht sind.

   Gehen wir `mediaBackward()` durch (die Funktionalität für `mediaForward()` ist genau die gleiche, aber im Gegenteil):

   1. Wir löschen alle Klassen und Intervalle, die auf die Vorspulfunktionalität eingestellt sind — das tun wir, weil wir, wenn wir die `rwd`-Taste nach dem Drücken der `fwd`-Taste drücken, jegliche Vorspulfunktionalität abbrechen und durch die Zurückspulfunktionalität ersetzen möchten. Wenn wir versuchen würden, beides gleichzeitig zu tun, würde der Player kaputtgehen.
   2. Wir verwenden eine `if`-Abfrage, um zu überprüfen, ob die `active`-Klasse auf die `rwd`-Taste gesetzt wurde, was bedeutet, dass sie bereits gedrückt wurde. Die [`classList`](/de/docs/Web/API/Element/classList) ist eine ziemlich praktische Eigenschaft, die an jedem Element vorhanden ist — sie enthält eine Liste aller auf das Element gesetzten Klassen sowie Methoden zum Hinzufügen/Entfernen von Klassen usw. Wir verwenden die Methode `classList.contains()`, um zu überprüfen, ob die Liste die `active`-Klasse enthält. Dies gibt ein boolean `true`/`false` Ergebnis zurück.
   3. Wenn `active` auf die `rwd`-Taste gesetzt wurde, entfernen wir sie mit `classList.remove()`, löschen das bei der ersten Betätigung der `rwd`-Taste eingestellte Intervall (siehe unten für weitere Erklärungen) und verwenden [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play), um das Zurückspulen abzubrechen und das Video normal abzuspielen.
   4. Wenn sie noch nicht gesetzt ist, fügen wir die `active`-Klasse zur `rwd`-Taste mit `classList.add()` hinzu, pausieren das Video mit [`HTMLMediaElement.pause()`](/de/docs/Web/API/HTMLMediaElement/pause) und setzen dann die Variable `intervalRwd` auf den Wert eines [`setInterval()`](/de/docs/Web/API/Window/setInterval)-Aufrufs. Wenn aufgerufen, erstellt `setInterval()` ein aktives Intervall, was bedeutet, dass es die als ersten Parameter angegebene Funktion alle x Millisekunden ausführt, wobei x der Wert des 2. Parameters ist. Also führen wir hier die Funktion `windBackward()` alle 200 Millisekunden aus — wir verwenden diese Funktion, um das Video ständig zurückzuspulen. Um ein [`setInterval()`](/de/docs/Web/API/Window/setInterval) zu stoppen, müssen Sie [`clearInterval()`](/de/docs/Web/API/Window/clearInterval) aufrufen, wobei Sie den identifizierenden Namen des zu löschenden Intervalls angeben müssen, der in diesem Fall der Variablenname `intervalRwd` ist (siehe den `clearInterval()`-Aufruf weiter oben in der Funktion).

3. Schließlich müssen wir die Funktion `windBackward()` und `windForward()` definieren, die in den `setInterval()`-Aufrufen aufgerufen werden. Fügen Sie die folgende Funktion unter Ihren vorherigen Funktionen ein:

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

   Wieder gehen wir nur durch die erste dieser Funktionen, da sie fast identisch funktionieren, aber in umgekehrter Weise zueinander. In `windBackward()` führen wir Folgendes aus — beachte, dass wenn das Intervall aktiv ist, diese Funktion einmal alle 200 Millisekunden ausgeführt wird.

   1. Wir beginnen mit einer `if`-Bedingung, die prüft, ob die aktuelle Zeit weniger als 3 Sekunden beträgt, d.h. wenn ein Zurückspulen um weitere drei Sekunden es zurück vor den Start des Videos bringen würde. Dies würde seltsames Verhalten verursachen, also stoppen wir, wenn dies der Fall ist, die Wiedergabe des Videos, indem wir `stopMedia()` aufrufen, entfernen die `active`-Klasse von der Rückspultaste und löschen das `intervalRwd`-Intervall, um die Zurückspulfunktionalität zu stoppen. Wenn wir diesen letzten Schritt nicht machen würden, würde das Video für immer zurückspulen.
   2. Wenn die aktuelle Zeit nicht innerhalb von 3 Sekunden nach dem Start des Videos liegt, verringern wir die aktuelle Zeit um drei Sekunden, indem wir `media.currentTime -= 3` ausführen. In Wirklichkeit spulen wir das Video also alle 200 Millisekunden um 3 Sekunden zurück.

#### Aktualisierung der verstrichenen Zeit

Das letzte Teilstück unseres Medienplayers, das implementiert werden muss, ist die Anzeige der verstrichenen Zeit. Um dies zu tun, werden wir eine Funktion ausführen, um die Zeitanzeige zu aktualisieren, jedes Mal wenn das [`timeupdate`](/de/docs/Web/API/HTMLMediaElement/timeupdate_event)-Ereignis auf dem `<video>`-Element ausgelöst wird. Die Häufigkeit, mit der dieses Ereignis ausgelöst wird, hängt von Ihrem Browser, der CPU-Leistung usw. ab. ([Siehe diesen Stack Overflow-Beitrag](https://stackoverflow.com/questions/9678177/how-often-does-the-timeupdate-event-fire-for-an-html5-video)).

Fügen Sie die folgende `addEventListener()`-Zeile direkt unter die anderen hinzu:

```js
media.addEventListener("timeupdate", setTime);
```

Lassen Sie uns jetzt die `setTime()`-Funktion definieren. Fügen Sie das Folgende am Ende Ihrer Datei hinzu:

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

1. Zuerst ermitteln wir die Anzahl der Minuten und Sekunden in dem Wert von [`HTMLMediaElement.currentTime`](/de/docs/Web/API/HTMLMediaElement/currentTime).
2. Dann initialisieren wir zwei weitere Variablen — `minuteValue` und `secondValue`. Wir verwenden {{jsxref("String/padStart", "padStart()")}}, um jeden Wert auf 2 Zeichenlänge zu bringen, selbst wenn der numerische Wert nur einstellig ist.
3. Der tatsächliche anzuzeigende Zeitwert wird als `minuteValue` plus ein Doppelpunkt plus `secondValue` gesetzt.
4. Der Wert [`Node.textContent`](/de/docs/Web/API/Node/textContent) des Timers wird auf den Zeitwert gesetzt, sodass er in der Benutzeroberfläche angezeigt wird.
5. Die Länge, auf die wir das innere `<div>` setzen sollten, wird ermittelt, indem wir zunächst die Breite des äußeren `<div>` (die [`clientWidth`](/de/docs/Web/API/Element/clientWidth)-Eigenschaft eines beliebigen Elements enthält seine Länge) errechnen, und dann sie mit der [`HTMLMediaElement.currentTime`](/de/docs/Web/API/HTMLMediaElement/currentTime) dividiert durch die gesamte [`HTMLMediaElement.duration`](/de/docs/Web/API/HTMLMediaElement/duration) des Mediums multiplizieren.
6. Wir setzen die Breite des inneren `<div>` auf die berechnete Leistenlänge plus "px", damit es auf diese Anzahl von Pixeln eingestellt wird.

#### Behebung von Wiedergabe und Pause

Es gibt ein Problem, das noch behoben werden muss. Wenn die Abspiel-/Pause- oder Stoppknöpfe gedrückt werden, während die Zurück-/Vorspulfunktion aktiv ist, funktionieren sie einfach nicht. Wie kann man es so beheben, dass sie die `rwd`/`fwd`-Button-Funktionalität abbrechen und das Video wie erwartet abspielen/stoppen? Dies ist ziemlich einfach zu beheben.

Fügen Sie zunächst die folgenden Zeilen in die `stopMedia()`-Funktion ein — überall, wo es Ihnen passt:

```js
rwd.classList.remove("active");
fwd.classList.remove("active");
clearInterval(intervalRwd);
clearInterval(intervalFwd);
```

Fügen Sie nun die gleichen Zeilen erneut am ganz Anfang der `playPauseMedia()`-Funktion hinzu (direkt vor der `if`-Anweisung).

An dieser Stelle könnten Sie die entsprechenden Zeilen aus den `windBackward()` und `windForward()` Funktionen löschen, da diese Funktionalität stattdessen in der `stopMedia()`-Funktion implementiert wurde.

Hinweis: Sie könnten auch die Effizienz des Codes weiter verbessern, indem Sie eine separate Funktion erstellen, die diese Zeilen ausführt und dann überall dort aufrufen, wo es notwendig ist, anstatt die Zeilen mehrmals im Code zu wiederholen. Aber dies überlassen wir Ihnen.

## Zusammenfassung

Ich denke, wir haben Ihnen genug in diesem Artikel beigebracht. Die [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) API bietet eine Fülle von Funktionen zum Erstellen einfacher Video- und Audioplayer, und dies ist nur die Spitze des Eisbergs. Sehen Sie sich den Abschnitt "Siehe auch" unten für Links zu komplexeren und interessanteren Funktionen an.

Hier sind einige Vorschläge, wie Sie das bestehende Beispiel, das wir aufgebaut haben, verbessern könnten:

1. Die Zeitanzeige bricht derzeit zusammen, wenn das Video eine Stunde oder länger dauert (nun, es zeigt keine Stunden an; nur Minuten und Sekunden). Können Sie herausfinden, wie man das Beispiel ändert, damit es Stunden anzeigt?
2. Da `<audio>`-Elemente über die gleiche [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-Funktionalität verfügen, können Sie diesen Player auch problemlos für ein `<audio>`-Element verwenden. Versuchen Sie, dies zu tun.
3. Können Sie einen Weg finden, das Timer-Innere-`<div>`-Element in eine echte Suchleiste/Roller zu verwandeln – d.h. wenn Sie irgendwo auf die Leiste klicken, springt es zu dieser relativen Position in der Videowiedergabe? Als Hinweis: Sie können die X- und Y-Werte der linken/rechten und oberen/unten Seiten des Elements über die [`getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect)-Methode ermitteln, und Sie können die Koordinaten eines Mausklicks über das Ereignisobjekt des Klickereignisses, das auf dem [`Document`](/de/docs/Web/API/Document)-Objekt aufgerufen wird, ermitteln. Zum Beispiel:

   ```js
   document.onclick = function (e) {
     console.log(e.x, e.y);
   };
   ```

## Siehe auch

- [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)
- [HTML Video und Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio) — einfacher Leitfaden zu `<video>` und `<audio>` HTML.
- [Audio und Video Bereitstellung](/de/docs/Web/Media/Guides/Audio_and_video_delivery) — detaillierter Leitfaden zur Medienbereitstellung im Browser, mit vielen Tipps, Tricks und Links zu weiteren fortgeschrittenen Tutorials.
- [Audio- und Videomanipulation](/de/docs/Web/Media/Guides/Audio_and_video_manipulation) — detaillierter Leitfaden zur Audio- und Videomanipulation, z.B. mit [Canvas API](/de/docs/Web/API/Canvas_API), [Web Audio API](/de/docs/Web/API/Web_Audio_API) und mehr.
- {{htmlelement("video")}} und {{htmlelement("audio")}} Referenzseiten.
- [Leitfaden zu Medientypen und -formaten im Web](/de/docs/Web/Media/Guides/Formats)

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_APIs/Introduction", "Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics", "Learn_web_development/Extensions/Client-side_APIs")}}
