---
title: bfcache
slug: Glossary/bfcache
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Der **Back/Forward-Cache**, oder **bfcache**, ist eine leistungssteigernde Funktion, die in modernen Browsern verfügbar ist und es ermöglicht, bereits besuchte Seiten sofort rückwärts und vorwärts zu navigieren. Dies geschieht, indem ein vollständiger Schnappschuss einer Seite gespeichert wird, wenn der Benutzer diese verlässt; der Browser kann dann den Schnappschuss schnell wiederherstellen, wenn der Benutzer sich entscheidet, zur Seite zurückzukehren, anstatt die Netzwerkanfragen zur Seitenladung zu wiederholen.

Der Schnappschuss enthält die gesamte Seite im Speicher, einschließlich des JavaScript-Heaps; der gerade laufende Code wird pausiert, wenn der Benutzer die Seite verlässt, und fortgesetzt, wenn er zurückkehrt. Ein normaler HTTP-Cache-Eintrag enthält hingegen nur die Antworten auf vorherige Anfragen. Der bfcache bietet daher schnellere Ergebnisse als der HTTP-Cache.

Der Nachteil besteht darin, dass bfcache-Einträge mehr Ressourcen erfordern und Komplexität in Bezug auf die Darstellung von laufendem Code erzeugen. Einige Code-Features (zum Beispiel der [`unload`](/de/docs/Web/API/Window/unload_event)-Handler) sind nicht kompatibel, sodass ihre Anwesenheit auf einer Seite verhindert, dass sie den bfcache nutzen kann.

Der bfcache ist hervorragend für die Leistung, daher ist es in Ihrem Interesse sicherzustellen, dass Ihre Seiten nicht von seiner Nutzung blockiert werden. Sie können die [`notRestoredReasons` API](/de/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons) verwenden, um zu überwachen, ob Seiten daran gehindert werden, den bfcache zu nutzen, und aus welchen Gründen.

## Siehe auch

- [Back and forward cache](https://web.dev/articles/bfcache) auf web.dev (2023)
