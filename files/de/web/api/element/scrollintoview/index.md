---
title: "Element: scrollIntoView() Methode"
short-title: scrollIntoView()
slug: Web/API/Element/scrollIntoView
l10n:
  sourceCommit: afcdfa050626bb7eb05ee693df8997020db9ff2e
---

{{APIRef("DOM")}}

Die **`scrollIntoView()`** Methode des [`Element`](/de/docs/Web/API/Element) Interface scrollt die Vorfahren-Container des Elements, sodass das Element, auf dem `scrollIntoView()` aufgerufen wird, für den Benutzer sichtbar ist.

## Syntax

```js-nolint
scrollIntoView()
scrollIntoView(alignToTop)
scrollIntoView(options)
```

### Parameter

- `alignToTop` {{optional_inline}}
  - : Ein boolescher Wert:
    - Wenn `true`, wird die Oberkante des Elements an der Oberkante des sichtbaren Bereichs des scrollbaren Vorfahren ausgerichtet. Entspricht `scrollIntoViewOptions: {block: "start", inline: "nearest"}`. Dies ist der Standardwert.
    - Wenn `false`, wird die Unterkante des Elements an der Unterkante des sichtbaren Bereichs des scrollbaren Vorfahren ausgerichtet. Entspricht `scrollIntoViewOptions: {block: "end", inline: "nearest"}`.

- `options` {{optional_inline}}
  - : Ein Objekt mit den folgenden Eigenschaften:
    - `behavior` {{optional_inline}}
      - : Bestimmt, ob das Scrollen sofort erfolgt oder sich sanft animiert. Diese Option ist ein String, der einen der folgenden Werte haben muss:
        - `smooth`: Das Scrollen animiert sanft.
        - `instant`: Das Scrollen erfolgt sofort in einem einzigen Sprung.
        - `auto`: Das Scrollverhalten wird durch den berechneten Wert der {{cssxref("scroll-behavior")}} CSS-Eigenschaft auf dem Element bestimmt.

        Wenn weggelassen, wird `behavior` standardmäßig auf `auto` gesetzt.

    - `block` {{optional_inline}}
      - : Definiert die vertikale Ausrichtung des Elements innerhalb des scrollbaren Vorfahren-Containers. Der Wert kann einer der folgenden sein:
        - `start`: Richtet die obere Kante des Elements an der oberen Kante des scrollbaren Containers aus, sodass das Element vertikal am Anfang des sichtbaren Bereichs erscheint.
        - `center`: Richtet das Element vertikal in der Mitte des scrollbaren Containers aus, sodass es in der Mitte des sichtbaren Bereichs positioniert ist.
        - `end`: Richtet die untere Kante des Elements an der unteren Kante des scrollbaren Containers aus, sodass das Element am Ende des sichtbaren Bereichs vertikal erscheint.
        - `nearest`: Scrollt das Element zur nächstgelegenen Kante in vertikaler Richtung. Wenn das Element näher an der oberen Kante des scrollbaren Containers ist, wird es oben ausgerichtet; wenn es näher an der unteren Kante ist, wird es unten ausgerichtet. Dies minimiert die Scrollstrecke.

        Der Standard ist `start`.

    - `container` {{optional_inline}}
      - : Definiert den scrollbaren Vorfahren-Container. Der Wert kann einer der folgenden sein:
        - `all`: Alle scrollbaren Container sind betroffen (einschließlich des Viewports).
        - `nearest`: Nur der nächstgelegene scrollbare Container ist von dem Scroll betroffen.

        Der Standard ist `all`.

    - `inline` {{optional_inline}}
      - : Definiert die horizontale Ausrichtung des Elements innerhalb des scrollbaren Vorfahren-Containers. Der Wert kann einer der folgenden sein:
        - `start`: Richtet die linke Kante des Elements an der linken Kante des scrollbaren Containers aus, sodass das Element horizontal am Anfang des sichtbaren Bereichs erscheint.
        - `center`: Richtet das Element horizontal in der Mitte des scrollbaren Containers aus, sodass es in der Mitte des sichtbaren Bereichs positioniert ist.
        - `end`: Richtet die rechte Kante des Elements an der rechten Kante des scrollbaren Containers aus, sodass das Element am Ende des sichtbaren Bereichs horizontal erscheint.
        - `nearest`: Scrollt das Element zur nächstgelegenen Kante in der horizontalen Richtung. Wenn das Element näher an der linken Kante des scrollbaren Containers ist, wird es links ausgerichtet; wenn es näher an der rechten Kante ist, wird es rechts ausgerichtet. Dies minimiert die Scrollstrecke.

        Der Standard ist `nearest`.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem Objekt erfüllt wird, das die folgende Eigenschaft enthält:

