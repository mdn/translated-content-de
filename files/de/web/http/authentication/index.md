---
title: HTTP-Authentifizierung
slug: Web/HTTP/Authentication
l10n:
  sourceCommit: ef46a4ac6bfec3e33c9209244e7cb1a9206165d6
---

{{HTTPSidebar}}

HTTP bietet ein allgemeines Rahmenwerk für Zugriffskontrolle und Authentifizierung.
Diese Seite ist eine Einführung in das HTTP-Rahmenwerk für Authentifizierung und zeigt, wie Sie den Zugriff auf Ihren Server mit dem HTTP-„Basic“-Schema beschränken können.

## Das allgemeine HTTP-Authentifizierungsrahmenwerk

{{RFC("7235")}} definiert das HTTP-Authentifizierungsrahmenwerk, das von einem Server verwendet werden kann, um eine Clientanfrage zu {{glossary("challenge")}} und von einem Client, um Authentifizierungsinformationen bereitzustellen.

Der Herausforderung und Antwort-Fluss funktioniert folgendermaßen:

1. Der Server antwortet einem Client mit einem {{HTTPStatus("401")}} (Unauthorized) Antwortstatus und gibt Informationen darüber, wie die Authentifizierung erfolgen soll, mit einem {{HTTPHeader("WWW-Authenticate")}} Antwortheader, der mindestens eine Herausforderung enthält.
2. Ein Client, der sich gegenüber dem Server authentifizieren möchte, kann dies tun, indem er einen {{HTTPHeader("Authorization")}} Anfrageheader mit den Anmeldedaten einfügt.
3. In der Regel wird ein Client ein Passwortfenster dem Nutzer präsentieren und dann die Anfrage mit dem korrekten `Authorization`-Header stellen.

