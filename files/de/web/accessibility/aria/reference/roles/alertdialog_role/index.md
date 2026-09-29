---
title: "ARIA: Rolle alertdialog"
short-title: alertdialog
slug: Web/Accessibility/ARIA/Reference/Roles/alertdialog_role
l10n:
  sourceCommit: 705109e85b6c5a9142260c58a617ef295b3b1316
---

Die Rolle **alertdialog** wird für modale Warndialoge verwendet, die den Arbeitsablauf von Benutzerinnen und Benutzern unterbrechen, um eine wichtige Nachricht mitzuteilen und eine Antwort zu verlangen.

## Beschreibung

Die Rolle `alertdialog` wird verwendet, um Benutzerinnen und Benutzer über dringende Informationen zu benachrichtigen, die ihre sofortige Aufmerksamkeit erfordern. Wenn das Element, das den Dialog enthält, mit `role="alertdialog"` versehen wird, können assistive Technologien den Inhalt als zusammengehörig und vom übrigen Seiteninhalt getrennt erkennen. Beispiele sind Fehlermeldungen, die eine Bestätigung erfordern, und andere Aufforderungen, eine Aktion zu bestätigen.

Wie der Name nahelegt, verbindet `alertdialog` die Rollen [`dialog`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role) und [`alert`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role). `alertdialog` ist eine Art von `dialog` mit ähnlichen Anwendungsfällen wie `alert`, wird aber verwendet, wenn eine Antwort erforderlich ist.

> [!NOTE]
> Die Rolle `alertdialog` sollte nur für Warnmeldungen mit zugehörigen interaktiven Steuerelementen verwendet werden. Wenn ein Warndialog ausschließlich statischen Inhalt und keinerlei interaktive Steuerelemente enthält, verwenden Sie stattdessen [`alert`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role).

Da `alertdialog` eine Art von Dialog ist, gelten auch für diese Rolle die Zustände, Eigenschaften und Anforderungen an den Tastaturfokus der Rolle [`dialog`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role).

Da Warndialoge dringend sind und den Arbeitsablauf unterbrechen, sollten sie [modal](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-modal) sein.

Der Warndialog muss mindestens ein fokussierbares Steuerelement enthalten – beispielsweise „Bestätigen“, „Schließen“ oder „Abbrechen“. Wenn der Warndialog erscheint, muss der Fokus auf dieses Steuerelement gesetzt werden. Warndialoge können weitere interaktive Steuerelemente wie Textfelder und Kontrollkästchen enthalten.

Die Rolle `alertdialog` darf nicht als Ersatz für andere Dialoge verwendet werden, darunter `alert`-Dialoge ohne erforderliche Bestätigung ([`Window.alert()`](/de/docs/Web/API/Window/alert)) und Eingabeaufforderungen ([`Window.prompt()`](/de/docs/Web/API/Window/prompt)).

`role="alertdialog"` allein reicht nicht aus, um einen Warndialog barrierefrei zu machen. Wichtig sind außerdem:

- Eine Beschriftung des Warndialogs wird dringend empfohlen.
- Der Tastaturfokus muss korrekt verwaltet werden.

Ein barrierefreier Name für die Rolle `alertdialog` wird dringend empfohlen, auch wenn ARIA ihn nicht vorschreibt. Definieren Sie den barrierefreien Namen mit [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label). Der Text des Warndialogs muss mithilfe von [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) eine {{Glossary("accessible_description", "barrierefreie Beschreibung")}} erhalten.

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
  - : Verwenden Sie dieses Attribut, um den Warndialog zu beschriften. Der Wert von `aria-labelledby` ist in der Regel die ID des Elements, das den Titel des Warndialogs enthält.

- [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)
  - : Verwenden Sie dieses Attribut, um die Beschreibung des Warndialoginhalts anzugeben. Der Wert von `aria-describedby` ist in der Regel die ID des Elements, das die Nachricht des Warndialogs enthält und üblicherweise direkt auf den Titel folgt.

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

Der obige Codeausschnitt zeigt, wie ein Warndialog ausgezeichnet wird, der lediglich eine Nachricht und eine OK-Schaltfläche enthält.

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

- HTML-Element {{HTMLElement("dialog")}}
- [Die Rolle `dialog`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role)
- [Die Rolle `alert`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role)
- [Das Attribut `aria-modal`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-modal)
- [`Window.alert()`](/de/docs/Web/API/Window/alert)
- [`Window.prompt()`](/de/docs/Web/API/Window/prompt)
