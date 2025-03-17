---
title: Verwenden von Scroll-Snap-Ereignissen
slug: Web/CSS/CSS_scroll_snap/Using_scroll_snap_events
l10n:
  sourceCommit: 0f7f70e7fd76f8e32cd02261bc10630d753fbf0b
---

{{CSSRef}}

Das [CSS scroll snap](/de/docs/Web/CSS/CSS_scroll_snap)-Modul definiert zwei **scroll snap events**: [`scrollsnapchanging`](/de/docs/Web/API/Element/scrollsnapchanging_event) und [`scrollsnapchange`](/de/docs/Web/API/Element/scrollsnapchange_event). Diese ermöglichen es, JavaScript als Antwort darauf auszuführen, dass der Browser feststellt, dass neue [scroll snap targets](/de/docs/Web/CSS/CSS_scroll_snap/Basic_concepts) anstehen bzw. ausgewählt wurden.

Dieser Leitfaden bietet einen Überblick über diese Ereignisse, zusammen mit vollständigen Beispielen.

## Überblick über die Ereignisse

Scroll snap events sind auf einem {{Glossary("Scroll_container", "scrolling container")}} eingestellt, der potenzielle Scroll-Snap-Ziele enthält:

- Das [`scrollsnapchanging`](/de/docs/Web/API/Element/scrollsnapchanging_event)-Ereignis wird ausgelöst, wenn der Browser feststellt, dass ein neues Scroll-Snap-Ziel ausgewählt wird, wenn die aktuelle Scroll-Geste endet. Dies ist das _anstehende_ Scroll-Snap-Ziel. Dieses Ereignis wird während einer Scroll-Geste jedes Mal ausgelöst, wenn der Benutzer über potenzielle neue Snap-Ziele fährt. Obwohl das `scrollsnapchanging`-Ereignis möglicherweise mehrfach für jede Scroll-Geste ausgelöst wird, wird es nicht für alle potenziellen Snap-Ziele für eine Scroll-Geste ausgelöst, die über mehrere Snap-Ziele hinweggeht. Es wird nur für das letzte Ziel ausgelöst, bei dem das Snapping potenziell zum Stillstand kommen wird.

- Das [`scrollsnapchange`](/de/docs/Web/API/Element/scrollsnapchange_event)-Ereignis wird am Ende eines Scroll-Vorgangs ausgelöst, wenn ein neues Scroll-Snap-Ziel ausgewählt wird. Dieses Ereignis wird ausgelöst, wenn eine Scroll-Geste abgeschlossen wird, aber nur, wenn ein neues Snap-Ziel ausgewählt wird. Dieses Ereignis wird unmittelbar vor dem [`scrollend`](/de/docs/Web/API/Element/scrollend_event)-Ereignis ausgelöst.

Sehen wir uns ein Beispiel an, das die beiden Ereignisse in Aktion zeigt (wie dies erstellt wird, erfahren Sie später im Artikel):

{{ EmbedLiveSample("One-dimensional scroller example", "100%", "500") }}

Versuchen Sie, die Liste der Boxen nach oben und unten zu scrollen:

- Versuchen Sie, den Container langsam nach oben und unten zu scrollen, ohne die Scroll-Geste loszulassen. Beispielsweise ziehen Sie Ihren Finger/Ihre Finger über den Bildlaufbereich auf einem Touchscreen-Gerät oder Trackpad oder halten Sie die Maustaste auf der Bildlaufleiste gedrückt und bewegen Sie die Maus. Die Boxen, über die Sie fahren, sollten eine dunklere graue Farbe annehmen, während Sie sie überfahren, und dann zu ihrer normalen Farbe zurückkehren, wenn Sie sich wieder von ihnen entfernen. Dies ist das `scrollsnapchanging`-Ereignis in Aktion.
- Nun lassen Sie die Scroll-Geste los; die Box, die Ihrer Scroll-Position am nächsten liegt, sollte sich in eine violette Farbe mit weißem Text animieren. Die Animation tritt auf, wenn das `scrollsnapchange`-Ereignis ausgelöst wird.
- Schließlich versuchen Sie, schnell zu scrollen. Beispielsweise schnippen Sie kräftig mit dem Finger über den Bildschirm, um an mehreren potenziellen Zielen vorbeizuscrollen, bevor Sie beginnen, sich in der Nähe eines Ziels weiter unten im Scroll-Container zur Ruhe zu setzen. Sie sollten nur ein `scrollsnapchanging`-Ereignis sehen, das ausgelöst wird, wenn das Scrolling zu verlangsamen beginnt, bevor das `scrollsnapchange`-Ereignis ausgelöst wird und das ausgewählte Snap-Ziel lila wird.

