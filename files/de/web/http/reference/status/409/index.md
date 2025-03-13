---
title: 409 Conflict
slug: Web/HTTP/Reference/Status/409
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`409 Conflict`** [Client-Fehlerantwort](/de/docs/Web/HTTP/Reference/Status#client_error_responses) zeigt einen Anforderungskonflikt mit dem aktuellen Zustand der Zielressource an.

In {{Glossary("WebDAV", "WebDAV")}} Remote-Web-Autorisierung sind 409-Konfliktantworten Fehler, die an den Client gesendet werden, damit ein Benutzer möglicherweise in der Lage ist, einen Konflikt zu lösen und die Anfrage erneut zu stellen. Ein Beispiel für einen Konflikt tritt auf, wenn ein Antrag zur Erstellung der Sammlung `/a/b/c/d/` gestellt wird und `/a/b/c/` nicht existiert. In diesem Fall muss die Anfrage mit einem 409 fehlschlagen. Außerdem kann es zu einer 409-Antwort kommen, wenn eine Datei hochgeladen wird, die älter ist als die bereits vorhandene auf dem Server, was zu einem Versionskontrollkonflikt führt.

In anderen Systemen können 409-Antworten für implementationsspezifische Zwecke verwendet werden, wie zum Beispiel, um anzuzeigen, dass der Server mehrere Anfragen zur Aktualisierung derselben Ressource erhalten hat.

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

In dieser Implementierung erlaubt der Server nicht, dass zwei gleichzeitige Jobs laufen, und gibt einen 409 zurück, um dem Client die Möglichkeit zu geben zu überprüfen, ob sie die Aktion wirklich ausführen wollten oder eine andere Aufgabe ausführen möchten:

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
