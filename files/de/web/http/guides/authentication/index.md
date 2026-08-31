---
title: HTTP-Authentifizierung
slug: Web/HTTP/Guides/Authentication
l10n:
  sourceCommit: 815f1a18f44059500b337719295c6eda14b6228e
---

HTTP bietet ein allgemeines Rahmenwerk für Zugangskontrolle und Authentifizierung.
Diese Seite ist eine Einführung in das HTTP-Authentifizierungs-Framework und zeigt, wie Sie den Zugang zu Ihrem Server mit dem HTTP-"Basic"-Schema beschränken können.

## Das allgemeine HTTP-Authentifizierungs-Framework

{{RFC("7235")}} definiert das HTTP-Authentifizierungs-Framework, das von einem Server verwendet werden kann, um eine {{Glossary("challenge", "Herausforderung")}} an eine Client-Anfrage zu senden und von einem Client, um Authentifizierungsinformationen bereitzustellen.

Der Ablauf von Herausforderung und Antwort funktioniert folgendermaßen:

1. Der Server antwortet einem Client mit einer {{HTTPStatus("401")}} (Unauthorized) Antwortstatus und gibt Informationen, wie mit einem {{HTTPHeader("WWW-Authenticate")}} Antwortheader zu autorisieren ist, der mindestens eine Herausforderung enthält.
2. Ein Client, der sich gegenüber dem Server authentifizieren möchte, kann dies tun, indem er einen {{HTTPHeader("Authorization")}} Header mit den Anmeldedaten einfügt.
3. Normalerweise wird ein Client dem Benutzer eine Passwortabfrage präsentieren und dann die Anfrage mit dem korrekten `Authorization`-Header stellen.

