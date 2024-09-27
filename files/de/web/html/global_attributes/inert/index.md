---
title: inert
slug: Web/HTML/Global_attributes/inert
l10n:
  sourceCommit: cb132bc83b660e51be8959de5336c00b08030104
---

{{HTMLSidebar("Global_attributes")}}

Das **`inert`** [globale Attribut](/de/docs/Web/HTML/Global_attributes) ist ein Boolesches Attribut, das angibt, dass der Browser das Element ignorieren wird. Mit dem `inert`-Attribut werden alle flachen Baum-Nachkommen des Elements (wie modale {{htmlelement("dialog")}}e), die nicht anderweitig der Inertheit entkommen, ignoriert. Das `inert`-Attribut sorgt außerdem dafür, dass der Browser Eingabeereignisse ignoriert, die vom Benutzer gesendet werden, einschließlich fokusbezogener Ereignisse und Ereignisse von unterstützenden Technologien.

Konkret bewirkt `inert` folgendes:

- Verhindert, dass das [`click`](/de/docs/Web/API/Element/click_event) Ereignis ausgelöst wird, wenn der Benutzer auf das Element klickt.
- Verhindert, dass das [`focus`](/de/docs/Web/API/Element/focus_event) Ereignis ausgelöst wird, indem das Element nicht in den Fokus gelangen kann.
- Verhindert, dass Inhalte des Elements während der Nutzung der "Seiten suchen"-Funktion des Browsers gefunden/übereinstimmt werden.
- Verhindert, dass Benutzer Text innerhalb des Elements auswählen können – ähnlich wie bei Verwendung der CSS-Eigenschaft {{cssxref("user-select")}}, um die Textauswahl zu deaktivieren.
- Verhindert, dass Benutzer irgendwelche Inhalte des Elements bearbeiten können, die ansonsten bearbeitbar sind.
- Verbirgt das Element und seinen Inhalt vor unterstützenden Technologien, indem es aus dem Accessibility-Tree ausgeschlossen wird.

```html
<div inert>
  <!-- content -->
</div>
```

Das `inert`-Attribut kann zu Inhaltsbereichen hinzugefügt werden, die nicht interaktiv sein sollen. Wenn ein Element inert ist, sind es auch alle Nachkommen dieses Elements, einschließlich normalerweise interaktiver Elemente wie Links, Schaltflächen und Formularelemente, da sie weder den Fokus erhalten noch angeklickt werden können.

Das `inert`-Attribut kann auch zu Elementen hinzugefügt werden, die außerhalb des Bildschirms oder verborgen sein sollen. Ein inertes Element sowie seine Nachkommen werden aus der Tabulatorreihenfolge und dem Accessibility-Tree entfernt.

> [!NOTE]
> Obwohl `inert` ein globales Attribut ist und auf jedes Element angewendet werden kann, wird es in der Regel für Inhaltsbereiche verwendet. Um einzelne Steuerelemente "inert" zu machen, sollten Sie stattdessen das [`disabled`](/de/docs/Web/HTML/Attributes/disabled)-Attribut zusammen mit CSS-Styles für [`:disabled`](/de/docs/Web/CSS/:disabled) verwenden.

## Barrierefreiheit

Verwenden Sie das `inert`-Attribut mit Bedacht auf die Barrierefreiheit. Standardmäßig gibt es keine visuelle Methode, um anzuzeigen, ob ein Element oder sein Teilbaum inert ist. Als Webentwickler ist es Ihre Verantwortung, die aktiven und die inerten Inhaltsabschnitte klar zu kennzeichnen.

Während Sie visuelle und nichtvisuelle Hinweise zur Inertheit des Inhalts bereitstellen, bedenken Sie auch, dass der visuelle Viewport möglicherweise nur Teile des Inhalts enthält. Benutzer können auf einen kleinen Abschnitt des Inhalts gezoomt sein oder möglicherweise den Inhalt überhaupt nicht sehen. Wenn nicht offensichtlich ist, dass Abschnitte inert sind, kann dies zu Frustration und einer schlechten Benutzererfahrung führen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML {{HTMLElement("dialog")}} Element
- [`HTMLElement.inert`](/de/docs/Web/API/HTMLElement/inert) HTML DOM-Eigenschaft
- [Introducing inert](https://web.dev/articles/inert)
- ["Inert"-Attribut kommt endlich ins Web](https://www.stefanjudis.com/blog/the-inert-attribute-is-finally-coming-to-the-web/)
