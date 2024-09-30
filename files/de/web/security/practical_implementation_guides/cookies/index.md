---
title: Sichere Cookie-Konfiguration
slug: Web/Security/Practical_implementation_guides/Cookies
l10n:
  sourceCommit: 5c000c8621145c6915f3d545b505c216317bc64a
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}

Begrenzen Sie den Zugriff auf Cookies so weit wie möglich.

## Problem

Cookies enthalten häufig Sitzungskennungen oder andere sensible Informationen. Unbefugter Zugriff auf Cookies kann daher eine Reihe von Problemen verursachen, einschließlich [Datenschutz](/de/docs/Web/Privacy)-Problemen, ([Cross-site Scripting (XSS)](/de/docs/Glossary/Cross-site_scripting)) Angriffe, Cross-Site-Request-Forgery ([CSRF](/de/docs/Glossary/CSRF)) Angriffe und mehr.

## Lösung

Um die Anfälligkeiten von Cookies auf Ihrer Website zu minimieren, begrenzen Sie den Zugriff auf Cookies so weit wie möglich. Dies kann durch sinnvollen Einsatz der folgenden Direktiven des [`Set-Cookie`](/de/docs/Web/HTTP/Headers/Set-Cookie) Headers erreicht werden:

- `Name`
  - : Cookienamen sollten entweder mit `__Secure-` oder `__Host-` versehen werden, um zu verhindern, dass Cookies von unsicheren Quellen überschrieben werden.
    - Verwenden Sie `__Host-` für alle Cookies, die nur auf einer bestimmten Domain (keine Unterdomänen) benötigt werden, wobei `Path` auf `/` gesetzt ist.
    - Verwenden Sie `__Secure-` für alle anderen Cookies, die von sicheren Ursprüngen ([HTTPS](/de/docs/Glossary/HTTPS)) gesendet werden.
