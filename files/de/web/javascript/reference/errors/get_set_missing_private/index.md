---
title: "TypeError: can't access/set private field or method: object is not the right class"
slug: Web/JavaScript/Reference/Errors/Get_set_missing_private
l10n:
  sourceCommit: 48184c65d7e6d59e867806d9e349661c737bdc4b
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "can't access private field or method: object is not the right class" oder "can't set private field: object is not the right class" tritt auf, wenn ein privates Feld oder eine Methode an einem Objekt abgerufen oder gesetzt wird, das dieses [private Element](/de/docs/Web/JavaScript/Reference/Classes/Private_elements) nicht definiert hat.

## Meldung

```plain
TypeError: Cannot read private member #x from an object whose class did not declare it (V8-based)
TypeError: Cannot write private member #x to an object whose class did not declare it (V8-based)
TypeError: can't access private field or method: object is not the right class (Firefox)
TypeError: can't set private field: object is not the right class (Firefox)
TypeError: Cannot access invalid private field (evaluating 'this.#x') (Safari)
```

## Fehlertyp

{{jsxref("TypeError")}}

## Was ist schiefgelaufen?

Sie versuchen, ein privates Feld oder eine Methode an einem Objekt abzurufen oder zu setzen, aber dieses Objekt enthält dieses private Element nicht. Private Instanzeigenschaften können nur in Instanzen der Klasse (einschließlich ihrer Unterklassen), die diese deklarieren, abgerufen werden; private statische Eigenschaften können nur in der Klasse selbst, die diese deklariert, und nicht in Unterklassen abgerufen werden.

Dieser Fehler tritt auf, wenn der private Name im Klassenscope existiert, aber das Objekt, auf dem zugegriffen wird, ungültig ist. Wenn der private Name nicht existiert, erhalten Sie stattdessen einen [Syntaxfehler](/de/docs/Web/JavaScript/Reference/Errors/Undeclared_private_field_or_method).

## Beispiele

### Nicht übereinstimmende statische/Instanz-Felder

Möglicherweise haben Sie das Feld als statisches Feld deklariert, versuchen jedoch, es in einer Instanz abzurufen oder umgekehrt.

```js example-bad
class MyClass {
  static #x = 0;
  doSomething() {
    console.log(this.#x);
  }
}

const obj = new MyClass();
obj.doSomething();
// TypeError: can't access private field: object is not the right class
```

Um dies zu beheben, ändern Sie entweder das Feld in ein Instanzfeld, greifen Sie auf das Feld in der Klasse selbst zu oder deklarieren Sie ein anderes Feld in der Instanz. Beachten Sie, dass der private Namensraum zwischen statischen und Instanzeigenschaften geteilt wird, sodass Sie kein statisches und instanzliches privates Element mit demselben Namen haben können.

```js example-good
class MyClass {
  #x = 0;
  doSomething() {
    console.log(this.#x);
  }
}

class MyClass2 {
  static #x = 0;
  doSomething() {
    console.log(MyClass2.#x);
  }
}
```

### Falsches Objekt verwendet

Vielleicht haben Sie eine Methode, die auf `this.#x` zugreift, aber sie wird mit einem anderen `this`-Wert aufgerufen.

```js example-bad
class JSONReplacer {
  #count = 0;
  func(key, value) {
    if (typeof value === "object") {
      this.#count++;
    }
    return value;
  }
}

JSON.stringify({ a: 1, b: { c: 2 } }, new JSONReplacer().func);
// TypeError: can't access private field: object is not the right class
```

Dies liegt daran, dass {{jsxref("JSON.stringify()")}} die Ersetzungsfunktion mit dem Objekt, das `value` enthält, als `this` aufruft, sodass das private Feld nicht zugänglich ist. Um dies zu beheben, können Sie die Methode an das Objekt binden oder eine Pfeilfunktion verwenden, um sicherzustellen, dass `replacer.func` mit dem korrekten `this`-Wert aufgerufen wird.

