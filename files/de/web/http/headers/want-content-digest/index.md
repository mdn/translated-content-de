---
title: Want-Content-Digest
slug: Web/HTTP/Headers/Want-Content-Digest
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}{{SeeCompatTable}}

Der **`Want-Content-Digest`** Anfrage- oder Antwortheader gibt den Wunsch nach einem {{HTTPHeader("Content-Digest")}}-Header an. Es handelt sich um das `Content-`-Analogon zu {{HTTPHeader("Want-Repr-Digest")}}.

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

`Want-Content-Digest` beschreibt ein [RFC8941-Wörterbuch](https://www.rfc-editor.org/rfc/rfc8941#section-3.2), bei dem die Schlüssel Hash-Algorithmen sind und die Werte die Ganzzahlen `0` (bedeutet "nicht akzeptabel") oder `1` bis `9` (die eine aufsteigende, relative, gewichtete Präferenz anzeigen) sind.

> [!NOTE]
> Im Gegensatz zu früheren Entwürfen der Spezifikationen wird die Gewichtung _nicht_ über [q-Werte](/de/docs/Glossary/Quality_values) deklariert.

## Direktiven

Für zulässige Digest-Algorithmen siehe {{HTTPHeader("Repr-Digest")}}.

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
