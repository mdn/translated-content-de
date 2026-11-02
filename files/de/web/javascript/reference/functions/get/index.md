---
title: get
slug: Web/JavaScript/Reference/Functions/get
l10n:
  sourceCommit: 389605121ed8ea78cc1878f31bbca6759cc7417d
---

Die **`get`**-Syntax bindet eine Objekteigenschaft an eine Funktion, die aufgerufen wird, wenn auf die Eigenschaft zugegriffen wird. Sie kann auch in [Klassen](/de/docs/Web/JavaScript/Reference/Classes) verwendet werden.

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

Es gelten einige zusätzliche syntaktische Einschränkungen:

- Ein Getter muss genau null Parameter haben.

### Parameter

- `prop`
  - : Der Name der Eigenschaft, die an die angegebene Funktion gebunden werden soll. Wie bei anderen Eigenschaften in [Objektinitialisierern](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) kann dies ein String-Literal, ein Zahlenliteral oder ein Bezeichner sein.
- `expression`
  - : Sie können auch Ausdrücke für einen berechneten Eigenschaftsnamen verwenden, der an die angegebene Funktion gebunden wird.

## Beschreibung

Manchmal ist es sinnvoll, den Zugriff auf eine Eigenschaft zu ermöglichen, die einen dynamisch berechneten Wert zurückgibt. Möglicherweise möchten Sie auch den Zustand einer internen Variablen abfragen, ohne dafür explizit eine Methode aufrufen zu müssen. In JavaScript lässt sich dies mit einem _Getter_ erreichen.

Eine Objekteigenschaft ist entweder eine Dateneigenschaft oder eine Zugriffseigenschaft, kann aber nicht beides gleichzeitig sein. Weitere Informationen finden Sie unter {{jsxref("Object.defineProperty()")}}. Mit der Getter-Syntax können Sie die Getter-Funktion in einem Objektinitialisierer angeben.

```js
const obj = {
  get prop() {
    // getter, the code executed when reading obj.prop
    return someValue;
  },
};
```

Mit dieser Syntax definierte Eigenschaften sind eigene Eigenschaften des erstellten Objekts. Sie sind konfigurierbar und aufzählbar.

## Beispiele

### Einen Getter für neue Objekte in Objektinitialisierern definieren

Dadurch wird für das Objekt `obj` eine Pseudo-Eigenschaft `latest` erstellt, die das letzte Array-Element in `log` zurückgibt.

```js
const obj = {
  log: ["example", "test"],
  get latest() {
    return this.log.at(-1);
  },
};
console.log(obj.latest); // "test"
```

Beachten Sie, dass der Versuch, `latest` einen Wert zuzuweisen, die Eigenschaft nicht verändert.

### Getter in Klassen verwenden

Mit genau derselben Syntax können Sie öffentliche Instanz-Getter definieren, die auf Klasseninstanzen verfügbar sind. In Klassen benötigen Sie zwischen Methoden kein Komma als Trennzeichen.

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

Getter-Eigenschaften werden auf der `prototype`-Eigenschaft der Klasse definiert und daher von allen Instanzen der Klasse gemeinsam genutzt. Anders als Getter-Eigenschaften in Objektliteralen sind Getter-Eigenschaften in Klassen nicht aufzählbar.

Statische Getter und private Getter verwenden ähnliche Syntaxformen, die auf den Seiten zu [`static`](/de/docs/Web/JavaScript/Reference/Classes/static) und [privaten Elementen](/de/docs/Web/JavaScript/Reference/Classes/Private_elements) beschrieben werden.

### Einen Getter mit dem `delete`-Operator löschen

Wenn Sie den Getter entfernen möchten, können Sie ihn einfach mit {{jsxref("delete")}} löschen:

```js
delete obj.latest;
```

### Mit `defineProperty` einen Getter für bestehende Objekte definieren

Um einem bestehenden Objekt später einen Getter hinzuzufügen, verwenden Sie {{jsxref("Object.defineProperty()")}}.

```js
const o = { a: 0 };

Object.defineProperty(o, "b", {
  get() {
    return this.a + 1;
  },
});

console.log(o.b); // Runs the getter, which yields a + 1 (which is 1)
```

### Einen berechneten Eigenschaftsnamen verwenden

```js
const expr = "foo";

const obj = {
  get [expr]() {
    return "bar";
  },
};

console.log(obj.foo); // "bar"
```

### Statische Getter definieren

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

