---
title: WWW-Authenticate header
short-title: WWW-Authenticate
slug: Web/HTTP/Reference/Headers/WWW-Authenticate
l10n:
  sourceCommit: 7f6778934020a9b5b82b4dd8ca79a99bc9950c2a
---

Der HTTP **`WWW-Authenticate`** {{Glossary("response_header", "Response-Header")}} gibt die [HTTP-Authentifizierungsmethoden](/de/docs/Web/HTTP/Guides/Authentication) (oder {{Glossary("challenge", "Challenges")}}) an, die genutzt werden könnten, um auf eine spezifische Ressource zuzugreifen.

Dieser Header ist Teil des [allgemeinen HTTP-Authentifizierungs-Frameworks](/de/docs/Web/HTTP/Guides/Authentication#the_general_http_authentication_framework), das mit einer Reihe von [Authentifizierungsschemata](/de/docs/Web/HTTP/Guides/Authentication#authentication_schemes) verwendet werden kann. Jede Challenge identifiziert ein vom Server unterstütztes Schema und zusätzliche Parameter, die für diesen Schemabereich definiert sind.

Ein Server, der [HTTP-Authentifizierung](/de/docs/Web/HTTP/Guides/Authentication) verwendet, wird mit einer {{HTTPStatus("401", "401 Unauthorized")}}-Antwort auf eine Anfrage nach einer geschützten Ressource reagieren. Diese Antwort muss mindestens einen `WWW-Authenticate`-Header und mindestens eine Challenge enthalten, um anzugeben, welche Authentifizierungsschemata verwendet werden können, um auf die Ressource zuzugreifen, und welche zusätzlichen Daten jedes besondere Schema benötigt.

Mehrere Challenges sind in einem `WWW-Authenticate`-Header erlaubt, und mehrere `WWW-Authenticate`-Header sind in einer Antwort erlaubt. Ein Server kann auch den `WWW-Authenticate`-Header in anderen Antwortnachrichten einfügen, um anzuzeigen, dass die Bereitstellung von Anmeldeinformationen die Antwort beeinflussen könnte.

Nach Erhalt des `WWW-Authenticate`-Headers wird ein Client typischerweise den Benutzer zur Eingabe von Anmeldeinformationen auffordern und dann die Ressource erneut anfordern. Diese neue Anfrage verwendet den {{HTTPHeader("Authorization")}}-Header, um die Anmeldeinformationen an den Server zu übermitteln, passend kodiert für die ausgewählte Authentifizierungsmethode. Es wird erwartet, dass der Client die sicherste der von ihm verstandenen Challenges auswählt (beachten Sie, dass in einigen Fällen die "sicherste" Methode umstritten ist).

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

Wobei ein `<challenge>` aus einem `<auth-scheme>` und gefolgt von einem optionalen `<token68>` oder einer kommagetrennten Liste von `<auth-params>` besteht:

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

Das Vorhandensein eines `token68` oder von Authentifizierungsparametern hängt vom gewählten `<auth-scheme>` ab. Zum Beispiel erfordert die [einfache Authentifizierung](/de/docs/Web/HTTP/Guides/Authentication#basic_authentication_scheme) einen `<realm>` und erlaubt die optionale Verwendung des `charset`-Schlüssels, unterstützt jedoch keinen `token68`:

```http
WWW-Authenticate: Basic realm="Dev", charset="UTF-8"
```

Mehrere Challenges können in einer kommagetrennten Liste gesendet werden

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
  - : Ein nicht-fallunterscheidendes Token, das das verwendete [Authentifizierungsschema](/de/docs/Web/HTTP/Guides/Authentication#authentication_schemes) angibt. Einige der gebräuchlicheren Typen sind [`Basic`](/de/docs/Web/HTTP/Guides/Authentication#basic_authentication_scheme), `Digest`, `Negotiate` und `AWS4-HMAC-SHA256`. Die IANA führt eine [Liste der Authentifizierungsschemata](https://www.iana.org/assignments/http-authschemes/http-authschemes.xhtml), aber es gibt andere von Hostservices angebotene Schemata.
- `<auth-param>` {{optional_inline}}
  - : Ein Authentifizierungsparameter, dessen Format vom `<auth-scheme>` abhängt. `<realm>` wird unten beschrieben, da es ein häufiger Authentifizierungsparameter unter vielen Authentifizierungsschemata ist.
    - `<realm>` {{optional_inline}}
      - : Der String `realm`, gefolgt von `=` und einem in Anführungszeichen gesetzten String, der einen geschützten Bereich beschreibt, zum Beispiel `realm="staging environment"`. Ein Realm ermöglicht es einem Server, die Bereiche zu unterteilen, die er schützt (sofern von einem Schema unterstützt, das eine solche Unterteilung erlaubt). Einige Clients zeigen diesen Wert dem Benutzer, um darauf hinzuweisen, welche Anmeldeinformationen benötigt werden – obwohl die meisten Browser dies nicht mehr tun, um Phishing entgegenzuwirken. Der einzige zuverlässig unterstützte Zeichensatz für diesen Wert ist `us-ascii`. Wenn kein Realm angegeben ist, zeigen Clients oft stattdessen einen formatierten Hostnamen an.
- `<token68>` {{optional_inline}}
  - : Ein Token, das für einige Schemata nützlich sein kann. Das Token ermöglicht die 66 nicht reservierten URI-Zeichen plus einige andere. Es kann eine {{Glossary("base64", "base64")}}, base64url, base32 oder base16 (hex) Kodierung enthalten, mit oder ohne Padding, jedoch ohne Leerzeichen. Die token68-Alternative zu auth-param-Listen wird zur Konsistenz mit älteren Authentifizierungsschemata unterstützt.

Generell müssen Sie die relevanten Spezifikationen für die benötigten Authentifizierungsparameter für jedes `<auth-scheme>` überprüfen. Die folgenden Abschnitte beschreiben Token und Authentifizierungsparameter für einige gängige Authentifizierungsschemata.

### Einfache Authentifizierungsdirektiven

- `<realm>`
  - : Ein `<realm>`, wie [oben beschrieben](#realm). Beachten Sie, dass das Realm bei der `Basic`-Authentifizierung obligatorisch ist.
- `charset="UTF-8"` {{optional_inline}}
  - : Teilt dem Client das bevorzugte Kodierungsschema des Servers beim Übermitteln eines Benutzernamens und Passworts mit. Der einzige erlaubte Wert ist der nicht-fallunterscheidende String `UTF-8`. Dies bezieht sich nicht auf die Kodierung des Realm-Strings.

### Digest-Authentifizierungsdirektiven

- `<realm>` {{optional_inline}}
  - : Ein `<realm>`, wie [oben beschrieben](#realm), das angibt, welcher Benutzername/das Passwort verwendet werden soll. Mindestens sollte es den Hostnamen enthalten, kann aber auch die Benutzer oder Gruppe angeben, die Zugriff haben.
- `domain` {{optional_inline}}
  - : Eine zitierte, leerzeichengetrennte Liste von URI-Präfixen, die alle Orte definiert, an denen die Authentifizierungsinformationen verwendet werden dürfen. Wenn dieser Schlüssel nicht angegeben ist, dürfen die Authentifizierungsinformationen überall im Web-Root verwendet werden.
- `nonce`
  - : Ein vom Server angegebenes, zitiertes String, das der Server verwenden kann, um die Lebensdauer zu kontrollieren, in der bestimmte Anmeldeinformationen als gültig betrachtet werden. Dies muss jedes Mal, wenn eine 401-Antwort gemacht wird, einzigartig generiert werden und kann häufiger neu generiert werden (zum Beispiel, um zu erlauben, dass ein Digest nur einmal verwendet wird). Die Spezifikation enthält Empfehlungen zu möglichen Algorithmen zur Generierung dieses Wertes. Der Nonce-Wert ist für den Client undurchsichtig.
- `opaque`
  - : Ein vom Server angegebenes, zitiertes String, das unverändert im {{HTTPHeader("Authorization")}} zurückgegeben werden sollte. Dies ist für den Client undurchsichtig. Dem Server wird empfohlen, Base64- oder hexadezimale Daten einzuschließen.
- `stale` {{optional_inline}}
  - : Eine nicht-fallunterscheidende Flagge, die angibt, dass die vorherige Anfrage des Clients abgelehnt wurde, weil die verwendete `nonce` zu alt (stale) ist. Wenn dies `true` ist, kann die Anfrage mit demselben Benutzernamen/Passwort verschlüsselt mit der neuen `nonce` erneut versucht werden. Wenn es einen anderen Wert hat, sind der Benutzername/das Passwort ungültig und müssen vom Benutzer erneut angefordert werden.
- `algorithm` {{optional_inline}}
  - : Ein String, der den Algorithmus angibt, der zur Erstellung eines Digests verwendet wird. Gültige Nicht-Session-Werte sind: `MD5` (Standard, wenn `algorithm` nicht angegeben ist), `SHA-256`, `SHA-512`. Gültige Session-Werte sind: `MD5-sess`, `SHA-256-sess`, `SHA-512-sess`.
- `qop`
  - : Zitierter String, der die vom Server unterstützte Schutzqualität angibt. Dies muss übermittelt werden, und nicht erkannte Optionen müssen ignoriert werden.
    - `"auth"`: Authentifizierung
    - `"auth-int"`: Authentifizierung mit Integritätsschutz
- `charset="UTF-8"` {{optional_inline}}
  - : Teilt dem Client das bevorzugte Kodierungsschema des Servers beim Übermitteln eines Benutzernamens und Passworts mit. Der einzige erlaubte Wert ist der nicht-fallunterscheidende String "UTF-8".
- `userhash` {{optional_inline}}
  - : Ein Server kann `"true"` angeben, um darauf hinzuweisen, dass es die Benutzername-Hashing unterstützt (Standard ist `"false"`)

### HTTP Origin-Bound Authentication (HOBA)

- `<challenge>`
  - : Eine Reihe von Paaren im Format `<len>:<value>`, die zusammengefügt werden, um einem Client präsentiert zu werden. Die Challenge besteht aus einem nonce, Algorithmus, Ursprung, Realm, Schlüsselidentifikator und der Challenge.
- `<max-age>`
  - : Die Anzahl der Sekunden ab dem Zeitpunkt, an dem die HTTP-Antwort gesendet wird, für die Antworten auf diese Challenge akzeptiert werden können.
- `<realm>` {{optional_inline}}
  - : Wie oben im [Direktiven](#direktiven)-Abschnitt.

## Beispiele

### Ausgeben mehrerer Authentifizierungs-Challenges

Mehrere Challenges können in einem einzigen Antwortheader angegeben werden:

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

### Einfache Authentifizierung

Ein Server, der nur einfache Authentifizierung unterstützt, könnte einen `WWW-Authenticate`-Response-Header haben, der so aussieht:

```http
HTTP/1.1 401 Unauthorized
WWW-Authenticate: Basic realm="Staging server", charset="UTF-8"
```

Ein User-Agent, der diesen Header empfängt, würde zunächst den Benutzer nach seinem Benutzernamen und Passwort fragen und dann die Ressource mit den kodierten Anmeldedaten im `Authorization`-Header erneut anfordern. Der `Authorization`-Header könnte so aussehen:

```http
Authorization: Basic YWxhZGRpbjpvcGVuc2VzYW1l
```

Für die `Basic`-Authentifizierung werden die Anmeldedaten konstruiert, indem zuerst der Benutzername und das Passwort mit einem Doppelpunkt kombiniert werden (`aladdin:opensesame`) und dann der resultierende String in {{Glossary("Base64", "`base64`")}} kodiert wird (`YWxhZGRpbjpvcGVuc2VzYW1l`).

> [!NOTE]
> Siehe auch [HTTP-Authentifizierung](/de/docs/Web/HTTP/Guides/Authentication) für Beispiele, wie Sie Apache- oder Nginx-Server konfigurieren können, um Ihre Website mit der HTTP-Basis-Authentifizierung mit einem Passwort zu schützen.

### Digest-Authentifizierung mit SHA-256 und MD5

> [!NOTE]
> Dieses Beispiel stammt aus {{RFC("7616")}} "HTTP Digest Access Authentication" (andere Beispiele in der Spezifikation zeigen die Verwendung von `SHA-512`, `charset`, und `userhash`).

Der Client versucht, auf ein Dokument unter der URI `http://www.example.org/dir/index.html` zuzugreifen, das über Digest-Authentifizierung geschützt ist. Der Benutzername für dieses Dokument ist "Mufasa" und das Passwort ist "Circle of Life" (beachten Sie den Einzelabstand zwischen den einzelnen Wörtern).

Beim ersten Mal, wenn der Client das Dokument anfordert, wird kein {{HTTPHeader("Authorization")}}-Headerfeld gesendet. Hier antwortet der Server mit einer HTTP 401-Nachricht, die eine Herausforderung für jeden Digest-Algorithmus enthält, den er unterstützt, in der Reihenfolge seiner Präferenz (`SHA256` und dann `MD5`).

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

Der Client fordert den Benutzer zur Eingabe seines Benutzernamens und Passworts auf und antwortet dann mit einer neuen Anfrage, die die Anmeldedaten im {{HTTPHeader("Authorization")}}-Headerfeld kodiert. Wenn der Client den MD5-Digest wählte, könnte das {{HTTPHeader("Authorization")}}-Headerfeld wie unten gezeigt aussehen:

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

Ein Server, der HOBA-Authentifizierung unterstützt, könnte einen `WWW-Authenticate`-Response-Header haben, der so aussieht:

```http
HTTP/1.1 401 Unauthorized
WWW-Authenticate: HOBA max-age="180", challenge="16:MTEyMzEyMzEyMw==1:028:https://www.example.com:8080:3:MTI48:NjgxNDdjOTctNDYxYi00MzEwLWJlOWItNGM3MDcyMzdhYjUz"
```

Die zu signierende Blob-Challenge besteht aus diesen Teilen: `www.example.com` auf Port 8080, das nonce ist `1123123123`, der Algorithmus zum Signieren ist RSA-SHA256, der Schlüsselidentifikator ist `123`, und schließlich die Challenge ist `68147c97-461b-4310-be9b-4c707237ab53`.

Ein Client würde diesen Header erhalten, die Challenge extrahieren, sie mit seinem privaten Schlüssel signieren, der dem Schlüsselidentifikator 123 in unserem Beispiel entspricht, unter Verwendung von RSA-SHA256, und dann das Ergebnis im `Authorization`-Header als punktgetrennter Schlüssel-ID, Challenge, nonce und Signatur senden.

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
