---
title: Sichere Cookie-Konfiguration
slug: Web/Security/Practical_implementation_guides/Cookies
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}

Beschränken Sie den Zugriff auf Cookies so weit wie möglich.

## Problem

Cookies enthalten oft Sitzungs-IDs oder andere sensible Informationen. Ein unerlaubter Zugriff auf Cookies kann daher zahlreiche Probleme verursachen, einschließlich [Datenschutz](/de/docs/Web/Privacy)problemen, ({{Glossary("Cross-site_scripting", "Cross-site scripting (XSS)")}}) Angriffe, Cross-Site Request Forgery ({{Glossary("CSRF", "CSRF")}}) Angriffe und mehr.

## Lösung

Um das Risiko von Cookie-Schwachstellen auf Ihrer Website zu minimieren, beschränken Sie den Zugriff auf Cookies so weit wie möglich. Dies kann durch eine sinnvolle Nutzung der folgenden Direktiven des [`Set-Cookie`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie)-Headers erfolgen:

- `Name`
  - : Cookie-Namen sollten entweder mit `__Secure-` oder `__Host-` versehen werden, um zu verhindern, dass Cookies von unsicheren Quellen überschrieben werden.
    - Verwenden Sie `__Host-` für alle Cookies, die nur auf einer bestimmten Domain (keine Subdomains) benötigt werden, wobei `Path` auf `/` gesetzt ist.
    - Verwenden Sie `__Secure-` für alle anderen Cookies, die von sicheren Ursprüngen ({{Glossary("HTTPS", "HTTPS")}}) gesendet werden.
