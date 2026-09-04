---
title: Cookie hinzufügen
short-title: Cookie hinzufügen
slug: Web/WebDriver/Reference/Classic/Commands/AddCookie
l10n:
  sourceCommit: 336163f964fa8840c30e53571e284c74e9efecfa
---

Der _Add Cookie_ [Befehl](/de/docs/Web/WebDriver/Reference/Classic/Commands) der [WebDriver](/de/docs/Web/WebDriver) API fügt einen einzelnen Cookie zum Cookie-Speicher des aktiven Dokuments im aktuellen Browsing-Kontext hinzu. Dies entspricht im Wesentlichen dem Setzen von [`Document.cookie`](/de/docs/Web/API/Document/cookie) in JavaScript.

## Syntax

| Methode                                            | URI-Vorlage                    |
| -------------------------------------------------- | ------------------------------ |
| [`POST`](/de/docs/Web/HTTP/Reference/Methods/POST) | `/session/{session id}/cookie` |

### URL-Parameter

- `session id`
  - : Kennung der Sitzung.

### Nutzlast

Die Eingabe ist ein JSON-Objekt mit einem einzelnen `cookie`-Schlüssel, dessen Wert ein Cookie-Objekt mit den folgenden Feldern ist:

- `name`
  - : Der Name des Cookies.
- `value`
  - : Der Cookie-Wert.
- `path` {{optional_inline}}
  - : Der Cookie-Pfad. Standardmäßig `"/"`.
- `domain` {{optional_inline}}
  - : Die Domain, in der der Cookie sichtbar ist. Standardmäßig die Domain des aktuellen Browsing-Kontext-Dokuments.
- `secure` {{optional_inline}}
  - : Ob der Cookie ein sicherer Cookie ist. Standardmäßig `false`.
- `httpOnly` {{optional_inline}}
  - : Ob der Cookie ein HTTP-only-Cookie ist. Standardmäßig `false`.
- `expiry` {{optional_inline}}
  - : Die Ablauffrist des Cookies in Sekunden seit der Unix-Epoche. Dieser Wert muss eine Zahl im Bereich von 0 bis 2^53 − 1 sein. Wenn weggelassen, wird der Cookie als Sitzungscookie behandelt.
- `sameSite` {{optional_inline}}
  - : Die [Same-Site-Policy](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) des Cookies. Mögliche Werte sind `"Lax"`, `"Strict"` und `"None"`. Standardmäßig `"None"`, wenn weggelassen.

### Rückgabewert

`null`, wenn erfolgreich.

### Fehler

- [`Ungültiges Argument`](/de/docs/Web/WebDriver/Reference/Errors/InvalidArgument)
  - : Das `cookie`-Objekt fehlt, ist kein JSON-Objekt, es fehlt ein erforderliches Feld oder eines seiner Felder erfüllt die Typ- oder Wertbeschränkungen nicht.
- [`Ungültige Cookie-Domain`](/de/docs/Web/WebDriver/Reference/Errors/InvalidCookieDomain)
  - : Versuch, einen Cookie auf einer anderen Domain als der Domain des aktuellen Browsing-Kontext-Dokuments zu setzen.
- `Kein solches Fenster`
  - : Das [`window`](/de/docs/Web/API/Window)-Objekt wurde verworfen, was darauf hinweist, dass die Registerkarte oder das Fenster geschlossen wurde.
- `Cookie konnte nicht gesetzt werden`
  - : Das Remote-Ende konnte den Cookie nicht zum Cookie-Speicher hinzufügen.
- `Unerwartetes geöffnetes Alert`
  - : Eine Benutzeraufforderung, wie [`window.alert`](/de/docs/Web/API/Window/alert), blockiert die Ausführung des Befehls, bis sie behandelt wird.
- [`Ungültige Sitzungs-ID`](/de/docs/Web/WebDriver/Reference/Errors/InvalidSessionID)
  - : Die angegebene Sitzung existiert nicht.

## Beispiele

### Hinzufügen eines Cookies

Mit einem WebDriver-Server, der unter `localhost:4444` läuft, wird angenommen, dass eine aktive Sitzung nach `https://example.org` navigiert ist. Um einen Cookie hinzuzufügen, senden Sie das Cookie-Objekt als Anfrage-Nutzlast, wobei Sie `ID` durch die `sessionId` aus der [Neue Sitzung](/de/docs/Web/WebDriver/Reference/Classic/Commands/NewSession)-Antwort ersetzen:

```bash
curl -i -H "Content-Type: application/json" \
  -d '{"cookie": {"name": "session_token", "value": "abc123", "secure": true, "sameSite": "Strict"}}' \
  http://localhost:4444/session/ID/cookie
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

- [Alle Cookies abrufen](/de/docs/Web/WebDriver/Reference/Classic/Commands/GetAllCookies)
- [Benannten Cookie abrufen](/de/docs/Web/WebDriver/Reference/Classic/Commands/GetNamedCookie)
- [Cookie löschen](/de/docs/Web/WebDriver/Reference/Classic/Commands/DeleteCookie)
- [Alle Cookies löschen](/de/docs/Web/WebDriver/Reference/Classic/Commands/DeleteAllCookies)
