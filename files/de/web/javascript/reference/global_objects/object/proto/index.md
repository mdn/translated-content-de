---
title: Object.prototype.__proto__
short-title: __proto__
slug: Web/JavaScript/Reference/Global_Objects/Object/proto
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{Deprecated_Header}}

> [!WARNING]
> Das Ändern des `[[Prototype]]` eines Objekts ist aufgrund der Art und Weise, wie moderne JavaScript-Engines Zugriffe auf Eigenschaften optimieren, derzeit in jedem Browser und JavaScript-Engine eine sehr langsame Operation. Darüber hinaus sind die Auswirkungen der Änderung der Vererbung subtil und weitreichend und beschränken sich nicht nur auf die Zeit, die im `obj.__proto__ = ...`-Statement verbracht wird, sondern können sich auf **_jeden_** Code erstrecken, der Zugriff auf ein beliebiges Objekt hat, dessen `[[Prototype]]` geändert wurde. Mehr dazu finden Sie in [JavaScript engine fundamentals: optimizing prototypes](https://mathiasbynens.be/notes/prototypes).

> [!NOTE]
> Die Verwendung von `__proto__` ist umstritten und wird nicht empfohlen. Seine Existenz und genaues Verhalten wurden nur als Legacy-Funktion standardisiert, um die Web-Kompatibilität zu gewährleisten, während es mehrere Sicherheitsprobleme und Fallen verursacht. Für bessere Unterstützung sollten Sie stattdessen {{jsxref("Object.getPrototypeOf()")}}/{{jsxref("Reflect.getPrototypeOf()")}} und {{jsxref("Object.setPrototypeOf()")}}/{{jsxref("Reflect.setPrototypeOf()")}} bevorzugen.

Die **`__proto__`** Accessor-Eigenschaft von {{jsxref("Object")}}-Instanzen offenbart das [`[[Prototype]]`](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain) (entweder ein Objekt oder {{jsxref("Operators/null", "null")}}) dieses Objekts.

Die `__proto__`-Eigenschaft kann auch in einer Objektliteraldarstellung verwendet werden, um das Objekt `[[Prototype]]` bei der Erstellung festzulegen, als Alternative zu {{jsxref("Object.create()")}}. Siehe: [Objektinitialisierer / Literalsyntax](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer). Diese Syntax ist standardisiert und für Implementierungen optimiert und unterscheidet sich erheblich von `Object.prototype.__proto__`.

## Syntax

```js-nolint
obj.__proto__
```

### Rückgabewert

Wenn es als Getter verwendet wird, gibt es das `[[Prototype]]` des Objekts zurück.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn versucht wird, den Prototyp eines [nicht erweiterbaren](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible) Objekts oder eines [unveränderlichen Prototyp-Exotisch-Objekts](https://tc39.es/ecma262/multipage/ordinary-and-exotic-objects-behaviours.html#sec-immutable-prototype-exotic-objects), wie `Object.prototype` oder [`window`](/de/docs/Web/API/Window), zu setzen.

## Beschreibung

Die `__proto__`-Getter-Funktion zeigt den Wert des internen `[[Prototype]]` eines Objekts an. Für Objekte, die mit einem Objektliteral erstellt wurden (es sei denn, Sie verwenden die [Prototype-Setter](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer#prototype_setter)-Syntax), ist dieser Wert `Object.prototype`. Für Objekte, die mit Array-Literalen erstellt wurden, ist dieser Wert [`Array.prototype`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array). Für Funktionen ist dieser Wert {{jsxref("Function.prototype")}}. Weitere Informationen zur Prototypkette finden Sie in [Vererbung und die Prototypkette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain).

Der `__proto__`-Setter ermöglicht es, das `[[Prototype]]` eines Objekts zu verändern. Der angegebene Wert muss ein Objekt oder {{jsxref("Operators/null", "null")}} sein. Andere Werte führen zu keiner Veränderung.

Im Gegensatz zu {{jsxref("Object.getPrototypeOf()")}} und {{jsxref("Object.setPrototypeOf()")}}, die immer als statische Eigenschaften auf `Object` verfügbar sind und stets die `[[Prototype]]`-interne Eigenschaft widerspiegeln, existiert die `__proto__`-Eigenschaft nicht immer als Eigenschaft auf allen Objekten und spiegelt daher `[[Prototype]]` nicht zuverlässig wider.

Die `__proto__`-Eigenschaft ist lediglich eine Accessor-Eigenschaft auf `Object.prototype`, die aus einer Getter- und Setter-Funktion besteht. Ein Zugriff auf `__proto__`, der letztlich `Object.prototype` konsultiert, wird diese Eigenschaft finden, aber ein Zugriff, der `Object.prototype` nicht konsultiert, wird sie nicht finden. Wenn eine andere `__proto__`-Eigenschaft gefunden wird, bevor `Object.prototype` konsultiert wird, wird diese Eigenschaft diejenige von `Object.prototype` überdecken.

[`null`-Prototyp-Objekte](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects) erben keine Eigenschaft von `Object.prototype`, einschließlich der `__proto__`-Accessor-Eigenschaft, daher ist der Wert von `__proto__` beim Lesen von einem solchen Objekt immer `undefined`, unabhängig von dem tatsächlichen `[[Prototype]]` des Objekts, und jede Zuweisung an `__proto__` würde eine neue Eigenschaft namens `__proto__` erstellen, anstatt das Prototyp des Objekts zu setzen. Darüber hinaus kann `__proto__` als eigene Eigenschaft auf jeder Objektinstanz durch {{jsxref("Object.defineProperty()")}} ohne Auslösen des Setzers neu definiert werden. In diesem Fall wird `__proto__` kein Accessor mehr für `[[Prototype]]` sein. Daher sollten Sie immer {{jsxref("Object.getPrototypeOf()")}} und {{jsxref("Object.setPrototypeOf()")}} bevorzugen, um das `[[Prototype]]` eines Objekts zu setzen und zu erhalten.

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
