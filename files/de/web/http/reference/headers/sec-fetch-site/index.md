---
title: Sec-Fetch-Site header
short-title: Sec-Fetch-Site
slug: Web/HTTP/Reference/Headers/Sec-Fetch-Site
l10n:
  sourceCommit: 7e4e8954972d77196e4beedca4a3f8610da34dc9
---

Der HTTP-[Fetch-Metadata-Request-Header](/de/docs/Web/HTTP/Guides/Fetch_metadata) **`Sec-Fetch-Site`** gibt an, in welcher Beziehung die Origin des Anfragenden zur Origin der angeforderten Ressource steht.

Anders ausgedrückt teilt dieser Header einem Server mit, ob eine Ressourcenanfrage von derselben Origin, derselben Site oder einer anderen Site stammt oder ob sie durch eine Benutzeraktion ausgelöst wurde. Anhand dieser Information kann der Server entscheiden, ob die Anfrage zugelassen werden soll.

Anfragen von derselben Origin werden in der Regel standardmäßig zugelassen. Wie Anfragen von anderen Origins behandelt werden, kann zusätzlich davon abhängen, welche Ressource angefordert wird oder welche Informationen ein anderer Fetch-Metadata-Request-Header enthält. Nicht zugelassene Anfragen sollten standardmäßig mit dem Antwortstatuscode {{HTTPStatus("403")}} abgewiesen werden.

Der Header wird nur in Anfragen an [potenziell vertrauenswürdige URLs](/de/docs/Web/Security/Defenses/Secure_Contexts#potentially_trustworthy_urls) gesendet.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Fetch_Metadata_Request_Header", "Fetch-Metadata-Request-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Request-Header")}}</th>
      <td>Ja (Präfix <code>Sec-</code>)</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_request_header", "CORS-safelisted Request-Header")}}
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
  - : Der Anfragende und der Server, der die Ressource bereitstellt, gehören zu unterschiedlichen Sites (z. B. eine Anfrage von „potentially-evil.com“ nach einer Ressource auf „example.com“).
- `same-origin`
  - : Der Anfragende und der Server, der die Ressource bereitstellt, haben dieselbe {{Glossary("origin", "Origin")}} (dasselbe Schema, denselben Host und denselben Port).
- `same-site`
  - : Der Anfragende und der Server, der die Ressource bereitstellt, gehören zur selben {{Glossary("site", "Site")}}, einschließlich des Schemas.
- `none`
  - : Diese Anfrage wurde durch eine Benutzeraktion ausgelöst. Beispiele sind die Eingabe einer URL in die Adressleiste, das Öffnen eines Lesezeichens oder das Ziehen einer Datei in das Browserfenster.

## Beispiele

Eine Fetch-Anfrage an `https://mysite.example/foo.json`, die von einer Webseite auf `https://mysite.example` ausgeht (mit demselben Port), ist eine Anfrage von derselben Origin.
Der Browser erzeugt den Header `Sec-Fetch-Site: same-origin` wie unten gezeigt, und der Server lässt die Anfrage normalerweise zu:

```http
GET /foo.json
Sec-Fetch-Dest: empty
Sec-Fetch-Mode: cors
Sec-Fetch-Site: same-origin
```

Bei einer Fetch-Anfrage an dieselbe URL von einer anderen Site, beispielsweise `potentially-evil.com`, erzeugt der Browser einen anderen Header (z. B. `Sec-Fetch-Site: cross-site`). Der Server kann entscheiden, ob er die Anfrage zulässt oder ablehnt:

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

- Die Fetch-Metadata-Request-Header {{HTTPHeader("Sec-Fetch-Mode")}}, {{HTTPHeader("Sec-Fetch-User")}} und {{HTTPHeader("Sec-Fetch-Dest")}}
- [Schützen Sie Ihre Ressourcen mit Fetch Metadata vor Webangriffen](https://web.dev/articles/fetch-metadata) (web.dev)
- [Testumgebung für Fetch-Metadata-Request-Header](https://secmetadata.appspot.com/) (secmetadata.appspot.com)
