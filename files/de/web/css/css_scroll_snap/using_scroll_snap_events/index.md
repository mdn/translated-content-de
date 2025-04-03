---
title: Verwenden von Scroll-Snap-Ereignissen
slug: Web/CSS/CSS_scroll_snap/Using_scroll_snap_events
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{CSSRef}}

Das [CSS scroll snap](/de/docs/Web/CSS/CSS_scroll_snap) Modul definiert zwei **Scroll-Snap-Ereignisse**: [`scrollsnapchanging`](/de/docs/Web/API/Element/scrollsnapchanging_event) und [`scrollsnapchange`](/de/docs/Web/API/Element/scrollsnapchange_event). Diese ermöglichen das Ausführen von JavaScript als Reaktion darauf, dass der Browser bestimmt, dass neue [Scroll-Snap-Ziele](/de/docs/Web/CSS/CSS_scroll_snap/Basic_concepts) anstehen und ausgewählt werden.

Dieser Leitfaden bietet einen Überblick über diese Ereignisse zusammen mit vollständigen Beispielen.

## Überblick über die Ereignisse

Scroll-Snap-Ereignisse werden auf einem {{Glossary("Scroll_container", "Scrolling-Container")}} festgelegt, der potenzielle Scroll-Snap-Ziele enthält:

- Das [`scrollsnapchanging`](/de/docs/Web/API/Element/scrollsnapchanging_event) Ereignis wird ausgelöst, wenn der Browser bestimmt, dass ein neues Scroll-Snap-Ziel ausgewählt wird, wenn die aktuelle Scroll-Geste endet. Dies ist das _ausstehende_ Scroll-Snap-Ziel. Insbesondere wird dieses Ereignis während einer Scroll-Geste ausgelöst, jedes Mal, wenn der Benutzer über potenzielle neue Snap-Ziele hinweg bewegt. Während das `scrollsnapchanging`-Ereignis möglicherweise mehrmals für jede Scroll-Geste ausgelöst wird, wird es nicht bei allen potenziellen Snap-Zielen für eine Scroll-Geste ausgelöst, die über mehrere Snap-Ziele hinweg bewegt. Stattdessen wird es nur für das letzte Ziel ausgelöst, auf dem das Snapping potenziell zum Stillstand kommt.

- Das [`scrollsnapchange`](/de/docs/Web/API/Element/scrollsnapchange_event) Ereignis wird am Ende einer Scroll-Operation ausgelöst, wenn ein neues Scroll-Snap-Ziel ausgewählt wird. Insbesondere wird dieses Ereignis ausgelöst, wenn eine Scroll-Geste abgeschlossen ist, jedoch nur, wenn ein neues Snap-Ziel ausgewählt wird. Dieses Ereignis wird unmittelbar vor dem [`scrollend`](/de/docs/Web/API/Element/scrollend_event) Ereignis ausgelöst.

Schauen wir uns ein Beispiel an, das die beiden Ereignisse in Aktion zeigt (Sie werden später im Artikel sehen, wie dies aufgebaut ist):

{{ EmbedLiveSample("Eindimensionaler Scroller", "100%", "500") }}

Versuchen Sie, in der Liste der Boxen nach oben und unten zu scrollen:

- Versuchen Sie, den Container langsam nach oben und unten zu scrollen, ohne die Scroll-Geste loszulassen. Bewegen Sie zum Beispiel Ihre Finger über den Scrollbereich auf einem Touchscreen-Gerät oder Trackpad, oder halten Sie die Maustaste auf der Scrollleiste gedrückt und bewegen Sie die Maus. Die Boxen, über die Sie hinweg bewegen, sollten sich in eine dunklere Graustufe verfärben, während Sie über sie hinweg gehen, und dann wieder normal werden, wenn Sie sich von ihnen entfernen. Dies ist das `scrollsnapchanging`-Ereignis in Aktion.
- Versuchen Sie nun, die Scroll-Geste loszulassen; die Box, die Ihrem Scrollort am nächsten liegt, sollte zu einer lila Farbe mit weißem Text animieren. Die Animation erfolgt, wenn das `scrollsnapchange`-Ereignis ausgelöst wird.
- Versuchen Sie schließlich, schnell zu scrollen. Streichen Sie zum Beispiel Ihr Finger stark über den Bildschirm, um an mehreren potenziellen Zielen vorbeizuscrollen, bevor Sie beginnen, in der Nähe eines weiter unten im Scroll-Container gelegenen Ziels zur Ruhe zu kommen. Sie sollten nur ein `scrollsnapchanging`-Ereignis sehen, das ausgelöst wird, während das Scrollen beginnt, sich zu verlangsamen, bevor das `scrollsnapchange`-Ereignis ausgelöst wird und das ausgewählte Snap-Ziel lila wird.

