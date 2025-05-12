---
title: "ARIA: alertdialog Rolle"
short-title: alertdialog
slug: Web/Accessibility/ARIA/Reference/Roles/alertdialog_role
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Die **alertdialog**-Rolle soll bei modalen Benachrichtigungsdialogen verwendet werden, die den Arbeitsablauf eines Benutzers unterbrechen, um eine wichtige Nachricht zu kommunizieren und eine Antwort zu verlangen.

## Beschreibung

Die `alertdialog`-Rolle wird verwendet, um Benutzer über dringende Informationen zu informieren, die die sofortige Aufmerksamkeit des Benutzers erfordern. Die Einschließung von `role="alertdialog"` im Element, das den Dialog enthält, hilft unterstützender Technologie, den Inhalt als gruppiert und vom Rest des Seiteninhalts getrennt zu identifizieren. Beispiele sind Fehlermeldungen, die eine Bestätigung erfordern, und andere Aufforderungen zur Aktionsbestätigung.

Wie der Name schon sagt, ist `alertdialog` eine Kombination der Rollen [`dialog`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role) und [`alert`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role). `Alertdialog` ist eine Art von `dialog` mit ähnlichen Anwendungsfällen wie `alert`, jedoch wenn eine Benutzerantwort erforderlich ist.

> [!NOTE]
> Die `alertdialog`-Rolle sollte nur für Warnmeldungen verwendet werden, die mit interaktiven Steuerelementen verbunden sind. Wenn ein Warnungsdialog nur statische Inhalte enthält und überhaupt keine interaktiven Steuerelemente hat, verwenden Sie stattdessen [`alert`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role).

Als eine Art von Dialog sind die Zustände, Eigenschaften und Tastaturfokusanforderungen der [`dialog`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role)-Rolle auch auf die `alertdialog`-Rolle anwendbar.

Aufgrund seiner dringlichen Natur, die den Arbeitsablauf des Benutzers unterbricht, sollten Warnungsdialoge [modal](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-modal) sein.

Der Warnungsdialog muss mindestens ein fokussierbares Steuerelement haben — wie Bestätigen, Schließen und Abbrechen — und der Fokus muss auf dieses Steuerelement verschoben werden, wenn der Warnungsdialog erscheint. Warnungsdialoge können zusätzliche interaktive Steuerelemente wie Textfelder und Kontrollkästchen haben.

Die `alertdialog`-Rolle darf nicht als Ersatz für andere Dialoge verwendet werden, einschließlich keine Bestätigung erfordernder `alert`-Dialoge ([`Window.alert()`](/de/docs/Web/API/Window/alert)) und Eingabeaufforderungen ([`Window.prompt()`](/de/docs/Web/API/Window/prompt)).

Das Hinzufügen von `role="alertdialog"` allein reicht nicht aus, um einen Warnungsdialog zugänglich zu machen. Folgendes muss ebenfalls getan werden:

- Der Warnungsdialog muss ordnungsgemäß beschriftet sein
- Der Tastaturfokus muss korrekt verwaltet werden

Der `alertdialog` muss einen zugänglichen Namen haben, der mit [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) definiert ist. Der Warnungsdialogtext muss eine {{Glossary("accessible_description", "zugängliche Beschreibung")}} mit [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) haben.

### Zugehörige WAI-ARIA Rollen, Zustände und Eigenschaften

- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)

  - : Verwenden Sie dieses Attribut, um das `alertdialog` zu beschriften. Das `aria-labelledby`-Attribut ist im Allgemeinen die ID des Elements, das das `alertdialog` betitelt.

- [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)
  - : Verwenden Sie dieses Attribut, um die Beschreibung des Inhalts des Warnungsdialoges zu umfassen. Der Wert des `aria-describedby`-Attributs ist im Allgemeinen die ID des Elements, das die Nachricht des Warnungsdialoges enthält, meist unmittelbar nach dem Titel.

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

Der obige Codeausschnitt zeigt, wie ein Warnungsdialog markiert wird, der nur eine Nachricht und eine OK-Schaltfläche bietet.

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
      <button type="button" onclick="closeThis()">No</button>
    </li>
    <li>
      <button
        type="button"
        aria-controls="form"
        id="delete_file_confirm"
        onclick="deleteFile()">
        Yes
      </button>
    </li>
  </ul>
</div>
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
