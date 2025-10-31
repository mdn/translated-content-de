---
title: line-height-step
slug: Web/CSS/Reference/Properties/line-height-step
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

{{SeeCompatTable}}

Die **`line-height-step`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt die Schrittgröße für die Höhe der Zeilenboxen fest. Wenn die Eigenschaft gesetzt ist, werden die Höhen der Zeilenboxen auf das nächste Vielfache der Einheit aufgerundet.

## Syntax

```css
/* Point values */
line-height-step: 18pt;

/* Global values */
line-height-step: inherit;
line-height-step: initial;
line-height-step: revert;
line-height-step: revert-layer;
line-height-step: unset;
```

Die `line-height-step`-Eigenschaft wird als eines der folgenden angegeben:

- Eine `<length>`.

### Werte

- `<length>`
  - : Die angegebene {{cssxref("&lt;length&gt;")}} wird bei der Berechnung der Schrittgröße der Zeilenboxhöhe verwendet.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen der Schrittgröße für die Höhe der Zeilenbox

Im folgenden Beispiel wird die Höhe der Zeilenbox in jedem Absatz auf die Schrittgröße aufgerundet. Die Zeilenbox im `<h1>` passt nicht in eine Schrittgröße und belegt daher zwei, ist aber immer noch innerhalb der zwei Schrittgrößen zentriert.

```css
:root {
  font-size: 12pt;
  --my-grid: 18pt;
  line-height-step: var(--my-grid);
}
h1 {
  font-size: 20pt;
  margin-top: calc(2 * var(--my-grid));
}
```

Das Ergebnis dieser Regeln wird im folgenden Screenshot gezeigt:

![Wie die line-height-step-Eigenschaft das Erscheinungsbild des Textes beeinflusst.](line-grid-center.png)

## Spezifikationen

Derzeit unterstützen keine Browser diese Funktion.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{Cssxref("font")}}
- {{Cssxref("font-size")}}
- {{Cssxref("line-height")}}
- [CSS Rhythmic Sizing](https://drafts.csswg.org/css-rhythm/) Spezifikation
