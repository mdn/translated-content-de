---
title: "Window: scroll() Methode"
short-title: scroll()
slug: Web/API/Window/scroll
l10n:
  sourceCommit: 96c4b1173c97edf49089240ff992fa6aa96c1751
---

{{APIRef}}

Die **`scroll()`** Methode des [`Window`](/de/docs/Web/API/Window) Interfaces scrollt das Fenster zu einer bestimmten Stelle im Dokument.

## Syntax

```js-nolint
scroll(xCoord, yCoord)
scroll(options)
```

### Parameter

- `xCoord`
  - : Das Pixel entlang der horizontalen Achse des Dokuments, das oben links angezeigt werden soll.
- `yCoord`
  - : Das Pixel entlang der vertikalen Achse des Dokuments, das oben links angezeigt werden soll.
- `options`
  - : Ein Objekt, das die folgenden Eigenschaften enthält:
    - `top` {{optional_inline}}
      - : Gibt die Anzahl der Pixel entlang der Y-Achse an, um die das Fenster oder Element gescrollt werden soll.
    - `left` {{optional_inline}}
      - : Gibt die Anzahl der Pixel entlang der X-Achse an, um die das Fenster oder Element gescrollt werden soll.
    - `behavior` {{optional_inline}}
      - : Bestimmt, ob das Scrollen sofort erfolgt oder sanft animiert wird. Diese Option ist eine Zeichenkette, die einen der folgenden Werte haben muss:
        - `smooth`: Das Scrollen wird sanft animiert.
        - `instant`: Das Scrollen erfolgt sofort in einem Sprung.
        - `auto`: Das Scroll-Verhalten wird durch den berechneten Wert der {{cssxref("scroll-behavior")}} CSS-Eigenschaft des Elements bestimmt.

        Wenn weggelassen, ist der Standardwert von `behavior` `auto`.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem Objekt erfüllt wird, das die folgende Eigenschaft enthält:

- `interrupted`
  - : Ein boolescher Wert, der angibt, ob der Scroll-Vorgang unterbrochen wurde (`true`) oder nicht (`false`). Eine solche Unterbrechung tritt typischerweise auf, wenn ein programmatisches Scrollen im Gange ist und ein weiteres programmatisches Scrollen auf dem Fenster initiiert wird, bevor das erste beendet ist.

## Beispiele

### Grundlegende Nutzung

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

