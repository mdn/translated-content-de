---
title: WWW-Authenticate
slug: Web/HTTP/Reference/Headers/WWW-Authenticate
l10n:
  sourceCommit: 881c60353335217989d2d6e9f7bdf0d158dd4cef
---

{{HTTPSidebar}}

Der HTTP-**`WWW-Authenticate`**-[Antwort-Header](/de-DE/docs/Glossary/response_header) gibt die [HTTP-Authentifizierung](/de-DE/docs/Web/HTTP/Guides/Authentication) Methoden (oder [Challenges](/de-DE/docs/Glossary/challenge)) an, die verwendet werden könnten, um Zugriff auf eine bestimmte Ressource zu erlangen.

Dieser Header ist Teil des [Allgemeinen HTTP-Authentifizierungsframeworks](/de-DE/docs/Web/HTTP/Guides/Authentication#the_general_http_authentication_framework), das mit einer Reihe von [Authentifizierungsschemata](/de-DE/docs/Web/HTTP/Guides/Authentication#authentication_schemes) verwendet werden kann.
Jede Challenge identifiziert ein vom Server unterstütztes Schema und zusätzliche Parameter, die für diesen Schematyp definiert sind.

Ein Server, der [HTTP-Authentifizierung](/de-DE/docs/Web/HTTP/Guides/Authentication) verwendet, wird mit einer {{HTTPStatus("401", "401 Unauthorized")}} Antwort auf eine Anfrage für eine geschützte Ressource reagieren.
Diese Antwort muss mindestens einen `WWW-Authenticate`-Header und mindestens eine Herausforderung enthalten, um anzugeben, welche Authentifizierungsschemata verwendet werden können, um auf die Ressource zuzugreifen, und welche zusätzlichen Daten jedes bestimmte Schema benötigt.

Mehrere Challenges sind in einem `WWW-Authenticate`-Header zulässig, und mehrere `WWW-Authenticate`-Header sind in einer Antwort erlaubt.
Ein Server kann den `WWW-Authenticate`-Header auch in anderen Antwortnachrichten einschließen, um anzuzeigen, dass die Bereitstellung von Zugangsdaten die Antwort beeinflussen könnte.

Nach dem Empfang des `WWW-Authenticate`-Headers wird ein Client in der Regel den Benutzer nach Zugangsdaten fragen und dann die Ressource erneut anfordern.
Diese neue Anfrage verwendet den {{HTTPHeader("Authorization")}}-Header, um dem Server die Zugangsdaten zur Verfügung zu stellen, die für die ausgewählte Authentifizierungsmethode entsprechend kodiert sind.
Vom Client wird erwartet, dass er die sicherste der Herausforderungen auswählt, die er versteht (beachten Sie, dass in einigen Fällen die "sicherste" Methode umstritten ist).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>[Antwort-Header](/de-DE/docs/Glossary/Response_header)</td>
    </tr>
    <tr>
      <th scope="row">[Verbotener Anforderungs-Header](/de-DE/docs/Glossary/Forbidden_request_header)</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
WWW-Authenticate: <challenge>
```

Wobei ein `<challenge>` aus einem `<auth-scheme>` besteht, gefolgt von einem optionalen `<token68>` oder einer kommagetrennten Liste von `<auth-params>`:

```plain
challenge = <auth-scheme> <auth-param>, …, <auth-paramN>
challenge = <auth-scheme> <token68>
```

Zum Beispiel:

```http
WWW-Authenticate: <auth-scheme>
WWW-Authenticate: <auth-scheme> token68
WWW-Authenticate: <auth-scheme> auth-param1=param-token1
WWW-Authenticate: <auth-scheme> auth-param1=param-token1, …, auth-paramN=param-tokenN
```

Das Vorhandensein von `token68` oder Authentifizierungsparametern hängt vom ausgewählten `<auth-scheme>` ab.
Zum Beispiel erfordert [Basic-Authentifizierung](/de-DE/docs/Web/HTTP/Guides/Authentication#basic_authentication_scheme) ein `<realm>` und erlaubt die optionale Verwendung des `charset`-Schlüssels, unterstützt jedoch kein `token68`:

```http
WWW-Authenticate: Basic realm="Dev", charset="UTF-8"
```

Mehrere Challenges können in einer kommagetrennten Liste gesendet werden

```http
WWW-Authenticate: <challenge>, …, <challengeN>
```

Mehrere Header können auch in einer einzelnen Antwort gesendet werden:

```http
WWW-Authenticate: <challenge>
WWW-Authenticate: <challengeN>
```

## Direktiven

- `<auth-scheme>`
  - : Ein nicht case-sensitives Token, das das verwendete [Authentifizierungsschema](/de-DE/docs/Web/HTTP/Guides/Authentication#authentication_schemes) angibt.
    Einige der häufigeren Typen sind [`Basic`](/de-DE/docs/Web/HTTP/Guides/Authentication#basic_authentication_scheme), `Digest`, `Negotiate` und `AWS4-HMAC-SHA256`.
    Die IANA führt eine [Liste der Authentifizierungsschemata](https://www.iana.org/assignments/http-authschemes/http-authschemes.xhtml), aber es gibt andere von Host-Diensten angebotene Schemata.
- `<auth-param>` {{optional_inline}}
  - : Ein Authentifizierungsparameter, dessen Format vom `<auth-scheme>` abhängt.
    `<realm>` wird unten beschrieben, da es ein häufiger Authentifizierungsparameter unter vielen Auth-Schemata ist.
    - `<realm>` {{optional_inline}}
      - : Der String `realm` gefolgt von `=` und einem Anführungszeichen, das einen geschützten Bereich beschreibt, z. B. `realm="staging environment"`.
        Ein Realm erlaubt es einem Server, die Bereiche, die er schützt, zu partitionieren (wenn dies von einem Schema unterstützt wird, das solche Partitionierung erlaubt).
        Einige Clients zeigen diesen Wert dem Benutzer, um sie darüber zu informieren, welche spezifischen Zugangsdaten erforderlich sind — obwohl die meisten Browser damit aufgehört haben, um Phishing zu bekämpfen.
        Der einzige zuverlässig unterstützte Zeichensatz für diesen Wert ist `us-ascii`.
        Wenn kein Realm angegeben ist, zeigen Clients häufig einen formatierten Hostnamen stattdessen an.
- `<token68>` {{optional_inline}}
  - : Ein Token, das für einige Schemata nützlich sein kann.
    Das Token erlaubt die 66 nicht reservierten URI-Zeichen plus einige andere.
    Es kann eine [base64](/de-DE/docs/Glossary/base64), base64url, base32 oder base16 (hex) Kodierung enthalten, mit oder ohne Padding, jedoch ohne Leerzeichen.
    Die token68-Alternative zu auth-param Listen wird zur Konsistenz mit älteren Authentifizierungsschemata unterstützt.

Generell müssen Sie die relevanten Spezifikationen für die für jedes `<auth-scheme>` benötigten Authentifizierungsparameter prüfen.
Die folgenden Abschnitte beschreiben Token und Auth-Parameter für einige allgemeine Auth-Schemata.

### Direktivien der Basic-Authentifizierung

- `<realm>`
  - : Ein `<realm>` wie [oben beschrieben](#realm).
    Beachten Sie, dass das Realm für `Basic`-Authentifizierung obligatorisch ist.
- `charset="UTF-8"` {{optional_inline}}
  - : Informiert den Client über das bevorzugte Kodierungsschema des Servers beim Einreichen eines Benutzernamens und Passworts.
    Der einzige erlaubte Wert ist der nicht case-sensitive String `UTF-8`.
    Dies steht nicht im Zusammenhang mit der Kodierung des Realm-Strings.

### Direktivien der Digest-Authentifizierung

- `<realm>` {{optional_inline}}
  - : Ein `<realm>` wie [oben beschrieben](#realm), das angibt, welchen Benutzernamen/das Passwort verwendet werden soll.
    Sollte mindestens den Hostnamen einschließen, könnte jedoch auf die Benutzer oder Gruppen hinweisen, die Zugang haben.
- `domain` {{optional_inline}}
  - : Eine in Anführungszeichen gesetzte, Leerzeichen getrennte Liste von URI-Präfixen, die alle Standorte definieren, an denen die Authentifizierungsinformationen verwendet werden können.
    Wenn dieser Schlüssel nicht angegeben ist, können die Authentifizierungsinformationen überall im Web-Root verwendet werden.
- `nonce`
  - : Ein vom Server festgelegter Anführungszeichen String, den der Server verwenden kann, um die Gültigkeitsdauer der speziellen Zugangsdaten zu kontrollieren.
    Dieser muss jedes Mal, wenn eine 401-Antwort erfolgt, einzigartig generiert werden und kann häufiger regeneriert werden (z.B. um einen Digest nur einmal verwenden zu lassen).
    Die Spezifikation enthält Empfehlungen zu möglichen Algorithmen zum Generieren dieses Wertes.
    Der nonce-Wert ist für den Client undurchsichtig.
- `opaque`
  - : Ein vom Server festgelegter Anführungszeichen String, der unverändert im {{HTTPHeader("Authorization")}} zurückgegeben werden sollte.
    Dies ist für den Client undurchsichtig. Dem Server wird empfohlen, Base64- oder Hexadezimaldaten einzuschließen.
- `stale` {{optional_inline}}
  - : Eine nicht case-sensitive Flagge, die anzeigt, dass die vorherige Anfrage vom Client abgelehnt wurde, weil der verwendete `nonce` zu alt (stale) ist.
    Wenn dies `true` ist, kann die Anfrage mit demselben Benutzernamen/Passwort erneut verschlüsselt mit dem neuen `nonce` gesendet werden.
    Wenn es einen anderen Wert hat, sind Benutzername/Passwort ungültig und müssen vom Benutzer erneut angefordert werden.
- `algorithm` {{optional_inline}}
  - : Ein String, der den Algorithmus angibt, der zur Erstellung eines Digest verwendet wurde.
    Gültige nicht-Session-Werte sind: `MD5` (Standard, wenn `algorithm` nicht angegeben ist), `SHA-256`, `SHA-512`.
    Gültige Session-Werte sind: `MD5-sess`, `SHA-256-sess`, `SHA-512-sess`.
- `qop`
  - : Ein in Anführungszeichen gesetzter String, der die vom Server unterstützte Qualität des Schutzes angibt. Dies muss angegeben werden, und nicht erkannte Optionen müssen ignoriert werden.
    - `"auth"`: Authentifizierung
    - `"auth-int"`: Authentifizierung mit Integritätsschutz
- `charset="UTF-8"` {{optional_inline}}
  - : Informiert den Client über das bevorzugte Kodierungsschema des Servers beim Einreichen eines Benutzernamens und Passworts.
    Der einzige erlaubte Wert ist der nicht case-sensitive String "UTF-8".
- `userhash` {{optional_inline}}
  - : Ein Server kann `"true"` angeben, um zu signalisieren, dass es das Hashing von Benutzernamen unterstützt (Standard ist `"false"`)

### HTTP Origin-Bound Authentication (HOBA)

- `<challenge>`
  - : Eine Menge von Paaren im Format `<len>:<value>`, die zusammengefügt werden, um einem Client zur Verfügung gestellt zu werden.
    Die Challenge besteht aus einem nonce, Algorithmus, Ursprung, Realm, Schlüsselkennung und der Herausforderung.
- `<max-age>`
  - : Die Anzahl der Sekunden ab dem Zeitpunkt, an dem die HTTP-Antwort ausgegeben wird, für die Antworten auf diese Challenge akzeptiert werden können.
- `<realm>` {{optional_inline}}
  - : Wie oben im Abschnitt [Direktiven](#direktiven) beschrieben.

## Beispiele

### Ausgeben mehrerer Authentifizierungs-Challenges

Mehrere Challenges können in einem einzelnen Antwort-Header angegeben werden:

```http
HTTP/1.1 401 Unauthorized
WWW-Authenticate: challenge1, …, challengeN
```

Mehrere Challenges können in separaten `WWW-Authenticate`-Headern in derselben Antwort gesendet werden:

```http
HTTP/1.1 401 Unauthorized
WWW-Authenticate: challenge1
WWW-Authenticate: challengeN
```

### Basic-Authentifizierung

Ein Server, der nur Basic-Authentifizierung unterstützt, könnte einen `WWW-Authenticate`-Antwort-Header haben, der folgendermaßen aussieht:

```http
HTTP/1.1 401 Unauthorized
WWW-Authenticate: Basic realm="Staging server", charset="UTF-8"
```

Ein User-Agent, der diesen Header empfängt, würde zuerst den Benutzer nach seinem Benutzernamen und Passwort fragen und dann die Ressource mit den codierten Zugangsdaten im `Authorization`-Header erneut anfordern.
Der `Authorization`-Header könnte folgendermaßen aussehen:

```http
Authorization: Basic YWxhZGRpbjpvcGVuc2VzYW1l
```

Für die `Basic`-Authentifizierung werden die Zugangsdaten erstellt, indem zuerst der Benutzername und das Passwort mit einem Doppelpunkt kombiniert werden (`aladdin:opensesame`) und dann der resultierende String in [`base64`](/de-DE/docs/Glossary/Base64) kodiert wird (`YWxhZGRpbjpvcGVuc2VzYW1l`).

> [!NOTE]
> Siehe auch [HTTP-Authentifizierung](/de-DE/docs/Web/HTTP/Guides/Authentication) für Beispiele, wie Sie Apache- oder Nginx-Server konfigurieren können, um Ihre Website mit HTTP-Basic-Authentifizierung mit Passwortschutz zu versehen.

### Digest-Authentifizierung mit SHA-256 und MD5

> [!NOTE]
> Dieses Beispiel stammt aus {{RFC("7616")}} "HTTP Digest Access Authentication" (andere Beispiele in der Spezifikation zeigen die Verwendung von `SHA-512`, `charset` und `userhash`).

Der Client versucht, auf ein Dokument bei URI `http://www.example.org/dir/index.html` zuzugreifen, das über Digest-Authentifizierung geschützt ist.
Der Benutzername für dieses Dokument ist "Mufasa" und das Passwort ist "Circle of Life" (beachten Sie das einzelne Leerzeichen zwischen den Wörtern).

Beim ersten Mal, wenn der Client das Dokument anfordert, wird kein {{HTTPHeader("Authorization")}}-Header-Feld gesendet.
Hier antwortet der Server mit einer HTTP 401 Nachricht, die eine Challenge für jeden von ihm unterstützten Digest-Algorithmus in seiner bevorzugten Reihenfolge enthält (`SHA256` und dann `MD5`).

```http
HTTP/1.1 401 Unauthorized
WWW-Authenticate: Digest
    realm="http-auth@example.org",
    qop="auth, auth-int",
    algorithm=SHA-256,
    nonce="7ypf/xlj9XXwfDPEoM4URrv/xwf94BcCAzFZH4GiTo0v",
    opaque="FQhe/qaU925kfnzjCev0ciny7QMkPqMAFRtzCUYo5tdS"
WWW-Authenticate: Digest
    realm="http-auth@example.org",
    qop="auth, auth-int",
    algorithm=MD5,
    nonce="7ypf/xlj9XXwfDPEoM4URrv/xwf94BcCAzFZH4GiTo0v",
    opaque="FQhe/qaU925kfnzjCev0ciny7QMkPqMAFRtzCUYo5tdS"
```

Der Client fordert den Benutzer zur Eingabe seines Benutzernamens und Passworts auf und antwortet dann mit einer neuen Anfrage, die die Zugangsdaten im {{HTTPHeader("Authorization")}}-Headerfeld kodiert.
Wenn der Client den MD5-Digest auswählte, könnte das {{HTTPHeader("Authorization")}}-Headerfeld wie unten dargestellt aussehen:

```http
Authorization: Digest username="Mufasa",
    realm="http-auth@example.org",
    uri="/dir/index.html",
    algorithm=MD5,
    nonce="7ypf/xlj9XXwfDPEoM4URrv/xwf94BcCAzFZH4GiTo0v",
    nc=00000001,
    cnonce="f2/wE4q74E6zIJEtWaHKaf5wv/H5QzzpXusqGemxURZJ",
    qop=auth,
    response="8ca523f5e9506fed4657c9700eebdbec",
    opaque="FQhe/qaU925kfnzjCev0ciny7QMkPqMAFRtzCUYo5tdS"
```

Wenn der Client den SHA-256-Digest auswählte, könnte das {{HTTPHeader("Authorization")}}-Headerfeld wie unten dargestellt aussehen:

```http
Authorization: Digest username="Mufasa",
    realm="http-auth@example.org",
    uri="/dir/index.html",
    algorithm=SHA-256,
    nonce="7ypf/xlj9XXwfDPEoM4URrv/xwf94BcCAzFZH4GiTo0v",
    nc=00000001,
    cnonce="f2/wE4q74E6zIJEtWaHKaf5wv/H5QzzpXusqGemxURZJ",
    qop=auth,
    response="753927fa0e85d155564e2e272a28d1802ca10daf449
        6794697cf8db5856cb6c1",
    opaque="FQhe/qaU925kfnzjCev0ciny7QMkPqMAFRtzCUYo5tdS"
```

### HOBA-Authentifizierung

Ein Server, der HOBA-Authentifizierung unterstützt, könnte einen `WWW-Authenticate`-Antwort-Header haben, der folgendermaßen aussieht:

```http
HTTP/1.1 401 Unauthorized
WWW-Authenticate: HOBA max-age="180", challenge="16:MTEyMzEyMzEyMw==1:028:https://www.example.com:8080:3:MTI48:NjgxNDdjOTctNDYxYi00MzEwLWJlOWItNGM3MDcyMzdhYjUz"
```

Die zu signierende Blob-Challenge besteht aus diesen Teilen: `www.example.com` unter Verwendung von Port 8080, der nonce ist `1123123123`, der Algorithmus zum Signieren ist RSA-SHA256, die Schlüsselkennung ist `123`, und schließlich ist die Challenge `68147c97-461b-4310-be9b-4c707237ab53`.

Ein Client würde diesen Header empfangen, die Herausforderung extrahieren, sie mit seinem privaten Schlüssel signieren, der der Schlüsselkennung 123 in unserem Beispiel entspricht, unter Verwendung von RSA-SHA256, und dann das Ergebnis im `Authorization`-Header als punktgetrennte Schlüsselkennung, Herausforderung, nonce und Signatur senden.

```http
Authorization: 123.16:MTEyMzEyMzEyMw==1:028:https://www.example.com:8080:3:MTI48:NjgxNDdjOTctNDYxYi00MzEwLWJlOWItNGM3MDcyMzdhYjUz.1123123123.<signature-of-challenge>
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTTP-Authentifizierung](/de-DE/docs/Web/HTTP/Guides/Authentication)
- {{HTTPHeader("Authorization")}}
- {{HTTPHeader("Proxy-Authorization")}}
- {{HTTPHeader("Proxy-Authenticate")}}
- {{HTTPStatus("401")}}, {{HTTPStatus("403")}}, {{HTTPStatus("407")}}
