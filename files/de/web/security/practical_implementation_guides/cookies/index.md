---
title: Sichere Cookie-Konfiguration
slug: Web/Security/Practical_implementation_guides/Cookies
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}

Beschränken Sie den Zugriff auf Cookies so weit wie möglich.

## Problem

Cookies enthalten häufig Sitzungsidentifikatoren oder andere sensible Informationen. Unbefugter Zugriff auf Cookies kann daher eine Reihe von Problemen verursachen, einschließlich [Datenschutz](/de/docs/Web/Privacy)-Problemen, ({{Glossary("Cross-site_scripting", "Cross-Site-Scripting (XSS)")}})-Angriffen, Cross-Site-Request-Forgery ({{Glossary("CSRF", "CSRF")}})-Angriffen und mehr.

## Lösung

Um den Umfang für Cookie-Schwachstellen auf Ihrer Website zu minimieren, beschränken Sie den Zugriff auf Cookies so weit wie möglich. Dies kann durch den vernünftigen Einsatz der folgenden Direktiven des [`Set-Cookie`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie)-Headers erreicht werden:

- `Name`
  - : Cookienamen sollten mit `__Secure-` oder `__Host-` vorangestellt werden, um zu verhindern, dass Cookies von unsicheren Quellen überschrieben werden.
    - Verwenden Sie `__Host-` für alle Cookies, die nur auf einer spezifischen Domain benötigt werden (keine Subdomains), bei denen `Path` auf `/` gesetzt ist.
    - Verwenden Sie `__Secure-` für alle anderen Cookies, die von sicheren Ursprüngen ({{Glossary("HTTPS", "HTTPS")}}) gesendet werden.
