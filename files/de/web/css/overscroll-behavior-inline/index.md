---
title: overscroll-behavior-inline
slug: Web/CSS/overscroll-behavior-inline
l10n:
  sourceCommit: 9a3940b0231838338f65ae1c37d5b874439a3d43
---

{{CSSRef}}

Die **`overscroll-behavior-inline`** [CSS](/de/docs/Web/CSS) Eigenschaft legt das Verhalten des Browsers fest, wenn die Begrenzung einer Scrollfläche in Inline-Richtung erreicht wird.

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

Die Eigenschaft `overscroll-behavior-inline` wird als Schlüsselwort aus der folgenden Liste von Werten spezifiziert.

### Werte

- `auto`
  - : Das Standardverhalten bei Überlauf während des Scrollens tritt wie gewohnt auf.
- `contain`
  - : Das Standardverhalten bei Überlauf während des Scrollens (z.B. „Bounce“-Effekte) wird innerhalb des Elements beobachtet, in dem dieser Wert gesetzt ist. Es occurs jedoch kein {{Glossary("Scroll_chaining", "scroll chaining")}} auf benachbarten Scrollbereichen; die darunterliegenden Elemente werden nicht scrollen. Der Wert `contain` deaktiviert die native Browser-Navigation, einschließlich der vertikalen Pull-to-Refresh-Geste und der Horizontal-Swipe-Navigation.
- `none`
  - : Es tritt kein scroll chaining auf benachbarten Scrollbereichen auf, und das Standardverhalten bei Überlauf während des Scrollens wird verhindert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verhindern von Inline-Überscrollen

In diesem Demo haben wir zwei Block-Level-Boxen, eine innerhalb der anderen. Die äußere Box hat eine große {{cssxref("width")}} gesetzt, sodass die Seite horizontal scrollt. Die innere Box hat eine kleine Breite (und {{cssxref("height")}}), sodass sie bequem innerhalb des Viewports sitzt, aber ihr Inhalt hat eine große Breite, sodass sie ebenfalls horizontal scrollt.

Standardmäßig beginnt die gesamte Seite zu scrollen, wenn die innere Box gescrollt wird und eine Scrollgrenze erreicht wird, was wahrscheinlich nicht gewünscht ist. Um dies in der Inline-Richtung zu vermeiden, haben wir `overscroll-behavior-inline: contain` auf der inneren Box gesetzt.

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
- [CSS overscroll behavior](/de/docs/Web/CSS/CSS_overscroll_behavior) Modul
