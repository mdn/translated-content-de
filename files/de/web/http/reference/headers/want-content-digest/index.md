---
title: Want-Content-Digest header
short-title: Want-Content-Digest
slug: Web/HTTP/Reference/Headers/Want-Content-Digest
l10n:
  sourceCommit: 892eb917bee599a9d6cae7d33ed783129dbb39b3
---

Der HTTP-{{Glossary("request_header", "Anfrage-")}} und {{Glossary("response_header", "Antwort-Header")}} **`Want-Content-Digest`** gibt an, dass der Absender es bevorzugt, wenn der Empfänger in Nachrichten, die dem Anfrage-URI und den Repräsentationsmetadaten zugeordnet sind, einen {{HTTPHeader("Content-Digest")}}-Integritäts-Header sendet.

Der Header enthält Präferenzen für Hash-Algorithmen, die der Empfänger in nachfolgenden Nachrichten verwenden kann. Diese Präferenzen dienen lediglich als Hinweis. Der Empfänger kann die angegebenen Algorithmen oder die Integritäts-Header insgesamt ignorieren.

Manche Implementierungen senden unaufgefordert `Content-Digest`-Header, ohne dass in einer vorherigen Nachricht ein `Want-Content-Digest`-Header vorhanden sein muss.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Anfrage-Header")}}, {{Glossary("Response_header", "Antwort-Header")}}, {{Glossary("Representation_header", "Repräsentations-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anfrage-Header")}}</th>
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
    Die registrierten unsicheren (veralteten) Digest-Algorithmen sind: `md5`, `sha` (SHA-1), `unixsum`, `unixcksum`, `adler` (ADLER32) und `crc32c`.
- `<preference>`
  - : Eine Ganzzahl von 0 bis 9. `0` bedeutet „nicht akzeptabel“; die Werte `1` bis `9` drücken eine aufsteigende, relative und gewichtete Präferenz aus.
    Anders als in früheren Entwürfen der Spezifikationen wird die Gewichtung _nicht_ über `q`-{{Glossary("Quality_values", "Qualitätswerte")}} angegeben.

## Beispiele

### Want-Content-Digest in Anfragen verwenden

Die folgende Nachricht fordert den Empfänger auf, einen `Content-Digest`-Header unter Verwendung des SHA-512-Algorithmus zu senden:

```http
Want-Content-Digest: sha-512=9
```

### Want-Content-Digest mit mehreren Werten

Der folgende Header enthält drei Algorithmen und gibt an, dass der Empfänger vorzugsweise SHA-256 als Digest-Algorithmus verwenden soll, gefolgt von SHA-512 und MD5:

```http
Want-Content-Digest: md5=1, sha-512=2, sha-256=3
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Für diesen Header ist keine Browser-Integration in der Spezifikation definiert („Browser-Kompatibilität“ ist daher nicht anwendbar).
Entwickler können HTTP-Header mithilfe von `fetch()` setzen und auslesen, um anwendungsspezifisches Verhalten zu implementieren.

## Siehe auch

- Die Digest-Header {{HTTPHeader("Content-Digest")}}, {{HTTPHeader("Repr-Digest")}} und {{HTTPHeader("Want-Repr-Digest")}}
- Der SDK-Leitfaden [Digitale Signaturen für APIs](https://developer.ebay.com/develop/guides/sell/digital-signatures-for-apis) verwendet `Content-Digest`-Header für digitale Signaturen in HTTP-Aufrufen (developer.ebay.com).
