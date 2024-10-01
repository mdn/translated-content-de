---
title: Sec-Fetch-Site
slug: Web/HTTP/Headers/Sec-Fetch-Site
l10n:
  sourceCommit: fe1db9dc292326da0dcace93b10078be50e65241
---

{{HTTPSidebar}}

Der **`Sec-Fetch-Site`** {{Glossary("Fetch_metadata_request_header", "Fetch-Metadaten-Anforderungsheader")}} gibt die Beziehung zwischen dem Ursprungsort des Anforderungsinitiators und dem Ursprung der angeforderten Ressource an.

Mit anderen Worten, dieser Header teilt einem Server mit, ob eine Anforderung für eine Ressource vom gleichen Ursprung, der gleichen Website, einer anderen Website stammt oder ob es sich um eine vom Benutzer eingeleitete Anforderung handelt. Der Server kann diese Informationen dann verwenden, um zu entscheiden, ob die Anforderung erlaubt werden soll.

Anforderungen vom gleichen Ursprung würden normalerweise standardmäßig zugelassen, aber was bei Anforderungen von anderen Ursprüngen passiert, kann weiter davon abhängen, welche Ressource angefordert wird oder welche Informationen in anderen {{Glossary("Fetch_metadata_request_header", "Fetch-Metadaten-Anforderungsheadern")}} enthalten sind. Standardmäßig sollten nicht akzeptierte Anfragen mit einem {{HTTPStatus("403")}} Antwortcode abgelehnt werden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Fetch_Metadata_Request_Header", "Fetch-Metadaten-Anforderungsheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
      <td>ja (Präfix <code>Sec-</code>)</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_request_header", "CORS-safelisted request header")}}
      </th>
      <td>nein</td>
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
  - : Der Anforderungsinitiator und der Server, der die Ressource hostet, haben eine andere Website (d.h. eine Anforderung von "potentially-evil.com" für eine Ressource bei "example.com").
- `same-origin`
  - : Der Anforderungsinitiator und der Server, der die Ressource hostet, haben den gleichen {{Glossary("origin", "Ursprung")}} (gleiches Schema, Host und Port).
- `same-site`
  - : Der Anforderungsinitiator und der Server, der die Ressource hostet, haben die gleiche {{Glossary("site", "Website")}}, einschließlich des Schemas.
- `none`
  - : Diese Anforderung ist eine vom Benutzer initiierte Operation. Zum Beispiel: Eine URL in die Adressleiste eingeben, ein Lesezeichen öffnen oder eine Datei in das Browserfenster ziehen.

## Beispiele

Eine Fetch-Anfrage an `https://mysite.example/foo.json`, die von einer Webseite auf `https://mysite.example` (mit dem gleichen Port) stammt, ist eine `same-origin`-Anforderung.
Der Browser generiert den `Sec-Fetch-Site: same-origin` Header wie unten gezeigt, und der Server wird die Anforderung typischerweise zulassen:

```http
GET /foo.json
Sec-Fetch-Dest: empty
Sec-Fetch-Mode: cors
Sec-Fetch-Site: same-origin
```

Eine Fetch-Anfrage an die gleiche URL von einer anderen Website, zum Beispiel `potentially-evil.com`, veranlasst den Browser, einen anderen Header zu generieren (z.B. `Sec-Fetch-Site: cross-site`), den der Server akzeptieren oder ablehnen kann:

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

- Verwandte Header

  - {{HTTPHeader("Sec-Fetch-Mode")}}
  - {{HTTPHeader("Sec-Fetch-User")}}
  - {{HTTPHeader("Sec-Fetch-Dest")}}

- [Schützen Sie Ihre Ressourcen vor Webangriffen mit Fetch Metadata](https://web.dev/articles/fetch-metadata) (web.dev)
- [Fetch-Metadata-Anforderungsheader-Spielwiese](https://secmetadata.appspot.com/) (secmetadata.appspot.com)
