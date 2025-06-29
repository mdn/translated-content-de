---
title: "TypeError: getting private setter-only property"
slug: Web/JavaScript/Reference/Errors/Private_setter_only
l10n:
  sourceCommit: 48184c65d7e6d59e867806d9e349661c737bdc4b
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "getting private setter-only property" tritt auf, wenn der Wert eines [privaten Elements](/de/docs/Web/JavaScript/Reference/Classes/Private_elements) gelesen wird, für das nur ein [Setter](/de/docs/Web/JavaScript/Reference/Functions/set) definiert ist.

## Nachricht

```plain
TypeError: '#x' was defined without a getter (V8-based)
TypeError: getting private setter-only property (Firefox)
TypeError: Trying to access an undefined private getter (Safari)
```

## Fehlertyp

{{jsxref("TypeError")}}

## Was ist schiefgegangen?

Es wird versucht, den Wert eines privaten Elements zu ermitteln, für das nur ein [Setter](/de/docs/Web/JavaScript/Reference/Functions/set) angegeben ist. Anders als bei normalen Objekten, bei denen ein undefinierter Getter lediglich bedeutet, dass die Eigenschaft immer undefined zurückgeben würde, ist dies bei privaten Elementen ein Fehler.

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

Es ist unüblich, dass ein privates Element einen Setter ohne einen Getter hat. Entweder fügen Sie einen Getter hinzu oder refaktorisieren Sie Ihr Programm so, dass der Setter ebenfalls entfernt werden kann.

## Siehe auch

- [Private Elemente](/de/docs/Web/JavaScript/Reference/Classes/Private_elements)
- [`set`](/de/docs/Web/JavaScript/Reference/Functions/set)
