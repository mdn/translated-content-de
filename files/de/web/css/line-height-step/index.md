---
title: line-height-step
slug: Web/CSS/line-height-step
l10n:
  sourceCommit: aac4966bd12c77281f9374bbfaf4e17e2680ac3b
---

{{CSSRef}}{{SeeCompatTable}}

Die **`line-height-step`** [CSS](/de/docs/Web/CSS)-Eigenschaft setzt die Schrittgröße für die Höhen der Linienboxen. Wenn die Eigenschaft gesetzt ist, werden die Höhen der Linienboxen auf das nächste Vielfache der Einheit aufgerundet.

## Syntax

```css
/* Punktwerte */
line-height-step: 18pt;

/* Globale Werte */
line-height-step: inherit;
line-height-step: initial;
line-height-step: revert;
line-height-step: revert-layer;
line-height-step: unset;
```

Die `line-height-step`-Eigenschaft wird als eines der folgenden festgelegt:

- eine `<length>`.

### Werte

- `<length>`
  - : Die angegebene {{cssxref("&lt;length&gt;")}} wird in die Berechnung der Schrittgröße der Linienboxhöhe einbezogen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Schrittgröße für die Höhe der Linienbox festlegen

Im folgenden Beispiel wird die Höhe der Linienbox in jedem Absatz auf die Schrittgröße aufgerundet. Die Linienbox in `<h1>` passt nicht in eine Schrittgröße und nimmt daher zwei ein, wird jedoch innerhalb dieser zwei Schrittgrößen zentriert.

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

![Wie die Eigenschaft line-height-step das Aussehen von Text beeinflusst.](line-grid-center.png)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{Cssxref("font")}}
- {{Cssxref("font-size")}}
- {{Cssxref("line-height")}}
