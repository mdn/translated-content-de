---
title: SyntaxError
slug: Web/JavaScript/Reference/Global_Objects/SyntaxError
l10n:
  sourceCommit: 6558de67a347fee30c303da8a0b262a9270a6885
---

{{JSRef}}

Das **`SyntaxError`**-Objekt stellt einen Fehler dar, der auftritt, wenn versucht wird, syntaktisch ungültigen Code zu interpretieren. Er wird ausgelöst, wenn die JavaScript-Engine auf Token oder eine Token-Reihenfolge stößt, die nicht der Syntax der Sprache entsprechen, während sie Code analysiert.

`SyntaxError` ist ein {{Glossary("serializable object", "serialisierbares Objekt")}}, sodass es mit {{domxref("structuredClone()")}} geklont oder zwischen [Workers](/de/docs/Web/API/Worker) mit {{domxref("Worker/postMessage()", "postMessage()")}} kopiert werden kann.

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

### Abfangen eines SyntaxError

```js
try {
  eval("hoo bar");
} catch (e) {
  console.log(e instanceof SyntaxError); // true
  console.log(e.message);
  console.log(e.name); // "SyntaxError"
  console.log(e.stack); // Stack des Fehlers
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
  console.log(e.stack); // Stack des Fehlers
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Error")}}
