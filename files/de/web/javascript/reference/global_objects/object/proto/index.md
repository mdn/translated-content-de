---
title: Object.prototype.__proto__
slug: Web/JavaScript/Reference/Global_Objects/Object/proto
l10n:
  sourceCommit: 14acf1aa7885157debdf1b6111f4bd10c064ec60
---

{{JSRef}}{{Deprecated_Header}}

> [!WARNING]
> Das Ändern des `[[Prototype]]` eines Objekts ist aufgrund der Optimierung von Eigenschaftszugriffen in modernen JavaScript-Engines derzeit in jedem Browser und jeder JavaScript-Engine eine sehr langsame Operation. Darüber hinaus sind die Effekte der Veränderung der Vererbung subtil und weitreichend und nicht auf die verbrachte Zeit in der Anweisung `obj.__proto__ = ...` beschränkt, sondern können sich auf **_jeden_** Code erstrecken, der Zugriff auf irgendein Objekt hat, dessen `[[Prototype]]` verändert wurde. Weitere Informationen finden Sie in [JavaScript engine fundamentals: optimizing prototypes](https://mathiasbynens.be/notes/prototypes).

> [!NOTE]
> Die Verwendung von `__proto__` ist umstritten und wird nicht empfohlen. Seine Existenz und das genaue Verhalten wurden nur als älteres Merkmal standardisiert, um die Web-Kompatibilität sicherzustellen, während es mehrere Sicherheitsprobleme und potenzielle Fehlerquellen aufweist. Für eine bessere Unterstützung verwenden Sie stattdessen {{jsxref("Object.getPrototypeOf()")}}/{{jsxref("Reflect.getPrototypeOf()")}} und {{jsxref("Object.setPrototypeOf()")}}/{{jsxref("Reflect.setPrototypeOf()")}}.

Die **`__proto__`** Accessor-Eigenschaft von {{jsxref("Object")}}-Instanzen legt den [`[[Prototype]]`](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain) (entweder ein Objekt oder {{jsxref("Operators/null", "null")}}) dieses Objekts offen.

Die `__proto__`-Eigenschaft kann auch in einer Objekt-Literal-Definition verwendet werden, um das Objekt-`[[Prototype]]` bei der Erstellung festzulegen, als Alternative zu {{jsxref("Object.create()")}}. Siehe: [Objektinitialisierer / Literal-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer). Diese Syntax ist standardisiert und in Implementierungen optimiert und unterscheidet sich erheblich von `Object.prototype.__proto__`.

## Syntax

```js-nolint
obj.__proto__
```

### Rückgabewert

Wird sie als Getter verwendet, gibt sie das `[[Prototype]]` des Objekts zurück.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn versucht wird, das Prototype eines [nicht erweiterbaren](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible) Objekts oder eines [unveränderlichen specialesPrototype-Objekts](https://tc39.es/ecma262/multipage/ordinary-and-exotic-objects-behaviours.html#sec-immutable-prototype-exotic-objects) wie `Object.prototype` oder [`window`](/de/docs/Web/API/Window) zu setzen.

## Beschreibung

Die `__proto__`-Getter-Funktion legt den Wert des internen `[[Prototype]]` eines Objekts offen. Für Objekte, die mit einem Objekt-Literal erstellt werden (sofern Sie nicht die [prototype setter](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer#prototype_setter) Syntax verwenden), ist dieser Wert `Object.prototype`. Für Objekte, die mit Array-Literalen erstellt werden, ist dieser Wert [`Array.prototype`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array). Für Funktionen ist dieser Wert {{jsxref("Function.prototype")}}. Sie können mehr über die Prototypen-Kette in [Vererbung und die Prototypen-Kette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain) lesen.

Der `__proto__`-Setter ermöglicht das Ändern des `[[Prototype]]` eines Objekts. Der angegebene Wert muss ein Objekt oder {{jsxref("Operators/null", "null")}} sein. Jeder andere Wert wird nichts bewirken.

Im Gegensatz zu {{jsxref("Object.getPrototypeOf()")}} und {{jsxref("Object.setPrototypeOf()")}}, die immer als statische Eigenschaften auf `Object` verfügbar sind und immer die interne `[[Prototype]]`-Eigenschaft widerspiegeln, existiert die `__proto__`-Eigenschaft nicht immer als Eigenschaft auf allen Objekten und spiegelt daher `[[Prototype]]` nicht zuverlässig wider.

Die `__proto__`-Eigenschaft ist nur eine Accessor-Eigenschaft auf `Object.prototype`, die aus einer Getter- und einer Setter-Funktion besteht. Ein Eigenschaftszugriff auf `__proto__`, der letztendlich `Object.prototype` konsultiert, wird diese Eigenschaft finden, aber ein Zugriff, der `Object.prototype` nicht konsultiert, wird das nicht. Wenn eine andere `__proto__`-Eigenschaft gefunden wird, bevor `Object.prototype` konsultiert wird, wird diese Eigenschaft die auf `Object.prototype` gefundene verbergen.

[`Null`-Prototyp-Objekte](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects) erben keine Eigenschaft von `Object.prototype`, einschließlich der `__proto__`-Accessor-Eigenschaft. Wenn Sie versuchen, `__proto__` auf einem solchen Objekt zu lesen, ist der Wert immer `undefined`, unabhängig vom tatsächlichen `[[Prototype]]` des Objekts, und jede Zuweisung an `__proto__` würde eine neue Eigenschaft namens `__proto__` erstellen, anstatt das Prototype des Objekts zu setzen. Darüber hinaus kann `__proto__` als eigene Eigenschaft auf jeder Objektinstanz über {{jsxref("Object.defineProperty()")}} ohne Auslösen des Setters neu definiert werden. In diesem Fall wird `__proto__` nicht länger ein Accessor für `[[Prototype]]` sein. Deshalb sollten Sie immer {{jsxref("Object.getPrototypeOf()")}} und {{jsxref("Object.setPrototypeOf()")}} verwenden, um das `[[Prototype]]` eines Objekts zu setzen und zu bekommen.

## Beispiele

### Verwendung von \_\_proto\_\_

```js
function Circle() {}
const shape = {};
const circle = new Circle();

// Set the object prototype.
// DEPRECATED. This is for example purposes only. DO NOT DO THIS in real code.
shape.__proto__ = circle;

// Get the object prototype
console.log(shape.__proto__ === Circle); // false
```

```js
function ShapeA() {}
const ShapeB = {
  a() {
    console.log("aaa");
  },
};

ShapeA.prototype.__proto__ = ShapeB;
console.log(ShapeA.prototype.__proto__); // { a: [Function: a] }

const shapeA = new ShapeA();
shapeA.a(); // aaa
console.log(ShapeA.prototype === shapeA.__proto__); // true
```

```js
function ShapeC() {}
const ShapeD = {
  a() {
    console.log("a");
  },
};

const shapeC = new ShapeC();
shapeC.__proto__ = ShapeD;
shapeC.a(); // a
console.log(ShapeC.prototype === shapeC.__proto__); // false
```

```js
function Test() {}
Test.prototype.myName = function () {
  console.log("myName");
};

const test = new Test();
console.log(test.__proto__ === Test.prototype); // true
test.myName(); // myName

const obj = {};
obj.__proto__ = Test.prototype;
obj.myName(); // myName
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Object.prototype.isPrototypeOf()")}}
- {{jsxref("Object.getPrototypeOf()")}}
- {{jsxref("Object.setPrototypeOf()")}}
