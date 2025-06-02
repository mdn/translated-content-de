---
title: Sichere Cookie-Konfiguration
slug: Web/Security/Practical_implementation_guides/Cookies
l10n:
  sourceCommit: 86fa532a00024e7c85a4c0d6339adce8b1bd9f61
---

Beschränken Sie den Zugriff auf Cookies so weit wie möglich.

## Problem

Cookies enthalten oft Sitzungskennungen oder andere sensible Informationen. Unbefugter Zugriff auf Cookies kann daher eine Vielzahl von Problemen verursachen, einschließlich [Datenschutz](/de/docs/Web/Privacy)-Problemen, ({{Glossary("Cross-site_scripting", "Cross-Site Scripting (XSS)")}}) Angriffen, Cross-Site Request Forgery ({{Glossary("CSRF", "CSRF")}}) Angriffen und mehr.

## Lösung

Um die Anfälligkeit von Cookies auf Ihrer Website zu minimieren, sollten Sie den Zugriff auf Cookies so weit wie möglich beschränken. Dies kann durch die sinnvolle Verwendung der folgenden Direktiven des [`Set-Cookie`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie) Headers erfolgen:

- `Name`
  - : Cookienamen sollten mit `__Secure-` oder `__Host-` beginnen, um zu verhindern, dass Cookies durch unsichere Quellen überschrieben werden.
    - Verwenden Sie `__Host-` für alle Cookies, die nur auf einer bestimmten Domain (keine Subdomains) benötigt werden, bei denen `Path` auf `/` gesetzt ist.
    - Verwenden Sie `__Secure-` für alle anderen Cookies, die von sicheren Ursprüngen ({{Glossary("HTTPS", "HTTPS")}}) gesendet werden.
