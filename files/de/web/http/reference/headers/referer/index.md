---
title: Referer header
short-title: Referer
slug: Web/HTTP/Reference/Headers/Referer
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

Der HTTP **`Referer`** {{Glossary("request_header", "Request-Header")}} enthält die absolute oder partielle Adresse, von der eine Ressource angefordert wurde. Der `Referer`-Header ermöglicht einem Server, verweisende Seiten zu identifizieren, von denen Personen besuchen oder wo angeforderte Ressourcen verwendet werden. Diese Daten können für Analysen, Protokollierung, optimiertes Caching und mehr verwendet werden.

Wenn Sie auf einen Link klicken, enthält der `Referer` die Adresse der Seite, die den Link enthält. Wenn Sie Ressourcena nfragen an eine andere Domain stellen, enthält der `Referer` die Adresse der Seite, die die angeforderte Ressource verwendet.

Der `Referer`-Header kann eine _Origin_, _Pfad_ und _Querystring_ enthalten und darf keine [URL-Fragmente](/de/docs/Web/URI/Reference/Fragment) (d.h. `#section`) oder `username:password`-Informationen enthalten. Die _Referrer-Richtlinie_ der Anfrage definiert die Daten, die enthalten sein können. Siehe {{HTTPHeader("Referrer-Policy")}} für weitere [Informationen](/de/docs/Web/HTTP/Reference/Headers/Referrer-Policy#directives) und [Beispiele](/de/docs/Web/HTTP/Reference/Headers/Referrer-Policy#examples).

Der `Referer` sollte auch in Anfragen gesendet werden, die einer {{httpheader("Refresh")}}-Antwort folgen (oder einem äquivalenten [`<meta http-equiv="refresh" content="...">`](/de/docs/Web/HTML/Reference/Elements/meta/http-equiv)), die eine Navigation zu einer neuen Seite verursacht, falls dies von der Referrer-Richtlinie erlaubt wird.

> [!NOTE]
> Der Header-Name "referer" ist eigentlich ein Rechtschreibfehler des Wortes "referrer".
> Siehe [HTTP referer auf Wikipedia](https://en.wikipedia.org/wiki/HTTP_referer) für weitere Details.

> [!WARNING]
> Dieser Header kann unerwünschte Folgen für die Sicherheit und Privatsphäre der Benutzer haben.
> Siehe [Referer-Header: Datenschutz- und Sicherheitsbedenken](/de/docs/Web/Security/Referer_header:_privacy_and_security_concerns) für weitere Informationen und Hinweise zur Risikominderung.

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
  - : Eine absolute oder partielle Adresse der Webseite, die die Anfrage stellt.
    URL-Fragmente (d.h. `#section`) und Benutzerinformationen (d.h. `username:password` in `https://username:password@example.com/foo/bar/`) sind nicht enthalten.
    Origin, Pfad und Query-String können enthalten sein, abhängig von der [Referrer-Richtlinie](/de/docs/Web/HTTP/Reference/Headers/Referrer-Policy#directives).

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
- [Same-origin-Policy](/de/docs/Web/Security/Defenses/Same-origin_policy)
- [Fetch](/de/docs/Web/API/Fetch_API): [`Request.referrerPolicy`](/de/docs/Web/API/Request/referrerPolicy)
- [Tighter Control Over Your Referrers – Mozilla Security Blog](https://blog.mozilla.org/security/2015/01/21/meta-referrer/)
- [HTTP referer auf Wikipedia](https://en.wikipedia.org/wiki/HTTP_referer)
