---
title: 408 Request Timeout
slug: Web/HTTP/Reference/Status/408
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`408 Request Timeout`** [Client-Fehlerantwort](/de/docs/Web/HTTP/Reference/Status#client_error_responses) gibt an, dass der Server die Verbindung beenden möchte, da sie nicht genutzt wird.
Ein `408` wird von einigen Servern bei einer inaktiven Verbindung gesendet, _auch ohne vorherige Anfrage des Clients_.

Ein Server sollte das {{HTTPHeader("Connection", "Connection: close")}} Header-Feld in der Antwort senden, da `408` impliziert, dass der Server die Verbindung lieber schließen möchte, anstatt weiter zu warten.

Diese Antwort wird häufiger genutzt, da einige Browser wie Chrome und Firefox HTTP-Vorverbindungsmechanismen verwenden, um das Surfen zu beschleunigen.

> [!NOTE]
> Einige Server werden eine Verbindung schließen, ohne diese Nachricht zu senden.

## Status

```http
408 Request Timeout
```

## Beispiele

### Timeout bei der Formularübermittlung

Das folgende Beispiel zeigt, was ein Client senden könnte, wenn ein [`<input type="file">`](/de/docs/Web/HTML/Element/input/file) Element ein Bild bei der Formularübermittlung mit `method="post"` verwendet:

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

Wenn die Daten aufgrund von Netzwerkproblemen oder Latenzzeiten nicht vollständig empfangen werden, könnte der Server die Verbindung zeitlich begrenzen.
Clients können die Anfrage erneut senden, wobei eine neue Verbindung genutzt wird:

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
