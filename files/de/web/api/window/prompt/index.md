---
title: "Window: prompt()-Methode"
short-title: prompt()
slug: Web/API/Window/prompt
l10n:
  sourceCommit: b2af4eb16dd4c399ed81f67efd49777fa6ae9030
---

{{ApiRef("Window")}}

`window.prompt()` weist den Browser an, einen Dialog mit einer optionalen Nachricht anzuzeigen, in der der Benutzer aufgefordert wird, einen Text einzugeben, und zu warten, bis der Benutzer den Text entweder übermittelt oder den Dialog abbricht.

Unter bestimmten Bedingungen — zum Beispiel, wenn der Benutzer die Tabs wechselt — kann es vorkommen, dass der Browser keinen Dialog anzeigt oder nicht darauf wartet, dass der Benutzer den Text übermittelt oder den Dialog abbricht.

## Syntax

```js-nolint
prompt()
prompt(message)
prompt(message, defaultValue)
```

### Parameter

- `message` {{optional_inline}}
  - : Ein Textstring, der dem Benutzer angezeigt wird. Kann weggelassen werden, wenn es nichts im Eingabefenster anzuzeigen gibt.
- `defaultValue` {{optional_inline}}
  - : Ein String, der den Standardwert im Texteingabefeld enthält.

### Rückgabewert

Ein String mit dem Text, der vom Benutzer eingegeben wurde, oder `null`.

## Beispiele

```js
let sign = prompt("What's your sign?");

if (sign.toLowerCase() === "scorpio") {
  alert("Wow! I'm a Scorpio too!");
}

// there are many ways to use the prompt feature
sign = window.prompt(); // open the blank prompt window
sign = prompt(); //  open the blank prompt window
sign = window.prompt("Are you feeling lucky"); // open the window with Text "Are you feeling lucky"
sign = window.prompt("Are you feeling lucky", "sure"); // open the window with Text "Are you feeling lucky" and default value "sure"
```

Wenn der Benutzer auf die OK-Schaltfläche klickt, wird der im Eingabefeld eingegebene Text zurückgegeben. Wenn der Benutzer auf OK klickt, ohne einen Text einzugeben, wird ein leerer String zurückgegeben. Wenn der Benutzer auf die Abbrechen-Schaltfläche klickt, gibt diese Funktion `null` zurück.

Der obige Eingabedialog erscheint wie folgt (in Chrome auf macOS):

![Eingabedialog (prompt()) in Chrome auf macOS](prompt.png)

## Hinweise

Ein Eingabedialog enthält ein einzeiliges Textfeld, eine Abbrechen-Schaltfläche und eine OK-Schaltfläche und gibt den (möglicherweise leeren) Text zurück, den der Benutzer in dieses Textfeld eingegeben hat.

Bitte beachten Sie, dass das Ergebnis ein String ist. Das bedeutet, dass Sie den vom Benutzer angegebenen Wert manchmal umwandeln sollten. Wenn ihre Antwort beispielsweise eine Zahl sein soll, sollten Sie den Wert zu `Number` umwandeln.

```js
const aNumber = Number(window.prompt("Type a number", ""));
```

Dialogfelder sind modale Fenster; sie verhindern, dass der Benutzer auf den Rest der Programmoberfläche zugreift, bis das Dialogfeld geschlossen wird. Aus diesem Grund sollten Sie keine Funktion übermäßig verwenden, die ein Dialogfeld (oder modales Fenster) erzeugt.

Alternativ kann das {{HTMLElement("dialog")}}-Element verwendet werden, um Benutzereingaben einzuholen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("dialog")}}-Element
- [`alert`](/de/docs/Web/API/Window/alert)
- [`confirm`](/de/docs/Web/API/Window/confirm)
