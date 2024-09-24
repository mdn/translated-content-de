---
title: Date.prototype[Symbol.toPrimitive]()
slug: Web/JavaScript/Reference/Global_Objects/Date/Symbol.toPrimitive
l10n:
  sourceCommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{JSRef}}

Die **`[Symbol.toPrimitive]()`** Methode von {{jsxref("Date")}}-Instanzen gibt einen primitiven Wert zurück, der dieses Datum darstellt. Dieser kann je nach Angabe entweder ein String oder eine Zahl sein.

{{EmbedInteractiveExample("pages/js/date-toprimitive.html")}}

## Syntax

```js-nolint
date[Symbol.toPrimitive](hint)
```

### Parameter

- `hint`
  - : Ein String, der den Typ des zurückzugebenden primitiven Wertes darstellt. Die folgenden Werte sind gültig:
    - `"string"` oder `"default"`: Die Methode sollte einen String zurückgeben.
    - `"number"`: Die Methode sollte eine Zahl zurückgeben.

### Rückgabewert

Wenn `hint` `"string"` oder `"default"` ist, liefert diese Methode einen String zurück, indem der `this`-Wert zu einem String [gezwungen wird](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) (zuerst mit `toString()`, dann mit `valueOf()`).

Wenn `hint` `"number"` ist, liefert diese Methode eine Zahl zurück, indem der `this`-Wert zu einer Zahl [gezwungen wird](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) (zuerst mit `valueOf()`, dann mit `toString()`).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn das `hint`-Argument nicht einer der drei gültigen Werte ist.

## Beschreibung

Die Methode `[Symbol.toPrimitive]()` ist Teil des [Typumwandlungsprotokolls](/de/docs/Web/JavaScript/Data_structures#type_coercion). JavaScript ruft immer die `[Symbol.toPrimitive]()`-Methode vorrangig auf, um ein Objekt in einen primitiven Wert umzuwandeln. In der Regel müssen Sie die `[Symbol.toPrimitive]()`-Methode nicht selbst aufrufen; JavaScript ruft sie automatisch auf, wenn ein Objekt erwartet wird, bei dem ein primitiver Wert benötigt wird.

Die `[Symbol.toPrimitive]()`-Methode des {{jsxref("Date")}}-Objekts gibt einen primitiven Wert zurück, indem entweder {{jsxref("Date/valueOf", "this.valueOf()")}} aufgerufen und eine Zahl zurückgegeben wird, oder {{jsxref("Date/toString", "this.toString()")}} aufgerufen und ein String zurückgegeben wird. Sie existiert, um den Standardprozess der [primitiven Umwandlung](/de/docs/Web/JavaScript/Data_structures#primitive_coercion) zu überschreiben, um einen String anstelle einer Zahl zurückzugeben, da die primitive Umwandlung standardmäßig {{jsxref("Date/valueOf", "valueOf()")}} vor {{jsxref("Date/toString", "toString()")}} aufruft. Mit dem benutzerdefinierten `[Symbol.toPrimitive]()`, ergibt `new Date(0) + 1` den Wert `"Thu Jan 01 1970 00:00:00 GMT+0000 (Coordinated Universal Time)1"` (ein String) anstelle von `1` (einer Zahl).

## Beispiele

### Verwendung von \[Symbol.toPrimitive]()

```js
const d = new Date(0); // 1970-01-01T00:00:00.000Z

d[Symbol.toPrimitive]("string"); // "Thu Jan 01 1970 00:00:00 GMT+0000 (Coordinated Universal Time)"
d[Symbol.toPrimitive]("number"); // 0
d[Symbol.toPrimitive]("default"); // "Thu Jan 01 1970 00:00:00 GMT+0000 (Coordinated Universal Time)"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Symbol.toPrimitive")}}
