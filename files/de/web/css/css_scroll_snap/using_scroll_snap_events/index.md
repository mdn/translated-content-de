---
title: Verwendung von Scroll Snap-Ereignissen
slug: Web/CSS/CSS_scroll_snap/Using_scroll_snap_events
l10n:
  sourceCommit: bb52c01c1534149f1e3e4755e2576ef7828ecc0f
---

Das [CSS Scroll Snap](/de/docs/Web/CSS/Guides/Scroll_snap)-Modul definiert zwei **Scroll Snap-Ereignisse**: [`scrollsnapchanging`](/de/docs/Web/API/Element/scrollsnapchanging_event) und [`scrollsnapchange`](/de/docs/Web/API/Element/scrollsnapchange_event). Diese ermöglichen die Ausführung von JavaScript als Reaktion darauf, dass der Browser feststellt, dass neue [Scroll Snap-Ziele](/de/docs/Web/CSS/Guides/Scroll_snap/Basic_concepts) anstehen bzw. ausgewählt wurden.

Dieser Leitfaden bietet einen Überblick über diese Ereignisse, zusammen mit vollständigen Beispielen.

## Überblick über die Ereignisse

Scroll Snap-Ereignisse werden auf einem {{Glossary("Scroll_container", "Scroll-Container")}} festgelegt, der potenzielle Scroll Snap-Ziele enthält:

- Das [`scrollsnapchanging`](/de/docs/Web/API/Element/scrollsnapchanging_event)-Ereignis wird ausgelöst, wenn der Browser feststellt, dass ein neues Scroll Snap-Ziel ausgewählt wird, wenn die aktuelle Scroll-Geste endet. Dies ist das _anstehende_ Scroll Snap-Ziel. Insbesondere dieses Ereignis wird während einer Scroll-Geste ausgelöst, jedes Mal, wenn der Benutzer über potenzielle neue Snap-Ziele fährt. Während das `scrollsnapchanging`-Ereignis möglicherweise mehrere Male für jede Scroll-Geste ausgelöst wird, wird es nicht bei allen potenziellen Snap-Zielen für eine Scroll-Geste ausgelöst, die über mehrere Snap-Ziele fährt. Stattdessen wird es nur für das letzte Ziel ausgelöst, auf dem das Snappen potenziell enden wird.

- Das [`scrollsnapchange`](/de/docs/Web/API/Element/scrollsnapchange_event)-Ereignis wird am Ende einer Scroll-Operation ausgelöst, wenn ein neues Scroll Snap-Ziel ausgewählt wurde. Insbesondere wird dieses Ereignis ausgelöst, wenn eine Scroll-Geste abgeschlossen ist, aber nur, wenn ein neues Snap-Ziel ausgewählt wurde. Dieses Ereignis wird direkt vor dem [`scrollend`](/de/docs/Web/API/Element/scrollend_event)-Ereignis ausgelöst.

Betrachten wir ein Beispiel, das die beiden Ereignisse in Aktion zeigt (Sie werden sehen, wie dies später im Artikel aufgebaut ist):

{{ EmbedLiveSample("Ein-dimensionales Scroller-Beispiel", "100%", "500") }}

Versuchen Sie, in der Liste der Kästchen nach oben und unten zu scrollen:

- Versuchen Sie, den Container langsam nach oben und unten zu scrollen, ohne die Scroll-Geste loszulassen. Beispielsweise können Sie Ihren Finger über den Scrollbereich auf einem Touchscreen-Gerät oder Trackpad ziehen oder die Maustaste auf der Scrollleiste gedrückt halten und die Maus bewegen. Die Kästchen, über die Sie sich bewegen, sollten eine dunklere Graufarbe annehmen, während Sie über sie fahren, und dann zurück zur Normalität, wenn Sie sich wieder von ihnen entfernen. Dies ist das `scrollsnapchanging`-Ereignis in Aktion.
- Lassen Sie nun die Scroll-Geste los; das nächste Kästchen zu Ihrer Scroll-Position sollte zu einer lila Farbe mit weißem Text animieren. Die Animation tritt auf, wenn das `scrollsnapchange`-Ereignis ausgelöst wird.
- Versuchen Sie schließlich, schnell zu scrollen. Beispielsweise können Sie Ihren Finger kräftig über den Bildschirm schnippen, um an mehreren potenziellen Zielen vorbei zu scrollen, bevor Sie sich in der Nähe eines Ziels weiter unten im Scroll-Container beruhigen. Sie sollten nur ein `scrollsnapchanging`-Ereignis sehen, das ausgelöst wird, wenn das Scrollen beginnt, sich zu verlangsamen, bevor das `scrollsnapchange`-Ereignis ausgelöst wird und das ausgewählte Snap-Ziel lila wird.

