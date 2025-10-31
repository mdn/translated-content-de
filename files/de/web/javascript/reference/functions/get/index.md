---
title: get
slug: Web/JavaScript/Reference/Functions/get
l10n:
  sourceCommit: 55326f330a6ae829494c7606b1bd47b2c0f9d888
---

Die **`get`**-Syntax bindet eine Objekt-Eigenschaft an eine Funktion, die aufgerufen wird, wenn diese Eigenschaft abgerufen wird. Sie kann auch in [Klassen](/de/docs/Web/JavaScript/Reference/Classes) verwendet werden.

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

Es gibt einige zusätzliche Syntaxeinschränkungen:

- Ein Getter muss genau null Parameter haben.

### Parameter

- `prop`
  - : Der Name der Eigenschaft, die an die angegebene Funktion gebunden werden soll. Wie bei anderen Eigenschaften in [Objektinitialisierern](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) kann es sich um ein String-Literal, ein Zahlenliteral oder einen Bezeichner handeln.
- `expression`
  - : Sie können auch Ausdrücke für einen berechneten Eigenschaftsnamen verwenden, um ihn an die gegebene Funktion zu binden.

## Beschreibung

Manchmal ist es wünschenswert, den Zugriff auf eine Eigenschaft zu ermöglichen, die einen dynamisch berechneten Wert zurückgibt, oder Sie möchten den Status einer internen Variablen widerspiegeln, ohne explizite Methodenaufrufe zu erfordern. In JavaScript kann dies durch die Verwendung eines _Getters_ erreicht werden.

Eine Objekteigenschaft ist entweder eine Dateneigenschaft oder eine Accessoreigenschaft, kann jedoch nicht gleichzeitig beides sein. Lesen Sie {{jsxref("Object.defineProperty()")}} für weitere Informationen. Die Getter-Syntax erlaubt es Ihnen, die Getter-Funktion in einem Objekt-Initializer zu spezifizieren.

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

### Definieren eines Getters bei neuen Objekten in Objektinitialisierern

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

Beachten Sie, dass der Versuch, `latest` einen Wert zuzuweisen, diesen nicht ändern wird.

### Verwendung von Gettern in Klassen

Sie können die exakt gleiche Syntax verwenden, um öffentliche Instanzgetter zu definieren, die auf Klasseninstanzen verfügbar sind. In Klassen benötigen Sie kein Komma als Trennzeichen zwischen Methoden.

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

Gettereigenschaften werden auf der `prototype`-Eigenschaft der Klasse definiert und werden daher von allen Instanzen der Klasse geteilt. Anders als Gettereigenschaften in Objektliteralen sind Gettereigenschaften in Klassen nicht aufzählbar.

Statische Getter und private Getter verwenden ähnliche Syntaxen, die auf den Seiten [`static`](/de/docs/Web/JavaScript/Reference/Classes/static) und [private elements](/de/docs/Web/JavaScript/Reference/Classes/Private_elements) beschrieben sind.

### Löschen eines Getters mit dem `delete`-Operator

Wenn Sie den Getter entfernen möchten, können Sie ihn einfach mit {{jsxref("Operators/delete", "delete")}} löschen:

```js
delete obj.latest;
```

### Definieren eines Getters auf bestehenden Objekten mit `defineProperty`

Um später jederzeit einen Getter zu einem bestehenden Objekt hinzuzufügen, verwenden Sie {{jsxref("Object.defineProperty()")}}.

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

### Intelligente / selbstüberschreibende / faule Getter

Getter geben Ihnen eine Möglichkeit, eine Eigenschaft eines Objekts _zu definieren_, aber sie _berechnen_ den Wert der Eigenschaft nicht, bis darauf zugegriffen wird. Ein Getter verzögert die Kosten der Berechnung des Wertes, bis der Wert benötigt wird. Wird er nie benötigt, zahlen Sie nie die Kosten.

