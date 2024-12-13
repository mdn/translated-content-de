---
title: Sicheres Cookie-Konfiguration
slug: Web/Security/Practical_implementation_guides/Cookies
l10n:
  sourceCommit: 58e3ead4baff54bd562049b4a70f5b7df368f242
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}

Begrenzen Sie den Zugriff auf Cookies so weit wie möglich.

## Problem

Cookies enthalten häufig Sitzungs-IDs oder andere sensible Informationen. Unbefugter Zugriff auf Cookies kann daher eine Vielzahl von Problemen verursachen, einschließlich [Datenschutz](/de/docs/Web/Privacy)problemen, ({{Glossary("Cross-site_scripting", "Cross-Site Scripting (XSS)")}})-Angriffen, Cross-Site Request Forgery ({{Glossary("CSRF", "CSRF")}})-Angriffen und mehr.

## Lösung

Um die Anfälligkeit Ihrer Website für Cookie-Schwachstellen zu minimieren, sollten Sie den Zugriff auf Cookies so weit wie möglich beschränken. Dies kann durch eine sinnvolle Verwendung der folgenden Direktiven des [`Set-Cookie`](/de/docs/Web/HTTP/Headers/Set-Cookie)-Headers geschehen:

- `Name`
  - : Cookienamen sollten mit entweder `__Secure-` oder `__Host-` versehen werden, um zu verhindern, dass Cookies von unsicheren Quellen überschrieben werden.
    - Verwenden Sie `__Host-` für alle Cookies, die nur auf einer bestimmten Domain benötigt werden (keine Subdomains), bei der `Path` auf `/` gesetzt ist.
    - Verwenden Sie `__Secure-` für alle anderen Cookies, die von sicheren Ursprüngen ({{Glossary("HTTPS", "HTTPS")}}) gesendet werden.
