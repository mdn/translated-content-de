---
title: Weiter
short-title: Forward
slug: Web/WebDriver/Reference/Classic/Commands/Forward
l10n:
  sourceCommit: ffd9f9be1372d988194c6c3a539dedf20ee1b71c
---

Der _Weiter_ [Befehl](/de/docs/Web/WebDriver/Reference/Classic/Commands) der [WebDriver](/de/docs/Web/WebDriver) API navigiert zur nächsten Seite in der Verlaufshistorie. Dies entspricht dem Klicken auf den „Weiter“-Button des Browsers oder dem Aufruf von [`History.forward()`](/de/docs/Web/API/History/forward) in JavaScript.

## Syntax

| Methode                                            | URI-Vorlage                     |
| -------------------------------------------------- | ------------------------------- |
| [`POST`](/de/docs/Web/HTTP/Reference/Methods/POST) | `/session/{session id}/forward` |

### URL-Parameter

- `session id`
  - : Bezeichner der Sitzung.

### Rückgabewert

`null` bei Erfolg.

### Fehler

- [Ungültige Sitzungs-ID](/de/docs/Web/WebDriver/Reference/Classic/Errors/InvalidSessionID)
  - : Die Sitzung existiert nicht.
- Kein solches Fenster
  - : Das [`window`](/de/docs/Web/API/Window)-Objekt wurde verworfen, was darauf hinweist, dass die Registerkarte oder das Fenster geschlossen wurde.
- Timeout
  - : Die Navigation wurde nicht abgeschlossen, bevor das Zeitlimit abgelaufen ist.

## Beispiele

### Vorwärts navigieren in der Verlaufshistorie

Angenommen, ein aktiver WebDriver-Server läuft auf `localhost:4444` und die Sitzung hat mindestens zwei Seiten aufgerufen und ist dann zurückgegangen. Um weiter zur nächsten Seite zu navigieren, verwenden Sie den `forward` Befehl und ersetzen Sie `ID` mit der `sessionId` aus der [Neue Sitzung](/de/docs/Web/WebDriver/Reference/Classic/Commands/NewSession) Antwort:

```bash
curl -i -H "Content-Type: application/json" -d '{}' http://localhost:4444/session/ID/forward
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
- [Aktualisieren-Befehl](/de/docs/Web/WebDriver/Reference/Classic/Commands/Refresh)
