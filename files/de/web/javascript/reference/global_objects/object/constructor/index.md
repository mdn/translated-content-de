---
title: Object.prototype.constructor
short-title: constructor
slug: Web/JavaScript/Reference/Global_Objects/Object/constructor
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die **`constructor`** Daten-Eigenschaft einer {{jsxref("Object")}}-Instanz gibt eine Referenz auf die Konstruktorfunktion zurück, die das Instanzobjekt erstellt hat. Beachten Sie, dass der Wert dieser Eigenschaft eine Referenz auf _die Funktion selbst_ ist und nicht ein String, der den Namen der Funktion enthält.

> [!NOTE]
> Dies ist eine Eigenschaft von JavaScript-Objekten. Für die `constructor`-Methode in Klassen siehe [ihre eigene Referenzseite](/de/docs/Web/JavaScript/Reference/Classes/constructor).

## Wert

Eine Referenz auf die Konstruktorfunktion, die das Instanzobjekt erstellt hat.

{{js_property_attributes(1, 0, 1)}}

> [!NOTE]
> Diese Eigenschaft wird standardmäßig auf der [`prototype`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype)-Eigenschaft jeder Konstruktorfunktion erstellt und wird von allen Objekten geerbt, die durch diesen Konstruktor erstellt werden.

## Beschreibung

Jedes Objekt (mit Ausnahme von [Objekten mit dem Prototyp `null`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects)) verfügt über eine `constructor`-Eigenschaft auf ihrem `[[Prototype]]`. Objekte, die mit Literalen erstellt werden, haben ebenfalls eine `constructor`-Eigenschaft, die auf den Konstruktor-Typ für dieses Objekt verweist – zum Beispiel erzeugen Array-Literale {{jsxref("Array")}} Objekte, und [Objekt-Literale](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) erzeugen einfache Objekte.

```js
const o1 = {};
o1.constructor === Object; // true

const o2 = new Object();
o2.constructor === Object; // true

const a1 = [];
a1.constructor === Array; // true

const a2 = new Array();
a2.constructor === Array; // true

const n = 3;
n.constructor === Number; // true
```

Beachten Sie, dass `constructor` normalerweise von der [`prototype`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype)-Eigenschaft des Konstruktors stammt. Wenn Sie eine längere Prototyp-Kette haben, können Sie normalerweise erwarten, dass jedes Objekt in der Kette eine `constructor`-Eigenschaft hat.

```js
const o = new TypeError(); // Inheritance: TypeError -> Error -> Object
const proto = Object.getPrototypeOf;

Object.hasOwn(o, "constructor"); // false
proto(o).constructor === TypeError; // true
proto(proto(o)).constructor === Error; // true
proto(proto(proto(o))).constructor === Object; // true
```

## Beispiele

### Den Konstruktor eines Objekts anzeigen

Das folgende Beispiel erstellt einen Konstruktor (`Tree`) und ein Objekt dieses Typs (`theTree`). Das Beispiel zeigt dann die `constructor`-Eigenschaft für das Objekt `theTree`.

```js
function Tree(name) {
  this.name = name;
}

const theTree = new Tree("Redwood");
console.log(`theTree.constructor is ${theTree.constructor}`);
```

Dieses Beispiel zeigt die folgende Ausgabe:

```plain
theTree.constructor is function Tree(name) {
  this.name = name;
}
```

### Die Konstruktor-Eigenschaft einem Objekt zuweisen

Man kann die `constructor`-Eigenschaft von Nicht-Primitiven zuweisen.

```js
const arr = [];
arr.constructor = String;
arr.constructor === String; // true
arr instanceof String; // false
arr instanceof Array; // true

const foo = new Foo();
foo.constructor = "bar";
foo.constructor === "bar"; // true

// etc.
```

Dies überschreibt die alte `constructor`-Eigenschaft nicht – sie war ursprünglich auf dem `[[Prototype]]` der Instanz vorhanden, nicht als eigene Eigenschaft.

```js
const arr = [];
Object.hasOwn(arr, "constructor"); // false
Object.hasOwn(Object.getPrototypeOf(arr), "constructor"); // true

arr.constructor = String;
Object.hasOwn(arr, "constructor"); // true — the instance property shadows the one on its prototype
```

