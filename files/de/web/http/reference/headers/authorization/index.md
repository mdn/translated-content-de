---
title: Authorization
slug: Web/HTTP/Reference/Headers/Authorization
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Der HTTP-**`Authorization`**-{{Glossary("request_header", "Anforderungsheader")}} kann verwendet werden, um Anmeldedaten bereitzustellen, die einen Benutzeragenten bei einem Server authentifizieren und den Zugriff auf geschützte Ressourcen ermöglichen.

Der `Authorization`-Header wird normalerweise, aber nicht immer, gesendet, nachdem der Benutzeragent zuerst versucht hat, eine geschützte Ressource ohne Anmeldedaten anzufordern.
Der Server antwortet mit einer {{HTTPStatus("401", "401 Unauthorized")}}-Nachricht, die mindestens einen {{HTTPHeader("WWW-Authenticate")}}-Header enthält.
Dieser Header zeigt die Authentifizierungsschemata an, die zum Zugriff auf die Ressource verwendet werden können, sowie alle zusätzlichen Informationen, die der Client benötigt, um sie zu verwenden.
Der Benutzeragent sollte das sicherste Authentifizierungsschema aus den angebotenen auswählen, das er unterstützt, den Benutzer nach seinen Anmeldedaten fragen und dann die Ressource mit den kodierten Anmeldedaten im `Authorization`-Header erneut anfordern.

Dieser Header wird bei Cross-Origin-Redirects entfernt.

