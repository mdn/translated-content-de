---
title: Video- und Audio-APIs
slug: Learn_web_development/Extensions/Client-side_APIs/Video_and_audio_APIs
l10n:
  sourceCommit: 27bceead8e9b1fe9c92df0fa5e418f81bd5b9fdf
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_APIs/Introduction", "Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics", "Learn_web_development/Extensions/Client-side_APIs")}}

HTML verfügt über Elemente zum Einbetten von Rich Media in Dokumente — {{htmlelement("video")}} und {{htmlelement("audio")}} — die über eigene APIs zur Steuerung der Wiedergabe, zum Suchen usw. verfügen. Dieser Artikel zeigt Ihnen, wie Sie gängige Aufgaben wie das Erstellen benutzerdefinierter Wiedergabesteuerungen ausführen können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>, insbesondere den <a href="/de/docs/Learn_web_development/Core/Scripting/Object_basics">Grundlagen von JavaScript-Objekten</a> und grundlegenden API-Themen wie <a href="/de/docs/Learn_web_development/Core/Scripting/DOM_scripting">DOM-Scripting</a> und <a href="/de/docs/Learn_web_development/Core/Scripting/Network_requests">Netzwerkanfragen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        <ul>
          <li>Was Codecs sind und die unterschiedlichen Video- und Audioformate.</li>
          <li>Verstehen der Schlüssel-Funktionalitäten von Audio und Video — abspielen, pausieren, stoppen, rückwärts und vorwärts suchen, Dauer und aktuelle Zeit.</li>
          <li>Verwendung der <code>HTMLMediaElement</code>-API, um einen einfachen benutzerdefinierten Media-Player zu erstellen, für bessere Zugänglichkeit oder mehr Konsistenz zwischen Browsern.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## HTML-Video und -Audio

Die {{htmlelement("video")}}- und {{htmlelement("audio")}}-Elemente ermöglichen es uns, Video und Audio in Webseiten einzubetten. Wie wir in [HTML-Video und -Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio) gezeigt haben, sieht eine typische Implementierung so aus:

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

