---
title: "Fenster: prompt()-Methode"
short-title: prompt()
slug: Web/API/Window/prompt
l10n:
  sourceCommit: b7310d059a28842d0a43ebabf814e8f2469c3419
---

{{ApiRef("Window")}}

`window.prompt()` weist den Browser an, einen Dialog mit einer optionalen Nachricht anzuzeigen, die den Benutzer auffordert, einen Text einzugeben, und zu warten, bis der Benutzer entweder den Text übermittelt oder den Dialog abbricht.

Unter bestimmten Bedingungen (zum Beispiel, wenn der Benutzer die Registerkarten wechselt) kann es sein, dass der Browser keinen Dialog anzeigt oder nicht darauf wartet, dass der Benutzer den Text übermittelt oder den Dialog abbricht.

## Syntax

```js-nolint
prompt()
prompt(message)
prompt(message, defaultValue)
```

### Parameter

- `message` {{optional_inline}}
  - : Ein Textstring, der dem Benutzer angezeigt wird. Kann weggelassen werden, wenn im Eingabefenster nichts angezeigt werden soll.
- `defaultValue` {{optional_inline}}
  - : Ein Textstring, der den Standardwert enthält, der im Texteingabefeld angezeigt wird.

### Rückgabewert

Ein String, der den vom Benutzer eingegebenen Text enthält oder `null`.

## Beispiele

### Verwendung eines Prompts mit einer Nachricht und einem Standardwert

Das folgende Beispiel zeigt, wie der Rückgabewert eines Prompts überprüft wird.
Wenn der Benutzer die OK-Schaltfläche klickt, wird der im Eingabefeld eingegebene Text zurückgegeben.
Wenn der Benutzer OK klickt, ohne Text einzugeben, wird ein leerer String zurückgegeben.
Wenn der Benutzer die Abbrechen-Schaltfläche klickt, gibt diese Funktion `null` zurück.

```html live-sample___prompt
<button id="signButton">Check star sign</button>
<pre id="log"></pre>
```

```js live-sample___prompt
const signButton = document.querySelector("#signButton");
const log = document.querySelector("#log");

signButton.addEventListener("click", () => {
  let sign = prompt("What's your sign?");

  if (sign === null) {
    log.innerText = "OK, maybe next time.";
  } else if (sign.toLowerCase() === "") {
    log.innerText = "Don't be shy, enter your sign!";
  } else if (sign.toLowerCase() === "scorpio") {
    log.innerText = "Wow! I'm a Scorpio too!";
  } else {
    log.innerText = `${sign} is my favorite!`;
  }
});
```

{{EmbedLiveSample('prompt', , , , , , , 'allow-modals')}}

### Eingabemeldungen und Standardwerte

Es gibt mehrere Möglichkeiten, ein Prompt zu verwenden, indem `prompt`, `window.prompt` sowie Nachrichten und Standardwerte bereitgestellt werden:

```js
// open a blank prompt window
sign = prompt();
// open a blank prompt window
sign = window.prompt();
// open a prompt with the text "Are you feeling lucky"
sign = window.prompt("Are you feeling lucky");
// open a prompt with the text "Are you feeling lucky" and "sure" as the default value
sign = prompt("Are you feeling lucky", "sure");
```

## Hinweise

Dialogfenster sind modale Fenster — sie verhindern, dass der Benutzer auf den Rest der Programmoberfläche zugreift, bis das Dialogfenster geschlossen wird.
Aus diesem Grund sollten Sie keine Funktion übermäßig verwenden, die ein Dialogfenster oder ein modales Fenster erstellt.
Alternativ kann ein {{HTMLElement("dialog")}}-Element für Bestätigungen verwendet werden.

Ein Eingabedialog enthält ein einzeiliges Textfeld, eine Abbrechen-Schaltfläche und eine OK-Schaltfläche und gibt den (möglicherweise leeren) Text zurück, den der Benutzer in dieses Textfeld eingegeben hat.
Das Ergebnis ist ein String, was bedeutet, dass Sie manchmal den vom Benutzer angegebenen Wert umwandeln sollten.
Zum Beispiel, wenn die Antwort eine Zahl sein soll, sollten Sie den Wert in Number konvertieren.

```js
const aNumber = Number(window.prompt("Type a number", ""));
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("dialog")}}-Element
- [`alert`](/de/docs/Web/API/Window/alert)
- [`confirm`](/de/docs/Web/API/Window/confirm)
- [Never Use a Warning When you Mean Undo](https://alistapart.com/article/neveruseawarning/) auf A List Apart (2017)
