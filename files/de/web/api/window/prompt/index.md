---
title: "Window: prompt() Methode"
short-title: prompt()
slug: Web/API/Window/prompt
l10n:
  sourceCommit: b2af4eb16dd4c399ed81f67efd49777fa6ae9030
---

{{ApiRef("Window")}}

`window.prompt()` weist den Browser an, ein Dialogfeld mit einer optionalen Nachricht anzuzeigen, das den Benutzer dazu auffordert, einen Text einzugeben, und wartet, bis der Benutzer entweder den Text übermittelt oder den Dialog abbricht.

Unter bestimmten Bedingungen – zum Beispiel, wenn der Benutzer zu einem anderen Tab wechselt – zeigt der Browser möglicherweise keinen Dialog an oder wartet nicht darauf, dass der Benutzer den Text übermittelt oder den Dialog abbricht.

## Syntax

```js-nolint
prompt()
prompt(message)
prompt(message, defaultValue)
```

### Parameter

- `message` {{optional_inline}}
  - : Ein Textstring, der dem Benutzer angezeigt wird. Kann weggelassen werden, wenn es nichts im Dialogfenster anzuzeigen gibt.
- `defaultValue` {{optional_inline}}
  - : Ein String, der den Standardwert enthält, der im Texteingabefeld angezeigt wird.

### Rückgabewert

Ein String, der den vom Benutzer eingegebenen Text enthält, oder `null`.

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

Wenn der Benutzer die OK-Schaltfläche klickt, wird der im Eingabefeld eingegebene Text zurückgegeben. Wenn der Benutzer auf OK klickt, ohne Text einzugeben, wird ein leerer String zurückgegeben. Wenn der Benutzer die Abbrechen-Schaltfläche klickt, gibt diese Funktion `null` zurück.

Der obige Dialog wird wie folgt angezeigt (in Chrome auf macOS):

![prompt() Dialog in Chrome auf macOS](prompt.png)

## Hinweise

Ein Eingabeaufforderungsdialog enthält ein einzeiliges Textfeld, eine Abbrechen-Schaltfläche und eine OK-Schaltfläche und gibt den (möglicherweise leeren) Text zurück, den der Benutzer in dieses Textfeld eingegeben hat.

Bitte beachten Sie, dass das Ergebnis ein String ist. Das bedeutet, dass Sie den vom Benutzer bereitgestellten Wert manchmal umwandeln sollten. Zum Beispiel sollten Sie, wenn die Antwort eine Zahl sein soll, den Wert in eine Zahl umwandeln.

```js
const aNumber = Number(window.prompt("Type a number", ""));
```

Dialogfelder sind modale Fenster; sie verhindern, dass der Benutzer auf den Rest der Benutzeroberfläche des Programms zugreift, bis das Dialogfeld geschlossen wird. Aus diesem Grund sollten Sie keine Funktion übermäßig verwenden, die ein Dialogfeld (oder modales Fenster) erstellt.

Alternativ kann das {{HTMLElement("dialog")}} Element verwendet werden, um Benutzereingaben entgegenzunehmen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("dialog")}} Element
- [`alert`](/de/docs/Web/API/Window/alert)
- [`confirm`](/de/docs/Web/API/Window/confirm)
