---
title: HTTP-Authentifizierung
slug: Web/HTTP/Authentication
l10n:
  sourceCommit: ef46a4ac6bfec3e33c9209244e7cb1a9206165d6
---

{{HTTPSidebar}}

HTTP bietet ein allgemeines Rahmenwerk für Zugriffskontrolle und Authentifizierung.
Diese Seite ist eine Einführung in das HTTP-Authentifizierungsrahmenwerk und zeigt, wie Sie den Zugriff auf Ihren Server mithilfe des HTTP-"Basic"-Schemas einschränken können.

## Das allgemeine HTTP-Authentifizierungsrahmenwerk

{{RFC("7235")}} definiert das HTTP-Authentifizierungsrahmenwerk, welches von einem Server genutzt werden kann, um eine [Challenge](/de/docs/Glossary/challenge) an eine Client-Anfrage zu senden und vom Client zur Bereitstellung von Authentifizierungsinformationen.

Der Ablauf von Challenge und Antwort funktioniert folgendermaßen:

1. Der Server antwortet dem Client mit einem {{HTTPStatus("401")}} (Unauthorized) Antwortstatus und gibt Informationen darüber, wie man sich mit einem {{HTTPHeader("WWW-Authenticate")}} Antwortheader, der mindestens eine Challenge enthält, autorisieren kann.
2. Ein Client, der sich beim Server authentifizieren möchte, kann dies tun, indem er einen {{HTTPHeader("Authorization")}} Anfrageheader mit den Anmeldedaten einschließt.
3. In der Regel wird der Client dem Benutzer eine Passwortabfrage präsentieren und dann die Anfrage mit dem korrekten `Authorization`-Header ausführen.

