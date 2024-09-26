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
> Für `id-*` Digest-Algorithmen, verwenden Sie {{HTTPHeader("Want-Repr-Digest")}}.

Der **`Want-Digest`** HTTP-Header (Anforderung oder Antwort) fordert die andere Seite auf, einen {{Glossary("digest")}} mit dem {{HTTPHeader("Digest")}}-Header bereitzustellen.

Der Header enthält Bezeichner für einen oder mehrere Digest-Algorithmen, die der Absender wünscht, dass der Server sie zur Erstellung des Digest verwendet.
Die Anforderung kann {{Glossary("quality values")}} zur Angabe ihrer Präferenz/Reihenfolge für bestimmte Digest-Algorithmen verwenden.

Falls `Want-Digest` keine vom Server unterstützten Digest-Algorithmen enthält, kann der Server antworten mit:

- einem Digest, der mit einem anderen Digest-Algorithmus berechnet wurde, oder
- einem [`400 Bad Request`](/de/docs/Web/HTTP/Status/400)-Fehler und einem weiteren `Want-Digest`-Header in dieser Antwort, der die Algorithmen aufführt, die er unterstützt.

Siehe auch den {{HTTPHeader("Digest")}}-Header.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
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

// Mehrere Algorithmen, gewichtet mit der Qualitätssyntax:
Want-Digest: <digest-algorithm><q-value>,<digest-algorithm><q-value>
```

## Direktiven

- \<digest-algorithm>
  - : Digest-Algorithmen sind in den [Digest Headers](https://datatracker.ietf.org/doc/draft-ietf-httpbis-digest-headers/) definiert.
    - Zulässige Werte für Digest-Algorithmen umfassen: `unixsum`, `unixcksum`, `crc32c`, `sha-256` und `sha-512`, `id-sha-256`, `id-sha-512`
    - Veraltete Werte für Algorithmen umfassen: `md5`, `sha`, `adler32`.
- \<q-value>
  - : Der [Quality Value](/de/docs/Glossary/Quality_values), der auf diese Option angewendet werden soll.

## Beispiele

```http
Want-Digest: sha-256
Want-Digest: SHA-512;q=0.3, sha-256;q=1, md5;q=0
```

### Grundlegende Funktionsweise

Der Absender gibt eine Liste von Digests an, die er akzeptieren möchte, und der Server
verwendet einen davon:

Anforderung:

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

Anforderung:

```http
GET /item
Want-Digest: sha;q=1
```

Antwort:

```http
HTTP/1.1 200 Ok
Digest: sha-256=X48E9qOokqqrvdts8nOJRJN3OWDUoyWxBf7kbu9DBPE=
```

Der Server unterstützt keinen der angeforderten Digest-Algorithmen. In diesem Fall antwortet er mit einem 400-Fehler und fügt einen weiteren `Want-Digest`-Header hinzu, der die Algorithmen auflistet, die er unterstützt:

Anforderung:

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

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- {{HTTPHeader("Digest")}}
