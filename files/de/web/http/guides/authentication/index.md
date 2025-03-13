---
title: HTTP-Authentifizierung
slug: Web/HTTP/Guides/Authentication
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

HTTP bietet einen allgemeinen Rahmen für Zugriffskontrolle und Authentifizierung. Diese Seite ist eine Einführung in den HTTP-Authentifizierungsrahmen und zeigt, wie Sie den Zugriff auf Ihren Server mit dem HTTP-"Basic"-Schema einschränken können.

## Der allgemeine HTTP-Authentifizierungsrahmen

{{RFC("7235")}} definiert den HTTP-Authentifizierungsrahmen, der von einem Server genutzt werden kann, um eine {{Glossary("challenge", "Challenge")}} an eine Client-Anfrage zu senden, und von einem Client, um Authentifizierungsinformationen bereitzustellen.

Der Ablauf von Challenge und Antwort funktioniert so:

1. Der Server antwortet einem Client mit einem {{HTTPStatus("401")}} (Unauthorized)-Antwortstatus und liefert Informationen, wie man sich mit einem {{HTTPHeader("WWW-Authenticate")}}-Antwortheader, der mindestens eine Challenge enthält, autorisieren kann.
2. Ein Client, der sich beim Server authentifizieren möchte, kann dies tun, indem er einen {{HTTPHeader("Authorization")}}-Anfrageheader mit den Anmeldedaten beifügt.
3. In der Regel wird ein Client einem Benutzer ein Passwortfeld anzeigen und dann die Anfrage mit dem korrekten `Authorization`-Header senden.

