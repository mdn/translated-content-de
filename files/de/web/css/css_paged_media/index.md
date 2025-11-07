---
title: CSS-Paged-Media
slug: Web/CSS/CSS_paged_media
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

Das **CSS Paged Media** Modul definiert die Eigenschaften, die die Darstellung von Inhalten für den Druck oder andere Medien, die Inhalte in diskrete Seiten aufteilen, steuern. Es ermöglicht Ihnen, Seitenumbrüche zu setzen, druckbare Bereiche zu kontrollieren und linke und rechte Seiten unterschiedlich zu gestalten.

Das CSS Paged Media Modul spezifiziert, wie Seiten erstellt und layoutet werden, um fragmentierte Inhalte in einer seitenbasierten Präsentation zu halten, einschließlich Inhalten, die gedruckt oder als Druckvorschau dargestellt werden. Das Modul definiert Funktionen zur Steuerung von Seitenrändern, Größe, Ausrichtung sowie Kopf- und Fußzeilen. Es erweitert [Generated Content](/de/docs/Web/CSS/CSS_generated_content), um Funktionen zum Generieren von Seitenzahlen sowie laufende Kopf- und Fußzeilen bereitzustellen.

Der Prozess des Seitentrennens von Inhalten in generierte Seiten und das Steuern von Umbrüchen innerhalb von Elementen wird im [CSS Fragmentations-Modul](/de/docs/Web/CSS/CSS_fragmentation) behandelt.

## Referenz

### Eigenschaften

- {{cssxref("page")}}

### At-Regeln und Deskriptoren

- {{cssxref("@page")}}
  - {{cssxref("@page/page-orientation", "page-orientation")}} Deskriptor
  - {{cssxref("@page/size", "size")}} Deskriptor
  - [Margin-Deskriptoren](/de/docs/Web/CSS/Reference/Properties/margin)
- [Margin-At-Regeln](/de/docs/Web/CSS/Reference/At-rules/@page#margin_at-rules)

Das CSS Paged Media Modul führt auch die Deskriptoren `bleeds` und `marks` der `@page` At-Regel ein. Zurzeit unterstützt kein Browser diese Funktionen.

### Pseudoklassen

- {{cssxref(":blank")}}
- {{cssxref(":first")}}
- {{cssxref(":left")}}
- {{cssxref(":right")}}

## Leitfäden

- [Drucken](/de/docs/Web/CSS/CSS_media_queries/Printing)
  - : Tipps und Techniken zur Verbesserung der Druckerausgabe von Webinhalten.

## Verwandte Konzepte

- [CSS Fragmentation](/de/docs/Web/CSS/CSS_fragmentation) Modul
  - {{cssxref("break-after")}} Eigenschaft
  - {{cssxref("break-before")}} Eigenschaft
  - {{cssxref("break-inside")}} Eigenschaft
  - {{cssxref("orphans")}} Eigenschaft
  - {{cssxref("widows")}} Eigenschaft

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS Fragmentation](/de/docs/Web/CSS/CSS_fragmentation) Modul
- [CSS Media Queries](/de/docs/Web/CSS/CSS_media_queries) Modul
