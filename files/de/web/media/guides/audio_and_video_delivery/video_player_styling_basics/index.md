---
title: Grundlagen der Videoplayer-Stilgestaltung
slug: Web/Media/Guides/Audio_and_video_delivery/Video_player_styling_basics
l10n:
  sourceCommit: 63cbf204323f117a2a80c7aa6273e50253ab9d07
---

Im vorherigen [Artikel über einen plattformübergreifenden Videoplayer](/de/docs/Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player) beschrieben wir, wie Sie einen plattformübergreifenden HTML-Videoplayer mit Hilfe der Media- und Fullscreen-APIs erstellen können. Dieser Folgeartikel behandelt die Gestaltung dieses benutzerdefinierten Players, einschließlich der Anpassung an verschiedene Bildschirmgrößen.

## Das Beispiel in Aktion

![Ein Videoplayer mit Wiedergabe-, Stopp-, Lautstärke- und Vollbildsteuerung, der das Bild eines Soldaten zeigt.](video-player-styled.png)

Den Code für das [aktualisierte, gestylte Beispiel](https://github.com/iandevlin/iandevlin.github.io/tree/master/mdn/video-player-styled) finden Sie auf GitHub, und Sie können es [live ansehen](https://iandevlin.github.io/mdn/video-player-styled/).

## Vorläufige Änderungen am ursprünglichen Beispiel

Dieser Abschnitt fasst die Modifikationen zusammen, die am [ursprünglichen Videoplayer-Beispiel](https://github.com/iandevlin/iandevlin.github.io/tree/master/mdn/video-player) vorgenommen wurden, um die Styling-Aufgabe zu erleichtern, bevor der Großteil der Arbeit begann.

### HTML-Auszeichnung

Es wurden einige Änderungen an der HTML-Auszeichnung vorgenommen, die im vorherigen Artikel gezeigt wurde. Die benutzerdefinierten Videosteuerungen und das `{{htmlelement("progress")}}`-Element sind nun in `{{htmlelement("div")}}`-Elementen enthalten, anstatt sich innerhalb von ungeordneten Listeneinträgen zu befinden.

Die Auszeichnung für die benutzerdefinierten Steuerungen sieht nun wie folgt aus:

```html
<div id="video-controls" class="controls" data-state="hidden">
  <button id="play-pause" type="button" data-state="play">Play/Pause</button>
  <button id="stop" type="button" data-state="stop">Stop</button>
  <div class="progress">
    <progress id="progress" value="0" min="0">
      <span id="progress-bar"></span>
    </progress>
  </div>
  <button id="mute" type="button" data-state="mute">Mute/Unmute</button>
  <button id="vol-inc" type="button" data-state="vol-up">Vol+</button>
  <button id="vol-dec" type="button" data-state="vol-down">Vol-</button>
  <button id="fs" type="button" data-state="go-fullscreen">Fullscreen</button>
</div>
```

### Verwandte CSS-Änderung

Im vorherigen Artikel wurde die `display`-Eigenschaft der Videosteuerungen auf `block` gesetzt, um sie anzuzeigen. Dies wurde nun geändert, um ein [`data-state`-Attribut](https://ultimatecourses.com/blog/stop-toggling-classes-with-js-use-behaviour-driven-dom-manipulation-with-data-states) zu verwenden, das auch bereits für die Handhabung der [Fullscreen-Implementierung](/de/docs/Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player#fullscreen) in diesem Code verwendet wird.

Diese "data-state"-Idee wird auch verwendet, um den aktuellen Zustand der Schaltflächen innerhalb der Videosteuerungen festzulegen, was spezielles Zustandsstyling ermöglicht.

### JavaScript

Wie bereits erwähnt, wird ein `data-state`-Attribut an verschiedenen Stellen zu Styling-Zwecken verwendet und diese werden mithilfe von JavaScript gesetzt. Spezifische Implementierungen werden an geeigneten Stellen unten erwähnt.

## Gestaltung

Der hier verwendete Stil des resultierenden Videoplayers ist ziemlich einfach gehalten - das ist beabsichtigt, da der Zweck darin besteht zu zeigen, wie ein solcher Videoplayer gestylt und reaktionsfähig gemacht werden kann.

> [!NOTE]
> In einigen Fällen wird hier auf einen grundlegenden CSS-Code in den Beispielen verzichtet, da seine Verwendung entweder offensichtlich oder nicht speziell relevant für das Styling des Videoplayers ist.

### Grundstil

Das HTML-Video und seine Steuerungen sind alle innerhalb eines `{{htmlelement("figure")}}`-Elements enthalten, das eine maximale Breite und Höhe (basierend auf den Abmessungen des verwendeten Videos) erhält und innerhalb der Seite zentriert wird:

```css
figure {
  max-width: 64rem;
  width: 100%;
  max-height: 30.875rem;
  height: 100%;
  margin: 1.25rem auto;
  padding: 1.051%;
  background-color: #666;
}
```

Der Container der Videosteuerungen benötigt ebenfalls etwas Styling, damit er korrekt eingerichtet ist:

```css
.controls {
  width: 100%;
  height: 8.0971659919028340080971659919028%; /* of figure's height */
  position: relative;
}
```

Die Höhe der `.controls`-Klasse wird auf (einen sehr präzisen!) Prozentsatz des umgebenden `{{htmlelement("figure")}}`-Elements festgelegt (dies wurde experimentell basierend auf der erforderlichen Höhe der Schaltfläche ermittelt). Seine Position wird auch speziell auf `relative` gesetzt, was für seine Reaktionsfähigkeit erforderlich ist (mehr dazu später).

Wie bereits erwähnt, wird nun ein `data-state`-Attribut verwendet, um anzuzeigen, ob die Videosteuerungen sichtbar sind oder nicht, und diese müssen ebenfalls gestylt werden:

```css
.controls[data-state="hidden"] {
  display: none;
}

.controls[data-state="visible"] {
  display: block;
}
```

Es gibt eine Reihe von Eigenschaften, die auch für alle Elemente innerhalb der Videosteuerungen festgelegt werden müssen:

```css
.controls > * {
  float: left;
  width: 3.90625%;
  height: 100%;
  margin-left: 0.1953125%;
  display: block;
}

.controls > *:first-child {
  margin-left: 0;
}
```

Alle Elemente werden links gefloatet, da sie nebeneinander ausgerichtet werden sollen, und jedes Element wird so eingestellt, dass es eine `width` von fast 4 % hat (auch hier wurde der tatsächliche Wert basierend auf den erforderlichen Abmessungen der Schaltflächen berechnet) und eine `height` von 100 %. Ein Wert für `margin-left` wird ebenfalls gesetzt, aber das erste Element (in diesem Fall die Wiedergabe/Pause-Schaltfläche) hat diese Eigenschaft durch den Wert 0 überschrieben.

Der `{{htmlelement("div")}}`-Container für das `{{htmlelement("progress")}}`-Element benötigt ebenfalls spezifische Einstellungen; er wird viel breiter als die anderen Kindelemente gemacht und sein Cursor-Wert wird auf Pointer gesetzt:

```css
.controls .progress {
  cursor: pointer;
  width: 75.390625%;
}
```

### Schaltflächen

Die erste große Styling-Aufgabe besteht darin, die Schaltflächen der Videosteuerung tatsächlich wie echte Schaltflächen aussehen und funktionieren zu lassen.

Jede Schaltfläche erhält ein grundlegendes Styling:

```css
.controls button {
  border: none;
  cursor: pointer;
  background: transparent;
  background-size: contain;
  background-repeat: no-repeat;
}
```

Standardmäßig haben alle `{{htmlelement("button")}}`-Elemente einen Rand, daher wird dieser entfernt. Da Hintergrundbilder verwendet werden, um passende Symbole anzuzeigen, wird die Hintergrundfarbe der Schaltfläche auf transparent, nicht wiederholend und das Element sollte das Bild vollständig enthalten, gesetzt.

Die `:hover`- und `:focus`-Zustände werden dann für jede Schaltfläche gesetzt, die die Deckkraft der Schaltfläche ändern:

```css
.controls button:hover,
.controls button:focus {
  opacity: 0.5;
}
```

Um geeignete Schaltflächensymbole zu erhalten, wurde ein Set von kostenlosen allgemeinen Steuerelementsymbolen aus dem Internet heruntergeladen. Jedes Bild wurde dann in einen base64-codierten String umgewandelt (unter Verwendung eines Online-[Base64-Bildencoders](https://www.base64-image.de/)), da die Bilder ziemlich klein sind, sind die resultierenden codierten Strings ziemlich kurz.

Da einige Schaltflächen eine doppelte Funktion haben, z.B. Wiedergabe/Pause und Stummschalten/Stummschaltung aufheben, haben diese Schaltflächen verschiedene Zustände, die gestylt werden müssen. Wie bereits erwähnt, wird eine `data-state`-Variable verwendet, um anzuzeigen, in welchem Zustand sich solche Schaltflächen gerade befinden.

Zum Beispiel hat die Wiedergabe/Pause-Schaltfläche die folgenden Hintergrundbilddefinitionen (die vollständigen Base64-Strings wurden der Kürze halber ausgelassen):

```css
.controls button[data-state="play"] {
  background-image: url("data:image/png;base64,iVBORw0KGgoAAA…");
}

.controls button[data-state="pause"] {
  background-image: url("data:image/png;base64,iVBORw0KGgoAAA…");
}
```

Wenn sich der `data-state` der Schaltfläche ändert, wird auch das entsprechende Bild geändert. Alle anderen Schaltflächen werden ähnlich behandelt.

### Fortschrittsbalken

Das `{{htmlelement("progress")}}`-Element hat den folgenden grundlegenden Stil:

```css
.controls progress {
  display: block;
  width: 100%;
  height: 81%;
  margin-top: 0.125rem;
  border: none;
  color: #0095dd;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  border-radius: 2px;
}
```

Ebenso wie die `{{htmlelement("button")}}`-Elemente hat auch `{{htmlelement("progress")}}` standardmäßig einen Rand, der hier entfernt wird. Sie bekommt auch eine leicht abgerundete Ecke aus ästhetischen Gründen.

Wie im [vorherigen Artikel](/de/docs/Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player) erwähnt, gibt es einen Fallback für Browser, die das `{{htmlelement("progress")}}`-Element nicht unterstützen; dies muss ebenfalls entsprechend gestylt werden:

```css
.controls progress[data-state="fake"] {
  background: #e6e6e6;
  height: 65%;
}
.controls progress span {
  width: 0%;
  height: 100%;
  display: inline-block;
  background-color: #2a84cd;
}
```

Eine `.data-state`-Klasse wird hier auch verwendet, wenn ein `{{htmlelement("progress")}}`-Element "gefälscht" wird; wenn es sich in diesem Zustand befindet, muss die Hintergrundfarbe gesetzt werden. Das interne `{{htmlelement("span")}}`-Element, das als der eigentliche Fortschrittsanteil des gefälschten Fortschrittsbalkens verwendet wird, hat seine Breite zunächst auf 0 % gesetzt (es wird über JavaScript aktualisiert) und es hat auch seine Hintergrundfarbe gesetzt.

Es gibt einige browserspezifische Eigenschaften, die festgelegt werden müssen, um sicherzustellen, dass Firefox und Chrome die erforderliche Farbe für den Fortschrittsbalken verwenden:

```css
.controls progress::-moz-progress-bar {
  background-color: #0095dd;
}

.controls progress::-webkit-progress-value {
  background-color: #0095dd;
}
```

Obwohl dieselben Eigenschaften auf denselben Wert gesetzt werden, müssen diese Regeln separat definiert werden, da Chrome sie sonst ignoriert.

## JavaScript

Das war es wirklich für das unmittelbare Styling; die nächste Aufgabe besteht darin, eine Reihe von JavaScript-Änderungen vorzunehmen, um sicherzustellen, dass alles wie erwartet funktioniert.

### Steuerungssichtbarkeit

Die erste Änderung ist einfach: Der `data-state` für das Anzeigen der Videosteuerungen, wenn JavaScript im Browser verfügbar ist, muss nun gesetzt werden:

```js
// Display the user defined video controls
videoControls.setAttribute("data-state", "visible");
```

### Fortschrittsbalken-Unterstützung

Es muss auch eine Überprüfung vorgenommen werden, um den "falschen" Fortschrittsbalken einzurichten, wenn der Browser das `{{htmlelement("progress")}}`-Element nicht unterstützt:

```js
const supportsProgress = document.createElement("progress").max !== undefined;
if (!supportsProgress) progress.setAttribute("data-state", "fake");
```

### Schaltflächenfunktionen

Dieser Abschnitt befasst sich mit dem JavaScript, das für die Implementierung der Schaltflächenfunktionen erforderlich ist.

#### Play/Pause und Stumm

Jetzt da die Schaltflächen tatsächlich wie Schaltflächen aussehen und Bilder enthalten, die anzeigen, was sie tun, müssen einige Änderungen vorgenommen werden, damit sich die Schaltflächen mit doppelfunktion (wie z. B. die Wiedergabe/Pause-Schaltfläche) im richtigen "Zustand" befinden und das richtige Bild anzeigen. Dazu wird eine neue Funktion namens `changeButtonState()` definiert, die eine Typvariabel akzeptiert, die die Funktionalität der Schaltfläche angibt:

```js
function changeButtonState(type) {
  if (type === "play-pause") {
    // Play/Pause button
    if (video.paused || video.ended) {
      playPause.setAttribute("data-state", "play");
    } else {
      playPause.setAttribute("data-state", "pause");
    }
  } else if (type === "mute") {
    // Mute button
    mute.setAttribute("data-state", video.muted ? "unmute" : "mute");
  }
}
```

Diese Funktion wird dann von den relevanten Ereignishandlern aufgerufen:

```js
video.addEventListener(
  "play",
  () => {
    changeButtonState("play-pause");
  },
  false,
);

video.addEventListener(
  "pause",
  () => {
    changeButtonState("play-pause");
  },
  false,
);

stop.addEventListener("click", (e) => {
  video.pause();
  video.currentTime = 0;
  progress.value = 0;

  // Update the play/pause button's 'data-state' which allows the correct button image to be set via CSS
  changeButtonState("play-pause");
});

mute.addEventListener("click", (e) => {
  video.muted = !video.muted;
  changeButtonState("mute");
});
```

Sie haben vielleicht bemerkt, dass es neue Handler gibt, bei denen auf die `play`- und `pause`-Ereignisse auf dem Video reagiert wird. Es gibt einen Grund dafür! Obwohl die Standardsteuerung des Browsers für das Video deaktiviert wurde, machen sie viele Browser durch Rechtsklick auf das HTML-Video zugänglich. Das bedeutet, dass ein Benutzer das Video von diesen Steuerungen aus abspielen/anhalten könnte, was die Schaltflächen des benutzerdefinierten Steuerungssets aus dem Gleichgewicht bringen würde. Wenn ein Benutzer die Standardsteuerungen verwendet, werden die definierten Media API-Ereignisse – wie `play` und `pause` – ausgelöst, was genutzt werden kann, um sicherzustellen, dass die benutzerdefinierten Steuerschaltflächen synchron gehalten werden. Dazu muss ein neuer Click-Handler für die Wiedergabe/Pause-Schaltfläche definiert werden, sodass diese auch die `play`- und `pause`-Ereignisse auslöst:

```js
playPause.addEventListener("click", (e) => {
  if (video.paused || video.ended) {
    video.play();
  } else {
    video.pause();
  }
});
```

#### Lautstärke

Die `alterVolume()`-Funktion, die aufgerufen wird, wenn die Lautstärkeschaltflächen des Players geklickt werden, ändert sich ebenfalls – sie ruft nun eine neue Funktion namens `checkVolume()` auf:

```js
function checkVolume(dir) {
  if (dir) {
    const currentVolume = Math.floor(video.volume * 10) / 10;
    if (dir === "+" && currentVolume < 1) {
      video.volume += 0.1;
    } else if (dir === "-" && currentVolume > 0) {
      video.volume -= 0.1;
    }

    // If the volume has been turned off, also set it as muted
    // Note: can only do this with the custom control set as when the 'volumechange' event is raised,
    // there is no way to know if it was via a volume or a mute change
    video.muted = currentVolume <= 0;
  }
  changeButtonState("mute");
}

const alterVolume = (dir) => {
  checkVolume(dir);
};
```

Diese neue `checkVolume()`-Funktion macht dasselbe wie die `alterVolume()`, aber sie setzt auch den Zustand der Stummschalttaste abhängig von der aktuellen Lautstärkeeinstellung des Videos. `checkVolume()` wird auch aufgerufen, wenn das `volumechange`-Ereignis ausgelöst wird:

```js
video.addEventListener(
  "volumechange",
  () => {
    checkVolume();
  },
  false,
);
```

#### Fortschrittsbalken

Ein kleine Änderung muss auch am Klick-Handler für das `{{htmlelement("progress")}}`-Element vorgenommen werden. Da das umgebende `{{htmlelement("figure")}}`-Element jetzt `position:relative` darauf gesetzt hat, sind die von diesem Klick-Handler vorgenommenen Berechnungen falsch. Es muss nun auch die Offsetposition des übergeordneten Elements berücksichtigen:

```js
progress.addEventListener("click", (e) => {
  const pos =
    (e.pageX - progress.offsetLeft - progress.offsetParent.offsetLeft) /
    progress.offsetWidth;
  video.currentTime = pos * video.duration;
});
```

#### Vollbild

Die [Fullscreen-Implementierung](/de/docs/Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player#fullscreen) hat sich nicht geändert.

## Reaktionsfähige Gestaltung

Nachdem der Player nun ein grundlegendes Aussehen und Gefühl hat, müssen einige weitere Styling-Änderungen – unter Einbeziehung von Media Queries – vorgenommen werden, um ihn reaktionsfähig zu machen.

Der Player funktioniert derzeit ziemlich gut, bis er auf einem "mittleren" Bildschirm (z.B. 1024px/64em) oder kleiner angezeigt wird. In diesem Fall müssen die Ränder und Abstände am `{{htmlelement("figure")}}`-Element entfernt werden, damit der gesamte verfügbare Platz genutzt wird, und die Schaltflächen sind etwas zu klein, weshalb dies geändert werden muss, indem eine neue Höhe auf dem Element gesetzt wird, das die `.controls`-Klasse darauf gesetzt hat:

```css
@media screen and (width <= 64em) {
  figure {
    padding-left: 0;
    padding-right: 0;
    height: auto;
  }

  .controls {
    height: 1.876rem;
  }
}
```

Dies funktioniert gut genug, bis es auf einem kleineren Bildschirm (680px/42.5em) betrachtet wird, sodass hier ein weiterer Breakpoint vorgenommen wird. Da die Höhe des ` .controls`-Klassenelements jetzt variieren wird, ist keine feste Höhe mehr erforderlich - sie wird daher auf `auto` gesetzt. Die Definitionen für die Elemente innerhalb des ` .controls`-Elements müssen jetzt auch geändert werden:

```css
@media screen and (width <= 42.5em) {
  .controls {
    height: auto;
  }

  .controls > * {
    display: block;
    width: 16.6667%;
    margin-left: 0;
    height: 2.5rem;
    margin-top: 2.5rem;
  }

  .controls .progress {
    position: absolute;
    top: 0;
    width: 100%;
    float: none;
    margin-top: 0;
  }

  .controls .progress progress {
    width: 98%;
    margin: 0 auto;
  }

  .controls button {
    background-position: center center;
  }
}
```

Der `.progress`-Container wird nun über `position:absolute` an die Spitze des Steuerungssatzes verschoben, sodass er und alle Schaltflächen breiter sein müssen. Darüber hinaus müssen die Schaltflächen unter den Fortschrittscontainer verschoben werden, damit sie sichtbar sind.
