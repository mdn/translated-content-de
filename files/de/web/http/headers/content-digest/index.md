---
title: Content-Digest
slug: Web/HTTP/Headers/Content-Digest
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}{{SeeCompatTable}}

Der **`Content-Digest`** Antwort- oder Anfrage-Header bietet einen [digest](/de/docs/Glossary/digest) des eigentlichen Nachrichteninhalts, des Stroms von Oktetten, die in einer HTTP-Nachricht eingerahmt sind. Als solcher hängt `Content-Digest` unter anderem von {{HTTPHeader("Content-Encoding")}} und {{HTTPHeader("Content-Range")}} ab, jedoch nicht beispielsweise von HTTP/1.1's {{HTTPHeader("Transfer-Encoding")}}. `Content-Digest` kann mit {{HTTPHeader("Repr-Digest")}} übereinstimmen, wenn eine Repräsentation in einer einzelnen Nachricht gesendet wurde.

In diesem Zusammenhang bezieht sich _content_ auf eine bestimmte Oktett-Repräsentation der [ausgewählten Repräsentation](https://www.rfc-editor.org/rfc/rfc9110#section-6.4) der Zielressource.

Ein Client kann verlangen, dass ein Server einen `Content-Digest` ausgibt, indem er {{HTTPHeader("Want-Content-Digest")}} anfordert.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>[Repräsentations-Header](/de/docs/Glossary/Representation_header)</td>
    </tr>
    <tr>
      <th scope="row">[Verbotener Header-Name](/de/docs/Glossary/Forbidden_header_name)</th>
      <td>nein</td>
    </tr>
  </tbody>
</table>

## Syntax

`Content-Digest` beschreibt ein [RFC8941-Wörterbuch](https://www.rfc-editor.org/rfc/rfc8941#section-3.2), wobei seine Schlüssel Namen von Digest-Algorithmen sind und seine Werte den Digest in Bytes (oder einen ganzzahligen Digest für ältere Digest-Algorithmen) darstellen.

> [!NOTE]
> Im Gegensatz zu früheren Entwürfen der Spezifikation sind die standard-base64-codierten Digest-Bytes in Doppelpunkte (`:`, ASCII 0x3A) als Teil der [Wörterbuchsyntax](https://www.rfc-editor.org/rfc/rfc8941#name-byte-sequences) eingeschlossen.

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

{{Compat}}

## Siehe auch

- {{HTTPHeader("Repr-Digest")}}, {{HTTPHeader("Want-Content-Digest")}}, {{HTTPHeader("Want-Repr-Digest")}}
- {{HTTPHeader("ETag")}}
