---
title: Verwendung von Scroll Snap-Ereignissen
slug: Web/CSS/CSS_scroll_snap/Using_scroll_snap_events
l10n:
  sourceCommit: 3b3394b9b1e966bb1d397bd6e50e2fb5bde7b3c5
---

{{CSSRef}}

Das Modul für [CSS Scroll Snap](/de/docs/Web/CSS/CSS_scroll_snap) definiert zwei **Scroll Snap-Ereignisse**: [`scrollsnapchanging`](/de/docs/Web/API/Element/scrollsnapchanging_event) und [`scrollsnapchange`](/de/docs/Web/API/Element/scrollsnapchange_event). Diese ermöglichen das Ausführen von JavaScript als Reaktion darauf, dass der Browser feststellt, dass neue [Scroll Snap-Ziele](/de/docs/Web/CSS/CSS_scroll_snap/Basic_concepts) jeweils anstehend und ausgewählt sind.

Dieser Leitfaden bietet einen Überblick über diese Ereignisse sowie vollständige Beispiele.

## Überblick über die Ereignisse

Scroll Snap-Ereignisse werden in einem {{Glossary("Scroll_container", "Scrollcontainer")}} festgelegt, der potenzielle Scroll Snap-Ziele enthält:

- Das [`scrollsnapchanging`](/de/docs/Web/API/Element/scrollsnapchanging_event)-Ereignis wird ausgelöst, wenn der Browser feststellt, dass ein neues Scroll Snap-Ziel ausgewählt wird, wenn die aktuelle Scrollgeste endet. Dies ist das _anstehende_ Scroll Snap-Ziel. Dieses Ereignis wird speziell während einer Scrollgeste ausgelöst, jedes Mal, wenn der Benutzer über potenzielle neue Snap-Ziele fährt. Während das `scrollsnapchanging`-Ereignis mehrere Male für jede Scrollgeste ausgelöst werden kann, wird es nicht für alle potenziellen Snap-Ziele für eine Scrollgeste ausgelöst, die über mehrere Snap-Ziele hinausgeht. Vielmehr wird es nur für das letzte Ziel ausgelöst, auf dem das Snapping potenziell verbleiben wird.

- Das [`scrollsnapchange`](/de/docs/Web/API/Element/scrollsnapchange_event)-Ereignis wird am Ende eines Scrollvorgangs ausgelöst, wenn ein neues Scroll Snap-Ziel ausgewählt wird. Dieses Ereignis wird speziell ausgelöst, wenn eine Scrollgeste abgeschlossen ist, jedoch nur, wenn ein neues Snap-Ziel ausgewählt wird. Dieses Ereignis wird direkt bevor das [`scrollend`](/de/docs/Web/API/Element/scrollend_event)-Ereignis ausgelöst wird.

Schauen wir uns ein Beispiel an, das die beiden Ereignisse in Aktion zeigt (Sie werden später im Artikel erfahren, wie dies aufgebaut wird):

{{ EmbedLiveSample("Eindimensionaler Scroller Beispiel", "100%", "500") }}

Versuchen Sie, die Liste der Boxen nach oben und unten zu scrollen:

- Versuchen Sie, den Container langsam nach oben und unten zu scrollen, ohne die Scrollgeste zu lösen. Zum Beispiel, indem Sie Ihren Finger/die Finger über den Scrollbereich auf einem Touchscreen-Gerät oder Trackpad ziehen oder die Maustaste auf der Scrollleiste gedrückt halten und die Maus bewegen. Die Boxen, über die Sie hinwegfahren, sollten sich beim Berühren in einen dunkleren Grauton ändern und wieder normal werden, sobald Sie sich von ihnen entfernen. Dies ist das `scrollsnapchanging`-Ereignis in Aktion.
- Lassen Sie nun die Scrollgeste los; die nächste Box zu Ihrer Scrollposition sollte in eine lila Farbe mit weißem Text animiert werden. Die Animation tritt ein, wenn das `scrollsnapchange`-Ereignis ausgelöst wird.
- Versuchen Sie schließlich, schnell zu scrollen. Zum Beispiel, indem Sie Ihren Finger kräftig auf dem Bildschirm bewegen, um an mehreren potenziellen Zielen vorbeizuscrollen, bevor Sie beginnen, sich in der Nähe eines weiter unten im Scrollcontainer befindlichen Ziels zur Ruhe zu setzen. Sie sollten nur ein `scrollsnapchanging`-Ereignis sehen, das ausgelöst wird, wenn das Scrollen beginnt, sich zu verlangsamen, bevor das `scrollsnapchange`-Ereignis ausgelöst wird und das ausgewählte Snap-Ziel lila wird.

