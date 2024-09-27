---
title: new.target
slug: Web/JavaScript/Reference/Operators/new.target
l10n:
  sourceCommit: 8cb0caef8175e1772f13ef7bc761f9616e2c5a4b
---

{{jsSidebar("Operators")}}

Die **`new.target`** Meta-Eigenschaft ermöglicht es Ihnen, zu erkennen, ob eine Funktion oder ein Konstruktor mit dem [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) Operator aufgerufen wurde. In Konstruktoren und Funktionen, die mit dem [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) Operator aufgerufen werden, gibt `new.target` eine Referenz auf den Konstruktor oder die Funktion zurück, auf die `new` angewendet wurde. Bei normalen Funktionsaufrufen ist `new.target` {{jsxref("undefined")}}.

{{EmbedInteractiveExample("pages/js/expressions-newtarget.html")}}

## Syntax

```js-nolint
new.target
```

### Wert

`new.target` ist garantiert entweder ein konstruierbarer Funktionswert oder `undefined`.

- In Klassenkonstruktoren bezieht es sich auf die Klasse, auf die `new` angewendet wurde, was eine Unterklasse des aktuellen Konstruktors sein kann, da Unterklassen transitiv den Konstruktor der Oberklasse über [`super()`](/de/docs/Web/JavaScript/Reference/Operators/super) aufrufen.
- In gewöhnlichen Funktionen, wenn die Funktion direkt mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert wird, bezieht sich `new.target` auf die Funktion selbst. Wenn die Funktion ohne `new` aufgerufen wird, ist `new.target` {{jsxref("undefined")}}. Funktionen können als Basisklasse für [`extends`](/de/docs/Web/JavaScript/Reference/Classes/extends) verwendet werden, in diesem Fall kann sich `new.target` auf die Unterklasse beziehen.
- Wenn ein Konstruktor (Klasse oder Funktion) über {{jsxref("Reflect.construct()")}} aufgerufen wird, bezieht sich `new.target` auf den Wert, der als `newTarget` übergeben wird (was standardmäßig `target` ist).
- In [Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) wird `new.target` vom umgebenden Kontext vererbt. Wenn die Pfeilfunktion nicht innerhalb einer anderen Klasse oder Funktion definiert ist, die eine `new.target` [Bindung](/de/docs/Glossary/binding) hat, wird ein Syntaxfehler ausgelöst.
- In [statischen Initialisierungsblöcken](/de/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks) ist `new.target` {{jsxref("undefined")}}.

## Beschreibung

Die `new.target` Syntax besteht aus dem Schlüsselwort `new`, einem Punkt und dem Bezeichner `target`. Da `new` ein [reserviertes Wort](/de/docs/Web/JavaScript/Reference/Lexical_grammar#reserved_words) und kein Bezeichner ist, handelt es sich hierbei nicht um einen [Eigenschaftenzugriff](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors), sondern um eine spezielle Ausdruckssyntax.

Die `new.target` Meta-Eigenschaft ist in allen Funktions-/Klassenkörpern verfügbar; die Verwendung von `new.target` außerhalb von Funktionen oder Klassen führt zu einem Syntaxfehler.

## Beispiele

### new\.target in Funktionsaufrufen

Bei normalen Funktionsaufrufen (im Gegensatz zu Aufrufen von Konstruktionsfunktionen) ist `new.target` {{jsxref("undefined")}}. Dies ermöglicht Ihnen zu erkennen, ob eine Funktion mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) als Konstruktor aufgerufen wurde.

```js
function Foo() {
  if (!new.target) {
    throw new Error("Foo() must be called with new");
  }
  console.log("Foo instantiated with new");
}

new Foo(); // Logs "Foo instantiated with new"
Foo(); // Throws "Foo() must be called with new"
```

### new\.target in Konstruktoren

In Klassenkonstruktoren bezieht sich `new.target` auf den Konstruktor, der direkt mit `new` aufgerufen wurde. Dies gilt auch, wenn der Konstruktor sich in einer übergeordneten Klasse befindet und von einem Kindkonstruktor delegiert wurde. `new.target` zeigt auf die Klasse, auf die `new` angewendet wurde. Wenn `b` zum Beispiel mit `new B()` initialisiert wurde, wurde der Name von `B` ausgegeben; und ähnlich im Fall von `a`, wurde der Name der Klasse `A` ausgegeben.

