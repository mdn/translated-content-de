---
title: HTTP-Authentifizierung
slug: Web/HTTP/Guides/Authentication
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

HTTP stellt einen allgemeinen Rahmen für Zugangskontrolle und Authentifizierung bereit.
Diese Seite ist eine Einführung in das HTTP-Framework für Authentifizierung und zeigt, wie Sie den Zugriff auf Ihren Server mithilfe des HTTP-"Basic"-Schemes einschränken können.

## Das allgemeine HTTP-Authentifizierungsframework

{{RFC("7235")}} definiert das HTTP-Authentifizierungsframework, das von einem Server verwendet werden kann, um eine {{Glossary("challenge", "Herausforderung")}} an eine Client-Anfrage zu senden, und von einem Client, um Authentifizierungsinformationen bereitzustellen.

Der Ablauf von Herausforderung und Antwort funktioniert folgendermaßen:

1. Der Server antwortet einem Client mit einem {{HTTPStatus("401")}} (Unauthorized) Antwortstatus und liefert Informationen darüber, wie man sich mit einem {{HTTPHeader("WWW-Authenticate")}} Antwortheader autorisiert, der mindestens eine Herausforderung enthält.
2. Ein Client, der sich beim Server authentifizieren möchte, kann dies dann tun, indem er einen {{HTTPHeader("Authorization")}} Anfrage-Header mit den Anmeldedaten einschließt.
3. Normalerweise wird ein Client dem Benutzer eine Passwortaufforderung präsentieren und anschließend die Anfrage mit dem korrekten `Authorization`-Header senden.

