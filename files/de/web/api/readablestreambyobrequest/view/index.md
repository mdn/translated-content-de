---
title: "ReadableStreamBYOBRequest: view-Eigenschaft"
short-title: view
slug: Web/API/ReadableStreamBYOBRequest/view
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`view`** Getter-Eigenschaft des [`ReadableStreamBYOBRequest`](/de/docs/Web/API/ReadableStreamBYOBRequest) Interfaces gibt die aktuelle Ansicht zurück.

## Wert

Ein [typisiertes Array](/de/docs/Web/JavaScript/Guide/Typed_arrays), das den Zielbereich darstellt, in den der Controller generierte Daten schreiben kann.

`null`, wenn auf die Anforderung bereits geantwortet wurde, indem [`ReadableStreamBYOBRequest.respond()`](/de/docs/Web/API/ReadableStreamBYOBRequest/respond) oder [`ReadableStreamBYOBRequest.respondWithNewView()`](/de/docs/Web/API/ReadableStreamBYOBRequest/respondWithNewView) aufgerufen wird.

## Beispiele

Siehe die Beispiele in [`ReadableStreamBYOBRequest`](/de/docs/Web/API/ReadableStreamBYOBRequest).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von lesbaren Byte-Strömen](/de/docs/Web/API/Streams_API/Using_readable_byte_streams)
