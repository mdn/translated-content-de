---
title: Kumulative Layoutverschiebung (CLS)
slug: Glossary/CLS
l10n:
  sourceCommit: fcd4f39485d740615c32ccaef63471bc27095fb0
---

{{GlossarySidebar}}

**Kumulative Layoutverschiebung (CLS)** ist eine Benutzerfreundlichkeitsmetrik für Websites, die von Google als eine der [Core Web Vital](https://web.dev/explore/learn-core-web-vitals) Metriken entwickelt wurde.

Sie misst, inwieweit Benutzer unerwartete Layoutverschiebungen erleben, bei denen Elemente der Seite auf unerwartete Weise verschoben werden: Das heißt, dass sie nicht das Ergebnis einer Benutzeraktion wie dem Drücken eines Buttons oder Teil einer Animation sind.

Layoutverschiebungen können zum Beispiel durch {{htmlelement("img")}}- oder {{htmlelement("video")}}-Elemente verursacht werden, denen keine `width`- und `height`-Attribute zugewiesen sind, sodass der Browser nicht weiß, wie viel Platz sie einnehmen werden, bis sie geladen sind.

Die {{domxref("LayoutShift")}}-Schnittstelle, Teil der [Performance API](/de/docs/Web/API/Performance_API), kann verwendet werden, um einzelne Layoutverschiebungen zu messen, die dann zur Berechnung des CLS-Werts für eine Webseite herangezogen werden können.

## Siehe auch

- [CLS](https://web.dev/articles/cls) auf web.dev
