---
title: Zurück
short-title: Back
slug: Web/WebDriver/Reference/Classic/Commands/Back
l10n:
  sourceCommit: 676631fd27c8096c3ae3ceb2a6b4ffd6f687055f
---

Der _Zurück_ [Befehl](/de/docs/Web/WebDriver/Reference/Classic/Commands) der [WebDriver](/de/docs/Web/WebDriver) API navigiert zur vorherigen Seite im Browserverlauf. Dies entspricht dem Klicken auf die Zurück-Schaltfläche des Browsers oder dem Aufruf von [`History.back()`](/de/docs/Web/API/History/back) in JavaScript.

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

- [Ungültige Sitzungs-ID](/de/docs/Web/WebDriver/Reference/Errors/InvalidSessionID)
  - : Sitzung existiert nicht.
- Kein solches Fenster
  - : Das [`window`](/de/docs/Web/API/Window)-Objekt wurde verworfen, was darauf hinweist, dass der Tab oder das Fenster geschlossen wurde.
- Timeout
  - : Die Navigation wurde nicht rechtzeitig abgeschlossen, bevor das Zeitlimit abgelaufen ist.

## Beispiele

### Zurück im Browserverlauf navigieren

Mit einem WebDriver-Server, der auf `localhost:4444` läuft, nehmen wir an, dass eine aktive Sitzung zu mindestens zwei Seiten navigiert hat. Um zur vorherigen Seite zurückzukehren, verwenden Sie den `back`-Befehl und ersetzen Sie `ID` durch die `sessionId` aus der [Neuer Sitzung](/de/docs/Web/WebDriver/Reference/Classic/Commands/NewSession)-Antwort:

```bash
curl -i -H "Content-Type: application/json" -d '{}' http://localhost:4444/session/ID/back
```

Der Server antwortet mit einem Nullwert, um den Erfolg anzuzeigen:

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

- [Weiter-Befehl](/de/docs/Web/WebDriver/Reference/Classic/Commands/Forward)
- [Aktualisieren-Befehl](/de/docs/Web/WebDriver/Reference/Classic/Commands/Refresh)
