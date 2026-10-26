---
title: AsyncDisposableStack.prototype.adopt()
short-title: adopt()
slug: Web/JavaScript/Reference/Global_Objects/AsyncDisposableStack/adopt
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`adopt()`** von {{jsxref("AsyncDisposableStack")}}-Instanzen registriert einen Wert, der das asynchrone Disposable-Protokoll nicht implementiert, mithilfe einer benutzerdefinierten Funktion zur Freigabe im Stack.

Allgemeine Informationen zur Methode `adopt()` finden Sie unter {{jsxref("DisposableStack.prototype.adopt()")}}.

## Syntax

```js-nolint
adopt(value, onDispose)
```

### Parameter

- `value`
  - : Ein beliebiger Wert, der im Stack registriert werden soll.
- `onDispose`
  - : Eine Funktion, die aufgerufen wird, wenn der Stack freigegeben wird. Sie erhält `value` als einziges Argument und kann ein Promise zurückgeben, dessen Erfüllung abgewartet wird.

### Rückgabewert

Derselbe `value`, der übergeben wurde.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `onDispose` keine Funktion ist.
- {{jsxref("ReferenceError")}}
  - : Wird ausgelöst, wenn der Stack bereits freigegeben wurde.

## Beispiele

### adopt() verwenden

Diese Funktion erstellt ein Datei-Handle (ein Node.js-[`FileHandle`](https://nodejs.org/api/fs.html#class-filehandle)), das geschlossen wird, wenn die Funktion abgeschlossen ist. Wir nehmen an, dass das Datei-Handle das asynchrone Disposable-Protokoll nicht implementiert (tatsächlich tut es das). Deshalb verwenden wir `adopt()`, um es im Stack zu registrieren. Da die Methode `handle.close()` ein Promise zurückgibt, müssen wir einen `AsyncDisposableStack` verwenden, damit die Freigabe abgewartet wird.

```js
async function readFile(path) {
  await using disposer = new AsyncDisposableStack();
  const handle = disposer.adopt(
    await fs.open(path),
    async (handle) => await handle.close(),
  );
  const data = await handle.read();
  // The handle.close() method is called and awaited here before exiting
  return data;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `AsyncDisposableStack.prototype.adopt` in `core-js`](https://core-js.io/docs/features/ecmascript/explicit-resource-management)
- [JavaScript-Ressourcenverwaltung](/de/docs/Web/JavaScript/Guide/Resource_management)
- {{jsxref("AsyncDisposableStack")}}
- {{jsxref("AsyncDisposableStack.prototype.defer()")}}
- {{jsxref("AsyncDisposableStack.prototype.use()")}}
