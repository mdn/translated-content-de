---
title: Verwendung von Scroll Snap-Ereignissen
slug: Web/CSS/CSS_scroll_snap/Using_scroll_snap_events
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Das [CSS scroll snap](/de/docs/Web/CSS/CSS_scroll_snap)-Modul definiert zwei **Scroll Snap-Ereignisse**: [`scrollsnapchanging`](/de/docs/Web/API/Element/scrollsnapchanging_event) und [`scrollsnapchange`](/de/docs/Web/API/Element/scrollsnapchange_event). Diese ermöglichen es, JavaScript auszuführen, wenn der Browser bestimmt, dass neue [scroll snap targets](/de/docs/Web/CSS/CSS_scroll_snap/Basic_concepts) ausstehend sind beziehungsweise ausgewählt werden.

Dieser Leitfaden bietet einen Überblick über diese Ereignisse sowie vollständige Beispiele.

## Überblick über Ereignisse

Scroll Snap-Ereignisse werden auf einem {{Glossary("Scroll_container", "Scroll-Container")}} festgelegt, der potenzielle Scroll Snap-Ziele enthält:

- Das [`scrollsnapchanging`](/de/docs/Web/API/Element/scrollsnapchanging_event)-Ereignis wird ausgelöst, wenn der Browser bestimmt, dass ein neues Scroll Snap-Ziel ausgewählt wird, wenn die aktuelle Scroll-Geste endet. Dies ist das _ausstehende_ Scroll Snap-Ziel. Genauer gesagt wird dieses Ereignis während einer Scroll-Geste jedes Mal ausgelöst, wenn der Benutzer über potenzielle neue Snap-Ziele fährt. Obwohl das `scrollsnapchanging`-Ereignis mehrfach für jede Scroll-Geste ausgelöst werden kann, wird es nicht für alle potenziellen Snap-Ziele bei einer Scroll-Geste ausgelöst, die über mehrere Snap-Ziele hinweg führt. Es wird vielmehr nur für das letzte Ziel ausgelöst, bei dem das Snapping potenziell endet.

- Das [`scrollsnapchange`](/de/docs/Web/API/Element/scrollsnapchange_event)-Ereignis wird am Ende eines Scroll-Vorgangs ausgelöst, wenn ein neues Scroll Snap-Ziel ausgewählt wird. Genauer gesagt wird dieses Ereignis ausgelöst, wenn eine Scroll-Geste abgeschlossen ist, jedoch nur, wenn ein neues Snap-Ziel ausgewählt wird. Dieses Ereignis wird unmittelbar vor dem [`scrollend`](/de/docs/Web/API/Element/scrollend_event)-Ereignis ausgelöst.

Betrachten wir ein Beispiel, das die beiden Ereignisse im Einsatz zeigt (Sie werden später im Artikel sehen, wie dies erstellt wird):

{{ EmbedLiveSample("Ein-dimensionales Scroller-Beispiel", "100%", "500") }}

Probieren Sie es aus, indem Sie die Liste der Boxen nach oben und unten scrollen:

- Versuchen Sie, den Container langsam nach oben und unten zu scrollen, ohne die Scroll-Geste loszulassen. Ziehen Sie zum Beispiel Ihre Finger über den Scrollbereich auf einem Touchscreen-Gerät oder Trackpad oder halten Sie die Maustaste auf der Scrollleiste gedrückt und bewegen Sie die Maus. Die Boxen, über die Sie fahren, sollten sich beim darüberfahren dunkelgrau färben und dann wieder normal werden, wenn Sie sich von ihnen entfernen. Dies ist das `scrollsnapchanging`-Ereignis in Aktion.
- Versuchen Sie jetzt, die Scroll-Geste loszulassen; die Box in der Nähe Ihrer Scroll-Position sollte sich zu einer lila Farbe mit weißem Text animieren. Die Animation tritt auf, wenn das `scrollsnapchange`-Ereignis ausgelöst wird.
- Versuchen Sie schließlich, schnell zu scrollen. Schieben Sie zum Beispiel Ihren Finger kräftig auf dem Bildschirm, um an mehreren potenziellen Zielen vorbeizuscrollen, bevor Sie in der Nähe eines weiter unten im Scroll-Container liegenden Ziels zum Stillstand kommen. Sie sollten nur ein `scrollsnapchanging`-Ereignis sehen, das ausgelöst wird, wenn das Scrollen beginnt, sich zu verlangsamen, bevor das `scrollsnapchange`-Ereignis ausgelöst wird und das ausgewählte Snap-Ziel lila wird.

