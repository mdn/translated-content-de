---
title: "ReadableStreamBYOBRequest: respondWithNewView()-Methode"
short-title: respondWithNewView()
slug: Web/API/ReadableStreamBYOBRequest/respondWithNewView
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`respondWithNewView()`**-Methode der {{domxref("ReadableStreamBYOBRequest")}}-Schnittstelle legt eine neue Ansicht fest, auf die der Verbraucher des zugehörigen lesbaren Bytestroms schreiben soll, anstelle von {{domxref("ReadableStreamBYOBRequest.view")}}.

Die neue Ansicht muss ein {{jsxref("TypedArray")}} oder ein {{jsxref("DataView")}} sein, das einen Blick auf denselben zugrunde liegenden Speicherbereich wie {{domxref("ReadableStreamBYOBRequest.view")}} bietet. Nachdem diese Methode aufgerufen wurde, wird die in die Methode übergebene Ansicht übertragen und ist nicht mehr veränderbar.

Die Methode ist für Anwendungsfälle gedacht, in denen eine zugrunde liegende Byte-Quelle das `byobRequest.view` intern übertragen muss, bevor ihre Antwort abgeschlossen ist. Beispielsweise könnte die Quelle die BYOB-Ansicht an einen separaten Worker-Thread übertragen und warten, bis der Worker sie zurücksendet, sobald sie gefüllt ist.

## Syntax

```js-nolint
respondWithNewView(view)
```

### Parameter

- `view`

  - : Ein {{jsxref("TypedArray")}} oder ein {{jsxref("DataView")}}, auf den der Verbraucher des zugehörigen lesbaren Bytestroms schreiben soll, anstelle von {{domxref("ReadableStreamBYOBRequest.view")}}.

    Dies muss eine Ansicht auf denselben zugrunde liegenden Speicherbereich wie {{domxref("ReadableStreamBYOBRequest.view")}} sein und denselben oder weniger Speicher belegen.
    Genauer gesagt muss es entweder der Puffer der Ansicht oder eine übertragene Version sein, denselben `byteOffset` haben und eine `byteLength` (Anzahl der geschriebenen Bytes), die kleiner oder gleich der der Ansicht ist.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- {{jsxref("TypeError")}}

  - : Wird ausgelöst, wenn das Quellobjekt kein `ReadableStreamBYOBRequest` ist oder kein zugehöriger Controller vorhanden ist, oder der zugehörige interne Array-Puffer nicht vorhanden oder getrennt ist.
    Er kann auch ausgelöst werden, wenn die `view` eine Länge von null hat, während ein aktiver Leser vorhanden ist, oder nicht null ist, wenn sie in einem geschlossenen Stream aufgerufen wird.

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn die neue `view` nicht mit dem zugrunde liegenden Speicherbereich von {{domxref("ReadableStreamBYOBRequest.view")}} übereinstimmt.
    Zum Beispiel, wenn es nicht derselbe Puffer (oder eine übertragene Version) ist, einen anderen `byteOffset` hat oder größer ist als der Speicher, der für die zugrunde liegende Ansicht verfügbar ist.

## Beispiele

Die zu übertragende Ansicht muss vom selben Typ sein wie {{domxref("ReadableStreamBYOBRequest.view")}}, denselben zugrunde liegenden Puffer und Byte-Offset haben und dieselbe oder eine kleinere `byteLength` besitzen.

Zum Beispiel könnten wir die Ansicht definieren und wie unten gezeigt antworten:

```js
const v = controller.byobRequest.view;
bytesRead = socket.readInto(v.buffer, v.byteOffset, v.byteLength);
byobRequest.respondWithNewView(
  byobRequest.view.subarray(v.byteOffset, bytesRead),
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung lesbarer Bytestreams](/de/docs/Web/API/Streams_API/Using_readable_byte_streams)