## Das `SnapEvent`-Ereignisobjekt

Beide der oben genannten Ereignisse teilen sich das [`SnapEvent`](/de/docs/Web/API/SnapEvent) Ereignisobjekt. Dieses hat zwei Eigenschaften, die entscheidend dafür sind, wie Scroll-Snap-Ereignisse funktionieren:

- [`snapTargetBlock`](/de/docs/Web/API/SnapEvent/snapTargetBlock) gibt eine Referenz zu dem Element zurück, zu dem im {{Glossary("Flow_relative_values#block_direction", "Block-Richtung")}} des Scroll-Ziels gesprungen wird, wenn das Ereignis ausgelöst wird, oder `null`, wenn das Scroll-Snapping nur in der Inline-Richtung erfolgt, sodass kein Element in der Blockrichtung gerissen wird.
- [`snapTargetInline`](/de/docs/Web/API/SnapEvent/snapTargetInline) gibt eine Referenz zu dem Element zurück, zu dem im {{Glossary("Flow_relative_values#inline_direction", "Inline-Richtung")}} des Scroll-Ziels gesprungen wird, wenn das Ereignis ausgelöst wird, oder `null`, wenn das Scroll-Snapping nur in der Blockrichtung erfolgt, sodass kein Element in der Inline-Richtung gerissen wird.

Diese Eigenschaften ermöglichen es Ereignis-Handler-Funktionen, das Element zu melden, zu dem gesprungen wurde (im Fall von `scrollsnapchange`) oder das Element, zu dem gesprungen würde, wenn die Scroll-Geste jetzt abgeschlossen wäre (im Fall von `scrollsnapchanging`) — diese Funktion kann sowohl in einer als auch in zwei Dimensionen ausgeführt werden. Sie können diese Elemente dann in jeder gewünschten Weise manipulieren, zum Beispiel, indem Sie direkt Styles über ihre [`style`](/de/docs/Web/API/HTMLElement/style) Eigenschaften setzen oder Klassen auf sie anwenden, die im Stylesheet definierte Styles haben.

### Beziehung mit der CSS-Eigenschaft `scroll-snap-type`

Die auf `SnapEvent` verfügbaren Eigenschaftswerte entsprechen direkt dem Wert der {{cssxref("scroll-snap-type")}} CSS-Eigenschaft, die auf den Scroll-Container gesetzt ist:

- Wenn die Snap-Achse als `block` festgelegt wird (oder ein physikalischer Achswert, der im aktuellen Schreibmodus mit `block` gleichzusetzen ist), gibt nur `snapTargetBlock` eine Elementreferenz zurück.
- Wenn die Snap-Achse als `inline` festgelegt wird (oder ein physikalischer Achswert, der im aktuellen Schreibmodus mit `inline` gleichzusetzen ist), gibt nur `snapTargetInline` eine Elementreferenz zurück.
- Wenn die Snap-Achse als `both` festgelegt wird, geben `snapTargetBlock` und `snapTargetInline` eine Elementreferenz zurück.

### Behandlung eindimensionaler Scroller

Wenn Sie mit einem horizontalen Scroller arbeiten, wird sich nur die `snapTargetInline` Eigenschaft des Ereignisobjekts ändern, wenn sich das gesnapte Element ändert, falls der Inhalt einen horizontalen {{cssxref("writing-mode")}} hat, oder die `snapTargetBlock` Eigenschaft, falls der Inhalt einen vertikalen `writing-mode` hat.

Umgekehrt, wenn Sie mit einem vertikalen Scroller arbeiten, wird sich nur die `snapTargetBlock` Eigenschaft ändern, wenn sich das gesnapte Element ändert, falls der Inhalt einen horizontalen `writing-mode` hat, oder die `snapTargetInline` Eigenschaft, falls der Inhalt einen vertikalen `writing-mode` hat.

