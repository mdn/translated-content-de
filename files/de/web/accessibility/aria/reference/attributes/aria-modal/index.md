---
title: aria-modal
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-modal
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

Das `aria-modal` Attribut gibt an, ob ein Element modal ist, wenn es angezeigt wird.

## Beschreibung

Ein Abschnitt von Inhalten ist "modal", wenn die Navigation auf den Bereich selbst beschränkt ist und der Hintergrund (die Vorfahren und Geschwister des Modals) verborgen ist. Durch das Setzen von `aria-modal="true"` auf [`dialog`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role) und [`alertdialog` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alertdialog_role) Containern wird Benutzern von unterstützender Technologie das Vorhandensein eines "modalen" Elements angezeigt, aber es bewirkt nicht tatsächlich, dass das Element modal wird. Die Funktionen, die das Element tatsächlich modal machen, müssen vom Entwickler implementiert werden.

> [!NOTE]
> ARIA modifiziert nur den Zugänglichkeitsbaum und ändert die Art und Weise, wie unterstützende Technologie den Inhalt Ihren Nutzern präsentiert. ARIA verändert nichts an der Funktion oder dem Verhalten eines Elements. Um einen modalen Effekt zu erzeugen, müssen Sie JavaScript verwenden, um Verhalten, Fokus und ARIA-Zustände zu verwalten.

Relevant nur auf `dialog` und `alertdialog` Containern, signalisiert das Setzen von `aria-modal="true"` unterstützenden Technologien, dass dem Benutzer mitgeteilt wird, dass die Möglichkeit, mit anderen Inhalten auf der Seite zu interagieren oder darauf zuzugreifen, erfordert, dass der modale Dialog geschlossen oder anderweitig der Fokus verloren wird.

Modale Dialoge sind, wenn Inhalte angezeigt werden und die Interaktion des Benutzers auf nur diesen Bereich beschränkt ist, bis er geschlossen wird.

Beim Erstellen modaler Dialoge teilt `aria-modal="true"` unterstützenden Technologien mit, dass die Fenster unter dem aktuellen Dialog nicht Teil des modalen Inhalts sind.

Wenn ein modales Element angezeigt wird, sollte der Fokus auf das Modal gerichtet werden. Der Fokus muss im Modal "eingeschlossen" bleiben, wenn es sichtbar ist, bis es geschlossen wird. Unterstützende Technologie (<abbr>AT</abbr>) kann dann den Inhalt des Modals navigieren und den Umfang des Modalinhalts verstehen. Das `aria-modal` Attribut hilft AT, die Grenzen des Modals zu kommunizieren und es von den übrigen Inhalten der Seite zu unterscheiden. Wenn es geschlossen wird, sollte der Fokus auf das Element zurückkehren, das das Modal ausgelöst hat.

Stellen Sie sicher, dass das Modal nur mit seinen abgeleiteten Elementen steuerbar ist. Wenn ein modaler Dialog eine Schaltfläche zum Schließen hat, sollte die Schaltfläche ein Nachkomme sein, der im Modalkontainer im DOM enthalten ist.

Wenn ein modales Element angezeigt wird, **sollten** Autoren alle anderen Inhalte als inaktiv markieren (wie "inaktive Teilbäume" in HTML). Deaktivierter Inhalt ist kein inaktiver Inhalt. Inaktiver Inhalt kann sowohl mit normalen als auch spezialisierten Browsing-Modi wie Caret-Browsing nicht interagiert werden, die es einem Benutzer von unterstützender Technologie ermöglichen, eine Seite im Detail zu erkunden. Dies schließt deaktivierte Inhalte ein, deren Inhalte möglicherweise Bedeutung vermitteln.

Das [`inert`](/de/docs/Web/HTML/Reference/Global_attributes/inert) Attribut ist ein boolesches Attribut, das durch seine Anwesenheit anzeigt, dass das Element und alle seine Schatten-Nachkommen inaktiv gemacht werden sollen. Bis [`HTMLElement.inert`](/de/docs/Web/API/HTMLElement/inert) vollständig unterstützt wird, kann der Inhalt mit JavaScript [inaktiv gemacht werden](https://samthor.au/2021/inert/).

Das Einschließen von `aria-modal="true"` in einem [`dialog`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role) oder [`alertdialog`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alertdialog_role) entfernt die Anforderung, [`aria-hidden`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden) auf Hintergrundinhalte zu setzen, da `aria-modal` unterstützenden Technologien mitteilt, dass Inhalte außerhalb eines Dialogs inaktiv sind. Beachten Sie, dass, obwohl die Unterstützung für das {{HTMLElement("dialog")}} Element gut ist, gründliches Testen Ihrer Implementierung von entscheidender Bedeutung ist.

Wenn ein Dialog nicht modal ist—es gibt keinen inaktiven Hintergrund und der Fokus ist nicht auf den Dialog beschränkt—sollten Sie entweder `aria-modal="false"` einschließen oder das Attribut ganz weglassen.

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

Dieses teilweise Beispiel enthält ein `alertdialog`, das in einen Vollbild-, nicht scrollbaren Hintergrund eingebettet ist.

Die [`role="alertdialog"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alertdialog_role) identifiziert das Element, das als der Container für das Alert-Dialog dient. Das [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) gibt dem Alert-Dialog einen zugänglichen Namen, indem es auf das Element verweist, das den Titel des Alert-Dialogs liefert. Das [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) Attribut gibt dem Alert-Dialog eine {{Glossary("accessible_description", "zugängliche Beschreibung")}}, indem es auf den Inhalt des Alert-Dialogs verweist, der die Hauptbotschaft oder den Zweck des Alert-Dialogs beschreibt.

Das `aria-modal="true"` informiert den Benutzer unterstützender Technologie darüber, dass der Inhalt unter dem Dialog nicht interaktiv ist, solange das Element mit der Deklaration `role="alertdialog"` den Fokus hat.

Das `aria-modal` Attribut macht unterstützenden Technologien das Vorhandensein des Modals zugänglich, sodass die Deaktivierung des Inhalts hinter dem Modal AT-Nutzern mitgeteilt werden kann. Wie alle ARIA-Attribute hat `aria-modal` selbst keinen Einfluss auf die Funktionalität der Seite; das Fokus-Management und die Deaktivierung, Interaktivität auf Hintergrundelementen und die Fähigkeit, den Fokus vom Alertdialog zu entfernen, müssen alle mit JavaScript verwaltet werden.

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
- HTML [`inert` globales Attribut](/de/docs/Web/HTML/Reference/Global_attributes/inert)
- HTMLElement API [`inert`](/de/docs/Web/API/HTMLElement/inert) Eigenschaft
