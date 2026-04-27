---
title: "ReadableStreamBYOBRequest: view-Eigenschaft"
short-title: view
slug: Web/API/ReadableStreamBYOBRequest/view
l10n:
  sourceCommit: ca056fde2ee61527c62d76766ece012226eee155
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`view`** Getter-Eigenschaft der [`ReadableStreamBYOBRequest`](/de/docs/Web/API/ReadableStreamBYOBRequest)-Schnittstelle gibt die aktuelle Ansicht zurück.

## Wert

Ein [typisiertes Array](/de/docs/Web/JavaScript/Guide/Typed_arrays) vom Typ [`Uint8Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array), das den Zielbereich darstellt, in den der Controller generierte Daten schreiben kann.

`null`, wenn die Anfrage bereits beantwortet wurde, indem [`ReadableStreamBYOBRequest.respond()`](/de/docs/Web/API/ReadableStreamBYOBRequest/respond) oder [`ReadableStreamBYOBRequest.respondWithNewView()`](/de/docs/Web/API/ReadableStreamBYOBRequest/respondWithNewView) aufgerufen wurde.

## Beispiele

Siehe die Beispiele in [`ReadableStreamBYOBRequest`](/de/docs/Web/API/ReadableStreamBYOBRequest).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von lesbaren Bytestreams](/de/docs/Web/API/Streams_API/Using_readable_byte_streams)
