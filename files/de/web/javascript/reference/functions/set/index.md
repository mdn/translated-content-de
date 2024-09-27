---
title: set
slug: Web/JavaScript/Reference/Functions/set
l10n:
  sourceCommit: 530c492222dd409302f3a1ab0e8ee828514e04db
---

{{jsSidebar("Functions")}}

Die **`set`**-Syntax bindet eine Objekteigenschaft an eine Funktion, die aufgerufen wird, wenn versucht wird, diese Eigenschaft zu setzen. Sie kann auch in [Klassen](/de/docs/Web/JavaScript/Reference/Classes) verwendet werden.

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
  - : Der Name der Eigenschaft, die an die gegebene Funktion gebunden wird. Wie andere Eigenschaften in [Objektinitialisierern](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) kann es ein Zeichenfolgenliteral, eine Zahlenliteral oder ein Bezeichner sein.
- `val`
  - : Ein Alias für die Variable, die den Wert enthält, der `prop` zugewiesen werden soll.
- `expression`
  - : Sie können auch Ausdrücke für einen berechneten Eigenschaftsnamen verwenden, um an die gegebene Funktion zu binden.

## Beschreibung

In JavaScript kann ein Setter verwendet werden, um eine Funktion auszuführen, wann immer versucht wird, den Wert einer Eigenschaft zu ändern. Setter werden am häufigsten in Verbindung mit Gettern verwendet.

Eine Objekteigenschaft ist entweder eine Dateneigenschaft oder eine Zugriffseigenschaft, aber sie kann nicht gleichzeitig beides sein. Lesen Sie {{jsxref("Object.defineProperty()")}} für mehr Informationen. Die Setter-Syntax erlaubt es Ihnen, die Setter-Funktion in einem Objektinitialisierer zu spezifizieren.

```js
const obj = {
  set prop() {
    // setter, the code executed when setting obj.prop
  },
}
```

Eigenschaften, die mit dieser Syntax definiert werden, sind eigene Eigenschaften des erstellten Objekts und sie sind konfigurierbar und aufzählbar.

## Beispiele

### Definieren eines Setters in neuen Objekten mit Objektinitialisierern

Das folgende Beispiel definiert eine Pseudo-Eigenschaft `current` des Objekts `language`. Wenn `current` ein Wert zugewiesen wird, aktualisiert es `log` mit diesem Wert:

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

### Verwenden von Setzern in Klassen

Sie können die exakt gleiche Syntax verwenden, um öffentliche Instanz-Setter zu definieren, die in Klasseninstanzen verfügbar sind. In Klassen benötigen Sie kein Komma als Trennzeichen zwischen den Methoden.

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

Setter-Eigenschaften sind auf der `prototype`-Eigenschaft der Klasse definiert und werden daher von allen Instanzen der Klasse geteilt. Anders als Setter-Eigenschaften in Objektliteralen sind Setter-Eigenschaften in Klassen nicht aufzählbar.

Statische Setter und private Setter verwenden ähnliche Syntaxen, die auf den Seiten [`static`](/de/docs/Web/JavaScript/Reference/Classes/static) und [private properties](/de/docs/Web/JavaScript/Reference/Classes/Private_properties) beschrieben werden.

### Entfernen eines Setters mit dem `delete`-Operator

Wenn Sie den Setter entfernen möchten, können Sie ihn einfach mit {{jsxref("Operators/delete", "delete")}} löschen:

```js
delete language.current;
```

### Definieren eines Setters auf bestehenden Objekten mit `defineProperty`

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
- [Objektinitialisierer](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer)
- {{jsxref("Statements/class", "class")}}
- [Eigenschaftszugriffs-Funktionen](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors)
- [Inkompatible ES5-Änderung: Literal-Getter- und -Setter-Funktionen müssen jetzt genau null oder ein Argument haben](https://whereswalden.com/2010/08/22/incompatible-es5-change-literal-getter-and-setter-functions-must-now-have-exactly-zero-or-one-arguments/) von Jeff Walden (2010)
- [Weitere SpiderMonkey-Änderungen: Alte, esoterische, sehr selten verwendete Syntax zur Erstellung von Gettern und Setzern wird entfernt](https://whereswalden.com/2010/04/16/more-spidermonkey-changes-ancient-esoteric-very-rarely-used-syntax-for-creating-getters-and-setters-is-being-removed/) von Jeff Walden (2010)
