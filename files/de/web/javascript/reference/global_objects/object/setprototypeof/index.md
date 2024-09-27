---
title: Object.setPrototypeOf()
slug: Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die statische Methode **`Object.setPrototypeOf()`** setzt das Prototyp-Objekt (d.h. die interne `[[Prototype]]`-Eigenschaft) eines angegebenen Objekts auf ein anderes Objekt oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null).

> [!WARNING]
> Das Ändern des `[[Prototype]]` eines Objekts ist, aufgrund der Art und Weise, wie moderne JavaScript-Engines den Zugriff auf Eigenschaften optimieren, derzeit eine sehr langsame Operation in jedem Browser und jeder JavaScript-Engine. Darüber hinaus sind die Auswirkungen der Veränderung der Vererbung subtil und weitreichend und beschränken sich nicht nur auf die Zeit, die in der `Object.setPrototypeOf(...)`-Anweisung verbracht wird, sondern können sich auf **_jeden_** Code ausdehnen, der auf ein Objekt zugreift, dessen `[[Prototype]]` geändert wurde. Sie können mehr in [JavaScript-Engine-Grundlagen: Optimierung von Prototypen](https://mathiasbynens.be/notes/prototypes) lesen.
>
> Da dieses Feature Teil der Sprache ist, liegt es dennoch in der Verantwortung der Engine-Entwickler, dieses Feature performant zu implementieren (idealerweise). Solange die Engine-Entwickler dieses Problem nicht angehen, sollten Sie, wenn Sie sich um die Leistung sorgen, das Setzen des `[[Prototype]]` eines Objekts vermeiden. Stattdessen sollten Sie ein neues Objekt mit dem gewünschten `[[Prototype]]` mithilfe von {{jsxref("Object.create()")}} erzeugen.

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
    - Der Parameter `obj` ist `undefined` oder `null`.
    - Der Parameter `obj` ist [nicht erweiterbar](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible) oder ein [unveränderliches prototypisches exotisches Objekt](https://tc39.es/ecma262/multipage/ordinary-and-exotic-objects-behaviours.html#sec-immutable-prototype-exotic-objects), wie `Object.prototype` oder [`window`](/de/docs/Web/API/Window). Allerdings wird der Fehler nicht ausgelöst, wenn der neue Prototyp denselben Wert wie der ursprüngliche Prototyp von `obj` hat.
    - Der Parameter `prototype` ist kein Objekt oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null).

## Beschreibung

`Object.setPrototypeOf()` gilt allgemein als der korrekte Weg, den Prototyp eines Objekts zu setzen. Sie sollten es immer dem veralteten [`Object.prototype.__proto__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/proto)-Zugriff vorziehen.

Wenn der `obj`-Parameter kein Objekt ist (z.B. Zahl, String etc.), tut diese Methode nichts – ohne es zu einem Objekt zu zwingen oder zu versuchen, seinen Prototyp zu setzen – und gibt `obj` direkt als primitiven Wert zurück. Wenn `prototype` denselben Wert wie der Prototyp von `obj` hat, wird `obj` direkt zurückgegeben, ohne dass ein `TypeError` verursacht wird, selbst wenn `obj` einen unveränderlichen Prototyp hat.

Aus Sicherheitsgründen gibt es bestimmte eingebaute Objekte, die so konzipiert sind, dass sie einen _unveränderlichen Prototyp_ haben. Dies verhindert Angriffe auf Prototyp-Verschmutzungen, besonders [proxy-bezogene](https://github.com/tc39/ecma262/issues/272). Die zentrale Sprache spezifiziert nur `Object.prototype` als ein unveränderliches prototypisches exotisches Objekt, dessen Prototyp immer `null` ist. In Browsern sind [`window`](/de/docs/Web/API/Window) und [`location`](/de/docs/Web/API/Window/location) zwei weitere sehr häufige Beispiele.

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

Wenn wir jedoch Unterklassen ohne `class` implementieren möchten, können wir Folgendes tun:

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

Die Ähnlichkeit zwischen klassischer Vererbung (mit Klassen) und pseudoklassischer Vererbung (mit `prototype`-Eigenschaft von Konstruktoren) wie oben beschrieben, wird in [Vererbungsketten](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain#building_longer_inheritance_chains) erwähnt.

Da die [`prototype`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype)-Eigenschaft von Funktionskonstruktoren beschreibbar ist, können Sie sie neu zu einem Objekt zuweisen, das mit [`Object.create()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/create#classical_inheritance_with_object.create) erstellt wurde, um die gleiche Vererbungskette zu erreichen. Es gibt jedoch Fallstricke, die Sie bei der Verwendung von `create()` beachten sollten, wie zum Beispiel das erneute Hinzufügen der [`constructor`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor)-Eigenschaft.

Im folgenden Beispiel, das auch Klassen verwendet, wird `SuperHero` von `Human` erben, ohne `extends` zu verwenden, indem stattdessen `setPrototypeOf()` verwendet wird.

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

Die Unterklassifizierung ohne `extends` wird in [ES-6-Unterklassifizierung](https://hacks.mozilla.org/2015/08/es6-in-depth-subclassing/) erwähnt.

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
