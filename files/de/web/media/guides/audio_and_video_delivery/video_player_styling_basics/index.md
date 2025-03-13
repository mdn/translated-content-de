---
title: Grundlagen der Videoplayer-Stilgestaltung
slug: Web/Media/Guides/Audio_and_video_delivery/Video_player_styling_basics
l10n:
  sourceCommit: 26e46f8c13ebea65dc65a6e99e51e8fa4d5d619d
---

Im vorherigen [Artikel über einen plattformübergreifenden Videoplayer](/de/docs/Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player) haben wir beschrieben, wie Sie mit den Media- und Fullscreen-APIs einen plattformübergreifenden HTML-Videoplayer erstellen können. Dieser Folgeartikel behandelt die Gestaltung dieses benutzerdefinierten Players, einschließlich der Anpassung an verschiedene Bildschirmgrößen.

## Das Beispiel in Aktion

![Ein Videoplayer mit Steuerelementen für Wiedergabe, Stopp, Lautstärke und Vollbild, der ein Bild eines Soldaten zeigt.](video-player-styled.png)

Den Code für das [aktualisierte, gestaltete Beispiel](https://github.com/iandevlin/iandevlin.github.io/tree/master/mdn/video-player-styled) finden Sie auf GitHub, und Sie können es sich [live ansehen](https://iandevlin.github.io/mdn/video-player-styled/).

## Vorbereitende Änderungen am ursprünglichen Beispiel

Dieser Abschnitt fasst die Änderungen zusammen, die am [ursprünglichen Videoplayer-Beispiel](https://github.com/iandevlin/iandevlin.github.io/tree/master/mdn/video-player) vorgenommen wurden, um die Gestaltungsaufgabe zu erleichtern, bevor der Großteil der Arbeit begonnen wurde.

### HTML-Markup

Es wurden einige Änderungen am HTML-Markup vorgenommen, das im vorherigen Artikel gezeigt wurde. Die benutzerdefinierten Video-Steuerelemente und das {{htmlelement("progress")}}-Element befinden sich jetzt innerhalb von {{htmlelement("div")}}-Elementen und nicht mehr innerhalb von Listenelementen einer ungeordneten Liste.

Das Markup für die benutzerdefinierten Steuerelemente sieht jetzt folgendermaßen aus:

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

### Verbundenen CSS-Änderungen

Im vorherigen Artikel wurde die `display`-Eigenschaft der Videosteuerungen auf `block` gesetzt, um sie anzuzeigen. Dies wurde nun geändert, um ein [`data-state`-Attribut](https://ultimatecourses.com/blog/stop-toggling-classes-with-js-use-behaviour-driven-dom-manipulation-with-data-states) zu verwenden, das dieser Code bereits zur Handhabung seiner [Fullscreen-Implementierung](/de/docs/Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player#fullscreen) nutzt.

Diese "data-state"-Idee wird auch verwendet, um den aktuellen Zustand der Tasten innerhalb des Videosteuerungssatzes festzulegen, was spezifische Zustandsstile ermöglicht.

### JavaScript

Wie oben erwähnt, wird ein `data-state`-Attribut an verschiedenen Stellen zu Gestaltungszwecken verwendet, und diese werden mithilfe von JavaScript gesetzt. Spezifische Implementierungen werden an geeigneten Stellen unten erwähnt.

## Gestaltung

Der resultierende Videoplayer-Stil, der hier verwendet wird, ist ziemlich einfach – das ist beabsichtigt, da es das Ziel ist zu zeigen, wie ein solcher Videoplayer gestaltet und anpassungsfähig gemacht werden kann.

> [!NOTE]
> In einigen Fällen wird hier auf einige grundlegende CSS-Angaben in den Code-Beispielen verzichtet, da deren Verwendung entweder offensichtlich oder für die Gestaltung des Videoplayers nicht spezifisch relevant ist.

### Grundlegende Gestaltung

Das HTML-Video und seine Steuerungen sind alle in einem {{htmlelement("figure")}}-Element enthalten, dem eine maximale Breite und Höhe gegeben wird (basierend auf den verwendeten Videomaßen) und das auf der Seite zentriert ist:

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

Der Container der Videosteuerungen benötigt ebenfalls einige Stileinstellungen, damit er korrekt eingerichtet ist:

```css
.controls {
  width: 100%;
  height: 8.0971659919028340080971659919028%; /* of figure's height */
  position: relative;
}
```

Die Höhe der `.controls`-Klasse wird auf (eine sehr präzise!) Prozentsatz der umgebenden {{htmlelement("figure")}}-Element gesetzt (dies wurde durch Experimente basierend auf der erforderlichen Knopfhöhe ermittelt). Seine Position wird auch spezifisch auf `relative` gesetzt, was für seine Anpassungsfähigkeit erforderlich ist (später dazu mehr).

Wie bereits erwähnt, wird ein `data-state`-Attribut jetzt verwendet, um anzuzeigen, ob die Videosteuerungen sichtbar sind oder nicht, und diese müssen auch gestylt werden:

```css
.controls[data-state="hidden"] {
  display: none;
}

.controls[data-state="visible"] {
  display: block;
}
```

Es gibt eine Reihe von Eigenschaften, die auch für alle Elemente innerhalb der Videosteuerungen gesetzt werden müssen:

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

Alle Elemente sind links schwebend, da sie nebeneinander ausgerichtet werden sollen, und jedes Element hat eine `width` von fast 4% (auch hier wurde der tatsächliche Wert basierend auf den erforderlichen Abmessungen der Knöpfe berechnet) und eine `height` von 100%. Ein Wert für `margin-left` wird ebenfalls gesetzt, aber das erste Element (in diesem Fall die Play/Pause-Taste) hat diese Eigenschaft mit dem Wert 0 überschrieben.

Der {{htmlelement("div")}}-Container für das {{htmlelement("progress")}}-Element benötigt ebenfalls einige spezifische Einstellungen; er wird auf viel breiter als die anderen Kinderelemente gesetzt und sein Cursorwert wird auf Zeiger gesetzt:

```css
.controls .progress {
  cursor: pointer;
  width: 75.390625%;
}
```

### Tasten

Die erste große Gestaltungsaufgabe besteht darin, die Tasten der Videosteuerung tatsächlich wie echte Tasten aussehen und funktionieren zu lassen.

Jede Taste hat einige grundlegende Stile:

```css
.controls button {
  border: none;
  cursor: pointer;
  background: transparent;
  background-size: contain;
  background-repeat: no-repeat;
}
```

Standardmäßig haben alle {{htmlelement("button")}}-Elemente einen Rand, also wird dieser entfernt. Da Hintergrundbilder verwendet werden, um passende Symbole anzuzeigen, wird die Hintergrundfarbe der Schaltfläche auf transparent, nicht wiederholt, und das Element soll das Bild vollständig enthalten.

Die `:hover`- und `:focus`-Zustände werden dann für jede Schaltfläche gesetzt, die die Deckkraft der Schaltfläche verändern:

```css
.controls button:hover,
.controls button:focus {
  opacity: 0.5;
}
```

Um geeignete Schaltflächenbilder zu erhalten, wurde ein Satz von kostenlosen allgemeinen Steuersatzsymbolen aus dem Internet heruntergeladen. Jedes Bild wurde dann in ein base64-kodiertes Zeichenfolgenformat umgewandelt (mit einem Online-[base64-Bildencoder](https://www.base64-image.de/)), da die Bilder ziemlich klein sind, sind die resultierenden kodierten Zeichenfolgen ziemlich kurz.

Da einige Tasten duale Funktionalität haben, z. B. Play/Pause und Mute/Unmute, haben diese Tasten unterschiedliche Zustände, die gestaltet werden müssen. Wie bereits erwähnt, wird eine `data-state`-Variable verwendet, um anzuzeigen, in welchem Zustand sich solche Tasten derzeit befinden.

Zum Beispiel hat die Play/Pause-Taste folgende Hintergrundbilddefinitionen (die vollständigen base64-Zeichenfolgen wurden der Kürze halber weggelassen):

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

Das {{htmlelement("progress")}}-Element hat die folgenden grundlegenden Stil-Einstellungen:

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

Wie die {{htmlelement("button")}}-Elemente hat auch das {{htmlelement("progress")}}-Element einen Standardrand, der hier entfernt wird. Es erhält auch aus ästhetischen Gründen eine leicht abgerundete Ecke.

Wie im [vorherigen Artikel](/de/docs/Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player) erwähnt, wurde ein Fallback für Browser bereitgestellt, die das {{htmlelement("progress")}}-Element nicht unterstützen; dieses muss ebenfalls entsprechend gestylt werden:

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

Eine `.data-state`-Klasse wird auch hier verwendet, wenn ein {{htmlelement("progress")}}-Element "gefakcet" wird; wenn es sich in diesem Zustand befindet, muss die Hintergrundfarbe gesetzt werden. Das interne {{htmlelement("span")}}-Element, das als der tatsächlich fortschreitende Teil des gefälschten Fortschrittsbalkens verwendet wird, hat seine Breite, die zunächst auf 0% gesetzt ist (sie wird über JavaScript aktualisiert) und auch seine Hintergrundfarbe gesetzt.

Es gibt einige browserspezifische Eigenschaften, die gesetzt werden müssen, um sicherzustellen, dass Firefox und Chrome die erforderliche Farbe für den Fortschrittsbalken verwenden:

```css
.controls progress::-moz-progress-bar {
  background-color: #0095dd;
}

.controls progress::-webkit-progress-value {
  background-color: #0095dd;
}
```

Auch wenn dieselben Eigenschaften auf denselben Wert gesetzt werden, müssen diese Regeln separat definiert werden, da Chrome sie sonst ignoriert.

## JavaScript

Das ist wirklich alles für die unmittelbare Gestaltung; die nächste Aufgabe besteht darin, eine Reihe von JavaScript-Änderungen vorzunehmen, um sicherzustellen, dass alles wie erwartet funktioniert.

### Steuerungssichtbarkeit

Die erste Änderung ist einfach: das `data-state` für die Anzeige der Videosteuerungen, wenn JavaScript für den Browser verfügbar ist, muss jetzt gesetzt werden:

```js
// Display the user defined video controls
videoControls.setAttribute("data-state", "visible");
```

### Fortschrittsbalkenunterstützung

Es muss auch überprüft werden, ob der "gefake" Fortschrittsbalken eingerichtet wird, wenn der Browser das {{htmlelement("progress")}}-Element nicht unterstützt:

```js
const supportsProgress = document.createElement("progress").max !== undefined;
if (!supportsProgress) progress.setAttribute("data-state", "fake");
```

### Tastenfunktionalität

In diesem Abschnitt wird das JavaScript betrachtet, das erforderlich ist, um die Tastenfunktionalität zu implementieren.

#### Play/Pause und Stummschaltung

Jetzt, da die Tasten tatsächlich wie Tasten aussehen und Bilder haben, die anzeigen, was sie tun, müssen einige Änderungen vorgenommen werden, damit die "dual funktionalen" Tasten (wie die Play/Pause-Taste) im richtigen "Zustand" und mit dem richtigen Bild angezeigt werden. Um dies zu erleichtern, wird eine neue Funktion namens `changeButtonState()` definiert, die eine Typvariable akzeptiert, die die Funktionalität der Taste angibt:

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

Sie haben vielleicht bemerkt, dass es neue Handler gibt, bei denen auf die `play`- und `pause`-Ereignisse am Video reagiert wird. Es gibt einen Grund dafür! Auch wenn die Standard-Videosteuerungen des Browsers ausgeschaltet wurden, machen viele Browser diese zugänglich, indem sie mit der rechten Maustaste auf das HTML-Video klicken. Das bedeutet, dass ein Benutzer das Video von diesen Steuerelementen aus abspielen/pausieren könnte, was dazu führen würde, dass die benutzerdefinierten Steuertasten aus der Synchronisation geraten. Wenn ein Benutzer die Standardsteuerungen verwendet, werden die definierten Media-API-Ereignisse – wie `play` und `pause` – ausgelöst, sodass dies genutzt werden kann, um sicherzustellen, dass die benutzerdefinierten Steuertasten synchron gehalten werden. Um dies sicherzustellen, muss ein neuer Klick-Handler für die Play/Pause-Taste definiert werden, damit auch sie die `play`- und `pause`-Ereignisse auslöst:

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

Die `alterVolume()`-Funktion, die aufgerufen wird, wenn auf die Lautstärketasten des Players geklickt wird, ändert sich ebenfalls – sie ruft jetzt eine neue Funktion namens `checkVolume()` auf:

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

Diese neue `checkVolume()`-Funktion macht dasselbe wie `alterVolume()`, setzt aber auch den Zustand der Stummschaltungstaste je nach aktuellen Lautstärkeeinstellung des Videos. `checkVolume()` wird auch aufgerufen, wenn das `volumechange`-Ereignis ausgelöst wird:

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

Es muss auch eine kleine Änderung am Klick-Handler für das {{ htmlelement("progress") }}-Element vorgenommen werden. Da das umgebende {{htmlelement("figure")}}-Element jetzt `position:relative` darauf gesetzt hat, sind die von diesem Klick-Handler verwendeten Berechnungen falsch. Es muss nun auch die Offset-Position des übergeordneten Elements berücksichtigt werden:

```js
progress.addEventListener("click", (e) => {
  const pos =
    (e.pageX - progress.offsetLeft - progress.offsetParent.offsetLeft) /
    progress.offsetWidth;
  video.currentTime = pos * video.duration;
});
```

#### Vollbild

Die [Fullscreen-Implementierung](/de/docs/Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player#fullscreen) wurde nicht verändert.

## Responsive Gestaltung

Jetzt, da der Player sein grundlegendes Aussehen und seine Haptik erhalten hat, müssen einige andere Gestaltungsänderungen vorgenommen werden, einschließlich Medienabfragen, um ihn anpassungsfähig zu machen.

Der Player funktioniert derzeit ziemlich gut, bis er auf einem "mittleren" Bildschirm (z. B. 1024px/64em) oder kleiner angezeigt wird. In diesem Fall müssen die Ränder und der Innenabstand des {{htmlelement("figure")}}-Elements entfernt werden, damit der gesamte verfügbare Raum genutzt wird, und die Tasten sind etwas zu klein, was durch Festlegen einer neuen Höhe des Elements, auf dem die `.controls`-Klasse gesetzt ist, geändert werden muss:

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

Dies funktioniert gut, bis er auf einem kleineren Bildschirm (680px/42.5em) betrachtet wird, sodass hier ein weiterer Breakpoint gemacht wird. Da die Höhe des Elements mit der `.controls`-Klasse jetzt variieren wird, ist keine feste Höhe mehr erforderlich – sie wird daher auf `auto` gesetzt. Die Definitionen für die Elemente innerhalb des `.controls`-Elements müssen jetzt ebenfalls geändert werden:

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

Der `.progress`-Container wird jetzt über `position:absolute` an die Spitze des Steuersatzes verschoben, sodass er und alle Tasten breiter sein müssen. Darüber hinaus müssen die Tasten unter den Fortschrittscontainer geschoben werden, damit sie sichtbar sind.
