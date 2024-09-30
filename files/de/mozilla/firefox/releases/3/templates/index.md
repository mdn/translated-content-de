---
title: Templates in Firefox 3
slug: Mozilla/Firefox/Releases/3/Templates
l10n:
  sourceCommit: 88241bf466f1025d3c2f4ce2752586dd85d1ae13
---

{{FirefoxSidebar}}

In Firefox 3 wurden die Templates erheblich verbessert. Die wichtigste Verbesserung ermöglicht die Verwendung von [benutzerdefinierten Query-Prozessoren](/de/docs/How_to_implement_a_custom_XUL_query_processor_component), um andere Arten von Datenquellen neben RDF zu verarbeiten. Eine neue Abfragesyntax macht dies möglich. Es gibt auch eingebaute Unterstützung für SQL ([mozStorage](/de/docs/Storage)) und XML-Datenquellen. Eine vollständige Beschreibung der neuen Funktionen, die für Templates verfügbar sind, [ist verfügbar](https://wiki.mozilla.org/XUL:Template_Features_in_1.9). ([Firefox Bug 285631](https://bugzil.la/285631))

### Weitere Verbesserungen der Templates

- Relationale Bedingungen wurden hinzugefügt, um eine präzisere Kontrolle darüber zu ermöglichen, welche Ergebnisse mit einer Regel übereinstimmen. Dies erlaubt beispielsweise das Abgleichen von Ergebnissen, die mit bestimmten Zeichenfolgen beginnen oder enden oder die vor oder nach anderen Werten liegen.
- Ein Flag, `dont-recurse`, wurde hinzugefügt, um das Auftreten von Rekursion zu verhindern, sodass nur eine Ebene von Ergebnissen generiert wird.
- APIs wurden dem Template-Builder hinzugefügt, um ein Ergebnisobjekt abzurufen, das ein Ausgabeelement darstellt.
- Der XUL-Sortierdienst ist robuster und [sortiert](/de/docs/XUL/Template_Guide/Sorting_Results) sowohl Inhalts- als auch Nichtinhaltsbäume besser. Er ermöglicht auch das Sortieren von nicht mittels Templates erstellt Inhalten. ([Firefox Bug 335122](https://bugzil.la/335122))

### Siehe auch

- [Firefox 3 für Entwickler](/de/docs/Mozilla/Firefox/Releases/3)
