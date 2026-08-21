---
title: "Window: scrollTo() Methode"
short-title: scrollTo()
slug: Web/API/Window/scrollTo
l10n:
  sourceCommit: 285941521a9a7c2c1b3c443d5f785e5f663a8fc9
---

{{APIRef("CSSOM view API")}}

Die **`scrollTo()`** Methode der [`Window`](/de/docs/Web/API/Window) Schnittstelle scrollt zu einem bestimmten Satz von Koordinaten im Dokument.

## Syntax

```js-nolint
scrollTo(xCoord, yCoord)
scrollTo(options)
```

### Parameter

- `xCoord`
  - : Die x-Koordinate des Dokuments, zu der der linke Rand des Ansichtsfensters scrollen soll.
- `yCoord`
  - : Die y-Koordinate des Dokuments, zu der der obere Rand des Ansichtsfensters scrollen soll.
- `options`
  - : Ein Objekt mit den folgenden Eigenschaften:
    - `top` {{optional_inline}}
      - : Die y-Koordinate des Dokuments, zu der der obere Rand des Ansichtsfensters scrollen soll. Dies entspricht dem `yCoord`-Parameter.
    - `left` {{optional_inline}}
      - : Die x-Koordinate des Dokuments, zu der der linke Rand des Ansichtsfensters scrollen soll. Dies entspricht dem `xCoord`-Parameter.
    - `behavior` {{optional_inline}}
      - : Bestimmt, ob das Scrollen sofort oder sanft animiert erfolgt. Diese Option ist ein String, der einen der folgenden Werte haben muss:
        - `smooth`: Das Scrollen animiert sanft.
        - `instant`: Das Scrollen erfolgt sofort in einem einzigen Sprung.
        - `auto`: Das Scroll-Verhalten wird durch den berechneten Wert der {{cssxref("scroll-behavior")}} CSS-Eigenschaft des Elements bestimmt.

        Wenn weggelassen, ist der Standardwert von `behavior` `auto`.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem Objekt erfüllt wird, das folgende Eigenschaft enthält:

- `interrupted`
  - : Ein boolescher Wert, der angibt, ob die Scroll-Operation unterbrochen wurde (`true`) oder nicht (`false`). Eine solche Unterbrechung tritt typischerweise auf, wenn ein programmatisches Scrollen im Gange ist und ein weiteres programmatisches Scrollen auf dem Fenster initiiert wird, bevor das erste abgeschlossen ist.

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

Unsere [Fenstermethoden-Demo](https://mdn.github.io/dom-examples/scroll-promises/window-methods/) ([Quellcode ansehen](https://github.com/mdn/dom-examples/tree/main/scroll-promises/window-methods)) zeigt, wie der Promise-Rückgabewert von `scrollTo()` verwendet werden kann, um auf das Ende einer Scrolloperation zu reagieren. Diese Technik ist überwiegend nützlich in Fällen, in denen das Scrollen sanft über die Zeit erfolgt (erreicht, indem die [`behavior`](#behavior) Option auf `smooth` gesetzt wird oder indem die {{cssxref("scroll-behavior")}} Eigenschaft des scrollenden Elements auf `smooth` gesetzt wird).

#### HTML

Unser HTML enthält mehrere Absätze von Inhalten und ein {{htmlelement("div")}} Elementwerkzeugleiste, das {{htmlelement("button")}} Elemente enthält, die verschiedene Scrolloperationen auf dem Fenster auslösen.

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

Wir geben dem {{cssxref(":root")}} Element einen {{cssxref("scroll-behavior")}} Eigenschaftswert von `smooth`, so dass alle Scrolloperationen sanft animiert werden, anstatt sofort.

```css
:root {
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

Der Rest des CSS wird aus Gründen der Kürze nicht gezeigt.

#### JavaScript

Wir beginnen damit, Referenzen zu dem `<button>`, das die `scrollTo()` Operation ausführt, und der Werkzeugleiste `<div>` abzurufen:

```js
const scrollToBtn = document.querySelector(".scroll-to");
const toolbar = document.querySelector("div");
```

Als nächstes definieren wir eine Funktion namens `isInterrupted()`, die als Reaktion auf das Ende einer Scrolloperation ausgeführt wird und einen booleschen `interrupted` Wert als Parameter nimmt. Sie protokolliert eine Nachricht in der Konsole, um anzugeben, dass das Scrollen beendet ist, und ob die Operation unterbrochen wurde (`interrupted` ist `true`) oder nicht. Darüber hinaus ruft sie, wenn `interrupted` `true` ist, ein `alert()` auf, um die Unterbrechung deutlich zu kennzeichnen.

```js
function isInterrupted(interrupted) {
  console.log(`Scroll finished;${interrupted ? " " : " not "}interrupted`);
  if (interrupted) {
    alert("Scroll interrupted!");
  }
}
```

Wenn der Button geklickt wird, wenden wir sofort die `fade-out` Klasse auf die Werkzeugleiste an, wodurch sie ausblendet. Dann führen wir `scrollTo(0, 0)` auf dem Fenster aus, um den Inhalt nach oben zu scrollen, warten auf die Promise-Auflösung und speichern das `result` in einer Konstanten. Wenn das Promise aufgelöst ist, rufen wir `isInterrupted()` auf, um zu melden, dass die Scrolloperation beendet ist und ob sie unterbrochen wurde. Schließlich wenden wir die `fade-in` Klasse auf die Werkzeugleiste an, wodurch sie wieder einblendet.

```js
scrollToBtn.addEventListener("click", async () => {
  toolbar.className = "fade-out";
  const result = await window.scrollTo(0, 0);
  isInterrupted(result.interrupted);
  toolbar.className = "fade-in";
});
```

Der für `scrollTo()` nicht relevante Code wird aus Gründen der Kürze nicht gezeigt.

#### Ergebnis

Klicken Sie auf die Tasten, um das Scrollverhalten zu sehen. Beachten Sie, wie die Werkzeugleiste ausblendet, wenn eine Taste gedrückt wird und wieder einblendet, sobald das sanfte Scrollen beendet ist. Versuchen Sie auch, eine Taste zu drücken und dann schnell eine andere Taste zu drücken, bevor die erste Scrolloperation beendet ist. Beachten Sie, wie in diesen Fällen das Scrollen als unterbrochen gemeldet wird.

{{EmbedGHLiveSample("dom-examples/scroll-promises/window-methods/", "100%", 400)}}

Sie können die [Demo auch in einem separaten Tab laden](https://mdn.github.io/dom-examples/scroll-promises/window-methods/) und den [Quellcode anzeigen](https://github.com/mdn/dom-examples/tree/main/scroll-promises/window-methods).

#### Anmerkung zur Feature-Erkennung

Wenn Sie dieses Beispiel in einem Browser ausführen, der keine Promise-zurückgebenden Scrolloperationen unterstützt, sind die Scrolloperationen weiterhin sanft, aber die Werkzeugleiste blendet nicht aus und dann wieder ein, sobald die Operation beendet ist. Die Feature-Erkennung wird von einer Funktion namens `supportsScrollPromises()` gehandhabt, die eine Scrolloperation ausführt und testet, ob ihr Rückgabewert ein Promise ist:

```js
function supportsScrollPromises() {
  const test = window.scroll(0, 0);
  return test instanceof Promise;
}
```

Schauen Sie sich den [Quellcode](https://github.com/mdn/dom-examples/blob/main/scroll-promises/window-methods/index.js) an, um zu sehen, wie die Feature-Erkennung verwendet wird.

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
