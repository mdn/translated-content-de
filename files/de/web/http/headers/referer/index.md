---
title: Referer
slug: Web/HTTP/Headers/Referer
l10n:
  sourceCommit: cadc98b0f5f2a770c6ab9b1ca0bf31a90378c6df
---

{{HTTPSidebar}}

Der HTTP **`Referer`** {{Glossary("request_header", "Request-Header")}} enthält die vollständige oder teilweise Adresse, von der eine Ressource angefordert wurde. Der `Referer`-Header ermöglicht es einem Server, die verweisenden Seiten zu identifizieren, von denen aus Personen die Website besuchen oder auf denen angeforderte Ressourcen verwendet werden. Diese Daten können für Analysen, Protokollierung, optimiertes Caching und mehr genutzt werden.

Wenn Sie auf einen Link klicken, enthält der `Referer` die Adresse der Seite, die den Link enthält. Wenn Sie Ressourcenanfragen an eine andere Domain stellen, enthält der `Referer` die Adresse der Seite, die die angeforderte Ressource verwendet.

Der `Referer`-Header kann einen _Origin_, _Pfad_ und _Querystring_ enthalten und darf keine [URL-Fragmente](/de/docs/Web/URI/Fragment) (z. B. `#section`) oder `Benutzername:Passwort`-Informationen enthalten. Die _Referrer-Policy_ der Anfrage definiert die Daten, die enthalten sein können. Siehe {{HTTPHeader("Referrer-Policy")}} für mehr [Informationen](/de/docs/Web/HTTP/Headers/Referrer-Policy#directives) und [Beispiele](/de/docs/Web/HTTP/Headers/Referrer-Policy#examples).

> [!NOTE]
> Der Header-Name „referer“ ist tatsächlich ein Rechtschreibfehler des Wortes „referrer“.
> Weitere Details finden Sie unter [HTTP referer auf Wikipedia](https://en.wikipedia.org/wiki/HTTP_referer).

> [!WARNING]
> Dieser Header kann unerwünschte Folgen für die Sicherheit und Privatsphäre der Benutzer haben.
> Weitere Informationen und Lösungshinweise finden Sie unter [Referer-Header: Datenschutz- und Sicherheitsbedenken](/de/docs/Web/Security/Referer_header:_privacy_and_security_concerns).

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
  - : Eine absolute oder teilweise Adresse der Webseite, die die Anfrage stellt. URL-Fragmente (d. h., `#section`) und Benutzerinformationen (d. h., `Benutzername:Passwort` in `https://username:password@example.com/foo/bar/`) sind nicht eingeschlossen. Origin, Pfad und Query-String können enthalten sein, abhängig von der [Referrer-Policy](/de/docs/Web/HTTP/Headers/Referrer-Policy#directives).

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
