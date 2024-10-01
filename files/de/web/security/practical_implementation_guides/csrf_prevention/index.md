---
title: Cross-site request forgery (CSRF) Prävention
slug: Web/Security/Practical_implementation_guides/CSRF_prevention
l10n:
  sourceCommit: 857c6f9e7f1a847e7d3466b0d047159f7b345991
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}

Cross-site request forgeries ({{Glossary("CSRF", "CSRF")}}) können durch `SameSite`-Cookies und Anti-CSRF-Tokens geschützt werden.

## Problem

CSRF sind eine Klasse von Angriffen, bei denen unautorisierte Befehle von einem vertrauenswürdigen Benutzer an eine Website übertragen werden. Da sie die Cookies des Benutzers (und damit die Sitzungsinformationen) erben, scheinen sie gültige Befehle zu sein. Ein CSRF-Angriff könnte so aussehen:

```html
<!-- Attempt to delete a user's account -->
<img src="https://accounts.example.org/management/delete?confirm=true" />
```

Wenn ein Benutzer eine Seite mit dem obigen HTML besucht, wird der Browser versuchen, eine [`GET`](/de/docs/Web/HTTP/Methods/GET)-Anfrage an die Quell-URL zu stellen. Wenn der Benutzer eingeloggt ist, wird der Browser seine Sitzungscookies bereitstellen, und der Versuch, das Konto zu löschen, wird erfolgreich sein.

## Lösung

Es gibt eine Vielzahl von CSRF-Abschwächungsstrategien. Die gebräuchlichsten und transparentesten Methoden zur CSRF-Abschwächung sind [`SameSite`](/de/docs/Web/HTTP/Cookies#controlling_third-party_cookies_with_samesite)-Cookies und Anti-CSRF-Tokens.

> [!NOTE]
> Eine Cross-Site Scripting ({{Glossary("Cross-site_scripting", "XSS")}}) Sicherheitslücke könnte jede CSRF-Abschwächungstechnik überwinden, die Sie implementieren. Stellen Sie sicher, dass Sie Ihre Website gegen beide Arten von Angriffen gleichzeitig absichern. XSS kann durch Funktionen wie [Content Security Policy](/de/docs/Web/Security/Practical_implementation_guides/CSP) (CSP) geschützt werden.

### `SameSite` Cookies

`SameSite`-Cookies erlauben es Ihnen, dem Browser anzugeben, dass er Cookies nur als Antwort auf Anfragen senden soll, die vom Ursprung der Cookies stammen, zum Beispiel. Dies führt dazu, dass der CSRF-Angriff fehlschlägt, da die bösartigen Befehle keine Cookies mitgesendet bekommen und sich daher nicht als Benutzer authentifizieren können. Die verfügbaren Werte sind:

- `Strict`
  - : Veranlasst den Browser, das Cookie nur als Antwort auf Anfragen zu senden, die vom Ursprung der Cookies stammen.
- `Lax`
  - : Ähnlich wie `Strict`, mit der Ausnahme, dass der Browser das Cookie auch sendet, wenn der Benutzer zur Ursprungsseite der Cookies navigiert (auch wenn er von einer anderen Seite kommt).
- `None`
  - : Gibt an, dass Cookies sowohl bei Ursprungs- als auch bei websiteübergreifenden Anfragen gesendet werden.

Sie sollten das stärkste `SameSite`-Niveau einstellen, das für Ihre Website noch funktioniert. Idealerweise sollten Sie `None` niemals setzen, es sei denn, es ist wirklich nötig. Beachten Sie, dass `Lax` der Standardwert ist, wenn der Header nicht angegeben wird.

### Anti-CSRF-Tokens

Anti-CSRF-Tokens verhindern CSRF-Angriffe, indem sie das Vorhandensein eines geheimen, eindeutigen und unvorhersehbaren Tokens bei allen destruktiven Änderungen erforderlich machen. Diese Tokens können für eine gesamte Benutzersitzung gesetzt, regelmäßig rotiert oder für jede Anfrage einzigartig erstellt werden.

Es wird empfohlen, beide Strategien für Websites zu verwenden, die destruktive Änderungen wie das Löschen von Konten zulassen. Anti-CSRF-Tokens sind für andere Websites möglicherweise nicht erforderlich, obwohl es dennoch empfohlen wird, `SameSite` auf einen Wert ungleich `None` zu setzen, um die [Privatsphäre](/de/docs/Web/Privacy) des Benutzers zu schützen.

Die meisten Anwendungsframeworks haben eine eingebaute CSRF-Tokenisierung, um die Implementierung zu erleichtern. Stellen Sie sicher, dass Sie ein solches wählen, und versuchen Sie nicht, das Rad neu zu erfinden.

## Beispiele

### Implementieren eines Anti-CSRF-Tokens zusammen mit `SameSite=Strict`

Integrieren Sie ein geheimes Anti-CSRF-Token in ein Formular zur Konto-Löschung:

```html
<input
  type="hidden"
  name="csrftoken"
  value="1df93e1eafa42012f9a8aff062eeb1db0380b" />
```

Serverseitig setzen Sie ein Anti-CSRF-Cookie (JavaScript muss dies mit einem X-Header senden; es kann nicht cross-origin erfolgen):

```http
Set-Cookie: CSRFTOKEN=1df93e1eafa42012f9a8aff062eeb1db0380b; Path=/; Secure; SameSite=Strict
```

Zurück auf der Clientseite verwenden Sie JavaScript, um das CSRF-Token als X-Header zu einer XMLHttpRequest hinzuzufügen:

```js
const token = readCookie(CSRFTOKEN); // read the cookie
httpRequest.setRequestHeader("X-CSRF-Token", token); // add it as an X-CSRF-Token header
```

## Siehe auch

- [Arten von Angriffen: Cross-site request forgery (CSRF)](/de/docs/Web/Security/Types_of_attacks#cross-site_request_forgery_csrf)
- [Wikipedia zu CSRF-Angriffen und Prävention](https://en.wikipedia.org/wiki/Cross-site_request_forgery#Prevention)
- [OWASP CSRF Prävention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html)
