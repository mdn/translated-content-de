---
title: 507 Insufficient Storage
slug: Web/HTTP/Reference/Status/507
l10n:
  sourceCommit: 87ca9db1ebe56eb20c1f20b91fca43955d8f0e26
---

Der HTTP-Statuscode **`507 Insufficient Storage`** [Serverfehlerantwort](/de/docs/Web/HTTP/Reference/Status#server_error_responses) zeigt an, dass eine Aktion nicht ausgeführt werden konnte, da der Server nicht über genügend verfügbaren Speicher verfügt, um die Anfrage erfolgreich abzuschließen.

Dieser Statuscode wurde erstmals im Kontext der Web Distributed Authoring and Versioning ({{Glossary("WebDAV", "WebDAV")}}) verwendet, hat sich jedoch in andere Anwendungsfälle verbreitet, um Situationen zu beschreiben, in denen die Serverressourcen erschöpft sind.
Häufige Ursachen für diesen Fehler können sein, dass Serververzeichnisse keinen verfügbaren Speicherplatz mehr haben, nicht genügend verfügbarer RAM für einen Vorgang vorhanden ist oder interne Grenzen erreicht wurden (wie z.B. anwendungsspezifische Speichergrenzen).
Die Anfrage, die diesen Fehler verursacht, muss nicht unbedingt Inhalte enthalten, da es sich um eine Anfrage handeln kann, die eine Ressource auf dem Server erstellen würde, wenn sie erfolgreich wäre.

Dieses Problem wird als vorübergehend angesehen, im Gegensatz zu einem {{HTTPStatus("413", "413 Content Too Large")}}, der anzeigt, dass die Anfrage des Clients zu groß ist, als dass der Server sie verarbeiten könnte, unabhängig von den Ressourcenbeschränkungen des Servers.

## Status

```http
507 Insufficient Storage
```

## Beispiele

### 507-Antwort, die Speicherprobleme anzeigt

Die folgende Anfrage versucht, eine Datei auf einen Server hochzuladen, der nicht über genügend verfügbaren Speicher verfügt.
Der Server antwortet mit einem `507`, um anzuzeigen, dass seine Ressourcen erschöpft sind:

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
