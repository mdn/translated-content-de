---
title: Want-Repr-Digest
slug: Web/HTTP/Headers/Want-Repr-Digest
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{HTTPSidebar}}

Der HTTP **`Want-Repr-Digest`** {{Glossary("request_header", "Anfrage")}} und {{Glossary("response_header", "Antwort-Header")}} gibt eine Präferenz an, dass der Empfänger einen {{HTTPHeader("Repr-Digest")}} Integritäts-Header in Nachrichten sendet, die mit der Anforderungs-URI und den Repräsentationsmetadaten verknüpft sind.

Der Header enthält Präferenzen für Hash-Algorithmen, die der Empfänger in nachfolgenden Nachrichten verwenden kann. Die Präferenzen dienen nur als Hinweis, und der Empfänger kann die Algorithmusauswahl oder die Integritäts-Header insgesamt ignorieren.

Einige Implementierungen können unaufgefordert `Repr-Digest`-Header senden, ohne dass ein `Want-Repr-Digest`-Header in einer vorherigen Nachricht erforderlich ist.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Representation_header", "Repräsentations-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anfrage-Header")}}</th>
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
  - : Der angeforderte Algorithmus zur Erstellung eines Digests der Repräsentation.
    Nur zwei registrierte Digest-Algorithmen gelten als sicher: `sha-512` und `sha-256`.
    Die unsicheren (veralteten) registrierten Digest-Algorithmen sind: `md5`, `sha` (SHA-1), `unixsum`, `unixcksum`, `adler` (ADLER32) und `crc32c`.
- `<präferenz>`
  - : Eine Ganzzahl von 0 bis 9, wobei `0` "nicht akzeptabel" bedeutet, und die Werte `1` bis `9` eine aufsteigende, relative, gewichtete Präferenz vermitteln.
    Im Gegensatz zu früheren Entwürfen der Spezifikationen wird das Gewicht _nicht_ über `q` {{Glossary("Quality_values", "Qualitätswerte")}} deklariert.

## Beispiele

```http
Want-Repr-Digest: sha-512=8, sha-256=6, adler=0, sha=1
Want-Repr-Digest: sha-512=10, sha-256=1, md5=0
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Dieser Header hat keine spezifikationsdefinierte Browser-Integration (die "Browser-Kompatibilität" trifft nicht zu). Entwickler können HTTP-Header mit `fetch()` setzen und abrufen, um anwendungsspezifisches Implementierungsverhalten bereitzustellen.

## Siehe auch

- {{HTTPHeader("Content-Digest")}}, {{HTTPHeader("Repr-Digest")}}, {{HTTPHeader("Want-Content-Digest")}} Digest-Header
- [Digitale Signaturen für APIs](https://developer.ebay.com/develop/guides/digital-signatures-for-apis) SDK-Leitfaden verwendet `Content-Digest`s für digitale Signaturen in HTTP-Aufrufen (developer.ebay.com)
