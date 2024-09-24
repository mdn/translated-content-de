---
title: Object.setPrototypeOf()
slug: Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die statische Methode **`Object.setPrototypeOf()`** setzt das Prototype (d.h. die interne `[[Prototype]]`-Eigenschaft) eines angegebenen Objekts auf ein anderes Objekt oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null).

> [!WARNING]
> Das Ändern des `[[Prototype]]` eines Objekts ist aufgrund der Art und Weise, wie moderne JavaScript-Engines den Zugriff auf Eigenschaften optimieren, derzeit eine sehr langsame Operation in jedem Browser und JavaScript-Engine. Darüber hinaus sind die Auswirkungen einer Änderung der Vererbung subtil und weitreichend und beschränken sich nicht nur auf die Zeit, die für die Anweisung `Object.setPrototypeOf(...)` aufgewendet wird, sondern können sich auf **_jeden_** Code erstrecken, der Zugriff auf ein beliebiges Objekt hat, dessen `[[Prototype]]` geändert wurde. Weitere Informationen finden Sie in [JavaScript engine fundamentals: optimizing prototypes](https://mathiasbynens.be/notes/prototypes).
>
> Da diese Funktion ein Teil der Sprache ist, liegt es weiterhin in der Verantwortung der Engine-Entwickler, diese Funktion performant zu implementieren (idealerweise). Bis Engine-Entwickler dieses Problem beheben, sollten Sie, wenn Sie sich um die Leistung sorgen, vermeiden, das `[[Prototype]]` eines Objekts zu setzen. Stattdessen sollten Sie ein neues Objekt mit dem gewünschten `[[Prototype]]` erstellen, indem Sie {{jsxref("Object.create()")}} verwenden.

{{EmbedInteractiveExample("pages/js/object-setprototypeof.html")}}

## Syntax

```js-nolint
Object.setPrototypeOf(obj, prototype)
```

### Parameter

- `obj`
  - : Das Objekt, dessen Prototype gesetzt werden soll.
- `prototype`
  - : Das neue Prototype des Objekts (ein Objekt oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null)).

### Rückgabewert

Das angegebene Objekt.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Der Parameter `obj` ist `undefined` oder `null`.
    - Der Parameter `obj` ist [nicht erweiterbar](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible) oder ein [unveränderliches Prototype exotic Object](https://tc39.es/ecma262/multipage/ordinary-and-exotic-objects-behaviours.html#sec-immutable-prototype-exotic-objects), wie `Object.prototype` oder [`window`](/de/docs/Web/API/Window). Der Fehler wird jedoch nicht ausgelöst, wenn das neue Prototype den gleichen Wert wie das ursprüngliche Prototype von `obj` hat.
    - Der Parameter `prototype` ist kein Objekt oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null).

## Beschreibung

`Object.setPrototypeOf()` wird allgemein als die richtige Methode angesehen, um das Prototype eines Objekts zu setzen. Sie sollten es immer dem veralteten Zugriffsmechanismus [`Object.prototype.__proto__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/proto) vorziehen.

Wenn der Parameter `obj` kein Objekt ist (z.B. Zahl, String, etc.), macht diese Methode nichts — ohne es in ein Objekt umzuwandeln oder zu versuchen, sein Prototype zu setzen — und gibt direkt `obj` als primitiven Wert zurück. Wenn `prototype` den gleichen Wert wie das Prototype von `obj` hat, dann wird `obj` direkt zurückgegeben, ohne einen `TypeError` zu verursachen, selbst wenn `obj` ein unveränderliches Prototype hat.

Aus Sicherheitsgründen gibt es bestimmte eingebaute Objekte, die ein _unveränderliches Prototype_ haben sollen. Dies verhindert Angriffe durch Prototypen-Verschmutzung, insbesondere [proxy-bezogene](https://github.com/tc39/ecma262/issues/272) Angriffe. Die Kernsprache spezifiziert nur `Object.prototype` als ein unveränderliches Prototype exotic Object, dessen Prototype immer `null` ist. In Browsern sind [`window`](/de/docs/Web/API/Window) und [`location`](/de/docs/Web/API/Window/location) zwei weitere häufige Beispiele.

```js
Object.isExtensible(Object.prototype); // true; Sie können weitere Eigenschaften hinzufügen
Object.setPrototypeOf(Object.prototype, {}); // TypeError: Unveränderliches Protoyp-Objekt '#<Object>' kann sein Prototype nicht gesetzt haben
Object.setPrototypeOf(Object.prototype, null); // Kein Fehler; das Prototype von `Object.prototype` ist bereits `null`
```

## Beispiele

### Pseudoklassische Vererbung mithilfe von Object.setPrototypeOf()

Vererbung in JS unter Verwendung von Klassen.

```js
class Human {}
class SuperHero extends Human {}

const superMan = new SuperHero();
```

Wenn wir jedoch Unterklassen ohne Verwendung von `class` implementieren möchten, können wir Folgendes tun:

```js
function Human(name, level) {
  this.name = name;
  this.level = level;
}

function SuperHero(name, level) {
  Human.call(this, name, level);
}

Object.setPrototypeOf(SuperHero.prototype, Human.prototype);

// Setzen Sie das `[[Prototype]]` von `SuperHero.prototype`
// auf `Human.prototype`
// Um die prototypische Vererbungskette zu setzen

Human.prototype.speak = function () {
  return `${this.name} sagt hallo.`;
};

SuperHero.prototype.fly = function () {
  return `${this.name} fliegt.`;
};

const superMan = new SuperHero("Clark Kent", 1);

console.log(superMan.fly());
console.log(superMan.speak());
```

Die Ähnlichkeit zwischen klassischer Vererbung (mit Klassen) und pseudoklassischer Vererbung (mit dem `prototype`-Eigentum der Konstruktoren) wie oben beschrieben, wird in [Vererbungsketten](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain#building_longer_inheritance_chains) erwähnt.

Da das [`prototype`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype)-Eigentum von Funktionskonstruktoren schreibbar ist, können Sie es einer neuen Objektinstanz zuweisen, die mit [`Object.create()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/create#classical_inheritance_with_object.create) erstellt wurde, um dieselbe Vererbungskette ebenfalls zu erreichen. Es gibt jedoch einige Fallstricke zu beachten, wenn Sie `create()` verwenden, wie z.B. die Wiederhinzufügung des [`constructor`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor)-Eigentums.

Im folgenden Beispiel, das auch Klassen verwendet, wird `SuperHero` durch den Einsatz von `setPrototypeOf()` zum Erben von `Human` gemacht, ohne `extends` zu verwenden.

> [!WARNING]
> Es ist nicht ratsam, `setPrototypeOf()` anstelle von `extends` zu verwenden, aus Leistungs- und Lesbarkeitsgründen.

```js
class Human {}
class SuperHero {}

// Setzen Sie die Instanzeigenschaften
Object.setPrototypeOf(SuperHero.prototype, Human.prototype);

// Verbinden Sie die statischen Eigenschaften
Object.setPrototypeOf(SuperHero, Human);

const superMan = new SuperHero();
```

Die Unterklassenbildung ohne `extends` wird in [ES-6 subclassing](https://hacks.mozilla.org/2015/08/es6-in-depth-subclassing/) erwähnt.

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
- [ES6 In Depth: Subclassing](https://hacks.mozilla.org/2015/08/es6-in-depth-subclassing/) on hacks.mozilla.org (2015)
