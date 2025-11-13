---
title: Verwenden von Scroll-Snap-Ereignissen
slug: Web/CSS/Guides/Scroll_snap/Using_scroll_snap_events
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Das [CSS Scroll Snap](/de/docs/Web/CSS/Guides/Scroll_snap)-Modul definiert zwei **Scroll-Snap-Ereignisse**: [`scrollsnapchanging`](/de/docs/Web/API/Element/scrollsnapchanging_event) und [`scrollsnapchange`](/de/docs/Web/API/Element/scrollsnapchange_event). Diese ermöglichen das Ausführen von JavaScript als Reaktion darauf, dass der Browser feststellt, dass neue [Scroll-Snap-Ziele](/de/docs/Web/CSS/Guides/Scroll_snap/Basic_concepts) ausstehen bzw. ausgewählt wurden.

Dieser Leitfaden bietet einen Überblick über diese Ereignisse sowie vollständige Beispiele.

## Ereignisübersicht

Scroll-Snap-Ereignisse werden auf einem {{Glossary("Scroll_container", "Scrollelement")}} gesetzt, das potenzielle Scroll-Snap-Ziele enthält:

- Das [`scrollsnapchanging`](/de/docs/Web/API/Element/scrollsnapchanging_event)-Ereignis wird ausgelöst, wenn der Browser feststellt, dass ein neues Scroll-Snap-Ziel ausgewählt wird, wenn die aktuelle Scrollgeste endet. Dies ist das _ausstehende_ Scroll-Snap-Ziel. Dieses Ereignis wird insbesondere während einer Scrollgeste ausgelöst, jedes Mal, wenn der Benutzer über potenzielle neue Snap-Ziele hinweggeht. Während das `scrollsnapchanging`-Ereignis mehrfach bei jeder Scrollgeste ausgelöst werden kann, wird es nicht für alle potenziellen Snap-Ziele einer Scrollgeste ausgelöst, die über mehrere Snap-Ziele hinweggeht. Vielmehr wird es nur für das letzte Ziel ausgelöst, auf dem das Snapping möglicherweise enden wird.

- Das [`scrollsnapchange`](/de/docs/Web/API/Element/scrollsnapchange_event)-Ereignis wird am Ende eines Scrollvorgangs ausgelöst, wenn ein neues Scroll-Snap-Ziel ausgewählt wird. Dieses Ereignis wird insbesondere ausgelöst, wenn eine Scrollgeste abgeschlossen ist, jedoch nur, wenn ein neues Snap-Ziel ausgewählt wird. Dieses Ereignis wird unmittelbar vor dem [`scrollend`](/de/docs/Web/API/Element/scrollend_event)-Ereignis ausgelöst.

Schauen wir uns ein Beispiel an, das die beiden Ereignisse in Aktion zeigt (dies wird später im Artikel näher behandelt):

{{ EmbedLiveSample("One-dimensional scroller example", "100%", "500") }}

Versuchen Sie, die Liste der Felder nach oben und unten zu scrollen:

- Versuchen Sie, den Container langsam nach oben und unten zu scrollen, ohne die Scrollgeste loszulassen. Ziehen Sie beispielsweise Ihren Finger über das Scrollbereich auf einem Touchscreen-Gerät oder Trackpad, oder halten Sie die Maustaste auf der Bildlaufleiste fest und bewegen Sie die Maus. Die Felder, über die Sie sich bewegen, sollten eine dunklere graue Farbe annehmen, während Sie sich darüber bewegen, und dann wieder normal werden, wenn Sie sich wieder davon entfernen. Dies ist das `scrollsnapchanging`-Ereignis in Aktion.
- Versuchen Sie nun, die Scrollgeste loszulassen; das nächstgelegene Feld zu Ihrer Scrollposition sollte zu einer lila Farbe mit weißem Text animieren. Die Animation tritt auf, wenn das `scrollsnapchange`-Ereignis ausgelöst wird.
- Versuchen Sie schließlich, schnell zu scrollen. Beispielsweise können Sie mit dem Finger kräftig über den Bildschirm wischen, um an mehreren potenziellen Zielen vorbeizuscrollen, bevor Sie in der Nähe eines Ziels weiter unten im Scroll-Container zur Ruhe kommen. Sie sollten nur ein `scrollsnapchanging`-Ereignis sehen, das ausgelöst wird, wenn das Scrollen beginnt zu verlangsamen, bevor das `scrollsnapchange`-Ereignis ausgelöst wird und das ausgewählte Snap-Ziel lila wird.

