---
title: border-image-source
slug: Web/CSS/border-image-source
l10n:
  sourceCommit: 5178e1e7c9edf0c9c652275ae62f090042ce2422
---

{{CSSRef}}

Die **`border-image-source`** [CSS](/de/docs/Web/CSS) Eigenschaft legt das Quellbild fest, das verwendet wird, um das [Rahmenbild](/de/docs/Web/CSS/border-image) eines Elements zu erstellen.

{{EmbedInteractiveExample("pages/css/border-image-source.html")}}

Die {{cssxref("border-image-slice")}} Eigenschaft wird verwendet, um das Quellbild in Bereiche zu unterteilen, die dann dynamisch auf das endgültige Rahmenbild angewendet werden.

## Syntax

```css
/* Schlüsselwortwert */
border-image-source: none;

/* <image> Werte */
border-image-source: url(image.jpg);
border-image-source: linear-gradient(to top, red, yellow);

/* Globale Werte */
border-image-source: inherit;
border-image-source: initial;
border-image-source: revert;
border-image-source: revert-layer;
border-image-source: unset;
```

### Werte

- `none`
  - : Es wird kein Rahmenbild verwendet. Stattdessen wird das durch {{cssxref("border-style")}} definierte Aussehen angezeigt.
- {{cssxref("&lt;image&gt;")}}
  - : Bildreferenz, die für den Rahmen verwendet werden soll.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfaches Beispiel

```css
.box {
  border-image-source: url("image.png");
}
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- {{cssxref("border")}}
- {{cssxref("outline")}}
- {{cssxref("box-shadow")}}
- {{cssxref("background-image")}}
- {{cssxref("url_value", "&lt;url&gt;")}} Typ
- [Rahmenbilder in CSS: Ein Schwerpunktthema für Interop 2023](/en-US/blog/border-images-interop-2023/) auf dem MDN-Blog (2023)