## Das `SnapEvent`-Ereignisobjekt

Beide der oben genannten Ereignisse teilen das [`SnapEvent`](/de/docs/Web/API/SnapEvent)-Ereignisobjekt. Dieses hat zwei Eigenschaften, die entscheidend für die Funktionsweise von Scroll-Snap-Ereignissen sind:

- [`snapTargetBlock`](/de/docs/Web/API/SnapEvent/snapTargetBlock) gibt eine Referenz auf das Element zurück, zu dem im {{Glossary("Flow_relative_values#block_direction", "Block-Richtung")}} gesnappt wurde, als das Ereignis ausgelöst wurde, oder `null`, wenn Scroll-Snapping nur in der Inline-Richtung stattfindet, sodass zu keinem Element in der Block-Richtung gesnappt wird.
- [`snapTargetInline`](/de/docs/Web/API/SnapEvent/snapTargetInline) gibt eine Referenz auf das Element zurück, zu dem im {{Glossary("Flow_relative_values#inline_direction", "Inline-Richtung")}} gesnappt wurde, als das Ereignis ausgelöst wurde, oder `null`, wenn das Scroll-Snapping nur in der Block-Richtung stattfindet, sodass zu keinem Element in der Inline-Richtung gesnappt wird.

Diese Eigenschaften ermöglichen es den Ereignis-Handler-Funktionen, das Element zu melden, zu dem gesnappt wurde (im Falle von `scrollsnapchange`) oder das Element, zu dem _gesnappt würde_, wenn die Scroll-Geste jetzt beendet wäre (im Falle von `scrollsnapchanging`) — und zwar in einer und zwei Dimensionen. Sie können diese Elemente dann auf jede beliebige Weise manipulieren, zum Beispiel indem Sie direkt Stile auf ihnen über ihre [`style`](/de/docs/Web/API/HTMLElement/style)-Eigenschaften festlegen, Klassen auf ihnen festlegen, die in einem Stylesheet für sie definierte Stile haben, etc.

### Beziehung zum CSS `scroll-snap-type`

Die verfügbaren Eigenschaftswerte von `SnapEvent` entsprechen direkt dem Wert der {{cssxref("scroll-snap-type")}}-CSS-Eigenschaft, die auf den Scroll-Container eingestellt ist:

- Wenn die Snap-Achse als `block` (oder ein physischer Achsenwert, der in der aktuellen Schreibrichtung als `block` gleichgesetzt wird) angegeben ist, gibt nur `snapTargetBlock` eine Elementreferenz zurück.
- Wenn die Snap-Achse als `inline` (oder ein physischer Achsenwert, der in der aktuellen Schreibrichtung als `inline` gleichgesetzt wird) angegeben ist, gibt nur `snapTargetInline` eine Elementreferenz zurück.
- Wenn die Snap-Achse als `both` angegeben ist, geben `snapTargetBlock` und `snapTargetInline` eine Elementreferenz zurück.

### Umgang mit eindimensionalen Scroller

Wenn Sie mit einem horizontalen Scroller zu tun haben, ändert sich nur die `snapTargetInline`-Eigenschaft des Ereignisobjekts, wenn sich das gesnapte Element ändert, sofern der Inhalt eine horizontale {{cssxref("writing-mode")}}-Richtung hat, oder die `snapTargetBlock`-Eigenschaft, sofern der Inhalt eine vertikale `writing-mode`-Richtung hat.