In beiden Fällen gibt die nicht ändernde Eigenschaft der beiden `null` zurück.

Schauen wir uns ein Beispiel-Snippet an, um eine typische eindimensionale Scroll-Snap-Ereignis-Handler-Funktion zu zeigen:

```js
scrollingElem.addEventListener("scrollsnapchange", (event) => {
  event.snapTargetBlock.className = "select-section";
});
```

In diesem Snippet wird eine `scrollsnapchange`-Handler-Funktion auf einem Blockrichtungs-Scrolling-Container-Element festgelegt, in dem Snap-Ziele erscheinen. Wenn das Ereignis ausgelöst wird, setzen wir eine `select-section`-Klasse auf das `snapTargetBlock`-Element, die verwendet werden könnte, um ein neu ausgewähltes Snap-Ziel so zu gestalten, dass es so aussieht, als wäre es ausgewählt worden (zum Beispiel mit einer Animation).

### Behandlung zweidimensionaler Scroller

Wenn Sie mit einem horizontalen _und_ vertikalen Scroller arbeiten, wird der Code komplexer. Dies liegt daran, dass sowohl die `snapTargetBlock`-Eigenschaft _als auch_ die `snapTargetInline`-Eigenschafts-Werte eine Elementreferenz zurückgeben (keiner gibt `null` zurück), und eine der beiden Eigenschaften wird sich ändern, abhängig davon, in welche Richtung Sie scrollen und der `writing-mode` des Inhalts:

- Wenn der Scroller horizontal gescrollt wird, wird sich die `snapTargetInline` Eigenschaft ändern, wenn sich das gesnapte Element ändert, falls der Inhalt einen horizontalen {{cssxref("writing-mode")}} hat, oder die `snapTargetBlock` Eigenschaft, falls der Inhalt einen vertikalen `writing-mode` hat.
- Wenn der Scroller vertikal gescrollt wird, wird sich die `snapTargetBlock` Eigenschaft ändern, wenn sich das gesnapte Element ändert, falls der Inhalt einen horizontalen `writing-mode` hat, oder die `snapTargetInline` Eigenschaft, falls der Inhalt einen vertikalen `writing-mode` hat.

Um dies zu handhaben, müssen Sie wahrscheinlich verfolgen, ob es das `snapTargetBlock` oder das `snapTargetInline`-Element war, das sich geändert hat. Schauen wir uns ein Beispiel an:

```js
const prevState = {
  snapTargetInline: "s1",
  snapTargetBlock: "s1",
};

scrollingElem.addEventListener("scrollsnapchange", (event) => {
  if (!(prevState.snapTargetBlock === event.snapTargetBlock.id)) {
    console.log(
      `The container was scrolled in the block direction to element ${event.snapTargetBlock.id}`,
    );
  }

  if (!(prevState.snapTargetInline === event.snapTargetInline.id)) {
    console.log(
      `The container was scrolled in the block direction to element ${event.snapTargetBlock.id}`,
    );
  }

  prevState.snapTargetBlock = event.snapTargetBlock.id;
  prevState.snapTargetInline = event.snapTargetInline.id;
});
```

In diesem Snippet definieren wir zuerst ein Objekt (`prevState`), das die ID des vorherigen `snapTargetBlock` und `snapTargetInline`-Elemente speichert.

In der Ereignis-Handler-Funktion verwenden wir `if`-Anweisungen, um zu testen, ob:

- Die `prevState.snapTargetBlock` ID gleich der ID des aktuellen `event.snapTargetBlock` Elements ist.
- Die `prevState.snapTargetInline` ID gleich der ID des aktuellen `event.snapTargetInline` Elements ist.

Wenn die Werte unterschiedlich sind, bedeutet dies, dass der Scroller in dieser Richtung (block oder inline) gescrollt wurde, und wir protokollieren eine Nachricht an die Konsole, um dies anzuzeigen. In einem echten Beispiel würden Sie das gesnapte Element wahrscheinlich in irgendeiner Weise stylen, um anzuzeigen, dass es gesnappt wurde.

Wir aktualisieren dann die Werte von `prevState.snapTargetBlock` und `prevState.snapTargetInline`, bereit für den nächsten Lauf des Ereignis-Handlers.

