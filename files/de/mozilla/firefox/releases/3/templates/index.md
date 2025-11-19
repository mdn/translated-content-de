---
title: Vorlagen in Firefox 3
slug: Mozilla/Firefox/Releases/3/Templates
l10n:
  sourceCommit: 0c81cbce5f95a0be935724bcd936f5592774eb3a
---

Vorlagen wurden in Firefox 3 erheblich verbessert. Die wichtigste Verbesserung ermöglicht die Verwendung von [benutzerdefinierten Abfrageprozessoren](https://web.archive.org/web/20180309091530/https://developer.mozilla.org/de/docs/Mozilla/Tech/XUL/How_to_implement_a_custom_XUL_query_processor_component) zur Verarbeitung anderer Arten von Datenquellen neben RDF. Eine neue Abfragesyntax macht dies möglich. Eingebaute Unterstützung für SQL ([mozStorage](https://web.archive.org/web/20210401045303/https://developer.mozilla.org/de/docs/Mozilla/Tech/XPCOM/Storage)) und XML-Datenquellen ist ebenfalls vorhanden. Eine vollständige Beschreibung der neuen Funktionen, die für Vorlagen verfügbar sind, [ist verfügbar](https://wiki.mozilla.org/XUL:Template_Features_in_1.9). ([Firefox Bug 285631](https://bugzil.la/285631))

## Weitere Verbesserungen bei Vorlagen

- Relationale Bedingungen wurden hinzugefügt, um eine präzisere Kontrolle darüber zu ermöglichen, welche Ergebnisse mit einer Regel übereinstimmen. Dadurch kann zum Beispiel das Übereinstimmen von Ergebnissen ermöglicht werden, die mit bestimmten Zeichenfolgen beginnen oder enden oder die vor oder nach anderen Werten liegen.
- Ein Flag, `dont-recurse`, wurde hinzugefügt, um zu verhindern, dass Rekursion stattfindet, sodass nur eine Ebene von Ergebnissen erzeugt wird.
- APIs wurden dem Vorlagen-Builder hinzugefügt, um ein Ergebnisobjekt abzurufen, das einen Ausgabeposten darstellt.
- Der XUL-Sortierdienst ist robuster und [sortiert](https://web.archive.org/web/20201028214819/https://developer.mozilla.org/de/docs/Archive/Mozilla/XUL/Template_Guide/Sorting_Results) sowohl Inhalts- als auch Nicht-Inhaltsbäume besser. Er erlaubt auch das Sortieren von Inhalten, die nicht mit Vorlagen erstellt wurden. ([Firefox Bug 335122](https://bugzil.la/335122))

## Siehe auch

- [Firefox 3 für Entwickler](/de/docs/Mozilla/Firefox/Releases/3)