## Das `SnapEvent` Ereignisobjekt

Beide der oben genannten Ereignisse teilen sich das [`SnapEvent`](/de/docs/Web/API/SnapEvent)-Ereignisobjekt. Dieses hat zwei Eigenschaften, die entscheidend dafür sind, wie Scroll-Snap-Ereignisse funktionieren:

- [`snapTargetBlock`](/de/docs/Web/API/SnapEvent/snapTargetBlock) gibt eine Referenz auf das Element zurück, das in der {{Glossary("Flow_relative_values#block_direction", "Block-Richtung")}} geschnappt wurde, als das Ereignis ausgelöst wurde, oder `null`, wenn das Scroll-Snapping nur in der Inline-Richtung erfolgt und somit kein Element in der Block-Richtung geschnappt wird.
- [`snapTargetInline`](/de/docs/Web/API/SnapEvent/snapTargetInline) gibt eine Referenz auf das Element zurück, das in der {{Glossary("Flow_relative_values#inline_direction", "Inline-Richtung")}} geschnappt wurde, als das Ereignis ausgelöst wurde, oder `null`, wenn das Scroll-Snapping nur in der Block-Richtung erfolgt und somit kein Element in der Inline-Richtung geschnappt wird.

Diese Eigenschaften ermöglichen es Ereignis-Handler-Funktionen, das Element zu melden, das geschnappt wurde (im Fall von `scrollsnapchange`), oder das Element, das _geschnappt werden würde_, wenn die Scrollgeste jetzt beendet würde (im Fall von `scrollsnapchanging`) - in ein- und zweidimensionalen Größen. Anschließend können Sie diese Elemente auf jede gewünschte Weise manipulieren, zum Beispiel, indem Sie direkt Stile über ihre [`style`](/de/docs/Web/API/HTMLElement/style)-Eigenschaften setzen, Klassen auf ihnen festlegen, die im Stylesheet definierte Stile haben, usw.

### Beziehung zur CSS-Eigenschaft `scroll-snap-type`

Die auf `SnapEvent` verfügbaren Eigenschaftswerte entsprechen direkt dem Wert der {{cssxref("scroll-snap-type")}} CSS-Eigenschaft, die auf dem Scroll-Container festgelegt ist:

- Wenn die Snap-Achse als `block` (oder ein physischer Achsenwert, der im aktuellen Schreibmodus `block` entspricht) festgelegt ist, gibt nur `snapTargetBlock` eine Elementreferenz zurück.
- Wenn die Snap-Achse als `inline` (oder ein physischer Achsenwert, der im aktuellen Schreibmodus `inline` entspricht) festgelegt ist, gibt nur `snapTargetInline` eine Elementreferenz zurück.
- Wenn die Snap-Achse als `both` festgelegt ist, geben `snapTargetBlock` und `snapTargetInline` eine Elementreferenz zurück.

### Handhabung ein-dimensionaler Scroller

Wenn Sie es mit einem horizontalen Scroller zu tun haben, ändert sich nur die `snapTargetInline`-Eigenschaft des Ereignisobjekts, wenn sich das geschnappte Element ändert, falls der Inhalt einen horizontalen {{cssxref("writing-mode")}} hat, oder die `snapTargetBlock`-Eigenschaft, falls der Inhalt einen vertikalen `writing-mode` hat.

