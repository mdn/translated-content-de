---
title: new.target
slug: Web/JavaScript/Reference/Operators/new.target
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{jsSidebar("Operators")}}

Die **`new.target`** Meta-Eigenschaft ermöglicht es Ihnen zu erkennen, ob eine Funktion oder ein Konstruktor mit dem [`new`](/de/docs/Web/JavaScript/Reference/Operators/new)-Operator aufgerufen wurde. In Konstruktoren und Funktionen, die mit dem [`new`](/de/docs/Web/JavaScript/Reference/Operators/new)-Operator aufgerufen werden, gibt `new.target` eine Referenz auf den Konstruktor oder die Funktion zurück, auf die `new` angewendet wurde. Bei normalen Funktionsaufrufen ist `new.target` {{jsxref("undefined")}}.

{{InteractiveExample("JavaScript Demo: Expressions - new.target")}}

```js interactive-example
function Foo() {
  if (!new.target) {
    throw new TypeError("calling Foo constructor without new is invalid");
  }
}

try {
  Foo();
} catch (e) {
  console.log(e);
  // Expected output: TypeError: calling Foo constructor without new is invalid
}
```

## Syntax

```js-nolint
new.target
```

### Wert

`new.target` ist garantiert entweder eine konstruierbare Funktionswert oder `undefined`.

- In Klassenkonstruktoren bezieht es sich auf die Klasse, auf die `new` angewendet wurde. Dies kann auch eine Unterklasse des aktuellen Konstruktors sein, da Unterklassen den Konstruktor der Oberklasse transitiv über [`super()`](/de/docs/Web/JavaScript/Reference/Operators/super) aufrufen.
- In normalen Funktionen bezieht sich `new.target` auf die Funktion selbst, wenn die Funktion direkt mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert wurde. Wird die Funktion ohne `new` aufgerufen, ist `new.target` {{jsxref("undefined")}}. Funktionen können als Basisklasse für [`extends`](/de/docs/Web/JavaScript/Reference/Classes/extends) verwendet werden. In diesem Fall kann sich `new.target` auf die Unterklasse beziehen.
- Wenn ein Konstruktor (Klasse oder Funktion) über {{jsxref("Reflect.construct()")}} aufgerufen wird, bezieht sich `new.target` auf den Wert, der als `newTarget` übergeben wurde (der standardmäßig auf `target` gesetzt ist).
- In [arrow functions](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) wird `new.target` aus dem umgebenden Geltungsbereich geerbt. Wenn die Pfeilfunktion nicht innerhalb einer anderen Klasse oder Funktion definiert ist, die ein `new.target` {{Glossary("binding", "Binding")}} hat, wird ein Syntaxfehler ausgelöst.
- In [statischen Initialisierungsblöcken](/de/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks) ist `new.target` {{jsxref("undefined")}}.

## Beschreibung

Die `new.target`-Syntax besteht aus dem Schlüsselwort `new`, einem Punkt und dem Bezeichner `target`. Da `new` ein [reserviertes Wort](/de/docs/Web/JavaScript/Reference/Lexical_grammar#reserved_words) ist und kein Bezeichner, handelt es sich dabei nicht um einen [Eigenschafts-Accessor](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors), sondern um eine spezielle Ausdruckssyntax.

Die `new.target` Meta-Eigenschaft ist in allen Funktions- oder Klassenkörpern verfügbar. Eine Verwendung von `new.target` außerhalb von Funktionen oder Klassen führt zu einem Syntaxfehler.

## Beispiele

### new\.target in Funktionsaufrufen

In normalen Funktionsaufrufen (im Gegensatz zu Konstruktorausrufen) ist `new.target` {{jsxref("undefined")}}. Dies ermöglicht es Ihnen, zu erkennen, ob eine Funktion mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) als Konstruktor aufgerufen wurde.

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

In Klassenkonstruktoren bezieht sich `new.target` auf den Konstruktor, der direkt von `new` aufgerufen wurde. Dies gilt auch, wenn der Konstruktor in einer Oberklasse liegt und von einem Unterklasse-Konstruktor delegiert wurde. `new.target` zeigt auf die Klasse, auf die `new` angewendet wurde. Wenn beispielsweise `b` mit `new B()` initialisiert wurde, wurde der Name `B` ausgegeben; und ähnliches gilt für `a` mit der Klasse `A`.

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

Vor {{jsxref("Reflect.construct()")}} oder Klassen war es üblich, Vererbung zu implementieren, indem der Wert von [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) übergeben wurde und der Basiskonstruktor diesen veränderte.

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

Allerdings rufen {{jsxref("Function/call", "call()")}} und {{jsxref("Function/apply", "apply()")}} die Funktion tatsächlich _auf_, anstatt sie zu _konstruktieren_, sodass `new.target` den Wert `undefined` hat. Das bedeutet, dass, wenn `Base()` prüft, ob es mit `new` konstruiert wurde, ein Fehler ausgelöst wird oder es sich auf andere unerwartete Weise verhält. Beispielsweise können Sie [`Map`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map/Map) auf diese Weise nicht erweitern, da der `Map()`-Konstruktor nicht ohne `new` aufgerufen werden kann.

Alle eingebauten Konstruktoren konstruieren direkt die gesamte Prototypenkette der neuen Instanz durch das Auslesen von `new.target.prototype`. Um sicherzustellen, dass (1) `Base` mit `new` konstruiert wird und (2) `new.target` auf die Unterklasse statt auf `Base` selbst zeigt, müssen wir {{jsxref("Reflect.construct()")}} verwenden.

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
> Tatsächlich ist es aufgrund des Fehlens von `Reflect.construct()` nicht möglich, eingebettete Typen (wie das [Unterklassen von Error](/de/docs/Web/JavaScript/Reference/Global_Objects/Error#custom_error_types)) korrekt zu unterklassen, wenn man auf vor-ES6-Code zurückgreift.

Wenn Sie jedoch ES6-Code schreiben, verwenden Sie lieber Klassen und `extends`, da dies lesbarer und weniger fehleranfällig ist.

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
