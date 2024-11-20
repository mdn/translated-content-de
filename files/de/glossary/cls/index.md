---
title: Kumulative Layout-Verschiebung (CLS)
slug: Glossary/CLS
l10n:
  sourceCommit: 0598721ab3f672c66a8357d9e6b27ec8644a2b21
---

{{GlossarySidebar}}

**Kumulative Layout-Verschiebung (CLS)** ist eine Usability-Metrik für Websites, die von Google als eine der [Core Web Vital](https://web.dev/articles/vitals)-Metriken entwickelt wurde.

Sie misst in welchem Umfang Benutzer unerwarteten Layout-Verschiebungen begegnen, bei denen Elemente der Seite auf eine unerwartete Weise verschoben werden: also nicht durch eine Benutzeraktion wie das Drücken eines Knopfes oder als Teil einer Animation.

Layout-Verschiebungen können zum Beispiel durch `<img>` oder `<video>`-Elemente verursacht werden, denen nicht die Attribute `width` und `height` zugewiesen sind, sodass der Browser nicht weiß, wie viel Platz sie einnehmen werden, bis sie geladen sind.

Die [`LayoutShift`](/de/docs/Web/API/LayoutShift)-Schnittstelle, Teil der [Performance API](/de/docs/Web/API/Performance_API), kann verwendet werden, um einzelne Layout-Verschiebungen zu messen, die dann zur Berechnung des CLS-Scores für eine Webseite genutzt werden können.

## Siehe auch

- [CLS](https://web.dev/articles/cls) auf web.dev