## Das `SnapEvent`-Ereignisobjekt

Beide der oben genannten Ereignisse teilen sich das [`SnapEvent`](/de/docs/Web/API/SnapEvent)-Ereignisobjekt. Dieses hat zwei Eigenschaften, die entscheidend dafür sind, wie Scroll Snap-Ereignisse funktionieren:

- [`snapTargetBlock`](/de/docs/Web/API/SnapEvent/snapTargetBlock) gibt eine Referenz auf das Element zurück, das beim Auslösen des Ereignisses in der {{Glossary("Flow_relative_values#block_direction", "Block-Richtung")}} eingerastet ist, oder `null`, wenn das Scroll Snappen nur in der Inline-Richtung erfolgt und daher kein Element in der Block-Richtung eingerastet ist.
- [`snapTargetInline`](/de/docs/Web/API/SnapEvent/snapTargetInline) gibt eine Referenz auf das Element zurück, das beim Auslösen des Ereignisses in der {{Glossary("Flow_relative_values#inline_direction", "Inline-Richtung")}} eingerastet ist, oder `null`, wenn das Scroll Snappen nur in der Block-Richtung erfolgt und daher kein Element in der Inline-Richtung eingerastet ist.

Diese Eigenschaften ermöglichen es Ereignis-Handler-Funktionen, das Element zu melden, das eingerastet wurde (im Fall von `scrollsnapchange`) oder das Element, das _eingeschnappt würde_, wenn die Scroll-Geste jetzt beendet wäre (im Fall von `scrollsnapchanging`) — in ein- und zweidimensionalen Fällen. Sie können diese Elemente dann auf jede beliebige Weise manipulieren, zum Beispiel indem Sie direkt Stile über deren [`style`](/de/docs/Web/API/HTMLElement/style)-Eigenschaften setzen, Klassen auf ihnen festlegen, die Stile in einem Stylesheet definiert haben, usw.

### Beziehung mit dem CSS `scroll-snap-type`

Die in `SnapEvent` verfügbaren Eigenschaftswerte entsprechen direkt dem Wert der {{cssxref("scroll-snap-type")}}-CSS-Eigenschaft, der auf dem Scroll-Container festgelegt ist:

- Wenn die Snap-Achse als `block` festgelegt ist (oder ein physischer Achsenwert, der im aktuellen Schreibmodus `block` entspricht), gibt nur `snapTargetBlock` eine Elementreferenz zurück.
- Wenn die Snap-Achse als `inline` festgelegt ist (oder ein physischer Achsenwert, der im aktuellen Schreibmodus `inline` entspricht), gibt nur `snapTargetInline` eine Elementreferenz zurück.
- Wenn die Snap-Achse als `both` festgelegt ist, geben `snapTargetBlock` und `snapTargetInline` eine Elementreferenz zurück.

### Umgang mit eindimensionalen Scroller

Wenn Sie es mit einem horizontalen Scroller zu tun haben, ändert sich nur die `snapTargetInline`-Eigenschaft des Ereignisobjekts, wenn sich das eingeschnappte Element ändert, wenn der Inhalt einen horizontalen {{cssxref("writing-mode")}} hat, oder die `snapTargetBlock`-Eigenschaft, wenn der Inhalt einen vertikalen `writing-mode` hat.

