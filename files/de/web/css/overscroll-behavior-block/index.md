---
title: overscroll-behavior-block
slug: Web/CSS/overscroll-behavior-block
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`overscroll-behavior-block`** [CSS](/de/docs/Web/CSS) Eigenschaft legt das Verhalten des Browsers fest, wenn die Blockrichtung einer Scrollbereichsgrenze erreicht wird.

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

Die Eigenschaft `overscroll-behavior-block` wird als ein Schlüsselwort aus der unten stehenden Liste von Werten spezifiziert.

### Werte

- `auto`
  - : Das Standardverhalten bei Überlauf beim Scrollen tritt wie gewohnt auf.
- `contain`
  - : Standardverhalten bei Überlauf beim Scrollen (z.B. "Bounce"-Effekte) wird innerhalb des Elements beobachtet, in dem dieser Wert gesetzt ist. Es tritt jedoch kein {{Glossary("Scroll_chaining", "Scroll Chaining")}} in benachbarten Scrollbereichen auf; die darunterliegenden Elemente scrollen nicht. Der Wert `contain` deaktiviert die native Browser-Navigation, einschließlich der vertikalen Pull-to-Refresh-Geste und der horizontalen Wischnavigation.
- `none`
  - : Kein Scroll Chaining tritt in benachbarten Scrollbereichen auf, und das Standardverhalten bei Überlauf beim Scrollen wird verhindert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verhindern von Block-Overscrolling

In diesem Beispiel haben wir zwei Block-Level-Boxen, eine innerhalb der anderen. Die äußere Box hat eine große {{cssxref("height")}} gesetzt, sodass die Seite vertikal scrollt. Die innere Box hat eine kleine {{cssxref("width")}} (und `height`) gesetzt, sodass sie bequem in den Viewport passt, aber ihr Inhalt hat eine große `height`, damit sie ebenfalls vertikal scrollt.

Standardmäßig, wenn die innere Box gescrollt wird und eine Scrollgrenze erreicht wird, beginnt die gesamte Seite zu scrollen, was wahrscheinlich nicht gewünscht ist. Um dies im Block Richtung zu vermeiden, haben wir `overscroll-behavior-block: contain` auf der inneren Box gesetzt.

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
    rgb(0 0 0 / 0%) 0px,
    rgb(0 0 0 / 0%) 19px,
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
    rgb(0 0 0 / 0%) 0px,
    rgb(0 0 0 / 0%) 19px,
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
