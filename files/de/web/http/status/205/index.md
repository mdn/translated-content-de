---
title: 205 Reset Content
slug: Web/HTTP/Status/205
l10n:
  sourceCommit: 3f68a9604259dfa862dd741dc88ebc8fb5fa10fe
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`205 Reset Content`** [Erfolgsantwort](/de/docs/Web/HTTP/Status#successful_responses) zeigt an, dass die Anfrage erfolgreich verarbeitet wurde und der Client die Dokumentansicht zurücksetzen sollte.

Diese Antwort soll Anwendungsfälle unterstützen, bei denen der Benutzer Inhalte erhält, die die Dateneingabe unterstützen, vom Benutzer bearbeitete Daten in einer Anfrage übermittelt werden, und der Inhalt für die nächste Eingabe zurückgesetzt werden muss. Die Anweisung, Inhalte "zurückzusetzen", kann das Löschen der Inhalte eines Formulars, das Zurücksetzen eines Canvas-Zustands oder das Aktualisieren einer Benutzeroberfläche bedeuten; die Implementierung hängt vom Client ab.

> [!NOTE]
> In Webanwendungen, die den Status `205` verwenden, wird davon ausgegangen, dass der Client Inhalte nach einer `205`-Antwort zurücksetzt.
> Dies wird typischerweise über JavaScript durchgeführt, da das Zurücksetzen von Inhalten wie Formularen nach einer `205`-Antwort nicht nativ von Browsern behandelt wird.

Es darf kein Inhalt im Antwortkörper vorhanden sein, und dies kann durch den {{HTTPHeader("Content-Length", "Content-Length: 0")}} Header oder den {{HTTPHeader("Transfer-Encoding", "Transfer-Encoding: chunked")}} Header mit einem leeren Chunk angezeigt werden.

## Status

```http
205 Reset Content
```

## Beispiele

### Zurücksetzen eines Formulars nach Erhalt eines `205 Reset Content`

Der Client in diesem Beispiel sendet eine `POST`-Anfrage, um ein Formular mit dem Kommentar `Hello!` abzusenden:

```http
POST /submit HTTP/1.1
Host: example.com
Content-Type: application/x-www-form-urlencoded
Content-Length: 15

comment=Hello!
```

Nachdem die Formularübermittlung erfolgreich verarbeitet wurde, antwortet der Server mit der folgenden `205`-Antwort, die anzeigt, dass der Client das Formular zurücksetzen sollte.

```http
HTTP/1.1 205 Reset Content
Content-Type: text/html; charset=utf-8
Content-Length: 0
Date: Wed, 26 Jun 2024 12:00:00 GMT
```

## Spezifikationen

{{Specifications}}

## Kompatibilitätsnotizen

Das Verhalten von Browsern unterscheidet sich, wenn diese Antwort fälschlicherweise einen Körper bei persistenten Verbindungen enthält. Siehe [`204 No Content` Kompatibilitätsnotizen](/de/docs/Web/HTTP/Status/204#compatibility_notes) für weitere Details.

## Siehe auch

- {{HTTPStatus(204)}} No Content
- [HTTP-Anfragemethoden](/de/docs/Web/HTTP/Methods)
- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Status)
