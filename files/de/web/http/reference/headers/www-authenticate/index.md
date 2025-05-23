---
title: WWW-Authenticate header
short-title: WWW-Authenticate
slug: Web/HTTP/Reference/Headers/WWW-Authenticate
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}

Der HTTP **`WWW-Authenticate`** {{Glossary("response_header", "Antwort-Header")}} gibt die [HTTP Authentifizierungsmethoden](/de/docs/Web/HTTP/Guides/Authentication) (oder {{Glossary("challenge", "Herausforderungen")}}) an, die verwendet werden können, um auf eine bestimmte Ressource zuzugreifen.

Dieser Header ist Teil des [allgemeinen HTTP Authentifizierungsframeworks](/de/docs/Web/HTTP/Guides/Authentication#the_general_http_authentication_framework), das mit einer Reihe von [Authentifizierungsschemata](/de/docs/Web/HTTP/Guides/Authentication#authentication_schemes) genutzt werden kann. Jede Herausforderung identifiziert ein vom Server unterstütztes Schema und zusätzliche Parameter, die für diesen Schematyp definiert sind.

Ein Server, der [HTTP-Authentifizierung](/de/docs/Web/HTTP/Guides/Authentication) verwendet, antwortet mit einer {{HTTPStatus("401", "401 Unauthorized")}} Antwort auf eine Anfrage nach einer geschützten Ressource. Diese Antwort muss mindestens einen `WWW-Authenticate` Header und mindestens eine Herausforderung enthalten, um anzuzeigen, welche Authentifizierungsschemata zur Verfügung stehen, um die Ressource zuzugreifen, und welche zusätzlichen Daten jedes spezifische Schema benötigt.

Mehrere Herausforderungen sind in einem `WWW-Authenticate` Header erlaubt, und mehrere `WWW-Authenticate` Header sind in einer Antwort erlaubt. Ein Server kann den `WWW-Authenticate` Header auch in anderen Antwortnachrichten einschließen, um anzuzeigen, dass die Bereitstellung von Anmeldedaten die Antwort beeinflussen könnte.

Nachdem der `WWW-Authenticate` Header empfangen wurde, wird ein Client typischerweise den Benutzer zur Eingabe von Anmeldedaten auffordern und dann die Ressource erneut anfordern. Diese neue Anfrage verwendet den {{HTTPHeader("Authorization")}} Header, um die Anmeldedaten an den Server zu übermitteln, die für die ausgewählte Authentifizierungsmethode entsprechend codiert sind. Der Client sollte die sicherste der Herausforderungen wählen, die er versteht (beachten Sie, dass in einigen Fällen die "sicherste" Methode umstritten ist).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anfrageheader")}}</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
WWW-Authenticate: <challenge>
```

Wobei ein `<challenge>` aus einem `<auth-scheme>` besteht, gefolgt von einem optionalen `<token68>` oder einer durch Kommas getrennten Liste von `<auth-params>`:

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

Das Vorhandensein eines `token68` oder von Authentifizierungsparametern hängt vom ausgewählten `<auth-scheme>` ab. Zum Beispiel erfordert die [Basic-Authentifizierung](/de/docs/Web/HTTP/Guides/Authentication#basic_authentication_scheme) ein `<realm>` und erlaubt die optionale Verwendung des `charset` Schlüssels, unterstützt aber kein `token68`:

```http
WWW-Authenticate: Basic realm="Dev", charset="UTF-8"
```

Mehrere Herausforderungen können in einer durch Kommata getrennten Liste gesendet werden

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
  - : Ein nicht casesensitives Token, das das verwendete [Authentifizierungsschema](/de/docs/Web/HTTP/Guides/Authentication#authentication_schemes) angibt. Einige der gängigeren Typen sind [`Basic`](/de/docs/Web/HTTP/Guides/Authentication#basic_authentication_scheme), `Digest`, `Negotiate` und `AWS4-HMAC-SHA256`. IANA führt eine [Liste von Authentifizierungsschemata](https://www.iana.org/assignments/http-authschemes/http-authschemes.xhtml), aber es gibt auch andere Schemata, die von Host-Diensten angeboten werden.
- `<auth-param>` {{optional_inline}}
  - : Ein Authentifizierungsparameter, dessen Format vom `<auth-scheme>` abhängt. `<realm>` wird unten beschrieben, da es ein gängiger Authentifizierungsparameter bei vielen Authentifizierungsschemata ist.
    - `<realm>` {{optional_inline}}
      - : Der String `realm` gefolgt von `=` und einem umschlossenen String, der einen geschützten Bereich beschreibt, z.B. `realm="Testumgebung"`. Ein Realm ermöglicht es einem Server, die Bereiche zu unterteilen, die er schützt (falls unterstützt durch ein Schema, das eine solche Unterteilung erlaubt). Manche Clients zeigen diesen Wert dem Benutzer an, um ihn darüber zu informieren, welche speziellen Anmeldedaten erforderlich sind – obwohl die meisten Browser dies aus Phishing-Schutzgründen nicht mehr tun. Der einzige verlässlich unterstützte Zeichensatz für diesen Wert ist `us-ascii`. Wenn kein Realm angegeben ist, zeigen Clients oft einen formatierten Hostnamen an.
- `<token68>` {{optional_inline}}
  - : Ein Token, das für einige Schemas nützlich sein kann. Das Token erlaubt die 66 unreservierten URI-Zeichen plus einige andere. Es kann eine {{Glossary("base64", "base64")}}, base64url, base32 oder base16 (hex) Codierung enthalten, mit oder ohne Padding, jedoch ohne Leerzeichen. Die Alternative token68 zu Authentifizierungsparameterlisten wird für die Konsistenz mit älteren Authentifizierungsschemata unterstützt.

Im Allgemeinen müssen Sie die relevanten Spezifikationen für die Authentifizierungsparameter prüfen, die für jedes `<auth-scheme>` benötigt werden. Die folgenden Abschnitte beschreiben Token- und Authentifizierungsparameter für einige gängige Authentifizierungsschemata.

### Basic-Authentifizierungsrichtlinien

- `<realm>`
  - : Ein `<realm>` wie [oben beschrieben](#realm). Beachten Sie, dass der Realm für die `Basic`-Authentifizierung obligatorisch ist.
- `charset="UTF-8"` {{optional_inline}}
  - : Teilt dem Client das bevorzugte Kodierschema des Servers beim Einreichen eines Benutzernamens und Passworts mit. Der einzige erlaubte Wert ist der nicht-case-sensitive String `UTF-8`. Dies bezieht sich nicht auf die Kodierung des Realm-Strings.

### Digest-Authentifizierungsrichtlinien

- `<realm>` {{optional_inline}}
  - : Ein `<realm>` wie [oben beschrieben](#realm), welcher den zu verwendenden Benutzernamen/das Passwort angibt. Sollte mindestens den Hostnamen enthalten, könnte aber die Benutzer oder Gruppen angeben, die Zugriff haben.
- `domain` {{optional_inline}}
  - : Eine durch Leerzeichen getrennte Liste von URI-Präfixen, die alle Orte definieren, an denen die Authentifizierungsinformationen verwendet werden können. Wenn dieser Schlüssel nicht angegeben ist, können die Authentifizierungsinformationen überall im Webroot verwendet werden.
- `nonce`
  - : Ein vom Server spezifizierter String, den der Server verwenden kann, um die Lebensdauer zu kontrollieren, in der bestimmte Anmeldedaten als gültig betrachtet werden. Dieser muss jedes Mal, wenn eine 401-Antwort erfolgt, einzigartig generiert werden und kann öfter regeneriert werden (z.B. eine Digest nur einmal zulassen). Die Spezifikation enthält Hinweise auf mögliche Algorithmen zur Erstellung dieses Wertes. Der Nonce-Wert ist für den Client undurchsichtig.
- `opaque`
  - : Ein vom Server angegebener String, der unverändert in der {{HTTPHeader("Authorization")}} zurückgegeben werden sollte. Dies ist für den Client ebenfalls undurchsichtig. Der Server wird empfohlen, Base64 oder hexadezimale Daten einzuschließen.
- `stale` {{optional_inline}}
  - : Eine nicht casesensitive Kennzeichnung, die anzeigt, dass die vorherige Anfrage vom Client abgelehnt wurde, weil der verwendete `nonce` zu alt (veraltet) ist. Wenn dies `true` ist, kann die Anfrage mit demselben Benutzernamen/Passwort erneut verschlüsselt mit dem neuen `nonce` gesendet werden. Wenn es einen anderen Wert hat, sind der Benutzername/das Passwort ungültig und müssen vom Benutzer erneut angefordert werden.
- `algorithm` {{optional_inline}}
  - : Ein String, der den Algorithmus angibt, der zur Erstellung eines Digest verwendet wird. Gültige Non-Session-Werte sind: `MD5` (Standard, wenn `algorithm` nicht angegeben), `SHA-256`, `SHA-512`. Gültige Session-Werte sind: `MD5-sess`, `SHA-256-sess`, `SHA-512-sess`.
- `qop`
  - : Ein String, der die Qualität der vom Server unterstützten Schutzmaßnahmen angibt. Dies muss angegeben werden, unbekannte Optionen müssen ignoriert werden.
    - `"auth"`: Authentifizierung
    - `"auth-int"`: Authentifizierung mit Integritätsschutz
- `charset="UTF-8"` {{optional_inline}}
  - : Teilt dem Client das bevorzugte Kodierschema des Servers mit beim Einreichen eines Benutzernamens und Passworts. Der einzige erlaubte Wert ist der nicht-case-sensitive String "UTF-8".
- `userhash` {{optional_inline}}
  - : Ein Server kann `"true"` angeben, um zu zeigen, dass er die Hashbildung von Benutzernamen unterstützt (Standard ist `"false"`)

### HTTP Origin-Bound Authentication (HOBA)

- `<challenge>`
  - : Ein Satz von Paaren im Format `<len>:<value>`, die zusammengefügt werden, um dem Client gegeben zu werden. Die Herausforderung besteht aus einem Nonce, einem Algorithmus, einem Ursprung, einem Realm, einem Schlüsselkennzeichen und der Herausforderung.
- `<max-age>`
  - : Die Anzahl der Sekunden ab dem Zeitpunkt, zu dem die HTTP-Anwort gesendet wird, für die Antworten auf diese Herausforderung akzeptiert werden können.
- `<realm>` {{optional_inline}}
  - : Wie oben im Abschnitt [Direktiven](#direktiven) beschrieben.

## Beispiele

### Ausgabe mehrerer Authentifizierungschallenges

Mehrere Herausforderungen können in einem einzigen Antwortheader angegeben werden:

```http
HTTP/1.1 401 Unauthorized
WWW-Authenticate: challenge1, …, challengeN
```

Mehrere Herausforderungen können in separaten `WWW-Authenticate` Headers in derselben Antwort gesendet werden:

```http
HTTP/1.1 401 Unauthorized
WWW-Authenticate: challenge1
WWW-Authenticate: challengeN
```

### Basic Authentifizierung

Ein Server, der nur Basic-Authentifizierung unterstützt, könnte einen `WWW-Authenticate` Antwort-Header haben, der folgendermaßen aussieht:

```http
HTTP/1.1 401 Unauthorized
WWW-Authenticate: Basic realm="Staging server", charset="UTF-8"
```

Ein Benutzeragent, der diesen Header empfängt, würde zuerst den Benutzer nach seinem Benutzernamen und Passwort fragen und dann die Ressource erneut anfordern mit den kodierten Anmeldedaten im `Authorization` Header. Der `Authorization` Header könnte so aussehen:

```http
Authorization: Basic YWxhZGRpbjpvcGVuc2VzYW1l
```

Für `Basic` Authentifizierung werden die Anmeldedaten erstellt, indem zuerst der Benutzername und das Passwort mit einem Doppelpunkt kombiniert werden (`aladdin:opensesame`), und dann der resultierende String in {{Glossary("Base64", "`base64`")}} kodiert wird (`YWxhZGRpbjpvcGVuc2VzYW1l`).

> [!NOTE]
> Siehe auch [HTTP-Authentifizierung](/de/docs/Web/HTTP/Guides/Authentication) für Beispiele zur Konfiguration von Apache oder Nginx-Servern zum Passwortschutz Ihrer Website mit HTTP-Basicauthentifizierung.

### Digest-Authentifizierung mit SHA-256 und MD5

> [!NOTE]
> Dieses Beispiel stammt aus {{RFC("7616")}} "HTTP Digest Access Authentication" (andere Beispiele in der Spezifikation zeigen die Verwendung von `SHA-512`, `charset` und `userhash`).

Der Client versucht, auf ein Dokument bei der URI `http://www.example.org/dir/index.html` zuzugreifen, das über Digest-Authentifizierung geschützt ist. Der Benutzername für dieses Dokument ist "Mufasa" und das Passwort lautet "Circle of Life" (beachten Sie den einzelnen Leerraum zwischen jedem der Wörter).

Beim ersten Mal, wenn der Client das Dokument anfordert, wird kein {{HTTPHeader("Authorization")}} Header-Feld gesendet. Hier antwortet der Server mit einer HTTP 401-Nachricht, die eine Herausforderung für jeden von ihm unterstützten Digest-Algorithmus beinhaltet, in der Reihenfolge seiner Präferenz (`SHA256` und dann `MD5`)

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

Der Client fordert den Benutzer zur Eingabe seines Benutzernamens und Passworts auf und antwortet dann mit einer neuen Anfrage, die die Anmeldedaten im {{HTTPHeader("Authorization")}} Header-Feld codiert. Wenn der Client den MD5-Digest gewählt hat, könnte das {{HTTPHeader("Authorization")}} Header-Feld wie unten gezeigt aussehen:

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

Wenn der Client den SHA-256-Digest gewählt hat, könnte das {{HTTPHeader("Authorization")}} Header-Feld wie unten gezeigt aussehen:

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

Ein Server, der HOBA-Authentifizierung unterstützt, könnte einen `WWW-Authenticate` Antwort-Header haben, der folgendermaßen aussieht:

```http
HTTP/1.1 401 Unauthorized
WWW-Authenticate: HOBA max-age="180", challenge="16:MTEyMzEyMzEyMw==1:028:https://www.example.com:8080:3:MTI48:NjgxNDdjOTctNDYxYi00MzEwLWJlOWItNGM3MDcyMzdhYjUz"
```

Der zu signierende Blob-Challenge besteht aus diesen Teilen: `www.example.com` mit Port 8080, der Nonce ist `1123123123`, der Algorithmus zum Signieren ist RSA-SHA256, das Schlüsselkennzeichen ist `123`, und schließlich die Herausforderung ist `68147c97-461b-4310-be9b-4c707237ab53`.

Ein Client würde diesen Header empfangen, die Herausforderung extrahieren, sie mit seinem privaten Schlüssel, der dem Schlüsselkennzeichen 123 in unserem Beispiel entspricht, unter Verwendung von RSA-SHA256 signieren und dann das Ergebnis im `Authorization` Header als durch Punkte getrennte Schlüssel-ID, Herausforderung, Nonce und Signatur senden.

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
