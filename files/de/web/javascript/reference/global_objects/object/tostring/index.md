---
title: Object.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Object/toString
l10n:
  sourceCommit: 6e93ec8fc9e1f3bd83bf2f77e84e1a39637734f8
---

{{JSRef}}

Die **`toString()`**-Methode von {{jsxref("Object")}}-Instanzen gibt eine Zeichenkette zurück, die dieses Objekt repräsentiert. Diese Methode soll von abgeleiteten Objekten für eine benutzerdefinierte [Typumwandlungslogik](/de/docs/Web/JavaScript/Data_structures#type_coercion) überschrieben werden.

{{EmbedInteractiveExample("pages/js/object-prototype-tostring.html")}}

## Syntax

```js-nolint
toString()
```

### Parameter

Standardmäßig nimmt `toString()` keine Parameter. Objekte, die von `Object` erben, können es jedoch mit eigenen Implementierungen überschreiben, die Parameter entgegennehmen. Zum Beispiel nehmen die Methoden [`Number.prototype.toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/toString) und [`BigInt.prototype.toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/toString) einen optionalen `radix`-Parameter an.

### Rückgabewert

Eine Zeichenkette, die das Objekt repräsentiert.

## Beschreibung

JavaScript ruft die `toString`-Methode auf, um [ein Objekt in einen primitiven Wert zu konvertieren](/de/docs/Web/JavaScript/Data_structures#type_coercion). In der Regel brauchen Sie die `toString`-Methode nicht selbst aufzurufen; JavaScript ruft sie automatisch auf, wenn es auf ein Objekt trifft, bei dem ein primitiver Wert erwartet wird.

Diese Methode wird bei der [Zeichenkettenumwandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) vorrangig aufgerufen, aber bei [numerischer Umwandlung](/de/docs/Web/JavaScript/Data_structures#numeric_coercion) und [primitiver Umwandlung](/de/docs/Web/JavaScript/Data_structures#primitive_coercion) wird `valueOf()` vorrangig aufgerufen. Da die Basis-Methode [`valueOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf) jedoch ein Objekt zurückgibt, wird in der Regel die `toString()`-Methode am Ende aufgerufen, es sei denn, das Objekt überschreibt `valueOf()`. Zum Beispiel gibt `+[1]` den Wert `1` zurück, weil seine [`toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/toString) Methode `"1"` zurückgibt, die dann in eine Zahl umgewandelt wird.

Alle Objekte, die von `Object.prototype` erben (das sind alle außer [{Null-Prototyp-Objekte}](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects)), erben die `toString()`-Methode. Wenn Sie ein benutzerdefiniertes Objekt erstellen, können Sie `toString()` überschreiben, um eine benutzerdefinierte Methode aufzurufen, sodass Ihr benutzerdefiniertes Objekt in einen Zeichenkettenwert umgewandelt werden kann. Alternativ können Sie eine [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) Methode hinzufügen, die noch mehr Kontrolle über den Umwandlungsprozess erlaubt und immer `valueOf` oder `toString` für jede Art der Umwandlung vorgezogen wird.

Um die Basis-`Object.prototype.toString()` mit einem Objekt zu verwenden, das sie überschrieben hat (oder um sie auf `null` oder `undefined` aufzurufen), müssen Sie {{jsxref("Function.prototype.call()")}} oder {{jsxref("Function.prototype.apply()")}} darauf aufrufen und das zu inspizierende Objekt als erstes Argument (genannt `thisArg`) übergeben.

```js
const arr = [1, 2, 3];

arr.toString(); // "1,2,3"
Object.prototype.toString.call(arr); // "[object Array]"
```

`Object.prototype.toString()` gibt `"[object Type]"` zurück, wobei `Type` der Objekttyp ist. Wenn das Objekt eine [`Symbol.toStringTag`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) Eigenschaft hat, deren Wert eine Zeichenkette ist, wird dieser Wert als `Type` verwendet. Viele eingebaute Objekte, einschließlich [`Map`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map) und [`Symbol`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol), haben ein `Symbol.toStringTag`. Einige Objekte, die ES6 vorausgehen, haben kein `Symbol.toStringTag`, aber trotzdem ein spezielles Tag. Dazu gehören (das Tag ist gleich dem unten angegebenen Typnamen):

- [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [`Function`](/de/docs/Web/JavaScript/Reference/Functions) (alles, dessen [`typeof`](/de/docs/Web/JavaScript/Reference/Operators/typeof) `"function"` zurückgibt)
- [`Error`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error)
- [`Boolean`](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean)
- [`Number`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number)
- [`String`](/de/docs/Web/JavaScript/Reference/Global_Objects/String)
- [`Date`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date)
- [`RegExp`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp)

Das [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments) Objekt gibt `"[object Arguments]"` zurück. Alles andere, einschließlich benutzerdefinierter Klassen, es sei denn, mit einem benutzerdefinierten `Symbol.toStringTag`, wird `"[object Object]"` zurückgeben.

`Object.prototype.toString()` aufgerufen auf [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) und {{jsxref("undefined")}} gibt respektive `[object Null]` und `[object Undefined]` zurück.

## Beispiele

### Überschreiben von toString für benutzerdefinierte Objekte

Sie können eine Funktion erstellen, die anstelle der Standard-`toString()`-Methode aufgerufen wird. Die `toString()`-Funktion, die Sie erstellen, sollte einen Zeichenkettenwert zurückgeben. Wenn sie ein Objekt zurückgibt und die Methode implizit während der [Typumwandlung](/de/docs/Web/JavaScript/Data_structures#type_coercion) aufgerufen wird, wird ihr Ergebnis ignoriert und der Wert einer verwandten Methode, {{jsxref("Object/valueOf", "valueOf()")}}, wird stattdessen verwendet, oder ein `TypeError` wird ausgelöst, wenn keine dieser Methoden einen primitiven Wert zurückgibt.

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

Wenn Sie die `toString()` Methode aufrufen, entweder explizit oder implizit, auf einer Instanz von `Dog`, gibt sie den Standardwert zurück, der von {{jsxref("Object")}} geerbt wird:

```js
const theDog = new Dog("Gabby", "Lab", "chocolate", "female");

theDog.toString(); // "[object Object]"
`${theDog}`; // "[object Object]"
```

Der folgende Code überschreibt die Standard-`toString()`-Methode. Diese Methode generiert eine Zeichenkette, die den `name`, die `breed`, die `color` und das `sex` des Objekts enthält.

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

Mit dem vorhergehenden Code wird jedes Mal, wenn eine Instanz von `Dog` in einem Zeichenkettenkontext verwendet wird, von JavaScript automatisch die `toString()`-Methode aufgerufen.

```js
const theDog = new Dog("Gabby", "Lab", "chocolate", "female");

`${theDog}`; // "Dog Gabby is a female chocolate Lab"
```

### Verwendung von toString() zur Erkennung der Objektklasse

`toString()` kann mit jedem Objekt verwendet werden und erlaubt es (standardmäßig), dessen Klasse zu ermitteln.

```js
const toString = Object.prototype.toString;

toString.call(new Date()); // [object Date]
toString.call(new String()); // [object String]
// Math has its Symbol.toStringTag
toString.call(Math); // [object Math]

toString.call(undefined); // [object Undefined]
toString.call(null); // [object Null]
```

Die Verwendung von `toString()` auf diese Weise ist unzuverlässig; Objekte können das Verhalten von `Object.prototype.toString()` durch die Definition einer {{jsxref("Symbol.toStringTag")}} Eigenschaft ändern, was zu unerwarteten Ergebnissen führen kann. Zum Beispiel:

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

- [Polyfill von `Object.prototype.toString` mit `Symbol.toStringTag`-Unterstützung in `core-js`](https://github.com/zloirock/core-js#ecmascript-object)
- {{jsxref("Object.prototype.valueOf()")}}
- {{jsxref("Number.prototype.toString()")}}
- {{jsxref("Symbol.toPrimitive")}}
- {{jsxref("Symbol.toStringTag")}}