## Das `SnapEvent`-Ereignisobjekt

Beide oben genannten Ereignisse teilen sich das [`SnapEvent`](/de/docs/Web/API/SnapEvent)-Ereignisobjekt. Dieses verfügt über zwei Eigenschaften, die für das Funktionieren von Scroll Snap-Ereignissen entscheidend sind:

- [`snapTargetBlock`](/de/docs/Web/API/SnapEvent/snapTargetBlock) gibt eine Referenz auf das Element zurück, das beim Auslösen des Ereignisses in die {{Glossary("Flow_relative_values#block_direction", "Blockrichtung")}} eingerastet ist, oder `null`, wenn das Scroll Snapping nur in der Inline-Richtung erfolgt, sodass kein Element in der Blockrichtung eingerastet wird.
- [`snapTargetInline`](/de/docs/Web/API/SnapEvent/snapTargetInline) gibt eine Referenz auf das Element zurück, das beim Auslösen des Ereignisses in die {{Glossary("Flow_relative_values#inline_direction", "Inline-Richtung")}} eingerastet ist, oder `null`, wenn das Scroll Snapping nur in der Blockrichtung erfolgt, sodass kein Element in der Inline-Richtung eingerastet wird.

Diese Eigenschaften ermöglichen es Ereignishandlerfunktionen, das Element zu melden, das eingerastet wurde (im Fall von `scrollsnapchange`) oder das Element, das _eingerastet werden würde_, wenn die Scrollgeste jetzt abgeschlossen wäre (im Fall von `scrollsnapchanging`) — in einer und zwei Dimensionen. Sie können diese Elemente dann beliebig manipulieren, beispielsweise indem Sie Stile direkt über ihre [`style`](/de/docs/Web/API/HTMLElement/style)-Eigenschaften auf sie anwenden, Klassen auf sie setzen, für die in einem Stylesheet definierte Stile vorhanden sind, usw.

### Beziehung zur CSS-Eigenschaft `scroll-snap-type`

Die verfügbaren Eigenschaftswerte auf `SnapEvent` entsprechen direkt dem Wert der {{cssxref("scroll-snap-type")}} CSS-Eigenschaft, die auf den Scrollcontainer gesetzt ist:

- Wenn die Snap-Achse als `block` (oder ein physikalischer Achsenwert, der im aktuellen Schreibmodus `block` entspricht) angegeben ist, gibt nur `snapTargetBlock` eine Elementreferenz zurück.
- Wenn die Snap-Achse als `inline` (oder ein physikalischer Achsenwert, der im aktuellen Schreibmodus `inline` entspricht) angegeben ist, gibt nur `snapTargetInline` eine Elementreferenz zurück.
- Wenn die Snap-Achse als `both` angegeben ist, geben sowohl `snapTargetBlock` als auch `snapTargetInline` eine Elementreferenz zurück.

### Behandlung eindimensionaler Scroller

Wenn Sie es mit einem horizontalen Scroller zu tun haben, ändert sich nur die `snapTargetInline`-Eigenschaft des Ereignisobjekts, wenn sich das eingerastete Element ändert, sofern der Inhalt einen horizontalen {{cssxref("writing-mode")}} hat, oder die `snapTargetBlock`-Eigenschaft, wenn der Inhalt einen vertikalen `writing-mode` hat.

