---
title: "ARIA: alertdialog-Rolle"
short-title: alertdialog
slug: Web/Accessibility/ARIA/Reference/Roles/alertdialog_role
l10n:
  sourceCommit: fc52eb81b630ca02c16addc346924295bdb5aaa8
---

Die **alertdialog**-Rolle sollte bei modalen Warnungsdialogen verwendet werden, die den Arbeitsablauf eines Benutzers unterbrechen, um eine wichtige Nachricht zu übermitteln und eine Antwort erfordern.

## Beschreibung

Die `alertdialog`-Rolle wird verwendet, um Benutzer über dringende Informationen zu benachrichtigen, die die sofortige Aufmerksamkeit des Benutzers erfordern. Das Hinzufügen von `role="alertdialog"` zu dem Element, das den Dialog enthält, hilft assistierenden Technologien, den Inhalt als gruppiert und vom Rest des Seiteninhalts getrennt zu identifizieren. Beispiele beinhalten Fehlermeldungen, die eine Bestätigung erfordern, sowie andere Bestätigungsaufforderungen für Aktionen.

Wie der Name schon sagt, ist `alertdialog` eine Mischung aus den Rollen [`dialog`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role) und [`alert`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role). `alertdialog` ist ein Typ von `dialog` mit ähnlichen Anwendungsfällen wie `alert`, jedoch für Fälle, in denen eine Benutzerantwort erforderlich ist.

> [!NOTE]
> Die `alertdialog`-Rolle sollte nur für Warnnachrichten verwendet werden, die mit interaktiven Steuerelementen verbunden sind. Wenn ein Warnungsdialog nur statischen Inhalt enthält und keinerlei interaktive Steuerelemente hat, verwenden Sie stattdessen [`alert`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role).

Da es sich um einen Typ von Dialog handelt, gelten die Zustände, Eigenschaften und Tastaturfokusanforderungen der Rolle [`dialog`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role) auch für die `alertdialog`-Rolle.

Aufgrund seiner dringenden Natur, die den Arbeitsablauf des Benutzers unterbricht, sollten Warnungsdialoge [modal](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-modal) sein.

Der Warnungsdialog muss mindestens ein fokussierbares Steuerelement haben, wie z.B. Bestätigen, Schließen und Abbrechen, und der Fokus muss auf dieses Steuerelement gelegt werden, wenn der Warnungsdialog erscheint. Warnungsdialoge können zusätzliche interaktive Steuerelemente wie Textfelder und Kontrollkästchen haben.

Die `alertdialog`-Rolle sollte nicht als Ersatz für andere Dialoge verwendet werden, einschließlich `alert`-Dialogen ohne Bestätigung ([`Window.alert()`](/de/docs/Web/API/Window/alert)) und Eingabeaufforderungen ([`Window.prompt()`](/de/docs/Web/API/Window/prompt)).

Nur das Hinzufügen von `role="alertdialog"` allein reicht nicht aus, um einen Warnungsdialog barrierefrei zu gestalten. Folgendes muss ebenfalls getan werden:

- Der Warnungsdialog muss richtig beschriftet sein
- Der Tastaturfokus muss korrekt verwaltet werden

Die `alertdialog` muss einen zugänglichen Namen haben, der mit [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) definiert ist. Der Text des Warnungsdialogs muss eine {{Glossary("accessible_description", "zugängliche Beschreibung")}} mit [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) besitzen.

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)

  - : Verwenden Sie dieses Attribut, um das alertdialog zu beschriften. Das `aria-labelledby`-Attribut ist im Allgemeinen die ID des Elements, das den Titel des alertdialog verwendet.

- [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)
  - : Verwenden Sie dieses Attribut, um die Beschreibung des Inhalts des Warnungsdialogs zu umfassen. Der Wert des `aria-describedby`-Attributs ist im Allgemeinen die ID des Elements, das die Nachricht des Warnungsdialogs enthält, üblicherweise direkt nach dem Titel.

## Beispiele

### Beispiel 1: Ein einfacher Warnungsdialog

```html
<div
  role="alertdialog"
  aria-labelledby="dialog1Title"
  aria-describedby="dialog1Desc">
  <div role="document" tabindex="0">
    <h2 id="dialog1Title">Your login session is about to expire</h2>
    <p id="dialog1Desc">To extend your session, click the OK button</p>
    <button>OK</button>
  </div>
</div>
```

Der obige Code-Schnipsel zeigt, wie man ein Warnungsdialog markiert, das nur eine Nachricht und eine OK-Taste bereitstellt.

### Beispiel 2: Bestätigungsdialog mit zwei Optionen

```html
<div
  id="alert_dialog"
  role="alertdialog"
  aria-modal="true"
  aria-labelledby="dialog_label"
  aria-describedby="dialog_desc">
  <h2 id="dialog_label">Confirmation</h2>
  <div id="dialog_desc">
    <p>Are you sure you want to delete this image?</p>
    <p>This change can't be undone.</p>
  </div>
  <ul>
    <li>
      <button id="close-btn" type="button">No</button>
    </li>
    <li>
      <button id="confirm-btn" type="button" aria-controls="form">Yes</button>
    </li>
  </ul>
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

## Spezifikationen

{{Specifications}}

## Siehe auch

- HTML {{HTMLElement("dialog")}} Element
- [Die `dialog` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role)
- [Die `alert` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role)
- [`aria-modal` Attribut](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-modal)
- [`Window.alert()`](/de/docs/Web/API/Window/alert)
- [`Window.prompt()`](/de/docs/Web/API/Window/prompt)
