---
title: Get Title
short-title: Get Title
slug: Web/WebDriver/Reference/Classic/Commands/GetTitle
l10n:
  sourceCommit: 676631fd27c8096c3ae3ceb2a6b4ffd6f687055f
---

Der _Get Title_ [Befehl](/de/docs/Web/WebDriver/Reference/Classic/Commands) der [WebDriver](/de/docs/Web/WebDriver) API gibt den Titel des Dokuments im aktuellen Top-Level-Browsing-Kontext zurück. Dies entspricht dem Auslesen der [`Document.title`](/de/docs/Web/API/Document/title) Eigenschaft in JavaScript.

## Syntax

| Methode                                          | URI-Vorlage                   |
| ------------------------------------------------ | ----------------------------- |
| [`GET`](/de/docs/Web/HTTP/Reference/Methods/GET) | `/session/{session id}/title` |

### URL-Parameter

- `session id`
  - : Kennung der Sitzung.

### Rückgabewert

Ein String, der den Titel des aktuellen Dokuments enthält, was dem Wert von [`Document.title`](/de/docs/Web/API/Document/title) entspricht.

### Fehler

- [Ungültige Sitzungs-ID](/de/docs/Web/WebDriver/Reference/Errors/InvalidSessionID)
  - : Sitzung existiert nicht.
- Kein solches Fenster
  - : Das [`window`](/de/docs/Web/API/Window)-Objekt wurde verworfen, was darauf hindeutet, dass der Tab oder das Fenster geschlossen wurde.

## Beispiele

### Abrufen des Seitentitels

Mit einem auf `localhost:4444` laufenden WebDriver-Server, bei dem angenommen wird, dass eine aktive Sitzung auf `https://example.org` navigiert hat, können Sie den Dokumenttitel mit folgendem Befehl abrufen, wobei `ID` durch die `sessionId` aus der [New Session](/de/docs/Web/WebDriver/Reference/Classic/Commands/NewSession) Antwort ersetzt wird:

```bash
curl -i http://localhost:4444/session/ID/title
```

Der Server antwortet mit dem Dokumenttitel, wie hier gezeigt:

```http
HTTP/1.1 200 OK
content-type: application/json; charset=utf-8

{"value":"Example Domain"}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
