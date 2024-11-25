---
title: Content-Digest
slug: Web/HTTP/Headers/Content-Digest
l10n:
  sourceCommit: a8f881645d776d1303a0a25bd884f95e1b2805e1
---

{{HTTPSidebar}}

Der HTTP-**`Content-Digest`**-{{Glossary("request_header", "Anfrage")}} und -{{Glossary("response_header", "Antwortheader")}} bietet einen {{Glossary("digest", "Digest")}}, der mit einem Hashing-Algorithmus berechnet wurde, der auf den Nachrichteninhalt angewendet wird. Ein Empfänger kann den `Content-Digest` verwenden, um den Inhalt der HTTP-Nachricht auf Integrität zu überprüfen.

Das {{HTTPHeader("Want-Content-Digest")}}-Feld ermöglicht es einem Absender, einen `Content-Digest` zusammen mit seinen bevorzugten Hashing-Algorithmen anzufordern. Ein Content-Digest unterscheidet sich basierend auf {{HTTPHeader("Content-Encoding")}} und {{HTTPHeader("Content-Range")}}, jedoch nicht auf {{HTTPHeader("Transfer-Encoding")}}.

In bestimmten Fällen kann ein {{HTTPHeader("Repr-Digest")}} verwendet werden, um die Integrität von Teil- oder Mehrfachnachrichten gegenüber der vollständigen Darstellung zu überprüfen. Zum Beispiel hat bei [Bereichsanfragen](/de/docs/Web/HTTP/Range_requests) ein `Repr-Digest` immer den gleichen Wert, wenn sich nur die angeforderten Byte-Bereiche unterscheiden, während der Content-Digest für jeden Teil unterschiedlich ist. Aus diesem Grund ist ein `Content-Digest` identisch mit einem {{HTTPHeader("Repr-Digest")}}, wenn eine Darstellung in einer einzigen Nachricht gesendet wird.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Anfrageheader")}}, {{Glossary("Response_header", "Antwortheader")}}, {{Glossary("Representation_header", "Repräsentationsheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Headername")}}</th>
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
  - : Der Algorithmus, der verwendet wird, um einen Digest des Nachrichteninhalts zu erstellen. Nur zwei registrierte Digest-Algorithmen werden als sicher angesehen: `sha-512` und `sha-256`. Die unsicheren (veralteten) registrierten Digest-Algorithmen sind: `md5`, `sha` (SHA-1), `unixsum`, `unixcksum`, `adler` (ADLER32) und `crc32c`.
- `<digest-value>`
  - : Der Digest in Bytes des Nachrichteninhalts unter Verwendung des `<digest-algorithm>`. Die Wahl des Digest-Algorithmus bestimmt auch die zu verwendende Codierung: `sha-512` und `sha-256` verwenden {{Glossary("base64", "base64")}}-Codierung, während einige veraltete Digest-Algorithmen wie `unixsum` eine dezimale Ganzzahl verwenden. Im Gegensatz zu früheren Entwürfen der Spezifikation sind die standardmäßigen base64-kodierten Digest-Bytes als Teil der [Dictionary-Syntax](https://www.rfc-editor.org/rfc/rfc8941#name-byte-sequences) in Doppelpunkte (`:`, ASCII 0x3A) eingeschlossen.

## Beschreibung

Ein `Digest`-Header wurde in früheren Spezifikationen definiert, erwies sich jedoch als problematisch, da der Umfang dessen, worauf sich der Digest bezog, nicht klar war. Insbesondere war es schwierig, zu unterscheiden, ob sich ein Digest auf die gesamte Ressourcendarstellung oder auf den spezifischen Inhalt einer HTTP-Nachricht bezog. Aus diesem Grund wurden zwei separate Header spezifiziert (`Content-Digest` und `Repr-Digest`), um HTTP-Nachrichteninhalts-Digests und Ressourcendarstellungs-Digests zu übermitteln.

## Beispiele

### Benutzeragent-Anfrage für einen SHA-256 Content-Digest

Im folgenden Beispiel fordert ein Benutzeragent einen Digest des Nachrichteninhalts an, wobei eine Präferenz für SHA-256, gefolgt von SHA-1 mit einer niedrigeren Präferenz, angegeben wird:

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

Ein Benutzeragent fordert eine Ressource ohne ein `Want-Content-Digest`-Feld an:

```http
GET /items/123 HTTP/1.1
Host: example.com
```

Der Server ist so konfiguriert, dass er unaufgeforderte Digest-Header in Antworten sendet. Die `Repr-Digest` und `Content-Digest` Felder haben übereinstimmende Werte, weil sie den gleichen Algorithmus verwenden und in diesem Fall die gesamte Ressource in einer Nachricht gesendet wird:

```http
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: 19
Content-Digest: sha-256=:RK/0qy18MlBSVnWgjwz6lZEWjP/lF5HF9bvEF8FabDg=:
Repr-Digest: sha-256=:RK/0qy18MlBSVnWgjwz6lZEWjP/lF5HF9bvEF8FabDg=:

{"hello": "world"}
```

### Abweichende Content-Digest und Repr-Digest Werte

Wenn dieselbe Anfrage wie im vorherigen Beispiel wiederholt wird, jedoch die {{HTTPMethod("HEAD")}}-Methode anstelle von {{HTTPMethod("GET")}} verwendet wird, werden die `Repr-Digest`- und `Content-Digest`-Felder unterschiedlich sein:

```http
GET /items/123 HTTP/1.1
Host: example.com
```

Der `Repr-Digest`-Wert bleibt wie zuvor, aber es gibt keinen Nachrichtentext, sodass ein anderer `Content-Digest` vom Server gesendet wird:

```http
HTTP/1.1 200 OK
Content-Type: application/json
Content-Digest: sha-256=:47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=:
Repr-Digest: sha-256=:RK/0qy18MlBSVnWgjwz6lZEWjP/lF5HF9bvEF8FabDg=:
```

### Benutzeragent, der einen Content-Digest in Anfragen sendet

Im folgenden Beispiel sendet ein Benutzeragent einen Digest des Nachrichteninhalts unter Verwendung von SHA-512. Es werden sowohl ein `Content-Digest` als auch ein `Repr-Digest` gesendet, die aufgrund des `Content-Encoding` voneinander abweichen:

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

Der Server kann einen Digest des empfangenen Inhalts berechnen und das Ergebnis mit den `Content-Digest`- oder `Repr-Digest`-Headern vergleichen, um die Integrität der Nachricht zu überprüfen. Bei Anfragen wie dem obigen Beispiel ist der `Repr-Digest` für den Server nützlicher, da dieser über die dekodierte Darstellung berechnet wird und in unterschiedlichen Szenarien konsistenter wäre.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Dieser Header hat keine spezifikationsdefinierte Browser-Integration ("Browser-Kompatibilität" gilt nicht). Entwickler können HTTP-Header mit `fetch()` setzen und abrufen, um verhaltensspezifische Implementierungen für Anwendungen bereitzustellen.

## Siehe auch

- {{HTTPHeader("Want-Content-Digest")}}-Header, um einen Content-Digest anzufordern
- {{HTTPHeader("Repr-Digest")}}, {{HTTPHeader("Want-Repr-Digest")}} Repräsentations-Digest-Header
- {{HTTPHeader("ETag")}}
- [Digital Signatures for APIs](https://developer.ebay.com/develop/guides/digital-signatures-for-apis) SDK-Leitfaden, der `Content-Digest`s für digitale Signaturen in HTTP-Anfragen verwendet (developer.ebay.com)
