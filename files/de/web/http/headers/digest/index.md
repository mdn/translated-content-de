---
title: Digest
slug: Web/HTTP/Headers/Digest
l10n:
  sourceCommit: edefa50f18613599b92e2eb3e9556fbde220b360
---

{{HTTPSidebar}}{{Deprecated_Header}}{{non-standard_header}}

> [!NOTE]
> Dieses Header wurde in [Entwurf 8](https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-digest-headers-08) aus der Spezifikation entfernt.
> Verwenden Sie stattdessen {{HTTPHeader("Content-Digest")}}.
> Für `id-*` Digest-Algorithmen verwenden Sie {{HTTPHeader("Repr-Digest")}}.

Der HTTP **`Digest`** {{Glossary("request_header", "Request-Header")}} und {{Glossary("response_header", "Response-Header")}} liefert dem Empfänger einen {{Glossary("digest", "Digest")}} der {{HTTPHeader("Content-Encoding")}}-kodierten _ausgewählten Repräsentation_.
Er kann angefordert werden, indem der {{HTTPHeader("Want-Digest")}} Header verwendet wird.

Repräsentationen sind verschiedene Formen einer bestimmten Ressource, die von einer Anfrage zurückgegeben werden könnten: Zum Beispiel könnte dieselbe Ressource in einem bestimmten Medientyp wie XML oder JSON formatiert, an eine bestimmte geschriebene Sprache oder geografische Region angepasst und/oder für den Versand komprimiert oder anderweitig kodiert sein.
Die _ausgewählte Repräsentation_ ist eine Ressource, die nach [Inhaltsverhandlung](/de/docs/Web/HTTP/Content_negotiation) zurückgegeben wird und aus den {{Glossary("Representation_header", "Repräsentations-Headern")}} der Antwort ermittelt werden kann.

Der Digest bezieht sich auf die gesamte Repräsentation einer Ressource und nicht auf eine bestimmte Nachricht.
Er kann verwendet werden, um zu verifizieren, dass die Repräsentationsdaten während der Übertragung nicht verändert wurden.

> [!NOTE]
> Während eine Repräsentation vollständig im Nachrichtentext einer einzigen Antwort enthalten sein kann, kann sie auch unter Verwendung mehrerer Nachrichten als Antwort auf eine [Bereichsanfrage](/de/docs/Web/HTTP/Range_requests) gesendet oder ganz weggelassen werden als Antwort auf eine {{HTTPMethod("HEAD")}} Anfrage.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Response-Header")}}, {{Glossary("Request_header", "Request-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Headername")}}</th>
      <td>Nein</td>
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
  - : Digest-Algorithmuswerte sind definiert in [6. Digest Algorithm Values](https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-digest-headers-07#name-digest-algorithm-values).
    - Erlaubte Digest-Algorithmuswerte sind: `sha-512` und `sha-256`
    - Erlaubte unsichere Digest-Algorithmuswerte sind: `md5`, `sha`, `unixsum`, `unixcksum`, `adler32` und `crc32c`
    - Veraltete Digest-Algorithmuswerte umfassen: `id-sha-256`, `id-sha-512`
- `<digest-value>`
  - : Das Ergebnis der Anwendung des Digest-Algorithmus auf die Ressourcenrepräsentation und Kodierung des Ergebnisses (für nicht-`id-*` Digest-Algorithmuswerte).
    Die Wahl des Digest-Algorithmus bestimmt auch die zu verwendende Kodierung: Zum Beispiel verwendet SHA-256 base64-Kodierung, während unixsum durch eine Dezimalzahl dargestellt wird.

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
- [HTTP Bereichsanfragen](/de/docs/Web/HTTP/Range_requests)
- {{HTTPStatus("206", "206 Partial Content")}}
