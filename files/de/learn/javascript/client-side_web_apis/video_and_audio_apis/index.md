---
title: Video- und Audio-APIs
slug: Learn/JavaScript/Client-side_web_APIs/Video_and_audio_APIs
l10n:
  sourceCommit: 75326725db2daa924618e58ae31a43345c7a16dc
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Client-side_web_APIs/Drawing_graphics", "Learn/JavaScript/Client-side_web_APIs/Client-side_storage", "Learn/JavaScript/Client-side_web_APIs")}}

HTML enthält Elemente zum Einbetten von Rich Media in Dokumente — {{htmlelement("video")}} und {{htmlelement("audio")}} — die wiederum ihre eigenen APIs zum Steuern der Wiedergabe, Suchvorgänge usw. besitzen. Dieser Artikel zeigt Ihnen, wie Sie gängige Aufgaben wie das Erstellen benutzerdefinierter Wiedergabesteuerungen durchführen können.

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
        Erlernen, wie man Browser-APIs zur Steuerung der Video- und Audiowiedergabe verwendet.
      </td>
    </tr>
  </tbody>
</table>

## HTML-Video und -Audio

Die {{htmlelement("video")}}- und {{htmlelement("audio")}}-Elemente ermöglichen es uns, Videos und Audios in Webpages einzubetten. Wie in [Video- und Audiocontent](/de/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content) gezeigt, sieht eine typische Implementierung folgendermaßen aus:

```html
<video controls>
  <source src="rabbit320.mp4" type="video/mp4" />
  <source src="rabbit320.webm" type="video/webm" />
  <p>
    Ihr Browser unterstützt kein HTML-Video. Hier ist stattdessen ein
    <a href="rabbit320.mp4">Link zum Video</a>.
  </p>
</video>
```

Dies erzeugt einen Videoplayer im Browser, der folgendermaßen aussieht:

{{EmbedGHLiveSample("learning-area/html/multimedia-and-embedding/video-and-audio-content/multiple-video-formats.html", '100%', 380)}}

