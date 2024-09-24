---
title: "ReadableStream: pipeTo()-Methode"
short-title: pipeTo()
slug: Web/API/ReadableStream/pipeTo
l10n:
  sourceCommit: 1821b6ac2234c53c60305c82f5faea00f16ed7ea
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`pipeTo()`**-Methode der {{domxref("ReadableStream")}}-Schnittstelle leitet den aktuellen `ReadableStream` zu einem angegebenen {{domxref("WritableStream")}} weiter und gibt ein {{jsxref("Promise")}} zurück, das erfüllt wird, wenn der Leitungsvorgang erfolgreich abgeschlossen wird, oder abgelehnt wird, wenn Fehler aufgetreten sind.

Wenn ein Stream geleitet wird, wird er in der Regel für die Dauer des Leitungsvorgangs [gesperrt](/de/docs/Web/API/ReadableStream/locked), wodurch verhindert wird, dass andere Leser ihn sperren.

## Syntax

```js-nolint
pipeTo(destination)
pipeTo(destination, options)
```

### Parameter

- `destination`

  - : Ein {{domxref("WritableStream")}}, der als endgültiges Ziel für den {{domxref("ReadableStream")}} fungiert.

- `options` {{optional_inline}}

  - : Die Optionen, die beim Leiten zum `writable`-Stream verwendet werden sollen.
    Verfügbare Optionen sind:

    - `preventClose`
      - : Wenn dies auf `true` gesetzt ist, führt das Schließen des Quell-`ReadableStream` nicht mehr dazu, dass der Ziel-`WritableStream` geschlossen wird.
        Die Methode gibt ein erfülltes Promise zurück, sobald dieser Prozess abgeschlossen ist, es sei denn, ein Fehler tritt beim Schließen des Ziels auf, in welchem Fall es mit diesem Fehler abgelehnt wird.
    - `preventAbort`
      - : Wenn dies auf `true` gesetzt ist, führen Fehler im Quell-`ReadableStream` nicht mehr dazu, dass der Ziel-`WritableStream` abgebrochen wird.
        Die Methode gibt ein Promise zurück, das mit dem Fehler der Quelle oder mit einem Fehler abgelehnt wird, der während des Abbruchs des Ziels auftritt.
    - `preventCancel`
      - : Wenn dies auf `true` gesetzt ist, führen Fehler im Ziel-`WritableStream` nicht mehr dazu, dass der Quell-`ReadableStream` abgebrochen wird.
        In diesem Fall gibt die Methode ein Promise zurück, das mit dem Fehler der Quelle oder mit einem Fehler abgelehnt wird, der während des Abbruchs der Quelle auftritt.
        Außerdem, wenn der Ziel-`WritableStream` bereits geschlossen oder sich schließend befindet, wird der Quell-`ReadableStream` nicht mehr abgebrochen.
        In diesem Fall gibt die Methode ein Promise zurück, das mit einem Fehler abgelehnt wird, der darauf hinweist, dass das Leiten zu einem geschlossenen Stream fehlgeschlagen ist, oder mit einem Fehler, der während des Abbruchs der Quelle auftritt.
    - `signal`
      - : Wenn auf ein [`AbortSignal`](/de/docs/Web/API/AbortSignal)-Objekt gesetzt, können laufende Leitungsvorgänge über den entsprechenden [`AbortController`](/de/docs/Web/API/AbortController) abgebrochen werden.

### Rückgabewert

Ein {{jsxref("Promise")}}, das aufgelöst wird, wenn der Leitungsvorgang abgeschlossen ist.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Die `writableStream`- und/oder `readableStream`-Objekte sind keine writable stream/readable stream, oder einer oder beide der Streams sind gesperrt.

## Beispiele

```js
// Das ursprüngliche Bild abrufen
fetch("png-logo.png")
  // Body als ReadableStream abrufen
  .then((response) => response.body)
  .then((body) => body.pipeThrough(new PNGTransformStream()))
  .then((rs) => rs.pipeTo(new FinalDestinationStream()));
```

Dasselbe Beispiel, aber unter Verwendung von {{jsxref("Operators/await", "await")}}:

```js
(async () => {
  // Das ursprüngliche Bild abrufen
  const response = await fetch("png-logo.png");
  // Body als ReadableStream abrufen
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

- {{domxref("ReadableStream.ReadableStream", "ReadableStream()")}} Konstruktor
- [Leitungs-Ketten](/de/docs/Web/API/Streams_API/Using_readable_streams#pipe_chains)
