---
title: Sec-Purpose
slug: Web/HTTP/Headers/Sec-Purpose
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}

Der **`Sec-Purpose`** [Fetch-Metadaten-Anforderungsheader](/de/docs/Glossary/Fetch_metadata_request_header) gibt den Zweck an, für den die angeforderte Ressource verwendet wird, wenn dieser Zweck ein anderer ist als die unmittelbare Nutzung durch den User-Agent.

Der derzeit einzige definierte Zweck ist `prefetch`, was darauf hinweist, dass die Ressource in Erwartung angefordert wird, dass sie von einer Seite benötigt wird, zu der wahrscheinlich in naher Zukunft navigiert wird, wie z.B. eine in den Suchergebnissen verlinkte Seite oder ein Link, über den der Benutzer mit der Maus gefahren ist.
Der Server kann diese Information nutzen, um: das Ablaufdatum des Caches für die Anfrage anzupassen, die Anfrage abzulehnen oder sie möglicherweise anders zu behandeln, wenn Seitenaufrufe gezählt werden.

Der Header wird gesendet, wenn eine Seite geladen wird, die ein [`<link>`](/de/docs/Web/HTML/Element/link)-Element mit dem Attribut [`rel="prefetch"`](/de/docs/Web/HTML/Attributes/rel/prefetch) enthält.
Beachten Sie, dass, wenn dieser Header gesetzt ist, ein {{HTTPHeader("Sec-Fetch-Dest")}}-Header in der Anfrage auf `empty` gesetzt werden muss (jeder Wert im [`<link>`](/de/docs/Web/HTML/Element/link)-Attribut [`as`](/de/docs/Web/HTML/Element/link#as) wird ignoriert) und der {{HTTPHeader("Accept")}}-Header sollte mit dem Wert übereinstimmen, der für normale Navigationsanfragen verwendet wird.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>[Fetch-Metadaten-Anforderungsheader](/de/docs/Glossary/Fetch_Metadata_Request_Header)</td>
    </tr>
    <tr>
      <th scope="row">[Verbotener Header-Name](/de/docs/Glossary/Forbidden_header_name)</th>
      <td>ja (Präfix <code>Sec-</code>)</td>
    </tr>
    <tr>
      <th scope="row">
        [CORS-safelisted Anforderungsheader](/de/docs/Glossary/CORS-safelisted_request_header)
      </th>
      <td>nein</td>
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
  - : Der Zweck besteht darin, eine Ressource vorzuladen, die möglicherweise in einer wahrscheinlichen zukünftigen Navigation benötigt wird.

## Beispiele

## Eine Prefetch-Anfrage

Betrachten Sie den Fall, bei dem ein Browser eine Datei lädt, die ein [`<link>`](/de/docs/Web/HTML/Element/link)-Element mit dem Attribut `rel="prefetch"` und einem `href`-Attribut enthält, das die Adresse einer Bilddatei enthält.
Das resultierende `fetch()` sollte zu einer HTTP-Anfrage führen, bei der `Sec-Purpose: prefetch`, `Sec-Fetch-Dest: empty` und ein `Accept`-Wert, der dem entspricht, den der Browser für die Seitennavigation verwendet, gesetzt sind.

Ein Beispiel für einen solchen Header (unter Firefox) finden Sie unten:

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
> Zum Zeitpunkt der Erstellung dieses Dokuments setzt FireFox den `Accept`-Header fälschlicherweise als `Accept: */*` für Prefetches.
> Das Beispiel wurde geändert, um zu zeigen, was der `Accept`-Wert sein sollte.
> Dieses Problem kann in [Firefox Bug 1836334](https://bugzil.la/1836334) nachverfolgt werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Prefetch](/de/docs/Glossary/Prefetch) (Glossar)
- [`<link>`](/de/docs/Web/HTML/Element/link) Element mit Attribut [`rel="prefetch"`](/de/docs/Web/HTML/Attributes/rel/prefetch)
