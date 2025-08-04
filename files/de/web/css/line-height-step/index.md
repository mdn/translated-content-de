---
title: line-height-step
slug: Web/CSS/line-height-step
l10n:
  sourceCommit: bc761c19c07b875eb889d4aad87b18d8443da339
---

{{SeeCompatTable}}

Die **`line-height-step`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Schritteinheit für Zeilenboxhöhen fest. Wenn die Eigenschaft gesetzt ist, werden Zeilenboxhöhen auf das nächste Vielfache der Einheit aufgerundet.

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

Die `line-height-step` Eigenschaft wird als eines der folgenden Elemente angegeben:

- ein `<length>`.

### Werte

- `<length>`
  - : Der angegebene {{cssxref("&lt;length&gt;")}} wird bei der Berechnung des Zeilenboxhöhen-Schritts verwendet.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen der Schritteinheit für Zeilenboxhöhe

Im folgenden Beispiel wird die Höhe der Zeilenbox in jedem Absatz auf die Schritteinheit aufgerundet. Die Zeilenbox im `<h1>` passt nicht in eine Schritteinheit und nimmt daher zwei ein, ist aber dennoch innerhalb der zwei Schritteinheiten zentriert.

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

![Wie die line-height-step Eigenschaft das Erscheinungsbild von Text beeinflusst.](line-grid-center.png)

## Spezifikationen

Derzeit unterstützen keine Browser dieses Feature.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{Cssxref("font")}}
- {{Cssxref("font-size")}}
- {{Cssxref("line-height")}}
- [CSS Rhythmic Sizing](https://drafts.csswg.org/css-rhythm/) Spezifikation
