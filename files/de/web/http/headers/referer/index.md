---
title: Referer
slug: Web/HTTP/Headers/Referer
l10n:
  sourceCommit: cde3e6bbe77c1fe22375cb83b755ed0dc44302f3
---

{{HTTPSidebar}}

Der HTTP-**`Referer`**-{{Glossary("request_header", "Request-Header")}} enthält die absolute oder teilweise Adresse, von der aus eine Ressource angefordert wurde. Der `Referer`-Header ermöglicht es einem Server, verweisende Seiten zu identifizieren, von denen aus Personen die Anfrage stellen oder wo angeforderte Ressourcen verwendet werden. Diese Daten können für Analysen, Protokollierung, optimiertes Caching und mehr verwendet werden.

Wenn Sie auf einen Link klicken, enthält der `Referer` die Adresse der Seite, die den Link enthält. Wenn Sie eine Anfrage nach Ressourcen zu einer anderen Domain stellen, enthält der `Referer` die Adresse der Seite, die die angeforderte Ressource verwendet.

Der `Referer`-Header kann einen _Ursprung_, _Pfad_ und _Querystring_ enthalten und darf keine [URL-Fragmente](/de/docs/Web/URI/Reference/Fragment) (d.h. `#section`) oder `Benutzername:Passwort`-Informationen enthalten. Die _Referrer-Policy_ der Anfrage definiert die Daten, die enthalten sein dürfen. Siehe {{HTTPHeader("Referrer-Policy")}} für mehr [Informationen](/de/docs/Web/HTTP/Headers/Referrer-Policy#directives) und [Beispiele](/de/docs/Web/HTTP/Headers/Referrer-Policy#examples).

Der `Referer` sollte auch in Anfragen gesendet werden, die einem {{httpheader("Refresh")}}-Antwort folgen (oder einem äquivalenten [`<meta http-equiv="refresh" content="...">`](/de/docs/Web/HTML/Element/meta#http-equiv)), die eine Navigation zu einer neuen Seite verursachen, wenn es die Referrer-Policy erlaubt.

> [!NOTE]
> Der Header-Name "referer" ist tatsächlich ein Schreibfehler des Wortes "referrer".
> Siehe [HTTP referer auf Wikipedia](https://en.wikipedia.org/wiki/HTTP_referer) für weitere Details.

> [!WARNING]
> Dieser Header kann unerwünschte Folgen für die Sicherheit und Privatsphäre der Benutzer haben.
> Siehe [Referer-Header: Datenschutz- und Sicherheitsbedenken](/de/docs/Web/Security/Referer_header:_privacy_and_security_concerns) für mehr Informationen und Hinweise zur Abhilfe.

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
  - : Eine absolute oder partielle Adresse der Webseite, die die Anfrage stellt. URL-Fragmente (d.h. `#section`) und Benutzerinformationen (d.h. `Benutzername:Passwort` in `https://username:password@example.com/foo/bar/`) sind nicht enthalten. Ursprung, Pfad und Query-String können, je nach [Referrer-Policy](/de/docs/Web/HTTP/Headers/Referrer-Policy#directives), enthalten sein.

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