- `interrupted`
  - : Ein boolescher Wert, der angibt, ob der Scrollvorgang unterbrochen wurde (`true`) oder nicht (`false`). Eine solche Unterbrechung tritt typischerweise auf, wenn ein programmatisches Scrollen stattfindet und ein weiteres programmatisches Scrollen auf dasselbe Element initiiert wird, bevor das erste beendet ist.

## Beispiele

### Grundlegende Verwendung

```js
const element = document.getElementById("box");

element.scrollIntoView();
element.scrollIntoView(false);
element.scrollIntoView({ block: "end" });
element.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
```

### Steuerung der oberen/unteren Ausrichtung

Standardmäßig wird das Element an der Ober- (oder Unter-) kante des scrollbaren Vorfahren ausgerichtet. Um einen benutzerdefinierten Abstand zu definieren, verwenden Sie {{cssxref("scroll-margin-top")}} oder {{cssxref("scroll-margin-bottom")}}. Dies ist oft nützlich, wenn es einen festen Header auf der Seite gibt.

#### HTML

```html live-sample___scroll-with-padding
<body>
  <header class="navbar">Navbar</header>
  <main class="content">
    <button id="go-to-bottom">Go to bottom</button>
    <button id="go-to-top">Go to top</button>
  </main>
</body>
```

#### CSS

```css live-sample___scroll-with-padding
.navbar {
  height: 50px;
  position: sticky;
  top: 0;
  border-bottom: 1.5px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
}
.content {
  height: 2000px;
  position: relative;
}
#go-to-bottom {
  position: absolute;
  top: 10px;
  /* Without this, the button will be aligned to the top of the page
  instead of bottom of navbar when scrolled */
  scroll-margin-top: 60px;
}
#go-to-top {
  position: absolute;
  bottom: 10px;
  scroll-margin-bottom: 0;
}
```

#### JavaScript

```js live-sample___scroll-with-padding
const goToTop = document.getElementById("go-to-top");
const goToBottom = document.getElementById("go-to-bottom");
goToBottom.addEventListener("click", () => {
  goToTop.scrollIntoView({ behavior: "instant", block: "end" });
});
goToTop.addEventListener("click", () => {
  goToBottom.scrollIntoView({ behavior: "instant", block: "start" });
});
```

#### Ergebnis

{{EmbedLiveSample("scroll-with-padding", "700", "300")}}

### Reagieren auf das Ende des Scrollvorgangs