- `Secure`
  - : Alle Cookies müssen mit der `Secure`-Direktive gesetzt werden, was anzeigt, dass sie nur über HTTPS gesendet werden sollten. [HTTP Strict Transport Security](/de/docs/Web/Security/Practical_implementation_guides/TLS#http_strict_transport_security_implementation) (HSTS) kann ebenfalls verwendet werden, um Übertragungen über HTTP zu verhindern, aber idealerweise sollte `Secure` auch auf Cookies gesetzt werden.
- `HttpOnly`
  - : Cookies, die keinen Zugriff von JavaScript erfordern, sollten die `HttpOnly`-Direktive haben, um den Zugriff zu blockieren, beispielsweise von [`Document.cookie`](/de/docs/Web/API/Document/cookie). Es ist besonders wichtig, dass Sitzungs-IDs keinen JavaScript-Zugriff haben, um Angriffe wie CSRF zu verhindern.
- `Expires` und `Max-Age`
  - : Cookies sollten ablaufen, sobald sie nicht mehr benötigt werden. Insbesondere Sitzungs-IDs sollten so schnell wie möglich ablaufen.
    - `Expires`: Setzt ein absolutes Ablaufdatum für ein bestimmtes Cookie.
    - `Max-Age`: Setzt ein relatives Ablaufdatum für ein bestimmtes Cookie.
      > **Hinweis:** `Expires` ist länger verfügbar als `Max-Age`; jedoch ist `Max-Age` weniger fehleranfällig und hat Vorrang, wenn beide gesetzt sind. Der Grund dafür ist, dass, wenn Sie ein `Expires`-Datum und eine Uhrzeit setzen, diese relativ zum Client sind, auf dem das Cookie gesetzt wird. Wenn der Server anders eingestellt ist, könnte dies zu Fehlern führen.
- `Domain`
  - : Cookies sollten nur dann eine `Domain` gesetzt haben, wenn sie auf anderen Domains zugänglich sein müssen; dies sollte auf die restriktivste Domain möglich gesetzt werden.
- `Path`
  - : Cookies sollten auf den restriktivsten `Path` möglich gesetzt werden.
- `SameSite`

  - : Verhindern Sie das Senden von Cookies über Cross-Origin-Anfragen (zum Beispiel von {{htmlelement("img")}}-Elementen) mit `SameSite`. Sie sollten einen der folgenden zwei Werte verwenden:

    - `SameSite=Strict`: Senden Sie das Cookie nur in gleichseitigen Kontexten (Navigationen und andere Anfragen). Cookies werden bei Cross-Site-Anfragen (z.B. Einbetten von Bildern oder anderen Ressourcen von anderen Websites) und Cross-Site-Navigation (z.B. beim Folgen eines Links von einer anderen Webseite) weggelassen. Dies ist eine sehr strikte Einstellung, bietet jedoch einen starken [CSRF](/de/docs/Web/Security/Practical_implementation_guides/CSRF_prevention)-Schutz, verwenden Sie daher diesen Wert, wenn möglich.
    - `SameSite=Lax`: Senden Sie das Cookie in gleichseitigen Anfragen und beim Navigieren _zu_ Ihrer Website. Dies sollte verwendet werden, wenn `Strict` zu restriktiv ist.

    Beide der oben genannten Werte sind nützlich, um sich gegen [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking)-Angriffe zu schützen, in Fällen, in denen es darauf ankommt, dass der Benutzer authentifiziert ist.

    > [!NOTE]
    > Theoretisch sollte `SameSite=Strict` nützlicher sein, als es in der Praxis der Fall ist. Es unterbricht oft die Navigation – zum Beispiel scheinen Benutzer, die auf einen Link zu einer Webseite klicken, auf der sie bereits angemeldet sind (d.h. ein gültiges Sitzungscookie ist gesetzt), nicht eingeloggt zu sein, weil der Browser das Sitzungscookie absichtlich weggelassen hat. Der beste Mittelweg besteht darin, `SameSite=Strict` nur auf Tokens zu verwenden, bei denen CSRF ein Problem darstellt, oder `SameSite=Strict` überall zu verwenden, aber die Seite neu zu laden und einen Cookie-Check mit JavaScript durchzuführen, wenn es einen Hinweis darauf gibt, dass der Benutzer eingeloggt ist, aber die erforderlichen Cookies nicht gesendet werden.

## Beispiele

Setzen Sie ein Sitzungs-ID-Cookie, das nur auf dem aktuellen Host zugänglich ist und abläuft, wenn der Benutzer seinen Browser schließt:

```http
Set-Cookie: MOZSESSIONID=980e5da39d4b472b9f504cac9; Path=/; Secure; HttpOnly
```

Verwenden Sie das `__Secure-`-Präfix, um eine Sitzungs-ID für alle `example.org`-Seiten zu setzen, die nach 30 Tagen abläuft. Dieses Cookie wird nicht plattformübergreifend gesendet, aber beim Navigieren zu jeder Seite von einer anderen Seite gesendet:

```http
Set-Cookie: __Secure-MOZSESSIONID=7307d70a86bd4ab5a00499762; Max-Age=2592000; Domain=example.org; Path=/; Secure; HttpOnly; SameSite=Lax
```

Setzen Sie ein langlebiges Cookie für den aktuellen Host, zugänglich durch JavaScript, wenn der Benutzer den Dienstleistungsbedingungen zustimmt. Dieses Cookie wird gesendet, wenn Sie beim Navigieren zu Ihrer Website von einer anderen Website, z.B. durch Klicken auf einen Link:

```http
Set-Cookie: __Host-ACCEPTEDTOS=true; Expires=Fri, 31 Dec 9999 23:59:59 GMT; Path=/; Secure; SameSite=Lax
```

Verwenden Sie eine Sitzungs-ID für eine sichere (HTTPS) Website. Sie wird weder bei plattformübergreifenden Anfragen noch beim Navigieren zu Ihrer Seite von einer anderen Seite gesendet. Zusammen mit anderen Anti-CSRF-Maßnahmen bietet dies einen sehr starken Schutz für Ihre Website gegen CSRF-Angriffe:

```http
Set-Cookie: __Host-BMOSESSIONID=YnVnemlsbGE=; Max-Age=2592000; Path=/; Secure; HttpOnly; SameSite=Strict
```

## Siehe auch

- [Verwendung von HTTP-Cookies](/de/docs/Web/HTTP/Guides/Cookies)
- [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies)
- [`Document.cookie`: Sicherheit](/de/docs/Web/API/Document/cookie#security)
- [RFC 6265 (HTTP Cookies)](https://datatracker.ietf.org/doc/html/rfc6265) (2011)
