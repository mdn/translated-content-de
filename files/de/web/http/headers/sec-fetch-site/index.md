---
title: Sec-Fetch-Site
slug: Web/HTTP/Headers/Sec-Fetch-Site
l10n:
  sourceCommit: fe1db9dc292326da0dcace93b10078be50e65241
---

{{HTTPSidebar}}

Der **`Sec-Fetch-Site`** {{Glossary("Fetch metadata request header", "fetch metadata request header")}} gibt an, in welcher Beziehung sich der Ursprung eines Anforderers zum Ursprung der angeforderten Ressource befindet.

Mit anderen Worten, dieser Header teilt einem Server mit, ob eine Anforderung für eine Ressource vom selben Ursprung, derselben Seite, einer anderen Seite oder als "benutzerinitiierte" Anforderung stammt. Der Server kann diese Informationen verwenden, um zu entscheiden, ob die Anforderung zugelassen werden soll.

Anforderungen aus dem gleichen Ursprung werden in der Regel standardmäßig zugelassen. Was bei Anforderungen aus anderen Ursprüngen geschieht, hängt möglicherweise weiter davon ab, welche Ressource angefordert wird oder welche Informationen in anderen {{Glossary("Fetch metadata request header", "Fetch metadata request headers")}} enthalten sind. Standardmäßig sollten nicht akzeptierte Anfragen mit einem {{HTTPStatus("403")}} Antwortcode abgelehnt werden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Fetch Metadata Request Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>ja (Präfix <code>Sec-</code>)</td>
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
  - : Der Anforderer und der Server, der die Ressource hostet, haben eine unterschiedliche Seite (d.h. eine Anforderung von "potentially-evil.com" für eine Ressource bei "example.com").
- `same-origin`
  - : Der Anforderer und der Server, der die Ressource hostet, haben denselben {{Glossary("origin")}} (gleiche Schema, Host und Port).
- `same-site`
  - : Der Anforderer und der Server, der die Ressource hostet, haben dieselbe {{glossary("site")}}, einschließlich des Schemas.
- `none`
  - : Diese Anforderung ist ein benutzerinitiierter Vorgang. Zum Beispiel: Eingeben einer URL in die Adressleiste, Öffnen eines Lesezeichens oder Ziehen und Ablegen einer Datei in das Browserfenster.

## Beispiele

Eine `fetch`-Anforderung an `https://mysite.example/foo.json`, die von einer Webseite auf `https://mysite.example` (mit demselben Port) stammt, ist eine same-origin-Anforderung. Der Browser generiert den `Sec-Fetch-Site: same-origin`-Header wie unten gezeigt, und der Server wird die Anforderung typischerweise zulassen:

```http
GET /foo.json
Sec-Fetch-Dest: empty
Sec-Fetch-Mode: cors
Sec-Fetch-Site: same-origin
```

Eine `fetch`-Anforderung an dieselbe URL von einer anderen Seite, zum Beispiel `potentially-evil.com`, führt dazu, dass der Browser einen anderen Header generiert (z.B. `Sec-Fetch-Site: cross-site`), den der Server akzeptieren oder ablehnen kann:

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

- [Schützen Sie Ihre Ressourcen vor Web-Angriffen mit Fetch Metadata](https://web.dev/articles/fetch-metadata) (web.dev)
- [Fetch Metadata Request Headers playground](https://secmetadata.appspot.com/) (secmetadata.appspot.com)
