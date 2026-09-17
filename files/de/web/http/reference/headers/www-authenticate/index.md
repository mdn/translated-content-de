---
title: WWW-Authenticate header
short-title: WWW-Authenticate
slug: Web/HTTP/Reference/Headers/WWW-Authenticate
l10n:
  sourceCommit: a4c63d2855b2f557e7d1ee821dee65011d569a41
---

Der HTTP-**`WWW-Authenticate`**-{{Glossary("response_header", "Antwort-Header")}} kündigt die Methoden der [HTTP-Authentifizierung](/de/docs/Web/HTTP/Guides/Authentication) (oder {{Glossary("challenge", "Challenges")}}) an, die verwendet werden können, um Zugriff auf eine bestimmte Ressource zu erhalten.

Dieser Header ist Teil des [allgemeinen HTTP-Authentifizierungsframeworks](/de/docs/Web/HTTP/Guides/Authentication#the_general_http_authentication_framework), das mit einer Reihe von [Authentifizierungsschemas](/de/docs/Web/HTTP/Guides/Authentication#authentication_schemes) verwendet werden kann.
Jede Challenge identifiziert ein vom Server unterstütztes Schema sowie zusätzliche Parameter, die für diesen Schematyp definiert sind.

Ein Server, der [HTTP-Authentifizierung](/de/docs/Web/HTTP/Guides/Authentication) verwendet, antwortet auf eine Anfrage nach einer geschützten Ressource mit einer Antwort {{HTTPStatus("401", "401 Unauthorized")}}.
Diese Antwort muss mindestens einen `WWW-Authenticate`-Header und mindestens eine Challenge enthalten, um anzugeben, welche Authentifizierungsschemas für den Zugriff auf die Ressource verwendet werden können und welche zusätzlichen Daten jedes bestimmte Schema benötigt.

Mehrere Challenges sind in einem `WWW-Authenticate`-Header zulässig, und mehrere `WWW-Authenticate`-Header sind in einer Antwort zulässig.
Ein Server kann den `WWW-Authenticate`-Header auch in anderen Antwortnachrichten einschließen, um anzugeben, dass die Angabe von Anmeldedaten die Antwort beeinflussen könnte.

Nach dem Empfang des `WWW-Authenticate`-Headers fordert ein Client den Benutzer typischerweise zur Eingabe von Anmeldedaten auf und fragt die Ressource dann erneut an.
Diese neue Anfrage verwendet den Header {{HTTPHeader("Authorization")}}, um die für die ausgewählte Authentifizierungsmethode entsprechend codierten Anmeldedaten an den Server zu übermitteln.
Vom Client wird erwartet, dass er die sicherste der Challenges auswählt, die er versteht (beachten Sie, dass die „sicherste“ Methode in einigen Fällen umstritten ist).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
WWW-Authenticate: <challenge>
```

Dabei besteht eine `<challenge>` aus einem `<auth-scheme>`, gefolgt von einem optionalen `<token68>` oder einer durch Kommas getrennten Liste von `<auth-params>`:

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

Das Vorhandensein eines `token68` oder von Authentifizierungsparametern hängt vom ausgewählten `<auth-scheme>` ab.
Beispielsweise erfordert die [Basic-Authentifizierung](/de/docs/Web/HTTP/Guides/Authentication#basic_authentication_scheme) ein `<realm>` und erlaubt die optionale Verwendung des Schlüssels `charset`, unterstützt jedoch kein `token68`:

```http
WWW-Authenticate: Basic realm="Dev", charset="UTF-8"
```

Mehrere Challenges können in einer durch Kommas getrennten Liste gesendet werden:

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
  - : Ein Token ohne Beachtung der Groß- und Kleinschreibung, das das verwendete [Authentifizierungsschema](/de/docs/Web/HTTP/Guides/Authentication#authentication_schemes) angibt.
    Zu den häufigeren Typen gehören [`Basic`](/de/docs/Web/HTTP/Guides/Authentication#basic_authentication_scheme), `Digest`, `Negotiate` und `AWS4-HMAC-SHA256`.
    IANA verwaltet eine [Liste von Authentifizierungsschemas](https://www.iana.org/assignments/http-authschemes), es gibt jedoch auch andere von Hostdiensten angebotene Schemata.
- `<auth-param>` {{optional_inline}}
  - : Ein Authentifizierungsparameter, dessen Format vom `<auth-scheme>` abhängt.
    `<realm>` wird unten beschrieben, da es bei vielen Authentifizierungsschemas ein häufiger Authentifizierungsparameter ist.
    - `<realm>` {{optional_inline}}
      - : Die Zeichenfolge `realm`, gefolgt von `=` und einer Zeichenfolge in Anführungszeichen, die einen geschützten Bereich beschreibt, beispielsweise `realm="staging environment"`.
        Ein Realm ermöglicht es einem Server, die Bereiche, die er schützt, zu unterteilen (wenn dies von einem Schema unterstützt wird, das eine solche Unterteilung erlaubt).
        Einige Clients zeigen diesen Wert dem Benutzer an, um ihn darüber zu informieren, welche bestimmten Anmeldedaten erforderlich sind — die meisten Browser haben dies jedoch eingestellt, um Phishing entgegenzuwirken.
        Der einzig zuverlässig unterstützte Zeichensatz für diesen Wert ist `us-ascii`.
        Wenn kein Realm angegeben ist, zeigen Clients stattdessen häufig einen formatierten Hostnamen an.
- `<token68>` {{optional_inline}}
  - : Ein Token, das für einige Schemata nützlich sein kann.
    Das Token erlaubt die 66 nicht reservierten URI-Zeichen sowie einige weitere.
    Es kann eine {{Glossary("base64", "base64")}}-, base64url-, base32- oder base16-(hex)-Codierung mit oder ohne Padding enthalten, jedoch keine Leerzeichen.
    Die `token68`-Alternative zu `auth-param`-Listen wird aus Konsistenzgründen mit älteren Authentifizierungsschemas unterstützt.

Im Allgemeinen müssen Sie die jeweiligen Spezifikationen prüfen, um die für jedes `<auth-scheme>` erforderlichen Authentifizierungsparameter zu ermitteln.
Die folgenden Abschnitte beschreiben Token- und Authentifizierungsparameter für einige gängige Authentifizierungsschemas.

### Basic-Authentifizierungsdirektiven

- `<realm>`
  - : Ein `<realm>` wie [oben beschrieben](#realm).
    Beachten Sie, dass der Realm für die `Basic`-Authentifizierung obligatorisch ist.
- `charset="UTF-8"` {{optional_inline}}
  - : Teilt dem Client das bevorzugte Codierungsschema des Servers mit, wenn ein Benutzername und ein Passwort übermittelt werden.
    Der einzig zulässige Wert ist die Zeichenfolge `UTF-8` ohne Beachtung der Groß- und Kleinschreibung.
    Dies bezieht sich nicht auf die Codierung der Realm-Zeichenfolge.

### Digest-Authentifizierungsdirektiven

- `<realm>` {{optional_inline}}
  - : Ein `<realm>` wie [oben beschrieben](#realm), das angibt, welcher Benutzername bzw. welches Passwort verwendet werden soll.
    Es sollte mindestens den Hostnamen enthalten, kann jedoch auch die Benutzer oder Gruppe angeben, die Zugriff haben.
- `domain` {{optional_inline}}
  - : Eine Zeichenfolge in Anführungszeichen mit einer durch Leerzeichen getrennten Liste von URI-Präfixen, die alle Orte definiert, an denen die Authentifizierungsinformationen verwendet werden können.
    Wenn dieser Schlüssel nicht angegeben ist, können die Authentifizierungsinformationen überall im Web-Root verwendet werden.
- `nonce`
  - : Eine vom Server angegebene Zeichenfolge in Anführungszeichen, mit der der Server die Gültigkeitsdauer steuern kann, innerhalb derer bestimmte Anmeldedaten als gültig betrachtet werden.
    Sie muss bei jeder 401-Antwort eindeutig generiert werden und kann häufiger neu generiert werden (beispielsweise, um die Verwendung eines Digest nur einmal zu erlauben).
    Die Spezifikation enthält Hinweise zu möglichen Algorithmen für die Generierung dieses Werts.
    Der Wert {{Glossary("Nonce", "nonce")}} ist für den Client undurchsichtig.
- `opaque`
  - : Eine vom Server angegebene Zeichenfolge in Anführungszeichen, die unverändert im {{HTTPHeader("Authorization")}} zurückgegeben werden soll.
    Sie ist für den Client undurchsichtig. Dem Server wird empfohlen, Base64- oder hexadezimale Daten einzuschließen.
- `stale` {{optional_inline}}
  - : Ein Flag ohne Beachtung der Groß- und Kleinschreibung, das angibt, dass die vorherige Anfrage des Clients abgelehnt wurde, weil der verwendete `nonce` zu alt (stale) ist.
    Wenn dies `true` ist, kann die Anfrage mit demselben Benutzernamen/Passwort erneut versucht werden, verschlüsselt mit dem neuen `nonce`.
    Hat es einen anderen Wert, sind Benutzername/Passwort ungültig und müssen erneut beim Benutzer angefordert werden.
- `algorithm` {{optional_inline}}
  - : Eine Zeichenfolge, die den zur Erstellung eines Digest verwendeten Algorithmus angibt.
    Gültige Nicht-Sitzungswerte sind: `MD5` (Standard, wenn `algorithm` nicht angegeben ist), `SHA-256`, `SHA-512`.
    Gültige Sitzungswerte sind: `MD5-sess`, `SHA-256-sess`, `SHA-512-sess`.
- `qop`
  - : Zeichenfolge in Anführungszeichen, die die vom Server unterstützte Schutzqualität angibt. Diese muss angegeben werden, und nicht erkannte Optionen müssen ignoriert werden.
    - `"auth"`: Authentifizierung
    - `"auth-int"`: Authentifizierung mit Integritätsschutz
- `charset="UTF-8"` {{optional_inline}}
  - : Teilt dem Client das bevorzugte Codierungsschema des Servers mit, wenn ein Benutzername und ein Passwort übermittelt werden.
    Der einzig zulässige Wert ist die Zeichenfolge `UTF-8` ohne Beachtung der Groß- und Kleinschreibung.
- `userhash` {{optional_inline}}
  - : Ein Server kann `"true"` angeben, um anzuzeigen, dass er das Hashing von Benutzernamen unterstützt (Standard ist `"false"`).

### HTTP Origin-Bound Authentication (HOBA)

- `<challenge>`
  - : Eine Menge von Paaren im Format `<len>:<value>`, die miteinander verkettet werden, um sie einem Client zu übergeben.
    Die Challenge besteht aus einem Nonce, Algorithmus, Origin, Realm, Schlüsselbezeichner und der Challenge.
- `<max-age>`
  - : Die Anzahl der Sekunden ab dem Zeitpunkt, an dem die HTTP-Antwort ausgegeben wird, für die Antworten auf diese Challenge akzeptiert werden können.
- `<realm>` {{optional_inline}}
  - : Wie oben im Abschnitt [Direktiven](#direktiven).

## Beispiele

### Mehrere Authentifizierungs-Challenges ausgeben

Mehrere Challenges können in einem einzelnen Antwort-Header angegeben werden:

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

### Basic-Authentifizierung

Ein Server, der nur Basic-Authentifizierung unterstützt, kann einen `WWW-Authenticate`-Antwort-Header haben, der wie folgt aussieht:

```http
HTTP/1.1 401 Unauthorized
WWW-Authenticate: Basic realm="Staging server", charset="UTF-8"
```

Ein User-Agent, der diesen Header empfängt, fordert den Benutzer zunächst zur Eingabe seines Benutzernamens und Passworts auf und fragt die Ressource dann erneut an, wobei die codierten Anmeldedaten im `Authorization`-Header enthalten sind.
Der `Authorization`-Header könnte wie folgt aussehen:

```http
Authorization: Basic YWxhZGRpbjpvcGVuc2VzYW1l
```

Für die `Basic`-Authentifizierung werden die Anmeldedaten erstellt, indem zuerst Benutzername und Passwort mit einem Doppelpunkt kombiniert werden (`aladdin:opensesame`) und die resultierende Zeichenfolge dann in {{Glossary("Base64", "`base64`")}} codiert wird (`YWxhZGRpbjpvcGVuc2VzYW1l`).

> [!NOTE]
> Siehe auch [HTTP-Authentifizierung](/de/docs/Web/HTTP/Guides/Authentication) für Beispiele zur Konfiguration von Apache- oder Nginx-Servern, um Ihre Website mit HTTP-Basic-Authentifizierung durch ein Passwort zu schützen.

### Digest-Authentifizierung mit SHA-256 und MD5

> [!NOTE]
> Dieses Beispiel stammt aus {{RFC("7616")}} „HTTP Digest Access Authentication“ (andere Beispiele in der Spezifikation zeigen die Verwendung von `SHA-512`, `charset` und `userhash`).

Der Client versucht, auf ein Dokument unter der URI `http://www.example.org/dir/index.html` zuzugreifen, das über Digest-Authentifizierung geschützt ist.
Der Benutzername für dieses Dokument ist „Mufasa“ und das Passwort ist „Circle of Life“ (beachten Sie das einzelne Leerzeichen zwischen den Wörtern).

Beim ersten Anfordern des Dokuments durch den Client wird kein {{HTTPHeader("Authorization")}}-Header-Feld gesendet.
Hier antwortet der Server mit einer HTTP-401-Nachricht, die für jeden unterstützten Digest-Algorithmus in seiner bevorzugten Reihenfolge (`SHA256` und dann `MD5`) eine Challenge enthält.

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

Der Client fordert den Benutzer zur Eingabe seines Benutzernamens und Passworts auf und antwortet dann mit einer neuen Anfrage, die die Anmeldedaten im {{HTTPHeader("Authorization")}}-Header-Feld codiert.
Wenn der Client den MD5-Digest auswählt, könnte das {{HTTPHeader("Authorization")}}-Header-Feld wie unten dargestellt aussehen:

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

Wenn der Client den SHA-256-Digest auswählt, könnte das {{HTTPHeader("Authorization")}}-Header-Feld wie unten dargestellt aussehen:

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

Ein Server, der HOBA-Authentifizierung unterstützt, kann einen `WWW-Authenticate`-Antwort-Header haben, der wie folgt aussieht:

```http
HTTP/1.1 401 Unauthorized
WWW-Authenticate: HOBA max-age="180", challenge="16:MTEyMzEyMzEyMw==1:028:https://www.example.com:8080:3:MTI48:NjgxNDdjOTctNDYxYi00MzEwLWJlOWItNGM3MDcyMzdhYjUz"
```

Die zu signierende Blob-Challenge wird aus diesen Teilen erstellt: `www.example.com` mit Port 8080, der Nonce ist `1123123123`, der Algorithmus für die Signierung ist RSA-SHA256, der Schlüsselbezeichner ist `123` und schließlich lautet die Challenge `68147c97-461b-4310-be9b-4c707237ab53`.

Ein Client würde diesen Header empfangen, die Challenge extrahieren, sie mit seinem privaten Schlüssel signieren, der in unserem Beispiel dem Schlüsselbezeichner 123 entspricht, wobei RSA-SHA256 verwendet wird, und das Ergebnis dann im `Authorization`-Header als durch Punkte getrennte Schlüssel-ID, Challenge, Nonce und Signatur senden.

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
