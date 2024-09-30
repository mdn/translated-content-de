---
title: mask-border-source
slug: Web/CSS/mask-border-source
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}

Die **`mask-border-source`**-Eigenschaft von [CSS](/de/docs/Web/CSS) legt das Quellbild fest, das verwendet wird, um den [Maskenrahmen](/de/docs/Web/CSS/mask-border) eines Elements zu erstellen.

Die {{cssxref("mask-border-slice")}}-Eigenschaft wird verwendet, um das Quellbild in Regionen zu unterteilen, die dann dynamisch auf den endgültigen Maskenrahmen angewendet werden.

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
  - : Es wird kein Maskenrahmen verwendet.
- {{cssxref("&lt;image&gt;")}}
  - : Bildreferenz, die für den Maskenrahmen verwendet wird.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Diese Eigenschaft scheint derzeit nirgendwo unterstützt zu werden. Wenn sie schließlich unterstützt wird, dient sie dazu, die Quelle des Maskenrahmens zu definieren.

```css
mask-border-source: url(image.jpg);
```

Chromium-basierte Browser unterstützen eine veraltete Version dieser Eigenschaft — `mask-box-image-source` — mit einem Präfix:

```css
-webkit-mask-box-image-source: url(image.jpg);
```

> [!NOTE]
> Die Seite [`mask-border`](/de/docs/Web/CSS/mask-border) enthält ein funktionierendes Beispiel (unter Verwendung der veralteten, in Chromium unterstützten maskierten Rahmen-Eigenschaften mit Präfix), damit Sie eine Vorstellung von der Wirkung bekommen.

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
