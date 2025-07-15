---
title: mask-border-source
slug: Web/CSS/mask-border-source
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`mask-border-source`** [CSS](/de/docs/Web/CSS) Eigenschaft legt das Quellbild fest, das verwendet wird, um den [Maskenrand](/de/docs/Web/CSS/mask-border) eines Elements zu erstellen.

Die {{cssxref("mask-border-slice")}} Eigenschaft wird verwendet, um das Quellbild in Bereiche zu unterteilen, die dann dynamisch auf den endgültigen Maskenrand angewendet werden.

## Syntax

```css
/* Keyword value */
mask-border-source: none;

/* <image> values */
mask-border-source: url(image.jpg);
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
  - : Kein Maskenrand wird verwendet.
- {{cssxref("&lt;image&gt;")}}
  - : Bildreferenz, die für den Maskenrand verwendet werden soll.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Diese Eigenschaft scheint derzeit noch nicht unterstützt zu werden. Sobald sie unterstützt wird, dient sie dazu, die Quelle des Rands der Maske zu definieren.

```css
mask-border-source: url(image.jpg);
```

Auf Chromium-basierte Browser unterstützen eine veraltete Version dieser Eigenschaft — `mask-box-image-source` — mit einem Präfix:

```css
-webkit-mask-box-image-source: url(image.jpg);
```

> [!NOTE]
> Die Seite [`mask-border`](/de/docs/Web/CSS/mask-border) enthält ein funktionierendes Beispiel (unter Verwendung der veralteten prefixed Maskenrand-Eigenschaften, die in Chromium unterstützt werden), damit Sie sich eine Vorstellung vom Effekt machen können.

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
