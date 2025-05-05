---
title: Sichere Cookie-Konfiguration
slug: Web/Security/Practical_implementation_guides/Cookies
l10n:
  sourceCommit: ade8d870ed7e18a71dc51fe25aa13d812fb82558
---

Beschränken Sie den Zugriff auf Cookies so weit wie möglich.

## Problem

Cookies enthalten oft Sitzungskennungen oder andere sensible Informationen. Ein unbefugter Zugriff auf Cookies kann daher eine Vielzahl von Problemen verursachen, darunter [Datenschutzprobleme](/de/docs/Web/Privacy), ({{Glossary("Cross-site_scripting", "Cross-site-Scripting (XSS)")}})-Angriffe, Cross-Site-Request-Forgery ({{Glossary("CSRF", "CSRF")}})-Angriffe und mehr.

## Lösung

Um die Schwachstellen von Cookies auf Ihrer Website zu minimieren, begrenzen Sie den Zugriff auf Cookies so weit wie möglich. Dies kann durch eine sinnvolle Nutzung der folgenden Direktiven des [`Set-Cookie`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie)-Headers erreicht werden:

- `Name`
  - : Cookienamen sollten mit `__Secure-` oder `__Host-` eingeleitet werden, um zu verhindern, dass Cookies von unsicheren Quellen überschrieben werden.
    - Verwenden Sie `__Host-` für alle Cookies, die nur auf einer bestimmten Domain (keine Subdomains) benötigt werden, bei denen `Path` auf `/` gesetzt ist.
    - Verwenden Sie `__Secure-` für alle anderen Cookies, die von sicheren Ursprüngen ({{Glossary("HTTPS", "HTTPS")}}) gesendet werden.