- `Secure`
  - : Alle Cookies müssen mit der `Secure`-Direktive gesetzt werden, was anzeigt, dass sie nur über HTTPS gesendet werden sollen. Die [HTTP Strict Transport Security](/de/docs/Web/Security/Practical_implementation_guides/TLS#http_strict_transport_security_implementation) (HSTS) kann ebenfalls verwendet werden, um die Übertragung über HTTP zu verhindern, aber idealerweise sollte `Secure` auch bei Cookies gesetzt werden.
- `HttpOnly`
  - : Cookies, die keinen Zugriff von JavaScript erfordern, sollten die `HttpOnly`-Direktive gesetzt haben, um den Zugriff zu blockieren, etwa von [`Document.cookie`](/de/docs/Web/API/Document/cookie). Es ist besonders wichtig, dass Sitzungsidentifikatoren keinen JavaScript-Zugriff haben, um Angriffe wie CSRF zu verhindern.
- `Expires` und `Max-Age`
  - : Cookies sollten ablaufen, sobald sie nicht mehr benötigt werden. Sitzungsidentifikatoren im Besonderen sollten so schnell wie möglich ablaufen.
    - `Expires`: Setzt ein absolutes Ablaufdatum für ein gegebenes Cookie.
    - `Max-Age`: Setzt ein relatives Ablaufdatum für ein gegebenes Cookie.
      > **Hinweis:** `Expires` ist länger verfügbar als `Max-Age`; jedoch ist `Max-Age` weniger fehleranfällig und wird bevorzugt, wenn beide gesetzt sind. Der Grund hierfür ist, dass, wenn Sie ein `Expires`-Datum und eine Uhrzeit festlegen, diese relativ zu dem Client sind, auf dem das Cookie gesetzt wird. Wenn der Server auf eine andere Zeit eingestellt ist, kann dies zu Fehlern führen.
- `Domain`
  - : Cookies sollten nur eine `Domain` gesetzt haben, wenn sie auf anderen Domains zugänglich sein müssen; dies sollte auf die restriktivste Domain eingestellt werden.
- `Path`
  - : Cookies sollten auf den restriktivsten `Path` gesetzt werden.
- `SameSite`

  - : Verhindern Sie das Senden von Cookies bei Cross-Origin-Anfragen (zum Beispiel von {{htmlelement("img")}}-Elementen) mit `SameSite`. Sie sollten einen der folgenden beiden Werte verwenden:

    - `SameSite=Strict`: Sendet das Cookie nur in gleichen Site-Kontexten (Navigationen und andere Anfragen). Cookies werden bei Cross-Site-Anfragen (z. B. beim Einbinden von Bildern oder anderen Ressourcen von anderen Websites) und bei Cross-Site-Navigation (z. B. beim Folgen eines Links von einer anderen Webseite) weggelassen. Dies ist eine sehr strikte Einstellung, bietet aber starken [CSRF](/de/docs/Web/Security/Practical_implementation_guides/CSRF_prevention)-Schutz, daher verwenden Sie diesen Wert, wenn möglich.
    - `SameSite=Lax`: Sendet das Cookie in gleichseitigen Anfragen und beim Navigieren _zu_ Ihrer Website. Dies sollte verwendet werden, wenn `Strict` zu restriktiv ist.

    Beide der obigen Werte sind nützlich, um gegen [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking)-Angriffe zu schützen, in Fällen, die darauf basieren, dass der Benutzer authentifiziert ist.

    > [!NOTE]
    > Theoretisch sollte `SameSite=Strict` nützlicher sein, als es in der Praxis ist. Es führt oft zu Navigationsunterbrechungen – etwa wenn Benutzer auf einen Link zu einer Website klicken, auf der sie bereits eingeloggt sind (d.h. ein gültiges Sitzungscookie ist gesetzt), aber als nicht eingeloggt erscheinen, da der Browser das Sitzungscookie absichtlich ausgelassen hat. Der beste Mittelweg ist, `SameSite=Strict` nur bei Tokens zu verwenden, bei denen CSRF ein Problem ist, oder `SameSite=Strict` überall zu verwenden, aber die Seite neu zu laden und einen Cookie-Check in JavaScript durchzuführen, wenn angezeigt wird, dass der Benutzer eingeloggt ist, aber erforderliche Cookies nicht gesendet werden.

## Beispiele

Setzen Sie ein Sitzungsidentifikator-Cookie, das nur auf dem aktuellen Host zugänglich ist und abläuft, wenn der Benutzer seinen Browser schließt:

```http
Set-Cookie: MOZSESSIONID=980e5da39d4b472b9f504cac9; Path=/; Secure; HttpOnly
```

Verwenden Sie das Präfix `__Secure-`, um einen Sitzungsidentifikator für alle `example.org`-Seiten zu setzen, der nach 30 Tagen abläuft. Dieses Cookie wird nicht grenzüberschreitend gesendet, aber es wird gesendet, wenn zu einer beliebigen Seite von einer anderen Seite navigiert wird:

```http
Set-Cookie: __Secure-MOZSESSIONID=7307d70a86bd4ab5a00499762; Max-Age=2592000; Domain=example.org; Path=/; Secure; HttpOnly; SameSite=Lax
```

Setzen Sie ein lang lebendes Cookie für den aktuellen Host, das von JavaScript zugänglich ist, wenn der Benutzer die Nutzungsbedingungen akzeptiert. Dieses Cookie wird beim Navigieren zu Ihrer Seite von einer anderen Seite gesendet, zum Beispiel durch Klicken auf einen Link:

```http
Set-Cookie: __Host-ACCEPTEDTOS=true; Expires=Fri, 31 Dec 9999 23:59:59 GMT; Path=/; Secure; SameSite=Lax
```

Verwenden Sie einen Sitzungsidentifikator für eine sichere (HTTPS) Seite. Er wird nicht bei Cross-Origin-Anfragen gesendet, noch beim Navigieren zu Ihrer Seite von einer anderen Seite. In Verbindung mit anderen Anti-CSRF-Maßnahmen bietet dies einen sehr starken Schutz für Ihre Seite gegen CSRF-Angriffe:

```http
Set-Cookie: __Host-BMOSESSIONID=YnVnemlsbGE=; Max-Age=2592000; Path=/; Secure; HttpOnly; SameSite=Strict
```

## Siehe auch

- [Verwendung von HTTP-Cookies](/de/docs/Web/HTTP/Guides/Cookies)
- [Cookies von Drittanbietern](/de/docs/Web/Privacy/Guides/Third-party_cookies)
- [`Document.cookie`: Sicherheit](/de/docs/Web/API/Document/cookie#security)
- [RFC 6265 (HTTP Cookies)](https://datatracker.ietf.org/doc/html/rfc6265) (2011)
