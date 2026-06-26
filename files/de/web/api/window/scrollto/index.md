---
title: "Window: scrollTo() Method"
short-title: scrollTo()
slug: Web/API/Window/scrollTo
l10n:
  sourceCommit: 96c4b1173c97edf49089240ff992fa6aa96c1751
---

{{APIRef}}

Die **`scrollTo()`**-Methode des [`Window`](/de/docs/Web/API/Window)-Interfaces scrollt zu einem bestimmten Satz von Koordinaten im Dokument.

## Syntax

```js-nolint
scrollTo(xCoord, yCoord)
scrollTo(options)
```

### Parameter

- `xCoord`
  - : Die x-Koordinate des Dokuments, zu der der linke Rand des Ansichtsbereichs scrollen soll.
- `yCoord`
  - : Die y-Koordinate des Dokuments, zu der der obere Rand des Ansichtsbereichs scrollen soll.
- `options`
  - : Ein Objekt mit den folgenden Eigenschaften:
    - `top` {{optional_inline}}
      - : Die y-Koordinate des Dokuments, zu der der obere Rand des Ansichtsbereichs scrollen soll. Dies entspricht dem `yCoord`-Parameter.
    - `left` {{optional_inline}}
      - : Die x-Koordinate des Dokuments, zu der der linke Rand des Ansichtsbereichs scrollen soll. Dies entspricht dem `xCoord`-Parameter.
    - `behavior` {{optional_inline}}
      - : Bestimmt, ob das Scrollen sofort oder sanft animiert erfolgt. Diese Option ist ein String, der einen der folgenden Werte annehmen muss:
        - `smooth`: Das Scrollen wird sanft animiert.
        - `instant`: Das Scrollen erfolgt sofort in einem Sprung.
        - `auto`: Das Scrollverhalten wird durch den berechneten Wert der {{cssxref("scroll-behavior")}} CSS-Eigenschaft auf dem Element bestimmt.

        Wenn ausgelassen, ist der Standardwert von `behavior` `auto`.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem Objekt erfüllt wird, das die folgende Eigenschaft enthält:

- `interrupted`
  - : Ein booleaner Wert, der angibt, ob die Scroll-Operation unterbrochen wurde (`true`) oder nicht (`false`). Eine solche Unterbrechung tritt typischerweise auf, wenn ein programmatisches Scrollen im Gange ist und ein weiteres programmatisches Scrollen auf dem Fenster initiiert wird, bevor das erste beendet ist.

## Beispiele

### Grundlegende Nutzung

```js
window.scrollTo(0, 1000);
```

Verwendung von `options`:

```js
window.scrollTo({
  top: 100,
  left: 100,
  behavior: "smooth",
});
```

### Reagieren auf das Ende des Scrollens