- `Secure`
  - : Alle Cookies müssen mit der `Secure`-Direktive gesetzt werden, was bedeutet, dass sie nur über HTTPS gesendet werden sollen. [HTTP Strict Transport Security](/de/docs/Web/Security/Practical_implementation_guides/TLS#http_strict_transport_security_implementation) (HSTS) kann ebenfalls genutzt werden, um eine Übertragung über HTTP zu verhindern, aber idealerweise sollte `Secure` auch auf Cookies gesetzt werden.
- `HttpOnly`
  - : Cookies, die keinen Zugriff aus JavaScript erfordern, sollten die `HttpOnly`-Direktive gesetzt haben, um den Zugriff zu blockieren, z.B. aus [`Document.cookie`](/de/docs/Web/API/Document/cookie). Besonders wichtig ist, dass Sitzungskennungen keinen JavaScript-Zugriff haben, um Angriffe wie CSRF zu verhindern.
- `Expires` und `Max-Age`
  - : Cookies sollten ablaufen, sobald sie nicht mehr benötigt werden. Besonders Sitzungskennungen sollten so schnell wie möglich ablaufen.
    - `Expires`: Setzt ein absolutes Ablaufdatum für ein bestimmtes Cookie.
    - `Max-Age`: Setzt ein relatives Ablaufdatum für ein bestimmtes Cookie.
      > **Hinweis:** `Expires` ist länger verfügbar als `Max-Age`; jedoch ist `Max-Age` weniger fehleranfällig und hat Vorrang, wenn beide gesetzt sind. Der Grund dafür ist, dass beim Setzen eines `Expires`-Datums und einer Uhrzeit diese relativ zum Client, auf dem das Cookie gesetzt wird, sind. Wenn der Server auf eine andere Zeit eingestellt ist, könnte dies zu Fehlern führen.
- `Domain`
  - : Cookies sollten nur ein `Domain` gesetzt haben, wenn sie auf anderen Domains zugänglich sein müssen; dies sollte auf die möglich restriktivste Domain gesetzt werden.
- `Path`
  - : Cookies sollten auf den möglich restriktivsten `Path` gesetzt werden.
- `SameSite`

  - : Verbieten Sie das Senden von Cookies über Cross-Origin-Anfragen (zum Beispiel von {{htmlelement("img")}}-Elementen) mithilfe von `SameSite`. Sie sollten einen der folgenden zwei Werte verwenden:

    - `SameSite=Strict`: Sendet das Cookie nur in same-site-Kontexten (Navigationen und andere Anfragen). Cookies werden bei Cross-Site-Anfragen (z. B. Einbetten von Bildern oder anderen Ressourcen von anderen Seiten) und Cross-Site-Navigationen (z. B. beim Folgen eines Links von einer anderen Webseite) ausgelassen. Dies ist eine sehr strikte Einstellung, bietet jedoch einen starken Schutz gegen [CSRF](/de/docs/Web/Security/Practical_implementation_guides/CSRF_prevention), verwenden Sie diesen Wert, wenn möglich.
    - `SameSite=Lax`: Sendet das Cookie in same-site-Anfragen und beim Navigieren _zu_ Ihrer Website. Dies sollte verwendet werden, wenn `Strict` zu restriktiv ist.

    Beide der obigen Werte sind nützlich zum Schutz gegen [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking)-Angriffe in Fällen, die davon abhängen, dass der Benutzer authentifiziert ist.

    > [!NOTE]
    > Theoretisch sollte `SameSite=Strict` nützlicher sein, als es in der Praxis ist. Es bricht häufig Navigationen — zum Beispiel, wenn Benutzer auf einen Link zu einer Website klicken, auf der sie bereits angemeldet sind (d.h. ein gültiges Sitzungscookie gesetzt ist), wird angezeigt, dass sie nicht angemeldet sind, weil der Browser das Sitzungscookie absichtlich ausgelassen hat. Der beste Mittelweg besteht darin, `SameSite=Strict` nur bei Tokens zu verwenden, bei denen CSRF von Belang ist, oder `SameSite=Strict` überall zu verwenden, die Seite neu zu laden und einen Cookie-Test in JavaScript durchzuführen, wenn es Anhaltspunkte dafür gibt, dass der Benutzer angemeldet ist, aber die erforderlichen Cookies nicht gesendet werden.

## Beispiele

Setzen Sie ein Sitzungserkennungscookie, das nur auf dem aktuellen Host zugänglich ist und abläuft, wenn der Benutzer seinen Browser schließt:

```http
Set-Cookie: MOZSESSIONID=980e5da39d4b472b9f504cac9; Path=/; Secure; HttpOnly
```

Verwenden Sie das Präfix `__Secure-`, um eine Sitzungserkennung für alle `example.org`-Seiten zu setzen, die nach 30 Tagen abläuft. Dieses Cookie wird nicht über Cross-Origin gesendet, aber bei der Navigation zu einer beliebigen Seite von einer anderen Seite gesendet:

```http
Set-Cookie: __Secure-MOZSESSIONID=7307d70a86bd4ab5a00499762; Max-Age=2592000; Domain=example.org; Path=/; Secure; HttpOnly; SameSite=Lax
```

Setzen Sie ein langlebiges Cookie für den aktuellen Host, das von JavaScript zugänglich ist, wenn der Benutzer die Nutzungsbedingungen akzeptiert. Dieses Cookie wird beim Navigieren zu Ihrer Seite von einer anderen Seite gesendet, z. B. durch Klicken auf einen Link:

```http
Set-Cookie: __Host-ACCEPTEDTOS=true; Expires=Fri, 31 Dec 9999 23:59:59 GMT; Path=/; Secure; SameSite=Lax
```

Verwenden Sie eine Sitzungserkennung für eine sichere (HTTPS) Seite. Es wird nicht bei Cross-Origin-Anfragen gesendet, noch beim Navigieren zu Ihrer Seite von einer anderen Seite. In Kombination mit anderen Anti-CSRF-Maßnahmen bietet dies einen sehr starken Schutz für Ihre Seite gegen CSRF-Angriffe:

```http
Set-Cookie: __Host-BMOSESSIONID=YnVnemlsbGE=; Max-Age=2592000; Path=/; Secure; HttpOnly; SameSite=Strict
```

## Siehe auch

- [Verwendung von HTTP-Cookies](/de/docs/Web/HTTP/Guides/Cookies)
- [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies)
- [`Document.cookie`: Sicherheit](/de/docs/Web/API/Document/cookie#security)
- [RFC 6265 (HTTP Cookies)](https://datatracker.ietf.org/doc/html/rfc6265) (2011)
