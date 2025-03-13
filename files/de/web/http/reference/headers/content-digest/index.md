---
title: Content-Digest
slug: Web/HTTP/Reference/Headers/Content-Digest
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Der HTTP-Header **`Content-Digest`** {{Glossary("request_header", "Request-Header")}} und {{Glossary("response_header", "Response-Header")}} liefert einen {{Glossary("digest", "Digest")}}, der mithilfe eines Hash-Algorithmus aus dem Nachrichteninhalt berechnet wird.
Ein Empfänger kann den `Content-Digest` verwenden, um die Integrität des HTTP-Nachrichteninhalts zu validieren.

Das {{HTTPHeader("Want-Content-Digest")}}-Feld ermöglicht es einem Absender, einen `Content-Digest` zusammen mit seinen bevorzugten Hash-Algorithmen anzufordern.
Ein Content-Digest variiert je nach {{HTTPHeader("Content-Encoding")}} und {{HTTPHeader("Content-Range")}}, aber nicht nach {{HTTPHeader("Transfer-Encoding")}}.

In bestimmten Fällen kann ein {{HTTPHeader("Repr-Digest")}} verwendet werden, um die Integrität von Teil- oder Mehrfachnachrichten im Vergleich zur vollständigen Darstellung zu überprüfen.
Zum Beispiel wird in [Range-Anfragen](/de/docs/Web/HTTP/Guides/Range_requests) ein `Repr-Digest` immer denselben Wert haben, wenn sich nur die angeforderten Byte-Bereiche unterscheiden, während der Content-Digest für jeden Teil unterschiedlich ist.
Aus diesem Grund ist ein `Content-Digest` identisch mit einem {{HTTPHeader("Repr-Digest")}}, wenn eine Darstellung in einer einzigen Nachricht gesendet wird.

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
  - : Der Algorithmus, der verwendet wird, um einen Digest des Nachrichteninhalts zu erstellen.
    Nur zwei registrierte Digest-Algorithmen gelten als sicher: `sha-512` und `sha-256`.
    Die unsicheren (veralteten) registrierten Digest-Algorithmen sind: `md5`, `sha` (SHA-1), `unixsum`, `unixcksum`, `adler` (ADLER32) und `crc32c`.
- `<digest-value>`
  - : Der Digest in Bytes des Nachrichteninhalts unter Verwendung des `<digest-algorithm>`.
    Die Wahl des Digest-Algorithmus bestimmt auch die zu verwendende Kodierung: `sha-512` und `sha-256` verwenden {{Glossary("base64", "base64")}}-Kodierung, während einige veraltete Digest-Algorithmen wie `unixsum` eine dezimale Ganzzahl verwenden.
    Im Gegensatz zu früheren Entwürfen der Spezifikation sind die standardmäßig base64-kodierten Digest-Bytes in Doppelpunkten (`:`, ASCII 0x3A) als Teil der [Dictionary-Syntax](https://www.rfc-editor.org/rfc/rfc8941#name-byte-sequences) eingefasst.

## Beschreibung

Ein `Digest`-Header wurde in früheren Spezifikationen definiert, erwies sich jedoch als problematisch, da der Anwendungsbereich des Digests nicht klar war.
Insbesondere war es schwierig zu unterscheiden, ob sich ein Digest auf die gesamte Ressourcenrepräsentation oder auf den spezifischen Inhalt einer HTTP-Nachricht bezog.
Daher wurden zwei separate Header spezifiziert (`Content-Digest` und `Repr-Digest`), um HTTP-Nachrichteninhalts-Digests bzw. Ressourcenrepräsentations-Digests zu übermitteln.

## Beispiele

### User-Agent-Anfrage für einen SHA-256 Content-Digest

Im folgenden Beispiel fordert ein User-Agent einen Digest des Nachrichteninhalts mit Präferenz für SHA-256 an, gefolgt von SHA-1 mit einer geringeren Präferenz:

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

Der Server ist so konfiguriert, dass er unaufgefordert Header in Antworten sendet.
Die `Repr-Digest`- und `Content-Digest`-Felder haben übereinstimmende Werte, da sie denselben Algorithmus verwenden und in diesem Fall die gesamte Ressource in einer Nachricht gesendet wird:

```http
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: 19
Content-Digest: sha-256=:RK/0qy18MlBSVnWgjwz6lZEWjP/lF5HF9bvEF8FabDg=:
Repr-Digest: sha-256=:RK/0qy18MlBSVnWgjwz6lZEWjP/lF5HF9bvEF8FabDg=:

{"hello": "world"}
```

### Abweichende Content-Digest- und Repr-Digest-Werte

Wenn dieselbe Anfrage wie im vorherigen Beispiel wiederholt wird, jedoch mit einem {{HTTPMethod("HEAD")}}-Method anstelle eines {{HTTPMethod("GET")}}, werden die `Repr-Digest`- und `Content-Digest`-Felder unterschiedlich sein:

```http
GET /items/123 HTTP/1.1
Host: example.com
```

Der `Repr-Digest`-Wert wird derselbe sein wie zuvor, aber es gibt keinen Nachrichtentext, sodass ein anderer `Content-Digest` vom Server gesendet würde:

```http
HTTP/1.1 200 OK
Content-Type: application/json
Content-Digest: sha-256=:47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=:
Repr-Digest: sha-256=:RK/0qy18MlBSVnWgjwz6lZEWjP/lF5HF9bvEF8FabDg=:
```

### User-Agent sendet einen Content-Digest in Anfragen

Im folgenden Beispiel sendet ein User-Agent einen Digest des Nachrichteninhalts unter Verwendung von SHA-512.
Es sendet sowohl einen `Content-Digest` als auch einen `Repr-Digest`, die sich aufgrund der `Content-Encoding`-Unterschiede unterscheiden:

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

Der Server kann einen Digest des empfangenen Inhalts berechnen und das Ergebnis mit den `Content-Digest`- oder `Repr-Digest`-Headern vergleichen, um die Nachrichtenintegrität zu validieren.
In Anfragen wie dem obigen Beispiel ist der `Repr-Digest` für den Server nützlicher, da dieser über die dekodierte Repräsentation berechnet wird und in unterschiedlichen Szenarien konsistenter wäre.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Dieser Header hat keine von der Spezifikation definierte Browser-Integration ("Browser-Kompatibilität" ist nicht anwendbar).
Entwickler können HTTP-Header mit `fetch()` setzen und abrufen, um anwendungsspezifisches Implementierungsverhalten bereitzustellen.

## Siehe auch

- {{HTTPHeader("Want-Content-Digest")}}-Header, um einen Content-Digest anzufordern
- {{HTTPHeader("Repr-Digest")}}, {{HTTPHeader("Want-Repr-Digest")}} Repräsentations-Digest-Header
- {{HTTPHeader("ETag")}}
- [Digitale Signaturen für APIs](https://developer.ebay.com/develop/guides/digital-signatures-for-apis) SDK-Leitfaden verwendet `Content-Digest`s für digitale Signaturen in HTTP-Aufrufen (developer.ebay.com)