## Das `SnapEvent`-Ereignisobjekt

Beide oben genannten Ereignisse teilen das [`SnapEvent`](/de/docs/Web/API/SnapEvent)-Ereignisobjekt. Dieses hat zwei Eigenschaften, die für das Funktionieren der Scroll Snap-Ereignisse von entscheidender Bedeutung sind:

- [`snapTargetBlock`](/de/docs/Web/API/SnapEvent/snapTargetBlock) gibt eine Referenz auf das Element zurück, zu dem im {{Glossary("Flow_relative_values#block_direction", "block direction")}} gesnappt wird, wenn das Ereignis ausgelöst wird, oder `null`, wenn das Scroll-Snapping nur in der Inline-Richtung stattfindet, sodass in der Block-Richtung kein Element gesnappt wird.
- [`snapTargetInline`](/de/docs/Web/API/SnapEvent/snapTargetInline) gibt eine Referenz auf das Element zurück, zu dem in der {{Glossary("Flow_relative_values#inline_direction", "inline direction")}} gesnappt wird, wenn das Ereignis ausgelöst wird, oder `null`, wenn das Scroll-Snapping nur in der Block-Richtung stattfindet, sodass in der Inline-Richtung kein Element gesnappt wird.

Diese Eigenschaften ermöglichen es Ereignis-Handler-Funktionen, das Element zu melden, zu dem gesnappt wurde (im Fall von `scrollsnapchange`) oder das Element, zu dem gesnappt _würde_, wenn die Scroll-Geste jetzt beendet würde (im Fall von `scrollsnapchanging`) — in einer oder zwei Dimensionen. Sie können diese Elemente dann auf beliebige Weise manipulieren, zum Beispiel indem Sie direkt Stile über ihre [`style`](/de/docs/Web/API/HTMLElement/style)-Eigenschaften setzen, Klassen auf ihnen setzen, die in einem Stylesheet definierte Stile haben usw.

### Beziehung zur CSS-Eigenschaft `scroll-snap-type`

Die auf `SnapEvent` verfügbaren Eigenschaftswerte entsprechen direkt dem Wert der {{cssxref("scroll-snap-type")}}-CSS-Eigenschaft, die auf den Scroll-Container gesetzt ist:

- Wenn die Snap-Achse als `block` angegeben ist (oder ein physischer Achsenwert, der in der aktuellen Schreibrichtung `block` entspricht), gibt nur `snapTargetBlock` eine Elementreferenz zurück.
- Wenn die Snap-Achse als `inline` angegeben ist (oder ein physischer Achsenwert, der in der aktuellen Schreibrichtung `inline` entspricht), gibt nur `snapTargetInline` eine Elementreferenz zurück.
- Wenn die Snap-Achse als `both` angegeben ist, geben sowohl `snapTargetBlock` als auch `snapTargetInline` eine Elementreferenz zurück.

### Umgang mit eindimensionalen Scrollern

Wenn Sie es mit einem horizontalen Scroller zu tun haben, wird sich nur die `snapTargetInline`-Eigenschaft des Ereignisobjekts ändern, wenn sich das gesnappte Element ändert und der Inhalt einen horizontalen {{cssxref("writing-mode")}} hat, oder die `snapTargetBlock`-Eigenschaft, wenn der Inhalt einen vertikalen `writing-mode` hat.

