---
title: "Fenster: scrollBy() Methode"
short-title: scrollBy()
slug: Web/API/Window/scrollBy
l10n:
  sourceCommit: afcdfa050626bb7eb05ee693df8997020db9ff2e
---

{{APIRef}}

Die **`scrollBy()`** Methode der [`Window`](/de/docs/Web/API/Window) Schnittstelle scrollt das Dokument im Fenster um den angegebenen Betrag.

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
  - : Ein Objekt mit den folgenden Eigenschaften:
    - `top` {{optional_inline}}
      - : Gibt die Anzahl der Pixel entlang der Y-Achse an, um die das Fenster oder Element gescrollt werden soll.
    - `left` {{optional_inline}}
      - : Gibt die Anzahl der Pixel entlang der X-Achse an, um die das Fenster oder Element gescrollt werden soll.
    - `behavior` {{optional_inline}}
      - : Bestimmt, ob das Scrollen sofort oder animiert erfolgt. Diese Option ist ein String, der einen der folgenden Werte annehmen muss:
        - `smooth`: Das Scrollen animiert sich reibungslos.
        - `instant`: Das Scrollen erfolgt sofort in einem Sprung.
        - `auto`: Das Scrollverhalten wird durch den berechneten Wert der {{cssxref("scroll-behavior")}} CSS-Eigenschaft auf dem Element bestimmt.

        Wenn weggelassen, ist der Standardwert von `behavior` `auto`.

### Rückgabewert

Ein {{jsxref("Promise")}}, das sich mit einem Objekt erfüllt, das die folgende Eigenschaft enthält:

- `interrupted`
  - : Ein boolescher Wert, der angibt, ob der Scrollvorgang unterbrochen wurde (`true`) oder nicht (`false`). Eine solche Unterbrechung geschieht typischerweise, wenn ein programmatisches Scrollen im Gange ist und ein weiteres programmatisches Scrollen im Fenster initiiert wird, bevor das erste beendet ist.

## Beispiele

### Grundlegende Nutzung

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

