---
title: Referer
slug: Web/HTTP/Reference/Headers/Referer
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Der HTTP **`Referer`** {{Glossary("request_header", "Request Header")}} enthält die absolute oder partielle Adresse, von der eine Ressource angefordert wurde.
Der `Referer`-Header ermöglicht es einem Server, verweisende Seiten zu identifizieren, von denen aus Benutzer kommen oder wo angeforderte Ressourcen verwendet werden.
Diese Daten können für Analysen, Protokollierung, optimiertes Caching und mehr genutzt werden.

Wenn Sie auf einen Link klicken, enthält der `Referer` die Adresse der Seite, die den Link enthält.
Wenn Sie Ressourcenzugriffe auf eine andere Domain vornehmen, enthält der `Referer` die Adresse der Seite, die die angeforderte Ressource verwendet.

Der `Referer`-Header kann einen _Origin_, _Pfad_ und _Abfragezeichenfolge_ enthalten und darf keine [URL-Fragmente](/de/docs/Web/URI/Reference/Fragment) (z.B. `#section`) oder `Benutzername:Passwort`-Informationen enthalten.
Die _Referrer-Richtlinie_ der Anfrage definiert die Daten, die enthalten sein dürfen. Siehe {{HTTPHeader("Referrer-Policy")}} für mehr [Informationen](/de/docs/Web/HTTP/Reference/Headers/Referrer-Policy#directives) und [Beispiele](/de/docs/Web/HTTP/Reference/Headers/Referrer-Policy#examples).

Der `Referer` sollte auch in Anfragen gesendet werden, die einer {{httpheader("Refresh")}}-Antwort (oder einem gleichwertigen [`<meta http-equiv="refresh" content="...">`](/de/docs/Web/HTML/Element/meta#http-equiv)) folgen, die eine Navigation zu einer neuen Seite verursacht, sofern dies durch die Referrer-Richtlinie erlaubt ist.

> [!NOTE]
> Der Header-Name "referer" ist eigentlich eine falsche Schreibweise des Wortes "referrer".
> Weitere Details finden Sie bei [HTTP referer auf Wikipedia](https://en.wikipedia.org/wiki/HTTP_referer).

> [!WARNING]
> Dieser Header kann unerwünschte Folgen für die Sicherheit und Privatsphäre der Benutzer haben.
> Siehe [Referer-Header: Datenschutz- und Sicherheitsrisiken](/de/docs/Web/Security/Referer_header:_privacy_and_security_concerns) für weitere Informationen und Hinweise zur Minderung dieser Risiken.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Request Header")}}</td>
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
  - : Eine absolute oder partielle Adresse der Webseite, die die Anforderung stellt.
    URL-Fragmente (d.h. `#section`) und Benutzerinformationen (d.h. `Benutzername:Passwort` in `https://Benutzername:Passwort@beispiel.com/foo/bar/`) sind nicht enthalten.
    Origin, Pfad und Abfragezeichenfolge können enthalten sein, abhängig von der [Referrer-Richtlinie](/de/docs/Web/HTTP/Reference/Headers/Referrer-Policy#directives).

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
- [Same-origin Policy](/de/docs/Web/Security/Same-origin_policy)
- [Fetch](/de/docs/Web/API/Fetch_API): [`Request.referrerPolicy`](/de/docs/Web/API/Request/referrerPolicy)
- [Tighter Control Over Your Referrers – Mozilla Security Blog](https://blog.mozilla.org/security/2015/01/21/meta-referrer/)
- [HTTP referer auf Wikipedia](https://en.wikipedia.org/wiki/HTTP_referer)
