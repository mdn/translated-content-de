---
title: get
slug: Web/JavaScript/Reference/Functions/get
l10n:
  sourceCommit: 9f46f08d20b21498293cbf6b84f508103272ec6f
---

Die **`get`**-Syntax bindet eine Objekteigenschaft an eine Funktion, die aufgerufen wird, wenn diese Eigenschaft abgerufen wird. Sie kann auch in [Klassen](/de/docs/Web/JavaScript/Reference/Classes) verwendet werden.

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
  - : Der Name der Eigenschaft, die an die gegebene Funktion gebunden wird. Ähnlich wie andere Eigenschaften in [Objektinitialisierern](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) kann es sich um einen Zeichenfolgenliteral, einen Zahlenliteral oder einen Bezeichner handeln.
- `expression`
  - : Man kann auch Ausdrücke für einen berechneten Eigenschaftsnamen verwenden, um diesen an die gegebene Funktion zu binden.

## Beschreibung

Manchmal ist es wünschenswert, Zugriff auf eine Eigenschaft zu erlauben, die einen dynamisch berechneten Wert zurückgibt, oder man möchte den Status einer internen Variablen widerspiegeln, ohne die Verwendung expliziter Methodenaufrufe zu erfordern. In JavaScript kann dies durch die Verwendung eines _Getters_ erreicht werden.

Eine Objekteigenschaft ist entweder eine Dateneigenschaft oder eine Zugriffseigenschaft, aber sie kann nicht gleichzeitig beides sein. Lesen Sie {{jsxref("Object.defineProperty()")}} für weitere Informationen. Die Getter-Syntax ermöglicht es Ihnen, die Getter-Funktion in einem Objektinitialisierer anzugeben.

```js
const obj = {
  get prop() {
    // getter, the code executed when reading obj.prop
    return someValue;
  },
};
```

Eigenschaften, die mit dieser Syntax definiert werden, sind eigene Eigenschaften des erstellten Objekts, und sie sind konfigurierbar und aufzählbar.

## Beispiele

### Definieren eines Getters auf neuen Objekten in Objektinitialisierern

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

Beachten Sie, dass der Versuch, `latest` einen Wert zuzuweisen, es nicht ändern wird.

### Verwendung von Gettern in Klassen

Sie können die exakt gleiche Syntax verwenden, um öffentliche Instanz-Getter zu definieren, die auf Klasseninstanzen verfügbar sind. In Klassen ist der Komma-Separator zwischen Methoden nicht notwendig.

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

Getter-Eigenschaften sind in der `prototype`-Eigenschaft der Klasse definiert und werden daher von allen Instanzen der Klasse geteilt. Im Gegensatz zu Getter-Eigenschaften in Objekt-Literalen sind Getter-Eigenschaften in Klassen nicht aufzählbar.

Statische Getter und private Getter verwenden ähnliche Syntaxen, die auf den Seiten zu [`static`](/de/docs/Web/JavaScript/Reference/Classes/static) und [privaten Elementen](/de/docs/Web/JavaScript/Reference/Classes/Private_elements) beschrieben werden.

### Löschen eines Getters mit dem `delete`-Operator

Wenn Sie den Getter entfernen möchten, können Sie ihn einfach mit {{jsxref("delete")}} löschen:

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

### Intelligente / sich selbst überschreibende / faule Getter

Getter bieten Ihnen eine Möglichkeit, eine Eigenschaft eines Objekts _zu definieren_, aber sie _berechnen_ den Wert der Eigenschaft nicht, bis er abgerufen wird. Ein Getter verzögert die Kosten der Berechnung des Wertes, bis der Wert benötigt wird. Wenn er nie benötigt wird, entstehen auch keine Kosten.

Eine zusätzliche Optimierungstechnik, um die Berechnung eines Eigenschaftswertes zu verzögern oder aufzuschieben und ihn für den späteren Zugriff zu cachen, sind _intelligente_ (oder _{{Glossary("Memoization", "memoisierte")}}_) Getter. Der Wert wird das erste Mal berechnet, wenn der Getter aufgerufen wird und wird dann zwischengespeichert, sodass nachfolgende Zugriffe den zwischengespeicherten Wert zurückgeben, ohne ihn neu zu berechnen. Dies ist in folgenden Situationen nützlich:

- Wenn die Berechnung eines Eigenschaftswertes kostspielig ist (viel RAM oder CPU-Zeit benötigt, Worker-Threads startet, eine entfernte Datei abruft usw.).
- Wenn der Wert nicht sofort benötigt wird. Er wird später verwendet, oder in manchen Fällen wird er gar nicht genutzt.
- Wenn er genutzt wird, wird er mehrfach abgerufen und es besteht keine Notwendigkeit, den Wert, der sich nie ändern wird oder nicht neu berechnet werden sollte, mehrmals neu zu berechnen.

> [!NOTE]
> Das bedeutet, dass Sie keinen faulen Getter für eine Eigenschaft schreiben sollten, deren Wert sich ändern soll, weil der Getter, wenn er faul ist, den Wert nicht neu berechnen wird.
>
> Beachten Sie, dass Getter nicht von Natur aus "faul" oder "{{Glossary("Memoization", "memoisiert")}}" sind; Sie müssen diese Technik implementieren, wenn Sie dieses Verhalten wünschen.

Im folgenden Beispiel hat das Objekt einen Getter als seine eigene Eigenschaft. Beim Abrufen der Eigenschaft wird die Eigenschaft aus dem Objekt entfernt und erneut hinzugefügt, jedoch dieses Mal implizit als Dateneigenschaft. Schließlich wird der Wert zurückgegeben.

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

Viele Funktionen akzeptieren ein Objekt und rufen einzelne Eigenschaften daraus als separate Parameter ab (dieses Objektparameter wird als _Optionsbeutel_ bezeichnet). Sie können erkennen, ob eine spezifische Option unterstützt wird, indem Sie einen Getter verwenden, um zu verfolgen, ob die Eigenschaft abgerufen wurde. Dieses Beispiel überprüft, ob die `colorType`-Option von der Methode [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) unterstützt wird.

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

Während die Verwendung des `get`-Schlüsselworts und {{jsxref("Object.defineProperty()")}} ähnliche Ergebnisse haben, gibt es einen subtilen Unterschied zwischen den beiden, wenn sie auf [Klassen](/de/docs/Web/JavaScript/Reference/Classes) angewendet werden. Die `get`-Syntax definiert die Eigenschaft im Prototyp der Instanz, während {{jsxref("Object.defineProperty()")}} die Eigenschaft auf der Instanz definiert, auf die es angewendet wird.

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
- [Inkompatible Änderung in ES5: Literal getter- und setter-Funktionen müssen jetzt genau null oder ein Argument haben](https://whereswalden.com/2010/08/22/incompatible-es5-change-literal-getter-and-setter-functions-must-now-have-exactly-zero-or-one-arguments/) von Jeff Walden (2010)
- [Weitere SpiderMonkey-Änderungen: uralte, esoterische, sehr selten verwendete Syntax zur Erstellung von Gettern und Settern wird entfernt](https://whereswalden.com/2010/04/16/more-spidermonkey-changes-ancient-esoteric-very-rarely-used-syntax-for-creating-getters-and-setters-is-being-removed/) von Jeff Walden (2010)
