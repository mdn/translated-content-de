---
title: Content-Digest header
short-title: Content-Digest
slug: Web/HTTP/Reference/Headers/Content-Digest
l10n:
  sourceCommit: 892eb917bee599a9d6cae7d33ed783129dbb39b3
---

Der HTTP-{{Glossary("request_header", "Request-Header")}} und {{Glossary("response_header", "Response-Header")}} **`Content-Digest`** enthält einen {{Glossary("hash_function", "Digest")}}, der mithilfe eines Hash-Algorithmus über den Nachrichteninhalt berechnet wird.
Empfänger können mit `Content-Digest` die Integrität des HTTP-Nachrichteninhalts überprüfen.

Mit dem Feld {{HTTPHeader("Want-Content-Digest")}} kann ein Absender einen `Content-Digest` anfordern und seine bevorzugten Hash-Algorithmen angeben.
Ein Content-Digest hängt von {{HTTPHeader("Content-Encoding")}} und {{HTTPHeader("Content-Range")}} ab, nicht jedoch von {{HTTPHeader("Transfer-Encoding")}}.

In bestimmten Fällen kann ein {{HTTPHeader("Repr-Digest")}} verwendet werden, um die Integrität von Teilnachrichten oder mehrteiligen Nachrichten anhand der vollständigen Repräsentation zu überprüfen.
Bei [Range Requests](/de/docs/Web/HTTP/Guides/Range_requests) beispielsweise hat ein `Repr-Digest` immer denselben Wert, wenn sich nur die angeforderten Bytebereiche unterscheiden. Der Content-Digest ist dagegen für jeden Teil unterschiedlich.
Daher ist ein `Content-Digest` mit einem {{HTTPHeader("Repr-Digest")}} identisch, wenn eine Repräsentation in einer einzigen Nachricht gesendet wird.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Request-Header")}}, {{Glossary("Response_header", "Response-Header")}}, {{Glossary("Representation_header", "Repräsentations-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Request-Header")}}</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Content-Digest: <digest-algorithm>=<digest-value>

// Multiple digest algorithms
Content-Digest: <digest-algorithm>=<digest-value>,<digest-algorithm>=<digest-value>, …
```

`Content-Digest` ist ein _strukturiertes Wörterbuchfeld_ ({{rfc("9651","Structured Field Values for HTTP")}}), dessen Schlüssel `<digest-algorithm>` und dessen Werte `<digest-value>` sind.

## Direktiven

- `<digest-algorithm>`
  - : Der Algorithmus, mit dem ein Digest des Nachrichteninhalts erstellt wird.
    Nur zwei registrierte Digest-Algorithmen gelten als sicher: `sha-512` und `sha-256`.
    Die unsicheren (veralteten) registrierten Digest-Algorithmen sind: `md5`, `sha` (SHA-1), `unixsum`, `unixcksum`, `adler` (ADLER32) und `crc32c`.
- `<digest-value>`
  - : Der Digest des Nachrichteninhalts, berechnet mit `<digest-algorithm>`, {{Glossary("base64", "Base64")}}-kodiert und von Doppelpunkten (`:`, ASCII 0x3A) umschlossen. Diese Kodierung wird in der Spezifikation als [Byte Sequence](https://www.rfc-editor.org/info/rfc9651/#name-byte-sequences) bezeichnet.

## Beispiele

In allen Beispielen sind die Endpunkte so konfiguriert, dass sie Digest-Header ohne vorherige Anforderung senden. Optional könnte ein Absender mit den Feldern {{HTTPHeader("Want-Content-Digest")}} und {{HTTPHeader("Want-Repr-Digest")}} einen `Content-Digest` oder `Repr-Digest` anfordern und seine bevorzugten Hash-Algorithmen angeben.

### Ein SHA-256-Content-Digest in einer Antwort

Ein User-Agent fordert eine Ressource an:

```http
GET /items/123 HTTP/1.1
Host: example.com
```

Der Server antwortet mit einem `Content-Digest` des Nachrichteninhalts, der mit dem SHA-256-Algorithmus berechnet wurde.
Der Digest wird über die exakten Bytes des Nachrichtenkörpers `{"hello": "mdn"}` berechnet (16 Bytes, ausdrücklich ohne abschließenden Zeilenumbruch):

```http
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: 16
Content-Digest: sha-256=:bMGjiT1wkArOzyB9ReAdpW51FV4mHlQygPXGp+TtzG4=:

