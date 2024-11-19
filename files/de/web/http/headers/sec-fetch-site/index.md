---
title: Sec-Fetch-Site
slug: Web/HTTP/Headers/Sec-Fetch-Site
l10n:
  sourceCommit: 6c32e8b21a39b1b8d3db7a194d2350e0f8218b64
---

{{HTTPSidebar}}

Der HTTP **`Sec-Fetch-Site`** {{Glossary("fetch_metadata_request_header", "Fetch Metadata Request Header")}} gibt die Beziehung zwischen dem Ursprung eines Anforderungsinitiators und dem Ursprung der angeforderten Ressource an.

Mit anderen Worten, dieser Header teilt einem Server mit, ob eine Anfrage für eine Ressource vom gleichen Ursprung, derselben Seite, einer anderen Seite oder als "vom Benutzer initiiert" kommt. Der Server kann dann diese Informationen nutzen, um zu entscheiden, ob die Anfrage erlaubt werden sollte.

Anfragen vom gleichen Ursprung würden normalerweise standardmäßig zugelassen, aber was bei Anfragen von anderen Ursprüngen passiert, kann darüber hinaus davon abhängen, welche Ressource angefragt wird, oder von Informationen in einem anderen {{Glossary("fetch_metadata_request_header", "Fetch Metadata Request Header")}}. Standardmäßig sollten nicht akzeptierte Anfragen mit einem {{HTTPStatus("403")}} Antwortcode abgelehnt werden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Fetch_Metadata_Request_Header", "Fetch Metadata Request Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
      <td>Ja (<code>Sec-</code> Präfix)</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_request_header", "CORS-safelisted Request Header")}}
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
  - : Der Anforderungsinitiator und der Server, der die Ressource hostet, haben unterschiedliche Seiten (d. h. eine Anfrage von "potenziell-bösartig.com" für eine Ressource bei "example.com").
- `same-origin`
  - : Der Anforderungsinitiator und der Server, der die Ressource hostet, haben denselben {{Glossary("origin", "Ursprung")}} (gleiches Schema, Host und Port).
- `same-site`
  - : Der Anforderungsinitiator und der Server, der die Ressource hostet, haben dieselbe {{Glossary("site", "Seite")}}, einschließlich des Schemas.
- `none`
  - : Diese Anfrage ist eine vom Benutzer initiierte Operation. Zum Beispiel: Eingabe einer URL in die Adressleiste, Öffnen eines Lesezeichens oder Drag-and-Drop einer Datei in das Browserfenster.

## Beispiele

Eine Fetch-Anfrage an `https://mysite.example/foo.json`, die von einer Webseite auf `https://mysite.example` (mit demselben Port) stammt, ist eine Anfrage vom gleichen Ursprung.
Der Browser generiert den `Sec-Fetch-Site: same-origin`-Header wie unten gezeigt, und der Server wird die Anfrage in der Regel zulassen:

```http
GET /foo.json
Sec-Fetch-Dest: empty
Sec-Fetch-Mode: cors
Sec-Fetch-Site: same-origin
```

Eine Fetch-Anfrage zur selben URL von einer anderen Seite, zum Beispiel `potenziell-bösartig.com`, verursacht, dass der Browser einen anderen Header generiert (z. B. `Sec-Fetch-Site: cross-site`), den der Server akzeptieren oder ablehnen kann:

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
