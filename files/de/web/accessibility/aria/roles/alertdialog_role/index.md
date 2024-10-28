---
title: "ARIA: alertdialog-Rolle"
slug: Web/Accessibility/ARIA/Roles/alertdialog_role
l10n:
  sourceCommit: bea339d321513fc6d66d95c8f0305b9387fa57bb
---

{{AccessibilitySidebar}}

Die **alertdialog**-Rolle sollte bei modalen Alert-Dialogen verwendet werden, die den Arbeitsablauf der Nutzerin oder des Nutzers unterbrechen, um eine wichtige Nachricht zu kommunizieren und eine Antwort zu erfordern.

## Beschreibung

Die Rolle `alertdialog` wird verwendet, um Nutzerinnen und Nutzer über dringende Informationen zu benachrichtigen, die ihre sofortige Aufmerksamkeit erfordern. Das Einfügen von `role="alertdialog"` in das Element, das den Dialog enthält, hilft unterstützenden Technologien, den Inhalt als gruppiert und vom Rest des Seiteninhalts getrennt zu identifizieren. Beispiele sind Fehlermeldungen, die einer Bestätigung bedürfen, und andere Bestätigungshinweise für Aktionen.

Wie der Name impliziert, ist `alertdialog` eine Mischung aus den Rollen [`dialog`](/de/docs/Web/Accessibility/ARIA/Roles/dialog_role) und [`alert`](/de/docs/Web/Accessibility/ARIA/Roles/alert_role). `alertdialog` ist eine Art von `dialog` mit ähnlichen Anwendungsfällen wie `alert`, aber für Fälle, in denen eine Nutzerantwort erforderlich ist.

> [!NOTE]
> Die Rolle `alertdialog` sollte nur für Warnmeldungen verwendet werden, die interaktive Steuerungen enthalten. Wenn ein Alarmdialog nur statische Inhalte enthält und keine interaktiven Steuerungen, verwenden Sie stattdessen [`alert`](/de/docs/Web/Accessibility/ARIA/Roles/alert_role).

Da es sich um eine Art von Dialog handelt, gelten die Zustände, Eigenschaften und Tastaturfokusanforderungen der Rolle [`dialog`](/de/docs/Web/Accessibility/ARIA/Roles/dialog_role) auch für die Rolle `alertdialog`.

Aufgrund seiner dringenden Natur, die den Arbeitsablauf der Benutzer unterbricht, müssen Benachrichtigungsdialoge immer [modal](/de/docs/Web/Accessibility/ARIA/Attributes/aria-modal) sein.

Der Alarmdialog muss mindestens eine fokussierbare Steuerung haben — wie Bestätigen, Schließen und Abbrechen — und der Fokus muss auf diese Steuerung gerichtet werden, wenn der Alarmdialog erscheint. Benachrichtigungsdialoge können zusätzliche interaktive Steuerungen wie Textfelder und Kontrollkästchen haben.

Die Rolle `alertdialog` darf nicht als Ersatz für andere Dialoge verwendet werden, einschließlich der keine-Bestätigung-erfordernden `alert`-Dialoge ([`Window.alert()`](/de/docs/Web/API/Window/alert)) und Eingabeaufforderungen ([`Window.prompt()`](/de/docs/Web/API/Window/prompt)).

Nur das Hinzufügen von `role="alertdialog"` reicht nicht aus, um einen Alarmdialog barrierefrei zu gestalten. Folgendes muss ebenfalls geschehen:

- Der Alarmdialog muss ordnungsgemäß beschriftet sein.
- Der Tastaturfokus muss korrekt verwaltet werden.

Der `alertdialog` muss einen zugänglichen Namen haben, der mit [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) definiert ist. Der Text des Alarmdialogs muss eine {{Glossary("accessible_description", "zugängliche Beschreibung")}} mithilfe von [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) haben.

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

Der obige Codeausschnitt zeigt, wie ein Alarmdialog mit nur einer Nachricht und einer OK-Taste ausgezeichnet wird.

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

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)

  - : Verwenden Sie dieses Attribut, um den alertdialog zu beschriften. Das `aria-labelledby`-Attribut ist in der Regel die ID des Elements, das verwendet wird, um den alertdialog zu betiteln.

- [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby)
  - : Verwenden Sie dieses Attribut, um die Beschreibung des Inhalts des Alarmdialogs zu erfassen. Der Wert des `aria-describedby`-Attributs ist in der Regel die ID des Elements, das die Benachrichtigung des Alarmdialogs enthält, normalerweise unmittelbar nach dem Titel.

## Spezifikationen

{{Specifications}}

## Siehe auch

- HTML-{{HTMLElement("dialog")}}-Element
- [Die `dialog`-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/dialog_role)
- [Die `alert`-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/alert_role)
- [`aria-modal`-Attribut](/de/docs/Web/Accessibility/ARIA/Attributes/aria-modal)
- [`Window.alert()`](/de/docs/Web/API/Window/alert)
- [`Window.prompt()`](/de/docs/Web/API/Window/prompt)
