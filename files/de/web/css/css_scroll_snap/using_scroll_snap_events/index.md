---
title: Scroll Snap-Ereignisse verwenden
slug: Web/CSS/CSS_scroll_snap/Using_scroll_snap_events
l10n:
  sourceCommit: 06639598f7805417a0331fe403304af9c7ecc2de
---

Das [CSS Scroll Snap](/de/docs/Web/CSS/CSS_scroll_snap) Modul definiert zwei **Scroll Snap-Ereignisse**: [`scrollsnapchanging`](/de/docs/Web/API/Element/scrollsnapchanging_event) und [`scrollsnapchange`](/de/docs/Web/API/Element/scrollsnapchange_event). Diese ermöglichen es, JavaScript auszuführen, wenn der Browser feststellt, dass neue [Scroll Snap-Ziele](/de/docs/Web/CSS/CSS_scroll_snap/Basic_concepts) anstehen bzw. ausgewählt wurden.

Dieser Leitfaden bietet einen Überblick über diese Ereignisse, zusammen mit vollständigen Beispielen.

## Ereignisübersicht

Scroll Snap-Ereignisse werden auf einen {{Glossary("Scroll_container", "Scroll-Container")}} gesetzt, der potenzielle Scroll Snap-Ziele enthält:

- Das [`scrollsnapchanging`](/de/docs/Web/API/Element/scrollsnapchanging_event)-Ereignis wird ausgelöst, wenn der Browser feststellt, dass ein neues Scroll Snap-Ziel ausgewählt wird, sobald die aktuelle Scroll-Geste endet. Dies ist das _anstehende_ Scroll Snap-Ziel. Insbesondere wird dieses Ereignis während einer Scroll-Geste ausgelöst, jedes Mal, wenn der Nutzer potenziell neue Snap-Ziele überfährt. Während das `scrollsnapchanging`-Ereignis mehrmals für jede Scroll-Geste ausgelöst werden kann, wird es nicht für alle potenziellen Snap-Ziele einer Scroll-Geste ausgelöst, die über mehrere Snap-Ziele geht. Es wird nur für das letzte Ziel ausgelöst, auf dem das Snapping potenziell endet.

- Das [`scrollsnapchange`](/de/docs/Web/API/Element/scrollsnapchange_event)-Ereignis wird am Ende eines Scroll-Vorgangs ausgelöst, wenn ein neues Scroll Snap-Ziel ausgewählt wird. Insbesondere wird dieses Ereignis ausgelöst, wenn eine Scroll-Geste abgeschlossen ist, aber nur wenn ein neues Snap-Ziel ausgewählt wird. Dieses Ereignis wird kurz vor dem [`scrollend`](/de/docs/Web/API/Element/scrollend_event)-Ereignis ausgelöst.

Schauen wir uns ein Beispiel an, das die beiden Ereignisse in Aktion zeigt (Sie werden später im Artikel sehen, wie dies aufgebaut wurde):

{{ EmbedLiveSample("Ein-dimensionale Scroller Beispiel", "100%", "500") }}

Versuchen Sie, die Liste der Boxen nach oben und unten zu scrollen:

- Versuchen Sie, den Container langsam nach oben und unten zu scrollen, ohne die Scroll-Geste loszulassen. Zum Beispiel, ziehen Sie Ihren Finger/Ihre Finger über den Scroll-Bereich auf einem Touchscreen-Gerät oder Trackpad, oder halten Sie die Maustaste auf der Scroll-Leiste gedrückt und bewegen Sie die Maus. Die Boxen, die Sie überfahren, sollten sich beim Überfahren dunkelgrau färben und dann wieder normal werden, wenn Sie sich wieder von ihnen entfernen. Dies ist das `scrollsnapchanging`-Ereignis in Aktion.
- Versuchen Sie nun, die Scroll-Geste loszulassen; die nächstgelegene Box zu Ihrer Scroll-Position sollte sich in eine violette Farbe mit weißem Text animieren. Die Animation tritt auf, wenn das `scrollsnapchange`-Ereignis ausgelöst wird.
- Schließlich versuchen Sie, schnell zu scrollen. Zum Beispiel, wischen Sie mit dem Finger kräftig über den Bildschirm, um mehrere potenzielle Ziele zu überfliegen, bevor Sie anfangen, in der Nähe eines Ziels weiter unten im Scroll-Container zur Ruhe zu kommen. Sie sollten nur ein `scrollsnapchanging`-Ereignis sehen, das ausgelöst wird, wenn das Scrollen beginnt, sich zu verlangsamen, bevor das `scrollsnapchange`-Ereignis ausgelöst wird und das ausgewählte Snap-Ziel violett wird.

