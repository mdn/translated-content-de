---
title: Referer header
short-title: Referer
slug: Web/HTTP/Reference/Headers/Referer
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}

Der HTTP-**`Referer`**-{{Glossary("request_header", "Request-Header")}} enthält die absolute oder teilweise Adresse, von der aus eine Ressource angefordert wurde. Der `Referer`-Header ermöglicht es einem Server, verweisende Seiten zu identifizieren, von denen Menschen kommen, oder auf denen angeforderte Ressourcen verwendet werden. Diese Daten können für Analysen, Logging, optimiertes Caching und mehr verwendet werden.

Wenn Sie auf einen Link klicken, enthält der `Referer` die Adresse der Seite, die den Link enthält. Wenn Sie Ressourcenzugriffe auf eine andere Domain anfordern, enthält der `Referer` die Adresse der Seite, die die angeforderte Ressource verwendet.

Der `Referer`-Header kann einen _Origin_, _Path_ und _Querystring_ enthalten und darf keine [URL-Fragmente](/de/docs/Web/URI/Reference/Fragment) (d.h. `#section`) oder Informationen zu `username:password` enthalten. Die _Referrer-Policy_ der Anfrage definiert, welche Daten einbezogen werden können. Siehe {{HTTPHeader("Referrer-Policy")}} für mehr [Informationen](/de/docs/Web/HTTP/Reference/Headers/Referrer-Policy#directives) und [Beispiele](/de/docs/Web/HTTP/Reference/Headers/Referrer-Policy#examples).

Der `Referer` sollte auch in Anfragen gesendet werden, die einer {{httpheader("Refresh")}}-Antwort folgen (oder einem entsprechenden [`<meta http-equiv="refresh" content="...">`](/de/docs/Web/HTML/Reference/Elements/meta#http-equiv)), die eine Navigation zu einer neuen Seite verursacht, falls dies durch die Referrer-Policy erlaubt wird.

> [!NOTE]
> Der Header-Name "Referer" ist tatsächlich eine falsche Schreibweise des Wortes "Referrer".
> Weitere Einzelheiten finden Sie unter [HTTP referer auf Wikipedia](https://en.wikipedia.org/wiki/HTTP_referer).

> [!WARNING]
> Dieser Header kann unerwünschte Folgen für die Sicherheit und Privatsphäre der Nutzer haben.
> Weitere Informationen und Hinweise zur Minderung finden Sie unter [Referer-Header: Privacy and Security Concerns](/de/docs/Web/Security/Referer_header:_privacy_and_security_concerns).

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
  - : Eine absolute oder teilweise Adresse der Webseite, die die Anfrage stellt. URL-Fragmente (d.h. `#section`) und Benutzerinformationen (d.h. `username:password` in `https://username:password@example.com/foo/bar/`) werden nicht einbezogen. Abhängig von der [Referrer-Policy](/de/docs/Web/HTTP/Reference/Headers/Referrer-Policy#directives) können Origin, Path und Query-String einbezogen werden.

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
