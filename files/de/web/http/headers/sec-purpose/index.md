---
title: Sec-Purpose
slug: Web/HTTP/Headers/Sec-Purpose
l10n:
  sourceCommit: 6c32e8b21a39b1b8d3db7a194d2350e0f8218b64
---

{{HTTPSidebar}}

Der HTTP **`Sec-Purpose`** {{Glossary("fetch_metadata_request_header", "Fetch-Metadaten-Anforderungsheader")}} zeigt den Zweck an, für den die angeforderte Ressource verwendet wird, wenn dieser Zweck nicht der unmittelbare Gebrauch durch den User-Agent ist.

Der einzige derzeit definierte Zweck ist `prefetch`, was darauf hinweist, dass die Ressource in Erwartung angefordert wird, dass sie für eine Seite benötigt wird, die wahrscheinlich in naher Zukunft navigiert wird, wie z.B. eine in Suchergebnissen verlinkte Seite oder ein Link, den ein Benutzer überfahren hat. Der Server kann dieses Wissen nutzen, um: das Ablaufdatum des Cache für die Anfrage anzupassen, die Anfrage zu verweigern oder sie möglicherweise anders zu behandeln, wenn Seitenbesuche gezählt werden.

Der Header wird gesendet, wenn eine Seite geladen wird, die ein [`<link>`](/de/docs/Web/HTML/Element/link) Element mit dem Attribut [`rel="prefetch"`](/de/docs/Web/HTML/Attributes/rel/prefetch) enthält. Beachten Sie, dass, wenn dieser Header gesetzt ist, ein {{HTTPHeader("Sec-Fetch-Dest")}} Header in der Anfrage auf `empty` gesetzt werden muss (jeder Wert im [`<link>`](/de/docs/Web/HTML/Element/link) Attribut [`as`](/de/docs/Web/HTML/Element/link#as) wird ignoriert) und der {{HTTPHeader("Accept")}} Header sollte mit dem Wert übereinstimmen, der für normale Navigationsanfragen verwendet wird.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Fetch_Metadata_Request_Header", "Fetch-Metadaten-Anforderungsheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Headername")}}</th>
      <td>Ja (<code>Sec-</code> Präfix)</td>
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
  - : Der Zweck ist, eine Ressource vorab zu laden, die in einer wahrscheinlichen zukünftigen Navigation benötigt werden könnte.

## Beispiele

## Eine Prefetch-Anfrage

Betrachten Sie den Fall, in dem ein Browser eine Datei mit einem [`<link>`](/de/docs/Web/HTML/Element/link) Element lädt, das das Attribut `rel="prefetch"` und ein `href` Attribut mit der Adresse einer Bilddatei enthält. Das resultierende `fetch()` sollte zu einer HTTP-Anfrage führen, bei der `Sec-Purpose: prefetch`, `Sec-Fetch-Dest: empty` und ein `Accept`-Wert gesetzt sind, der dem entspricht, den der Browser für die Seitennavigation verwendet.

Ein Beispiel für einen solchen Header (in Firefox) wird unten angegeben:

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
> Zum Zeitpunkt des Schreibens setzt FireFox den `Accept` Header fälschlicherweise als `Accept: */*` für Prefetches. Das Beispiel wurde verändert, um zu zeigen, wie der `Accept`-Wert sein sollte. Dieses Problem kann in [Firefox Bug 1836334](https://bugzil.la/1836334) verfolgt werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Sec-Fetch-Dest")}}, {{HTTPHeader("Sec-Fetch-Mode")}}, {{HTTPHeader("Sec-Fetch-Site")}}, {{HTTPHeader("Sec-Fetch-User")}} Fetch-Metadaten-Anforderungsheader
- {{Glossary("Prefetch", "Prefetch")}} (Glossar)
- [`<link>`](/de/docs/Web/HTML/Element/link) Element mit Attribut [`rel="prefetch"`](/de/docs/Web/HTML/Attributes/rel/prefetch)
