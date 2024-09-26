---
title: Content-Digest
slug: Web/HTTP/Headers/Content-Digest
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}{{SeeCompatTable}}

Der **`Content-Digest`** Antwort- oder Anforderungsheader bietet einen {{Glossary("digest")}} des tatsächlichen Nachrichteninhalts, dem Byte-Strom, der in einer HTTP-Nachricht umrahmt ist. Daher ist `Content-Digest` unter anderem abhängig von {{HTTPHeader("Content-Encoding")}} und {{HTTPHeader("Content-Range")}}, jedoch nicht abhängig von beispielsweise {{HTTPHeader("Transfer-Encoding")}} von HTTP/1.1. `Content-Digest` kann mit {{HTTPHeader("Repr-Digest")}} übereinstimmen, wenn eine Darstellung in einer einzelnen Nachricht gesendet wurde.

In diesem Kontext bezieht sich _content_ auf eine bestimmte Byte-Darstellung der [ausgewählten Darstellung](https://www.rfc-editor.org/rfc/rfc9110#section-6.4) der Zielressource.

Ein Client kann verlangen, dass ein Server einen `Content-Digest` sendet, indem er {{HTTPHeader("Want-Content-Digest")}} ausgibt.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Representation header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Verbotener Header-Name")}}</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

`Content-Digest` beschreibt ein [RFC8941-Wörterbuch](https://www.rfc-editor.org/rfc/rfc8941#section-3.2), wobei seine Schlüssel die Namen der Digest-Algorithmen und seine Werte der Digest in Bytes (oder ein ganzzahliger Digest für ältere Digest-Algorithmen) sind.

> [!NOTE]
> Im Gegensatz zu früheren Entwürfen der Spezifikation sind die standardmäßig base64-codierten Digest-Bytes als Teil der [Wörterbuchsyntax](https://www.rfc-editor.org/rfc/rfc8941#name-byte-sequences) in Doppelpunkte (`:`, ASCII 0x3A) eingeschlossen.

```http
Content-Digest: <digest-algorithm>=:<standard-padded-base64-digest-value>:, ...
Content-Digest: <digest-algorithm-integer-checksum>=<integer-checksum-value>, ...
```

## Direktiven

Zulässige Digest-Algorithmen finden Sie unter {{HTTPHeader("Repr-Digest")}}.

## Beispiele

```plain
Content-Digest: unixcksum=916142062
Content-Digest: md5=:+thA//8pGVGk2VYuJkFNvA==:, unixsum=26869
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Repr-Digest")}}, {{HTTPHeader("Want-Content-Digest")}}, {{HTTPHeader("Want-Repr-Digest")}}
- {{HTTPHeader("ETag")}}