- `Secure`
  - : Alle Cookies müssen mit der `Secure`-Direktive gesetzt sein, was anzeigt, dass sie nur über HTTPS gesendet werden sollten. [HTTP Strict Transport Security](/de/docs/Web/Security/Practical_implementation_guides/TLS#http_strict_transport_security_implementation) (HSTS) kann auch verwendet werden, um die Übertragung über HTTP zu verhindern, aber idealerweise sollte auch `Secure` bei Cookies gesetzt werden.
- `HttpOnly`
  - : Cookies, die keinen Zugriff von JavaScript erfordern, sollten die `HttpOnly`-Direktive gesetzt haben, um den Zugriff, wie zum Beispiel von [`Document.cookie`](/de/docs/Web/API/Document/cookie), zu blockieren. Es ist besonders wichtig, dass Sitzungskennungen keinen JavaScript-Zugriff haben, um Angriffe wie CSRF zu verhindern.
- `Expires` und `Max-Age`
  - : Cookies sollten ablaufen, sobald sie nicht mehr benötigt werden. Besonders Sitzungskennungen sollten so schnell wie möglich ablaufen. `Expires` wird bevorzugt, es sei denn, Sie müssen IE < 8 unterstützen, in diesem Fall verwenden Sie `Max-Age`.
    - `Expires`: Setzt ein absolutes Ablaufdatum für ein gegebenes Cookie.
    - `Max-Age`: Setzt ein relatives Ablaufdatum für ein gegebenes Cookie.
      > **Hinweis:** `Expires` ist länger verfügbar als `Max-Age`; jedoch ist `Max-Age` weniger fehleranfällig und hat Vorrang, wenn beide gesetzt sind. Der Grund dafür ist, dass beim Setzen eines `Expires`-Datum und -Zeitpunkt diese relativ zu dem Client sind, auf dem das Cookie gesetzt wird. Wenn der Server auf eine andere Zeit eingestellt ist, könnte dies Fehler verursachen.
- `Domain`
  - : Cookies sollten nur ein `Domain`-Attribut haben, wenn sie auf anderen Domains zugänglich sein müssen; dies sollte auf die restriktivste Domain eingestellt werden.
- `Path`
  - : Cookies sollten auf den restriktivsten `Path` gesetzt werden.
- `SameSite`

  - : Das Senden von Cookies über Cross-Origin-Anfragen (zum Beispiel von {{htmlelement("img")}}-Elementen) mit `SameSite` untersagen. Sie sollten einen der folgenden zwei Werte verwenden:

    - `SameSite=Strict`: Sendet das Cookie nur in gleichseitigen Kontexten (Navigationen und andere Anfragen). Cookies werden in gleicher Herkunft (z.B. wenn `a.example.com` zu `b.example.com` navigiert wird), Cross-Site-Anfragen (z.B. Hotlinking) und bei Cross-Site-Navigation (z.B. wenn ein Link von einer anderen Webseite verfolgt wird) ausgeschlossen. Dies ist eine sehr strikte Einstellung, bietet jedoch einen starken [CSRF](/de/docs/Web/Security/Practical_implementation_guides/CSRF_prevention) Schutz, also verwenden Sie diesen Wert, wenn möglich.
    - `SameSite=Lax`: Sendet das Cookie in gleichseitigen Anfragen und bei der Navigation _zu_ Ihrer Website. Dies sollte verwendet werden, wenn `Strict` zu restriktiv ist.

    Beide oben genannten Werte sind nützlich, um [Clickjacking](/de/docs/Glossary/Clickjacking) Angriffe abzuwehren, in Fällen, die davon abhängen, dass der Benutzer authentifiziert ist.

    > [!NOTE]
    > Theoretisch sollte `SameSite=Strict` nützlicher sein, als es in der Praxis ist. Es bricht oft Navigationen – zum Beispiel, wenn Benutzer auf einen Link zu einer Website klicken, auf der sie bereits angemeldet sind (d.h. ein gültiges Sitzungscookie ist gesetzt), erscheinen sie als nicht angemeldet, da der Browser das Sitzungscookie absichtlich weggelassen hat. Der beste Mittelweg ist, `SameSite=Strict` nur bei Tokens zu verwenden, wo CSRF ein Anliegen ist oder `SameSite=Strict` überall zu verwenden, aber die Seite neu zu laden und einen Cookie-Check in JavaScript durchzuführen, wenn ein Hinweis darauf besteht, dass der Benutzer angemeldet ist, aber die erforderlichen Cookies nicht gesendet werden.

## Beispiele

Setzen Sie ein Sitzungskennzeichnungs-Cookie, das nur auf dem aktuellen Host zugänglich ist und abläuft, wenn der Benutzer seinen Browser schließt:

```http
Set-Cookie: MOZSESSIONID=980e5da39d4b472b9f504cac9; Path=/; Secure; HttpOnly
```

Verwenden Sie das Präfix `__Secure-`, um eine Sitzungskennung für alle `example.org`-Seiten zu setzen, die nach 30 Tagen abläuft. Dieses Cookie wird bei Cross-Origin-Anfragen nicht gesendet, aber beim Navigieren zu einer beliebigen Seite von einer anderen Seite gesendet:

```http
Set-Cookie: __Secure-MOZSESSIONID=7307d70a86bd4ab5a00499762; Max-Age=2592000; Domain=example.org; Path=/; Secure; HttpOnly; SameSite=Lax
```

Setzen Sie ein langlebiges Cookie für den aktuellen Host, das von JavaScript zugänglich ist, wenn der Benutzer die Nutzungsbedingungen akzeptiert. Dieses Cookie wird beim Navigieren zu Ihrer Seite von einer anderen Seite gesendet, etwa durch Klicken auf einen Link:

```http
Set-Cookie: __Host-ACCEPTEDTOS=true; Expires=Fri, 31 Dec 9999 23:59:59 GMT; Path=/; Secure; SameSite=Lax
```

Verwenden Sie eine Sitzungskennung für eine sichere (HTTPS) Seite. Sie wird nicht bei Cross-Origin-Anfragen gesendet, noch wenn Sie von einer anderen Seite zu Ihrer Seite navigieren. In Verbindung mit anderen Anti-CSRF-Maßnahmen bietet dies einen sehr starken Schutz für Ihre Seite gegen CSRF-Angriffe:

```http
Set-Cookie: __Host-BMOSESSIONID=YnVnemlsbGE=; Max-Age=2592000; Path=/; Secure; HttpOnly; SameSite=Strict
```

## Siehe auch

- [Verwendung von HTTP-Cookies](/de/docs/Web/HTTP/Cookies)
- [Drittanbieter-Cookies](/de/docs/Web/Privacy/Third-party_cookies)
- [`Document.cookie`: Sicherheit](/de/docs/Web/API/Document/cookie#security)
- [RFC 6265 (HTTP Cookies)](https://datatracker.ietf.org/doc/html/rfc6265) (2011)