Unser [window methods demo](https://mdn.github.io/dom-examples/scroll-promises/window-methods/) ([Quellcode ansehen](https://github.com/mdn/dom-examples/tree/main/scroll-promises/window-methods)) demonstriert, wie der Versprechen-Rückgabewert von `scroll()` verwendet werden kann, um auf das Ende eines Scroll-Vorgangs zu reagieren. Diese Technik ist besonders nützlich in Fällen, in denen das Scrollen sanft über die Zeit erfolgt (erreicht durch Setzen der [`behavior`](#behavior) Option auf `smooth` oder indem die {{cssxref("scroll-behavior")}} Eigenschaft des scrollenden Elements auf `smooth` gesetzt wird).

#### HTML

Unser HTML beinhaltet mehrere Absätze von Inhalten und eine {{htmlelement("div")}}-Element-Werkzeugleiste, die {{htmlelement("button")}}-Elemente enthält, die verschiedene Scroll-Vorgänge auf dem Fenster auslösen.

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

Wir geben dem {{cssxref(":root")}}-Element einen {{cssxref("scroll-behavior")}} Eigenschaftswert von `smooth`, sodass alle Scroll-Vorgänge sanft über die Zeit animiert werden, anstatt sofort.

```css
:root {
  scroll-behavior: smooth;
}
```

Wir erstellen auch zwei Klassenselektoren; wenn eine `fade-out` oder `fade-in` Klasse auf ein Element angewendet wird, wird eine {{cssxref("animation")}} angewendet, damit es sanft aus- oder eingeblendet wird. Wir definieren auch {{cssxref("@keyframes")}} Blöcke, um die erforderlichen {{cssxref("opacity")}} Änderungen für diese Animationen zu definieren.

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

Der Rest des CSS wird aus Kürze nicht gezeigt.

#### JavaScript

Wir beginnen mit dem Abrufen von Referenzen zu den `<button>`, die die `scroll()`-Operation ausführt und der Werkzeugleisten-`<div>`:

```js
const scrollBtn = document.querySelector(".scroll");
const toolbar = document.querySelector("div");
```

Als nächstes definieren wir eine Funktion namens `isInterrupted()`, die dazu gedacht ist, als Antwort auf die Beendigung eines Scroll-Vorgangs ausgeführt zu werden. Sie nimmt einen booleschen `interrupted` Wert als Parameter. Sie schreibt eine Meldung in die Konsole, um zu sagen, dass das Scrollen beendet ist und anzugeben, ob der Vorgang unterbrochen wurde (`interrupted` ist `true`) oder nicht. Zusätzlich wird, wenn `interrupted` `true` ist, ein `alert()` aufgerufen, um die Unterbrechung deutlich anzuzeigen.

```js
function isInterrupted(interrupted) {
  console.log(`Scroll finished;${interrupted ? " " : " not "}interrupted`);
  if (interrupted) {
    alert("Scroll interrupted!");
  }
}
```

Wenn der Button geklickt wird, wenden wir sofort die `fade-out` Klasse auf die Werkzeugleiste an, was dazu führt, dass sie ausblendet. Wir führen dann `scroll(0, 1000)` auf dem Fenster aus, um seinen Inhalt um 1000 Pixel nach unten zu scrollen, `awaiten` die Auflösung des Versprechens dabei und speichern das `result` in einer Konstante. Wenn das Versprechen aufgelöst ist, rufen wir `isInterrupted()` auf, um zu melden, dass der Scroll-Vorgang beendet ist und ob er unterbrochen wurde. Schließlich wenden wir die `fade-in` Klasse auf die Werkzeugleiste an, wodurch sie wieder eingeblendet wird.

```js
scrollBtn.addEventListener("click", async () => {
  toolbar.className = "fade-out";
  const result = await window.scroll(0, 1000);
  isInterrupted(result.interrupted);
  toolbar.className = "fade-in";
});
```

Der Code, der nicht relevant für `scroll()` ist, wird aus Kürze nicht gezeigt.

#### Ergebnis

Klicken Sie auf die Buttons, um das Scroll-Verhalten zu sehen. Beachten Sie, wie die Werkzeugleiste ausblendet, wenn ein Button gedrückt wird, und wieder eingeblendet wird, sobald das sanfte Scrollen beendet ist. Versuchen Sie auch, einen Button zu drücken und dann schnell einen weiteren zu drücken, bevor der erste Scroll-Vorgang beendet ist. Beachten Sie, wie in diesen Fällen das Scrollen als unterbrochen gemeldet wird.

{{EmbedGHLiveSample("dom-examples/scroll-promises/window-methods/", "100%", 400)}}

Sie können die [Demo auch in einem separaten Tab laden](https://mdn.github.io/dom-examples/scroll-promises/window-methods/) und den [Quellcode ansehen](https://github.com/mdn/dom-examples/tree/main/scroll-promises/window-methods).

#### Hinweis zur Feature-Erkennung

Wenn Sie dieses Beispiel in einem Browser ausführen, der keine Versprechen-rückgebenden Scroll-Operationen unterstützt, sind die Scroll-Operationen immer noch sanft, aber die Werkzeugleiste blendet nicht aus und dann wieder ein, sobald der Vorgang beendet ist. Die Merkmalserkennung wird von einer Funktion namens `supportsScrollPromises()` gehandhabt, die eine Scroll-Operation ausführt und testet, ob ihr Rückgabewert ein Versprechen ist:

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

- [`Window.scrollTo()`](/de/docs/Web/API/Window/scrollTo)
- [`Window.scrollBy()`](/de/docs/Web/API/Window/scrollBy)
- [`Element.scroll()`](/de/docs/Web/API/Element/scroll)
- [`Window.scrollByLines()`](/de/docs/Web/API/Window/scrollByLines) {{non-standard_inline}}
- [`Window.scrollByPages()`](/de/docs/Web/API/Window/scrollByPages) {{non-standard_inline}}
