---
title: Verwendung von Scroll-Snap-Ereignissen
slug: Web/CSS/CSS_scroll_snap/Using_scroll_snap_events
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{CSSRef}}

Das Modul [CSS Scroll Snap](/de/docs/Web/CSS/CSS_scroll_snap) definiert zwei **Scroll-Snap-Ereignisse**: [`scrollsnapchanging`](/de/docs/Web/API/Element/scrollsnapchanging_event) und [`scrollsnapchange`](/de/docs/Web/API/Element/scrollsnapchange_event). Diese ermöglichen die Ausführung von JavaScript als Reaktion darauf, dass der Browser feststellt, dass neue [Scroll-Snap-Ziele](/de/docs/Web/CSS/CSS_scroll_snap/Basic_concepts) ausstehend beziehungsweise ausgewählt sind.

Dieser Leitfaden bietet einen Überblick über diese Ereignisse zusammen mit vollständigen Beispielen.

## Überblick über die Ereignisse

Scroll-Snap-Ereignisse werden auf einem {{Glossary("Scroll_container", "Scroll-Container")}} gesetzt, der potenzielle Scroll-Snap-Ziele enthält:

- Das Ereignis [`scrollsnapchanging`](/de/docs/Web/API/Element/scrollsnapchanging_event) wird ausgelöst, wenn der Browser feststellt, dass ein neues Scroll-Snap-Ziel gewählt wird, wenn die aktuelle Scroll-Geste endet. Dies ist das _ausstehende_ Scroll-Snap-Ziel. Genauer gesagt wird dieses Ereignis während einer Scroll-Geste ausgelöst, jedes Mal, wenn der Benutzer über potenzielle neue Snap-Ziele bewegt wird. Während das `scrollsnapchanging`-Ereignis möglicherweise mehrmals für jede Scroll-Geste ausgelöst wird, wird es nicht bei allen potenziellen Snap-Zielen für eine Scroll-Geste ausgelöst, die über mehrere Snap-Ziele hinweg geht. Es wird vielmehr nur für das letzte Ziel ausgelöst, auf dem das Snapping potenziell zur Ruhe kommt.

- Das Ereignis [`scrollsnapchange`](/de/docs/Web/API/Element/scrollsnapchange_event) wird am Ende einer Scroll-Operation ausgelöst, wenn ein neues Scroll-Snap-Ziel ausgewählt wird. Genauer gesagt wird dieses Ereignis ausgelöst, wenn eine Scroll-Geste abgeschlossen ist, jedoch nur, wenn ein neues Snap-Ziel ausgewählt wird. Dieses Ereignis wird kurz vor dem Ereignis [`scrollend`](/de/docs/Web/API/Element/scrollend_event) ausgelöst.

Schauen wir uns ein Beispiel an, das die beiden Ereignisse in Aktion zeigt (wie dies später im Artikel aufgebaut wird, werden Sie sehen):

{{ EmbedLiveSample("Eindimensionales Scroll-Beispiel", "100%", "500") }}

Probieren Sie aus, die Liste der Kästchen hinauf und hinab zu scrollen:

- Versuchen Sie, den Container langsam auf und ab zu scrollen, ohne die Scroll-Geste loszulassen. Ziehen Sie zum Beispiel Ihre Finger über den Scroll-Bereich auf einem Touch-Device oder Trackpad oder halten Sie die Maustaste auf der Scroll-Leiste gedrückt und bewegen Sie die Maus. Die Kästchen, über die Sie sich bewegen, sollten sich beim Überfahren mit dunklerer grauer Farbe färben und dann wieder in ihre normale Farbe zurückkehren, wenn Sie sich wieder von ihnen weg bewegen. Dies ist das `scrollsnapchanging`-Ereignis in Aktion.
- Versuchen Sie nun, die Scroll-Geste loszulassen; das nächstgelegene Kästchen zu Ihrer Scroll-Position sollte sich in eine lila Farbe mit weißem Text animieren. Die Animation tritt auf, wenn das `scrollsnapchange`-Ereignis ausgelöst wird.
- Versuchen Sie schließlich, schnell zu scrollen. Schleudern Sie zum Beispiel den Finger kräftig über den Bildschirm, um mehrere potenzielle Ziele zu passieren, bevor Sie in der Nähe eines Ziels weiter unten im Scroll-Container zur Ruhe kommen. Sie sollten nur ein `scrollsnapchanging`-Ereignis sehen, das ausgelöst wird, wenn das Scrollen beginnt, sich zu verlangsamen, bevor das `scrollsnapchange`-Ereignis ausgelöst wird und das ausgewählte Snap-Ziel lila wird.

