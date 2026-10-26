---
title: Object.prototype.toString()
short-title: toString()
slug: Web/JavaScript/Reference/Global_Objects/Object/toString
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`toString()`** von {{jsxref("Object")}}-Instanzen gibt einen String zurück, der dieses Objekt repräsentiert. Die Methode ist dafür vorgesehen, von abgeleiteten Objekten überschrieben zu werden, um eine eigene Logik für die [Typumwandlung](/de/docs/Web/JavaScript/Guide/Data_structures#type_coercion) bereitzustellen.

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

Standardmäßig nimmt `toString()` keine Parameter entgegen. Objekte, die von `Object` erben, können die Methode jedoch mit eigenen Implementierungen überschreiben, die Parameter entgegennehmen. Beispielsweise akzeptieren die Methoden [`Number.prototype.toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/toString) und [`BigInt.prototype.toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/toString) einen optionalen Parameter `radix`.

### Rückgabewert

Ein String, der das Objekt repräsentiert.

## Beschreibung

JavaScript ruft die Methode `toString` auf, um [ein Objekt in einen primitiven Wert umzuwandeln](/de/docs/Web/JavaScript/Guide/Data_structures#type_coercion). Sie müssen die Methode `toString` nur selten selbst aufrufen; JavaScript ruft sie automatisch auf, wenn an einer Stelle, an der ein primitiver Wert erwartet wird, ein Objekt vorkommt.

Bei der [Umwandlung in einen String](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) wird diese Methode bevorzugt aufgerufen, während bei der [Umwandlung in eine Zahl](/de/docs/Web/JavaScript/Guide/Data_structures#numeric_coercion) und der [Umwandlung in einen primitiven Wert](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion) `valueOf()` bevorzugt aufgerufen wird. Da die grundlegende Methode [`valueOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf) jedoch ein Objekt zurückgibt, wird in der Regel schließlich `toString()` aufgerufen, sofern das Objekt `valueOf()` nicht überschreibt. Beispielsweise gibt `+[1]` den Wert `1` zurück, weil die Methode [`toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/toString) des Arrays `"1"` zurückgibt, was anschließend in eine Zahl umgewandelt wird.

Alle Objekte, die von `Object.prototype` erben (also alle außer [Objekten mit einem `null`-Prototyp](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects)), erben die Methode `toString()`. Wenn Sie ein eigenes Objekt erstellen, können Sie `toString()` überschreiben, sodass bei der Umwandlung Ihres Objekts in einen String Ihre eigene Methode aufgerufen wird. Alternativ können Sie eine Methode [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) hinzufügen. Sie bietet noch mehr Kontrolle über die Umwandlung und wird bei jeder Typumwandlung stets gegenüber `valueOf` und `toString` bevorzugt.

Um die grundlegende Methode `Object.prototype.toString()` für ein Objekt zu verwenden, das sie überschrieben hat (oder um sie für `null` oder `undefined` aufzurufen), müssen Sie {{jsxref("Function.prototype.call()")}} oder {{jsxref("Function.prototype.apply()")}} darauf aufrufen und das zu untersuchende Objekt als ersten Parameter (namens `thisArg`) übergeben.

```js
const arr = [1, 2, 3];

arr.toString(); // "1,2,3"
Object.prototype.toString.call(arr); // "[object Array]"
```

`Object.prototype.toString()` gibt `"[object Type]"` zurück, wobei `Type` den Objekttyp bezeichnet. Wenn das Objekt eine Eigenschaft [`Symbol.toStringTag`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) besitzt, deren Wert ein String ist, wird dieser Wert als `Type` verwendet. Viele integrierte Objekte, darunter [`Map`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map) und [`Symbol`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol), besitzen eine Eigenschaft `Symbol.toStringTag`. Einige Objekte, die schon vor ES6 existierten, haben keine Eigenschaft `Symbol.toStringTag`, aber dennoch eine besondere Kennzeichnung. Dazu gehören (die Kennzeichnung entspricht jeweils dem unten angegebenen Typnamen):

- [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [`Function`](/de/docs/Web/JavaScript/Reference/Functions) (alles, für das [`typeof`](/de/docs/Web/JavaScript/Reference/Operators/typeof) `"function"` zurückgibt)
- [`Error`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error)
- [`Boolean`](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean)
- [`Number`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number)
- [`String`](/de/docs/Web/JavaScript/Reference/Global_Objects/String)
- [`Date`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date)
- [`RegExp`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp)

Für das Objekt [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments) wird `"[object Arguments]"` zurückgegeben. Für alles andere, einschließlich benutzerdefinierter Klassen, wird `"[object Object]"` zurückgegeben, sofern kein eigenes `Symbol.toStringTag` vorhanden ist.

Wird `Object.prototype.toString()` für [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) oder {{jsxref("undefined")}} aufgerufen, gibt die Methode `[object Null]` beziehungsweise `[object Undefined]` zurück.

## Beispiele

### toString für eigene Objekte überschreiben

Sie können eine Funktion erstellen, die anstelle der standardmäßigen Methode `toString()` aufgerufen wird. Die von Ihnen erstellte Funktion `toString()` sollte einen String zurückgeben. Gibt sie ein Objekt zurück und wird die Methode während einer [Typumwandlung](/de/docs/Web/JavaScript/Guide/Data_structures#type_coercion) implizit aufgerufen, wird ihr Ergebnis ignoriert und stattdessen der Rückgabewert der zugehörigen Methode {{jsxref("Object/valueOf", "valueOf()")}} verwendet. Gibt auch diese keinen primitiven Wert zurück, wird ein `TypeError` ausgelöst.

Der folgende Code definiert eine Klasse `Dog`.

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

Wenn Sie die Methode `toString()` für eine Instanz von `Dog` explizit oder implizit aufrufen, gibt sie den von {{jsxref("Object")}} geerbten Standardwert zurück:

```js
const theDog = new Dog("Gabby", "Lab", "chocolate", "female");

theDog.toString(); // "[object Object]"
`${theDog}`; // "[object Object]"
```

Der folgende Code überschreibt die standardmäßige Methode `toString()`. Diese Methode erzeugt einen String, der `name`, `breed`, `color` und `sex` des Objekts enthält.

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

Mit dem vorstehenden Code ruft JavaScript jedes Mal automatisch die Methode `toString()` auf, wenn eine Instanz von `Dog` in einem String-Kontext verwendet wird.

```js
const theDog = new Dog("Gabby", "Lab", "chocolate", "female");

`${theDog}`; // "Dog Gabby is a female chocolate Lab"
```

### Mit toString() die Objektklasse ermitteln

`toString()` kann für jedes Objekt verwendet werden und ermöglicht es Ihnen (standardmäßig), dessen Klasse zu ermitteln.

```js
const toString = Object.prototype.toString;

toString.call(new Date()); // [object Date]
toString.call(new String()); // [object String]
// Math has its Symbol.toStringTag
toString.call(Math); // [object Math]

toString.call(undefined); // [object Undefined]
toString.call(null); // [object Null]
```

`toString()` auf diese Weise zu verwenden, ist unzuverlässig: Objekte können das Verhalten von `Object.prototype.toString()` ändern, indem sie eine Eigenschaft {{jsxref("Symbol.toStringTag")}} definieren. Das kann zu unerwarteten Ergebnissen führen. Zum Beispiel:

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

- [Polyfill für `Object.prototype.toString` mit Unterstützung für `Symbol.toStringTag` in `core-js`](https://core-js.io/docs/features/ecmascript/object)
- {{jsxref("Object.prototype.valueOf()")}}
- {{jsxref("Number.prototype.toString()")}}
- {{jsxref("Symbol.toPrimitive")}}
- {{jsxref("Symbol.toStringTag")}}
