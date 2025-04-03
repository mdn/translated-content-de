---
title: Object.setPrototypeOf()
slug: Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{JSRef}}

Die statische Methode **`Object.setPrototypeOf()`** setzt das Prototyp-Objekt (d.h. die interne Eigenschaft `[[Prototype]]`) eines angegebenen Objekts auf ein anderes Objekt oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null).

> [!WARNING]
> Das Ändern des `[[Prototype]]` eines Objekts ist aufgrund der Art und Weise, wie moderne JavaScript-Engines Zugriffe auf Eigenschaften optimieren, derzeit eine sehr langsame Operation in jedem Browser und jeder JavaScript-Engine. Darüber hinaus sind die Auswirkungen der Änderung der Vererbung subtil und weitreichend und beschränken sich nicht nur auf die Zeit, die im `Object.setPrototypeOf(...)`-Statement verbracht wird, sondern können sich auf **_jedes_** Code stück ausdehnen, das auf ein Objekt zugreifen kann, dessen `[[Prototype]]` geändert wurde. Mehr dazu können Sie in [JavaScript engine fundamentals: optimizing prototypes](https://mathiasbynens.be/notes/prototypes) lesen.
>
> Weil diese Funktion ein Teil der Sprache ist, liegt es immer noch in der Verantwortung der Engine-Entwickler, diese Funktion performant zu implementieren (idealerweise). Bis die Engine-Entwickler dieses Problem angehen, sollten Sie, wenn Sie sich um die Leistung sorgen, vermeiden, das `[[Prototype]]` eines Objekts zu setzen. Stattdessen sollten Sie ein neues Objekt mit dem gewünschten `[[Prototype]]` mit {{jsxref("Object.create()")}} erstellen.

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
  - : Das Objekt, dessen Prototyp gesetzt werden soll.
- `prototype`
  - : Das neue Prototyp-Objekt des Objekts (ein Objekt oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null)).

### Rückgabewert

Das angegebene Objekt.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Der `obj`-Parameter ist `undefined` oder `null`.
    - Der `obj`-Parameter ist [nicht erweiterbar](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible) oder er ist ein [unveränderliches Prototyp-Objekt](https://tc39.es/ecma262/multipage/ordinary-and-exotic-objects-behaviours.html#sec-immutable-prototype-exotic-objects), wie `Object.prototype` oder [`window`](/de/docs/Web/API/Window). Ein Fehler wird jedoch nicht ausgelöst, wenn das neue Prototyp-Objekt denselben Wert hat wie das ursprüngliche Prototyp-Objekt von `obj`.
    - Der `prototype`-Parameter ist kein Objekt oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null).

## Beschreibung

`Object.setPrototypeOf()` wird allgemein als die richtige Methode angesehen, um das Prototyp eines Objekts zu setzen. Sie sollten es immer dem veralteten [`Object.prototype.__proto__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/proto)-Accessor vorziehen.

Wenn der `obj`-Parameter kein Objekt ist (z.B. Zahl, String, etc.), macht diese Methode nichts — ohne es zu einem Objekt zu erzwingen oder zu versuchen, sein Prototyp zu setzen — und gibt `obj` direkt als primitiven Wert zurück. Wenn `prototype` denselben Wert wie der Prototyp von `obj` hat, wird `obj` direkt zurückgegeben, ohne einen `TypeError` zu verursachen, selbst wenn `obj` ein unveränderliches Prototyp hat.

Aufgrund von Sicherheitsbedenken gibt es bestimmte eingebaut Objekte, die so gestaltet sind, dass sie ein _unveränderliches Prototyp_ haben. Dies verhindert Angriffe zur Prototyp-Verunreinigung, insbesondere bei [Proxy-bezogenen](https://github.com/tc39/ecma262/issues/272). Die Hauptsprache spezifiziert nur `Object.prototype` als ein unveränderliches Prototyp-Objekt, dessen Prototyp immer `null` ist. In Browsern sind [`window`](/de/docs/Web/API/Window) und [`location`](/de/docs/Web/API/Window/location) zwei weitere sehr häufige Beispiele.

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

Die Ähnlichkeit zwischen klassischer Vererbung (mit Klassen) und pseudoklassischer Vererbung (mit dem `prototype`-Property der Konstruktoren), wie oben beschrieben, wird in [Inheritance chains](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain#building_longer_inheritance_chains) erwähnt.

Da das [`prototype`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype)-Property von Funktionskonstruktoren beschreibbar ist, können Sie es einem neuen Objekt, das mit [`Object.create()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/create#classical_inheritance_with_object.create) erstellt wurde, neu zuweisen, um die gleiche Vererbungskette zu erreichen. Es gibt jedoch einige Dinge, auf die beim Verwenden von `create()` geachtet werden muss, wie etwa das erneute Hinzufügen der [`constructor`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor)-Eigenschaft.

Im folgenden Beispiel, in dem auch Klassen verwendet werden, wird `SuperHero` so erstellt, dass es von `Human` erbt, ohne `extends` zu verwenden, indem statt dessen `setPrototypeOf()` verwendet wird.

> [!WARNING]
> Es ist nicht ratsam, `setPrototypeOf()` anstelle von `extends` zu verwenden, aufgrund von Performance- und Lesbarkeitsgründen.

```js
class Human {}
class SuperHero {}

// Set the instance properties
Object.setPrototypeOf(SuperHero.prototype, Human.prototype);

// Hook up the static properties
Object.setPrototypeOf(SuperHero, Human);

const superMan = new SuperHero();
```

Das Subclassing ohne `extends` wird in [ES-6 subclassing](https://hacks.mozilla.org/2015/08/es6-in-depth-subclassing/) erwähnt.

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
- [Inheritance chain](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain#building_longer_inheritance_chains)
- [ES6 In Depth: Subclassing](https://hacks.mozilla.org/2015/08/es6-in-depth-subclassing/) auf hacks.mozilla.org (2015)