![Ein Sequenzdiagramm, das HTTP-Nachrichten zwischen einem Client und einem Server darstellt.](https://mdn.github.io/shared-assets/images/diagrams/http/authentication/basic-auth.svg)

Der allgemeine Nachrichtenfluss oben ist derselbe für die meisten (wenn nicht alle) [Authentifizierungsschemes](#authentifizierungsschemes).
Die tatsächlichen Informationen in den Headern und die Art und Weise, wie sie kodiert werden, ändern sich jedoch!

> [!WARNING]
> Das im obigen Diagramm verwendete "Basic"-Authentifizierungsschema sendet die Anmeldedaten kodiert, aber nicht verschlüsselt.
> Dies wäre völlig unsicher, es sei denn, der Austausch erfolgt über eine sichere Verbindung (HTTPS/TLS).

### Proxy-Authentifizierung

Der gleiche Mechanismus von Herausforderung und Antwort kann für die _Proxy-Authentifizierung_ verwendet werden.
Da sowohl Ressourcen- als auch Proxy-Authentifizierung koexistieren können, wird ein anderer Satz von Headern und Statuscodes benötigt. Im Falle von Proxies ist der Herausforderung-Statuscode {{HTTPStatus("407")}} (Proxy Authentication Required), der {{HTTPHeader("Proxy-Authenticate")}} Antwort-Header enthält mindestens eine Herausforderung, die für den Proxy gilt, und der {{HTTPHeader("Proxy-Authorization")}} Anfrage-Header wird verwendet, um die Anmeldedaten an den Proxy-Server zu senden.

### Zugang verweigert

Wenn ein (Proxy-)Server _ungültige_ Anmeldedaten erhält, sollte er mit einem {{HTTPStatus("401")}} `Unauthorized` oder mit einem {{HTTPStatus("407")}} `Proxy Authentication Required` antworten, und der Benutzer kann eine neue Anfrage senden oder das {{HTTPHeader("Authorization")}} Headerfeld austauschen.

Wenn ein (Proxy-)Server gültige Anmeldedaten erhält, die _nicht ausreichen_, um auf eine bestimmte Ressource zuzugreifen, sollte der Server mit dem Statuscode {{HTTPStatus("403")}} `Forbidden` antworten. Im Gegensatz zu {{HTTPStatus("401")}} `Unauthorized` oder {{HTTPStatus("407")}} `Proxy Authentication Required` ist die Authentifizierung für diesen Benutzer unmöglich und Browser werden keinen neuen Versuch vorschlagen.

In allen Fällen kann der Server bevorzugen, einen {{HTTPStatus("404")}} `Not Found` Statuscode zurückzugeben, um die Existenz der Seite einem Benutzer ohne angemessene Berechtigungen oder nicht ordnungsgemäß authentifiziertem Benutzer zu verbergen.

### Authentifizierung von Cross-Origin-Bildern

Ein potenzielles Sicherheitsloch (das mittlerweile in Browsern behoben wurde) war die Authentifizierung von Cross-Site-Bildern.
Ab [Firefox 59](/de/docs/Mozilla/Firefox/Releases/59) können Bildressourcen, die von anderen Ursprüngen als dem aktuellen Dokument geladen wurden, keine HTTP-Authentifizierungsdialoge mehr auslösen ([Firefox-Bug 1423146](https://bugzil.la/1423146)), wodurch verhindert wird, dass Benutzerdaten gestohlen werden, wenn Angreifer in der Lage sind, ein beliebiges Bild in eine Drittanbieter-Seite einzufügen.

### Zeichencodierung der HTTP-Authentifizierung

Browser verwenden `utf-8` Codierung für Benutzernamen und Passwörter.

Firefox hat einst `ISO-8859-1` verwendet, ist jedoch zu `utf-8` gewechselt, um Parität mit anderen Browsern zu gewährleisten und potenzielle Probleme zu vermeiden, wie sie im [Firefox-Bug 1419658](https://bugzil.la/1419658) beschrieben sind.

### WWW-Authenticate und Proxy-Authenticate Header

Die {{HTTPHeader("WWW-Authenticate")}} und {{HTTPHeader("Proxy-Authenticate")}} Antwort-Header definieren die Authentifizierungsmethode, die verwendet werden sollte, um Zugang zu einer Ressource zu erhalten. Sie müssen angeben, welches Authentifizierungsschema verwendet wird, damit der Client, der sich autorisieren möchte, weiß, wie er die Anmeldedaten bereitstellen soll.

Die Syntax für diese Header ist wie folgt:

```http
WWW-Authenticate: <type> realm=<realm>
Proxy-Authenticate: <type> realm=<realm>
```

Hierbei ist `<type>` das Authentifizierungsschema („Basic“ ist das am häufigsten verwendete Schema und wird [unten vorgestellt](#basic-authentifizierungsschema)). Der _realm_ wird verwendet, um den geschützten Bereich zu beschreiben oder den Schutzumfang anzugeben. Dies könnte eine Nachricht wie „Zugang zur Staging-Site“ oder ähnliches sein, damit der Benutzer weiß, auf welchen Bereich er zugreifen möchte.

### Authorization und Proxy-Authorization Header

Die {{HTTPHeader("Authorization")}} und {{HTTPHeader("Proxy-Authorization")}} Anfrage-Header enthalten die Anmeldedaten, um einen Benutzer-Agenten bei einem (Proxy-)Server zu authentifizieren. Hier wird erneut `<type>` benötigt, gefolgt von den Anmeldedaten, die je nach verwendetem Authentifizierungsschema kodiert oder verschlüsselt werden können.

```http
Authorization: <type> <credentials>
Proxy-Authorization: <type> <credentials>
```

## Authentifizierungsschemes

Das allgemeine HTTP-Authentifizierungsframework ist die Basis für eine Reihe von Authentifizierungsschemes.

IANA führt eine [Liste von Authentifizierungsschemes](https://www.iana.org/assignments/http-authschemes/http-authschemes.xhtml), aber es gibt auch andere Schemes, die von Host-Services angeboten werden, wie Amazon AWS.

Einige häufige Authentifizierungsschemes umfassen:

- **Basic**
  - : Siehe {{rfc(7617)}}, base64-kodierte Anmeldedaten. Mehr Informationen unten.
- **Bearer**
  - : Siehe {{rfc(6750)}}, Bearer-Tokens zum Zugriff auf OAuth 2.0-geschützte Ressourcen
- **Digest**
  - : Siehe {{rfc(7616)}}. Firefox 93 und später unterstützen den SHA-256-Algorithmus. Frühere Versionen unterstützen nur MD5-Hashing (nicht empfohlen).
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
  - : Siehe [AWS-Dokumente](https://docs.aws.amazon.com/AmazonS3/latest/API/sigv4-auth-using-authorization-header.html). Dieses Schema wird für die AWS3-Serverauthentifizierung verwendet.

Die Schemes können sich in ihrer Sicherheitsstärke und in ihrer Verfügbarkeit in Client- oder Serversoftware unterscheiden.

Das "Basic"-Authentifizierungsschema bietet sehr geringe Sicherheit, ist aber weit verbreitet und einfach einzurichten.
Es wird im Folgenden ausführlicher dargestellt.

## Basic-Authentifizierungsschema

Das "Basic" HTTP-Authentifizierungsschema ist in {{rfc(7617)}} definiert und überträgt Anmeldedaten als Benutzer-ID/Passwort-Paare, kodiert in base64.

### Sicherheit der Basic-Authentifizierung

Da die Benutzer-ID und das Passwort als Klartext über das Netzwerk übertragen werden (sie sind base64-kodiert, aber base64 ist eine reversible Kodierung), ist das Basic-Authentifizierungsschema **nicht sicher**. HTTPS/TLS sollte mit Basic-Authentifizierung verwendet werden. Ohne diese zusätzlichen Sicherheitsverbesserungen sollte die Basic-Authentifizierung nicht verwendet werden, um sensible oder wertvolle Informationen zu schützen.

### Zugriffseinschränkung mit Apache und Basic-Authentifizierung

Um ein Verzeichnis auf einem Apache-Server mit einem Passwort zu schützen, benötigen Sie eine `.htaccess`- und eine `.htpasswd`-Datei.

Die `.htaccess`-Datei sieht typischerweise so aus:

```apacheconf
AuthType Basic
AuthName "Access to the staging site"
AuthUserFile /path/to/.htpasswd
Require valid-user
```

Die `.htaccess`-Datei verweist auf eine `.htpasswd`-Datei, in der jede Zeile aus einem Benutzernamen und einem Passwort besteht, getrennt durch einen Doppelpunkt (`:`). Sie können die tatsächlichen Passwörter nicht sehen, da sie [gehasht](https://httpd.apache.org/docs/2.4/misc/password_encryptions.html) werden (unter Verwendung von MD5-basiertem Hashing in diesem Fall). Beachten Sie, dass Sie Ihre `.htpasswd`-Datei anders benennen können, wenn Sie möchten, aber beachten Sie, dass diese Datei für niemanden zugänglich sein sollte. (Apache ist normalerweise so konfiguriert, dass der Zugriff auf `.ht*`-Dateien verhindert wird).

```apacheconf
aladdin:$apr1$ZjTqBB3f$IF9gdYAGlMrs2fuINjHsz.
user2:$apr1$O04r.y2H$/vEkesPhVInBByJUkXitA/
```

### Zugriffseinschränkung mit Nginx und Basic-Authentifizierung

Für Nginx müssen Sie einen Speicherort angeben, den Sie schützen möchten, und die `auth_basic`-Direktive, die dem Passwort-geschützten Bereich einen Namen gibt.
Die `auth_basic_user_file`-Direktive verweist dann auf eine `.htpasswd`-Datei, die die verschlüsselten Benutzerdaten enthält, genau wie im obigen Apache-Beispiel.

```apacheconf
location /status {
    auth_basic           "Access to the staging site";
    auth_basic_user_file /etc/apache2/.htpasswd;
}
```

### Zugriff mit Anmeldedaten in der URL

Viele Clients lassen Sie auch die Anmeldeaufforderung umgehen, indem Sie eine kodierte URL verwenden, die den Benutzernamen und das Passwort wie folgt enthält:

```plain example-bad
https://username:password@www.example.com/
```

**Die Verwendung dieser URLs ist veraltet**.
In Chrome wird der Teil `username:password@` in URLs [aus Subressourcen-URLs entfernt](https://codereview.chromium.org/2651943002) aus Sicherheitsgründen. In Firefox wird überprüft, ob die Site tatsächlich eine Authentifizierung benötigt, und wenn nicht, warnt Firefox den Benutzer mit einer Aufforderung "Sie sind dabei, sich bei der Site `www.example.com` mit dem Benutzernamen `username` anzumelden, aber die Website erfordert keine Authentifizierung. Dies könnte ein Versuch sein, Sie auszutricksen." Falls die Site tatsächlich eine Authentifizierung benötigt, wird Firefox trotzdem um eine Bestätigung des Benutzers bitten "Sie sind dabei, sich bei der Site `www.example.com` mit dem Benutzernamen `username` anzumelden." bevor die Anmeldedaten an die Site gesendet werden. Beachten Sie, dass Firefox die Anfrage in beiden Fällen ohne Anmeldedaten sendet, bevor die Eingabeaufforderung angezeigt wird, um festzustellen, ob die Site eine Authentifizierung erfordert.

## Siehe auch

- {{HTTPHeader("WWW-Authenticate")}}
- {{HTTPHeader("Authorization")}}
- {{HTTPHeader("Proxy-Authorization")}}
- {{HTTPHeader("Proxy-Authenticate")}}
- {{HTTPStatus("401")}}, {{HTTPStatus("403")}}, {{HTTPStatus("407")}}
