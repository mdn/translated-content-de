---
title: Sec-Fetch-Site header
short-title: Sec-Fetch-Site
slug: Web/HTTP/Reference/Headers/Sec-Fetch-Site
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Der HTTP **`Sec-Fetch-Site`** {{Glossary("fetch_metadata_request_header", "fetch metadata request header")}} zeigt die Beziehung zwischen dem Ursprung des Anforderungsinitiators und dem Ursprung der angeforderten Ressource an.

Mit anderen Worten, dieser Header teilt einem Server mit, ob eine Anforderung für eine Ressource vom gleichen Ursprung, der gleichen Site, einer anderen Site oder als "Benutzerinitiierte" Anforderung stammt. Der Server kann diese Information dann verwenden, um zu entscheiden, ob die Anforderung erlaubt werden sollte.

Anforderungen des gleichen Ursprungs würden normalerweise standardmäßig erlaubt werden, aber was für Anforderungen von anderen Ursprüngen geschieht, kann weiter davon abhängen, welche Ressource angefordert wird oder welche Informationen in einem anderen {{Glossary("fetch_metadata_request_header", "fetch metadata request header")}} stehen. Standardmäßig sollten nicht akzeptierte Anforderungen mit einem {{HTTPStatus("403")}} Antwortcode abgelehnt werden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>{{Glossary("Fetch_Metadata_Request_Header", "Fetch Metadata Request Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungsheader")}}</th>
      <td>Ja (<code>Sec-</code> Präfix)</td>
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
  - : Der Anforderungsinitiator und der Server, der die Ressource hostet, haben eine unterschiedliche Site (z.B. eine Anforderung von "potentially-evil.com" für eine Ressource bei "example.com").
- `same-origin`
  - : Der Anforderungsinitiator und der Server, der die Ressource hostet, haben den gleichen {{Glossary("origin", "Ursprung")}} (gleiches Schema, Host und Port).
- `same-site`
  - : Der Anforderungsinitiator und der Server, der die Ressource hostet, haben die gleiche {{Glossary("site", "Site")}}, einschließlich des Schemas.
- `none`
  - : Diese Anforderung ist eine benutzerinitiierte Operation. Zum Beispiel: Eingeben einer URL in die Adressleiste, Öffnen eines Lesezeichens oder Drag-and-Drop einer Datei in das Browserfenster.

## Beispiele

Eine Fetch-Anfrage an `https://mysite.example/foo.json`, die von einer Webseite auf `https://mysite.example` (mit dem gleichen Port) stammt, ist eine Anfrage des gleichen Ursprungs.
Der Browser generiert den Header `Sec-Fetch-Site: same-origin`, wie unten gezeigt, und der Server wird die Anfrage normalerweise erlauben:

```http
GET /foo.json
Sec-Fetch-Dest: empty
Sec-Fetch-Mode: cors
Sec-Fetch-Site: same-origin
```

Eine Fetch-Anfrage an die gleiche URL von einer anderen Site, zum Beispiel `potentially-evil.com`, veranlasst den Browser, einen anderen Header zu generieren (z.B. `Sec-Fetch-Site: cross-site`), den der Server akzeptieren oder ablehnen kann:

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

- {{HTTPHeader("Sec-Fetch-Mode")}}, {{HTTPHeader("Sec-Fetch-User")}}, {{HTTPHeader("Sec-Fetch-Dest")}} fetch metadata request headers
- [Schützen Sie Ihre Ressourcen vor Webangriffen mit Fetch Metadata](https://web.dev/articles/fetch-metadata) (web.dev)
- [Fetch Metadata Request Headers playground](https://secmetadata.appspot.com/) (secmetadata.appspot.com)
