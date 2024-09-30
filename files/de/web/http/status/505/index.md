---
title: 505 HTTP Version Not Supported
slug: Web/HTTP/Status/505
l10n:
  sourceCommit: f584f1b27f9f3b78c95122c560f5135866a87eb0
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`505 HTTP Version Not Supported`** [Server-Fehlerantwort](/de/docs/Web/HTTP/Status#server_error_responses) zeigt an, dass die in der Anfrage verwendete HTTP-Version vom Server nicht unterstützt wird.

Dieser Fehler tritt häufig auf, wenn eine Anforderungszeile falsch formatiert ist, wie z. B. `GET /path to resource HTTP/1.1` oder mit `\n`, das die Anforderungszeile beendet, anstelle von `\r\n`.
Zum Beispiel können Zwischenstellen wie Load-Balancer Anforderungszeilen einer weitergeleiteten Anfrage nicht korrekt handhaben, wie im folgenden Beispiel veranschaulicht.

## Status

```http
505 HTTP Version Not Supported
```

## Spezifikationen

{{Specifications}}

## Beispiele

### Ein 505 aufgrund einer fehlerhaften Anforderungszeile

Im folgenden Beispiel fordert ein Client `example.com/dog%20trainers` an, aber aufgrund einer falschen Konfiguration des Load-Balancers wird das [Prozent-Encoding](/de/docs/Glossary/Percent-encoding) in der URL nicht korrekt verarbeitet.
In diesem Fall sieht der Ursprung-Server `trainers` anstelle der HTTP-Version, und es wird eine `505`-Antwort zurückgegeben.
Ein Anfrageidentifikator ist im Antwortkörper enthalten, um eine Möglichkeit zu veranschaulichen, die Serveradministratoren helfen kann, die Ursache des Problems einzugrenzen:

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

## Siehe auch

- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Status)
- {{HTTPHeader("Upgrade")}} header
