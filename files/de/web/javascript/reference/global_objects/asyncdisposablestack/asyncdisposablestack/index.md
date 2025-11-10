---
title: AsyncDisposableStack() Konstruktor
short-title: AsyncDisposableStack()
slug: Web/JavaScript/Reference/Global_Objects/AsyncDisposableStack/AsyncDisposableStack
l10n:
  sourceCommit: 7a5b580a28a0b1a33e42e9fb81c8234994ec0e36
---

Der **`AsyncDisposableStack()`** Konstruktor erstellt {{jsxref("AsyncDisposableStack")}} Objekte.

## Syntax

```js-nolint
new AsyncDisposableStack()
```

> [!NOTE]
> `AsyncDisposableStack()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert werden. Der Versuch, es ohne `new` aufzurufen, löst einen {{jsxref("TypeError")}} aus.

### Parameter

Keine.

### Rückgabewert

Ein neues `AsyncDisposableStack` Objekt.

## Beispiele

### Erstellen eines AsyncDisposableStack

```js
const disposer = new AsyncDisposableStack();
disposer.defer(() => console.log("Disposed!"));
await disposer.disposeAsync();
// Logs: Disposed!
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [JavaScript Ressourcenmanagement](/de/docs/Web/JavaScript/Guide/Resource_management)
