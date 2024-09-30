---
title: "ReadableStreamBYOBRequest: Methode respondWithNewView()"
short-title: respondWithNewView()
slug: Web/API/ReadableStreamBYOBRequest/respondWithNewView
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`respondWithNewView()`**-Methode der [`ReadableStreamBYOBRequest`](/de/docs/Web/API/ReadableStreamBYOBRequest)-Schnittstelle gibt eine neue Ansicht an, auf die der Verbraucher des zugehörigen lesbaren Byte-Streams schreiben soll, anstatt auf [`ReadableStreamBYOBRequest.view`](/de/docs/Web/API/ReadableStreamBYOBRequest/view).

Die neue Ansicht muss ein {{jsxref("TypedArray")}} oder ein {{jsxref("DataView")}} sein, das eine Ansicht auf denselben Speicherbereich bietet wie [`ReadableStreamBYOBRequest.view`](/de/docs/Web/API/ReadableStreamBYOBRequest/view). Nachdem diese Methode aufgerufen wurde, wird die in die Methode übergebene Ansicht übertragen und ist nicht mehr veränderbar.

Die Methode ist für Anwendungsfälle gedacht, bei denen eine zugrunde liegende Byte-Quelle `byobRequest.view` intern übertragen muss, bevor sie ihre Antwort abschließt. Beispielsweise kann die Quelle die BYOB-Ansicht an einen separaten Worker-Thread übertragen und darauf warten, dass der Worker sie zurück überträgt, sobald sie gefüllt wurde.

## Syntax

```js-nolint
respondWithNewView(view)
```

### Parameter

- `view`

  - : Ein {{jsxref("TypedArray")}} oder ein {{jsxref("DataView")}}, auf das der Verbraucher des zugehörigen lesbaren Byte-Streams schreiben soll, anstatt auf [`ReadableStreamBYOBRequest.view`](/de/docs/Web/API/ReadableStreamBYOBRequest/view).

    Dies muss eine Ansicht auf denselben Speicherbereich sein wie [`ReadableStreamBYOBRequest.view`](/de/docs/Web/API/ReadableStreamBYOBRequest/view) und den gleichen oder weniger Speicher beanspruchen. Insbesondere muss es entweder der Puffer der Ansicht oder eine übertragene Version sein, muss den gleichen `byteOffset` haben und eine `byteLength` (Anzahl der geschriebenen Bytes), die kleiner oder gleich der der Ansicht ist.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- {{jsxref("TypeError")}}

  - : Wird ausgelöst, wenn das Quellobjekt kein `ReadableStreamBYOBRequest` ist, oder kein zugehöriger Controller vorhanden ist, oder der zugehörige interne Array-Puffer nicht existent oder getrennt ist. Es kann auch ausgelöst werden, wenn die `view`-Länge null ist, wenn ein aktiver Leser vorhanden ist, oder nicht null ist, wenn sie auf einem geschlossenen Stream aufgerufen wird.

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn die neue `view` nicht mit dem Speicherbereich von [`ReadableStreamBYOBRequest.view`](/de/docs/Web/API/ReadableStreamBYOBRequest/view) übereinstimmt. Beispielsweise, wenn es nicht der gleiche Puffer (oder eine übertragene Version) ist, einen anderen `byteOffset` hat oder größer ist als der verfügbare Speicher der zugrundeliegenden Ansicht.

## Beispiele

Die zu übertragende Ansicht muss vom gleichen Typ sein wie [`ReadableStreamBYOBRequest.view`](/de/docs/Web/API/ReadableStreamBYOBRequest/view), den gleichen zugrunde liegenden Puffer und Byte-Offset haben und die gleiche oder kleinere `byteLength` aufweisen.

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

- [Verwendung von lesbaren Byte-Streams](/de/docs/Web/API/Streams_API/Using_readable_byte_streams)
