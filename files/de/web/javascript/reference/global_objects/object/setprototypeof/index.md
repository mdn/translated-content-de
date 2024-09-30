---
title: Object.setPrototypeOf()
slug: Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die **`Object.setPrototypeOf()`** statische Methode setzt das Prototyp (d.h. die interne `[[Prototype]]`-Eigenschaft) eines angegebenen Objekts auf ein anderes Objekt oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null).

> [!WARNING]
> Das Ändern des `[[Prototype]]` eines Objekts ist aufgrund der Art und Weise, wie moderne JavaScript-Engines den Zugriff auf Eigenschaften optimieren, derzeit ein sehr langsamer Vorgang in jedem Browser und jeder JavaScript-Engine. Darüber hinaus sind die Auswirkungen der Änderung der Vererbung subtil und umfangreich und beschränken sich nicht auf die Zeit, die im `Object.setPrototypeOf(...)`-Statement verbringt wird, sondern können sich auf **_jedem_** Code auswirken, der Zugriff auf ein Objekt hat, dessen `[[Prototype]]` geändert wurde. Sie können mehr darüber in [JavaScript engine fundamentals: optimizing prototypes](https://mathiasbynens.be/notes/prototypes) lesen.
>
> Da dieses Feature Teil der Sprache ist, liegt die Verantwortung für die performante Implementierung (idealerweise) immer noch bei den Engine-Entwicklern. Bis die Engine-Entwickler dieses Problem angehen, sollten Sie, wenn Sie besorgt über die Leistung sind, vermeiden, das `[[Prototype]]` eines Objekts zu setzen. Stattdessen sollten Sie ein neues Objekt mit dem gewünschten `[[Prototype]]` unter Verwendung von {{jsxref("Object.create()")}} erstellen.

{{EmbedInteractiveExample("pages/js/object-setprototypeof.html")}}

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
    - Der `obj`-Parameter ist [nicht erweiterbar](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible), oder es handelt sich um ein [unveränderliches exotisches Prototypobjekt](https://tc39.es/ecma262/multipage/ordinary-and-exotic-objects-behaviours.html#sec-immutable-prototype-exotic-objects), wie `Object.prototype` oder [`window`](/de/docs/Web/API/Window). Ein Fehler wird jedoch nicht ausgelöst, wenn der neue Prototyp denselben Wert wie der ursprüngliche Prototyp von `obj` hat.
    - Der `prototype`-Parameter ist kein Objekt oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null).

## Beschreibung

`Object.setPrototypeOf()` wird im Allgemeinen als die richtige Methode betrachtet, um das Prototyp eines Objekts zu setzen. Sie sollten es immer gegenüber dem veralteten [`Object.prototype.__proto__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/proto) Accessor verwenden.

Wenn der `obj`-Parameter kein Objekt ist (z.B. Zahl, String, etc.), macht diese Methode nichts — ohne es zu einem Objekt zu zwingen oder zu versuchen, seinen Prototyp zu setzen — und gibt `obj` direkt als primitiven Wert zurück. Wenn `prototype` denselben Wert wie das Prototyp von `obj` hat, wird `obj` direkt zurückgegeben, ohne einen `TypeError` zu verursachen, selbst wenn `obj` ein unveränderliches Prototyp hat.

Aus Sicherheitsgründen gibt es bestimmte eingebaute Objekte, die ein _unveränderliches Prototyp_ haben sollen. Dies verhindert Angriffe durch Prototyp-Verschmutzung, insbesondere [Proxy-bezogene](https://github.com/tc39/ecma262/issues/272). Die Kernsprache spezifiziert nur `Object.prototype` als unveränderliches exotisches Prototypobjekt, dessen Prototyp immer `null` ist. In Browsern sind [`window`](/de/docs/Web/API/Window) und [`location`](/de/docs/Web/API/Window/location) zwei weitere sehr häufige Beispiele.

```js
Object.isExtensible(Object.prototype); // true; you can add more properties
Object.setPrototypeOf(Object.prototype, {}); // TypeError: Immutable prototype object '#<Object>' cannot have their prototype set
Object.setPrototypeOf(Object.prototype, null); // No error; the prototype of `Object.prototype` is already `null`
```

## Beispiele

### Pseudoklassische Vererbung unter Verwendung von Object.setPrototypeOf()

Vererbung in JS unter Verwendung von Klassen.

```js
class Human {}
class SuperHero extends Human {}

const superMan = new SuperHero();
```

Wenn wir jedoch Unterklassen ohne `class` implementieren wollen, können wir Folgendes tun:

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

Die Ähnlichkeit zwischen klassischer Vererbung (mit Klassen) und pseudoklassischer Vererbung (mit dem `prototype`-Attribut des Konstruktors) wie oben beschrieben wird in [Vererbungsketten](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain#building_longer_inheritance_chains) erwähnt.

Da die [`prototype`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype)-Eigenschaft von Funktionskonstruktoren beschreibbar ist, können Sie diese auf ein neues Objekt, das mit [`Object.create()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/create#classical_inheritance_with_object.create) erstellt wurde, neu zuweisen, um dieselbe Vererbungskette zu erreichen. Es gibt Einschränkungen, auf die Sie bei der Nutzung von `create()` achten sollten, wie das Wiedereinfügen der [`constructor`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor)-Eigenschaft.

Im folgenden Beispiel, das auch Klassen verwendet, wird `SuperHero` so erstellt, dass es von `Human` erbt, ohne `extends` zu verwenden, indem stattdessen `setPrototypeOf()` verwendet wird.

> [!WARNING]
> Es wird nicht empfohlen, `setPrototypeOf()` anstelle von `extends` zu verwenden, aufgrund von Leistungs- und Lesbarkeitsgründen.

```js
class Human {}
class SuperHero {}

// Set the instance properties
Object.setPrototypeOf(SuperHero.prototype, Human.prototype);

// Hook up the static properties
Object.setPrototypeOf(SuperHero, Human);

const superMan = new SuperHero();
```

Die Unterklassifizierung ohne `extends` wird in [ES-6 subclassing](https://hacks.mozilla.org/2015/08/es6-in-depth-subclassing/) erwähnt.

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
- [Vererbungsketten](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain#building_longer_inheritance_chains)
- [ES6 In Depth: Subclassing](https://hacks.mozilla.org/2015/08/es6-in-depth-subclassing/) auf hacks.mozilla.org (2015)
