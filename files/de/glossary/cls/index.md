---
title: Cumulative Layout Shift (CLS)
slug: Glossary/CLS
l10n:
  sourceCommit: fcd4f39485d740615c32ccaef63471bc27095fb0
---

{{GlossarySidebar}}

**Cumulative Layout Shift (CLS)** ist eine Nutzbarkeitskennzahl für Webseiten, die von Google als eine der [Core Web Vital](https://web.dev/explore/learn-core-web-vitals) Metriken entwickelt wurde.

Sie misst, in welchem Umfang Benutzer unvorhergesehene Layout-Verschiebungen erleben, bei denen Elemente der Seite unerwartet verschoben werden: das heißt, sie sind nicht das Ergebnis einer Benutzeraktion wie das Drücken eines Knopfes oder Teil einer Animation.

Layout-Verschiebungen können beispielsweise durch {{htmlelement("img")}} oder {{htmlelement("video")}} Elemente verursacht werden, denen keine `width` und `height` Attribute zugewiesen sind, sodass der Browser nicht weiß, wie viel Platz sie einnehmen werden, bis sie geladen sind.

Das [`LayoutShift`](/de/docs/Web/API/LayoutShift) Interface, Teil der [Performance API](/de/docs/Web/API/Performance_API), kann verwendet werden, um einzelne Layout-Verschiebungen zu messen, die dann zur Berechnung des CLS-Wertes für eine Webseite genutzt werden können.

## Siehe auch

- [CLS](https://web.dev/articles/cls) auf web.dev
