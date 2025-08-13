---
title: Grundlagen der Gestaltung von Videoplayern
slug: Web/Media/Guides/Audio_and_video_delivery/Video_player_styling_basics
l10n:
  sourceCommit: a1765c2cad20118be0dad322d3548908787b5791
---

Im vorherigen [Artikel über plattformübergreifende Videoplayer](/de/docs/Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player) beschrieben wir, wie man einen plattformübergreifenden HTML-Videoplayer mit den Media- und Fullscreen-APIs erstellt. Dieser Folgeartikel behandelt, wie man diesen benutzerdefinierten Player gestaltet und ihn responsiv macht.

## Das Beispiel in Aktion

![Ein Videoplayer mit Abspiel-, Stopp-, Lautstärke- und Vollbildsteuerungen, der das Bild eines Soldaten zeigt.](video-player-styled.png)

Sie finden den Code für das [aktualisierte, gestaltete Beispiel](https://github.com/iandevlin/iandevlin.github.io/tree/master/mdn/video-player-styled) auf GitHub und können es [live ansehen](https://iandevlin.github.io/mdn/video-player-styled/).

## Vorläufige Änderungen vom ursprünglichen Beispiel

In diesem Abschnitt werden die Änderungen zusammengefasst, die am [ursprünglichen Videoplayer-Beispiel](https://github.com/iandevlin/iandevlin.github.io/tree/master/mdn/video-player) vorgenommen wurden, um die Gestaltungsaufgabe zu erleichtern, bevor die eigentliche Arbeit begann.

### HTML-Markup

Es wurden einige Änderungen am HTML-Markup vorgenommen, die im vorherigen Artikel gezeigt wurden. Die benutzerdefinierten Videosteuerungen und das {{htmlelement("progress")}}-Element sind nun in {{htmlelement("div")}}-Elementen enthalten, anstatt in ungeordneten Listenelementen.

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

### Verwandte CSS-Änderungen

Der vorherige Artikel setzte die `display`-Eigenschaft der Videosteuerungen auf `block`, um sie anzuzeigen. Dies wurde nun geändert, um ein [`data-state`-Attribut](https://ultimatecourses.com/blog/stop-toggling-classes-with-js-use-behaviour-driven-dom-manipulation-with-data-states) zu verwenden, das dieser Code bereits zur Handhabung der [Vollbild-Implementierung](/de/docs/Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player#fullscreen) nutzt.

Diese "data-state"-Idee wird auch verwendet, um den aktuellen Zustand der Tasten innerhalb der Videosteuerungen festzulegen, was eine spezifische Zustandsgestaltung ermöglicht.

### JavaScript

Wie oben erwähnt, wird ein `data-state`-Attribut an verschiedenen Stellen für Gestaltungszwecke verwendet und diese werden mit JavaScript gesetzt. Spezifische Implementierungen werden an geeigneten Stellen unten erwähnt.

## Gestaltung

Der hier verwendete Stil des resultierenden Videoplayers ist ziemlich einfach — dies ist beabsichtigt, da der Zweck darin besteht zu zeigen, wie ein solcher Videoplayer gestaltet und responsiv gemacht werden kann.

> [!NOTE]
> In einigen Fällen werden einige grundlegende CSS-Elemente aus den Codebeispielen hier ausgelassen, da ihre Verwendung entweder offensichtlich oder nicht speziell relevant für die Gestaltung des Videoplayers ist.

### Grundlegende Gestaltung

Das HTML-Video und seine Steuerungen sind alle in einem {{htmlelement("figure")}}-Element enthalten, das eine maximale Breite und Höhe erhält (basierend auf den Abmessungen des verwendeten Videos) und zentriert auf der Seite platziert wird:

```css
figure {
  max-width: 64rem;
  width: 100%;
  max-height: 30.875rem;
  height: 100%;
  margin: 1.25rem auto;
  padding: 1.051%;
  background-color: #666666;
}
```

Der Container für die Videosteuerungen benötigt ebenfalls eine Gestaltung, damit er korrekt eingerichtet ist:

```css
.controls {
  width: 100%;
  height: 8.0971659919028340080971659919028%; /* of figure's height */
  position: relative;
}
```

Die Höhe der Klasse `.controls` wird auf einen (sehr präzisen!) Prozentsatz des umschließenden {{htmlelement("figure")}}-Elements gesetzt (dies wurde experimentell basierend auf der erforderlichen Tastenhöhe erarbeitet). Seine Position ist ebenfalls speziell auf `relative` gesetzt, was für seine Anpassungsfähigkeit erforderlich ist (darauf wird später näher eingegangen).

Wie bereits erwähnt wird nun ein `data-state`-Attribut verwendet, um anzuzeigen, ob die Videosteuerungen sichtbar sind oder nicht und diese müssen ebenfalls gestaltet werden:

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

Alle Elemente werden nach links gefloated, da sie nebeneinander ausgerichtet werden sollen, und jedes Element erhält eine `width` von fast 4% (wiederum wurde der tatsächliche Wert basierend auf den erforderlichen Abmessungen der Tasten berechnet) und eine `height` von 100%. Ein Wert für `margin-left` wird ebenfalls festgelegt, aber das erste Element (in diesem Fall die Abspiel-/Pause-Taste) hat diese Eigenschaft durch den Wert 0 überschrieben.

Der {{htmlelement("div")}}-Container für das {{htmlelement("progress")}}-Element benötigt ebenfalls einige spezifische Einstellungen; er wird wesentlich breiter als die anderen Kind-Elemente und sein Cursor-Wert wird auf pointer gesetzt:

```css
.controls .progress {
  cursor: pointer;
  width: 75.390625%;
}
```

### Tasten

Die erste große Gestaltungsaufgabe besteht darin, die Tasten der Videosteuerungen wirklich wie echte Tasten aussehen und funktionieren zu lassen.

Jede Taste erhält eine grundlegende Gestaltung:

```css
.controls button {
  border: none;
  cursor: pointer;
  background: transparent;
  background-size: contain;
  background-repeat: no-repeat;
}
```

Standardmäßig haben alle {{htmlelement("button")}}-Elemente einen Rahmen, daher wird dieser entfernt. Da Hintergrundbilder verwendet werden, um die entsprechenden Symbole anzuzeigen, wird die Hintergrundfarbe der Taste auf transparent, nicht wiederholend gesetzt und das Element soll das Bild vollständig enthalten.

Die `:hover`- und `:focus`-Zustände werden dann für jede Taste eingestellt, die die Deckkraft der Taste verändert:

```css
.controls button:hover,
.controls button:focus {
  opacity: 0.5;
}
```

Um geeignete Tastenbilder zu erhalten, wurde ein Satz kostenloser gemeinsamer Steuerungsicons aus dem Web heruntergeladen. Jedes Bild wurde dann in eine Base64-codierte Zeichenfolge umgewandelt (mit einem Online-[Base64-Bildencoder](https://www.base64-image.de/)), da die Bilder ziemlich klein sind, sind die resultierenden codierten Zeichenfolgen ziemlich kurz.

Da einige Tasten eine Doppelfunktion haben, z.B. Abspielen/Pause und Stummschalten/Stummschaltung aufheben, haben diese Tasten verschiedene Zustände, die gestaltet werden müssen. Wie bereits erwähnt, wird eine `data-state`-Variable verwendet, um anzuzeigen, in welchem Zustand sich solche Tasten derzeit befinden.

Zum Beispiel hat die Abspiel-/Pause-Taste die folgenden Hintergrundbilder-Definitionen (die vollständigen Base64-Zeichenfolgen wurden der Kürze halber weggelassen):

```css
.controls button[data-state="play"] {
  background-image: url("data:image/png;base64,iVBORw0KGgoAAA…");
}

.controls button[data-state="pause"] {
  background-image: url("data:image/png;base64,iVBORw0KGgoAAA…");
}
```

Wenn der `data-state` der Taste geändert wird, wird auch das entsprechende Bild geändert. Alle anderen Tasten werden auf ähnliche Weise behandelt.

### Fortschrittsbalken

Das {{htmlelement("progress")}}-Element verfügt über die folgende grundlegende Stilkonfiguration:

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

Wie die {{htmlelement("button")}}-Elemente hat auch das {{htmlelement("progress")}}-Element standardmäßig einen Rahmen, der hier entfernt wird. Es erhält auch eine leicht abgerundete Ecke aus ästhetischen Gründen.

Wie im [vorherigen Artikel](/de/docs/Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player) erwähnt, gibt es einen Fallback für Browser, die das {{htmlelement("progress")}}-Element nicht unterstützen; dieser muss ebenfalls angemessen gestaltet werden:

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

Eine `.data-state`-Klasse wird hier auch verwendet, wenn ein {{ htmlelement("progress") }}-Element "gefälscht" wird; wenn es sich in diesem Zustand befindet, muss die Hintergrundfarbe festgelegt werden. Das interne {{htmlelement("span")}}-Element, das als der tatsächliche Fortschrittsteil der gefälschten Fortschrittsleiste verwendet wird, hat seine Breite anfangs auf 0% gesetzt (es wird über JavaScript aktualisiert) und seine Hintergrundfarbe ebenfalls festgelegt.

Es gibt einige browser-spezifische Eigenschaften, die festgelegt werden müssen, um sicherzustellen, dass Firefox und Chrome die erforderliche Farbe für die Fortschrittsanzeige verwenden:

```css
.controls progress::-moz-progress-bar {
  background-color: #0095dd;
}

.controls progress::-webkit-progress-value {
  background-color: #0095dd;
}
```

Obwohl dieselben Eigenschaften auf denselben Wert gesetzt sind, müssen diese Regeln separat definiert werden, sonst ignoriert Chrome sie.

## JavaScript

Das war's wirklich für die unmittelbare Gestaltung; die nächste Aufgabe besteht darin, eine Reihe von JavaScript-Änderungen vorzunehmen, um sicherzustellen, dass alles wie erwartet funktioniert.

### Steuerungen Sichtbarkeit

Die erste Änderung ist einfach: Der `data-state` zum Anzeigen der Videosteuerungen, wenn JavaScript dem Browser zur Verfügung steht, muss nun gesetzt werden:

```js
// Display the user defined video controls
videoControls.setAttribute("data-state", "visible");
```

### Fortschrittsbalkenunterstützung

Es muss auch überprüft werden, um die "gefälschte" Fortschrittsanzeige einzurichten, wenn der Browser das {{htmlelement("progress")}}-Element nicht unterstützt:

```js
const supportsProgress = document.createElement("progress").max !== undefined;
if (!supportsProgress) progress.setAttribute("data-state", "fake");
```

### Tastenfunktionalität

Dieser Abschnitt behandelt das JavaScript, das zur Implementierung der Tastenfunktionalität erforderlich ist.

#### Abspielen/Pause und Stumm

Nachdem die Tasten nun wie Tasten aussehen und Bilder haben, die anzeigen, was sie tun, müssen einige Änderungen vorgenommen werden, damit die "Doppeleinstellungen"-Tasten (wie die Abspiel-/Pausetaste) im korrekten "Zustand" sind und das richtige Bild anzeigen. Um dies zu erleichtern, wird eine neue Funktion namens `changeButtonState()` definiert, die eine Typvariable akzeptiert, die die Funktionalität der Taste angibt:

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

Diese Funktion wird dann von den entsprechenden Event-Handlern aufgerufen:

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

Sie haben vielleicht bemerkt, dass es neue Handler gibt, bei denen auf die Video-Events `play` und `pause` reagiert wird. Dafür gibt es einen Grund! Auch wenn die Standard-Videosteuerungen des Browsers ausgeschaltet sind, machen viele Browser sie beim Rechtsklicken auf das HTML-Video zugänglich. Das bedeutet, dass ein Benutzer das Video über diese Steuerungen abspielen/pausieren könnte, was dann die benutzerdefinierten Steuerungs-Tasten aus dem Synch bringen würde. Wenn ein Benutzer die Standard-Steuerungen verwendet, werden die definierten Media API-Events — wie `play` und `pause` — ausgelöst, so dass dies genutzt werden kann, um die benutzerdefinierten Steuertasten synchron zu halten. Um dies zu gewährleisten, muss ein neuer Klick-Handler für die Abspiel-/Pausetaste definiert werden, so dass auch die Events `play` und `pause` ausgelöst werden:

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

Die Funktion `alterVolume()`, die aufgerufen wird, wenn auf die Lautstärketasten des Players geklickt wird, ändert sich ebenfalls — sie ruft jetzt eine neue Funktion namens `checkVolume()` auf:

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

Diese neue Funktion `checkVolume()` erledigt dasselbe wie `alterVolume()`, sie legt aber auch den Zustand der Stummschalttaste abhängig von der aktuellen Lautstärkeeinstellung des Videos fest. `checkVolume()` wird auch aufgerufen, wenn das `volumechange`-Event ausgelöst wird:

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

Eine kleine Änderung muss auch am Klick-Handler für das {{ htmlelement("progress") }}-Element vorgenommen werden. Da das umschließende {{htmlelement("figure")}}-Element nun `position:relative` darauf gesetzt hat, sind die Berechnungen, die dieser Klick-Handler macht, falsch. Es muss nun auch die Offset-Position des Elternelements berücksichtigen:

```js
progress.addEventListener("click", (e) => {
  const pos =
    (e.pageX - progress.offsetLeft - progress.offsetParent.offsetLeft) /
    progress.offsetWidth;
  video.currentTime = pos * video.duration;
});
```

#### Vollbildmodus

Die [Vollbild-Implementierung](/de/docs/Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player#fullscreen) hat sich nicht geändert.

## Responsive Gestaltung

Nachdem der Player nun seine grundlegende Optik und Haptik hat, müssen einige andere Gestaltungsänderungen — die Medienabfragen umfassen — vorgenommen werden, um ihn responsiv zu machen.

Der Player funktioniert derzeit ziemlich gut, bis er auf einem "mittleren" Bildschirm (z.B. 1024px/64em) oder kleiner angezeigt wird. In diesem Fall müssen die Ränder und Abstände des {{ htmlelement("figure") }}-Elements entfernt werden, damit der gesamte verfügbare Platz genutzt wird, und die Tasten sind ein bisschen zu klein, daher muss dies geändert werden, indem eine neue Höhe auf dem Element festgelegt wird, das die `.controls`-Klasse darauf hat:

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

Dies funktioniert gut genug, bis es auf einem kleineren Bildschirm (680px/42.5em) betrachtet wird, daher wird hier ein weiterer Haltepunkt gesetzt. Da sich die Höhe des `.controls`-Klassen-Elements jetzt ändern wird, ist keine feste Höhe mehr erforderlich — sie wird daher auf `auto` gesetzt. Die Definitionen für die Elemente innerhalb des `.controls`-Elements müssen jetzt ebenfalls geändert werden:

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

Der `.progress`-Container wird jetzt durch `position:absolute` an die Spitze des Steuerungssatzes verschoben, sodass er und alle Tasten breiter sein müssen. Zusätzlich müssen die Tasten unter den Fortschrittscontainer verschoben werden, damit sie sichtbar sind.
