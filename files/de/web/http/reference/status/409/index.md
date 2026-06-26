---
title: 409 Conflict
slug: Web/HTTP/Reference/Status/409
l10n:
  sourceCommit: 87ca9db1ebe56eb20c1f20b91fca43955d8f0e26
---

Der HTTP-Statuscode **`409 Konflikt`** [Client-Fehlerantwort](/de/docs/Web/HTTP/Reference/Status#client_error_responses) zeigt einen Anfragekonflikt mit dem aktuellen Status der Zielressource an.

Im {{Glossary("WebDAV", "WebDAV")}} Remote-Webauthoring sind 409 Konfliktantworten Fehler, die an den Client gesendet werden, damit ein Benutzer in der Lage ist, einen Konflikt zu lösen und die Anfrage erneut zu senden.
Beispielsweise treten Konflikte auf, wenn eine Anfrage zur Erstellung der Sammlung `/a/b/c/d/` gestellt wird und `/a/b/c/` nicht existiert. Die Anfrage muss dann mit einem 409 fehlschlagen. Außerdem kann eine 409-Antwort auftreten, wenn eine ältere Datei hochgeladen wird als die, die bereits auf dem Server existiert, was zu einem Versionskontrollkonflikt führt.

In anderen Systemen können 409-Antworten für implementierungsspezifische Zwecke verwendet werden, etwa um anzuzeigen, dass der Server mehrere Anfragen zum Aktualisieren derselben Ressource erhalten hat.

## Status

```http
409 Conflict
```

## Beispiele

### Gleichzeitige Aufgaben nicht erlaubt

Im folgenden Beispiel möchten wir einen Automatisierungsprozess starten, der eine allgemeine Aufgabe im System durchführt:

```http
POST /tasks HTTP/1.1
Host: example.com
Content-Type: application/json

{
  "task": "emailDogOwners",
  "template": "pickup"
}
```

In dieser Implementierung lässt der Server nicht zu, dass zwei gleichzeitige Jobs ausgeführt werden, und gibt einen 409 zurück. Dies gibt dem Client die Möglichkeit, zu überprüfen, ob sie die Aktion tatsächlich ausführen oder eine andere Aufgabe starten wollten:

```http
HTTP/1.1 409 Conflict
Date: Wed, 26 Jun 2024 12:00:00 GMT
Server: Apache/2.4.1 (Unix)
Content-Type: application/json

{
  "code": "AutomationConflict",
  "task": "emailDogOwners",
  "message": "Task locked. Cannot start a new automation since job is already running.",
  "runningTaskId": "123"
}
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Reference/Status)
- {{HTTPMethod("PUT")}}