{"hello": "mdn"}
```

### Identische Content-Digest- und Repr-Digest-Werte

Ein User-Agent fordert eine Ressource an:

```http
GET /items/123 HTTP/1.1
Host: example.com
```

Der Server antwortet mit einem `Content-Digest` und einem `Repr-Digest` des Nachrichteninhalts, die mit dem SHA-256-Algorithmus berechnet wurden.
Die Felder `Repr-Digest` und `Content-Digest` haben übereinstimmende Werte, weil sie mit demselben Algorithmus über dieselben Bytes, `{"hello": "mdn"}` (16 Bytes), berechnet werden und in diesem Fall die gesamte Repräsentation in einer einzigen Nachricht gesendet wird:

```http
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: 16
Content-Digest: sha-256=:bMGjiT1wkArOzyB9ReAdpW51FV4mHlQygPXGp+TtzG4=:
Repr-Digest: sha-256=:bMGjiT1wkArOzyB9ReAdpW51FV4mHlQygPXGp+TtzG4=:

{"hello": "mdn"}
```

### Unterschiedliche Content-Digest- und Repr-Digest-Werte

Ein User-Agent fordert mithilfe eines [Range Requests](/de/docs/Web/HTTP/Guides/Range_requests) nur einen Teil einer Ressource an:

```http
GET /items/123 HTTP/1.1
Host: example.com
Range: bytes=0-7
```

Der Server gibt eine {{HTTPStatus("206", "206 Partial Content")}}-Antwort zurück, die als Nachrichteninhalt nur die angeforderten Bytes `{"hello"` (8 Bytes) enthält.
`Content-Digest` deckt nur diese Bytes ab, während `Repr-Digest` weiterhin die gesamte Repräsentation `{"hello": "mdn"}` (16 Bytes) abdeckt. Deshalb unterscheiden sich die beiden Werte:

```http
HTTP/1.1 206 Partial Content
Content-Type: application/json
Content-Range: bytes 0-7/16
Content-Digest: sha-256=:pKQv0IAKChzGfyfxu5TNqcnvxIzaG4XICf6NQnB1YhY=:
Repr-Digest: sha-256=:bMGjiT1wkArOzyB9ReAdpW51FV4mHlQygPXGp+TtzG4=:
```

### Digest einer gzip-kodierten Repräsentation

In dieser Anfrage verwendet der Client den Header {{httpheader("Accept-Encoding")}}, um anzugeben, dass er gzip-Komprimierung akzeptiert:

```http
GET /items/123 HTTP/1.1
Host: example.com
Accept-Encoding: gzip
```

Die Serverantwort enthält den Header {{httpheader("Content-Encoding")}}. Dieser gibt an, dass die Nachrichtenbytes aus der gzip-Repräsentation der Ressource stammen.
Der Digest wird über die gzip-kodierten Bytes statt über den ursprünglichen, nicht kodierten Text berechnet.
Hier wird der 16 Byte lange JSON-Körper `{"hello": "mdn"}` zu einer 36 Byte langen Repräsentation gzip-komprimiert. `Content-Digest` und `Repr-Digest` werden über diese 36 Bytes berechnet (hier zur besseren Lesbarkeit hexadezimal dargestellt):

```http
HTTP/1.1 200 OK
Content-Type: application/json
Content-Encoding: gzip
Content-Length: 36
Content-Digest: sha-256=:6Gx6u1ZhhahDLs06Zc6ZEqXxUy8RNjy18CaMucjKOFk=:
Repr-Digest: sha-256=:6Gx6u1ZhhahDLs06Zc6ZEqXxUy8RNjy18CaMucjKOFk=:
1F 8B 08 00 00 00 00 00 02 FF AB 56 CA 48 CD C9 C9 57 B2 52 50 CA 4D C9 53 AA 05 00 35 D8 1D 91 10 00 00 00
```

### Umgang mit Content-Digest bei fehlendem Inhalt

Wenn dieselbe Ressource mit der Methode {{HTTPMethod("HEAD")}} statt mit {{HTTPMethod("GET")}} angefordert wird, enthält die Antwort keinen Inhalt:

```http
HEAD /items/123 HTTP/1.1
Host: example.com
```

Der Wert von `Repr-Digest` ist derselbe wie zuvor, da er sich immer auf die vollständige Repräsentation `{"hello": "mdn"}` bezieht.
Der Server sendet jedoch keinen Inhalt in der Antwort und kann den Header `Content-Digest` weglassen:

```http
HTTP/1.1 200 OK
Content-Type: application/json
Repr-Digest: sha-256=:bMGjiT1wkArOzyB9ReAdpW51FV4mHlQygPXGp+TtzG4=:
```

Statt `Content-Digest` bei fehlendem Inhalt wegzulassen, kann ein Server den Wert ausdrücklich über eine leere Zeichenfolge berechnen.
Gemäß [Abschnitt 6.3 von RFC 9530](https://www.rfc-editor.org/info/rfc9530/#section-6.3) können Empfänger damit überprüfen, dass kein Inhalt hinzugefügt oder entfernt wurde, statt lediglich festzustellen, dass der Header fehlt. Dies ist besonders dann relevant, wenn der Digest durch eine HTTP-Nachrichtensignatur abgedeckt ist:

```http
HTTP/1.1 200 OK
Content-Type: application/json
Content-Digest: sha-256=:47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=:
Repr-Digest: sha-256=:bMGjiT1wkArOzyB9ReAdpW51FV4mHlQygPXGp+TtzG4=:
```

### User-Agent sendet Digests in Anfragen

Im folgenden Beispiel sendet ein User-Agent einen mit SHA-512 berechneten Digest des Nachrichteninhalts.
Der Digest wird über die exakten Bytes des Nachrichtenkörpers `{"recipient":"Alex","amount":900000000}` berechnet (39 Bytes, ausdrücklich ohne abschließenden Zeilenumbruch).
Da die gesamte Repräsentation in dieser einen Anfrage gesendet wird, haben `Content-Digest` und `Repr-Digest` denselben Wert:

```http
POST /bank_transfer HTTP/1.1
Host: example.com
Content-Type: application/json
Content-Length: 39
Content-Digest: sha-512=:PlrIZYU3M76B30wGsL0h6O79BoxHTdAG+RnMPjOyECTSJCN/KnYdOrSCCWjxV3ckkyvdRmZ52//M3WbehCXcPw==:
Repr-Digest: sha-512=:PlrIZYU3M76B30wGsL0h6O79BoxHTdAG+RnMPjOyECTSJCN/KnYdOrSCCWjxV3ckkyvdRmZ52//M3WbehCXcPw==:

{"recipient":"Alex","amount":900000000}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Für diesen Header ist keine Browser-Integration spezifiziert („Browser-Kompatibilität“ ist daher nicht anwendbar).
Entwickler können mit `fetch()` HTTP-Header setzen und auslesen, um anwendungsspezifisches Verhalten zu implementieren.

## Siehe auch

- {{HTTPHeader("Want-Content-Digest")}}-Header zum Anfordern eines Content-Digests
- {{HTTPHeader("Repr-Digest")}} und {{HTTPHeader("Want-Repr-Digest")}}: Header für Repräsentations-Digests
- {{HTTPHeader("ETag")}}
- Der SDK-Leitfaden [Digital Signatures for APIs](https://developer.ebay.com/develop/guides/sell/digital-signatures-for-apis) beschreibt die Verwendung von `Content-Digest` für digitale Signaturen in HTTP-Aufrufen (developer.ebay.com)