## Das `SnapEvent`-Ereignisobjekt

Beide oben genannten Ereignisse teilen sich das [`SnapEvent`](/de/docs/Web/API/SnapEvent)-Ereignisobjekt. Dieses hat zwei Eigenschaften, die entscheidend dafür sind, wie Scroll Snap-Ereignisse arbeiten:

- [`snapTargetBlock`](/de/docs/Web/API/SnapEvent/snapTargetBlock) gibt eine Referenz auf das Element zurück, das im {{Glossary("Flow_relative_values#block_direction", "Block-Richtung")}} zum Zeitpunkt des Ereignisses eingerastet wird oder `null`, wenn das Scroll Snapping nur in der Inline-Richtung erfolgt, sodass kein Element im Block-Richtung einrastet.
- [`snapTargetInline`](/de/docs/Web/API/SnapEvent/snapTargetInline) gibt eine Referenz auf das Element zurück, das in der {{Glossary("Flow_relative_values#inline_direction", "Inline-Richtung")}} zum Zeitpunkt des Ereignisses eingerastet wird oder `null`, wenn das Scroll Snapping nur in der Block-Richtung erfolgt, sodass kein Element in der Inline-Richtung einrastet.

Diese Eigenschaften ermöglichen es Ereignis-Handler-Funktionen, das Element zu melden, das eingerastet wurde (im Fall von `scrollsnapchange`) oder das Element, das _eingerastet wäre_, wenn die Scroll-Geste jetzt zu Ende wäre (im Fall von `scrollsnapchanging`) — in einer oder zwei Dimensionen. Sie können diese Elemente dann auf jede gewünschte Weise manipulieren, zum Beispiel indem Sie direkt Stile über ihre [`style`](/de/docs/Web/API/HTMLElement/style) Eigenschaften setzen, Klassen auf sie setzen, die Stile in einem Stylesheet definiert haben, usw.

### Beziehung zu CSS `scroll-snap-type`

Die auf `SnapEvent` verfügbaren Eigenschaftswerte entsprechen direkt dem Wert der {{cssxref("scroll-snap-type")}} CSS-Eigenschaft, die auf den Scroll-Container angewendet wird:

- Ist die Snap-Achse als `block` (oder ein physikalischer Achswert, der im aktuellen Schreibmodus `block` entspricht) spezifiziert, liefert nur `snapTargetBlock` eine Elementreferenz zurück.
- Ist die Snap-Achse als `inline` (oder ein physikalischer Achswert, der im aktuellen Schreibmodus `inline` entspricht) spezifiziert, liefert nur `snapTargetInline` eine Elementreferenz zurück.
- Ist die Snap-Achse als `both` spezifiziert, liefern sowohl `snapTargetBlock` als auch `snapTargetInline` eine Elementreferenz zurück.

### Umgang mit eindimensionalen Scroller

Wenn Sie es mit einem horizontalen Scroller zu tun haben, ändert sich nur die `snapTargetInline`-Eigenschaft des Ereignisobjekts, wenn sich das eingerastete Element ändert, wenn der Inhalt einen horizontalen {{cssxref("writing-mode")}} hat, oder die `snapTargetBlock`-Eigenschaft, wenn der Inhalt einen vertikalen `writing-mode` hat.

