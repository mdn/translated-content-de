---
title: HTTP-Authentifizierung
slug: Web/HTTP/Guides/Authentication
l10n:
  sourceCommit: 3a50bf634f24f832d97e3e2add4a4633ab255217
---

HTTP bietet ein allgemeines Framework für Zugriffskontrolle und Authentifizierung.
Diese Seite ist eine Einführung in das HTTP-Framework für Authentifizierung und zeigt, wie Sie den Zugriff auf Ihren Server mithilfe des HTTP-"Basic"-Schemas einschränken können.

## Das allgemeine HTTP-Authentifizierungsframework

{{RFC("7235")}} definiert das HTTP-Authentifizierungsframework, das von einem Server verwendet werden kann, um eine Clientanforderung zu {{Glossary("challenge", "challengen")}}, und von einem Client, um Authentifizierungsinformationen bereitzustellen.

Der Ablauf von Challenge und Response funktioniert so:

1. Der Server antwortet auf eine Clientanfrage mit einem {{HTTPStatus("401")}} (Unauthorized) Statuscode und gibt Informationen zur Autorisierung an, indem er einen {{HTTPHeader("WWW-Authenticate")}} Antwortheader enthält, der mindestens eine Challenge enthält.
2. Ein Client, der sich beim Server authentifizieren möchte, kann dies tun, indem er einen {{HTTPHeader("Authorization")}} Anfrageheader mit den Anmeldedaten einfügt.
3. Normalerweise zeigt ein Client dem Benutzer eine Passwortaufforderung an und sendet dann die Anfrage mit dem richtigen `Authorization`-Header.

