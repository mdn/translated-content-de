---
title: bfcache
slug: Glossary/bfcache
l10n:
  sourceCommit: b6abba976268a3dc68da99bebe63c500046bc583
---

{{GlossarySidebar}}

Der **Back/Forward-Cache**, oder **bfcache**, ist eine leistungssteigernde Funktion, die in modernen Browsern verfügbar ist. Sie ermöglicht eine sofortige Rückwärts- und Vorwärtsnavigation zwischen zuvor besuchten Seiten. Dies wird erreicht, indem ein vollständiger Schnappschuss einer Seite gespeichert wird, sobald der Benutzer diese verlässt. Der Browser kann dann schnell den Schnappschuss wiederherstellen, wenn der Benutzer zur Seite zurückkehren möchte, anstatt die Netzwerk-Anfragen zur Ladezeit der Seite erneut durchzuführen.

Der Schnappschuss enthält die gesamte Seite im Speicher, einschließlich des JavaScript-Heaps; der fortlaufende Code wird angehalten, wenn der Benutzer weg navigiert, und wieder aufgenommen, wenn er zur Seite zurückkehrt. Ein regulärer HTTP-Cache-Eintrag hingegen enthält nur Antworten auf vorherige Anfragen. Der bfcache liefert daher schnellere Ergebnisse als der HTTP-Cache.

Der Nachteil ist, dass bfcache-Einträge mehr Ressourcen benötigen und Komplexität bezüglich der Darstellung von laufendem Code schaffen. Einige Codemerkmale (beispielsweise der [`unload`](/de/docs/Web/API/Window/unload_event)-Handler) sind nicht kompatibel, sodass deren Vorhandensein auf einer Seite blockiert, dass diese den bfcache nutzen kann.

Der bfcache ist großartig für die Performance, daher ist es in Ihrem Interesse sicherzustellen, dass Ihre Seiten nicht davon blockiert werden, ihn zu verwenden. Sie können die [`notRestoredReasons` API](/de/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons) verwenden, um zu überwachen, ob Seiten daran gehindert werden, den bfcache zu nutzen, und warum.

## Siehe auch

- [Back and forward cache](https://web.dev/articles/bfcache) auf web.dev (2023)
