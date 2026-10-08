---
title: Repr-Digest header
short-title: Repr-Digest
slug: Web/HTTP/Reference/Headers/Repr-Digest
l10n:
  sourceCommit: f4174abd45aefde55b6d45144c57ec3c2dc037a1
---

Der HTTP-**`Repr-Digest`**-{{Glossary("Request_header", "Request-Header")}} und {{Glossary("Response_header", "Response-Header")}} stellt einen {{Glossary("hash_function", "Digest")}} der ausgewählten Repräsentation der Zielressource bereit.
Damit lässt sich die Integrität der gesamten ausgewählten Repräsentation überprüfen, nachdem sie empfangen und rekonstruiert wurde.

Die _ausgewählte Repräsentation_ ist das spezifische Format einer Ressource, das durch [Content Negotiation](/de/docs/Web/HTTP/Guides/Content_negotiation) ausgewählt wurde.
Details zur Repräsentation lassen sich aus {{Glossary("Representation_header", "Representation-Headern")}} wie {{HTTPHeader("Content-Language")}}, {{HTTPHeader("Content-Type")}} und {{HTTPHeader("Content-Encoding")}} ermitteln.

Der Repräsentations-Digest bezieht sich auf die gesamte Repräsentation und nicht auf die Kodierung oder Aufteilung der Nachrichten, mit denen sie übertragen wird.
Ein {{HTTPHeader("Content-Digest")}} bezieht sich auf den Inhalt einer bestimmten Nachricht und hat je nach {{HTTPHeader("Content-Encoding")}} und {{HTTPHeader("Content-Range")}} der jeweiligen Nachricht unterschiedliche Werte.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Request-Header")}}, {{Glossary("Response_header", "Response-Header")}}, {{Glossary("Representation_header", "Representation-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Request-Header")}}</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Repr-Digest: <digest-algorithm>=<digest-value>

// Multiple digest algorithms
Repr-Digest: <digest-algorithm>=<digest-value>,…,<digest-algorithmN>=<digest-valueN>
```

`Repr-Digest` ist ein _Structured Field Dictionary_ ({{rfc("9651","Structured Field Values for HTTP")}}), dessen Schlüssel `<digest-algorithm>` und dessen Werte `<digest-value>` sind.

## Direktiven

- `<digest-algorithm>`
  - : Der Algorithmus, mit dem ein Digest der Repräsentation erstellt wird.
    Nur zwei registrierte Digest-Algorithmen gelten als sicher: `sha-512` und `sha-256`.
    Die registrierten unsicheren (veralteten) Digest-Algorithmen sind: `md5`, `sha` (SHA-1), `unixsum`, `unixcksum`, `adler` (ADLER32) und `crc32c`.
- `<digest-value>`
  - : Der Digest der gesamten Daten der ausgewählten Repräsentation (siehe [Abschnitt 8.1 der HTTP-Semantik-Spezifikation](https://www.rfc-editor.org/info/rfc9110/#section-8.1)), berechnet mit `<digest-algorithm>`, {{Glossary("base64", "base64")}}-kodiert und in Doppelpunkte (`:`, ASCII 0x3A) eingeschlossen. Diese Kodierung wird in der Spezifikation als [Byte-Sequenz](https://www.rfc-editor.org/info/rfc9651/#name-byte-sequences) bezeichnet.

## Beispiele

In allen Beispielen sind die Endpunkte so konfiguriert, dass sie Digest-Header ohne vorherige Anforderung senden. Ein Sender könnte optional die Felder {{HTTPHeader("Want-Content-Digest")}} und {{HTTPHeader("Want-Repr-Digest")}} verwenden, um einen `Content-Digest` oder `Repr-Digest` anzufordern und dabei bevorzugte Hash-Algorithmen anzugeben.

### Ein SHA-256-Repr-Digest in einer Antwort

Ein User-Agent fordert eine Ressource an:

```http
GET /items/123 HTTP/1.1
Host: example.com
```

Der Server antwortet mit einem `Repr-Digest` der Repräsentation, der mit dem SHA-256-Algorithmus berechnet wurde.
Der Digest wird über die exakten Bytes der Repräsentation berechnet, `{"hello": "mdn"}` (16 Bytes, ausdrücklich ohne einen abschließenden Zeilenumbruch):

```http
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: 16
Repr-Digest: sha-256=:bMGjiT1wkArOzyB9ReAdpW51FV4mHlQygPXGp+TtzG4=:

