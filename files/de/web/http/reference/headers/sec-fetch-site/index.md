---
title: Sec-Fetch-Site header
short-title: Sec-Fetch-Site
slug: Web/HTTP/Reference/Headers/Sec-Fetch-Site
l10n:
  sourceCommit: 81bf621759d3a52fdf737c2d75f186a0073d1406
---

Der HTTP-**`Sec-Fetch-Site`**-[Fetch-Metadaten-Anforderungsheader](/de/docs/Web/HTTP/Guides/Fetch_metadata) gibt die Beziehung zwischen dem Ursprung eines Anforderungsinitiators und dem Ursprung der angeforderten Ressource an.

Mit anderen Worten, dieser Header teilt einem Server mit, ob eine Anforderung für eine Ressource vom gleichen Ursprung, derselben Seite, einer anderen Seite stammt oder eine "vom Benutzer initiierte" Anforderung ist. Der Server kann diese Informationen dann verwenden, um zu entscheiden, ob die Anforderung erlaubt werden soll.

Anforderungen vom gleichen Ursprung würden normalerweise standardmäßig erlaubt werden, aber was für Anforderungen von anderen Ursprüngen geschieht, kann weiter davon abhängen, welche Ressource angefordert wird oder von Informationen in einem anderen Fetch-Metadaten-Anforderungsheader. Standardmäßig sollten nicht akzeptierte Anforderungen mit einem {{HTTPStatus("403")}}-Antwortcode abgelehnt werden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Fetch_Metadata_Request_Header", "Fetch-Metadaten-Anforderungsheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungsheader")}}</th>
      <td>Ja (<code>Sec-</code>-Präfix)</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_request_header", "CORS-safelisted Anforderungsheader")}}
      </th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Sec-Fetch-Site: cross-site
Sec-Fetch-Site: same-origin
Sec-Fetch-Site: same-site
Sec-Fetch-Site: none
```

## Direktiven

- `cross-site`
  - : Der Anforderungsinitiator und der Server, der die Ressource hostet, haben eine unterschiedliche Seite (d.h. eine Anforderung von "potentially-evil.com" für eine Ressource bei "example.com").
- `same-origin`
  - : Der Anforderungsinitiator und der Server, der die Ressource hostet, haben denselben {{Glossary("origin", "Ursprung")}} (dasselbe Schema, Host und Port).
- `same-site`
  - : Der Anforderungsinitiator und der Server, der die Ressource hostet, haben dieselbe {{Glossary("site", "Site")}}, einschließlich des Schemas.
- `none`
  - : Diese Anforderung ist ein vom Benutzer initiiertes Vorgang. Zum Beispiel: Eingabe einer URL in die Adressleiste, Öffnen eines Lesezeichens oder Drag-and-Drop einer Datei in das Browserfenster.

## Beispiele

Eine Fetch-Anforderung an `https://mysite.example/foo.json`, die von einer Webseite auf `https://mysite.example` (mit demselben Port) stammt, ist eine Same-Origin-Anforderung.
Der Browser generiert den `Sec-Fetch-Site: same-origin`-Header wie unten gezeigt, und der Server wird die Anforderung in der Regel zulassen:

```http
GET /foo.json
Sec-Fetch-Dest: empty
Sec-Fetch-Mode: cors
Sec-Fetch-Site: same-origin
```

Eine Fetch-Anforderung an dieselbe URL von einer anderen Seite, beispielsweise `potentially-evil.com`, veranlasst den Browser, einen anderen Header zu generieren (z. B. `Sec-Fetch-Site: cross-site`), den der Server akzeptieren oder ablehnen kann:

```http
GET /foo.json
Sec-Fetch-Dest: empty
Sec-Fetch-Mode: cors
Sec-Fetch-Site: cross-site
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Sec-Fetch-Mode")}}, {{HTTPHeader("Sec-Fetch-User")}}, {{HTTPHeader("Sec-Fetch-Dest")}} Fetch-Metadaten-Anforderungsheader
- [Schützen Sie Ihre Ressourcen vor Webangriffen mit Fetch Metadata](https://web.dev/articles/fetch-metadata) (web.dev)
- [Fetch Metadata Request Headers playground](https://secmetadata.appspot.com/) (secmetadata.appspot.com)
