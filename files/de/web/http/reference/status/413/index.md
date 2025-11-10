---
title: 413 Content Too Large
slug: Web/HTTP/Reference/Status/413
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Der HTTP-Statuscode **`413 Content Too Large`** [Client-Fehlerantwort](/de/docs/Web/HTTP/Reference/Status#client_error_responses) zeigt an, dass die Anfrageeinheit größer als die vom Server definierten Grenzen war. Der Server könnte die Verbindung schließen oder ein {{HTTPHeader("Retry-After")}}-Headerfeld zurückgeben.

Vor {{rfc("9110")}} war der Antwortsatz für den Status **`Payload Too Large`**. Diese Meldung wird immer noch häufig verwendet.

## Status

```http
413 Content Too Large
```

## Beispiele

### Datei-Upload-Limit überschritten

Das folgende Beispiel zeigt, was der Client senden kann, wenn ein [`<input type="file">`](/de/docs/Web/HTML/Reference/Elements/input/file)-Element ein Bild beim Formularversand mit `method="post"` enthält:

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

Der Server kann den Upload ablehnen, wenn es eine Beschränkung für die maximale Größe der zu verarbeitenden Dateien gibt, und der Antwortkörper kann eine `message` mit zusätzlichem Kontext enthalten:

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
