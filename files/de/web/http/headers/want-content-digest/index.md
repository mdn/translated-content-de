---
title: Want-Content-Digest
slug: Web/HTTP/Headers/Want-Content-Digest
l10n:
  sourceCommit: ed041385cf874deec203e820fd415bdcd6f98a19
---

{{HTTPSidebar}}

Der HTTP **`Want-Content-Digest`** {{Glossary("request_header", "Request-")}} und {{Glossary("response_header", "Response-Header")}} gibt an, dass der Empfänger bevorzugt einen {{HTTPHeader("Content-Digest")}} Integritäts-Header in Nachrichten senden soll, die mit der Anforderungs-URI und den Repräsentationsmetadaten verknüpft sind.

Der Header enthält Präferenzen für Hash-Algorithmen, die der Empfänger in nachfolgenden Nachrichten verwenden kann. Die Präferenzen dienen lediglich als Hinweis, und der Empfänger kann die Algorithmusauswahl oder die Integritäts-Header vollständig ignorieren.

Einige Implementierungen können `Content-Digest` Header ohne vorheriges `Want-Content-Digest` Header in einer vorherigen Nachricht senden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Representation_header", "Repräsentations-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

Eine durch Kommata getrennte Liste von einem oder mehreren Hash-Algorithmen:

```http
Want-Content-Digest: <algorithm>=<preference>
Want-Content-Digest: <algorithm>=<preference>, …, <algorithmN>=<preferenceN>
```

## Direktiven

- `<algorithm>`
  - : Der angeforderte Algorithmus, um einen Digest des Nachrichteninhalts zu erstellen. Nur zwei registrierte Digest-Algorithmen werden als sicher angesehen: `sha-512` und `sha-256`.
    Die unsicheren (veralteten) registrierten Digest-Algorithmen sind: `md5`, `sha` (SHA-1), `unixsum`, `unixcksum`, `adler` (ADLER32) und `crc32c`.
- `<preference>`
  - : Eine ganze Zahl zwischen 0 und 9, wobei `0` "nicht akzeptabel" bedeutet und die Werte `1` bis `9` aufsteigende, relative, gewichtete Präferenzen anzeigen.
    Im Gegensatz zu früheren Entwürfen der Spezifikationen wird die Gewichtung _nicht_ über `q` {{Glossary("Quality_values", "Qualitätswerte")}} deklariert.

## Beispiele

### Verwendung von Want-Content-Digest in Anfragen

Die folgende Nachricht fordert den Empfänger auf, einen `Content-Digest` Header unter Verwendung des SHA-512 Algorithmus zu senden:

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

Dieser Header hat keine spezifikationsdefinierte Browser-Integration ("Browser-Kompatibilität" gilt nicht). Entwickler können HTTP-Header mit `fetch()` setzen und erhalten, um eine anwendungsspezifische Implementierungsverhalten zu ermöglichen.

## Siehe auch

- {{HTTPHeader("Content-Digest")}}, {{HTTPHeader("Repr-Digest")}}, {{HTTPHeader("Want-Repr-Digest")}} Digest-Header
- [Digitale Signaturen für APIs](https://developer.ebay.com/develop/guides/digital-signatures-for-apis) SDK-Leitfaden verwendet `Content-Digest`s für digitale Signaturen in HTTP-Aufrufen (developer.ebay.com)
