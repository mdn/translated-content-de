---
title: ARIA Screen Reader Implementors Guide
short-title: Leitfaden für Bildschirmlesegeräte-Implementierer
slug: Web/Accessibility/ARIA/Guides/Screen_Reader_Implementors
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

## Live-Bereiche

Dies ist nur ein Leitfaden. Das Markup für Live-Bereiche ist ein komplexes Thema, das in gewisser Weise offen für Interpretationen ist. Das Folgende soll Implementierungsrichtlinien bieten, die dem Bedürfnis von Entwicklern von Bildschirmlesegeräten nach verschiedenen Ansätzen Rechnung tragen. Die Absicht ist, ein Gleichgewicht zwischen der Bereitstellung nützlicher Anleitungen zur Verwendung der beabsichtigten Bedeutung des Markups und der Unterstützung von Live-Bereichen als Bereich für Innovation und Wettbewerb von Bildschirmlesegeräten zu finden.

### Interpretation des WAI-ARIA-Markups für Live-Bereiche

1. Live-Änderungen sind Hinweise: Im Allgemeinen wird das Markup für Live-Bereiche vom Autor als Hinweise bereitgestellt, und die unterstützende Technologie kann globale, seiten- oder sogar bereichsspezifische Einstellungen sowie Heuristiken zulassen, um bei Seiten, die keine WAI-ARIA-Hinweise haben, mit Live-Änderungen zu helfen.
2. Optional können Sie eine zweite, zusätzliche Warteschlange erstellen, wenn der Benutzer einen zweiten Hardwarekanal konfiguriert: Wenn es zwei Kanäle für die Darstellung gibt (z.B. Text zu Sprache und eine Braille-Anzeige), können zwei Warteschlangen beibehalten werden, um eine parallele Darstellung zu ermöglichen. Die Kanäle könnten von Benutzern konfiguriert werden, um Live-Bereiche basierend auf Rolle oder Höflichkeit darzustellen.
3. Beschäftigte Bereiche: Änderungen in einem Bereich, der mit `aria-busy="true"` markiert ist, sollten erst dann zur Warteschlange hinzugefügt werden, wenn dieses Attribut gelöscht ist.
4. Höflichkeit (`aria-live` oder von [role](/de/docs/Web/Accessibility/ARIA/Reference/Roles)) hat Vorrang: Einträge sollten basierend auf ihrem Höflichkeitsniveau aus der `aria-live`-Eigenschaft oder geerbt von der `role`-Eigenschaft zur Warteschlange hinzugefügt werden (z.B. [role="log"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/log_role) ist standardmäßig höflich). Zuerst werden assertive Elemente und dann das Höflichkeitsniveau berücksichtigt. Alternativ können Implementierungen wählen, eine Richtlinie zu verfolgen, die höflichere Einträge löscht, z.B. löschen assertive Einträge alle höflichen Einträge aus der Warteschlange.
5. Zeit hat zweite Priorität: Priorisieren Sie Einträge mit demselben Höflichkeitsniveau entsprechend dem Zeitpunkt, zu dem das Ereignis passiert (frühere Ereignisse kommen zuerst). Präsentieren Sie Einträge mit demselben Höflichkeitsniveau in der Reihenfolge dessen, was zuerst geschehen ist.
6. Atomare (`aria-atomic="true"`) Bereiche mit mehreren Änderungen sollten nicht zweimal mit demselben Inhalt präsentiert werden. Wenn ein neues Ereignis für einen atomaren Bereich zur Warteschlange hinzugefügt wird, entfernen Sie ein früheres Ereignis für denselben Bereich. Es ist wahrscheinlich wünschenswert, zumindest eine kurze Verzögerung zu haben, bevor Änderungen an atomaren Bereichen präsentiert werden, um zu vermeiden, dass der Bereich zweimal für zwei schnell aufeinanderfolgende Änderungen präsentiert wird.
7. Schließen Sie Labels ein, wenn Änderungen präsentiert werden: Wenn die Änderung in etwas mit einem semantischen Label irgendeiner Art auftritt, sagen Sie das Label an. Dies ist besonders wichtig bei Änderungen in Datenzellen, bei denen die Spalten- und Zeilenüberschriften wichtige kontextuelle Informationen liefern.

### Ideen für Einstellungen und Heuristiken

1. Erlauben Sie eine andere Stimme (in Text-zu-Sprache) oder andere variierende Präsentationsmerkmale, um Live-Änderungen hervorzuheben.
2. Wenn kein WAI-ARIA-Markup vorhanden ist, präsentieren Sie automatisch einige Änderungen, es sei denn, der Benutzer konfiguriert alle Live-Änderungen auf "aus". Beispielsweise automatisch Änderungen ansagen, die durch die eigene Eingabe des Benutzers verursacht werden, als Teil des Kontextes dieser Eingabe.
3. Globale Einstellungen erlauben, um die Präsentation von Live-Änderungen auszuschalten, alle Live-Änderungen zu präsentieren, das Markup zu verwenden oder "intelligent" zu sein (Heuristiken verwenden).
