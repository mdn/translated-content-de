---
title: Object.prototype.__proto__
slug: Web/JavaScript/Reference/Global_Objects/Object/proto
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}{{Deprecated_Header}}

> [!WARNING]
> Das Ändern des `[[Prototype]]` eines Objekts ist aufgrund der Art und Weise, wie moderne JavaScript-Engines den Zugriff auf Eigenschaften optimieren, derzeit in jedem Browser und JavaScript-Engine eine sehr langsame Operation. Darüber hinaus sind die Auswirkungen der Veränderung der Vererbung subtil und weitreichend und beschränken sich nicht nur auf die in der `obj.__proto__ = ...`-Anweisung verbrachte Zeit, sondern können sich auf **_jede_** Codezeile erstrecken, die auf ein Objekt zugreift, dessen `[[Prototype]]` verändert wurde. Weitere Informationen finden Sie unter [JavaScript engine fundamentals: optimizing prototypes](https://mathiasbynens.be/notes/prototypes).

> [!NOTE]
> Die Verwendung von `__proto__` ist umstritten und wird nicht empfohlen. Seine Existenz und sein genaues Verhalten wurden nur als Legacy-Funktion standardisiert, um die Web-Kompatibilität sicherzustellen, während es mehrere Sicherheitsprobleme und Fallstricke aufweist. Für bessere Unterstützung bevorzugen Sie {{jsxref("Object.getPrototypeOf()")}}/{{jsxref("Reflect.getPrototypeOf()")}} und {{jsxref("Object.setPrototypeOf()")}}/{{jsxref("Reflect.setPrototypeOf()")}}.

Die **`__proto__`** Accessor-Eigenschaft von {{jsxref("Object")}} Instanzen gibt das [`[[Prototype]]`](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain) (entweder ein Objekt oder {{jsxref("Operators/null", "null")}}) dieses Objekts preis.

Die `__proto__`-Eigenschaft kann auch in einer Objektliteraldefinition verwendet werden, um das Objekt `[[Prototype]]` bei der Erstellung festzulegen, als Alternative zu {{jsxref("Object.create()")}}. Siehe: [Objekt-Initialisierer / Literal-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer). Diese Syntax ist standardisiert und in Implementierungen optimiert, und unterscheidet sich deutlich von `Object.prototype.__proto__`.

## Syntax

```js-nolint
obj.__proto__
```

### Rückgabewert

Wenn als Getter verwendet, gibt das `[[Prototype]]` des Objekts zurück.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn versucht wird, das Prototyp eines [nicht erweiterbaren](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible) Objekts oder eines [unveränderbaren exotischen Prototyps](https://tc39.es/ecma262/multipage/ordinary-and-exotic-objects-behaviours.html#sec-immutable-prototype-exotic-objects), wie `Object.prototype` oder [`window`](/de/docs/Web/API/Window), festzulegen.

## Beschreibung

Die `__proto__`-Getter-Funktion gibt den Wert des internen `[[Prototype]]` eines Objekts preis. Für Objekte, die mit einem Objektliteral erstellt wurden (sofern Sie nicht die [prototype setter](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer#prototype_setter) Syntax verwenden), ist dieser Wert `Object.prototype`. Für Objekte, die mit Array-Literalen erstellt wurden, ist dieser Wert [`Array.prototype`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array). Für Funktionen ist dieser Wert {{jsxref("Function.prototype")}}. Weitere Informationen zur Prototype-Kette finden Sie unter [Inheritance and the prototype chain](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain).

Der `__proto__` Setter ermöglicht es, das `[[Prototype]]` eines Objekts zu verändern. Der bereitgestellte Wert muss ein Objekt oder {{jsxref("Operators/null", "null")}} sein. Die Bereitstellung eines anderen Werts bewirkt nichts.

Im Gegensatz zu {{jsxref("Object.getPrototypeOf()")}} und {{jsxref("Object.setPrototypeOf()")}}, die auf `Object` als statische Eigenschaften immer verfügbar sind und immer die interne `[[Prototype]]` Eigenschaft widerspiegeln, existiert die `__proto__`-Eigenschaft nicht immer als Eigenschaft auf allen Objekten und spiegelt daher das `[[Prototype]]` nicht zuverlässig wider.

Die `__proto__`-Eigenschaft ist eine einfache Accessor-Eigenschaft auf `Object.prototype`, bestehend aus einer Getter- und einer Setter-Funktion. Ein Zugriff auf `__proto__`, der letztendlich `Object.prototype` konsultiert, wird diese Eigenschaft finden, aber ein Zugriff, der `Object.prototype` nicht konsultiert, wird dies nicht. Wenn eine andere `__proto__`-Eigenschaft gefunden wird, bevor `Object.prototype` konsultiert wird, wird diese die auf `Object.prototype` gefundene Eigenschaft verdecken.

[`null`-Prototyp-Objekte](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects) erben keine Eigenschaften von `Object.prototype`, einschließlich der `__proto__` Accessor-Eigenschaft, sodass, wenn Sie versuchen, `__proto__` auf einem solchen Objekt zu lesen, der Wert immer `undefined` ist, unabhängig vom tatsächlichen `[[Prototype]]` des Objekts, und jede Zuordnung zu `__proto__` würde eine neue Eigenschaft namens `__proto__` erstellen, anstatt das Prototyp des Objekts festzulegen. Darüber hinaus kann `__proto__` mit {{jsxref("Object.defineProperty()")}} als eigene Eigenschaft auf einer beliebigen Objektinstanz neu definiert werden, ohne den Setter auszulösen. In diesem Fall wird `__proto__` nicht mehr ein Accessor für `[[Prototype]]` sein. Daher sollten Sie immer {{jsxref("Object.getPrototypeOf()")}} und {{jsxref("Object.setPrototypeOf()")}} bevorzugen, um das `[[Prototype]]` eines Objekts festzulegen und abzurufen.

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
