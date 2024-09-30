---
title: overscroll-behavior-inline
slug: Web/CSS/overscroll-behavior-inline
l10n:
  sourceCommit: aac4966bd12c77281f9374bbfaf4e17e2680ac3b
---

{{CSSRef}}

Die **`overscroll-behavior-inline`** [CSS](/de/docs/Web/CSS) Eigenschaft legt das Verhalten des Browsers fest, wenn die Grenze einer Scroll-Fläche in der Inline-Richtung erreicht wird.

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

Die Eigenschaft `overscroll-behavior-inline` wird als ein Schlüsselwort angegeben, das aus der folgenden Liste von Werten ausgewählt wird.

### Werte

- `auto`
  - : Das standardmäßige Überlaufverhalten beim Scrollen tritt wie gewohnt auf.
- `contain`
  - : Das standardmäßige Überlaufverhalten beim Scrollen (z.B. "Bounce"-Effekte) wird innerhalb des Elements, bei welchem dieser Wert gesetzt ist, beobachtet. Es tritt jedoch kein [Scroll-Chaining](/de/docs/Glossary/Scroll_chaining) in benachbarten Scroll-Bereichen auf; die darunter liegenden Elemente scrollen nicht. Der Wert `contain` deaktiviert die native Browser-Navigation, einschließlich der vertikalen Pull-to-Refresh-Geste und der horizontalen Wischnavigation.
- `none`
  - : Es tritt kein Scroll-Chaining in benachbarten Scroll-Bereichen auf, und das standardmäßige Überlaufverhalten beim Scrollen wird verhindert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verhindern von Inline-Überscrollen

In dieser Demo haben wir zwei Blockelemente, eines im anderen. Das äußere Kästchen hat eine große {{cssxref("width")}} festgelegt, sodass die Seite horizontal scrollen wird. Das innere Kästchen hat eine kleine Breite (und {{cssxref("height")}}), sodass es bequem im Ansichtsfenster sitzt, aber sein Inhalt hat eine große Breite, sodass es ebenfalls horizontal scrollen wird.

Standardmäßig, wenn das innere Kästchen gescrollt wird und eine Scrolldem Grenze erreicht wird, beginnt die gesamte Seite zu scrollen, was wahrscheinlich nicht gewünscht ist. Um dies in der Inline-Richtung zu verhindern, haben wir `overscroll-behavior-inline: contain` auf das innere Kästchen gesetzt.

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