Umgekehrt, wenn Sie es mit einem vertikalen Scroller zu tun haben, ändert sich nur die `snapTargetBlock`-Eigenschaft, wenn sich das eingeschnappte Element ändert, wenn der Inhalt einen horizontalen `writing-mode` hat, oder die `snapTargetInline`-Eigenschaft, wenn der Inhalt einen vertikalen `writing-mode` hat.

In beiden Fällen gibt die nicht-ändernde Eigenschaft der beiden `null` zurück.

Schauen wir uns ein Beispiel-Snippet an, um eine typische eindimensionale Scroll Snap-Ereignis-Handler-Funktion zu zeigen:

```js
scrollingElem.addEventListener("scrollsnapchange", (event) => {
  event.snapTargetBlock.className = "select-section";
});
```

In diesem Snippet wird eine `scrollsnapchange`-Handler-Funktion auf ein Block-Richtung-Scroll-Container-Element gesetzt, in dem Snap-Ziele erscheinen. Wenn das Ereignis ausgelöst wird, setzen wir eine `select-section`-Klasse auf das `snapTargetBlock`-Element, die verwendet werden könnte, um ein neu ausgewähltes Snap-Ziel zu stylen (zum Beispiel mit einer Animation).

### Umgang mit zweidimensionalen Scroller

Wenn Sie es mit einem horizontalen _und_ vertikalen Scroller zu tun haben, wird der Code komplexer. Dies liegt daran, dass die `snapTargetBlock`-Eigenschaft _und_ die `snapTargetInline`-Eigenschaft Werte für eine Elementreferenz zurückgeben (keine von beiden gibt `null` zurück), und eine oder die andere wird den Wert ändern, je nachdem, in welche Richtung Sie scrollen und welchem `writing-mode` der Inhalt folgt:

- Wenn der Scroller horizontal gescrollt wird, ändert sich die `snapTargetInline`-Eigenschaft, wenn sich das eingeschnappte Element ändert, wenn der Inhalt einen horizontalen {{cssxref("writing-mode")}} hat, oder die `snapTargetBlock`-Eigenschaft, wenn der Inhalt einen vertikalen `writing-mode` hat.
- Wenn der Scroller vertikal gescrollt wird, ändert sich die `snapTargetBlock`-Eigenschaft, wenn sich das eingeschnappte Element ändert, wenn der Inhalt einen horizontalen `writing-mode` hat, oder die `snapTargetInline`-Eigenschaft, wenn der Inhalt einen vertikalen `writing-mode` hat.

Um dies zu handhaben, müssen Sie wahrscheinlich im Auge behalten, ob es das `snapTargetBlock`- oder das `snapTargetInline`-Element war, das sich geändert hat. Werfen wir einen Blick auf ein Beispiel:

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

In der Ereignis-Handler-Funktion verwenden wir `if`-Anweisungen, um zu überprüfen, ob:

- Die `prevState.snapTargetBlock`-ID identisch mit der ID des aktuellen `event.snapTargetBlock`-Elements ist.
- Die `prevState.snapTargetInline`-ID identisch mit der ID des aktuellen `event.snapTargetInline`-Elements ist.

Wenn die Werte unterschiedlich sind, bedeutet dies, dass der Scroller in diese Richtung (Block oder Inline) verschoben wurde, und wir loggen eine Nachricht in der Konsole, um dies anzuzeigen. In einem realen Beispiel würden Sie wahrscheinlich das eingeschnappte Element auf irgendeine Weise stylen, um anzuzeigen, dass es eingeschnappt wurde.

Wir aktualisieren dann die Werte von `prevState.snapTargetBlock` und `prevState.snapTargetInline`, bereit für die nächste Ausführung der Ereignis-Handler-Funktion.

Im Rest dieses Artikels werden wir uns einige vollständige Scroll Snap-Ereignis-Beispiele ansehen, die Sie in den live gerenderten Versionen am Ende jedes Abschnitts ausprobieren können.

## Eindimensionales Scroller-Beispiel

