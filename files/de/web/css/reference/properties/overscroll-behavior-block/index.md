---
title: "`overscroll-behavior-block` CSS property"
short-title: overscroll-behavior-block
slug: Web/CSS/Reference/Properties/overscroll-behavior-block
l10n:
  sourceCommit: c0c85c3dc0d6ff4247c85b0144149e584d74b625
---

Die **`overscroll-behavior-block`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt fest, wie sich der Browser verhält, wenn die Blockrichtungs-Grenze eines Scrollbereichs erreicht wird.

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

### Werte

Diese Eigenschaft wird als einer der folgenden Schlüsselwortwerte angegeben:

- `auto`
  - : Das standardmäßige Scroll-Overflow-Verhalten tritt normal auf.
- `contain`
  - : Standardmäßiges Scroll-Overflow-Verhalten (z.B. "Bounce"-Effekte) wird innerhalb des Elements beobachtet, wo dieser Wert gesetzt ist. Es tritt jedoch kein {{Glossary("Scroll_chaining", "Scroll-Chaining")}} bei benachbarten Scroll-Bereichen auf; die darunterliegenden Elemente scrollen nicht. Der Wert `contain` deaktiviert die native Browser-Navigation, einschließlich der vertikalen Pull-to-Refresh-Geste und der horizontalen Swipe-Navigation.
- `none`
  - : Kein Scroll-Chaining tritt bei benachbarten Scroll-Bereichen auf, und das standardmäßige Scroll-Overflow-Verhalten wird verhindert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Vermeidung von Block-Overscrolling

In diesem Demo haben wir zwei Block-Level-Boxen, eine innerhalb der anderen. Die äußere Box hat eine große {{cssxref("height")}} gesetzt, sodass die Seite vertikal scrollt. Die innere Box hat eine kleine {{cssxref("width")}} (und `height`) gesetzt, sodass sie bequem im Ansichtsfenster sitzt, aber ihr Inhalt hat eine große `height`, sodass sie ebenfalls vertikal scrollt.

Standardmäßig, wenn die innere Box gescrollt wird und eine Scroll-Grenze erreicht wird, beginnt die gesamte Seite zu scrollen, was wahrscheinlich nicht erwünscht ist. Um dies in der Blockrichtung zu vermeiden, haben wir `overscroll-behavior-block: contain` auf der inneren Box gesetzt.

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
- [CSS Overscroll-Verhalten](/de/docs/Web/CSS/Guides/Overscroll_behavior) Modul
