---
title: Cumulative Layout Shift (CLS)
slug: Glossary/CLS
l10n:
  sourceCommit: fcd4f39485d740615c32ccaef63471bc27095fb0
---

{{GlossarySidebar}}

**Cumulative Layout Shift (CLS)** ist eine Nutzbarkeitsmetrik für Websites, die von Google als eine der [Core Web Vital](https://web.dev/explore/learn-core-web-vitals) Metriken entwickelt wurde.

Sie misst das Ausmaß, in dem Benutzer unerwarteten Layout-Verschiebungen begegnen, bei denen Elemente der Seite auf unerwartete Weise verschoben werden: also solche, die nicht das Ergebnis einer Benutzeraktion wie das Drücken eines Buttons oder Teil einer Animation sind.

Layout-Verschiebungen können beispielsweise durch `<img>` oder `<video>` Elemente verursacht werden, die keine `width` und `height` Attribute haben, sodass der Browser nicht weiß, wie viel Platz sie beanspruchen werden, bis sie geladen sind.

Das [`LayoutShift`](/de/docs/Web/API/LayoutShift) Interface, das Teil der [Performance API](/de/docs/Web/API/Performance_API) ist, kann verwendet werden, um einzelne Layout-Verschiebungen zu messen, die dann zur Berechnung des CLS-Wertes für eine Webseite genutzt werden können.

## Siehe auch

- [CLS](https://web.dev/articles/cls) auf web.dev
