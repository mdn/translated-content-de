---
title: "Element: scroll() Methode"
short-title: scroll()
slug: Web/API/Element/scroll
l10n:
  sourceCommit: afcdfa050626bb7eb05ee693df8997020db9ff2e
---

{{APIRef("CSSOM view API")}}

Die **`scroll()`** Methode des [`Element`](/de/docs/Web/API/Element) Interfaces scrollt zu einem bestimmten Satz von Koordinaten innerhalb eines gegebenen Elements.

## Syntax

```js-nolint
scroll(xCoord, yCoord)
scroll(options)
```

### Parameter

- `xCoord`
  - : Das Pixel entlang der horizontalen Achse des Elements, das oben links angezeigt werden soll.
- `yCoord`
  - : Das Pixel entlang der vertikalen Achse des Elements, das oben links angezeigt werden soll.
- `options`
  - : Ein Objekt, das die folgenden Eigenschaften enthält:
    - `top` {{optional_inline}}
      - : Gibt die Anzahl an Pixeln entlang der Y-Achse an, um die das Fenster oder Element gescrollt werden soll.
    - `left` {{optional_inline}}
      - : Gibt die Anzahl an Pixeln entlang der X-Achse an, um die das Fenster oder Element gescrollt werden soll.
    - `behavior` {{optional_inline}}
      - : Bestimmt, ob das Scrollen sofort oder sanft animiert erfolgt. Diese Option ist ein String, der einen der folgenden Werte annehmen muss:
        - `smooth`: Das Scrollen wird sanft animiert.
        - `instant`: Das Scrollen erfolgt sofort in einem einzigen Sprung.
        - `auto`: Das Scrollverhalten wird durch den berechneten Wert der {{cssxref("scroll-behavior")}} CSS-Eigenschaft auf dem Element bestimmt.

        Wenn weggelassen, ist der Standardwert von `behavior` `auto`.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem Objekt erfüllt wird, das die folgende Eigenschaft enthält:

- `interrupted`
  - : Ein Boolean-Wert, der anzeigt, ob der Scroll-Vorgang unterbrochen (`true`) wurde oder nicht (`false`). Eine solche Unterbrechung tritt normalerweise auf, wenn ein programmatischer Scroll-Vorgang im Gange ist und ein weiterer programmatischer Scroll-Vorgang auf demselben Element begonnen wird, bevor der erste abgeschlossen ist.

## Beispiele

### Grundlegende Verwendung

```js
// Put the 1000th vertical pixel at the top of the element
element.scroll(0, 1000);
```

Verwenden von `options`:

```js
element.scroll({
  top: 100,
  left: 100,
  behavior: "smooth",
});
```

### Reagieren auf das Ende des Scrollens

