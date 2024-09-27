---
title: bfcache
slug: Glossary/bfcache
l10n:
  sourceCommit: b6abba976268a3dc68da99bebe63c500046bc583
---

{{GlossarySidebar}}

Der **Back-/Forward-Cache**, oder **bfcache**, ist eine leistungssteigernde Funktion, die in modernen Browsern verfügbar ist und eine sofortige Navigation zurück und vorwärts zwischen zuvor besuchten Seiten ermöglicht. Dies geschieht, indem ein vollständiger Schnappschuss einer Seite gespeichert wird, wenn der Benutzer von ihr weg navigiert; der Browser kann dann den Schnappschuss schnell wiederherstellen, falls der Benutzer sich entscheidet, zu dieser Seite zurückzukehren, anstatt die Netzwerk-Anfragen erneut durchführen zu müssen, die erforderlich wären, um die Seite zu laden.

Der Schnappschuss beinhaltet die gesamte Seite im Speicher, einschließlich des JavaScript-Heaps; der in Bearbeitung befindliche Code wird angehalten, wenn der Benutzer die Seite verlässt, und fortgesetzt, wenn er zu ihr zurückkehrt. Ein regulärer HTTP-Cache-Eintrag enthält hingegen nur Antworten auf vorherige Anfragen. Der bfcache liefert daher schnellere Ergebnisse als der HTTP-Cache.

Der Nachteil ist, dass bfcache-Einträge mehr Ressourcen erfordern und Komplexität in Bezug auf die Darstellung von in Bearbeitung befindlichem Code schaffen. Einige Code-Funktionen (zum Beispiel der [`unload`](/de/docs/Web/API/Window/unload_event) Handler) sind nicht kompatibel, sodass deren Anwesenheit auf einer Seite sie daran hindert, den bfcache zu verwenden.

Der bfcache ist großartig für die Leistung, daher ist es in Ihrem Interesse sicherzustellen, dass Ihre Seiten nicht davon blockiert sind, ihn zu verwenden. Sie können die [`notRestoredReasons` API](/de/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons) verwenden, um zu überwachen, ob Seiten von der Nutzung des bfcache blockiert sind und aus welchen Gründen.

## Siehe auch

- [Back and forward cache](https://web.dev/articles/bfcache) auf web.dev (2023)