Andererseits, wenn es sich um einen vertikalen Scroller handelt, ändert sich nur die `snapTargetBlock`-Eigenschaft, wenn sich das eingerastete Element ändert, wenn der Inhalt einen horizontalen `writing-mode` hat, oder die `snapTargetInline`-Eigenschaft, wenn der Inhalt einen vertikalen `writing-mode` hat.

In beiden Fällen gibt die sich nicht ändernde Eigenschaft der beiden `null` zurück.

Schauen wir uns ein Beispiel-Snippet an, das eine typische eindimensionale Scroll-Snap-Ereignis-Handler-Funktion zeigt:

```js
scrollingElem.addEventListener("scrollsnapchange", (event) => {
  event.snapTargetBlock.className = "select-section";
});
```

In diesem Snippet wird eine `scrollsnapchange`-Handler-Funktion auf ein Block-Richtung-Scroll-Container-Element gesetzt, in dem Snap-Ziele vorhanden sind. Wenn das Ereignis ausgelöst wird, setzen wir eine `select-section`-Klasse auf das `snapTargetBlock`-Element, die verwendet werden könnte, um ein neu ausgewähltes Snap-Ziel zu gestalten, sodass es aussieht, als wäre es ausgewählt worden (zum Beispiel mit einer Animation).

### Umgang mit zweidimensionalen Scroller

Wenn Sie es mit einem horizontalen _und_ vertikalen Scroller zu tun haben, wird der Code komplexer. Dies liegt daran, dass die `snapTargetBlock`-Eigenschaft _und_ die `snapTargetInline`-Eigenschaftswerte beide eine Elementreferenz zurückgeben (keiner von beiden gibt `null` zurück), und einer oder der andere wird je nach Scroll-Richtung und dem `writing-mode` des Inhalts den Wert ändern:

- Wird der Scroller horizontal gescrollt, ändert sich die `snapTargetInline`-Eigenschaft, wenn sich das eingerastete Element ändert, wenn der Inhalt einen horizontalen {{cssxref("writing-mode")}} hat, oder die `snapTargetBlock`-Eigenschaft, wenn der Inhalt einen vertikalen `writing-mode` hat.
- Wird der Scroller vertikal gescrollt, ändert sich die `snapTargetBlock`-Eigenschaft, wenn sich das eingerastete Element ändert, wenn der Inhalt einen horizontalen `writing-mode` hat, oder die `snapTargetInline`-Eigenschaft, wenn der Inhalt einen vertikalen `writing-mode` hat.

Um damit umzugehen, müssen Sie wahrscheinlich im Auge behalten, ob es das `snapTargetBlock`- oder das `snapTargetInline`-Element war, das sich geändert hat. Schauen wir uns ein Beispiel an:

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

In diesem Snippet definieren wir zuerst ein Objekt (`prevState`), das die ID des vorherigen `snapTargetBlock` und `snapTargetInline` Elements speichert.

In der Ereignis-Handler-Funktion verwenden wir `if`-Anweisungen, um zu testen, ob:

- Die `prevState.snapTargetBlock`-ID gleich der ID des aktuellen `event.snapTargetBlock` Elements ist.
- Die `prevState.snapTargetInline`-ID gleich der ID des aktuellen `event.snapTargetInline` Elements ist.

Sind die Werte unterschiedlich, bedeutet dies, dass der Scroller in dieser Richtung (Block oder Inline) gescrollt wurde und wir protokollieren eine Nachricht an die Konsole, um dies anzuzeigen. In einem realen Beispiel würden Sie wahrscheinlich das eingerastete Element in irgendeiner Weise gestalten, um zu zeigen, dass es eingerastet ist.

Wir aktualisieren dann die Werte von `prevState.snapTargetBlock` und `prevState.snapTargetInline`, so dass sie beim nächsten Ausführen der Ereignis-Handler bereit sind.

Im weiteren Verlauf dieses Artikels werfen wir einen Blick auf ein paar vollständige Scroll Snap-Ereignis-Beispiele, mit denen Sie in den am Ende jedes Abschnitts live gerenderten Versionen experimentieren können.