Unser [Fenstermethoden-Demo](https://mdn.github.io/dom-examples/scroll-promises/window-methods/) ([Quellcode ansehen](https://github.com/mdn/dom-examples/tree/main/scroll-promises/window-methods)) demonstriert, wie der zurückgegebene Promise-Wert von `scrollTo()` verwendet werden kann, um auf das Ende einer Scroll-Operation zu reagieren. Diese Technik ist insbesondere nützlich in Fällen, in denen das Scrollen sanft über die Zeit erfolgt (durch Setzen der [`behavior`](#behavior)-Option auf `smooth`, oder durch Setzen der CSS-Eigenschaft des scrollenden Elements {{cssxref("scroll-behavior")}} auf `smooth`).

#### HTML

Unser HTML enthält mehrere Absätze mit Inhalt und ein {{htmlelement("div")}}-Element als Toolbar, das {{htmlelement("button")}}-Elemente enthält, die verschiedene Scroll-Operationen auf dem Fenster auslösen.

```html
<div>
  <button class="scroll">scroll() to 1000</button>
  <button class="scrollto">scrollTo() top</button>
  <button class="scrollby">scrollBy() 200</button>
</div>

<p>...</p>

<p>...</p>

...
```

#### CSS

Wir geben dem {{cssxref(":root")}}-Element einen Wert für die {{cssxref("scroll-behavior")}}-Eigenschaft von `smooth`, sodass alle Scroll-Operationen sanft animiert werden anstelle von sofort.

```css
:root {
  scroll-behavior: smooth;
}
```

Wir erstellen auch zwei Klassenselektoren; wenn eine `fade-out`- oder `fade-in`-Klasse auf ein Element angewendet wird, wird eine {{cssxref("animation")}} angewendet, sodass es sanft ausgeblendet oder eingeblendet wird. Wir definieren auch {{cssxref("@keyframes")}}-Blöcke, um die erforderlichen {{cssxref("opacity")}}-Änderungen für diese Animationen festzulegen.

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

Der Rest des CSS wird der Kürze halber nicht gezeigt.

#### JavaScript

Wir beginnen mit dem Erfassen von Referenzen zu dem `<button>`, das die `scrollTo()`-Operation ausführt, und der Toolbar `<div>`:

```js
const scrollToBtn = document.querySelector(".scrollto");
const toolbar = document.querySelector("div");
```

Als Nächstes definieren wir eine Funktion namens `isInterrupted()`, die ausgeführt werden soll, als Reaktion darauf, dass eine Scroll-Operation abgeschlossen ist. Sie nimmt einen booleanen `interrupted`-Wert als Parameter entgegen. Sie protokolliert eine Nachricht in die Konsole, um zu sagen, dass das Scrollen abgeschlossen ist und ob die Operation unterbrochen wurde (`interrupted` ist `true`) oder nicht. Darüber hinaus ruft sie, wenn `interrupted` `true` ist, ein `alert()` auf, um die Unterbrechung klar anzuzeigen.

```js
function isInterrupted(interrupted) {
  console.log(`Scroll finished;${interrupted ? " " : " not "}interrupted`);
  if (interrupted) {
    alert("Scroll interrupted!");
  }
}
```

Wenn die Schaltfläche geklickt wird, wenden wir sofort die `fade-out`-Klasse auf die Toolbar an, wodurch sie ausgeblendet wird. Wir führen dann `scrollTo(0, 0)` auf dem Fenster aus, um den Inhalt nach oben zu scrollen, `await`en seine Promise-Auflösung dabei und speichern das `result` in einer Konstante. Sobald der Promise aufgelöst wurde, rufen wir `isInterrupted()` auf, um zu berichten, dass die Scroll-Operation abgeschlossen ist und ob sie unterbrochen wurde. Schließlich wenden wir die `fade-in`-Klasse auf die Toolbar an, wodurch sie wieder eingeblendet wird.

```js
scrollToBtn.addEventListener("click", async () => {
  toolbar.className = "fade-out";
  const result = await window.scrollTo(0, 0);
  isInterrupted(result.interrupted);
  toolbar.className = "fade-in";
});
```

Der nicht relevante Code für `scrollTo()` wird der Kürze halber nicht gezeigt.

#### Ergebnis

Klicken Sie die Schaltflächen an, um das Scrollverhalten zu sehen. Beachten Sie, wie die Toolbar ausgeblendet wird, wenn eine Schaltfläche gedrückt wird, und erneut eingeblendet wird, wenn das sanfte Scrollen abgeschlossen ist. Versuchen Sie auch, eine Schaltfläche zu drücken und dann schnell eine weitere, bevor die erste Scroll-Operation abgeschlossen ist. Beachten Sie, wie in diesen Fällen das Scrollen als unterbrochen gemeldet wird.

{{EmbedGHLiveSample("dom-examples/scroll-promises/window-methods/", "100%", 400)}}

Sie können das [Demo auch in einem separaten Tab laden](https://mdn.github.io/dom-examples/scroll-promises/window-methods/) und den [Quellcode ansehen](https://github.com/mdn/dom-examples/tree/main/scroll-promises/window-methods).

#### Hinweis zur Merkmalserkennung

Wenn Sie dieses Beispiel in einem Browser ausführen, der keine Promise-zurückgebenden Scroll-Operationen unterstützt, sind die Scroll-Operationen dennoch sanft, aber die Toolbar blendet sich nicht aus und wieder ein, sobald die Operation abgeschlossen ist. Die Merkmalserkennung wird von einer Funktion namens `supportsScrollPromises()` gehandhabt, die eine Scroll-Operation ausführt und testet, ob deren Rückgabewert ein Promise ist:

```js
function supportsScrollPromises() {
  const test = window.scroll(0, 0);
  return test instanceof Promise;
}
```

Schauen Sie sich den [Quellcode](https://github.com/mdn/dom-examples/blob/main/scroll-promises/window-methods/index.js) an, um zu sehen, wie die Merkmalserkennung verwendet wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Window.scroll()`](/de/docs/Web/API/Window/scroll)
- [`Window.scrollBy()`](/de/docs/Web/API/Window/scrollBy)
- [`Element.scrollTo()`](/de/docs/Web/API/Element/scrollTo)
- [`Window.scrollByLines()`](/de/docs/Web/API/Window/scrollByLines) {{non-standard_inline}}
- [`Window.scrollByPages()`](/de/docs/Web/API/Window/scrollByPages) {{non-standard_inline}}