Eine zusätzliche Optimierungstechnik, um die Berechnung eines Eigenschaftswerts zu verzögern oder diese für den späteren Zugriff zu cachen, sind _intelligente_ (oder _[memoisierte](https://en.wikipedia.org/wiki/Memoization)_) Getter. Der Wert wird das erste Mal, wenn der Getter aufgerufen wird, berechnet und dann zwischengespeichert, sodass spätere Zugriffe den zwischengespeicherten Wert zurückgeben, ohne ihn neu zu berechnen. Dies ist in folgenden Situationen nützlich:

- Wenn die Berechnung eines Eigenschaftswerts teuer ist (viel RAM oder CPU-Zeit benötigt, Worker-Threads startet, eine entfernte Datei abruft, etc.).
- Wenn der Wert jetzt nicht benötigt wird, sondern erst später verwendet wird oder in manchen Fällen gar nicht verwendet wird.
- Wenn er verwendet wird, wird er mehrere Male aufgerufen und es besteht keine Notwendigkeit, den Wert neu zu berechnen, wenn er sich nie ändert oder nicht neu berechnet werden sollte.

> [!NOTE]
> Dies bedeutet, dass Sie keinen faulen Getter für eine Eigenschaft schreiben sollten, deren Wert Sie erwarten, dass er sich ändert, denn wenn der Getter faul ist, wird er den Wert nicht neu berechnen.
>
> Beachten Sie, dass Getter nicht "faul" oder "memoisiert" sind; Sie müssen diese Technik implementieren, wenn Sie dieses Verhalten wünschen.

Im folgenden Beispiel hat das Objekt einen Getter als eigene Eigenschaft. Beim Abrufen der Eigenschaft wird die Eigenschaft vom Objekt entfernt und erneut hinzugefügt, diesmal jedoch implizit als Dateneigenschaft. Schließlich wird der Wert zurückgegeben.

```js
const obj = {
  get notifier() {
    delete this.notifier;
    this.notifier = document.getElementById("bookmarked-notification-anchor");
    return this.notifier;
  },
};
```

### Funktionserkennung

Viele Funktionen akzeptieren ein Objekt und rufen einzelne Eigenschaften daraus als separate Parameter ab (dieser Objektparameter ist als _options bag_ bekannt). Sie können feststellen, ob eine bestimmte Option unterstützt wird, indem Sie einen Getter verwenden, um zu verfolgen, ob die Eigenschaft abgerufen wurde. Dieses Beispiel überprüft, ob die `colorType`-Option von der [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) Methode unterstützt wird.

```js
function isColorTypeSupported() {
  let supported = false;
  const obj = {
    get colorType() {
      supported = true;
      return undefined;
    },
  };
  document.createElement("canvas").getContext("2d", obj);
  return supported;
}
```

### get vs. defineProperty

Während die Verwendung des `get`-Schlüsselworts und {{jsxref("Object.defineProperty()")}} ähnliche Ergebnisse liefert, gibt es einen subtilen Unterschied zwischen den beiden, wenn sie auf [Klassen](/de/docs/Web/JavaScript/Reference/Classes) verwendet werden. Die `get`-Syntax definiert die Eigenschaft auf dem Prototyp der Instanz, während {{jsxref("Object.defineProperty()")}} die Eigenschaft auf der Instanz definiert, auf die sie angewendet wird.

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
- [Eigenschafts-Accessoren](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors)
- [Inkompatible Änderung in ES5: literal getter und setter Funktionen müssen jetzt genau null oder ein Argument haben](https://whereswalden.com/2010/08/22/incompatible-es5-change-literal-getter-and-setter-functions-must-now-have-exactly-zero-or-one-arguments/) von Jeff Walden (2010)
- [Weitere Änderungen in SpiderMonkey: altes, esoterisches, sehr selten verwendetes Syntax zur Erstellung von Gettern und Setzern wird entfernt](https://whereswalden.com/2010/04/16/more-spidermonkey-changes-ancient-esoteric-very-rarely-used-syntax-for-creating-getters-and-setters-is-being-removed/) von Jeff Walden (2010)
