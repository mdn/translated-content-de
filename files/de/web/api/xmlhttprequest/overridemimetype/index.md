---
title: "XMLHttpRequest: overrideMimeType() Methode"
short-title: overrideMimeType()
slug: Web/API/XMLHttpRequest/overrideMimeType
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

Die [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Methode **`overrideMimeType()`** gibt einen MIME-Typ an, der anstelle des vom Server bereitgestellten Typs verwendet werden soll, wenn die im Anforderungsvorgang übertragenen Daten interpretiert werden.

Dies kann beispielsweise verwendet werden, um einen Datenstrom zu zwingen, als `"text/xml"` behandelt und geparst zu werden, auch wenn der Server ihn nicht so angibt. Diese Methode muss aufgerufen werden, bevor [`send()`](/de/docs/Web/API/XMLHttpRequest/send) aufgerufen wird.

## Syntax

```js-nolint
overrideMimeType(mimeType)
```

### Parameter

- `mimeType`
  - : Ein String, der den MIME-Typ angibt, der anstelle des vom Server angegebenen Typs verwendet werden soll. Wenn der Server keinen Typ angibt, nimmt `XMLHttpRequest` `"text/xml"` an.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

In diesem Beispiel wird ein MIME-Typ von `"text/plain"` angegeben, der den vom Server angegebenen Typ für die empfangenen Daten überschreibt.

> [!NOTE]
> Wenn der Server keinen
> [`Content-Type`](/de/docs/Web/HTTP/Reference/Headers/Content-Type)-Header bereitstellt, nimmt [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) an, dass der MIME-Typ
> `"text/xml"` ist. Wenn der Inhalt kein gültiges XML ist, tritt ein Fehler "XML Parsing Error: not well-formed" auf. Dies können Sie vermeiden, indem Sie `overrideMimeType()` aufrufen, um einen anderen Typ anzugeben.

```js
// Interpret the received data as plain text

req = new XMLHttpRequest();
req.overrideMimeType("text/plain");
req.addEventListener("load", callback, false);
req.open("get", url);
req.send();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)
- [`XMLHttpRequest.responseType`](/de/docs/Web/API/XMLHttpRequest/responseType)
