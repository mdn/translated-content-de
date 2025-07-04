---
title: Sec-Purpose header
short-title: Sec-Purpose
slug: Web/HTTP/Reference/Headers/Sec-Purpose
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Der HTTP **`Sec-Purpose`** {{Glossary("fetch_metadata_request_header", "Fetch-Metadaten-Anforderungsheader")}} gibt den Zweck an, für den die angeforderte Ressource verwendet wird, wenn dieser Zweck etwas anderes ist als die unmittelbare Verwendung durch den User-Agent.

Der einzige Zweck, der derzeit definiert ist, ist `prefetch`, was darauf hinweist, dass die Ressource in Erwartung angefordert wird, dass sie von einer Seite benötigt wird, die wahrscheinlich in naher Zukunft aufgerufen wird, wie eine Seite in den Suchergebnissen oder ein Link, über den ein Benutzer mit der Maus schwebt.
Der Server kann dieses Wissen nutzen, um: die Cache-Ablauffrist für die Anfrage anzupassen, die Anfrage zu verweigern oder möglicherweise anders zu behandeln, wenn Seitenbesuche gezählt werden.

Der Header wird gesendet, wenn eine Seite geladen wird, die ein [`<link>`](/de/docs/Web/HTML/Reference/Elements/link)-Element mit dem Attribut [`rel="prefetch"`](/de/docs/Web/HTML/Reference/Attributes/rel/prefetch) enthält.
Beachten Sie, dass, wenn dieser Header gesetzt ist, dann im der Anfrage ein {{HTTPHeader("Sec-Fetch-Dest")}} Header auf `empty` gesetzt sein muss (jeder Wert im [`<link>`](/de/docs/Web/HTML/Reference/Elements/link)-Attribut [`as`](/de/docs/Web/HTML/Reference/Elements/link#as) wird ignoriert) und der {{HTTPHeader("Accept")}} Header sollte dem Wert für normale Navigationsanfragen entsprechen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Fetch_Metadata_Request_Header", "Fetch-Metadaten-Anforderungsheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungsheader")}}</th>
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

Die erlaubten Token sind:

- `prefetch`
  - : Der Zweck ist, eine Ressource vorab zu laden, die bei einer wahrscheinlichen zukünftigen Navigation benötigt werden könnte.

## Beispiele

### Eine Prefetch-Anfrage

Betrachten Sie den Fall, in dem ein Browser eine Datei mit einem [`<link>`](/de/docs/Web/HTML/Reference/Elements/link)-Element lädt, das das Attribut `rel="prefetch"` und ein `href`-Attribut mit der Adresse einer Bilddatei enthält.
Das resultierende `fetch()` sollte zu einer HTTP-Anfrage führen, bei der `Sec-Purpose: prefetch`, `Sec-Fetch-Dest: empty` und ein `Accept`-Wert verwendet wird, der dem beim Browsen von Seiten entspricht.

Ein Beispiel für einen solchen Header (in Firefox) ist unten gegeben:

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
> Zum Zeitpunkt des Schreibens setzt Firefox fälschlicherweise den `Accept`-Header als `Accept: */*` für Vorabladungen.
> Das Beispiel wurde geändert, um zu zeigen, welcher `Accept`-Wert verwendet werden sollte.
> Dieses Problem kann im [Firefox-Bug 1836334](https://bugzil.la/1836334) nachverfolgt werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Sec-Fetch-Dest")}}, {{HTTPHeader("Sec-Fetch-Mode")}}, {{HTTPHeader("Sec-Fetch-Site")}}, {{HTTPHeader("Sec-Fetch-User")}} fetch metadaten Anforderungsheader
- {{Glossary("Prefetch", "Prefetch")}} (Glossar)
- [`<link>`](/de/docs/Web/HTML/Reference/Elements/link)-Element mit Attribut [`rel="prefetch"`](/de/docs/Web/HTML/Reference/Attributes/rel/prefetch)
