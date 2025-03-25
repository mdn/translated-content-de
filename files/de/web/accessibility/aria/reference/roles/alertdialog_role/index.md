---
title: "ARIA: alertdialog-Rolle"
slug: Web/Accessibility/ARIA/Reference/Roles/alertdialog_role
l10n:
  sourceCommit: ec98716dfe71c78db3f82ee3b1b9e7f68997fa19
---

Die **alertdialog**-Rolle wird für modale Warndialoge verwendet, die den Arbeitsablauf eines Benutzers unterbrechen, um eine wichtige Nachricht zu übermitteln und eine Antwort erfordern.

## Beschreibung

Die `alertdialog`-Rolle wird verwendet, um Benutzer über dringende Informationen zu informieren, die sofortige Aufmerksamkeit erfordern. Wenn `role="alertdialog"` dem Element hinzugefügt wird, das den Dialog enthält, hilft es assistiven Technologien, den Inhalt als gruppiert und vom Rest der Seiteninhalte getrennt zu identifizieren. Beispiele umfassen Fehlermeldungen, die eine Bestätigung erfordern, und andere Bestätigungsaufforderungen.

Wie der Name schon sagt, ist `alertdialog` eine Mischung aus den Rollen [`dialog`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role) und [`alert`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role). `alertdialog` ist eine Art `dialog` mit ähnlichen Anwendungsfällen wie `alert`, jedoch wenn eine Benutzerantwort erforderlich ist.

> [!NOTE]
> Die `alertdialog`-Rolle sollte nur für Warnmeldungen verwendet werden, die mit interaktiven Steuerelementen verbunden sind. Wenn ein Warndialog nur statische Inhalte enthält und überhaupt keine interaktiven Steuerelemente hat, verwenden Sie stattdessen [`alert`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role).

Da es sich um eine Art Dialog handelt, gelten auch die Zustände, Eigenschaften und Tastaturfokus-Anforderungen der [`dialog`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role)-Rolle für die `alertdialog`-Rolle.

Aufgrund seiner dringenden Natur sollte ein Warndialog den Arbeitsablauf des Benutzers unterbrechen und [modal](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-modal) sein.

Der Warndialog muss mindestens ein fokussierbares Steuerelement haben — wie Bestätigen, Schließen und Abbrechen — und der Fokus muss auf dieses Steuerelement verschoben werden, wenn der Warndialog erscheint. Warndialoge können zusätzliche interaktive Steuerelemente wie Textfelder und Kontrollkästchen haben.

Die `alertdialog`-Rolle sollte nicht als Ersatz für andere Dialoge verwendet werden, einschließlich `alert`-Dialoge, die keine Bestätigung erfordern ([`Window.alert()`](/de/docs/Web/API/Window/alert)) und Aufforderungen ([`Window.prompt()`](/de/docs/Web/API/Window/prompt)).

Allein das Hinzufügen von `role="alertdialog"` ist nicht ausreichend, um einen Warndialog barrierefrei zu gestalten. Folgendes muss ebenfalls erfolgen:

- Der Warndialog muss ordnungsgemäß beschriftet sein
- Der Tastaturfokus muss korrekt verwaltet werden

Das `alertdialog` muss einen zugänglichen Namen haben, definiert mit [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label). Der Text des Warndialogs muss eine {{Glossary("accessible_description", "zugängliche Beschreibung")}} mit [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) haben.

### Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)

  - : Verwenden Sie dieses Attribut, um das alertdialog zu beschriften. Das `aria-labelledby`-Attribut ist im Allgemeinen die ID des Elements, das das alertdialog betitelt.

- [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)
  - : Verwenden Sie dieses Attribut, um die Beschreibung der Inhalte des Warndialogs zu umfassen. Der Wert des `aria-describedby`-Attributs ist im Allgemeinen die ID des Elements, das die Nachricht des Warndialogs enthält, und kommt normalerweise direkt nach dem Titel.

## Beispiele

### Beispiel 1: Ein einfacher Warndialog

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

Der obige Codeausschnitt zeigt, wie man ein Warndialog markiert, das nur eine Nachricht und eine OK-Schaltfläche bietet.

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

- HTML {{HTMLElement("dialog")}}-Element
- [Die `dialog`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role)
- [Die `alert`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role)
- [`aria-modal`-Attribut](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-modal)
- [`Window.alert()`](/de/docs/Web/API/Window/alert)
- [`Window.prompt()`](/de/docs/Web/API/Window/prompt)
