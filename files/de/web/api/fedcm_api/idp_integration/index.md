---
title: Integration des Identitätsanbieters mit FedCM
slug: Web/API/FedCM_API/IDP_integration
l10n:
  sourceCommit: 9b77c8c7faabe6fd9fd428e12270290e975b8c39
---

{{DefaultAPISidebar("FedCM API")}}

Dieser Artikel beschreibt alle Schritte, die ein {{Glossary("Identity_provider", "Identitätsanbieter")}} (IdP) unternehmen muss, um sich in die Federated Credential Management (FedCM) API zu integrieren.

## Schritte zur IdP-Integration

Um sich mit FedCM zu integrieren, muss ein IdP Folgendes tun:

1. [Stellen Sie eine bekannte Datei bereit](#eine_bekannte_datei_bereitstellen), um den IdP zu identifizieren.
2. [Stellen Sie eine Konfigurationsdatei und Endpunkte bereit](#eine_konfigurationsdatei_und_endpunkte_bereitstellen) für die Kontenliste und die Erstellung von Assertions (und optional Client-Metadaten).
3. [Aktualisieren Sie den Anmeldestatus](#anmeldestatus_mit_der_login-status-api_aktualisieren) mithilfe der Login-Status-API.

## Eine bekannte Datei bereitstellen

Es gibt ein potenzielles Datenschutzproblem, bei dem ein [IdP in der Lage ist, zu erkennen, ob ein Benutzer eine relying party (RP) ohne ausdrückliche Zustimmung besucht hat](https://github.com/w3c-fedid/FedCM/issues/230). Dies hat Tracking-Implikationen, daher muss ein IdP eine bekannte Datei bereitstellen, um seine Identität zu verifizieren und dieses Problem zu entschärfen.

Die bekannte Datei wird über eine unautorisierte [`GET`](/de/docs/Web/HTTP/Reference/Methods/GET)-Anfrage angefordert, die keine Weiterleitungen verfolgt. Dadurch wird effektiv verhindert, dass der IdP erfährt, wer die Anfrage gestellt hat und welche {{Glossary("Relying_party", "RP")}} eine Verbindung herstellen möchte.

Die bekannte Datei muss vom [eTLD+1](https://web.dev/articles/same-site-same-origin#site) des IdP unter `/.well-known/web-identity` bereitgestellt werden. Zum Beispiel, wenn die IdP-Endpunkte unter `https://accounts.idp.example/` bereitgestellt werden, müssen sie eine bekannte Datei unter `https://idp.example/.well-known/web-identity` bereitstellen. Der Inhalt der bekannten Datei sollte folgende JSON-Struktur haben:

```json
{
  "provider_urls": ["https://accounts.idp.example/config.json"]
}
```

Das `provider_urls`-Element sollte ein Array von URLs enthalten, die auf gültige IdP-Konfigurationsdateien verweisen, die von RPs zur Interaktion mit dem IdP verwendet werden können. Die Array-Länge ist derzeit auf eins begrenzt.

## Der `Sec-Fetch-Dest` HTTP-Header

Alle vom Browser über FedCM gesendeten Anfragen enthalten einen `{{httpheader("Sec-Fetch-Dest")}}: webidentity`-Header. Alle IdP-Endpunkte, die Anfragen mit Anmeldeinformationen (z.B. `accounts_endpoint` und `id_assertion_endpoint`) empfangen, müssen bestätigen, dass dieser Header enthalten ist, um gegen {{Glossary("CSRF", "CSRF")}}-Angriffe zu schützen.

## Eine Konfigurationsdatei und Endpunkte bereitstellen

Die IdP-Konfigurationsdatei bietet eine Liste der Endpunkte, die der Browser benötigt, um den Identitätsföderationsfluss zu verarbeiten und die Anmeldungen zu verwalten. Die Endpunkte müssen gleich-origin mit der Konfiguration sein.

Der Browser stellt eine unautorisierte Anfrage für die Konfigurationsdatei über die [`GET`](/de/docs/Web/HTTP/Reference/Methods/GET)-Methode, die keine Weiterleitungen verfolgt. Dadurch wird effektiv verhindert, dass der IdP erfährt, wer die Anfrage gestellt hat und welche RP eine Verbindung herzustellen versucht.

Die Konfigurationsdatei (gehostet unter `https://accounts.idp.example/config.json` in unserem Beispiel) sollte folgende JSON-Struktur haben:

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
  - : Die URL für den Endpunkt der Kontenliste, der eine Liste der Konten zurückgibt, bei denen der Benutzer derzeit beim IdP angemeldet ist. Der Browser verwendet diese, um eine Liste von Anmeldeoptionen zu erstellen, die dem Benutzer in der vom Browser bereitgestellten FedCM-Benutzeroberfläche angezeigt werden.
- `account_label` {{optional_inline}}
  - : Ein String, der, wenn enthalten, eine Kennung für eine Teilmenge von Konten angibt, die zurückgegeben werden sollen, wenn dieser IdP für eine föderierte Authentifizierung verwendet wird. Wenn eine `get()`-Anfrage gestellt wird, werden nur Konten zurückgegeben, die in ihren `label_hints`-Parametern diesen String enthalten, vom [Konten-Endpunkt](#der_endpunkt_der_kontenliste).
- `supports_use_other_account` {{optional_inline}}
  - : Ein boolescher Wert, der standardmäßig `false` ist; Wenn auf `true` gesetzt, bedeutet dies, dass Benutzer sich mit einem anderen Konto anmelden können als mit dem, bei dem sie derzeit angemeldet sind (wenn der IdP mehrere Konten unterstützt). Dies gilt nur für `get()`-Aufrufe, die den [aktiven Modus](/de/docs/Web/API/IdentityCredentialRequestOptions#active) spezifizieren.
    > [!NOTE]
    > In der Anmeldeoberfläche des Browsers wird dies wahrscheinlich als eine Art "Anderes Konto wählen"-Schaltfläche dargestellt.
- `client_metadata_endpoint` {{optional_inline}}
  - : Die URL für den Endpunkt der Client-Metadaten, der URLs bereitstellt, die auf die Metadaten- und Nutzungsbedingungen-Seiten der RP verweisen, die in der FedCM-Benutzeroberfläche angezeigt werden sollen.
- `disconnect_endpoint` {{optional_inline}}
  - : Die URL für den Trennungs-Endpunkt, der von der RP verwendet wird, um die Verbindung zum IdP zu trennen, über die [`IdentityCredential.disconnect()`](/de/docs/Web/API/IdentityCredential/disconnect_static)-Methode.
- `id_assertion_endpoint`
  - : Die URL für den ID-Assertion-Endpunkt, der bei der Übermittlung gültiger Benutzeranmeldedaten mit einem Validierungstoken antworten sollte, das die RP zur Validierung der Authentifizierung verwenden kann.
- `login_url`
  - : Die Anmeldeseite-URL, über die sich der Benutzer beim IdP anmelden kann.
- `branding` {{optional_inline}}
  - : Enthält Branding-Informationen, die in der vom Browser bereitgestellten FedCM-Oberfläche verwendet werden, um das Erscheinungsbild nach den Wünschen des IdP anzupassen. Die bereitgestellte Symbolgröße muss im passiven Modus größer oder gleich `25` (`25px`) und im aktiven Modus größer oder gleich `40` (`40px`) sein (siehe [Aktiver versus passiver Modus](/de/docs/Web/API/FedCM_API/RP_sign-in#active_versus_passive_mode) für mehr Details).

Die folgende Tabelle fasst die verschiedenen Anfragen zusammen, die von der FedCM-API gestellt werden:

| Endpunkt/Ressource         | Methode | Mit Anmeldeinformationen (mit Cookies) | Beinhaltet {{httpheader("Origin")}} |
| -------------------------- | ------- | -------------------------------------- | ----------------------------------- |
| `well-known`/`config.json` | `GET`   | Nein                                   | Nein                                |
| `accounts_endpoint`        | `GET`   | Ja                                     | Nein                                |
| `client_metadata_endpoint` | `GET`   | Nein                                   | Ja                                  |
| `disconnect_endpoint`      | `POST`  | Ja                                     | Ja                                  |
| `id_assertion_endpoint`    | `POST`  | Ja                                     | Ja                                  |

> [!NOTE]
> Eine Beschreibung des FedCM-Flusses, in dem auf diese Endpunkte zugegriffen wird, finden Sie im [FedCM-Anmeldefluss](/de/docs/Web/API/FedCM_API/RP_sign-in#fedcm_sign-in_flow).

> [!NOTE]
> Keine der Anfragen, die die FedCM-API an die hier beschriebenen Endpunkte richtet, erlauben es, Weiterleitungen zu folgen, aus Datenschutzgründen.

### Der Endpunkt der Kontenliste

Der Browser sendet Anfragen mit Anmeldeinformationen (d.h. mit einem Cookie, das den Benutzer identifiziert, der angemeldet ist) an diesen Endpunkt über die `GET`-Methode. Die Anfrage hat keinen `client_id`-Parameter, {{httpheader("Origin")}}-Header oder {{httpheader("Referer")}}-Header. Dies verhindert effektiv, dass der IdP erfährt, bei welcher RP sich der Benutzer anzumelden versucht. Die zurückgegebene Liste der Konten ist RP-unabhängig.

Zum Beispiel:

```http
GET /accounts.php HTTP/1.1
Host: idp.example
Accept: application/json
Cookie: 0x23223
Sec-Fetch-Dest: webidentity
```

Die Antwort auf eine erfolgreiche Anfrage gibt eine Liste aller IdP-Konten zurück, bei denen der Benutzer derzeit angemeldet ist (nicht spezifisch für irgendeine bestimmte RP), mit einer JSON-Struktur, die der folgenden entspricht:

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

Dies umfasst die folgenden Informationen, wobei `name`, `email`, `username` und `tel` optional sind, aber mindestens eines davon muss vorhanden und nicht leer sein.

- `id`
  - : Die eindeutige ID des Benutzers.
- `name` {{optional_inline}}
  - : Der Familienname des Benutzers.
- `email` {{optional_inline}}
  - : Die E-Mail-Adresse des Benutzers.
- `tel` {{optional_inline}}
  - : Die Telefonnummer des Benutzers. Kann in jedem Format sein.
- `username` {{optional_inline}}
  - : Der Benutzername des Benutzers.
- `given_name` {{optional_inline}}
  - : Der Vorname des Benutzers.
- `picture` {{optional_inline}}
  - : Die URL des Benutzer-Avatars-Bildes.
- `approved_clients` {{optional_inline}}
  - : Ein Array von RP-Clients, bei denen der Benutzer registriert ist.
- `domain_hints` {{optional_inline}}
  - : Ein Array von Domains, mit denen das Konto verbunden ist. Die RP kann einen `get()`-Aufruf machen, der eine [`domainHint`](/de/docs/Web/API/IdentityCredentialRequestOptions#domainhint)-Eigenschaft enthält, um die zurückgegebenen Konten nach Domain zu filtern.
- `label_hints` {{optional_inline}}
  - : Ein Array von Strings, die Labels spezifizieren, die Kontotypen definieren, mit denen das Konto identifiziert ist. Wenn die Konfigurationsdatei ein [`account_label`](#account_label) spezifiziert, werden nur Konten zurückgegeben, die dieses Label in ihren `label_hints` enthalten.
- `login_hints` {{optional_inline}}
  - : Ein Array von Strings, das das Konto repräsentiert. Diese Strings werden verwendet, um die Liste der Kontenoptionen zu filtern, die der Browser für den Benutzer zur Anmeldung anbietet. Dies geschieht, wenn die `loginHint`-Eigenschaft innerhalb von [`identity.providers`](/de/docs/Web/API/IdentityCredentialRequestOptions#providers) in einem verwandten `get()`-Aufruf bereitgestellt wird. Jedes Konto mit einem String in seinem `login_hints`-Array, der dem bereitgestellten `loginHint` entspricht, wird einbezogen.

> [!NOTE]
> Wenn der Benutzer bei keinem IdP-Konto angemeldet ist, sollte der Endpunkt mit [HTTP 401 (Unauthorized)](/de/docs/Web/HTTP/Reference/Status/401) antworten.

### Der Client-Metadaten-Endpunkt

Der Browser sendet unautorisierte Anfragen an diesen Endpunkt über die `GET`-Methode, wobei der `clientId`-Parameter in den `get()`-Aufruf übergeben wird.

Zum Beispiel:

```http
GET /client_metadata.php?client_id=1234 HTTP/1.1
Host: idp.example
Origin: https://rp.example/
Accept: application/json
Sec-Fetch-Dest: webidentity
```

Die Antwort auf eine erfolgreiche Anfrage enthält URLs, die auf die Metadaten- und Nutzungsbedingungen-Seiten der RP verweisen, die in der FedCM-Benutzeroberfläche des Browsers verwendet werden sollen. Dies sollte der unten gezeigten JSON-Struktur folgen:

```json
{
  "privacy_policy_url": "https://rp.example/privacy_policy.html",
  "terms_of_service_url": "https://rp.example/terms_of_service.html"
}
```

### Der Trennungs-Endpunkt

Durch Aufrufen von [`IdentityCredential.disconnect()`](/de/docs/Web/API/IdentityCredential/disconnect_static) sendet der Browser eine {{httpmethod("POST")}}-Anfrage über Cross-Origin mit Cookies und einem {{httpheader("Content-Type")}} von `application/x-www-form-urlencoded` an den Trennungs-Endpunkt mit den folgenden Informationen:

- `account_hint`
  - : Ein String, der einen Konto-Hinweis angibt, den der IdP verwendet, um das zu trennende Konto zu identifizieren.
- `client_id`
  - : Ein String, der die Client-Identifikation der RP spezifiziert.

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

Nach Empfang der Anfrage sollte der IdP-Server:

1. Auf die Anfrage mit [CORS (Cross-Origin Resource Sharing)](/de/docs/Web/HTTP/Guides/CORS) antworten.
2. Überprüfen, dass die Anfrage einen {{httpheader("Sec-Fetch-Dest")}} HTTP-Header mit einer Anweisung von `webidentity` enthält.
3. Den {{httpheader("Origin")}}-Header gegen den RP-Ursprung abgleichen, der durch den `client_id` bestimmt wird. Die Anfrage ablehnen, wenn sie nicht übereinstimmen.
4. Das Konto finden, das dem `account_hint` entspricht.
5. Das Benutzerkonto von der Liste der verbundenen Konten der RP trennen.
6. Mit der identifizierten `account_id` des Benutzers im JSON-Format antworten:

   ```json
   {
     "account_id": "account456"
   }
   ```

> [!NOTE]
> Wenn der IdP alle mit der RP verbundenen Konten trennen möchte, kann er eine Zeichenfolge übergeben, die keiner `account_id` entspricht, zum Beispiel `"account_id": "*"`.

### Der ID-Assertion-Endpunkt

Der Browser sendet Anfragen mit Anmeldeinformationen an diesen Endpunkt über die [`POST`](/de/docs/Web/HTTP/Reference/Methods/POST)-Methode, mit einem Content-Type von `application/x-www-form-urlencoded`. Die Anfrage enthält auch ein Payload, das Details über die beabsichtigte Anmeldung und das zu validierende Konto einschließt.

Es sollte etwa so aussehen:

```http
POST /assertion.php HTTP/1.1
Host: idp.example
Origin: https://rp.example/
Content-Type: application/x-www-form-urlencoded
Cookie: 0x23223
Sec-Fetch-Dest: webidentity
account_id=123&client_id=client1234&nonce=Ct60bD&disclosure_text_shown=true&is_auto_selected=true
```

Eine Anfrage an diesen Endpunkt wird gesendet, wenn der Benutzer ein Konto auswählt, mit dem er sich über die entsprechende Browser-Benutzeroberfläche anmelden möchte. Wenn gültige Benutzeranmeldedaten gesendet werden, sollte dieser Endpunkt mit einem Validierungstoken antworten, das die RP verwenden kann, um den Benutzer auf ihrem eigenen Server zu validieren, gemäß den Benutzungsanweisungen, die der IdP für die Identitätsföderation bereitstellt. Sobald die RP den Benutzer validiert, kann sie ihn anmelden oder zu ihrem Dienst registrieren.

```json
{
  "token": "***********"
}
```

Das Anfragen-Payload enthält die folgenden Parameter:

- `client_id`
  - : Die Client-Identifikation der RP (die der `clientId` aus der ursprünglichen `get()`-Anfrage entspricht).
- `account_id`
  - : Die eindeutige ID des Benutzerkontos, das angemeldet werden soll (die der `id` des Benutzers aus der Antwort des Endpunktes der Kontenliste entspricht).
- `nonce` {{optional_inline}}
  - : Die Anfragen-Nonce, bereitgestellt von der RP.
- `disclosure_text_shown`
  - : Ein String von `"true"` oder `"false"`, der angibt, ob der Zustimmungstext angezeigt wurde oder nicht. Der Zustimmungstext ist die dem Benutzer gezeigte Information (die die Links zu den Nutzungsbedingungen und Datenschutzrichtlinien enthalten kann, falls bereitgestellt), wenn der Benutzer beim IdP angemeldet ist, aber kein Konto speziell auf der aktuellen RP hat (in welchem Fall er sich entscheiden müsste, "Fortfahren als..." seine IdP-Identität zu wählen und dann ein entsprechendes Konto auf der RP zu erstellen).
- `is_auto_selected`
  - : Ein String von `"true"` oder `"false"`, der angibt, ob die Validierungsanfrage der Authentifizierung ohne Benutzermediation als Ergebnis der [Automatischen Neuauthentifizierung](/de/docs/Web/API/FedCM_API/RP_sign-in#auto-reauthentication) ausgegeben wurde, d.h. ohne Benutzerintervention. Dies kann auftreten, wenn der [`get()`](/de/docs/Web/API/CredentialsContainer/get)-Aufruf mit einer [`mediation`](/de/docs/Web/API/CredentialsContainer/get#mediation)-Optionswert von `"optional"` oder `"silent"` ausgegeben wird. Es ist nützlich für den IdP zu wissen, ob eine automatische Neuauthentifizierung stattgefunden hat, sowohl zur Bewertung der Leistung als auch für den Fall, dass höhere Sicherheit gewünscht wird. Der IdP könnte beispielsweise einen Fehlercode zurückgeben, der der RP mitteilt, dass eine explizite Benutzermediation erforderlich ist (`mediation="required"`).

> [!NOTE]
> Wenn der [`get()`](/de/docs/Web/API/CredentialsContainer/get)-Aufruf erfolgreich ist, wird der `is_auto_selected`-Wert auch der RP über die [`IdentityCredential.isAutoSelected`](/de/docs/Web/API/IdentityCredential/isAutoSelected)-Eigenschaft kommuniziert.

#### CORS-Header für den ID-Assertion-Endpunkt

Die Antwort des ID-Assertion-Endpunkts muss die {{httpheader("Access-Control-Allow-Origin")}} und {{httpheader("Access-Control-Allow-Credentials")}} Header enthalten, und die `Access-Control-Allow-Origin` muss den Ursprung des Anfragestellers einschließen:

```http
Access-Control-Allow-Origin: https://rp.example
Access-Control-Allow-Credentials: true
```

Beachten Sie, dass `Access-Control-Allow-Origin` auf den speziellen Ursprung des Anfragestellers (der RP) gesetzt werden muss und nicht der Platzhalterwert `*` sein kann.

Ohne diese Header schlägt die Anfrage mit einem Netzwerkfehler fehl.

#### Fehlerantworten des ID-Assertion-Endpunkts

Wenn der IdP kein Token ausgeben kann — zum Beispiel, wenn der Client nicht autorisiert ist — wird der ID-Assertion-Endpunkt mit einer Fehlerantwort antworten, die Informationen über die Art des Fehlers enthält. Zum Beispiel:

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
  - : Ein String. Dies kann entweder ein bekannter Fehler aus der [OAuth 2.0-spezifizierten Fehlerliste](https://datatracker.ietf.org/doc/html/rfc6749#section-4.1.2.1) oder ein beliebiger String sein.
- `url` {{optional_inline}}
  - : Eine URL. Dies sollte eine Webseite sein, die benutzerfreundliche Informationen über den Fehler enthält, um sie den Benutzern anzuzeigen, wie z.B. wie der Fehler behoben werden kann oder wie der Kundendienst kontaktiert werden kann. Die URL muss gleichseitig mit der Konfigurations-URL des IdP sein.

Diese Informationen können auf verschiedene Weise verwendet werden:

- Der Browser kann dem Benutzer eine benutzerdefinierte Benutzeroberfläche anzeigen, die ihm mitteilt, was schiefgelaufen ist (siehe die [Chrome-Dokumentation](https://privacysandbox.google.com/blog/fedcm-chrome-120-updates#error-api) für ein Beispiel). Beachten Sie, dass, wenn die Anfrage fehlgeschlagen ist, weil der IdP-Server nicht verfügbar ist, er offensichtlich keine Informationen zurückgeben kann. In solchen Fällen meldet der Browser dies über eine generische Nachricht.
- Der assoziierte RP [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get)-Aufruf, der verwendet wurde, um die Anmeldung zu versuchen, wird sein Versprechen mit einem [`IdentityCredentialError`](/de/docs/Web/API/IdentityCredentialError) ablehnen, das die Fehlerinformationen enthält. Eine RP kann diesen Fehler abfangen und dann der benutzerdefinierten Benutzeroberfläche des Browsers einige Informationen hinzufügen, um dem Benutzer zu helfen, bei einem zukünftigen Anmeldeversuch erfolgreich zu sein.

## Anmeldestatus mit der Login-Status-API aktualisieren

Die **Login-Status-API** ermöglicht es einem IdP, einem Browser über den Anmeldestatus (Login-Status) in diesem speziellen Browser zu informieren — damit meinen wir "ob Benutzer beim IdP im aktuellen Browser angemeldet sind oder nicht". Der Browser speichert diesen Status für jeden IdP; die FedCM-API verwendet ihn dann, um die Anzahl der Anfragen an den IdP zu reduzieren (da es nicht notwendig ist, nach Konten zu fragen, wenn keine Benutzer beim IdP angemeldet sind). Es mildert auch [potenzielle Timing-Attacken](https://github.com/w3c-fedid/FedCM/issues/447).

Für jeden bekannten IdP (identifiziert durch seine Konfigurations-URL) hält der Browser eine Drei-Zustands-Variable, die den Anmeldestatus mit drei möglichen Werten repräsentiert:

- `"logged-in"`: Der IdP hat mindestens ein Benutzerkonto angemeldet. Beachten Sie, dass in diesem Stadium weder die RP noch der Browser wissen, welcher Benutzer das ist. Informationen zu spezifischen Benutzern werden zu einem späteren Zeitpunkt im FedCM-Fluss vom [`accounts_endpoint`](#der_endpunkt_der_kontenliste) des IdP zurückgegeben.
- `"logged-out"`: Alle IdP-Konten sind derzeit abgemeldet.
- `"unknown"`: Der Anmeldestatus dieses IdP ist nicht bekannt. Dies ist der Standardwert.

### Anmeldestatus setzen

Der IdP sollte seinen Anmeldestatus aktualisieren, wenn sich ein Benutzer beim IdP anmeldet oder abmeldet. Dies kann auf zwei verschiedene Arten erfolgen:

- Der {{httpheader("Set-Login")}} HTTP-Antwort-Header kann bei einer obersten Navigationsebene oder einer gleich-origin Subressourcen-Anfrage gesetzt werden:

  ```http
  Set-Login: logged-in

  Set-Login: logged-out
  ```

- Die [`Navigator.login.setStatus()`](/de/docs/Web/API/NavigatorLogin/setStatus)-Methode kann vom IdP-Ursprung aus aufgerufen werden:

  ```js
  /* Set logged-in status */
  navigator.login.setStatus("logged-in");

  /* Set logged-out status */
  navigator.login.setStatus("logged-out");
  ```

### Wie sich der Anmeldestatus auf den föderierten Anmeldefluss auswirkt

Wenn eine [RP versucht, sich föderiert anzumelden](/de/docs/Web/API/FedCM_API/RP_sign-in), wird der Anmeldestatus überprüft:

- Wenn der Anmeldestatus eines IdP `"logged-in"` ist, wird eine Anfrage an den [Konten-Endpunkt](#der_endpunkt_der_kontenliste) gestellt und verfügbare Konten für die Anmeldung werden dem Benutzer im FedCM-Dialog des Browsers angezeigt.
- Wenn alle IdP-Anmeldestatus `"logged-out"` sind, lehnt das von der FedCM `get()`-Anfrage zurückgegebene Versprechen ab, ohne eine Anfrage an den Konten-Endpunkt zu stellen. In einem solchen Fall liegt es am Entwickler, den Fluss zu handhaben, z.B. indem der Benutzer aufgefordert wird, sich bei einem geeigneten IdP anzumelden.
- Wenn der Anmeldestatus eines IdP `"unknown"` ist, wird eine Anfrage an den Konten-Endpunkt gestellt und der Anmeldestatus abhängig von der Antwort aktualisiert:
  - Wenn der Endpunkt eine Liste verfügbarer Konten für die Anmeldung zurückgibt, aktualisieren Sie den Status auf `"logged-in"` und zeigen die Anmeldeoptionen im FedCM-Dialog des Browsers an.
  - Wenn der Endpunkt keine Konten zurückgibt, aktualisieren Sie den Status auf `"logged-out"`; das von dem FedCM `get()`-Anfrage zurückgegebene Versprechen wird ablehnen, wenn keine anderen `logged-in` IdPs verfügbar sind.

### Was passiert, wenn der Browser und der IdP-Anmeldestatus nicht synchron sind?

Trotz der Tatsache, dass die Login-Status-API den Browser über den IdP-Anmeldestatus informiert, ist es möglich, dass der Browser und ein IdP nicht synchron sind. Zum Beispiel könnten die IdP-Sitzungen ablaufen, wodurch alle Benutzerkonten abgemeldet werden, aber der Anmeldestatus bleibt auf `"logged-in"` gesetzt (die Anwendung konnte den Anmeldestatus nicht auf `"logged-out"` setzen). In einem solchen Fall, wenn eine föderierte Anmeldung versucht wird, wird eine Anfrage an den Konten-Endpunkt des IdP gestellt, aber keine verfügbaren Konten werden zurückgegeben, da die Sitzung nicht mehr verfügbar ist.

Wenn dies passiert, kann der Browser einem Benutzer dynamisch erlauben, sich bei einem IdP anzumelden, indem er die Anmeldeseite des IdP in einem Dialog öffnet (die Anmeldeseite-URL wird in der [Konfigurationsdatei](#eine_konfigurationsdatei_und_endpunkte_bereitstellen) `login_url` des IdP gefunden). Die genaue Art dieses Flusses liegt im Ermessen des Browsers; zum Beispiel [handhabt Chrome es so](https://privacysandbox.google.com/blog/fedcm-chrome-120-updates#what_if_the_user_session_expires_let_the_user_sign_in_through_a_dynamic_login_flow).

Sobald der Benutzer beim IdP angemeldet ist, sollte der IdP:

- Den Browser informieren, dass sich der Benutzer angemeldet hat, indem er [den Anmeldestatus](#anmeldestatus_setzen) auf `"logged-in"` setzt.
- Den Anmeldedialog schließen, indem die [`IdentityProvider.close()`](/de/docs/Web/API/IdentityProvider/close_static)-Methode aufgerufen wird.

## Siehe auch

- [Federated Credential Management API](https://privacysandbox.google.com/cookies/fedcm) auf privacysandbox.google.com (2023)