Für den Rest dieses Artikels werden wir uns ein paar vollständige Scroll-Snap-Ereignis-Beispiele ansehen, mit denen Sie in den live dargestellten Versionen am Ende jedes Abschnitts experimentieren können.

## Eindimensionales Scroller-Beispiel

Dieses Beispiel zeigt ein vertikal scrollendes {{htmlelement("main")}}-Element, das mehrere hellgraue {{htmlelement("section")}}-Elemente enthält, die alle Scroll-Snap-Ziele sind. Wenn ein neues Snap-Ziel ansteht, wird es einen dunkleren Grauton annehmen. Wenn ein neues Snap-Ziel ausgewählt wird, wird es sanft zu Lila mit weißem Text animieren. Wenn zuvor ein anderes Snap-Ziel ausgewählt wurde, wird es sanft zurück zu Grau mit schwarzem Text animieren.

### HTML

Das HTML für das Beispiel ist ein einzelnes `<main>`-Element. Wir werden die `<section>`-Elemente später mit JavaScript dynamisch hinzufügen, um Platz auf der Seite zu sparen.

```html
<main></main>
```

### CSS

```css hidden
* {
  box-sizing: border-box;
}

html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: inherit;
}

h2 {
  font-size: 1rem;
  letter-spacing: 1px;
}

section {
  font-family: Arial, Helvetica, sans-serif;
  border-radius: 5px;
  background: #eee;
  box-shadow:
    inset 1px 1px 4px rgb(255 255 255 / 0.5),
    inset -1px -1px 4px rgb(0 0 0 / 0.5);
  width: 150px;
  height: 150px;

  display: flex;
  align-items: center;
  justify-content: center;
}
```

Im CSS beginnen wir damit, dem `<main>`-Element eine kräftige schwarze {{cssxref("border")}} und eine feste {{cssxref("width")}} und {{cssxref("height")}} zu geben. Wir setzen seinen {{cssxref("overflow")}}-Wert auf `scroll`, damit überfließender Inhalt versteckt ist und gescrollt werden kann, und setzen {{cssxref("scroll-snap-type")}} auf `block mandatory`, sodass Snap-Ziele nur in der Blockrichtung immer gesnappt werden.

```css
main {
  border: 3px solid black;
  width: 250px;
  height: 450px;
  overflow: scroll;
  scroll-snap-type: block mandatory;
}
```

Jedes `<section>`-Element erhält einen {{cssxref("margin")}} von `50px`, um die `<section>`-Elemente zu trennen und das Scroll-Snap-Verhalten deutlicher zu machen. Wir setzen dann {{cssxref("scroll-snap-align")}} auf `center`, um anzugeben, dass wir auf die Mitte jedes Snap-Ziels snappen möchten. Schließlich wenden wir eine {{cssxref("transition")}} an, um das sanfte Animieren zu ermöglichen, wenn eine Snap-Ziel-Auswahl getroffen wurde oder ansteht.

```css
section {
  margin: 50px auto;
  scroll-snap-align: center;
  transition: 0.5s ease;
}
```

Die oben erwähnten Stiländerungen werden durch Klassen angewendet, die auf die `<section>`-Elemente mittels JavaScript angewendet werden. Die `select-section`-Klasse wird angewendet, um eine Auswahl zu signalisieren — dies setzt einen lila Hintergrund und weiße Textfarbe. Die `pending`-Klasse wird angewendet, um eine ausstehende Snap-Ziel-Auswahl anzuzeigen — dies färbt den Hintergrund der Zielauswahl dunkler grau.

```css
.pending {
  background-color: #ccc;
}

.select-section {
  background: purple;
  color: white;
}
```

### JavaScript

Im JavaScript beginnen wir, indem wir eine Referenz auf das `<main>`-Element greifen und die Anzahl der `<section>`-Elemente definieren, die generiert werden sollen (in diesem Fall 21) sowie eine Variable, von der aus gezählt wird. Wir verwenden dann eine [`while`](/de/docs/Web/JavaScript/Reference/Statements/while)-Schleife, um die `<section>`-Elemente zu generieren, wobei wir jedem eines Kindes [`h2`](/de/docs/Web/HTML/Element/Heading_Elements) mit Text geben, der `Section` plus den aktuellen Wert von `n` liest.

