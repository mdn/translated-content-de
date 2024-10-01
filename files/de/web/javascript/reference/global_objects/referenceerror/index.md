---
title: ReferenceError
slug: Web/JavaScript/Reference/Global_Objects/ReferenceError
l10n:
  sourceCommit: 8b6cec0ceff01e7a9d6865cf5306788e15cce4b8
---

{{JSRef}}

Das **`ReferenceError`**-Objekt repräsentiert einen Fehler, wenn auf eine Variable verwiesen wird, die im aktuellen Geltungsbereich nicht existiert (oder noch nicht initialisiert wurde).

`ReferenceError` ist ein {{Glossary("serializable_object", "serialisierbares Objekt")}}, daher kann es mit [`structuredClone()`](/de/docs/Web/API/Window/structuredClone) geklont oder zwischen [Workers](/de/docs/Web/API/Worker) mit [`postMessage()`](/de/docs/Web/API/Worker/postMessage) kopiert werden.

`ReferenceError` ist eine Unterklasse von {{jsxref("Error")}}.

## Konstruktor

- {{jsxref("ReferenceError/ReferenceError", "ReferenceError()")}}
  - : Erstellt ein neues `ReferenceError`-Objekt.

## Instanz-Eigenschaften

_Erbt auch Instanz-Eigenschaften von seinem übergeordneten Objekt {{jsxref("Error")}}_.

Diese Eigenschaften sind auf `ReferenceError.prototype` definiert und werden von allen `ReferenceError`-Instanzen gemeinsam genutzt.

- {{jsxref("Object/constructor", "ReferenceError.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `ReferenceError`-Instanzen ist der anfängliche Wert der {{jsxref("ReferenceError/ReferenceError", "ReferenceError")}}-Konstruktor.
- {{jsxref("Error/name", "ReferenceError.prototype.name")}}
  - : Repräsentiert den Namen für den Fehlertyp. Für `ReferenceError.prototype.name` ist der anfängliche Wert `"ReferenceError"`.

## Instanz-Methoden

_Erbt Instanz-Methoden von seinem übergeordneten Objekt {{jsxref("Error")}}_.

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
