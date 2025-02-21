---
title: Sichere Cookie-Konfiguration
slug: Web/Security/Practical_implementation_guides/Cookies
l10n:
  sourceCommit: 775df1c62a1cbe555c4374ff9122d4ef15bd6f60
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}

Beschränken Sie den Zugriff auf Cookies so weit wie möglich.

## Problem

Cookies enthalten oft Sitzungskennungen oder andere sensible Informationen. Unbefugter Zugriff auf Cookies kann daher eine Vielzahl von Problemen verursachen, einschließlich [Datenschutz](/de/docs/Web/Privacy)-Probleme, ({{Glossary("Cross-site_scripting", "Cross-Site-Scripting (XSS)")}}) Angriffe, Cross-Site-Request-Forgery ({{Glossary("CSRF", "CSRF")}}) Angriffe und mehr.

## Lösung

Um das Risiko von Cookie-Schwachstellen auf Ihrer Website zu minimieren, sollten Sie den Zugriff auf Cookies so weit wie möglich einschränken. Dies kann durch eine sinnvolle Nutzung der folgenden Direktiven des [`Set-Cookie`](/de/docs/Web/HTTP/Headers/Set-Cookie)-Headers erreicht werden:

- `Name`
  - : Cookie-Namen sollten mit `__Secure-` oder `__Host-` beginnen, um zu verhindern, dass Cookies von unsicheren Quellen überschrieben werden.
    - Verwenden Sie `__Host-` für alle Cookies, die nur auf einer bestimmten Domain (keine Subdomains) benötigt werden, wobei `Path` auf `/` gesetzt ist.
    - Verwenden Sie `__Secure-` für alle anderen Cookies, die von sicheren Ursprüngen ({{Glossary("HTTPS", "HTTPS")}}) gesendet werden.