```js
const mainElem = document.querySelector("main");
const sectionCount = 21;
let n = 1;

while (n <= sectionCount) {
  mainElem.innerHTML += `
    <section>
      <h2>Section ${n}</h2>
    </section>
  `;
  n++;
}
```

Nun zur [`scrollsnapchanging`](/de/docs/Web/API/Element/scrollsnapchanging_event) Ereignis-Handler-Funktion. Wenn ein Kind des `<main>`-Elements (d.h. jedes `<section>`-Element) zu einer ausstehenden Snap-Ziel-Auswahl wird, tun wir folgendes:

1. Überprüfen Sie, ob ein Element zuvor die `pending`-Klasse angewendet hatte und, falls ja, entfernen Sie sie. Dies ist, damit nur das aktuelle ausstehende Ziel die `pending`-Klasse erhält und dunkler grau gefärbt wird. Wir wollen nicht, dass zuvor anstehende Ziele, die nicht mehr anstehen, das Styling beibehalten.
2. Geben Sie dem Element, das durch die [`snapTargetBlock`](/de/docs/Web/API/SnapEvent/snapTargetBlock)-Eigenschaft referenziert wird (das eines der `<section>`-Elemente sein wird), die `pending`-Klasse, damit es eine dunklere Graustufe annimmt.

```js
mainElem.addEventListener("scrollsnapchanging", (event) => {
  const previousPending = document.querySelector(".pending");
  if (previousPending) {
    previousPending.classList.remove("pending");
  }

  event.snapTargetBlock.classList.add("pending");
});
```

> [!NOTE]
> Wir müssen uns für dieses Demo keine Sorgen um die `snapTargetInline`-Eigenschaft des Ereignisobjekts machen — wir scrollen nur vertikal und das Demo verwendet einen horizontalen Schreibmodus. Daher wird sich nur der `snapTargetBlock`-Wert ändern. In diesem Fall wird `snapTargetInline` immer `null` zurückgeben.

Wenn eine Scrollgeste endet und ein `<section>`-Element tatsächlich als Snap-Ziel ausgewählt wird, wird die [`scrollsnapchange`](/de/docs/Web/API/Element/scrollsnapchange_event) Ereignis-Handler-Funktion aufgerufen. Diese:

1. Überprüft, ob zuvor ein Snap-Ziel ausgewählt wurde — d.h. ob zuvor eine `select-section`-Klasse auf ein Element angewendet wurde. Falls ja, entfernen wir sie.
2. Wendet die `select-section`-Klasse auf das `<section>`-Element an, das in der `snapTargetBlock`-Eigenschaft referenziert wird, sodass das gerade ausgewählte Snap-Ziel die Auswahlanimation erhält.

```js
mainElem.addEventListener("scrollsnapchange", (event) => {
  const currentlySnapped = document.querySelector(".select-section");
  if (currentlySnapped) {
    currentlySnapped.classList.remove("select-section");
  }

  event.snapTargetBlock.classList.add("select-section");
});
```

### Ergebnis

Versuchen Sie, im Scroll-Container nach oben und unten zu scrollen und beobachten Sie das oben beschriebene Verhalten:

{{ EmbedLiveSample("Eindimensionaler Scroller", "100%", "500") }}

## Zweidimensionales Scroller-Beispiel

Dieses Beispiel ist dem vorherigen ähnlich, außer dass es ein horizontal _und_ vertikal scrollendes {{htmlelement("main")}}-Element enthält, das mehrere hellgraue {{htmlelement("section")}}-Elemente umfasst, die alle Snap-Ziele sind.

Das HTML für das Beispiel ist dasselbe wie im vorherigen Beispiel — ein einzelnes `<main>`-Element.

```html hidden
<main></main>
```

### CSS

```css hidden
* {
  box-sizing: border-box;
}

html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: inherit;
}

section {
  font-family: Arial, Helvetica, sans-serif;
  border-radius: 5px;
  background: #eee;
  box-shadow:
    inset 1px 1px 4px rgb(255 255 255 / 0.5),
    inset -1px -1px 4px rgb(0 0 0 / 0.5);
  width: 150px;
  height: 150px;

  display: flex;
  align-items: center;
  justify-content: center;

  scroll-snap-align: center;
}

h2 {
  font-size: 1rem;
  letter-spacing: 1px;
}
```

Das CSS für dieses Beispiel ist dem CSS im vorherigen Beispiel ähnlich. Die bedeutendsten Unterschiede sind wie folgt.

