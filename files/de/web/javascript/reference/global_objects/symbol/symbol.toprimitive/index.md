---
title: Symbol.prototype[Symbol.toPrimitive]()
short-title: "[Symbol.toPrimitive]()"
slug: Web/JavaScript/Reference/Global_Objects/Symbol/Symbol.toPrimitive
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die Methode **`[Symbol.toPrimitive]()`** von {{jsxref("Symbol")}} Werten gibt diesen Symbolwert zurück.

## Syntax

```js-nolint
symbolValue[Symbol.toPrimitive](hint)
```

### Parameter

- `hint`
  - : Ein String-Wert, der den zurückzugebenden primitiven Wert angibt. Der Wert wird ignoriert.

### Rückgabewert

Der primitive Wert des angegebenen {{jsxref("Symbol")}} Objekts.

## Beschreibung

Die Methode `[Symbol.toPrimitive]()` von {{jsxref("Symbol")}} gibt den primitiven
Wert eines Symbol-Objekts als Symbol-Datentyp zurück. Das `hint`-
Argument wird nicht verwendet.

JavaScript ruft die Methode `[Symbol.toPrimitive]()` auf, um ein Objekt in einen
primitiven Wert umzuwandeln. Es ist selten erforderlich, die Methode `[Symbol.toPrimitive]()` selbst aufzurufen; JavaScript ruft sie automatisch auf, wenn es auf ein Objekt trifft, an dem ein primitiver Wert erwartet wird.

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
