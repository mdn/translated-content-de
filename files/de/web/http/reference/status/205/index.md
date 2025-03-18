---
title: 205 Reset Content
slug: Web/HTTP/Reference/Status/205
l10n:
  sourceCommit: 74ab26a101ef2e4d5e5f25962033bc1042102677
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`205 Reset Content`** [erfolgreiche Antwort](/de/docs/Web/HTTP/Reference/Status#successful_responses) zeigt an, dass die Anfrage erfolgreich verarbeitet wurde und der Client die Dokumentansicht zurücksetzen sollte.

Diese Antwort ist für Anwendungsfälle vorgesehen, bei denen der Benutzer Inhalte erhält, die die Dateneingabe unterstützen, benutzerbearbeitete Daten in einer Anfrage übermittelt werden und der Inhalt für die nächste Eingabe zurückgesetzt werden muss. Die Anweisung zum "Zurücksetzen der Inhalte" kann das Löschen der Inhalte eines Formulars, das Zurücksetzen eines Canvas-Zustands oder das Aktualisieren einer Benutzeroberfläche bedeuten; die Implementierung hängt vom Client ab.

> [!NOTE]
> In Webanwendungen, die den `205`-Status verwenden, wird davon ausgegangen, dass der Client nach einer `205`-Antwort den Inhalt zurücksetzt.
> Dies wird typischerweise über JavaScript durchgeführt, da das Zurücksetzen von Inhalten wie Formularen nach einer `205`-Antwort nicht von den Browsern nativ unterstützt wird.

Beachten Sie, dass die Antwort keinen Inhalt oder den {{HTTPHeader("Content-Length")}}-Header enthalten darf (Browser können Antworten ablehnen, die Inhalte enthalten).
Die leere Antwort kann auch durch den {{HTTPHeader("Transfer-Encoding", "Transfer-Encoding: chunked")}}-Header mit einem leeren Chunk angezeigt werden.

## Status

```http
205 Reset Content
```

## Beispiele

### Zurücksetzen eines Formulars nach Erhalt eines `205 Reset Content`

Der Client in diesem Beispiel sendet eine `POST`-Anfrage, um ein Formular mit dem Kommentar `Hello!` zu übermitteln:

```http
POST /submit HTTP/1.1
Host: example.com
Content-Type: application/x-www-form-urlencoded
Content-Length: 15

comment=Hello!
```

Nach der erfolgreichen Verarbeitung der Formularübermittlung antwortet der Server mit der folgenden `205`-Antwort, die angibt, dass der Client das Formular zurücksetzen sollte.

```http
HTTP/1.1 205 Reset Content
Content-Type: text/html; charset=utf-8
Content-Length: 0
Date: Wed, 26 Jun 2024 12:00:00 GMT
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- {{HTTPStatus(204)}} No Content
- [HTTP-Anfragemethoden](/de/docs/Web/HTTP/Reference/Methods)
- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Reference/Status)
