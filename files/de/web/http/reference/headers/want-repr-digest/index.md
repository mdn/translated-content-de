---
title: Want-Repr-Digest header
short-title: Want-Repr-Digest
slug: Web/HTTP/Reference/Headers/Want-Repr-Digest
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Der HTTP-**`Want-Repr-Digest`**-{{Glossary("request_header", "Request")}} und {{Glossary("response_header", "Response Header")}} zeigt eine Präferenz an, dass der Empfänger einen {{HTTPHeader("Repr-Digest")}}-Integritätsheader in Nachrichten verwendet, die mit der Anfrage-URI und den Repräsentationsmetadaten verbunden sind.

Der Header enthält Präferenzen für Hash-Algorithmen, die der Empfänger in nachfolgenden Nachrichten verwenden kann. Die Präferenzen dienen nur als Hinweis, und der Empfänger kann die Algorithmus-Auswahl oder die Integritätsheader vollständig ignorieren.

Einige Implementierungen können unaufgefordert `Repr-Digest`-Header senden, ohne dass in einer vorherigen Nachricht ein `Want-Repr-Digest`-Header erforderlich war.

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

```http
Want-Repr-Digest: <algorithm>=<preference>
Want-Repr-Digest: <algorithm>=<preference>, …, <algorithmN>=<preferenceN>
```

## Direktiven

- `<algorithm>`
  - : Der angeforderte Algorithmus zur Erstellung eines Digests der Repräsentation.
    Nur zwei registrierte Digest-Algorithmen gelten als sicher: `sha-512` und `sha-256`.
    Die unsicheren (veralteten) registrierten Digest-Algorithmen sind: `md5`, `sha` (SHA-1), `unixsum`, `unixcksum`, `adler` (ADLER32) und `crc32c`.
- `<preference>`
  - : Eine Ganzzahl von 0 bis 9, wobei `0` "nicht akzeptabel" bedeutet und die Werte von `1` bis `9` eine aufsteigende, relative, gewichtete Präferenz darstellen.
    Im Gegensatz zu früheren Entwürfen der Spezifikationen wird die Gewichtung _nicht_ über `q`-{{Glossary("Quality_values", "Qualitätswerte")}} deklariert.

## Beispiele

```http
Want-Repr-Digest: sha-512=8, sha-256=6, adler=0, sha=1
Want-Repr-Digest: sha-512=10, sha-256=1, md5=0
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Dieser Header hat keine spezifikationsdefinierte Browser-Integration ("Browser-Kompatibilität" gilt nicht).
Entwickler können HTTP-Header mittels `fetch()` setzen und abrufen, um anwendungsspezifisches Implementierungsverhalten zu ermöglichen.

## Siehe auch

- Digest-Header {{HTTPHeader("Content-Digest")}}, {{HTTPHeader("Repr-Digest")}}, {{HTTPHeader("Want-Content-Digest")}}
- [Digitale Signaturen für APIs](https://developer.ebay.com/develop/guides/digital-signatures-for-apis) SDK-Leitfaden verwendet `Content-Digest`s für digitale Signaturen in HTTP-Anrufen (developer.ebay.com)
