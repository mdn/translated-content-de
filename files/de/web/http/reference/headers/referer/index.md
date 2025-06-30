---
title: Referer header
short-title: Referer
slug: Web/HTTP/Reference/Headers/Referer
l10n:
  sourceCommit: a33c2c8081a1df867a0a334afc560057b2124bad
---

{{HTTPSidebar}}

Der HTTP **`Referer`** {{Glossary("request_header", "Anforderungsheader")}} enthält die absolute oder teilweise Adresse, von der aus eine Ressource angefordert wurde.
Der `Referer`-Header ermöglicht es einem Server, verweisende Seiten zu identifizieren, von denen Nutzer kommen, oder wo angeforderte Ressourcen verwendet werden.
Diese Daten können für Analysen, Protokollierung, optimiertes Caching und mehr genutzt werden.

Wenn Sie auf einen Link klicken, enthält der `Referer` die Adresse der Seite, die den Link enthält.
Wenn Sie Anfragen für Ressourcen zu einer anderen Domain machen, enthält der `Referer` die Adresse der Seite, die die angeforderte Ressource nutzt.

Der `Referer`-Header kann einen _Ursprung_ (origin), _Pfad_ (path) und _Abfragezeichenfolge_ (querystring) enthalten, und darf keine [URL-Fragmente](/de/docs/Web/URI/Reference/Fragment) (z. B. `#section`) oder `username:password`-Informationen enthalten.
Die _Referrer-Policy_ der Anfrage definiert die Daten, die enthalten sein können. Siehe {{HTTPHeader("Referrer-Policy")}} für mehr [Informationen](/de/docs/Web/HTTP/Reference/Headers/Referrer-Policy#directives) und [Beispiele](/de/docs/Web/HTTP/Reference/Headers/Referrer-Policy#examples).

Der `Referer` sollte auch in Anfragen gesendet werden, die einer {{httpheader("Refresh")}}-Antwort folgen (oder einem entsprechenden [`<meta http-equiv="refresh" content="...">`](/de/docs/Web/HTML/Reference/Elements/meta/http-equiv)), das eine Navigation zu einer neuen Seite verursacht, wenn dies durch die Referrer-Policy erlaubt ist.

> [!NOTE]
> Der Header-Name "referer" ist tatsächlich ein Rechtschreibfehler des Wortes "referrer".
> Weitere Details finden Sie im Artikel [HTTP referer auf Wikipedia](https://en.wikipedia.org/wiki/HTTP_referer).

> [!WARNING]
> Dieser Header kann unerwünschte Konsequenzen für die Sicherheit und Privatsphäre der Nutzer haben.
> Weitere Informationen und Hinweise zur Minderung dieser Probleme finden Sie unter [Referer header: privacy and security concerns](/de/docs/Web/Security/Referer_header:_privacy_and_security_concerns).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Anforderungsheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungsheader")}}</th>
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
  - : Eine absolute oder teilweise Adresse der Webseite, die die Anfrage durchführt.
    URL-Fragmente (z. B. `#section`) und Nutzerinformationen (d.h. `username:password` in `https://username:password@example.com/foo/bar/`) sind nicht enthalten.
    Ursprung, Pfad und Abfragezeichenfolge können abhängig von der [referrer policy](/de/docs/Web/HTTP/Reference/Headers/Referrer-Policy#directives) enthalten sein.

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
- [Same-origin policy](/de/docs/Web/Security/Same-origin_policy)
- [Fetch](/de/docs/Web/API/Fetch_API): [`Request.referrerPolicy`](/de/docs/Web/API/Request/referrerPolicy)
- [Tighter Control Over Your Referrers – Mozilla Security Blog](https://blog.mozilla.org/security/2015/01/21/meta-referrer/)
- [HTTP referer auf Wikipedia](https://en.wikipedia.org/wiki/HTTP_referer)
