---
title: "TypeError: accessing private setter-only-Eigenschaft"
slug: Web/JavaScript/Reference/Errors/Private_setter_only
l10n:
  sourceCommit: faee5a3a8399d43ca3ef49912fcb6cba5be6834c
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "accessing private setter-only-Eigenschaft" tritt auf, wenn versucht wird, den Wert einer [privaten Eigenschaft](/de/docs/Web/JavaScript/Reference/Classes/Private_properties) zu lesen, für die nur ein [Setter](/de/docs/Web/JavaScript/Reference/Functions/set) definiert ist.

## Meldung

```plain
TypeError: '#x' was defined without a getter (V8-based)
TypeError: getting private setter-only property (Firefox)
TypeError: Trying to access an undefined private getter (Safari)
```

## Fehlertyp

{{jsxref("TypeError")}}

## Was ist schiefgelaufen?

Es wird versucht, den Wert einer privaten Eigenschaft zu ermitteln, für die nur ein [Setter](/de/docs/Web/JavaScript/Reference/Functions/set) angegeben ist. Im Gegensatz zu normalen Objekten, bei denen ein undefinierter Getter einfach bedeutet, dass die Eigenschaft immer undefined zurückgeben würde, ist dies bei privaten Eigenschaften ein Fehler.

## Beispiele

### Private Eigenschaft ohne Getter

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

Es ist untypisch, dass eine private Eigenschaft einen Setter ohne einen Getter hat. Entweder fügen Sie einen Getter hinzu oder refaktorieren Sie Ihr Programm so, dass der Setter ebenfalls entfernt werden kann.

## Siehe auch

- [Private Eigenschaften](/de/docs/Web/JavaScript/Reference/Classes/Private_properties)
- [`set`](/de/docs/Web/JavaScript/Reference/Functions/set)
