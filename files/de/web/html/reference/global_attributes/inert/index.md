---
title: HTML Inert Globales Attribut
short-title: inert
slug: Web/HTML/Reference/Global_attributes/inert
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Das **`inert`** [globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) ist ein Boolean-Attribut, das angibt, dass das Element und alle seine flachen Baum-Nachfahren _inert_ werden. Modale {{htmlelement("dialog")}}, die mit [`showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) erzeugt wurden, entkommen der Inertheit, was bedeutet, dass sie die Inertheit nicht von ihren Vorfahren erben, sondern nur inert gemacht werden können, indem das `inert`-Attribut explizit auf ihnen gesetzt wird.

Speziell bewirkt `inert` Folgendes:

- Verhindert, dass das [`click`](/de/docs/Web/API/Element/click_event) Ereignis ausgelöst wird, wenn der Benutzer auf das Element klickt.
- Verhindert, dass das [`focus`](/de/docs/Web/API/Element/focus_event) Ereignis ausgelöst wird, indem verhindert wird, dass das Element den Fokus erhält.
- Verhindert, dass irgendwelche Inhalte des Elements während der Nutzung der Suchfunktion des Browsers gefunden/übereinstimmen.
- Verhindert, dass Benutzer Text innerhalb des Elements auswählen können – ähnlich wie das Verwenden der CSS-Eigenschaft {{cssxref("user-select")}}, um die Textauswahl zu deaktivieren.
- Verhindert, dass Benutzer Inhalte des Elements bearbeiten, die normalerweise bearbeitbar sind.
- Verbirgt das Element und seinen Inhalt vor unterstützenden Technologien, indem sie aus dem Accessibility-Baum ausgeschlossen werden.

```html
<div inert>
  <!-- content -->
</div>
```

Das `inert`-Attribut kann zu Inhaltsabschnitten hinzugefügt werden, die nicht interaktiv sein sollten. Wenn ein Element inert ist, werden es und alle Nachfahren des Elements, einschließlich normalerweise interaktiver Elemente wie Links, Schaltflächen und Formularelemente deaktiviert, da sie keinen Fokus erhalten oder angeklickt werden können.

Das `inert`-Attribut kann auch zu Elementen hinzugefügt werden, die außerhalb des Bildschirms liegen oder verborgen sein sollten. Ein inertes Element, zusammen mit seinen Nachfahren, wird aus der Tabulatorreihenfolge und dem Accessibility-Baum entfernt.

> [!NOTE]
> Während `inert` ein globales Attribut ist und auf jedes Element angewendet werden kann, wird es im Allgemeinen für Inhaltsabschnitte verwendet. Um einzelne Steuerelemente „inert“ zu machen, ziehen Sie in Betracht, das [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled) Attribut zu verwenden, zusammen mit CSS [`:disabled`](/de/docs/Web/CSS/:disabled) Stilen.

## Barrierefreiheitsbedenken

Verwenden Sie sorgfältige Überlegungen zur Barrierefreiheit, wenn Sie das `inert`-Attribut anwenden. Standardmäßig gibt es keine visuelle Möglichkeit zu erkennen, ob ein Element oder sein Teilbaum inert ist. Als Webentwickler liegt es in Ihrer Verantwortung, die aktiven und inerten Inhaltsteile klar zu kennzeichnen.

Obwohl Sie visuelle und nicht visuelle Hinweise zur Inertheit von Inhalten bereitstellen, denken Sie daran, dass der visuelle Viewport nur Abschnitte von Inhalten enthalten kann. Benutzer können in einen kleinen Abschnitt des Inhalts hineingezoomt haben, oder Benutzer können den Inhalt überhaupt nicht sehen. Inerte Abschnitte, die nicht offensichtlich inert sind, können zu Frustration und schlechter Benutzererfahrung führen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML {{HTMLElement("dialog")}}-Element
- [`HTMLElement.inert`](/de/docs/Web/API/HTMLElement/inert) HTML-DOM-Eigenschaft
- [Einführung in inert](https://web.dev/articles/inert)
- [Das "inert"-Attribut kommt endlich ins Web](https://www.stefanjudis.com/blog/the-inert-attribute-is-finally-coming-to-the-web/)
