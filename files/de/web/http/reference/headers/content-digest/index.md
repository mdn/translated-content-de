---
title: Content-Digest header
short-title: Content-Digest
slug: Web/HTTP/Reference/Headers/Content-Digest
l10n:
  sourceCommit: 87ca9db1ebe56eb20c1f20b91fca43955d8f0e26
---

Der HTTP **`Content-Digest`** {{Glossary("request_header", "Request-")}} und {{Glossary("response_header", "Response-Header")}} bieten einen {{Glossary("hash_function", "Digest")}}, der durch einen Hashing-Algorithmus auf den Nachrichtentext angewendet wird. Ein Empfänger kann den `Content-Digest` verwenden, um den Inhalt der HTTP-Nachricht auf Integrität zu überprüfen.

Das {{HTTPHeader("Want-Content-Digest")}}-Feld ermöglicht es einem Absender, einen `Content-Digest` zusammen mit seinen bevorzugten Hashing-Algorithmen anzufordern. Ein Inhaltsdigest wird basierend auf {{HTTPHeader("Content-Encoding")}} und {{HTTPHeader("Content-Range")}}, aber nicht auf {{HTTPHeader("Transfer-Encoding")}} unterschiedlich sein.

In bestimmten Fällen kann ein {{HTTPHeader("Repr-Digest")}} verwendet werden, um die Integrität von Teil- oder Mehrteilnachrichten im Vergleich zur vollständigen Darstellung zu validieren. Beispielsweise hat bei [Bereichsabfragen](/de/docs/Web/HTTP/Guides/Range_requests) ein `Repr-Digest` immer denselben Wert, wenn sich nur die angeforderten Byte-Bereiche unterscheiden, während der Inhaltsdigest für jeden Teil unterschiedlich ist. Aus diesem Grund ist ein `Content-Digest` identisch mit einem {{HTTPHeader("Repr-Digest")}}, wenn eine Darstellung in einer einzigen Nachricht gesendet wird.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
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
  - : Der Algorithmus, der verwendet wird, um einen Digest des Nachrichtentextes zu erstellen. Nur zwei registrierte Digest-Algorithmen gelten als sicher: `sha-512` und `sha-256`. Die unsicheren (veralteten) registrierten Digest-Algorithmen sind: `md5`, `sha` (SHA-1), `unixsum`, `unixcksum`, `adler` (ADLER32) und `crc32c`.
