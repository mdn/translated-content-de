---
title: HTTP-Authentifizierung
slug: Web/HTTP/Guides/Authentication
l10n:
  sourceCommit: 6030ef1aadf967b80e2c79c3d3463cccc8ea0c95
---

HTTP bietet einen allgemeinen Rahmen für Zugangskontrolle und Authentifizierung. Diese Seite ist eine Einführung in das HTTP-Framework für Authentifizierung und zeigt, wie Sie den Zugriff auf Ihren Server mithilfe des HTTP-"Basic"-Schemas einschränken können.

## Das allgemeine HTTP-Authentifizierungsframework

{{RFC("7235")}} definiert das HTTP-Authentifizierungsframework, das von einem Server verwendet werden kann, um eine {{Glossary("challenge", "Challenge")}} an eine Client-Anfrage zu senden und von einem Client, um Authentifizierungsinformationen bereitzustellen.

Der Ablauf von Challenge und Antwort funktioniert folgendermaßen:

1. Der Server antwortet einem Client mit einem {{HTTPStatus("401")}} (Unauthorized) Antwortstatus und liefert Informationen, wie man mit einem {{HTTPHeader("WWW-Authenticate")}} Antwortheader, der mindestens eine Challenge enthält, autorisiert werden kann.
2. Ein Client, der sich beim Server authentifizieren möchte, kann dies tun, indem er einen {{HTTPHeader("Authorization")}} Anforderungsheader mit den Anmeldedaten einschließt.
3. In der Regel wird dem Benutzer eine Eingabeaufforderung für ein Passwort angezeigt, und der Client wird die Anfrage mit dem korrekten `Authorization`-Header ausführen.

