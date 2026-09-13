---
title: Repr-Digest header
short-title: Repr-Digest
slug: Web/HTTP/Reference/Headers/Repr-Digest
l10n:
  sourceCommit: e5a63f8d002dcac9654be79bd03bfda262dd4d89
---

Der HTTP **`Repr-Digest`** {{Glossary("Request_header", "Anfrage")}} und {{Glossary("Response_header", "Antwort-Header")}} stellt einen {{Glossary("hash_function", "Digest")}} der ausgewählten Repräsentation der Zielressource bereit.
Er kann verwendet werden, um die Integrität der gesamten ausgewählten Repräsentation zu validieren, sobald diese empfangen und rekonstruiert wurde.

Die _ausgewählte Repräsentation_ ist das spezifische Format einer Ressource, das durch [Inhaltsaushandlung](/de/docs/Web/HTTP/Guides/Content_negotiation) ausgewählt wurde.
Details zur Repräsentation können aus {{Glossary("Representation_header", "Repräsentations-Headern")}} ermittelt werden, wie {{HTTPHeader("Content-Language")}}, {{HTTPHeader("Content-Type")}} und {{HTTPHeader("Content-Encoding")}}.

Der Repräsentationsdigest bezieht sich auf die gesamte Repräsentation und nicht auf die Kodierung oder das Chunking der Nachrichten, die zu ihrer Übertragung verwendet werden.
Ein {{HTTPHeader("Content-Digest")}} bezieht sich auf den Inhalt einer bestimmten Nachricht und hat unterschiedliche Werte basierend auf der {{HTTPHeader("Content-Encoding")}} und {{HTTPHeader("Content-Range")}} jeder Nachricht.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Anfrage-Header")}}, {{Glossary("Response_header", "Antwort-Header")}}, {{Glossary("Representation_header", "Repräsentations-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anfrage-Header")}}</th>
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

`Repr-Digest` ist ein _strukturierter Felddictionary_ ({{rfc("9651","Structured Field Values for HTTP")}}), dessen Schlüssel `<digest-algorithm>` und Werte `<digest-value>` sind.

## Direktiven

- `<digest-algorithm>`
  - : Der Algorithmus, der verwendet wird, um einen Digest der Repräsentation zu erstellen.
    Nur zwei registrierte Digest-Algorithmen gelten als sicher: `sha-512` und `sha-256`.
    Die unsicheren (veralteten) registrierten Digest-Algorithmen sind: `md5`, `sha` (SHA-1), `unixsum`, `unixcksum`, `adler` (ADLER32) und `crc32c`.