Umgekehrt, wenn Sie es mit einem vertikalen Scroller zu tun haben, wird sich nur die `snapTargetBlock`-Eigenschaft ändern, wenn sich das gesnappte Element ändert und der Inhalt einen horizontalen `writing-mode` hat, oder die `snapTargetInline`-Eigenschaft, wenn der Inhalt einen vertikalen `writing-mode` hat.

In beiden Fällen gibt die unveränderte Eigenschaft der beiden `null` zurück.

Schauen wir uns ein Beispiel-Snippet an, um eine typische eindimensionale Scroll Snap-Ereignis-Handler-Funktion zu zeigen:

```js
scrollingElem.addEventListener("scrollsnapchange", (event) => {
  event.snapTargetBlock.className = "select-section";
});
```

In diesem Snippet wird eine `scrollsnapchange`-Handler-Funktion auf einem Block-Richtungs-Scroll-Container-Element gesetzt, innerhalb dessen Snap-Ziele erscheinen. Wenn das Ereignis ausgelöst wird, setzen wir eine `select-section`-Klasse auf das `snapTargetBlock`-Element, die verwendet werden könnte, um ein neu ausgewähltes Snap-Ziel so zu stylen, dass es so aussieht, als wäre es ausgewählt worden (zum Beispiel mit einer Animation).

### Umgang mit zweidimensionalen Scrollern

Wenn Sie es mit einem horizontal _und_ vertikalen Scroller zu tun haben, wird der Code komplexer. Dies liegt daran, dass die `snapTargetBlock`-Eigenschaft _und_ die `snapTargetInline`-Eigenschaft beide eine Elementreferenz zurückgeben (keine gibt `null` zurück), und eine oder die andere wird ihren Wert je nach Richtung ändern, in die Sie scrollen, und der `writing-mode` des Inhalts:

- Wenn der Scroller horizontal gescrollt wird, ändert sich die `snapTargetInline`-Eigenschaft, wenn sich das gesnappte Element ändert und der Inhalt einen horizontalen {{cssxref("writing-mode")}} hat, oder die `snapTargetBlock`-Eigenschaft, wenn der Inhalt einen vertikalen `writing-mode` hat.
- Wenn der Scroller vertikal gescrollt wird, ändert sich die `snapTargetBlock`-Eigenschaft, wenn sich das gesnappte Element ändert und der Inhalt einen horizontalen `writing-mode` hat, oder die `snapTargetInline`-Eigenschaft, wenn der Inhalt einen vertikalen `writing-mode` hat.

Um dies zu handhaben, müssen Sie wahrscheinlich den Überblick behalten, ob es das `snapTargetBlock`- oder das `snapTargetInline`-Element war, das sich geändert hat. Betrachten wir ein Beispiel:

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

In der Ereignis-Handler-Funktion verwenden wir `if`-Anweisungen, um zu prüfen, ob:

- Die `prevState.snapTargetBlock`-ID gleich der ID des aktuellen `event.snapTargetBlock`-Elements ist.
- Die `prevState.snapTargetInline`-ID gleich der ID des aktuellen `event.snapTargetInline`-Elements ist.

Wenn die Werte unterschiedlich sind, bedeutet das, dass der Scroller in diese Richtung (block oder inline) gescrollt wurde, und wir loggen eine Nachricht in die Konsole, um dies anzuzeigen. In einem echten Beispiel würden Sie wahrscheinlich das gesnappte Element auf irgendeine Weise stylen, um anzuzeigen, dass es gesnappt wurde.

Wir aktualisieren dann die Werte von `prevState.snapTargetBlock` und `prevState.snapTargetInline`, um bereit zu sein, wenn der Ereignishandler das nächste Mal ausgeführt wird.

Im restlichen Teil dieses Artikels werden wir uns einige vollständige Beispiele für Scroll Snap-Ereignisse ansehen, die Sie in den am Ende jedes Abschnitts live gerenderten Versionen ausprobieren können.

## Eindimensionales Scroller-Beispiel

