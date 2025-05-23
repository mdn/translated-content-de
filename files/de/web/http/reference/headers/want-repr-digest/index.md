---
title: Want-Repr-Digest header
short-title: Want-Repr-Digest
slug: Web/HTTP/Reference/Headers/Want-Repr-Digest
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}

Der HTTP **`Want-Repr-Digest`** {{Glossary("request_header", "Anforderungs-")}} und {{Glossary("response_header", "Antwort-Header")}} zeigt eine Präferenz dafür an, dass der Empfänger einen {{HTTPHeader("Repr-Digest")}}-Integritätsheader in Nachrichten sendet, die mit der Anforderungs-URI und Repräsentationsmetadaten verbunden sind.

Der Header umfasst Bevorzugungen für Hashing-Algorithmen, die der Empfänger in nachfolgenden Nachrichten verwenden kann.
Die Präferenzen dienen nur als Hinweis, und der Empfänger kann die Wahl der Algorithmen oder die Integritätsheader insgesamt ignorieren.

Einige Implementierungen können nicht angeforderte `Repr-Digest`-Header senden, ohne dass ein `Want-Repr-Digest`-Header in einer vorherigen Nachricht erforderlich ist.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Representation_header", "Repräsentations-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungs-Header")}}</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

Eine durch Kommas getrennte Liste von einem oder mehreren Hashing-Algorithmen:

```http
Want-Repr-Digest: <algorithm>=<preference>
Want-Repr-Digest: <algorithm>=<preference>, …, <algorithmN>=<preferenceN>
```

## Direktiven

- `<algorithm>`
  - : Der angeforderte Algorithmus, um einen Digest der Repräsentation zu erstellen.
    Nur zwei registrierte Digest-Algorithmen gelten als sicher: `sha-512` und `sha-256`.
    Die unsicheren (veralteten) registrierten Digest-Algorithmen sind: `md5`, `sha` (SHA-1), `unixsum`, `unixcksum`, `adler` (ADLER32) und `crc32c`.
- `<preference>`
  - : Eine ganze Zahl von 0 bis 9, wobei `0` "nicht akzeptabel" bedeutet und die Werte `1` bis `9` eine aufsteigende, relative, gewichtete Präferenz vermitteln.
    Im Gegensatz zu früheren Entwürfen der Spezifikationen wird die Gewichtung _nicht_ über `q` {{Glossary("Quality_values", "Qualitätswerte")}} erklärt.

## Beispiele

```http
Want-Repr-Digest: sha-512=8, sha-256=6, adler=0, sha=1
Want-Repr-Digest: sha-512=10, sha-256=1, md5=0
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Dieser Header hat keine spezifikationsdefinierte Browser-Integration ("Browser-Kompatibilität" ist nicht anwendbar).
Entwickler können HTTP-Header mit `fetch()` setzen und abrufen, um anwendungsspezifisches Implementierungsverhalten bereitzustellen.

## Siehe auch

- {{HTTPHeader("Content-Digest")}}, {{HTTPHeader("Repr-Digest")}}, {{HTTPHeader("Want-Content-Digest")}} Digest-Header
- [Digitale Signaturen für APIs](https://developer.ebay.com/develop/guides/digital-signatures-for-apis) SDK-Leitfaden verwendet `Content-Digest`s für digitale Signaturen in HTTP-Anfragen (developer.ebay.com)
