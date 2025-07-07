---
title: HTTP-Authentifizierung
slug: Web/HTTP/Guides/Authentication
l10n:
  sourceCommit: c182f3c8fc8e76f7c7d90eaeb1439c47a524e950
---

HTTP bietet einen allgemeinen Rahmen für Zugangskontrolle und Authentifizierung.
Diese Seite ist eine Einführung in das HTTP-Framework für Authentifizierung und zeigt, wie Sie mit dem HTTP-"Basic"-Schema den Zugriff auf Ihren Server beschränken können.

## Das allgemeine HTTP-Authentifizierungs-Framework

{{RFC("7235")}} definiert das HTTP-Authentifizierungs-Framework, das von einem Server genutzt werden kann, um eine {{Glossary("challenge", "Herausforderung")}} an eine Client-Anfrage zu senden, und von einem Client, um Authentifizierungsinformationen bereitzustellen.

Der Ablauf von Herausforderung und Antwort funktioniert so:

1. Der Server antwortet einem Client mit einem {{HTTPStatus("401")}} (Unauthorized) Antwortstatus und gibt Informationen, wie man sich autorisieren kann, mit einem {{HTTPHeader("WWW-Authenticate")}} Antwort-Header, der mindestens eine Herausforderung enthält.
2. Ein Client, der sich beim Server authentifizieren möchte, kann dies dann tun, indem er einen {{HTTPHeader("Authorization")}} Anforderungs-Header mit den Anmeldedaten einschließt.
3. In der Regel wird ein Client dem Benutzer eine Passwortabfrage präsentieren und dann die Anfrage mit dem korrekten `Authorization`-Header ausgeben.

