---
title: Video und Audio APIs
slug: Learn/JavaScript/Client-side_web_APIs/Video_and_audio_APIs
l10n:
  sourceCommit: 75326725db2daa924618e58ae31a43345c7a16dc
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Client-side_web_APIs/Drawing_graphics", "Learn/JavaScript/Client-side_web_APIs/Client-side_storage", "Learn/JavaScript/Client-side_web_APIs")}}

HTML bietet Elemente zum Einbinden von Multimedia-Inhalten in Dokumente — {{htmlelement("video")}} und {{htmlelement("audio")}} — die wiederum eigene APIs zum Steuern der Wiedergabe, zum Suchen etc. haben. Dieser Artikel zeigt Ihnen, wie Sie gängige Aufgaben wie das Erstellen benutzerdefinierter Wiedergabesteuerungen ausführen können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        JavaScript-Grundlagen (siehe
        <a href="/de/docs/Learn/JavaScript/First_steps">erste Schritte</a>,
        <a href="/de/docs/Learn/JavaScript/Building_blocks"
          >Grundbausteine</a
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

## HTML-Video und -Audio

Die {{htmlelement("video")}}- und {{htmlelement("audio")}}-Elemente ermöglichen es uns, Video- und Audiodateien in Webseiten einzubetten. Wie wir im Artikel [Video- und Audioinhalte](/de/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content) gezeigt haben, sieht eine typische Implementierung so aus:

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

Sie können nachlesen, was alle HTML-Features im oben verlinkten Artikel bewirken; für unsere Zwecke hier ist das interessanteste Attribut [`controls`](/de/docs/Web/HTML/Element/video#controls), das das Standardset an Wiedergabesteuerungen aktiviert. Wenn Sie dies nicht angeben, erhalten Sie keine Wiedergabesteuerungen:

{{EmbedGHLiveSample("learning-area/html/multimedia-and-embedding/video-and-audio-content/multiple-video-formats-no-controls.html", '100%', 380)}}

Dies ist für die Videowiedergabe nicht sofort nützlich, hat jedoch Vorteile. Ein großes Problem mit den nativen Browser-Steuerelementen ist, dass sie in jedem Browser unterschiedlich sind — nicht sehr gut für die plattformübergreifende Unterstützung! Ein weiteres großes Problem ist, dass die nativen Steuerelemente in den meisten Browsern nicht sehr tastaturzugänglich sind.

Beide Probleme können Sie lösen, indem Sie die nativen Steuerelemente ausblenden (durch Entfernen des `controls`-Attributs) und mit HTML, CSS und JavaScript eigene programmieren. Im nächsten Abschnitt betrachten wir die grundlegenden Werkzeuge, die wir dafür zur Verfügung haben.

## Die HTMLMediaElement API

Teil der HTML-Spezifikation, bietet die [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) API Funktionen, die es Ihnen ermöglichen, Video- und Audioplayer programmgesteuert zu steuern — zum Beispiel [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play), [`HTMLMediaElement.pause()`](/de/docs/Web/API/HTMLMediaElement/pause) usw. Diese Schnittstelle steht sowohl {{htmlelement("audio")}}- als auch {{htmlelement("video")}}-Elementen zur Verfügung, da die Funktionen, die Sie implementieren möchten, fast identisch sind. Lassen Sie uns ein Beispiel durchgehen und dabei Funktionen hinzufügen.

Unser fertiges Beispiel wird ungefähr so aussehen (und funktionieren):

{{EmbedGHLiveSample("learning-area/javascript/apis/video-audio/finished/", '100%', 360)}}

### Erste Schritte

Um mit diesem Beispiel zu beginnen, [laden Sie unser media-player-start.zip herunter](https://github.com/mdn/learning-area/blob/main/javascript/apis/video-audio/start/media-player-start.zip) und entpacken Sie es in ein neues Verzeichnis auf Ihrer Festplatte. Wenn Sie [unser Repo mit Beispielen heruntergeladen haben](https://github.com/mdn/learning-area), finden Sie es in `javascript/apis/video-audio/start/`.

Zu diesem Zeitpunkt sollten Sie, wenn Sie das HTML laden, einen völlig normalen HTML-Videoplayer mit den gerenderten nativen Steuerelementen sehen.

#### Das HTML erkunden

Öffnen Sie die HTML-Indexdatei. Sie werden eine Reihe von Features sehen; die HTML wird vom Videoplayer und seinen Steuerungen dominiert:

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

- Der gesamte Player ist in ein {{htmlelement("div")}}-Element eingebettet, sodass das Ganze bei Bedarf als eine Einheit gestylt werden kann.
- Das {{htmlelement("video")}}-Element enthält zwei {{htmlelement("source")}}-Elemente, sodass je nach dem Browser, der die Seite anzeigt, verschiedene Formate geladen werden können.
- Das HTML der Steuerelemente ist wahrscheinlich das interessanteste:

  - Wir haben vier {{htmlelement("button")}}s — Wiedergabe/Pause, Stop, Zurückspulen und Vorspulen.
  - Jedes `<button>` hat einen `class`-Namen, ein `data-icon`-Attribut zur Definition, welches Symbol auf jedem Button angezeigt werden soll (wir zeigen unten, wie dies funktioniert), und ein `aria-label`-Attribut, um eine verständliche Beschreibung jedes Buttons zu bieten, da wir innerhalb der Tags keine für Menschen lesbaren Beschriftungen bereitstellen. Der Inhalt von `aria-label`-Attributen wird von Bildschirmlesegeräten vorgelesen, wenn deren Benutzer die enthaltenen Elemente fokussieren.
  - Es gibt auch einen Timer-{{htmlelement("div")}}, der die verstrichene Zeit anzeigt, wenn das Video abgespielt wird. Nur zum Spaß bieten wir zwei Meldemechanismen an — ein {{htmlelement("span")}}, das die verstrichene Zeit in Minuten und Sekunden enthält, und ein zusätzliches `<div>`, das wir verwenden, um eine horizontale Indikatorleiste zu erstellen, die mit der verstrichenen Zeit länger wird. Um eine Vorstellung davon zu bekommen, wie das fertige Produkt aussehen wird, [sehen Sie sich unsere fertige Version an](https://mdn.github.io/learning-area/javascript/apis/video-audio/finished/).

#### Das CSS erkunden

Öffnen Sie nun die CSS-Datei und schauen Sie hinein. Das CSS für das Beispiel ist nicht zu kompliziert, aber wir heben hier die interessantesten Teile hervor. Zuerst beachten Sie das `.controls`-Styling:

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

- Wir beginnen mit der {{cssxref("visibility")}} der benutzerdefinierten Steuerelemente auf `hidden`. In unserem JavaScript setzen wir später die Steuerelemente auf `visible` und entfernen das `controls`-Attribut vom `<video>`-Element. Dies erfolgt, damit Benutzer das Video weiterhin mit den nativen Steuerelementen verwenden können, falls das JavaScript aus irgendeinem Grund nicht geladen wird.
- Wir geben den Steuerelementen standardmäßig eine {{cssxref("opacity")}} von 0.5, damit sie weniger ablenkend wirken, wenn Sie das Video ansehen. Nur wenn Sie mit der Maus über den Player fahren oder ihn fokussieren, erscheinen die Steuerelemente mit voller Deckkraft.
- Wir arrangieren die Buttons in der Steuerleiste mit flexbox ({{cssxref("display")}}: flex), um es einfacher zu machen.

Schauen wir uns als Nächstes unsere Button-Symbole an:

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

Zuerst verwenden wir am Anfang des CSS einen {{cssxref("@font-face")}}-Block, um eine benutzerdefinierte Web-Schriftart zu importieren. Dies ist eine Ikonenschriftart — alle Buchstaben des Alphabets entsprechen häufig verwendeten Symbols, die Sie in einer Anwendung verwenden könnten.

Als Nächstes verwenden wir generierten Inhalt, um ein Symbol auf jedem Button anzuzeigen:

- Wir verwenden den {{cssxref("::before")}}-Selektor, um den Inhalt vor jedem {{htmlelement("button")}}-Element anzuzeigen.
- Wir verwenden die {{cssxref("content")}}-Eigenschaft, um den in jedem Fall anzuzeigenden Inhalt auf den Inhalt des [`data-icon`](/de/docs/Learn/HTML/Howto/Use_data_attributes)-Attributs zu setzen. Im Fall unseres Wiedergabebuttons enthält `data-icon` ein großes "P".
- Wir wenden die benutzerdefinierte Web-Schriftart auf unsere Buttons mit {{cssxref("font-family")}} an. In dieser Schriftart ist "P" tatsächlich ein "Play"-Symbol, daher hat der Wiedergabebutton ein "Play"-Symbol darauf.

Ikonenschriften sind aus vielen Gründen sehr cool — sie reduzieren die Anzahl der HTTP-Anfragen, da Sie diese Symbole nicht als Bilddateien herunterladen müssen, bieten eine großartige Skalierbarkeit, und Sie können Text-Eigenschaften verwenden, um sie zu stylen — wie {{cssxref("color")}} und {{cssxref("text-shadow")}}.

Zu guter Letzt schauen wir uns das CSS für den Timer an:

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

- Wir setzen das äußere `.timer`-Element auf `flex: 5`, sodass es den Großteil der Breite der Steuerleiste einnimmt. Wir geben ihm auch {{cssxref("position", "position: relative")}}, damit wir Elemente darin bequem nach seinen Grenzen und nicht nach den Grenzen des {{htmlelement("body")}}-Elements positionieren können.
- Das innere `<div>` wird so positioniert, dass es direkt auf dem äußeren `<div>` sitzt. Es hat auch eine Anfangsbreite von 0, sodass Sie es gar nicht sehen können. Wenn das Video abgespielt wird, wird die Breite des inneren `<div>`s bei fortschreitender Zeit erhöht.
- Das `<span>` ist so positioniert, dass es sich nahe der linken Seite der Timerleiste befindet.
- Wir geben unserem inneren `<div>` und `<span>` auch die richtige {{cssxref("z-index")}}, sodass der Timer oben angezeigt wird und der innere `<div>` darunter. Auf diese Weise stellen wir sicher, dass wir alle Informationen sehen können — ein Kasten verdeckt nicht den anderen.

### Implementierung des JavaScript

Wir haben bereits eine ziemlich vollständige HTML- und CSS-Schnittstelle; jetzt müssen wir nur noch alle Buttons verkabeln, damit die Steuerelemente funktionieren.

1. Erstellen Sie eine neue JavaScript-Datei auf derselben Verzeichnisebene wie Ihre index.html-Datei. Nennen Sie es `custom-player.js`.
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

   Hier erstellen wir Konstanten, um Referenzen auf alle Objekte zu erhalten, die wir manipulieren möchten. Wir haben drei Gruppen:

   - Das `<video>`-Element und die Steuerleiste.
   - Die Play/Pause, Stop, Zurückspulen und Vorspulen Buttons.
   - Das äußere Timing-Wrapper-`<div>`, die digitale Zeitanzeige-`<span>`, und das innere `<div>`, das mit der verstrichenen Zeit breiter wird.

3. Fügen Sie als nächstes Folgendes am Ende Ihres Codes ein:

   ```js
   media.removeAttribute("controls");
   controls.style.visibility = "visible";
   ```

   Diese beiden Zeilen entfernen die Standardbrowser-Steuerelemente vom Video und lassen die benutzerdefinierten Steuerelemente sichtbar werden.

#### Wiedergeben und Anhalten des Videos

Lassen Sie uns wahrscheinlich die wichtigste Steuerung implementieren — den Play/Pause-Knopf.

1. Fügen Sie zunächst das Folgende am Ende Ihres Codes hinzu, damit die `playPauseMedia()`-Funktion aufgerufen wird, wenn der Wiedergabebutton angeklickt wird:

   ```js
   play.addEventListener("click", playPauseMedia);
   ```

2. Nun zur Definition von `playPauseMedia()` — fügen Sie das Folgende, ebenfalls am Ende Ihres Codes, hinzu:

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

   Hier verwenden wir eine [`if`](/de/docs/Web/JavaScript/Reference/Statements/if...else)-Anweisung, um zu prüfen, ob das Video angehalten ist. Die [`HTMLMediaElement.paused`](/de/docs/Web/API/HTMLMediaElement/paused)-Eigenschaft gibt `true` zurück, wenn das Medium angehalten ist, was immer dann der Fall ist, wenn das Video nicht abgespielt wird, einschließlich wenn es auf 0 Dauer gesetzt ist, nachdem es zuerst geladen wurde. Wenn es angehalten ist, setzen wir den `data-icon`-Attributwert auf dem Wiedergabebutton auf "u", was ein "Pausensymbol" ist, und rufen die [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play)-Methode auf, um das Medium abzuspielen.

   Beim zweiten Klick wird der Button wieder umgeschaltet — das "Play"-Symbol wird wieder angezeigt und das Video wird mit [`HTMLMediaElement.pause()`](/de/docs/Web/API/HTMLMediaElement/pause) pausiert.

#### Anhalten des Videos

1. Als Nächstes fügen wir Funktionalität hinzu, um das Video anzuhalten. Fügen Sie die folgenden [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)-Zeilen unter den vorherigen, die Sie hinzugefügt haben, ein:

   ```js
   stop.addEventListener("click", stopMedia);
   media.addEventListener("ended", stopMedia);
   ```

   Das [`click`](/de/docs/Web/API/Element/click_event)-Ereignis ist offensichtlich — wir möchten das Video anhalten, indem wir unsere `stopMedia()`-Funktion ausführen, wenn der Stopp-Button angeklickt wird. Wir möchten das Video jedoch auch anhalten, wenn es fertig abgespielt ist — dies wird durch das [`ended`](/de/docs/Web/API/HTMLMediaElement/ended_event)-Ereignis signalisiert, also richten wir auch einen Listener ein, um die Funktion bei diesem Ereignis auszuführen.

2. Definieren wir nun `stopMedia()` — fügen Sie die folgende Funktion unterhalb von `playPauseMedia()` hinzu:

   ```js
   function stopMedia() {
     media.pause();
     media.currentTime = 0;
     play.setAttribute("data-icon", "P");
   }
   ```

   Es gibt keine `stop()`-Methode in der HTMLMediaElement API — das Äquivalent ist, das Video zu `pause()`n und seine [`currentTime`](/de/docs/Web/API/HTMLMediaElement/currentTime)-Eigenschaft auf 0 zu setzen. Wenn `currentTime` auf einen Wert (in Sekunden) gesetzt wird, springt das Medium sofort zu dieser Position.

   Alles, was danach noch zu tun ist, ist das angezeigte Symbol auf das "Play"-Symbol zu setzen. Unabhängig davon, ob das Video pausiert oder abgespielt wurde, als der Stopp-Button gedrückt wurde, möchten Sie, dass es danach bereit ist, abgespielt zu werden.

#### Vor- und Zurückspulen

Es gibt viele Möglichkeiten, die Rückspul- und Vorspul-Funktionalität zu implementieren; hier zeigen wir Ihnen eine relativ komplexe Methode, die nicht unterbrochen wird, wenn die verschiedenen Buttons in unerwarteter Reihenfolge gedrückt werden.

1. Fügen Sie zunächst die folgenden beiden [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)-Zeilen unter den vorherigen Zeilen hinzu:

   ```js
   rwd.addEventListener("click", mediaBackward);
   fwd.addEventListener("click", mediaForward);
   ```

2. Nun zu den Ereignis-Handler-Funktionen — fügen Sie den folgenden Code unter Ihren vorherigen Funktionen hinzu, um `mediaBackward()` und `mediaForward()` zu definieren:

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

   Sie werden feststellen, dass wir zuerst zwei Variablen initialisieren — `intervalFwd` und `intervalRwd` — Sie werden später erfahren, wofür sie sind.

   Lassen Sie uns `mediaBackward()` durchgehen (die Funktionalität für `mediaForward()` ist genau die gleiche, jedoch umgekehrt):

   1. Wir löschen alle Klassen und Intervalle, die auf die Vorspul-Funktionalität gesetzt wurden — dies tun wir, weil, wenn wir die `rwd`-Taste nach dem Drücken der `fwd`-Taste drücken, jede Vorspul-Funktionalität abbrechen möchten und durch die Rückspul-Funktionalität ersetzen. Wenn wir versuchen würden, beides gleichzeitig zu tun, würde der Player kaputtgehen.
   2. Wir verwenden eine `if`-Anweisung, um zu prüfen, ob die `active`-Klasse auf dem `rwd`-Button gesetzt wurde, was anzeigt, dass sie bereits gedrückt wurde. Die [`classList`](/de/docs/Web/API/Element/classList)-Eigenschaft ist eine ziemlich praktische Eigenschaft, die in jedem Element vorhanden ist — sie enthält eine Liste aller auf dem Element festgelegten Klassen sowie Methoden zum Hinzufügen/Entfernen von Klassen usw. Wir verwenden die `classList.contains()`-Methode, um zu prüfen, ob die Liste die `active`-Klasse enthält. Dies gibt ein `true`/`false`-Ergebnis zurück.
   3. Wenn `active` auf dem `rwd`-Button gesetzt wurde, entfernen wir es mit `classList.remove()`, löschen das Intervall, das festgelegt wurde, als der Button zuerst gedrückt wurde (siehe unten für mehr Erklärung), und verwenden [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play), um das Zurückspulen abzubrechen und das Video normal abzuspielen.
   4. Wenn sie noch nicht gesetzt wurde, fügen wir die `active`-Klasse zum `rwd`-Button mit `classList.add()` hinzu, pausieren das Video mit [`HTMLMediaElement.pause()`](/de/docs/Web/API/HTMLMediaElement/pause), dann setzen wir die `intervalRwd`-Variable gleich einem [`setInterval()`](/de/docs/Web/API/SetInterval)-Aufruf. Wenn `setInterval()` aufgerufen wird, wird ein aktives Intervall erstellt, das die angegebene Funktion als den ersten Parameter jede x Millisekunden ausführt, wobei x der Wert des zweiten Parameters ist. Hier führen wir die Funktion `windBackward()` alle 200 Millisekunden aus — wir verwenden diese Funktion, um das Video ständig zurückzuspulen. Um ein [`setInterval()`](/de/docs/Web/API/SetInterval) zu stoppen, muss [`clearInterval()`](/de/docs/Web/API/ClearInterval) aufgerufen werden, wobei der identifizierende Name des Intervalls, das gelöscht werden soll, in diesem Fall der Variablenname `intervalRwd` ist (siehe den `clearInterval()`-Aufruf weiter oben in der Funktion).

3. Schließlich müssen wir die Funktionen `windBackward()` und `windForward()` definieren, die in den `setInterval()`-Aufrufen aufgerufen werden. Fügen Sie das folgende unter Ihren zwei vorherigen Funktionen hinzu:

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

   Wieder werden wir nur die erste dieser Funktionen durchgehen, da sie fast identisch, jedoch in umgekehrter Richtung zu einander arbeiten. In `windBackward()` machen wir Folgendes — behalten Sie im Hinterkopf, dass wenn das Intervall aktiv ist, diese Funktion alle 200 Millisekunden ausgeführt wird.

   1. Wir beginnen mit einer `if`-Anweisung, die prüft, ob die aktuelle Zeit weniger als 3 Sekunden beträgt, d. h., wenn das Zurückspulen um weitere drei Sekunden sie über den Start des Videos hinaus zurückbringen würde. Dies würde seltsames Verhalten verursachen, daher brechen wir, wenn dies der Fall ist, das Video ab, indem wir `stopMedia()` aufrufen, die `active`-Klasse vom Rückspul-Button entfernen und das `intervalRwd` Intervall löschen, um die Rückspulfunktionalität zu stoppen. Wenn wir diesen letzten Schritt nicht machen würden, würde das Video einfach immer weiter zurückspulen.
   2. Wenn die aktuelle Zeit sich nicht innerhalb von 3 Sekunden vom Anfang des Videos befindet, ziehen wir drei Sekunden von der aktuellen Zeit ab, indem wir `media.currentTime -= 3` ausführen. Daher spulen wir das Video alle 200 Millisekunden um 3 Sekunden zurück.

#### Die verstrichene Zeit aktualisieren

Der allerletzte Teil unseres Mediaplayers, den wir implementieren müssen, ist die Anzeige der verstrichenen Zeit. Um dies zu tun, führen wir eine Funktion aus, um die Zeitanzeigen jedes Mal zu aktualisieren, wenn das [`timeupdate`](/de/docs/Web/API/HTMLMediaElement/timeupdate_event)-Ereignis auf dem `<video>`-Element gefeuert wird. Die Frequenz, mit der dieses Ereignis gefeuert wird, hängt von Ihrem Browser, Ihrer CPU-Leistung usw. ab. ([siehe diesen StackOverflow-Post](https://stackoverflow.com/questions/9678177/how-often-does-the-timeupdate-event-fire-for-an-html5-video)).

Fügen Sie die folgende `addEventListener()`-Zeile direkt unter den anderen ein:

```js
media.addEventListener("timeupdate", setTime);
```

Nun zur Definition der `setTime()`-Funktion. Fügen Sie das Folgende am unteren Ende Ihrer Datei hinzu:

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

1. Zuerst berechnen wir die Anzahl der Minuten und Sekunden im [`HTMLMediaElement.currentTime`](/de/docs/Web/API/HTMLMediaElement/currentTime)-Wert.
2. Dann initialisieren wir zwei weitere Variablen — `minuteValue` und `secondValue`. Wir verwenden {{jsxref("String/padStart", "padStart()")}}, um jeden Wert auf 2 Zeichenlänge zu bringen, auch wenn der numerische Wert nur einstellig ist.
3. Der tatsächlich anzuzeigende Zeitwert wird als `minuteValue` plus ein Doppelpunkt-Zeichen plus `secondValue` gesetzt.
4. Der [`Node.textContent`](/de/docs/Web/API/Node/textContent)-Wert des Timers wird auf den Zeitwert gesetzt, sodass er in der Benutzeroberfläche angezeigt wird.
5. Die Länge, die wir dem inneren `<div>` zuweisen sollten, wird errechnet, indem zuerst die Breite des äußeren `<div>` berechnet wird (jedes Element's [`clientWidth`](/de/docs/Web/API/Element/clientWidth)-Eigenschaft enthält seine Länge) und dann mit der [`HTMLMediaElement.currentTime`](/de/docs/Web/API/HTMLMediaElement/currentTime) durch die gesamte [`HTMLMediaElement.duration`](/de/docs/Web/API/HTMLMediaElement/duration) der Medien dividiert wird.
6. Wir setzen die Breite des inneren `<div>` gleich der berechneten Balkenlänge plus "px", sodass sie auf diese Anzahl von Pixeln gesetzt wird.

#### Fehler bei Wiedergabe und Pause beheben

Es bleibt ein Problem zu beheben. Wenn die Wiedergabe/Pause- oder Stopptasten gedrückt werden, während die Rückspul- oder Vorspul-Funktionalität aktiv ist, funktionieren sie einfach nicht. Wie können wir es beheben, sodass sie die `rwd`/`fwd`-Tastenfunktionalität abbrechen und das Video wie erwartet abspielen/anhalten? Dies lässt sich ziemlich einfach beheben.

Fügen Sie zuerst die folgenden Zeilen in die `stopMedia()`-Funktion ein — irgendwo wird es ausreichen:

```js
rwd.classList.remove("active");
fwd.classList.remove("active");
clearInterval(intervalRwd);
clearInterval(intervalFwd);
```

Fügen Sie jetzt die gleichen Zeilen erneut am Anfang der `playPauseMedia()`-Funktion hinzu (noch vor der `if`-Anweisung).

An diesem Punkt könnten Sie die entsprechenden Zeilen aus den `windBackward()` und `windForward()`-Funktionen löschen, da diese Funktionalität stattdessen in der `stopMedia()`-Funktion implementiert wurde.

Hinweis: Sie könnten die Effizienz des Codes auch weiter verbessern, indem Sie eine separate Funktion erstellen, die diese Zeilen ausführt, und diese dann überall dort aufrufen, wo sie benötigt werden, anstatt die Zeilen mehrfach im Code zu wiederholen. Aber das überlassen wir Ihnen.

## Zusammenfassung

Ich denke, wir haben Ihnen in diesem Artikel genug beigebracht. Die [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) API bietet eine Fülle von Funktionen zur Erstellung einfacher Video- und Audioplayer, und das ist nur die Spitze des Eisbergs. Siehe den Abschnitt "Siehe auch" unten für Links zu komplexeren und interessanteren Funktionen.

Hier sind einige Vorschläge, wie Sie das vorhandene Beispiel, das wir aufgebaut haben, verbessern könnten:

1. Die Zeitanzeige bricht derzeit, wenn das Video eine Stunde oder länger ist (nun, es werden keine Stunden angezeigt; nur Minuten und Sekunden). Können Sie sich ausdenken, wie man das Beispiel ändern kann, damit es Stunden anzeigt?
2. Da `<audio>`-Elemente dieselbe [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-Funktionalität zur Verfügung haben, könnten Sie diesen Player leicht so umstellen, dass er auch mit einem `<audio>`-Element funktioniert. Versuchen Sie, dies zu tun.
3. Können Sie einen Weg finden, das Timer-Innere `<div>`-Element zu einer echten Suchleiste/Skroller zu machen — d. h., wenn Sie an einer Stelle auf die Leiste klicken, springt es in die relative Position der Videowiedergabe? Als Hinweis: Sie können die X- und Y-Werte der linken/rechten und oberen/unteren Seiten eines Elements über die [`getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect)-Methode herausfinden, und Sie können die Koordinaten eines Mausklicks über das Ereignisobjekt des Klickereignis herausfinden, das auf das [`Document`](/de/docs/Web/API/Document)-Objekt aufgerufen wird. Zum Beispiel:

   ```js
   document.onclick = function (e) {
     console.log(e.x, e.y);
   };
   ```

## Siehe auch

- [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)
- [Video- und Audioinhalte](/de/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content) — einfacher Leitfaden für `<video>` und `<audio>` HTML.
- [Audio- und Videoübertragung](/de/docs/Web/Media/Audio_and_video_delivery) — ausführlicher Leitfaden zur Bereitstellung von Mediendateien im Browser, mit vielen Tipps, Tricks und Links zu weiteren fortgeschrittenen Tutorials.
- [Manipulation von Audio und Video](/de/docs/Web/Media/Audio_and_video_manipulation) — ausführlicher Leitfaden zur Manipulation von Audio und Video, z. B. mit [Canvas API](/de/docs/Web/API/Canvas_API), [Web Audio API](/de/docs/Web/API/Web_Audio_API), und mehr.
- {{htmlelement("video")}} und {{htmlelement("audio")}} Referenzseiten.
- [Leitfaden zu Medientypen und Formaten im Web](/de/docs/Web/Media/Formats)

{{PreviousMenuNext("Learn/JavaScript/Client-side_web_APIs/Drawing_graphics", "Learn/JavaScript/Client-side_web_APIs/Client-side_storage", "Learn/JavaScript/Client-side_web_APIs")}}
