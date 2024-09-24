---
title: Grundlagen zur Gestaltung von Video-Playern
slug: Web/Media/Audio_and_video_delivery/Video_player_styling_basics
l10n:
  sourceCommit: 4dec42ed700040565e8af0e14ff104054ebc20f5
---

{{QuickLinksWithSubPages("/de/docs/Web/Media")}}

Im vorherigen [Artikel über einen browserübergreifenden Video-Player](/de/docs/Web/Media/Audio_and_video_delivery/cross_browser_video_player) beschrieben wir, wie man einen HTML-Video-Player erstellt, der in verschiedenen Browsern nutzbar ist, mithilfe der Media- und Fullscreen-APIs. Dieser Folgeartikel befasst sich damit, wie Sie diesen benutzerdefinierten Player gestalten können, um ihn auch responsiv zu machen.

## Das Beispiel in Aktion

![Ein Video-Player mit Wiedergabe-, Stopp-, Lautstärke- und Vollbild-Steuerungen, der das Bild eines Soldaten zeigt.](video-player-styled.png)

Den Code für das [aktualisierte, gestaltete Beispiel](https://github.com/iandevlin/iandevlin.github.io/tree/master/mdn/video-player-styled) finden Sie auf GitHub, und Sie können [es live ansehen](https://iandevlin.github.io/mdn/video-player-styled/).

## Vorläufige Änderungen gegenüber dem Originalbeispiel

Dieser Abschnitt fasst die Änderungen zusammen, die am [ursprünglichen Video-Player-Beispiel](https://github.com/iandevlin/iandevlin.github.io/tree/master/mdn/video-player) vorgenommen wurden, um die Gestaltungsaufgaben zu erleichtern, bevor die Hauptarbeit begonnen wurde.

### HTML-Markup

Es wurden einige Änderungen am HTML-Markup vorgenommen, das im vorherigen Artikel gezeigt wurde. Die benutzerdefinierten Videosteuerungen und das {{htmlelement("progress")}}-Element sind jetzt innerhalb von {{htmlelement("div")}}-Elementen enthalten, anstatt in ungeordneten Listenelementen.

Das Markup für die benutzerdefinierten Steuerungen sieht jetzt wie folgt aus:

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

### Änderungen im zugehörigen CSS

Im vorherigen Artikel wurde die `display`-Eigenschaft der Videosteuerungen auf `block` gesetzt, um sie anzuzeigen. Dies wurde jetzt so geändert, dass ein [`data-state`-Attribut](https://ultimatecourses.com/blog/stop-toggling-classes-with-js-use-behaviour-driven-dom-manipulation-with-data-states) verwendet wird, das dieser Code bereits für seine [Vollbild-Implementierung](/de/docs/Web/Media/Audio_and_video_delivery/cross_browser_video_player#fullscreen) nutzt.

Diese "data-state"-Idee wird auch verwendet, um den aktuellen Zustand von Schaltflächen innerhalb des Videosteuerungssatzes festzulegen, was spezifisches Zustandsstyling ermöglicht.

### JavaScript

Wie oben erwähnt, wird ein `data-state`-Attribut an verschiedenen Stellen für Gestaltungszwecke verwendet, und diese werden mit JavaScript festgelegt. Spezifische Implementierungen werden an geeigneten Stellen unten erwähnt.

## Gestaltung

Der hier verwendete resultierende Video-Player-Stil ist ziemlich einfach — dies ist beabsichtigt, da das Ziel ist zu zeigen, wie ein solcher Video-Player gestaltet und responsiv gemacht werden könnte.

> [!NOTE]
> In einigen Fällen wird hier auf grundlegendes CSS in den Codebeispielen verzichtet, da dessen Verwendung entweder offensichtlich ist oder nicht speziell für das Styling des Video-Players relevant ist.

### Grundlegendes Styling

Das HTML-Video und seine Steuerungen sind alle innerhalb eines {{htmlelement("figure")}}-Elements enthalten, dem eine maximale Breite und Höhe (basierend auf den Maßen des verwendeten Videos) gegeben wird und das zentriert auf der Seite dargestellt wird:

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

Der Container der Videosteuerungen selbst benötigt ebenfalls einige Gestaltung, damit er korrekt eingerichtet ist:

```css
.controls {
  width: 100%;
  height: 8.0971659919028340080971659919028%; /* der Höhe der Abbildung */
  position: relative;
}
```

Die Höhe der Klasse `.controls` ist auf einen (sehr präzisen!) Prozentsatz des umschließenden {{htmlelement("figure")}}-Elements gesetzt (dies wurde basierend auf der erforderlichen Höhe der Schaltflächen ermittelt). Seine Position ist ebenfalls spezifisch auf `relative` gesetzt, was für seine Responsivität erforderlich ist (mehr dazu später).

Wie bereits erwähnt, wird jetzt ein `data-state`-Attribut verwendet, um anzuzeigen, ob die Videosteuerungen sichtbar sind oder nicht, und diese müssen ebenfalls gestylt werden:

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

Alle Elemente sind nach links flottierend positioniert, da sie nebeneinander ausgerichtet werden sollen, und jedes Element hat eine `width` von fast 4 % (wieder wurde der tatsächliche Wert basierend auf den erforderlichen Maßen der Schaltflächen berechnet) und eine `height` von 100 %. Ein Wert für `margin-left` ist auch festgelegt, aber das erste Element (in diesem Fall die Wiedergabe-/Pause-Schaltfläche) hat diese Eigenschaft durch den Wert 0 überschrieben.

Der {{htmlelement("div")}}-Container für das {{htmlelement("progress")}}-Element erfordert ebenfalls einige spezifische Einstellungen; es wird viel breiter als die anderen Kindelemente gesetzt und sein Cursor-Wert wird auf Pointer gesetzt:

```css
.controls .progress {
  cursor: pointer;
  width: 75.390625%;
}
```

### Schaltflächen

Die erste große Gestaltungsaufgabe besteht darin, die Schaltflächen der Videosteuerung tatsächlich wie echte Schaltflächen aussehen und wirken zu lassen.

Jede Schaltfläche hat eine grundlegende Gestaltung:

```css
.controls button {
  border: none;
  cursor: pointer;
  background: transparent;
  background-size: contain;
  background-repeat: no-repeat;
}
```

Standardmäßig haben alle {{htmlelement("button")}}-Elemente einen Rand, daher wird dieser entfernt. Da Hintergrundbilder verwendet werden, um passende Symbole anzuzeigen, wird die Hintergrundfarbe der Schaltfläche transparent gesetzt, nicht wiederholt und das Element soll das Bild vollständig enthalten.

Einfache `:hover`- und `:focus`-Zustände werden dann für jede Schaltfläche gesetzt, die die Opazität der Schaltfläche verändern:

```css
.controls button:hover,
.controls button:focus {
  opacity: 0.5;
}
```

Um geeignete Schaltflächenbilder zu erhalten, wurde ein Satz kostenloser, allgemeiner Kontrollset-Icons aus dem Internet heruntergeladen. Jedes Bild wurde dann in einen Base64-codierten String (unter Verwendung eines Online-[Base64-Bildencoders](https://www.base64-image.de/)) umgewandelt; da die Bilder recht klein sind, sind die resultierenden codierten Strings ziemlich kurz.

Da einige Schaltflächen eine Doppelfunktion haben, z.B. Wiedergabe/Pause und Stummschaltung/Entstummung, haben diese Schaltflächen unterschiedliche Zustände, die gestylt werden müssen. Wie bereits erwähnt, wird eine `data-state`-Variable verwendet, um anzuzeigen, in welchem Zustand sich solche Schaltflächen derzeit befinden.

Zum Beispiel hat die Wiedergabe-/Pause-Schaltfläche die folgenden Hintergrundbild-Definitionen (die vollständigen Base64-Strings wurden der Kürze halber weggelassen):

```css
.controls button[data-state="play"] {
  background-image: url("data:image/png;base64,iVBORw0KGgoAAA…");
}

.controls button[data-state="pause"] {
  background-image: url("data:image/png;base64,iVBORw0KGgoAAA…");
}
```

Wenn der `data-state` der Schaltfläche geändert wird, wird auch das entsprechende Bild geändert. Alle anderen Schaltflächen werden in ähnlicher Weise behandelt.

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

Wie die {{htmlelement("button")}}-Elemente hat auch das {{htmlelement("progress")}}-Element einen Standardrand, der hier entfernt wird. Es wird auch eine leichte Abrundung der Ecken aus ästhetischen Gründen vorgenommen.

Wie im [vorherigen Artikel](/de/docs/Web/Media/Audio_and_video_delivery/cross_browser_video_player) erwähnt, gibt es ein Fallback für Browser, die das {{htmlelement("progress")}}-Element nicht unterstützen; auch dies muss angemessen gestylt werden:

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

Eine `.data-state`-Klasse wird hier auch verwendet, wenn ein {{htmlelement("progress")}}-Element "gefälscht" wird; wenn es sich in diesem Zustand befindet, muss die Hintergrundfarbe gesetzt werden. Das interne {{htmlelement("span")}}-Element, das als der tatsächliche Fortschrittsanteil des gefälschten Fortschrittsbalkens verwendet wird, hat seine Breite zunächst auf 0% gesetzt (es wird per JavaScript aktualisiert) und seine Hintergrundfarbe ist ebenfalls festgelegt.

Es gibt einige browser-spezifische Eigenschaften, die gesetzt werden müssen, um sicherzustellen, dass Firefox und Chrome die erforderliche Farbe für den Fortschrittsbalken verwenden:

```css
.controls progress::-moz-progress-bar {
  background-color: #0095dd;
}

.controls progress::-webkit-progress-value {
  background-color: #0095dd;
}
```

Obwohl die gleichen Eigenschaften auf denselben Wert gesetzt sind, müssen diese Regeln separat definiert werden, sonst ignoriert Chrome sie.

## JavaScript

Das ist es wirklich für das unmittelbare Styling; die nächste Aufgabe besteht darin, eine Reihe von JavaScript-Änderungen vorzunehmen, um sicherzustellen, dass alles wie erwartet funktioniert.

### Steuerungssichtbarkeit

Die erste Änderung ist einfach: Der `data-state` für die Anzeige der Videosteuerungen, wenn JavaScript im Browser verfügbar ist, muss jetzt gesetzt werden:

```js
// Benutzerdefinierte Videosteuerungen anzeigen
videoControls.setAttribute("data-state", "visible");
```

### Unterstützung für den Fortschrittsbalken

Es muss auch eine Überprüfung vorgenommen werden, um den "gefälschten" Fortschrittsbalken einzurichten, wenn der Browser das {{htmlelement("progress")}}-Element nicht unterstützt:

```js
const supportsProgress = document.createElement("progress").max !== undefined;
if (!supportsProgress) progress.setAttribute("data-state", "fake");
```

### Schaltflächenfunktionalität

Dieser Abschnitt befasst sich mit dem JavaScript, das für die Implementierung der Schaltflächenfunktionalität erforderlich ist.

#### Wiedergabe/Pause und Stummschaltung

Jetzt, da die Schaltflächen tatsächlich wie Schaltflächen aussehen und Bilder haben, die anzeigen, was sie tun, müssen einige Änderungen vorgenommen werden, damit die "Doppelfunktion"-Schaltflächen (wie die Wiedergabe-/Pause-Schaltfläche) im richtigen "Zustand" sind und das richtige Bild anzeigen. Um dies zu erleichtern, wird eine neue Funktion definiert, die `changeButtonState()` genannt wird, die eine Typvariable akzeptiert, die die Funktionalität der Schaltfläche angibt:

```js
function changeButtonState(type) {
  if (type === "playpause") {
    // Wiedergabe-/Pause-Schaltfläche
    if (video.paused || video.ended) {
      playpause.setAttribute("data-state", "play");
    } else {
      playpause.setAttribute("data-state", "pause");
    }
  } else if (type === "mute") {
    // Stummschalt-Schaltfläche
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

  // Aktualisieren des 'data-state'-Attributs der Wiedergabe-/Pause-Schaltfläche, um das richtige Schaltflächenbild über CSS festzulegen
  changeButtonState("playpause");
});

mute.addEventListener("click", (e) => {
  video.muted = !video.muted;
  changeButtonState("mute");
});
```

Sie haben vielleicht bemerkt, dass es neue Ereignishandler gibt, bei denen auf die `play`- und `pause`-Ereignisse des Videos reagiert wird. Dafür gibt es einen Grund! Auch wenn das Standardsatz der Videosteuerungen des Browsers deaktiviert wurde, machen viele Browser sie durch Rechtsklicken auf das HTML-Video zugänglich. Dies bedeutet, dass ein Benutzer das Video über diese Steuerungen abspielen/anhalten könnte, was die Tasten des benutzerdefinierten Steuersatzes aus dem Takt bringen würde. Wenn ein Benutzer die Standardsteuerungen verwendet, werden die definierten Media-API-Ereignisse — wie `play` und `pause` — ausgelöst, sodass dies dazu genutzt werden kann, sicherzustellen, dass die benutzerdefinierten Steuerungstasten synchron bleiben. Um dies sicherzustellen, muss ein neuer Klick-Handler für die Wiedergabe-/Pause-Schaltfläche definiert werden, damit diese auch die `play`- und `pause`-Ereignisse auslöst:

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

Die `alterVolume()`-Funktion, die aufgerufen wird, wenn die Lautstärketasten des Players angeklickt werden, ändert sich ebenfalls — sie ruft jetzt eine neue Funktion namens `checkVolume()` auf:

```js
function checkVolume(dir) {
  if (dir) {
    const currentVolume = Math.floor(video.volume * 10) / 10;
    if (dir === "+" && currentVolume < 1) {
      video.volume += 0.1;
    } else if (dir === "-" && currentVolume > 0) {
      video.volume -= 0.1;
    }

    // Wenn die Lautstärke ausgeschaltet wurde, auch Stummschaltung setzen
    // Hinweis: Dies kann nur mit dem benutzerdefinierten Steuersatz durchgeführt werden, da wenn das 'volumechange'-Ereignis ausgelöst wird,
    // es keine Möglichkeit gibt zu wissen, ob es durch eine Lautstärke- oder Stummschaltungsänderung ausgelöst wurde
    video.muted = currentVolume <= 0;
  }
  changeButtonState("mute");
}

const alterVolume = (dir) => {
  checkVolume(dir);
};
```

Diese neue `checkVolume()`-Funktion macht dasselbe wie die `alterVolume()`, aber sie setzt auch den Zustand der Stummschalttaste entsprechend der aktuellen Lautstärkeeinstellung des Videos. `checkVolume()` wird auch aufgerufen, wenn das `volumechange`-Ereignis ausgelöst wird:

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

Auch der Klick-Handler für das {{htmlelement("progress")}}-Element benötigt eine kleine Änderung. Da das umschließende {{htmlelement("figure")}}-Element jetzt `position:relative` darauf gesetzt hat, sind die Berechnungen, die dieser Klick-Handler vornimmt, falsch. Er muss jetzt auch die Offset-Position des übergeordneten Elements berücksichtigen:

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

Nun, da der Player sein grundlegendes Aussehen und seine Haptik erhalten hat, müssen einige andere Gestaltungsänderungen — unter Verwendung von Media-Queries — vorgenommen werden, um ihn responsiv zu machen.

Der Player funktioniert derzeit ziemlich gut, bis er auf einem "mittleren" Bildschirm (z. B. 1024px/64em) oder kleiner angezeigt wird. In diesem Fall müssen die Ränder und das Padding am {{htmlelement("figure")}}-Element entfernt werden, damit der gesamte verfügbare Platz genutzt wird, und die Tasten sind etwas zu klein, sodass dies durch Festlegung einer neuen Höhe für das Element mit der `.controls`-Klasse geändert werden muss:

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

Diese Anpassungen funktionieren gut genug, bis es auf einem kleineren Bildschirm (680px/42.5em) angezeigt wird, daher wird hier ein weiterer Breakpoint gesetzt. Da die Höhe des Elements der Klasse `.controls` jetzt variieren wird, ist eine feste Höhe nicht mehr erforderlich — sie wird daher auf `auto` gesetzt. Die Definitionen für die Elemente innerhalb des `.controls`-Elements müssen jetzt ebenfalls geändert werden:

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

Der `.progress`-Container wird nun über `position:absolute` oben im Steuerungssatz positioniert, sodass er und alle Schaltflächen breiter sein müssen. Zusätzlich müssen die Schaltflächen unter den Fortschritts-Container verschoben werden, sodass sie sichtbar sind.
