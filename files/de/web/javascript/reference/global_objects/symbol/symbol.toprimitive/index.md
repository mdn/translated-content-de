---
title: Symbol.prototype[Symbol.toPrimitive]()
short-title: "[Symbol.toPrimitive]()"
slug: Web/JavaScript/Reference/Global_Objects/Symbol/Symbol.toPrimitive
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`[Symbol.toPrimitive]()`** Methode von {{jsxref("Symbol")}} Werten gibt diesen Symbolwert zurück.

## Syntax

```js-nolint
symbolValue[Symbol.toPrimitive](hint)
```

### Parameter

- `hint`
  - : Ein Zeichenfolgenwert, der den zurückzugebenden primitiven Wert anzeigt. Der Wert wird ignoriert.

### Rückgabewert

Der primitive Wert des spezifizierten {{jsxref("Symbol")}} Objekts.

## Beschreibung

Die Methode `[Symbol.toPrimitive]()` von {{jsxref("Symbol")}} gibt den primitiven Wert eines Symbolobjekts als Symbol-Datentyp zurück. Das Argument `hint` wird nicht verwendet.

JavaScript ruft die Methode `[Symbol.toPrimitive]()` auf, um ein Objekt in einen primitiven Wert zu konvertieren. Es ist selten nötig, die Methode `[Symbol.toPrimitive]()` selbst aufzurufen; JavaScript ruft sie automatisch auf, wenn es auf ein Objekt stößt, bei dem ein primitiver Wert erwartet wird.

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
