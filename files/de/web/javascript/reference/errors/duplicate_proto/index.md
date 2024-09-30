---
title: "SyntaxError: Eigenschaftenname __proto__ erscheint mehr als einmal im Objektliteral"
slug: Web/JavaScript/Reference/Errors/Duplicate_proto
l10n:
  sourceCommit: 59a92ab5609f0a021602f11843f3b00b16e67e6d
---

{{jsSidebar("Errors")}}

Der JavaScript-Fehler "Eigenschaftenname \_\_proto\_\_ erscheint mehr als einmal im Objektliteral" tritt auf, wenn ein [Objektliteral](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) mehrere Vorkommen des Felds `__proto__` enthält, das verwendet wird, um [das Prototyp-Objekt dieses neuen Objekts festzulegen](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer#prototype_setter).

## Meldung

```plain
SyntaxError: Duplicate __proto__ fields are not allowed in object literals (V8-based)
SyntaxError: property name __proto__ appears more than once in object literal (Firefox)
SyntaxError: Attempted to redefine __proto__ property. (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was schiefgelaufen ist

Der Schlüssel `__proto__` ist im Gegensatz zu anderen Eigenschaften-Schlüsseln eine spezielle Syntax in einem Objektliteral. Er wird verwendet, um den Prototyp des erstellten Objekts festzulegen und darf nicht mehr als einmal in einem Objektliteral erscheinen. Beachten Sie, dass diese Einschränkung nur für die `__proto__` Prototyp-Setter-Syntax gilt: Wenn sie tatsächlich die Wirkung hat, eine Eigenschaft namens `__proto__` zu erstellen, kann sie mehrmals erscheinen. Siehe [Prototyp-Setter](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer#prototype_setter) für die genauen Syntaxbeschränkungen.

Es ist erwähnenswert, dass der `__proto__` Schlüssel in Objektliteralen eine spezielle Syntax darstellt und im Gegensatz zur [`Object.prototype.__proto__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/proto) Accessor-Eigenschaft nicht veraltet ist.

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

- [Objektinitialisierer](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer)
- [Vererbung und die Prototypkette](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
