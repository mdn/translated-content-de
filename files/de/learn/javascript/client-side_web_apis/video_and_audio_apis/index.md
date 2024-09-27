---
title: Video- und Audio-APIs
slug: Learn/JavaScript/Client-side_web_APIs/Video_and_audio_APIs
l10n:
  sourceCommit: 75326725db2daa924618e58ae31a43345c7a16dc
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Client-side_web_APIs/Drawing_graphics", "Learn/JavaScript/Client-side_web_APIs/Client-side_storage", "Learn/JavaScript/Client-side_web_APIs")}}

HTML enthält Elemente zum Einbetten von Multimedia-Inhalten in Dokumente — {{htmlelement("video")}} und {{htmlelement("audio")}} — die eigene APIs zum Steuern der Wiedergabe, Suchen usw. mitbringen. Dieser Artikel zeigt Ihnen, wie Sie häufige Aufgaben ausführen, wie z. B. das Erstellen von benutzerdefinierten Wiedergabesteuerungen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        JavaScript-Grundlagen (siehe
        <a href="/de/docs/Learn/JavaScript/First_steps">erste Schritte</a>,
        <a href="/de/docs/Learn/JavaScript/Building_blocks"
          >Bausteine</a
        >,
        <a href="/de/docs/Learn/JavaScript/Objects">JavaScript-Objekte</a>),
        die
        <a href="/de/docs/Learn/JavaScript/Client-side_web_APIs/Introduction"
          >Grundlagen von Client-seitigen APIs</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Zu lernen, wie man Browser-APIs verwendet, um Video- und Audiowiedergabe zu steuern.
      </td>
    </tr>
  </tbody>
</table>

## HTML-Video und -Audio

Die {{htmlelement("video")}}- und {{htmlelement("audio")}}-Elemente ermöglichen das Einbetten von Video und Audio in Webseiten. Wie in [Video- und Audioinhalte](/de/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content) gezeigt, sieht eine typische Implementierung so aus:

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

