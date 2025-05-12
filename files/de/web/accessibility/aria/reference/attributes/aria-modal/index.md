---
title: "ARIA: aria-modal Attribut"
short-title: aria-modal
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-modal
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Das `aria-modal` Attribut gibt an, ob ein Element modal ist, wenn es angezeigt wird.

## Beschreibung

Ein Inhaltsbereich ist "modal", was bedeutet, dass die Navigation auf den Bereich selbst beschränkt ist und der Hintergrund (die Vorfahren und Geschwister des Modals) ausgeblendet ist. Das Setzen von `aria-modal="true"` auf [`dialog`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role) und [`alertdialog` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alertdialog_role) Containern zeigt Benutzern von unterstützenden Technologien das Vorhandensein eines "modalen" Elements an, macht das Element jedoch nicht tatsächlich modal. Die Eigenschaften, die das Element tatsächlich modal machen, müssen vom Entwickler implementiert werden.

> [!NOTE]
> ARIA verändert nur den Accessibility-Tree und modifiziert, wie unterstützende Technologien den Inhalt Ihren Benutzern präsentieren. ARIA ändert nichts an der Funktion oder dem Verhalten eines Elements. Um einen modalen Effekt zu erzeugen, müssen Sie JavaScript verwenden, um Verhalten, Fokus und ARIA-Zustände zu steuern.

Relevant nur für `dialog` und `alertdialog` Container, teilt das Setzen von `aria-modal="true"` unterstützenden Technologien mit, dass die Möglichkeit, mit anderen Inhalten der Seite zu interagieren oder auf diese zuzugreifen, erfordert, dass das modale Dialogfenster geschlossen oder auf andere Weise der Fokus verloren wird.

Modale Dialoge sind gegeben, wenn Inhalte angezeigt werden und die Benutzerinteraktion auf nur diesen Abschnitt beschränkt ist, bis er beendet wird.

Beim Erstellen von modalen Dialogen gibt `aria-modal="true"` unterstützenden Technologien an, dass die Fenster unterhalb des aktuellen Dialogs nicht Teil des modalen Inhalts sind.

Wenn ein modales Element angezeigt wird, sollte der Fokus auf das Modal gelegt werden. Der Fokus muss im sichtbaren Zustand "eingeschlossen" im Modal bleiben, bis es geschlossen wird. Unterstützende Technologie (<abbr>AT</abbr>) kann dann den Inhalt des Modals navigieren und den Umfang des modalen Inhalts verstehen. Das `aria-modal` Attribut hilft AT, die Grenzen des Modals zu kommunizieren und es vom Rest des Seiteninhalts zu unterscheiden. Wenn das Modal geschlossen wird, sollte der Fokus auf das Element zurückgesetzt werden, das das Modal ausgelöst hat.

Stellen Sie sicher, dass das Modal nur über seine Nachkommmerelemente steuerbar ist. Wenn ein modales Dialogfenster über eine Schaltfläche zum Schließen verfügt, sollte diese Schaltfläche ein Nachfahre des Modals im DOM sein.

Wenn ein modales Element angezeigt wird, sollten Autoren **alle anderen Inhalte als inert markieren** (z. B. "inert Unterbäume" in HTML). Deaktivierter Inhalt ist kein inerer Inhalt. Inerter Inhalt kann nicht mit normalen und spezialisierten Browsing-Modi wie Caretbrowsing interagiert werden, die es einem Benutzer von unterstützender Technologie ermöglichen, eine Seite im Detail zu erkunden. Dies schließt deaktivierte Inhalte ein, deren Inhalt eine Bedeutung vermitteln kann.

Das [`inert`](/de/docs/Web/HTML/Reference/Global_attributes/inert) Attribut ist ein boolesches Attribut, das durch seine Anwesenheit anzeigt, dass das Element und alle seine Shadow-inkludierenden Nachkommen inert gemacht werden sollen. Solange [`HTMLElement.inert`](/de/docs/Web/API/HTMLElement/inert) nicht vollständig unterstützt wird, kann Inhalt [mit JavaScript inert gemacht werden](https://samthor.au/2021/inert/).

Das Einfügen von `aria-modal="true"` auf einem [`dialog`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role) oder [`alertdialog`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alertdialog_role) entfernt die Anforderung, [`aria-hidden`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden) auf Hintergrundinhalte zu setzen, da `aria-modal` assistierenden Technologien mitteilt, dass Inhalte außerhalb eines Dialogs inert sind. Beachten Sie, dass, obwohl die Unterstützung für das {{HTMLElement("dialog")}} Element gut ist, das gründliche Testen Ihrer Implementierung äußerst wichtig ist.

Wenn ein Dialog nicht modal ist — es gibt keinen inerten Hintergrund und der Fokus ist nicht auf den Dialog beschränkt —, fügen Sie entweder `aria-modal="false"` hinzu oder lassen Sie das Attribut vollständig weg.

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

Dieses Teilausgansbeispiel enthält ein `alertdialog` eingebettet in einen bildschirmfüllenden, nicht scrollbaren Hintergrund.

Die [`role="alertdialog"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alertdialog_role) identifiziert das Element, das als Container für das Benachrichtigungsdialogfenster dient. Die [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) gibt dem Benachrichtigungsdialogfeld einen zugänglichen Namen, indem sie auf das Element verweist, das den Titel des Benachrichtigungsdialogfeldes bereitstellt. Die [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) Attribut gibt dem Benachrichtigungsdialogfeld eine {{Glossary("accessible_description", "zugängliche Beschreibung")}} indem es auf den Benachrichtigungsdialoginhalt verweist, der die Hauptnachricht oder den Zweck des Benachrichtigungsdialogfeldes beschreibt.

Das `aria-modal="true"` informiert den Benutzer der unterstützenden Technologie darüber, dass der Inhalt unterhalb des Dialogs nicht interaktiv ist, solange das Element mit der Deklaration `role="alertdialog"` den Fokus hat.

Das `aria-modal` Attribut macht die Existenz des Modals für unterstützende Technologien sichtbar, damit die Deaktivierung des Inhalts hinter dem Modal den AT-Benutzern mitgeteilt werden kann. Wie alle ARIA-Attribute hat `aria-modal` selbst keinen Einfluss auf die Funktionalität der Seite; das Fokusmanagement und die Deaktivierung, die Interaktivität auf Hintergrundelementen und die Möglichkeit, den Fokus vom Alertdialog zu entfernen, müssen alle mit JavaScript gesteuert werden.

## Werte

- `false` (Standard)
  - : Das Element ist nicht modal.
- `true`
  - : Das Element ist modal.

## Zugehörige Schnittstellen

- [`Element.ariaModal`](/de/docs/Web/API/Element/ariaModal)
  - : Die [`ariaModal`](/de/docs/Web/API/Element/ariaModal) Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element) Schnittstelle, reflektiert den Wert des `aria-modal` Attributs.
- [`ElementInternals.ariaModal`](/de/docs/Web/API/ElementInternals/ariaModal)
  - : Die [`ariaModal`](/de/docs/Web/API/ElementInternals/ariaModal) Eigenschaft, Teil der [`ElementInternals`](/de/docs/Web/API/ElementInternals) Schnittstelle, reflektiert den Wert des `aria-modal` Attributs.

## Zugehörige Rollen

Verwendet in Rollen:

- [`window`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/window_role)

Erbt in Rollen:

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
