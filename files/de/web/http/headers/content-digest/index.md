---
title: Content-Digest
slug: Web/HTTP/Headers/Content-Digest
l10n:
  sourceCommit: 488e1953f44909cbeb419f0e2133cc28ca069f84
---

{{HTTPSidebar}}

Der **`Content-Digest`** Antwort- oder Anfrage-Header liefert einen {{Glossary("digest", "Digest")}} des tatsächlichen Nachrichteninhalts, des Datenstroms aus Oktetten, der in einer HTTP-Nachricht gerahmt ist. Daher ist `Content-Digest` unter anderem abhängig von {{HTTPHeader("Content-Encoding")}} und {{HTTPHeader("Content-Range")}}, jedoch nicht abhängig beispielsweise von HTTP/1.1's {{HTTPHeader("Transfer-Encoding")}}. `Content-Digest` kann mit {{HTTPHeader("Repr-Digest")}} übereinstimmen, wenn eine Repräsentation in einer einzelnen Nachricht gesendet wurde.

In diesem Zusammenhang bezieht sich _content_ auf eine bestimmte Oktett-Repräsentation der [ausgewählten Repräsentation](https://www.rfc-editor.org/rfc/rfc9110#section-6.4) der Zielressource.

Ein Client kann anfordern, dass ein Server einen `Content-Digest` ausgibt, indem er {{HTTPHeader("Want-Content-Digest")}} verwendet.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Representation_header", "Repräsentationsheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
      <td>nein</td>
    </tr>
  </tbody>
</table>

## Syntax

`Content-Digest` beschreibt ein [RFC8941 Wörterbuch](https://www.rfc-editor.org/rfc/rfc8941#section-3.2) mit seinen Schlüsseln als Namen der Digest-Algorithmen und seinen Werten als Digest in Bytes (oder einem ganzzahligen Digest für ältere Digest-Algorithmen).

> [!NOTE]
> Im Gegensatz zu früheren Entwürfen der Spezifikation sind die standard-base64-kodierten Digest-Bytes als Teil der [Wörterbuch-Syntax](https://www.rfc-editor.org/rfc/rfc8941#name-byte-sequences) in Doppelpunkte (`:`, ASCII 0x3A) gehüllt.

```http
Content-Digest: <digest-algorithm>=:<standard-padded-base64-digest-value>:, ...
Content-Digest: <digest-algorithm-integer-checksum>=<integer-checksum-value>, ...
```

## Direktiven

Für zulässige Digest-Algorithmen siehe {{HTTPHeader("Repr-Digest")}}.

## Beispiele

```plain
Content-Digest: unixcksum=916142062
Content-Digest: md5=:+thA//8pGVGk2VYuJkFNvA==:, unixsum=26869
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Dieser Header hat keine spezifikationsdefinierte Browser-Integration ("Browser-Kompatibilität" trifft nicht zu). Entwickler können HTTP-Header mit `fetch()` setzen und abrufen, um anwendungsspezifisches Implementierungsverhalten bereitzustellen.

## Siehe auch

- {{HTTPHeader("Repr-Digest")}}, {{HTTPHeader("Want-Content-Digest")}}, {{HTTPHeader("Want-Repr-Digest")}}
- {{HTTPHeader("ETag")}}
