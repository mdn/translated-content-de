---
title: Keyboard
slug: Web/Accessibility/Understanding_WCAG/Keyboard
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Um vollständig barrierefrei zu sein, muss eine Webseite von jemandem bedient werden können, der nur eine Tastatur zur Steuerung nutzt. Dies umfasst Nutzer von Screenreadern, aber auch Personen, die Schwierigkeiten haben, ein Zeigegerät wie eine Maus oder einen Trackball zu bedienen, deren Maus momentan nicht funktioniert, oder die es bevorzugen, wann immer möglich, die Tastatur zur Eingabe zu nutzen.

## Fokussierbare Elemente sollten interaktive Semantik haben

Wenn ein Element mit der Tastatur fokussiert werden kann, sollte es interaktiv sein; das heißt, der Benutzer sollte damit etwas tun können, das eine Änderung bewirkt (zum Beispiel einen Link aktivieren oder eine Option ändern).

> [!NOTE]
> Eine wichtige Ausnahme von dieser Regel ist, wenn das Element `role="document"` innerhalb eines interaktiven Kontexts (wie `role="application"`) zugewiesen bekommen hat. In einem solchen Fall ist das Fokussieren des geschachtelten Dokuments der einzige Weg, um unterstützende Technologie in einen nicht-interaktiven Zustand zurückzuversetzen (oft als "Browse-Modus" bezeichnet).

Die meisten interaktiven Elemente sind standardmäßig fokussierbar; Sie können ein Element fokussierbar machen, indem Sie ihm ein `tabindex=0` Attribut hinzufügen. Sie sollten jedoch nur `tabindex` hinzufügen, wenn Sie das Element auch interaktiv gemacht haben, zum Beispiel durch das Definieren geeigneter Ereignis-Handler für Tastaturereignisse.

### Siehe auch

- [tabindex](/de/docs/Web/HTML/Global_attributes/tabindex) globales HTML-Attribut
- Element: [keydown event](/de/docs/Web/API/Element/keydown_event)
- Element: [keyup event](/de/docs/Web/API/Element/keyup_event)

## Vermeiden Sie die Verwendung des `tabindex`-Attributs größer als null

Das `tabindex`-Attribut gibt an, dass ein Element mit der Tastatur fokussierbar ist. Ein Wert von null zeigt an, dass das Element Teil der Standardfokusreihenfolge ist, die sich nach der Anordnung der Elemente im HTML-Dokument richtet. Ein positiver Wert setzt das Element vor jene in der Standardreihenfolge; Elemente mit positiven Werten werden in der Reihenfolge ihrer `tabindex`-Werte fokussiert (1, dann 2, dann 3, etc.).

Dies führt zu Verwirrung bei Nutzern, die nur die Tastatur verwenden, wenn die Fokusreihenfolge von der logischen Reihenfolge der Seite abweicht. Eine bessere Strategie ist es, das HTML-Dokument so zu strukturieren, dass fokussierbare Elemente in einer logischen Reihenfolge stehen, ohne dass eine Neuanordnung mit positiven `tabindex`-Werten nötig ist.

### Siehe auch

- [tabindex](/de/docs/Web/HTML/Global_attributes/tabindex) globales HTML-Attribut
- [Understanding focus order](https://www.w3.org/WAI/WCAG21/Understanding/focus-order.html)
- [Don't use tabindex greater than 0](https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html)

## Klickbare Elemente müssen fokussierbar und sollten interaktiv sein

Wenn ein Element mit einem Zeigegerät wie einer Maus angeklickt werden kann, sollte es auch mit der Tastatur fokussierbar sein, und der Benutzer sollte durch die Interaktion damit etwas tun können.

Ein Element ist klickbar, wenn es einen definierten `onclick`-Ereignis-Handler hat. Sie können es fokussierbar machen, indem Sie ihm ein `tabindex=0` Attribut hinzufügen. Sie können es mit der Tastatur bedienbar machen, indem Sie einen `onkeydown`-Ereignis-Handler definieren; in den meisten Fällen sollte die Aktion, die vom Ereignis-Handler ausgeführt wird, für beide Arten von Ereignissen gleich sein.

### Siehe auch

- [tabindex](/de/docs/Web/HTML/Global_attributes/tabindex) globales HTML-Attribut
- Element: [keydown event](/de/docs/Web/API/Element/keydown_event)
- Element: [keyup event](/de/docs/Web/API/Element/keyup_event)

## Interaktive Elemente müssen mit der Tastatur aktivierbar sein

Wenn der Benutzer mit einem Element über Berührung oder ein Zeigegerät interagieren kann, sollte das Element auch die Interaktion mit der Tastatur unterstützen. Das heißt, wenn Sie Ereignis-Handler für Berührungs- oder Klickereignisse definiert haben, sollten Sie diese auch für Tastaturereignisse definieren. Die Tastatur-Ereignis-Handler sollten im Wesentlichen dieselbe Interaktion wie die Berührungs- oder Klick-Handler ermöglichen.

### Siehe auch

- Element: [keydown event](/de/docs/Web/API/Element/keydown_event)
- Element: [keyup event](/de/docs/Web/API/Element/keyup_event)

## Interaktive Elemente müssen fokussierbar sein

Wenn der Benutzer mit einem Element (zum Beispiel über Berührung oder ein Zeigegerät) interagieren kann, sollte es mit der Tastatur fokussierbar sein. Sie können es fokussierbar machen, indem Sie ihm ein `tabindex=0` Attribut hinzufügen. Dadurch wird das Element der Liste der Elemente hinzugefügt, die durch Drücken der <kbd>Tab</kbd>-Taste in der im HTML-Dokument definierten Reihenfolge fokussiert werden können.

### Siehe auch

- [tabindex](/de/docs/Web/HTML/Global_attributes/tabindex) globales HTML-Attribut

## Fokussierbare Elemente müssen Stile für den Fokus haben

Jedes Element, das mit der Tastatur fokussiert werden kann, sollte sichtbare Stile haben, die anzeigen, wann das Element fokussiert ist. Sie können dies mit den CSS-Pseudoklassen [`:focus`](/de/docs/Web/CSS/:focus) und [`:focus-visible`](/de/docs/Web/CSS/:focus-visible) erreichen.

Standardmäßig fokussierbare Elemente wie Links und Eingabefelder erhalten vom Browser automatisch spezielle Stile, sodass Sie für solche Elemente möglicherweise keine Fokus-Stile festlegen müssen, es sei denn, Sie möchten, dass die Fokus-Stile auffälliger sind.

Wenn Sie eigene fokussierbare Komponenten erstellen, sollten Sie sicherstellen, dass Sie auch Fokus-Stile für sie definieren.

### Siehe auch

- [Using CSS to change the presentation of a UI component when it receives focus](https://www.w3.org/WAI/WCAG21/Techniques/css/C15.html)
