---
title: aria-modal
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-modal
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Das `aria-modal` Attribut gibt an, ob ein Element modal ist, wenn es angezeigt wird.

## Beschreibung

Ein Abschnitt von Inhalten ist "modal", was bedeutet, dass die Navigation auf den Bereich selbst beschränkt ist und der Hintergrund (die Vorfahren und Geschwister des Modals) verborgen ist. Durch das Setzen von `aria-modal="true"` auf [`dialog`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role) und [`alertdialog` role](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alertdialog_role) Containern wird die Anwesenheit eines "modalen" Elements für Benutzer von unterstützenden Technologien angezeigt, macht das Element jedoch nicht wirklich modal. Die Eigenschaften, die das Element tatsächlich modal machen, müssen vom Entwickler implementiert werden.

> [!NOTE]
> ARIA modifiziert nur den Accessibility-Tree, indem es beeinflusst, wie unterstützende Technologien die Inhalte für Ihre Benutzer präsentieren. ARIA ändert nichts an der Funktion oder dem Verhalten eines Elements. Um einen modalen Effekt zu erzeugen, müssen Sie JavaScript verwenden, um Verhalten, Fokus und ARIA-Zustände zu verwalten.

Relevant nur in `dialog`- und `alertdialog`-Containern, gibt `aria-modal="true"` den unterstützenden Technologien an, dass der Benutzer darauf hingewiesen wird, dass die Möglichkeit, mit anderen Inhalten auf der Seite zu interagieren oder darauf zuzugreifen, erfordert, dass der modale Dialog geschlossen oder der Fokus anderweitig verloren gehen muss.

Modal-Dialoge sind, wenn Inhalte angezeigt werden und die Benutzerinteraktion auf diesen Abschnitt beschränkt ist, bis er verworfen wird.

Beim Erstellen von Modal-Dialogen informiert `aria-modal="true"` unterstützende Technologien, dass die Fenster unterhalb des aktuellen Dialogs nicht Teil des modalen Inhalts sind.

Wenn ein modales Element angezeigt wird, sollte der Fokus im Modal platziert werden. Der Fokus muss "eingefangen" werden, solange das Modal sichtbar ist, bis es verworfen wird. Unterstützende Technologie (<abbr>AT</abbr>) kann dann den Inhalt des Modals navigieren und den Umfang des Modalinhalts verstehen. Das `aria-modal` Attribut hilft AT, die Grenzen des Modals zu kommunizieren und es vom Rest des Seiteninhalts zu unterscheiden. Nachdem es geschlossen wurde, sollte der Fokus auf das Element zurückkehren, das das Modal ausgelöst hat.

Stellen Sie sicher, dass das Modal nur mit seinen untergeordneten Elementen steuerbar ist. Wenn ein modaler Dialog eine Schaltfläche zum Schließen hat, sollte diese Schaltfläche ein Nachfolger sein, der im DOM im Modal-Container enthalten ist.

Wenn ein modales Element angezeigt wird, sollten Autoren alle anderen Inhalte als inert markieren (wie z.B. "inaktive Unterbäume" in HTML). Deaktivierte Inhalte sind nicht inaktive Inhalte. Inactive Inhalte können nicht mit normalen und spezialisierten Browsing-Modi interagiert werden, wie z.B. Caret-Browsing, die einem Benutzer von unterstützenden Technologien erlauben, eine Seite im Detail zu erkunden. Dazu gehören auch deaktivierte Inhalte, deren Inhalte Bedeutung vermitteln können.

