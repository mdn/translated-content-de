---
title: Want-Repr-Digest
slug: Web/HTTP/Reference/Headers/Want-Repr-Digest
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Der HTTP **`Want-Repr-Digest`** {{Glossary("request_header", "Request")}} und {{Glossary("response_header", "Response-Header")}} gibt eine Präferenz an, dass der Empfänger einen {{HTTPHeader("Repr-Digest")}} Integritätsheader in Nachrichten senden soll, die mit der Request-URI und Repräsentationsmetadaten verknüpft sind.

Der Header enthält Präferenzen für Hashing-Algorithmen, die der Empfänger in nachfolgenden Nachrichten verwenden kann. Die Präferenzen dienen lediglich als Hinweis, und der Empfänger kann die Algorithmenwahl oder die Integritätsheader vollständig ignorieren.

Einige Implementierungen können unerbetene `Repr-Digest` Header senden, ohne dass ein `Want-Repr-Digest` Header in einer vorherigen Nachricht erforderlich ist.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Representation_header", "Repräsentations-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Request-Header")}}</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

Eine kommaseparierte Liste von einem oder mehreren Hashing-Algorithmen:

```http
Want-Repr-Digest: <algorithm>=<preference>
Want-Repr-Digest: <algorithm>=<preference>, …, <algorithmN>=<preferenceN>
```

## Direktiven

- `<algorithmus>`
  - : Der angefragte Algorithmus, um einen Digest der Repräsentation zu erstellen.
    Nur zwei registrierte Digest-Algorithmen gelten als sicher: `sha-512` und `sha-256`.
    Die unsicheren (veralteten) registrierten Digest-Algorithmen sind: `md5`, `sha` (SHA-1), `unixsum`, `unixcksum`, `adler` (ADLER32) und `crc32c`.
- `<präferenz>`
  - : Eine ganze Zahl von 0 bis 9, wobei `0` "nicht akzeptabel" bedeutet, und die Werte von `1` bis `9` aufsteigende, relative, gewichtete Präferenzen ausdrücken.
    Im Gegensatz zu früheren Entwürfen der Spezifikationen wird das Gewicht _nicht_ über `q` {{Glossary("Quality_values", "Qualitätswerte")}} deklariert.

## Beispiele

```http
Want-Repr-Digest: sha-512=8, sha-256=6, adler=0, sha=1
Want-Repr-Digest: sha-512=10, sha-256=1, md5=0
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Dieser Header hat keine spezifikationsdefinierte Browser-Integration ("Browser-Kompatibilität" ist nicht anwendbar). Entwickler können HTTP Header mit `fetch()` setzen und abrufen, um anwendungsspezifisches Implementierungsverhalten bereitzustellen.

## Siehe auch

- {{HTTPHeader("Content-Digest")}}, {{HTTPHeader("Repr-Digest")}}, {{HTTPHeader("Want-Content-Digest")}} Digest-Header
- [Digitale Signaturen für APIs](https://developer.ebay.com/develop/guides/digital-signatures-for-apis) SDK-Leitfaden verwendet `Content-Digest`s für digitale Signaturen in HTTP-Aufrufen (developer.ebay.com)