![Ein Sequenzdiagramm, das HTTP-Nachrichten zwischen einem Client und einem Server-Lebenslaufdiagramm zeigt.](https://mdn.github.io/shared-assets/images/diagrams/http/authentication/basic-auth.svg)

Der allgemeine Nachrichtenfluss oben ist bei den meisten (wenn nicht allen) [Authentifizierungsschemata](#authentifizierungsschemata) gleich.
Die tatsächlichen Informationen in den Headern und die Art und Weise, wie sie kodiert sind, ändern sich jedoch!

> [!WARNING]
> Das im obigen Diagramm verwendete "Basic"-Authentifizierungsschema sendet die Anmeldedaten kodiert, aber nicht verschlüsselt.
> Dies wäre völlig unsicher, es sei denn, der Austausch erfolgt über eine sichere Verbindung (HTTPS/TLS).

### Proxy-Authentifizierung

Der gleiche Herausforderung und Antwort-Mechanismus kann für _Proxy-Authentifizierung_ verwendet werden.
Da sowohl Ressourcen- als auch Proxy-Authentifizierung koexistieren können, wird ein anderes Set von Headern und Statuscodes benötigt. Im Falle von Proxies ist der herausfordernde Statuscode {{HTTPStatus("407")}} (Proxy Authentication Required), der {{HTTPHeader("Proxy-Authenticate")}} Antwortheader enthält mindestens eine Herausforderung, die auf den Proxy anwendbar ist, und der {{HTTPHeader("Proxy-Authorization")}} Anfrageheader wird verwendet, um die Anmeldedaten an den Proxy-Server zu übermitteln.

### Zugriff verweigert

Wenn ein (Proxy-)Server _ungültige_ Anmeldedaten erhält, sollte er mit einem {{HTTPStatus("401")}} `Unauthorized` oder einem {{HTTPStatus("407")}} `Proxy Authentication Required` antworten, und der Nutzer kann eine neue Anfrage senden oder das {{HTTPHeader("Authorization")}} Header-Feld ersetzen.

Wenn ein (Proxy-)Server gültige Anmeldedaten erhält, die _unzureichend_ sind, um auf eine bestimmte Ressource zuzugreifen, sollte der Server mit dem {{HTTPStatus("403")}} `Forbidden` Statuscode antworten. Im Gegensatz zu {{HTTPStatus("401")}} `Unauthorized` oder {{HTTPStatus("407")}} `Proxy Authentication Required` ist die Authentifizierung für diesen Nutzer unmöglich, und Browser werden keinen neuen Versuch vorschlagen.

In allen Fällen kann der Server es vorziehen, einen {{HTTPStatus("404")}} `Not Found` Statuscode zurückzugeben, um die Existenz der Seite für einen Benutzer ohne ausreichende Berechtigungen oder nicht korrekt authentifiziert zu verbergen.

### Authentifizierung von plattformübergreifenden Bildern

Eine potenzielle Sicherheitslücke (die inzwischen in Browsern behoben wurde) war die Authentifizierung von plattformübergreifenden Bildern.
Ab [Firefox 59](/de/docs/Mozilla/Firefox/Releases/59) können Bildressourcen, die von anderen Ursprüngen als dem aktuellen Dokument geladen werden, keine HTTP-Authentifizierungsdialoge mehr auslösen ([Firefox-Bug 1423146](https://bugzil.la/1423146)) und verhindern somit, dass Nutzeranmeldedaten gestohlen werden könnten, wenn Angreifer in der Lage wären, ein beliebiges Bild in eine Drittanbieter-Seite einzubetten.

### Zeichenkodierung der HTTP-Authentifizierung

Browser verwenden `utf-8` Kodierung für Benutzernamen und Passwörter.

Firefox hat früher `ISO-8859-1` verwendet, ist jedoch zu `utf-8` gewechselt, um Parität mit anderen Browsern zu erreichen und potenzielle Probleme zu vermeiden, wie in [Firefox-Bug 1419658](https://bugzil.la/1419658) beschrieben.

### WWW-Authenticate und Proxy-Authenticate Header

Die {{HTTPHeader("WWW-Authenticate")}} und {{HTTPHeader("Proxy-Authenticate")}} Antwortheader definieren die Authentifizierungsmethode, die verwendet werden sollte, um Zugang zu einer Ressource zu erhalten. Sie müssen angeben, welches Authentifizierungsschema verwendet wird, damit der Client, der autorisieren möchte, weiß, wie die Anmeldedaten bereitgestellt werden sollen.

Die Syntax für diese Header ist folgende:

```http
WWW-Authenticate: <type> realm=<realm>
Proxy-Authenticate: <type> realm=<realm>
```

Hierbei ist `<type>` das Authentifizierungsschema (das häufigste Schema ist "Basic" und wird [unten eingeführt](#basis-authentifizierungsschema)). Der _realm_ wird verwendet, um den geschützten Bereich zu beschreiben oder den Schutzumfang anzugeben. Dies könnte eine Nachricht wie "Zugang zur Staging-Seite" oder Ähnliches sein, damit der Nutzer weiß, in welchen Bereich er zuzugreifen versucht.

### Authorization und Proxy-Authorization Header

Die {{HTTPHeader("Authorization")}} und {{HTTPHeader("Proxy-Authorization")}} Anfrageheader enthalten die Anmeldedaten, um einen Nutzeragenten gegenüber einem (Proxy-)Server zu authentifizieren. Hier ist das `<type>` erneut erforderlich, gefolgt von den Anmeldedaten, die je nach verwendetem Authentifizierungsschema kodiert oder verschlüsselt sein können.

```http
Authorization: <type> <credentials>
Proxy-Authorization: <type> <credentials>
```

## Authentifizierungsschemata

Das allgemeine HTTP-Authentifizierungsrahmenwerk ist die Basis für eine Reihe von Authentifizierungsschemata.

IANA pflegt eine [Liste der Authentifizierungsschemata](https://www.iana.org/assignments/http-authschemes/http-authschemes.xhtml), aber es gibt auch andere Schemas, die von Hostdiensten angeboten werden, wie Amazon AWS.

Zu den gängigen Authentifizierungsschemata gehören:

- **Basic**
  - : Siehe {{rfc(7617)}}, base64-kodierte Anmeldedaten. Weitere Informationen unten.
- **Bearer**
  - : Siehe {{rfc(6750)}}, Trägertokens für den Zugriff auf OAuth 2.0-geschützte Ressourcen.
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
  - : Siehe [AWS-Dokumentation](https://docs.aws.amazon.com/AmazonS3/latest/API/sigv4-auth-using-authorization-header.html). Dieses Schema wird für die AWS3-Server-Authentifizierung verwendet.

Schemata können in der Sicherheitsstärke und in ihrer Verfügbarkeit in Client- oder Server-Software variieren.

Das "Basic"-Authentifizierungsschema bietet sehr schlechte Sicherheit, wird jedoch häufig unterstützt und ist einfach einzurichten.
Es wird im Folgenden ausführlicher vorgestellt.

## Basis-Authentifizierungsschema

Das "Basic" HTTP-Authentifizierungsschema ist in {{rfc(7617)}} definiert, welches Anmeldedaten als Benutzer-ID/Passwort-Paare überträgt, kodiert mithilfe von base64.

### Sicherheit der Basis-Authentifizierung

Da die Benutzer-ID und das Passwort im Netzwerk als Klartext übergeben werden (es ist base64-kodiert, aber base64 ist eine umkehrbare Kodierung), ist das Basis-Authentifizierungsschema **nicht sicher**. HTTPS/TLS sollte mit der Basis-Authentifizierung verwendet werden. Ohne diese zusätzlichen Sicherheitsverbesserungen sollte die Basis-Authentifizierung nicht zum Schutz sensibler oder wertvoller Informationen verwendet werden.

### Zugriffsbeschränkung mit Apache und Basis-Authentifizierung

Um ein Verzeichnis auf einem Apache-Server mit einem Passwort zu schützen, benötigen Sie eine `.htaccess` und eine `.htpasswd` Datei.

Die `.htaccess` Datei sieht typischerweise so aus:

```apacheconf
AuthType Basic
AuthName "Access to the staging site"
AuthUserFile /path/to/.htpasswd
Require valid-user
```

Die `.htaccess` Datei referenziert eine `.htpasswd` Datei, in der jede Zeile aus einem Benutzernamen und einem Passwort besteht, getrennt durch einen Doppelpunkt (`:`). Sie können die tatsächlichen Passwörter nicht sehen, da sie [gehasht](https://httpd.apache.org/docs/2.4/misc/password_encryptions.html) sind (in diesem Fall unter Verwendung von MD5-basiertem Hashing). Beachten Sie, dass Sie Ihre `.htpasswd` Datei anders benennen können, wenn Sie möchten, aber beachten Sie, dass diese Datei nicht für jedermann zugänglich sein sollte. (Apache ist normalerweise so konfiguriert, dass der Zugriff auf `.ht*` Dateien verhindert wird).

```apacheconf
aladdin:$apr1$ZjTqBB3f$IF9gdYAGlMrs2fuINjHsz.
user2:$apr1$O04r.y2H$/vEkesPhVInBByJUkXitA/
```

### Zugriffsbeschränkung mit Nginx und Basis-Authentifizierung

Für Nginx müssen Sie einen Standort angeben, den Sie schützen werden, und die `auth_basic` Direktive, die den Namen des passwortgeschützten Bereichs angibt.
Die `auth_basic_user_file` Direktive zeigt dann auf eine `.htpasswd` Datei, die die verschlüsselten Benutzeranmeldedaten enthält, genau wie im obigen Apache-Beispiel.

```apacheconf
location /status {
    auth_basic           "Access to the staging site";
    auth_basic_user_file /etc/apache2/.htpasswd;
}
```

### Zugriff mit Anmeldedaten in der URL

Viele Clients lassen Sie auch das Anmeldefenster vermeiden, indem Sie eine kodierte URL verwenden, die den Benutzernamen und das Passwort wie folgt enthält:

```plain example-bad
https://username:password@www.example.com/
```

**Die Verwendung dieser URLs wird nicht mehr empfohlen**.
In Chrome wird der `username:password@` Teil in URLs aus [Subresource-URLs entfernt](https://codereview.chromium.org/2651943002) aus Sicherheitsgründen. In Firefox wird überprüft, ob die Seite tatsächlich Authentifizierung erfordert, und falls nicht, warnt Firefox den Nutzer mit einer Aufforderung "Sie sind im Begriff, sich auf der Seite `www.example.com` mit dem Benutzernamen `username` anzumelden, aber die Webseite erfordert keine Authentifizierung. Dies könnte ein Versuch sein, Sie zu täuschen." Falls die Seite Authentifizierung erfordert, wird Firefox dennoch eine Benutzerbestätigung erfragen "Sie sind im Begriff, sich auf die Seite `www.example.com` mit dem Benutzernamen `username` anzumelden." bevor die Anmeldedaten an die Seite gesendet werden. Beachten Sie, dass Firefox in beiden Fällen die Anfrage ohne Anmeldedaten sendet, bevor die Aufforderung angezeigt wird, um festzustellen, ob die Seite Authentifizierung erfordert.

## Siehe auch

- {{HTTPHeader("WWW-Authenticate")}}
- {{HTTPHeader("Authorization")}}
- {{HTTPHeader("Proxy-Authorization")}}
- {{HTTPHeader("Proxy-Authenticate")}}
- {{HTTPStatus("401")}}, {{HTTPStatus("403")}}, {{HTTPStatus("407")}}
