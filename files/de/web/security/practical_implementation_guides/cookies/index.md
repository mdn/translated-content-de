---
title: Konfiguration von sicheren Cookies
slug: Web/Security/Practical_implementation_guides/Cookies
l10n:
  sourceCommit: 77be0bd59aea58e15e4ab6d2c5d9c31a8e0f95f1
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}

Begrenzen Sie den Zugriff auf Cookies so weit wie möglich.

## Problem

Cookies enthalten oft Sitzungskennungen oder andere sensible Informationen. Unbefugter Zugriff auf Cookies kann daher eine Vielzahl von Problemen verursachen, darunter [Datenschutz](/de/docs/Web/Privacy)-Probleme, ({{Glossary("Cross-site_scripting", "Cross-site scripting (XSS)")}})-Angriffe, Cross-Site-Request-Forgery ({{Glossary("CSRF", "CSRF")}})-Angriffe und mehr.

## Lösung

Um das Potenzial für Cookie-Schwachstellen auf Ihrer Seite zu minimieren, begrenzen Sie den Zugriff auf Cookies so weit wie möglich. Dies kann durch die sinnvolle Nutzung der folgenden Direktiven des [`Set-Cookie`](/de/docs/Web/HTTP/Headers/Set-Cookie)-Headers erfolgen:

- `Name`
  - : Cookienamen sollten mit `__Secure-` oder `__Host-` versehen sein, um zu verhindern, dass Cookies von unsicheren Quellen überschrieben werden.
    - Verwenden Sie `__Host-` für alle Cookies, die nur auf einer bestimmten Domain (ohne Subdomains) benötigt werden, wobei `Path` auf `/` gesetzt ist.
    - Verwenden Sie `__Secure-` für alle anderen Cookies, die von sicheren Ursprüngen ({{Glossary("HTTPS", "HTTPS")}}) gesendet werden.
