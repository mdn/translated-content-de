---
title: bfcache
slug: Glossary/bfcache
l10n:
  sourceCommit: b6abba976268a3dc68da99bebe63c500046bc583
---

{{GlossarySidebar}}

Der **back/forward cache**, oder **bfcache**, ist eine leistungssteigernde Funktion, die in modernen Browsern verfügbar ist und die sofortige Navigation zurück oder vorwärts zwischen zuvor besuchten Seiten ermöglicht. Dies wird erreicht, indem ein vollständiger Snapshot einer Seite gespeichert wird, wenn der Benutzer von ihr weg navigiert; der Browser kann dann schnell den Snapshot wiederherstellen, wenn sich der Benutzer entscheidet, zu dieser Seite zurückzukehren, anstatt die Netzwerkanforderungen zu wiederholen, die zum Laden der Seite erforderlich sind.

Der Snapshot enthält die gesamte Seite im Speicher, einschließlich des JavaScript-Heaps; der in Bearbeitung befindliche Code wird pausiert, wenn der Benutzer weg navigiert, und fortgesetzt, wenn er zur Seite zurückkehrt. Ein regulärer HTTP-Cache-Eintrag hingegen enthält nur die Antworten auf frühere Anfragen. Der bfcache liefert daher schnellere Ergebnisse als der HTTP-Cache.

Der Nachteil ist, dass bfcache-Einträge mehr Ressourcen benötigen und Komplexität in Bezug auf die Darstellung von in Bearbeitung befindlichem Code schaffen. Einige Code-Funktionen (zum Beispiel der [`unload`](/de/docs/Web/API/Window/unload_event)-Handler) sind nicht kompatibel, so dass ihre Anwesenheit auf einer Seite diese daran hindert, den bfcache zu verwenden.

Der bfcache ist großartig für die Leistungsoptimierung, daher liegt es in Ihrem Interesse sicherzustellen, dass Ihre Seiten nicht daran gehindert werden, ihn zu nutzen. Sie können die [`notRestoredReasons` API](/de/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons) verwenden, um zu überwachen, ob Seiten daran gehindert werden, den bfcache zu verwenden, und die Gründe dafür herauszufinden.

## Siehe auch

- [Back and forward cache](https://web.dev/articles/bfcache) auf web.dev (2023)
