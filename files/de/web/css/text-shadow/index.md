---
title: text-shadow
slug: Web/CSS/text-shadow
l10n:
  sourceCommit: aac4966bd12c77281f9374bbfaf4e17e2680ac3b
---

{{CSSRef}}

Die **`text-shadow`** [CSS](/de/docs/Web/CSS) Eigenschaft fügt Text Schatten hinzu. Sie akzeptiert eine komma-separierte Liste von Schatten, die auf den Text und seine [`Decorations`](/de/docs/Web/CSS/text-decoration) angewendet werden. Jeder Schatten wird durch eine Kombination von X- und Y-Versatz des Elements, Unschärferadius und Farbe beschrieben.

{{EmbedInteractiveExample("pages/css/text-shadow.html")}}

## Syntax

```css
/* offset-x | offset-y | blur-radius | color */
text-shadow: 1px 1px 2px black;

/* color | offset-x | offset-y | blur-radius */
text-shadow: #fc0 1px 0 10px;

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

Diese Eigenschaft wird als eine komma-separierte Liste von Schatten angegeben.

Jeder Schatten wird als zwei oder drei `<length>`-Werte spezifiziert, gefolgt von einem optionalen `<color>`-Wert. Die ersten beiden `<length>`-Werte sind die `<offset-x>` und `<offset-y>` Werte. Der dritte, optionale `<length>`-Wert ist der `<blur-radius>`. Der `<color>`-Wert ist die Farbe des Schattens.

Wenn mehr als ein Schatten angegeben ist, werden Schatten von vorne nach hinten angewendet, wobei der zuerst angegebene Schatten oben liegt.

Diese Eigenschaft gilt sowohl für {{cssxref("::first-line")}} als auch für {{cssxref("::first-letter")}} [Pseudoelemente](/de/docs/Web/CSS/Pseudo-elements).

### Werte

- {{cssxref("&lt;color&gt;")}}
  - : Optional. Die Farbe des Schattens. Sie kann entweder vor oder nach den Versatzwerten angegeben werden. Wenn nicht angegeben, bleibt der Farbwert dem User-Agent überlassen, sodass Sie, wenn Konsistenz über verschiedene Browser hinweg gewünscht ist, diese explizit definieren sollten.
- `<offset-x> <offset-y>`
  - : Erforderlich. Diese {{cssxref("&lt;length&gt;")}} Werte geben den Abstand des Schattens vom Text an. `<offset-x>` gibt den horizontalen Abstand an; ein negativer Wert platziert den Schatten links vom Text. `<offset-y>` gibt den vertikalen Abstand an; ein negativer Wert platziert den Schatten oberhalb des Textes. Wenn beide Werte `0` sind, wird der Schatten direkt hinter dem Text platziert, obwohl er teilweise aufgrund des Effekts des `<blur-radius>` sichtbar sein kann.
- `<blur-radius>`
  - : Optional. Dies ist ein {{cssxref("&lt;length&gt;")}} Wert. Je höher der Wert, desto größer die Unschärfe; der Schatten wird breiter und heller. Wenn nicht angegeben, ist der Standardwert `0`.

## Formal definition

{{CSSInfo}}

## Formal syntax

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

{{EmbedLiveSample('Simple_shadow', '660px', '90px')}}

### Mehrfache Schatten

```css
.white-text-with-blue-shadow {
  text-shadow:
    1px 1px 2px black,
    0 0 1em blue,
    0 0 0.2em blue;
  color: white;
  font:
    1.5em Georgia,
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

- Der {{cssxref("&lt;color&gt;")}} Datentyp (zur Angabe der Farbe des Schattens)
- {{cssxref("box-shadow")}}
- {{cssxref("filter-function/drop-shadow", "drop-shadow()")}}
