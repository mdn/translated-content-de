---
title: Content-Digest
slug: Web/HTTP/Reference/Headers/Content-Digest
l10n:
  sourceCommit: 7159a4c0a2f1e886c09268c41c103c4ac7100d63
---

{{HTTPSidebar}}

Der HTTP-Header **`Content-Digest`** {{Glossary("request_header", "Request-Header")}} und {{Glossary("response_header", "Response-Header")}} liefert einen {{Glossary("hash_function", "Digest")}}, der mit einem Hashing-Algorithmus berechnet wurde und auf den Nachrichteninhalt angewendet wird. Ein Empfänger kann den `Content-Digest` verwenden, um den HTTP-Nachrichteninhalt auf seine Integrität zu überprüfen.

Das {{HTTPHeader("Want-Content-Digest")}}-Feld ermöglicht es einem Absender, einen `Content-Digest` zusammen mit seinen bevorzugten Hashing-Algorithmen anzufordern. Ein Content-Digest wird auf Basis von {{HTTPHeader("Content-Encoding")}} und {{HTTPHeader("Content-Range")}} unterschiedlich ausfallen, nicht aber bei {{HTTPHeader("Transfer-Encoding")}}.

In bestimmten Fällen kann ein {{HTTPHeader("Repr-Digest")}} verwendet werden, um die Integrität von teilweise oder multipart zu übermittelnden Nachrichten mit der vollständigen Darstellung zu validieren. Beispielsweise wird bei [Bereichsanfragen](/de/docs/Web/HTTP/Guides/Range_requests) ein `Repr-Digest` immer denselben Wert haben, wenn sich nur die angeforderten Byteranges unterscheiden, während der Inhalt-Digest für jeden Teil unterschiedlich sein wird. Aus diesem Grund ist ein `Content-Digest` identisch mit einem {{HTTPHeader("Repr-Digest")}}, wenn eine Darstellung in einer einzigen Nachricht gesendet wird.

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

## Direktiven

- `<digest-algorithm>`
  - : Der Algorithmus, der verwendet wird, um einen Digest des Nachrichteninhalts zu erstellen. Nur zwei registrierte Digest-Algorithmen gelten als sicher: `sha-512` und `sha-256`. Die unsicheren (veralteten) registrierten Digest-Algorithmen sind: `md5`, `sha` (SHA-1), `unixsum`, `unixcksum`, `adler` (ADLER32) und `crc32c`.
