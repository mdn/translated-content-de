---
title: "ARIA: alertdialog-Rolle"
slug: Web/Accessibility/ARIA/Roles/alertdialog_role
l10n:
  sourceCommit: cdee0a0dd113ba64e8727dc82b42e0211fd27134
---

{{AccessibilitySidebar}}

Die **alertdialog**-Rolle soll für modale Alarmdialoge verwendet werden, die den Arbeitsablauf eines Nutzers unterbrechen, um eine wichtige Nachricht zu kommunizieren und eine Antwort erfordern.

## Beschreibung

Die `alertdialog`-Rolle wird verwendet, um Nutzer über dringende Informationen zu informieren, die sofortige Aufmerksamkeit erfordern. Das Einfügen von `role="alertdialog"` in das Element, das den Dialog enthält, hilft unterstützender Technologie, den Inhalt als gruppiert und vom Rest des Seiteninhalts getrennt zu erkennen. Beispiele umfassen Fehlermeldungen, die eine Bestätigung erfordern, und andere Aktionsbestätigungsaufforderungen.

Wie der Name schon sagt, ist `alertdialog` eine Mischung aus den Rollen [`dialog`](/de/docs/Web/Accessibility/ARIA/Roles/dialog_role) und [`alert`](/de/docs/Web/Accessibility/ARIA/Roles/alert_role). `alertdialog` ist eine Art von `dialog` mit ähnlichen Anwendungsfällen wie `alert`, jedoch für Situationen, in denen eine Nutzerantwort erforderlich ist.

> [!NOTE]
> Die `alertdialog`-Rolle sollte nur für Alarmmeldungen verwendet werden, die mit interaktiven Steuerungen verbunden sind. Wenn ein Alarmdialog nur statischen Inhalt enthält und keine interaktiven Steuerungen hat, verwenden Sie stattdessen [`alert`](/de/docs/Web/Accessibility/ARIA/Roles/alert_role).

Als Typ eines Dialogs sind die Zustände, Eigenschaften und Anforderungen an die Tastaturfokussierung der [`dialog`](/de/docs/Web/Accessibility/ARIA/Roles/dialog_role)-Rolle auch auf die `alertdialog`-Rolle anwendbar.

Aufgrund seiner dringenden Natur, die den Arbeitsablauf des Nutzers unterbricht, sollten Alarmdialoge [modal](/de/docs/Web/Accessibility/ARIA/Attributes/aria-modal) sein.

Der Alarmdialog muss mindestens eine fokussierbare Steuerung haben – wie Bestätigen, Schließen und Abbrechen – und der Fokus muss auf diese Steuerung gesetzt werden, wenn der Alarmdialog erscheint. Alarmdialoge können zusätzliche interaktive Steuerungen wie Textfelder und Kontrollkästchen enthalten.

Die `alertdialog`-Rolle soll nicht als Ersatz für andere Dialoge verwendet werden, einschließlich Dialogen ohne Bestätigungsanforderung wie `alert`-Dialoge ([`Window.alert()`](/de/docs/Web/API/Window/alert)) und Eingabeaufforderungen ([`Window.prompt()`](/de/docs/Web/API/Window/prompt)).

Alleine das Hinzufügen von `role="alertdialog"` ist nicht ausreichend, um einen Alarmdialog barrierefrei zu machen. Folgendes muss ebenfalls durchgeführt werden:

- Der Alarmdialog muss korrekt beschriftet sein
- Die Tastaturfokussierung muss korrekt verwaltet werden

Der `alertdialog` muss einen zugänglichen Namen haben, definiert mit [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label). Der Text des Alarmdialogs muss mit [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) eine {{Glossary("accessible_description", "zugängliche Beschreibung")}} haben.

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

Der obige Codeausschnitt zeigt, wie ein Alarmdialog markiert wird, der nur eine Nachricht und eine OK-Schaltfläche bietet.

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

### Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)

  - : Verwenden Sie dieses Attribut, um den alertdialog zu beschriften. Das `aria-labelledby`-Attribut ist in der Regel die ID des Elements, das den alertdialog betitelt.

- [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby)
  - : Verwenden Sie dieses Attribut, um die Beschreibung des Inhalts des Alarmdialogs zu umfassen. Der Wert des `aria-describedby`-Attributs ist in der Regel die ID des Elements, das die Nachricht des Alarmdialogs enthält und normalerweise direkt nach dem Titel kommt.

## Spezifikationen

{{Specifications}}

## Siehe auch

- HTML {{HTMLElement("dialog")}}-Element
- [Die `dialog`-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/dialog_role)
- [Die `alert`-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/alert_role)
- [`aria-modal`-Attribut](/de/docs/Web/Accessibility/ARIA/Attributes/aria-modal)
- [`Window.alert()`](/de/docs/Web/API/Window/alert)
- [`Window.prompt()`](/de/docs/Web/API/Window/prompt)
