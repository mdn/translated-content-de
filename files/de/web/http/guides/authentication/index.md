---
title: HTTP-Authentifizierung
slug: Web/HTTP/Guides/Authentication
l10n:
  sourceCommit: a4c63d2855b2f557e7d1ee821dee65011d569a41
---

HTTP stellt ein allgemeines Framework für Zugriffskontrolle und Authentifizierung bereit.
Diese Seite ist eine Einführung in das HTTP-Framework für die Authentifizierung und zeigt, wie Sie den Zugriff auf Ihren Server mithilfe des HTTP-Schemas „Basic“ beschränken können.

## Das allgemeine HTTP-Authentifizierungs-Framework

{{RFC("7235")}} definiert das HTTP-Authentifizierungs-Framework, das von einem Server verwendet werden kann, um eine Client-Anfrage {{Glossary("challenge", "herauszufordern")}}, und von einem Client, um Authentifizierungsinformationen bereitzustellen.

Der Ablauf von Herausforderung und Antwort funktioniert folgendermaßen:

1. Der Server antwortet einem Client mit einem {{HTTPStatus("401")}}-Antwortstatus (Unauthorized) und stellt Informationen zur Autorisierung über einen {{HTTPHeader("WWW-Authenticate")}}-Antwort-Header bereit, der mindestens eine Herausforderung enthält.
2. Ein Client, der sich gegenüber dem Server authentifizieren möchte, kann dies anschließend tun, indem er einen {{HTTPHeader("Authorization")}}-Anfrage-Header mit den Anmeldedaten einschließt.
3. Üblicherweise zeigt ein Client dem Benutzer eine Passwortabfrage an und sendet dann die Anfrage mit dem korrekten `Authorization`-Header.

