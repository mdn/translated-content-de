---
title: "ARIA: alertdialog Rolle"
slug: Web/Accessibility/ARIA/Roles/alertdialog_role
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Die **alertdialog**-Rolle wird bei modalen Alarmdialogen verwendet, die den Arbeitsablauf eines Nutzers unterbrechen, um eine wichtige Nachricht zu übermitteln und eine Antwort zu erfordern.

## Beschreibung

Die `alertdialog`-Rolle wird verwendet, um Nutzer über dringende Informationen zu informieren, die sofortige Aufmerksamkeit erfordern. Das Hinzufügen von `role="alertdialog"` zu dem Element, das den Dialog enthält, hilft unterstützenden Technologien, den Inhalt als gruppiert und von anderen Seiteninhalten getrennt zu erkennen. Beispiele umfassen Fehlermeldungen, die eine Bestätigung erfordern, und andere Aktionsbestätigungsaufforderungen.

Wie der Name schon sagt, ist `alertdialog` eine Mischung aus den Rollen [`dialog`](/de/docs/Web/Accessibility/ARIA/Roles/dialog_role) und [`alert`](/de/docs/Web/Accessibility/ARIA/Roles/alert_role). `alertdialog` ist eine Art von `dialog` mit ähnlichen Anwendungsfällen wie `alert`, jedoch dann, wenn eine Benutzerantwort erforderlich ist.

> [!NOTE]
> Die `alertdialog`-Rolle sollte nur für Alarmmeldungen verwendet werden, die mit interaktiven Steuerelementen verbunden sind. Wenn ein Alarmdialog nur statische Inhalte enthält und keine interaktiven Steuerelemente besitzt, verwenden Sie stattdessen [`alert`](/de/docs/Web/Accessibility/ARIA/Roles/alert_role).

Da es sich um eine Art Dialog handelt, sind die Zustände, Eigenschaften und Anforderungen an die Tastaturfokussierung der [`dialog`](/de/docs/Web/Accessibility/ARIA/Roles/dialog_role)-Rolle auch auf die `alertdialog`-Rolle anwendbar.

Aufgrund seiner dringenden Natur, die den Arbeitsablauf des Nutzers unterbricht, müssen Alarmdialoge stets [modal](/de/docs/Web/Accessibility/ARIA/Attributes/aria-modal) sein.

Der Alarmdialog muss mindestens ein fokussierbares Steuerelement haben — wie Bestätigen, Schließen und Abbrechen — und der Fokus muss auf dieses Steuerelement verschoben werden, wenn der Alarmdialog erscheint. Alertdialogs können zusätzliche interaktive Steuerelemente wie Textfelder und Kontrollkästchen haben.

Die `alertdialog`-Rolle soll nicht als Ersatz für andere Dialoge verwendet werden, einschließlich keiner Bestätigung erfordernden `alert`-Dialoge ([`Window.alert()`](/de/docs/Web/API/Window/alert)) und Eingabeaufforderungen ([`Window.prompt()`](/de/docs/Web/API/Window/prompt)).

Das Hinzufügen von `role="alertdialog"` allein reicht nicht aus, um einen Alarmdialog zugänglich zu machen. Folgende Punkte müssen ebenfalls beachtet werden:

- Der Alarmdialog muss ordnungsgemäß beschriftet sein
- Der Tastaturfokus muss korrekt verwaltet werden

Das `alertdialog` muss einen zugänglichen Namen haben, der mit [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) definiert wird. Der Text des Alarmdialogs muss eine [zugängliche Beschreibung](/de/docs/Glossary/accessible_description) mittels [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) haben.

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

Das obige Codebeispiel zeigt, wie ein Alarmdialog mit einer Nachricht und einem OK-Button ausgezeichnet wird.

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

  - : Verwenden Sie dieses Attribut, um das alertdialog zu beschriften. Das `aria-labelledby`-Attribut ist in der Regel die ID des Elements, das verwendet wird, um das alertdialog zu betiteln.

- [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby)
  - : Verwenden Sie dieses Attribut, um die Beschreibung der Inhalte des Alarmdialogs zu umfassen. Der Wert des `aria-describedby`-Attributs ist in der Regel die ID des Elements, das die Nachrichten des Alarmdialogs enthält und üblicherweise direkt nach dem Titel kommt.

## Spezifikationen

{{Specifications}}

## Siehe auch

- HTML {{HTMLElement("dialog")}} Element
- [Die `dialog` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/dialog_role)
- [Die `alert` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/alert_role)
- [`aria-modal` Attribut](/de/docs/Web/Accessibility/ARIA/Attributes/aria-modal)
- [`Window.alert()`](/de/docs/Web/API/Window/alert)
- [`Window.prompt()`](/de/docs/Web/API/Window/prompt)
