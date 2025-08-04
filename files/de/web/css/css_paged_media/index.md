---
title: CSS Paged Media
slug: Web/CSS/CSS_paged_media
l10n:
  sourceCommit: bc761c19c07b875eb889d4aad87b18d8443da339
---

Das **CSS Paged Media**-Modul definiert die Eigenschaften, die die Präsentation von Inhalten für Druck oder andere Medien steuern, die Inhalte in separate Seiten aufteilen. Es ermöglicht Ihnen, Seitenumbrüche festzulegen, druckbare Bereiche zu steuern, linke und rechte Seiten unterschiedlich zu gestalten und Umbrüche innerhalb von Elementen zu kontrollieren.

## Referenz

### Eigenschaften

- {{cssxref('page')}}

### At-Regeln

- {{cssxref('@page')}}
  - {{cssxref('@page/page-orientation', 'page-orientation')}} Deskriptor
  - {{cssxref('@page/size', 'size')}} Deskriptor
  - [Rand-Deskriptoren](/de/docs/Web/CSS/margin)
- [Rand-At-Regeln](/de/docs/Web/CSS/@page#margin_at-rules)

Das CSS Paged Media-Modul führt auch die `bleeds` und `marks` `@page` Deskriptoren ein. Derzeit unterstützt kein Browser diese Funktionen.

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

{{Specifications}}

## Siehe auch

- [Drucken](/de/docs/Web/CSS/CSS_media_queries/Printing) Leitfaden
- [CSS-Fragmentierung](/de/docs/Web/CSS/CSS_fragmentation) Modul
- [CSS Media Queries](/de/docs/Web/CSS/CSS_media_queries) Modul
