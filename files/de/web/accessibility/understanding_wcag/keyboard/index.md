---
title: Tastatur
slug: Web/Accessibility/Understanding_WCAG/Keyboard
l10n:
  sourceCommit: 5ef2a133a42cf14c0a6b486d442dfa3ece77f60e
---

{{AccessibilitySidebar}}

Um vollständig barrierefrei zu sein, muss eine Webseite von einer Person nur mit einer Tastatur bedient werden können, um darauf zuzugreifen und sie zu steuern. Dies umfasst Benutzer von Bildschirmlesegeräten, aber auch Benutzer, die Schwierigkeiten beim Bedienen eines Zeigegeräts wie einer Maus oder eines Trackballs haben, oder deren Maus gerade nicht funktioniert, oder die wann immer möglich eine Tastatur zur Eingabe bevorzugen.

## Fokusfähige Elemente sollten interaktive Semantik haben

Wenn ein Element mit der Tastatur fokussiert werden kann, sollte es interaktiv sein; das heißt, der Benutzer sollte in der Lage sein, damit eine Aktion auszuführen und eine Art von Änderung zu bewirken (zum Beispiel einen Link aktivieren oder eine Option ändern).

> [!NOTE]
> Eine wichtige Ausnahme von dieser Regel ist, wenn dem Element in einem interaktiven Kontext (wie `role="application"`) `role="document"` zugewiesen ist. In einem solchen Fall ist das Fokussieren des verschachtelten Dokuments die einzige Möglichkeit, Hilfstechnologien in einen nicht-interaktiven Zustand (oft als "Browse-Modus" bezeichnet) zurückzuversetzen.

Die meisten interaktiven Elemente sind standardmäßig fokussierbar; Sie können ein Element fokussierbar machen, indem Sie ihm einen `tabindex=0` Attributwert hinzufügen. Sie sollten jedoch `tabindex` nur hinzufügen, wenn Sie das Element auch interaktiv gemacht haben, beispielsweise indem Sie geeignete Ereignisbehandler für Tastaturereignisse definiert haben.

### Siehe auch

- [tabindex](/de/docs/Web/HTML/Global_attributes/tabindex) globales HTML-Attribut
- Element: [keydown event](/de/docs/Web/API/Element/keydown_event)
- Element: [keyup event](/de/docs/Web/API/Element/keyup_event)

## Vermeiden Sie die Verwendung des `tabindex`-Attributs größer als null

Das `tabindex`-Attribut gibt an, dass ein Element mit der Tastatur fokussierbar ist. Ein Wert von null gibt an, dass das Element Teil der Standard-Fokusreihenfolge ist, die auf der Reihenfolge der Elemente im HTML-Dokument basiert. Ein positiver Wert gibt dem Element Vorrang vor denen in der Standard-Reihenfolge; Elemente mit positiven Werten werden in der Reihenfolge ihrer `tabindex`-Werte fokussiert (1, dann 2, dann 3, usw.).

Dies führt zu Verwirrung für Benutzer, die nur die Tastatur verwenden, wenn die Fokusreihenfolge von der logischen Reihenfolge der Seite abweicht. Eine bessere Strategie besteht darin, das HTML-Dokument so zu strukturieren, dass fokussierbare Elemente in logischer Reihenfolge stehen, ohne dass sie mit positiven `tabindex`-Werten umsortiert werden müssen.

### Siehe auch

- [tabindex](/de/docs/Web/HTML/Global_attributes/tabindex) globales HTML-Attribut
- [Understanding focus order](https://www.w3.org/WAI/WCAG21/Understanding/focus-order.html)
- [Don't use tabindex greater than 0](https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html)

## Klickbare Elemente müssen fokussierbar sein und sollten interaktive Semantik haben

Wenn ein Element mit einem Zeigegerät wie einer Maus angeklickt werden kann, sollte es auch mit der Tastatur fokussierbar sein, und der Benutzer sollte durch Interaktion damit etwas tun können.

Ein Element ist klickbar, wenn es einen definierten `onclick`-Ereignisbehandler hat. Sie können es fokussierbar machen, indem Sie ihm einen `tabindex=0` Attributwert hinzufügen. Sie können es mit der Tastatur bedienbar machen, indem Sie einen `onkeydown`-Ereignisbehandler definieren; in den meisten Fällen sollte die vom Ereignisbehandler ausgeführte Aktion für beide Ereignisarten dieselbe sein.

### Siehe auch

- [tabindex](/de/docs/Web/HTML/Global_attributes/tabindex) globales HTML-Attribut
- Element: [keydown event](/de/docs/Web/API/Element/keydown_event)
- Element: [keyup event](/de/docs/Web/API/Element/keyup_event)

## Interaktive Elemente müssen mit einer Tastatur aktiviert werden können

Wenn der Benutzer mit einem Element per Touch oder einem Zeigegerät interagieren kann, sollte das Element auch die Interaktion mit der Tastatur unterstützen. Das heißt, wenn Sie Ereignisbehandler für Touch- oder Klick-Ereignisse definiert haben, sollten Sie diese auch für Tastaturereignisse definieren. Die Tastatur-Ereignisbehandler sollten effektiv dieselbe Interaktion ermöglichen wie die Touch- oder Klick-Ereignisbehandler.

### Siehe auch

- Element: [keydown event](/de/docs/Web/API/Element/keydown_event)
- Element: [keyup event](/de/docs/Web/API/Element/keyup_event)

## Interaktive Elemente müssen fokussierbar sein

Wenn der Benutzer mit einem Element interagieren kann (zum Beispiel mit Touch oder einem Zeigegerät), sollte es mit der Tastatur fokussierbar sein. Sie können es fokussierbar machen, indem Sie ihm einen `tabindex=0` Attributwert hinzufügen. Dadurch wird das Element zur Liste der Elemente hinzugefügt, die mit der <kbd>Tab</kbd>-Taste fokussiert werden können, in der Reihenfolge dieser Elemente, wie im HTML-Dokument definiert.

### Siehe auch

- [tabindex](/de/docs/Web/HTML/Global_attributes/tabindex) globales HTML-Attribut

## Fokussierbares Element muss Fokus-Styling haben

Jedes Element, das mit der Tastatur fokussiert werden kann, sollte ein sichtbares Styling haben, das anzeigt, wann das Element fokussiert ist. Sie können dies mit den CSS-Pseudoklassen [`:focus`](/de/docs/Web/CSS/:focus) und [`:focus-visible`](/de/docs/Web/CSS/:focus-visible) tun.

Standardmäßig fokussierbare Elemente wie Links und Eingabefelder erhalten standardmäßig ein spezielles Styling durch den Browser, sodass Sie für solche Elemente möglicherweise kein Fokus-Styling angeben müssen, es sei denn, Sie möchten, dass das Fokus-Styling auffälliger ist.

Wenn Sie Ihre eigenen fokussierbaren Komponenten erstellen, stellen Sie sicher, dass Sie auch Fokus-Styling für sie definieren.

### Siehe auch

- [Using CSS to change the presentation of a UI component when it receives focus](https://www.w3.org/WAI/WCAG21/Techniques/css/C15.html)
