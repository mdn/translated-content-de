---
title: "SyntaxError: Der Eigenschaftenname __proto__ erscheint mehr als einmal im Objektliteral"
slug: Web/JavaScript/Reference/Errors/Duplicate_proto
l10n:
  sourceCommit: 59a92ab5609f0a021602f11843f3b00b16e67e6d
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "property name \_\_proto\_\_ appears more than once in object literal" tritt auf, wenn ein [Objektliteral](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) mehrere Vorkommen des `__proto__` Feldes enthält, das verwendet wird, um [das Prototyp des neuen Objekts festzulegen](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer#prototype_setter).

## Nachricht

```plain
SyntaxError: Duplicate __proto__ fields are not allowed in object literals (V8-based)
SyntaxError: property name __proto__ appears more than once in object literal (Firefox)
SyntaxError: Attempted to redefine __proto__ property. (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist schiefgelaufen?

Der `__proto__` Schlüssel ist, im Gegensatz zu anderen Eigenschaftsschlüsseln, eine spezielle Syntax in einem Objektliteral. Er wird verwendet, um das Prototyp des erstellten Objekts festzulegen und darf in einem Objektliteral nicht mehr als einmal vorkommen. Beachten Sie, dass diese Einschränkung nur für die `__proto__` Prototyp-Setzer-Syntax gilt: Wenn sie tatsächlich die Wirkung hat, eine Eigenschaft namens `__proto__` zu erstellen, kann sie mehrmals auftreten. Siehe [Prototype Setzer](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer#prototype_setter) für die genauen Syntaxeinschränkungen.

Es ist erwähnenswert, dass der `__proto__` Schlüssel in Objektliteralen eine spezielle Syntax darstellt und im Gegensatz zu der [`Object.prototype.__proto__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/proto) Zugriffs-Eigenschaft nicht veraltet ist.

## Beispiele

### Ungültige Fälle

```js example-bad
const obj = { __proto__: {}, __proto__: { a: 1 } };
```

### Gültige Fälle

```js example-good
// Nur einmal das Prototyp festlegen
const obj = { __proto__: { a: 1 } };

// Diese Syntaxen erzeugen alle eine Eigenschaft namens "__proto__" und können nebeneinander existieren
// Sie würden sich überschreiben, und die letzte wird tatsächlich verwendet
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
- [Vererbung und die Prototyp-Kette](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
