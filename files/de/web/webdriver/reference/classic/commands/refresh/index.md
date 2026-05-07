---
title: Aktualisieren
short-title: Refresh
slug: Web/WebDriver/Reference/Classic/Commands/Refresh
l10n:
  sourceCommit: 421a9c26127cf11e33e72184b14656c9d406294d
---

Der _Aktualisieren_ [Befehl](/de/docs/Web/WebDriver/Reference/Classic/Commands) der [WebDriver](/de/docs/Web/WebDriver) API lädt die aktuelle Seite im aktiven Browsing-Kontext neu. Dies entspricht dem Klicken auf den Aktualisieren-Button des Browsers oder dem Aufruf von [`Location.reload()`](/de/docs/Web/API/Location/reload) in JavaScript.

## Syntax

| Methode                                            | URI-Vorlage                     |
| -------------------------------------------------- | ------------------------------- |
| [`POST`](/de/docs/Web/HTTP/Reference/Methods/POST) | `/session/{session id}/refresh` |

### URL-Parameter

- `session id`
  - : Bezeichner der Sitzung.

### Rückgabewert

`null` bei Erfolg.

### Fehler

- [`ungültige Sitzungs-ID`](/de/docs/Web/WebDriver/Reference/Errors/InvalidSessionID)
  - : Sitzung existiert nicht.
- `kein solches Fenster`
  - : Das [`window`](/de/docs/Web/API/Window)-Objekt wurde verworfen, was darauf hinweist, dass der Tab oder das Fenster geschlossen wurde.
- `unerwarteter Alarm geöffnet`
  - : Ein modales Dialogfeld war geöffnet, das diesen Vorgang blockierte.

## Beispiele

### Die aktuelle Seite neu laden

Mit einem WebDriver-Server, der auf `localhost:4444` läuft, wird angenommen, dass eine aktive Sitzung zu einer Seite navigiert ist. Um die aktuelle Seite neu zu laden, verwenden Sie den `refresh`-Befehl, und ersetzen Sie `ID` durch die `sessionId` aus der [Neue Sitzung](/de/docs/Web/WebDriver/Reference/Classic/Commands/NewSession)-Antwort:

```bash
curl -i -H "Content-Type: application/json" -d '{}' http://localhost:4444/session/ID/refresh
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

- [Zurück-Befehl](/de/docs/Web/WebDriver/Reference/Classic/Commands/Back)
- [Vorwärts-Befehl](/de/docs/Web/WebDriver/Reference/Classic/Commands/Forward)
