---
title: 507 Unzureichender Speicher
slug: Web/HTTP/Status/507
l10n:
  sourceCommit: f584f1b27f9f3b78c95122c560f5135866a87eb0
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`507 Insufficient Storage`** [Serverfehlerantwort](/de/docs/Web/HTTP/Status#server_error_responses) gibt an, dass eine Aktion nicht ausgeführt werden konnte, weil der Server nicht über genügend verfügbaren Speicher verfügt, um die Anfrage erfolgreich abzuschließen.

Dieser Statuscode wurde zuerst im Kontext von Web Distributed Authoring and Versioning ({{Glossary("WebDAV")}}) verwendet, hat sich jedoch auf andere Anwendungsfälle ausgebreitet, um Situationen zu beschreiben, in denen die Serverressourcen erschöpft sind. Häufige Ursachen für diesen Fehler können darin bestehen, dass auf dem Server nicht genügend Speicherplatz in den Verzeichnissen vorhanden ist, nicht genug RAM für einen Vorgang verfügbar ist, oder interne Limits erreicht wurden (wie anwendungsspezifische Speicherbegrenzungen, zum Beispiel). Die Anfrage, die diesen Fehler verursacht, muss nicht unbedingt Inhalte enthalten, da es sich um eine Anfrage handeln kann, die eine Ressource auf dem Server erstellen würde, wenn sie erfolgreich wäre.

Dieses Problem wird als vorübergehend betrachtet, im Gegensatz zu einem {{HTTPStatus("413", "413 Content Too Large")}}, der anzeigt, dass die Clientanforderung zu groß ist, als dass der Server sie unabhängig von den Serverressourcenbeschränkungen verarbeiten könnte.

## Status

```http
507 Insufficient Storage
```

## Beispiele

### 507-Antwort, die Speicherprobleme anzeigt

Die folgende Anfrage versucht, eine Datei auf einen Server hochzuladen, der über nicht genügend verfügbaren Speicher verfügt. Der Server antwortet mit einem `507`, um anzuzeigen, dass seine Ressourcen erschöpft sind:

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
  <h1>Unzureichender Speicher</h1>
  <p>Der Server kann die enthaltene Ressource nicht speichern, um die Anfrage abzuschließen.</p>
  <p>Bitte versuchen Sie es später erneut.</p>
</body>
</html>
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- [HTTP-Statuscodes](/de/docs/Web/HTTP/Status)
- {{HTTPStatus("413", "413 Content Too Large")}}
