---
title: "Element: scrollIntoView()-Methode"
short-title: scrollIntoView()
slug: Web/API/Element/scrollIntoView
l10n:
  sourceCommit: 96c4b1173c97edf49089240ff992fa6aa96c1751
---

{{APIRef("DOM")}}

Die **`scrollIntoView()`**-Methode der [`Element`](/de/docs/Web/API/Element)-Schnittstelle scrollt die Vorfahren-Container des Elements so, dass das Element, auf dem `scrollIntoView()` aufgerufen wird, für den Benutzer sichtbar ist.

## Syntax

```js-nolint
scrollIntoView()
scrollIntoView(alignToTop)
scrollIntoView(options)
```

### Parameter

- `alignToTop` {{optional_inline}}
  - : Ein boolescher Wert:
    - Wenn `true`, wird die Oberkante des Elements mit der Oberkante des sichtbaren Bereichs des scrollbaren Vorfahren ausgerichtet. Entspricht `scrollIntoViewOptions: {block: "start", inline: "nearest"}`. Dies ist der Standardwert.
    - Wenn `false`, wird die Unterkante des Elements mit der Unterkante des sichtbaren Bereichs des scrollbaren Vorfahren ausgerichtet. Entspricht `scrollIntoViewOptions: {block: "end", inline: "nearest"}`.

- `options` {{optional_inline}}
  - : Ein Objekt mit den folgenden Eigenschaften:
    - `behavior` {{optional_inline}}
      - : Bestimmt, ob das Scrollen sofort oder animiert erfolgt. Diese Option ist ein String, der einen der folgenden Werte haben muss:
        - `smooth`: Das Scrollen erfolgt animiert.
        - `instant`: Das Scrollen erfolgt sofort in einem einzigen Schritt.
        - `auto`: Das Scrollverhalten wird durch den berechneten Wert der {{cssxref("scroll-behavior")}} CSS-Eigenschaft des Elements bestimmt.

        Wenn weggelassen, ist der Standardwert von `behavior` `auto`.

    - `block` {{optional_inline}}
      - : Definiert die vertikale Ausrichtung des Elements innerhalb des scrollbaren Vorfahren-Containers. Sein Wert kann einer der folgenden sein:
        - `start`: Richtet die Oberkante des Elements mit der Oberseite des scrollbaren Containers aus und platziert das Element am Anfang des sichtbaren Bereichs vertikal.
        - `center`: Richtet das Element vertikal in der Mitte des scrollbaren Containers aus und positioniert es in der Mitte des sichtbaren Bereichs.
        - `end`: Richtet die Unterkante des Elements mit der Unterseite des scrollbaren Containers aus und platziert das Element am Ende des sichtbaren Bereichs vertikal.
        - `nearest`: Scrollt das Element zur nächstgelegenen Kante in vertikaler Richtung. Wenn das Element näher an der Oberkante des scrollbaren Containers ist, wird es an der Oberseite ausgerichtet; wenn es näher an der Unterkante ist, wird es an der Unterseite ausgerichtet. Dies minimiert die Scroll-Distanz.

        Der Standardwert ist `start`.

    - `container` {{optional_inline}}
      - : Definiert den scrollbaren Vorfahren-Container. Sein Wert kann einer der folgenden sein:
        - `all`: Alle scrollbaren Container sind betroffen (einschließlich des Viewports).
        - `nearest`: Nur der nächstgelegene scrollbare Container wird vom Scrollen beeinflusst.

        Der Standardwert ist `all`.

    - `inline` {{optional_inline}}
      - : Definiert die horizontale Ausrichtung des Elements innerhalb des scrollbaren Vorfahren-Containers. Sein Wert kann einer der folgenden sein:
        - `start`: Richtet die linke Kante des Elements mit der linken Seite des scrollbaren Containers aus und platziert das Element am Anfang des sichtbaren Bereichs horizontal.
        - `center`: Richtet das Element horizontal in der Mitte des scrollbaren Containers aus und positioniert es in der Mitte des sichtbaren Bereichs.
        - `end`: Richtet die rechte Kante des Elements mit der rechten Seite des scrollbaren Containers aus und platziert das Element am Ende des sichtbaren Bereichs horizontal.
        - `nearest`: Scrollt das Element zur nächstgelegenen Kante in horizontaler Richtung. Wenn das Element näher an der linken Kante des scrollbaren Containers ist, wird es an der linken Seite ausgerichtet; wenn es näher an der rechten Kante ist, wird es an der rechten Seite ausgerichtet. Dies minimiert die Scroll-Distanz.

        Der Standardwert ist `nearest`.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem Objekt erfüllt wird, das die folgende Eigenschaft enthält:

- `interrupted`
  - : Ein boolescher Wert, der anzeigt, ob die Scroll-Operation unterbrochen wurde (`true`) oder nicht (`false`). Eine solche Unterbrechung tritt typischerweise auf, wenn ein programmatisches Scrollen im Gange ist und ein weiteres programmatisches Scrollen auf demselben Element initiiert wird, bevor das erste abgeschlossen ist.

## Beispiele

### Grundlegende Verwendung

```js
const element = document.getElementById("box");

element.scrollIntoView();
element.scrollIntoView(false);
element.scrollIntoView({ block: "end" });
element.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
```

### Steuerung der oberen/unten Ausrichtung

Standardmäßig wird das Element an der oberen (oder unteren) Kante des scrollbaren Vorfahren ausgerichtet. Um einen benutzerdefinierten Abstand festzulegen, verwenden Sie {{cssxref("scroll-margin-top")}} oder {{cssxref("scroll-margin-bottom")}}. Dies ist oft nützlich, wenn es einen fixierten Header auf der Seite gibt.

#### HTML

```html live-sample___scroll-with-padding
<body>
  <header class="navbar">Navbar</header>
  <main class="content">
    <button id="go-to-bottom">Go to bottom</button>
    <button id="go-to-top">Go to top</button>
  </main>
</body>
```

#### CSS

```css live-sample___scroll-with-padding
.navbar {
  height: 50px;
  position: sticky;
  top: 0;
  border-bottom: 1.5px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
}
.content {
  height: 2000px;
  position: relative;
}
#go-to-bottom {
  position: absolute;
  top: 10px;
  /* Without this, the button will be aligned to the top of the page
  instead of bottom of navbar when scrolled */
  scroll-margin-top: 60px;
}
#go-to-top {
  position: absolute;
  bottom: 10px;
  scroll-margin-bottom: 0;
}
```

#### JavaScript

```js live-sample___scroll-with-padding
const goToTop = document.getElementById("go-to-top");
const goToBottom = document.getElementById("go-to-bottom");
goToBottom.addEventListener("click", () => {
  goToTop.scrollIntoView({ behavior: "instant", block: "end" });
});
goToTop.addEventListener("click", () => {
  goToBottom.scrollIntoView({ behavior: "instant", block: "start" });
});
```

#### Ergebnis

{{EmbedLiveSample("scroll-with-padding", "700", "300")}}

### Reagieren auf das Ende des Scrollens

