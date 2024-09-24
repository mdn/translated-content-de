---
title: "XMLHttpRequest: overrideMimeType() Methode"
short-title: overrideMimeType()
slug: Web/API/XMLHttpRequest/overrideMimeType
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

Die Methode {{domxref("XMLHttpRequest")}}
**`overrideMimeType()`** gibt einen anderen MIME-Typ als den vom Server bereitgestellten an, der stattdessen für die Interpretation der im Anforderungsvorgang übertragenen Daten verwendet werden soll.

Dies könnte beispielsweise verwendet werden, um einen Stream dazu zu zwingen, als `"text/xml"` behandelt und analysiert zu werden, auch wenn der Server ihn nicht als solchen meldet. Diese Methode muss aufgerufen werden, bevor {{domxref("XMLHttpRequest.send", "send()")}} aufgerufen wird.

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

Dieses Beispiel gibt einen MIME-Typ von `"text/plain"` an und überschreibt damit den vom Server angegebenen Typ für die empfangenen Daten.

> [!NOTE]
> Falls der Server keinen
> [`Content-Type`](/de/docs/Web/HTTP/Headers/Content-Type)
> Header bereitstellt, nimmt {{domxref("XMLHttpRequest")}} an, dass der MIME-Typ
> `"text/xml"` ist. Wenn der Inhalt kein gültiges XML ist, tritt ein "XML Parsing Error: not well-formed" Fehler auf. Dies können Sie vermeiden, indem Sie `overrideMimeType()` aufrufen, um einen anderen Typ anzugeben.

```js
// Die empfangenen Daten als reinen Text interpretieren

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

- [Using XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)
- {{domxref("XMLHttpRequest.responseType")}}
