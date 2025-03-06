---
title: Object.prototype.__proto__
slug: Web/JavaScript/Reference/Global_Objects/Object/proto
l10n:
  sourceCommit: 3dbbefa32758e2a1ca9a37c2788370c06aae2738
---

{{JSRef}}{{Deprecated_Header}}

> [!WARNING]
> Das Ändern des `[[Prototype]]` eines Objekts ist aufgrund der Art und Weise, wie moderne JavaScript-Engines den Zugriff auf Eigenschaften optimieren, in jedem Browser und jeder JavaScript-Engine momentan eine sehr langsame Operation. Darüber hinaus sind die Auswirkungen der Änderung von Vererbung subtil und weitreichend und beschränken sich nicht nur auf die Zeit, die im `obj.__proto__ = ...`-Statement verbracht wird, sondern können sich auf **_jeglichen_** Code auswirken, der auf ein beliebiges Objekt zugreift, dessen `[[Prototype]]` verändert wurde. Weitere Informationen finden Sie in [JavaScript engine fundamentals: optimizing prototypes](https://mathiasbynens.be/notes/prototypes).

> [!NOTE]
> Die Verwendung von `__proto__` ist umstritten und wird nicht empfohlen. Seine Existenz und sein genaues Verhalten wurden nur als Legacy-Funktion standardisiert, um die Web-Kompatibilität sicherzustellen, während es mehrere Sicherheitsprobleme und potenzielle Fallstricke bietet. Für bessere Unterstützung ziehen Sie {{jsxref("Object.getPrototypeOf()")}}/{{jsxref("Reflect.getPrototypeOf()")}} und {{jsxref("Object.setPrototypeOf()")}}/{{jsxref("Reflect.setPrototypeOf()")}} vor.

Die **`__proto__`** Accessor-Eigenschaft von {{jsxref("Object")}}-Instanzen gibt das [`[[Prototype]]`](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain) (entweder ein Objekt oder {{jsxref("Operators/null", "null")}}) dieses Objekts preis.

Die `__proto__`-Eigenschaft kann auch in einer Objektliteraldarstellung verwendet werden, um das Objekt-`[[Prototype]]` bei der Erstellung festzulegen, als Alternative zu {{jsxref("Object.create()")}}. Siehe: [Objektinitialisierer / Literalsyntax](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer). Diese Syntax ist standardisiert und für Implementierungen optimiert und unterscheidet sich erheblich von `Object.prototype.__proto__`.

## Syntax

```js-nolint
obj.__proto__
```

### Rückgabewert

Bei Verwendung als Getter gibt es das `[[Prototype]]` des Objekts zurück.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn versucht wird, das Prototype eines [nicht erweiterbaren](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible) Objekts oder eines [unveränderlichen Prototype-Exotischen Objekts](https://tc39.es/ecma262/multipage/ordinary-and-exotic-objects-behaviours.html#sec-immutable-prototype-exotic-objects), wie `Object.prototype` oder [`window`](/de/docs/Web/API/Window), festzulegen.

## Beschreibung

Die `__proto__` Getter-Funktion gibt den Wert des internen `[[Prototype]]` eines Objekts preis. Für Objekte, die mithilfe eines Objektliterals erstellt wurden (es sei denn, Sie verwenden die [prototype setter](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer#prototype_setter) Syntax), ist dieser Wert `Object.prototype`. Für Objekte, die mit Array-Literalen erstellt wurden, ist dieser Wert [`Array.prototype`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array). Für Funktionen ist dieser Wert {{jsxref("Function.prototype")}}. Weitere Informationen zur Prototype-Kette finden Sie in [Vererbung und die Prototype-Kette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain).

Der `__proto__` Setter ermöglicht das Ändern des `[[Prototype]]` eines Objekts. Der angegebene Wert muss ein Objekt oder {{jsxref("Operators/null", "null")}} sein. Jeder andere Wert hat keine Wirkung.

Im Gegensatz zu {{jsxref("Object.getPrototypeOf()")}} und {{jsxref("Object.setPrototypeOf()")}}, die immer als statische Eigenschaften auf `Object` verfügbar sind und stets das interne `[[Prototype]]` widerspiegeln, existiert die `__proto__`-Eigenschaft nicht immer als Eigenschaft auf allen Objekten und spiegelt daher `[[Prototype]]` nicht zuverlässig wider.

Die `__proto__`-Eigenschaft ist lediglich eine Accessor-Eigenschaft auf `Object.prototype`, bestehend aus einer Getter- und einer Setter-Funktion. Ein Eigenschaftszugriff auf `__proto__`, der letztlich auf `Object.prototype` zugreift, wird diese Eigenschaft finden, aber ein Zugriff, der `Object.prototype` nicht abfragt, wird dies nicht. Wenn eine andere `__proto__`-Eigenschaft gefunden wird, bevor `Object.prototype` abgefragt wird, wird diese Eigenschaft die auf `Object.prototype` gefundene Eigenschaft verdecken.

[`null`-Prototype-Objekte](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects) erben keine Eigenschaften von `Object.prototype`, einschließlich der `__proto__`-Accessoreigenschaft. Wenn Sie versuchen, `__proto__` auf einem solchen Objekt zu lesen, ist der Wert immer `undefined`, unabhängig vom tatsächlichen `[[Prototype]]` des Objekts, und jede Zuweisung an `__proto__` würde eine neue Eigenschaft namens `__proto__` erstellen, anstatt das Prototype des Objekts festzulegen. Des Weiteren kann `__proto__` als eigene Eigenschaft auf jeder Objektinstanz über {{jsxref("Object.defineProperty()")}} neu definiert werden, ohne den Setter auszulösen. In diesem Fall ist `__proto__` kein Accessor mehr für `[[Prototype]]`. Daher sollten Sie immer {{jsxref("Object.getPrototypeOf()")}} und {{jsxref("Object.setPrototypeOf()")}} bevorzugen, um das `[[Prototype]]` eines Objekts zu setzen und abzurufen.

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
