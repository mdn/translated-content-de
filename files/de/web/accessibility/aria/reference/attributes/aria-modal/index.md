---
title: "ARIA: aria-modal-Attribut"
short-title: aria-modal
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-modal
l10n:
  sourceCommit: 2d5e220cf073e783d053f0ea8470d042b02dc3f3
---

Das `aria-modal`-Attribut gibt an, ob ein Element modal angezeigt wird.

## Beschreibung

Ein Inhaltsbereich ist "modal", wenn die Navigation auf den Bereich selbst beschränkt ist und der Hintergrund (die Vorfahren und Geschwister des Modals) ausgeblendet wird. Das Setzen von `aria-modal="true"` auf [`dialog`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role)- und [`alertdialog`-Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alertdialog_role)-Containern signalisiert den Benutzern von assistiven Technologien das Vorhandensein eines "modales" Elements, macht das Element jedoch nicht tatsächlich modal. Die Funktionen, die das Element tatsächlich modal machen, müssen vom Entwickler implementiert werden.

> [!NOTE]
> ARIA ändert nur den Barrierefreiheitsbaum, indem es beeinflusst, wie assistive Technologien den Inhalt Ihren Benutzern präsentieren. ARIA ändert nichts an der Funktion oder dem Verhalten eines Elements. Um einen Modaleffekt zu erzeugen, müssen Sie JavaScript verwenden, um das Verhalten, den Fokus und die ARIA-Zustände zu verwalten.

Relevant nur für `dialog`- und `alertdialog`-Container, gibt `aria-modal="true"` assistiven Technologien vor, den Benutzer darüber zu informieren, dass die Möglichkeit, mit anderen Inhalten auf der Seite zu interagieren oder darauf zuzugreifen, erfordert, dass das Modaldialog geschlossen oder anderweitig der Fokus verloren wird.

Modale Dialoge sind dann gegeben, wenn Inhalte angezeigt werden und die Interaktion des Benutzers nur auf diesen Abschnitt beschränkt ist, bis er entfernt wird.

Bei der Erstellung von modalen Dialogen informiert `aria-modal="true"` assistive Technologien, dass die Fenster unter dem aktuellen Dialog nicht Teil des modalen Inhalts sind.

Wenn ein modales Element angezeigt wird, sollte der Fokus in das Modal gesetzt werden. Der Fokus muss im Modal "eingefangen" werden, solange es sichtbar ist, bis es geschlossen wird. Assistive Technologien (<abbr>AT</abbr>) können dann den Inhalt des Modals durchsuchen und den Umfang des modalen Inhalts verstehen. Das `aria-modal`-Attribut hilft, den Bereich des Modals zu kommunizieren und es von den restlichen Inhalten der Seite zu unterscheiden. Bei der Entlassung sollte der Fokus auf das Element zurückkehren, das das Modal ausgelöst hat.

Stellen Sie sicher, dass das Modal nur über seine nachgeordneten Elemente kontrollierbar ist. Wenn ein Modaldialog über eine Schaltfläche zum Schließen verfügt, sollte die Schaltfläche ein Nachfahre im DOM-Container des Modals sein.

Wenn ein modales Element angezeigt wird, sollten Autoren **alle** anderen Inhalte als inert markieren (wie "inaktive Unterbäume" in HTML). Deaktivierter Inhalt ist kein inaktiver Inhalt. Inaktiver Inhalt kann nicht mit normalen und spezialisierten Browsing-Modi interagiert werden, wie z. B. das Caret-Browsing, das es Benutzern assistiver Technologien ermöglicht, eine Seite im Detail zu erkunden. Dies schließt deaktivierte Inhalte ein, deren Inhalt möglicherweise von Bedeutung ist.

Das [`inert`](/de/docs/Web/HTML/Reference/Global_attributes/inert)-Attribut ist ein boolesches Attribut, das durch seine Anwesenheit angibt, dass das Element und alle seine schatteneinschließenden Nachkommen inaktiv gemacht werden sollen.

