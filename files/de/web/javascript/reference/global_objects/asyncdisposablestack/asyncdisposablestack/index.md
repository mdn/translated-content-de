---
title: AsyncDisposableStack()-Konstruktor
short-title: AsyncDisposableStack()
slug: Web/JavaScript/Reference/Global_Objects/AsyncDisposableStack/AsyncDisposableStack
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Der **`AsyncDisposableStack()`**-Konstruktor erstellt {{jsxref("AsyncDisposableStack")}}-Objekte.

## Syntax

```js-nolint
new AsyncDisposableStack()
```

> [!NOTE]
> `AsyncDisposableStack()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden. Ein Aufruf ohne `new` löst einen {{jsxref("TypeError")}} aus.

### Parameter

Keine.

### Rückgabewert

Ein neues `AsyncDisposableStack`-Objekt.

## Beispiele

### Einen AsyncDisposableStack erstellen

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

- [Polyfill für `AsyncDisposableStack` in `core-js`](https://core-js.io/docs/features/ecmascript/explicit-resource-management)
- [JavaScript-Ressourcenverwaltung](/de/docs/Web/JavaScript/Guide/Resource_management)
