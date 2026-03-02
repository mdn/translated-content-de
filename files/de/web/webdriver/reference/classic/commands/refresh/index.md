---
title: Aktualisieren
short-title: Refresh
slug: Web/WebDriver/Reference/Classic/Commands/Refresh
l10n:
  sourceCommit: 676631fd27c8096c3ae3ceb2a6b4ffd6f687055f
---

Der _Refresh_-[Befehl](/de/docs/Web/WebDriver/Reference/Classic/Commands) der [WebDriver](/de/docs/Web/WebDriver) API lädt die aktuelle Seite im aktiven Browsing-Kontext neu. Dies entspricht dem Klicken auf die Aktualisierungsschaltfläche des Browsers oder dem Aufruf von [`Location.reload()`](/de/docs/Web/API/Location/reload) in JavaScript.

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

- [Invalid session id](/de/docs/Web/WebDriver/Reference/Errors/InvalidSessionID)
  - : Sitzung existiert nicht.
- Kein solches Fenster
  - : Das [`window`](/de/docs/Web/API/Window)-Objekt wurde verworfen, was darauf hinweist, dass die Registerkarte oder das Fenster geschlossen wurde.
- Unerwartetes offenes Dialogfeld
  - : Ein modales Dialogfeld war geöffnet und blockiert diesen Vorgang.

## Beispiele

### Neuladen der aktuellen Seite

Bei einem WebDriver-Server, der auf `localhost:4444` läuft, nehme man an, eine aktive Sitzung hat zu einer Seite navigiert. Um die aktuelle Seite neu zu laden, verwenden Sie den `refresh`-Befehl, wobei `ID` durch die `sessionId` aus der [New Session](/de/docs/Web/WebDriver/Reference/Classic/Commands/NewSession) Antwort ersetzt wird:

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
