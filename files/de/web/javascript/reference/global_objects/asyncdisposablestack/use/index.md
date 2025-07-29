---
title: AsyncDisposableStack.prototype.use()
slug: Web/JavaScript/Reference/Global_Objects/AsyncDisposableStack/use
l10n:
  sourceCommit: b6a36de3428f4b42c7707c8f190a349db13bf531
---

Die **`use()`**-Methode von {{jsxref("AsyncDisposableStack")}}-Instanzen registriert einen Wert, der das [asynchrone Entsorgungsprotokoll](/de/docs/Web/JavaScript/Guide/Resource_management) auf den Stack implementiert.

Siehe {{jsxref("DisposableStack.prototype.use()")}} für allgemeine Informationen über die `use()`-Methode.

## Syntax

```js-nolint
use(value)
```

### Parameter

- `value`
  - : Der Wert, der auf dem Stack registriert werden soll. Muss entweder eine `[Symbol.asyncDispose]()`- oder `[Symbol.dispose]()`-Methode enthalten, oder `null` oder `undefined` sein.

### Rückgabewert

Der gleiche `value`, der übergeben wurde.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `value` nicht `null` oder `undefined` ist und keine `[Symbol.asyncDispose]()`- oder `[Symbol.dispose]()`-Methode enthält.
- {{jsxref("ReferenceError")}}
  - : Wird ausgelöst, wenn der Stack bereits entsorgt wurde.

## Beispiele

### Verwendung von use()

Diese Funktion liest eine Datei (als Node.js [`FileHandle`](https://nodejs.org/api/fs.html#class-filehandle)) und gibt deren Inhalt zurück. Der Datei-Handle wird automatisch geschlossen, wenn die Funktion abgeschlossen ist, da die `FileHandle`-Klasse eine `[Symbol.asyncDispose]()`-Methode implementiert, die die Datei asynchron schließt.

```js
async function readFileContents(path) {
  await using disposer = new AsyncDisposableStack();
  const handle = disposer.use(fs.open(path));
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

- [JavaScript-Ressourcenverwaltung](/de/docs/Web/JavaScript/Guide/Resource_management)
- {{jsxref("AsyncDisposableStack")}}
- {{jsxref("AsyncDisposableStack.prototype.adopt()")}}
- {{jsxref("AsyncDisposableStack.prototype.defer()")}}
