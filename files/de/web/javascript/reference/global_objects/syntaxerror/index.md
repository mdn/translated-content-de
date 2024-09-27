---
title: SyntaxError
slug: Web/JavaScript/Reference/Global_Objects/SyntaxError
l10n:
  sourceCommit: 8b6cec0ceff01e7a9d6865cf5306788e15cce4b8
---

{{JSRef}}

Das **`SyntaxError`**-Objekt stellt einen Fehler dar, wenn versucht wird, syntaktisch ungültigen Code zu interpretieren. Es wird ausgelöst, wenn die JavaScript-Engine Token oder eine Tokenreihenfolge antrifft, die beim Parsen des Codes nicht der Syntax der Sprache entspricht.

`SyntaxError` ist ein [serialisierbares Objekt](/de/docs/Glossary/serializable_object), sodass es mit [`structuredClone()`](/de/docs/Web/API/Window/structuredClone) geklont oder zwischen [Arbeitern](/de/docs/Web/API/Worker) mithilfe von [`postMessage()`](/de/docs/Web/API/Worker/postMessage) kopiert werden kann.

`SyntaxError` ist eine Unterklasse von {{jsxref("Error")}}.

## Konstruktor

- {{jsxref("SyntaxError/SyntaxError", "SyntaxError()")}}
  - : Erstellt ein neues `SyntaxError`-Objekt.

## Instanz-Eigenschaften

_Erbt auch Instanz-Eigenschaften von seinem Elternteil {{jsxref("Error")}}_.

Diese Eigenschaften sind auf `SyntaxError.prototype` definiert und werden von allen `SyntaxError`-Instanzen geteilt.

- {{jsxref("Object/constructor", "SyntaxError.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Bei `SyntaxError`-Instanzen ist der Anfangswert der {{jsxref("SyntaxError/SyntaxError", "SyntaxError")}}-Konstruktor.
- {{jsxref("Error/name", "SyntaxError.prototype.name")}}
  - : Repräsentiert den Namen des Fehlertyps. Bei `SyntaxError.prototype.name` ist der Anfangswert `"SyntaxError"`.

## Instanzmethoden

_Erbt Instanzmethoden von seinem Elternteil {{jsxref("Error")}}_.

## Beispiele

### Abfangen eines SyntaxError

```js
try {
  eval("hoo bar");
} catch (e) {
  console.log(e instanceof SyntaxError); // true
  console.log(e.message);
  console.log(e.name); // "SyntaxError"
  console.log(e.stack); // Stack of the error
}
```

### Erstellen eines SyntaxError

```js
try {
  throw new SyntaxError("Hello");
} catch (e) {
  console.log(e instanceof SyntaxError); // true
  console.log(e.message); // "Hello"
  console.log(e.name); // "SyntaxError"
  console.log(e.stack); // Stack of the error
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Error")}}
