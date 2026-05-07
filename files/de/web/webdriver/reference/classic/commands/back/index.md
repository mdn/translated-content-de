---
title: Zurück
short-title: Back
slug: Web/WebDriver/Reference/Classic/Commands/Back
l10n:
  sourceCommit: 421a9c26127cf11e33e72184b14656c9d406294d
---

Der _Zurück_ [Befehl](/de/docs/Web/WebDriver/Reference/Classic/Commands) der [WebDriver](/de/docs/Web/WebDriver) API navigiert zur vorherigen Seite in der Browserhistorie. Dies entspricht dem Klicken auf die Zurück-Schaltfläche des Browsers oder dem Aufruf von [`History.back()`](/de/docs/Web/API/History/back) in JavaScript.

## Syntax

| Methode                                            | URI-Vorlage                  |
| -------------------------------------------------- | ---------------------------- |
| [`POST`](/de/docs/Web/HTTP/Reference/Methods/POST) | `/session/{session id}/back` |

### URL-Parameter

- `session id`
  - : Bezeichner der Sitzung.

### Rückgabewert

`null` bei Erfolg.

### Fehler

- [`invalid session id`](/de/docs/Web/WebDriver/Reference/Errors/InvalidSessionID)
  - : Sitzung existiert nicht.
- `no such window`
  - : Das [`window`](/de/docs/Web/API/Window) Objekt wurde verworfen, was darauf hindeutet, dass der Tab oder das Fenster geschlossen wurde.
- `timeout`
  - : Die Navigation wurde nicht vor Ablauf der Zeitüberschreitung abgeschlossen.

## Beispiele

### Navigation zurück in der Browserhistorie

Bei einem laufenden WebDriver-Server auf `localhost:4444`, nehmen wir an, dass eine aktive Sitzung mindestens zwei Seiten besucht hat. Um zur vorherigen Seite zurückzukehren, verwenden Sie den `back` Befehl und ersetzen Sie `ID` durch die `sessionId` aus der [New Session](/de/docs/Web/WebDriver/Reference/Classic/Commands/NewSession) Antwort:

```bash
curl -i -H "Content-Type: application/json" -d '{}' http://localhost:4444/session/ID/back
```

Der Server antwortet mit einem null-Wert, um den Erfolg anzuzeigen:

```http
HTTP/1.1 200 OK
content-type: application/json; charset=utf-8

{"value":null}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Vorwärtsbefehl](/de/docs/Web/WebDriver/Reference/Classic/Commands/Forward)
- [Aktualisierenbefehl](/de/docs/Web/WebDriver/Reference/Classic/Commands/Refresh)
