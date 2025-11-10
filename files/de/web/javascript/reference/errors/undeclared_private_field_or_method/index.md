---
title: "SyntaxError: Verweis auf ein nicht deklariertes privates Feld oder eine Methode #x"
slug: Web/JavaScript/Reference/Errors/Undeclared_private_field_or_method
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Der JavaScript-Ausnahmefehler "Verweis auf ein nicht deklariertes privates Feld oder eine Methode #x" tritt auf, wenn ein [privater Name](/de/docs/Web/JavaScript/Reference/Classes/Private_elements) verwendet wird, aber dieser private Name nicht im Klassenbereich deklariert ist.

## Nachricht

```plain
SyntaxError: Private field '#x' must be declared in an enclosing class (V8-based)
SyntaxError: reference to undeclared private field or method #x (Firefox)
SyntaxError: Cannot reference undeclared private names: "#x" (Safari)
```

## Fehlerart

{{jsxref("SyntaxError")}}

## Was ist schiefgelaufen?

Im Gegensatz zu normalen String- oder Symbol-Eigenschaften, die `undefined` zurückgeben, wenn die Eigenschaft nicht existiert, sind private Namen sehr streng und können nur dann legal zugegriffen werden, wenn sie tatsächlich existieren. Der Zugriff auf einen nicht deklarierten privaten Namen führt zu einem Syntaxfehler, während der Zugriff auf einen deklarierten privaten Namen, der nicht auf dem Objekt existiert, zu einem [Typfehler](/de/docs/Web/JavaScript/Reference/Errors/Get_set_missing_private) führt.

## Beispiele

### Nicht deklariertes privates Feld

Sie können nicht auf ein privates Feld zugreifen, das nicht im Klassenbereich deklariert ist.

```js example-bad
class MyClass {
  doSomething() {
    console.log(this.#x);
  }
}
```

Der gleiche Fehler tritt auf, wenn Sie den {{jsxref("Operators/in", "in")}}-Operator verwenden, um eine Überprüfung auf ein nicht deklariertes privates Feld durchzuführen.

```js example-bad
class MyClass {
  doSomething() {
    console.log(#x in this);
  }
}
```

Diese Codes sind wahrscheinlich Fehler, da es unmöglich ist, dass `#x` auf `this` existiert, wenn es nicht im Klassenbereich deklariert ist. Beachten Sie, dass Sie private Elemente nicht dynamisch zu nicht verwandten Objekten hinzufügen können. Sie sollten diesen Code entweder entfernen oder das private Feld im Klassenbereich deklarieren.

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
