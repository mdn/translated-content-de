---
title: "`line-height-step` CSS property"
short-title: line-height-step
slug: Web/CSS/Reference/Properties/line-height-step
l10n:
  sourceCommit: a5531a7b1fa30ab1de952ffff619a9830eb1c1a9
---

{{SeeCompatTable}}

Die **`line-height-step`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Schrittgröße für Zeilenbox-Höhen fest. Wenn die Eigenschaft gesetzt ist, werden die Zeilenbox-Höhen auf das nächstgelegene Vielfache der Einheit aufgerundet.

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

### Werte

Diese Eigenschaft wird als folgender Wert angegeben:

- `<length>`
  - : Die angegebene {{cssxref("&lt;length&gt;")}} wird bei der Berechnung der Zeilenbox-Höhen-Schrittgröße verwendet.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Schrittgröße für Zeilenbox-Höhe festlegen

Im folgenden Beispiel wird die Höhe der Zeilenbox in jedem Absatz auf die Schrittgröße aufgerundet. Die Zeilenbox in `<h1>` passt nicht in eine Schrittgröße und nimmt daher zwei ein, ist jedoch weiterhin innerhalb der zwei Schrittgrößen zentriert.

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

![Wie die Eigenschaft line-height-step das Erscheinungsbild von Text beeinflusst.](line-grid-center.png)

## Spezifikationen

Derzeit wird dieses Feature von keinem Browser unterstützt.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{Cssxref("font")}}
- {{Cssxref("font-size")}}
- {{Cssxref("line-height")}}
- [CSS Rhythmic Sizing](https://drafts.csswg.org/css-rhythm/) Spezifikation
