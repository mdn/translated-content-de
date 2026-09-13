---
title: set
slug: Web/JavaScript/Reference/Functions/set
l10n:
  sourceCommit: 1474534461893381d54c502e655f334b5568e597
---

Die **`set`**-Syntax bindet eine Eigenschaft eines Objekts an eine Funktion, die aufgerufen wird, wenn versucht wird, diese Eigenschaft zu setzen. Sie kann auch in [Klassen](/de/docs/Web/JavaScript/Reference/Classes) verwendet werden.

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

Es gibt einige zusätzliche Einschränkungen bei der Syntax:

- Ein Setter muss genau einen Parameter haben.

### Parameter

- `prop`
  - : Der Name der Eigenschaft, die an die gegebene Funktion gebunden werden soll. Wie bei anderen Eigenschaften in [Objektinitialisierern](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) kann es ein String-Literal, ein Zahlenliteral oder ein Bezeichner sein.
- `val`
  - : Ein Alias für die Variable, die den Wert enthält, der `prop` zugewiesen werden soll.
- `expression`
  - : Sie können auch Ausdrücke für einen berechneten Eigenschaftsnamen verwenden, um die gegebene Funktion zu binden.

## Beschreibung

In JavaScript kann ein Setter verwendet werden, um eine Funktion auszuführen, wann immer versucht wird, den Wert einer Eigenschaft zu ändern. Setzer werden am häufigsten in Verbindung mit Getter verwendet.

Eine Objekteigenschaft ist entweder eine Dateneigenschaft oder eine Zugriffsoroeigenschaft, aber sie kann nicht gleichzeitig beides sein. Lesen Sie {{jsxref("Object.defineProperty()")}} für mehr Informationen. Die Setzer-Syntax ermöglicht es Ihnen, die Setzer-Funktion in einem Objektinitialisierer anzugeben.

```js
const obj = {
  set prop(val) {
    // setter, the code executed when setting obj.prop
  },
};
```

Eigenschaften, die mit dieser Syntax definiert werden, sind eigene Eigenschaften des erstellten Objekts und sind konfigurierbar und aufzählbar.

## Beispiele

### Definieren eines Setzers für neue Objekte in Objektinitialisierern

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

Beachten Sie, dass `current` nicht definiert ist und jeder Versuch, darauf zuzugreifen, `undefined` ergibt.

### Verwendung von Setzern in Klassen

Sie können dieselbe Syntax verwenden, um öffentliche InstanzSetzer zu definieren, die auf Klasseninstanzen verfügbar sind. In Klassen benötigen Sie kein Komma als Trennzeichen zwischen den Methoden.

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

Setzer-Eigenschaften werden in der `prototype`-Eigenschaft der Klasse definiert und sind somit von allen Instanzen der Klasse gemeinsam genutzt. Im Gegensatz zu Setzer-Eigenschaften in Objektliteralen sind Setzer-Eigenschaften in Klassen nicht aufzählbar.

Statische Setzer und private Setzer verwenden ähnliche Syntaxen, die auf den Seiten zu [`static`](/de/docs/Web/JavaScript/Reference/Classes/static) und [privaten Elementen](/de/docs/Web/JavaScript/Reference/Classes/Private_elements) beschrieben werden.

### Entfernen eines Setzers mit dem `delete`-Operator

Wenn Sie den Setzer entfernen möchten, können Sie {{jsxref("delete")}} verwenden:

```js
delete language.current;
```

### Definieren eines Setzers für vorhandene Objekte mit `defineProperty`

Um einem _vorhandenen_ Objekt einen Setzer hinzuzufügen, verwenden Sie {{jsxref("Object.defineProperty()")}}.

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
- [Eigenschaftszugriffsoperatoren](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors)
- [Inkompatible ES5-Änderung: Literal-Getter- und -Setzer-Funktionen müssen jetzt genau null oder ein Argument haben](https://whereswalden.com/2010/08/22/incompatible-es5-change-literal-getter-and-setter-functions-must-now-have-exactly-zero-or-one-arguments/) von Jeff Walden (2010)
- [Weitere SpiderMonkey-Änderungen: antike, esoterische, sehr selten verwendete Syntax zum Erstellen von Gettern und Setzern wird entfernt](https://whereswalden.com/2010/04/16/more-spidermonkey-changes-ancient-esoteric-very-rarely-used-syntax-for-creating-getters-and-setters-is-being-removed/) von Jeff Walden (2010)
