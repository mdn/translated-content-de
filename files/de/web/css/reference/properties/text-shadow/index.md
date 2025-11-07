---
title: text-shadow
slug: Web/CSS/Reference/Properties/text-shadow
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`text-shadow`** [CSS](/de/docs/Web/CSS)-Eigenschaft fügt Text Schatten hinzu. Sie akzeptiert eine kommagetrennte Liste von Schatten, die auf den Text und seine [`Dekorationen`](/de/docs/Web/CSS/Reference/Properties/text-decoration) angewendet werden sollen. Jeder Schatten wird durch eine Kombination von X- und Y-Versatz vom Element, Unschärferadius und Farbe beschrieben.

{{InteractiveExample("CSS Demo: text-shadow")}}

```css interactive-example-choice
text-shadow: 1px 1px 2px pink;
```

```css interactive-example-choice
text-shadow: #ffcc00 1px 0 10px;
```

```css interactive-example-choice
text-shadow: 5px 5px #558abb;
```

```css interactive-example-choice
text-shadow: red 2px 5px;
```

```css interactive-example-choice
text-shadow: 5px 10px;
```

```css interactive-example-choice
text-shadow:
  1px 1px 2px red,
  0 0 1em blue,
  0 0 0.2em blue;
```

```html interactive-example
<section id="default-example">
  <p id="example-element">
    Far out in the uncharted backwaters of the unfashionable end of the western
    spiral arm of the Galaxy...
  </p>
</section>
```

```css interactive-example
p {
  font:
    1.5em "Georgia",
    serif;
}
```

## Syntax

```css
/* offset-x | offset-y | blur-radius | color */
text-shadow: 1px 1px 2px black;

/* color | offset-x | offset-y | blur-radius */
text-shadow: #ffcc00 1px 0 10px;

/* offset-x | offset-y | color */
text-shadow: 5px 5px #558abb;

/* color | offset-x | offset-y */
text-shadow: white 2px 5px;

/* offset-x | offset-y
/* Use defaults for color and blur-radius */
text-shadow: 5px 10px;

/* Global values */
text-shadow: inherit;
text-shadow: initial;
text-shadow: revert;
text-shadow: revert-layer;
text-shadow: unset;
```

Diese Eigenschaft wird als kommagetrennte Liste von Schatten angegeben.

Jeder Schatten wird als zwei oder drei `<length>`-Werte angegeben, gefolgt optional von einem `<color>`-Wert. Die ersten beiden `<length>`-Werte sind die `<offset-x>` und `<offset-y>` Werte. Der dritte, optionale `<length>`-Wert ist der `<blur-radius>`. Der `<color>`-Wert ist die Farbe des Schattens.

Wenn mehr als ein Schatten angegeben wird, werden die Schatten von vorne nach hinten angewendet, wobei der zuerst angegebene Schatten oben liegt.

Diese Eigenschaft gilt sowohl für {{cssxref("::first-line")}} als auch für {{cssxref("::first-letter")}} [Pseudoelemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements).

### Werte

- {{cssxref("&lt;color&gt;")}}
  - : Optional. Die Farbe des Schattens. Sie kann entweder vor oder nach den Versatzwerten angegeben werden. Wenn sie nicht angegeben wird, bleibt der Farbwert dem User-Agent überlassen. Daher sollte bei gewünschter Konsistenz über Browser hinweg die Farbe explizit definiert werden.
- `<offset-x> <offset-y>`
  - : Erforderlich. Diese {{cssxref("&lt;length&gt;")}}-Werte geben die Entfernung des Schattens vom Text an. `<offset-x>` gibt die horizontale Entfernung an; ein negativer Wert platziert den Schatten links vom Text. `<offset-y>` gibt die vertikale Entfernung an; ein negativer Wert platziert den Schatten über dem Text. Wenn beide Werte `0` sind, wird der Schatten direkt hinter dem Text platziert, obwohl er aufgrund des Effekts von `<blur-radius>` teilweise sichtbar sein kann.
- `<blur-radius>`
  - : Optional. Dies ist ein {{cssxref("&lt;length&gt;")}}-Wert. Je höher der Wert, desto größer die Unschärfe; der Schatten wird breiter und leichter. Wenn nicht angegeben, beträgt der Standardwert `0`.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfacher Schatten

```css
.red-text-shadow {
  text-shadow: red 0 -2px;
}
```

```html
<p class="red-text-shadow">
  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
  doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.
</p>
```

{{EmbedLiveSample('Basic_shadow', '660px', '90px')}}

### Mehrfachschatten

```css
.white-text-with-blue-shadow {
  text-shadow:
    1px 1px 2px black,
    0 0 1em blue,
    0 0 0.2em blue;
  color: white;
  font:
    1.5em "Georgia",
    serif;
}
```

```html
<p class="white-text-with-blue-shadow">
  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
  doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.
</p>
```

{{EmbedLiveSample('Multiple_shadows', '660px', '170px')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Einführung in Textschatten](/de/docs/Web/CSS/Guides/Text_decoration/Text_shadows)
- {{cssxref("&lt;color&gt;")}}
- {{cssxref("box-shadow")}}
- {{cssxref("filter-function/drop-shadow", "drop-shadow()")}}
- [CSS Textdekoration](/de/docs/Web/CSS/Guides/Text_decoration) Modul
