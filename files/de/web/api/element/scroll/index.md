---
title: "Element: scroll() Methode"
short-title: scroll()
slug: Web/API/Element/scroll
l10n:
  sourceCommit: 96c4b1173c97edf49089240ff992fa6aa96c1751
---

{{APIRef("CSSOM view API")}}

Die **`scroll()`** Methode der [`Element`](/de/docs/Web/API/Element) Schnittstelle scrollt zu einem bestimmten Satz von Koordinaten innerhalb eines gegebenen Elements.

## Syntax

```js-nolint
scroll(xCoord, yCoord)
scroll(options)
```

### Parameter

- `xCoord`
  - : Das Pixel entlang der horizontalen Achse des Elements, das Sie in der oberen linken Ecke angezeigt haben möchten.
- `yCoord`
  - : Das Pixel entlang der vertikalen Achse des Elements, das Sie in der oberen linken Ecke angezeigt haben möchten.
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
        - `auto`: Das Scrollverhalten wird durch den berechneten Wert der {{cssxref("scroll-behavior")}} CSS-Eigenschaft des Elements bestimmt.

        Wenn weggelassen, ist der Standardwert von `behavior` `auto`.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem Objekt erfüllt wird, das die folgende Eigenschaft enthält:

- `interrupted`
  - : Ein boolescher Wert, der anzeigt, ob die Scroll-Operation unterbrochen wurde (`true`) oder nicht (`false`). Eine solche Unterbrechung tritt typischerweise auf, wenn ein programmatisches Scrollen im Gange ist und ein weiteres programmatisches Scrollen auf demselben Element initiiert wird, bevor das erste abgeschlossen ist.

## Beispiele

### Grundlegende Nutzung

```js
// Put the 1000th vertical pixel at the top of the element
element.scroll(0, 1000);
```

Verwendung von `options`:

```js
element.scroll({
  top: 100,
  left: 100,
  behavior: "smooth",
});
```

### Reagieren auf das Ende des Scrollen

