---
title: Digest
slug: Web/HTTP/Headers/Digest
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}{{Deprecated_Header}}{{non-standard_header}}

> [!NOTE]
> Dieser Header wurde in der Spezifikation in [Entwurf 8](https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-digest-headers-08) entfernt.
> Verwenden Sie stattdessen {{HTTPHeader("Content-Digest")}}.
> Für `id-*` Digest-Algorithmen verwenden Sie {{HTTPHeader("Repr-Digest")}}.

Der **`Digest`**-HTTP-Header für Antworten oder Anfragen bietet der anderen Seite einen {{Glossary("digest", "Digest")}} der mit {{HTTPHeader("Content-Encoding")}} kodierten _ausgewählten Repräsentation_. Er kann durch den Einsatz des {{HTTPHeader("Want-Digest")}} Headers angefordert werden.

Repräsentationen sind verschiedene Formen einer bestimmten Ressource, die als Antwort auf eine Anfrage zurückgegeben werden können: Zum Beispiel könnte dieselbe Ressource in einem bestimmten Medientyp wie XML oder JSON formatiert sein, an eine bestimmte Sprache oder geografische Region angepasst, und/oder für die Übertragung komprimiert oder anders kodiert sein.
Die _ausgewählte Repräsentation_ ist das tatsächliche Format einer Ressource, die nach [Content Negotiation](/de/docs/Web/HTTP/Content_negotiation) zurückgegeben wird und kann aus den {{Glossary("Representation_header", "Repräsentations-Headern")}} der Antwort bestimmt werden.

Der Digest bezieht sich auf die gesamte Repräsentation einer Ressource, nicht auf eine spezielle Nachricht. Er kann genutzt werden, um zu verifizieren, dass die Repräsentationsdaten während der Übertragung nicht verändert wurden.

> [!NOTE]
> Während eine Repräsentation vollständig im Nachrichtenkörper einer einzelnen Antwort enthalten sein kann, kann sie auch mit mehreren Nachrichten als Antwort auf eine [Range-Anfrage](/de/docs/Web/HTTP/Range_requests) gesendet oder bei einer {{HTTPMethod("HEAD")}}-Anfrage vollständig weggelassen werden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
      <td>nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Digest: <digest-algorithm>=<digest-value>
Digest: <digest-algorithm>=<digest-value>,<digest-algorithm>=<digest-value>
```

## Direktiven

- `<digest-algorithm>`
  - : Digest-Algorithmuswerte sind in [6. Digest Algorithm Values](https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-digest-headers-07#name-digest-algorithm-values) definiert.
    - Erlaubte Digest-Algorithmuswerte sind: `sha-512` und `sha-256`
    - Erlaubte unsichere Digest-Algorithmuswerte sind: `md5`, `sha`, `unixsum`, `unixcksum`, `adler32` und `crc32c`
    - Veraltete Digest-Algorithmuswerte umfassen: `id-sha-256`, `id-sha-512`
- `<digest-value>`
  - : Das Ergebnis der Anwendung des Digest-Algorithmus auf die Ressourcenrepräsentation und das Kodieren des Ergebnisses (für nicht-`id-*` Digest-Algorithmuswerte).
    Die Wahl des Digest-Algorithmus bestimmt auch die zu verwendende Kodierung: Zum Beispiel verwendet SHA-256 Base64-Kodierung, während unixsum durch eine Dezimalzahl dargestellt wird.

## Beispiele

```http
Digest: sha-256=X48E9qOokqqrvdts8nOJRJN3OWDUoyWxBf7kbu9DBPE=
Digest: sha-256=X48E9qOokqqrvdts8nOJRJN3OWDUoyWxBf7kbu9DBPE=,unixsum=30637
Digest: sha-256=X48E9qOokqqrvdts8nOJRJN3OWDUoyWxBf7kbu9DBPE=,id-sha-256=0KJL0PvNLH5UbYZLTT7DBFuSyxKpnjyadrWx5E90E/z=
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Want-Digest")}}
- [HTTP Range-Anfragen](/de/docs/Web/HTTP/Range_requests)
- [`206 Partial Content`](/de/docs/Web/HTTP/Status/206)
