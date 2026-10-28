---
title: Want-Content-Digest header
short-title: Want-Content-Digest
slug: Web/HTTP/Reference/Headers/Want-Content-Digest
l10n:
  sourceCommit: 5ea23b22929815583ac57f4cb69fcb61321cdce1
---

Der HTTP-{{Glossary("request_header", "Request-Header")}} und -{{Glossary("response_header", "Response-Header")}} **`Want-Content-Digest`** zeigt an, dass der Absender es bevorzugt, wenn der Empfänger in Nachrichten zur Anfrage-URI und zu den Metadaten der Repräsentation einen {{HTTPHeader("Content-Digest")}}-Integritätsheader sendet.

Der Header enthält Präferenzen für Hash-Algorithmen, die der Empfänger in nachfolgenden Nachrichten verwenden kann. Diese Präferenzen dienen lediglich als Hinweis. Der Empfänger kann die vorgeschlagenen Algorithmen oder die Integritätsheader insgesamt ignorieren.

Manche Implementierungen senden `Content-Digest`-Header auch dann, wenn zuvor kein `Want-Content-Digest`-Header gesendet wurde.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
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
Want-Content-Digest: <algorithm>=<preference>
Want-Content-Digest: <algorithm>=<preference>, …, <algorithmN>=<preferenceN>
```

## Direktiven

- `<algorithm>`
  - : Der angeforderte Algorithmus zum Erstellen eines Digests des Nachrichteninhalts.
    Nur zwei registrierte Digest-Algorithmen gelten als sicher: `sha-512` und `sha-256`.
    Die unsicheren (veralteten) registrierten Digest-Algorithmen sind: `md5`, `sha` (SHA-1), `unixsum`, `unixcksum`, `adler` (ADLER32) und `crc32c`.
- `<preference>`
  - : Eine Ganzzahl von 0 bis 10, wobei `0` „nicht akzeptabel“ bedeutet und die Werte `1` bis `10` eine aufsteigende, relative, gewichtete Präferenz ausdrücken.
    Anders als in früheren Entwürfen der Spezifikationen wird die Gewichtung _nicht_ über `q`-{{Glossary("Quality_values", "Qualitätswerte")}} angegeben.

## Beispiele

### Want-Content-Digest in Requests verwenden

Die folgende Nachricht fordert den Empfänger auf, einen `Content-Digest`-Header mit dem SHA-512-Algorithmus zu senden:

```http
Want-Content-Digest: sha-512=10
```

### Want-Content-Digest mit mehreren Werten

Der folgende Header enthält drei Algorithmen und gibt an, dass der Empfänger vorzugsweise SHA-256 als Digest-Algorithmus verwenden soll, gefolgt von SHA-512 und MD5:

```http
Want-Content-Digest: md5=1, sha-512=2, sha-256=3
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Für diesen Header ist keine Browser-Integration durch die Spezifikation definiert („Browser-Kompatibilität“ ist daher nicht anwendbar).
Entwickler können HTTP-Header mit `fetch()` setzen und auslesen, um anwendungsspezifisches Verhalten zu implementieren.

## Siehe auch

- {{HTTPHeader("Content-Digest")}}, {{HTTPHeader("Repr-Digest")}} und {{HTTPHeader("Want-Repr-Digest")}}: Digest-Header
- Der SDK-Leitfaden [Digital Signatures for APIs](https://developer.ebay.com/develop/guides/sell/digital-signatures-for-apis) verwendet `Content-Digest`-Header für digitale Signaturen in HTTP-Aufrufen (developer.ebay.com).
