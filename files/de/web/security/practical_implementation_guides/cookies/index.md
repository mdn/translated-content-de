---
title: Sichere Cookie-Konfiguration
slug: Web/Security/Practical_implementation_guides/Cookies
l10n:
  sourceCommit: be3f184d89979d413204b8f9cbecfc8dd0e5ecf9
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}

Beschränken Sie den Zugriff auf Cookies so weit wie möglich.

## Problem

Cookies enthalten oft Sitzungskennungen oder andere sensible Informationen. Unbefugter Zugriff auf Cookies kann daher eine Vielzahl von Problemen verursachen, einschließlich [Datenschutz](/de/docs/Web/Privacy)-Problemen, ({{Glossary("Cross-site_scripting", "Cross-Site Scripting (XSS)")}}) Angriffen, Cross-Site Request Forgery ({{Glossary("CSRF", "CSRF")}}) Angriffen und mehr.

## Lösung

Um die Anfälligkeit von Cookies auf Ihrer Website zu minimieren, sollten Sie den Zugriff auf Cookies so weit wie möglich einschränken. Dies kann durch die sinnvolle Verwendung der folgenden Direktiven des [`Set-Cookie`](/de/docs/Web/HTTP/Headers/Set-Cookie) Headers erfolgen:

- `Name`
  - : Cookienamen sollten mit `__Secure-` oder `__Host-` beginnen, um zu verhindern, dass Cookies durch unsichere Quellen überschrieben werden.
    - Verwenden Sie `__Host-` für alle Cookies, die nur für eine bestimmte Domain (ohne Subdomains) benötigt werden, bei der `Path` auf `/` gesetzt ist.
    - Verwenden Sie `__Secure-` für alle anderen Cookies, die von sicheren Ursprüngen ({{Glossary("HTTPS", "HTTPS")}}) gesendet werden.
