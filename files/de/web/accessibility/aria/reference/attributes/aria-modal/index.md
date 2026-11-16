---
title: "ARIA: aria-modal-Attribut"
short-title: aria-modal
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-modal
l10n:
  sourceCommit: d9e522ed63f204df4b9ab3ed6c8208ce089fa868
---

Das Attribut `aria-modal` gibt an, ob ein Element bei seiner Anzeige modal ist.

## Beschreibung

Ein Inhaltsbereich ist „modal“, wenn die Navigation auf diesen Bereich beschränkt und der Hintergrund (die übergeordneten und benachbarten Elemente des modalen Elements) ausgeblendet ist. Wird `aria-modal="true"` auf Container mit der Rolle [`dialog`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role) oder [`alertdialog`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alertdialog_role) gesetzt, signalisiert dies Nutzern assistiver Technologien, dass ein modales Element vorhanden ist. Das Element wird dadurch jedoch nicht tatsächlich modal. Die dafür erforderlichen Funktionen müssen von Entwicklern implementiert werden.

> [!NOTE]
> ARIA verändert nur den Barrierefreiheitsbaum und damit, wie assistive Technologien Ihren Nutzern die Inhalte präsentieren. ARIA ändert weder die Funktion noch das Verhalten eines Elements. Um einen modalen Effekt zu erzeugen, müssen Sie JavaScript verwenden, um Verhalten, Fokus und ARIA-Zustände zu verwalten.

`aria-modal="true"` ist nur für Container mit der Rolle `dialog` oder `alertdialog` relevant. Es signalisiert assistiven Technologien, dass Nutzer den modalen Dialog schließen müssen oder dieser anderweitig den Fokus verlieren muss, bevor sie mit anderen Inhalten der Seite interagieren oder darauf zugreifen können.

Bei modalen Dialogen werden Inhalte angezeigt, während die Interaktion der Nutzer bis zum Schließen des Dialogs auf diesen Bereich beschränkt ist.

Wenn Sie modale Dialoge erstellen, signalisiert `aria-modal="true"` assistiven Technologien, dass die Fenster unter dem aktuellen Dialog nicht zum modalen Inhalt gehören.

Wenn ein modales Element angezeigt wird, sollte der Fokus in dieses Element gesetzt werden. Solange es sichtbar ist, muss der Fokus darin „eingeschlossen“ bleiben, bis das Element geschlossen wird. Assistive Technologien (<abbr>AT</abbr>) können dann durch den Inhalt des modalen Elements navigieren und dessen Umfang erfassen. Das Attribut `aria-modal` hilft assistiven Technologien, die Grenzen des modalen Elements zu vermitteln und es vom übrigen Seiteninhalt zu unterscheiden. Nach dem Schließen sollte der Fokus zu dem Element zurückkehren, das den modalen Dialog geöffnet hat.

Stellen Sie sicher, dass sich der modale Dialog ausschließlich über seine Nachfahrenelemente bedienen lässt. Wenn ein modaler Dialog eine Schaltfläche zum Schließen hat, sollte diese im DOM ein Nachfahrenelement des Dialogcontainers sein.

Wenn ein modales Element angezeigt wird, **sollten** Autoren alle anderen Inhalte als inert kennzeichnen (beispielsweise als „inerte Teilbäume“ in HTML). Deaktivierte Inhalte sind nicht inert. Mit inerten Inhalten kann weder in normalen noch in speziellen Navigationsmodi interagiert werden. Zu diesen Modi gehört die Navigation mit Textcursor, mit der Nutzer assistiver Technologien eine Seite im Detail erkunden können. Das gilt auch für deaktivierte Inhalte, deren Inhalt möglicherweise eine Bedeutung vermittelt.

Das Attribut [`inert`](/de/docs/Web/HTML/Reference/Global_attributes/inert) ist ein boolesches Attribut. Wenn es vorhanden ist, werden das Element und alle seine Nachfahren einschließlich derjenigen im Shadow DOM inert.

Wenn Sie `aria-modal="true"` auf einem [`dialog`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role) oder [`alertdialog`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alertdialog_role) verwenden, müssen Sie für Hintergrundinhalte kein [`aria-hidden`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden) setzen. `aria-modal` informiert assistive Technologien darüber, dass Inhalte außerhalb des Dialogs inert sind. Beachten Sie, dass die Unterstützung für das Element {{HTMLElement("dialog")}} zwar gut ist, gründliche Tests Ihrer Implementierung aber dennoch äußerst wichtig sind.

Wenn ein Dialog nicht modal ist – der Hintergrund also nicht inert ist und der Fokus nicht auf den Dialog beschränkt bleibt –, setzen Sie entweder `aria-modal="false"` oder lassen Sie das Attribut ganz weg.

## Werte

- `false` (Standardwert)
  - : Das Element ist nicht modal.
- `true`
  - : Das Element ist modal.

## Zugehörige Schnittstellen

- [`Element.ariaModal`](/de/docs/Web/API/Element/ariaModal)
  - : Die Eigenschaft [`ariaModal`](/de/docs/Web/API/Element/ariaModal) der Schnittstelle [`Element`](/de/docs/Web/API/Element) spiegelt den Wert des Attributs `aria-modal` wider.
- [`ElementInternals.ariaModal`](/de/docs/Web/API/ElementInternals/ariaModal)
  - : Die Eigenschaft [`ariaModal`](/de/docs/Web/API/ElementInternals/ariaModal) der Schnittstelle [`ElementInternals`](/de/docs/Web/API/ElementInternals) spiegelt den Wert des Attributs `aria-modal` wider.

## Zugehörige Rollen

Wird in folgenden Rollen verwendet:

- [`window`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/window_role)

Wird an folgende Rollen vererbt:

- [`alertdialog`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alertdialog_role)
- [`dialog`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role)

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

Dieses unvollständige Beispiel enthält einen `alertdialog` innerhalb eines bildschirmfüllenden, nicht scrollbareren Hintergrunds.

Die [`role="alertdialog"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alertdialog_role) kennzeichnet das Element, das als Container für den Warndialog dient. [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) gibt dem Warndialog einen barrierefreien Namen, indem es auf das Element mit dem Dialogtitel verweist. Das Attribut [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) gibt dem Warndialog eine {{Glossary("accessible_description", "barrierefreie Beschreibung")}}, indem es auf den Dialoginhalt verweist, der die wichtigste Mitteilung oder den Zweck des Warndialogs beschreibt.

`aria-modal="true"` informiert Nutzer assistiver Technologien darüber, dass die Inhalte unterhalb des Dialogs nicht interaktiv sind, solange das Element mit `role="alertdialog"` den Fokus hat.

Das Attribut `aria-modal` macht assistive Technologien auf den modalen Dialog aufmerksam, damit sie ihren Nutzern vermitteln können, dass die Inhalte dahinter deaktiviert sind. Wie alle ARIA-Attribute hat `aria-modal` selbst keine Auswirkungen auf die Funktionalität der Seite. Die Fokusverwaltung, das Deaktivieren und die Interaktivität von Hintergrundelementen sowie die Möglichkeit, den Fokus vom alertdialog zu entfernen, müssen mit JavaScript umgesetzt werden.

## Spezifikationen

{{Specifications}}

## Siehe auch

- HTML-Element {{HTMLElement("dialog")}}
- [Rolle `alertdialog`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alertdialog_role)
- [Rolle `dialog`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role)
- Globales HTML-Attribut [`inert`](/de/docs/Web/HTML/Reference/Global_attributes/inert)
- Eigenschaft [`inert`](/de/docs/Web/API/HTMLElement/inert) der HTMLElement-API
