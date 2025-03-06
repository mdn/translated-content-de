---
title: ARIA Screen Reader Implementors Guide
short-title: Leitfaden für Bildschirmlesegeräte
slug: Web/Accessibility/ARIA/Guides/Screen_Reader_Implementors
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

## Live-Regionen

Dies ist nur ein Leitfaden. Live-Region-Markup ist ein komplexer Bereich, der teilweise offen für Interpretationen ist. Das Folgende soll Implementierungsanleitungen geben, die dem Bedarf der Entwickler von Bildschirmlesegeräten Rechnung tragen, verschiedene Ansätze auszuprobieren. Die Absicht ist, ein Gleichgewicht zwischen der Bereitstellung hilfreicher Anleitungen zur Nutzung der beabsichtigten Bedeutung des Markups und der Unterstützung von Live-Regionen als Bereich für Innovationen und Wettbewerb unter Bildschirmlesegeräten zu finden.

### Interpretation von WAI-ARIA Live-Region-Markup

1. Live-Änderungen sind Hinweise: Im Allgemeinen wird das Live-Region-Markup vom Autor als Hinweise bereitgestellt, und die assistierende Technologie kann globale, site- oder sogar regionsspezifische Einstellungen sowie Heuristiken ermöglichen, um bei Seiten, die keine WAI-ARIA-Hinweise haben, mit Live-Änderungen zu helfen.
2. Optional, erstellen Sie eine zweite, zusätzliche Warteschlange, wenn der Benutzer einen zweiten Hardwarekanal konfiguriert: Wenn es zwei Kanäle für die Präsentation gibt (z.B. Text-zu-Sprache und eine Brailleanzeige), können zwei Warteschlangen geführt werden, um eine parallele Präsentation zu ermöglichen. Die Kanäle könnten vom Benutzer so konfiguriert werden, dass sie Live-Regionen basierend auf Rolle oder Höflichkeit präsentieren.
3. Beschäftigte Regionen: Änderungen in einer Region, die mit aria-busy="true" markiert ist, sollten nicht zur Warteschlange hinzugefügt werden, bis dieses Attribut aufgehoben ist.
4. Höflichkeit (`aria-live` oder von [role](/de/docs/Web/Accessibility/ARIA/Reference/Roles)) hat Vorrang: Elemente sollten basierend auf ihrem Höflichkeitsniveau aus der `aria-live`-Eigenschaft oder geerbt von der `role` zur Warteschlange hinzugefügt werden (z.B. [role="log"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/log_role) ist standardmäßig höflich). Zuerst kommen durchsetzungsstarke Elemente, dann Höflichkeitsniveau. Alternativ können Implementierungen wählen, eine Richtlinie des Löschens höflicherer Elemente zu haben, z.B. durchsetzungsstarke Elemente löschen alle höflichen Elemente aus der Warteschlange.
5. Zeit hat den zweitgrößten Vorrang: Priorisieren Sie Elemente mit demselben Höflichkeitsniveau gemäß dem Zeitpunkt des Ereignisses (frühere Ereignisse kommen zuerst). Präsentieren Sie Elemente des gleichen Höflichkeitsniveaus in der Reihenfolge dessen, was zuerst auftrat.
6. Atomare (`aria-atomic="true"`) Regionen mit mehreren Änderungen sollten nicht zweimal mit demselben Inhalt präsentiert werden. Wenn ein neues Ereignis für eine atomare Region zur Warteschlange hinzugefügt wird, entfernen Sie ein früheres Ereignis für dieselbe Region. Es ist wahrscheinlich wünschenswert, mindestens ein kleines Timeout zu haben, bevor Änderungen in atomaren Regionen präsentiert werden, um zu vermeiden, dass die Region zweimal für zwei schnell aufeinanderfolgende Änderungen präsentiert wird.
7. Einschließen von Labels bei der Präsentation von Änderungen: Falls die Änderung in etwas mit einem semantischen Label auftritt, sprechen Sie das Label. Dies ist besonders wichtig für Änderungen in Datenzellen, bei denen die Spalten- und Zeilenköpfe wichtige kontextuelle Informationen liefern.

### Ideen für Einstellungen und Heuristiken

1. Ermöglichen Sie eine andere Stimme (in Text-zu-Sprache) oder andere variierende präsentative Merkmale, um Live-Änderungen hervorzuheben.
2. Wenn kein WAI-ARIA-Markup vorhanden ist, präsentieren Sie automatisch einige Änderungen, es sei denn, der Benutzer konfiguriert alle Live-Änderungen auszuschalten. Zum Beispiel, sprechen Sie automatisch Änderungen, die durch die eigene Eingabe des Benutzers verursacht werden, als Teil des Kontextes dieser Eingabe.
3. Erlauben Sie globale Einstellungen, um die Präsentation von Live-Änderungen auszuschalten, alle Live-Änderungen zu präsentieren, Markup zu verwenden oder "intelligent" zu sein (heuristische Ansätze verwenden).
