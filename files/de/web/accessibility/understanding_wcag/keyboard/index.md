---
title: Tastatur
slug: Web/Accessibility/Understanding_WCAG/Keyboard
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Um vollständig barrierefrei zu sein, muss eine Webseite von jemandem bedient werden können, der nur eine Tastatur verwendet, um darauf zuzugreifen und sie zu steuern. Dies schließt Benutzer von Screenreadern ein, kann aber auch Benutzer umfassen, die Schwierigkeiten haben, ein Zeigegerät wie eine Maus oder Trackball zu bedienen, deren Maus momentan nicht funktioniert oder die es vorziehen, wann immer möglich, eine Tastatur für die Eingabe zu verwenden.

## Fokusierbare Elemente sollten interaktive Semantik haben

Wenn ein Element mit der Tastatur fokussiert werden kann, sollte es interaktiv sein; das heißt, der Benutzer sollte in der Lage sein, etwas damit zu tun und eine Art von Veränderung hervorzurufen (z. B. einen Link aktivieren oder eine Option ändern).

> [!NOTE]
> Eine wichtige Ausnahme zu dieser Regel ist, wenn das Element `role="document"` innerhalb eines interaktiven Kontexts (wie `role="application"`) zugewiesen hat. In einem solchen Fall ist das Fokussieren des verschachtelten Dokuments die einzige Möglichkeit, Hilfstechnologie in einen nicht-interaktiven Status zurückzuversetzen (oft als "Browsermodus" bezeichnet).

Die meisten interaktiven Elemente sind standardmäßig fokussierbar; Sie können ein Element fokussierbar machen, indem Sie ihm den Attributwert `tabindex=0` hinzufügen. Sie sollten jedoch nur `tabindex` hinzufügen, wenn Sie das Element auch interaktiv gemacht haben, zum Beispiel durch Definieren geeigneter Ereignis-Handler für Tastaturereignisse.

### Siehe auch

- [tabindex](/de/docs/Web/HTML/Global_attributes/tabindex) globales HTML-Attribut
- Element: [keydown event](/de/docs/Web/API/Element/keydown_event)
- Element: [keyup event](/de/docs/Web/API/Element/keyup_event)

## Vermeiden Sie die Verwendung von `tabindex`-Attributen größer als null

Das `tabindex`-Attribut zeigt an, dass ein Element mit der Tastatur fokussierbar ist. Ein Wert von null zeigt an, dass das Element Teil der standardmäßigen Fokussierreihenfolge ist, die auf der Anordnung der Elemente im HTML-Dokument basiert. Ein positiver Wert setzt das Element vor diejenigen in der Standardanordnung; Elemente mit positiven Werten werden in der Reihenfolge ihrer `tabindex`-Werte fokussiert (1, dann 2, dann 3, usw.).

Dies führt zu Verwirrung bei Benutzern, die nur die Tastatur verwenden, wenn die Fokussierreihenfolge von der logischen Reihenfolge der Seite abweicht. Eine bessere Strategie besteht darin, das HTML-Dokument so zu strukturieren, dass fokussierbare Elemente in einer logischen Reihenfolge angeordnet sind, ohne dass eine Neuanordnung mit positiven `tabindex`-Werten erforderlich ist.

### Siehe auch

- [tabindex](/de/docs/Web/HTML/Global_attributes/tabindex) globales HTML-Attribut
- [Understanding focus order](https://www.w3.org/WAI/WCAG21/Understanding/focus-order.html)
- [Don't use tabindex greater than 0](https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html)

## Anklickbare Elemente müssen fokussierbar sein und sollten interaktive Semantik haben

Wenn ein Element mit einem Zeigegerät wie einer Maus angeklickt werden kann, sollte es auch mit der Tastatur fokussierbar sein und der Benutzer sollte durch Interaktion etwas damit bewirken können.

Ein Element ist anklickbar, wenn es einen definierten `onclick`-Ereignis-Handler hat. Sie können es fokussierbar machen, indem Sie ihm den Attributwert `tabindex=0` hinzufügen. Sie können es mit der Tastatur bedienbar machen, indem Sie einen `onkeydown`-Ereignis-Handler definieren; in den meisten Fällen sollte die Aktion, die vom Ereignis-Handler ausgeführt wird, für beide Arten von Ereignissen identisch sein.

### Siehe auch

- [tabindex](/de/docs/Web/HTML/Global_attributes/tabindex) globales HTML-Attribut
- Element: [keydown event](/de/docs/Web/API/Element/keydown_event)
- Element: [keyup event](/de/docs/Web/API/Element/keyup_event)

## Interaktive Elemente müssen mit einer Tastatur aktiviert werden können

Wenn der Benutzer mit einem Element per Berührung oder Zeigegerät interagieren kann, sollte das Element auch die Interaktion mit der Tastatur unterstützen. Das heißt, wenn Sie Ereignis-Handler für Berührungs- oder Klickereignisse definiert haben, sollten Sie auch solche für Tastaturereignisse definieren. Die Tastaturereignis-Handler sollten im Wesentlichen die gleiche Interaktion ermöglichen wie die Berührungs- oder Klickroutinen.

### Siehe auch

- Element: [keydown event](/de/docs/Web/API/Element/keydown_event)
- Element: [keyup event](/de/docs/Web/API/Element/keyup_event)

## Interaktive Elemente müssen fokussierbar sein

Wenn der Benutzer mit einem Element (zum Beispiel durch Berührung oder ein Zeigegerät) interagieren kann, sollte es mit der Tastatur fokussierbar sein. Sie können es fokussierbar machen, indem Sie ihm den Attributwert `tabindex=0` hinzufügen. Damit wird das Element der Liste von Elementen hinzugefügt, die fokussiert werden können, indem die <kbd>Tab</kbd>-Taste gedrückt wird, in der Reihenfolge dieser Elemente, wie sie im HTML-Dokument definiert ist.

### Siehe auch

- [tabindex](/de/docs/Web/HTML/Global_attributes/tabindex) globales HTML-Attribut

## Fokussierbares Element muss Fokus-Styling haben

Jedes Element, das mit der Tastatur fokussiert werden kann, sollte ein sichtbares Styling haben, das anzeigt, wann das Element fokussiert ist. Sie können dies mit den CSS-Pseudoklassen [`:focus`](/de/docs/Web/CSS/:focus) und [`:focus-visible`](/de/docs/Web/CSS/:focus-visible) tun.

Standardmäßig erhalten fokussierbare Elemente wie Links und Eingabefelder eine spezielle Formatierung durch den Browser, sodass Sie für solche Elemente möglicherweise kein zusätzliches Fokus-Styling festlegen müssen, es sei denn, Sie möchten, dass das Fokus-Styling auffälliger ist.

Wenn Sie Ihre eigenen fokussierbaren Komponenten erstellen, stellen Sie sicher, dass Sie auch Fokus-Styling für diese definieren.

### Siehe auch

- [Using CSS to change the presentation of a UI component when it receives focus](https://www.w3.org/WAI/WCAG21/Techniques/css/C15.html)
