---
title: "ReadableStreamBYOBRequest: view-Eigenschaft"
short-title: view
slug: Web/API/ReadableStreamBYOBRequest/view
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`view`** Getter-Eigenschaft der {{domxref("ReadableStreamBYOBRequest")}}-Schnittstelle gibt die aktuelle Ansicht zurück.

## Wert

Ein [typisiertes Array](/de/docs/Web/JavaScript/Guide/Typed_arrays), das den Zielbereich darstellt, in den der Controller die generierten Daten schreiben kann.

`null`, wenn auf die Anfrage bereits geantwortet wurde, indem {{domxref("ReadableStreamBYOBRequest.respond()")}} oder {{domxref("ReadableStreamBYOBRequest.respondWithNewView()")}} aufgerufen wurde.

## Beispiele

Siehe die Beispiele in {{domxref("ReadableStreamBYOBRequest")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von lesbaren Bytestreams](/de/docs/Web/API/Streams_API/Using_readable_byte_streams)
