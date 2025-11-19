---
title: Sichere Cookie-Konfiguration
slug: Web/Security/Practical_implementation_guides/Cookies
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

Beschränken Sie den Zugriff auf Cookies so weit wie möglich.

## Problem

Cookies enthalten oft Sitzungskennungen oder andere sensible Informationen. Unbefugter Zugriff auf Cookies kann daher eine Reihe von Problemen verursachen, einschließlich [Datenschutz](/de/docs/Web/Privacy) Problemen, ({{Glossary("Cross-site_scripting", "Cross-Site-Scripting (XSS)")}}) Angriffe, Cross-Site-Request-Forgery ({{Glossary("CSRF", "CSRF")}}) Angriffe und mehr.

## Lösung

Um das Risiko für Cookie-Schwachstellen auf Ihrer Website zu minimieren, beschränken Sie den Zugriff auf Cookies so weit wie möglich. Dies kann durch eine sinnvolle Nutzung der folgenden Direktiven des [`Set-Cookie`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie) Headers erreicht werden:

- `Name`
  - : Cookienamen sollten mit entweder `__Secure-` oder `__Host-` versehen werden, um zu verhindern, dass Cookies von unsicheren Quellen überschrieben werden.
    - Verwenden Sie `__Host-` für alle Cookies, die nur auf einer bestimmten Domain benötigt werden (keine Subdomains), wobei `Path` auf `/` gesetzt ist.
    - Verwenden Sie `__Secure-` für alle anderen Cookies, die von sicheren Ursprüngen ({{Glossary("HTTPS", "HTTPS")}}) gesendet werden.
