---
title: Object.setPrototypeOf()
short-title: setPrototypeOf()
slug: Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die statische Methode **`Object.setPrototypeOf()`** legt das Prototyp (d.h. die interne Eigenschaft `[[Prototype]]`) eines angegebenen Objekts auf ein anderes Objekt oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) fest.

> [!WARNING]
> Das Ändern des `[[Prototype]]` eines Objekts ist, aufgrund der Art und Weise, wie moderne JavaScript-Engines den Zugriff auf Eigenschaften optimieren, derzeit eine sehr langsame Operation in jedem Browser und JavaScript-Engine. Darüber hinaus sind die Auswirkungen der Änderung der Vererbung subtil und weitreichend und beschränken sich nicht auf die Zeit, die in der Anweisung `Object.setPrototypeOf(...)` verbracht wird, sondern können sich auf **_jeden_** Code erstrecken, der auf ein Objekt zugreift, dessen `[[Prototype]]` geändert wurde. Weitere Informationen finden Sie in den [Grundlagen der JavaScript-Engine: Optimierung von Prototypen](https://mathiasbynens.be/notes/prototypes).
>
> Da dieses Merkmal Teil der Sprache ist, liegt es weiterhin in der Verantwortung der Engine-Entwickler, dieses Merkmal leistungsfähig zu implementieren (idealerweise). Bis die Engine-Entwickler dieses Problem beheben, sollten Sie, wenn Sie sich um die Leistung sorgen, vermeiden, das `[[Prototype]]` eines Objekts festzulegen. Erstellen Sie stattdessen ein neues Objekt mit dem gewünschten `[[Prototype]]` unter Verwendung von {{jsxref("Object.create()")}}.

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
  - : Das neue Prototyp des Objekts (ein Objekt oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null)).

### Rückgabewert

Das angegebene Objekt.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Der `obj`-Parameter ist `undefined` oder `null`.
    - Der `obj`-Parameter ist [nicht erweiterbar](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible) oder es ist ein [unveränderliches Prototyp-Exot-Objekt](https://tc39.es/ecma262/multipage/ordinary-and-exotic-objects-behaviours.html#sec-immutable-prototype-exotic-objects), wie `Object.prototype` oder [`window`](/de/docs/Web/API/Window). Der Fehler wird jedoch nicht ausgelöst, wenn das neue Prototyp den gleichen Wert wie das ursprüngliche Prototyp von `obj` hat.
    - Der `prototype`-Parameter ist kein Objekt oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null).

## Beschreibung

`Object.setPrototypeOf()` wird allgemein als die richtige Methode angesehen, um den Prototyp eines Objekts festzulegen. Sie sollten es immer gegenüber dem veralteten [`Object.prototype.__proto__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/proto) Accessor verwenden.

Wenn der `obj`-Parameter kein Objekt ist (z.B. Zahl, Zeichenfolge usw.), macht diese Methode nichts — ohne es in ein Objekt umzuwandeln oder zu versuchen, seinen Prototyp festzulegen — und gibt `obj` direkt als primitiven Wert zurück. Wenn `prototype` denselben Wert hat wie das Prototyp von `obj`, wird `obj` direkt zurückgegeben, ohne ein `TypeError` zu verursachen, selbst wenn `obj` ein unveränderliches Prototyp hat.

Aus Sicherheitsgründen gibt es bestimmte eingebaute Objekte, die dafür ausgelegt sind, ein _unveränderliches Prototyp_ zu haben. Dies verhindert Angriffe zur Prototypverschmutzung, insbesondere [proxy-bezogene Angriffe](https://github.com/tc39/ecma262/issues/272). Die Kernsprache spezifiziert nur `Object.prototype` als ein unveränderliches Prototyp-Exot-Objekt, dessen Prototyp immer `null` ist. In Browsern sind [`window`](/de/docs/Web/API/Window) und [`location`](/de/docs/Web/API/Window/location) zwei weitere sehr häufige Beispiele.

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

Die Ähnlichkeit zwischen klassischer Vererbung (mit Klassen) und pseudoklassischer Vererbung (mit dem `prototype`-Eigentum von Konstruktoren) wird im [Vererbungsketten](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain#building_longer_inheritance_chains) erwähnt.

Da das [`prototype`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype)-Eigentum von Funktionskonstruktoren beschreibbar ist, können Sie es einem neuen Objekt neu zuweisen, das mit [`Object.create()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/create#classical_inheritance_with_object.create) erstellt wurde, um dieselbe Vererbungskette zu erreichen. Es gibt Fallstricke, auf die Sie achten sollten, wenn Sie `create()` verwenden, wie z.B. sich daran zu erinnern, die [`constructor`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor)-Eigenschaft wieder hinzuzufügen.

Im Beispiel unten, das auch Klassen verwendet, wird `SuperHero` von `Human` erben gelassen, ohne `extends` zu verwenden, indem stattdessen `setPrototypeOf()` verwendet wird.

> [!WARNING]
> Es wird nicht empfohlen, `setPrototypeOf()` anstelle von `extends` aus Leistungs- und Lesbarkeitsgründen zu verwenden.

```js
class Human {}
class SuperHero {}

// Set the instance properties
Object.setPrototypeOf(SuperHero.prototype, Human.prototype);

// Hook up the static properties
Object.setPrototypeOf(SuperHero, Human);

const superMan = new SuperHero();
```

Unterklassenbildung ohne `extends` wird im [ES-6 Subclassing](https://hacks.mozilla.org/2015/08/es6-in-depth-subclassing/) erwähnt.

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
