---
title: "TypeError: can't access/set private field or method: object is not the right class"
slug: Web/JavaScript/Reference/Errors/Get_set_missing_private
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Der JavaScript-Ausnahmefehler "can't access private field or method: object is not the right class" oder "can't set private field: object is not the right class" tritt auf, wenn ein privates Feld oder eine Methode an einem Objekt genutzt oder gesetzt wird, das dieses [private Element](/de/docs/Web/JavaScript/Reference/Classes/Private_elements) nicht definiert hat.

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

Sie versuchen, ein privates Feld oder eine Methode an einem Objekt aufzurufen, aber dieses Objekt enthält dieses private Element nicht. Private Instanzeigenschaften können nur auf Instanzen der Klasse (einschließlich ihrer Unterklassen), die sie deklariert, zugegriffen werden; private statische Eigenschaften können nur auf der Klasse selbst, die sie deklariert, und nicht auf Unterklassen zugegriffen werden.

Dieser Fehler tritt auf, wenn der private Name im Klassenscope existiert, aber das Objekt, auf das zugegriffen wird, ungültig ist. Wenn der private Name nicht existiert, erhalten Sie stattdessen einen [Syntaxfehler](/de/docs/Web/JavaScript/Reference/Errors/Undeclared_private_field_or_method).

## Beispiele

### Nicht übereinstimmende statische/Instanzfelder

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

Um dies zu beheben, ändern Sie entweder das Feld in ein Instanzfeld oder greifen Sie auf das Feld direkt auf der Klasse zu, oder deklarieren Sie ein weiteres Feld auf der Instanz. Beachten Sie, dass der private Namensraum zwischen statischen und Instanzeigenschaften geteilt wird, sodass Sie kein statisches und Instanz-Privat-Element mit demselben Namen haben können.

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

Dies liegt daran, dass {{jsxref("JSON.stringify()")}} die Replacer-Funktion mit dem Objekt aufruft, das `value` enthält, als `this`, sodass das private Feld nicht zugänglich ist. Um dies zu beheben, können Sie die Methode an das Objekt binden oder eine Pfeilfunktion verwenden, um sicherzustellen, dass `replacer.func` mit dem korrekten `this`-Wert aufgerufen wird.

```js example-good
const replacer = new JSONReplacer();
JSON.stringify({ a: 1, b: { c: 2 } }, replacer.func.bind(replacer));
JSON.stringify({ a: 1, b: { c: 2 } }, (...args) => replacer.func(...args));
```

Meistens, wenn Sie versehentlich eine Methode entbunden haben, würde die Methode mit `undefined` als `this` aufgerufen, was zu einem anderen Fehler (TypeError: can't convert undefined to object) führen würde. Dieser Fehler tritt nur auf, wenn die Methode mit einem anderen Objekt als `this` aufgerufen wird, entweder durch Verwendung von {{jsxref("Function/call", "call()")}} oder {{jsxref("Function/apply", "apply()")}}, oder indem die Methode als Rückruffunktion an eine Funktion übergeben wird, die sie mit einem anderen `this`-Wert aufruft.

Wenn Sie nicht sicher wissen, dass das Objekt das private Element enthalten wird, wie im folgenden Code:

```js
class MyClass {
  #x = 0;
  static doSomething(obj) {
    console.log(obj.#x); // Throws if obj is not an instance of MyClass
  }
}
```

können Sie den {{jsxref("Operators/in", "in")}}-Operator verwenden, um zuerst einen _Marken-Check_ durchzuführen.

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

Wenn Sie eine [private statische Eigenschaft](/de/docs/Web/JavaScript/Reference/Classes/Private_elements#private_static_fields) haben, können Sie nur auf sie in der Klasse zugreifen, die sie deklariert, nicht in Unterklassen.

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

Um dies zu beheben, greifen Sie niemals über `this` auf private statische Eigenschaften zu. Stattdessen geben Sie immer explizit den Klassennamen an.

```js example-good
class MyClass {
  static #x = 0;
  doSomething() {
    console.log(MyClass.#x);
  }
}
```

### Zugriff auf gleichnamige private Elemente in einer anderen Klasse

Im Gegensatz zu normalen String- oder Symbol-Eigenschaften werden private Namen nicht zwischen Klassen geteilt. Wenn Sie ein privates Element mit demselben Namen in zwei Klassen haben, sind sie trotzdem nicht dasselbe Element, und Sie können nicht auf das private Element einer Klasse aus einer anderen Klasse zugreifen.

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

### Hinzufügen von privaten Elementen zu nicht verwandten Objekten

Sie können privaten Objekten nicht dynamisch _private Elemente_ hinzufügen.

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

Wenn Sie dies wirklich tun möchten, ziehen Sie den [Rückgabe-Überschreibung](/de/docs/Web/JavaScript/Reference/Classes/Private_elements#returning_overriding_object)-Trick in Betracht. Im Allgemeinen möchten Sie jedoch wahrscheinlich eher einen {{jsxref("WeakMap")}} verwenden.

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