Aber selbst wenn `Object.getPrototypeOf(a).constructor` neu zugewiesen wird, ändert es nicht das andere Verhalten des Objekts. Zum Beispiel wird das Verhalten von `instanceof` von [`Symbol.hasInstance`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/hasInstance) und nicht von `constructor` gesteuert:

```js
const arr = [];
arr.constructor = String;
arr instanceof String; // false
arr instanceof Array; // true
```

Es gibt nichts, das die `constructor`-Eigenschaft davor schützt, neu zugewiesen oder überschattet zu werden, daher sollte sie in der Regel vermieden werden, um den Typ einer Variablen zu erkennen, zugunsten weniger anfälliger Methoden wie `instanceof` und [`Symbol.toStringTag`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) für Objekte oder [`typeof`](/de/docs/Web/JavaScript/Reference/Operators/typeof) für Primitive.

### Den Konstruktor des Prototyps einer Konstruktorfunktion ändern

Jeder Konstruktor hat eine [`prototype`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype)-Eigenschaft, die beim Aufruf über den [`new`](/de/docs/Web/JavaScript/Reference/Operators/new)-Operator zum `[[Prototype]]` der Instanz wird. `ConstructorFunction.prototype.constructor` wird daher, wie zuvor gezeigt, eine Eigenschaft auf dem `[[Prototype]]` der Instanz.

Wenn jedoch `ConstructorFunction.prototype` neu zugewiesen wird, geht die `constructor`-Eigenschaft verloren. Zum Beispiel ist dies eine häufige Methode, um ein Vererbungsmuster zu erstellen:

```js
function Parent() {
  // …
}
Parent.prototype.parentMethod = function () {};

function Child() {
  Parent.call(this); // Make sure everything is initialized properly
}
// Pointing the [[Prototype]] of Child.prototype to Parent.prototype
Child.prototype = Object.create(Parent.prototype);
```

Der `constructor` von Instanzen von `Child` wird `Parent` sein, da `Child.prototype` neu zugewiesen wurde.

Dies ist normalerweise kein großes Problem – die Sprache liest fast nie die `constructor`-Eigenschaft eines Objekts. Die einzige Ausnahme ist, wenn [`[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/species) verwendet wird, um neue Instanzen einer Klasse zu erstellen, aber solche Fälle sind selten und Sie sollten ohnehin die [`extends`](/de/docs/Web/JavaScript/Reference/Classes/extends)-Syntax verwenden, um eingebaute Klassen zu erweitern.

Es ist jedoch entscheidend sicherzustellen, dass `Child.prototype.constructor` immer auf `Child` selbst zeigt, wenn ein Aufrufer `constructor` verwendet, um aus einer Instanz auf die ursprüngliche Klasse zuzugreifen. Erstellen Sie den folgenden Fall: das Objekt hat die Methode `create()`, um sich selbst zu erstellen.

```js
function Parent() {
  // …
}
function CreatedConstructor() {
  Parent.call(this);
}

CreatedConstructor.prototype = Object.create(Parent.prototype);

CreatedConstructor.prototype.create = function () {
  return new this.constructor();
};

new CreatedConstructor().create().create(); // TypeError: new CreatedConstructor().create().create is undefined, since constructor === Parent
```

Im obigen Beispiel wird eine Ausnahme ausgelöst, da der `constructor` auf `Parent` verweist. Um dies zu vermeiden, weisen Sie einfach den erforderlichen Konstruktor zu, den Sie verwenden wollen.

```js
function Parent() {
  // …
}
function CreatedConstructor() {
  // …
}

CreatedConstructor.prototype = Object.create(Parent.prototype, {
  // Return original constructor to Child
  constructor: {
    value: CreatedConstructor,
    enumerable: false, // Make it non-enumerable, so it won't appear in `for...in` loop
    writable: true,
    configurable: true,
  },
});

CreatedConstructor.prototype.create = function () {
  return new this.constructor();
};

new CreatedConstructor().create().create(); // it's pretty fine
```

Beachten Sie, dass es beim manuellen Hinzufügen der `constructor`-Eigenschaft wichtig ist, die Eigenschaft [nicht aufgezählt werden](/de/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties) zu lassen, sodass `constructor` in [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in)-Schleifen nicht besucht wird – wie es normalerweise der Fall ist.

Wenn Ihnen der obige Code zu viel Boilerplate erscheint, können Sie auch [`Object.setPrototypeOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf) verwenden, um die Prototyp-Kette zu manipulieren.