Schauen wir uns zunächst das Styling des `<main>`-Elements an. Wir möchten die `<section>`-Elemente als Raster anordnen, daher verwenden wir das [CSS-Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout), um anzugeben, dass sie in sieben Spalten angezeigt werden sollen, mit einem {{cssxref("grid-template-columns")}}-Wert von `repeat(7, 1fr)`. Wir spezifizieren außerdem den Abstand um die `<section>`-Elemente, indem wir `padding` und {{cssxref("gap")}} auf das `<main>`-Element anwenden, anstatt `margin` auf die `<section>`-Elemente.

Schließlich, da wir in diesem Beispiel in beiden Richtungen scrollen, setzen wir {{cssxref("scroll-snap-type")}} auf `both mandatory`, sodass Snap-Ziele in der Blockrichtung _und_ Inline-Richtung immer gesnappt werden.

```css
main {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  padding: 100px;
  gap: 50px;
  overflow: scroll;
  border: 3px solid black;
  width: 350px;
  height: 350px;

  scroll-snap-type: both mandatory;
}
```

Nun werden wir in diesem Beispiel CSS-Animationen anstatt Übergänge verwenden. Dies führt zu komplexerem Code, aber ermöglicht feinere Kontrolle über die angewandten Animationen.

Zuerst definieren wir die Klassen, die angewendet werden, um zu signalisieren, dass eine Snap-Ziel-Auswahl getroffen wurde oder ansteht. Die Klassen `select-section` und `deselect-section` werden Keyframe-Animationen anwenden, um eine Auswahl oder Deselektion zu signalisieren. Die `pending`-Klasse wird angewendet, um eine ausstehende Snap-Ziel-Auswahl anzuzeigen (sie wendet einen dunkleren Grauton auf den Hintergrund der Auswahl an, wie im vorherigen Beispiel).

Die {{cssxref("@keyframes")}} animieren von einem grauen Hintergrund und schwarzer (Standard-)Textfarbe zu einem lila Hintergrund und weißer Textfarbe, und zurück, wenn das jeweilige Ereignis auftritt. Die letzte Animation unterscheidet sich etwas von der ersten — sie verwendet auch {{cssxref("opacity")}}, um einen Fade-Out/Fade-In-Effekt zu erzeugen.

```css
.select-section {
  animation: select 0.8s ease forwards;
}

.deselect-section {
  animation: deselect 0.8s ease forwards;
}

.pending {
  background-color: #ccc;
}

@keyframes select {
  from {
    background: #eee;
    color: black;
  }

  to {
    background: purple;
    color: white;
  }
}

@keyframes deselect {
  0% {
    background: purple;
    color: white;
    opacity: 1;
  }

  80% {
    background: #eee;
    color: black;
    opacity: 0.1;
  }

  100% {
    background: #eee;
    color: black;
    opacity: 1;
  }
}
```

### JavaScript

Im JavaScript beginnen wir wie im vorherigen Beispiel, außer dass wir diesmal 49 `<section>`-Elemente generieren und jedem eine ID von `s` plus den aktuellen Wert von `n` geben, um sie später leichter zu verfolgen. Mit dem CSS-Grid-Layout, das wir oben definiert haben, haben wir sieben Spalten mit sieben `<section>`-Elementen.

```js
const mainElem = document.querySelector("main");
const sectionCount = 49;
let n = 1;

while (n <= sectionCount) {
  mainElem.innerHTML += `
    <section id="s${n}">
      <h2>Section ${n}</h2>
    </section>
  `;
  n++;
}
```

Als nächstes definieren wir ein Objekt namens `prevState`, das ermöglicht uns, das zuvor ausgewählte Snap-Ziel zu jedem Zeitpunkt zu verfolgen — seine Eigenschaften speichern die vorherigen Inline- und Block-Snap-Ziel-IDs. Dies ist wichtig, um festzustellen, ob wir das neue Block-Ziel oder das neue Inline-Ziel jedes Mal stylen müssen, wenn ein Ereignis-Handler aufgerufen wird.

```js
const prevState = {
  snapTargetInline: "s1",
  snapTargetBlock: "s1",
};
```

