---
title: Object.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Object/toString
l10n:
  sourceCommit: 3dbbefa32758e2a1ca9a37c2788370c06aae2738
---

{{JSRef}}

Die **`toString()`** Methode von {{jsxref("Object")}} Instanzen gibt einen String zurück, der dieses Objekt repräsentiert. Diese Methode soll von abgeleiteten Objekten für eigene Logik der [Typumwandlung](/de/docs/Web/JavaScript/Guide/Data_structures#type_coercion) überschrieben werden.

{{InteractiveExample("JavaScript Demo: Object.prototype.toString()")}}

```js interactive-example
function Dog(name) {
  this.name = name;
}

const dog1 = new Dog("Gabby");

Dog.prototype.toString = function dogToString() {
  return `${this.name}`;
};

console.log(dog1.toString());
// Expected output: "Gabby"
```

## Syntax

```js-nolint
toString()
```

### Parameter

Standardmäßig nimmt `toString()` keine Parameter. Objekte, die von `Object` erben, können es jedoch mit eigenen Implementierungen überschreiben, die Parameter akzeptieren. Zum Beispiel nehmen die Methoden [`Number.prototype.toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/toString) und [`BigInt.prototype.toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/toString) einen optionalen `radix`-Parameter.

### Rückgabewert

Ein String, der das Objekt repräsentiert.

## Beschreibung

JavaScript ruft die `toString` Methode auf, um [ein Objekt in einen primitiven Wert umzuwandeln](/de/docs/Web/JavaScript/Guide/Data_structures#type_coercion). Normalerweise muss die `toString` Methode nicht direkt aufgerufen werden; JavaScript ruft sie automatisch auf, wenn es auf ein Objekt trifft, wo ein primitiver Wert erwartet wird.

Diese Methode wird vorrangig durch die [String-Konvertierung](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) aufgerufen; jedoch rufen die [numerische Konvertierung](/de/docs/Web/JavaScript/Guide/Data_structures#numeric_coercion) und die [primitiven Konvertierung](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion) `valueOf()` vorrangig auf. Da jedoch die Basismethode [`valueOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf) ein Objekt zurückgibt, wird in der Regel `toString()` am Ende aufgerufen, es sei denn, das Objekt überschreibt `valueOf()`. Zum Beispiel gibt `+[1]` den Wert `1` zurück, weil seine [`toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/toString) Methode den Wert `"1"` zurückgibt, der dann in eine Zahl konvertiert wird.

Alle Objekte, die von `Object.prototype` erben (also alle außer [`null`-Prototype-Objekten](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects)), erben die `toString()` Methode. Wenn Sie ein benutzerdefiniertes Objekt erstellen, können Sie `toString()` überschreiben, um eine eigene Methode aufzurufen, damit Ihr benutzerdefiniertes Objekt in einen String-Wert konvertiert werden kann. Alternativ können Sie eine [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) Methode hinzufügen, die noch mehr Kontrolle über den Konvertierungsprozess ermöglicht und bei jeder Typumwandlung immer `valueOf` oder `toString` vorgezogen wird.

Um die Basis `Object.prototype.toString()` mit einem Objekt zu verwenden, das es überschrieben hat (oder um es auf `null` oder `undefined` aufzurufen), müssen Sie {{jsxref("Function.prototype.call()")}} oder {{jsxref("Function.prototype.apply()")}} darauf aufrufen und das Objekt, das Sie inspizieren möchten, als ersten Parameter (genannt `thisArg`) übergeben.

```js
const arr = [1, 2, 3];

arr.toString(); // "1,2,3"
Object.prototype.toString.call(arr); // "[object Array]"
```

`Object.prototype.toString()` gibt `"[object Type]"` zurück, wobei `Type` der Objekttyp ist. Wenn das Objekt eine [`Symbol.toStringTag`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) Eigenschaft hat, deren Wert ein String ist, wird dieser Wert als `Type` verwendet. Viele eingebaute Objekte, einschließlich [`Map`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map) und [`Symbol`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol), haben ein `Symbol.toStringTag`. Einige Objekte, die ältere ECMAScript-Versionen vor ES6 nutzen, haben kein `Symbol.toStringTag`, aber dennoch einen speziellen Tag. Dazu gehören (der Tag ist derselbe wie der unten angegebene Typname):

- [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [`Function`](/de/docs/Web/JavaScript/Reference/Functions) (alles, dessen [`typeof`](/de/docs/Web/JavaScript/Reference/Operators/typeof) `"function"` zurückgibt)
- [`Error`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error)
- [`Boolean`](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean)
- [`Number`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number)
- [`String`](/de/docs/Web/JavaScript/Reference/Global_Objects/String)
- [`Date`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date)
- [`RegExp`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp)

Das [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments) Objekt gibt `"[object Arguments]"` zurück. Alles andere, einschließlich benutzerdefinierter Klassen, wird, sofern es keinen benutzerdefinierten `Symbol.toStringTag` hat, `"[object Object]"` zurückgeben.

`Object.prototype.toString()` aufgerufen auf [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) und {{jsxref("undefined")}} gibt `[object Null]` beziehungsweise `[object Undefined]` zurück.

## Beispiele

### Überschreiben von toString für benutzerdefinierte Objekte

Sie können eine Funktion erstellen, die anstelle der Standard-`toString()`-Methode aufgerufen wird. Die von Ihnen erstellte `toString()`-Funktion sollte einen String-Wert zurückgeben. Gibt sie ein Objekt zurück und wird die Methode implizit während der [Typkonvertierung](/de/docs/Web/JavaScript/Guide/Data_structures#type_coercion) aufgerufen, wird ihr Ergebnis ignoriert und der Wert einer verwandten Methode, {{jsxref("Object/valueOf", "valueOf()")}}, wird stattdessen verwendet, oder es wird ein `TypeError` ausgelöst, wenn keine dieser Methoden einen primitiven Wert zurückgibt.

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

Wenn Sie die `toString()`-Methode, entweder explizit oder implizit, auf einer Instanz von `Dog` aufrufen, gibt sie den Standardwert zurück, der von {{jsxref("Object")}} geerbt wird:

```js
const theDog = new Dog("Gabby", "Lab", "chocolate", "female");

theDog.toString(); // "[object Object]"
`${theDog}`; // "[object Object]"
```

Der folgende Code überschreibt die Standard-`toString()`-Methode. Diese Methode erzeugt einen String, der den `name`, `breed`, `color` und `sex` des Objekts enthält.

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

Mit dem obigen Code wird jedes Mal, wenn eine Instanz von `Dog` in einem String-Kontext verwendet wird, die `toString()` Methode von JavaScript automatisch aufgerufen.

```js
const theDog = new Dog("Gabby", "Lab", "chocolate", "female");

`${theDog}`; // "Dog Gabby is a female chocolate Lab"
```

### Verwendung von toString() zur Erkennung der Objektklasse

`toString()` kann mit jedem Objekt verwendet werden und erlaubt es Ihnen (standardmäßig), dessen Klasse zu erhalten.

```js
const toString = Object.prototype.toString;

toString.call(new Date()); // [object Date]
toString.call(new String()); // [object String]
// Math has its Symbol.toStringTag
toString.call(Math); // [object Math]

toString.call(undefined); // [object Undefined]
toString.call(null); // [object Null]
```

Die Verwendung von `toString()` auf diese Weise ist unzuverlässig; Objekte können das Verhalten von `Object.prototype.toString()` verändern, indem sie eine {{jsxref("Symbol.toStringTag")}} Eigenschaft definieren, was zu unerwarteten Ergebnissen führen kann. Zum Beispiel:

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
