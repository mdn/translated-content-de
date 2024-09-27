---
title: aria-modal
slug: Web/Accessibility/ARIA/Attributes/aria-modal
l10n:
  sourceCommit: cb132bc83b660e51be8959de5336c00b08030104
---

{{AccessibilitySidebar}}

Das `aria-modal` Attribut gibt an, ob ein Element modal ist, wenn es angezeigt wird.

## Beschreibung

Ein Abschnitt von Inhalt ist "modal", was bedeutet, dass die Navigation auf den Bereich selbst beschränkt ist und der Hintergrund (die Vorfahren und Geschwister des modalen Elements) verborgen ist. Das Setzen von `aria-modal="true"` auf [`dialog`](/de/docs/Web/Accessibility/ARIA/Roles/dialog_role) und [`alertdialog` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/alertdialog_role) Containern zeigt den Nutzern von unterstützender Technologie das Vorhandensein eines "modalen" Elements an, macht das Element jedoch nicht tatsächlich modal. Die Funktionen, die das Element tatsächlich modal machen, müssen vom Entwickler implementiert werden.

> [!NOTE]
> ARIA ändert nur den Accessibility-Tree, indem es beeinflusst, wie unterstützende Technologien den Inhalt Ihren Nutzern präsentieren. ARIA verändert nichts an der Funktion oder dem Verhalten eines Elements. Um einen modalen Effekt zu erzeugen, müssen Sie JavaScript verwenden, um Verhalten, Fokus und ARIA-Zustände zu verwalten.

Relevante nur bei `dialog` und `alertdialog` Containern, informiert das Setzen von `aria-modal="true"` unterstützende Technologien darüber, den Benutzer darüber zu informieren, dass die Möglichkeit, mit anderem Inhalt auf der Seite zu interagieren oder darauf zuzugreifen, erfordert, dass der modale Dialog geschlossen oder anderweitig den Fokus verliert.

Modale Dialoge sind, wenn Inhalt angezeigt wird und die Benutzerinteraktion auf diesen Abschnitt beschränkt ist, bis er ausgeblendet wird.

Beim Erstellen von modalen Dialogen zeigt `aria-modal="true"` unterstützenden Technologien an, dass die Fenster unter dem aktuellen Dialog nicht Teil des modalen Inhalts sind.

Wenn ein modales Element angezeigt wird, sollte der Fokus auf das Modalelement gesetzt werden. Der Fokus muss "eingeschlossen" sein, wenn es sichtbar ist, bis es ausgeblendet ist. Unterstützende Technologie (<abbr>AT</abbr>) kann dann den Inhalt des modalen Elements navigieren und verstehen, welchen Umfang der modale Inhalt hat. Das `aria-modal` Attribut hilft AT, die Grenzen des Modals zu kommunizieren und es vom Rest des Seiteninhalts zu unterscheiden. Wenn es geschlossen wird, sollte der Fokus auf das Element zurückkehren, das das Modalelement ausgelöst hat.

Stellen Sie sicher, dass das Modalelement nur mit seinen nachgeordneten Elementen gesteuert werden kann. Wenn ein modaler Dialog eine Schaltfläche zum Schließen hat, sollte diese Schaltfläche ein Nachfolger und innerhalb des Modalcontainers im DOM enthalten sein.

Wenn ein modales Element angezeigt wird, sollten Autoren **sicherstellen**, dass alle anderen Inhalte als inert markiert werden (wie bei "inert subtrees" in HTML). Deaktivierte Inhalte sind keine inert Inhalte. Inert Inhalte können nicht mit normalen und speziellen Browsingmodi wie dem Caretbrowsing interagiert werden, wodurch ein Benutzer von unterstützender Technologie eine Seite im Detail erkunden kann. Dies schließt deaktivierte Inhalte ein, deren Inhalt möglicherweise Bedeutung hat.

Das [`inert`](/de/docs/Web/HTML/Global_attributes/inert) Attribut ist ein boolesches Attribut, das anzeigt, dass das Element und alle seine Schatten-Einschließenden Nachfolger inaktiv gemacht werden sollen. Bis [`HTMLElement.inert`](/de/docs/Web/API/HTMLElement/inert) vollständig unterstützt wird, können Inhalte [mit JavaScript inaktiv gemacht werden](https://samthor.au/2021/inert/).

Das Einfügen von `aria-modal="true"` auf einem [`dialog`](/de/docs/Web/Accessibility/ARIA/Roles/dialog_role) oder [`alertdialog`](/de/docs/Web/Accessibility/ARIA/Roles/alertdialog_role) entfernt die Anforderung, [`aria-hidden`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-hidden) auf Hintergrundinhalten zu setzen, da `aria-modal` unterstützenden Technologien mitteilt, dass Inhalte außerhalb eines Dialogs inaktiv sind. Beachten Sie, dass obwohl die Unterstützung für das {{HTMLElement("dialog")}} Element gut ist, das gründliche Testen Ihrer Implementierung von entscheidender Bedeutung ist.

Wenn ein Dialog nicht modal ist – es gibt keinen inaktiven Hintergrund und der Fokus ist nicht auf den Dialog beschränkt – sollten Sie entweder `aria-modal="false"` hinzufügen oder das Attribut ganz weglassen.

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

Dieses Teilbeispiel enthält einen `alertdialog`, der in einem bildschirmfüllenden, nicht-scrollbaren Hintergrund eingebettet ist.

Die [`role="alertdialog"`](/de/docs/Web/Accessibility/ARIA/Roles/alertdialog_role) identifiziert das Element, das als Container für den Alert-Dialog dient. Das [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) gibt dem Alert-Dialog einen zugänglichen Namen, indem es auf das Element verweist, das den Titel des Alert-Dialogs bereitstellt. Das [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) Attribut gibt dem Alert-Dialog eine [zugängliche Beschreibung](/de/docs/Glossary/accessible_description), indem es auf den Inhalt des Alert-Dialogs verweist, der die Hauptnachricht oder den Zweck des Alert-Dialogs beschreibt.

Das `aria-modal="true"` informiert den Benutzer der unterstützenden Technologie darüber, dass der Inhalt unterhalb des Dialogs nicht interaktiv ist, solange das Element mit einer Erklärung von `role="alertdialog"` im Fokus steht.

Das `aria-modal` Attribut zeigt die Existenz des Modals den unterstützenden Technologien, damit die Deaktivierung des Inhalts hinter dem Modal den AT-Nutzern kommuniziert werden kann. Wie alle ARIA-Attribute hat `aria-modal` selbst keinen Einfluss auf die Funktionalität einer Seite; Fokusverwaltung und Deaktivierung, Interaktivität bei Hintergrundelementen und die Fähigkeit, den Fokus aus dem Alert-Dialog zu entfernen, müssen alle mit JavaScript verwaltet werden.

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

- [`window`](/de/docs/Web/Accessibility/ARIA/Roles/window_role)

Vererbt in Rollen:

- [`alertdialog`](/de/docs/Web/Accessibility/ARIA/Roles/alertdialog_role)
- [`dialog`](/de/docs/Web/Accessibility/ARIA/Roles/dialog_role)

## Spezifikationen

{{Specifications}}

## Siehe auch

- HTML {{HTMLElement("dialog")}} Element
- [`alertdialog` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/alertdialog_role)
- [`dialog` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/dialog_role)
- HTML [`inert` globales Attribut](/de/docs/Web/HTML/Global_attributes/inert)
- HTMLElement API [`inert`](/de/docs/Web/API/HTMLElement/inert) Eigenschaft
