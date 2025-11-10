---
title: CSS Seitengesteuertes Medium
short-title: Seitengesteuertes Medium
slug: Web/CSS/Guides/Paged_media
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Das **CSS Seitengesteuerte Medien** Modul definiert die Eigenschaften, die die Darstellung von Inhalten für Druck oder andere Medien, die Inhalte in separate Seiten unterteilen, steuern. Es ermöglicht Ihnen, Seitenumbrüche festzulegen, druckbare Bereiche zu kontrollieren und linke und rechte Seiten unterschiedlich zu gestalten.

Das CSS Seitengesteuerte Medien Modul legt fest, wie Seiten generiert und layoutet werden, um fragmentierte Inhalte in einer Seitendarstellung zu halten, einschließlich Inhalten, die gedruckt oder als Druckvorschau angezeigt werden. Das Modul definiert Funktionen zur Steuerung von Seitenrändern, Größe, Ausrichtung sowie Kopf- und Fußzeilen. Es erweitert [generierte Inhalte](/de/docs/Web/CSS/Guides/Generated_content), um Funktionen für die Erzeugung von Seitennummern und durchlaufenden Kopf- und Fußzeilen bereitzustellen.

Der Prozess der Paginierung von Inhalten in generierten Seiten und der Kontrolle von Umbrüchen innerhalb von Elementen wird im [CSS-Fragmentierungsmodul](/de/docs/Web/CSS/Guides/Fragmentation) behandelt.

## Referenz

### Eigenschaften

- {{cssxref("page")}}

### At-Regeln und Deskriptoren

- {{cssxref("@page")}}
  - {{cssxref("@page/page-orientation", "page-orientation")}} Deskriptor
  - {{cssxref("@page/size", "size")}} Deskriptor
  - [Rand-Deskriptoren](/de/docs/Web/CSS/Reference/Properties/margin)
- [Rand-At-Regeln](/de/docs/Web/CSS/Reference/At-rules/@page#margin_at_rules)

Das CSS Seitengesteuertes Medien Modul führt auch die Deskriptoren `bleeds` und `marks` der `@page` At-Regel ein. Derzeit unterstützen keine Browser diese Funktionen.

### Pseudo-Klassen

- {{cssxref(":blank")}}
- {{cssxref(":first")}}
- {{cssxref(":left")}}
- {{cssxref(":right")}}

## Leitfäden

- [Drucken](/de/docs/Web/CSS/Guides/Media_queries/Printing)
  - : Tipps und Techniken zur Verbesserung der Druckausgabe von Webinhalten.

## Verwandte Konzepte

- [CSS-Fragmentierung](/de/docs/Web/CSS/Guides/Fragmentation) Modul
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
