---
title: Want-Repr-Digest header
short-title: Want-Repr-Digest
slug: Web/HTTP/Reference/Headers/Want-Repr-Digest
l10n:
  sourceCommit: 892eb917bee599a9d6cae7d33ed783129dbb39b3
---

Der HTTP-**`Want-Repr-Digest`**-{{Glossary("request_header", "Request-Header")}} und -{{Glossary("response_header", "Response-Header")}} gibt an, dass der Absender wünscht, dass der Empfänger in Nachrichten, die dem Request-URI und den Metadaten der Repräsentation zugeordnet sind, einen {{HTTPHeader("Repr-Digest")}}-Integritätsheader sendet.

Der Header enthält bevorzugte Hash-Algorithmen, die der Empfänger in nachfolgenden Nachrichten verwenden kann. Diese Präferenzen dienen lediglich als Hinweis. Der Empfänger kann die Auswahl der Algorithmen oder die Integritätsheader insgesamt ignorieren.

Manche Implementierungen senden `Repr-Digest`-Header auch unaufgefordert, ohne dass in einer vorherigen Nachricht ein `Want-Repr-Digest`-Header vorhanden war.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Request-Header")}}, {{Glossary("Response_header", "Response-Header")}}, {{Glossary("Representation_header", "Repräsentationsheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Request-Header")}}</th>
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
  - : Der angeforderte Algorithmus zur Berechnung eines Digests der Repräsentation.
    Nur zwei registrierte Digest-Algorithmen gelten als sicher: `sha-512` und `sha-256`.
    Die unsicheren (veralteten) registrierten Digest-Algorithmen sind: `md5`, `sha` (SHA-1), `unixsum`, `unixcksum`, `adler` (ADLER32) und `crc32c`.
- `<preference>`
  - : Eine Ganzzahl von 0 bis 9, wobei `0` „nicht akzeptabel“ bedeutet und die Werte `1` bis `9` eine aufsteigende, relative, gewichtete Präferenz ausdrücken.
    Anders als in früheren Entwürfen der Spezifikationen wird die Gewichtung _nicht_ über `q`-{{Glossary("Quality_values", "Qualitätswerte")}} angegeben.

## Beispiele

```http
Want-Repr-Digest: sha-512=8, sha-256=6, adler=0, sha=1
Want-Repr-Digest: sha-512=10, sha-256=1, md5=0
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Für diesen Header ist keine Browser-Integration in der Spezifikation definiert („Browser-Kompatibilität“ ist daher nicht anwendbar).
Entwickler können HTTP-Header mit `fetch()` setzen und auslesen, um anwendungsspezifisches Verhalten zu implementieren.

## Siehe auch

- {{HTTPHeader("Content-Digest")}}, {{HTTPHeader("Repr-Digest")}}, {{HTTPHeader("Want-Content-Digest")}}: Digest-Header
- Der SDK-[Leitfaden für digitale Signaturen bei APIs](https://developer.ebay.com/develop/guides/sell/digital-signatures-for-apis) verwendet `Content-Digest`-Header für digitale Signaturen in HTTP-Aufrufen (developer.ebay.com)
