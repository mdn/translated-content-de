---
title: Titel abrufen
short-title: Titel abrufen
slug: Web/WebDriver/Reference/Classic/Commands/GetTitle
l10n:
  sourceCommit: ffd9f9be1372d988194c6c3a539dedf20ee1b71c
---

Der _Titel abrufen_ [Befehl](/de/docs/Web/WebDriver/Reference/Classic/Commands) der [WebDriver](/de/docs/Web/WebDriver) API gibt den Dokumenttitel des aktuellen Top-Level-Browsing-Kontextes zurück. Dies entspricht dem Auslesen der [`Document.title`](/de/docs/Web/API/Document/title) Eigenschaft in JavaScript.

## Syntax

| Methode                                          | URI-Vorlage                   |
| ------------------------------------------------ | ----------------------------- |
| [`GET`](/de/docs/Web/HTTP/Reference/Methods/GET) | `/session/{session id}/title` |

### URL-Parameter

- `session id`
  - : Bezeichner der Sitzung.

### Rückgabewert

Ein String, der den Titel des aktuellen Dokuments enthält, entsprechend dem Wert von [`Document.title`](/de/docs/Web/API/Document/title).

### Fehler

- [Ungültige Sitzungs-ID](/de/docs/Web/WebDriver/Reference/Classic/Errors/InvalidSessionID)
  - : Sitzung existiert nicht.
- Kein solches Fenster
  - : Das [`window`](/de/docs/Web/API/Window) Objekt wurde verworfen, was darauf hinweist, dass der Tab oder das Fenster geschlossen wurde.

## Beispiele

### Abrufen des Seitentitels

Mit einem WebDriver-Server, der auf `localhost:4444` läuft, und einer aktiven Sitzung, die zu `https://example.org` navigiert ist, können Sie den Dokumenttitel mit folgendem Befehl abrufen, wobei Sie `ID` durch die `sessionId` aus der [Neue Sitzung](/de/docs/Web/WebDriver/Reference/Classic/Commands/NewSession) Antwort ersetzen:

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
