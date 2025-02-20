---
title: set
slug: Web/JavaScript/Reference/Functions/set
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{jsSidebar("Functions")}}

Die **`set`**-Syntax bindet eine Objekteigenschaft an eine Funktion, die aufgerufen wird, wenn versucht wird, diese Eigenschaft zu setzen. Sie kann auch in [Klassen](/de/docs/Web/JavaScript/Reference/Classes) verwendet werden.

{{InteractiveExample("JavaScript Demo: Functions Setter")}}

```js interactive-example
const language = {
  set current(name) {
    this.log.push(name);
  },
  log: [],
};

language.current = "EN";
language.current = "FA";

console.log(language.log);
// Expected output: Array ["EN", "FA"]
```

## Syntax

```js-nolint
{ set prop(val) { /* … */ } }
{ set [expression](val) { /* … */ } }
```

Es gibt einige zusätzliche Einschränkungen für die Syntax:

- Ein Setter muss genau einen Parameter haben.

### Parameter

- `prop`
  - : Der Name der Eigenschaft, die an die gegebene Funktion gebunden werden soll. Genau wie andere Eigenschaften in [Objektinitialisierern](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) kann es ein Zeichenfolgenliteral, ein Zahlenliteral oder ein Bezeichner sein.
- `val`
  - : Ein Alias für die Variable, die den Wert hält, der versucht wurde, `prop` zugewiesen zu werden.
- `expression`
  - : Sie können auch Ausdrücke für einen berechneten Eigenschaftsnamen verwenden, um an die gegebene Funktion zu binden.

## Beschreibung

In JavaScript kann ein Setter verwendet werden, um eine Funktion auszuführen, wenn versucht wird, den Wert einer Eigenschaft zu ändern. Setter werden am häufigsten in Verbindung mit Gettern verwendet.

Eine Objekteigenschaft ist entweder eine Dateneigenschaft oder eine Zugriffseigenschaft, jedoch nicht beides gleichzeitig. Lesen Sie {{jsxref("Object.defineProperty()")}} für weitere Informationen. Die Setter-Syntax ermöglicht es, die Setter-Funktion in einem Objektinitialisierer anzugeben.

```js
const obj = {
  set prop() {
    // setter, the code executed when setting obj.prop
  },
}
```

Eigenschaften, die mit dieser Syntax definiert werden, sind eigene Eigenschaften des erstellten Objekts und sie sind konfigurierbar und aufzählbar.

## Beispiele

### Definition eines Setters in Objektinitialisierern für neue Objekte

Das folgende Beispiel definiert eine Pseudo-Eigenschaft `current` des Objekts `language`. Wenn `current` ein Wert zugewiesen wird, wird `log` mit diesem Wert aktualisiert:

```js
const language = {
  set current(name) {
    this.log.push(name);
  },
  log: [],
};

language.current = "EN";
console.log(language.log); // ['EN']

language.current = "FA";
console.log(language.log); // ['EN', 'FA']
```

Beachten Sie, dass `current` nicht definiert ist, und daher führen alle Zugriffsversuche darauf zu `undefined`.

### Verwendung von Settern in Klassen

Sie können genau die gleiche Syntax verwenden, um öffentliche Instanz-Setter zu definieren, die auf Klasseninstanzen verfügbar sind. In Klassen benötigen Sie kein Komma-Trennzeichen zwischen den Methoden.

```js
class ClassWithGetSet {
  #msg = "hello world";
  get msg() {
    return this.#msg;
  }
  set msg(x) {
    this.#msg = `hello ${x}`;
  }
}

const instance = new ClassWithGetSet();
console.log(instance.msg); // "hello world"

instance.msg = "cake";
console.log(instance.msg); // "hello cake"
```

Setter-Eigenschaften werden auf der `prototype`-Eigenschaft der Klasse definiert und daher von allen Instanzen der Klasse gemeinsam genutzt. Im Gegensatz zu Setter-Eigenschaften in Objekt-Literalen sind Setter-Eigenschaften in Klassen nicht aufzählbar.

Statische Setter und private Setter verwenden ähnliche Syntaxen, die auf den Seiten [`static`](/de/docs/Web/JavaScript/Reference/Classes/static) und [private properties](/de/docs/Web/JavaScript/Reference/Classes/Private_properties) beschrieben sind.

### Entfernen eines Setters mit dem `delete` Operator

Wenn Sie den Setter entfernen möchten, können Sie einfach {{jsxref("Operators/delete", "delete")}} verwenden:

```js
delete language.current;
```

### Definition eines Setters für bestehende Objekte mit `defineProperty`

Um einem _bestehenden_ Objekt einen Setter hinzuzufügen, verwenden Sie {{jsxref("Object.defineProperty()")}}.

```js
const o = { a: 0 };

Object.defineProperty(o, "b", {
  set(x) {
    this.a = x / 2;
  },
});

o.b = 10;
// Runs the setter, which assigns 10 / 2 (5) to the 'a' property

console.log(o.a); // 5
```

### Verwendung eines berechneten Eigenschaftsnamens

```js
const expr = "foo";

const obj = {
  baz: "bar",
  set [expr](v) {
    this.baz = v;
  },
};

console.log(obj.baz); // "bar"

obj.foo = "baz";
// Run the setter

console.log(obj.baz); // "baz"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Arbeiten mit Objekten](/de/docs/Web/JavaScript/Guide/Working_with_objects) Leitfaden
- [Funktionen](/de/docs/Web/JavaScript/Reference/Functions)
- [`get`](/de/docs/Web/JavaScript/Reference/Functions/get)
- {{jsxref("Object.defineProperty()")}}
- [Objektinitialisierer](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer)
- {{jsxref("Statements/class", "class")}}
- [Eigenschaftszugriffe](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors)
- [Inkompatible ES5-Änderung: Literal-Getter- und Setter-Funktionen dürfen jetzt nur noch exakt null oder ein Argument haben](https://whereswalden.com/2010/08/22/incompatible-es5-change-literal-getter-and-setter-functions-must-now-have-exactly-zero-or-one-arguments/) von Jeff Walden (2010)
- [Weitere SpiderMonkey-Änderungen: ältere, esoterische, sehr selten verwendete Syntax zur Erstellung von Gettern und Settern wird entfernt](https://whereswalden.com/2010/04/16/more-spidermonkey-changes-ancient-esoteric-very-rarely-used-syntax-for-creating-getters-and-setters-is-being-removed/) von Jeff Walden (2010)