Sie können im oben verlinkten Artikel nachlesen, was alle HTML-Features bewirken; für unsere Zwecke hier ist das interessanteste Attribut [`controls`](/de/docs/Web/HTML/Element/video#controls), das den standardmäßigen Satz von Wiedergabesteuerungen aktiviert. Wenn Sie dies nicht angeben, erhalten Sie keine Wiedergabesteuerungen:

{{EmbedGHLiveSample("learning-area/html/multimedia-and-embedding/video-and-audio-content/multiple-video-formats-no-controls.html", '100%', 380)}}

Dies ist für die Videowiedergabe nicht sofort nützlich, hat aber Vorteile. Ein großes Problem mit den nativen Browser-Steuerelementen ist, dass sie in jedem Browser unterschiedlich sind — nicht sehr gut für plattformübergreifende Unterstützung! Ein weiteres großes Problem ist, dass die nativen Steuerelemente in den meisten Browsern nicht sehr tastaturfreundlich sind.

Sie können beide Probleme lösen, indem Sie die nativen Steuerelemente ausblenden (durch Entfernen des `controls`-Attributs) und Ihre eigenen mit HTML, CSS und JavaScript programmieren. Im nächsten Abschnitt werden wir uns die grundlegenden Tools ansehen, die uns dafür zur Verfügung stehen.

## Die HTMLMediaElement-API

Teil der HTML-Spezifikation, die [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-API bietet Funktionen, mit denen Sie Video- und Audioplayer programmatisch steuern können — zum Beispiel [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play), [`HTMLMediaElement.pause()`](/de/docs/Web/API/HTMLMediaElement/pause) usw. Diese Schnittstelle steht sowohl {{htmlelement("audio")}}- als auch {{htmlelement("video")}}-Elementen zur Verfügung, da die Funktionen, die Sie implementieren möchten, fast identisch sind. Lassen Sie uns ein Beispiel durchgehen, bei dem wir immer mehr Merkmale hinzufügen.

Unser fertiges Beispiel wird in etwa wie folgt aussehen (und funktionieren):

{{EmbedGHLiveSample("learning-area/javascript/apis/video-audio/finished/", '100%', 360)}}

### Einstieg

Um mit diesem Beispiel zu beginnen, [laden Sie unseren media-player-start.zip herunter](https://github.com/mdn/learning-area/blob/main/javascript/apis/video-audio/start/media-player-start.zip) und entpacken Sie es in ein neues Verzeichnis auf Ihrer Festplatte. Wenn Sie unser [Beispiel-Repo heruntergeladen haben](https://github.com/mdn/learning-area), finden Sie es unter `javascript/apis/video-audio/start/`.

Zu diesem Zeitpunkt sollten Sie beim Laden der HTML einen ganz normalen HTML-Videoplayer mit den nativen Steuerelementen sehen.

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

- Der gesamte Player ist in ein {{htmlelement("div")}}-Element eingewickelt, sodass er bei Bedarf als Einheit formatiert werden kann.
- Das {{htmlelement("video")}}-Element enthält zwei {{htmlelement("source")}}-Elemente, sodass je nach dem Browser, der die Seite betrachtet, verschiedene Formate geladen werden können.
- Die HTML-Steuerungen sind wahrscheinlich am interessantesten:

  - Wir haben vier {{htmlelement("button")}}s — Play/Pause, Stopp, Rückspulen und Vorspulen.
  - Jedes `<button>` hat einen `class`-Namen, ein `data-icon`-Attribut, um anzugeben, welches Symbol auf jedem Knopf angezeigt werden soll (weiter unten zeigen wir, wie dies funktioniert), und ein `aria-label`-Attribut, um eine verständliche Beschreibung jedes Knopfes bereitzustellen, da wir kein menschlich lesbares Etikett innerhalb der Tags bereitstellen. Die Inhalte der `aria-label`-Attribute werden von Screenreadern vorgelesen, wenn deren Benutzer sich auf die Elemente fokussieren, die sie enthalten.
  - Es gibt auch einen Timer-{{htmlelement("div")}}, der die abgelaufene Zeit anzeigt, wenn das Video abgespielt wird. Nur zum Spaß bieten wir zwei Berichtmechanismen — einen {{htmlelement("span")}}, der die verstrichene Zeit in Minuten und Sekunden anzeigt, und ein zusätzliches `<div>`, das wir verwenden werden, um eine horizontale Anzeigebarleiste zu erstellen, die länger wird, während die Zeit verstreicht. Um eine Vorstellung davon zu bekommen, wie das fertige Produkt aussehen wird, [sehen Sie sich unsere fertige Version an](https://mdn.github.io/learning-area/javascript/apis/video-audio/finished/).

#### Erkundung des CSS

Öffnen Sie nun die CSS-Datei und schauen Sie hinein. Das CSS für das Beispiel ist nicht allzu kompliziert, aber wir werden hier die interessantesten Teile hervorheben. Zuerst einmal beachten Sie das `.controls`-Styling:

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

- Wir beginnen mit der {{cssxref("visibility")}} der benutzerdefinierten Steuerelemente, die auf `hidden` gesetzt ist. Später in unserem JavaScript werden wir die Steuerelemente auf `visible` setzen und das `controls`-Attribut vom `<video>`-Element entfernen. Dies dient dazu, dass, falls das JavaScript aus irgendeinem Grund nicht geladen wird, Benutzer das Video weiterhin mit den nativen Steuerelementen verwenden können.
- Wir geben den Steuerelementen standardmäßig eine {{cssxref("opacity")}} von 0,5, damit sie weniger ablenken, während Sie das Video ansehen. Nur wenn Sie über den Player gleiten/fokussieren, erscheinen die Steuerelemente mit voller Deckkraft.
- Wir legen die Knöpfe innerhalb der Steuerleiste mit Flexbox ({{cssxref("display")}}: flex) an, um es einfacher zu machen.

Als nächstes betrachten wir unsere Knopfsymbole:

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

Zuerst verwenden wir oben im CSS einen {{cssxref("@font-face")}}-Block, um eine benutzerdefinierte Web-Schriftart zu importieren. Dies ist eine Symbolschriftart — alle Buchstaben des Alphabets entsprechen allgemeinen Icons, die Sie in einer Anwendung verwenden könnten.

Als nächstes verwenden wir generierten Inhalt, um ein Symbol auf jedem Knopf anzuzeigen:

- Wir verwenden den {{cssxref("::before")}}-Selektor, um den Inhalt vor jedem {{htmlelement("button")}}-Element anzuzeigen.
- Wir verwenden die {{cssxref("content")}}-Eigenschaft, um den Inhalt in jedem Fall so einzustellen, dass er den Inhalten des [`data-icon`](/de/docs/Learn/HTML/Howto/Use_data_attributes)-Attributs entspricht. Im Fall unseres Abspielknopfes enthält `data-icon` einen Großbuchstaben "P".
- Wir wenden die benutzerdefinierte Web-Schriftart auf unsere Knöpfe mit {{cssxref("font-family")}} an. In dieser Schriftart ist "P" tatsächlich ein "Abspielsymbol", daher hat der Abspielknopf ein "Abspielsymbol" darauf angezeigt.

Symbolschriften sind aus vielen Gründen sehr cool — Reduktion von HTTP-Anfragen, weil Sie diese Symbole nicht als Bilddateien herunterladen müssen, hervorragende Skalierbarkeit und die Tatsache, dass Sie Text-Eigenschaften verwenden können, um sie zu gestalten — wie {{cssxref("color")}} und {{cssxref("text-shadow")}}.

Last but not least sehen wir uns das CSS für den Timer an:

![](4-464fd8b.md)

- Wir setzen das äußere `.timer`-Element auf `flex: 5`, sodass es den größten Teil der Breite der Steuerelementleiste einnimmt. Wir geben ihm auch {{cssxref("position", "position: relative")}}, damit wir Elemente innerhalb davon bequem gemäß seinen Grenzen positionieren können und nicht gemäß den Grenzen des {{htmlelement("body")}}-Elements.
- Das innere `<div>` ist absolut positioniert, um direkt auf dem äußeren `<div>` zu sitzen. Es hat auch eine Anfangsbreite von 0, sodass Sie es überhaupt nicht sehen können. Wenn das Video abgespielt wird, wird die Breite über JavaScript erhöht, während die Zeit abläuft.
- Das `<span>` ist ebenfalls absolut positioniert, um in der Nähe der linken Seite der Timerleiste zu sitzen.
- Wir geben unserem inneren `<div>` und `<span>` auch den richtigen {{cssxref("z-index")}}, sodass der Timer oben angezeigt wird und das innere `<div>` darunter. Auf diese Weise stellen wir sicher, dass alle Informationen sichtbar sind — ein Feld verdeckt nicht das andere.

### Implementierung des JavaScripts

Wir haben bereits eine ziemlich vollständige HTML- und CSS-Oberfläche; jetzt müssen wir nur noch alle Knöpfe verdrahten, um die Steuerelemente funktionsfähig zu machen.

1. Erstellen Sie auf derselben Verzeichnisebene wie Ihre index.html-Datei eine neue JavaScript-Datei. Nennen Sie sie `custom-player.js`.
2. Fügen Sie oben in dieser Datei den folgenden Code ein:

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
   - Die Play/Pause-, Stopp-, Rückspul- und Vorspulknöpfe.
   - Das äußere Timer-Wrapper-`<div>`, die digitale Timer-Anzeige-`<span>` und das innere `<div>`, das breiter wird, während die Zeit abläuft.

3. Als nächstes fügen Sie das folgende am Ende Ihres Codes ein:

   ```js
   media.removeAttribute("controls");
   controls.style.visibility = "visible";
   ```

   Diese beiden Zeilen entfernen die standardmäßigen Browser-Steuerelemente vom Video und machen die benutzerdefinierten Steuerelemente sichtbar.

#### Abspielen und Pausieren des Videos

Lassen Sie uns die wahrscheinlich wichtigste Steuerung umsetzen — den Play/Pause-Knopf.

1. Fügen Sie zuerst das folgende am unteren Ende Ihres Codes hinzu, damit die `playPauseMedia()`-Funktion aufgerufen wird, wenn der Abspielknopf gedrückt wird:

   ```js
   play.addEventListener("click", playPauseMedia);
   ```

2. Jetzt definieren wir `playPauseMedia()` — fügen Sie folgendes ebenfalls am Ende Ihres Codes hinzu:

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

   Hier verwenden wir eine [`if`](/de/docs/Web/JavaScript/Reference/Statements/if...else)-Anweisung, um zu überprüfen, ob das Video pausiert ist. Die [`HTMLMediaElement.paused`](/de/docs/Web/API/HTMLMediaElement/paused)-Eigenschaft gibt true zurück, wenn das Medium pausiert ist, was jedes Mal der Fall ist, wenn das Video nicht abgespielt wird, einschließlich wenn es nach dem ersten Laden auf eine Dauer von 0 gesetzt ist. Wenn es pausiert ist, setzen wir den Wert des `data-icon`-Attributs am Play-Knopf auf "u", was ein "pausiert"-Symbol ist, und rufen die [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play)-Methode auf, um das Medium abzuspielen.

   Beim zweiten Klick wird der Knopf wieder umgeschaltet — das "Abspielsymbol" wird wieder angezeigt und das Video wird mit [`HTMLMediaElement.pause()`](/de/docs/Web/API/HTMLMediaElement/pause) pausiert.

#### Stoppen des Videos

1. Als nächstes fügen wir die Funktionalität hinzu, um das Video zu stoppen. Fügen Sie die folgenden [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)-Zeilen unter den vorherigen ein, die Sie hinzugefügt haben:

   ```js
   stop.addEventListener("click", stopMedia);
   media.addEventListener("ended", stopMedia);
   ```

   Das [`click`](/de/docs/Web/API/Element/click_event)-Ereignis ist offensichtlich — wir möchten das Video stoppen, indem wir unsere `stopMedia()`-Funktion ausführen, wenn der Stoppknopf geklickt wird. Wir möchten jedoch auch das Video stoppen, wenn es zu Ende gespielt ist — dies ist durch das Abfeuern des [`ended`](/de/docs/Web/API/HTMLMediaElement/ended_event)-Ereignisses markiert, daher richten wir auch einen Listener ein, der die Funktion ausführt, wenn dieses Ereignis ausgelöst wird.

2. Definieren wir nun `stopMedia()` — fügen Sie die folgende Funktion unter `playPauseMedia()` hinzu:

   ```js
   function stopMedia() {
     media.pause();
     media.currentTime = 0;
     play.setAttribute("data-icon", "P");
   }
   ```

   es gibt keine `stop()`-Methode in der HTMLMediaElement-API — das Äquivalent besteht darin, das Video zu `pause()` und seine [`currentTime`](/de/docs/Web/API/HTMLMediaElement/currentTime)-Eigenschaft auf 0 zu setzen. Das Setzen von `currentTime` auf einen Wert (in Sekunden) springt sofort zu dieser Position im Medium.

   Alles, was danach noch zu tun ist, ist das angezeigte Symbol auf das "Abspielsymbol" zu setzen. Unabhängig davon, ob das Video pausiert oder abgespielt war, als der Stop-Knopf gedrückt wurde, möchten Sie, dass es danach bereit zum Abspielen ist.

#### Zurück- und Vorspulen

Es gibt viele Möglichkeiten, wie Sie die Rück- und Vorlauf-Funktionalität implementieren können; hier zeigen wir Ihnen einen relativ komplexen Weg, der nicht kaputt geht, wenn die verschiedenen Knöpfe in unerwarteter Reihenfolge gedrückt werden.

1. Fügen Sie zuerst die folgenden zwei [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)-Zeilen unter den vorherigen ein:

   ```js
   rwd.addEventListener("click", mediaBackward);
   fwd.addEventListener("click", mediaForward);
   ```

2. Nun zu den Ereignisbehandlungsfunktionen — fügen Sie den folgenden Code unter Ihren vorherigen Funktionen hinzu, um `mediaBackward()` und `mediaForward()` zu definieren:

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

   Sie werden bemerken, dass wir zuerst zwei Variablen initialisieren — `intervalFwd` und `intervalRwd` — Sie werden später erfahren, wofür sie sind.

   Gehen wir `mediaBackward()` Schritt für Schritt durch (die Funktionalität für `mediaForward()` ist genau dieselbe, jedoch umgekehrt):

   1. Wir löschen alle Klassen und Intervalle, die auf die Vorspul-Funktionalität gesetzt sind — dies tun wir, weil, wenn wir die `rwd`-Taste nach dem Drücken der `fwd`-Taste drücken, die Vorspul-Funktionalität aufgehoben und durch die Rücklauf-Funktionalität ersetzt werden soll. Wenn wir versuchten, beide gleichzeitig zu tun, würde der Player kaputt gehen.
   2. Wir verwenden eine `if`-Anweisung, um zu überprüfen, ob die Klasse `active` auf die `rwd`-Taste gesetzt wurde, was anzeigt, dass sie bereits gedrückt wurde. Die [`classList`](/de/docs/Web/API/Element/classList) ist eine ziemlich praktische Eigenschaft, die auf jedem Element existiert — sie enthält eine Liste aller Klassen, die auf das Element gesetzt sind, sowie Methoden zum Hinzufügen/Entfernen von Klassen usw. Wir verwenden die `classList.contains()`-Methode, um zu überprüfen, ob die Liste die Klasse `active` enthält. Dies gibt ein boolesches `true`/`false`-Ergebnis zurück.
   3. Wenn `active` auf die `rwd`-Taste gesetzt wurde, entfernen wir es mit `classList.remove()`, löschen das Intervall, das gesetzt wurde, als die Taste zum ersten Mal gedrückt wurde (siehe unten für mehr Erklärung), und verwenden [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play), um das Rückspulen abzubrechen und das Video normal abzuspielen.
   4. Wenn es noch nicht gesetzt wurde, fügen wir die Klasse `active` auf die `rwd`-Taste mit `classList.add()` hinzu, pausieren das Video mit [`HTMLMediaElement.pause()`](/de/docs/Web/API/HTMLMediaElement/pause), und setzen dann die Variable `intervalRwd` gleich einem [`setInterval()`](/de/docs/Web/API/SetInterval)-Aufruf. Wenn aufgerufen, erstellt `setInterval()` ein aktives Intervall, was bedeutet, dass es die Funktion, die als erstes Parameterargument bereitgestellt wird, alle x Millisekunden ausführt, wobei x der Wert des zweiten Arguments ist. Hier führen wir die Funktion `windBackward()` alle 200 Millisekunden aus — wir verwenden diese Funktion, um das Video ständig zurückzuspulen. Um ein aktiv استخيون/target/signup/register/">انضم إليناободите активен picked link front page env.json goodness class="results left col-sm-12 col-xs-12 text-muted text-center">command character entino calendar attached files cla вставити class="highlight keypress widget" href="/wizard/hub/pages/1" target="\_blank" rel="noopener">page<|vq_3952|> `setInterval()` and keep the If you wish to see this player in action, please follow this scene: **Movie #3, Step #3**

## Updating the timer display

Now we're ready to implement the timer display feature on our players.

By default, the time display breaks if the video is an hour long or more (it does not display hours; just minutes and seconds).

Try to figure out how to modify the example to display this functionality.

#### Time Update Event

To properly implement the time displayed on the player, we'll track and update the timer for every `timeupdate` event.

Insert the following `addEventListener()` in the `custom-player.js` script to observe the `timeupdate` event.

```javascript
media.addEventListener("timeupdate", setTime);
```

#### setTime function

In `custom-player.js`, insert the `setTime` function after the event listener.

```javascript
function setTime() {
  let minutes = Math.floor(media.currentTime / 60);
  let seconds = Math.floor(media.currentTime - minutes * 60);

  let minuteValue = minutes.toString().padStart(2, "0");
  let secondValue = seconds.toString().padStart(2, "0");

  let mediaTime = `${minuteValue}:${secondValue}`;

  timer.textContent = mediaTime;

  let progressBarTime =
    timerWrapper.clientWidth * (media.currentTime / media.duration);
  progress.style.width = `${progressBarTime}px`;
}
```

Let's look at the function step by step:

1. ### Calculations

   - First, we compute the number of minutes and seconds contained in the `currentTime` of the `media`.
   - Two additional variables, `minuteValue` and `secondValue`, are initialized. We use `padStart()` to ensure each value is two characters long, even if the numeric value is only a single digit.

2. ### UI Display

   - Next, we set the `mediaTime` to be displayed.
   - The `textContent` value of the timer is revised to the calculated time.

3. ### Progress Bar Display

   - We gather information for slider `<div>'s` width using the outer `timerWrapper`. As a metric, divide `currentTime` with the total duration of the `media`.
   - Lastly, the width of the inner `<div>` in the slider is adjusted based on the computed length.

## Correcting Play/Pause Functionality

The last problem to resolve is when the play/pause or stop buttons are pressed while the rewind or fast-forward features are activated, leading them to malfunction. Let's correct this by canceling the `rwd`/`fwd` functionality and restore the player as you expect.

Place the following lines inside the `stopMedia()` function - anywhere in the function:

```javascript
fwdButton.classList.remove("active");
rwdButton.classList.remove("active");
clearInterval(intervalRwd);
clearInterval(intervalFwd);
```

Next, repeat the same steps for the start of the `playPauseMedia()` function (before the start of the `if` statement).

You could also eliminate similarly repetitive lines from `windBackward()` and `windForward()` functions as this functionality now resides within the `stopMedia()` function.

### Note on Efficiency

- To further enhance code efficiency, consolidate the repeated lines of code into a standalone function, referencing it where necessary instead of repeating it multiple times.

## Conclusion

This article provided a comprehensive look at utilizing the `HTMLMediaElement` API. The API offers a rich set of capabilities for building basic video and audio players, only skimming what's achievable. Below are suggestions for further extending the existing player.

1. Instead of minutes and seconds, consider appending hours to the display once the timer crosses the hour mark.
2. Take the same `HTMLMediaElement` functionality available to `<audio>` elements to expand this player's capability with `<audio>`.
3. Try transforming the timer `<div>` into a genuine seek bar/scroller, where a click on the bar advances playback to a relative position. For reference, the `getBoundingClientRect()` method reveals the X and Y position of an element's bounding box, while the Document's event object provides mouse click coordinates, such as:

```javascript
document.addEventListener("click", (event) => {
  console.log(event.clientX, event.clientY);
});
```

## Mehr sehen

- [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)
- [Video- und Audioinhalte](/de/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content) — Einfacher Leitfaden zu `<video>` und `<audio>` HTML.
- [Audio- und Videoübertragung](/de/docs/Web/Media/Audio_and_video_delivery) — Detaillierter Leitfaden zur Bereitstellung von Medien im Browser, mit vielen Tipps, Tricks und Links zu weiterführenden fortgeschrittenen Tutorials.
- [Audio- und Video-Manipulation](/de/docs/Web/Media/Audio_and_video_manipulation) — Detaillierter Leitfaden zur Manipulation von Audio und Video, z. B. mit [Canvas API](/de/docs/Web/API/Canvas_API), [Web Audio API](/de/docs/Web/API/Web_Audio_API), und mehr.
- Referenzseiten für {{htmlelement("video")}} und {{htmlelement("audio")}}.
- [Leitfaden zu Medientypen und Formaten im Web](/de/docs/Web/Media/Formats)

{{PreviousMenuNext("Learn/JavaScript/Client-side_web_APIs/Drawing_graphics", "Learn/JavaScript/Client-side_web_APIs/Client-side_storage", "Learn/JavaScript/Client-side_web_APIs")}}
