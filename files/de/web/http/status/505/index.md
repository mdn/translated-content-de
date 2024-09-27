---
title: 505 HTTP Version Not Supported
slug: Web/HTTP/Status/505
l10n:
  sourceCommit: f584f1b27f9f3b78c95122c560f5135866a87eb0
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`505 HTTP Version Not Supported`** [Serverfehlerantwort](/de/docs/Web/HTTP/Status#server_error_responses) zeigt an, dass die im Anforderungsdokument verwendete HTTP-Version vom Server nicht unterstützt wird.

Dieser Fehler tritt häufig auf, wenn eine Anforderungslinie falsch formatiert ist, wie zum Beispiel `GET /path to resource HTTP/1.1`, oder mit `\n` anstelle von `\r\n` endet.
Zum Beispiel können Vermittler wie Load-Balancer Anforderungslinien einer weitergeleiteten Anfrage nicht korrekt handhaben, wie im folgenden Beispiel dargestellt.

## Status

```http
505 HTTP Version Not Supported
```

## Spezifikationen

{{Specifications}}

## Beispiele

### Ein 505 aufgrund einer fehlerhaften Anforderungslinie

Im folgenden Beispiel fordert ein Client `example.com/dog%20trainers` an, aber aufgrund einer fehlerhaften Load-Balancer-Konfiguration wird das [Prozent-Codierung](/de/docs/Glossary/Percent-encoding) in der URL nicht korrekt behandelt.
In diesem Fall sieht der Ursprungsserver `trainers` anstelle der HTTP-Version, und es wird eine `505`-Antwort zurückgegeben.
Ein Anforderungsbezeichner ist im Antworttext enthalten, um zu veranschaulichen, wie Serveradministratoren die Ursache des Problems eingrenzen können:

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
- {{HTTPHeader("Upgrade")}} Header
