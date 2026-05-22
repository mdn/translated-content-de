---
title: Object.prototype.__proto__
short-title: __proto__
slug: Web/JavaScript/Reference/Global_Objects/Object/proto
l10n:
  sourceCommit: 1ddd95504b4507beeda0f08bd772eb167922b86a
---

{{Deprecated_Header}}

> [!WARNING]
> Das Ändern des `[[Prototype]]` eines Objekts ist, aufgrund der Art und Weise, wie moderne JavaScript-Engines den Zugriff auf Eigenschaften optimieren, derzeit eine sehr langsame Operation in jedem Browser und jeder JavaScript-Engine. Darüber hinaus sind die Auswirkungen der Veränderung der Vererbung subtil und weitreichend und beschränken sich nicht auf die Zeit, die mit der Anweisung `obj.__proto__ = ...` verbracht wird, sondern können sich auf **_beliebigen_** Code auswirken, der Zugriff auf ein beliebiges Objekt hat, dessen `[[Prototype]]` verändert wurde. Mehr dazu erfahren Sie in [JavaScript engine fundamentals: optimizing prototypes](https://mathiasbynens.be/notes/prototypes).

> [!NOTE]
> Die Verwendung von `__proto__` ist umstritten und wird nicht empfohlen. Ihre Existenz und ihr genaues Verhalten wurden nur als Legacy-Feature standardisiert, um die Web-Kompatibilität zu gewährleisten, während sie mehrere [Sicherheitsprobleme](/de/docs/Web/Security/Attacks/Prototype_pollution) und Stolperfallen darstellt. Für eine bessere Unterstützung sollten Sie stattdessen {{jsxref("Object.getPrototypeOf()")}}/{{jsxref("Reflect.getPrototypeOf()")}} und {{jsxref("Object.setPrototypeOf()")}}/{{jsxref("Reflect.setPrototypeOf()")}} bevorzugen.

Die **`__proto__`** Accessor-Eigenschaft von {{jsxref("Object")}}-Instanzen legt das [`[[Prototype]]`](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain) (entweder ein Objekt oder {{jsxref("null")}}) dieses Objekts offen.

Die `__proto__`-Eigenschaft kann auch in einer Objektliteral-Definition verwendet werden, um das Objekt-`[[Prototype]]` bei der Erstellung festzulegen, als Alternative zu {{jsxref("Object.create()")}}. Siehe: [object initializer / literal syntax](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer). Diese Syntax ist standardisiert und in Implementierungen optimiert und unterscheidet sich deutlich von `Object.prototype.__proto__`.

## Syntax

```js-nolint
obj.__proto__
```

### Rückgabewert

Wenn als Getter verwendet, gibt es das `[[Prototype]]` des Objekts zurück.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn versucht wird, das Prototype eines [nicht-erweiterbaren](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible) Objekts oder eines [unveränderbaren Prototype Exotenobjekts](https://tc39.es/ecma262/multipage/ordinary-and-exotic-objects-behaviours.html#sec-immutable-prototype-exotic-objects) wie `Object.prototype` oder [`window`](/de/docs/Web/API/Window) festzulegen.

## Beschreibung

Die `__proto__`-Getterfunktion legt den Wert des internen `[[Prototype]]` eines Objekts offen. Für Objekte, die mit einem Objektliteral erstellt wurden (es sei denn, Sie verwenden die [Prototype Setter](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer#prototype_setter) Syntax), ist dieser Wert `Object.prototype`. Für Objekte, die mit Array-Literalen erstellt wurden, ist dieser Wert [`Array.prototype`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array). Für Funktionen ist dieser Wert {{jsxref("Function.prototype")}}. Mehr über die Prototype-Kette erfahren Sie in [Vererbung und die Prototype-Kette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain).

Der `__proto__`-Setter ermöglicht es, das `[[Prototype]]` eines Objekts zu ändern. Der bereitgestellte Wert muss ein Objekt oder {{jsxref("null")}} sein. Die Bereitstellung eines anderen Wertes hat keine Wirkung.

Anders als {{jsxref("Object.getPrototypeOf()")}} und {{jsxref("Object.setPrototypeOf()")}}, die immer als statische Eigenschaften auf `Object` verfügbar sind und stets die interne `[[Prototype]]`-Eigenschaft widerspiegeln, existiert die `__proto__`-Eigenschaft nicht immer als Eigenschaft auf allen Objekten und spiegelt daher `[[Prototype]]` nicht zuverlässig wider.

Die `__proto__`-Eigenschaft ist lediglich eine Accessor-Eigenschaft auf `Object.prototype`, die aus einer Getter- und einer Setter-Funktion besteht. Ein Eigenschaftszugriff auf `__proto__`, der schließlich `Object.prototype` konsultiert, wird diese Eigenschaft finden, aber ein Zugriff, der `Object.prototype` nicht konsultiert, wird es nicht. Wenn eine andere `__proto__`-Eigenschaft gefunden wird, bevor `Object.prototype` konsultiert wird, wird diese Eigenschaft die auf `Object.prototype` gefundene Eigenschaft verbergen.

[`null`-Prototype-Objekte](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects) erben keine Eigenschaft von `Object.prototype`, einschließlich der `__proto__`-Accessor-Eigenschaft, sodass bei einem Leseversuch von `__proto__` bei einem solchen Objekt der Wert immer `undefined` ist, unabhängig vom tatsächlichen `[[Prototype]]` des Objekts, und jede Zuweisung an `__proto__` würde eine neue Eigenschaft namens `__proto__` erzeugen, anstatt das Prototype des Objekts festzulegen. Darüber hinaus kann `__proto__` als eine eigene Eigenschaft auf jeder Objektinstanz durch {{jsxref("Object.defineProperty()")}} umdefiniert werden, ohne den Setter auszulösen. In diesem Fall ist `__proto__` kein Accessor mehr für `[[Prototype]]`. Daher sollten Sie immer {{jsxref("Object.getPrototypeOf()")}} und {{jsxref("Object.setPrototypeOf()")}} zum Setzen und Abrufen des `[[Prototype]]` eines Objekts bevorzugen.

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
- [Prototype Pollution Angriff](/de/docs/Web/Security/Attacks/Prototype_pollution)
