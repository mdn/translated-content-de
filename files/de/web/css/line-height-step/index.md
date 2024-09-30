---
title: line-height-step
slug: Web/CSS/line-height-step
l10n:
  sourceCommit: aac4966bd12c77281f9374bbfaf4e17e2680ac3b
---

{{CSSRef}}{{SeeCompatTable}}

Die **`line-height-step`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Schrittweite für die Linienboxhöhen fest. Wenn die Eigenschaft gesetzt ist, werden die Höhen der Linienbox auf das nächste Vielfache der Einheit aufgerundet.

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

Die `line-height-step` Eigenschaft wird als eine der folgenden Optionen angegeben:

- eine `<length>`.

### Werte

- `<length>`
  - : Die angegebene {{cssxref("&lt;length&gt;")}} wird in die Berechnung der Schrittweite der Linienboxhöhe einbezogen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einstellung der Schrittweite für die Linienboxhöhe

Im folgenden Beispiel wird die Höhe der Linienbox in jedem Absatz auf die Schrittweite aufgerundet. Die Linienbox in `<h1>` passt nicht in eine Schrittweite und nimmt daher zwei ein, ist aber immer noch innerhalb der zwei Schrittweiten zentriert.

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

![Wie sich die line-height-step Eigenschaft auf das Erscheinungsbild von Text auswirkt.](line-grid-center.png)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{Cssxref("font")}}
- {{Cssxref("font-size")}}
- {{Cssxref("line-height")}}
