---
title: CSS-Seitenmedien
slug: Web/CSS/CSS_paged_media
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Das **CSS paged media** Modul definiert die Eigenschaften, die die Darstellung von Inhalten für den Druck oder andere Medien, die Inhalte in getrennte Seiten unterteilen, steuern. Es ermöglicht Ihnen, Seitenumbrüche festzulegen, druckbare Bereiche zu kontrollieren, linke und rechte Seiten unterschiedlich zu gestalten und Umbrüche innerhalb von Elementen zu steuern.

## Referenz

### Eigenschaften

- {{cssxref('page')}}

### At-Rules

- {{cssxref('@page')}}
  - {{cssxref('@page/page-orientation', 'page-orientation')}} Deskriptor
  - {{cssxref('@page/size', 'size')}} Deskriptor
  - [Rand-Deskriptoren](/de/docs/Web/CSS/margin)
- [Rand-At-Rules](/de/docs/Web/CSS/@page#margin_at-rules)

> [!NOTE]
> Das CSS paged media Modul führt zwei `@page` Deskriptoren ein, die nicht implementiert wurden: `bleeds` und `marks`.

### Pseudo-Klassen

- {{cssxref(':blank')}}
- {{cssxref(':first')}}
- {{cssxref(':left')}}
- {{cssxref(':right')}}

## Verwandte Konzepte

- [CSS-Fragmentierung](/de/docs/Web/CSS/CSS_fragmentation) Modul
  - {{cssxref("break-after")}} Eigenschaft
  - {{cssxref("break-before")}} Eigenschaft
  - {{cssxref("break-inside")}} Eigenschaft
  - {{cssxref("orphans")}} Eigenschaft
  - {{cssxref("widows")}} Eigenschaft

## Spezifikationen

{{Spezifikationen}}

## Siehe auch

- [Drucken](/de/docs/Web/CSS/CSS_media_queries/Printing) Leitfaden
- [CSS-Fragmentierung](/de/docs/Web/CSS/CSS_fragmentation) Modul
- [CSS-Medienabfragen](/de/docs/Web/CSS/CSS_media_queries) Modul
