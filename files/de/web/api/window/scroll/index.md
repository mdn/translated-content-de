---
title: "Window: scroll() Methode"
short-title: scroll()
slug: Web/API/Window/scroll
l10n:
  sourceCommit: 285941521a9a7c2c1b3c443d5f785e5f663a8fc9
---

{{APIRef("CSSOM view API")}}

Die **`scroll()`** Methode der [`Window`](/de/docs/Web/API/Window) Schnittstelle scrollt das Fenster an eine bestimmte Stelle im Dokument.

## Syntax

```js-nolint
scroll(xCoord, yCoord)
scroll(options)
```

### Parameter

- `xCoord`
  - : Das Pixel entlang der horizontalen Achse des Dokuments, das in der oberen linken Ecke angezeigt werden soll.
- `yCoord`
  - : Das Pixel entlang der vertikalen Achse des Dokuments, das in der oberen linken Ecke angezeigt werden soll.
- `options`
  - : Ein Objekt, das die folgenden Eigenschaften enthält:
    - `top` {{optional_inline}}
      - : Gibt die Anzahl der Pixel entlang der Y-Achse an, die das Fenster oder Element scrollen soll.
    - `left` {{optional_inline}}
      - : Gibt die Anzahl der Pixel entlang der X-Achse an, die das Fenster oder Element scrollen soll.
    - `behavior` {{optional_inline}}
      - : Bestimmt, ob das Scrollen sofort oder animiert und sanft erfolgt. Diese Option ist ein String, der einen der folgenden Werte haben muss:
        - `smooth`: Das Scrollen animiert sanft.
        - `instant`: Das Scrollen erfolgt sofort in einem einzigen Sprung.
        - `auto`: Das Scroll-Verhalten wird durch den berechneten Wert der CSS-Eigenschaft {{cssxref("scroll-behavior")}} auf dem Element bestimmt.

        Wenn weggelassen, ist der Standardwert für `behavior` `auto`.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem Objekt erfüllt wird, das die folgende Eigenschaft enthält:

- `interrupted`
  - : Ein boolescher Wert, der angibt, ob die Scroll-Operation unterbrochen wurde (`true`) oder nicht (`false`). Eine solche Unterbrechung tritt typischerweise auf, wenn ein programmatisches Scrollen im Gange ist und ein weiteres programmatisches Scrollen auf dem Fenster initiiert wird, bevor das erste abgeschlossen ist.

## Beispiele

### Grundlegende Verwendung

```js
// Put the 100th vertical pixel at the top of the window
window.scroll(0, 100);
```

Verwendung von `options`:

```js
window.scroll({
  top: 100,
  left: 100,
  behavior: "smooth",
});
```

### Reagieren auf das Ende des Scrollens

