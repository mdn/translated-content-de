---
title: set
slug: Web/JavaScript/Reference/Functions/set
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Die **`set`**-Syntax bindet eine Objekt-Eigenschaft an eine Funktion, die aufgerufen wird, wenn versucht wird, diese Eigenschaft zu setzen. Sie kann auch in [Klassen](/de/docs/Web/JavaScript/Reference/Classes) verwendet werden.

{{InteractiveExample("JavaScript Demo: Setter declaration")}}

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

Es gibt einige zusätzliche Syntaxeinschränkungen:

- Ein Setter muss genau einen Parameter haben.

### Parameter

- `prop`
  - : Der Name der Eigenschaft, die an die gegebene Funktion gebunden werden soll. Wie bei anderen Eigenschaften in [Objektinitialisierungen](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) kann es sich um ein String-Literal, ein Zahlenliteral oder einen Bezeichner handeln.
- `val`
  - : Ein Alias für die Variable, die den Wert hält, der `prop` zugewiesen werden soll.
- `expression`
  - : Sie können auch Ausdrücke für einen berechneten Eigenschaftsnamen verwenden, um diesen an die gegebene Funktion zu binden.

## Beschreibung

In JavaScript kann ein Setter verwendet werden, um eine Funktion auszuführen, wenn versucht wird, den Wert einer Eigenschaft zu ändern. Setter werden meistens in Verbindung mit Gettern verwendet.

Eine Objekteigenschaft ist entweder eine Dateneigenschaft oder eine Zugriffseigenschaft, sie kann aber nicht gleichzeitig beides sein. Lesen Sie {{jsxref("Object.defineProperty()")}} für mehr Informationen. Die Setzer-Syntax erlaubt es Ihnen, die Setzerfunktion in einer Objektinitialisierung anzugeben.

```js
const obj = {
  set prop() {
    // setter, the code executed when setting obj.prop
  },
}
```

Eigenschaften, die mit dieser Syntax definiert sind, sind Eigenobjekteigenschaften des erstellten Objekts, und sie sind konfigurierbar und aufzählbar.

## Beispiele

### Definieren eines Setzers auf neuen Objekten in Objektinitialisierungen

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

Beachten Sie, dass `current` nicht definiert ist und jeder Versuch, darauf zuzugreifen, zu `undefined` führt.

### Verwendung von Setzern in Klassen

Sie können die exakt gleiche Syntax verwenden, um öffentliche Instanz-Setzer zu definieren, die auf Klasseninstanzen verfügbar sind. In Klassen ist kein Komma-Trenner zwischen Methoden erforderlich.

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

Setter-Eigenschaften sind auf der `prototype`-Eigenschaft der Klasse definiert und werden daher von allen Instanzen der Klasse geteilt. Im Gegensatz zu Setter-Eigenschaften in Objektliteralen sind Setter-Eigenschaften in Klassen nicht aufzählbar.

Statische Setter und private Setter verwenden ähnliche Syntaxen, die auf den Seiten zu [`static`](/de/docs/Web/JavaScript/Reference/Classes/static) und [privaten Elementen](/de/docs/Web/JavaScript/Reference/Classes/Private_elements) beschrieben sind.

### Entfernen eines Setzers mit dem `delete`-Operator

Wenn Sie den Setter entfernen möchten, können Sie ihn einfach {{jsxref("Operators/delete", "löschen")}};

```js
delete language.current;
```

### Definieren eines Setzers auf bestehenden Objekten mit `defineProperty`

Um einen Setter zu einem _bestehenden_ Objekt hinzuzufügen, verwenden Sie
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

### Verwenden eines berechneten Eigenschaftsnamen

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
- [Objektinitialisierung](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer)
- {{jsxref("Statements/class", "class")}}
- [Zugriffseigenschaften](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors)
- [Inkompatible ES5-Änderung: Literal-Getter- und Setter-Funktionen müssen jetzt genau null oder einen Parameter haben](https://whereswalden.com/2010/08/22/incompatible-es5-change-literal-getter-and-setter-functions-must-now-have-exactly-zero-or-one-arguments/) von Jeff Walden (2010)
- [Weitere SpiderMonkey-Änderungen: Antike, esoterische und sehr selten verwendete Syntax zur Erstellung von Gettern und Settern wird entfernt](https://whereswalden.com/2010/04/16/more-spidermonkey-changes-ancient-esoteric-very-rarely-used-syntax-for-creating-getters-and-setters-is-being-removed/) von Jeff Walden (2010)
