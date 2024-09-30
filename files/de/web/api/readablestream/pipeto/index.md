---
title: "ReadableStream: pipeTo() Methode"
short-title: pipeTo()
slug: Web/API/ReadableStream/pipeTo
l10n:
  sourceCommit: 1821b6ac2234c53c60305c82f5faea00f16ed7ea
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`pipeTo()`**-Methode der [`ReadableStream`](/de/docs/Web/API/ReadableStream)-Schnittstelle leitet den aktuellen `ReadableStream` zu einem gegebenen [`WritableStream`](/de/docs/Web/API/WritableStream) und gibt ein {{jsxref("Promise")}} zurück, das erfüllt wird, wenn der Piping-Prozess erfolgreich abgeschlossen ist, oder abgelehnt wird, wenn Fehler aufgetreten sind.

Das Piping eines Streams wird diesen normalerweise für die Dauer des Pipe-Vorgangs [sperren](/de/docs/Web/API/ReadableStream/locked), wodurch verhindert wird, dass andere Lesevorgänge ihn sperren.

## Syntax

```js-nolint
pipeTo(destination)
pipeTo(destination, options)
```

### Parameter

- `destination`

  - : Ein [`WritableStream`](/de/docs/Web/API/WritableStream), der als endgültiges Ziel für den [`ReadableStream`](/de/docs/Web/API/ReadableStream) dient.

- `options` {{optional_inline}}

  - : Die Optionen, die beim Piping zum `writable`-Stream verwendet werden sollen.
    Verfügbare Optionen sind:

    - `preventClose`
      - : Wenn dies auf `true` gesetzt ist, wird das Schließen des Quell-`ReadableStream` nicht mehr dazu führen, dass der Ziel-`WritableStream` geschlossen wird.
        Die Methode gibt ein erfülltes Promise zurück, sobald dieser Prozess abgeschlossen ist, es sei denn, es tritt ein Fehler auf, während das Ziel geschlossen wird, in diesem Fall wird es mit diesem Fehler abgelehnt.
    - `preventAbort`
      - : Wenn dies auf `true` gesetzt ist, werden Fehler im Quell-`ReadableStream` nicht mehr dazu führen, dass der Ziel-`WritableStream` abgebrochen wird.
        Die Methode gibt ein Promise zurück, das mit dem Fehler der Quelle abgelehnt wird, oder mit jedem Fehler, der beim Abbrechen des Ziels auftritt.
    - `preventCancel`
      - : Wenn dies auf `true` gesetzt ist, werden Fehler im Ziel-`WritableStream` nicht mehr dazu führen, dass der Quell-`ReadableStream` abgebrochen wird.
        In diesem Fall gibt die Methode ein Promise zurück, das mit dem Fehler der Quelle abgelehnt wird, oder mit jedem Fehler, der während des Abbrechens der Quelle auftritt.
        Außerdem, wenn der Ziel-`WritableStream` bereits geschlossen oder dabei ist, sich zu schließen, wird der Quell-`ReadableStream` nicht mehr abgebrochen.
        In diesem Fall gibt die Methode ein Promise zurück, das mit einem Fehler abgelehnt wird, der angibt, dass das Piping zu einem geschlossenen Stream fehlgeschlagen ist, oder mit jedem Fehler, der während des Abbrechens der Quelle auftritt.
    - `signal`
      - : Wenn auf ein [`AbortSignal`](/de/docs/Web/API/AbortSignal)-Objekt gesetzt, können laufende Pipe-Operationen über den entsprechenden [`AbortController`](/de/docs/Web/API/AbortController) abgebrochen werden.

### Rückgabewert

Ein {{jsxref("Promise")}}, das aufgelöst wird, wenn der Piping-Prozess abgeschlossen ist.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Die `writableStream`- und/oder `readableStream`-Objekte sind kein Writable-Stream/Readable-Stream, oder einer oder beide der Streams sind gesperrt.

## Beispiele

```js
// Fetch the original image
fetch("png-logo.png")
  // Retrieve its body as ReadableStream
  .then((response) => response.body)
  .then((body) => body.pipeThrough(new PNGTransformStream()))
  .then((rs) => rs.pipeTo(new FinalDestinationStream()));
```

Dasselbe Beispiel, aber unter Verwendung von {{jsxref("Operators/await", "await")}}:

```js
(async () => {
  // Fetch the original image
  const response = await fetch("png-logo.png");
  // Retrieve its body as ReadableStream
  await response.body
    .pipeThrough(new PNGTransformStream())
    .pipeTo(new FinalDestinationStream());
})();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`ReadableStream()`](/de/docs/Web/API/ReadableStream/ReadableStream) Konstruktor
- [Pipe-Ketten](/de/docs/Web/API/Streams_API/Using_readable_streams#pipe_chains)
