---
title: WWW-Authenticate
slug: Web/HTTP/Headers/WWW-Authenticate
l10n:
  sourceCommit: ed041385cf874deec203e820fd415bdcd6f98a19
---

{{HTTPSidebar}}

Der HTTP-Antwortheader **`WWW-Authenticate`** gibt die HTTP-Authentifizierungsmethoden (oder Herausforderungen) an, die möglicherweise verwendet werden können, um auf eine bestimmte Ressource zuzugreifen.

Dieser Header ist Teil des allgemeinen HTTP-Authentifizierungsframeworks, das mit einer Reihe von Authentifizierungsschemata verwendet werden kann. Jede Herausforderung identifiziert ein vom Server unterstütztes Schema und zusätzliche Parameter, die für diesen Schematyp definiert sind.

Ein Server, der HTTP-Authentifizierung verwendet, antwortet mit einer {{HTTPStatus("401", "401 Unauthorized")}}-Antwort auf eine Anfrage nach einer geschützten Ressource. Diese Antwort muss mindestens einen `WWW-Authenticate`-Header und mindestens eine Herausforderung enthalten, um anzugeben, welche Authentifizierungsschemata verwendet werden können, um Zugriff auf die Ressource zu erhalten, und welche zusätzlichen Daten jedes bestimmte Schema benötigt.

Mehrere Herausforderungen sind in einem `WWW-Authenticate`-Header erlaubt, und mehrere `WWW-Authenticate`-Header sind in einer Antwort erlaubt. Ein Server kann den `WWW-Authenticate`-Header auch in anderen Antwortnachrichten einschließen, um anzuzeigen, dass die Bereitstellung von Anmeldeinformationen die Antwort beeinflussen könnte.