Unser [Demo zu Fenstermethoden](https://mdn.github.io/dom-examples/scroll-promises/window-methods/) ([siehe Quellcode](https://github.com/mdn/dom-examples/tree/main/scroll-promises/window-methods)) demonstriert, wie der Rückgabewert von `scrollBy()` als Promise verwendet werden kann, um auf das Ende eines Scrollvorgangs zu reagieren. Diese Technik ist vor allem nützlich in Fällen, in denen das Scrollen reibungslos über die Zeit erfolgt (erreicht durch Setzen der [`behavior`](#behavior) Option auf `smooth` oder durch Setzen der {{cssxref("scroll-behavior")}} Eigenschaft des scrolling Elements auf `smooth`).

#### HTML

Unser HTML enthält mehrere Absätze von Inhalten und ein {{htmlelement("div")}} Element Toolbar mit {{htmlelement("button")}} Elementen, die verschiedene Scrolloperationen im Fenster auslösen.

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

Wir geben dem {{cssxref(":root")}} Element einen Wert der {{cssxref("scroll-behavior")}} Eigenschaft von `smooth`, sodass alle Scrolloperationen über die Zeit hinweg animiert werden anstatt sofort zu erfolgen.

```css
:root {
  scroll-behavior: smooth;
}
```

Wir erstellen auch zwei Klassenselektoren; wenn eine `fade-out` oder `fade-in` Klasse auf ein Element angewendet wird, wird eine {{cssxref("animation")}} angewendet, damit es sanft ausblendet oder einblendet. Wir definieren auch {{cssxref("@keyframes")}} Blöcke, um die erforderlichen Änderungen der {{cssxref("opacity")}} für diese Animationen zu definieren.

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

Der restliche CSS-Code wird aus Gründen der Kürze nicht angezeigt.

#### JavaScript

Wir beginnen damit, Referenzen zum `<button>`, das die `scrollBy()` Operation ausführt, und zur Toolbar `<div>` zu holen:

```js
const scrollByBtn = document.querySelector(".scroll-by");
const toolbar = document.querySelector("div");
```

Als nächstes definieren wir eine Funktion namens `isInterrupted()`, die als Reaktion auf den Abschluss eines Scrollvorgangs ausgeführt wird und einen booleschen Wert `interrupted` als Parameter nimmt. Sie protokolliert eine Nachricht in der Konsole, dass das Scrollen abgeschlossen ist und angibt, ob der Vorgang unterbrochen wurde (`interrupted` ist `true`) oder nicht. Zusätzlich, wenn `interrupted` `true` ist, wird `alert()` aufgerufen, um die Unterbrechung klar anzuzeigen.

```js
function isInterrupted(interrupted) {
  console.log(`Scroll finished;${interrupted ? " " : " not "}interrupted`);
  if (interrupted) {
    alert("Scroll interrupted!");
  }
}
```

Wenn die Schaltfläche angeklickt wird, wenden wir sofort die `fade-out` Klasse auf die Toolbar an, was dazu führt, dass sie ausblendet. Wir führen dann `scrollBy(0, 200)` im Fenster aus, um dessen Inhalt um 200 Pixel nach unten zu scrollen, warten auf die Auflösung des zugehörigen Promises und speichern das `result` in einer Konstante. Wenn das Promise aufgelöst wurde, rufen wir `isInterrupted()` auf, um zu melden, dass der Scrollvorgang abgeschlossen ist und ob er unterbrochen wurde. Schließlich wenden wir die `fade-in` Klasse auf die Toolbar an, wodurch sie wieder eingeblendet wird.

```js
scrollByBtn.addEventListener("click", async () => {
  toolbar.className = "fade-out";
  const result = await window.scrollBy(0, 200);
  isInterrupted(result.interrupted);
  toolbar.className = "fade-in";
});
```

Der für `scrollBy()` nicht relevante Code wird aus Gründen der Kürze nicht angezeigt.

#### Ergebnis

Klicken Sie auf die Schaltflächen, um das Scrollverhalten zu sehen. Beachten Sie, wie die Toolbar ausblendet, wenn eine Schaltfläche gedrückt wird, und wieder einblendet, sobald das reibungslose Scrollen beendet ist. Versuchen Sie auch, eine Schaltfläche zu drücken und dann schnell eine andere Schaltfläche zu drücken, bevor der erste Scrollvorgang abgeschlossen ist. Beachten Sie, wie in diesen Fällen das Scrollen als unterbrochen gemeldet wird.

{{EmbedGHLiveSample("dom-examples/scroll-promises/window-methods/", "100%", 400)}}

Sie können das [Demo auch in einem separaten Tab laden](https://mdn.github.io/dom-examples/scroll-promises/window-methods/) und den [Quellcode ansehen](https://github.com/mdn/dom-examples/tree/main/scroll-promises/window-methods).

#### Anmerkung zur Feature-Erkennung

Wenn Sie dieses Beispiel in einem Browser ausführen, der Scroll-Operationen, die ein Promise zurückgeben, nicht unterstützt, sind die Scroll-Operationen weiterhin reibungslos, aber die Toolbar blendet nicht aus und wieder ein, sobald der Vorgang abgeschlossen ist. Die Feature-Erkennung wird von einer Funktion namens `supportsScrollPromises()` gehandhabt, die einen Scrollvorgang ausführt und testet, ob sein Rückgabewert ein Promise ist:

```js
function supportsScrollPromises() {
  const test = window.scroll(0, 0);
  return test instanceof Promise;
}
```

Sehen Sie sich den [Quellcode](https://github.com/mdn/dom-examples/blob/main/scroll-promises/window-methods/index.js) an, um zu sehen, wie die Feature-Erkennung verwendet wird.

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
