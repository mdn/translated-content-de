---
title: overscroll-behavior-block
slug: Web/CSS/Reference/Properties/overscroll-behavior-block
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`overscroll-behavior-block`**-[CSS](/de/docs/Web/CSS)-Eigenschaft legt das Verhalten des Browsers fest, wenn die Block-Richtungsgrenze eines Scrollbereichs erreicht wird.

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

Die `overscroll-behavior-block`-Eigenschaft wird als ein Schlüsselwort aus der untenstehenden Werteliste angegeben.

### Werte

- `auto`
  - : Das Standardverhalten bei Überlauf von Scrollen tritt wie gewohnt auf.
- `contain`
  - : Das Standardverhalten bei Überlauf von Scrollen (z.B. "Bounce"-Effekte) wird innerhalb des Elements beobachtet, bei dem dieser Wert gesetzt ist. Es tritt jedoch keine {{Glossary("Scroll_chaining", "Scroll-Verkettung")}} in angrenzenden Scrollbereichen auf; die darunterliegenden Elemente scrollen nicht. Der `contain`-Wert deaktiviert die native Browser-Navigation, einschließlich der vertikalen Pull-to-Refresh-Geste und der horizontalen Wisch-Navigation.
- `none`
  - : Es tritt keine Scroll-Verkettung in angrenzenden Scrollbereichen auf, und das Standardverhalten bei Überlauf von Scrollen wird verhindert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verhindern von Blocküberscrollen

In diesem Demo haben wir zwei Blockelemente, eines innerhalb des anderen. Das äußere Element hat eine große {{cssxref("height")}} gesetzt, sodass die Seite vertikal scrollen wird. Das innere Element hat eine kleine {{cssxref("width")}} (und `height`) eingestellt, sodass es bequem innerhalb des Viewports sitzt, aber sein Inhalt hat eine große `height`, sodass es ebenfalls vertikal scrollen wird.

Standardmäßig, wenn das innere Element gescrollt wird und eine Scrollgrenze erreicht ist, beginnt die ganze Seite zu scrollen, was wahrscheinlich nicht erwünscht ist. Um dies in der Blockrichtung zu verhindern, haben wir `overscroll-behavior-block: contain` auf das innere Element gesetzt.

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
    transparent 0px,
    transparent 19px,
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
    transparent 0px,
    transparent 19px,
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

- {{cssxref("overscroll-behavior")}}
- {{cssxref("overscroll-behavior-x")}}
- {{cssxref("overscroll-behavior-y")}}
- {{cssxref("overscroll-behavior-inline")}}
- [CSS-Overscroll-Verhalten](/de/docs/Web/CSS/Guides/Overscroll_behavior) Modul