- `Secure`
  - : Alle Cookies müssen mit der `Secure` Direktive gesetzt werden, die angibt, dass sie nur über HTTPS gesendet werden sollen. [HTTP Strict Transport Security](/de/docs/Web/Security/Practical_implementation_guides/TLS#http_strict_transport_security_implementation) (HSTS) kann auch verwendet werden, um Übertragungen über HTTP zu verhindern, idealerweise sollte jedoch `Secure` auch auf Cookies gesetzt werden.
- `HttpOnly`
  - : Cookies, die keinen Zugriff von JavaScript benötigen, sollten die `HttpOnly` Direktive gesetzt haben, um einen Zugriff zu blockieren, wie zum Beispiel von [`Document.cookie`](/de/docs/Web/API/Document/cookie). Es ist besonders wichtig, dass Sitzungskennungen keinen JavaScript-Zugriff haben, um Angriffe wie CSRF zu verhindern.
- `Expires` und `Max-Age`
  - : Cookies sollten ablaufen, sobald sie nicht mehr benötigt werden. Sitzungskennungen insbesondere sollten so schnell wie möglich ablaufen.
    - `Expires`: Setzt ein absolutes Ablaufdatum für ein bestimmtes Cookie.
    - `Max-Age`: Setzt ein relatives Ablaufdatum für ein bestimmtes Cookie.
      > **Hinweis:** `Expires` ist länger verfügbar als `Max-Age`; jedoch ist `Max-Age` weniger fehleranfällig und hat Vorrang, wenn beide gesetzt sind. Der Grund dafür ist, dass wenn Sie ein `Expires`-Datum und eine Uhrzeit einstellen, diese relativ zum Client sind, auf dem das Cookie gesetzt wird. Wenn der Server auf eine andere Zeit eingestellt ist, könnte dies zu Fehlern führen.
- `Domain`
  - : Cookies sollten nur einen `Domain`-Eintrag haben, wenn sie auf anderen Domains zugänglich sein müssen; dies sollte auf die restriktivste Domain möglich gesetzt werden.
- `Path`
  - : Cookies sollten auf den restriktivsten `Path` möglich gesetzt werden.
- `SameSite`

  - : Das Senden von Cookies über Cross-Origin-Anfragen untersagen (zum Beispiel von {{htmlelement("img")}} Elementen) unter Verwendung von `SameSite`. Sie sollten einen der folgenden beiden Werte verwenden:

    - `SameSite=Strict`: Senden Sie das Cookie nur in gleichseitigen Kontexten (Navigationen und andere Anfragen). Cookies werden bei Cross-Site-Anfragen (z. B. beim Einbetten von Bildern oder anderen Ressourcen von anderen Sites) und bei Cross-Site-Navigationen (z. B. beim Folgen eines Links von einer anderen Webseite) weggelassen. Dies ist eine sehr strikte Einstellung, bietet jedoch einen starken Schutz gegen [CSRF](/de/docs/Web/Security/Attacks/CSRF), daher sollten Sie diesen Wert, wenn möglich, verwenden.
    - `SameSite=Lax`: Senden Sie das Cookie bei gleichseitigen Anfragen und bei der Navigation _zu_ Ihrer Website. Dies sollte verwendet werden, wenn `Strict` zu restriktiv ist.

    Beide der obigen Werte sind nützlich, um gegen [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking)-Angriffe zu schützen, in Fällen, die darauf beruhen, dass der Benutzer authentifiziert ist.

    > [!NOTE]
    > In der Theorie sollte `SameSite=Strict` nützlicher sein, als es in der Praxis ist. Es bricht oft Navigationen — zum Beispiel scheinen Benutzer, die auf einen Link zu einer Website klicken, bei der sie bereits angemeldet sind (d.h. ein gültiges Session-Cookie ist gesetzt), nicht angemeldet zu sein, weil der Browser das Session-Cookie absichtlich weggelassen hat. Der beste Mittelweg ist die Verwendung von `SameSite=Strict` nur bei Tokens, bei denen CSRF ein Thema ist, oder die Verwendung von `SameSite=Strict` überall, aber erneutes Laden der Seite und ein Cookie-Check in JavaScript, wenn es Anzeichen dafür gibt, dass der Benutzer angemeldet ist, aber erforderliche Cookies nicht gesendet werden.

## Beispiele

Setzen Sie ein Sitzungskennungs-Cookie, das nur auf dem aktuellen Host zugänglich ist und abläuft, wenn der Benutzer seinen Browser schließt:

```http
Set-Cookie: MOZSESSIONID=980e5da39d4b472b9f504cac9; Path=/; Secure; HttpOnly
```

Verwenden Sie das `__Secure-` Präfix, um eine Sitzungskennung für alle `example.org` Seiten zu setzen, die nach 30 Tagen abläuft. Dieses Cookie wird nicht cross-origin gesendet, aber beim Navigieren zu einer beliebigen Site von einer anderen Site gesendet:

```http
Set-Cookie: __Secure-MOZSESSIONID=7307d70a86bd4ab5a00499762; Max-Age=2592000; Domain=example.org; Path=/; Secure; HttpOnly; SameSite=Lax
```

Setzen Sie ein langlebiges Cookie für den aktuellen Host, zugänglich durch JavaScript, wenn der Benutzer den Nutzungsbedingungen zustimmt. Dieses Cookie wird beim Navigieren zu Ihrer Site von einer anderen Site gesendet, beispielsweise durch Klicken auf einen Link:

```http
Set-Cookie: __Host-ACCEPTEDTOS=true; Expires=Fri, 31 Dec 9999 23:59:59 GMT; Path=/; Secure; SameSite=Lax
```

Verwenden Sie eine Sitzungskennung für eine sichere (HTTPS) Site. Es wird weder von Cross-Origin-Anfragen gesendet, noch beim Navigieren zu Ihrer Site von einer anderen Site. In Verbindung mit anderen Anti-CSRF-Maßnahmen bietet dies einen sehr starken Schutz Ihrer Site gegen CSRF-Angriffe:

```http
Set-Cookie: __Host-BMOSESSIONID=YnVnemlsbGE=; Max-Age=2592000; Path=/; Secure; HttpOnly; SameSite=Strict
```

## Siehe auch

- [Verwendung von HTTP-Cookies](/de/docs/Web/HTTP/Guides/Cookies)
- [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies)
- [`Document.cookie`: Sicherheit](/de/docs/Web/API/Document/cookie#security)
- [RFC 6265 (HTTP Cookies)](https://datatracker.ietf.org/doc/html/rfc6265) (2011)
