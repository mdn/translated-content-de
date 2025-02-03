---
title: Grundlagen der Videoplayer-Stilgestaltung
slug: Web/Media/Guides/Audio_and_video_delivery/Video_player_styling_basics
l10n:
  sourceCommit: 27bceead8e9b1fe9c92df0fa5e418f81bd5b9fdf
---

Im vorherigen [Artikel über plattformübergreifende Videoplayer](/de/docs/Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player) haben wir beschrieben, wie ein plattformübergreifender HTML-Videoplayer unter Verwendung der Media- und Fullscreen-APIs erstellt wird. Dieser Folgeartikel befasst sich damit, wie dieser benutzerdefinierte Player gestylt werden kann, einschließlich der Responsivität.

## Das Beispiel in Aktion

![Ein Videoplayer mit Wiedergabe-, Stopp-, Lautstärke- und Vollbildsteuerungen, der ein Bild eines Soldaten zeigt.](video-player-styled.png)

Sie finden den Code für das [aktualisierte, gestylte Beispiel](https://github.com/iandevlin/iandevlin.github.io/tree/master/mdn/video-player-styled) auf GitHub und können es [live ansehen](https://iandevlin.github.io/mdn/video-player-styled/).

## Vorläufige Änderungen am ursprünglichen Beispiel

Dieser Abschnitt fasst die Änderungen zusammen, die am [ursprünglichen Videoplayer-Beispiel](https://github.com/iandevlin/iandevlin.github.io/tree/master/mdn/video-player) vorgenommen wurden, um die Styling-Aufgabe zu erleichtern, bevor die Hauptarbeit begann.

### HTML-Markup

Es gibt einige Änderungen am HTML-Markup, die im vorherigen Artikel gezeigt wurden. Die benutzerdefinierten Videosteuerungen und das {{htmlelement("progress")}}-Element sind nun in {{htmlelement("div")}}-Elementen enthalten, anstatt sich in ungeordneten Listenelementen zu befinden.

Das Markup für die benutzerdefinierten Steuerungen sieht nun wie folgt aus:

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

### Damit verbundene CSS-Änderung

Im vorherigen Artikel wurde die `display`-Eigenschaft der Videosteuerungen auf `block` gesetzt, um sie anzuzeigen. Dies wurde nun geändert, um ein [`data-state`-Attribut](https://ultimatecourses.com/blog/stop-toggling-classes-with-js-use-behaviour-driven-dom-manipulation-with-data-states) zu verwenden, das in diesem Code bereits zur Handhabung der [Vollbild-Implementierung](/de/docs/Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player#fullscreen) verwendet wird.

Diese "data-state"-Idee wird auch verwendet, um den aktuellen Zustand von Schaltflächen innerhalb des Videosteuerungssatzes festzulegen, was spezielles Zustandsstyling ermöglicht.

### JavaScript

Wie oben erwähnt, wird ein `data-state`-Attribut an verschiedenen Stellen zu Styling-Zwecken verwendet und diese werden mittels JavaScript gesetzt. Spezifische Implementierungen werden an geeigneten Stellen weiter unten erwähnt.

## Styling

Der resultierende Videoplayer-Stil, der hier verwendet wird, ist ziemlich einfach — dies ist beabsichtigt, da es darum geht zu zeigen, wie ein solcher Videoplayer gestylt und responsiv gemacht werden könnte.

> [!NOTE]
> In einigen Fällen wird hier auf einige grundlegende CSS-Anweisungen in den Codebeispielen verzichtet, da deren Verwendung entweder offensichtlich ist oder nicht speziell mit dem Styling des Videoplayers zu tun hat.

### Grundlegendes Styling

Das HTML-Video und seine Steuerungen sind alle in einem {{htmlelement("figure")}}-Element enthalten, dem eine maximale Breite und Höhe (basierend auf den Abmessungen des verwendeten Videos) zugewiesen und mittig auf der Seite platziert wird:

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

Die Höhe der `.controls`-Klasse ist auf einen (sehr genauen!) Prozentsatz des umschließenden {{htmlelement("figure")}}-Elements festgelegt (dies wurde durch Ausprobieren basierend auf der erforderlichen Schaltflächenhöhe ermittelt). Die Position ist auch explizit auf `relative` gesetzt, was für die Responsivität erforderlich ist (mehr dazu später).

Wie bereits erwähnt, wird ein `data-state`-Attribut nun verwendet, um anzuzeigen, ob die Videosteuerungen sichtbar sind oder nicht und diese müssen ebenfalls gestylt werden:

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

Alle Elemente sind links ausgerichtet, da sie nebeneinander ausgerichtet werden sollen, und jedes Element hat eine `Breite` von nahezu 4% (der tatsächliche Wert wurde erneut basierend auf den erforderlichen Dimensionen der Schaltflächen berechnet) und eine `Höhe` von 100%. Ein Wert für `margin-left` ist ebenfalls festgelegt, aber das erste Element (in diesem Fall die Wiedergabe/Pause-Schaltfläche) überschreibt diesen Wert mit 0.

Der {{htmlelement("div")}}-Container für das {{htmlelement("progress")}}-Element erfordert ebenfalls einige spezifische Einstellungen; er wird viel breiter als die anderen Kindelementen gesteuert und sein Cursorwert wird auf pointer gesetzt:

```css
.controls .progress {
  cursor: pointer;
  width: 75.390625%;
}
```

### Schaltflächen

Die erste größere Styling-Aufgabe besteht darin, die Schaltflächen der Videosteuerung tatsächlich wie echte Schaltflächen aussehen und agieren zu lassen.

Jede Schaltfläche hat ein grundlegendes Styling:

```css
.controls button {
  border: none;
  cursor: pointer;
  background: transparent;
  background-size: contain;
  background-repeat: no-repeat;
}
```

Standardmäßig haben alle {{htmlelement("button")}}-Elemente einen Rahmen, dieser wird daher entfernt. Da Hintergrundbilder zum Anzeigen geeigneter Symbole verwendet werden, wird die Hintergrundfarbe der Schaltfläche auf transparent gesetzt, nicht wiederholt, und das Element sollte das Bild vollständig enthalten.

Einfache `:hover`- und `:focus`-Zustände werden dann für jede Schaltfläche gesetzt, die die Deckkraft der Schaltfläche ändern:

```css
.controls button:hover,
.controls button:focus {
  opacity: 0.5;
}
```

Um geeignete Schaltflächenbilder zu erhalten, wurde ein Satz kostenloser allgemeiner Steuerungssymbolleisten aus dem Internet heruntergeladen. Jedes Bild wurde dann in einen Base64-codierten String konvertiert (unter Verwendung eines Online-[Base64-Bildencoders](https://www.base64-image.de/)), da die Bilder ziemlich klein sind, sind die resultierenden codierten Strings ziemlich kurz.

Da einige Schaltflächen doppelte Funktionen haben, z.B. Wiedergabe/Pause und Stummschalten/Entstummen, haben diese Schaltflächen verschiedene Zustände, die gestylt werden müssen. Wie bereits erwähnt, wird eine `data-state`-Variable verwendet, um anzuzeigen, in welchem Zustand sich solche Schaltflächen derzeit befinden.

Zum Beispiel hat die Wiedergabe/Pause-Schaltfläche die folgenden Hintergrundbilddefinitionen (die vollständigen Base64-Strings wurden der Kürze halber ausgelassen):

```css
.controls button[data-state="play"] {
  background-image: url("data:image/png;base64,iVBORw0KGgoAAA…");
}

.controls button[data-state="pause"] {
  background-image: url("data:image/png;base64,iVBORw0KGgoAAA…");
}
```

Wenn der `data-state` der Schaltfläche geändert wird, wird auch das entsprechende Bild geändert. Alle anderen Schaltflächen werden ähnlich behandelt.

### Fortschrittsbalken

Das {{htmlelement("progress")}}-Element hat das folgende grundlegende Stil-Setup:

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

Wie die {{htmlelement("button")}}-Elemente hat {{htmlelement("progress")}} auch einen Standardrahmen, der hier entfernt wird. Es erhält auch eine leicht abgerundete Ecke aus ästhetischen Gründen.

Wie im [vorherigen Artikel](/de/docs/Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player) erwähnt, gibt es einen Rückfall für Browser, die das {{htmlelement("progress")}}-Element nicht unterstützen; auch dies muss passend gestylt werden:

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

Eine `.data-state`-Klasse wird hier ebenfalls verwendet, wenn ein {{htmlelement("progress")}}-Element "gefälscht" wird; wenn es sich in diesem Zustand befindet, muss die Hintergrundfarbe gesetzt werden. Das interne {{htmlelement("span")}}-Element, das als der eigentliche Fortschrittsteil der gefälschten Fortschrittsleiste verwendet wird, hat seine Breite initial auf 0% gesetzt (es wird über JavaScript aktualisiert) und es hat ebenfalls seine Hintergrundfarbe gesetzt.

Es gibt einige browserspezifische Eigenschaften, die eingestellt werden müssen, um sicherzustellen, dass Firefox und Chrome die erforderliche Farbe für die Fortschrittsleiste verwenden:

```css
.controls progress::-moz-progress-bar {
  background-color: #0095dd;
}

.controls progress::-webkit-progress-value {
  background-color: #0095dd;
}
```

Obwohl dieselben Eigenschaften auf denselben Wert gesetzt sind, müssen diese Regeln separat definiert werden, da Chrome sie sonst ignoriert.

## JavaScript

Das wäre es im Wesentlichen mit dem sofortigen Styling; die nächste Aufgabe besteht darin, eine Reihe von JavaScript-Änderungen vorzunehmen, um sicherzustellen, dass alles wie erwartet funktioniert.

### Steuerungssichtbarkeit

Die erste Änderung ist einfach: das `data-state` zum Anzeigen der Videosteuerungen, wenn JavaScript dem Browser zur Verfügung steht, muss jetzt gesetzt werden:

```js
// Display the user defined video controls
videoControls.setAttribute("data-state", "visible");
```

### Unterstützung des Fortschrittsbalkens

Es muss auch eine Überprüfung vorgenommen werden, um den "gefälschten" Fortschrittsbalken einzurichten, wenn der Browser das {{htmlelement("progress")}}-Element nicht unterstützt:

```js
const supportsProgress = document.createElement("progress").max !== undefined;
if (!supportsProgress) progress.setAttribute("data-state", "fake");
```

### Schaltflächenfunktionalität

Dieser Abschnitt behandelt das JavaScript, das zur Implementierung der Schaltflächenfunktionalität erforderlich ist.

#### Wiedergabe/Pause und Stummschalten

Jetzt, da die Schaltflächen tatsächlich wie Schaltflächen aussehen und Bilder haben, die anzeigen, was sie tun, müssen einige Änderungen vorgenommen werden, damit die "Doppelfunktions"-Schaltflächen (wie die Wiedergabe/Pause-Schaltfläche) im richtigen "Zustand" sind und das richtige Bild anzeigen. Zu diesem Zweck wird eine neue Funktion namens `changeButtonState()` definiert, die eine Typvariable akzeptiert, die die Funktionalität der Schaltfläche angibt:

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

Sie haben vielleicht bemerkt, dass es neue Handler gibt, bei denen auf die `play`- und `pause`-Ereignisse des Videos reagiert wird. Dafür gibt es einen Grund! Obwohl das standardmäßige Steuerungssatz des Browsers deaktiviert wurde, machen viele Browser sie zugänglich, indem sie mit der rechten Maustaste auf das HTML-Video klicken. Dies bedeutet, dass ein Benutzer das Video aus diesen Steuerungen wiedergeben/pausieren könnte, was dann die Schaltflächen des benutzerdefinierten Steuerungssatzes außer Takt bringt. Wenn ein Benutzer die Standardsteuerungen verwendet, werden die definierten Media-API-Ereignisse — wie `play` und `pause` — ausgelöst, sodass dies ausgenutzt werden kann, um sicherzustellen, dass die benutzerdefinierten Steuerschaltflächen in Einklang bleiben. Um dies sicherzustellen, muss ein neuer Klick-Handler für die Wiedergabe/Pause-Schaltfläche definiert werden, sodass auch sie die `play`- und `pause`-Ereignisse auslöst:

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

Die `alterVolume()`-Funktion, die aufgerufen wird, wenn auf die Lautstärketasten des Players geklickt wird, ändert sich ebenfalls — sie ruft jetzt eine neue Funktion namens `checkVolume()` auf:

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

Diese neue `checkVolume()`-Funktion macht dasselbe wie `alterVolume()`, sie setzt jedoch auch den Zustand der Stummschalttaste abhängig von der aktuellen Lautstärkeeinstellung des Videos. `checkVolume()` wird auch aufgerufen, wenn das `volumechange`-Ereignis ausgelöst wird:

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

Eine kleine Änderung muss ebenfalls am Klick-Handler für das {{htmlelement("progress")}}-Element vorgenommen werden. Da das umgebende {{htmlelement("figure")}}-Element nun `position:relative` darauf gesetzt hat, sind die Berechnungen, die dieser Klick-Handler vornimmt, falsch. Es muss nun ebenfalls die Versatzposition des übergeordneten Elements berücksichtigen:

```js
progress.addEventListener("click", (e) => {
  const pos =
    (e.pageX - progress.offsetLeft - progress.offsetParent.offsetLeft) /
    progress.offsetWidth;
  video.currentTime = pos * video.duration;
});
```

#### Vollbild

Die [FullScreen-Implementierung](/de/docs/Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player#fullscreen) hat sich nicht geändert.

## Responsives Styling

Jetzt, da der Player sein grundlegendes Aussehen und Gefühl berücksichtigt hat, müssen einige andere Stiländerungen — die Medienabfragen betreffen — vorgenommen werden, um ihn responsiv zu machen.

Der Player funktioniert derzeit ziemlich gut, bis er auf einem "mittleren" Bildschirm (z.B. 1024px/64em) oder kleiner angezeigt wird. In diesem Fall müssen die Ränder und der Abstand auf dem {{htmlelement("figure")}}-Element entfernt werden, damit der gesamte verfügbare Raum genutzt wird, und die Schaltflächen sind etwas zu klein, sodass dies geändert werden muss, indem eine neue Höhe auf dem Element festgelegt wird, das die `.controls`-Klasse darauf gesetzt hat:

```css
@media screen and (max-width: 64em) {
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

Dies funktioniert gut, bis es auf einem kleineren Bildschirm (680px/42.5em) betrachtet wird, daher wird hier ein weiterer Breakpoint gemacht. Da die Höhe des `.controls`-Klassenelements nun variieren wird, ist eine feste Höhe nicht mehr erforderlich — sie wird daher auf `auto` gesetzt. Die Definitionen für die Elemente innerhalb des `.controls`-Elements müssen ebenfalls geändert werden:

```css
@media screen and (max-width: 42.5em) {
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
