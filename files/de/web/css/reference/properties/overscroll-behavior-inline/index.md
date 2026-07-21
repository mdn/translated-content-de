---
title: "`overscroll-behavior-inline` CSS property"
short-title: overscroll-behavior-inline
slug: Web/CSS/Reference/Properties/overscroll-behavior-inline
l10n:
  sourceCommit: c0c85c3dc0d6ff4247c85b0144149e584d74b625
---

Die **`overscroll-behavior-inline`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt fest, wie der Browser sich verhält, wenn der Inline-Richtungsrand eines Scrollbereichs erreicht wird.

Sehen Sie {{cssxref("overscroll-behavior")}} für eine vollständige Erklärung.

## Syntax

```css
/* Keyword values */
overscroll-behavior-inline: auto; /* default */
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

Diese Eigenschaft wird mit einem der folgenden Schlüsselwortwerte spezifiziert:

- `auto`
  - : Das standardmäßige Scroll-Overflow-Verhalten tritt wie gewohnt auf.
- `contain`
  - : Das standardmäßige Scroll-Overflow-Verhalten (z.B. "Bounce"-Effekte) wird innerhalb des Elements beobachtet, in dem dieser Wert gesetzt ist. Es tritt jedoch kein {{Glossary("Scroll_chaining", "scroll chaining")}} in benachbarten Scrollbereichen auf; die darunterliegenden Elemente werden nicht scrollen. Der `contain`-Wert deaktiviert die native Browser-Navigation, einschließlich der vertikalen Pull-to-Refresh-Geste und der horizontalen Wischnavigation.
- `none`
  - : Es tritt kein Scroll-Chaining zu benachbarten Scrollbereichen auf und das standardmäßige Scroll-Overflow-Verhalten wird verhindert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Vermeidung von Overscrolling in Inline-Richtung

In diesem Beispiel haben wir zwei Block-Level-Boxen, eine innerhalb der anderen. Die äußere Box hat eine große {{cssxref("width")}} gesetzt, sodass die Seite horizontal scrollt. Die innere Box hat eine kleine Breite (und {{cssxref("height")}}) gesetzt, damit sie bequem im Ansichtsfenster sitzt, aber ihr Inhalt hat eine große Breite, sodass er ebenfalls horizontal scrollt.

Standardmäßig beginnt die gesamte Seite zu scrollen, wenn die innere Box gescrollt wird und eine Scrollgrenze erreicht wird, was wahrscheinlich nicht gewünscht ist. Um dies in der Inline-Richtung zu vermeiden, haben wir `overscroll-behavior-inline: contain` auf der inneren Box gesetzt.

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
- [CSS-Overscroll-Verhalten](/de/docs/Web/CSS/Guides/Overscroll_behavior) Modul
