---
title: DisposableStack() Konstruktor
short-title: DisposableStack()
slug: Web/JavaScript/Reference/Global_Objects/DisposableStack/DisposableStack
l10n:
  sourceCommit: 7a5b580a28a0b1a33e42e9fb81c8234994ec0e36
---

Der **`DisposableStack()`** Konstruktor erstellt {{jsxref("DisposableStack")}}-Objekte.

## Syntax

```js-nolint
new DisposableStack()
```

> [!NOTE]
> `DisposableStack()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert werden. Der Versuch, es ohne `new` aufzurufen, führt zu einem {{jsxref("TypeError")}}.

### Parameter

Keine.

### Rückgabewert

Ein neues `DisposableStack`-Objekt.

## Beispiele

### Erstellen eines DisposableStack

```js
const disposer = new DisposableStack();
disposer.defer(() => console.log("Disposed!"));
disposer.dispose();
// Logs: Disposed!
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [JavaScript Ressourcenverwaltung](/de/docs/Web/JavaScript/Guide/Resource_management)
