---
title: Get Title
short-title: Titel abrufen
slug: Web/WebDriver/Reference/Classic/Commands/GetTitle
l10n:
  sourceCommit: 421a9c26127cf11e33e72184b14656c9d406294d
---

Der _Get Title_ [Befehl](/de/docs/Web/WebDriver/Reference/Classic/Commands) der [WebDriver](/de/docs/Web/WebDriver) API gibt den Dokumenttitel des aktuellen Top-Level-Browsing-Kontexts zurück. Dies entspricht dem Lesen der [`Document.title`](/de/docs/Web/API/Document/title)-Eigenschaft in JavaScript.

## Syntax

| Methode                                          | URI-Vorlage                   |
| ------------------------------------------------ | ----------------------------- |
| [`GET`](/de/docs/Web/HTTP/Reference/Methods/GET) | `/session/{session id}/title` |

### URL-Parameter

- `session id`
  - : Bezeichner der Sitzung.

### Rückgabewert

Ein String, der den Titel des aktuellen Dokuments enthält, äquivalent zum Wert von [`Document.title`](/de/docs/Web/API/Document/title).

### Fehler

- [`ungültige Sitzungs-ID`](/de/docs/Web/WebDriver/Reference/Errors/InvalidSessionID)
  - : Sitzung existiert nicht.
- `kein solches Fenster`
  - : Das [`window`](/de/docs/Web/API/Window)-Objekt wurde verworfen, was darauf hinweist, dass der Tab oder das Fenster geschlossen wurde.

## Beispiele

### Abrufen des Seitentitels

Bei einem WebDriver-Server, der auf `localhost:4444` läuft, nehmen wir an, dass eine aktive Sitzung zu `https://example.org` navigiert ist. Sie können den Dokumenttitel mit folgendem Befehl abrufen, wobei Sie `ID` durch die `sessionId` aus der [neue Sitzung](/de/docs/Web/WebDriver/Reference/Classic/Commands/NewSession)-Antwort ersetzen:

```bash
curl -i http://localhost:4444/session/ID/title
```

Der Server antwortet mit dem Dokumenttitel wie hier gezeigt:

```http
HTTP/1.1 200 OK
content-type: application/json; charset=utf-8

{"value":"Example Domain"}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