## Das `SnapEvent`-Ereignisobjekt

Beide der oben genannten Ereignisse teilen das [`SnapEvent`](/de/docs/Web/API/SnapEvent)-Ereignisobjekt. Dieses hat zwei Eigenschaften, die der Funktionsweise von Scroll-Snap-Ereignissen entscheidend sind:

- [`snapTargetBlock`](/de/docs/Web/API/SnapEvent/snapTargetBlock) gibt eine Referenz auf das Element zurück, zu dem im {{Glossary("Flow_relative_values#block_direction", "Blockrichtung")}} beim Ereignisauslöser geschnappt wurde, oder `null`, wenn das Scroll-Snapping nur in der Inlinerichtung erfolgt, sodass kein Element in der Blockrichtung geschnappt wird.
- [`snapTargetInline`](/de/docs/Web/API/SnapEvent/snapTargetInline) gibt eine Referenz auf das Element zurück, zu dem im {{Glossary("Flow_relative_values#inline_direction", "Inlinerichtung")}} beim Ereignisauslöser geschnappt wurde, oder `null`, wenn das Scroll-Snapping nur in der Blockrichtung erfolgt, sodass kein Element in der Inlinerichtung geschnappt wird.

Diese Eigenschaften ermöglichen es Ereignishandler-Funktionen, das Element zu melden, das geschnappt wurde (im Fall von `scrollsnapchange`) oder das Element, das _geschnappt würde_, wenn die Scroll-Geste jetzt beendet wäre (im Fall von `scrollsnapchanging`) — in einer oder zwei Dimensionen. Sie können diese Elemente dann auf jede gewünschte Weise manipulieren, indem Sie beispielsweise direkt Stile auf ihnen über ihre [`style`](/de/docs/Web/API/HTMLElement/style)-Eigenschaften setzen, Klassen auf sie anwenden, die Stile in einem Stylesheet definiert haben, usw.

### Beziehung mit CSS `scroll-snap-type`

Die auf `SnapEvent` verfügbaren Eigenschaftswerte entsprechen direkt dem Wert der CSS-Eigenschaft {{cssxref("scroll-snap-type")}}, die auf den Scroll-Container gesetzt ist:

- Wenn die Snap-Achse als `block` (oder ein physikalischer Achsenwert, der `block` im aktuellen Schreibmodus entspricht) angegeben ist, gibt nur `snapTargetBlock` eine Elementreferenz zurück.
- Wenn die Snap-Achse als `inline` (oder ein physikalischer Achsenwert, der `inline` im aktuellen Schreibmodus entspricht) angegeben ist, gibt nur `snapTargetInline` eine Elementreferenz zurück.
- Wenn die Snap-Achse als `both` angegeben ist, geben `snapTargetBlock` und `snapTargetInline` eine Elementreferenz zurück.

### Umgang mit eindimensionalen Scrollern

Wenn Sie es mit einem horizontalen Scroller zu tun haben, ändert sich nur die Eigenschaft `snapTargetInline` des Ereignisobjekts, wenn sich das gesnappte Element ändert, falls der Inhalt einen horizontalen {{cssxref("writing-mode")}} hat, oder die Eigenschaft `snapTargetBlock`, falls der Inhalt einen vertikalen `writing-mode` hat.