![Ein Sequenzdiagramm, das HTTP-Nachrichten zwischen einem Client und einer Server-Lebenslinie veranschaulicht.](https://mdn.github.io/shared-assets/images/diagrams/http/authentication/basic-auth.svg)

Der oben beschriebene allgemeine Nachrichtenfluss ist bei den meisten (wenn nicht allen) [Authentifizierungsschemata](#authentifizierungsschemata) der gleiche.
Die tatsächlichen Informationen in den Headern und die Art und Weise, wie sie codiert werden, ändert sich!

> [!WARNING]
> Das im obigen Diagramm verwendete "Basic"-Authentifizierungsschema sendet die Anmeldedaten nur codiert, aber nicht verschlüsselt.
> Dies wäre völlig unsicher, es sei denn, der Austausch erfolgt über eine sichere Verbindung (HTTPS/TLS).

### Proxy-Authentifizierung

Der gleiche Mechanismus von Herausforderung und Antwort kann für die _Proxy-Authentifizierung_ verwendet werden.
Da sowohl Ressourcenauthentifizierung als auch Proxy-Authentifizierung koexistieren können, wird ein anderer Satz von Headern und Statuscodes benötigt. Bei Proxys ist der herausfordernde Statuscode {{HTTPStatus("407")}} (Proxy Authentication Required), der {{HTTPHeader("Proxy-Authenticate")}} Antwortheader enthält mindestens eine für den Proxy anwendbare Herausforderung, und der {{HTTPHeader("Proxy-Authorization")}} Anforderungs-Header wird verwendet, um die Anmeldeinformationen an den Proxy-Server zu übermitteln.

### Zugriff verweigert

Wenn ein (Proxy-)Server _ungültige_ Anmeldeinformationen erhält, sollte er mit einem {{HTTPStatus("401")}} `Unauthorized` oder einem {{HTTPStatus("407")}} `Proxy Authentication Required` antworten, und der Benutzer kann eine neue Anfrage senden oder das {{HTTPHeader("Authorization")}}-Headerfeld ersetzen.

Wenn ein (Proxy-)Server gültige Anmeldeinformationen erhält, die _unzureichend_ sind, um auf eine bestimmte Ressource zuzugreifen, sollte der Server mit dem {{HTTPStatus("403")}} `Forbidden` Statuscode antworten. Anders als bei {{HTTPStatus("401")}} `Unauthorized` oder {{HTTPStatus("407")}} `Proxy Authentication Required` ist eine Authentifizierung für diesen Benutzer unmöglich, und Browser werden keinen neuen Versuch vorschlagen.

In allen Fällen kann der Server es vorziehen, einen {{HTTPStatus("404")}} `Not Found` Statuscode zurückzugeben, um die Existenz der Seite für einen Benutzer ohne angemessene Berechtigungen oder falsche Authentifizierung zu verbergen.

### Authentifizierung von Cross-Origin-Bildern

Ein potenzielles Sicherheitsloch (das inzwischen in Browsern behoben wurde) war die Authentifizierung von Cross-Site-Bildern.
Ab [Firefox 59](/de/docs/Mozilla/Firefox/Releases/59) können Bildressourcen, die aus anderen Ursprüngen als dem aktuellen Dokument geladen werden, keine HTTP-Authentifizierungsdialoge mehr auslösen ([Firefox Bug 1423146](https://bugzil.la/1423146)), was verhindert, dass Benutzeranmeldedaten gestohlen werden, wenn Angreifer in der Lage wären, ein beliebiges Bild in eine Drittanbieter-Seite einzubetten.

### Zeichenkodierung der HTTP-Authentifizierung

Browser verwenden `utf-8` Kodierung für Benutzernamen und Passwörter.

Firefox verwendete einmal `ISO-8859-1`, wechselte jedoch zu `utf-8` zur Angleichung an andere Browser und zur Vermeidung potenzieller Probleme, wie sie in [Firefox Bug 1419658](https://bugzil.la/1419658) beschrieben sind.

### WWW-Authenticate und Proxy-Authenticate Header

Die {{HTTPHeader("WWW-Authenticate")}} und {{HTTPHeader("Proxy-Authenticate")}} Antwortheader definieren die Authentifizierungsmethode, die zum Zugriff auf eine Ressource verwendet werden sollte. Sie müssen angeben, welches Authentifizierungsschema verwendet wird, damit der Client, der autorisieren möchte, weiß, wie er die Anmeldedaten bereitstellen soll.

Die Syntax für diese Header ist folgende:

```http
WWW-Authenticate: <type> realm=<realm>
Proxy-Authenticate: <type> realm=<realm>
```

Hier ist `<type>` das Authentifizierungsschema ("Basic" ist das gängigste Schema und [unten eingeführt](#basic-authentifizierungsschema)). Der _realm_ wird verwendet, um den geschützten Bereich zu beschreiben oder den Schutzbereich anzugeben. Dies könnte eine Nachricht wie "Zugang zur Staging-Seite" oder Ähnliches sein, damit der Benutzer weiß, auf welchen Bereich er zuzugreifen versucht.

### Authorization und Proxy-Authorization Header

Die {{HTTPHeader("Authorization")}} und {{HTTPHeader("Proxy-Authorization")}} Anforderungs-Header enthalten die Anmeldedaten, um einen Benutzer-Agent mit einem (Proxy-)Server zu authentifizieren. Hier ist das `<type>` erneut notwendig, gefolgt von den Anmeldedaten, die je nach verwendetem Authentifizierungsschema codiert oder verschlüsselt sein können.

```http
Authorization: <type> <credentials>
Proxy-Authorization: <type> <credentials>
```

## Authentifizierungsschemata

Das allgemeine HTTP-Authentifizierungs-Framework ist die Basis für eine Reihe von Authentifizierungsschemata.

IANA führt eine [Liste von Authentifizierungsschemata](https://www.iana.org/assignments/http-authschemes/http-authschemes.xhtml), aber es gibt andere Schemata, die von Host-Diensten, wie Amazon AWS, angeboten werden.

Einige gängige Authentifizierungsschemata sind:

- **Basic**
  - : Siehe {{rfc(7617)}}, base64-codierte Anmeldeinformationen. Weitere Informationen unten.
- **Bearer**
  - : Siehe {{rfc(6750)}}, Token zum Zugriff auf OAuth 2.0-geschützte Ressourcen
- **Digest**
  - : Siehe {{rfc(7616)}}. Firefox 93 und spätere Versionen unterstützen den SHA-256-Algorithmus. Frühere Versionen unterstützen nur MD5-Hashing (nicht empfohlen).
- **HOBA**
  - : Siehe {{rfc(7486)}}, Abschnitt 3, **H**TTP **O**rigin-**B**ound **A**uthentication, digital-signaturbasiert
- **Mutual**
  - : Siehe {{rfc(8120)}}
- **Negotiate** / **NTLM**
  - : Siehe [RFC4599](https://datatracker.ietf.org/doc/html/rfc4559)
- **VAPID**
  - : Siehe {{rfc(8292)}}
- **SCRAM**
  - : Siehe {{rfc(7804)}}
- **AWS4-HMAC-SHA256**
  - : Siehe [AWS-Dokumentation](https://docs.aws.amazon.com/AmazonS3/latest/developerguide/sigv4-auth-using-authorization-header.html). Dieses Schema wird für AWS3 Server-Authentifizierung verwendet.

Schemata können sich in ihrer Sicherheitsstärke und in ihrer Verfügbarkeit in Client- oder Server-Software unterscheiden.

Das "Basic"-Authentifizierungsschema bietet sehr geringe Sicherheit, wird aber weit unterstützt und ist einfach einzurichten.
Es wird unten ausführlicher behandelt.

## Basic-Authentifizierungsschema

Das "Basic" HTTP-Authentifizierungsschema ist in {{rfc(7617)}} definiert, das Anmeldeinformationen als Benutzer-ID/Passwort-Paare überträgt, die mittels base64 codiert sind.

### Sicherheit der Basis-Authentifizierung

Da die Benutzer-ID und das Passwort im Netzwerk als Klartext übermittelt werden (sie werden base64-codiert, aber base64 ist eine umkehrbare Codierung), ist das Basis-Authentifizierungsschema nicht sicher.
HTTPS/TLS sollte mit der Basis-Authentifizierung verwendet werden, um eine Abfangung der Anmeldedaten zu verhindern.

Darüber hinaus sind Seiten, die HTTP Basic Auth verwenden, besonders anfällig für {{Glossary("CSRF", "Cross-Site Request Forgery (CSRF)")}} Angriffe, da die Benutzerdaten in allen Anfragen unabhängig von der Herkunft gesendet werden (dies unterscheidet sich von cookie-basierten Anmeldeverfahren, weil Cookies bei Cross-Site-Anfragen üblicherweise blockiert werden).
Seiten sollten immer POST-Anfragen verwenden, um Daten zu ändern und [CSRF-Token](/de/docs/Web/Security/Attacks/CSRF) einfügen.

Ohne diese Sicherheitsverbesserungen sollte die Basis-Authentifizierung nicht zum Schutz sensibler oder wertvoller Informationen verwendet werden.

### Zugriffsbeschränkung mit Apache und grundlegender Authentifizierung

Um ein Verzeichnis auf einem Apache-Server mit einem Passwort zu schützen, benötigen Sie eine `.htaccess`- und eine `.htpasswd`-Datei.

Eine typische `.htaccess`-Datei sieht folgendermaßen aus:

```apacheconf
AuthType Basic
AuthName "Access to the staging site"
AuthUserFile /path/to/.htpasswd
Require valid-user
```

Die `.htaccess`-Datei verweist auf eine `.htpasswd`-Datei, in der jede Zeile aus einem Benutzernamen und einem durch ein Doppelpunkt (`:`) getrennten Passwort besteht. Die tatsächlichen Passwörter sind nicht sichtbar, da sie [verschlüsselt](https://httpd.apache.org/docs/2.4/misc/password_encryptions.html) sind (in diesem Fall mit MD5-basierter Verschlüsselung). Beachten Sie, dass Sie Ihre `.htpasswd`-Datei anders benennen können, aber bedenken Sie, dass diese Datei für niemanden zugänglich sein sollte. (Apache ist normalerweise so konfiguriert, dass der Zugriff auf `.ht*`-Dateien verhindert wird).

```apacheconf
aladdin:$apr1$ZjTqBB3f$IF9gdYAGlMrs2fuINjHsz.
user2:$apr1$O04r.y2H$/vEkesPhVInBByJUkXitA/
```

### Zugriffsbeschränkung mit Nginx und grundlegender Authentifizierung

Für Nginx müssen Sie einen Ort, den Sie schützen möchten, und die `auth_basic`-Direktive angeben, die den Namen des kennwortgeschützten Bereichs angibt.
Die `auth_basic_user_file`-Direktive verweist dann auf eine `.htpasswd`-Datei, die die verschlüsselten Benutzeranmeldedaten enthält, ähnlich wie im Apache-Beispiel oben.

```apacheconf
location /status {
    auth_basic           "Access to the staging site";
    auth_basic_user_file /etc/apache2/.htpasswd;
}
```

### Zugriff mit Anmeldedaten in der URL

Historisch gesehen erlaubten einige Seiten, sich über eine kodierte URL mit Benutzername und Passwort anzumelden, wie gezeigt:

```plain example-bad
https://username:password@www.example.com/
```

Diese Syntax ist in modernen Browsern nicht mehr erlaubt; der Benutzername und das Passwort werden aus der Anfrage entfernt, bevor sie gesendet wird.

## Siehe auch

- {{HTTPHeader("WWW-Authenticate")}}
- {{HTTPHeader("Authorization")}}
- {{HTTPHeader("Proxy-Authorization")}}
- {{HTTPHeader("Proxy-Authenticate")}}
- {{HTTPStatus("401")}}, {{HTTPStatus("403")}}, {{HTTPStatus("407")}}
- [HTTP Sicherheits-Best-Practices](/de/docs/Web/Security)
