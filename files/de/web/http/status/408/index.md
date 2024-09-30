---
title: 408 Request Timeout
slug: Web/HTTP/Status/408
l10n:
  sourceCommit: ef46a4ac6bfec3e33c9209244e7cb1a9206165d6
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`408 Request Timeout`** [Client-Fehlerantwort](/de/docs/Web/HTTP/Status#client_error_responses) zeigt an, dass der Server diese ungenutzte Verbindung schließen möchte. Ein `408` wird auf einer Leerlaufverbindung von einigen Servern gesendet, _selbst ohne vorherige Anfrage des Clients_.

Ein Server sollte das Header-Feld {{HTTPHeader("Connection", "Connection: close")}} in der Antwort senden, da `408` impliziert, dass der Server entschieden hat, die Verbindung zu schließen, anstatt weiter zu warten.

Diese Antwort wird häufiger verwendet, da einige Browser, wie Chrome und Firefox, HTTP-Vorverbindungsmechanismen nutzen, um das Surfen zu beschleunigen.

> [!NOTE]
> Einige Server werden eine Verbindung schließen, ohne diese Nachricht zu senden.

## Status

```http
408 Request Timeout
```

## Beispiele

### Timeout bei der Formularübermittlung

Das folgende Beispiel zeigt, was ein Client senden könnte, wenn ein [`<input type="file">`](/de/docs/Web/HTML/Element/input/file)-Element ein Bild bei der Formularübermittlung mit `method="post"` verwendet:

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

Wenn die Daten aufgrund von Netzwerkproblemen oder Latenz nicht vollständig empfangen werden, kann der Server die Verbindung wegen Zeitüberschreitung beenden. Clients können die Anfrage erneut senden, und es wird eine neue Verbindung verwendet:

```http
HTTP/1.1 408 Request Timeout
Content-Type: text/html

<html>
<head>
    <title>408 Request Timeout</title>
</head>
<body>
    <h1>408 Request Timeout</h1>
    <p>Failed to process request in time. Please try again.</p>
</body>
</html>
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Status)
- {{HTTPHeader("Connection")}}
- {{HTTPHeader("X-DNS-Prefetch-Control")}}
