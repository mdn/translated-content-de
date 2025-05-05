---
title: Verhinderung von Cross-Site Request Forgery (CSRF)
short-title: Cross-Site Request Forgery (CSRF)
slug: Web/Security/Practical_implementation_guides/CSRF_prevention
l10n:
  sourceCommit: ade8d870ed7e18a71dc51fe25aa13d812fb82558
---

Cross-Site Request Forgery ({{Glossary("CSRF", "CSRF")}}) kann durch `SameSite`-Cookies und Anti-CSRF-Tokens geschützt werden.

## Problem

CSRF ist eine Klasse von Angriffen, bei denen unbefugte Befehle von einem vertrauenswürdigen Benutzer an eine Website übermittelt werden. Da sie die Cookies (und damit die Sitzungsinformationen) des Benutzers erben, scheinen sie gültige Befehle zu sein. Ein CSRF-Angriff könnte so aussehen:

```html
<!-- Attempt to delete a user's account -->
<img src="https://accounts.example.org/management/delete?confirm=true" />
```

Wenn ein Benutzer eine Seite mit obigem HTML besucht, wird der Browser versuchen, eine [`GET`](/de/docs/Web/HTTP/Reference/Methods/GET)-Anfrage an die Quell-URL zu senden. Ist der Benutzer eingeloggt, wird der Browser deren Sitzungs-Cookies bereitstellen und der Versuch der Kontolöschung wird erfolgreich sein.

## Lösung

Es gibt eine Vielzahl von Strategien zur Abschwächung von CSRF. Die gebräuchlichsten und transparentesten Methoden sind [`SameSite`](/de/docs/Web/HTTP/Guides/Cookies#controlling_third-party_cookies_with_samesite)-Cookies und Anti-CSRF-Tokens.

> [!NOTE]
> Eine Cross-Site-Scripting ({{Glossary("Cross-site_scripting", "XSS")}})-Schwachstelle könnte alle von Ihnen implementierten CSRF-Minderungstechniken überwinden. Stellen Sie sicher, dass Ihre Seite gegen beide Arten von Angriffen gehärtet ist. XSS kann durch Nutzung von Funktionen wie der [Content Security Policy](/de/docs/Web/Security/Practical_implementation_guides/CSP) (CSP) geschützt werden.

### `SameSite`-Cookies

`SameSite`-Cookies erlauben es Ihnen zu spezifizieren, dass der Browser Cookies nur als Antwort auf Anfragen sendet, die von der Ursprungsseite des Cookies stammen. Dies lässt den CSRF-Angriff fehlschlagen, da die bösartigen Befehle keine Cookies mit sich führen und somit nicht als Benutzer authentifiziert werden können. Die verfügbaren Werte sind:

- `Strict`
  - : Veranlasst den Browser, das Cookie nur als Antwort auf Anfragen zu senden, die vom Ursprungsort des Cookies stammen.
- `Lax`
  - : Ähnlich wie `Strict`, außer dass der Browser das Cookie auch sendet, wenn der Benutzer zur Ursprungsseite des Cookies navigiert (selbst wenn der Benutzer von einer anderen Seite kommt).
- `None`
  - : Spezifiziert, dass Cookies sowohl bei Ursprungs- als auch bei Cross-Site-Anfragen gesendet werden.

Sie sollten das stärkste `SameSite`-Level einstellen, das für Ihre Seite noch funktioniert. Idealerweise nie `None` einstellen, es sei denn, es ist unbedingt notwendig. Beachten Sie, dass `Lax` der Standardwert ist, wenn der Header nicht spezifiziert ist.

### Anti-CSRF-Tokens

Anti-CSRF-Tokens verhindern CSRF-Angriffe, indem sie das Vorhandensein eines geheimen, einzigartigen und unvorhersehbaren Tokens bei allen destruktiven Änderungen erfordern. Diese Tokens können für eine gesamte Benutzersitzung festgelegt, regelmäßig rotiert oder für jede Anfrage einzigartig erstellt werden.

Es wird geraten, beide Strategien für Websites zu verwenden, die destruktive Änderungen wie die Kontolöschung zulassen. Anti-CSRF-Tokens sind für andere Seiten möglicherweise unnötig, obwohl es dennoch ratsam ist, `SameSite` auf einen nicht-`None`-Wert einzustellen, um die [Privatsphäre](/de/docs/Web/Privacy) des Benutzers zu schützen.

Die meisten Anwendungs-Frameworks haben eine eingebaute CSRF-Tokenisierung zur Erleichterung der Implementierung. Stellen Sie sicher, dass Sie eines wählen, das dies tut, und versuchen Sie nicht, das Rad neu zu erfinden.

## Beispiele

### Implementieren eines Anti-CSRF-Tokens zusammen mit `SameSite=Strict`

Integrieren Sie ein geheimes Anti-CSRF-Token in ein Kontolöschformular:

```html
<input
  type="hidden"
  name="csrftoken"
  value="1df93e1eafa42012f9a8aff062eeb1db0380b" />
```

Auf der Serverseite setzen Sie ein Anti-CSRF-Cookie (JavaScript muss dies mit einem X-Header senden; es kann nicht von einer Fremdquelle gesendet werden):

```http
Set-Cookie: CSRFTOKEN=1df93e1eafa42012f9a8aff062eeb1db0380b; Path=/; Secure; SameSite=Strict
```

Auf der Klientenseite fügen Sie das CSRF-Token mit JavaScript als X-Header zu einer XMLHttpRequest hinzu:

```js
const token = readCookie(CSRFTOKEN); // read the cookie
httpRequest.setRequestHeader("X-CSRF-Token", token); // add it as an X-CSRF-Token header
```

## Siehe auch

- [Arten von Angriffen: Cross-Site Request Forgery (CSRF)](/de/docs/Web/Security/Types_of_attacks#cross-site_request_forgery_csrf)
- [Wikipedia über CSRF-Angriffe und Prävention](https://en.wikipedia.org/wiki/Cross-site_request_forgery#Prevention)
- [OWASP CSRF Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html)
