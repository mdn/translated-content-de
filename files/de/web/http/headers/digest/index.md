---
title: Digest
slug: Web/HTTP/Headers/Digest
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}{{Deprecated_Header}}{{non-standard_header}}

> [!NOTE]
> Dieser Header wurde aus der Spezifikation in [Entwurf 8](https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-digest-headers-08) entfernt.
> Verwenden Sie stattdessen {{HTTPHeader("Content-Digest")}}.
> Für `id-*`-Digest-Algorithmen verwenden Sie {{HTTPHeader("Repr-Digest")}}.

Der **`Digest`**-Response- oder -Request-HTTP-Header stellt der anderen Seite einen {{Glossary("digest")}} der {{HTTPHeader("Content-Encoding")}}-kodierten _ausgewählten Repräsentation_ zur Verfügung. Er kann angefordert werden, indem man den {{HTTPHeader("Want-Digest")}}-Header verwendet.

Repräsentationen sind verschiedene Formen einer bestimmten Ressource, die von einer Anforderung zurückgegeben werden können: Zum Beispiel kann dieselbe Ressource in einem bestimmten Medientyp wie XML oder JSON formatiert, auf eine bestimmte geschriebene Sprache oder geografische Region lokalisiert und/oder für die Übertragung komprimiert oder anderweitig kodiert sein.
Die _ausgewählte Repräsentation_ ist das tatsächliche Format einer Ressource, die nach der [Inhaltsverhandlung](/de/docs/Web/HTTP/Content_negotiation) zurückgegeben wird, und kann aus den {{Glossary("Representation header","Representation headers")}} der Antwort bestimmt werden.

Der Digest bezieht sich auf die gesamte Repräsentation einer Ressource, nicht auf eine bestimmte Nachricht.
Er kann verwendet werden, um zu überprüfen, dass die Repräsentationsdaten während der Übertragung nicht verändert wurden.

> [!NOTE]
> Während eine Repräsentation vollständig im Nachrichtenrumpf einer einzelnen Antwort enthalten sein kann, kann sie auch mit mehreren Nachrichten als Antwort auf eine [Bereichsanfrage](/de/docs/Web/HTTP/Range_requests) gesendet oder in einer Antwort auf eine {{HTTPMethod("HEAD")}}-Anfrage ganz weggelassen werden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
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
  - : Digest-Algorithmus-Werte sind definiert in [6. Digest-Algorithmus-Werte](https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-digest-headers-07#name-digest-algorithm-values).
    - Erlaubte Digest-Algorithmus-Werte sind: `sha-512` und `sha-256`
    - Erlaubte unsichere Digest-Algorithmus-Werte sind: `md5`, `sha`, `unixsum`, `unixcksum`, `adler32` und `crc32c`
    - Veraltete Digest-Algorithmus-Werte umfassen: `id-sha-256`, `id-sha-512`
- `<digest-value>`
  - : Das Ergebnis der Anwendung des Digest-Algorithmus auf die Ressourcenrepräsentation und Codierung des Ergebnisses (für nicht-`id-*`-Digest-Algorithmus-Werte).
    Die Wahl des Digest-Algorithmus bestimmt auch die zu verwendende Codierung: beispielsweise verwendet SHA-256 eine Base64-Codierung, während unixsum durch eine Dezimalzahl dargestellt wird.

## Beispiele

```http
Digest: sha-256=X48E9qOokqqrvdts8nOJRJN3OWDUoyWxBf7kbu9DBPE=
Digest: sha-256=X48E9qOokqqrvdts8nOJRJN3OWDUoyWxBf7kbu9DBPE=,unixsum=30637
Digest: sha-256=X48E9qOokqqrvdts8nOJRJN3OWDUoyWxBf7kbu9DBPE=,id-sha-256=0KJL0PvNLH5UbYZLTT7DBFuSyxKpnjyadrWx5E90E/z=
```

## Spezifikationen

{{Specifications}}

## Kompatibilität mit Browsern

{{Compat}}

## Siehe auch

- {{HTTPHeader("Want-Digest")}}

- [HTTP-Bereichsanfragen](/de/docs/Web/HTTP/Range_requests)
- [`206 Partial Content`](/de/docs/Web/HTTP/Status/206)