Das [`inert`](/de/docs/Web/HTML/Global_attributes/inert) Attribut ist ein boolesches Attribut, das durch seine Anwesenheit angibt, dass das Element und alle seine schatteneinschließenden Nachfahren inaktiv gemacht werden sollen. Bis [`HTMLElement.inert`](/de/docs/Web/API/HTMLElement/inert) vollständig unterstützt wird, können Inhalte [mit JavaScript inaktiv gemacht werden](https://samthor.au/2021/inert/).

Das Einfügen von `aria-modal="true"` in einen [`dialog`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role) oder [`alertdialog`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alertdialog_role) entfernt die Anforderung, [`aria-hidden`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden) auf Hintergrundinhalte zu setzen, da `aria-modal` unterstützenden Technologien mitteilt, dass Inhalte außerhalb eines Dialogs inaktiv sind. Beachten Sie, dass, obwohl die Unterstützung für das {{HTMLElement("dialog")}} Element gut ist, das gründliche Testen Ihrer Implementierung von entscheidender Bedeutung ist.

Wenn ein Dialog nicht modal ist - es gibt keinen inaktiven Hintergrund und der Fokus ist nicht auf den Dialog beschränkt - können Sie entweder `aria-modal="false"` einschließen oder das Attribut ganz weglassen.

## Beispiel

```html
<div id="backdrop" class="no-scroll">
  <div
    role="alertdialog"
    aria-modal="true"
    aria-labelledby="dialog_label"
    aria-describedby="dialog_desc">
    <h2 id="dialog_label">Confirmation</h2>
    <div id="dialog_desc">
      <p>Are you sure you want to delete this file?</p>
    </div>
    <button type="button" onclick="closeDialog(this)">
      No. Close this popup.
    </button>
    <button type="button" onclick="deleteFile(this)">
      Yes. Delete the file.
    </button>
  </div>
</div>
```

Dieses Teilausschnitt beinhaltet ein `alertdialog`, das in einem Vollbild-Backdrop ohne Scrollen eingebettet ist.

Das [`role="alertdialog"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alertdialog_role) identifiziert das Element, das als Container für das Alert-Dialog dient. Das [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) Attribut stellt dem Alert-Dialog einen zugänglichen Namen bereit, indem es auf das Element verweist, das den Titel des Alert-Dialogs bereitstellt. Das [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) Attribut gibt dem Alert-Dialog eine {{Glossary("accessible_description", "zugängliche Beschreibung")}}, indem es auf die Inhalte des Alert-Dialogs verweist, die die Hauptnachricht oder den Zweck des Alert-Dialogs beschreiben.

Das `aria-modal="true"` informiert den Benutzer der unterstützenden Technologie darüber, dass der Inhalt unter dem Dialog nicht interaktiv ist, solange das Element mit der Deklaration `role="alertdialog"` den Fokus hat.

Das `aria-modal` Attribut zeigt unterstützenden Technologien die Existenz des Modals an, damit die Deaktivierung der Inhalte hinter dem Modal den AT-Benutzern mitgeteilt werden kann. Wie alle ARIA-Attribute, hat `aria-modal` selbst keinen Einfluss auf die Funktionalität der Seite; Fokusverwaltung und Deaktivierung, Interaktivität auf Hintergrundelementen und die Möglichkeit, den Fokus vom Alert-Dialog zu entfernen, müssen alle mit JavaScript verwaltet werden.

## Werte

- `false` (Standard)
  - : Element ist nicht modal.
- `true`
  - : Element ist modal.

## Zugehörige Schnittstellen

- [`Element.ariaModal`](/de/docs/Web/API/Element/ariaModal)
  - : Die [`ariaModal`](/de/docs/Web/API/Element/ariaModal) Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element) Schnittstelle, spiegelt den Wert des `aria-modal` Attributs wider.
- [`ElementInternals.ariaModal`](/de/docs/Web/API/ElementInternals/ariaModal)
  - : Die [`ariaModal`](/de/docs/Web/API/ElementInternals/ariaModal) Eigenschaft, Teil der [`ElementInternals`](/de/docs/Web/API/ElementInternals) Schnittstelle, spiegelt den Wert des `aria-modal` Attributs wider.

## Zugehörige Rollen

Verwendet in Rollen:

- [`window`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/window_role)

Vererbt in Rollen:

- [`alertdialog`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alertdialog_role)
- [`dialog`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role)

## Spezifikationen

{{Specifications}}

## Siehe auch

- HTML {{HTMLElement("dialog")}} Element
- [`alertdialog` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alertdialog_role)
- [`dialog` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role)
- HTML [`inert` globales Attribut](/de/docs/Web/HTML/Global_attributes/inert)
- HTMLElement API [`inert`](/de/docs/Web/API/HTMLElement/inert) Eigenschaft