### Intelligente / sich selbst überschreibende / verzögert ausgewertete Getter

Mit Gettern können Sie eine Eigenschaft eines Objekts _definieren_. Der Wert der Eigenschaft wird jedoch erst _berechnet_, wenn auf sie zugegriffen wird. Ein Getter verschiebt den Berechnungsaufwand, bis der Wert benötigt wird. Wird er nie benötigt, fällt dieser Aufwand nicht an.

Eine weitere Optimierungstechnik besteht darin, die Berechnung eines Eigenschaftswerts zu verzögern und das Ergebnis für spätere Zugriffe zwischenzuspeichern. Solche Getter werden als _intelligente_ (oder _{{Glossary("Memoization", "memoisierte")}}_) Getter bezeichnet. Der Wert wird beim ersten Aufruf des Getters berechnet und anschließend zwischengespeichert. Spätere Zugriffe geben den zwischengespeicherten Wert zurück, ohne ihn erneut zu berechnen. Dies ist in folgenden Situationen nützlich:

- Wenn die Berechnung eines Eigenschaftswerts aufwendig ist (viel RAM oder CPU-Zeit benötigt, Worker-Threads startet, eine entfernte Datei abruft usw.).
- Wenn der Wert nicht sofort benötigt wird. Er wird erst später oder möglicherweise überhaupt nicht verwendet.
- Wenn mehrfach auf den Wert zugegriffen wird und keine erneute Berechnung nötig ist, weil er sich nie ändert oder nicht erneut berechnet werden soll.

> [!NOTE]
> Sie sollten keinen verzögert ausgewerteten Getter für eine Eigenschaft schreiben, deren Wert sich voraussichtlich ändert. Ein solcher Getter berechnet den Wert nicht erneut.
>
> Getter sind nicht von sich aus „verzögert ausgewertet“ oder „{{Glossary("Memoization", "memoisiert")}}“. Wenn Sie dieses Verhalten wünschen, müssen Sie die Technik selbst implementieren.

Im folgenden Beispiel besitzt das Objekt einen Getter als eigene Eigenschaft. Beim Zugriff auf die Eigenschaft wird sie aus dem Objekt entfernt und erneut hinzugefügt, diesmal jedoch implizit als Dateneigenschaft. Schließlich wird der Wert zurückgegeben.

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

Viele Funktionen akzeptieren ein Objekt und lesen einzelne Eigenschaften daraus als separate Parameter aus (dieser Objektparameter wird als _options bag_ bezeichnet). Mit einem Getter können Sie feststellen, ob eine bestimmte Option unterstützt wird, indem Sie erfassen, ob die Eigenschaft ausgelesen wurde. Dieses Beispiel prüft, ob die Methode [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) die Option `colorType` unterstützt.

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

### get im Vergleich zu defineProperty

Die Verwendung des Schlüsselworts `get` und von {{jsxref("Object.defineProperty()")}} führt zu ähnlichen Ergebnissen. Bei [Klassen](/de/docs/Web/JavaScript/Reference/Classes) gibt es jedoch einen kleinen Unterschied: Die `get`-Syntax definiert die Eigenschaft auf dem Prototyp der Instanz, während {{jsxref("Object.defineProperty()")}} die Eigenschaft direkt auf der Instanz definiert, auf die es angewendet wird.

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

- Leitfaden [Mit Objekten arbeiten](/de/docs/Web/JavaScript/Guide/Working_with_objects)
- [Funktionen](/de/docs/Web/JavaScript/Reference/Functions)
- [`set`](/de/docs/Web/JavaScript/Reference/Functions/set)
- {{jsxref("Object.defineProperty()")}}
- [Objektinitialisierer](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer)
- {{jsxref("Statements/class", "class")}}
- [Eigenschaftszugriff](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors)
- [Inkompatible Änderung in ES5: Getter- und Setter-Funktionen in Literalen müssen jetzt genau null beziehungsweise einen Parameter haben](https://whereswalden.com/2010/08/22/incompatible-es5-change-literal-getter-and-setter-functions-must-now-have-exactly-zero-or-one-arguments/) von Jeff Walden (2010)
- [Weitere Änderungen an SpiderMonkey: Eine alte, selten verwendete Syntax zum Erstellen von Gettern und Settern wird entfernt](https://whereswalden.com/2010/04/16/more-spidermonkey-changes-ancient-esoteric-very-rarely-used-syntax-for-creating-getters-and-setters-is-being-removed/) von Jeff Walden (2010)
