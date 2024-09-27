---
title: overscroll-behavior-inline
slug: Web/CSS/overscroll-behavior-inline
l10n:
  sourceCommit: aac4966bd12c77281f9374bbfaf4e17e2680ac3b
---

{{CSSRef}}

Die **`overscroll-behavior-inline`** [CSS](/de/docs/Web/CSS) Eigenschaft legt das Verhalten des Browsers fest, wenn die Inline-Grenze eines scrollbaren Bereichs erreicht wird.

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

Die `overscroll-behavior-inline` Eigenschaft wird als Schlüsselwort angegeben, das aus der untenstehenden Werteliste gewählt wird.

### Werte

- `auto`
  - : Das standardmäßige Verhalten bei Überlauf des Scrolls tritt wie gewohnt auf.
- `contain`
  - : Das standardmäßige Verhalten bei Überlauf des Scrolls (z. B. "Bounce"-Effekte) wird innerhalb des Elements beobachtet, in dem dieser Wert gesetzt ist. Es tritt jedoch keine [scroll chaining](/de/docs/Glossary/Scroll_chaining) in benachbarten scrollbaren Bereichen auf; die darunterliegenden Elemente werden nicht gescrollt. Der Wert `contain` deaktiviert die native Browser-Navigation, einschließlich der vertikalen Pull-to-Refresh-Geste und der horizontalen Wischnavigation.
- `none`
  - : Es tritt kein Scroll-Chaining in benachbarten Bereichen auf, und das standardmäßige Verhalten bei Überlauf des Scrolls wird verhindert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verhindern von Inline-Overscrolling

In diesem Demo-Beispiel haben wir zwei Block-Level-Boxen, eine innerhalb der anderen. Die äußere Box hat eine große {{cssxref("width")}}, sodass die Seite horizontal scrollt. Die innere Box hat eine kleine Breite (und {{cssxref("height")}}) und passt bequem in den Viewport, aber ihr Inhalt hat eine große Breite, sodass auch sie horizontal scrollt.

Standardmäßig, wenn die innere Box gescrollt wird und eine Scrollgrenze erreicht ist, beginnt die ganze Seite zu scrollen, was wahrscheinlich nicht gewünscht ist. Um dies in der Inline-Richtung zu vermeiden, haben wir `overscroll-behavior-inline: contain` auf die innere Box gesetzt.

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
  overscroll-behavior-inline: contain;
}

div > div {
  height: 100%;
  width: 1500px;
  background-color: yellow;
  background-image: repeating-linear-gradient(
    to right,
    rgb(0 0 0 / 0%) 0px,
    rgb(0 0 0 / 0%) 19px,
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

- [Take control of your scroll: customizing pull-to-refresh and overflow effects](https://developer.chrome.com/blog/overscroll-behavior/#demo)
