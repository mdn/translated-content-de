---
title: Object.prototype.constructor
slug: Web/JavaScript/Reference/Global_Objects/Object/constructor
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die **`constructor`** Dateneigenschaft einer {{jsxref("Object")}} Instanz gibt eine Referenz auf die Konstruktionsfunktion zurück, die das Instanzobjekt erstellt hat. Beachten Sie, dass der Wert dieser Eigenschaft eine Referenz auf _die Funktion selbst_ ist und nicht ein String, der den Namen der Funktion enthält.

> [!NOTE]
> Dies ist eine Eigenschaft von JavaScript-Objekten. Für die `constructor`-Methode in Klassen, siehe [die eigene Referenzseite](/de/docs/Web/JavaScript/Reference/Classes/constructor).

## Wert

Eine Referenz auf die Konstruktionsfunktion, die das Instanzobjekt erstellt hat.

{{js_property_attributes(1, 0, 1)}}

> [!NOTE]
> Diese Eigenschaft wird standardmäßig auf der [`prototype`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype)-Eigenschaft jeder Konstruktionsfunktion erstellt und wird von allen Objekten geerbt, die durch diesen Konstruktor erstellt wurden.

## Beschreibung

Jedes Objekt (mit Ausnahme von [`null`-Prototyp-Objekten](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects)) wird eine `constructor`-Eigenschaft auf seinem `[[Prototype]]` haben. Objekte, die mit Literalen erstellt werden, haben ebenfalls eine `constructor`-Eigenschaft, die auf den Konstruktionstyp für dieses Objekt zeigt — zum Beispiel erstellen Array-Literale {{jsxref("Array")}}-Objekte, und [Objekt-Literale](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) erzeugen einfache Objekte.

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

Beachten Sie, dass der `constructor` normalerweise von der [`prototype`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype)-Eigenschaft des Konstruktors stammt. Wenn Sie eine längere Prototypkette haben, können Sie normalerweise erwarten, dass jedes Objekt in der Kette eine `constructor`-Eigenschaft hat.

```js
const o = new TypeError(); // Vererbung: TypeError -> Error -> Object
const proto = Object.getPrototypeOf;

Object.hasOwn(o, "constructor"); // false
proto(o).constructor === TypeError; // true
proto(proto(o)).constructor === Error; // true
proto(proto(proto(o))).constructor === Object; // true
```

## Beispiele

### Den Konstruktor eines Objekts anzeigen

Im folgenden Beispiel wird ein Konstruktor (`Tree`) und ein Objekt dieses Typs (`theTree`) erstellt. Das Beispiel zeigt dann die `constructor`-Eigenschaft für das Objekt `theTree` an.

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

### Die constructor-Eigenschaft einem Objekt zuweisen

Man kann die `constructor`-Eigenschaft von Nicht-Primärwerten zuweisen.

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

Dies überschreibt nicht die alte `constructor`-Eigenschaft — sie war ursprünglich auf dem `[[Prototype]]` der Instanz vorhanden und nicht als eigene Eigenschaft.

```js
const arr = [];
Object.hasOwn(arr, "constructor"); // false
Object.hasOwn(Object.getPrototypeOf(arr), "constructor"); // true

arr.constructor = String;
Object.hasOwn(arr, "constructor"); // true — die Instanzeigenschaft überschattet die auf ihrem Prototyp
```

Aber selbst wenn `Object.getPrototypeOf(a).constructor` neu zugewiesen wird, ändert dies nicht andere Verhaltensweisen des Objekts. Zum Beispiel wird das Verhalten von `instanceof` durch [`Symbol.hasInstance`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/hasInstance) gesteuert, nicht durch `constructor`:

```js
const arr = [];
arr.constructor = String;
arr instanceof String; // false
arr instanceof Array; // true
```

Es gibt nichts, das die `constructor`-Eigenschaft davor schützt, neu zugeordnet oder überschattet zu werden. Daher sollte vermieden werden, diese Eigenschaft zur Erkennung des Typs einer Variablen zu verwenden. Stattdessen sollten robustere Methoden wie `instanceof` und [`Symbol.toStringTag`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) für Objekte oder [`typeof`](/de/docs/Web/JavaScript/Reference/Operators/typeof) für Primärwerte verwendet werden.

### Den Konstruktor des Prototyps einer Konstruktionsfunktion ändern

Jeder Konstruktor hat eine [`prototype`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype)-Eigenschaft, die die `[[Prototype]]`-Eigenschaft der Instanz wird, wenn sie über den [`new`](/de/docs/Web/JavaScript/Reference/Operators/new)-Operator aufgerufen wird. `ConstructorFunction.prototype.constructor` wird daher eine Eigenschaft auf der `[[Prototype]]` der Instanz, wie zuvor demonstriert.

Wenn jedoch `ConstructorFunction.prototype` neu zugewiesen wird, geht die `constructor`-Eigenschaft verloren. Zum Beispiel ist der folgende Weg üblich, um ein Vererbungsmuster zu erstellen:

```js
function Parent() {
  // …
}
Parent.prototype.parentMethod = function () {};

function Child() {
  Parent.call(this); // Sicherstellen, dass alles richtig initialisiert ist
}
// Setzen des [[Prototype]] von Child.prototype auf Parent.prototype
Child.prototype = Object.create(Parent.prototype);
```

Der `constructor` von Instanzen von `Child` wird `Parent` sein, da `Child.prototype` neu zugewiesen wurde.

