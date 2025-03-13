---
title: "XMLHttpRequest: Methode getResponseHeader()"
short-title: getResponseHeader()
slug: Web/API/XMLHttpRequest/getResponseHeader
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

Die Methode **`getResponseHeader()`** des [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) gibt die Zeichenkette zurück, die den Textwert eines bestimmten Headers enthält.

Wenn es mehrere Antwort-Header mit demselben Namen gibt, werden deren Werte als eine einzige verkettete Zeichenkette zurückgegeben, wobei jeder Wert von dem vorhergehenden durch ein Komma und ein Leerzeichen getrennt ist. Die Methode `getResponseHeader()` gibt den Wert als UTF-Byte-Sequenz zurück.

> [!NOTE]
> Die Suche nach dem Headernamen erfolgt ohne Berücksichtigung der Groß-/Kleinschreibung.

Wenn Sie den Rohstring aller Header benötigen, verwenden Sie die Methode [`getAllResponseHeaders()`](/de/docs/Web/API/XMLHttpRequest/getAllResponseHeaders), die den gesamten Roh-Header-String zurückgibt.

## Syntax

```js-nolint
getResponseHeader(headerName)
```

### Parameter

- `headerName`
  - : Eine Zeichenkette, die den Namen des Headers angibt, dessen Textwert Sie zurückgeben möchten.

### Rückgabewert

Eine Zeichenkette, die den Textwert des Headers repräsentiert, oder `null`, wenn entweder die Antwort noch nicht eingegangen ist oder der Header in der Antwort nicht existiert.

## Beispiele

In diesem Beispiel wird eine Anfrage erstellt und gesendet und ein [`readystatechange`](/de/docs/Web/API/XMLHttpRequest/readystatechange_event)
Handler eingerichtet, um nach dem [`readyState`](/de/docs/Web/API/XMLHttpRequest/readyState) zu suchen, der anzeigt, dass die Header empfangen wurden; in diesem Fall wird der Wert des {{httpheader("Content-Type")}} Headers abgerufen. Wenn der `Content-Type` nicht den gewünschten Wert hat, wird der [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) durch Aufruf von [`abort()`](/de/docs/Web/API/XMLHttpRequest/abort) abgebrochen.

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
- [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers)
- [`getAllResponseHeaders()`](/de/docs/Web/API/XMLHttpRequest/getAllResponseHeaders)
- [`response`](/de/docs/Web/API/XMLHttpRequest/response)
- Festlegen von Anfrage-Headern: [`setRequestHeader()`](/de/docs/Web/API/XMLHttpRequest/setRequestHeader)
