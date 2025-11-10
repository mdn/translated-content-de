---
title: Object.setPrototypeOf()
short-title: setPrototypeOf()
slug: Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf
l10n:
  sourceCommit: 00c3b9fb6ead031e43863460add87321f262696c
---

Die **`Object.setPrototypeOf()`** statische Methode setzt das Prototyp (d.h. die interne `[[Prototype]]`-Eigenschaft) eines angegebenen Objekts auf ein anderes Objekt oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null).

> [!WARNING]
> Das Ändern des `[[Prototype]]` eines Objekts ist aufgrund der Art und Weise, wie moderne JavaScript-Engines Eigenschaftszugriffe optimieren, derzeit eine sehr langsame Operation in jedem Browser und JavaScript-Engine. Darüber hinaus sind die Auswirkungen der Änderung der Vererbung subtil und weitreichend und beschränken sich nicht nur auf die Zeit, die in der `Object.setPrototypeOf(...)`-Anweisung verbracht wird, sondern können sich auf **_jeden_** Code erstrecken, der auf ein Objekt zugreift, dessen `[[Prototype]]` verändert wurde. Mehr dazu können Sie unter [JavaScript-Engine-Grundlagen: Optimierung von Prototypen](https://mathiasbynens.be/notes/prototypes) lesen.
>
> Da dieses Feature Teil der Sprache ist, liegt es weiterhin in der Verantwortlichkeit der Engine-Entwickler, dieses Feature performant zu implementieren (idealerweise). Bis die Engine-Entwickler dieses Problem lösen, sollten Sie, wenn Ihnen die Leistung wichtig ist, es vermeiden, das `[[Prototype]]` eines Objekts zu setzen. Stattdessen sollten Sie ein neues Objekt mit dem gewünschten `[[Prototype]]` unter Verwendung von {{jsxref("Object.create()")}} erstellen.

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
    - Der `obj`-Parameter ist [nicht erweiterbar](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible) oder es handelt sich um ein [unveränderliches Prototyp-exotisches Objekt](https://tc39.es/ecma262/multipage/ordinary-and-exotic-objects-behaviours.html#sec-immutable-prototype-exotic-objects), wie `Object.prototype` oder [`window`](/de/docs/Web/API/Window). Die Fehlermeldung wird jedoch nicht ausgelöst, wenn der neue Prototyp denselben Wert hat wie der ursprüngliche Prototyp von `obj`.
    - Der `prototype`-Parameter ist kein Objekt oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null).

## Beschreibung

`Object.setPrototypeOf()` wird allgemein als der richtige Weg angesehen, den Prototyp eines Objekts zu setzen. Sie sollten es immer zugunsten des veralteten [`Object.prototype.__proto__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/proto)-Zugriffs verwenden.

Wenn der `obj`-Parameter kein Objekt ist (z.B. Zahl, Zeichenkette, etc.), führt diese Methode keine Aktion durch — ohne es in ein Objekt umzuwandeln oder zu versuchen, dessen Prototyp zu setzen — und gibt `obj` direkt als primitiven Wert zurück. Wenn `prototype` denselben Wert hat wie der Prototyp von `obj`, dann wird `obj` direkt zurückgegeben, ohne dass ein `TypeError` verursacht wird, selbst wenn `obj` ein unveränderlicher Prototyp ist.

Aus Sicherheitsgründen gibt es bestimmte integrierte Objekte, die so konzipiert sind, dass sie einen _unveränderlichen Prototyp_ haben. Dies verhindert [Prototype-Pollution-Angriffe](/de/docs/Web/Security/Attacks/Prototype_pollution), insbesondere [proxy-bezogene] (https://github.com/tc39/ecma262/issues/272). Die Kernsprache gibt nur `Object.prototype` als ein unveränderliches Prototyp-exotisches Objekt an, dessen Prototyp immer `null` ist. In Browsern sind [`window`](/de/docs/Web/API/Window) und [`location`](/de/docs/Web/API/Window/location) zwei weitere sehr häufige Beispiele.

```js
Object.isExtensible(Object.prototype); // true; you can add more properties
Object.setPrototypeOf(Object.prototype, {}); // TypeError: Immutable prototype object '#<Object>' cannot have their prototype set
Object.setPrototypeOf(Object.prototype, null); // No error; the prototype of `Object.prototype` is already `null`
```

## Beispiele

### Pseudo-klassische Vererbung mit Object.setPrototypeOf()

Vererbung in JS unter Verwendung von Klassen.

```js
class Human {}
class SuperHero extends Human {}

const superMan = new SuperHero();
```

Wenn wir jedoch Unterklassen ohne Verwendung von `class` implementieren wollen, können wir Folgendes tun:

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

Die Ähnlichkeit zwischen klassischer Vererbung (mit Klassen) und pseudo-klassischer Vererbung (mit `prototype`-Eigenschaft von Konstruktoren), wie oben dargestellt, wird in [Vererbungsketten](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain#building_longer_inheritance_chains) erwähnt.

Da die [`prototype`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype)-Eigenschaft von Funktionskonstruktoren schreibbar ist, können Sie sie einer neuen mit [`Object.create()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/create#classical_inheritance_with_object.create) erstellten Objekt zuweisen, um dieselbe Vererbungskette zu erreichen. Es gibt jedoch Vorbehalte zu beachten, wenn Sie `create()` verwenden, wie z. B. das Erinnern daran, die [`constructor`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor)-Eigenschaft erneut hinzuzufügen.

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

Die Unterklassenbildung ohne `extends` wird im Abschnitt [ES-6-Unterklassenbildung](https://hacks.mozilla.org/2015/08/es6-in-depth-subclassing/) erwähnt.

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