Dieses Beispiel enthält ein vertikal scrollendes {{htmlelement("main")}}-Element mit mehreren hellgrauen {{htmlelement("section")}}-Elementen, die alle Scroll-Snap-Ziele sind. Wenn ein neues Snap-Ziel ausstehend ist, wird es dunkler grau. Wenn ein neues Snap-Ziel ausgewählt wird, animiert es sanft zu Lila mit weißem Text. Wenn ein anderes Snap-Ziel zuvor ausgewählt wurde, animiert es sanft zurück zu Grau mit schwarzem Text.

### HTML

Das HTML für das Beispiel ist ein einzelnes `<main>`-Element. Wir werden die `<section>`-Elemente später dynamisch mit JavaScript hinzufügen, um Platz auf der Seite zu sparen.

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

Im CSS geben wir dem `<main>`-Element zunächst einen kräftigen schwarzen {{cssxref("border")}} und eine feste {{cssxref("width")}} und {{cssxref("height")}}. Wir setzen seinen {{cssxref("overflow")}}-Wert auf `scroll`, damit überlaufender Inhalt verborgen wird und gescrollt werden kann, und wir setzen {{cssxref("scroll-snap-type")}} auf `block mandatory`, damit nur Snap-Ziele in der Block-Richtung immer gesnappt werden.

```css
main {
  border: 3px solid black;
  width: 250px;
  height: 450px;
  overflow: scroll;
  scroll-snap-type: block mandatory;
}
```

Jedes `<section>`-Element erhält einen {{cssxref("margin")}} von `50px`, um die `<section>`-Elemente voneinander zu trennen und das Scroll-Snapping-Verhalten deutlicher zu machen. Wir setzen dann {{cssxref("scroll-snap-align")}} auf `center`, um anzugeben, dass wir in der Mitte jedes Snap-Ziels snappen möchten. Schließlich wenden wir eine {{cssxref("transition")}} an, um die Stiländerungen, die angewendet werden, wenn eine Snap-Zielauswahl getroffen oder ausstehend ist, sanft zu animieren.

```css
section {
  margin: 50px auto;
  scroll-snap-align: center;
  transition: 0.5s ease;
}
```

Die oben genannten Stiländerungen werden durch Klassen angewendet, die über JavaScript auf die `<section>`-Elemente angewendet werden. Die `select-section`-Klasse wird verwendet, um eine Auswahl anzuzeigen — dies setzt einen lila Hintergrund und weißen Text. Die `pending`-Klasse wird verwendet, um eine ausstehende Snap-Zielauswahl anzuzeigen — dies färbt den Hintergrund der Zielen, die ausgewählt werden sollen, dunkler grau.

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

Im JavaScript beginnen wir damit, eine Referenz auf das `<main>`-Element zu erhalten und die Anzahl der zu generierenden `<section>`-Elemente festzulegen (in diesem Fall 21) sowie eine Variable, von der aus wir zählen. Wir verwenden dann eine [`while`](/de/docs/Web/JavaScript/Reference/Statements/while)-Schleife, um die `<section>`-Elemente zu erzeugen, wobei wir jedem Element ein Kind [`h2`](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) mit einem Text hinzufügen, der `Section` plus den aktuellen Wert von `n` liest.

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

Nun zur [`scrollsnapchanging`](/de/docs/Web/API/Element/scrollsnapchanging_event)-Ereignis-Handler-Funktion. Wenn ein Kind des `<main>`-Elements (d.h. eines der `<section>`-Elemente) ein ausstehendes Snap-Ziel wird, führen wir folgende Schritte durch:

1. Wir überprüfen, ob zuvor ein Element die `pending`-Klasse übernommen hatte, und wenn ja, entfernen wir sie. Dies geschieht so, dass nur das aktuelle ausstehende Ziel die `pending`-Klasse erhält und dunkler grau gefärbt wird. Wir möchten nicht, dass zuvor ausstehende Ziele, die nicht mehr ausstehend sind, die Stiländerung beibehalten.
2. Wir geben dem durch die [`snapTargetBlock`](/de/docs/Web/API/SnapEvent/snapTargetBlock)-Eigenschaft referenzierten Element (das eines der `<section>`-Elemente ist) die `pending`-Klasse, sodass es dunkler grau wird.

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
> Wir müssen uns in diesem Beispiel keine Sorgen über die `snapTargetInline`-Eigenschaft des Ereignisobjekts machen — wir scrollen nur vertikal und das Beispiel verwendet eine horizontale Schreibrichtung, daher wird sich nur der `snapTargetBlock`-Wert ändern. In diesem Fall wird `snapTargetInline` immer `null` zurückgeben.