- `<digest-value>`
  - : Der Digest der gesamten ausgewählten Repräsentationsdaten (siehe [Abschnitt 8.1 der HTTP-Semantik-Spezifikation](https://www.rfc-editor.org/info/rfc9110/#section-8.1)) unter Verwendung des `<digest-algorithm>`, {{Glossary("base64", "base64")}}-kodiert und in Doppelpunkte eingeschlossen (`:`, ASCII 0x3A). Diese Kodierung wird in der Spezifikation als [Byte-Sequenz](https://www.rfc-editor.org/info/rfc9651/#name-byte-sequences) bezeichnet.

## Beispiele

In allen Beispielen sind Endpunkte so konfiguriert, dass sie nicht angeforderte Digest-Header senden. Die Felder {{HTTPHeader("Want-Content-Digest")}} und {{HTTPHeader("Want-Repr-Digest")}} könnten optional von einem Absender verwendet werden, um einen `Content-Digest` oder `Repr-Digest` zusammen mit ihren Präferenzen für Hash-Algorithmen anzufordern.

### Ein SHA-256 Repr-Digest in einer Antwort

Ein User-Agent fordert eine Ressource an:

```http
GET /items/123 HTTP/1.1
Host: example.com
```

Der Server antwortet mit einem `Repr-Digest` der Repräsentation unter Verwendung des SHA-256-Algorithmus.
Der Digest wird über die exakten Bytes der Repräsentation berechnet, `{"hello": "mdn"}` (16 Bytes, ausdrücklich ohne nachfolgendes Zeilenende):

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

Der Server antwortet mit einem `Content-Digest` und `Repr-Digest` des Nachrichteninhalts unter Verwendung des SHA-256-Algorithmus.
Die `Repr-Digest`- und `Content-Digest`-Felder haben übereinstimmende Werte, da sie mit dem gleichen Algorithmus über die gleichen Bytes berechnet werden, `{"hello": "mdn"}` (16 Bytes), und in diesem Fall die gesamte Repräsentation in einer Nachricht gesendet wird:

```http
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: 16
Content-Digest: sha-256=:bMGjiT1wkArOzyB9ReAdpW51FV4mHlQygPXGp+TtzG4=:
Repr-Digest: sha-256=:bMGjiT1wkArOzyB9ReAdpW51FV4mHlQygPXGp+TtzG4=:

{"hello": "mdn"}
```

### Unterschiedliche Content-Digest- und Repr-Digest-Werte

Ein User-Agent fordert nur einen Teil einer Ressource durch eine [Bereichsanforderung](/de/docs/Web/HTTP/Guides/Range_requests) an:

```http
GET /items/123 HTTP/1.1
Host: example.com
Range: bytes=0-7
```

Der Server gibt eine {{HTTPStatus("206", "206 Partial Content")}}-Antwort zurück, die nur die angeforderten Bytes, `{"hello"` (8 Bytes), als Nachrichteninhalt enthält.
`Content-Digest` deckt nur diese Bytes ab, während `Repr-Digest` weiterhin die gesamte Repräsentation, `{"hello": "mdn"}` (16 Bytes), abdeckt, sodass sich die beiden Werte unterscheiden:

```http
HTTP/1.1 206 Partial Content
Content-Type: application/json
Content-Range: bytes 0-7/16
Content-Digest: sha-256=:pKQv0IAKChzGfyfxu5TNqcnvxIzaG4XICf6NQnB1YhY=:
Repr-Digest: sha-256=:bMGjiT1wkArOzyB9ReAdpW51FV4mHlQygPXGp+TtzG4=:
```

### Digest einer gzip-kodierten Repräsentation

In dieser Anfrage verwendet der Client den {{httpheader("Accept-Encoding")}}-Header, um anzuzeigen, dass er gzip-Komprimierung akzeptiert:

```http
GET /items/123 HTTP/1.1
Host: example.com
Accept-Encoding: gzip
```

Die Serverantwort enthält den {{httpheader("Content-Encoding")}}-Header, der anzeigt, dass die Nachrichtenbytes von der gzip-Repräsentation der Ressource stammen.

Der Digest wird über die gzip-kodierten Bytes anstelle des ursprünglichen unkodierten Textes berechnet.
Hier wird der 16-Byte-JSON-Körper `{"hello": "mdn"}` gzip-komprimiert zu einer 36-Byte-Repräsentation, und `Content-Digest` und `Repr-Digest` werden über diese 36 Bytes berechnet (hier in Hex zur besseren Lesbarkeit dargestellt):

```http
HTTP/1.1 200 OK
Content-Type: application/json
Content-Encoding: gzip
Content-Length: 36
Content-Digest: sha-256=:6Gx6u1ZhhahDLs06Zc6ZEqXxUy8RNjy18CaMucjKOFk=:
Repr-Digest: sha-256=:6Gx6u1ZhhahDLs06Zc6ZEqXxUy8RNjy18CaMucjKOFk=:

1F 8B 08 00 00 00 00 00 02 FF AB 56 CA 48 CD C9 C9 57 B2 52 50 CA 4D C9 53 AA 05 00 35 D8 1D 91 10 00 00 00
```

### Umgang mit Repr-Digest ohne Inhalt

Wenn dieselbe Ressource mit der {{HTTPMethod("HEAD")}}-Methode statt mit {{HTTPMethod("GET")}} angefordert wird, hat die Antwort keinen Inhalt:

```http
HEAD /items/123 HTTP/1.1
Host: example.com
```

Der `Repr-Digest`-Wert ist derselbe wie zuvor, da er immer für die vollständige Repräsentation gilt, `{"hello": "mdn"}`.
Der Server wird jedoch keinen Inhalt in der Antwort senden und kann den `Content-Digest`-Header weglassen:

```http
HTTP/1.1 200 OK
Content-Type: application/json
Repr-Digest: sha-256=:bMGjiT1wkArOzyB9ReAdpW51FV4mHlQygPXGp+TtzG4=:
```

Anstatt `Content-Digest` wegzulassen, wenn kein Inhalt vorhanden ist, kann ein Server diesen explizit über eine leere Zeichenfolge berechnen.
Gemäß [Abschnitt 6.3 von RFC 9530](https://www.rfc-editor.org/info/rfc9530/#section-6.3) ermöglicht dies einem Empfänger, insbesondere wenn der Digest durch eine HTTP-Nachrichtensignatur abgedeckt ist, zu überprüfen, dass kein Inhalt hinzugefügt oder entfernt wurde, anstatt nur, dass der Header weggelassen wurde:

```http
HTTP/1.1 200 OK
Content-Type: application/json
Content-Digest: sha-256=:47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=:
Repr-Digest: sha-256=:bMGjiT1wkArOzyB9ReAdpW51FV4mHlQygPXGp+TtzG4=:
```

### User-Agent, der Digests in Anfragen sendet

Im folgenden Beispiel sendet ein User-Agent einen Digest des Nachrichteninhalts unter Verwendung von SHA-512.
Der Digest wird über die exakten Bytes des Nachrichtenkörpers berechnet, `{"recipient":"Alex","amount":900000000}` (39 Bytes, ausdrücklich ohne nachfolgendes Zeilenende).
Da die gesamte Repräsentation in dieser einzigen Anfrage gesendet wird, haben `Content-Digest` und `Repr-Digest` denselben Wert:

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

Dieser Header hat keine spezifikationsdefinierte Browser-Integration ("Browser-Kompatibilität" gilt nicht).
Entwickler können HTTP-Header mit `fetch()` setzen und abrufen, um ein anwendungsspezifisches Implementierungsverhalten bereitzustellen.

## Siehe auch

- {{HTTPHeader("Content-Digest")}}, {{HTTPHeader("Want-Content-Digest")}}, {{HTTPHeader("Want-Repr-Digest")}}
- {{HTTPHeader("ETag")}}
- {{HTTPHeader("Content-Encoding")}}
- [Digitale Signaturen für APIs](https://developer.ebay.com/develop/guides/digital-signatures-for-apis) SDK-Leitfaden verwendet `Content-Digest`s für digitale Signaturen in HTTP-Aufrufen (developer.ebay.com)
