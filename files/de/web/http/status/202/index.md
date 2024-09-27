---
title: 202 Accepted
slug: Web/HTTP/Status/202
l10n:
  sourceCommit: 3f68a9604259dfa862dd741dc88ebc8fb5fa10fe
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`202 Accepted`** [erfolgreiche Antwort](/de/docs/Web/HTTP/Status#successful_responses) zeigt an, dass eine Anfrage zur Verarbeitung angenommen wurde, die Verarbeitung jedoch nicht abgeschlossen ist oder möglicherweise noch nicht begonnen hat. Die tatsächliche Verarbeitung der Anfrage ist nicht garantiert; eine Aufgabe oder Aktion kann fehlschlagen oder unzulässig sein, wenn ein Server versucht, sie zu verarbeiten.

Eine `202`-Antwort ist unverbindlich, was bedeutet, dass es keinen Weg gibt, später eine asynchrone HTTP-Antwort zu senden, um das Ergebnis der Verarbeitung anzuzeigen. Dieser Antwortcode wird typischerweise verwendet, wenn die Anfrage von einem anderen Prozess oder Server bearbeitet wird oder wenn Anfragen in Batches verarbeitet werden.

## Status

```http
202 Accepted
```

## Beispiele

### Automatisierten Task starten

Im folgenden Beispiel möchten wir einen Automatisierungsprozess starten, um Hundebesitzer über eine Abholaufgabe per E-Mail zu informieren:

```http
POST /tasks HTTP/1.1
Host: example.com
Content-Type: application/json

{
  "task": "emailDogOwners",
  "template": "pickup"
}
```

Die Antwort zeigt an, dass die Anfrage zum Starten eines Tasks zur Verarbeitung angenommen wurde. Eine URL wird im Antwortkörper gesendet, damit der Client Änderungen am Status des Tasks verfolgen kann:

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
