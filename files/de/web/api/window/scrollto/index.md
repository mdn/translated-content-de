---
title: "Window: scrollTo()-Methode"
short-title: scrollTo()
slug: Web/API/Window/scrollTo
l10n:
  sourceCommit: afcdfa050626bb7eb05ee693df8997020db9ff2e
---

{{APIRef}}

Die **`scrollTo()`**-Methode der [`Window`](/de/docs/Web/API/Window)-Schnittstelle scrollt zu einem bestimmten Koordinatensatz im Dokument.

## Syntax

```js-nolint
scrollTo(xCoord, yCoord)
scrollTo(options)
```

### Parameter

- `xCoord`
  - : Die x-Koordinate des Dokuments, zu der der linke Rand des Viewports scrollen soll.
- `yCoord`
  - : Die y-Koordinate des Dokuments, zu der der obere Rand des Viewports scrollen soll.
- `options`
  - : Ein Objekt, das die folgenden Eigenschaften enthält:
    - `top` {{optional_inline}}
      - : Die y-Koordinate des Dokuments, zu der der obere Rand des Viewports scrollen soll. Dies entspricht dem `yCoord`-Parameter.
    - `left` {{optional_inline}}
      - : Die x-Koordinate des Dokuments, zu der der linke Rand des Viewports scrollen soll. Dies entspricht dem `xCoord`-Parameter.
    - `behavior` {{optional_inline}}
      - : Bestimmt, ob das Scrollen sofort oder fließend animiert erfolgt. Diese Option ist ein String, der einen der folgenden Werte annehmen muss:
        - `smooth`: Das Scrollen wird fließend animiert.
        - `instant`: Das Scrollen erfolgt sofort in einem einzigen Sprung.
        - `auto`: Das Scrollverhalten wird durch den berechneten Wert der {{cssxref("scroll-behavior")}} CSS-Eigenschaft am Element bestimmt.

        Falls weggelassen, ist der Standardwert von `behavior` `auto`.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem Objekt erfüllt wird, das die folgende Eigenschaft enthält:

- `interrupted`
  - : Ein boolescher Wert, der angibt, ob die Scroll-Operation unterbrochen wurde (`true`) oder nicht (`false`). Eine solche Unterbrechung tritt typischerweise auf, wenn ein programmatisches Scrollen läuft und ein weiteres programmatisches Scrollen auf dem Fenster initiiert wird, bevor das erste abgeschlossen ist.

## Beispiele

### Grundlegende Verwendung

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

