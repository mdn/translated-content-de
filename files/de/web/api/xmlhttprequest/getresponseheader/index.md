---
title: "XMLHttpRequest: getResponseHeader()-Methode"
short-title: getResponseHeader()
slug: Web/API/XMLHttpRequest/getResponseHeader
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

Die [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Methode **`getResponseHeader()`** gibt den String zurück, der den Text eines bestimmten Header-Werts enthält.

Wenn es mehrere Antwort-Header mit demselben Namen gibt, werden deren Werte als ein einzelner zusammengefasster String zurückgegeben, wobei jeder Wert durch ein Komma und ein Leerzeichen vom vorherigen getrennt ist. Die Methode `getResponseHeader()` gibt den Wert als UTF-Byte-Sequenz zurück.

> [!NOTE]
> Die Suche nach dem Header-Namen erfolgt ohne Berücksichtigung der Groß- und Kleinschreibung.

Wenn Sie den rohen String aller Header benötigen, verwenden Sie die Methode [`getAllResponseHeaders()`](/de/docs/Web/API/XMLHttpRequest/getAllResponseHeaders), die den gesamten Roh-Header-String zurückgibt.

## Syntax

```js-nolint
getResponseHeader(headerName)
```

### Parameter

- `headerName`
  - : Ein String, der den Namen des Headers angibt, dessen Textwert Sie zurückgeben möchten.

### Rückgabewert

Ein String, der den Textwert des Headers darstellt, oder `null`, wenn die Antwort noch nicht empfangen wurde oder der Header in der Antwort nicht existiert.

## Beispiele

In diesem Beispiel wird eine Anfrage erstellt und gesendet, und ein [`readystatechange`](/de/docs/Web/API/XMLHttpRequest/readystatechange_event)-Handler wird eingerichtet, um auf den [`readyState`](/de/docs/Web/API/XMLHttpRequest/readyState) zu achten, der anzeigt, dass die Header empfangen wurden; in diesem Fall wird der Wert des {{httpheader("Content-Type")}}-Headers abgerufen. Wenn der `Content-Type` nicht der gewünschte Wert ist, wird das [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) durch Aufrufen von [`abort()`](/de/docs/Web/API/XMLHttpRequest/abort) abgebrochen.

```js
const client = new XMLHttpRequest();
client.open("GET", "unicorns-are-awesome.txt", true);
client.send();

client.onreadystatechange = () => {
  if (client.readyState === client.HEADERS_RECEIVED) {
    const contentType = client.getResponseHeader("Content-Type");
    if (contentType !== my_expected_type) {
      client.abort();
    }
  }
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)
- [HTTP-Header](/de/docs/Web/HTTP/Headers)
- [`getAllResponseHeaders()`](/de/docs/Web/API/XMLHttpRequest/getAllResponseHeaders)
- [`response`](/de/docs/Web/API/XMLHttpRequest/response)
- Setzen von Anfrage-Headern: [`setRequestHeader()`](/de/docs/Web/API/XMLHttpRequest/setRequestHeader)
