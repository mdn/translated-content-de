---
title: WWW-Authenticate header
short-title: WWW-Authenticate
slug: Web/HTTP/Reference/Headers/WWW-Authenticate
l10n:
  sourceCommit: dc788bf0ea36cb1ebe809c82aaae2c77cb3e18c0
---

Der HTTP **`WWW-Authenticate`** {{Glossary("response_header", "Response-Header")}} gibt die [HTTP-Authentifizierung](/de/docs/Web/HTTP/Guides/Authentication)-Methoden (oder {{Glossary("challenge", "Challenges")}}) an, die verwendet werden könnten, um Zugang zu einer bestimmten Ressource zu erlangen.

Dieser Header ist Teil des [allgemeinen HTTP-Authentifizierungsrahmens](/de/docs/Web/HTTP/Guides/Authentication#the_general_http_authentication_framework), der mit einer Anzahl von [Authentifizierungsschemata](/de/docs/Web/HTTP/Guides/Authentication#authentication_schemes) verwendet werden kann. Jede Challenge identifiziert ein vom Server unterstütztes Schema und zusätzliche Parameter, die für diesen Schematyp definiert sind.

Ein Server, der [HTTP-Authentifizierung](/de/docs/Web/HTTP/Guides/Authentication) verwendet, antwortet mit einer {{HTTPStatus("401", "401 Unauthorized")}}-Antwort auf eine Anfrage nach einer geschützten Ressource. Diese Antwort muss mindestens einen `WWW-Authenticate`-Header und mindestens eine Challenge enthalten, um anzuzeigen, welche Authentifizierungsschemata verwendet werden können, um auf die Ressource zuzugreifen, sowie zusätzliche Daten, die jedes spezielle Schema benötigt.

Mehrere Challenges sind in einem `WWW-Authenticate`-Header erlaubt, und mehrere `WWW-Authenticate`-Header sind in einer Antwort erlaubt. Ein Server kann auch den `WWW-Authenticate`-Header in anderen Antwortnachrichten enthalten, um anzuzeigen, dass das Bereitstellen von Anmeldeinformationen die Antwort beeinflussen könnte.

Nachdem der `WWW-Authenticate`-Header empfangen wurde, wird ein Client typischerweise den Benutzer nach Anmeldeinformationen fragen und dann die Ressource erneut anfordern. Diese neue Anfrage verwendet den {{HTTPHeader("Authorization")}}-Header, um dem Server die Anmeldeinformationen bereitzustellen, die für die ausgewählte Authentifizierungsmethode geeignet kodiert sind. Vom Client wird erwartet, dass er die sicherste der von ihm verstandenen Challenges auswählt (beachten Sie, dass in einigen Fällen die "sicherste" Methode umstritten ist).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Response-Header")}}</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
WWW-Authenticate: <challenge>
```

Ein `<challenge>` besteht aus einem `<auth-scheme>`, gefolgt von einem optionalen `<token68>` oder einer kommaseparierten Liste von `<auth-params>`:

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

Die Anwesenheit eines `token68` oder Authentifizierungsparameter hängt vom gewählten `<auth-scheme>` ab. Zum Beispiel erfordert die [Basic-Authentifizierung](/de/docs/Web/HTTP/Guides/Authentication#basic_authentication_scheme) ein `<realm>`, erlaubt optional die Verwendung des `charset`-Schlüssels, unterstützt jedoch kein `token68`:

```http
WWW-Authenticate: Basic realm="Dev", charset="UTF-8"
```

Mehrere Challenges können in einer kommaseparierten Liste gesendet werden

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
  - : Ein nicht case-sensitives Token, das das verwendete [Authentifizierungsschema](/de/docs/Web/HTTP/Guides/Authentication#authentication_schemes) angibt. Einige der gebräuchlicheren Typen sind [`Basic`](/de/docs/Web/HTTP/Guides/Authentication#basic_authentication_scheme), `Digest`, `Negotiate` und `AWS4-HMAC-SHA256`. Die IANA führt eine [Liste von Authentifizierungsschemata](https://www.iana.org/assignments/http-authschemes/http-authschemes.xhtml), aber es gibt andere Schemata, die von Hostdiensten angeboten werden.
- `<auth-param>` {{optional_inline}}
  - : Ein Authentifizierungsparameter, dessen Format vom `<auth-scheme>` abhängt. `<realm>` wird unten beschrieben, da es ein häufiger Authentifizierungsparameter unter vielen Auth-Schemata ist.
    - `<realm>` {{optional_inline}}
      - : Die Zeichenkette `realm`, gefolgt von `=` und einem in Anführungszeichen gesetzten String, der einen geschützten Bereich beschreibt, zum Beispiel `realm="Staging-Umgebung"`. Ein Realm ermöglicht es einem Server, die Bereiche, die er schützt, zu partitionieren (wenn unterstützt von einem Schema, das eine solche Partitionierung erlaubt). Einige Clients zeigen diesen Wert dem Benutzer an, um ihm mitzuteilen, welche spezifischen Anmeldeinformationen erforderlich sind – obwohl die meisten Browser dies einstellen, um Phishing entgegenzuwirken. Die einzig zuverlässig unterstützte Zeichencodierung für diesen Wert ist `us-ascii`. Wenn kein Realm angegeben ist, zeigen Clients häufig einen formatierten Hostnamen an.
- `<token68>` {{optional_inline}}
  - : Ein Token, das für einige Schemata nützlich sein kann. Das Token erlaubt die 66 nicht reservierten URI-Zeichen plus einige andere. Es kann eine {{Glossary("base64", "Base64")}}, base64url, base32 oder base16 (hex) Kodierung enthalten, mit oder ohne Padding, jedoch ohne Leerzeichen. Die token68-Alternative zu auth-param-Listen wird unterstützt, um die Kompatibilität mit älteren Authentifizierungsschemata zu gewährleisten.

Im Allgemeinen müssen Sie die relevanten Spezifikationen für die Authentifizierungsparameter prüfen, die für jedes `<auth-scheme>` benötigt werden. Die folgenden Abschnitte beschreiben Token und Auth-Parameter für einige gängige Auth-Schemata.

### Basic-Authentifizierungs-Direktiven

- `<realm>`
  - : Ein `<realm>` wie [oben beschrieben](#realm). Beachten Sie, dass das Realm für `Basic`-Authentifizierung obligatorisch ist.
- `charset="UTF-8"` {{optional_inline}}
  - : Teilt dem Client das bevorzugte Kodierungsschema des Servers beim Übermitteln von Benutzername und Passwort mit. Der einzige erlaubte Wert ist die nicht case-sensible Zeichenkette `UTF-8`. Dies steht nicht im Zusammenhang mit der Kodierung der Realm-Zeichenkette.

### Digest-Authentifizierungs-Direktiven

- `<realm>` {{optional_inline}}
  - : Ein `<realm>` wie [oben beschrieben](#realm), das angibt, welchen Benutzernamen/das Passwort zu verwenden ist. Sollte mindestens den Hostnamen einschließen, könnte aber angeben, welche Benutzer oder Gruppen Zugriff haben.
- `domain` {{optional_inline}}
  - : Eine in Anführungszeichen gesetzte, durch Leerzeichen getrennte Liste von URI-Präfixen, die alle Orte definieren, an denen die Authentifizierungsinformationen verwendet werden können. Wenn dieser Schlüssel nicht angegeben ist, können die Authentifizierungsinformationen überall im Web-Root verwendet werden.
- `nonce`
  - : Eine vom Server festgelegte Zeichenkette, die vom Server verwendet werden kann, um die Gültigkeitsdauer zu steuern, in der bestimmte Anmeldeinformationen als gültig betrachtet werden. Diese muss jedes Mal, wenn eine 401-Antwort erstellt wird, eindeutig generiert werden, und kann öfter regeneriert werden (zum Beispiel um zu erlauben, dass ein Digest nur einmal verwendet wird). Die Spezifikation enthält Empfehlungen zu möglichen Algorithmen für die Erzeugung dieses Werts. Der {{Glossary("Nonce", "Nonce")}}-Wert ist für den Client undurchsichtig.
- `opaque`
  - : Eine vom Server festgelegte Zeichenkette, die unverändert im {{HTTPHeader("Authorization")}} zurückgegeben werden sollte. Diese ist für den Client undurchsichtig. Es wird empfohlen, dass der Server Base64- oder Hexadezimaldaten enthält.
- `stale` {{optional_inline}}
  - : Eine nicht case-sensible Flagge, die angibt, dass die vorherige Anfrage des Clients zurückgewiesen wurde, weil die verwendete `nonce` zu alt (stale) ist. Wenn dies `true` ist, kann die Anfrage mit demselben Benutzernamen/Passwort wiederholt werden, das unter Verwendung der neuen `nonce` verschlüsselt wurde. Wenn es sich um einen anderen Wert handelt, sind der Benutzername/das Passwort ungültig und müssen vom Benutzer erneut angefordert werden.
- `algorithm` {{optional_inline}}
  - : Eine Zeichenkette, die den Algorithmus angibt, der zur Erstellung eines Digests verwendet wird. Gültige Nicht-Session-Werte sind: `MD5` (Standard, wenn `algorithm` nicht angegeben ist), `SHA-256`, `SHA-512`. Gültige Session-Werte sind: `MD5-sess`, `SHA-256-sess`, `SHA-512-sess`.
- `qop`
  - : In Anführungszeichen gesetzte Zeichenkette, die die vom Server unterstützte Schutzqualität angibt. Diese muss bereitgestellt werden, und nicht erkannte Optionen müssen ignoriert werden.
    - `"auth"`: Authentifizierung
    - `"auth-int"`: Authentifizierung mit Integritätsschutz
- `charset="UTF-8"` {{optional_inline}}
  - : Teilt dem Client das bevorzugte Kodierungsschema des Servers beim Übermitteln von Benutzername und Passwort mit. Der einzige erlaubte Wert ist die nicht case-sensible Zeichenkette "UTF-8".
- `userhash` {{optional_inline}}
  - : Ein Server kann `"true"` angeben, um zu zeigen, dass es Username-Hashing unterstützt (Standard ist `"false"`)

### HTTP Origin-Bound Authentication (HOBA)

- `<challenge>`
  - : Eine Reihe von Paaren im Format von `<len>:<value>`, die gemeinsam an einen Client übergeben werden. Die Challenge besteht aus einem Nonce, Algorithmus, Ursprung, Realm, Schlüsselidentifikator und der Challenge.
- `<max-age>`
  - : Die Anzahl von Sekunden, vom Zeitpunkt der HTTP-Antwort an, in denen Antworten auf diese Challenge akzeptiert werden können.
- `<realm>` {{optional_inline}}
  - : Wie oben im Abschnitt [Direktiven](#direktiven) beschrieben.

## Beispiele

### Bereitstellung mehrerer Authentifizierungs-Challenges

Mehrere Challenges können in einem einzelnen Response-Header angegeben werden:

```http
HTTP/1.1 401 Unauthorized
WWW-Authenticate: challenge1, …, challengeN
```

Mehrere Challenges können in separaten `WWW-Authenticate`-Headers in der gleichen Antwort gesendet werden:

```http
HTTP/1.1 401 Unauthorized
WWW-Authenticate: challenge1
WWW-Authenticate: challengeN
```

### Basic-Authentifizierung

Ein Server, der nur die Basic-Authentifizierung unterstützt, könnte einen `WWW-Authenticate`-Response-Header haben, der folgendermaßen aussieht:

```http
HTTP/1.1 401 Unauthorized
WWW-Authenticate: Basic realm="Staging server", charset="UTF-8"
```

Ein User-Agent, der diesen Header empfängt, würde zunächst den Benutzer nach seinem Benutzernamen und Passwort fragen und dann die Ressource erneut mit den kodierten Anmeldeinformationen im `Authorization`-Header anfordern. Der `Authorization`-Header könnte folgendermaßen aussehen:

```http
Authorization: Basic YWxhZGRpbjpvcGVuc2VzYW1l
```

Für die `Basic`-Authentifizierung werden die Anmeldeinformationen erstellt, indem zuerst der Benutzername und das Passwort mit einem Doppelpunkt kombiniert werden (`aladdin:opensesame`), und das resultierende Zeichenfolgen dann in {{Glossary("Base64", "`Base64`")}} kodiert wird (`YWxhZGRpbjpvcGVuc2VzYW1l`).

> [!NOTE]
> Siehe auch [HTTP-Authentifizierung](/de/docs/Web/HTTP/Guides/Authentication) für Beispiele, wie Sie Apache- oder Nginx-Server so konfigurieren, dass Ihre Seite mit HTTP-Basisauthentifizierung passwortgeschützt ist.

### Digest-Authentifizierung mit SHA-256 und MD5

> [!NOTE]
> Dieses Beispiel stammt aus {{RFC("7616")}} "HTTP Digest Access Authentication" (andere Beispiele in der Spezifikation zeigen die Verwendung von `SHA-512`, `charset` und `userhash`).

Der Client versucht, auf ein Dokument unter der URI `http://www.example.org/dir/index.html` zuzugreifen, das über Digest-Authentifizierung geschützt ist. Der Benutzername für dieses Dokument ist "Mufasa" und das Passwort ist "Circle of Life" (beachten Sie den einzelnen Abstand zwischen jedem der Worte).

Das erste Mal, wenn der Client das Dokument anfordert, wird kein {{HTTPHeader("Authorization")}}-Headerfeld gesendet. Hier antwortet der Server mit einer HTTP 401-Nachricht, die eine Herausforderung für jeden Digest-Algorithmus enthält, den er unterstützt, in der Reihenfolge seiner Präferenz (`SHA256` und danach `MD5`)

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

Der Client fordert den Benutzer nach seinem Benutzernamen und Passwort auf und antwortet dann mit einer neuen Anfrage, die die Anmeldeinformationen im {{HTTPHeader("Authorization")}}-Headerfeld kodiert. Wenn der Client den MD5-Digest auswählt, könnte das {{HTTPHeader("Authorization")}}-Headerfeld wie unten gezeigt aussehen:

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

Wenn der Client den SHA-256-Digest auswählt, könnte das {{HTTPHeader("Authorization")}}-Headerfeld wie unten gezeigt aussehen:

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

Ein Server, der HOBA-Authentifizierung unterstützt, könnte einen `WWW-Authenticate`-Response-Header haben, der folgendermaßen aussieht:

```http
HTTP/1.1 401 Unauthorized
WWW-Authenticate: HOBA max-age="180", challenge="16:MTEyMzEyMzEyMw==1:028:https://www.example.com:8080:3:MTI48:NjgxNDdjOTctNDYxYi00MzEwLWJlOWItNGM3MDcyMzdhYjUz"
```

Die zu signierende Blob-Challenge setzt sich aus folgenden Teilen zusammen: `www.example.com` unter Verwendung des Ports 8080, der Nonce ist `1123123123`, der Algorithmus zur Signierung ist RSA-SHA256, der Schlüsselidentifikator ist `123`, und schließlich die Challenge ist `68147c97-461b-4310-be9b-4c707237ab53`.

Ein Client würde diesen Header empfangen, die Challenge extrahieren, sie mit ihrem privaten Schlüssel signieren, der dem Schlüsselidentifikator 123 in unserem Beispiel entspricht, und dann das Ergebnis im `Authorization`-Header als durch Punkte getrennte Schlüssel-ID, Challenge, Nonce, und Signatur senden.

```http
Authorization: 123.16:MTEyMzEyMzEyMw==1:028:https://www.example.com:8080:3:MTI48:NjgxNDdjOTctNDYxYi00MzEwLWJlOWItNGM3MDcyMzdhYjUz.1123123123.<signature-of-challenge>
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTTP-Authentifizierung](/de/docs/Web/HTTP/Guides/Authentication)
- {{HTTPHeader("Authorization")}}
- {{HTTPHeader("Proxy-Authorization")}}
- {{HTTPHeader("Proxy-Authenticate")}}
- {{HTTPStatus("401")}}, {{HTTPStatus("403")}}, {{HTTPStatus("407")}}
