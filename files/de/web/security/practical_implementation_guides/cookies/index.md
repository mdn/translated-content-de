---
title: Sichere Cookie-Konfiguration
slug: Web/Security/Practical_implementation_guides/Cookies
l10n:
  sourceCommit: 5c000c8621145c6915f3d545b505c216317bc64a
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}

Beschränken Sie den Zugriff auf Cookies so weit wie möglich.

## Problem

Cookies enthalten häufig Sitzungs-IDs oder andere sensible Informationen. Unautorisierter Zugriff auf Cookies kann daher eine Vielzahl von Problemen verursachen, einschließlich [Datenschutz](/de/docs/Web/Privacy)probleme, ([Cross-Site Scripting (XSS)](/de/docs/Glossary/Cross-site_scripting)) Angriffe, Cross-Site-Request-Forgery ([CSRF](/de/docs/Glossary/CSRF)) Angriffe und mehr.

## Lösung

Um das Risiko von Cookie-Schwachstellen auf Ihrer Website zu minimieren, sollten Sie den Zugriff auf Cookies so weit wie möglich einschränken. Dies kann durch sinnvolle Nutzung der folgenden Direktiven des [`Set-Cookie`](/de/docs/Web/HTTP/Headers/Set-Cookie) Headers erreicht werden:

- `Name`
  - : Cookienamen sollten entweder mit `__Secure-` oder `__Host-` beginnen, um zu verhindern, dass Cookies von unsicheren Quellen überschrieben werden.
    - Verwenden Sie `__Host-` für alle Cookies, die nur auf einer bestimmten Domain benötigt werden (keine Subdomains) und bei denen `Path` auf `/` gesetzt ist.
    - Verwenden Sie `__Secure-` für alle anderen Cookies, die von sicheren Ursprüngen ([HTTPS](/de/docs/Glossary/HTTPS)) gesendet werden.
