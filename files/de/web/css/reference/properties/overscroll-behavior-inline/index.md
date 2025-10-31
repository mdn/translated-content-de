---
title: overscroll-behavior-inline
slug: Web/CSS/Reference/Properties/overscroll-behavior-inline
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`overscroll-behavior-inline`** [CSS](/de/docs/Web/CSS) Eigenschaft legt das Verhalten des Browsers fest, wenn die Grenze eines Scrollbereichs in der Inline-Richtung erreicht wird.

Siehe {{cssxref("overscroll-behavior")}} für eine vollständige Erklärung.

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

Die Eigenschaft `overscroll-behavior-inline` wird als ein Schlüsselwort aus der unten stehenden Liste von Werten angegeben.

### Werte

- `auto`
  - : Das standardmäßige Scrollüberlaufsverhalten tritt wie gewohnt auf.
- `contain`
  - : Das standardmäßige Scrollüberlaufsverhalten (z. B. "Bounce"-Effekte) wird innerhalb des Elements, bei dem dieser Wert gesetzt ist, beobachtet. Es tritt jedoch keine {{Glossary("Scroll_chaining", "Scroll-Kopplung")}} bei angrenzenden Scrollbereichen auf; die zugrunde liegenden Elemente scrollen nicht. Der Wert `contain` deaktiviert die native Browsernavigation, einschließlich der vertikalen "Pull-to-Refresh"-Geste und der horizontalen Wischnavigation.
- `none`
  - : Es tritt keine Scroll-Kopplung mit angrenzenden Scrollbereichen auf, und das standardmäßige Scrollüberlaufsverhalten wird verhindert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verhindern von Inline-Überscrolling

In diesem Demo haben wir zwei Block-Level-Boxen, eine innerhalb der anderen. Die äußere Box hat eine große {{cssxref("width")}}, sodass die Seite horizontal scrollen wird. Die innere Box hat eine kleine Breite (und {{cssxref("height")}}), damit sie komfortabel innerhalb des Viewports sitzt, aber ihr Inhalt erhält eine große Breite, sodass sie ebenfalls horizontal scrollen wird.

Standardmäßig wird, wenn die innere Box gescrollt wird und eine Scrollgrenze erreicht ist, die gesamte Seite zu scrollen beginnen, was wahrscheinlich nicht unser Ziel ist. Um dies in der Inline-Richtung zu verhindern, haben wir `overscroll-behavior-inline: contain` auf die innere Box gesetzt.

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
- [CSS overscroll behavior](/de/docs/Web/CSS/CSS_overscroll_behavior) Modul
