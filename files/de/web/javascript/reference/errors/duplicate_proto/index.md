---
title: "SyntaxError: der Eigenschaftsname __proto__ erscheint mehr als einmal im Objektliteral"
slug: Web/JavaScript/Reference/Errors/Duplicate_proto
l10n:
  sourceCommit: 59a92ab5609f0a021602f11843f3b00b16e67e6d
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "property name \_\_proto\_\_ appears more than once in object literal" tritt auf, wenn ein [Objektliteral](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) mehrere Vorkommen des `__proto__`-Feldes enthält, das verwendet wird, um [das Prototyp des neuen Objekts festzulegen](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer#prototype_setter).

## Meldung

```plain
SyntaxError: Duplicate __proto__ fields are not allowed in object literals (V8-based)
SyntaxError: property name __proto__ appears more than once in object literal (Firefox)
SyntaxError: Attempted to redefine __proto__ property. (Safari)
```

## Fehlerart

{{jsxref("SyntaxError")}}

## Was ist schiefgelaufen?

Der Schlüssel `__proto__`, im Gegensatz zu anderen Eigenschaftsschlüsseln, ist eine spezielle Syntax in einem Objektliteral. Er wird verwendet, um das Prototyp des erstellten Objekts festzulegen und darf nicht mehr als einmal in einem Objektliteral erscheinen. Beachten Sie, dass diese Einschränkung nur für die `__proto__`-Prototyp-Setter-Syntax gilt: Wenn es tatsächlich die Wirkung hat, eine Eigenschaft namens `__proto__` zu erstellen, kann es mehrmals erscheinen. Siehe [prototype setter](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer#prototype_setter) für die genauen Syntax-Einschränkungen.

Es ist erwähnenswert, dass der `__proto__`-Schlüssel in Objektliteralen eine spezielle Syntax ist und nicht veraltet ist, im Gegensatz zur [`Object.prototype.__proto__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/proto) Accessor-Eigenschaft.

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
  get __proto__() {},
};
```

## Siehe auch

- [Objektinitializer](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer)
- [Vererbung und die Prototypenkette](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