- `Secure`
  - : Alle Cookies müssen mit der `Secure`-Direktive gesetzt werden, was anzeigt, dass sie nur über HTTPS gesendet werden sollten. [HTTP Strict Transport Security](/de/docs/Web/Security/Practical_implementation_guides/TLS#http_strict_transport_security_implementation) (HSTS) kann ebenfalls verwendet werden, um die Übertragung über HTTP zu verhindern, aber idealerweise sollte `Secure` auch bei Cookies gesetzt sein.
- `HttpOnly`
  - : Cookies, die keinen Zugriff von JavaScript erfordern, sollten die `HttpOnly`-Direktive gesetzt haben, um den Zugriff zu blockieren, wie zum Beispiel von [`Document.cookie`](/de/docs/Web/API/Document/cookie). Es ist besonders wichtig, dass Sitzungskennungen keinen JavaScript-Zugriff haben, um Angriffe wie CSRF zu verhindern.
- `Expires` und `Max-Age`
  - : Cookies sollten ablaufen, sobald sie nicht mehr benötigt werden. Insbesondere Sitzungskennungen sollten so schnell wie möglich ablaufen. `Expires` wird bevorzugt, es sei denn, Sie müssen IE < 8 unterstützen, in diesem Fall verwenden Sie `Max-Age`.
    - `Expires`: Setzt ein absolutes Ablaufdatum für ein gegebenes Cookie.
    - `Max-Age`: Setzt ein relatives Ablaufdatum für ein gegebenes Cookie.
      > **Hinweis:** `Expires` ist länger verfügbar als `Max-Age`; jedoch ist `Max-Age` weniger fehleranfällig und hat Vorrang, wenn beide gesetzt sind. Der Grund dafür ist, dass beim Setzen eines `Expires`-Datums und einer Uhrzeit diese relativ zum Client sind, auf dem das Cookie gesetzt wird. Wenn der Server auf eine andere Zeit eingestellt ist, kann dies zu Fehlern führen.
- `Domain`
  - : Cookies sollten nur ein `Domain`-Attribut haben, wenn sie auf anderen Domains zugänglich sein müssen; dies sollte auf die restriktivste Domain gesetzt werden.
- `Path`
  - : Cookies sollten auf den restriktivsten `Path` gesetzt werden.
- `SameSite`

  - : Verbieten Sie das Senden von Cookies über Cross-Origin-Anfragen (zum Beispiel von {{htmlelement("img")}}-Elementen) mithilfe von `SameSite`. Sie sollten einen der folgenden beiden Werte verwenden:

    - `SameSite=Strict`: Senden Sie das Cookie nur in Same-Site-Kontexten (Navigationen und andere Anfragen). Cookies werden in Cross-Site-Anfragen (z. B. Einbetten von Bildern oder anderen Ressourcen von anderen Websites) und in Cross-Site-Navigation (z. B. beim Folgen eines Links von einer anderen Webseite) ausgelassen. Dies ist eine sehr strikte Einstellung, bietet jedoch einen starken Schutz gegen [CSRF](/de/docs/Web/Security/Practical_implementation_guides/CSRF_prevention), nutzen Sie diesen Wert, wenn möglich.
    - `SameSite=Lax`: Senden Sie das Cookie in Same-Site-Anfragen und beim Navigieren _zu_ Ihrer Website. Dies sollte verwendet werden, wenn `Strict` zu restriktiv ist.

    Beide der oben genannten Werte sind nützlich, um [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking) Angriffe in Fällen zu verhindern, die davon abhängen, dass der Benutzer authentifiziert ist.

    > [!NOTE]
    > In der Theorie sollte `SameSite=Strict` nützlicher sein, als es in der Praxis ist. Es bricht oft Navigationen – zum Beispiel, wenn Benutzer auf einen Link zu einer Website klicken, auf der sie bereits eingeloggt sind (d. h. ein gültiges Sitzungscookie ist gesetzt), scheinen sie nicht eingeloggt zu sein, weil der Browser das Sitzungscookie absichtlich nicht gesendet hat. Der beste Kompromiss ist die Verwendung von `SameSite=Strict` nur bei Tokens, bei denen CSRF ein Problem darstellt, oder die Verwendung von `SameSite=Strict` überall, jedoch die Seite neu zu laden und einen Cookie-Check in JavaScript durchzuführen, wenn es einen Hinweis darauf gibt, dass der Benutzer eingeloggt ist, aber erforderliche Cookies nicht gesendet werden.

## Beispiele

Ein Sitzungkennung-Cookie setzen, das nur auf dem aktuellen Host zugänglich ist und abläuft, wenn der Benutzer den Browser schließt:

```http
Set-Cookie: MOZSESSIONID=980e5da39d4b472b9f504cac9; Path=/; Secure; HttpOnly
```

Verwenden Sie das `__Secure-` Präfix, um eine Sitzungkennung für alle `example.org`-Seiten zu setzen, die nach 30 Tagen abläuft. Dieses Cookie wird nicht cross-origin gesendet, aber beim Navigieren zu einer beliebigen Seite von einer anderen Seite:

```http
Set-Cookie: __Secure-MOZSESSIONID=7307d70a86bd4ab5a00499762; Max-Age=2592000; Domain=example.org; Path=/; Secure; HttpOnly; SameSite=Lax
```

Setzen Sie ein langlebiges Cookie für den aktuellen Host, das durch JavaScript zugänglich ist, wenn der Benutzer die Nutzungsbedingungen akzeptiert. Dieses Cookie wird beim Navigieren zu Ihrer Website von einer anderen Website gesendet, zum Beispiel durch Klicken auf einen Link:

```http
Set-Cookie: __Host-ACCEPTEDTOS=true; Expires=Fri, 31 Dec 9999 23:59:59 GMT; Path=/; Secure; SameSite=Lax
```

Verwenden Sie eine Sitzungkennung für eine sichere (HTTPS) Website. Sie wird nicht von cross-origin Anfragen gesendet, noch beim Navigieren zu Ihrer Website von einer anderen Website. In Verbindung mit anderen Anti-CSRF-Maßnahmen bietet dies einen sehr starken Schutz Ihrer Website vor CSRF-Angriffen:

```http
Set-Cookie: __Host-BMOSESSIONID=YnVnemlsbGE=; Max-Age=2592000; Path=/; Secure; HttpOnly; SameSite=Strict
```

## Siehe auch

- [Verwendung von HTTP-Cookies](/de/docs/Web/HTTP/Cookies)
- [Drittanbieter-Cookies](/de/docs/Web/Privacy/Third-party_cookies)
- [`Document.cookie`: Sicherheit](/de/docs/Web/API/Document/cookie#security)
- [RFC 6265 (HTTP Cookies)](https://datatracker.ietf.org/doc/html/rfc6265) (2011)
