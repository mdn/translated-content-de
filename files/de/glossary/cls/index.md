---
title: Kumulative Layoutverschiebung (CLS)
slug: Glossary/CLS
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

**Kumulative Layoutverschiebung (CLS)** ist eine Benutzerfreundlichkeitsmetrik für Websites, die von Google als eine der [Core Web Vital](https://web.dev/articles/vitals) Metriken entwickelt wurde.

Sie misst das Ausmaß, in dem Benutzer unerwartete Layoutverschiebungen erleben, bei denen sich Elemente der Seite auf unerwartete Weise bewegen: das heißt, die nicht das Ergebnis einer Benutzeraktion wie dem Drücken eines Buttons oder Teil einer Animation sind.

Layoutverschiebungen können zum Beispiel durch {{htmlelement("img")}} oder {{htmlelement("video")}} Elemente verursacht werden, denen keine `width` und `height` Attribute zugewiesen sind, sodass der Browser nicht weiß, wie viel Platz sie benötigen, bis sie geladen sind.

Das [`LayoutShift`](/de/docs/Web/API/LayoutShift) Interface, das Teil der [Performance API](/de/docs/Web/API/Performance_API) ist, kann verwendet werden, um einzelne Layoutverschiebungen zu messen, die dann genutzt werden können, um den CLS-Wert für eine Webseite zu berechnen.

## Siehe auch

- [CLS](https://web.dev/articles/cls) auf web.dev
