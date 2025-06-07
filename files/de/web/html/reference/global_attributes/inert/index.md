---
title: HTML inert globales Attribut
short-title: inert
slug: Web/HTML/Reference/Global_attributes/inert
l10n:
  sourceCommit: 7885271e36e9d2744296c01f400653f63caa6f75
---

{{HTMLSidebar("Global_attributes")}}

Das **`inert`** [globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) ist ein Boolesches Attribut, das angibt, dass das Element und alle seine direkten Nachfahren _inert_ werden. Durch Modal-{{htmlelement("dialog")}}e, die mit [`showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) erzeugt werden, wird die Inertheit umgangen, was bedeutet, dass sie die Inertheit nicht von ihren Vorfahren erben, sondern nur inaktiv gemacht werden können, indem das `inert`-Attribut explizit auf sie selbst gesetzt wird.

Konkret bewirkt `inert` Folgendes:

- Verhindert, dass das [`click`](/de/docs/Web/API/Element/click_event)-Ereignis ausgelöst wird, wenn der Benutzer auf das Element klickt.
- Verhindert, dass das [`focus`](/de/docs/Web/API/Element/focus_event)-Ereignis ausgelöst wird, indem verhindert wird, dass das Element den Fokus erhält.
- Verhindert, dass der Inhalt des Elements während der Verwendung der Suchfunktion im Browser gefunden oder abgeglichen wird.
- Verhindert, dass Benutzer Text innerhalb des Elements auswählen können – ähnlich der Verwendung der CSS-Eigenschaft {{cssxref("user-select")}}, um die Textauswahl zu deaktivieren.
- Verhindert, dass Benutzer Inhalte des Elements bearbeiten, die anderweitig bearbeitbar sind.
- Verbirgt das Element und seinen Inhalt vor unterstützenden Technologien, indem sie aus dem Zugänglichkeitsbaum ausgeschlossen werden.

```html
<div inert>
  <!-- content -->
</div>
```

Das `inert`-Attribut kann zu Inhaltsabschnitten hinzugefügt werden, die nicht interaktiv sein sollen. Wenn ein Element inert ist, sind es auch alle Nachfahren des Elements, einschließlich normalerweise interaktiver Elemente wie Links, Schaltflächen und Formularelemente, da sie keinen Fokus erhalten oder angeklickt werden können.

Das `inert`-Attribut kann auch zu Elementen hinzugefügt werden, die außerhalb des sichtbaren Bereichs oder versteckt sein sollen. Ein inertes Element und seine Nachfahren werden aus der Tab-Reihenfolge und dem Zugänglichkeitsbaum entfernt.

> [!NOTE]
> Obwohl `inert` ein globales Attribut ist und auf jedes Element angewendet werden kann, wird es im Allgemeinen für Inhaltsabschnitte verwendet. Um individuelle Steuerelemente „inert“ zu machen, sollten Sie stattdessen das [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled)-Attribut zusammen mit CSS [`:disabled`](/de/docs/Web/CSS/:disabled)-Stilen verwenden.

## Barrierefreiheitsbedenken

Berücksichtigen Sie die Barrierefreiheit sorgfältig, wenn Sie das `inert`-Attribut anwenden. Standardmäßig gibt es keine visuelle Möglichkeit festzustellen, ob ein Element oder sein Unterbaum inert ist oder nicht. Als Webentwickler ist es Ihre Verantwortung, die aktiven und inerten Inhaltsteile klar zu kennzeichnen.

Während Sie visuelle und nicht-visuelle Hinweise auf die Inertheit von Inhalten bereitstellen, denken Sie auch daran, dass der visuelle Viewport möglicherweise nur Abschnitte des Inhalts enthält. Benutzer könnten in einen kleinen Abschnitt des Inhalts gezoomt haben, oder Benutzer könnten den Inhalt überhaupt nicht sehen können. Bereiche, die nicht offensichtlich inert sind, können zu Frustration und schlechter Benutzererfahrung führen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML-{{HTMLElement("dialog")}}-Element
- [`HTMLElement.inert`](/de/docs/Web/API/HTMLElement/inert)-HTML-DOM-Eigenschaft
- [Einführung von inert](https://web.dev/articles/inert)
- [Das "inert"-Attribut kommt endlich ins Web](https://www.stefanjudis.com/blog/the-inert-attribute-is-finally-coming-to-the-web/)