- `Secure`
  - : Alle Cookies müssen mit der `Secure`-Direktive versehen sein, was bedeutet, dass sie nur über HTTPS gesendet werden sollten. [HTTP Strict Transport Security](/de/docs/Web/Security/Practical_implementation_guides/TLS#http_strict_transport_security_implementation) (HSTS) kann ebenfalls verwendet werden, um die Übertragung über HTTP zu verhindern, aber idealerweise sollte `Secure` ebenfalls auf Cookies gesetzt werden.
- `HttpOnly`
  - : Cookies, die keinen Zugriff über JavaScript erfordern, sollten die `HttpOnly`-Direktive setzen, um den Zugriff zu blocken, wie z.B. von [`Document.cookie`](/de/docs/Web/API/Document/cookie). Es ist besonders wichtig, dass Sitzungs-IDs keinen JavaScript-Zugriff haben, um Angriffe wie CSRF zu verhindern.
- `Expires` und `Max-Age`
  - : Cookies sollten ablaufen, sobald sie nicht mehr benötigt werden. Insbesondere Sitzungs-IDs sollten so schnell wie möglich ablaufen. `Expires` wird bevorzugt, es sei denn, Sie müssen IE < 8 unterstützen; in diesem Fall verwenden Sie `Max-Age`.
    - `Expires`: Legt ein absolutes Ablaufdatum für ein bestimmtes Cookie fest.
    - `Max-Age`: Legt ein relatives Ablaufdatum für ein bestimmtes Cookie fest.
      > **Hinweis:** `Expires` ist länger verfügbar als `Max-Age`; jedoch ist `Max-Age` weniger fehleranfällig und hat Priorität, wenn beide gesetzt sind. Der Grund dafür ist, dass, wenn Sie ein `Expires`-Datum und eine Uhrzeit setzen, diese relativ zu dem Client sind, auf dem das Cookie gesetzt wird. Wenn der Server auf eine andere Zeit eingestellt ist, könnte dies zu Fehlern führen.
- `Domain`
  - : Cookies sollten nur eine `Domain` gesetzt haben, wenn sie auf anderen Domains zugänglich sein müssen; dies sollte auf die restriktivste Domain gesetzt werden.
- `Path`
  - : Cookies sollten auf den restriktivsten `Path` gesetzt werden, der möglich ist.
- `SameSite`

  - : Verhindern Sie das Senden von Cookies über Cross-Origin-Anfragen (z.B. von {{htmlelement("img")}} Elementen) mit `SameSite`. Sie sollten einen der folgenden zwei Werte verwenden:

    - `SameSite=Strict`: Sendet das Cookie nur in Same-Site-Kontexten (Navigationen und andere Anfragen). Cookies werden in Same-Origin-Kontexten (z.B. beim Navigieren von `a.example.com` zu `b.example.com`), Cross-Site-Anfragen (z.B. Hotlinking) und Cross-Site-Navigationen (z.B. beim Folgen eines Links von einer anderen Webseite) ausgelassen. Dies ist eine sehr strikte Einstellung, bietet jedoch starken [CSRF](/de/docs/Web/Security/Practical_implementation_guides/CSRF_prevention) Schutz, verwenden Sie diesen Wert, wenn möglich.
    - `SameSite=Lax`: Sendet das Cookie in Same-Site-Anfragen und beim Navigieren _zu_ Ihrer Website. Dies sollte verwendet werden, wenn `Strict` zu restriktiv ist.

    Beide der oben genannten Werte sind nützlich, um sich gegen [Clickjacking](/de/docs/Glossary/Clickjacking) Angriffe zu schützen, in Fällen, die davon abhängen, dass der Benutzer authentifiziert ist.

    > [!NOTE]
    > In der Theorie sollte `SameSite=Strict` nützlicher sein, als es in der Praxis ist. Es führt oft zu Navigationsproblemen – zum Beispiel scheinen Benutzer, die auf einen Link zu einer Website klicken, auf der sie bereits eingeloggt sind (d.h. ein gültiges Sitzungscookie ist gesetzt), nicht eingeloggt zu sein, da der Browser das Sitzungscookie absichtlich weggelassen hat. Der beste Mittelweg besteht darin, `SameSite=Strict` nur für Tokens zu verwenden, bei denen CSRF ein Problem darstellt, oder `SameSite=Strict` überall zu verwenden, aber die Seite neu zu laden und eine Cookie-Prüfung in JavaScript durchzuführen, wenn es einen Hinweis darauf gibt, dass der Benutzer eingeloggt ist, aber erforderliche Cookies nicht gesendet werden.

## Beispiele

Setzen Sie ein Sitzungs-Identifikator-Cookie, das nur auf dem aktuellen Host zugänglich ist und abläuft, wenn der Benutzer seinen Browser schließt:

```http
Set-Cookie: MOZSESSIONID=980e5da39d4b472b9f504cac9; Path=/; Secure; HttpOnly
```

Verwenden Sie das Präfix `__Secure-`, um einen Sitzungs-Identifikator für alle `example.org`-Seiten zu setzen, der nach 30 Tagen abläuft. Dieses Cookie wird nicht Cross-Origin gesendet, sondern beim Navigieren zu einer beliebigen Seite von einer anderen Seite:

```http
Set-Cookie: __Secure-MOZSESSIONID=7307d70a86bd4ab5a00499762; Max-Age=2592000; Domain=example.org; Path=/; Secure; HttpOnly; SameSite=Lax
```

Setzen Sie ein langlebiges Cookie für den aktuellen Host, das von JavaScript zugänglich ist, wenn der Benutzer die Nutzungsbedingungen akzeptiert. Dieses Cookie wird gesendet, wenn der Benutzer zu Ihrer Website von einer anderen Website navigiert, z.B. durch Klicken auf einen Link:

```http
Set-Cookie: __Host-ACCEPTEDTOS=true; Expires=Fri, 31 Dec 9999 23:59:59 GMT; Path=/; Secure; SameSite=Lax
```

Verwenden Sie einen Sitzungs-Identifikator für eine sichere (HTTPS) Seite. Es wird nicht von Cross-Origin-Anfragen gesendet noch beim Navigieren zu Ihrer Seite von einer anderen Seite. In Verbindung mit anderen Anti-CSRF-Maßnahmen bietet dies eine sehr starke Verteidigung Ihrer Website gegen CSRF-Angriffe:

```http
Set-Cookie: __Host-BMOSESSIONID=YnVnemlsbGE=; Max-Age=2592000; Path=/; Secure; HttpOnly; SameSite=Strict
```

## Siehe auch

- [Verwendung von HTTP-Cookies](/de/docs/Web/HTTP/Cookies)
- [Drittanbieter-Cookies](/de/docs/Web/Privacy/Third-party_cookies)
- [`Document.cookie`: Sicherheit](/de/docs/Web/API/Document/cookie#security)
- [RFC 6265 (HTTP Cookies)](https://datatracker.ietf.org/doc/html/rfc6265) (2011)
