---
title: Grundlagen der Videoplayer-Stilgestaltung
slug: Web/Media/Audio_and_video_delivery/Video_player_styling_basics
l10n:
  sourceCommit: 4dec42ed700040565e8af0e14ff104054ebc20f5
---

{{QuickLinksWithSubPages("/de/docs/Web/Media")}}

Im vorherigen [Artikel über Cross-Browser-Videoplayer](/de/docs/Web/Media/Audio_and_video_delivery/cross_browser_video_player) haben wir beschrieben, wie man einen HTML-Videoplayer entwickelt, der in verschiedenen Browsern funktioniert, indem die Media- und Fullscreen-APIs verwendet werden. In diesem Folgeartikel geht es darum, wie dieser benutzerdefinierte Player gestylt wird, einschließlich der Anpassung seiner Responsivität.

## Das Beispiel in Aktion

![Ein Videoplayer mit Play-, Stopp-, Lautstärke- und Vollbild-Steuerelementen, der ein Bild eines Soldaten zeigt.](video-player-styled.png)

Sie finden den Code für das [aktualisierte, gestylte Beispiel](https://github.com/iandevlin/iandevlin.github.io/tree/master/mdn/video-player-styled) auf GitHub und können sich [das Live-Beispiel ansehen](https://iandevlin.github.io/mdn/video-player-styled/).

## Vorläufige Änderungen am ursprünglichen Beispiel

Dieser Abschnitt fasst die Änderungen zusammen, die am [ursprünglichen Videoplayer-Beispiel](https://github.com/iandevlin/iandevlin.github.io/tree/master/mdn/video-player) vorgenommen wurden, um die Styling-Aufgabe zu erleichtern, bevor der Großteil der Arbeit begann.

### HTML-Markup

Es wurden einige Änderungen am HTML-Markup aus dem vorherigen Artikel vorgenommen. Die benutzerdefinierten Videosteuerungen und das {{htmlelement("progress")}}-Element sind nun innerhalb von {{htmlelement("div")}}-Elementen enthalten, anstatt in ungeordneten Listenelementen.

Das Markup für die benutzerdefinierten Steuerungen sieht nun wie folgt aus:

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

### Zugehörige CSS-Änderungen

Im vorherigen Artikel wurde die `display`-Eigenschaft der Videosteuerungen auf `block` gesetzt, um sie anzuzeigen. Dies wurde nun geändert, um ein [`data-state`-Attribut](https://ultimatecourses.com/blog/stop-toggling-classes-with-js-use-behaviour-driven-dom-manipulation-with-data-states) zu verwenden, das bereits in diesem Code zur Handhabung der [Vollbildimplementierung](/de/docs/Web/Media/Audio_and_video_delivery/cross_browser_video_player#fullscreen) verwendet wird.

Diese "data-state"-Idee wird auch verwendet, um den aktuellen Status von Schaltflächen innerhalb des Videosteuerungssatzes festzulegen, was spezifisches Status-Styling ermöglicht.

### JavaScript

Wie oben erwähnt, wird ein `data-state`-Attribut an verschiedenen Stellen zu Styling-Zwecken verwendet, und diese werden mittels JavaScript gesetzt. Spezifische Implementierungen werden an geeigneten Stellen unten erwähnt.

## Styling

Der hier verwendete Videoplayer-Stil ist ziemlich grundlegend — dies ist beabsichtigt, da es darum geht, zu zeigen, wie ein solcher Videoplayer gestylt und responsive gemacht werden kann.

> [!NOTE]
> In einigen Fällen wird hier in den Codebeispielen auf einige grundlegende CSS-Anweisungen verzichtet, da ihre Verwendung entweder offensichtlich oder nicht speziell für das Styling des Videoplayers relevant ist.

### Grundlegendes Styling

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

Die Container der Videosteuerungen benötigen ebenfalls Styling, um korrekt eingerichtet zu werden:

```css
.controls {
  width: 100%;
  height: 8.0971659919028340080971659919028%; /* of figure's height */
  position: relative;
}
```

Die Höhe der `.controls`-Klasse ist auf (einen sehr präzisen!) Prozentsatz des umschließenden {{htmlelement("figure")}}-Elements gesetzt (dies wurde mit Experimenten basierend auf der benötigten Buttonhöhe ermittelt). Ihre Position ist auch speziell auf `relative` gesetzt, was für ihre Responsivität erforderlich ist (mehr dazu später).

Wie bereits erwähnt, wird ein `data-state`-Attribut jetzt verwendet, um anzuzeigen, ob die Videosteuerungen sichtbar sind oder nicht und diese müssen ebenfalls gestylt werden:

```css
.controls[data-state="hidden"] {
  display: none;
}

.controls[data-state="visible"] {
  display: block;
}
```

Es gibt eine Reihe von Eigenschaften, die für alle Elemente innerhalb der Videosteuerungen festgelegt werden müssen:

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

Alle Elemente sind linksbündig, da sie nebeneinander ausgerichtet werden sollen, und jedes Element ist so eingestellt, dass es eine `Breite` von fast 4 % hat (der tatsächliche Wert wurde erneut basierend auf den erforderlichen Maßen der Buttons berechnet) und eine `Höhe` von 100 %. Ein Wert für `margin-left` ist ebenfalls festgelegt, aber das erste Element (in diesem Fall die Play/Pause-Schaltfläche) hat diesen Wert auf 0 überschrieben.

Der {{htmlelement("div")}}-Container für das {{htmlelement("progress")}}-Element benötigt ebenfalls einige spezifische Einstellungen; er ist deutlich breiter als die anderen Kindelemente und sein Cursor-Wert ist für die Zeigervorschau eingestellt:

```css
.controls .progress {
  cursor: pointer;
  width: 75.390625%;
}
```

### Schaltflächen

Die erste große Styling-Aufgabe besteht darin, dass die Schaltflächen der Videosteuerung tatsächlich wie echte Schaltflächen aussehen und sich auch so verhalten.

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

Standardmäßig haben alle {{htmlelement("button")}}-Elemente einen Rahmen, daher wird dieser entfernt. Da Hintergrundbilder verwendet werden, um geeignete Symbole anzuzeigen, wird die Hintergrundfarbe der Schaltfläche auf transparent gesetzt, nicht wiederholt, und das Element sollte das Bild vollständig enthalten.

Einfache `:hover`- und `:focus`-Zustände sind dann für jede Schaltfläche festgelegt, die die Transparenz der Schaltfläche ändern:

```css
.controls button:hover,
.controls button:focus {
  opacity: 0.5;
}
```

Um geeignete Schaltflächenbilder zu erhalten, wurde ein Satz kostenloser allgemeiner Steuerungssymbolen aus dem Web heruntergeladen. Jedes Bild wurde dann in einen base64-codierten String konvertiert (mithilfe eines Online-[base64-Bildencoders](https://www.base64-image.de/)), da die Bilder ziemlich klein sind, sind die resultierenden kodierten Zeichenfolgen recht kurz.

Da einige Schaltflächen eine Doppelfunktion haben, z. B. Play/Pause und Stumm/Aktivieren, haben diese Schaltflächen zwischen unterschiedliche Zustände, die gestylt werden müssen. Wie bereits erwähnt, wird eine `data-state`-Variable verwendet, um anzuzeigen, in welchem Zustand sich solche Schaltflächen derzeit befinden.

Zum Beispiel hat die Play/Pause-Schaltfläche die folgenden Hintergrundbilddefinitionen (die vollständigen base64-Zeichenfolgen wurden der Kürze halber weggelassen):

```css
.controls button[data-state="play"] {
  background-image: url("data:image/png;base64,iVBORw0KGgoAAA…");
}

.controls button[data-state="pause"] {
  background-image: url("data:image/png;base64,iVBORw0KGgoAAA…");
}
```

Wenn sich das `data-state` der Schaltfläche ändert, wird auch das entsprechende Bild geändert. Alle anderen Schaltflächen werden auf ähnliche Weise behandelt.

### Fortschrittsbalken

Das {{htmlelement("progress")}}-Element hat das folgende grundlegende Styling:

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

Wie die {{htmlelement("button")}}-Elemente hat auch das {{htmlelement("progress")}}-Element standardmäßig einen Rahmen, der hier entfernt wird. Auch wird es aus ästhetischen Gründen leicht abgerundete Ecken erhalten.

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

Eine `.data-state`-Klasse wird hier auch verwendet, wenn ein {{htmlelement("progress")}}-Element "gefälscht" wird; wenn es in diesem Zustand ist, muss die Hintergrundfarbe gesetzt werden. Das interne {{htmlelement("span")}}-Element, das als der tatsächliche Fortschrittsteil der gefälschten Fortschrittsleiste verwendet wird, hat seine Breite zunächst auf 0 % gesetzt (es wird über JavaScript aktualisiert) und auch seine Hintergrundfarbe wird gesetzt.

Es gibt einige browserspezifische Eigenschaften, die gesetzt werden müssen, um sicherzustellen, dass Firefox und Chrome die erforderliche Farbe für den Fortschrittsbalken verwenden:

```css
.controls progress::-moz-progress-bar {
  background-color: #0095dd;
}

.controls progress::-webkit-progress-value {
  background-color: #0095dd;
}
```

Obwohl die gleichen Eigenschaften auf den gleichen Wert gesetzt sind, müssen diese Regeln separat definiert werden, da Chrome sie sonst ignoriert.

## JavaScript

Das war es wirklich mit dem unmittelbaren Styling; die nächste Aufgabe besteht darin, eine Reihe von JavaScript-Änderungen vorzunehmen, um sicherzustellen, dass alles wie erwartet funktioniert.

### Steuerungssichtbarkeit

Die erste Änderung ist einfach: Das `data-state` zur Anzeige der Videosteuerungen, wenn JavaScript dem Browser zur Verfügung steht, muss nun gesetzt werden:

```js
// Display the user defined video controls
videoControls.setAttribute("data-state", "visible");
```

### Fortschrittsbalkenunterstützung

Es muss auch überprüft werden, ob der "gefälschte" Fortschrittsbalken eingerichtet werden muss, wenn der Browser das {{htmlelement("progress")}}-Element nicht unterstützt:

```js
const supportsProgress = document.createElement("progress").max !== undefined;
if (!supportsProgress) progress.setAttribute("data-state", "fake");
```

### Schaltflächenfunktionalität

In diesem Abschnitt wird das JavaScript beschrieben, das für die Implementierung der Schaltflächenfunktionalität erforderlich ist.

#### Play/Pause und Stummschalten

Da die Schaltflächen jetzt tatsächlich wie Schaltflächen aussehen und Bilder haben, die anzeigen, was sie tun, müssen einige Änderungen vorgenommen werden, damit die "Doppelfunktionalitäts"-Schaltflächen (wie die Play/Pause-Schaltfläche) den richtigen "Zustand" haben und das korrekte Bild angezeigt werden. Um dies zu erleichtern, wird eine neue Funktion namens `changeButtonState()` definiert, die eine Typvariable akzeptiert, die die Funktion der Schaltfläche angibt:

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

Diese Funktion wird dann von den entsprechenden Ereignishandlern aufgerufen:

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

Sie haben vielleicht bemerkt, dass es neue Handler gibt, bei denen auf die `play`- und `pause`-Ereignisse im Video reagiert wird. Es gibt einen Grund dafür! Auch wenn das Standard-Steuerelementset des Browsers deaktiviert wurde, machen viele Browser sie zugänglich, indem sie mit der rechten Maustaste auf das HTML-Video klicken. Dies bedeutet, dass ein Benutzer das Video über diese Steuerelemente abspielen/anhalten könnte, was die benutzerdefinierten Kontrollschaltflächen dann asynchron machen würde. Wenn ein Benutzer die Standardsteuerungen verwendet, werden die definierten Media-API-Ereignisse — wie `play` und `pause` — ausgelöst, was genutzt werden kann, um sicherzustellen, dass die benutzerdefinierten Kontrollschaltflächen synchron bleiben. Dazu muss ein neuer Klick-Handler für die Play/Pause-Schaltfläche definiert werden, damit auch sie die `play`- und `pause`-Ereignisse auslöst:

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

Die `alterVolume()`-Funktion, die aufgerufen wird, wenn die Lautstärketasten des Players geklickt werden, ändert sich ebenfalls — sie ruft jetzt eine neue Funktion namens `checkVolume()` auf:

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

Diese neue `checkVolume()`-Funktion tut dasselbe wie `alterVolume()`, setzt aber auch den Zustand der Stummschalt-Taste abhängig von der aktuellen Lautstärkeeinstellung des Videos. `checkVolume()` wird auch aufgerufen, wenn das `volumechange`-Ereignis ausgelöst wird:

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

Eine kleine Änderung muss auch am Klick-Handler für das {{htmlelement("progress")}}-Element vorgenommen werden. Da das umschließende {{htmlelement("figure")}}-Element jetzt `position:relative` gesetzt hat, sind die Berechnungen, die dieser Klick-Handler vornimmt, nicht korrekt. Es muss auch die Versatzposition des übergeordneten Elements berücksichtigt werden:

```js
progress.addEventListener("click", (e) => {
  const pos =
    (e.pageX - progress.offsetLeft - progress.offsetParent.offsetLeft) /
    progress.offsetWidth;
  video.currentTime = pos * video.duration;
});
```

#### Vollbild

Die [Vollbildimplementierung](/de/docs/Web/Media/Audio_and_video_delivery/cross_browser_video_player#fullscreen) hat sich nicht geändert.

## Responsives Styling

Nun, da der Player sein grundlegendes Aussehen hat, müssen einige weitere Styling-Änderungen — unter Verwendung von Media Queries — vorgenommen werden, um ihn responsive zu machen.

Der Player funktioniert derzeit recht gut, bis er auf einem "mittelgroßen" Bildschirm (z. B. 1024px/64em) oder kleiner angezeigt wird. In diesem Fall müssen die Ränder und die Füllung auf dem {{htmlelement("figure")}}-Element entfernt werden, um den gesamten verfügbaren Platz zu nutzen, und die Schaltflächen sind etwas zu klein, daher muss dies geändert werden, indem eine neue Höhe auf dem Element gesetzt wird, das die `.controls`-Klasse darauf hat:

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

Dies funktioniert gut genug, bis es auf einem kleineren Bildschirm (680px/42.5em) angezeigt wird, also wird hier ein weiterer Breakpoint gesetzt. Da sich die Höhe des `.controls`-Klassen-Elements nun ändert, wird eine feste Höhe nicht mehr benötigt — daher wird sie auf `auto` gesetzt. Die Definitionen für die Elemente innerhalb des `.controls`-Elements müssen jetzt ebenfalls geändert werden:

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

Der `.progress`-Container wird jetzt über `position:absolute` an die Spitze des Steuerungssatzes verschoben, sodass er und alle Schaltflächen breiter sein müssen. Zusätzlich müssen die Schaltflächen unter den Fortschritts-Container verschoben werden, damit sie sichtbar sind.
