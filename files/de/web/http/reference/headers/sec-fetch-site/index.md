---
title: Sec-Fetch-Site header
short-title: Sec-Fetch-Site
slug: Web/HTTP/Reference/Headers/Sec-Fetch-Site
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}

Der HTTP **`Sec-Fetch-Site`** {{Glossary("fetch_metadata_request_header", "Fetch-Metadaten-Anforderungs-Header")}} zeigt die Beziehung zwischen dem Ursprung des Anforderungsinitiators und dem Ursprung der angeforderten Ressource an.

Mit anderen Worten, dieser Header teilt einem Server mit, ob eine Anforderung für eine Ressource vom gleichen Ursprung, der gleichen Website, einer anderen Website oder als "benutzerinitiierte" Anfrage kommt. Der Server kann dann diese Informationen verwenden, um zu entscheiden, ob die Anforderung erlaubt sein sollte.

Anforderungen vom gleichen Ursprung würden normalerweise standardmäßig zugelassen werden, aber was für Anforderungen von anderen Ursprüngen passiert, kann weiter davon abhängen, welche Ressource angefordert wird oder welche Informationen in einem anderen {{Glossary("fetch_metadata_request_header", "Fetch-Metadaten-Anforderungs-Header")}} enthalten sind. Standardmäßig sollten nicht akzeptierte Anforderungen mit einem {{HTTPStatus("403")}} Antwortcode abgelehnt werden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Fetch_Metadata_Request_Header", "Fetch-Metadaten-Anforderungs-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungs-Header")}}</th>
      <td>Ja (<code>Sec-</code> Präfix)</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_request_header", "CORS-sicher gelisteter Anforderungs-Header")}}
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
  - : Der Anforderungsinitiator und der Server, der die Ressource hostet, haben eine unterschiedliche Website (zum Beispiel: Eine Anfrage von "potentially-evil.com" für eine Ressource bei "example.com").
- `same-origin`
  - : Der Anforderungsinitiator und der Server, der die Ressource hostet, haben denselben {{Glossary("origin", "Ursprung")}} (gleiches Schema, Host und Port).
- `same-site`
  - : Der Anforderungsinitiator und der Server, der die Ressource hostet, haben dieselbe {{Glossary("site", "Website")}}, einschließlich des Schemas.
- `none`
  - : Diese Anfrage ist eine vom Benutzer initiierte Operation. Zum Beispiel: Eingeben einer URL in die Adressleiste, Öffnen eines Lesezeichens oder Drag-and-Drop einer Datei in das Browserfenster.

## Beispiele

Eine Fetch-Anfrage an `https://mysite.example/foo.json`, die von einer Webseite auf `https://mysite.example` (mit demselben Port) stammt, ist eine Same-Origin-Anfrage. Der Browser erzeugt den Header `Sec-Fetch-Site: same-origin`, wie unten gezeigt, und der Server wird üblicherweise die Anfrage zulassen:

```http
GET /foo.json
Sec-Fetch-Dest: empty
Sec-Fetch-Mode: cors
Sec-Fetch-Site: same-origin
```

Eine Fetch-Anfrage an dieselbe URL von einer anderen Website, zum Beispiel `potentially-evil.com`, führt dazu, dass der Browser einen anderen Header generiert (z. B. `Sec-Fetch-Site: cross-site`), den der Server akzeptieren oder ablehnen kann:

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

- {{HTTPHeader("Sec-Fetch-Mode")}}, {{HTTPHeader("Sec-Fetch-User")}}, {{HTTPHeader("Sec-Fetch-Dest")}} Fetch-Metadaten-Anforderungs-Header
- [Schützen Sie Ihre Ressourcen vor Webangriffen mit Fetch Metadata](https://web.dev/articles/fetch-metadata) (web.dev)
- [Fetch Metadata Request Headers Playground](https://secmetadata.appspot.com/) (secmetadata.appspot.com)
