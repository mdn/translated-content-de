---
title: Repr-Digest header
short-title: Repr-Digest
slug: Web/HTTP/Reference/Headers/Repr-Digest
l10n:
  sourceCommit: dd39d03a75c11908c2b62c7b20f7c2f87a83d78d
---

Der HTTP-**`Repr-Digest`**-{{Glossary("Request_header", "Request-")}} und {{Glossary("Response_header", "Response-Header")}} liefert einen {{Glossary("hash_function", "Digest")}} der ausgewählten Repräsentation der Zielressource. Er kann verwendet werden, um die Integrität der gesamten ausgewählten Repräsentation zu validieren, nachdem sie empfangen und rekonstruiert wurde.

Die _ausgewählte Repräsentation_ ist das spezifische Format einer Ressource, das durch [Inhaltsverhandlungen](/de/docs/Web/HTTP/Guides/Content_negotiation) ausgewählt wird. Details zur Repräsentation können aus {{Glossary("Representation_header", "Repräsentations-Headern")}}, wie {{HTTPHeader("Content-Language")}}, {{HTTPHeader("Content-Type")}} und {{HTTPHeader("Content-Encoding")}}, bestimmt werden.

Der Repräsentationsdigest bezieht sich auf die gesamte Repräsentation und nicht auf die Kodierung oder das Chunking der Nachrichten, die zum Senden verwendet werden. Ein {{HTTPHeader("Content-Digest")}} bezieht sich auf den Inhalt einer spezifischen Nachricht und hat unterschiedliche Werte basierend auf der {{HTTPHeader("Content-Encoding")}} und {{HTTPHeader("Content-Range")}} jeder Nachricht.

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
Repr-Digest: <digest-algorithm>=<digest-value>

// Multiple digest algorithms
Repr-Digest: <digest-algorithm>=<digest-value>,…,<digest-algorithmN>=<digest-valueN>
```

`Repr-Digest` ist ein _strukturiertes Feld-Dictionary_ ({{rfc("9651","Structured Field Values for HTTP")}}), dessen Schlüssel `<digest-algorithm>` und Werte `<digest-value>` sind.

## Anweisungen

- `<digest-algorithm>`
  - : Der Algorithmus, der verwendet wird, um einen Digest der Repräsentation zu erstellen. Nur zwei registrierte Digest-Algorithmen gelten als sicher: `sha-512` und `sha-256`. Die unsicheren (veralteten) registrierten Digest-Algorithmen sind: `md5`, `sha` (SHA-1), `unixsum`, `unixcksum`, `adler` (ADLER32) und `crc32c`.
- `<digest-value>`
  - : Der Digest der gesamten ausgewählten Repräsentationsdaten (siehe [Abschnitt 8.1 der HTTP-Semantik-Spezifikation](https://www.rfc-editor.org/rfc/rfc9110#section-8.1)) unter Verwendung des `<digest-algorithm>`, {{Glossary("base64", "base64")}}-kodiert und in Doppelpunkte (`:`, ASCII 0x3A) eingeschlossen. Diese Kodierung wird in der Spezifikation als [Byte-Folge](https://www.rfc-editor.org/info/rfc9651/#name-byte-sequences) bezeichnet.

## Beispiele

In allen Beispielen sind die Endpunkte so konfiguriert, dass sie unangekündigte Digest-Header senden. Die Felder {{HTTPHeader("Want-Content-Digest")}} und {{HTTPHeader("Want-Repr-Digest")}} könnten optional von einem Sender verwendet werden, um einen `Content-Digest` oder `Repr-Digest` zusammen mit ihren Hash-Algorithmus-Präferenzen anzufordern.

### Ein SHA-256 Repr-Digest in einer Antwort

Ein User-Agent fordert eine Ressource an:

```http
GET /items/123 HTTP/1.1
Host: example.com
```

Der Server antwortet mit einem `Repr-Digest` der Repräsentation unter Verwendung des SHA-256-Algorithmus. Der Digest wird über die exakten Bytes der Repräsentation berechnet, `{"hello": "mdn"}` (16 Bytes, explizit ohne nachfolgendem Zeilenumbruch):

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

Der Server antwortet mit einem `Content-Digest` und `Repr-Digest` des Nachrichteninhalts unter Verwendung des SHA-256-Algorithmus. Die Felder `Repr-Digest` und `Content-Digest` haben übereinstimmende Werte, da sie mit dem gleichen Algorithmus über die gleichen Bytes berechnet werden, `{"hello": "mdn"}` (16 Bytes), und in diesem Fall die gesamte Repräsentation in einer Nachricht gesendet wird:

```http
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: 16
Content-Digest: sha-256=:bMGjiT1wkArOzyB9ReAdpW51FV4mHlQygPXGp+TtzG4=:
Repr-Digest: sha-256=:bMGjiT1wkArOzyB9ReAdpW51FV4mHlQygPXGp+TtzG4=:

{"hello": "mdn"}
```

### Abweichende Content-Digest- und Repr-Digest-Werte

Ein User-Agent fordert nur einen Teil einer Ressource mithilfe eines [Range Requests](/de/docs/Web/HTTP/Guides/Range_requests) an:

```http
GET /items/123 HTTP/1.1
Host: example.com
Range: bytes=0-7
```

Der Server gibt eine {{HTTPStatus("206", "206 Partial Content")}}-Antwort zurück, die nur die angeforderten Bytes enthält, `{"hello"` (8 Bytes), als Nachrichteninhalt. `Content-Digest` bezieht sich nur auf diese Bytes, während `Repr-Digest` weiterhin die gesamte Repräsentation umfasst, `{"hello": "mdn"}` (16 Bytes), sodass die beiden Werte unterschiedlich sind:

```http
HTTP/1.1 206 Partial Content
Content-Type: application/json
Content-Range: bytes 0-7/16
Content-Digest: sha-256=:pKQv0IAKChzGfyfxu5TNqcnvxIzaG4XICf6NQnB1YhY=:
Repr-Digest: sha-256=:bMGjiT1wkArOzyB9ReAdpW51FV4mHlQygPXGp+TtzG4=:
```

### Digest einer gzip-kodierten Repräsentation

In dieser Anfrage verwendet der Client den {{httpheader("Accept-Encoding")}}-Header, um anzugeben, dass er Gzip-Komprimierung akzeptiert:

```http
GET /items/123 HTTP/1.1
Host: example.com
Accept-Encoding: gzip
```

Die Serverantwort enthält den {{httpheader("Content-Encoding")}}-Header, der angibt, dass die Nachrichten-Bytes von der Gzip-Repräsentation der Ressource stammen.

Der Digest wird über die Gzip-kodierten Bytes anstelle des ursprünglichen unkodierten Textes berechnet. Hier wird der 16-Byte-JSON-Körper `{"hello": "mdn"}` in eine 36-Byte-Repräsentation gzip-komprimiert, und `Content-Digest` und `Repr-Digest` werden über diese 36 Bytes berechnet (hier als Hex zur besseren Lesbarkeit dargestellt):

```http
HTTP/1.1 200 OK
Content-Type: application/json
Content-Encoding: gzip
Content-Length: 36
Content-Digest: sha-256=:6Gx6u1ZhhahDLs06Zc6ZEqXxUy8RNjy18CaMucjKOFk=:
Repr-Digest: sha-256=:6Gx6u1ZhhahDLs06Zc6ZEqXxUy8RNjy18CaMucjKOFk=:

1F 8B 08 00 00 00 00 00 02 FF AB 56 CA 48 CD C9 C9 57 B2 52 50 CA 4D C9 53 AA 05 00 35 D8 1D 91 10 00 00 00
```

### Repr-Digest-Handhabung ohne Inhalt

Wenn dieselbe Ressource mit der Methode {{HTTPMethod("HEAD")}} anstelle von {{HTTPMethod("GET")}} angefordert wird, hat die Antwort keinen Inhalt:

```http
HEAD /items/123 HTTP/1.1
Host: example.com
```

Der `Repr-Digest`-Wert ist derselbe wie zuvor, da er sich immer auf die vollständige Repräsentation bezieht, `{"hello": "mdn"}`. Der Server sendet jedoch keinen Inhalt in der Antwort und kann den `Content-Digest`-Header weglassen:

```http
HTTP/1.1 200 OK
Content-Type: application/json
Repr-Digest: sha-256=:bMGjiT1wkArOzyB9ReAdpW51FV4mHlQygPXGp+TtzG4=:
```

Anstatt `Content-Digest` wegzulassen, wenn kein Inhalt vorhanden ist, kann ein Server ihn explizit über eine leere Zeichenfolge berechnen. Laut [Abschnitt 6.3 von RFC 9530](https://www.rfc-editor.org/rfc/rfc9530.html#section-6.3) kann dies einem Empfänger, insbesondere wenn der Digest durch eine HTTP-Nachrichtensignatur abgedeckt ist, ermöglichen zu überprüfen, dass kein Inhalt hinzugefügt oder entfernt wurde, anstatt nur zu überprüfen, dass der Header weggelassen wurde:

```http
HTTP/1.1 200 OK
Content-Type: application/json
Content-Digest: sha-256=:47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=:
Repr-Digest: sha-256=:bMGjiT1wkArOzyB9ReAdpW51FV4mHlQygPXGp+TtzG4=:
```

### User-Agent sendet Digests in Anfragen

Im folgenden Beispiel sendet ein User-Agent einen Digest des Nachrichteninhalts unter Verwendung von SHA-512. Der Digest wird über die exakten Bytes des Nachrichtenkörpers berechnet, `{"recipient":"Alex","amount":900000000}` (39 Bytes, explizit ohne nachfolgendem Zeilenumbruch). Da die gesamte Repräsentation in dieser einzigen Anfrage gesendet wird, haben `Content-Digest` und `Repr-Digest` denselben Wert:

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

Dieser Header hat keine spezikationsdefinierte Browser-Integration ("Browser-Kompatibilität" gilt nicht). Entwickler können HTTP-Header mit `fetch()` setzen und abrufen, um anwendungsspezifisches Implementierungsverhalten bereitzustellen.

## Siehe auch

- {{HTTPHeader("Content-Digest")}}, {{HTTPHeader("Want-Content-Digest")}}, {{HTTPHeader("Want-Repr-Digest")}}
- {{HTTPHeader("ETag")}}
- {{HTTPHeader("Content-Encoding")}}
- [Digitale Signaturen für APIs](https://developer.ebay.com/develop/guides/digital-signatures-for-apis) SDK-Leitfaden verwendet `Content-Digest`s für digitale Signaturen in HTTP-Anrufen (developer.ebay.com)