- `<digest-value>`
  - : Der Digest in Bytes des Nachrichtentextes unter Verwendung des `<digest-algorithm>`. Die Wahl des Digest-Algorithmus bestimmt auch die zu verwendende Kodierung: `sha-512` und `sha-256` verwenden {{Glossary("base64", "base64")}}-Kodierung, während einige veraltete Digest-Algorithmen wie `unixsum` eine dezimale Ganzzahl verwenden. Im Gegensatz zu früheren Entwürfen der Spezifikation sind die standardmäßig base64-kodierten Digest-Bytes von Doppelpunkten umschlossen (`:`, ASCII 0x3A) als Teil der [Dictionary-Syntax](https://www.rfc-editor.org/info/rfc8941/#name-byte-sequences).

## Beschreibung

Ein `Digest`-Header wurde in früheren Spezifikationen definiert, erwies sich jedoch als problematisch, da der Umfang dessen, worauf sich der Digest bezieht, nicht klar war. Insbesondere war es schwierig zu unterscheiden, ob ein Digest auf die gesamte Ressourcenrepräsentation oder auf den spezifischen Inhalt einer HTTP-Nachricht angewendet wurde. Daher wurden zwei separate Header spezifiziert (`Content-Digest` und `Repr-Digest`), um HTTP-Nachrichteninhalts-Digests bzw. Ressourcenrepräsentations-Digests zu übermitteln.

## Beispiele

### Benutzeragent-Anfrage für einen SHA-256 Content-Digest

Im folgenden Beispiel fordert ein Benutzeragent einen Digest des Nachrichtentextes mit der Präferenz für SHA-256 an, gefolgt von SHA-1 mit geringerer Präferenz:

```http
GET /items/123 HTTP/1.1
Host: example.com
Want-Content-Digest: sha-256=10, sha=3
```

Der Server antwortet mit einem `Content-Digest` des Nachrichtentextes unter Verwendung des SHA-256-Algorithmus:

```http
HTTP/1.1 200 OK
Content-Type: application/json
Content-Digest: sha-256=:RK/0qy18MlBSVnWgjwz6lZEWjP/lF5HF9bvEF8FabDg=:

{"hello": "world"}
```

### Identische Content-Digest- und Repr-Digest-Werte

Ein Benutzeragent fordert eine Ressource ohne ein `Want-Content-Digest`-Feld an:

```http
GET /items/123 HTTP/1.1
Host: example.com
```

Der Server ist so konfiguriert, dass er unaufgeforderte Digest-Header in Antworten sendet. Die `Repr-Digest`- und `Content-Digest`-Felder haben übereinstimmende Werte, da sie denselben Algorithmus verwenden und in diesem Fall die gesamte Ressource in einer Nachricht gesendet wird:

```http
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: 19
Content-Digest: sha-256=:RK/0qy18MlBSVnWgjwz6lZEWjP/lF5HF9bvEF8FabDg=:
Repr-Digest: sha-256=:RK/0qy18MlBSVnWgjwz6lZEWjP/lF5HF9bvEF8FabDg=:

{"hello": "world"}
```

### Abweichende Content-Digest- und Repr-Digest-Werte

Wenn dieselbe Anfrage wie im vorherigen Beispiel wiederholt wird, jedoch eine {{HTTPMethod("HEAD")}}-Methode anstelle einer {{HTTPMethod("GET")}} verwendet wird, werden die `Repr-Digest`- und `Content-Digest`-Felder unterschiedlich sein:

```http
GET /items/123 HTTP/1.1
Host: example.com
```

Der `Repr-Digest`-Wert bleibt derselbe wie zuvor, aber es gibt keinen Nachrichtentext, sodass ein anderer `Content-Digest` vom Server gesendet wird:

```http
HTTP/1.1 200 OK
Content-Type: application/json
Content-Digest: sha-256=:47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=:
Repr-Digest: sha-256=:RK/0qy18MlBSVnWgjwz6lZEWjP/lF5HF9bvEF8FabDg=:
```

### Benutzeragent sendet einen Content-Digest in Anfragen

Im folgenden Beispiel sendet ein Benutzeragent einen Digest des Nachrichtentextes mit SHA-512. Er sendet sowohl einen `Content-Digest` als auch einen `Repr-Digest`, die sich aufgrund des `Content-Encoding` voneinander unterscheiden:

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

Der Server kann einen Digest des erhaltenen Inhalts berechnen und das Ergebnis mit den `Content-Digest`- oder `Repr-Digest`-Headern vergleichen, um die Nachrichtenintegration zu validieren. Bei Anfragen wie dem obigen Beispiel ist der `Repr-Digest` für den Server nützlicher, da dieser über die dekodierte Darstellung berechnet wird und in unterschiedlichen Szenarien konsistenter wäre.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Dieser Header hat keine spezifikationsdefinierte Browser-Integration ("Browser-Kompatibilität" ist nicht anwendbar). Entwickler können HTTP-Header über `fetch()` setzen und abrufen, um anwendungsspezifisches Implementierungsverhalten bereitzustellen.

## Siehe auch

- {{HTTPHeader("Want-Content-Digest")}}-Header, um einen Inhaltsdigest anzufordern
- {{HTTPHeader("Repr-Digest")}}, {{HTTPHeader("Want-Repr-Digest")}} Repräsentationsdigest-Header
- {{HTTPHeader("ETag")}}
- [Digitale Signaturen für APIs](https://developer.ebay.com/develop/guides/digital-signatures-for-apis) SDK-Leitfaden verwendet `Content-Digest`s für digitale Signaturen in HTTP-Aufrufen (developer.ebay.com)
