---
title: 507 Insufficient Storage
slug: Web/HTTP/Reference/Status/507
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Der HTTP-Statuscode **`507 Insufficient Storage`** [Server-Fehlerantwort](/de/docs/Web/HTTP/Reference/Status#server_error_responses) zeigt an, dass eine Aktion nicht ausgeführt werden konnte, weil der Server nicht über genügend verfügbaren Speicher verfügt, um die Anfrage erfolgreich abzuschließen.

Dieser Statuscode wurde zuerst im Kontext der Web Distributed Authoring and Versioning ({{Glossary("WebDAV", "WebDAV")}}) verwendet, hat sich jedoch auf andere Anwendungsfälle ausgebreitet, um Situationen zu beschreiben, in denen Serverressourcen erschöpft sind. Häufige Ursachen für diesen Fehler können von Serververzeichnissen stammen, die keinen verfügbaren Speicherplatz mehr haben, nicht genug verfügbaren RAM für eine Operation oder erreichte interne Grenzen (wie zum Beispiel anwendungsspezifische Speicherlimits, zum Beispiel). Die Anfrage, die diesen Fehler verursacht, muss nicht unbedingt Inhalte enthalten, da es sich um eine Anfrage handeln könnte, die eine Ressource auf dem Server erstellen würde, wenn sie erfolgreich wäre.

Dieses Problem gilt als vorübergehend, im Gegensatz zu einem {{HTTPStatus("413", "413 Content Too Large")}}, der anzeigt, dass die Clientanfrage für den Server zu groß ist, um sie unabhängig von den Ressourcenbeschränkungen des Servers zu verarbeiten.

## Status

```http
507 Insufficient Storage
```

## Beispiele

### 507-Antwort zeigt Speicherprobleme an

Die folgende Anfrage versucht, eine Datei auf einen Server hochzuladen, der über unzureichenden verfügbaren Speicher verfügt. Der Server antwortet mit einem `507`, um anzuzeigen, dass seine Ressourcen erschöpft sind:

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
