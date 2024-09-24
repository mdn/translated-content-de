---
title: "Window: confirm() Methode"
short-title: confirm()
slug: Web/API/Window/confirm
l10n:
  sourceCommit: 6e1e6f1b9df61c05f1c5c84c2b6b7ea679e90362
---

{{ApiRef("Window")}}

Die Methode `window.confirm()` weist den Browser an, einen Dialog mit einer optionalen Nachricht anzuzeigen und zu warten, bis der Benutzer den Dialog entweder bestätigt oder abbricht.

Unter bestimmten Bedingungen – zum Beispiel, wenn der Benutzer die Tabs wechselt – kann es vorkommen, dass der Browser keinen Dialog anzeigt oder nicht auf die Bestätigung oder den Abbruch des Dialogs durch den Benutzer wartet.

## Syntax

```js-nolint
confirm()
confirm(message)
```

### Parameter

- `message` {{optional_inline}}
  - : Ein String, den Sie im Bestätigungsdialog anzeigen möchten.

### Rückgabewert

Ein Boolean, der anzeigt, ob OK (`true`) oder Abbrechen (`false`)
ausgewählt wurde. Falls ein Browser In-Page-Dialoge ignoriert, ist der zurückgegebene Wert immer
`false`.

## Beispiele

```js
if (window.confirm("Do you really want to leave?")) {
  window.open("exit.html", "Thanks for Visiting!");
}
```

Erzeugt:

![Firefox confirm](firefox_confirm_dialog.png)

## Anmerkungen

Dialogfelder sind modale Fenster – sie verhindern, dass der Benutzer auf den Rest der Benutzeroberfläche des Programms zugreifen kann, bis das Dialogfeld geschlossen wird. Aus diesem Grund sollten Funktionen, die ein Dialogfeld (oder modales Fenster) erzeugen, nicht übermäßig verwendet werden. Unabhängig davon gibt es gute Gründe, [die Verwendung von Dialogfeldern zur Bestätigung zu vermeiden](https://alistapart.com/article/neveruseawarning/).

Alternativ kann das {{HTMLElement("dialog")}} Element für Bestätigungen verwendet werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("dialog")}} Element
- {{domxref("window.alert()")}}
- {{domxref("window.prompt()")}}
