---
title: Vorlagen in Firefox 3
slug: Mozilla/Firefox/Releases/3/Templates
l10n:
  sourceCommit: 88241bf466f1025d3c2f4ce2752586dd85d1ae13
---

{{FirefoxSidebar}}

Die Vorlagen wurden in Firefox 3 erheblich verbessert. Die wichtigste Verbesserung ermöglicht die Verwendung von [benutzerdefinierten Abfrageprozessoren](/de/docs/How_to_implement_a_custom_XUL_query_processor_component), um neben RDF auch andere Arten von Datenquellen zu verarbeiten. Eine neue Abfragesyntax macht dies möglich. Ebenfalls vorhanden ist der integrierte Support für SQL ([mozStorage](/de/docs/Storage)) und XML-Datenquellen. Eine vollständige Beschreibung der neuen Funktionen, die für Vorlagen verfügbar sind, [ist verfügbar](https://wiki.mozilla.org/XUL:Template_Features_in_1.9). ([Firefox-Bug 285631](https://bugzil.la/285631))

### Weitere Verbesserungen der Vorlagen

- Relationale Bedingungen wurden hinzugefügt, um eine präzisere Kontrolle darüber zu ermöglichen, welche Ergebnisse mit einer Regel übereinstimmen. Dies erlaubt beispielsweise das Matching von Ergebnissen, die mit bestimmten Zeichenfolgen beginnen oder enden, oder die vor oder nach anderen Werten liegen.
- Ein Flag, `dont-recurse`, wurde hinzugefügt, um zu verhindern, dass Rekursion auftritt, sodass nur eine Ebene von Ergebnissen erzeugt wird.
- APIs wurden dem Vorlage-Builder hinzugefügt, um ein Ergebnisobjekt abzurufen, das ein Ausgabe-Element darstellt.
- Der XUL-Sortierdienst ist robuster und [sortiert](/de/docs/XUL/Template_Guide/Sorting_Results) sowohl Inhalts- als auch Nicht-Inhaltsbäume besser. Er ermöglicht auch das Sortieren von Inhalten, die nicht aus Vorlagen erstellt wurden. ([Firefox-Bug 335122](https://bugzil.la/335122))

### Siehe auch

- [Firefox 3 für Entwickler](/de/docs/Mozilla/Firefox/Releases/3)
