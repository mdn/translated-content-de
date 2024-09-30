---
title: "Element: scrollIntoView() Methode"
short-title: scrollIntoView()
slug: Web/API/Element/scrollIntoView
l10n:
  sourceCommit: 5c6765bacfdce92f66ce4b353ef50a1d78af6988
---

{{APIRef("DOM")}}

Die **`scrollIntoView()`**-Methode des [`Element`](/de/docs/Web/API/Element)-Interfaces scrollt die Vorfahren-Container des Elements, sodass das Element, auf dem `scrollIntoView()` aufgerufen wird, für den Benutzer sichtbar ist.

## Syntax

```js-nolint
scrollIntoView()
scrollIntoView(alignToTop)
scrollIntoView(scrollIntoViewOptions)
```

### Parameter

- `alignToTop` {{optional_inline}}

  - : Ein boolescher Wert:

    - Wenn `true`, wird die Oberseite des Elements mit der Oberseite des sichtbaren Bereichs des scrollbaren Vorfahren ausgerichtet. Entspricht `scrollIntoViewOptions: {block: "start", inline: "nearest"}`. Dies ist der Standardwert.
    - Wenn `false`, wird die Unterseite des Elements mit der Unterseite des sichtbaren Bereichs des scrollbaren Vorfahren ausgerichtet. Entspricht `scrollIntoViewOptions: {block: "end", inline: "nearest"}`.

- `scrollIntoViewOptions` {{optional_inline}}
  {{experimental_inline}}

  - : Ein Objekt mit den folgenden Eigenschaften:

    - `behavior` {{optional_inline}}
      - : Bestimmt, ob das Scrollen sofort oder sanft animiert erfolgt. Diese Option ist ein String, der einen der folgenden Werte annehmen muss:
        - `smooth`: das Scrollen sollte sanft animiert erfolgen
        - `instant`: das Scrollen sollte sofort in einem einzigen Sprung erfolgen
        - `auto`: das Scrollverhalten wird durch den berechneten Wert von {{cssxref("scroll-behavior")}} bestimmt
    - `block` {{optional_inline}}
      - : Definiert die vertikale Ausrichtung.
        Einer von `start`, `center`, `end` oder
        `nearest`. Standard ist `start`.
    - `inline` {{optional_inline}}
      - : Definiert die horizontale Ausrichtung.
        Einer von `start`, `center`, `end` oder
        `nearest`. Standard ist `nearest`.

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

Standardmäßig wird das Element an der oberen (oder unteren) Kante des scrollbaren Vorfahren ausgerichtet. Um einen benutzerdefinierten Abstand zu definieren, verwenden Sie {{cssxref("scroll-margin-top")}} oder {{cssxref("scroll-margin-bottom")}}. Dies ist oft nützlich, wenn es einen festen Header auf der Seite gibt.

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
