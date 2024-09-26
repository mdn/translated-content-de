---
title: WWW-Authenticate
slug: Web/HTTP/Headers/WWW-Authenticate
l10n:
  sourceCommit: 583d48191a7a8605d831aff357bef6cc63aef2e3
---

{{HTTPSidebar}}

Der HTTP **`WWW-Authenticate`** Antwort-Header definiert die [HTTP-Authentifizierungsmethoden](/de/docs/Web/HTTP/Authentication) („Challenges“), die verwendet werden könnten, um auf eine bestimmte Ressource zuzugreifen.

> [!NOTE]
> Dieser Header ist Teil des [allgemeinen HTTP-Authentifizierungsframeworks](/de/docs/Web/HTTP/Authentication#the_general_http_authentication_framework), welches mit einer Reihe von [Authentifizierungsschemata](/de/docs/Web/HTTP/Authentication#authentication_schemes) verwendet werden kann.
> Jede „Challenge“ listet ein vom Server unterstütztes Schema und zusätzliche Parameter auf, die für diesen Schemtyp definiert sind.

Ein Server, der [HTTP-Authentifizierung](/de/docs/Web/HTTP/Authentication) verwendet, antwortet mit einer {{HTTPStatus("401")}} `Unauthorized`-Antwort auf eine Anfrage nach einer geschützten Ressource.
Diese Antwort muss mindestens einen `WWW-Authenticate` Header und mindestens eine {{Glossary("challenge")}} enthalten, um anzugeben, welche Authentifizierungsschemata verwendet werden können, um auf die Ressource zuzugreifen (und alle zusätzlichen Daten, die jedes spezielle Schema benötigt).

Mehrere Challenges sind in einem `WWW-Authenticate` Header erlaubt, und es sind mehrere `WWW-Authenticate` Header in einer Antwort erlaubt.
Ein Server kann den `WWW-Authenticate` Header auch in anderen Antwortnachrichten einfügen, um anzuzeigen, dass die Bereitstellung von Anmeldeinformationen die Antwort beeinflussen könnte.

Nach Erhalt des `WWW-Authenticate` Headers wird ein Client normalerweise den Nutzer nach Anmeldeinformationen fragen und dann die Ressource erneut anfordern.
Diese neue Anfrage verwendet den {{HTTPHeader("Authorization")}} Header, um die Anmeldeinformationen an den Server zu übermitteln, die entsprechend der ausgewählten „Challenge“-Authentifizierungsmethode kodiert sind.
Vom Client wird erwartet, dass er die sicherste der ihm bekannten Challenges auswählt (beachten Sie, dass in einigen Fällen die „sicherste“ Methode umstritten ist).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>no</td>
    </tr>
  </tbody>
</table>

## Syntax

Mindestens eine Challenge muss angegeben werden.
Mehrere Challenges können kommagetrennt in einem einzigen Header oder in einzelnen Headern angegeben werden:

```http
// Challenges in einem einzigen Header angegeben
WWW-Authenticate: challenge1, ..., challengeN

// Challenges in mehreren Headern angegeben
WWW-Authenticate: challenge1
...
WWW-Authenticate: challengeN
```

Eine einzelne Challenge hat folgendes Format. Beachten Sie, dass das Schema-Token (`<auth-scheme>`) obligatorisch ist.
Das Vorhandensein von `realm`, `token68` und anderen Parametern hängt von der Definition des ausgewählten Schemas ab.

```http
// Mögliche Challenge-Formate (schemaspezifisch)
WWW-Authenticate: <auth-scheme>
WWW-Authenticate: <auth-scheme> realm=<realm>
WWW-Authenticate: <auth-scheme> token68
WWW-Authenticate: <auth-scheme> auth-param1=token1, ..., auth-paramN=auth-paramN-token
WWW-Authenticate: <auth-scheme> realm=<realm> token68
WWW-Authenticate: <auth-scheme> realm=<realm> token68 auth-param1=auth-param1-token , ..., auth-paramN=auth-paramN-token
WWW-Authenticate: <auth-scheme> realm=<realm> auth-param1=auth-param1-token, ..., auth-paramN=auth-paramN-token
WWW-Authenticate: <auth-scheme> token68 auth-param1=auth-param1-token, ..., auth-paramN=auth-paramN-token
```

Zum Beispiel erfordert die [Basic-Authentifizierung](/de/docs/Web/HTTP/Authentication#basic_authentication_scheme) `realm` und ermöglicht die optionale Verwendung des `charset` Schlüssels, unterstützt aber `token68` nicht.

```http
WWW-Authenticate: Basic realm=<realm>
WWW-Authenticate: Basic realm=<realm>, charset="UTF-8"
```

## Direktiven

- `<auth-scheme>`

  - : Das [Authentifizierungsschema](/de/docs/Web/HTTP/Authentication#authentication_schemes). Einige der häufigeren Typen sind (nicht case-sensitiv): [`Basic`](/de/docs/Web/HTTP/Authentication#basic_authentication_scheme), `Digest`, `Negotiate` und `AWS4-HMAC-SHA256`.

    > [!NOTE]
    > Für weitere Informationen/Optionen siehe [HTTP Authentication > Authentication schemes](/de/docs/Web/HTTP/Authentication#authentication_schemes)

- `<realm>` {{optional_inline}}
  - : Ein String, der einen geschützten Bereich beschreibt.
    Ein Realm ermöglicht es einem Server, die geschützten Bereiche zu partitionieren (falls dies durch ein Schema unterstützt wird, das solche Partitionierung erlaubt).
    Einige Clients zeigen diesen Wert dem Nutzer an, um ihn darüber zu informieren, welche spezifischen Anmeldeinformationen erforderlich sind — obwohl die meisten Browser dies zur Bekämpfung von Phishing eingestellt haben.
    Der einzige zuverlässig unterstützte Zeichensatz für diesen Wert ist `us-ascii`.
    Wenn kein Realm angegeben ist, zeigen Clients oft stattdessen einen formatierten Hostnamen an.
- `<token68>` {{optional_inline}}
  - : Ein Token, das für einige Schemas nützlich sein kann. Das Token erlaubt die 66 nicht reservierten URI-Zeichen plus einige weitere.
    Laut Spezifikation kann es eine base64-, base64url-, base32- oder base16-(hex)-Kodierung enthalten, mit oder ohne Padding, aber ohne Leerzeichen.

Andere als `<auth-scheme>` und der Schlüssel `realm` sind Autorisierungsparameter spezifisch für jedes [Authentifizierungsschema](/de/docs/Web/HTTP/Authentication#authentication_schemes).
Im Allgemeinen müssen Sie die relevanten Spezifikationen für diese überprüfen (die Schlüssel für eine kleine Teilmenge von Schemas sind unten aufgeführt).

### Basic

- `<realm>`
  - : Wie [oben](#realm) beschrieben.
    Beachten Sie, dass das Realm für die Basis-Authentifizierung obligatorisch ist.
- `charset="UTF-8"` {{optional_inline}}
  - : Teilt dem Client mit, welches Kodierungsschema der Server bevorzugt, wenn Benutzername und Passwort übermittelt werden.
    Der einzige erlaubte Wert ist der nicht case-sensible String "UTF-8".
    Dies bezieht sich nicht auf die Kodierung des Realm-Strings.

### Digest

- `<realm>` {{optional_inline}}
  - : String, der angibt, welcher Benutzername/Passwort verwendet werden soll.
    Sollte mindestens den Hostnamen einschließen, könnte aber auch auf die Benutzer oder Gruppen hinweisen, die Zugang haben.
- `domain` {{optional_inline}}
  - : Eine zitierte, durch Leerzeichen getrennte Liste von URI-Präfixen, die alle Orte definieren, an denen die Authentifizierungsinformationen verwendet werden dürfen.
    Wenn dieser Schlüssel nicht angegeben ist, dürfen die Authentifizierungsinformationen überall im Web-Root verwendet werden.
- `nonce`
  - : Ein vom Server spezifizierter zitierter String, den der Server verwenden kann, um die Lebensdauer zu kontrollieren, in der bestimmte Anmeldeinformationen als gültig betrachtet werden.
    Dies muss jedes Mal einzigartig generiert werden, wenn eine 401-Antwort erfolgt, und kann häufiger regeneriert werden (zum Beispiel, um zuzulassen, dass ein Digest nur einmal verwendet wird).
    Die Spezifikation enthält Ratschläge zu möglichen Algorithmen zur Generierung dieses Wertes.
    Der nonce-Wert ist für den Client undurchsichtig.
- `opaque`
  - : Ein vom Server spezifizierter zitierter String, der unverändert im {{HTTPHeader("Authorization")}} zurückgegeben werden sollte.
    Dies ist für den Client undurchsichtig. Dem Server wird empfohlen, Base64- oder hexadezimale Daten einzuschließen.
- `stale` {{optional_inline}}
  - : Eine nicht case-sensible Markierung, die angibt, dass die vorherige Anfrage vom Client abgelehnt wurde, weil der verwendete `nonce` zu alt (veraltet) ist.
    Wenn dies `true` ist, kann die Anfrage mit demselben Benutzernamen/Passwort wiederholt werden, verschlüsselt unter Verwendung des neuen `nonce`.
    Wenn es ein anderer Wert ist, sind der Benutzername/Das Passwort ungültig und müssen vom Nutzer erneut angefordert werden.
- `algorithm` {{optional_inline}}
  - : Algorithmus, der verwendet wird, um den Digest zu erzeugen.
    Gültige nicht-session Werte sind: `"MD5"` (Standard, wenn nicht angegeben), `"SHA-256"`, `"SHA-512"`.
    Gültige session-Werte sind: `"MD5-sess"`, `"SHA-256-sess"`, `"SHA-512-sess"`.
- `qop`
  - : Zitierter String, der die vom Server unterstützte Schutzqualität angibt. Dies muss geliefert werden, und nicht erkannte Optionen müssen ignoriert werden.
    - `"auth"`: Authentifizierung
    - `"auth-int"`: Authentifizierung mit Integritätsschutz
- `charset="UTF-8"` {{optional_inline}}
  - : Teilt dem Client mit, welches Kodierungsschema der Server bevorzugt, wenn Benutzername und Passwort übermittelt werden.
    Der einzige erlaubte Wert ist der nicht case-sensible String "UTF-8".
- `userhash` {{optional_inline}}
  - : Ein Server kann `"true"` angeben, um darauf hinzuweisen, dass er Benutzernamen-Hashing unterstützt (Standard ist `"false"`)

### HTTP Origin-Bound Authentication (HOBA)

- `<challenge>`
  - : Ein Satz von Paaren im Format `<len>:<value>` miteinander verkettet, um dem Client gegeben zu werden.
    Die Challenge besteht aus einem nonce, Algorithmus, Ursprung, realm, Schlüsselkennzeichen und der Challenge.
- `<max-age>`
  - : Die Anzahl der Sekunden ab der Ausgabe der HTTP-Antwort, für die Antworten auf diese Challenge akzeptiert werden können.
- `realm` {{optional_inline}}
  - : Wie oben in der [Direktiven](#direktiven)-Sektion beschrieben.

## Beispiele

### Basic-Authentifizierung

Ein Server, der nur die Basis-Authentifizierung unterstützt, könnte einen `WWW-Authenticate` Antwortheader haben, der folgendermaßen aussieht:

```http
WWW-Authenticate: Basic realm="Zugang zur Staging-Site", charset="UTF-8"
```

Ein User-Agent, der diesen Header erhält, würde den Nutzer zunächst nach seinem Benutzernamen und Passwort fragen und dann die Ressource erneut anfordern: dieses Mal mit den (kodierten) Anmeldeinformationen im {{HTTPHeader("Authorization")}} Header.
Der {{HTTPHeader("Authorization")}} Header könnte folgendermaßen aussehen:

```http
Authorization: Basic YWxhZGRpbjpvcGVuc2VzYW1l
```

Für `"Basic"`-Authentifizierung werden die Anmeldeinformationen gebildet, indem zuerst der Benutzername und das Passwort mit einem Doppelpunkt kombiniert werden (`aladdin:opensesame`), und dann der resultierende String in [`base64`](/de/docs/Glossary/Base64) kodiert wird (`YWxhZGRpbjpvcGVuc2VzYW1l`).

> [!NOTE]
> Siehe auch [HTTP-Authentifizierung](/de/docs/Web/HTTP/Authentication) für Beispiele, wie man Apache- oder Nginx-Server konfiguriert, um Ihre Seite mit HTTP-Basis-Authentifizierung passwortzuschützen.

### Digest-Authentifizierung mit SHA-256 und MD5

> [!NOTE]
> Dieses Beispiel ist aus {{RFC("7616")}} "HTTP Digest Access Authentication" entnommen (andere Beispiele in der Spezifikation zeigen die Verwendung von `SHA-512`, `charset` und `userhash`).

Der Client versucht, auf ein Dokument unter der URI `http://www.example.org/dir/index.html` zuzugreifen, das durch Digest-Authentifizierung geschützt ist.
Der Benutzername für dieses Dokument ist "Mufasa" und das Passwort ist "Circle of Life" (beachten Sie den einzelnen Leerraum zwischen jedem der Wörter).

Beim ersten Versuch, das Dokument anzufordern, wird kein {{HTTPHeader("Authorization")}} Headerfeld gesendet.
Hier antwortet der Server mit einer HTTP 401-Nachricht, die eine Challenge für jeden unterstützten Digest-Algorithmus in seiner Reihenfolge der Präferenz enthält (`SHA256` und dann `MD5`).

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

Der Client fordert den Nutzer nach seinem Benutzernamen und Passwort auf und antwortet dann mit einer neuen Anfrage, die die Anmeldeinformationen im {{HTTPHeader("Authorization")}} Headerfeld kodiert.
Wenn der Client den MD5-Digest auswählte, könnte das {{HTTPHeader("Authorization")}} Headerfeld wie unten gezeigt aussehen:

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

Wenn der Client den SHA-256-Digest auswählte, könnte das {{HTTPHeader("Authorization")}} Headerfeld wie unten gezeigt aussehen:

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

Ein Server, der HOBA-Authentifizierung unterstützt, könnte einen `WWW-Authenticate` Antwortheader haben, der folgendermaßen aussieht:

```http
WWW-Authenticate: HOBA max-age="180", challenge="16:MTEyMzEyMzEyMw==1:028:https://www.example.com:80800:3:MTI48:NjgxNDdjOTctNDYxYi00MzEwLWJlOWItNGM3MDcyMzdhYjUz"
```

Der zu signierende Blob-Challenge besteht aus diesen Teilen: www.example.com mit Port 8080, das nonce ist '1123123123', der Algorithmus zum Signieren ist RSA-SHA256, das Schlüsselkennzeichen ist 123, und schließlich die Challenge ist '68147c97-461b-4310-be9b-4c707237ab53'.

Ein Client würde diesen Header empfangen, die Challenge extrahieren, sie mit seinem privaten Schlüssel signieren, der dem Schlüsselkennzeichen 123 in unserem Beispiel entspricht, und dann das Ergebnis im `Authorization` Header als durch Punkte getrennte Schlüssel-ID, Challenge, nonce und Signatur senden.

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
