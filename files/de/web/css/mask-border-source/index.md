---
title: mask-border-source
slug: Web/CSS/mask-border-source
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}

Die **`mask-border-source`** [CSS](/de/docs/Web/CSS) Eigenschaft legt das Quellbild fest, das zur Erstellung des [Maskenrandes](/de/docs/Web/CSS/mask-border) eines Elements verwendet wird.

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
  - : Es wird kein Maskenrand verwendet.
- {{cssxref("&lt;image&gt;")}}
  - : Bildreferenz, die für den Maskenrand verwendet werden soll.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Diese Eigenschaft wird derzeit offenbar noch nicht unterstützt. Sobald sie schließlich unterstützt wird, dient sie dazu, die Quelle des Maskenrands zu definieren.

```css
mask-border-source: url(image.jpg);
```

Auf Chromium basierende Browser unterstützen eine veraltete Version dieser Eigenschaft — `mask-box-image-source` — mit einem Präfix:

```css
-webkit-mask-box-image-source: url(image.jpg);
```

> [!NOTE]
> Die Seite [`mask-border`](/de/docs/Web/CSS/mask-border) bietet ein funktionierendes Beispiel (unter Verwendung der veralteten gefüllten Maskenrand-Eigenschaften, die in Chromium unterstützt werden), damit Sie eine Vorstellung vom Effekt bekommen.

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
