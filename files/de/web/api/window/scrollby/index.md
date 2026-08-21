---
title: "Window: scrollBy() Methode"
short-title: scrollBy()
slug: Web/API/Window/scrollBy
l10n:
  sourceCommit: 285941521a9a7c2c1b3c443d5f785e5f663a8fc9
---

{{APIRef("CSSOM view API")}}

Die **`scrollBy()`**-Methode des [`Window`](/de/docs/Web/API/Window)-Interfaces scrollt das Dokument im Fenster um den angegebenen Betrag.

## Syntax

```js-nolint
scrollBy(xCoord, yCoord)
scrollBy(options)
```

### Parameter

- `xCoord`
  - : Der horizontale Pixelwert, um den Sie scrollen möchten.
- `yCoord`
  - : Der vertikale Pixelwert, um den Sie scrollen möchten.
- `options`
  - : Ein Objekt, das die folgenden Eigenschaften enthält:
    - `top` {{optional_inline}}
      - : Gibt die Anzahl der Pixel auf der Y-Achse an, um die das Fenster oder Element gescrollt werden soll.
    - `left` {{optional_inline}}
      - : Gibt die Anzahl der Pixel auf der X-Achse an, um die das Fenster oder Element gescrollt werden soll.
    - `behavior` {{optional_inline}}
      - : Bestimmt, ob das Scrollen sofort erfolgt oder sanft animiert wird. Diese Option ist ein String, der einen der folgenden Werte annehmen muss:
        - `smooth`: Das Scrollen wird sanft animiert.
        - `instant`: Das Scrollen erfolgt sofort in einem einzigen Sprung.
        - `auto`: Das Scrollverhalten wird durch den berechneten Wert der {{cssxref("scroll-behavior")}}-CSS-Eigenschaft des Elements bestimmt.

        Wird `behavior` weggelassen, ist der Standardwert `auto`.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem Objekt erfüllt wird, das die folgende Eigenschaft enthält:

- `interrupted`
  - : Ein boolescher Wert, der angibt, ob der Scrollvorgang unterbrochen wurde (`true`) oder nicht (`false`). Eine solche Unterbrechung tritt typischerweise auf, wenn ein programmatischer Scrollvorgang in Gang ist und ein weiterer programmatischer Scrollvorgang auf dem Fenster initiiert wird, bevor der erste abgeschlossen ist.

## Beispiele

### Grundlegende Verwendung

Um eine Seite nach unten zu scrollen:

```js
window.scrollBy(0, window.innerHeight);
```

Um nach oben zu scrollen:

```js
window.scrollBy(0, -window.innerHeight);
```

Verwendung von `options`:

```js
window.scrollBy({
  top: 100,
  left: 100,
  behavior: "smooth",
});
```

### Reagieren auf das Ende des Scrollens

