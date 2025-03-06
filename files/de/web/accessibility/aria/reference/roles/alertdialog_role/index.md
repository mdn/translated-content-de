---
title: "ARIA: alertdialog role"
slug: Web/Accessibility/ARIA/Reference/Roles/alertdialog_role
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Die **alertdialog**-Rolle soll bei modalen Warnhinweisen verwendet werden, die den Arbeitsablauf eines Benutzers unterbrechen, um eine wichtige Nachricht zu kommunizieren und eine Reaktion erfordern.

## Beschreibung

Die `alertdialog`-Rolle wird verwendet, um Benutzer auf dringende Informationen aufmerksam zu machen, die die sofortige Aufmerksamkeit des Benutzers erfordern. Das Einfügen von `role="alertdialog"` in das Element, das den Dialog enthält, hilft unterstützenden Technologien dabei, den Inhalt als gruppiert zu identifizieren und vom restlichen Seiteninhalt zu trennen. Beispiele umfassen Fehlermeldungen, die eine Bestätigung erfordern, und andere Aufforderungen zur Aktionsbestätigung.

Wie der Name schon sagt, ist `alertdialog` eine Kombination der Rollen [`dialog`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role) und [`alert`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role). `alertdialog` ist eine Art `dialog`, der ähnliche Anwendungsfälle wie `alert` hat, jedoch eine Benutzerantwort erfordert.

> [!NOTE]
> Die `alertdialog`-Rolle sollte nur für Warnmeldungen verwendet werden, die mit interaktiven Steuerelementen verbunden sind. Wenn ein Warnhinweis nur statischen Inhalt enthält und keine interaktiven Steuerelemente hat, verwenden Sie stattdessen [`alert`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role).

Da es sich um eine Art Dialog handelt, gelten die Zustände, Eigenschaften und Tastaturfokusanforderungen der [`dialog`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role)-Rolle auch für die `alertdialog`-Rolle.

Aufgrund ihrer dringenden Natur, die den Arbeitsablauf des Benutzers unterbricht, sollten Warnhinweise [modal](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-modal) sein.

Der Warnhinweis muss mindestens ein fokussierbares Steuerelement haben — wie Bestätigen, Schließen und Abbrechen — und der Fokus muss auf dieses Steuerelement verschoben werden, wenn der Warnhinweis erscheint. Warnhinweise können zusätzliche interaktive Steuerelemente wie Textfelder und Kontrollkästchen haben.

Die `alertdialog`-Rolle darf nicht als Ersatz für andere Dialoge verwendet werden, einschließlich solcher `alert` Dialoge, die keine Bestätigung erfordern ([`Window.alert()`](/de/docs/Web/API/Window/alert)) und Aufforderungen ([`Window.prompt()`](/de/docs/Web/API/Window/prompt)).

Das bloße Hinzufügen von `role="alertdialog"` reicht nicht aus, um einen Warnhinweis zugänglich zu machen. Folgendes muss ebenfalls beachtet werden:

- Der Warnhinweis muss ordnungsgemäß gekennzeichnet sein
- Der Tastaturfokus muss korrekt verwaltet werden

Der `alertdialog` muss einen zugänglichen Namen haben, definiert mit [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label). Der Text des Warnhinweises muss eine {{Glossary("accessible_description", "zugängliche Beschreibung")}} mit [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) haben.

## Beispiele

### Beispiel 1: Ein einfacher Warnhinweis

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

Der obige Codeausschnitt zeigt, wie ein Warnhinweis mit nur einer Nachricht und einem OK-Button gekennzeichnet wird.

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

- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)

  - : Verwenden Sie dieses Attribut, um das alertdialog zu kennzeichnen. Das `aria-labelledby`-Attribut ist in der Regel die ID des Elements, das das alertdialog betitelt.

- [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)
  - : Verwenden Sie dieses Attribut, um die Beschreibung der Inhalte des Warnhinweises zu umfassen. Der Wert des `aria-describedby`-Attributs ist in der Regel die ID des Elements, das die Nachrichten des Warnhinweises enthält und meist direkt nach dem Titel folgt.

## Spezifikationen

{{Specifications}}

## Siehe auch

- HTML {{HTMLElement("dialog")}} Element
- [Die `dialog`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role)
- [Die `alert`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role)
- [`aria-modal` Attribut](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-modal)
- [`Window.alert()`](/de/docs/Web/API/Window/alert)
- [`Window.prompt()`](/de/docs/Web/API/Window/prompt)
