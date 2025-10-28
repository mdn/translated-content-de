---
title: get
slug: Web/JavaScript/Reference/Functions/get
l10n:
  sourceCommit: b8b2d5a383e2240c40b21715517e1cfa59b44eaa
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

Es gibt einige zusätzliche Syntaxbeschränkungen:

- Ein Getter muss genau null Parameter haben.

### Parameter

- `prop`
  - : Der Name der Eigenschaft, die an die gegebene Funktion gebunden werden soll. Wie bei anderen Eigenschaften in [Objektinitialisierern](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) kann es sich um einen Zeichenfolgenliteralen, einen Zahlenliteralen oder einen Bezeichner handeln.
- `expression`
  - : Sie können auch Ausdrücke für einen berechneten Eigenschaftsnamen verwenden, um diesen an die gegebene Funktion zu binden.

## Beschreibung

Manchmal ist es wünschenswert, den Zugriff auf eine Eigenschaft zu ermöglichen, die einen dynamisch berechneten Wert zurückgibt, oder Sie möchten den Status einer internen Variablen widerspiegeln, ohne explizite Methodenaufrufe zu erfordern. In JavaScript kann dies mit einem _Getter_ erreicht werden.

Eine Objekteigenschaft ist entweder eine Dateneigenschaft oder eine Zugriffseigenschaft, kann jedoch nicht beides gleichzeitig sein. Lesen Sie {{jsxref("Object.defineProperty()")}} für weitere Informationen. Die Getter-Syntax ermöglicht es Ihnen, die Getter-Funktion in einem Objektinitialisierer anzugeben.

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

Dies wird eine Pseudo-Eigenschaft `latest` für das Objekt `obj` erstellen, die das letzte Element im Array `log` zurückgibt.

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

Sie können die exakt gleiche Syntax verwenden, um öffentliche Instanz-Getter zu definieren, die in Klasseninstanzen verfügbar sind. In Klassen benötigen Sie kein Kommatrennzeichen zwischen den Methoden.

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

Getter-Eigenschaften werden auf der `prototype`-Eigenschaft der Klasse definiert und sind daher allen Instanzen der Klasse gemeinsam. Im Gegensatz zu Getter-Eigenschaften in Objektliteralen sind Getter-Eigenschaften in Klassen nicht aufzählbar.

Statische Getter und private Getter verwenden ähnliche Syntaxen, die auf den Seiten zu [`static`](/de/docs/Web/JavaScript/Reference/Classes/static) und [privaten Elementen](/de/docs/Web/JavaScript/Reference/Classes/Private_elements) beschrieben sind.

### Löschen eines Getters mit dem `delete`-Operator

Wenn Sie den Getter entfernen möchten, können Sie ihn einfach mit {{jsxref("Operators/delete", "delete")}} löschen:

```js
delete obj.latest;
```

### Definieren eines Getters auf vorhandenen Objekten mit `defineProperty`

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

### Verwenden eines berechneten Eigenschaftsnamens

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

### Intelligente / sich selbst überschreibende / verzögerte Getter

Getter geben Ihnen die Möglichkeit, eine Eigenschaft eines Objekts zu _definieren_, aber sie _berechnen_ den Wert der Eigenschaft erst, wenn sie abgerufen wird. Ein Getter verzögert die Kosten für die Berechnung des Wertes, bis der Wert benötigt wird. Wenn er nie benötigt wird, fallen die Kosten nie an.

Eine zusätzliche Optimierungstechnik, um die Berechnung eines Eigenschaftswertes zu verzögern oder zu faulenzen und ihn für einen späteren Zugriff zwischenzuspeichern, sind _intelligente_ (oder _[memoisierte](https://en.wikipedia.org/wiki/Memoization)_) Getter. Der Wert wird beim ersten Aufruf des Getters berechnet und dann zwischengespeichert, sodass nachfolgende Zugriffe den zwischengespeicherten Wert zurückgeben, ohne ihn neu zu berechnen. Dies ist in den folgenden Situationen nützlich:

- Wenn die Berechnung eines Eigenschaftswerts kostspielig ist (viel RAM oder CPU-Zeit benötigt, Arbeits-Threads erzeugt, entfernte Dateien abruft, etc.).
- Wenn der Wert nicht jetzt benötigt wird. Er wird später verwendet oder in manchen Fällen überhaupt nicht.
- Wenn er verwendet wird, wird er mehrmals darauf zugegriffen, und es besteht keine Notwendigkeit, den Wert neu zu berechnen, da er unverändert bleibt oder nicht neu berechnet werden sollte.

> [!NOTE]
> Dies bedeutet, dass Sie keinen verzögerten Getter für eine Eigenschaft schreiben sollten, deren Wert sich Ihrer Meinung nach ändern wird, da, wenn der Getter verzögert ist, er den Wert nicht neu berechnet.
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

### Feature-Erkennung

Viele Funktionen akzeptieren ein Objekt und rufen individuelle Eigenschaften daraus als separate Parameter ab (dieses Objektparameter ist als _options bag_ bekannt). Sie können erkennen, ob eine bestimmte Option unterstützt wird, indem Sie einen Getter verwenden, um zu verfolgen, ob die Eigenschaft abgerufen wurde. Dieses Beispiel überprüft, ob die `colorType`-Option von der Methode [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) unterstützt wird.

```js
function isColorTypeSupported() {
  let supported = false;
  const obj = {
    get colorType() {
      supported = true;
    },
  };
  document.createElement("canvas").getContext("2d", obj);
  return supported;
}
```

### get vs. defineProperty

Obwohl die Verwendung des `get`-Schlüsselworts und von {{jsxref("Object.defineProperty()")}} ähnliche Ergebnisse hat, gibt es einen subtilen Unterschied zwischen den beiden, wenn sie in [Klassen](/de/docs/Web/JavaScript/Reference/Classes) verwendet werden. Die `get`-Syntax definiert die Eigenschaft auf dem Prototyp der Instanz, während {{jsxref("Object.defineProperty()")}} die Eigenschaft auf der Instanz definiert, auf die es angewendet wird.

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
- [Eigenschaftszugreifer](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors)
- [Inkompatible ES5-Änderung: Literale Getter- und Setter-Funktionen müssen jetzt genau null oder ein Argument haben](https://whereswalden.com/2010/08/22/incompatible-es5-change-literal-getter-and-setter-functions-must-now-have-exactly-zero-or-one-arguments/) von Jeff Walden (2010)
- [Weitere SpiderMonkey-Änderungen: Alte, esoterische, sehr selten verwendete Syntax zum Erstellen von Gettern und Settern wird entfernt](https://whereswalden.com/2010/04/16/more-spidermonkey-changes-ancient-esoteric-very-rarely-used-syntax-for-creating-getters-and-setters-is-being-removed/) von Jeff Walden (2010)
