---
title: Video- und Audio-APIs
short-title: Video und Audio
slug: Learn_web_development/Extensions/Client-side_APIs/Video_and_audio_APIs
l10n:
  sourceCommit: 6c58c5d4227a031105740b0e85acbc6178223d0a
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_APIs/Introduction", "Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics", "Learn_web_development/Extensions/Client-side_APIs")}}

HTML enthält Elemente zum Einbetten von Rich Media in Dokumenten — {{htmlelement("video")}} und {{htmlelement("audio")}} — die wiederum ihre eigenen APIs zur Steuerung der Wiedergabe, des Suchens usw. mitbringen. Dieser Artikel zeigt Ihnen, wie Sie gängige Aufgaben wie die Erstellung benutzerdefinierter Wiedergabesteuerelemente durchführen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>, insbesondere <a href="/de/docs/Learn_web_development/Core/Scripting/Object_basics">Grundlagen von JavaScript-Objekten</a> und Kern-API-Abdeckung wie <a href="/de/docs/Learn_web_development/Core/Scripting/DOM_scripting">DOM-Scripting</a> und <a href="/de/docs/Learn_web_development/Core/Scripting/Network_requests">Netzwerkanfragen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        <ul>
          <li>Was Codecs sind und die verschiedenen Video- und Audioformate.</li>
          <li>Verstehen der Schlüsselfunktionalitäten im Zusammenhang mit Audio und Video — Abspielen, Pausieren, Stoppen, Rückwärts- und Vorwärtssuchen, Dauer und aktuelle Zeit.</li>
          <li>Verwendung der <code>HTMLMediaElement</code>-API zum Erstellen eines grundlegenden benutzerdefinierten Mediaplayers für bessere Zugänglichkeit oder mehr Konsistenz über Browser hinweg.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## HTML Video und Audio

Die {{htmlelement("video")}} und {{htmlelement("audio")}} Elemente ermöglichen es uns, Video und Audio in Webseiten einzubetten. Wie wir in [HTML video and audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio) gezeigt haben, sieht eine typische Implementierung so aus:

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

Dies erzeugt einen Videoplayer im Browser wie folgt:

{{EmbedGHLiveSample("learning-area/html/multimedia-and-embedding/video-and-audio-content/multiple-video-formats.html", '100%', 380)}}