## Ein-dimensionale Scroller Beispiel

Dieses Beispiel zeigt ein vertikal scrollendes {{htmlelement("main")}} Element, das mehrere hellgraue {{htmlelement("section")}} Elemente enthält, die alle Scroll Snap-Ziele sind. Wenn ein neues Snap-Ziel ansteht, wird es eine dunklere Grauschattierung annehmen. Wenn ein neues Snap-Ziel ausgewählt wird, wird es sich sanft in Violett mit weißem Text animieren. Falls zuvor ein anderes Snap-Ziel ausgewählt war, wird es sich sanft zurück in Grau mit schwarzem Text animieren.

### HTML

Das HTML für das Beispiel besteht aus einem einzelnen `<main>` Element. Wir werden die `<section>` Elemente später mit JavaScript dynamisch hinzufügen, um Platz auf der Seite zu sparen.

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

Im CSS beginnen wir mit dem Hinzufügen eines kräftigen schwarzen {{cssxref("border")}} und einer festen {{cssxref("width")}} und {{cssxref("height")}} für das `<main>` Element. Wir setzen seinen {{cssxref("overflow")}} Wert auf `scroll`, damit überlaufender Inhalt verborgen wird und gescrollt werden kann, und setzen {{cssxref("scroll-snap-type")}} auf `block mandatory`, sodass nur Snap-Ziele in der Block-Richtung immer eingerastet werden.

```css
main {
  border: 3px solid black;
  width: 250px;
  height: 450px;
  overflow: scroll;
  scroll-snap-type: block mandatory;
}
```

Jedes `<section>`-Element erhält einen {{cssxref("margin")}} von `50px`, um die `<section>`-Elemente zu trennen und das Scroll Snap-Verhalten deutlicher zu machen. Wir setzen dann {{cssxref("scroll-snap-align")}} auf `center`, um festzulegen, dass wir auf die Mitte jedes Snap-Ziels einrasten möchten. Schließlich wenden wir eine {{cssxref("transition")}} an, um sanft zu den und von den Stiländerungen zu animieren, die angewendet werden, wenn eine Snap-Zielauswahl getroffen wurde oder ansteht.

```css
section {
  margin: 50px auto;
  scroll-snap-align: center;
  transition: 0.5s ease;
}
```

Die oben genannten Stiländerungen werden durch Klassen auf die `<section>`-Elemente angewendet, dies wird durch JavaScript erreicht. Die `select-section`-Klasse wird angewendet, um eine Auswahl zu signalisieren — dies legt einen violetten Hintergrund und eine weiße Textfarbe fest. Die `pending`-Klasse wird angewendet, um eine anstehende Snap-Zielauswahl anzuzeigen — dies färbt den Hintergrund der Zielauswahl dunkler grau.

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

Im JavaScript beginnen wir, indem wir eine Referenz auf das `<main>`-Element erhalten und die Anzahl der `<section>`-Elemente definieren, die generiert werden sollen (in diesem Fall 21) und eine Variable, um von dort aus zu zählen. Dann verwenden wir eine [`while`](/de/docs/Web/JavaScript/Reference/Statements/while)-Schleife, um die `<section>`-Elemente zu erzeugen, wobei jedem ein Kind[`h2`](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) mit Text, der `Section` und den aktuellen Wert von `n` umfasst, zugewiesen wird.

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

Kommen wir nun zur [`scrollsnapchanging`](/de/docs/Web/API/Element/scrollsnapchanging_event)-Ereignis-Handler-Funktion. Wenn ein Kind des `<main>` Elements (d.h. eines der `<section>` Elemente) zum anstehenden Snap-Ziel wird, dann:

1. Prüfen wir, ob ein Element zuvor die `pending`-Klasse hatte, und wenn ja, entfernen wir sie. Dies dient dazu, dass nur das aktuelle anstehende Ziel die `pending`-Klasse erhält und dunkler grau wird. Früher anstehende Ziele, die nicht mehr anstehen, sollen nicht gestylt bleiben.
2. Geben wir das Element, das von der [`snapTargetBlock`](/de/docs/Web/API/SnapEvent/snapTargetBlock)-Eigenschaft referenziert wird (was eines der `<section>`-Elemente sein wird), die `pending`-Klasse, sodass es dunkler grau wird.

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
> Wir müssen uns in dieser Demo keine Gedanken über die `snapTargetInline`-Eigenschaft des Ereignisobjekts machen — wir scrollen nur vertikal und die Demo verwendet einen horizontalen Schreibmodus, daher wird sich nur der `snapTargetBlock`-Wert ändern. In diesem Fall wird `snapTargetInline` immer `null` zurückgeben.

Wenn eine Scroll-Geste endet und ein `<section>`-Element tatsächlich als Snap-Ziel ausgewählt wird, wird die [`scrollsnapchange`](/de/docs/Web/API/Element/scrollsnapchange_event)-Ereignis-Handler-Funktion ausgelöst. Diese Funktion:

1. Überprüft, ob ein Snap-Ziel zuvor ausgewählt wurde — d.h. ob eine `select-section`-Klasse zuvor auf ein Element angewendet wurde. Wenn ja, entfernen wir sie.
2. Trägt die `select-section`-Klasse auf das `<section>`-Element auf, das in der `snapTargetBlock`-Eigenschaft referenziert wird, sodass das eben ausgewählte Snap-Ziel die Auswahlanimation hat.

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

{{ EmbedLiveSample("Ein-dimensionale Scroller Beispiel", "100%", "500") }}

## Zwei-dimensionale Scroller Beispiel

Dieses Beispiel ähnelt dem vorherigen, außer dass es ein horizontal _und_ vertikal scrollendes {{htmlelement("main")}} Element enthält, das mehrere hellgraue {{htmlelement("section")}} Elemente enthält, die alle Snap-Ziele sind.

Das HTML für dieses Beispiel ist dasselbe wie für das vorherige Beispiel — ein einzelnes `<main>` Element.

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

Das CSS für dieses Beispiel ist ähnlich wie das CSS im vorherigen Beispiel. Die auffälligsten Unterschiede sind wie folgt.

Zuerst schauen wir uns das Styling des `<main>`-Elements an. Wir möchten, dass die `<section>`-Elemente als ein Raster angeordnet werden, also verwenden wir das [CSS-Rasterlayout](/de/docs/Web/CSS/CSS_grid_layout), um anzugeben, dass wir sie in sieben Spalten anzeigen möchten, indem wir einen {{cssxref("grid-template-columns")}}-Wert von `repeat(7, 1fr)` verwenden. Wir spezifizieren auch den Raum um die `<section>`-Elemente, indem wir `padding` und {{cssxref("gap")}} auf dem `<main>`-Element setzen, anstatt `margin` auf den `<section>`-Elementen.

Schließlich, da wir in diesem Beispiel in beide Richtungen scrollen, setzen wir {{cssxref("scroll-snap-type")}} auf `both mandatory`, sodass Snap-Ziele sowohl in der Block-Richtung _als auch_ in der Inline-Richtung immer eingerastet werden.

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

Als Nächstes werden wir in diesem Beispiel CSS-Animationen statt Übergängen verwenden. Dies führt zu komplexerem Code, ermöglicht aber eine feinere Kontrolle über die angewendeten Animationen.

Wir definieren zuerst die Klassen, die angewendet werden, um anzuzeigen, dass eine Snap-Zielauswahl getroffen wurde oder bevorsteht. Die `select-section`- und `deselect-section`-Klassen wenden Keyframe-Animationen an, um eine Selektion oder Deselektion zu signalisieren. Die `pending`-Klasse wird angewendet, um eine anstehende Snap-Zielauswahl anzudeuten (sie würde den Hintergrund der Auswahl dunkler färben, wie im vorherigen Beispiel).

