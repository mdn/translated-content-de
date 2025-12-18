---
title: Tastaturzugänglich
slug: Web/Accessibility/Guides/Understanding_WCAG/Keyboard
l10n:
  sourceCommit: 7ba6358a0ff684cc67c60b76d6d972722bbf0d18
---

Um vollständig barrierefrei zu sein, muss eine Webseite für jemanden bedienbar sein, der ausschließlich eine Tastatur zur Steuerung und Navigation verwendet. Dies schließt Nutzer von Bildschirmlesegeräten ein, kann aber auch Nutzer betreffen, die Schwierigkeiten beim Bedienen eines Zeigegeräts wie einer Maus oder einem Trackball haben, deren Maus momentan nicht funktioniert, oder die es bevorzugen, wann immer möglich eine Tastatur zur Eingabe zu verwenden.

## Fokusierbare Elemente sollten interaktive Semantik haben

Wenn ein Element mit der Tastatur fokussiert werden kann, sollte es interaktiv sein; das heißt, der Nutzer sollte in der Lage sein, etwas damit zu tun und eine Art von Änderung hervorzurufen (z.B. einen Link aktivieren oder eine Option ändern).

> [!NOTE]
> Eine wichtige Ausnahme von dieser Regel ist, wenn das Element `role="document"` innerhalb eines interaktiven Kontextes (wie `role="application"`) hat. In einem solchen Fall ist das Fokussieren des verschachtelten Dokuments der einzige Weg, um Hilfstechnologie in einen nicht-interaktiven Zustand zurückzuversetzen (oft als "Browse-Modus" bezeichnet).

Die meisten interaktiven Elemente sind standardmäßig fokussierbar; Sie können ein Element fokussierbar machen, indem Sie ihm einen `tabindex=0` Attributwert hinzufügen. Sie sollten jedoch `tabindex` nur hinzufügen, wenn Sie das Element auch durch beispielsweise das Definieren geeigneter Ereignis-Handler für Tastaturereignisse interaktiv gemacht haben.

### Siehe auch

- [tabindex](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) globales HTML-Attribut
- Element: [keydown event](/de/docs/Web/API/Element/keydown_event)
- Element: [keyup event](/de/docs/Web/API/Element/keyup_event)

## Vermeiden Sie die Verwendung des `tabindex`-Attributs größer als null

Das `tabindex`-Attribut gibt an, dass ein Element mittels der Tastatur fokussierbar ist. Ein Wert von null zeigt, dass das Element Teil der Standard-Fokusreihenfolge ist, die auf der Anordnung der Elemente im HTML-Dokument basiert. Ein positiver Wert setzt das Element vor diejenigen in der Standardreihenfolge; Elemente mit positiven Werten werden in der Reihenfolge ihrer `tabindex`-Werte fokussiert (1, dann 2, dann 3, etc.).

Dies führt zu Verwirrung für Nur-Tastatur-Nutzer, wenn sich die Fokusreihenfolge von der logischen Reihenfolge der Seite unterscheidet. Eine bessere Strategie ist es, das HTML-Dokument so zu strukturieren, dass fokussierbare Elemente in einer logischen Reihenfolge stehen, ohne dass eine Neuordnung mit positiven `tabindex`-Werten erforderlich ist.

### Siehe auch

- [tabindex](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) globales HTML-Attribut
- [Verstehen der Fokusreihenfolge](https://www.w3.org/WAI/WCAG21/Understanding/focus-order.html)
- [Verwenden Sie kein tabindex größer als 0](https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html)

## Klickbare Elemente müssen fokussierbar und sollten interaktive Semantik haben

Wenn ein Element mit einem Zeigegerät, wie einer Maus, geklickt werden kann, sollte es auch mit der Tastatur fokussierbar sein und der Nutzer sollte durch Interaktion damit etwas tun können.

Ein Element ist klickbar, wenn es einen `onclick`-Ereignis-Handler definiert hat. Sie können es fokussierbar machen, indem Sie ihm einen `tabindex=0` Attributwert hinzufügen. Sie können es mit der Tastatur bedienbar machen, indem Sie einen `onkeydown`-Ereignis-Handler definieren; in den meisten Fällen sollte die durch den Ereignis-Handler ausgelöste Aktion für beide Arten von Ereignissen dieselbe sein.

### Siehe auch

- [tabindex](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) globales HTML-Attribut
- Element: [keydown event](/de/docs/Web/API/Element/keydown_event)
- Element: [keyup event](/de/docs/Web/API/Element/keyup_event)

## Interaktive Elemente müssen mit einer Tastatur aktiviert werden können

Wenn der Nutzer mit einem Element durch Berühren oder mit einem Zeigegerät interagieren kann, sollte das Element auch die Interaktion per Tastatur unterstützen. Das heißt, wenn Sie Ereignis-Handler für Berührungs- oder Klickereignisse definiert haben, sollten Sie diese auch für Tastaturereignisse definieren. Die Ereignis-Handler für die Tastatur sollten effektiv dieselbe Interaktion ermöglichen wie die Berührungs- oder Klickereignis-Handler.

### Siehe auch

- Element: [keydown event](/de/docs/Web/API/Element/keydown_event)
- Element: [keyup event](/de/docs/Web/API/Element/keyup_event)

## Interaktive Elemente müssen fokussierbar sein

Wenn der Nutzer mit einem Element interagieren kann (zum Beispiel per Berührung oder Zeigegerät), sollte es mit der Tastatur fokussierbar sein. Sie können es fokussierbar machen, indem Sie ihm einen `tabindex=0` Attributwert hinzufügen. Dadurch wird das Element in die Liste von Elementen aufgenommen, die durch Drücken der <kbd>Tab</kbd>-Taste fokussiert werden können, in der Reihenfolge, wie sie im HTML-Dokument definiert ist.

### Siehe auch

- [tabindex](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) globales HTML-Attribut

## Fokussierbares Element muss Fokus-Styling haben

Jedes Element, das Tastaturfokus erhalten kann, sollte ein sichtbares Styling haben, das anzeigt, wann das Element fokussiert ist. Dies können Sie mit den CSS-Pseudoklassen {{cssxref(":focus")}} und {{cssxref(":focus-visible")}} erreichen.

Standardfokussierbare Elemente wie Links und Eingabefelder haben von Haus aus spezielles Styling durch den Browser, sodass Sie eventuell kein separates Fokus-Styling für solche Elemente spezifizieren müssen, es sei denn, Sie möchten, dass das Fokus-Styling markanter ist.

Wenn Sie Ihre eigenen fokussierbaren Komponenten erstellen, stellen Sie sicher, dass Sie auch Fokus-Styling dafür definieren.

### Siehe auch

- [Mit CSS die Darstellung einer UI-Komponente ändern, wenn sie fokussiert wird](https://www.w3.org/WAI/WCAG21/Techniques/css/C15.html)