Unser [element methods demo](https://mdn.github.io/dom-examples/scroll-promises/element-methods/) ([siehe Quellcode](https://github.com/mdn/dom-examples/tree/main/scroll-promises/element-methods)) zeigt, wie der Promise-Rückgabewert von `scrollIntoView()` verwendet werden kann, um auf das Ende eines Scrollvorgangs zu reagieren. Diese Technik ist hauptsächlich in Fällen nützlich, in denen das Scrollen sanft über die Zeit erfolgt (erreicht durch das Setzen der [`behavior`](#behavior) Option auf `smooth` oder durch Setzen der {{cssxref("scroll-behavior")}} Eigenschaft des scrollenden Elements auf `smooth`).

#### HTML

Unser HTML enthält ein {{htmlelement("section")}} Element mit mehreren Absätzen von Inhalt und ein {{htmlelement("div")}} Element-Werkzeugleiste mit {{htmlelement("button")}} Elementen, die verschiedene Scrollvorgänge auf dem `<section>` auslösen. Der letzte Absatz hat eine `id` von `end`.

```html
<div>
  <button class="scroll">scroll() to 1000</button>
  <button class="scroll-to">scrollTo() top</button>
  <button class="scroll-by">scrollBy() 200</button>
  <button class="scroll-into-view">Scroll last &lt;p&gt; into view</button>
</div>

<section>
  ...

  <p id="end">...</p>
</section>
```

#### CSS

Wir geben dem `<section>` Element eine feste {{cssxref("height")}} und einen {{cssxref("overflow-y")}} Wert von `scroll`, sodass es vertikal scrollt, und setzen seine {{cssxref("scroll-behavior")}} Eigenschaft auf `smooth`, sodass alle Scrollvorgänge sanft über die Zeit animiert werden, anstatt sofort.

```css
section {
  border: 1px solid black;
  padding: 20px;
  margin-top: 60px;
  height: 500px;
  overflow-y: scroll;
  scroll-behavior: smooth;
}
```

Wir erstellen auch zwei Klassenselektoren; wenn eine `fade-out` oder `fade-in` Klasse auf ein Element angewendet wird, wird eine {{cssxref("animation")}} angewendet, sodass es sanft aus- oder eingeblendet wird. Wir definieren auch {{cssxref("@keyframes")}} Blöcke, um die erforderlichen {{cssxref("opacity")}} Änderungen für diese Animationen zu definieren.

```css
.fade-out {
  animation: fade-out 0.3s linear both;
}

.fade-in {
  animation: fade-in 0.3s linear both;
}

@keyframes fade-out {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
```

Der Rest des CSS ist der Kürze halber nicht gezeigt.

#### JavaScript

Wir beginnen damit, Referenzen zum `<button>`, das die `scrollIntoView()` Operation ausführt, zur Werkzeugleiste `<div>` und zum Absatz mit einer `id` von `end` zu holen:

```js
const scrollIntoViewBtn = document.querySelector(".scroll-into-view");
const toolbar = document.querySelector("div");
const end = document.querySelector("#end");
```

Dann definieren wir eine Funktion namens `isInterrupted()`, die dazu gedacht ist, als Reaktion auf das Beenden eines Scrollvorgangs ausgeführt zu werden und einen booleschen `interrupted` Wert als Parameter annimmt. Sie protokolliert eine Nachricht in die Konsole, die besagt, dass das Scrollen beendet ist und angibt, ob der Vorgang unterbrochen wurde (`interrupted` ist `true`) oder nicht. Außerdem wird, wenn `interrupted` `true` ist, ein `alert()` aufgerufen, um die Unterbrechung klar anzuzeigen.

```js
function isInterrupted(interrupted) {
  console.log(`Scroll finished;${interrupted ? " " : " not "}interrupted`);
  if (interrupted) {
    alert("Scroll interrupted!");
  }
}
```

Wenn die Schaltfläche geklickt wird, wenden wir sofort die `fade-out` Klasse auf die Werkzeugleiste an, sodass sie ausgeblendet wird. Dann führen wir `scrollIntoView()` auf dem End-Absatz aus, um das `<section>` so zu scrollen, dass der End-Absatz sichtbar wird, während wir auf die Auflösung seines Versprechens warten und das `result` in einer Konstante speichern. Sobald das Versprechen erfüllt ist, rufen wir `isInterrupted()` auf, um zu melden, dass der Scrollvorgang beendet ist und ob er unterbrochen wurde. Schließlich wenden wir die `fade-in` Klasse auf die Werkzeugleiste an, sodass sie wieder eingeblendet wird.

```js
scrollIntoViewBtn.addEventListener("click", async () => {
  toolbar.className = "fade-out";
  const result = await end.scrollIntoView();
  isInterrupted(result.interrupted);
  toolbar.className = "fade-in";
});
```

Der für `scrollIntoView()` nicht relevante Code wird der Kürze halber nicht gezeigt.

#### Ergebnis

Klicken Sie auf die Schaltflächen, um das Scrollverhalten zu sehen. Beachten Sie, wie die Werkzeugleiste ausblendet, wenn eine Schaltfläche gedrückt wird, und wieder einblendet, sobald das sanfte Scrollen beendet ist. Versuchen Sie auch, eine Schaltfläche zu drücken und dann schnell eine andere Schaltfläche, bevor der erste Scrollvorgang beendet ist. Beachten Sie, wie in diesen Fällen das Scrollen als unterbrochen gemeldet wird.

{{EmbedGHLiveSample("dom-examples/scroll-promises/element-methods/", "100%", 620)}}

Sie können auch [das Demo in einem separaten Tab laden](https://mdn.github.io/dom-examples/scroll-promises/element-methods/) und den [Quellcode anzeigen](https://github.com/mdn/dom-examples/tree/main/scroll-promises/element-methods).

#### Hinweis zur Funktionserkennung

Wenn Sie dieses Beispiel in einem Browser ausführen, der keine Promise-returning Scroll-Operationen unterstützt, sind die Scroll-Vorgänge trotzdem sanft, aber die Werkzeugleiste blendet sich nicht aus und dann wieder ein, sobald der Vorgang abgeschlossen ist. Die Funktionserkennung wird von einer Funktion namens `supportsScrollPromises()` behandelt, die einen Scrollvorgang durchführt und prüft, ob der Rückgabewert ein Promise ist:

```js
function supportsScrollPromises() {
  const test = section.scroll(0, 0);
  return test instanceof Promise;
}
```

Sehen Sie sich den [Quellcode](https://github.com/mdn/dom-examples/blob/main/scroll-promises/element-methods/index.js) an, um zu sehen, wie die Funktionserkennung verwendet wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element.scrollIntoViewIfNeeded()`](/de/docs/Web/API/Element/scrollIntoViewIfNeeded) {{non-standard_inline}}