Die {{cssxref("@keyframes")}} animieren von einem grauen Hintergrund und schwarzer (Standard-)Textfarbe zu einem lila Hintergrund und weißer Textfarbe und wieder zurück. Letztere Animation ist etwas anders als die erste — sie verwendet auch {{cssxref("opacity")}}, um einen Ausblend-/Einblendeffekt zu erzeugen.

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

Im JavaScript beginnen wir auf dieselbe Weise wie im vorherigen Beispiel, außer dass wir diesmal 49 `<section>`-Elemente erzeugen und jedem eine ID von `s` plus dem aktuellen Wert von `n` geben, um sie später beim Nachverfolgen zu unterstützen. Mit dem oben spezifizierten CSS-Rasterlayout haben wir sieben Spalten mit jeweils sieben `<section>`-Elementen.

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

Als Nächstes spezifizieren wir ein Objekt namens `prevState`, welches uns hilft, das zuvor ausgewählte Snap-Ziel jederzeit im Auge zu behalten — seine Eigenschaften speichern die vorherigen Inline- und Block-Snap-Ziel-IDs. Dies ist wichtig, um festzustellen, ob wir das neue Block-Ziel oder das neue Inline-Ziel bei jedem Auslösen eines Ereignis-Handlers stylen müssen.

```js
const prevState = {
  snapTargetInline: "s1",
  snapTargetBlock: "s1",
};
```

Zum Beispiel, wenn der Scroll-Container so gescrollt wird, dass sich die ID des neuen [`SnapEvent.snapTargetBlock`](/de/docs/Web/API/SnapEvent/snapTargetBlock)-Elements geändert hat (es stimmt nicht mit der in `prevState.snapTargetBlock` gespeicherten ID überein), aber die ID des neuen [`SnapEvent.snapTargetInline`](/de/docs/Web/API/SnapEvent/snapTargetInline)-Elements immer noch dieselbe ist wie die in `prevState.snapTargetInline` gespeicherte ID. Dies bedeutet, dass wir zu einem neuen Snap-Ziel in der Block-Richtung gewechselt sind, sodass wir `SnapEvent.snapTargetBlock` stylen sollten, aber nicht zu einem neuen Snap-Ziel in der Inline-Richtung gewechselt sind, sodass wir `SnapEvent.snapTargetInline` nicht stylen sollten.

Diesmal werden wir zuerst die [`scrollsnapchange`](/de/docs/Web/API/Element/scrollsnapchange_event)-Ereignis-Handler-Funktion erläutern. Diese Funktion:

1. Beginnt damit sicherzustellen, dass das zuvor ausgewählte `<section>`-Element-Snap-Ziel (wie durch das Vorhandensein der `select-section`-Klasse signalisiert) die `deselect-section`-Klasse hat, um die Deselektion zu zeigen. Wenn kein Snap-Ziel zuvor ausgewählt wurde, wenden wir die `select-section`-Klasse auf das erste `<section>` im DOM an, sodass es bei Seitenladung auf dem Bildschirm erscheint.
2. Vergleicht die zuvor ausgewählte Snap-Ziel-ID mit der neu ausgewählten Snap-Ziel-ID sowohl für die Block- als auch Inline-Auswahlen. Sind sie unterschiedlich, zeigt dies, dass die Auswahl sich geändert hat, und wir tragen die `select-section`-Klasse auf das entsprechende Snap-Ziel auf, um dies visuell anzuzeigen.
3. Aktualisiert `prevState.snapTargetBlock` und `prevState.snapTargetInline`, sodass sie gleich den IDs der soeben ausgewählten Scroll-Snap-Ziele sind, sodass sie beim nächsten Auslösen des Ereignisses die vorherigen Auswahlen sind.

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

Wenn die [`scrollsnapchanging`](/de/docs/Web/API/Element/scrollsnapchanging_event)-Ereignis-Handler-Funktion ausgelöst wird:

1. Entfernen wir die `pending`-Klasse von dem Element, das sie zuvor hatte, damit nur das aktuelle anstehende Ziel die `pending`-Klasse bekommt und dunkler grau wird.
2. Geben wir dem aktuellen anstehenden Element die `pending`-Klasse, sodass es dunkler grau wird, aber nur, wenn es nicht bereits die `select-section`-Klasse hat — wir wollen ein zuvor ausgewähltes Ziel die violette Auswahl-Stilgebung beibehalten lassen, bis ein neues Ziel tatsächlich ausgewählt wird. Wir fügen ebenfalls eine zusätzliche Überprüfung in den `if`-Anweisungen hinzu, um sicherzustellen, dass wir nur das Inline- oder Block-aufschnappende Ziel stylen, je nachdem, welches geändert wurde. Wieder vergleichen wir das vorherige Snap-Ziel mit dem aktuellen Snap-Ziel in jedem Fall.

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

Versuchen Sie horizontal und vertikal herum den Scroll-Container zu scrollen und beobachten Sie das oben beschriebene Verhalten:

{{ EmbedLiveSample("Zwei-dimensionale Scroller Beispiel", "100%", "500") }}

## Scroll Snap-Ereignisse auf `Document` und `Window`

In diesem Artikel haben wir die Scroll Snap-Ereignisse behandelt, die auf dem [`Element`](/de/docs/Web/API/Element)-Interface ausgelöst werden, aber die gleichen Ereignisse werden auch auf den [`Document`](/de/docs/Web/API/Document) und [`Window`](/de/docs/Web/API/Window)-Objekten ausgelöst. Siehe:

- `Document` [`scrollsnapchange`](/de/docs/Web/API/Document/scrollsnapchange_event) und [`scrollsnapchanging`](/de/docs/Web/API/Document/scrollsnapchanging_event) Ereignisreferenzen.
- `Window` [`scrollsnapchange`](/de/docs/Web/API/Window/scrollsnapchange_event) und [`scrollsnapchanging`](/de/docs/Web/API/Window/scrollsnapchanging_event) Ereignisreferenzen.

Diese funktionieren auf ähnliche Weise wie die `Element`-Versionen, außer dass das gesamte HTML-Dokument als Scroll Snap-Container gesetzt werden muss (d.h. {{cssxref("scroll-snap-type")}} wird auf das {{htmlelement("html")}}-Element gesetzt).

Zum Beispiel, wenn wir ein ähnliches Beispiel wie die oben betrachteten nähmen, bei dem wir ein `<main>`-Element haben, das bedeutenden Inhalt enthält:

```html
<main>
  <!-- Significant content -->
</main>
```

Das `<main>`-Element könnte in einen Scroll-Container umgewandelt werden, indem eine Kombination von CSS-Eigenschaften angewendet wird, zum Beispiel:

```css
main {
  width: 250px;
  height: 450px;
  overflow: scroll;
}
```

Sie könnten dann das Scroll Snappen des scrollenden Inhalts implementieren, indem Sie die {{cssxref("scroll-snap-type")}}-Eigenschaft auf dem {{htmlelement("html")}}-Element spezifizieren:

```css
html {
  scroll-snap-type: block mandatory;
}
```

Der folgende JavaScript-Snippet würde das `scrollsnapchange`-Ereignis auf das HTML-Dokument auslösen, wenn ein Kind des `<main>`-Elements zu einem neu ausgewählten Snap-Ziel wird. In der Handler-Funktion setzen wir eine `selected`-Klasse auf das Kind, das von der [`SnapEvent.snapTargetBlock`](/de/docs/Web/API/SnapEvent/snapTargetBlock) referenziert wird, die verwendet werden könnte, es zu stylen, sodass es aussieht, als wäre es ausgewählt worden (zum Beispiel durch eine Animation) wenn das Ereignis feuert.

```js
document.addEventListener("scrollsnapchange", (event) => {
  event.snapTargetBlock.classList.add("selected");
});
```

Wir könnten das Ereignis stattdessen auf `Window` feuern, um die gleiche Funktionalität zu erreichen:

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
