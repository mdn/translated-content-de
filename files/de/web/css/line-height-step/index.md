---
title: line-height-step
slug: Web/CSS/line-height-step
l10n:
  sourceCommit: aac4966bd12c77281f9374bbfaf4e17e2680ac3b
---

{{CSSRef}}{{SeeCompatTable}}

Die **`line-height-step`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Schritteinheit für Linienboxhöhen fest. Wenn die Eigenschaft gesetzt ist, werden die Höhen der Linienboxen auf das nächste Vielfache der Einheit aufgerundet.

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

Die Eigenschaft `line-height-step` wird als eine der folgenden Optionen angegeben:

- eine `<length>`.

### Werte

- `<length>`
  - : Das angegebene {{cssxref("&lt;length&gt;")}} wird bei der Berechnung des Linienboxhöhe-Schritts verwendet.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einstellung der Schritteinheit für Linienboxhöhen

Im folgenden Beispiel wird die Höhe der Linienbox in jedem Absatz auf die Schritteinheit aufgerundet. Die Linienbox in `<h1>` passt nicht in eine Schritteinheit und belegt deshalb zwei, ist aber dennoch innerhalb der zwei Schritteinheiten zentriert.

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

Das Ergebnis dieser Regeln ist im folgenden Screenshot zu sehen:

![Wie die line-height-step-Eigenschaft das Erscheinungsbild von Text beeinflusst.](line-grid-center.png)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{Cssxref("font")}}
- {{Cssxref("font-size")}}
- {{Cssxref("line-height")}}
