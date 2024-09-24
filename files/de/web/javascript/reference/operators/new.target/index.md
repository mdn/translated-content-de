---
title: new.target
slug: Web/JavaScript/Reference/Operators/new.target
l10n:
  sourceCommit: 8cb0caef8175e1772f13ef7bc761f9616e2c5a4b
---

{{jsSidebar("Operators")}}

Die Metaeigenschaft **`new.target`** ermöglicht es Ihnen zu erkennen, ob eine Funktion oder ein Konstruktor unter Verwendung des [`new`](/de/docs/Web/JavaScript/Reference/Operators/new)-Operators aufgerufen wurde. In Konstruktoren und Funktionen, die mit dem [`new`](/de/docs/Web/JavaScript/Reference/Operators/new)-Operator aufgerufen werden, gibt `new.target` eine Referenz auf den Konstruktor oder die Funktion zurück, auf die `new` angewendet wurde. Bei normalen Funktionsaufrufen ist `new.target` {{jsxref("undefined")}}.

{{EmbedInteractiveExample("pages/js/expressions-newtarget.html")}}

## Syntax

```js-nolint
new.target
```

### Wert

`new.target` ist garantiert ein konstruierbarer Funktionswert oder `undefined`.

- In Klassenkonstruktoren bezieht es sich auf die Klasse, auf die `new` angewendet wurde, was eine Unterklasse des aktuellen Konstruktors sein kann, da Unterklassen transitiv den Konstruktor der Superklasse über [`super()`](/de/docs/Web/JavaScript/Reference/Operators/super) aufrufen.
- In gewöhnlichen Funktionen bezieht sich `new.target` auf die Funktion selbst, wenn die Funktion direkt mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert wird. Wird die Funktion ohne `new` aufgerufen, ist `new.target` {{jsxref("undefined")}}. Funktionen können als Basisklasse für [`extends`](/de/docs/Web/JavaScript/Reference/Classes/extends) verwendet werden, in diesem Fall kann `new.target` auf die Unterklasse verweisen.
- Wenn ein Konstruktor (Klasse oder Funktion) über {{jsxref("Reflect.construct()")}} aufgerufen wird, bezieht sich `new.target` auf den als `newTarget` übergebenen Wert (der standardmäßig `target` ist).
- In [Arrow-Funktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) wird `new.target` vom umgebenden Bereich geerbt. Wenn die Arrow-Funktion nicht innerhalb einer anderen Klasse oder Funktion definiert ist, die eine `new.target`-{{Glossary("binding")}} hat, wird ein Syntaxfehler ausgelöst.
- In [statischen Initialisierungsblöcken](/de/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks) ist `new.target` {{jsxref("undefined")}}.

## Beschreibung

Die Syntax von `new.target` besteht aus dem Schlüsselwort `new`, einem Punkt und dem Bezeichner `target`. Da `new` ein [reserviertes Wort](/de/docs/Web/JavaScript/Reference/Lexical_grammar#reserved_words) und kein Bezeichner ist, handelt es sich nicht um einen [Eigenschafts-Zugriff](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors), sondern um eine spezielle Ausdruckssyntax.

Die Metaeigenschaft `new.target` ist in allen Funktions-/Klassenkörpern verfügbar; die Verwendung von `new.target` außerhalb von Funktionen oder Klassen führt zu einem Syntaxfehler.

## Beispiele

### new\.target in Funktionsaufrufen

In normalen Funktionsaufrufen (im Gegensatz zu Konstruktorrufen) ist `new.target` {{jsxref("undefined")}}. Dies ermöglicht es Ihnen zu ermitteln, ob eine Funktion als Konstruktor mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen wurde.

```js
function Foo() {
  if (!new.target) {
    throw new Error("Foo() muss mit new aufgerufen werden");
  }
  console.log("Foo mit new instanziiert");
}

new Foo(); // Gibt "Foo mit new instanziiert" aus
Foo(); // Wirft "Foo() muss mit new aufgerufen werden"
```

### new\.target in Konstruktoren

In Klassenkonstruktoren bezieht sich `new.target` auf den Konstruktor, der direkt durch `new` aufgerufen wurde. Dies ist auch der Fall, wenn der Konstruktor in einer übergeordneten Klasse ist und von einem Kinderkonstruktor delegiert wurde. `new.target` zeigt auf die Klasse, auf die `new` angewendet wurde. Zum Beispiel wurde beim Initialisieren von `b` mit `new B()` der Name `B` ausgegeben; und im Fall von `a` wurde der Name der Klasse `A` ausgegeben.

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

const a = new A(); // Gibt "A" aus
const b = new B(); // Gibt "B" aus
```

### new\.target mit Reflect.construct()

Vor {{jsxref("Reflect.construct()")}} oder Klassen war es üblich, Vererbung zu implementieren, indem der Wert von [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) übergeben wurde und der Basiskonstruktor ihn mutierte.

```js example-bad
function Base() {
  this.name = "Base";
}

function Extended() {
  // Der einzige Weg, den Base()-Konstruktor an dem bestehende
  // `this`-Wert arbeiten zu lassen, anstatt an einem neuen Objekt,
  // das `new` erstellt.
  Base.call(this);
  this.otherProperty = "Extended";
}

Object.setPrototypeOf(Extended.prototype, Base.prototype);
Object.setPrototypeOf(Extended, Base);

console.log(new Extended()); // Extended { name: 'Base', otherProperty: 'Extended' }
```

Allerdings rufen {{jsxref("Function/call", "call()")}} und {{jsxref("Function/apply", "apply()")}} tatsächlich die Funktion _auf_, anstatt sie zu _konstruieren_, sodass `new.target` den Wert `undefined` hat. Das bedeutet, dass, wenn `Base()` prüft, ob es mit `new` konstruiert wird, ein Fehler ausgelöst wird oder es sich auf andere unerwartete Weise verhält. Zum Beispiel können Sie [`Map`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map/Map) auf diese Weise nicht erweitern, da der `Map()`-Konstruktor nicht ohne `new` aufgerufen werden kann.

Alle eingebauten Konstruktoren konstruieren direkt die gesamte Prototypkette der neuen Instanz, indem sie `new.target.prototype` lesen. Um sicherzustellen, dass (1) `Base` mit `new` konstruiert wird, und (2) `new.target` auf die Unterklasse anstelle von `Base` selbst zeigt, müssen wir {{jsxref("Reflect.construct()")}} verwenden.

```js
function BetterMap(entries) {
  // Den Basis-Klassenkonstruktor aufrufen, aber `new.target` auf die Unterklasse setzen,
  // damit die erstellte Instanz die korrekte Prototypkette hat.
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
> Tatsächlich ist es aufgrund des Fehlens von `Reflect.construct()` nicht möglich, eingebaute Objekte (wie das Subclassing von [`Error`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error#custom_error_types)) bei der Transpilierung zu Code vor ES6 richtig zu unterklassen.

Wenn Sie jedoch ES6-Code schreiben, sollten Sie stattdessen Klassen und `extends` verwenden, da dies lesbarer und weniger fehleranfällig ist.

```js
class BetterMap extends Map {
  // Der Konstruktor wird weggelassen, da es sich nur um den Standard handelt

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
