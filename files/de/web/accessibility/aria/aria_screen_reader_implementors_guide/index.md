---
title: ARIA Screen Reader Implementiererhandbuch
slug: Web/Accessibility/ARIA/ARIA_Screen_Reader_Implementors_Guide
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

## Live-Bereiche

Dies ist lediglich ein Leitfaden. Das Markup für Live-Bereiche ist ein komplexes Gebiet, das teilweise der Interpretation offensteht. Das Folgende soll Implementierungshinweise geben, die den Bedarf der Screenreader-Entwickler respektieren, verschiedene Ansätze auszuprobieren. Die Absicht ist, ein Gleichgewicht zu finden zwischen nützlichen Anleitungen zur Verwendung der beabsichtigten Bedeutung des Markups und der Unterstützung von Live-Bereichen als ein Bereich, in dem Screenreader innovativ und wettbewerbsfähig sein können.

### Interpretation des WAI-ARIA-Live-Bereich-Markups

1. Live-Änderungen sind Hinweise: Im Allgemeinen werden Live-Bereich-Markups vom Autor als Hinweise bereitgestellt, und die unterstützende Technologie kann globale, seitenbezogene oder sogar bereichsspezifische Einstellungen sowie Heuristiken zulassen, um bei Live-Änderungen auf Seiten ohne WAI-ARIA-Hinweise zu helfen.
2. Optional eine zweite, zusätzliche Warteschlange erstellen, wenn der Benutzer einen zweiten Hardware-Kanal konfiguriert: Wenn es zwei Kanäle für die Darstellung gibt (z.B. Text-zu-Sprache und ein Braille-Display), können zwei Warteschlangen geführt werden, um eine parallele Darstellung zu ermöglichen. Die Kanäle könnten vom Benutzer so konfiguriert werden, dass sie Live-Bereiche basierend auf der Rolle oder Höflichkeit präsentieren.
3. Beschäftigte Bereiche: Änderungen in einem Bereich, der mit aria-busy="true" markiert ist, sollten nicht zur Warteschlange hinzugefügt werden, bis dieses Attribut freigegeben wird.
4. Höflichkeit (`aria-live` oder von [role](/de/docs/Web/Accessibility/ARIA/Roles)) hat Vorrang,: Elemente sollten basierend auf ihrem Höflichkeitsgrad aus der aria-live-Eigenschaft oder der von der Rolle geerbten Eigenschaft in die Warteschlange aufgenommen werden (z.B. [role="log"](/de/docs/Web/Accessibility/ARIA/Roles/log_role) ist standardmäßig höflich). Zuerst kommen durchsetzungsfähige Elemente, dann der Höflichkeitsgrad. Alternativ können Implementierungen eine Richtlinie haben, weniger höfliche Elemente zu löschen, z.B. löschen durchsetzungsfähige Elemente alle höflichen Elemente aus der Warteschlange.
5. Zeit hat den zweiten Vorrang: Priorisieren Sie Elemente mit demselben Höflichkeitsgrad nach dem Zeitpunkt des Ereignisses (frühere Ereignisse kommen zuerst). Präsentieren Sie Elemente desselben Höflichkeitsgrads in der Reihenfolge, in der sie aufgetreten sind.
6. Atomare (`aria-atomic="true"`) Bereiche mit mehreren Änderungen sollten nicht zweimal mit demselben Inhalt präsentiert werden. Wenn ein neues Ereignis für einen atomaren Bereich in die Warteschlange aufgenommen wird, entfernen Sie ein früheres Ereignis für denselben Bereich. Es ist wahrscheinlich wünschenswert, zumindest eine kleine Wartezeit zu haben, bevor Änderungen in atomaren Bereichen präsentiert werden, um zu vermeiden, den Bereich zweimal für zwei schnell aufeinanderfolgende Änderungen zu präsentieren.
7. Einbeziehen von Beschriftungen beim Präsentieren von Änderungen: Wenn die Änderung in etwas mit einer semantischen Beschriftung erfolgt, sprechen Sie die Beschriftung aus. Dies ist besonders wichtig für Änderungen in Datenzellen, bei denen die Spalten- und Zeilenköpfe wichtige kontextuelle Informationen liefern.

### Ideen für Einstellungen und Heuristiken

1. Ermöglichen Sie für Live-Änderungen eine unterschiedliche Stimme (im Text-zu-Sprache) oder andere variierende presentationelle Merkmale.
2. Wenn kein WAI-ARIA-Markup vorhanden ist, präsentieren Sie automatisch einige Änderungen, es sei denn, der Benutzer konfiguriert alle Live-Änderungen aus. Beispielsweise automatisch Änderungen aussprechen, die durch die eigenen Eingaben des Benutzers verursacht wurden, als Teil des Kontexts dieser Eingabe.
3. Erlauben Sie globale Einstellungen, um die Präsentation von Live-Änderungen auszuschalten, alle Live-Änderungen zu präsentieren, das Markup zu verwenden oder "smart" zu sein (Heuristiken verwenden).