```js
class A {
  constructor() {
    console.log(new.target.name);
  }
}

class B extends A {
  constructor() {
    super();
  }
}

const a = new A(); // Logs "A"
const b = new B(); // Logs "B"
```

### new\.target mit Reflect.construct()

Vor {{jsxref("Reflect.construct()")}} oder Klassen war es üblich, Vererbung durch Übergeben des Wertes von [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) zu implementieren und den Basiskonstruktor zu ändern.

```js example-bad
function Base() {
  this.name = "Base";
}

function Extended() {
  // Only way to make the Base() constructor work on the existing
  // `this` value instead of a new object that `new` creates.
  Base.call(this);
  this.otherProperty = "Extended";
}

Object.setPrototypeOf(Extended.prototype, Base.prototype);
Object.setPrototypeOf(Extended, Base);

console.log(new Extended()); // Extended { name: 'Base', otherProperty: 'Extended' }
```

Allerdings rufen {{jsxref("Function/call", "call()")}} und {{jsxref("Function/apply", "apply()")}} die Funktion tatsächlich _auf_ anstatt sie zu _konstruieren_, sodass `new.target` den Wert `undefined` hat. Das bedeutet, dass, wenn `Base()` prüft, ob es mit `new` konstruiert wurde, ein Fehler ausgelöst wird, oder es sich auf andere unerwartete Weisen verhalten kann. Zum Beispiel kann man `Map` auf diese Weise nicht erweitern, da der `Map()` Konstruktor nicht ohne `new` aufgerufen werden kann.

Alle eingebauten Konstruktoren konstruieren direkt die gesamte Prototypenkette der neuen Instanz, indem sie `new.target.prototype` lesen. Um sicherzustellen, dass (1) `Base` mit `new` konstruiert wird und (2) `new.target` auf die Unterklasse anstatt auf `Base` selbst zeigt, müssen wir {{jsxref("Reflect.construct()")}} verwenden.

```js
function BetterMap(entries) {
  // Call the base class constructor, but setting `new.target` to the subclass,
  // so that the instance created has the correct prototype chain.
  return Reflect.construct(Map, [entries], BetterMap);
}

BetterMap.prototype.upsert = function (key, actions) {
  if (this.has(key)) {
    this.set(key, actions.update(this.get(key)));
  } else {
    this.set(key, actions.insert());
  }
};

Object.setPrototypeOf(BetterMap.prototype, Map.prototype);
Object.setPrototypeOf(BetterMap, Map);

const map = new BetterMap([["a", 1]]);
map.upsert("a", {
  update: (value) => value + 1,
  insert: () => 1,
});
console.log(map.get("a")); // 2
```

> [!NOTE]
> In der Tat ist es aufgrund des Fehlens von `Reflect.construct()` nicht möglich, eingebaute Objekte (wie das Subclassing von [`Error`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error#custom_error_types)) korrekt zu unterklassen, wenn in vor-ES6-Code transpiert wird.

Wenn Sie jedoch ES6-Code schreiben, sollten Sie stattdessen Klassen und `extends` verwenden, da dies lesbarer und weniger fehleranfällig ist.

```js
class BetterMap extends Map {
  // The constructor is omitted because it's just the default one

  upsert(key, actions) {
    if (this.has(key)) {
      this.set(key, actions.update(this.get(key)));
    } else {
      this.set(key, actions.insert());
    }
  }
}

const map = new BetterMap([["a", 1]]);
map.upsert("a", {
  update: (value) => value + 1,
  insert: () => 1,
});
console.log(map.get("a")); // 2
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Funktionen](/de/docs/Web/JavaScript/Reference/Functions)
- [Klassen](/de/docs/Web/JavaScript/Reference/Classes)
- [`new`](/de/docs/Web/JavaScript/Reference/Operators/new)
- [`this`](/de/docs/Web/JavaScript/Reference/Operators/this)
