---
title: Sec-Fetch-Site
slug: Web/HTTP/Reference/Headers/Sec-Fetch-Site
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{HTTPSidebar}}

Der HTTP-Header **`Sec-Fetch-Site`** {{Glossary("fetch_metadata_request_header", "fetch metadata request header")}} gibt die Beziehung zwischen dem Ursprungsort des Anforderers und dem Ursprungsort der angeforderten Ressource an.

Mit anderen Worten, dieser Header teilt einem Server mit, ob eine Anforderung für eine Ressource vom gleichen Ursprung, von der gleichen Website, von einer anderen Website oder als "vom Benutzer initiierte" Anforderung stammt. Der Server kann dann diese Information nutzen, um zu entscheiden, ob die Anforderung zulässig sein sollte.

Anforderungen aus demselben Ursprung würden normalerweise standardmäßig zugelassen, aber was bei Anforderungen aus anderen Ursprüngen geschieht, kann zusätzlich davon abhängen, welche Ressource angefordert wird oder von Informationen in einem anderen {{Glossary("fetch_metadata_request_header", "fetch metadata request header")}}. Anforderungen, die nicht akzeptiert werden, sollten standardmäßig mit einem {{HTTPStatus("403")}} Antwortcode abgelehnt werden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Fetch_Metadata_Request_Header", "Fetch Metadata Request Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anfrage-Header")}}</th>
      <td>Ja (<code>Sec-</code> Präfix)</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_request_header", "CORS-gesicherter Anfrage-Header")}}
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
  - : Der Anforderer und der Server, der die Ressource hostet, haben eine unterschiedliche Website (z. B. eine Anforderung von "potentially-evil.com" für eine Ressource bei "example.com").
- `same-origin`
  - : Der Anforderer und der Server, der die Ressource hostet, haben denselben {{Glossary("origin", "origin")}} (gleiches Schema, Host und Port).
- `same-site`
  - : Der Anforderer und der Server, der die Ressource hostet, haben dieselbe {{Glossary("site", "site")}}, einschließlich des Schemas.
- `none`
  - : Diese Anforderung ist eine vom Benutzer initiierte Operation. Zum Beispiel: Eingeben einer URL in die Adressleiste, Öffnen eines Lesezeichens oder Ziehen und Ablegen einer Datei in das Browserfenster.

## Beispiele

Eine Fetch-Anfrage an `https://mysite.example/foo.json`, die von einer Webseite auf `https://mysite.example` (mit demselben Port) ausgeht, ist eine same-origin-Anforderung. Der Browser generiert den Header `Sec-Fetch-Site: same-origin`, wie unten gezeigt, und der Server wird die Anforderung typischerweise zulassen:

```http
GET /foo.json
Sec-Fetch-Dest: empty
Sec-Fetch-Mode: cors
Sec-Fetch-Site: same-origin
```

Eine Fetch-Anfrage an dieselbe URL von einer anderen Seite, z. B. `potentially-evil.com`, führt dazu, dass der Browser einen anderen Header generiert (z. B. `Sec-Fetch-Site: cross-site`), den der Server annehmen oder ablehnen kann:

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
- [Fetch Metadata Request Headers Spielwiese](https://secmetadata.appspot.com/) (secmetadata.appspot.com)
