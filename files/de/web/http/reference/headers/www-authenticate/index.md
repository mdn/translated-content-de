---
title: WWW-Authenticate header
short-title: WWW-Authenticate
slug: Web/HTTP/Reference/Headers/WWW-Authenticate
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Der HTTP **`WWW-Authenticate`** {{Glossary("response_header", "Antwort-Header")}} gibt die [HTTP-Authentifizierungs](/de/docs/Web/HTTP/Guides/Authentication)methoden (oder {{Glossary("challenge", "Herausforderungen")}}) an, die verwendet werden könnten, um auf eine bestimmte Ressource zuzugreifen.

Dieser Header ist Teil des [allgemeinen HTTP-Authentifizierungsframeworks](/de/docs/Web/HTTP/Guides/Authentication#the_general_http_authentication_framework), das mit einer Reihe von [Authentifizierungsschemata](/de/docs/Web/HTTP/Guides/Authentication#authentication_schemes) verwendet werden kann. Jede Herausforderung identifiziert ein vom Server unterstütztes Schema und zusätzliche Parameter, die für diesen Schematyp definiert sind.

Ein Server, der [HTTP-Authentifizierung](/de/docs/Web/HTTP/Guides/Authentication) verwendet, wird mit einer Antwort {{HTTPStatus("401", "401 Unauthorized")}} auf eine Anfrage für eine geschützte Ressource reagieren. Diese Antwort muss mindestens einen `WWW-Authenticate`-Header und mindestens eine Herausforderung enthalten, um anzuzeigen, welche Authentifizierungsschemata verwendet werden können, um auf die Ressource zuzugreifen, und welche zusätzlichen Daten jedes spezifische Schema benötigt.

Mehrere Herausforderungen sind in einem `WWW-Authenticate`-Header zulässig, und mehrere `WWW-Authenticate`-Header sind in einer Antwort zulässig. Ein Server kann auch den `WWW-Authenticate`-Header in anderen Antwortnachrichten einfügen, um anzuzeigen, dass die Bereitstellung von Anmeldeinformationen die Antwort beeinflussen könnte.

Nach dem Empfang des `WWW-Authenticate`-Headers fordert ein Client den Benutzer in der Regel zur Eingabe von Anmeldeinformationen auf und fordert dann die Ressource erneut an. Diese neue Anfrage verwendet den {{HTTPHeader("Authorization")}}-Header, um die Anmeldeinformationen an den Server zu übermitteln, die für die ausgewählte Authentifizierungsmethode entsprechend codiert sind. Der Client wird erwartet, die sicherste der Herausforderungen auszuwählen, die er versteht (beachten Sie, dass in einigen Fällen die "sicherste" Methode diskutiert werden kann).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungs-Header")}}</th>
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

Das Vorhandensein eines `token68` oder von Authentifizierungsparametern hängt vom ausgewählten `<auth-scheme>` ab. Zum Beispiel erfordert die [Basic-Authentifizierung](/de/docs/Web/HTTP/Guides/Authentication#basic_authentication_scheme) ein `<realm>` und erlaubt die optionale Verwendung des `charset`-Schlüssels, unterstützt jedoch keinen `token68`:

```http
WWW-Authenticate: Basic realm="Dev", charset="UTF-8"
```

Mehrere Herausforderungen können in einer kommagetrennten Liste gesendet werden

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
  - : Ein Groß-/Kleinschreibung ignorierendes Token, das das verwendete [Authentifizierungsschema](/de/docs/Web/HTTP/Guides/Authentication#authentication_schemes) angibt. Einige der häufigeren Typen sind [`Basic`](/de/docs/Web/HTTP/Guides/Authentication#basic_authentication_scheme), `Digest`, `Negotiate` und `AWS4-HMAC-SHA256`. IANA führt eine [Liste der Authentifizierungsschemata](https://www.iana.org/assignments/http-authschemes/http-authschemes.xhtml), aber es gibt andere Schemata, die von Hostdiensten angeboten werden.
- `<auth-param>` {{optional_inline}}
  - : Ein Authentifizierungsparameter, dessen Format vom `<auth-scheme>` abhängt. `<realm>` wird unten beschrieben, da er ein gemeinsamer Authentifizierungsparameter unter vielen Authentifizierungsschemata ist.
    - `<realm>` {{optional_inline}}
      - : Der String `realm` gefolgt von `=` und einem Anführungszeichen, das einen geschützten Bereich beschreibt, zum Beispiel `realm="staging environment"`. Ein Bereich ermöglicht es einem Server, die Bereiche, die er schützt, zu partitionieren (sofern unterstützt von einem Schema, das eine solche Partitionierung zulässt). Einige Clients zeigen diesen Wert dem Benutzer an, um ihm mitzuteilen, welche spezifischen Anmeldeinformationen erforderlich sind - obwohl die meisten Browser dies nicht mehr tun, um Phishing entgegenzuwirken. Der einzige verlässlich unterstützte Zeichensatz für diesen Wert ist `us-ascii`. Wenn kein Bereich angegeben ist, zeigen Clients oft stattdessen einen formatierten Hostnamen an.
- `<token68>` {{optional_inline}}
  - : Ein Token, das für einige Schemata nützlich sein kann. Das Token erlaubt die 66 nicht reservierten URI-Zeichen plus einige weitere. Es kann eine {{Glossary("base64", "base64")}}, base64url, base32 oder base16 (hex) Kodierung enthalten, mit oder ohne Padding, jedoch ohne Leerzeichen. Die token68-Alternative zu auth-param-Listen wird zur Konsistenz mit älteren Authentifizierungsschemata unterstützt.

Allgemein müssen Sie die relevanten Spezifikationen für die erforderlichen Authentifizierungsparameter jedes `<auth-scheme>` überprüfen. Die folgenden Abschnitte beschreiben Token und Authentifizierungsparameter für einige gängige Authentifizierungsschemata.

### Basic-Authentifizierungs-Direktiven

- `<realm>`
  - : Ein `<realm>` wie [oben beschrieben](#realm). Beachten Sie, dass der Bereich für die `Basic`-Authentifizierung obligatorisch ist.
- `charset="UTF-8"` {{optional_inline}}
  - : Teilt dem Client das bevorzugte Kodierungsschema des Servers bei der Übermittlung eines Benutzernamens und Passworts mit. Der einzige erlaubte Wert ist der Groß-/Kleinschreibung nicht beachtende String `UTF-8`. Dies bezieht sich nicht auf die Kodierung des Bereichs-Strings.

### Digest-Authentifizierungs-Direktiven

- `<realm>` {{optional_inline}}
  - : Ein `<realm>` wie [oben beschrieben](#realm), das angibt, welchen Benutzernamen/Passwort zu verwenden ist. Sollte mindestens den Hostnamen enthalten, könnte aber auch anzeigen, welche Benutzer oder Gruppe Zugriff haben.
- `domain` {{optional_inline}}
  - : Eine zitierte, leerzeichengetrennte Liste von URI-Präfixen, die alle Orte definieren, an denen die Authentifizierungsinformationen verwendet werden dürfen. Wenn dieser Schlüssel nicht angegeben ist, dürfen die Authentifizierungsinformationen überall auf dem Webroot verwendet werden.
- `nonce`
  - : Ein serverdefinierter zitierter String, den der Server verwenden kann, um die Lebensdauer zu steuern, in der bestimmte Anmeldeinformationen als gültig betrachtet werden. Dieser muss jedes Mal einzigartig generiert werden, wenn eine 401-Antwort erfolgt, und kann öfter regeneriert werden (zum Beispiel, um zu erlauben, dass ein Digest nur einmal verwendet wird). Die Spezifikation enthält Hinweise auf mögliche Algorithmen zur Generierung dieses Wertes. Der Nonce-Wert ist für den Client undurchsichtig.
- `opaque`
  - : Ein serverdefinierter zitierter String, der unverändert im {{HTTPHeader("Authorization")}}-Header zurückgegeben werden sollte. Dies ist für den Client undurchsichtig. Der Server wird empfohlen, Base64- oder hexadezimale Daten einzuschließen.
- `stale` {{optional_inline}}
  - : Ein Groß-/Kleinschreibung nicht beachtendes Flag, das angibt, dass die vorherige Anfrage des Clients abgelehnt wurde, weil der verwendete `nonce` zu alt ist (stale). Wenn dies `true` ist, kann die Anfrage mit demselben Benutzernamen/Passwort unter Verwendung des neuen `nonce` verschlüsselt erneut versucht werden. Wenn es ein anderer Wert ist, sind der Benutzername/das Passwort ungültig und müssen vom Benutzer erneut angefordert werden.
- `algorithm` {{optional_inline}}
  - : Ein String, der den Algorithmus zum Erzeugen eines Digest angibt. Gültige Nicht-Session-Werte sind: `MD5` (Standard, wenn `algorithm` nicht angegeben ist), `SHA-256`, `SHA-512`. Gültige Session-Werte sind: `MD5-sess`, `SHA-256-sess`, `SHA-512-sess`.
- `qop`
  - : Ein zitierter String, der die Qualität des durch den Server unterstützten Schutzes angibt. Dies muss bereitgestellt werden, und unbekannte Optionen müssen ignoriert werden.
    - `"auth"`: Authentifizierung
    - `"auth-int"`: Authentifizierung mit Integritätsschutz
- `charset="UTF-8"` {{optional_inline}}
  - : Teilt dem Client das bevorzugte Kodierungsschema des Servers bei der Übermittlung eines Benutzernamens und Passworts mit. Der einzige erlaubte Wert ist der Groß-/Kleinschreibung nicht beachtende String "UTF-8".
- `userhash` {{optional_inline}}
  - : Ein Server kann `"true"` angeben, um anzuzeigen, dass er die Benutzernameverschlüsselung unterstützt (Standard ist `"false"`).

### HTTP Origin-Bound Authentication (HOBA)

- `<challenge>`
  - : Eine Reihe von Paaren im Format `<len>:<value>`, die zusammengefügt werden, um einem Client übergeben zu werden. Die Herausforderung besteht aus einem Nonce, Algorithmus, Ursprung, Bereich, Schlüsselkennzeichen und der Herausforderung.
- `<max-age>`
  - : Die Anzahl der Sekunden ab dem Zeitpunkt, an dem die HTTP-Antwort gesendet wird, für die Antworten auf diese Herausforderung akzeptiert werden können.
- `<realm>` {{optional_inline}}
  - : Wie oben im [Direktiven](#direktiven)-Abschnitt.

## Beispiele

### Ausstellung mehrerer Authentifizierungsherausforderungen

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

Ein User-Agent, der diesen Header erhält, würde zuerst den Benutzer nach seinem Benutzernamen und Passwort fragen und dann die Ressource mit den kodierten Anmeldeinformationen im `Authorization`-Header erneut anfordern. Der `Authorization`-Header könnte so aussehen:

```http
Authorization: Basic YWxhZGRpbjpvcGVuc2VzYW1l
```

Für die `Basic`-Authentifizierung werden die Anmeldeinformationen erstellt, indem zuerst der Benutzername und das Passwort mit einem Doppelpunkt kombiniert werden (`aladdin:opensesame`), und dann die resultierende Zeichenfolge in {{Glossary("Base64", "`base64`")}} kodiert wird (`YWxhZGRpbjpvcGVuc2VzYW1l`).

> [!NOTE]
> Siehe auch [HTTP-Authentifizierung](/de/docs/Web/HTTP/Guides/Authentication) für Beispiele, wie Sie Apache- oder Nginx-Server konfigurieren, um Ihre Website mit HTTP-Basis-Authentifizierung mit einem Passwort zu schützen.

### Digest-Authentifizierung mit SHA-256 und MD5

> [!NOTE]
> Dieses Beispiel stammt aus {{RFC("7616")}} "HTTP Digest Access Authentication" (andere Beispiele in der Spezifikation zeigen die Verwendung von `SHA-512`, `charset`, und `userhash`).

Der Client versucht, auf ein Dokument unter der URI `http://www.example.org/dir/index.html` zuzugreifen, das durch Digest-Authentifizierung geschützt ist. Der Benutzername für dieses Dokument ist "Mufasa" und das Passwort ist "Circle of Life" (beachten Sie den einzelnen Leerraum zwischen den Wörtern).

Beim ersten Mal, wenn der Client das Dokument anfordert, wird kein {{HTTPHeader("Authorization")}}-Header-Feld gesendet. Hier antwortet der Server mit einer HTTP 401-Nachricht, die eine Herausforderung für jeden unterstützten Digest-Algorithmus in der Reihenfolge der Präferenz enthält (`SHA256` und dann `MD5`).

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

Der Client fordert den Benutzer zur Eingabe seines Benutzernamens und Passwortes auf und antwortet dann mit einer neuen Anfrage, die die Anmeldeinformationen im {{HTTPHeader("Authorization")}}-Header-Feld kodiert. Wenn der Client den MD5-Digest gewählt hat, könnte das {{HTTPHeader("Authorization")}}-Header-Feld wie unten angezeigt aussehen:

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

Wenn der Client den SHA-256-Digest gewählt hat, könnte das {{HTTPHeader("Authorization")}}-Header-Feld wie unten angezeigt aussehen:

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

Ein Server, der die HOBA-Authentifizierung unterstützt, könnte einen `WWW-Authenticate`-Antwort-Header haben, der so aussieht:

```http
HTTP/1.1 401 Unauthorized
WWW-Authenticate: HOBA max-age="180", challenge="16:MTEyMzEyMzEyMw==1:028:https://www.example.com:8080:3:MTI48:NjgxNDdjOTctNDYxYi00MzEwLWJlOWItNGM3MDcyMzdhYjUz"
```

Die zu unterzeichnende Herausforderung wird aus diesen Teilen gebildet: `www.example.com` unter Verwendung des Ports 8080, das Nonce ist `1123123123`, der Algorithmus zum Signieren ist RSA-SHA256, das Schlüsselkennzeichen ist `123`, und schließlich ist die Herausforderung `68147c97-461b-4310-be9b-4c707237ab53`.

Ein Client würde diesen Header erhalten, die Herausforderung extrahieren, sie mit seinem privaten Schlüssel signieren, der im Beispiel unserem Schlüsselkennzeichen 123 entspricht, durch Verwendung von RSA-SHA256, und dann das Ergebnis im `Authorization`-Header als punktgetrennte Schlüsselerkennung, Herausforderung, Nonce und Signatur senden.

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