![Ein Sequenzdiagramm, das HTTP-Nachrichten zwischen einer Client- und einer Server-Lebenslinie veranschaulicht.](https://mdn.github.io/shared-assets/images/diagrams/http/authentication/basic-auth.svg)

Der allgemeine Nachrichtenfluss oben ist für die meisten (wenn nicht alle) [Authentifizierungsschemas](#authentifizierungsschemas) gleich.
Die tatsächlichen Informationen in den Headern und die Art ihrer Kodierung ändern sich jedoch!

> [!WARNING]
> Das im obigen Diagramm verwendete Authentifizierungsschema „Basic“ sendet die Anmeldedaten kodiert, aber nicht verschlüsselt.
> Dies wäre vollständig unsicher, sofern der Austausch nicht über eine sichere Verbindung (HTTPS/TLS) erfolgt.

### Proxy-Authentifizierung

Derselbe Mechanismus für Herausforderung und Antwort kann für die _Proxy-Authentifizierung_ verwendet werden.
Da sowohl Ressourcen-Authentifizierung als auch Proxy-Authentifizierung gleichzeitig bestehen können, ist ein anderer Satz von Headern und Statuscodes erforderlich. Bei Proxys lautet der herausfordernde Statuscode {{HTTPStatus("407")}} (Proxy Authentication Required), der {{HTTPHeader("Proxy-Authenticate")}}-Antwort-Header enthält mindestens eine für den Proxy geltende Herausforderung, und der {{HTTPHeader("Proxy-Authorization")}}-Anfrage-Header wird verwendet, um die Anmeldedaten für den Proxy-Server bereitzustellen.

### Zugriff verweigert

Wenn ein (Proxy-)Server _ungültige_ Anmeldedaten empfängt, sollte er mit {{HTTPStatus("401")}} `Unauthorized` oder {{HTTPStatus("407")}} `Proxy Authentication Required` antworten, und der Benutzer kann eine neue Anfrage senden oder das Feld des {{HTTPHeader("Authorization")}}-Headers ersetzen.

Wenn ein (Proxy-)Server gültige Anmeldedaten empfängt, die _nicht ausreichend_ sind, um auf eine bestimmte Ressource zuzugreifen, sollte der Server mit dem Statuscode {{HTTPStatus("403")}} `Forbidden` antworten. Anders als bei {{HTTPStatus("401")}} `Unauthorized` oder {{HTTPStatus("407")}} `Proxy Authentication Required` ist eine Authentifizierung für diesen Benutzer nicht möglich, und Browser schlagen keinen neuen Versuch vor.

In allen Fällen kann der Server bevorzugen, einen {{HTTPStatus("404")}}-Statuscode `Not Found` zurückzugeben, um die Existenz der Seite vor einem Benutzer ohne ausreichende Berechtigungen oder ohne korrekte Authentifizierung zu verbergen.

### Authentifizierung von Cross-Origin-Bildern

Eine potenzielle Sicherheitslücke (die inzwischen in Browsern behoben wurde) war die Authentifizierung von Cross-Site-Bildern.
Ab [Firefox 59](/de/docs/Mozilla/Firefox/Releases/59) können Bildressourcen, die von anderen Origins als dem aktuellen Dokument geladen werden, keine HTTP-Authentifizierungsdialoge mehr auslösen ([Firefox-Bug 1423146](https://bugzil.la/1423146)). Dadurch wird verhindert, dass Benutzeranmeldedaten gestohlen werden, wenn Angreifer ein beliebiges Bild in eine Drittanbieter-Seite einbetten können.

### Zeichenkodierung der HTTP-Authentifizierung

Browser verwenden die `utf-8`-Kodierung für Benutzernamen und Passwörter.

Firefox verwendete einst `ISO-8859-1`, wechselte jedoch zu `utf-8`, um mit anderen Browsern übereinzustimmen und potenzielle Probleme zu vermeiden, wie sie in [Firefox-Bug 1419658](https://bugzil.la/1419658) beschrieben werden.

### WWW-Authenticate- und Proxy-Authenticate-Header

Die {{HTTPHeader("WWW-Authenticate")}}- und {{HTTPHeader("Proxy-Authenticate")}}-Antwort-Header definieren die Authentifizierungsmethode, die verwendet werden sollte, um Zugriff auf eine Ressource zu erhalten. Sie müssen angeben, welches Authentifizierungsschema verwendet wird, damit der Client, der sich autorisieren möchte, weiß, wie er die Anmeldedaten bereitstellen kann.

Die Syntax für diese Header lautet wie folgt:

```http
WWW-Authenticate: <type> realm=<realm>
Proxy-Authenticate: <type> realm=<realm>
```

Hier ist `<type>` das Authentifizierungsschema („Basic“ ist das häufigste Schema und wird [unten eingeführt](#basic-authentifizierungsschema)). Der _realm_ wird verwendet, um den geschützten Bereich zu beschreiben oder den Schutzumfang anzugeben. Dies könnte eine Nachricht wie „Zugriff auf die Staging-Website“ oder ähnlich sein, damit der Benutzer weiß, auf welchen Bereich er versucht zuzugreifen.

### Authorization- und Proxy-Authorization-Header

Die {{HTTPHeader("Authorization")}}- und {{HTTPHeader("Proxy-Authorization")}}-Anfrage-Header enthalten die Anmeldedaten, um einen User Agent gegenüber einem (Proxy-)Server zu authentifizieren. Hier wird erneut `<type>` benötigt, gefolgt von den Anmeldedaten, die abhängig vom verwendeten Authentifizierungsschema kodiert oder verschlüsselt sein können.

```http
Authorization: <type> <credentials>
Proxy-Authorization: <type> <credentials>
```

## Authentifizierungsschemas

Das allgemeine HTTP-Authentifizierungs-Framework bildet die Grundlage für eine Reihe von Authentifizierungsschemas.

IANA führt eine [Liste von Authentifizierungsschemas](https://www.iana.org/assignments/http-authschemes), es gibt jedoch auch andere Schemas, die von Hosting-Diensten wie Amazon AWS angeboten werden.

Einige gängige Authentifizierungsschemas sind:

- **Basic**
  - : Siehe {{rfc(7617)}}, base64-kodierte Anmeldedaten. Weitere Informationen unten.
- **Bearer**
  - : Siehe {{rfc(6750)}}, Bearer-Token für den Zugriff auf durch OAuth 2.0 geschützte Ressourcen
- **Digest**
  - : Siehe {{rfc(7616)}}. Firefox 93 und spätere Versionen unterstützen den SHA-256-Algorithmus. Frühere Versionen unterstützen nur MD5-Hashing (nicht empfohlen).
- **HOBA**
  - : Siehe {{rfc(7486)}}, Abschnitt 3, **H**TTP **O**rigin-**B**ound **A**uthentication, basierend auf digitalen Signaturen
- **Mutual**
  - : Siehe {{rfc(8120)}}
- **Negotiate** / **NTLM**
  - : Siehe [RFC4599](https://datatracker.ietf.org/doc/html/rfc4559)
- **VAPID**
  - : Siehe {{rfc(8292)}}
- **SCRAM**
  - : Siehe {{rfc(7804)}}
- **AWS4-HMAC-SHA256**
  - : Siehe [AWS-Dokumentation](https://docs.aws.amazon.com/AmazonS3/latest/developerguide/sigv4-auth-using-authorization-header.html). Dieses Schema wird für die AWS3-Serverauthentifizierung verwendet.

Schemas können sich hinsichtlich Sicherheitsstärke und Verfügbarkeit in Client- oder Server-Software unterscheiden.

Das Authentifizierungsschema „Basic“ bietet eine sehr geringe Sicherheit, wird jedoch breit unterstützt und ist einfach einzurichten.
Es wird unten ausführlicher vorgestellt.

## Basic-Authentifizierungsschema

Das HTTP-Authentifizierungsschema „Basic“ wird in {{rfc(7617)}} definiert und überträgt Anmeldedaten als Benutzer-ID/Passwort-Paare, die mit base64 kodiert sind.

### Sicherheit der Basic-Authentifizierung

Da die Benutzer-ID und das Passwort als Klartext über das Netzwerk übertragen werden (sie sind base64-kodiert, aber base64 ist eine umkehrbare Kodierung), ist das Basic-Authentifizierungsschema nicht sicher.
HTTPS/TLS sollte mit der Basic-Authentifizierung verwendet werden, um das Abfangen von Anmeldedaten zu verhindern.

Darüber hinaus sind Websites, die HTTP Basic Auth verwenden, besonders anfällig für {{Glossary("CSRF", "Cross-Site Request Forgery (CSRF)")}}-Angriffe, da die Benutzeranmeldedaten unabhängig von der Origin in allen Anfragen gesendet werden (dies unterscheidet sich von Cookie-basierten Mechanismen für Anmeldedaten, da Cookies bei Cross-Site-Anfragen üblicherweise blockiert werden).
Websites sollten beim Ändern von Daten immer POST-Anfragen verwenden und [CSRF-Token](/de/docs/Web/Security/Attacks/CSRF) einschließen.

Ohne diese Sicherheitsverbesserungen sollte die Basic-Authentifizierung nicht zum Schutz sensibler oder wertvoller Informationen verwendet werden.

### Zugriffsbeschränkung mit Apache und Basic-Authentifizierung

Um ein Verzeichnis auf einem Apache-Server mit einem Passwort zu schützen, benötigen Sie eine `.htaccess`- und eine `.htpasswd`-Datei.

Die `.htaccess`-Datei sieht typischerweise folgendermaßen aus:

```apacheconf
AuthType Basic
AuthName "Access to the staging site"
AuthUserFile /path/to/.htpasswd
Require valid-user
```

Die `.htaccess`-Datei verweist auf eine `.htpasswd`-Datei, in der jede Zeile aus einem Benutzernamen und einem durch einen Doppelpunkt (`:`) getrennten Passwort besteht. Sie können die tatsächlichen Passwörter nicht sehen, da sie [gehasht](https://httpd.apache.org/docs/2.4/misc/password_encryptions.html) sind (in diesem Fall mithilfe von MD5-basiertem Hashing). Beachten Sie, dass Sie Ihre `.htpasswd`-Datei bei Bedarf anders benennen können, aber denken Sie daran, dass diese Datei für niemanden zugänglich sein sollte. (Apache ist üblicherweise so konfiguriert, dass der Zugriff auf `.ht*`-Dateien verhindert wird.)

```apacheconf
aladdin:$apr1$ZjTqBB3f$IF9gdYAGlMrs2fuINjHsz.
user2:$apr1$O04r.y2H$/vEkesPhVInBByJUkXitA/
```

### Zugriffsbeschränkung mit Nginx und Basic-Authentifizierung

Für Nginx müssen Sie einen Ort angeben, den Sie schützen möchten, sowie die Direktive `auth_basic`, die den Namen für den passwortgeschützten Bereich bereitstellt.
Die Direktive `auth_basic_user_file` verweist dann auf eine `.htpasswd`-Datei, die die verschlüsselten Benutzeranmeldedaten enthält, genau wie im obigen Apache-Beispiel.

```apacheconf
location /status {
    auth_basic           "Access to the staging site";
    auth_basic_user_file /etc/apache2/.htpasswd;
}
```

### Zugriff mithilfe von Anmeldedaten in der URL

Historisch erlaubten einige Websites die Anmeldung über eine kodierte URL, die den Benutzernamen und das Passwort enthält, wie gezeigt:

```plain example-bad
https://username:password@www.example.com/
```

Diese Syntax ist in modernen Browsern nicht mehr erlaubt; Benutzername und Passwort werden vor dem Senden der Anfrage aus der Anfrage entfernt.

## Siehe auch

- {{HTTPHeader("WWW-Authenticate")}}
- {{HTTPHeader("Authorization")}}
- {{HTTPHeader("Proxy-Authorization")}}
- {{HTTPHeader("Proxy-Authenticate")}}
- {{HTTPStatus("401")}}, {{HTTPStatus("403")}}, {{HTTPStatus("407")}}
- [HTTP-Sicherheits-Best-Practices](/de/docs/Web/Security)
