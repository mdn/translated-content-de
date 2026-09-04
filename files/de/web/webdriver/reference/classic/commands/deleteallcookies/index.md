---
title: Alle Cookies löschen
short-title: Alle Cookies löschen
slug: Web/WebDriver/Reference/Classic/Commands/DeleteAllCookies
l10n:
  sourceCommit: 336163f964fa8840c30e53571e284c74e9efecfa
---

Der _Delete All Cookies_-[Befehl](/de/docs/Web/WebDriver/Reference/Classic/Commands) der [WebDriver](/de/docs/Web/WebDriver) API löscht alle Cookies, die mit dem aktiven Dokument des aktuellen Browsing-Kontextes verknüpft sind.

## Syntax

| Methode                                                | URI-Vorlage                    |
| ------------------------------------------------------ | ------------------------------ |
| [`DELETE`](/de/docs/Web/HTTP/Reference/Methods/DELETE) | `/session/{session id}/cookie` |

### URL-Parameter

- `session id`
  - : Kennzeichen der Sitzung.

### Rückgabewert

`null` bei Erfolg.

### Fehler

- `No such window`
  - : Das [`window`](/de/docs/Web/API/Window)-Objekt wurde verworfen, was bedeutet, dass der Tab oder das Fenster geschlossen wurde.
- `Unexpected alert open`
  - : Eine Benutzereingabeaufforderung, wie [`window.alert`](/de/docs/Web/API/Window/alert), blockiert die Ausführung des Befehls, bis sie bearbeitet wird.
- [`Invalid session id`](/de/docs/Web/WebDriver/Reference/Errors/InvalidSessionID)
  - : Die angegebene Sitzung existiert nicht.

## Beispiele

### Alle Cookies löschen

Angenommen, es läuft ein WebDriver-Server auf `localhost:4444` und es gibt eine aktive Sitzung mit einem oder mehreren gesetzten Cookies. Um alle zu löschen, verwenden Sie den folgenden Befehl und ersetzen Sie `ID` mit der `sessionId` aus der [Neue Sitzung](/de/docs/Web/WebDriver/Reference/Classic/Commands/NewSession)-Antwort:

```bash
curl -i -X DELETE http://localhost:4444/session/ID/cookie
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

- [Cookie löschen](/de/docs/Web/WebDriver/Reference/Classic/Commands/DeleteCookie)
- [Cookie hinzufügen](/de/docs/Web/WebDriver/Reference/Classic/Commands/AddCookie)
- [Alle Cookies abrufen](/de/docs/Web/WebDriver/Reference/Classic/Commands/GetAllCookies)
- [Benanntes Cookie abrufen](/de/docs/Web/WebDriver/Reference/Classic/Commands/GetNamedCookie)
