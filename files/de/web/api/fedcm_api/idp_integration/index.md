---
title: Integration eines Identitätsanbieters mit FedCM
slug: Web/API/FedCM_API/IDP_integration
l10n:
  sourceCommit: c0cb69611b6489b8fa102b635f783dc765380001
---

{{DefaultAPISidebar("FedCM API")}}

Dieser Artikel beschreibt alle Schritte, die ein {{Glossary("Identity_provider", "Identitätsanbieter")}} (IdP) für die Integration mit der Federated Credential Management API (FedCM) ausführen muss.

## Schritte zur Integration eines IdP

Für die Integration mit FedCM muss ein IdP Folgendes tun:

1. [Eine Well-Known-Datei bereitstellen](#eine_well-known-datei_bereitstellen), um den IdP zu identifizieren.
2. [Eine Konfigurationsdatei und Endpunkte bereitstellen](#eine_konfigurationsdatei_und_endpunkte_bereitstellen) – für die Kontenliste und die Ausstellung von Assertions sowie optional für Client-Metadaten.
3. [Seinen Anmeldestatus aktualisieren](#den_anmeldestatus_mit_der_login_status_api_aktualisieren) – mithilfe der Login Status API.

## Eine Well-Known-Datei bereitstellen

Es besteht ein potenzielles Datenschutzproblem: Ein [IdP kann ohne ausdrückliche Zustimmung erkennen, ob ein Benutzer eine vertrauende Partei (Relying Party, RP) besucht hat](https://github.com/w3c-fedid/FedCM/issues/230). Da dies zur Nachverfolgung genutzt werden könnte, muss ein IdP eine Well-Known-Datei bereitstellen, um seine Identität zu bestätigen und dieses Problem abzumildern.

Die Well-Known-Datei wird mit einer [`GET`](/de/docs/Web/HTTP/Reference/Methods/GET)-Anfrage ohne Anmeldedaten abgerufen. Weiterleitungen wird dabei nicht gefolgt. Dadurch wird verhindert, dass der IdP erfährt, wer die Anfrage gestellt hat und welche {{Glossary("Relying_party", "RP")}} eine Verbindung herstellen möchte.

Die Well-Known-Datei muss unter `/.well-known/web-identity` von der {{Glossary("registrable_domain", "registrierbaren Domain")}} des IdP bereitgestellt werden. Wenn die IdP-Endpunkte beispielsweise unter `https://accounts.idp.example/` bereitgestellt werden, muss die Well-Known-Datei unter `https://idp.example/.well-known/web-identity` erreichbar sein. Ihr Inhalt sollte die folgende JSON-Struktur haben:

```json
{
  "provider_urls": ["https://accounts.idp.example/config.json"]
}
```

Das Mitglied `provider_urls` sollte ein Array von URLs enthalten, die auf gültige IdP-Konfigurationsdateien verweisen, über die RPs mit dem IdP interagieren können. Die Länge des Arrays ist derzeit auf eins begrenzt.

## Der HTTP-Header `Sec-Fetch-Dest`

Alle Anfragen, die der Browser über FedCM sendet, enthalten den Header `{{httpheader("Sec-Fetch-Dest")}}: webidentity`. Alle IdP-Endpunkte, die Anfragen mit Anmeldedaten empfangen (also `accounts_endpoint` und `id_assertion_endpoint`), müssen prüfen, ob dieser Header enthalten ist, um sich vor {{Glossary("CSRF", "CSRF")}}-Angriffen zu schützen.

## Eine Konfigurationsdatei und Endpunkte bereitstellen

Die IdP-Konfigurationsdatei enthält eine Liste der Endpunkte, die der Browser benötigt, um den Ablauf der föderierten Authentifizierung zu verarbeiten und Anmeldungen zu verwalten. Die Endpunkte müssen denselben Origin wie die Konfigurationsdatei haben.

Der Browser ruft die Konfigurationsdatei mit einer Anfrage ohne Anmeldedaten über die Methode [`GET`](/de/docs/Web/HTTP/Reference/Methods/GET) ab. Weiterleitungen wird dabei nicht gefolgt. Dadurch wird verhindert, dass der IdP erfährt, wer die Anfrage gestellt hat und welche RP eine Verbindung herstellen möchte.

Die Konfigurationsdatei (in unserem Beispiel unter `https://accounts.idp.example/config.json` bereitgestellt) sollte die folgende JSON-Struktur haben:

```json
{
  "accounts_endpoint": "/accounts.php",
  "account_label": "developer",
  "supports_use_other_account": true,
  "client_metadata_endpoint": "/client_metadata.php",
  "disconnect_endpoint": "/disconnect.php",
  "id_assertion_endpoint": "/assertion.php",
  "login_url": "/login",
  "branding": {
    "background_color": "green",
    "color": "0xFFEEAA",
    "icons": [
      {
        "url": "https://idp.example/icon.ico",
        "size": 25
      }
    ]
  }
}
```

Die Eigenschaften haben folgende Bedeutung:

- `accounts_endpoint`
  - : Die URL des Endpunkts für die Kontenliste. Er gibt eine Liste der Konten zurück, mit denen der Benutzer derzeit beim IdP angemeldet ist. Der Browser erstellt daraus eine Liste von Anmeldeoptionen, die er dem Benutzer in der vom Browser bereitgestellten FedCM-Oberfläche anzeigt.
- `account_label` {{optional_inline}}
  - : Eine Zeichenfolge, die, falls angegeben, eine Kennung für eine Teilmenge der Konten festlegt, die zurückgegeben werden sollen, wenn dieser IdP für die föderierte Authentifizierung verwendet wird. Bei einer `get()`-Anfrage werden vom [Konten-Endpunkt](#der_endpunkt_für_die_kontenliste) nur Konten zurückgegeben, deren `label_hints`-Parameter diese Zeichenfolge enthalten.
- `supports_use_other_account` {{optional_inline}}
  - : Ein boolescher Wert, der standardmäßig `false` ist. Wenn er auf `true` gesetzt ist, können sich Benutzer mit einem anderen Konto anmelden als dem, mit dem sie derzeit angemeldet sind, sofern der IdP mehrere Konten unterstützt. Dies gilt nur für `get()`-Aufrufe im [aktiven Modus](/de/docs/Web/API/IdentityCredentialRequestOptions#active).
    > [!NOTE]
    > In der Anmeldeoberfläche des Browsers wird dies wahrscheinlich als eine Art Schaltfläche „Anderes Konto auswählen“ angezeigt.
- `client_metadata_endpoint` {{optional_inline}}
  - : Die URL des Endpunkts für Client-Metadaten. Dieser stellt URLs zur Metadatenseite und zur Seite mit den Nutzungsbedingungen der RP bereit, die in der FedCM-Oberfläche verwendet werden.
- `disconnect_endpoint` {{optional_inline}}
  - : Die URL des [Endpunkts zum Trennen der Verbindung](#der_endpunkt_zum_trennen_der_verbindung). Die RP verwendet ihn über die Methode [`IdentityCredential.disconnect()`](/de/docs/Web/API/IdentityCredential/disconnect_static), um die Verbindung zum IdP zu trennen.
- `id_assertion_endpoint`
  - : Die URL des Endpunkts für die ID-Assertion. Wenn gültige Benutzer-Anmeldedaten gesendet werden, sollte er mit einem Validierungstoken antworten, mit dem die RP die Authentifizierung überprüfen kann.
- `login_url`
  - : Die URL der Anmeldeseite, auf der sich der Benutzer beim IdP anmelden kann.
- `branding` {{optional_inline}}
  - : Enthält Branding-Informationen, mit denen die vom Browser bereitgestellte FedCM-Oberfläche nach den Vorgaben des IdP gestaltet wird. Das bereitgestellte Icon muss im passiven Modus mindestens `25` (`25px`) und im aktiven Modus mindestens `40` (`40px`) groß sein. Weitere Informationen finden Sie unter [Aktiver und passiver Modus](/de/docs/Web/API/FedCM_API/RP_sign-in#active_versus_passive_mode).

Die folgende Tabelle fasst die verschiedenen Anfragen der FedCM API zusammen:

| Endpunkt/Ressource         | Methode | Mit Anmeldedaten (mit Cookies) | Enthält {{httpheader("Origin")}} |
| -------------------------- | ------- | ------------------------------ | -------------------------------- |
| `well-known`/`config.json` | `GET`   | Nein                           | Nein                             |
| `accounts_endpoint`        | `GET`   | Ja                             | Nein                             |
| `client_metadata_endpoint` | `GET`   | Nein                           | Ja                               |
| `disconnect_endpoint`      | `POST`  | Ja                             | Ja                               |
| `id_assertion_endpoint`    | `POST`  | Ja                             | Ja                               |

> [!NOTE]
> Eine Beschreibung des FedCM-Ablaufs, in dem auf diese Endpunkte zugegriffen wird, finden Sie unter [FedCM-Anmeldeablauf](/de/docs/Web/API/FedCM_API/RP_sign-in#fedcm_sign-in_flow).

> [!NOTE]
> Aus Datenschutzgründen folgt keine der Anfragen, die die FedCM API an die hier beschriebenen Endpunkte sendet, Weiterleitungen.

### Der Endpunkt für die Kontenliste

Der Browser sendet Anfragen an diesen Endpunkt mit der Methode `GET`. Die Anfrage enthält weder einen `client_id`-Parameter noch einen {{httpheader("Origin")}}- oder {{httpheader("Referer")}}-Header. Dadurch wird verhindert, dass der IdP erfährt, bei welcher RP sich der Benutzer anmelden möchte.

Zum Beispiel:

```http
GET /accounts.php HTTP/1.1
Host: idp.example
Accept: application/json
Cookie: 0x23223
Sec-Fetch-Dest: webidentity
```

Die Anfrage enthält Anmeldedaten, also Cookies für die Website des IdP. Damit kann der IdP feststellen, bei welchen IdP-Konten der Benutzer angemeldet ist.

Da die Anfrage des Browsers an diesen Endpunkt eine Cross-Site-Anfrage ist, werden Cookies nur mitgesendet, wenn ihr [`SameSite`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value)-Attribut den Wert `None` hat. IdPs können `SameSite` daher nicht als Teil ihres Schutzes vor [Cross-Site-Request-Forgery-Angriffen (CSRF)](/de/docs/Web/Security/Attacks/CSRF) einsetzen und müssen alternative Schutzmaßnahmen implementieren.

Die Antwort enthält eine Liste aller IdP-Konten, mit denen der Benutzer derzeit angemeldet ist (unabhängig von einer bestimmten RP). Sie hat die folgende JSON-Struktur:

```json
{
  "accounts": [
    {
      "id": "elaina_maduro",
      "given_name": "Elaina",
      "name": "Elaina Maduro",
      "email": "elaina_maduro@idp.example",
      "tel": "+491234567890",
      "username": "elaina420",
      "picture": "https://idp.example/profile/123",
      "approved_clients": ["123", "456", "789"],
      "domain_hints": ["rp1.example.com", "rp3.example.com"],
      "label_hints": ["developer", "admin"],
      "login_hints": ["elaina_maduro", "elaina_maduro@idp.example"]
    },
    {
      "id": "elly",
      "given_name": "Elly",
      "username": "elly123",
      "email": "Elly@idp.example",
      "picture": "https://idp.example/profile/456",
      "approved_clients": ["abc", "def", "ghi"],
      "domain_hints": ["rp1.example.com", "rp2.example.com"],
      "label_hints": ["developer", "test"],
      "login_hints": ["elly", "elly@idp.example"]
    }
  ]
}
```

Sie enthält die folgenden Informationen. `name`, `email`, `username` und `tel` sind optional, aber mindestens eines dieser Felder muss vorhanden und nicht leer sein.

- `id`
  - : Die eindeutige ID des Benutzers.
- `name` {{optional_inline}}
  - : Der Nachname des Benutzers.
- `email` {{optional_inline}}
  - : Die E-Mail-Adresse des Benutzers.
- `tel` {{optional_inline}}
  - : Die Telefonnummer des Benutzers. Sie kann in einem beliebigen Format angegeben werden.
- `username` {{optional_inline}}
  - : Der Benutzername des Benutzers.
- `given_name` {{optional_inline}}
  - : Der Vorname des Benutzers.
- `picture` {{optional_inline}}
  - : Die URL des Avatarbilds des Benutzers.
- `approved_clients` {{optional_inline}}
  - : Ein Array von Client-IDs, die jeweils eine RP identifizieren, bei der der Benutzer ein Konto hat. Wenn ein Benutzer versucht, sich mit einer föderierten Identität bei einer RP anzumelden, prüft der Browser das `approved_clients`-Array des IdP. Wenn die `clientId` der RP im Array enthalten ist, wird dem Benutzer kein [Offenlegungstext](/de/docs/Web/API/FedCM_API/RP_sign-in#fedcm_sign-in_flow:~:text=disclosure%20text) angezeigt. Möglicherweise kann er dann auch die [automatische erneute Authentifizierung](/de/docs/Web/API/FedCM_API/RP_sign-in#auto-reauthentication) nutzen.

    Der IdP sollte die RP-ID zu `approved_clients` hinzufügen, wenn sich der Benutzer erstmals mit seinen föderierten Anmeldedaten bei der RP registriert. Er sollte die RP-ID aus `approved_clients` entfernen, wenn das RP-Konto [vom IdP getrennt](#der_endpunkt_zum_trennen_der_verbindung) wird.
- `domain_hints` {{optional_inline}}
  - : Ein Array von Domains, mit denen das Konto verknüpft ist. Die RP kann einen `get()`-Aufruf mit der Eigenschaft [`domainHint`](/de/docs/Web/API/IdentityCredentialRequestOptions#domainhint) ausführen, um die zurückgegebenen Konten nach Domain zu filtern.
- `label_hints` {{optional_inline}}
  - : Ein Array von Zeichenfolgen mit Labels, die die Kontotypen bezeichnen, denen das Konto zugeordnet ist. Wenn die Konfigurationsdatei ein [`account_label`](#account_label) angibt, gibt der Endpunkt für die Kontenliste nur Konten zurück, deren `label_hints` dieses Label enthalten.
- `login_hints` {{optional_inline}}
  - : Ein Array von Zeichenfolgen, die das Konto repräsentieren. Mit diesen Zeichenfolgen wird die Liste der Kontenoptionen gefiltert, die der Browser dem Benutzer für die Anmeldung anbietet. Dies geschieht, wenn bei einem zugehörigen `get()`-Aufruf die Eigenschaft `loginHint` innerhalb von [`identity.providers`](/de/docs/Web/API/IdentityCredentialRequestOptions#providers) angegeben wird. Jedes Konto, dessen `login_hints`-Array eine Zeichenfolge enthält, die mit dem angegebenen `loginHint` übereinstimmt, wird in die Liste aufgenommen.

> [!NOTE]
> Wenn der Benutzer bei keinem IdP-Konto angemeldet ist, sollte der Endpunkt mit [HTTP 401 (Unauthorized)](/de/docs/Web/HTTP/Reference/Status/401) antworten.

### Der Endpunkt für Client-Metadaten

Der Browser sendet an diesen Endpunkt Anfragen ohne Anmeldedaten über die Methode `GET`. Dabei wird die beim `get()`-Aufruf angegebene `clientId` als Parameter übergeben.

Zum Beispiel:

```http
GET /client_metadata.php?client_id=1234 HTTP/1.1
Host: idp.example
Origin: https://rp.example/
Accept: application/json
Sec-Fetch-Dest: webidentity
```

Die Antwort auf eine erfolgreiche Anfrage enthält URLs zur Metadatenseite und zur Seite mit den Nutzungsbedingungen der RP. Diese werden in der vom Browser bereitgestellten FedCM-Oberfläche verwendet. Die Antwort sollte die folgende JSON-Struktur haben:

```json
{
  "privacy_policy_url": "https://rp.example/privacy_policy.html",
  "terms_of_service_url": "https://rp.example/terms_of_service.html"
}
```

### Der Endpunkt zum Trennen der Verbindung

Wenn [`IdentityCredential.disconnect()`](/de/docs/Web/API/IdentityCredential/disconnect_static) aufgerufen wird, sendet der Browser eine Cross-Origin-Anfrage mit {{httpmethod("POST")}} an den Endpunkt zum Trennen der Verbindung. Sie enthält Cookies, den {{httpheader("Content-Type")}} `application/x-www-form-urlencoded` und die folgenden Informationen:

- `account_hint`
  - : Eine Zeichenfolge mit einem Kontohinweis, den der IdP verwendet, um das zu trennende Konto zu identifizieren.
- `client_id`
  - : Eine Zeichenfolge mit der Client-Kennung der RP.

Zum Beispiel:

```http
POST /disconnect HTTP/1.1
Host: idp.example
Origin: rp.example
Content-Type: application/x-www-form-urlencoded
Cookie: 0x123
Sec-Fetch-Dest: webidentity

account_hint=account456&client_id=rp123
```

Nach Eingang der Anfrage sollte der IdP-Server:

1. Die Anfrage gemäß [CORS (Cross-Origin Resource Sharing)](/de/docs/Web/HTTP/Guides/CORS) beantworten.
2. Prüfen, ob die Anfrage einen {{httpheader("Sec-Fetch-Dest")}}-HTTP-Header mit dem Wert `webidentity` enthält.
3. Den {{httpheader("Origin")}}-Header mit dem anhand von `client_id` ermittelten Origin der RP abgleichen. Wenn sie nicht übereinstimmen, muss die Promise zurückgewiesen werden.
4. Das Konto ermitteln, das mit `account_hint` übereinstimmt.
5. Die Verbindung des Benutzerkontos mit der RP trennen. Dazu muss dessen ID aus der Liste [`approved_clients`](#approved_clients) entfernt werden.
6. Mit der `account_id` des identifizierten Benutzers im JSON-Format antworten:

   ```json
   {
     "account_id": "account456"
   }
   ```

> [!NOTE]
> Wenn der IdP die Verbindung aller mit der RP verknüpften Konten trennen möchte, kann er eine Zeichenfolge übergeben, die mit keiner `account_id` übereinstimmt, beispielsweise `"account_id": "*"`.

### Der Endpunkt für die ID-Assertion

Der Browser sendet an diesen Endpunkt Anfragen mit Anmeldedaten über die Methode [`POST`](/de/docs/Web/HTTP/Reference/Methods/POST) und mit dem Inhaltstyp `application/x-www-form-urlencoded`. Die Anfrage enthält außerdem Nutzdaten mit Einzelheiten zum Anmeldeversuch und zum zu überprüfenden Konto.

Sie sollte etwa so aussehen:

```http
POST /assertion.php HTTP/1.1
Host: idp.example
Origin: https://rp.example/
Content-Type: application/x-www-form-urlencoded
Cookie: 0x23223
Sec-Fetch-Dest: webidentity
account_id=123&client_id=client1234&disclosure_text_shown=true&is_auto_selected=true
```

Eine Anfrage an diesen Endpunkt wird gesendet, wenn der Benutzer in der entsprechenden Browseroberfläche ein Konto für die Anmeldung auswählt. Bei gültigen Benutzer-Anmeldedaten sollte der Endpunkt mit einem Validierungstoken antworten. Die RP kann damit den Benutzer auf ihrem eigenen Server überprüfen, entsprechend den Anweisungen des IdP, den sie für die föderierte Authentifizierung verwendet. Nach der Überprüfung kann die RP den Benutzer anmelden, ihn für ihren Dienst registrieren usw.

```json
{
  "token": "***********"
}
```

Die Nutzdaten der Anfrage enthalten die folgenden Parameter:

- `client_id`
  - : Die Client-Kennung der RP (sie entspricht der `clientId` aus der ursprünglichen `get()`-Anfrage).
- `account_id`
  - : Die eindeutige ID des anzumeldenden Benutzerkontos (sie entspricht der `id` des Benutzers aus der Antwort des Endpunkts für die Kontenliste).
- `params` {{optional_inline}}
  - : Die Serialisierung des `params`-Objekts aus der ursprünglichen `get()`-Anfrage.
- `disclosure_text_shown`
  - : Eine Zeichenfolge mit dem Wert `"true"` oder `"false"`, die angibt, ob der [Offenlegungstext](/de/docs/Web/API/FedCM_API/RP_sign-in#fedcm_sign-in_flow:~:text=disclosure%20text) angezeigt wurde. Der Offenlegungstext wird nicht angezeigt, wenn eine der folgenden Bedingungen erfüllt ist:
    - Die `clientId` der RP wurde im Array [`approved_clients`](#approved_clients) gefunden, das im JSON der Antwort des [Endpunkts für die Kontenliste](#der_endpunkt_für_die_kontenliste) enthalten ist.
    - Der Browser hat vor Kurzem eine Registrierung desselben Benutzers beobachtet, während `approved_clients` nicht vorhanden war.
- `is_auto_selected`
  - : Eine Zeichenfolge mit dem Wert `"true"` oder `"false"`, die angibt, ob die Anfrage zur Überprüfung der Authentifizierung durch eine [automatische erneute Authentifizierung](/de/docs/Web/API/FedCM_API/RP_sign-in#auto-reauthentication) ausgelöst wurde, also ohne Mitwirkung des Benutzers. Dies kann geschehen, wenn der [`get()`](/de/docs/Web/API/CredentialsContainer/get)-Aufruf mit dem Wert `"optional"` oder `"silent"` für die Option [`mediation`](/de/docs/Web/API/CredentialsContainer/get#mediation) ausgeführt wird. Für den IdP ist diese Information nützlich, um die Leistung zu bewerten und gegebenenfalls ein höheres Sicherheitsniveau durchzusetzen. Beispielsweise könnte der IdP einen Fehlercode zurückgeben, der der RP mitteilt, dass eine ausdrückliche Mitwirkung des Benutzers erforderlich ist (`mediation="required"`).

> [!NOTE]
> Wenn der [`get()`](/de/docs/Web/API/CredentialsContainer/get)-Aufruf erfolgreich ist, wird der Wert von `is_auto_selected` auch über die Eigenschaft [`IdentityCredential.isAutoSelected`](/de/docs/Web/API/IdentityCredential/isAutoSelected) an die RP übermittelt.

#### CORS-Header für den Endpunkt für die ID-Assertion

Die Antwort des Endpunkts für die ID-Assertion muss die Header {{httpheader("Access-Control-Allow-Origin")}} und {{httpheader("Access-Control-Allow-Credentials")}} enthalten. `Access-Control-Allow-Origin` muss den Origin des Anfragenden enthalten:

```http
Access-Control-Allow-Origin: https://rp.example
Access-Control-Allow-Credentials: true
```

`Access-Control-Allow-Origin` muss auf den konkreten Origin des Anfragenden (der RP) gesetzt werden; der Platzhalterwert `*` ist nicht zulässig.

Ohne diese Header schlägt die Anfrage mit einem Netzwerkfehler fehl.

#### Fehlerantworten des Endpunkts für die ID-Assertion

Wenn der IdP kein Token ausstellen kann – beispielsweise weil der Client nicht autorisiert ist –, antwortet der Endpunkt für die ID-Assertion mit einer Fehlerantwort, die Informationen zur Art des Fehlers enthält. Zum Beispiel:

```json
{
  "error": {
    "code": "access_denied",
    "url": "https://idp.example/error?type=access_denied"
  }
}
```

Die Felder der Fehlerantwort haben folgende Bedeutung:

- `code` {{optional_inline}}
  - : Eine Zeichenfolge. Sie kann entweder ein bekannter Fehler aus der [in OAuth 2.0 festgelegten Fehlerliste](https://datatracker.ietf.org/doc/html/rfc6749#section-4.1.2.1) oder eine beliebige Zeichenfolge sein.
- `url` {{optional_inline}}
  - : Eine URL. Sie sollte auf eine Webseite mit verständlichen Informationen zum Fehler verweisen, die den Benutzern angezeigt werden können – beispielsweise zur Fehlerbehebung oder zur Kontaktaufnahme mit dem Kundendienst. Die URL muss zur selben Website wie die Konfigurations-URL des IdP gehören.

Diese Informationen können auf verschiedene Weise verwendet werden:

- Der Browser kann dem Benutzer eine angepasste Oberfläche anzeigen, die ihn über den Fehler informiert (ein Beispiel finden Sie in der [Chrome-Dokumentation](https://privacysandbox.google.com/blog/fedcm-chrome-120-updates#error-api)). Beachten Sie: Wenn die Anfrage fehlschlägt, weil der IdP-Server nicht verfügbar ist, kann dieser keine Informationen zurückgeben. In solchen Fällen meldet der Browser den Fehler mit einer allgemeinen Nachricht.
- Der zugehörige [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get)-Aufruf der RP für den Anmeldeversuch weist seine Promise mit einem [`IdentityCredentialError`](/de/docs/Web/API/IdentityCredentialError) zurück, der die Fehlerinformationen enthält. Eine RP kann diesen Fehler abfangen und die angepasste Browseroberfläche durch weitere Informationen ergänzen, die dem Benutzer bei einem späteren Anmeldeversuch helfen.

## Den Anmeldestatus mit der Login Status API aktualisieren

Mit der **Login Status API** kann ein IdP einem Browser seinen Anmeldestatus in diesem Browser mitteilen. Gemeint ist damit, ob im aktuellen Browser Benutzer beim IdP angemeldet sind. Der Browser speichert diesen Zustand für jeden IdP. Die FedCM API nutzt ihn, um die Anzahl der Anfragen an den IdP zu verringern: Wenn dort keine Benutzer angemeldet sind, muss sie keine Konten abfragen. Außerdem werden dadurch [potenzielle Timing-Angriffe](https://github.com/w3c-fedid/FedCM/issues/447) abgeschwächt.

Für jeden bekannten IdP (identifiziert durch seine Konfigurations-URL) verwaltet der Browser eine Variable mit drei möglichen Werten für den Anmeldestatus:

- `"logged-in"`: Beim IdP ist mindestens ein Benutzerkonto angemeldet. Zu diesem Zeitpunkt wissen die RP und der Browser noch nicht, welcher Benutzer das ist. Informationen zu einzelnen Benutzern werden später im FedCM-Ablauf vom [`accounts_endpoint`](#der_endpunkt_für_die_kontenliste) des IdP zurückgegeben.
- `"logged-out"`: Alle IdP-Konten sind derzeit abgemeldet.
- `"unknown"`: Der Anmeldestatus dieses IdP ist nicht bekannt. Dies ist der Standardwert.

### Den Anmeldestatus setzen

Der IdP sollte seinen Anmeldestatus aktualisieren, wenn sich ein Benutzer beim IdP an- oder abmeldet. Dies ist auf zwei Arten möglich:

- Der HTTP-Antwortheader {{httpheader("Set-Login")}} kann bei einer Navigation auf oberster Ebene oder einer Anfrage nach einer Subressource desselben Origins gesetzt werden:

  ```http
  Set-Login: logged-in

  Set-Login: logged-out
  ```

- Die Methode [`Navigator.login.setStatus()`](/de/docs/Web/API/NavigatorLogin/setStatus) kann vom Origin des IdP aus aufgerufen werden:

  ```js
  /* Set logged-in status */
  navigator.login.setStatus("logged-in");

  /* Set logged-out status */
  navigator.login.setStatus("logged-out");
  ```

### Einfluss des Anmeldestatus auf den Ablauf der föderierten Anmeldung

Wenn eine [RP eine föderierte Anmeldung versucht](/de/docs/Web/API/FedCM_API/RP_sign-in), wird der Anmeldestatus geprüft:

- Wenn der Anmeldestatus eines IdP `"logged-in"` ist, wird eine Anfrage an den [Endpunkt für die Kontenliste](#der_endpunkt_für_die_kontenliste) gesendet. Verfügbare Konten für die Anmeldung werden dem Benutzer im vom Browser bereitgestellten FedCM-Dialog angezeigt.
- Wenn die Anmeldestatus aller IdPs `"logged-out"` sind, wird die vom FedCM-`get()`-Aufruf zurückgegebene Promise zurückgewiesen, ohne eine Anfrage an den Endpunkt für die Kontenliste zu senden. In diesem Fall muss der Entwickler den weiteren Ablauf gestalten, indem er den Benutzer beispielsweise auffordert, sich bei einem geeigneten IdP anzumelden.
- Wenn der Anmeldestatus eines IdP `"unknown"` ist, wird eine Anfrage an den Endpunkt für die Kontenliste gesendet. Der Anmeldestatus wird anhand der Antwort aktualisiert:
  - Wenn der Endpunkt eine Liste verfügbarer Konten für die Anmeldung zurückgibt, wird der Status auf `"logged-in"` gesetzt. Die Anmeldeoptionen werden dem Benutzer im vom Browser bereitgestellten FedCM-Dialog angezeigt.
  - Wenn der Endpunkt keine Konten zurückgibt, wird der Status auf `"logged-out"` gesetzt. Die vom FedCM-`get()`-Aufruf zurückgegebene Promise wird zurückgewiesen, wenn keine anderen IdPs mit dem Status `logged-in` verfügbar sind.

### Was passiert, wenn der Anmeldestatus im Browser und beim IdP nicht mehr übereinstimmt?

Obwohl die Login Status API den Browser über den Anmeldestatus beim IdP informiert, können die Zustände im Browser und beim IdP voneinander abweichen. Beispielsweise könnten die IdP-Sitzungen ablaufen, sodass alle Benutzerkonten abgemeldet sind, der Anmeldestatus aber weiterhin auf `"logged-in"` steht (weil die Anwendung ihn nicht auf `"logged-out"` setzen konnte). Bei einem Versuch zur föderierten Anmeldung wird dann zwar eine Anfrage an den Endpunkt für die Kontenliste des IdP gesendet, wegen der abgelaufenen Sitzung werden jedoch keine verfügbaren Konten zurückgegeben.

In diesem Fall kann der Browser dem Benutzer eine dynamische Anmeldung beim IdP ermöglichen, indem er dessen Anmeldeseite in einem Dialog öffnet. Die Anmelde-URL steht in der [Konfigurationsdatei](#eine_konfigurationsdatei_und_endpunkte_bereitstellen) des IdP unter `login_url`. Die genaue Ausgestaltung dieses Ablaufs liegt beim Browser; beispielsweise [handhabt Chrome ihn auf diese Weise](https://privacysandbox.google.com/blog/fedcm-chrome-120-updates#what_if_the_user_session_expires_let_the_user_sign_in_through_a_dynamic_login_flow).

Sobald der Benutzer beim IdP angemeldet ist, sollte der IdP:

- Den Browser über die Anmeldung informieren, indem er den [Anmeldestatus](#den_anmeldestatus_setzen) auf `"logged-in"` setzt.
- Den Anmeldedialog durch Aufruf der Methode [`IdentityProvider.close()`](/de/docs/Web/API/IdentityProvider/close_static) schließen.

## Siehe auch

- [Federated Credential Management API](https://developer.chrome.com/docs/identity/fedcm/overview) auf developer.chrome.com (2023)
