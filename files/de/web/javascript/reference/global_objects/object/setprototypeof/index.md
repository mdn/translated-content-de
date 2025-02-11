---
title: Object.setPrototypeOf()
slug: Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`Object.setPrototypeOf()`** statische Methode setzt das Prototyp (d. h. die interne `[[Prototype]]`-Eigenschaft) eines angegebenen Objekts auf ein anderes Objekt oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null).

> [!WARNING]
> Das Ändern des `[[Prototype]]` eines Objekts ist aufgrund der Art und Weise, wie moderne JavaScript-Engines den Zugriff auf Eigenschaften optimieren, derzeit in jedem Browser und jeder JavaScript-Engine eine sehr langsame Operation. Zusätzlich sind die Auswirkungen der Änderung der Vererbung subtil und weitreichend und beschränken sich nicht nur auf die Zeit, die in der `Object.setPrototypeOf(...)`-Anweisung verbracht wird, sondern können sich auf **_jeglichen_** Code auswirken, der auf eines der Objekte zugreift, deren `[[Prototype]]` geändert wurde. Weitere Informationen hierzu finden Sie in [JavaScript engine fundamentals: optimizing prototypes](https://mathiasbynens.be/notes/prototypes).
>
> Da dieses Feature Teil der Sprache ist, obliegt es immer noch den Engine-Entwicklern, diese Funktion performant zu implementieren (idealerweise). Bis die Engine-Entwickler dieses Problem lösen, sollten Sie, sofern Sie sich um die Leistung sorgen, vermeiden, das `[[Prototype]]` eines Objekts zu setzen. Stattdessen sollten Sie ein neues Objekt mit dem gewünschten `[[Prototype]]` erstellen, indem Sie {{jsxref("Object.create()")}} verwenden.

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
  - : Der neue Prototyp des Objekts (ein Objekt oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null)).

### Rückgabewert

Das angegebene Objekt.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Der Parameter `obj` ist `undefined` oder `null`.
    - Der Parameter `obj` ist [nicht erweiterbar](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible) oder ein [unveränderliches Prototyp-exotisches Objekt](https://tc39.es/ecma262/multipage/ordinary-and-exotic-objects-behaviours.html#sec-immutable-prototype-exotic-objects), wie `Object.prototype` oder [`window`](/de/docs/Web/API/Window). Allerdings wird der Fehler nicht ausgelöst, wenn der neue Prototyp denselben Wert wie der ursprüngliche Prototyp von `obj` hat.
    - Der Parameter `prototype` ist weder ein Objekt noch [`null`](/de/docs/Web/JavaScript/Reference/Operators/null).

## Beschreibung

`Object.setPrototypeOf()` wird allgemein als die korrekte Methode betrachtet, um den Prototyp eines Objekts festzulegen. Sie sollten diese Methode immer dem veralteten [`Object.prototype.__proto__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/proto) Zugang vorziehen.

Falls der Parameter `obj` kein Objekt ist (z. B. eine Zahl, ein String usw.), führt diese Methode nichts aus — ohne es zu einem Objekt umzuwandeln oder zu versuchen, dessen Prototyp zu setzen — und gibt `obj` direkt als primitiven Wert zurück. Wenn `prototype` denselben Wert wie der Prototyp von `obj` hat, wird `obj` direkt zurückgegeben, ohne dass ein `TypeError` ausgelöst wird, auch wenn `obj` einen unveränderlichen Prototyp hat.

Aus Sicherheitsgründen gibt es bestimmte eingebaute Objekte, die ein _unveränderliches Prototyp_ haben. Dies verhindert Angriffe durch Prototyp-Verschmutzung, insbesondere [proxy-bezogene Angriffe](https://github.com/tc39/ecma262/issues/272). Die Kernsprache spezifiziert nur `Object.prototype` als ein Prototyp-exotisches Objekt mit unveränderlichem Prototyp, dessen Prototyp immer `null` ist. In Browsern sind [`window`](/de/docs/Web/API/Window) und [`location`](/de/docs/Web/API/Window/location) zwei weitere sehr häufige Beispiele.

```js
Object.isExtensible(Object.prototype); // true; you can add more properties
Object.setPrototypeOf(Object.prototype, {}); // TypeError: Immutable prototype object '#<Object>' cannot have their prototype set
Object.setPrototypeOf(Object.prototype, null); // No error; the prototype of `Object.prototype` is already `null`
```

## Beispiele

### Pseudoklassische Vererbung mit Object.setPrototypeOf()

Vererbung in JS mit Klassen.

```js
class Human {}
class SuperHero extends Human {}

const superMan = new SuperHero();
```

Falls wir jedoch Unterklassen ohne Verwendung von `class` implementieren wollen, können wir Folgendes tun:

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

Die Ähnlichkeiten zwischen klassischer Vererbung (mit Klassen) und pseudoklassischer Vererbung (mit dem `prototype`-Eigenschaft des Konstruktors), wie oben gezeigt, wird unter [Inheritance chains](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain#building_longer_inheritance_chains) erwähnt.

Da die [`prototype`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype)-Eigenschaft von Funktionskonstruktoren beschreibbar ist, können Sie diese auf ein neues Objekt ändern, das mit [`Object.create()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/create#classical_inheritance_with_object.create) erstellt wurde, um dieselbe Vererbungskette zu erreichen. Es gibt jedoch einige Dinge zu beachten, wenn Sie `create()` verwenden, zum Beispiel das [`constructor`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor)-Attribut erneut hinzuzufügen.

Im folgenden Beispiel, das ebenfalls Klassen verwendet, erbt `SuperHero` von `Human`, jedoch ohne `extends`, indem stattdessen `setPrototypeOf()` verwendet wird.

> [!WARNING]
> Es wird nicht empfohlen, `setPrototypeOf()` anstelle von `extends` zu verwenden, da dies aus Gründen der Leistung und Lesbarkeit problematisch ist.

```js
class Human {}
class SuperHero {}

// Set the instance properties
Object.setPrototypeOf(SuperHero.prototype, Human.prototype);

// Hook up the static properties
Object.setPrototypeOf(SuperHero, Human);

const superMan = new SuperHero();
```

Die Subklassenerstellung ohne `extends` wird unter [ES-6 subclassing](https://hacks.mozilla.org/2015/08/es6-in-depth-subclassing/) erwähnt.

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
- [Vererbungskette](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain#building_longer_inheritance_chains)
- [ES6 In Depth: Subclassing](https://hacks.mozilla.org/2015/08/es6-in-depth-subclassing/) auf hacks.mozilla.org (2015)