Unser [Fenstermethoden-Demo](https://mdn.github.io/dom-examples/scroll-promises/window-methods/) ([Quellcode ansehen](https://github.com/mdn/dom-examples/tree/main/scroll-promises/window-methods)) zeigt, wie der Promise-Rückgabewert von `scrollTo()` verwendet werden kann, um auf das Ende einer Scroll-Operation zu reagieren. Diese Technik ist vor allem in Fällen nützlich, in denen das Scrollen über die Zeit hinweg fließend erfolgt (erreicht durch Setzen der [`behavior`](#behavior)-Option auf `smooth` oder durch Setzen der {{cssxref("scroll-behavior")}}-Eigenschaft des Scrolling-Elements auf `smooth`).

#### HTML

Unser HTML enthält mehrere Absätze von Inhalten und ein {{htmlelement("div")}}-Element-Toolbar, die {{htmlelement("button")}}-Elemente enthält, die verschiedene Scroll-Operationen auf dem Fenster auslösen.

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

Wir geben dem {{cssxref(":root")}}-Element einen {{cssxref("scroll-behavior")}}-Eigenschaftswert von `smooth`, sodass alle Scroll-Operationen über die Zeit hinweg anstatt sofort fließend animiert werden.

```css
:root {
  scroll-behavior: smooth;
}
```

Wir erstellen auch zwei Klassenselektoren; wenn eine `fade-out`- oder `fade-in`-Klasse auf ein Element angewendet wird, wird eine {{cssxref("animation")}} angewendet, sodass es jeweils fließend ausgeblendet oder eingeblendet wird. Wir definieren auch {{cssxref("@keyframes")}}-Blöcke, um die erforderlichen {{cssxref("opacity")}}-Änderungen für diese Animationen zu definieren.

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

Der Rest des CSS wird aus Gründen der Kürze nicht gezeigt.

#### JavaScript

Wir beginnen, indem wir Referenzen zum `<button>` sammeln, das die `scrollTo()`-Operation ausführt und zur Toolbar-`<div>`:

```js
const scrollToBtn = document.querySelector(".scroll-to");
const toolbar = document.querySelector("div");
```

Als Nächstes definieren wir eine Funktion namens `isInterrupted()`, die entwickelt wurde, um als Reaktion auf das Beenden einer Scroll-Operation ausgeführt zu werden und einen booleschen `interrupted`-Wert als Parameter übernimmt. Sie protokolliert eine Meldung in der Konsole, um zu sagen, dass das Scrollen beendet ist und anzugeben, ob die Operation unterbrochen wurde (`interrupted` ist `true`) oder nicht. Darüber hinaus, wenn `interrupted` `true` ist, wird ein `alert()` aufgerufen, um klar die Unterbrechung anzuzeigen.

```js
function isInterrupted(interrupted) {
  console.log(`Scroll finished;${interrupted ? " " : " not "}interrupted`);
  if (interrupted) {
    alert("Scroll interrupted!");
  }
}
```

Wenn die Schaltfläche gedrückt wird, wenden wir sofort die `fade-out`-Klasse auf die Toolbar an, wodurch sie ausgeblendet wird. Wir führen dann `scrollTo(0, 0)` im Fenster aus, um seinen Inhalt nach oben zu scrollen, während wir seine Promise-Auflösung abwarten und das `result` in einer Konstante speichern. Wenn die Promise aufgelöst ist, rufen wir `isInterrupted()` auf, um zu melden, dass die Scroll-Operation abgeschlossen ist und ob sie unterbrochen wurde. Schließlich wenden wir die `fade-in`-Klasse erneut auf die Toolbar an, wodurch sie wieder eingeblendet wird.

```js
scrollToBtn.addEventListener("click", async () => {
  toolbar.className = "fade-out";
  const result = await window.scrollTo(0, 0);
  isInterrupted(result.interrupted);
  toolbar.className = "fade-in";
});
```

Der Code, der nicht relevant für `scrollTo()` ist, wird aus Gründen der Kürze nicht gezeigt.

#### Ergebnis

Klicken Sie auf die Schaltflächen, um das Scroll-Verhalten zu sehen. Beachten Sie, wie die Toolbar ausblendet, wenn eine Schaltfläche gedrückt wird, und wieder einblendet, sobald das fließende Scrollen abgeschlossen ist. Versuchen Sie auch, eine Schaltfläche zu drücken und dann schnell eine andere zu drücken, bevor die erste Scroll-Operation abgeschlossen ist. Beachten Sie, dass in diesen Fällen das Scrollen als unterbrochen gemeldet wird.

{{EmbedGHLiveSample("dom-examples/scroll-promises/window-methods/", "100%", 400)}}

Sie können auch [das Demo in einem separaten Tab laden](https://mdn.github.io/dom-examples/scroll-promises/window-methods/) und den [Quellcode ansehen](https://github.com/mdn/dom-examples/tree/main/scroll-promises/window-methods).

#### Hinweis zur Erkennung von Funktionen

Wenn Sie dieses Beispiel in einem Browser ausführen, der keine auf Promise basierenden Scroll-Operationen unterstützt, sind die Scroll-Operationen dennoch fließend, aber die Toolbar blendet nicht aus und dann wieder ein, wenn die Operation beendet ist. Die Funktionsunterstützung wird von einer Funktion namens `supportsScrollPromises()` behandelt, die eine Scroll-Operation ausführt und testet, ob ihr Rückgabewert ein Promise ist:

```js
function supportsScrollPromises() {
  const test = window.scroll(0, 0);
  return test instanceof Promise;
}
```

Sehen Sie sich den [Quellcode](https://github.com/mdn/dom-examples/blob/main/scroll-promises/window-methods/index.js) an, um zu sehen, wie die Funktionsunterstützung verwendet wird.

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
