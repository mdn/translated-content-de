---
title: line-height-step
slug: Web/CSS/line-height-step
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

{{SeeCompatTable}}

Die **`line-height-step`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Schrittgröße für Zeilenhöhen fest. Wenn diese Eigenschaft gesetzt ist, werden die Zeilenhöhen auf das nächste Vielfache der Einheit aufgerundet.

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

Die Eigenschaft `line-height-step` wird als eines der folgenden Elemente spezifiziert:

- ein `<length>`.

### Werte

- `<length>`
  - : Die angegebene {{cssxref("&lt;length&gt;")}} wird zur Berechnung der Zeilenhöhenschritt verwendet.

## Formelle Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen der Schrittgröße für Zeilenhöhe

Im folgenden Beispiel wird die Höhe der Zeilenbox in jedem Absatz auf die Schrittgröße aufgerundet. Die Zeilenbox in `<h1>` passt nicht in eine einzelne Schrittgröße und beansprucht daher zwei, wird jedoch innerhalb der zwei Schrittgrößen zentriert.

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

Das Ergebnis dieser Regeln wird unten im folgenden Screenshot gezeigt:

![Wie die Eigenschaft line-height-step das Erscheinungsbild von Text beeinflusst.](line-grid-center.png)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{Cssxref("font")}}
- {{Cssxref("font-size")}}
- {{Cssxref("line-height")}}
