---
title: Object.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Object/toString
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`toString()`**-Methode von {{jsxref("Object")}}-Instanzen gibt eine Zeichenkette zurück, die dieses Objekt repräsentiert. Diese Methode ist dazu gedacht, von abgeleiteten Objekten für benutzerdefinierte [Typkonvertierungslogik](/de/docs/Web/JavaScript/Data_structures#type_coercion) überschrieben zu werden.

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

Standardmäßig nimmt `toString()` keine Parameter entgegen. Allerdings können Objekte, die von `Object` erben, sie mit eigenen Implementierungen überschreiben, die Parameter entgegennehmen. Zum Beispiel akzeptieren die Methoden [`Number.prototype.toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/toString) und [`BigInt.prototype.toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/toString) einen optionalen `radix`-Parameter.

### Rückgabewert

Eine Zeichenkette, die das Objekt repräsentiert.

## Beschreibung

JavaScript ruft die Methode `toString` auf, um [ein Objekt in einen primitiven Wert zu konvertieren](/de/docs/Web/JavaScript/Data_structures#type_coercion). Sie müssen die Methode `toString` selten selbst aufrufen; JavaScript ruft sie automatisch auf, wenn ein Objekt in einem Kontext verwendet wird, in dem ein primitiver Wert erwartet wird.

Diese Methode wird bei der [Zeichenkettenkonvertierung](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) priorisiert aufgerufen, während [numerische Konvertierung](/de/docs/Web/JavaScript/Data_structures#numeric_coercion) und [primitive Konvertierung](/de/docs/Web/JavaScript/Data_structures#primitive_coercion) zuerst `valueOf()` aufrufen. Da die Basis-Methode [`valueOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf) jedoch ein Objekt zurückgibt, wird meist die Methode `toString()` aufgerufen, es sei denn, das Objekt überschreibt `valueOf()`. Zum Beispiel gibt `+[1]` den Wert `1` zurück, da die Methode [`toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/toString) `"1"` zurückgibt, das dann in eine Zahl umgewandelt wird.

Alle Objekte, die von `Object.prototype` erben (das heißt, alle außer [`null`-Prototyp-Objekten](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects)), erben die Methode `toString()`. Wenn Sie ein benutzerdefiniertes Objekt erstellen, können Sie `toString()` überschreiben, um eine benutzerdefinierte Methode aufzurufen, sodass Ihr benutzerdefiniertes Objekt in einen Zeichenkettenwert konvertiert werden kann. Alternativ können Sie eine Methode [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) hinzufügen, die noch mehr Kontrolle über den Konvertierungsprozess bietet und bei jeder Typkonvertierung gegenüber `valueOf` oder `toString` bevorzugt wird.

Um die Basis-Methode `Object.prototype.toString()` mit einem Objekt zu verwenden, das sie überschrieben hat (oder um sie auf `null` oder `undefined` anzuwenden), müssen Sie {{jsxref("Function.prototype.call()")}} oder {{jsxref("Function.prototype.apply()")}} aufrufen und das zu untersuchende Objekt als ersten Parameter (genannt `thisArg`) übergeben.

```js
const arr = [1, 2, 3];

arr.toString(); // "1,2,3"
Object.prototype.toString.call(arr); // "[object Array]"
```

`Object.prototype.toString()` gibt `"[object Type]"` zurück, wobei `Type` dem Objekttyp entspricht. Falls das Objekt eine [`Symbol.toStringTag`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft hat, deren Wert eine Zeichenkette ist, wird dieser Wert als `Type` verwendet. Viele eingebaute Objekte, einschließlich [`Map`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map) und [`Symbol`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol), verfügen über ein `Symbol.toStringTag`. Einige Objekte, die vor ES6 definiert wurden, besitzen kein `Symbol.toStringTag`, haben aber trotzdem einen speziellen Tag. Dazu gehören (der Tag ist derselbe wie der unten angegebene Typname):

- [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [`Function`](/de/docs/Web/JavaScript/Reference/Functions) (alles, dessen [`typeof`](/de/docs/Web/JavaScript/Reference/Operators/typeof) `"function"` zurückgibt)
- [`Error`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error)
- [`Boolean`](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean)
- [`Number`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number)
- [`String`](/de/docs/Web/JavaScript/Reference/Global_Objects/String)
- [`Date`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date)
- [`RegExp`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp)

Das [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments)-Objekt gibt `"[object Arguments]"` zurück. Alles andere, einschließlich benutzerdefinierter Klassen, gibt `"[object Object]"` zurück, es sei denn, es besitzt ein benutzerdefiniertes `Symbol.toStringTag`.

`Object.prototype.toString()`, angewendet auf [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) und {{jsxref("undefined")}}, gibt `[object Null]` bzw. `[object Undefined]` zurück.

## Beispiele

### Überschreiben von toString für benutzerdefinierte Objekte

Sie können eine Funktion erstellen, die anstelle der Standard-`toString()`-Methode aufgerufen wird. Die von Ihnen erstellte `toString()`-Funktion sollte eine Zeichenkette zurückgeben. Wenn sie ein Objekt zurückgibt und die Methode implizit während einer [Typkonvertierung](/de/docs/Web/JavaScript/Data_structures#type_coercion) aufgerufen wird, wird das Ergebnis ignoriert, und der Wert einer verwandten Methode, {{jsxref("Object/valueOf", "valueOf()")}}, wird verwendet, oder ein `TypeError` wird ausgelöst, wenn keine dieser Methoden einen primitiven Wert zurückgibt.

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

Ruft man die `toString()`-Methode auf einer Instanz von `Dog` auf, entweder explizit oder implizit, gibt sie den Standardwert zurück, der von {{jsxref("Object")}} geerbt wurde:

```js
const theDog = new Dog("Gabby", "Lab", "chocolate", "female");

theDog.toString(); // "[object Object]"
`${theDog}`; // "[object Object]"
```

Der folgende Code überschreibt die Standard-`toString()`-Methode. Diese Methode generiert eine Zeichenkette, die den `name`, `breed`, `color` und `sex` des Objekts enthält.

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

Mit dem oben genannten Code ruft JavaScript jedes Mal, wenn eine `Dog`-Instanz in einem Zeichenketten-Kontext verwendet wird, automatisch die `toString()`-Methode auf.

```js
const theDog = new Dog("Gabby", "Lab", "chocolate", "female");

`${theDog}`; // "Dog Gabby is a female chocolate Lab"
```

### Verwendung von toString() zur Erkennung der Objektklasse

`toString()` kann mit jedem Objekt verwendet werden und erlaubt es standardmäßig, dessen Klasse zu bestimmen.

```js
const toString = Object.prototype.toString;

toString.call(new Date()); // [object Date]
toString.call(new String()); // [object String]
// Math has its Symbol.toStringTag
toString.call(Math); // [object Math]

toString.call(undefined); // [object Undefined]
toString.call(null); // [object Null]
```

Die Verwendung von `toString()` auf diese Weise ist unzuverlässig; Objekte können das Verhalten von `Object.prototype.toString()` durch die Definition einer {{jsxref("Symbol.toStringTag")}}-Eigenschaft ändern, was zu unerwarteten Ergebnissen führen kann. Zum Beispiel:

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

- [Polyfill von `Object.prototype.toString` mit Unterstützung für `Symbol.toStringTag` in `core-js`](https://github.com/zloirock/core-js#ecmascript-object)
- {{jsxref("Object.prototype.valueOf()")}}
- {{jsxref("Number.prototype.toString()")}}
- {{jsxref("Symbol.toPrimitive")}}
- {{jsxref("Symbol.toStringTag")}}
