---
title: "Element: scrollBy() Methode"
short-title: scrollBy()
slug: Web/API/Element/scrollBy
l10n:
  sourceCommit: afcdfa050626bb7eb05ee693df8997020db9ff2e
---

{{APIRef("CSSOM view API")}}

Die **`scrollBy()`** Methode der [`Element`](/de/docs/Web/API/Element)-Schnittstelle scrollt ein Element um den angegebenen Betrag.

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
      - : Gibt die Anzahl der Pixel entlang der Y-Achse an, um die das Fenster oder Element gescrollt werden soll.
    - `left` {{optional_inline}}
      - : Gibt die Anzahl der Pixel entlang der X-Achse an, um die das Fenster oder Element gescrollt werden soll.
    - `behavior` {{optional_inline}}
      - : Bestimmt, ob das Scrollen sofort oder sanft animiert erfolgt. Diese Option ist ein String, der einen der folgenden Werte annehmen muss:
        - `smooth`: Das Scrollen wird sanft animiert.
        - `instant`: Das Scrollen erfolgt sofort in einem einzigen Sprung.
        - `auto`: Das Scrollverhalten wird durch den berechneten Wert der {{cssxref("scroll-behavior")}} CSS-Eigenschaft des Elements bestimmt.

        Wenn `behavior` weggelassen wird, ist der Standardwert `auto`.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem Objekt erfüllt wird, das die folgende Eigenschaft enthält:

- `interrupted`
  - : Ein boolescher Wert, der angibt, ob die Scroll-Operation unterbrochen wurde (`true`) oder nicht (`false`). Eine solche Unterbrechung tritt typischerweise auf, wenn ein programmatisches Scrollen im Gange ist und ein weiteres programmatisches Scrollen auf dem gleichen Element initiiert wird, bevor das erste abgeschlossen ist.

## Beispiele

### Grundlegende Nutzung

```js
// scroll an element
element.scrollBy(300, 300);
```

Verwendung von `options`:

```js
element.scrollBy({
  top: 100,
  left: 100,
  behavior: "smooth",
});
```

### Reagieren auf das Ende des Scrollens

