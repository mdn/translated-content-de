---
title: Want-Digest
slug: Web/HTTP/Headers/Want-Digest
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}{{Deprecated_Header}}{{non-standard_header}}

> [!NOTE]
> Dieser Header wurde aus der Spezifikation in [Entwurf 8](https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-digest-headers-08) entfernt.
> Verwenden Sie stattdessen {{HTTPHeader("Want-Content-Digest")}}.
> Für `id-*`-Digest-Algorithmen verwenden Sie {{HTTPHeader("Want-Repr-Digest")}}.

Der **`Want-Digest`** HTTP-Header in einer Anfrage oder Antwort fordert die Gegenseite auf, einen {{Glossary("digest")}} unter Verwendung des {{HTTPHeader("Digest")}}-Headers bereitzustellen.

Der Header enthält Bezeichner für einen oder mehrere Digest-Algorithmen, die der Absender wünscht, dass der Server sie verwendet, um den Digest zu erstellen.
Die Anfrage kann {{Glossary("quality values")}} verwenden, um ihre Präferenz/Reihenfolge für bestimmte Digest-Algorithmen anzugeben.

Wenn `Want-Digest` keine Digest-Algorithmen enthält, die der Server unterstützt, kann der Server antworten mit:

- einem Digest, der unter Verwendung eines anderen Digest-Algorithmus berechnet wurde, oder
- einem [`400 Bad Request`](/de/docs/Web/HTTP/Status/400)-Fehler und einem weiteren `Want-Digest`-Header mit dieser Antwort, der die Algorithmen auflistet, die er unterstützt.

Siehe auch den {{HTTPHeader("Digest")}}-Header.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request header")}},
        {{Glossary("Response header")}}
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Want-Digest: <digest-algorithm>

// Mehrere Algorithmen, gewichtet mit der Syntax für Qualitätswerte:
Want-Digest: <digest-algorithm><q-value>,<digest-algorithm><q-value>
```

## Direktiven

- \<digest-algorithm>
  - : Digest-Algorithmen sind definiert in [Digest Headers](https://datatracker.ietf.org/doc/draft-ietf-httpbis-digest-headers/).
    - Erlaubte Digest-Algorithmus-Werte umfassen: `unixsum`, `unixcksum`, `crc32c`, `sha-256` und `sha-512`, `id-sha-256`, `id-sha-512`
    - Veraltete Algorithmus-Werte umfassen: `md5`, `sha`, `adler32`.
- \<q-value>
  - : Der [Qualitätswert](/de/docs/Glossary/Quality_values), der auf diese Option anzuwenden ist.

## Beispiele

```http
Want-Digest: sha-256
Want-Digest: SHA-512;q=0.3, sha-256;q=1, md5;q=0
```

### Grundlegende Funktionsweise

Der Absender stellt eine Liste von Digests zur Verfügung, die er zu akzeptieren bereit ist, und der Server
verwendet einen von ihnen:

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

Der Server unterstützt keinen der angeforderten Digest-Algorithmen, verwendet daher einen anderen Algorithmus:

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
In diesem Fall antwortet er mit einem 400 Fehler und fügt einen weiteren `Want-Digest`-Header hinzu, der die Algorithmen auflistet, die er unterstützt:

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
