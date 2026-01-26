---
title: AsyncDisposableStack.prototype.adopt()
short-title: adopt()
slug: Web/JavaScript/Reference/Global_Objects/AsyncDisposableStack/adopt
l10n:
  sourceCommit: 419694495e070daaf466c923b413b3f476740fd6
---

Die **`adopt()`** Methode von {{jsxref("AsyncDisposableStack")}}-Instanzen registriert einen Wert, der das asynchrone Disposable-Protokoll nicht implementiert, auf dem Stack, indem eine benutzerdefinierte Entsorgerfunktion bereitgestellt wird.

Siehe {{jsxref("DisposableStack.prototype.adopt()")}} für allgemeine Informationen über die `adopt()`-Methode.

## Syntax

```js-nolint
adopt(value, onDispose)
```

### Parameter

- `value`
  - : Jeder Wert, der auf dem Stack registriert werden soll.
- `onDispose`
  - : Eine Funktion, die aufgerufen wird, wenn der Stack entsorgt wird. Die Funktion erhält `value` als einziges Argument und kann ein Promise zurückgeben, das abgewartet wird.

### Rückgabewert

Der gleiche `value`, der übergeben wurde.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `onDispose` keine Funktion ist.
- {{jsxref("ReferenceError")}}
  - : Wird ausgelöst, wenn der Stack bereits entsorgt ist.

## Beispiele

### Verwendung von adopt()

Diese Funktion erstellt einen Datei-Handle (als Node.js [`FileHandle`](https://nodejs.org/api/fs.html#class-filehandle)), der geschlossen wird, wenn die Funktion abgeschlossen wird. Wir nehmen an, dass der Datei-Handle das asynchrone Disposable-Protokoll nicht implementiert (in Wirklichkeit tut er das), somit verwenden wir `adopt()`, um ihn auf dem Stack zu registrieren. Da die Methode `handle.close()` ein Promise zurückgibt, müssen wir einen `AsyncDisposableStack` verwenden, damit das Entsorgen abgewartet werden kann.

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

- [JavaScript-Ressourcenverwaltung](/de/docs/Web/JavaScript/Guide/Resource_management)
- {{jsxref("AsyncDisposableStack")}}
- {{jsxref("AsyncDisposableStack.prototype.defer()")}}
- {{jsxref("AsyncDisposableStack.prototype.use()")}}
