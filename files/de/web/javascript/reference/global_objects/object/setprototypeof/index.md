---
title: Object.setPrototypeOf()
short-title: setPrototypeOf()
slug: Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die statische Methode **`Object.setPrototypeOf()`** setzt den Prototyp (d.h. die interne Eigenschaft `[[Prototype]]`) eines angegebenen Objekts auf ein anderes Objekt oder auf [`null`](/de/docs/Web/JavaScript/Reference/Operators/null).

> [!WARNING]
> Das Ändern von `[[Prototype]]` eines Objekts ist aufgrund der Art und Weise, wie moderne JavaScript-Engines Eigenschaftszugriffe optimieren, derzeit in jedem Browser und jeder JavaScript-Engine ein sehr langsamer Vorgang. Zudem sind die Auswirkungen einer Änderung der Vererbung subtil und weitreichend. Sie beschränken sich nicht auf die Ausführungszeit der Anweisung `Object.setPrototypeOf(...)`, sondern können sich auf **_jeden_** Code erstrecken, der Zugriff auf ein Objekt hat, dessen `[[Prototype]]` geändert wurde. Weitere Informationen finden Sie unter [Grundlagen von JavaScript-Engines: Prototypen optimieren](https://mathiasbynens.be/notes/prototypes).
>
> Da diese Funktion Teil der Sprache ist, liegt es dennoch an den Entwicklern von JavaScript-Engines, sie möglichst performant zu implementieren. Solange dieses Problem nicht behoben ist, sollten Sie das Setzen von `[[Prototype]]` eines Objekts vermeiden, wenn Ihnen die Performance wichtig ist. Erstellen Sie stattdessen mit {{jsxref("Object.create()")}} ein neues Objekt mit dem gewünschten `[[Prototype]]`.

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
    - Der Parameter `obj` ist [nicht erweiterbar](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible) oder ein [exotisches Objekt mit unveränderlichem Prototyp](https://tc39.es/ecma262/multipage/ordinary-and-exotic-objects-behaviours.html#sec-immutable-prototype-exotic-objects), etwa `Object.prototype` oder [`window`](/de/docs/Web/API/Window). Der Fehler wird jedoch nicht ausgelöst, wenn der neue Prototyp denselben Wert wie der ursprüngliche Prototyp von `obj` hat.
    - Der Parameter `prototype` ist weder ein Objekt noch [`null`](/de/docs/Web/JavaScript/Reference/Operators/null).

## Beschreibung

`Object.setPrototypeOf()` gilt allgemein als der richtige Weg, den Prototyp eines Objekts zu setzen. Sie sollten diese Methode immer dem veralteten Accessor [`Object.prototype.__proto__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/proto) vorziehen.

Wenn der Parameter `obj` kein Objekt ist (z. B. eine Zahl oder eine Zeichenfolge), führt diese Methode nichts aus: Sie wandelt `obj` weder in ein Objekt um noch versucht sie, dessen Prototyp zu setzen. Stattdessen gibt sie `obj` direkt als primitiven Wert zurück. Wenn `prototype` denselben Wert wie der Prototyp von `obj` hat, wird `obj` ebenfalls direkt zurückgegeben, ohne einen `TypeError` auszulösen – selbst wenn `obj` einen unveränderlichen Prototyp hat.

Aus Sicherheitsgründen haben bestimmte integrierte Objekte einen _unveränderlichen Prototyp_. Dies verhindert [Prototype-Pollution-Angriffe](/de/docs/Web/Security/Attacks/Prototype_pollution), insbesondere [solche im Zusammenhang mit Proxys](https://github.com/tc39/ecma262/issues/272). Die Sprachspezifikation selbst legt nur `Object.prototype` als exotisches Objekt mit unveränderlichem Prototyp fest; sein Prototyp ist immer `null`. In Browsern sind [`window`](/de/docs/Web/API/Window) und [`location`](/de/docs/Web/API/Window/location) zwei weitere häufige Beispiele.

```js
Object.isExtensible(Object.prototype); // true; you can add more properties
Object.setPrototypeOf(Object.prototype, {}); // TypeError: Immutable prototype object '#<Object>' cannot have their prototype set
Object.setPrototypeOf(Object.prototype, null); // No error; the prototype of `Object.prototype` is already `null`
```

## Beispiele

### Pseudoklassische Vererbung mit Object.setPrototypeOf()

Vererbung in JS mithilfe von Klassen.

```js
class Human {}
class SuperHero extends Human {}

const superMan = new SuperHero();
```

Wenn wir jedoch Unterklassen ohne `class` implementieren möchten, können wir wie folgt vorgehen:

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

Die Ähnlichkeit zwischen klassischer Vererbung (mit Klassen) und pseudoklassischer Vererbung (mit der Eigenschaft `prototype` von Konstruktoren), wie oben gezeigt, wird unter [Vererbungsketten](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain#building_longer_inheritance_chains) erläutert.

Da die Eigenschaft [`prototype`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype) von Funktionskonstruktoren schreibbar ist, können Sie ihr ein neues, mit [`Object.create()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/create#classical_inheritance_with_object.create) erstelltes Objekt zuweisen, um dieselbe Vererbungskette zu erreichen. Bei der Verwendung von `create()` sind einige Besonderheiten zu beachten. Denken Sie beispielsweise daran, die Eigenschaft [`constructor`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor) wieder hinzuzufügen.

Im folgenden Beispiel, das ebenfalls Klassen verwendet, erbt `SuperHero` von `Human`. Statt `extends` wird dafür `setPrototypeOf()` verwendet.

> [!WARNING]
> Aus Gründen der Performance und Lesbarkeit ist es nicht ratsam, `setPrototypeOf()` anstelle von `extends` zu verwenden.

```js
class Human {}
class SuperHero {}

// Set the instance properties
Object.setPrototypeOf(SuperHero.prototype, Human.prototype);

// Hook up the static properties
Object.setPrototypeOf(SuperHero, Human);

const superMan = new SuperHero();
```

Die Definition von Unterklassen ohne `extends` wird unter [ES-6-Unterklassen](https://hacks.mozilla.org/2015/08/es6-in-depth-subclassing/) erläutert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `Object.setPrototypeOf` in `core-js`](https://core-js.io/docs/features/ecmascript/object)
- {{jsxref("Reflect.setPrototypeOf()")}}
- {{jsxref("Object.prototype.isPrototypeOf()")}}
- {{jsxref("Object.getPrototypeOf()")}}
- [`Object.prototype.__proto__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/proto)
- [Vererbungskette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain#building_longer_inheritance_chains)
- [ES6 im Detail: Unterklassen](https://hacks.mozilla.org/2015/08/es6-in-depth-subclassing/) auf hacks.mozilla.org (2015)
