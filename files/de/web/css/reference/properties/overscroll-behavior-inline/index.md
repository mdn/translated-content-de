---
title: overscroll-behavior-inline
slug: Web/CSS/Reference/Properties/overscroll-behavior-inline
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`overscroll-behavior-inline`** [CSS](/de/docs/Web/CSS) Eigenschaft legt das Verhalten des Browsers fest, wenn die Inline-Richtungsgrenze eines Scrollbereichs erreicht wird.

Eine vollständige Erklärung finden Sie unter {{cssxref("overscroll-behavior")}}.

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

Die `overscroll-behavior-inline`-Eigenschaft wird als ein Schlüsselwort angegeben, das aus der unten stehenden Liste von Werten ausgewählt wird.

### Werte

- `auto`
  - : Das Standard-Scroll-Überlaufverhalten erfolgt wie gewohnt.
- `contain`
  - : Das Standard-Scroll-Überlaufverhalten (z. B. "Bounce"-Effekte) wird innerhalb des Elements beachtet, in dem dieser Wert festgelegt ist. Es tritt jedoch kein {{Glossary("Scroll_chaining", "scroll chaining")}} in benachbarten Scrollbereichen auf; die darunter liegenden Elemente scrollen nicht. Der `contain`-Wert deaktiviert die native Browser-Navigation, einschließlich der vertikalen Pull-to-Refresh-Geste und der horizontalen Wischnavigation.
- `none`
  - : Es tritt kein Scroll-Chaining in benachbarten Scrollbereichen auf und das Standard-Scroll-Überlaufverhalten wird verhindert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verhindern von Inline-Overscrolling

In diesem Beispiel haben wir zwei Block-Level-Boxen, eine innerhalb der anderen. Die äußere Box hat eine große {{cssxref("width")}} festgelegt, sodass die Seite horizontal scrollen wird. Die innere Box hat eine kleine Breite (und {{cssxref("height")}}), sodass sie bequem im Viewport sitzt, aber ihr Inhalt hat eine große Breite, sodass auch sie horizontal scrollen wird.

Standardmäßig wird die gesamte Seite gescrollt, wenn die innere Box gescrollt wird und eine Scrollgrenze erreicht wird, was wahrscheinlich nicht gewünscht ist. Um dies in der Inline-Richtung zu verhindern, haben wir `overscroll-behavior-inline: contain` auf der inneren Box festgelegt.

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
- [CSS overscroll behavior](/de/docs/Web/CSS/Guides/Overscroll_behavior) Modul
