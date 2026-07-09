---
title: "Element: scrollTo() Methode"
short-title: scrollTo()
slug: Web/API/Element/scrollTo
l10n:
  sourceCommit: afcdfa050626bb7eb05ee693df8997020db9ff2e
---

{{APIRef("CSSOM view API")}}

Die **`scrollTo()`**-Methode der [`Element`](/de/docs/Web/API/Element)-Schnittstelle scrollt zu einem bestimmten Satz von Koordinaten innerhalb eines gegebenen Elements.

Diese Methode ist ein Alias für [`Element.scroll()`](/de/docs/Web/API/Element/scroll).

## Syntax

```js-nolint
scrollTo(xCoord, yCoord)
scrollTo(options)
```

### Parameter

- `xCoord`
  - : Die x-Koordinate des scrollbareren Inhalts des Elements, zu der der linke Rand des Scrollports des Elements scrollen soll.
- `yCoord`
  - : Die y-Koordinate des scrollbareren Inhalts des Elements, zu der der obere Rand des Scrollports des Elements scrollen soll.
- `options`
  - : Ein Objekt mit den folgenden Eigenschaften:
    - `top` {{optional_inline}}
      - : Die y-Koordinate des scrollbareren Inhalts des Elements, zu der der obere Rand des Scrollports des Elements scrollen soll. Dies entspricht dem `yCoord`-Parameter.
    - `left` {{optional_inline}}
      - : Die x-Koordinate des scrollbareren Inhalts des Elements, zu der der linke Rand des Scrollports des Elements scrollen soll. Dies entspricht dem `xCoord`-Parameter.
    - `behavior` {{optional_inline}}
      - : Bestimmt, ob das Scrollen sofort oder sanft animiert erfolgt. Diese Option ist ein String, der einen der folgenden Werte annehmen muss:
        - `smooth`: Das Scrollen wird sanft animiert.
        - `instant`: Das Scrollen erfolgt sofort in einem einzigen Sprung.
        - `auto`: Das Scroll-Verhalten wird durch den berechneten Wert der {{cssxref("scroll-behavior")}} CSS-Eigenschaft am Element bestimmt.

        Wenn `behavior` weggelassen wird, ist der Standardwert `auto`.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem Objekt erfüllt wird, das die folgende Eigenschaft enthält:

- `interrupted`
  - : Ein boolescher Wert, der angibt, ob die Scroll-Operation unterbrochen wurde (`true`) oder nicht (`false`). Eine solche Unterbrechung tritt typischerweise auf, wenn ein programmatisches Scrollen im Gange ist und ein weiteres programmatisches Scrollen auf demselben Element initiiert wird, bevor das erste beendet ist.

## Beispiele

### Grundlegende Nutzung

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

