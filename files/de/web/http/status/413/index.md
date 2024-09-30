---
title: 413 Content Too Large
slug: Web/HTTP/Status/413
l10n:
  sourceCommit: ba53fe04589c36a2210d7549c003f3016093ef8e
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`413 Content Too Large`** [Client-Fehler-Antwort](/de/docs/Web/HTTP/Status#client_error_responses) zeigt an, dass die Anfragedaten größer waren als die vom Server definierten Grenzen. Der Server könnte die Verbindung schließen oder ein {{HTTPHeader("Retry-After")}}-Headerfeld zurückgeben.

Vor {{rfc("9110")}} war der Antwortsatz für den Status **`Payload Too Large`**. Diese Nachricht wird immer noch häufig verwendet.

## Status

```http
413 Content Too Large
```

## Beispiele

### Dateiupload-Limit überschritten

Das folgende Beispiel zeigt, was der Client senden kann, wenn ein [`<input type="file">`](/de/docs/Web/HTML/Element/input/file)-Element beim Absenden eines Formulars mit `method="post"` ein Bild enthält:

```http
POST /upload HTTP/1.1
Host: example.com
Content-Type: multipart/form-data; boundary=----Boundary1234
Content-Length: 4012345

------Boundary1234
Content-Disposition: form-data; name="file"; filename="myImage.jpg"
Content-Type: image/jpeg

\xFF\xD8\xFF\xE0\x00...(binary data)
------Boundary1234--
```

Der Server kann den Upload ablehnen, wenn eine Beschränkung für die maximale Dateigröße besteht, die er verarbeiten wird, und der Antwortinhalt enthält eine `message` mit etwas Kontext:

```http
HTTP/1.1 413 Content Too Large
Content-Type: application/json
Content-Length: 97

{
  "error": "Upload failed",
  "message": "Maximum allowed upload size is 4MB",
}
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Status)
- {{HTTPHeader("Connection")}}
- {{HTTPHeader("Retry-After")}}
