---
title: HTML Attribut `inert`
short-title: inert
slug: Web/HTML/Reference/Global_attributes/inert
l10n:
  sourceCommit: 546838eed3bce965975e8c85f193dbd2a241db7c
---

Das **`inert`** [globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) ist ein Boolean-Attribut, das anzeigt, dass das Element und alle seine direkten Nachkommen im Fluss _inert_ werden. Das `inert`-Attribut kann zu Inhaltsbereichen hinzugefügt werden, die nicht interaktiv sein sollen. Wenn ein Element inert ist, sind es auch all seine Nachkommen, einschließlich normalerweise interaktiver Elemente wie Links, Schaltflächen und Formularelemente, da sie keinen Fokus erhalten oder angeklickt werden können. Das `inert`-Attribut kann auch zu Elementen hinzugefügt werden, die außerhalb des Bildschirms oder versteckt sein sollen. Ein inertes Element sowie seine Nachkommen werden aus der Tab-Reihenfolge und dem Accessibility Tree entfernt.

Modale {{htmlelement("dialog")}}e, die mit [`showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) erzeugt werden, entkommen der Inertheit, das heißt, sie erben nicht die Inertheit von ihren Vorfahren, sondern können nur inerte gemacht werden, indem das `inert`-Attribut ausdrücklich auf sie selbst gesetzt wird. Kein anderes Element kann der Inertheit entkommen.

> [!NOTE]
> Obwohl `inert` ein globales Attribut ist und auf jedes Element angewendet werden kann, wird es im Allgemeinen für Inhaltsabschnitte verwendet. Um einzelne Steuerelemente "inert" zu machen, sollten Sie stattdessen das [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled)-Attribut zusammen mit den CSS-[`:disabled`](/de/docs/Web/CSS/:disabled)-Stilen verwenden.

Speziell führt `inert` zu Folgendem:

- Verhindert, dass das [`click`](/de/docs/Web/API/Element/click_event)-Ereignis ausgelöst wird, wenn der Benutzer auf das Element klickt.
- Verhindert, dass das [`focus`](/de/docs/Web/API/Element/focus_event)-Ereignis ausgelöst wird, indem verhindert wird, dass das Element den Fokus erhält.
- Verhindert, dass Inhalte des Elements während der Verwendung der Suchfunktion des Browsers gefunden/übereinstimmt werden.
- Verhindert, dass Benutzer Text innerhalb des Elements auswählen können — ähnlich wie bei der Verwendung der CSS-Eigenschaft {{cssxref("user-select")}}, um Textauswahl zu deaktivieren.
- Verhindert, dass Benutzer jegliche Inhalte des Elements bearbeiten, die ansonsten bearbeitbar sind.
- Versteckt das Element und seinen Inhalt vor unterstützenden Technologien, indem sie aus dem Accessibility Tree ausgeschlossen werden.

## Barrierefreiheitsbedenken

Verwenden Sie sorgsame Überlegungen zur Barrierefreiheit, wenn Sie das `inert`-Attribut anwenden. Standardmäßig gibt es keine visuelle Möglichkeit, festzustellen, ob ein Element oder sein Unterbaum inert ist oder nicht. Als Webentwickler ist es Ihre Verantwortung, die aktiven und inerten Teile des Inhalts deutlich zu kennzeichnen.

Denken Sie daran, dass Sie während Sie visuelle und non-visuelle Hinweise über die Inertheit von Inhalten bereitstellen, das visuelle Sichtfeld möglicherweise nur Teile des Inhalts anzeigen kann. Benutzer können in einen kleinen Abschnitt des Inhalts hineingezoomt sein oder den Inhalt überhaupt nicht sehen können. Inerte Abschnitte, die nicht offensichtlich als inerte erkennbar sind, können zu Frustration und schlechter Benutzererfahrung führen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML-Element {{HTMLElement("dialog")}}
- [`HTMLElement.inert`](/de/docs/Web/API/HTMLElement/inert) HTML DOM-Eigenschaft
- [Einführung in inert](https://web.dev/articles/inert)
- [Das "inert"-Attribut kommt endlich ins Web](https://www.stefanjudis.com/blog/the-inert-attribute-is-finally-coming-to-the-web/)
