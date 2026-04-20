---
title: "`mask-border-source` CSS property"
short-title: mask-border-source
slug: Web/CSS/Reference/Properties/mask-border-source
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`mask-border-source`** [CSS](/de/docs/Web/CSS) Eigenschaft legt das Quellbild fest, das verwendet wird, um den [Maskenrahmen](/de/docs/Web/CSS/Reference/Properties/mask-border) eines Elements zu erstellen.

Die {{cssxref("mask-border-slice")}}-Eigenschaft wird verwendet, um das Quellbild in Bereiche zu unterteilen, die dann dynamisch auf den endgültigen Maskenrahmen angewendet werden.

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
  - : Es wird kein Maskenrahmen verwendet.
- {{cssxref("image")}}
  - : Bildreferenz zur Verwendung für den Maskenrahmen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Diese Eigenschaft wird anscheinend noch nicht unterstützt. Wenn sie schließlich unterstützt wird, wird sie dazu dienen, die Quelle der Randmaske zu definieren.

```css
mask-border-source: url("image.jpg");
```

Chromium-basierte Browser unterstützen eine veraltete Version dieser Eigenschaft — `mask-box-image-source` — mit einem Präfix:

```css
-webkit-mask-box-image-source: url("image.jpg");
```

> [!NOTE]
> Die Seite {{cssxref("mask-border")}} enthält ein funktionierendes Beispiel (unter Verwendung der veralteten Maskenrahmeneigenschaften mit Präfix, die in Chromium unterstützt werden), sodass Sie eine Vorstellung vom Effekt bekommen können.

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
