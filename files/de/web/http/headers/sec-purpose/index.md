---
title: Sec-Purpose
slug: Web/HTTP/Headers/Sec-Purpose
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{HTTPSidebar}}

Der HTTP-Header **`Sec-Purpose`** {{Glossary("fetch_metadata_request_header", "Fetch-Metadaten-Anforderungs-Header")}} gibt den Zweck an, für den die angeforderte Ressource verwendet wird, wenn dieser Zweck etwas anderes ist als die unmittelbare Verwendung durch den User-Agent.

Der einzige derzeit definierte Zweck ist `prefetch`, was anzeigt, dass die Ressource in Erwartung angefordert wird, dass sie von einer Seite benötigt wird, zu der wahrscheinlich in naher Zukunft navigiert wird, wie z.B. einer Seite, die in Suchergebnissen verlinkt ist oder einem Link, über den ein Benutzer geschwebt hat. Der Server kann dieses Wissen verwenden, um: das Ablaufdatum für das Caching der Anfrage anzupassen, die Anfrage zu verweigern oder sie möglicherweise anders zu behandeln, wenn Seitenbesuche gezählt werden.

Der Header wird gesendet, wenn eine Seite geladen wird, die ein [`<link>`](/de/docs/Web/HTML/Element/link)-Element mit dem Attribut [`rel="prefetch"`](/de/docs/Web/HTML/Attributes/rel/prefetch) enthält. Beachten Sie, dass, wenn dieser Header gesetzt ist, ein {{HTTPHeader("Sec-Fetch-Dest")}}-Header in der Anfrage auf `empty` gesetzt sein muss (jeder Wert im [`<link>`](/de/docs/Web/HTML/Element/link)-Attribut [`as`](/de/docs/Web/HTML/Element/link#as) wird ignoriert) und der {{HTTPHeader("Accept")}}-Header sollte mit dem Wert übereinstimmen, der für normale Navigationsanfragen verwendet wird.

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
        {{Glossary("CORS-safelisted_request_header", "CORS-safelist Anforderungs-Header")}}
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

Die erlaubten Token sind:

- `prefetch`
  - : Der Zweck ist, eine Ressource vorauszuladen, die in einer wahrscheinlichen zukünftigen Navigation benötigt werden könnte.

## Beispiele

## Eine vorausschauende Anforderung

Betrachten Sie den Fall, in dem ein Browser eine Datei lädt, die ein [`<link>`](/de/docs/Web/HTML/Element/link)-Element mit dem Attribut `rel="prefetch"` und einem `href`-Attribut enthält, das die Adresse einer Bilddatei enthält. Das resultierende `fetch()` sollte zu einer HTTP-Anfrage führen, bei der `Sec-Purpose: prefetch`, `Sec-Fetch-Dest: empty` und ein `Accept`-Wert verwendet wird, der dem entspricht, den der Browser für die Seitennavigation verwendet.

Ein Beispiel für einen solchen Header (in Firefox) wird unten gegeben:

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
> Zum Zeitpunkt der Erstellung setzt Firefox den `Accept`-Header fälschlicherweise als `Accept: */*` für Vorausschauanforderungen.
> Das Beispiel wurde geändert, um zu zeigen, wie der `Accept`-Wert sein sollte.
> Dieses Problem kann im [Firefox Bug 1836334](https://bugzil.la/1836334) verfolgt werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Sec-Fetch-Dest")}}, {{HTTPHeader("Sec-Fetch-Mode")}}, {{HTTPHeader("Sec-Fetch-Site")}}, {{HTTPHeader("Sec-Fetch-User")}} Fetch-Metadaten-Anforderungs-Header
- {{Glossary("Prefetch", "Vorausschau")}} (Glossar)
- [`<link>`](/de/docs/Web/HTML/Element/link)-Element mit Attribut [`rel="prefetch"`](/de/docs/Web/HTML/Attributes/rel/prefetch)
