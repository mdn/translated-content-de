---
title: Anpassung von Farben in CSS
slug: Web/CSS/CSS_color_adjustment
l10n:
  sourceCommit: 8d03307af2cee96a307c22b5d52b93f155f11524
---

{{CSSRef}}

Das **CSS-Modul zur Farbkorrektur** bietet ein Modell und die Möglichkeit der automatischen Farbkorrektur durch den Benutzeragenten, um Benutzerpräferenzen wie "Dark Mode", Kontrasteinstellung und andere Farbschema-Einstellungen zu berücksichtigen.

Zusammen mit den {{CSSxRef("@media")}}-Funktionen {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}}, {{cssxref("@media/prefers-contrast", "prefers-contrast")}} und {{cssxref("@media/forced-colors", "forced-colors")}} definiert dieses Modul, wie und wann Farben automatisch durch den Browser angepasst werden.

## Referenz

### Eigenschaften

- {{cssxref("color-scheme")}}
- {{cssxref("forced-color-adjust")}}
- {{cssxref("print-color-adjust")}}

## Verwandte Konzepte

- {{cssxref("&lt;color&gt;")}} CSS-Datentyp
- Verwandte {{CSSxRef("@media")}}-Funktionen:
  - {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}}
  - {{cssxref("@media/prefers-contrast", "prefers-contrast")}}
  - {{cssxref("@media/forced-colors", "forced-colors")}}
- Eigenschaften, die vom Modus für erzwungene Farben betroffen sind
  - {{cssxref("accent-color")}}
  - {{cssxref("background-color")}}
  - {{cssxref("background-image")}}
  - {{cssxref("border-color")}}
  - {{cssxref("box-shadow")}}
  - {{cssxref("caret-color")}}
  - {{cssxref("color")}}
  - {{cssxref("color-scheme")}}
  - {{cssxref("column-rule-color")}}
  - [`fill`](/de/docs/Web/SVG/Attribute/fill)
  - [`flood-color`](/de/docs/Web/SVG/Attribute/flood-color)
  - [`lighting-color`](/de/docs/Web/SVG/Attribute/lighting-color)
  - {{cssxref("outline-color")}}
  - {{cssxref("scrollbar-color")}}
  - [`stop-color`](/de/docs/Web/SVG/Attribute/stop-color)
  - [`stroke`](/de/docs/Web/SVG/Attribute/stroke)
  - {{cssxref("text-decoration-color")}}
  - {{cssxref("text-emphasis-color")}}
  - {{cssxref("text-shadow")}}
  - {{cssxref("-webkit-tap-highlight-color")}}

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Farben](/de/docs/Web/CSS/CSS_colors) Modul
