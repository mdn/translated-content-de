---
title: Sec-Fetch-Site
slug: Web/HTTP/Headers/Sec-Fetch-Site
l10n:
  sourceCommit: fe1db9dc292326da0dcace93b10078be50e65241
---

{{HTTPSidebar}}

Der **`Sec-Fetch-Site`** [Fetch-Metadaten-Anforderungsheader](/de/docs/Glossary/Fetch_metadata_request_header) gibt die Beziehung zwischen dem Ursprung eines Anforderungsinitiators und dem Ursprung der angeforderten Ressource an.

Mit anderen Worten, dieser Header teilt einem Server mit, ob eine Anforderung für eine Ressource vom gleichen Ursprung, derselben Website, einer anderen Website stammt oder es sich um eine "benutzerinitiierte" Anfrage handelt. Der Server kann diese Informationen dann nutzen, um zu entscheiden, ob die Anforderung zugelassen werden soll.

Anfragen vom gleichen Ursprung würden normalerweise standardmäßig zugelassen werden, aber was bei Anfragen von anderen Ursprüngen passiert, hängt möglicherweise weiter davon ab, welche Ressource angefordert wird oder von Informationen in anderen [Fetch-Metadaten-Anforderungsheadern](/de/docs/Glossary/Fetch_metadata_request_header). Standardmäßig sollten Anforderungen, die nicht akzeptiert werden, mit einem {{HTTPStatus("403")}} Antwortcode abgelehnt werden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>[Fetch Metadaten-Anforderungsheader](/de/docs/Glossary/Fetch_Metadata_Request_Header)</td>
    </tr>
    <tr>
      <th scope="row">[Verbotener Header-Name](/de/docs/Glossary/Forbidden_header_name)</th>
      <td>ja (Präfix <code>Sec-</code>)</td>
    </tr>
    <tr>
      <th scope="row">
        [CORS-gesicherter Anforderungsheader](/de/docs/Glossary/CORS-safelisted_request_header)
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
  - : Der Anforderungsinitiator und der Server, der die Ressource bereitstellt, haben eine unterschiedliche Website (z.B. eine Anfrage von "potentially-evil.com" für eine Ressource bei "example.com").
- `same-origin`
  - : Der Anforderungsinitiator und der Server, der die Ressource bereitstellt, haben den gleichen [Ursprung](/de/docs/Glossary/origin) (gleiches Schema, Host und Port).
- `same-site`
  - : Der Anforderungsinitiator und der Server, der die Ressource bereitstellt, haben dieselbe [Website](/de/docs/Glossary/site), einschließlich des Schemas.
- `none`
  - : Diese Anforderung ist eine benutzerinitiierte Operation. Zum Beispiel: Eingabe einer URL in die Adressleiste, Öffnen eines Lesezeichens oder Drag-and-Drop einer Datei in das Browserfenster.

## Beispiele

Eine Fetch-Anfrage an `https://mysite.example/foo.json`, die von einer Webseite auf `https://mysite.example` (mit dem gleichen Port) stammt, ist eine same-origin-Anfrage.
Der Browser generiert den Header `Sec-Fetch-Site: same-origin` wie unten gezeigt, und der Server wird die Anforderung typischerweise zulassen:

```http
GET /foo.json
Sec-Fetch-Dest: empty
Sec-Fetch-Mode: cors
Sec-Fetch-Site: same-origin
```

Eine Fetch-Anfrage an die gleiche URL von einer anderen Website, zum Beispiel `potentially-evil.com`, führt dazu, dass der Browser einen anderen Header generiert (z.B. `Sec-Fetch-Site: cross-site`), den der Server akzeptieren oder ablehnen kann:

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
- [Fetch-Metadaten-Anforderungsheader Spielplatz](https://secmetadata.appspot.com/) (secmetadata.appspot.com)
