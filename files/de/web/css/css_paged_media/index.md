---
title: CSS paged media
slug: Web/CSS/CSS_paged_media
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Das **CSS paged media**-Modul definiert die Eigenschaften, die die Präsentation von Inhalten für Druckmedien oder andere Medien steuern, die Inhalte in einzelne Seiten unterteilen. Es ermöglicht Ihnen, Seitenumbrüche festzulegen, druckbare Bereiche zu kontrollieren und linke und rechte Seiten unterschiedlich zu gestalten.

Das CSS paged media Modul gibt an, wie Seiten erstellt und gestaltet werden, um fragmentierte Inhalte in einer Seitenpräsentation darzustellen, einschließlich Inhalte, die gedruckt oder als Druckvorschau angezeigt werden. Das Modul definiert Funktionen zur Steuerung von Seitenrändern, Größe, Ausrichtung und Kopf- und Fußzeilen. Es erweitert [generierten Inhalt](/de/docs/Web/CSS/CSS_generated_content), um Funktionen zum Generieren von Seitenzahlen und laufenden Kopf- und Fußzeilen bereitzustellen.

Der Prozess, Inhalte in generierte Seiten zu paginieren und Umbrüche innerhalb von Elementen zu steuern, wird im [CSS-Fragmentierungsmodul](/de/docs/Web/CSS/CSS_fragmentation) behandelt.

## Referenz

### Eigenschaften

- {{cssxref("page")}}

### At-Regeln und Deskriptoren

- {{cssxref("@page")}}
  - {{cssxref("@page/page-orientation", "page-orientation")}} Deskriptor
  - {{cssxref("@page/size", "size")}} Deskriptor
  - [Margin-Deskriptoren](/de/docs/Web/CSS/Reference/Properties/margin)
- [Margin-At-Regeln](/de/docs/Web/CSS/@page#margin_at-rules)

Das CSS paged media Modul führt auch die Deskriptoren `bleeds` und `marks` der `@page`-At-Regel ein. Derzeit unterstützen keine Browser diese Funktionen.

### Pseudo-Klassen

- {{cssxref(":blank")}}
- {{cssxref(":first")}}
- {{cssxref(":left")}}
- {{cssxref(":right")}}

## Leitfäden

- [Drucken](/de/docs/Web/CSS/CSS_media_queries/Printing)
  - : Tipps und Techniken zur Verbesserung der Druckausgabe von Webinhalten.

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
