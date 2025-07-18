---
title: Reflect.apply()
short-title: apply()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/apply
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die statische Methode **`Reflect.apply()`** ruft eine Zielfunktion mit den angegebenen Argumenten auf.

{{InteractiveExample("JavaScript Demo: Reflect.apply()", "taller")}}

```js interactive-example
console.log(Reflect.apply(Math.floor, undefined, [1.75]));
// Expected output: 1

console.log(
  Reflect.apply(String.fromCharCode, undefined, [104, 101, 108, 108, 111]),
);
// Expected output: "hello"

console.log(
  Reflect.apply(RegExp.prototype.exec, /ab/, ["confabulation"]).index,
);
// Expected output: 4

console.log(Reflect.apply("".charAt, "ponies", [3]));
// Expected output: "i"
```

## Syntax

```js-nolint
Reflect.apply(target, thisArgument, argumentsList)
```

### Parameter

- `target`
  - : Die Zielfunktion, die aufgerufen werden soll.
- `thisArgument`
  - : Der Wert für `this`, der für den Aufruf an `target` übergeben wird.
- `argumentsList`
  - : Ein [array-ähnliches Objekt](/de/docs/Web/JavaScript/Guide/Indexed_collections#working_with_array-like_objects), das die Argumente angibt, mit denen `target` aufgerufen werden soll.

### Rückgabewert

Das Ergebnis des Aufrufs der angegebenen `target`-Funktion mit dem angegebenen `this`-Wert und den Argumenten.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `target` keine Funktion ist oder `argumentsList` kein Objekt ist.

## Beschreibung

`Reflect.apply()` bietet die reflexive Semantik eines Funktionsaufrufs. Das heißt, `Reflect.apply(target, thisArgument, argumentsList)` ist semantisch äquivalent zu:

```js
Math.floor.apply(null, [1.75]);
Reflect.apply(Math.floor, null, [1.75]);
```

Die einzigen Unterschiede sind:

- `Reflect.apply()` nimmt die aufzurufende Funktion als `target`-Parameter anstelle des `this`-Kontexts.
- `Reflect.apply()` wirft einen Fehler, wenn `argumentsList` weggelassen wird, anstatt standardmäßig ohne Parameter aufzurufen.

`Reflect.apply()` ruft die `[[Call]]` [interne Methode des Objekts](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) von `target` auf.

## Beispiele

### Verwenden von Reflect.apply()

```js
Reflect.apply(Math.floor, undefined, [1.75]);
// 1;

Reflect.apply(String.fromCharCode, undefined, [104, 101, 108, 108, 111]);
// "hello"

Reflect.apply(RegExp.prototype.exec, /ab/, ["confabulation"]).index;
// 4

Reflect.apply("".charAt, "ponies", [3]);
// "i"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Reflect.apply` in `core-js`](https://github.com/zloirock/core-js#ecmascript-reflect)
- [es-shims Polyfill von `Reflect.apply`](https://www.npmjs.com/package/reflect-apply)
- {{jsxref("Reflect")}}
- {{jsxref("Function.prototype.apply()")}}
- [`handler.apply()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/apply)
