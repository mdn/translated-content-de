---
title: "SyntaxError: Verweis auf nicht deklariertes privates Feld oder Methode #x"
slug: Web/JavaScript/Reference/Errors/Undeclared_private_field_or_method
l10n:
  sourceCommit: 48184c65d7e6d59e867806d9e349661c737bdc4b
---

{{jsSidebar("Errors")}}

Der JavaScript-Ausnahmefehler "Verweis auf ein nicht deklariertes privates Feld oder Methode #x" tritt auf, wenn ein [privater Name](/de/docs/Web/JavaScript/Reference/Classes/Private_elements) verwendet wird, dieser private Name jedoch im Klassenbereich nicht deklariert ist.

## Meldung

```plain
SyntaxError: Private field '#x' must be declared in an enclosing class (V8-based)
SyntaxError: reference to undeclared private field or method #x (Firefox)
SyntaxError: Cannot reference undeclared private names: "#x" (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ging schief?

Im Gegensatz zu normalen String- oder Symbol-Eigenschaften, die `undefined` zurückgeben, wenn die Eigenschaft nicht existiert, sind private Namen sehr strikt und können nur dann legal zugegriffen werden, wenn sie tatsächlich existieren. Der Zugriff auf einen nicht deklarierten privaten Namen führt zu einem Syntaxfehler, während der Zugriff auf einen deklarierten privaten Namen, der aber nicht auf dem Objekt existiert, zu einem [Typfehler](/de/docs/Web/JavaScript/Reference/Errors/Get_set_missing_private) führt.

## Beispiele

### Nicht deklariertes privates Feld

Sie können nicht auf ein privates Feld zugreifen, das im Klassenbereich nicht deklariert ist.

```js example-bad
class MyClass {
  doSomething() {
    console.log(this.#x);
  }
}
```

Der gleiche Fehler tritt auf, wenn Sie den {{jsxref("Operators/in", "in")}} Operator verwenden, um eine Überprüfung auf ein nicht deklariertes privates Feld durchzuführen.

```js example-bad
class MyClass {
  doSomething() {
    console.log(#x in this);
  }
}
```

Diese Codes sind wahrscheinlich Fehler, da es unmöglich ist, dass `#x` auf `this` existiert, wenn es im Klassenbereich nicht deklariert ist. Beachten Sie, dass Sie keine privaten Elemente dynamisch zu nicht verwandten Objekten hinzufügen können. Sie sollten diesen Code entweder entfernen oder das private Feld im Klassenbereich deklarieren.

```js example-good
class MyClass {
  #x = 0;
  doSomething() {
    console.log(this.#x);
  }
}
```

## Siehe auch

- [Klassen](/de/docs/Web/JavaScript/Reference/Classes)
- [Private Elemente](/de/docs/Web/JavaScript/Reference/Classes/Private_elements)
