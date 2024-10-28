---
title: Grundlegende Video-Player-Stilisierung
slug: Web/Media/Audio_and_video_delivery/Video_player_styling_basics
l10n:
  sourceCommit: bea339d321513fc6d66d95c8f0305b9387fa57bb
---

{{QuickLinksWithSubPages("/de/docs/Web/Media")}}

Im vorherigen [Artikel über einen plattformübergreifenden Video-Player](/de/docs/Web/Media/Audio_and_video_delivery/cross_browser_video_player) haben wir beschrieben, wie man einen HTML-Video-Player für verschiedene Browser mit den Media- und Fullscreen-APIs erstellt. Dieser Folgeartikel beschäftigt sich mit der Stilgestaltung dieses benutzerdefinierten Players, einschließlich der Anpassung an unterschiedliche Bildschirmgrößen.

## Das Beispiel in Aktion

![Ein Video-Player mit Wiedergabe-, Stopp-, Lautstärke- und Vollbildschaltflächen, der ein Bild eines Soldaten zeigt.](video-player-styled.png)

Den Code für das [aktualisierte, gestylte Beispiel](https://github.com/iandevlin/iandevlin.github.io/tree/master/mdn/video-player-styled) finden Sie auf GitHub, und Sie können es sich [live ansehen](https://iandevlin.github.io/mdn/video-player-styled/).

## Vorläufige Änderungen vom ursprünglichen Beispiel

Dieser Abschnitt fasst die Änderungen zusammen, die am [ursprünglichen Video-Player-Beispiel](https://github.com/iandevlin/iandevlin.github.io/tree/master/mdn/video-player) vorgenommen wurden, um die Stilaufgabe zu erleichtern, bevor der Großteil der Arbeit begonnen wurde.

### HTML-Markup

Es wurden einige Änderungen am HTML-Markup vorgenommen, wie im vorherigen Artikel gezeigt. Die benutzerdefinierten Videosteuerungen und das {{htmlelement("progress")}} Element sind jetzt innerhalb von {{htmlelement("div")}} Elementen enthalten, anstatt sich in ungeordneten Listenelementen zu befinden.

Das Markup für die benutzerdefinierten Steuerungen sieht jetzt folgendermaßen aus:

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

### Zugehörige CSS-Änderung

Im vorherigen Artikel wurde die `display`-Eigenschaft der Videosteuerungen auf `block` gesetzt, um sie anzuzeigen. Dies wurde jetzt geändert, um ein [`data-state` Attribut](https://ultimatecourses.com/blog/stop-toggling-classes-with-js-use-behaviour-driven-dom-manipulation-with-data-states) zu verwenden, das dieser Code bereits zur Handhabung seiner [Vollbild-Implementierung](/de/docs/Web/Media/Audio_and_video_delivery/cross_browser_video_player#fullscreen) verwendet.

Diese "data-state"-Idee wird auch verwendet, um den aktuellen Zustand von Schaltflächen innerhalb des Videosteuerungssatzes festzulegen, was spezielles Zustands-Styling ermöglicht.

### JavaScript

Wie bereits erwähnt, wird an verschiedenen Stellen ein `data-state` Attribut für Styling-Zwecke verwendet und diese werden mit JavaScript festgelegt. Spezifische Implementierungen werden an geeigneten Stellen unten erwähnt.

## Stilgestaltung

Der resultierende Stil des Video-Players, der hier verwendet wird, ist ziemlich einfach — dies ist beabsichtigt, da es darum geht zu zeigen, wie ein solcher Video-Player gestaltet und responsiv gemacht werden kann.

> [!NOTE]
> In einigen Fällen wird hier auf einige grundlegende CSS verzichtet, da deren Verwendung entweder offensichtlich oder nicht spezifisch relevant für die Stilgestaltung des Video-Players ist.

### Grundlegende Stilgestaltung

Das HTML-Video und seine Steuerungen sind alle in einem {{htmlelement("figure")}} Element enthalten, dem eine maximale Breite und Höhe (basierend auf den Abmessungen des verwendeten Videos) gegeben wird und das innerhalb der Seite zentriert wird:

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

Auch der Container für die Videosteuerungen benötigt einige Stilisierung, damit er korrekt eingerichtet ist:

```css
.controls {
  width: 100%;
  height: 8.0971659919028340080971659919028%; /* of figure's height */
  position: relative;
}
```

Die Höhe der `.controls`-Klasse wird auf (sehr präzise!) Prozent des umgebenden {{htmlelement("figure")}} Elements gesetzt (dies wurde durch Experimentieren basierend auf der erforderlichen Höhe der Schaltflächen ermittelt). Ihre Position ist ebenfalls speziell auf `relative` gesetzt, was für ihre Reaktionsfähigkeit erforderlich ist (mehr dazu später).

Wie bereits erwähnt, wird jetzt ein `data-state` Attribut verwendet, um anzugeben, ob die Videosteuerungen sichtbar sind oder nicht und diese müssen ebenfalls gestylt werden:

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

Alle Elemente sind links gefloatet, da sie nebeneinander ausgerichtet werden sollen, und jedes Element hat eine `width` von fast 4% (auch hier wurde der tatsächliche Wert basierend auf den erforderlichen Abmessungen der Schaltflächen berechnet) und eine `height` von 100%. Ein Wert für `margin-left` wird ebenfalls festgelegt, aber das erste Element (in diesem Fall die Wiedergabe/Pause-Schaltfläche) überschreibt diese Eigenschaft mit dem Wert 0.

Der {{htmlelement("div")}} Container für das {{htmlelement("progress")}} Element benötigt ebenfalls einige spezifische Einstellungen; er ist viel breiter als die anderen Kindelemente gesetzt und sein Cursor-Wert wird auf Zeiger gesetzt:

```css
.controls .progress {
  cursor: pointer;
  width: 75.390625%;
}
```

### Schaltflächen

Die erste große Stilaufgabe besteht darin, die Schaltflächen der Videosteuerung tatsächlich wie echte Schaltflächen aussehen und agieren zu lassen.

Jede Schaltfläche hat einige grundlegende Stilgestaltungen:

```css
.controls button {
  border: none;
  cursor: pointer;
  background: transparent;
  background-size: contain;
  background-repeat: no-repeat;
}
```

Standardmäßig haben alle {{htmlelement("button")}} Elemente einen Rahmen, daher wird dieser entfernt. Da Hintergrundbilder verwendet werden, um entsprechende Symbole anzuzeigen, wird die Hintergrundfarbe der Schaltfläche auf transparent gesetzt, nicht wiederholend, und das Element sollte das Bild vollständig enthalten.

Einfache `:hover` und `:focus` Zustände werden dann für jede Schaltfläche festgelegt, die die Opazität der Schaltfläche verändern:

```css
.controls button:hover,
.controls button:focus {
  opacity: 0.5;
}
```

Um geeignete Schaltflächenbilder zu erhalten, wurde ein Satz kostenloser allgemeiner Steuerungssymbole aus dem Web heruntergeladen. Jedes Bild wurde dann in einen base64-kodierten String umgewandelt (mithilfe eines Online-[Base64-Bildkodierers](https://www.base64-image.de/)), da die Bilder ziemlich klein sind, sind die resultierenden kodierten Strings ziemlich kurz.

Da einige Schaltflächen eine Doppelfunktion haben, z.B. Wiedergabe/Pause und Stumm/Unmute, haben diese Schaltflächen unterschiedliche Zustände, die gestylt werden müssen. Wie bereits erwähnt, wird eine `data-state` Variable verwendet, um anzugeben, in welchem Zustand sich solche Schaltflächen derzeit befinden.

Zum Beispiel hat die Wiedergabe/Pause-Schaltfläche die folgenden Hintergrundbilddefinitionen (die vollständigen Base64-Strings wurden der Kürze halber weggelassen):

```css
.controls button[data-state="play"] {
  background-image: url("data:image/png;base64,iVBORw0KGgoAAA…");
}

.controls button[data-state="pause"] {
  background-image: url("data:image/png;base64,iVBORw0KGgoAAA…");
}
```

Wenn das `data-state` der Schaltfläche geändert wird, wird auch das entsprechende Bild geändert. Alle anderen Schaltflächen werden ähnlich behandelt.

### Fortschrittsbalken

Das {{htmlelement("progress")}} Element hat das folgende grundlegende Stileinrichtung:

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

Wie die {{htmlelement("button")}} Elemente hat {{htmlelement("progress")}} standardmäßig einen Rahmen, der hier entfernt wird. Es wird auch eine leicht abgerundete Ecke aus ästhetischen Gründen verliehen.

Wie im [vorherigen Artikel](/de/docs/Web/Media/Audio_and_video_delivery/cross_browser_video_player) erwähnt, gibt es einen Fallback für Browser, die das {{htmlelement("progress")}} Element nicht unterstützen; dieser muss ebenfalls angemessen gestylt werden:

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

Eine `.data-state` Klasse wird hier ebenfalls verwendet, wenn ein {{htmlelement("progress")}} Element "gefälscht" wird; wenn es sich in diesem Zustand befindet, muss die Hintergrundfarbe eingestellt werden. Das interne {{htmlelement("span")}} Element, das als der tatsächliche sich fortschreitende Teil des gefälschten Fortschrittsbalkens verwendet wird, hat seine Breite zunächst auf 0% eingestellt (es wird über JavaScript aktualisiert) und hat auch seine Hintergrundfarbe festgelegt.

Es gibt einige browserspezifische Eigenschaften, die festgelegt werden müssen, um sicherzustellen, dass Firefox und Chrome die erforderliche Farbe für den Fortschrittsbalken verwenden:

```css
.controls progress::-moz-progress-bar {
  background-color: #0095dd;
}

.controls progress::-webkit-progress-value {
  background-color: #0095dd;
}
```

Obwohl die gleichen Eigenschaften auf den gleichen Wert gesetzt sind, müssen diese Regeln separat definiert werden, andernfalls ignoriert Chrome sie.

## JavaScript

Das war wirklich alles für die unmittelbare Stilgestaltung; die nächste Aufgabe besteht darin, eine Reihe von JavaScript-Änderungen vorzunehmen, um sicherzustellen, dass alles wie erwartet funktioniert.

### Sichtbarkeit der Steuerung

Die erste Änderung ist einfach: Das `data-state` für die Anzeige der Videosteuerungen, wenn JavaScript für den Browser verfügbar ist, muss jetzt festgelegt werden:

```js
// Display the user defined video controls
videoControls.setAttribute("data-state", "visible");
```

### Fortschrittsbalkenunterstützung

Es muss auch überprüft werden, ob der "gefälschte" Fortschrittsbalken eingerichtet werden muss, wenn der Browser das {{htmlelement("progress")}} Element nicht unterstützt:

```js
const supportsProgress = document.createElement("progress").max !== undefined;
if (!supportsProgress) progress.setAttribute("data-state", "fake");
```

### Schaltflächenfunktionalität

Dieser Abschnitt betrachtet das JavaScript, das erforderlich ist, um die Schaltflächenfunktionalität zu implementieren.

#### Wiedergabe/Pause und Stummschaltung

Da die Schaltflächen jetzt tatsächlich wie echte Schaltflächen aussehen und Bilder haben, die anzeigen, was sie tun, müssen einige Änderungen vorgenommen werden, damit die "Doppelfunktions"-Schaltflächen (wie die Wiedergabe/Pause-Schaltfläche) im richtigen "Zustand" sind und das korrekte Bild anzeigen. Um dies zu erleichtern, wird eine neue Funktion namens `changeButtonState()` definiert, die eine Typvariable akzeptiert, die die Funktionalität der Schaltfläche anzeigt:

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

Diese Funktion wird dann von den entsprechenden Ereignis-Handlern aufgerufen:

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

Sie haben vielleicht bemerkt, dass es neue Handler gibt, bei denen auf die `play` und `pause` Ereignisse im Video reagiert wird. Dafür gibt es einen Grund! Obwohl die Standard-Videosteuerung des Browsers abgeschaltet wurde, machen viele Browser sie durch Rechtsklick auf das HTML-Video zugänglich. Das bedeutet, dass ein Benutzer das Video über diese Steuerungen abspielen/anhalten könnte, was dazu führen würde, dass die Tasten des benutzerdefinierten Steuerungssatzes nicht mehr synchron sind. Wenn ein Benutzer die Standardsteuerungen verwendet, werden die definierten Media-API-Ereignisse — wie `play` und `pause` — ausgelöst, was ausgenutzt werden kann, um sicherzustellen, dass die benutzerdefinierten Steuerungsschaltflächen synchron gehalten werden. Dafür muss ein neuer Klick-Handler für die Wiedergabe/Pause-Schaltfläche definiert werden, damit auch sie die `play` und `pause` Ereignisse auslöst:

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

Die Funktion `alterVolume()`, die aufgerufen wird, wenn die Lautstärkeschaltflächen des Players geklickt werden, ändert sich ebenfalls — sie ruft jetzt eine neue Funktion namens `checkVolume()` auf:

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

Diese neue `checkVolume()` Funktion macht dasselbe wie die `alterVolume()`, setzt jedoch auch den Zustand der Stummschalttaste abhängig von der aktuellen Lautstärkeeinstellung des Videos. `checkVolume()` wird auch aufgerufen, wenn das `volumechange` Ereignis ausgelöst wird:

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

Eine kleine Änderung muss auch am Klick-Handler für das {{htmlelement("progress")}} Element vorgenommen werden. Da das umgebende {{htmlelement("figure")}} Element jetzt `position:relative` darauf gesetzt hat, sind die Berechnungen, die von diesem Klick-Handler durchgeführt werden, falsch. Es muss jetzt auch die Offset-Position des Elternelements berücksichtigen:

```js
progress.addEventListener("click", (e) => {
  const pos =
    (e.pageX - progress.offsetLeft - progress.offsetParent.offsetLeft) /
    progress.offsetWidth;
  video.currentTime = pos * video.duration;
});
```

#### Vollbild

Die [Vollbild-Implementierung](/de/docs/Web/Media/Audio_and_video_delivery/cross_browser_video_player#fullscreen) hat sich nicht geändert.

## Responsives Styling

Nachdem der Player nun seine grundlegende Optik und sein grundlegendes Gefühl erhalten hat, müssen einige weitere Stiländerungen — unter Verwendung von Media Queries — vorgenommen werden, um ihn responsiv zu gestalten.

Der Player funktioniert derzeit ziemlich gut, bis er auf einem "mittleren" Bildschirm (z.B. 1024px/64em) oder kleiner angezeigt wird. In diesem Fall müssen die Ränder und der Abstand des {{htmlelement("figure")}} Elements entfernt werden, damit der gesamte verfügbare Platz genutzt wird, und die Schaltflächen sind etwas zu klein, sodass dies angepasst werden muss, indem eine neue Höhe auf dem Element mit der `.controls` Klasse festgelegt wird:

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

Dies funktioniert gut genug, bis es auf einem kleineren Bildschirm (680px/42.5em) betrachtet wird, sodass hier ein weiterer Haltepunkt gemacht wird. Da die Höhe des `.controls` Klassen Elements jetzt variieren wird, wird keine feste Höhe mehr benötigt — sie wird deshalb auf `auto` gesetzt. Die Definitionen für die Elemente innerhalb des `.controls` Elements müssen jetzt ebenfalls geändert werden:

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

Der `.progress` Container wird jetzt über `position:absolute` an die Spitze des Steuersatzes verschoben, sodass er und alle Schaltflächen breiter sein müssen. Darüber hinaus müssen die Schaltflächen unter den Fortschrittscontainer gedrückt werden, damit sie sichtbar sind.
