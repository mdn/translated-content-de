---
title: Autorisierung
slug: Web/HTTP/Headers/Authorization
l10n:
  sourceCommit: bb23abe84f0f4da3cf5d72a66d356cf5f9e3cfa2
---

{{HTTPSidebar}}

Der HTTP-Header **`Authorization`** kann verwendet werden, um Anmeldedaten bereitzustellen, die einen User-Agent gegenüber einem Server authentifizieren und den Zugriff auf eine geschützte Ressource ermöglichen.

Der **`Authorization`**-Header wird normalerweise, aber nicht immer, gesendet, nachdem der User-Agent zuerst versucht hat, eine geschützte Ressource ohne Anmeldedaten anzufordern. Der Server antwortet mit einer {{HTTPStatus("401")}} `Unauthorized`-Meldung, die mindestens einen {{HTTPHeader("WWW-Authenticate")}}-Header enthält. Dieser Header gibt an, welche Authentifizierungsschemata zum Zugriff auf die Ressource verwendet werden können (und alle zusätzlichen Informationen, die der Client zur Verwendung benötigt). Der User-Agent sollte das sicherste Authentifizierungsschema auswählen, das er unterstützt, den Benutzer nach seinen Anmeldedaten fragen und dann die Ressource erneut anfordern (einschließlich der kodierten Anmeldedaten im **`Authorization`**-Header).

Dieser Header wird bei Weiterleitungen über Ursprünge hinweg entfernt.