Umgekehrt, wenn Sie mit einem vertikalen Scroller zu tun haben, ändert sich nur die `snapTargetBlock`-Eigenschaft, wenn sich das gesnapte Element ändert, sofern der Inhalt eine horizontale `writing-mode`-Richtung hat, oder die `snapTargetInline`-Eigenschaft, sofern der Inhalt eine vertikale `writing-mode`-Richtung hat.

In beiden Fällen gibt die nicht geänderte Eigenschaft der beiden `null` zurück.

Lassen Sie uns einen Beispielschnipsel ansehen, um eine typische eindimensionale Scroll-Snap-Ereignis-Handler-Funktion zu zeigen:

```js
scrollingElem.addEventListener("scrollsnapchange", (event) => {
  event.snapTargetBlock.className = "select-section";
});
```

In diesem Schnipsel wird eine `scrollsnapchange`-Handler-Funktion auf ein in Block-Richtung scrollendes Container-Element gesetzt, das Snap-Ziele enthält. Wenn das Ereignis ausgelöst wird, setzen wir eine `select-section`-Klasse auf das `snapTargetBlock`-Element, die verwendet werden könnte, um ein neu ausgewähltes Snap-Ziel so zu stylen, dass es als ausgewählt erscheint (zum Beispiel mit einer Animation).

### Umgang mit zweidimensionalen Scroller

Wenn Sie mit einem horizontalen _und_ vertikalen Scroller zu tun haben, wird der Code komplexer. Dies liegt daran, dass die `snapTargetBlock`-Eigenschaft _und_ die `snapTargetInline`-Eigenschaft Werte eines Elementreferenz zurückgeben (keine der beiden gibt `null` zurück), und eine oder die andere wird sich ändern, abhängig davon, in welche Richtung Sie scrollen und von der `writing-mode` des Inhalts:

- Wenn der Scroller horizontal gescrollt wird, ändert sich die `snapTargetInline`-Eigenschaft, wenn sich das gesnapte Element ändert, sofern der Inhalt eine horizontale {{cssxref("writing-mode")}}-Richtung hat, oder die `snapTargetBlock`-Eigenschaft, wenn der Inhalt eine vertikale `writing-mode`-Richtung hat.
- Wenn der Scroller vertikal gescrollt wird, ändert sich die `snapTargetBlock`-Eigenschaft, wenn sich das gesnapte Element ändert, sofern der Inhalt eine horizontale `writing-mode`-Richtung hat, oder die `snapTargetInline`-Eigenschaft, wenn der Inhalt eine vertikale `writing-mode`-Richtung hat.

Um dies zu handhaben, müssen Sie wahrscheinlich verfolgen, ob es das `snapTargetBlock` oder das `snapTargetInline`-Element war, das sich geändert hat. Betrachten wir ein Beispiel:

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

In diesem Schnipsel definieren wir zunächst ein Objekt (`prevState`), das die ID des vorherigen `snapTargetBlock`- und `snapTargetInline`-Elements speichert.

In der Ereignishandler-Funktion verwenden wir `if`-Anweisungen, um zu prüfen, ob:

- Die `prevState.snapTargetBlock`-ID gleich der ID des aktuellen `event.snapTargetBlock`-Elements ist.
- Die `prevState.snapTargetInline`-ID gleich der ID des aktuellen `event.snapTargetInline`-Elements ist.

Wenn die Werte unterschiedlich sind, bedeutet das, dass der Scroller in dieser Richtung (block oder inline) gescrollt wurde, und wir protokollieren eine Nachricht an die Konsole, um dies anzuzeigen. In einem echten Beispiel würden Sie wahrscheinlich das gesnappte Element in irgendeiner Weise stylen, um anzuzeigen, dass es gesnappt wurde.

Wir aktualisieren dann die Werte der `prevState.snapTargetBlock`- und `prevState.snapTargetInline` für das nächste Laufen der Ereignishandling-Funktion.

