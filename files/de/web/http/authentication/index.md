---
title: HTTP-Authentifizierung
slug: Web/HTTP/Authentication
l10n:
  sourceCommit: ef46a4ac6bfec3e33c9209244e7cb1a9206165d6
---

{{HTTPSidebar}}

HTTP bietet einen allgemeinen Rahmen für Zugriffskontrolle und Authentifizierung. Diese Seite ist eine Einführung in den HTTP-Rahmen für Authentifizierung und zeigt, wie Sie den Zugriff auf Ihren Server mit dem HTTP-"Basic"-Schema einschränken können.

## Der allgemeine Rahmen der HTTP-Authentifizierung

{{RFC("7235")}} definiert den HTTP-Authentifizierungsrahmen, der von einem Server genutzt werden kann, um eine [Herausforderung](/de/docs/Glossary/challenge) an eine Client-Anfrage zu stellen und durch einen Client zur Bereitstellung von Authentifizierungsinformationen.

Der Ablauf von Herausforderung und Antwort funktioniert folgendermaßen:

1. Der Server antwortet einem Client mit einem {{HTTPStatus("401")}} (Unauthorized)-Antwortstatus und gibt Informationen zur Autorisierung mit einem {{HTTPHeader("WWW-Authenticate")}}-Antwortheader, der mindestens eine Herausforderung enthält.
2. Ein Client, der sich beim Server authentifizieren möchte, kann dies tun, indem er einen {{HTTPHeader("Authorization")}}-Anforderungsheader mit den Anmeldedaten einfügt.
3. Normalerweise präsentiert ein Client dem Benutzer ein Passwort-Feld und sendet dann die Anfrage inklusive des korrekten `Authorization`-Headers.