- `Secure`
  - : Alle Cookies müssen mit der `Secure`-Direktive gesetzt sein, was bedeutet, dass sie nur über HTTPS gesendet werden sollten. [HTTP Strict Transport Security](/de/docs/Web/Security/Practical_implementation_guides/TLS#http_strict_transport_security_implementation) (HSTS) kann auch verwendet werden, um die Übertragung über HTTP zu verhindern, aber idealerweise sollte `Secure` auch auf Cookies gesetzt sein.
- `HttpOnly`
  - : Cookies, die nicht von JavaScript aus zugänglich sein müssen, sollten die `HttpOnly`-Direktive gesetzt haben, um den Zugriff zu blockieren, beispielsweise von [`Document.cookie`](/de/docs/Web/API/Document/cookie). Es ist besonders wichtig, dass Sitzungskennungen keinen JavaScript-Zugriff haben, um Angriffe wie CSRF zu verhindern.
- `Expires` und `Max-Age`
  - : Cookies sollten ablaufen, sobald sie nicht mehr benötigt werden. Insbesondere Sitzungskennungen sollten so schnell wie möglich ablaufen.
    - `Expires`: Setzt ein absolutes Ablaufdatum für ein gegebenes Cookie.
    - `Max-Age`: Setzt ein relatives Ablaufdatum für ein gegebenes Cookie.
      > [!NOTE] > `Expires` ist länger verfügbar als `Max-Age`; jedoch ist `Max-Age` weniger fehleranfällig und hat Vorrang, wenn beide gesetzt sind. Der Grund dafür ist, dass beim Festlegen eines `Expires`-Datums und einer Zeit diese relativ zum Client sind, auf dem das Cookie gesetzt wird. Wenn der Server auf eine andere Zeit eingestellt ist, können Fehler auftreten.
- `Domain`
  - : Cookies sollten nur dann eine `Domain` gesetzt haben, wenn sie auf anderen Domains zugänglich sein müssen; dies sollte auf die restriktivste Domain gesetzt werden, die möglich ist.
- `Path`
  - : Cookies sollten auf den restriktivsten möglichen `Path` gesetzt werden.
- `SameSite`
  - : Verbieten Sie das Senden von Cookies über Cross-Origin-Anfragen (zum Beispiel von {{htmlelement("img")}}-Elementen) mithilfe von `SameSite`. Sie sollten einen der folgenden beiden Werte verwenden:
    - `SameSite=Strict`: Senden Sie das Cookie nur in Same-Site-Kontexten (Navigieren und andere Anfragen). Cookies werden bei Cross-Site-Anfragen (z.B. Einbetten von Bildern oder anderen Ressourcen von anderen Websites) und Cross-Site-Navigation (z.B. beim Folgen eines Links von einer anderen Webseite) weggelassen. Dies ist eine sehr strenge Einstellung, bietet jedoch einen starken Schutz gegen [CSRF](/de/docs/Web/Security/Attacks/CSRF)-Angriffe. Verwenden Sie diesen Wert, wenn möglich.
    - `SameSite=Lax`: Senden Sie das Cookie in Same-Site-Anfragen und beim Navigieren _zu_ Ihrer Website. Dies sollte verwendet werden, wenn `Strict` zu restriktiv ist.

    Beide der oben genannten Werte sind nützlich zum Schutz vor [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking)-Angriffen in Fällen, die darauf beruhen, dass der Benutzer authentifiziert ist.

    > [!NOTE]
    > In der Theorie sollte `SameSite=Strict` nützlicher sein, als es in der Praxis ist. Es bricht oft Navigationsvorgänge — zum Beispiel erscheint es, als wären Benutzer, die auf einen Link zu einer Website klicken, auf der sie bereits eingeloggt sind (d.h. ein gültiges Sitzungscookie ist gesetzt), nicht eingeloggt, weil der Browser das Sitzungscookie absichtlich weggelassen hat. Der beste Mittelweg ist, `SameSite=Strict` nur für Token zu verwenden, bei denen CSRF ein Anliegen ist, oder `SameSite=Strict` überall zu verwenden, aber die Seite neu zu laden und in JavaScript eine Cookie-Überprüfung durchzuführen, wenn es einen Hinweis darauf gibt, dass der Benutzer eingeloggt ist, aber erforderliche Cookies nicht gesendet werden.

## Beispiele

Setzen Sie ein Sitzungskennungscookie, das nur auf dem aktuellen Host zugänglich ist und abläuft, wenn der Benutzer seinen Browser schließt:

```http
Set-Cookie: MOZSESSIONID=980e5da39d4b472b9f504cac9; Path=/; Secure; HttpOnly
```

Verwenden Sie das Präfix `__Secure-`, um eine Sitzungskennung für alle `example.org`-Sites zu setzen, die nach 30 Tagen abläuft. Dieses Cookie wird nicht cross-origin gesendet, aber beim Navigieren zu einer beliebigen Site von einer anderen Site gesendet:

```http
Set-Cookie: __Secure-MOZSESSIONID=7307d70a86bd4ab5a00499762; Max-Age=2592000; Domain=example.org; Path=/; Secure; HttpOnly; SameSite=Lax
```

Setzen Sie ein langlebiges Cookie für den aktuellen Host, das von JavaScript aus zugänglich ist, wenn der Benutzer die Nutzungsbedingungen akzeptiert. Dieses Cookie wird gesendet, wenn Sie über eine andere Site zu Ihrer Site navigieren, z.B. durch Klicken auf einen Link:

```http
Set-Cookie: __Host-ACCEPTEDTOS=true; Expires=Fri, 31 Dec 9999 23:59:59 GMT; Path=/; Secure; SameSite=Lax
```

Verwenden Sie eine Sitzungskennung für eine sichere (HTTPS) Site. Sie wird weder von Cross-Origin-Anfragen gesendet noch beim Navigieren zu Ihrer Site von einer anderen Site. In Verbindung mit anderen Anti-CSRF-Maßnahmen bietet dies einen sehr starken Schutz für Ihre Site gegen CSRF-Angriffe:

```http
Set-Cookie: __Host-BMOSESSIONID=YnVnemlsbGE=; Max-Age=2592000; Path=/; Secure; HttpOnly; SameSite=Strict
```

## Siehe auch

- [Verwendung von HTTP-Cookies](/de/docs/Web/HTTP/Guides/Cookies)
- [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies)
- [`Document.cookie`: Sicherheit](/de/docs/Web/API/Document/cookie#security)
- [RFC 6265 (HTTP-Cookies)](https://datatracker.ietf.org/doc/html/rfc6265) (2011)
