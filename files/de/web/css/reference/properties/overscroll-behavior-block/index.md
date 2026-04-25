---
title: "`overscroll-behavior-block` CSS property"
short-title: overscroll-behavior-block
slug: Web/CSS/Reference/Properties/overscroll-behavior-block
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`overscroll-behavior-block`** [CSS](/de/docs/Web/CSS) Eigenschaft legt das Verhalten des Browsers fest, wenn die Blockrichtungsgrenze eines Scrollbereichs erreicht wird.

Sehen Sie {{cssxref("overscroll-behavior")}} für eine vollständige Erläuterung.

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

Die Eigenschaft `overscroll-behavior-block` wird als ein Schlüsselwort aus der untenstehenden Liste von Werten angegeben.

### Werte

- `auto`
  - : Das Standardverhalten des Scroll-Overflows tritt normal auf.
- `contain`
  - : Das Standardverhalten des Scroll-Overflows (z. B. "Bounce"-Effekte) wird innerhalb des Elements beobachtet, in dem dieser Wert festgelegt ist. Es tritt jedoch kein {{Glossary("Scroll_chaining", "Scroll Chaining")}} bei benachbarten Scrollbereichen auf; die darunterliegenden Elemente scrollen nicht. Der Wert `contain` deaktiviert die native Browser-Navigation, einschließlich der vertikalen Pull-to-Refresh-Geste und der horizontalen Wisch-Navigation.
- `none`
  - : Es tritt kein Scroll Chaining zu benachbarten Scrollbereichen auf, und das Standardverhalten des Scroll-Overflows wird verhindert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verhindern von Block-Überscrollen

In diesem Demo haben wir zwei Block-Level-Boxen, eine innerhalb der anderen. Die äußere Box hat eine große {{cssxref("height")}} darauf gesetzt, sodass die Seite vertikal scrollen wird. Die innere Box hat eine kleine {{cssxref("width")}} (und `height`) so gesetzt, dass sie bequem im Anzeigebereich sitzt, aber ihrem Inhalt ist eine große `height` zugewiesen, sodass er ebenfalls vertikal scrollen wird.

Standardmäßig, wenn die innere Box gescrollt wird und eine Scroll-Grenze erreicht ist, beginnt die ganze Seite zu scrollen, was wahrscheinlich nicht gewünscht ist. Um dies in der Blockrichtung zu vermeiden, haben wir `overscroll-behavior-block: contain` auf die innere Box gesetzt.

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
- [CSS overscroll behavior](/de/docs/Web/CSS/Guides/Overscroll_behavior) Modul
