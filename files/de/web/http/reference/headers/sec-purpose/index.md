---
title: Sec-Purpose
slug: Web/HTTP/Reference/Headers/Sec-Purpose
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTTPSidebar}}

Der HTTP **`Sec-Purpose`** {{Glossary("fetch_metadata_request_header", "Fetch-Metadata-Anforderungsheader")}} gibt den Zweck an, für den die angeforderte Ressource verwendet werden soll, wenn dieser Zweck etwas anderes ist als die unmittelbare Verwendung durch den Benutzer-Agent.

Der einzige Zweck, der derzeit definiert ist, ist `prefetch`. Dies zeigt an, dass die Ressource angefordert wird, in Erwartung, dass sie von einer Seite benötigt wird, auf die wahrscheinlich in naher Zukunft navigiert wird, wie z.B. eine in Suchergebnissen verlinkte Seite oder ein Link, über den ein Benutzer geschwebt hat. Der Server kann dieses Wissen nutzen, um: das Ablaufdatum der Zwischenspeicherung für die Anfrage anzupassen, die Anfrage zu verweigern oder sie möglicherweise anders zu behandeln, wenn Seitenaufrufe gezählt werden.

Der Header wird gesendet, wenn eine Seite geladen wird, die ein [`<link>`](/de/docs/Web/HTML/Reference/Elements/link)-Element mit dem Attribut [`rel="prefetch"`](/de/docs/Web/HTML/Reference/Attributes/rel/prefetch) enthält. Beachten Sie, dass, wenn dieser Header gesetzt ist, ein {{HTTPHeader("Sec-Fetch-Dest")}}-Header in der Anfrage auf `empty` gesetzt sein muss (jeder Wert im [`<link>`](/de/docs/Web/HTML/Reference/Elements/link)-Attribut [`as`](/de/docs/Web/HTML/Reference/Elements/link#as) wird ignoriert) und der {{HTTPHeader("Accept")}}-Header sollte mit dem Wert übereinstimmen, der für normale Navigationsanfragen verwendet wird.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Fetch_Metadata_Request_Header", "Fetch Metadata Anforderungsheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungsheader")}}</th>
      <td>Ja (<code>Sec-</code>-Präfix)</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_request_header", "CORS-safelisted Anforderungsheader")}}
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
  - : Der Zweck besteht darin, eine Ressource vorzuhalten, die möglicherweise in einer wahrscheinlichen zukünftigen Navigation benötigt wird.

## Beispiele

### Eine Prefetch-Anfrage

Betrachten Sie den Fall, in dem ein Browser eine Datei mit einem [`<link>`](/de/docs/Web/HTML/Reference/Elements/link)-Element lädt, das das Attribut `rel="prefetch"` und ein `href`-Attribut enthält, das die Adresse einer Bilddatei enthält. Das resultierende `fetch()` sollte zu einer HTTP-Anfrage führen, bei der `Sec-Purpose: prefetch`, `Sec-Fetch-Dest: empty` und ein `Accept`-Wert gleich dem ist, den der Browser für die Seitennavigation verwendet.

Ein Beispiel für einen solchen Header (auf Firefox) wird unten gegeben:

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
> Zum Zeitpunkt des Schreibens setzt Firefox den `Accept`-Header für Prefetches fälschlicherweise auf `Accept: */*`.
> Das Beispiel wurde so modifiziert, dass es zeigt, wie der `Accept`-Wert sein sollte.
> Dieses Problem kann im [Firefox Bug 1836334](https://bugzil.la/1836334) nachverfolgt werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Sec-Fetch-Dest")}}, {{HTTPHeader("Sec-Fetch-Mode")}}, {{HTTPHeader("Sec-Fetch-Site")}}, {{HTTPHeader("Sec-Fetch-User")}} Fetch-Metadata-Anforderungsheader
- {{Glossary("Prefetch", "Prefetch")}} (Glossar)
- [`<link>`](/de/docs/Web/HTML/Reference/Elements/link)-Element mit Attribut [`rel="prefetch"`](/de/docs/Web/HTML/Reference/Attributes/rel/prefetch)
