---
title: Content-Digest header
short-title: Content-Digest
slug: Web/HTTP/Reference/Headers/Content-Digest
l10n:
  sourceCommit: e5a63f8d002dcac9654be79bd03bfda262dd4d89
---

Der HTTP-**`Content-Digest`**-{{Glossary("request_header", "Anforderungsheader")}} und {{Glossary("response_header", "Antwortheader")}} liefert einen {{Glossary("hash_function", "Digest")}}, der mit einem Hashing-Algorithmus auf den Nachrichteninhalt angewendet wird. Ein Empfänger kann den `Content-Digest` verwenden, um den HTTP-Nachrichteninhalt zu Validierungszwecken auf Integrität zu überprüfen.

Das {{HTTPHeader("Want-Content-Digest")}}-Feld ermöglicht es einem Absender, einen `Content-Digest` zusammen mit seinen bevorzugten Hashing-Algorithmen anzufordern. Ein Inhaltsdigest unterscheidet sich basierend auf {{HTTPHeader("Content-Encoding")}} und {{HTTPHeader("Content-Range")}}, aber nicht auf {{HTTPHeader("Transfer-Encoding")}}.

In bestimmten Fällen kann ein {{HTTPHeader("Repr-Digest")}} verwendet werden, um die Integrität von Teil- oder Mehrteilnachrichten mit der vollständigen Darstellung zu überprüfen. Zum Beispiel bei [Bereichsanfragen](/de/docs/Web/HTTP/Guides/Range_requests) hat ein `Repr-Digest` immer denselben Wert, wenn sich nur die angeforderten Byte-Bereiche unterscheiden, während der Inhaltsdigest für jeden Teil unterschiedlich ist. Aus diesem Grund ist ein `Content-Digest` identisch mit einem {{HTTPHeader("Repr-Digest")}}, wenn eine Darstellung in einer einzigen Nachricht gesendet wird.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Anforderungsheader")}}, {{Glossary("Response_header", "Antwortheader")}}, {{Glossary("Representation_header", "Darstellungsheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungsheader")}}</th>
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

`Content-Digest` ist ein _strukturiertes Feldwörterbuch_ ({{rfc("9651","Structured Field Values for HTTP")}}), dessen Schlüssel `<digest-algorithm>` und Werte `<digest-value>` sind.

## Direktiven

- `<digest-algorithm>`
  - : Der Algorithmus, der verwendet wird, um einen Digest des Nachrichteninhalts zu erstellen. Nur zwei registrierte Digest-Algorithmen gelten als sicher: `sha-512` und `sha-256`. Die unsicheren (veralteten) registrierten Digest-Algorithmen sind: `md5`, `sha` (SHA-1), `unixsum`, `unixcksum`, `adler` (ADLER32) und `crc32c`.