Dieses Beispiel zeigt ein vertikal scrollendes {{htmlelement("main")}}-Element, das mehrere hellgraue {{htmlelement("section")}}-Elemente enthält, die alle Scroll Snap-Ziele sind. Wenn ein neues Snap-Ziel ansteht, wird es sich in einen dunkleren Grauton ändern. Wenn ein neues Snap-Ziel ausgewählt wird, wird es sanft in lila mit weißem Text animiert. Wenn zuvor ein anderes Snap-Ziel ausgewählt war, wird es sanft wieder in grau mit schwarzem Text animiert.

### HTML

Das HTML für das Beispiel ist ein einzelnes `<main>`-Element. Wir werden später mit JavaScript dynamisch `<section>`-Elemente hinzufügen, um Platz auf der Seite zu sparen.

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
  font-family: "Helvetica", "Arial", sans-serif;
  border-radius: 5px;
  background: #eeeeee;
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

Im CSS beginnen wir, indem wir dem `<main>`-Element einen dicken schwarzen {{cssxref("border")}} und eine feste {{cssxref("width")}} und {{cssxref("height")}} geben. Wir setzen seinen {{cssxref("overflow")}}-Wert auf `scroll`, damit überfließende Inhalte verborgen sind und gescrollt werden können, und setzen {{cssxref("scroll-snap-type")}} auf `block mandatory`, sodass Snap-Ziele nur in der Block-Richtung immer eingeschnappt werden.

```css
main {
  border: 3px solid black;
  width: 250px;
  height: 450px;
  overflow: scroll;
  scroll-snap-type: block mandatory;
}
```

Jedem `<section>`-Element wird ein {{cssxref("margin")}} von `50px` gegeben, um die `<section>`-Elemente zu trennen und das Scroll Snap-Verhalten deutlicher zu machen. Wir setzen dann {{cssxref("scroll-snap-align")}} auf `center`, um anzugeben, dass wir in der Mitte jedes Snap-Ziels einrasten wollen. Schließlich wenden wir eine {{cssxref("transition")}} an, um sanft zu den Stiländerungen zu animieren, die angewendet werden, wenn eine Snap-Zielauswahl getroffen wurde oder ansteht.

```css
section {
  margin: 50px auto;
  scroll-snap-align: center;
  transition: 0.5s ease;
}
```

Die oben erwähnten Stiländerungen werden durch Klassen angewendet, die über JavaScript auf die `<section>`-Elemente angewendet werden. Die `select-section`-Klasse wird angewendet, um eine Auswahl zu signalisieren — dies setzt einen lila Hintergrund und weiße Textfarbe. Die `pending`-Klasse wird angewendet, um eine anstehende Snap-Zielauswahl zu signalisieren — dies färbt den Hintergrund der Zielauswahl dunkler grau.

```css
.pending {
  background-color: #cccccc;
}

.select-section {
  background: purple;
  color: white;
}
```

### JavaScript

Im JavaScript beginnen wir, indem wir eine Referenz auf das `<main>`-Element erhalten und die Anzahl der zu generierenden `<section>`-Elemente definieren (in diesem Fall 21) und eine Variable zum Zählen festlegen. Dann verwenden wir eine [`while`](/de/docs/Web/JavaScript/Reference/Statements/while)-Schleife, um die `<section>`-Elemente zu generieren und jedem einen Kind-[`h2`](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) mit dem Text `Section` plus dem aktuellen Wert von `n` zu geben.

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

Nun zur [`scrollsnapchanging`](/de/docs/Web/API/Element/scrollsnapchanging_event)-Ereignis-Handler-Funktion. Wenn ein Kind des `<main>`-Elements (d.h. jedes `<section>`-Element) ein anstehendes Snap-Ziel wird, dann:

1. Überprüfen wir, ob ein Element zuvor die `pending`-Klasse hatte und, falls ja, entfernen wir sie. Dies ist so, dass nur das aktuelle anstehende Ziel die `pending`-Klasse erhält und dunkler grau eingefärbt wird. Wir möchten nicht, dass zuvor anstehende Ziele, die nicht mehr anstehen, den Stil beibehalten.
2. Geben wir dem Element, das von der [`snapTargetBlock`](/de/docs/Web/API/SnapEvent/snapTargetBlock)-Eigenschaft referenziert wird (was eines der `<section>`-Elemente sein wird), die `pending`-Klasse, damit es sich dunkler grau färbt.

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
> In diesem Beispiel müssen wir uns nicht um die `snapTargetInline`-Eigenschaft des Ereignisobjekts kümmern — wir scrollen nur vertikal und das Beispiel verwendet einen horizontalen Schreibmodus, daher wird sich nur der `snapTargetBlock`-Wert ändern. In diesem Fall wird `snapTargetInline` immer `null` zurückgeben.

