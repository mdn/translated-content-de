---
title: Reflect.apply()
short-title: apply()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/apply
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
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
  - : Die aufzurufende Zielfunktion.
- `thisArgument`
  - : Der Wert von `this`, der beim Aufruf von `target` verwendet wird.
- `argumentsList`
  - : Ein [array-ähnliches Objekt](/de/docs/Web/JavaScript/Guide/Indexed_collections#working_with_array-like_objects), das die Argumente angibt, mit denen `target` aufgerufen werden soll.

### Rückgabewert

Das Ergebnis des Aufrufs der angegebenen Funktion `target` mit dem festgelegten `this`-Wert und den Argumenten.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `target` keine Funktion oder `argumentsList` kein Objekt ist.

## Beschreibung

`Reflect.apply()` stellt die reflektive Semantik eines Funktionsaufrufs bereit. Das heißt, `Reflect.apply(target, thisArgument, argumentsList)` ist semantisch gleichbedeutend mit:

```js
Math.floor.apply(null, [1.75]);
Reflect.apply(Math.floor, null, [1.75]);
```

Die einzigen Unterschiede sind:

- `Reflect.apply()` erhält die aufzurufende Funktion über den Parameter `target` statt über den `this`-Kontext.
- `Reflect.apply()` löst eine Ausnahme aus, wenn `argumentsList` weggelassen wird, statt standardmäßig einen Aufruf ohne Argumente auszuführen.

`Reflect.apply()` ruft die [objektinterne Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) `[[Call]]` von `target` auf.

## Beispiele

### Reflect.apply() verwenden

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

- [Polyfill für `Reflect.apply` in `core-js`](https://core-js.io/docs/features/ecmascript/reflect)
- [Polyfill für `Reflect.apply` von es-shims](https://www.npmjs.com/package/reflect-apply)
- {{jsxref("Reflect")}}
- {{jsxref("Function.prototype.apply()")}}
- [`handler.apply()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/apply)