Unsere [Fenstermethoden-Demo](https://mdn.github.io/dom-examples/scroll-promises/window-methods/) ([Quellcode ansehen](https://github.com/mdn/dom-examples/tree/main/scroll-promises/window-methods)) zeigt, wie der Promise-Rückgabewert von `scrollBy()` verwendet werden kann, um auf das Ende eines Scrollvorgangs zu reagieren. Diese Technik ist hauptsächlich in Fällen nützlich, in denen das Scrollen über die Zeit hinweg sanft erfolgt (erreicht durch die Einstellung der [`behavior`](#behavior)-Option auf `smooth` oder durch das Setzen der {{cssxref("scroll-behavior")}}-Eigenschaft des Scroll-Elements auf `smooth`).

#### HTML

Unser HTML enthält mehrere Absätze Inhalt und ein {{htmlelement("div")}}-Element-Toolbar mit {{htmlelement("button")}}-Elementen, die verschiedene Scrollvorgänge im Fenster auslösen.

```html
<div>
  <button class="scroll">scroll() to 1000</button>
  <button class="scroll-to">scrollTo() top</button>
  <button class="scroll-by">scrollBy() 200</button>
</div>

<p>...</p>

<p>...</p>

...
```

#### CSS

Wir geben dem {{cssxref(":root")}}-Element einen Wert der {{cssxref("scroll-behavior")}}-Eigenschaft von `smooth`, sodass alle Scrollvorgänge über die Zeit hinweg sanft animiert werden, anstatt sofort zu erfolgen.

```css
:root {
  scroll-behavior: smooth;
}
```

Wir erstellen auch zwei Klassenselektoren; wenn eine `fade-out`- oder `fade-in`-Klasse auf ein Element angewendet wird, wird eine {{cssxref("animation")}} angewendet, sodass sie sanft aus- oder eingeblendet wird. Wir definieren auch {{cssxref("@keyframes")}}-Blöcke, um die erforderlichen {{cssxref("opacity")}}-Änderungen für diese Animationen zu definieren.

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

Der Rest des CSS wird aus Gründen der Kürze nicht angezeigt.

#### JavaScript

Wir beginnen damit, Referenzen auf die `<button>`, die den `scrollBy()`-Vorgang ausführen, und die Toolbar-`<div>` zu erfassen:

```js
const scrollByBtn = document.querySelector(".scroll-by");
const toolbar = document.querySelector("div");
```

Als Nächstes definieren wir eine Funktion namens `isInterrupted()`, die als Reaktion darauf ausgeführt wird, dass ein Scrollvorgang endet und die einen booleschen `interrupted`-Wert als Parameter nimmt. Sie protokolliert eine Nachricht in der Konsole, um zu sagen, dass das Scrollen beendet ist und ob der Vorgang unterbrochen wurde (`interrupted` ist `true`) oder nicht. Außerdem wird, falls `interrupted` `true` ist, ein `alert()` ausgeführt, um die Unterbrechung deutlich anzuzeigen.

```js
function isInterrupted(interrupted) {
  console.log(`Scroll finished;${interrupted ? " " : " not "}interrupted`);
  if (interrupted) {
    alert("Scroll interrupted!");
  }
}
```

Wenn die Schaltfläche geklickt wird, wenden wir sofort die `fade-out`-Klasse auf die Toolbar an, sodass sie ausblendet. Danach führen wir `scrollBy(0, 200)` auf dem Fenster aus, um dessen Inhalt um 200 Pixel nach unten zu scrollen, warten auf die Auflösung des Promises und speichern das `result` in einer Konstante. Wenn das Promise aufgelöst wurde, nennen wir `isInterrupted()`, um zu melden, dass der Scrollvorgang abgeschlossen ist und ob er unterbrochen wurde. Schließlich wenden wir die `fade-in`-Klasse auf die Toolbar an, wodurch sie wieder eingeblendet wird.

```js
scrollByBtn.addEventListener("click", async () => {
  toolbar.className = "fade-out";
  const result = await window.scrollBy(0, 200);
  isInterrupted(result.interrupted);
  toolbar.className = "fade-in";
});
```

Der nicht relevante Code für `scrollBy()` wird aus Gründen der Kürze nicht angezeigt.

#### Ergebnis

Klicken Sie auf die Schaltflächen, um das Scrollverhalten zu sehen. Beachten Sie, wie sich die Toolbar ausblendet, wenn eine Schaltfläche gedrückt wird, und sich wieder einblendet, sobald das sanfte Scrollen beendet ist. Versuchen Sie auch, eine Schaltfläche zu drücken und schnell eine andere Schaltfläche zu drücken, bevor der erste Scrollvorgang beendet ist. Beachten Sie, wie in diesen Fällen das Scrollen als unterbrochen gemeldet wird.

{{EmbedGHLiveSample("dom-examples/scroll-promises/window-methods/", "100%", 400)}}

Sie können das [Demo auch in einem separaten Tab laden](https://mdn.github.io/dom-examples/scroll-promises/window-methods/) und den [Quellcode ansehen](https://github.com/mdn/dom-examples/tree/main/scroll-promises/window-methods).

#### Hinweis zur Funktionserkennung

Wenn Sie dieses Beispiel in einem Browser ausführen, der keine Promise-zurückgebenden Scrollvorgänge unterstützt, sind die Scrollvorgänge zwar immer noch sanft, aber die Toolbar blendet sich nicht aus und dann wieder ein, sobald der Vorgang abgeschlossen ist. Die Funktionserkennung wird von einer Funktion namens `supportsScrollPromises()` behandelt, die einen Scrollvorgang ausführt und testet, ob dessen Rückgabewert ein Promise ist:

```js
function supportsScrollPromises() {
  const test = window.scroll(0, 0);
  return test instanceof Promise;
}
```

Schauen Sie sich den [Quellcode](https://github.com/mdn/dom-examples/blob/main/scroll-promises/window-methods/index.js) an, um zu sehen, wie die Funktionserkennung verwendet wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Window.scroll()`](/de/docs/Web/API/Window/scroll)
- [`Window.scrollTo()`](/de/docs/Web/API/Window/scrollTo)
- [`Element.scrollBy()`](/de/docs/Web/API/Element/scrollBy)
- [`Window.scrollByLines()`](/de/docs/Web/API/Window/scrollByLines) {{non-standard_inline}}
- [`Window.scrollByPages()`](/de/docs/Web/API/Window/scrollByPages) {{non-standard_inline}}