- `Secure`
  - : Alle Cookies müssen mit der Direktive `Secure` gesetzt werden, was anzeigt, dass sie nur über HTTPS gesendet werden sollten. [HTTP Strict Transport Security](/de/docs/Web/Security/Practical_implementation_guides/TLS#http_strict_transport_security_implementation) (HSTS) kann ebenfalls verwendet werden, um die Übertragung über HTTP zu verhindern, aber idealerweise sollte `Secure` auch auf Cookies gesetzt werden.
- `HttpOnly`
  - : Cookies, die keinen Zugriff von JavaScript erfordern, sollten die Direktive `HttpOnly` haben, um den Zugriff zu blockieren, zum Beispiel von [`Document.cookie`](/de/docs/Web/API/Document/cookie). Es ist besonders wichtig, dass Sitzungs-IDs keinen JavaScript-Zugang haben, um Angriffe wie CSRF zu verhindern.
- `Expires` und `Max-Age`
  - : Cookies sollten ablaufen, sobald sie nicht mehr benötigt werden. Sitzungs-IDs im Besonderen sollten so schnell wie möglich ablaufen. `Expires` wird bevorzugt, es sei denn, Sie müssen IE < 8 unterstützen, in diesem Fall verwenden Sie `Max-Age`.
    - `Expires`: Setzt ein absolutes Ablaufdatum für ein gegebenes Cookie.
    - `Max-Age`: Setzt ein relatives Ablaufdatum für ein gegebenes Cookie.
      > **Hinweis:** `Expires` ist länger verfügbar als `Max-Age`; jedoch ist `Max-Age` weniger fehleranfällig und hat Vorrang, wenn beide gesetzt sind. Der Grund dafür ist, dass beim Setzen eines `Expires`-Datums und einer Uhrzeit diese relativ zu dem Client sind, auf dem das Cookie gesetzt wird. Wenn der Server auf eine andere Zeit eingestellt ist, könnte dies zu Fehlern führen.
- `Domain`
  - : Cookies sollten nur dann eine `Domain` gesetzt haben, wenn sie auf anderen Domains zugänglich sein müssen; dies sollte auf die restriktivste Domain möglich gesetzt werden.
- `Path`
  - : Cookies sollten auf den restriktivsten `Path` gesetzt werden.
- `SameSite`

  - : Verbieten Sie das Senden von Cookies über Cross-Origin-Anfragen (z. B. von {{htmlelement("img")}}-Elementen) mithilfe von `SameSite`. Sie sollten einen der folgenden zwei Werte verwenden:

    - `SameSite=Strict`: Senden Sie das Cookie nur in gleichen Site-Kontexten (Navigations- und andere Anfragen). Cookies werden bei Cross-Site-Anfragen (z. B. Einbetten von Bildern oder anderen Ressourcen von anderen Seiten) und Cross-Site-Navigation (z. B. wenn ein Link von einer anderen Webseite gefolgt wird) ausgelassen. Dies ist eine sehr strikte Einstellung, bietet jedoch starken [CSRF](/de/docs/Web/Security/Practical_implementation_guides/CSRF_prevention)-Schutz, also verwenden Sie diesen Wert, wenn möglich.
    - `SameSite=Lax`: Senden Sie das Cookie bei gleichen Site-Anfragen und bei der Navigation _zu_ Ihrer Website. Dies sollte verwendet werden, wenn `Strict` zu restriktiv ist.

    Beide oben genannten Werte sind nützlich zum Schutz vor {{Glossary("Clickjacking", "Clickjacking")}}-Angriffen in Fällen, die davon abhängen, dass der Benutzer authentifiziert ist.

    > [!NOTE]
    > In der Theorie sollte `SameSite=Strict` nützlicher sein, als es in der Praxis ist. Es führt oft zu Navigationsabbrüchen — zum Beispiel, wenn Benutzer auf einen Link zu einer Website klicken, auf der sie bereits eingeloggt sind (d. h. ein gültiges Sitzungs-Cookie gesetzt ist), erscheint es, als wären sie nicht eingeloggt, weil der Browser das Sitzungs-Cookie absichtlich ausgelassen hat. Der beste Mittelweg ist, `SameSite=Strict` nur bei Tokens zu verwenden, bei denen CSRF ein Problem darstellt, oder `SameSite=Strict` überall zu verwenden, aber die Seite neu zu laden und mit JavaScript eine Cookie-Überprüfung durchzuführen, wenn ein Hinweis darauf besteht, dass der Benutzer eingeloggt ist, aber erforderliche Cookies nicht gesendet werden.

## Beispiele

Setzen Sie ein Sitzungs-ID-Cookie, das nur auf dem aktuellen Host zugänglich ist und abläuft, wenn der Benutzer seinen Browser schließt:

```http
Set-Cookie: MOZSESSIONID=980e5da39d4b472b9f504cac9; Path=/; Secure; HttpOnly
```

Verwenden Sie das Präfix `__Secure-`, um eine Sitzungs-ID für alle `example.org`-Seiten zu setzen, die nach 30 Tagen abläuft. Dieses Cookie wird nicht über Cross-Origin gesendet, aber beim Navigieren zu einer beliebigen Seite von einer anderen Website:

```http
Set-Cookie: __Secure-MOZSESSIONID=7307d70a86bd4ab5a00499762; Max-Age=2592000; Domain=example.org; Path=/; Secure; HttpOnly; SameSite=Lax
```

Setzen Sie ein langlebiges Cookie für den aktuellen Host, das von JavaScript zugänglich ist, wenn der Benutzer die Nutzungsbedingungen akzeptiert. Dieses Cookie wird gesendet, wenn Sie von einer anderen Website zu Ihrer Seite navigieren, z. B. durch Klicken auf einen Link:

```http
Set-Cookie: __Host-ACCEPTEDTOS=true; Expires=Fri, 31 Dec 9999 23:59:59 GMT; Path=/; Secure; SameSite=Lax
```

Verwenden Sie eine Sitzungs-ID für eine sichere (HTTPS) Seite. Sie wird nicht von Cross-Origin-Anfragen gesendet, noch beim Navigieren zu Ihrer Seite von einer anderen Website. In Verbindung mit anderen Anti-CSRF-Maßnahmen bietet dies eine sehr starke Verteidigung für Ihre Seite gegen CSRF-Angriffe:

```http
Set-Cookie: __Host-BMOSESSIONID=YnVnemlsbGE=; Max-Age=2592000; Path=/; Secure; HttpOnly; SameSite=Strict
```

## Siehe auch

- [Verwendung von HTTP-Cookies](/de/docs/Web/HTTP/Cookies)
- [Cookies von Drittanbietern](/de/docs/Web/Privacy/Third-party_cookies)
- [`Document.cookie`: Sicherheit](/de/docs/Web/API/Document/cookie#security)
- [RFC 6265 (HTTP-Cookies)](https://datatracker.ietf.org/doc/html/rfc6265) (2011)
