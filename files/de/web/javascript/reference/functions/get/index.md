---
title: get
slug: Web/JavaScript/Reference/Functions/get
l10n:
  sourceCommit: 48184c65d7e6d59e867806d9e349661c737bdc4b
---

{{jsSidebar("Functions")}}

Die **`get`**-Syntax bindet eine Objekt-Eigenschaft an eine Funktion, die aufgerufen wird, wenn auf diese Eigenschaft zugegriffen wird. Sie kann auch in [Klassen](/de/docs/Web/JavaScript/Reference/Classes) verwendet werden.

{{InteractiveExample("JavaScript Demo: Getter declaration")}}

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

Es gibt einige zusätzliche Einschränkungen bei der Syntax:

- Ein Getter muss genau null Parameter haben.

### Parameter

- `prop`
  - : Der Name der Eigenschaft, die an die gegebene Funktion gebunden werden soll. Genauso wie andere Eigenschaften in [Objektinitialisierern](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) kann es sich um ein String-Literal, ein Nummer-Literal oder einen Bezeichner handeln.
- `expression`
  - : Sie können auch Ausdrücke für einen berechneten Eigenschaftsnamen verwenden, um ihn an die gegebene Funktion zu binden.

## Beschreibung

Manchmal ist es wünschenswert, den Zugriff auf eine Eigenschaft zu erlauben, die einen dynamisch berechneten Wert zurückgibt, oder Sie möchten den Status einer internen Variable reflektieren, ohne explizite Methodenaufrufe zu benötigen. In JavaScript kann dies durch die Verwendung eines _Getters_ erreicht werden.

Eine Objekteigenschaft ist entweder eine Dateneigenschaft oder eine Zugriffseigenschaft, aber sie kann nicht gleichzeitig beides sein. Lesen Sie {{jsxref("Object.defineProperty()")}} für weitere Informationen. Die Getter-Syntax ermöglicht es Ihnen, die Getter-Funktion in einem Objekt-Initializer festzulegen.

```js
const obj = {
  get prop() {
    // getter, the code executed when reading obj.prop
    return someValue;
  },
};
```

Eigenschaften, die mit dieser Syntax definiert sind, sind eigene Eigenschaften des erstellten Objekts und sie sind konfigurierbar und aufzählbar.

## Beispiele

### Definieren eines Getters auf neuen Objekten in Objekt-Initialisierern

Dies wird eine Pseudo-Eigenschaft `latest` für das Objekt `obj` erstellen, die das letzte Array-Element in `log` zurückgeben wird.

```js
const obj = {
  log: ["example", "test"],
  get latest() {
    return this.log.at(-1);
  },
};
console.log(obj.latest); // "test"
```

Beachten Sie, dass ein Versuch, `latest` einen Wert zuzuweisen, diesen nicht ändern wird.

### Verwenden von Gettern in Klassen

Sie können genau die gleiche Syntax verwenden, um öffentliche Instanz-Getter zu definieren, die auf Klasseninstanzen verfügbar sind. In Klassen benötigen Sie kein Komma-Trennzeichen zwischen Methoden.

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

Getter-Eigenschaften sind auf der `prototype`-Eigenschaft der Klasse definiert und werden somit von allen Instanzen der Klasse geteilt. Im Gegensatz zu Getter-Eigenschaften in Objektliteralen sind Getter-Eigenschaften in Klassen nicht aufzählbar.

Statische Getter und private Getter verwenden ähnliche Syntaxen, die auf den Seiten [`static`](/de/docs/Web/JavaScript/Reference/Classes/static) und [private Elemente](/de/docs/Web/JavaScript/Reference/Classes/Private_elements) beschrieben werden.

### Löschen eines Getters mit dem `delete`-Operator

Wenn Sie den Getter entfernen möchten, können Sie ihn einfach mit {{jsxref("Operators/delete", "delete")}} löschen:

```js
delete obj.latest;
```

### Definieren eines Getters auf bestehenden Objekten mit `defineProperty`

