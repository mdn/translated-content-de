---
title: Object.prototype.__proto__
slug: Web/JavaScript/Reference/Global_Objects/Object/proto
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}{{Deprecated_Header}}

> [!WARNING]
> Das Ändern des `[[Prototype]]` eines Objekts ist aufgrund der Art und Weise, wie moderne JavaScript-Engines den Zugriff auf Eigenschaften optimieren, derzeit in jedem Browser und jeder JavaScript-Engine ein sehr langsamer Vorgang. Darüber hinaus sind die Auswirkungen der Veränderung der Vererbung subtil und weitreichend und beschränken sich nicht auf die Zeit, die in der Anweisung `obj.__proto__ = ...` verbracht wird, sondern können sich auf **_beliebigen_** Code erstrecken, der Zugriff auf ein beliebiges Objekt hat, dessen `[[Prototype]]` verändert wurde. Sie können mehr darüber im Artikel [JavaScript engine fundamentals: optimizing prototypes](https://mathiasbynens.be/notes/prototypes) lesen.

> [!NOTE]
> Die Verwendung von `__proto__` ist umstritten und wird nicht empfohlen. Seine Existenz und sein genaues Verhalten wurden nur als Legacy-Funktion standardisiert, um die Kompatibilität mit dem Web zu gewährleisten, während es mehrere Sicherheitsprobleme und Fußangeln birgt. Für besseren Support bevorzugen Sie {{jsxref("Object.getPrototypeOf()")}}/{{jsxref("Reflect.getPrototypeOf()")}} und {{jsxref("Object.setPrototypeOf()")}}/{{jsxref("Reflect.setPrototypeOf()")}}.

Die **`__proto__`** Zugriffseigenschaft von {{jsxref("Object")}} Instanzen gibt den [`[[Prototype]]`](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain) (entweder ein Objekt oder {{jsxref("Operators/null", "null")}}) dieses Objekts preis.

Die `__proto__`-Eigenschaft kann auch in einer Objektliteraldefinition verwendet werden, um das Objekt `[[Prototype]]` bei der Erstellung festzulegen, als Alternative zu {{jsxref("Object.create()")}}. Siehe: [Objekt-Initialisierer / Literal-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer). Diese Syntax ist standardisiert und in Implementierungen optimiert und unterscheidet sich erheblich von `Object.prototype.__proto__`.

## Syntax

```js-nolint
obj.__proto__
```

### Rückgabewert

Wird sie als Getter verwendet, gibt sie das `[[Prototype]]` des Objekts zurück.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn versucht wird, das Prototyp eines [nicht erweiterbaren](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible) Objekts oder eines [exotischen Objekts mit unveränderbarem Prototyp](https://tc39.es/ecma262/multipage/ordinary-and-exotic-objects-behaviours.html#sec-immutable-prototype-exotic-objects) festzulegen, wie `Object.prototype` oder [`window`](/de/docs/Web/API/Window).

## Beschreibung

Die `__proto__`-Getter-Funktion legt den Wert des internen `[[Prototype]]` eines Objekts offen. Für mit einem Objektliteral erstellte Objekte (außer Sie verwenden die [Prototype-Setter](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer#prototype_setter) Syntax) ist dieser Wert `Object.prototype`. Für mit Array-Literalen erstellte Objekte ist dieser Wert [`Array.prototype`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array). Für Funktionen ist dieser Wert {{jsxref("Function.prototype")}}. Sie können mehr über die Prototypen-Kette im Artikel [Inheritance and the prototype chain](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain) lesen.

Der `__proto__`-Setter ermöglicht es, das `[[Prototype]]` eines Objekts zu ändern. Der bereitgestellte Wert muss ein Objekt oder {{jsxref("Operators/null", "null")}} sein. Bei Bereitstellung eines anderen Wertes wird nichts unternommen.

Im Gegensatz zu {{jsxref("Object.getPrototypeOf()")}} und {{jsxref("Object.setPrototypeOf()")}}, die immer als statische Eigenschaften auf `Object` verfügbar sind und immer die interne Eigenschaft `[[Prototype]]` widerspiegeln, existiert die `__proto__`-Eigenschaft nicht immer als Eigenschaft auf allen Objekten und spiegelt daher `[[Prototype]]` nicht zuverlässig wider.

Die `__proto__`-Eigenschaft ist eine einfache Zugriffseigenschaft auf `Object.prototype`, bestehend aus einer Getter- und Setter-Funktion. Ein Zugriff auf die Eigenschaft `__proto__`, der schließlich `Object.prototype` konsultiert, wird diese Eigenschaft finden, aber ein Zugriff, der `Object.prototype` nicht konsultiert, wird dies nicht. Wenn eine andere `__proto__`-Eigenschaft gefunden wird, bevor `Object.prototype` konsultiert wird, wird diese Eigenschaft die auf `Object.prototype` gefundene verstecken.

[`null`-Prototyp-Objekte](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects) erben keine Eigenschaft von `Object.prototype`, einschließlich der `__proto__`-Zugriffseigenschaft. Wenn Sie versuchen, `__proto__` auf einem solchen Objekt zu lesen, ist der Wert immer `undefined`, unabhängig vom tatsächlichen `[[Prototype]]` des Objekts, und jeder Zugriff auf `__proto__` würde eine neue Eigenschaft namens `__proto__` erstellen, anstatt den Prototyp des Objekts festzulegen. Zudem kann `__proto__` als eigene Eigenschaft auf jeder Objektinstanz durch {{jsxref("Object.defineProperty()")}} neu definiert werden, ohne den Setter auszulösen. In diesem Fall ist `__proto__` kein Zugriff mehr auf `[[Prototype]]`. Daher sollten Sie immer {{jsxref("Object.getPrototypeOf()")}} und {{jsxref("Object.setPrototypeOf()")}} für das Festlegen und Abrufen des `[[Prototype]]` eines Objekts bevorzugen.

## Beispiele

### Verwendung von \_\_proto\_\_

```js
function Circle() {}
const shape = {};
const circle = new Circle();

// Legen Sie den Objektprototyp fest.
// VERALTET. Dies dient nur zu Demonstrationszwecken. MACHEN SIE DAS NICHT im echten Code.
shape.__proto__ = circle;

// Holen Sie den Objektprototyp
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
