---
title: Referer
slug: Web/HTTP/Headers/Referer
l10n:
  sourceCommit: 4d9320f9857fb80fef5f3fe78e3d09b06eb0ebbd
---

{{HTTPSidebar}}

Der HTTP-**`Referer`**-{{Glossary("request_header", "Request-Header")}} enthält die absolute oder teilweise Adresse, von der eine Ressource angefordert wurde.
Der `Referer`-Header ermöglicht es einem Server, verweisende Seiten zu identifizieren, von denen Benutzer kommen, oder wo angeforderte Ressourcen verwendet werden.
Diese Daten können für Analysen, Protokollierung, optimiertes Caching und mehr verwendet werden.

Wenn Sie auf einen Link klicken, enthält der `Referer` die Adresse der Seite, die den Link enthält.
Wenn Sie Ressourcenzugriffe auf eine andere Domain durchführen, enthält der `Referer` die Adresse der Seite, die die angeforderte Ressource verwendet.

Der `Referer`-Header kann eine _Origin_, einen _Pfad_ und eine _Querystring_ enthalten, jedoch keine [URL-Fragment-Informationen](/de/docs/Web/URI/Reference/Fragment) (d. h. `#section`) oder Informationen wie `username:password`.
Die _Referrer-Policy_ der Anfrage definiert, welche Daten enthalten sein können. Siehe {{HTTPHeader("Referrer-Policy")}} für weitere [Informationen](/de/docs/Web/HTTP/Headers/Referrer-Policy#directives) und [Beispiele](/de/docs/Web/HTTP/Headers/Referrer-Policy#examples).

> [!NOTE]
> Der Header-Name "referer" ist tatsächlich ein Schreibfehler des Wortes "referrer".
> Weitere Details finden Sie unter [HTTP referer auf Wikipedia](https://en.wikipedia.org/wiki/HTTP_referer).

> [!WARNING]
> Dieser Header kann unerwünschte Folgen für die Sicherheit und Privatsphäre der Benutzer haben.
> Weitere Informationen und Hinweise zur Abmilderung finden Sie unter [Referer-Header: Sicherheits- und Datenschutzbedenken](/de/docs/Web/Security/Referer_header:_privacy_and_security_concerns).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Request-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
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
  - : Eine absolute oder teilweise Adresse der Webseite, die die Anfrage stellt.
    URL-Fragment-Informationen (d. h. `#section`) und Benutzerinformationen (z. B. `username:password` in `https://username:password@example.com/foo/bar/`) sind nicht enthalten.
    Origin, Pfad und Query-String können abhängig von der [Referrer-Policy](/de/docs/Web/HTTP/Headers/Referrer-Policy#directives) enthalten sein.

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
- [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy)
- [Fetch](/de/docs/Web/API/Fetch_API): [`Request.referrerPolicy`](/de/docs/Web/API/Request/referrerPolicy)
- [Tighter Control Over Your Referrers – Mozilla Security Blog](https://blog.mozilla.org/security/2015/01/21/meta-referrer/)
- [HTTP referer auf Wikipedia](https://en.wikipedia.org/wiki/HTTP_referer)