![Ein Sequenzdiagramm, das HTTP-Nachrichten zwischen einem Client und einem Server-Lebenszyklus veranschaulicht.](https://mdn.github.io/shared-assets/images/diagrams/http/authentication/basic-auth.svg)

Der allgemeine Nachrichtenaustausch oben ist für die meisten (wenn nicht alle) [Authentifizierungsschemata](#authentifizierungsschemata) gleich. Die tatsächlichen Informationen in den Headern und die Art der Kodierung ändern sich jedoch!

> [!WARNING]
> Das oben im Diagramm verwendete „Basic“-Authentifizierungsschema sendet die Anmeldedaten kodiert, aber nicht verschlüsselt.
> Dies wäre völlig unsicher, es sei denn, der Austausch würde über eine sichere Verbindung (HTTPS/TLS) erfolgen.

### Proxy-Authentifizierung

Der gleiche Mechanismus von Herausforderung und Antwort kann für die _Proxy-Authentifizierung_ verwendet werden.
Da sowohl die Ressourcen-Authentifizierung als auch die Proxy-Authentifizierung koexistieren können, wird ein anderer Satz von Headern und Statuscodes benötigt. Im Falle von Proxys ist der herausfordernde Statuscode {{HTTPStatus("407")}} (Proxy Authentication Required), der {{HTTPHeader("Proxy-Authenticate")}} Antwort-Header enthält mindestens eine für den Proxy geltende Herausforderung, und der {{HTTPHeader("Proxy-Authorization")}} Anforderungs-Header wird verwendet, um dem Proxy-Server die Anmeldedaten bereitzustellen.

### Zugriff verboten

Wenn ein (Proxy-)Server _ungültige_ Anmeldedaten erhält, sollte er mit einem {{HTTPStatus("401")}} `Unauthorized` oder mit einem {{HTTPStatus("407")}} `Proxy Authentication Required` antworten, und der Benutzer kann eine neue Anfrage senden oder das {{HTTPHeader("Authorization")}} Header-Feld ersetzen.

Wenn ein (Proxy-)Server gültige Anmeldedaten erhält, die _unangemessen_ sind, um auf eine bestimmte Ressource zuzugreifen, sollte der Server mit dem Statuscode {{HTTPStatus("403")}} `Forbidden` antworten. Im Gegensatz zu {{HTTPStatus("401")}} `Unauthorized` oder {{HTTPStatus("407")}} `Proxy Authentication Required` ist in diesem Fall für diesen Benutzer keine Authentifizierung möglich, und Browser werden keinen neuen Versuch vorschlagen.

In jedem Fall kann der Server es vorziehen, einen {{HTTPStatus("404")}} `Not Found` Statuscode zurückzugeben, um die Existenz der Seite für einen Benutzer ohne angemessene Rechte oder nicht korrekt authentifiziert zu verbergen.

### Authentifizierung von Cross-Origin-Bildern

Ein potenzielles Sicherheitsloch, das in Browsern mittlerweile behoben wurde, war die Authentifizierung von Cross-Site-Bildern.
Ab [Firefox 59](/de/docs/Mozilla/Firefox/Releases/59) können Bildressourcen, die von anderen Ursprüngen als dem aktuellen Dokument geladen werden, keine HTTP-Authentifizierungsdialoge mehr auslösen ([Firefox bug 1423146](https://bugzil.la/1423146)), wodurch verhindert wird, dass Benutzerdaten gestohlen werden, falls Angreifer in der Lage sind, ein beliebiges Bild in eine Drittanbieter-Seite einzubetten.

### Zeichencodierung der HTTP-Authentifizierung

Browser verwenden die `utf-8`-Codierung für Benutzernamen und Passwörter.

Firefox verwendete früher `ISO-8859-1`, änderte jedoch auf `utf-8` zur Angleichung an andere Browser und zur Vermeidung potenzieller Probleme, wie in [Firefox bug 1419658](https://bugzil.la/1419658) beschrieben.

### WWW-Authenticate und Proxy-Authenticate Header

Die {{HTTPHeader("WWW-Authenticate")}} und {{HTTPHeader("Proxy-Authenticate")}} Antwort-Header definieren die Authentifizierungsmethode, die verwendet werden sollte, um Zugriff auf eine Ressource zu erhalten. Sie müssen angeben, welches Authentifizierungsschema verwendet wird, damit der Client, der sich autorisieren möchte, weiß, wie er die Anmeldedaten bereitstellen muss.

Die Syntax für diese Header ist folgende:

```http
WWW-Authenticate: <type> realm=<realm>
Proxy-Authenticate: <type> realm=<realm>
```

Hierbei ist `<type>` das Authentifizierungsschema (das gebräuchlichste Schema ist "Basic" und [wird weiter unten eingeführt](#basis-authentifizierungsschema)). Der _realm_ wird verwendet, um den geschützten Bereich zu beschreiben oder den Schutzbereich anzugeben. Dies könnte eine Nachricht wie "Zugriff auf die Staging-Seite" oder ähnlich sein, damit der Benutzer weiß, auf welchen Bereich er zugreifen möchte.

### Authorization und Proxy-Authorization Header

Die {{HTTPHeader("Authorization")}} und {{HTTPHeader("Proxy-Authorization")}} Anforderungs-Header enthalten die Anmeldedaten, um einen Benutzeragenten bei einem (Proxy-)Server zu authentifizieren. Auch hier ist `<type>` erneut benötigt, gefolgt von den Anmeldedaten, die je nach verwendetem Authentifizierungsschema kodiert oder verschlüsselt sein können.

```http
Authorization: <type> <credentials>
Proxy-Authorization: <type> <credentials>
```

## Authentifizierungsschemata

Das allgemeine HTTP-Authentifizierungs-Framework bildet die Grundlage für eine Reihe von Authentifizierungsschemata.

IANA unterhält eine [Liste von Authentifizierungsschemata](https://www.iana.org/assignments/http-authschemes/http-authschemes.xhtml), aber es gibt auch andere Schemata, die von Hostdiensten angeboten werden, wie etwa Amazon AWS.

Einige gängige Authentifizierungsschemata sind:

- **Basic**
  - : Siehe {{rfc(7617)}}, base64-kodierte Anmeldedaten. Weitere Informationen unten.
- **Bearer**
  - : Siehe {{rfc(6750)}}, Bearer-Tokens zum Zugriff auf durch OAuth 2.0 geschützte Ressourcen
- **Digest**
  - : Siehe {{rfc(7616)}}. Firefox 93 und höher unterstützen den SHA-256-Algorithmus. Frühere Versionen unterstützen nur MD5-Hashing (nicht empfohlen).
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
  - : Siehe [AWS-Dokumentation](https://docs.aws.amazon.com/AmazonS3/latest/API/sigv4-auth-using-authorization-header.html). Dieses Schema wird für die AWS3-Serverauthentifizierung verwendet.

Die Schemata können sich in der Sicherheitsstärke und ihrer Verfügbarkeit in Client- oder Server-Software unterscheiden.

Das "Basic"-Authentifizierungsschema bietet sehr geringe Sicherheit, ist jedoch weit verbreitet und einfach einzurichten.
Es wird im Folgenden ausführlicher vorgestellt.

## Basis-Authentifizierungsschema

Das "Basic" HTTP-Authentifizierungsschema ist in {{rfc(7617)}} definiert, das Anmeldedaten als Benutzer-ID/Passwort-Paare übermittelt, kodiert mit base64.

### Sicherheit der Basis-Authentifizierung

Da Benutzer-ID und Passwort im Klartext über das Netzwerk übermittelt werden (es ist base64-kodiert, aber base64 ist eine umkehrbare Kodierung), ist das Basis-Authentifizierungsschema **nicht sicher**. HTTPS/TLS sollte zusammen mit der Basis-Authentifizierung verwendet werden. Ohne diese zusätzlichen Sicherheitserweiterungen sollte die Basis-Authentifizierung nicht zum Schutz sensibler oder wertvoller Informationen verwendet werden.

### Zugriffsbeschränkung mit Apache und Basis-Authentifizierung

Um ein Verzeichnis auf einem Apache-Server per Passwort zu schützen, benötigen Sie eine `.htaccess` und eine `.htpasswd` Datei.

Die `.htaccess` Datei sieht typischerweise so aus:

```apacheconf
AuthType Basic
AuthName "Access to the staging site"
AuthUserFile /path/to/.htpasswd
Require valid-user
```

Die `.htaccess` Datei verweist auf eine `.htpasswd` Datei, in der jede Zeile aus einem Benutzernamen und einem Passwort besteht, die durch einen Doppelpunkt (`:`) getrennt sind. Sie können die tatsächlichen Passwörter nicht sehen, da sie [gehasht](https://httpd.apache.org/docs/2.4/misc/password_encryptions.html) sind (unter Verwendung von MD5-basiertem Hashing in diesem Fall). Beachten Sie, dass Sie Ihre `.htpasswd` Datei anders benennen können, wenn Sie möchten, aber bedenken Sie, dass diese Datei für niemanden zugänglich sein sollte. (Apache ist normalerweise so konfiguriert, dass der Zugriff auf `.ht*` Dateien verhindert wird).

```apacheconf
aladdin:$apr1$ZjTqBB3f$IF9gdYAGlMrs2fuINjHsz.
user2:$apr1$O04r.y2H$/vEkesPhVInBByJUkXitA/
```

### Zugriffsbeschränkung mit Nginx und Basis-Authentifizierung

Für Nginx müssen Sie einen Standort angeben, den Sie schützen möchten, und die `auth_basic` Direktive, die den Namen des passwortgeschützten Bereichs angibt.
Die `auth_basic_user_file` Direktive zeigt dann auf eine `.htpasswd` Datei, die die verschlüsselten Benutzeranmeldedaten enthält, ähnlich wie im Apache-Beispiel oben.

```apacheconf
location /status {
    auth_basic           "Access to the staging site";
    auth_basic_user_file /etc/apache2/.htpasswd;
}
```

### Zugriff mit Anmeldedaten in der URL

Historisch gesehen erlaubten einige Seiten die Anmeldung mit einer kodierten URL, die den Benutzernamen und das Passwort enthielt, wie gezeigt:

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
