---
title: Tastaturzugänglichkeit
slug: Web/Accessibility/Guides/Understanding_WCAG/Keyboard
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

Um vollständig barrierefrei zu sein, muss eine Webseite von jemandem, der nur eine Tastatur verwendet, zugänglich sein und gesteuert werden können. Dies schließt Benutzer von Screenreadern ein, kann aber auch Benutzer umfassen, die Schwierigkeiten bei der Bedienung eines Zeigegeräts wie einer Maus oder eines Trackballs haben, deren Maus momentan nicht funktioniert oder die es vorziehen, wann immer möglich eine Tastatur für die Eingabe zu verwenden.

## Fokusfähige Elemente sollten interaktive Semantik haben

Wenn ein Element über die Tastatur fokussiert werden kann, sollte es interaktiv sein; das heißt, der Benutzer sollte in der Lage sein, etwas damit zu tun und eine Art von Veränderung herbeizuführen (zum Beispiel einen Link aktivieren oder eine Option ändern).

> [!NOTE]
> Eine wichtige Ausnahme von dieser Regel ist, wenn das Element `role="document"` auf sich angewendet hat, **innerhalb** eines interaktiven Kontexts (wie `role="application"`). In einem solchen Fall ist das Fokussieren des verschachtelten Dokuments die einzige Möglichkeit, Hilfstechnologie in einen nicht-interaktiven Zustand zurückzuversetzen (oft "Browse-Modus" genannt).

Die meisten interaktiven Elemente sind standardmäßig fokussierbar; Sie können ein Element fokussierbar machen, indem Sie ihm ein `tabindex=0` Attribut hinzufügen. Sie sollten jedoch nur `tabindex` hinzufügen, wenn Sie das Element auch interaktiv gemacht haben, beispielsweise durch das Definieren geeigneter Ereignishandler für Tastaturereignisse.

### Siehe auch

- [tabindex](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) globales HTML-Attribut
- Element: [keydown event](/de/docs/Web/API/Element/keydown_event)
- Element: [keyup event](/de/docs/Web/API/Element/keyup_event)

## Verwenden Sie das `tabindex`-Attribut nicht mit einem Wert größer als null

Das `tabindex`-Attribut gibt an, dass ein Element über die Tastatur fokussierbar ist. Ein Wert von null zeigt an, dass das Element Teil der Standardfokusreihenfolge ist, die auf der Reihenfolge der Elemente im HTML-Dokument basiert. Ein positiver Wert stellt das Element vor diejenigen in der Standardreihenfolge; Elemente mit positiven Werten werden in der Reihenfolge ihrer `tabindex`-Werte fokussiert (1, dann 2, dann 3, usw.).

Dies führt zu Verwirrung für Benutzer, die nur die Tastatur verwenden, wenn die Fokusreihenfolge von der logischen Reihenfolge der Seite abweicht. Eine bessere Strategie ist es, das HTML-Dokument so zu strukturieren, dass fokussierbare Elemente in einer logischen Reihenfolge angeordnet sind, ohne sie mit positiven `tabindex`-Werten neu anordnen zu müssen.

### Siehe auch

- [tabindex](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) globales HTML-Attribut
- [Das Verständnis der Fokusreihenfolge](https://www.w3.org/WAI/WCAG21/Understanding/focus-order.html)
- [Verwenden Sie kein tabindex größer als 0](https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html)

## Klickbare Elemente müssen fokussierbar sein und sollten interaktive Semantik haben

Wenn ein Element mit einem Zeigegerät, wie einer Maus, geklickt werden kann, sollte es auch über die Tastatur fokussierbar sein, und der Benutzer sollte in der Lage sein, durch Interaktion mit ihm etwas zu tun.

Ein Element ist klickbar, wenn ein `onclick`-Ereignishandler definiert ist. Sie können es fokussierbar machen, indem Sie ihm ein `tabindex=0` Attribut hinzufügen. Sie können es über die Tastatur bedienbar machen, indem Sie einen `onkeydown`-Ereignishandler definieren; in den meisten Fällen sollte die von dem Ereignishandler ausgeführte Aktion für beide Arten von Ereignissen dieselbe sein.

### Siehe auch

- [tabindex](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) globales HTML-Attribut
- Element: [keydown event](/de/docs/Web/API/Element/keydown_event)
- Element: [keyup event](/de/docs/Web/API/Element/keyup_event)

## Interaktive Elemente müssen mit einer Tastatur aktiviert werden können

Wenn der Benutzer mit einem Element per Berührung oder mit einem Zeigegerät interagieren kann, sollte das Element auch die Interaktion über die Tastatur unterstützen. Das heißt, wenn Sie Ereignishandler für Berührungs- oder Klickereignisse definiert haben, sollten Sie sie auch für Tastaturereignisse definieren. Die Ereignishandler für die Tastatur sollten effektiv dieselbe Interaktion ermöglichen wie die Berührungs- oder Klickhandler.

### Siehe auch

- Element: [keydown event](/de/docs/Web/API/Element/keydown_event)
- Element: [keyup event](/de/docs/Web/API/Element/keyup_event)

## Interaktive Elemente müssen fokussierbar sein

Wenn der Benutzer mit einem Element interagieren kann (zum Beispiel mit Berührung oder einem Zeigegerät), sollte es über die Tastatur fokussierbar sein. Sie können es fokussierbar machen, indem Sie ihm ein `tabindex=0` Attribut hinzufügen. Dadurch wird das Element in die Liste der Elemente aufgenommen, die durch Drücken der <kbd>Tab</kbd>-Taste fokussiert werden können, in der Reihenfolge solcher Elemente, wie im HTML-Dokument definiert.

### Siehe auch

- [tabindex](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) globales HTML-Attribut

## Fokussierbare Elemente müssen Fokus-Styling haben

Jedes Element, das per Tastaturfokus empfangen kann, sollte sichtbares Styling haben, das anzeigt, wann das Element fokussiert ist. Sie können dies mit den CSS-Pseudoklassen [`:focus`](/de/docs/Web/CSS/Reference/Selectors/:focus) und [`:focus-visible`](/de/docs/Web/CSS/Reference/Selectors/:focus-visible) tun.

Standardmäßig zu fokussierende Elemente wie Links und Eingabefelder erhalten vom Browser standardmäßig spezielles Styling, sodass Sie für solche Elemente möglicherweise kein Fokus-Styling angeben müssen, es sei denn, Sie möchten, dass das Fokus-Styling auffälliger ist.

Wenn Sie Ihre eigenen fokussierbaren Komponenten erstellen, stellen Sie sicher, dass Sie auch Fokus-Styling für diese definieren.

### Siehe auch

- [Verwendung von CSS zum Ändern der Darstellung eines UI-Komponenten, wenn sie den Fokus erhält](https://www.w3.org/WAI/WCAG21/Techniques/css/C15.html)
