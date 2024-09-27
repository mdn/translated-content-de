---
title: Symbol.prototype[Symbol.toPrimitive]()
slug: Web/JavaScript/Reference/Global_Objects/Symbol/Symbol.toPrimitive
l10n:
  sourceCommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{JSRef}}

Die **`[Symbol.toPrimitive]()`** Methode von {{jsxref("Symbol")}} Werten gibt diesen Symbolwert zurück.

## Syntax

```js-nolint
symbolValue[Symbol.toPrimitive](hint)
```

### Parameter

- `hint`
  - : Ein Zeichenfolgenwert, der den zurückzugebenden primitiven Wert angibt. Der Wert wird ignoriert.

### Rückgabewert

Der primitive Wert des angegebenen {{jsxref("Symbol")}} Objekts.

## Beschreibung

Die `[Symbol.toPrimitive]()` Methode von {{jsxref("Symbol")}} gibt den primitiven
Wert eines Symbol-Objekts als Symbol-Datentyp zurück. Das `hint`
Argument wird nicht verwendet.

JavaScript ruft die `[Symbol.toPrimitive]()` Methode auf, um ein Objekt in einen
primitiven Wert zu konvertieren. Es ist selten erforderlich, die `[Symbol.toPrimitive]()` Methode
selbst aufzurufen; JavaScript ruft sie automatisch auf, wenn es ein Objekt antrifft, bei dem
ein primitiver Wert erwartet wird.

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