Umgekehrt ändert sich bei einem vertikalen Scroller nur die `snapTargetBlock`-Eigenschaft, wenn sich das eingerastete Element ändert, sofern der Inhalt einen horizontalen `writing-mode` hat, oder die `snapTargetInline`-Eigenschaft, wenn der Inhalt einen vertikalen `writing-mode` hat.

In beiden Fällen gibt die unveränderte Eigenschaft der beiden `null` zurück.

Schauen wir uns ein Beispiel-Snippet an, das zeigt, wie eine typische Ereignishandlerfunktion für eindimensionales Scroll Snap aussieht:

```js
scrollingElem.addEventListener("scrollsnapchange", (event) => {
  event.snapTargetBlock.className = "select-section";
});
```

In diesem Snippet wird eine `scrollsnapchange`-Handlerfunktion auf ein Scrollcontainer-Element in Blockrichtung gesetzt, in dem Snap-Ziele erscheinen. Wenn das Ereignis ausgelöst wird, setzen wir eine `select-section`-Klasse auf das `snapTargetBlock`-Element, die verwendet werden könnte, um ein neu ausgewähltes Snap-Ziel so zu stylen, dass es aussieht, als wäre es ausgewählt (zum Beispiel mit einer Animation).

### Behandlung zweidimensionaler Scroller

Wenn Sie es mit einem horizontalen _und_ vertikalen Scroller zu tun haben, wird der Code komplexer. Dies liegt daran, dass sowohl die `snapTargetBlock`-Eigenschaft _als auch_ die `snapTargetInline`-Eigenschaft Werte zurückgeben, die eine Elementreferenz enthalten (keine von beiden gibt `null` zurück), und sich je nach Scrollrichtung und `writing-mode` des Inhalts eine oder die andere Eigenschaft ändern wird:

- Wenn der Scroller horizontal gescrollt wird, ändert sich die `snapTargetInline`-Eigenschaft, wenn sich das eingerastete Element ändert, sofern der Inhalt einen horizontalen {{cssxref("writing-mode")}} hat, oder die `snapTargetBlock`-Eigenschaft, wenn der Inhalt einen vertikalen `writing-mode` hat.
- Wenn der Scroller vertikal gescrollt wird, ändert sich die `snapTargetBlock`-Eigenschaft, wenn sich das eingerastete Element ändert, sofern der Inhalt einen horizontalen `writing-mode` hat, oder die `snapTargetInline`-Eigenschaft, wenn der Inhalt einen vertikalen `writing-mode` hat.

Um dies zu handhaben, müssen Sie wahrscheinlich festhalten, ob es das `snapTargetBlock`- oder das `snapTargetInline`-Element war, das sich geändert hat. Schauen wir uns ein Beispiel an:

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

In diesem Snippet definieren wir zunächst ein Objekt (`prevState`), das die ID der vorherigen `snapTargetBlock`- und `snapTargetInline`-Elemente speichert.

In der Ereignishandlerfunktion verwenden wir `if`-Anweisungen, um zu testen, ob:

- Die ID von `prevState.snapTargetBlock` mit der ID des aktuellen `event.snapTargetBlock`-Elements übereinstimmt.
- Die ID von `prevState.snapTargetInline` mit der ID des aktuellen `event.snapTargetInline`-Elements übereinstimmt.

Wenn die Werte unterschiedlich sind, bedeutet dies, dass der Scroller in dieser Richtung (Block oder Inline) gescrollt wurde, und wir protokollieren eine Nachricht an die Konsole, um dies anzuzeigen. In einem realen Beispiel würden Sie das eingerastete Element in gewisser Weise stylen, um anzuzeigen, dass es eingerastet ist.

Wir aktualisieren dann die Werte von `prevState.snapTargetBlock` und `prevState.snapTargetInline`, sodass sie bereit sind, wenn der Ereignishandler das nächste Mal ausgeführt wird.

Im Rest dieses Artikels werden wir uns ein paar vollständige Beispiele für Scroll Snap-Ereignisse ansehen, mit denen Sie in den live gerenderten Versionen am Ende jedes Abschnitts spielen können.

