---
title: Integration des Identitätsproviders mit FedCM
slug: Web/API/FedCM_API/IDP_integration
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{DefaultAPISidebar("FedCM API")}}

Dieser Artikel beschreibt alle Schritte, die ein Identitätsprovider (IdP) unternehmen muss, um sich in die Federated Credential Management (FedCM) API zu integrieren.

## Schritte zur IdP-Integration

Um sich in FedCM zu integrieren, muss ein IdP Folgendes tun:

1. [Stellen Sie eine bekannte Datei bereit](#stellen_sie_eine_bekannte_datei_bereit), um den IdP zu identifizieren.
2. [Stellen Sie eine Konfigurationsdatei und Endpunkte bereit](#stellen_sie_eine_konfigurationsdatei_und_endpunkte_bereit) für Kontenlisten und Assertionsausstellung (und optional, Client-Metadaten).
3. [Aktualisieren Sie den Anmeldestatus](#aktualisierung_des_anmeldestatus_mit_der_anmeldestatus-api) mit der Anmeldestatus-API.

## Stellen Sie eine bekannte Datei bereit

Es gibt ein potenzielles Datenschutzproblem, bei dem ein [IdP erkennen kann, ob ein Benutzer eine RP ohne ausdrückliche Zustimmung besucht hat](https://github.com/w3c-fedid/FedCM/issues/230). Dies hat Auswirkungen auf das Tracking, daher muss ein IdP eine bekannte Datei bereitstellen, um seine Identität zu überprüfen und dieses Problem zu mindern.

Die bekannte Datei wird über eine anmeldefreie [`GET`](/de/docs/Web/HTTP/Reference/Methods/GET)-Anfrage angefordert, die keine Redirects folgt. Dies verhindert effektiv, dass der IdP erfährt, wer die Anfrage gestellt hat und welche RP versucht, sich zu verbinden.

Die bekannte Datei muss vom [eTLD+1](https://web.dev/articles/same-site-same-origin#site) des IdP unter `/.well-known/web-identity` bereitgestellt werden. Zum Beispiel, wenn die IdP-Endpunkte unter `https://accounts.idp.example/` bereitgestellt werden, müssen sie eine bekannte Datei unter `https://idp.example/.well-known/web-identity` bereitstellen. Der Inhalt der bekannten Datei sollte die folgende JSON-Struktur haben:

```json
{
  "provider_urls": ["https://accounts.idp.example/config.json"]
}
```

Das `provider_urls`-Element sollte ein Array von URLs enthalten, die auf gültige IdP-Konfigurationsdateien verweisen, die von RPs verwendet werden können, um mit dem IdP zu interagieren. Die Länge des Arrays ist derzeit auf eins begrenzt.

## Der `Sec-Fetch-Dest` HTTP-Header

Alle vom Browser via FedCM gesendeten Anfragen enthalten einen `{{httpheader("Sec-Fetch-Dest")}}: webidentity`-Header. Alle IdP-Endpunkte, die authentifizierte Anfragen erhalten (d.h. `accounts_endpoint` und `id_assertion_endpoint`), müssen bestätigen, dass dieser Header enthalten ist, um {{Glossary("CSRF", "CSRF")}}-Angriffe zu verhindern.

## Stellen Sie eine Konfigurationsdatei und Endpunkte bereit

Die IdP-Konfigurationsdatei bietet eine Liste der Endpunkte, die der Browser benötigt, um den Identitätsverbund-Ablauf zu verarbeiten und die Anmeldungen zu verwalten. Die Endpunkte müssen gleich-origin mit der Konfiguration sein.

Der Browser macht eine anmeldefreie Anfrage für die Konfigurationsdatei über die [`GET`](/de/docs/Web/HTTP/Reference/Methods/GET)-Methode, die keine Redirects folgt. Dies verhindert effektiv, dass der IdP erfährt, wer die Anfrage gestellt hat und welche RP versucht, sich zu verbinden.

Die Konfigurationsdatei (gehostet unter `https://accounts.idp.example/config.json` in unserem Beispiel) sollte die folgende JSON-Struktur haben:

```json
{
  "accounts_endpoint": "/accounts.php",
  "client_metadata_endpoint": "/client_metadata.php",
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
  - : Die URL für den Kontenlisten-Endpunkt, der eine Liste von Konten zurückgibt, bei denen der Benutzer derzeit beim IdP angemeldet ist. Der Browser verwendet diese, um eine Liste von Anmeldeoptionen zu erstellen, die dem Benutzer in der browserseitigen FedCM-UI angezeigt werden.
- `client_metadata_endpoint` {{optional_inline}}
  - : Die URL für den Client-Metadaten-Endpunkt, der URLs bereitstellt, die auf die Metadaten und Nutzungsbedingungen der RP verweisen, zur Verwendung in der FedCM-UI.
- `id_assertion_endpoint`
  - : Die URL für den ID-Assertions-Endpunkt, der bei gültigen Nutzeranmeldeinformationen mit einem Validierungstoken antworten sollte, das die RP verwenden kann, um die Authentifizierung zu validieren.
- `login_url`
  - : Die URL der Anmeldeseite für den Benutzer, um sich beim IdP anzumelden.
- `branding` {{optional_inline}}
  - : Enthält Branding-Informationen, die in der browserseitigen FedCM-UI verwendet werden, um deren Aussehen nach den Wünschen des IdP anzupassen.

Die folgende Tabelle fasst die verschiedenen Anfragen zusammen, die von der FedCM API gemacht werden:

| Endpoint/Ressource         | Methode | Authentifiziert (mit Cookies) | Beinhaltet {{httpheader("Origin")}} |
| -------------------------- | ------- | ----------------------------- | ----------------------------------- |
| `well-known`/`config.json` | `GET`   | Nein                          | Nein                                |
| `accounts_endpoint`        | `GET`   | Ja                            | Nein                                |
| `client_metadata_endpoint` | `GET`   | Nein                          | Ja                                  |
| `id_assertion_endpoint`    | `POST`  | Ja                            | Ja                                  |

> [!NOTE]
> Eine Beschreibung des FedCM-Ablaufs, in dem diese Endpunkte aufgerufen werden, finden Sie unter [FedCM-Anmeldeablauf](/de/docs/Web/API/FedCM_API/RP_sign-in#fedcm_sign-in_flow).

> [!NOTE]
> Keine der von der FedCM API an die hier beschriebenen Endpunkte gestellten Anfragen erlaubt das Folgen von Redirects, aus Datenschutzgründen.

### Der Kontenlisten-Endpunkt

Der Browser sendet authentifizierte Anfragen (d.h. mit einem Cookie, das den angemeldeten Nutzer identifiziert) an diesen Endpunkt über die `GET`-Methode. Die Anfrage hat keinen `client_id`-Parameter, keinen {{httpheader("Origin")}}-Header und keinen {{httpheader("Referer")}}-Header. Dies verhindert effektiv, dass der IdP erfährt, welche RP der Benutzer versucht, sich anzumelden. Die zurückgegebene Kontenliste ist RP-neutral.

Zum Beispiel:

```http
GET /accounts.php HTTP/1.1
Host: idp.example
Accept: application/json
Cookie: 0x23223
Sec-Fetch-Dest: webidentity
```

Die Antwort auf eine erfolgreiche Anfrage gibt eine Liste aller IdP-Konten zurück, bei denen der Benutzer derzeit angemeldet ist (nicht spezifisch für eine bestimmte RP), mit einer JSON-Struktur, die der folgenden entspricht:

```json
{
  "accounts": [
    {
      "id": "john_doe",
      "given_name": "John",
      "name": "John Doe",
      "email": "john_doe@idp.example",
      "picture": "https://idp.example/profile/123",
      "approved_clients": ["123", "456", "789"],
      "login_hints": ["john_doe", "john_doe@idp.example"]
    },
    {
      "id": "johnny",
      "given_name": "Johnny",
      "name": "Johnny",
      "email": "johnny@idp.example",
      "picture": "https://idp.example/profile/456",
      "approved_clients": ["abc", "def", "ghi"],
      "login_hints": ["johnny", "johnny@idp.example"]
    }
  ]
}
```

Dies beinhaltet folgende Informationen:

- `id`
  - : Die eindeutige ID des Benutzers.
- `name`
  - : Der Nachname des Benutzers.
- `email`
  - : Die E-Mail-Adresse des Benutzers.
- `given_name` {{optional_inline}}
  - : Der Vorname des Benutzers.
- `picture` {{optional_inline}}
  - : Die URL des Benutzer-Avatars.
- `approved_clients` {{optional_inline}}
  - : Ein Array von RP-Clients, bei denen der Benutzer registriert ist.
- `login_hints` {{optional_inline}}
  - : Ein Array von Strings, die das Konto repräsentieren. Diese Strings werden verwendet, um die Liste der Kontooptionen zu filtern, die der Browser dem Benutzer für die Anmeldung anbietet. Dies geschieht, wenn die Eigenschaft `loginHint` innerhalb von [`identity.providers`](/de/docs/Web/API/IdentityCredentialRequestOptions#providers) in einem zugehörigen `get()`-Aufruf bereitgestellt wird. Jedes Konto mit einem String in seinem `login_hints`-Array, das mit dem bereitgestellten `loginHint` übereinstimmt, wird eingeschlossen.

> [!NOTE]
> Wenn der Benutzer bei keinem IdP-Konto angemeldet ist, sollte der Endpunkt mit [HTTP 401 (Unauthorized)](/de/docs/Web/HTTP/Reference/Status/401) antworten.

### Der Client-Metadaten-Endpunkt

Der Browser sendet anmeldefreie Anfragen an diesen Endpunkt über die `GET`-Methode, wobei der `clientId` als Parameter in den `get()`-Aufruf übergeben wird.

Zum Beispiel:

```http
GET /client_metadata.php?client_id=1234 HTTP/1.1
Host: idp.example
Origin: https://rp.example/
Accept: application/json
Sec-Fetch-Dest: webidentity
```

Die Antwort auf eine erfolgreiche Anfrage beinhaltet URLs, die auf die Metadaten und Nutzungsbedingungen der RP verweist, zur Verwendung in der browserseitigen FedCM-UI. Dies sollte der unten gezeigten JSON-Struktur folgen:

```json
{
  "privacy_policy_url": "https://rp.example/privacy_policy.html",
  "terms_of_service_url": "https://rp.example/terms_of_service.html"
}
```

### Der ID-Assertions-Endpunkt

Der Browser sendet authentifizierte Anfragen an diesen Endpunkt über die [`POST`](/de/docs/Web/HTTP/Reference/Methods/POST)-Methode mit einem Content-Type von `application/x-www-form-urlencoded`. Die Anfrage enthält auch eine Nutzlast mit Details über die versuchte Anmeldung und das Konto, das validiert werden soll.

Es sollte ungefähr so aussehen:

```http
POST /assertion.php HTTP/1.1
Host: idp.example
Origin: https://rp.example/
Content-Type: application/x-www-form-urlencoded
Cookie: 0x23223
Sec-Fetch-Dest: webidentity
account_id=123&client_id=client1234&nonce=Ct60bD&disclosure_text_shown=true&is_auto_selected=true
```

Eine Anfrage an diesen Endpunkt wird gesendet, wenn der Benutzer ein Konto zur Anmeldung aus der entsprechenden Browser-UI auswählt. Wenn gültige Benutzeranmeldeinformationen gesendet werden, sollte dieser Endpunkt mit einem Validierungstoken antworten, das die RP verwenden kann, um den Benutzer auf ihrem eigenen Server zu validieren, gemäß den vom IdP, den sie für den Identitätsverbund verwenden, bereitgestellten Nutzungsanweisungen. Sobald die RP den Benutzer validiert, können sie diesen anmelden, für ihren Dienst registrieren usw.

```json
{
  "token": "***********"
}
```

Die Anfragenutzlast enthält die folgenden Parameter:

- `client_id`
  - : Die Client-ID der RP (die mit der `clientId` aus der ursprünglichen `get()`-Anfrage übereinstimmt).
- `account_id`
  - : Die eindeutige ID des Benutzerkontos, das angemeldet werden soll (die mit der `id` des Benutzers aus der Antwort des Kontenlisten-Endpunkts übereinstimmt).
- `nonce` {{optional_inline}}
  - : Die von der RP bereitgestellte Anfrage-Nonce.
- `disclosure_text_shown`
  - : Ein String von `"true"` oder `"false"`, der angibt, ob der Offenlegungstext angezeigt wurde oder nicht. Der Offenlegungstext sind die Informationen, die dem Benutzer angezeigt werden (die die Links zu den Nutzungsbedingungen und Datenschutzrichtlinien enthalten können, falls bereitgestellt), wenn der Benutzer beim IdP angemeldet ist, aber kein Konto speziell bei der aktuellen RP hat (in diesem Fall müsste er wählen, als seine IdP-Identität fortzufahren und dann ein entsprechendes Konto auf der RP zu erstellen).
- `is_auto_selected`
  - : Ein String von `"true"` oder `"false"`, der angibt, ob die Authentifizierungsvalidierungsanfrage als Ergebnis einer [automatischen Wiederanmeldung](/de/docs/Web/API/FedCM_API/RP_sign-in#auto-reauthentication) ausgegeben wurde, d.h. ohne Benutzerbeteiligung. Dies kann auftreten, wenn der [`get()`](/de/docs/Web/API/CredentialsContainer/get)-Aufruf mit einem [`mediation`](/de/docs/Web/API/CredentialsContainer/get#mediation)-Optionswert von `"optional"` oder `"silent"` ausgeführt wird. Es ist nützlich für den IdP zu wissen, ob eine automatische Wiederanmeldung stattgefunden hat, um die Leistung zu bewerten und falls höhere Sicherheit erforderlich ist. Zum Beispiel könnte der IdP einen Fehlercode zurückgeben, der der RP mitteilt, dass eine explizite Benutzerbeteiligung (`mediation="required"`) erforderlich ist.

> [!NOTE]
> Wenn der [`get()`](/de/docs/Web/API/CredentialsContainer/get)-Aufruf erfolgreich ist, wird der `is_auto_selected`-Wert auch an die RP über die [`IdentityCredential.isAutoSelected`](/de/docs/Web/API/IdentityCredential/isAutoSelected)-Eigenschaft kommuniziert.

#### CORS-Header für den ID-Assertions-Endpunkt

Die Antwort des ID-Assertions-Endpunkts muss die Header {{httpheader("Access-Control-Allow-Origin")}} und {{httpheader("Access-Control-Allow-Credentials")}} enthalten, und die `Access-Control-Allow-Origin` muss den Ursprung des Anfragenden einschließen:

```http
Access-Control-Allow-Origin: https://rp.example
Access-Control-Allow-Credentials: true
```

Beachten Sie, dass `Access-Control-Allow-Origin` auf den spezifischen Ursprung des Anfragenden (der RP) gesetzt sein muss und nicht der Platzhalterwert `*` sein kann.

Ohne diese Header wird die Anfrage mit einem Netzwerkfehler fehlschlagen.

#### Fehlermeldungen des ID-Assertions-Endpunkts

Wenn der IdP kein Token ausstellen kann — zum Beispiel, wenn der Client unautorisiert ist — wird der ID-Assertions-Endpunkt mit einer Fehlerantwort antworten, die Informationen über die Art des Fehlers enthält. Zum Beispiel:

```json
{
  "error": {
    "code": "access_denied",
    "url": "https://idp.example/error?type=access_denied"
  }
}
```

Die Felder der Fehlerantwort sind wie folgt:

- `code` {{optional_inline}}
  - : Ein String. Dies kann entweder ein bekannter Fehler aus der [OAuth 2.0 spezifischen Fehlerliste](https://datatracker.ietf.org/doc/html/rfc6749#section-4.1.2.1) oder ein willkürlicher String sein.
- `url` {{optional_inline}}
  - : Eine URL. Dies sollte eine Webseite sein, die dem Benutzer lesbare Informationen über den Fehler anzeigt, z. B. wie der Fehler behoben werden kann oder wie der Kundenservice kontaktiert werden kann. Die URL muss gleichseitig mit der Konfigurations-URL des IdP sein.

Diese Informationen können auf verschiedene Weisen verwendet werden:

- Der Browser kann dem Benutzer eine benutzerdefinierte UI anzeigen, die ihm mitteilt, was schief gelaufen ist (siehe z. B. die [Chrome-Dokumentation](https://developers.google.com/privacy-sandbox/blog/fedcm-chrome-120-updates#error-api) für ein Beispiel). Bedenken Sie, dass wenn die Anfrage fehlschlägt, weil der IdP-Server nicht verfügbar ist, er offensichtlich keine Informationen zurückgeben kann. In solchen Fällen wird der Browser dies über eine generische Nachricht berichten.
- Der zugehörige RP [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get)-Aufruf, der zur Versuchsanmeldung verwendet wurde, wird sein Versprechen mit einem `IdentityCredentialError` ablehnen, der die Fehlerinformationen enthält. Eine RP kann diesen Fehler abfangen und dann die benutzerdefinierte UI des Browsers mit einigen Informationen ergänzen, um dem Benutzer zu helfen, bei einem zukünftigen Anmeldeversuch erfolgreich zu sein.

## Aktualisierung des Anmeldestatus mit der Anmeldestatus-API

Die **Login Status API** ermöglicht es einem IdP, einem Browser seinen Anmeldestatus in diesem speziellen Browser mitzuteilen — damit ist gemeint, „ob Benutzerkonten in diesem IdP im aktuellen Browser angemeldet sind oder nicht“. Der Browser speichert diesen Status für jeden IdP; die FedCM API verwendet ihn dann, um die Anzahl der Anfragen an den IdP zu reduzieren (weil sie nicht benötigt, um Konten abzufragen, wenn keine Benutzer beim IdP angemeldet sind). Sie mindert auch [potenzielle Timing-Attacken](https://github.com/w3c-fedid/FedCM/issues/447).

Für jeden bekannten IdP (identifiziert durch seine Konfigurations-URL) behält der Browser eine Drittszustandsvariable bei, die den Anmeldestatus mit drei möglichen Werten darstellt:

- `"logged-in"`: Der IdP hat mindestens ein Benutzerkonto angemeldet. Beachten Sie, dass RP und Browser zu diesem Zeitpunkt nicht wissen, welcher Benutzer dies ist. Informationen zu bestimmten Benutzern werden zu einem späteren Zeitpunkt im FedCM-Ablauf vom [`accounts_endpoint`](#der_kontenlisten-endpunkt) des IdP zurückgegeben.
- `"logged-out"`: Alle IdP-Konten sind derzeit abgemeldet.
- `"unknown"`: Der Anmeldestatus dieses IdP ist nicht bekannt. Dies ist der Standardwert.

### Anmeldestatus setzen

Der IdP sollte seinen Anmeldestatus aktualisieren, wenn ein Benutzer sich beim IdP an- oder abmeldet. Dies kann auf zwei verschiedene Arten erfolgen:

- Der {{httpheader("Set-Login")}} HTTP-Antwort-Header kann in einer Hauptnavigation oder einer gleich-origen Subressource-Anfrage gesetzt werden:

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

### Wie sich der Anmeldestatus auf den föderierten Anmeldeablauf auswirkt

Wenn eine [RP einen föderierten Anmeldeversuch unternimmt](/de/docs/Web/API/FedCM_API/RP_sign-in), wird der Anmeldestatus überprüft:

- Wenn der Anmeldestatus `"logged-in"` ist, wird eine Anfrage an den [Kontenlisten-Endpunkt](#der_kontenlisten-endpunkt) des IdP gemacht und verfügbare Konten zur Anmeldung werden dem Benutzer im browserseitigen FedCM-Dialog angezeigt.
- Wenn der Anmeldestatus `"logged-out"` ist, lehnt das von der FedCM-`get()`-Anfrage zurückgegebene Versprechen ohne Nachfrage zum Kontenlisten-Endpunkt ab. In einem solchen Fall ist es Sache des Entwicklers, den Ablauf zu bearbeiten, zum Beispiel indem der Benutzer aufgefordert wird, sich bei einem geeigneten IdP anzumelden.
- Wenn der Anmeldestatus `"unknown"` ist, wird eine Anfrage an den Kontenlisten-Endpunkt des IdP gesendet und der Anmeldestatus wird je nach Antwort aktualisiert:
  - Wenn der Endpunkt eine Liste von verfügbaren Konten zur Anmeldung zurückgibt, aktualisieren Sie den Status auf `"logged-in"` und zeigen Sie die Anmeldeoptionen dem Benutzer im browserseitigen FedCM-Dialog an.
  - Wenn der Endpunkt keine Konten zurückgibt, aktualisieren Sie den Status auf `"logged-out"`; das von der FedCM-`get()`-Anfrage zurückgegebene Versprechen wird dann abgelehnt.

### Was passiert, wenn der Browser- und der IdP-Anmeldestatus nicht synchron sind?

Trotz der Tatsache, dass die Anmeldestatus-API den Browser über den Anmeldestatus des IdP informiert, ist es möglich, dass der Browser und der IdP nicht synchron sind. Zum Beispiel könnten die IdP-Sitzungen ablaufen, was bedeutet, dass alle Benutzerkonten abgemeldet werden, aber der Anmeldestatus immer noch auf `"logged-in"` gesetzt ist (die Anwendung konnte den Anmeldestatus nicht auf `"logged-out"` setzen). In einem solchen Fall wird, wenn ein föderierter Anmeldeversuch unternommen wird, eine Anfrage an den Kontenlisten-Endpunkt des IdP gemacht, aber keine verfügbaren Konten werden zurückgegeben, weil die Sitzung nicht mehr verfügbar ist.

Wenn dies geschieht, kann der Browser einem Benutzer dynamisch erlauben, sich beim IdP anzumelden, indem er die Anmeldeseite des IdP in einem Dialog öffnet (die Anmelde-URL ist in der [Konfigurationsdatei](#stellen_sie_eine_konfigurationsdatei_und_endpunkte_bereit) des IdP `login_url` zu finden). Der genaue Ablauf liegt im Ermessen des Browsers; zum Beispiel [Chrome behandelt es so](https://developers.google.com/privacy-sandbox/blog/fedcm-chrome-120-updates#what_if_the_user_session_expires_let_the_user_sign_in_through_a_dynamic_login_flow).

Sobald der Benutzer sich beim IdP angemeldet hat, sollte der IdP:

- Dem Browser mitteilen, dass der Benutzer sich angemeldet hat, indem [der Anmeldestatus](#anmeldestatus_setzen) auf `"logged-in"` gesetzt wird.
- Den Anmeldedialog schließen, indem die Methode [`IdentityProvider.close()`](/de/docs/Web/API/IdentityProvider/close_static) aufgerufen wird.

## Siehe auch

- [Federated Credential Management API](https://developers.google.com/privacy-sandbox/cookies/fedcm) auf developers.google.com (2023)
