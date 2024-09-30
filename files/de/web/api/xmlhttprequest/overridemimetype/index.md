---
title: "XMLHttpRequest: overrideMimeType()-Methode"
short-title: overrideMimeType()
slug: Web/API/XMLHttpRequest/overrideMimeType
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

Die Methode **`overrideMimeType()`** von [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) legt einen anderen MIME-Typ fest als den vom Server bereitgestellten, der stattdessen bei der Interpretation der übertragenen Daten in einer Anforderung verwendet wird.

Dies kann beispielsweise verwendet werden, um einen Datenstrom als `"text/xml"` behandeln und analysieren zu lassen, auch wenn der Server dies nicht angibt. Diese Methode muss aufgerufen werden, bevor [`send()`](/de/docs/Web/API/XMLHttpRequest/send) aufgerufen wird.

## Syntax

```js-nolint
overrideMimeType(mimeType)
```

### Parameter

- `mimeType`
  - : Ein String, der den zu verwendenden MIME-Typ angibt, anstelle des vom Server angegebenen. Wenn der Server keinen Typ angibt, nimmt `XMLHttpRequest` `"text/xml"` an.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Dieses Beispiel legt einen MIME-Typ von `"text/plain"` fest und ersetzt damit den vom Server angegebenen Typ für die empfangenen Daten.

> [!NOTE]
> Wenn der Server keinen
> [`Content-Type`](/de/docs/Web/HTTP/Headers/Content-Type)
> Header bereitstellt, nimmt [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) an, dass der MIME-Typ
> `"text/xml"` ist. Wenn der Inhalt kein gültiges XML ist, tritt ein Fehler "XML Parsing Error: not
> well-formed" auf. Sie können dies vermeiden, indem Sie `overrideMimeType()` aufrufen, um einen anderen Typ anzugeben.

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
