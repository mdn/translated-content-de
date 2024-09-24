---
title: "TypeError: Zugriff/Setzen auf privates Feld oder Methode nicht möglich: Objekt gehört nicht zur richtigen Klasse"
slug: Web/JavaScript/Reference/Errors/Get_set_missing_private
l10n:
  sourceCommit: 3e180a7de9aaeaa061c17b5abc52426fc2d34b4c
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "can't access private field or method: object is not the right class" oder "can't set private field: object is not the right class" tritt auf, wenn ein privates Feld oder eine Methode auf einem Objekt abgerufen oder gesetzt wird, das diese [private Eigenschaft](/de/docs/Web/JavaScript/Reference/Classes/Private_properties) nicht definiert hat.

## Nachricht

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

Sie versuchen, ein privates Feld oder eine Methode auf einem Objekt zu erlangen oder zu setzen, aber dieses Objekt enthält diese private Eigenschaft nicht. Private Instanz-Eigenschaften können nur auf Instanzen der Klasse (einschließlich ihrer Unterklassen) abgerufen werden, die sie deklarieren; private statische Eigenschaften können nur auf der Klasse selbst abgerufen werden, die sie deklariert, und nicht auf Unterklassen.

Dieser Fehler tritt auf, wenn der private Name im Klassenkontext existiert, aber das Objekt, auf dem es zugegriffen wird, ungültig ist. Wenn der private Name nicht existiert, erhalten Sie stattdessen einen [Syntaxfehler](/de/docs/Web/JavaScript/Reference/Errors/Undeclared_private_field_or_method).

## Beispiele

### Nicht übereinstimmende statische/Instanz-Felder

Möglicherweise haben Sie das Feld als statisches Feld deklariert, versuchen jedoch, darauf auf einer Instanz zuzugreifen, oder umgekehrt.

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

Um dies zu beheben, ändern Sie entweder das Feld zu einem Instanz-Feld oder greifen Sie auf das Feld auf der Klasse selbst zu oder deklarieren Sie ein weiteres Feld auf der Instanz. Beachten Sie, dass der private Namensraum zwischen statischen und Instanz-Eigenschaften geteilt wird, sodass Sie nicht eine statische und eine Instanz-private Eigenschaft mit demselben Namen haben können.

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

Dies liegt daran, dass {{jsxref("JSON.stringify()")}} die Ersetzerfunktion mit dem Objekt, das `value` enthält, als `this` aufruft, sodass das private Feld nicht zugänglich ist. Um dies zu beheben, können Sie die Methode an das Objekt binden oder eine Pfeilfunktion verwenden, um sicherzustellen, dass `replacer.func` mit dem richtigen `this`-Wert aufgerufen wird.

```js example-good
const replacer = new JSONReplacer();
JSON.stringify({ a: 1, b: { c: 2 } }, replacer.func.bind(replacer));
JSON.stringify({ a: 1, b: { c: 2 } }, (...args) => replacer.func(...args));
```

Meistens, wenn Sie versehentlich eine Methode entbunden haben, würde die Methode mit `undefined` als `this`-Wert aufgerufen, was zu einem anderen Fehler führen würde (TypeError: can't convert undefined to object). Dieser Fehler tritt nur auf, wenn die Methode mit einem anderen Objekt als `this` aufgerufen wird, entweder durch die Verwendung von {{jsxref("Function/call", "call()")}} oder {{jsxref("Function/apply", "apply()")}}, oder indem die Methode als Callback an eine Funktion übergeben wird, die sie mit einem anderen `this`-Wert aufruft.

Wenn Sie nicht sicher sind, dass das Objekt die private Eigenschaft enthält, wie im folgenden Code:

```js
class MyClass {
  #x = 0;
  static doSomething(obj) {
    console.log(obj.#x); // Löst aus, wenn obj keine Instanz von MyClass ist
  }
}
```

Sie können den {{jsxref("Operators/in", "in")}} Operator verwenden, um zunächst eine _Markenprüfung_ durchzuführen.

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

### Zugriff auf statische Eigenschaften von Unterklassen

Wenn Sie eine [private statische Eigenschaft](/de/docs/Web/JavaScript/Reference/Classes/Private_properties#private_static_fields) haben, können Sie nur auf die Klasse zugreifen, die diese deklariert, nicht auf Unterklassen.

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

Um dies zu beheben, greifen Sie niemals über `this` auf private statische Eigenschaften zu. Geben Sie stattdessen immer explizit den Klassennamen an.

```js example-good
class MyClass {
  static #x = 0;
  doSomething() {
    console.log(MyClass.#x);
  }
}
```

### Zugriff auf gleichnamige private Eigenschaften in einer anderen Klasse

Im Gegensatz zu normalen Zeichenketten- oder Symbol-Eigenschaften werden private Namen nicht zwischen Klassen geteilt. Wenn Sie eine private Eigenschaft mit demselben Namen in zwei Klassen haben, sind sie immer noch nicht dieselbe Eigenschaft, und Sie können nicht auf eine private Eigenschaft einer Klasse aus einer anderen Klasse zugreifen.

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

Sie können private Eigenschaften nicht dynamisch zu nicht verwandten Objekten hinzufügen.

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

Wenn Sie dies wirklich tun möchten, erwägen Sie den [Return-Override](/de/docs/Web/JavaScript/Reference/Classes/Private_properties#returning_overriding_object) Trick. In der Regel möchten Sie jedoch wahrscheinlich einen {{jsxref("WeakMap")}} verwenden.

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
