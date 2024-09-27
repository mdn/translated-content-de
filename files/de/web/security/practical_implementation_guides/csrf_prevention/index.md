---
title: Cross-site request forgery (CSRF) Vermeidung
slug: Web/Security/Practical_implementation_guides/CSRF_prevention
l10n:
  sourceCommit: 857c6f9e7f1a847e7d3466b0d047159f7b345991
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}

Cross-site request forgeries ([CSRF](/de/docs/Glossary/CSRF)) können durch `SameSite`-Cookies und Anti-CSRF-Tokens geschützt werden.

## Problem

CSRF sind eine Klasse von Angriffen, bei denen unbefugte Befehle von einem vertrauenswürdigen Benutzer an eine Website übertragen werden. Da sie die Cookies des Benutzers (und damit Sitzungsinformationen) erben, scheinen es gültige Befehle zu sein. Ein CSRF-Angriff könnte so aussehen:

```html
<!-- Attempt to delete a user's account -->
<img src="https://accounts.example.org/management/delete?confirm=true" />
```

Wenn ein Benutzer eine Seite mit dem obigen HTML besucht, wird der Browser versuchen, eine [`GET`](/de/docs/Web/HTTP/Methods/GET)-Anfrage an die Quell-URL zu senden. Wenn der Benutzer angemeldet ist, wird der Browser seine Sitzungs-Cookies bereitstellen und der Versuch zur Konto-Löschung wird erfolgreich sein.

## Lösung

Es gibt verschiedene CSRF-Abschwächungsstrategien. Die häufigsten und transparentesten Methoden zur CSRF-Abschwächung sind [`SameSite`](/de/docs/Web/HTTP/Cookies#controlling_third-party_cookies_with_samesite)-Cookies und Anti-CSRF-Tokens.

> [!NOTE]
> Eine Schwachstelle durch Cross-Site Scripting ([XSS](/de/docs/Glossary/Cross-site_scripting)) könnte jede CSRF-Abschwächungstechnik, die Sie implementieren, überwinden. Stellen Sie sicher, dass Sie Ihre Seite gegen beide Angriffsarten parallel verhärten. Gegen XSS kann durch Merkmale wie [Content Security Policy](/de/docs/Web/Security/Practical_implementation_guides/CSP) (CSP) geschützt werden.

### `SameSite`-Cookies

`SameSite`-Cookies ermöglichen es Ihnen, anzugeben, dass Sie möchten, dass der Browser Cookies nur als Antwort auf Anfragen sendet, die von der Ursprungsseite des Cookies stammen, zum Beispiel. Dadurch schlägt der CSRF-Angriff fehl, da die bösartigen Befehle keine Cookies mit sich führen und sich daher nicht als der Benutzer authentifizieren können. Die verfügbaren Werte sind:

- `Strict`
  - : Verursacht, dass der Browser das Cookie nur als Antwort auf Anfragen sendet, die von der Ursprungsseite des Cookies stammen.
- `Lax`
  - : Ähnlich wie `Strict`, außer dass der Browser das Cookie auch sendet, wenn der Benutzer zur Ursprungsseite des Cookies navigiert (selbst wenn der Benutzer von einer anderen Seite kommt).
- `None`
  - : Gibt an, dass Cookies sowohl bei originierenden als auch bei cross-site Anfragen gesendet werden.

Sie sollten das stärkste `SameSite`-Niveau einstellen, das Sie verwenden können, um Ihre Seite funktionsfähig zu halten. Idealerweise setzen Sie `None` nie, es sei denn, Sie benötigen es wirklich. Beachten Sie, dass `Lax` der Standardwert ist, wenn der Header nicht angegeben ist.

### Anti-CSRF-Tokens

Anti-CSRF-Tokens verhindern CSRF-Angriffe, indem sie die Existenz eines geheimen, einzigartigen und unvorhersehbaren Tokens bei allen zerstörerischen Änderungen erfordern. Diese Tokens können für eine gesamte Benutzersitzung festgelegt, regelmäßig rotiert oder für jede Anfrage einzigartig erstellt werden.

Es wird empfohlen, beide Strategien für Websites zu verwenden, die zerstörerische Änderungen wie die Löschung von Konten erlauben. Anti-CSRF-Tokens sind für andere Sites möglicherweise unnötig, obwohl es dennoch ratsam ist, `SameSite` auf einen Wert ungleich `None` zu setzen, um die [Privatsphäre](/de/docs/Web/Privacy) des Benutzers zu schützen.

Die meisten Anwendungs-Frameworks verfügen über eingebaute CSRF-Tokenisierung zur Erleichterung der Implementierung. Stellen Sie sicher, dass Sie eines wählen, das dies hat, und versuchen Sie nicht, das Rad neu zu erfinden.

## Beispiele

### Implementieren eines Anti-CSRF-Tokens zusammen mit `SameSite=Strict`

In ein Konto-Löschformular ein geheimes Anti-CSRF-Token einfügen:

```html
<input
  type="hidden"
  name="csrftoken"
  value="1df93e1eafa42012f9a8aff062eeb1db0380b" />
```

Auf Serverseite ein Anti-CSRF-Cookie setzen (JavaScript muss dies als X-Header senden; es kann nicht cross-origin durchgeführt werden):

```http
Set-Cookie: CSRFTOKEN=1df93e1eafa42012f9a8aff062eeb1db0380b; Path=/; Secure; SameSite=Strict
```

Zurück auf der Clientseite JavaScript verwenden, um das CSRF-Token als X-Header zu einer XMLHttpRequest hinzuzufügen:

```js
const token = readCookie(CSRFTOKEN); // read the cookie
httpRequest.setRequestHeader("X-CSRF-Token", token); // add it as an X-CSRF-Token header
```

## Siehe auch

- [Typen von Angriffen: Cross-site request forgery (CSRF)](/de/docs/Web/Security/Types_of_attacks#cross-site_request_forgery_csrf)
- [Wikipedia zu CSRF-Angriffen und Vermeidung](https://en.wikipedia.org/wiki/Cross-site_request_forgery#Prevention)
- [OWASP CSRF Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html)
