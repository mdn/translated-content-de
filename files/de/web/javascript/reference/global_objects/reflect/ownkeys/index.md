---
title: Reflect.ownKeys()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/ownKeys
l10n:
  sourceCommit: e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{JSRef}}

Die statische Methode **`Reflect.ownKeys()`** gibt ein Array der eigenen Eigenschaftsschlüssel des `target`-Objekts zurück.

{{EmbedInteractiveExample("pages/js/reflect-ownkeys.html")}}

## Syntax

```js-nolint
Reflect.ownKeys(target)
```

### Parameter

- `target`
  - : Das Zielobjekt, von dem die eigenen Schlüssel abgefragt werden sollen.

### Rückgabewert

Ein {{jsxref("Array")}} der eigenen Eigenschaftsschlüssel des `target`-Objekts, einschließlich Zeichenketten und Symbole. Für die meisten Objekte wird das Array in der folgenden Reihenfolge sein:

1. Nicht negative ganzzahlige Indizes in aufsteigender numerischer Ordnung (aber als Zeichenketten)
2. Andere Zeichenfolgeschlüssel in der Reihenfolge der Eigenschaftserstellung
3. Symbolschlüssel in der Reihenfolge der Eigenschaftserstellung.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `target` kein Objekt ist.

## Beschreibung

`Reflect.ownKeys()` bietet die reflectionale Semantik, um alle Eigenschaftsschlüssel eines Objekts abzurufen. Es ist der einzige Weg, um alle eigenen Eigenschaften – aufzählbare und nicht aufzählbare, Zeichenketten und Symbole – in einem Aufruf zu erhalten, ohne zusätzliche Filterlogik. Beispielsweise nimmt {{jsxref("Object.getOwnPropertyNames()")}} den Rückgabewert von `Reflect.ownKeys()` und filtert nur auf Zeichenketten-Werte, während {{jsxref("Object.getOwnPropertySymbols()")}} nur auf Symbolwerte filtert. Da normale Objekte `[[OwnPropertyKeys]]` implementieren, um alle Zeichenfolgeschlüssel vor Symbols zu liefern, ist `Reflect.ownKeys(target)` normalerweise äquivalent zu `Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target))`. Wenn das Objekt jedoch eine benutzerdefinierte `[[OwnPropertyKeys]]`-Methode hat (z.B. durch einen Proxy's [`ownKeys`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/ownKeys) Handler), kann die Reihenfolge der Schlüssel anders sein.

`Reflect.ownKeys()` ruft die `[[OwnPropertyKeys]]` [interne Objektmethode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) von `target` auf.

## Beispiele

### Verwendung von Reflect.ownKeys()

```js
Reflect.ownKeys({ z: 3, y: 2, x: 1 }); // [ "z", "y", "x" ]
Reflect.ownKeys([]); // ["length"]

const sym = Symbol.for("comet");
const sym2 = Symbol.for("meteor");
const obj = {
  [sym]: 0,
  str: 0,
  773: 0,
  0: 0,
  [sym2]: 0,
  "-1": 0,
  8: 0,
  "second str": 0,
};
Reflect.ownKeys(obj);
// [ "0", "8", "773", "str", "-1", "second str", Symbol(comet), Symbol(meteor) ]
// Indizes in numerischer Ordnung,
// Zeichenfolgen in Einfügereihenfolge,
// Symbole in Einfügereihenfolge
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Reflect.ownKeys` in `core-js`](https://github.com/zloirock/core-js#ecmascript-reflect)
- {{jsxref("Reflect")}}
- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Object.getOwnPropertySymbols()")}}
- [`handler.ownKeys()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/ownKeys)