Im weiteren Verlauf dieses Artikels werden wir uns ein paar vollständige Scroll-Snap-Ereignis-Beispiele ansehen, mit denen Sie in den live gerenderten Versionen am Ende jedes Abschnitts spielen können.

## Beispiel eines eindimensionalen Scrollers

Dieses Beispiel zeigt ein vertikal scrollendes {{htmlelement("main")}}-Element, das mehrere hellgraue {{htmlelement("section")}}-Elemente enthält, die alle Scroll-Snap-Ziele sind. Wenn ein neues Snap-Ziel ansteht, wird es in einen dunkleren Grauton umschalten. Wenn ein neues Snap-Ziel ausgewählt wird, wird es sanft zu Violett mit weißem Text animieren. Wenn ein anderes Snap-Ziel vorher ausgewählt wurde, wird es sanft zurück zu Grau mit schwarzem Text animieren.

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

Im CSS beginnen wir damit, dem `<main>`-Element eine kräftige schwarze {{cssxref("border")}} und eine feste {{cssxref("width")}} und {{cssxref("height")}} zu geben. Wir setzen seinen {{cssxref("overflow")}}-Wert auf `scroll`, damit überlaufender Inhalt verborgen wird und gescrollt werden kann, und setzen {{cssxref("scroll-snap-type")}} auf `block mandatory`, sodass Snap-Ziele nur in der Block-Richtung immer gesnappt werden.

```css
main {
  border: 3px solid black;
  width: 250px;
  height: 450px;
  overflow: scroll;
  scroll-snap-type: block mandatory;
}
```

Jedes `<section>`-Element erhält ein {{cssxref("margin")}} von `50px`, um die `<section>`-Elemente zu trennen und das Scroll-Snapping-Verhalten offensichtlicher zu machen. Dann setzen wir {{cssxref("scroll-snap-align")}} auf `center`, um anzugeben, dass wir zum Zentrum jedes Snap-Ziels snappen möchten. Schließlich wenden wir eine {{cssxref("transition")}} an, um sanft zu den Stilanpassungen zu animieren, die vorgenommen werden, wenn eine Snap-Ziel-Auswahl getroffen wurde oder ansteht.

```css
section {
  margin: 50px auto;
  scroll-snap-align: center;
  transition: 0.5s ease;
}
```

Die oben erwähnten Stiländerungen werden durch Klassen angewendet, die über JavaScript auf die `<section>`-Elemente angewendet werden. Die `select-section`-Klasse wird angewendet, um eine Auswahl zu signalisieren — dies setzt einen violetten Hintergrund und eine weiße Textfarbe. Die `pending`-Klasse wird angewendet, um eine anstehende Snap-Ziel-Auswahl zu signalisieren — dies färbt den Zielauswahlhintergrund in ein dunkleres Grau.

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

Im JavaScript beginnen wir, indem wir eine Referenz auf das `<main>`-Element erfassen und die Anzahl der zu generierenden `<section>`-Elemente definieren (in diesem Fall 21) sowie eine Variable, von der aus gezählt wird. Dann verwenden wir eine [`while`](/de/docs/Web/JavaScript/Reference/Statements/while)-Schleife, um die `<section>`-Elemente zu generieren, jedem eine Kind-`h2`-Überschrift mit Text zu geben, der `Section` plus dem aktuellen Wert von `n` liest.

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

Nun zur [`scrollsnapchanging`](/de/docs/Web/API/Element/scrollsnapchanging_event)-Ereignishandler-Funktion. Wenn ein Kind des `<main>`-Elements (d.h. ein beliebiges `<section>`-Element) zu einer anstehenden Snap-Ziel-Auswahl wird, tun wir Folgendes:

1. Überprüfen, ob ein Element zuvor die `pending`-Klasse angewendet hatte und diese, falls ja, entfernen. Das dient dazu, dass nur das aktuelle anstehende Ziel die `pending`-Klasse erhält und dunkler grau eingefärbt wird. Wir wollen nicht, dass vorher anstehende Ziele, die nicht mehr anstehen, das Styling behalten.
2. Geben dem Element, auf das die [`snapTargetBlock`](/de/docs/Web/API/SnapEvent/snapTargetBlock)-Eigenschaft verweist (wobei es sich um eines der `<section>`-Elemente handeln wird), die `pending`-Klasse, damit es dunkler grau wird.

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
> Wir müssen uns in diesem Demo keine Sorgen um die `snapTargetInline`-Eigenschaft des Ereignisobjekts machen — wir scrollen nur vertikal und das Demo verwendet einen horizontalen Schreibmodus, daher wird sich nur der Wert von `snapTargetBlock` ändern. In diesem Fall wird `snapTargetInline` immer `null` zurückgeben.

Wenn eine Scroll-Geste endet und ein `<section>`-Element tatsächlich als ein Snap-Ziel ausgewählt wird, wird die [`scrollsnapchange`](/de/docs/Web/API/Element/scrollsnapchange_event)-Ereignishandler-Funktion ausgelöst. Diese:

1. Überprüft, ob zuvor ein Snap-Ziel ausgewählt wurde — d.h. ob eine `select-section`-Klasse zuvor auf ein Element angewendet wurde. Falls ja, entfernen wir sie.
2. Wenden die `select-section`-Klasse auf das `<section>`-Element an, das in der `snapTargetBlock`-Eigenschaft referenziert wird, sodass das gerade gewählte Snap-Ziel die Auswahlanimation erhält.

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

Versuchen Sie, den Scroll-Container nach oben und unten zu scrollen und beobachten Sie das oben beschriebene Verhalten:

{{ EmbedLiveSample("One-dimensional scroller example", "100%", "500") }}

## Beispiel eines zweidimensionalen Scrollers

Dieses Beispiel ähnelt dem vorherigen, außer dass es ein horizontal _und_ vertikal scrollendes {{htmlelement("main")}}-Element zeigt, das mehrere hellgraue {{htmlelement("section")}}-Elemente enthält, die alle Snap-Ziele sind.

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

Das CSS für dieses Beispiel ähnelt dem CSS im vorherigen Beispiel. Die signifikantesten Unterschiede sind wie folgt.

Erstens betrachten wir das Styling des `<main>`-Elements. Wir möchten, dass die `<section>`-Elemente als Gitterlayout angezeigt werden, daher verwenden wir [CSS grid layout](/de/docs/Web/CSS/CSS_grid_layout), um anzugeben, dass wir sie in sieben Spalten anzeigen wollen, wobei wir einen {{cssxref("grid-template-columns")}}-Wert von `repeat(7, 1fr)` verwenden. Wir geben auch den Raum um die `<section>`-Elemente herum an, indem wir `padding` und {{cssxref("gap")}} auf dem `<main>`-Element setzen, anstatt `margin` auf den `<section>`-Elementen zu setzen.

Schließlich, da wir in diesem Beispiel in beide Richtungen scrollen, setzen wir {{cssxref("scroll-snap-type")}} auf `both mandatory`, damit Snap-Ziele sowohl in der Block- als auch in der Inline-Richtung immer gesnappt werden.

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

Als nächstes verwenden wir in diesem Beispiel CSS-Animationen statt Übergängen. Dies führt zu komplexerem Code, ermöglicht jedoch eine präzisere Steuerung der angewendeten Animationen.

Wir definieren zunächst die Klassen, die angewendet werden, um anzuzeigen, dass eine Snap-Ziel-Auswahl gemacht oder ansteht. Die `select-section` und `deselect-section` Klassen werden Keyframe-Animationen anwenden, um eine Auswahl oder Deselektion zu signalisieren. Die `pending`-Klasse wird angewendet, um eine anstehende Snap-Ziel-Auswahl zu signalisieren (sie sorgt für einen dunkleren Grauton im Hintergrund der Auswahl, wie im vorherigen Beispiel).

