---
title: new.target
slug: Web/JavaScript/Reference/Operators/new.target
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{jsSidebar("Operators")}}

Die Meta-Eigenschaft **`new.target`** ermöglicht es Ihnen zu erkennen, ob eine Funktion oder ein Konstruktor unter Verwendung des [`new`](/de/docs/Web/JavaScript/Reference/Operators/new)-Operators aufgerufen wurde. In Konstruktoren und Funktionen, die mit dem [`new`](/de/docs/Web/JavaScript/Reference/Operators/new)-Operator aufgerufen werden, gibt `new.target` einen Verweis auf den Konstruktor oder die Funktion zurück, auf die `new` angewendet wurde. In normalen Funktionsaufrufen ist `new.target` {{jsxref("undefined")}}.

{{InteractiveExample("JavaScript Demo: new.target")}}

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

`new.target` ist garantiert entweder ein konstruierbarer Funktionswert oder `undefined`.

- In Klassenkonstruktoren verweist es auf die Klasse, auf die `new` angewendet wurde, was eine Unterklasse des aktuellen Konstruktors sein kann, da Unterklassen transitiv den Konstruktor der Oberklasse über [`super()`](/de/docs/Web/JavaScript/Reference/Operators/super) aufrufen.
- In gewöhnlichen Funktionen, wenn die Funktion direkt mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert wird, verweist `new.target` auf die Funktion selbst. Wenn die Funktion ohne `new` aufgerufen wird, ist `new.target` {{jsxref("undefined")}}. Funktionen können als Basisklasse für [`extends`](/de/docs/Web/JavaScript/Reference/Classes/extends) verwendet werden, in diesem Fall kann `new.target` auf die Unterklasse verweisen.
- Wenn ein Konstruktor (Klasse oder Funktion) über {{jsxref("Reflect.construct()")}} aufgerufen wird, dann verweist `new.target` auf den Wert, der als `newTarget` übergeben wurde (der standardmäßig `target` ist).
- In [Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) wird `new.target` aus dem umgebenden Gültigkeitsbereich übernommen. Wenn die Pfeilfunktion nicht innerhalb einer anderen Klasse oder Funktion definiert ist, die eine `new.target` {{Glossary("binding", "Bindung")}} hat, wird ein Syntaxfehler ausgelöst.
- In [statischen Initialisierungsblöcken](/de/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks) ist `new.target` {{jsxref("undefined")}}.

## Beschreibung

Die Syntax `new.target` besteht aus dem Schlüsselwort `new`, einem Punkt und dem Bezeichner `target`. Da `new` ein [reserviertes Wort](/de/docs/Web/JavaScript/Reference/Lexical_grammar#reserved_words) ist, kein Bezeichner, handelt es sich nicht um einen [Property-Accessor](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors), sondern um eine spezielle Ausdruckssyntax.

Die Meta-Eigenschaft `new.target` ist in allen Funktions-/Klassenkörpern verfügbar; die Verwendung von `new.target` außerhalb von Funktionen oder Klassen führt zu einem Syntaxfehler.

## Beispiele

### new\.target in Funktionsaufrufen

In normalen Funktionsaufrufen (im Gegensatz zu Konstruktorfunktionsaufrufen) ist `new.target` {{jsxref("undefined")}}. Dies ermöglicht es Ihnen zu erkennen, ob eine Funktion mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) als Konstruktor aufgerufen wurde.

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

In Klassenkonstruktoren verweist `new.target` auf den Konstruktor, der direkt durch `new` aufgerufen wurde. Dies gilt auch, wenn der Konstruktor in einer Elternklasse ist und von einem Kindkonstruktor delegiert wurde. `new.target` zeigt auf die Klasse, auf die `new` angewandt wurde. Zum Beispiel, als `b` mit `new B()` initialisiert wurde, wurde der Name von `B` ausgegeben; und ähnlich, im Fall von `a`, wurde der Name der Klasse `A` ausgegeben.

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

Vor {{jsxref("Reflect.construct()")}} oder Klassen war es üblich, Vererbung zu implementieren, indem der Wert von [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) übergeben wurde, und der Basiskonstruktor ihn entsprechend modifiziert.

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

Allerdings rufen {{jsxref("Function/call", "call()")}} und {{jsxref("Function/apply", "apply()")}} die Funktion tatsächlich _auf_, anstatt sie zu _konstruieren_, daher hat `new.target` den Wert `undefined`. Dies bedeutet, dass wenn `Base()` überprüft, ob es mit `new` konstruiert wurde, ein Fehler ausgelöst wird oder es in anderer unerwarteter Weise verhalten kann. Zum Beispiel können Sie [`Map`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map/Map) auf diese Weise nicht erweitern, da der `Map()`-Konstruktor nicht ohne `new` aufgerufen werden kann.

Alle eingebauten Konstruktoren konstruieren direkt die gesamte Prototypen-Kette der neuen Instanz, indem sie `new.target.prototype` lesen. Um sicherzustellen, dass (1) `Base` mit `new` konstruiert wird und (2) `new.target` auf die Unterklasse statt auf `Base` selbst zeigt, müssen wir {{jsxref("Reflect.construct()")}} verwenden.

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
> In der Tat, aufgrund des Fehlens von `Reflect.construct()`, ist es nicht möglich, eingebauten Typen (wie [`Error`-Unterklasse](/de/docs/Web/JavaScript/Reference/Global_Objects/Error#custom_error_types)) korrekt zu erweitern, wenn auf vor-ES6-Code transpilieriert wird.

Wenn Sie jedoch ES6-Code schreiben, bevorzugen Sie die Verwendung von Klassen und `extends`, da dies lesbarer und weniger fehleranfällig ist.

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
