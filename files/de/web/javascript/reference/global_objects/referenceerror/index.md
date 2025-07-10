---
title: ReferenceError
slug: Web/JavaScript/Reference/Global_Objects/ReferenceError
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Das **`ReferenceError`**-Objekt repräsentiert einen Fehler, wenn auf eine Variable verwiesen wird, die im aktuellen Gültigkeitsbereich nicht existiert (oder noch nicht initialisiert wurde).

`ReferenceError` ist ein {{Glossary("serializable_object", "serialisierbares Objekt")}} und kann daher mit [`structuredClone()`](/de/docs/Web/API/Window/structuredClone) geklont oder zwischen [Workers](/de/docs/Web/API/Worker) mit [`postMessage()`](/de/docs/Web/API/Worker/postMessage) kopiert werden.

`ReferenceError` ist eine Unterklasse von {{jsxref("Error")}}.

## Konstruktor

- {{jsxref("ReferenceError/ReferenceError", "ReferenceError()")}}
  - : Erstellt ein neues `ReferenceError`-Objekt.

## Instanzeigenschaften

_Erbt auch Instanzeigenschaften von seinem Elternteil {{jsxref("Error")}}_.

Diese Eigenschaften sind auf `ReferenceError.prototype` definiert und werden von allen `ReferenceError`-Instanzen geteilt.

- {{jsxref("Object/constructor", "ReferenceError.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `ReferenceError`-Instanzen ist der anfängliche Wert der {{jsxref("ReferenceError/ReferenceError", "ReferenceError")}}-Konstruktor.
- {{jsxref("Error/name", "ReferenceError.prototype.name")}}
  - : Repräsentiert den Namen für die Art des Fehlers. Für `ReferenceError.prototype.name` ist der anfängliche Wert `"ReferenceError"`.

## Instanzmethoden

_Erbt Instanzmethoden von seinem Elternteil {{jsxref("Error")}}_.

## Beispiele

### Einen ReferenceError abfangen

```js
try {
  let a = undefinedVariable;
} catch (e) {
  console.log(e instanceof ReferenceError); // true
  console.log(e.message); // "undefinedVariable is not defined"
  console.log(e.name); // "ReferenceError"
  console.log(e.stack); // Stack of the error
}
```

### Einen ReferenceError erstellen

```js
try {
  throw new ReferenceError("Hello");
} catch (e) {
  console.log(e instanceof ReferenceError); // true
  console.log(e.message); // "Hello"
  console.log(e.name); // "ReferenceError"
  console.log(e.stack); // Stack of the error
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Error")}}
