---
title: overscroll-behavior-inline
slug: Web/CSS/overscroll-behavior-inline
l10n:
  sourceCommit: aac4966bd12c77281f9374bbfaf4e17e2680ac3b
---

{{CSSRef}}

Die **`overscroll-behavior-inline`** [CSS](/de/docs/Web/CSS) Eigenschaft legt das Verhalten des Browsers fest, wenn die Grenze eines Scrollbereichs in der Inline-Richtung erreicht wird.

Siehe {{cssxref("overscroll-behavior")}} für eine vollständige Erklärung.

## Syntax

```css
/* Schlüsselwortwerte */
overscroll-behavior-inline: auto; /* Standard */
overscroll-behavior-inline: contain;
overscroll-behavior-inline: none;

/* Globale Werte */
overscroll-behavior-inline: inherit;
overscroll-behavior-inline: initial;
overscroll-behavior-inline: revert;
overscroll-behavior-inline: revert-layer;
overscroll-behavior-inline: unset;
```

Die `overscroll-behavior-inline` Eigenschaft wird als Schlüsselwort aus der untenstehenden Liste der Werte definiert.

### Werte

- `auto`
  - : Das standardmäßige Verhalten bei Scrollüberlauf tritt wie gewohnt auf.
- `contain`
  - : Das standardmäßige Verhalten bei Scrollüberlauf (z.B. "Bounce"-Effekte) wird innerhalb des Elements beobachtet, bei dem dieser Wert gesetzt ist. Es tritt jedoch keine {{Glossary("Scroll_chaining", "Scroll-Verkettung")}} bei benachbarten Scrollbereichen auf; die zugrunde liegenden Elemente scrollen nicht. Der Wert `contain` deaktiviert die native Browser-Navigation, einschließlich der vertikalen Pull-to-Refresh-Geste und der horizontalen Wischnavigation.
- `none`
  - : Es tritt keine Scroll-Verkettung bei benachbarten Scrollbereichen auf, und das standardmäßige Scrollüberlaufverhalten wird unterbunden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verhinderung von Inline-Überscrollen

In diesem Beispiel gibt es zwei Blockelemente, eines innerhalb des anderen. Das äußere Element hat eine große {{cssxref("width")}} gesetzt, damit die Seite horizontal scrollt. Das innere Element hat eine kleine Breite (und {{cssxref("height")}}), sodass es komfortabel im Ansichtsfenster sitzt, aber sein Inhalt erhält eine große Breite, sodass es ebenfalls horizontal scrollt.

Standardmäßig, wenn das innere Element gescrollt wird und eine Scrollgrenze erreicht wird, wird die gesamte Seite zu scrollen beginnen, was wahrscheinlich nicht gewünscht ist. Um dies in der Inline-Richtung zu verhindern, haben wir `overscroll-behavior-inline: contain` auf das innere Element gesetzt.

#### HTML

```html
<main>
  <div>
    <div>
      <p>
        <code>overscroll-behavior-inline</code> wurde so verwendet, dass wenn die Scrollgrenzen des gelben inneren Kastens erreicht sind, die gesamte Seite nicht zu scrollen beginnt.
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
