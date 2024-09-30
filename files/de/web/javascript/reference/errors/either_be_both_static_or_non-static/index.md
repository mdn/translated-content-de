---
title: "SyntaxError: Getter und Setter für privaten Namen #x sollten entweder beide statisch oder nicht statisch sein"
slug: Web/JavaScript/Reference/Errors/Either_be_both_static_or_non-static
l10n:
  sourceCommit: 41cddfdaeed4a73fb8234c332150df8e54df31e9
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "mismatched placement" tritt auf, wenn ein privater [Getter](/de/docs/Web/JavaScript/Reference/Functions/get) und [Setter](/de/docs/Web/JavaScript/Reference/Functions/set) nicht übereinstimmen, ob sie {{jsxref("Classes/static", "static")}} sind oder nicht.

## Nachricht

```plain
SyntaxError: Identifier '#x' has already been declared (V8-based)
SyntaxError: getter and setter for private name #x should either be both static or non-static (Firefox)
SyntaxError: Cannot declare a private non-static getter if there is a static private setter with used name. (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist schiefgelaufen?

Private [Getter](/de/docs/Web/JavaScript/Reference/Functions/get) und [Setter](/de/docs/Web/JavaScript/Reference/Functions/set) für denselben Namen müssen entweder beide {{jsxref("Classes/static", "static")}} oder beide nicht statisch sein. Diese Einschränkung existiert nicht für öffentliche Methoden.

## Beispiele

### Mismatched placement

```js-nolint example-bad
class Test {
  static set #foo(_) {}
  get #foo() {}
}

// SyntaxError: getter and setter for private name #foo should either be both static or non-static
```

Da `foo` [privat](/de/docs/Web/JavaScript/Reference/Classes/Private_properties) ist, müssen die Methoden entweder beide {{jsxref("Classes/static", "static")}} sein:

```js example-good
class Test {
  static set #foo(_) {}
  static get #foo() {}
}
```

oder nicht statisch:

```js example-good
class Test {
  set #foo(_) {}
  get #foo() {}
}
```

## Siehe auch

- {{jsxref("Functions/get", "get")}}
- {{jsxref("Functions/set", "set")}}
- {{jsxref("Classes/static", "static")}}
- [Private Eigenschaften](/de/docs/Web/JavaScript/Reference/Classes/Private_properties)
