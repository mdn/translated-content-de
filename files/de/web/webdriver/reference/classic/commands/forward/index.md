---
title: Weiter
short-title: Forward
slug: Web/WebDriver/Reference/Classic/Commands/Forward
l10n:
  sourceCommit: 676631fd27c8096c3ae3ceb2a6b4ffd6f687055f
---

Der _Weiter_ [Befehl](/de/docs/Web/WebDriver/Reference/Classic/Commands) der [WebDriver](/de/docs/Web/WebDriver) API navigiert zur nächsten Seite im Browserverlauf. Dies entspricht dem Klicken auf die Vorwärtstaste des Browsers oder dem Aufruf von [`History.forward()`](/de/docs/Web/API/History/forward) in JavaScript.

## Syntax

| Methode                                            | URI-Vorlage                     |
| -------------------------------------------------- | ------------------------------- |
| [`POST`](/de/docs/Web/HTTP/Reference/Methods/POST) | `/session/{session id}/forward` |

### URL-Parameter

- `session id`
  - : Identifikator der Sitzung.

### Rückgabewert

`null` bei Erfolg.

### Fehler

- [Ungültige Sitzungs-ID](/de/docs/Web/WebDriver/Reference/Errors/InvalidSessionID)
  - : Sitzung existiert nicht.
- Kein solches Fenster
  - : Das [`window`](/de/docs/Web/API/Window) Objekt wurde verworfen, was darauf hinweist, dass die Registerkarte oder das Fenster geschlossen wurde.
- Timeout
  - : Die Navigation wurde nicht abgeschlossen, bevor das Timeout abgelaufen ist.

## Beispiele

### Vorwärts im Browserverlauf navigieren

Mit einem WebDriver-Server, der unter `localhost:4444` läuft, nehmen wir an, dass eine aktive Sitzung zu mindestens zwei Seiten navigiert und zurückgegangen ist. Um vorwärts zur nächsten Seite zu navigieren, verwenden Sie den `forward` Befehl und ersetzen Sie `ID` mit der `sessionId` aus der [Neue Sitzung](/de/docs/Web/WebDriver/Reference/Classic/Commands/NewSession) Antwort:

```bash
curl -i -H "Content-Type: application/json" -d '{}' http://localhost:4444/session/ID/forward
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

- [Zurück-Befehl](/de/docs/Web/WebDriver/Reference/Classic/Commands/Back)
- [Aktualisieren-Befehl](/de/docs/Web/WebDriver/Reference/Classic/Commands/Refresh)
