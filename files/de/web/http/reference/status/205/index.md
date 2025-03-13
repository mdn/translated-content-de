---
title: 205 Reset Content
slug: Web/HTTP/Reference/Status/205
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`205 Reset Content`** [Erfolgreiche Antwort](/de/docs/Web/HTTP/Reference/Status#successful_responses) zeigt an, dass die Anfrage erfolgreich verarbeitet wurde und der Client das Dokumenten-View zurücksetzen sollte.

Diese Antwort soll Anwendungsfälle unterstützen, bei denen der Benutzer Inhalte erhält, die Dateneingabe unterstützen, benutzerbearbeitete Daten in einer Anfrage übermittelt und die Inhalte für die nächste Eingabe zurückgesetzt werden müssen. Die Anweisung zum "Zurücksetzen von Inhalten" kann das Löschen der Inhalte eines Formulars, das Zurücksetzen eines Canvas-Status oder das Auffrischen einer Benutzeroberfläche bedeuten; die Implementierung hängt vom Client ab.

> [!NOTE]
> In Webanwendungen, die den `205`-Status verwenden, wird davon ausgegangen, dass der Client nach einer `205`-Antwort das Zurücksetzen der Inhalte übernimmt.
> Dies wird in der Regel über JavaScript durchgeführt, da das Zurücksetzen von Inhalten wie Formularen nach einer `205`-Antwort von Browsern nicht nativ unterstützt wird.

Es darf kein Inhalt im Antwortkörper vorhanden sein, und dies kann durch den {{HTTPHeader("Content-Length", "Content-Length: 0")}}-Header oder den {{HTTPHeader("Transfer-Encoding", "Transfer-Encoding: chunked")}}-Header mit einem leeren Block angezeigt werden.

## Status

```http
205 Reset Content
```

## Beispiele

### Zurücksetzen eines Formulars nach Erhalt einer `205 Reset Content`

Der Client in diesem Beispiel sendet eine `POST`-Anfrage, um ein Formular mit dem Kommentar `Hello!` abzusenden:

```http
POST /submit HTTP/1.1
Host: example.com
Content-Type: application/x-www-form-urlencoded
Content-Length: 15

comment=Hello!
```

Nach erfolgreicher Verarbeitung der Formularübertragung antwortet der Server mit der folgenden `205`-Antwort und gibt an, dass der Client das Formular zurücksetzen sollte.

```http
HTTP/1.1 205 Reset Content
Content-Type: text/html; charset=utf-8
Content-Length: 0
Date: Wed, 26 Jun 2024 12:00:00 GMT
```

## Spezifikationen

{{Specifications}}

## Kompatibilitätsanmerkungen

Das Verhalten der Browser unterscheidet sich, wenn diese Antwort fälschlicherweise einen Körper bei persistenten Verbindungen enthält.
Siehe [Kompatibilitätsanmerkungen zu `204 No Content`](/de/docs/Web/HTTP/Reference/Status/204#compatibility_notes) für weitere Details.

## Siehe auch

- {{HTTPStatus(204)}} No Content
- [HTTP-Anfragemethoden](/de/docs/Web/HTTP/Reference/Methods)
- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Reference/Status)
