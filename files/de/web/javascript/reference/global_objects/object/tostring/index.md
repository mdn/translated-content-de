---
title: Object.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Object/toString
l10n:
  sourceCommit: 364a4d02b10854ab7cef4ff4b0ec3616d4e1c8ab
---

{{JSRef}}

Die **`toString()`** Methode von {{jsxref("Object")}} Instanzen gibt einen String zurück, der dieses Objekt repräsentiert. Diese Methode soll von abgeleiteten Objekten überschrieben werden, um benutzerdefinierte [Typerzwungen](/de/docs/Web/JavaScript/Guide/Data_structures#type_coercion)-Logik zu ermöglichen.

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

Standardmäßig nimmt `toString()` keine Parameter an. Objekte, die von `Object` erben, können es jedoch mit eigenen Implementierungen überschreiben, die Parameter annehmen. Zum Beispiel nehmen die Methoden [`Number.prototype.toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/toString) und [`BigInt.prototype.toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/toString) einen optionalen `radix`-Parameter an.

### Rückgabewert

Ein String, der das Objekt repräsentiert.

## Beschreibung

JavaScript ruft die `toString`-Methode auf, um [ein Objekt in einen primitiven Wert zu konvertieren](/de/docs/Web/JavaScript/Guide/Data_structures#type_coercion). Sie müssen die `toString`-Methode selten selbst aufrufen; JavaScript ruft sie automatisch auf, wenn ein Objekt an einer Stelle erwartet wird, an der ein primitiver Wert benötigt wird.

Diese Methode wird vorrangig durch [String-Konvertierung](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) aufgerufen, aber [numerische Konvertierung](/de/docs/Web/JavaScript/Guide/Data_structures#numeric_coercion) und [primitive Konvertierung](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion) rufen vorrangig `valueOf()` auf. Da aber die Basis-Methoden [`valueOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf) ein Objekt zurückgeben, wird die `toString()`-Methode normalerweise am Ende aufgerufen, es sei denn, das Objekt überschreibt `valueOf()`. Zum Beispiel ergibt `+[1]` `1`, weil die [`toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/toString)-Methode `"1"` zurückgibt, welche dann in eine Zahl umgewandelt wird.

Alle Objekte, die von `Object.prototype` erben (das heißt, alle außer [`null`-Prototype-Objekte](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects)) erben die `toString()`-Methode. Wenn Sie ein benutzerdefiniertes Objekt erstellen, können Sie `toString()` überschreiben, um eine benutzerdefinierte Methode aufzurufen, sodass Ihr benutzerdefiniertes Objekt in einen String-Wert umgewandelt werden kann. Alternativ können Sie eine [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive)-Methode hinzufügen, die noch mehr Kontrolle über den Konvertierungsprozess ermöglicht und bei jeglicher Typkonvertierung immer `valueOf` oder `toString` vorgezogen wird.

Um die Basis `Object.prototype.toString()` mit einem Objekt zu verwenden, das es überschrieben hat (oder um es auf `null` oder `undefined` aufzurufen), müssen Sie {{jsxref("Function.prototype.call()")}} oder {{jsxref("Function.prototype.apply()")}} darauf aufrufen und das zu inspizierende Objekt als ersten Parameter (`thisArg` genannt) übergeben.

```js
const arr = [1, 2, 3];

arr.toString(); // "1,2,3"
Object.prototype.toString.call(arr); // "[object Array]"
```

`Object.prototype.toString()` gibt `"[object Type]"` zurück, wobei `Type` der Objekttyp ist. Wenn das Objekt eine [`Symbol.toStringTag`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft hat, deren Wert ein String ist, wird dieser Wert als `Type` verwendet. Viele eingebaute Objekte, einschließlich [`Map`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map) und [`Symbol`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol), haben ein `Symbol.toStringTag`. Einige Objekte, die vor ES6 existieren, haben kein `Symbol.toStringTag`, aber dennoch ein spezielles Tag. Sie beinhalten (das Tag ist identisch mit dem unten angegebenen Typnamen):

- [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [`Function`](/de/docs/Web/JavaScript/Reference/Functions) (alles, dessen [`typeof`](/de/docs/Web/JavaScript/Reference/Operators/typeof) `"function"` zurückgibt)
- [`Error`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error)
- [`Boolean`](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean)
- [`Number`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number)
- [`String`](/de/docs/Web/JavaScript/Reference/Global_Objects/String)
- [`Date`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date)
- [`RegExp`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp)

Das [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments)-Objekt gibt `"[object Arguments]"` zurück. Alles andere, einschließlich benutzerdefinierter Klassen, es sei denn, es gibt ein benutzerdefiniertes `Symbol.toStringTag`, wird `"[object Object]"` zurückgeben.

`Object.prototype.toString()` aufgerufen auf [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) und {{jsxref("undefined")}} gibt `[object Null]` und `[object Undefined]` zurück, jeweils entsprechend.

## Beispiele

### Überschreiben von toString für benutzerdefinierte Objekte

Sie können eine Funktion erstellen, die anstelle der Standard-`toString()`-Methode aufgerufen wird. Die `toString()`-Funktion, die Sie erstellen, sollte einen String-Wert zurückgeben. Wenn sie ein Objekt zurückgibt und die Methode implizit während der [Typkonvertierung](/de/docs/Web/JavaScript/Guide/Data_structures#type_coercion) aufgerufen wird, wird das Ergebnis ignoriert und der Wert einer verwandten Methode, {{jsxref("Object/valueOf", "valueOf()")}}, verwendet, oder ein `TypeError` wird ausgelöst, wenn keine dieser Methoden einen primitiven Wert zurückgibt.

Der folgende Code definiert eine `Dog` Klasse.

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

Wenn Sie die `toString()`-Methode auf eine Instanz von `Dog` entweder explizit oder implizit aufrufen, gibt sie den Standardwert zurück, der von {{jsxref("Object")}} geerbt wird:

```js
const theDog = new Dog("Gabby", "Lab", "chocolate", "female");

theDog.toString(); // "[object Object]"
`${theDog}`; // "[object Object]"
```

Der folgende Code überschreibt die Standard-`toString()`-Methode. Diese Methode erzeugt einen String, der den `name`, die `breed`, die `color` und das `sex` des Objekts enthält.

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

Mit dem obigen Code wird jedes Mal, wenn eine Instanz von `Dog` in einem String-Kontext verwendet wird, `JavaScript` automatisch die `toString()`-Methode aufrufen.

```js
const theDog = new Dog("Gabby", "Lab", "chocolate", "female");

`${theDog}`; // "Dog Gabby is a female chocolate Lab"
```

### Verwendung von toString(), um die Objektklasse zu erkennen

`toString()` kann mit jedem Objekt verwendet werden und erlaubt es Ihnen (standardmäßig), seine Klasse zu erhalten.

```js
const toString = Object.prototype.toString;

toString.call(new Date()); // [object Date]
toString.call(new String()); // [object String]
// Math has its Symbol.toStringTag
toString.call(Math); // [object Math]

toString.call(undefined); // [object Undefined]
toString.call(null); // [object Null]
```

Die Verwendung von `toString()` auf diese Weise ist unzuverlässig; Objekte können das Verhalten von `Object.prototype.toString()` ändern, indem sie eine {{jsxref("Symbol.toStringTag")}}-Eigenschaft definieren, was zu unerwarteten Ergebnissen führt. Zum Beispiel:

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
