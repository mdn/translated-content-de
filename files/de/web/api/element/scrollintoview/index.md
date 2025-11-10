---
title: "Element: scrollIntoView()-Methode"
short-title: scrollIntoView()
slug: Web/API/Element/scrollIntoView
l10n:
  sourceCommit: e4ac7f209c4066e17b645535d9b6f726aae01b63
---

{{APIRef("DOM")}}

Die **`scrollIntoView()`**-Methode des [`Element`](/de/docs/Web/API/Element)-Interfaces scrollt die übergeordneten Container des Elements so, dass das Element, auf dem `scrollIntoView()` aufgerufen wird, für den Benutzer sichtbar ist.

## Syntax

```js-nolint
scrollIntoView()
scrollIntoView(alignToTop)
scrollIntoView(options)
```

### Parameter

- `alignToTop` {{optional_inline}}
  - : Ein boolescher Wert:
    - Wenn `true` ist, wird die Oberkante des Elements an der oberen sichtbaren Fläche des scrollbaren Vorfahren ausgerichtet. Entspricht `scrollIntoViewOptions: {block: "start", inline: "nearest"}`. Dies ist der Standardwert.
    - Wenn `false` ist, wird die Unterkante des Elements an der unteren sichtbaren Fläche des scrollbaren Vorfahren ausgerichtet. Entspricht `scrollIntoViewOptions: {block: "end", inline: "nearest"}`.

- `options` {{optional_inline}}
  - : Ein Objekt mit den folgenden Eigenschaften:
    - `behavior` {{optional_inline}}
      - : Bestimmt, ob das Scrollen sofort erfolgt oder sanft animiert. Der Wert kann einer der folgenden sein:
        - `smooth`: Scrollen sollte sanft animiert werden
        - `instant`: Scrollen sollte sofort in einem Sprung erfolgen
        - `auto`: Das Scrollverhalten wird durch den berechneten Wert von {{cssxref("scroll-behavior")}} bestimmt

        Der Standardwert ist `auto`.

    - `block` {{optional_inline}}
      - : Definiert die vertikale Ausrichtung des Elements innerhalb des scrollbaren Vorfahrencontainers. Der Wert kann einer der folgenden sein:
        - `start`: Richtet die Oberkante des Elements an der Oberseite des scrollbaren Containers aus und lässt das Element am Anfang des sichtbaren Bereichs vertikal erscheinen.
        - `center`: Richtet das Element vertikal in der Mitte des scrollbaren Containers aus und positioniert es in der Mitte des sichtbaren Bereichs.
        - `end`: Richtet die Unterkante des Elements an der Unterseite des scrollbaren Containers aus und platziert das Element am Ende des sichtbaren Bereichs vertikal.
        - `nearest`: Scrollt das Element zur nächsten Kante in vertikaler Richtung. Wenn das Element näher an der oberen Kante des scrollbaren Containers ist, wird es oben ausgerichtet; wenn es näher an der unteren Kante ist, wird es unten ausgerichtet. Dies minimiert die Scrollweite.

        Der Standardwert ist `start`.

    - `container` {{optional_inline}}
      - : Definiert den scrollbaren Vorfahrencontainer. Der Wert kann einer der folgenden sein:
        - `all`: Alle scrollbaren Container sind betroffen (einschließlich des Viewports).
        - `nearest`: Nur der nächste scrollbare Container wird vom Scrollen beeinflusst.

        Der Standardwert ist `all`.

    - `inline` {{optional_inline}}
      - : Definiert die horizontale Ausrichtung des Elements innerhalb des scrollbaren Vorfahrencontainers. Der Wert kann einer der folgenden sein:
        - `start`: Richtet die linke Kante des Elements an der linken Seite des scrollbaren Containers aus und lässt das Element am Anfang des sichtbaren Bereichs horizontal erscheinen.
        - `center`: Richtet das Element horizontal in der Mitte des scrollbaren Containers aus und positioniert es in der Mitte des sichtbaren Bereichs.
        - `end`: Richtet die rechte Kante des Elements an der rechten Seite des scrollbaren Containers aus und platziert das Element am Ende des sichtbaren Bereichs horizontal.
        - `nearest`: Scrollt das Element zur nächsten Kante in horizontaler Richtung. Wenn das Element näher an der linken Kante des scrollbaren Containers ist, wird es links ausgerichtet; wenn es näher an der rechten Kante ist, wird es rechts ausgerichtet. Dies minimiert die Scrollweite.

        Der Standardwert ist `nearest`.

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

### Kontrolle der oberen/untenen Ausrichtung

Standardmäßig wird das Element an der oberen (oder unteren) Kante des scrollbaren Vorfahren ausgerichtet. Um einen benutzerdefinierten Abstand zu definieren, verwenden Sie {{cssxref("scroll-margin-top")}} oder {{cssxref("scroll-margin-bottom")}}. Dies ist oft nützlich, wenn sich ein feststehender Header auf der Seite befindet.

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
