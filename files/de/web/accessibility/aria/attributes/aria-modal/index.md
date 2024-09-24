---
title: aria-modal
slug: Web/Accessibility/ARIA/Attributes/aria-modal
l10n:
  sourceCommit: cb132bc83b660e51be8959de5336c00b08030104
---

{{AccessibilitySidebar}}

Das Attribut `aria-modal` gibt an, ob ein Element modal angezeigt wird.

## Beschreibung

Ein "modales" Inhaltselement bedeutet, dass die Navigation auf den Bereich selbst beschränkt ist und der Hintergrund (die Vorfahren und Geschwister des Modals) ausgeblendet ist. Das Setzen von `aria-modal="true"` auf [`dialog`](/de/docs/Web/Accessibility/ARIA/Roles/dialog_role)- und [`alertdialog` role](/de/docs/Web/Accessibility/ARIA/Roles/alertdialog_role)-Containern zeigt Benutzern assistiver Technologien das Vorhandensein eines "modales" Elements an, macht das Element jedoch nicht tatsächlich modal. Die Merkmale, die das Element tatsächlich modal machen, müssen vom Entwickler implementiert werden.

> [!NOTE]
> ARIA modifiziert nur den Barrierefreiheit-Baum und ändert, wie assistive Technologien den Inhalt Ihren Benutzern präsentieren. ARIA ändert nichts an der Funktionalität oder dem Verhalten eines Elements. Um einen modalen Effekt zu erzeugen, müssen Sie JavaScript verwenden, um Verhalten, Fokus und ARIA-Zustände zu verwalten.

Relevant nur für `dialog`- und `alertdialog`-Container: Das Setzen von `aria-modal="true"` gibt assistiven Technologien zu verstehen, dass der Benutzer wissen muss, dass die Möglichkeit, mit anderen Inhalten auf der Seite zu interagieren oder darauf zuzugreifen, erfordert, dass das modale Dialogfenster geschlossen oder anderweitig der Fokus verloren wird.

Modale Dialoge sind, wenn Inhalte angezeigt werden und die Benutzerinteraktion nur auf diesen Abschnitt beschränkt ist, bis er geschlossen wird.

Wenn Sie modale Dialoge erstellen, teilt `aria-modal="true"` assistiven Technologien mit, dass die Fenster unter dem aktuellen Dialog nicht Teil des modalen Inhalts sind.

Wenn ein modales Element angezeigt wird, sollte der Fokus im Modal platziert werden. Der Fokus muss "eingefangen" werden, wenn das Modal sichtbar ist, bis es geschlossen wird. Assistive Technologie (<abbr>AT</abbr>) kann dann den Inhalt des Modals navigieren und den Umfang des Modalinhalts verstehen. Das Attribut `aria-modal` hilft AT, die Grenzen des Modals zu kommunizieren und es von den übrigen Inhalten der Seite abzugrenzen. Wenn es geschlossen wird, sollte der Fokus auf das Element zurückkehren, das das Modal ausgelöst hat.

Stellen Sie sicher, dass das Modal nur mit seinen Nachkommenelementen steuerbar ist. Wenn ein modales Dialogfenster eine Schaltfläche zum Schließen hat, sollte diese Schaltfläche ein Nachfahre im Modal-Container innerhalb des DOM sein.

Wenn ein modales Element angezeigt wird, **sollten** Autoren alle anderen Inhalte als inaktiv markieren (wie "inert subtrees" im HTML). Deaktivierte Inhalte sind keine inaktiven Inhalte. Inaktive Inhalte können weder mit normalen noch spezialisierten Browsermodi wie Caretbrowsing, die es einem Assistive-Technology-Benutzer ermöglichen, eine Seite im Detail zu erkunden, interagiert werden. Dies schließt deaktivierte Inhalte ein, deren Inhalte möglicherweise eine Bedeutung haben.

