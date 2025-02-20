---
title: get
slug: Web/JavaScript/Reference/Functions/get
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{jsSidebar("Functions")}}

Die **`get`**-Syntax bindet eine Objekteigenschaft an eine Funktion, die aufgerufen wird, wenn auf diese Eigenschaft zugegriffen wird. Sie kann auch in [Klassen](/de/docs/Web/JavaScript/Reference/Classes) verwendet werden.

{{InteractiveExample("JavaScript Demo: Functions Getter")}}

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

Es gibt einige zusätzliche Syntaxeinschränkungen:

- Ein Getter muss genau null Parameter haben.

### Parameter

- `prop`
  - : Der Name der Eigenschaft, die mit der angegebenen Funktion verknüpft werden soll. Ähnlich wie andere Eigenschaften in [Objektinitialisierern](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) kann es sich dabei um einen String-Literal, einen Zahlen-Literal oder einen Bezeichner handeln.
- `expression`
  - : Sie können auch Ausdrücke für einen berechneten Eigenschaftsnamen verwenden, die mit der angegebenen Funktion verknüpft werden sollen.

## Beschreibung

Manchmal ist es wünschenswert, Zugriff auf eine Eigenschaft zu erlauben, die einen dynamisch berechneten Wert zurückgibt, oder Sie möchten den Status einer internen Variablen widerspiegeln, ohne explizite Methodenaufrufe zu erfordern. In JavaScript kann dies mithilfe eines _Getters_ erreicht werden.

Eine Objekteigenschaft ist entweder eine Daten-Eigenschaft oder eine Accessor-Eigenschaft, kann jedoch nicht beides gleichzeitig sein. Lesen Sie {{jsxref("Object.defineProperty()")}} für weitere Informationen. Die Getter-Syntax erlaubt es, die Getter-Funktion in einem Objektinitialisierer zu spezifizieren.

```js
const obj = {
  get prop() {
    // getter, the code executed when reading obj.prop
    return someValue;
  },
};
```

Eigenschaften, die mit dieser Syntax definiert werden, sind eigene Eigenschaften des erstellten Objekts und sind konfigurierbar und aufzählbar.

## Beispiele

### Definition eines Getters in neuen Objekten mit Objektinitialisierern

Dies erstellt eine Pseudo-Eigenschaft `latest` für das Objekt `obj`, die das letzte Array-Element in `log` zurückgibt.

```js
const obj = {
  log: ["example", "test"],
  get latest() {
    return this.log.at(-1);
  },
};
console.log(obj.latest); // "test"
```

Beachten Sie, dass ein Versuch, einen Wert zu `latest` zuzuweisen, keinen Effekt hat.

### Verwendung von Gettern in Klassen

Sie können die gleiche Syntax verwenden, um öffentliche Instanz-Getter zu definieren, die in Klasseninstanzen verfügbar sind. In Klassen benötigen Sie kein Komma als Trennzeichen zwischen Methoden.

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

Getter-Eigenschaften werden auf der `prototype`-Eigenschaft der Klasse definiert und sind daher von allen Instanzen der Klasse gemeinsam genutzt. Im Gegensatz zu Getter-Eigenschaften in Objektliteralen sind Getter-Eigenschaften in Klassen nicht aufzählbar.

Statische Getter und private Getter verwenden ähnliche Syntaxen, die auf den Seiten zu [`static`](/de/docs/Web/JavaScript/Reference/Classes/static) und [privaten Eigenschaften](/de/docs/Web/JavaScript/Reference/Classes/Private_properties) beschrieben werden.

### Löschen eines Getters mit dem `delete`-Operator

Wenn Sie den Getter entfernen möchten, können Sie ihn einfach {{jsxref("Operators/delete", "löschen")}}:

```js
delete obj.latest;
```

### Definition eines Getters auf bestehenden Objekten mit `defineProperty`

Um einem bestehenden Objekt später jederzeit einen Getter hinzuzufügen, verwenden Sie {{jsxref("Object.defineProperty()")}}.

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

