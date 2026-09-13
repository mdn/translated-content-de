---
title: "Element: scrollIntoView() Methode"
short-title: scrollIntoView()
slug: Web/API/Element/scrollIntoView
l10n:
  sourceCommit: 59c6bfba7a60d20b06a7e9c3dc55eb8c8a020afe
---

{{APIRef("DOM")}}

Die **`scrollIntoView()`** Methode der [`Element`](/de/docs/Web/API/Element) Schnittstelle scrollt die Vorfahren-Container des Elements, sodass das Element, auf das `scrollIntoView()` angewendet wird, für den Benutzer sichtbar ist.

## Syntax

```js-nolint
scrollIntoView()
scrollIntoView(alignToTop)
scrollIntoView(options)
```

### Parameter

- `alignToTop` {{optional_inline}}
  - : Ein boolescher Wert:
    - Wenn `true`, wird der obere Rand des Elements mit dem oberen Rand des sichtbaren Bereichs des scrollbaren Vorfahren ausgerichtet. Entspricht `scrollIntoViewOptions: {block: "start", inline: "nearest"}`. Dies ist der Standardwert.
    - Wenn `false`, wird der untere Rand des Elements mit dem unteren Rand des sichtbaren Bereichs des scrollbaren Vorfahren ausgerichtet. Entspricht `scrollIntoViewOptions: {block: "end", inline: "nearest"}`.

- `options` {{optional_inline}}
  - : Ein Objekt mit den folgenden Eigenschaften:
    - `behavior` {{optional_inline}}
      - : Bestimmt, ob das Scrollen sofort oder sanft animiert erfolgt. Diese Option ist ein String, der einen der folgenden Werte haben muss:
        - `smooth`: Das Scrollen wird sanft animiert.
        - `instant`: Das Scrollen erfolgt sofort in einem einzigen Sprung.
        - `auto`: Das Scrollverhalten wird durch den berechneten Wert der CSS-Eigenschaft {{cssxref("scroll-behavior")}} auf dem Element bestimmt.

        Wenn weggelassen, hat `behavior` standardmäßig den Wert `auto`.

    - `block` {{optional_inline}}
      - : Definiert die vertikale Ausrichtung des Elements innerhalb des scrollbaren Vorfahren-Containers. Sein Wert kann einer der folgenden sein:
        - `start`: Richtet den oberen Rand des Elements mit dem oberen Rand des scrollbaren Containers aus, sodass das Element vertikal am Anfang des sichtbaren Bereichs erscheint.
        - `center`: Richtet das Element vertikal in der Mitte des scrollbaren Containers aus und positioniert es in der Mitte des sichtbaren Bereichs.
        - `end`: Richtet den unteren Rand des Elements mit dem unteren Rand des scrollbaren Containers aus und platziert das Element vertikal am Ende des sichtbaren Bereichs.
        - `nearest`: Scrollt so wenig wie möglich, um das Element sichtbar zu machen. Wenn das Element näher am oberen Rand des scrollbaren Containers ist, wird es nach oben ausgerichtet; wenn es näher am unteren Rand ist, wird es nach unten ausgerichtet. Wenn das Element bereits sichtbar ist, wird nicht gescrollt.

        Der Standardwert ist `start`.

    - `container` {{optional_inline}}
      - : Definiert den scrollbaren Vorfahren-Container. Sein Wert kann einer der folgenden sein:
        - `all`: Alle scrollbaren Container sind betroffen (einschließlich des Viewports).
        - `nearest`: Nur der nächste scrollbare Container wird durch das Scrollen betroffen.

        Der Standardwert ist `all`.

    - `inline` {{optional_inline}}
      - : Definiert die horizontale Ausrichtung des Elements innerhalb des scrollbaren Vorfahren-Containers. Sein Wert kann einer der folgenden sein:
        - `start`: Richtet den linken Rand des Elements mit dem linken Rand des scrollbaren Containers aus, sodass das Element horizontal am Anfang des sichtbaren Bereichs erscheint.
        - `center`: Richtet das Element horizontal in der Mitte des scrollbaren Containers aus und positioniert es in der Mitte des sichtbaren Bereichs.
        - `end`: Richtet den rechten Rand des Elements mit dem rechten Rand des scrollbaren Containers aus und platziert es horizontal am Ende des sichtbaren Bereichs.
        - `nearest`: Scrollt so wenig wie möglich, um das Element sichtbar zu machen. Wenn das Element näher am linken Rand des scrollbaren Containers ist, wird es nach links ausgerichtet; wenn es näher am rechten Rand ist, wird es nach rechts ausgerichtet. Wenn das Element bereits sichtbar ist, wird nicht gescrollt.

        Der Standardwert ist `nearest`.

