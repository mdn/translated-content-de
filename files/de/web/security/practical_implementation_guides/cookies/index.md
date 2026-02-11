---
title: Sichere Cookie-Konfiguration
slug: Web/Security/Practical_implementation_guides/Cookies
l10n:
  sourceCommit: c8b9fe22c3f68116dd3aaf4ae9e7b88709c7830d
---

Beschränken Sie den Zugriff auf Cookies so weit wie möglich.

## Problem

Cookies enthalten häufig Sitzungs-IDs oder andere sensible Informationen. Unbefugter Zugriff auf Cookies kann daher eine Vielzahl von Problemen verursachen, darunter [Privatsphäre](/de/docs/Web/Privacy) Probleme, [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking) Angriffe, [Cross-Site-Request-Forgery (CSRF)](/de/docs/Web/Security/Attacks/CSRF) Angriffe und mehr.

## Lösung

Um das Risiko von Cookie-Schwachstellen auf Ihrer Seite zu minimieren, beschränken Sie den Zugriff auf Cookies so weit wie möglich, indem Sie die folgenden Cookie-Attribute beim Senden des [`Set-Cookie`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie) Antwort-Headers einschließen:

- `Name`
  - : Präfixen Sie Cookienamen mit `__Secure-` oder `__Host-`, um zu verhindern, dass Cookies von unsicheren Quellen überschrieben werden.
    - Verwenden Sie `__Host-` für alle Cookies, die nur auf einer bestimmten Domain (keine Subdomains) erforderlich sind, bei denen `Path` auf `/` gesetzt ist.
    - Verwenden Sie `__Secure-` für alle anderen Cookies.
- `Secure`
  - : Setzen Sie immer das `Secure` Attribut, um anzuzeigen, dass das Cookie nur über HTTPS gesendet werden sollte.
- `HttpOnly`
  - : Setzen Sie das `HttpOnly` Attribut für alle Cookies, auf die JavaScript keinen Zugriff benötigt (zum Beispiel über [`Document.cookie`](/de/docs/Web/API/Document/cookie)).

    Insbesondere Cookies, die Sitzungs-IDs enthalten, sollten über keinen JavaScript-Zugriff verfügen, um zu verhindern, dass ein [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS) Angriff Sitzungs-IDs stiehlt.

- `Expires` und `Max-Age`
  - : Cookies sollten ablaufen, sobald sie nicht mehr benötigt werden. Speziell Sitzungs-IDs sollten so schnell wie möglich ablaufen.
    - `Expires`: Setzt ein absolutes Ablaufdatum für ein gegebenes Cookie.
    - `Max-Age`: Setzt ein relatives Ablaufdatum für ein gegebenes Cookie.

      > [!NOTE]
      > `Expires` ist schon länger verfügbar als `Max-Age`; jedoch ist `Max-Age` weniger fehleranfällig und hat Vorrang, wenn beide gesetzt sind. Der Grund dafür ist, dass, wenn Sie ein `Expires` Datum und Uhrzeit setzen, diese relativ zum Client sind, auf dem das Cookie gesetzt wird. Wenn der Server auf eine andere Zeit eingestellt ist, kann dies zu Fehlern führen.

      Wenn weder `Expires` noch `Max-Age` gesetzt sind, wird das Cookie behalten, bis der Benutzer seinen Browser schließt, und dann verworfen.

- `Domain`
  - : Setzen Sie das `Domain` Attribut nur, wenn das Cookie auf anderen Domains zugänglich sein muss, und setzen Sie es in diesem Fall auf die restriktivste mögliche Domain.
- `Path`
  - : Setzen Sie den restriktivsten möglichen `Path`.
- `SameSite`
  - : Setzen Sie das [`SameSite`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) Attribut auf `Strict` oder `Lax`, um die Übertragung von Cookies bei Anfragen, die von einer anderen {{Glossary("site", "Site")}} stammen, einzuschränken.

    Dies ist eine Teilverteidigung gegen [CSRF](/de/docs/Web/Security/Attacks/CSRF#defense_in_depth_samesite_cookies), [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking#clickjacking_defenses), und einige [Cross-Site Leak](/de/docs/Web/Security/Attacks/XS-Leaks#samesite_cookies) Angriffe.

## Beispiele

Setzen Sie ein Sitzungs-Id-Cookie, das nur auf dem aktuellen Host zugänglich ist und abläuft, wenn der Benutzer seinen Browser schließt:

```http
Set-Cookie: MOZSESSIONID=980e5da39d4b472b9f504cac9; Path=/; Secure; HttpOnly
```

Verwenden Sie das `__Secure-` Präfix, um eine Sitzungs-ID für alle `example.org` Seiten zu setzen, die nach 30 Tagen abläuft. Dieses Cookie wird in den meisten Cross-Site-Anfragen nicht eingeschlossen, aber bei Navigierungen zu Ihrer Seite von einer anderen Seite, wie beim Klicken auf einen Link, inkludiert:

```http
Set-Cookie: __Secure-MOZSESSIONID=7307d70a86bd4ab5a00499762; Max-Age=2592000; Domain=example.org; Path=/; Secure; HttpOnly; SameSite=Lax
```

Setzen Sie ein langlebiges Cookie für den aktuellen Host, das über JavaScript zugänglich ist, wenn der Benutzer den Geschäftsbedingungen zustimmt. Dieses Cookie wird in den meisten Cross-Site-Anfragen nicht eingeschlossen, aber bei Navigierungen zu Ihrer Seite von einer anderen Seite, wie beim Klicken auf einen Link, inkludiert:

```http
Set-Cookie: __Host-ACCEPTEDTOS=true; Expires=Fri, 31 Dec 9999 23:59:59 GMT; Path=/; Secure; SameSite=Lax
```

Setzen Sie ein Cookie, das eine Sitzungs-ID enthält. Es wird von keiner Cross-Site-Anfrage, einschließlich Navigierungen zu Ihrer Seite von einer anderen Seite, gesendet:

```http
Set-Cookie: __Host-BMOSESSIONID=YnVnemlsbGE=; Max-Age=2592000; Path=/; Secure; HttpOnly; SameSite=Strict
```

## Siehe auch

- [Verwendung von HTTP-Cookies](/de/docs/Web/HTTP/Guides/Cookies)
- [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies)
- [`Document.cookie`: Sicherheit](/de/docs/Web/API/Document/cookie#security)
- [RFC 6265 (HTTP Cookies)](https://datatracker.ietf.org/doc/html/rfc6265) (2011)
