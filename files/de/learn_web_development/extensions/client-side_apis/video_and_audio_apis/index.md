---
title: Video- und Audio-APIs
short-title: Video und Audio
slug: Learn_web_development/Extensions/Client-side_APIs/Video_and_audio_APIs
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_APIs/Introduction", "Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics", "Learn_web_development/Extensions/Client-side_APIs")}}

HTML kommt mit Elementen zum Einbetten von Multimedia-Inhalten in Dokumente — {{htmlelement("video")}} und {{htmlelement("audio")}} — die wiederum ihre eigenen APIs zur Steuerung der Wiedergabe, des Suchens etc. mitbringen. Dieser Artikel zeigt Ihnen, wie Sie gängige Aufgaben wie das Erstellen benutzerdefinierter Wiedergabesteuerungen ausführen können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>, insbesondere <a href="/de/docs/Learn_web_development/Core/Scripting/Object_basics">JavaScript-Objektgrundlagen</a> und grundlegender API-Abdeckung wie <a href="/de/docs/Learn_web_development/Core/Scripting/DOM_scripting">DOM-Scripting</a> und <a href="/de/docs/Learn_web_development/Core/Scripting/Network_requests">Netzwerkanfragen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        <ul>
          <li>Was Codecs sind, und die verschiedenen Video- und Audioformate.</li>
          <li>Verstehen der Schlüssel-Funktionen im Zusammenhang mit Audio und Video – abspielen, pausieren, stoppen, vor- und zurückspringen, Dauer und aktuelle Zeit.</li>
          <li>Verwendung der <code>HTMLMediaElement</code>-API, um einen grundlegenden benutzerdefinierten Mediaplayer zu erstellen, für bessere Zugänglichkeit oder mehr Konsistenz über Browser hinweg.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## HTML Video und Audio

Die {{htmlelement("video")}}- und {{htmlelement("audio")}}-Elemente ermöglichen es uns, Videos und Audios in Webseiten einzubetten. Wie in [HTML Video und Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio) gezeigt, sieht eine typische Implementierung so aus:

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

Dies erzeugt einen Videoplayer im Browser so:

{{EmbedGHLiveSample("learning-area/html/multimedia-and-embedding/video-and-audio-content/multiple-video-formats.html", '100%', 380)}}

