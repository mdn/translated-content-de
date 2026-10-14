---
title: "`overscroll-behavior-block` CSS property"
short-title: overscroll-behavior-block
slug: Web/CSS/Reference/Properties/overscroll-behavior-block
l10n:
  sourceCommit: 151d527b2d48812d732cb4f3fdffa0737682e684
---

Die **`overscroll-behavior-block`**-[CSS](/de/docs/Web/CSS)-Eigenschaft legt fest, wie sich der Browser verhält, wenn die Grenze eines scrollbaren Bereichs in Blockrichtung erreicht wird.

Eine ausführliche Erklärung finden Sie unter {{cssxref("overscroll-behavior")}}.

## Syntax

```css
/* Keyword values */
overscroll-behavior-block: auto; /* default */
overscroll-behavior-block: chain;
overscroll-behavior-block: contain;
overscroll-behavior-block: none;

/* Global values */
overscroll-behavior-block: inherit;
overscroll-behavior-block: initial;
overscroll-behavior-block: revert;
overscroll-behavior-block: revert-layer;
overscroll-behavior-block: unset;
```

### Werte

Diese Eigenschaft wird mit einem der folgenden Schlüsselwortwerte angegeben:

- `auto`
  - : Ermöglicht das Standardverhalten an einer Scrollgrenze. Das Scrollen kann in einem anderen Scrollcontainer fortgesetzt werden.
- `chain`
  - : Ermöglicht es, außerhalb des Scrollcontainers weiterzuscrollen, verhindert aber „Bounce“-Effekte beim Overscrolling.
- `contain`
  - : Verhindert, dass das Scrollen außerhalb des Scrollcontainers fortgesetzt wird. „Bounce“-Effekte können weiterhin auftreten.
- `none`
  - : Verhindert, dass das Scrollen außerhalb des Scrollcontainers fortgesetzt wird, und verhindert außerdem „Bounce“-Effekte beim Overscrolling.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Overscrolling in Blockrichtung verhindern

In diesem Beispiel gibt es zwei Block-Boxen, von denen sich eine innerhalb der anderen befindet. Für die äußere Box ist eine große {{cssxref("height")}} festgelegt, sodass die Seite vertikal gescrollt werden kann. Für die innere Box sind eine kleine {{cssxref("width")}} und eine kleine `height` festgelegt, sodass sie gut in den Viewport passt. Ihr Inhalt hat jedoch eine große `height`, sodass auch die innere Box vertikal gescrollt werden kann.

Wenn die innere Box bis zu einer Scrollgrenze gescrollt wird, beginnt standardmäßig die gesamte Seite zu scrollen. Das ist wahrscheinlich nicht erwünscht. Um dies in Blockrichtung zu verhindern, haben wir für die innere Box `overscroll-behavior-block: contain` festgelegt.

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
- Modul [CSS overscroll behavior](/de/docs/Web/CSS/Guides/Overscroll_behavior)