Das [`inert`](/de/docs/Web/HTML/Global_attributes/inert)-Attribut ist ein boolesches Attribut, das durch seine Anwesenheit anzeigt, dass das Element und alle seine von Schatten eingeschlossenen Nachfahren inaktiv gemacht werden sollen. Bis [`HTMLElement.inert`](/de/docs/Web/API/HTMLElement/inert) vollständig unterstützt wird, können Inhalte mit JavaScript [inaktiv gemacht werden](https://samthor.au/2021/inert/).

Das Einfügen von `aria-modal="true"` in ein [`dialog`](/de/docs/Web/Accessibility/ARIA/Roles/dialog_role) oder [`alertdialog`](/de/docs/Web/Accessibility/ARIA/Roles/alertdialog_role) entfernt die Notwendigkeit, [`aria-hidden`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-hidden) auf Hintergrundinhalten zu setzen, da `aria-modal` assistiven Technologien signalisiert, dass Inhalte außerhalb eines Dialogs inaktiv sind. Beachten Sie, dass obwohl die Unterstützung für das {{HTMLElement("dialog")}}-Element gut ist, ein gründliches Testen Ihrer Implementierung von entscheidender Bedeutung ist.

Wenn ein Dialog nicht modal ist – kein inaktiver Hintergrund vorhanden ist und der Fokus nicht auf den Dialog beschränkt ist – fügen Sie entweder `aria-modal="false"` ein oder lassen Sie das Attribut ganz weg.

## Beispiel

```html
<div id="backdrop" class="no-scroll">
  <div
    role="alertdialog"
    aria-modal="true"
    aria-labelledby="dialog_label"
    aria-describedby="dialog_desc">
    <h2 id="dialog_label">Bestätigung</h2>
    <div id="dialog_desc">
      <p>Sind Sie sicher, dass Sie diese Datei löschen möchten?</p>
    </div>
    <button type="button" onclick="closeDialog(this)">
      Nein. Dieses Popup schließen.
    </button>
    <button type="button" onclick="deleteFile(this)">
      Ja. Datei löschen.
    </button>
  </div>
</div>
```

Dieses Teilbeispiel enthält ein `alertdialog` in einem vollbildschirmigen, nicht scrollbaren Hintergrund.

Die [`role="alertdialog"`](/de/docs/Web/Accessibility/ARIA/Roles/alertdialog_role) identifiziert das Element, das als Container für das Alarmlogo dient. Die [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) bietet dem Alarmlogo einen zugänglichen Namen, indem es auf das Element verweist, das den Titel des Alarmlogos bereitstellt. Das Attribut [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) gibt dem Alarmlogo eine {{glossary("zugängliche Beschreibung")}}, indem es auf den Inhalt des Alarmlogos verweist, der die Hauptnachricht oder den Zweck des Alarmlogos beschreibt.

Das `aria-modal="true"` informiert den Benutzer assistiver Technologien darüber, dass der Inhalt unterhalb des Dialogs nicht interaktiv ist, solange das Element mit der Deklaration `role="alertdialog"` den Fokus hat.

Das Attribut `aria-modal` zeigt assistiven Technologien das Vorhandensein des Modals an, damit die Deaktivierung des Inhalts hinter dem Modal an AT-Benutzer kommuniziert werden kann. Wie alle ARIA-Attribute hat `aria-modal` selbst keinen Effekt auf die Funktionalität der Seite; die Fokusverwaltung und Deaktivierung, Interaktivität auf Hintergrundelementen und die Möglichkeit, den Fokus vom Alarmlogo zu entfernen, müssen alle mit JavaScript verwaltet werden.

## Werte

- `false` (Standard)
  - : Element ist nicht modal.
- `true`
  - : Element ist modal.

## Zugehörige Schnittstellen

- {{domxref("Element.ariaModal")}}
  - : Die [`ariaModal`](/de/docs/Web/API/Element/ariaModal)-Eigenschaft, Teil der {{domxref("Element")}}-Schnittstelle, spiegelt den Wert des `aria-modal`-Attributs wider.
- {{domxref("ElementInternals.ariaModal")}}
  - : Die [`ariaModal`](/de/docs/Web/API/ElementInternals/ariaModal)-Eigenschaft, Teil der {{domxref("ElementInternals")}}-Schnittstelle, spiegelt den Wert des `aria-modal`-Attributs wider.

## Zugehörige Rollen

Verwendet in Rollen:

- [`window`](/de/docs/Web/Accessibility/ARIA/Roles/window_role)

Erbt in Rollen:

- [`alertdialog`](/de/docs/Web/Accessibility/ARIA/Roles/alertdialog_role)
- [`dialog`](/de/docs/Web/Accessibility/ARIA/Roles/dialog_role)

## Spezifikationen

{{Specifications}}

## Siehe auch

- HTML {{HTMLElement("dialog")}}-Element
- [`alertdialog` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/alertdialog_role)
- [`dialog` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/dialog_role)
- HTML [`inert` globales Attribut](/de/docs/Web/HTML/Global_attributes/inert)
- HTMLElement API [`inert`](/de/docs/Web/API/HTMLElement/inert)-Eigenschaft
