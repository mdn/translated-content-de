---
title: Content-Digest
slug: Web/HTTP/Headers/Content-Digest
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}{{SeeCompatTable}}

Der **`Content-Digest`** Antwort- oder Anfrage-Header bietet einen {{Glossary("digest")}} des tatsächlichen Nachrichteninhalts, des Stroms von Oktetten, die in einer HTTP-Nachricht gerahmt sind. Somit hängt `Content-Digest` unter anderem von {{HTTPHeader("Content-Encoding")}} und {{HTTPHeader("Content-Range")}} ab, nicht aber zum Beispiel von HTTP/1.1's {{HTTPHeader("Transfer-Encoding")}}. `Content-Digest` kann mit {{HTTPHeader("Repr-Digest")}} übereinstimmen, wenn eine Repräsentation in einer einzigen Nachricht gesendet wurde.

In diesem Zusammenhang bezieht sich _content_ auf eine bestimmte Oktettenrepräsentation der [ausgewählten Darstellung](https://www.rfc-editor.org/rfc/rfc9110#section-6.4) der Zielressource.

Ein Client kann anfordern, dass ein Server einen `Content-Digest` bereitstellt, indem er {{HTTPHeader("Want-Content-Digest")}} ausstellt.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Representation header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>nein</td>
    </tr>
  </tbody>
</table>

## Syntax

`Content-Digest` beschreibt ein [RFC8941-Wörterbuch](https://www.rfc-editor.org/rfc/rfc8941#section-3.2), dessen Schlüssel die Namen von Digest-Algorithmen und dessen Werte der Digest in Bytes (oder ein Ganzzahl-Digest für Legacy-Digest-Algorithmen) sind.

> [!NOTE]
> Im Gegensatz zu früheren Entwürfen der Spezifikation, sind die standard-base64-kodierten Digest-Bytes als Teil der [Wörterbuchsyntax](https://www.rfc-editor.org/rfc/rfc8941#name-byte-sequences) in Doppelpunkte (`:`, ASCII 0x3A) eingeschlossen.

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