Unser [Demo zu Elementmethoden](https://mdn.github.io/dom-examples/scroll-promises/element-methods/) ([siehe Quellcode](https://github.com/mdn/dom-examples/tree/main/scroll-promises/element-methods)) zeigt, wie der Promise-Rückgabewert von `scroll()` verwendet werden kann, um auf das Ende einer Scroll-Operation zu reagieren. Diese Technik ist vor allem in Fällen nützlich, in denen das Scrollen sanft über die Zeit erfolgt (erreicht durch Festlegen der [`behavior`](#behavior) Option auf `smooth` oder durch Setzen der {{cssxref("scroll-behavior")}} Eigenschaft des scrollenden Elements auf `smooth`).

#### HTML

Unser HTML enthält ein {{htmlelement("section")}} Element, das mehrere Absatzinhalte und ein {{htmlelement("div")}} Element Werkzeugleiste mit {{htmlelement("button")}} Elementen enthält, die verschiedene Scroll-Operationen im `<section>` auslösen.

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

Wir geben dem `<section>` Element eine feste {{cssxref("height")}} und einen {{cssxref("overflow-y")}} Wert von `scroll`, damit es vertikal scrollt, und setzen seine {{cssxref("scroll-behavior")}} Eigenschaft auf `smooth`, so dass alle Scroll-Operationen sanft über die Zeit anstatt sofort animiert werden.

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

Wir erstellen auch zwei Klassenselektoren; wenn eine `fade-out` oder `fade-in` Klasse auf ein Element angewendet wird, wird eine {{cssxref("animation")}} angewendet, so dass es sanft ausblendet oder einblendet. Darüber hinaus definieren wir {{cssxref("@keyframes")}} Blöcke, um die erforderlichen {{cssxref("opacity")}} Änderungen für diese Animationen zu definieren.

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

Der Rest des CSS wird der Kürze halber nicht angezeigt.

#### JavaScript

Wir beginnen damit, Referenzen auf das `<button>`, das die `scroll()` Operation ausführt, die Werkzeugleiste `<div>`, und das scrollende `<section>` zu holen:

```js
const scrollBtn = document.querySelector(".scroll");
const toolbar = document.querySelector("div");
const section = document.querySelector("section");
```

Als Nächstes definieren wir eine Funktion namens `isInterrupted()`, die aufgerufen wird, wenn eine Scroll-Operation beendet ist und einen booleschen `interrupted` Wert als Parameter nimmt. Sie protokolliert eine Nachricht in der Konsole, die besagt, dass das Scrollen abgeschlossen ist, und gibt an, ob die Operation unterbrochen wurde (`interrupted` ist `true`) oder nicht. Zusätzlich, wenn `interrupted` `true` ist, wird ein `alert()` aufgerufen, um die Unterbrechung deutlich anzuzeigen.

```js
function isInterrupted(interrupted) {
  console.log(`Scroll finished;${interrupted ? " " : " not "}interrupted`);
  if (interrupted) {
    alert("Scroll interrupted!");
  }
}
```

Wenn der Button geklickt wird, wenden wir sofort die `fade-out` Klasse auf die Werkzeugleiste an, wodurch sie ausblendet. Dann führen wir `scroll(0, 1000)` auf dem `<section>` durch, um seinen Inhalt um 1000 Pixel herunterzuscrollen, und `await`en die Auflösung ihres Promises, während wir dies tun, und speichern das `result` in einer Konstante. Wenn das Promise aufgelöst wurde, rufen wir `isInterrupted()` auf, um zu melden, dass die Scroll-Operation beendet ist und ob sie unterbrochen wurde. Schließlich wenden wir die `fade-in` Klasse auf die Werkzeugleiste an, wodurch sie wieder einblendet.

```js
scrollBtn.addEventListener("click", async () => {
  toolbar.className = "fade-out";
  const result = await section.scroll(0, 1000);
  isInterrupted(result.interrupted);
  toolbar.className = "fade-in";
});
```

Der für `scroll()` nicht relevante Code wird der Kürze halber nicht gezeigt.

#### Ergebnis

Klicken Sie die Buttons, um das Scroll-Verhalten zu sehen. Beachten Sie, wie die Werkzeugleiste ausblendet wenn ein Button gedrückt wird, und wieder einblendet, sobald das sanfte Scrollen abgeschlossen ist. Versuchen Sie auch, einen Button zu drücken und dann schnell einen weiteren, bevor die erste Scroll-Operation abgeschlossen ist. Beachten Sie, wie in diesen Fällen das Scrollen als unterbrochen gemeldet wird.

{{EmbedGHLiveSample("dom-examples/scroll-promises/element-methods/", "100%", 620)}}

Sie können auch [das Demo in einem separaten Tab laden](https://mdn.github.io/dom-examples/scroll-promises/element-methods/) und den [Quellcode ansehen](https://github.com/mdn/dom-examples/tree/main/scroll-promises/element-methods).

#### Hinweis zur Funktionsprüfung

Wenn Sie dieses Beispiel in einem Browser ausführen, der keine Promise zurückgebenden Scroll-Operationen unterstützt, sind die Scroll-Operationen weiterhin sanft, aber die Werkzeugleiste blendet nicht aus und dann wieder ein, wenn die Operation beendet ist. Die Funktionsprüfung wird von einer Funktion namens `supportsScrollPromises()` durchgeführt, die eine Scroll-Operation ausführt und prüft, ob ihr Rückgabewert ein Promise ist:

```js
function supportsScrollPromises() {
  const test = section.scroll(0, 0);
  return test instanceof Promise;
}
```

Schauen Sie sich den [Quellcode](https://github.com/mdn/dom-examples/blob/main/scroll-promises/element-methods/index.js) an, um zu sehen, wie die Funktionsprüfung verwendet wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
