---
title: Object.setPrototypeOf()
slug: Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf
l10n:
  sourceCommit: 3dbbefa32758e2a1ca9a37c2788370c06aae2738
---

{{JSRef}}

Die statische Methode **`Object.setPrototypeOf()`** setzt das Prototyp-Objekt (d.h. die interne Eigenschaft `[[Prototype]]`) eines angegebenen Objekts auf ein anderes Objekt oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null).

> [!WARNING]
> Das Ändern des `[[Prototype]]` eines Objekts ist aufgrund der Art und Weise, wie moderne JavaScript-Engines Zugriffe auf Eigenschaften optimieren, derzeit in jedem Browser und jeder JavaScript-Engine eine sehr langsame Operation. Außerdem sind die Auswirkungen des Änderns der Vererbung subtil und weitreichend und nicht nur auf die Zeit beschränkt, die mit der `Object.setPrototypeOf(...)`-Anweisung verbracht wird, sondern können sich auf **_jeden_** Code erstrecken, der Zugriff auf ein beliebiges Objekt hat, dessen `[[Prototype]]` verändert wurde. Weitere Informationen dazu finden Sie in [JavaScript engine fundamentals: optimizing prototypes](https://mathiasbynens.be/notes/prototypes).
>
> Da dieses Feature Teil der Sprache ist, liegt es immer noch in der Verantwortung der Engine-Entwickler, dieses Feature idealerweise performant zu implementieren. Bis die Entwickler der Engine dieses Problem angehen, sollten Sie, wenn Sie sich Sorgen über die Leistung machen, vermeiden, das `[[Prototype]]` eines Objekts festzulegen. Stattdessen sollten Sie ein neues Objekt mit dem gewünschten `[[Prototype]]` unter Verwendung von {{jsxref("Object.create()")}} erstellen.

{{InteractiveExample("JavaScript Demo: Object.setPrototypeOf()")}}

```js interactive-example
const obj = {};
const parent = { foo: "bar" };

console.log(obj.foo);
// Expected output: undefined

Object.setPrototypeOf(obj, parent);

console.log(obj.foo);
// Expected output: "bar"
```

## Syntax

```js-nolint
Object.setPrototypeOf(obj, prototype)
```

### Parameter

- `obj`
  - : Das Objekt, dessen Prototyp festgelegt werden soll.
- `prototype`
  - : Das neue Prototyp-Objekt (ein Objekt oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null)).

### Rückgabewert

Das angegebene Objekt.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Der `obj`-Parameter ist `undefined` oder `null`.
    - Der `obj`-Parameter ist [nicht-erweiterbar](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible) oder ein [immuables Prototyp-exotisches Objekt](https://tc39.es/ecma262/multipage/ordinary-and-exotic-objects-behaviours.html#sec-immutable-prototype-exotic-objects), wie z.B. `Object.prototype` oder [`window`](/de/docs/Web/API/Window). Der Fehler wird jedoch nicht ausgelöst, wenn der neue Prototyp denselben Wert hat wie der ursprüngliche Prototyp von `obj`.
    - Der `prototype`-Parameter ist kein Objekt oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null).

## Beschreibung

