---
title: Alle Cookies abrufen
short-title: Alle Cookies abrufen
slug: Web/WebDriver/Reference/Classic/Commands/GetAllCookies
l10n:
  sourceCommit: 336163f964fa8840c30e53571e284c74e9efecfa
---

Der _Alle Cookies abrufen_ [Befehl](/de/docs/Web/WebDriver/Reference/Classic/Commands) der [WebDriver](/de/docs/Web/WebDriver) API gibt alle Cookies zurück, die mit dem aktiven Dokument des aktuellen Browsing-Kontexts verknüpft sind. Dies entspricht weitgehend dem Lesen von [`Document.cookie`](/de/docs/Web/API/Document/cookie) in JavaScript, aber es werden strukturierte Cookie-Objekte anstelle eines Strings zurückgegeben.

## Syntax

| Methode                                          | URI-Vorlage                    |
| ------------------------------------------------ | ------------------------------ |
| [`GET`](/de/docs/Web/HTTP/Reference/Methods/GET) | `/session/{session id}/cookie` |

### URL-Parameter

- `session id`
  - : Kennung der Sitzung.

### Rückgabewert

Ein Array von Cookie-Objekten. Jedes Cookie-Objekt enthält die folgenden Felder:

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
  - : Ob das Cookie ein HTTP-Only-Cookie ist.
- `expiry`
  - : Die Ablaufzeit des Cookies in Sekunden seit der Unix-Epoche. Für Sitzungscookies weggelassen.
- `sameSite`
  - : Die [Same-Site-Richtlinie](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) des Cookies. Mögliche Werte sind `"Lax"`, `"Strict"` und `"None"`. Der Standardwert ist `"None"`, wenn weggelassen.

### Fehler

- `No such window`
  - : Das [`window`](/de/docs/Web/API/Window)-Objekt wurde verworfen, was darauf hindeutet, dass der Tab oder das Fenster geschlossen wurde.
- `Unexpected alert open`
  - : Eine Benutzeraufforderung, wie z.B. [`window.alert`](/de/docs/Web/API/Window/alert), blockiert die Ausführung des Befehls, bis sie bearbeitet wird.
- [`Invalid session id`](/de/docs/Web/WebDriver/Reference/Errors/InvalidSessionID)
  - : Die angegebene Sitzung existiert nicht.

## Beispiele

### Alle Cookies abrufen

Angenommen, ein WebDriver-Server läuft auf `localhost:4444` und eine aktive Sitzung hat eine Seite geöffnet, die ein oder mehrere Cookies gesetzt hat. Um diese abzurufen, verwenden Sie den folgenden Befehl, wobei Sie `ID` durch die `sessionId` aus der [Neue Sitzung](/de/docs/Web/WebDriver/Reference/Classic/Commands/NewSession)-Antwort ersetzen:

```bash
curl -i http://localhost:4444/session/ID/cookie
```

Der Server antwortet mit einem Array von Cookie-Objekten:

```http
HTTP/1.1 200 OK
content-type: application/json; charset=utf-8

{"value":[{"name":"session_token","value":"abc123","path":"/","domain":"example.org","secure":true,"httpOnly":false,"sameSite":"Strict"}]}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Benanntes Cookie abrufen](/de/docs/Web/WebDriver/Reference/Classic/Commands/GetNamedCookie)
- [Cookie hinzufügen](/de/docs/Web/WebDriver/Reference/Classic/Commands/AddCookie)
- [Cookie löschen](/de/docs/Web/WebDriver/Reference/Classic/Commands/DeleteCookie)
- [Alle Cookies löschen](/de/docs/Web/WebDriver/Reference/Classic/Commands/DeleteAllCookies)
