---
title: Content-Digest header
short-title: Content-Digest
slug: Web/HTTP/Reference/Headers/Content-Digest
l10n:
  sourceCommit: 88870465bb9a7c6692ec06652f7df7c029b95a21
---

Der HTTP-**`Content-Digest`**-{{Glossary("request_header", "Anforderungs")}} und {{Glossary("response_header", "Antwort-Header")}} bietet einen {{Glossary("hash_function", "Digest")}}, der durch einen Hash-Algorithmus über den Nachrichtentext erstellt wird.
Ein Empfänger kann den `Content-Digest` verwenden, um den Inhalt der HTTP-Nachricht auf Integrität zu überprüfen.

Das {{HTTPHeader("Want-Content-Digest")}}-Feld ermöglicht es einem Absender, einen `Content-Digest` zusammen mit seinen bevorzugten Hash-Algorithmen anzufordern.
Ein Content-Digest unterscheidet sich basierend auf {{HTTPHeader("Content-Encoding")}} und {{HTTPHeader("Content-Range")}}, jedoch nicht auf {{HTTPHeader("Transfer-Encoding")}}.

In bestimmten Fällen kann ein {{HTTPHeader("Repr-Digest")}} verwendet werden, um die Integrität von Teil- oder Mehrfachnachrichten im Vergleich zur vollständigen Darstellung zu gewährleisten.
Zum Beispiel bei [Bereichsanfragen](/de/docs/Web/HTTP/Guides/Range_requests) wird ein `Repr-Digest` immer den gleichen Wert haben, wenn nur die angeforderten Byte-Bereiche unterschiedlich sind, während sich der Content-Digest für jeden Teil unterscheidet.
Aus diesem Grund ist ein `Content-Digest` identisch mit einem {{HTTPHeader("Repr-Digest")}}, wenn eine Darstellung in einer einzigen Nachricht gesendet wird.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Anforderungs-Header")}}, {{Glossary("Response_header", "Antwort-Header")}}, {{Glossary("Representation_header", "Darstellungs-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungs-Header")}}</th>
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
  - : Der Algorithmus, der verwendet wird, um einen Digest des Nachrichtentextes zu erstellen.
    Nur zwei registrierte Digest-Algorithmen gelten als sicher: `sha-512` und `sha-256`.
    Die unsicheren (veralteten) registrierten Digest-Algorithmen sind: `md5`, `sha` (SHA-1), `unixsum`, `unixcksum`, `adler` (ADLER32) und `crc32c`.
- `<digest-value>`
  - : Der Digest in Bytes des Nachrichtentextes unter Verwendung des `<digest-algorithm>`.
    Die Wahl des Digest-Algorithmus bestimmt auch die zu verwendende Kodierung: `sha-512` und `sha-256` verwenden {{Glossary("base64", "base64")}}-Kodierung, während einige veraltete Digest-Algorithmen wie `unixsum` eine dezimale Ganzzahl verwenden.
    Im Gegensatz zu früheren Entwürfen der Spezifikation werden die standardmäßig base64-kodierten Digest-Bytes aufgrund der [Wörterbuch-Syntax](https://www.rfc-editor.org/info/rfc8941/#name-byte-sequences) in Doppelpunkte (`:`, ASCII 0x3A) eingeschlossen.

## Beispiele

### Benutzeragenten-Anfrage für einen SHA-256-Content-Digest

Im folgenden Beispiel fordert ein Benutzeragent einen Digest des Nachrichtentextes mit einer Präferenz für SHA-256 an, gefolgt von SHA-1 mit einer geringeren Präferenz:

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

Der Server ist so konfiguriert, dass er unaufgefordert Digest-Header in den Antworten sendet.
Die `Repr-Digest`- und `Content-Digest`-Felder haben übereinstimmende Werte, da sie denselben Algorithmus verwenden und in diesem Fall die gesamte Ressource in einer Nachricht gesendet wird:

```http
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: 19
Content-Digest: sha-256=:RK/0qy18MlBSVnWgjwz6lZEWjP/lF5HF9bvEF8FabDg=:
Repr-Digest: sha-256=:RK/0qy18MlBSVnWgjwz6lZEWjP/lF5HF9bvEF8FabDg=:

{"hello": "world"}
```

### Auseinandergehende Content-Digest- und Repr-Digest-Werte

Wenn dieselbe Anfrage wie im vorherigen Beispiel wiederholt wird, jedoch mit einer {{HTTPMethod("HEAD")}}-Methode anstelle von {{HTTPMethod("GET")}}, werden die `Repr-Digest`- und `Content-Digest`-Felder unterschiedlich sein:

```http
GET /items/123 HTTP/1.1
Host: example.com
```

Der `Repr-Digest`-Wert wird derselbe wie zuvor sein, aber es gibt keinen Nachrichtentext, daher würde ein anderer `Content-Digest` vom Server gesendet werden:

```http
HTTP/1.1 200 OK
Content-Type: application/json
Content-Digest: sha-256=:47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=:
Repr-Digest: sha-256=:RK/0qy18MlBSVnWgjwz6lZEWjP/lF5HF9bvEF8FabDg=:
```

### Benutzeragent sendet einen Content-Digest in Anfragen

Im folgenden Beispiel sendet ein Benutzeragent einen Digest des Nachrichtentextes unter Verwendung von SHA-512.
Er sendet sowohl einen `Content-Digest` als auch einen `Repr-Digest`, die sich aufgrund der `Content-Encoding` unterscheiden:

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

Der Server kann einen Digest des empfangenen Inhalts berechnen und das Ergebnis mit den `Content-Digest`- oder `Repr-Digest`-Headern vergleichen, um die Integrität der Nachricht zu überprüfen.
In Anfragen wie dem obigen Beispiel ist der `Repr-Digest` für den Server nützlicher, da dieser über die dekodierte Darstellung berechnet wird und in verschiedenen Szenarien konsistenter wäre.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Dieser Header hat keine spezifikationsdefinierte Browserintegration ("Browser-Kompatibilität" ist nicht anwendbar).
Entwickler können HTTP-Header mittels `fetch()` setzen und abrufen, um anwendungsspezifisches Implementierungsverhalten bereitzustellen.

## Siehe auch

- {{HTTPHeader("Want-Content-Digest")}}-Header, um einen Content-Digest anzufordern
- {{HTTPHeader("Repr-Digest")}}, {{HTTPHeader("Want-Repr-Digest")}} Darstellungs-Digest-Header
- {{HTTPHeader("ETag")}}
- [Digitale Signaturen für APIs](https://developer.ebay.com/develop/guides/digital-signatures-for-apis) SDK-Leitfaden verwendet `Content-Digest`s für digitale Signaturen in HTTP-Aufrufen (developer.ebay.com)
