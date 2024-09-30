---
title: "Window: confirm()-Methode"
short-title: confirm()
slug: Web/API/Window/confirm
l10n:
  sourceCommit: 6e1e6f1b9df61c05f1c5c84c2b6b7ea679e90362
---

{{ApiRef("Window")}}

`window.confirm()` weist den Browser an, ein Dialogfenster mit einer optionalen Nachricht anzuzeigen, und wartet, bis der Benutzer entweder das Dialogfenster bestätigt oder abbricht.

Unter bestimmten Bedingungen — zum Beispiel, wenn der Benutzer die Tabs wechselt — kann es vorkommen, dass der Browser kein Dialogfenster anzeigt oder nicht auf die Entscheidung des Benutzers wartet, das Dialogfenster zu bestätigen oder abzubrechen.

## Syntax

```js-nolint
confirm()
confirm(message)
```

### Parameter

- `message` {{optional_inline}}
  - : Ein String, den Sie im Bestätigungsdialog anzeigen möchten.

### Rückgabewert

Ein boolean, der angibt, ob OK (`true`) oder Abbrechen (`false`) ausgewählt wurde. Wenn ein Browser In-Page-Dialoge ignoriert, ist der zurückgegebene Wert immer `false`.

## Beispiele

```js
if (window.confirm("Do you really want to leave?")) {
  window.open("exit.html", "Thanks for Visiting!");
}
```

Erzeugt:

![Firefox bestätigen](firefox_confirm_dialog.png)

## Hinweise

Dialogfelder sind modale Fenster — sie verhindern, dass der Benutzer auf den Rest der Benutzeroberfläche des Programms zugreifen kann, bis das Dialogfeld geschlossen ist. Aus diesem Grund sollten Sie Funktionen, die ein Dialogfeld (oder modales Fenster) erstellen, nicht übermäßig verwenden. Dennoch gibt es gute Gründe, [die Verwendung von Dialogfeldern zur Bestätigung zu vermeiden](https://alistapart.com/article/neveruseawarning/).

Alternativ kann das {{HTMLElement("dialog")}}-Element für Bestätigungen verwendet werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("dialog")}}-Element
- [`window.alert()`](/de/docs/Web/API/Window/alert)
- [`window.prompt()`](/de/docs/Web/API/Window/prompt)
