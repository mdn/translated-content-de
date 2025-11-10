---
title: "XMLHttpRequest: overrideMimeType()-Methode"
short-title: overrideMimeType()
slug: Web/API/XMLHttpRequest/overrideMimeType
l10n:
  sourceCommit: 2ccbd062264d0a2a34f185a3386cb272f42c50f5
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

Die [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Methode
**`overrideMimeType()`** legt einen MIME-Typ fest, der sich von dem vom Server bereitgestellten unterscheidet und stattdessen beim Interpretieren der übertragenen Daten in einer Anfrage verwendet wird.

Dies kann zum Beispiel verwendet werden, um einen Stream als `"text/xml"` zu behandeln und zu parsen, auch wenn der Server dies nicht als solchen meldet. Diese Methode muss vor dem Aufruf von [`send()`](/de/docs/Web/API/XMLHttpRequest/send) aufgerufen werden.

## Syntax

```js-nolint
overrideMimeType(mimeType)
```

### Parameter

- `mimeType`
  - : Ein String, der den zu verwendenden MIME-Typ angibt, anstelle des vom Server angegebenen. Wenn der Server keinen Typ angibt,
    nimmt `XMLHttpRequest` `"text/xml"` an.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Dieses Beispiel gibt einen MIME-Typ von `"text/plain"` an und überschreibt damit den vom Server angegebenen Typ für die empfangenen Daten.

> [!NOTE]
> Wenn der Server keinen
> [`Content-Type`](/de/docs/Web/HTTP/Reference/Headers/Content-Type)-Header bereitstellt, nimmt [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) an, dass der MIME-Typ `"text/xml"` ist. Wenn der Inhalt kein gültiges XML ist, tritt ein Fehler "XML Parsing Error: not well-formed" auf. Sie können dies vermeiden, indem Sie `overrideMimeType()` aufrufen, um eine andere Typangabe zu machen.

```js
// Interpret the received data as plain text

req = new XMLHttpRequest();
req.overrideMimeType("text/plain");
req.addEventListener("load", callback);
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