Dies ist normalerweise kein großes Problem — die Sprache liest fast nie die `constructor`-Eigenschaft eines Objekts. Die einzige Ausnahme ist die Verwendung von [`[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/species), um neue Instanzen einer Klasse zu erstellen, aber solche Fälle sind selten, und Sie sollten syntaktisch das [`extends`](/de/docs/Web/JavaScript/Reference/Classes/extends) verwenden, um eingebaute Objekte zu unterklassen.

Es ist jedoch entscheidend, dass `Child.prototype.constructor` immer auf `Child` selbst verweist, wenn ein Aufrufer den `constructor` verwendet, um die ursprüngliche Klasse von einer Instanz zu erhalten. Nehmen Sie den folgenden Fall: Das Objekt hat die `create()`-Methode, um sich selbst zu erzeugen.

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

new CreatedConstructor().create().create(); // TypeError: new CreatedConstructor().create().create ist undefiniert, da constructor === Parent
```

Im obigen Beispiel wird eine Ausnahme geworfen, da der `constructor` auf `Parent` verweist. Um dies zu vermeiden, weisen Sie einfach den notwendigen Konstruktor zu, den Sie verwenden möchten.

```js
function Parent() {
  // …
}
function CreatedConstructor() {
  // …
}

CreatedConstructor.prototype = Object.create(Parent.prototype, {
  // Ursprünglichen Konstruktor auf Child zurücksetzen
  constructor: {
    value: CreatedConstructor,
    enumerable: false, // Nicht enumerierbar machen, damit es nicht in for...in Schleife erscheint
    writable: true,
    configurable: true,
  },
});

CreatedConstructor.prototype.create = function () {
  return new this.constructor();
};

new CreatedConstructor().create().create(); // es funktioniert gut
```

Beachten Sie, dass es wichtig ist, beim manuellen Hinzufügen der `constructor`-Eigenschaft die Eigenschaft [nicht enumerierbar](/de/docs/Web/JavaScript/Enumerability_and_ownership_of_properties) zu machen, damit `constructor` nicht in den [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in)-Schleifen besucht wird, wie es normalerweise der Fall ist.

Wenn der obige Code zu viel Boilerplate enthält, sollten Sie auch [`Object.setPrototypeOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf) in Betracht ziehen, um die Prototypkette zu manipulieren.

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

new CreatedConstructor().create().create(); // funktioniert immer noch ohne den Konstruktor neu zu erstellen
```

`Object.setPrototypeOf()` bringt potenzielle Leistungseinbußen mit sich, da alle zuvor erstellten Objekte, die in der Prototypkette beteiligt sind, neu kompiliert werden müssen. Aber wenn der obige Initialisierungscode passiert, bevor `Parent` oder `CreatedConstructor` konstruiert werden, sollte die Auswirkung minimal sein.

Betrachten wir einen weiteren involvierten Fall.

```js
function ParentWithStatic() {}

ParentWithStatic.startPosition = { x: 0, y: 0 }; // Statische Mitgliedereigenschaft
ParentWithStatic.getStartPosition = function () {
  return this.startPosition;
};

function Child(x, y) {
  this.position = { x, y };
}

Child.prototype = Object.create(ParentWithStatic.prototype, {
  // Ursprünglichen Konstruktor auf Child zurücksetzen
  constructor: {
    value: Child,
    enumerable: false,
    writable: true,
    configurable: true,
  },
});

Child.prototype.getOffsetByInitialPosition = function () {
  const position = this.position;
  // Verwenden von this.constructor, in der Hoffnung, dass getStartPosition als statische Methode existiert
  const startPosition = this.constructor.getStartPosition();

  return {
    offsetX: startPosition.x - position.x,
    offsetY: startPosition.y - position.y,
  };
};

new Child(1, 1).getOffsetByInitialPosition();
// Fehler: this.constructor.getStartPosition ist undefiniert, da der
// Konstruktor Child ist, der keine getStartPosition-Statikmethode hat
```

Damit dieses Beispiel korrekt funktioniert, können wir die statischen Eigenschaften des `Parent` auf `Child` übertragen:

```js
// …
Object.assign(Child, ParentWithStatic); // Beachten Sie, dass wir es zuweisen, bevor wir ein Prototyp unten erstellen()
Child.prototype = Object.create(ParentWithStatic.prototype, {
  // Ursprünglichen Konstruktor auf Child zurücksetzen
  constructor: {
    value: Child,
    enumerable: false,
    writable: true,
    configurable: true,
  },
});
// …
```

Noch besser ist jedoch, dass wir die Konstruktionsfunktionen selbst einander erweitern lassen können, wie es Klassen' [`extends`](/de/docs/Web/JavaScript/Reference/Classes/extends) tun.

```js
function ParentWithStatic() {}

ParentWithStatic.startPosition = { x: 0, y: 0 }; // Statische Mitgliedereigenschaft
ParentWithStatic.getStartPosition = function () {
  return this.startPosition;
};

function Child(x, y) {
  this.position = { x, y };
}

// Korrekt die Vererbung erstellen!
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

Nochmals, die Verwendung von `Object.setPrototypeOf()` kann negative Leistungseffekte haben, stellen Sie also sicher, dass dies unmittelbar nach der Konstruktorerklärung und vor Instanziierung geschieht — um zu vermeiden, dass Objekte "verunreinigt" werden.

> [!NOTE]
> Das manuelle Aktualisieren oder Festlegen des Konstruktors kann zu unterschiedlichen und manchmal verwirrenden Konsequenzen führen. Um dies zu verhindern, definieren Sie einfach die Rolle des `constructor` in jedem spezifischen Fall. In den meisten Fällen wird `constructor` nicht verwendet und ist das Neuzuordnen nicht notwendig.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Statements/class", "class")}}
- {{jsxref("Classes/constructor", "constructor")}}
- {{Glossary("Constructor")}}
