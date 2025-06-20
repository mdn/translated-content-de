---
title: Object.prototype.__proto__
short-title: __proto__
slug: Web/JavaScript/Reference/Global_Objects/Object/proto
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}{{Deprecated_Header}}

> [!WARNING]
> Das Ändern des `[[Prototype]]` eines Objekts ist, aufgrund der Optimierung von Eigenschaftszugriffen in modernen JavaScript-Engines, derzeit eine sehr langsame Operation in jedem Browser und jeder JavaScript-Engine. Zusätzlich sind die Auswirkungen der Änderung der Vererbung subtil und weitreichend und beschränken sich nicht nur auf die Zeit, die im `obj.__proto__ = ...`-Statement verbracht wird, sondern können sich auf **_jeden_** Code erstrecken, der Zugriff auf irgendein Objekt hat, dessen `[[Prototype]]` verändert wurde. Sie können mehr darüber in [JavaScript engine fundamentals: optimizing prototypes](https://mathiasbynens.be/notes/prototypes) lesen.

> [!NOTE]
> Die Verwendung von `__proto__` ist umstritten und wird nicht empfohlen. Seine Existenz und sein genaues Verhalten wurden nur als Legacy-Feature standardisiert, um die Web-Kompatibilität sicherzustellen, während es mehrere Sicherheitsprobleme und Stolpersteine bietet. Für eine bessere Unterstützung bevorzugen Sie {{jsxref("Object.getPrototypeOf()")}}/{{jsxref("Reflect.getPrototypeOf()")}} und {{jsxref("Object.setPrototypeOf()")}}/{{jsxref("Reflect.setPrototypeOf()")}}.

Die **`__proto__`** Accessor-Eigenschaft von {{jsxref("Object")}}-Instanzen stellt das [`[[Prototype]]`](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain) (entweder ein Objekt oder {{jsxref("Operators/null", "null")}}) dieses Objekts bereit.

Die `__proto__`-Eigenschaft kann auch in einer Objektliteral-Definition verwendet werden, um das Objekt-`[[Prototype]]` bei der Erstellung festzulegen, als Alternative zu {{jsxref("Object.create()")}}. Siehe: [Objekt-Initialisierer / Literal-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer). Diese Syntax ist standardisiert und in Implementierungen optimiert und unterscheidet sich erheblich von `Object.prototype.__proto__`.

## Syntax

```js-nolint
obj.__proto__
```

### Rückgabewert

Wenn als Getter verwendet, gibt es das `[[Prototype]]` des Objekts zurück.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn versucht wird, das Prototype eines [nicht erweiterbaren](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible) Objekts oder eines [unveränderlichen Prototype-Exotenobjekts](https://tc39.es/ecma262/multipage/ordinary-and-exotic-objects-behaviours.html#sec-immutable-prototype-exotic-objects) wie `Object.prototype` oder [`window`](/de/docs/Web/API/Window) festzulegen.

## Beschreibung

Die `__proto__`-Getter-Funktion zeigt den Wert des internen `[[Prototype]]` eines Objekts an. Für Objekte, die mit einem Objektliterale erstellt wurden (sofern Sie nicht die [Prototype-Setter](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer#prototype_setter) Syntax verwenden), ist dieser Wert `Object.prototype`. Für Objekte, die mit Arrayliteralen erstellt wurden, ist dieser Wert [`Array.prototype`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array). Für Funktionen ist dieser Wert {{jsxref("Function.prototype")}}. Sie können mehr über die Prototype-Kette in [Vererbung und die Prototype-Kette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain) lesen.

Der `__proto__`-Setter erlaubt es, das `[[Prototype]]` eines Objekts zu ändern. Der bereitgestellte Wert muss ein Objekt oder {{jsxref("Operators/null", "null")}} sein. Das Angeben eines anderen Werts hat keine Wirkung.

Im Gegensatz zu {{jsxref("Object.getPrototypeOf()")}} und {{jsxref("Object.setPrototypeOf()")}}, die als statische Eigenschaften immer auf `Object` verfügbar sind und immer die interne Eigenschaft `[[Prototype]]` widerspiegeln, existiert die `__proto__`-Eigenschaft nicht immer als Eigenschaft auf allen Objekten und spiegelt daher `[[Prototype]]` nicht zuverlässig wider.

Die `__proto__`-Eigenschaft ist nur eine Accessor-Eigenschaft auf `Object.prototype`, die aus einer Getter- und Setter-Funktion besteht. Ein Eigenschaftszugriff für `__proto__`, der letztendlich `Object.prototype` konsultiert, wird diese Eigenschaft finden, aber ein Zugriff, der `Object.prototype` nicht konsultiert, wird dies nicht. Wenn eine andere `__proto__`-Eigenschaft gefunden wird, bevor `Object.prototype` konsultiert wird, wird diese Eigenschaft diejenige verbergen, die auf `Object.prototype` gefunden wird.

[`null`-Prototype-Objekte](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects) erben keine Eigenschaft von `Object.prototype`, einschließlich der `__proto__`-Accessor-Eigenschaft. Wenn Sie versuchen, `__proto__` auf einem solchen Objekt zu lesen, ist der Wert immer `undefined`, unabhängig vom tatsächlichen `[[Prototype]]` des Objekts, und jede Zuweisung an `__proto__` würde stattdessen eine neue Eigenschaft namens `__proto__` erstellen, anstatt das Prototype des Objekts festzulegen. Außerdem kann `__proto__` als eigene Eigenschaft auf jeder Objektinstanz durch {{jsxref("Object.defineProperty()")}} neu definiert werden, ohne den Setter auszulösen. In diesem Fall wird `__proto__` nicht länger ein Accessor für `[[Prototype]]` sein. Daher sollte man immer {{jsxref("Object.getPrototypeOf()")}} und {{jsxref("Object.setPrototypeOf()")}} bevorzugen, um das `[[Prototype]]` eines Objekts festzulegen und abzurufen.

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