```js example-good
const replacer = new JSONReplacer();
JSON.stringify({ a: 1, b: { c: 2 } }, replacer.func.bind(replacer));
JSON.stringify({ a: 1, b: { c: 2 } }, (...args) => replacer.func(...args));
```

Meistens, wenn Sie versehentlich eine Methode umgebunden haben, würde die Methode mit `undefined` als `this` aufgerufen, was zu einem anderen Fehler führen würde (TypeError: can't convert undefined to object). Dieser Fehler tritt nur auf, wenn die Methode mit einem anderen Objekt als `this` aufgerufen wird, entweder durch Verwendung von {{jsxref("Function/call", "call()")}} oder {{jsxref("Function/apply", "apply()")}}, oder indem die Methode als Callback an eine Funktion übergeben wird, die sie mit einem anderen `this`-Wert aufruft.

Wenn Sie nicht sicher wissen, dass das Objekt das private Element enthalten wird, wie im folgenden Code:

```js
class MyClass {
  #x = 0;
  static doSomething(obj) {
    console.log(obj.#x); // Throws if obj is not an instance of MyClass
  }
}
```

Sie können den {{jsxref("Operators/in", "in")}} Operator verwenden, um zuerst einen _gebrandeten Check_ durchzuführen.

```js
class MyClass {
  #x = 0;
  static doSomething(obj) {
    if (!(#x in obj)) {
      return;
    }
    console.log(obj.#x);
  }
}
```

### Zugriff auf statische Elemente in Unterklassen

Wenn Sie eine [private statische Eigenschaft](/de/docs/Web/JavaScript/Reference/Classes/Private_elements#private_static_fields) haben, können Sie auf diese nur in der Klasse zugreifen, die sie deklariert, nicht in Unterklassen.

```js example-bad
class MyClass {
  static #x = 0;
  doSomething() {
    console.log(this.#x);
  }
}

class MySubClass extends MyClass {}

MySubClass.doSomething();
// TypeError: can't access private field: object is not the right class
```

Um dies zu beheben, greifen Sie nie über `this` auf private statische Eigenschaften zu. Stattdessen geben Sie immer explizit den Namen der Klasse an.

```js example-good
class MyClass {
  static #x = 0;
  doSomething() {
    console.log(MyClass.#x);
  }
}
```

### Zugriff auf gleichnamige private Elemente in einer anderen Klasse

Im Gegensatz zu normalen String- oder Symbol-Eigenschaften werden private Namen nicht zwischen Klassen geteilt. Wenn Sie ein privates Element mit dem gleichen Namen in zwei Klassen haben, sind sie dennoch nicht dasselbe Element, und Sie können nicht auf das private Element einer Klasse von einer anderen Klasse aus zugreifen.

```js example-bad
class MyClass {
  #x = 0;
}

class MyOtherClass {
  #x = 1;
  doSomething(o) {
    console.log(o.#x);
  }
}

const obj = new MyClass();
new MyOtherClass().doSomething(obj);
// TypeError: can't access private field: object is not the right class
```

### Hinzufügen privater Elemente zu nicht verwandten Objekten

Sie können nicht dynamisch private Elemente zu nicht verwandten Objekten _hinzufügen_.

```js example-bad
class MyClass {
  #x = 0;
  static stamp(obj) {
    obj.#x = 1;
  }
}

MyClass.stamp({});
// TypeError: can't set private field: object is not the right class
```

Wenn Sie dies wirklich tun möchten, ziehen Sie den Trick der [Rückgabeüberschreibung](/de/docs/Web/JavaScript/Reference/Classes/Private_elements#returning_overriding_object) in Betracht. Im Allgemeinen möchten Sie jedoch wahrscheinlich stattdessen einen {{jsxref("WeakMap")}} verwenden.

```js example-good
class MyClass {
  static #objToX = new WeakMap();
  static stamp(obj) {
    MyClass.#objToX.set(obj, 1);
  }
}

MyClass.stamp({});
```

## Siehe auch

- [Klassen](/de/docs/Web/JavaScript/Reference/Classes)
- [Private Elemente](/de/docs/Web/JavaScript/Reference/Classes/Private_elements)
