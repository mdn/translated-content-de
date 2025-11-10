---
title: "SyntaxError: Property-Name __proto__ erscheint mehr als einmal im Objektliteral"
slug: Web/JavaScript/Reference/Errors/Duplicate_proto
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Der JavaScript-Ausnahmefehler "property name \_\_proto\_\_ appears more than once in object literal" tritt auf, wenn ein [Objektliteral](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) mehrfach das Feld `__proto__` enthält, das verwendet wird, um [das Prototyp-Objekt dieses neuen Objekts festzulegen](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer#prototype_setter).

## Meldung

```plain
SyntaxError: Duplicate __proto__ fields are not allowed in object literals (V8-based)
SyntaxError: property name __proto__ appears more than once in object literal (Firefox)
SyntaxError: Attempted to redefine __proto__ property. (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist schiefgelaufen?

Der Schlüssel `__proto__` ist im Gegensatz zu anderen Eigenschaftsschlüsseln eine spezielle Syntax in einem Objektliteral. Er wird verwendet, um das Prototyp-Objekt des erstellten Objekts festzulegen und darf in einem Objektliteral nicht mehr als einmal erscheinen. Beachten Sie, dass diese Einschränkung nur für die `__proto__`-Prototyp-Setter-Syntax gilt: Wenn sie tatsächlich die Wirkung hat, eine Eigenschaft mit dem Namen `__proto__` zu erstellen, kann sie mehrfach auftreten. Siehe [Prototyp-Setter](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer#prototype_setter) für die genauen Syntax-Einschränkungen.

Beachtenswert ist, dass der Schlüssel `__proto__` in Objektliteralen eine spezielle Syntax ist und im Gegensatz zur [`Object.prototype.__proto__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/proto)-Zugriffseigenschaft nicht veraltet ist.

## Beispiele

### Ungültige Fälle

```js example-bad
const obj = { __proto__: {}, __proto__: { a: 1 } };
```

### Gültige Fälle

```js example-good
// Only setting the prototype once
const obj = { __proto__: { a: 1 } };

// These syntaxes all create a property called "__proto__" and can coexist
// They would overwrite each other and the last one is actually used
const __proto__ = null;
const obj2 = {
  ["__proto__"]: {},
  __proto__,
  __proto__() {},
  get __proto__() {
    return 1;
  },
};
```

## Siehe auch

- [Objektinitialisierer](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer)
- [Vererbung und die Prototyp-Kette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)