Umgekehrt, wenn Sie es mit einem vertikalen Scroller zu tun haben, ändert sich nur die `snapTargetBlock`-Eigenschaft, wenn sich das geschnappte Element ändert, falls der Inhalt einen horizontalen `writing-mode` hat, oder die `snapTargetInline`-Eigenschaft, falls der Inhalt einen vertikalen `writing-mode` hat.

In beiden Fällen gibt die nicht ändernde Eigenschaft der beiden `null` zurück.

Schauen wir uns ein Codeausschnitt-Beispiel an, um eine typische ein-dimensionale Scroll-Snap-Ereignis-Handler-Funktion zu zeigen:

```js
scrollingElem.addEventListener("scrollsnapchange", (event) => {
  event.snapTargetBlock.className = "select-section";
});
```

In diesem Beispiel wird eine `scrollsnapchange`-Handler-Funktion auf einem Block-Richtungs-Scroll-Container-Element gesetzt, das Snap-Ziele enthält. Wenn das Ereignis ausgelöst wird, setzen wir eine `select-section`-Klasse auf das `snapTargetBlock`-Element, welches verwendet werden könnte, um ein neu ausgewähltes Snap-Ziel so zu stylen, dass es wie ausgewählt aussieht (zum Beispiel mit einer Animation).

### Handhabung zwei-dimensionaler Scroller

Wenn Sie es mit einem horizontalen _und_ vertikalen Scroller zu tun haben, wird der Code komplexer. Das liegt daran, dass sowohl die `snapTargetBlock`- als auch die `snapTargetInline`-Eigenschaftswert eine Elementreferenz zurückgeben (keine gibt `null` zurück), und eine der beiden wird den Wert ändern, je nachdem, in welche Richtung Sie scrollen und welchen `writing-mode` der Inhalt hat:

- Wenn der Scroller horizontal gescrollt wird, ändert sich die `snapTargetInline`-Eigenschaft, wenn sich das geschnappte Element ändert, falls der Inhalt einen horizontalen {{cssxref("writing-mode")}} hat, oder die `snapTargetBlock`-Eigenschaft, falls der Inhalt einen vertikalen `writing-mode` hat.
- Wenn der Scroller vertikal gescrollt wird, ändert sich die `snapTargetBlock`-Eigenschaft, wenn sich das geschnappte Element ändert, falls der Inhalt einen horizontalen `writing-mode` hat, oder die `snapTargetInline`-Eigenschaft, falls der Inhalt einen vertikalen `writing-mode` hat.

Um dies zu handhaben, müssen Sie wahrscheinlich nachverfolgen, ob es das `snapTargetBlock`- oder das `snapTargetInline`-Element war, das sich geändert hat. Schauen wir uns ein Beispiel an:

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

In der Ereignis-Handler-Funktion verwenden wir `if`-Anweisungen, um zu prüfen, ob:

- Die `prevState.snapTargetBlock` ID gleich der ID des aktuellen `event.snapTargetBlock`-Elements ist.
- Die `prevState.snapTargetInline` ID gleich der ID des aktuellen `event.snapTargetInline`-Elements ist.

Wenn die Werte unterschiedlich sind, bedeutet das, dass der Scroller in dieser Richtung (Block oder Inline) gescrollt wurde, und wir protokollieren eine Nachricht in der Konsole, um dies anzuzeigen. In einem echten Beispiel würden Sie wahrscheinlich das geschnappte Element in irgendeiner Weise stylen, um anzuzeigen, dass es geschnappt wurde.

Dann aktualisieren wir die Werte von `prevState.snapTargetBlock` und `prevState.snapTargetInline` für den nächsten Lauf des Ereignis-Handlers.

Für den Rest dieses Artikels werden wir ein paar vollständige Scroll-Snap-Ereignis-Beispiele betrachten, mit denen Sie in den am Ende jedes Abschnitts angezeigten Live-Versionen experimentieren können.

## Ein-dimensionales Scroller-Beispiel