Zum Beispiel, setzen wir voraus, dass der Scroll-Container so gescrollt wird, dass sich die ID des neuen [`SnapEvent.snapTargetBlock`](/de/docs/Web/API/SnapEvent/snapTargetBlock)-Elements geändert hat (es ist nicht gleich der ID, die in `prevState.snapTargetBlock` gespeichert ist), aber die ID des neuen [`SnapEvent.snapTargetInline`](/de/docs/Web/API/SnapEvent/snapTargetInline)-Elements ist immer noch die gleiche wie die ID, die in `prevState.snapTargetInline` gespeichert ist. Dies bedeutet, dass wir uns zu einem neuen Snap-Ziel in der Blockrichtung bewegt haben, also sollten wir `SnapEvent.snapTargetBlock` stylen, aber wir haben uns nicht zu einem neuen Snap-Ziel in der Inline-Richtung bewegt, also sollten wir `SnapEvent.snapTargetInline` nicht stylen.

Dieses Mal werden wir die [`scrollsnapchange`](/de/docs/Web/API/Element/scrollsnapchange_event) Ereignis-Handler-Funktion zuerst erläutern. In dieser Funktion:

1. Stellen wir sicher, dass ein zuvor ausgewähltes `<section>`-Element-Snap-Ziel (wie durch das Vorhandensein der `select-section`-Klasse angezeigt) die `deselect-section`-Klasse erhält, damit es die Deselektionsanimation zeigt. Wenn kein Snap-Ziel vorher ausgewählt war, wenden wir die `select-section`-Klasse auf das erste `<section>` im DOM an, damit es als ausgewählt erscheint, wenn die Seite zum ersten Mal geladen wird.
2. Vergleichen wir die vorherige Snap-Ziel-ID mit der neu ausgewählten Snap-Ziel-ID, sowohl für die Block- als auch die Inline-Auswahl. Wenn sie unterschiedlich sind, deutet dies darauf hin, dass sich die Auswahl geändert hat, sodass wir die `select-section`-Klasse auf das entsprechende Snap-Ziel anwenden, um dies visuell anzuzeigen.
3. Aktualisieren wir `prevState.snapTargetBlock` und `prevState.snapTargetInline`, damit sie mit den IDs der gerade ausgewählten Scroll-Snap-Ziele übereinstimmen, sodass sie beim nächsten Aufruf des Ereignisses die vorherigen Auswahlen darstellen.

```js
mainElem.addEventListener("scrollsnapchange", (event) => {
  if (document.querySelector(".select-section")) {
    document.querySelector(".select-section").className = "deselect-section";
  } else {
    document.querySelector("section").className = "select-section";
  }

  if (!(prevState.snapTargetBlock === event.snapTargetBlock.id)) {
    event.snapTargetBlock.className = "select-section";
  }

  if (!(prevState.snapTargetInline === event.snapTargetInline.id)) {
    event.snapTargetInline.className = "select-section";
  }

  prevState.snapTargetBlock = event.snapTargetBlock.id;
  prevState.snapTargetInline = event.snapTargetInline.id;
});
```

Wenn die [`scrollsnapchanging`](/de/docs/Web/API/Element/scrollsnapchanging_event) Ereignis-Handler-Funktion aufgerufen wird, tun wir folgendes:

1. Entfernen wir die `pending`-Klasse von dem Element, das sie zuvor angewendet bekommen hatte, sodass nur das aktuelle ausstehende Ziel die `pending`-Klasse erhält und dunkler grau gefärbt wird.
2. Geben wir dem aktuellen ausstehenden Element die `pending`-Klasse, sodass es dunkler grau wird, aber nur, wenn es nicht bereits die `select-section`-Klasse angewendet hat — wir möchten, dass ein zuvor ausgewähltes Ziel das lila Auswahl-Styling beibehält, bis ein neues Ziel tatsächlich ausgewählt wird. Wir fügen auch einen zusätzlichen Check in den `if`-Anweisungen hinzu, um sicherzustellen, dass wir nur das Inline- oder Block-ausstehendes Snap-Ziel stylen, abhängig davon, welches sich geändert hat. Wieder vergleichen wir das vorherige Snap-Ziel mit dem aktuellen Snap-Ziel in jedem Fall.