- `<digest-value>`
  - : Der Digest in Bytes des Nachrichteninhalts unter Verwendung des `<digest-algorithm>`. Die Wahl des Digest-Algorithmus bestimmt auch die zu verwendende Codierung: `sha-512` und `sha-256` verwenden {{Glossary("base64", "base64")}}-Codierung, während einige veraltete Digest-Algorithmen wie `unixsum` eine dezimale Ganzzahl verwenden. Im Gegensatz zu früheren Entwürfen der Spezifikation werden die standardmäßig base64-codierten Digest-Bytes als Teil der [Wörterbuch-Syntax](https://www.rfc-editor.org/rfc/rfc8941#name-byte-sequences) in Doppelpunkte (`:`, ASCII 0x3A) eingeschlossen.

## Beschreibung

Ein `Digest`-Header wurde in früheren Spezifikationen definiert, erwies sich jedoch als problematisch, da der Umfang dessen, was der Digest betraf, nicht klar war. Insbesondere war es schwierig zu unterscheiden, ob ein Digest für die gesamte Ressourcen-Darstellung oder für den spezifischen Inhalt einer HTTP-Nachricht galt. Daher wurden zwei separate Header (`Content-Digest` und `Repr-Digest`) spezifiziert, um HTTP-Nachricht-Inhalts-Digests bzw. Ressourcen-Darstellungs-Digests zu übermitteln.

## Beispiele

### User-Agent-Anfrage für einen SHA-256 Content-Digest

Im folgenden Beispiel fordert ein User-Agent einen Digest des Nachrichteninhalts mit einer Präferenz für SHA-256 an, gefolgt von SHA-1 mit geringerer Präferenz:

```http
GET /items/123 HTTP/1.1
Host: example.com
Want-Content-Digest: sha-256=10, sha=3
```

Der Server antwortet mit einem `Content-Digest` des Nachrichteninhalts unter Verwendung des SHA-256-Algorithmus:

```http
HTTP/1.1 200 OK
Content-Type: application/json
Content-Digest: sha-256=:RK/0qy18MlBSVnWgjwz6lZEWjP/lF5HF9bvEF8FabDg=:

{"hello": "world"}
```

### Identische Content-Digest und Repr-Digest Werte

Ein User-Agent fordert eine Ressource ohne ein `Want-Content-Digest`-Feld an:

```http
GET /items/123 HTTP/1.1
Host: example.com
```

Der Server ist so konfiguriert, dass er unaufgefordert Digest-Header in Antworten sendet. Die `Repr-Digest`- und `Content-Digest`-Felder haben übereinstimmende Werte, da sie denselben Algorithmus verwenden und in diesem Fall die gesamte Ressource in einer Nachricht gesendet wird:

```http
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: 19
Content-Digest: sha-256=:RK/0qy18MlBSVnWgjwz6lZEWjP/lF5HF9bvEF8FabDg=:
Repr-Digest: sha-256=:RK/0qy18MlBSVnWgjwz6lZEWjP/lF5HF9bvEF8FabDg=:

{"hello": "world"}
```

### Auseinandergehende Content-Digest und Repr-Digest Werte

Wenn dieselbe Anfrage wie im vorherigen Beispiel wiederholt wird, jedoch die {{HTTPMethod("HEAD")}}-Methode anstelle von {{HTTPMethod("GET")}} verwendet wird, sind die `Repr-Digest`- und `Content-Digest`-Felder unterschiedlich:

```http
GET /items/123 HTTP/1.1
Host: example.com
```

Der `Repr-Digest`-Wert bleibt derselbe wie zuvor, aber es gibt keinen Nachrichtenkörper, sodass ein anderer `Content-Digest` vom Server gesendet wird:

```http
HTTP/1.1 200 OK
Content-Type: application/json
Content-Digest: sha-256=:47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=:
Repr-Digest: sha-256=:RK/0qy18MlBSVnWgjwz6lZEWjP/lF5HF9bvEF8FabDg=:
```

### User-Agent sendet einen Content-Digest in Anfragen

Im folgenden Beispiel sendet ein User-Agent einen Digest des Nachrichteninhalts unter Verwendung von SHA-512. Es sendet sowohl einen `Content-Digest` als auch einen `Repr-Digest`, die aufgrund des `Content-Encoding` voneinander abweichen:

```http
POST /bank_transfer HTTP/1.1
Host: example.com
Content-Encoding: zstd
Content-Digest: sha-512=:ABC…=:
Repr-Digest: sha-512=:DEF…=:

{
 "recipient": "Alex",
 "amount": 900000000
}
```

Der Server kann einen Digest des erhaltenen Inhalts berechnen und das Ergebnis mit den `Content-Digest`- oder `Repr-Digest`-Headern vergleichen, um die Nachrichtenintegrität zu überprüfen. Bei Anfragen wie dem obigen Beispiel ist der `Repr-Digest` für den Server nützlicher, da dieser über die dekodierte Darstellung berechnet wird und in verschiedenen Szenarien konsistenter wäre.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Dieser Header hat keine spezifikationsdefinierte Browser-Integration ("Browser-Kompatibilität" ist nicht zutreffend). Entwickler können HTTP-Header mit `fetch()` setzen und abrufen, um anwendungsspezifisches Implementierungsverhalten bereitzustellen.

## Siehe auch

- {{HTTPHeader("Want-Content-Digest")}}-Header zur Anforderung eines Inhalts-Digests
- {{HTTPHeader("Repr-Digest")}}, {{HTTPHeader("Want-Repr-Digest")}} Repräsentations-Digest-Header
- {{HTTPHeader("ETag")}}
- [Digitale Signaturen für APIs](https://developer.ebay.com/develop/guides/digital-signatures-for-apis) SDK-Leitfaden verwendet `Content-Digest`s für digitale Signaturen in HTTP-Anfragen (developer.ebay.com)
