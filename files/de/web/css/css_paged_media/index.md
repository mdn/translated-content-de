---
title: CSS Paged Media
slug: Web/CSS/CSS_paged_media
l10n:
  sourceCommit: 6948f64c02c25f3200bef45f69b9560eead391f8
---

Das **CSS Paged Media**-Modul definiert die Eigenschaften, die die Darstellung von Inhalten für den Druck oder andere Medien, die Inhalte in separate Seiten unterteilen, steuern. Es ermöglicht Ihnen, Seitenumbrüche festzulegen, druckbare Bereiche zu kontrollieren und linke und rechte Seiten unterschiedlich zu gestalten.

Das CSS Paged Media-Modul spezifiziert, wie Seiten generiert und gestaltet werden, um fragmentierten Inhalt in einer paginierten Darstellung zu halten, einschließlich Inhalt, der gedruckt oder als Druckvorschau angezeigt wird. Das Modul definiert Funktionen zur Steuerung von Seitenrändern, Größe, Ausrichtung sowie Kopf- und Fußzeilen. Es erweitert [generierten Inhalt](/de/docs/Web/CSS/CSS_generated_content), um Funktionalitäten für die Generierung von Seitenzahlen und laufenden Kopf- und Fußzeilen bereitzustellen.

Der Prozess der Paginierung von Inhalt in generierte Seiten und die Kontrolle von Umbrüchen innerhalb von Elementen wird im [CSS-Fragmentierungsmodul](/de/docs/Web/CSS/CSS_fragmentation) behandelt.

## Referenz

### Eigenschaften

- {{cssxref("page")}}

### At-Rules

- {{cssxref("@page")}}
  - {{cssxref("@page/page-orientation", "page-orientation")}} Deskriptor
  - {{cssxref("@page/size", "size")}} Deskriptor
  - [Rand-Deskriptoren](/de/docs/Web/CSS/margin)
- [Rand-At-Rules](/de/docs/Web/CSS/@page#margin_at-rules)

Das CSS Paged Media-Modul führt auch die `bleeds`- und `marks`-Deskriptoren der `@page` At-Rule ein. Derzeit unterstützen keine Browser diese Funktionen.

### Pseudoklassen

- {{cssxref(":blank")}}
- {{cssxref(":first")}}
- {{cssxref(":left")}}
- {{cssxref(":right")}}

## Leitfäden

- [Drucken](/de/docs/Web/CSS/CSS_media_queries/Printing)
  - : Tipps und Techniken, um die Druckausgabe von Webinhalten zu verbessern.

## Verwandte Konzepte

- [CSS-Fragmentierung](/de/docs/Web/CSS/CSS_fragmentation)-Modul
  - {{cssxref("break-after")}} Eigenschaft
  - {{cssxref("break-before")}} Eigenschaft
  - {{cssxref("break-inside")}} Eigenschaft
  - {{cssxref("orphans")}} Eigenschaft
  - {{cssxref("widows")}} Eigenschaft

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Fragmentierung](/de/docs/Web/CSS/CSS_fragmentation)-Modul
- [CSS-Media Queries](/de/docs/Web/CSS/CSS_media_queries)-Modul
