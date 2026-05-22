---
title: get
slug: Web/JavaScript/Reference/Functions/get
l10n:
  sourceCommit: 1ddd95504b4507beeda0f08bd772eb167922b86a
---

Die **`get`** Syntax bindet eine Objekt-Eigenschaft an eine Funktion, die aufgerufen wird, wenn diese Eigenschaft abgefragt wird. Sie kann auch in [Klassen](/de/docs/Web/JavaScript/Reference/Classes) verwendet werden.

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
  - : Der Name der Eigenschaft, die an die gegebene Funktion gebunden werden soll. Auf dieselbe Weise wie andere Eigenschaften in [Objektinitialisierungen](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) kann es sich um einen String-Literal, einen Zahlen-Literal oder einen Bezeichner handeln.
- `expression`
  - : Sie können auch Ausdrücke für einen berechneten Eigenschaftsnamen verwenden, um diese an die gegebene Funktion zu binden.

## Beschreibung

Manchmal ist es wünschenswert, Zugriff auf eine Eigenschaft zu erlauben, die einen dynamisch berechneten Wert zurückgibt. Oder Sie möchten den Status einer internen Variablen widerspiegeln, ohne explizite Methodenaufrufe zu verwenden. In JavaScript kann dies mit Hilfe eines _Getters_ erreicht werden.

Eine Objekteigenschaft ist entweder eine Dateneigenschaft oder eine Zugriffseigenschaft, aber sie kann nicht gleichzeitig beides sein. Lesen Sie {{jsxref("Object.defineProperty()")}} für weitere Informationen. Die Getter-Syntax erlaubt es Ihnen, die Getter-Funktion in einer Objektinitialisierung anzugeben.

```js
const obj = {
  get prop() {
    // getter, the code executed when reading obj.prop
    return someValue;
  },
};
```

Eigenschaften, die mit dieser Syntax definiert wurden, sind eigene Eigenschaften des erstellten Objekts und sie sind konfigurierbar und aufzählbar.

## Beispiele

### Definieren eines Getters für neue Objekte in Objektinitialisierungen

Dies wird eine Pseudo-Eigenschaft `latest` für das Objekt `obj` erstellen, die den letzten Array-Element in `log` zurückgibt.

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

Sie können genau dieselbe Syntax verwenden, um öffentliche Instanz-Getter zu definieren, die in Klasseninstanzen verfügbar sind. In Klassen benötigen Sie kein Komma als Trennzeichen zwischen den Methoden.

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

Getter-Eigenschaften werden auf der Eigenschaft `prototype` der Klasse definiert und sind daher von allen Instanzen der Klasse geteilt. Im Gegensatz zu Getter-Eigenschaften in Objektliteralen sind Getter-Eigenschaften in Klassen nicht aufzählbar.

Statische Getter und private Getter verwenden ähnliche Syntaxen, die auf den Seiten [`static`](/de/docs/Web/JavaScript/Reference/Classes/static) und [private Elemente](/de/docs/Web/JavaScript/Reference/Classes/Private_elements) beschrieben sind.

### Löschen eines Getters mit dem `delete` Operator

Wenn Sie den Getter entfernen möchten, können Sie ihn einfach mit {{jsxref("delete")}} löschen:

```js
delete obj.latest;
```

### Definieren eines Getters auf vorhandenen Objekten mit `defineProperty`

Um jederzeit einen Getter zu einem vorhandenen Objekt hinzuzufügen, verwenden Sie {{jsxref("Object.defineProperty()")}}.

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

### Intelligente / Selbstüberschreibende / Lazy Getter

Getter geben Ihnen eine Möglichkeit, eine Eigenschaft eines Objekts zu _definieren_, aber sie _berechnen_ den Wert der Eigenschaft nicht, bis darauf zugegriffen wird. Ein Getter schiebt die Kosten der Berechnung des Wertes auf, bis der Wert benötigt wird. Falls er nie benötigt wird, zahlen Sie niemals die Kosten.