## Eindimensionales Scroller-Beispiel

Dieses Beispiel zeigt ein vertikal scrollendes {{htmlelement("main")}}-Element, das mehrere hellgraue {{htmlelement("section")}}-Elemente enthält, die alle Scroll Snap-Ziele sind. Wenn ein neues Snap-Ziel ansteht, wird es in einen dunkleren Grauton wechseln. Wenn ein neues Snap-Ziel ausgewählt wird, wird es sanft in Lila mit weißem Text animiert. Wenn zuvor ein anderes Snap-Ziel ausgewählt wurde, wird es sanft zurück in Grau mit schwarzem Text animiert.

### HTML

Das HTML für das Beispiel besteht aus einem einzigen `<main>`-Element. Wir werden die `<section>`-Elemente später dynamisch mit JavaScript hinzufügen, um Platz auf der Seite zu sparen.

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

Im CSS beginnen wir damit, dem `<main>`-Element einen kräftigen schwarzen {{cssxref("border")}} und eine feste {{cssxref("width")}} und {{cssxref("height")}} zu geben. Wir setzen den {{cssxref("overflow")}}-Wert auf `scroll`, damit überfließender Inhalt ausgeblendet wird und zu ihm gescrollt werden kann, und setzen {{cssxref("scroll-snap-type")}} auf `block mandatory`, sodass Snap-Ziele in der Blockrichtung immer eingerastet werden.

```css
main {
  border: 3px solid black;
  width: 250px;
  height: 450px;
  overflow: scroll;
  scroll-snap-type: block mandatory;
}
```

Jedes `<section>`-Element erhält einen {{cssxref("margin")}} von `50px`, um die `<section>`-Elemente zu trennen und das Scroll Snapping-Verhalten deutlicher zu machen. Dann setzen wir {{cssxref("scroll-snap-align")}} auf `center`, um anzugeben, dass wir auf die Mitte jedes Snap-Ziels einrasten möchten. Schließlich wenden wir eine {{cssxref("transition")}} an, um sanft zu den und von den Stiländerungen zu wechseln, die angewendet werden, wenn eine Snap-Zielauswahl getroffen oder ansteht.

```css
section {
  margin: 50px auto;
  scroll-snap-align: center;
  transition: 0.5s ease;
}
```

Die oben genannten Stiländerungen werden durch Klassen, die über JavaScript auf die `<section>`-Elemente angewendet werden, umgesetzt. Die `select-section`-Klasse wird angewendet, um eine Auswahl zu kennzeichnen — sie setzt einen lila Hintergrund und weiße Textfarbe. Die `pending`-Klasse wird angewendet, um eine bevorstehende Snap-Zielauswahl zu kennzeichnen — sie färbt den Zielauswahlhintergrund in ein dunkleres Grau.

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

Im JavaScript beginnen wir damit, eine Referenz auf das `<main>`-Element zu erlangen und die Anzahl der zu generierenden `<section>`-Elemente zu definieren (in diesem Fall 21) und eine Variable, um von dort zu zählen. Wir verwenden dann eine [`while`](/de/docs/Web/JavaScript/Reference/Statements/while)-Schleife, um die `<section>`-Elemente zu generieren, wobei wir jedem einen Kind-[`h2`](/de/docs/Web/HTML/Element/Heading_Elements) mit Text zuweisen, der `Section` plus dem aktuellen Wert von `n` anzeigt.

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

Nun zur [`scrollsnapchanging`](/de/docs/Web/API/Element/scrollsnapchanging_event)-Ereignishandlerfunktion. Wenn ein Kind des `<main>`-Elements (d.h. ein `<section>`-Element) zu einem anstehenden Snap-Ziel wird, machen wir Folgendes:

1. Überprüfen, ob ein Element zuvor die `pending`-Klasse hatte und diese dann entfernen. Dies ist so, dass nur das aktuelle anstehende Ziel die `pending`-Klasse erhält und dunkler grau gefärbt wird. Wir wollen nicht, dass zuvor anstehende Ziele, die nicht mehr anstehend sind, die Stilgebung behalten.
2. Dem im [`snapTargetBlock`](/de/docs/Web/API/SnapEvent/snapTargetBlock) referenzierten Element (welches eines der `<section>`-Elemente sein wird) die `pending`-Klasse geben, sodass es dunkler grau wird.

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
> Wir müssen uns in diesem Demo keine Gedanken über die `snapTargetInline`-Eigenschaft machen — wir scrollen nur vertikal, und das Demo verwendet einen horizontalen Schreibmodus, daher wird sich nur der `snapTargetBlock`-Wert ändern. In diesem Fall wird `snapTargetInline` immer `null` zurückgeben.

Wenn eine Scrollgeste endet und ein `<section>`-Element tatsächlich als Snap-Ziel ausgewählt wird, wird die [`scrollsnapchange`](/de/docs/Web/API/Element/scrollsnapchange_event)-Ereignishandlerfunktion ausgelöst. Diese:

1. Überprüft, ob ein Snap-Ziel zuvor ausgewählt war — d.h., ob eine `select-section`-Klasse zuvor auf ein Element angewendet wurde. Falls ja, entfernen wir diese.
2. Wendet die `select-section`-Klasse auf das Element `<section>` an, das im `snapTargetBlock`-Eigenschaft referenziert wird, sodass das Snap-Ziel, das gerade ausgewählt wurde, die Auswahlanimation erhält.

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

Versuchen Sie, im Scrollcontainer nach oben und unten zu scrollen und das oben beschriebene Verhalten zu beobachten:

{{ EmbedLiveSample("Eindimensionaler Scroller Beispiel", "100%", "500") }}

## Zweidimensionales Scroller-Beispiel

Dieses Beispiel ähnelt dem vorherigen, mit dem Unterschied, dass es ein horizontal und vertikal scrollendes {{htmlelement("main")}}-Element enthält, das mehrere hellgraue {{htmlelement("section")}}-Elemente umfasst, die alle Snap-Ziele sind.

Das HTML für das Beispiel ist das gleiche wie für das vorherige Beispiel — ein einzelnes `<main>`-Element.

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

Das CSS für dieses Beispiel ist dem CSS im vorherigen Beispiel ähnlich. Die wichtigsten Unterschiede sind wie folgt.

Schauen wir uns zunächst das Styling des `<main>`-Elements an. Wir möchten, dass die `<section>`-Elemente als Raster angeordnet sind, daher verwenden wir das [CSS-Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout), um anzugeben, dass wir sieben Spalten angezeigt haben möchten, indem wir `grid-template-columns` auf `repeat(7, 1fr)` setzen. Wir geben auch den Abstand um die `<section>`-Elemente herum an, indem wir `padding` und {{cssxref("gap")}} auf das `<main>`-Element setzen anstatt `margin` auf den `<section>`-Elementen.

Da wir in diesem Beispiel in beide Richtungen scrollen, setzen wir {{cssxref("scroll-snap-type")}} auf `both mandatory`, sodass Snap-Ziele in Block- _und_ Inline-Richtung immer eingerastet werden.

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

Als Nächstes verwenden wir in diesem Beispiel CSS-Animationen anstelle von Übergängen. Dies führt zu komplexeren Code, ermöglicht jedoch eine feinere Kontrolle über die angewendeten Animationen.

Wir definieren zuerst die Klassen, die angewendet werden, um anzuzeigen, dass eine Snap-Zielauswahl getroffen oder ansteht. Die Klassen `select-section` und `deselect-section` werden Schlüsselbildanimationen anwenden, um eine Auswahl oder Deselektion darzustellen. Die `pending`-Klasse wird angewendet, um eine anstehende Snap-Zielauswahl zu kennzeichnen (sie wendet wie im vorherigen Beispiel einen dunkleren grauen Hintergrund auf die Auswahl an).

