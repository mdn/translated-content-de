---
title: Sec-Purpose header
short-title: Sec-Purpose
slug: Web/HTTP/Reference/Headers/Sec-Purpose
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}

Der HTTP **`Sec-Purpose`** {{Glossary("fetch_metadata_request_header", "Fetch Metadata Request Header")}} gibt den Zweck an, für den die angeforderte Ressource verwendet wird, wenn dieser Zweck etwas anderes als die unmittelbare Nutzung durch den User-Agent ist.

Der einzige Zweck, der derzeit definiert ist, ist `prefetch`, was darauf hinweist, dass die Ressource in Erwartung angefordert wird, dass sie von einer Seite benötigt wird, zu der wahrscheinlich in naher Zukunft navigiert wird, wie eine Seite, die in Suchergebnissen verlinkt ist oder ein Link, über den ein Nutzer geschwebt hat.
Der Server kann dieses Wissen nutzen, um das Ablaufdatum des Caches für die Anfrage anzupassen, die Anfrage zu verweigern oder sie vielleicht anders zu behandeln, wenn Seitenaufrufe gezählt werden.

Der Header wird gesendet, wenn eine Seite geladen wird, die ein [`<link>`](/de/docs/Web/HTML/Reference/Elements/link)-Element mit dem Attribut [`rel="prefetch"`](/de/docs/Web/HTML/Reference/Attributes/rel/prefetch) enthält.
Beachten Sie, dass, wenn dieser Header gesetzt ist, ein {{HTTPHeader("Sec-Fetch-Dest")}}-Header in der Anfrage auf `empty` gesetzt sein muss (jeder Wert im [`<link>`](/de/docs/Web/HTML/Reference/Elements/link) Attribut [`as`](/de/docs/Web/HTML/Reference/Elements/link#as) wird ignoriert) und der {{HTTPHeader("Accept")}}-Header sollte mit dem für normale Navigationsanfragen verwendeten Wert übereinstimmen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Fetch_Metadata_Request_Header", "Fetch Metadata Request Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungsheader")}}</th>
      <td>Ja (<code>Sec-</code>-Präfix)</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_request_header", "CORS-safelisted request header")}}
      </th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Sec-Purpose: prefetch
```

## Direktiven

Die erlaubten Tokens sind:

- `prefetch`
  - : Der Zweck ist das Vorabladen einer Ressource, die in einer wahrscheinlichen zukünftigen Navigation benötigt werden könnte.

## Beispiele

### Eine Vorababruf-Anfrage

Betrachten Sie den Fall, in dem ein Browser eine Datei mit einem [`<link>`](/de/docs/Web/HTML/Reference/Elements/link)-Element lädt, das das Attribut `rel="prefetch"` und ein `href`-Attribut enthält, das die Adresse einer Bilddatei enthält.
Der resultierende `fetch()` sollte in einer HTTP-Anfrage resultieren, in der `Sec-Purpose: prefetch`, `Sec-Fetch-Dest: empty` und ein `Accept`-Wert verwendet werden, der derselbe ist, den der Browser für die Seitennavigation verwendet.

Ein Beispiel für einen solchen Header (auf Firefox) wird unten angegeben:

```http
GET /images/some_image.png HTTP/1.1
Host: example.com
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/116.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate, br
Sec-Purpose: prefetch
Connection: keep-alive
Sec-Fetch-Dest: empty
Sec-Fetch-Mode: no-cors
Sec-Fetch-Site: same-origin
Pragma: no-cache
Cache-Control: no-cache
```

> [!NOTE]
> Zum Zeitpunkt der Erstellung setzt Firefox den `Accept`-Header für Vorabrufe fälschlicherweise als `Accept: */*`.
> Das Beispiel wurde angepasst, um zu zeigen, wie der `Accept`-Wert sein sollte.
> Dieses Problem kann in [Firefox Bug 1836334](https://bugzil.la/1836334) nachverfolgt werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Sec-Fetch-Dest")}}, {{HTTPHeader("Sec-Fetch-Mode")}}, {{HTTPHeader("Sec-Fetch-Site")}}, {{HTTPHeader("Sec-Fetch-User")}} Fetch Metadata Request Headers
- {{Glossary("Prefetch", "Prefetch")}} (Glossar)
- [`<link>`](/de/docs/Web/HTML/Reference/Elements/link)-Element mit Attribut [`rel="prefetch"`](/de/docs/Web/HTML/Reference/Attributes/rel/prefetch)