```js
mainElem.addEventListener("scrollsnapchanging", (event) => {
  const previousPending = document.querySelector(".pending");
  if (previousPending) {
    previousPending.className = "";
  }

  if (
    !(event.snapTargetBlock.className === "select-section") &&
    !(prevState.snapTargetBlock === event.snapTargetBlock.id)
  ) {
    event.snapTargetBlock.className = "pending";
  }

  if (
    !(event.snapTargetInline.className === "select-section") &&
    !(prevState.snapTargetInline === event.snapTargetInline.id)
  ) {
    event.snapTargetInline.className = "pending";
  }
});
```

### Ergebnis

Versuchen Sie, im Scroll-Container horizontal und vertikal zu scrollen und beobachten Sie das oben beschriebene Verhalten:

{{ EmbedLiveSample("Zweidimensionaler Scroller", "100%", "500") }}

## Scroll-Snap-Ereignisse auf `Document` und `Window`

In diesem Artikel haben wir die Scroll-Snap-Ereignisse behandelt, die auf der [`Element`](/de/docs/Web/API/Element) Schnittstelle auftreten, aber dieselben Ereignisse werden auch auf den [`Document`](/de/docs/Web/API/Document) und [`Window`](/de/docs/Web/API/Window) Objekten ausgelöst. Siehe:

- `Document` [`scrollsnapchange`](/de/docs/Web/API/Document/scrollsnapchange_event) und [`scrollsnapchanging`](/de/docs/Web/API/Document/scrollsnapchanging_event) Ereignis-Referenzen.
- `Window` [`scrollsnapchange`](/de/docs/Web/API/Window/scrollsnapchange_event) und [`scrollsnapchanging`](/de/docs/Web/API/Window/scrollsnapchanging_event) Ereignis-Referenzen.

Diese funktionieren auf ähnliche Weise wie die `Element`-Versionen, außer dass das gesamte HTML-Dokument als Scroll-Snap-Container festgelegt werden muss (d.h. {{cssxref("scroll-snap-type")}} ist auf das {{htmlelement("html")}}-Element gesetzt).

Zum Beispiel, wenn wir ein ähnliches Beispiel wie das oben genannte nehmen, bei dem wir ein `<main>`-Element mit erheblichem Inhalt haben:

```html
<main>
  <!-- Significant content -->
</main>
```

Das `<main>`-Element könnte mit einer Kombination von CSS-Eigenschaften zu einem Scroll-Container gemacht werden, zum Beispiel:

```css
main {
  width: 250px;
  height: 450px;
  overflow: scroll;
}
```

Sie könnten dann Scroll-Snapping-Verhalten auf dem scrollenden Inhalt umsetzen, indem Sie die {{cssxref("scroll-snap-type")}}-Eigenschaft auf das {{htmlelement("html")}}-Element spezifizieren:

```css
html {
  scroll-snap-type: block mandatory;
}
```

Das folgende JavaScript-Snippet würde bewirken, dass das `scrollsnapchange`-Ereignis auf dem HTML-Dokument ausgelöst wird, wenn ein Kind des `<main>`-Elements zu einem neu ausgewählten Snap-Ziel wird. In der Handler-Funktion setzen wir eine `selected`-Klasse auf das Kind, das durch das [`SnapEvent.snapTargetBlock`](/de/docs/Web/API/SnapEvent/snapTargetBlock)-Element referenziert wird, die verwendet werden könnte, um es (zum Beispiel mit einer Animation) zu gestalten, um zu zeigen, dass es ausgewählt wurde, wenn das Ereignis ausgelöst wird.

```js
document.addEventListener("scrollsnapchange", (event) => {
  event.snapTargetBlock.classList.add("selected");
});
```

Wir könnten das Ereignis stattdessen auf `Window` auslösen, um dieselbe Funktionalität zu erreichen:

```js
window.addEventListener("scrollsnapchange", (event) => {
  event.snapTargetBlock.classList.add("selected");
});
```

## Siehe auch

- [`scrollsnapchanging`](/de/docs/Web/API/Element/scrollsnapchanging_event) Ereignis
- [`scrollsnapchange`](/de/docs/Web/API/Element/scrollsnapchange_event) Ereignis
- [`SnapEvent`](/de/docs/Web/API/SnapEvent)
- [CSS scroll snap](/de/docs/Web/CSS/CSS_scroll_snap) Modul
- [Scroll Snap Events](https://developer.chrome.com/blog/scroll-snap-events) auf developer.chrome.com (2024)
