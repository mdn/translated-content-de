---
title: AsyncDisposableStack.prototype.adopt()
short-title: adopt()
slug: Web/JavaScript/Reference/Global_Objects/AsyncDisposableStack/adopt
l10n:
  sourceCommit: 7a5b580a28a0b1a33e42e9fb81c8234994ec0e36
---

Die **`adopt()`**-Methode von {{jsxref("AsyncDisposableStack")}}-Instanzen registriert einen Wert, der das asynchrone Entsorgungsprotokoll nicht implementiert, im Stack, indem eine benutzerdefinierte Entsorgungsfunktion bereitgestellt wird.

Siehe {{jsxref("DisposableStack.prototype.adopt()")}} für allgemeine Informationen über die `adopt()`-Methode.

## Syntax

```js-nolint
adopt(value, onDispose)
```

### Parameter

- `value`
  - : Ein beliebiger Wert, der im Stack registriert werden soll.
- `onDispose`
  - : Eine Funktion, die aufgerufen wird, wenn der Stack entsorgt wird. Die Funktion erhält `value` als einziges Argument und kann ein Promise zurückgeben, das abgewartet wird.

### Rückgabewert

Der gleiche `value`, der übergeben wurde.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `onDispose` keine Funktion ist.
- {{jsxref("ReferenceError")}}
  - : Wird ausgelöst, wenn der Stack bereits entsorgt wurde.

## Beispiele

### Verwendung von adopt()

Diese Funktion erstellt einen Datei-Handle (als Node.js [`FileHandle`](https://nodejs.org/api/fs.html#class-filehandle)), der geschlossen wird, wenn die Funktion abgeschlossen ist. Wir nehmen an, dass der Datei-Handle das asynchrone Entsorgungsprotokoll nicht implementiert (tatsächlich tut er dies), daher verwenden wir `adopt()`, um ihn im Stack zu registrieren. Da die Methode `handle.close()` ein Promise zurückgibt, müssen wir einen `AsyncDisposableStack` verwenden, damit die Entsorgung abgewartet wird.

```js
async function readFile(path) {
  await using disposer = new AsyncDisposableStack();
  const handle = disposer.adopt(
    fs.open(path),
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

- [JavaScript Ressourcenmanagement](/de/docs/Web/JavaScript/Guide/Resource_management)
- {{jsxref("AsyncDisposableStack")}}
- {{jsxref("AsyncDisposableStack.prototype.defer()")}}
- {{jsxref("AsyncDisposableStack.prototype.use()")}}
