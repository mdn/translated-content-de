---
title: overscroll-behavior-inline
slug: Web/CSS/overscroll-behavior-inline
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`overscroll-behavior-inline`** [CSS](/de/docs/Web/CSS) Eigenschaft legt das Verhalten des Browsers fest, wenn die inline Richtung eines Scrollbereichs erreicht wird.

Siehe {{cssxref("overscroll-behavior")}} für eine ausführliche Erklärung.

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

Die Eigenschaft `overscroll-behavior-inline` wird als ein Schlüsselwort aus der untenstehenden Liste von Werten festgelegt.

### Werte

- `auto`
  - : Das Standardverhalten für scrollenden Überlauf tritt normal auf.
- `contain`
  - : Das Standardverhalten für scrollenden Überlauf (z.B. "Bounce"-Effekte) wird innerhalb des Elements beobachtet, in dem dieser Wert gesetzt ist. Es tritt jedoch kein {{Glossary("Scroll_chaining", "Scroll-Chaining")}} in benachbarten Scrollbereichen auf; die darunter liegenden Elemente werden nicht scrollen. Der Wert `contain` deaktiviert die native Browser-Navigation, einschließlich der vertikalen Pull-to-Refresh-Geste und der horizontalen Swipe-Navigation.
- `none`
  - : Es tritt kein Scroll-Chaining mit benachbarten Scrollbereichen auf, und das Standardverhalten für scrollenden Überlauf wird verhindert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verhindern von Überscrollen in Inline-Richtung

In diesem Demo haben wir zwei Block-Elemente, eines innerhalb des anderen. Das äußere Element hat eine große {{cssxref("width")}} gesetzt, sodass die Seite horizontal scrollt. Das innere Element hat eine geringe Breite (und {{cssxref("height")}}) gesetzt, damit es bequem im Sichtfenster sitzt, aber sein Inhalt hat eine große Breite, sodass es ebenfalls horizontal scrollt.

Standardmäßig, wenn das innere Element gescrollt wird und eine Scroll-Grenze erreicht wird, beginnt die gesamte Seite zu scrollen, was wahrscheinlich nicht erwünscht ist. Um dies in der Inline-Richtung zu vermeiden, haben wir `overscroll-behavior-inline: contain` auf dem inneren Element gesetzt.

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

- {{cssxref("overscroll-behavior")}}
- {{cssxref("overscroll-behavior-x")}}
- {{cssxref("overscroll-behavior-y")}}
- {{cssxref("overscroll-behavior-block")}}
- [CSS-Überscrollverhalten](/de/docs/Web/CSS/CSS_overscroll_behavior) Modul
