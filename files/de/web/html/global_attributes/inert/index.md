---
title: inert
slug: Web/HTML/Global_attributes/inert
l10n:
  sourceCommit: cb132bc83b660e51be8959de5336c00b08030104
---

{{HTMLSidebar("Global_attributes")}}

Das **`inert`** [Globale Attribut](/de/docs/Web/HTML/Global_attributes) ist ein boolesches Attribut, das anzeigt, dass der Browser das Element ignoriert. Mit dem `inert`-Attribut werden alle flachen Baum-Nachkommen des Elements (wie modale {{htmlelement("dialog")}}e), die sonst keine Inertheit entkommen, ignoriert. Das `inert`-Attribut sorgt auch dafür, dass der Browser Eingabeereignisse, die von der Benutzerin gesendet werden, ignoriert, einschließlich Fokus-bezogener Ereignisse und Ereignisse von unterstützenden Technologien.

Konkret bewirkt `inert` Folgendes:

- Verhindert, dass das [`click`](/de/docs/Web/API/Element/click_event)-Ereignis ausgelöst wird, wenn die Benutzerin auf das Element klickt.
- Verhindert, dass das [`focus`](/de/docs/Web/API/Element/focus_event)-Ereignis ausgelöst wird, indem es dem Element verwehrt wird, den Fokus zu erhalten.
- Verhindert, dass irgendwelche Inhalte des Elements während der Nutzung der Suchen-in-Seite-Funktion des Browsers gefunden/übereingestimmt werden.
- Verhindert, dass Benutzerinnen Text innerhalb des Elements auswählen können – ähnlich der Verwendung der CSS-Eigenschaft {{cssxref("user-select")}}, um die Textauswahl zu deaktivieren.
- Verhindert, dass Benutzerinnen bearbeitbare Inhalte des Elements bearbeiten können.
- Verbirgt das Element und dessen Inhalt vor unterstützenden Technologien, indem es sie vom Barrierefreiheitsbaum ausschließt.

```html
<div inert>
  <!-- content -->
</div>
```

Das `inert`-Attribut kann zu Inhaltsbereichen hinzugefügt werden, die nicht interaktiv sein sollen. Wenn ein Element inert ist, werden es und alle seine Nachkommen, einschließlich normalerweise interaktiver Elemente wie Links, Schaltflächen und Formularsteuerelemente, deaktiviert, da sie keinen Fokus erhalten oder angeklickt werden können.

Das `inert`-Attribut kann auch zu Elementen hinzugefügt werden, die außerhalb des Sichtbereichs oder verborgen sein sollen. Ein inertes Element zusammen mit seinen Nachkommen wird aus der Tabulatorreihenfolge und dem Barrierefreiheitsbaum entfernt.

> [!NOTE]
> Während `inert` ein globales Attribut ist und auf jedes Element angewendet werden kann, wird es im Allgemeinen für Inhaltsbereiche verwendet. Um einzelne Steuerelemente "inert" zu machen, sollten Sie stattdessen das [`disabled`](/de/docs/Web/HTML/Attributes/disabled)-Attribut in Kombination mit den CSS-Styles [`:disabled`](/de/docs/Web/CSS/:disabled) verwenden.

## Barrierefreiheit Bedenken

Verwenden Sie bei der Anwendung des `inert`-Attributes sorgfältige Überlegungen zur Barrierefreiheit. Standardmäßig gibt es keine visuelle Möglichkeit festzustellen, ob ein Element oder sein Unterbaum inert ist. Als Webentwickler ist es Ihre Verantwortung, die aktiven und die inerten Inhaltsabschnitte klar anzuzeigen.

Während Sie visuelle und nicht-visuelle Hinweise zur Inhaltsträgheit bereitstellen, denken Sie auch daran, dass der visuelle Bildausschnitt möglicherweise nur Abschnitte von Inhalten enthält. Benutzerinnen können auf einen kleinen Abschnitt von Inhalten gezoomt sein, oder Benutzerinnen können möglicherweise die Inhalte überhaupt nicht sehen. Inerte Abschnitte, die nicht offensichtlich inert sind, können zu Frustration und einer schlechten Benutzererfahrung führen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML {{HTMLElement("dialog")}} Element
- [`HTMLElement.inert`](/de/docs/Web/API/HTMLElement/inert) HTML DOM Eigenschaft
- [Introducing inert](https://web.dev/articles/inert)
- [The "inert" attribute is finally coming to the web](https://www.stefanjudis.com/blog/the-inert-attribute-is-finally-coming-to-the-web/)