In diesem Beispiel gibt es ein vertikal scrollendes {{htmlelement("main")}}-Element mit mehreren hellgrauen {{htmlelement("section")}}-Elementen, die alle Scroll-Snap-Ziele sind. Wenn ein neues Snap-Ziel aussteht, wird es eine dunklere Grauschattierung annehmen. Wenn ein neues Snap-Ziel ausgewählt wird, wird es sanft zu lila mit weißem Text animieren. Wenn zuvor ein anderes Snap-Ziel ausgewählt wurde, wird es sanft zurück zu grau mit schwarzem Text animieren.

### HTML

Das HTML für das Beispiel ist ein einzelnes `<main>`-Element. Wir werden die `<section>`-Elemente später mit JavaScript dynamisch hinzufügen, um Seitenplatz zu sparen.

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

Im CSS beginnen wir, indem wir dem `<main>`-Element einen fetten schwarzen {{cssxref("border")}} und eine feste {{cssxref("width")}} und {{cssxref("height")}} geben. Wir setzen seinen {{cssxref("overflow")}}-Wert auf `scroll`, damit überlaufender Inhalt verborgen wird und darauf gescrollt werden kann, und setzen {{cssxref("scroll-snap-type")}} auf `block mandatory`, damit Snap-Ziele nur in der Block-Richtung immer geschnappt werden.

```css
main {
  border: 3px solid black;
  width: 250px;
  height: 450px;
  overflow: scroll;
  scroll-snap-type: block mandatory;
}
```

Jedem `<section>`-Element wird ein {{cssxref("margin")}} von `50px` gegeben, um die `<section>`-Elemente voneinander zu trennen und das Scroll-Snap-Verhalten deutlicher zu machen. Wir setzen dann {{cssxref("scroll-snap-align")}} auf `center`, um festzulegen, dass wir in die Mitte jedes Snap-Ziels schnappen wollen. Schließlich wenden wir eine {{cssxref("transition")}} an, um sanft zu und von den Stiländerungen zu animieren, die angewendet werden, wenn eine Snap-Zielauswahl vorgenommen wurde oder aussteht.

```css
section {
  margin: 50px auto;
  scroll-snap-align: center;
  transition: 0.5s ease;
}
```

Die oben genannten Stiländerungen werden über Klassen auf die `<section>`-Elemente angewendet, die über JavaScript zugewiesen werden. Die Klasse `select-section` wird angewendet, um eine Auswahl zu signalisieren - sie legt einen lila Hintergrund und weiße Textfarbe fest. Die `pending`-Klasse wird angewendet, um eine ausstehende Scroll-Snap-Zielfestlegung zu signalisieren - sie färbt den Zielauswahlhintergrund in ein dunkleres Grau.

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

Im JavaScript beginnen wir, indem wir eine Referenz auf das `<main>`-Element erfassen und die Anzahl der zu generierenden `<section>`-Elemente festlegen (in diesem Fall 21) sowie eine Variable zum Zählen. Dann verwenden wir eine [`while`](/de/docs/Web/JavaScript/Reference/Statements/while)-Schleife, um die `<section>`-Elemente zu generieren, wobei wir jedem `<section>` ein untergeordnetes [`h2`](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) geben, das `Section` plus den aktuellen Wert von `n` liest.

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

Nun zur [`scrollsnapchanging`](/de/docs/Web/API/Element/scrollsnapchanging_event)-Ereignis-Handler-Funktion. Wenn ein Kind des `<main>`-Elements (d.h. eines der `<section>`-Elemente) ein ausstehendes Snap-Ziel wird, dann:

1. Prüfen wir, ob ein Element zuvor die `pending`-Klasse zugewiesen bekommen hat und entfernen diese, falls vorhanden. Dies ist damit nur das aktuelle ausstehende Ziel die `pending`-Klasse zugewiesen bekommt und dunkler grau wird. Wir möchten nicht, dass zuvor ausstehende Ziele, die nicht mehr ausstehend sind, die Stilisierung behalten.
2. Geben wir dem Element, auf das von der [`snapTargetBlock`](/de/docs/Web/API/SnapEvent/snapTargetBlock)-Eigenschaft verwiesen wird (welches eines der `<section>`-Elemente sein wird), die `pending`-Klasse, damit es dunkler grau wird.

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
> Wir müssen uns keine Sorgen um die `snapTargetInline`-Ereignisobjekteigenschaft für dieses Demo machen - wir scrollen nur vertikal und das Demo verwendet einen horizontalen Schreibmodus, daher wird sich nur der `snapTargetBlock`-Wert ändern. In diesem Fall wird `snapTargetInline` immer `null` zurückgeben.

