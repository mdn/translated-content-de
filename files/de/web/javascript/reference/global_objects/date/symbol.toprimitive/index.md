---
title: Date.prototype[Symbol.toPrimitive]()
slug: Web/JavaScript/Reference/Global_Objects/Date/Symbol.toPrimitive
l10n:
  sourceCommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{JSRef}}

Die **`[Symbol.toPrimitive]()`** Methode von {{jsxref("Date")}} Instanzen gibt einen primitiven Wert zurück, der dieses Datum darstellt. Es kann entweder ein String oder eine Zahl sein, abhängig von dem angegebenen Hinweis.

{{EmbedInteractiveExample("pages/js/date-toprimitive.html")}}

## Syntax

```js-nolint
date[Symbol.toPrimitive](hint)
```

### Parameter

- `hint`
  - : Ein String, der den Typ des zurückzugebenden primitiven Werts darstellt. Die folgenden Werte sind gültig:
    - `"string"` oder `"default"`: Die Methode sollte einen String zurückgeben.
    - `"number"`: Die Methode sollte eine Zahl zurückgeben.

### Rückgabewert

Wenn `hint` `"string"` oder `"default"` ist, gibt diese Methode einen String zurück, indem sie den `this`-Wert in einen String [umwandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) (zuerst `toString()` und dann `valueOf()` versucht).

Wenn `hint` `"number"` ist, gibt diese Methode eine Zahl zurück, indem sie den `this`-Wert in eine Zahl [umwandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) (zuerst `valueOf()` und dann `toString()` versucht).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn das `hint`-Argument nicht einer der drei gültigen Werte ist.

## Beschreibung

Die `[Symbol.toPrimitive]()` Methode ist Teil des [Typumwandlungsprotokolls](/de/docs/Web/JavaScript/Data_structures#type_coercion). JavaScript ruft immer die `[Symbol.toPrimitive]()` Methode als Priorität auf, um ein Objekt in einen primitiven Wert zu konvertieren. Sie müssen die `[Symbol.toPrimitive]()` Methode selten selbst aufrufen; JavaScript ruft sie automatisch auf, wenn es auf ein Objekt trifft, bei dem ein primitiver Wert erwartet wird.

Die `[Symbol.toPrimitive]()` Methode des {{jsxref("Date")}} Objekts gibt einen primitiven Wert zurück, indem entweder {{jsxref("Date/valueOf", "this.valueOf()")}} aufgerufen wird und eine Zahl zurückgegeben wird, oder {{jsxref("Date/toString", "this.toString()")}} aufgerufen wird und ein String zurückgegeben wird. Sie existiert, um den Standardprozess der [primitiven Umwandlung](/de/docs/Web/JavaScript/Data_structures#primitive_coercion) zu überschreiben, um einen String anstelle einer Zahl zurückzugeben, da die primitive Umwandlung standardmäßig {{jsxref("Date/valueOf", "valueOf()")}} vor {{jsxref("Date/toString", "toString()")}} aufruft. Mit dem benutzerdefinierten `[Symbol.toPrimitive]()`, gibt `new Date(0) + 1` `"Thu Jan 01 1970 00:00:00 GMT+0000 (Coordinated Universal Time)1"` (einen String) anstelle von `1` (einer Zahl) zurück.

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
