---
title: Cross-Site-Request-Forgery (CSRF) Prävention
slug: Web/Security/Practical_implementation_guides/CSRF_prevention
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}

Cross-Site-Request-Forgery ({{Glossary("CSRF", "CSRF")}}) kann durch `SameSite`-Cookies und Anti-CSRF-Tokens geschützt werden.

## Problem

CSRF ist eine Klasse von Angriffen, bei denen unautorisierte Befehle von einem vertrauenswürdigen Benutzer an eine Website übertragen werden. Da sie die Cookies des Benutzers (und somit Sitzungsinformationen) erben, erscheinen sie als gültige Befehle. Ein CSRF-Angriff könnte folgendermaßen aussehen:

```html
<!-- Attempt to delete a user's account -->
<img src="https://accounts.example.org/management/delete?confirm=true" />
```

Wenn ein Benutzer eine Seite mit dem obigen HTML besucht, wird der Browser versuchen, eine [`GET`](/de/docs/Web/HTTP/Reference/Methods/GET)-Anfrage an die Quell-URL zu stellen. Wenn der Benutzer angemeldet ist, stellt der Browser seine Sitzungs-Cookies bereit, und der Kontolöschungsversuch wird erfolgreich sein.

## Lösung

Es gibt eine Vielzahl von CSRF-Abschwächungsstrategien. Die gängigsten und transparentesten Methoden zur CSRF-Abschwächung sind [`SameSite`](/de/docs/Web/HTTP/Guides/Cookies#controlling_third-party_cookies_with_samesite)-Cookies und Anti-CSRF-Tokens.

> [!NOTE]
> Eine Cross-Site-Scripting ({{Glossary("Cross-site_scripting", "XSS")}}) Schwachstelle könnte alle CSRF-Abschwächungstechniken, die Sie implementiert haben, umgehen. Stellen Sie sicher, dass Ihre Website gegen beide Angriffsarten gleichzeitig gehärtet ist. XSS kann durch Funktionen wie [Content Security Policy](/de/docs/Web/Security/Practical_implementation_guides/CSP) (CSP) geschützt werden.

### `SameSite`-Cookies

`SameSite`-Cookies ermöglichen es Ihnen, anzugeben, dass Sie möchten, dass der Browser Cookies nur als Reaktion auf Anfragen sendet, die von der Ursprungsseite des Cookies stammen, zum Beispiel. Dies lässt den CSRF-Angriff fehlschlagen, da die bösartigen Befehle ohne Cookies gesendet werden und sich daher nicht als der Benutzer authentifizieren können. Die verfügbaren Werte sind:

- `Strict`
  - : Veranlasst den Browser, das Cookie nur als Reaktion auf Anfragen der Ursprungsseite des Cookies zu senden.
- `Lax`
  - : Ähnlich wie `Strict`, außer dass der Browser das Cookie auch sendet, wenn der Benutzer zur Ursprungsseite des Cookies navigiert (auch wenn der Benutzer von einer anderen Seite kommt).
- `None`
  - : Gibt an, dass Cookies bei sowohl ursprungs- als auch websiteübergreifenden Anfragen gesendet werden.

Sie sollten das stärkste `SameSite`-Level festlegen, das Ihre Seite zum Funktionieren benötigt. Setzen Sie idealerweise niemals `None`, es sei denn, es ist wirklich erforderlich. Beachten Sie, dass `Lax` der Standardwert ist, wenn der Header nicht angegeben ist.

### Anti-CSRF-Tokens

Anti-CSRF-Tokens verhindern CSRF-Angriffe, indem sie auf allen destruktiven Änderungen das Vorhandensein eines geheimen, einzigartigen und unvorhersehbaren Tokens erfordern. Diese Tokens können für eine gesamte Benutzersitzung festgelegt, regelmäßig rotiert oder für jede Anfrage einzeln erstellt werden.

Es wird empfohlen, beide Strategien für Websites zu verwenden, die destruktive Änderungen wie Kontolöschung zulassen. Anti-CSRF-Tokens sind für andere Websites wohl unnötig, obwohl es dennoch ratsam ist, `SameSite` auf einen Nicht-`None`-Wert zu setzen, um die [Privatsphäre](/de/docs/Web/Privacy) des Benutzers zu schützen.

Die meisten Anwendungsframeworks haben eine eingebaute CSRF-Tokenisierung, um die Implementierung zu erleichtern. Stellen Sie sicher, dass Sie eines wählen, das dies bietet, und versuchen Sie nicht, das Rad neu zu erfinden.

## Beispiele

### Implementierung eines Anti-CSRF-Tokens zusammen mit `SameSite=Strict`

Integrieren Sie ein geheimes Anti-CSRF-Token in ein Kontolöschungsformular:

```html
<input
  type="hidden"
  name="csrftoken"
  value="1df93e1eafa42012f9a8aff062eeb1db0380b" />
```

Auf der Serverseite setzen Sie ein Anti-CSRF-Cookie (JavaScript muss dies mit einem X-Header senden; es kann nicht websiteübergreifend erfolgen):

```http
Set-Cookie: CSRFTOKEN=1df93e1eafa42012f9a8aff062eeb1db0380b; Path=/; Secure; SameSite=Strict
```

Zurück auf der Clientseite verwenden Sie JavaScript, um das CSRF-Token als X-Header zu einer XMLHttpRequest hinzuzufügen:

```js
const token = readCookie(CSRFTOKEN); // read the cookie
httpRequest.setRequestHeader("X-CSRF-Token", token); // add it as an X-CSRF-Token header
```

## Siehe auch

- [Angriffsarten: Cross-Site-Request-Forgery (CSRF)](/de/docs/Web/Security/Types_of_attacks#cross-site_request_forgery_csrf)
- [Wikipedia über CSRF-Angriffe und Prävention](https://en.wikipedia.org/wiki/Cross-site_request_forgery#Prevention)
- [OWASP CSRF Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html)