Umgekehrt ändert sich bei einem vertikalen Scroller nur die Eigenschaft `snapTargetBlock`, wenn sich das gesnappte Element ändert, falls der Inhalt einen horizontalen `writing-mode` hat, oder die Eigenschaft `snapTargetInline`, falls der Inhalt einen vertikalen `writing-mode` hat.

In beiden Fällen gibt die nicht ändernde Eigenschaft der beiden `null` zurück.

Schauen wir uns ein Beispiel-Snippet an, um eine typische eindimensionale Scroll-Snap-Ereignishandlerfunktion zu zeigen:

```js
scrollingElem.addEventListener("scrollsnapchange", (event) => {
  event.snapTargetBlock.className = "select-section";
});
```

In diesem Snippet wird eine `scrollsnapchange`-Handlerfunktion auf einem Blockrichtungs-Scroll-Container-Element gesetzt, in dem Snap-Ziele erscheinen. Wenn das Ereignis ausgelöst wird, setzen wir eine `select-section`-Klasse auf das `snapTargetBlock`-Element, das verwendet werden könnte, um ein neu ausgewähltes Snap-Ziel so zu stylen, dass es so aussieht, als wäre es ausgewählt worden (zum Beispiel mit einer Animation).

### Umgang mit zweidimensionalen Scrollern

Wenn Sie es mit einem horizontalen _und_ vertikalen Scroller zu tun haben, wird der Code komplexer. Das liegt daran, dass sowohl der Wert der Eigenschaft `snapTargetBlock` _als auch_ der Wert der Eigenschaft `snapTargetInline` eine Elementreferenz zurückgeben (keine gibt `null` zurück), und eine der beiden Werte wird sich ändern, abhängig davon, in welche Richtung Sie scrollen und vom `writing-mode` des Inhalts:

- Wenn der Scroller horizontal gescrollt wird, ändert sich die Eigenschaft `snapTargetInline`, wenn sich das gesnappte Element ändert, falls der Inhalt einen horizontalen {{cssxref("writing-mode")}} hat, oder die Eigenschaft `snapTargetBlock`, falls der Inhalt einen vertikalen `writing-mode` hat.
- Wenn der Scroller vertikal gescrollt wird, ändert sich die Eigenschaft `snapTargetBlock`, wenn sich das gesnappte Element ändert, falls der Inhalt einen horizontalen `writing-mode` hat, oder die Eigenschaft `snapTargetInline`, falls der Inhalt einen vertikalen `writing-mode` hat.

Um dies zu handhaben, werden Sie wahrscheinlich verfolgen müssen, ob es das `snapTargetBlock`- oder das `snapTargetInline`-Element war, das sich geändert hat. Schauen wir uns ein Beispiel an:

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

In diesem Snippet definieren wir zuerst ein Objekt (`prevState`), das die ID der vorherigen `snapTargetBlock`- und `snapTargetInline`-Elemente speichert.

In der Ereignishandlerfunktion verwenden wir `if`-Anweisungen, um zu testen, ob:

- Die ID von `prevState.snapTargetBlock` gleich der ID des aktuellen `event.snapTargetBlock`-Elements ist.
- Die ID von `prevState.snapTargetInline` gleich der ID des aktuellen `event.snapTargetInline`-Elements ist.

Wenn die Werte unterschiedlich sind, bedeutet dies, dass der Scroller in dieser Richtung (block oder inline) gescrollt wurde, und wir loggen eine Nachricht in die Konsole, um dies anzuzeigen. In einem echten Beispiel würden Sie wahrscheinlich das gesnappte Element auf irgendeine Weise stylen, um anzuzeigen, dass es gesnappt wurde.

Wir aktualisieren dann die Werte von `prevState.snapTargetBlock` und `prevState.snapTargetInline` für den nächsten Lauf der Ereignishandlerfunktion.

Im Rest dieses Artikels werden wir uns ein paar vollständige Scroll-Snap-Ereignisbeispiele anschauen, mit denen Sie in den live gerenderten Versionen am Ende jedes Abschnitts spielen können.

## Eindimensionales Scroll-Beispiel

