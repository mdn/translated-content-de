---
title: "Element: scrollIntoView() Methode"
short-title: scrollIntoView()
slug: Web/API/Element/scrollIntoView
l10n:
  sourceCommit: 30aef1fff62894d4f47a0fc4c234248da007f504
---

{{APIRef("DOM")}}

Die [`Element`](/de/docs/Web/API/Element) Schnittstelle bietet die **`scrollIntoView()`** Methode, die die Vorfahren-Container des Elements so scrollt, dass das Element, auf dem `scrollIntoView()` aufgerufen wird, für den Benutzer sichtbar ist.

## Syntax

```js-nolint
scrollIntoView()
scrollIntoView(alignToTop)
scrollIntoView(scrollIntoViewOptions)
```

### Parameter

- `alignToTop` {{optional_inline}}

  - : Ein boolescher Wert:

    - Wenn `true`, wird der obere Rand des Elements mit dem oberen Bereich des sichtbaren Bereichs des scrollbaren Vorfahren ausgerichtet. Entspricht `scrollIntoViewOptions: {block: "start", inline: "nearest"}`. Dies ist der Standardwert.
    - Wenn `false`, wird der untere Rand des Elements mit dem unteren Bereich des sichtbaren Bereichs des scrollbaren Vorfahren ausgerichtet. Entspricht `scrollIntoViewOptions: {block: "end", inline: "nearest"}`.

- `scrollIntoViewOptions` {{optional_inline}}
  {{experimental_inline}}

  - : Ein Objekt mit den folgenden Eigenschaften:

    - `behavior` {{optional_inline}}
      - : Bestimmt, ob das Scrollen sofort oder mit einer sanften Animation erfolgt. Diese Option ist ein String, der einen der folgenden Werte annehmen muss:
        - `smooth`: Das Scrollen sollte sanft animiert werden
        - `instant`: Das Scrollen sollte sofort in einem einzigen Schritt erfolgen
        - `auto`: Das Scrollverhalten wird durch den berechneten Wert von {{cssxref("scroll-behavior")}} bestimmt
    - `block` {{optional_inline}}
      - : Definiert die vertikale Ausrichtung des Elements innerhalb des scrollbaren Vorfahren-Containers. Diese Option ist ein String und akzeptiert einen der folgenden Werte:
        - `start`: Richtet die obere Kante des Elements mit der Oberseite des scrollbaren Containers aus, sodass das Element vertikal am Anfang des sichtbaren Bereichs erscheint.
        - `center`: Richtet das Element vertikal in der Mitte des scrollbaren Containers aus und positioniert es in der Mitte des sichtbaren Bereichs.
        - `end`: Richtet die untere Kante des Elements mit der Unterseite des scrollbaren Containers aus und platziert das Element am Ende des sichtbaren Bereichs vertikal.
        - `nearest`: Scrollt das Element zur nächstgelegenen Kante in vertikaler Richtung. Wenn das Element näher zur oberen Kante des scrollbaren Containers ist, wird es oben ausgerichtet; ist es näher zur unteren Kante, wird es unten ausgerichtet. Dies minimiert die Scroll-Distanz.
        - Standard ist `start`.
    - `inline` {{optional_inline}}
      - : Definiert die horizontale Ausrichtung des Elements innerhalb des scrollbaren Vorfahren-Containers. Diese Option ist ein String und akzeptiert einen der folgenden Werte:
        - `start`: Richtet die linke Kante des Elements mit der linken Seite des scrollbaren Containers aus, sodass das Element horizontal am Anfang des sichtbaren Bereichs erscheint.
        - `center`: Richtet das Element horizontal in der Mitte des scrollbaren Containers aus und positioniert es in der Mitte des sichtbaren Bereichs.
        - `end`: Richtet die rechte Kante des Elements mit der rechten Seite des scrollbaren Containers aus und platziert das Element am Ende des sichtbaren Bereichs horizontal.
        - `nearest`: Scrollt das Element zur nächstgelegenen Kante in horizontaler Richtung. Wenn das Element näher zur linken Kante des scrollbaren Containers ist, wird es links ausgerichtet; ist es näher zur rechten Kante, wird es rechts ausgerichtet. Dies minimiert die Scroll-Distanz.
        - Standard ist `nearest`.

### Rückgabewert

Kein ({{jsxref("undefined")}}).

## Beispiele

### Verwendung von scrollIntoView()

```js
const element = document.getElementById("box");

element.scrollIntoView();
element.scrollIntoView(false);
element.scrollIntoView({ block: "end" });
element.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
```

### Kontrolle der oberen/unten Ausrichtung

Standardmäßig wird das Element an der oberen (oder unteren) Kante des scrollbaren Vorfahren ausgerichtet. Um einen benutzerdefinierten Abstand zu definieren, verwenden Sie {{cssxref("scroll-margin-top")}} oder {{cssxref("scroll-margin-bottom")}}. Dies ist oft nützlich, wenn eine feste Kopfzeile auf der Seite vorhanden ist.

#### HTML

```html
<body>
  <header class="navbar">Navbar</header>
  <main class="content">
    <button id="go-to-bottom">Go to bottom</button>
    <button id="go-to-top">Go to top</button>
  </main>
</body>
```

#### CSS

```css
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

```js
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

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element.scrollIntoViewIfNeeded()`](/de/docs/Web/API/Element/scrollIntoViewIfNeeded) {{non-standard_inline}}
