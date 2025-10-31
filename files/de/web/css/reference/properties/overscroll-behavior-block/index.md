---
title: overscroll-behavior-block
slug: Web/CSS/Reference/Properties/overscroll-behavior-block
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`overscroll-behavior-block`** [CSS](/de/docs/Web/CSS) Eigenschaft legt das Verhalten des Browsers fest, wenn die Blockrichtungsgrenze eines scrollbaren Bereichs erreicht wird.

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

Die Eigenschaft `overscroll-behavior-block` wird als ein Schlüsselwort aus der unten stehenden Liste von Werten angegeben.

### Werte

- `auto`
  - : Das Standardverhalten bei Scrollüberlauf tritt wie gewohnt auf.
- `contain`
  - : Das Standardverhalten bei Scrollüberlauf (z.B. "Bounce"-Effekte) wird innerhalb des Elements beobachtet, bei dem dieser Wert gesetzt ist. Es tritt jedoch keine {{Glossary("Scroll_chaining", "Scroll-Verkettung")}} bei benachbarten scrollbaren Bereichen auf; die darunterliegenden Elemente werden nicht scrollen. Der Wert `contain` deaktiviert die native Browser-Navigation, einschließlich der vertikalen Pull-to-Refresh-Geste und der horizontalen Wisch-Navigation.
- `none`
  - : Es tritt keine Scroll-Verkettung zu benachbarten scrollbaren Bereichen auf, und das Standardverhalten bei Scrollüberlauf wird verhindert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verhindern von Block-Überscrollen

In dieser Demo haben wir zwei Block-Level-Boxen, eine innerhalb der anderen. Die äußere Box hat eine große {{cssxref("height")}} eingestellt, sodass die Seite vertikal scrollen wird. Die innere Box hat eine kleine {{cssxref("width")}} (und `height`) eingestellt, sodass sie bequem innerhalb des Ansichtsfensters sitzt, aber ihr Inhalt hat eine große `height`, sodass auch sie vertikal scrollen wird.

Standardmäßig, wenn die innere Box gescrollt wird und eine Scrollgrenze erreicht ist, beginnt die gesamte Seite zu scrollen, was wahrscheinlich nicht gewünscht ist. Um dies in Blockrichtung zu vermeiden, haben wir `overscroll-behavior-block: contain` auf die innere Box gesetzt.

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
- [CSS overscroll behavior](/de/docs/Web/CSS/CSS_overscroll_behavior) Modul
