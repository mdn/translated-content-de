---
title: "TypeError: kann auf privates Feld oder Methode nicht zugreifen/festlegen: Objekt ist nicht die richtige Klasse"
slug: Web/JavaScript/Reference/Errors/Get_set_missing_private
l10n:
  sourceCommit: 3e180a7de9aaeaa061c17b5abc52426fc2d34b4c
---

{{jsSidebar("Errors")}}

Der JavaScript-Fehler "kann auf privates Feld oder Methode nicht zugreifen: Objekt ist nicht die richtige Klasse" oder "kann privates Feld nicht festlegen: Objekt ist nicht die richtige Klasse" tritt auf, wenn ein privates Feld oder eine Methode auf einem Objekt abgefragt oder gesetzt wird, das diese [private Eigenschaft](/de/docs/Web/JavaScript/Reference/Classes/Private_properties) nicht definiert hat.

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

Sie versuchen, auf ein privates Feld oder eine Methode eines Objekts zuzugreifen oder es zu setzen, bei dem diese private Eigenschaft nicht vorhanden ist. Private Instanzeigenschaften können nur auf Instanzen der Klasse (einschließlich ihrer Unterklassen) zugegriffen werden, die sie deklariert; private statische Eigenschaften können nur auf der Klasse selbst zugegriffen werden, die sie deklariert, und nicht auf Unterklassen.

Dieser Fehler tritt auf, wenn der private Name im Bereich der Klasse existiert, das Objekt, auf das zugegriffen wird, jedoch ungültig ist. Wenn der private Name nicht existiert, erhalten Sie stattdessen einen [Syntaxfehler](/de/docs/Web/JavaScript/Reference/Errors/Undeclared_private_field_or_method).

## Beispiele

### Nicht übereinstimmende statische/Instanzfelder

Es kann sein, dass Sie das Feld als statisches Feld deklariert haben, aber versuchen, darauf auf einer Instanz zuzugreifen, oder umgekehrt.

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

Um dies zu beheben, ändern Sie entweder das Feld zu einem Instanzfeld, oder greifen Sie auf das Feld in der Klasse selbst zu, oder deklarieren Sie ein anderes Feld auf der Instanz. Beachten Sie, dass der private Namensraum zwischen statischen und Instanzeigenschaften geteilt wird, sodass Sie kein statisches und Instanz-Privatfeld mit demselben Namen haben können.

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

Vielleicht haben Sie eine Methode, die auf `this.#x` zugreift, aber mit einem anderen `this`-Wert aufgerufen wird.

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

Dies liegt daran, dass {{jsxref("JSON.stringify()")}} die Ersetzungsfunktion mit dem Objekt aufruft, das `value` als `this` enthält, sodass das private Feld nicht zugänglich ist. Um dies zu beheben, können Sie die Methode an das Objekt binden oder eine Pfeilfunktion verwenden, um sicherzustellen, dass `replacer.func` mit dem korrekten `this`-Wert aufgerufen wird.

```js example-good
const replacer = new JSONReplacer();
JSON.stringify({ a: 1, b: { c: 2 } }, replacer.func.bind(replacer));
JSON.stringify({ a: 1, b: { c: 2 } }, (...args) => replacer.func(...args));
```

Meistens, wenn Sie versehentlich eine Methode ungebunden haben, würde die Methode mit `undefined` als `this` aufgerufen, was zu einem anderen Fehler führen würde (TypeError: kann `undefined` nicht in ein Objekt umwandeln). Dieser Fehler tritt nur auf, wenn die Methode mit einem anderen Objekt als `this` aufgerufen wird, entweder durch Verwendung von {{jsxref("Function/call", "call()")}} oder {{jsxref("Function/apply", "apply()")}}, oder indem die Methode als Callback an eine Funktion übergeben wird, die sie mit einem anderen `this`-Wert aufruft.

Wenn Sie nicht sicher wissen, dass das Objekt die private Eigenschaft enthalten wird, wie im folgenden Code:

```js
class MyClass {
  #x = 0;
  static doSomething(obj) {
    console.log(obj.#x); // Throws if obj is not an instance of MyClass
  }
}
```

Können Sie den {{jsxref("Operators/in", "in")}} Operator verwenden, um zuerst eine _branded check_ durchzuführen.

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

### Zugriff auf statische Eigenschaften in Unterklassen

Wenn Sie eine [private statische Eigenschaft](/de/docs/Web/JavaScript/Reference/Classes/Private_properties#private_static_fields) haben, können Sie nur in der Klasse darauf zugreifen, die sie deklariert, nicht in Unterklassen.

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

Um dies zu beheben, greifen Sie niemals über `this` auf private statische Eigenschaften zu. Geben Sie stattdessen immer explizit den Namen der Klasse an.

```js example-good
class MyClass {
  static #x = 0;
  doSomething() {
    console.log(MyClass.#x);
  }
}
```

### Zugriff auf gleichnamige private Eigenschaften in einer anderen Klasse

Im Gegensatz zu normalen String- oder Symbol-Eigenschaften werden private Namen nicht zwischen Klassen geteilt. Wenn Sie eine private Eigenschaft mit demselben Namen in zwei Klassen haben, sind sie immer noch nicht dieselbe Eigenschaft, und Sie können nicht auf eine private Eigenschaft einer Klasse aus einer anderen Klasse zugreifen.

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

### Hinzufügen privater Eigenschaften zu nicht verwandten Objekten

Sie können private Eigenschaften nicht dynamisch zu nicht verwandten Objekten _hinzufügen_.

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

Wenn Sie dies wirklich tun möchten, ziehen Sie den [Rückgabe-Override](/de/docs/Web/JavaScript/Reference/Classes/Private_properties#returning_overriding_object) Trick in Betracht. Im Allgemeinen würden Sie jedoch wahrscheinlich eher ein {{jsxref("WeakMap")}} verwenden.

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
- [Private Eigenschaften](/de/docs/Web/JavaScript/Reference/Classes/Private_properties)
