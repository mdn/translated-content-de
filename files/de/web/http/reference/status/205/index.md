---
title: 205 Reset Content
slug: Web/HTTP/Reference/Status/205
l10n:
  sourceCommit: 87ca9db1ebe56eb20c1f20b91fca43955d8f0e26
---

Der HTTP-Statuscode **`205 Reset Content`** [erfolgreiche Antwort](/de/docs/Web/HTTP/Reference/Status#successful_responses) signalisiert, dass die Anfrage erfolgreich verarbeitet wurde und der Client die Dokumentansicht zurücksetzen sollte.

Diese Antwort ist für Anwendungsfälle gedacht, in denen der Benutzer Inhalte erhält, die die Dateneingabe unterstützen, benutzerbearbeitete Daten in einer Anfrage übermittelt und der Inhalt für die nächste Eingabe zurückgesetzt werden muss. Die Anweisung "Inhalt zurücksetzen" kann das Löschen des Inhalts eines Formulars, das Zurücksetzen des Zustands einer Zeichenfläche oder das Aktualisieren einer Benutzeroberfläche bedeuten; die Implementierung hängt vom Client ab.

> [!NOTE]
> In Webanwendungen, die den `205`-Status verwenden, wird davon ausgegangen, dass der Client den Inhalt nach einer `205`-Antwort zurücksetzt.
> Dies wird typischerweise über JavaScript umgesetzt, da das Zurücksetzen von Inhalten wie Formularen nach einer `205`-Antwort nicht nativ von Browsern behandelt wird.

Beachten Sie, dass die Antwort keinen Inhalt enthalten darf und Browser Antworten ablehnen können, die dies tun. Die Antwort sollte auch nicht den {{HTTPHeader("Content-Length")}}-Header enthalten, aber wenn doch, muss der Wert `0` sein. Die leere Antwort kann auch durch den {{HTTPHeader("Transfer-Encoding", "Transfer-Encoding: chunked")}}-Header mit einem leeren Chunk angezeigt werden.

## Status

```http
205 Reset Content
```

## Beispiele

### Zurücksetzen eines Formulars nach Erhalt einer `205 Reset Content`

Der Client in diesem Beispiel sendet eine `POST`-Anfrage, um ein Formular mit dem Kommentar `Hello!` einzureichen:

```http
POST /submit HTTP/1.1
Host: example.com
Content-Type: application/x-www-form-urlencoded
Content-Length: 16

comment=Hello%21
```

Nach erfolgreicher Verarbeitung der Formulareinreichung antwortet der Server mit der folgenden `205`-Antwort, die dem Client signalisiert, das Formular zurückzusetzen.

```http
HTTP/1.1 205 Reset Content
Content-Type: text/html; charset=utf-8
Date: Wed, 26 Jun 2024 12:00:00 GMT
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- {{HTTPStatus(204)}} No Content
- [HTTP-Anfragemethoden](/de/docs/Web/HTTP/Reference/Methods)
- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Reference/Status)
