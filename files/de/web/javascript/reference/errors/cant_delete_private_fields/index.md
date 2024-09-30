---
title: "SyntaxError: private fields können nicht gelöscht werden"
slug: Web/JavaScript/Reference/Errors/Cant_delete_private_fields
l10n:
  sourceCommit: 1197521ff42256b9d298144330cfd5b6e0d98c33
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "SyntaxError: private fields können nicht gelöscht werden" tritt auf, wenn [`delete`](/de/docs/Web/JavaScript/Reference/Operators/delete) bei einer [privaten Eigenschaft](/de/docs/Web/JavaScript/Reference/Classes/Private_properties) einer Klasse oder eines Objekts verwendet wird.

## Nachricht

```plain
SyntaxError: Private fields can not be deleted (V8-based)
SyntaxError: private fields can't be deleted (Firefox)
SyntaxError: Cannot delete private field X (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was lief schief?

Es gibt Code, der versucht, eine private Eigenschaft (Feld oder Methode) eines Objekts oder einer Klasse zu `löschen`. Dies ist in JavaScript verboten—private Eigenschaften können nicht spontan hinzugefügt oder entfernt werden.

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
- [Private Eigenschaften](/de/docs/Web/JavaScript/Reference/Classes/Private_properties)
