---
title: Want-Content-Digest
slug: Web/HTTP/Headers/Want-Content-Digest
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{HTTPSidebar}}

Der HTTP **`Want-Content-Digest`** {{Glossary("request_header", "Anfrage-")}} und {{Glossary("response_header", "Antwortheader")}} gibt eine Präferenz für den Empfänger an, einen {{HTTPHeader("Content-Digest")}} Integritätsheader in Nachrichten zu senden, die mit der Anfrage-URI und den Repräsentationsmetadaten verbunden sind.

Der Header beinhaltet Präferenzen für Hash-Algorithmen, die der Empfänger in nachfolgenden Nachrichten verwenden kann. Die Präferenzen dienen nur als Hinweis, und der Empfänger kann die Algorithmuswahl oder die Integritätsheader ganz ignorieren.

Einige Implementierungen können ungefragt `Content-Digest` Header senden, ohne dass ein `Want-Content-Digest` Header in einer vorherigen Nachricht erforderlich ist.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Representation_header", "Repräsentationsheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anfrageheader")}}</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

Eine kommagetrennte Liste von einem oder mehreren Hash-Algorithmen:

```http
Want-Content-Digest: <algorithm>=<preference>
Want-Content-Digest: <algorithm>=<preference>, …, <algorithmN>=<preferenceN>
```

## Anweisungen

- `<algorithm>`
  - : Der angeforderte Algorithmus, um einen Digest des Nachrichteninhalts zu erstellen.
    Es werden nur zwei registrierte Digest-Algorithmen als sicher angesehen: `sha-512` und `sha-256`.
    Die unsicheren (veralteten) registrierten Digest-Algorithmen sind: `md5`, `sha` (SHA-1), `unixsum`, `unixcksum`, `adler` (ADLER32) und `crc32c`.
- `<preference>`
  - : Eine Ganzzahl von 0 bis 9, wobei `0` "nicht akzeptabel" bedeutet und die Werte `1` bis `9` aufsteigende, relative, gewichtete Präferenzen vermitteln.
    Im Gegensatz zu früheren Entwürfen der Spezifikationen wird die Gewichtung _nicht_ über `q` {{Glossary("Quality_values", "Qualitätswerte")}} deklariert.

## Beispiele

### Verwendung von Want-Content-Digest in Anfragen

Die folgende Nachricht fordert den Empfänger auf, einen `Content-Digest` Header mit dem SHA-512-Algorithmus zu senden:

```http
Want-Content-Digest: sha-512=9
```

### Want-Content-Digest mit mehreren Werten

Der folgende Header enthält drei Algorithmen und gibt an, dass SHA-256 der bevorzugte Digest-Algorithmus ist, den der Empfänger verwenden sollte, gefolgt von SHA-512 und MD5:

```http
Want-Content-Digest: md5=1, sha-512=2, sha-256=3
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Dieser Header hat keine spezifikationsdefinierte Browser-Integration ("Browser-Kompatibilität" trifft nicht zu).
Entwickler können HTTP-Header mit `fetch()` setzen und abfragen, um ein anwendungsspezifisches Implementierungsverhalten bereitzustellen.

## Siehe auch

- {{HTTPHeader("Content-Digest")}}, {{HTTPHeader("Repr-Digest")}}, {{HTTPHeader("Want-Repr-Digest")}} Digest-Header
- [Digitale Signaturen für APIs](https://developer.ebay.com/develop/guides/digital-signatures-for-apis) SDK-Leitfaden verwendet `Content-Digest`s für digitale Signaturen in HTTP-Aufrufen (developer.ebay.com)
