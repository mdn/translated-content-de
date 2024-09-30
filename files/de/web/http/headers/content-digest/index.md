---
title: Content-Digest
slug: Web/HTTP/Headers/Content-Digest
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}{{SeeCompatTable}}

Der **`Content-Digest`** Antwort- oder Anfrage-Header liefert einen [Digest](/de/docs/Glossary/digest) des eigentlichen Nachrichteninhalts, des in einer HTTP-Nachricht gerahmten Oktettstroms. Somit ist `Content-Digest` unter anderem abhängig von {{HTTPHeader("Content-Encoding")}} und {{HTTPHeader("Content-Range")}}, jedoch nicht abhängig, beispielsweise, von {{HTTPHeader("Transfer-Encoding")}} von HTTP/1.1. `Content-Digest` kann mit {{HTTPHeader("Repr-Digest")}} übereinstimmen, wenn eine Repräsentation in einer einzelnen Nachricht gesendet wurde.

In diesem Kontext bezieht sich _Inhalt_ auf eine bestimmte Oktett-Darstellung der [ausgewählten Darstellung](https://www.rfc-editor.org/rfc/rfc9110#section-6.4) der Zielressource.

Ein Client kann anfordern, dass ein Server einen `Content-Digest` sendet, indem er {{HTTPHeader("Want-Content-Digest")}} verwendet.

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

`Content-Digest` beschreibt ein [RFC8941-Dictionary](https://www.rfc-editor.org/rfc/rfc8941#section-3.2) mit Schlüsseln, die Namen von Digest-Algorithmen sind, und Werten, die den Digest in Bytes darstellen (oder einen ganzzahligen Digest für ältere Digest-Algorithmen).

> [!NOTE]
> Im Gegensatz zu früheren Entwürfen der Spezifikation sind die standard-base64-codierten Digest-Bytes als Teil der [Dictionary-Syntax](https://www.rfc-editor.org/rfc/rfc8941#name-byte-sequences) in Doppelpunkte (`:`, ASCII 0x3A) eingeschlossen.

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
