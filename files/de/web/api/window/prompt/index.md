---
title: "Window: prompt() Methode"
short-title: prompt()
slug: Web/API/Window/prompt
l10n:
  sourceCommit: 79fdc26fea835d65c9361541bb8ab1896f307475
---

{{ApiRef("Window")}}

`window.prompt()` weist den Browser an, ein Dialogfeld mit einer optionalen Nachricht anzuzeigen, die den Benutzer auffordert, Text einzugeben, und darauf zu warten, bis der Benutzer entweder den Text abschickt oder den Dialog abbricht.

Unter bestimmten Bedingungen (z. B. wenn der Benutzer die Registerkarten wechselt) kann es sein, dass der Browser kein Dialogfeld anzeigt oder nicht wartet, bis der Benutzer den Text abschickt oder den Dialog abbricht.

## Syntax

```js-nolint
prompt()
prompt(message)
prompt(message, defaultValue)
```

### Parameter

- `message` {{optional_inline}}
  - : Ein Text, der dem Benutzer angezeigt wird. Kann weggelassen werden, wenn es im Aufforderungsfenster nichts zu zeigen gibt.
- `defaultValue` {{optional_inline}}
  - : Ein String, der den Standardwert enthält, der im Texteingabefeld angezeigt wird.

### Rückgabewert

Ein String, der den vom Benutzer eingegebenen Text enthält, oder `null`.

## Beispiele

### Verwenden einer Aufforderung mit einer Nachricht und einem Standardwert

Das folgende Beispiel zeigt, wie der zurückgegebene Wert einer Aufforderung überprüft wird.
Wenn der Benutzer die OK-Schaltfläche anklickt, wird der im Eingabefeld eingegebene Text zurückgegeben.
Klickt der Benutzer auf OK, ohne Text einzugeben, wird ein leerer String zurückgegeben.
Klickt der Benutzer auf die Abbrechen-Schaltfläche, gibt diese Funktion `null` zurück.

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

### Aufforderungsnachrichten und Standardwerte

Es gibt mehrere Möglichkeiten, eine Aufforderung zu verwenden, unter Verwendung von `prompt`, `window.prompt` sowie Angabe von Nachrichten und Standardwerten:

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

Dialogfelder sind modale Fenster – sie verhindern, dass der Benutzer auf den Rest der Programmoberfläche zugreift, bis das Dialogfeld geschlossen wird.
Aus diesem Grund sollten Sie Funktionen, die ein Dialogfeld oder ein modales Fenster erzeugen, nicht übermäßig verwenden.
Alternativ kann ein {{HTMLElement("dialog")}}-Element für Bestätigungen verwendet werden.

Ein Aufforderungsdialog enthält ein einzeiliges Textfeld, eine Abbrechen-Schaltfläche und eine OK-Schaltfläche und gibt den (möglicherweise leeren) Text zurück, den der Benutzer in dieses Textfeld eingegeben hat.
Das Ergebnis ist ein String, was bedeutet, dass Sie den vom Benutzer eingegebenen Wert manchmal umwandeln sollten.
Wenn die Antwort zum Beispiel eine Zahl sein sollte, sollten Sie den Wert in Number umwandeln.

```js
const number = Number(window.prompt("Type a number", ""));
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
