---
title: CSS Paged Media
short-title: Paged Media
slug: Web/CSS/Guides/Paged_media
l10n:
  sourceCommit: 74d9a1227d110a152bf4d68f5d5f753e723ea01b
---

Das **CSS Paged Media**-Modul definiert die Eigenschaften, die die Darstellung von Inhalten für den Druck oder andere Medien, die Inhalte in einzelne Seiten unterteilen, steuern. Es ermöglicht Ihnen, Seitenumbrüche zu setzen, druckbare Bereiche zu kontrollieren und linke und rechte Seiten unterschiedlich zu gestalten.

Das CSS Paged Media-Modul spezifiziert, wie Seiten generiert und layoutet werden, um fragmentierte Inhalte in einer Seitendarstellung zu halten, einschließlich Inhalten, die gedruckt oder als Druckvorschau dargestellt werden. Das Modul definiert Funktionalitäten zur Steuerung von Seitenrändern, Größe, Ausrichtung sowie Kopf- und Fußzeilen. Es erweitert [generierte Inhalte](/de/docs/Web/CSS/Guides/Generated_content), um Funktionalitäten für das Generieren von Seitenzahlen und laufenden Kopf- und Fußzeilen bereitzustellen.

Der Prozess der Paginierung von Inhalten in generierten Seiten und der Steuerung von Umbrüchen innerhalb von Elementen wird im [CSS Fragmentierungsmodul](/de/docs/Web/CSS/Guides/Fragmentation) behandelt.

## Referenz

### Eigenschaften

- {{cssxref("page")}}

### At-Rules und Deskriptoren

- {{cssxref("@page")}}
  - {{cssxref("@page/page-orientation", "page-orientation")}} Deskriptor
  - {{cssxref("@page/size", "size")}} Deskriptor
  - [Rand-Deskriptoren](/de/docs/Web/CSS/Reference/Properties/margin)
- [Rand-At-Rules](/de/docs/Web/CSS/Reference/At-rules/@page#margin_at-rules)

Das CSS Paged Media Modul führt auch die `bleeds` und `marks` Deskriptoren der `@page` At-Rule ein. Derzeit unterstützen keine Browser diese Funktionen.

### Selektoren

- {{cssxref(":blank")}}
- {{cssxref(":first")}}
- {{cssxref(":left")}}
- {{cssxref(":right")}}

## Leitfäden

- [Drucken](/de/docs/Web/CSS/Guides/Media_queries/Printing)
  - : Tipps und Techniken zur Verbesserung der Druckausgabe von Webinhalten.

## Verwandte Konzepte

- [CSS Fragmentierung](/de/docs/Web/CSS/Guides/Fragmentation) Modul
  - {{cssxref("break-after")}} Eigenschaft
  - {{cssxref("break-before")}} Eigenschaft
  - {{cssxref("break-inside")}} Eigenschaft
  - {{cssxref("orphans")}} Eigenschaft
  - {{cssxref("widows")}} Eigenschaft

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS Fragmentierung](/de/docs/Web/CSS/Guides/Fragmentation) Modul
- [CSS Media Queries](/de/docs/Web/CSS/Guides/Media_queries) Modul
