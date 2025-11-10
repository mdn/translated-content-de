---
title: Content-Digest header
short-title: Content-Digest
slug: Web/HTTP/Reference/Headers/Content-Digest
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Der HTTP-**`Content-Digest`**-{{Glossary("request_header", "Anforderungs")}} und {{Glossary("response_header", "Antwortheader")}} liefert einen mittels eines Hash-Algorithmus berechneten {{Glossary("hash_function", "Digest")}} des Nachrichteninhalts. Ein Empfänger kann den `Content-Digest` nutzen, um die Integrität des HTTP-Nachrichteninhalts zu überprüfen.

Das Feld {{HTTPHeader("Want-Content-Digest")}} ermöglicht es einem Absender, einen `Content-Digest` zusammen mit seinen Präferenzen für den Hash-Algorithmus anzufordern. Ein Content-Digest unterscheidet sich je nach {{HTTPHeader("Content-Encoding")}} und {{HTTPHeader("Content-Range")}}, nicht jedoch nach {{HTTPHeader("Transfer-Encoding")}}.

In bestimmten Fällen kann ein {{HTTPHeader("Repr-Digest")}} zur Validierung der Integrität von Teil- oder Multipart-Nachrichten mit der vollständigen Repräsentation genutzt werden. Zum Beispiel haben in [Range Requests](/de/docs/Web/HTTP/Guides/Range_requests) `Repr-Digest` und `Content-Digest` denselben Wert, wenn sich nur die angeforderten Bytebereiche unterscheiden, während sich der InhaltDigest für jeden Teil unterscheidet. Aus diesem Grund ist ein `Content-Digest` identisch mit einem {{HTTPHeader("Repr-Digest")}}, wenn eine Repräsentation in einer einzelnen Nachricht gesendet wird.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Anforderungsheader")}}, {{Glossary("Response_header", "Antwortheader")}}, {{Glossary("Representation_header", "Repräsentationsheader")}}</td>
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

## Direktiven

- `<digest-algorithm>`
  - : Der Algorithmus, der zum Erstellen eines Digests des Nachrichteninhalts verwendet wird. Nur zwei registrierte Digest-Algorithmen gelten als sicher: `sha-512` und `sha-256`. Die unsicheren (veralteten) registrierten Digest-Algorithmen sind: `md5`, `sha` (SHA-1), `unixsum`, `unixcksum`, `adler` (ADLER32) und `crc32c`.
- `<digest-value>`
  - : Der Digest in Bytes des Nachrichteninhalts unter Verwendung des `<digest-algorithm>`. Die Wahl des Digest-Algorithmus bestimmt auch die zu verwendende Kodierung: `sha-512` und `sha-256` verwenden {{Glossary("base64", "base64")}}-Kodierung, während einige veraltete Digest-Algorithmen wie `unixsum` eine dezimalen Ganzzahl verwenden. Im Gegensatz zu früheren Entwürfen der Spezifikation werden die standardmäßig base64-kodierten Digest-Bytes im Rahmen der [Dictionary-Syntax](https://www.rfc-editor.org/rfc/rfc8941#name-byte-sequences) in Doppelpunkte (`,`, ASCII 0x3A) eingeschlossen.

## Beschreibung

Ein `Digest`-Header wurde in früheren Spezifikationen definiert, erwies sich jedoch als problematisch, da der Anwendungsbereich des Digests nicht klar war. Es war besonders schwierig zu unterscheiden, ob sich ein Digest auf die gesamte Ressourcenrepräsentation oder auf den spezifischen Inhalt einer HTTP-Nachricht bezog. Daher wurden zwei separate Header spezifiziert (`Content-Digest` und `Repr-Digest`), um HTTP-Nachrichtendigest und Ressourcenrepräsentationsdigest zu nennen.

## Beispiele

### Benutzer-Agent-Anforderung für einen SHA-256 Content-Digest

Im folgenden Beispiel fordert ein Benutzer-Agent einen Digest des Nachrichteninhalts mit einer Präferenz für SHA-256, gefolgt von SHA-1 mit einer niedrigeren Präferenz an:

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

### Identische Werte für Content-Digest und Repr-Digest

Ein Benutzer-Agent fordert eine Ressource ohne ein `Want-Content-Digest`-Feld an:

```http
GET /items/123 HTTP/1.1
Host: example.com
```

Der Server ist so konfiguriert, dass er unaufgefordert Digest-Header in Antworten sendet. Die Felder `Repr-Digest` und `Content-Digest` haben übereinstimmende Werte, da sie denselben Algorithmus verwenden und in diesem Fall die gesamte Ressource in einer Nachricht gesendet wird:

```http
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: 19
Content-Digest: sha-256=:RK/0qy18MlBSVnWgjwz6lZEWjP/lF5HF9bvEF8FabDg=:
Repr-Digest: sha-256=:RK/0qy18MlBSVnWgjwz6lZEWjP/lF5HF9bvEF8FabDg=:

{"hello": "world"}
```

### Abweichende Werte für Content-Digest und Repr-Digest

Wenn dieselbe Anforderung wie im vorherigen Beispiel wiederholt wird, jedoch mit der Methode {{HTTPMethod("HEAD")}} anstelle von {{HTTPMethod("GET")}}, werden die Felder `Repr-Digest` und `Content-Digest` unterschiedlich sein:

```http
GET /items/123 HTTP/1.1
Host: example.com
```

Der Wert von `Repr-Digest` bleibt gleich wie zuvor, aber da kein Nachrichtentext vorhanden ist, würde der Server einen anderen `Content-Digest` senden:

```http
HTTP/1.1 200 OK
Content-Type: application/json
Content-Digest: sha-256=:47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=:
Repr-Digest: sha-256=:RK/0qy18MlBSVnWgjwz6lZEWjP/lF5HF9bvEF8FabDg=:
```

### Benutzer-Agent sendet einen Content-Digest in Anfragen

Im folgenden Beispiel sendet ein Benutzer-Agent einen Digest des Nachrichteninhalts unter Verwendung von SHA-512. Er sendet sowohl einen `Content-Digest` als auch einen `Repr-Digest`, die sich aufgrund der `Content-Encoding` unterscheiden:

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

Der Server kann einen Digest des empfangenen Inhalts berechnen und das Ergebnis mit den `Content-Digest`- oder `Repr-Digest`-Headern vergleichen, um die Nachrichtenintegrität zu überprüfen. Bei Anfragen wie im obigen Beispiel ist der `Repr-Digest` für den Server nützlicher, da dieser über die dekodierte Repräsentation berechnet wird und in verschiedenen Szenarien konsistenter wäre.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Dieser Header hat keine spezifikationsdefinierte Browser-Integration ("Browser-Kompatibilität" ist nicht anwendbar). Entwickler können HTTP-Header mit `fetch()` setzen und abrufen, um ein anwendungsspezifisches Implementierungsverhalten bereitzustellen.

## Siehe auch

- {{HTTPHeader("Want-Content-Digest")}}-Header zur Anforderung eines Content-Digests
- {{HTTPHeader("Repr-Digest")}}, {{HTTPHeader("Want-Repr-Digest")}} Repräsentationsdigest-Header
- {{HTTPHeader("ETag")}}
- [Digitale Signaturen für APIs](https://developer.ebay.com/develop/guides/digital-signatures-for-apis) SDK-Leitfaden verwendet `Content-Digest`s für digitale Signaturen in HTTP-Anfragen (developer.ebay.com)
