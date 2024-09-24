---
title: Verhinderung von Cross-Site Request Forgery (CSRF)
slug: Web/Security/Practical_implementation_guides/CSRF_prevention
l10n:
  sourceCommit: 857c6f9e7f1a847e7d3466b0d047159f7b345991
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}

Cross-Site Request Forgeries ([CSRF](/de/docs/Glossary/CSRF)) können durch `SameSite`-Cookies und Anti-CSRF-Tokens geschützt werden.

## Problem

CSRF ist eine Klasse von Angriffen, bei der unautorisierte Befehle von einem vertrauenswürdigen Benutzer an eine Website übermittelt werden. Da sie die Cookies des Benutzers (und somit Sitzungsinformationen) übernehmen, scheinen sie gültige Befehle zu sein. Ein CSRF-Angriff könnte folgendermaßen aussehen:

```html
<!-- Versuch, das Konto eines Benutzers zu löschen -->
<img src="https://accounts.example.org/management/delete?confirm=true" />
```

Wenn ein Benutzer eine Seite besucht, die das obige HTML enthält, wird der Browser versuchen, eine [`GET`](/de/docs/Web/HTTP/Methods/GET)-Anfrage an die Quell-URL zu senden. Wenn der Benutzer eingeloggt ist, stellt der Browser seine Sitzungs-Cookies bereit und der Löschversuch des Kontos wird erfolgreich sein.

## Lösung

Es gibt eine Vielzahl von Strategien zur Abschwächung von CSRF. Die gängigsten und transparentesten Methoden sind [`SameSite`](/de/docs/Web/HTTP/Cookies#controlling_third-party_cookies_with_samesite)-Cookies und Anti-CSRF-Tokens.

> [!NOTE]
> Eine Cross-Site Scripting ({{Glossary("Cross-site_scripting", "XSS")}}) Schwachstelle könnte jede von Ihnen implementierte CSRF-Schutztechnik überwinden. Stellen Sie sicher, dass Ihre Website gegen beide Arten von Angriffen gleichzeitig gehärtet ist. XSS kann durch Funktionen wie [Content Security Policy](/de/docs/Web/Security/Practical_implementation_guides/CSP) (CSP) abgewehrt werden.

### `SameSite`-Cookies

`SameSite`-Cookies erlauben es, anzugeben, dass der Browser Cookies nur als Antwort auf Anfragen senden soll, die von der Ursprungswebsite des Cookies stammen. Dies führt dazu, dass der CSRF-Angriff fehlschlägt, da die bösartigen Befehle keine Cookies mitgeschickt bekommen und somit nicht als der Benutzer authentifiziert werden können. Die verfügbaren Werte sind:

- `Strict`
  - : Veranlasst den Browser, das Cookie nur als Antwort auf Anfragen zu senden, die von der Ursprungswebsite des Cookies stammen.
- `Lax`
  - : Ähnlich wie `Strict`, außer dass der Browser das Cookie auch sendet, wenn der Benutzer zur Ursprungswebsite des Cookies navigiert (auch wenn der Benutzer von einer anderen Website kommt).
- `None`
  - : Gibt an, dass Cookies sowohl bei ursprungs- als auch bei seitenübergreifenden Anfragen gesendet werden.

Sie sollten das stärkste `SameSite`-Level einstellen, das auf Ihrer Website noch funktioniert. Idealerweise sollte `None` nie gesetzt werden, es sei denn, es ist wirklich nötig. Beachten Sie, dass `Lax` der Standardwert ist, wenn der Header nicht angegeben ist.

### Anti-CSRF-Tokens

Anti-CSRF-Tokens verhindern CSRF-Angriffe, indem sie das Vorhandensein eines geheimen, eindeutigen und unvorhersehbaren Tokens bei allen destruktiven Änderungen erfordern. Diese Tokens können für eine gesamte Benutzersitzung festgelegt, regelmäßig rotiert oder für jede Anfrage einzigartig erstellt werden.

Es wird empfohlen, beide Strategien für Websites zu verwenden, die destruktive Änderungen wie das Löschen eines Kontos zulassen. Anti-CSRF-Tokens sind möglicherweise für andere Websites unnötig, obwohl dennoch empfohlen wird, `SameSite` auf einen nicht-`None`-Wert zu setzen, um die [Privatsphäre](/de/docs/Web/Privacy) des Benutzers zu schützen.

Die meisten Anwendungs-Frameworks verfügen über integrierte CSRF-Tokenisierung zur Erleichterung der Implementierung. Stellen Sie sicher, dass Sie eines wählen, das dies bietet, und versuchen Sie nicht, das Rad neu zu erfinden.

## Beispiele

### Implementierung eines Anti-CSRF-Tokens zusammen mit `SameSite=Strict`

Ein geheimes Anti-CSRF-Token in ein Kontolöschformular einfügen:

```html
<input
  type="hidden"
  name="csrftoken"
  value="1df93e1eafa42012f9a8aff062eeb1db0380b" />
```

Serverseitig ein Anti-CSRF-Cookie setzen (JavaScript muss dies mit einem X-Header senden; es kann nicht seitenübergreifend gemacht werden):

```http
Set-Cookie: CSRFTOKEN=1df93e1eafa42012f9a8aff062eeb1db0380b; Path=/; Secure; SameSite=Strict
```

Auf der Client-Seite ein JavaScript verwenden, um das CSRF-Token als X-Header zu einer XMLHttpRequest hinzuzufügen:

```js
const token = readCookie(CSRFTOKEN); // das Cookie auslesen
httpRequest.setRequestHeader("X-CSRF-Token", token); // es als X-CSRF-Token-Header hinzufügen
```

## Siehe auch

- [Arten von Angriffen: Cross-site request forgery (CSRF)](/de/docs/Web/Security/Types_of_attacks#cross-site_request_forgery_csrf)
- [Wikipedia über CSRF-Angriffe und deren Verhinderung](https://en.wikipedia.org/wiki/Cross-site_request_forgery#Prevention)
- [OWASP CSRF Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html)