Sie können im oben verlinkten Artikel nachlesen, was alle HTML-Funktionen bewirken; für unsere Zwecke hier ist das interessanteste Attribut [`controls`](/de/docs/Web/HTML/Element/video#controls), welches das Standardset von Wiedergabesteuerungen aktiviert. Wenn Sie dies nicht angeben, erhalten Sie keine Wiedergabesteuerungen:

{{EmbedGHLiveSample("learning-area/html/multimedia-and-embedding/video-and-audio-content/multiple-video-formats-no-controls.html", '100%', 380)}}

Das ist für die Videowiedergabe nicht sofort nützlich, hat aber Vorteile. Ein großes Problem mit den nativen Browsersteuerungen ist, dass sie in jedem Browser unterschiedlich sind — nicht sehr gut für die plattformübergreifende Unterstützung! Ein weiteres großes Problem ist, dass die nativen Steuerungen in den meisten Browsern nicht sehr tastaturzugänglich sind.

Sie können beide Probleme lösen, indem Sie die nativen Steuerungen verbergen (durch Entfernen des `controls`-Attributs) und Ihre eigenen mit HTML, CSS und JavaScript programmieren. Im nächsten Abschnitt sehen wir uns die grundlegenden Werkzeuge an, die uns dabei zur Verfügung stehen.

## Die HTMLMediaElement-API

Als Teil der HTML-Spezifikation bietet die {{domxref("HTMLMediaElement")}}-API Funktionen, mit denen Sie Video- und Audioplayer programmatisch steuern können — beispielsweise {{domxref("HTMLMediaElement.play()")}}, {{domxref("HTMLMediaElement.pause()")}} usw. Diese Schnittstelle steht sowohl für {{htmlelement("audio")}}- als auch für {{htmlelement("video")}}-Elemente zur Verfügung, da die Funktionen, die Sie implementieren möchten, nahezu identisch sind. Lassen Sie uns ein Beispiel durchgehen und dabei Funktionen hinzufügen.

Unser fertiges Beispiel wird in etwa wie folgendes aussehen (und funktionieren):

{{EmbedGHLiveSample("learning-area/javascript/apis/video-audio/finished/", '100%', 360)}}

### Loslegen

Um mit diesem Beispiel zu beginnen, [laden Sie unser media-player-start.zip herunter](https://github.com/mdn/learning-area/blob/main/javascript/apis/video-audio/start/media-player-start.zip) und entpacken Sie es in ein neues Verzeichnis auf Ihrer Festplatte. Wenn Sie [unser Beispiels-Repository heruntergeladen haben](https://github.com/mdn/learning-area), finden Sie es unter `javascript/apis/video-audio/start/`.

Zu diesem Zeitpunkt sollten Sie, wenn Sie das HTML laden, einen ganz normalen HTML-Videoplayer sehen, bei dem die nativen Steuerelemente gerendert werden.

#### Erkundung des HTML

Öffnen Sie die HTML-Indexdatei. Sie werden eine Reihe von Features sehen; das HTML wird vom Videoplayer und seinen Steuerungen dominiert:

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

- Der gesamte Player ist in ein {{htmlelement("div")}}-Element eingewickelt, sodass er bei Bedarf als Einheit gestylt werden kann.
- Das {{htmlelement("video")}}-Element enthält zwei {{htmlelement("source")}}-Elemente, sodass unterschiedliche Formate geladen werden können, je nach Browser, der die Seite anzeigt.
- Das HTML der Steuerungen ist wahrscheinlich das interessanteste:

  - Wir haben vier {{htmlelement("button")}}s — Wiedergabe/Pause, Stopp, Zurückspulen und Vorspulen.
  - Jedes `<button>` hat einen `class`-Namen, ein `data-icon`-Attribut zur Definition, welches Icon auf jedem Button angezeigt werden soll (wir zeigen, wie dies im folgenden Abschnitt funktioniert), und ein `aria-label`-Attribut, um eine verständliche Beschreibung jedes Buttons bereitzustellen, da wir innerhalb der Tags keinen menschenlesbaren Text bereitstellen. Der Inhalt der `aria-label`-Attribute wird von Screenreadern vorgelesen, wenn deren Benutzer sich auf den Elementen fokussieren, die diese enthalten.
  - Es gibt auch einen Timer {{htmlelement("div")}}, der die verstrichene Zeit anzeigt, wenn das Video abgespielt wird. Nur zum Spaß bieten wir zwei Meldeverfahren an — einen {{htmlelement("span")}}, der die verstrichene Zeit in Minuten und Sekunden anzeigt, und einen zusätzlichen `<div>`, den wir verwenden, um eine horizontale Anzeigeleiste zu erstellen, die länger wird, je mehr Zeit vergeht. Um eine Vorstellung davon zu bekommen, wie das fertige Produkt aussehen wird, [sehen Sie sich unsere fertige Version an](https://mdn.github.io/learning-area/javascript/apis/video-audio/finished/).

#### Erkundung der CSS

Öffnen Sie nun die CSS-Datei und schauen Sie hinein. Das CSS für das Beispiel ist nicht zu kompliziert, aber hier heben wir die interessantesten Teile hervor. Zuerst einmal beachten Sie das Styling der `.controls`:

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

- Wir beginnen mit der {{cssxref("visibility")}} der benutzerdefinierten Steuerungen, die auf `hidden` gesetzt ist. In unserem JavaScript werden wir die Steuerungen auf `visible` setzen und das `controls`-Attribut des `<video>`-Elements entfernen. Dies dient dazu, dass, wenn das JavaScript aus irgendeinem Grund nicht geladen wird, Benutzer das Video trotzdem mit den nativen Steuerelementen verwenden können.
- Wir geben den Steuerungen eine Standard-{{cssxref("opacity")}} von 0.5, damit sie weniger ablenkend sind, wenn Sie versuchen, das Video anzusehen. Nur wenn Sie über den Player bewegen/fokussieren, erscheinen die Steuerelemente mit voller Deckkraft.
- Wir arrangieren die Schaltflächen innerhalb der Steuerleiste mittels Flexbox ({{cssxref("display")}}: flex), um die Dinge zu erleichtern.

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

button:before {
  font-family: HeydingsControlsRegular;
  font-size: 20px;
  position: relative;
  content: attr(data-icon);
  color: #aaa;
  text-shadow: 1px 1px 0px black;
}
```

Zuerst importieren wir am Anfang des CSS mit einem {{cssxref("@font-face")}}-Block eine benutzerdefinierte Web-Schriftart. Dies ist eine Icon-Schriftart — alle Buchstaben des Alphabets entsprechen gängigen Icons, die Sie in einer Anwendung nutzen möchten.

Nächste verwenden wir generierten Content, um ein Icon auf jedem Button anzuzeigen:

- Wir verwenden den {{cssxref("::before")}}-Selektor, um den Inhalt vor jedem {{htmlelement("button")}}-Element anzuzeigen.
- Wir verwenden die {{cssxref("content")}}-Eigenschaft, um den Inhalt auf denjenigen zu setzen, der im `data-icon`-Attribut enthalten ist. Im Fall unseres Play-Buttons enthält `data-icon` ein großes "P".
- Wir wenden die benutzerdefinierte Web-Schriftart auf unsere Schaltflächen mit {{cssxref("font-family")}} an. In dieser Schriftart ist "P" tatsächlich ein "Play"-Icon, daher wird auf dem Play-Button ein "Play"-Icon angezeigt.

Icon-Schriftarten sind aus vielen Gründen sehr cool — sie reduzieren HTTP-Anforderungen, da Sie diese Icons nicht als Bilddateien herunterladen müssen, sie sind hervorragend skalierbar, und Sie können Text-Eigenschaften anwenden, um sie zu stylen — etwa {{cssxref("color")}} und {{cssxref("text-shadow")}}.

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

- Wir setzen das äußere `.timer`-Element auf `flex: 5`, sodass es den größten Teil der Breite der Steuerleiste einnimmt. Wir geben ihm auch {{cssxref("position", "position: relative")}}, damit wir Elemente bequem innerhalb davon positionieren können, und nicht an den Grenzen des {{htmlelement("body")}}-Elements.
- Das innere `<div>` ist absolut positioniert, um direkt auf dem äußeren `<div>` zu sitzen. Es hat auch eine Anfangsbreite von 0, sodass Sie es überhaupt nicht sehen können. Während das Video läuft, wird die Breite mittels JavaScript erhöht, während das Video abläuft.
- Das `<span>` ist auch absolut positioniert, um nah an der linken Seite des Timerbalkens zu sitzen.
- Wir geben unserem inneren `<div>` und `<span>` auch den richtigen {{cssxref("z-index")}}, damit der Timer oben angezeigt wird und das innere `<div>` darunter. Auf diese Weise stellen wir sicher, dass alle Informationen zu sehen sind — eine Box verdeckt keine andere.

### Implementierung des JavaScript

Wir haben bereits eine ziemlich vollständige HTML- und CSS-Oberfläche; jetzt müssen wir nur noch alle Schaltflächen verkabeln, um die Steuerelemente funktionsfähig zu machen.

1. Erstellen Sie eine neue JavaScript-Datei im selben Verzeichnisebene wie Ihre index.html-Datei. Nennen Sie sie `custom-player.js`.
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

   Hier erstellen wir Konstanten, um Verweise auf alle Objekte zu halten, die wir manipulieren möchten. Wir haben drei Gruppen:

   - Das `<video>`-Element und der Steuerungsbalken.
   - Die Schaltflächen für Wiedergabe/Pause, Stopp, Zurück- und Vorspulen.
   - Der äußere Timer-Wrapper `<div>`, die digitale Timer-Anzeige `<span>`, und das innere `<div>`, das mit Zeitablauf breiter wird.

3. Fügen Sie als Nächstes den folgenden Code am unteren Rand Ihres Codes ein:

   ```js
   media.removeAttribute("controls");
   controls.style.visibility = "visible";
   ```

   Diese zwei Zeilen entfernen die Standard-Browsersteuerungen vom Video und machen die benutzerdefinierten Steuerungen sichtbar.

#### Wiedergeben und Anhalten des Videos

Lassen Sie uns die wahrscheinlich wichtigste Steuerung implementieren — die Wiedergabe/Pause-Schaltfläche.

1. Fügen Sie zunächst den folgenden Code am unteren Rand Ihres Codes hinzu, damit die Funktion `playPauseMedia()` aufgerufen wird, wenn die Wiedergabeschaltfläche angeklickt wird:

   ```js
   play.addEventListener("click", playPauseMedia);
   ```

2. Jetzt definieren wir `playPauseMedia()` — fügen Sie den folgenden Code erneut am Ende Ihres Codes hinzu:

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

   Hier verwenden wir eine [`if`](/de/docs/Web/JavaScript/Reference/Statements/if...else)-Anweisung, um zu überprüfen, ob das Video pausiert ist. Die {{domxref("HTMLMediaElement.paused")}}-Eigenschaft gibt true zurück, wenn das Medium pausiert ist, was jederzeit der Fall ist, außer wenn das Video nach dem ersten Laden bei 0 Dauer steht. Wenn es pausiert ist, setzen wir den `data-icon`-Attributwert der Wiedergabeschaltfläche auf "u", was ein "pausiert"-Icon ist, und rufen die Methode {{domxref("HTMLMediaElement.play()")}} auf, um das Medium abzuspielen.

   Beim zweiten Klick wird der Button wieder umgeschaltet — das "Play"-Icon wird wieder angezeigt und das Video wird mit {{domxref("HTMLMediaElement.pause()")}} angehalten.

#### Anhalten des Videos

1. Als Nächstes fügen wir eine Funktionalität hinzu, die das Anhalten des Videos handhabt. Fügen Sie die folgenden [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)-Zeilen unter der vorherigen hinzu, die Sie hinzugefügt haben:

   ```js
   stop.addEventListener("click", stopMedia);
   media.addEventListener("ended", stopMedia);
   ```

   Der {{domxref("Element/click_event", "click")}}-Event ist offensichtlich — wir möchten das Video anhalten, indem wir unsere `stopMedia()`-Funktion ausführen, wenn der Stopp-Button angeklickt wird. Wir möchten jedoch auch das Video anhalten, wenn es zu Ende gespielt ist — dies wird durch das Triggern des {{domxref("HTMLMediaElement/ended_event", "ended")}}-Events markiert, sodass wir auch einen Listener einrichten, um die Funktion bei diesem Ereignis auszuführen.

2. Definieren wir als Nächstes `stopMedia()` — fügen Sie die folgende Funktion unter `playPauseMedia()` hinzu:

   ```js
   function stopMedia() {
     media.pause();
     media.currentTime = 0;
     play.setAttribute("data-icon", "P");
   }
   ```

   es gibt keine `stop()`-Methode auf der HTMLMediaElement-API — das Äquivalent ist, das Video zu `pausieren`, und seine {{domxref("HTMLMediaElement.currentTime","currentTime")}}-Eigenschaft auf 0 zu setzen. Wenn Sie `currentTime` auf einen Wert (in Sekunden) setzen, springt das Medium sofort an diese Position.

   Es bleibt nur noch eins zu tun, nämlich das angezeigte Icon auf das "Play"-Icon zu setzen. Unabhängig davon, ob das Video pausiert oder abgespielt wird, wenn der Stopp-Button gedrückt wird, möchten Sie, dass es danach zur Wiedergabe bereit ist.

#### Vor- und Zurückspulen

Es gibt viele Möglichkeiten, eine Rückspul- und Vorspielfunktionalität zu implementieren; hier zeigen wir Ihnen eine relativ komplexe Methode, die nicht bricht, wenn die verschiedenen Schaltflächen in unerwarteter Reihenfolge gedrückt werden.

1. Fügen Sie zunächst die folgenden zwei [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)-Zeilen unter den vorherigen hinzu:

   ```js
   rwd.addEventListener("click", mediaBackward);
   fwd.addEventListener("click", mediaForward);
   ```

2. Nun zu den Ereignishandlerfunktionen — fügen Sie den folgenden Code unter Ihren vorherigen Funktionen ein, um `mediaBackward()` und `mediaForward()` zu definieren:

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

   Sie werden feststellen, dass wir zuerst zwei Variablen initialisieren — `intervalFwd` und `intervalRwd` — Sie werden später sehen, wofür sie sind.

   Lassen Sie uns `mediaBackward()` Schritt für Schritt durchgehen (die Funktionalität von `mediaForward()` ist genau dieselbe, aber umgekehrt):

   1. Wir entfernen alle Klassen und Intervalle, die auf die Vorspielfunktionalität gesetzt sind — wir tun dies, weil, wenn wir den `rwd`-Button nach dem Drücken des `fwd`-Buttons drücken, wir alle Vorspielfunktionalitäten abbrechen und sie durch die Rückspulfunktionalität ersetzen möchten. Wenn wir versuchen würden, beides gleichzeitig zu machen, würde der Player kaputtgehen.
   2. Wir verwenden eine `if`-Anweisung, um zu überprüfen, ob die `active`-Klasse auf die `rwd`-Button gesetzt ist, was anzeigt, dass sie bereits gedrückt wurde. Die {{domxref("Element.classList", "classList")}} ist eine ziemlich praktische Eigenschaft, die auf jedem Element existiert — sie enthält eine Liste aller auf das Element gesetzten Klassen sowie Methoden zum Hinzufügen/Entfernen von Klassen usw. Wir verwenden die `classList.contains()`-Methode, um zu überprüfen, ob die Liste die `active`-Klasse enthält. Dies gibt ein boolesches `true`/`false`-Ergebnis zurück.
   3. Wenn `active` auf die `rwd`-Button gesetzt ist, entfernen wir es mit `classList.remove()`, löschen das Intervall, das beim ersten Drücken des Buttons gesetzt wurde (siehe unten für mehr Erklärung), und verwenden {{domxref("HTMLMediaElement.play()")}} um das Zurückspulen abzubrechen und das Video normal abzuspielen.
   4. Wenn es noch nicht gesetzt ist, fügen wir die `active`-Klasse mit `classList.add()` auf die `rwd`-Button hinzu, pausieren das Video mit {{domxref("HTMLMediaElement.pause()")}}, und setzen dann die `intervalRwd`-Variable gleich einem {{domxref("setInterval()")}}-Aufruf. Wenn `setInterval()` aufgerufen wird, erstellt es ein aktives Intervall, was bedeutet, dass es die Funktion, die als erster Parameter angegeben ist, alle x Millisekunden ausführt, wobei x der Wert des 2. Parameters ist. Also führen wir hier die `windBackward()`-Funktion alle 200 Millisekunden aus — wir werden diese Funktion verwenden, um das Video kontinuierlich zurückzuspulen. Um einen {{domxref("setInterval()")}} zu stoppen, müssen Sie {{domxref("clearInterval", "clearInterval()")}} aufrufen, wobei Sie den identifizierenden Namen des zu löschenden Intervalls angeben müssen, der in diesem Fall der Variablenname `intervalRwd` ist (siehe den `clearInterval()`-Aufruf weiter oben in der Funktion).

3. Schließlich müssen wir die `windBackward()`- und `windForward()`-Funktionen definieren, die in den `setInterval()`-Aufrufen aufgerufen werden. Fügen Sie den folgenden Code unter Ihre beiden vorherigen Funktionen hinzu:

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

   Auch hier werden wir nur die erste dieser Funktionen durchgehen, da sie fast identisch sind, jedoch entgegengesetzt. In `windBackward()` tun wir Folgendes — bedenken Sie, dass, wenn das Intervall aktiv ist, diese Funktion alle 200 Millisekunden einmal ausgeführt wird.

   1. Wir beginnen mit einer `if`-Anweisung, die überprüft, ob die aktuelle Zeit weniger als 3 Sekunden beträgt, d.h. wenn ein Zurückspulen um weitere 3 Sekunden sie vor den Anfang des Videos zurücksetzen würde. Dies würde zu einem merkwürdigen Verhalten führen, also stoppen wir in diesem Fall die Video-Wiedergabe, indem wir `stopMedia()` aufrufen, entfernen die `active`-Klasse von der Rückspul-Taste, und leeren das `intervalRwd`-Intervall, um die Rückspielfunktionalität zu stoppen. Wenn wir diesen letzten Schritt nicht machen würden, würde das Video einfach für immer zurückspulen.
   2. Wenn die aktuelle Zeit nicht innerhalb von 3 Sekunden ab dem Beginn des Videos ist, entfernen wir drei Sekunden von der aktuellen Zeit, indem wir `media.currentTime -= 3` ausführen. So spulen wir das Video alle 200 Millisekunden tatsächlich um 3 Sekunden zurück.

#### Aktualisieren der verstrichenen Zeit

Das letzte Stück unseres Mediaplayers, das implementiert werden soll, ist die Zeit-verstrichen-Anzeige. Um dies zu tun, führen wir eine Funktion aus, die die Zeitanzeige jedes Mal aktualisiert, wenn das {{domxref("HTMLMediaElement/timeupdate_event", "timeupdate")}}-Ereignis auf dem `<video>`-Element ausgelöst wird. Die Häufigkeit, mit der dieses Ereignis ausgelöst wird, hängt von Ihrem Browser, Ihrer CPU-Leistung usw. ab. ([siehe diesen StackOverflow-Post](https://stackoverflow.com/questions/9678177/how-often-does-the-timeupdate-event-fire-for-an-html5-video)).

Fügen Sie die folgende `addEventListener()`-Zeile direkt unter den anderen hinzu:

```js
media.addEventListener("timeupdate", setTime);
```

Nun zur Definition der `setTime()`-Funktion. Fügen Sie den folgenden Code am Ende Ihrer Datei hinzu:

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

Dies ist eine relativ lange Funktion, also lassen Sie uns sie Schritt für Schritt durchgehen:

1. Zuerst bestimmen wir die Anzahl der Minuten und Sekunden im {{domxref("HTMLMediaElement.currentTime")}}-Wert.
2. Dann initialisieren wir zwei weitere Variablen — `minuteValue` und `secondValue`. Wir verwenden {{jsxref("String/padStart", "padStart()")}}, um jeden Wert 2 Zeichen lang zu machen, selbst wenn der Zahlenwert nur einstellig ist.
3. Der tatsächlich anzuzeigende Zeitwert wird als `minuteValue` plus ein Doppelpunkt-Zeichen plus `secondValue` gesetzt.
4. Der {{domxref("Node.textContent")}}-Wert des Timers wird auf den Zeitwert gesetzt, damit er in der Benutzeroberfläche angezeigt wird.
5. Die Länge, die wir dem inneren `<div>` zuweisen sollten, wird ermittelt, indem wir zuerst die Breite des äußeren `<div>` ermitteln (die {{domxref("Element.clientWidth", "clientWidth")}}-Eigenschaft eines beliebigen Elements enthält seine Länge) und dann mit der {{domxref("HTMLMediaElement.currentTime")}} durch die Gesamt-Dauer des Mediums {{domxref("HTMLMediaElement.duration")}} multiplizieren.
6. Wir setzen die Breite des inneren `<div>` gleich der berechneten Balkenlänge plus "px", sodass es auf diese Anzahl von Pixeln gesetzt wird.

#### Beheben von Wiedergabe und Pause

Ein Problem bleibt noch zu beheben. Wenn die Wiedergabe/Pause- oder Stopp-Bereiche gedrückt werden, während die Rückspul- oder Vorspielfunktionalität aktiv ist, funktionieren sie einfach nicht. Wie können wir es so beheben, dass sie die `rwd`/`fwd`-Btn-Funktionalität abbrechen und das Video so abspielen/anhalten, wie Sie es erwarten würden? Dies ist ziemlich einfach zu beheben.

Zuerst einmal fügen Sie die folgenden Zeilen in die `stopMedia()`-Funktion — überall, wo sie passen, ein:

```js
rwd.classList.remove("active");
fwd.classList.remove("active");
clearInterval(intervalRwd);
clearInterval(intervalFwd);
```

Nun fügen Sie dieselben Zeilen erneut ein, ganz am Anfang der `playPauseMedia()`-Funktion (direkt vor dem Start der `if`-Anweisung).

Zu diesem Zeitpunkt können Sie die entsprechenden Zeilen aus den `windBackward()`- und `windForward()`-Funktionen löschen, da diese Funktionalität stattdessen in der `stopMedia()`-Funktion implementiert wurde.

Hinweis: Sie könnten die Effizienz des Codes weiter verbessern, indem Sie eine separate Funktion erstellen, die diese Zeilen ausführt, und sie dann überall dort aufrufen, wo sie benötigt werden, anstatt die Zeilen mehrfach im Code zu wiederholen. Aber wir überlassen das Ihnen.

## Zusammenfassung

Ich denke, wir haben Ihnen in diesem Artikel genug beigebracht. Die {{domxref("HTMLMediaElement")}}-API stellt eine Fülle von Funktionen für die Erstellung einfacher Video- und Audioplayer zur Verfügung, und das ist nur die Spitze des Eisbergs. Siehe den Abschnitt "Siehe auch" unten für Links zu komplexeren und interessanteren Funktionalitäten.

Hier sind ein paar Vorschläge, wie Sie das bestehende Beispiel, das wir aufgebaut haben, verbessern könnten:

1. Die Zeitanzeige bricht derzeit, wenn das Video eine Stunde oder länger ist (nun, es wird keine Stunden anzeigen; nur Minuten und Sekunden). Können Sie herausfinden, wie Sie das Beispiel ändern können, damit es Stunden anzeigt?
2. Da die `<audio>`-Elemente die gleiche {{domxref("HTMLMediaElement")}}-Funktionalität zur Verfügung haben, könnten Sie diesen Player leicht so einrichten, dass er auch für ein `<audio>`-Element funktioniert. Versuchen Sie, dies zu tun.
3. Können Sie einen Weg finden, das innere `<div>`-Element des Timers zu einer echten Suchleiste/Schnellwahl zu machen — d.h., wenn Sie an einer Stelle auf den Balken klicken, springt es zu dieser relativen Position im Videowiedergang? Als Hinweis: Sie können die X- und Y-Werte der linken/rechten und oberen/unteren Seiten des Elements über die Methode [`getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect) herausfinden, und Sie können die Koordinaten eines Mausklicks über das Ereignisobjekt des Klickereignisses, das auf das {{domxref("Document")}}-Objekt angewendet wird, herausfinden. Zum Beispiel:

   ```js
   document.onclick = function (e) {
     console.log(e.x, e.y);
   };
   ```

## Siehe auch

- {{domxref("HTMLMediaElement")}}
- [Video- und Audiocontent](/de/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content) — einfache Anleitung zu `<video>` und `<audio>` HTML.
- [Audio- und Videowiedergabe](/de/docs/Web/Media/Audio_and_video_delivery) — ausführliche Anleitung zur Auslieferung von Medien innerhalb des Browsers, mit vielen Tipps, Tricks und Links zu weiteren fortgeschrittenen Tutorials.
- [Audio- und Videobearbeitung](/de/docs/Web/Media/Audio_and_video_manipulation) — ausführliche Anleitung zur Bearbeitung von Audio und Video, z.B. mit [Canvas API](/de/docs/Web/API/Canvas_API), [Web Audio API](/de/docs/Web/API/Web_Audio_API) und mehr.
- {{htmlelement("video")}} und {{htmlelement("audio")}} Referenzseiten.
- [Leitfaden zu Medientypen und -formaten im Web](/de/docs/Web/Media/Formats)

{{PreviousMenuNext("Learn/JavaScript/Client-side_web_APIs/Drawing_graphics", "Learn/JavaScript/Client-side_web_APIs/Client-side_storage", "Learn/JavaScript/Client-side_web_APIs")}}
