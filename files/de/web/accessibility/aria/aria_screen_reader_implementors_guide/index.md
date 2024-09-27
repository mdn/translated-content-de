---
title: ARIA Screen Reader-Implementierungsleitfaden
slug: Web/Accessibility/ARIA/ARIA_Screen_Reader_Implementors_Guide
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

## Live-Regionen

Dies ist nur ein Leitfaden. Das Markup für Live-Regionen ist ein komplexes Gebiet, das bis zu einem gewissen Grad Interpretationen offenlässt. Das Folgende soll Implementierungshinweise bereitstellen, die den Bedarf der Screenreader-Entwickler respektieren, verschiedene Ansätze auszuprobieren. Die Absicht ist, ein Gleichgewicht zwischen der Bereitstellung nützlicher Anleitungen zur Verwendung der beabsichtigten Bedeutung des Markups zu finden und gleichzeitig Live-Regionen als ein Gebiet zu unterstützen, in dem Screenreader innovativ sein und konkurrieren können.

### Interpretation des WAI-ARIA-Live-Regionen-Markups

1. Live-Änderungen sind Hinweise: Im Allgemeinen werden die Markups für Live-Regionen vom Autor als Hinweise bereitgestellt, und die unterstützende Technologie kann globale, seiten- oder sogar regionsspezifische Einstellungen sowie Heuristiken verwenden, um bei Live-Änderungen auf Seiten ohne WAI-ARIA-Hinweise zu helfen.
2. Optional, eine zweite, zusätzliche Warteschlange erstellen, wenn der Benutzer einen zweiten Hardwarekanal konfiguriert: Wenn es zwei Kanäle für die Präsentation gibt (z.B. Text zu Sprache und eine Braille-Anzeige), können zwei Warteschlangen aufrechterhalten werden, um eine parallele Präsentation zu ermöglichen. Die Kanäle könnten benutzerkonfiguriert für die Präsentation von Live-Regionen basierend auf Rolle oder Höflichkeit sein.
3. Beschäftigte Regionen: Alle Änderungen in einer Region, die mit `aria-busy="true"` markiert sind, sollten nicht in die Warteschlange eingefügt werden, bis dieses Attribut entfernt wird.
4. Höflichkeit (`aria-live` oder aus [role](/de/docs/Web/Accessibility/ARIA/Roles)) hat den Vorrang: Elemente sollten basierend auf ihrem Höflichkeitslevel aus der `aria-live`-Eigenschaft oder geerbt von der Rolle (z.B. [role="log"](/de/docs/Web/Accessibility/ARIA/Roles/log_role) ist standardmäßig höflich) in die Warteschlange eingefügt werden. Zuerst kommen assertive Items, dann das Höflichkeitslevel. Alternativ können Implementierungen eine Richtlinie wählen, höflichere Items zu löschen, z.B. assertive Items löschen alle höflichen Items aus der Warteschlange.
5. Zeit hat den zweiten Vorrang: Priorisieren Sie Elemente mit demselben Höflichkeitslevel entsprechend dem Zeitpunkt des Auftretens des Ereignisses (frühere Ereignisse zuerst). Präsentieren Sie Items des gleichen Höflichkeitslevels in der Reihenfolge ihres ersten Auftretens.
6. Atomare (`aria-atomic="true"`) Regionen mit mehreren Änderungen sollten nicht zweimal mit dem gleichen Inhalt präsentiert werden. Wenn ein neues Ereignis für eine atomare Region zur Warteschlange hinzugefügt wird, entfernen Sie ein früheres Ereignis für dieselbe Region. Es ist wahrscheinlich wünschenswert, zumindest eine kleine Verzögerung einzuführen, bevor Änderungen an atomaren Regionen präsentiert werden, um zu vermeiden, dass die Region zweimal für zwei Änderungen, die schnell nacheinander auftreten, präsentiert wird.
7. Labels einbeziehen, wenn Änderungen präsentiert werden: Wenn die Änderung in etwas mit einem semantischen Label erfolgt, sprechen Sie das Label. Dies ist besonders wichtig bei Änderungen in Datenzellen, wo die Spalten- und Zeilenüberschriften wichtige Kontextinformationen liefern.

### Ideen für Einstellungen und Heuristiken

1. Erlauben Sie eine andere Stimme (bei Text-zu-Sprache) oder andere variierende Präsentationsmerkmale, um Live-Änderungen hervorzuheben.
2. Wenn kein WAI-ARIA-Markup vorhanden ist, präsentieren Sie automatisch einige Änderungen, es sei denn, der Benutzer konfiguriert alle Live-Änderungen auf "aus". Beispielsweise sprechen Sie automatisch Änderungen, die durch die eigene Eingabe des Benutzers verursacht werden, als Teil des Kontexts dieser Eingabe.
3. Erlauben Sie globale Einstellungen, um die Präsentation von Live-Änderungen auszuschalten, alle Live-Änderungen zu präsentieren, das Markup zu verwenden oder "intelligent" zu sein (Heuristiken verwenden).
