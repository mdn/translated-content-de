---
title: Vorlagen in Firefox 3
slug: Mozilla/Firefox/Releases/3/Templates
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

Vorlagen wurden in Firefox 3 erheblich verbessert. Die wichtigste Verbesserung ermöglicht die Verwendung von [benutzerdefinierten Abfrageprozessoren](/de/docs/How_to_implement_a_custom_XUL_query_processor_component), um andere Arten von Datenquellen neben RDF zu handhaben. Eine neue Abfragesyntax macht dies möglich. Eingebaute Unterstützung für SQL ([mozStorage](/de/docs/Storage)) und XML-Datenquellen wird ebenfalls bereitgestellt. Eine vollständige Beschreibung der neuen Funktionen, die für Vorlagen verfügbar sind, [ist verfügbar](https://wiki.mozilla.org/XUL:Template_Features_in_1.9). ([Firefox Bug 285631](https://bugzil.la/285631))

### Weitere Verbesserungen bei Vorlagen

- Relationale Bedingungen wurden hinzugefügt, um eine genauere Kontrolle darüber zu ermöglichen, welche Ergebnisse mit einer Regel übereinstimmen. Dies ermöglicht beispielsweise das Abgleichen von Ergebnissen, die mit bestimmten Zeichenfolgen beginnen oder enden, oder die vor oder nach anderen Werten liegen.
- Ein Flag, `dont-recurse`, wurde hinzugefügt, um Rekursion zu verhindern, sodass nur eine Ebene von Ergebnissen erzeugt wird.
- APIs wurden dem Vorlagen-Builder hinzugefügt, um ein Ergebnisobjekt abzurufen, das ein Ausgabeelement darstellt.
- Der XUL-Sortierservice ist robuster und [sortiert](/de/docs/XUL/Template_Guide/Sorting_Results) sowohl Inhalts- als auch Nichtinhaltsbäume besser. Es ermöglicht auch das Sortieren von nicht vorlagenbasierten Inhalten. ([Firefox Bug 335122](https://bugzil.la/335122))

### Siehe auch

- [Firefox 3 für Entwickler](/de/docs/Mozilla/Firefox/Releases/3)
