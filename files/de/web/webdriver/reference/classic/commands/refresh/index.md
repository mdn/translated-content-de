---
title: Aktualisieren
short-title: Refresh
slug: Web/WebDriver/Reference/Classic/Commands/Refresh
l10n:
  sourceCommit: ffd9f9be1372d988194c6c3a539dedf20ee1b71c
---

Der _Aktualisieren_-[Befehl](/de/docs/Web/WebDriver/Reference/Classic/Commands) der [WebDriver](/de/docs/Web/WebDriver) API lädt die aktuelle Seite im aktiven Browsing-Kontext neu. Dies entspricht dem Klicken auf die Aktualisieren-Schaltfläche des Browsers oder dem Aufrufen von [`Location.reload()`](/de/docs/Web/API/Location/reload) in JavaScript.

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

- [Ungültige Sitzungs-ID](/de/docs/Web/WebDriver/Reference/Classic/Errors/InvalidSessionID)
  - : Sitzung existiert nicht.
- Kein solches Fenster
  - : Das [`window`](/de/docs/Web/API/Window)-Objekt wurde verworfen, was darauf hinweist, dass der Tab oder das Fenster geschlossen wurde.
- Unerwartetes Warnfenster geöffnet
  - : Ein modaler Dialog war geöffnet, der diesen Vorgang blockiert.

## Beispiele

### Neuladen der aktuellen Seite

Bei einem laufenden WebDriver-Server auf `localhost:4444` und einer aktiven Sitzung, die zu einer Seite navigiert hat, verwenden Sie den `refresh`-Befehl, um die aktuelle Seite neu zu laden, und ersetzen Sie `ID` durch die `sessionId` aus der [Neuer Sitzung](/de/docs/Web/WebDriver/Reference/Classic/Commands/NewSession)-Antwort:

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
