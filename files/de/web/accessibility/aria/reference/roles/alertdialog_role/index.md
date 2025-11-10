---
title: "ARIA: alertdialog-Rolle"
short-title: alertdialog
slug: Web/Accessibility/ARIA/Reference/Roles/alertdialog_role
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

Die **alertdialog**-Rolle wird bei modalen Alert-Dialogen verwendet, die den Arbeitsablauf eines Benutzers unterbrechen, um eine wichtige Nachricht zu kommunizieren und eine Antwort zu verlangen.

## Beschreibung

Die `alertdialog`-Rolle wird verwendet, um Benutzer über dringende Informationen zu informieren, die sofortige Aufmerksamkeit erfordern. Das Hinzufügen von `role="alertdialog"` zu dem Element, das den Dialog enthält, hilft unterstützenden Technologien, den Inhalt als gruppiert zu identifizieren und vom Rest der Seiteninhalte zu trennen. Beispiele umfassen Fehlermeldungen, die eine Bestätigung erfordern, und andere Aufforderungen zur Aktionsbestätigung.

Wie der Name schon sagt, ist `alertdialog` eine Kombination aus den Rollen [`dialog`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role) und [`alert`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role). `alertdialog` ist eine Art von `dialog` mit ähnlichen Anwendungsfällen wie `alert`, jedoch wenn eine Benutzerantwort erforderlich ist.

> [!NOTE]
> Die `alertdialog`-Rolle sollte nur für Warnmeldungen verwendet werden, die interaktive Steuerelemente enthalten. Wenn ein Alert-Dialog nur statischen Inhalt enthält und überhaupt keine interaktiven Steuerelemente hat, verwenden Sie stattdessen [`alert`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role).

Da `alertdialog` eine Art von Dialog ist, gelten die Zustände, Eigenschaften und Tastaturfokusanforderungen der [`dialog`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role)-Rolle auch für die `alertdialog`-Rolle.

Aufgrund seiner dringenden Natur und der Unterbrechung des Benutzerarbeitsflusses sollten Alert-Dialoge [modal](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-modal) sein.

Der Alert-Dialog muss mindestens ein fokussierbares Steuerelement haben, wie z.B. Bestätigen, Schließen oder Abbrechen, und der Fokus muss auf dieses Steuerelement verschoben werden, wenn der Alert-Dialog erscheint. Alert-Dialoge können zusätzliche interaktive Steuerelemente wie Textfelder und Kontrollkästchen haben.

Die `alertdialog`-Rolle soll nicht als Ersatz für andere Dialoge verwendet werden, einschließlich nicht bestätigungsbedürftiger `alert`-Dialoge ([`Window.alert()`](/de/docs/Web/API/Window/alert)) und Eingabeaufforderungen ([`Window.prompt()`](/de/docs/Web/API/Window/prompt)).

Das bloße Hinzufügen von `role="alertdialog"` reicht nicht aus, um einen Alert-Dialog barrierefrei zu gestalten. Folgendes muss ebenfalls getan werden:

- Der Alert-Dialog muss korrekt beschriftet sein
- Der Tastaturfokus muss korrekt verwaltet werden

Die `alertdialog` muss einen zugänglichen Namen haben, der mit [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) definiert wird. Der Text des Alert-Dialogs muss eine {{Glossary("accessible_description", "zugängliche Beschreibung")}} mittels [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) besitzen.

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)

  - : Verwenden Sie dieses Attribut, um den alertdialog zu kennzeichnen. Das `aria-labelledby`-Attribut ist im Allgemeinen die ID des Elements, das verwendet wird, um den alertdialog zu betiteln.

- [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)
  - : Verwenden Sie dieses Attribut, um die Beschreibung des Inhalts des Alert-Dialogs zu umfassen. Der Wert des `aria-describedby`-Attributs ist in der Regel die ID des Elements, das die Nachrichten des Alert-Dialogs enthält, und folgt normalerweise direkt nach dem Titel.

## Beispiele

### Beispiel 1: Ein grundlegender Alert-Dialog

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

Der obige Code zeigt, wie ein Alert-Dialog markiert wird, der nur eine Nachricht und einen OK-Button bietet.

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

- HTML {{HTMLElement("dialog")}}-Element
- [Die `dialog`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role)
- [Die `alert`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role)
- [`aria-modal`-Attribut](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-modal)
- [`Window.alert()`](/de/docs/Web/API/Window/alert)
- [`Window.prompt()`](/de/docs/Web/API/Window/prompt)