Dieses Beispiel bietet ein vertikal scrollendes {{htmlelement("main")}}-Element, das mehrere hellgraue {{htmlelement("section")}}-Elemente enthält, die alle Scroll-Snap-Ziele sind. Wenn ein neues Snap-Ziel aussteht, wird es eine dunklere Grauschattierung annehmen. Wenn ein neues Snap-Ziel ausgewählt wird, wird es sanft zu Lila mit weißem Text animieren. Wenn zuvor ein anderes Snap-Ziel ausgewählt war, wird es sanft zurück zu Grau mit schwarzem Text animieren.

### HTML

Das HTML für das Beispiel besteht aus einem einzelnen `<main>`-Element. Wir werden die `<section>`-Elemente später dynamisch mit JavaScript hinzufügen, um Platz auf der Seite zu sparen.

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

Im CSS beginnen wir mit einem dicken schwarzen {{cssxref("border")}} für das `<main>`-Element und einer festen {{cssxref("width")}} und {{cssxref("height")}}. Wir setzen seinen {{cssxref("overflow")}}-Wert auf `scroll`, sodass überlaufender Inhalt verborgen wird und gescrollt werden kann, und setzen {{cssxref("scroll-snap-type")}} auf `block mandatory`, damit Snap-Ziele nur in der Blockrichtung immer gesnappt werden.

```css
main {
  border: 3px solid black;
  width: 250px;
  height: 450px;
  overflow: scroll;
  scroll-snap-type: block mandatory;
}
```

Jedes `<section>`-Element erhält einen {{cssxref("margin")}} von `50px`, um die `<section>`-Elemente zu trennen und das Scroll-Snap-Verhalten deutlicher zu machen. Wir setzen dann {{cssxref("scroll-snap-align")}} auf `center`, um anzugeben, dass wir in die Mitte jedes Snap-Ziels snappen möchten. Schließlich wenden wir eine {{cssxref("transition")}} an, um die Stiländerungen, die angewendet werden, wenn eine Snap-Ziel-Auswahl getroffen wurde oder aussteht, sanft zu animieren.

```css
section {
  margin: 50px auto;
  scroll-snap-align: center;
  transition: 0.5s ease;
}
```

Die oben erwähnten Stiländerungen werden durch Klassen angewendet, die mithilfe von JavaScript auf die `<section>`-Elemente angewendet werden. Die `select-section`-Klasse wird angewendet, um eine Auswahl zu signalisieren — sie setzt einen lila Hintergrund und weiße Textfarbe. Die `pending`-Klasse wird angewendet, um eine ausstehende Snap-Ziel-Auswahl zu signalisieren — sie färbt den Hintergrund der Zielauswahl dunkler grau.

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

Im JavaScript beginnen wir damit, eine Referenz auf das `<main>`-Element zu erhalten und die Anzahl der `<section>`-Elemente zu definieren, die generiert werden sollen (in diesem Fall 21), sowie eine Variable, um zu zählen. Anschließend verwenden wir eine [`while`](/de/docs/Web/JavaScript/Reference/Statements/while)-Schleife, um die `<section>`-Elemente zu generieren, wobei jedem ein Kind [`h2`](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) mit einem Text zugewiesen wird, der `Section` plus den aktuellen Wert von `n` liest.

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

Kommen wir nun zur Event-Handler-Funktion für das [`scrollsnapchanging`](/de/docs/Web/API/Element/scrollsnapchanging_event)-Ereignis. Wenn ein Kind des `<main>`-Elements (d.h. eines der `<section>`-Elemente) zu einem ausstehenden Snap-Ziel wird, führen wir Folgendes aus:

1. Prüfen, ob ein Element zuvor die `pending`-Klasse angewendet hatte und, falls ja, diese entfernen. So soll nur das aktuell ausstehende Ziel die `pending`-Klasse erhalten und dunkler grau gefärbt werden. Wir wollen nicht, dass zuvor ausstehende Ziele, die nicht mehr ausstehen, das Styling behalten.
2. Dem durch die [`snapTargetBlock`](/de/docs/Web/API/SnapEvent/snapTargetBlock)-Eigenschaft referenzierten Element (welches eines der `<section>`-Elemente sein wird) die `pending`-Klasse geben, sodass es dunkler grau wird.

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
> In diesem Demo brauchen wir uns nicht um die Eigenschaft `snapTargetInline` des Ereignisobjekts zu kümmern — wir scrollen nur vertikal und das Demo verwendet einen horizontalen Schreibmodus, daher wird sich nur der Wert von `snapTargetBlock` ändern. In diesem Fall gibt `snapTargetInline` immer `null` zurück.

Wenn eine Scroll-Geste endet und ein `<section>`-Element tatsächlich als Snap-Ziel ausgewählt wird, wird die Event-Handler-Funktion für das [`scrollsnapchange`](/de/docs/Web/API/Element/scrollsnapchange_event)-Ereignis ausgelöst. Diese führt Folgendes aus:

1. Prüfen, ob zuvor ein Snap-Ziel ausgewählt war — d.h. ob eine `select-section`-Klasse zuvor auf ein Element angewendet wurde. Wenn ja, entfernen wir sie.
2. Die `select-section`-Klasse auf das durch die `snapTargetBlock`-Eigenschaft referenzierte `<section>`-Element anwenden, sodass das Snap-Ziel, das gerade ausgewählt wurde, die Auswahl-Animation angewendet bekommt.

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

Versuchen Sie, den Scroll-Container nach oben und unten zu scrollen und das oben beschriebene Verhalten zu beobachten:

{{ EmbedLiveSample("Eindimensionales Scroll-Beispiel", "100%", "500") }}

## Zweidimensionales Scroll-Beispiel

Dieses Beispiel ist dem vorherigen ähnlich, mit dem Unterschied, dass es ein horizontal _und_ vertikal scrollendes {{htmlelement("main")}}-Element enthält, das mehrere hellgraue {{htmlelement("section")}}-Elemente enthält, die alle Snap-Ziele sind.

Das HTML für das Beispiel ist das gleiche wie beim vorherigen Beispiel — ein einzelnes `<main>`-Element.

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

Schauen wir zuerst auf das Styling des `<main>`-Elements. Wir möchten, dass die `<section>`-Elemente als Gitter angeordnet werden, daher verwenden wir das [CSS-Gitter-Layout](/de/docs/Web/CSS/CSS_grid_layout), um anzugeben, dass wir sie in sieben Spalten darstellen möchten, mit einem {{cssxref("grid-template-columns")}}-Wert von `repeat(7, 1fr)`. Wir geben auch den Raum um die `<section>`-Elemente an, indem wir `padding` und {{cssxref("gap")}} auf das `<main>`-Element setzen, anstatt `margin` auf die `<section>`-Elemente.

Schließlich, da wir in diesem Beispiel in beiden Richtungen scrollen, setzen wir {{cssxref("scroll-snap-type")}} auf `both mandatory`, sodass Snap-Ziele sowohl in der Blockrichtung _als auch_ in der Inlinerichtung immer gesnappt werden.

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

Als nächstes werden wir in diesem Beispiel CSS-Animationen anstelle von Übergängen verwenden. Dies führt zu komplexerem Code, ermöglicht jedoch eine feinere Kontrolle über die angewendeten Animationen.

Wir definieren zuerst die Klassen, die angewendet werden, um zu signalisieren, dass eine Snap-Ziel-Auswahl getroffen oder aussteht. Die `select-section`- und `deselect-section`-Klassen werden Keyframe-Animationen anwenden, um eine Auswahl oder Deselektion anzuzeigen. Die `pending`-Klasse wird angewendet, um eine ausstehende Snap-Ziel-Auswahl anzuzeigen (sie färbt den Hintergrund der Auswahl, wie im vorherigen Beispiel, in dunkleres Grau).