Um später jederzeit einen Getter zu einem bestehenden Objekt hinzuzufügen, verwenden Sie
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

### Verwenden eines berechneten Eigenschaftsnamen

```js
const expr = "foo";

const obj = {
  get [expr]() {
    return "bar";
  },
};

console.log(obj.foo); // "bar"
```

### Definieren von statischen Gettern

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

### Intelligente / selbstüberschreibende / verzögerte Getter

Getter bieten Ihnen eine Möglichkeit, eine Eigenschaft eines Objekts _nicht_ sofort zu berechnen, bis darauf zugegriffen wird. Ein Getter verschiebt die Berechnungskosten, bis der Wert benötigt wird. Wenn er nie benötigt wird, zahlen Sie nie die Kosten.

Eine zusätzliche Optimierungstechnik, um die Berechnung eines Eigenschaftswertes zu verzögern oder sie zu speichern, sind _intelligente_ (oder _[memoized](https://en.wikipedia.org/wiki/Memoization)_) Getter. Der Wert wird beim ersten Aufruf des Getters berechnet und dann gespeichert, sodass nachfolgende Zugriffe den gespeicherten Wert zurückgeben, ohne ihn neu zu berechnen. Dies ist nützlich in folgenden Situationen:

- Wenn die Berechnung eines Eigenschaftswertes teuer ist (viel RAM oder CPU-Zeit benötigt, Worker-Threads erstellt, entfernte Dateien abruft usw.).
- Wenn der Wert nicht jetzt benötigt wird. Er wird später verwendet, oder in einigen Fällen wird er überhaupt nicht verwendet.
- Wenn er verwendet wird, wird er mehrfach zugegriffen, und es besteht keine Notwendigkeit, den Wert neu zu berechnen, da er nie geändert wird oder nicht neu berechnet werden sollte.

> [!NOTE]
> Das bedeutet, dass Sie keinen verzögerten Getter für eine Eigenschaft schreiben sollten, deren Wert sich ändern soll, da der Wert bei einem verzögerten Getter nicht neu berechnet wird.
>
> Beachten Sie, dass Getter von Natur aus nicht "verzögert" oder "memoized" sind; Sie müssen diese Technik implementieren, wenn Sie dieses Verhalten wünschen.

Im folgenden Beispiel hat das Objekt einen Getter als seine eigene Eigenschaft. Beim Abrufen der Eigenschaft wird die Eigenschaft aus dem Objekt entfernt und erneut hinzugefügt, diesmal jedoch implizit als Dateneigenschaft. Schließlich wird der Wert zurückgegeben.

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

Während die Verwendung des `get`-Schlüsselworts und {{jsxref("Object.defineProperty()")}} ähnliche Ergebnisse haben, gibt es einen kleinen Unterschied zwischen den beiden, wenn sie auf {{jsxref("classes")}} verwendet werden.

Bei Verwendung von `get` wird die Eigenschaft auf dem Prototyp der Instanz definiert, während sie bei Verwendung von {{jsxref("Object.defineProperty()")}} auf der Instanz definiert wird, auf die sie angewendet wird.

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
- [Objekt-Initialisierer](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer)
- {{jsxref("Statements/class", "class")}}
- [Eigenschaftszugriffe](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors)
- [Inkompatible ES5-Änderung: Literal-Getter- und Setter-Funktionen müssen jetzt genau null oder ein Argument haben](https://whereswalden.com/2010/08/22/incompatible-es5-change-literal-getter-and-setter-functions-must-now-have-exactly-zero-or-one-arguments/) von Jeff Walden (2010)
- [Weitere SpiderMonkey-Änderungen: antike, esoterische, sehr selten verwendete Syntax zur Erstellung von Gettern und Settern wird entfernt](https://whereswalden.com/2010/04/16/more-spidermonkey-changes-ancient-esoteric-very-rarely-used-syntax-for-creating-getters-and-setters-is-being-removed/) von Jeff Walden (2010)
