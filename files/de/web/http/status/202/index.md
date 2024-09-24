---
title: 202 Akzeptiert
slug: Web/HTTP/Status/202
l10n:
  sourceCommit: 3f68a9604259dfa862dd741dc88ebc8fb5fa10fe
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`202 Akzeptiert`** [erfolgreiche Antwort](/de/docs/Web/HTTP/Status#successful_responses) gibt an, dass eine Anfrage zur Bearbeitung angenommen wurde, die Bearbeitung jedoch nicht abgeschlossen oder möglicherweise nicht begonnen hat. Die tatsächliche Verarbeitung der Anfrage ist nicht garantiert; eine Aufgabe oder Aktion kann fehlschlagen oder abgelehnt werden, wenn ein Server versucht, sie zu verarbeiten.

Eine `202`-Antwort ist unverbindlich, was bedeutet, dass es keine Möglichkeit gibt, später eine asynchrone HTTP-Antwort zu senden, um das Ergebnis der Verarbeitung anzuzeigen. Dieser Antwortcode wird in der Regel verwendet, wenn die Anfrage von einem anderen Prozess oder Server bearbeitet wird oder wenn Anfragen in Chargen verarbeitet werden.

## Status

```http
202 Accepted
```

## Beispiele

### Automatisierte Aufgabe beginnen

Im folgenden Beispiel möchten wir einen Automatisierungsprozess starten, um Hundebesitzer per E-Mail über eine Abholaufgabe zu informieren:

```http
POST /tasks HTTP/1.1
Host: example.com
Content-Type: application/json

{
  "task": "emailDogOwners",
  "template": "pickup"
}
```

Die Antwort zeigt an, dass die Anfrage zur Bearbeitung einer Aufgabe angenommen wurde. Eine URL wird im Antwortkörper gesendet, damit der Client Änderungen am Status der Aufgabe verfolgen kann:

```http
HTTP/1.1 202 Accepted
Date: Wed, 26 Jun 2024 12:00:00 GMT
Server: Apache/2.4.1 (Unix)
Content-Type: application/json

{
  "message": "Request accepted. Starting to process task.",
  "taskId": "123",
  "monitorUrl": "http://example.com/tasks/123/status"
}
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- {{HTTPHeader("Accept")}}
- [HTTP-Anfragemethoden](/de/docs/Web/HTTP/Methods)
- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Status)
