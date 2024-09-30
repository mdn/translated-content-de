---
title: WWW-Authenticate
slug: Web/HTTP/Headers/WWW-Authenticate
l10n:
  sourceCommit: 583d48191a7a8605d831aff357bef6cc63aef2e3
---

{{HTTPSidebar}}

Der HTTP-Header **`WWW-Authenticate`** definiert die [HTTP-Authentifizierung](/de/docs/Web/HTTP/Authentication) Methoden ("Challenges"), die möglicherweise verwendet werden, um auf eine bestimmte Ressource zuzugreifen.

> [!NOTE]
> Dieser Header ist Teil des [allgemeinen HTTP-Authentifizierungsrahmens](/de/docs/Web/HTTP/Authentication#the_general_http_authentication_framework), der mit einer Reihe von [Authentifizierungsschemata](/de/docs/Web/HTTP/Authentication#authentication_schemes) verwendet werden kann.
> Jede "Challenge" listet ein vom Server unterstütztes Schema und zusätzliche Parameter, die für diesen Schemata-Typ definiert sind, auf.

Ein Server, der [HTTP-Authentifizierung](/de/docs/Web/HTTP/Authentication) verwendet, wird auf eine Anfrage nach einer geschützten Ressource mit einer {{HTTPStatus("401")}} `Unauthorized`-Antwort reagieren.
Diese Antwort muss mindestens einen `WWW-Authenticate`-Header und mindestens eine [Challenge](/de/docs/Glossary/challenge) enthalten, um anzuzeigen, welche Authentifizierungsschemata verwendet werden können, um auf die Ressource zuzugreifen (und welche zusätzlichen Daten jedes spezifische Schema benötigt).

Mehrere Challenges sind in einem `WWW-Authenticate`-Header erlaubt, und mehrere `WWW-Authenticate`-Header sind in einer Antwort erlaubt.
Ein Server kann auch den `WWW-Authenticate`-Header in anderen Antwortnachrichten einschließen, um anzuzeigen, dass die Bereitstellung von Anmeldeinformationen die Antwort beeinflussen könnte.

Nachdem der `WWW-Authenticate`-Header empfangen wurde, wird ein Client normalerweise den Benutzer nach Anmeldeinformationen fragen und dann die Ressource erneut anfordern.
Diese neue Anfrage verwendet den {{HTTPHeader("Authorization")}}-Header, um die Anmeldeinformationen an den Server zu übermitteln, die entsprechend der ausgewählten "Challenge"-Authentifizierungsmethode kodiert sind.
Vom Client wird erwartet, dass er die sicherste der ihm bekannten Herausforderungen auswählt (beachten Sie, dass in einigen Fällen die "sicherste" Methode umstritten ist).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>[Antwortheader](/de/docs/Glossary/Response_header)</td>
    </tr>
    <tr>
      <th scope="row">[Verbotener Header-Name](/de/docs/Glossary/Forbidden_header_name)</th>
      <td>nein</td>
    </tr>
  </tbody>
</table>

## Syntax

Mindestens eine Challenge muss angegeben werden.
Mehrere Challenges können durch Kommas getrennt in einem einzelnen Header oder in einzelnen Headern angegeben werden:

```http
// Challenges specified in single header
WWW-Authenticate: challenge1, ..., challengeN

// Challenges specified in multiple headers
WWW-Authenticate: challenge1
...
WWW-Authenticate: challengeN
```

Eine einzelne Challenge hat folgendes Format. Beachten Sie, dass das Schema-Token (`<auth-scheme>`) obligatorisch ist.
Das Vorhandensein von `realm`, `token68` und anderen Parametern hängt von der Definition des ausgewählten Schemas ab.

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

Zum Beispiel erfordert die [Basis-Authentifizierung](/de/docs/Web/HTTP/Authentication#basic_authentication_scheme) `realm` und erlaubt die optionale Verwendung des `charset`-Schlüssels, unterstützt jedoch nicht `token68`.

```http
WWW-Authenticate: Basic realm=<realm>
WWW-Authenticate: Basic realm=<realm>, charset="UTF-8"
```

## Direktiven

- `<auth-scheme>`

  - : Das [Authentifizierungsschema](/de/docs/Web/HTTP/Authentication#authentication_schemes). Einige der häufigeren Typen sind (nicht fallunterscheidend): [`Basic`](/de/docs/Web/HTTP/Authentication#basic_authentication_scheme), `Digest`, `Negotiate` und `AWS4-HMAC-SHA256`.

    > [!NOTE]
    > Für weitere Informationen/Optionen siehe [HTTP-Authentifizierung > Authentication schemes](/de/docs/Web/HTTP/Authentication#authentication_schemes)

- `<realm>` {{optional_inline}}
  - : Ein String, der einen geschützten Bereich beschreibt.
    Ein Bereich ermöglicht es einem Server, die von ihm geschützten Bereiche zu unterteilen (sofern von einem Schema unterstützt, das eine solche Unterteilung erlaubt).
    Einige Clients zeigen diesen Wert dem Benutzer an, um ihn darüber zu informieren, welche Anmeldeinformationen benötigt werden — die meisten Browser zeigen dies jedoch nicht mehr an, um Phishing entgegenzuwirken.
    Der einzig zuverlässig unterstützte Zeichensatz für diesen Wert ist `us-ascii`.
    Wenn kein Bereich angegeben ist, zeigen Clients oft stattdessen einen formatierten Hostnamen an.
- `<token68>` {{optional_inline}}
  - : Ein Token, das für einige Schemas nützlich sein kann. Das Token erlaubt die 66 unreservierten URI-Zeichen plus einige andere.
    Laut Spezifikation kann es eine Base64-, Base64url-, Base32- oder Base16 (Hex)-Kodierung halten, mit oder ohne Padding, jedoch ohne Leerzeichen.

Abgesehen von `<auth-scheme>` und dem Schlüssel `realm` sind Autorisierungsparameter spezifisch für jedes [Authentifizierungsschema](/de/docs/Web/HTTP/Authentication#authentication_schemes).
Im Allgemeinen müssen Sie die relevanten Spezifikationen für diese überprüfen (Schlüssel für einen kleinen Teil von Schemas sind unten aufgeführt).

### Basic

- `<realm>`
  - : Wie [oben](#realm) beschrieben.
    Beachten Sie, dass der Bereich für die Basis-Authentifizierung obligatorisch ist.
- `charset="UTF-8"` {{optional_inline}}
  - : Teilt dem Client das bevorzugte Kodierungsschema des Servers mit, wenn er einen Benutzernamen und ein Passwort übermittelt.
    Der einzige erlaubte Wert ist die nicht fallunterscheidende Zeichenkette "UTF-8".
    Dies steht nicht im Zusammenhang mit der Kodierung der Bereichszeichenfolge.

### Digest

- `<realm>` {{optional_inline}}
  - : String, der angibt, welcher Benutzername/das Passwort verwendet werden soll.
    Sollte minimalerweise den Hostnamen beinhalten, könnte jedoch angeben, welche Benutzer oder Gruppen Zugriff haben.
- `domain` {{optional_inline}}
  - : Eine zitierte, durch Leerzeichen getrennte Liste von URI-Präfixen, die alle Orte definieren, an denen die Authentifizierungsinformationen verwendet werden können.
    Wenn dieser Schlüssel nicht angegeben ist, können die Authentifizierungsinformationen überall im Web-Stamm verwendet werden.
- `nonce`
  - : Eine vom Server angegebene zitierte Zeichenfolge, die der Server zur Steuerung der Lebensdauer verwenden kann, in der bestimmte Anmeldeinformationen als gültig angesehen werden.
    Dies muss für jede 401-Antwort eindeutig generiert werden und kann häufiger neu generiert werden (z. B. um zuzulassen, dass ein Digest nur einmal verwendet wird).
    Die Spezifikation enthält Ratschläge zu möglichen Algorithmen zur Generierung dieses Wertes.
    Der nonce-Wert ist für den Client undurchsichtig.
- `opaque`
  - : Eine vom Server angegebene zitierte Zeichenfolge, die unverändert im {{HTTPHeader("Authorization")}} zurückgegeben werden sollte.
    Dies ist für den Client undurchsichtig. Der Server wird empfohlen, Base64- oder hexadezimale Daten einzuschließen.
- `stale` {{optional_inline}}
  - : Eine nicht fallunterscheidende Flagge, die anzeigt, dass die vorherige Anfrage vom Client abgelehnt wurde, da der verwendete `nonce` zu alt (stale) ist.
    Wenn dies `true` ist, kann die Anfrage mit demselben Benutzernamen/Passwort, das mit dem neuen `nonce` verschlüsselt ist, erneut versucht werden.
    Wenn es ein anderer Wert ist, sind der Benutzername/das Passwort ungültig und müssen erneut vom Benutzer angefordert werden.
- `algorithm` {{optional_inline}}
  - : Algorithmus, der zur Erstellung des Digests verwendet wird.
    Gültige Nicht-Session-Werte sind: `"MD5"` (Standard, wenn nicht angegeben), `"SHA-256"`, `"SHA-512"`.
    Gültige Session-Werte sind: `"MD5-sess"`, `"SHA-256-sess"`, `"SHA-512-sess"`.
- `qop`
  - : Zitierte Zeichenfolge, die die vom Server unterstützte Schutzqualität angibt. Diese muss angegeben werden, und nicht erkannte Optionen müssen ignoriert werden.
    - `"auth"`: Authentifizierung
    - `"auth-int"`: Authentifizierung mit Integritätsschutz
- `charset="UTF-8"` {{optional_inline}}
  - : Teilt dem Client das bevorzugte Kodierungsschema des Servers mit, wenn er einen Benutzernamen und ein Passwort übermittelt.
    Der einzige erlaubte Wert ist die nicht fallunterscheidende Zeichenkette "UTF-8".
- `userhash` {{optional_inline}}
  - : Ein Server kann `"true"` spezifizieren, um anzuzeigen, dass es Benutzernamen-Hashing unterstützt (Standard ist `"false"`)

### HTTP Origin-Bound Authentication (HOBA)

- `<challenge>`
  - : Ein Satz von Paaren im Format '\<len\>:\<value\>', die zusammengefügt werden, um einem Client übergeben zu werden.
    Die Challenge besteht aus einem nonce, Algorithmus, Ursprung, Bereich, Schlüssel-Identifikator und der Herausforderung.
- `<max-age>`
  - : Die Anzahl der Sekunden, die von dem Zeitpunkt an, an dem die HTTP-Antwort gesendet wird, akzeptiert werden können, um auf diese Herausforderung zu antworten.
- `realm` {{optional_inline}}
  - : Wie oben im Abschnitt [Direktiven](#direktiven).

## Beispiele

### Basis-Authentifizierung

Ein Server, der nur die Basis-Authentifizierung unterstützt, könnte einen `WWW-Authenticate`-Antwortheader haben, der so aussieht:

```http
WWW-Authenticate: Basic realm="Access to the staging site", charset="UTF-8"
```

Ein User-Agent, der diesen Header erhält, würde zuerst den Benutzer nach seinem Benutzernamen und Passwort fragen und dann die Ressource erneut anfordern: diesmal unter Einschluss der (kodierten) Anmeldeinformationen im {{HTTPHeader("Authorization")}}-Header.
Der {{HTTPHeader("Authorization")}}-Header könnte so aussehen:

```http
Authorization: Basic YWxhZGRpbjpvcGVuc2VzYW1l
```

Für `"Basic"`-Authentifizierung werden die Anmeldeinformationen konstruiert, indem zuerst der Benutzername und das Passwort mit einem Doppelpunkt kombiniert wird (`aladdin:opensesame`), und dann die resultierende Zeichenfolge in [`base64`](/de/docs/Glossary/Base64) kodiert wird (`YWxhZGRpbjpvcGVuc2VzYW1l`).

> [!NOTE]
> Siehe auch [HTTP-Authentifizierung](/de/docs/Web/HTTP/Authentication) für Beispiele zur Konfiguration von Apache- oder Nginx-Servern, um Ihre Website mit HTTP-Basis-Authentifizierung kennwortgeschützt zu machen.

### Digest-Authentifizierung mit SHA-256 und MD5

> [!NOTE]
> Dieses Beispiel stammt aus {{RFC("7616")}} "HTTP Digest Access Authentication" (andere Beispiele in der Spezifikation zeigen die Verwendung von `SHA-512`, `charset` und `userhash`).

Der Client versucht, auf ein Dokument unter der URI `http://www.example.org/dir/index.html` zuzugreifen, das durch Digest-Authentifizierung geschützt ist.
Der Benutzername für dieses Dokument ist "Mufasa" und das Passwort ist "Circle of Life" (beachten Sie das einzelne Leerzeichen zwischen den Wörtern).

Wenn der Client das Dokument zum ersten Mal anfordert, wird kein {{HTTPHeader("Authorization")}}-Header-Feld gesendet.
Hier antwortet der Server mit einer HTTP 401-Nachricht, die eine Challenge für jeden Digest-Algorithmus enthält, den er unterstützt, in der Reihenfolge seiner Präferenz (`SHA256` und dann `MD5`)

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

Der Client fordert den Benutzer auf, seine Anmeldeinformationen einzugeben, und antwortet dann mit einer neuen Anfrage, die die Anmeldeinformationen im {{HTTPHeader("Authorization")}}-Header-Feld kodiert.
Wenn der Client den MD5-Digest gewählt hat, könnte das {{HTTPHeader("Authorization")}}-Header-Feld folgendermaßen aussehen:

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

Wenn der Client den SHA-256-Digest gewählt hat, könnte das {{HTTPHeader("Authorization")}}-Header-Feld folgendermaßen aussehen:

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

Ein Server, der HOBA-Authentifizierung unterstützt, könnte einen `WWW-Authenticate`-Antwortheader haben, der so aussieht:

```http
WWW-Authenticate: HOBA max-age="180", challenge="16:MTEyMzEyMzEyMw==1:028:https://www.example.com:80800:3:MTI48:NjgxNDdjOTctNDYxYi00MzEwLWJlOWItNGM3MDcyMzdhYjUz"
```

Die zu signierende Blob-Challenge wird aus diesen Teilen gemacht: www.example.com mit Port 8080, das nonce ist '1123123123', der Algorithmus zum Signieren ist RSA-SHA256, der Schlüssel-Identifikator ist 123, und schließlich ist die Herausforderung '68147c97-461b-4310-be9b-4c707237ab53'.

Ein Client würde diesen Header erhalten, die Challenge extrahieren, sie mit seinem privaten Schlüssel, der dem Schlüssel-Identifikator 123 in unserem Beispiel entspricht, unter Verwendung von RSA-SHA256 signieren und dann das Ergebnis im `Authorization`-Header als Punkt-getrennte Schlüssel-ID, Challenge, nonce und Signatur senden.

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
