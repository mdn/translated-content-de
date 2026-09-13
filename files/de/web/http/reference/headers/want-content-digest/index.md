---
title: Want-Content-Digest header
short-title: Want-Content-Digest
slug: Web/HTTP/Reference/Headers/Want-Content-Digest
l10n:
  sourceCommit: 879be34803b4be7357ed5607ac90a7be413fb969
---

Der HTTP-**`Want-Content-Digest`**-{{Glossary("request_header", "Request-Header")}} und {{Glossary("response_header", "Response-Header")}} zeigt eine Präferenz dafür, dass der Empfänger einen {{HTTPHeader("Content-Digest")}}-Integritäts-Header in Nachrichten sendet, die mit der Anforderungs-URI und den Repräsentationsmetadaten verbunden sind.

Der Header beinhaltet Präferenzen für Hash-Algorithmen, die der Empfänger in nachfolgenden Nachrichten verwenden kann. Die Präferenzen dienen nur als Hinweis, und der Empfänger kann die Algorithmuswahl oder die Integritäts-Header insgesamt ignorieren.

Einige Implementierungen senden möglicherweise unaufgeforderte `Content-Digest`-Header, ohne dass ein `Want-Content-Digest`-Header in einer vorherigen Nachricht erforderlich ist.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Request-Header")}}, {{Glossary("Response_header", "Response-Header")}}, {{Glossary("Representation_header", "Representation-Header")}}</td>
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
  - : Der angeforderte Algorithmus, um einen Digest des Nachrichteninhalts zu erstellen. Nur zwei registrierte Digest-Algorithmen gelten als sicher: `sha-512` und `sha-256`. Die unsicheren (veralteten) registrierten Digest-Algorithmen sind: `md5`, `sha` (SHA-1), `unixsum`, `unixcksum`, `adler` (ADLER32) und `crc32c`.
- `<preference>`
  - : Eine Ganzzahl von 0 bis 9, wobei `0` "nicht akzeptabel" bedeutet und die Werte von `1` bis `9` eine aufsteigende, relative, gewichtete Präferenz ausdrücken. Im Gegensatz zu früheren Entwürfen der Spezifikationen wird die Gewichtung _nicht_ über `q` {{Glossary("Quality_values", "Qualitätswerte")}} deklariert.

## Beispiele

### Verwendung von Want-Content-Digest in Anfragen

Die folgende Nachricht fordert den Empfänger auf, einen `Content-Digest`-Header unter Verwendung des SHA-512-Algorithmus zu senden:

```http
Want-Content-Digest: sha-512=9
```

### Want-Content-Digest mit mehreren Werten

Der folgende Header enthält drei Algorithmen und zeigt, dass SHA-256 der bevorzugte Digest-Algorithmus ist, den der Empfänger verwenden sollte, gefolgt von SHA-512 und MD5:

```http
Want-Content-Digest: md5=1, sha-512=2, sha-256=3
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Dieser Header hat keine spezifikationsdefinierte Browser-Integration ("Browser-Kompatibilität" ist nicht anwendbar). Entwickler können HTTP-Header mithilfe von `fetch()` setzen und abrufen, um anwendungsspezifisches Implementierungsverhalten bereitzustellen.

## Siehe auch

- {{HTTPHeader("Content-Digest")}}, {{HTTPHeader("Repr-Digest")}}, {{HTTPHeader("Want-Repr-Digest")}} Digest-Header
- [Digitale Signaturen für APIs](https://developer.ebay.com/develop/guides/digital-signatures-for-apis) SDK-Leitfaden, der `Content-Digest`s für digitale Signaturen in HTTP-Anrufen verwendet (developer.ebay.com)