Wenn eine Scrollgeste endet und ein `<section>`-Element tatsächlich als Snap-Ziel ausgewählt wird, wird die [`scrollsnapchange`](/de/docs/Web/API/Element/scrollsnapchange_event)-Ereignis-Handler-Funktion ausgelöst. Diese:

1. Prüft, ob bereits ein Snap-Ziel ausgewählt wurde - d.h. wenn zuvor eine `select-section`-Klassen zugewiesen wurde. Wenn ja, entfernen wir diese.
2. Wendet die Klasse `select-section` auf das `<section>`-Element an, auf das über die `snapTargetBlock`-Eigenschaft verwiesen wird, sodass auf das gerade ausgewählte Snap-Ziel die Auswahlanimation angewendet wird.

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

{{ EmbedLiveSample("One-dimensional scroller example", "100%", "500") }}

## Zwei-dimensionales Scroller-Beispiel

Dieses Beispiel ist dem vorherigen ähnlich, mit dem Unterschied, dass es ein horizontal _und_ vertikal scrollendes {{htmlelement("main")}}-Element mit mehreren hellgrauen {{htmlelement("section")}}-Elementen enthält, die alle Snap-Ziele sind.

Das HTML für das Beispiel ist das gleiche wie im vorherigen Beispiel - ein einzelnes `<main>`-Element.

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

Das CSS für dieses Beispiel ist dem CSS im vorherigen Beispiel ähnlich. Die bedeutendsten Unterschiede sind wie folgt.

Zuerst schauen wir uns das `<main>`-Element-Styling an. Wir möchten, dass die `<section>`-Elemente als ein Gitterlayout angezeigt werden, daher verwenden wir das [CSS-Gitterlayout](/de/docs/Web/CSS/Guides/Grid_layout), um anzugeben, dass wir wollen, dass sie in sieben Spalten angezeigt werden, indem wir einen {{cssxref("grid-template-columns")}}-Wert von `repeat(7, 1fr)` verwenden. Wir geben auch den Raum um die `<section>`-Elemente an, indem wir `padding` und {{cssxref("gap")}} auf dem `<main>`-Element statt `margin` auf den `<section>`-Elementen setzen.

Schließlich, da wir in diesem Beispiel in beide Richtungen scrollen, setzen wir {{cssxref("scroll-snap-type")}} zu `both mandatory`, sodass Snap-Ziele in der Block-Richtung _und_ der Inline-Richtung immer geschnappt werden.

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

Als nächstes verwenden wir in diesem Beispiel CSS-Animationen anstelle von Übergängen. Dies führt zu komplexerem Code, ermöglicht aber eine feinere Steuerung über die angewendeten Animationen.

Wir definieren zuerst die Klassen, die angewendet werden, um anzuzeigen, dass eine Snap-Ziel-Auswahl getroffen wurde oder aussteht. Die `select-section` und `deselect-section`-Klassen werden Keyframe-Animationen anwenden, um eine Auswahl oder Deselektion anzuzeigen. Die `pending`-Klasse wird angewendet, um eine ausstehende Snap-Zielfestlegung anzuzeigen (sie färbt den Auswahlhintergrund wie im vorherigen Beispiel dunkler grau).

Die {{cssxref("@keyframes")}}-Animationen animieren von einem grauen Hintergrund und einer schwarzen (standardmäßigen) Textfarbe zu einem lila Hintergrund und weißer Textfarbe und zurück. Letztere Animation unterscheidet sich ein wenig von der ersten - sie verwendet auch {{cssxref("opacity")}}, um einen Ein-/Ausblendungseffekt zu erzeugen.

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

