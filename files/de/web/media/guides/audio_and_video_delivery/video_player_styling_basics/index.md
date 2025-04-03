---
title: Grundlagen der Videoplayer-Stilisierung
slug: Web/Media/Guides/Audio_and_video_delivery/Video_player_styling_basics
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

Im vorherigen [Artikel über einen plattformübergreifenden Videoplayer](/de/docs/Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player) haben wir beschrieben, wie man einen plattformübergreifenden HTML-Videoplayer mit den Media- und Fullscreen-APIs erstellt. Dieser Folgeartikel befasst sich damit, wie man diesen benutzerdefinierten Player stilisiert, einschließlich der Anpassung an verschiedene Bildschirmgrößen.

## Das Beispiel in Aktion

![Ein Videoplayer mit Wiedergabe-, Stopp-, Lautstärke- und Vollbildsteuerungen, der ein Bild eines Soldaten zeigt.](video-player-styled.png)

Sie finden den Code für das [aktualisierte, gestylte Beispiel](https://github.com/iandevlin/iandevlin.github.io/tree/master/mdn/video-player-styled) auf GitHub und können es [live ansehen](https://iandevlin.github.io/mdn/video-player-styled/).

## Vorläufige Änderungen im Vergleich zum ursprünglichen Beispiel

Dieser Abschnitt fasst die Änderungen zusammen, die am [ursprünglichen Videoplayer-Beispiel](https://github.com/iandevlin/iandevlin.github.io/tree/master/mdn/video-player) vorgenommen wurden, um die Stilisierungsaufgabe zu erleichtern, bevor der Großteil der Arbeit gestartet wurde.

### HTML-Markup

Es wurden einige Änderungen am HTML-Markup vorgenommen, das im vorherigen Artikel gezeigt wurde. Die benutzerdefinierten Videosteuerungen und das {{htmlelement("progress")}}-Element befinden sich jetzt innerhalb von {{htmlelement("div")}}-Elementen anstatt in Listenelementen.

Das Markup für die benutzerdefinierten Steuerungen sieht nun folgendermaßen aus:

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

Im vorherigen Artikel wurde die Eigenschaft `display` der Videosteuerungen auf `block` gesetzt, um sie anzuzeigen. Dies wurde nun geändert, um ein [`data-state` Attribut](https://ultimatecourses.com/blog/stop-toggling-classes-with-js-use-behaviour-driven-dom-manipulation-with-data-states) zu verwenden, das dieser Code bereits zur Handhabung der [Vollbild-Implementierung](/de/docs/Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player#fullscreen) nutzt.

Diese "data-state"-Idee wird auch verwendet, um den aktuellen Zustand von Schaltflächen innerhalb der Videosteuerungsgruppe festzulegen, was spezifische Zustandsstilisierung ermöglicht.

### JavaScript

Wie oben erwähnt, wird ein `data-state` Attribut an verschiedenen Stellen für Stilisierungszwecke verwendet und diese werden mithilfe von JavaScript gesetzt. Spezifische Implementierungen werden an geeigneter Stelle unten erwähnt.

## Stilisierung

Der hier verwendete Stil des resultierenden Videoplayers ist ziemlich einfach — das ist beabsichtigt, da der Zweck darin besteht zu zeigen, wie ein solcher Videoplayer gestylt und responsiv gemacht werden könnte.

> [!NOTE]
> In einigen Fällen wird hier einige grundlegende CSS aus den Codebeispielen weggelassen, da seine Verwendung entweder offensichtlich oder nicht speziell wichtig für die Stilisierung des Videoplayers ist.

### Grundlegende Stilisierung

Das HTML-Video und seine Steuerungen sind alle in einem {{htmlelement("figure")}}-Element enthalten, das eine maximale Breite und Höhe (basierend auf den Abmessungen des verwendeten Videos) hat und innerhalb der Seite zentriert ist:

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

Auch der Container der Videosteuerungen benötigt einige Stilisierungen, damit er korrekt eingerichtet wird:

```css
.controls {
  width: 100%;
  height: 8.0971659919028340080971659919028%; /* of figure's height */
  position: relative;
}
```

Die Höhe der `.controls`-Klasse wird auf einen (sehr präzisen!) Prozentsatz des umschließenden {{htmlelement("figure")}}-Elements gesetzt (dies wurde durch Experimentieren basierend auf der benötigten Knopfhöhe herausgefunden). Seine Position ist auch speziell auf `relative` gesetzt, was für seine Responsivität erforderlich ist (mehr dazu später).

Wie bereits erwähnt, wird jetzt ein `data-state`-Attribut verwendet, um anzuzeigen, ob die Videosteuerungen sichtbar sind oder nicht und diese müssen ebenfalls gestylt werden:

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

Alle Elemente schweben nach links, da sie nebeneinander ausgerichtet werden sollen, und jedes Element ist so eingestellt, dass es eine `width` von fast 4% hat (auch der tatsächliche Wert wurde basierend auf den gewünschten Abmessungen der Knöpfe berechnet), und eine `height` von 100%. Ein Wert für `margin-left` wird ebenfalls gesetzt, aber das erste Element (in diesem Fall der Wiedergabe-/Pause-Knopf) hat diese Eigenschaft mit dem Wert 0 überschrieben.

Der {{htmlelement("div")}}-Container für das {{htmlelement("progress")}}-Element benötigt ebenfalls einige spezifische Einstellungen; er wird wesentlich breiter als die anderen Kindelemente eingestellt und sein Cursorwert wird als Zeiger gesetzt:

```css
.controls .progress {
  cursor: pointer;
  width: 75.390625%;
}
```

### Knöpfe

Die erste große Stilisierungsaufgabe besteht darin, die Knöpfe der Videosteuerung tatsächlich wie echte Knöpfe aussehen und sich verhalten zu lassen.

Jeder Knopf hat einige grundlegende Stilisierungen:

```css
.controls button {
  border: none;
  cursor: pointer;
  background: transparent;
  background-size: contain;
  background-repeat: no-repeat;
}
```

Standardmäßig haben alle {{htmlelement("button")}}-Elemente einen Rahmen, daher wird dieser entfernt. Da Hintergrundbilder verwendet werden, um passende Symbole anzuzeigen, wird die Hintergrundfarbe des Knopfes transparent, nicht wiederholend gesetzt und das Element sollte das Bild vollständig enthalten.

Die `:hover`- und `:focus`-Zustände werden dann für jeden Knopf gesetzt, der die Deckkraft des Knopfes ändert:

```css
.controls button:hover,
.controls button:focus {
  opacity: 0.5;
}
```

Um geeignete Knopfbilder zu erhalten, wurde ein Satz kostenloser allgemeiner Steuerungssatzsymbole aus dem Internet heruntergeladen. Jedes Bild wurde dann in einen base64-kodierten String konvertiert (mithilfe eines Online-[Base64-Bildcodierers](https://www.base64-image.de/)), da die Bilder ziemlich klein sind, sind die resultierenden kodierten Strings ziemlich kurz.

Da einige Knöpfe eine Doppel-Funktionalität haben, z. B. Wiedergabe/Pause und Stummschaltung/Entstummschaltung, haben diese Knöpfe verschiedene Zustände, die gestylt werden müssen. Wie bereits erwähnt, wird eine `data-state`-Variable verwendet, um anzuzeigen, in welchem Zustand sich solche Knöpfe befinden.

Zum Beispiel hat der Wiedergabe-/Pause-Knopf die folgenden Hintergrundbilddefinitionen (die vollständigen base64-Strings wurden der Kürze halber weggelassen):

```css
.controls button[data-state="play"] {
  background-image: url("data:image/png;base64,iVBORw0KGgoAAA…");
}

.controls button[data-state="pause"] {
  background-image: url("data:image/png;base64,iVBORw0KGgoAAA…");
}
```

Wenn der `data-state` des Knopfes geändert wird, wird auch das entsprechende Bild geändert. Alle anderen Knöpfe werden auf ähnliche Weise behandelt.

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

Wie die {{htmlelement("button")}}-Elemente hat auch {{htmlelement("progress")}} einen Standardrahmen, der hier entfernt wird. Es wird auch ein leicht abgerundeter Rand aus ästhetischen Gründen gegeben.

Wie im [vorherigen Artikel](/de/docs/Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player) erwähnt, gibt es einen Fallback für Browser, die das {{htmlelement("progress")}}-Element nicht unterstützen; dieser muss ebenfalls passend gestylt werden:

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

Auch eine `.data-state`-Klasse wird hier verwendet, wenn ein {{htmlelement("progress")}}-Element "vorgetäuscht" wird; wenn es sich in diesem Zustand befindet, muss die Hintergrundfarbe festgelegt werden. Das interne {{htmlelement("span")}}-Element, das als tatsächlich fortschreitender Teil der vorgetäuschten Fortschrittsleiste verwendet wird, hat seine Breite zunächst auf 0% gesetzt (es wird über JavaScript aktualisiert) und es hat auch seine Hintergrundfarbe gesetzt.

Es gibt einige browserspezifische Eigenschaften, die gesetzt werden müssen, um sicherzustellen, dass Firefox und Chrome die erforderliche Farbe für die Fortschrittsleiste verwenden:

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

Das war es wirklich schon mit der unmittelbaren Stilisierung; die nächste Aufgabe besteht darin, eine Reihe von JavaScript-Änderungen vorzunehmen, um sicherzustellen, dass alles wie erwartet funktioniert.

### Steuerungssichtbarkeit

Die erste Änderung ist einfach: Der `data-state` zur Anzeige der Videosteuerungen, wenn JavaScript im Browser verfügbar ist, muss jetzt gesetzt werden:

```js
// Display the user defined video controls
videoControls.setAttribute("data-state", "visible");
```

### Fortschrittsbalken-Unterstützung

Ein Check muss auch durchgeführt werden, um die "Fake"-Fortschrittsleiste einzurichten, falls der Browser das {{htmlelement("progress")}}-Element nicht unterstützt:

```js
const supportsProgress = document.createElement("progress").max !== undefined;
if (!supportsProgress) progress.setAttribute("data-state", "fake");
```

### Knopffunktionalität

Dieser Abschnitt befasst sich mit dem JavaScript, das erforderlich ist, um die Knopffunktionalität zu implementieren.

#### Wiedergabe/Pause und Stummschaltung

Da die Knöpfe jetzt tatsächlich wie Knöpfe aussehen und Bilder haben, die anzeigen, was sie tun, müssen einige Änderungen vorgenommen werden, damit die "Doppelfunktionalitäts"-Knöpfe (wie der Wiedergabe-/Pause-Knopf) sich im richtigen "Zustand" befinden und das richtige Bild anzeigen. Um dies zu erleichtern, wird eine neue Funktion namens `changeButtonState()` definiert, die eine Typvariable akzeptiert, die die Funktionalität des Knopfes angibt:

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

Diese Funktion wird dann von den entsprechenden Ereignishandlern aufgerufen:

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

Sie haben vielleicht bemerkt, dass es neue Handler gibt, bei denen auf die `play`- und `pause`-Ereignisse des Videos reagiert wird. Dafür gibt es einen Grund! Auch wenn die Standardeinstellung der Videosteuerungen des Browsers ausgeschaltet ist, machen viele Browser sie dennoch durch Rechtsklicken auf das HTML-Video zugänglich. Das bedeutet, dass ein Benutzer das Video über diese Steuerungen abspielen/pausieren könnte, was dann die Knöpfe des benutzerdefinierten Steuerungssatzes außer Synchronisation bringen würde. Wenn ein Benutzer die Standardsteuerungen verwendet, werden die definierten Media-API-Ereignisse — wie `play` und `pause` — ausgelöst, sodass dies genutzt werden kann, um sicherzustellen, dass die benutzerdefinierten Steuerknöpfe synchron gehalten werden. Um dies sicherzustellen, muss ein neuer Klick-Handler für den Wiedergabe-/Pause-Knopf definiert werden, damit er ebenfalls die `play`- und `pause`-Ereignisse auslöst:

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

Die `alterVolume()`-Funktion, die aufgerufen wird, wenn die Lautstärkeregler des Players angeklickt werden, ändert sich auch — sie ruft jetzt eine neue Funktion namens `checkVolume()` auf:

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

Diese neue `checkVolume()`-Funktion macht dasselbe wie `alterVolume()`, aber sie setzt auch den Zustand der Stummschalttaste in Abhängigkeit von der aktuellen Lautstärkeeinstellung des Videos. `checkVolume()` wird auch aufgerufen, wenn das Ereignis `volumechange` ausgelöst wird:

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

Eine kleine Änderung muss auch am Klick-Handler für das {{htmlelement("progress")}}-Element vorgenommen werden. Da das umschließende {{htmlelement("figure")}}-Element jetzt `position:relative` gesetzt hat, sind die Berechnungen, die von diesem Klick-Handler vorgenommen werden, inkorrekt. Es muss jetzt auch die Offsetposition des Elternelements berücksichtigt werden:

```js
progress.addEventListener("click", (e) => {
  const pos =
    (e.pageX - progress.offsetLeft - progress.offsetParent.offsetLeft) /
    progress.offsetWidth;
  video.currentTime = pos * video.duration;
});
```

#### Vollbild

Die [Vollbild-Implementierung](/de/docs/Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player#fullscreen) hat sich nicht geändert.

## Responsive Stilisierung

Jetzt, da der Player sein grundlegendes Aussehen und Gefühl hat, müssen einige andere Stiländerungen — unter Einbeziehung von Media Queries — vorgenommen werden, um ihn responsiv zu machen.

Der Player funktioniert derzeit ziemlich gut, bis er auf einem "mittleren" Bildschirm (z. B. 1024px/64em) oder kleiner angezeigt wird. In diesem Fall müssen die Ränder und Abstände des {{htmlelement("figure")}}-Elements entfernt werden, um den gesamten verfügbaren Raum auszunutzen, und die Knöpfe sind etwas zu klein, sodass dies durch Festlegen einer neuen Höhe für das Element, das die `.controls`-Klasse darauf gesetzt hat, geändert werden muss:

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

Dies funktioniert gut genug, bis es auf einem kleineren Bildschirm (680px/42.5em) angesehen wird, sodass hier ein weiterer Breakpoint gemacht wird. Da die Höhe des `.controls`-Klasse-Elements jetzt variieren wird, ist eine feste Höhe nicht mehr erforderlich — sie wird daher auf `auto` gesetzt. Die Definitionen für die Elemente innerhalb des `.controls`-Elements müssen jetzt auch geändert werden:

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

Der `.progress`-Container wird jetzt über `position:absolute` an die Spitze der Steuerungsgruppe verschoben, sodass er und alle Knöpfe breiter sein müssen. Zudem müssen die Knöpfe unter den Fortschritts-Container verschoben werden, damit sie sichtbar sind.
