---
title: Vorlagen in Firefox 3
slug: Mozilla/Firefox/Releases/3/Templates
l10n:
  sourceCommit: 2591a9b59de88401a2ef0fb7d0b8d0281e3f5376
---

Vorlagen wurden in Firefox 3 erheblich verbessert. Die wichtigste Verbesserung ermöglicht die Verwendung von [benutzerdefinierten Abfrageprozessoren](https://web.archive.org/web/20180309091530/https://developer.mozilla.org/de/docs/Mozilla/Tech/XUL/How_to_implement_a_custom_XUL_query_processor_component), um andere Datentypen außer RDF zu verarbeiten. Eine neue Abfragesyntax macht dies möglich. Eingebaute Unterstützung für SQL ([mozStorage](https://web.archive.org/web/20210401045303/https://developer.mozilla.org/de/docs/Mozilla/Tech/XPCOM/Storage)) und XML-Datenquellen wird ebenfalls bereitgestellt. Eine vollständige Beschreibung der neuen Funktionen, die für Vorlagen verfügbar sind, [ist verfügbar](https://wiki.mozilla.org/XUL:Template_Features_in_1.9). ([Firefox-Bug 285631](https://bugzil.la/285631))

### Weitere Verbesserungen an Vorlagen

- Relationale Bedingungen wurden hinzugefügt, um eine genauere Kontrolle darüber zu ermöglichen, welche Ergebnisse mit einer Regel übereinstimmen. So kann zum Beispiel das Übereinstimmen von Ergebnissen, die mit bestimmten Zeichenfolgen beginnen oder enden, oder die vor oder nach anderen Werten liegen, ermöglicht werden.
- Eine Markierung, `dont-recurse`, wurde hinzugefügt, um Rekursion zu verhindern, sodass nur eine Ebene von Ergebnissen erzeugt wird.
- APIs wurden dem Vorlagen-Builder hinzugefügt, um ein Ergebnisobjekt zu erhalten, das ein Ausgabeelement darstellt.
- Der XUL-Sortierdienst ist robuster und [sortiert](https://web.archive.org/web/20201028214819/https://developer.mozilla.org/de/docs/Archive/Mozilla/XUL/Template_Guide/Sorting_Results) sowohl Inhalts- als auch Nicht-Inhaltsbäume besser. Er ermöglicht auch die Sortierung von Inhalten, die nicht mit Vorlagen erstellt wurden. ([Firefox-Bug 335122](https://bugzil.la/335122))

### Siehe auch

- [Firefox 3 für Entwickler](/de/docs/Mozilla/Firefox/Releases/3)
