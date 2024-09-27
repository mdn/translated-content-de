---
title: "ReadableStream: pipeTo() Methode"
short-title: pipeTo()
slug: Web/API/ReadableStream/pipeTo
l10n:
  sourceCommit: 1821b6ac2234c53c60305c82f5faea00f16ed7ea
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`pipeTo()`**-Methode der [`ReadableStream`](/de/docs/Web/API/ReadableStream)-Schnittstelle leitet den aktuellen `ReadableStream` an einen angegebenen [`WritableStream`](/de/docs/Web/API/WritableStream) weiter und gibt ein {{jsxref("Promise")}} zurück, das erfüllt wird, wenn der Piping-Prozess erfolgreich abgeschlossen ist, oder abgelehnt wird, wenn Fehler aufgetreten sind.

Das Weiterleiten eines Streams wird im Allgemeinen den Stream [sperren](/de/docs/Web/API/ReadableStream/locked) für die Dauer des Piping-Prozesses, wodurch andere Leser daran gehindert werden, ihn zu sperren.

## Syntax

```js-nolint
pipeTo(destination)
pipeTo(destination, options)
```

### Parameter

- `destination`

  - : Ein [`WritableStream`](/de/docs/Web/API/WritableStream), der als endgültiges Ziel für den [`ReadableStream`](/de/docs/Web/API/ReadableStream) fungiert.

- `options` {{optional_inline}}

  - : Die Optionen, die verwendet werden sollen, wenn zum `writable` Stream geleitet wird.
    Verfügbare Optionen sind:

    - `preventClose`
      - : Wenn dies auf `true` gesetzt ist, wird das Schließen des Quell-`ReadableStream` nicht mehr dazu führen, dass der Ziel-`WritableStream` geschlossen wird.
        Die Methode wird ein erfülltes Promise zurückgeben, sobald dieser Prozess abgeschlossen ist, es sei denn, beim Schließen des Ziels tritt ein Fehler auf, in diesem Fall wird es mit diesem Fehler abgelehnt.
    - `preventAbort`
      - : Wenn dies auf `true` gesetzt ist, führen Fehler im Quell-`ReadableStream` nicht mehr dazu, dass der Ziel-`WritableStream` abgebrochen wird.
        Die Methode wird ein Promise zurückgeben, das mit dem Fehler der Quelle oder mit einem Fehler abgelehnt wird, der während des Abbruchs des Ziels auftritt.
    - `preventCancel`
      - : Wenn dies auf `true` gesetzt ist, führen Fehler im Ziel-`WritableStream` nicht mehr dazu, dass der Quell-`ReadableStream` abgebrochen wird.
        In diesem Fall wird die Methode ein Promise zurückgeben, das mit dem Fehler der Quelle oder mit einem Fehler abgelehnt wird, der während des Abbruchs der Quelle auftritt.
        Darüber hinaus, wenn der Ziel-`WritableStream` geschlossen oder schließt, wird der Quell-`ReadableStream` nicht mehr abgebrochen.
        In diesem Fall wird die Methode ein Promise zurückgeben, das mit einem Fehler zurückgewiesen wird, der darauf hinweist, dass das Piping zu einem geschlossenen Stream fehlgeschlagen ist, oder mit einem Fehler, der beim Abbrechen der Quelle auftritt.
    - `signal`
      - : Wenn ein [`AbortSignal`](/de/docs/Web/API/AbortSignal)-Objekt gesetzt wird, können laufende Piping-Operationen über den entsprechenden [`AbortController`](/de/docs/Web/API/AbortController) abgebrochen werden.

### Rückgabewert

Ein {{jsxref("Promise")}}, das aufgelöst wird, wenn der Piping-Prozess abgeschlossen ist.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Die `writableStream`- und/oder `readableStream`-Objekte sind kein writable stream/readable stream oder einer oder beide Streams sind gesperrt.

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
- [Pipe Chains](/de/docs/Web/API/Streams_API/Using_readable_streams#pipe_chains)
