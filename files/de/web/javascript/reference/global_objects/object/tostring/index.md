---
title: Object.prototype.toString()
short-title: toString()
slug: Web/JavaScript/Reference/Global_Objects/Object/toString
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`toString()`** Methode von {{jsxref("Object")}} Instanzen gibt eine Zeichenkette zurück, die dieses Objekt darstellt. Diese Methode soll von abgeleiteten Objekten für benutzerdefinierte [Typumwandlungslogik](/de/docs/Web/JavaScript/Guide/Data_structures#type_coercion) überschrieben werden.

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

Standardmäßig nimmt `toString()` keine Parameter. Jedoch können Objekte, die von `Object` erben, sie mit eigenen Implementierungen überschreiben, die Parameter akzeptieren. Zum Beispiel nehmen die Methoden [`Number.prototype.toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/toString) und [`BigInt.prototype.toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/toString) einen optionalen `radix` Parameter.

### Rückgabewert

Eine Zeichenkette, die das Objekt darstellt.

## Beschreibung

JavaScript ruft die `toString` Methode auf, um [ein Objekt in einen primitiven Wert zu konvertieren](/de/docs/Web/JavaScript/Guide/Data_structures#type_coercion). In der Regel müssen Sie die `toString` Methode nicht selbst aufrufen; JavaScript ruft sie automatisch auf, wenn ein Objekt gefunden wird, wo ein primitiver Wert erwartet wird.

Diese Methode wird vorrangig bei der [Zeichenkettenkonvertierung](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) aufgerufen, aber die [numerische Konvertierung](/de/docs/Web/JavaScript/Guide/Data_structures#numeric_coercion) und [primitive Konvertierung](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion) rufen `valueOf()` vorrangig auf. Da die Basis-Methode [`valueOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf) jedoch ein Objekt zurückgibt, wird normalerweise die `toString()` Methode aufgerufen, es sei denn, das Objekt überschreibt `valueOf()`. Zum Beispiel gibt `+[1]` den Wert `1` zurück, da seine [`toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/toString) Methode `"1"` zurückgibt, welches dann in eine Zahl umgewandelt wird.

Alle Objekte, die von `Object.prototype` erben (das heißt, alle außer [`null`-Prototyp Objekten](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects)) erben die `toString()` Methode. Wenn Sie ein benutzerdefiniertes Objekt erstellen, können Sie `toString()` überschreiben, um eine benutzerdefinierte Methode aufzurufen, sodass Ihr benutzerdefiniertes Objekt in einen Zeichenkettenwert umgewandelt werden kann. Alternativ können Sie eine Methode [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) hinzufügen, die noch mehr Kontrolle über den Konvertierungsprozess ermöglicht und immer gegenüber `valueOf` oder `toString` für jede Typumwandlung bevorzugt wird.

Um das Basis-`Object.prototype.toString()` mit einem Objekt zu verwenden, das es überschreibt (oder um es auf `null` oder `undefined` auszuführen), müssen Sie {{jsxref("Function.prototype.call()")}} oder {{jsxref("Function.prototype.apply()")}} aufrufen, wobei Sie das Objekt, das Sie untersuchen möchten, als ersten Parameter (genannt `thisArg`) übergeben.

```js
const arr = [1, 2, 3];

arr.toString(); // "1,2,3"
Object.prototype.toString.call(arr); // "[object Array]"
```

`Object.prototype.toString()` gibt `"[object Type]"` zurück, wobei `Type` der Objekttyp ist. Wenn das Objekt eine [`Symbol.toStringTag`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) Eigenschaft hat, deren Wert eine Zeichenkette ist, wird dieser Wert als `Type` verwendet. Viele eingebaute Objekte, einschließlich [`Map`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map) und [`Symbol`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol), haben ein `Symbol.toStringTag`. Einige Objekte, die vor ES6 existierten, haben kein `Symbol.toStringTag`, aber dennoch einen speziellen Tag. Dazu gehören (das Tag ist der unten angegebene Typenname):

- [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [`Function`](/de/docs/Web/JavaScript/Reference/Functions) (alles, dessen [`typeof`](/de/docs/Web/JavaScript/Reference/Operators/typeof) `"function"` zurückgibt)
- [`Error`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error)
- [`Boolean`](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean)
- [`Number`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number)
- [`String`](/de/docs/Web/JavaScript/Reference/Global_Objects/String)
- [`Date`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date)
- [`RegExp`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp)

Das [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments) Objekt gibt `"[object Arguments]"` zurück. Alles andere, einschließlich benutzerdefinierter Klassen, gibt, sofern kein benutzerdefiniertes `Symbol.toStringTag` vorhanden ist, `"[object Object]"` zurück.

`Object.prototype.toString()` auf [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) und {{jsxref("undefined")}} aufgerufen, gibt `[object Null]` bzw. `[object Undefined]` zurück.

## Beispiele

### Überschreiben von toString für benutzerdefinierte Objekte

Sie können eine Funktion erstellen, die anstelle der Standard-`toString()` Methode aufgerufen wird. Die `toString()` Funktion, die Sie erstellen, sollte einen Zeichenkettenwert zurückgeben. Wenn sie ein Objekt zurückgibt und die Methode implizit während der [Typumwandlung](/de/docs/Web/JavaScript/Guide/Data_structures#type_coercion) aufgerufen wird, wird ihr Ergebnis ignoriert und der Wert einer verwandten Methode, {{jsxref("Object/valueOf", "valueOf()")}}, wird stattdessen verwendet, oder es wird ein `TypeError` ausgelöst, wenn keine dieser Methoden einen primitiven Wert zurückgibt.

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

Wenn Sie die `toString()` Methode, entweder explizit oder implizit, auf eine Instanz von `Dog` aufrufen, gibt sie den Standardwert zurück, der von {{jsxref("Object")}} geerbt wurde:

```js
const theDog = new Dog("Gabby", "Lab", "chocolate", "female");

theDog.toString(); // "[object Object]"
`${theDog}`; // "[object Object]"
```

Der folgende Code überschreibt die Standard-`toString()` Methode. Diese Methode generiert eine Zeichenkette, die den `name`, `breed`, `color` und `sex` des Objekts enthält.

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

Mit dem vorstehenden Code wird jedes Mal, wenn eine Instanz von `Dog` in einem Zeichenkettenkontext verwendet wird, die `toString()` Methode automatisch von JavaScript aufgerufen.

```js
const theDog = new Dog("Gabby", "Lab", "chocolate", "female");

`${theDog}`; // "Dog Gabby is a female chocolate Lab"
```

### Verwenden von toString() zur Erkennung von Objektklassen

`toString()` kann mit jedem Objekt verwendet werden und erlaubt es Ihnen (standardmäßig), dessen Klasse zu ermitteln.

```js
const toString = Object.prototype.toString;

toString.call(new Date()); // [object Date]
toString.call(new String()); // [object String]
// Math has its Symbol.toStringTag
toString.call(Math); // [object Math]

toString.call(undefined); // [object Undefined]
toString.call(null); // [object Null]
```

Die Verwendung von `toString()` auf diese Weise ist nicht zuverlässig; Objekte können das Verhalten von `Object.prototype.toString()` ändern, indem sie eine {{jsxref("Symbol.toStringTag")}} Eigenschaft definieren, was zu unerwarteten Ergebnissen führen kann. Zum Beispiel:

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
