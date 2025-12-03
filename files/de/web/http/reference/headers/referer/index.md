---
title: Referer header
short-title: Referer
slug: Web/HTTP/Reference/Headers/Referer
l10n:
  sourceCommit: dd868507df863ab4f37d53c960c76e20e9ee365f
---

Der HTTP-**`Referer`**-{{Glossary("request_header", "Anforderungsheader")}} enthält die absolute oder partielle Adresse, von der eine Ressource angefordert wurde. Der `Referer`-Header ermöglicht es einem Server zu identifizieren, von welchen Seiten Nutzer kommen, oder wo angeforderte Ressourcen verwendet werden. Diese Daten können für Analysen, Protokollierung, optimiertes Caching und mehr verwendet werden.

Wenn Sie auf einen Link klicken, enthält der `Referer` die Adresse der Seite, die den Link enthält. Wenn Sie Ressourcensanforderungen an eine andere Domain stellen, enthält der `Referer` die Adresse der Seite, die die angeforderte Ressource verwendet.

Der `Referer`-Header kann einen _Origin_, _Pfad_ und _Query-String_ enthalten, kann jedoch keine [URL-Fragmente](/de/docs/Web/URI/Reference/Fragment) (d.h. `#section`) oder `Benutzername:Passwort`-Informationen enthalten. Die _Referrer-Richtlinie_ der Anforderung definiert die Daten, die enthalten sein können. Siehe {{HTTPHeader("Referrer-Policy")}} für mehr [Informationen](/de/docs/Web/HTTP/Reference/Headers/Referrer-Policy#directives) und [Beispiele](/de/docs/Web/HTTP/Reference/Headers/Referrer-Policy#examples).

Der `Referer` sollte auch in Anfragen gesendet werden, die einer {{httpheader("Refresh")}}-Antwort folgen (oder dem entsprechenden [`<meta http-equiv="refresh" content="...">`](/de/docs/Web/HTML/Reference/Elements/meta/http-equiv)), die eine Navigation zu einer neuen Seite verursacht, wenn dies von der Referrer-Richtlinie erlaubt ist.

> [!NOTE]
> Der Header-Name "referer" ist tatsächlich eine falsche Schreibweise des Wortes "referrer".
> Weitere Details finden Sie unter [HTTP referer auf Wikipedia](https://en.wikipedia.org/wiki/HTTP_referer).

> [!WARNING]
> Dieser Header kann unerwünschte Konsequenzen für die Sicherheit und Privatsphäre der Nutzer haben.
> Siehe [Referer-Header: Datenschutz- und Sicherheitsbedenken](/de/docs/Web/Privacy/Guides/Referer_header:_privacy_and_security_concerns) für weitere Informationen und Hinweise zur Minderung.

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
  - : Eine absolute oder teilweise Adresse der Webseite, die die Anfrage stellt. URL-Fragmente (d.h. `#section`) und Benutzerinformationen (d.h. `Benutzername:Passwort` in `https://username:password@example.com/foo/bar/`) sind nicht enthalten. Origin, Pfad und Query-String können enthalten sein, abhängig von der [Referrer-Richtlinie](/de/docs/Web/HTTP/Reference/Headers/Referrer-Policy#directives).

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
- [Strengere Kontrolle über Ihre Referrer – Mozilla Security Blog](https://blog.mozilla.org/security/2015/01/21/meta-referrer/)
- [HTTP referer auf Wikipedia](https://en.wikipedia.org/wiki/HTTP_referer)
