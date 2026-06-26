---
title: "Element: scrollBy() Methode"
short-title: scrollBy()
slug: Web/API/Element/scrollBy
l10n:
  sourceCommit: 96c4b1173c97edf49089240ff992fa6aa96c1751
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
      - : Bestimmt, ob das Scrollen sofort oder sanft animiert erfolgt. Diese Option ist ein String, der einen der folgenden Werte haben muss:
        - `smooth`: Das Scrollen wird sanft animiert.
        - `instant`: Das Scrollen erfolgt sofort in einem Sprung.
        - `auto`: Das Scrollverhalten wird durch den berechneten Wert der CSS-Eigenschaft {{cssxref("scroll-behavior")}} auf dem Element bestimmt.

        Wenn weggelassen, ist der Standardwert von `behavior` `auto`.

### Rückgabewert

Ein {{jsxref("Promise")}}, das aufgelöst wird mit einem Objekt, das die folgende Eigenschaft enthält:

- `interrupted`
  - : Ein boolescher Wert, der anzeigt, ob die Scroll-Operation unterbrochen wurde (`true`) oder nicht (`false`). Eine solche Unterbrechung tritt normalerweise auf, wenn ein programmatisches Scrollen gerade ausgeführt wird und ein weiteres programmatisches Scrollen auf demselben Element initiiert wird, bevor das erste abgeschlossen ist.

## Beispiele

### Grundlegende Verwendung

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

### Reaktion auf das Ende des Scrollens

Unser [Demo zu Elementmethoden](https://mdn.github.io/dom-examples/scroll-promises/element-methods/) ([Quellcode ansehen](https://github.com/mdn/dom-examples/tree/main/scroll-promises/element-methods)) zeigt, wie der Promise-Rückgabewert von `scrollBy()` verwendet werden kann, um auf das Ende einer Scroll-Operation zu reagieren. Diese Technik ist hauptsächlich in Fällen nützlich, in denen das Scrollen über die Zeit sanft erfolgt (erreicht durch Setzen der [`behavior`](#behavior)-Option auf `smooth` oder durch Setzen der CSS-Eigenschaft {{cssxref("scroll-behavior")}} des scrollenden Elements auf `smooth`).

#### HTML

Unser HTML enthält ein {{htmlelement("section")}}-Element mit mehreren Absatzinhalten und ein {{htmlelement("div")}}-Element-Toolbar mit {{htmlelement("button")}}-Elementen, die verschiedene Scroll-Operationen auf dem `<section>` auslösen.

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

Wir geben dem `<section>`-Element eine feste {{cssxref("height")}} und einen {{cssxref("overflow-y")}}-Wert von `scroll`, damit es vertikal scrollt, und setzen seine {{cssxref("scroll-behavior")}}-Eigenschaft auf `smooth`, sodass jede Scroll-Operation sanft über die Zeit hinweg animiert wird, anstatt sofort zu erfolgen.

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

Wir erstellen außerdem zwei Klassenselektoren; wenn eine `fade-out`- oder `fade-in`-Klasse auf ein Element angewendet wird, wird eine {{cssxref("animation")}} angewendet, sodass es sanft aus- oder eingefadet wird. Wir definieren auch {{cssxref("@keyframes")}}-Blöcke, um die erforderlichen Änderungen der {{cssxref("opacity")}} für diese Animationen zu definieren.

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

Der Rest des CSS wird aus Gründen der Kürze nicht angezeigt.

#### JavaScript

Wir beginnen damit, Referenzen auf den `<button>`, der die `scrollBy()`-Operation ausführt, die Toolbar-`<div>` und die scrollende `<section>` zu erhalten:

```js
const scrollByBtn = document.querySelector(".scrollby");
const toolbar = document.querySelector("div");
const section = document.querySelector("section");
```

Als nächstes definieren wir eine Funktion namens `isInterrupted()`, die als Reaktion auf das Ende einer Scroll-Operation ausgeführt wird und einen booleschen `interrupted`-Wert als Parameter nimmt. Sie gibt eine Meldung an die Konsole aus, die besagt, dass das Scrollen abgeschlossen ist, und zeigt an, ob die Operation unterbrochen wurde (`interrupted` ist `true`) oder nicht. Außerdem, wenn `interrupted` `true` ist, ruft sie eine `alert()`-Funktion auf, um die Unterbrechung deutlich anzuzeigen.

```js
function isInterrupted(interrupted) {
  console.log(`Scroll finished;${interrupted ? " " : " not "}interrupted`);
  if (interrupted) {
    alert("Scroll interrupted!");
  }
}
```

Wenn der Button gedrückt wird, wenden wir sofort die `fade-out`-Klasse auf die Toolbar an, wodurch sie ausfadet. Dann führen wir `scrollBy(0, 200)` auf der `<section>` aus, um deren Inhalt um 200 Pixel nach unten zu scrollen, `await`en deren Promise-Auflösung dabei und speichern das `result` in einer Konstante. Sobald das Promise aufgelöst ist, rufen wir `isInterrupted()` auf, um zu berichten, dass die Scroll-Operation beendet und ob sie unterbrochen wurde. Schließlich wenden wir die `fade-in`-Klasse auf die Toolbar an, sodass sie wieder einfadet.

```js
scrollByBtn.addEventListener("click", async () => {
  toolbar.className = "fade-out";
  const result = await section.scrollBy(0, 200);
  isInterrupted(result.interrupted);
  toolbar.className = "fade-in";
});
```

Der für `scrollBy()` nicht relevante Code wird aus Gründen der Kürze nicht angezeigt.

#### Ergebnis

Klicken Sie auf die Buttons, um das Scrollverhalten zu sehen. Beachten Sie, wie die Toolbar ausfadet, wenn ein Button gedrückt wird, und wieder einfadet, sobald das sanfte Scrollen beendet ist. Versuchen Sie auch, einen Button zu drücken und dann schnell einen weiteren Button, bevor die erste Scroll-Operation abgeschlossen ist. Beachten Sie, wie in diesen Fällen das Scrollen als unterbrochen gemeldet wird.

{{EmbedGHLiveSample("dom-examples/scroll-promises/element-methods/", "100%", 620)}}

Sie können auch [das Demo in einem separaten Tab laden](https://mdn.github.io/dom-examples/scroll-promises/element-methods/) und den [Quellcode ansehen](https://github.com/mdn/dom-examples/tree/main/scroll-promises/element-methods).

#### Hinweis zur Feature-Erkennung

Wenn Sie dieses Beispiel in einem Browser ausführen, der keine Promise-unterstützenden Scroll-Operationen unterstützt, sind die Scroll-Operationen trotzdem sanft, aber die Toolbar faded nicht aus und dann wieder ein, sobald die Operation abgeschlossen ist. Die Feature-Erkennung wird von einer Funktion namens `supportsScrollPromises()` behandelt, die eine Scroll-Operation ausführt und testet, ob ihr Rückgabewert ein Promise ist:

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
