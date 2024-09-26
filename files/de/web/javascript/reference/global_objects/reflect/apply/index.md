---
title: Reflect.apply()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/apply
l10n:
  sourceCommit: c607c483fe079c61de5e32fba1a6cce61896e97d
---

{{JSRef}}

Die **`Reflect.apply()`**-Methode ruft eine Zielfunktion mit den angegebenen Argumenten auf.

{{EmbedInteractiveExample("pages/js/reflect-apply.html", "taller")}}

## Syntax

```js-nolint
Reflect.apply(target, thisArgument, argumentsList)
```

### Parameter

- `target`
  - : Die Zielfunktion, die aufgerufen werden soll.
- `thisArgument`
  - : Der Wert von `this`, der für den Aufruf von `target` bereitgestellt wird.
- `argumentsList`
  - : Ein [array-ähnliches Objekt](/de/docs/Web/JavaScript/Guide/Indexed_collections#working_with_array-like_objects), das die Argumente angibt, mit denen `target` aufgerufen werden soll.

### Rückgabewert

Das Ergebnis des Aufrufs der angegebenen `target`-Funktion mit dem spezifizierten `this`-Wert und den Argumenten.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `target` keine Funktion ist oder `argumentsList` kein Objekt ist.

## Beschreibung

`Reflect.apply()` bietet die reflektierende Semantik eines Funktionsaufrufs. Das bedeutet, `Reflect.apply(target, thisArgument, argumentsList)` ist semantisch gleichwertig mit:

```js
Math.floor.apply(null, [1.75]);
Reflect.apply(Math.floor, null, [1.75]);
```

Die einzigen Unterschiede sind:

- `Reflect.apply()` nimmt die aufzurufende Funktion als `target`-Parameter anstelle des `this`-Kontexts.
- `Reflect.apply()` löst einen Fehler aus, wenn `argumentsList` weggelassen wird, anstatt standardmäßig ohne Parameter aufzurufen.

`Reflect.apply()` ruft die `[[Call]]`-Methode [Internmethode des Objekts](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) von `target` auf.

## Beispiele

### Verwendung von Reflect.apply()

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
- {{jsxref("Reflect")}}
- {{jsxref("Function.prototype.apply()")}}
- [`handler.apply()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/apply)