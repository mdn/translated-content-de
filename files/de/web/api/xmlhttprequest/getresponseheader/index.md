---
title: "XMLHttpRequest: getResponseHeader()-Methode"
short-title: getResponseHeader()
slug: Web/API/XMLHttpRequest/getResponseHeader
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

Die {{DOMxRef("XMLHttpRequest")}}-Methode **`getResponseHeader()`** gibt die Zeichenfolge zurück, die den Textwert eines bestimmten Headers enthält.

Wenn es mehrere Antwortheader mit demselben Namen gibt, werden ihre Werte als eine einzelne zusammengefügte Zeichenfolge zurückgegeben, wobei jeder Wert durch ein Komma und ein Leerzeichen vom vorherigen getrennt ist. Die `getResponseHeader()`-Methode gibt den Wert als UTF-Byte-Sequenz zurück.

> [!NOTE]
> Die Suche nach dem Header-Namen ist nicht zwischen Groß- und Kleinschreibung unterscheidend.

Wenn Sie die Rohzeichenfolge aller Header benötigen, verwenden Sie die {{DOMxRef("XMLHttpRequest.getAllResponseHeaders", "getAllResponseHeaders()")}}-Methode, die die gesamte rohe Header-Zeichenfolge zurückgibt.

## Syntax

```js-nolint
getResponseHeader(headerName)
```

### Parameter

- `headerName`
  - : Eine Zeichenfolge, die den Namen des Headers angibt, dessen Textwert Sie zurückgeben möchten.

### Rückgabewert

Eine Zeichenfolge, die den Textwert des Headers darstellt, oder `null`, wenn entweder die Antwort noch nicht empfangen wurde oder der Header in der Antwort nicht existiert.

## Beispiele

In diesem Beispiel wird eine Anfrage erstellt und gesendet, und ein {{domxref("XMLHttpRequest/readystatechange_event", "readystatechange")}}-Handler wird eingerichtet, um nach dem {{DOMxRef("XMLHttpRequest.readyState", "readyState")}} zu suchen, um anzuzeigen, dass die Header empfangen wurden; wenn das der Fall ist, wird der Wert des {{httpheader("Content-Type")}}-Headers abgerufen. Wenn der `Content-Type` nicht der gewünschte Wert ist, wird die {{DOMxRef("XMLHttpRequest")}} durch Aufruf von {{DOMxRef("XMLHttpRequest.abort", "abort()")}} abgebrochen.

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
- {{DOMxRef("XMLHttpRequest.getAllResponseHeaders", "getAllResponseHeaders()")}}
- {{DOMxRef("XMLHttpRequest.response", "response")}}
- Festlegen von Anfrage-Headern: {{DOMxRef("XMLHttpRequest.setRequestHeader", "setRequestHeader()")}}
