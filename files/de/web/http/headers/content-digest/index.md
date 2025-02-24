---
title: Content-Digest
slug: Web/HTTP/Headers/Content-Digest
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{HTTPSidebar}}

Der HTTP-Header **`Content-Digest`** für {{Glossary("request_header", "Anfragen")}} und {{Glossary("response_header", "Antworten")}} bietet einen {{Glossary("digest", "Digest")}}, der mit einem Hash-Algorithmus des Nachrichteninhalts berechnet wird.
Ein Empfänger kann den `Content-Digest` nutzen, um den Inhalt einer HTTP-Nachricht auf Integrität zu prüfen.

Das Feld {{HTTPHeader("Want-Content-Digest")}} ermöglicht es einem Absender, einen `Content-Digest` mit seinen bevorzugten Hash-Algorithmen anzufordern.
Ein Inhalts-Digest unterscheidet sich je nach {{HTTPHeader("Content-Encoding")}} und {{HTTPHeader("Content-Range")}}, jedoch nicht bei {{HTTPHeader("Transfer-Encoding")}}.

In bestimmten Fällen kann ein {{HTTPHeader("Repr-Digest")}} zur Validierung der Integrität von Teil- oder Mehrteilig-Nachrichten gegen die vollständige Repräsentation verwendet werden.
Beispielsweise hat ein `Repr-Digest` bei [Range-Anfragen](/de/docs/Web/HTTP/Range_requests) immer denselben Wert, wenn sich nur die angeforderten Byte-Bereiche unterscheiden, während der Inhalts-Digest für jeden Teil unterschiedlich sein wird.
Aus diesem Grund ist ein `Content-Digest` identisch mit einem {{HTTPHeader("Repr-Digest")}}, wenn eine Repräsentation in einer einzigen Nachricht gesendet wird.

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
    Die Wahl des Digest-Algorithmus bestimmt auch die zu verwendende Kodierung: `sha-512` und `sha-256` verwenden {{Glossary("base64", "Base64")}}-Kodierung, während einige veraltete Digest-Algorithmen wie `unixsum` eine dezimale Ganzzahl verwenden.
    Im Gegensatz zu früheren Entwürfen der Spezifikation sind die standardmäßigen Base64-kodierten Digest-Bytes im Rahmen der [Dictionary-Syntax](https://www.rfc-editor.org/rfc/rfc8941#name-byte-sequences) in Doppelpunkte (`:`, ASCII 0x3A) eingeschlossen.

## Beschreibung

Ein `Digest`-Header wurde in früheren Spezifikationen definiert, erwies sich jedoch als problematisch, da der Anwendungsbereich des Digests nicht klar war.
Insbesondere war es schwer zu unterscheiden, ob ein Digest auf die gesamte Ressourcenrepräsentation oder auf den spezifischen Inhalt einer HTTP-Nachricht angewandt wurde.
Deshalb wurden zwei separate Header (`Content-Digest` und `Repr-Digest`) spezifiziert, um HTTP-Nachrichteninhalts-Digests und Ressourcenrepräsentations-Digests entsprechend zu übermitteln.

## Beispiele

### Benutzeragent-Anfrage für einen SHA-256-Content-Digest

Im folgenden Beispiel fordert ein Benutzeragent einen Digest des Nachrichteninhalts an, wobei SHA-256 als Präferenz angegeben wird, gefolgt von SHA-1 mit niedrigerer Präferenz:

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

Ein Benutzeragent fordert eine Ressource ohne ein `Want-Content-Digest`-Feld an:

```http
GET /items/123 HTTP/1.1
Host: example.com
```

Der Server ist so konfiguriert, dass er unerbetene Digest-Header in Antworten sendet.
Die Felder `Repr-Digest` und `Content-Digest` haben übereinstimmende Werte, da sie denselben Algorithmus verwenden, und in diesem Fall wird die gesamte Ressource in einer Nachricht gesendet:

```http
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: 19
Content-Digest: sha-256=:RK/0qy18MlBSVnWgjwz6lZEWjP/lF5HF9bvEF8FabDg=:
Repr-Digest: sha-256=:RK/0qy18MlBSVnWgjwz6lZEWjP/lF5HF9bvEF8FabDg=:

{"hello": "world"}
```

### Abweichende Content-Digest- und Repr-Digest-Werte

Wird dieselbe Anfrage wie im vorherigen Beispiel wiederholt, jedoch mit der Methode {{HTTPMethod("HEAD")}} anstelle von {{HTTPMethod("GET")}}, werden die Felder `Repr-Digest` und `Content-Digest` unterschiedlich sein:

```http
GET /items/123 HTTP/1.1
Host: example.com
```

Der Wert des `Repr-Digest` wird gleich bleiben wie zuvor, aber es gibt keinen Nachrichtenkörper, sodass der Server einen anderen `Content-Digest` senden würde:

```http
HTTP/1.1 200 OK
Content-Type: application/json
Content-Digest: sha-256=:47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=:
Repr-Digest: sha-256=:RK/0qy18MlBSVnWgjwz6lZEWjP/lF5HF9bvEF8FabDg=:
```

### Benutzeragent sendet einen Content-Digest in Anfragen

Im folgenden Beispiel sendet ein Benutzeragent einen Digest des Nachrichteninhalts mit SHA-512.
Er sendet sowohl einen `Content-Digest` als auch einen `Repr-Digest`, die sich aufgrund des `Content-Encoding` voneinander unterscheiden:

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

Der Server kann einen Digest des empfangenen Inhalts berechnen und das Ergebnis mit den `Content-Digest`- oder `Repr-Digest`-Headern vergleichen, um die Integrität der Nachricht zu bestätigen.
In Anfragen wie dem obigen Beispiel ist der `Repr-Digest` für den Server nützlicher, da dieser über die dekodierte Repräsentation berechnet wird und in verschiedenen Szenarien konsistenter wäre.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Dieser Header hat keine spezifikationsdefinierte Browser-Integration ("Browser-Kompatibilität" ist nicht anwendbar).
Entwickler können HTTP-Header mit `fetch()` setzen und abrufen, um anwendungsspezifisches Implementierungsverhalten bereitzustellen.

## Siehe auch

- {{HTTPHeader("Want-Content-Digest")}} Header zur Anforderung eines Inhalts-Digests
- {{HTTPHeader("Repr-Digest")}}, {{HTTPHeader("Want-Repr-Digest")}} Repräsentations-Digest-Header
- {{HTTPHeader("ETag")}}
- [Digitale Signaturen für APIs](https://developer.ebay.com/develop/guides/digital-signatures-for-apis) SDK-Leitfaden verwendet `Content-Digest`s für digitale Signaturen in HTTP-Aufrufen (developer.ebay.com)
