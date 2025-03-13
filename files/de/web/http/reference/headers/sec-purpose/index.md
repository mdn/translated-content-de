---
title: Sec-Purpose
slug: Web/HTTP/Reference/Headers/Sec-Purpose
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Der HTTP **`Sec-Purpose`** {{Glossary("fetch_metadata_request_header", "Fetch-Metadaten-Anforderungsheader")}} gibt den Zweck an, für den die angeforderte Ressource verwendet wird, wenn dieser Zweck etwas anderes als die unmittelbare Verwendung durch den User-Agent ist.

Der einzige derzeit definierte Zweck ist `prefetch`, was darauf hinweist, dass die Ressource angefordert wird, in der Erwartung, dass sie von einer Seite benötigt wird, die wahrscheinlich in naher Zukunft angesteuert wird, wie z.B. eine Seite, die in den Suchergebnissen verlinkt ist, oder ein Link, über den ein Benutzer mit der Maus gefahren ist.
Der Server kann dieses Wissen nutzen, um: das Ablaufdatum im Cache für die Anforderung anzupassen, die Anforderung zu verweigern oder sie möglicherweise anders zu behandeln, wenn Seitenaufrufe gezählt werden.

Der Header wird gesendet, wenn eine Seite geladen wird, die ein [`<link>`](/de/docs/Web/HTML/Element/link)-Element mit dem Attribut [`rel="prefetch"`](/de/docs/Web/HTML/Attributes/rel/prefetch) besitzt.
Beachten Sie, dass, wenn dieser Header gesetzt ist, ein {{HTTPHeader("Sec-Fetch-Dest")}}-Header in der Anforderung auf `empty` gesetzt sein muss (jeder Wert im [`<link>`](/de/docs/Web/HTML/Element/link)-Attribut [`as`](/de/docs/Web/HTML/Element/link#as) wird ignoriert) und der {{HTTPHeader("Accept")}}-Header sollte den gleichen Wert haben wie bei normalen Navigationsanforderungen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Fetch_Metadata_Request_Header", "Fetch-Metadaten-Anforderungsheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungsheader")}}</th>
      <td>Ja (<code>Sec-</code>-Präfix)</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_request_header", "CORS-sichere Anforderungsheader")}}
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
  - : Der Zweck ist, eine Ressource vorabzuladen, die möglicherweise für eine wahrscheinliche zukünftige Navigation benötigt wird.

## Beispiele

### Eine Prefetch-Anforderung

Betrachten Sie den Fall, in dem ein Browser eine Datei mit einem [`<link>`](/de/docs/Web/HTML/Element/link)-Element lädt, das das Attribut `rel="prefetch"` und ein `href`-Attribut mit der Adresse einer Bilddatei enthält.
Das resultierende `fetch()` sollte in einer HTTP-Anforderung enden, bei der `Sec-Purpose: prefetch`, `Sec-Fetch-Dest: empty` und ein `Accept`-Wert gesetzt sind, der dem gleichen entspricht, den der Browser für die Seitennavigation verwendet.

Ein Beispiel für einen solchen Header (auf Firefox) ist unten angegeben:

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
> Zum Zeitpunkt der Erstellung dieses Dokuments setzt Firefox den `Accept`-Header fälschlicherweise auf `Accept: */*` für Prefetches.
> Das Beispiel wurde angepasst, um zu zeigen, wie der `Accept`-Wert aussehen sollte.
> Dieses Problem kann im [Firefox-Fehler 1836334](https://bugzil.la/1836334) verfolgt werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Sec-Fetch-Dest")}}, {{HTTPHeader("Sec-Fetch-Mode")}}, {{HTTPHeader("Sec-Fetch-Site")}}, {{HTTPHeader("Sec-Fetch-User")}} Fetch-Metadaten-Anforderungsheader
- {{Glossary("Prefetch", "Prefetch")}} (Glossar)
- [`<link>`](/de/docs/Web/HTML/Element/link)-Element mit dem Attribut [`rel="prefetch"`](/de/docs/Web/HTML/Attributes/rel/prefetch)
