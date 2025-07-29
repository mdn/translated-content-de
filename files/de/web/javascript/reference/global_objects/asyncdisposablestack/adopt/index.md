---
title: AsyncDisposableStack.prototype.adopt()
slug: Web/JavaScript/Reference/Global_Objects/AsyncDisposableStack/adopt
l10n:
  sourceCommit: b6a36de3428f4b42c7707c8f190a349db13bf531
---

Die **`adopt()`**-Methode von {{jsxref("AsyncDisposableStack")}}-Instanzen registriert einen Wert, der das asynchrone disposable-Protokoll nicht implementiert, auf dem Stack, indem sie eine benutzerdefinierte Disposer-Funktion bereitstellt.

Siehe {{jsxref("DisposableStack.prototype.adopt()")}} für allgemeine Informationen über die `adopt()`-Methode.

## Syntax

```js-nolint
adopt(value, onDispose)
```

### Parameter

- `value`
  - : Ein beliebiger Wert, der auf dem Stack registriert werden soll.
- `onDispose`
  - : Eine Funktion, die aufgerufen wird, wenn der Stack aufgelöst wird. Die Funktion erhält `value` als einziges Argument und kann ein Promise zurückgeben, das abgewartet wird.

### Rückgabewert

Der gleiche `value`, der übergeben wurde.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `onDispose` keine Funktion ist.
- {{jsxref("ReferenceError")}}
  - : Wird ausgelöst, wenn der Stack bereits aufgelöst ist.

## Beispiele

### Verwendung von adopt()

Diese Funktion erstellt ein Datei-Handle (als Node.js [`FileHandle`](https://nodejs.org/api/fs.html#class-filehandle)), das geschlossen wird, wenn die Funktion abgeschlossen ist. Wir gehen davon aus, dass das Datei-Handle das asynchrone disposable-Protokoll nicht implementiert (in Wirklichkeit tut es das), daher verwenden wir `adopt()`, um es auf dem Stack zu registrieren. Da die Methode `handle.close()` ein Promise zurückgibt, müssen wir einen `AsyncDisposableStack` verwenden, damit die Entsorgung abgewartet wird.

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

- [JavaScript Ressourcenverwaltung](/de/docs/Web/JavaScript/Guide/Resource_management)
- {{jsxref("AsyncDisposableStack")}}
- {{jsxref("AsyncDisposableStack.prototype.defer()")}}
- {{jsxref("AsyncDisposableStack.prototype.use()")}}
