---
title: Want-Content-Digest
slug: Web/HTTP/Headers/Want-Content-Digest
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}{{SeeCompatTable}}

Der **`Want-Content-Digest`** Anforderungs- oder Antwortheader gibt den Wunsch nach einem {{HTTPHeader("Content-Digest")}} Header an. Es ist das `Content-`-Äquivalent von {{HTTPHeader("Want-Repr-Digest")}}.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Representation_header", "Repräsentation-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
      <td>nein</td>
    </tr>
  </tbody>
</table>

## Syntax

`Want-Content-Digest` beschreibt ein [RFC8941 Wörterbuch](https://www.rfc-editor.org/rfc/rfc8941#section-3.2) mit seinen Schlüsseln als Hashing-Algorithmen und seinen Werten als Ganzzahlen `0` (bedeutet "nicht akzeptabel") oder `1` bis `9` (vermitteln aufsteigende, relative, gewichtete Präferenz).

> [!NOTE]
> Im Gegensatz zu früheren Entwürfen der Spezifikationen wird die Gewichtung _nicht_ über {{Glossary("Quality_values", "q-Werte")}} angegeben.

## Direktiven

Zulässige Digest-Algorithmen finden Sie unter {{HTTPHeader("Repr-Digest")}}.

## Beispiele

```http
Want-Content-Digest: md5=1, sha-512=0, sha-256=4
Want-Content-Digest: md5=0
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Content-Digest")}}, {{HTTPHeader("Repr-Digest")}}, {{HTTPHeader("Want-Repr-Digest")}}
