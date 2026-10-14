---
title: "`overscroll-behavior-inline` CSS property"
short-title: overscroll-behavior-inline
slug: Web/CSS/Reference/Properties/overscroll-behavior-inline
l10n:
  sourceCommit: 151d527b2d48812d732cb4f3fdffa0737682e684
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`overscroll-behavior-inline`** legt das Verhalten des Browsers fest, wenn die Grenze eines scrollbaren Bereichs in Inline-Richtung erreicht wird.

Eine ausführliche Erklärung finden Sie unter {{cssxref("overscroll-behavior")}}.

## Syntax

```css
/* Keyword values */
overscroll-behavior-inline: auto; /* default */
overscroll-behavior-inline: chain;
overscroll-behavior-inline: contain;
overscroll-behavior-inline: none;

/* Global values */
overscroll-behavior-inline: inherit;
overscroll-behavior-inline: initial;
overscroll-behavior-inline: revert;
overscroll-behavior-inline: revert-layer;
overscroll-behavior-inline: unset;
```

### Werte

Für diese Eigenschaft wird einer der folgenden Schlüsselwortwerte angegeben:

- `auto`
  - : Erlaubt das Standardverhalten an einer Scrollgrenze. Das Scrollen kann in einem anderen Scrollcontainer fortgesetzt werden.
- `chain`
  - : Erlaubt, das Scrollen außerhalb des Scrollcontainers fortzusetzen, verhindert aber „Bounce“-Effekte beim Overscrolling.
- `contain`
  - : Verhindert, dass das Scrollen außerhalb des Scrollcontainers fortgesetzt wird. „Bounce“-Effekte können weiterhin auftreten.
- `none`
  - : Verhindert, dass das Scrollen außerhalb des Scrollcontainers fortgesetzt wird, und unterbindet außerdem „Bounce“-Effekte beim Overscrolling.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Overscrolling in Inline-Richtung verhindern

In diesem Beispiel gibt es zwei Boxen auf Blockebene, von denen eine innerhalb der anderen liegt. Für die äußere Box ist eine große {{cssxref("width")}} festgelegt, sodass die Seite horizontal scrollbar ist. Für die innere Box sind eine geringe Breite und {{cssxref("height")}} festgelegt, damit sie gut in den Viewport passt. Ihr Inhalt hat jedoch eine große Breite, sodass auch die innere Box horizontal scrollbar ist.

Wenn die innere Box gescrollt und eine Scrollgrenze erreicht wird, beginnt standardmäßig die gesamte Seite zu scrollen. Das ist wahrscheinlich nicht erwünscht. Um dies in Inline-Richtung zu verhindern, haben wir für die innere Box `overscroll-behavior-inline: contain` festgelegt.

#### HTML

```html
<main>
  <div>
    <div>
      <p>
        <code>overscroll-behavior-inline</code> has been used to make it so that
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
  height: 400px;
  width: 3000px;
  background-color: white;
  background-image: repeating-linear-gradient(
    to right,
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
  overscroll-behavior-inline: contain;
}

div > div {
  height: 100%;
  width: 1500px;
  background-color: yellow;
  background-image: repeating-linear-gradient(
    to right,
    transparent 0px,
    transparent 19px,
    rgb(0 0 0 / 50%) 20px
  );
}

p {
  padding: 10px;
  background-color: rgb(255 0 0 / 50%);
  margin: 0;
  width: 360px;
  position: relative;
  top: 10px;
  left: 10px;
}
```

#### Ergebnis

{{EmbedLiveSample('Preventing_inline_overscrolling','100%', 500)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("overscroll-behavior")}}
- {{cssxref("overscroll-behavior-x")}}
- {{cssxref("overscroll-behavior-y")}}
- {{cssxref("overscroll-behavior-block")}}
- Modul [CSS overscroll behavior](/de/docs/Web/CSS/Guides/Overscroll_behavior)
