---
title: 205 Reset Content
slug: Web/HTTP/Reference/Status/205
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Der HTTP-Statuscode **`205 Reset Content`** [erfolgreiche Antwort](/de/docs/Web/HTTP/Reference/Status#successful_responses) zeigt an, dass die Anfrage erfolgreich verarbeitet wurde und der Client die Dokumentansicht zurücksetzen sollte.

Diese Antwort ist für Anwendungsfälle gedacht, bei denen der Benutzer Inhalte erhält, die die Dateneingabe unterstützen, benutzerbearbeitete Daten in einer Anfrage einreicht und der Inhalt für den nächsten Eintrag zurückgesetzt werden muss. Die Anweisung zum "Zurücksetzen des Inhalts" kann das Löschen des Inhalts eines Formulars, das Zurücksetzen eines Canvas-Zustands oder das Aktualisieren einer Benutzeroberfläche bedeuten; die Implementierung hängt vom Client ab.

> [!NOTE]
> In Webanwendungen, die den `205`-Status verwenden, wird angenommen, dass der Client den Inhalt nach einer `205`-Antwort zurücksetzt.
> Dies erfolgt typischerweise über JavaScript, da das Zurücksetzen von Inhalten wie Formularen nach einer `205`-Antwort nicht nativ von Browsern gehandhabt wird.

Beachten Sie, dass die Antwort keinen Inhalt oder den {{HTTPHeader("Content-Length")}}-Header enthalten darf (Browser können Antworten zurückweisen, die Inhalte enthalten).
Die leere Antwort kann auch durch Verwendung des {{HTTPHeader("Transfer-Encoding", "Transfer-Encoding: chunked")}}-Headers mit einem leeren Chunk angezeigt werden.

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

Nach der erfolgreichen Verarbeitung der Formularanfrage antwortet der Server mit der folgenden `205`-Antwort, die anzeigt, dass der Client das Formular zurücksetzen sollte.

```http
HTTP/1.1 205 Reset Content
Content-Type: text/html; charset=utf-8
Content-Length: 0
Date: Wed, 26 Jun 2024 12:00:00 GMT
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- {{HTTPStatus(204)}} Kein Inhalt
- [HTTP-Anfragemethoden](/de/docs/Web/HTTP/Reference/Methods)
- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Reference/Status)
