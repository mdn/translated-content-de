---
title: Video- und Audio-APIs
short-title: Video und Audio
slug: Learn_web_development/Extensions/Client-side_APIs/Video_and_audio_APIs
l10n:
  sourceCommit: cd701f10306c8b0b9690532ff808df826818a04f
---

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_APIs/Introduction", "Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics", "Learn_web_development/Extensions/Client-side_APIs")}}

HTML wird mit Elementen geliefert, die es ermöglichen, Rich-Media-Inhalte in Dokumente einzubetten — `<video>` und `<audio>` — die wiederum eigene APIs zum Steuern der Wiedergabe, zum Suchen etc. enthalten. Dieser Artikel zeigt Ihnen, wie Sie häufige Aufgaben wie das Erstellen benutzerdefinierter Wiedergabesteuerungen ausführen können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>, insbesondere <a href="/de/docs/Learn_web_development/Core/Scripting/Object_basics">JavaScript-Objektgrundlagen</a> und grundlegende API-Abdeckung wie <a href="/de/docs/Learn_web_development/Core/Scripting/DOM_scripting">DOM-Skripting</a> und <a href="/de/docs/Learn_web_development/Core/Scripting/Network_requests">Netzwerkanfragen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        <ul>
          <li>Was Codecs sind und die verschiedenen Video- und Audioformate.</li>
          <li>Verstehen Sie die wichtigsten Funktionen im Zusammenhang mit Audio und Video — abspielen, pausieren, stoppen, rückwärts und vorwärts suchen, Dauer und aktuelle Zeit.</li>
          <li>Verwendung der `HTMLMediaElement`-API zum Erstellen eines einfachen benutzerdefinierten Media Players, für bessere Zugänglichkeit oder mehr Konsistenz über Browser hinweg.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## HTML-Video und -Audio

Die `<video>` und `<audio>` Elemente ermöglichen es uns, Video und Audio in Webseiten einzubetten. Wie wir in [HTML-Video und -Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio) gezeigt haben, sieht eine typische Implementierung so aus:

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

Dies erstellt einen Videoplayer im Browser, wie folgt:

{{EmbedGHLiveSample("learning-area/html/multimedia-and-embedding/video-and-audio-content/multiple-video-formats.html", '100%', 380)}}