> [!NOTE]
> Dieser Header ist Teil des [allgemeinen HTTP-Authentifizierungsframeworks](/de/docs/Web/HTTP/Guides/Authentication#the_general_http_authentication_framework).
> Er kann mit einer Reihe von [Authentifizierungsschemata](/de/docs/Web/HTTP/Guides/Authentication#authentication_schemes) verwendet werden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Anforderungsheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungsheader")}}</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Authorization: <auth-scheme> <authorization-parameters>

// Basic authentication
Authorization: Basic <credentials>

// Digest authentication
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

  - : Das [Authentifizierungsschema](/de/docs/Web/HTTP/Guides/Authentication#authentication_schemes), das definiert, wie die Anmeldedaten kodiert sind.
    Einige der häufigeren Typen sind (nicht groß-/kleinschreibungssensitiv): [`Basic`](/de/docs/Web/HTTP/Guides/Authentication#basic_authentication_scheme), `Digest`, `Negotiate` und `AWS4-HMAC-SHA256`.

    > [!NOTE]
    > Für weitere Informationen/Optionen siehe [HTTP-Authentifizierung > Authentifizierungsschemata](/de/docs/Web/HTTP/Guides/Authentication#authentication_schemes).

Abgesehen von `<auth-scheme>` sind die verbleibenden Direktiven spezifisch für jedes [Authentifizierungsschema](/de/docs/Web/HTTP/Guides/Authentication#authentication_schemes).
Im Allgemeinen müssen Sie die entsprechenden Spezifikationen dafür überprüfen (Schlüssel für eine kleine Untergruppe von Schemata sind unten aufgelistet).

### Basis-Authentifizierung

- `<credentials>`

  - : Die Anmeldedaten, kodiert gemäß dem angegebenen Schema.

    > [!NOTE]
    > Informationen über den Kodierungsalgorithmus finden Sie in den untenstehenden Beispielen, in {{HTTPHeader("WWW-Authenticate")}}, in [HTTP-Authentifizierung](/de/docs/Web/HTTP/Guides/Authentication) und in den relevanten Spezifikationen.

### Digest-Authentifizierung

- `<response>`
  - : Eine Zeichenkette der Hexadezimalziffern, die beweist, dass der Benutzer ein Passwort kennt.
    Der Algorithmus kodiert den Benutzernamen und das Passwort, realm, cnonce, qop, nc und so weiter.
    Es wird im Detail in der Spezifikation beschrieben.
- `username`
  - : Eine mit Anführungszeichen versehene Zeichenkette, die den Benutzernamen für das angegebene `realm` entweder im Klartext oder als Hashcode in hexadezimaler Notation enthält.
    Wenn der Name Zeichen enthält, die im Feld nicht erlaubt sind, kann stattdessen `username*` (nicht "sowie") verwendet werden.
- `username*`
  - : Der Benutzername, formatiert mit einer in RFC5987 definierten erweiterten Notation.
    Dies sollte nur verwendet werden, wenn der Name nicht in `username` kodiert werden kann und wenn `userhash` auf `"false"` gesetzt ist.
- `uri`
  - : Die _Effective Request URI_. Weitere Informationen finden Sie in der Spezifikation.
- `realm`
  - : Realm des angeforderten Benutzernamens/Passworts (sollte wiederum mit dem Wert in der entsprechenden {{HTTPHeader("WWW-Authenticate")}}-Antwort für die angeforderte Ressource übereinstimmen).
- `opaque`
  - : Der Wert in der entsprechenden {{HTTPHeader("WWW-Authenticate")}}-Antwort für die angeforderte Ressource.
- `algorithm`
  - : Der Algorithmus, der zur Berechnung des Digests verwendet wird. Muss ein unterstützter Algorithmus aus der {{HTTPHeader("WWW-Authenticate")}}-Antwort für die angeforderte Ressource sein.
- `qop`
  - : Ein Token, das die _quality of protection_ für die Nachricht angibt.
    Muss mit einem Wert im Satz übereinstimmen, der in der {{HTTPHeader("WWW-Authenticate")}}-Antwort für die angeforderte Ressource angegeben ist.
    - `"auth"`: Authentifizierung
    - `"auth-int"`: Authentifizierung mit Integritätsschutz
- `cnonce`
  - : Eine zitierte, nur {{Glossary("ASCII", "ASCII")}} enthaltende Zeichenkette, die vom Client bereitgestellt wird.
    Dies wird sowohl vom Client als auch vom Server verwendet, um gegenseitige Authentifizierung bereitzustellen, etwas Nachrichtensicherheitsschutz zu bieten und "chosen plaintext attacks" zu vermeiden.
    Weitere Informationen finden Sie in der Spezifikation.
- `nc`
  - : Nonce-Zähler. Der hexadezimale Zähler von Anfragen, bei denen der Client den aktuellen `cnonce`-Wert gesendet hat (einschließlich der aktuellen Anfrage).
    Der Server kann doppelte `nc`-Werte verwenden, um Wiederholungsanfragen zu erkennen.
- `userhash` {{optional_inline}}
  - : `"true"`, wenn der Benutzername gehasht wurde. `"false"` ist standardmäßig eingestellt.

## Beispiele

### Basis-Authentifizierung

Bei `Basic`-Authentifizierung werden die Anmeldedaten erstellt, indem zuerst der Benutzername und das Passwort mit einem Doppelpunkt kombiniert werden (z. B. `aladdin:opensesame`) und anschließend der resultierende String in {{Glossary("Base64", "`base64`")}} kodiert wird (z. B. `YWxhZGRpbjpvcGVuc2VzYW1l`).

```http
Authorization: Basic YWxhZGRpbjpvcGVuc2VzYW1l
```

> **Warnung:** {{Glossary("Base64", "Base64")}}-Kodierung kann leicht umgekehrt werden, um den ursprünglichen Namen und das Passwort zu erhalten, daher bietet `Basic`-Authentifizierung keinerlei kryptografische Sicherheit.
> {{Glossary("HTTPS", "HTTPS")}} wird immer empfohlen, wenn Authentifizierung verwendet wird, insbesondere jedoch bei Verwendung von `Basic`-Authentifizierung.

Siehe auch [HTTP-Authentifizierung](/de/docs/Web/HTTP/Guides/Authentication) für Beispiele, wie Sie Apache- oder Nginx-Server konfigurieren können, um Ihre Website mit HTTP-Basis-Authentifizierung passwortzuschützen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTTP-Authentifizierung](/de/docs/Web/HTTP/Guides/Authentication)
- {{HTTPHeader("WWW-Authenticate")}}
- {{HTTPHeader("Proxy-Authorization")}}
- {{HTTPHeader("Proxy-Authenticate")}}
- {{HTTPStatus("401")}}, {{HTTPStatus("403")}}, {{HTTPStatus("407")}}
