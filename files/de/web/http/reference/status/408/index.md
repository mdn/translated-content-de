---
title: 408 Request Timeout
slug: Web/HTTP/Reference/Status/408
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`408 Request Timeout`** [Client-Fehlerantwort](/de/docs/Web/HTTP/Reference/Status#client_error_responses) zeigt an, dass der Server die ungenutzte Verbindung beenden möchte. Ein `408` wird manchmal von Servern über eine inaktive Verbindung gesendet, _auch ohne vorherige Anforderung durch den Client_.

Ein Server sollte das Feld {{HTTPHeader("Connection", "Connection: close")}} im Header der Antwort senden, da `408` impliziert, dass der Server beschlossen hat, die Verbindung zu schließen, anstatt weiter zu warten.

Diese Antwort wird viel häufiger verwendet, da einige Browser, wie Chrome und Firefox, HTTP-Vorverbindungsmechanismen nutzen, um das Surfen zu beschleunigen.

> [!NOTE]
> Einige Server beenden eine Verbindung, ohne diese Nachricht zu senden.

## Status

```http
408 Request Timeout
```

## Beispiele

### Zeitüberschreitung bei der Formularübermittlung

Das folgende Beispiel zeigt, was ein Client senden könnte, wenn ein [`<input type="file">`](/de/docs/Web/HTML/Reference/Elements/input/file) Element ein Bild bei einer Formularübermittlung mit `method="post"` verwendet:

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

Wenn die Daten aufgrund von Netzwerkproblemen oder Latenz nicht vollständig empfangen werden, könnte der Server die Verbindung beenden. Clients können die Anfrage erneut senden, und es wird eine neue Verbindung genutzt:

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

- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Reference/Status)
- {{HTTPHeader("Connection")}}
- {{HTTPHeader("X-DNS-Prefetch-Control")}}
