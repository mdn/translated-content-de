---
title: Identity Provider-Integration mit FedCM
slug: Web/API/FedCM_API/IDP_integration
l10n:
  sourceCommit: 30bb7c6b5b9f3e19276a8c528134fe78f131c9a5
---

{{DefaultAPISidebar("FedCM API")}}

Dieser Artikel beschreibt alle Schritte, die ein {{Glossary("Identity_provider", "Identity Provider")}} (IdP) durchführen muss, um sich mit der Federated Credential Management (FedCM) API zu integrieren.

## IdP-Integrationsschritte

Um sich mit FedCM zu integrieren, muss ein IdP Folgendes tun:

1. [Stellen Sie eine `well-known`-Datei bereit](#stellen_sie_eine_`well-known`-datei_bereit), um den IdP zu identifizieren.
2. [Stellen Sie eine Konfigurationsdatei und Endpunkte bereit](#stellen_sie_eine_konfigurationsdatei_und_endpunkte_bereit) für die Kontenliste und die Ausstellung von Assertions (und optional Clients-Metadaten).
3. [Aktualisieren Sie den Anmeldestatus](#aktualisieren_des_anmeldestatus_mit_der_login_status_api) mit der Login Status API.

## Stellen Sie eine `well-known`-Datei bereit

Es gibt ein potenzielles Datenschutzproblem, bei dem ein [IdP in der Lage sein könnte, herauszufinden, ob ein Benutzer ohne ausdrückliche Zustimmung eine relyierende Partei (RP) besucht hat](https://github.com/w3c-fedid/FedCM/issues/230). Dies hat Implikationen für die Nachverfolgung, weshalb ein IdP eine `well-known`-Datei bereitstellen muss, um seine Identität zu verifizieren und dieses Problem zu mildern.

Die `well-known`-Datei wird über eine nicht-credentialed [`GET`](/de/docs/Web/HTTP/Reference/Methods/GET)-Anfrage angefordert, die keine Weiterleitungen verfolgt. Dies verhindert effektiv, dass der IdP erfährt, wer die Anfrage gestellt hat und welche {{Glossary("Relying_party", "RP")}} versucht, die Verbindung herzustellen.

Die `well-known`-Datei muss von der {{Glossary("registrable_domain", "registrierbaren Domain")}} des IdP unter `/.well-known/web-identity` bereitgestellt werden. Zum Beispiel, wenn die IdP-Endpunkte unter `https://accounts.idp.example/` bereitgestellt werden, müssen sie eine `well-known` Datei unter `https://idp.example/.well-known/web-identity` bereitstellen. Der Inhalt der `well-known`-Datei sollte die folgende JSON-Struktur haben:

```json
{
  "provider_urls": ["https://accounts.idp.example/config.json"]
}
```

Das `provider_urls`-Mitglied sollte ein Array von URLs enthalten, die auf gültige IdP-Konfigurationsdateien verweisen, die von RPs zur Interaktion mit dem IdP verwendet werden können. Die Array-Länge ist derzeit auf eins begrenzt.

## Der `Sec-Fetch-Dest` HTTP-Header

Alle über FedCM vom Browser gesendeten Anfragen enthalten einen `{{httpheader("Sec-Fetch-Dest")}}: webidentity`-Header. Alle IdP-Endpunkte, die credentialed Anfragen erhalten (d.h. `accounts_endpoint` und `id_assertion_endpoint`), müssen bestätigen, dass dieser Header enthalten ist, um sich gegen {{Glossary("CSRF", "CSRF")}}-Angriffe zu schützen.

## Stellen Sie eine Konfigurationsdatei und Endpunkte bereit

Die IdP-Konfigurationsdatei bietet eine Liste der Endpunkte, die der Browser benötigt, um den Identitätsföderationsfluss zu verarbeiten und die Anmeldungen zu verwalten. Die Endpunkte müssen denselben Ursprung wie die Konfiguration haben.

Der Browser fordert die Konfigurationsdatei über die Methode [`GET`](/de/docs/Web/HTTP/Reference/Methods/GET) in einer nicht-credentialed Anfrage an, die keine Weiterleitungen verfolgt. Dies verhindert effektiv, dass der IdP erfährt, wer die Anfrage gestellt hat und welche RP versucht, die Verbindung herzustellen.

Die Konfigurationsdatei (im Beispiel gehostet unter `https://accounts.idp.example/config.json`) sollte die folgende JSON-Struktur haben:

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

Die Eigenschaften sind wie folgt:

- `accounts_endpoint`
  - : Die URL für den Kontenliste-Endpunkt, die eine Liste von Konten zurückgibt, bei denen der Benutzer derzeit beim IdP angemeldet ist. Der Browser verwendet diese Liste, um eine Liste von Anmeldungsoptionen zu erstellen, die dem Benutzer in der vom Browser bereitgestellten FedCM-Benutzeroberfläche angezeigt werden sollen.
- `account_label` {{optional_inline}}
  - : Ein String, der, wenn er enthalten ist, eine Kennung für eine Teilmenge von Konten angibt, die zurückgegeben werden sollen, wenn dieser IdP für föderierte Authentifizierung verwendet wird. Wenn eine `get()`-Anfrage gestellt wird, werden nur Konten zurückgegeben, die mit diesem String in ihren `label_hints`-Parametern übereinstimmen, vom [Kontenliste-Endpunkt](#der_kontenliste-endpunkt).
- `supports_use_other_account` {{optional_inline}}
  - : Ein Boolean, der standardmäßig auf `false` eingestellt ist; wenn er auf `true` gesetzt ist, bedeutet das, dass Benutzer sich mit einem Konto anmelden können, das sich von dem unterscheidet, mit dem sie derzeit angemeldet sind (wenn der IdP mehrere Konten unterstützt). Dies gilt nur für `get()`-Aufrufe, die [aktive Modi](/de/docs/Web/API/IdentityCredentialRequestOptions#active) angeben.
    > [!NOTE]
    > In der Browser-Anmelde-Benutzeroberfläche wird dies voraussichtlich als eine Art "Anderes Konto wählen"-Schaltfläche angezeigt.
- `client_metadata_endpoint` {{optional_inline}}
  - : Die URL für den Clients-Metadaten-Endpunkt, die URLs bereitstellt, die auf die Metadaten- und Nutzungsbedingungen-Seiten der RP verweisen, die in der FedCM-Benutzeroberfläche verwendet werden.
- `disconnect_endpoint` {{optional_inline}}
  - : Die URL für den Disconnect-Endpunkt, die von der RP verwendet wird, um mit der Methode [`IdentityCredential.disconnect()`](/de/docs/Web/API/IdentityCredential/disconnect_static) die Verbindung zum IdP zu trennen.
- `id_assertion_endpoint`
  - : Die URL des ID-Assertion-Endpunktes, der beim Senden von gültigen Benutzeranmeldeinformationen mit einem Validierungstoken antworten sollte, das die RP zur Validierung der Authentifizierung verwenden kann.
- `login_url`
  - : Die Anmeldeseite-URL für den Benutzer, um sich beim IdP anzumelden.
- `branding` {{optional_inline}}
  - : Beinhaltet Branding-Informationen, die in der vom Browser bereitgestellten FedCM-Benutzeroberfläche verwendet werden, um ihr Aussehen wie gewünscht vom IdP anzupassen. Die bereitgestellte Symbolgröße muss im passiven Modus größer oder gleich `25` (`25px`) und im aktiven Modus größer oder gleich `40` (`40px`) sein (siehe [Aktiver versus passiver Modus](/de/docs/Web/API/FedCM_API/RP_sign-in#active_versus_passive_mode) für weitere Details).

Die folgende Tabelle fasst die verschiedenen Anfragen zusammen, die von der FedCM-API gestellt werden:

| Endpunkt/Ressource         | Methode | Mit Anmeldedaten (mit Cookies) | Beinhaltet {{httpheader("Origin")}} |
| -------------------------- | ------- | ------------------------------ | ----------------------------------- |
| `well-known`/`config.json` | `GET`   | Nein                           | Nein                                |
| `accounts_endpoint`        | `GET`   | Ja                             | Nein                                |
| `client_metadata_endpoint` | `GET`   | Nein                           | Ja                                  |
| `disconnect_endpoint`      | `POST`  | Ja                             | Ja                                  |
| `id_assertion_endpoint`    | `POST`  | Ja                             | Ja                                  |

> [!NOTE]
> Für eine Beschreibung des FedCM-Flusses, in dem auf diese Endpunkte zugegriffen wird, siehe [FedCM-Anmeldefluss](/de/docs/Web/API/FedCM_API/RP_sign-in#fedcm_sign-in_flow).

> [!NOTE]
> Keine der von der FedCM API an die hier beschriebenen Endpunkte gestellten Anfragen erlaubt das Folgen von Weiterleitungen aus Datenschutzgründen.

### Der Kontenliste-Endpunkt

Der Browser sendet Anfragen an diesen Endpunkt mit der `GET`-Methode. Die Anfrage hat keinen `client_id`-Parameter, {{httpheader("Origin")}}-Header oder {{httpheader("Referer")}}-Header. Dies verhindert effektiv, dass der IdP erfährt, auf welche RP der Benutzer sich anmelden möchte.

Zum Beispiel:

```http
GET /accounts.php HTTP/1.1
Host: idp.example
Accept: application/json
Cookie: 0x23223
Sec-Fetch-Dest: webidentity
```

Die Anfrage enthält Anmeldeinformationen: das heißt, sie enthält Cookies für die IdP-Site, die der IdP verwenden kann, um zu identifizieren, bei welchen IdP-Konten der Benutzer angemeldet ist.

Beachten Sie, dass Cookies nur dann eingeschlossen werden, wenn sie einen [`SameSite`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value)-Attributwert von `None` haben, da die Browseranfrage an diesen Endpunkt eine site-übergreifende Anfrage ist. Das bedeutet, dass IdPs `SameSite` nicht als Teil ihrer Verteidigung gegen [Cross-Site Request Forgery (CSRF)](/de/docs/Web/Security/Attacks/CSRF)-Angriffe verwenden können, weshalb sie alternative Verteidigungen umsetzen müssen.

Die Antwort gibt eine Liste aller IdP-Konten zurück, bei denen der Benutzer derzeit angemeldet ist (nicht spezifisch für eine bestimmte RP), mit einer JSON-Struktur, die der folgenden entspricht:

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

Dies beinhaltet die folgende Information, wobei `name`, `email`, `username` und `tel` optional sind, aber mindestens eines muss vorhanden und nicht leer sein.

- `id`
  - : Die eindeutige ID des Benutzers.
- `name` {{optional_inline}}
  - : Der Nachname des Benutzers.
- `email` {{optional_inline}}
  - : Die E-Mail-Adresse des Benutzers.
- `tel` {{optional_inline}}
  - : Die Telefonnummer des Benutzers. Kann in jedem Format sein.
- `username` {{optional_inline}}
  - : Der Benutzername des Benutzers.
- `given_name` {{optional_inline}}
  - : Der Vorname des Benutzers.
- `picture` {{optional_inline}}
  - : Die URL des Benutzer-Avatarbildes.
- `approved_clients` {{optional_inline}}
  - : Ein Array von RP-Clients, bei denen sich der Benutzer registriert hat.
- `domain_hints` {{optional_inline}}
  - : Ein Array von Domains, mit denen das Konto in Verbindung steht. Die RP kann einen `get()`-Aufruf durchführen, der eine [`domainHint`](/de/docs/Web/API/IdentityCredentialRequestOptions#domainhint)-Eigenschaft enthält, um die zurückgegebenen Konten nach Domain zu filtern.
- `label_hints` {{optional_inline}}
  - : Ein Array von Strings, die Labels angeben, die Kontotypen definieren, mit denen das Konto identifiziert wird. Wenn die Konfigurationsdatei ein [`account_label`](#account_label) angibt, werden nur Konten zurückgegeben, die dieses Label in ihren `label_hints` enthalten.
- `login_hints` {{optional_inline}}
  - : Ein Array von Strings, die das Konto repräsentieren. Diese Strings werden verwendet, um die Liste der Kontooptionen zu filtern, die der Browser dem Benutzer zur Anmeldung anbietet. Dies tritt auf, wenn die `loginHint`-Eigenschaft innerhalb von [`identity.providers`](/de/docs/Web/API/IdentityCredentialRequestOptions#providers) in einem verwandten `get()`-Aufruf bereitgestellt wird. Jedes Konto mit einem String in seinem `login_hints`-Array, das mit dem bereitgestellten `loginHint` übereinstimmt, wird einbezogen.

> [!NOTE]
> Wenn der Benutzer bei keinem IdP-Konto angemeldet ist, sollte der Endpunkt mit [HTTP 401 (Unauthorized)](/de/docs/Web/HTTP/Reference/Status/401) antworten.

### Der Client-Metadaten-Endpunkt

Der Browser sendet nicht-credentialed Anfragen an diesen Endpunkt über die `GET`-Methode, mit dem `clientId`, das in den `get()`-Aufruf als Parameter übergeben wird.

Zum Beispiel:

```http
GET /client_metadata.php?client_id=1234 HTTP/1.1
Host: idp.example
Origin: https://rp.example/
Accept: application/json
Sec-Fetch-Dest: webidentity
```

Die Antwort auf eine erfolgreiche Anfrage enthält URLs, die auf die Metadaten- und Nutzungsbedingungsseiten der RP verweisen, um in der vom Browser bereitgestellten FedCM-Benutzeroberfläche verwendet zu werden. Dies sollte die folgende JSON-Struktur haben:

```json
{
  "privacy_policy_url": "https://rp.example/privacy_policy.html",
  "terms_of_service_url": "https://rp.example/terms_of_service.html"
}
```

### Der Disconnect-Endpunkt

Durch den Aufruf von [`IdentityCredential.disconnect()`](/de/docs/Web/API/IdentityCredential/disconnect_static) sendet der Browser eine site-übergreifende {{httpmethod("POST")}}-Anfrage mit Cookies und einem {{httpheader("Content-Type")}} von `application/x-www-form-urlencoded` an den Disconnect-Endpunkt mit den folgenden Informationen:

- `account_hint`
  - : Ein String, der einen Account-Hinweis angibt, den der IdP zur Identifizierung des zu trennenden Kontos verwendet.
- `client_id`
  - : Ein String, der die Client-ID der RP angibt.

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

Nach Erhalt der Anfrage sollte der IdP-Server:

1. Auf die Anfrage mit [CORS (Cross-Origin Resource Sharing)](/de/docs/Web/HTTP/Guides/CORS) antworten.
2. Überprüfen, dass die Anfrage einen {{httpheader("Sec-Fetch-Dest")}} HTTP-Header mit einem `webidentity`-Direktive enthält.
3. Den {{httpheader("Origin")}}-Header mit dem RP-Ursprung abgleichen, der durch die `client_id` bestimmt wird. Das Versprechen ablehnen, wenn sie nicht übereinstimmen.
4. Das Konto finden, das mit dem `account_hint` übereinstimmt.
5. Das Benutzerkonto aus der Liste der RP-verknüpften Konten entfernen.
6. Mit der `account_id` des identifizierten Benutzers im JSON-Format antworten:

   ```json
   {
     "account_id": "account456"
   }
   ```

> [!NOTE]
> Wenn der IdP alle mit der RP verknüpften Konten trennen möchte, kann er einen String übergeben, der mit keiner `account_id` übereinstimmt, zum Beispiel `"account_id": "*"`.

### Der ID-Assertion-Endpunkt

Der Browser sendet credentialed Anfragen an diesen Endpunkt über die [`POST`](/de/docs/Web/HTTP/Reference/Methods/POST)-Methode, mit einem Content-Type von `application/x-www-form-urlencoded`. Die Anfrage enthält auch eine Nutzlast mit Details zur versuchten Anmeldung und dem zu validierenden Konto.

Diese sollte wie folgt aussehen:

```http
POST /assertion.php HTTP/1.1
Host: idp.example
Origin: https://rp.example/
Content-Type: application/x-www-form-urlencoded
Cookie: 0x23223
Sec-Fetch-Dest: webidentity
account_id=123&client_id=client1234&disclosure_text_shown=true&is_auto_selected=true
```

Eine Anfrage an diesen Endpunkt wird als Ergebnis der Benutzerauswahl eines Kontos zur Anmeldung aus der entsprechenden Browser-Benutzeroberfläche gesendet. Wenn gültige Benutzeranmeldeinformationen gesendet werden, sollte dieser Endpunkt mit einem Validierungstoken antworten, das die RP verwenden kann, um den Benutzer auf ihrem eigenen Server zu validieren, gemäß den Nutzungshinweisen des IdP, den sie für die Identitätsföderation verwenden. Sobald die RP den Benutzer validiert, können sie ihn anmelden, ihm den Zugriff auf ihren Service ermöglichen usw.

```json
{
  "token": "***********"
}
```

Die Anfragenutzlast enthält die folgenden Parameter:

- `client_id`
  - : Die Client-ID der RP (die mit dem `clientId` aus der ursprünglichen `get()`-Anfrage übereinstimmt).
- `account_id`
  - : Die eindeutige ID des Benutzerkontos, das angemeldet werden soll (das mit der Benutzer-`id` aus der Antwort des Kontenliste-Endpunktes übereinstimmt).
- `params` {{optional_inline}}
  - : Die Serialisierung des `params`-Objekts aus der ursprünglichen `get()`-Anfrage.
- `disclosure_text_shown`
  - : Ein String mit `"true"` oder `"false"`, der angibt, ob der Aufklärungstext gezeigt wurde oder nicht. Der Aufklärungstext ist die dem Benutzer angezeigte Information (die links zu den Nutzungsbedingungen und Datenschutzrichtlinien enthalten kann, wenn bereitgestellt), wenn der Benutzer beim IdP angemeldet ist, aber kein Konto spezifisch bei der aktuellen RP hat (in diesem Fall müsste er wählen, "Weiter als..." seine IdP-Identität zu verwenden und dann ein entsprechendes Konto bei der RP erstellen).
- `is_auto_selected`
  - : Ein String mit `"true"` oder `"false"`, der angibt, ob die Authentifizierungsvalidierungsanfrage als Ergebnis einer [automatischen Reauthentifizierung](/de/docs/Web/API/FedCM_API/RP_sign-in#auto-reauthentication) gestellt wurde, d.h. ohne Benutzermediation. Dies kann auftreten, wenn der [`get()`](/de/docs/Web/API/CredentialsContainer/get)-Aufruf mit einem [`mediation`](/de/docs/Web/API/CredentialsContainer/get#mediation)-Optionwert von `"optional"` oder `"silent"` gestellt wird. Es ist für den IdP nützlich zu wissen, ob eine automatische Reauthentifizierung aufgetreten ist, um die Leistung zu bewerten und im Fall, dass höhere Sicherheit gewünscht wird. Zum Beispiel könnte der IdP einen Fehlercode zurückgeben, der die RP darüber informiert, dass eine explizite Benutzermediation erforderlich ist (`mediation="required"`).

> [!NOTE]
> Wenn der [`get()`](/de/docs/Web/API/CredentialsContainer/get)-Aufruf erfolgreich ist, wird der `is_auto_selected`-Wert auch über die [`IdentityCredential.isAutoSelected`](/de/docs/Web/API/IdentityCredential/isAutoSelected)-Eigenschaft an die RP übermittelt.

#### CORS-Header für den ID-Assertion-Endpunkt

Die Antwort des ID-Assertion-Endpunktes muss die Header {{httpheader("Access-Control-Allow-Origin")}} und {{httpheader("Access-Control-Allow-Credentials")}} enthalten und der `Access-Control-Allow-Origin` muss den Ursprung des Anforderers beinhalten:

```http
Access-Control-Allow-Origin: https://rp.example
Access-Control-Allow-Credentials: true
```

Beachten Sie, dass `Access-Control-Allow-Origin` auf den spezifischen Ursprung des Anforderers (die RP) gesetzt werden muss und nicht der Platzhalterwert `*` sein kann.

Ohne diese Header wird die Anfrage mit einem Netzwerkfehler fehlschlagen.

#### ID-Assertion-Fehlerantworten

Wenn der IdP kein Token ausstellen kann — zum Beispiel, wenn der Client nicht autorisiert ist — antwortet der ID-Assertion-Endpunkt mit einer Fehlerantwort, die Informationen über die Art des Fehlers enthält. Zum Beispiel:

```json
{
  "error": {
    "code": "access_denied",
    "url": "https://idp.example/error?type=access_denied"
  }
}
```

Die Fehlerantwortfelder sind wie folgt:

- `code` {{optional_inline}}
  - : Ein String. Dies kann entweder ein bekannter Fehler aus der [OAuth 2.0 angegebenen Fehlerliste](https://datatracker.ietf.org/doc/html/rfc6749#section-4.1.2.1) oder ein beliebiger String sein.
- `url` {{optional_inline}}
  - : Eine URL. Dies sollte eine Webseite sein, die menschenlesbare Informationen über den Fehler enthält, die den Benutzern angezeigt werden sollen, wie beispielsweise, wie der Fehler behoben werden kann oder wie man den Kundenservice kontaktieren kann. Die URL muss auf derselben Site wie die IdP-Konfigurations-URL sein.

Diese Informationen können auf verschiedene Arten verwendet werden:

- Der Browser kann eine benutzerdefinierte Benutzeroberfläche anzeigen, die den Benutzern mitteilt, was schief gelaufen ist (siehe die [Chrome-Dokumentation](https://privacysandbox.google.com/blog/fedcm-chrome-120-updates#error-api) für ein Beispiel). Beachten Sie, dass, wenn die Anfrage fehlschlägt, weil der IdP-Server nicht verfügbar ist, dieser offensichtlich keine Informationen zurückgeben kann. In solchen Fällen wird der Browser dies über eine generische Nachricht berichten.
- Der mit der RP verknüpfte [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get)-Aufruf zur Anmeldeversuch wird sein Versprechen mit einem [`IdentityCredentialError`](/de/docs/Web/API/IdentityCredentialError) ablehnen, das die Fehlerinformationen enthält. Eine RP kann diesen Fehler abfangen und anschließend der benutzerdefinierten Benutzeroberfläche des Browsers einige Informationen hinzufügen, um dem Benutzer zu helfen, in einem zukünftigen Anmeldeversuch erfolgreich zu sein.

## Aktualisieren des Anmeldestatus mit der Login Status API

Die **Login Status API** ermöglicht es einem IdP einem Browser mitzuteilen, ob Benutzer in diesem speziellen Browser beim IdP angemeldet sind oder nicht — damit meinen wir "ob Nutzer beim IdP im aktuellen Browser angemeldet sind oder nicht". Der Browser speichert diesen Zustand für jeden IdP; die FedCM API verwendet ihn dann, um die Anzahl der Anfragen an den IdP zu reduzieren (da keine Zeit verschwendet werden muss, um Konten abzufragen, wenn keine Benutzer beim IdP angemeldet sind). Sie mildert auch [mögliche Timing-Angriffe](https://github.com/w3c-fedid/FedCM/issues/447).

Für jeden bekannten IdP (identifiziert durch seine Konfigurations-URL) hält der Browser eine dreiwertige Variable, die den Anmeldestatus mit drei möglichen Werten darstellt:

- `"logged-in"`: Der IdP hat mindestens ein Benutzerkonto angemeldet. Beachten Sie, dass zu diesem Zeitpunkt RP und Browser noch nicht wissen, um welchen Benutzer es sich handelt. Informationen zu spezifischen Benutzern werden später im FedCM-Fluss vom [`accounts_endpoint`](#der_kontenliste-endpunkt) des IdP zurückgegeben.
- `"logged-out"`: Alle IdP-Konten sind derzeit abgemeldet.
- `"unknown"`: Der Anmeldestatus dieses IdP ist nicht bekannt. Dies ist der Standardwert.

### Anmeldestatus festlegen

Der IdP sollte den Anmeldestatus aktualisieren, wenn sich ein Benutzer beim IdP an- oder abmeldet. Dies kann auf zwei verschiedene Arten geschehen:

- Der {{httpheader("Set-Login")}} HTTP-Antwortheader kann in einer Navigation auf oberster Ebene oder einer gleichbürtigen Subressourcen-Anfrage gesetzt werden:

  ```http
  Set-Login: logged-in

  Set-Login: logged-out
  ```

- Die Methode [`Navigator.login.setStatus()`](/de/docs/Web/API/NavigatorLogin/setStatus) kann vom IdP-Ursprung aus aufgerufen werden:

  ```js
  /* Set logged-in status */
  navigator.login.setStatus("logged-in");

  /* Set logged-out status */
  navigator.login.setStatus("logged-out");
  ```

### Wie sich der Anmeldestatus auf den föderierten Anmeldeprozess auswirkt

Wenn eine [RP eine föderierte Anmeldung versucht](/de/docs/Web/API/FedCM_API/RP_sign-in), wird der Anmeldestatus überprüft:

- Wenn der Anmeldestatus eines IdP `"logged-in"` ist, wird eine Anfrage an den [Kontenliste-Endpunkt](#der_kontenliste-endpunkt) gestellt und verfügbare Anmeldekonten werden dem Benutzer im vom Browser bereitgestellten FedCM-Dialog angezeigt.
- Wenn der Anmeldestatus aller IdPs `"logged-out"` ist, wird das von der FedCM `get()`-Anfrage zurückgegebene Versprechen abgelehnt, ohne eine Anfrage an den Kontenliste-Endpunkt zu stellen. In einem solchen Fall liegt es am Entwickler, den Fluss zu bearbeiten, z.B. indem er den Benutzer dazu auffordert, sich bei einem geeigneten IdP anzumelden.
- Wenn der Anmeldestatus eines IdP `"unknown"` ist, wird eine Anfrage an den Kontenliste-Endpunkt gestellt und der Anmeldestatus wird abhängig von der Antwort aktualisiert:
  - Wenn der Endpunkt eine Liste verfügbarer Anmeldekonten zurückgibt, den Status auf `"logged-in"` aktualisieren und dem Benutzer die Anmeldeoptionen im vom Browser bereitgestellten FedCM-Dialog anzeigen.
  - Wenn der Endpunkt keine Konten zurückgibt, den Status auf `"logged-out"` setzen; das von der FedCM `get()`-Anfrage zurückgegebene Versprechen wird abgelehnt, wenn keine anderen `logged-in` IdPs verfügbar sind.

### Was, wenn der Anmeldestatus von Browser und IdP nicht mehr übereinstimmt?

Trotz der Login Status API, die dem Browser den Anmeldestatus des IdP mitteilt, ist es möglich, dass der Browser und ein IdP nicht mehr synchron sind. Zum Beispiel könnten die IdP-Sitzungen ablaufen, sodass alle Benutzerkonten abgemeldet werden, der Anmeldestatus jedoch weiterhin auf `"logged-in"` steht (die Anwendung konnte den Anmeldestatus nicht auf `"logged-out"` setzen). In einem solchen Fall wird, wenn eine föderierte Anmeldung versucht wird, eine Anfrage an den IdP-Kontenliste-Endpunkt gestellt, jedoch werden keine verfügbaren Konten zurückgegeben, da die Sitzung nicht mehr verfügbar ist.

Wenn dies auftritt, kann der Browser dem Benutzer dynamisch ermöglichen, sich bei einem IdP anzumelden, indem er die Anmeldeseite des IdP in einem Dialog öffnet (die Anmelde-URL befindet sich in der [Konfigurationsdatei](#stellen_sie_eine_konfigurationsdatei_und_endpunkte_bereit) `login_url` des IdP). Die genaue Ausgestaltung dieses Prozesses hängt vom Browser ab; beispielsweise [behandelt Chrome dies auf diese Weise](https://privacysandbox.google.com/blog/fedcm-chrome-120-updates#what_if_the_user_session_expires_let_the_user_sign_in_through_a_dynamic_login_flow).

Sobald der Benutzer beim IdP angemeldet ist, sollte der IdP:

- Dem Browser mitteilen, dass sich der Benutzer angemeldet hat, indem der [Anmeldestatus](#anmeldestatus_festlegen) auf `"logged-in"` gesetzt wird.
- Den Anmeldedialog schließen, indem die Methode [`IdentityProvider.close()`](/de/docs/Web/API/IdentityProvider/close_static) aufgerufen wird.

## Siehe auch

- [Federated Credential Management API](https://developer.chrome.com/docs/identity/fedcm/overview) auf developer.chrome.com (2023)
