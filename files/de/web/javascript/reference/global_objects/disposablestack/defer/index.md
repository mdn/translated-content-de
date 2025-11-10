---
title: DisposableStack.prototype.defer()
short-title: defer()
slug: Web/JavaScript/Reference/Global_Objects/DisposableStack/defer
l10n:
  sourceCommit: 7a5b580a28a0b1a33e42e9fb81c8234994ec0e36
---

Die **`defer()`** Methode von {{jsxref("DisposableStack")}} Instanzen nimmt eine Rückruffunktion an, die aufgerufen wird, wenn der Stack entsorgt wird.

## Syntax

```js-nolint
defer(onDispose)
```

### Parameter

- `onDispose`
  - : Eine Funktion, die aufgerufen wird, wenn der Stack entsorgt wird. Die Funktion erhält keine Argumente.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `onDispose` keine Funktion ist.
- {{jsxref("ReferenceError")}}
  - : Wird ausgelöst, wenn der Stack bereits entsorgt ist.

## Beschreibung

Der Hauptzweck von `defer()` besteht darin, einen Bereinigungs-Callback zu registrieren, der nicht spezifisch für die Entsorgung einer bestimmten Ressource ist. Wenn der Callback spezifisch für eine Ressource ist, sollten Sie {{jsxref("DisposableStack/use", "use()")}} oder {{jsxref("DisposableStack/adopt", "adopt()")}} verwenden. Sie können `defer` auch verwenden, wenn die Ressource nicht in Ihrem Code beansprucht wird:

```js
function consumeReader(reader) {
  using disposer = new DisposableStack();
  disposer.defer(() => reader.releaseLock());
  // Do something with reader
}
```

## Beispiele

### Verwendung von defer()

Diese Funktion setzt ein einfaches Sperre, um zu verhindern, dass mehrere asynchrone Operationen gleichzeitig ausgeführt werden. Die Sperre wird freigegeben, wenn die Funktion abgeschlossen ist.

```js
let isLocked = false;

async function requestWithLock(url, options) {
  if (isLocked) {
    return undefined;
  }
  using disposer = new DisposableStack();
  isLocked = true;
  disposer.defer(() => (isLocked = false));
  const data = await fetch(url, options).then((res) => res.json());
  return data;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [JavaScript Ressourcenmanagement](/de/docs/Web/JavaScript/Guide/Resource_management)
- {{jsxref("DisposableStack")}}
- {{jsxref("DisposableStack.prototype.adopt()")}}
- {{jsxref("DisposableStack.prototype.use()")}}
