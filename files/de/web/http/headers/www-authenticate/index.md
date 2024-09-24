---
title: WWW-Authenticate
slug: Web/HTTP/Headers/WWW-Authenticate
l10n:
  sourceCommit: 583d48191a7a8605d831aff357bef6cc63aef2e3
---

{{HTTPSidebar}}

Der HTTP **`WWW-Authenticate`** Antwort-Header definiert die [HTTP-Authentifizierungsmethoden](/de/docs/Web/HTTP/Authentication) („Challenges“), die möglicherweise verwendet werden, um auf eine spezifische Ressource zuzugreifen.

> [!NOTE]
> Dieser Header ist Teil des [Allgemeinen HTTP-Authentifizierungsrahmens](/de/docs/Web/HTTP/Authentication#the_general_http_authentication_framework), der mit einer Reihe von [Authentifizierungsschemata](/de/docs/Web/HTTP/Authentication#authentication_schemes) verwendet werden kann.
> Jede „Challenge“ listet ein vom Server unterstütztes Schema sowie zusätzliche Parameter auf, die für diesen Schematyp definiert sind.

Ein Server, der [HTTP-Authentifizierung](/de/docs/Web/HTTP/Authentication) verwendet, wird mit einer {{HTTPStatus("401")}} `Unauthorized` Antwort auf eine Anfrage für eine geschützte Ressource antworten.
Diese Antwort muss mindestens einen `WWW-Authenticate` Header und mindestens eine {{Glossary("challenge")}} beinhalten, um anzuzeigen, welche Authentifizierungsschemata zum Zugriff auf die Ressource verwendet werden können (und welche zusätzlichen Daten jedes spezifische Schema benötigt).

Mehrere Challenges sind in einem `WWW-Authenticate` Header erlaubt, und mehrere `WWW-Authenticate` Header sind in einer Antwort erlaubt.
Ein Server kann auch den `WWW-Authenticate` Header in anderen Antwortnachrichten einschließen, um anzuzeigen, dass das Angeben von Anmeldedaten die Antwort beeinflussen könnte.

Nachdem der `WWW-Authenticate` Header empfangen wurde, wird ein Client typischerweise den Benutzer nach Anmeldedaten fragen und dann die Ressource erneut anfordern.
Diese neue Anfrage verwendet den {{HTTPHeader("Authorization")}} Header, um die Anmeldedaten an den Server zu übermitteln, codiert entsprechend der ausgewählten "Challenge" Authentifizierungsmethode.
Der Client sollte das sicherste der von ihm verstandenen Challenges auswählen (beachten Sie, dass in einigen Fällen die "sicherste" Methode umstritten ist).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>nein</td>
    </tr>
  </tbody>
</table>

## Syntax

Mindestens eine Challenge muss angegeben werden.
Mehrere Challenges können durch Kommas getrennt in einem einzelnen Header oder in einzelnen Headern angegeben werden:

```http
// Challenges in einem einzelnen Header angegeben
WWW-Authenticate: challenge1, ..., challengeN

// Challenges in mehreren Headern angegeben
WWW-Authenticate: challenge1
...
WWW-Authenticate: challengeN
```

Eine einzelne Challenge hat das folgende Format. Beachten Sie, dass das Schema-Token (`<auth-scheme>`) obligatorisch ist.
Das Vorhandensein von `realm`, `token68` und anderen Parametern hängt von der Definition des ausgewählten Schemas ab.

```http
// Mögliche Challenge-Formate (schemaabhängig)
WWW-Authenticate: <auth-scheme>
WWW-Authenticate: <auth-scheme> realm=<realm>
WWW-Authenticate: <auth-scheme> token68
WWW-Authenticate: <auth-scheme> auth-param1=token1, ..., auth-paramN=auth-paramN-token
WWW-Authenticate: <auth-scheme> realm=<realm> token68
WWW-Authenticate: <auth-scheme> realm=<realm> token68 auth-param1=auth-param1-token , ..., auth-paramN=auth-paramN-token
WWW-Authenticate: <auth-scheme> realm=<realm> auth-param1=auth-param1-token, ..., auth-paramN=auth-paramN-token
WWW-Authenticate: <auth-scheme> token68 auth-param1=auth-param1-token, ..., auth-paramN=auth-paramN-token
```

Zum Beispiel erfordert [Basic Authentication](/de/docs/Web/HTTP/Authentication#basic_authentication_scheme) `realm` und erlaubt die optionale Nutzung des `charset` Schlüssels, unterstützt jedoch nicht `token68`.

```http
WWW-Authenticate: Basic realm=<realm>
WWW-Authenticate: Basic realm=<realm>, charset="UTF-8"
```

## Direktiven

- `<auth-scheme>`

  - : Das [Authentifizierungsschema](/de/docs/Web/HTTP/Authentication#authentication_schemes). Einige der gebräuchlicheren Typen sind (nicht groß-/kleinschreibungssensitiv): [`Basic`](/de/docs/Web/HTTP/Authentication#basic_authentication_scheme), `Digest`, `Negotiate` und `AWS4-HMAC-SHA256`.

    > [!NOTE]
    > Für mehr Informationen/Optionen siehe [HTTP Authentication > Authentication schemes](/de/docs/Web/HTTP/Authentication#authentication_schemes)

- `<realm>` {{optional_inline}}
  - : Eine Zeichenfolge, die einen geschützten Bereich beschreibt.
    Ein Realm erlaubt es einem Server, die Bereiche, die er schützt, zu unterteilen (wenn unterstützt durch ein Schema, das eine solche Unterteilung zulässt).
    Einige Clients zeigen diesen Wert dem Benutzer, um ihn darüber zu informieren, welche spezifischen Anmeldedaten erforderlich sind – allerdings haben die meisten Browser damit aufgehört, um Phishing zu verhindern.
    Der einzige zuverlässig unterstützte Zeichensatz für diesen Wert ist `us-ascii`.
    Wenn kein Realm angegeben ist, zeigen Clients oft einen formatierten Hostnamen an.
- `<token68>` {{optional_inline}}
  - : Ein Token, das für einige Schemata nützlich sein kann. Das Token erlaubt die 66 unreservierten URI-Zeichen plus einige andere.
    Laut der Spezifikation kann es eine Base64-, Base64url-, Base32- oder Base16 (Hex) Kodierung enthalten, mit oder ohne Polsterung, jedoch ohne Leerzeichen.

Abgesehen von `<auth-scheme>` und dem Schlüssel `realm` sind Autorisierungsparameter spezifisch für jedes [Authentifizierungsschema](/de/docs/Web/HTTP/Authentication#authentication_schemes).
Generell müssen Sie die relevanten Spezifikationen für diese überprüfen (Schlüssel für eine kleine Teilmenge von Schemata sind unten aufgelistet).

### Basic

- `<realm>`
  - : Wie [oben](#realm).
    Beachten Sie, dass das Realm für Basic Authentifizierung obligatorisch ist.
- `charset="UTF-8"` {{optional_inline}}
  - : Sagt dem Client das bevorzugte Kodierungsschema des Servers beim Übermitteln eines Benutzernamens und Passworts.
    Der einzige erlaubte Wert ist die nicht groß-/kleinschreibungssensitive Zeichenfolge "UTF-8".
    Dies bezieht sich nicht auf die Kodierung der Realm-Zeichenfolge.

### Digest

- `<realm>` {{optional_inline}}
  - : Zeichenfolge, die angibt, welchen Benutzernamen/Passwort zu verwenden ist.
    Sollte mindestens den Hostnamen enthalten, könnte aber auch die Benutzer oder Gruppe angeben, die Zugriff haben.
- `domain` {{optional_inline}}
  - : Eine zitierte, durch Leerzeichen getrennte Liste von URI-Präfixen, die alle Orte definieren, an denen die Authentifizierungsinformationen verwendet werden dürfen.
    Wenn dieser Schlüssel nicht angegeben ist, dürfen die Authentifizierungsinformationen überall auf dem Web-Root verwendet werden.
- `nonce`
  - : Eine vom Server angegebene zitierte Zeichenfolge, die der Server verwenden kann, um die Lebensdauer zu steuern, in der bestimmte Anmeldedaten als gültig angesehen werden.
    Diese muss jedes Mal einzigartig generiert werden, wenn eine 401-Antwort gegeben wird, und kann öfter regeneriert werden (zum Beispiel, um zu erlauben, dass ein Digest nur einmal verwendet wird).
    Die Spezifikation enthält Ratschläge zu möglichen Algorithmen zur Generierung dieses Werts.
    Der Nonce-Wert ist für den Client undurchsichtig.
- `opaque`
  - : Eine vom Server angegebene zitierte Zeichenfolge, die unverändert im {{HTTPHeader("Authorization")}} zurückgegeben werden sollte.
    Diese ist für den Client undurchsichtig. Dem Server wird empfohlen, Base64- oder hexadezimale Daten einzuschließen.
- `stale` {{optional_inline}}
  - : Ein nicht groß-/kleinschreibungssensitiver Indikator, der anzeigt, dass die vorherige Anfrage vom Client abgelehnt wurde, weil der verwendete `nonce` zu alt (veraltet) ist.
    Wenn dies `true` ist, kann die Anfrage mit demselben Benutzernamen/Passwort und dem neuen `nonce` verschlüsselt erneut versucht werden.
    Wenn es ein anderer Wert ist, sind der Benutzername/das Passwort ungültig und müssen vom Benutzer erneut angefordert werden.
- `algorithm` {{optional_inline}}
  - : Algorithmus, der zur Erstellung des beim Erstellung des Digests.
    Gültige Nicht-Sitzungswerte sind: `"MD5"` (Standard, wenn nicht angegeben), `"SHA-256"`, `"SHA-512"`.
    Gültige Sitzungswerte sind: `"MD5-sess"`, `"SHA-256-sess"`, `"SHA-512-sess"`.
- `qop`
  - : Zitierte Zeichenfolge, die die vom Server unterstützte Schutzqualität angibt. Diese muss angegeben werden, und unbekannte Optionen müssen ignoriert werden.
    - `"auth"`: Authentifizierung
    - `"auth-int"`: Authentifizierung mit Integritätsschutz
- `charset="UTF-8"` {{optional_inline}}
  - : Sagt dem Client das bevorzugte Kodierungsschema des Servers beim Übermitteln eines Benutzernamens und Passworts.
    Der einzige erlaubte Wert ist die nicht groß-/kleinschreibungssensitive Zeichenfolge "UTF-8".
- `userhash` {{optional_inline}}
  - : Ein Server kann `"true"` angeben, um anzuzeigen, dass er Benutzernamen-Hashing unterstützt (Standard ist `"false"`)

### HTTP Origin-Bound Authentication (HOBA)

- `<challenge>`
  - : Ein Satz von Paaren im Format '\<len\>:\<value\>', die zusammengefügt werden, um einem Client gegeben zu werden.
    Die Challenge besteht aus einem Nonce, Algorithmus, Ursprung, Realm, Schlüsselkennzeichen und der Challenge.
- `<max-age>`
  - : Die Anzahl der Sekunden ab dem Zeitpunkt, zu dem die HTTP-Antwort gesendet wird, in der Antworten auf diese Challenge akzeptiert werden können.
- `realm` {{optional_inline}}
  - : Wie oben im [Direktiven](#direktiven) Abschnitt.

## Beispiele

### Basic-Authentifizierung

Ein Server, der nur Basic-Authentifizierung unterstützt, könnte einen `WWW-Authenticate` Antwort-Header haben, der so aussieht:

```http
WWW-Authenticate: Basic realm="Access to the staging site", charset="UTF-8"
```

Ein User-Agent, der diesen Header empfängt, würde zuerst den Benutzer nach seinem Benutzernamen und Passwort fragen und dann die Ressource erneut anfordern: diesmal die (kodierten) Anmeldedaten im {{HTTPHeader("Authorization")}} Header einschließend.
Der {{HTTPHeader("Authorization")}} Header könnte so aussehen:

```http
Authorization: Basic YWxhZGRpbjpvcGVuc2VzYW1l
```

Bei `"Basic"`-Authentifizierung werden die Anmeldedaten erstellt, indem zuerst der Benutzername und das Passwort mit einem Doppelpunkt (`aladdin:opensesame`) kombiniert werden und dann die resultierende Zeichenfolge in [`base64`](/de/docs/Glossary/Base64) kodiert wird (`YWxhZGRpbjpvcGVuc2VzYW1l`).

> [!NOTE]
> Siehe auch [HTTP-Authentifizierung](/de/docs/Web/HTTP/Authentication) für Beispiele, wie Sie Apache- oder Nginx-Server so konfigurieren, dass Ihre Seite mit HTTP-Basic-Authentifizierung passwortgeschützt ist.

### Digest-Authentifizierung mit SHA-256 und MD5

> [!NOTE]
> Dieses Beispiel stammt aus {{RFC("7616")}} "HTTP Digest Access Authentication" (weitere Beispiele in der Spezifikation zeigen die Verwendung von `SHA-512`, `charset` und `userhash`).

Der Client versucht, auf ein Dokument unter der URI `http://www.example.org/dir/index.html` zuzugreifen, das über Digest-Authentifizierung geschützt ist.
Der Benutzername für dieses Dokument ist "Mufasa" und das Passwort ist "Circle of Life" (beachten Sie den einzelnen Abstand zwischen jedem der Wörter).

Beim ersten Versuch sendet der Client kein {{HTTPHeader("Authorization")}} Header-Feld.
Der Server antwortet hier mit einer HTTP 401 Nachricht, die eine Challenge für jeden Digest-Algorithmus enthält, den er unterstützt, in der Reihenfolge seiner Präferenz (`SHA256` und dann `MD5`)

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

Der Client fordert den Benutzer auf, seinen Benutzernamen und sein Passwort einzugeben, und antwortet dann mit einer neuen Anfrage, die die Anmeldedaten im {{HTTPHeader("Authorization")}} Header-Feld kodiert.
Wenn der Client den MD5-Digest ausgewählt hat, könnte das {{HTTPHeader("Authorization")}} Header-Feld wie unten gezeigt aussehen:

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

Wenn der Client den SHA-256-Digest ausgewählt hat, könnte das {{HTTPHeader("Authorization")}} Header-Feld wie unten gezeigt aussehen:

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

Ein Server, der HOBA-Authentifizierung unterstützt, könnte einen `WWW-Authenticate` Antwort-Header haben, der so aussieht:

```http
WWW-Authenticate: HOBA max-age="180", challenge="16:MTEyMzEyMzEyMw==1:028:https://www.example.com:80800:3:MTI48:NjgxNDdjOTctNDYxYi00MzEwLWJlOWItNGM3MDcyMzdhYjUz"
```

Das zu signierende Blob-Challenge besteht aus diesen Teilen: www.example.com unter Verwendung des Ports 8080, der Nonce ist '1123123123', der Algorithmus zum Signieren ist RSA-SHA256, das Schlüsselkennzeichen ist 123, und schließlich die Challenge ist '68147c97-461b-4310-be9b-4c707237ab53'.

Ein Client würde diesen Header empfangen, die Challenge extrahieren, sie mit seinem privaten Schlüssel signieren, der dem Schlüsselkennzeichen 123 in unserem Beispiel mit RSA-SHA256 entspricht, und dann das Ergebnis im `Authorization` Header als durch Punkt getrennten Schlüssel-ID, Challenge, Nonce und Signatur senden.

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
