---
title: HTTP-Authentifizierung
slug: Web/HTTP/Guides/Authentication
l10n:
  sourceCommit: b6de98eb9cd52ce7e37f22a340352f0af4c9d597
---

HTTP bietet einen allgemeinen Rahmen für Zugriffskontrolle und Authentifizierung.
Diese Seite ist eine Einführung in den HTTP-Rahmen für Authentifizierung und zeigt, wie Sie den Zugriff auf Ihren Server mithilfe des HTTP-"Basic"-Schemas einschränken können.

## Der allgemeine HTTP-Authentifizierungsrahmen

{{RFC("7235")}} definiert den HTTP-Authentifizierungsrahmen, der von einem Server verwendet werden kann, um eine {{Glossary("challenge", "Challenge")}} für eine Client-Anfrage zu erstellen, und von einem Client, um Authentifizierungsinformationen bereitzustellen.

Der Challenge- und Response-Ablauf funktioniert folgendermaßen:

1. Der Server antwortet einem Client mit einem {{HTTPStatus("401")}} (Unauthorized) Antwortstatus und bietet Informationen darüber, wie die Autorisierung durchgeführt werden kann, mit einem {{HTTPHeader("WWW-Authenticate")}} Antwort-Header, der mindestens eine Challenge enthält.
2. Ein Client, der sich beim Server authentifizieren möchte, kann dies tun, indem er einen {{HTTPHeader("Authorization")}} Anforderungs-Header mit den Anmeldeinformationen einfügt.
3. Normalerweise wird ein Client dem Benutzer einen Passwort-Prompt anzeigen und dann die Anfrage mit dem korrekten `Authorization`-Header senden.

