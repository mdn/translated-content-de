---
title: "ARIA: alertdialog Rolle"
slug: Web/Accessibility/ARIA/Roles/alertdialog_role
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Die **alertdialog** Rolle wird für modale Warnmeldungsdialoge verwendet, die einen Arbeitsablauf des Benutzers unterbrechen, um eine wichtige Nachricht zu übermitteln und eine Antwort zu verlangen.

## Beschreibung

Die Rolle `alertdialog` wird verwendet, um Benutzer über dringende Informationen zu informieren, die ihre unmittelbare Aufmerksamkeit erfordern. Das Hinzufügen von `role="alertdialog"` zu dem Element, das den Dialog enthält, hilft assistierender Technologie, den Inhalt als gruppiert und vom restlichen Seiteninhalt getrennt zu erkennen. Beispiele umfassen Fehlermeldungen, die eine Bestätigung erfordern, sowie andere Bestätigungsmeldungen.

Wie der Name schon sagt, ist `alertdialog` eine Kombination aus den Rollen [`dialog`](/de/docs/Web/Accessibility/ARIA/Roles/dialog_role) und [`alert`](/de/docs/Web/Accessibility/ARIA/Roles/alert_role). `alertdialog` ist ein Typ von `dialog` mit ähnlichen Anwendungsfällen wie `alert`, aber für Situationen, in denen eine Benutzerantwort erforderlich ist.

> [!NOTE]
> Die Rolle `alertdialog` sollte nur für Warnmeldungen verwendet werden, die über zugehörige interaktive Steuerelemente verfügen. Wenn ein Warnmeldungsdialog nur statische Inhalte enthält und keine interaktiven Steuerelemente, sollte stattdessen [`alert`](/de/docs/Web/Accessibility/ARIA/Roles/alert_role) verwendet werden.

Als eine Art von Dialog gelten die Zustände, Eigenschaften und Tastaturfokusanforderungen der Rolle [`dialog`](/de/docs/Web/Accessibility/ARIA/Roles/dialog_role) auch für die Rolle `alertdialog`.

Aufgrund ihrer dringenden Natur, die den Arbeitsablauf des Benutzers unterbricht, müssen Warnmeldungsdialoge immer [modal](/de/docs/Web/Accessibility/ARIA/Attributes/aria-modal) sein.

Der Warnmeldungsdialog muss mindestens ein fokussierbares Steuerelement haben — wie Bestätigen, Schließen und Abbrechen — und der Fokus muss auf dieses Steuerelement verschoben werden, wenn der Warnmeldungsdialog erscheint. Alertdialogs können zusätzliche interaktive Steuerelemente wie Textfelder und Kontrollkästchen enthalten.

Die Rolle `alertdialog` darf nicht als Ersatz für andere Dialoge verwendet werden, einschließlich der keine Bestätigung erfordernden `alert` Dialoge ([`Window.alert()`](/de/docs/Web/API/Window/alert)) und Eingabeaufforderungen ([`Window.prompt()`](/de/docs/Web/API/Window/prompt)).

Das Hinzufügen von `role="alertdialog"` allein reicht nicht aus, um einen Warnmeldungsdialog barrierefrei zu gestalten. Folgendes muss ebenfalls getan werden:

- Der Warnmeldungsdialog muss ordnungsgemäß gekennzeichnet sein
- Der Tastaturfokus muss korrekt verwaltet werden

Das `alertdialog` muss einen zugänglichen Namen haben, definiert mit [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label). Der Text des Warnmeldungsdialogs muss eine {{Glossary("accessible_description", "zugängliche Beschreibung")}} mit [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) haben.

## Beispiele

### Beispiel 1: Ein einfacher Warnmeldungsdialog

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

Der obige Codeausschnitt zeigt, wie ein Warnmeldungsdialog mit nur einer Nachricht und einem OK-Button ausgezeichnet wird.

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

### Zugehörige WAI-ARIA Rollen, Zustände und Eigenschaften

- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)

  - : Verwenden Sie dieses Attribut, um das `alertdialog` zu kennzeichnen. Das `aria-labelledby` Attribut ist in der Regel die ID des Elements, das das `alertdialog` betitelt.

- [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby)
  - : Verwenden Sie dieses Attribut, um die Beschreibung der Inhalte des Warnmeldungsdialogs zu umfassen. Der Wert des `aria-describedby` Attributs ist in der Regel die ID des Elements, das die Nachrichten des Warnmeldungsdialogs enthält, üblicherweise direkt nach dem Titel.

## Spezifikationen

{{Specifications}}

## Siehe auch

- HTML {{HTMLElement("dialog")}} Element
- [Die `dialog` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/dialog_role)
- [Die `alert` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/alert_role)
- [`aria-modal` Attribut](/de/docs/Web/Accessibility/ARIA/Attributes/aria-modal)
- [`Window.alert()`](/de/docs/Web/API/Window/alert)
- [`Window.prompt()`](/de/docs/Web/API/Window/prompt)
