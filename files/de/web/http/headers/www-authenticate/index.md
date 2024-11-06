---
title: WWW-Authenticate
slug: Web/HTTP/Headers/WWW-Authenticate
l10n:
  sourceCommit: 6eb6ba6b7f694c0aef5db2bfc7a8e6c0d11ef2cc
---

{{HTTPSidebar}}

Der HTTP-**`WWW-Authenticate`**-Antwortheader definiert die [HTTP-Authentifizierungsmethoden](/de/docs/Web/HTTP/Authentication) („Herausforderungen“), die zur Zugriffsgewährung auf eine spezifische Ressource verwendet werden können.

> [!NOTE]
> Dieser Header ist Teil des [allgemeinen HTTP-Authentifizierungsrahmens](/de/docs/Web/HTTP/Authentication#the_general_http_authentication_framework), der mit einer Reihe von [Authentifizierungsschemata](/de/docs/Web/HTTP/Authentication#authentication_schemes) verwendet werden kann. Jede „Herausforderung“ listet ein vom Server unterstütztes Schema und zusätzliche Parameter auf, die für diesen Schematyp definiert sind.

Ein Server, der [HTTP-Authentifizierung](/de/docs/Web/HTTP/Authentication) verwendet, antwortet mit einer {{HTTPStatus("401")}} `Unauthorized`-Antwort auf eine Anforderung für eine geschützte Ressource. Diese Antwort muss mindestens einen `WWW-Authenticate`-Header und mindestens eine {{Glossary("challenge", "Herausforderung")}} enthalten, um anzugeben, welche Authentifizierungsschemata zum Zugriff auf die Ressource verwendet werden können (sowie alle zusätzlichen Daten, die jedes spezifische Schema benötigt).

Mehrere Herausforderungen sind in einem `WWW-Authenticate`-Header erlaubt, und mehrere `WWW-Authenticate`-Header sind in einer Antwort erlaubt. Ein Server kann den `WWW-Authenticate`-Header auch in anderen Antwortnachrichten einschließen, um anzuzeigen, dass die Angabe von Anmeldedaten die Antwort beeinflussen könnte.

Nachdem der `WWW-Authenticate`-Header empfangen wurde, wird der Client typischerweise den Benutzer nach Anmeldedaten fragen und dann die Ressource erneut anfordern. Diese neue Anfrage verwendet den {{HTTPHeader("Authorization")}}-Header, um dem Server die Anmeldedaten bereitzustellen, die für die ausgewählte "Challenge"-Authentifizierungsmethode entsprechend kodiert sind. Der Client sollte die sicherste der Herausforderungen auswählen, die er versteht (beachten Sie, dass in einigen Fällen die "sicherste" Methode umstritten ist).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>{{Glossary("Response_header", "Antwortheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Headername")}}</th>
      <td>nein</td>
    </tr>
  </tbody>
</table>

## Syntax

Mindestens eine Herausforderung muss spezifiziert werden. Mehrere Herausforderungen können, durch Kommas getrennt, in einem einzelnen Header oder in individuellen Headern spezifiziert werden:

```http
// Challenges specified in single header
WWW-Authenticate: challenge1, ..., challengeN

// Challenges specified in multiple headers
WWW-Authenticate: challenge1
...
WWW-Authenticate: challengeN
```

Eine einzelne Herausforderung hat folgendes Format. Beachten Sie, dass das Scheme-Token (`<auth-scheme>`) obligatorisch ist. Das Vorhandensein von `realm`, `token68` und anderen Parametern hängt von der Definition des ausgewählten Schemas ab.

```http
// Possible challenge formats (scheme dependent)
WWW-Authenticate: <auth-scheme>
WWW-Authenticate: <auth-scheme> realm=<realm>
WWW-Authenticate: <auth-scheme> token68
WWW-Authenticate: <auth-scheme> auth-param1=token1, ..., auth-paramN=auth-paramN-token
WWW-Authenticate: <auth-scheme> realm=<realm> token68
WWW-Authenticate: <auth-scheme> realm=<realm> token68 auth-param1=auth-param1-token , ..., auth-paramN=auth-paramN-token
WWW-Authenticate: <auth-scheme> realm=<realm> auth-param1=auth-param1-token, ..., auth-paramN=auth-paramN-token
WWW-Authenticate: <auth-scheme> token68 auth-param1=auth-param1-token, ..., auth-paramN=auth-paramN-token
```

Zum Beispiel erfordert die [Basic-Authentifizierung](/de/docs/Web/HTTP/Authentication#basic_authentication_scheme) `realm` und erlaubt die optionale Verwendung des `charset`-Schlüssels, unterstützt jedoch nicht `token68`.

```http
WWW-Authenticate: Basic realm=<realm>
WWW-Authenticate: Basic realm=<realm>, charset="UTF-8"
```

## Direktiven

- `<auth-scheme>`

  - : Das [Authentifizierungsschema](/de/docs/Web/HTTP/Authentication#authentication_schemes). Einige der häufigeren Typen sind (nicht fallunterscheidend): [`Basic`](/de/docs/Web/HTTP/Authentication#basic_authentication_scheme), `Digest`, `Negotiate` und `AWS4-HMAC-SHA256`.

    > [!NOTE]
    > Für weitere Informationen/Optionen siehe [HTTP-Authentifizierung > Authentifizierungsschemata](/de/docs/Web/HTTP/Authentication#authentication_schemes)

- `<realm>` {{optional_inline}}
  - : Eine Zeichenfolge, die einen geschützten Bereich beschreibt. Ein realm ermöglicht einem Server, die von ihm geschützten Bereiche zu partitionieren (wenn dies von einem Schema unterstützt wird, das eine solche Partitionierung zulässt). Einige Clients zeigen diesen Wert dem Benutzer, um ihn darüber zu informieren, welche spezifischen Anmeldedaten erforderlich sind — obwohl die meisten Browser dies nicht mehr tun, um Phishing entgegenzuwirken. Das einzige zuverlässig unterstützte Zeichensatz für diesen Wert ist `us-ascii`. Wenn kein realm angegeben ist, zeigen Clients oft stattdessen einen formatierten Hostnamen an.
- `<token68>` {{optional_inline}}
  - : Ein Token, das für einige Schemata nützlich sein kann. Das Token erlaubt die 66 unreservierten URI-Zeichen plus einige andere. Laut der Spezifikation kann es eine Base64-, Base64url-, Base32- oder Base16- (Hex-)Kodierung enthalten, mit oder ohne Auffüllung, jedoch ohne Leerzeichen.

Abgesehen von `<auth-scheme>` und dem Schlüssel `realm` sind Autorisierungsparameter spezifisch für jedes [Authentifizierungsschema](/de/docs/Web/HTTP/Authentication#authentication_schemes). Im Allgemeinen müssen Sie die relevanten Spezifikationen für diese überprüfen (Schlüssel für eine kleine Untergruppe von Schemata sind unten aufgeführt).

### Basic

- `<realm>`
  - : Wie [oben](#realm). Beachten Sie, dass das realm für die Basic-Authentifizierung obligatorisch ist.
- `charset="UTF-8"` {{optional_inline}}
  - : Teilt dem Client das bevorzugte Kodierungsschema des Servers mit, wenn ein Benutzername und ein Passwort übermittelt werden. Der einzige erlaubte Wert ist die nicht fallunterscheidende Zeichenfolge "UTF-8". Dies bezieht sich nicht auf die Kodierung der realm-Zeichenkette.

### Digest

- `<realm>` {{optional_inline}}
  - : Zeichenkette, die angibt, welchen Benutzernamen/Passwort zu verwenden ist. Sollte mindestens den Hostnamen einschließen, kann aber auch die Benutzer oder Gruppe angeben, die Zugriff haben.
- `domain` {{optional_inline}}
  - : Eine in Anführungszeichen gesetzte, leerzeichengetrennte Liste von URI-Präfixen, die alle Orte definiert, an denen die Authentifizierungsinformationen verwendet werden dürfen. Wenn dieser Schlüssel nicht angegeben ist, können die Authentifizierungsinformationen überall auf dem Web-Root verwendet werden.
- `nonce`
  - : Eine vom Server festgelegte in Anführungszeichen gesetzte Zeichenfolge, die der Server verwenden kann, um die Lebensdauer zu steuern, in der bestimmte Anmeldedaten als gültig angesehen werden. Diese muss bei jeder 401-Antwort eindeutig generiert werden und kann öfter neu generiert werden (z. B. um zu erlauben, dass ein Digest nur einmal verwendet wird). Die Spezifikation enthält Ratschläge zu möglichen Algorithmen zur Generierung dieses Werts. Der nonce-Wert ist für den Client undurchsichtig.
- `opaque`
  - : Eine vom Server festgelegte in Anführungszeichen gesetzte Zeichenfolge, die unverändert in der {{HTTPHeader("Authorization")}} zurückgegeben werden sollte. Dies ist für den Client undurchsichtig. Dem Server wird empfohlen, Base64- oder hexadezimale Daten zu verwenden.
- `stale` {{optional_inline}}
  - : Ein nicht fallunterscheidendes Flag, das angibt, dass die vorherige Anforderung des Clients abgelehnt wurde, da der verwendete `nonce` zu alt (stale) ist. Wenn dies `true` ist, kann die Anfrage mit demselben Benutzername/Passwort unter Verwendung des neuen `nonce` erneut versucht werden. Wenn es einen anderen Wert hat, sind der Benutzername/das Passwort ungültig und müssen vom Benutzer neu abgefragt werden.
- `algorithm` {{optional_inline}}
  - : Algorithmus, der zum Erzeugen des Digests verwendet wird. Gültige Nicht-Sitzungswerte sind: `"MD5"` (Standard, wenn nicht angegeben), `"SHA-256"`, `"SHA-512"`. Gültige Sitzungswerte sind: `"MD5-sess"`, `"SHA-256-sess"`, `"SHA-512-sess"`.
- `qop`
  - : In Anführungszeichen gesetzte Zeichenfolge, die die vom Server unterstützte Qualität des Schutzes angibt. Dies muss angegeben werden und nicht erkannte Optionen müssen ignoriert werden.
    - `"auth"`: Authentifizierung
    - `"auth-int"`: Authentifizierung mit Integritätsschutz
- `charset="UTF-8"` {{optional_inline}}
  - : Teilt dem Client das bevorzugte Kodierungsschema des Servers mit, wenn ein Benutzername und ein Passwort übermittelt werden. Der einzige erlaubte Wert ist die nicht fallunterscheidende Zeichenfolge "UTF-8".
- `userhash` {{optional_inline}}
  - : Ein Server kann `"true"` angeben, um anzuzeigen, dass er die Benutzername-Hashing unterstützt (Standard ist `"false"`)

### HTTP Origin-Bound Authentication (HOBA)

- `<challenge>`
  - : Ein Satz von Paaren im Format `<len>:<value>`, die zusammengefügt werden, um einem Client übergeben zu werden. Die Herausforderung besteht aus einem nonce, Algorithmus, Ursprung, realm, Schlüsselidentifier und der Herausforderung.
- `<max-age>`
  - : Die Anzahl der Sekunden ab der Ausgabe der HTTP-Antwort, für die Antworten auf diese Herausforderung akzeptiert werden können.
- `realm` {{optional_inline}}
  - : Wie oben im [Direktiven](#direktiven)-Abschnitt.

## Beispiele

### Basic-Authentifizierung

Ein Server, der nur die Basic-Authentifizierung unterstützt, könnte einen `WWW-Authenticate`-Antwortheader haben, der wie folgt aussieht:

```http
WWW-Authenticate: Basic realm="Access to the staging site", charset="UTF-8"
```

Ein User-Agent, der diesen Header empfängt, würde zuerst den Benutzer nach seinem Benutzernamen und Passwort fragen und dann die Ressource erneut anfordern: diesmal mit den (kodierten) Anmeldedaten im {{HTTPHeader("Authorization")}}-Header. Der {{HTTPHeader("Authorization")}}-Header könnte wie folgt aussehen:

```http
Authorization: Basic YWxhZGRpbjpvcGVuc2VzYW1l
```

Für die `"Basic"`-Authentifizierung werden die Anmeldedaten erstellt, indem zuerst der Benutzername und das Passwort mit einem Doppelpunkt verbunden werden (`aladdin:opensesame`), gefolgt von der Kodierung des resultierenden Strings in {{Glossary("Base64", "`base64`")}} (`YWxhZGRpbjpvcGVuc2VzYW1l`).

> [!NOTE]
> Siehe auch [HTTP-Authentifizierung](/de/docs/Web/HTTP/Authentication) für Beispiele, wie Apache- oder Nginx-Server konfiguriert werden können, um Ihre Site mit HTTP-Basisauthentifizierung kennwortzuschützen.

### Digest-Authentifizierung mit SHA-256 und MD5

> [!NOTE]
> Dieses Beispiel stammt aus {{RFC("7616")}} "HTTP Digest Access Authentication" (andere Beispiele in der Spezifikation zeigen die Verwendung von `SHA-512`, `charset` und `userhash`).

Der Client versucht, auf ein Dokument unter der URI `http://www.example.org/dir/index.html` zuzugreifen, das durch Digest-Authentifizierung geschützt ist. Der Benutzername für dieses Dokument ist "Mufasa" und das Passwort ist "Circle of Life" (achten Sie auf den einzelnen Leerzeichen zwischen den Wörtern).

Beim ersten Mal, wenn der Client das Dokument anfordert, wird kein {{HTTPHeader("Authorization")}}-Headerfeld gesendet. Hier antwortet der Server mit einer HTTP-401-Nachricht, die eine Herausforderung für jeden Digest-Algorithmus enthält, den er in seiner Präferenzreihenfolge unterstützt (`SHA256` und dann `MD5`).

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

Der Client fordert den Benutzer auf, seinen Benutzernamen und sein Passwort einzugeben und antwortet dann mit einer neuen Anfrage, die die Anmeldedaten im {{HTTPHeader("Authorization")}}-Headerfeld kodiert. Wenn sich der Client für den MD5-Digest entscheidet, könnte das {{HTTPHeader("Authorization")}}-Headerfeld wie unten gezeigt aussehen:

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

Wenn sich der Client für den SHA-256-Digest entscheidet, könnte das {{HTTPHeader("Authorization")}}-Headerfeld wie unten gezeigt aussehen:

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

Ein Server, der HOBA-Authentifizierung unterstützt, könnte einen `WWW-Authenticate`-Antwortheader haben, der wie folgt aussieht:

```http
WWW-Authenticate: HOBA max-age="180", challenge="16:MTEyMzEyMzEyMw==1:028:https://www.example.com:80800:3:MTI48:NjgxNDdjOTctNDYxYi00MzEwLWJlOWItNGM3MDcyMzdhYjUz"
```

Der zu signierende Blobb besteht aus diesen Teilen: `www.example.com` mit Port 8080, das nonce ist '1123123123', der Signaturalgorithmus ist RSA-SHA256, der Schlüsselidentifier ist 123 und schließlich die Herausforderung ist '68147c97-461b-4310-be9b-4c707237ab53'.

Ein Client würde diesen Header empfangen, die Herausforderung extrahieren, mit seinem privaten Schlüssel unterschreiben, der dem Schlüsselidentifier 123 in unserem Beispiel mit RSA-SHA256 entspricht, und dann das Ergebnis im Header `Authorization` als punktgetrennter Schlüssel-ID, Herausforderung, nonce und Signatur senden.

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
