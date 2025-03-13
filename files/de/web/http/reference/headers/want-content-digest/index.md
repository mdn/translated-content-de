---
title: Want-Content-Digest
slug: Web/HTTP/Reference/Headers/Want-Content-Digest
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Der HTTP **`Want-Content-Digest`** {{Glossary("request_header", "Anforderungs-")}} und {{Glossary("response_header", "Antwort-Header")}} gibt an, dass der Empfänger bevorzugt einen {{HTTPHeader("Content-Digest")}} Integritäts-Header in Nachrichten sendet, die mit der Anforderungs-URI und den Repräsentationsmetadaten verbunden sind.

Der Header umfasst Präferenzen für Hash-Algorithmen, die der Empfänger in nachfolgenden Nachrichten verwenden kann.
Die Präferenzen dienen lediglich als Hinweis und der Empfänger kann die Algorithmus-Auswahl oder die Integritäts-Header vollständig ignorieren.

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

Eine kommagetrennte Liste von einem oder mehreren Hash-Algorithmen:

```http
Want-Content-Digest: <algorithm>=<preference>
Want-Content-Digest: <algorithm>=<preference>, …, <algorithmN>=<preferenceN>
```

## Direktiven

- `<algorithm>`
  - : Der angeforderte Algorithmus, um einen Digest des Nachrichteninhalts zu erstellen.
    Nur zwei registrierte Digest-Algorithmen gelten als sicher: `sha-512` und `sha-256`.
    Die unsicheren (veralteten) registrierten Digest-Algorithmen sind: `md5`, `sha` (SHA-1), `unixsum`, `unixcksum`, `adler` (ADLER32) und `crc32c`.
- `<preference>`
  - : Eine ganze Zahl von 0 bis 9, wobei `0` "nicht akzeptabel" bedeutet und die Werte `1` bis `9` aufsteigende, relative, gewichtete Präferenzen darstellen.
    Im Gegensatz zu früheren Entwürfen der Spezifikationen wird die Gewichtung _nicht_ über `q` {{Glossary("Quality_values", "Qualitätswerte")}} angegeben.

## Beispiele

### Verwendung von Want-Content-Digest in Anfragen

Die folgende Nachricht fordert den Empfänger auf, einen `Content-Digest`-Header unter Verwendung des SHA-512-Algorithmus zu senden:

```http
Want-Content-Digest: sha-512=9
```

### Want-Content-Digest mit mehreren Werten

Der folgende Header enthält drei Algorithmen und gibt an, dass SHA-256 der bevorzugte Digest-Algorithmus ist, den der Empfänger verwenden soll, gefolgt von SHA-512 und MD5:

```http
Want-Content-Digest: md5=1, sha-512=2, sha-256=3
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Dieser Header hat keine spefikationsdefinierte Browser-Integration (die "Browser-Kompatibilität" ist nicht anwendbar).
Entwickler können HTTP-Header mit `fetch()` setzen und abrufen, um eine anwendungsspezifische Implementierung zu ermöglichen.

## Siehe auch

- {{HTTPHeader("Content-Digest")}}, {{HTTPHeader("Repr-Digest")}}, {{HTTPHeader("Want-Repr-Digest")}} Digest-Header
- [Digitale Signaturen für APIs](https://developer.ebay.com/develop/guides/digital-signatures-for-apis) SDK-Leitfaden verwendet `Content-Digest`s für digitale Signaturen in HTTP-Aufrufen (developer.ebay.com)