Sie können sich im verlinkten Artikel ansehen, was all die HTML-Features machen; für unsere Zwecke hier ist das interessanteste Attribut [`controls`](/de/docs/Web/HTML/Element/video#controls), das das Standardsatz an Wiedergabesteuerungen aktiviert. Wenn Sie dies nicht angeben, erhalten Sie keine Wiedergabesteuerungen:

{{EmbedGHLiveSample("learning-area/html/multimedia-and-embedding/video-and-audio-content/multiple-video-formats-no-controls.html", '100%', 380)}}

Dies ist für die Videowiedergabe nicht sofort nützlich, hat aber Vorteile. Ein großes Problem mit den nativen Browser-Steuerelementen besteht darin, dass sie in jedem Browser unterschiedlich sind — nicht sehr gut für die Unterstützung über mehrere Browser hinweg! Ein weiteres großes Problem ist, dass die nativen Steuerelemente in den meisten Browsern nicht sehr tastaturfreundlich sind.

Sie können beide Probleme lösen, indem Sie die nativen Steuerelemente ausblenden (durch Entfernen des `controls`-Attributs) und Ihre eigenen mit HTML, CSS und JavaScript programmieren. Im nächsten Abschnitt werden wir die grundlegenden Tools betrachten, die uns dafür zur Verfügung stehen.

## Die HTMLMediaElement API

Ein Teil der HTML-Spezifikation, die [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-API bietet Funktionen, die es ermöglichen, Video- und Audioplayer programmatisch zu steuern — zum Beispiel [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play), [`HTMLMediaElement.pause()`](/de/docs/Web/API/HTMLMediaElement/pause) usw. Diese Schnittstelle steht sowohl {{htmlelement("audio")}}- als auch {{htmlelement("video")}}-Elementen zur Verfügung, da die Funktionen, die Sie implementieren möchten, nahezu identisch sind. Lassen Sie uns ein Beispiel durchgehen und dabei Funktionen hinzufügen.

Unser fertiges Beispiel wird (und wird funktionieren) etwa wie das folgende aussehen:

{{EmbedGHLiveSample("learning-area/javascript/apis/video-audio/finished/", '100%', 360)}}

### Erste Schritte

Um mit diesem Beispiel zu beginnen, [laden Sie unser media-player-start.zip herunter](https://github.com/mdn/learning-area/blob/main/javascript/apis/video-audio/start/media-player-start.zip) und entpacken Sie es in einem neuen Verzeichnis auf Ihrer Festplatte. Wenn Sie [unsere Beispiel-Repo heruntergeladen haben](https://github.com/mdn/learning-area), finden Sie es in `javascript/apis/video-audio/start/`.

An diesem Punkt, wenn Sie das HTML laden, sollten Sie einen ganz normalen HTML-Videoplayer sehen, der mit den nativen Steuerelementen gerendert wird.

#### Das HTML erkunden

Öffnen Sie die HTML-Indexdatei. Sie werden eine Anzahl von Features sehen; das HTML wird vom Videoplayer und seinen Steuerelementen dominiert:

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

- Der gesamte Player ist in ein {{htmlelement("div")}}-Element eingebettet, sodass er bei Bedarf als Einheit gestylt werden kann.
- Das {{htmlelement("video")}}-Element enthält zwei {{htmlelement("source")}}-Elemente, sodass je nach Browser, der die Seite ansieht, verschiedene Formate geladen werden können.
- Das interessanteste ist wahrscheinlich das Steuerelement-HTML:

  - Wir haben vier {{htmlelement("button")}}s — Abspielen/Pausieren, Stoppen, Zurückspulen und Vorspulen.
  - Jedes `<button>` hat einen `class`-Namen, ein `data-icon`-Attribut zur Definition, welches Symbol auf jeder Taste angezeigt werden soll (wir zeigen im unteren Abschnitt, wie das funktioniert), und ein `aria-label`-Attribut, um eine verständliche Beschreibung jeder Taste bereitzustellen, da wir innerhalb der Tags keine menschenlesbare Bezeichnung bereitstellen. Die Inhalte der `aria-label`-Attribute werden von Screenreadern vorgelesen, wenn ihre Benutzer auf die sie enthaltenden Elemente fokussieren.
  - Es gibt auch eine Timer-{{htmlelement("div")}}, die die verstrichene Zeit anzeigt, wenn das Video abgespielt wird. Nur zum Spaß bieten wir zwei Berichtmechanismen an — ein {{htmlelement("span")}}, das die verstrichene Zeit in Minuten und Sekunden enthält, und ein zusätzliches `<div>`, das wir verwenden, um eine horizontale Anzeigeleiste zu erstellen, die länger wird, wenn die Zeit verstreicht. Um eine Vorstellung davon zu bekommen, wie das fertige Produkt aussehen wird, [sehen Sie sich unsere fertige Version an](https://mdn.github.io/learning-area/javascript/apis/video-audio/finished/).

#### Das CSS erkunden

Öffnen Sie nun die CSS-Datei und schauen Sie hinein. Das CSS für das Beispiel ist nicht allzu kompliziert, aber wir heben hier die interessantesten Teile hervor. Zuerst beachten Sie das Styling der `.controls`:

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

- Wir beginnen mit der {{cssxref("visibility")}} der benutzerdefinierten Steuerelemente, die auf `hidden` gesetzt ist. Später in unserem JavaScript setzen wir die Steuerelemente auf `visible` und entfernen das `controls`-Attribut vom `<video>`-Element. Dies ist so, dass, falls das JavaScript aus irgendeinem Grund nicht geladen wird, die Benutzer das Video weiterhin mit den nativen Steuerelementen verwenden können.
- Wir geben den Steuerelementen standardmäßig eine {{cssxref("opacity")}} von 0.5, so dass sie weniger ablenken, wenn Sie versuchen, das Video anzusehen. Nur wenn Sie über den Player fahren / ihn fokussieren, erscheinen die Steuerelemente mit voller Opazität.
- Wir ordnen die Tasten innerhalb der Steuerleiste mit Flexbox ({{cssxref("display")}}: flex), um es einfacher zu machen.

Als Nächstes schauen wir uns unsere Schaltflächensymbole an:

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

Zuerst verwenden wir am Anfang des CSS einen {{cssxref("@font-face")}}-Block, um eine benutzerdefinierte Webschriftart zu importieren. Dies ist eine Icon-Schriftart — alle Buchstaben des Alphabets entsprechen gängigen Symbolen, die Sie in einer Anwendung verwenden könnten.

Als nächstes verwenden wir generierten Inhalt, um ein Symbol auf jeder Taste anzuzeigen:

- Wir verwenden den {{cssxref("::before")}}-Selektor, um den Inhalt vor jedem {{htmlelement("button")}}-Element anzuzeigen.
- Wir verwenden die {{cssxref("content")}}-Eigenschaft, um den anzuzeigenden Inhalt in jedem Fall auf den Inhalt des [`data-icon`](/de/docs/Learn_web_development/Howto/Solve_HTML_problems/Use_data_attributes)-Attributs einzustellen. Im Fall unserer Abspieltaste enthält `data-icon` ein großes "P".
- Wir wenden die benutzerdefinierte Webschriftart auf unsere Tasten mit {{cssxref("font-family")}} an. In dieser Schriftart ist "P" tatsächlich ein "Play"-Symbol, daher hat die Abspieltaste ein "Play"-Symbol, das auf ihr angezeigt wird.

Icon-Schriftarten sind aus vielen Gründen sehr cool — Reduzierung von HTTP-Anfragen, weil Sie diese Icons nicht als Bilddateien herunterladen müssen, großartige Skalierbarkeit und die Tatsache, dass Sie Text-Eigenschaften verwenden können, um sie zu stylen — wie {{cssxref("color")}} und {{cssxref("text-shadow")}}.

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

- Wir setzen das äußere `.timer`-Element auf `flex: 5`, so dass es den größten Teil der Breite der Steuerleiste einnimmt. Wir geben ihm auch {{cssxref("position", "position: relative")}}, so dass wir Elemente bequem innerhalb seiner Grenzen positionieren können, und nicht den Grenzen des {{htmlelement("body")}}-Elements.
- Das innere `<div>` wird absolut positioniert, um direkt über dem äußeren `<div>` zu sitzen. Es hat auch eine Anfangsbreite von 0, sodass Sie es überhaupt nicht sehen können. Während das Video abgespielt wird, wird die Breite durch JavaScript erhöht, während das Video abläuft.
- Das `<span>` wird ebenfalls absolut positioniert, um in der Nähe der linken Seite der Timerleiste zu sitzen.
- Wir geben auch unserem inneren `<div>` und `<span>` den richtigen {{cssxref("z-index")}}, so dass der Timer oben und das innere `<div>` darunter angezeigt wird. Auf diese Weise stellen wir sicher, dass wir alle Informationen sehen können — ein Feld verdeckt nicht das andere.

### Die Implementierung des JavaScript

Wir haben bereits eine ziemlich vollständige HTML- und CSS-Oberfläche; nun müssen wir nur noch alle Tasten verkabeln, um die Steuerelemente zum Laufen zu bringen.

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

   Hier erstellen wir Konstanten, um Referenzen zu allen Objekten zu halten, die wir manipulieren möchten. Wir haben drei Gruppen:

   - Das `<video>`-Element und die Steuerleiste.
   - Die Abspiel/Pause-, Stopp-, Rückspul- und Vorspultasten.
   - Das äußere Timer-Wrapper-`<div>`, die digitale Timeranzeige `<span>` und das innere `<div>`, das breiter wird, während die Zeit vergeht.

3. Fügen Sie als Nächstes das Folgende am unteren Rand Ihres Codes ein:

   ```js
   media.removeAttribute("controls");
   controls.style.visibility = "visible";
   ```

   Diese beiden Zeilen entfernen die standardmäßigen Browser-Steuerelemente vom Video und machen die benutzerdefinierten Steuerelemente sichtbar.

#### Abspielen und Pausieren des Videos

Lassen Sie uns wahrscheinlich das wichtigste Steuerelement implementieren — die Abspiel-/Pause-Taste.

1. Fügen Sie zunächst das folgende am Ende Ihres Codes hinzu, so dass die `playPauseMedia()`-Funktion aufgerufen wird, wenn die Abspieltaste geklickt wird:

   ```js
   play.addEventListener("click", playPauseMedia);
   ```

2. Nun zur Definition von `playPauseMedia()` — fügen Sie das folgende, wieder am Ende Ihres Codes hinzu:

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

   Hier verwenden wir eine [`if`](/de/docs/Web/JavaScript/Reference/Statements/if...else)-Anweisung, um zu überprüfen, ob das Video pausiert ist. Die [`HTMLMediaElement.paused`](/de/docs/Web/API/HTMLMediaElement/paused)-Eigenschaft gibt true zurück, wenn das Medium pausiert ist, was jedes Mal der Fall ist, wenn das Video nicht abgespielt wird, einschließlich wenn es nach dem ersten Laden auf 0 Dauer eingestellt ist. Wenn es pausiert ist, setzen wir den `data-icon`-Attributwert auf der Abspieltaste auf "u", was ein "pausiertes" Symbol ist, und rufen die [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play)-Methode auf, um das Medium abzuspielen.

   Bei einem zweiten Klick wird die Taste wieder zurückgeschaltet — das "Play"-Symbol wird wieder angezeigt und das Video wird mit [`HTMLMediaElement.pause()`](/de/docs/Web/API/HTMLMediaElement/pause) pausiert.

#### Das Video stoppen

1. Als Nächstes fügen wir Funktionalität hinzu, um das Stoppen des Videos zu handhaben. Fügen Sie die folgenden [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)-Zeilen unter den vorherigen hinzu:

   ```js
   stop.addEventListener("click", stopMedia);
   media.addEventListener("ended", stopMedia);
   ```

   Das [`click`](/de/docs/Web/API/Element/click_event)-Ereignis ist offensichtlich — wir möchten das Video stoppen, indem wir unsere `stopMedia()`-Funktion aufrufen, wenn die Stopptaste geklickt wird. Wir möchten das Video jedoch auch stoppen, wenn es mit dem Abspielen fertig ist — dies wird durch das [`ended`](/de/docs/Web/API/HTMLMediaElement/ended_event)-Ereignis signalisiert, also richten wir auch einen Listener ein, um die Funktion auszulösen, wenn dieses Ereignis abgefeuert wird.

2. Als Nächstes definieren wir die `stopMedia()`-Funktion — fügen Sie die folgende Funktion unter `playPauseMedia()` hinzu:

   ```js
   function stopMedia() {
     media.pause();
     media.currentTime = 0;
     play.setAttribute("data-icon", "P");
   }
   ```

   Es gibt keine `stop()`-Methode in der HTMLMediaElement-API — das Äquivalent ist, das Video zu `pause()`, und seine [`currentTime`](/de/docs/Web/API/HTMLMediaElement/currentTime)-Eigenschaft auf 0 zu setzen. Das Setzen von `currentTime` auf einen Wert (in Sekunden) springt sofort das Medium zu dieser Position.

   Alles, was noch zu tun ist, ist, das angezeigte Symbol auf das "Play"-Symbol zu setzen. Unabhängig davon, ob das Video pausiert oder abgespielt wurde, wenn die Stopptaste gedrückt wird, möchten Sie, dass es danach bereit ist, abgespielt zu werden.

#### Vor- und zurückspulen

Es gibt viele Möglichkeiten, wie Sie die Rückspul- und Vorspul-Funktionalität implementieren können; hier zeigen wir Ihnen eine relativ komplexe Art, es zu tun, die nicht abbricht, wenn die verschiedenen Tasten in unerwarteter Reihenfolge gedrückt werden.

1. Fügen Sie zunächst die folgenden zwei [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)-Linien unter die vorherigen hinzu:

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

   Sie werden bemerken, dass wir zuerst zwei Variablen initialisieren — `intervalFwd` und `intervalRwd` — Sie erfahren später, wofür sie sind.

   Lassen Sie uns `mediaBackward()` durchgehen (die Funktionalität für `mediaForward()` ist genau dieselbe, aber umgekehrt):

   1. Wir löschen alle Klassen und Intervalle, die auf die Vorspulfunktionalität gesetzt sind — dies tun wir, weil wir, wenn wir die `rwd`-Taste nach dem Drücken der `fwd`-Taste drücken, jegliche Vorspulfunktionalität abbrechen und durch die Rückspulfunktionalität ersetzen möchten. Wenn wir versuchen würden, beides gleichzeitig zu tun, würde der Player kaputtgehen.
   2. Wir verwenden eine `if`-Anweisung, um zu überprüfen, ob die `active`-Klasse auf die `rwd`-Taste gesetzt wurde, was anzeigt, dass sie bereits gedrückt wurde. Die [`classList`](/de/docs/Web/API/Element/classList) ist eine ziemlich praktische Eigenschaft, die auf jedem Element existiert — sie enthält eine Liste aller auf diesem Element gesetzten Klassen sowie Methoden zum Hinzufügen/Entfernen von Klassen usw. Wir verwenden die `classList.contains()`-Methode, um zu überprüfen, ob die Liste die `active`-Klasse enthält. Dies ergibt ein boolean `true`/`false`-Ergebnis.
   3. Wenn `active` bereits auf die `rwd`-Taste gesetzt wurde, entfernen wir sie mit `classList.remove()`, löschen das Intervall, das gesetzt wurde, als die Taste zuerst gedrückt wurde (siehe unten für mehr Erklärung), und verwenden [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play), um das Rückspulen abzubrechen und das Video normal abzuspielen.
   4. Wenn es noch nicht gesetzt wurde, fügen wir der `rwd`-Taste die `active`-Klasse mit `classList.add()` hinzu, pausieren das Video mit [`HTMLMediaElement.pause()`](/de/docs/Web/API/HTMLMediaElement/pause), und setzen die `intervalRwd`-Variable gleich einem [`setInterval()`](/de/docs/Web/API/Window/setInterval)-Aufruf. Wenn aufgerufen, erstellt `setInterval()` ein aktives Intervall, was bedeutet, dass es die Funktion, die als erster Parameter gegeben ist, alle x Millisekunden ausführt, wobei x der Wert des zweiten Parameters ist. Also rufen wir hier die `windBackward()`-Funktion alle 200 Millisekunden auf — wir werden diese Funktion verwenden, um das Video ständig zurückzuspulen. Um ein [`setInterval()`](/de/docs/Web/API/Window/setInterval) zu stoppen, müssen Sie [`clearInterval()`](/de/docs/Web/API/Window/clearInterval) aufrufen, wobei Sie den identifizierenden Namen des Intervalls zum Löschen angeben, was in diesem Fall der Variablenname `intervalRwd` ist (siehe den `clearInterval()`-Aufruf früher in der Funktion).

3. Schließlich müssen wir die `windBackward()` und `windForward()`-Funktionen definieren, die in den `setInterval()`-Aufrufen aufgerufen werden. Fügen Sie das folgende unterhalb Ihrer vorherigen Funktionen hinzu:

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

   Noch einmal, wir werden nur durch die erste dieser Funktionen laufen, da sie fast identisch arbeiten, jedoch in umgekehrter Richtung. In `windBackward()` tun wir das Folgende — beachten Sie, dass, wenn das Intervall aktiv ist, diese Funktion einmal alle 200 Millisekunden ausgeführt wird.

   1. Wir beginnen mit einer `if`-Anweisung, die überprüft, ob die aktuelle Zeit weniger als 3 Sekunden ist, d.h. ob das Zurückspulen um weitere drei Sekunden es zurück vor den Anfang des Videos bringen würde. Dies würde seltsames Verhalten verursachen, also wenn dies der Fall ist, stoppen wir das Video, indem wir `stopMedia()` aufrufen, die `active`-Klasse von der Rückspultaste entfernen und das `intervalRwd`-Intervall löschen, um die Rückspulfunktionalität zu stoppen. Wenn wir diesen letzten Schritt nicht machten, würde das Video einfach für immer zurückgespult werden.
   2. Wenn die aktuelle Zeit nicht innerhalb von 3 Sekunden ab dem Anfang des Videos liegt, entfernen wir drei Sekunden von der aktuellen Zeit, indem wir `media.currentTime -= 3` ausführen. Somit spulen wir das Video im Grunde genommen alle 200 Millisekunden um 3 Sekunden zurück.

#### Aktualisieren der verstrichenen Zeit

Das allerletzte Stück unseres Mediaplayers, das implementiert werden muss, sind die Zeit-verstrichen-Anzeigen. Um dies zu tun, führen wir eine Funktion aus, um die Zeitanzeigen jedes Mal zu aktualisieren, wenn das [`timeupdate`](/de/docs/Web/API/HTMLMediaElement/timeupdate_event)-Ereignis auf dem `<video>`-Element gefeuert wird. Die Häufigkeit, mit der dieses Ereignis gefeuert wird, hängt von Ihrem Browser, der CPU-Leistung usw. ab. ([siehe diesen Stack Overflow-Beitrag](https://stackoverflow.com/questions/9678177/how-often-does-the-timeupdate-event-fire-for-an-html5-video)).

Fügen Sie die folgende `addEventListener()`-Zeile direkt unter den anderen hinzu:

```js
media.addEventListener("timeupdate", setTime);
```

Nun zur Definition der `setTime()`-Funktion. Fügen Sie das folgende am Ende Ihrer Datei hinzu:

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

Dies ist eine ziemlich lange Funktion, also lassen Sie uns Schritt für Schritt durchgehen:

1. Zuerst arbeiten wir die Anzahl von Minuten und Sekunden im [`HTMLMediaElement.currentTime`](/de/docs/Web/API/HTMLMediaElement/currentTime)-Wert aus.
2. Dann initialisieren wir zwei weitere Variablen — `minuteValue` und `secondValue`. Wir verwenden {{jsxref("String/padStart", "padStart()")}}, um jeden Wert auf 2 Zeichen lang zu machen, auch wenn der Zahlenwert nur eine einstellige Zahl ist.
3. Der tatsächliche anzuzeigende Zeitwert wird als `minuteValue` plus einem Doppelpunkt-Zeichen plus `secondValue` gesetzt.
4. Der [`Node.textContent`](/de/docs/Web/API/Node/textContent)-Wert des Timers wird auf den Zeitwert gesetzt, damit er in der UI angezeigt wird.
5. Die Länge, die wir dem inneren `<div>` setzen sollten, wird berechnet, indem zuerst die Breite des äußeren `<div>` (die [`clientWidth`](/de/docs/Web/API/Element/clientWidth)-Eigenschaft eines Elements enthält seine Länge) ermittelt wird und sie dann multipliziert wird mit der [`HTMLMediaElement.currentTime`](/de/docs/Web/API/HTMLMediaElement/currentTime) geteilt durch die Gesamt- [`HTMLMediaElement.duration`](/de/docs/Web/API/HTMLMediaElement/duration) des Mediums.
6. Wir setzen die Breite des inneren `<div>` gleich der berechneten Balkenlänge plus "px", so dass es auf diese Anzahl von Pixeln gesetzt wird.

#### Abspielen und Pausieren Reparieren

Es gibt noch ein Problem zu beheben. Wenn die Abspiel-/Pause- oder Stopptasten gedrückt werden, während die Rück- oder Vorspul-Funktionalität aktiv ist, funktionieren sie einfach nicht. Wie können wir es reparieren, so dass sie die `rwd`/`fwd`-Tastenfunktionalität abbrechen und das Video abspielen/stoppen, wie Sie es erwarten würden? Dies ist ziemlich einfach zu beheben.

Fügen Sie zunächst die folgenden Zeilen innerhalb der `stopMedia()`-Funktion hinzu — irgendwo wird das tun:

```js
rwd.classList.remove("active");
fwd.classList.remove("active");
clearInterval(intervalRwd);
clearInterval(intervalFwd);
```

Fügen Sie nun dieselben Zeilen erneut am Anfang der `playPauseMedia()`-Funktion hinzu (direkt vor dem Beginn der `if`-Anweisung).

An dieser Stelle könnten Sie die äquivalenten Zeilen aus den `windBackward()` und `windForward()`-Funktionen löschen, da diese Funktionalität in der `stopMedia()`-Funktion implementiert wurde.

Hinweis: Sie könnten auch die Effizienz des Codes weiter verbessern, indem Sie eine separate Funktion erstellen, die diese Zeilen ausführt, und sie dann überall dort aufrufen, wo sie benötigt werden, anstatt die Zeilen mehrfach im Code zu wiederholen. Aber wir überlassen das Ihnen.

## Zusammenfassung

Ich denke, wir haben Ihnen in diesem Artikel genug beigebracht. Die [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-API bietet eine Fülle von Funktionalitäten zur Erstellung einfacher Video- und Audioplayer, und das ist nur die Spitze des Eisbergs. Siehe den Abschnitt "Siehe auch" unten für Links zu komplexeren und interessanteren Funktionalitäten.

Hier sind einige Vorschläge für Möglichkeiten, wie Sie das bestehende Beispiel, das wir erstellt haben, erweitern könnten:

1. Die Zeitanzeige bricht derzeit, wenn das Video eine Stunde oder länger ist (naja, sie wird keine Stunden anzeigen; nur Minuten und Sekunden). Können Sie herausfinden, wie Sie das Beispiel ändern können, um Stunden anzuzeigen?
2. Da `<audio>`-Elemente dieselbe [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-Funktionalität zur Verfügung haben, könnten Sie diesen Player leicht dazu bringen, auch für ein `<audio>`-Element zu funktionieren. Versuchen Sie es.
3. Können Sie einen Weg finden, das innere `<div>`-Element des Timers in eine echte Suchleiste/Scrollleiste zu verwandeln — d.h. wenn Sie irgendwo auf die Leiste klicken, springt es zu dieser relativen Position in der Videowiedergabe? Als Hinweis, Sie können die X- und Y-Werte der linken/rechten und oberen/unten Seiten eines Elements mithilfe der [`getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect)-Methode herausfinden, und die Koordinaten eines Mausklicks können Sie über das Ereignisobjekt des Klickereignisses, aufgerufen auf dem [`Document`](/de/docs/Web/API/Document)-Objekt, herausfinden. Zum Beispiel:

   ```js
   document.onclick = function (e) {
     console.log(e.x, e.y);
   };
   ```

## Siehe auch

- [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)
- [HTML video and audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio) — einfacher Leitfaden zu `<video>` und `<audio>` HTML.
- [Audio und Video Lieferung](/de/docs/Web/Media/Guides/Audio_and_video_delivery) — detaillierter Leitfaden zur Bereitstellung von Medien im Browser, mit vielen Tipps, Tricks und Links zu weiterführenden, fortgeschritteneren Tutorials.
- [Audio und Video Bearbeitung](/de/docs/Web/Media/Guides/Audio_and_video_manipulation) — detaillierter Leitfaden zur Bearbeitung von Audio und Video, z. B. mit der [Canvas API](/de/docs/Web/API/Canvas_API), [Web Audio API](/de/docs/Web/API/Web_Audio_API) und mehr.
- {{htmlelement("video")}} und {{htmlelement("audio")}}-Referenzseiten.
- [Leitfaden zu Medientypen und Formaten im Web](/de/docs/Web/Media/Guides/Formats)

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_APIs/Introduction", "Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics", "Learn_web_development/Extensions/Client-side_APIs")}}
