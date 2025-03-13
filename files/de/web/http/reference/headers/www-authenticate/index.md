---
title: WWW-Authenticate
slug: Web/HTTP/Reference/Headers/WWW-Authenticate
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Der HTTP **`WWW-Authenticate`** {{Glossary("response_header", "Antwort-Header")}} gibt die [HTTP-Authentifizierungsmethoden](/de/docs/Web/HTTP/Guides/Authentication) (oder {{Glossary("challenge", "Herausforderungen")}}) an, die verwendet werden können, um Zugang zu einer bestimmten Ressource zu erhalten.

Dieser Header ist Teil des [allgemeinen HTTP-Authentifizierungs-Frameworks](/de/docs/Web/HTTP/Guides/Authentication#the_general_http_authentication_framework), das mit einer Reihe von [Authentifizierungsschemata](/de/docs/Web/HTTP/Guides/Authentication#authentication_schemes) verwendet werden kann.
Jede Herausforderung identifiziert ein vom Server unterstütztes Schema und zusätzliche Parameter, die für diesen Schema-Typ definiert sind.

Ein Server, der [HTTP-Authentifizierung](/de/docs/Web/HTTP/Guides/Authentication) verwendet, antwortet mit einer {{HTTPStatus("401", "401 Unauthorized")}}-Antwort auf eine Anfrage für eine geschützte Ressource.
Diese Antwort muss mindestens einen `WWW-Authenticate`-Header und mindestens eine Herausforderung enthalten, um anzugeben, welche Authentifizierungsschemata verwendet werden können, um auf die Ressource zuzugreifen und welche zusätzlichen Daten jedes bestimmte Schema benötigt.

Mehrere Herausforderungen sind in einem `WWW-Authenticate`-Header erlaubt, und mehrere `WWW-Authenticate`-Header sind in einer Antwort erlaubt.
Ein Server kann den `WWW-Authenticate`-Header auch in anderen Antwortnachrichten einschließen, um anzugeben, dass die Bereitstellung von Anmeldeinformationen die Antwort beeinflussen könnte.

Nach Erhalt des `WWW-Authenticate`-Headers fordert ein Client typischerweise den Benutzer zur Eingabe von Anmeldeinformationen auf und fragt die Ressource dann erneut an.
Diese neue Anfrage verwendet den {{HTTPHeader("Authorization")}}-Header, um die Anmeldeinformationen dem Server bereitzustellen, passend für die ausgewählte Authentifizierungsmethode kodiert.
Es wird erwartet, dass der Client die sicherste der ihm bekannten Herausforderungen auswählt (beachten Sie, dass in einigen Fällen die "sicherste" Methode umstritten ist).

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

Das Vorhandensein eines `token68` oder von Authentifizierungsparametern hängt vom gewählten `<auth-scheme>` ab.
Zum Beispiel erfordert die [Basic-Authentifizierung](/de/docs/Web/HTTP/Guides/Authentication#basic_authentication_scheme) ein `<realm>` und erlaubt die optionale Verwendung des `charset`-Schlüssels, unterstützt aber kein `token68`:

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
  - : Ein nicht-empfindlicher Token, der das verwendete [Authentifizierungsschema](/de/docs/Web/HTTP/Guides/Authentication#authentication_schemes) anzeigt.
    Einige der häufigeren Typen sind [`Basic`](/de/docs/Web/HTTP/Guides/Authentication#basic_authentication_scheme), `Digest`, `Negotiate` und `AWS4-HMAC-SHA256`.
    Die IANA führt eine [Liste von Authentifizierungsschemata](https://www.iana.org/assignments/http-authschemes/http-authschemes.xhtml), aber es gibt andere Schemata, die von Host-Diensten angeboten werden.
- `<auth-param>` {{optional_inline}}
  - : Ein Authentifizierungsparameter, dessen Format vom `<auth-scheme>` abhängt.
    `<realm>` wird unten beschrieben, da es ein gemeinsamer Authentifizierungsparameter unter vielen Authentifizierungsschemata ist.
    - `<realm>` {{optional_inline}}
      - : Der String `realm`, gefolgt von `=` und einem in Anführungszeichen gesetzten String, der einen geschützten Bereich beschreibt, z.B. `realm="staging environment"`.
        Ein Realm ermöglicht es einem Server, die Bereiche, die er schützt, zu partitionieren (wenn dies von einem Schema unterstützt wird, das eine solche Partitionierung zulässt).
        Einige Clients zeigen diesen Wert dem Benutzer an, um ihn darüber zu informieren, welche besonderen Anmeldeinformationen erforderlich sind — obwohl dies die meisten Browser nicht mehr tun, um Phishing entgegenzuwirken.
        Das einzige zuverlässig unterstützte Zeichensatz für diesen Wert ist `us-ascii`.
        Wenn kein Realm angegeben ist, zeigen Clients oft einen formatierten Hostnamen an.
- `<token68>` {{optional_inline}}
  - : Ein Token, das für einige Schemata nützlich sein kann.
    Das Token ermöglicht die 66 nicht reservierten URI-Zeichen plus einige andere.
    Es kann eine {{Glossary("base64", "Base64")}}, Base64url, Base32 oder Base16 (Hex) Kodierung, mit oder ohne Auffüllung, aber ohne Leerzeichen enthalten.
    Die `token68`-Alternative zu auth-param-Listen wird aus Konsistenzgründen mit älteren Authentifizierungsschemata unterstützt.

Im Allgemeinen müssen Sie die relevanten Spezifikationen für die Authentifizierungsparameter für jedes `<auth-scheme>` überprüfen.
Die folgenden Abschnitte beschreiben Token- und Authentifizierungsparameter für einige gängige Authentifizierungsschemata.

### Basic-Authentifizierungsdirektiven

- `<realm>`
  - : Ein `<realm>` wie [oben beschrieben](#realm).
    Beachten Sie, dass das Realm für die `Basic`-Authentifizierung obligatorisch ist.
- `charset="UTF-8"` {{optional_inline}}
  - : Teilt dem Client das bevorzugte Kodierungsschema des Servers bei der Übermittlung eines Benutzernamens und Passworts mit.
    Der einzige erlaubte Wert ist der nicht-empfindliche String `UTF-8`.
    Dies steht nicht in Bezug zur Kodierung des Realm-Strings.

### Digest-Authentifizierungsdirektiven

- `<realm>` {{optional_inline}}
  - : Ein `<realm>` wie [oben beschrieben](#realm), das angibt, welcher Benutzername/Passwort verwendet werden soll.
    Sollte minimal den Hostnamen enthalten, könnte jedoch die Benutzer oder Gruppe angeben, die Zugang haben.
- `domain` {{optional_inline}}
  - : Eine in Anführungszeichen gesetzte, durch Leerzeichen getrennte Liste von URI-Präfixen, die alle Orte definieren, an denen die Authentifizierungsinformationen verwendet werden können.
    Wenn dieser Schlüssel nicht angegeben ist, können die Authentifizierungsinformationen überall im Web-Root verwendet werden.
- `nonce`
  - : Ein vom Server angegebener, in Anführungszeichen gesetzter String, den der Server verwenden kann, um die Lebensdauer zu steuern, in der bestimmte Anmeldeinformationen als gültig angesehen werden.
    Dies muss jedes Mal eindeutig generiert werden, wenn eine 401-Antwort erstellt wird, und kann häufiger regeneriert werden (zum Beispiel, um zu erlauben, dass ein Digest nur einmal verwendet wird).
    Die Spezifikation enthält Ratschläge zu möglichen Algorithmen zur Generierung dieses Wertes.
    Der nonce-Wert ist für den Client undurchsichtig.
- `opaque`
  - : Ein vom Server angegebener, in Anführungszeichen gesetzter String, der unverändert in der {{HTTPHeader("Authorization")}} zurückgegeben werden sollte.
    Dieser ist für den Client undurchsichtig. Dem Server wird empfohlen, Base64- oder hexadezimale Daten einzuschließen.
- `stale` {{optional_inline}}
  - : Eine nicht-empfindliche Flagge, die anzeigt, dass die vorherige Anfrage vom Client abgelehnt wurde, weil der verwendete `nonce` zu alt (veraltet) ist.
    Wenn dies `true` ist, kann die Anfrage unter Verwendung desselben Benutzernamens/Passworts verschlüsselt mit dem neuen `nonce` erneut versucht werden.
    Wenn es irgendeinen anderen Wert hat, sind der Benutzername/das Passwort ungültig und müssen vom Benutzer erneut angefordert werden.
- `algorithm` {{optional_inline}}
  - : Ein String, der den Algorithmus angibt, der zur Erstellung eines Digests verwendet wird.
    Gültige Nicht-Sitzungswerte sind: `MD5` (Standard, wenn `algorithm` nicht angegeben ist), `SHA-256`, `SHA-512`.
    Gültige Sitzungswerte sind: `MD5-sess`, `SHA-256-sess`, `SHA-512-sess`.
- `qop`
  - : In Anführungszeichen gesetzter String, der die vom Server unterstützte Schutzqualität angibt. Diese muss angegeben werden, und nicht erkannte Optionen müssen ignoriert werden.
    - `"auth"`: Authentifizierung
    - `"auth-int"`: Authentifizierung mit Integritätsschutz
- `charset="UTF-8"` {{optional_inline}}
  - : Teilt dem Client das bevorzugte Kodierungsschema des Servers bei der Übermittlung eines Benutzernamens und Passworts mit.
    Der einzige erlaubte Wert ist der nicht-empfindliche String "UTF-8".
- `userhash` {{optional_inline}}
  - : Ein Server kann `"true"` angeben, um darauf hinzuweisen, dass er das Hashing von Benutzernamen unterstützt (Standard ist `"false"`)

### HTTP Ursprungsgebundene Authentifizierung (HOBA)

- `<challenge>`
  - : Eine Menge von Paaren im Format `<len>:<value>`, die zusammengefügt werden, um einem Client gegeben zu werden.
    Die Herausforderung besteht aus einem Nonce, Algorithmus, Ursprung, Realm, Schlüsselidentifikator und der Herausforderung.
- `<max-age>`
  - : Die Anzahl der Sekunden ab dem Zeitpunkt, an dem die HTTP-Antwort ausgegeben wird, für die Antworten auf diese Herausforderung akzeptiert werden können.
- `<realm>` {{optional_inline}}
  - : Wie oben im [Abschnitt Direktiven](#direktiven).

## Beispiele

### Mehrere Authentifizierungsherausforderungen ausgeben

Mehrere Herausforderungen können in einem einzigen Antwortheader angegeben werden:

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

Ein Server, der nur Basic-Authentifizierung unterstützt, könnte einen `WWW-Authenticate`-Antwort-Header haben, der so aussieht:

```http
HTTP/1.1 401 Unauthorized
WWW-Authenticate: Basic realm="Staging server", charset="UTF-8"
```

Ein User-Agent, der diesen Header empfängt, würde zuerst den Benutzer nach seinem Benutzernamen und Passwort fragen und dann die Ressource erneut anfordern, wobei die kodierten Anmeldeinformationen im `Authorization`-Header enthalten sind.
Der `Authorization`-Header könnte so aussehen:

```http
Authorization: Basic YWxhZGRpbjpvcGVuc2VzYW1l
```

Für die `Basic`-Authentifizierung werden die Anmeldeinformationen erstellt, indem zuerst der Benutzername und das Passwort mit einem Doppelpunkt kombiniert werden (`aladdin:opensesame`), und dann der resultierende String in {{Glossary("Base64", "`base64`")}} kodiert wird (`YWxhZGRpbjpvcGVuc2VzYW1l`).

> [!NOTE]
> Siehe auch [HTTP-Authentifizierung](/de/docs/Web/HTTP/Guides/Authentication) für Beispiele, wie Sie Apache- oder Nginx-Server konfigurieren können, um Ihre Seite mit HTTP-Basic-Authentifizierung zu passwortschützen.

### Digest-Authentifizierung mit SHA-256 und MD5

> [!NOTE]
> Dieses Beispiel stammt aus {{RFC("7616")}} "HTTP Digest Access Authentication" (andere Beispiele in der Spezifikation zeigen die Verwendung von `SHA-512`, `charset` und `userhash`).

Der Client versucht, auf ein Dokument unter der URI `http://www.example.org/dir/index.html` zuzugreifen, das mittels Digest-Authentifizierung geschützt ist.
Der Benutzername für dieses Dokument ist "Mufasa" und das Passwort ist "Circle of Life" (beachten Sie das einzelne Leerzeichen zwischen den Wörtern).

Das erste Mal, wenn der Client das Dokument anfordert, wird kein {{HTTPHeader("Authorization")}}-Header-Feld gesendet.
Hier antwortet der Server mit einer HTTP 401-Nachricht, die eine Herausforderung für jeden Digest-Algorithmus enthält, den er unterstützt, in der Reihenfolge seiner Präferenz (`SHA256` und dann `MD5`).

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

Der Client fordert den Benutzer zu seinem Benutzernamen und Passwort auf und antwortet dann mit einer neuen Anfrage, die die Anmeldeinformationen im {{HTTPHeader("Authorization")}}-Header-Feld kodiert.
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

Ein Server, der HOBA-Authentifizierung unterstützt, könnte einen `WWW-Authenticate`-Antwort-Header haben, der so aussieht:

```http
HTTP/1.1 401 Unauthorized
WWW-Authenticate: HOBA max-age="180", challenge="16:MTEyMzEyMzEyMw==1:028:https://www.example.com:80800:3:MTI48:NjgxNDdjOTctNDYxYi00MzEwLWJlOWItNGM3MDcyMzdhYjUz"
```

Der zu signierende Blob wird aus diesen Teilen erstellt: `www.example.com` unter Verwendung des Ports 8080, der Nonce ist `1123123123`, der Algorithmus zum Signieren ist RSA-SHA256, der Schlüsselidentifikator ist `123`, und schließlich die Herausforderung `68147c97-461b-4310-be9b-4c707237ab53`.

Ein Client würde diesen Header empfangen, die Herausforderung extrahieren, sie mit seinem privaten Schlüssel, der dem Schlüsselidentifikator 123 in unserem Beispiel mit RSA-SHA256 entspricht, signieren und dann das Ergebnis im `Authorization`-Header als punktgetrennte Schlüssel-ID, Herausforderung, Nonce und Signatur senden.

```http
Authorization: 123.16:MTEyMzEyMzEyMw==1:028:https://www.example.com:80800:3:MTI48:NjgxNDdjOTctNDYxYi00MzEwLWJlOWItNGM3MDcyMzdhYjUz.1123123123.<signature-of-challenge>
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