### Definition von statischen Gettern

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

### Intelligente / sich selbst überschreibende / verzögerte Getter

Getter bieten Ihnen die Möglichkeit, eine Eigenschaft eines Objekts zu _definieren_, berechnen jedoch den Wert der Eigenschaft erst, wenn darauf zugegriffen wird. Ein Getter verschiebt die Berechnungskosten des Werts, bis der Wert benötigt wird. Falls er nie benötigt wird, entstehen keine Kosten.

Eine zusätzliche Optimierungstechnik, um die Berechnung eines Eigenschaftswerts zu verzögern oder zu verzögern und ihn für späteren Zugriff zwischenzuspeichern, sind _intelligente_ (oder _[memoisierte](https://en.wikipedia.org/wiki/Memoization)_) Getter. Der Wert wird beim ersten Aufruf des Getters berechnet und anschließend zwischengespeichert, sodass nachfolgende Zugriffe auf den zwischengespeicherten Wert zurückgreifen, ohne ihn neu zu berechnen. Diese Technik ist in folgenden Situationen nützlich:

- Wenn die Berechnung eines Eigenschaftswertes teuer ist (viel RAM oder CPU-Zeit benötigt, Worker-Threads startet, eine Remote-Datei abruft usw.).
- Wenn der Wert jetzt nicht benötigt wird. Er wird später verwendet, oder in manchen Fällen wird er überhaupt nicht verwendet.
- Wenn er verwendet wird, wird er mehrmals abgerufen, und es besteht keine Notwendigkeit, den unveränderlichen Wert neu zu berechnen.

> [!NOTE]
> Dies bedeutet, dass Sie keinen verzögerten Getter für eine Eigenschaft schreiben sollten, deren Wert Sie erwarten, dass er sich ändert. Ein verzögerter Getter berechnet den Wert nicht neu.
>
> Beachten Sie, dass Getter von Natur aus nicht „verzögert“ oder „memoisiert“ sind; Sie müssen diese Technik implementieren, wenn Sie dieses Verhalten wünschen.

Im folgenden Beispiel hat das Objekt einen Getter als eigene Eigenschaft. Beim Abrufen der Eigenschaft wird die Eigenschaft aus dem Objekt entfernt und erneut hinzugefügt, diesmal jedoch implizit als Daten-Eigenschaft. Abschließend wird der Wert zurückgegeben.

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

Während die Verwendung des `get`-Schlüsselworts und {{jsxref("Object.defineProperty()")}} ähnliche Ergebnisse liefert, gibt es einen subtilen Unterschied zwischen den beiden, wenn sie auf {{jsxref("classes")}} angewendet werden.

Bei der Verwendung von `get` wird die Eigenschaft auf dem Prototyp der Instanz definiert, während bei der Verwendung von {{jsxref("Object.defineProperty()")}} die Eigenschaft auf der Instanz selbst definiert wird, auf die sie angewendet wird.

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

- [Arbeiten mit Objekten](/de/docs/Web/JavaScript/Guide/Working_with_objects)-Leitfaden
- [Funktionen](/de/docs/Web/JavaScript/Reference/Functions)
- [`set`](/de/docs/Web/JavaScript/Reference/Functions/set)
- {{jsxref("Object.defineProperty()")}}
- [Objektinitialisierer](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer)
- {{jsxref("Statements/class", "class")}}
- [Eigenschafts-Accessor](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors)
- [Inkompatible ES5-Änderung: literal getter and setter functions must now have exactly zero or one arguments](https://whereswalden.com/2010/08/22/incompatible-es5-change-literal-getter-and-setter-functions-must-now-have-exactly-zero-or-one-arguments/) von Jeff Walden (2010)
- [Mehr SpiderMonkey-Änderungen: ancient, esoteric, very rarely used syntax for creating getters and setters is being removed](https://whereswalden.com/2010/04/16/more-spidermonkey-changes-ancient-esoteric-very-rarely-used-syntax-for-creating-getters-and-setters-is-being-removed/) von Jeff Walden (2010)