- `Secure`
  - : Alle Cookies müssen mit der `Secure`-Direktive gesetzt werden, die angibt, dass sie nur über HTTPS gesendet werden sollten. [HTTP Strict Transport Security](/de/docs/Web/Security/Practical_implementation_guides/TLS#http_strict_transport_security_implementation) (HSTS) kann auch verwendet werden, um die Übertragung über HTTP zu verhindern, aber idealerweise sollte `Secure` auch auf Cookies gesetzt werden.
- `HttpOnly`
  - : Cookies, die keinen Zugriff von JavaScript benötigen, sollten die `HttpOnly`-Direktive gesetzt haben, um den Zugriff zu blockieren, beispielsweise von [`Document.cookie`](/de/docs/Web/API/Document/cookie). Es ist besonders wichtig, dass Sitzungskookies keinen JavaScript-Zugriff haben, um Angriffe wie CSRF zu verhindern.
- `Expires` und `Max-Age`
  - : Cookies sollten ablaufen, sobald sie nicht mehr benötigt werden. Besonders Sitzungskookies sollten so schnell wie möglich ablaufen.
    - `Expires`: Setzt ein absolutes Ablaufdatum für ein bestimmtes Cookie.
    - `Max-Age`: Setzt ein relatives Ablaufdatum für ein bestimmtes Cookie.
      > **Hinweis:** `Expires` ist länger verfügbar als `Max-Age`; jedoch ist `Max-Age` weniger fehleranfällig und hat Vorrang, wenn beide gesetzt sind. Der Grund dafür ist, dass wenn Sie ein `Expires`-Datum und eine Zeit setzen, diese relativ zum Client sind, auf dem das Cookie gesetzt wird. Wenn der Server auf eine andere Zeit eingestellt ist, kann dies zu Fehlern führen.
- `Domain`
  - : Cookies sollten nur dann ein `Domain`-Attribut gesetzt haben, wenn sie auf anderen Domains zugänglich sein müssen; dies sollte auf die einschränkendste Domain gesetzt werden.
- `Path`
  - : Cookies sollten auf den einschränkendsten `Path` gesetzt werden.
- `SameSite`

  - : Verhindern Sie das Senden von Cookies über Cross-Origin-Anfragen (z.B. von {{htmlelement("img")}}-Elementen) mit `SameSite`. Sie sollten einen der beiden folgenden Werte verwenden:

    - `SameSite=Strict`: Sendet das Cookie nur in gleichen Site-Kontexten (Navigations- und andere Anfragen). Cookies werden bei Cross-Site-Anfragen (z.B. Einbettung von Bildern oder anderen Ressourcen von anderen Seiten) und Cross-Site-Navigation (z.B. wenn ein Link von einer anderen Webseite gefolgt wird) ausgelassen. Dies ist eine sehr strikte Einstellung, bietet jedoch starken [CSRF](/de/docs/Web/Security/Practical_implementation_guides/CSRF_prevention)-Schutz, verwenden Sie diesen Wert also nach Möglichkeit.
    - `SameSite=Lax`: Sendet das Cookie in gleichen Site-Anfragen und wenn auf Ihre Webseite navigiert wird. Dies sollte verwendet werden, wenn `Strict` zu restriktiv ist.

    Beide der oben genannten Werte sind nützlich beim Schutz vor [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking)-Angriffen in Fällen, die darauf beruhen, dass der Benutzer authentifiziert ist.

    > [!NOTE]
    > In der Theorie sollte `SameSite=Strict` nützlicher sein, als es in der Praxis ist. Es bricht oft Navigationsabläufe – zum Beispiel, wenn Benutzer auf einen Link zu einer Website klicken, auf der sie bereits eingeloggt sind (d.h. ein gültiges Sitzungs-Cookie ist gesetzt), scheinbar nicht eingeloggt sind, weil der Browser das Sitzungs-Cookie absichtlich ausgelassen hat. Der beste Mittelweg ist, `SameSite=Strict` nur für Token zu verwenden, bei denen CSRF ein Problem ist, oder `SameSite=Strict` überall zu verwenden, aber die Seite zu laden und einen Cookie-Check in JavaScript durchzuführen, wenn es Anzeichen dafür gibt, dass der Benutzer eingeloggt ist, aber erforderliche Cookies nicht gesendet werden.

## Beispiele

Setzen Sie ein Sitzungskennungscookie, das nur auf dem aktuellen Host zugänglich ist und abläuft, wenn der Benutzer seinen Browser schließt:

```http
Set-Cookie: MOZSESSIONID=980e5da39d4b472b9f504cac9; Path=/; Secure; HttpOnly
```

Verwenden Sie das Präfix `__Secure-`, um eine Sitzungskennung für alle `example.org`-Seiten zu setzen, die nach 30 Tagen abläuft. Dieses Cookie wird nicht Cross-Origin gesendet, aber wird gesendet, wenn zu einer beliebigen Seite von einer anderen Seite navigiert wird:

```http
Set-Cookie: __Secure-MOZSESSIONID=7307d70a86bd4ab5a00499762; Max-Age=2592000; Domain=example.org; Path=/; Secure; HttpOnly; SameSite=Lax
```

Setzen Sie ein langlebiges Cookie für den aktuellen Host, das von JavaScript zugänglich ist, wenn der Benutzer die Nutzungsbedingungen akzeptiert. Dieses Cookie wird gesendet, wenn zu Ihrer Seite von einer anderen Seite navigiert wird, wie z.B. durch Klicken auf einen Link:

```http
Set-Cookie: __Host-ACCEPTEDTOS=true; Expires=Fri, 31 Dec 9999 23:59:59 GMT; Path=/; Secure; SameSite=Lax
```

Verwenden Sie eine Sitzungskennung für eine sichere (HTTPS) Seite. Sie wird nicht aus Cross-Origin-Anfragen gesendet, noch wenn zu Ihrer Seite von einer anderen Seite navigiert wird. In Verbindung mit anderen Anti-CSRF-Maßnahmen bietet dies einen sehr starken Schutz für Ihre Seite gegen CSRF-Angriffe:

```http
Set-Cookie: __Host-BMOSESSIONID=YnVnemlsbGE=; Max-Age=2592000; Path=/; Secure; HttpOnly; SameSite=Strict
```

## Siehe auch

- [Verwendung von HTTP-Cookies](/de/docs/Web/HTTP/Cookies)
- [Drittanbieter-Cookies](/de/docs/Web/Privacy/Third-party_cookies)
- [`Document.cookie`: Sicherheit](/de/docs/Web/API/Document/cookie#security)
- [RFC 6265 (HTTP Cookies)](https://datatracker.ietf.org/doc/html/rfc6265) (2011)
