---
title: aria-modal
slug: Web/Accessibility/ARIA/Attributes/aria-modal
l10n:
  sourceCommit: cb132bc83b660e51be8959de5336c00b08030104
---

{{AccessibilitySidebar}}

Das `aria-modal` Attribut gibt an, ob ein Element modal ist, wenn es angezeigt wird.

## Beschreibung

Ein Abschnitt von Inhalt ist "modal", wenn die Navigation auf den Bereich selbst beschränkt ist und der Hintergrund (die Vorgänger und Geschwister des Modals) verborgen ist. Das Setzen von `aria-modal="true"` auf [`dialog`](/de/docs/Web/Accessibility/ARIA/Roles/dialog_role) und [`alertdialog` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/alertdialog_role) Containern zeigt Nutzern von unterstützender Technologie das Vorhandensein eines "modalen" Elements an, macht das Element jedoch tatsächlich nicht modal. Die Funktionen, die das Element tatsächlich modal machen, müssen vom Entwickler implementiert werden.

> [!NOTE]
> ARIA modifiziert nur den Accessibility-Baum und verändert, wie unterstützende Technologien den Inhalt Ihren Nutzern präsentieren. ARIA ändert nichts an der Funktion oder dem Verhalten eines Elements. Um einen modalen Effekt zu erstellen, müssen Sie JavaScript verwenden, um Verhalten, Fokus und ARIA-Zustände zu verwalten.

Relevant nur für `dialog` und `alertdialog` Container, zeigt das Setzen von `aria-modal="true"` unterstützenden Technologien an, dem Nutzer mitzuteilen, dass die Möglichkeit, mit anderen Inhalten auf der Seite zu interagieren oder darauf zuzugreifen, erfordert, dass der modale Dialog geschlossen oder sonst die Fokussierung verloren gehen muss.

Modale Dialoge sind dann gegeben, wenn Inhalt angezeigt wird und die Interaktion des Benutzers nur auf diesen Abschnitt beschränkt ist, bis er geschlossen wird.

Beim Erstellen von modalen Dialogen zeigt `aria-modal="true"` unterstützenden Technologien, dass die Fenster unterhalb des aktuellen Dialogs nicht Teil des modalen Inhalts sind.

Wenn ein modales Element angezeigt wird, sollte der Fokus auf das Modal gerichtet werden. Der Fokus muss im Modal "eingefangen" bleiben, solange es sichtbar ist, bis es geschlossen wird. Unterstützende Technologien (<abbr>AT</abbr>) können dann den Inhalt des Modals navigieren und den Umfang des Modalinhaltes verstehen. Das `aria-modal` Attribut hilft AT, die Grenzen des Modals zu kommunizieren und es vom Rest des Seiteninhalts zu unterscheiden. Wenn das Modal geschlossen wird, sollte der Fokus zu dem Element zurückkehren, das das Modal ausgelöst hat.

Stellen Sie sicher, dass das Modal nur mit seinen untergeordneten Elementen steuerbar ist. Wenn ein modaler Dialog einen Schließen-Button hat, sollte sich der Button als Nachkomme innerhalb des Modalcontainers im DOM befinden.

Wenn ein modales Element angezeigt wird, **sollten** Autoren alle anderen Inhalte als inaktiv kennzeichnen (wie zum Beispiel "inaktive Teilbäume" in HTML). Deaktivierter Inhalt ist nicht inaktiver Inhalt. Inaktiver Inhalt kann weder im normalen noch im speziellen Browsing-Modus wie dem Caret-Browsing, den ein Nutzer von unterstützender Technologie verwendet, um eine Seite im Detail zu erkunden, angesprochen werden. Dazu gehört auch deaktivierter Inhalt, dessen Inhalt möglicherweise Bedeutung vermittelt.

Das [`inert`](/de/docs/Web/HTML/Global_attributes/inert) Attribut ist ein boolesches Attribut, das durch seine Anwesenheit anzeigt, dass das Element und alle seine Nachkommen mit Schatten-Dom inaktiv gemacht werden sollen. Bis [`HTMLElement.inert`](/de/docs/Web/API/HTMLElement/inert) vollständig unterstützt wird, kann Inhalt [mit JavaScript inaktiv gemacht werden](https://samthor.au/2021/inert/).

Das Einfügen von `aria-modal="true"` in ein [`dialog`](/de/docs/Web/Accessibility/ARIA/Roles/dialog_role) oder [`alertdialog`](/de/docs/Web/Accessibility/ARIA/Roles/alertdialog_role) entfernt die Notwendigkeit, [`aria-hidden`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-hidden) auf Hintergrundinhalten zu setzen, da `aria-modal` unterstützenden Technologien mitteilt, dass Inhalte außerhalb eines Dialogs inaktiv sind. Beachten Sie, dass obwohl die Unterstützung des {{HTMLElement("dialog")}} Elements gut ist, ein gründliches Testen Ihrer Implementierung von entscheidender Bedeutung ist.

Wenn ein Dialog nicht modal ist — es gibt keinen inaktiven Hintergrund und der Fokus ist nicht auf den Dialog beschränkt —entweder `aria-modal="false"` hinzufügen oder das Attribut ganz weglassen.

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

Dieses Teilbeispiel beinhaltet ein `alertdialog`, das in einem Vollbildmodus nicht-scrollbaren Hintergrund eingebettet ist.

Die [`role="alertdialog"`](/de/docs/Web/Accessibility/ARIA/Roles/alertdialog_role) identifiziert das Element, das als Container für das Warndialog dient. Das [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) gibt dem Warndialog einen zugänglichen Namen, indem es auf das Element verweist, das den Titel des Warndialogs bereitstellt. Das [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) Attribut gibt dem Warndialog eine [zugängliche Beschreibung](/de/docs/Glossary/accessible_description), indem es auf den Warndialoginhalt verweist, der die Hauptnachricht oder den Zweck des Warndialogs beschreibt.

Das `aria-modal="true"` informiert den Nutzer der unterstützenden Technologie, dass der Inhalt unterhalb des Dialogs nicht interaktiv ist, solange das Element mit einer Deklaration `role="alertdialog"` den Fokus hat.

Das `aria-modal` Attribut legt die Existenz des Modals für unterstützende Technologien offen, damit das Deaktivieren der Inhalte hinter dem Modal den AT-Nutzern mitgeteilt werden kann. Wie alle ARIA-Attribute hat `aria-modal` selbst keinen Einfluss auf die Funktionalität der Seite; die Fokusssteuerung und das Deaktivieren, die Interaktivität bei Hintergrundelementen, und die Fähigkeit den Fokus vom Alertdialog zu nehmen, müssen alle mit JavaScript verwaltet werden.

## Werte

- `false` (Standard)
  - : Element ist nicht modal.
- `true`
  - : Element ist modal.

## Zugehörige Schnittstellen

- [`Element.ariaModal`](/de/docs/Web/API/Element/ariaModal)
  - : Die [`ariaModal`](/de/docs/Web/API/Element/ariaModal) Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element) Schnittstelle, widerspiegelt den Wert des `aria-modal` Attributs.
- [`ElementInternals.ariaModal`](/de/docs/Web/API/ElementInternals/ariaModal)
  - : Die [`ariaModal`](/de/docs/Web/API/ElementInternals/ariaModal) Eigenschaft, Teil der [`ElementInternals`](/de/docs/Web/API/ElementInternals) Schnittstelle, widerspiegelt den Wert des `aria-modal` Attributs.

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
