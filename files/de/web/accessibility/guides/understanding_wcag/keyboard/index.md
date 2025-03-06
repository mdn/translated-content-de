---
title: Tastaturzugänglichkeit
slug: Web/Accessibility/Guides/Understanding_WCAG/Keyboard
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Um vollständig zugänglich zu sein, muss eine Webseite für Personen bedienbar sein, die nur eine Tastatur zur Steuerung und Bedienung nutzen. Dazu gehören Benutzer von Screenreadern, aber auch Personen, die Schwierigkeiten haben, ein Zeigegerät wie eine Maus oder einen Trackball zu bedienen, deren Maus momentan nicht funktioniert oder die es vorziehen, wann immer möglich eine Tastatur zur Eingabe zu verwenden.

## Fokussierbare Elemente sollten interaktive Semantik haben

Wenn ein Element mit der Tastatur fokussiert werden kann, sollte es interaktiv sein; das bedeutet, dass der Benutzer in der Lage sein sollte, etwas damit zu tun und eine Änderung irgendeiner Art zu bewirken (zum Beispiel einen Link zu aktivieren oder eine Option zu verändern).

> [!NOTE]
> Eine wichtige Ausnahme von dieser Regel ist, wenn das Element `role="document"` innerhalb eines interaktiven Kontextes (wie `role="application"`) erhält. In einem solchen Fall ist das Fokussieren des verschachtelten Dokuments der einzige Weg, um unterstützende Technologien in einen nicht-interaktiven Zustand zurückzuversetzen (oft "Browse-Modus" genannt).

Die meisten interaktiven Elemente sind standardmäßig fokussierbar; Sie können ein Element fokussierbar machen, indem Sie ihm einen `tabindex=0` Attributswert hinzufügen. Sie sollten `tabindex` jedoch nur hinzufügen, wenn Sie das Element ebenfalls interaktiv gemacht haben, zum Beispiel durch das Definieren geeigneter Ereignis-Handler für Tastaturereignisse.

### Siehe auch

- [tabindex](/de/docs/Web/HTML/Global_attributes/tabindex) globales HTML-Attribut
- Element: [keydown event](/de/docs/Web/API/Element/keydown_event)
- Element: [keyup event](/de/docs/Web/API/Element/keyup_event)

## Verwenden Sie das `tabindex`-Attribut nicht größer als null

Das `tabindex`-Attribut zeigt an, dass ein Element mit der Tastatur fokussierbar ist. Ein Wert von null zeigt an, dass das Element Teil der Standard-Fokusreihenfolge ist, die auf der Reihenfolge der Elemente im HTML-Dokument basiert. Ein positiver Wert setzt das Element vor solche in der Standard-Reihenfolge; Elemente mit positiven Werten werden in der Reihenfolge ihrer `tabindex`-Werte fokussiert (1, dann 2, dann 3, etc.).

Dies führt zu Verwirrung bei Benutzern, die nur die Tastatur verwenden, wenn die Fokusreihenfolge von der logischen Reihenfolge der Seite abweicht. Eine bessere Strategie besteht darin, das HTML-Dokument so zu strukturieren, dass fokussierbare Elemente in einer logischen Reihenfolge sind, ohne dass sie mit positiven `tabindex`-Werten neu geordnet werden müssen.

### Siehe auch

- [tabindex](/de/docs/Web/HTML/Global_attributes/tabindex) globales HTML-Attribut
- [Verständnis der Fokusreihenfolge](https://www.w3.org/WAI/WCAG21/Understanding/focus-order.html)
- [Verwenden Sie keinen Tabindex größer als 0](https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html)

## Klickbare Elemente müssen fokussierbar sein und interaktive Semantik haben

Wenn ein Element mit einem Zeigegerät, wie einer Maus, geklickt werden kann, sollte es auch mit der Tastatur fokussierbar sein, und der Benutzer sollte in der Lage sein, durch die Interaktion mit ihm etwas zu tun.

Ein Element ist klickbar, wenn es einen definierten `onclick`-Ereignishandler hat. Sie können es fokussierbar machen, indem Sie ihm einen `tabindex=0` Attributswert hinzufügen. Sie können es durch das Definieren eines `onkeydown`-Ereignishandlers mit der Tastatur bedienbar machen; in den meisten Fällen sollte die vom Ereignishandler durchgeführte Aktion für beide Arten von Ereignissen dieselbe sein.

### Siehe auch

- [tabindex](/de/docs/Web/HTML/Global_attributes/tabindex) globales HTML-Attribut
- Element: [keydown event](/de/docs/Web/API/Element/keydown_event)
- Element: [keyup event](/de/docs/Web/API/Element/keyup_event)

## Interaktive Elemente müssen mit der Tastatur aktiviert werden können

Wenn der Benutzer mit einem Element über Touch oder ein Zeigegerät interagieren kann, sollte das Element auch die Interaktion mit der Tastatur unterstützen. Das bedeutet, wenn Sie Ereignishandler für Touch- oder Klickereignisse definiert haben, sollten Sie diese ebenfalls für Tastaturereignisse definieren. Die Tastaturereignishandler sollten effektiv dieselbe Interaktion ermöglichen wie die Touch- oder Klickhandler.

### Siehe auch

- Element: [keydown event](/de/docs/Web/API/Element/keydown_event)
- Element: [keyup event](/de/docs/Web/API/Element/keyup_event)

## Interaktive Elemente müssen fokussierbar sein

Wenn der Benutzer mit einem Element interagieren kann (zum Beispiel mit Touch oder einem Zeigegerät), sollte es auch mit der Tastatur fokussierbar sein. Sie können es fokussierbar machen, indem Sie ihm einen `tabindex=0` Attributswert hinzufügen. Damit wird das Element zur Liste der Elemente hinzugefügt, die durch das Drücken der <kbd>Tab</kbd>-Taste fokussiert werden können, in der Reihenfolge dieser Elemente, wie sie im HTML-Dokument definiert ist.

### Siehe auch

- [tabindex](/de/docs/Web/HTML/Global_attributes/tabindex) globales HTML-Attribut

## Ein fokussierbares Element muss ein Fokus-Styling haben

Jedes Element, das den Tastatur-Fokus erhalten kann, sollte sichtbares Styling haben, das anzeigt, wann das Element fokussiert ist. Sie können dies mit den CSS-Pseudoklassen [`:focus`](/de/docs/Web/CSS/:focus) und [`:focus-visible`](/de/docs/Web/CSS/:focus-visible) tun.

Standardmäßig fokussierbare Elemente wie Links und Eingabefelder erhalten vom Browser ein spezielles Styling, sodass Sie möglicherweise kein Fokus-Styling für solche Elemente angeben müssen, es sei denn, Sie möchten, dass das Fokus-Styling auffälliger ist.

Wenn Sie eigene fokussierbare Komponenten erstellen, stellen Sie sicher, dass Sie auch ein Fokus-Styling für sie definieren.

### Siehe auch

- [Verwendung von CSS, um die Darstellung eines UI-Komponenten bei Fokus zu ändern](https://www.w3.org/WAI/WCAG21/Techniques/css/C15.html)
