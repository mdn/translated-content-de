---
title: AsyncDisposableStack.prototype.use()
short-title: use()
slug: Web/JavaScript/Reference/Global_Objects/AsyncDisposableStack/use
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`use()`** von {{jsxref("AsyncDisposableStack")}}-Instanzen registriert einen Wert im Stack, der das [Protokoll zur asynchronen Ressourcenfreigabe](/de/docs/Web/JavaScript/Guide/Resource_management) implementiert.

Allgemeine Informationen zur Methode `use()` finden Sie unter {{jsxref("DisposableStack.prototype.use()")}}.

## Syntax

```js-nolint
use(value)
```

### Parameter

- `value`
  - : Der Wert, der im Stack registriert werden soll. Er muss entweder eine Methode `[Symbol.asyncDispose]()` oder `[Symbol.dispose]()` enthalten oder `null` beziehungsweise `undefined` sein.

### Rückgabewert

Derselbe `value`, der übergeben wurde.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `value` weder `null` noch `undefined` ist und keine Methode `[Symbol.asyncDispose]()` oder `[Symbol.dispose]()` enthält.
- {{jsxref("ReferenceError")}}
  - : Wird ausgelöst, wenn der Stack bereits freigegeben wurde.

## Beispiele

### use() verwenden

Diese Funktion liest eine Datei (als Node.js-[`FileHandle`](https://nodejs.org/api/fs.html#class-filehandle)) und gibt deren Inhalt zurück. Das Datei-Handle wird automatisch geschlossen, wenn die Funktion abgeschlossen ist, da die Klasse `FileHandle` eine Methode `[Symbol.asyncDispose]()` implementiert, die die Datei asynchron schließt.

```js
async function readFileContents(path) {
  await using disposer = new AsyncDisposableStack();
  const handle = disposer.use(await fs.open(path));
  const data = await handle.read();
  return data;
  // The disposer is disposed here, which causes handle to be closed too
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `AsyncDisposableStack.prototype.use` in `core-js`](https://core-js.io/docs/features/ecmascript/explicit-resource-management)
- [JavaScript-Ressourcenverwaltung](/de/docs/Web/JavaScript/Guide/Resource_management)
- {{jsxref("AsyncDisposableStack")}}
- {{jsxref("AsyncDisposableStack.prototype.adopt()")}}
- {{jsxref("AsyncDisposableStack.prototype.defer()")}}
