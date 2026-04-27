---
title: WebAssembly.Global.prototype.value
short-title: value
slug: WebAssembly/Reference/JavaScript_interface/Global/value
l10n:
  sourceCommit: a21bf857ac668ad72a36aad0d8ad7e87c6bdc4d8
---

Die **`value`**-Eigenschaft des [`WebAssembly.Global`](/de/docs/WebAssembly/Reference/JavaScript_interface/Global)-Objektprototyps gibt den Wert zurück, der in der globalen Variable enthalten ist.

## Wert

Ein String, der den Wert des Globalen angibt.

## Beschreibung

Die `value`-Eigenschaft einer `Global`-Objektinstanz ermöglicht es Ihnen, den Wert des Globalen direkt zu lesen oder zu setzen.

Damit der Setter funktioniert, muss das Globale veränderlich sein (die [`mutable`](/de/docs/WebAssembly/Reference/JavaScript_interface/Global/Global#mutable)-Option muss auf `true` gesetzt worden sein, als es deklariert wurde). Wenn dies nicht der Fall ist, wird eine `TypeError`-Ausnahme ausgelöst.

## Beispiele

### Erstellen eines nicht veränderlichen Globalen

```js
const myGlobal = new WebAssembly.Global({ value: "i32", mutable: false }, 42);

// 42
console.log(myGlobal.value);

// TypeError
myGlobal.value = 100;
```

### Erstellen eines veränderlichen Globalen

```js
const myGlobal = new WebAssembly.Global({ value: "i32", mutable: true }, 42);

// 42
console.log(myGlobal.value);

myGlobal.value = 100;
// 100
console.log(myGlobal.value);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`global`](/de/docs/WebAssembly/Reference/Definitions/global)-Definition
- [WebAssembly](/de/docs/WebAssembly)
