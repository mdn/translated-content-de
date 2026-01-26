---
title: 505 HTTP Version Not Supported
slug: Web/HTTP/Reference/Status/505
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Der HTTP-Statuscode **`505 HTTP Version Not Supported`** [Serverfehlerantwort](/de/docs/Web/HTTP/Reference/Status#server_error_responses) zeigt an, dass die im Request verwendete HTTP-Version vom Server nicht unterstützt wird.

Dieser Fehler tritt häufig auf, wenn eine Anforderungszeile fehlerhaft formatiert ist, z. B. `GET /path to resource HTTP/1.1` oder mit `\n` die Anforderungszeile endet anstelle von `\r\n`.
Zum Beispiel könnten Zwischeninstanzen wie Lastverteilersysteme die Anforderungszeilen eines weitergeleiteten Requests nicht korrekt behandeln, wie im untenstehenden Beispiel veranschaulicht.

## Status

```http
505 HTTP Version Not Supported
```

## Beispiele

### Ein 505 aufgrund einer missgebildeten Anforderungszeile

Im folgenden Beispiel fordert ein Client `example.com/dog%20trainers` an, aber aufgrund einer falschen Lastverteilereinstellung wird die {{Glossary("Percent-encoding", "Prozentkodierung")}} in der URL nicht korrekt behandelt.
In diesem Fall sieht der Ursprungsserver `trainers` anstelle der HTTP-Version, sodass eine `505`-Antwort zurückgegeben wird.
Zur Veranschaulichung einer Methode, die den Serveradministratoren helfen könnte, die Ursache des Problems einzugrenzen, enthält der Antwortkörper eine Anforderungskennung:

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

- [HTTP-Statuscodes für Antworten](/de/docs/Web/HTTP/Reference/Status)
- {{HTTPHeader("Upgrade")}}-Header
