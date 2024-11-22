---
title: ARIA Screen Reader Implementors Guide
slug: Web/Accessibility/ARIA/ARIA_Screen_Reader_Implementors_Guide
l10n:
  sourceCommit: b692821c494fd3a25dd883b6fe14998fa2621f7b
---

{{AccessibilitySidebar}}

## Live-Bereiche

Dies ist nur ein Leitfaden. Die Markup von Live-Bereichen ist ein komplexer Bereich, der in gewisser Weise der Interpretation offen steht. Das Folgende soll Implementierungsrichtlinien bieten, die den Bedarf der Screenreader-Entwickler respektieren, verschiedene Ansätze auszuprobieren. Die Absicht ist, ein Gleichgewicht zwischen der Bereitstellung nützlicher Hinweise zur Verwendung der beabsichtigten Bedeutung des Markups und der Unterstützung von Live-Bereichen als Innovations- und Wettbewerbsfeld für Screenreader zu finden.

### Interpretation des WAI-ARIA Live-Bereich-Markups

1. Live-Änderungen sind Hinweise: Im Allgemeinen werden Markierungen für Live-Bereiche vom Autor als Hinweise bereitgestellt, und die unterstützende Technologie kann globale, seiten- oder sogar bereichsspezifische Einstellungen sowie Heuristiken bereitstellen, um bei Live-Änderungen auf Seiten zu helfen, die keine WAI-ARIA-Hinweise haben.
2. Optional: Erstellen Sie eine zweite, zusätzliche Warteschlange, wenn der Nutzer einen zweiten Hardware-Kanal konfiguriert: Wenn zwei Kanäle zur Präsentation vorhanden sind (z.B. Text-zu-Sprache und eine Braille-Anzeige), können zwei Warteschlangen geführt werden, um eine parallele Präsentation zu ermöglichen. Die Kanäle könnten benutzerkonfiguriert werden, um Live-Bereiche basierend auf der Rolle oder der Höflichkeit zu präsentieren.
3. Beschäftigte Bereiche: Änderungen in einem Bereich, der mit `aria-busy="true"` gekennzeichnet ist, sollten nicht zur Warteschlange hinzugefügt werden, bis dieses Attribut aufgehoben wird.
4. Höflichkeit (`aria-live` oder von [role](/de/docs/Web/Accessibility/ARIA/Roles)) hat Vorrang: Elemente sollten basierend auf ihrem Höflichkeitsgrad aus der `aria-live`-Eigenschaft oder vererbt von der `role` zur Warteschlange hinzugefügt werden (z.B. [role="log"](/de/docs/Web/Accessibility/ARIA/Roles/log_role) ist standardmäßig höflich). Durchsetzungsstarke Elemente haben Vorrang, dann der Höflichkeitsgrad. Alternativ können Implementierungen entscheiden, eine Richtlinie des Aussortierens höflicherer Elemente zu verfolgen, z.B. durchsetzungsstarke Elemente entfernen höfliche Elemente aus der Warteschlange.
5. Zeit hat zweite Priorität: Priorisieren Sie Elemente mit demselben Höflichkeitsgrad entsprechend dem Zeitpunkt, zu dem das Ereignis auftritt (frühere Ereignisse haben Vorrang). Präsentieren Sie Elemente mit demselben Höflichkeitsgrad in der Reihenfolge, in der sie zuerst aufgetreten sind.
6. Atomare (`aria-atomic="true"`) Bereiche mit mehreren Änderungen sollten nicht zweimal mit demselben Inhalt präsentiert werden. Wenn ein neues Ereignis für einen atomaren Bereich zur Warteschlange hinzugefügt wird, entfernen Sie ein früheres Ereignis für denselben Bereich. Es ist wahrscheinlich wünschenswert, mindestens eine kleine Verzögerung vor der Präsentation von Änderungen in atomaren Bereichen zu haben, um zu vermeiden, dass der Bereich zweimal für zwei schnelle aufeinanderfolgende Änderungen präsentiert wird.
7. Schließen Sie Beschriftungen beim Präsentieren von Änderungen ein: Wenn die Änderung in etwas mit einer semantischen Beschriftung irgendeiner Art erfolgt, sprechen Sie die Beschriftung aus. Dies ist besonders wichtig für Änderungen in Datenzellen, wo die Spalten- und Zeilenüberschriften wichtige Kontextinformationen bieten.

### Ideen für Einstellungen und Heuristiken

1. Erlauben Sie eine andere Stimme (in der Text-zu-Sprache-Ausgabe) oder andere variierende Präsentationseigenschaften, um Live-Änderungen hervorzuheben.
2. Wenn kein WAI-ARIA-Markup vorhanden ist, präsentieren Sie automatisch einige Änderungen, es sei denn, der Nutzer konfiguriert, alle Live-Änderungen abzuschalten. Zum Beispiel automatisch Änderungen sprechen, die durch die eigene Eingabe des Nutzers verursacht werden, als Teil des Kontextes dieser Eingabe.
3. Erlauben Sie globale Einstellungen, um die Präsentation von Live-Änderungen auszuschalten, alle Live-Änderungen zu präsentieren, das Markup zu verwenden oder "intelligent" zu sein (Heuristiken zu verwenden).