`Object.setPrototypeOf()` wird allgemein als der richtige Weg angesehen, um den Prototyp eines Objekts festzulegen. Sie sollten es immer gegenüber dem veralteten [`Object.prototype.__proto__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/proto) Accessor verwenden.

Wenn der `obj`-Parameter kein Objekt ist (z.B. Zahl, String, etc.), tut diese Methode nichts — ohne es zu einem Objekt zu erzwingen oder zu versuchen, seinen Prototyp festzulegen — und gibt direkt `obj` als primitiven Wert zurück. Wenn `prototype` denselben Wert hat wie der Prototyp von `obj`, dann wird `obj` direkt zurückgegeben, ohne einen `TypeError` zu verursachen, selbst wenn `obj` einen unveränderlichen Prototyp hat.

Aus Sicherheitsgründen gibt es bestimmte eingebaute Objekte, die so konzipiert sind, dass sie einen _unveränderlichen Prototyp_ haben. Dies verhindert Prototyp-Vermüllungsangriffe, insbesondere [Proxy-bezogene](https://github.com/tc39/ecma262/issues/272). Die Kernsprache spezifiziert nur `Object.prototype` als ein immuables Prototyp-exotisches Objekt, dessen Prototyp immer `null` ist. In Browsern sind [`window`](/de/docs/Web/API/Window) und [`location`](/de/docs/Web/API/Window/location) zwei weitere sehr häufige Beispiele.

```js
Object.isExtensible(Object.prototype); // true; you can add more properties
Object.setPrototypeOf(Object.prototype, {}); // TypeError: Immutable prototype object '#<Object>' cannot have their prototype set
Object.setPrototypeOf(Object.prototype, null); // No error; the prototype of `Object.prototype` is already `null`
```

## Beispiele

### Pseudoklassische Vererbung mit Object.setPrototypeOf()

Vererbung in JS unter Verwendung von Klassen.

```js
class Human {}
class SuperHero extends Human {}

const superMan = new SuperHero();
```

Wenn wir jedoch Unterklassen ohne die Verwendung von `class` implementieren möchten, können wir Folgendes tun:

```js
function Human(name, level) {
  this.name = name;
  this.level = level;
}

function SuperHero(name, level) {
  Human.call(this, name, level);
}

Object.setPrototypeOf(SuperHero.prototype, Human.prototype);

// Set the `[[Prototype]]` of `SuperHero.prototype`
// to `Human.prototype`
// To set the prototypal inheritance chain

Human.prototype.speak = function () {
  return `${this.name} says hello.`;
};

SuperHero.prototype.fly = function () {
  return `${this.name} is flying.`;
};

const superMan = new SuperHero("Clark Kent", 1);

console.log(superMan.fly());
console.log(superMan.speak());
```

Die Ähnlichkeit zwischen klassischer Vererbung (mit Klassen) und pseudoklassischer Vererbung (mit dem `prototype`-Eigenschaft von Konstruktoren), wie oben dargestellt, wird in [Vererbungsketten](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain#building_longer_inheritance_chains) erwähnt.

Da die [`prototype`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype)-Eigenschaft von Funktionskonstruktoren beschreibbar ist, können Sie sie einem neuen Objekt, das mit [`Object.create()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/create#classical_inheritance_with_object.create) erstellt wurde, neu zuweisen, um dieselbe Vererbungskette zu erreichen. Es gibt jedoch Fußangeln zu beachten, wenn `create()` verwendet wird, wie z.B. das Denken daran, die [`constructor`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor)-Eigenschaft wieder hinzuzufügen.

Im folgenden Beispiel, das auch Klassen verwendet, wird `SuperHero` dazu gebracht, von `Human` zu erben, ohne `extends` zu verwenden, indem stattdessen `setPrototypeOf()` verwendet wird.

> [!WARNING]
> Es ist aus Leistungs- und Lesbarkeitsgründen nicht ratsam, `setPrototypeOf()` anstelle von `extends` zu verwenden.

```js
class Human {}
class SuperHero {}

// Set the instance properties
Object.setPrototypeOf(SuperHero.prototype, Human.prototype);

// Hook up the static properties
Object.setPrototypeOf(SuperHero, Human);

const superMan = new SuperHero();
```

Das Erstellen von Unterklassen ohne `extends` wird in [ES-6 Subclassing](https://hacks.mozilla.org/2015/08/es6-in-depth-subclassing/) erwähnt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Object.setPrototypeOf` in `core-js`](https://github.com/zloirock/core-js#ecmascript-object)
- {{jsxref("Reflect.setPrototypeOf()")}}
- {{jsxref("Object.prototype.isPrototypeOf()")}}
- {{jsxref("Object.getPrototypeOf()")}}
- [`Object.prototype.__proto__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/proto)
- [Vererbungskette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain#building_longer_inheritance_chains)
- [ES6 In Depth: Subclassing](https://hacks.mozilla.org/2015/08/es6-in-depth-subclassing/) auf hacks.mozilla.org (2015)
