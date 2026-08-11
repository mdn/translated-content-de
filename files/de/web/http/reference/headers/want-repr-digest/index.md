---
title: Want-Repr-Digest header
short-title: Want-Repr-Digest
slug: Web/HTTP/Reference/Headers/Want-Repr-Digest
l10n:
  sourceCommit: 879be34803b4be7357ed5607ac90a7be413fb969
---

Der HTTP **`Want-Repr-Digest`** {{Glossary("request_header", "Anforderungs-")}} und {{Glossary("response_header", "Antwort-Header")}} gibt eine Präferenz an, dass der Empfänger einen {{HTTPHeader("Repr-Digest")}}-Integritäts-Header in Nachrichten sendet, die mit der Anforderungs-URI und den Repräsentationsmetadaten verbunden sind.

Der Header umfasst Präferenzen für Hash-Algorithmen, die der Empfänger in nachfolgenden Nachrichten verwenden kann. Die Präferenzen dienen lediglich als Hinweis, und der Empfänger kann die Algorithmuswahl oder die Integritäts-Header vollständig ignorieren.

Einige Implementierungen können unaufgefordert `Repr-Digest`-Header senden, ohne dass zuvor ein `Want-Repr-Digest`-Header in einer vorangegangenen Nachricht erforderlich war.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Anforderungs-Header")}}, {{Glossary("Response_header", "Antwort-Header")}}, {{Glossary("Representation_header", "Repräsentations-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungs-Header")}}</th>
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
  - : Der angeforderte Algorithmus, um einen Digest der Repräsentation zu erstellen.
    Nur zwei registrierte Digest-Algorithmen werden als sicher angesehen: `sha-512` und `sha-256`.
    Die unsicheren (veralteten) registrierten Digest-Algorithmen sind: `md5`, `sha` (SHA-1), `unixsum`, `unixcksum`, `adler` (ADLER32) und `crc32c`.
- `<preference>`
  - : Eine Ganzzahl von 0 bis 9, wobei `0` "nicht akzeptabel" bedeutet und die Werte `1` bis `9` steigende, relative, gewichtete Präferenzen vermitteln.
    Im Gegensatz zu früheren Entwürfen der Spezifikationen wird die Gewichtung _nicht_ über `q` {{Glossary("Quality_values", "Qualitätswerte")}} deklariert.

## Beispiele

```http
Want-Repr-Digest: sha-512=8, sha-256=6, adler=0, sha=1
Want-Repr-Digest: sha-512=10, sha-256=1, md5=0
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Dieser Header hat keine spezifikationsdefinierte Browser-Integration ("Browser-Kompatibilität" ist nicht anwendbar). Entwickler können HTTP-Header mit `fetch()` setzen und abfragen, um anwendungsspezifisches Implementierungsverhalten bereitzustellen.

## Siehe auch

- {{HTTPHeader("Content-Digest")}}, {{HTTPHeader("Repr-Digest")}}, {{HTTPHeader("Want-Content-Digest")}} Digest-Header
- [Digitale Signaturen für APIs](https://developer.ebay.com/develop/guides/digital-signatures-for-apis) SDK-Leitfaden verwendet `Content-Digests` für digitale Signaturen in HTTP-Aufrufen (developer.ebay.com)
