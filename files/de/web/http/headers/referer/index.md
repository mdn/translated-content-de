---
title: Referer
slug: Web/HTTP/Headers/Referer
l10n:
  sourceCommit: ab007c32f6ef1f5d426f8ff806c67652692e4108
---

{{HTTPSidebar}}

Der **`Referer`** HTTP-Anforderungsheader enthält die absolute oder teilweise Adresse, von der eine Ressource angefordert wurde. Der `Referer`-Header ermöglicht es einem Server, verweisende Seiten zu identifizieren, von denen Benutzer kommen oder auf denen angeforderte Ressourcen verwendet werden. Diese Daten können für Analysen, Protokollierung, optimiertes Caching und mehr verwendet werden.

Wenn Sie auf einen Link klicken, enthält der **`Referer`** die Adresse der Seite, die den Link enthält. Wenn Sie Ressourcennachfragen an eine andere Domain stellen, enthält der **`Referer`** die Adresse der Seite, die die angeforderte Ressource verwendet.

Der `Referer`-Header kann einen _origin_, _Pfad_ und _querystring_ enthalten und darf keine URL-Fragmente (z.B. `#section`) oder `username:password`-Informationen enthalten. Die _referrer policy_ der Anfrage definiert die Daten, die enthalten sein können. Siehe {{HTTPHeader("Referrer-Policy")}} für mehr [Informationen](/de/docs/Web/HTTP/Headers/Referrer-Policy#directives) und [Beispiele](/de/docs/Web/HTTP/Headers/Referrer-Policy#examples).

> [!NOTE]
> Der Header-Name "referer" ist eigentlich ein Schreibfehler des Wortes "referrer".
> Siehe [HTTP referer auf Wikipedia](https://en.wikipedia.org/wiki/HTTP_referer) für weitere Details.

> [!WARNING]
> Dieser Header kann unerwünschte Konsequenzen für die Sicherheit und Privatsphäre der Benutzer haben.
> Siehe [Referer header: privacy and security concerns](/de/docs/Web/Security/Referer_header:_privacy_and_security_concerns) für weitere Informationen und Hinweise zur Minderung.

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
  - : Eine absolute oder teilweise Adresse der Webseite, die die Anfrage stellt. URL-Fragmente (z.B. `#section`) und userinfo (z.B. `username:password` in `https\://username:password\@example.com/foo/bar/`) sind nicht enthalten. Origin, Pfad und Query-String können enthalten sein, abhängig von der [referrer policy](/de/docs/Web/HTTP/Headers/Referrer-Policy#directives).

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
- [Strengere Kontrolle über Ihre Referrer – Mozilla Security Blog](https://blog.mozilla.org/security/2015/01/21/meta-referrer/)