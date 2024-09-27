---
title: "Window: confirm() Methode"
short-title: confirm()
slug: Web/API/Window/confirm
l10n:
  sourceCommit: 6e1e6f1b9df61c05f1c5c84c2b6b7ea679e90362
---

{{ApiRef("Window")}}

`window.confirm()` weist den Browser an, einen Dialog mit einer optionalen Nachricht anzuzeigen und zu warten, bis der Benutzer entweder den Dialog bestätigt oder abbricht.

Unter bestimmten Bedingungen – zum Beispiel, wenn der Benutzer die Registerkarten wechselt – zeigt der Browser möglicherweise keinen Dialog an oder wartet nicht, bis der Benutzer den Dialog bestätigt oder abbricht.

## Syntax

```js-nolint
confirm()
confirm(message)
```

### Parameter

- `message` {{optional_inline}}
  - : Ein String, den Sie im Bestätigungsdialog anzeigen möchten.

### Rückgabewert

Ein boolescher Wert, der anzeigt, ob OK (`true`) oder Abbrechen (`false`) ausgewählt wurde. Wenn ein Browser Dialoge auf der Seite ignoriert, ist der zurückgegebene Wert immer `false`.

## Beispiele

```js
if (window.confirm("Do you really want to leave?")) {
  window.open("exit.html", "Thanks for Visiting!");
}
```

Erzeugt:

![Firefox confirm](firefox_confirm_dialog.png)

## Hinweise

Dialogfelder sind modale Fenster – sie verhindern, dass der Benutzer auf den Rest der Programmschnittstelle zugreift, bis das Dialogfeld geschlossen wird. Aus diesem Grund sollten Sie keine Funktion übermäßig verwenden, die ein Dialogfeld (oder modales Fenster) erzeugt. Unabhängig davon gibt es gute Gründe, [die Verwendung von Dialogfeldern zur Bestätigung zu vermeiden](https://alistapart.com/article/neveruseawarning/).

Alternativ kann das {{HTMLElement("dialog")}}-Element für Bestätigungen verwendet werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("dialog")}}-Element
- [`window.alert()`](/de/docs/Web/API/Window/alert)
- [`window.prompt()`](/de/docs/Web/API/Window/prompt)
