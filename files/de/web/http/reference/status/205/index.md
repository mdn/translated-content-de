---
title: 205 Reset Content
slug: Web/HTTP/Reference/Status/205
l10n:
  sourceCommit: b4e920ce0a34d9e609080ccb937a1a30c3cd558a
---

Der HTTP-Statuscode **`205 Reset Content`** [erfolgreiche Antwort](/de/docs/Web/HTTP/Reference/Status#successful_responses) zeigt an, dass die Anfrage erfolgreich verarbeitet wurde und der Client die Dokumentansicht zurücksetzen sollte.

Diese Antwort ist gedacht für Anwendungsfälle, bei denen der Benutzer Inhalte erhält, die die Dateneingabe unterstützen, benutzerbearbeitete Daten in einer Anfrage übermittelt und die Inhalte für die nächste Eingabe zurückgesetzt werden müssen. Die Anweisung zum "Zurücksetzen von Inhalten" kann bedeuten, dass der Inhalt eines Formulars gelöscht, ein Canvas-Zustand zurückgesetzt oder eine Benutzeroberfläche aktualisiert werden soll; die Implementierung hängt vom Client ab.

> [!NOTE]
> In Webanwendungen, die den `205`-Status verwenden, wird davon ausgegangen, dass der Client die Inhalte nach einer `205`-Antwort zurücksetzt.
> Dies geschieht typischerweise über JavaScript, da das Zurücksetzen von Inhalten wie Formularen nach einer `205`-Antwort nicht nativ von Browsern unterstützt wird.

Beachten Sie, dass die Antwort keinen Inhalt enthalten darf und dass Browser Antworten, die dies tun, möglicherweise ablehnen.
Die Antwort sollte auch nicht den {{HTTPHeader("Content-Length")}}-Header enthalten, aber wenn doch, muss der Wert `0` sein.
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
Content-Length: 16

comment=Hello%21
```

Nach erfolgreicher Verarbeitung der Formularübermittlung antwortet der Server mit der folgenden `205`-Antwort, die angibt, dass der Client das Formular zurücksetzen soll.

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
