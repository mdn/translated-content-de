---
title: Forward
short-title: Forward
slug: Web/WebDriver/Reference/Classic/Commands/Forward
l10n:
  sourceCommit: 421a9c26127cf11e33e72184b14656c9d406294d
---

Der _Forward_ [Befehl](/de/docs/Web/WebDriver/Reference/Classic/Commands) der [WebDriver](/de/docs/Web/WebDriver) API navigiert zur nächsten Seite im Browserverlauf. Dies entspricht dem Klicken auf die Vorwärtsschaltfläche des Browsers oder dem Aufrufen von [`History.forward()`](/de/docs/Web/API/History/forward) in JavaScript.

## Syntax

| Methode                                            | URI-Vorlage                     |
| -------------------------------------------------- | ------------------------------- |
| [`POST`](/de/docs/Web/HTTP/Reference/Methods/POST) | `/session/{session id}/forward` |

### URL-Parameter

- `session id`
  - : Kennung der Sitzung.

### Rückgabewert

`null` bei Erfolg.

### Fehler

- [`invalid session id`](/de/docs/Web/WebDriver/Reference/Errors/InvalidSessionID)
  - : Sitzung existiert nicht.
- `no such window`
  - : Das [`window`](/de/docs/Web/API/Window) Objekt wurde verworfen, was darauf hinweist, dass der Tab oder das Fenster geschlossen wurde.
- `timeout`
  - : Die Navigation wurde nicht abgeschlossen, bevor das Zeitlimit abgelaufen ist.

## Beispiele

### Vorwärtsnavigieren im Browserverlauf

Mit einem WebDriver-Server, der auf `localhost:4444` läuft, nehmen wir an, dass eine aktive Sitzung zu mindestens zwei Seiten navigiert hat und zurückgegangen ist. Um vorwärts zur nächsten Seite zu navigieren, verwenden Sie den `forward` Befehl und ersetzen Sie `ID` mit der `sessionId` aus der [Neue Sitzung](/de/docs/Web/WebDriver/Reference/Classic/Commands/NewSession)-Antwort:

```bash
curl -i -H "Content-Type: application/json" -d '{}' http://localhost:4444/session/ID/forward
```

Der Server antwortet mit einem null Wert als Bestätigung für den Erfolg:

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
