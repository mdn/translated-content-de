---
title: Sichere Cookie-Konfiguration
slug: Web/Security/Practical_implementation_guides/Cookies
l10n:
  sourceCommit: 5c000c8621145c6915f3d545b505c216317bc64a
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}

Beschränken Sie den Zugriff auf Cookies so weit wie möglich.

## Problem

Cookies enthalten häufig Sitzungskennungen oder andere sensitive Informationen. Unautorisierter Zugriff auf Cookies kann daher eine Vielzahl von Problemen verursachen, einschließlich [Datenschutz](/de/docs/Web/Privacy) Problemen, {{Glossary("Cross-site_scripting", "Cross-Site-Scripting (XSS)")}}-Angriffen, Cross-Site-Request-Forgery ([CSRF](/de/docs/Glossary/CSRF))-Angriffen und mehr.

## Lösung

Um die Verwundbarkeit Ihrer Website im Hinblick auf Cookies zu minimieren, sollten Sie den Zugriff auf Cookies so weit wie möglich einschränken. Dies kann durch eine sinnvolle Verwendung der folgenden Direktiven des [`Set-Cookie`](/de/docs/Web/HTTP/Headers/Set-Cookie) Headers erreicht werden:

- `Name`
  - : Cookie-Namen sollten mit `__Secure-` oder `__Host-` versehen werden, um zu verhindern, dass Cookies von unsicheren Quellen überschrieben werden.
    - Verwenden Sie `__Host-` für alle Cookies, die nur auf einer bestimmten Domain (ohne Subdomains) benötigt werden, bei der `Path` auf `/` gesetzt ist.
    - Verwenden Sie `__Secure-` für alle anderen Cookies, die von sicheren Ursprüngen ([HTTPS](/de/docs/Glossary/HTTPS)) gesendet werden.