Die {{cssxref("@keyframes")}} animieren von einem grauen Hintergrund und schwarzer (Standard-)Textfarbe zu einem violetten Hintergrund und weißer Textfarbe und wieder zurück. Die letztere Animation ist etwas anders als die erste — sie verwendet auch {{cssxref("opacity")}}, um einen Ein-/Ausblendeffekt zu erzeugen.

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

Im JavaScript beginnen wir auf die gleiche Weise wie im vorherigen Beispiel, außer dass wir diesmal 49 `<section>`-Elemente generieren und jedem eine ID von `s` plus dem aktuellen Wert von `n` zuweisen, um sie später leichter zu verfolgen. Mit dem zuvor angegebenen CSS-Gitterlayout haben wir sieben Spalten mit sieben `<section>`-Elementen.

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

Als Nächstes spezifizieren wir ein Objekt namens `prevState`, das es uns ermöglicht, das zuvor ausgewählte Snap-Ziel zu jedem Zeitpunkt zu verfolgen — seine Eigenschaften speichern die IDs der vorherigen Inline- und Block-Snap-Ziele. Dies ist wichtig, um festzustellen, ob wir das neue Block-Ziel oder das neue Inline-Ziel jedes Mal stylen müssen, wenn ein Ereignishandler ausgelöst wird.

```js
const prevState = {
  snapTargetInline: "s1",
  snapTargetBlock: "s1",
};
```

Zum Beispiel, sagen wir, der Scroll-Container wird so gescrollt, dass sich die ID des neuen [`SnapEvent.snapTargetBlock`](/de/docs/Web/API/SnapEvent/snapTargetBlock)-Elements geändert hat (es ist nicht gleich der in `prevState.snapTargetBlock` gespeicherten ID), aber die ID des neuen [`SnapEvent.snapTargetInline`](/de/docs/Web/API/SnapEvent/snapTargetInline)-Elements ist immer noch die gleiche wie die in `prevState.snapTargetInline` gespeicherte ID. Das bedeutet, dass wir zu einem neuen Snap-Ziel in der Block-Richtung gewechselt haben, sodass wir `SnapEvent.snapTargetBlock` stylen sollten, aber wir sind nicht zu einem neuen Snap-Ziel in der Inline-Richtung gewechselt, daher sollten wir `SnapEvent.snapTargetInline` nicht stylen.

Dieses Mal werden wir die [`scrollsnapchange`](/de/docs/Web/API/Element/scrollsnapchange_event)-Ereignishandler-Funktion zuerst erklären. In dieser Funktion:

1. Prüfen wir zunächst, ob ein zuvor ausgewähltes `<section>`-Element-Snap-Ziel (wie durch das Vorhandensein der `select-section`-Klasse angedeutet) die `deselect-section`-Klasse erhält, damit es die Deselektionsanimation zeigt. Wenn kein Snap-Ziel zuvor ausgewählt wurde, wenden wir die `select-section`-Klasse auf das erste `<section>` im DOM an, damit es als ausgewählt erscheint, wenn die Seite zum ersten Mal geladen wird.
2. Vergleichen wir die zuvor ausgewählte Snap-Ziel-ID mit der neu ausgewählten Snap-Ziel-ID, sowohl für die Block- als auch für die Inline-Auswahlen. Wenn sie unterschiedlich sind, zeigt das an, dass sich die Auswahl geändert hat, sodass wir die `select-section`-Klasse auf das betreffende Snap-Ziel anwenden, um dies visuell anzuzeigen.
3. Aktualisieren wir `prevState.snapTargetBlock` und `prevState.snapTargetInline`, sodass sie den IDs der kürzlich ausgewählten Scroll-Snap-Ziele entsprechen, damit sie das nächste Mal, wenn das Ereignis ausgelöst wird, die vorherigen Auswahlziele sind.

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

Wenn die [`scrollsnapchanging`](/de/docs/Web/API/Element/scrollsnapchanging_event)-Ereignishandler-Funktion ausgelöst wird, führen wir Folgendes aus:

1. Entfernen wir die `pending`-Klasse von dem Element, das sie zuvor angewendet bekommen hat, damit nur das aktuelle anstehende Ziel die `pending`-Klasse bekommt und dunkler grau gefärbt wird.
2. Geben wir dem aktuellen anstehenden Element die `pending`-Klasse, sodass es dunkler grau wird, aber nur, wenn es nicht bereits die `select-section`klasse hat — wir wollen, dass ein zuvor ausgewähltes Ziel die violette Auswahlstilisierung behält, bis ein neues Ziel tatsächlich ausgewählt ist. Wir fügen auch eine zusätzliche Überprüfung in die `if`-Anweisungen ein, um sicherzustellen, dass wir nur das Inline- oder Block-anstehende-Snap-Ziel stylen, je nachdem, welches sich geändert hat. Wieder vergleichen wir das vorherige Snap-Ziel mit dem aktuellen Snap-Ziel in jedem Fall.

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

Versuchen Sie, horizontal und vertikal im Scroll-Container zu scrollen und beobachten Sie das oben beschriebene Verhalten:

{{ EmbedLiveSample("Two-dimensional scroller example", "100%", "500") }}

## Scroll-Snap-Ereignisse auf `Document` und `Window`

In diesem Artikel haben wir die Scroll-Snap-Ereignisse behandelt, die auf der [`Element`](/de/docs/Web/API/Element)-Schnittstelle ausgelöst werden, aber die gleichen Ereignisse werden auch auf den [`Document`](/de/docs/Web/API/Document)- und [`Window`](/de/docs/Web/API/Window)-Objekten ausgelöst. Siehe:

- `Document` [`scrollsnapchange`](/de/docs/Web/API/Document/scrollsnapchange_event) und [`scrollsnapchanging`](/de/docs/Web/API/Document/scrollsnapchanging_event) Ereignisreferenzen.
- `Window` [`scrollsnapchange`](/de/docs/Web/API/Window/scrollsnapchange_event) und [`scrollsnapchanging`](/de/docs/Web/API/Window/scrollsnapchanging_event) Ereignisreferenzen.

Diese funktionieren weitgehend auf die gleiche Weise wie die `Element`-Versionen, mit der Ausnahme, dass das gesamte HTML-Dokument als Scroll-Snap-Container gesetzt werden muss (d.h. {{cssxref("scroll-snap-type")}} wird auf dem {{htmlelement("html")}}-Element gesetzt).

Zum Beispiel, wenn wir ein ähnliches Beispiel wie die oben betrachteten nehmen, bei dem wir ein `<main>`-Element mit signifikantem Inhalt haben:

```html
<main>
  <!-- Significant content -->
</main>
```

Das `<main>`-Element könnte durch eine Kombination von CSS-Eigenschaften in einen Scroll-Container verwandelt werden, zum Beispiel:

```css
main {
  width: 250px;
  height: 450px;
  overflow: scroll;
}
```

Sie könnten dann das Scroll-Snapping-Verhalten auf den scrollenden Inhalt anwenden, indem Sie die {{cssxref("scroll-snap-type")}}-Eigenschaft auf dem {{htmlelement("html")}}-Element spezifizieren:

```css
html {
  scroll-snap-type: block mandatory;
}
```

Das folgende JavaScript-Schnipsel würde das `scrollsnapchange`-Ereignis beim HTML-Dokument auslösen, wenn ein Kind des `<main>`-Elements zu einem neu ausgewählten Snap-Ziel wird. In der Handler-Funktion setzen wir eine `selected`-Klasse auf das Kind, auf das von [`SnapEvent.snapTargetBlock`](/de/docs/Web/API/SnapEvent/snapTargetBlock) verwiesen wird, die verwendet werden könnte, um es so zu stylen, dass es wie ausgewählt aussieht (zum Beispiel, mit einer Animation), wenn das Ereignis ausgelöst wird.

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
- [CSS scroll snap](/de/docs/Web/CSS/CSS_scroll_snap) Modul
- [Scroll Snap Events](https://developer.chrome.com/blog/scroll-snap-events) auf developer.chrome.com (2024)
