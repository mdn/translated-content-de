---
title: 505 HTTP Version Not Supported
slug: Web/HTTP/Status/505
l10n:
  sourceCommit: 6bef243050a1f49bf5b7f37e9c4552f7aa30e24d
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`505 HTTP Version Not Supported`** [Serverfehler-Antwort](/de/docs/Web/HTTP/Status#server_error_responses) gibt an, dass die in der Anfrage verwendete HTTP-Version vom Server nicht unterstützt wird.

Dieser Fehler tritt häufig auf, wenn eine Anfragelinie falsch formatiert ist, wie z. B. `GET /path to resource HTTP/1.1` oder wenn die Anfragelinie mit `\n` statt `\r\n` endet.
Zum Beispiel können Vermittler wie Load Balancer Anfragelinien einer weitergeleiteten Anfrage nicht richtig behandeln, wie im folgenden Beispiel dargestellt.

## Status

```http
505 HTTP Version Not Supported
```

## Beispiele

### Ein 505 aufgrund einer falsch formatierten Anfragelinie

Im folgenden Beispiel fordert ein Client `example.com/dog%20trainers` an, aber aufgrund einer falschen Load-Balancer-Konfiguration wird das {{Glossary("Percent-encoding", "Prozentcodierung")}} in der URL nicht korrekt verarbeitet.
In diesem Fall sieht der Ursprungsserver `trainers` anstelle der HTTP-Version, und es wird eine `505`-Antwort zurückgegeben.
Ein Anfrage-Identifikator ist im Antworttext enthalten, um darzustellen, wie Serveradministratoren möglicherweise die Ursache des Problems leichter eingrenzen können:

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

- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Status)
- {{HTTPHeader("Upgrade")}} Header
