---
title: Referer
slug: Web/HTTP/Headers/Referer
l10n:
  sourceCommit: ab007c32f6ef1f5d426f8ff806c67652692e4108
---

{{HTTPSidebar}}

Der **`Referer`** HTTP-Anforderungsheader enthält die absolute oder teilweise Adresse, von der aus eine Ressource angefordert wurde. Der `Referer`-Header ermöglicht es einem Server, verweisende Seiten zu identifizieren, von denen aus Benutzer navigieren, oder wo angeforderte Ressourcen verwendet werden. Diese Daten können für Analysen, Protokollierung, optimiertes Caching und mehr genutzt werden.

Wenn Sie auf einen Link klicken, enthält der **`Referer`** die Adresse der Seite, die den Link enthält. Wenn Sie Ressourcenzugriffe auf eine andere Domain anfordern, enthält der **`Referer`** die Adresse der Seite, die die angeforderte Ressource verwendet.

Der `Referer`-Header kann einen _Origin_, _Pfad_ und _Querystring_ enthalten, jedoch keine URL-Fragmentierungen (d.h. `#section`) oder `username:password`-Informationen. Die _referrer policy_ der Anfrage definiert die Daten, die enthalten sein können. Siehe {{HTTPHeader("Referrer-Policy")}} für mehr [Informationen](/de/docs/Web/HTTP/Headers/Referrer-Policy#directives) und [Beispiele](/de/docs/Web/HTTP/Headers/Referrer-Policy#examples).

> [!NOTE]
> Der Header-Name "referer" ist tatsächlich ein Schreibfehler des Wortes "referrer".
> Siehe [HTTP referer auf Wikipedia](https://en.wikipedia.org/wiki/HTTP_referer) für mehr Details.

> [!WARNING]
> Dieser Header kann unerwünschte Konsequenzen für die Sicherheit und Privatsphäre der Nutzer haben.
> Siehe [Referer-Header: Bedenken zu Privatsphäre und Sicherheit](/de/docs/Web/Security/Referer_header:_privacy_and_security_concerns) für weitere Informationen und Hinweise zur Minderung.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>ja</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Referer: <url>
```

## Direktiven

- \<url>
  - : Eine absolute oder teilweise Adresse der Webseite, die die Anfrage stellt.
    URL-Fragmentierungen (d.h. `#section`) und Benutzerinformationen (d.h. `username:password` in `https\://username:password\@example.com/foo/bar/`) werden nicht einbezogen.
    Origin, Pfad und Query String können abhängig von der [Referrer-Policy](/de/docs/Web/HTTP/Headers/Referrer-Policy#directives) einbezogen werden.

## Beispiele

```http
Referer: https://developer.mozilla.org/de/docs/Web/JavaScript
Referer: https://example.com/page?q=123
Referer: https://example.com/
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTTP referer auf Wikipedia](https://en.wikipedia.org/wiki/HTTP_referer)
- [Fetch](/de/docs/Web/API/Fetch_API): {{domxref("Request.referrerPolicy")}}
- [Same-origin policy](/de/docs/Web/Security/Same-origin_policy)
- [Tighter Control Over Your Referrers – Mozilla Security Blog](https://blog.mozilla.org/security/2015/01/21/meta-referrer/)
