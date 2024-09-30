---
title: set
slug: Web/JavaScript/Reference/Functions/set
l10n:
  sourceCommit: 530c492222dd409302f3a1ab0e8ee828514e04db
---

{{jsSidebar("Functions")}}

Die **`set`**-Syntax bindet eine Objekt-Eigenschaft an eine Funktion, die aufgerufen wird, wenn versucht wird, diese Eigenschaft zu setzen. Sie kann auch in [Klassen](/de/docs/Web/JavaScript/Reference/Classes) verwendet werden.

{{EmbedInteractiveExample("pages/js/functions-setter.html")}}

## Syntax

```js-nolint
{ set prop(val) { /* … */ } }
{ set [expression](val) { /* … */ } }
```

Es gibt einige zusätzliche Syntaxbeschränkungen:

- Ein Setter muss genau einen Parameter haben.

### Parameter

- `prop`
  - : Der Name der Eigenschaft, die mit der gegebenen Funktion gebunden werden soll. Wie bei anderen Eigenschaften in [Objektinitialisierern](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer), kann es sich um einen Zeichenfolgenliteral, einen Zahlenliteral oder einen Bezeichner handeln.
- `val`
  - : Ein Alias für die Variable, die den Wert hält, der versucht wird, zu `prop` zugewiesen zu werden.
- `expression`
  - : Sie können auch Ausdrücke für einen berechneten Eigenschaftsnamen verwenden, um ihn mit der gegebenen Funktion zu binden.

## Beschreibung

In JavaScript kann ein Setter verwendet werden, um eine Funktion auszuführen, wann immer versucht wird, den Wert einer Eigenschaft zu ändern. Setzer werden meistens in Verbindung mit Getter verwendet.

Eine Objekteigenschaft ist entweder eine Daten-Eigenschaft oder eine Zugriffseigenschaft, aber sie kann nicht gleichzeitig beides sein. Lesen Sie {{jsxref("Object.defineProperty()")}} für weitere Informationen. Die Setzer-Syntax ermöglicht Ihnen die Angabe der Setter-Funktion in einem Objekt-Initializer.

```js
const obj = {
  set prop() {
    // setter, the code executed when setting obj.prop
  },
}
```

Eigenschaften, die mit dieser Syntax definiert werden, sind eigene Eigenschaften des erstellten Objekts und sie sind konfigurierbar und aufzählbar.

## Beispiele

### Definieren eines Setzers in neuen Objekten in Objekt-Initialisierern

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

Beachten Sie, dass `current` nicht definiert ist, und alle Zugriffsversuche darauf zu `undefined` führen.

### Verwenden von Setzern in Klassen

Sie können dieselbe Syntax verwenden, um öffentliche Instanzsetter zu definieren, die in Klasseninstanzen verfügbar sind. In Klassen benötigen Sie nicht das Komma-Trennzeichen zwischen den Methoden.

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

Setzer-Eigenschaften werden auf der `prototype`-Eigenschaft der Klasse definiert und sind somit für alle Instanzen der Klasse gemeinsam. Im Gegensatz zu Setzer-Eigenschaften in Objektliteralen sind Setzer-Eigenschaften in Klassen nicht aufzählbar.

Statische Setzer und private Setzer verwenden ähnliche Syntaxen, die auf den Seiten [`static`](/de/docs/Web/JavaScript/Reference/Classes/static) und [private Eigenschaften](/de/docs/Web/JavaScript/Reference/Classes/Private_properties) beschrieben werden.

### Entfernen eines Setzers mit dem `delete`-Operator

Wenn Sie den Setzer entfernen möchten, können Sie ihn einfach mit {{jsxref("Operators/delete", "delete")}} löschen:

```js
delete language.current;
```

### Definieren eines Setzers in bestehenden Objekten mit `defineProperty`

Um einem _bestehenden_ Objekt einen Setzer hinzuzufügen, verwenden Sie
{{jsxref("Object.defineProperty()")}}.

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

### Verwenden eines berechneten Eigenschaftsnamens

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
- [Objektinitializer](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer)
- {{jsxref("Statements/class", "class")}}
- [Eigenschafts-Accessor](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors)
- [Incompatible ES5 change: literal getter and setter functions must now have exactly zero or one arguments](https://whereswalden.com/2010/08/22/incompatible-es5-change-literal-getter-and-setter-functions-must-now-have-exactly-zero-or-one-arguments/) von Jeff Walden (2010)
- [More SpiderMonkey changes: ancient, esoteric, very rarely used syntax for creating getters and setters is being removed](https://whereswalden.com/2010/04/16/more-spidermonkey-changes-ancient-esoteric-very-rarely-used-syntax-for-creating-getters-and-setters-is-being-removed/) von Jeff Walden (2010)
