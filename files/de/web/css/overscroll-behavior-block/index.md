---
title: overscroll-behavior-block
slug: Web/CSS/overscroll-behavior-block
l10n:
  sourceCommit: 4ec412012be0b083ebcae4a56b425f49901143f2
---

Die **`overscroll-behavior-block`** [CSS](/de/docs/Web/CSS) Eigenschaft legt das Verhalten des Browsers fest, wenn die Grenze eines Scrollbereichs in Blockrichtung erreicht wird.

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

Die `overscroll-behavior-block` Eigenschaft wird als ein Schlüsselwort festgelegt, das aus der unten aufgeführten Werteliste ausgewählt wird.

### Werte

- `auto`
  - : Das Standard-Scroll-Überlaufverhalten tritt wie gewohnt auf.
- `contain`
  - : Das Standard-Scroll-Überlaufverhalten (z.B. "Bounce"-Effekte) wird innerhalb des Elements beobachtet, wo dieser Wert gesetzt ist. Es tritt jedoch keine {{Glossary("Scroll_chaining", "Scrollverkettung")}} in benachbarten Scrollbereichen auf; die zugrundeliegenden Elemente werden nicht scrollen. Der Wert `contain` deaktiviert die native Browser-Navigation, einschließlich der vertikalen Pull-to-Refresh-Geste und der horizontalen Wischnavigation.
- `none`
  - : Es tritt keine Scrollverkettung zu benachbarten Scrollbereichen auf, und das Standard-Scroll-Überlaufverhalten wird verhindert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verhindern von Block-Überscrollen

In diesem Beispiel haben wir zwei Block-Element-Boxen, eine innerhalb der anderen. Die äußere Box hat eine große {{cssxref("height")}} eingestellt, sodass die Seite vertikal scrollt. Die innere Box hat eine kleine {{cssxref("width")}} (und `height`) eingestellt, sodass sie bequem im Ansichtsfenster sitzt, aber ihr Inhalt hat eine große `height`, sodass sie ebenfalls vertikal scrollt.

Standardmäßig wird, wenn die innere Box gescrollt wird und eine Scrollgrenze erreicht wird, die gesamte Seite zu scrollen beginnen, was wahrscheinlich nicht gewünscht ist. Um dies in Blockrichtung zu vermeiden, haben wir `overscroll-behavior-block: contain` auf die innere Box gesetzt.

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