Nachdem der `WWW-Authenticate`-Header empfangen wurde, wird ein Client normalerweise den Benutzer nach Anmeldeinformationen fragen und dann die Ressource erneut anfordern. Diese neue Anfrage verwendet den {{HTTPHeader("Authorization")}}-Header, um die Anmeldeinformationen an den Server zu übermitteln, wobei sie für die ausgewählte Authentifizierungsmethode entsprechend codiert sind. Der Client wird erwartet, die sicherste der Herausforderungen auszuwählen, die er versteht (obwohl in einigen Fällen die "sicherste" Methode umstritten ist).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
WWW-Authenticate: <challenge>
```

Wo eine `<challenge>` aus einem `<auth-scheme>`, gefolgt von einem optionalen `<token68>` oder einer durch Kommas getrennten Liste von `<auth-params>` besteht:

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

Das Vorhandensein eines `token68` oder Authentifizierungsparameter hängt vom ausgewählten `<auth-scheme>` ab. Zum Beispiel erfordert die [Basic-Authentifizierung](/de/docs/Web/HTTP/Authentication#basic_authentication_scheme) ein `<realm>` und erlaubt die optionale Verwendung des `charset`-Schlüssels, unterstützt jedoch kein `token68`:

```http
WWW-Authenticate: Basic realm="Dev", charset="UTF-8"
```

Mehrere Herausforderungen können in einer durch Kommas getrennten Liste gesendet werden

```http
WWW-Authenticate: <challenge>, …, <challengeN>
```

Mehrere Header können auch in einer einzigen Antwort gesendet werden:

```http
WWW-Authenticate: <challenge>
WWW-Authenticate: <challengeN>
```

## Direktiven

- `<auth-scheme>`
  - : Ein nicht casesensitiver Token, der das verwendete [Authentifizierungsschema](/de/docs/Web/HTTP/Authentication#authentication_schemes) angibt. Einige der häufigeren Typen sind [`Basic`](/de/docs/Web/HTTP/Authentication#basic_authentication_scheme), `Digest`, `Negotiate` und `AWS4-HMAC-SHA256`. IANA führt eine [Liste der Authentifizierungsschemata](https://www.iana.org/assignments/http-authschemes/http-authschemes.xhtml), aber es gibt auch andere Schemata, die von Hostdiensten angeboten werden.
- `<auth-param>` {{optional_inline}}
  - : Ein Authentifizierungsparameter, dessen Format vom `<auth-scheme>` abhängt. `<realm>` wird unten beschrieben, da es ein häufiger Authentifizierungsparameter unter vielen Authentifizierungsschemata ist.
    - `<realm>` {{optional_inline}}
      - : Der String `realm` gefolgt von `=` und einer in Anführungszeichen gesetzten Zeichenkette, die einen geschützten Bereich beschreibt, zum Beispiel `realm="staging environment"`. Ein Realm ermöglicht es einem Server, die Bereiche, die er schützt, zu partitionieren (wenn ein Schema diese Partitionierung unterstützt). Einige Clients zeigen diesen Wert dem Benutzer an, um sie darüber zu informieren, welche bestimmten Anmeldeinformationen benötigt werden – obwohl die meisten Browser dies nicht mehr tun, um Phishing zu bekämpfen. Der einzige zuverlässig unterstützte Zeichensatz für diesen Wert ist `us-ascii`. Wenn kein Realm angegeben ist, zeigen Clients häufig einen formatierten Hostnamen anstelle an.
- `<token68>` {{optional_inline}}
  - : Ein Token, der für einige Schemata nützlich sein kann. Das Token erlaubt die 66 nicht reservierten URI-Zeichen plus einige weitere. Es kann eine {{Glossary("base64", "base64")}}, base64url, base32 oder base16 (hex) Kodierung mit oder ohne Padding, aber ohne Leerzeichen enthalten. Die token68-Alternative zu auth-param-Listen wird unterstützt, um die Konsistenz mit alten Authentifizierungsschemata zu gewährleisten.

Generell müssen Sie die relevanten Spezifikationen für die Authentifizierungsparameter, die für jedes `<auth-scheme>` benötigt werden, überprüfen.
Die folgenden Abschnitte beschreiben Token- und Authentifizierungsparameter für einige gängige Authentifizierungsschemata.

### Basic-Authentifizierungsdirektiven

- `<realm>`
  - : Ein `<realm>` wie [oben beschrieben](#realm). Beachten Sie, dass das Realm bei der `Basic`-Authentifizierung obligatorisch ist.
- `charset="UTF-8"` {{optional_inline}}
  - : Teilt dem Client das bevorzugte Kodierungsschema des Servers mit, wenn ein Benutzername und ein Passwort übermittelt werden. Der einzige erlaubte Wert ist der nicht casesensitive String `UTF-8`. Dies bezieht sich nicht auf die Kodierung der Realm-Zeichenkette.

### Digest-Authentifizierungsdirektiven

- `<realm>` {{optional_inline}}
  - : Ein `<realm>` wie [oben beschrieben](#realm), das angibt, welchen Benutzernamen/Passwort zu verwenden ist. Sollte mindestens den Hostnamen beinhalten, könnte aber auch angeben, welche Benutzer oder Gruppe Zugang haben.
- `domain` {{optional_inline}}
  - : Eine in Anführungszeichen gesetzte, durch Leerzeichen getrennte Liste von URI-Präfixen, die alle Standorte definieren, an denen die Authentifizierungsinformationen verwendet werden können. Ist dieser Schlüssel nicht angegeben, können die Authentifizierungsinformationen überall im Web-Root genutzt werden.
- `nonce`
  - : Ein vom Server spezifizierter, in Anführungszeichen gesetzter String, der vom Server verwendet werden kann, um die Lebensdauer zu kontrollieren, in der bestimmte Anmeldeinformationen als gültig betrachtet werden. Dieser muss jedes Mal, wenn eine 401-Antwort erfolgt, eindeutig generiert werden und kann öfter regeneriert werden (zum Beispiel, um es zu ermöglichen, einen Digest nur einmal zu verwenden). Die Spezifikation enthält Hinweise zu möglichen Algorithmen zur Generierung dieses Wertes. Der nonce-Wert ist für den Client undurchsichtig.
- `opaque`
  - : Ein vom Server spezifizierter, in Anführungszeichen gesetzter String, der unverändert im {{HTTPHeader("Authorization")}} zurückgegeben werden sollte. Dieser ist für den Client undurchsichtig. Dem Server wird empfohlen, Base64- oder hexadezimale Daten einzuschließen.
- `stale` {{optional_inline}}
  - : Eine casesensitive Flagge, die anzeigt, dass die vorherige Anfrage des Clients abgelehnt wurde, weil der verwendete `nonce` zu alt (stale) ist. Wenn dies `true` ist, kann die Anfrage mit demselben Benutzernamen/Passwort erneut versucht werden, verschlüsselt mit dem neuen `nonce`. Wenn es irgendeinen anderen Wert hat, sind der Benutzername/das Passwort ungültig und müssen vom Benutzer erneut angefordert werden.
- `algorithm` {{optional_inline}}
  - : Ein String, der den Algorithmus angibt, der zur Erzeugung eines Digest verwendet wird. Gültige Nicht-Session-Werte sind: `MD5` (Standard, wenn `algorithm` nicht angegeben ist), `SHA-256`, `SHA-512`. Gültige Session-Werte sind: `MD5-sess`, `SHA-256-sess`, `SHA-512-sess`.
- `qop`
  - : Ein in Anführungszeichen gesetzter String, der die vom Server unterstützte Qualität des Schutzes angibt. Dies muss angegeben werden, und nicht anerkannte Optionen müssen ignoriert werden.
    - `"auth"`: Authentifizierung
    - `"auth-int"`: Authentifizierung mit Integritätsschutz
- `charset="UTF-8"` {{optional_inline}}
  - : Teilt dem Client das bevorzugte Kodierungsschema des Servers mit, wenn ein Benutzername und ein Passwort übermittelt werden. Der einzige erlaubte Wert ist der nicht casesensitive String "UTF-8".
- `userhash` {{optional_inline}}
  - : Ein Server kann `"true"` angeben, um anzuzeigen, dass er Benutzernamen-Hashing unterstützt (Standard ist `"false"`)

### HTTP Origin-Bound Authentication (HOBA)

- `<challenge>`
  - : Eine Reihe von Paaren im Format `<len>:<value>`, die zu einem Client gegeben werden. Die Herausforderung besteht aus einem nonce, Algorithmus, Ursprungsort, Realm, Schlüsselkennzeichen und der Herausforderung.
- `<max-age>`
  - : Die Anzahl von Sekunden ab dem Zeitpunkt, zu dem die HTTP-Antwort ausgesandt wird, bis zu dem Antworten auf diese Herausforderung akzeptiert werden können.
- `<realm>` {{optional_inline}}
  - : Wie oben im Abschnitt [Direktiven](#direktiven) beschrieben.

## Beispiele

### Ausgabe mehrerer Authentifizierungsherausforderungen

Mehrere Herausforderungen können in einem einzelnen Antwort-Header angegeben werden:

```http
HTTP/1.1 401 Unauthorized
WWW-Authenticate: challenge1, …, challengeN
```

Mehrere Herausforderungen können in separaten `WWW-Authenticate`-Headern in derselben Antwort gesendet werden:

```http
HTTP/1.1 401 Unauthorized
WWW-Authenticate: challenge1
WWW-Authenticate: challengeN
```

### Basic-Authentifizierung

Ein Server, der nur die Basic-Authentifizierung unterstützt, könnte einen `WWW-Authenticate`-Antwort-Header haben, der so aussieht:

```http
HTTP/1.1 401 Unauthorized
WWW-Authenticate: Basic realm="Staging server", charset="UTF-8"
```

Ein Benutzeragent, der diesen Header empfängt, würde zuerst den Benutzer nach seinem Benutzernamen und Passwort fragen und dann die Ressource mit den codierten Anmeldeinformationen im `Authorization`-Header erneut anfordern. Der `Authorization`-Header könnte so aussehen:

```http
Authorization: Basic YWxhZGRpbjpvcGVuc2VzYW1l
```

Für die `Basic`-Authentifizierung werden die Anmeldeinformationen konstruiert, indem zuerst der Benutzername und das Passwort mit einem Doppelpunkt kombiniert werden (`aladdin:opensesame`), und dann die resultierende Zeichenkette in {{Glossary("Base64", "`base64`")}} (`YWxhZGRpbjpvcGVuc2VzYW1l`) kodiert wird.

> [!NOTE]
> Siehe auch [HTTP-Authentifizierung](/de/docs/Web/HTTP/Authentication) für Beispiele, wie Sie Apache- oder Nginx-Server konfigurieren, um Ihre Seite mit HTTP-Basic-Authentifizierung zu schützen.

### Digest-Authentifizierung mit SHA-256 und MD5

> [!NOTE]
> Dieses Beispiel stammt aus {{RFC("7616")}} "HTTP Digest Access Authentication" (andere Beispiele in der Spezifikation zeigen die Verwendung von `SHA-512`, `charset` und `userhash`).

Der Client versucht auf ein Dokument unter der URI `http://www.example.org/dir/index.html` zuzugreifen, das durch Digest-Authentifizierung geschützt ist. Der Benutzername für dieses Dokument ist "Mufasa" und das Passwort ist "Circle of Life" (beachten Sie den einzelnen Leerzeichen zwischen jedem der Wörter).

