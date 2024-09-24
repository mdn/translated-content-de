---
title: Object.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Object/toString
l10n:
  sourceCommit: 6e93ec8fc9e1f3bd83bf2f77e84e1a39637734f8
---

{{JSRef}}

Die **`toString()`**-Methode von {{jsxref("Object")}}-Instanzen gibt eine Zeichenkette zurück, die dieses Objekt darstellt. Diese Methode ist dafür gedacht, von abgeleiteten Objekten für benutzerdefinierte [Typumwandlungslogik](/de/docs/Web/JavaScript/Data_structures#type_coercion) überschrieben zu werden.

{{EmbedInteractiveExample("pages/js/object-prototype-tostring.html")}}

## Syntax

```js-nolint
toString()
```

### Parameter

Standardmäßig nimmt `toString()` keine Parameter an. Jedoch können Objekte, die von `Object` erben, es mit eigenen Implementierungen überschreiben, die Parameter annehmen. Zum Beispiel nehmen die Methoden [`Number.prototype.toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/toString) und [`BigInt.prototype.toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/toString) einen optionalen `radix`-Parameter.

### Rückgabewert

Eine Zeichenkette, die das Objekt darstellt.

## Beschreibung

JavaScript ruft die `toString`-Methode auf, um [ein Objekt in einen primitiven Wert zu konvertieren](/de/docs/Web/JavaScript/Data_structures#type_coercion). Sie müssen die `toString`-Methode selten selbst aufrufen; JavaScript ruft sie automatisch auf, wenn es auf ein Objekt stößt, wo ein primitiver Wert erwartet wird.

Diese Methode wird vorrangig bei der [Zeichenfolgenumwandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) aufgerufen, aber bei der [numerischen Umwandlung](/de/docs/Web/JavaScript/Data_structures#numeric_coercion) und [primitiven Umwandlung](/de/docs/Web/JavaScript/Data_structures#primitive_coercion) wird `valueOf()` vorrangig aufgerufen. Da jedoch die grundlegende [`valueOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf)-Methode ein Objekt zurückgibt, wird die `toString()`-Methode normalerweise am Ende aufgerufen, es sei denn, das Objekt überschreibt `valueOf()`. Zum Beispiel gibt `+[1]` den Wert `1` zurück, weil seine [`toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/toString)-Methode `"1"` zurückgibt, die dann in eine Zahl umgewandelt wird.

Alle Objekte, die von `Object.prototype` erben (das heißt, alle außer [`null`-Prototyp-Objekten](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects)), erben die `toString()`-Methode. Wenn Sie ein benutzerdefiniertes Objekt erstellen, können Sie `toString()` überschreiben, um eine benutzerdefinierte Methode aufzurufen, sodass Ihr benutzerdefiniertes Objekt in einen Zeichenkettenwert umgewandelt werden kann. Alternativ können Sie eine [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive)-Methode hinzufügen, die noch mehr Kontrolle über den Konvertierungsprozess ermöglicht und immer bevorzugt wird vor `valueOf` oder `toString` für jegliche Typumwandlung.

Um die Basis `Object.prototype.toString()` mit einem Objekt zu verwenden, das es überschrieben hat (oder um es auf `null` oder `undefined` anzuwenden), müssen Sie {{jsxref("Function.prototype.call()")}} oder {{jsxref("Function.prototype.apply()")}} darauf aufrufen und das Objekt, das Sie inspizieren möchten, als ersten Parameter (genannt `thisArg`) übergeben.

```js
const arr = [1, 2, 3];

arr.toString(); // "1,2,3"
Object.prototype.toString.call(arr); // "[object Array]"
```

`Object.prototype.toString()` gibt `"[object Type]"` zurück, wobei `Type` der Objekttyp ist. Wenn das Objekt eine [`Symbol.toStringTag`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft hat, deren Wert eine Zeichenkette ist, wird dieser Wert als `Type` verwendet. Viele eingebaute Objekte, einschließlich [`Map`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map) und [`Symbol`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol), haben ein `Symbol.toStringTag`. Einige Objekte vor ES6 haben kein `Symbol.toStringTag`, aber trotzdem einen speziellen Tag. Dazu gehören (das Tag ist dasselbe wie der unten angegebene Typname):

- [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [`Function`](/de/docs/Web/JavaScript/Reference/Functions) (alles, worauf [`typeof`](/de/docs/Web/JavaScript/Reference/Operators/typeof) `"function"` zurückgibt)
- [`Error`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error)
- [`Boolean`](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean)
- [`Number`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number)
- [`String`](/de/docs/Web/JavaScript/Reference/Global_Objects/String)
- [`Date`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date)
- [`RegExp`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp)

Das [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments)-Objekt gibt `"[object Arguments]"` zurück. Alles andere, einschließlich benutzerdefinierter Klassen, es sei denn, mit einem benutzerdefinierten `Symbol.toStringTag`, wird `"[object Object]"` zurückgeben.

`Object.prototype.toString()` auf [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) und {{jsxref("undefined")}} aufgerufen, gibt `[object Null]` bzw. `[object Undefined]` zurück.

## Beispiele

### Überschreiben von toString für benutzerdefinierte Objekte

Sie können eine Funktion erstellen, die anstelle der Standard-`toString()`-Methode aufgerufen wird. Die `toString()`-Funktion, die Sie erstellen, sollte einen Zeichenkettenwert zurückgeben. Wenn sie ein Objekt zurückgibt und die Methode implizit während einer [Typumwandlung](/de/docs/Web/JavaScript/Data_structures#type_coercion) aufgerufen wird, dann wird ihr Ergebnis ignoriert und der Wert einer verwandten Methode, {{jsxref("Object/valueOf", "valueOf()")}}, wird stattdessen verwendet, oder es wird ein `TypeError` ausgelöst, wenn keine dieser Methoden einen primitiven Wert zurückgeben.

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

Wenn Sie die `toString()`-Methode, entweder explizit oder implizit, auf einer Instanz von `Dog` aufrufen, gibt sie den Standardwert zurück, den sie von {{jsxref("Object")}} geerbt hat:

```js
const theDog = new Dog("Gabby", "Lab", "chocolate", "female");

theDog.toString(); // "[object Object]"
`${theDog}`; // "[object Object]"
```

Der folgende Code überschreibt die Standard-`toString()`-Methode. Diese Methode erzeugt eine Zeichenkette, die den `name`, `breed`, `color` und `sex` des Objekts enthält.

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

Mit dem vorhergehenden Code wird jedes Mal, wenn eine Instanz von `Dog` in einem Zeichenkontext verwendet wird, die `toString()`-Methode von JavaScript automatisch aufgerufen.

```js
const theDog = new Dog("Gabby", "Lab", "chocolate", "female");

`${theDog}`; // "Dog Gabby is a female chocolate Lab"
```

### Verwendung von toString() zur Erkennung der Objektklasse

`toString()` kann mit jedem Objekt verwendet werden und ermöglicht standardmäßig die Erkennung seiner Klasse.

```js
const toString = Object.prototype.toString;

toString.call(new Date()); // [object Date]
toString.call(new String()); // [object String]
// Math hat sein Symbol.toStringTag
toString.call(Math); // [object Math]

toString.call(undefined); // [object Undefined]
toString.call(null); // [object Null]
```

Die Verwendung von `toString()` auf diese Weise ist unzuverlässig; Objekte können das Verhalten von `Object.prototype.toString()` durch Definition einer {{jsxref("Symbol.toStringTag")}}-Eigenschaft ändern, was zu unerwarteten Ergebnissen führen kann. Zum Beispiel:

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

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Object.prototype.toString` mit `Symbol.toStringTag` Unterstützung in `core-js`](https://github.com/zloirock/core-js#ecmascript-object)
- {{jsxref("Object.prototype.valueOf()")}}
- {{jsxref("Number.prototype.toString()")}}
- {{jsxref("Symbol.toPrimitive")}}
- {{jsxref("Symbol.toStringTag")}}
