---
title: Function.prototype.call()
slug: Web/JavaScript/Reference/Global_Objects/Function/call
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die **`call()`**-Methode von {{jsxref("Function")}} Instanzen ruft diese Funktion mit einem angegebenen `this`-Wert und individuell bereitgestellten Argumenten auf.

{{EmbedInteractiveExample("pages/js/function-call.html")}}

## Syntax

```js-nolint
call(thisArg)
call(thisArg, arg1)
call(thisArg, arg1, arg2)
call(thisArg, arg1, arg2, /* …, */ argN)
```

### Parameter

- `thisArg`
  - : Der Wert, der als `this` verwendet wird, wenn `func` aufgerufen wird. Wenn die Funktion nicht im [Strict-Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) ist, werden [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) und [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined) durch das globale Objekt ersetzt, und primitive Werte werden in Objekte umgewandelt.
- `arg1`, …, `argN` {{optional_inline}}
  - : Argumente für die Funktion.

### Rückgabewert

Das Ergebnis des Aufrufs der Funktion mit dem angegebenen `this`-Wert und den Argumenten.

## Beschreibung

> [!NOTE]
> Diese Funktion ist fast identisch mit {{jsxref("Function/apply", "apply()")}}, außer dass die Funktionsargumente bei `call()` einzeln als Liste übergeben werden, während sie bei `apply()` in einem Objekt kombiniert werden, typischerweise ein Array — zum Beispiel, `func.call(this, "eat", "bananas")` vs. `func.apply(this, ["eat", "bananas"])`.

Normalerweise ist beim Aufruf einer Funktion der Wert von [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) innerhalb der Funktion das Objekt, auf dem die Funktion aufgerufen wurde. Mit `call()` können Sie beim Aufruf einer bestehenden Funktion einen beliebigen Wert als `this` zuweisen, ohne die Funktion zuerst als Eigenschaft an das Objekt anfügen zu müssen. Dies ermöglicht es, Methoden eines Objekts als allgemeine Hilfsfunktionen zu verwenden.

> [!WARNING]
> Verwenden Sie `call()` nicht, um Konstruktoren zu verketten (beispielsweise zur Implementierung von Vererbung). Dies ruft die Konstruktorfunktion als normale Funktion auf, was bedeutet, dass [`new.target`](/de/docs/Web/JavaScript/Reference/Operators/new.target) `undefined` ist, und Klassen einen Fehler werfen, da sie nicht ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden können. Verwenden Sie stattdessen {{jsxref("Reflect.construct()")}} oder [`extends`](/de/docs/Web/JavaScript/Reference/Classes/extends).

## Beispiele

### Verwendung von call(), um eine Funktion aufzurufen und den this-Wert festzulegen

Im folgenden Beispiel wird beim Aufruf von `greet` der Wert von `this` an das Objekt `obj` gebunden, auch wenn `greet` keine Methode von `obj` ist.

```js
function greet() {
  console.log(this.animal, "typically sleep between", this.sleepDuration);
}

const obj = {
  animal: "cats",
  sleepDuration: "12 and 16 hours",
};

greet.call(obj); // cats typically sleep between 12 and 16 hours
```

### Verwendung von call(), um eine Funktion ohne Angabe des ersten Arguments aufzurufen

Wenn der erste `thisArg`-Parameter weggelassen wird, wird er standardmäßig auf `undefined` gesetzt. Im Nicht-Strict-Modus wird der `this`-Wert dann durch {{jsxref("globalThis")}} ersetzt (ähnlich dem globalen Objekt).

```js
globalThis.globProp = "Wisen";

function display() {
  console.log(`globProp value is ${this.globProp}`);
}

display.call(); // Logs "globProp value is Wisen"
```

Im Strict-Modus wird der Wert von `this` nicht ersetzt, sodass er `undefined` bleibt.

```js
"use strict";

globalThis.globProp = "Wisen";

function display() {
  console.log(`globProp value is ${this.globProp}`);
}

display.call(); // throws TypeError: Cannot read the property of 'globProp' of undefined
```

### Transformieren von Methoden zu Hilfsfunktionen

`call()` ist fast gleichbedeutend mit einem normalen Funktionsaufruf, außer dass `this` als normaler Parameter übergeben wird und nicht als Wert, auf dem die Funktion aufgerufen wurde. Dies ähnelt der Funktionsweise von allgemeinen Hilfsfunktionen: Anstatt `array.map(callback)` aufzurufen, verwenden Sie `map(array, callback)`, was Ihnen erlaubt, `map` mit array-ähnlichen Objekten zu verwenden, die keine Arrays sind (zum Beispiel [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments)), ohne `Object.prototype` zu verändern.

Nehmen Sie {{jsxref("Array.prototype.slice()")}}, das Sie zum Konvertieren eines array-ähnlichen Objekts in ein echtes Array verwenden möchten. Sie könnten eine Abkürzung wie diese erstellen:

```js
const slice = Array.prototype.slice;

// ...

slice.call(arguments);
```

Beachten Sie, dass Sie `slice.call` nicht speichern und als einfache Funktion aufrufen können, da die `call()`-Methode auch ihren `this`-Wert liest, der die Funktion ist, die sie aufrufen soll. In diesem Fall können Sie {{jsxref("Function/bind", "bind()")}} verwenden, um den Wert von `this` für `call()` zu binden. Im folgenden Code ist `slice()` eine gebundene Version von `Function.prototype.call()`, mit dem `this`-Wert gebunden an {{jsxref("Array.prototype.slice()")}}. Dies bedeutet, dass zusätzliche `call()`-Aufrufe eliminiert werden können:

```js
// Gleich wie "slice" im vorherigen Beispiel
const unboundSlice = Array.prototype.slice;
const slice = Function.prototype.call.bind(unboundSlice);

// ...

slice(arguments);
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- {{jsxref("Function.prototype.bind()")}}
- {{jsxref("Function.prototype.apply()")}}
- {{jsxref("Reflect.apply()")}}
- [Spread-Syntax (`...`)](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
- [Einführung in Objektorientiertes JavaScript](/de/docs/Learn/JavaScript/Objects)