Sie können sich ansehen, was alle HTML-Funktionen im oben verlinkten Artikel bewirken; für unsere Zwecke hier ist das interessanteste Attribut [`controls`](/de/docs/Web/HTML/Element/video#controls), das das Standardset an Wiedergabesteuerungen aktiviert. Wenn Sie dies nicht angeben, erhalten Sie keine Wiedergabesteuerungen:

{{EmbedGHLiveSample("learning-area/html/multimedia-and-embedding/video-and-audio-content/multiple-video-formats-no-controls.html", '100%', 380)}}

Dies ist für die Videowiedergabe nicht sofort nützlich, hat jedoch Vorteile. Ein großes Problem mit den nativen Browsersteuerungen ist, dass sie in jedem Browser unterschiedlich sind — nicht sehr gut für die browserübergreifende Unterstützung! Ein weiteres großes Problem ist, dass die nativen Steuerungen in den meisten Browsern nicht sehr tastaturzugänglich sind.

Sie können beide Probleme lösen, indem Sie die nativen Steuerungen ausblenden (indem Sie das `controls`-Attribut entfernen) und Ihre eigenen mit HTML, CSS und JavaScript programmieren. Im nächsten Abschnitt werden wir uns die grundlegenden Werkzeuge ansehen, die uns dafür zur Verfügung stehen.

## Die HTMLMediaElement-API

Teil der HTML-Spezifikation ist die [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-API, die Ihnen Funktionen bietet, um Video- und Audioplayer programmgesteuert zu steuern — beispielsweise [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play), [`HTMLMediaElement.pause()`](/de/docs/Web/API/HTMLMediaElement/pause) usw. Diese Schnittstelle steht sowohl den {{htmlelement("audio")}}- als auch den {{htmlelement("video")}}-Elementen zur Verfügung, da die Funktionen, die Sie implementieren möchten, nahezu identisch sind. Lassen Sie uns ein Beispiel durchgehen und dabei Funktionen hinzufügen.

Unser fertiges Beispiel sieht (und funktioniert) ungefähr so aus:

{{EmbedGHLiveSample("learning-area/javascript/apis/video-audio/finished/", '100%', 360)}}

### Erste Schritte

Um mit diesem Beispiel zu beginnen, [laden Sie unser media-player-start.zip herunter](https://github.com/mdn/learning-area/blob/main/javascript/apis/video-audio/start/media-player-start.zip) und entpacken Sie es in ein neues Verzeichnis auf Ihrer Festplatte. Wenn Sie [unser Beispiel-Repo heruntergeladen haben](https://github.com/mdn/learning-area), finden Sie es in `javascript/apis/video-audio/start/`.

An diesem Punkt sollten Sie, wenn Sie das HTML laden, einen ganz normalen HTML-Videoplayer mit den gerenderten nativen Steuerelementen sehen.

#### Erkundung des HTMLs

Öffnen Sie die HTML-Index-Datei. Sie werden eine Reihe von Funktionen sehen; das HTML wird von dem Videoplayer und seinen Steuerungen dominiert:

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

- Der gesamte Player ist in ein {{htmlelement("div")}}-Element eingeschlossen, sodass er bei Bedarf als eine Einheit gestylt werden kann.
- Das {{htmlelement("video")}}-Element enthält zwei {{htmlelement("source")}}-Elemente, sodass je nach betrachtendem Browser verschiedene Formate geladen werden können.
- Der Steuerungs-HTML-Code ist wahrscheinlich der interessanteste:

  - Wir haben vier {{htmlelement("button")}}s — abspielen/pausieren, stoppen, zurückspulen und vorspulen.
  - Jedes `<button>` hat einen `class`-Namen, ein `data-icon`-Attribut, um festzulegen, welches Symbol auf jedem Button angezeigt werden soll (wir zeigen im folgenden Abschnitt, wie das funktioniert), und ein `aria-label`-Attribut, um eine verständliche Beschreibung jedes Buttons bereitzustellen, da wir kein menschenlesbares Etikett innerhalb der Tags liefern. Die Inhalte der `aria-label`-Attribute werden von Bildschirmlesegeräten vorgelesen, wenn deren Benutzer auf die Elemente fokussieren, die sie enthalten.
  - Es gibt auch einen Timer-{{htmlelement("div")}}, der die verstrichene Zeit anzeigt, wenn das Video abgespielt wird. Nur zum Spaß bieten wir zwei Berichtmechanismen an — ein {{htmlelement("span")}}, das die verstrichene Zeit in Minuten und Sekunden enthält, und ein zusätzliches `<div>`, das wir verwenden, um eine horizontale Anzeigebar zu erstellen, die länger wird, während die Zeit abläuft. Um eine Vorstellung davon zu bekommen, wie das fertige Produkt aussehen wird, [sehen Sie sich unsere fertige Version an](https://mdn.github.io/learning-area/javascript/apis/video-audio/finished/).

#### Erkundung des CSS

Öffnen Sie jetzt die CSS-Datei und schauen Sie hinein. Das CSS für das Beispiel ist nicht zu kompliziert, aber wir heben hier die interessantesten Teile hervor. Zunächst einmal beachten Sie das `.controls`-Styling:

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

- Wir beginnen mit der {{cssxref("visibility")}} der benutzerdefinierten Steuerelemente auf `hidden` gesetzt. In unserem JavaScript werden wir später die Steuerelemente auf `visible` setzen und das `controls`-Attribut aus dem `<video>`-Element entfernen. Dies geschieht, damit, wenn das JavaScript aus einem bestimmten Grund nicht geladen wird, Benutzer trotzdem das Video mit den nativen Steuerungen verwenden können.
- Wir geben den Steuerelementen standardmäßig eine {{cssxref("opacity")}} von 0.5, damit sie weniger ablenkend sind, wenn Sie versuchen, das Video anzusehen. Nur wenn Sie über den Player fahren/fokussieren, werden die Steuerelemente mit voller Transparenz angezeigt.
- Wir ordnen die Buttons innerhalb der Steuerleiste mit Flexbox ({{cssxref("display")}}: flex) an, um die Dinge einfacher zu machen.

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

Zunächst einmal importieren wir oben im CSS mit einem {{cssxref("@font-face")}}-Block eine benutzerdefinierte Webschriftart. Dies ist eine Icon-Schriftart — alle Zeichen des Alphabets entsprechen gängigen Symbolen, die Sie möglicherweise in einer Anwendung verwenden möchten.

Als Nächstes verwenden wir erzeugten Inhalt, um ein Symbol auf jedem Button anzuzeigen:

- Wir verwenden den {{cssxref("::before")}}-Selektor, um den Inhalt vor jedem {{htmlelement("button")}}-Element anzuzeigen.
- Wir verwenden die {{cssxref("content")}}-Eigenschaft, um den Inhalt so festzulegen, dass er in jedem Fall den Inhalt des [`data-icon`](/de/docs/Learn_web_development/Howto/Solve_HTML_problems/Use_data_attributes)-Attributs gleich ist. Im Fall unseres Abspiel-Buttons enthält `data-icon` ein großes "P".
- Wir wenden die benutzerdefinierte Webschriftart auf unsere Buttons mit {{cssxref("font-family")}} an. In dieser Schriftart ist "P" tatsächlich ein "Abspiel"-Symbol, daher wird auf dem Abspiel-Button ein "Abspiel"-Symbol angezeigt.

Icon-Schriftarten sind aus vielen Gründen sehr cool — Reduzierung der HTTP-Anfragen, weil Sie diese Symbole nicht als Bilddateien herunterladen müssen, große Skalierbarkeit und die Tatsache, dass Sie Texteigenschaften zum Stylen verwenden können — wie {{cssxref("color")}} und {{cssxref("text-shadow")}}.

Last but not least werfen wir einen Blick auf das CSS für den Timer:

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

- Wir setzen das äußere `.timer`-Element auf `flex: 5`, damit es den größten Teil der Breite der Steuerleiste einnimmt. Wir geben ihm auch {{cssxref("position", "position: relative")}}, damit wir Elemente darin bequem entsprechend seinen Grenzen und nicht den Grenzen des {{htmlelement("body")}}-Elements positionieren können.
- Das innere `<div>` ist absolut positioniert, um direkt oben auf dem äußeren `<div>` zu sitzen. Es bekommt auch eine Anfangsbreite von 0, sodass Sie es überhaupt nicht sehen können. Während das Video abgespielt wird, wird die Breite über JavaScript erhöht, während das Video abläuft.
- Das `<span>` ist ebenfalls absolut positioniert, um nahe der linken Seite der Timerleiste zu liegen.
- Wir geben unserem inneren `<div>` und `<span>` auch den richtigen {{cssxref("z-index")}}, damit der Timer oben angezeigt wird und das innere `<div>` darunter. So stellen wir sicher, dass wir alle Informationen sehen können — ein Feld verdeckt nicht ein anderes.

### Implementierung des JavaScripts

Wir haben bereits eine ziemlich vollständige HTML- und CSS-Oberfläche; jetzt müssen wir nur noch alle Buttons verdrahten, um die Steuerungen zum Laufen zu bringen.

1. Erstellen Sie eine neue JavaScript-Datei auf der gleichen Verzeichnisebene wie Ihre index.html-Datei. Nennen Sie sie `custom-player.js`.
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

   - Das `<video>`-Element und die Steuerelementsleiste.
   - Die Abspiel-/Pause-, Stopp-, Rückwärts- und Vorwärts-Buttons.
   - Der äußere Timer-Wrapper `<div>`, die digitale Timer-Anzeige `<span>` und das innere `<div>`, das breiter wird, während die Zeit abläuft.

3. Fügen Sie nun das folgende am Ende Ihres Codes ein:

   ```js
   media.removeAttribute("controls");
   controls.style.visibility = "visible";
   ```

   Diese zwei Zeilen entfernen die Standard-Browsersteuerungen aus dem Video und machen die benutzerdefinierten Steuerungen sichtbar.

#### Abspielen und Pausieren des Videos

Lassen Sie uns die wahrscheinlich wichtigste Steuerung implementieren — den Abspiel-/Pause-Button.

1. Fügen Sie zunächst Folgendes am Ende Ihres Codes hinzu, sodass die `playPauseMedia()`-Funktion aufgerufen wird, wenn der Abspiel-Button geklickt wird:

   ```js
   play.addEventListener("click", playPauseMedia);
   ```

2. Nun zur Definition von `playPauseMedia()` — fügen Sie das Folgende wieder am Ende Ihres Codes hinzu:

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

   Hier verwenden wir eine [`if`](/de/docs/Web/JavaScript/Reference/Statements/if...else)-Anweisung, um zu überprüfen, ob das Video pausiert ist. Die [`HTMLMediaElement.paused`](/de/docs/Web/API/HTMLMediaElement/paused)-Eigenschaft gibt true zurück, wenn das Medium pausiert ist, was jedes Mal der Fall ist, wenn das Video nicht abgespielt wird, einschließlich dem Zeitpunkt, als es mit einer Dauer von 0 geladen wurde. Wenn es pausiert ist, setzen wir den `data-icon`-Attributwert auf dem Abspiel-Button auf "u", was ein "Pause"-Symbol darstellt, und rufen die Methode [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play) auf, um das Medium abzuspielen.

   Beim zweiten Klick wird der Button wieder zurückgeschaltet — das "Abspiel"-Symbol wird erneut angezeigt und das Video wird mit [`HTMLMediaElement.pause()`](/de/docs/Web/API/HTMLMediaElement/pause) pausiert.

#### Stoppen des Videos

1. Als nächstes fügen wir Funktionalität hinzu, um das Video anzuhalten. Fügen Sie die folgenden [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)-Zeilen unter der vorherigen hinzu, die Sie hinzugefügt haben:

   ```js
   stop.addEventListener("click", stopMedia);
   media.addEventListener("ended", stopMedia);
   ```

   Das [`click`](/de/docs/Web/API/Element/click_event)-Ereignis ist offensichtlich — wir möchten das Video anhalten, indem wir unsere `stopMedia()`-Funktion aufrufen, wenn der Stopp-Button geklickt wird. Wir möchten das Video jedoch auch anhalten, wenn es die Wiedergabe beendet hat — dies wird durch das [`ended`](/de/docs/Web/API/HTMLMediaElement/ended_event)-Ereignis angezeigt, daher richten wir auch einen Listener ein, um die Funktion beim Auslösen dieses Ereignisses ausführen zu lassen.

2. Als nächstes definieren wir `stopMedia()` — fügen Sie die folgende Funktion unterhalb von `playPauseMedia()` hinzu:

   ```js
   function stopMedia() {
     media.pause();
     media.currentTime = 0;
     play.setAttribute("data-icon", "P");
   }
   ```

   Es gibt keine `stop()`-Methode in der HTMLMediaElement-API — das Äquivalent ist, das Video zu `pause()` und seine [`currentTime`](/de/docs/Web/API/HTMLMediaElement/currentTime)-Eigenschaft auf 0 zu setzen. Das Setzen von `currentTime` auf einen Wert (in Sekunden) springt das Medium sofort zu dieser Position.

   Alles, was danach noch zu tun bleibt, ist das angezeigte Symbol auf das "Abspiel"-Symbol zu setzen. Unabhängig davon, ob das Video pausiert oder abgespielt wurde, als der Stopp-Button gedrückt wurde, möchten Sie, dass es danach zum Abspielen bereit ist.

#### Spulen vor- und zurück

Es gibt viele Möglichkeiten, wie Sie Rückspul- und Vorlauf-Funktionalität implementieren können; hier zeigen wir Ihnen eine relativ komplexe Methode, die nicht bricht, wenn die verschiedenen Buttons in einer unerwarteten Reihenfolge gedrückt werden.

1. Fügen Sie zunächst die folgenden zwei [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)-Zeilen unterhalb der vorherigen hinzu:

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

   Sie werden bemerken, dass wir zuerst zwei Variablen initialisieren — `intervalFwd` und `intervalRwd` — Sie werden später erfahren, wofür sie sind.

   Lassen Sie uns `mediaBackward()` durchgehen (die Funktionalität für `mediaForward()` ist genau dieselbe, jedoch umgekehrt):

   1. Wir löschen alle Klassen und Intervalle, die auf die Vorlauf-Funktionalität gesetzt sind — wir tun dies, weil, wenn wir die `rwd`-Taste nach dem Drücken der `fwd`-Taste drücken, wollen wir jegliche Vorlauf-Funktionalität abbrechen und durch die Rückspul-Funktionalität ersetzen. Wenn wir versuchen würden, beides gleichzeitig zu tun, würde der Player kaputtgehen.
   2. Wir nutzen eine `if`-Anweisung, um zu prüfen, ob die `active`-Klasse auf der `rwd`-Taste gesetzt wurde, was darauf hinweist, dass sie bereits gedrückt wurde. Die [`classList`](/de/docs/Web/API/Element/classList) ist eine ziemlich praktische Eigenschaft, die auf jedem Element existiert — sie enthält eine Liste aller auf diesem Element gesetzten Klassen sowie Methoden zum Hinzufügen/Entfernen von Klassen usw. Wir verwenden die Methode `classList.contains()`, um zu prüfen, ob die Liste die `active`-Klasse enthält. Dies ergibt ein booleanisches `true`/`false`-Ergebnis.
   3. Wenn `active` auf der `rwd`-Taste gesetzt wurde, entfernen wir es mit `classList.remove()`, löschen das Intervall, das beim ersten Drücken der Taste gesetzt wurde (siehe unten für mehr Erklärung), und verwenden [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play), um das Rückspulen abzubrechen und das Video normal abzuspielen.
   4. Wenn es noch nicht gesetzt wurde, fügen wir die `active`-Klasse zur `rwd`-Taste mit `classList.add()` hinzu, pausieren das Video mit [`HTMLMediaElement.pause()`](/de/docs/Web/API/HTMLMediaElement/pause), und setzen dann die Variable `intervalRwd` auf einen Aufruf von [`setInterval()`](/de/docs/Web/API/Window/setInterval). Wenn aufgerufen, erstellt `setInterval()` ein aktives Intervall, was bedeutet, dass es die Funktion, die als erstes Parameter angegeben wurde, alle x Millisekunden ausführt, wobei x der Wert des 2. Parameters ist. So lassen wir hier die Funktion `windBackward()` alle 200 Millisekunden ausführen — wir verwenden diese Funktion, um das Video kontinuierlich zurückzuspulen. Um ein [`setInterval()`](/de/docs/Web/API/Window/setInterval) zu stoppen, müssen Sie [`clearInterval()`](/de/docs/Web/API/Window/clearInterval)aufrufen und den identifizierenden Namen des Intervalls angeben, das gelöscht werden soll, was in diesem Fall der Variablenname `intervalRwd` ist (siehe den `clearInterval()`-Aufruf weiter oben in der Funktion).

3. Schließlich müssen wir die Funktionen `windBackward()` und `windForward()` definieren, die in den `setInterval()`-Aufrufen verwendet werden. Fügen Sie das folgende unter Ihre zwei vorherigen Funktionen hinzu:

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

   Wir werden nun lediglich die erste dieser Funktionen durchgehen, da sie nahezu identisch, jedoch umgekehrt zu der anderen, arbeitet. In `windBackward()` tun wir Folgendes — beachten Sie, dass diese Funktion, während das Intervall aktiv ist, einmal alle 200 Millisekunden ausgeführt wird.

   1. Wir beginnen mit einer `if`-Anweisung, die prüft, ob die aktuelle Zeit weniger als 3 Sekunden beträgt, d.h. ob das Zurückspulen um weitere drei Sekunden sie vor den Anfang des Videos zurücksetzen würde. Dadurch würde es zu seltsamem Verhalten kommen, daher stoppen wir das Video, indem wir `stopMedia()` aufrufen, die `active`-Klasse vom Rückspulknopf entfernen und das `intervalRwd`-Intervall löschen, um die Rückspulfunktionalität zu stoppen. Wenn wir diesen letzten Schritt nicht tun würden, würde das Video einfach für immer zurückspulen.
   2. Wenn die aktuelle Zeit nicht innerhalb von 3 Sekunden vom Anfang des Videos entfernt ist, ziehen wir der aktuellen Zeit drei Sekunden ab, indem wir `media.currentTime -= 3` ausführen. In der Praxis spulen wir das Video also um 3 Sekunden zurück, einmal alle 200 Millisekunden.

#### Aktualisierung der verstrichenen Zeit

Das allerletzte Stück unseres Mediaplayers, das implementiert werden muss, sind die Anzeigen der verstrichenen Zeit. Dazu werden wir eine Funktion ausführen, die die Zeit-Anzeigen jedes Mal aktualisiert, wenn das [`timeupdate`](/de/docs/Web/API/HTMLMediaElement/timeupdate_event)-Ereignis auf dem `<video>`-Element ausgelöst wird. Die Häufigkeit, mit der dieses Ereignis ausgelöst wird, hängt von Ihrem Browser, der CPU-Leistung etc. ab ([siehe diesen Beitrag auf Stack Overflow](https://stackoverflow.com/questions/9678177/how-often-does-the-timeupdate-event-fire-for-an-html5-video)).

Fügen Sie die folgende `addEventListener()`-Zeile unter die anderen hinzu:

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

Dies ist eine ziemlich lange Funktion, lassen Sie uns sie Schritt für Schritt durchgehen:

1. Zuerst berechnen wir die Anzahl der Minuten und Sekunden im [`HTMLMediaElement.currentTime`](/de/docs/Web/API/HTMLMediaElement/currentTime)-Wert.
2. Dann initialisieren wir zwei weitere Variablen — `minuteValue` und `secondValue`. Wir verwenden {{String/padStart}} um jeden Wert auf 2 Zeichen Länge zu machen, selbst wenn der numerische Wert nur ein einzelnes Zeichen lang ist.
3. Der tatsächlich anzuzeigende Zeitwert wird festgelegt als `minuteValue` plus ein Doppelpunkt-Zeichen plus `secondValue`.
4. Die [`Node.textContent`](/de/docs/Web/API/Node/textContent)-Werte des Timers werden auf den Zeitwert gesetzt, sodass er in der Benutzeroberfläche angezeigt wird.
5. Die Länge, die wir dem inneren `<div>` setzen sollten, wird berechnet, indem wir zunächst die Breite des äußeren `<div>` (die [`clientWidth`](/de/docs/Web/API/Element/clientWidth)-Eigenschaft eines Elements enthält seine Länge) berechnen und dann mit der [`HTMLMediaElement.currentTime`](/de/docs/Web/API/HTMLMediaElement/currentTime) geteilt durch die gesamte [`HTMLMediaElement.duration`](/de/docs/Web/API/HTMLMediaElement/duration) des Mediums multiplizieren.
6. Wir setzen die Breite des inneren `<div>` auf die berechnete Balkenlänge, plus "px", damit sie auf diese Anzahl von Pixeln gesetzt wird.

#### Reparatur von Abspielen und Pausieren

Es gibt ein Problem, das es noch zu beheben gilt. Wenn die Abspiel-/Pause- oder Stopp-Tasten gedrückt werden, während die Rückspul- oder Vorlauf-Funktionalität aktiv ist, funktionieren sie einfach nicht. Wie können wir es so beheben, dass sie die `rwd`-/`fwd`-Button-Funktionalität abbrechen und das Video abspielen/anhalten, wie Sie es erwarten würden? Das ist ziemlich einfach zu beheben.

Fügen Sie zunächst die folgenden Zeilen in die `stopMedia()`-Funktion ein — es ist egal, wo:

```js
rwd.classList.remove("active");
fwd.classList.remove("active");
clearInterval(intervalRwd);
clearInterval(intervalFwd);
```

Nun fügen Sie die gleichen Zeilen wieder, ganz am Anfang der `playPauseMedia()`-Funktion (direkt vor dem Start der `if`-Anweisung) hinzu.

An dieser Stelle könnten Sie die entsprechenden Zeilen aus den `windBackward()`- und `windForward()`-Funktionen löschen, da diese Funktionalität nun in der `stopMedia()`-Funktion implementiert wurde.

Hinweis: Sie könnten auch die Effizienz des Codes weiter verbessern, indem Sie eine separate Funktion erstellen, die diese Zeilen ausführt, und diese dann überall dort aufrufen, wo sie benötigt werden, anstatt die Zeilen mehrfach im Code zu wiederholen. Aber das überlassen wir Ihnen.

## Zusammenfassung

Ich denke, wir haben Ihnen in diesem Artikel genug beigebracht. Die [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-API bietet eine Fülle von Funktionalitäten, um einfache Video- und Audioplayer zu erstellen, und das ist nur die Spitze des Eisbergs. Siehe den Abschnitt "See also" unten für Links zu komplexeren und interessanteren Funktionalitäten.

Hier sind einige Vorschläge, wie Sie das bestehende Beispiel, das wir aufgebaut haben, erweitern könnten:

1. Die Zeitanzeige bricht derzeit, wenn das Video eine Stunde oder länger dauert (naja, es werden keine Stunden angezeigt; nur Minuten und Sekunden). Können Sie herausfinden, wie man das Beispiel ändert, damit es Stunden anzeigt?
2. Da `<audio>`-Elemente die gleiche [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-Funktionalität zur Verfügung haben, könnten Sie diesen Player problemlos dazu bringen, auch für ein `<audio>`-Element zu funktionieren. Versuchen Sie es.
3. Können Sie einen Weg finden, das innere `<div>`-Element des Timers in eine echte Suchleiste/Scrolleiste zu verwandeln – d.h. wenn Sie irgendwo auf die Leiste klicken, springt sie zu dieser relativen Position in der Videowiedergabe? Als Hinweis: Sie können die X- und Y-Werte der linken/rechten und oberen/unteren Seiten des Elements über die Methode [`getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect) herausfinden, und Sie können die Koordinaten eines Mausklicks über das Ereignis-Objekt des Klick-Ereignisses, aufgerufen am [`Document`](/de/docs/Web/API/Document)-Objekt, herausfinden. Zum Beispiel:

   ```js
   document.onclick = function (e) {
     console.log(e.x, e.y);
   };
   ```

## Siehe auch

- [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)
- [HTML Video und Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio) — einfacher Leitfaden zu `<video>` und `<audio>` HTML.
- [Bereitstellung von Audio und Video](/de/docs/Web/Media/Guides/Audio_and_video_delivery) — detaillierter Leitfaden zur Bereitstellung von Medien im Browser, mit vielen Tipps, Tricks und Links zu weiteren fortgeschrittenen Tutorials.
- [Audio- und Videomanipulation](/de/docs/Web/Media/Guides/Audio_and_video_manipulation) — detaillierter Leitfaden zur Manipulation von Audio und Video, z. B. mit der [Canvas API](/de/docs/Web/API/Canvas_API), [Web Audio API](/de/docs/Web/API/Web_Audio_API) und mehr.
- {{htmlelement("video")}} und {{htmlelement("audio")}} Referenzseiten.
- [Leitfaden zu Medientypen und -formaten im Web](/de/docs/Web/Media/Guides/Formats)

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_APIs/Introduction", "Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics", "Learn_web_development/Extensions/Client-side_APIs")}}