Die {{cssxref("@keyframes")}} animieren von einem grauen Hintergrund und schwarzer (Standard-) Textfarbe zu einem lila Hintergrund und weißer Textfarbe und wieder zurück. Die letzte Animation ist etwas anders als die erste — sie verwendet auch die {{cssxref("opacity")}}, um einen Ein- und Ausblendeffekt zu erstellen.

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

Im JavaScript beginnen wir auf die gleiche Weise wie im vorherigen Beispiel, mit dem Unterschied, dass wir diesmal 49 `<section>`-Elemente generieren und jedem eine ID von `s` plus dem aktuellen Wert von `n` zuweisen, um sie später leichter nachverfolgen zu können. Mit dem von uns oben angegebenen CSS-Grid-Layout haben wir sieben Spalten mit sieben `<section>`-Elementen.

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

Anschließend spezifizieren wir ein Objekt namens `prevState`, das es uns ermöglicht, das zuvor ausgewählte Snap-Ziel jederzeit im Auge zu behalten — seine Eigenschaften speichern die IDs der vorherigen Inline- und Block-Snap-Ziele. Dies ist wichtig, um herauszufinden, ob wir bei jedem Auslösen eines Ereignishandlers das neue Blockziel oder das neue Inline-Ziel stylen müssen.

```js
const prevState = {
  snapTargetInline: "s1",
  snapTargetBlock: "s1",
};
```

Zum Beispiel: Angenommen, der Scrollcontainer wird so gescrollt, dass sich die ID des neuen [`SnapEvent.snapTargetBlock`](/de/docs/Web/API/SnapEvent/snapTargetBlock)-Elements geändert hat (sie entspricht nicht der im `prevState.snapTargetBlock` gespeicherten ID), aber die ID des neuen [`SnapEvent.snapTargetInline`](/de/docs/Web/API/SnapEvent/snapTargetInline)-Elements ist immer noch die gleiche wie die im `prevState.snapTargetInline` gespeicherte ID. Dies bedeutet, dass wir zu einem neuen Snap-Ziel in Blockrichtung gewechselt sind, daher sollten wir `SnapEvent.snapTargetBlock` stylen, aber wir haben uns nicht zu einem neuen Snap-Ziel in Inlinerichtung bewegt, daher sollten wir `SnapEvent.snapTargetInline` nicht stylen.

Diesmal erklären wir zuerst die [`scrollsnapchange`](/de/docs/Web/API/Element/scrollsnapchange_event)-Ereignishandlerfunktion. In dieser Funktion:

1. Stellen Sie sicher, dass ein zuvor ausgewähltes `<section>`-Element-Snap-Ziel (wie an der Anwesenheit der `select-section`-Klasse erkennbar) die `deselect-section`-Klasse angewendet bekommt, damit es die Deselektionsanimation zeigt. Falls kein Snap-Ziel zuvor ausgewählt war, wenden wir die `select-section`-Klasse auf das erste `<section>` im DOM an, damit es beim ersten Laden der Seite als ausgewählt angezeigt wird.
2. Vergleichen Sie die zuvor ausgewählte Snap-Ziel-ID mit der neu ausgewählten Snap-Ziel-ID, sowohl für die Block- als auch die Inline-Auswahl. Wenn sie unterschiedlich sind, weist dies darauf hin, dass sich die Auswahl geändert hat, daher wenden wir die `select-section`-Klasse auf das entsprechende Snap-Ziel an, um dies visuell darzustellen.
3. Aktualisieren Sie `prevState.snapTargetBlock` und `prevState.snapTargetInline`, damit sie den IDs der Scroll Snap-Ziele entsprechen, die gerade ausgewählt wurden, sodass sie bereit sind, wenn das Ereignis das nächste Mal ausgelöst wird.

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

Wenn die [`scrollsnapchanging`](/de/docs/Web/API/Element/scrollsnapchanging_event)-Ereignishandlerfunktion ausgeführt wird, führen wir Folgendes aus:

1. Entfernen Sie die `pending`-Klasse von dem Element, das sie zuvor hatte, sodass nur das aktuelle anstehende Ziel die `pending`-Klasse erhält und in ein dunkleres Grau gefärbt wird.
2. Geben Sie dem aktuellen anstehenden Element die `pending`-Klasse, sodass es in ein dunkleres Grau gewechselt wird, aber nur, wenn es nicht bereits die `select-section`-Klasse hat — wir möchten, dass ein zuvor ausgewähltes Ziel die lila Auswahlstil beibehält, bis ein neues Ziel tatsächlich ausgewählt ist. Wir fügen auch eine zusätzliche Überprüfung in den `if`-Anweisungen hinzu, um sicherzustellen, dass wir nur das Inline- oder Block-Pending-Snap-Ziel stylen, abhängig davon, welches sich geändert hat. Wieder vergleichen wir das vorherige Snap-Ziel mit dem aktuellen Snap-Ziel in jedem Fall.

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

Versuchen Sie, horizontal und vertikal im Scrollcontainer zu scrollen und beobachten Sie das oben beschriebene Verhalten:

{{ EmbedLiveSample("Zweidimensionaler Scroller Beispiel", "100%", "500") }}

## Scroll Snap-Ereignisse auf `Document` und `Window`

In diesem Artikel haben wir die Scroll Snap-Ereignisse behandelt, die auf der [`Element`](/de/docs/Web/API/Element)-Schnittstelle ausgelöst werden, aber die gleichen Ereignisse werden auch auf den Objekten [`Document`](/de/docs/Web/API/Document) und [`Window`](/de/docs/Web/API/Window) ausgelöst. Siehe:

- `Document`- [`scrollsnapchange`](/de/docs/Web/API/Document/scrollsnapchange_event) und [`scrollsnapchanging`](/de/docs/Web/API/Document/scrollsnapchanging_event) Ereignisreferenzen.
- `Window`- [`scrollsnapchange`](/de/docs/Web/API/Window/scrollsnapchange_event) und [`scrollsnapchanging`](/de/docs/Web/API/Window/scrollsnapchanging_event) Ereignisreferenzen.

Diese funktionieren weitgehend wie die `Element`-Versionen, außer dass das gesamte HTML-Dokument als Scroll Snap-Container festgelegt werden muss (das heißt, {{cssxref("scroll-snap-type")}} ist auf dem {{htmlelement("html")}}-Element gesetzt).

Zum Beispiel, wenn wir ein ähnliches Beispiel wie die oben betrachteten nehmen, bei dem wir ein `<main>`-Element mit signifikantem Inhalt haben:

```html
<main>
  <!-- Significant content -->
</main>
```

Das `<main>`-Element könnte mithilfe einer Kombination von CSS-Eigenschaften in einen Scrollcontainer verwandelt werden, zum Beispiel:

```css
main {
  width: 250px;
  height: 450px;
  overflow: scroll;
}
```

Sie könnten dann das Scroll Snapping-Verhalten auf dem scrollenden Inhalt implementieren, indem Sie die {{cssxref("scroll-snap-type")}}-Eigenschaft auf dem {{htmlelement("html")}}-Element festlegen:

```css
html {
  scroll-snap-type: block mandatory;
}
```

Mit dem folgenden JavaScript-Snippet würde das `scrollsnapchange`-Ereignis ausgelöst, wenn ein Kind des `<main>`-Elements zu einem neu ausgewählten Snap-Ziel auf dem HTML-Dokument wird. In der Handler-Funktion setzen wir eine `selected`-Klasse auf das von der [`SnapEvent.snapTargetBlock`](/de/docs/Web/API/SnapEvent/snapTargetBlock) referenzierte Kind, die verwendet werden könnte, um es zu stylen, damit es aussieht wie ausgewählt (zum Beispiel mit einer Animation), wenn das Ereignis ausgelöst wird.

```js
document.addEventListener("scrollsnapchange", (event) => {
  event.snapTargetBlock.classList.add("selected");
});
```

Wir könnten das Ereignis stattdessen auf `Window` auslösen, um die gleiche Funktionalität zu erreichen:

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