Im JavaScript beginnen wir ähnlich wie im vorherigen Beispiel, jedoch generieren wir diesmal 49 `<section>`-Elemente, und wir geben jedem eine ID von `s` plus den aktuellen Wert von `n`, um sie später leichter verfolgen zu können. Mit dem CSS-Gitterlayout, das wir oben angegeben haben, haben wir sieben Spalten mit sieben `<section>`-Elementen.

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

Als Nächstes spezifizieren wir ein Objekt, das `prevState` genannt wird, was es uns erlaubt, das zuvor ausgewählte Snap-Ziel zu jedem Zeitpunkt nachzuverfolgen - seine Eigenschaften speichern die vorherigen Inline- und Block-Snap-Ziel-IDs. Dies ist wichtig, um herauszufinden, ob wir den neuen Block-Ziel oder den neuen Inline-Ziel jedes Mal stylen müssen, wenn ein Ereignis-Handler ausgelöst wird.

```js
const prevState = {
  snapTargetInline: "s1",
  snapTargetBlock: "s1",
};
```

Zum Beispiel: Angenommen, der Scroll-Container wird so gescrollt, dass die ID des neuen [`SnapEvent.snapTargetBlock`](/de/docs/Web/API/SnapEvent/snapTargetBlock)-Elements geändert wurde (sie ist nicht gleich der ID, die in `prevState.snapTargetBlock` gespeichert ist), aber die ID des neuen [`SnapEvent.snapTargetInline`](/de/docs/Web/API/SnapEvent/snapTargetInline)-Elements bleibt gleich der ID, die in `prevState.snapTargetInline` gespeichert ist. Das bedeutet, dass wir zu einem neuen Snap-Ziel in der Block-Richtung übergegangen sind, daher sollten wir `SnapEvent.snapTargetBlock` stylen, aber wir sind nicht zu einem neuen Snap-Ziel in der Inline-Richtung übergegangen, daher sollten wir `SnapEvent.snapTargetInline` nicht stylen.

Dieses Mal erklären wir zuerst die [`scrollsnapchange`](/de/docs/Web/API/Element/scrollsnapchange_event)-Ereignis-Handler-Funktion. In dieser Funktion:

1. Beginnen wir damit, sicherzustellen, dass ein zuvor ausgewähltes `<section>`-Element-Snap-Ziel (in Gestalt der `select-section`-Klasse) die `deselect-section`-Klasse zugewiesen wird, damit es die Deselektions-Animation anzeigt. Wenn zuvor kein Snap-Ziel ausgewählt wurde, weisen wir die Klasse `select-section` dem ersten `<section>` im DOM zu, damit es als ausgewählt angezeigt wird, wenn die Seite zuerst geladen wird.
2. Vergleichen wir die zuvor ausgewählte Snap-Ziel-ID mit der neu ausgewählten Snap-Ziel-ID für sowohl die Blockauswahl als auch die Inline-Auswahl. Wenn sie unterschiedlich sind, bedeutet das, dass sich die Auswahl geändert hat, sodass wir der passenden Snap-Ziel die `select-section`-Klasse zuweisen, um dies visuell anzuzeigen.
3. Aktualisieren wir `prevState.snapTargetBlock` und `prevState.snapTargetInline`, sodass sie den IDs der Snap-Ziele, die gerade ausgewählt wurden, entsprechen, damit sie bei der nächsten Auslösung des Ereignisses die vorherigen Auswahlen sind.

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

1. Entfernen wir die `pending`-Klasse vom Element, das diese zuvor angewendet bekommen hat, damit nur das aktuelle ausstehende Ziel die `pending`-Klasse zugewiesen bekommt und dunkler grau wird.
2. Geben wir dem aktuellen ausstehenden Element die `pending`-Klasse, damit es dunkler grau wird, aber nur, wenn es nicht bereits die `select-section`-Klasse angewendet bekommen hat - wir möchten, dass ein zuvor ausgewähltes Ziel das lila Auswahlstyling behält, bis ein neues Ziel tatsächlich ausgewählt wird. Dabei fügen wir eine zusätzliche Prüfung zu den `if`-Anweisungen hinzu, um sicherzustellen, dass wir nur das Inline- oder Block-ausstehende Snap-Ziel stylen, je nachdem, welches sich geändert hat. Wieder vergleichen wir das vorherige Snap-Ziel mit dem aktuellen Snap-Ziel in jedem Fall.

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

