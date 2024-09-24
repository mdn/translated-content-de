---
title: Video- und Audio-APIs
slug: Learn/JavaScript/Client-side_web_APIs/Video_and_audio_APIs
l10n:
  sourceCommit: b795bc99fc5c5d8a96c1b202a12750404085c28a
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Client-side_web_APIs/Drawing_graphics", "Learn/JavaScript/Client-side_web_APIs/Client-side_storage", "Learn/JavaScript/Client-side_web_APIs")}}

HTML enthält Elemente zum Einbetten von Rich-Media in Dokumente — `<video>` und `<audio>` — die wiederum über eigene APIs zur Steuerung der Wiedergabe, des Suchens usw. verfügen. Dieser Artikel zeigt Ihnen, wie Sie häufige Aufgaben wie das Erstellen eigener Wiedergabesteuerungen durchführen können.

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
          >Grundlagen von Client-seitigen APIs</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen, wie Browser-APIs zur Steuerung der Video- und Audiowiedergabe verwendet werden.
      </td>
    </tr>
  </tbody>
</table>

## HTML-Video und -Audio

Die `<video>` und `<audio>` Elemente erlauben es uns, Video und Audio in Webseiten einzubetten. Wie in [Video- und Audioinhalte](/de/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content) gezeigt, sieht eine typische Implementierung so aus:

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

