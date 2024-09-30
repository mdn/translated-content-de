---
title: "TypeError: kann nicht auf privates Feld oder Methode zugreifen/setzen: Objekt ist nicht die richtige Klasse"
slug: Web/JavaScript/Reference/Errors/Get_set_missing_private
l10n:
  sourceCommit: 3e180a7de9aaeaa061c17b5abc52426fc2d34b4c
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "can't access private field or method: object is not the right class" oder "can't set private field: object is not the right class" tritt auf, wenn versucht wird, ein privates Feld oder eine Methode auf einem Objekt abzurufen oder zu setzen, das diese [private Eigenschaft](/de/docs/Web/JavaScript/Reference/Classes/Private_properties) nicht definiert hat.

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

Sie versuchen, ein privates Feld oder eine Methode auf einem Objekt aufzurufen oder zu setzen, aber dieses Objekt enthält diese private Eigenschaft nicht. Private Instanzeigenschaften können nur in Instanzen der Klasse (einschließlich ihrer Unterklassen) aufgerufen werden, die sie deklariert; private statische Eigenschaften können nur in der Klasse selbst aufgerufen werden, die sie deklariert, und nicht in Unterklassen.

Dieser Fehler tritt auf, wenn der private Name im Klassenbereich existiert, aber das Objekt, auf dem er aufgerufen wird, ungültig ist. Wenn der private Name nicht existiert, erhalten Sie stattdessen einen [Syntaxfehler](/de/docs/Web/JavaScript/Reference/Errors/Undeclared_private_field_or_method).

## Beispiele

### Falsche Übereinstimmung von statischen/Instanzfeldern

Es kann sein, dass Sie das Feld als statisches Feld deklariert haben, aber versuchen, es in einer Instanz aufzurufen, oder umgekehrt.

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

Um dies zu beheben, ändern Sie entweder das Feld in ein Instanzfeld, oder rufen Sie das Feld auf der Klasse selbst auf, oder deklarieren Sie ein weiteres Feld in der Instanz. Beachten Sie, dass der private Namensraum zwischen statischen und Instanzeigenschaften geteilt wird, sodass Sie nicht dieselbe Benennung für eine statische und eine Instanz-Privateigenschaft verwenden können.

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

Das liegt daran, dass {{jsxref("JSON.stringify()")}} die Ersetzungsfunktion mit dem Objekt, das `value` enthält, als `this` aufruft, sodass auf das private Feld nicht zugegriffen werden kann. Um dies zu beheben, können Sie die Methode an das Objekt binden oder eine Pfeilfunktion verwenden, um sicherzustellen, dass `replacer.func` mit dem richtigen `this`-Wert aufgerufen wird.

```js example-good
const replacer = new JSONReplacer();
JSON.stringify({ a: 1, b: { c: 2 } }, replacer.func.bind(replacer));
JSON.stringify({ a: 1, b: { c: 2 } }, (...args) => replacer.func(...args));
```

Die meisten der Zeit, wenn Sie versehentlich eine Methode ungebunden haben, wird die Methode mit `undefined` als `this` aufgerufen, was zu einem anderen Fehler führen würde (TypeError: kann `undefined` nicht in ein Objekt konvertieren). Dieser Fehler tritt nur auf, wenn die Methode mit einem anderen Objekt als `this` aufgerufen wird, entweder durch Verwendung von {{jsxref("Function/call", "call()")}} oder {{jsxref("Function/apply", "apply()")}}, oder indem die Methode als Rückruffunktion an eine Funktion übergeben wird, die sie mit einem anderen `this`-Wert aufruft.

Wenn Sie nicht sicher sind, ob das Objekt die private Eigenschaft enthält, wie im folgenden Code:

```js
class MyClass {
  #x = 0;
  static doSomething(obj) {
    console.log(obj.#x); // Throws if obj is not an instance of MyClass
  }
}
```

Können Sie den {{jsxref("Operators/in", "in")}}-Operator verwenden, um zunächst eine _Markenprüfung_ durchzuführen.

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

### Aufruf von statischen Eigenschaften in Unterklassen

Wenn Sie eine [private statische Eigenschaft](/de/docs/Web/JavaScript/Reference/Classes/Private_properties#private_static_fields) haben, können Sie nur darauf in der Klasse zugreifen, die sie deklariert, nicht in Unterklassen.

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

Um dies zu beheben, rufen Sie niemals private statische Eigenschaften über `this` auf. Stattdessen geben Sie immer explizit den Namen der Klasse an.

```js example-good
class MyClass {
  static #x = 0;
  doSomething() {
    console.log(MyClass.#x);
  }
}
```

### Zugriff auf gleichnamige Privateigenschaften in einer anderen Klasse

Anders als normale Zeichenfolgen- oder Symbol-Eigenschaften werden private Namen nicht zwischen Klassen geteilt. Wenn Sie eine private Eigenschaft mit dem gleichen Namen in zwei Klassen haben, sind sie dennoch nicht dieselbe Eigenschaft, und Sie können nicht auf die private Eigenschaft einer Klasse von einer anderen Klasse zugreifen.

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

### Hinzufügen von Privateigenschaften zu nicht verwandten Objekten

Sie können nicht dynamisch private Eigenschaften zu nicht verwandten Objekten hinzufügen.

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

Wenn Sie dies wirklich tun möchten, ziehen Sie den [Rückgabewert-Override](/de/docs/Web/JavaScript/Reference/Classes/Private_properties#returning_overriding_object)-Trick in Betracht. Im Allgemeinen möchten Sie jedoch wahrscheinlich stattdessen eine {{jsxref("WeakMap")}} verwenden.

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
