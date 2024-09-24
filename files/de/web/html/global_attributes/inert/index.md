---
title: inert
slug: Web/HTML/Global_attributes/inert
l10n:
  sourceCommit: cb132bc83b660e51be8959de5336c00b08030104
---

{{HTMLSidebar("Global_attributes")}}

Das **`inert`** [globale Attribut](/de/docs/Web/HTML/Global_attributes) ist ein boolesches Attribut, das angibt, dass der Browser das Element ignoriert. Mit dem `inert`-Attribut werden alle flachen Baum-Nachkommen des Elements (wie modale {{htmlelement("dialog")}}e), die nicht auf andere Weise aus der Inertheit entkommen, ignoriert. Das `inert`-Attribut sorgt auch dafür, dass der Browser Eingabeereignisse des Benutzers ignoriert, einschließlich fokusbezogener Ereignisse und Ereignisse von unterstützenden Technologien.

Konkret bewirkt `inert` Folgendes:

- Verhindert, dass das {{domxref("Element/click_event", "click")}}-Ereignis ausgelöst wird, wenn der Benutzer auf das Element klickt.
- Verhindert, dass das {{domxref("Element/focus_event", "focus")}}-Ereignis ausgelöst wird, indem verhindert wird, dass das Element den Fokus erhält.
- Verhindert, dass Inhalte des Elements bei der Nutzung der Suchfunktion des Browsers gefunden bzw. übereinstimmend identifiziert werden.
- Verhindert, dass Benutzer Text innerhalb des Elements auswählen können — ähnlich der Verwendung des CSS-Eigenschaften {{cssxref("user-select")}}, um die Textauswahl zu deaktivieren.
- Verhindert, dass Benutzer jegliche Inhalte des Elements bearbeiten können, die ansonsten bearbeitbar wären.
- Verbirgt das Element und seinen Inhalt vor unterstützenden Technologien, indem es sie aus dem Zugänglichkeitsbaum ausschließt.

```html
<div inert>
  <!-- content -->
</div>
```

Das `inert`-Attribut kann zu Inhaltsabschnitten hinzugefügt werden, die nicht interaktiv sein sollen. Wenn ein Element inert ist, sind es auch alle Nachkommen des Elements, einschließlich normalerweise interaktiver Elemente wie Links, Schaltflächen und Formularsteuerelemente, die deaktiviert sind, da sie keinen Fokus erhalten oder angeklickt werden können.

Das `inert`-Attribut kann auch Elementen hinzugefügt werden, die außerhalb des Bildschirms oder verborgen sein sollen. Ein inertes Element und seine Nachkommen werden aus der Tabulatorreihenfolge und dem Zugänglichkeitsbaum entfernt.

> [!NOTE]
> Obwohl `inert` ein globales Attribut ist und auf jedes Element angewendet werden kann, wird es im Allgemeinen für Inhaltsabschnitte verwendet. Um einzelne Steuerelemente "inert" zu machen, ziehen Sie in Betracht, das [`disabled`](/de/docs/Web/HTML/Attributes/disabled)-Attribut zusammen mit den CSS-Styles [`:disabled`](/de/docs/Web/CSS/:disabled) zu verwenden.

## Barrierefreiheitsaspekte

Berücksichtigen Sie die Barrierefreiheit sorgfältig, wenn Sie das `inert`-Attribut anwenden. Standardmäßig gibt es keine visuelle Möglichkeit zu erkennen, ob ein Element oder sein Unterbaum inaktiv ist. Als Webentwickler liegt es in Ihrer Verantwortung klar zu kennzeichnen, welche Teile des Inhalts aktiv sind und welche inert.

Während Sie visuelle und nicht-visuelle Hinweise zur Inertheit von Inhalten bieten, bedenken Sie auch, dass der sichtbare Anzeigebereich möglicherweise nur Abschnitte des Inhalts enthält. Benutzer können auf einen kleinen Inhaltsbereich gezoomt sein oder den Inhalt möglicherweise überhaupt nicht sehen können. Nicht offensichtlich träge Abschnitte können zu Frustration und schlechtem Benutzererlebnis führen.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- HTML {{HTMLElement("dialog")}}-Element
- {{domxref("HTMLElement.inert")}} HTML DOM-Eigenschaft
- [Introducing inert](https://web.dev/articles/inert)
- [The "inert" attribute is finally coming to the web](https://www.stefanjudis.com/blog/the-inert-attribute-is-finally-coming-to-the-web/)
