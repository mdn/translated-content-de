---
title: mask-border-source
slug: Web/CSS/Reference/Properties/mask-border-source
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Die **`mask-border-source`** [CSS](/de/docs/Web/CSS) Eigenschaft legt das Quellbild fest, das verwendet wird, um den [Maskenrand](/de/docs/Web/CSS/Reference/Properties/mask-border) eines Elements zu erstellen.

Die {{cssxref("mask-border-slice")}}-Eigenschaft wird verwendet, um das Quellbild in Bereiche zu unterteilen, die dann dynamisch auf den endgültigen Maskenrand angewendet werden.

## Syntax

```css
/* Keyword value */
mask-border-source: none;

/* <image> values */
mask-border-source: url("image.jpg");
mask-border-source: linear-gradient(to top, red, yellow);

/* Global values */
mask-border-source: inherit;
mask-border-source: initial;
mask-border-source: revert;
mask-border-source: revert-layer;
mask-border-source: unset;
```

### Werte

- `none`
  - : Es wird kein Maskenrand verwendet.
- {{cssxref("image")}}
  - : Bildreferenz, die für den Maskenrand verwendet wird.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Diese Eigenschaft scheint derzeit nirgends unterstützt zu werden. Sobald sie jedoch unterstützt wird, dient sie dazu, die Quelle der Maskenrandmaske zu definieren.

```css
mask-border-source: url("image.jpg");
```

Chromium-basierte Browser unterstützen eine veraltete Version dieser Eigenschaft — `mask-box-image-source` — mit einem Präfix:

```css
-webkit-mask-box-image-source: url("image.jpg");
```

> [!NOTE]
> Die Seite {{cssxref("mask-border")}} enthält ein funktionierendes Beispiel (unter Verwendung der veralteten, mit Präfix versehenen Maskenrand-Eigenschaften, die in Chromium unterstützt werden), sodass Sie eine Vorstellung von der Wirkung bekommen können.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("mask-border")}}
- {{cssxref("mask-border-mode")}}
- {{cssxref("mask-border-outset")}}
- {{cssxref("mask-border-repeat")}}
- {{cssxref("mask-border-width")}}