Das Einfügen von `aria-modal="true"` auf einem [`dialog`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role)- oder [`alertdialog`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alertdialog_role), entfernt die Anforderung, [`aria-hidden`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden) für Hintergrundinhalte zu setzen, da `aria-modal` assistiven Technologien mitteilt, dass Inhalte außerhalb eines Dialogs inaktiv sind. Beachten Sie, dass, obwohl die Unterstützung für das {{HTMLElement("dialog")}}-Element gut ist, eine gründliche Testung Ihrer Implementierung von entscheidender Bedeutung ist.

Wenn ein Dialog nicht modal ist - es gibt keinen inaktiven Hintergrund und der Fokus ist nicht auf den Dialog beschränkt - entweder `aria-modal="false"` einschließen oder das Attribut ganz weglassen.

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
    <button id="close-btn" type="button">No. Close this popup.</button>
    <button id="confirm-btn" type="button">Yes. Delete the file.</button>
  </div>
</div>
```

```js
document.getElementById("close-btn").addEventListener("click", () => {
  closeDialog();
});

document.getElementById("confirm-btn").addEventListener("click", (event) => {
  deleteFile();
});
```

Dieses Teilsystembeispiel enthält ein `alertdialog`, das in einem Vollbild, nicht scrollbaren Hintergrund eingebettet ist.

Die [`role="alertdialog"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alertdialog_role) identifiziert das Element, das als Container für das Alarmdialog dient. Die [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) verschafft dem Alarmdialog einen zugänglichen Namen, indem es auf das Element verweist, das den Titel des Alarmdialogs bereitstellt. Das [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)-Attribut gibt dem Alarmdialog eine {{Glossary("accessible_description", "zugängliche Beschreibung")}}, indem es auf den Inhalt des Alarmdialogs verweist, der die Hauptnachricht oder den Zweck des Alarmdialogs beschreibt.

Das `aria-modal="true"` informiert den Benutzer der assistiven Technologie, dass der Inhalt unterhalb des Dialogs nicht interaktiv ist, solange das Element mit einer Erklärung von `role="alertdialog"` den Fokus hat.

Das `aria-modal`-Attribut zeigt den Assistive-Technologie-Nutzern das Vorhandensein des Modals an, sodass das Deaktivieren des Inhalts hinter dem Modal an AT-Benutzer kommuniziert werden kann. Wie alle ARIA-Attribute hat `aria-modal` selbst keine Auswirkung auf die Funktionalität der Seite; die Fokusverwaltung und das Deaktivieren, die Interaktivität auf Hintergrundelementen und die Möglichkeit, den Fokus vom Alertdialog zu entfernen, müssen alle mit JavaScript verwaltet werden.

## Werte

- `false` (Standard)
  - : Element ist nicht modal.
- `true`
  - : Element ist modal.

## Zugehörige Schnittstellen

- [`Element.ariaModal`](/de/docs/Web/API/Element/ariaModal)
  - : Die [`ariaModal`](/de/docs/Web/API/Element/ariaModal)-Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element)-Schnittstelle, spiegelt den Wert des `aria-modal`-Attributs wider.
- [`ElementInternals.ariaModal`](/de/docs/Web/API/ElementInternals/ariaModal)
  - : Die [`ariaModal`](/de/docs/Web/API/ElementInternals/ariaModal)-Eigenschaft, Teil der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle, spiegelt den Wert des `aria-modal`-Attributs wider.

## Zugehörige Rollen

Verwendet in Rollen:

- [`window`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/window_role)

Erbt in Rollen:

- [`alertdialog`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alertdialog_role)
- [`dialog`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role)

## Spezifikationen

{{Specifications}}

## Siehe auch

- HTML {{HTMLElement("dialog")}}-Element
- [`alertdialog`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alertdialog_role)
- [`dialog`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role)
- HTML [`inert` globales Attribut](/de/docs/Web/HTML/Reference/Global_attributes/inert)
- HTMLElement API [`inert`](/de/docs/Web/API/HTMLElement/inert)-Eigenschaft
