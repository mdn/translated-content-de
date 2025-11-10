---
title: Object.prototype.__proto__
short-title: __proto__
slug: Web/JavaScript/Reference/Global_Objects/Object/proto
l10n:
  sourceCommit: 00c3b9fb6ead031e43863460add87321f262696c
---

{{Deprecated_Header}}

> [!WARNING]
> Das Ändern des `[[Prototype]]` eines Objekts ist aufgrund der Art und Weise, wie moderne JavaScript-Engines den Zugriff auf Eigenschaften optimieren, derzeit in jedem Browser und jeder JavaScript-Engine eine sehr langsame Operation. Darüber hinaus sind die Auswirkungen der Veränderung der Vererbung subtil und weitreichend und beschränken sich nicht auf die Zeit, die mit der Anweisung `obj.__proto__ = ...` verbracht wird, sondern können sich auf **_jeden_** Code auswirken, der Zugriff auf ein Objekt hat, dessen `[[Prototype]]` verändert wurde. Sie können mehr darüber in [JavaScript-Engine-Grundlagen: Optimierung von Prototypen](https://mathiasbynens.be/notes/prototypes) lesen.

> [!NOTE]
> Die Verwendung von `__proto__` ist umstritten und wird nicht empfohlen. Seine Existenz und sein genaues Verhalten wurden nur als Legacy-Feature standardisiert, um die Web-Kompatibilität zu gewährleisten, während es mehrere [Sicherheitsprobleme](/de/docs/Web/Security/Attacks/Prototype_pollution) und Fallstricke präsentiert. Um eine bessere Unterstützung zu gewährleisten, sollten Sie stattdessen {{jsxref("Object.getPrototypeOf()")}}/{{jsxref("Reflect.getPrototypeOf()")}} und {{jsxref("Object.setPrototypeOf()")}}/{{jsxref("Reflect.setPrototypeOf()")}} bevorzugen.

Die **`__proto__`** Accessor-Eigenschaft von {{jsxref("Object")}}-Instanzen gibt das [`[[Prototype]]`](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain) (entweder ein Objekt oder {{jsxref("Operators/null", "null")}}) dieses Objekts frei.

Die `__proto__`-Eigenschaft kann auch in einer Objektliteraldarstellung verwendet werden, um das Objekt-`[[Prototype]]` bei der Erstellung festzulegen, als Alternative zu {{jsxref("Object.create()")}}. Siehe: [Objektinitialisierer / Literalsyntax](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer). Diese Syntax ist standardisiert und in Implementierungen optimiert und unterscheidet sich erheblich von `Object.prototype.__proto__`.

## Syntax

```js-nolint
obj.__proto__
```

### Rückgabewert

Wenn sie als Getter verwendet wird, gibt sie das `[[Prototype]]` des Objekts zurück.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn versucht wird, das Prototype eines [nicht erweiterbaren](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible) Objekts oder eines [unveränderlichen Prototype-Exotic-Objekts](https://tc39.es/ecma262/multipage/ordinary-and-exotic-objects-behaviours.html#sec-immutable-prototype-exotic-objects) wie `Object.prototype` oder [`window`](/de/docs/Web/API/Window) zu setzen.

## Beschreibung

Die `__proto__`-Getter-Funktion gibt den Wert des internen `[[Prototype]]` eines Objekts frei. Für Objekte, die mit einem Objektliterat erstellt wurden (sofern Sie nicht die [Prototype-Setter-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer#prototype_setter) verwenden), ist dieser Wert `Object.prototype`. Für Objekte, die mit Arrayliteralen erstellt wurden, ist dieser Wert [`Array.prototype`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array). Für Funktionen ist dieser Wert {{jsxref("Function.prototype")}}. Sie können mehr über die Prototype-Kette in [Vererbung und die Prototype-Kette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain) lesen.

Der `__proto__`-Setter erlaubt es, das `[[Prototype]]` eines Objekts zu verändern. Der bereitgestellte Wert muss ein Objekt oder {{jsxref("Operators/null", "null")}} sein. Jede andere Wertangabe bewirkt nichts.

Im Gegensatz zu {{jsxref("Object.getPrototypeOf()")}} und {{jsxref("Object.setPrototypeOf()")}}, die immer als statische Eigenschaften auf `Object` verfügbar sind und immer das interne `[[Prototype]]` widerspiegeln, existiert die `__proto__`-Eigenschaft nicht immer als Eigenschaft auf allen Objekten und spiegelt daher `[[Prototype]]` nicht zuverlässig wider.

Die `__proto__`-Eigenschaft ist lediglich eine Accessor-Eigenschaft auf `Object.prototype`, bestehend aus einer Getter- und Setter-Funktion. Ein Eigenschaftszugriff auf `__proto__`, der letztendlich `Object.prototype` abfragt, wird diese Eigenschaft finden, aber ein Zugriff, der `Object.prototype` nicht abfragt, wird dies nicht tun. Wenn eine andere `__proto__`-Eigenschaft gefunden wird, bevor `Object.prototype` abgefragt wird, wird diese Eigenschaft die auf `Object.prototype` gefundene Eigenschaft verbergen.

[`null`-Prototype-Objekte](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects) erben keine Eigenschaft von `Object.prototype`, einschließlich der `__proto__`-Accessor-Eigenschaft. Wenn Sie also versuchen, `__proto__` auf einem solchen Objekt zu lesen, ist der Wert immer `undefined`, unabhängig vom tatsächlichen `[[Prototype]]` des Objekts. Jede Zuordnung zu `__proto__` würde statt des Setzens des Object-Prototypes eine neue Eigenschaft namens `__proto__` erstellen. Darüber hinaus kann `__proto__` als eigene Eigenschaft auf jede Objektinstanz durch {{jsxref("Object.defineProperty()")}} neu definiert werden, ohne den Setter auszulösen. In diesem Fall wird `__proto__` nicht länger als Accessor für `[[Prototype]]` dienen. Deshalb sollten Sie immer {{jsxref("Object.getPrototypeOf()")}} und {{jsxref("Object.setPrototypeOf()")}} bevorzugen, um das `[[Prototype]]` eines Objekts zu setzen und abzurufen.

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
- [Prototypenverschmutzungsangriff](/de/docs/Web/Security/Attacks/Prototype_pollution)
