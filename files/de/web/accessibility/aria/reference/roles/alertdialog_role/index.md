---
title: "ARIA: Rolle alertdialog"
short-title: alertdialog
slug: Web/Accessibility/ARIA/Reference/Roles/alertdialog_role
l10n:
  sourceCommit: c1564acf160ef4b320fb7b89ab65211b9c50cf1b
---

Die **alertdialog**-Rolle wird bei modalen Alarmdialogen verwendet, die den Arbeitsablauf eines Benutzers unterbrechen, um eine wichtige Nachricht zu übermitteln und eine Antwort zu verlangen.

## Beschreibung

Die `alertdialog`-Rolle wird verwendet, um Benutzer über dringende Informationen zu informieren, die die sofortige Aufmerksamkeit des Benutzers erfordern. Durch die Einbeziehung von `role="alertdialog"` in das Element, das den Dialog enthält, kann unterstützende Technologie den Inhalt als gruppiert und vom Rest des Seiteninhalts getrennt identifizieren. Beispiele sind Fehlermeldungen, die eine Bestätigung erfordern, und andere Bestätigungsaufforderungen für Aktionen.

Wie der Name schon sagt, ist `alertdialog` eine Verschmelzung der Rollen [`dialog`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role) und [`alert`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role). `alertdialog` ist eine Art von `dialog` mit ähnlichen Anwendungsfällen wie `alert`, jedoch wird eine Benutzerantwort benötigt.

> [!NOTE]
> Die `alertdialog`-Rolle sollte nur für Alarmmeldungen verwendet werden, die mit interaktiven Steuerelementen verbunden sind. Wenn ein Alarmdialog nur statische Inhalte enthält und keine interaktiven Steuerelemente aufweist, verwenden Sie stattdessen [`alert`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role).

Da es sich um eine Art Dialog handelt, sind die Zustände, Eigenschaften und Anforderungen an die Tastaturfokussierung der [`dialog`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role)-Rolle auch für die `alertdialog`-Rolle anwendbar.

Aufgrund seiner dringenden Natur, die den Arbeitsablauf des Benutzers unterbricht, sollten Alarmdialoge [modal](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-modal) sein.

Der Alarmdialog muss mindestens ein fokussierbares Steuerelement haben — wie Bestätigen, Schließen und Abbrechen — und der Fokus muss auf dieses Steuerelement verschoben werden, wenn der Alarmdialog angezeigt wird. Alarmdialoge können zusätzliche interaktive Steuerelemente wie Textfelder und Kontrollkästchen enthalten.

Die `alertdialog`-Rolle darf nicht als Ersatz für andere Dialoge verwendet werden, einschließlich solcher ohne Bestätigungsbedarf `alert`-Dialoge ([`Window.alert()`](/de/docs/Web/API/Window/alert)) und Eingabeaufforderungen ([`Window.prompt()`](/de/docs/Web/API/Window/prompt)).

Das bloße Hinzufügen von `role="alertdialog"` reicht nicht aus, um einen Alarmdialog zugänglich zu machen. Folgendes muss ebenfalls durchgeführt werden:

- Der Alarmdialog muss richtig gekennzeichnet sein
- Der Tastaturfokus muss korrekt verwaltet werden

Der `alertdialog` muss einen zugänglichen Namen haben, definiert durch [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label). Der Text des Alarmdialogs muss eine {{Glossary("accessible_description", "zugängliche Beschreibung")}} mit [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) haben.

### Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)

  - : Verwenden Sie dieses Attribut, um den alertdialog zu kennzeichnen. Das `aria-labelledby`-Attribut ist in der Regel die ID des Elements, das den alertdialog betitelt.

- [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)
  - : Verwenden Sie dieses Attribut, um die Beschreibung des Inhalts des Alarmdialogs zu beinhalten. Der Wert des `aria-describedby`-Attributs ist in der Regel die ID des Elements, das die Nachricht des Alarmdialogs enthält, und es folgt normalerweise direkt nach dem Titel.

## Beispiele

### Beispiel 1: Ein einfacher Alarmdialog

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

Der obige Code-Schnipsel zeigt, wie ein Alarmdialog markiert wird, der nur eine Nachricht und einen OK-Button bietet.

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
- [Die `dialog`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role)
- [Die `alert`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role)
- [`aria-modal` Attribut](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-modal)
- [`Window.alert()`](/de/docs/Web/API/Window/alert)
- [`Window.prompt()`](/de/docs/Web/API/Window/prompt)
