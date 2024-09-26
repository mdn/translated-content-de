---
title: Sec-Purpose
slug: Web/HTTP/Headers/Sec-Purpose
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}

Der **`Sec-Purpose`** {{Glossary("Fetch metadata request header", "fetch metadata request header")}} gibt den Zweck an, für den die angeforderte Ressource verwendet wird, wenn dieser Zweck etwas anderes ist als der unmittelbare Gebrauch durch den Benutzeragenten.

Der einzige derzeit definierte Zweck ist `prefetch`, was darauf hinweist, dass die Ressource in Erwartung angefordert wird, dass sie von einer Seite benötigt wird, die wahrscheinlich in naher Zukunft navigiert wird, wie etwa eine Seite, die in Suchergebnissen verlinkt ist oder ein Link, über den ein Benutzer geschwebt hat. Der Server kann dieses Wissen nutzen, um: das Ablaufdatum des Cache für die Anfrage anzupassen, die Anfrage abzulehnen oder möglicherweise die Anfrage anders zu behandeln, wenn Seitenbesuche gezählt werden.

Der Header wird gesendet, wenn eine Seite geladen wird, die ein [`<link>`](/de/docs/Web/HTML/Element/link)-Element mit dem Attribut [`rel="prefetch"`](/de/docs/Web/HTML/Attributes/rel/prefetch) enthält. Beachten Sie, dass, wenn dieser Header gesetzt ist, ein {{HTTPHeader("Sec-Fetch-Dest")}} Header in der Anfrage auf `empty` gesetzt werden muss (jeder Wert im [`<link>`](/de/docs/Web/HTML/Element/link)-Attribut [`as`](/de/docs/Web/HTML/Element/link#as) wird ignoriert) und der {{HTTPHeader("Accept")}} Header sollte mit dem Wert übereinstimmen, der für normale Navigationsanfragen verwendet wird.

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
Sec-Purpose: prefetch
```

## Direktiven

Erlaubte Token sind:

- `prefetch`
  - : Der Zweck ist es, eine Ressource vorab zu laden, die möglicherweise in einer wahrscheinlichen zukünftigen Navigation benötigt wird.

## Beispiele

## Eine Prefetch-Anfrage

Betrachten Sie den Fall, in dem ein Browser eine Datei mit einem [`<link>`](/de/docs/Web/HTML/Element/link)-Element lädt, das das Attribut `rel="prefetch"` und ein `href`-Attribut enthält, das die Adresse einer Bilddatei enthält. Das resultierende `fetch()` sollte in einer HTTP-Anfrage resultieren, bei der `Sec-Purpose: prefetch`, `Sec-Fetch-Dest: empty`, und ein `Accept`-Wert, der mit dem übereinstimmt, den der Browser für die Seitennavigation verwendet, enthalten sind.

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
> Zum Zeitpunkt der Erstellung setzt FireFox den `Accept` Header fälschlicherweise auf `Accept: */*` für Prefetches.
> Das Beispiel wurde geändert, um zu zeigen, was der `Accept`-Wert sein sollte.
> Dieses Problem kann im [Firefox Bug 1836334](https://bugzil.la/1836334) verfolgt werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{Glossary("Prefetch")}} (Glossar)
- [`<link>`](/de/docs/Web/HTML/Element/link)-Element mit dem Attribut [`rel="prefetch"`](/de/docs/Web/HTML/Attributes/rel/prefetch)
