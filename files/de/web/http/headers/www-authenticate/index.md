---
title: WWW-Authenticate
slug: Web/HTTP/Headers/WWW-Authenticate
l10n:
  sourceCommit: 583d48191a7a8605d831aff357bef6cc63aef2e3
---

{{HTTPSidebar}}

Der HTTP-**`WWW-Authenticate`**-Antwortheader definiert die [HTTP-Authentifizierung](/de/docs/Web/HTTP/Authentication)-Methoden ("Challenges"), die verwendet werden könnten, um Zugriff auf eine bestimmte Ressource zu erhalten.

> [!NOTE]
> Dieser Header ist Teil des [allgemeinen HTTP-Authentifizierungs-Frameworks](/de/docs/Web/HTTP/Authentication#the_general_http_authentication_framework), das mit einer Reihe von [Authentifizierungsverfahren](/de/docs/Web/HTTP/Authentication#authentication_schemes) verwendet werden kann.
> Jedes "Challenge" listet ein vom Server unterstütztes Verfahren und zusätzliche Parameter auf, die für diesen Verfahrenstyp definiert sind.

Ein Server, der die [HTTP-Authentifizierung](/de/docs/Web/HTTP/Authentication) verwendet, wird mit einer {{HTTPStatus("401")}} `Unauthorized`-Antwort auf eine Anfrage nach einer geschützten Ressource reagieren. Diese Antwort muss mindestens einen `WWW-Authenticate`-Header und mindestens eine [Challenge](/de/docs/Glossary/challenge) enthalten, um anzugeben, welche Authentifizierungsverfahren verwendet werden können, um auf die Ressource zuzugreifen (und alle zusätzlichen Daten, die jedes bestimmte Verfahren benötigt).

Mehrere Challenges sind in einem `WWW-Authenticate`-Header erlaubt und mehrere `WWW-Authenticate`-Header sind in einer Antwort erlaubt. Ein Server kann den `WWW-Authenticate`-Header auch in andere Antwortnachrichten einfügen, um anzuzeigen, dass die Angabe von Anmeldeinformationen die Antwort beeinflussen könnte.

Nachdem der `WWW-Authenticate`-Header empfangen wurde, fordert ein Client den Benutzer normalerweise zur Eingabe von Anmeldeinformationen auf und fordert dann erneut die Ressource an. Diese neue Anfrage verwendet den {{HTTPHeader("Authorization")}}-Header, um die Anmeldeinformationen an den Server zu übermitteln, die für die ausgewählte "Challenge"-Authentifizierungsmethode angemessen kodiert sind. Der Client wird erwartet, die sicherste der Challenges auszuwählen, die er versteht (beachten Sie, dass in einigen Fällen die "sicherste" Methode diskutierbar ist).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>[Antwort-Header](/de/docs/Glossary/Response_header)</td>
    </tr>
    <tr>
      <th scope="row">[Verbotener Header-Name](/de/docs/Glossary/Forbidden_header_name)</th>
      <td>nein</td>
    </tr>
  </tbody>
</table>

## Syntax

Mindestens eine Challenge muss angegeben werden. Mehrere Challenges können durch Kommas getrennt in einem einzelnen Header oder in einzelnen Headers angegeben werden:

```http
// Challenges specified in single header
WWW-Authenticate: challenge1, ..., challengeN

// Challenges specified in multiple headers
WWW-Authenticate: challenge1
...
WWW-Authenticate: challengeN
```

Eine einzelne Challenge hat folgendes Format. Beachten Sie, dass das Scheme-Token (`<auth-scheme>`) obligatorisch ist. Das Vorhandensein von `realm`, `token68` und aller anderen Parameter hängt von der Definition des ausgewählten Verfahrens ab.

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

Zum Beispiel erfordert die [Basisauthentifizierung](/de/docs/Web/HTTP/Authentication#basic_authentication_scheme) `realm` und erlaubt die optionale Verwendung des `charset`-Schlüssels, unterstützt jedoch nicht `token68`.

```http
WWW-Authenticate: Basic realm=<realm>
WWW-Authenticate: Basic realm=<realm>, charset="UTF-8"
```

## Direktiven

- `<auth-scheme>`

  - : Das [Authentifizierungsschema](/de/docs/Web/HTTP/Authentication#authentication_schemes). Einige der gebräuchlicheren Typen sind (nicht case-sensitiv): [`Basic`](/de/docs/Web/HTTP/Authentication#basic_authentication_scheme), `Digest`, `Negotiate` und `AWS4-HMAC-SHA256`.

    > [!NOTE]
    > Weitere Informationen/Optionen finden Sie unter [HTTP Authentication > Authentication schemes](/de/docs/Web/HTTP/Authentication#authentication_schemes)

- `<realm>` {{optional_inline}}
  - : Eine Zeichenkette, die einen geschützten Bereich beschreibt.
    Ein Realm erlaubt es einem Server, die Bereiche, die er schützt, zu partitionieren (wenn es von einem Schema unterstützt wird, das eine solche Partitionierung erlaubt).
    Einige Clients zeigen diesen Wert dem Benutzer an, um ihn darüber zu informieren, welche speziellen Anmeldeinformationen erforderlich sind – obwohl die meisten Browser dies nicht mehr tun, um Phishing zu verhindern.
    Das einzige zuverlässig unterstützte Zeichensatz für diesen Wert ist `us-ascii`.
    Wenn kein Realm angegeben ist, zeigen Clients oft stattdessen einen formatierten Hostnamen an.
- `<token68>` {{optional_inline}}
  - : Ein Token, das für einige Verfahren nützlich sein kann. Das Token erlaubt die 66 nicht reservierten URI-Zeichen plus einige andere.
    Laut Spezifikation kann es eine Base64-, Base64url-, Base32- oder Base16 (Hex)-Kodierung halten, mit oder ohne Padding, aber ohne Leerzeichen.

Abgesehen von `<auth-scheme>` und dem Schlüssel `realm` sind die Autorisierungsparameter spezifisch für jedes [Authentifizierungsschema](/de/docs/Web/HTTP/Authentication#authentication_schemes). Im Allgemeinen müssen Sie die relevanten Spezifikationen für diese (Schlüssel für einen kleinen Teil der Schemas sind unten aufgeführt) überprüfen.

### Basis

- `<realm>`
  - : Wie [oben](#realm).
    Beachten Sie, dass das Realm für die Basisauthentifizierung obligatorisch ist.
- `charset="UTF-8"` {{optional_inline}}
  - : Informiert den Client über das bevorzugte Kodierungsschema des Servers beim Übermitteln von Benutzername und Passwort.
    Der einzige erlaubte Wert ist die nicht case-sensitive Zeichenfolge "UTF-8".
    Dies steht nicht in Zusammenhang mit der Kodierung der Realm-Zeichenfolge.

### Digest

- `<realm>` {{optional_inline}}
  - : Eine Zeichenkette, die angibt, welchen Benutzernamen/das Passwort zu verwenden ist.
    Sollte minimal den Hostnamen beinhalten, könnte aber auch die Benutzer oder Gruppe anzeigen, die Zugang haben.
- `domain` {{optional_inline}}
  - : Eine zitierte, leerzeichengetrennte Liste der URI-Präfixe, die alle Orte definieren, an denen die Authentifizierungsinformationen verwendet werden können.
    Wenn dieser Schlüssel nicht angegeben ist, können die Authentifizierungsinformationen überall im Web-Root verwendet werden.
- `nonce`
  - : Eine vom Server angegebene, zitierte Zeichenkette, die der Server verwenden kann, um die Lebensdauer zu steuern, in der bestimmte Anmeldeinformationen als gültig angesehen werden.
    Diese muss jedes Mal einzigartig generiert werden, wenn eine 401-Antwort erfolgt, und kann öfter neu generiert werden (zum Beispiel, wenn ein Digest nur einmal verwendet werden darf).
    Die Spezifikation enthält Ratschläge zu möglichen Algorithmen zur Generierung dieses Wertes.
    Der Nonce-Wert ist für den Client undurchsichtig.
- `opaque`
  - : Eine vom Server angegebene, zitierte Zeichenkette, die unverändert in der {{HTTPHeader("Authorization")}} zurückgegeben werden sollte.
    Dies ist für den Client undurchsichtig. Es wird empfohlen, dass der Server Base64- oder Hexadezimaldaten einfügt.
- `stale` {{optional_inline}}
  - : Eine nicht case-sensitive Markierung, die angibt, dass die vorherige Anfrage vom Client abgelehnt wurde, weil der verwendete `nonce` zu alt (stale) ist.
    Wenn dies `true` ist, kann die Anfrage unter Verwendung des gleichen Benutzernamens/Passworts und des neuen `nonce` erneut versucht werden.
    Wenn es einen anderen Wert hat, sind der Benutzername/das Passwort ungültig und müssen vom Benutzer erneut angefordert werden.
- `algorithm` {{optional_inline}}
  - : Algorithmus, der zur Erstellung des Digests verwendet wird.
    Gültige nicht-sessionsbasierte Werte sind: `"MD5"` (Standard, wenn nicht angegeben), `"SHA-256"`, `"SHA-512"`.
    Gültige sessionsbasierte Werte sind: `"MD5-sess"`, `"SHA-256-sess"`, `"SHA-512-sess"`.
- `qop`
  - : Zitierte Zeichenkette, die die Qualität des vom Server unterstützten Schutzes angibt. Diese muss bereitgestellt werden, und nicht erkannte Optionen müssen ignoriert werden.
    - `"auth"`: Authentifizierung
    - `"auth-int"`: Authentifizierung mit Integritätsschutz
- `charset="UTF-8"` {{optional_inline}}
  - : Informiert den Client über das bevorzugte Kodierungsschema des Servers beim Übermitteln von Benutzername und Passwort.
    Der einzige erlaubte Wert ist die nicht case-sensitive Zeichenfolge "UTF-8".
- `userhash` {{optional_inline}}
  - : Ein Server kann `"true"` angeben, um zu kennzeichnen, dass er das Hashing des Benutzernamens unterstützt (Standard ist `"false"`)

### HTTP Origin-Bound Authentication (HOBA)

- `<challenge>`
  - : Eine Reihe von Paaren im Format '`<len>`:`<value>`', die zusammengefügt werden sollen, um sie einem Client zu übermitteln.
    Die Challenge besteht aus einem Nonce, Algorithmus, Ursprung, Realm, Schlüsselidentifier und der Challenge.
- `<max-age>`
  - : Die Anzahl der Sekunden ab dem Zeitpunkt, an dem die HTTP-Antwort gesendet wird, bis zu denen Antworten auf diese Challenge akzeptiert werden können.
- `realm` {{optional_inline}}
  - : Wie oben im [Direktiven](#direktiven)-Abschnitt.

## Beispiele

### Basisauthentifizierung

Ein Server, der nur die Basisauthentifizierung unterstützt, könnte einen `WWW-Authenticate`-Antwortheader haben, der so aussieht:

```http
WWW-Authenticate: Basic realm="Access to the staging site", charset="UTF-8"
```

Ein User-Agent, der diesen Header empfängt, würde den Benutzer zunächst nach seinem Benutzernamen und Passwort fragen und dann die Ressource erneut anfordern: dieses Mal einschließlich der (kodierten) Anmeldeinformationen im {{HTTPHeader("Authorization")}}-Header. Der {{HTTPHeader("Authorization")}}-Header könnte so aussehen:

```http
Authorization: Basic YWxhZGRpbjpvcGVuc2VzYW1l
```

Bei der `"Basic"`-Authentifizierung werden die Anmeldeinformationen erstellt, indem zuerst der Benutzername und das Passwort mit einem Doppelpunkt kombiniert werden (`aladdin:opensesame`), und dann die resultierende Zeichenfolge in [`base64`](/de/docs/Glossary/Base64) kodiert wird (`YWxhZGRpbjpvcGVuc2VzYW1l`).

> [!NOTE]
> Siehe auch [HTTP-Authentifizierung](/de/docs/Web/HTTP/Authentication) für Beispiele, wie Apache- oder Nginx-Server konfiguriert werden können, um Ihre Website mit HTTP-Basisauthentifizierung zu schützen.

### Digest-Authentifizierung mit SHA-256 und MD5

> [!NOTE]
> Dieses Beispiel ist aus {{RFC("7616")}} "HTTP Digest Access Authentication" entnommen (andere Beispiele in der Spezifikation zeigen die Verwendung von `SHA-512`, `charset` und `userhash`).

Der Client versucht, auf ein Dokument unter der URI `http://www.example.org/dir/index.html` zuzugreifen, das über Digest-Authentifizierung geschützt ist. Der Benutzername für dieses Dokument ist "Mufasa" und das Passwort ist "Circle of Life" (beachten Sie das einzelne Leerzeichen zwischen jedem Wort).

Das erste Mal, wenn der Client das Dokument anfordert, wird kein {{HTTPHeader("Authorization")}}-Header gesendet. Hier antwortet der Server mit einer HTTP-401-Nachricht, die eine Challenge für jeden Digest-Algorithmus enthält, den er unterstützt, in der Reihenfolge seiner Präferenz (`SHA256` und dann `MD5`)

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

Der Client fordert den Benutzer auf, seinen Benutzernamen und sein Passwort einzugeben, und antwortet dann mit einer neuen Anfrage, die die Anmeldeinformationen im {{HTTPHeader("Authorization")}}-Header-Feld kodiert. Wenn der Client den MD5-Digest wählte, könnte der {{HTTPHeader("Authorization")}}-Header wie unten gezeigt aussehen:

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

Wenn der Client den SHA-256-Digest wählte, könnte der {{HTTPHeader("Authorization")}}-Header wie unten gezeigt aussehen:

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

Die zu signierende Blob-Challenge wird aus diesen Teilen gebildet: www.example.com unter Verwendung des Ports 8080, das Nonce ist '1123123123', der Algorithmus für die Signierung ist RSA-SHA256, der Schlüsselidentifier ist 123, und schließlich ist die Challenge '68147c97-461b-4310-be9b-4c707237ab53'.

Ein Client würde diesen Header empfangen, die Challenge extrahieren, sie mit seinem privaten Schlüssel signieren, der im Beispiel dem Schlüsselidentifier 123 entspricht, und dann das Ergebnis im `Authorization`-Header als punktgetrennte Schlüssel-ID, Challenge, Nonce und Signatur senden.

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
