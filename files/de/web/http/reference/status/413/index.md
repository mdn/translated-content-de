---
title: 413 Content Too Large
slug: Web/HTTP/Reference/Status/413
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTTPSidebar}}

Der HTTP-Statuscode für den Fehler **`413 Content Too Large`** [Clientfehlerantwort](/de/docs/Web/HTTP/Reference/Status#client_error_responses) zeigt an, dass die Anforderungseinheit größer war als die vom Server festgelegten Grenzen.
Der Server könnte die Verbindung schließen oder ein {{HTTPHeader("Retry-After")}}-Headerfeld zurückgeben.

Vor {{rfc("9110")}} war die Antwortphrase für den Status **`Payload Too Large`**.
Diese Nachricht wird immer noch häufig verwendet.

## Status

```http
413 Content Too Large
```

## Beispiele

### Dateiupload-Limit überschritten

Das folgende Beispiel zeigt, was der Client senden kann, wenn ein [`<input type="file">`](/de/docs/Web/HTML/Reference/Elements/input/file)-Element ein Bild bei der Formularübermittlung mit `method="post"` beinhaltet:

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

Der Server kann den Upload ablehnen, wenn es eine Beschränkung der maximalen Dateigröße gibt, die er verarbeiten wird, und der Antwortkörper enthält eine `message` mit etwas Kontext:

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

- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Reference/Status)
- {{HTTPHeader("Connection")}}
- {{HTTPHeader("Retry-After")}}
