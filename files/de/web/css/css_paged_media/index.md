---
title: CSS paged media
slug: Web/CSS/CSS_paged_media
l10n:
  sourceCommit: 016ecd8ccaed866c4d8d995fb18379c6e48f3b50
---

Das Modul **CSS paged media** definiert die Eigenschaften, die die Darstellung von Inhalten für den Druck oder andere Medien steuern, die Inhalte in diskrete Seiten unterteilen. Es ermöglicht Ihnen, Seitenumbrüche festzulegen, druckbare Bereiche zu steuern und linke und rechte Seiten unterschiedlich zu gestalten.

Das CSS-Paged-Media-Modul gibt an, wie Seiten generiert und gestaltet werden, um fragmentierte Inhalte in einer Seitendarstellung zu halten, einschließlich Inhalten, die gedruckt oder als Druckvorschau dargestellt werden. Das Modul definiert Funktionalitäten zur Steuerung von Seitenrändern, Größe, Ausrichtung sowie Kopf- und Fußzeilen. Es erweitert [generierte Inhalte](/de/docs/Web/CSS/CSS_generated_content) und bietet Funktionen zur Generierung von Seitennummern und laufenden Kopf- und Fußzeilen.

Der Prozess der Paginierung von Inhalten in generierte Seiten und der Kontrolle von Umbrüchen innerhalb von Elementen wird im [CSS-Fragmentierungsmodul](/de/docs/Web/CSS/CSS_fragmentation) behandelt.

## Referenz

### Eigenschaften

- {{cssxref("page")}}

### At-Regeln und Deskriptoren

- {{cssxref("@page")}}
  - {{cssxref("@page/page-orientation", "page-orientation")}} Deskriptor
  - {{cssxref("@page/size", "size")}} Deskriptor
  - [Rand-Deskriptoren](/de/docs/Web/CSS/margin)
- [Rand-At-Regeln](/de/docs/Web/CSS/@page#margin_at-rules)

Das CSS-Paged-Media-Modul führt auch die Deskriptoren `bleeds` und `marks` der `@page`-At-Regel ein. Derzeit unterstützen keine Browser diese Funktionen.

### Pseudo-Klassen

- {{cssxref(":blank")}}
- {{cssxref(":first")}}
- {{cssxref(":left")}}
- {{cssxref(":right")}}

## Leitfäden

- [Drucken](/de/docs/Web/CSS/CSS_media_queries/Printing)
  - : Tipps und Techniken, um die Druckausgabe von Webinhalten zu verbessern.

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

- [CSS-Fragmentierung](/de/docs/Web/CSS/CSS_fragmentation) Modul
- [CSS-Media-Queries](/de/docs/Web/CSS/CSS_media_queries) Modul