Sie können nachlesen, was alle HTML-Features im oben verlinkten Artikel bewirken; für unsere Zwecke hier ist das interessanteste Attribut [`controls`](/de/docs/Web/HTML/Reference/Elements/video#controls), das das Standardsatz von Wiedergabesteuerelementen aktiviert. Wenn Sie dies nicht angeben, erhalten Sie keine Wiedergabesteuerelemente:

{{EmbedGHLiveSample("learning-area/html/multimedia-and-embedding/video-and-audio-content/multiple-video-formats-no-controls.html", '100%', 380)}}

Dies ist nicht so sofort nützlich für die Videowiedergabe, aber es hat Vorteile. Ein großes Problem bei den nativen Browser-Steuerelementen ist, dass sie in jedem Browser unterschiedlich sind — nicht sehr gut für plattformübergreifende Unterstützung! Ein weiteres großes Problem ist, dass die nativen Steuerelemente in den meisten Browsern nicht sehr tastaturzugänglich sind.

Sie können beide Probleme lösen, indem Sie die nativen Steuerungen ausblenden (indem Sie das `controls`-Attribut entfernen) und Ihre eigenen mit HTML, CSS und JavaScript programmieren. Im nächsten Abschnitt schauen wir uns die grundlegenden Werkzeuge an, die uns zur Verfügung stehen, um dies zu tun.

## Die HTMLMediaElement-API

Teil der HTML-Spezifikation, die [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) API bietet Funktionen, um Video- und Audioplayer programmatisch zu steuern — zum Beispiel [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play), [`HTMLMediaElement.pause()`](/de/docs/Web/API/HTMLMediaElement/pause) usw. Diese Schnittstelle ist sowohl für `<audio>` als auch `<video>` Elemente verfügbar, da die Funktionen, die Sie implementieren möchten, nahezu identisch sind. Gehen wir ein Beispiel durch und fügen nach und nach Funktionen hinzu.

Unser fertiges Beispiel wird so (und funktionell) aussehen wie das folgende:

{{EmbedGHLiveSample("learning-area/javascript/apis/video-audio/finished/", '100%', 360)}}

### Einstieg

Um mit diesem Beispiel zu beginnen, [laden Sie unser media-player-start.zip herunter](https://github.com/mdn/learning-area/blob/main/javascript/apis/video-audio/start/media-player-start.zip) und entpacken Sie es in ein neues Verzeichnis auf Ihrer Festplatte. Wenn Sie [unser Repositorium mit Beispielen heruntergeladen haben](https://github.com/mdn/learning-area), finden Sie es in `javascript/apis/video-audio/start/`.

An diesem Punkt, wenn Sie das HTML laden, sollten Sie einen völlig normalen HTML-Videoplayer mit den nativen Steuerelementen sehen.

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

- Der gesamte Player ist in ein `<div>` Element eingeschlossen, sodass er bei Bedarf als eine Einheit gestylt werden kann.
- Das `<video>` Element enthält zwei `<source>` Elemente, sodass je nach Browser, der die Seite anzeigt, verschiedene Formate geladen werden können.
- Das HTML der Steuerungen ist wahrscheinlich das Interessanteste:

  - Wir haben vier `<button>` — abspielen/pausieren, stoppen, zurückspulen und vorspulen.
  - Jedes `<button>` hat einen `class`-Namen, ein `data-icon` Attribut, um festzulegen, welches Symbol auf jedem Button angezeigt werden soll (wir zeigen, wie das im nächsten Abschnitt funktioniert), und ein `aria-label` Attribut, um eine verständliche Beschreibung jedes Buttons zu geben, da wir innerhalb der Tags kein menschenlesbares Label bereitstellen. Die Inhalte von `aria-label` Attributen werden von Screenreadern vorgelesen, wenn ihre Benutzer den Fokus auf die Elemente richten, die sie enthalten.
  - Es gibt auch einen Timer `<div>`, der die vergangene Zeit anzeigt, wenn das Video abgespielt wird. Nur zum Spaß stellen wir zwei Anzeigeoptionen zur Verfügung — ein `<span>`, das die vergangene Zeit in Minuten und Sekunden enthält, und ein zusätzliches `<div>`, das wir verwenden, um eine horizontale Anzeigebalken zu erstellen, der länger wird, wenn die Zeit vergeht. Um eine Vorstellung davon zu bekommen, wie das fertige Produkt aussehen wird, [schauen Sie sich unsere fertige Version an](https://mdn.github.io/learning-area/javascript/apis/video-audio/finished/).

#### Erkundung des CSS

Nun öffnen Sie die CSS-Datei und schauen Sie hinein. Das CSS für das Beispiel ist nicht zu kompliziert, aber wir heben hier die interessantesten Teile hervor. Zunächst die `.controls`-Stildefinition:

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

- Wir beginnen mit der {{cssxref("visibility")}} der benutzerdefinierten Steuerelemente, die auf `hidden` gesetzt sind. In unserem JavaScript, später, werden wir die Steuerungen auf `visible` setzen und das `controls` Attribut aus dem `<video>` Element entfernen. Dies ist so, dass Benutzer, falls das JavaScript aus irgendeinem Grund nicht geladen wird, das Video dennoch mit den nativen Steuerelementen verwenden können.
- Wir geben den Steuerungen eine {{cssxref("opacity")}} von 0,5 als Standardwert, sodass sie weniger ablenkend sind, wenn Sie versuchen, das Video anzusehen. Nur wenn Sie mit der Maus über dem Player sind oder diesen fokussieren, werden die Steuerungen mit voller Transparenz angezeigt.
- Wir ordnen die Schaltflächen innerhalb der Steuerleiste mit Flexbox ({{cssxref("display")}}: flex) an, um es einfacher zu machen.

Als nächstes schauen wir uns unsere Buttonsymbole an:

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

Zunächst importieren wir am Anfang des CSS mit einem {{cssxref("@font-face")}} Block eine benutzerdefinierte Webschrift. Dies ist eine Icon-Schriftart — alle Zeichen des Alphabets entsprechen gebräuchlichen Symbolen, die Sie in einer Anwendung verwenden könnten.

Als Nächstes verwenden wir generierten Inhalt, um ein Symbol auf jedem Button anzuzeigen:

- Wir verwenden den {{cssxref("::before")}} Selektor, um den Inhalt vor jedem `<button>` Element anzuzeigen.
- Wir verwenden die {{cssxref("content")}} Eigenschaft, um den in jedem Fall anzuzeigenden Inhalt gleich dem Inhalt des [`data-icon`](/de/docs/Web/HTML/How_to/Use_data_attributes) Attributs zu setzen. Im Fall unseres Abspielbuttons enthält `data-icon` ein großes „P“.
- Wir wenden die benutzerdefinierte Webschrift auf unsere Buttons an, indem wir {{cssxref("font-family")}} verwenden. In dieser Schriftart ist „P“ tatsächlich ein „Abspielen“-Symbol, daher hat der Wiedergabe-Button ein „Abspielen“-Symbol angezeigt.

Icon-Schriften sind aus vielen Gründen sehr cool — sie reduzieren HTTP-Anfragen, weil man diese Symbole nicht als Bilddateien herunterladen muss, sind hervorragend skalierbar und man kann sie mit Stileigenschaften wie {{cssxref("color")}} und {{cssxref("text-shadow")}} stilisieren.

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

- Wir setzen das äußere `.timer` Element auf `flex: 5`, damit es den Großteil der Breite der Steuerleiste einnimmt. Wir geben ihm auch {{cssxref("position", "position: relative")}}, damit wir Elemente innerhalb davon bequem entsprechend seiner Grenzen positionieren können, und nicht den Grenzen des `<body>` Elements.
- Das innere `<div>` ist absolut positioniert, um direkt oben auf dem äußeren `<div>` zu sitzen. Es wird auch mit einer Anfangsbreite von 0 versehen, sodass es überhaupt nicht zu sehen ist. Wenn das Video abgespielt wird, wird mit JavaScript die Breite erhöht, während das Video abläuft.
- Das `<span>` ist auch absolut positioniert, um sich auf der linken Seite der Timerleiste zu befinden.
- Wir geben unserem inneren `<div>` und `<span>` auch den richtigen Betrag an {{cssxref("z-index")}}, damit der Timer oben angezeigt wird und das innere `<div>` darunter. Auf diese Weise stellen wir sicher, dass alle Informationen sichtbar sind — ein Feld verdeckt nicht das andere.

### Implementierung des JavaScript

Wir haben bereits ein ziemlich komplettes HTML- und CSS-Interface; jetzt müssen wir nur noch alle Buttons verkabeln, um die Steuerungen funktionstüchtig zu machen.

1. Erstellen Sie eine neue JavaScript-Datei auf derselben Verzeichnisebene wie Ihre index.html Datei. Nennen Sie sie `custom-player.js`.
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

   - Das `<video>` Element und die Steuerungsleiste.
   - Die Play-/Pause-, Stop-, Rückspul- und Schnellvorlauf-Buttons.
   - Der äußere Timer-Wrapper `<div>`, die digitale Timeranzeige `<span>`, und das innere `<div>`, das breiter wird, während die Zeit abläuft.

3. Fügen Sie als nächstes am Ende Ihres Codes das Folgende ein:

   ```js
   media.removeAttribute("controls");
   controls.style.visibility = "visible";
   ```

   Diese beiden Zeilen entfernen die Standardbrowser-Steuerungen aus dem Video und machen die benutzerdefinierten Steuerungen sichtbar.

#### Abspielen und Anhalten des Videos

Implementieren wir wahrscheinlich die wichtigste Steuerung — den Play/Pause-Button.

1. Fügen Sie zunächst am Ende Ihres Codes das Folgende hinzu, damit die Funktion `playPauseMedia()` aufgerufen wird, wenn der Play-Button gedrückt wird:

   ```js
   play.addEventListener("click", playPauseMedia);
   ```

2. Nun definieren wir `playPauseMedia()` — fügen Sie das folgende, erneut am Ende Ihres Codes, hinzu:

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

   Hier verwenden wir eine [`if`](/de/docs/Web/JavaScript/Reference/Statements/if...else) Anweisung, um zu prüfen, ob das Video angehalten wurde. Die [`HTMLMediaElement.paused`](/de/docs/Web/API/HTMLMediaElement/paused) Property gibt `true` zurück, wenn das Medium angehalten ist, was jedes Mal der Fall ist, wenn das Video nicht spielt, einschließlich wenn es nach dem ersten Laden auf 0 Dauer gesetzt ist. Wenn es angehalten ist, setzen wir den `data-icon` Attributwert auf dem Play-Button auf "u", was ein "pausiert"-Symbol ist, und rufen die [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play) Methode auf, um das Medium abzuspielen.

   Beim zweiten Klick wird der Button wieder umgeschaltet — das "play"-Symbol wird wieder angezeigt und das Video wird mit [`HTMLMediaElement.pause()`](/de/docs/Web/API/HTMLMediaElement/pause) angehalten.

#### Stoppen des Videos

1. Als nächstes fügen wir Funktionalität hinzu, um das Video zu stoppen. Fügen Sie die folgenden [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) Zeilen unter den vorherigen hinzu:

   ```js
   stop.addEventListener("click", stopMedia);
   media.addEventListener("ended", stopMedia);
   ```

   Das [`click`](/de/docs/Web/API/Element/click_event) Ereignis ist offensichtlich — wir möchten das Video stoppen, indem wir unsere Funktion `stopMedia()` ausführen, wenn der Stop-Button gedrückt wird. Wir wollen das Video jedoch auch anhalten, wenn es zu Ende gespielt wird — dies wird durch das [`ended`](/de/docs/Web/API/HTMLMediaElement/ended_event) Ereignis angezeigt, daher richten wir auch einen Listener ein, der die Funktion beim Auslösen dieses Ereignisses ausführt.

2. Definieren wir nun `stopMedia()` — fügen Sie die folgende Funktion unterhalb von `playPauseMedia()` hinzu:

   ```js
   function stopMedia() {
     media.pause();
     media.currentTime = 0;
     play.setAttribute("data-icon", "P");
   }
   ```

   Es gibt keine `stop()` Methode auf der HTMLMediaElement API — das Äquivalent ist, das Video zu `pause()` und seine [`currentTime`](/de/docs/Web/API/HTMLMediaElement/currentTime) Eigenschaft auf 0 zu setzen. Wenn `currentTime` auf einen Wert (in Sekunden) gesetzt wird, springt das Medium sofort zu dieser Position.

   Alles, was es noch zu tun gibt, ist das angezeigte Symbol auf das "play"-Symbol zu setzen. Unabhängig davon, ob das Video angehalten oder gespielt wurde, als der Stop-Button gedrückt wurde, möchten Sie, dass es danach bereit zum Abspielen ist.

#### Vorwärts- und Rückwärtssuche

Es gibt viele Möglichkeiten, wie Sie die Rückspul- und Schnellvorlauffunktionalität implementieren können; hier zeigen wir Ihnen eine relativ komplexe Methode, die nicht bricht, wenn die verschiedenen Schaltflächen in unerwarteter Reihenfolge gedrückt werden.

1. Fügen Sie zuerst die folgenden zwei [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) Zeilen unter den vorherigen hinzu:

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

   Sie werden feststellen, dass wir zunächst zwei Variablen initialisieren — `intervalFwd` und `intervalRwd` — Sie werden später erfahren, wofür sie da sind.

   Gehen wir `mediaBackward()` durch (die Funktionalität für `mediaForward()` ist genau dieselbe, aber in umgekehrter Richtung):

   1. Wir löschen alle Klassen und Intervalle, die auf die Vorlauffunktionalität gesetzt sind — wir machen dies, weil, wenn wir die `rwd` Schaltfläche nach dem Drücken der `fwd` Taste drücken, wir die Vorlauffunktionalität abbrechen und durch die Rückwärtsfunktionalität ersetzen möchten. Wenn wir versuchen, beides gleichzeitig zu machen, würde der Player kaputtgehen.
   2. Wir verwenden eine `if` Anweisung, um zu prüfen, ob die `active` Klasse auf dem `rwd` Button gesetzt wurde, was anzeigt, dass sie bereits gedrückt wurde. Der [`classList`](/de/docs/Web/API/Element/classList) ist eine ziemlich nützliche Eigenschaft, die auf jedem Element existiert — es enthält eine Liste aller auf das Element gesetzten Klassen sowie Methoden zum Hinzufügen/Entfernen von Klassen usw. Wir verwenden die `classList.contains()` Methode, um zu prüfen, ob die Liste die `active` Klasse enthält. Dies liefert ein boolean `true`/`false` Ergebnis.
   3. Wenn `active` auf dem `rwd` Button gesetzt ist, entfernen wir es mit `classList.remove()`, löschen das Intervall, das gesetzt wurde, als der Button erstmals gedrückt wurde (siehe unten für mehr Erklärung), und verwenden [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play), um das Zurückspulen abzubrechen und das Video normal abspielen zu lassen.
   4. Wenn es noch nicht gesetzt wurde, fügen wir die `active` Klasse dem `rwd` Button mit `classList.add()` hinzu, pausieren das Video mit [`HTMLMediaElement.pause()`](/de/docs/Web/API/HTMLMediaElement/pause), dann setzen wir die Variable `intervalRwd` gleich einem [`setInterval()`](/de/docs/Web/API/Window/setInterval) Aufruf. Wenn `setInterval()` aufgerufen wird, erstellt es ein aktives Intervall, was bedeutet, dass es die Funktion, die als erster Parameter übergeben wurde, alle x Millisekunden ausführt, wobei x der Wert des 2. Parameters ist. Hier führen wir also die `windBackward()` Funktion alle 200 Millisekunden aus — wir verwenden diese Funktion, um das Video ständig rückwärts zu spulen. Um ein laufendes [`setInterval()`](/de/docs/Web/API/Window/setInterval) zu stoppen, müssen Sie [`clearInterval()`](/de/docs/Web/API/Window/clearInterval) aufrufen, wobei Sie den Identifikationsnamen des zu löschenden Intervalls angeben, der in diesem Fall `intervalRwd` ist (siehe den `clearInterval()` Aufruf früher in der Funktion).

3. Schließlich müssen wir die `windBackward()` und `windForward()` Funktionen definieren, die in den `setInterval()` Aufrufen aufgerufen werden. Fügen Sie das Folgende unter Ihren beiden vorherigen Funktionen hinzu:

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

   Wir werden nur die erste dieser Funktionen durchgehen, da sie fast identisch, aber in umgekehrter Richtung, zu der anderen arbeiten. In `windBackward()` tun wir Folgendes — bedenken Sie, dass diese Funktion bei aktivem Intervall einmal alle 200 Millisekunden ausgeführt wird.

   1. Wir beginnen mit einer `if` Anweisung, die prüft, ob die aktuelle Zeit weniger als 3 Sekunden beträgt, d.h. wenn das Zurückspulen um weitere drei Sekunden es wieder zum Anfang des Videos zurückführen würde. Dies würde seltsames Verhalten verursachen, daher wenn dies der Fall ist, stoppen wir das Video, indem wir `stopMedia()` aufrufen, entfernen die `active` Klasse vom Rückspul-Button, und löschen das `intervalRwd` Intervall, um die Rückspul-Funktionalität zu stoppen. Wenn wir diesen letzten Schritt nicht tun, würde das Video einfach pausenlos immer weiter rückwärts spulen.
   2. Wenn die aktuelle Zeit nicht innerhalb von 3 Sekunden nach dem Start des Videos liegt, reduzieren wir die aktuelle Zeit um drei Sekunden, indem wir `media.currentTime -= 3` ausführen. Im Grunde spulen wir das Video also um 3 Sekunden zurück, einmal alle 200 Millisekunden.

#### Aktualisierung der verstrichenen Zeit

Das allerletzte Stück unseres Media Players, das implementiert werden muss, sind die Anzeigen für verstrichene Zeit. Dazu werden wir eine Funktion ausführen, um die Zeitanzeigen jedes Mal zu aktualisieren, wenn das [`timeupdate`](/de/docs/Web/API/HTMLMediaElement/timeupdate_event) Ereignis auf dem `<video>` Element ausgelöst wird. Die Häufigkeit, mit der dieses Ereignis aufgerufen wird, hängt von Ihrem Browser, Ihrer CPU-Leistung usw. ab ([siehe diesen Stack Overflow-Beitrag](https://stackoverflow.com/questions/9678177/how-often-does-the-timeupdate-event-fire-for-an-html5-video)).

Fügen Sie die folgende `addEventListener()` Zeile direkt unter den anderen hinzu:

```js
media.addEventListener("timeupdate", setTime);
```

Nun zur Definition der `setTime()` Funktion. Fügen Sie dieses am Ende Ihrer Datei hinzu:

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

Dies ist eine ziemlich lange Funktion, daher gehen wir sie Schritt für Schritt durch:

1. Zuerst arbeiten wir die Anzahl der Minuten und Sekunden in dem [`HTMLMediaElement.currentTime`](/de/docs/Web/API/HTMLMediaElement/currentTime) Wert aus.
2. Dann initialisieren wir zwei weitere Variablen — `minuteValue` und `secondValue`. Wir verwenden {{jsxref("String/padStart", "padStart()")}}, um jeden Wert auf 2 Zeichen zu setzen, selbst wenn der numerische Wert nur eine Ziffer hat.
3. Der tatsächlich anzuzeigende Zeitwert wird als `minuteValue` plus einem Doppelpunkt plus `secondValue` gesetzt.
4. Der [`Node.textContent`](/de/docs/Web/API/Node/textContent) Wert des Timers wird auf den Zeitwert gesetzt, sodass er in der Benutzeroberfläche angezeigt wird.
5. Die Länge, auf die wir das innere `<div>` setzen sollen, wird gefunden, indem wir die Breite des äußeren `<div>` (die [`clientWidth`](/de/docs/Web/API/Element/clientWidth) Eigenschaft eines Elements enthält seine Breite) herausfinden und sie dann mit der [`HTMLMediaElement.currentTime`](/de/docs/Web/API/HTMLMediaElement/currentTime) geteilt durch die Gesamt-`[`HTMLMediaElement.duration`](/de/docs/Web/API/HTMLMediaElement/duration)` des Mediums multiplizieren.
6. Wir setzen die Breite des inneren `<div>` gleich der berechneten Balkenlänge, plus "px", sodass es auf diese Anzahl Pixel gesetzt wird.

#### Beheben der Abspiel- und Pausefunktion

Ein Problem bleibt noch zu beheben. Wenn die Play/Pause- oder Stop-Buttons gedrückt werden, während die Rückspul- oder Schnellvorlauffunktionalität aktiv ist, funktionieren sie einfach nicht. Wie können wir es beheben, sodass sie die `rwd`/`fwd` Button-Funktionalität abbrechen und das Video so abspielen/stoppen, wie Sie es erwarten würden? Dies ist relativ einfach zu beheben.

Zuerst fügen Sie diese Zeilen innerhalb der Funktion `stopMedia()` hinzu — irgendwo innerhalb funktioniert:

```js
rwd.classList.remove("active");
fwd.classList.remove("active");
clearInterval(intervalRwd);
clearInterval(intervalFwd);
```

Fügen Sie nun dieselben Zeilen erneut am Anfang der Funktion `playPauseMedia()` hinzu (direkt vor dem Beginn der `if` Anweisung).

An diesem Punkt könnten Sie die entsprechenden Zeilen aus den Funktionen `windBackward()` und `windForward()` löschen, da diese Funktionalität stattdessen in der Funktion `stopMedia()` implementiert wurde.

Hinweis: Sie können die Effizienz des Codes weiter verbessern, indem Sie eine separate Funktion erstellen, die diese Zeilen ausführt, und sie dann überall dort aufrufen, wo sie benötigt wird, anstatt die Zeilen mehrfach im Code zu wiederholen. Aber das überlassen wir Ihnen.

## Zusammenfassung

Ich glaube, wir haben Ihnen genug in diesem Artikel beigebracht. Die [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) API bietet eine Fülle an Funktionalität, um einfache Video- und Audioplayer zu erstellen, und das ist nur die Spitze des Eisbergs. Siehe den Abschnitt "Siehe auch" unten für Links zu komplexerer und interessanterer Funktionalität.

Hier einige Vorschläge, wie Sie das bestehende Beispiel, das wir aufgebaut haben, verbessern können:

1. Die Zeitanzeige bricht derzeit zusammen, wenn das Video eine Stunde oder länger dauert (nun, es wird keine Stunden anzeigen; nur Minuten und Sekunden). Können Sie herausfinden, wie Sie das Beispiel ändern können, damit es Stunden anzeigt?
2. Da `<audio>` Elemente dieselbe [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) Funktionalität bereitstellen, könnten Sie diesen Player auch mit einem `<audio>` Element arbeiten lassen. Versuchen Sie es.
3. Können Sie herausfinden, wie Sie das Timer-innere `<div>`-Element in eine echte Suchleiste/Scrollleiste verwandeln — d.h. wenn Sie irgendwo auf die Leiste klicken, springt es zu dieser relativen Position in der Videowiedergabe? Als Hinweis könnten Sie die X und Y Werte der linken/rechten und oberen/unteren Seiten des Elements über die [`getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect) Methode herausfinden, und Sie können die Koordinaten eines Mausklicks über das Ereignisobjekt des Klickereignisses, aufgerufen auf dem [`Document`](/de/docs/Web/API/Document) Objekt, herausfinden. Zum Beispiel:

   ```js
   document.onclick = function (e) {
     console.log(e.x, e.y);
   };
   ```

## Siehe auch

- [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)
- [HTML-Video und -Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio) — einfacher Leitfaden zu `<video>` und `<audio>` HTML.
- [Audio- und Videoauslieferung](/de/docs/Web/Media/Guides/Audio_and_video_delivery) — detaillierter Leitfaden zur Auslieferung von Medien im Browser, mit vielen Tipps, Tricks und Links zu weiteren fortgeschrittenen Tutorials.
- [Audio- und Videomanipulation](/de/docs/Web/Media/Guides/Audio_and_video_manipulation) — detaillierter Leitfaden zur Manipulation von Audio und Video, z. B. mit [Canvas API](/de/docs/Web/API/Canvas_API), [Web Audio API](/de/docs/Web/API/Web_Audio_API) und mehr.
- `<video>` und `<audio>` Referenzseiten.
- [Leitfaden zu Medientypen und -formaten im Web](/de/docs/Web/Media/Guides/Formats)

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_APIs/Introduction", "Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics", "Learn_web_development/Extensions/Client-side_APIs")}}
