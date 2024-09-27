---
title: 409 Conflict
slug: Web/HTTP/Status/409
l10n:
  sourceCommit: ba53fe04589c36a2210d7549c003f3016093ef8e
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`409 Conflict`** [Client-Fehlerantwort](/de/docs/Web/HTTP/Status#client_error_responses) zeigt einen Anforderungskonflikt mit dem aktuellen Zustand der Zielressource an.

Im [WebDAV](/de/docs/Glossary/WebDAV) Remote-Webauthoring sind 409 Konfliktantworten Fehler, die an den Client gesendet werden, damit ein Benutzer möglicherweise einen Konflikt lösen und die Anforderung erneut senden kann. Zum Beispiel treten Konflikte auf, wenn eine Anforderung zur Erstellung der Sammlung `/a/b/c/d/` gestellt wird und `/a/b/c/` nicht existiert. In diesem Fall muss die Anforderung mit einem 409 fehlschlagen. Außerdem könnten Sie eine 409-Antwort erhalten, wenn Sie eine Datei hochladen, die älter ist als die bereits auf dem Server vorhandene, was zu einem Versionskontrollkonflikt führt.

In anderen Systemen können 409-Antworten für implementierungsspezifische Zwecke verwendet werden, wie beispielsweise um anzuzeigen, dass der Server mehrere Anfragen zum Aktualisieren derselben Ressource erhalten hat.

## Status

```http
409 Conflict
```

## Beispiele

### Gleichzeitige Aufgaben nicht erlaubt

Im folgenden Beispiel möchten wir einen Automatisierungsprozess starten, der eine häufige Aufgabe im System ausführt:

```http
POST /tasks HTTP/1.1
Host: example.com
Content-Type: application/json

{
  "task": "emailDogOwners",
  "template": "pickup"
}
```

In dieser Implementierung erlaubt der Server nicht, dass zwei gleichzeitige Jobs ausgeführt werden, und gibt einen 409 zurück, wodurch der Client die Möglichkeit erhält zu überprüfen, ob er die Aktion durchführen oder eine andere Aufgabe ausführen wollte:

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

- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Status)
- {{HTTPMethod("PUT")}}
