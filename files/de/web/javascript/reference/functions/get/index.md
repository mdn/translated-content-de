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

Es gibt einige zusätzliche Syntaxbeschränkungen:

- Ein Getter muss genau null Parameter haben.

### Parameter

- `prop`
  - : Der Name der Eigenschaft, die an die gegebene Funktion gebunden werden soll. Genau wie andere Eigenschaften in [Objektinitialisierern](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) kann es ein String-Literal, ein Zahlenliteral oder ein Bezeichner sein.
- `expression`
  - : Sie können auch Ausdrücke für einen berechneten Eigenschaftsnamen verwenden, um ihn an die gegebene Funktion zu binden.

## Beschreibung

Manchmal ist es wünschenswert, den Zugriff auf eine Eigenschaft zu erlauben, die einen dynamisch berechneten Wert zurückgibt, oder man möchte den Status einer internen Variablen widerspiegeln, ohne explizite Methodenaufrufe zu verwenden. In JavaScript kann dies mit einem _Getter_ erreicht werden.

Eine Objekteigenschaft ist entweder eine Dateneigenschaft oder eine Zugriffseigenschaft, kann jedoch nicht gleichzeitig beides sein. Lesen Sie {{jsxref("Object.defineProperty()")}} für weitere Informationen. Die Getter-Syntax ermöglicht es Ihnen, die Getter-Funktion in einem Objektinitialisierer zu spezifizieren.

```js
const obj = {
  get prop() {
    // Getter, der Code, der ausgeführt wird, wenn obj.prop gelesen wird
    return someValue;
  },
};
```

Eigenschaften, die mit dieser Syntax definiert werden, sind eigene Eigenschaften des erstellten Objekts und sie sind konfigurierbar und aufzählbar.

## Beispiele

### Definieren eines Getters in neuen Objekten in Objektinitialisierern

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

Sie können die exakt gleiche Syntax verwenden, um öffentliche Instanz-Getter zu definieren, die auf Klasseninstanzen verfügbar sind. In Klassen benötigen Sie kein Komma-Trennzeichen zwischen Methoden.

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

Statische Getter und private Getter verwenden ähnliche Syntaxen, die auf den Seiten [`static`](/de/docs/Web/JavaScript/Reference/Classes/static) und [private properties](/de/docs/Web/JavaScript/Reference/Classes/Private_properties) beschrieben sind.

### Löschen eines Getters mit dem `delete` Operator

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

console.log(o.b); // Führt den Getter aus, der a + 1 ergibt (was 1 ist)
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
console.log(MyConstants.foo); // 'foo', der Wert eines statischen Getters kann nicht geändert werden
```

### Intelligente / selbstüberschreibende / faule Getter

Getter geben Ihnen die Möglichkeit, eine Eigenschaft eines Objekts zu _definieren_, aber sie _berechnen_ den Wert der Eigenschaft erst, wenn sie abgerufen wird. Ein Getter verzögert die Kosten der Berechnung des Wertes, bis der Wert benötigt wird. Wenn er nie benötigt wird, entstehen keine Kosten.

Eine zusätzliche Optimierungstechnik zur Verzögerung oder Verzögerung der Berechnung eines Eigenschaftswerts und zur Zwischenspeicherung für einen späteren Zugriff sind _intelligente_ (oder _[memoisierte](https://en.wikipedia.org/wiki/Memoization)_) Getter. Der Wert wird das erste Mal berechnet, wenn der Getter aufgerufen wird, und dann zwischengespeichert, sodass nachfolgende Zugriffe den zwischengespeicherten Wert zurückgeben, ohne ihn neu zu berechnen. Dies ist nützlich in den folgenden Situationen:

- Wenn die Berechnung eines Eigenschaftswerts teuer ist (viel RAM oder CPU-Zeit benötigt, Worker-Threads startet, entfernte Dateien abruft usw.).
- Wenn der Wert nicht sofort benötigt wird. Er wird später verwendet oder in einigen Fällen gar nicht verwendet.
- Wenn er verwendet wird, wird er mehrmals aufgerufen, und es besteht keine Notwendigkeit, den Wert neu zu berechnen, da er sich nie ändern wird oder nicht neu berechnet werden sollte.

> [!NOTE]
> Dies bedeutet, dass Sie keinen faulen Getter für eine Eigenschaft schreiben sollten, deren Wert Sie erwarten zu ändern, da der Getter, wenn er faul ist, den Wert nicht neu berechnen wird.
>
> Beachten Sie, dass Getter von Natur aus nicht "faul" oder "memoisiert" sind; Sie müssen diese Technik implementieren, wenn Sie dieses Verhalten wünschen.

Im folgenden Beispiel hat das Objekt einen Getter als eigene Eigenschaft. Beim Abrufen der Eigenschaft wird die Eigenschaft aus dem Objekt entfernt und wieder hinzugefügt, diesmal jedoch implizit als Dateneigenschaft. Schließlich wird der Wert zurückgegeben.

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

Während die Verwendung des `get`-Schlüsselworts und von {{jsxref("Object.defineProperty()")}} ähnliche Ergebnisse erzielt, gibt es einen subtilen Unterschied zwischen den beiden, wenn sie in {{jsxref("classes")}} verwendet werden.

Bei der Verwendung von `get` wird die Eigenschaft auf dem Prototyp der Instanz definiert, während sie bei der Verwendung von {{jsxref("Object.defineProperty()")}} auf der Instanz definiert wird, auf die sie angewendet wird.

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
// { konfigurierbar: true, enumerierbar: false, get: funktion get hello() { return 'world'; }, set: undefined }
```

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [Arbeiten mit Objekten](/de/docs/Web/JavaScript/Guide/Working_with_objects) Leitfaden
- [Funktionen](/de/docs/Web/JavaScript/Reference/Functions)
- [`set`](/de/docs/Web/JavaScript/Reference/Functions/set)
- {{jsxref("Object.defineProperty()")}}
- [Objektinitialisierer](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer)
- {{jsxref("Statements/class", "class")}}
- [Eigenschaftszugriffe](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors)
- [Inkompatible ES5-Änderung: Literal-Getter- und Setter-Funktionen müssen jetzt genau null oder ein Argument haben](https://whereswalden.com/2010/08/22/incompatible-es5-change-literal-getter-and-setter-functions-must-now-have-exactly-zero-or-one-arguments/) von Jeff Walden (2010)
- [Weitere SpiderMonkey-Änderungen: antike, esoterische, sehr selten verwendete Syntax zum Erstellen von Gettern und Settern wird entfernt](https://whereswalden.com/2010/04/16/more-spidermonkey-changes-ancient-esoteric-very-rarely-used-syntax-for-creating-getters-and-setters-is-being-removed/) von Jeff Walden (2010)