Unser [Element-Methoden-Demo](https://mdn.github.io/dom-examples/scroll-promises/element-methods/) ([siehe Quellcode](https://github.com/mdn/dom-examples/tree/main/scroll-promises/element-methods)) zeigt, wie der Promise-Rückgabewert von `scrollBy()` verwendet werden kann, um auf das Ende einer Scroll-Operation zu reagieren. Diese Technik ist hauptsächlich in Fällen nützlich, in denen das Scrollen sanft über die Zeit erfolgt (erreicht durch Einstellen der [`behavior`](#behavior) Option auf `smooth`, oder durch Setzen der {{cssxref("scroll-behavior")}} Eigenschaft des scrollenden Elements auf `smooth`).

#### HTML

Unser HTML umfasst ein {{htmlelement("section")}}-Element, das mehrere Absätze von Inhalt enthält, und ein {{htmlelement("div")}}-Element-Toolbar, die {{htmlelement("button")}}-Elemente enthält, die verschiedene Scroll-Operationen auf dem `<section>` auslösen.

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

Wir geben dem `<section>` Element eine feste {{cssxref("height")}} und einen {{cssxref("overflow-y")}} Wert von `scroll`, sodass es vertikal scrollt, und setzen seine {{cssxref("scroll-behavior")}} Eigenschaft auf `smooth`, sodass alle Scroll-Operationen im Laufe der Zeit sanft anstatt sofort animiert werden.

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

Wir erstellen auch zwei Klassen-Selektoren; wenn eine `fade-out` oder `fade-in` Klasse auf ein Element angewendet wird, wird eine {{cssxref("animation")}} angewendet, sodass es sanft aus- bzw. einblendet. Wir definieren auch {{cssxref("@keyframes")}} Blöcke, um die erforderlichen {{cssxref("opacity")}} Änderungen für diese Animationen zu definieren.

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

Der restliche CSS-Code wird aus Gründen der Kürze nicht gezeigt.

#### JavaScript

Wir beginnen damit, Referenzen zum `<button>`, das die `scrollBy()` Operation ausführt, zur Toolbar `<div>` und zur scrollenden `<section>` zu ziehen:

```js
const scrollByBtn = document.querySelector(".scroll-by");
const toolbar = document.querySelector("div");
const section = document.querySelector("section");
```

Als Nächstes definieren wir eine Funktion namens `isInterrupted()`, die als Antwort auf das Beenden einer Scroll-Operation ausgeführt wird und einen booleschen `interrupted` Wert als Parameter annimmt. Sie protokolliert eine Nachricht in die Konsole, um zu sagen, dass das Scrollen beendet ist und anzuzeigen, ob die Operation unterbrochen wurde (`interrupted` ist `true`) oder nicht. Zusätzlich, wenn `interrupted` `true` ist, wird ein `alert()` aufgerufen, um die Unterbrechung deutlich anzuzeigen.

```js
function isInterrupted(interrupted) {
  console.log(`Scroll finished;${interrupted ? " " : " not "}interrupted`);
  if (interrupted) {
    alert("Scroll interrupted!");
  }
}
```

Wenn die Taste gedrückt wird, wenden wir sofort die `fade-out` Klasse auf die Toolbar an, sodass sie ausblendet. Wir führen dann `scrollBy(0, 200)` auf dem `<section>` aus, um dessen Inhalt um 200 Pixel nach unten zu scrollen, warten auf die Auflösung des Promises, während wir dies tun, und speichern das `Ergebnis` in einer Konstante. Wenn das Promise aufgelöst ist, rufen wir `isInterrupted()` auf, um zu melden, dass die Scroll-Operation beendet ist und ob sie unterbrochen wurde. Schließlich wenden wir die `fade-in` Klasse auf die Toolbar an, sodass sie wieder einblendet.

```js
scrollByBtn.addEventListener("click", async () => {
  toolbar.className = "fade-out";
  const result = await section.scrollBy(0, 200);
  isInterrupted(result.interrupted);
  toolbar.className = "fade-in";
});
```

Der Code, der nicht relevant für `scrollBy()` ist, wird aus Gründen der Kürze nicht gezeigt.

#### Ergebnis

Klicken Sie auf die Schaltflächen, um das Scrollverhalten zu sehen. Beachten Sie, wie die Toolbar ausblendet, wenn eine Schaltfläche gedrückt wird, und wieder einblendet, sobald das sanfte Scrollen beendet ist. Versuchen Sie auch, eine Schaltfläche zu drücken und dann schnell eine andere zu drücken, bevor die erste Scroll-Operation abgeschlossen ist. Beachten Sie, wie in diesen Fällen das Scrollen als unterbrochen gemeldet wird.

{{EmbedGHLiveSample("dom-examples/scroll-promises/element-methods/", "100%", 620)}}

Sie können auch [das Demo in einem separaten Tab laden](https://mdn.github.io/dom-examples/scroll-promises/element-methods/) und den [Quellcode einsehen](https://github.com/mdn/dom-examples/tree/main/scroll-promises/element-methods).

#### Hinweis zur Feature-Erkennung

Wenn Sie dieses Beispiel in einem Browser ausführen, der keine Promise-zurückgebenden Scroll-Operationen unterstützt, sind die Scroll-Operationen trotzdem sanft, aber die Toolbar blendet nicht aus und dann wieder ein, sobald die Operation beendet ist. Die Featureerkennung wird von einer Funktion namens `supportsScrollPromises()` verwaltet, die eine Scroll-Operation ausführt und testet, ob der Rückgabewert ein Promise ist:

```js
function supportsScrollPromises() {
  const test = section.scroll(0, 0);
  return test instanceof Promise;
}
```

Sehen Sie sich den [Quellcode](https://github.com/mdn/dom-examples/blob/main/scroll-promises/element-methods/index.js) an, um zu sehen, wie die Featureerkennung verwendet wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
