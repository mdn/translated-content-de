---
title: "Element: scrollTo() Methode"
short-title: scrollTo()
slug: Web/API/Element/scrollTo
l10n:
  sourceCommit: 96c4b1173c97edf49089240ff992fa6aa96c1751
---

{{APIRef("CSSOM view API")}}

Die **`scrollTo()`** Methode der [`Element`](/de/docs/Web/API/Element) Schnittstelle scrollt zu einem bestimmten Koordinatensatz innerhalb eines gegebenen Elements.

Diese Methode ist ein Alias für [`Element.scroll()`](/de/docs/Web/API/Element/scroll).

## Syntax

```js-nolint
scrollTo(xCoord, yCoord)
scrollTo(options)
```

### Parameter

- `xCoord`
  - : Die x-Koordinate des scrollbaren Inhalts des Elements, zu der Sie den linken Rand des Scrollbereichs des Elements scrollen möchten.
- `yCoord`
  - : Die y-Koordinate des scrollbaren Inhalts des Elements, zu der Sie den oberen Rand des Scrollbereichs des Elements scrollen möchten.
- `options`
  - : Ein Objekt, das die folgenden Eigenschaften enthält:
    - `top` {{optional_inline}}
      - : Die y-Koordinate des scrollbaren Inhalts des Elements, zu der Sie den oberen Rand des Scrollbereichs des Elements scrollen möchten. Dies entspricht dem `yCoord` Parameter.
    - `left` {{optional_inline}}
      - : Die x-Koordinate des scrollbaren Inhalts des Elements, zu der Sie den linken Rand des Scrollbereichs des Elements scrollen möchten. Dies entspricht dem `xCoord` Parameter.
    - `behavior` {{optional_inline}}
      - : Bestimmt, ob das Scrollen sofort oder sanft animiert erfolgt. Diese Option ist eine Zeichenkette, die einen der folgenden Werte haben muss:
        - `smooth`: Das Scrollen wird sanft animiert.
        - `instant`: Das Scrollen erfolgt sofort in einem Sprung.
        - `auto`: Das Scrollverhalten wird durch den berechneten Wert der {{cssxref("scroll-behavior")}} CSS-Eigenschaft des Elements bestimmt.

        Wenn weggelassen, ist der Standardwert von `behavior` `auto`.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem Objekt erfüllt wird, das die folgende Eigenschaft enthält:

- `interrupted`
  - : Ein boolescher Wert, der anzeigt, ob der Scroll-Vorgang unterbrochen wurde (`true`) oder nicht (`false`). Eine solche Unterbrechung tritt typischerweise auf, wenn ein programmatisches Scrollen im Gange ist und ein weiteres programmatisches Scrollen auf demselben Element initiiert wird, bevor das erste abgeschlossen ist.

## Beispiele

### Grundlegende Verwendung

```js
element.scrollTo(0, 1000);
```

Verwendung von `options`:

```js
element.scrollTo({
  top: 100,
  left: 100,
  behavior: "smooth",
});
```

### Reagieren auf das Ende des Scrollens