- `<digest-value>`
  - : Der Digest des Nachrichteninhalts unter Verwendung des `<digest-algorithm>`, {{Glossary("base64", "base64")}}-codiert und in Doppelpunkten (`:`, ASCII 0x3A) eingeschlossen. Diese Codierung wird in der Spezifikation als [Byte Sequence](https://www.rfc-editor.org/info/rfc9651/#name-byte-sequences) bezeichnet.

## Beispiele

In allen Beispielen sind Endpunkte so konfiguriert, dass sie nicht angeforderte Digest-Header senden. Die {{HTTPHeader("Want-Content-Digest")}}- und {{HTTPHeader("Want-Repr-Digest")}}-Felder könnten optional von einem Absender verwendet werden, um einen `Content-Digest` oder `Repr-Digest` zusammen mit ihren bevorzugten Hashing-Algorithmen anzufordern.

### Ein SHA-256 Content-Digest in einer Antwort

Ein User-Agent fordert eine Ressource an:

```http
GET /items/123 HTTP/1.1
Host: example.com
```

Der Server antwortet mit einem `Content-Digest` des Nachrichteninhalts unter Verwendung des SHA-256-Algorithmus. Der Digest wird über die exakten Bytes des Nachrichtenkörpers berechnet, `{"hello": "mdn"}` (16 Bytes, explizit ohne nachgesetzten Zeilenumbruch):

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

Der Server antwortet mit einem `Content-Digest` und `Repr-Digest` des Nachrichteninhalts unter Verwendung des SHA-256-Algorithmus. Die `Repr-Digest`- und `Content-Digest`-Felder haben übereinstimmende Werte, da sie mit demselben Algorithmus über dieselben Bytes berechnet werden, `{"hello": "mdn"}` (16 Bytes), und in diesem Fall die gesamte Darstellung in einer Nachricht gesendet wird:

```http
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: 16
Content-Digest: sha-256=:bMGjiT1wkArOzyB9ReAdpW51FV4mHlQygPXGp+TtzG4=:
Repr-Digest: sha-256=:bMGjiT1wkArOzyB9ReAdpW51FV4mHlQygPXGp+TtzG4=:

{"hello": "mdn"}
```

### Abweichende Content-Digest- und Repr-Digest-Werte

Ein User-Agent fordert nur einen Teil einer Ressource mit einer [Bereichsanfrage](/de/docs/Web/HTTP/Guides/Range_requests) an:

```http
GET /items/123 HTTP/1.1
Host: example.com
Range: bytes=0-7
```

Der Server gibt eine {{HTTPStatus("206", "206 Partial Content")}}-Antwort zurück, die nur die angeforderten Bytes, `{"hello"` (8 Bytes), als Nachrichteninhalt enthält. `Content-Digest` deckt nur diese Bytes ab, während `Repr-Digest` weiterhin die gesamte Darstellung, `{"hello": "mdn"}` (16 Bytes), abdeckt, sodass sich die beiden Werte unterscheiden:

```http
HTTP/1.1 206 Partial Content
Content-Type: application/json
Content-Range: bytes 0-7/16
Content-Digest: sha-256=:pKQv0IAKChzGfyfxu5TNqcnvxIzaG4XICf6NQnB1YhY=:
Repr-Digest: sha-256=:bMGjiT1wkArOzyB9ReAdpW51FV4mHlQygPXGp+TtzG4=:
```

### Digest einer gzip-codierten Darstellung

In dieser Anfrage verwendet der Client den {{httpheader("Accept-Encoding")}}-Header, um anzugeben, dass er gzip-Komprimierung akzeptiert:

```http
GET /items/123 HTTP/1.1
Host: example.com
Accept-Encoding: gzip
```

Die Serverantwort enthält den {{httpheader("Content-Encoding")}}-Header, der angibt, dass die Nachrichtenbytes von der gzip-Darstellung der Ressource stammen. Der Digest wird über die gzip-codierten Bytes und nicht über den ursprünglichen unkodierten Text berechnet. Hierbei wird der 16-Byte-JSON-Körper `{"hello": "mdn"}` auf eine 36-Byte-Darstellung gzip-komprimiert, und `Content-Digest` und `Repr-Digest` werden über diese 36 Bytes berechnet (hier als Hex dargestellt, um die Lesbarkeit zu verbessern):

```http
HTTP/1.1 200 OK
Content-Type: application/json
Content-Encoding: gzip
Content-Length: 36
Content-Digest: sha-256=:6Gx6u1ZhhahDLs06Zc6ZEqXxUy8RNjy18CaMucjKOFk=:
Repr-Digest: sha-256=:6Gx6u1ZhhahDLs06Zc6ZEqXxUy8RNjy18CaMucjKOFk=:
1F 8B 08 00 00 00 00 00 02 FF AB 56 CA 48 CD C9 C9 57 B2 52 50 CA 4D C9 53 AA 05 00 35 D8 1D 91 10 00 00 00
```

### Content-Digest bei nicht vorhandenem Inhalt

Wenn die gleiche Ressource mit einer {{HTTPMethod("HEAD")}}-Methode anstelle einer {{HTTPMethod("GET")}} angefordert wird, hat die Antwort keinen Inhalt:

```http
HEAD /items/123 HTTP/1.1
Host: example.com
```

Der `Repr-Digest`-Wert ist derselbe wie zuvor, da er immer auf die vollständige Darstellung angewendet wird, `{"hello": "mdn"}`. Der Server sendet jedoch keinen Inhalt in der Antwort und kann den `Content-Digest`-Header weglassen:

```http
HTTP/1.1 200 OK
Content-Type: application/json
Repr-Digest: sha-256=:bMGjiT1wkArOzyB9ReAdpW51FV4mHlQygPXGp+TtzG4=:
```

Anstatt `Content-Digest` auszulassen, wenn kein Inhalt vorhanden ist, kann ein Server ihn explizit über einen leeren String berechnen. Gemäß [Abschnitt 6.3 von RFC 9530](https://www.rfc-editor.org/info/rfc9530/#section-6.3) ermöglicht dies einem Empfänger, insbesondere wenn der Digest von einer HTTP-Nachrichtensignatur abgedeckt ist, zu überprüfen, dass kein Inhalt hinzugefügt oder entfernt wurde, anstatt nur, dass der Header weggelassen wurde:

```http
HTTP/1.1 200 OK
Content-Type: application/json
Content-Digest: sha-256=:47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=:
Repr-Digest: sha-256=:bMGjiT1wkArOzyB9ReAdpW51FV4mHlQygPXGp+TtzG4=:
```

### User-Agent sendet Digests in Anfragen

Im folgenden Beispiel sendet ein User-Agent einen Digest des Nachrichteninhalts unter Verwendung von SHA-512. Der Digest wird über die exakten Bytes des Nachrichtenkörpers berechnet, `{"recipient":"Alex","amount":900000000}` (39 Bytes, explizit ohne nachgesetzten Zeilenumbruch). Da die gesamte Darstellung in dieser einzelnen Anfrage gesendet wird, haben `Content-Digest` und `Repr-Digest` denselben Wert:

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

Dieser Header hat keine speifikationsdefinierte Browser-Integration ("Browser-Kompatibilität" trifft nicht zu). Entwickler können HTTP-Header mit `fetch()` verwenden, um anwendungsspezifisches Implementierungsverhalten bereitzustellen.

## Siehe auch

- {{HTTPHeader("Want-Content-Digest")}}-Header, um einen Inhaltsdigest anzufordern
- {{HTTPHeader("Repr-Digest")}}, {{HTTPHeader("Want-Repr-Digest")}}-Darstellungsdigest-Header
- {{HTTPHeader("ETag")}}
- [Digitale Signaturen für APIs](https://developer.ebay.com/develop/guides/digital-signatures-for-apis) SDK-Leitfaden verwendet `Content-Digests` für digitale Signaturen in HTTP-Aufrufen (developer.ebay.com)
