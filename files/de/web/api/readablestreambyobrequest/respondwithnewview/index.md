---
title: "ReadableStreamBYOBRequest: respondWithNewView() Methode"
short-title: respondWithNewView()
slug: Web/API/ReadableStreamBYOBRequest/respondWithNewView
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`respondWithNewView()`** Methode des [`ReadableStreamBYOBRequest`](/de/docs/Web/API/ReadableStreamBYOBRequest)-Interfaces gibt eine neue Ansicht an, auf die der Verbraucher des zugehörigen lesbaren Bytestreams schreiben soll, anstelle der [`ReadableStreamBYOBRequest.view`](/de/docs/Web/API/ReadableStreamBYOBRequest/view).

Die neue Ansicht muss ein {{jsxref("TypedArray")}} oder ein {{jsxref("DataView")}} sein, das eine Ansicht auf denselben Speicherbereich wie [`ReadableStreamBYOBRequest.view`](/de/docs/Web/API/ReadableStreamBYOBRequest/view) bietet. Nachdem diese Methode aufgerufen wurde, wird die in die Methode übergebene Ansicht übertragen und kann nicht mehr verändert werden.

Die Methode ist für Anwendungsfälle gedacht, in denen eine zugrunde liegende Bytequelle eine `byobRequest.view` intern übertragen muss, bevor sie ihre Antwort beendet. Zum Beispiel könnte die Quelle die BYOB-Ansicht an einen separaten Worker-Thread übertragen und warten, bis der Worker sie zurücküberträgt, sobald sie gefüllt ist.

## Syntax

```js-nolint
respondWithNewView(view)
```

### Parameter

- `view`
  - : Ein {{jsxref("TypedArray")}} oder ein {{jsxref("DataView")}}, auf den der Verbraucher des zugehörigen lesbaren Bytestreams schreiben soll, anstelle von [`ReadableStreamBYOBRequest.view`](/de/docs/Web/API/ReadableStreamBYOBRequest/view).

    Dies muss eine Ansicht auf denselben Speicherbereich wie [`ReadableStreamBYOBRequest.view`](/de/docs/Web/API/ReadableStreamBYOBRequest/view) sein und den gleichen oder weniger Speicher belegen. Insbesondere muss es entweder der Puffer der Ansicht oder eine übertragene Version davon sein, denselben `byteOffset` haben und eine `byteLength` (Anzahl der geschriebenen Bytes), die kleiner oder gleich derjenigen der Ansicht ist.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn das Quellobjekt nicht `ReadableStreamBYOBRequest` ist, oder wenn kein zugehöriger Controller existiert, oder wenn der zugehörige interne Array-Puffer nicht existent oder getrennt ist. Es kann auch ausgelöst werden, wenn die `view` eine Länge von null hat, während ein aktiver Leser vorhanden ist, oder eine nicht-null Länge hat, wenn es auf einem geschlossenen Stream aufgerufen wird.

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn die neue `view` nicht mit dem Speicherbereich von [`ReadableStreamBYOBRequest.view`](/de/docs/Web/API/ReadableStreamBYOBRequest/view) übereinstimmt. Zum Beispiel ist es nicht derselbe Puffer (oder eine übertragene Version davon), hat einen anderen `byteOffset` oder ist größer als der für die zugrundeliegende Ansicht verfügbare Speicher.

## Beispiele

Die zu übertragende Ansicht muss vom gleichen Typ wie [`ReadableStreamBYOBRequest.view`](/de/docs/Web/API/ReadableStreamBYOBRequest/view) sein, denselben zugrunde liegenden Puffer und Byte-Offset haben und die gleiche oder eine kleinere `byteLength` aufweisen.

Zum Beispiel könnten wir die Ansicht definieren und wie folgt antworten:

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

- [Verwendung von lesbaren Bytestreams](/de/docs/Web/API/Streams_API/Using_readable_byte_streams)
