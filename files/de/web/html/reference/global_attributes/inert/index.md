---
title: inert
slug: Web/HTML/Reference/Global_attributes/inert
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar("Global_attributes")}}

Das **`inert`** [globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) ist ein Boolesches Attribut, das angibt, dass das Element und alle seine flachen Baum-Nachfolger _inert_ werden. Modale {{htmlelement("dialog")}}e, die mit [`showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) erzeugt werden, entkommen der Inertheit, was bedeutet, dass sie die Inertheit nicht von ihren Vorfahren erben, aber nur inert gemacht werden können, indem das `inert`-Attribut explizit auf ihnen selbst gesetzt wird.

Konkret bewirkt `inert` Folgendes:

- Verhindert das Auslösen des [`click`](/de/docs/Web/API/Element/click_event)-Ereignisses, wenn der Nutzer auf das Element klickt.
- Verhindert das Auslösen des [`focus`](/de/docs/Web/API/Element/focus_event)-Ereignisses, indem es verhindert, dass das Element den Fokus erhält.
- Verhindert, dass Inhalte des Elements bei der Verwendung der Suchfunktion des Browsers gefunden bzw. abgeglichen werden.
- Verhindert, dass Benutzer Text innerhalb des Elements auswählen können – ähnlich wie mit der CSS-Eigenschaft {{cssxref("user-select")}} zur Deaktivierung der Textauswahl.
- Verhindert, dass Benutzer Inhalte des Elements bearbeiten können, die ansonsten editierbar sind.
- Versteckt das Element und seinen Inhalt vor unterstützenden Technologien, indem sie vom Zugänglichkeitsbaum ausgeschlossen werden.

```html
<div inert>
  <!-- content -->
</div>
```

Das `inert`-Attribut kann zu Inhaltsbereichen hinzugefügt werden, die nicht interaktiv sein sollen. Wenn ein Element inert ist, werden dieses sowie alle Nachkommen des Elements, einschließlich normalerweise interaktiver Elemente wie Links, Schaltflächen und Formularelemente, deaktiviert, da sie keinen Fokus erhalten oder angeklickt werden können.

Das `inert`-Attribut kann auch zu Elementen hinzugefügt werden, die außerhalb des Bildschirms oder versteckt sein sollen. Ein inertes Element wird zusammen mit seinen Nachkommen aus der Tab-Reihenfolge und dem Zugänglichkeitsbaum entfernt.

> [!NOTE]
> Obwohl `inert` ein globales Attribut ist und auf jedes Element angewendet werden kann, wird es im Allgemeinen für Inhaltsbereiche verwendet. Um einzelne Steuerungen "inert" zu machen, überlegen Sie, stattdessen das [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled)-Attribut zusammen mit CSS [`:disabled`](/de/docs/Web/CSS/:disabled)-Stilen zu verwenden.

## Zugänglichkeitsbedenken

Seien Sie bei der Anwendung des `inert`-Attributs vorsichtig hinsichtlich der Zugänglichkeit. Standardmäßig gibt es keine visuelle Möglichkeit zu erkennen, ob ein Element oder sein Unterbaum inert ist. Als Webentwickler ist es Ihre Verantwortung, die aktiven und inerten Inhaltsteile klar zu kennzeichnen.

Während Sie visuelle und nicht-visuelle Hinweise zur Inertheit von Inhalten bereitstellen, denken Sie auch daran, dass der visuelle Ansichtsbereich möglicherweise nur Teile des Inhalts enthält. Benutzer könnten in einen kleinen Abschnitt des Inhalts hineingezoomt sein oder den Inhalt möglicherweise gar nicht sehen können. Inerte Bereiche, die nicht offensichtlich inert sind, können zu Frustration und einer schlechten Benutzererfahrung führen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML {{HTMLElement("dialog")}} Element
- [`HTMLElement.inert`](/de/docs/Web/API/HTMLElement/inert) HTML DOM-Eigenschaft
- [Einführung in inert](https://web.dev/articles/inert)
- [Das "inert"-Attribut kommt endlich ins Web](https://www.stefanjudis.com/blog/the-inert-attribute-is-finally-coming-to-the-web/)