![Ein Sequenzdiagramm, das HTTP-Nachrichten zwischen einem Client und einem Server-Verlaufs zeigt.](https://mdn.github.io/shared-assets/images/diagrams/http/authentication/basic-auth.svg)

Der allgemeine Nachrichtenfluss, wie oben beschrieben, ist der gleiche für die meisten (wenn nicht alle) [Authentifizierungsschemata](#authentifizierungsschemata). Die tatsächlichen Informationen in den Headern und die Art, wie sie kodiert sind, ändern sich!

> [!WARNING]
> Das im obigen Diagramm verwendete "Basic"-Authentifizierungsschema sendet die Anmeldedaten kodiert, aber nicht verschlüsselt. Dies wäre völlig unsicher, es sei denn, der Austausch erfolgt über eine sichere Verbindung (HTTPS/TLS).

### Proxy-Authentifizierung

Der gleiche Mechanismus von Challenge und Antwort kann für _Proxy-Authentifizierung_ verwendet werden. Da sowohl Ressourcen-Authentifizierung als auch Proxy-Authentifizierung koexistieren können, ist eine andere Menge an Headern und Statuscodes erforderlich. Im Fall von Proxys ist der herausfordernde Statuscode {{HTTPStatus("407")}} (Proxy Authentication Required), der {{HTTPHeader("Proxy-Authenticate")}}-Antwortheader enthält mindestens eine Challenge, die auf den Proxy anwendbar ist, und der {{HTTPHeader("Proxy-Authorization")}}-Anfrageheader wird verwendet, um die Anmeldedaten dem Proxy-Server bereitzustellen.

### Zugriff verweigert

Wenn ein (Proxy-)Server _ungültige_ Anmeldedaten erhält, sollte er mit einem {{HTTPStatus("401")}} `Unauthorized` oder einem {{HTTPStatus("407")}} `Proxy Authentication Required` antworten, und der Benutzer kann eine neue Anfrage senden oder das {{HTTPHeader("Authorization")}}-Header-Feld ersetzen.

Wenn ein (Proxy-)Server gültige Anmeldedaten erhält, die _nicht ausreichen_, um auf eine bestimmte Ressource zuzugreifen, sollte der Server mit dem {{HTTPStatus("403")}}-Statuscode `Forbidden` antworten. Im Gegensatz zu {{HTTPStatus("401")}} `Unauthorized` oder {{HTTPStatus("407")}} `Proxy Authentication Required` ist eine Authentifizierung für diesen Benutzer unmöglich und Browser schlagen keinen neuen Versuch vor.

In allen Fällen kann der Server bevorzugen, einen {{HTTPStatus("404")}}-Statuscode `Not Found` zurückzugeben, um die Existenz der Seite vor einem Benutzer ohne ausreichende Berechtigungen oder nicht korrekt authentifiziert, zu verbergen.

### Authentifizierung von Cross-Origin-Bildern

Ein potenzielles Sicherheitsloch (das mittlerweile in Browsern behoben wurde) war die Authentifizierung von Cross-Site-Bildern. Ab [Firefox 59](/de/docs/Mozilla/Firefox/Releases/59) können Bildressourcen, die von anderen Ursprüngen als dem aktuellen Dokument geladen werden, keine HTTP-Authentifizierungsdialoge mehr auslösen ([Firefox Bug 1423146](https://bugzil.la/1423146)), was verhindert, dass Benutzerdaten gestohlen werden, wenn Angreifer in der Lage wären, ein beliebiges Bild in eine Drittanbieterseite einzubetten.

### Zeichenkodierung der HTTP-Authentifizierung

Browser verwenden `utf-8`-Kodierung für Benutzernamen und Passwörter.

Firefox verwendete früher `ISO-8859-1`, wechselte jedoch zu `utf-8` zur Angleichung an andere Browser und zur Vermeidung potenzieller Probleme, wie im [Firefox Bug 1419658](https://bugzil.la/1419658) beschrieben.

### WWW-Authenticate- und Proxy-Authenticate-Header

Die {{HTTPHeader("WWW-Authenticate")}}- und {{HTTPHeader("Proxy-Authenticate")}}-Antwortheader definieren die Authentifizierungsmethode, die zur Erlangung des Zugangs zu einer Ressource verwendet werden sollte. Sie müssen angeben, welches Authentifizierungsschema genutzt wird, damit der Client, der sich autorisieren möchte, weiß, wie er die Anmeldedaten bereitstellten kann.

Die Syntax für diese Header ist folgende:

```http
WWW-Authenticate: <type> realm=<realm>
Proxy-Authenticate: <type> realm=<realm>
```

Hierbei ist `<type>` das Authentifizierungsschema ("Basic" ist das gebräuchlichste Schema und [wird unten vorgestellt](#basic-authentifizierungsschema)). Der _Realm_ wird verwendet, um den geschützten Bereich zu beschreiben oder um den Schutzbereich anzuzeigen. Dies könnte eine Nachricht wie "Zugang zur Staging-Seite" oder ähnliches sein, damit der Benutzer weiß, zu welchem Bereich er Zugang zu erhalten versucht.

### Authorization- und Proxy-Authorization-Header

Die {{HTTPHeader("Authorization")}}- und {{HTTPHeader("Proxy-Authorization")}}-Anfrageheader enthalten die Anmeldedaten, um einen Benutzer-Agent beim (Proxy-)Server zu authentifizieren. Hierbei wird wieder der `<type>` benötigt, gefolgt von den Anmeldedaten, die kodiert oder verschlüsselt sein können, abhängig vom verwendeten Authentifizierungsschema.

```http
Authorization: <type> <credentials>
Proxy-Authorization: <type> <credentials>
```

## Authentifizierungsschemata

Der allgemeine HTTP-Authentifizierungsrahmen ist die Grundlage für eine Reihe von Authentifizierungsschemata.

IANA pflegt eine [Liste von Authentifizierungsschemata](https://www.iana.org/assignments/http-authschemes/http-authschemes.xhtml), aber es gibt andere Schemata, die von Hostdiensten angeboten werden, wie z.B. Amazon AWS.

Einige gängige Authentifizierungsschemata sind:

- **Basic**
  - : Siehe {{rfc(7617)}}, base64-kodierte Anmeldedaten. Weitere Informationen unten.
- **Bearer**
  - : Siehe {{rfc(6750)}}, Bearer-Tokens zum Zugriff auf OAuth 2.0-geschützte Ressourcen
- **Digest**
  - : Siehe {{rfc(7616)}}. Firefox 93 und später unterstützen den SHA-256-Algorithmus. Frühere Versionen unterstützen nur MD5-Hashing (nicht empfohlen).
- **HOBA**
  - : Siehe {{rfc(7486)}}, Abschnitt 3, **H**TTP **O**rigin-**B**ound **A**uthentication, signaturbasierte Authentifizierung
- **Mutual**
  - : Siehe {{rfc(8120)}}
- **Negotiate** / **NTLM**
  - : Siehe [RFC4599](https://datatracker.ietf.org/doc/html/rfc4559)
- **VAPID**
  - : Siehe {{rfc(8292)}}
- **SCRAM**
  - : Siehe {{rfc(7804)}}
- **AWS4-HMAC-SHA256**
  - : Siehe [AWS-Dokumentation](https://docs.aws.amazon.com/AmazonS3/latest/API/sigv4-auth-using-authorization-header.html). Dieses Schema wird für die AWS3-Server-Authentifizierung verwendet.

Schemata können sich in ihrer Sicherheitsstärke und ihrer Verfügbarkeit in Client- oder Server-Software unterscheiden.

Das "Basic"-Authentifizierungsschema bietet eine sehr geringe Sicherheit, ist jedoch weit verbreitet und einfach einzurichten. Es wird im Folgenden näher erläutert.

## Basic-Authentifizierungsschema

Das "Basic" HTTP-Authentifizierungsschema ist in {{rfc(7617)}} definiert und überträgt Anmeldedaten als Benutzer-ID/Passwort paarweise, kodiert mit base64.

### Sicherheit der Basic-Authentifizierung

Da die Benutzer-ID und das Passwort über das Netzwerk im Klartext übermittelt werden (sie sind base64-kodiert, aber base64 ist eine umkehrbare Kodierung), ist das Basic-Authentifizierungsschema **nicht sicher**. HTTPS/TLS sollte mit Basic-Authentifizierung verwendet werden. Ohne diese zusätzlichen Sicherheitsvorkehrungen sollte die Basic-Authentifizierung nicht verwendet werden, um sensible oder wertvolle Informationen zu schützen.

### Zugangsbeschränkung mit Apache und Basic-Authentifizierung

Um ein Verzeichnis auf einem Apache-Server mit einem Passwort zu schützen, benötigen Sie eine `.htaccess`- und eine `.htpasswd`-Datei.

Die `.htaccess`-Datei sieht typischerweise so aus:

```apacheconf
AuthType Basic
AuthName "Access to the staging site"
AuthUserFile /path/to/.htpasswd
Require valid-user
```

Die `.htaccess`-Datei verweist auf eine `.htpasswd`-Datei, in der jede Zeile aus einem Benutzernamen und einem durch einen Doppelpunkt (`:`) getrennten Passwort besteht. Sie können die tatsächlichen Passwörter nicht einsehen, da sie [gehasht](https://httpd.apache.org/docs/2.4/misc/password_encryptions.html) sind (unter Verwendung von MD5-basiertem Hashing, in diesem Fall). Beachten Sie, dass Sie die `.htpasswd`-Datei anders benennen können, wenn Sie möchten, aber denken Sie daran, dass diese Datei für niemanden zugänglich sein sollte. (Apache ist normalerweise so konfiguriert, dass der Zugriff auf `.ht*`-Dateien verhindert wird).

```apacheconf
aladdin:$apr1$ZjTqBB3f$IF9gdYAGlMrs2fuINjHsz.
user2:$apr1$O04r.y2H$/vEkesPhVInBByJUkXitA/
```

### Zugangsbeschränkung mit Nginx und Basic-Authentifizierung

Für Nginx müssen Sie einen Standort angeben, den Sie schützen möchten, und die `auth_basic`-Directive, die den Namen für den passwortgeschützten Bereich angibt. Die `auth_basic_user_file`-Directive verweist dann auf eine `.htpasswd`-Datei, die die verschlüsselten Benutzerdaten enthält, genau wie im obigen Apache-Beispiel.

```apacheconf
location /status {
    auth_basic           "Access to the staging site";
    auth_basic_user_file /etc/apache2/.htpasswd;
}
```

### Zugriff mit Anmeldedaten in der URL

Viele Clients lassen Sie auch das Anmeldefeld umgehen, indem Sie eine kodierte URL verwenden, die den Benutzernamen und das Passwort auf diese Weise enthält:

```plain example-bad
https://username:password@www.example.com/
```

**Die Verwendung dieser URLs ist veraltet**. In Chrome wird der `username:password@`-Teil aus URLs [aus Subressourcen-URLs entfernt](https://codereview.chromium.org/2651943002) aus Sicherheitsgründen. In Firefox wird überprüft, ob die Seite tatsächlich eine Authentifizierung erfordert, und falls nicht, warnt Firefox den Benutzer mit einer Eingabeaufforderung "Sie sind dabei, sich auf der Seite `www.example.com` mit dem Benutzernamen `username` anzumelden, aber die Webseite verlangt keine Authentifizierung. Dies könnte ein Versuch sein, Sie zu täuschen." Sofern die Seite Authentifizierung erfordert, wird Firefox dennoch um eine Bestätigung des Benutzers bitten "Sie sind dabei, sich auf der Seite `www.example.com` mit dem Benutzernamen `username` anzumelden.", bevor die Anmeldedaten an die Seite gesendet werden. Beachten Sie, dass Firefox in beiden Fällen die Anfrage ohne Anmeldedaten sendet, bevor die Eingabeaufforderung angezeigt wird, um festzustellen, ob die Seite Authentifizierung erfordert.

## Siehe auch

- {{HTTPHeader("WWW-Authenticate")}}
- {{HTTPHeader("Authorization")}}
- {{HTTPHeader("Proxy-Authorization")}}
- {{HTTPHeader("Proxy-Authenticate")}}
- {{HTTPStatus("401")}}, {{HTTPStatus("403")}}, {{HTTPStatus("407")}}