Unser [Demo der Elementmethoden](https://mdn.github.io/dom-examples/scroll-promises/element-methods/) ([siehe Quellcode](https://github.com/mdn/dom-examples/tree/main/scroll-promises/element-methods)) zeigt, wie der Promise-Rückgabewert von `scrollTo()` verwendet werden kann, um auf das Ende eines Scroll-Vorgangs zu reagieren. Diese Technik ist besonders nützlich, wenn das Scrollen sanft über die Zeit erfolgt (erreicht durch Einstellen der [`behavior`](#behavior) Option auf `smooth`, oder durch Einstellen der {{cssxref("scroll-behavior")}} Eigenschaft des scrollenden Elements auf `smooth`).

#### HTML

Unser HTML enthält ein {{htmlelement("section")}} Element mit mehreren Absätzen Inhalt und ein {{htmlelement("div")}} Element-Toolbar mit {{htmlelement("button")}} Elementen, die verschiedene Scroll-Vorgänge auf dem `<section>` auslösen.

```html
<div>
  <button class="scroll">scroll() to 1000</button>
  <button class="scrollto">scrollTo() top</button>
  <button class="scrollby">scrollBy() 200</button>
  <button class="scrollintoview">Scroll last &lt;p&gt; into view</button>
</div>

<section>...</section>
```

#### CSS

Wir geben dem `<section>` Element eine feste {{cssxref("height")}} und einen {{cssxref("overflow-y")}} Wert von `scroll`, sodass es vertikal scrollt, und setzen seine {{cssxref("scroll-behavior")}} Eigenschaft auf `smooth`, sodass alle Scroll-Vorgänge sanft über die Zeit animiert werden, anstatt sofort zu erfolgen.

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

Wir erstellen auch zwei Klassenselektoren; wenn eine `fade-out` oder `fade-in` Klasse auf ein Element angewendet wird, wird eine {{cssxref("animation")}} angewendet, sodass es sanft aus- bzw. eingeblendet wird. Wir definieren auch {{cssxref("@keyframes")}} Blöcke, um die erforderlichen {{cssxref("opacity")}} Änderungen für diese Animationen festzulegen.

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

Wir beginnen damit, Referenzen auf den `<button>` zu erhalten, der die `scrollTo()` Operation ausführt, die Toolbar `<div>` und die scrollende `<section>`:

```js
const scrollToBtn = document.querySelector(".scrollto");
const toolbar = document.querySelector("div");
const section = document.querySelector("section");
```

Als Nächstes definieren wir eine Funktion namens `isInterrupted()`, die als Reaktion auf das Ende eines Scroll-Vorgangs ausgeführt wird und einen booleschen `interrupted` Wert als Parameter nimmt. Sie protokolliert eine Nachricht in der Konsole, die anzeigt, dass das Scrollen abgeschlossen ist und ob der Vorgang unterbrochen wurde (`interrupted` ist `true`) oder nicht. Zusätzlich ruft sie, falls `interrupted` `true` ist, eine `alert()` auf, um die Unterbrechung deutlich anzuzeigen.

```js
function isInterrupted(interrupted) {
  console.log(`Scroll finished;${interrupted ? " " : " not "}interrupted`);
  if (interrupted) {
    alert("Scroll interrupted!");
  }
}
```

Wenn die Schaltfläche geklickt wird, wenden wir sofort die `fade-out` Klasse auf die Toolbar an, wodurch sie ausgeblendet wird. Dann führen wir `scrollTo(0, 0)` auf der `<section>` aus, um ihren Inhalt nach oben zu scrollen, und `awaiten` dabei die Versprechungsauflösung, während wir den `result` in einer Konstante speichern. Wenn die Versprechung erfüllt ist, rufen wir `isInterrupted()` auf, um zu melden, dass der Scroll-Vorgang abgeschlossen ist und ob er unterbrochen wurde. Schließlich wenden wir die `fade-in` Klasse auf die Toolbar an, sodass sie wieder eingeblendet wird.

```js
scrollToBtn.addEventListener("click", async () => {
  toolbar.className = "fade-out";
  const result = await section.scrollTo(0, 0);
  isInterrupted(result.interrupted);
  toolbar.className = "fade-in";
});
```

Der Code, der nicht relevant für `scrollTo()` ist, wird nicht gezeigt, um die Darstellung zu vereinfachen.

#### Ergebnis

Klicken Sie auf die Schaltflächen, um das Scrollverhalten zu sehen. Beachten Sie, wie die Toolbar ausgeblendet wird, wenn eine Schaltfläche gedrückt wird, und wieder eingeblendet wird, sobald das sanfte Scrollen beendet ist. Versuchen Sie auch, eine Schaltfläche zu drücken und dann schnell eine andere Schaltfläche zu drücken, bevor der erste Scrollvorgang abgeschlossen ist. Beachten Sie, dass in diesen Fällen das Scrollen als unterbrochen gemeldet wird.

{{EmbedGHLiveSample("dom-examples/scroll-promises/element-methods/", "100%", 620)}}

Sie können das [Demo auch in einem separaten Tab laden](https://mdn.github.io/dom-examples/scroll-promises/element-methods/) und den [Quellcode ansehen](https://github.com/mdn/dom-examples/tree/main/scroll-promises/element-methods).

#### Bemerkung zur Feature-Erkennung

Wenn Sie dieses Beispiel in einem Browser ausführen, der keine Versprechungen für Scroll-Operationen unterstützt, sind die Scroll-Operationen zwar dennoch sanft, aber die Toolbar wird nicht ausgeblendet und wieder eingeblendet, sobald der Vorgang abgeschlossen ist. Die Feature-Erkennung wird von einer Funktion namens `supportsScrollPromises()` behandelt, die eine Scroll-Operation ausführt und testet, ob deren Rückgabewert ein Versprechen ist:

```js
function supportsScrollPromises() {
  const test = section.scroll(0, 0);
  return test instanceof Promise;
}
```

Sehen Sie im [Quellcode](https://github.com/mdn/dom-examples/blob/main/scroll-promises/element-methods/index.js) nach, wie die Feature-Erkennung verwendet wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element.scrollTop`](/de/docs/Web/API/Element/scrollTop), [`Element.scrollLeft`](/de/docs/Web/API/Element/scrollLeft)
- [`Window.scrollTo()`](/de/docs/Web/API/Window/scrollTo)
