---
title: "Element: scrollIntoView() Methode"
short-title: scrollIntoView()
slug: Web/API/Element/scrollIntoView
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("DOM")}}

Die Methode **`scrollIntoView()`** der [`Element`](/de/docs/Web/API/Element) Schnittstelle scrollt die enthaltenen Vorfahren so, dass das Element, auf dem `scrollIntoView()` aufgerufen wird, für den Benutzer sichtbar ist.

## Syntax

```js-nolint
scrollIntoView()
scrollIntoView(alignToTop)
scrollIntoView(scrollIntoViewOptions)
```

### Parameter

- `alignToTop` {{optional_inline}}

  - : Ein boolescher Wert:
    - Wenn `true`, wird die Oberkante des Elements an der Oberkante des sichtbaren Bereichs des scrollbaren Vorfahren ausgerichtet. Entspricht `scrollIntoViewOptions: {block: "start", inline: "nearest"}`. Dies ist der Standardwert.
    - Wenn `false`, wird die Unterkante des Elements an der Unterkante des sichtbaren Bereichs des scrollbaren Vorfahren ausgerichtet. Entspricht `scrollIntoViewOptions: {block: "end", inline: "nearest"}`.

- `scrollIntoViewOptions` {{optional_inline}}
  {{experimental_inline}}
  - : Ein Objekt mit folgenden Eigenschaften:
    - `behavior` {{optional_inline}}
      - : Bestimmt, ob das Scrollen sofort oder sanft animiert erfolgt. Diese Option ist ein String, der einen der folgenden Werte annehmen muss:
        - `smooth`: Scrollen sollte sanft animieren
        - `instant`: Scrollen sollte sofort in einem einzigen Sprung erfolgen
        - `auto`: Scrollverhalten wird durch den berechneten Wert von {{cssxref("scroll-behavior")}} bestimmt
    - `block` {{optional_inline}}
      - : Definiert die vertikale Ausrichtung des Elements innerhalb des scrollbaren Vorfahrencontainers. Diese Option ist ein String und akzeptiert einen der folgenden Werte:
        - `start`: Richtet die Oberkante des Elements an der Oberkante des scrollbaren Containers aus und macht das Element am Anfang des sichtbaren Bereichs vertikal sichtbar.
        - `center`: Richtet das Element vertikal in der Mitte des scrollbaren Containers aus und positioniert es in der Mitte des sichtbaren Bereichs.
        - `end`: Richtet die Unterkante des Elements an der Unterkante des scrollbaren Containers aus und platziert das Element am Ende des sichtbaren Bereichs vertikal.
        - `nearest`: Scrollt das Element zur nächstgelegenen Kante in vertikaler Richtung. Wenn das Element näher an der Oberkante des scrollbaren Containers ist, wird es nach oben ausgerichtet; wenn es näher an der Unterkante ist, wird es nach unten ausgerichtet. Dies minimiert die Scrollstrecke.
        - Standardmäßig `start`.
    - `inline` {{optional_inline}}
      - : Definiert die horizontale Ausrichtung des Elements innerhalb des scrollbaren Vorfahrencontainers. Diese Option ist ein String und akzeptiert einen der folgenden Werte:
        - `start`: Richtet die linke Kante des Elements an der linken Seite des scrollbaren Containers aus und macht das Element am Anfang des sichtbaren Bereichs horizontal sichtbar.
        - `center`: Richtet das Element horizontal in der Mitte des scrollbaren Containers aus und positioniert es in der Mitte des sichtbaren Bereichs.
        - `end`: Richtet die rechte Kante des Elements an der rechten Seite des scrollbaren Containers aus und platziert das Element am Ende des sichtbaren Bereichs horizontal.
        - `nearest`: Scrollt das Element zur nächstgelegenen Kante in horizontaler Richtung. Wenn das Element näher an der linken Kante des scrollbaren Containers ist, wird es nach links ausgerichtet; wenn es näher an der rechten Kante ist, wird es nach rechts ausgerichtet. Dies minimiert die Scrollstrecke.
        - Standardmäßig `nearest`.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Verwendung von scrollIntoView()

```js
const element = document.getElementById("box");

element.scrollIntoView();
element.scrollIntoView(false);
element.scrollIntoView({ block: "end" });
element.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
```

### Steuerung der Ausrichtung oben/unten

Standardmäßig wird das Element an der Ober- (oder Unter-)kante des scrollbaren Vorfahren ausgerichtet. Um einen benutzerdefinierten Abstand zu definieren, verwenden Sie {{cssxref("scroll-margin-top")}} oder {{cssxref("scroll-margin-bottom")}}. Dies ist oft nützlich, wenn es eine feste Kopfzeile auf der Seite gibt.

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
