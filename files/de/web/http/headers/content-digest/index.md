---
title: Content-Digest
slug: Web/HTTP/Headers/Content-Digest
l10n:
  sourceCommit: 92b03e46cef6be37de60799363e3e33e3415b491
---

{{HTTPSidebar}}

Der HTTP-Header **`Content-Digest`** liefert einen {{Glossary("digest", "Digest")}} des Nachrichteninhalts in einer HTTP-Nachricht.
Daher hängt `Content-Digest` unter anderem von {{HTTPHeader("Content-Encoding")}} und {{HTTPHeader("Content-Range")}} ab, ist jedoch nicht von zum Beispiel HTTP/1.1's {{HTTPHeader("Transfer-Encoding")}} abhängig.
`Content-Digest` kann mit {{HTTPHeader("Repr-Digest")}} übereinstimmen, wenn eine Repräsentation in einer einzigen Nachricht gesendet wurde.

In diesem Zusammenhang bezieht sich _content_ auf eine bestimmte Oktett-Repräsentation der [ausgewählten Repräsentation](https://www.rfc-editor.org/rfc/rfc9110#section-6.4) der Zielressource.

Ein Client kann einen Server auffordern, einen `Content-Digest` auszugeben, indem er {{HTTPHeader("Want-Content-Digest")}} anfordert.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Request header")}}, {{Glossary("Response_header", "Response header")}}, {{Glossary("Representation_header", "Representation header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

`Content-Digest` beschreibt ein [RFC8941-Dictionary](https://www.rfc-editor.org/rfc/rfc8941#section-3.2), dessen Schlüssel die Namen der Digest-Algorithmen und dessen Werte der Digest in Bytes (oder ein Ganzzahl-Digest für ältere Digest-Algorithmen) sind.

> [!NOTE]
> Im Gegensatz zu früheren Entwürfen der Spezifikation sind die in Standard-Base64-kodierten Digest-Bytes als Teil der [Dictionary-Syntax](https://www.rfc-editor.org/rfc/rfc8941#name-byte-sequences) in Doppelpunkte (`:`, ASCII 0x3A) eingeschlossen.

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

Dieser Header hat keine spezifikationsdefinierte Browser-Integration ("Browser-Kompatibilität" trifft nicht zu).
Entwickler können HTTP-Header mit `fetch()` setzen und abrufen, um anwendungsspezifisches Implementierungsverhalten bereitzustellen.

## Siehe auch

- {{HTTPHeader("Repr-Digest")}}, {{HTTPHeader("Want-Content-Digest")}}, {{HTTPHeader("Want-Repr-Digest")}}
- {{HTTPHeader("ETag")}}