> [!NOTE]
> Dieser Header ist Teil des [allgemeinen HTTP-Authentifizierungs-Frameworks](/de/docs/Web/HTTP/Authentication#the_general_http_authentication_framework).
> Er kann mit einer Reihe von [Authentifizierungsschemata](/de/docs/Web/HTTP/Authentication#authentication_schemes) verwendet werden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Authorization: <auth-scheme> <authorization-parameters>
```

Basis-Authentifizierung

```http
Authorization: Basic <credentials>
```

Digest-Authentifizierung

```http
Authorization: Digest username=<username>,
    realm="<realm>",
    uri="<url>",
    algorithm=<algorithm>,
    nonce="<nonce>",
    nc=<nc>,
    cnonce="<cnonce>",
    qop=<qop>,
    response="<response>",
    opaque="<opaque>"
```

## Direktiven

- `<auth-scheme>`

  - : Das [Authentifizierungsschema](/de/docs/Web/HTTP/Authentication#authentication_schemes), das definiert, wie die Anmeldedaten kodiert sind.
    Einige der häufigeren Typen sind (nicht Groß-/Kleinschreibungs-empfindlich): [`Basic`](/de/docs/Web/HTTP/Authentication#basic_authentication_scheme), `Digest`, `Negotiate` und `AWS4-HMAC-SHA256`.

    > [!NOTE]
    > Für weitere Informationen/Optionen siehe [HTTP-Authentifizierung > Authentifizierungsschemata](/de/docs/Web/HTTP/Authentication#authentication_schemes)

Abgesehen von `<auth-scheme>` sind die restlichen Direktiven spezifisch für jedes [Authentifizierungsschema](/de/docs/Web/HTTP/Authentication#authentication_schemes). Im Allgemeinen müssen Sie die entsprechenden Spezifikationen dafür überprüfen (Schlüssel für einen kleinen Teil von Schemata sind unten aufgeführt).

### Basic

- \<credentials>

  - : Die Anmeldedaten, kodiert gemäß dem angegebenen Schema.

    > [!NOTE]
    > Informationen zum Kodierungsalgorithmus finden Sie in den Beispielen: unten, in {{HTTPHeader("WWW-Authenticate")}}, in [HTTP-Authentifizierung](/de/docs/Web/HTTP/Authentication) und in den entsprechenden Spezifikationen.

### Digest

- \<response>
  - : Eine Zeichenkette der Hexadezimalziffern, die beweist, dass der Benutzer ein Passwort kennt.
    Der Algorithmus kodiert den Benutzernamen und das Passwort, Realm, cnonce, qop, nc usw.
    Es ist detailliert in der Spezifikation beschrieben.
- `username`
  - : Eine zitierte Zeichenkette, die den Benutzernamen für das angegebene `realm` im Klartext oder als Hashcode in hexadezimaler Notation enthält.
    Wenn der Name Zeichen enthält, die im Feld nicht erlaubt sind, kann stattdessen `username*` verwendet werden (nicht "sowie").
- `username*`
  - : Der Benutzername, formatiert mit einer in RFC5987 definierten erweiterten Notation.
    Dies sollte nur verwendet werden, wenn der Name nicht in `username` kodiert werden kann und wenn `userhash` auf `"false"` gesetzt ist.
- `uri`
  - : Die _Effektive Anforderungs-URI_. Siehe die Spezifikation für weitere Informationen.
- `realm`
  - : Realm des angeforderten Benutzername/Passwort (sollte ebenfalls mit dem Wert in der entsprechenden {{HTTPHeader("WWW-Authenticate")}}-Antwort für die angeforderte Ressource übereinstimmen).
- `opaque`
  - : Der Wert in der entsprechenden {{HTTPHeader("WWW-Authenticate")}}-Antwort für die angeforderte Ressource.
- `algorithm`
  - : Der Algorithmus, der zur Berechnung des Digests verwendet wird. Muss ein unterstützter Algorithmus aus der {{HTTPHeader("WWW-Authenticate")}}-Antwort für die angeforderte Ressource sein.
- `qop`
  - : Ein Token, das die _Schutzqualität_ angibt, die auf die Nachricht angewendet wird.
    Muss mit dem einen Wert im Satz übereinstimmen, der in der {{HTTPHeader("WWW-Authenticate")}}-Antwort für die angeforderte Ressource angegeben ist.
    - `"auth"`: Authentifizierung
    - `"auth-int"`: Authentifizierung mit Integritätsschutz
- `cnonce`
  - : Eine zitierte {{Glossary("ASCII")}}-Zeichenfolge, die vom Client bereitgestellt wird.
    Diese wird sowohl vom Client als auch vom Server verwendet, um gegenseitige Authentifizierung bereitzustellen, Schutz der Nachrichtenintegrität zu bieten und "gewählte Klartextangriffe" zu vermeiden.
    Weitere Informationen finden Sie in der Spezifikation.
- `nc`
  - : Nonce-Zähler. Der hexadezimale Zähler von Anfragen, bei denen der Client den aktuellen `cnonce`-Wert gesendet hat (einschließlich der aktuellen Anfrage).
    Der Server kann doppelte `nc`-Werte verwenden, um Wiederholungsanfragen zu erkennen.
- `userhash` {{optional_inline}}
  - : `"true"`, wenn der Benutzername gehasht wurde. Standardmäßig `"false"`.

## Beispiele

### Basis-Authentifizierung

Für die `"Basic"`-Authentifizierung werden die Anmeldedaten konstruiert, indem zuerst der Benutzername und das Passwort mit einem Doppelpunkt kombiniert werden (`aladdin:opensesame`), und dann durch Kodierung der resultierenden Zeichenkette in [`base64`](/de/docs/Glossary/Base64) (`YWxhZGRpbjpvcGVuc2VzYW1l`).

```http
Authorization: Basic YWxhZGRpbjpvcGVuc2VzYW1l
```

> **Warnung:** {{Glossary("Base64")}}-Kodierung kann leicht rückgängig gemacht werden, um den ursprünglichen Namen und das Passwort zu erhalten, sodass die Basis-Authentifizierung völlig unsicher ist.
> {{Glossary("HTTPS")}} wird immer empfohlen, wenn Authentifizierung verwendet wird, aber noch mehr, wenn die `Basic`-Authentifizierung verwendet wird.

Siehe auch [HTTP-Authentifizierung](/de/docs/Web/HTTP/Authentication) für Beispiele, wie Apache- oder Nginx-Server konfiguriert werden, um Ihre Website mit HTTP-Basis-Authentifizierung kennwortzuschützen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTTP-Authentifizierung](/de/docs/Web/HTTP/Authentication)
- {{HTTPHeader("WWW-Authenticate")}}
- {{HTTPHeader("Proxy-Authorization")}}
- {{HTTPHeader("Proxy-Authenticate")}}
- {{HTTPStatus("401")}}, {{HTTPStatus("403")}}, {{HTTPStatus("407")}}
