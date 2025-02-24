---
title: Authorization
slug: Web/HTTP/Headers/Authorization
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{HTTPSidebar}}

Der HTTP-Anfrageheader **`Authorization`** kann verwendet werden, um Anmeldeinformationen bereitzustellen, die einen Benutzeragenten bei einem Server authentifizieren und den Zugriff auf geschützte Ressourcen ermöglichen.

Der `Authorization`-Header wird in der Regel, aber nicht immer, gesendet, nachdem der Benutzeragent zuerst versucht hat, eine geschützte Ressource ohne Anmeldeinformationen anzufordern. Der Server antwortet mit einer {{HTTPStatus("401", "401 Unauthorized")}}-Nachricht, die mindestens einen {{HTTPHeader("WWW-Authenticate")}}-Header enthält. Dieser Header gibt die Authentifizierungsschemata an, die zum Zugriff auf die Ressource verwendet werden können, sowie alle zusätzlichen Informationen, die der Client benötigt. Der Benutzeragent sollte das sicherste von den angebotenen Authentifizierungsschemata auswählen, den Benutzer nach seinen Anmeldedaten fragen und dann die Ressource mit den kodierten Anmeldedaten im `Authorization`-Header erneut anfordern.

Dieser Header wird bei Cross-Origin-Weiterleitungen entfernt.

> [!NOTE]
> Dieser Header ist Teil des [General HTTP authentication framework](/de/docs/Web/HTTP/Authentication#the_general_http_authentication_framework). Er kann mit einer Reihe von [authentication schemes](/de/docs/Web/HTTP/Authentication#authentication_schemes) verwendet werden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Anfrageheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anfrageheader")}}</th>
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

  - : Das [Authentication scheme](/de/docs/Web/HTTP/Authentication#authentication_schemes), das definiert, wie die Anmeldeinformationen kodiert werden.
    Einige der häufigeren Typen sind (nicht groß- und kleinschreibungsempfindlich): [`Basic`](/de/docs/Web/HTTP/Authentication#basic_authentication_scheme), `Digest`, `Negotiate` und `AWS4-HMAC-SHA256`.

    > [!NOTE]
    > Für weitere Informationen/Optionen siehe [HTTP Authentication > Authentication schemes](/de/docs/Web/HTTP/Authentication#authentication_schemes)

Abgesehen von `<auth-scheme>` sind die verbleibenden Direktiven spezifisch für jedes [Authentication scheme](/de/docs/Web/HTTP/Authentication#authentication_schemes). In der Regel müssen Sie die entsprechenden Spezifikationen für diese prüfen (Schlüssel für eine kleine Teilmenge von Schemata sind unten aufgelistet).

### Basis-Authentifizierung

- `<credentials>`

  - : Die Anmeldeinformationen, kodiert gemäß dem angegebenen Schema.

    > [!NOTE]
    > Informationen zum Kodierungsalgorithmus finden Sie in den Beispielen: unten, in {{HTTPHeader("WWW-Authenticate")}}, in [HTTP Authentication](/de/docs/Web/HTTP/Authentication) und in den relevanten Spezifikationen.

### Digest-Authentifizierung

- `<response>`
  - : Eine Zeichenfolge aus Hexadezimalziffern, die nachweist, dass der Benutzer ein Passwort kennt. Der Algorithmus kodiert den Benutzernamen und das Passwort, das Realm, cnonce, qop, nc und so weiter. Es wird detailliert in der Spezifikation beschrieben.
- `username`
  - : Eine in Anführungszeichen gesetzte Zeichenkette, die den Benutzernamen für das angegebene `realm` im Klartext oder als Hash-Code in hexadezimaler Notation enthält. Falls der Name Zeichen enthält, die im Feld nicht zulässig sind, kann stattdessen `username*` verwendet werden (nicht "auch").
- `username*`
  - : Der Benutzername im erweiterten Format gemäß RFC5987. Dies sollte nur verwendet werden, wenn der Name nicht in `username` kodiert werden kann und wenn `userhash` auf `"false"` gesetzt ist.
- `uri`
  - : Die _Effective Request URI_. Weitere Informationen finden Sie in der Spezifikation.
- `realm`
  - : Realm des angeforderten Benutzernamens/Passworts (sollte erneut mit dem Wert im entsprechenden {{HTTPHeader("WWW-Authenticate")}}-Header für die angeforderte Ressource übereinstimmen).
- `opaque`
  - : Der Wert im entsprechenden {{HTTPHeader("WWW-Authenticate")}}-Header für die angeforderte Ressource.
- `algorithm`
  - : Der Algorithmus zur Berechnung des Digest. Muss ein unterstützter Algorithmus aus dem {{HTTPHeader("WWW-Authenticate")}}-Header für die angeforderte Ressource sein.
- `qop`
  - : Ein Token, das die _quality of protection_ angibt, die auf die Nachricht angewendet wird. Muss mit dem einen Wert im Satz, der in der {{HTTPHeader("WWW-Authenticate")}}-Antwort für die angeforderte Ressource angegeben ist, übereinstimmen.
    - `"auth"`: Authentifizierung
    - `"auth-int"`: Authentifizierung mit Integritätsschutz
- `cnonce`
  - : Ein in Anführungszeichen gesetzter {{Glossary("ASCII", "ASCII")}}-only Zeichenkettenwert, der vom Client bereitgestellt wird. Dies wird von sowohl dem Client als auch dem Server verwendet, um eine gegenseitige Authentifizierung bereitzustellen, einen gewissen Nachrichtenschutz zu bieten und "chosen plaintext attacks" zu vermeiden. Weitere Informationen finden Sie in der Spezifikation.
- `nc`
  - : Nonce-Zähler. Der hexadezimale Zähler der Anfragen, bei denen der Client den aktuellen `cnonce`-Wert gesendet hat (einschließlich der aktuellen Anfrage). Der Server kann doppelte `nc`-Werte verwenden, um Wiederholungsanfragen zu erkennen.
- `userhash` {{optional_inline}}
  - : `"true"`, wenn der Benutzername gehasht wurde. Standardmäßig `"false"`.

## Beispiele

### Basis-Authentifizierung

Für die `Basic`-Authentifizierung werden die Anmeldeinformationen erstellt, indem zuerst der Benutzername und das Passwort mit einem Doppelpunkt kombiniert werden (z.B. `aladdin:opensesame`) und dann der resultierende String in {{Glossary("Base64", "`base64`")}} kodiert wird (z.B. `YWxhZGRpbjpvcGVuc2VzYW1l`).

```http
Authorization: Basic YWxhZGRpbjpvcGVuc2VzYW1l
```

> **Warnung:** {{Glossary("Base64", "Base64")}}-Kodierung kann leicht zurückentwickelt werden, um den ursprünglichen Namen und das Passwort zu erhalten, daher bietet die `Basic`-Authentifizierung keine kryptographische Sicherheit. {{Glossary("HTTPS", "HTTPS")}} wird immer empfohlen, wenn Authentifizierung verwendet wird, insbesondere jedoch bei `Basic`-Authentifizierung.

Siehe auch [HTTP-Authentifizierung](/de/docs/Web/HTTP/Authentication) für Beispiele, wie Sie Apache- oder Nginx-Server konfigurieren können, um Ihre Website mit HTTP-Basis-Authentifizierung passwortgeschützt zu machen.

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