Sie können in dem oben verlinkten Artikel nachlesen, was alle HTML-Funktionen bewirken; für unsere Zwecke ist das interessanteste Attribut [`controls`](/de/docs/Web/HTML/Element/video#controls), das die Standardsätze von Wiedergabesteuerungen aktiviert. Wenn Sie dies nicht angeben, erhalten Sie keine Wiedergabesteuerungen:

{{EmbedGHLiveSample("learning-area/html/multimedia-and-embedding/video-and-audio-content/multiple-video-formats-no-controls.html", '100%', 380)}}

Dies ist nicht sofort nützlich für die Videowiedergabe, hat aber Vorteile. Ein großes Problem mit den nativen Browser-Steuerungen ist, dass sie in jedem Browser unterschiedlich sind — nicht sehr gut für die Unterstützung mehrerer Browser! Ein weiteres großes Problem ist, dass die nativen Steuerungen in den meisten Browsern nicht sehr gut zugänglich sind.

Sie können beide Probleme lösen, indem Sie die nativen Steuerungen ausblenden (indem Sie das `controls`-Attribut entfernen) und Ihre eigenen mit HTML, CSS und JavaScript programmieren. Im nächsten Abschnitt betrachten wir die grundlegenden Werkzeuge, die wir dafür zur Verfügung haben.

## Die HTMLMediaElement-API

Teil der HTML-Spezifikation, die [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-API, bietet Funktionen, mit denen Sie Video- und Audio-Player programmatisch steuern können — zum Beispiel [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play), [`HTMLMediaElement.pause()`](/de/docs/Web/API/HTMLMediaElement/pause) usw. Diese Schnittstelle steht sowohl für {{htmlelement("audio")}}- als auch für {{htmlelement("video")}}-Elemente zur Verfügung, da die Funktionen, die Sie implementieren möchten, nahezu identisch sind. Lassen Sie uns ein Beispiel durchgehen und nach und nach Funktionen hinzufügen.

Unser fertiges Beispiel wird so aussehen (und funktionieren) wie das folgende:

{{EmbedGHLiveSample("learning-area/javascript/apis/video-audio/finished/", '100%', 360)}}

### Erste Schritte

Um mit diesem Beispiel zu beginnen, [laden Sie unser media-player-start.zip herunter](https://github.com/mdn/learning-area/blob/main/javascript/apis/video-audio/start/media-player-start.zip) und entpacken Sie es in ein neues Verzeichnis auf Ihrer Festplatte. Wenn Sie [unser Beispiels-Repo heruntergeladen haben](https://github.com/mdn/learning-area), finden Sie es in `javascript/apis/video-audio/start/`.

An diesem Punkt, wenn Sie das HTML laden, sollten Sie einen ganz normalen HTML-Videoplayer mit den nativen Steuerungen sehen.

#### HTML erkunden

Öffnen Sie die HTML-Indexdatei. Sie werden eine Reihe von Funktionen sehen; das HTML wird vom Videoplayer und dessen Steuerungen dominiert:

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
- Das {{htmlelement("video")}}-Element enthält zwei {{htmlelement("source")}}-Elemente, sodass je nach dem, welchen Browser die Seite anzeigt, unterschiedliche Formate geladen werden können.
- Das Steuerungen-HTML ist wahrscheinlich am interessantesten:

  - Wir haben vier {{htmlelement("button")}}s — abspielen/pausieren, stoppen, zurückspulen und vorspulen.
  - Jeder `<button>` hat einen `class`-Namen, ein `data-icon`-Attribut, um anzuzeigen, welches Symbol auf jedem Button angezeigt werden soll (wir zeigen im folgenden Abschnitt, wie das funktioniert), und ein `aria-label`-Attribut, das eine verständliche Beschreibung jedes Buttons bereitstellt, da wir innerhalb der Tags keine menschenlesbaren Labels bereitstellen. Der Inhalt der `aria-label`-Attribute wird von Bildschirmlesegeräten vorgelesen, wenn ihre Benutzer den Fokus auf die Elemente setzen, die sie enthalten.
  - Es gibt auch einen {{htmlelement("div")}}-Timer, der die verstrichene Zeit angibt, wenn das Video abgespielt wird. Nur zum Spaß bieten wir zwei Berichtmechanismen an — einen {{htmlelement("span")}}, der die verstrichene Zeit in Minuten und Sekunden enthält, und einen zusätzlichen `<div>`, den wir verwenden werden, um eine horizontale Indikatorleiste zu erstellen, die sich verlängert, je länger die Zeit verstreicht. Um einen Eindruck davon zu bekommen, wie das fertige Produkt aussehen wird, [sehen Sie sich unsere fertige Version an](https://mdn.github.io/learning-area/javascript/apis/video-audio/finished/).

#### CSS erkunden

Öffnen Sie jetzt die CSS-Datei und schauen Sie hinein. Das CSS für das Beispiel ist nicht zu kompliziert, aber wir heben hier die interessantesten Teile hervor. Zuallererst beachten Sie das `.controls`-Styling:

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

- Wir beginnen mit der {{cssxref("visibility")}} der benutzerdefinierten Steuerungen auf `hidden` gesetzt. In unserem JavaScript später werden wir die Steuerungen auf `visible` setzen und das `controls`-Attribut vom `<video>`-Element entfernen. Dies ist so, dass, falls das JavaScript aus irgendeinem Grund nicht geladen wird, die Benutzer das Video dennoch mit den nativen Steuerungen nutzen können.
- Wir geben den Steuerungen standardmäßig eine {{cssxref("opacity")}} von 0,5, sodass sie weniger ablenkend sind, wenn Sie versuchen, das Video anzusehen. Nur wenn Sie über den Player schweben oder darauf fokussieren, erscheinen die Steuerungen in voller Deckkraft.
- Wir ordnen die Buttons im Steuerungsbalken mithilfe von Flexbox ({{cssxref("display")}}: flex) an, um die Angelegenheit zu erleichtern.

Werfen wir nun einen Blick auf unsere Button-Symbole:

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

Zuerst verwenden wir oben im CSS einen {{cssxref("@font-face")}}-Block, um eine benutzerdefinierte Webschriftart zu importieren. Dies ist eine Symbolschriftart — alle Buchstaben des Alphabets entsprechen gängigen Symbolen, die Sie in einer Anwendung verwenden möchten.

Als nächstes verwenden wir generierten Inhalt, um auf jedem Button ein Symbol anzuzeigen:

- Wir verwenden den {{cssxref("::before")}}-Selektor, um den Inhalt vor jedem {{htmlelement("button")}}-Element anzuzeigen.
- Wir verwenden die {{cssxref("content")}}-Eigenschaft, um den anzuzeigenden Inhalt in jedem Fall gleich dem Inhalt des [`data-icon`](/de/docs/Learn_web_development/Howto/Solve_HTML_problems/Use_data_attributes)-Attributs zu setzen. Im Fall unseres Abspiel-Buttons enthält `data-icon` ein großes "P".
- Wir wenden die benutzerdefinierte Webschriftart mit {{cssxref("font-family")}} auf unsere Buttons an. In dieser Schriftart ist "P" tatsächlich ein "play"-Symbol, sodass der Abspiel-Button ein "play"-Symbol anzeigt.

Symbolschriftarten sind aus vielen Gründen sehr cool — sie reduzieren die Anzahl der HTTP-Anfragen, da Sie diese Symbole nicht mehr als Bilddateien herunterladen müssen, bieten großartige Skalierbarkeit und Sie können Texteigenschaften verwenden, um sie zu gestalten — wie {{cssxref("color")}} und {{cssxref("text-shadow")}}.

Zu guter Letzt betrachten wir das CSS für den Timer:

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

- Wir setzen das äußere `.timer`-Element auf `flex: 5`, sodass es den größten Teil der Breite der Steuerleiste einnimmt. Wir geben ihm auch {{cssxref("position", "position: relative")}}, sodass wir Elemente darin bequem entsprechend den Grenzen des Elements und nicht den Grenzen des {{htmlelement("body")}}-Elements positionieren können.
- Das innere `<div>` ist absolut positioniert, um direkt oben auf dem äußeren `<div>` zu sitzen. Es hat auch eine Anfangsbreite von 0, sodass Sie es überhaupt nicht sehen können. Während das Video abgespielt wird, wird die Breite über JavaScript verändert, während das Video abläuft.
- Das `<span>` ist ebenfalls absolut positioniert, um sich nahe der linken Seite der Timerleiste zu befinden.
- Wir geben unserem inneren `<div>` und `<span>` auch den richtigen {{cssxref("z-index")}}, sodass der Timer oben angezeigt wird und das innere `<div>` darunter. Auf diese Weise stellen wir sicher, dass wir alle Informationen sehen können — eine Box verdeckt nicht die andere.

### Implementierung des JavaScripts

Wir haben bereits eine ziemlich vollständige HTML- und CSS-Benutzeroberfläche; jetzt müssen wir nur noch alle Buttons verdrahten, um die Steuerungen zum Laufen zu bringen.

1. Erstellen Sie eine neue JavaScript-Datei auf derselben Verzeichnisebene wie Ihre index.html-Datei. Nennen Sie sie `custom-player.js`.
2. Oben in dieser Datei fügen Sie den folgenden Code ein:

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

   Hier erstellen wir Konstanten, um Referenzen zu allen Objekten zu speichern, die wir manipulieren möchten. Wir haben drei Gruppen:

   - Das `<video>`-Element und die Steuerleiste.
   - Die Abspiel-/Pause-, Stopp-, Rückspul- und Vorspul-Buttons.
   - Der äußere Timer-Wrapper `<div>`, die digitale Timeranzeige `<span>` und das innere `<div>`, das breiter wird, wenn die Zeit vergeht.

3. Fügen Sie als nächstes das Folgende am Ende Ihres Codes ein:

   ```js
   media.removeAttribute("controls");
   controls.style.visibility = "visible";
   ```

   Diese zwei Zeilen entfernen die Standard-Browsersteuerungen vom Video und machen die benutzerdefinierten Steuerungen sichtbar.

#### Abspielen und Pausieren des Videos

Lassen Sie uns die wahrscheinlich wichtigste Steuerung implementieren — den Abspiel-/Pause-Button.

1. Fügen Sie zunächst Folgendes am Ende Ihres Codes hinzu, damit die `playPauseMedia()`-Funktion aufgerufen wird, wenn der Abspiel-Button angeklickt wird:

   ```js
   play.addEventListener("click", playPauseMedia);
   ```

2. Jetzt zur Definition von `playPauseMedia()` — fügen Sie folgendes erneut am Ende Ihres Codes hinzu:

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

   Hier verwenden wir eine [`if`](/de/docs/Web/JavaScript/Reference/Statements/if...else)-Anweisung, um zu überprüfen, ob das Video pausiert ist. Die [`HTMLMediaElement.paused`](/de/docs/Web/API/HTMLMediaElement/paused)-Eigenschaft gibt true zurück, wenn das Medium pausiert ist, was jederzeit der Fall ist, wenn das Video nicht abgespielt wird, einschließlich wenn es zu 0 Dauer eingestellt ist, nachdem es zuerst geladen wird. Wenn es pausiert ist, setzen wir den Wert des `data-icon`-Attributs auf dem Abspiel-Button auf "u", was ein "pausiert"-Symbol ist, und rufen die Methode [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play) auf, um das Medium abzuspielen.

   Beim zweiten Klick wird der Button wieder umgeschaltet — das "Abspiel"-Symbol wird erneut angezeigt, und das Video wird mit [`HTMLMediaElement.pause()`](/de/docs/Web/API/HTMLMediaElement/pause) pausiert.

#### Stoppen des Videos

1. Als nächstes fügen wir eine Funktionalität hinzu, um das Video zu stoppen. Fügen Sie die folgenden [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)-Zeilen unterhalb der vorherigen hinzu:

   ```js
   stop.addEventListener("click", stopMedia);
   media.addEventListener("ended", stopMedia);
   ```

   Das [`click`](/de/docs/Web/API/Element/click_event)-Ereignis ist offensichtlich — wir möchten das Video stoppen, indem wir unsere `stopMedia()`-Funktion aufrufen, wenn der Stopp-Button geklickt wird. Wir möchten jedoch auch das Video stoppen, wenn es die Wiedergabe beendet — dies wird durch das [`ended`](/de/docs/Web/API/HTMLMediaElement/ended_event)-Ereignis angezeigt, daher richten wir auch einen Listener ein, der die Funktion beim Auslösen dieses Ereignisses ausführt.

2. Als nächstes definieren wir `stopMedia()` — fügen Sie die folgende Funktion unterhalb von `playPauseMedia()` hinzu:

   ```js
   function stopMedia() {
     media.pause();
     media.currentTime = 0;
     play.setAttribute("data-icon", "P");
   }
   ```

   Es gibt keine `stop()`-Methode in der HTMLMediaElement-API — das Äquivalent besteht darin, das Video zu `pause()`, und die [`currentTime`](/de/docs/Web/API/HTMLMediaElement/currentTime)-Eigenschaft auf 0 zu setzen. `currentTime` auf einen Wert (in Sekunden) zu setzen, springt das Medium sofort zu dieser Position.

   Alles, was noch zu tun ist, ist, das angezeigte Symbol auf das "Abspiel"-Symbol zu setzen. Unabhängig davon, ob das Video pausiert war oder abgespielt wurde, wenn der Stopp-Button gedrückt wird, möchten Sie, dass es danach bereit zum Abspielen ist.

#### Zurück- und Vorwärtssuchen

Es gibt viele Möglichkeiten, wie Sie Rückspul- und Vorspul-Funktionalität implementieren können; hier zeigen wir Ihnen eine relativ komplexe Möglichkeit, die nicht bricht, wenn die verschiedenen Buttons in unerwarteter Reihenfolge gedrückt werden.

1. Fügen Sie zunächst die folgenden zwei [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)-Zeilen unterhalb der vorherigen hinzu:

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

   Sie werden feststellen, dass wir zuerst zwei Variablen — `intervalFwd` und `intervalRwd` — initialisieren. Sie erfahren später, wofür sie gut sind.

   Gehen wir durch `mediaBackward()` (die Funktionalität für `mediaForward()` ist genau gleich, aber andersherum):

   1. Wir löschen alle Klassen und Intervalle, die auf die Vorspul-Funktionalität gesetzt sind — wir tun dies, weil wir, wenn wir den `rwd`-Button nach dem `fwd`-Button drücken, jede Vorspulfunktion abbrechen und durch die Rückspulfunktion ersetzen möchten. Wenn wir versuchen würden, beide gleichzeitig zu tun, würde der Player zusammenbrechen.
   2. Wir verwenden eine `if`-Anweisung, um zu überprüfen, ob der `active`-Klasse im `rwd`-Button gesetzt wurde, was anzeigt, dass er bereits gedrückt wurde. Die [`classList`](/de/docs/Web/API/Element/classList) ist eine ziemlich praktische Eigenschaft, die auf jedem Element existiert — sie enthält eine Liste aller auf dem Element gesetzten Klassen sowie Methoden zum Hinzufügen/Entfernen von Klassen usw. Wir verwenden die Methode `classList.contains()`, um zu überprüfen, ob die Liste die `active`-Klasse enthält. Dies ergibt ein boolesches `true`/`false`-Resultat.
   3. Wenn `active` auf den `rwd`-Button gesetzt wurde, entfernen wir es mit `classList.remove()`, löschen das Intervall, das gesetzt wurde, als der Button zuerst gedrückt wurde (siehe unten für mehr Erklärung), und verwenden [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play), um das Zurückspulen zu unterbrechen und das Video normal abspielen zu lassen.
   4. Wenn es noch nicht gesetzt wurde, fügen wir dem `rwd`-Button die `active`-Klasse mittels `classList.add()` hinzu, pausieren das Video mit [`HTMLMediaElement.pause()`](/de/docs/Web/API/HTMLMediaElement/pause), und setzen dann die `intervalRwd`-Variable gleich einem Aufruf von [`setInterval()`](/de/docs/Web/API/Window/setInterval). Wenn aufgerufen wird, erstellt `setInterval()` ein aktives Intervall, was bedeutet, dass es die Funktion, die als erster Parameter angegeben wird, alle x Millisekunden ausführt, wobei x der Wert des zweiten Parameters ist. Hier führen wir die Funktion `windBackward()` alle 200 Millisekunden aus — wir werden diese Funktion verwenden, um das Video ständig zurückzuspulen. Um ein [`setInterval()`](/de/docs/Web/API/Window/setInterval) zu stoppen, müssen Sie [`clearInterval()`](/de/docs/Web/API/Window/clearInterval) aufrufen und ihm den identifizierenden Namen des zu löschenden Intervalls geben, was in diesem Fall der Variablenname `intervalRwd` ist (siehe den `clearInterval()`-Aufruf früher in der Funktion).

3. Schließlich müssen wir die Funktionen `windBackward()` und `windForward()` definieren, die in den `setInterval()`-Aufrufen aufgerufen werden. Fügen Sie folgende Funktionen unterhalb Ihrer vorherigen Funktionen hinzu:

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

   Lassen Sie uns erneut nur durch die erste dieser Funktionen gehen, da sie fast identisch funktionieren, allerdings in umgekehrter Richtung. In `windBackward()` machen wir Folgendes — beachten Sie, dass, wenn das Intervall aktiv ist, diese Funktion einmal alle 200 Millisekunden ausgeführt wird.

   1. Wir beginnen mit einer `if`-Anweisung, die prüft, ob die aktuelle Zeit geringer als 3 Sekunden ist, d.h., ob das Zurückspulen um weitere 3 Sekunden es zurück vor den Anfang des Videos bringen würde. Dies würde zu seltsamem Verhalten führen, sodass wir in diesem Fall das Video mit einem Aufruf von `stopMedia()` stoppen, die `active`-Klasse vom Rückspul-Button entfernen und das `intervalRwd`-Intervall löschen, um das Rückspulen zu stoppen. Würden wir diesen letzten Schritt nicht tun, würde das Video unendlich lange zurückspulen.
   2. Wenn die aktuelle Zeit nicht innerhalb von 3 Sekunden von Anfang des Videos ist, ziehen wir 3 Sekunden von der aktuellen Zeit ab, indem wir `media.currentTime -= 3` ausführen. In der Praxis spulen wir das Video somit alle 200 Millisekunden um 3 Sekunden zurück.

#### Aktualisierung der verstrichenen Zeit

Der allerletzte Teil unseres Media Players, den wir implementieren müssen, sind die Anzeigen der verstrichenen Zeit. Dazu führen wir eine Funktion aus, um die Zeit-Anzeigen jedes Mal zu aktualisieren, wenn das [`timeupdate`](/de/docs/Web/API/HTMLMediaElement/timeupdate_event)-Ereignis auf dem `<video>`-Element ausgelöst wird. Die Häufigkeit, mit der dieses Ereignis ausgelöst wird, hängt von Ihrem Browser, der CPU-Leistung usw. ab. ([siehe diesen Stack Overflow-Post](https://stackoverflow.com/questions/9678177/how-often-does-the-timeupdate-event-fire-for-an-html5-video)).

Fügen Sie die folgende `addEventListener()`-Zeile direkt unter den anderen hinzu:

```js
media.addEventListener("timeupdate", setTime);
```

Jetzt zur Definition der `setTime()`-Funktion. Fügen Sie die folgende am Ende Ihrer Datei hinzu:

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

Dies ist eine ziemlich lange Funktion, lassen Sie uns Schritt für Schritt durchgehen:

1. Zuerst ermitteln wir die Anzahl der Minuten und Sekunden im [`HTMLMediaElement.currentTime`](/de/docs/Web/API/HTMLMediaElement/currentTime)-Wert.
2. Dann initialisieren wir zwei weitere Variablen — `minuteValue` und `secondValue`. Wir verwenden {{jsxref("String/padStart", "padStart()")}}, um jeden Wert auf 2 Zeichen zu bringen, auch wenn der numerische Wert nur eine einstellige Zahl ist.
3. Der tatsächlich anzuzeigende Zeitwert wird als `minuteValue` plus einem Doppelpunkt-Zeichen plus `secondValue` gesetzt.
4. Der [`Node.textContent`](/de/docs/Web/API/Node/textContent)-Wert des Timers wird auf den Zeitwert gesetzt, sodass er in der UI angezeigt wird.
5. Die Länge, die wir dem inneren `<div>` geben sollten, wird ermittelt, indem zuerst die Breite des äußeren `<div>` herausgefunden wird (die Eigenschaft [`clientWidth`](/de/docs/Web/API/Element/clientWidth) eines Elements enthält seine Länge), und sie dann mit der [`HTMLMediaElement.currentTime`](/de/docs/Web/API/HTMLMediaElement/currentTime) geteilt durch die gesamte [`HTMLMediaElement.duration`](/de/docs/Web/API/HTMLMediaElement/duration) des Mediums multipliziert wird.
6. Wir setzen die Breite des inneren `<div>` auf die berechnete Balkenlänge, plus "px", damit sie auf diese Anzahl von Pixeln eingestellt wird.

#### Beheben der Abspiel- und Pause-Funktion

Es bleibt ein Problem zu beheben. Wenn die Abspiel-/Pause- oder Stopp-Buttons gedrückt werden, während die Rückspul- oder Vorspulfunktionalität aktiv ist, funktionieren sie einfach nicht. Wie können wir es beheben, damit sie die `rwd`/`fwd`-Button-Funktionalität abbrechen und das Video so spielen/stoppen, wie Sie erwarten würden? Dies ist recht einfach zu beheben.

Fügen Sie zuerst die folgenden Zeilen in die `stopMedia()`-Funktion ein — irgendwo spielt keine Rolle:

```js
rwd.classList.remove("active");
fwd.classList.remove("active");
clearInterval(intervalRwd);
clearInterval(intervalFwd);
```

Fügen Sie nun dieselben Zeilen erneut am Anfang der `playPauseMedia()`-Funktion ein (genau vor dem Start der `if`-Anweisung).

An dieser Stelle könnten Sie die äquivalenten Zeilen aus den `windBackward()`- und `windForward()`-Funktionen löschen, da diese Funktionalität anstelle dessen in der `stopMedia()`-Funktion implementiert wurde.

Hinweis: Sie könnten auch die Effizienz des Codes weiter verbessern, indem Sie eine separate Funktion erstellen, die diese Zeilen ausführt, und diese dann überall dort aufrufen, wo sie benötigt werden, anstatt die Zeilen mehrfach im Code zu wiederholen. Aber wir überlassen das Ihnen.

## Zusammenfassung

Ich denke, wir haben Ihnen in diesem Artikel genug beigebracht. Die [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-API bietet eine Fülle von Funktionalitäten für die Erstellung einfacher Video- und Audio-Player, und das ist nur die Spitze des Eisbergs. Siehe den Abschnitt „Siehe auch“ unten für Links zu komplexeren und interessanteren Funktionen.

Hier sind einige Vorschläge, wie Sie das bestehende Beispiel, das wir aufgebaut haben, verbessern könnten:

1. Die Zeitanzeige bricht derzeit, wenn das Video eine Stunde lang oder länger ist (nun, sie zeigt keine Stunden an; nur Minuten und Sekunden). Können Sie herausfinden, wie Sie das Beispiel ändern können, um Stunden anzuzeigen?
2. Da `<audio>`-Elemente dieselbe [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-Funktionalität zur Verfügung haben, könnten Sie diesen Player leicht dazu bringen, auch mit einem `<audio>`-Element zu funktionieren. Versuchen Sie dies.
3. Können Sie herausfinden, wie Sie das innere `<div>`-Element des Timers in einen echten Sucherbar-Scroller verwandeln — d.h. wenn Sie irgendwo auf die Leiste klicken, springt es zu dieser relativen Position in der Videowiedergabe? Als Hinweis: Sie können die X- und Y-Werte der linken/rechten und oberen/unten Seiten des Elements über die [`getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect)-Methode herausfinden, und Sie können die Koordinaten eines Mausklicks über das Ereignisobjekt des Klickevents herausfinden, das auf das [`Document`](/de/docs/Web/API/Document)-Objekt aufgerufen wird. Zum Beispiel:

   ```js
   document.onclick = function (e) {
     console.log(e.x, e.y);
   };
   ```

## Siehe auch

- [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)
- [HTML-Video und -Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio) — einfacher Leitfaden zu `<video>` und `<audio>` HTML.
- [Audio- und Videobereitstellung](/de/docs/Web/Media/Guides/Audio_and_video_delivery) — ausführlicher Leitfaden zur Bereitstellung von Medien im Browser, mit vielen Tipps, Tricks und Links zu weiterführenden, fortgeschritteneren Tutorials.
- [Audio- und Videobearbeitung](/de/docs/Web/Media/Guides/Audio_and_video_manipulation) — ausführlicher Leitfaden zur Bearbeitung von Audio und Video, z.B. mit der [Canvas API](/de/docs/Web/API/Canvas_API), der [Web Audio API](/de/docs/Web/API/Web_Audio_API) und mehr.
- {{htmlelement("video")}}- und {{htmlelement("audio")}}-Referenzseiten.
- [Leitfaden zu Medientypen und -formaten im Web](/de/docs/Web/Media/Guides/Formats)

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_APIs/Introduction", "Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics", "Learn_web_development/Extensions/Client-side_APIs")}}
