---
title: "ReadableStream: pipeTo() Methode"
short-title: pipeTo()
slug: Web/API/ReadableStream/pipeTo
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`pipeTo()`**-Methode der [`ReadableStream`](/de/docs/Web/API/ReadableStream)-Schnittstelle leitet den aktuellen `ReadableStream` zu einem angegebenen [`WritableStream`](/de/docs/Web/API/WritableStream) und gibt ein {{jsxref("Promise")}} zurück, das erfüllt wird, wenn der Piping-Prozess erfolgreich abgeschlossen ist, oder abgelehnt wird, wenn Fehler aufgetreten sind.

Das Piping eines Streams wird ihn in der Regel für die Dauer des Pipes [sperren](/de/docs/Web/API/ReadableStream/locked), was verhindert, dass andere Leser ihn sperren können.

## Syntax

```js-nolint
pipeTo(destination)
pipeTo(destination, options)
```

### Parameter

- `destination`

  - : Ein [`WritableStream`](/de/docs/Web/API/WritableStream), der als endgültiges Ziel für den [`ReadableStream`](/de/docs/Web/API/ReadableStream) dient.

- `options` {{optional_inline}}
  - : Die Optionen, die beim Piping zu dem `writable` Stream verwendet werden sollen.
    Verfügbare Optionen sind:
    - `preventClose`
      - : Wenn dies auf `true` gesetzt ist, wird das Schließen des Quell-`ReadableStream` den Ziel-`WritableStream` nicht mehr schließen.
        Die Methode wird ein erfülltes Versprechen zurückgeben, sobald dieser Prozess abgeschlossen ist, es sei denn, beim Schließen des Ziels tritt ein Fehler auf, in diesem Fall wird es mit diesem Fehler abgelehnt.
    - `preventAbort`
      - : Wenn dies auf `true` gesetzt ist, werden Fehler im Quell-`ReadableStream` nicht mehr den Ziel-`WritableStream` abbrechen.
        Die Methode wird ein mit dem Fehler der Quelle abgelehntes Versprechen zurückgeben oder mit jedem Fehler, der beim Abbrechen des Ziels auftritt.
    - `preventCancel`
      - : Wenn dies auf `true` gesetzt ist, werden Fehler im Ziel-`WritableStream` nicht mehr den Quell-`ReadableStream` abbrechen.
        In diesem Fall wird die Methode ein mit dem Fehler der Quelle abgelehntes Versprechen zurückgeben oder mit jedem Fehler, der beim Abbrechen der Quelle auftritt.
        Zusätzlich, wenn der Zielschreibstream geschlossen oder schließend ist, wird der Quelllesestream nicht mehr abgebrochen.
        In diesem Fall wird die Methode ein Versprechen mit einem Fehler zurückgeben, der anzeigt, dass das Piping zu einem geschlossenen Stream fehlgeschlagen ist, oder mit jedem Fehler, der beim Abbrechen der Quelle auftritt.
    - `signal`
      - : Wenn auf ein [`AbortSignal`](/de/docs/Web/API/AbortSignal)-Objekt gesetzt, können laufende Pipe-Operationen über den entsprechenden [`AbortController`](/de/docs/Web/API/AbortController) abgebrochen werden.

### Rückgabewert

Ein {{jsxref("Promise")}}, das aufgelöst wird, wenn der Piping-Prozess abgeschlossen ist.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Die `writableStream`- und/oder `readableStream`-Objekte sind kein schreibbarer/lesbarer Stream, oder einer oder beide Streams sind gesperrt.

## Beispiele

```js
// Fetch the original image
fetch("png-logo.png")
  // Retrieve its body as ReadableStream
  .then((response) => response.body)
  .then((body) => body.pipeThrough(new PNGTransformStream()))
  .then((rs) => rs.pipeTo(new FinalDestinationStream()));
```

Dasselbe Beispiel, aber mit {{jsxref("Operators/await", "await")}}:

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

- [`ReadableStream()`](/de/docs/Web/API/ReadableStream/ReadableStream)-Konstruktor
- [Pipe-Ketten](/de/docs/Web/API/Streams_API/Using_readable_streams#pipe_chains)