- `Secure`
  - : Alle Cookies müssen mit der `Secure`-Direktive gesetzt werden, die anzeigt, dass sie nur über HTTPS gesendet werden sollten. [HTTP Strict Transport Security](/de/docs/Web/Security/Practical_implementation_guides/TLS#http_strict_transport_security_implementation) (HSTS) kann ebenfalls verwendet werden, um die Übertragung über HTTP zu verhindern, aber idealerweise sollte `Secure` auch bei Cookies gesetzt werden.
- `HttpOnly`
  - : Cookies, die keinen Zugriff von JavaScript benötigen, sollten die `HttpOnly`-Direktive gesetzt haben, um Zugriff zu blockieren, wie z.B. von {{domxref("Document.cookie")}}. Es ist besonders wichtig, dass Sitzungskennungen keinen JavaScript-Zugriff haben, um Angriffe wie CSRF zu verhindern.
- `Expires` und `Max-Age`
  - : Cookies sollten ablaufen, sobald sie nicht mehr benötigt werden. Sitzungskennungen im Besonderen sollten so schnell wie möglich ablaufen. `Expires` ist zu bevorzugen, es sei denn, Sie müssen Internet Explorer < 8 unterstützen, in diesem Fall verwenden Sie `Max-Age`.
    - `Expires`: Setzt ein absolutes Ablaufdatum für ein gegebenes Cookie.
    - `Max-Age`: Setzt ein relatives Ablaufdatum für ein gegebenes Cookie.
      > **Hinweis:** `Expires` ist schon länger verfügbar als `Max-Age`; jedoch ist `Max-Age` weniger fehleranfällig und hat Vorrang, wenn beide gesetzt sind. Der Grund dafür ist, dass beim Setzen eines `Expires`-Datums und einer Uhrzeit diese relativ zum Client sind, auf dem das Cookie gesetzt wird. Wenn der Server auf eine andere Zeit eingestellt ist, könnte das zu Fehlern führen.
- `Domain`
  - : Cookies sollten nur ein `Domain`-Attribut haben, wenn sie auf anderen Domains zugänglich sein müssen; dies sollte auf die restriktivste mögliche Domain gesetzt werden.
- `Path`
  - : Cookies sollten auf den restriktivsten möglichen `Path` gesetzt werden.
- `SameSite`

  - : Verbieten Sie das Senden von Cookies über Cross-Origin-Anfragen (zum Beispiel von {{htmlelement("img")}}-Elementen) mit `SameSite`. Sie sollten einen der folgenden zwei Werte verwenden:

    - `SameSite=Strict`: Senden Sie das Cookie nur in Same-Site-Kontexten (Navigierungen und andere Anfragen). Cookies werden in Same-Origin-Kontexten (z.B. Navigieren von `a.example.com` zu `b.example.com`), Cross-Site-Anfragen (z.B. Hotlinking) und Cross-Site-Navigation (z.B. beim Folgen eines Links von einer anderen Webseite) weggelassen. Dies ist eine sehr strenge Einstellung, bietet jedoch einen starken Schutz gegen [CSRF](/de/docs/Web/Security/Practical_implementation_guides/CSRF_prevention)-Angriffe, also verwenden Sie diesen Wert, wenn möglich.
    - `SameSite=Lax`: Senden Sie das Cookie in Same-Site-Anfragen und bei der Navigation _zu_ Ihrer Website. Dies sollte verwendet werden, wenn `Strict` zu restriktiv ist.

    Beide oben genannten Werte sind nützlich, um gegen [Clickjacking](/de/docs/Glossary/Clickjacking)-Angriffe zu schützen, in Fällen, die davon abhängen, dass der Benutzer authentifiziert ist.

    > [!NOTE]
    > Theoretisch sollte `SameSite=Strict` nützlicher sein, als es in der Praxis ist. Es bricht oft die Navigation — zum Beispiel, wenn Benutzer auf einen Link zu einer Website klicken, auf der sie bereits eingeloggt sind (z.B. ein gültiges Sitzungs-Cookie ist gesetzt), scheint es, dass sie nicht eingeloggt sind, weil der Browser das Sitzungs-Cookie absichtlich weggelassen hat. Der beste Mittelweg ist, `SameSite=Strict` nur bei Tokens zu verwenden, bei denen CSRF ein Anliegen ist, oder `SameSite=Strict` überall zu verwenden, aber die Seite neu zu laden und einen Cookie-Check in JavaScript durchzuführen, wenn es Hinweise darauf gibt, dass der Benutzer eingeloggt ist, aber erforderliche Cookies nicht gesendet werden.

## Beispiele

Setzen Sie ein Sitzungskennungscookie, das nur auf dem aktuellen Host zugänglich ist und abläuft, wenn der Benutzer seinen Browser schließt:

```http
Set-Cookie: MOZSESSIONID=980e5da39d4b472b9f504cac9; Path=/; Secure; HttpOnly
```

Verwenden Sie das Präfix `__Secure-`, um eine Sitzungskennung für alle `example.org`-Sites zu setzen, die nach 30 Tagen abläuft. Dieses Cookie wird nicht Cross-Origin gesendet, sondern wird gesendet, wenn von einer anderen Seite zu einer beliebigen Seite navigiert wird:

```http
Set-Cookie: __Secure-MOZSESSIONID=7307d70a86bd4ab5a00499762; Max-Age=2592000; Domain=example.org; Path=/; Secure; HttpOnly; SameSite=Lax
```

Setzen Sie ein langlebiges Cookie für den aktuellen Host, das von JavaScript zugänglich ist, wenn der Benutzer die Nutzungsbedingungen akzeptiert. Dieses Cookie wird gesendet, wenn von einer anderen Seite auf Ihre Seite navigiert wird, zum Beispiel durch Klicken auf einen Link:

```http
Set-Cookie: __Host-ACCEPTEDTOS=true; Expires=Fri, 31 Dec 9999 23:59:59 GMT; Path=/; Secure; SameSite=Lax
```

Verwenden Sie eine Sitzungskennung für eine sichere (HTTPS) Site. Sie wird nicht von Cross-Origin-Anfragen gesendet, noch wenn von einer anderen Seite zu Ihrer Site navigiert wird. In Verbindung mit anderen Anti-CSRF-Maßnahmen bietet dies eine sehr starke Verteidigung Ihrer Site gegen CSRF-Angriffe:

```http
Set-Cookie: __Host-BMOSESSIONID=YnVnemlsbGE=; Max-Age=2592000; Path=/; Secure; HttpOnly; SameSite=Strict
```

## Siehe auch

- [Verwendung von HTTP-Cookies](/de/docs/Web/HTTP/Cookies)
- [Drittanbieter-Cookies](/de/docs/Web/Privacy/Third-party_cookies)
- [`Document.cookie`: Sicherheit](/de/docs/Web/API/Document/cookie#security)
- [RFC 6265 (HTTP Cookies)](https://datatracker.ietf.org/doc/html/rfc6265) (2011)
