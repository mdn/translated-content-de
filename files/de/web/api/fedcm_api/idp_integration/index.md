---
title: Integration des Identitätsanbieters mit FedCM
slug: Web/API/FedCM_API/IDP_integration
l10n:
  sourceCommit: a6c32a2d0add510c95ef74e85bd8e17551d508b6
---

{{DefaultAPISidebar("FedCM API")}}

Dieser Artikel beschreibt alle Schritte, die ein Identitätsanbieter (IdP) unternehmen muss, um sich mit der Federated Credential Management (FedCM) API zu integrieren.

## Schritte zur IdP-Integration

Um sich mit FedCM zu integrieren, muss ein IdP Folgendes tun:

1. [Stellen Sie eine bekannte Datei zur Verfügung](#bereitstellen_einer_bekannten_datei), um den IdP zu identifizieren.
2. [Stellen Sie eine Konfigurationsdatei und Endpunkte bereit](#bereitstellung_einer_konfigurationsdatei_und_endpunkte) für die Kontenliste und die Behauptungsausstellung (und optional, Client-Metadaten).
3. [Aktualisieren Sie den Anmeldestatus](#aktualisieren_des_anmeldestatus_mit_der_anmeldestatus-api) mithilfe der Login Status API.

## Bereitstellen einer bekannten Datei

Es gibt ein potenzielles Datenschutzproblem, bei dem ein [IdP erkennen kann, ob ein Nutzer ohne ausdrückliche Zustimmung eine RP besucht hat](https://github.com/w3c-fedid/FedCM/issues/230). Dieses hat Tracking-Auswirkungen, daher muss ein IdP eine gut bekannte Datei bereitstellen, um seine Identität zu verifizieren und dieses Problem zu mildern.

Die gut bekannte Datei wird über eine unberechtigte [`GET`](/de/docs/Web/HTTP/Reference/Methods/GET)-Anfrage angefordert, die keine Weiterleitungen folgt. Dadurch wird effektiv verhindert, dass der IdP erfährt, wer die Anfrage gestellt hat und welche RP versucht, sich zu verbinden.

Die gut bekannte Datei muss von der [eTLD+1](https://web.dev/articles/same-site-same-origin#site) des IdP unter `/.well-known/web-identity` bereitgestellt werden. Beispielsweise, wenn die IdP-Endpunkte unter `https://accounts.idp.example/` bereitgestellt werden, müssen sie eine gut bekannte Datei unter `https://idp.example/.well-known/web-identity` bereitstellen. Der Inhalt der gut bekannten Datei sollte die folgende JSON-Struktur haben:

```json
{
  "provider_urls": ["https://accounts.idp.example/config.json"]
}
```

Das `provider_urls`-Element sollte ein Array von URLs enthalten, die auf gültige IdP-Konfigurationsdateien verweisen, die von RPs zur Interaktion mit dem IdP verwendet werden können. Die Länge des Arrays ist derzeit auf eins beschränkt.

## Der HTTP-Header `Sec-Fetch-Dest`

Alle über FedCM vom Browser gesendeten Anfragen enthalten einen `{{httpheader("Sec-Fetch-Dest")}}: webidentity` Header. Alle IdP-Endpunkte, die berechtigte Anfragen (d.h. `accounts_endpoint` und `id_assertion_endpoint`) erhalten, müssen diesen Header bestätigen, um sich gegen {{Glossary("CSRF", "CSRF")}}-Angriffe zu schützen.

## Bereitstellung einer Konfigurationsdatei und Endpunkte

Die IdP-Konfigurationsdatei bietet eine Liste der Endpunkte, die der Browser benötigt, um den Identitätsföderationsfluss zu verarbeiten und die Anmeldungen zu verwalten. Die Endpunkte müssen dasselbe Origin wie die Konfiguration haben.

Der Browser stellt über die [`GET`](/de/docs/Web/HTTP/Reference/Methods/GET)-Methode eine unberechtigte Anfrage für die Konfigurationsdatei, die keine Weiterleitungen folgt. Dies verhindert effektiv, dass der IdP erfährt, wer die Anfrage gestellt hat und welche RP versucht, sich zu verbinden.

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
  - : Die URL für den Kontenlisten-Endpunkt, die eine Liste der Konten zurückgibt, bei denen der Nutzer aktuell beim IdP angemeldet ist. Der Browser verwendet diese, um eine Liste von Anmeldeoptionen zu erstellen, die dem Nutzer in der vom Browser bereitgestellten FedCM-Benutzeroberfläche angezeigt werden.
- `client_metadata_endpoint` {{optional_inline}}
  - : Die URL für den Client-Metadaten-Endpunkt, der URLs bereitstellt, die auf die Metadaten- und Servicebedingungsseiten von RP verweisen, die in der FedCM-Benutzeroberfläche verwendet werden.
- `id_assertion_endpoint`
  - : Die URL für den ID-Behauptungs-Endpunkt, der bei Empfang gültiger Nutzeranmeldeinformationen mit einem Validierungstoken antworten sollte, das die RP zur Validierung der Authentifizierung verwenden kann.
- `login_url`
  - : Die URL der Anmeldeseite, damit der Nutzer sich beim IdP anmelden kann.
- `branding` {{optional_inline}}
  - : Beinhaltet Branding-Informationen, die in der vom Browser bereitgestellten FedCM-Benutzeroberfläche verwendet werden, um ihr Aussehen nach den Wünschen des IdP anzupassen.

Die folgende Tabelle fasst die verschiedenen Anfragen zusammen, die von der FedCM API gestellt werden:

| Endpunkt/Ressource         | Methode | Berechtigt (mit Cookies) | Beinhaltet {{httpheader("Origin")}} |
| -------------------------- | ------- | ------------------------ | ----------------------------------- |
| `well-known`/`config.json` | `GET`   | Nein                     | Nein                                |
| `accounts_endpoint`        | `GET`   | Ja                       | Nein                                |
| `client_metadata_endpoint` | `GET`   | Nein                     | Ja                                  |
| `id_assertion_endpoint`    | `POST`  | Ja                       | Ja                                  |

> [!NOTE]
> Eine Beschreibung des FedCM-Flusses, in dem auf diese Endpunkte zugegriffen wird, finden Sie im [FedCM-Anmeldefluss](/de/docs/Web/API/FedCM_API/RP_sign-in#fedcm_sign-in_flow).

> [!NOTE]
> Keine der von der FedCM API an die hier beschriebenen Endpunkte gestellten Anfragen erlaubt das Folgen von Weiterleitungen, aus Datenschutzgründen.

### Der Kontenlisten-Endpunkt

Der Browser sendet berechtigte Anfragen (d.h. mit einem Cookie, das den Nutzer identifiziert, der angemeldet ist) über die `GET`-Methode an diesen Endpunkt. Die Anfrage hat keinen `client_id`-Parameter, {{httpheader("Origin")}}-Header oder {{httpheader("Referer")}}-Header. Dadurch wird effektiv verhindert, dass der IdP erfährt, zu welcher RP der Nutzer sich anmelden möchte. Die zurückgegebene Liste der Konten ist RP-agnostisch.

Beispiel:

```http
GET /accounts.php HTTP/1.1
Host: idp.example
Accept: application/json
Cookie: 0x23223
Sec-Fetch-Dest: webidentity
```

Die Antwort auf eine erfolgreiche Anfrage liefert eine Liste aller IdP-Konten, bei denen der Nutzer derzeit angemeldet ist (nicht spezifisch für eine bestimmte RP), mit einer JSON-Struktur, die der folgenden entspricht:

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

Dies beinhaltet die folgenden Informationen:

- `id`
  - : Die eindeutige ID des Nutzers.
- `name`
  - : Der Nachname des Nutzers.
- `email`
  - : Die E-Mail-Adresse des Nutzers.
- `given_name` {{optional_inline}}
  - : Der Vorname des Nutzers.
- `picture` {{optional_inline}}
  - : Die URL des Avatarbildes des Nutzers.
- `approved_clients` {{optional_inline}}
  - : Ein Array von RP-Clients, bei denen sich der Nutzer registriert hat.
- `login_hints` {{optional_inline}}
  - : Ein Array von Zeichenfolgen, die das Konto darstellen. Diese Zeichenfolgen werden verwendet, um die Liste der Kontooptionen zu filtern, die der Browser dem Nutzer zur Anmeldung bietet. Dies geschieht, wenn die `loginHint`-Eigenschaft innerhalb von [`identity.providers`](/de/docs/Web/API/IdentityCredentialRequestOptions#providers) in einem zugehörigen `get()`-Aufruf bereitgestellt wird. Jedes Konto mit einer Zeichenfolge in seinem `login_hints`-Array, die mit dem bereitgestellten `loginHint` übereinstimmt, wird einbezogen.

> [!NOTE]
> Wenn der Nutzer bei keinem IdP-Konto angemeldet ist, sollte der Endpunkt mit [HTTP 401 (Nicht autorisiert)](/de/docs/Web/HTTP/Reference/Status/401) antworten.

### Der Client-Metadaten-Endpunkt

Der Browser sendet unberechtigte Anfragen an diesen Endpunkt über die `GET`-Methode, wobei der `clientId` im `get()`-Aufruf als Parameter übergeben wird.

Beispiel:

```http
GET /client_metadata.php?client_id=1234 HTTP/1.1
Host: idp.example
Origin: https://rp.example/
Accept: application/json
Sec-Fetch-Dest: webidentity
```

Die Antwort auf eine erfolgreiche Anfrage beinhaltet URLs, die auf die Metadaten- und Servicebedingungsseiten der RP verweisen, die in der vom Browser bereitgestellten FedCM-Benutzeroberfläche verwendet werden. Diese sollte der folgenden JSON-Struktur entsprechen:

```json
{
  "privacy_policy_url": "https://rp.example/privacy_policy.html",
  "terms_of_service_url": "https://rp.example/terms_of_service.html"
}
```

### Der ID-Behauptungs-Endpunkt

Der Browser sendet berechtigte Anfragen an diesen Endpunkt über die [`POST`](/de/docs/Web/HTTP/Reference/Methods/POST)-Methode mit einem Inhaltstyp von `application/x-www-form-urlencoded`. Die Anfrage enthält auch eine Nutzlast mit Details zur versuchten Anmeldung und dem zu validierenden Konto.

Das sollte in etwa so aussehen:

```http
POST /assertion.php HTTP/1.1
Host: idp.example
Origin: https://rp.example/
Content-Type: application/x-www-form-urlencoded
Cookie: 0x23223
Sec-Fetch-Dest: webidentity
account_id=123&client_id=client1234&nonce=Ct60bD&disclosure_text_shown=true&is_auto_selected=true
```

Eine Anfrage an diesen Endpunkt wird als Ergebnis der Auswahl eines Kontos zur Anmeldung durch den Nutzer in der relevanten Browser-Benutzeroberfläche gesendet. Bei Empfang gültiger Nutzeranmeldeinformationen sollte dieser Endpunkt mit einem Validierungstoken antworten, das die RP verwenden kann, um den Nutzer auf ihrem eigenen Server zu validieren, gemäß den vom IdP angerissenen Nutzungshinweisen für die Identitätsföderation. Sobald die RP den Nutzer validiert hat, kann der Nutzer sich anmelden, sich für den Dienst registrieren, usw.

```json
{
  "token": "***********"
}
```

Die Anfrage-Payload enthält die folgenden Parameter:

- `client_id`
  - : Die Client-ID der RP (die mit der `clientId` aus der ursprünglichen `get()`-Anfrage übereinstimmt).
- `account_id`
  - : Die eindeutige ID des Nutzerkontos, das angemeldet werden soll (die mit der `id` des Nutzers aus der Kontenlisten-Endpunktantwort übereinstimmt).
- `nonce` {{optional_inline}}
  - : Der von der RP bereitgestellte Anfragenonce.
- `disclosure_text_shown`
  - : Eine Zeichenfolge von `"true"` oder `"false"`, die angibt, ob der Offenlegungstext angezeigt wurde oder nicht. Der Offenlegungstext sind die Informationen, die dem Nutzer angezeigt werden (die Links zu den Nutzungsbedingungen und Datenschutzrichtlinien enthalten können, falls bereitgestellt), wenn der Nutzer beim IdP angemeldet ist, aber kein spezifisches Konto auf der aktuellen RP hat (in welchem Fall er sich entscheiden müsste, mit seiner IdP-Identität "fortzufahren" und dann ein entsprechendes Konto auf der RP zu erstellen).
- `is_auto_selected`
  - : Eine Zeichenfolge von `"true"` oder `"false"`, die angibt, ob die Authentifizierungsvalidierungsanfrage als Ergebnis einer [automatischen Wiederanmeldung](/de/docs/Web/API/FedCM_API/RP_sign-in#auto-reauthentication) erfolgt ist, d.h. ohne Benutzermediation. Dies kann passieren, wenn der [`get()`](/de/docs/Web/API/CredentialsContainer/get)-Aufruf mit einer [`mediation`](/de/docs/Web/API/CredentialsContainer/get#mediation)-Optionswert von `"optional"` oder `"silent"` ausgeführt wird. Es ist nützlich für den IdP zu wissen, ob eine automatische Wiederanmeldung für die Leistungsbewertung aufgetreten ist und falls eine höhere Sicherheit gewünscht wird. Zum Beispiel könnte der IdP einen Fehlercode zurückgeben, der der RP mitteilt, dass eine explizite Benutzermediation erforderlich ist (`mediation="required"`).

> [!NOTE]
> Wenn der [`get()`](/de/docs/Web/API/CredentialsContainer/get)-Aufruf erfolgreich ist, wird der `is_auto_selected`-Wert auch über die [`IdentityCredential.isAutoSelected`](/de/docs/Web/API/IdentityCredential/isAutoSelected)-Eigenschaft an die RP kommuniziert.

#### CORS-Header für den ID-Behauptung-Endpunkt

Die Antwort des ID-Behauptungs-Endpunkts muss die {{httpheader("Access-Control-Allow-Origin")}} und {{httpheader("Access-Control-Allow-Credentials")}} Header enthalten, und `Access-Control-Allow-Origin` muss das Ursprungsort des Anfragestellers enthalten:

```http
Access-Control-Allow-Origin: https://rp.example
Access-Control-Allow-Credentials: true
```

Beachten Sie, dass `Access-Control-Allow-Origin` auf den spezifischen Ursprungsort des Anfragestellers (die RP) gesetzt sein muss und nicht der Platzhalterwert `*` sein kann.

Ohne diese Header schlägt die Anfrage mit einem Netzwerkfehler fehl.

#### Fehlerantworten des ID-Behauptungs-Endpunkts

Wenn der IdP kein Token ausgeben kann — z.B. wenn der Client nicht autorisiert ist — antwortet der ID-Behauptungs-Endpunkt mit einer Fehlermeldung, die Informationen über die Art des Fehlers enthält. Zum Beispiel:

```json
{
  "error": {
    "code": "access_denied",
    "url": "https://idp.example/error?type=access_denied"
  }
}
```

Die Felder der Fehlermeldung sind wie folgt:

- `code` {{optional_inline}}
  - : Eine Zeichenfolge. Dies kann entweder ein bekannter Fehler aus der festgelegten Fehlerliste [OAuth 2.0](https://datatracker.ietf.org/doc/html/rfc6749#section-4.1.2.1) oder eine beliebige Zeichenfolge sein.
- `url` {{optional_inline}}
  - : Eine URL. Diese sollte eine Webseite sein, die lesbare Informationen über den Fehler enthält, um sie den Nutzern anzuzeigen, wie z.B. wie der Fehler behoben werden kann oder wie der Kunde kontaktiert wird. Die URL muss im gleichen Standort wie die Konfigurations-URL des IdP liegen.

Diese Informationen können auf verschiedene Arten verwendet werden:

- Der Browser kann eine benutzerdefinierte Benutzeroberfläche anzeigen, die den Nutzer darüber informiert, was schiefgelaufen ist (siehe die [Chrome-Dokumentation](https://privacysandbox.google.com/blog/fedcm-chrome-120-updates#error-api) für ein Beispiel). Beachten Sie, dass, wenn die Anfrage fehlschlägt, weil der IdP-Server nicht verfügbar ist, dieser offensichtlich keine Informationen zurückgeben kann. In solchen Fällen wird der Browser dies über eine allgemeine Nachricht melden.
- Der zugehörige RP [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get)-Aufruf, der zur Anmeldungsmöglichkeit verwendet wird, wird sein Versprechen mit einem `IdentityCredentialError`, das die Fehlerinformationen enthält, ablehnen. Eine RP kann diesen Fehler abfangen und dann die benutzerdefinierte Benutzeroberfläche des Browsers mit Informationen ergänzen, die dem Nutzer helfen, bei einer zukünftigen Anmeldeversuch Erfolg zu haben.

## Aktualisieren des Anmeldestatus mit der Anmeldestatus-API

Die **Anmeldestatus-API** erlaubt es einem IdP, einen Browser über seinen Anmeldestatus (Sign-in-Status) in diesem speziellen Browser zu informieren – damit meinen wir "ob irgendein Nutzer beim IdP im aktuellen Browser angemeldet ist oder nicht". Der Browser speichert diesen Zustand für jeden IdP; die FedCM API verwendet ihn dann, um die Anzahl der Anfragen zu reduzieren, die sie an den IdP stellt (weil keine Zeit verschwendet werden muss, um Konten anzufordern, wenn keine Nutzer beim IdP angemeldet sind). Sie mildert auch [mögliche Zeitangriffe](https://github.com/w3c-fedid/FedCM/issues/447).

Für jeden bekannten IdP (identifiziert durch seine Konfigurations-URL) speichert der Browser eine Tri-State-Variable, die den Anmeldestatus mit drei möglichen Werten darstellt:

- `"logged-in"`: Der IdP hat mindestens ein angemeldetes Nutzerkonto. Beachten Sie, dass die RP und der Browser zu diesem Zeitpunkt noch nicht wissen, welcher Nutzer das ist. Informationen zu spezifischen Nutzern werden zu einem späteren Zeitpunkt im FedCM-Fluss vom [`accounts_endpoint`](#der_kontenlisten-endpunkt) des IdP zurückgegeben.
- `"logged-out"`: Alle IdP-Konten sind derzeit abgemeldet.
- `"unknown"`: Der Anmeldestatus dieses IdP ist nicht bekannt. Dies ist der Standardwert.

### Anmeldenstatus setzen

Der IdP sollte seinen Anmeldestatus aktualisieren, wenn ein Nutzer sich beim IdP anmeldet oder abmeldet. Dies kann auf zwei verschiedene Weisen geschehen:

- Der {{httpheader("Set-Login")}} HTTP-Antwort-Header kann in einer Top-Level-Navigation oder einer gleich-origin Subressourcen-Anfrage gesetzt werden:

  ```http
  Set-Login: logged-in

  Set-Login: logged-out
  ```

- Die Methode [`Navigator.login.setStatus()`](/de/docs/Web/API/NavigatorLogin/setStatus) kann vom IdP-Ursprung aufgerufen werden:

  ```js
  /* Set logged-in status */
  navigator.login.setStatus("logged-in");

  /* Set logged-out status */
  navigator.login.setStatus("logged-out");
  ```

### Wie der Anmeldestatus den föderierten Anmeldefluss beeinflusst

Wenn eine [RP einen föderierten Anmeldeversuch unternimmt](/de/docs/Web/API/FedCM_API/RP_sign-in), wird der Anmeldestatus überprüft:

- Wenn der Anmeldestatus `"logged-in"` ist, wird eine Anfrage an den [Kontenlisten-Endpunkt](#der_kontenlisten-endpunkt) des IdP gestellt und verfügbare Konten zur Anmeldung werden dem Nutzer im vom Browser bereitgestellten FedCM-Dialog angezeigt.
- Wenn der Anmeldestatus `"logged-out"` ist, lehnt das von der FedCM `get()`-Anfrage zurückgegebene Versprechen ab, ohne eine Anfrage an den Kontenlisten-Endpunkt zu stellen. In einem solchen Fall ist es Aufgabe des Entwicklers, den Fluss zu handhaben, z.B. indem der Nutzer aufgefordert wird, sich bei einem geeigneten IdP anzumelden.
- Wenn der Anmeldestatus `"unknown"` ist, wird eine Anfrage an den Kontenlisten-Endpunkt des IdP gestellt und der Anmeldestatus wird je nach Antwort aktualisiert:
  - Wenn der Endpunkt eine Liste der verfügbaren Konten zur Anmeldung zurückgibt, aktualisieren Sie den Status auf `"logged-in"` und zeigen die Anmeldeoptionen dem Nutzer im vom Browser bereitgestellten FedCM-Dialog an.
  - Wenn der Endpunkt keine Konten zurückgibt, aktualisieren Sie den Status auf `"logged-out"`; das von der FedCM `get()`-Anfrage zurückgegebene Versprechen lehnt dann ab.

### Was passiert, wenn der Browser und der IdP-Anmeldestatus nicht synchron sind?

Trotz der Anmeldestatus-API, die den Browser über den Anmeldestatus des IdP informiert, ist es möglich, dass der Browser und der IdP nicht mehr synchron sind. Zum Beispiel können die IdP-Sitzungen ablaufen, was bedeutet, dass alle Nutzerkonten abgemeldet sind, aber der Anmeldestatus immer noch als `"logged-in"` gesetzt ist (die Anwendung konnte den Anmeldestatus nicht auf `"logged-out"` setzen). In einem solchen Fall, wenn ein föderierter Anmeldeversuch unternommen wird, wird eine Anfrage an den Kontenlisten-Endpunkt des IdP gestellt, aber keine verfügbaren Konten werden zurückgegeben, weil die Sitzung nicht mehr verfügbar ist.

Wenn dies geschieht, kann der Browser dynamisch einen Nutzer bei dem IdP anmelden, indem er die Anmeldeseite des IdP in einem Dialog öffnet (die Anmelde-URL befindet sich in der [Konfigurationsdatei des IdP](#bereitstellung_einer_konfigurationsdatei_und_endpunkte) `login_url`). Der genaue Ablauf dieses Flusses liegt beim Browser; zum Beispiel [handhabt Chrome es so](https://privacysandbox.google.com/blog/fedcm-chrome-120-updates#what_if_the_user_session_expires_let_the_user_sign_in_through_a_dynamic_login_flow).

Sobald der Nutzer beim IdP angemeldet ist, sollte der IdP:

- Dem Browser mitteilen, dass der Nutzer angemeldet ist, indem er den [Anmeldestatus aktualisiert](#anmeldenstatus_setzen) zu `"logged-in"`.
- Den Anmeldedialog schließen, indem er die Methode [`IdentityProvider.close()`](/de/docs/Web/API/IdentityProvider/close_static) aufruft.

## Siehe auch

- [Federated Credential Management API](https://privacysandbox.google.com/cookies/fedcm) auf privacysandbox.google.com (2023)
