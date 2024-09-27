---
title: 507 Insufficient Storage
slug: Web/HTTP/Status/507
l10n:
  sourceCommit: f584f1b27f9f3b78c95122c560f5135866a87eb0
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`507 Insufficient Storage`** [Serverfehler-Antwort](/de/docs/Web/HTTP/Status#server_error_responses) zeigt an, dass eine Aktion nicht ausgeführt werden konnte, weil der Server nicht über genügend verfügbaren Speicher verfügt, um die Anforderung erfolgreich abzuschließen.

Dieser Statuscode wurde zuerst im Kontext des Web-basierten verteilten Autorings und Versionierens ([WebDAV](/de/docs/Glossary/WebDAV)) verwendet, hat sich jedoch auch auf andere Anwendungsfälle ausgeweitet, um Situationen zu beschreiben, in denen Server-Ressourcen erschöpft sind. Häufige Ursachen für diesen Fehler können darin bestehen, dass Serververzeichnisse keinen verfügbaren Speicherplatz mehr haben, nicht genügend RAM für einen Vorgang verfügbar ist oder interne Grenzen erreicht werden (wie anwendungsspezifische Speicherbeschränkungen, zum Beispiel). Die Anforderung, die diesen Fehler verursacht, muss nicht unbedingt Inhalte enthalten, da es sich um eine Anforderung handeln kann, die ein Ressource auf dem Server erstellen würde, wenn sie erfolgreich wäre.

Dieses Problem wird als vorübergehend angesehen, im Gegensatz zu einem {{HTTPStatus("413", "413 Content Too Large")}}, der anzeigt, dass die Client-Anforderung unabhängig von den Serverressourcenbeschränkungen zu groß ist, um sie zu verarbeiten.

## Status

```http
507 Insufficient Storage
```

## Beispiele

### 507-Antwort, die Speicherprobleme anzeigt

Die folgende Anfrage versucht, eine Datei auf einen Server hochzuladen, der über nicht ausreichenden Speicherplatz verfügt. Der Server antwortet mit einem `507`, um anzuzeigen, dass seine Ressourcen erschöpft sind:

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

- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Status)
- {{HTTPStatus("413", "413 Content Too Large")}}
