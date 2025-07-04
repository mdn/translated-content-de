---
title: 409 Conflict
slug: Web/HTTP/Reference/Status/409
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Der HTTP-Statuscode **`409 Conflict`** [Client-Fehlerantwort](/de/docs/Web/HTTP/Reference/Status#client_error_responses) zeigt einen Anfragekonflikt mit dem aktuellen Zustand der Zielressource an.

Im Bereich des {{Glossary("WebDAV", "WebDAV")}} Remote-Web-Authoring sind 409-Konfliktantworten Fehler, die an den Client gesendet werden, damit ein Benutzer einen Konflikt möglicherweise lösen und die Anfrage erneut übermitteln kann. Zum Beispiel treten Konflikte auf, wenn eine Anfrage zur Erstellung der Sammlung `/a/b/c/d/` gesendet wird, und `/a/b/c/` nicht existiert. Die Anfrage muss mit einem 409 fehlschlagen. Zusätzlich können Sie eine 409-Antwort erhalten, wenn Sie eine Datei hochladen, die älter ist als die vorhandene Datei auf dem Server, was zu einem Versionskontrollkonflikt führt.

In anderen Systemen können 409-Antworten für implementierungsspezifische Zwecke verwendet werden, wie z.B. um anzuzeigen, dass der Server mehrere Anfragen zur Aktualisierung derselben Ressource erhalten hat.

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

In dieser Implementierung erlaubt der Server nicht, dass zwei gleichzeitige Jobs ausgeführt werden, und gibt einen 409 zurück, was dem Client die Möglichkeit gibt zu prüfen, ob er beabsichtigte, die Aktion auszuführen oder eine andere Aufgabe durchzuführen:

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