Wenn eine Scroll-Geste endet und ein `<section>`-Element tatsächlich als Snap-Ziel ausgewählt wird, wird die [`scrollsnapchange`](/de/docs/Web/API/Element/scrollsnapchange_event)-Ereignis-Handler-Funktion ausgelöst. Diese:

1. Überprüft, ob zuvor ein Snap-Ziel ausgewählt wurde — d.h. ob eine `select-section`-Klasse zuvor auf ein Element angewendet wurde. Falls ja, entfernen wir sie.
2. Wendet die `select-section`-Klasse auf das `<section>`-Element an, das in der `snapTargetBlock`-Eigenschaft referenziert ist, damit das gerade ausgewählte Snap-Ziel die Auswahlanimation erhält.

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

{{ EmbedLiveSample("Eindimensionales Scroller-Beispiel", "100%", "500") }}

## Zweidimensionales Scroller-Beispiel

Dieses Beispiel ist dem vorherigen ähnlich, außer dass es ein horizontal _und_ vertikal scrollendes {{htmlelement("main")}}-Element zeigt, das mehrere hellgraue {{htmlelement("section")}}-Elemente enthält, die alle Snap-Ziele sind.

Das HTML für das Beispiel ist das gleiche wie im vorherigen Beispiel — ein Einzelnes `<main>`-Element.

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
  font-family: "Helvetica", "Arial", sans-serif;
  border-radius: 5px;
  background: #eeeeee;
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

Das CSS für dieses Beispiel ist dem CSS im vorherigen Beispiel ähnlich. Die bedeutendsten Unterschiede sind folgende.

Lassen Sie uns zunächst den `<main>`-Element-Stil betrachten. Wir möchten, dass die `<section>`-Elemente als Raster angezeigt werden, daher verwenden wir das [CSS Grid Layout](/de/docs/Web/CSS/Guides/Grid_layout), um anzugeben, dass wir sie in sieben Spalten anzeigen möchten, indem wir einen {{cssxref("grid-template-columns")}}-Wert von `repeat(7, 1fr)` verwenden. Wir geben auch den Abstand um die `<section>`-Elemente durch `padding` und einen {{cssxref("gap")}} auf dem `<main>`-Element an, anstelle von `margin` auf den `<section>`-Elementen.

Schließlich, da wir in beide Richtungen in diesem Beispiel scrollen, setzen wir {{cssxref("scroll-snap-type")}} auf `both mandatory`, damit Snap-Ziele sowohl in der Block- als auch in der Inline-Richtung immer eingeschnappt werden.

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

Als nächstes verwenden wir CSS-Animationen in diesem Beispiel anstelle von Übergängen. Dies führt zu komplexerem Code, ermöglicht jedoch eine feinere Kontrolle über die angewendeten Animationen.

Wir definieren zunächst die Klassen, die angewendet werden, um zu signalisieren, dass eine Snap-Zielauswahl getroffen wurde oder bevorsteht. Die `select-section`- und `deselect-section`-Klassen wenden Keyframe-Animationen an, um eine Auswahl oder Deselektion zu signalisieren. Die `pending`-Klasse wird angewendet, um eine anstehende Snap-Zielauswahl zu signalisieren (sie färbt den Hintergrund der Auswahl dunkler grau, wie im vorherigen Beispiel).

Die {{cssxref("@keyframes")}} animieren von einem grauen Hintergrund und einer schwarzen (Standard-)Textfarbe zu einem lila Hintergrund und weißer Textfarbe und zurück, bzw. Die letzte Animation ist etwas anders als die erste — sie verwendet auch {{cssxref("opacity")}}, um einen Ausblende-/Einblendeeffekt zu erzeugen.