Unser [Elementmethoden-Demo](https://mdn.github.io/dom-examples/scroll-promises/element-methods/) ([Quellcode ansehen](https://github.com/mdn/dom-examples/tree/main/scroll-promises/element-methods)) zeigt, wie der Promise-Rückgabewert von `scroll()` verwendet werden kann, um auf das Ende eines Scroll-Vorgangs zu reagieren. Diese Technik ist vor allem in Fällen nützlich, in denen das Scrollen sanft über die Zeit erfolgt (erreicht durch Setzen der [`behavior`](#behavior) Option auf `smooth` oder durch Setzen der {{cssxref("scroll-behavior")}} Eigenschaft des scrollenden Elements auf `smooth`).

#### HTML

Unser HTML enthält ein {{htmlelement("section")}} Element mit mehreren Absätzen von Inhalten und ein {{htmlelement("div")}} Element-Werkzeugleiste mit {{htmlelement("button")}} Elementen, die verschiedene Scroll-Vorgänge auf der `<section>` auslösen.

```html
<div>
  <button class="scroll">scroll() to 1000</button>
  <button class="scroll-to">scrollTo() top</button>
  <button class="scroll-by">scrollBy() 200</button>
  <button class="scroll-into-view">Scroll last &lt;p&gt; into view</button>
</div>

<section>...</section>
```

#### CSS

Wir geben dem `<section>` Element eine feste {{cssxref("height")}} und einen {{cssxref("overflow-y")}} Wert von `scroll`, sodass es vertikal scrollt, und setzen seine {{cssxref("scroll-behavior")}} Eigenschaft auf `smooth`, damit alle Scroll-Vorgänge sanft über die Zeit animiert werden, anstatt sofort zu erfolgen.

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

Wir erstellen außerdem zwei Klassenselektoren; wenn eine `fade-out` oder `fade-in` Klasse auf ein Element angewendet wird, wird eine {{cssxref("animation")}} angewendet, sodass das Element sanft ausblendet oder einblendet. Außerdem definieren wir {{cssxref("@keyframes")}} Blöcke, um die notwendigen Änderungen der {{cssxref("opacity")}} für diese Animationen zu definieren.

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

Wir beginnen, indem wir Referenzen zu dem `<button>`, das den `scroll()`-Vorgang auslöst, der Werkzeugleiste `<div>` und der scrollenden `<section>` abrufen:

```js
const scrollBtn = document.querySelector(".scroll");
const toolbar = document.querySelector("div");
const section = document.querySelector("section");
```

Als nächstes definieren wir eine Funktion namens `isInterrupted()`, die so gestaltet ist, dass sie als Reaktion auf das Ende eines Scroll-Vorgangs ausgeführt wird, wobei ein boolescher `interrupted` Wert als Parameter übergeben wird. Sie protokolliert eine Meldung in die Konsole, um zu sagen, dass das Scrollen abgeschlossen ist, und zeigt an, ob der Vorgang unterbrochen wurde (`interrupted` ist `true`) oder nicht. Darüber hinaus, wenn `interrupted` wahr ist, wird ein `alert()` aufgerufen, um die Unterbrechung deutlich anzuzeigen.

```js
function isInterrupted(interrupted) {
  console.log(`Scroll finished;${interrupted ? " " : " not "}interrupted`);
  if (interrupted) {
    alert("Scroll interrupted!");
  }
}
```

Wenn der Button angeklickt wird, wird sofort die Klasse `fade-out` auf die Werkzeugleiste angewendet, wodurch sie ausgeblendet wird. Wir führen dann `scroll(0, 1000)` auf der `<section>` aus, um deren Inhalt um 1000 Pixel nach unten zu scrollen, und warten auf die Auflösung ihres Promise und speichern das `result` in einer Konstante. Wenn das Promise aufgelöst ist, rufen wir `isInterrupted()` auf, um zu melden, dass der Scroll-Vorgang beendet ist und ob er unterbrochen wurde. Schließlich wenden wir die Klasse `fade-in` auf die Werkzeugleiste an, wodurch sie wieder eingeblendet wird.

```js
scrollBtn.addEventListener("click", async () => {
  toolbar.className = "fade-out";
  const result = await section.scroll(0, 1000);
  isInterrupted(result.interrupted);
  toolbar.className = "fade-in";
});
```

Der nicht relevante Code für `scroll()` wird aus Gründen der Kürze nicht gezeigt.

#### Ergebnis

Klicken Sie auf die Buttons, um das Scroll-Verhalten zu sehen. Beachten Sie, wie die Werkzeugleiste beim Drücken eines Buttons ausblendet und nachdem das sanfte Scrollen beendet ist, wieder einblendet. Versuchen Sie auch, einen Button zu drücken und dann schnell einen anderen Button zu drücken, bevor der erste Scroll-Vorgang abgeschlossen ist. Beachten Sie, dass in diesen Fällen das Scrollen als unterbrochen gemeldet wird.

{{EmbedGHLiveSample("dom-examples/scroll-promises/element-methods/", "100%", 620)}}

Sie können das [Demo auch in einem separaten Tab laden](https://mdn.github.io/dom-examples/scroll-promises/element-methods/) und den [Quellcode ansehen](https://github.com/mdn/dom-examples/tree/main/scroll-promises/element-methods).

#### Anmerkung zur Feature-Erkennung

Wenn Sie dieses Beispiel in einem Browser ausführen, der scrollende Operationen ohne Rückgabe von Promises nicht unterstützt, sind die Scroll-Operationen zwar trotzdem sanft, aber die Werkzeugleiste blendet nicht aus und wieder ein, sobald der Vorgang beendet ist. Die Feature-Erkennung wird von einer Funktion namens `supportsScrollPromises()` behandelt, die einen Scroll-Vorgang ausführt und testet, ob der Rückgabewert ein Promise ist:

```js
function supportsScrollPromises() {
  const test = section.scroll(0, 0);
  return test instanceof Promise;
}
```

Sehen Sie sich den [Quellcode](https://github.com/mdn/dom-examples/blob/main/scroll-promises/element-methods/index.js) an, um zu sehen, wie die Feature-Erkennung verwendet wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
