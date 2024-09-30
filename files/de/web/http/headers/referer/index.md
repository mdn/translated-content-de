---
title: Referer
slug: Web/HTTP/Headers/Referer
l10n:
  sourceCommit: ab007c32f6ef1f5d426f8ff806c67652692e4108
---

{{HTTPSidebar}}

Der **`Referer`** HTTP-Anforderungsheader enthält die absolute oder teilweise Adresse, von der eine Ressource angefordert wurde. Der `Referer`-Header ermöglicht es einem Server, verweisende Seiten zu identifizieren, von denen aus Personen kommen oder wo angeforderte Ressourcen verwendet werden. Diese Daten können für Analysen, Protokollierung, optimiertes Caching und mehr genutzt werden.

Wenn Sie auf einen Link klicken, enthält der **`Referer`** die Adresse der Seite, die den Link enthält. Wenn Sie Ressourcenanforderungen an eine andere Domain stellen, enthält der **`Referer`** die Adresse der Seite, die die angeforderte Ressource verwendet.

Der `Referer`-Header kann einen _Origin_, _Pfad_ und _Abfragezeichenkette_ enthalten und darf keine URL-Fragmente (z. B. `#section`) oder `Benutzername:Passwort`-Informationen enthalten. Die _Referrer-Richtlinie_ der Anforderung definiert die Daten, die enthalten sein können. Siehe {{HTTPHeader("Referrer-Policy")}} für mehr [Informationen](/de/docs/Web/HTTP/Headers/Referrer-Policy#directives) und [Beispiele](/de/docs/Web/HTTP/Headers/Referrer-Policy#examples).

> [!NOTE]
> Der Header-Name "referer" ist tatsächlich eine Falschschreibung des Wortes "referrer". Siehe [HTTP referer auf Wikipedia](https://en.wikipedia.org/wiki/HTTP_referer) für weitere Details.

> [!WARNING]
> Dieser Header kann unerwünschte Folgen für die Sicherheit und Privatsphäre der Benutzer haben. Siehe [Referer-Header: Datenschutz- und Sicherheitsbedenken](/de/docs/Web/Security/Referer_header:_privacy_and_security_concerns) für weitere Informationen und Hinweise zur Minderung.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>[Request-Header](/de/docs/Glossary/Request_header)</td>
    </tr>
    <tr>
      <th scope="row">[Verbotener Header-Name](/de/docs/Glossary/Forbidden_header_name)</th>
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
  - : Eine absolute oder teilweise Adresse der Webseite, die die Anforderung stellt. URL-Fragmente (z. B. `#section`) und Benutzerinformationen (z. B. `username:password` in `https\://username:password\@example.com/foo/bar/`) sind nicht enthalten. Origin, Pfad und Abfragezeichenkette können je nach [Referrer-Richtlinie](/de/docs/Web/HTTP/Headers/Referrer-Policy#directives) enthalten sein.

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

- [HTTP referer auf Wikipedia](https://en.wikipedia.org/wiki/HTTP_referer)
- [Fetch](/de/docs/Web/API/Fetch_API): [`Request.referrerPolicy`](/de/docs/Web/API/Request/referrerPolicy)
- [Same-origin policy](/de/docs/Web/Security/Same-origin_policy)
- [Tighter Control Over Your Referrers – Mozilla Security Blog](https://blog.mozilla.org/security/2015/01/21/meta-referrer/)
