---
title: Sec-Fetch-Site
slug: Web/HTTP/Headers/Sec-Fetch-Site
l10n:
  sourceCommit: fe1db9dc292326da0dcace93b10078be50e65241
---

{{HTTPSidebar}}

Der **`Sec-Fetch-Site`** {{Glossary("Fetch metadata request header", "fetch metadata request header")}} gibt die Beziehung zwischen dem Ursprung des Anfragestellers und dem Ursprung der angeforderten Ressource an.

Mit anderen Worten, dieser Header informiert den Server darüber, ob eine Anfrage für eine Ressource vom gleichen Ursprung, der gleichen Website, einer anderen Website oder als „vom Benutzer initiiert“ kommt. Der Server kann dann diese Informationen nutzen, um zu entscheiden, ob die Anfrage erlaubt werden soll.

Anfragen vom gleichen Ursprung würden normalerweise standardmäßig erlaubt, aber was für Anfragen von anderen Ursprüngen geschieht, kann weiter davon abhängen, welche Ressource angefordert wird oder von Informationen in anderen {{Glossary("Fetch metadata request header","Fetch metadata request headers")}}. Standardmäßig sollten Anfragen, die nicht akzeptiert werden, mit einem {{HTTPStatus("403")}} Antwortcode abgelehnt werden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Fetch Metadata Request Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>ja (Prefix <code>Sec-</code>)</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted request header")}}
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
  - : Der Anfragesteller und der Server, der die Ressource hostet, haben eine unterschiedliche Website (z. B. eine Anfrage von "potentially-evil.com" für eine Ressource bei "example.com").
- `same-origin`
  - : Der Anfragesteller und der Server, der die Ressource hostet, haben den gleichen {{Glossary("origin")}} (gleiches Schema, Host und Port).
- `same-site`
  - : Der Anfragesteller und der Server, der die Ressource hostet, haben die gleiche {{glossary("site")}}, einschließlich des Schemas.
- `none`
  - : Diese Anfrage ist eine vom Benutzer initiierte Operation. Zum Beispiel: Eingeben einer URL in die Adressleiste, Öffnen eines Lesezeichens oder Drag-and-Drop einer Datei in das Browserfenster.

## Beispiele

Eine Fetch-Anfrage zu `https://mysite.example/foo.json`, die von einer Webseite auf `https://mysite.example` (mit dem gleichen Port) stammt, ist eine Anfrage vom gleichen Ursprung.
Der Browser generiert den Header `Sec-Fetch-Site: same-origin` wie unten gezeigt, und der Server wird die Anfrage in der Regel erlauben:

```http
GET /foo.json
Sec-Fetch-Dest: empty
Sec-Fetch-Mode: cors
Sec-Fetch-Site: same-origin
```

Eine Fetch-Anfrage zu derselben URL von einer anderen Website, zum Beispiel `potentially-evil.com`, verursacht, dass der Browser einen anderen Header generiert (z. B. `Sec-Fetch-Site: cross-site`), den der Server akzeptieren oder ablehnen kann:

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
- [Fetch Metadata Request Headers Spielplatz](https://secmetadata.appspot.com/) (secmetadata.appspot.com)
