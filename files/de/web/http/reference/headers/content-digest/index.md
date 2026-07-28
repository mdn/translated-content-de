---
title: Content-Digest header
short-title: Content-Digest
slug: Web/HTTP/Reference/Headers/Content-Digest
l10n:
  sourceCommit: 7ed7b730bf88307cc6cf34b82bb1d735b9a1aa1f
---

Der HTTP **`Content-Digest`** {{Glossary("request_header", "Request-")}} und {{Glossary("response_header", "Response-Header")}} stellt einen {{Glossary("hash_function", "Digest")}} bereit, der unter Verwendung eines Hashing-Algorithmus berechnet wurde und auf den Nachrichteninhalt angewendet wird. Ein Empfänger kann den `Content-Digest` verwenden, um den Nachrichteninhalt auf Integrität zu überprüfen.

Das {{HTTPHeader("Want-Content-Digest")}}-Feld ermöglicht es einem Absender, einen `Content-Digest` zusammen mit seinen Präferenzen für Hashing-Algorithmen anzufordern. Ein Content-Digest wird sich in Abhängigkeit von {{HTTPHeader("Content-Encoding")}} und {{HTTPHeader("Content-Range")}} unterscheiden, aber nicht von {{HTTPHeader("Transfer-Encoding")}}.

In bestimmten Fällen kann ein {{HTTPHeader("Repr-Digest")}} verwendet werden, um die Integrität von partiellen oder Multipart-Nachrichten mit der vollständigen Repräsentation zu validieren. Zum Beispiel wird bei [Range Requests](/de/docs/Web/HTTP/Guides/Range_requests) ein `Repr-Digest` immer denselben Wert haben, wenn nur die angeforderten Byte-Bereiche unterschiedlich sind, während der Content-Digest für jeden Teil unterschiedlich sein wird. Aus diesem Grund ist ein `Content-Digest` identisch mit einem {{HTTPHeader("Repr-Digest")}}, wenn eine Repräsentation in einer einzigen Nachricht gesendet wird.

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

## Direktiven

- `<digest-algorithm>`
  - : Der Algorithmus, der verwendet wird, um einen Digest des Nachrichteninhalts zu erstellen. Nur zwei registrierte Digest-Algorithmen werden als sicher erachtet: `sha-512` und `sha-256`. Die unsicheren (veralteten) registrierten Digest-Algorithmen sind: `md5`, `sha` (SHA-1), `unixsum`, `unixcksum`, `adler` (ADLER32) und `crc32c`.
- `<digest-value>`
  - : Der Digest in Bytes des Nachrichteninhalts unter Verwendung des `<digest-algorithm>`. Die Wahl des Digest-Algorithmus bestimmt auch die zu verwendende Codierung: `sha-512` und `sha-256` verwenden {{Glossary("base64", "Base64")}}-Codierung, während einige veraltete Digest-Algorithmen wie `unixsum` einen dezimalen Integer verwenden. Im Gegensatz zu früheren Entwürfen der Spezifikation werden die standardmäßig base64-codierten Digest-Bytes in Doppelpunkte (`:`, ASCII 0x3A) eingeschlossen als Teil der [Dictionary-Syntax](https://www.rfc-editor.org/info/rfc8941/#name-byte-sequences).

## Beschreibung

Ein `Digest`-Header wurde in früheren Spezifikationen definiert, erwies sich jedoch als problematisch, da der Geltungsbereich dessen, worauf sich der Digest bezog, nicht klar war. Insbesondere war es schwierig zu unterscheiden, ob ein Digest auf die gesamte Repräsentation der Ressource oder auf den spezifischen Inhalt einer HTTP-Nachricht angewendet wurde. Deshalb wurden zwei separate Header spezifiziert (`Content-Digest` und `Repr-Digest`), um HTTP-Nachrichteninhalts-Digests und Ressourcenrepräsentations-Digests zu übermitteln.

## Beispiele

### User-Agent Anforderung für einen SHA-256 Content-Digest

Im folgenden Beispiel fordert ein User-Agent einen Digest des Nachrichteninhalts mit einer Präferenz für SHA-256, gefolgt von SHA-1 mit einer geringeren Präferenz an:

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

### Identische Content-Digest- und Repr-Digest-Werte

Ein User-Agent fordert eine Ressource ohne ein `Want-Content-Digest`-Feld an:

```http
GET /items/123 HTTP/1.1
Host: example.com
```

Der Server ist so konfiguriert, dass er unaufgefordert Digest-Header in Antworten sendet. Die `Repr-Digest`- und `Content-Digest`-Felder haben übereinstimmende Werte, da sie denselben Algorithmus verwenden und in diesem Fall die ganze Ressource in einer Nachricht gesendet wird:

```http
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: 19
Content-Digest: sha-256=:RK/0qy18MlBSVnWgjwz6lZEWjP/lF5HF9bvEF8FabDg=:
Repr-Digest: sha-256=:RK/0qy18MlBSVnWgjwz6lZEWjP/lF5HF9bvEF8FabDg=:

{"hello": "world"}
```

### Auseinandergehende Content-Digest- und Repr-Digest-Werte

Wenn dieselbe Anforderung wie im vorherigen Beispiel wiederholt wird, jedoch die {{HTTPMethod("HEAD")}}-Methode anstelle von {{HTTPMethod("GET")}} verwendet wird, werden die `Repr-Digest`- und `Content-Digest`-Felder unterschiedlich sein:

```http
GET /items/123 HTTP/1.1
Host: example.com
```

Der `Repr-Digest`-Wert wird derselbe sein wie zuvor, aber es gibt keinen Nachrichtenkörper, sodass der Server einen anderen `Content-Digest` senden würde:

```http
HTTP/1.1 200 OK
Content-Type: application/json
Content-Digest: sha-256=:47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=:
Repr-Digest: sha-256=:RK/0qy18MlBSVnWgjwz6lZEWjP/lF5HF9bvEF8FabDg=:
```

### User-Agent sendet einen Content-Digest in Anfragen

Im folgenden Beispiel sendet ein User-Agent einen Digest des Nachrichteninhalts unter Verwendung von SHA-512. Er sendet sowohl einen `Content-Digest` als auch einen `Repr-Digest`, die sich voneinander unterscheiden, aufgrund des `Content-Encoding`:

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

Der Server kann einen Digest des erhaltenen Inhalts berechnen und das Ergebnis mit den `Content-Digest`- oder `Repr-Digest`-Headern vergleichen, um die Nachrichtenintegrität zu validieren. In Anfragen wie dem obigen Beispiel ist der `Repr-Digest` für den Server nützlicher, da dieser über die dekodierte Repräsentation berechnet wird und in verschiedenen Szenarien konsistenter wäre.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Für diesen Header ist keine spezifikationsdefinierte Browser-Integration gegeben ("Browser-Kompatibilität" gilt nicht). Entwickler können HTTP-Header mit `fetch()` setzen und abrufen, um anwendungsspezifisches Implementierungsverhalten bereitzustellen.

## Siehe auch

- {{HTTPHeader("Want-Content-Digest")}} Header zur Anforderung eines Content-Digest
- {{HTTPHeader("Repr-Digest")}}, {{HTTPHeader("Want-Repr-Digest")}} Repräsentations-Digest-Header
- {{HTTPHeader("ETag")}}
- [Digitale Signaturen für APIs](https://developer.ebay.com/develop/guides/digital-signatures-for-apis) SDK-Leitfaden verwendet `Content-Digest`s für digitale Signaturen in HTTP-Aufrufen (developer.ebay.com)
