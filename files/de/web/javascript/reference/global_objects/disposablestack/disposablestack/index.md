---
title: DisposableStack() Konstruktor
slug: Web/JavaScript/Reference/Global_Objects/DisposableStack/DisposableStack
l10n:
  sourceCommit: b6a36de3428f4b42c7707c8f190a349db13bf531
---

Der **`DisposableStack()`** Konstruktor erstellt {{jsxref("DisposableStack")}} Objekte.

## Syntax

```js-nolint
new DisposableStack()
```

> [!NOTE]
> `DisposableStack()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert werden. Der Versuch, es ohne `new` aufzurufen, löst einen {{jsxref("TypeError")}} aus.

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

- [JavaScript-Ressourcenverwaltung](/de/docs/Web/JavaScript/Guide/Resource_management)
