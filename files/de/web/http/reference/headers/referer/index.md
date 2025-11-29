---
title: Referer header
short-title: Referer
slug: Web/HTTP/Reference/Headers/Referer
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Der HTTP-**`Referer`**-{{Glossary("request_header", "Request-Header")}} enthält die vollständige oder teilweise Adresse, von der eine Ressource angefordert wurde. Der `Referer`-Header ermöglicht einem Server, die verweisenden Seiten zu identifizieren, von denen Personen kommen, oder wo angeforderte Ressourcen verwendet werden. Diese Daten können für Analysen, Protokollierung, optimiertes Caching und mehr verwendet werden.

Wenn Sie auf einen Link klicken, enthält der `Referer` die Adresse der Seite, die den Link enthält. Wenn Sie Ressourcen-Anfragen an eine andere Domain stellen, enthält der `Referer` die Adresse der Seite, die die angeforderte Ressource verwendet.

Der `Referer`-Header kann eine _origin_, _path_ und _querystring_ enthalten und darf keine [URL-Fragmente](/de/docs/Web/URI/Reference/Fragment) (d.h. `#section`) oder `username:password` Informationen enthalten. Die _referrer policy_ der Anfrage definiert die Daten, die eingeschlossen werden können. Siehe {{HTTPHeader("Referrer-Policy")}} für mehr [Informationen](/de/docs/Web/HTTP/Reference/Headers/Referrer-Policy#directives) und [Beispiele](/de/docs/Web/HTTP/Reference/Headers/Referrer-Policy#examples).

Der `Referer` sollte auch in Anfragen gesendet werden, die einer {{httpheader("Refresh")}}-Antwort folgen (oder einem äquivalenten [`<meta http-equiv="refresh" content="...">`](/de/docs/Web/HTML/Reference/Elements/meta/http-equiv)), die eine Navigation zu einer neuen Seite verursacht, wenn dies von der Referrer-Policy erlaubt wird.

> [!NOTE]
> Der Header-Name "referer" ist tatsächlich ein Rechtschreibfehler des Wortes "referrer".
> Siehe [HTTP referer auf Wikipedia](https://en.wikipedia.org/wiki/HTTP_referer) für mehr Details.

> [!WARNING]
> Dieser Header kann unerwünschte Folgen für die Sicherheit und Privatsphäre der Benutzer haben.
> Siehe [Referer-Header: Datenschutz- und Sicherheitsbedenken](/de/docs/Web/Security/Referer_header:_privacy_and_security_concerns) für mehr Informationen und Hinweise zur Minderung.

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

## Richtlinien

- `<url>`
  - : Eine vollständige oder teilweise Adresse der Webseite, die die Anfrage stellt. URL-Fragmente (d.h. `#section`) und Benutzerinformationen (d.h. `username:password` in `https://username:password@example.com/foo/bar/`) sind nicht enthalten. Origin, Pfad und Abfragezeichenkette können je nach [Referrer-Policy](/de/docs/Web/HTTP/Reference/Headers/Referrer-Policy#directives) enthalten sein.

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
- [Same-origin policy](/de/docs/Web/Security/Defenses/Same-origin_policy)
- [Fetch](/de/docs/Web/API/Fetch_API): [`Request.referrerPolicy`](/de/docs/Web/API/Request/referrerPolicy)
- [Mehr Kontrolle über Ihre Referrer – Mozilla Security Blog](https://blog.mozilla.org/security/2015/01/21/meta-referrer/)
- [HTTP referer auf Wikipedia](https://en.wikipedia.org/wiki/HTTP_referer)
