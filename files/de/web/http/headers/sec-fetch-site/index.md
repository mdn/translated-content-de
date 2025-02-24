---
title: Sec-Fetch-Site
slug: Web/HTTP/Headers/Sec-Fetch-Site
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{HTTPSidebar}}

Der HTTP-**`Sec-Fetch-Site`**-Header für {{Glossary("fetch_metadata_request_header", "Abfrage-Metadatenanforderungen")}} gibt an, in welcher Beziehung die Ursprungsquelle eines Anfrageinitiators zur Ursprungsquelle der angeforderten Ressource steht.

Mit anderen Worten, dieser Header teilt einem Server mit, ob eine Anforderung für eine Ressource vom gleichen Ursprung, derselben Seite, einer anderen Seite oder ob es sich um eine "benutzerinitiierte" Anforderung handelt. Der Server kann dann diese Informationen verwenden, um zu entscheiden, ob die Anforderung zulässig ist.

Anfragen aus demselben Ursprung würden normalerweise standardmäßig zugelassen, aber was für Anfragen aus anderen Ursprüngen geschieht, kann weiter davon abhängen, welche Ressource angefordert wird oder welche Informationen in einem anderen {{Glossary("fetch_metadata_request_header", "Abfrage-Metadatenanforderungsheader")}} enthalten sind. Standardmäßig sollten nicht akzeptierte Anfragen mit einem {{HTTPStatus("403")}}-Antwortcode abgelehnt werden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Fetch_Metadata_Request_Header", "Abfrage-Metadatenanforderungsheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Unzulässiger Anforderungsheader")}}</th>
      <td>Ja (<code>Sec-</code>-Präfix)</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_request_header", "CORS-zugelassener Anforderungsheader")}}
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
  - : Der Initator der Anfrage und der Server, der die Ressource hostet, besitzen unterschiedliche Seiten (d.h. eine Anfrage von "potentially-evil.com" für eine Ressource bei "example.com").
- `same-origin`
  - : Der Initator der Anfrage und der Server, der die Ressource hostet, haben denselben {{Glossary("origin", "Ursprung")}} (dasselbe Schema, denselben Host und Port).
- `same-site`
  - : Der Initator der Anfrage und der Server, der die Ressource hostet, haben dieselbe {{Glossary("site", "Seite")}}, einschließlich des Schemas.
- `none`
  - : Diese Anfrage ist eine benutzerinitiierte Operation. Zum Beispiel: Eingabe einer URL in die Adressleiste, Öffnen eines Lesezeichens oder Drag-and-Drop einer Datei in das Browserfenster.

## Beispiele

Eine Abfrageanforderung an `https://mysite.example/foo.json`, die von einer Webseite auf `https://mysite.example` ausgeht (mit dem gleichen Port), ist eine Anfrage aus demselben Ursprung.
Der Browser wird den Header `Sec-Fetch-Site: same-origin` generieren, wie unten gezeigt, und der Server wird die Anfrage typischerweise zulassen:

```http
GET /foo.json
Sec-Fetch-Dest: empty
Sec-Fetch-Mode: cors
Sec-Fetch-Site: same-origin
```

Eine Abfrageanforderung an dieselbe URL von einer anderen Seite, zum Beispiel `potentially-evil.com`, veranlasst den Browser, einen anderen Header zu generieren (z.B. `Sec-Fetch-Site: cross-site`), den der Server akzeptieren oder ablehnen kann:

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

- {{HTTPHeader("Sec-Fetch-Mode")}}, {{HTTPHeader("Sec-Fetch-User")}}, {{HTTPHeader("Sec-Fetch-Dest")}} Abfrage-Metadatenanforderungen
- [Schützen Sie Ihre Ressourcen vor Webangriffen mit Fetch Metadata](https://web.dev/articles/fetch-metadata) (web.dev)
- [Fetch Metadata Request Headers Spielplatz](https://secmetadata.appspot.com/) (secmetadata.appspot.com)