Beim ersten Mal, wenn der Client das Dokument anfordert, wird kein {{HTTPHeader("Authorization")}}-Headerfeld gesendet. Hier antwortet der Server mit einer HTTP 401-Nachricht, die eine Herausforderung für jeden Digest-Algorithmus enthält, den er unterstützt, in seiner Reihenfolge der Präferenz (`SHA256` und dann `MD5`).

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

Der Client fragt den Benutzer nach seinem Benutzernamen und Passwort und antwortet dann mit einer neuen Anfrage, die die Anmeldeinformationen im {{HTTPHeader("Authorization")}}-Headerfeld kodiert. Wenn der Client den MD5-Digest wählte, könnte das {{HTTPHeader("Authorization")}}-Headerfeld wie unten gezeigt aussehen:

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

Wenn der Client den SHA-256-Digest wählte, könnte das {{HTTPHeader("Authorization")}}-Headerfeld wie unten gezeigt aussehen:

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

Ein Server, der HOBA-Authentifizierung unterstützt, könnte einen `WWW-Authenticate`-Antwort-Header haben, der so aussieht:

```http
HTTP/1.1 401 Unauthorized
WWW-Authenticate: HOBA max-age="180", challenge="16:MTEyMzEyMzEyMw==1:028:https://www.example.com:80800:3:MTI48:NjgxNDdjOTctNDYxYi00MzEwLWJlOWItNGM3MDcyMzdhYjUz"
```

