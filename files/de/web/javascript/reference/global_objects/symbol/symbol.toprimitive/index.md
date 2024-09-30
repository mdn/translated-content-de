---
title: Symbol.prototype[Symbol.toPrimitive]()
slug: Web/JavaScript/Reference/Global_Objects/Symbol/Symbol.toPrimitive
l10n:
  sourceCommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{JSRef}}

Die Methode **`[Symbol.toPrimitive]()`** von {{jsxref("Symbol")}}-Werten gibt diesen Symbolwert zurück.

## Syntax

```js-nolint
symbolValue[Symbol.toPrimitive](hint)
```

### Parameter

- `hint`
  - : Ein Zeichenfolgenwert, der den zurückzugebenden primitiven Wert angibt. Der Wert wird ignoriert.

### Rückgabewert

Der primitive Wert des angegebenen {{jsxref("Symbol")}}-Objekts.

## Beschreibung

Die Methode `[Symbol.toPrimitive]()` von {{jsxref("Symbol")}} gibt den primitiven
Wert eines Symbol-Objekts als Symbol-Datentyp zurück. Das `hint`
Argument wird nicht verwendet.

JavaScript ruft die Methode `[Symbol.toPrimitive]()` auf, um ein Objekt in einen
primitiven Wert umzuwandeln. Normalerweise müssen Sie die Methode `[Symbol.toPrimitive]()` nicht selbst aufrufen; JavaScript ruft sie automatisch auf, wenn ein Objekt in einem Kontext auftaucht, der einen primitiven Wert erfordert.

## Beispiele

### Verwendung von `[Symbol.toPrimitive]()`

```js
const sym = Symbol("example");
sym === sym[Symbol.toPrimitive](); // true
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Symbol.toPrimitive")}}