Eine zusätzliche Optimierungstechnik, um die Berechnung eines Eigenschaftswertes zu verzögern oder herauszuschieben und ihn für späteren Zugriff zu cachen, sind _intelligente_ (oder _[memoisierte](https://de.wikipedia.org/wiki/Memoisation)_) Getter. Der Wert wird das erste Mal berechnet, wenn der Getter aufgerufen wird, und wird dann im Cache gespeichert, sodass nachfolgende Zugriffe den zwischengespeicherten Wert zurückgeben, ohne ihn erneut zu berechnen. Dies ist in folgenden Situationen nützlich:

- Wenn die Berechnung eines Eigenschaftswertes teuer ist (benötigt viel RAM oder CPU-Zeit, startet Worker-Threads, ruft eine entfernte Datei ab usw.).
- Wenn der Wert gerade nicht benötigt wird, später verwendet wird oder in einigen Fällen überhaupt nicht verwendet wird.
- Wenn er verwendet wird, wird er mehrmals abgerufen, und es besteht keine Notwendigkeit, den Wert neu zu berechnen, da er sich nie ändern wird oder nicht neu berechnet werden sollte.

> [!NOTE]
> Dies bedeutet, dass Sie keinen Lazy Getter für eine Eigenschaft schreiben sollten, deren Wert Sie erwarten, sich zu ändern, denn wenn der Getter "lazy" ist, wird er den Wert nicht neu berechnen.
>
> Beachten Sie, dass Getter von Natur aus nicht "lazy" oder "memoisiert" sind; Sie müssen diese Technik implementieren, wenn Sie dieses Verhalten wünschen.

Im folgenden Beispiel hat das Objekt als eigene Eigenschaft einen Getter. Beim Abfragen der Eigenschaft wird die Eigenschaft vom Objekt entfernt und erneut hinzugefügt, jedoch diesmal implizit als Dateneigenschaft. Schließlich wird der Wert zurückgegeben.

```js
const obj = {
  get notifier() {
    delete this.notifier;
    this.notifier = document.getElementById("bookmarked-notification-anchor");
    return this.notifier;
  },
};
```

### Feature-Erkennung

Viele Funktionen akzeptieren ein Objekt und holen einzelne Eigenschaften daraus als separate Parameter (dieses Objektparameter ist als _Optionsobjekt_ bekannt). Sie können erkennen, ob eine bestimmte Option unterstützt wird, indem Sie einen Getter verwenden, um zu verfolgen, ob auf die Eigenschaft zugegriffen wurde. Dieses Beispiel prüft, ob die Option `colorType` von der Methode [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) unterstützt wird.

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

Während die Verwendung des `get` Schlüsselworts und {{jsxref("Object.defineProperty()")}} ähnliche Ergebnisse haben, gibt es einen feinen Unterschied zwischen den beiden, wenn sie auf [Klassen](/de/docs/Web/JavaScript/Reference/Classes) angewandt werden. Die `get` Syntax definiert die Eigenschaft auf dem Prototyp der Instanz, während {{jsxref("Object.defineProperty()")}} die Eigenschaft auf der Instanz definiert, auf die es angewendet wird.

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
- [Objektinitialisierung](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer)
- {{jsxref("Statements/class", "class")}}
- [Eigenschaftszugriffe](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors)
- [Inkompatible ES5-Änderung: literale Getter- und Setter-Funktionen müssen jetzt genau null oder ein Argumente haben](https://whereswalden.com/2010/08/22/incompatible-es5-change-literal-getter-and-setter-functions-must-now-have-exactly-zero-or-one-arguments/) von Jeff Walden (2010)
- [Weitere SpiderMonkey-Änderungen: Uralt, esoterisch, sehr selten verwendete Syntax zum Erstellen von Gettern und Settern wird entfernt](https://whereswalden.com/2010/04/16/more-spidermonkey-changes-ancient-esoteric-very-rarely-used-syntax-for-creating-getters-and-setters-is-being-removed/) von Jeff Walden (2010)
