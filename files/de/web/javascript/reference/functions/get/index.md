---
title: get
slug: Web/JavaScript/Reference/Functions/get
l10n:
  sourceCommit: 1b2c87c20466d2a3eec9b3551c269f9aff8f5762
---

{{jsSidebar("Functions")}}

Die **`get`**-Syntax bindet eine Objekt-Eigenschaft an eine Funktion, die aufgerufen wird, wenn diese Eigenschaft abgefragt wird. Sie kann auch in [Klassen](/de/docs/Web/JavaScript/Reference/Classes) verwendet werden.

{{EmbedInteractiveExample("pages/js/functions-getter.html")}}

## Syntax

```js-nolint
{ get prop() { /* … */ } }
{ get [expression]() { /* … */ } }
```

Es gibt einige zusätzliche Syntaxeinschränkungen:

- Ein Getter muss genau null Parameter haben.

### Parameter

- `prop`
  - : Der Name der Eigenschaft, die an die gegebene Funktion gebunden werden soll. Wie bei anderen Eigenschaften in [Objektinitialisierern](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) kann es ein Stringliteral, ein Zahlenliteral oder ein Bezeichner sein.
- `expression`
  - : Sie können auch Ausdrücke für einen berechneten Eigenschaftsnamen verwenden, um ihn an die gegebene Funktion zu binden.

## Beschreibung

Manchmal ist es wünschenswert, den Zugriff auf eine Eigenschaft zu ermöglichen, die einen dynamisch berechneten Wert zurückgibt, oder Sie möchten den Status einer internen Variablen widerspiegeln, ohne explizite Methodenaufrufe zu erfordern. In JavaScript kann dies mit der Verwendung eines _Getters_ erreicht werden.

Eine Objekteigenschaft ist entweder eine Dateneigenschaft oder eine Zugriffseigenschaft, aber sie kann nicht gleichzeitig beides sein. Lesen Sie {{jsxref("Object.defineProperty()")}} für weitere Informationen. Die Getter-Syntax ermöglicht es Ihnen, die Getter-Funktion in einem Objektinitialisierer anzugeben.

```js
const obj = {
  get prop() {
    // getter, the code executed when reading obj.prop
    return someValue;
  },
};
```

Eigenschaften, die mit dieser Syntax definiert werden, sind eigene Eigenschaften des erstellten Objekts und sie sind konfigurierbar und aufzählbar.

## Beispiele

### Definieren eines Getters für neue Objekte in Objektinitialisierern

Dies wird eine Pseudo-Eigenschaft `latest` für das Objekt `obj` erstellen, die das letzte Array-Element in `log` zurückgibt.

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

Sie können dieselbe Syntax verwenden, um öffentliche Instanzgetter zu definieren, die in Klasseninstanzen verfügbar sind. In Klassen benötigen Sie kein Komma als Trennzeichen zwischen den Methoden.

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

Getter-Eigenschaften sind auf der `prototype`-Eigenschaft der Klasse definiert und werden daher von allen Instanzen der Klasse geteilt. Im Gegensatz zu Getter-Eigenschaften in Objektliteralen sind Getter-Eigenschaften in Klassen nicht aufzählbar.

Statische Getter und private Getter verwenden ähnliche Syntaxen, die auf den Seiten zu [`static`](/de/docs/Web/JavaScript/Reference/Classes/static) und [privaten Eigenschaften](/de/docs/Web/JavaScript/Reference/Classes/Private_properties) beschrieben werden.

### Löschen eines Getters mit dem `delete` Operator

Wenn Sie den Getter entfernen möchten, können Sie ihn einfach {{jsxref("Operators/delete", "löschen")}}:

```js
delete obj.latest;
```

### Definieren eines Getters für bestehende Objekte mit `defineProperty`

Um einem bestehenden Objekt später zu einem beliebigen Zeitpunkt einen Getter hinzuzufügen, verwenden Sie {{jsxref("Object.defineProperty()")}}.

```js
const o = { a: 0 };

Object.defineProperty(o, "b", {
  get() {
    return this.a + 1;
  },
});

console.log(o.b); // Runs the getter, which yields a + 1 (which is 1)
```

### Verwendung eines berechneten Eigenschaftsnamens

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

### Intelligente / selbstüberschreibende / verzögerte Getter

Getter bieten Ihnen eine Möglichkeit, eine Eigenschaft eines Objekts zu _definieren_, aber sie _berechnen_ den Wert der Eigenschaft erst, wenn er abgefragt wird. Ein Getter verzögert die Kosten der Berechnung des Wertes, bis der Wert benötigt wird. Wenn er nie benötigt wird, entstehen auch keine Kosten.

Eine zusätzliche Optimierungstechnik, um die Berechnung eines Eigenschaftswertes zu verzögern oder zu verzögern und für den späteren Zugriff zwischenzuspeichern, sind _intelligente_ (oder _[memoisierte](https://en.wikipedia.org/wiki/Memoization)_) Getter. Der Wert wird beim ersten Aufruf des Getters berechnet und dann zwischengespeichert, sodass nachfolgende Zugriffe den zwischengespeicherten Wert ohne erneute Berechnung zurückgeben. Dies ist in den folgenden Situationen nützlich:

- Wenn die Berechnung eines Eigenschaftswertes aufwendig ist (viel RAM oder CPU-Zeit in Anspruch nimmt, Arbeitsthreads erzeugt, eine Remote-Datei abruft usw.).
- Wenn der Wert gerade nicht benötigt wird. Er wird später verwendet, oder in manchen Fällen wird er überhaupt nicht verwendet.
- Wenn er verwendet wird, wird er mehrmals abgerufen und es besteht keine Notwendigkeit, den Wert, der sich nie ändern wird oder nicht neu berechnet werden sollte, erneut zu berechnen.

> [!NOTE]
> Dies bedeutet, dass Sie keinen verzögerten Getter für eine Eigenschaft schreiben sollten, deren Wert Sie erwarten zu ändern, da der Getter, wenn er verzögert ist, den Wert nicht neu berechnet.
>
> Beachten Sie, dass Getter von Natur aus nicht "verzögert" oder "memoisiert" sind; Sie müssen diese Technik implementieren, wenn Sie dieses Verhalten wünschen.

Im folgenden Beispiel hat das Objekt einen Getter als seine eigene Eigenschaft. Beim Abrufen der Eigenschaft wird diese Eigenschaft aus dem Objekt entfernt und erneut hinzugefügt, diesmal jedoch implizit als Dateneigenschaft. Schließlich wird der Wert zurückgegeben.

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

Während die Verwendung des `get`-Schlüsselworts und {{jsxref("Object.defineProperty()")}} ähnliche Ergebnisse hat, besteht ein subtiler Unterschied zwischen den beiden, wenn sie auf {{jsxref("classes")}} angewendet werden.

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
- [Objektinitialisierer](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer)
- {{jsxref("Statements/class", "class")}}
- [Eigenschaftszugriffsberechtiger](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors)
- [Inkompatible ES5-Änderung: Literal-Getter- und Setter-Funktionen müssen jetzt genau null oder ein Argument haben](https://whereswalden.com/2010/08/22/incompatible-es5-change-literal-getter-and-setter-functions-must-now-have-exactly-zero-or-one-arguments/) von Jeff Walden (2010)
- [Weitere SpiderMonkey-Änderungen: Alte, esoterische, sehr selten verwendete Syntax für die Erstellung von Gettern und Settern wird entfernt](https://whereswalden.com/2010/04/16/more-spidermonkey-changes-ancient-esoteric-very-rarely-used-syntax-for-creating-getters-and-setters-is-being-removed/) von Jeff Walden (2010)
