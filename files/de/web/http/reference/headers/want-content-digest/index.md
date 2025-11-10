---
title: Want-Content-Digest header
short-title: Want-Content-Digest
slug: Web/HTTP/Reference/Headers/Want-Content-Digest
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Der HTTP **`Want-Content-Digest`** {{Glossary("request_header", "Request-")}} und {{Glossary("response_header", "Response-Header")}} zeigt die Präferenz des Empfängers an, einen {{HTTPHeader("Content-Digest")}} Integritäts-Header in Nachrichten zu senden, die mit der Request-URI und Repräsentations-Metadaten verknüpft sind.

Der Header umfasst Präferenzen für Hash-Algorithmen, die der Empfänger in nachfolgenden Nachrichten verwenden kann. Die Präferenzen dienen nur als Hinweis, und der Empfänger kann die Algorithmus-Auswahl oder die Integritäts-Header vollständig ignorieren.

Einige Implementierungen können unaufgefordert `Content-Digest`-Header senden, ohne dass in einer vorhergehenden Nachricht ein `Want-Content-Digest`-Header erforderlich ist.

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

```http
Want-Content-Digest: <algorithm>=<preference>
Want-Content-Digest: <algorithm>=<preference>, …, <algorithmN>=<preferenceN>
```

## Direktiven

- `<algorithm>`
  - : Der angeforderte Algorithmus, um einen Digest der Nachrichteninhalte zu erstellen. Nur zwei registrierte Digest-Algorithmen gelten als sicher: `sha-512` und `sha-256`. Die unsicheren (veralteten) registrierten Digest-Algorithmen sind: `md5`, `sha` (SHA-1), `unixsum`, `unixcksum`, `adler` (ADLER32) und `crc32c`.
- `<preference>`
  - : Eine Ganzzahl von 0 bis 9, wobei `0` "nicht akzeptabel" bedeutet und die Werte von `1` bis `9` eine aufsteigende, relative, gewichtete Präferenz darstellen. Im Gegensatz zu früheren Entwürfen der Spezifikationen wird das Gewicht _nicht_ über `q` {{Glossary("Quality_values", "Qualitätswerte")}} deklariert.

## Beispiele

### Verwendung von Want-Content-Digest in Anfragen

Die folgende Nachricht bittet den Empfänger, einen `Content-Digest`-Header unter Verwendung des SHA-512-Algorithmus zu senden:

```http
Want-Content-Digest: sha-512=9
```

### Want-Content-Digest mit mehreren Werten

Der folgende Header enthält drei Algorithmen und zeigt an, dass SHA-256 der bevorzugte Digest-Algorithmus ist, den der Empfänger verwenden sollte, gefolgt von SHA-512 und MD5:

```http
Want-Content-Digest: md5=1, sha-512=2, sha-256=3
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Dieser Header hat keine spezifikationsdefinierte Integration in Browser ("Browser-Kompatibilität" ist nicht anwendbar). Entwickler können HTTP-Header mit `fetch()` setzen und abrufen, um eine anwendungsspezifische Implementierungsverhalten zu erzielen.

## Siehe auch

- {{HTTPHeader("Content-Digest")}}, {{HTTPHeader("Repr-Digest")}}, {{HTTPHeader("Want-Repr-Digest")}} Digest-Header
- [Digitale Signaturen für APIs](https://developer.ebay.com/develop/guides/digital-signatures-for-apis) Das SDK-Leitfaden nutzt `Content-Digest`s für digitale Signaturen in HTTP-Anrufen (developer.ebay.com)
