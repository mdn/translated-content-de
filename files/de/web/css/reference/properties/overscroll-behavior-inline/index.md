---
title: "`overscroll-behavior-inline` CSS property"
short-title: overscroll-behavior-inline
slug: Web/CSS/Reference/Properties/overscroll-behavior-inline
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`overscroll-behavior-inline`**-Eigenschaft von [CSS](/de/docs/Web/CSS) legt das Verhalten des Browsers fest, wenn die Begrenzung einer Scrollfläche in Inline-Richtung erreicht wird.

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

Die Eigenschaft `overscroll-behavior-inline` wird als ein Schlüsselwort aus der untenstehenden Liste von Werten angegeben.

### Werte

- `auto`
  - : Das standardmäßige Verhalten bei Scroll-Überlauf erfolgt wie gewohnt.
- `contain`
  - : Das standardmäßige Verhalten bei Scroll-Überlauf (z. B. "Bounce"-Effekte) wird innerhalb des Elements, bei dem dieser Wert festgelegt ist, beobachtet. Es tritt jedoch kein {{Glossary("Scroll_chaining", "Scroll Chaining")}} in benachbarten Scrollbereichen auf; die darunter liegenden Elemente werden nicht scrollen. Der Wert `contain` deaktiviert die native Navigation des Browsers, einschließlich der vertikalen Pull-to-Refresh-Geste und der horizontalen Wischnavigation.
- `none`
  - : Es tritt kein Scroll Chaining in benachbarten Scrollbereichen auf und das standardmäßige Verhalten bei Scroll-Überlauf wird verhindert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verhinderung von Inline-Overscrolling

In dieser Demo haben wir zwei Blocklevel-Boxen, eine in der anderen. Die äußere Box hat eine große {{cssxref("width")}} eingestellt, sodass die Seite horizontal scrollen wird. Die innere Box hat eine kleine Breite (und {{cssxref("height")}}) eingestellt, sodass sie bequem im Ansichtsfenster sitzt, aber ihr Inhalt hat eine große Breite, sodass auch sie horizontal scrollen wird.

Standardmäßig, wenn die innere Box gescrollt wird und eine Scrollgrenze erreicht ist, wird die gesamte Seite zu scrollen beginnen, was wahrscheinlich nicht gewünscht ist. Um dies in der Inline-Richtung zu vermeiden, haben wir `overscroll-behavior-inline: contain` auf die innere Box gesetzt.

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
- [CSS-Overscroll-Verhalten](/de/docs/Web/CSS/Guides/Overscroll_behavior) Modul
