---
title: Object.prototype.toString()
short-title: toString()
slug: Web/JavaScript/Reference/Global_Objects/Object/toString
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die **`toString()`** Methode von {{jsxref("Object")}} Instanzen gibt einen String zurück, der dieses Objekt darstellt. Diese Methode soll von abgeleiteten Objekten für eine benutzerdefinierte [Typumwandlung](/de/docs/Web/JavaScript/Guide/Data_structures#type_coercion) überschrieben werden.

{{InteractiveExample("JavaScript Demo: Object.prototype.toString()")}}

```js interactive-example
const map = new Map();

console.log(map.toString());
// Expected output: "[object Map]"
```

## Syntax

```js-nolint
toString()
```

### Parameter

Standardmäßig nimmt `toString()` keine Parameter entgegen. Objekte, die von `Object` erben, können sie jedoch mit ihren eigenen Implementierungen überschreiben, die Parameter akzeptieren. Zum Beispiel nehmen die Methoden [`Number.prototype.toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/toString) und [`BigInt.prototype.toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/toString) einen optionalen `radix`-Parameter.

### Rückgabewert

Ein String, der das Objekt darstellt.

## Beschreibung

JavaScript ruft die `toString`-Methode auf, um [ein Objekt in einen primitiven Wert umzuwandeln](/de/docs/Web/JavaScript/Guide/Data_structures#type_coercion). In der Regel müssen Sie die `toString`-Methode nicht selbst aufrufen; JavaScript ruft sie automatisch auf, wenn ein Objekt an einem Ort gefunden wird, an dem ein primitiver Wert erwartet wird.

Diese Methode wird vorrangig bei der [Zeichenfolgenumwandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) aufgerufen, aber [numerische Umwandlung](/de/docs/Web/JavaScript/Guide/Data_structures#numeric_coercion) und [primitive Umwandlung](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion) rufen vorrangig `valueOf()` auf. Da jedoch die Basismethode [`valueOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf) ein Objekt zurückgibt, wird in der Regel die `toString()`-Methode am Ende aufgerufen, es sei denn, das Objekt überschreibt `valueOf()`. Zum Beispiel gibt `+[1]` den Wert `1` zurück, weil seine [`toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/toString) Methode `"1"` zurückgibt, was dann in eine Zahl umgewandelt wird.

Alle Objekte, die von `Object.prototype` erben (das bedeutet, alle außer [null-Prototyp Objekte](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects)), erben die `toString()`-Methode. Wenn Sie ein benutzerdefiniertes Objekt erstellen, können Sie `toString()` überschreiben, um eine benutzerdefinierte Methode aufzurufen, so dass Ihr benutzerdefiniertes Objekt in einen String-Wert umgewandelt werden kann. Alternativ können Sie eine [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) Methode hinzufügen, die noch mehr Kontrolle über den Konvertierungsprozess bietet und bei jeder Typumwandlung immer `valueOf` oder `toString` vorgezogen wird.

Um das Basis-`Object.prototype.toString()` mit einem Objekt zu verwenden, das es überschrieben hat (oder um es bei `null` oder `undefined` aufzurufen), müssen Sie {{jsxref("Function.prototype.call()")}} oder {{jsxref("Function.prototype.apply()")}} darauf aufrufen und das Objekt, das Sie untersuchen möchten, als ersten Parameter (genannt `thisArg`) übergeben.

```js
const arr = [1, 2, 3];

arr.toString(); // "1,2,3"
Object.prototype.toString.call(arr); // "[object Array]"
```

`Object.prototype.toString()` gibt `"[object Type]"` zurück, wobei `Type` der Objekttyp ist. Wenn das Objekt eine [`Symbol.toStringTag`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) Eigenschaft hat, deren Wert ein String ist, wird dieser Wert als `Type` verwendet. Viele eingebaute Objekte, einschließlich [`Map`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map) und [`Symbol`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol), haben einen `Symbol.toStringTag`. Einige Objekte, die vor ES6 existierten, haben keinen `Symbol.toStringTag`, aber dennoch einen speziellen Tag. Dazu gehören (der Tag ist derselbe wie der unten angegebene Typname):

- [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [`Function`](/de/docs/Web/JavaScript/Reference/Functions) (alles, dessen [`typeof`](/de/docs/Web/JavaScript/Reference/Operators/typeof) `"function"` zurückgibt)
- [`Error`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error)
- [`Boolean`](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean)
- [`Number`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number)
- [`String`](/de/docs/Web/JavaScript/Reference/Global_Objects/String)
- [`Date`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date)
- [`RegExp`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp)

Das [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments) Objekt gibt `"[object Arguments]"` zurück. Alles andere, einschließlich benutzerdefinierter Klassen, wird, es sei denn, es gibt ein benutzerdefiniertes `Symbol.toStringTag`, `"[object Object]"` zurückgeben.

`Object.prototype.toString()` aufgerufen auf [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) und {{jsxref("undefined")}} gibt `[object Null]` und `[object Undefined]` zurück.

## Beispiele

### Überschreiben von toString für benutzerdefinierte Objekte

Sie können eine Funktion erstellen, die anstelle der Standard-`toString()`-Methode aufgerufen wird. Die von Ihnen erstellte `toString()`-Funktion sollte einen String-Wert zurückgeben. Wenn sie ein Objekt zurückgibt und die Methode implizit während der [Typumwandlung](/de/docs/Web/JavaScript/Guide/Data_structures#type_coercion) aufgerufen wird, wird das Ergebnis ignoriert, und der Wert einer verwandten Methode, {{jsxref("Object/valueOf", "valueOf()")}}, wird stattdessen verwendet, oder es wird ein `TypeError` ausgelöst, wenn keine dieser Methoden einen primitiven Wert zurückgibt.

Der folgende Code definiert eine `Dog`-Klasse.

```js
class Dog {
  constructor(name, breed, color, sex) {
    this.name = name;
    this.breed = breed;
    this.color = color;
    this.sex = sex;
  }
}
```

Wenn Sie die `toString()`-Methode, entweder explizit oder implizit, auf einer Instanz von `Dog` aufrufen, gibt sie den Standardwert zurück, der von {{jsxref("Object")}} geerbt wurde:

```js
const theDog = new Dog("Gabby", "Lab", "chocolate", "female");

theDog.toString(); // "[object Object]"
`${theDog}`; // "[object Object]"
```

Der folgende Code überschreibt die Standard-`toString()`-Methode. Diese Methode generiert einen String, der `name`, `breed`, `color` und `sex` des Objekts enthält.

```js
class Dog {
  constructor(name, breed, color, sex) {
    this.name = name;
    this.breed = breed;
    this.color = color;
    this.sex = sex;
  }
  toString() {
    return `Dog ${this.name} is a ${this.sex} ${this.color} ${this.breed}`;
  }
}
```

Mit dem vorhergehenden Code wird jedes Mal, wenn eine Instanz von `Dog` in einem String-Kontext verwendet wird, automatisch die `toString()`-Methode durch JavaScript aufgerufen.

```js
const theDog = new Dog("Gabby", "Lab", "chocolate", "female");

`${theDog}`; // "Dog Gabby is a female chocolate Lab"
```

### Verwendung von toString() zur Erkennung der Objektklasse

`toString()` kann mit jedem Objekt verwendet werden und ermöglicht es (standardmäßig) dessen Klasse zu ermitteln.

```js
const toString = Object.prototype.toString;

toString.call(new Date()); // [object Date]
toString.call(new String()); // [object String]
// Math has its Symbol.toStringTag
toString.call(Math); // [object Math]

toString.call(undefined); // [object Undefined]
toString.call(null); // [object Null]
```

Die Verwendung von `toString()` auf diese Weise ist unzuverlässig; Objekte können das Verhalten von `Object.prototype.toString()` ändern, indem sie eine {{jsxref("Symbol.toStringTag")}} Eigenschaft definieren, was zu unerwarteten Ergebnissen führen kann. Zum Beispiel:

```js
const myDate = new Date();
Object.prototype.toString.call(myDate); // [object Date]

myDate[Symbol.toStringTag] = "myDate";
Object.prototype.toString.call(myDate); // [object myDate]

Date.prototype[Symbol.toStringTag] = "prototype polluted";
Object.prototype.toString.call(new Date()); // [object prototype polluted]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Object.prototype.toString` mit `Symbol.toStringTag` Unterstützung in `core-js`](https://github.com/zloirock/core-js#ecmascript-object)
- {{jsxref("Object.prototype.valueOf()")}}
- {{jsxref("Number.prototype.toString()")}}
- {{jsxref("Symbol.toPrimitive")}}
- {{jsxref("Symbol.toStringTag")}}
