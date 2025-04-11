---
title: Referer
slug: Web/HTTP/Reference/Headers/Referer
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTTPSidebar}}

Der HTTP **`Referer`** {{Glossary("request_header", "Request-Header")}} enthält die absolute oder partielle Adresse, von der eine Ressource angefordert wurde. Der `Referer`-Header ermöglicht es einem Server, die verweisenden Seiten zu identifizieren, von denen die Menschen kommen oder wo die angeforderten Ressourcen genutzt werden. Diese Daten können für Analysen, Protokollierungen, optimiertes Caching und mehr verwendet werden.

Wenn Sie auf einen Link klicken, enthält der `Referer` die Adresse der Seite, die den Link enthält. Bei Anfragen von Ressourcen zu einer anderen Domain enthält der `Referer` die Adresse der Seite, die die angeforderte Ressource nutzt.

Der `Referer`-Header kann einen _Ursprung_, _Pfad_ und _Querystring_ enthalten und darf keine [URL-Fragmente](/de/docs/Web/URI/Reference/Fragment) (d.h. `#section`) oder `username:password` Informationen enthalten. Die _Referrer-Policy_ der Anfrage definiert die Daten, die eingeschlossen werden können. Siehe {{HTTPHeader("Referrer-Policy")}} für mehr [Informationen](/de/docs/Web/HTTP/Reference/Headers/Referrer-Policy#directives) und [Beispiele](/de/docs/Web/HTTP/Reference/Headers/Referrer-Policy#examples).

Der `Referer` sollte auch bei Anfragen gesendet werden, die einer {{httpheader("Refresh")}}-Antwort (oder einem äquivalenten [`<meta http-equiv="refresh" content="...">`](/de/docs/Web/HTML/Reference/Elements/meta#http-equiv)) folgen, die eine Navigation zu einer neuen Seite bewirkt, sofern die Referrer-Policy dies erlaubt.

> [!NOTE]
> Der Header-Name "referer" ist tatsächlich ein Rechtschreibfehler des Wortes "referrer". Siehe [HTTP referer auf Wikipedia](https://en.wikipedia.org/wiki/HTTP_referer) für weitere Details.

> [!WARNING]
> Dieser Header kann unerwünschte Konsequenzen für die Sicherheit und Privatsphäre der Benutzer haben. Siehe [Referer-Header: Sicherheits- und Datenschutzbedenken](/de/docs/Web/Security/Referer_header:_privacy_and_security_concerns) für mehr Informationen und Hinweise zur Minderung.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Request-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Request-Header")}}</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Referer: <url>
```

## Direktiven

- `<url>`
  - : Eine absolute oder partielle Adresse der Webseite, die die Anfrage macht. URL-Fragmente (d.h. `#section`) und Benutzerinformationen (d.h. `username:password` in `https://username:password@example.com/foo/bar/`) sind nicht enthalten. Ursprung, Pfad und Query-String können enthalten sein, abhängig von der [Referrer-Policy](/de/docs/Web/HTTP/Reference/Headers/Referrer-Policy#directives).

## Beispiele

```http
Referer: https://developer.mozilla.org/en-US/docs/Web/JavaScript
Referer: https://example.com/page?q=123
Referer: https://example.com/
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Referrer-Policy")}}
- [Same-origin-Policy](/de/docs/Web/Security/Same-origin_policy)
- [Fetch](/de/docs/Web/API/Fetch_API): [`Request.referrerPolicy`](/de/docs/Web/API/Request/referrerPolicy)
- [Tighter Control Over Your Referrers – Mozilla Security Blog](https://blog.mozilla.org/security/2015/01/21/meta-referrer/)
- [HTTP referer auf Wikipedia](https://en.wikipedia.org/wiki/HTTP_referer)
