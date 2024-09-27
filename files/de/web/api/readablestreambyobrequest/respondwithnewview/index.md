---
title: "ReadableStreamBYOBRequest: respondWithNewView()-Methode"
short-title: respondWithNewView()
slug: Web/API/ReadableStreamBYOBRequest/respondWithNewView
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`respondWithNewView()`**-Methode der [`ReadableStreamBYOBRequest`](/de/docs/Web/API/ReadableStreamBYOBRequest)-Schnittstelle gibt eine neue Ansicht an, auf die der Verbraucher des zugehörigen lesbaren Bytestreams schreiben sollte, anstatt auf [`ReadableStreamBYOBRequest.view`](/de/docs/Web/API/ReadableStreamBYOBRequest/view).

Die neue Ansicht muss ein {{jsxref("TypedArray")}} oder ein {{jsxref("DataView")}} sein, das eine Ansicht auf denselben speicherinternen Bereich bietet wie [`ReadableStreamBYOBRequest.view`](/de/docs/Web/API/ReadableStreamBYOBRequest/view). Nachdem diese Methode aufgerufen wurde, wird die Ansicht, die in die Methode übergeben wurde, übertragen und kann nicht mehr modifiziert werden.

Die Methode ist für Anwendungsfälle gedacht, bei denen eine zugrunde liegende Bytequelle eine `byobRequest.view` intern übertragen muss, bevor sie ihre Antwort abschließt. Beispielsweise kann die Quelle die BYOB-Ansicht an einen separaten Worker-Thread übertragen und warten, bis der Worker sie zurücküberträgt, sobald sie gefüllt wurde.

## Syntax

```js-nolint
respondWithNewView(view)
```

### Parameter

- `view`

  - : Ein {{jsxref("TypedArray")}} oder ein {{jsxref("DataView")}}, auf das der Verbraucher des zugehörigen lesbaren Bytestreams schreiben sollte, anstatt auf [`ReadableStreamBYOBRequest.view`](/de/docs/Web/API/ReadableStreamBYOBRequest/view).

    Dies muss eine Ansicht auf denselben speicherinternen Bereich wie [`ReadableStreamBYOBRequest.view`](/de/docs/Web/API/ReadableStreamBYOBRequest/view) sein und denselben oder weniger Speicher belegen. Genauer gesagt muss es entweder der Puffer der Ansicht oder eine übertragene Version sein, muss denselben `byteOffset` haben und eine `byteLength` (Anzahl geschriebener Bytes), die kleiner oder gleich der der Ansicht ist.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- {{jsxref("TypeError")}}

  - : Wird ausgelöst, wenn das Quellobjekt kein `ReadableStreamBYOBRequest` ist oder kein zugehöriger Controller vorhanden ist oder der zugehörige interne Array-Puffer nicht existiert oder getrennt ist. Es kann auch ausgelöst werden, wenn die `view` null ist, wenn ein aktiver Leser vorhanden ist, oder nicht null ist, wenn es auf einem geschlossenen Stream aufgerufen wird.

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn die neue `view` nicht dem speicherinternen Bereich von [`ReadableStreamBYOBRequest.view`](/de/docs/Web/API/ReadableStreamBYOBRequest/view) entspricht. Zum Beispiel, wenn es sich nicht um denselben Puffer (oder eine übertragene Version) handelt, einen anderen `byteOffset` hat oder größer ist als der verfügbare Speicher für die zugrunde liegende Ansicht.

## Beispiele

Die zu übertragende Ansicht muss vom gleichen Typ sein wie [`ReadableStreamBYOBRequest.view`](/de/docs/Web/API/ReadableStreamBYOBRequest/view), denselben zugrunde liegenden Puffer und denselben Byte-Offset haben und die gleiche oder kleinere `byteLength` besitzen.

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

- [Verwendung lesbarer Bytestreams](/de/docs/Web/API/Streams_API/Using_readable_byte_streams)
