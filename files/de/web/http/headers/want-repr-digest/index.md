---
title: Want-Repr-Digest
slug: Web/HTTP/Headers/Want-Repr-Digest
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}{{SeeCompatTable}}

Der **`Want-Repr-Digest`** Anforderungs- oder Antwort-Header gibt den Wunsch nach einem {{HTTPHeader("Repr-Digest")}}-Header an.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>[Representation header](/de/docs/Glossary/Representation_header)</td>
    </tr>
    <tr>
      <th scope="row">[Verbotener Header-Name](/de/docs/Glossary/Forbidden_header_name)</th>
      <td>nein</td>
    </tr>
  </tbody>
</table>

## Syntax

`Want-Repr-Digest` beschreibt ein [RFC8941-Dictionary](https://www.rfc-editor.org/rfc/rfc8941#section-3.2) mit Schlüsseln, die Hashing-Algorithmen sind, und Werten, die die Ganzzahlen `0` (bedeutet "nicht akzeptabel") oder von `1` bis `9` sind (ausdrückend eine aufsteigende, relative, gewichtete Präferenz).

> [!NOTE]
> Im Gegensatz zu früheren Entwürfen der Spezifikationen wird die Gewichtung _nicht_ durch [q-Werte](/de/docs/Glossary/Quality_values) angegeben.

## Direktiven

Erlaubte Digest-Algorithmen finden Sie unter {{HTTPHeader("Repr-Digest")}}.

## Beispiele

```http
Want-Repr-Digest: sha-512=8, sha-256=6, adler=0, sha=1
Want-Repr-Digest: sha-512=10, sha-256=1, md5=0
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Content-Digest")}}, {{HTTPHeader("Repr-Digest")}}, {{HTTPHeader("Want-Content-Digest")}}