Sie können die Funktionalität aller HTML-Features im oben verlinkten Artikel nachlesen; für uns ist das interessanteste Attribut [`controls`](/de/docs/Web/HTML/Element/video#controls), das den Standardsatz von Wiedergabesteuerungen aktiviert. Wenn Sie dies nicht angeben, erhalten Sie keine Wiedergabesteuerungen:

{{EmbedGHLiveSample("learning-area/html/multimedia-and-embedding/video-and-audio-content/multiple-video-formats-no-controls.html", '100%', 380)}}

Dies ist nicht sofort für die Videowiedergabe nützlich, hat aber Vorteile. Ein großes Problem bei den nativen Browser-Steuerungen ist, dass sie in jedem Browser unterschiedlich sind — nicht sehr gut für plattformübergreifende Unterstützung! Ein weiteres großes Problem ist, dass die nativen Steuerungen in den meisten Browsern nicht sehr tastaturzugänglich sind.

Diese Probleme können Sie lösen, indem Sie die nativen Steuerungen ausblenden (indem Sie das `controls`-Attribut entfernen) und Ihre eigenen mit HTML, CSS und JavaScript programmieren. Im nächsten Abschnitt sehen wir uns die grundlegenden Werkzeuge an, die dafür zur Verfügung stehen.

## Die HTMLMediaElement API

Teil der HTML-Spezifikation, die [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) API bietet Funktionen, mit denen Sie Video- und Audioplayer programmatisch steuern können — zum Beispiel [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play), [`HTMLMediaElement.pause()`](/de/docs/Web/API/HTMLMediaElement/pause) usw. Diese Schnittstelle ist sowohl für `<audio>` als auch `<video>` Elemente verfügbar, da die Funktionen, die Sie implementieren möchten, nahezu identisch sind. Lassen Sie uns ein Beispiel durchgehen und nach und nach Funktionen hinzufügen.

Unser fertiges Beispiel sieht ungefähr wie folgt aus:

{{EmbedGHLiveSample("learning-area/javascript/apis/video-audio/finished/", '100%', 360)}}

### Erste Schritte

Um mit diesem Beispiel zu beginnen, [laden Sie unsere media-player-start.zip herunter](https://github.com/mdn/learning-area/blob/main/javascript/apis/video-audio/start/media-player-start.zip) und entpacken Sie es in ein neues Verzeichnis auf Ihrer Festplatte. Wenn Sie [unser Repo mit Beispielen heruntergeladen haben](https://github.com/mdn/learning-area), finden Sie es unter `javascript/apis/video-audio/start/`.

Zu diesem Zeitpunkt sollten Sie, wenn Sie das HTML laden, einen ganz normalen HTML-Videoplayer mit den nativen Steuerungen sehen.

#### Erkundung des HTML

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

- Der gesamte Player ist in ein `<div>`-Element eingeschlossen, damit er bei Bedarf als eine Einheit gestylt werden kann.
- Das `<video>`-Element enthält zwei `<source>`-Elemente, sodass je nach dem Browser, der die Seite betrachtet, unterschiedliche Formate geladen werden können.
- Das HTML der Steuerungen ist wahrscheinlich das interessanteste:

  - Wir haben vier `<button>`s — abspielen/pausieren, stoppen, zurückspulen und vorspulen.
  - Jedes `<button>` hat einen `class`-Namen, ein `data-icon` Attribut zur Definition, welches Symbol auf jedem Button gezeigt werden soll (wir werden zeigen, wie dies im Abschnitt unten funktioniert), und ein `aria-label` Attribut, um eine verständliche Beschreibung für jede Schaltfläche bereitzustellen, da wir innerhalb der Tags keine menschenlesbaren Beschriftungen bereitstellen. Die Inhalte der `aria-label` Attribute werden von Screenreadern gelesen, wenn deren Benutzer die Elemente fokussieren, die sie enthalten.
  - Es gibt auch einen Timer `<div>`, der die verstrichene Zeit anzeigt, während das Video abgespielt wird. Nur zum Spaß bieten wir zwei Berichtmechanismen an — ein `<span>` mit der verstrichenen Zeit in Minuten und Sekunden, und ein zusätzliches `<div>`, das wir verwenden werden, um eine horizontale Anzeigeleiste zu erstellen, die länger wird, wenn die Zeit verstreicht. Um eine Vorstellung davon zu bekommen, wie das fertige Produkt aussehen wird, [sehen Sie sich unsere fertige Version an](https://mdn.github.io/learning-area/javascript/apis/video-audio/finished/).

#### Erkundung des CSS

Öffnen Sie jetzt die CSS-Datei und schauen Sie hinein. Das CSS für das Beispiel ist nicht allzu kompliziert, aber wir werden hier die interessantesten Teile hervorheben. Zunächst einmal beachten Sie das `.controls` Styling:

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

- Wir beginnen mit der Sichtbarkeit (`visibility`) der benutzerdefinierten Steuerelemente, die auf `hidden` gesetzt ist. In unserem späteren JavaScript werden wir die Steuerungen auf `visible` setzen und das `controls`-Attribut vom `<video>`-Element entfernen. Dies geschieht, damit Benutzer, falls das JavaScript aus irgendeinem Grund nicht geladen wird, das Video weiterhin mit den nativen Steuerungen verwenden können.
- Wir geben den Steuerungen eine Opazität (`opacity`) von 0.5 standardmäßig, damit sie weniger ablenkend wirken, wenn Sie versuchen, das Video anzusehen. Erst wenn Sie mit der Maus über den Player fahren oder fokussieren, erscheinen die Steuerungen in voller Deckkraft.
- Wir legen die Schaltflächen innerhalb der Steuerleiste mit Flexbox ({{cssxref("display")}}: flex) an, um die Dinge zu erleichtern.

Als nächstes schauen wir uns unsere Button-Symbole an:

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

Zuerst verwenden wir am Anfang des CSS einen {{cssxref("@font-face")}} Block, um eine benutzerdefinierte Web-Schriftart zu importieren. Dies ist eine Symbolschriftart — alle Buchstaben des Alphabets entsprechen häufig verwendeten Symbolen, die Sie in einer Anwendung verwenden möchten.

Als nächstes verwenden wir generierten Inhalt, um ein Symbol auf jeder Schaltfläche anzuzeigen:

- Wir verwenden den {{cssxref("::before")}} Selektor, um den Inhalt vor jedem `<button>` Element anzuzeigen.
- Wir verwenden die Eigenschaft {{cssxref("content")}}, um den Inhalt, der in jedem Fall angezeigt werden soll, auf den Inhalt des [`data-icon`](/de/docs/Learn/HTML/Howto/Use_data_attributes) Attributs zu setzen. Im Fall unserer Abspieltaste enthält `data-icon` ein großes "P".
- Wir wenden die benutzerdefinierte Web-Schriftart auf unsere Buttons mit {{cssxref("font-family")}} an. In dieser Schriftart ist "P" tatsächlich ein "Abspielen"-Symbol, daher hat die Abspieltaste ein "Abspielen"-Symbol darauf.

Symbolschriftarten sind aus vielen Gründen sehr cool — sie reduzieren HTTP-Anfragen, da Sie diese Symbole nicht als Bilddateien herunterladen müssen, sie sind sehr gut skalierbar und Sie können Texteigenschaften verwenden, um sie zu stylen — wie {{cssxref("color")}} und {{cssxref("text-shadow")}}.

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

- Wir setzen das äußere `.timer` Element auf `flex: 5`, sodass es den größten Teil der Breite der Steuerleiste ein nimmt. Wir geben ihm auch {{cssxref("position", "position: relative")}}, sodass wir die Elemente innen bequem relativ zu seinen Grenzen und nicht zu den Grenzen des `<body>` Elements positionieren können.
- Das innere `<div>` ist so positioniert, dass es direkt über dem äußeren `<div>` liegt. Es wird auch auf eine Anfangsbreite von 0 gesetzt, sodass Sie es überhaupt nicht sehen können. Während das Video abgespielt wird, wird die Breite mithilfe von JavaScript erhöht, wenn die Zeit abläuft.
- Das `<span>` wird ebenfalls so positioniert, dass es nah an der linken Seite der Timer-Leiste liegt.
- Wir geben unserem inneren `<div>` und `<span>` auch den richtigen Wert für {{cssxref("z-index")}}, damit der Timer oben angezeigt wird und das innere `<div>` darunter. Auf diese Weise stellen wir sicher, dass wir alle Informationen sehen können — eine Box überdeckt keine andere.

### Implementierung des JavaScript

Wir haben bereits eine ziemlich vollständige HTML- und CSS-Schnittstelle; jetzt müssen wir nur noch alle Schaltflächen verknüpfen, um die Steuerungen zum Laufen zu bringen.

1. Erstellen Sie eine neue JavaScript-Datei im gleichen Verzeichnisebene wie Ihre index.html Datei. Nennen Sie sie `custom-player.js`.
2. Setzen Sie oben in dieser Datei den folgenden Code ein:

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

   - Das `<video>` Element und die Steuerleiste.
   - Die Abspiel-/Pause-, Stop-, Rückspul- und Vorspultasten.
   - Die äußere Timer-Verpackung `<div>`, das digitale Timer-Display `<span>` und das innere `<div>`, das breiter wird, wenn die Zeit abläuft.

3. Fügen Sie als Nächstes das Folgende unten in Ihren Code ein:

   ```js
   media.removeAttribute("controls");
   controls.style.visibility = "visible";
   ```

   Diese beiden Codezeilen entfernen die standardmäßigen Browsersteuerungen aus dem Video und machen die benutzerdefinierten Steuerelemente sichtbar.

#### Abspielen und Pausieren des Videos

Implementieren wir wahrscheinlich die wichtigste Steuerung — die Abspieltaste/Pause.

1. Fügen Sie zunächst das Folgende am Ende Ihres Codes hinzu, sodass die Funktion `playPauseMedia()` aufgerufen wird, wenn die Abspieltaste geklickt wird:

   ```js
   play.addEventListener("click", playPauseMedia);
   ```

2. Nun zur Definition von `playPauseMedia()` — fügen Sie das folgende, erneut am Ende Ihres Codes hinzu:

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

   Hier verwenden wir eine [`if`](/de/docs/Web/JavaScript/Reference/Statements/if...else) Anweisung, um zu überprüfen, ob das Video pausiert ist. Die Eigenschaft [`HTMLMediaElement.paused`](/de/docs/Web/API/HTMLMediaElement/paused) gibt `true` zurück, wenn das Medium pausiert ist, was jedes Mal der Fall ist, wenn das Video nicht abgespielt wird, einschließlich wenn es auf 0 Sekunden eingestellt ist, nachdem es zuerst geladen hat. Wenn es pausiert ist, setzen wir den `data-icon` Attributwert auf der `play`-Schaltfläche auf "u", was ein "pausiert"-Symbol ist, und rufen die Methode [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play) auf, um das Medium abzuspielen.

   Beim zweiten Klick wird die Taste wieder zurückgeschaltet — das "Abspielen"-Symbol wird erneut angezeigt und das Video mit [`HTMLMediaElement.pause()`](/de/docs/Web/API/HTMLMediaElement/pause) pausiert.

#### Anhalten des Videos

1. Als Nächstes fügen wir Funktionalität hinzu, um das Anhalten des Videos zu steuern. Fügen Sie die folgenden [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) Codezeilen unterhalb der vorherigen hinzu:

   ```js
   stop.addEventListener("click", stopMedia);
   media.addEventListener("ended", stopMedia);
   ```

   Das [`click`](/de/docs/Web/API/Element/click_event) Ereignis ist offensichtlich — wir möchten das Video stoppen, indem wir unsere `stopMedia()`-Funktion ausführen, wenn auf den Stopp-Button geklickt wird. Wir möchten das Video jedoch auch stoppen, wenn es zu Ende gespielt ist — dies wird durch das [`ended`](/de/docs/Web/API/HTMLMediaElement/ended_event) Ereignis gekennzeichnet. Deshalb setzen wir auch einen Listener ein, um die Funktion bei diesem Event auszuführen.

2. Als nächstes definieren wir `stopMedia()` — fügen Sie die folgende Funktion unter `playPauseMedia()` hinzu:

   ```js
   function stopMedia() {
     media.pause();
     media.currentTime = 0;
     play.setAttribute("data-icon", "P");
   }
   ```

   Es gibt keine `stop()` Methode in der HTMLMediaElement API — das Äquivalent dazu ist, das Video zu `pause()` und seine [`currentTime`](/de/docs/Web/API/HTMLMediaElement/currentTime) Eigenschaft auf 0 zu setzen. Das Setzen von `currentTime` auf einen Wert (in Sekunden) springt das Medium sofort zu dieser Position.

   Alles, was dann noch zu tun bleibt, ist, das angezeigte Symbol auf das "Abspielen"-Symbol zu setzen. Unabhängig davon, ob das Video pausiert oder abgespielt wurde, als die Stopptaste gedrückt wurde, möchten Sie, dass es danach bereit zum Abspielen ist.

#### Rückspulen und Vorspulen

Es gibt viele Möglichkeiten, wie Sie die Rückspul- und Vorspulfunktion implementieren können; hier zeigen wir Ihnen eine relativ komplexe Art und Weise, die nicht bricht, wenn die verschiedenen Tasten in unerwarteter Reihenfolge gedrückt werden.

1. Fügen Sie zunächst die folgenden zwei [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) Zeilen unter den vorherigen hinzu:

   ```js
   rwd.addEventListener("click", mediaBackward);
   fwd.addEventListener("click", mediaForward);
   ```

2. Nun zu den Ereignishandler Funktionen — fügen Sie den folgenden Code unter Ihre vorherigen Funktionen ein, um `mediaBackward()` und `mediaForward()` zu definieren:

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

   Sie werden bemerken, dass wir zunächst zwei Variablen initialisieren — `intervalFwd` und `intervalRwd` — Sie werden später erfahren, wofür sie da sind.

   Lassen Sie uns durch `mediaBackward()` gehen (die Funktionalität für `mediaForward()` ist exakt gleich, nur umgekehrt):

   1. Wir löschen alle Klassen und Intervalle, die auf die Vorspulfunktionalität gesetzt sind — das machen wir, weil wir, wenn wir die `rwd` Taste nach der `fwd` Taste drücken, alle Vorspulfunktionalitäten abbrechen und durch die Rückspulfunktionalitäten ersetzen möchten. Würden wir versuchen, beides gleichzeitig zu tun, würde der Player brechen.
   2. Wir verwenden eine `if` Anweisung, um zu überprüfen, ob die `active` Klasse auf der `rwd` Taste gesetzt wurde, was darauf hindeutet, dass sie bereits gedrückt wurde. Die [`classList`](/de/docs/Web/API/Element/classList) ist eine sehr praktische Eigenschaft, die auf jedem Element existiert — sie enthält eine Liste aller auf dem Element gesetzten Klassen sowie Methoden zum Hinzufügen/Entfernen von Klassen usw. Wir verwenden die Methode `classList.contains()`, um zu überprüfen, ob die Liste die `active` Klasse enthält. Das ergibt ein `true`/`false` Ergebnis.
   3. Wenn `active` auf der `rwd` Taste gesetzt wurde, entfernen wir es mit `classList.remove()`, löschen das Intervall, das gesetzt wurde, als die Taste zum ersten Mal gedrückt wurde (siehe unten für mehr Erklärung), und verwenden [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play), um das Zurückspulen abzubrechen und das Video normal abzuspielen.
   4. Wenn es noch nicht gesetzt wurde, fügen wir die `active` Klasse der `rwd` Taste mit `classList.add()` hinzu, pausieren das Video mit [`HTMLMediaElement.pause()`](/de/docs/Web/API/HTMLMediaElement/pause), und setzen dann die Variable `intervalRwd` auf einen Aufruf von [`setInterval()`](/de/docs/Web/API/Window/setInterval). Wenn aufgerufen, erstellt `setInterval()` ein aktives Intervall, was bedeutet, dass es die Funktion, die als erster Parameter gegeben wird, alle x Millisekunden ausführt, wobei x der Wert des zweiten Parameters ist. Also führen wir die Funktion `windBackward()` alle 200 Millisekunden aus — wir verwenden diese Funktion, um das Video ständig zurückzuspulen. Um [`setInterval()`](/de/docs/Web/API/Window/setInterval) zu stoppen, müssen Sie [`clearInterval()`](/de/docs/Web/API/Window/clearInterval) aufrufen, dem der identifizierende Name des zu löschenden Intervalls übergeben wird, der in diesem Fall der Variablenname `intervalRwd` ist (siehe den `clearInterval()` Aufruf zu Beginn der Funktion).

3. Schließlich müssen wir die Funktionen `windBackward()` und `windForward()` definieren, die in den `setInterval()` Aufrufen aufgerufen werden. Fügen Sie das folgende unter Ihre beiden vorherigen Funktionen ein:

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

   Wir werden nur die erste dieser Funktionen durchgehen, da sie nahezu identisch, aber in umgekehrter Reihenfolge zueinander funktionieren. In `windBackward()` tun wir folgendes — beachten Sie, dass diese Funktion, wenn das Intervall aktiv ist, einmal alle 200 Millisekunden ausgeführt wird.

   1. Wir beginnen mit einer `if` Anweisung, die prüft, ob die aktuelle Zeit weniger als 3 Sekunden beträgt, d. h., wenn ein weiteres Zurückspulen um drei Sekunden es vor den Beginn des Videos gehen würde. Das würde seltsames Verhalten verursachen, also stoppen wir, wenn das der Fall ist, die Wiedergabe des Videos, indem wir `stopMedia()` aufrufen, entfernen die `active` Klasse von der Rückspultaste und löschen das `intervalRwd` Intervall, um die Rückspulfunktionalität zu stoppen. Wenn wir diesen letzten Schritt nicht gemacht hätten, würde das Video einfach unendlich weiter zurückspulen.
   2. Wenn die aktuelle Zeit nicht innerhalb von 3 Sekunden vom Start ist, entfernen wir drei Sekunden von der aktuellen Zeit, indem wir `media.currentTime -= 3` ausführen. In der Praxis spulen wir das Video jede 200 Millisekunden um 3 Sekunden zurück.

#### Aktualisierung der verstrichenen Zeit

Das letzte Stück unseres Media-Players, das zu implementieren ist, sind die Zeitablauf-Anzeigen. Zu diesem Zweck führen wir eine Funktion aus, um die Zeitanzeigen jedes Mal zu aktualisieren, wenn das [`timeupdate`](/de/docs/Web/API/HTMLMediaElement/timeupdate_event) Ereignis auf dem `<video>` Element ausgelöst wird. Die Frequenz, mit der dieses Ereignis ausgelöst wird, hängt vom Browser, der CPU-Leistung usw. ab. ([siehe diesen StackOverflow-Post](https://stackoverflow.com/questions/9678177/how-often-does-the-timeupdate-event-fire-for-an-html5-video)).

Fügen Sie die folgende `addEventListener()` Zeile direkt unter die anderen ein:

```js
media.addEventListener("timeupdate", setTime);
```

Nun zur Definition der `setTime()` Funktion. Fügen Sie das folgende am Ende Ihrer Datei ein:

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

Das ist eine ziemlich lange Funktion, also gehen wir sie Schritt für Schritt durch:

1. Zunächst ermitteln wir die Anzahl der Minuten und Sekunden im [`HTMLMediaElement.currentTime`](/de/docs/Web/API/HTMLMediaElement/currentTime)-Wert.
2. Dann initialisieren wir zwei weitere Variablen — `minuteValue` und `secondValue`. Wir verwenden {{jsxref("String/padStart", "padStart()")}}, um jeden Wert auf 2 Zeichen zu bringen, auch wenn der numerische Wert nur ein einzelnes Zeichen hat.
3. Der tatsächlich anzuzeigende Zeitwert wird als `minuteValue` plus ein Doppelpunktzeichen plus `secondValue` festgelegt.
4. Der [`Node.textContent`](/de/docs/Web/API/Node/textContent) Wert des Timers wird auf den Zeitwert gesetzt, damit er in der UI angezeigt wird.
5. Die Länge, auf die wir das innere `<div>` setzen sollten, wird ermittelt, indem zuerst die Breite des äußeren `<div>` ermittelt wird (die [`clientWidth`](/de/docs/Web/API/Element/clientWidth) Eigenschaft eines Elements enthält ihre Länge), und dann multipliziert wird mit dem Verhältnis von [`HTMLMediaElement.currentTime`](/de/docs/Web/API/HTMLMediaElement/currentTime) zu der gesamten [`HTMLMediaElement.duration`](/de/docs/Web/API/HTMLMediaElement/duration) des Mediums.
6. Wir setzen die Breite des inneren `<div>` gleich der berechneten Balkenlänge plus "px", sodass es auf diese Anzahl von Pixeln gesetzt wird.

#### Behebung von Abspielen und Pausieren

Es bleibt ein Problem zu beheben. Wenn die Abspiel-/Pause- oder Stopptasten gedrückt werden, während die Rückspul- oder Vorspulfunktionalität aktiv ist, funktionieren sie einfach nicht. Wie können wir es beheben, damit sie die `rwd`/`fwd`-Button-Funktionalitäten abbrechen und das Video so abspielen/stoppen, wie Sie es erwarten würden? Dies ist relativ einfach zu beheben.

Fügen Sie zunächst die folgenden Zeilen in die Funktion `stopMedia()` ein — es spielt keine Rolle, wo:

```js
rwd.classList.remove("active");
fwd.classList.remove("active");
clearInterval(intervalRwd);
clearInterval(intervalFwd);
```

Fügen Sie nun dieselben Zeilen noch einmal ganz am Anfang der Funktion `playPauseMedia()` hinzu (direkt vor dem Beginn der `if`-Anweisung).

An diesem Punkt könnten Sie die entsprechenden Zeilen in den Funktionen `windBackward()` und `windForward()` löschen, da diese Funktionalität in der `stopMedia()`-Funktion implementiert wurde.

Hinweis: Sie könnten die Effizienz des Codes weiter verbessern, indem Sie eine separate Funktion erstellen, die diese Zeilen ausführt, und diese dann überall aufrufen, wo sie benötigt wird, anstatt die Zeilen mehrmals im Code zu wiederholen. Aber das überlassen wir Ihnen.

## Zusammenfassung

Ich denke, wir haben Ihnen in diesem Artikel genug beigebracht. Die [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-API macht eine Fülle von Funktionen verfügbar, um einfache Video- und Audioplayer zu erstellen, und das ist nur die Spitze des Eisbergs. Siehe den Abschnitt "Siehe auch" unten für Links zu komplexeren und interessanteren Funktionen.

Hier sind einige Vorschläge, wie Sie das bestehende Beispiel, das wir aufgebaut haben, verbessern könnten:

1. Die Zeitanzeige bricht momentan zusammen, wenn das Video eine Stunde oder länger ist (nun, es zeigt keine Stunden an; nur Minuten und Sekunden). Können Sie herausfinden, wie Sie das Beispiel ändern können, um Stunden anzuzeigen?
2. Da `<audio>` Elemente dieselbe [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-Funktionalität zur Verfügung haben, könnten Sie diesen Player problemlos so gestalten, dass er auch für ein `<audio>`-Element funktioniert. Versuchen Sie, dies zu erreichen.
3. Können Sie einen Weg ausarbeiten, um das innere `<div>`-Element des Timers in eine echte Suchleiste/-Scroller zu verwandeln — d. h. wenn Sie irgendwo auf die Leiste klicken, springt es zu dieser relativen Position in der Videowiedergabe? Als Hinweis, Sie können die X- und Y-Werte der linken/rechten und oberen/unteren Seiten des Elements über die Methode [`getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect) abrufen und Sie können die Koordinaten eines Mausklicks über das Event-Objekt des Klickereignisses auf dem [`Document`](/de/docs/Web/API/Document)-Objekt finden. Zum Beispiel:

   ```js
   document.onclick = function (e) {
     console.log(e.x, e.y);
   };
   ```

## Siehe auch

- [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)
- [Video- und Audioinhalte](/de/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content) — einfacher Leitfaden zu `<video>` und `<audio>` HTML.
- [Audio- und Video-Übertragung](/de/docs/Web/Media/Audio_and_video_delivery) — detaillierter Leitfaden zur Bereitstellung von Medien im Browser mit vielen Tipps, Tricks und Links zu weiterführenden Tutorials.
- [Audio- und Video-Manipulation](/de/docs/Web/Media/Audio_and_video_manipulation) — detaillierter Leitfaden zur Manipulation von Audio und Video, z. B. mit [Canvas API](/de/docs/Web/API/Canvas_API), [Web Audio API](/de/docs/Web/API/Web_Audio_API) und mehr.
- `<video>` und `<audio>` Referenzseiten.
- [Leitfaden zu Medientypen und Formaten im Web](/de/docs/Web/Media/Formats)

{{PreviousMenuNext("Learn/JavaScript/Client-side_web_APIs/Drawing_graphics", "Learn/JavaScript/Client-side_web_APIs/Client-side_storage", "Learn/JavaScript/Client-side_web_APIs")}}
