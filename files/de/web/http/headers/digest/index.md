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
> Für `id-*` Digest-Algorithmen verwenden Sie {{HTTPHeader("Repr-Digest")}}.

Der **`Digest`** Antwort- oder Anforderungs-HTTP-Header liefert der anderen Seite einen {{Glossary("digest")}} der {{HTTPHeader("Content-Encoding")}}-codierten _ausgewählten Repräsentation_. Er kann angefordert werden, indem der {{HTTPHeader("Want-Digest")}} Header verwendet wird.

Repräsentationen sind unterschiedliche Formen einer bestimmten Ressource, die von einer Anforderung zurückgegeben werden können: Zum Beispiel kann dieselbe Ressource in einem bestimmten Medientyp wie XML oder JSON formatiert, an eine bestimmte Schriftsprache oder geografische Region angepasst und/oder für die Übertragung komprimiert oder anderweitig codiert werden.
Die _ausgewählte Repräsentation_ ist das tatsächliche Format einer Ressource, die nach [Content Negotiation](/de/docs/Web/HTTP/Content_negotiation) zurückgegeben wird und kann anhand der {{Glossary("Representation header","Representation headers")}} der Antwort bestimmt werden.

Der Digest bezieht sich auf die gesamte Repräsentation einer Ressource, nicht auf eine bestimmte Nachricht.
Er kann verwendet werden, um zu überprüfen, ob die Repräsentationsdaten während der Übertragung nicht verändert wurden.

> [!NOTE]
> Während eine Repräsentation vollständig im Nachrichtenkörper einer einzelnen Antwort enthalten sein kann, kann sie auch unter Verwendung mehrerer Nachrichten als Antwort auf eine [Range-Anfrage](/de/docs/Web/HTTP/Range_requests) gesendet werden oder sie kann in der Antwort auf eine {{HTTPMethod("HEAD")}}-Anfrage vollständig weggelassen werden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
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
  - : Digest-Algorithmus-Werte sind definiert in [6. Digest Algorithm Values](https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-digest-headers-07#name-digest-algorithm-values).
    - Erlaubte Digest-Algorithmus-Werte sind: `sha-512` und `sha-256`
    - Erlaubte unsichere Digest-Algorithmus-Werte sind: `md5`, `sha`, `unixsum`, `unixcksum`, `adler32` und `crc32c`
    - Veraltete Digest-Algorithmus-Werte umfassen: `id-sha-256`, `id-sha-512`
- `<digest-value>`
  - : Das Ergebnis der Anwendung des Digest-Algorithmus auf die Ressourcenrepräsentation und der Kodierung des Ergebnisses (für nicht-`id-*` Digest-Algorithmus-Werte).
    Die Wahl des Digest-Algorithmus bestimmt auch die zu verwendende Kodierung: Zum Beispiel verwendet SHA-256 base64-Kodierung, während unixsum durch eine dezimale Ganzzahl dargestellt wird.

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

- [HTTP-Range-Anfragen](/de/docs/Web/HTTP/Range_requests)
- [`206 Partial Content`](/de/docs/Web/HTTP/Status/206)