![Ein Sequenzdiagramm, das die HTTP-Nachrichten zwischen einem Client und einem Server-Lebenszyklus veranschaulicht.](https://mdn.github.io/shared-assets/images/diagrams/http/authentication/basic-auth.svg)

Der allgemeine Nachrichtenfluss oben ist derselbe für die meisten (wenn nicht alle) [Authentifizierungsschemata](#authentifizierungsschemata). Die tatsächlichen Informationen in den Headern und die Art und Weise, wie sie kodiert sind, ändern sich allerdings!

> [!WARNING]
> Das "Basic"-Authentifizierungsschema, das im obigen Diagramm verwendet wird, sendet die Anmeldedaten kodiert, aber nicht verschlüsselt.
> Dies wäre völlig unsicher, es sei denn, der Austausch erfolgt über eine sichere Verbindung (HTTPS/TLS).

### Proxy-Authentifizierung

Der gleiche Mechanismus von Challenge und Response kann für die _Proxy-Authentifizierung_ verwendet werden. Da Ressourcen- und Proxy-Authentifizierung koexistieren können, wird ein anderer Satz von Headern und Statuscodes benötigt. Im Fall von Proxies ist der herausfordernde Statuscode {{HTTPStatus("407")}} (Proxy Authentication Required), der {{HTTPHeader("Proxy-Authenticate")}} Antwortheader enthält mindestens eine für den Proxy anwendbare Challenge, und der {{HTTPHeader("Proxy-Authorization")}} Anfrageheader wird verwendet, um die Anmeldedaten an den Proxyserver bereitzustellen.

### Zugriff verweigert

Wenn ein (Proxy-)Server _ungültige_ Anmeldedaten erhält, sollte er mit einem {{HTTPStatus("401")}} `Unauthorized` oder mit einem {{HTTPStatus("407")}} `Proxy Authentication Required` antworten, und der Benutzer kann eine neue Anfrage senden oder das {{HTTPHeader("Authorization")}} Headerfeld ersetzen.

Wenn ein (Proxy-)Server gültige Anmeldedaten erhält, die _unzureichend_ sind, um auf eine bestimmte Ressource zuzugreifen, sollte der Server mit dem {{HTTPStatus("403")}} `Forbidden` Statuscode antworten. Im Gegensatz zu {{HTTPStatus("401")}} `Unauthorized` oder {{HTTPStatus("407")}} `Proxy Authentication Required` ist für diesen Benutzer keine Authentifizierung möglich, und Browser werden keinen neuen Versuch vorschlagen.

In allen Fällen kann der Server es vorziehen, einen {{HTTPStatus("404")}} `Not Found` Statuscode zurückzugeben, um die Existenz der Seite vor einem Benutzer ohne angemessene Berechtigungen oder nicht korrekt authentifiziert zu verbergen.

### Authentifizierung von Cross-Origin-Bildern

Ein potenzielles Sicherheitsloch (das in Browsern inzwischen behoben wurde) war die Authentifizierung von Cross-Site-Bildern.
Ab [Firefox 59](/de/docs/Mozilla/Firefox/Releases/59) können Bildressourcen, die von anderen Ursprüngen als das aktuelle Dokument geladen werden, keine HTTP-Authentifizierungsdialoge mehr auslösen ([Firefox bug 1423146](https://bugzil.la/1423146)), was verhindert, dass Benutzeranmeldedaten gestohlen werden, wenn Angreifer in der Lage wären, ein beliebiges Bild in eine Drittanbieter-Seite einzubetten.

### Zeichenkodierung der HTTP-Authentifizierung

Browser verwenden `utf-8` Kodierung für Benutzernamen und Passwörter.

Firefox verwendete einmal `ISO-8859-1`, wechselte jedoch zu `utf-8` für die Parität mit anderen Browsern und um potenzielle Probleme zu vermeiden, wie in [Firefox bug 1419658](https://bugzil.la/1419658) beschrieben.

### WWW-Authenticate und Proxy-Authenticate Header

Die {{HTTPHeader("WWW-Authenticate")}} und {{HTTPHeader("Proxy-Authenticate")}} Antwortheader definieren die Authentifizierungsmethode, die verwendet werden sollte, um Zugang zu einer Ressource zu erhalten. Sie müssen angeben, welches Authentifizierungsschema verwendet wird, damit der Client, der autorisieren möchte, weiß, wie die Anmeldedaten bereitzustellen sind.

Die Syntax für diese Header ist die folgende:

```http
WWW-Authenticate: <type> realm=<realm>
Proxy-Authenticate: <type> realm=<realm>
```

Hierbei ist `<type>` das Authentifizierungsschema ("Basic" ist das am häufigsten verwendete Schema und [wird unten eingeführt](#basic-authentifizierungsschema)). Das _realm_ wird verwendet, um den geschützten Bereich zu beschreiben oder den Schutzbereich anzugeben. Dies könnte eine Nachricht wie "Zugang zur Staging-Seite" oder ähnliches sein, damit der Benutzer weiß, auf welchen Bereich er zugreifen möchte.

### Authorization und Proxy-Authorization Header

Die {{HTTPHeader("Authorization")}} und {{HTTPHeader("Proxy-Authorization")}} Anfrageheader enthalten die Anmeldedaten, um einen Benutzeragenten bei einem (Proxy-)Server zu authentifizieren. Hierbei wird `<type>` erneut benötigt, gefolgt von den Anmeldedaten, die kodiert oder verschlüsselt sein können, je nachdem, welches Authentifizierungsschema verwendet wird.

```http
Authorization: <type> <credentials>
Proxy-Authorization: <type> <credentials>
```

## Authentifizierungsschemata

Das allgemeine HTTP-Authentifizierungsframework ist die Grundlage für eine Reihe von Authentifizierungsschemata.

Die IANA pflegt eine [Liste der Authentifizierungsschemata](https://www.iana.org/assignments/http-authschemes/http-authschemes.xhtml), aber es gibt andere Schemata, die von Host-Services, wie zum Beispiel Amazon AWS, angeboten werden.

Einige gängige Authentifizierungsschemata umfassen:

- **Basic**
  - : Siehe {{rfc(7617)}}, base64-kodierte Anmeldedaten. Weitere Informationen unten.
- **Bearer**
  - : Siehe {{rfc(6750)}}, Inhabertokens zum Zugriff auf OAuth 2.0-geschützte Ressourcen.
- **Digest**
  - : Siehe {{rfc(7616)}}. Firefox 93 und höher unterstützen den SHA-256-Algorithmus. Frühere Versionen unterstützen nur MD5-Hashing (nicht empfohlen).
- **HOBA**
  - : Siehe {{rfc(7486)}}, Abschnitt 3, **H**TTP **O**rigin-**B**ound **A**uthentication, digital-signaturbasiert.
- **Mutual**
  - : Siehe {{rfc(8120)}}
- **Negotiate** / **NTLM**
  - : Siehe [RFC4599](https://datatracker.ietf.org/doc/html/rfc4559)
- **VAPID**
  - : Siehe {{rfc(8292)}}
- **SCRAM**
  - : Siehe {{rfc(7804)}}
- **AWS4-HMAC-SHA256**
  - : Siehe [AWS-Dokumentation](https://docs.aws.amazon.com/AmazonS3/latest/API/sigv4-auth-using-authorization-header.html). Dieses Schema wird zur AWS3-Serverauthentifizierung verwendet.

Die Schemata können sich in der Sicherheitsstärke und in ihrer Verfügbarkeit in Client- oder Server-Software unterscheiden.

Das "Basic"-Authentifizierungsschema bietet sehr geringe Sicherheit, wird jedoch weit unterstützt und ist einfach einzurichten. Es wird unten ausführlicher eingeführt.

## Basic-Authentifizierungsschema

Das "Basic"-HTTP-Authentifizierungsschema ist definiert in {{rfc(7617)}}, das Anmeldedaten als Benutzer-ID/Passwort-Paare codiert mit base64 überträgt.

### Sicherheit der Basic-Authentifizierung

Da die Benutzer-ID und das Passwort im Netzwerk als Klartext übermittelt werden (sie sind base64-codiert, aber base64 ist eine reversible Codierung), ist das Basic-Authentifizierungsschema nicht sicher. HTTPS/TLS sollte mit Basic-Authentifizierung verwendet werden, um das Abfangen von Anmeldedaten zu verhindern.

Darüber hinaus sind Seiten, die HTTP Basic Auth verwenden, besonders anfällig für {{Glossary("CSRF", "Cross-Site Request Forgery (CSRF)")}}-Angriffe, da die Benutzeranmeldedaten bei allen Anfragen ungeachtet des Ursprungs gesendet werden (dies unterscheidet sich von cookie-basierten Anmeldemechanismen, da Cookies in Cross-Site-Anfragen häufig blockiert werden). Seiten sollten immer POST-Anfragen verwenden, wenn Daten geändert werden, und [CSRF-Token](/de/docs/Web/Security/Attacks/CSRF) einfügen.

Ohne diese Sicherheitsverbesserungen sollte Basic-Authentifizierung nicht verwendet werden, um sensible oder wertvolle Informationen zu schützen.

### Zugriff einschränken mit Apache und Basic-Authentifizierung

Um ein Verzeichnis auf einem Apache-Server passwortzuschützen, benötigen Sie eine `.htaccess` und eine `.htpasswd` Datei.

Die `.htaccess`-Datei sieht typischerweise so aus:

```apacheconf
AuthType Basic
AuthName "Access to the staging site"
AuthUserFile /path/to/.htpasswd
Require valid-user
```

Die `.htaccess`-Datei verweist auf eine `.htpasswd`-Datei, in der jede Zeile aus einem Benutzernamen und einem durch einen Doppelpunkt (`:`) getrennten Passwort besteht. Sie können die tatsächlichen Passwörter nicht sehen, da sie [gehasht](https://httpd.apache.org/docs/2.4/misc/password_encryptions.html) sind (in diesem Fall durch MD5-basiertes Hashing). Beachten Sie, dass Sie Ihre `.htpasswd`-Datei anders benennen können, wenn Sie möchten, aber bedenken Sie, dass diese Datei für niemanden zugänglich sein sollte. (Apache ist normalerweise so konfiguriert, dass der Zugriff auf `.ht*`-Dateien verhindert wird).

```apacheconf
aladdin:$apr1$ZjTqBB3f$IF9gdYAGlMrs2fuINjHsz.
user2:$apr1$O04r.y2H$/vEkesPhVInBByJUkXitA/
```

### Zugriff einschränken mit Nginx und Basic-Authentifizierung

Für Nginx müssen Sie einen Ort angeben, den Sie schützen möchten, sowie die `auth_basic`-Direktive, die den Namen des passwortgeschützten Bereichs bereitstellt.
Die `auth_basic_user_file`-Direktive verweist dann auf eine `.htpasswd`-Datei, die die verschlüsselten Benutzeranmeldedaten enthält, genau wie im Apache-Beispiel oben.

```apacheconf
location /status {
    auth_basic           "Access to the staging site";
    auth_basic_user_file /etc/apache2/.htpasswd;
}
```

### Zugriff mit Anmeldedaten in der URL

Historisch gesehen erlaubten einige Seiten die Anmeldung über eine kodierte URL, die den Benutzernamen und das Passwort enthielt, wie gezeigt:

```plain example-bad
https://username:password@www.example.com/
```

Diese Syntax ist in modernen Browsern nicht mehr erlaubt; der Benutzername und das Passwort werden von der Anfrage entfernt, bevor sie gesendet wird.

## Siehe auch

- {{HTTPHeader("WWW-Authenticate")}}
- {{HTTPHeader("Authorization")}}
- {{HTTPHeader("Proxy-Authorization")}}
- {{HTTPHeader("Proxy-Authenticate")}}
- {{HTTPStatus("401")}}, {{HTTPStatus("403")}}, {{HTTPStatus("407")}}
- [HTTP-Sicherheits-Leitfäden](/de/docs/Web/Security)