![Ein Sequenzdiagramm, das HTTP-Nachrichten zwischen einem Client und einer Server-Lebenslinie veranschaulicht.](https://mdn.github.io/shared-assets/images/diagrams/http/authentication/basic-auth.svg)

Der allgemeine Nachrichtenfluss oben ist bei den meisten (wenn nicht allen) [Authentifizierungsschemata](#authentifizierungsschemata) derselbe.
Die tatsächlichen Informationen in den Headern und ihre Kodierung ändern sich jedoch!

> [!WARNING]
> Das im obigen Diagramm verwendete "Basic"-Authentifizierungsschema sendet die Anmeldeinformationen kodiert, aber nicht verschlüsselt.
> Dies wäre völlig unsicher, es sei denn, der Austausch erfolgt über eine sichere Verbindung (HTTPS/TLS).

### Proxy-Authentifizierung

Der gleiche Challenge- und Response-Mechanismus kann für die _Proxy-Authentifizierung_ verwendet werden.
Da sowohl Ressourcen-Authentifizierung als auch Proxy-Authentifizierung koexistieren können, ist eine andere Gruppe von Headern und Statuscodes erforderlich. Im Fall von Proxys ist der challenging Statuscode {{HTTPStatus("407")}} (Proxy Authentication Required), der {{HTTPHeader("Proxy-Authenticate")}} Antwort-Header enthält mindestens eine für den Proxy geltende Challenge und der {{HTTPHeader("Proxy-Authorization")}} Anforderungs-Header wird verwendet, um die Anmeldeinformationen an den Proxy-Server zu übermitteln.

### Zugriff verboten

Wenn ein (Proxy-)Server _ungültige_ Anmeldeinformationen erhält, sollte er mit einem {{HTTPStatus("401")}} `Unauthorized` oder mit einem {{HTTPStatus("407")}} `Proxy Authentication Required` antworten und der Benutzer kann eine neue Anfrage senden oder das {{HTTPHeader("Authorization")}}-Feld austauschen.

Wenn ein (Proxy-)Server gültige Anmeldeinformationen erhält, die _unzureichend_ sind, um auf eine bestimmte Ressource zuzugreifen, sollte der Server mit dem {{HTTPStatus("403")}} `Forbidden` Statuscode antworten. Im Gegensatz zu {{HTTPStatus("401")}} `Unauthorized` oder {{HTTPStatus("407")}} `Proxy Authentication Required` ist für diesen Benutzer keine Authentifizierung möglich und Browser werden keinen neuen Versuch vorschlagen.

In allen Fällen kann der Server es vorziehen, einen {{HTTPStatus("404")}} `Not Found` Statuscode zurückzugeben, um die Existenz der Seite einem Benutzer ohne angemessene Berechtigungen oder nicht korrekt authentifiziert zu verbergen.

### Authentifizierung von Cross-Origin-Bildern

Ein potenzielles Sicherheitsloch (das inzwischen in Browsern behoben wurde) war die Authentifizierung von Cross-Site-Bildern.
Ab [Firefox 59](/de/docs/Mozilla/Firefox/Releases/59) können Bildressourcen, die von anderen Ursprüngen als dem aktuellen Dokument geladen werden, keine HTTP-Authentifizierungsdialoge mehr auslösen ([Firefox bug 1423146](https://bugzil.la/1423146)), um zu verhindern, dass Benutzerdaten gestohlen werden, falls Angreifer ein beliebiges Bild in eine Drittanbieter-Seite einbetten könnten.

### Zeichenkodierung der HTTP-Authentifizierung

Browser verwenden `utf-8`-Kodierung für Benutzernamen und Passwörter.

Firefox verwendete einst `ISO-8859-1`, wechselte aber zu `utf-8`, um mit anderen Browsern gleichzuziehen und potenzielle Probleme zu vermeiden, wie in [Firefox bug 1419658](https://bugzil.la/1419658) beschrieben.

### WWW-Authenticate und Proxy-Authenticate Header

Die {{HTTPHeader("WWW-Authenticate")}} und {{HTTPHeader("Proxy-Authenticate")}} Antwort-Header definieren die Authentifizierungsmethode, die verwendet werden sollte, um auf eine Ressource zuzugreifen. Sie müssen angeben, welches Authentifizierungsschema verwendet wird, sodass der Client, der autorisieren möchte, weiß, wie die Anmeldeinformationen bereitgestellt werden müssen.

Die Syntax für diese Header ist folgende:

```http
WWW-Authenticate: <type> realm=<realm>
Proxy-Authenticate: <type> realm=<realm>
```

Hier ist `<type>` das Authentifizierungsschema ("Basic" ist das am häufigsten verwendete Schema und [unten eingeführt](#basic-authentifizierungsschema)). Der _realm_ wird verwendet, um den geschützten Bereich zu beschreiben oder den Schutzumfang anzugeben. Dies könnte eine Nachricht wie "Zugang zur Staging-Website" oder ähnlich sein, damit der Benutzer weiß, auf welchen Bereich er zugreifen möchte.

### Authorization und Proxy-Authorization Header

Die {{HTTPHeader("Authorization")}} und {{HTTPHeader("Proxy-Authorization")}} Anforderungs-Header enthalten die Anmeldeinformationen, um einen Benutzeragenten mit einem (Proxy-)Server zu authentifizieren. Hier ist wieder das `<type>` erforderlich, gefolgt von den Anmeldeinformationen, die je nach verwendetem Authentifizierungsschema kodiert oder verschlüsselt sein können.

```http
Authorization: <type> <credentials>
Proxy-Authorization: <type> <credentials>
```

## Authentifizierungsschemata

Der allgemeine HTTP-Authentifizierungsrahmen bildet die Basis für eine Reihe von Authentifizierungsschemata.

Die IANA führt eine [Liste von Authentifizierungsschemata](https://www.iana.org/assignments/http-authschemes/http-authschemes.xhtml), aber es gibt andere Schemata, die von Host-Services wie Amazon AWS angeboten werden.

Einige gängige Authentifizierungsschemata sind:

- **Basic**
  - : Siehe {{rfc(7617)}}, base64-kodierte Anmeldeinformationen. Weitere Informationen unten.
- **Bearer**
  - : Siehe {{rfc(6750)}}, Bearer-Tokens für den Zugriff auf OAuth 2.0-geschützte Ressourcen
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
  - : Siehe [AWS docs](https://docs.aws.amazon.com/AmazonS3/latest/developerguide/sigv4-auth-using-authorization-header.html). Dieses Schema wird für die AWS3-Serverauthentifizierung verwendet.

Die Schemata können sich in ihrer Sicherheitsstärke und in ihrer Verfügbarkeit in Client- oder Serversoftware unterscheiden.

Das "Basic"-Authentifizierungsschema bietet sehr geringe Sicherheit, ist jedoch weit verbreitet und einfach einzurichten.
Es wird weiter unten ausführlicher eingeführt.

## Basic-Authentifizierungsschema

Das "Basic"-HTTP-Authentifizierungsschema ist in {{rfc(7617)}} definiert, das Anmeldeinformationen als Benutzer-ID/Passwort-Paare überträgt, die mit base64 kodiert sind.

### Sicherheit der Basic-Authentifizierung

Da die Benutzer-ID und das Passwort im Netzwerk als Klartext übertragen werden (es ist base64 kodiert, aber base64 ist eine umkehrbare Kodierung), ist das Basic-Authentifizierungsschema nicht sicher.
HTTPS/TLS sollte mit der Basic-Authentifizierung verwendet werden, um Abfangen von Anmeldeinformationen zu verhindern.

Darüber hinaus sind Seiten, die HTTP Basic Auth verwenden, besonders anfällig für {{Glossary("CSRF", "Cross-Site Request Forgery (CSRF)")}}-Angriffe, da die Benutzeranmeldeinformationen in allen Anfragen unabhängig vom Ursprung gesendet werden (dies unterscheidet sich von cookie-basierten Anmeldemechanismen, da Cookies in Cross-Site-Anfragen häufig blockiert werden).
Seiten sollten immer POST-Anfragen verwenden, um Daten zu ändern, und [CSRF-Token](/de/docs/Web/Security/Attacks/CSRF) einfügen.

Ohne diese Sicherheitsverbesserungen sollte die Basic-Authentifizierung nicht verwendet werden, um sensible oder wertvolle Informationen zu schützen.

### Zugriffseinschränkung mit Apache und Basic-Authentifizierung

Um ein Verzeichnis auf einem Apache-Server mit einem Passwort zu schützen, benötigen Sie eine `.htaccess` und eine `.htpasswd` Datei.

Die `.htaccess`-Datei sieht typischerweise so aus:

```apacheconf
AuthType Basic
AuthName "Access to the staging site"
AuthUserFile /path/to/.htpasswd
Require valid-user
```

Die `.htaccess` Datei verweist auf eine `.htpasswd` Datei, in der jede Zeile aus einem Benutzernamen und einem durch einen Doppelpunkt (`:`) getrennten Passwort besteht. Sie können die tatsächlichen Passwörter nicht sehen, da sie [gehasht](https://httpd.apache.org/docs/2.4/misc/password_encryptions.html) sind (in diesem Fall wird MD5-basiertes Hashing verwendet). Beachten Sie, dass Sie Ihre `.htpasswd` Datei anders benennen können, wenn Sie möchten, aber bedenken Sie, dass diese Datei für niemanden zugänglich sein sollte. (Apache ist normalerweise so konfiguriert, dass der Zugriff auf `.ht*`-Dateien verhindert wird).

```apacheconf
aladdin:$apr1$ZjTqBB3f$IF9gdYAGlMrs2fuINjHsz.
user2:$apr1$O04r.y2H$/vEkesPhVInBByJUkXitA/
```

### Zugriffseinschränkung mit Nginx und Basic-Authentifizierung

Für Nginx müssen Sie einen zu schützenden Standort angeben und die `auth_basic` Direktive, die dem geschützten Bereich einen Namen gibt, festlegen.
Die `auth_basic_user_file` Direktive verweist dann auf eine `.htpasswd` Datei mit den verschlüsselten Benutzeranmeldeinformationen, genau wie im Apache-Beispiel oben.

```apacheconf
location /status {
    auth_basic           "Access to the staging site";
    auth_basic_user_file /etc/apache2/.htpasswd;
}
```

### Zugriff über Anmeldeinformationen in der URL

Historisch gesehen erlaubten es einige Seiten, sich über eine codierte URL mit Benutzernamen und Passwort anzumelden:

```plain example-bad
https://username:password@www.example.com/
```

Diese Syntax ist in modernen Browsern nicht mehr erlaubt; der Benutzername und das Passwort werden vor dem Absenden der Anfrage entfernt.

## Siehe auch

- {{HTTPHeader("WWW-Authenticate")}}
- {{HTTPHeader("Authorization")}}
- {{HTTPHeader("Proxy-Authorization")}}
- {{HTTPHeader("Proxy-Authenticate")}}
- {{HTTPStatus("401")}}, {{HTTPStatus("403")}}, {{HTTPStatus("407")}}
- [HTTP Sicherheitspraktiken](/de/docs/Web/Security)