![Ein Sequenzdiagramm, das HTTP-Nachrichten zwischen einem Client und einem Server-Lebenslauf veranschaulicht.](https://mdn.github.io/shared-assets/images/diagrams/http/authentication/basic-auth.svg)

Der allgemeine Nachrichtenfluss oben ist derselbe für die meisten (wenn nicht alle) [Authentifizierungsschemata](#authentifizierungsschemata). Die eigentlichen Informationen in den Headern und die Art und Weise, wie sie kodiert sind, ändern sich!

> [!WARNING]
> Das "Basic"-Authentifizierungsschema, das im obigen Diagramm verwendet wird, sendet die Anmeldedaten kodiert, aber nicht verschlüsselt. Das wäre vollkommen unsicher, es sei denn, der Austausch erfolgt über eine sichere Verbindung (HTTPS/TLS).

### Proxy-Authentifizierung

Der gleiche Mechanismus von Herausforderung und Antwort kann für die _Proxy-Authentifizierung_ verwendet werden. Da sowohl Ressourcen- als auch Proxy-Authentifizierung koexistieren können, ist ein anderes Set an Headern und Statuscodes nötig. Im Fall von Proxys ist der herausfordernde Statuscode {{HTTPStatus("407")}} (Proxy Authentication Required), der {{HTTPHeader("Proxy-Authenticate")}}-Antwortheader enthält mindestens eine auf den Proxy anwendbare Herausforderung, und der {{HTTPHeader("Proxy-Authorization")}}-Anforderungsheader wird zur Bereitstellung der Anmeldedaten an den Proxy-Server verwendet.

### Zugriff verweigert

Wenn ein (Proxy-)Server _ungültige_ Anmeldedaten erhält, sollte er mit einem {{HTTPStatus("401")}} `Unauthorized` oder mit einem {{HTTPStatus("407")}} `Proxy Authentication Required` antworten, und der Benutzer kann eine neue Anfrage senden oder das {{HTTPHeader("Authorization")}}-Headerfeld ersetzen.

Wenn ein (Proxy-)Server gültige Anmeldedaten erhält, die _ungeeignet_ sind, um auf eine bestimmte Ressource zuzugreifen, sollte der Server mit dem Statuscode {{HTTPStatus("403")}} `Forbidden` antworten. Im Gegensatz zu {{HTTPStatus("401")}} `Unauthorized` oder {{HTTPStatus("407")}} `Proxy Authentication Required` ist in diesem Fall die Authentifizierung für diesen Benutzer nicht möglich und Browser werden keinen neuen Versuch vorschlagen.

In allen Fällen kann der Server es vorziehen, einen {{HTTPStatus("404")}} `Not Found`-Statuscode zurückzugeben, um die Existenz der Seite vor einem Benutzer ohne ausreichende Berechtigungen oder nicht korrekt authentifiziert zu verbergen.

### Authentifizierung von Cross-Origin-Bildern

Ein potenzielles Sicherheitsloch (das inzwischen in Browsern behoben wurde) war die Authentifizierung von Cross-Site-Bildern. Ab [Firefox 59](/de/docs/Mozilla/Firefox/Releases/59) können Bildressourcen, die aus anderen Ursprüngen als das aktuelle Dokument geladen werden, keine HTTP-Authentifizierungsdialoge mehr auslösen ([Firefox-Bug 1423146](https://bugzil.la/1423146)), was verhindert, dass Benutzerdaten gestohlen werden, wenn Angreifer in der Lage wären, ein beliebiges Bild in eine Drittanbieterseite einzubinden.

### Zeichenkodierung der HTTP-Authentifizierung

Browser verwenden `utf-8`-Kodierung für Benutzernamen und Passwörter.

Firefox verwendete früher `ISO-8859-1`, änderte dies jedoch auf `utf-8`, um Parität mit anderen Browsern zu erreichen und potenzielle Probleme zu vermeiden, wie im [Firefox-Bug 1419658](https://bugzil.la/1419658) beschrieben.

### WWW-Authenticate- und Proxy-Authenticate-Header

Die {{HTTPHeader("WWW-Authenticate")}} und {{HTTPHeader("Proxy-Authenticate")}}-Antwortheader definieren die Authentifizierungsmethode, die verwendet werden sollte, um Zugriff auf eine Ressource zu erhalten. Sie müssen festlegen, welches Authentifizierungsschema verwendet wird, damit der Client, der sich autorisieren möchte, weiß, wie er die Anmeldedaten bereitstellen soll.

Die Syntax dieser Header ist folgende:

```http
WWW-Authenticate: <type> realm=<realm>
Proxy-Authenticate: <type> realm=<realm>
```

Hier ist `<type>` das Authentifizierungsschema ("Basic" ist das häufigste Schema und [wird unten eingeführt](#basic-authentifizierungsschema)). Der _realm_ wird verwendet, um den geschützten Bereich zu beschreiben oder den Schutzbereich anzugeben. Dies könnte eine Nachricht wie "Zugang zur Staging-Site" oder Ähnliches sein, damit der Benutzer weiß, auf welchen Bereich er zugreifen möchte.

### Authorization- und Proxy-Authorization-Header

Die {{HTTPHeader("Authorization")}} und {{HTTPHeader("Proxy-Authorization")}}-Anforderungsheader enthalten die Anmeldedaten zur Authentifizierung eines Benutzeragenten bei einem (Proxy-)Server. Hier wird wieder das `<type>` benötigt, gefolgt von den Anmeldedaten, die je nach verwendetem Authentifizierungsschema kodiert oder verschlüsselt sein können.

```http
Authorization: <type> <credentials>
Proxy-Authorization: <type> <credentials>
```

## Authentifizierungsschemata

Der allgemeine HTTP-Authentifizierungsrahmen bildet die Grundlage für eine Reihe von Authentifizierungsschemata.

Die IANA führt eine [Liste der Authentifizierungsschemata](https://www.iana.org/assignments/http-authschemes/http-authschemes.xhtml), aber es gibt auch andere von Host-Diensten angebotene Schemata, wie etwa Amazon AWS.

Einige gängige Authentifizierungsschemata sind:

- **Basic**
  - : Siehe {{rfc(7617)}}, base64-kodierte Anmeldedaten. Weitere Informationen unten.
- **Bearer**
  - : Siehe {{rfc(6750)}}, Berechtigungsnachweise zum Zugriff auf OAuth 2.0-geschützte Ressourcen.
- **Digest**
  - : Siehe {{rfc(7616)}}. Firefox 93 und später unterstützen den SHA-256-Algorithmus. Frühere Versionen unterstützen nur MD5-Hashing (nicht empfohlen).
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
  - : Siehe [AWS-Dokumentation](https://docs.aws.amazon.com/AmazonS3/latest/API/sigv4-auth-using-authorization-header.html). Dieses Schema wird für die AWS3-Serverauthentifizierung verwendet.

Schemata können sich in ihrer Sicherheitsstärke und in ihrer Verfügbarkeit in Client- oder Serversoftware unterscheiden.

Das "Basic"-Authentifizierungsschema bietet sehr wenig Sicherheit, ist aber weit verbreitet und leicht einzurichten. Es wird im Folgenden genauer eingeführt.

## Basic-Authentifizierungsschema

Das "Basic"-HTTP-Authentifizierungsschema ist in {{rfc(7617)}} definiert, das Anmeldedaten als Benutzer-ID/Passwort-Paare überträgt, die mit Base64 kodiert sind.

### Sicherheit der Basis-Authentifizierung

Da die Benutzer-ID und das Passwort im Netzwerk im Klartext übergeben werden (sie sind base64-kodiert, aber base64 ist eine reversible Kodierung), ist das-basierte Authentifizierungsschema **nicht sicher**. HTTPS/TLS sollte mit basic authentication verwendet werden. Ohne diese zusätzlichen Sicherheitsverbesserungen sollte die Basis-Authentifizierung nicht zum Schutz sensibler oder wertvoller Informationen verwendet werden.

### Zugriffsbeschränkung mit Apache und Basis-Authentifizierung

Um ein Verzeichnis auf einem Apache-Server passwortzuschützen, benötigen Sie eine `.htaccess`- und eine `.htpasswd`-Datei.

Die `.htaccess`-Datei sieht typischerweise so aus:

```apacheconf
AuthType Basic
AuthName "Access to the staging site"
AuthUserFile /path/to/.htpasswd
Require valid-user
```

Die `.htaccess`-Datei verweist auf eine `.htpasswd`-Datei, in der jede Zeile aus einem Benutzernamen und einem durch einen Doppelpunkt (`:`) getrennten Passwort besteht. Sie können die tatsächlichen Passwörter nicht sehen, da sie [gehasht](https://httpd.apache.org/docs/2.4/misc/password_encryptions.html) sind (in diesem Fall wird MD5-basiertes Hashing verwendet). Beachten Sie, dass Sie Ihre `.htpasswd`-Datei anders benennen können, wenn Sie möchten, aber denken Sie daran, dass diese Datei für niemanden zugänglich sein sollte. (Apache ist normalerweise so konfiguriert, dass der Zugriff auf `.ht*`-Dateien verhindert wird).

```apacheconf
aladdin:$apr1$ZjTqBB3f$IF9gdYAGlMrs2fuINjHsz.
user2:$apr1$O04r.y2H$/vEkesPhVInBByJUkXitA/
```

### Zugriffsbeschränkung mit Nginx und Basis-Authentifizierung

Für Nginx müssen Sie einen zu schützenden Standort angeben und die `auth_basic`-Direktive, die den Namen für den passwortgeschützten Bereich bereitstellt. Die `auth_basic_user_file`-Direktive zeigt dann auf eine `.htpasswd`-Datei, die die verschlüsselten Benutzerdaten enthält, genau wie im obigen Apache-Beispiel.

```apacheconf
location /status {
    auth_basic           "Access to the staging site";
    auth_basic_user_file /etc/apache2/.htpasswd;
}
```

### Zugriff mit Anmeldedaten in der URL

Viele Clients ermöglichen es Ihnen, die Anmeldung zu überspringen, indem Sie eine codierte URL verwenden, die den Benutzernamen und das Passwort enthält, wie folgt:

```plain example-bad
https://username:password@www.example.com/
```

**Die Verwendung dieser URLs ist veraltet.** In Chrome wird der `username:password@`-Teil in URLs aus [Sicherheitsgründen aus Subresource-URLs entfernt](https://codereview.chromium.org/2651943002). In Firefox wird geprüft, ob die Seite tatsächlich eine Authentifizierung erfordert, und wenn nicht, warnt Firefox den Benutzer mit einem Hinweis "Sie sind dabei, sich auf der Seite `www.example.com` mit dem Benutzernamen `username` anzumelden, aber die Website erfordert keine Authentifizierung. Dies könnte ein Versuch sein, Sie zu täuschen." Falls die Seite eine Authentifizierung erfordert, wird Firefox den Benutzer immer noch um Bestätigung bitten: "Sie sind dabei, sich auf der Seite `www.example.com` mit dem Benutzernamen `username` anzumelden." bevor die Anmeldedaten an die Seite gesendet werden. Beachten Sie, dass Firefox die Anfrage in beiden Fällen ohne Anmeldedaten sendet, bevor das Popup angezeigt wird, um zu bestimmen, ob die Seite eine Authentifizierung erfordert.

## Siehe auch

- {{HTTPHeader("WWW-Authenticate")}}
- {{HTTPHeader("Authorization")}}
- {{HTTPHeader("Proxy-Authorization")}}
- {{HTTPHeader("Proxy-Authenticate")}}
- {{HTTPStatus("401")}}, {{HTTPStatus("403")}}, {{HTTPStatus("407")}}
