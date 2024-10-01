---
title: SyntaxError
slug: Web/JavaScript/Reference/Global_Objects/SyntaxError
l10n:
  sourceCommit: 8b6cec0ceff01e7a9d6865cf5306788e15cce4b8
---

{{JSRef}}

Das **`SyntaxError`**-Objekt repräsentiert einen Fehler, der auftritt, wenn syntaktisch ungültiger Code interpretiert wird. Dieser Fehler wird ausgelöst, wenn die JavaScript-Engine beim Parsen von Code auf Token oder eine Token-Reihenfolge stößt, die nicht mit der Syntax der Sprache übereinstimmen.

`SyntaxError` ist ein {{Glossary("serializable_object", "serialisierbares Objekt")}}, daher kann es mit [`structuredClone()`](/de/docs/Web/API/Window/structuredClone) geklont oder zwischen [Workers](/de/docs/Web/API/Worker) mit [`postMessage()`](/de/docs/Web/API/Worker/postMessage) kopiert werden.

`SyntaxError` ist eine Unterklasse von {{jsxref("Error")}}.

## Konstruktor

- {{jsxref("SyntaxError/SyntaxError", "SyntaxError()")}}
  - : Erstellt ein neues `SyntaxError`-Objekt.

## Instanz-Eigenschaften

_Erbt auch Instanz-Eigenschaften von seinem Elternteil {{jsxref("Error")}}_.

Diese Eigenschaften sind auf `SyntaxError.prototype` definiert und werden von allen `SyntaxError`-Instanzen geteilt.

- {{jsxref("Object/constructor", "SyntaxError.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `SyntaxError`-Instanzen ist der Anfangswert der {{jsxref("SyntaxError/SyntaxError", "SyntaxError")}}-Konstruktor.
- {{jsxref("Error/name", "SyntaxError.prototype.name")}}
  - : Repräsentiert den Namen des Fehlertyps. Für `SyntaxError.prototype.name` ist der Anfangswert `"SyntaxError"`.

## Instanz-Methoden

_Erbt Instanz-Methoden von seinem Elternteil {{jsxref("Error")}}_.

## Beispiele

### Einen SyntaxError abfangen

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

### Einen SyntaxError erstellen

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
