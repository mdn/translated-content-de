---
title: "Window: scroll() Methode"
short-title: scroll()
slug: Web/API/Window/scroll
l10n:
  sourceCommit: afcdfa050626bb7eb05ee693df8997020db9ff2e
---

{{APIRef}}

Die **`scroll()`**-Methode der [`Window`](/de/docs/Web/API/Window)-Schnittstelle scrollt das Fenster zu einem bestimmten Punkt im Dokument.

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
      - : Gibt die Anzahl der Pixel entlang der Y-Achse an, um die das Fenster oder Element gescrollt werden soll.
    - `left` {{optional_inline}}
      - : Gibt die Anzahl der Pixel entlang der X-Achse an, um die das Fenster oder Element gescrollt werden soll.
    - `behavior` {{optional_inline}}
      - : Bestimmt, ob das Scrollen sofort oder sanft animiert erfolgt. Diese Option ist ein String, der einen der folgenden Werte haben muss:
        - `smooth`: Das Scrollen wird sanft animiert.
        - `instant`: Das Scrollen erfolgt sofort in einem einzigen Sprung.
        - `auto`: Das Scroll-Verhalten wird durch den berechneten Wert der {{cssxref("scroll-behavior")}} CSS-Eigenschaft auf dem Element bestimmt.

        Wenn nicht angegeben, ist der Standardwert für `behavior` `auto`.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem Objekt erfüllt wird, das die folgende Eigenschaft enthält:

- `interrupted`
  - : Ein boolescher Wert, der angibt, ob der Scroll-Vorgang unterbrochen wurde (`true`) oder nicht (`false`). Eine solche Unterbrechung tritt typischerweise auf, wenn ein programmatisches Scrollen läuft und ein weiteres programmatisches Scrollen im Fenster initiiert wird, bevor das erste beendet ist.

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

Unser [Demo der Fenster-Methoden](https://mdn.github.io/dom-examples/scroll-promises/window-methods/) ([Quellcode ansehen](https://github.com/mdn/dom-examples/tree/main/scroll-promises/window-methods)) zeigt, wie der versprochene Rückgabewert von `scroll()` verwendet werden kann, um auf das Ende eines Scroll-Vorgangs zu reagieren. Diese Technik ist besonders nützlich in Fällen, in denen das Scrollen über die Zeit sanft erfolgt (erzielt durch Setzen der [`behavior`](#behavior)-Option auf `smooth` oder durch das Setzen der {{cssxref("scroll-behavior")}}-Eigenschaft des scrollenden Elements auf `smooth`).

#### HTML

Unser HTML enthält mehrere Absätze mit Inhalten und ein {{htmlelement("div")}} Element, das eine Symbolleiste mit {{htmlelement("button")}} Elementen enthält, die verschiedene Scroll-Vorgänge im Fenster auslösen.

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

Wir geben dem {{cssxref(":root")}}-Element einen {{cssxref("scroll-behavior")}} Eigenschaftswert von `smooth`, sodass alle Scroll-Vorgänge sanft über die Zeit und nicht sofort erfolgen.

```css
:root {
  scroll-behavior: smooth;
}
```

Wir erstellen auch zwei Klassenselektoren; wenn eine `fade-out` oder `fade-in` Klasse auf ein Element angewendet wird, wird eine {{cssxref("animation")}} angewendet, sodass es sanft aus- oder eingeblendet wird. Wir definieren auch {{cssxref("@keyframes")}} Blöcke, um die erforderlichen Änderungen der {{cssxref("opacity")}} für diese Animationen zu definieren.

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

Der Rest der CSS wird aus Gründen der Kürze nicht gezeigt.

#### JavaScript

Wir beginnen, indem wir Referenzen zum `<button>`, das die `scroll()`-Operation ausführt, und zur Symbolleiste `<div>` abrufen:

```js
const scrollBtn = document.querySelector(".scroll");
const toolbar = document.querySelector("div");
```

Als nächstes definieren wir eine Funktion namens `isInterrupted()`, die als Antwort auf das Ende eines Scroll-Vorgangs ausgeführt werden soll und einen booleschen `interrupted` Wert als Parameter nimmt. Sie protokolliert eine Nachricht in die Konsole, um zu sagen, dass das Scrollen beendet ist und anzugeben, ob der Vorgang unterbrochen wurde (`interrupted` ist `true`) oder nicht. Zusätzlich, wenn `interrupted` `true` ist, wird ein `alert()` ausgelöst, um die Unterbrechung deutlich anzuzeigen.

```js
function isInterrupted(interrupted) {
  console.log(`Scroll finished;${interrupted ? " " : " not "}interrupted`);
  if (interrupted) {
    alert("Scroll interrupted!");
  }
}
```

Wenn der Button geklickt wird, wenden wir sofort die `fade-out` Klasse auf die Symbolleiste an, wodurch sie ausgeblendet wird. Wir führen dann `scroll(0, 1000)` im Fenster aus, um dessen Inhalt 1000 Pixel nach unten zu scrollen, warten auf die Auflösung des Versprechens und speichern das `result` in einer Konstante. Wenn das Versprechen gelöst ist, rufen wir `isInterrupted()` auf, um zu melden, dass der Scroll-Vorgang beendet ist und ob er unterbrochen wurde. Schließlich wenden wir die `fade-in` Klasse auf die Symbolleiste an, wodurch sie wieder eingeblendet wird.

```js
scrollBtn.addEventListener("click", async () => {
  toolbar.className = "fade-out";
  const result = await window.scroll(0, 1000);
  isInterrupted(result.interrupted);
  toolbar.className = "fade-in";
});
```

Der Code, der nicht relevant für `scroll()` ist, wird aus Gründen der Kürze nicht gezeigt.

#### Ergebnis

Klicken Sie auf die Buttons, um das Scroll-Verhalten zu sehen. Beachten Sie, wie die Symbolleiste ausgeblendet wird, wenn ein Button gedrückt wird, und wieder eingeblendet wird, wenn das sanfte Scrollen beendet ist. Versuchen Sie auch, einen Button zu drücken und schnell einen anderen zu drücken, bevor der erste Scroll-Vorgang abgeschlossen ist. Beachten Sie, wie in diesen Fällen das Scrollen als unterbrochen gemeldet wird.

{{EmbedGHLiveSample("dom-examples/scroll-promises/window-methods/", "100%", 400)}}

Sie können auch [das Demo in einem separaten Tab laden](https://mdn.github.io/dom-examples/scroll-promises/window-methods/) und den [Quellcode ansehen](https://github.com/mdn/dom-examples/tree/main/scroll-promises/window-methods).

#### Hinweis zur Feature-Erkennung

Wenn Sie dieses Beispiel in einem Browser ausführen, der keine Versprechen zurückgebenden Scroll-Funktionen unterstützt, sind die Scroll-Vorgänge dennoch sanft, aber die Symbolleiste wird nicht ausgeblendet und wieder eingeblendet, sobald der Vorgang abgeschlossen ist. Die Feature-Erkennung wird von einer Funktion namens `supportsScrollPromises()` gehandhabt, die eine Scroll-Operation ausführt und testet, ob deren Rückgabewert ein Versprechen ist:

```js
function supportsScrollPromises() {
  const test = window.scroll(0, 0);
  return test instanceof Promise;
}
```

Sie können den [Quellcode ansehen](https://github.com/mdn/dom-examples/blob/main/scroll-promises/window-methods/index.js), um zu sehen, wie die Feature-Erkennung verwendet wird.

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