Die zu signierende Blob-Herausforderung besteht aus diesen Teilen: `www.example.com` mit Port 8080, das nonce ist `1123123123`, der Algorithmus zum Signieren ist RSA-SHA256, das Schlüsselkennzeichen ist `123` und schließlich ist die Herausforderung `68147c97-461b-4310-be9b-4c707237ab53`.

Ein Client würde diesen Header erhalten, die Herausforderung extrahieren, sie mit ihrem privaten Schlüssel signieren, der zum Schlüsselkennzeichen 123 in unserem Beispiel gehört, indem RSA-SHA256 verwendet wird, und dann das Ergebnis im `Authorization`-Header als durch Punkte getrennte Schlüssel-ID, Herausforderung, nonce und Signatur senden.

```http
Authorization: 123.16:MTEyMzEyMzEyMw==1:028:https://www.example.com:80800:3:MTI48:NjgxNDdjOTctNDYxYi00MzEwLWJlOWItNGM3MDcyMzdhYjUz.1123123123.<signature-of-challenge>
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTTP-Authentifizierung](/de/docs/Web/HTTP/Authentication)
- {{HTTPHeader("Authorization")}}
- {{HTTPHeader("Proxy-Authorization")}}
- {{HTTPHeader("Proxy-Authenticate")}}
- {{HTTPStatus("401")}}, {{HTTPStatus("403")}}, {{HTTPStatus("407")}}
