---
title: "TypeError: getting private setter-only property"
slug: Web/JavaScript/Reference/Errors/Private_setter_only
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Die JavaScript-Ausnahme "getting private setter-only property" tritt auf, wenn versucht wird, den Wert eines [privaten Elements](/de/docs/Web/JavaScript/Reference/Classes/Private_elements) zu lesen, für das nur ein [Setter](/de/docs/Web/JavaScript/Reference/Functions/set) definiert ist.

## Meldung

```plain
TypeError: '#x' was defined without a getter (V8-based)
TypeError: getting private setter-only property (Firefox)
TypeError: Trying to access an undefined private getter (Safari)
```

## Fehlerart

{{jsxref("TypeError")}}

## Was ist schiefgelaufen?

Es wird versucht, den Wert eines privaten Elements abzurufen, für das nur ein [Setter](/de/docs/Web/JavaScript/Reference/Functions/set) angegeben ist. Im Gegensatz zu normalen Objekten, bei denen ein nicht definierter Getter bedeutet, dass die Eigenschaft immer undefined zurückgibt, stellt dies bei privaten Elementen einen Fehler dar.

## Beispiele

### Privates Element ohne Getter

Hier hat `#name` keinen Getter, sodass der Versuch, es mit `this.#name` zu lesen, einen Fehler auslöst.

```js example-bad
class Person {
  set #name(value) {}

  get name() {
    return this.#name;
  }
}

const person = new Person();
console.log(person.name);
```

Es ist ungewöhnlich, dass ein privates Element einen Setter ohne einen Getter hat. Fügen Sie entweder einen Getter hinzu oder refaktorieren Sie Ihr Programm so, dass der Setter ebenfalls entfernt werden kann.

## Siehe auch

- [Private Elemente](/de/docs/Web/JavaScript/Reference/Classes/Private_elements)
- [`set`](/de/docs/Web/JavaScript/Reference/Functions/set)
