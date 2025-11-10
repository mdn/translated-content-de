---
title: Tastaturzugänglichkeit
slug: Web/Accessibility/Guides/Understanding_WCAG/Keyboard
l10n:
  sourceCommit: 4cb9d89a204a9532370693b982e8a3b274a874b1
---

Um vollständig barrierefrei zu sein, muss eine Webseite von einer Person, die ausschließlich eine Tastatur zur Bedienung und Kontrolle nutzt, bedienbar sein. Dies schließt Benutzer von Screenreadern ein, aber auch Benutzer, die Schwierigkeiten haben, ein Zeigegerät wie eine Maus oder Trackball zu bedienen, deren Maus momentan nicht funktioniert oder die es bevorzugen, wann immer möglich, eine Tastatur für die Eingabe zu verwenden.

## Fokusierbare Elemente sollten interaktive Semantik haben

Wenn ein Element über die Tastatur fokussierbar ist, dann sollte es interaktiv sein; das heißt, der Benutzer sollte etwas damit tun können und eine Art von Veränderung hervorrufen (zum Beispiel einen Link aktivieren oder eine Option ändern).

> [!NOTE]
> Eine wichtige Ausnahme von dieser Regel ist, wenn das Element `role="document"` **innerhalb** eines interaktiven Kontexts (wie z. B. `role="application"`) angewendet hat. In einem solchen Fall ist es der einzige Weg, assistive Technologien zurück in einen nicht-interaktiven Zustand zu versetzen, das sogenannte "Browse-Modus".

Die meisten interaktiven Elemente sind standardmäßig fokussierbar; Sie können ein Element fokussierbar machen, indem Sie ihm ein `tabindex=0` Attribut hinzufügen. Allerdings sollten Sie `tabindex` nur hinzufügen, wenn Sie das Element auch interaktiv gemacht haben, zum Beispiel durch die Definition geeigneter Ereignisbehandler für Tastaturereignisse.

### Siehe auch

- [tabindex](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) globales HTML-Attribut
- Element: [keydown event](/de/docs/Web/API/Element/keydown_event)
- Element: [keyup event](/de/docs/Web/API/Element/keyup_event)

## Vermeiden Sie das Attribut `tabindex` größer als null zu verwenden

Das Attribut `tabindex` zeigt an, dass ein Element über die Tastatur fokussierbar ist. Ein Wert von null zeigt an, dass das Element Teil der Standardfokusreihenfolge ist, die auf der Anordnung der Elemente im HTML-Dokument basiert. Ein positiver Wert setzt das Element vor diejenigen in der Standardanordnung; Elemente mit positiven Werten werden in der Reihenfolge ihrer `tabindex`-Werte fokussiert (1, dann 2, dann 3, usw.).

Dies sorgt für Verwirrung bei Nutzern, die ausschließlich die Tastatur verwenden, wenn sich die Fokusreihenfolge von der logischen Reihenfolge der Seite unterscheidet. Eine bessere Strategie ist es, das HTML-Dokument so zu strukturieren, dass fokussierbare Elemente in einer logischen Reihenfolge sind, ohne dass sie mit positiven `tabindex`-Werten neu geordnet werden müssen.

### Siehe auch

- [tabindex](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) globales HTML-Attribut
- [Das Verständnis der Fokusreihenfolge](https://www.w3.org/WAI/WCAG21/Understanding/focus-order.html)
- [Verwenden Sie `tabindex` nicht größer als 0](https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html)

## Klickbare Elemente müssen fokussierbar und sollten interaktive Semantik haben

Wenn ein Element mit einem Zeigegerät, wie einer Maus, geklickt werden kann, dann sollte es auch über die Tastatur fokussierbar sein, und der Benutzer sollte in der Lage sein, durch Interaktion mit ihm etwas zu tun.

Ein Element ist klickbar, wenn es einen `onclick`-Ereignisbehandler definiert hat. Sie können es fokussierbar machen, indem Sie ihm ein `tabindex=0` Attribut hinzufügen. Sie können es mit der Tastatur bedienbar machen, indem Sie einen `onkeydown`-Ereignisbehandler definieren; in den meisten Fällen sollte die vom Ereignisbehandler durchgeführte Aktion für beide Arten von Ereignissen dieselbe sein.

### Siehe auch

- [tabindex](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) globales HTML-Attribut
- Element: [keydown event](/de/docs/Web/API/Element/keydown_event)
- Element: [keyup event](/de/docs/Web/API/Element/keyup_event)

## Interaktive Elemente müssen mit der Tastatur aktiviert werden können

Wenn der Benutzer mit einem Element durch Berührung oder ein Zeigegerät interagieren kann, dann sollte das Element auch die Interaktion mit der Tastatur unterstützen. Das heißt, wenn Sie Ereignisbehandler für Berührungs- oder Klickevents definiert haben, sollten Sie sie auch für Tastaturereignisse definieren. Die Tastatur-Ereignisbehandler sollten effektive dieselbe Interaktion ermöglichen wie die Berührungs- oder Klickereignisbehandler.

### Siehe auch

- Element: [keydown event](/de/docs/Web/API/Element/keydown_event)
- Element: [keyup event](/de/docs/Web/API/Element/keyup_event)

## Interaktive Elemente müssen fokussierbar sein

Wenn der Benutzer mit einem Element interagieren kann (z. B. durch Berührung oder ein Zeigegerät), dann sollte es über die Tastatur fokussierbar sein. Sie können es fokussierbar machen, indem Sie ihm ein `tabindex=0` Attribut hinzufügen. Das wird das Element zur Liste der Elemente hinzufügen, die durch das Drücken der Taste <kbd>Tab</kbd> fokussiert werden können, in der Reihenfolge der solchen Elemente, wie sie im HTML-Dokument definiert sind.

### Siehe auch

- [tabindex](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) globales HTML-Attribut

## Fokussierbares Element muss Fokus-Styling haben

Jedes Element, das vom Tastaturfokus erreicht werden kann, sollte ein sichtbares Styling haben, das anzeigt, wenn das Element fokussiert ist. Sie können dies mit den [`:focus`](/de/docs/Web/CSS/Reference/Selectors/:focus) und [`:focus-visible`](/de/docs/Web/CSS/Reference/Selectors/:focus-visible) CSS-Pseudoklassen tun.

Standardmäßig erhalten fokussierbare Elemente wie Links und Eingabefelder von den Browsern ein spezielles Styling, sodass Sie für solche Elemente möglicherweise kein Fokus-Styling angeben müssen, es sei denn, Sie möchten ein auffälligeres Fokus-Styling.

Wenn Sie Ihre eigenen fokussierbaren Komponenten erstellen, stellen Sie sicher, dass Sie auch das Fokus-Styling dafür definieren.

### Siehe auch

- [Verwendung von CSS zur Änderung der Darstellung einer UI-Komponente, wenn sie den Fokus erhält](https://www.w3.org/WAI/WCAG21/Techniques/css/C15.html)
