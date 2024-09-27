---
title: Keyboard
slug: Web/Accessibility/Understanding_WCAG/Keyboard
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Um vollständig barrierefrei zu sein, muss eine Webseite von jemandem, der nur eine Tastatur benutzt, zugänglich und steuerbar sein. Dies umfasst Benutzer von Bildschirmlesegeräten, aber kann auch Benutzer einschließen, die Schwierigkeiten haben, ein Zeigegerät wie eine Maus oder eine Trackball zu bedienen, deren Maus derzeit nicht funktioniert oder die lieber eine Tastatur für die Eingabe verwenden, wann immer dies möglich ist.

## Fokusierbare Elemente sollten interaktive Semantik haben

Wenn ein Element über die Tastatur fokussierbar ist, sollte es interaktiv sein; das heißt, der Benutzer sollte in der Lage sein, etwas damit zu tun und irgendeine Art von Änderung herbeizuführen (zum Beispiel einen Link zu aktivieren oder eine Option zu ändern).

> [!NOTE]
> Eine wichtige Ausnahme von dieser Regel ist, wenn das Element das `role="document"` in einem interaktiven Kontext (wie `role="application"`) hat. In einem solchen Fall ist das Fokussieren des eingebetteten Dokuments der einzige Weg, um unterstützende Technologien in einen nicht-interaktiven Zustand zurückzuführen (oft als "Browse-Modus" bezeichnet).

Die meisten interaktiven Elemente sind standardmäßig fokussierbar; Sie können ein Element fokussierbar machen, indem Sie ihm einen `tabindex=0` Attributwert hinzufügen. Sie sollten jedoch `tabindex` nur hinzufügen, wenn Sie das Element auch interaktiv gemacht haben, beispielsweise durch das Definieren geeigneter Event-Handler für Tastaturereignisse.

### Siehe auch

- [tabindex](/de/docs/Web/HTML/Global_attributes/tabindex) globales HTML-Attribut
- Element: [keydown event](/de/docs/Web/API/Element/keydown_event)
- Element: [keyup event](/de/docs/Web/API/Element/keyup_event)

## Vermeiden Sie die Verwendung von `tabindex` Attributen größer als Null

Das `tabindex` Attribut zeigt an, dass ein Element über die Tastatur fokussierbar ist. Ein Wert von Null bedeutet, dass das Element Teil der Standard-Fokusreihenfolge ist, die auf der Reihenfolge der Elemente im HTML-Dokument basiert. Ein positiver Wert setzt das Element vor diejenigen in der Standardreihenfolge; Elemente mit positiven Werten werden in der Reihenfolge ihrer `tabindex` Werte fokussiert (1, dann 2, dann 3, usw.).

Dies führt zu Verwirrung für Benutzer, die nur die Tastatur verwenden, wenn sich die Fokusreihenfolge von der logischen Reihenfolge der Seite unterscheidet. Eine bessere Strategie ist es, das HTML-Dokument so zu strukturieren, dass fokussierbare Elemente in einer logischen Reihenfolge stehen, ohne dass es notwendig ist, sie mit positiven `tabindex` Werten neu zu ordnen.

### Siehe auch

- [tabindex](/de/docs/Web/HTML/Global_attributes/tabindex) globales HTML-Attribut
- [Verständnis der Fokusreihenfolge](https://www.w3.org/WAI/WCAG21/Understanding/focus-order.html)
- [Verwenden Sie keinen Tabindex größer als 0](https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html)

## Anklickbare Elemente müssen fokussierbar und sollten interaktive Semantik haben

Wenn ein Element mit einem Zeigegerät, wie einer Maus, angeklickt werden kann, sollte es auch über die Tastatur fokussierbar sein, und der Benutzer sollte durch Interaktion etwas tun können.

Ein Element ist anklickbar, wenn es einen `onclick` Event-Handler definiert hat. Sie können es fokussierbar machen, indem Sie ihm einen `tabindex=0` Attributwert hinzufügen. Sie können es über die Tastatur bedienbar machen, indem Sie einen `onkeydown` Event-Handler definieren; in den meisten Fällen sollte die vom Event-Handler ausgeführte Aktion für beide Typen von Ereignissen dieselbe sein.

### Siehe auch

- [tabindex](/de/docs/Web/HTML/Global_attributes/tabindex) globales HTML-Attribut
- Element: [keydown event](/de/docs/Web/API/Element/keydown_event)
- Element: [keyup event](/de/docs/Web/API/Element/keyup_event)

## Interaktive Elemente müssen mit einer Tastatur aktiviert werden können

Wenn der Benutzer mit einem Element durch Berührung oder ein Zeigegerät interagieren kann, sollte das Element auch die Interaktion über die Tastatur unterstützen. Das heißt, wenn Sie Event-Handler für Touch- oder Klickevents definiert haben, sollten Sie diese auch für Tastaturereignisse definieren. Die Event-Handler für Tastaturereignisse sollten im Wesentlichen dieselbe Interaktion ermöglichen wie die Touch- oder Klick-Handler.

### Siehe auch

- Element: [keydown event](/de/docs/Web/API/Element/keydown_event)
- Element: [keyup event](/de/docs/Web/API/Element/keyup_event)

## Interaktive Elemente müssen fokussierbar sein

Wenn der Benutzer mit einem Element interagieren kann (zum Beispiel durch Berührung oder ein Zeigegerät), sollte es auch über die Tastatur fokussierbar sein. Sie können es fokussierbar machen, indem Sie ihm einen `tabindex=0` Attributwert hinzufügen. Dadurch wird das Element der Liste der Elemente hinzugefügt, die durch Drücken der <kbd>Tab</kbd>-Taste in der im HTML-Dokument definierten Reihenfolge fokussiert werden können.

### Siehe auch

- [tabindex](/de/docs/Web/HTML/Global_attributes/tabindex) globales HTML-Attribut

## Fokussierbares Element muss Fokus-Styling haben

Jedes Element, das über die Tastaturfokussierung empfangen kann, sollte eine sichtbare Gestaltung haben, die anzeigt, wann das Element fokussiert ist. Sie können dies mit den CSS-Pseudoklassen [`:focus`](/de/docs/Web/CSS/:focus) und [`:focus-visible`](/de/docs/Web/CSS/:focus-visible) tun.

Standardmäßig fokussierbare Elemente wie Links und Eingabefelder erhalten vom Browser besondere Styling, daher müssen Sie möglicherweise kein Fokus-Styling für solche Elemente angeben, es sei denn, Sie möchten, dass das Fokus-Styling deutlicher erkennbar ist.

Wenn Sie eigene fokussierbare Komponenten erstellen, stellen Sie sicher, dass Sie auch Fokus-Styling für diese definieren.

### Siehe auch

- [Verwendung von CSS zur Änderung der Präsentation einer UI-Komponente, wenn sie den Fokus erhält](https://www.w3.org/WAI/WCAG21/Techniques/css/C15.html)
