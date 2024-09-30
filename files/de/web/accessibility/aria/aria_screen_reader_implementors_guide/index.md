---
title: ARIA Screen Reader Implementors Guide
slug: Web/Accessibility/ARIA/ARIA_Screen_Reader_Implementors_Guide
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

## Live-Regionen

Dies ist nur ein Leitfaden. Das Markup für Live-Regionen ist ein komplexer Bereich, der teilweise offen für Interpretationen ist. Das Folgende soll Implementierungsleitlinien bieten, die den Bedarf der Screenreader-Entwickler respektieren, verschiedene Ansätze auszuprobieren. Die Absicht ist es, ein Gleichgewicht zu finden zwischen der Bereitstellung nützlicher Anleitungen zur Verwendung der beabsichtigten Bedeutung des Markups und der Unterstützung von Live-Regionen als einem Bereich für Innovationen und Wettbewerb unter Screenreadern.

### Interpretation des WAI-ARIA-Live-Region-Markups

1. Live-Änderungen sind Hinweise: Im Allgemeinen wird das Live-Region-Markup vom Autor als Hinweise bereitgestellt, und die unterstützende Technologie kann globale, website- oder sogar regionsspezifische Einstellungen sowie Heuristiken erlauben, um bei Live-Änderungen auf Seiten ohne WAI-ARIA-Hinweise zu unterstützen.
2. Optional eine zweite, zusätzliche Warteschlange erstellen, wenn der Benutzer einen zweiten Hardware-Kanal konfiguriert: Wenn es zwei Kanäle für die Präsentation gibt (z. B. Text-zu-Sprache und eine Braille-Anzeige), können zwei Warteschlangen geführt werden, um eine parallele Präsentation zu ermöglichen. Die Kanäle könnten benutzerkonfiguriert werden, um Live-Regionen basierend auf Rolle oder Höflichkeit zu präsentieren.
3. Beschäftigte Regionen: Änderungen in einer Region, die mit aria-busy="true" markiert ist, sollten nicht zur Warteschlange hinzugefügt werden, bis dieses Attribut gelöscht ist.
4. Höflichkeit (`aria-live` oder vom [role](/de/docs/Web/Accessibility/ARIA/Roles)) hat Vorrang: Elemente sollten basierend auf ihrem Höflichkeitsgrad aus der aria-live-Eigenschaft oder vererbt von der Rolle zur Warteschlange hinzugefügt werden (z. B. ist [role="log"](/de/docs/Web/Accessibility/ARIA/Roles/log_role) standardmäßig höflich). Anspruchsvolle Elemente kommen zuerst, dann der Höflichkeitsgrad. Alternativ können Implementierungen eine Richtlinie verfolgen, die mehr höfliche Elemente bereinigt, z. B. entfernen anspruchsvolle Elemente höfliche Elemente aus der Warteschlange.
5. Zeit hat zweitrangigen Vorrang: Elemente mit demselben Höflichkeitsgrad priorisieren, basierend darauf, wann das Ereignis auftritt (frühere Ereignisse zuerst). Präsentieren Sie Elemente desselben Höflichkeitsgrades in der Reihenfolge dessen, was zuerst auftrat.
6. Atomare (`aria-atomic="true"`) Regionen mit mehreren Änderungen sollten nicht zweimal mit demselben Inhalt präsentiert werden. Wenn ein neues Ereignis für eine atomare Region zur Warteschlange hinzugefügt wird, entfernen Sie ein früheres Ereignis für dieselbe Region. Es ist wahrscheinlich wünschenswert, zumindest eine kleine Verzögerung zu haben, bevor Änderungen in atomaren Regionen präsentiert werden, um zu vermeiden, dass die Region zweimal für zwei schnell aufeinanderfolgende Änderungen präsentiert wird.
7. Labels einbeziehen, wenn Änderungen präsentiert werden: Wenn die Änderung in etwas mit einem semantischen Label auftritt, geben Sie das Label aus. Dies ist besonders wichtig für Änderungen in Datenzellen, bei denen die Spalten- und Zeilenüberschriften wichtige Kontextinformationen liefern.

### Ideen für Einstellungen und Heuristiken

1. Möglichkeit bieten, eine andere Stimme (im Text-zu-Sprache) oder unterschiedliche präsentationale Merkmale zu verwenden, um Live-Änderungen hervorzuheben.
2. Wenn kein WAI-ARIA-Markup vorhanden ist, einige Änderungen automatisch präsentieren, es sei denn, der Benutzer konfiguriert, dass alle Live-Änderungen ausgeschaltet sind. Beispielsweise automatisch Änderungen aussprechen, die durch die eigenen Eingaben des Benutzers verursacht werden, als Teil des Kontexts dieser Eingaben.
3. Globale Einstellungen erlauben, um die Präsentation von Live-Änderungen auszuschalten, alle Live-Änderungen zu präsentieren, das Markup zu nutzen oder "intelligent" zu sein (Heuristiken verwenden).
