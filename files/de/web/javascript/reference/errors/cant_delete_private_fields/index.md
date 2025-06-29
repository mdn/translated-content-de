---
title: "SyntaxError: private fields can't be deleted"
slug: Web/JavaScript/Reference/Errors/Cant_delete_private_fields
l10n:
  sourceCommit: 48184c65d7e6d59e867806d9e349661c737bdc4b
---

{{jsSidebar("Errors")}}

Der JavaScript-Fehler "SyntaxError: private fields can't be deleted" tritt auf, wenn [`delete`](/de/docs/Web/JavaScript/Reference/Operators/delete) auf ein [privates Element](/de/docs/Web/JavaScript/Reference/Classes/Private_elements) einer Klasse oder eines Objekts angewendet wird.

## Meldung

```plain
SyntaxError: Private fields can not be deleted (V8-based)
SyntaxError: private fields can't be deleted (Firefox)
SyntaxError: Cannot delete private field X (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist schiefgelaufen?

Es gibt Code, der versucht, ein privates Element (Feld oder Methode) eines Objekts oder einer Klasse zu `delete`. Dies ist in JavaScript verboten – private Elemente können nicht spontan hinzugefügt oder entfernt werden.

## Beispiele

```js example-bad
class MyClass {
  #myPrivateField;
  deleteIt() {
    delete this.#myPrivateField; // SyntaxError: private fields can't be deleted
  }
}
```

```js example-bad
class MyClass {
  #myPrivateMethod() {
  }
  #deleteIt() {
    delete this.#myPrivateMethod; // SyntaxError: private fields can't be deleted
  }
}
```

## Siehe auch

- [Klassen](/de/docs/Web/JavaScript/Reference/Classes)
- [Private Elemente](/de/docs/Web/JavaScript/Reference/Classes/Private_elements)
