---
title: Cookie löschen
short-title: Cookie löschen
slug: Web/WebDriver/Reference/Classic/Commands/DeleteCookie
l10n:
  sourceCommit: 336163f964fa8840c30e53571e284c74e9efecfa
---

Der _Cookie löschen_ [Befehl](/de/docs/Web/WebDriver/Reference/Classic/Commands) der [WebDriver](/de/docs/Web/WebDriver) API entfernt das Cookie mit dem angegebenen Namen aus dem Cookie-Store, der mit dem aktiven Dokument des aktuellen Browsing-Kontextes verbunden ist.

## Syntax

| Methode                                                | URI-Vorlage                           |
| ------------------------------------------------------ | ------------------------------------- |
| [`DELETE`](/de/docs/Web/HTTP/Reference/Methods/DELETE) | `/session/{session id}/cookie/{name}` |

### URL-Parameter

- `session id`
  - : Bezeichner der Sitzung.
- `name`
  - : Der Name des zu löschenden Cookies.

### Rückgabewert

`null` bei Erfolg. Der Befehl ist erfolgreich, selbst wenn kein Cookie mit dem angegebenen Namen existiert.

### Fehler

- `No such window`
  - : Das [`window`](/de/docs/Web/API/Window)-Objekt wurde verworfen, was darauf hinweist, dass die Registerkarte oder das Fenster geschlossen wurde.
- `Unexpected alert open`
  - : Eine Benutzeraufforderung, wie [`window.alert`](/de/docs/Web/API/Window/alert), blockiert die Ausführung des Befehls, bis sie verarbeitet wird.
- [`Invalid session id`](/de/docs/Web/WebDriver/Reference/Errors/InvalidSessionID)
  - : Die angegebene Sitzung existiert nicht.

## Beispiele

### Ein Cookie nach Namen löschen

Mit einem auf `localhost:4444` laufenden WebDriver-Server, bei dem angenommen wird, dass eine aktive Sitzung ein `session_token` Cookie gesetzt hat. Um es zu löschen, fügen Sie den Cookie-Namen an den Endpunkt an und ersetzen `ID` durch das `sessionId` aus der [New Session](/de/docs/Web/WebDriver/Reference/Classic/Commands/NewSession) Antwort:

```bash
curl -i -X DELETE http://localhost:4444/session/ID/cookie/session_token
```

Der Server antwortet mit einem Null-Wert, um den Erfolg anzuzeigen:

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

- [Alle Cookies löschen](/de/docs/Web/WebDriver/Reference/Classic/Commands/DeleteAllCookies)
- [Cookie hinzufügen](/de/docs/Web/WebDriver/Reference/Classic/Commands/AddCookie)
- [Alle Cookies abrufen](/de/docs/Web/WebDriver/Reference/Classic/Commands/GetAllCookies)
- [Benanntes Cookie abrufen](/de/docs/Web/WebDriver/Reference/Classic/Commands/GetNamedCookie)
