---
title: Want-Repr-Digest
slug: Web/HTTP/Headers/Want-Repr-Digest
l10n:
  sourceCommit: ed041385cf874deec203e820fd415bdcd6f98a19
---

{{HTTPSidebar}}

Der HTTP **`Want-Repr-Digest`** {{Glossary("request_header", "Request-Header")}} und {{Glossary("response_header", "Response-Header")}} zeigt eine Präferenz dafür an, dass der Empfänger einen `Repr-Digest`-Integritätsheader in Nachrichten sendet, die mit der Request-URI und den Repräsentationsmetadaten verbunden sind.

Der Header enthält Bevorzugungen für Hash-Algorithmen, die der Empfänger in nachfolgenden Nachrichten verwenden kann. Die Bevorzugungen dienen nur als Hinweis, und der Empfänger kann die Algorithmusauswahl oder die Integritätsheader vollständig ignorieren.

Einige Implementierungen können `Repr-Digest`-Header ohne vorherige Anforderung eines `Want-Repr-Digest`-Headers in einer vorherigen Nachricht senden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Representation_header", "Repräsentations-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

Eine durch Kommas getrennte Liste von einem oder mehreren Hash-Algorithmen:

```http
Want-Repr-Digest: <algorithm>=<preference>
Want-Repr-Digest: <algorithm>=<preference>, …, <algorithmN>=<preferenceN>
```

## Direktiven

- `<algorithmus>`
  - : Der angeforderte Algorithmus zur Erstellung eines Digest der Repräsentation.
    Nur zwei registrierte Digest-Algorithmen gelten als sicher: `sha-512` und `sha-256`.
    Die unsicheren (veralteten) registrierten Digest-Algorithmen sind: `md5`, `sha` (SHA-1), `unixsum`, `unixcksum`, `adler` (ADLER32) und `crc32c`.
- `<präferenz>`
  - : Eine ganze Zahl von 0 bis 9, wobei `0` "nicht akzeptabel" bedeutet und die Werte `1` bis `9` aufsteigende, relative, gewichtete Präferenzen vermitteln.
    Im Gegensatz zu früheren Entwürfen der Spezifikationen wird die Gewichtung _nicht_ über `q` {{Glossary("Quality_values", "Qualitätswerte")}} angegeben.

## Beispiele

```http
Want-Repr-Digest: sha-512=8, sha-256=6, adler=0, sha=1
Want-Repr-Digest: sha-512=10, sha-256=1, md5=0
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Dieser Header besitzt keine spezifikationsdefinierte Browser-Integration ("Browser-Kompatibilität" ist nicht anwendbar). Entwickler können HTTP-Header mit `fetch()` setzen und abrufen, um anwendungsspezifisches Implementierungsverhalten bereitzustellen.

## Siehe auch

- {{HTTPHeader("Content-Digest")}}, {{HTTPHeader("Repr-Digest")}}, {{HTTPHeader("Want-Content-Digest")}} Digest-Header
- [Digitale Signaturen für APIs](https://developer.ebay.com/develop/guides/digital-signatures-for-apis) SDK-Leitfaden verwendet `Content-Digest`s für digitale Signaturen in HTTP-Aufrufen (developer.ebay.com)