Wenn eine Scroll-Geste endet und ein `<section>`-Element tatsächlich als Snap-Ziel ausgewählt wird, wird die [`scrollsnapchange`](/de/docs/Web/API/Element/scrollsnapchange_event)-Ereignis-Handler-Funktion ausgelöst. Diese Funktion:

1. Überprüft, ob ein Snap-Ziel zuvor ausgewählt wurde — d.h. ob zuvor eine `select-section`-Klasse auf ein Element angewendet wurde. Wenn ja, entfernen wir sie.
2. Wir wenden die `select-section`-Klasse auf das `<section>`-Element an, das in der `snapTargetBlock`-Eigenschaft referenziert wird, damit das gerade ausgewählte Snap-Ziel die Auswahlanimation erhält.

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

Versuchen Sie, im Scroll-Container nach oben und unten zu scrollen und das beschriebene Verhalten zu beobachten:

{{ EmbedLiveSample("Ein-dimensionales Scroller-Beispiel", "100%", "500") }}

## Zwei-dimensionales Scroller-Beispiel

Dieses Beispiel ist dem vorherigen ähnlich, bietet jedoch ein horizontal _und_ vertikal scrollendes {{htmlelement("main")}}-Element mit mehreren hellgrauen {{htmlelement("section")}}-Elementen, die alle Snap-Ziele sind.

Das HTML für das Beispiel ist dasselbe wie für das vorherige Beispiel — ein einzelnes `<main>`-Element.

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

Das CSS für dieses Beispiel ist ähnlich dem CSS im vorherigen Beispiel. Die bedeutendsten Unterschiede sind wie folgt.

Zunächst betrachten wir die Stilierung des `<main>`-Elements. Wir möchten, dass die `<section>`-Elemente als Raster angeordnet werden, daher verwenden wir das [CSS grid layout](/de/docs/Web/CSS/CSS_grid_layout), um anzugeben, dass wir sie in sieben Spalten anzeigen möchten, wobei ein {{cssxref("grid-template-columns")}}-Wert von `repeat(7, 1fr)` verwendet wird. Wir geben auch den Abstand um die `<section>`-Elemente an, indem wir `padding` und {{cssxref("gap")}} auf dem `<main>`-Element anstelle von `margin` auf den `<section>`-Elementen setzen.

Schließlich, da wir in diesem Beispiel in beide Richtungen scrollen, setzen wir {{cssxref("scroll-snap-type")}} auf `both mandatory`, sodass Snap-Ziele in der Block-Richtung _und_ der Inline-Richtung immer gesnappt werden.

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

Zuerst definieren wir die Klassen, die angewendet werden, um anzuzeigen, dass eine Snap-Zielauswahl getroffen wurde oder aussteht. Die Klassen `select-section` und `deselect-section` werden Keyframe-Animationen anwenden, um eine Auswahl oder Deselektion anzuzeigen. Die `pending`-Klasse wird verwendet, um eine ausstehende Snap-Zielauswahl anzuzeigen (sie wendet eine dunklere graue Hintergrundfarbe auf die Auswahl an, wie im vorherigen Beispiel).

Die {{cssxref("@keyframes")}} animieren von einem grauen Hintergrund und schwarzem (Standard-)Textfarbe zu einem lila Hintergrund und weißer Textfarbe und wieder zurück. Die letztere Animation unterscheidet sich etwas von der ersten — sie verwendet auch die {{cssxref("opacity")}}-Eigenschaft, um einen Ausblend-/Einblendeffekt zu erzeugen.

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

