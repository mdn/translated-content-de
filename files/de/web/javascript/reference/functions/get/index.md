---
title: get
slug: Web/JavaScript/Reference/Functions/get
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Die **`get`**-Syntax bindet eine Objekteigenschaft an eine Funktion, die aufgerufen wird, wenn diese Eigenschaft abgefragt wird. Sie kann auch in [Klassen](/de/docs/Web/JavaScript/Reference/Classes) verwendet werden.

{{InteractiveExample("JavaScript Demo: Getter Declaration")}}

```js interactive-example
const obj = {
  log: ["a", "b", "c"],
  get latest() {
    return this.log[this.log.length - 1];
  },
};

console.log(obj.latest);
// Expected output: "c"
```

## Syntax

```js-nolint
{ get prop() { /* … */ } }
{ get [expression]() { /* … */ } }
```

Es gibt einige zusätzliche Syntaxbeschränkungen:

- Ein Getter muss genau null Parameter haben.

### Parameter

- `prop`
  - : Der Name der Eigenschaft, die an die gegebene Funktion gebunden werden soll. Ebenso wie andere Eigenschaften in [Objektinitialisierern](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) kann es ein String-Literal, ein Zahlenliteral oder ein Bezeichner sein.
- `expression`
  - : Sie können auch Ausdrücke für einen berechneten Eigenschaftsnamen verwenden, um die gegebene Funktion zu binden.

## Beschreibung

Manchmal ist es wünschenswert, Zugriff auf eine Eigenschaft zu ermöglichen, die einen dynamisch berechneten Wert zurückgibt, oder man möchte den Status einer internen Variablen widerspiegeln, ohne explizite Methodenaufrufe zu benötigen. In JavaScript kann dies mit einem _Getter_ erreicht werden.

Eine Objekteigenschaft ist entweder eine Dateneigenschaft oder eine Zugriffseigenschaft, kann aber nicht gleichzeitig beides sein. Lesen Sie {{jsxref("Object.defineProperty()")}} für weitere Informationen. Die Getter-Syntax ermöglicht es Ihnen, die Getter-Funktion in einem Objektinitialisierer zu spezifizieren.

```js
const obj = {
  get prop() {
    // getter, the code executed when reading obj.prop
    return someValue;
  },
};
```

Eigenschaften, die mit dieser Syntax definiert werden, sind eigene Eigenschaften des erstellten Objekts und sie sind konfigurierbar und auflistbar.

## Beispiele

### Definieren eines Getters auf neuen Objekten in Objektinitialisierern

Dies wird eine Pseudoeigenschaft `latest` für das Objekt `obj` erstellen, die das letzte Array-Element in `log` zurückgeben wird.

```js
const obj = {
  log: ["example", "test"],
  get latest() {
    return this.log.at(-1);
  },
};
console.log(obj.latest); // "test"
```

Beachten Sie, dass der Versuch, `latest` einen Wert zuzuweisen, ihn nicht ändern wird.

### Verwendung von Gettern in Klassen

Sie können die exakt gleiche Syntax verwenden, um öffentliche Instanz-Getter zu definieren, die auf Klasseninstanzen verfügbar sind. In Klassen brauchen Sie kein Komma als Trennzeichen zwischen den Methoden.

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

Getter-Eigenschaften werden auf der `prototype`-Eigenschaft der Klasse definiert und werden somit von allen Instanzen der Klasse geteilt. Im Gegensatz zu Getter-Eigenschaften in Objektliteralen sind Getter-Eigenschaften in Klassen nicht auflistbar.

Statische Getter und private Getter verwenden ähnliche Syntaxen, die auf den Seiten zu [`static`](/de/docs/Web/JavaScript/Reference/Classes/static) und [private elements](/de/docs/Web/JavaScript/Reference/Classes/Private_elements) beschrieben sind.

### Löschen eines Getters mit dem `delete`-Operator

Wenn Sie den Getter entfernen möchten, können Sie ihn einfach mit {{jsxref("Operators/delete", "delete")}} entfernen:

```js
delete obj.latest;
```

### Definieren eines Getters auf vorhandenen Objekten mit `defineProperty`

Um später jederzeit einem vorhandenen Objekt einen Getter hinzuzufügen, verwenden Sie
{{jsxref("Object.defineProperty()")}}.

```js
const o = { a: 0 };

Object.defineProperty(o, "b", {
  get() {
    return this.a + 1;
  },
});

console.log(o.b); // Runs the getter, which yields a + 1 (which is 1)
```

### Verwendung eines berechneten Eigenschaftsnamen

```js
const expr = "foo";

const obj = {
  get [expr]() {
    return "bar";
  },
};

console.log(obj.foo); // "bar"
```

### Definieren statischer Getter

