---
title: inert
slug: Web/HTML/Global_attributes/inert
l10n:
  sourceCommit: 694a813ca116ab209166ac162fe2fa59a9d20e55
---

{{HTMLSidebar("Global_attributes")}}

Das **`inert`** [globale Attribut](/de/docs/Web/HTML/Global_attributes) ist ein boolesches Attribut, das angibt, dass das Element und alle seine Flat-Tree-Nachkommen _inert_ werden. Modale {{htmlelement("dialog")}}s, die mit [`showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) erzeugt werden, entziehen sich der Inaktivität. Das bedeutet, dass sie nicht die Inaktivität von ihren Vorfahren erben, sondern nur dadurch inaktiv gemacht werden können, dass das `inert`-Attribut explizit auf ihnen gesetzt wird.

Konkret bewirkt `inert` Folgendes:

- Verhindert, dass das [`click`](/de/docs/Web/API/Element/click_event)-Ereignis ausgelöst wird, wenn der Benutzer auf das Element klickt.
- Verhindert, dass das [`focus`](/de/docs/Web/API/Element/focus_event)-Ereignis ausgelöst wird, indem verhindert wird, dass das Element den Fokus erhält.
- Verhindert, dass der Inhalt des Elements bei der Nutzung der Suchfunktion des Browsers gefunden/gefiltert wird.
- Verhindert, dass Benutzer Text innerhalb des Elements auswählen können – ähnlich wie die Verwendung der CSS-Eigenschaft {{cssxref("user-select")}}, um die Textauswahl zu deaktivieren.
- Verhindert, dass Benutzer Inhalte des Elements bearbeiten können, die ansonsten bearbeitbar wären.
- Versteckt das Element und seinen Inhalt vor unterstützenden Technologien, indem es aus dem Zugänglichkeitsbaum ausgeschlossen wird.

```html
<div inert>
  <!-- content -->
</div>
```

Das `inert`-Attribut kann zu Inhaltsabschnitten hinzugefügt werden, die nicht interaktiv sein sollen. Wenn ein Element inaktiv ist, werden dieses und alle seine Nachkommen, einschließlich normalerweise interaktiver Elemente wie Links, Schaltflächen und Formularsteuerelemente, deaktiviert, da sie keinen Fokus erhalten oder angeklickt werden können.

Das `inert`-Attribut kann auch auf Elemente angewendet werden, die außerhalb des sichtbaren Bereichs oder verborgen sein sollen. Ein inaktives Element sowie dessen Nachkommen werden aus der Tabulatorreihenfolge und dem Zugänglichkeitsbaum entfernt.

> [!NOTE]
> Obwohl `inert` ein globales Attribut ist und auf jedes Element angewendet werden kann, wird es in der Regel für Inhaltsabschnitte verwendet. Um einzelne Steuerelemente "inaktiv" zu machen, ziehen Sie stattdessen die Verwendung des [`disabled`](/de/docs/Web/HTML/Attributes/disabled)-Attributs zusammen mit den CSS-Styles [`:disabled`](/de/docs/Web/CSS/:disabled) in Betracht.

## Barrierefreiheit bedenken

Berücksichtigen Sie die Barrierefreiheit sorgfältig, wenn Sie das `inert`-Attribut verwenden. Standardmäßig gibt es keine visuelle Möglichkeit zu erkennen, ob ein Element oder sein Unterbaum inaktiv ist. Als Webentwickler liegt es in Ihrer Verantwortung, klar anzuzeigen, welche Inhalte aktiv sind und welche inaktiv sind.

Während Sie visuelle und nicht-visuelle Hinweise zur Inaktivität von Inhalten bereitstellen, denken Sie auch daran, dass der visuelle Viewport möglicherweise nur Abschnitte des Inhalts enthält. Benutzer können in einen kleinen Abschnitt des Inhalts hineingezoomt haben oder möglicherweise den Inhalt überhaupt nicht sehen. Abschnitte, die nicht offensichtlich inaktiv sind, können zu Frustration und einer schlechten Benutzererfahrung führen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML-{{HTMLElement("dialog")}}-Element
- [`HTMLElement.inert`](/de/docs/Web/API/HTMLElement/inert) HTML DOM-Eigenschaft
- [Einführung in inert](https://web.dev/articles/inert)
- [Das "inert"-Attribut kommt endlich ins Web](https://www.stefanjudis.com/blog/the-inert-attribute-is-finally-coming-to-the-web/)
