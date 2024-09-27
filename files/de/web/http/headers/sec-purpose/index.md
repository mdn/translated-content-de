---
title: Sec-Purpose
slug: Web/HTTP/Headers/Sec-Purpose
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}

Der **`Sec-Purpose`** [Fetch-Metadaten-Anforderungs-Header](/de/docs/Glossary/Fetch_metadata_request_header) gibt den Zweck an, zu dem die angeforderte Ressource verwendet wird, wenn dieser Zweck nicht die unmittelbare Verwendung durch den User-Agent ist.

Der einzige derzeit definierte Zweck ist `prefetch`, der angibt, dass die Ressource angefordert wird in der Erwartung, dass sie von einer Seite benötigt wird, die wahrscheinlich in naher Zukunft navigiert wird, z.B. eine Seite, die in Suchergebnissen verlinkt ist oder ein Link, über den ein Benutzer schwebt.
Der Server kann dieses Wissen nutzen, um: das Ablaufdatum des Caches für die Anfrage anzupassen, die Anfrage zu verbieten, oder sie möglicherweise anders zu behandeln, wenn Seitenbesuche gezählt werden.

Der Header wird gesendet, wenn eine Seite geladen wird, die ein [`<link>`](/de/docs/Web/HTML/Element/link)-Element mit dem Attribut [`rel="prefetch"`](/de/docs/Web/HTML/Attributes/rel/prefetch) enthält.
Beachten Sie, dass, wenn dieser Header gesetzt ist, ein {{HTTPHeader("Sec-Fetch-Dest")}}-Header in der Anfrage auf `empty` gesetzt sein muss (jeder Wert im [`<link>`](/de/docs/Web/HTML/Element/link)-Attribut [`as`](/de/docs/Web/HTML/Element/link#as) wird ignoriert) und der {{HTTPHeader("Accept")}}-Header sollte mit dem Wert übereinstimmen, der für normale Navigationsanfragen verwendet wird.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>[Fetch-Metadaten-Anforderungs-Header](/de/docs/Glossary/Fetch_Metadata_Request_Header)</td>
    </tr>
    <tr>
      <th scope="row">[Verbotener Header-Name](/de/docs/Glossary/Forbidden_header_name)</th>
      <td>ja (Präfix <code>Sec-</code>)</td>
    </tr>
    <tr>
      <th scope="row">
        [CORS-Safelisted Header](/de/docs/Glossary/CORS-safelisted_request_header)
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
  - : Der Zweck ist das Vorabrufen einer Ressource, die in einer wahrscheinlichen zukünftigen Navigation benötigt werden könnte.

## Beispiele

## Eine Vorabruf-Anfrage

Betrachten Sie den Fall, in dem ein Browser eine Datei lädt, die ein [`<link>`](/de/docs/Web/HTML/Element/link)-Element mit dem Attribut `rel="prefetch"` und einem `href`-Attribut enthält, das die Adresse einer Bilddatei enthält.
Das resultierende `fetch()` sollte zu einer HTTP-Anfrage führen, bei der `Sec-Purpose: prefetch`, `Sec-Fetch-Dest: empty` und ein `Accept`-Wert, der derselbe ist, wie der Browser ihn für die Seitennavigation verwendet, vorliegen.

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
> Zum Zeitpunkt des Schreibens setzt Firefox den `Accept`-Header fälschlicherweise als `Accept: */*` für Vorabrufe.
> Das Beispiel wurde geändert, um zu zeigen, was der `Accept`-Wert sein sollte.
> Dieses Problem kann in [Firefox Bug 1836334](https://bugzil.la/1836334) verfolgt werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Prefetch](/de/docs/Glossary/Prefetch) (Glossar)
- [`<link>`](/de/docs/Web/HTML/Element/link)-Element mit Attribut [`rel="prefetch"`](/de/docs/Web/HTML/Attributes/rel/prefetch)
