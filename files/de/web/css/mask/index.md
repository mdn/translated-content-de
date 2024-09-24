---
title: Maske
slug: Web/CSS/mask
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}

Die **`mask`** [CSS](/de/docs/Web/CSS) [Kurzschreibweise](/de/docs/Web/CSS/Shorthand_properties) verbirgt ein Element (teilweise oder vollständig), indem das Bild an bestimmten Punkten maskiert oder abgeschnitten wird.

> [!NOTE]
> Zusätzlich zu den unten aufgeführten Eigenschaften setzt die `mask`-Kurzschreibweise auch {{cssxref("mask-border")}} auf seinen Initialwert zurück. Daher wird empfohlen, die `mask`-Kurzschreibweise anstelle anderer Kurzschreibweisen oder einzelner Eigenschaften zu verwenden, um alle Maskeneinstellungen früher in der Kaskade zu überschreiben. Dies stellt sicher, dass auch `mask-border` zurückgesetzt wird, damit die neuen Stile wirksam werden können.

## Bestandteileigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

- [`mask-clip`](/de/docs/Web/CSS/mask-clip)
- [`mask-composite`](/de/docs/Web/CSS/mask-composite)
- [`mask-image`](/de/docs/Web/CSS/mask-image)
- [`mask-mode`](/de/docs/Web/CSS/mask-mode)
- [`mask-origin`](/de/docs/Web/CSS/mask-origin)
- [`mask-position`](/de/docs/Web/CSS/mask-position)
- [`mask-repeat`](/de/docs/Web/CSS/mask-repeat)
- [`mask-size`](/de/docs/Web/CSS/mask-size)

## Syntax

```css
/* Schlüsselwortwerte */
mask: none;

/* Bildwerte */
mask: url(mask.png); /* Pixelbild, das als Maske verwendet wird */
mask: url(masks.svg#star); /* Element innerhalb einer SVG-Grafik, das als Maske verwendet wird */

/* Kombinierte Werte */
mask: url(masks.svg#star) luminance; /* Element innerhalb einer SVG-Grafik, das als Leuchtkraftmaske verwendet wird */
mask: url(masks.svg#star) 40px 20px; /* Element innerhalb einer SVG-Grafik als Maske positioniert 40px von oben und 20px von links */
mask: url(masks.svg#star) 0 0/50px 50px; /* Element innerhalb einer SVG-Grafik als Maske mit einer Breite und Höhe von 50px */
mask: url(masks.svg#star) repeat-x; /* Element innerhalb einer SVG-Grafik, das als horizontal wiederholte Maske verwendet wird */
mask: url(masks.svg#star) stroke-box; /* Element innerhalb einer SVG-Grafik als Maske, die sich bis zur Box erstreckt, die vom Strich umschlossen wird */
mask: url(masks.svg#star) exclude; /* Element innerhalb einer SVG-Grafik als Maske, kombiniert mit dem Hintergrund unter Verwendung nicht überlappender Teile */

/* Globale Werte */
mask: inherit;
mask: initial;
mask: revert;
mask: revert-layer;
mask: unset;

/* Mehrere Masken */
mask:
  url(masks.svg#star) left / 16px repeat-y, 
  /* Element innerhalb einer SVG-Grafik, das als Maske auf der linken Seite mit einer Breite von 16px verwendet wird */
    url(masks.svg#circle) right / 16px repeat-y; /* Element innerhalb einer SVG-Grafik, das als Maske auf der rechten Seite mit einer Breite von 16px verwendet wird */
```

### Werte

- `<mask-reference>`
  - : Legt die Quelle des Maskenbildes fest. Siehe {{cssxref("mask-image")}}.
- `<masking-mode>`
  - : Legt den Maskierungsmodus des Maskenbildes fest. Siehe {{cssxref("mask-mode")}}.
- `<position>`
  - : Legt die Position des Maskenbildes fest. Siehe {{cssxref("mask-position")}}.
- `<bg-size>`
  - : Legt die Größe des Maskenbildes fest. Siehe {{cssxref("mask-size")}}.
- `<repeat-style>`
  - : Legt die Wiederholung des Maskenbildes fest. Siehe {{cssxref("mask-repeat")}}.
- `<geometry-box>`
  - : Wenn nur ein `<geometry-box>`-Wert angegeben wird, setzt er sowohl {{cssxref("mask-origin")}} als auch {{cssxref("mask-clip")}}. Wenn zwei `<geometry-box>`-Werte vorhanden sind, setzt der erste {{cssxref("mask-origin")}} und der zweite {{cssxref("mask-clip")}}.
- `<geometry-box> | no-clip`
  - : Legt den Bereich fest, der vom Maskenbild betroffen ist. Siehe {{cssxref("mask-clip")}}.
- `<compositing-operator>`
  - : Legt die Verknüpfungsoperation fest, die auf der aktuellen Maskenschicht verwendet wird. Siehe {{cssxref("mask-composite")}}.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Maskieren eines Bildes

```css
.target {
  mask: url(#c1) luminance;
}

.anothertarget {
  mask: url(resources.svg#c1) 50px 30px/10px 10px repeat-x exclude;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{Cssxref("clip-path")}}, {{Cssxref("filter")}}
- [CSS Shapes, clipping and masking – und wie Sie diese verwenden](https://hacks.mozilla.org/2017/06/css-shapes-clipping-and-masking/)
- [Anwenden von SVG-Effekten auf HTML-Inhalte](/de/docs/Web/SVG/Applying_SVG_effects_to_HTML_content)
- [SVG](/de/docs/Web/SVG)