- `Secure`
  - : Alle Cookies müssen mit der `Secure`-Direktive gesetzt werden, was anzeigt, dass sie nur über HTTPS gesendet werden sollen. [HTTP Strict Transport Security](/de/docs/Web/Security/Practical_implementation_guides/TLS#http_strict_transport_security_implementation) (HSTS) kann ebenfalls verwendet werden, um die Übertragung über HTTP zu verhindern, aber idealerweise sollte `Secure` auch bei Cookies gesetzt werden.
- `HttpOnly`
  - : Cookies, die keinen JavaScript-Zugriff erfordern, sollten die `HttpOnly`-Direktive gesetzt haben, um Zugriff zu blockieren, wie z.B. von [`Document.cookie`](/de/docs/Web/API/Document/cookie). Es ist besonders wichtig, dass Sitzungskennungen keinen JavaScript-Zugriff haben, um Angriffe wie CSRF zu verhindern.
- `Expires` und `Max-Age`
  - : Cookies sollten ablaufen, sobald sie nicht mehr benötigt werden. Sitzungskennungen sollten insbesondere so schnell wie möglich ablaufen.
    - `Expires`: Setzt ein absolutes Ablaufdatum für ein gegebenes Cookie.
    - `Max-Age`: Setzt ein relatives Ablaufdatum für ein gegebenes Cookie.
      > **Hinweis:** `Expires` ist länger verfügbar als `Max-Age`; jedoch ist `Max-Age` weniger fehleranfällig und hat Vorrang, wenn beide gesetzt sind. Der Grund dafür ist, dass wenn Sie ein `Expires`-Datum und -Uhrzeit setzen, diese relativ zum Client sind, auf dem das Cookie gesetzt wird. Wenn der Server auf eine andere Zeit eingestellt ist, kann dies zu Fehlern führen.
- `Domain`
  - : Cookies sollten nur eine `Domain` gesetzt haben, wenn sie auf anderen Domains zugänglich sein müssen; dies sollte auf die restriktivste Domain eingestellt sein.
- `Path`
  - : Cookies sollten auf den restriktivsten `Pfad` möglich gesetzt werden.
- `SameSite`

  - : Verbieten Sie das Senden von Cookies über Cross-Origin-Anfragen (zum Beispiel von {{htmlelement("img")}}-Elementen) mit `SameSite`. Sie sollten einen der folgenden beiden Werte verwenden:

    - `SameSite=Strict`: Senden Sie das Cookie nur in Same-Site-Kontexten (Navigationen und andere Anfragen). Cookies werden in Cross-Site-Anfragen (z.B. beim Einbetten von Bildern oder anderen Ressourcen von anderen Seiten) und Cross-Site-Navigation (z.B. beim Folgen eines Links von einer anderen Webseite) weggelassen. Dies ist eine sehr strenge Einstellung, bietet jedoch einen starken Schutz gegen [CSRF](/de/docs/Web/Security/Practical_implementation_guides/CSRF_prevention), daher verwenden Sie diesen Wert, wenn möglich.
    - `SameSite=Lax`: Senden Sie das Cookie bei Same-Site-Anfragen und bei der Navigation _zu_ Ihrer Website. Dies sollte verwendet werden, wenn `Strict` zu restriktiv ist.

    Beide oben genannten Werte sind nützlich, um sich gegen [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking)-Angriffe zu schützen, in Fällen, die davon abhängen, dass der Benutzer authentifiziert ist.

    > [!NOTE]
    > In der Theorie sollte `SameSite=Strict` nützlicher sein, als es in der Praxis ist. Es bricht oft Navigationen — zum Beispiel, wenn Benutzer auf einen Link zu einer Website klicken, auf der sie bereits angemeldet sind (d.h. ein gültiges Sitzungs-Cookie gesetzt ist), erscheinen sie nicht angemeldet, weil der Browser das Sitzungs-Cookie absichtlich weggelassen hat. Der beste Mittelweg ist, `SameSite=Strict` nur auf Token zu verwenden, bei denen CSRF ein Problem darstellt, oder `SameSite=Strict` überall zu verwenden, aber die Seite neu zu laden und einen Cookie-Check im JavaScript durchzuführen, wenn es Hinweise darauf gibt, dass der Benutzer eingeloggt ist, aber erforderliche Cookies nicht gesendet werden.

## Beispiele

Legen Sie ein Cookie mit einer Sitzungskennung fest, das nur auf dem aktuellen Host zugänglich ist und abläuft, wenn der Benutzer seinen Browser schließt:

```http
Set-Cookie: MOZSESSIONID=980e5da39d4b472b9f504cac9; Path=/; Secure; HttpOnly
```

Verwenden Sie das `__Secure-`-Präfix, um eine Sitzungskennung für alle `example.org`-Seiten festzulegen, die nach 30 Tagen abläuft. Dieses Cookie wird nicht Cross-Origin gesendet, aber beim Navigieren zu einer beliebigen Site von einer anderen Site gesendet:

```http
Set-Cookie: __Secure-MOZSESSIONID=7307d70a86bd4ab5a00499762; Max-Age=2592000; Domain=example.org; Path=/; Secure; HttpOnly; SameSite=Lax
```

Setzen Sie ein langfristiges Cookie für den aktuellen Host, das von JavaScript zugänglich ist, wenn der Benutzer den Nutzungsbedingungen zustimmt. Dieses Cookie wird beim Navigieren zu Ihrer Seite von einer anderen Seite gesendet, beispielsweise beim Klicken auf einen Link:

```http
Set-Cookie: __Host-ACCEPTEDTOS=true; Expires=Fri, 31 Dec 9999 23:59:59 GMT; Path=/; Secure; SameSite=Lax
```

Verwenden Sie eine Sitzungskennung für eine sichere (HTTPS) Site. Sie wird nicht von Cross-Origin-Anfragen gesendet, noch beim Navigieren zu Ihrer Seite von einer anderen Seite. In Verbindung mit anderen Anti-CSRF-Maßnahmen bietet dies einen sehr starken Schutz für Ihre Site gegen CSRF-Angriffe:

```http
Set-Cookie: __Host-BMOSESSIONID=YnVnemlsbGE=; Max-Age=2592000; Path=/; Secure; HttpOnly; SameSite=Strict
```

## Siehe auch

- [Verwendung von HTTP-Cookies](/de/docs/Web/HTTP/Cookies)
- [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies)
- [`Document.cookie`: Sicherheit](/de/docs/Web/API/Document/cookie#security)
- [RFC 6265 (HTTP-Cookies)](https://datatracker.ietf.org/doc/html/rfc6265) (2011)
