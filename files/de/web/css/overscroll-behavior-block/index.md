---
title: overscroll-behavior-block
slug: Web/CSS/overscroll-behavior-block
l10n:
  sourceCommit: aac4966bd12c77281f9374bbfaf4e17e2680ac3b
---

{{CSSRef}}

Die **`overscroll-behavior-block`** [CSS](/de/docs/Web/CSS) Eigenschaft legt das Verhalten des Browsers fest, wenn die Blockrichtungsgrenze eines Scrollbereichs erreicht wird.

Siehe {{cssxref("overscroll-behavior")}} für eine vollständige Erklärung.

## Syntax

```css
/* Keyword values */
overscroll-behavior-block: auto; /* default */
overscroll-behavior-block: contain;
overscroll-behavior-block: none;

/* Global values */
overscroll-behavior-block: inherit;
overscroll-behavior-block: initial;
overscroll-behavior-block: revert;
overscroll-behavior-block: revert-layer;
overscroll-behavior-block: unset;
```

Die `overscroll-behavior-block` Eigenschaft wird als ein Stichwort aus der unten stehenden Werteliste spezifiziert.

### Werte

- `auto`
  - : Das standardmäßige Überlaufverhalten des Scrollens tritt normal auf.
- `contain`
  - : Standardmäßiges Überlaufverhalten des Scrollens (z.B. "Bounce"-Effekte) wird innerhalb des Elements beobachtet, wo dieser Wert gesetzt ist. Es tritt jedoch keine {{Glossary("Scroll_chaining", "Scroll-Verkettung")}} bei benachbarten Scrollbereichen auf; die darunter liegenden Elemente werden nicht scrollen. Der `contain` Wert deaktiviert die native Browser-Navigation, einschließlich der vertikalen Pull-to-Refresh-Geste und der horizontalen Wisch-Navigation.
- `none`
  - : Keine Scroll-Verkettung tritt bei benachbarten Scrollbereichen auf und das standardmäßige Überlaufverhalten des Scrollens wird verhindert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verhindern des Block-Overscrollens

In diesem Beispiel haben wir zwei Block-Elemente, eines innerhalb des anderen. Die äußere Box hat eine große {{cssxref("height")}} gesetzt, damit die Seite vertikal scrollt. Die innere Box hat eine kleine {{cssxref("width")}} (und `height`) gesetzt, sodass sie bequem innerhalb des Sichtfensters sitzt, aber ihrem Inhalt wird eine große `height` gegeben, damit er auch vertikal scrollt.

Standardmäßig, wenn die innere Box gescrollt wird und eine Scrollgrenze erreicht ist, beginnt die gesamte Seite zu scrollen, was wahrscheinlich nicht gewünscht ist. Um dies in der Blockrichtung zu vermeiden, haben wir `overscroll-behavior-block: contain` auf die innere Box gesetzt.

#### HTML

```html
<main>
  <div>
    <div>
      <p>
        <code>overscroll-behavior-block</code> has been used to make it so that
        when the scroll boundaries of the yellow inner box are reached, the
        whole page does not begin to scroll.
      </p>
    </div>
  </div>
</main>
```

#### CSS

```css
main {
  height: 3000px;
  width: 500px;
  background-color: white;
  background-image: repeating-linear-gradient(
    to bottom,
    rgb(0 0 0 / 0%) 0px,
    rgb(0 0 0 / 0%) 19px,
    rgb(0 0 0 / 50%) 20px
  );
}

main > div {
  height: 300px;
  width: 400px;
  overflow: auto;
  position: relative;
  top: 50px;
  left: 50px;
  overscroll-behavior-block: contain;
}

div > div {
  height: 1500px;
  width: 100%;
  background-color: yellow;
  background-image: repeating-linear-gradient(
    to bottom,
    rgb(0 0 0 / 0%) 0px,
    rgb(0 0 0 / 0%) 19px,
    rgb(0 0 0 / 50%) 20px
  );
}

p {
  padding: 10px;
  background-color: rgb(255 0 0 / 50%);
  margin: 0;
  width: 340px;
  position: relative;
  top: 10px;
  left: 10px;
}
```

#### Ergebnis

{{EmbedLiveSample('Preventing_block_overscrolling','100%', 500)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Take control of your scroll: customizing pull-to-refresh and overflow effects](https://developer.chrome.com/blog/overscroll-behavior/#full-demo)
