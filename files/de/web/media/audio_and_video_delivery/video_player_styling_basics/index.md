---
title: Grundlagen der Videoplayer-Stilgestaltung
slug: Web/Media/Audio_and_video_delivery/Video_player_styling_basics
l10n:
  sourceCommit: 4dec42ed700040565e8af0e14ff104054ebc20f5
---

{{QuickLinksWithSubPages("/de/docs/Web/Media")}}

Im vorherigen [Artikel über plattformübergreifende Videoplayer](/de/docs/Web/Media/Audio_and_video_delivery/cross_browser_video_player) haben wir beschrieben, wie man einen plattformübergreifenden HTML-Videoplayer mit den Media- und Fullscreen-APIs erstellt. Dieser Folgeartikel behandelt, wie dieser benutzerdefinierte Player gestaltet wird, einschließlich der Anpassung an verschiedene Bildschirmgrößen.

## Das Beispiel in Aktion

![Ein Videoplayer mit Steuerungen für Abspielen, Stoppen, Lautstärke und Vollbild, der ein Bild eines Soldaten zeigt.](video-player-styled.png)

Den Code für das [aktualisierte, gestylte Beispiel](https://github.com/iandevlin/iandevlin.github.io/tree/master/mdn/video-player-styled) finden Sie auf GitHub und [hier können Sie es live sehen](https://iandevlin.github.io/mdn/video-player-styled/).

## Vorläufige Änderungen am ursprünglichen Beispiel

Dieser Abschnitt fasst die Änderungen zusammen, die am [ursprünglichen Videoplayer-Beispiel](https://github.com/iandevlin/iandevlin.github.io/tree/master/mdn/video-player) vorgenommen wurden, um die Stilgestaltungsaufgabe zu erleichtern, bevor der Großteil der Arbeit begonnen wurde.

### HTML Markup

Es gab einige Änderungen am HTML-Markup, die im vorherigen Artikel gezeigt wurden. Die benutzerdefinierten Videosteuerungen und das {{htmlelement("progress")}}-Element sind jetzt innerhalb von {{htmlelement("div")}}-Elementen enthalten, anstatt innerhalb von ungeordneten Listenelementen.

Das Markup für die benutzerdefinierten Steuerungen sieht jetzt folgendermaßen aus:

```html
<div id="video-controls" class="controls" data-state="hidden">
  <button id="playpause" type="button" data-state="play">Play/Pause</button>
  <button id="stop" type="button" data-state="stop">Stop</button>
  <div class="progress">
    <progress id="progress" value="0" min="0">
      <span id="progress-bar"></span>
    </progress>
  </div>
  <button id="mute" type="button" data-state="mute">Mute/Unmute</button>
  <button id="volinc" type="button" data-state="volup">Vol+</button>
  <button id="voldec" type="button" data-state="voldown">Vol-</button>
  <button id="fs" type="button" data-state="go-fullscreen">Fullscreen</button>
</div>
```

### Zugehörige CSS-Änderung

Der vorherige Artikel setzte die `display`-Eigenschaft der Videosteuerungen auf `block`, um sie anzuzeigen. Dies wurde nun geändert, um ein [`data-state` Attribut](https://ultimatecourses.com/blog/stop-toggling-classes-with-js-use-behaviour-driven-dom-manipulation-with-data-states) zu verwenden, welches bereits genutzt wird, um die [Fullscreen-Implementierung](/de/docs/Web/Media/Audio_and_video_delivery/cross_browser_video_player#fullscreen) zu handhaben.

Dieses "data-state"-Konzept wird auch zur Einstellung des aktuellen Zustands der Schaltflächen innerhalb der Videosteuerung verwendet, was eine spezifische Zustandsstilgestaltung ermöglicht.

### JavaScript

Wie oben erwähnt, wird ein `data-state`-Attribut an verschiedenen Stellen zu Stylingzwecken verwendet und diese werden mit JavaScript gesetzt. Spezifische Implementierungen werden an geeigneten Stellen unten erwähnt.

## Stilgestaltung

Der resultierende Videoplayer-Stil, der hier verwendet wird, ist ziemlich einfach — dies ist beabsichtigt, da es darum geht zu zeigen, wie ein solcher Videoplayer gestaltet und ansprechend gemacht werden kann.

> [!NOTE]
> In einigen Fällen wird hier auf Basis-CSS verzichtet, da seine Verwendung entweder offensichtlich oder nicht speziell relevant für die Stilgestaltung des Videoplayers ist.

### Grundlegende Stilgestaltung

Das HTML-Video und seine Steuerungen sind alle innerhalb eines {{htmlelement("figure")}}-Elements enthalten, dem eine maximale Breite und Höhe (basierend auf den Abmessungen des verwendeten Videos) gegeben und in der Mitte der Seite positioniert wird:

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

Auch der Container der Videosteuerungen benötigt einige Stilgestaltungen, damit er korrekt eingerichtet ist:

```css
.controls {
  width: 100%;
  height: 8.0971659919028340080971659919028%; /* of figure's height */
  position: relative;
}
```

Die Höhe der `.controls`-Klasse wird auf einen (sehr genauen!) Prozentsatz des umgebenden {{htmlelement("figure")}}-Elements eingestellt (dies wurde durch Experimente basierend auf der erforderlichen Schaltflächenhöhe ermittelt). Ihre Position wird auch spezifisch auf `relative` gesetzt, was für ihre Reaktionsfähigkeit erforderlich ist (mehr dazu später).

Wie bereits erwähnt, wird nun ein `data-state`-Attribut verwendet, um anzuzeigen, ob die Videosteuerungen sichtbar sind oder nicht, und auch diese müssen gestylt werden:

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

Alle Elemente sind linksbündig, da sie nebeneinander ausgerichtet werden sollen, und jedes Element hat eine `width` von fast 4% (auch hier wurde der tatsächliche Wert basierend auf den erforderlichen Abmessungen der Schaltflächen berechnet) und eine `height` von 100%. Ein Wert für `margin-left` wird ebenfalls festgelegt, aber das erste Element (in diesem Fall die Abspiel-/Pause-Schaltfläche) hat diese Eigenschaft mit dem Wert 0 überschrieben.

Der {{htmlelement("div")}}-Container für das {{htmlelement("progress")}}-Element erfordert ebenfalls einige spezifische Einstellungen; er wird viel breiter als die anderen Kindselemente eingestellt und sein Cursor-Wert wird auf Zeiger gesetzt:

```css
.controls .progress {
  cursor: pointer;
  width: 75.390625%;
}
```

### Schaltflächen

Die erste große Gestaltung Aufgabe besteht darin, die Schaltflächen der Videosteuerung tatsächlich wie und als echte Schaltflächen aussehen und funktionieren zu lassen.

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

Standardmäßig haben alle {{htmlelement("button")}}-Elemente eine Umrandung, so dass diese entfernt wird. Da Hintergrundbilder zur Anzeige geeigneter Symbole verwendet werden, wird die Hintergrundfarbe der Schaltfläche auf transparent gesetzt, nicht wiederholt, und das Element soll das Bild vollständig enthalten.

Einfache `:hover` und `:focus` Zustände werden dann für jede Schaltfläche festgelegt, die die Deckkraft der Schaltfläche ändert:

```css
.controls button:hover,
.controls button:focus {
  opacity: 0.5;
}
```

Um geeignete Schaltflächenbilder zu erhalten, wurde ein Satz von kostenlosen gängigen Steuerungssymbolen aus dem Web heruntergeladen. Jedes Bild wurde dann in einen Base64-codierten String umgewandelt (unter Verwendung eines [Base64-Bildencoders online](https://www.base64-image.de/)), da die Bilder ziemlich klein sind, sind die resultierenden codierten Strings ziemlich kurz.

Da einige Schaltflächen Doppelfunktionalität haben, z.B. Abspielen/Pausieren und Stumm/Unstumm, haben diese Schaltflächen unterschiedliche Zustände, die gestaltet werden müssen. Wie bereits erwähnt, wird eine `data-state`-Variable verwendet, um anzugeben, in welchem Zustand sich solche Schaltflächen aktuell befinden.

Zum Beispiel hat die Abspielen/Pause-Schaltfläche die folgenden Hintergrundbilddefinitionen (die vollständigen Base64-Strings wurden der Kürze halber ausgelassen):

```css
.controls button[data-state="play"] {
  background-image: url("data:image/png;base64,iVBORw0KGgoAAA…");
}

.controls button[data-state="pause"] {
  background-image: url("data:image/png;base64,iVBORw0KGgoAAA…");
}
```

Wenn der `data-state` der Schaltfläche geändert wird, wird auch das entsprechende Bild geändert. Alle anderen Schaltflächen werden auf ähnliche Weise behandelt.

### Fortschrittsbalken

Das {{htmlelement("progress")}}-Element hat das folgende Grundstil-Setup:

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

Wie die {{htmlelement("button")}}-Elemente hat auch {{htmlelement("progress")}} einen Standardrahmen, der hier entfernt wird. Es wird auch eine leicht abgerundete Ecke aus ästhetischen Gründen hinzugefügt.

Wie im [vorherigen Artikel](/de/docs/Web/Media/Audio_and_video_delivery/cross_browser_video_player) erwähnt, gibt es einen Fallback für Browser, die das {{htmlelement("progress")}}-Element nicht unterstützen; auch dieser muss entsprechend gestylt werden:

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

Eine `.data-state`-Klasse wird auch hier verwendet, wenn ein {{htmlelement("progress")}}-Element "gefälscht" wird; wenn es in diesem Zustand ist, muss die Hintergrundfarbe eingestellt werden. Das interne {{htmlelement("span")}}-Element, das als der tatsächliche fortschreitende Teil der gefälschten Fortschrittsleiste verwendet wird, hat seine Breite zunächst auf 0% gesetzt (es wird über JavaScript aktualisiert) und es hat auch seine Hintergrundfarbe gesetzt.

Es gibt einige browserspezifische Eigenschaften, die festgelegt werden müssen, um sicherzustellen, dass Firefox und Chrome die erforderliche Farbe für die Fortschrittsleiste verwenden:

```css
.controls progress::-moz-progress-bar {
  background-color: #0095dd;
}

.controls progress::-webkit-progress-value {
  background-color: #0095dd;
}
```

Obwohl dieselben Eigenschaften auf denselben Wert eingestellt sind, müssen diese Regeln getrennt definiert werden, da sonst Chrome sie ignoriert.

## JavaScript

Das war es im Wesentlichen für das sofortige Styling; die nächste Aufgabe besteht darin, eine Anzahl von JavaScript-Änderungen vorzunehmen, um sicherzustellen, dass alles wie erwartet funktioniert.

### Steuerungssichtbarkeit

Die erste Änderung ist einfach: das `data-state` zum Anzeigen der Videosteuerungen, wenn JavaScript im Browser verfügbar ist, muss jetzt gesetzt werden:

```js
// Display the user defined video controls
videoControls.setAttribute("data-state", "visible");
```

### Unterstützung des Fortschrittsbalkens

Es muss auch eine Überprüfung vorgenommen werden, um den "gefälschten" Fortschrittsbalken einzurichten, falls der Browser das {{htmlelement("progress")}}-Element nicht unterstützt:

```js
const supportsProgress = document.createElement("progress").max !== undefined;
if (!supportsProgress) progress.setAttribute("data-state", "fake");
```

### Schaltflächenfunktionalität

In diesem Abschnitt geht es um das JavaScript, das für die Implementierung der Schaltflächenfunktionalität erforderlich ist.

#### Abspielen/Pausieren und Stummschaltung

Da jetzt die Schaltflächen tatsächlich wie Schaltflächen aussehen und Bilder haben, die anzeigen, was sie tun, müssen einige Änderungen vorgenommen werden, damit die "Dualfunktionalität"-Schaltflächen (wie die Abspielen/Pausieren-Schaltfläche) im richtigen "Zustand" sind und das richtige Bild anzeigen. Um dies zu erleichtern, wird eine neue Funktion definiert namens `changeButtonState()`, die eine Typvariable akzeptiert, die die Funktionalität der Schaltfläche angibt:

```js
function changeButtonState(type) {
  if (type === "playpause") {
    // Play/Pause button
    if (video.paused || video.ended) {
      playpause.setAttribute("data-state", "play");
    } else {
      playpause.setAttribute("data-state", "pause");
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
    changeButtonState("playpause");
  },
  false,
);

video.addEventListener(
  "pause",
  () => {
    changeButtonState("playpause");
  },
  false,
);

stop.addEventListener("click", (e) => {
  video.pause();
  video.currentTime = 0;
  progress.value = 0;

  // Update the play/pause button's 'data-state' which allows the correct button image to be set via CSS
  changeButtonState("playpause");
});

mute.addEventListener("click", (e) => {
  video.muted = !video.muted;
  changeButtonState("mute");
});
```

Sie haben vielleicht bemerkt, dass es neue Handler gibt, bei denen die `play`- und `pause`-Ereignisse beim Video berücksichtigt werden. Es gibt einen Grund dafür! Selbst wenn die Standard-Steuerung des Browsers deaktiviert wurde, machen viele Browser sie durch Rechtsklick auf das HTML-Video zugänglich. Dies bedeutet, dass ein Nutzer das Video über diese Steuerungen abspielen/pausieren könnte, wodurch die Schaltflächen des benutzerdefinierten Steuerungssatzes nicht synchron wären. Wenn ein Nutzer die Standardsteuerungen verwendet, werden die definierten Media-API-Ereignisse — wie `play` und `pause` — ausgelöst, was genutzt werden kann, um sicherzustellen, dass die benutzerdefinierten Steuerungsschaltflächen synchron bleiben. Um dies sicherzustellen, muss ein neuer Klick-Handler für die Abspielen/Pausieren-Schaltfläche definiert werden, sodass auch er die `play` und `pause`-Ereignisse auslöst:

```js
playpause.addEventListener("click", (e) => {
  if (video.paused || video.ended) {
    video.play();
  } else {
    video.pause();
  }
});
```

#### Lautstärke

Die `alterVolume()`-Funktion, die aufgerufen wird, wenn die Lautstärkeschaltflächen des Players geklickt werden, ändert sich ebenfalls — sie ruft jetzt eine neue Funktion namens `checkVolume()` auf:

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

Diese neue `checkVolume()`-Funktion tut dasselbe wie `alterVolume()`, setzt aber auch den Zustand der Stummschalt-Schaltfläche basierend auf der aktuellen Lautstärkeeinstellung des Videos. `checkVolume()` wird auch aufgerufen, wenn das `volumechange`-Ereignis ausgelöst wird:

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

Auch der Klick-Handler für das {{htmlelement("progress")}}-Element muss leicht geändert werden. Da das umschließende {{htmlelement("figure")}}-Element jetzt `position:relative` auf sich gesetzt hat, sind die vom Klick-Handler vorgenommenen Berechnungen fehlerhaft. Jetzt muss auch die Offsetposition des Elternelements berücksichtigt werden:

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

## Reaktionsfähiges Styling

Da der Player nun sein grundlegendes Aussehen und Gefühl übernommen hat, müssen einige weitere Stiländerungen — unter Einbeziehung von Medienabfragen — vorgenommen werden, um ihn ansprechend zu machen.

Der Player funktioniert derzeit recht gut, bis er auf einem "mittleren" Bildschirm (z.B. 1024px/64em) oder kleiner angezeigt wird. In diesem Fall müssen die Ränder und Abstände auf dem {{htmlelement("figure")}}-Element entfernt werden, damit der gesamte verfügbare Platz genutzt wird, und die Schaltflächen sind etwas zu klein, sodass dies durch das Einstellen einer neuen Höhe auf dem Element mit der `.controls`-Klasse darauf geändert werden muss:

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

Dies funktioniert gut genug, bis es auf einem kleineren Bildschirm (680px/42.5em) angezeigt wird, sodass hier ein weiterer Breakpoint gemacht wird. Da sich die Höhe des Elements der `.controls`-Klasse ändern wird, ist keine feste Höhe mehr erforderlich — es wird daher auf `auto` gesetzt. Die Definitionen für die Elemente innerhalb des `.controls`-Elements müssen nun ebenfalls geändert werden:

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

Der `.progress`-Container wird jetzt über `position:absolute` an die Spitze des Steuerungssatzes verschoben, sodass er und alle Tasten breiter werden müssen. Darüber hinaus müssen die Schaltflächen unter den Fortschrittscontainer verschoben werden, damit sie sichtbar sind.
