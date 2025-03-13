---
title: 507 Insufficient Storage
slug: Web/HTTP/Reference/Status/507
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`507 Insufficient Storage`** [Serverfehler-Antwort](/de/docs/Web/HTTP/Reference/Status#server_error_responses) zeigt an, dass eine Aktion nicht durchgeführt werden konnte, weil der Server nicht genügend verfügbaren Speicher hat, um die Anfrage erfolgreich abzuschließen.

Dieser Statuscode wurde zuerst im Kontext der Web Distributed Authoring and Versioning ({{Glossary("WebDAV", "WebDAV")}}) verwendet, hat sich jedoch auf andere Anwendungsfälle ausgeweitet, um Situationen zu beschreiben, in denen Serverressourcen erschöpft sind. Häufige Ursachen für diesen Fehler können sein, dass Verzeichnisse auf dem Server keinen verfügbaren Speicherplatz mehr haben, nicht genug RAM für eine Operation verfügbar ist oder interne Limits erreicht werden (wie beispielsweise anwendungsspezifische Speichergrenzen). Die Anfrage, die diesen Fehler verursacht, muss nicht unbedingt Inhalt enthalten, da es sich um eine Anfrage handeln kann, die bei Erfolg eine Ressource auf dem Server erstellen würde.

Dieses Problem wird als temporär angesehen, im Gegensatz zu einem {{HTTPStatus("413", "413 Content Too Large")}}, der anzeigt, dass die Clientanfrage zu groß ist, als dass der Server sie unabhängig von den Serverressourcen verarbeiten könnte.

## Status

```http
507 Insufficient Storage
```

## Beispiele

### 507-Antwort, die Speicherprobleme anzeigt

Die folgende Anfrage versucht, eine Datei auf einen Server hochzuladen, der nicht genügend verfügbaren Speicher hat. Der Server antwortet mit einem `507`, um anzuzeigen, dass seine Ressourcen erschöpft sind:

```http
POST /upload HTTP/1.1
Host: example.com
Content-Type: image/jpeg
Content-Length: 123456

[JPG file data]
```

```http
HTTP/1.1 507 Insufficient Storage
Date: Mon, 22 Jul 2024 10:00:00 GMT
Server: Apache/2.4.41 (Unix)
Content-Type: text/html; charset=UTF-8
Content-Length: 230

<html>
<head>
  <title>507 Insufficient Storage</title>
</head>
<body>
  <h1>Insufficient Storage</h1>
  <p>The server is unable to store the included resource to complete the request.</p>
  <p>Please try again later.</p>
</body>
</html>
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Reference/Status)
- {{HTTPStatus("413", "413 Content Too Large")}}