![Ein Sequenzdiagramm, das HTTP-Nachrichten zwischen einem Client und einer Server-Lebenslinie darstellt.](https://mdn.github.io/shared-assets/images/diagrams/http/authentication/basic-auth.svg)

Der allgemeine Nachrichtenaustausch oben ist bei den meisten (wenn nicht allen) [Authentifizierungsschemata](#authentifizierungsschemata) gleich.
Die tatsächlichen Informationen in den Headers und die Art und Weise, wie sie kodiert sind, variieren jedoch!

> [!WARNING]
> Das im obigen Diagramm verwendete "Basic"-Authentifizierungsschema sendet die Anmeldedaten kodiert, aber nicht verschlüsselt.
> Dies wäre völlig unsicher, es sei denn, der Austausch erfolgt über eine sichere Verbindung (HTTPS/TLS).

### Proxy-Authentifizierung

Der gleiche Challenge- und Antwortmechanismus kann auch für die _Proxy-Authentifizierung_ verwendet werden.
Da sowohl Ressourcen- als auch Proxy-Authentifizierung koexistieren können, wird ein anderer Satz von Headern und Statuscodes benötigt. Im Falle von Proxys ist der herausfordernde Statuscode {{HTTPStatus("407")}} (Proxy Authentication Required), der {{HTTPHeader("Proxy-Authenticate")}} Antwortheader enthält mindestens eine auf den Proxy anwendbare Herausforderung, und der {{HTTPHeader("Proxy-Authorization")}} Anfrageheader wird verwendet, um die Anmeldedaten an den Proxy-Server zu übermitteln.

### Zugriff verweigert

Wenn ein (Proxy-)Server _ungültige_ Anmeldedaten erhält, sollte er mit einem {{HTTPStatus("401")}} `Unauthorized` oder einem {{HTTPStatus("407")}} `Proxy Authentication Required` antworten, und der Benutzer kann eine neue Anfrage senden oder das {{HTTPHeader("Authorization")}} Header-Feld ersetzen.

Erhält ein (Proxy-)Server gültige Anmeldeinformationen, die _unangemessen_ sind, um auf eine bestimmte Ressource zuzugreifen, sollte der Server mit dem Statuscode {{HTTPStatus("403")}} `Forbidden` antworten. Im Gegensatz zu {{HTTPStatus("401")}} `Unauthorized` oder {{HTTPStatus("407")}} `Proxy Authentication Required` ist die Authentifizierung für diesen Benutzer unmöglich, und Browser werden keinen neuen Versuch vorschlagen.

In allen Fällen kann der Server vorzugsweise einen {{HTTPStatus("404")}} `Not Found` Statuscode zurückgeben, um die Existenz der Seite vor einem Benutzer ohne ausreichende Berechtigungen oder nicht korrekt authentifiziert zu verbergen.

### Authentifizierung von CORS-Images

Ein potenzielles Sicherheitsloch (das inzwischen in Browsern behoben wurde) war die Authentifizierung von CORS-Images.
Ab [Firefox 59](/de/docs/Mozilla/Firefox/Releases/59) können Bildressourcen, die von anderen Ursprüngen als das aktuelle Dokument geladen werden, keine HTTP-Authentifizierungsdialoge mehr auslösen ([Firefox-Bug 1423146](https://bugzil.la/1423146)), um zu verhindern, dass Benutzerdaten gestohlen werden, falls Angreifer ein beliebiges Bild in eine Drittanbieter-Seite einbetten könnten.

### Zeichencodierung der HTTP-Authentifizierung

Browser verwenden die `utf-8`-Codierung für Benutzernamen und Passwörter.

Firefox benutzte früher `ISO-8859-1`, änderte aber auf `utf-8` zur Angleichung an andere Browser und um potenzielle Probleme zu vermeiden, wie in [Firefox-Bug 1419658](https://bugzil.la/1419658) beschrieben.

### WWW-Authenticate und Proxy-Authenticate Headers

Die {{HTTPHeader("WWW-Authenticate")}} und {{HTTPHeader("Proxy-Authenticate")}} Antwortheaders definieren die Authentifizierungsmethode, die verwendet werden sollte, um Zugang zu einer Ressource zu erhalten. Sie müssen das verwendete Authentifizierungsschema spezifizieren, sodass der Client, der sich autorisieren möchte, weiß, wie die Anmeldeinformationen bereitgestellt werden müssen.

Die Syntax dieser Header ist die folgende:

```http
WWW-Authenticate: <type> realm=<realm>
Proxy-Authenticate: <type> realm=<realm>
```

Hierbei ist `<type>` das Authentifizierungsschema ("Basic" ist das häufigste Schema und [unten eingeführt](#basic-authentifizierungsschema)). Der _realm_ wird verwendet, um den geschützten Bereich zu beschreiben oder den Schutzbereich anzuzeigen. Dies könnte eine Nachricht wie "Zugang zur Staging-Seite" oder ähnlich sein, damit der Benutzer weiß, auf welchen Bereich er zugreifen möchte.

### Authorization und Proxy-Authorization Headers

Die {{HTTPHeader("Authorization")}} und {{HTTPHeader("Proxy-Authorization")}} Anfrageheaders enthalten die Anmeldedaten, um einen Benutzer-Agenten bei einem (Proxy-)Server zu authentifizieren. Hierbei ist wieder `<type>` erforderlich, gefolgt von den Anmeldeinformationen, die je nach verwendetem Authentifizierungsschema kodiert oder verschlüsselt sein können.

```http
Authorization: <type> <credentials>
Proxy-Authorization: <type> <credentials>
```

## Authentifizierungsschemata

Das allgemeine HTTP-Authentifizierungsrahmenwerk ist die Grundlage für eine Vielzahl von Authentifizierungsschemata.

IANA pflegt eine [Liste der Authentifizierungsschemata](https://www.iana.org/assignments/http-authschemes/http-authschemes.xhtml), aber es gibt andere Schemata, die von Hostdiensten angeboten werden, z.B. Amazon AWS.

Einige gängige Authentifizierungsschemata umfassen:

- **Basic**
  - : Siehe {{rfc(7617)}}, base64-kodierte Anmeldedaten. Weitere Informationen unten.
- **Bearer**
  - : Siehe {{rfc(6750)}}, Token für den Zugriff auf OAuth 2.0-geschützte Ressourcen
- **Digest**
  - : Siehe {{rfc(7616)}}. Firefox 93 und später unterstützen den SHA-256-Algorithmus. Frühere Versionen unterstützen nur MD5-Hashing (nicht empfohlen).
- **HOBA**
  - : Siehe {{rfc(7486)}}, Abschnitt 3, **H**TTP **O**rigin-**B**ound **A**uthentication, signaturbasierte
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

Die Schemata können sich in der Sicherheitsstärke und ihrer Verfügbarkeit in Client- oder Server-Software unterscheiden.

Das "Basic"-Authentifizierungsschema bietet sehr geringe Sicherheit, ist jedoch weit verbreitet und einfach einzurichten.
Es wird weiter unten ausführlicher erläutert.

## Basic-Authentifizierungsschema

Das HTTP-"Basic"-Authentifizierungsschema ist in {{rfc(7617)}} definiert, das Anmeldedaten als Benutzer-ID/Passwort-Paare überträgt, die mithilfe von base64 kodiert werden.

### Sicherheit der Basic-Authentifizierung

Da die Benutzer-ID und das Passwort im Klartext über das Netzwerk übertragen werden (es ist base64-kodiert, aber base64 ist eine umkehrbare Kodierung), ist das Basic-Authentifizierungsschema **nicht sicher**. HTTPS/TLS sollte bei der Basic-Authentifizierung verwendet werden. Ohne diese zusätzlichen Sicherheitsverbesserungen sollte die Basic-Authentifizierung nicht zum Schutz sensibler oder wertvoller Informationen verwendet werden.

### Zugriffsbeschränkung mit Apache und Basic-Authentifizierung

Um ein Verzeichnis auf einem Apache-Server mit einem Passwort zu schützen, benötigen Sie eine `.htaccess`- und eine `.htpasswd`-Datei.

Die `.htaccess`-Datei sieht in der Regel so aus:

```apacheconf
AuthType Basic
AuthName "Access to the staging site"
AuthUserFile /path/to/.htpasswd
Require valid-user
```

Die `.htpasswd`-Datei enthält in jeder Zeile einen Benutzernamen und ein Passwort, getrennt durch einen Doppelpunkt (`:`). Sie können die tatsächlichen Passwörter nicht sehen, da sie [gehasht](https://httpd.apache.org/docs/2.4/misc/password_encryptions.html) sind (in diesem Fall unter Verwendung von MD5-basiertem Hashing). Beachten Sie, dass Sie Ihre `.htpasswd`-Datei anders benennen können, wenn Sie möchten, aber bedenken Sie, dass diese Datei für niemanden zugänglich sein sollte. (Apache ist normalerweise so konfiguriert, dass der Zugriff auf `.ht*`-Dateien verhindert wird).

```apacheconf
aladdin:$apr1$ZjTqBB3f$IF9gdYAGlMrs2fuINjHsz.
user2:$apr1$O04r.y2H$/vEkesPhVInBByJUkXitA/
```

### Zugriffsbeschränkung mit Nginx und Basic-Authentifizierung

Für Nginx müssen Sie einen Standort angeben, den Sie schützen möchten, und die `auth_basic`-Direktive, die den Namen des passwortgeschützten Bereichs angibt.
Die `auth_basic_user_file`-Direktive zeigt dann auf eine `.htpasswd`-Datei, die die verschlüsselten Benutzeranmeldedaten enthält, genau wie im Apache-Beispiel oben.

```apacheconf
location /status {
    auth_basic           "Access to the staging site";
    auth_basic_user_file /etc/apache2/.htpasswd;
}
```

### Zugriff mit Anmeldedaten in der URL

Viele Clients ermöglichen es Ihnen auch, das Anmelde-Prompt zu vermeiden, indem Sie eine kodierte URL verwenden, die den Benutzernamen und das Passwort enthält, wie folgt:

```plain example-bad
https://username:password@www.example.com/
```

**Die Verwendung dieser URLs ist veraltet.**
In Chrome wird der `username:password@` Teil in URLs [aus Subressourcen-URLs entfernt](https://codereview.chromium.org/2651943002) aus Sicherheitsgründen. In Firefox wird überprüft, ob die Seite tatsächlich eine Authentifizierung erfordert, und falls nicht, wird Firefox den Benutzer mit einem Prompt warnen: "Sie sind dabei, sich bei der Seite `www.example.com` mit dem Benutzernamen `username` anzumelden, aber die Website erfordert keine Authentifizierung. Dies könnte ein Versuch sein, Sie zu täuschen." Falls die Seite tatsächlich eine Authentifizierung erfordert, wird Firefox dennoch um die Bestätigung des Benutzers bitten: "Sie sind dabei, sich bei der Seite `www.example.com` mit dem Benutzernamen `username` anzumelden," bevor die Anmeldedaten an die Seite gesendet werden. Beachten Sie, dass Firefox in beiden Fällen die Anfrage ohne Anmeldedaten sendet, bevor der Prompt angezeigt wird, um festzustellen, ob die Seite eine Authentifizierung erfordert.

## Siehe auch

- {{HTTPHeader("WWW-Authenticate")}}
- {{HTTPHeader("Authorization")}}
- {{HTTPHeader("Proxy-Authorization")}}
- {{HTTPHeader("Proxy-Authenticate")}}
- {{HTTPStatus("401")}}, {{HTTPStatus("403")}}, {{HTTPStatus("407")}}
