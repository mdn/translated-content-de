---
title: Named Cookie Abrufen
short-title: Named Cookie Abrufen
slug: Web/WebDriver/Reference/Classic/Commands/GetNamedCookie
l10n:
  sourceCommit: 336163f964fa8840c30e53571e284c74e9efecfa
---

Der _Named Cookie Abrufen_ [Befehl](/de/docs/Web/WebDriver/Reference/Classic/Commands) der [WebDriver](/de/docs/Web/WebDriver) API gibt das Cookie mit dem angegebenen Namen zurück, das mit dem aktiven Dokument des aktuellen Browsing-Kontexts verknüpft ist.

## Syntax

| Methode                                          | URI-Vorlage                           |
| ------------------------------------------------ | ------------------------------------- |
| [`GET`](/de/docs/Web/HTTP/Reference/Methods/GET) | `/session/{session id}/cookie/{name}` |

### URL-Parameter

- `session id`
  - : Identifikator der Sitzung.
- `name`
  - : Der Name des abzurufenden Cookies.

### Rückgabewert

Ein einzelnes Cookie-Objekt mit den folgenden Feldern:

- `name`
  - : Der Name des Cookies.
- `value`
  - : Der Wert des Cookies.
- `path`
  - : Der Pfad des Cookies.
- `domain`
  - : Die Domain, für die das Cookie sichtbar ist.
- `secure`
  - : Ob das Cookie ein sicheres Cookie ist.
- `httpOnly`
  - : Ob das Cookie ein HTTP-only Cookie ist.
- `expiry`
  - : Die Ablaufzeit des Cookies in Sekunden seit dem Unix-Epoch. Für Sitzungs-Cookies weggelassen.
- `sameSite`
  - : Die [same-site policy](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) des Cookies. Mögliche Werte sind `"Lax"`, `"Strict"` und `"None"`. Standardmäßig `"None"`, wenn weggelassen.

### Fehler

- `No such cookie`
  - : Es wurde kein Cookie mit dem angegebenen `name` unter den zugehörigen Cookies des aktiven Dokuments des aktuellen Browsing-Kontexts gefunden.
- `No such window`
  - : Das [`window`](/de/docs/Web/API/Window)-Objekt wurde verworfen, was darauf hinweist, dass die Registerkarte oder das Fenster geschlossen wurde.
- `Unexpected alert open`
  - : Eine Benutzeraufforderung, wie [`window.alert`](/de/docs/Web/API/Window/alert), blockiert die Ausführung des Befehls, bis sie behandelt wird.
- [`Invalid session id`](/de/docs/Web/WebDriver/Reference/Errors/InvalidSessionID)
  - : Die angegebene Sitzung existiert nicht.

## Beispiele

### Cookie nach Name abrufen

Mit einem WebDriver-Server, der auf `localhost:4444` läuft, nehmen Sie an, dass eine aktive Sitzung zu einer Seite navigiert ist, die ein `session_token` Cookie gesetzt hat. Um es abzurufen, hängen Sie den Cookienamen an den Endpunkt an und ersetzen Sie `ID` mit der `sessionId` aus der [New Session](/de/docs/Web/WebDriver/Reference/Classic/Commands/NewSession) Antwort:

```bash
curl -i http://localhost:4444/session/ID/cookie/session_token
```

Der Server antwortet mit dem übereinstimmenden Cookie-Objekt:

```http
HTTP/1.1 200 OK
content-type: application/json; charset=utf-8

{"value":{"name":"session_token","value":"abc123","path":"/","domain":"example.org","secure":true,"httpOnly":false,"sameSite":"Strict"}}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Alle Cookies Abrufen](/de/docs/Web/WebDriver/Reference/Classic/Commands/GetAllCookies)
- [Cookie Hinzufügen](/de/docs/Web/WebDriver/Reference/Classic/Commands/AddCookie)
- [Cookie Löschen](/de/docs/Web/WebDriver/Reference/Classic/Commands/DeleteCookie)
- [Alle Cookies Löschen](/de/docs/Web/WebDriver/Reference/Classic/Commands/DeleteAllCookies)
