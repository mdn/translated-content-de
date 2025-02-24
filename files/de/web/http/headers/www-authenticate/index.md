---
title: WWW-Authenticate
slug: Web/HTTP/Headers/WWW-Authenticate
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{HTTPSidebar}}

Der HTTP **`WWW-Authenticate`** {{Glossary("response_header", "Antwort-Header")}} gibt die [HTTP-Authentifizierungsmethoden](/de/docs/Web/HTTP/Authentication) (oder {{Glossary("challenge", "Herausforderungen")}}) an, die verwendet werden könnten, um Zugriff auf eine bestimmte Ressource zu erhalten.

Dieser Header ist Teil des [Allgemeinen HTTP-Authentifizierungs-Frameworks](/de/docs/Web/HTTP/Authentication#the_general_http_authentication_framework), welches mit einer Anzahl von [Authentifizierungsschemata](/de/docs/Web/HTTP/Authentication#authentication_schemes) verwendet werden kann. Jede Herausforderung identifiziert ein vom Server unterstütztes Schema und zusätzliche Parameter, die für diesen Schema-Typ definiert sind.

Ein Server, der [HTTP-Authentifizierung](/de/docs/Web/HTTP/Authentication) verwendet, antwortet mit einer {{HTTPStatus("401", "401 Unauthorized")}} Antwort auf eine Anfrage für eine geschützte Ressource. Diese Antwort muss mindestens einen `WWW-Authenticate` Header und mindestens eine Herausforderung enthalten, um anzuzeigen, welche Authentifizierungsschemata verwendet werden können, um auf die Ressource zuzugreifen, und um zusätzliche Daten bereitzustellen, die jedes bestimmte Schema benötigt.

Mehrere Herausforderungen sind in einem `WWW-Authenticate` Header erlaubt, und mehrere `WWW-Authenticate` Header sind in einer Antwort erlaubt. Ein Server kann den `WWW-Authenticate` Header auch in anderen Antwortnachrichten einschließen, um anzuzeigen, dass die Bereitstellung von Anmeldeinformationen die Antwort beeinflussen könnte.

Nachdem der `WWW-Authenticate` Header empfangen wurde, fordert der Client typischerweise den Nutzer zur Eingabe von Anmeldeinformationen auf und fordert dann die Ressource erneut an. Diese neue Anfrage verwendet den {{HTTPHeader("Authorization")}} Header, um die Anmeldeinformationen an den Server zu übermitteln, die für die ausgewählte Authentifizierungsmethode entsprechend kodiert sind. Der Client sollte die sicherste der Herausforderungen auswählen, die er versteht (beachten Sie, dass in einigen Fällen die "sicherste" Methode umstritten ist).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anfrage-Header")}}</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
WWW-Authenticate: <challenge>
```

Wo ein `<challenge>` aus einem `<auth-scheme>`, gefolgt von einem optionalen `<token68>` oder einer durch Kommas getrennten Liste von `<auth-params>` besteht:

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

Das Vorhandensein eines `token68` oder von Authentifizierungsparametern hängt vom ausgewählten `<auth-scheme>` ab. Zum Beispiel erfordert die [Basisauthentifizierung](/de/docs/Web/HTTP/Authentication#basic_authentication_scheme) ein `<realm>` und erlaubt optional die Verwendung des `charset` Schlüssels, unterstützt jedoch kein `token68`:

```http
WWW-Authenticate: Basic realm="Dev", charset="UTF-8"
```

Mehrere Herausforderungen können in einer durch Kommas getrennten Liste gesendet werden

```http
WWW-Authenticate: <challenge>, …, <challengeN>
```

Mehrere Header können ebenfalls in einer einzelnen Antwort gesendet werden:

```http
WWW-Authenticate: <challenge>
WWW-Authenticate: <challengeN>
```

## Direktiven

- `<auth-scheme>`
  - : Ein nicht case-sensitives Token, das das verwendete [Authentifizierungsschema](/de/docs/Web/HTTP/Authentication#authentication_schemes) angibt. Einige der häufigeren Typen sind [`Basic`](/de/docs/Web/HTTP/Authentication#basic_authentication_scheme), `Digest`, `Negotiate` und `AWS4-HMAC-SHA256`. Die IANA pflegt eine [Liste von Authentifizierungsschemata](https://www.iana.org/assignments/http-authschemes/http-authschemes.xhtml), aber es gibt andere von Hostdiensten angebotene Schemata.
- `<auth-param>` {{optional_inline}}
  - : Ein Authentifizierungsparameter, dessen Format vom `<auth-scheme>` abhängt. `<realm>` wird unten beschrieben, da es ein häufiger Authentifizierungsparameter unter vielen Authentifizierungsschemata ist.
    - `<realm>` {{optional_inline}}
      - : Der String `realm`, gefolgt von `=` und einem in Anführungszeichen gesetzten String, der einen geschützten Bereich beschreibt, zum Beispiel `realm="staging environment"`. Ein Realm ermöglicht es einem Server, die Bereiche zu partitionieren, die er schützt (wenn dies von einem Schema unterstützt wird, das solch eine Partitionierung erlaubt). Einige Clients zeigen diesen Wert dem Nutzer an, um ihn darüber zu informieren, welche besonderen Anmeldeinformationen erforderlich sind — obwohl die meisten Browser dies eingestellt haben, um Phishing entgegenzuwirken. Das einzige zuverlässig unterstützte Zeichensatz für diesen Wert ist `us-ascii`. Wenn kein Realm angegeben ist, zeigen Clients häufig stattdessen einen formatierten Hostnamen an.
- `<token68>` {{optional_inline}}
  - : Ein Token, das für einige Schemata nützlich sein kann. Das Token erlaubt die 66 nicht reservierten URI-Zeichen plus einige andere. Es kann eine {{Glossary("base64", "base64")}}, base64url, base32 oder base16 (hex) Kodierung enthalten, mit oder ohne Padding, jedoch ohne Leerzeichen. Die token68-Alternative zu auth-param Listen wird aus Gründen der Konsistenz mit älteren Authentifizierungsschemata unterstützt.

In der Regel müssen Sie die relevanten Spezifikationen für die für jedes `<auth-scheme>` benötigten Authentifizierungsparameter überprüfen. Die folgenden Abschnitte beschreiben Token- und Authentifizierungsparameter für einige gängige Authentifizierungsschemata.

### Basis-Authentifizierungsdirektiven

- `<realm>`
  - : Ein `<realm>` wie [oben beschrieben](#realm). Beachten Sie, dass das Realm für die `Basic`-Authentifizierung obligatorisch ist.
- `charset="UTF-8"` {{optional_inline}}
  - : Teilt dem Client das bevorzugte Kodierungsschema des Servers bei der Übermittlung eines Benutzernamens und eines Passworts mit. Der einzige zulässige Wert ist der case-insensitive String `UTF-8`. Dies bezieht sich nicht auf die Kodierung des Realm-Strings.

### Digest-Authentifizierungsdirektiven

- `<realm>` {{optional_inline}}
  - : Ein `<realm>` wie [oben beschrieben](#realm), der angibt, welcher Benutzername und welches Passwort verwendet werden sollen. Sollte mindestens den Hostnamen enthalten, könnte aber auch angeben, welche Benutzer oder Gruppe Zugriff haben.
- `domain` {{optional_inline}}
  - : Eine in Anführungszeichen gesetzte, durch Leerzeichen getrennte Liste von URI-Präfixen, die alle Orte definieren, an denen die Authentifizierungsinformationen verwendet werden dürfen. Wenn dieser Schlüssel nicht angegeben ist, dürfen die Authentifizierungsinformationen überall im Web-Root verwendet werden.
- `nonce`
  - : Ein vom Server festgelegter, in Anführungszeichen gesetzter String, den der Server verwenden kann, um die Lebensdauer zu steuern, in der bestimmte Anmeldeinformationen als gültig betrachtet werden. Dies muss jedes Mal eindeutig generiert werden, wenn eine 401-Antwort erfolgt, und kann häufiger regeneriert werden (zum Beispiel indem ein Digest nur einmal verwendet werden darf). Die Spezifikation enthält Ratschläge zu möglichen Algorithmen zur Generierung dieses Wertes. Der nonce-Wert ist für den Client undurchsichtig.
- `opaque`
  - : Ein vom Server festgelegter, in Anführungszeichen gesetzter String, der unverändert im {{HTTPHeader("Authorization")}} zurückgegeben werden sollte. Dies ist für den Client undurchsichtig. Dem Server wird empfohlen, Base64- oder Hexadezimaldaten einzuschließen.
- `stale` {{optional_inline}}
  - : Eine nicht case-sensitive Flagge, die angibt, dass die vorherige Anfrage des Clients abgelehnt wurde, weil der verwendete `nonce` zu alt (veraltet) ist. Wenn dies `true` ist, kann die Anfrage mit demselben Benutzernamen/Passwort, verschlüsselt mit dem neuen `nonce`, erneut gesendet werden. Wenn es einen anderen Wert hat, sind der Benutzername/das Passwort ungültig und müssen vom Nutzer erneut angefordert werden.
- `algorithm` {{optional_inline}}
  - : Ein String, der den Algorithmus angibt, der zur Erzeugung eines Digests verwendet wird. Gültige Nicht-Session-Werte sind: `MD5` (Standard, wenn `algorithm` nicht angegeben ist), `SHA-256`, `SHA-512`. Gültige Session-Werte sind: `MD5-sess`, `SHA-256-sess`, `SHA-512-sess`.
- `qop`
  - : Ein in Anführungszeichen gesetzter String, der die vom Server unterstützte Qualität des Schutzes angibt. Dies muss bereitgestellt werden und nicht erkannte Optionen müssen ignoriert werden.
    - `"auth"`: Authentifizierung
    - `"auth-int"`: Authentifizierung mit Integritätsschutz
- `charset="UTF-8"` {{optional_inline}}
  - : Teilt dem Client das bevorzugte Kodierungsschema des Servers bei der Übermittlung eines Benutzernamens und eines Passworts mit. Der einzige zulässige Wert ist der case-insensitive String "UTF-8".
- `userhash` {{optional_inline}}
  - : Ein Server kann `"true"` angeben, um anzuzeigen, dass er die Hashung von Benutzernamen unterstützt (Standard ist `"false"`).

### HTTP Origin-Bound Authentication (HOBA)

- `<challenge>`
  - : Eine Reihe von Paaren im Format `<len>:<value>`, die zusammengefügt werden, um an einen Client übergeben zu werden. Die Herausforderung besteht aus einem Nonce, Algorithmus, Ursprungsdomain, Realm, Schlüsselbezeichner und der Herausforderung selbst.
- `<max-age>`
  - : Die Anzahl der Sekunden ab dem Zeitpunkt, an dem die HTTP-Antwort ausgegeben wird, für die Antworten auf diese Herausforderung akzeptiert werden können.
- `<realm>` {{optional_inline}}
  - : Wie oben im [Direktiven](#direktiven)-Abschnitt beschrieben.

## Beispiele

### Ausgabe mehrerer Authentifizierungsherausforderungen

Mehrere Herausforderungen können in einem einzigen Antwort-Header angegeben werden:

```http
HTTP/1.1 401 Unauthorized
WWW-Authenticate: challenge1, …, challengeN
```

Mehrere Herausforderungen können in separaten `WWW-Authenticate` Headern in derselben Antwort gesendet werden:

```http
HTTP/1.1 401 Unauthorized
WWW-Authenticate: challenge1
WWW-Authenticate: challengeN
```

### Basis-Authentifizierung

Ein Server, der nur Basisauthentifizierung unterstützt, könnte einen `WWW-Authenticate` Antwort-Header haben, der so aussieht:

```http
HTTP/1.1 401 Unauthorized
WWW-Authenticate: Basic realm="Staging server", charset="UTF-8"
```

Ein User-Agent, der diesen Header erhält, würde zuerst den Nutzer nach dessen Benutzernamen und Passwort fragen und dann die Ressource mit den kodierten Anmeldeinformationen im `Authorization` Header erneut anfordern. Der `Authorization` Header könnte so aussehen:

```http
Authorization: Basic YWxhZGRpbjpvcGVuc2VzYW1l
```

Für `Basic` Authentifizierung werden die Anmeldeinformationen gebildet, indem zuerst der Benutzername und das Passwort mit einem Doppelpunkt kombiniert werden (`aladdin:opensesame`), und dann der resultierende String in {{Glossary("Base64", "`base64`")}} kodiert wird (`YWxhZGRpbjpvcGVuc2VzYW1l`).

> [!NOTE]
> Siehe auch [HTTP-Authentifizierung](/de/docs/Web/HTTP/Authentication) für Beispiele, wie Apache oder Nginx-Server so konfiguriert werden können, dass Ihre Website mit HTTP-Basis-Authentifizierung passwortgeschützt wird.

### Digest-Authentifizierung mit SHA-256 und MD5

> [!NOTE]
> Dieses Beispiel stammt aus {{RFC("7616")}} "HTTP Digest Access Authentication" (andere Beispiele in der Spezifikation zeigen die Verwendung von `SHA-512`, `charset` und `userhash`).

Der Client versucht, auf ein Dokument an der URI `http://www.example.org/dir/index.html` zuzugreifen, das über Digest-Authentifizierung geschützt ist. Der Benutzername für dieses Dokument ist "Mufasa" und das Passwort ist "Circle of Life" (es ist ein einzelnes Leerzeichen zwischen jedem der Wörter).

Beim ersten Mal, wenn der Client das Dokument anfordert, wird kein {{HTTPHeader("Authorization")}} Header-Feld gesendet. Hier antwortet der Server mit einer HTTP 401-Nachricht, die eine Herausforderung für jeden Digest-Algorithmus enthält, den er unterstützt, in seiner Präferenzreihenfolge (`SHA256` und dann `MD5`).

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

Der Client fordert den Nutzer zur Eingabe des Benutzernamens und Passworts auf und antwortet dann mit einer neuen Anfrage, die die Anmeldeinformationen im {{HTTPHeader("Authorization")}} Header-Feld kodiert. Wenn der Client den MD5 Digest ausgewählt hat, könnte das {{HTTPHeader("Authorization")}} Header-Feld wie unten gezeigt aussehen:

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

Wenn der Client den SHA-256 Digest ausgewählt hat, könnte das {{HTTPHeader("Authorization")}} Header-Feld wie unten gezeigt aussehen:

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
HTTP/1.1 401 Unauthorized
WWW-Authenticate: HOBA max-age="180", challenge="16:MTEyMzEyMzEyMw==1:028:https://www.example.com:80800:3:MTI48:NjgxNDdjOTctNDYxYi00MzEwLWJlOWItNGM3MDcyMzdhYjUz"
```

Die zu signierende Herausforderung besteht aus diesen Teilen: `www.example.com`, das Port 8080 verwendet, das Nonce ist `1123123123`, der Algorithmus zum Signieren ist RSA-SHA256, der Schlüsselbezeichner ist `123` und schließlich die Herausforderung ist `68147c97-461b-4310-be9b-4c707237ab53`.

Ein Client würde diesen Header empfangen, die Herausforderung extrahieren, sie mit seinem privaten Schlüssel signieren (der in unserem Beispiel dem Schlüsselbezeichner 123 mit RSA-SHA256 entspricht) und dann das Ergebnis im `Authorization` Header als punktgetrennte Kombination aus Schlüssel-ID, Herausforderung, Nonce und Signatur senden.

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