{"hello": "mdn"}
```

### Identische Content-Digest- und Repr-Digest-Werte

Ein User-Agent fordert eine Ressource an:

```http
GET /items/123 HTTP/1.1
Host: example.com
```

Der Server antwortet mit einem `Content-Digest` und einem `Repr-Digest`, die mit dem SHA-256-Algorithmus berechnet wurden.
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

Ein User-Agent fordert mithilfe einer [Bereichsanfrage](/de/docs/Web/HTTP/Guides/Range_requests) nur einen Teil einer Ressource an:

```http
GET /items/123 HTTP/1.1
Host: example.com
Range: bytes=0-7
```

Der Server gibt eine {{HTTPStatus("206", "206 Partial Content")}}-Antwort zurück, deren Nachrichteninhalt nur die angeforderten Bytes, `{"hello"` (8 Bytes), enthält.
`Content-Digest` deckt nur diese Bytes ab, während sich `Repr-Digest` weiterhin auf die gesamte Repräsentation, `{"hello": "mdn"}` (16 Bytes), bezieht. Daher unterscheiden sich die beiden Werte:

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

Die Serverantwort enthält den Header {{httpheader("Content-Encoding")}}, der angibt, dass die Bytes der Nachricht aus der gzip-kodierten Repräsentation der Ressource stammen.

Der Digest wird über die gzip-kodierten Bytes statt über den ursprünglichen, unkodierten Text berechnet.
Hier wird der 16 Byte lange JSON-Body `{"hello": "mdn"}` zu einer 36 Byte langen Repräsentation gzip-komprimiert. `Content-Digest` und `Repr-Digest` werden über diese 36 Bytes berechnet (hier zur besseren Lesbarkeit hexadezimal dargestellt):

```http
HTTP/1.1 200 OK
Content-Type: application/json
Content-Encoding: gzip
Content-Length: 36
Content-Digest: sha-256=:6Gx6u1ZhhahDLs06Zc6ZEqXxUy8RNjy18CaMucjKOFk=:
Repr-Digest: sha-256=:6Gx6u1ZhhahDLs06Zc6ZEqXxUy8RNjy18CaMucjKOFk=:

1F 8B 08 00 00 00 00 00 02 FF AB 56 CA 48 CD C9 C9 57 B2 52 50 CA 4D C9 53 AA 05 00 35 D8 1D 91 10 00 00 00
```

### Behandlung von Antworten ohne Inhalt durch Repr-Digest

Wird dieselbe Ressource mit der Methode {{HTTPMethod("HEAD")}} statt mit {{HTTPMethod("GET")}} angefordert, hat die Antwort keinen Inhalt:

```http
HEAD /items/123 HTTP/1.1
Host: example.com
```

Der Wert von `Repr-Digest` ist derselbe wie zuvor, da er sich immer auf die vollständige Repräsentation, `{"hello": "mdn"}`, bezieht.
Der Server sendet jedoch keinen Inhalt in der Antwort und kann den Header `Content-Digest` weglassen:

```http
HTTP/1.1 200 OK
Content-Type: application/json
Repr-Digest: sha-256=:bMGjiT1wkArOzyB9ReAdpW51FV4mHlQygPXGp+TtzG4=:
```

Statt `Content-Digest` bei fehlendem Inhalt wegzulassen, kann ein Server ihn ausdrücklich über eine leere Zeichenfolge berechnen.
Gemäß [Abschnitt 6.3 von RFC 9530](https://www.rfc-editor.org/info/rfc9530/#section-6.3) kann ein Empfänger damit insbesondere dann, wenn der Digest durch eine HTTP-Nachrichtensignatur abgedeckt ist, überprüfen, dass kein Inhalt hinzugefügt oder entfernt wurde – und nicht nur, dass der Header weggelassen wurde:

```http
HTTP/1.1 200 OK
Content-Type: application/json
Content-Digest: sha-256=:47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=:
Repr-Digest: sha-256=:bMGjiT1wkArOzyB9ReAdpW51FV4mHlQygPXGp+TtzG4=:
```

### Senden von Digests in Anfragen durch einen User-Agent

Im folgenden Beispiel sendet ein User-Agent einen Digest des Nachrichteninhalts, der mit SHA-512 berechnet wurde.
Der Digest wird über die exakten Bytes des Nachrichten-Bodys berechnet, `{"recipient":"Alex","amount":900000000}` (39 Bytes, ausdrücklich ohne einen abschließenden Zeilenumbruch).
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

Für diesen Header ist keine Browser-Integration durch eine Spezifikation festgelegt (eine „Browser-Kompatibilität“ ist daher nicht anwendbar).
Entwickler können HTTP-Header mit `fetch()` setzen und auslesen, um anwendungsspezifisches Verhalten zu implementieren.

## Siehe auch

- {{HTTPHeader("Content-Digest")}}, {{HTTPHeader("Want-Content-Digest")}}, {{HTTPHeader("Want-Repr-Digest")}}
- {{HTTPHeader("ETag")}}
- {{HTTPHeader("Content-Encoding")}}
- Der SDK-Leitfaden [Digital Signatures for APIs](https://developer.ebay.com/develop/guides/sell/digital-signatures-for-apis) verwendet `Content-Digest`-Werte für digitale Signaturen in HTTP-Aufrufen (developer.ebay.com)