```js
class MyConstants {
  static get foo() {
    return "foo";
  }
}

console.log(MyConstants.foo); // 'foo'
MyConstants.foo = "bar";
console.log(MyConstants.foo); // 'foo', a static getter's value cannot be changed
```

### Intelligente / selbstüberschreibende / faule Getter

Getter bieten Ihnen eine Möglichkeit, eine Eigenschaft eines Objekts zu _definieren_, berechnen jedoch den Wert der Eigenschaft erst, wenn auf sie zugegriffen wird. Ein Getter verzögert die Berechnungskosten des Wertes, bis der Wert benötigt wird. Wenn er nie benötigt wird, entstehen auch keine Kosten.

Eine zusätzliche Optimierungstechnik, um die Berechnung eines Eigenschaftswertes zu verzögern oder zu verschieben und ihn für späteren Zugriff im Cache zu speichern, sind _intelligente_ (oder _[memoisierte](https://en.wikipedia.org/wiki/Memoization)_) Getter. Der Wert wird das erste Mal berechnet, wenn der Getter aufgerufen wird, und wird dann im Cache gespeichert, sodass nachfolgende Zugriffe den zwischengespeicherten Wert ohne Neuberechnung zurückgeben. Dies ist in folgenden Situationen nützlich:

- Wenn die Berechnung eines Eigenschaftswertes kostspielig ist (viel RAM oder CPU-Zeit benötigt, Arbeitsthreads erstellt, entfernte Dateien abruft usw.).
- Wenn der Wert nicht sofort benötigt wird. Er wird später verwendet oder gar nicht.
- Wenn er verwendet wird, wird er mehrfach abgerufen, und es ist nicht nötig, dass der Wert, der nie geändert wird oder nicht geändert werden soll, erneut berechnet wird.

> [!NOTE]
> Das bedeutet, dass Sie keinen faulen Getter für eine Eigenschaft schreiben sollten, deren Wert Sie erwarten, dass er sich ändert, da der Getter, wenn er faul ist, den Wert nicht neu berechnet.
>
> Beachten Sie, dass Getter von Natur aus nicht "faul" oder "memoisiert" sind; Sie müssen diese Technik implementieren, wenn Sie dieses Verhalten wünschen.

Im folgenden Beispiel hat das Objekt einen Getter als eigene Eigenschaft. Beim Abrufen der Eigenschaft wird die Eigenschaft aus dem Objekt entfernt und erneut hinzugefügt, diesmal jedoch implizit als Dateneigenschaft. Schließlich wird der Wert zurückgegeben.

```js
const obj = {
  get notifier() {
    delete this.notifier;
    this.notifier = document.getElementById("bookmarked-notification-anchor");
    return this.notifier;
  },
};
```

### get vs. defineProperty

Während die Verwendung des `get`-Schlüsselworts und {{jsxref("Object.defineProperty()")}} ähnliche Ergebnisse haben, gibt es einen subtilen Unterschied zwischen beiden, wenn sie in {{jsxref("classes")}} verwendet werden.

Bei der Verwendung von `get` wird die Eigenschaft auf dem Prototyp der Instanz definiert, während bei der Verwendung von {{jsxref("Object.defineProperty()")}} die Eigenschaft auf der Instanz definiert wird, auf die sie angewendet wird.

```js
class Example {
  get hello() {
    return "world";
  }
}

const obj = new Example();
console.log(obj.hello);
// "world"

console.log(Object.getOwnPropertyDescriptor(obj, "hello"));
// undefined

console.log(
  Object.getOwnPropertyDescriptor(Object.getPrototypeOf(obj), "hello"),
);
// { configurable: true, enumerable: false, get: function get hello() { return 'world'; }, set: undefined }
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Arbeiten mit Objekten](/de/docs/Web/JavaScript/Guide/Working_with_objects) Leitfaden
- [Funktionen](/de/docs/Web/JavaScript/Reference/Functions)
- [`set`](/de/docs/Web/JavaScript/Reference/Functions/set)
- {{jsxref("Object.defineProperty()")}}
- [Objektinitializer](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer)
- {{jsxref("Statements/class", "class")}}
- [Eigenschafts-Accessoren](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors)
- [Inkompatible ES5-Änderung: Literal-Getter- und Setter-Funktionen müssen jetzt genau null oder ein Argument haben](https://whereswalden.com/2010/08/22/incompatible-es5-change-literal-getter-and-setter-functions-must-now-have-exactly-zero-or-one-arguments/) von Jeff Walden (2010)
- [Weitere SpiderMonkey-Änderungen: Antike, esoterische, sehr selten verwendete Syntax zum Erstellen von Gettern und Settern wird entfernt](https://whereswalden.com/2010/04/16/more-spidermonkey-changes-ancient-esoteric-very-rarely-used-syntax-for-creating-getters-and-setters-is-being-removed/) von Jeff Walden (2010)