```css
.select-section {
  animation: select 0.8s ease forwards;
}

.deselect-section {
  animation: deselect 0.8s ease forwards;
}

.pending {
  background-color: #cccccc;
}

@keyframes select {
  from {
    background: #eeeeee;
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
    background: #eeeeee;
    color: black;
    opacity: 0.1;
  }

  100% {
    background: #eeeeee;
    color: black;
    opacity: 1;
  }
}
```

### JavaScript

Im JavaScript beginnen wir auf die gleiche Weise wie beim vorherigen Beispiel, außer dass wir diesmal 49 `<section>`-Elemente erzeugen und jedem eine ID von `s` plus dem aktuellen Wert von `n` geben, um sie später leichter nachverfolgen zu können. Mit dem CSS-Grid-Layout, das wir oben angegeben haben, haben wir sieben Spalten mit sieben `<section>`-Elementen.

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

Als nächstes spezifizieren wir ein Objekt namens `prevState`, das uns ermöglicht, das zuvor ausgewählte Snap-Ziel zu jedem Zeitpunkt nachzuverfolgen — seine Eigenschaften speichern die vorherigen Inline- und Block-Snap-Ziel-IDs. Dies ist wichtig, um herauszufinden, ob wir bei jedem Auslösen der Ereignis-Handler-Funktion das neue Block-Ziel oder das neue Inline-Ziel stylen müssen.

```js
const prevState = {
  snapTargetInline: "s1",
  snapTargetBlock: "s1",
};
```

Zum Beispiel, nehmen wir an, der Scroll-Container wird gescrollt, sodass sich die ID des neuen [`SnapEvent.snapTargetBlock`](/de/docs/Web/API/SnapEvent/snapTargetBlock)-Elements geändert hat (sie ist nicht gleich der in `prevState.snapTargetBlock` gespeicherten ID), aber die ID des neuen [`SnapEvent.snapTargetInline`](/de/docs/Web/API/SnapEvent/snapTargetInline)-Elements ist immer noch die gleiche wie die in `prevState.snapTargetInline` gespeicherte ID. Dies bedeutet, dass wir zu einem neuen Snap-Ziel in der Block-Richtung gewechselt haben, daher sollten wir `SnapEvent.snapTargetBlock` stylen, aber wir haben zu keinem neuen Snap-Ziel in der Inline-Richtung gewechselt, daher sollten wir `SnapEvent.snapTargetInline` nicht stylen.

Dieses Mal erklären wir zuerst die [`scrollsnapchange`](/de/docs/Web/API/Element/scrollsnapchange_event)-Ereignis-Handler-Funktion. In dieser Funktion:

1. Beginnen wir, indem wir sicherstellen, dass ein zuvor ausgewähltes `<section>`-Element-Snap-Ziel (wie durch das Vorhandensein der `select-section`-Klasse signalisiert) die `deselect-section`-Klasse erhält, damit es die Deselektions-Animation zeigt. Wenn zuvor kein Snap-Ziel ausgewählt wurde, wenden wir die `select-section`-Klasse auf das erste `<section>` im DOM an, sodass es bei der ersten Seitenladung als ausgewählt angezeigt wird.
2. Vergleichen wir die zuvor ausgewählte Snap-Ziel-ID mit der neu ausgewählten Snap-Ziel-ID, sowohl für die Block- als auch für die Inline-Auswahl. Wenn sie unterschiedlich sind, bedeutet dies, dass sich die Auswahl geändert hat, daher wenden wir die `select-section`-Klasse auf das entsprechende Snap-Ziel an, um diese visuell anzuzeigen.
3. Aktualisieren wir `prevState.snapTargetBlock` und `prevState.snapTargetInline`, sodass sie gleich den IDs der gerade ausgewählten Scroll-Snap-Ziele sind, damit sie beim nächsten Auslösen des Ereignisses die vorherigen Auswahlen sind.

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

Wenn die [`scrollsnapchanging`](/de/docs/Web/API/Element/scrollsnapchanging_event)-Ereignis-Handler-Funktion ausgelöst wird, dann:

1. Entfernen wir die `pending`-Klasse von dem Element, das sie zuvor hatte, damit nur das aktuelle anstehende Ziel die `pending`-Klasse erhält und dunkler grau eingefärbt wird.
2. Geben wir dem aktuellen anstehenden Element die `pending`-Klasse, damit es sich dunkler grau färbt, aber nur, wenn es nicht bereits die `select-section`-Klasse hat — wir möchten, dass ein zuvor ausgewähltes Ziel die lila Auswahl-Styling beibehält, bis tatsächlich ein neues Ziel ausgewählt wird. Wir fügen auch einen zusätzlichen Check in die `if`-Anweisungen ein, um sicherzustellen, dass wir nur das Inline- oder Block-anstehende Snap-Ziel stylen, je nachdem, welches sich geändert hat. Wieder vergleichen wir das vorherige Snap-Ziel mit dem aktuellen Snap-Ziel in jedem Fall.

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

Versuchen Sie, horizontal und vertikal im Scroll-Container zu scrollen, und beobachten Sie das oben beschriebene Verhalten:

{{ EmbedLiveSample("Zweidimensionales Scroller-Beispiel", "100%", "500") }}

## Scroll Snap-Ereignisse auf `Document` und `Window`

In diesem Artikel haben wir die Scroll Snap-Ereignisse behandelt, die auf der [`Element`](/de/docs/Web/API/Element)-Schnittstelle ausgelöst werden, aber dieselben Ereignisse werden auch auf den [`Document`](/de/docs/Web/API/Document)- und [`Window`](/de/docs/Web/API/Window)-Objekten ausgelöst. Siehe:

- `Document` [`scrollsnapchange`](/de/docs/Web/API/Document/scrollsnapchange_event) und [`scrollsnapchanging`](/de/docs/Web/API/Document/scrollsnapchanging_event)-Ereignisreferenzen.
- `Window` [`scrollsnapchange`](/de/docs/Web/API/Window/scrollsnapchange_event) und [`scrollsnapchanging`](/de/docs/Web/API/Window/scrollsnapchanging_event)-Ereignisreferenzen.

Diese funktionieren ähnlich wie die `Element`-Versionen, außer dass das gesamte HTML-Dokument als das Scroll Snap-Container festgelegt sein muss (d.h. {{cssxref("scroll-snap-type")}} wird auf dem {{htmlelement("html")}}-Element festgelegt).

Zum Beispiel, wenn wir ein ähnliches Beispiel wie die oben betrachteten hätten, bei dem wir ein `<main>`-Element mit umfangreichen Inhalten haben:

```html
<main>
  <!-- Significant content -->
</main>
```

Das `<main>`-Element könnte mit einer Kombination von CSS-Eigenschaften in einen Scroll-Container verwandelt werden, zum Beispiel:

```css
main {
  width: 250px;
  height: 450px;
  overflow: scroll;
}
```

Sie könnten dann ein Scroll Snap-Verhalten auf den scrollenden Inhalt implementieren, indem Sie die {{cssxref("scroll-snap-type")}}-Eigenschaft auf das {{htmlelement("html")}}-Element spezifizieren:

```css
html {
  scroll-snap-type: block mandatory;
}
```

Das folgende JavaScript-Snippet würde das `scrollsnapchange`-Ereignis im HTML-Dokument auslösen, wenn ein Kind des `<main>`-Elements ein neu ausgewähltes Snap-Ziel wird. In der Handler-Funktion setzen wir eine `selected`-Klasse auf das Kind, das durch die [`SnapEvent.snapTargetBlock`](/de/docs/Web/API/SnapEvent/snapTargetBlock) referenziert wird, die verwendet werden könnte, um es zu stylen, damit es aussieht, als wäre es ausgewählt worden (zum Beispiel mit einer Animation), wenn das Ereignis ausgelöst wird.

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
- [CSS Scroll Snap](/de/docs/Web/CSS/Guides/Scroll_snap) Modul
- [Scroll Snap Events](https://developer.chrome.com/blog/scroll-snap-events) auf developer.chrome.com (2024)
