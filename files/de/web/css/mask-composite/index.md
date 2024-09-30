---
title: mask-composite
slug: Web/CSS/mask-composite
l10n:
  sourceCommit: c77cfcd17e85db6c1b93160c70668f2ff6c2809c
---

{{CSSRef}}

Die **`mask-composite`** [CSS](/de/docs/Web/CSS) Eigenschaft stellt eine Kompositionsoperation dar, die auf die aktuelle Maskenebene mit den darunterliegenden Maskenebenen angewendet wird.

## Syntax

```css
/* Keyword values */
mask-composite: add;
mask-composite: subtract;
mask-composite: intersect;
mask-composite: exclude;

/* Global values */
mask-composite: inherit;
mask-composite: initial;
mask-composite: revert;
mask-composite: revert-layer;
mask-composite: unset;
```

Eines oder mehrere der unten aufgeführten Schlüsselwortwerte, durch Kommata getrennt.

### Werte

Für die Komposition wird die aktuelle Maskenebene als _source_ bezeichnet, während alle darunterliegenden Ebenen als _destination_ bezeichnet werden.

- `add`
  - : Die Quelle wird über dem Ziel platziert.
- `subtract`
  - : Die Quelle wird dort platziert, wo sie außerhalb des Ziels liegt.
- `intersect`
  - : Die Teile der Quelle, die das Ziel überlappen, ersetzen das Ziel.
- `exclude`
  - : Die nicht überlappenden Bereiche von Quelle und Ziel werden kombiniert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Komposition von Maskenebenen mit Addition

{{EmbedGHLiveSample("css-examples/masking/mask-composite.html", '100%', 550)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Clipping und Masking in CSS](https://css-tricks.com/clipping-masking-css/)
