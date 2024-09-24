---
title: "ARIA: alertdialog Rolle"
slug: Web/Accessibility/ARIA/Roles/alertdialog_role
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Die **alertdialog**-Rolle wird bei modalen Alert-Dialogen verwendet, die den Arbeitsablauf eines Benutzers unterbrechen, um eine wichtige Nachricht zu kommunizieren und eine Antwort zu verlangen.

## Beschreibung

Die `alertdialog`-Rolle wird verwendet, um Benutzer auf dringende Informationen hinzuweisen, die deren sofortige Aufmerksamkeit erfordern. Durch das Hinzufügen von `role="alertdialog"` zu dem Element, das den Dialog enthält, kann unterstützende Technologie den Inhalt als gruppiert und vom Rest des Seiteninhalts getrennt erkennen. Beispiele umfassen Fehlermeldungen, die eine Bestätigung erfordern, und andere Aufforderungen zur Aktionsbestätigung.

Wie der Name schon sagt, ist `alertdialog` eine Kombination der Rollen [`dialog`](/de/docs/Web/Accessibility/ARIA/Roles/dialog_role) und [`alert`](/de/docs/Web/Accessibility/ARIA/Roles/alert_role). `alertdialog` ist eine Art von `dialog` mit ähnlichen Anwendungsfällen wie `alert`, jedoch für Situationen, in denen eine Benutzerreaktion erforderlich ist.

> [!NOTE]
> Die `alertdialog`-Rolle sollte nur für Alert-Nachrichten verwendet werden, die mit interaktiven Steuerelementen verbunden sind. Wenn ein Alert-Dialog nur statischen Inhalt enthält und überhaupt keine interaktiven Steuerelemente hat, verwenden Sie stattdessen [`alert`](/de/docs/Web/Accessibility/ARIA/Roles/alert_role).

Da es sich um eine Art Dialog handelt, sind die Zustände, Eigenschaften und Tastaturfokus-Anforderungen der [`dialog`](/de/docs/Web/Accessibility/ARIA/Roles/dialog_role)-Rolle auch auf die `alertdialog`-Rolle anwendbar.

Wegen seiner dringenden Natur und der Unterbrechung des Benutzerworkflows müssen Alert-Dialoge immer [modal](/de/docs/Web/Accessibility/ARIA/Attributes/aria-modal) sein.

Der Alert-Dialog muss mindestens ein fokussierbares Steuerelement haben — wie Bestätigen, Schließen und Abbrechen — und der Fokus muss auf dieses Steuerelement verschoben werden, wenn der Alert-Dialog erscheint. Alert-Dialoge können zusätzliche interaktive Steuerelemente wie Textfelder und Kontrollkästchen haben.

Die `alertdialog`-Rolle soll nicht als Ersatz für andere Dialoge verwendet werden, einschließlich `alert`-Dialogen ohne Bestätigungsanforderung ([`Window.alert()`](/de/docs/Web/API/Window/alert)) und Aufforderungen ([`Window.prompt()`](/de/docs/Web/API/Window/prompt)).

Das Hinzufügen von `role="alertdialog"` allein reicht nicht aus, um einen Alert-Dialog zugänglich zu machen. Zusätzlich müssen folgende Punkte beachtet werden:

- Der Alert-Dialog muss korrekt beschriftet sein
- Der Tastaturfokus muss korrekt verwaltet werden

Der `alertdialog` muss einen zugänglichen Namen haben, definiert durch [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label). Der Text des Alert-Dialogs muss eine {{glossary("accessible description")}} mit [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) haben.

## Beispiele

### Beispiel 1: Ein einfacher Alert-Dialog

```html
<div
  role="alertdialog"
  aria-labelledby="dialog1Title"
  aria-describedby="dialog1Desc">
  <div role="document" tabindex="0">
    <h2 id="dialog1Title">Ihre Anmeldesitzung läuft bald ab</h2>
    <p id="dialog1Desc">Um Ihre Sitzung zu verlängern, klicken Sie auf die OK-Schaltfläche</p>
    <button>OK</button>
  </div>
</div>
```

Der obige Codeausschnitt zeigt, wie ein Alert-Dialog ausgezeichnet wird, der nur eine Nachricht und eine OK-Schaltfläche bietet.

### Beispiel 2: Bestätigungsdialog mit zwei Optionen

```html
<div
  id="alert_dialog"
  role="alertdialog"
  aria-modal="true"
  aria-labelledby="dialog_label"
  aria-describedby="dialog_desc">
  <h2 id="dialog_label">Bestätigung</h2>
  <div id="dialog_desc">
    <p>Sind Sie sicher, dass Sie dieses Bild löschen möchten?</p>
    <p>Diese Änderung kann nicht rückgängig gemacht werden.</p>
  </div>
  <ul>
    <li>
      <button type="button" onclick="closeThis()">Nein</button>
    </li>
    <li>
      <button
        type="button"
        aria-controls="form"
        id="delete_file_confirm"
        onclick="deleteFile()">
        Ja
      </button>
    </li>
  </ul>
</div>
```

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)

  - : Verwenden Sie dieses Attribut, um den Alert-Dialog zu beschriften. Das `aria-labelledby` Attribut ist in der Regel die ID des Elements, das den Alert-Dialog betitelt.

- [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby)
  - : Verwenden Sie dieses Attribut, um die Beschreibung des Inhalts des Alert-Dialogs einzuschließen. Der Wert des `aria-describedby` Attributs ist in der Regel die ID des Elements, das die Nachricht des Alert-Dialogs enthält, die normalerweise direkt nach dem Titel kommt.

## Spezifikationen

{{Specifications}}

## Siehe auch

- HTML {{HTMLElement("dialog")}} Element
- [Die `dialog` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/dialog_role)
- [Die `alert` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/alert_role)
- [`aria-modal` Attribut](/de/docs/Web/Accessibility/ARIA/Attributes/aria-modal)
- [`Window.alert()`](/de/docs/Web/API/Window/alert)
- [`Window.prompt()`](/de/docs/Web/API/Window/prompt)
