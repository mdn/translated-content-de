---
title: 505 HTTP-Version wird nicht unterstützt
slug: Web/HTTP/Status/505
l10n:
  sourceCommit: f584f1b27f9f3b78c95122c560f5135866a87eb0
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`505 HTTP Version Not Supported`** [Server-Fehlerantwort](/de/docs/Web/HTTP/Status#server_error_responses) zeigt an, dass die in der Anfrage verwendete HTTP-Version vom Server nicht unterstützt wird.

Dieser Fehler tritt häufig auf, wenn eine Anforderungszeile unsachgemäß formuliert ist, z. B. `GET /path to resource HTTP/1.1` oder wenn die Anforderungszeile mit `\n` anstelle von `\r\n` beendet wird.
Zum Beispiel können Vermittler wie Load Balancer Anforderungszeilen einer weitergeleiteten Anfrage nicht korrekt verarbeiten, wie im folgenden Beispiel veranschaulicht.

## Status

```http
505 HTTP Version Not Supported
```

## Spezifikationen

{{Specifications}}

## Beispiele

### Ein 505 aufgrund einer fehlerhaften Anforderungszeile

Im folgenden Beispiel fordert ein Client `example.com/dog%20trainers` an, aber aufgrund einer fehlerhaften Load-Balancer-Konfiguration wird das {{Glossary("Percent-encoding", "Prozentkodierung")}} in der URL nicht korrekt verarbeitet.
In diesem Fall sieht der Ursprungsserver `trainers` anstelle der HTTP-Version und eine `505`-Antwort wird zurückgegeben.
Ein Anforderungsbezeichner ist im Antworttext enthalten, um eine Möglichkeit zu veranschaulichen, die Administratoren helfen könnte, die Ursache des Problems einzuschränken:

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
  <p>Wenn dieses Problem weiterhin besteht, wenden Sie sich bitte an den <a href="https://example.com/support">Support</a>.</p>
  <p>Serverprotokolle enthalten Details zu diesem Fehler mit der Anforderungs-ID: ABC-123.</p>
</body>
</html>
```

## Siehe auch

- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Status)
- {{HTTPHeader("Upgrade")}}-Header
