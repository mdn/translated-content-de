---
title: Object.setPrototypeOf()
short-title: setPrototypeOf()
slug: Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die statische Methode **`Object.setPrototypeOf()`** setzt das Prototyp (d.h. die interne `[[Prototype]]`-Eigenschaft) eines angegebenen Objekts auf ein anderes Objekt oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null).

> [!WARNING]
> Das Ändern des `[[Prototype]]` eines Objekts ist aufgrund der Art und Weise, wie moderne JavaScript-Engines den Zugriff auf Eigenschaften optimieren, derzeit in jedem Browser und jeder JavaScript-Engine eine sehr langsame Operation. Darüber hinaus sind die Auswirkungen der Änderung der Vererbung subtil und weitreichend und beschränken sich nicht auf die Zeit, die in der `Object.setPrototypeOf(...)`-Anweisung verbracht wird, sondern können sich auf **_jede_** Codezeile erstrecken, die Zugriff auf ein beliebiges Objekt hat, dessen `[[Prototype]]` geändert wurde. Sie können mehr darüber in [JavaScript-Engine-Grundlagen: Optimierung von Prototypen](https://mathiasbynens.be/notes/prototypes) lesen.
>
> Da dieses Feature ein Teil der Sprache ist, liegt es nach wie vor in der Verantwortung der Engine-Entwickler, diese Funktion idealerweise performancestark zu implementieren. Bis die Engine-Entwickler dieses Problem angehen, sollten Sie, wenn Ihnen die Leistung wichtig ist, vermeiden, das `[[Prototype]]` eines Objekts zu setzen. Stattdessen sollten Sie ein neues Objekt mit dem gewünschten `[[Prototype]]` mit {{jsxref("Object.create()")}} erstellen.

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
    - Der `obj`-Parameter ist `undefined` oder `null`.
    - Der `obj`-Parameter ist [nicht erweiterbar](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible) oder es handelt sich um ein [unveränderliches Prototyp-exotisches Objekt](https://tc39.es/ecma262/multipage/ordinary-and-exotic-objects-behaviours.html#sec-immutable-prototype-exotic-objects), wie `Object.prototype` oder [`window`](/de/docs/Web/API/Window). Der Fehler wird jedoch nicht ausgelöst, wenn der neue Prototyp denselben Wert wie der ursprüngliche Prototyp von `obj` hat.
    - Der `prototype`-Parameter ist kein Objekt oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null).

## Beschreibung

`Object.setPrototypeOf()` gilt allgemein als der richtige Weg, um den Prototyp eines Objekts festzulegen. Sie sollten es immer dem veralteten [`Object.prototype.__proto__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/proto)-Zugriff vorziehen.

Wenn der `obj`-Parameter kein Objekt ist (z.B. Zahl, Zeichenkette, etc.), tut diese Methode nichts — ohne es zu einem Objekt zu erzwingen oder zu versuchen, seinen Prototyp zu setzen — und gibt `obj` direkt als primitiven Wert zurück. Wenn `prototype` denselbe Wert wie der Prototyp von `obj` ist, wird `obj` direkt zurückgegeben, ohne dass ein `TypeError` auftritt, selbst wenn `obj` einen unveränderlichen Prototyp hat.

Aus Sicherheitsgründen gibt es bestimmte eingebaute Objekte, die so konzipiert sind, dass sie ein _unveränderliches Prototyp_ haben. Dies verhindert Angriffe durch Prototypenverschmutzung, insbesondere [proxy-bezogene Angriffe](https://github.com/tc39/ecma262/issues/272). Die Kernsprache spezifiziert nur `Object.prototype` als unveränderliches Prototyp-exotisches Objekt, dessen Prototyp immer `null` ist. In Browsern sind [`window`](/de/docs/Web/API/Window) und [`location`](/de/docs/Web/API/Window/location) zwei weitere sehr häufige Beispiele.

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

Wenn wir jedoch Unterklassen implementieren möchten, ohne `class` zu verwenden, können wir Folgendes tun:

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

Die Ähnlichkeit zwischen klassischer Vererbung (mit Klassen) und pseudoklassischer Vererbung (mit `prototype`-Eigenschaft von Konstruktoren), wie oben gezeigt, wird in [Vererbungsketten](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain#building_longer_inheritance_chains) erwähnt.

Da die [`prototype`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype)-Eigenschaft von Funktionskonstruktoren beschreibbar ist, können Sie es einem neuen Objekt, das mit [`Object.create()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/create#classical_inheritance_with_object.create) erstellt wurde, zuweisen, um die gleiche Vererbungskette zu erstellen. Es gibt jedoch Vorbehalte bei der Verwendung von `create()`, wie etwa daran zu denken, die [`constructor`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor)-Eigenschaft wieder hinzuzufügen.

Im folgenden Beispiel, das ebenfalls Klassen verwendet, wird `SuperHero` so gestaltet, dass es von `Human` erbt, ohne `extends` zu verwenden, indem stattdessen `setPrototypeOf()` verwendet wird.

> [!WARNING]
> Es ist nicht ratsam, `setPrototypeOf()` anstelle von `extends` zu verwenden, aus Leistungs- und Lesbarkeitsgründen.

```js
class Human {}
class SuperHero {}

// Set the instance properties
Object.setPrototypeOf(SuperHero.prototype, Human.prototype);

// Hook up the static properties
Object.setPrototypeOf(SuperHero, Human);

const superMan = new SuperHero();
```

Das Unterklassen ohne `extends` wird in [ES-6 subclassing](https://hacks.mozilla.org/2015/08/es6-in-depth-subclassing/) erwähnt.

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
