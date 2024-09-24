---
title: ReferenceError
slug: Web/JavaScript/Reference/Global_Objects/ReferenceError
l10n:
  sourceCommit: 6558de67a347fee30c303da8a0b262a9270a6885
---

{{JSRef}}

Das **`ReferenceError`**-Objekt stellt einen Fehler dar, der auftritt, wenn auf eine Variable verwiesen wird, die nicht existiert (oder noch nicht initialisiert wurde) im aktuellen Geltungsbereich.

`ReferenceError` ist ein {{Glossary("serializable object", "serialisierbares Objekt")}}, sodass es mit {{domxref("structuredClone()")}} geklont oder zwischen [Workers](/de/docs/Web/API/Worker) mithilfe von {{domxref("Worker/postMessage()", "postMessage()")}} kopiert werden kann.

`ReferenceError` ist eine Unterklasse von {{jsxref("Error")}}.

## Konstruktor

- {{jsxref("ReferenceError/ReferenceError", "ReferenceError()")}}
  - : Erstellt ein neues `ReferenceError`-Objekt.

## Instanz-Eigenschaften

_Erbt auch Instanz-Eigenschaften von seinem Elternteil {{jsxref("Error")}}_.

Diese Eigenschaften sind auf `ReferenceError.prototype` definiert und werden von allen `ReferenceError`-Instanzen geteilt.

- {{jsxref("Object/constructor", "ReferenceError.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanz-Objekt erstellt hat. Für `ReferenceError`-Instanzen ist der Anfangswert der {{jsxref("ReferenceError/ReferenceError", "ReferenceError")}}-Konstruktor.
- {{jsxref("Error/name", "ReferenceError.prototype.name")}}
  - : Repräsentiert den Namen für die Art des Fehlers. Für `ReferenceError.prototype.name` ist der Anfangswert `"ReferenceError"`.

## Instanz-Methoden

_Erbt Instanz-Methoden von seinem Elternteil {{jsxref("Error")}}_.

## Beispiele

### Einfangen eines ReferenceError

```js
try {
  let a = undefinedVariable;
} catch (e) {
  console.log(e instanceof ReferenceError); // true
  console.log(e.message); // "undefinedVariable is not defined"
  console.log(e.name); // "ReferenceError"
  console.log(e.stack); // Stack des Fehlers
}
```

### Erstellen eines ReferenceError

```js
try {
  throw new ReferenceError("Hello");
} catch (e) {
  console.log(e instanceof ReferenceError); // true
  console.log(e.message); // "Hello"
  console.log(e.name); // "ReferenceError"
  console.log(e.stack); // Stack des Fehlers
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Error")}}
