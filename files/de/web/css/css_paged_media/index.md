---
title: CSS Paged Media
slug: Web/CSS/CSS_paged_media
l10n:
  sourceCommit: 76885324c55eda81ef536254ffe532ca68a2f502
---

{{CSSRef}}

Das **CSS Paged Media**-Modul definiert die Eigenschaften, die die Darstellung von Inhalten für den Druck oder andere Medien, die Inhalte in separate Seiten aufteilen, steuern. Es ermöglicht Ihnen, Seitenumbrüche festzulegen, druckbare Bereiche zu steuern, linke und rechte Seiten unterschiedlich zu gestalten und Unterbrechungen innerhalb von Elementen zu kontrollieren.

## Referenz

### Eigenschaften

- {{cssxref('page')}}

### At-Rules

- {{cssxref('@page')}}
  - {{cssxref('@page/page-orientation', 'page-orientation')}} Descriptor
  - {{cssxref('@page/size', 'size')}} Descriptor
  - [Margin-Deskriptoren](/de/docs/Web/CSS/margin)
- [Margin-At-Rules](/de/docs/Web/CSS/@page#margin_at-rules)

> [!NOTE]
> Das CSS Paged Media-Modul führt zwei `@page`-Deskriptoren ein, die nicht implementiert wurden: `bleeds` und `marks`.

### Pseudo-Klassen

- {{cssxref(':blank')}}
- {{cssxref(':first')}}
- {{cssxref(':left')}}
- {{cssxref(':right')}}

## Verwandte Konzepte

- [CSS-Fragmentierung](/de/docs/Web/CSS/CSS_fragmentation)-Modul
  - {{cssxref("break-after")}}-Eigenschaft
  - {{cssxref("break-before")}}-Eigenschaft
  - {{cssxref("break-inside")}}-Eigenschaft
  - {{cssxref("orphans")}}-Eigenschaft
  - {{cssxref("widows")}}-Eigenschaft

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Drucken](/de/docs/Web/CSS/CSS_media_queries/Printing)-Leitfaden
- [CSS-Fragmentierung](/de/docs/Web/CSS/CSS_fragmentation)-Modul
- [CSS Media Queries](/de/docs/Web/CSS/CSS_media_queries)-Modul
