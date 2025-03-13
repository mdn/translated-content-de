---
title: Sec-Fetch-Site
slug: Web/HTTP/Reference/Headers/Sec-Fetch-Site
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Der HTTP-**`Sec-Fetch-Site`**-{{Glossary("fetch_metadata_request_header", "Fetch-Metadaten-Anforderungs-Header")}} gibt das Verhältnis zwischen dem Ursprungsort eines Anforderung-Initiators und dem Ursprungsort der angeforderten Ressource an.

Mit anderen Worten, dieser Header teilt einem Server mit, ob eine Anforderung für eine Ressource vom selben Ursprung, derselben Seite, einer anderen Seite stammt oder ob es sich um eine "benutzerinitiierte" Anforderung handelt. Der Server kann diese Informationen dann verwenden, um zu entscheiden, ob die Anforderung erlaubt werden sollte.

Anforderungen gleichen Ursprungs würden in der Regel standardmäßig zugelassen, aber was bei Anforderungen von anderen Ursprüngen passiert, kann weiter davon abhängen, welche Ressource angefordert wird oder welche Informationen in einem anderen {{Glossary("fetch_metadata_request_header", "Fetch-Metadaten-Anforderungs-Header")}} enthalten sind. Standardmäßig sollten Anforderungen, die nicht akzeptiert werden, mit einem {{HTTPStatus("403")}}-Antwortcode abgelehnt werden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Fetch_Metadata_Request_Header", "Fetch-Metadaten-Anforderungs-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungs-Header")}}</th>
      <td>Ja (<code>Sec-</code>-Präfix)</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_request_header", "CORS-safelisted Anforderungs-Header")}}
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
  - : Der Anforderungs-Initiator und der Server, auf dem die Ressource gehostet wird, haben eine unterschiedliche Seite (d.h. eine Anforderung von "potentially-evil.com" für eine Ressource bei "example.com").
- `same-origin`
  - : Der Anforderungs-Initiator und der Server, auf dem die Ressource gehostet wird, haben denselben {{Glossary("origin", "Ursprung")}} (gleiches Schema, gleicher Host und gleicher Port).
- `same-site`
  - : Der Anforderungs-Initiator und der Server, auf dem die Ressource gehostet wird, haben dieselbe {{Glossary("site", "Seite")}}, einschließlich des Schemas.
- `none`
  - : Diese Anforderung ist ein benutzerinitiierter Vorgang. Zum Beispiel: Eingabe einer URL in die Adressleiste, Öffnen eines Lesezeichens oder Ziehen und Ablegen einer Datei in das Browserfenster.

## Beispiele

Eine Fetch-Anforderung an `https://mysite.example/foo.json`, die von einer Webseite auf `https://mysite.example` (mit demselben Port) ausgeht, ist eine Anforderung gleichen Ursprungs. Der Browser wird den Header `Sec-Fetch-Site: same-origin` generieren, wie unten gezeigt, und der Server wird die Anforderung typischerweise erlauben:

```http
GET /foo.json
Sec-Fetch-Dest: empty
Sec-Fetch-Mode: cors
Sec-Fetch-Site: same-origin
```

Eine Fetch-Anforderung an dieselbe URL von einer anderen Seite, zum Beispiel `potentially-evil.com`, veranlasst den Browser, einen anderen Header zu generieren (z. B. `Sec-Fetch-Site: cross-site`), den der Server akzeptieren oder ablehnen kann:

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
- [Schützen Sie Ihre Ressourcen vor Webangriffen mit Fetch-Metadaten](https://web.dev/articles/fetch-metadata) (web.dev)
- [Fetch Metadata Request Headers playground](https://secmetadata.appspot.com/) (secmetadata.appspot.com)