```js
function Parent() {
  // …
}
function CreatedConstructor() {
  // …
}

Object.setPrototypeOf(CreatedConstructor.prototype, Parent.prototype);

CreatedConstructor.prototype.create = function () {
  return new this.constructor();
};

new CreatedConstructor().create().create(); // still works without re-creating constructor property
```

`Object.setPrototypeOf()` kommt mit möglichen Leistungseinbußen, da alle zuvor erstellten Objekte, die an der Prototyp-Kette beteiligt sind, neu kompiliert werden müssen; aber wenn der obige Initialisierungscode vor der Konstruktion von `Parent` oder `CreatedConstructor` ausgeführt wird, sollte der Effekt minimal sein.

Betrachten wir einen noch komplexeren Fall.

```js
function ParentWithStatic() {}

ParentWithStatic.startPosition = { x: 0, y: 0 }; // Static member property
ParentWithStatic.getStartPosition = function () {
  return this.startPosition;
};

function Child(x, y) {
  this.position = { x, y };
}

Child.prototype = Object.create(ParentWithStatic.prototype, {
  // Return original constructor to Child
  constructor: {
    value: Child,
    enumerable: false,
    writable: true,
    configurable: true,
  },
});

Child.prototype.getOffsetByInitialPosition = function () {
  const position = this.position;
  // Using this.constructor, in hope that getStartPosition exists as a static method
  const startPosition = this.constructor.getStartPosition();

  return {
    offsetX: startPosition.x - position.x,
    offsetY: startPosition.y - position.y,
  };
};

new Child(1, 1).getOffsetByInitialPosition();
// Error: this.constructor.getStartPosition is undefined, since the
// constructor is Child, which doesn't have the getStartPosition static method
```

Damit dieses Beispiel ordnungsgemäß funktioniert, können wir die statischen Eigenschaften von `Parent` neu `Child` zuweisen:

```js
// …
Object.assign(Child, ParentWithStatic); // Notice that we assign it before we create() a prototype below
Child.prototype = Object.create(ParentWithStatic.prototype, {
  // Return original constructor to Child
  constructor: {
    value: Child,
    enumerable: false,
    writable: true,
    configurable: true,
  },
});
// …
```

Aber noch besser ist es, wenn sich die Konstruktorfunktionen selbst, wie es Klassen mit [`extends`](/de/docs/Web/JavaScript/Reference/Classes/extends) tun, gegenseitig erweitern.

```js
function ParentWithStatic() {}

ParentWithStatic.startPosition = { x: 0, y: 0 }; // Static member property
ParentWithStatic.getStartPosition = function () {
  return this.startPosition;
};

function Child(x, y) {
  this.position = { x, y };
}

// Properly create inheritance!
Object.setPrototypeOf(Child.prototype, ParentWithStatic.prototype);
Object.setPrototypeOf(Child, ParentWithStatic);

Child.prototype.getOffsetByInitialPosition = function () {
  const position = this.position;
  const startPosition = this.constructor.getStartPosition();

  return {
    offsetX: startPosition.x - position.x,
    offsetY: startPosition.y - position.y,
  };
};

console.log(new Child(1, 1).getOffsetByInitialPosition()); // { offsetX: -1, offsetY: -1 }
```

Auch hier kann die Verwendung von `Object.setPrototypeOf()` negative Leistungseffekte haben, also stellen Sie sicher, dass sie direkt nach der Konstruktorerklärung und bevor Instanzen erstellt werden, erfolgt — um zu vermeiden, dass Objekte "verunreinigt" werden.

> [!NOTE]
> Das manuelle Aktualisieren oder Setzen des Konstruktors kann zu unterschiedlichen und manchmal verwirrenden Konsequenzen führen. Um dem entgegenzuwirken, definieren Sie einfach die Rolle von `constructor` in jedem spezifischen Fall. In den meisten Fällen wird `constructor` nicht verwendet und eine Neuzuweisung ist nicht erforderlich.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Statements/class", "class")}}
- {{jsxref("Classes/constructor", "constructor")}}
- {{Glossary("Constructor", "Konstruktor")}}
