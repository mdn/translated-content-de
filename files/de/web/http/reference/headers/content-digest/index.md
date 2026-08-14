---
title: Content-Digest header
short-title: Content-Digest
slug: Web/HTTP/Reference/Headers/Content-Digest
l10n:
  sourceCommit: dd39d03a75c11908c2b62c7b20f7c2f87a83d78d
---

Der HTTP **`Content-Digest`** {{Glossary("request_header", "Request-")}} und {{Glossary("response_header", "Response-Header")}} bietet einen {{Glossary("hash_function", "Digest")}}, der mithilfe eines Hashing-Algorithmus auf den Nachrichteninhalt angewendet wird. Ein Empfänger kann den `Content-Digest` nutzen, um den HTTP-Nachrichteninhalt auf Integrität zu prüfen.

Das Feld {{HTTPHeader("Want-Content-Digest")}} ermöglicht es einem Sender, einen `Content-Digest` zusammen mit seinen bevorzugten Hashing-Algorithmen anzufordern. Ein Content-Digest unterscheidet sich je nach {{HTTPHeader("Content-Encoding")}} und {{HTTPHeader("Content-Range")}}, aber nicht nach {{HTTPHeader("Transfer-Encoding")}}.

In bestimmten Fällen kann ein {{HTTPHeader("Repr-Digest")}} verwendet werden, um die Integrität von Teil- oder Mehrfachnachrichten gegen die vollständige Darstellung zu prüfen. Zum Beispiel haben in [Range-Anfragen](/de/docs/Web/HTTP/Guides/Range_requests) `Repr-Digests` immer denselben Wert, wenn sich nur die angeforderten Byte-Bereiche unterscheiden, während der Content-Digest für jeden Teil unterschiedlich ist. Aus diesem Grund ist ein `Content-Digest` identisch mit einem {{HTTPHeader("Repr-Digest")}}, wenn eine Darstellung in einer einzigen Nachricht gesendet wird.

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
Content-Digest: <digest-algorithm>=<digest-value>

// Multiple digest algorithms
Content-Digest: <digest-algorithm>=<digest-value>,<digest-algorithm>=<digest-value>, …
```

`Content-Digest` ist ein _strukturierter Feld-Parameter_ ({{rfc("9651","Structured Field Values for HTTP")}}), dessen Schlüssel `<digest-algorithm>` und Werte `<digest-value>` sind.

## Direktiven

- `<digest-algorithm>`
  - : Der Algorithmus, der verwendet wird, um einen Digest des Nachrichteninhalts zu erstellen. Nur zwei registrierte Digest-Algorithmen gelten als sicher: `sha-512` und `sha-256`. Die unsicheren (veralteten) registrierten Digest-Algorithmen sind: `md5`, `sha` (SHA-1), `unixsum`, `unixcksum`, `adler` (ADLER32) und `crc32c`.
- `<digest-value>`
  - : Der Digest des Nachrichteninhalts unter Verwendung des `<digest-algorithm>`, {{Glossary("base64", "base64")}}-kodiert und in Doppelpunkte (`:`, ASCII 0x3A) eingeschlossen. Diese Kodierung wird in der Spezifikation als [Byte Sequence](https://www.rfc-editor.org/info/rfc9651/#name-byte-sequences) bezeichnet.

## Beispiele

In allen folgenden Beispielen sind Endpunkte so konfiguriert, dass sie unaufgefordert Digest-Header senden. Die Felder {{HTTPHeader("Want-Content-Digest")}} und {{HTTPHeader("Want-Repr-Digest")}} könnten optional von einem Sender verwendet werden, um einen `Content-Digest` oder `Repr-Digest` zusammen mit seinen bevorzugten Hashing-Algorithmen anzufordern.

### Ein SHA-256-Content-Digest in einer Antwort

Ein User-Agent fordert eine Ressource an:

```http
GET /items/123 HTTP/1.1
Host: example.com
```

Der Server antwortet mit einem `Content-Digest` des Nachrichteninhalts unter Verwendung des SHA-256-Algorithmus. Der Digest wird über die exakten Bytes des Nachrichtenkörpers berechnet, `{"hello": "mdn"}` (16 Bytes, ausdrücklich ohne einen folgenden Zeilenumbruch):

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

Der Server antwortet mit einem `Content-Digest` und `Repr-Digest` des Nachrichteninhalts unter Verwendung des SHA-256-Algorithmus. Die Felder `Repr-Digest` und `Content-Digest` haben übereinstimmende Werte, da sie mithilfe des gleichen Algorithmus über dieselben Bytes berechnet wurden, `{"hello": "mdn"}` (16 Bytes), und in diesem Fall wird die gesamte Darstellung in einer Nachricht gesendet:

```http
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: 16
Content-Digest: sha-256=:bMGjiT1wkArOzyB9ReAdpW51FV4mHlQygPXGp+TtzG4=:
Repr-Digest: sha-256=:bMGjiT1wkArOzyB9ReAdpW51FV4mHlQygPXGp+TtzG4=:

{"hello": "mdn"}
```

### Abweichende Content-Digest- und Repr-Digest-Werte

Ein User-Agent fordert nur einen Teil einer Ressource über eine [Range-Anfrage](/de/docs/Web/HTTP/Guides/Range_requests) an:

```http
GET /items/123 HTTP/1.1
Host: example.com
Range: bytes=0-7
```

Der Server gibt eine {{HTTPStatus("206", "206 Partial Content")}}-Antwort zurück, die nur die angeforderten Bytes, `{"hello"` (8 Bytes), als Nachrichteninhalt enthält. `Content-Digest` umfasst nur diese Bytes, während `Repr-Digest` weiterhin die gesamte Darstellung, `{"hello": "mdn"}` (16 Bytes), umfasst, sodass sich die beiden Werte unterscheiden:

```http
HTTP/1.1 206 Partial Content
Content-Type: application/json
Content-Range: bytes 0-7/16
Content-Digest: sha-256=:pKQv0IAKChzGfyfxu5TNqcnvxIzaG4XICf6NQnB1YhY=:
Repr-Digest: sha-256=:bMGjiT1wkArOzyB9ReAdpW51FV4mHlQygPXGp+TtzG4=:
```

### Digest einer gzip-kodierten Darstellung

In dieser Anfrage verwendet der Client den {{httpheader("Accept-Encoding")}}-Header, um anzugeben, dass er gzip-Komprimierung akzeptiert:

```http
GET /items/123 HTTP/1.1
Host: example.com
Accept-Encoding: gzip
```

Die Antwort des Servers enthält den {{httpheader("Content-Encoding")}}-Header, der angibt, dass die Nachrichtenbytes von der gzip-Darstellung der Ressource stammen. Der Digest wird über die gzip-kodierten Bytes statt über den ursprünglichen unkorrigierten Text berechnet. Hier wird der 16-Byte-JSON-Körper `{"hello": "mdn"}` zu einer 36-Byte-Darstellung gzip-komprimiert, und `Content-Digest` und `Repr-Digest` werden über diese 36 Bytes berechnet (hier zur besseren Lesbarkeit in Hex dargestellt):

```http
HTTP/1.1 200 OK
Content-Type: application/json
Content-Encoding: gzip
Content-Length: 36
Content-Digest: sha-256=:6Gx6u1ZhhahDLs06Zc6ZEqXxUy8RNjy18CaMucjKOFk=:
Repr-Digest: sha-256=:6Gx6u1ZhhahDLs06Zc6ZEqXxUy8RNjy18CaMucjKOFk=:
1F 8B 08 00 00 00 00 00 02 FF AB 56 CA 48 CD C9 C9 57 B2 52 50 CA 4D C9 53 AA 05 00 35 D8 1D 91 10 00 00 00
```

### Content-Digest-Handhabung bei keinem Inhalt

Wenn dieselbe Ressource mit einer {{HTTPMethod("HEAD")}}-Methode statt einer {{HTTPMethod("GET")}} angefordert wird, hat die Antwort keinen Inhalt:

```http
HEAD /items/123 HTTP/1.1
Host: example.com
```

Der `Repr-Digest`-Wert ist derselbe wie zuvor, da er immer für die vollständige Darstellung gilt, `{"hello": "mdn"}`. Allerdings wird der Server keinen Inhalt in der Antwort senden und kann den `Content-Digest`-Header weglassen:

```http
HTTP/1.1 200 OK
Content-Type: application/json
Repr-Digest: sha-256=:bMGjiT1wkArOzyB9ReAdpW51FV4mHlQygPXGp+TtzG4=:
```

Statt den `Content-Digest` wegzulassen, wenn kein Inhalt vorhanden ist, kann ein Server ihn explizit über einen leeren String berechnen. Gemäß [Abschnitt 6.3 von RFC 9530](https://www.rfc-editor.org/rfc/rfc9530.html#section-6.3) können Empfänger, insbesondere wenn der Digest durch eine HTTP-Nachrichtensignatur abgedeckt ist, verifizieren, dass kein Inhalt hinzugefügt oder entfernt wurde, anstatt nur, dass der Header weggelassen wurde:

```http
HTTP/1.1 200 OK
Content-Type: application/json
Content-Digest: sha-256=:47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=:
Repr-Digest: sha-256=:bMGjiT1wkArOzyB9ReAdpW51FV4mHlQygPXGp+TtzG4=:
```

### User-Agent sendet Digests in Anfragen

Im folgenden Beispiel sendet ein User-Agent einen Digest des Nachrichteninhalts unter Verwendung von SHA-512. Der Digest wird über die exakten Bytes des Nachrichtenkörpers berechnet, `{"recipient":"Alex","amount":900000000}` (39 Bytes, ausdrücklich ohne einen folgenden Zeilenumbruch). Da die gesamte Darstellung in dieser einzelnen Anfrage gesendet wird, haben `Content-Digest` und `Repr-Digest` denselben Wert:

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

Dieser Header hat keine in der Spezifikation definierte Browser-Integration ("Browser-Kompatibilität" ist nicht anwendbar). Entwickler können HTTP-Header mit `fetch()` festlegen und abrufen, um anwendungsspezifisches Implementierungsverhalten bereitzustellen.

## Siehe auch

- {{HTTPHeader("Want-Content-Digest")}}-Header, um einen Content-Digest anzufordern
- {{HTTPHeader("Repr-Digest")}}, {{HTTPHeader("Want-Repr-Digest")}} Darstellung-Digest-Header
- {{HTTPHeader("ETag")}}
- [Digitale Signaturen für APIs](https://developer.ebay.com/develop/guides/digital-signatures-for-apis) SDK-Leitfaden verwendet `Content-Digest`s für digitale Signaturen in HTTP-Anrufen (developer.ebay.com)
