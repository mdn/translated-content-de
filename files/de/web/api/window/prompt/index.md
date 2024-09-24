---
title: "Fenster: prompt()-Methode"
short-title: prompt()
slug: Web/API/Window/prompt
l10n:
  sourceCommit: b2af4eb16dd4c399ed81f67efd49777fa6ae9030
---

{{ApiRef("Window")}}

`window.prompt()` weist den Browser an, ein Dialogfenster mit einer optionalen Nachricht anzuzeigen, das den Benutzer auffordert, einen Text einzugeben, und zu warten, bis der Benutzer den Text entweder einreicht oder das Dialogfenster abbricht.

Unter bestimmten Bedingungen - zum Beispiel, wenn der Benutzer die Registerkarten wechselt - wird der Browser möglicherweise kein Dialogfenster anzeigen oder nicht darauf warten, dass der Benutzer Text eingibt oder das Dialogfenster abbricht.

## Syntax

```js-nolint
prompt()
prompt(message)
prompt(message, defaultValue)
```

### Parameter

- `message` {{optional_inline}}
  - : Ein Zeichenfolgen-Text, der dem Benutzer angezeigt wird. Kann weggelassen werden, wenn es nichts im Eingabefenster zu zeigen gibt.
- `defaultValue` {{optional_inline}}
  - : Eine Zeichenfolge, die den Standardwert enthält, der im Texteingabefeld angezeigt wird.

### Rückgabewert

Eine Zeichenfolge, die den vom Benutzer eingegebenen Text enthält, oder `null`.

## Beispiele

```js
let sign = prompt("What's your sign?");

if (sign.toLowerCase() === "scorpio") {
  alert("Wow! I'm a Scorpio too!");
}

// es gibt viele Möglichkeiten, die prompt-Funktion zu verwenden
sign = window.prompt(); // öffnet das leere Eingabefenster
sign = prompt(); //  öffnet das leere Eingabefenster
sign = window.prompt("Are you feeling lucky"); // öffnet das Fenster mit dem Text "Are you feeling lucky"
sign = window.prompt("Are you feeling lucky", "sure"); // öffnet das Fenster mit dem Text "Are you feeling lucky" und dem Standardwert "sure"
```

Wenn der Benutzer die OK-Schaltfläche klickt, wird der im Eingabefeld eingegebene Text zurückgegeben. Wenn der Benutzer auf OK klickt, ohne Text einzugeben, wird eine leere Zeichenfolge zurückgegeben. Wenn der Benutzer die Abbrechen-Schaltfläche klickt, gibt diese Funktion `null` zurück.

Das oben gezeigte Eingabefenster erscheint wie folgt (in Chrome auf macOS):

![prompt() Dialog in Chrome auf macOS](prompt.png)

## Hinweise

Ein Eingabedialog enthält ein einzeiliges Textfeld, eine Abbrechen-Schaltfläche und eine OK-Schaltfläche und gibt den (möglicherweise leeren) Text zurück, den der Benutzer in das Textfeld eingegeben hat.

Bitte beachten Sie, dass das Ergebnis eine Zeichenfolge ist. Das bedeutet, dass Sie den vom Benutzer angegebenen Wert manchmal umwandeln sollten. Zum Beispiel, wenn seine Antwort eine Zahl sein soll, sollten Sie den Wert in eine Zahl umwandeln.

```js
const aNumber = Number(window.prompt("Type a number", ""));
```

Dialogfelder sind modale Fenster; sie verhindern, dass der Benutzer auf den Rest der Programmoberfläche zugreift, bis das Dialogfeld geschlossen wird. Aus diesem Grund sollten Sie keine Funktion übermäßig verwenden, die ein Dialogfeld (oder ein modales Fenster) erstellt.

Alternativ kann das {{HTMLElement("dialog")}}-Element verwendet werden, um Benutzereingaben entgegenzunehmen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("dialog")}}-Element
- {{domxref("window.alert", "alert")}}
- {{domxref("window.confirm", "confirm")}}
