---
title: Want-Content-Digest header
short-title: Want-Content-Digest
slug: Web/HTTP/Reference/Headers/Want-Content-Digest
l10n:
  sourceCommit: 466ca1db767535c1aa9984b4e6c0db41b3a53475
---

{{HTTPSidebar}}

Der HTTP-**`Want-Content-Digest`**-{{Glossary("request_header", "Anforderungs-")}} und {{Glossary("response_header", "Antwort-Header")}} gibt eine Präferenz an, dass der Empfänger einen {{HTTPHeader("Content-Digest")}}-Integritäts-Header in Nachrichten, die mit der Anforderungs-URI und den Repräsentationsmetadaten verbunden sind, senden soll.

Der Header enthält Präferenzen für Hashing-Algorithmen, die der Empfänger in nachfolgenden Nachrichten verwenden kann. Die Präferenzen dienen nur als Hinweis, und der Empfänger kann die Algorithmusauswahl oder die Integritätsheader vollständig ignorieren.

Einige Implementierungen können nicht angeforderte `Content-Digest`-Header senden, ohne dass ein `Want-Content-Digest`-Header in einer vorherigen Nachricht erforderlich ist.

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

```http
Want-Content-Digest: <algorithm>=<preference>
Want-Content-Digest: <algorithm>=<preference>, …, <algorithmN>=<preferenceN>
```

## Direktiven

- `<algorithm>`
  - : Der angeforderte Algorithmus zum Erstellen eines Digests des Nachrichteninhalts.
    Nur zwei registrierte Digest-Algorithmen werden als sicher angesehen: `sha-512` und `sha-256`.
    Die unsicheren (veralteten) registrierten Digest-Algorithmen sind: `md5`, `sha` (SHA-1), `unixsum`, `unixcksum`, `adler` (ADLER32) und `crc32c`.
- `<preference>`
  - : Eine Ganzzahl von 0 bis 9, wobei `0` "nicht akzeptabel" bedeutet, und die Werte `1` bis `9` eine aufsteigende, relative, gewichtete Präferenz vermitteln.
    Im Gegensatz zu früheren Entwürfen der Spezifikationen wird die Gewichtung _nicht_ über `q`-{{Glossary("Quality_values", "Qualitätswerte")}} deklariert.

## Beispiele

### Nutzung von Want-Content-Digest in Anfragen

Die folgende Nachricht fordert den Empfänger auf, einen `Content-Digest`-Header mit dem SHA-512-Algorithmus zu senden:

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

Dieser Header hat keine spezifikationsdefinierte Browser-Integration ("Browser-Kompatibilität" ist nicht anwendbar). Entwickler können HTTP-Header mit `fetch()` setzen und abrufen, um anwendungsspezifisches Implementierungsverhalten bereitzustellen.

## Siehe auch

- {{HTTPHeader("Content-Digest")}}, {{HTTPHeader("Repr-Digest")}}, {{HTTPHeader("Want-Repr-Digest")}} Digest-Header
- [Digitale Signaturen für APIs](https://developer.ebay.com/develop/guides/digital-signatures-for-apis) SDK-Leitfaden verwendet `Content-Digest`s für digitale Signaturen in HTTP-Aufrufen (developer.ebay.com)
