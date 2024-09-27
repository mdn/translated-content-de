---
title: Date.prototype[Symbol.toPrimitive]()
slug: Web/JavaScript/Reference/Global_Objects/Date/Symbol.toPrimitive
l10n:
  sourceCommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{JSRef}}

Die **`[Symbol.toPrimitive]()`** Methode von {{jsxref("Date")}} Instanzen gibt einen primitiven Wert zurück, der dieses Datum repräsentiert. Dieser Wert kann eine Zeichenkette oder eine Zahl sein, abhängig von dem gegebenen Hinweis.

{{EmbedInteractiveExample("pages/js/date-toprimitive.html")}}

## Syntax

```js-nolint
date[Symbol.toPrimitive](hint)
```

### Parameter

- `hint`
  - : Eine Zeichenkette, die den Typ des primitiven Werts darstellt, der zurückgegeben werden soll. Die folgenden Werte sind gültig:
    - `"string"` oder `"default"`: Die Methode sollte eine Zeichenkette zurückgeben.
    - `"number"`: Die Methode sollte eine Zahl zurückgeben.

### Rückgabewert

Falls `hint` `"string"` oder `"default"` ist, gibt diese Methode eine Zeichenkette zurück, indem sie den `this`-Wert [in eine Zeichenkette umwandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) (zuerst wird `toString()` versucht, dann `valueOf()`).

Falls `hint` `"number"` ist, gibt diese Methode eine Zahl zurück, indem sie den `this`-Wert [in eine Zahl umwandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) (zuerst wird `valueOf()` versucht, dann `toString()`).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn das `hint`-Argument nicht einer der drei gültigen Werte ist.

## Beschreibung

Die `[Symbol.toPrimitive]()`-Methode ist Teil des [Typumwandlungsprotokolls](/de/docs/Web/JavaScript/Data_structures#type_coercion). JavaScript ruft die `[Symbol.toPrimitive]()`-Methode immer vorrangig auf, um ein Objekt in einen primitiven Wert umzuwandeln. Sie müssen die `[Symbol.toPrimitive]()`-Methode selten selbst aufrufen; JavaScript ruft sie automatisch auf, wenn ein Objekt auftritt, wo ein primitiver Wert erwartet wird.

Die `[Symbol.toPrimitive]()`-Methode des {{jsxref("Date")}}-Objekts gibt einen primitiven Wert zurück, indem sie entweder {{jsxref("Date/valueOf", "this.valueOf()")}} aufruft und eine Zahl zurückgibt oder {{jsxref("Date/toString", "this.toString()")}} aufruft und eine Zeichenkette zurückgibt. Sie existiert, um den Standardprozess der [primitiven Umwandlung](/de/docs/Web/JavaScript/Data_structures#primitive_coercion) zu überschreiben, um eine Zeichenkette statt einer Zahl zurückzugeben, da die primitive Umwandlung standardmäßig {{jsxref("Date/valueOf", "valueOf()")}} vor {{jsxref("Date/toString", "toString()")}} aufruft. Mit dem benutzerdefinierten `[Symbol.toPrimitive]()`, gibt `new Date(0) + 1` `"Thu Jan 01 1970 00:00:00 GMT+0000 (Coordinated Universal Time)1"` (eine Zeichenkette) statt `1` (eine Zahl) zurück.

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