Die {{cssxref("@keyframes")}} animieren von einem grauen Hintergrund und schwarzem (Standard-)Text zu einem lila Hintergrund und weißem Text und zurück, jeweils. Die letzte Animation ist etwas anders als die erste — sie verwendet auch {{cssxref("opacity")}}, um einen Ausblende-/Einblendeffekt zu erzeugen.

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

Im JavaScript beginnen wir wie im vorherigen Beispiel, außer dass wir diesmal 49 `<section>`-Elemente generieren und jedem eine ID von `s` plus dem aktuellen Wert von `n` zuweisen, um sie später leichter verfolgen zu können. Mit dem oben angegebenen CSS-Gitter-Layout haben wir sieben Spalten von jeweils sieben `<section>`-Elementen.

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

Anschließend geben wir ein Objekt namens `prevState` an, welches uns ermöglicht, das zuvor ausgewählte Snap-Ziel jederzeit zu verfolgen — seine Eigenschaften speichern die IDs der vorherigen Inline- und Block-Snap-Ziele. Dies ist wichtig, um herauszufinden, ob wir jedes Mal den neuen Block-Zielpunkt oder den neuen Inline-Zielpunkt stylen müssen, wenn ein Ereignishandler ausgelöst wird.

```js
const prevState = {
  snapTargetInline: "s1",
  snapTargetBlock: "s1",
};
```

Beispielsweise nehmen wir an, der Scroll-Container wird so gescrollt, dass sich die ID des neuen [`SnapEvent.snapTargetBlock`](/de/docs/Web/API/SnapEvent/snapTargetBlock)-Elements geändert hat (sie entspricht nicht der in `prevState.snapTargetBlock` gespeicherten ID), aber die ID des neuen [`SnapEvent.snapTargetInline`](/de/docs/Web/API/SnapEvent/snapTargetInline)-Elements ist immer noch dieselbe wie die in `prevState.snapTargetInline` gespeicherte ID. Dies bedeutet, dass wir zu einem neuen Snap-Ziel in der Blockrichtung gewechselt haben, daher sollten wir `SnapEvent.snapTargetBlock` stylen, aber wir sind nicht zu einem neuen Snap-Ziel in der Inlinerichtung gewechselt, daher sollten wir `SnapEvent.snapTargetInline` nicht stylen.

In diesem Fall beschreiben wir zuerst die Event-Handler-Funktion für das [`scrollsnapchange`](/de/docs/Web/API/Element/scrollsnapchange_event)-Ereignis. In dieser Funktion:

1. Beginnen wir damit sicherzustellen, dass bei einem zuvor ausgewählten `<section>`-Element, das als Snap-Ziel ausgewählt wurde (angezeigt durch das Vorhandensein der `select-section`-Klasse), die `deselect-section`-Klasse angewendet wird, um die Deselektionsanimation zu zeigen. Wenn kein Snap-Ziel zuvor ausgewählt war, wenden wir die `select-section`-Klasse auf das erste `<section>`-Element im DOM an, sodass es als ausgewählt angezeigt wird, wenn die Seite zuerst geladen wird.
2. Vergleichen wir die zuvor ausgewählte Snap-Ziel-ID mit der neu ausgewählten Snap-Ziel-ID, sowohl für die Block- als auch die Inlinerichtung. Wenn sie unterschiedlich sind, bedeutet dies, dass sich die Auswahl geändert hat, und wir wenden die `select-section`-Klasse auf das entsprechende Snap-Ziel an, um dies visuell anzuzeigen.
3. Aktualisieren wir `prevState.snapTargetBlock` und `prevState.snapTargetInline`, damit diese gleich den IDs der Scroll-Snap-Ziele sind, die gerade ausgewählt wurden, sodass sie beim nächsten Auslösen des Ereignisses die vorherigen Auswahlen sind.

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

Wenn die Event-Handler-Funktion für das [`scrollsnapchanging`](/de/docs/Web/API/Element/scrollsnapchanging_event)-Ereignis ausgelöst wird, führen wir Folgendes aus:

1. Entfernen wir die `pending`-Klasse vom Element, dem diese zuvor angewendet wurde, sodass nur das aktuelle ausstehende Ziel die `pending`-Klasse erhält und dunkler grau gefärbt wird.
2. Geben wir dem aktuellen ausstehenden Element die `pending`-Klasse, sodass es dunkler grau wird, jedoch nur, wenn es noch nicht die `select-section`-Klasse hat — wir möchten, dass ein zuvor ausgewähltes Ziel das lila Auswahldesign beibehält, bis tatsächlich ein neues Ziel ausgewählt wird. Wir fügen auch eine zusätzliche Prüfung in die `if`-Anweisungen ein, um sicherzustellen, dass wir nur das inline oder block ausstehende Snap-Ziel stylen, je nachdem, welches sich geändert hat. Wieder vergleichen wir das vorherige Snap-Ziel mit dem aktuellen Snap-Ziel in jedem Fall.

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

Versuchen Sie, horizontal und vertikal im Scroll-Container zu scrollen und das oben beschriebene Verhalten zu beobachten:

{{ EmbedLiveSample("Zweidimensionales Scroll-Beispiel", "100%", "500") }}

## Scroll-Snap-Ereignisse auf `Document` und `Window`

In diesem Artikel haben wir die Scroll-Snap-Ereignisse behandelt, die auf der [`Element`](/de/docs/Web/API/Element)-Schnittstelle ausgelöst werden, aber die gleichen Ereignisse werden auch auf den Objekten [`Document`](/de/docs/Web/API/Document) und [`Window`](/de/docs/Web/API/Window) ausgelöst. Siehe:

- `Document`-Ereignisreferenzen für [`scrollsnapchange`](/de/docs/Web/API/Document/scrollsnapchange_event) und [`scrollsnapchanging`](/de/docs/Web/API/Document/scrollsnapchanging_event).
- `Window`-Ereignisreferenzen für [`scrollsnapchange`](/de/docs/Web/API/Window/scrollsnapchange_event) und [`scrollsnapchanging`](/de/docs/Web/API/Window/scrollsnapchanging_event).

Diese funktionieren auf dieselbe Weise wie die `Element`-Versionen, mit dem Unterschied, dass das gesamte HTML-Dokument als Scroll-Snap-Container festgelegt werden muss (d.h. {{cssxref("scroll-snap-type")}} ist auf dem {{htmlelement("html")}}-Element gesetzt).

Zum Beispiel, wenn wir ein ähnliches Beispiel wie die oben beschriebenen verwenden, bei dem wir ein `<main>`-Element mit signifikantem Inhalt haben:

```html
<main>
  <!-- Significant content -->
</main>
```

Das `<main>`-Element könnte mithilfe einer Kombination aus CSS-Eigenschaften in einen Scroll-Container umgewandelt werden:

```css
main {
  width: 250px;
  height: 450px;
  overflow: scroll;
}
```

Sie könnten dann das Scroll-Snapping-Verhalten auf dem scrollenden Inhalt implementieren, indem Sie die {{cssxref("scroll-snap-type")}}-Eigenschaft auf das {{htmlelement("html")}}-Element festlegen:

```css
html {
  scroll-snap-type: block mandatory;
}
```

Das folgende JavaScript-Snippet würde dazu führen, dass das `scrollsnapchange`-Ereignis auf dem HTML-Dokument ausgelöst wird, wenn ein Kind des `<main>`-Elements zu einem neu ausgewählten Snap-Ziel wird. In der Handler-Funktion setzen wir eine `selected`-Klasse auf das Kind, das durch die [`SnapEvent.snapTargetBlock`](/de/docs/Web/API/SnapEvent/snapTargetBlock) referenziert wird, die verwendet werden könnte, um es so zu stylen, dass es aussieht, als wäre es ausgewählt worden (zum Beispiel mit einer Animation), wenn das Ereignis ausgelöst wird.

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
- [CSS Scroll Snap](/de/docs/Web/CSS/CSS_scroll_snap) Modul
- [Scroll Snap Events](https://developer.chrome.com/blog/scroll-snap-events) auf developer.chrome.com (2024)
