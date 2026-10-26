---
title: DisposableStack()-Konstruktor
short-title: DisposableStack()
slug: Web/JavaScript/Reference/Global_Objects/DisposableStack/DisposableStack
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Der **`DisposableStack()`**-Konstruktor erstellt {{jsxref("DisposableStack")}}-Objekte.

## Syntax

```js-nolint
new DisposableStack()
```

> [!NOTE]
> `DisposableStack()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden. Ein Aufruf ohne `new` löst einen {{jsxref("TypeError")}} aus.

### Parameter

Keine.

### Rückgabewert

Ein neues `DisposableStack`-Objekt.

## Beispiele

### Einen DisposableStack erstellen

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

- [Polyfill für `DisposableStack` in `core-js`](https://core-js.io/docs/features/ecmascript/explicit-resource-management)
- [JavaScript-Ressourcenverwaltung](/de/docs/Web/JavaScript/Guide/Resource_management)
