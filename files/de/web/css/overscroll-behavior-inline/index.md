---
title: overscroll-behavior-inline
slug: Web/CSS/overscroll-behavior-inline
l10n:
  sourceCommit: 4ec412012be0b083ebcae4a56b425f49901143f2
---

Die **`overscroll-behavior-inline`** [CSS](/de/docs/Web/CSS) Eigenschaft legt das Verhalten des Browsers fest, wenn die Inline-Richtungsgrenze eines Scrollbereichs erreicht ist.

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

Die `overscroll-behavior-inline` Eigenschaft wird als ein Schlüsselwort aus der unten stehenden Liste von Werten angegeben.

### Werte

- `auto`
  - : Das standardmäßige Überscroll-Verhalten tritt wie gewohnt auf.
- `contain`
  - : Das standardmäßige Überscroll-Verhalten (z.B. "Bounce"-Effekte) wird innerhalb des Elements beobachtet, auf dem dieser Wert gesetzt ist. Es tritt jedoch kein {{Glossary("Scroll_chaining", "Scroll-Chaining")}} in angrenzenden Scrollbereichen auf; die darunterliegenden Elemente scrollen nicht. Der Wert `contain` deaktiviert die native Browser-Navigation, einschließlich der vertikalen Pull-to-Refresh-Geste und der horizontalen Wisch-Navigation.
- `none`
  - : Kein Scroll-Chaining tritt in angrenzenden Scrollbereichen auf, und das standardmäßige Überscroll-Verhalten wird verhindert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verhindern von Inline-Overscrolling

In diesem Demo haben wir zwei Block-Level-Boxen, eine innerhalb der anderen. Die äußere Box hat eine große {{cssxref("width")}} gesetzt, sodass die Seite horizontal scrollen wird. Die innere Box hat eine kleine Breite (und {{cssxref("height")}}) gesetzt, sodass sie bequem im Ansichtsfenster sitzt, aber ihr Inhalt hat eine große Breite, sodass er ebenfalls horizontal scrollen wird.

Standardmäßig, wenn die innere Box gescrollt wird und eine Scrollgrenze erreicht ist, wird die ganze Seite anfangen zu scrollen, was wahrscheinlich nicht gewünscht ist. Um dies in der Inline-Richtung zu vermeiden, haben wir `overscroll-behavior-inline: contain` auf der inneren Box gesetzt.

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