Unser [Fenstermethoden-Demo](https://mdn.github.io/dom-examples/scroll-promises/window-methods/) ([siehe Quellcode](https://github.com/mdn/dom-examples/tree/main/scroll-promises/window-methods)) zeigt, wie der Promise-Rückgabewert von `scroll()` verwendet werden kann, um auf das Ende einer Scroll-Operation zu reagieren. Diese Technik ist hauptsächlich in Fällen nützlich, in denen das Scrollen sanft über die Zeit erfolgt (erreicht durch Setzen der [`behavior`](#behavior) Option auf `smooth` oder durch Setzen der Scroll-Eigenschaft {{cssxref("scroll-behavior")}} des scrollenden Elements auf `smooth`).

#### HTML

Unser HTML enthält mehrere Absätze von Inhalt und ein {{htmlelement("div")}} Element-Toolbar, die {{htmlelement("button")}} Elemente enthält, die verschiedene Scroll-Operationen auf dem Fenster auslösen.

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

Wir geben dem {{cssxref(":root")}} Element einen Wert der Eigenschaft {{cssxref("scroll-behavior")}} von `smooth`, damit alle Scroll-Operationen sanft über die Zeit animiert werden, anstatt sofort zu erfolgen.

```css
:root {
  scroll-behavior: smooth;
}
```

Wir erstellen auch zwei Klassen-Selektoren; wenn eine `fade-out` oder `fade-in` Klasse auf ein Element angewendet wird, wird eine {{cssxref("animation")}} angewendet, sodass es jeweils sanft ausblendet oder einblendet. Wir definieren auch {{cssxref("@keyframes")}} Blöcke, um die erforderlichen Änderungen der {{cssxref("opacity")}} für diese Animationen festzulegen.

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

Der restliche CSS-Code wird zur Kürze nicht gezeigt.

#### JavaScript

Wir beginnen damit, Referenzen zu den `<button>`, das die `scroll()`-Operation ausführt, und der Toolbar `<div>` zu holen:

```js
const scrollBtn = document.querySelector(".scroll");
const toolbar = document.querySelector("div");
```

Als nächstes definieren wir eine Funktion namens `isInterrupted()`, die dazu gedacht ist, als Antwort auf das Abschluss einer Scroll-Operation ausgeführt zu werden und die einen booleschen `interrupted` Wert als Parameter übernimmt. Sie protokolliert eine Nachricht in die Konsole, dass das Scrollen abgeschlossen ist, und gibt an, ob die Operation unterbrochen wurde (`interrupted` ist `true`) oder nicht. Darüber hinaus ruft sie, wenn `interrupted` `true` ist, ein `alert()` auf, um die Unterbrechung deutlich anzuzeigen.

```js
function isInterrupted(interrupted) {
  console.log(`Scroll finished;${interrupted ? " " : " not "}interrupted`);
  if (interrupted) {
    alert("Scroll interrupted!");
  }
}
```

Wenn der Button angeklickt wird, wenden wir unmittelbar die `fade-out` Klasse auf die Toolbar an, wodurch sie ausgeblendet wird. Wir führen dann `scroll(0, 1000)` auf dem Fenster aus, um den Inhalt um 1000 Pixel nach unten zu scrollen, und warten dabei auf die Auflösung des Promises und speichern das `result` in einer Konstante. Sobald das Promise aufgelöst wurde, rufen wir `isInterrupted()` auf, um zu melden, dass die Scroll-Operation fertig ist und ob sie unterbrochen wurde. Schließlich wenden wir die `fade-in` Klasse auf die Toolbar an, wodurch sie wieder eingeblendet wird.

```js
scrollBtn.addEventListener("click", async () => {
  toolbar.className = "fade-out";
  const result = await window.scroll(0, 1000);
  isInterrupted(result.interrupted);
  toolbar.className = "fade-in";
});
```

Der Code, der nicht relevant für `scroll()` ist, wird zur Kürze nicht gezeigt.

#### Ergebnis

Klicken Sie auf die Buttons, um das Scroll-Verhalten zu sehen. Beachten Sie, wie die Toolbar ausblendet, wenn ein Button gedrückt wird, und wieder einblendet, sobald das sanfte Scrollen abgeschlossen ist. Versuchen Sie auch, einen Button zu drücken und dann schnell einen anderen Button, bevor die erste Scroll-Operation abgeschlossen ist. Beachten Sie, wie in diesen Fällen das Scrollen als unterbrochen gemeldet wird.

{{EmbedGHLiveSample("dom-examples/scroll-promises/window-methods/", "100%", 400)}}

Sie können das [Demo auch in einem separaten Tab laden](https://mdn.github.io/dom-examples/scroll-promises/window-methods/) und den [Quellcode anzeigen](https://github.com/mdn/dom-examples/tree/main/scroll-promises/window-methods).

#### Hinweis zur Funktionserkennung

Wenn Sie dieses Beispiel in einem Browser ausführen, der keine Promises für Scroll-Operationen unterstützt, sind die Scroll-Operationen dennoch sanft, aber die Toolbar blendet sich nicht aus und dann wieder ein, wenn die Operation abgeschlossen ist. Die Funktionserkennung wird durch eine Funktion namens `supportsScrollPromises()` behandelt, die eine Scroll-Operation ausführt und testet, ob ihr Rückgabewert ein Promise ist:

```js
function supportsScrollPromises() {
  const test = window.scroll(0, 0);
  return test instanceof Promise;
}
```

Sehen Sie sich den [Quellcode](https://github.com/mdn/dom-examples/blob/main/scroll-promises/window-methods/index.js) an, um zu sehen, wie die Funktionserkennung verwendet wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Window.scrollTo()`](/de/docs/Web/API/Window/scrollTo)
- [`Window.scrollBy()`](/de/docs/Web/API/Window/scrollBy)
- [`Element.scroll()`](/de/docs/Web/API/Element/scroll)
- [`Window.scrollByLines()`](/de/docs/Web/API/Window/scrollByLines) {{non-standard_inline}}
- [`Window.scrollByPages()`](/de/docs/Web/API/Window/scrollByPages) {{non-standard_inline}}
