---
title: Want-Digest
slug: Web/HTTP/Headers/Want-Digest
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}{{Deprecated_Header}}{{non-standard_header}}

> [!NOTE]
> Dieser Header wurde in [Entwurf 8](https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-digest-headers-08) aus der Spezifikation entfernt.
> Verwenden Sie stattdessen {{HTTPHeader("Want-Content-Digest")}}.
> Für `id-*` Digest-Algorithmen, verwenden Sie {{HTTPHeader("Want-Repr-Digest")}}.

Der **`Want-Digest`** HTTP-Anforderungs- oder Antwort-Header fordert die Gegenseite auf, einen {{Glossary("digest", "Digest")}} mit dem {{HTTPHeader("Digest")}}-Header bereitzustellen.

Der Header enthält Bezeichner für einen oder mehrere Digest-Algorithmen, die der Absender wünscht, dass der Server verwendet, um den Digest zu erstellen.
Die Anforderung kann {{Glossary("quality_values", "Qualitätswerte")}} verwenden, um ihre Präferenz/Reihenfolge für bestimmte Digest-Algorithmen anzugeben.

Wenn `Want-Digest` keine Digest-Algorithmen enthält, die der Server unterstützt, kann der Server mit Folgendem antworten:

- einem Digest, der mit einem anderen Digest-Algorithmus berechnet wurde, oder
- einem [`400 Bad Request`](/de/docs/Web/HTTP/Status/400)-Fehler, und einen anderen `Want-Digest`-Header mit dieser Antwort einschließen, der die Algorithmen auflistet, die er unterstützt.

Siehe auch den {{HTTPHeader("Digest")}}-Header.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Anforderungs-Header")}},
        {{Glossary("Response_header", "Antwort-Header")}}
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
      <td>nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Want-Digest: <digest-algorithm>

// Multiple algorithms, weighted with the quality value syntax:
Want-Digest: <digest-algorithm><q-value>,<digest-algorithm><q-value>
```

## Direktiven

- \<digest-algorithm>
  - : Digest-Algorithmen sind in [Digest Headers](https://datatracker.ietf.org/doc/draft-ietf-httpbis-digest-headers/) definiert.
    - Zulässige Digest-Algorithmus-Werte umfassen: `unixsum`, `unixcksum`, `crc32c`, `sha-256` und `sha-512`, `id-sha-256`, `id-sha-512`
    - Veraltete Algorithmus-Werte umfassen: `md5`, `sha`, `adler32`.
- \<q-value>
  - : Der {{Glossary("Quality_values", "Qualitätswert")}}, der auf diese Option angewendet werden soll.

## Beispiele

```http
Want-Digest: sha-256
Want-Digest: SHA-512;q=0.3, sha-256;q=1, md5;q=0
```

### Grundlegende Funktionsweise

Der Absender stellt eine Liste von Digests bereit, die er zu akzeptieren bereit ist, und der Server verwendet einen davon:

Anfrage:

```http
GET /item
Want-Digest: sha-256;q=0.3, sha;q=1
```

Antwort:

```http
HTTP/1.1 200 Ok
Digest: sha-256=X48E9qOokqqrvdts8nOJRJN3OWDUoyWxBf7kbu9DBPE=
```

### Nicht unterstützte Digests

Der Server unterstützt keinen der angeforderten Digest-Algorithmen und verwendet daher einen anderen Algorithmus:

Anfrage:

```http
GET /item
Want-Digest: sha;q=1
```

Antwort:

```http
HTTP/1.1 200 Ok
Digest: sha-256=X48E9qOokqqrvdts8nOJRJN3OWDUoyWxBf7kbu9DBPE=
```

Der Server unterstützt keinen der angeforderten Digest-Algorithmen.
In diesem Fall antwortet er mit einem 400-Fehler und schließt einen weiteren `Want-Digest`-Header ein, der die Algorithmen auflistet, die er unterstützt:

Anfrage:

```http
GET /item
Want-Digest: sha;q=1
```

Antwort:

```http
HTTP/1.1 400 Bad Request
Want-Digest: sha-256, sha-512
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Digest")}}
