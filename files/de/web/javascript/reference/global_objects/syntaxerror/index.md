---
title: SyntaxError
slug: Web/JavaScript/Reference/Global_Objects/SyntaxError
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Das **`SyntaxError`**-Objekt repräsentiert einen Fehler, der auftritt, wenn versucht wird, syntaktisch ungültigen Code zu interpretieren. Es wird ausgelöst, wenn die JavaScript-Engine auf Token oder eine Token-Reihenfolge stößt, die nicht mit der Syntax der Sprache übereinstimmen, während der Code geparst wird.

`SyntaxError` ist ein {{Glossary("serializable_object", "serialisierbares Objekt")}}, sodass es mit [`structuredClone()`](/de/docs/Web/API/Window/structuredClone) geklont oder zwischen [Workers](/de/docs/Web/API/Worker) mit [`postMessage()`](/de/docs/Web/API/Worker/postMessage) kopiert werden kann.

`SyntaxError` ist eine Unterklasse von {{jsxref("Error")}}.

## Konstruktor

- {{jsxref("SyntaxError/SyntaxError", "SyntaxError()")}}
  - : Erstellt ein neues `SyntaxError`-Objekt.

## Instanzeigenschaften

_Erbt auch Instanzeigenschaften von seinem Elternteil {{jsxref("Error")}}_.

Diese Eigenschaften sind auf `SyntaxError.prototype` definiert und werden von allen `SyntaxError`-Instanzen gemeinsam genutzt.

- {{jsxref("Object/constructor", "SyntaxError.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `SyntaxError`-Instanzen ist der Anfangswert der {{jsxref("SyntaxError/SyntaxError", "SyntaxError")}}-Konstruktor.
- {{jsxref("Error/name", "SyntaxError.prototype.name")}}
  - : Repräsentiert den Namen für den Fehlertyp. Für `SyntaxError.prototype.name` ist der Anfangswert `"SyntaxError"`.

## Instanzenmethoden

_Erbt Instanzenmethoden von seinem Elternteil {{jsxref("Error")}}_.

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
