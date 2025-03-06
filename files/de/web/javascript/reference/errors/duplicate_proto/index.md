---
title: "SyntaxError: property name __proto__ appears more than once in object literal"
slug: Web/JavaScript/Reference/Errors/Duplicate_proto
l10n:
  sourceCommit: 3dbbefa32758e2a1ca9a37c2788370c06aae2738
---

{{jsSidebar("Errors")}}

Der JavaScript-Ausnahmefehler "property name \_\_proto\_\_ appears more than once in object literal" tritt auf, wenn ein [Objektliteral](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) mehrfach das Feld `__proto__` enthält, welches verwendet wird, um das [Prototype dieses neuen Objekts festzulegen](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer#prototype_setter).

## Nachricht

```plain
SyntaxError: Duplicate __proto__ fields are not allowed in object literals (V8-based)
SyntaxError: property name __proto__ appears more than once in object literal (Firefox)
SyntaxError: Attempted to redefine __proto__ property. (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was schiefgelaufen ist

Der Schlüssel `__proto__` ist, im Gegensatz zu anderen Eigenschaftsschlüsseln, eine spezielle Syntax in einem Objektliteral. Er wird verwendet, um das Prototype des zu erstellenden Objekts festzulegen, und darf nicht mehrmals in einem Objektliteral erscheinen. Beachten Sie, dass diese Einschränkung nur für die `__proto__`-Prototype-Setter-Syntax gilt: Wenn es tatsächlich die Wirkung hat, eine Eigenschaft namens `__proto__` zu erstellen, kann es mehrfach auftreten. Siehe [Prototype-Setter](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer#prototype_setter) für die genauen Syntax-Beschränkungen.

Es ist erwähnenswert, dass der `__proto__`-Schlüssel in Objektliteralen eine spezielle Syntax ist und nicht veraltet ist, im Gegensatz zur [`Object.prototype.__proto__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/proto) Zugriffseigenschaft.

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

- [Objektliteral](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer)
- [Vererbung und die Prototype-Kette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)
