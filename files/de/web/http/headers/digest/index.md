---
title: Digest
slug: Web/HTTP/Headers/Digest
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}{{Deprecated_Header}}{{non-standard_header}}

> [!NOTE]
> Dieser Header wurde in [Entwurf 8](https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-digest-headers-08) aus der Spezifikation entfernt.
> Verwenden Sie stattdessen {{HTTPHeader("Content-Digest")}}.
> Für `id-*` Digest-Algorithmen verwenden Sie {{HTTPHeader("Repr-Digest")}}.

Der HTTP-Header **`Digest`** für Antworten oder Anfragen liefert der Gegenseite einen [digest](/de/docs/Glossary/digest) der {{HTTPHeader("Content-Encoding")}}-kodierten _ausgewählten Repräsentation_. Er kann angefordert werden, indem der {{HTTPHeader("Want-Digest")}}-Header verwendet wird.

Repräsentationen sind unterschiedliche Formen einer bestimmten Ressource, die auf eine Anfrage zurückgegeben werden könnten: Zum Beispiel könnte dieselbe Ressource in einem spezifischen Medientyp wie XML oder JSON formatiert, einer bestimmten geschriebenen Sprache oder geografischen Region angepasst und/oder für die Übertragung komprimiert oder anderweitig kodiert sein. Die _ausgewählte Repräsentation_ ist das tatsächliche Format einer Ressource, das nach [Inhaltsverhandlung](/de/docs/Web/HTTP/Content_negotiation) zurückgegeben wird und kann aus den [Repräsentations-Headern](/de/docs/Glossary/Representation_header) der Antwort bestimmt werden.

Der Digest bezieht sich auf die gesamte Repräsentation einer Ressource, nicht auf eine bestimmte Nachricht. Er kann verwendet werden, um zu überprüfen, dass die Repräsentationsdaten während der Übertragung nicht verändert wurden.

> [!NOTE]
> Obwohl eine Repräsentation vollständig im Nachrichtenkörper einer einzelnen Antwort enthalten sein kann, kann sie auch unter Verwendung mehrerer Nachrichten als Antwort auf eine [Range-Anfrage](/de/docs/Web/HTTP/Range_requests) gesendet oder ganz weggelassen werden als Antwort auf eine {{HTTPMethod("HEAD")}}-Anfrage.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>[Response-Header](/de/docs/Glossary/Response_header)</td>
    </tr>
    <tr>
      <th scope="row">[Verbotener Header-Name](/de/docs/Glossary/Forbidden_header_name)</th>
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
    - Veraltete Digest-Algorithmus-Werte beinhalten: `id-sha-256`, `id-sha-512`
- `<digest-value>`
  - : Das Ergebnis der Anwendung des Digest-Algorithmus auf die Ressourcenrepräsentation und die Kodierung des Ergebnisses (für nicht-`id-*` Digest-Algorithmus-Werte).
    Die Wahl des Digest-Algorithmus bestimmt auch die zu verwendende Kodierung: z. B. verwendet SHA-256 base64-Kodierung, während unixsum durch eine dezimale Ganzzahl dargestellt wird.

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