Unser [Element-Methoden-Demo](https://mdn.github.io/dom-examples/scroll-promises/element-methods/) ([siehe Quellcode](https://github.com/mdn/dom-examples/tree/main/scroll-promises/element-methods)) zeigt, wie der Promise-Rückgabewert von `scrollTo()` verwendet werden kann, um auf das Ende einer Scroll-Operation zu reagieren. Diese Technik ist besonders nützlich in Fällen, in denen das Scrollen sanft über die Zeit erfolgt (durch Setzen der [`behavior`](#behavior)-Option auf `smooth` oder durch Setzen der {{cssxref("scroll-behavior")}}-Eigenschaft des scrollenden Elements auf `smooth`).

#### HTML

Unser HTML beinhaltet ein {{htmlelement("section")}}-Element mit mehreren Absätzen von Inhalt und ein {{htmlelement("div")}}-Element-Toolbar mit {{htmlelement("button")}}-Elementen, die verschiedene Scroll-Operationen auf dem `<section>` auslösen.

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

Wir geben dem `<section>`-Element eine feste {{cssxref("height")}} und einen {{cssxref("overflow-y")}}-Wert von `scroll`, damit es vertikal scrollt, und legen seine {{cssxref("scroll-behavior")}}-Eigenschaft auf `smooth` fest, sodass alle Scroll-Operationen sanft animiert werden anstatt sofort.

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

Wir erstellen auch zwei Klassen-Selectoren; wenn eine `fade-out` oder `fade-in` Klasse auf ein Element angewendet wird, wird eine {{cssxref("animation")}} angewendet, sodass es sanft aus- oder eingeblendet wird. Wir definieren auch {{cssxref("@keyframes")}}-Blöcke, um die erforderlichen {{cssxref("opacity")}}-Änderungen für diese Animationen zu definieren.

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

Der Rest des CSS wird der Kürze halber nicht gezeigt.

#### JavaScript

Wir beginnen damit, Referenzen zu dem `<button>`, das die `scrollTo()`-Operation ausführt, dem Toolbar-`<div>` und dem scrollenden `<section>` zu erfassen:

```js
const scrollToBtn = document.querySelector(".scroll-to");
const toolbar = document.querySelector("div");
const section = document.querySelector("section");
```

Als Nächstes definieren wir eine Funktion namens `isInterrupted()`, die als Reaktion auf das Abschließen einer Scroll-Operation ausgeführt wird und einen booleschen `interrupted`-Wert als Parameter entgegennimmt. Sie protokolliert eine Nachricht in der Konsole, die besagt, dass das Scrollen abgeschlossen ist und ob die Operation unterbrochen wurde (`interrupted` ist `true`) oder nicht. Zusätzlich ruft sie, wenn `interrupted` `true` ist, ein `alert()` auf, um die Unterbrechung deutlich anzuzeigen.

```js
function isInterrupted(interrupted) {
  console.log(`Scroll finished;${interrupted ? " " : " not "}interrupted`);
  if (interrupted) {
    alert("Scroll interrupted!");
  }
}
```

Wenn der Button gedrückt wird, wird der `fade-out`-Klasse sofort auf die Toolbar angewendet, wodurch sie ausgeblendet wird. Dann führen wir `scrollTo(0, 0)` auf dem `<section>` aus, um seinen Inhalt nach oben zu scrollen, warten auf die Auflösung des Promise und speichern das `result` in einer Konstante. Wenn der Promise aufgelöst wurde, rufen wir `isInterrupted()` auf, um zu berichten, dass die Scroll-Operation abgeschlossen ist und ob sie unterbrochen wurde. Schließlich wird die `fade-in`-Klasse auf die Toolbar angewendet, wodurch sie wieder eingeblendet wird.

```js
scrollToBtn.addEventListener("click", async () => {
  toolbar.className = "fade-out";
  const result = await section.scrollTo(0, 0);
  isInterrupted(result.interrupted);
  toolbar.className = "fade-in";
});
```

Der für `scrollTo()` nicht relevante Code wird der Kürze halber nicht gezeigt.

#### Ergebnis

Klicken Sie auf die Buttons, um das Scroll-Verhalten zu sehen. Beachten Sie, wie die Toolbar ausgeblendet wird, wenn ein Button gedrückt wird, und wieder eingeblendet wird, sobald das sanfte Scrollen beendet ist. Versuchen Sie auch, einen Button zu drücken und dann schnell einen anderen Button zu drücken, bevor die erste Scroll-Operation abgeschlossen ist. Beachten Sie, wie in diesen Fällen das Scrollen als unterbrochen gemeldet wird.

{{EmbedGHLiveSample("dom-examples/scroll-promises/element-methods/", "100%", 620)}}

Sie können auch [das Demo in einem separaten Tab laden](https://mdn.github.io/dom-examples/scroll-promises/element-methods/) und den [Quellcode ansehen](https://github.com/mdn/dom-examples/tree/main/scroll-promises/element-methods).

#### Anmerkung zur Funktionsprüfung

Wenn Sie dieses Beispiel in einem Browser ausführen, der keine Promise-ausgebenden Scroll-Operationen unterstützt, sind die Scroll-Operationen immer noch sanft, aber die Toolbar blendet sich nicht aus und dann wieder ein, sobald die Operation abgeschlossen ist. Die Funktionsprüfung wird durch eine Funktion namens `supportsScrollPromises()` gehandhabt, die eine Scroll-Operation ausführt und testet, ob ihr Rückgabewert ein Promise ist:

```js
function supportsScrollPromises() {
  const test = section.scroll(0, 0);
  return test instanceof Promise;
}
```

Sehen Sie sich den [Quellcode](https://github.com/mdn/dom-examples/blob/main/scroll-promises/element-methods/index.js) an, um zu sehen, wie die Funktionsprüfung verwendet wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element.scrollTop`](/de/docs/Web/API/Element/scrollTop), [`Element.scrollLeft`](/de/docs/Web/API/Element/scrollLeft)
- [`Window.scrollTo()`](/de/docs/Web/API/Window/scrollTo)
