---
title: Want-Repr-Digest
slug: Web/HTTP/Headers/Want-Repr-Digest
l10n:
  sourceCommit: 488e1953f44909cbeb419f0e2133cc28ca069f84
---

{{HTTPSidebar}}

Der **`Want-Repr-Digest`**-Anforderungs- oder Antwort-Header gibt den Wunsch nach einem {{HTTPHeader("Repr-Digest")}}-Header an.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Representation_header", "Repräsentations-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
      <td>nein</td>
    </tr>
  </tbody>
</table>

## Syntax

`Want-Repr-Digest` beschreibt ein [RFC8941-Dictionary](https://www.rfc-editor.org/rfc/rfc8941#section-3.2) mit Schlüsseln, die Hash-Algorithmen sind, und Werten, die die Ganzzahlen `0` (bedeutet "nicht akzeptabel") oder `1` bis `9` (die in aufsteigender Reihenfolge relative, gewichtete Präferenzen ausdrücken) sind.

> [!NOTE]
> Im Gegensatz zu früheren Entwürfen der Spezifikationen wird die Gewichtung _nicht_ über {{Glossary("Quality_values", "q-values")}} deklariert.

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

Dieser Header hat keine spezifikationsdefinierte Browser-Integration ("Browser-Kompatibilität" ist nicht anwendbar). Entwickler können HTTP-Header mit `fetch()` festlegen und abrufen, um eine anwendungsspezifische Implementierungsverhalten bereitzustellen.

## Siehe auch

- {{HTTPHeader("Content-Digest")}}, {{HTTPHeader("Repr-Digest")}}, {{HTTPHeader("Want-Content-Digest")}}