Unser [Element Methodendemo](https://mdn.github.io/dom-examples/scroll-promises/element-methods/) ([siehe Quellcode](https://github.com/mdn/dom-examples/tree/main/scroll-promises/element-methods)) zeigt, wie der Promise-Rückgabewert von `scrollIntoView()` verwendet werden kann, um auf das Ende einer Scroll-Operation zu reagieren. Diese Technik ist hauptsächlich in Fällen nützlich, in denen das Scrollen über die Zeit hinweg sanft erfolgt (erreicht durch Setzen der [`behavior`](#behavior)-Option auf `smooth` oder durch Setzen der {{cssxref("scroll-behavior")}}-Eigenschaft des Scroll-Elements auf `smooth`).

#### HTML

Unser HTML enthält ein {{htmlelement("section")}}-Element mit mehreren Absätzen von Inhalten und ein {{htmlelement("div")}}-Element-Toolbar mit {{htmlelement("button")}}-Elementen, die verschiedene Scroll-Operationen auf dem `<section>` auslösen. Der letzte Absatz hat eine `id` von `end`.

```html
<div>
  <button class="scroll">scroll() to 1000</button>
  <button class="scrollto">scrollTo() top</button>
  <button class="scrollby">scrollBy() 200</button>
  <button class="scrollintoview">Scroll last &lt;p&gt; into view</button>
</div>

<section>
  ...

  <p id="end">...</p>
</section>
```

#### CSS

Wir geben dem `<section>`-Element eine feste {{cssxref("height")}} und einen {{cssxref("overflow-y")}}-Wert von `scroll`, sodass es vertikal scrollt, und setzen seine {{cssxref("scroll-behavior")}}-Eigenschaft auf `smooth`, damit alle Scroll-Vorgänge sanft über die Zeit hinweg animiert werden, anstatt sofort.

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

Wir erstellen auch zwei Klassen-Selektoren; wenn eine `fade-out`- oder `fade-in`-Klasse auf ein Element angewendet wird, wird eine {{cssxref("animation")}} angewendet, sodass es sanft aus- oder einblendet. Wir definieren auch {{cssxref("@keyframes")}}-Blöcke, um die erforderlichen Änderungen der {{cssxref("opacity")}} für diese Animationen zu definieren.

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

Wir beginnen damit, Referenzen zu dem `<button>`, das die `scrollIntoView()`-Operation ausführt, der `<div>`-Toolbar und dem Absatz mit einer `id` von `end` zu erfassen:

```js
const scrollIntoViewBtn = document.querySelector(".scrollintoview");
const toolbar = document.querySelector("div");
const end = document.querySelector("#end");
```

Als nächstes definieren wir eine Funktion namens `isInterrupted()`, die in Reaktion auf das Ende einer Scroll-Operation ausgeführt wird und einen booleschen `interrupted`-Wert als Parameter erhält. Sie protokolliert eine Nachricht an die Konsole, die angibt, dass das Scrollen beendet ist und ob die Operation unterbrochen wurde (`interrupted` ist `true`) oder nicht. Darüber hinaus, wenn `interrupted` `true` ist, ruft sie ein `alert()` auf, um die Unterbrechung deutlich anzuzeigen.

```js
function isInterrupted(interrupted) {
  console.log(`Scroll finished;${interrupted ? " " : " not "}interrupted`);
  if (interrupted) {
    alert("Scroll interrupted!");
  }
}
```

Wenn der Button geklickt wird, wenden wir sofort die `fade-out`-Klasse auf die Toolbar an, wodurch sie ausblendet. Wir führen dann `scrollIntoView()` auf dem End-Absatz aus, um das `<section>` zu scrollen, bis der End-Absatz in Sicht ist, `await`en die Auflösung des Promises dabei und speichern das `result` in einer Konstante. Wenn das Promise gelöst ist, rufen wir `isInterrupted()` auf, um zu melden, dass die Scroll-Operation beendet ist und ob sie unterbrochen wurde. Schließlich wenden wir die `fade-in`-Klasse auf die Toolbar an, wodurch sie wieder eingeblendet wird.

```js
scrollIntoViewBtn.addEventListener("click", async () => {
  toolbar.className = "fade-out";
  const result = await end.scrollIntoView();
  isInterrupted(result.interrupted);
  toolbar.className = "fade-in";
});
```

Der Code, der nicht relevant für `scrollIntoView()` ist, wird aus Gründen der Kürze nicht gezeigt.

#### Ergebnis

Klicken Sie auf die Buttons, um das Scrollverhalten zu sehen. Beachten Sie, wie die Toolbar ausblendet, wenn ein Button gedrückt wird, und wieder einblendet, sobald das sanfte Scrollen abgeschlossen ist. Versuchen Sie auch, einen Button zu drücken und dann schnell einen anderen Button zu drücken, bevor die erste Scroll-Operation abgeschlossen ist. Beachten Sie, wie in diesen Fällen das Scrollen als unterbrochen gemeldet wird.

{{EmbedGHLiveSample("dom-examples/scroll-promises/element-methods/", "100%", 620)}}

Sie können auch [das Demo in einem separaten Tab laden](https://mdn.github.io/dom-examples/scroll-promises/element-methods/) und den [Quellcode ansehen](https://github.com/mdn/dom-examples/tree/main/scroll-promises/element-methods).

#### Hinweis zur Funktionsprüfung

Wenn Sie dieses Beispiel in einem Browser ausführen, der keine versprochenen Rückgabewert-Scroll-Operationen unterstützt, sind die Scroll-Operationen immer noch sanft, aber die Toolbar blendet nicht aus und dann wieder ein, sobald die Operation beendet ist. Die Funktionsprüfung wird durch eine Funktion namens `supportsScrollPromises()` gehandhabt, die eine Scroll-Operation ausführt und testet, ob der Rückgabewert ein Promise ist:

```js
function supportsScrollPromises() {
  const test = section.scroll(0, 0);
  return test instanceof Promise;
}
```

Sehen Sie sich den [Quellcode an](https://github.com/mdn/dom-examples/blob/main/scroll-promises/element-methods/index.js), um zu sehen, wie die Funktionsprüfung verwendet wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element.scrollIntoViewIfNeeded()`](/de/docs/Web/API/Element/scrollIntoViewIfNeeded) {{non-standard_inline}}
