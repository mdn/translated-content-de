---
title: "XMLHttpRequest: overrideMimeType()-Methode"
short-title: overrideMimeType()
slug: Web/API/XMLHttpRequest/overrideMimeType
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

Die Methode [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)
**`overrideMimeType()`** spezifiziert einen MIME-Typ, der anstelle des vom Server bereitgestellten Typs verwendet wird, wenn die übertragenen Daten in einer Anfrage interpretiert werden.

Dies kann zum Beispiel verwendet werden, um einen Datenstrom zu zwingen, als `"text/xml"` behandelt und geparst zu werden, auch wenn der Server ihn nicht als solchen meldet. Diese Methode muss aufgerufen werden, bevor [`send()`](/de/docs/Web/API/XMLHttpRequest/send) aufgerufen wird.

## Syntax

```js-nolint
overrideMimeType(mimeType)
```

### Parameter

- `mimeType`
  - : Ein String, der den MIME-Typ spezifiziert, der anstelle des vom Server angegebenen Typs verwendet werden soll. Wenn der Server keinen Typ angibt, geht `XMLHttpRequest` von `"text/xml"` aus.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Dieses Beispiel spezifiziert einen MIME-Typ von `"text/plain"`, der den vom Server angegebenen Typ für die empfangenen Daten überschreibt.

> [!NOTE]
> Wenn der Server keinen
> [`Content-Type`](/de/docs/Web/HTTP/Headers/Content-Type)
> Header bereitstellt, geht [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) davon aus, dass der MIME-Typ
> `"text/xml"` ist. Ist der Inhalt kein gültiges XML, tritt ein "XML Parsing Error: not well-formed"-Fehler auf. Dies können Sie vermeiden, indem Sie `overrideMimeType()` aufrufen, um einen anderen Typ anzugeben.

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

- [Using XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)
- [`XMLHttpRequest.responseType`](/de/docs/Web/API/XMLHttpRequest/responseType)
