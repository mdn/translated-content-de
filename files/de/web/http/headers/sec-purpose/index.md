---
title: Sec-Purpose
slug: Web/HTTP/Headers/Sec-Purpose
l10n:
  sourceCommit: d666d5ed812b56cbc9c6cba853494976da1f1dd2
---

{{HTTPSidebar}}

Der HTTP **`Sec-Purpose`** {{Glossary("fetch_metadata_request_header", "Fetch-Metadaten-Anforderungsheader")}} gibt den Zweck an, für den die angeforderte Ressource verwendet wird, wenn dieser Zweck etwas anderes ist als die unmittelbare Nutzung durch den Benutzeragenten.

Der einzige derzeit definierte Zweck ist `prefetch`, was darauf hinweist, dass die Ressource angefordert wird, in Erwartung dessen, dass sie von einer Seite benötigt wird, zu der wahrscheinlich bald navigiert wird, wie z.B. eine in den Suchergebnissen verlinkte Seite oder ein Link, über den ein Benutzer mit der Maus fährt.
Der Server kann diese Information nutzen, um: die Ablaufzeit des Caches für die Anfrage anzupassen, die Anfrage abzulehnen oder sie möglicherweise anders zu behandeln, wenn Seitenbesuche gezählt werden.

Der Header wird gesendet, wenn eine Seite geladen wird, die ein [`<link>`](/de/docs/Web/HTML/Element/link)-Element mit dem Attribut [`rel="prefetch"`](/de/docs/Web/HTML/Attributes/rel/prefetch) enthält.
Beachten Sie, dass wenn dieser Header gesetzt ist, dann muss ein {{HTTPHeader("Sec-Fetch-Dest")}}-Header in der Anfrage auf `empty` gesetzt sein (jeder Wert im [`<link>`](/de/docs/Web/HTML/Element/link)-Attribut [`as`](/de/docs/Web/HTML/Element/link#as) wird ignoriert) und der {{HTTPHeader("Accept")}}-Header sollte dem Wert entsprechen, der für normale Navigationsanfragen verwendet wird.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>{{Glossary("Fetch_Metadata_Request_Header", "Fetch-Metadaten-Anforderungsheader")}}</td>
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

Die erlaubten Token sind:

- `prefetch`
  - : Der Zweck ist, eine Ressource vorabzuladen, die möglicherweise in einer wahrscheinlichen zukünftigen Navigation benötigt wird.

## Beispiele

### Eine Vorabladeanfrage

Betrachten Sie den Fall, in dem ein Browser eine Datei mit einem [`<link>`](/de/docs/Web/HTML/Element/link)-Element lädt, das das Attribut `rel="prefetch"` und ein `href`-Attribut mit der Adresse einer Bilddatei enthält.
Das resultierende `fetch()` sollte in einer HTTP-Anfrage führen, bei der `Sec-Purpose: prefetch`, `Sec-Fetch-Dest: empty`, und ein `Accept`-Wert verwendet wird, der dem entspricht, den der Browser für die Seitennavigation verwendet.

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
> Zum Zeitpunkt des Schreibens setzt Firefox den `Accept`-Header für Vorabladen fälschlicherweise als `Accept: */*`.
> Das Beispiel wurde geändert, um zu zeigen, wie der `Accept`-Wert sein sollte.
> Dieses Problem kann im [Firefox-Fehler 1836334](https://bugzil.la/1836334) verfolgt werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Sec-Fetch-Dest")}}, {{HTTPHeader("Sec-Fetch-Mode")}}, {{HTTPHeader("Sec-Fetch-Site")}}, {{HTTPHeader("Sec-Fetch-User")}} Fetch-Metadaten-Anforderungsheader
- {{Glossary("Prefetch", "Prefetch")}} (Glossar)
- [`<link>`](/de/docs/Web/HTML/Element/link)-Element mit dem Attribut [`rel="prefetch"`](/de/docs/Web/HTML/Attributes/rel/prefetch)
