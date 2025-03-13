---
title: 505 HTTP Version Not Supported
slug: Web/HTTP/Reference/Status/505
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`505 HTTP Version Not Supported`** [Serverfehlerantwort](/de/docs/Web/HTTP/Reference/Status#server_error_responses) zeigt an, dass die im Antrag verwendete HTTP-Version vom Server nicht unterstützt wird.

Es ist üblich, diesen Fehler zu sehen, wenn eine Anforderungszeile nicht korrekt formatiert ist, wie `GET /path to resource HTTP/1.1` oder mit `\n`, das die Anforderungszeile anstelle von `\r\n` beendet. Zum Beispiel können Vermittler wie Load-Balancer Anforderungszeilen einer weitergeleiteten Anfrage nicht korrekt verarbeiten, wie im untenstehenden Beispiel veranschaulicht wird.

## Status

```http
505 HTTP Version Not Supported
```

## Beispiele

### Ein 505 aufgrund einer fehlerhaften Anforderungszeile

Im folgenden Beispiel fordert ein Client `example.com/dog%20trainers` an, aber aufgrund einer falschen Konfiguration des Load-Balancers wird das {{Glossary("Percent-encoding", "Prozent-Encoding")}} in der URL nicht korrekt behandelt. In diesem Fall sieht der Ursprungsserver `trainers` anstelle der HTTP-Version und gibt stattdessen eine `505`-Antwort zurück. Ein Anforderungsbezeichner ist im Antworttext enthalten, um einen Weg zur Veranschaulichung aufzuzeigen, der Serveradministratoren helfen kann, die Ursache des Problems einzugrenzen:

```http
GET /dog trainers HTTP/1.1
Host: example.com
```

```http
HTTP/1.1 505 HTTP Version Not Supported
Content-Type: text/html;
Content-Length: 123

<!doctype html>
<html lang="en">
<head>
  <title>505 HTTP Version Not Supported</title>
</head>
<body>
  <h1>505 HTTP Version Not Supported</h1>
  <p>If this problem persists, please <a href="https://example.com/support">contact support</a>.</p>
  <p>Server logs contain details of this error with request ID: ABC-123.</p>
</body>
</html>
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Reference/Status)
- {{HTTPHeader("Upgrade")}} Header
