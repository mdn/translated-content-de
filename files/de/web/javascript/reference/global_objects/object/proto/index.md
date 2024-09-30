---
title: Object.prototype.__proto__
slug: Web/JavaScript/Reference/Global_Objects/Object/proto
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}{{Deprecated_Header}}

> [!WARNING]
> Das Ändern des `[[Prototype]]` eines Objekts ist aufgrund der Optimierung von Eigenschaftszugriffen durch moderne JavaScript-Engines derzeit eine sehr langsame Operation in jedem Browser und JavaScript-Engine. Darüber hinaus sind die Auswirkungen der Vererbung subtil und weitreichend und beschränken sich nicht nur auf die Zeit, die mit der `obj.__proto__ = ...` Anweisung verbracht wird, sondern können sich auf **_jeglichen_** Code erstrecken, der auf ein Objekt zugreifen kann, dessen `[[Prototype]]` geändert wurde. Weitere Informationen finden Sie unter [JavaScript engine fundamentals: optimizing prototypes](https://mathiasbynens.be/notes/prototypes).

> [!NOTE]
> Die Verwendung von `__proto__` ist umstritten und wird nicht empfohlen. Seine Existenz und sein genaues Verhalten wurden nur als Legacy-Feature standardisiert, um die Web-Kompatibilität sicherzustellen, während es mehrere Sicherheitsprobleme darstellt. Für bessere Unterstützung sollten Sie stattdessen {{jsxref("Object.getPrototypeOf()")}}/{{jsxref("Reflect.getPrototypeOf()")}} und {{jsxref("Object.setPrototypeOf()")}}/{{jsxref("Reflect.setPrototypeOf()")}} verwenden.

Die **`__proto__`** Accessor-Eigenschaft von {{jsxref("Object")}} Instanzen zeigt das [`[[Prototype]]`](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain) (entweder ein Objekt oder {{jsxref("Operators/null", "null")}}) dieses Objekts an.

Die `__proto__`-Eigenschaft kann auch in einer Objektliteral-Definition verwendet werden, um das Objekt `[[Prototype]]` bei der Erstellung festzulegen, als Alternative zu {{jsxref("Object.create()")}}. Siehe: [Objektinitialisierer / Literalsyntax](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer). Diese Syntax ist standardisiert und in Implementierungen optimiert und unterscheidet sich stark von `Object.prototype.__proto__`.

## Syntax

```js-nolint
obj.__proto__
```

### Rückgabewert

Bei Verwendung als Getter gibt es das `[[Prototype]]` des Objekts zurück.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn versucht wird, das Prototyp eines [nicht-veränderbaren Objekts](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible) oder eines [unveränderbaren exotischen Prototypobjekts](https://tc39.es/ecma262/multipage/ordinary-and-exotic-objects-behaviours.html#sec-immutable-prototype-exotic-objects) festzulegen, wie `Object.prototype` oder [`window`](/de/docs/Web/API/Window).

## Beschreibung

Die `__proto__`-Getterfunktion zeigt den Wert des internen `[[Prototype]]` eines Objekts an. Für Objekte, die mit einem Objektliteral erstellt wurden (es sei denn, Sie verwenden die [Prototype-Setter](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer#prototype_setter) Syntax), ist dieser Wert `Object.prototype`. Für mit Array-Literals erstellte Objekte ist dieser Wert [`Array.prototype`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array). Für Funktionen ist dieser Wert {{jsxref("Function.prototype")}}. Weitere Informationen zur Prototyp-Kette finden Sie unter [Vererbung und die Prototyp-Kette](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain).

Der `__proto__`-Setter erlaubt es, das `[[Prototype]]` eines Objekts zu ändern. Der bereitgestellte Wert muss ein Objekt oder {{jsxref("Operators/null", "null")}} sein. Andere Werte haben keine Wirkung.

Im Gegensatz zu {{jsxref("Object.getPrototypeOf()")}} und {{jsxref("Object.setPrototypeOf()")}}, die immer als statische Eigenschaften auf `Object` verfügbar sind und immer das interne `[[Prototype]]` anzeigen, existiert die `__proto__`-Eigenschaft nicht immer als Eigenschaft auf allen Objekten und zeigt daher `[[Prototype]]` nicht zuverlässig an.

Die `__proto__`-Eigenschaft ist eine einfache Accessor-Eigenschaft auf `Object.prototype`, die aus einer Getter- und Setter-Funktion besteht. Ein Eigenschaftszugriff für `__proto__`, der schließlich `Object.prototype` konsultiert, wird diese Eigenschaft finden, aber ein Zugriff, der `Object.prototype` nicht konsultiert, wird dies nicht tun. Wenn eine andere `__proto__`-Eigenschaft gefunden wird, bevor `Object.prototype` konsultiert wird, wird diese die auf `Object.prototype` gefundene Eigenschaft verbergen.

[`Null`-Prototyp-Objekte](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects) erben keine Eigenschaft von `Object.prototype`, einschließlich der `__proto__`-Accessor-Eigenschaft, daher ist der Wert immer `undefined`, wenn Sie `__proto__` auf einem solchen Objekt lesen, unabhängig davon, welches tatsächliche `[[Prototype]]` das Objekt hat, und jede Zuweisung an `__proto__` würde eine neue Eigenschaft namens `__proto__` erstellen, anstatt das Prototyp des Objekts festzulegen. Außerdem kann `__proto__` durch {{jsxref("Object.defineProperty()")}} als eigene Eigenschaft auf jeder Objektinstanz neu definiert werden, ohne den Setter auszulösen. In diesem Fall ist `__proto__` kein Accessor für `[[Prototype]]`. Daher sollten Sie immer {{jsxref("Object.getPrototypeOf()")}} und {{jsxref("Object.setPrototypeOf()")}} bevorzugen, um das `[[Prototype]]` eines Objekts festzulegen und abzurufen.

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
const ShapeA = function () {};
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
const ShapeC = function () {};
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
