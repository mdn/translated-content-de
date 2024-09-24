---
title: Vorlagen in Firefox 3
slug: Mozilla/Firefox/Releases/3/Templates
l10n:
  sourceCommit: 88241bf466f1025d3c2f4ce2752586dd85d1ae13
---

{{FirefoxSidebar}}

Vorlagen wurden in Firefox 3 erheblich verbessert. Die wichtigste Verbesserung besteht darin, dass [benutzerdefinierte Abfrageprozessoren](/de/docs/How_to_implement_a_custom_XUL_query_processor_component) verwendet werden können, um andere Typen von Datenquellen neben RDF zu verwalten. Eine neue Abfragesyntax ermöglicht dies. Eingebaute Unterstützung für SQL ([mozStorage](/de/docs/Storage)) und XML-Datenquellen ist ebenfalls vorhanden. Eine vollständige Beschreibung der neuen Funktionen, die für Vorlagen verfügbar sind, ist [verfügbar](https://wiki.mozilla.org/XUL:Template_Features_in_1.9). ([Firefox Fehler 285631](https://bugzil.la/285631))

### Weitere Verbesserungen bei Vorlagen

- Relationale Bedingungen wurden hinzugefügt, um eine präzisere Kontrolle darüber zu ermöglichen, welche Ergebnisse mit einer Regel übereinstimmen. Dies erlaubt es beispielsweise, Ergebnisse zu treffen, die mit bestimmten Zeichenfolgen beginnen oder enden, oder die vor oder nach anderen Werten liegen.
- Ein Flag, `dont-recurse`, wurde hinzugefügt, um die Rekursion zu verhindern, sodass nur eine Ebene von Ergebnissen generiert wird.
- APIs wurden dem Template-Builder hinzugefügt, um ein Ergebnisobjekt abzurufen, das ein Ausgabeelement darstellt.
- Der XUL-Sortierdienst ist robuster und [sortiert](/de/docs/XUL/Template_Guide/Sorting_Results) sowohl Inhalts- als auch Nicht-Inhaltsbäume besser. Er ermöglicht auch das Sortieren von Inhalten, die nicht durch Vorlagen erstellt wurden. ([Firefox Fehler 335122](https://bugzil.la/335122))

### Siehe auch

- [Firefox 3 für Entwickler](/de/docs/Mozilla/Firefox/Releases/3)
