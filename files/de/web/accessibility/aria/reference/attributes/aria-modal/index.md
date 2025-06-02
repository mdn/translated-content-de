---
title: "ARIA: aria-modal-Attribut"
short-title: aria-modal
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-modal
l10n:
  sourceCommit: fc52eb81b630ca02c16addc346924295bdb5aaa8
---

Das `aria-modal`-Attribut gibt an, ob ein Element beim Anzeigen modal ist.

## Beschreibung

Ein Abschnitt von Inhalten ist "modal", wenn die Navigation auf den Bereich selbst beschränkt ist und der Hintergrund (die Vorfahren und Geschwister des Modals) ausgeblendet ist. Das Setzen von `aria-modal="true"` auf [`dialog`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role)- und [`alertdialog` role](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alertdialog_role)-Containern deutet gegenüber Benutzern von unterstützender Technologie auf das Vorhandensein eines "modalen" Elements hin, macht das Element jedoch nicht tatsächlich modal. Die Merkmale, die das Element tatsächlich modal machen, müssen vom Entwickler implementiert werden.

> [!NOTE]
> ARIA verändert nur den Barrierefreiheitsbaum und beeinflusst, wie unterstützende Technologien den Inhalt Ihren Nutzern präsentieren. ARIA verändert nichts an der Funktion oder dem Verhalten eines Elements. Um einen modalen Effekt zu erzeugen, müssen Sie JavaScript verwenden, um Verhalten, Fokus und ARIA-Zustände zu verwalten.

Relevant nur für `dialog`- und `alertdialog`-Container, signalisiert `aria-modal="true"` unterstützenden Technologien, dass der Benutzer informiert wird, dass die Möglichkeit, mit anderen Inhalten auf der Seite zu interagieren oder darauf zuzugreifen, erfordert, dass der modale Dialog geschlossen oder anderweitig der Fokus verloren gehen muss.

Modale Dialoge sind, wenn Inhalte angezeigt werden und die Interaktion des Benutzers auf diesen Abschnitt beschränkt ist, bis er geschlossen wird.

Bei der Erstellung von modalen Dialogen teilt `aria-modal="true"` unterstützenden Technologien mit, dass die Fenster unterhalb des aktuellen Dialogs nicht Teil des modalen Inhalts sind.

Wenn ein modales Element angezeigt wird, sollte der Fokus innerhalb des Modals gesetzt werden. Der Fokus muss "eingeschlossen" bleiben, solange das Modal sichtbar ist, bis es geschlossen wird. Unterstützende Technologie (<abbr>AT</abbr>) kann dann den Inhalt des Modals navigieren und den Umfang des modalen Inhalts verstehen. Das `aria-modal`-Attribut hilft AT, die Grenzen des Modals zu kommunizieren und es vom Rest des Seiteninhalts zu unterscheiden. Wenn es geschlossen wird, sollte der Fokus auf das Element zurückkehren, das das Modal ausgelöst hat.

Stellen Sie sicher, dass das Modal nur über seine Nachfahrenelemente steuerbar ist. Wenn ein modaler Dialog eine Schaltfläche zum Schließen hat, sollte die Schaltfläche ein Nachfahre sein, der im Modal-Container im DOM enthalten ist.

Wenn ein modales Element angezeigt wird, **sollten** Autoren alle anderen Inhalte als inert markieren (wie "inert Unterbäume" in HTML). Deaktivierter Inhalt ist kein inaktiver Inhalt. Inaktiver Inhalt kann weder mit normalen noch spezialisierten Navigationsmodi wie Caret-Browsing, die einem Benutzer einer unterstützenden Technologie ermöglichen, eine Seite im Detail zu erkunden, interagiert werden. Dies schließt deaktivierte Inhalte ein, deren Inhalte Bedeutung vermitteln können.

Das [`inert`](/de/docs/Web/HTML/Reference/Global_attributes/inert)-Attribut ist ein boolesches Attribut, das durch seine Anwesenheit anzeigt, dass das Element und all seine Schatten einschließlich der Nachkommen inaktiv gemacht werden sollen. Bis [`HTMLElement.inert`](/de/docs/Web/API/HTMLElement/inert) vollständig unterstützt wird, kann der Inhalt [mit JavaScript inaktiv gemacht werden](https://samthor.au/2021/inert/).

Die Einbeziehung von `aria-modal="true"` in einem [`dialog`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role) oder [`alertdialog`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alertdialog_role) entfernt die Anforderung, [`aria-hidden`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden) auf Hintergrundinhalten zu setzen, da `aria-modal` assistierende Technologien darüber informiert, dass Inhalte außerhalb eines Dialogs inaktiv sind. Beachten Sie, dass trotz guter Unterstützung des {{HTMLElement("dialog")}}-Elements das gründliche Testen Ihrer Implementierung von entscheidender Bedeutung ist.

Wenn ein Dialog nicht modal ist — es gibt keinen inaktiven Hintergrund und der Fokus ist nicht auf den Dialog beschränkt — sollten Sie `aria-modal="false"` einfügen oder das Attribut vollständig weglassen.

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

Dieses teilweise Beispiel enthält ein `alertdialog`, das in einem Vollbild-, nicht-scrollbaren Hintergrund eingebettet ist.

Die [`role="alertdialog"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alertdialog_role) identifiziert das Element, das als Container für den Alarmdialog dient. Das [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) bietet dem Alarmdialog einen zugänglichen Namen, indem es auf das Element verweist, das den Titel des Alarmdialogs bereitstellt. Das [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)-Attribut gibt dem Alarmdialog eine {{Glossary("accessible_description", "zugängliche Beschreibung")}}, indem auf den Inhalt des Alarmdialogs verwiesen wird, der die Hauptnachricht oder den Zweck des Alarmdialogs beschreibt.

Das `aria-modal="true"` weist den Benutzer der unterstützenden Technologie darauf hin, dass die Inhalte unterhalb des Dialogs nicht interaktiv sind, solange das Element mit der Deklaration von `role="alertdialog"` den Fokus hat.

Das `aria-modal`-Attribut legt gegenüber unterstützenden Technologien die Existenz des Modals offen, damit die Deaktivierung der Inhalte hinter dem Modal an die AT-Benutzer übermittelt werden kann. Wie alle ARIA-Attribute hat `aria-modal` selbst keine Auswirkungen auf die Funktionalität der Seite; Fokusverwaltung und Deaktivierung, Interaktivität von Hintergrundelementen und die Fähigkeit, den Fokus vom alarmdialog zu entfernen, müssen alle mit JavaScript verwaltet werden.

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
- [`alertdialog` role](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alertdialog_role)
- [`dialog` role](/de/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role)
- HTML [`inert` global attribute](/de/docs/Web/HTML/Reference/Global_attributes/inert)
- HTMLElement API [`inert`](/de/docs/Web/API/HTMLElement/inert)-Eigenschaft