### Rückgabewert

Ein {{jsxref("Promise")}}, das sich mit einem Objekt erfüllt, das die folgende Eigenschaft enthält:

- `interrupted`
  - : Ein boolescher Wert, der angibt, ob die Scroll-Operation unterbrochen wurde (`true`) oder nicht (`false`). Eine solche Unterbrechung tritt normalerweise auf, wenn ein programmgesteuertes Scrollen im Gange ist und ein anderes programmgesteuertes Scrollen auf demselben Element gestartet wird, bevor das erste beendet ist.

## Beispiele

### Grundlegende Verwendung

```js
const element = document.getElementById("box");

element.scrollIntoView();
element.scrollIntoView(false);
element.scrollIntoView({ block: "end" });
element.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
```

### Kontrolle der oberen/unteren Ausrichtung

Standardmäßig wird das Element an der oberen (oder unteren) Kante des scrollbaren Vorfahren ausgerichtet. Um einen benutzerdefinierten Abstand festzulegen, verwenden Sie {{cssxref("scroll-margin-top")}} oder {{cssxref("scroll-margin-bottom")}}. Dies ist oft nützlich, wenn es einen festen Header auf der Seite gibt.

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

### Reagieren auf das Ende des Scrollens

Unser [Elementmethoden-Demo](https://mdn.github.io/dom-examples/scroll-promises/element-methods/) ([siehe Quellcode](https://github.com/mdn/dom-examples/tree/main/scroll-promises/element-methods)) zeigt, wie der Versprechen-Rückgabewert von `scrollIntoView()` verwendet werden kann, um auf das Ende einer Scroll-Operation zu reagieren. Diese Technik ist meistens nützlich in Fällen, in denen das Scrollen über die Zeit hinweg sanft erfolgt (erreicht durch Setzen der [`behavior`](#behavior) Option auf `smooth` oder durch Setzen der {{cssxref("scroll-behavior")}} Eigenschaft des scrollenden Elements auf `smooth`).

#### HTML

Unser HTML enthält ein {{htmlelement("section")}} Element, das mehrere Absätze Inhalt und ein {{htmlelement("div")}} Element-Toolbar mit {{htmlelement("button")}} Elementen enthält, die verschiedene Scroll-Operationen auf der `<section>` auslösen. Der letzte Absatz hat eine `id` von `end`.

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

Wir geben dem `<section>` Element eine feste {{cssxref("height")}} und einen {{cssxref("overflow-y")}} Wert von `scroll`, sodass es vertikal scrollt, und setzen seine {{cssxref("scroll-behavior")}} Eigenschaft auf `smooth`, sodass alle Scroll-Operationen sanft über die Zeit hinweg animiert werden, anstatt sofort.

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

Wir erstellen auch zwei Klassenselektoren; wenn eine `fade-out` oder `fade-in` Klasse auf ein Element angewendet wird, wird eine {{cssxref("animation")}} angewendet, sodass es sanft ausblendet oder einblendet. Wir definieren auch {{cssxref("@keyframes")}} Blöcke, um die erforderlichen {{cssxref("opacity")}} Änderungen für diese Animationen zu definieren.

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

Der Rest des CSS wird zur Kürze nicht gezeigt.

#### JavaScript

Wir beginnen mit dem Erfassen von Referenzen der `<button>`, die die `scrollIntoView()` Operation ausführt, der Toolbar `<div>` und dem Absatz mit `id` `end`:

```js
const scrollIntoViewBtn = document.querySelector(".scroll-into-view");
const toolbar = document.querySelector("div");
const end = document.querySelector("#end");
```

Als nächstes definieren wir eine Funktion namens `isInterrupted()`, die als Reaktion auf das Ende einer Scroll-Operation ausgeführt wird und einen booleschen `interrupted` Wert als Parameter nimmt. Sie protokolliert eine Nachricht in der Konsole, dass das Scrollen beendet ist und gibt an, ob die Operation unterbrochen wurde (`interrupted` ist `true`) oder nicht. Darüber hinaus, wenn `interrupted` `true` ist, wird ein `alert()` aufgerufen, um die Unterbrechung deutlich anzuzeigen.

```js
function isInterrupted(interrupted) {
  console.log(`Scroll finished;${interrupted ? " " : " not "}interrupted`);
  if (interrupted) {
    alert("Scroll interrupted!");
  }
}
```

Wenn die Schaltfläche geklickt wird, wenden wir sofort die `fade-out` Klasse auf die Toolbar an, wodurch sie ausblendet. Wir führen dann `scrollIntoView()` auf dem Endabsatz aus, um die `<section>` solange zu scrollen, bis der Endabsatz sichtbar ist, warten auf die Auflösung des Versprechens und speichern das `result` in einer Konstante. Wenn das Versprechen aufgelöst ist, rufen wir `isInterrupted()` auf, um zu berichten, dass die Scroll-Operation beendet ist und ob sie unterbrochen wurde. Schließlich wenden wir die `fade-in` Klasse auf die Toolbar an, wodurch sie wieder einblendet.

```js
scrollIntoViewBtn.addEventListener("click", async () => {
  toolbar.className = "fade-out";
  const result = await end.scrollIntoView();
  isInterrupted(result.interrupted);
  toolbar.className = "fade-in";
});
```

Der für `scrollIntoView()` nicht relevante Code wird zur Kürze nicht gezeigt.

#### Ergebnis

Klicken Sie auf die Schaltflächen, um das Scrollverhalten zu sehen. Beachten Sie, wie die Toolbar ausblendet, wenn eine Schaltfläche gedrückt wird, und wieder einblendet, sobald das sanfte Scrollen beendet ist. Versuchen Sie auch, eine Schaltfläche zu drücken und dann schnell eine andere, bevor die erste Scroll-Operation beendet ist. Beachten Sie, dass in diesen Fällen das Scrollen als unterbrochen gemeldet wird.

{{EmbedGHLiveSample("dom-examples/scroll-promises/element-methods/", "100%", 620)}}

Sie können auch [das Demo in einem separaten Tab laden](https://mdn.github.io/dom-examples/scroll-promises/element-methods/) und den [Quellcode ansehen](https://github.com/mdn/dom-examples/tree/main/scroll-promises/element-methods).

#### Anmerkung zur Funktionsdetektion

Wenn Sie dieses Beispiel in einem Browser ausführen, der keine Versprechen zurückgebenden Scroll-Operationen unterstützt, sind die Scroll-Operationen weiterhin sanft, aber die Toolbar blendet nicht aus und dann wieder ein, sobald die Operation beendet ist. Die Funktionsdetektion wird von einer Funktion namens `supportsScrollPromises()` behandelt, die eine Scroll-Operation ausführt und testet, ob ihr Rückgabewert ein Versprechen ist:

```js
function supportsScrollPromises() {
  const test = section.scroll(0, 0);
  return test instanceof Promise;
}
```

Schauen Sie sich den [Quellcode](https://github.com/mdn/dom-examples/blob/main/scroll-promises/element-methods/index.js) an, um zu sehen, wie die Funktionsdetektion verwendet wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element.scrollIntoViewIfNeeded()`](/de/docs/Web/API/Element/scrollIntoViewIfNeeded) {{non-standard_inline}}