Versuchen Sie, horizontal und vertikal im Scroll-Container herumzuscrollen und das oben beschriebene Verhalten zu beobachten:

{{ EmbedLiveSample("Two-dimensional scroller example", "100%", "500") }}

## Scroll-Snap-Ereignisse auf `Document` und `Window`

In diesem Artikel haben wir die Scroll-Snap-Ereignisse behandelt, die auf der [`Element`](/de/docs/Web/API/Element)-Schnittstelle ausgelöst werden, aber die gleichen Ereignisse werden auch auf den [`Document`](/de/docs/Web/API/Document)- und [`Window`](/de/docs/Web/API/Window)-Objekten ausgelöst. Siehe:

- Event-Referenzen für [`scrollsnapchange`](/de/docs/Web/API/Document/scrollsnapchange_event) und [`scrollsnapchanging`](/de/docs/Web/API/Document/scrollsnapchanging_event) auf `Document`.
- Event-Referenzen für [`scrollsnapchange`](/de/docs/Web/API/Window/scrollsnapchange_event) und [`scrollsnapchanging`](/de/docs/Web/API/Window/scrollsnapchanging_event) auf `Window`.

Diese funktionieren im Wesentlichen genauso wie die `Element`-Versionen, außer dass das gesamte HTML-Dokument als Scroll-Snap-Container gesetzt werden muss (d.h. {{cssxref("scroll-snap-type")}} wird auf dem {{htmlelement("html")}}-Element gesetzt).

Zum Beispiel, wenn wir ein ähnliches Beispiel nehmen zu denen, die wir oben betrachtet haben, wo wir ein `<main>`-Element mit signifikantem Inhalt haben:

```html
<main>
  <!-- Significant content -->
</main>
```

Das `<main>`-Element könnte in einen Scroll-Container verwandelt werden, indem eine Kombination von CSS-Eigenschaften angewendet wird, zum Beispiel:

```css
main {
  width: 250px;
  height: 450px;
  overflow: scroll;
}
```

Dann könnten Sie das Scroll-Snapping-Verhalten auf dem scrollbaren Inhalt implementieren, indem Sie die {{cssxref("scroll-snap-type")}}-Eigenschaft auf dem {{htmlelement("html")}}-Element festlegen:

```css
html {
  scroll-snap-type: block mandatory;
}
```

Das folgende JavaScript-Snippet würde das `scrollsnapchange`-Ereignis auf dem HTML-Dokument auslösen, wenn ein Kind des `<main>`-Elements ein neu-ausgewähltes Snap-Ziel wird. In der Handler-Funktion setzen wir eine `selected`-Klasse auf das Kind, auf das über [`SnapEvent.snapTargetBlock`](/de/docs/Web/API/SnapEvent/snapTargetBlock) verwiesen wird, die verwendet werden könnte, um es so zu stylen, dass es aussieht, als wäre es ausgewählt worden (zum Beispiel mit einer Animation), wenn das Ereignis ausgelöst wird.

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

- [`scrollsnapchanging`](/de/docs/Web/API/Element/scrollsnapchanging_event)-Ereignis
- [`scrollsnapchange`](/de/docs/Web/API/Element/scrollsnapchange_event)-Ereignis
- [`SnapEvent`](/de/docs/Web/API/SnapEvent)
- [CSS Scroll Snap](/de/docs/Web/CSS/Guides/Scroll_snap)-Modul
- [Scroll Snap Events](https://developer.chrome.com/blog/scroll-snap-events) auf developer.chrome.com (2024)
