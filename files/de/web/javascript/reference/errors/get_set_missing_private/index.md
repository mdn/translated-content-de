---
title: "TypeError: kann nicht auf privates Feld oder Methode zugreifen/setzen: Objekt ist nicht die richtige Klasse"
slug: Web/JavaScript/Reference/Errors/Get_set_missing_private
l10n:
  sourceCommit: 06e6e54baef7032c4e81ca93291fde0a0585de8b
---

Der JavaScript-Fehler "kann nicht auf privates Feld oder Methode zugreifen: Objekt ist nicht die richtige Klasse" oder "kann privates Feld nicht setzen: Objekt ist nicht die richtige Klasse" tritt auf, wenn ein privates Feld oder eine Methode bei einem Objekt abgefragt oder gesetzt wird, das dieses [private Element](/de/docs/Web/JavaScript/Reference/Classes/Private_elements) nicht definiert hat.

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

Sie versuchen, auf ein privates Feld oder eine Methode bei einem Objekt zuzugreifen oder es zu setzen, aber dieses Objekt enthält nicht dieses private Element. Private Instanzeigenschaften können nur bei Instanzen der Klasse (einschließlich ihrer Unterklassen) zugegriffen werden, die sie deklariert; private statische Eigenschaften können nur bei der Klasse selbst zugegriffen werden, die sie deklariert, und nicht bei Unterklassen.

Dieser Fehler tritt auf, wenn der private Name im Klassenbereich existiert, aber das Objekt, bei dem darauf zugegriffen wird, ungültig ist. Wenn der private Name nicht existiert, erhalten Sie stattdessen einen [Syntaxfehler](/de/docs/Web/JavaScript/Reference/Errors/Undeclared_private_field_or_method).

## Beispiele

### Nicht übereinstimmende statische/Instanzfelder

Sie haben das Feld möglicherweise als statisches Feld deklariert, versuchen aber darauf bei einer Instanz zuzugreifen, oder umgekehrt.

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

Um dies zu beheben, ändern Sie das Feld entweder in ein Instanzfeld, greifen Sie auf das Feld bei der Klasse selbst zu oder deklarieren Sie ein anderes Feld bei der Instanz. Beachten Sie, dass der private Namensraum zwischen statischen und Instanzeigenschaften geteilt wird, sodass Sie kein statisches und instanzenbasiertes privates Element mit demselben Namen haben können.

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

Vielleicht haben Sie eine Methode, die auf `this.#x` zugreift, jedoch mit einem anderen `this`-Wert aufgerufen wird.

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

Dies liegt daran, dass {{jsxref("JSON.stringify()")}} die Ersetzungsfunktion mit dem Objekt aufruft, das `value` enthält, als `this`, sodass das private Feld nicht zugänglich ist. Um dies zu beheben, können Sie die Methode an das Objekt binden oder eine Pfeilfunktion verwenden, um sicherzustellen, dass `replacer.func` mit dem korrekten `this`-Wert aufgerufen wird.

```js example-good
const replacer = new JSONReplacer();
JSON.stringify({ a: 1, b: { c: 2 } }, replacer.func.bind(replacer));
JSON.stringify({ a: 1, b: { c: 2 } }, (...args) => replacer.func(...args));
```

Meistens, wenn Sie versehentlich eine Methode ungebunden haben, würde die Methode mit `undefined` als `this` aufgerufen, was zu einem anderen Fehler führen würde (TypeError: kann undefined nicht in Objekt konvertieren). Dieser Fehler tritt nur auf, wenn die Methode mit einem anderen Objekt als `this` aufgerufen wird, entweder durch die Verwendung von {{jsxref("Function/call", "call()")}} oder {{jsxref("Function/apply", "apply()")}}, oder durch Übergabe der Methode als Rückruffunktion an eine Funktion, die sie mit einem anderen `this`-Wert aufruft.

Wenn Sie nicht sicher sind, ob das Objekt das private Element enthalten wird, wie im folgenden Code:

```js
class MyClass {
  #x = 0;
  static doSomething(obj) {
    console.log(obj.#x); // Throws if obj is not an instance of MyClass
  }
}
```

Können Sie den {{jsxref("Operators/in", "in")}} Operator verwenden, um zuerst eine _gebrandete Überprüfung_ durchzuführen.

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

### Zugriff auf statische Elemente bei Unterklassen

Wenn Sie eine [private statische Eigenschaft](/de/docs/Web/JavaScript/Reference/Classes/Private_elements#private_static_fields) haben, können Sie nur bei der Klasse, die sie deklariert, darauf zugreifen, nicht bei Unterklassen.

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

Um dies zu beheben, greifen Sie niemals über `this` auf private statische Eigenschaften zu. Stattdessen geben Sie immer explizit den Namen der Klasse an.

```js example-good
class MyClass {
  static #x = 0;
  doSomething() {
    console.log(MyClass.#x);
  }
}
```

### Zugriff auf gleichnamige private Elemente in einer anderen Klasse

Im Gegensatz zu normalen String- oder Symbol-Eigenschaften werden private Namen nicht zwischen Klassen geteilt. Wenn Sie ein privates Element mit demselben Namen in zwei Klassen haben, sind sie dennoch nicht dasselbe Element, und Sie können nicht auf das private Element einer Klasse von einer anderen Klasse zugreifen.

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

Wenn Sie dies wirklich tun möchten, ziehen Sie den [Rücküberschreibungstrick](/de/docs/Web/JavaScript/Reference/Classes/Private_elements#returning_overriding_object) in Betracht. Im Allgemeinen möchten Sie jedoch wahrscheinlich eher einen {{jsxref("WeakMap")}} verwenden.

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