Im JavaScript beginnen wir auf die gleiche Weise wie im vorherigen Beispiel, mit dem Unterschied, dass wir diesmal 49 `<section>`-Elemente erzeugen und jedem eine ID von `s` plus den aktuellen Wert von `n` geben, um sie später leichter nachverfolgen zu können. Mit dem CSS-Raster-Layout, das wir oben angegeben haben, haben wir sieben Spalten mit je sieben `<section>`-Elementen.

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

Als nächstes geben wir ein Objekt namens `prevState` an, mit dem wir das zuvor ausgewählte Snap-Ziel zu jedem Zeitpunkt im Auge behalten können — seine Eigenschaften speichern die IDs der vorherigen Inline- und Block-Snap-Ziele. Dies ist wichtig, um herauszufinden, ob wir das neue Block-Ziel oder das neue Inline-Ziel jedes Mal, wenn ein Ereignishandler ausgelöst wird, stylen müssen.

```js
const prevState = {
  snapTargetInline: "s1",
  snapTargetBlock: "s1",
};
```

Zum Beispiel, nehmen wir an, der Scroll-Container wird so gescrollt, dass sich die ID des neuen [`SnapEvent.snapTargetBlock`](/de/docs/Web/API/SnapEvent/snapTargetBlock)-Elements geändert hat (sie entspricht nicht der in `prevState.snapTargetBlock` gespeicherten ID), aber die ID des neuen [`SnapEvent.snapTargetInline`](/de/docs/Web/API/SnapEvent/snapTargetInline)-Elements bleibt gleich der in `prevState.snapTargetInline` gespeicherten ID. Dies bedeutet, dass wir zu einem neuen Snap-Ziel in der Block-Richtung übergegangen sind, also sollten wir `SnapEvent.snapTargetBlock` stylen, aber wir sind nicht zu einem neuen Snap-Ziel in der Inline-Richtung übergegangen, also sollten wir `SnapEvent.snapTargetInline` nicht stylen.

Dieses Mal erklären wir zuerst die `scrollsnapchange`-Ereignis-Handler-Funktion. In dieser Funktion:

1. Stellen wir sicher, dass ein zuvor ausgewähltes `<section>`-Element-Snap-Ziel (angedeutet durch das Vorhandensein der `select-section`-Klasse) die `deselect-section`-Klasse erhält, damit es die Deselektionsanimation zeigt. Wenn zuvor kein Snap-Ziel ausgewählt wurde, wenden wir die `select-section`-Klasse auf das erste `<section>` im DOM an, sodass es beim ersten Laden der Seite als ausgewählt angezeigt wird.
2. Vergleichen wir die zuvor ausgewählte Snap-Ziel-ID mit der neu ausgewählten Snap-Ziel-ID, sowohl für die Block- als auch für die Inline-Auswahl. Wenn sie unterschiedlich sind, deutet dies darauf hin, dass sich die Auswahl geändert hat, sodass wir die `select-section`-Klasse auf das entsprechende Snap-Ziel anwenden, um dies visuell anzuzeigen.
3. Aktualisieren wir `prevState.snapTargetBlock` und `prevState.snapTargetInline`, um den IDs der gerade ausgewählten Scroll-Snap-Ziele zu entsprechen, damit sie bei der nächsten Auslösung der Funktion die vorherigen Auswahlen sind.

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

Wenn die [`scrollsnapchanging`](/de/docs/Web/API/Element/scrollsnapchanging_event)-Ereignis-Handler-Funktion ausgelöst wird, führen wir folgende Schritte durch:

1. Entfernen die `pending`-Klasse von dem Element, das sie zuvor hatte, sodass nur das aktuelle ausstehende Ziel die `pending`-Klasse erhält und dunkler grau gefärbt wird.
2. Geben wir dem aktuellen ausstehenden Element die `pending`-Klasse, damit es dunkler grau wird, jedoch nur, wenn es nicht bereits die `select-section`-Klasse hat — wir wollen, dass ein zuvor ausgewähltes Ziel die lila Auswahl-Stiländerung beibehält, bis tatsächlich ein neues Ziel ausgewählt wird. Wir fügen auch eine zusätzliche Prüfung in die `if`-Anweisungen ein, um sicherzustellen, dass wir nur das Inline- oder Block-ausstehende Snap-Ziel stylen, je nachdem, welches sich geändert hat. Auch hier vergleichen wir das vorherige Snap-Ziel mit dem aktuellen Snap-Ziel in jedem Fall.

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

Versuchen Sie, horizontal und vertikal im Scroll-Container zu scrollen und beobachten Sie das beschriebene Verhalten:

{{ EmbedLiveSample("Zwei-dimensionales Scroller-Beispiel", "100%", "500") }}

## Scroll Snap-Ereignisse auf `Document` und `Window`

In diesem Artikel haben wir die Scroll Snap-Ereignisse behandelt, die auf der [`Element`](/de/docs/Web/API/Element)-Schnittstelle ausgelöst werden, aber die gleichen Ereignisse werden auch auf den [`Document`](/de/docs/Web/API/Document) und [`Window`](/de/docs/Web/API/Window)-Objekten ausgelöst. Siehe:

- `Document` [`scrollsnapchange`](/de/docs/Web/API/Document/scrollsnapchange_event) und [`scrollsnapchanging`](/de/docs/Web/API/Document/scrollsnapchanging_event)-Ereignisreferenzen.
- `Window` [`scrollsnapchange`](/de/docs/Web/API/Window/scrollsnapchange_event) und [`scrollsnapchanging`](/de/docs/Web/API/Window/scrollsnapchanging_event)-Ereignisreferenzen.

Diese funktionieren in ähnlicher Weise wie die 'Element'-Versionen, außer dass das gesamte HTML-Dokument als Scroll-Snap-Container festgelegt werden muss (d.h. {{cssxref("scroll-snap-type")}} wird auf dem {{htmlelement("html")}}-Element gesetzt).

Wenn wir zum Beispiel ein ähnliches Beispiel wie die oben betrachteten hätten, bei dem wir ein `<main>`-Element mit erheblichem Inhalt haben:

```html
<main>
  <!-- Significant content -->
</main>
```

Das `<main>`-Element könnte zu einem Scroll-Container gemacht werden, indem eine Kombination aus CSS-Eigenschaften verwendet wird, zum Beispiel:

```css
main {
  width: 250px;
  height: 450px;
  overflow: scroll;
}
```

Sie könnten dann Scroll-Snapping-Verhalten auf den scrollbaren Inhalt anwenden, indem Sie die {{cssxref("scroll-snap-type")}}-Eigenschaft auf dem {{htmlelement("html")}}-Element angeben:

```css
html {
  scroll-snap-type: block mandatory;
}
```

Das folgende JavaScript-Snippet würde dazu führen, dass das `scrollsnapchange`-Ereignis am HTML-Dokument ausgelöst wird, wenn ein Kind des `<main>`-Elements ein neu ausgewähltes Snap-Ziel wird. In der Handler-Funktion setzen wir eine `selected`-Klasse auf das Kind, das durch das [`SnapEvent.snapTargetBlock`](/de/docs/Web/API/SnapEvent/snapTargetBlock) referenziert wird, die verwendet werden könnte, um es zu stylen, als wäre es ausgewählt worden (zum Beispiel mit einer Animation), wenn das Ereignis ausgelöst wird.

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

- [`scrollsnapchanging`](/de/docs/Web/API/Element/scrollsnapchanging_event)-Ereignis
- [`scrollsnapchange`](/de/docs/Web/API/Element/scrollsnapchange_event)-Ereignis
- [`SnapEvent`](/de/docs/Web/API/SnapEvent)
- [CSS scroll snap](/de/docs/Web/CSS/CSS_scroll_snap)-Modul
- [Scroll Snap Events](https://developer.chrome.com/blog/scroll-snap-events) auf developer.chrome.com (2024)
