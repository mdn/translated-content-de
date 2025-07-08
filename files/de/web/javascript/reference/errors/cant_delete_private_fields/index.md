---
title: "SyntaxError: private fields können nicht gelöscht werden"
slug: Web/JavaScript/Reference/Errors/Cant_delete_private_fields
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Der JavaScript-Ausnahmefehler "SyntaxError: private fields können nicht gelöscht werden" tritt auf, wenn [`delete`](/de/docs/Web/JavaScript/Reference/Operators/delete) auf ein [privates Element](/de/docs/Web/JavaScript/Reference/Classes/Private_elements) einer Klasse oder eines Objekts angewendet wird.

## Meldung

```plain
SyntaxError: Private fields can not be deleted (V8-based)
SyntaxError: private fields can't be deleted (Firefox)
SyntaxError: Cannot delete private field X (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist schiefgelaufen?

Es gibt Code, der versucht, ein privates Element (Feld oder Methode) eines Objekts oder einer Klasse zu `löschen`. Dies ist in JavaScript nicht erlaubt — private Elemente können nicht spontan hinzugefügt oder entfernt werden.

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
