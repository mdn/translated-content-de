---
title: set
slug: Web/JavaScript/Reference/Functions/set
l10n:
  sourceCommit: 389605121ed8ea78cc1878f31bbca6759cc7417d
---

Die **`set`**-Syntax bindet eine Objekteigenschaft an eine Funktion, die aufgerufen wird, wenn versucht wird, dieser Eigenschaft einen Wert zuzuweisen. Sie kann auch in [Klassen](/de/docs/Web/JavaScript/Reference/Classes) verwendet werden.

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

Es gelten einige zusätzliche Syntaxbeschränkungen:

- Ein Setter muss genau einen Parameter haben.

### Parameter

- `prop`
  - : Der Name der Eigenschaft, die an die angegebene Funktion gebunden werden soll. Wie bei anderen Eigenschaften in [Objektinitialisierern](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) kann dies ein String-Literal, ein Zahlenliteral oder ein Bezeichner sein.
- `val`
  - : Ein Alias für die Variable, die den Wert enthält, der `prop` zugewiesen werden soll.
- `expression`
  - : Sie können auch Ausdrücke für einen berechneten Eigenschaftsnamen verwenden, um ihn an die angegebene Funktion zu binden.

## Beschreibung

In JavaScript kann ein Setter verwendet werden, um eine Funktion auszuführen, sobald versucht wird, den Wert einer Eigenschaft zu ändern. Setter werden meist zusammen mit Gettern verwendet.

Eine Objekteigenschaft ist entweder eine Dateneigenschaft oder eine Accessor-Eigenschaft, kann aber nicht beides zugleich sein. Weitere Informationen finden Sie unter {{jsxref("Object.defineProperty()")}}. Mit der Setter-Syntax können Sie die Setter-Funktion in einem Objektinitialisierer angeben.

```js
const obj = {
  set prop(val) {
    // setter, the code executed when setting obj.prop
  },
};
```

Eigenschaften, die mit dieser Syntax definiert werden, sind eigene Eigenschaften des erstellten Objekts. Sie sind konfigurierbar und aufzählbar.

## Beispiele

### Einen Setter für neue Objekte in Objektinitialisierern definieren

Das folgende Beispiel definiert eine Pseudoeigenschaft `current` des Objekts `language`. Wenn `current` ein Wert zugewiesen wird, wird `log` mit diesem Wert aktualisiert:

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

Beachten Sie, dass `current` keinen Getter hat. Jeder Versuch, auf die Eigenschaft zuzugreifen, ergibt `undefined`.

### Setter in Klassen verwenden

Mit genau derselben Syntax können Sie öffentliche Instanz-Setter definieren, die auf Klasseninstanzen verfügbar sind. In Klassen benötigen Sie zwischen Methoden kein Komma als Trennzeichen.

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

Setter-Eigenschaften werden auf der Eigenschaft `prototype` der Klasse definiert und somit von allen Instanzen der Klasse gemeinsam genutzt. Anders als Setter-Eigenschaften in Objektliteralen sind Setter-Eigenschaften in Klassen nicht aufzählbar.

Statische Setter und private Setter verwenden ähnliche Syntaxformen. Diese werden auf den Seiten zu [`static`](/de/docs/Web/JavaScript/Reference/Classes/static) und [privaten Elementen](/de/docs/Web/JavaScript/Reference/Classes/Private_elements) beschrieben.

### Einen Setter mit dem Operator `delete` entfernen

Wenn Sie den Setter entfernen möchten, können Sie ihn einfach mit {{jsxref("delete")}} löschen:

```js
delete language.current;
```

### Einen Setter für bestehende Objekte mit `defineProperty` definieren

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

### Einen berechneten Eigenschaftsnamen verwenden

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

- [Arbeiten mit Objekten](/de/docs/Web/JavaScript/Guide/Working_with_objects) – Leitfaden
- [Funktionen](/de/docs/Web/JavaScript/Reference/Functions)
- [`get`](/de/docs/Web/JavaScript/Reference/Functions/get)
- {{jsxref("Object.defineProperty()")}}
- [Objektinitialisierer](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer)
- {{jsxref("Statements/class", "class")}}
- [Eigenschaftszugriff](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors)
- [Inkompatible Änderung in ES5: Getter- und Setter-Funktionen in Literalen müssen nun genau null beziehungsweise ein Argument haben](https://whereswalden.com/2010/08/22/incompatible-es5-change-literal-getter-and-setter-functions-must-now-have-exactly-zero-or-one-arguments/) von Jeff Walden (2010)
- [Weitere Änderungen an SpiderMonkey: Eine alte, selten verwendete Syntax zum Erstellen von Gettern und Settern wird entfernt](https://whereswalden.com/2010/04/16/more-spidermonkey-changes-ancient-esoteric-very-rarely-used-syntax-for-creating-getters-and-setters-is-being-removed/) von Jeff Walden (2010)
