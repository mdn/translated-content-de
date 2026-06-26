---
title: "Window: scrollBy() Methode"
short-title: scrollBy()
slug: Web/API/Window/scrollBy
l10n:
  sourceCommit: 96c4b1173c97edf49089240ff992fa6aa96c1751
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
      - : Bestimmt, ob das Scrollen sofort oder animiert sanft erfolgt. Diese Option ist ein String, der einen der folgenden Werte annehmen muss:
        - `smooth`: Das Scrollen wird sanft animiert.
        - `instant`: Das Scrollen erfolgt sofort in einem einzigen Sprung.
        - `auto`: Das Scroll-Verhalten wird durch den berechneten Wert der {{cssxref("scroll-behavior")}} CSS-Eigenschaft am Element bestimmt.

        Wenn weggelassen, ist der Standardwert von `behavior` `auto`.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem Objekt erfüllt wird, das die folgende Eigenschaft enthält:

- `interrupted`
  - : Ein boolescher Wert, der angibt, ob die Scrolloperation unterbrochen wurde (`true`) oder nicht (`false`). Eine solche Unterbrechung tritt typischerweise auf, wenn ein programmgesteuertes Scrollen im Gange ist und ein weiteres programmgesteuertes Scrollen im Fenster gestartet wird, bevor das erste abgeschlossen ist.

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

Unser [Fenstermethoden-Demo](https://mdn.github.io/dom-examples/scroll-promises/window-methods/) ([Quellcode ansehen](https://github.com/mdn/dom-examples/tree/main/scroll-promises/window-methods)) zeigt, wie der Promise-Rückgabewert von `scrollBy()` zum Reagieren auf das Ende einer Scrolloperation verwendet werden kann. Diese Technik ist besonders nützlich in Fällen, in denen das Scrollen sanft über die Zeit erfolgt (erreicht durch Setzen der [`behavior`](#behavior)-Option auf `smooth` oder durch Setzen der {{cssxref("scroll-behavior")}}-Eigenschaft des scrollenden Elements auf `smooth`).

#### HTML

Unser HTML enthält mehrere Absätze mit Inhalt und ein {{htmlelement("div")}}-Element-Toolbar, die {{htmlelement("button")}}-Elemente enthält, welche verschiedene Scrolloperationen im Fenster auslösen.

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

Wir geben dem {{cssxref(":root")}}-Element einen {{cssxref("scroll-behavior")}}-Eigenschaftswert von `smooth`, damit alle Scrolloperationen sanft über die Zeit anstatt sofort animiert werden.

```css
:root {
  scroll-behavior: smooth;
}
```

Wir erstellen auch zwei Klassenselektoren; wenn eine `fade-out`- oder `fade-in`-Klasse auf ein Element angewendet wird, wird eine {{cssxref("animation")}} angewendet, sodass es sanft ausblendet oder einblendet. Wir definieren auch {{cssxref("@keyframes")}} Blöcke, um die erforderlichen {{cssxref("opacity")}}-Änderungen für diese Animationen zu definieren.

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

Der restliche CSS-Code wird der Kürze halber nicht gezeigt.

#### JavaScript

Wir beginnen mit dem Abrufen von Referenzen auf die `<button>`, die die `scrollBy()`-Operation ausführt, und die Toolbar `<div>`:

```js
const scrollByBtn = document.querySelector(".scrollby");
const toolbar = document.querySelector("div");
```

Als nächstes definieren wir eine Funktion namens `isInterrupted()`, die als Reaktion auf das Ende einer Scrolloperation ausgeführt werden soll. Sie nimmt einen booleschen `interrupted`-Wert als Parameter. Sie protokolliert eine Nachricht an die Konsole, um zu sagen, dass das Scrollen abgeschlossen ist, und ob die Operation unterbrochen wurde (`interrupted` ist `true`) oder nicht. Wenn `interrupted` `true` ist, ruft sie zusätzlich ein `alert()` auf, um die Unterbrechung klar zu kennzeichnen.

```js
function isInterrupted(interrupted) {
  console.log(`Scroll finished;${interrupted ? " " : " not "}interrupted`);
  if (interrupted) {
    alert("Scroll interrupted!");
  }
}
```

Wenn der Button angeklickt wird, wird die `fade-out`-Klasse sofort auf die Toolbar angewendet, sodass sie ausblendet. Wir führen dann `scrollBy(0, 200)` im Fenster aus, um dessen Inhalt um 200 Pixel nach unten zu scrollen, `await`ing die Promise-Auflösung, während wir dies tun, und speichern das `result` in einer Konstante. Wenn die Promise erfüllt ist, rufen wir `isInterrupted()` auf, um zu melden, dass die Scrolloperation abgeschlossen ist und ob sie unterbrochen wurde. Schließlich wenden wir die `fade-in`-Klasse auf die Toolbar an, wodurch sie wieder eingeblendet wird.

```js
scrollByBtn.addEventListener("click", async () => {
  toolbar.className = "fade-out";
  const result = await window.scrollBy(0, 200);
  isInterrupted(result.interrupted);
  toolbar.className = "fade-in";
});
```

Der für `scrollBy()` nicht relevante Code wird der Kürze halber nicht gezeigt.

#### Ergebnis

Klicken Sie auf die Tasten, um das Scrollverhalten zu sehen. Beachten Sie, wie die Toolbar ausblendet, wenn eine Taste gedrückt wird, und wieder einblendet, sobald das sanfte Scrollen abgeschlossen ist. Versuchen Sie auch, eine Taste zu drücken und dann schnell eine andere Taste zu drücken, bevor die erste Scrolloperation abgeschlossen ist. Beachten Sie, dass das Scrollen in diesen Fällen als unterbrochen gemeldet wird.

{{EmbedGHLiveSample("dom-examples/scroll-promises/window-methods/", "100%", 400)}}

Sie können das [Demo auch in einem separaten Tab laden](https://mdn.github.io/dom-examples/scroll-promises/window-methods/) und den [Quellcode anzeigen](https://github.com/mdn/dom-examples/tree/main/scroll-promises/window-methods).

#### Hinweis zum Feature-Detection

Wenn Sie dieses Beispiel in einem Browser ausführen, der keine Promise-zurückgebenden Scrolloperationen unterstützt, sind die Scrolloperationen immer noch sanft, aber die Toolbar blendet nicht aus und dann wieder ein, sobald die Operation abgeschlossen ist. Die Feature-Erkennung wird von einer Funktion namens `supportsScrollPromises()` gehandhabt, die eine Scrolloperation ausführt und prüft, ob der Rückgabewert ein Promise ist:

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