![Ein Sequenzdiagramm, das HTTP-Nachrichten zwischen einem Client und einer Server-Lebenslinie zeigt.](https://mdn.github.io/shared-assets/images/diagrams/http/authentication/basic-auth.svg)

Der oben beschriebene allgemeine Nachrichtenfluss ist derselbe für die meisten (wenn nicht alle) [Authentifizierungsschemata](#authentifizierungsschemata). Die eigentlichen Informationen in den Headers und die Art und Weise, wie sie codiert sind, ändern sich jedoch!

> [!WARNING]
> Das oben im Diagramm verwendete "Basic"-Authentifizierungsschema sendet die Anmeldedaten codiert, aber nicht verschlüsselt. Dies wäre völlig unsicher, es sei denn, der Austausch erfolgt über eine sichere Verbindung (HTTPS/TLS).

### Proxy-Authentifizierung

Der gleiche Mechanismus von Challenge und Antwort kann für die _Proxy-Authentifizierung_ verwendet werden. Da sowohl Ressourcen-Authentifizierung als auch Proxy-Authentifizierung nebeneinander bestehen können, wird ein anderes Set von Headers und Status-Codes benötigt. Im Fall von Proxies ist der Herausforderungs-Statuscode {{HTTPStatus("407")}} (Proxy Authentication Required), der {{HTTPHeader("Proxy-Authenticate")}} Antwortheader enthält mindestens eine auf den Proxy anwendbare Challenge, und der {{HTTPHeader("Proxy-Authorization")}} Anforderungsheader wird verwendet, um die Anmeldedaten dem Proxy-Server bereitzustellen.

### Zugriff verweigert

Erhält ein (Proxy-)Server _ungültige_ Anmeldedaten, sollte er mit einem {{HTTPStatus("401")}} `Unauthorized` oder einem {{HTTPStatus("407")}} `Proxy Authentication Required` antworten, und der Benutzer kann eine neue Anfrage senden oder das {{HTTPHeader("Authorization")}}-Header-Feld ersetzen.

Erhält ein (Proxy-)Server gültige Anmeldedaten, die _unzureichend_ sind, um auf eine bestimmte Ressource zuzugreifen, sollte der Server mit dem {{HTTPStatus("403")}} `Forbidden` Statuscode reagieren. Im Gegensatz zu {{HTTPStatus("401")}} `Unauthorized` oder {{HTTPStatus("407")}} `Proxy Authentication Required` ist eine Authentifizierung für diesen Benutzer unmöglich, und Browser werden keinen neuen Versuch vorschlagen.

In allen Fällen kann der Server es vorziehen, einen {{HTTPStatus("404")}} `Not Found` Statuscode zurückzugeben, um die Existenz der Seite einem Benutzer ohne ausreichende Berechtigungen oder nicht korrekt authentifiziert zu verbergen.

### Authentifizierung von Cross-Origin-Bildern

Ein potenzielles Sicherheitsproblem (das inzwischen in Browsern behoben wurde) war die Authentifizierung von Cross-Site-Bildern. Ab [Firefox 59](/de/docs/Mozilla/Firefox/Releases/59) können Bildressourcen, die aus anderen Ursprüngen als dem aktuellen Dokument geladen werden, keine HTTP-Authentifizierungsdialoge mehr auslösen ([Firefox-Bug 1423146](https://bugzil.la/1423146)), wodurch verhindert wird, dass Benutzeranmeldeinformationen gestohlen werden, wenn Angreifer in der Lage waren, ein beliebiges Bild in eine Drittanbieter-Seite einzubetten.

### Zeichencodierung der HTTP-Authentifizierung

Browser verwenden `utf-8`-Codierung für Benutzernamen und Passwörter.

Firefox verwendete früher `ISO-8859-1`, wechselte jedoch zu `utf-8`, um mit anderen Browsern gleichzuziehen und mögliche Probleme zu vermeiden, wie in [Firefox-Bug 1419658](https://bugzil.la/1419658) beschrieben.

### WWW-Authenticate und Proxy-Authenticate Headers

Die {{HTTPHeader("WWW-Authenticate")}} und {{HTTPHeader("Proxy-Authenticate")}} Antwortheaders definieren die Authentifizierungsmethode, die verwendet werden sollte, um auf eine Ressource zuzugreifen. Sie müssen angeben, welches Authentifizierungsschema verwendet wird, damit der Client, der sich autorisieren möchte, weiß, wie er die Anmeldedaten bereitstellen muss.

Die Syntax für diese Headers ist wie folgt:

```http
WWW-Authenticate: <type> realm=<realm>
Proxy-Authenticate: <type> realm=<realm>
```

Hierbei ist `<type>` das Authentifizierungsschema ("Basic" ist das häufigste Schema und [wird unten eingeführt](#basic-authentifizierungsschema)). Der _realm_ wird verwendet, um den geschützten Bereich zu beschreiben oder den Schutzumfang anzugeben. Dies könnte eine Nachricht wie "Zugang zur Staging-Site" oder Ähnliches sein, sodass der Benutzer weiß, zu welchem Bereich er Zugang erhalten möchte.

### Authorization und Proxy-Authorization Headers

Die {{HTTPHeader("Authorization")}} und {{HTTPHeader("Proxy-Authorization")}} Anforderungsheaders enthalten die Anmeldedaten, um einen User Agent bei einem (Proxy-)Server zu authentifizieren. Hier wird `<type>` erneut benötigt, gefolgt von den Anmeldedaten, die je nach verwendetem Authentifizierungsschema codiert oder verschlüsselt sein können.

```http
Authorization: <type> <credentials>
Proxy-Authorization: <type> <credentials>
```

## Authentifizierungsschemata

Das allgemeine HTTP-Authentifizierungsframework bildet die Grundlage für eine Reihe von Authentifizierungsschemata.

IANA führt eine [Liste von Authentifizierungsschemata](https://www.iana.org/assignments/http-authschemes/http-authschemes.xhtml), aber es gibt andere von Hostdiensten angebotene Schemata, wie z.B. Amazon AWS.

Einige häufige Authentifizierungsschemata umfassen:

- **Basic**
  - : Siehe {{rfc(7617)}}, base64-codierte Anmeldedaten. Weitere Informationen unten.
- **Bearer**
  - : Siehe {{rfc(6750)}}, Bearer-Tokens für den Zugriff auf durch OAuth 2.0 geschützte Ressourcen
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
  - : Siehe [AWS-Dokumentation](https://docs.aws.amazon.com/AmazonS3/latest/developerguide/sigv4-auth-using-authorization-header.html). Dieses Schema wird für die AWS3-Serverauthentifizierung verwendet.

Schemata können sich in Sicherheitsstärke und Verfügbarkeit in Client- oder Server-Software unterscheiden.

Das "Basic"-Authentifizierungsschema bietet sehr geringe Sicherheit, ist jedoch weit verbreitet und einfach einzurichten. Es wird im Folgenden ausführlicher behandelt.

## Basic-Authentifizierungsschema

Das "Basic" HTTP-Authentifizierungsschema ist in {{rfc(7617)}} definiert, welches Anmeldedaten als Benutzer-ID/Passwort-Paare überträgt, die mit base64 codiert sind.

### Sicherheit der Basic-Authentifizierung

Da die Benutzer-ID und das Passwort als Klartext über das Netzwerk übertragen werden (sie sind base64-codiert, aber base64 ist eine umkehrbare Codierung), ist das Basic-Authentifizierungsschema nicht sicher. HTTPS/TLS sollte mit Basic-Authentifizierung verwendet werden, um die Abfangung von Anmeldedaten zu verhindern.

Darüber hinaus sind Seiten, die HTTP Basic Auth verwenden, besonders anfällig für {{Glossary("CSRF", "Cross-Site Request Forgery (CSRF)")}}-Angriffe, da die Benutzeranmeldedaten in allen Anforderungen unabhängig vom Ursprung gesendet werden (dies unterscheidet sich von cookie-basierten Anmeldemechanismen, da Cookies in Anfragen von Drittseiten häufig blockiert werden). Seiten sollten immer POST-Anfragen verwenden, um Daten zu ändern, und [CSRF-Tokens](/de/docs/Web/Security/Attacks/CSRF) einbeziehen.

Ohne diese Sicherheitsverbesserungen sollte die Basic-Authentifizierung nicht zum Schutz sensibler oder wertvoller Informationen verwendet werden.

### Zugriffseinschränkung mit Apache und Basic-Authentifizierung

Um ein Verzeichnis auf einem Apache-Server durch ein Passwort zu schützen, benötigen Sie eine `.htaccess`- und eine `.htpasswd`-Datei.

Die `.htaccess`-Datei sieht typischerweise so aus:

```apacheconf
AuthType Basic
AuthName "Access to the staging site"
AuthUserFile /path/to/.htpasswd
Require valid-user
```

Die `.htaccess`-Datei verweist auf eine `.htpasswd`-Datei, in der jede Zeile aus einem Benutzernamen und einem durch einen Doppelpunkt (`:`) getrennten Passwort besteht. Sie können die tatsächlichen Passwörter nicht sehen, da sie [gehasht](https://httpd.apache.org/docs/2.4/misc/password_encryptions.html) sind (in diesem Fall wird MD5-basiertes Hashing verwendet). Beachten Sie, dass Sie Ihre `.htpasswd`-Datei anders benennen können, wenn Sie möchten, aber beachten Sie, dass diese Datei für niemanden zugänglich sein sollte. (Apache ist normalerweise so konfiguriert, dass der Zugriff auf `.ht*`-Dateien verhindert wird).

```apacheconf
aladdin:$apr1$ZjTqBB3f$IF9gdYAGlMrs2fuINjHsz.
user2:$apr1$O04r.y2H$/vEkesPhVInBByJUkXitA/
```

### Zugriffseinschränkung mit Nginx und Basic-Authentifizierung

Bei Nginx müssen Sie einen Ort angeben, den Sie schützen möchten, und die `auth_basic`-Anweisung, die den Namen des passwortgeschützten Bereichs angibt. Die `auth_basic_user_file`-Anweisung zeigt dann auf eine `.htpasswd`-Datei, die die verschlüsselten Benutzeranmeldedaten enthält, genau wie im vorherigen Apache-Beispiel.

```apacheconf
location /status {
    auth_basic           "Access to the staging site";
    auth_basic_user_file /etc/apache2/.htpasswd;
}
```

### Zugriff mit Anmeldedaten in der URL

Historisch gesehen erlaubten es einige Seiten, sich mit einer codierten URL einzuloggen, die den Benutzernamen und das Passwort enthält, wie gezeigt:

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
- [HTTP-Sicherheitspraktiken](/de/docs/Web/Security)
