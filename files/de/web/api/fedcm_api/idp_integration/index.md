---
title: Integration des Identitätsanbieters mit FedCM
slug: Web/API/FedCM_API/IDP_integration
l10n:
  sourceCommit: 515d03ad8572b96e88916888156444626dcba193
---

{{DefaultAPISidebar("FedCM API")}}

Dieser Artikel beschreibt alle Schritte, die ein Identitätsanbieter (IdP) unternehmen muss, um sich mit der Federated Credential Management (FedCM) API zu integrieren.

## IdP-Integrationsschritte

Um sich mit FedCM zu integrieren, muss ein IdP Folgendes tun:

1. [Bereitstellung einer gut bekannten Datei](#bereitstellung_einer_gut_bekannten_datei) zur Identifizierung des IdP.
2. [Bereitstellung einer Konfigurationsdatei und Endpunkte](#bereitstellung_einer_konfigurationsdatei_und_endpunkte) für Kontolisten und Ausstellung von Nachweisen (und optional, Metadaten des Clients).
3. [Aktualisierung des Anmeldestatus](#aktualisierung_des_anmeldestatus_über_die_login_status_api) über die Login Status API.

## Bereitstellung einer gut bekannten Datei

Es gibt ein potenzielles Datenschutzproblem, bei dem ein [IdP erkennen kann, ob ein Benutzer ohne ausdrückliche Zustimmung eine RP besucht hat](https://github.com/w3c-fedid/FedCM/issues/230). Dies hat Tracking-Implikationen, daher muss ein IdP eine gut bekannte Datei bereitstellen, um seine Identität zu verifizieren und dieses Problem zu mindern.

Die gut bekannte Datei wird über eine nicht authentifizierte [`GET`](/de/docs/Web/HTTP/Reference/Methods/GET)-Anfrage angefordert, die keine Umleitungen verfolgt. Dies verhindert effektiv, dass der IdP erfährt, wer die Anfrage gestellt hat und welche RP versucht, sich zu verbinden.

Die gut bekannte Datei muss vom [eTLD+1](https://web.dev/articles/same-site-same-origin#site) des IdP unter `/.well-known/web-identity` bereitgestellt werden. Zum Beispiel, wenn die IdP-Endpunkte unter `https://accounts.idp.example/` bereitgestellt werden, müssen sie eine gut bekannte Datei unter `https://idp.example/.well-known/web-identity` bereitstellen. Der Inhalt der gut bekannten Datei sollte die folgende JSON-Struktur haben:

```json
{
  "provider_urls": ["https://accounts.idp.example/config.json"]
}
```

Das `provider_urls`-Mitglied sollte ein Array von URLs enthalten, die auf gültige IdP-Konfigurationsdateien verweisen, die von RPs zur Interaktion mit dem IdP verwendet werden können. Die Array-Länge ist derzeit auf eins begrenzt.

## Der `Sec-Fetch-Dest` HTTP-Header

Alle Anfragen, die vom Browser über FedCM gesendet werden, enthalten einen `{{httpheader("Sec-Fetch-Dest")}}: webidentity` Header. Alle IdP-Endpunkte, die authentifizierte Anfragen erhalten (d.h. `accounts_endpoint` und `id_assertion_endpoint`), müssen bestätigen, dass dieser Header enthalten ist, um {{Glossary("CSRF", "CSRF")}}-Angriffe zu verhindern.

## Bereitstellung einer Konfigurationsdatei und Endpunkte

Die IdP-Konfigurationsdatei bietet eine Liste der Endpunkte, die der Browser benötigt, um den Identitätsfederationsfluss zu verarbeiten und die Anmeldungen zu verwalten. Die Endpunkte müssen vom gleichen Ursprung wie die Konfiguration stammen.

Der Browser stellt eine nicht authentifizierte Anfrage für die Konfigurationsdatei über die [`GET`](/de/docs/Web/HTTP/Reference/Methods/GET)-Methode, die keine Umleitungen verfolgt. Dies verhindert effektiv, dass der IdP erfährt, wer die Anfrage gestellt hat und welche RP versucht, sich zu verbinden.

Die Konfigurationsdatei (in unserem Beispiel gehostet unter `https://accounts.idp.example/config.json`) sollte die folgende JSON-Struktur haben:

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
  - : Die URL für den Endpunkt der Kontoliste, der eine Liste von Konten zurückgibt, bei denen der Benutzer derzeit beim IdP angemeldet ist. Der Browser verwendet diese, um eine Liste von Anmeldemöglichkeiten zu erstellen, die dem Benutzer in der vom Browser bereitgestellten FedCM-Benutzeroberfläche angezeigt wird.
- `client_metadata_endpoint` {{optional_inline}}
  - : Die URL für den Endpunkt der Client-Metadaten, die URLs bereitstellt, die auf die Metadaten des RP und die Seiten der Nutzungsbedingungen verweisen, die in der FedCM-Benutzeroberfläche verwendet werden sollen.
- `id_assertion_endpoint`
  - : Die URL für den ID-Nachweispunkt, der, wenn ihm gültige Benutzeranmeldeinformationen gesendet werden, mit einem Validierungstoken antworten sollte, das die RP zur Validierung der Authentifizierung verwenden kann.
- `login_url`
  - : Die Login-Seiten-URL, unter der sich der Benutzer beim IdP anmelden kann.
- `branding` {{optional_inline}}
  - : Enthält Informationen zur Markenbildung, die in der vom Browser gelieferten FedCM-Benutzeroberfläche verwendet werden, um deren Erscheinungsbild nach den Wünschen des IdP anzupassen.

Die folgende Tabelle fasst die verschiedenen Anfragen zusammen, die von der FedCM API gestellt werden:

| Endpunkt/Ressource         | Methode | Authentifiziert (mit Cookies) | Enthält {{httpheader("Origin")}} |
| -------------------------- | ------- | ----------------------------- | -------------------------------- |
| `well-known`/`config.json` | `GET`   | Nein                          | Nein                             |
| `accounts_endpoint`        | `GET`   | Ja                            | Nein                             |
| `client_metadata_endpoint` | `GET`   | Nein                          | Ja                               |
| `id_assertion_endpoint`    | `POST`  | Ja                            | Ja                               |

> [!NOTE]
> Eine Beschreibung des FedCM-Flusses, in dem auf diese Endpunkte zugegriffen wird, finden Sie unter [FedCM-Anmeldefluss](/de/docs/Web/API/FedCM_API/RP_sign-in#fedcm_sign-in_flow).

> [!NOTE]
> Keine der von der FedCM API an die hier aufgeführten Endpunkte gestellten Anfragen erlaubt das Folgen von Umleitungen, aus Datenschutzgründen.

### Der Endpunkt der Kontoliste

Der Browser sendet authentifizierte Anfragen (d.h. mit einem Cookie, das den angemeldeten Benutzer identifiziert) an diesen Endpunkt über die `GET`-Methode. Die Anfrage enthält keinen `client_id`-Parameter, {{httpheader("Origin")}}-Header oder {{httpheader("Referer")}}-Header. Dies verhindert effektiv, dass der IdP erfährt, bei welchem RP der Benutzer sich anzumelden versucht. Die zurückgegebene Liste von Konten ist RP-agnostisch.

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

Diese enthält die folgenden Informationen:

- `id`
  - : Die eindeutige ID des Benutzers.
- `name`
  - : Der Nachname des Benutzers.
- `email`
  - : Die E-Mail-Adresse des Benutzers.
- `given_name` {{optional_inline}}
  - : Der Vorname des Benutzers.
- `picture` {{optional_inline}}
  - : Die URL des Benutzer-Avatarbildes.
- `approved_clients` {{optional_inline}}
  - : Ein Array von RP-Clients, bei denen der Benutzer registriert ist.
- `login_hints` {{optional_inline}}
  - : Ein Array von Zeichenfolgen, die das Konto darstellen. Diese Zeichenfolgen werden verwendet, um die Liste der Kontooptionen zu filtern, die der Browser dem Benutzer zur Anmeldung anbietet. Dies geschieht, wenn die `loginHint`-Eigenschaft innerhalb von [`identity.providers`](/de/docs/Web/API/IdentityCredentialRequestOptions#providers) in einem zugehörigen `get()`-Aufruf bereitgestellt wird. Jedes Konto mit einer Zeichenfolge in seinem `login_hints`-Array, die mit dem bereitgestellten `loginHint` übereinstimmt, wird aufgenommen.

> [!NOTE]
> Wenn der Benutzer bei keinen IdP-Konten angemeldet ist, sollte der Endpunkt mit [HTTP 401 (Unauthorized)](/de/docs/Web/HTTP/Reference/Status/401) antworten.

### Der Endpunkt der Client-Metadaten

Der Browser sendet nicht authentifizierte Anfragen an diesen Endpunkt über die `GET`-Methode, wobei der `clientId` im `get()`-Aufruf als Parameter übergeben wird.

Zum Beispiel:

```http
GET /client_metadata.php?client_id=1234 HTTP/1.1
Host: idp.example
Origin: https://rp.example/
Accept: application/json
Sec-Fetch-Dest: webidentity
```

Die Antwort auf eine erfolgreiche Anfrage enthält URLs, die auf die Metadaten des RP und die Seiten der Nutzungsbedingungen verweisen, die in der vom Browser bereitgestellten FedCM-Benutzeroberfläche verwendet werden sollen. Dies sollte der unten dargestellten JSON-Struktur folgen:

```json
{
  "privacy_policy_url": "https://rp.example/privacy_policy.html",
  "terms_of_service_url": "https://rp.example/terms_of_service.html"
}
```

### Der ID-Nachweispunkt

Der Browser sendet authentifizierte Anfragen an diesen Endpunkt über die [`POST`](/de/docs/Web/HTTP/Reference/Methods/POST)-Methode, mit einem Inhaltstyp von `application/x-www-form-urlencoded`. Die Anfrage enthält außerdem eine Nutzlast mit Details zur versuchten Anmeldung und dem zu validierenden Konto.

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

Eine Anfrage an diesen Endpunkt wird gesendet, wenn der Benutzer ein Konto auswählt, mit dem er sich in der entsprechenden Browser-Benutzeroberfläche anmelden möchte. Wenn gültige Benutzeranmeldeinformationen gesendet werden, sollte dieser Endpunkt mit einem Validierungstoken antworten, das die RP verwenden können, um den Benutzer auf ihrem eigenen Server zu validieren, gemäß den Nutzungshinweisen des IdP, den sie für die Identitätsfederation verwenden. Sobald die RP den Benutzer validiert hat, kann sie ihn anmelden, ihn zu ihrem Dienst anmelden, etc.

```json
{
  "token": "***********"
}
```

Die Anforderungslast enthält die folgenden Parameter:

- `client_id`
  - : Der Client-Identifikator der RP (der mit der `clientId` aus der ursprünglichen `get()`-Anfrage übereinstimmt).
- `account_id`
  - : Die eindeutige ID des Benutzerkontos, das angemeldet werden soll (die der Benutzer-`id` aus der Antwort des Endpunkts der Kontoliste entspricht).
- `nonce` {{optional_inline}}
  - : Die Anforderungs-Nonce, bereitgestellt von der RP.
- `disclosure_text_shown`
  - : Eine Zeichenfolge von `"true"` oder `"false"`, die angibt, ob der Offenlegungstext angezeigt wurde oder nicht. Der Offenlegungstext ist die dem Benutzer gezeigte Information (die die Links zu den Nutzungsbedingungen und der Datenschutzrichtlinie enthalten kann, falls bereitgestellt), wenn der Benutzer beim IdP angemeldet ist, aber kein spezielles Konto im aktuellen RP hat (in diesem Fall müsste er sich entscheiden, "Weiter als..." seine IdP-Identität zu verwenden und dann ein entsprechendes Konto im RP zu erstellen).
- `is_auto_selected`
  - : Eine Zeichenfolge von `"true"` oder `"false"`, die angibt, ob die Authentifizierungsvalidierungsanfrage als Ergebnis der [automatischen Wiederanmeldung](/de/docs/Web/API/FedCM_API/RP_sign-in#auto-reauthentication) ausgegeben wurde, d.h. ohne Benutzereingriff. Dies kann geschehen, wenn der [`get()`](/de/docs/Web/API/CredentialsContainer/get)-Aufruf mit einer [`mediation`](/de/docs/Web/API/CredentialsContainer/get#mediation)-Optionswert von `"optional"` oder `"silent"` ausgeführt wird. Es ist nützlich für den IdP zu wissen, ob eine automatische Wiederanmeldung stattgefunden hat, um die Leistung zu bewerten und falls eine höhere Sicherheit erforderlich ist. Zum Beispiel könnte der IdP einen Fehlercode zurückgeben, der dem RP mitteilt, dass es eine explizite Benutzermediation erfordert (`mediation="required"`).

> [!NOTE]
> Wenn der [`get()`](/de/docs/Web/API/CredentialsContainer/get)-Aufruf erfolgreich ist, wird der `is_auto_selected`-Wert auch über die [`IdentityCredential.isAutoSelected`](/de/docs/Web/API/IdentityCredential/isAutoSelected) Eigenschaft an die RP kommuniziert.

#### ID-Nachweis-Fehlerantworten

Wenn der IdP kein Token ausstellen kann — zum Beispiel, wenn der Client nicht autorisiert ist — wird der ID-Nachweispunkt mit einer Fehlerantwort reagieren, die Informationen zur Art des Fehlers enthält. Zum Beispiel:

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
  - : Eine Zeichenfolge. Dies kann entweder ein bekannter Fehler aus der [OAuth 2.0-Fehlerliste](https://datatracker.ietf.org/doc/html/rfc6749#section-4.1.2.1) sein oder eine beliebige Zeichenfolge.
- `url` {{optional_inline}}
  - : Eine URL. Dies sollte eine Webseite sein, die lesbare Informationen über den Fehler enthält, um sie Benutzern anzuzeigen, wie z.B. wie der Fehler behoben werden kann oder Kontaktaufnahme zum Support. Die URL muss gleiches Site-Bereich wie die Konfigurations-URL des IdP sein.

Diese Informationen können auf verschiedene Weise verwendet werden:

- Der Browser kann eine benutzerdefinierte Benutzeroberfläche für den Benutzer anzeigen, um ihn darüber zu informieren, was schiefgelaufen ist (siehe die [Chrome-Dokumentation](https://developers.google.com/privacy-sandbox/blog/fedcm-chrome-120-updates#error-api) für ein Beispiel). Bedenken Sie, dass, wenn die Anfrage fehlschlägt, weil der IdP-Server nicht verfügbar ist, er offensichtlich keine Informationen zurückgeben kann. In solchen Fällen wird der Browser dies über eine generische Nachricht melden.
- Der zugehörige RP [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get)-Aufruf zur Anmeldeversuch wird sein Versprechen mit einem `IdentityCredentialError` ablehnen, der die Fehlerinformationen enthält. Ein RP kann diesen Fehler abfangen und dann der benutzerdefinierten Benutzeroberfläche des Browsers einige Informationen hinzufügen, um dem Benutzer bei einem zukünftigen Anmeldeversuch zu helfen.

## Aktualisierung des Anmeldestatus über die Login Status API

Die **Login Status API** ermöglicht es einem IdP, einem Browser seinen Anmeldestatus (Anmeldestatus) in diesem bestimmten Browser mitzuteilen — damit meinen wir "ob Benutzer im aktuellen Browser beim IdP angemeldet sind oder nicht". Der Browser speichert diesen Zustand für jeden IdP; die FedCM API verwendet ihn dann, um die Anzahl der Anfragen zu reduzieren, die sie an den IdP stellt (da keine Zeit für die Anforderung von Konten verschwendet wird, wenn beim IdP keine Benutzer angemeldet sind). Sie mildert auch [potenzielle Timing-Angriffe](https://github.com/w3c-fedid/FedCM/issues/447).

Für jeden bekannten IdP (identifiziert durch seine Konfigurations-URL) hält der Browser eine drei Zustände umfassende Variable, die den Anmeldestatus mit drei möglichen Werten darstellt:

- `"logged-in"`: Der IdP hat mindestens ein Benutzerkonto angemeldet. Beachten Sie, dass die RP und der Browser zu diesem Zeitpunkt nicht wissen, welcher Benutzer das ist. Informationen zu bestimmten Benutzern werden später im FedCM-Fluss vom [`accounts_endpoint`](#der_endpunkt_der_kontoliste) des IdP zurückgegeben.
- `"logged-out"`: Alle IdP-Konten sind derzeit abgemeldet.
- `"unknown"`: Der Anmeldestatus dieses IdP ist nicht bekannt. Dies ist der Standardwert.

### Festlegung des Anmeldestatus

Der IdP sollte seinen Anmeldestatus aktualisieren, wenn sich ein Benutzer beim IdP an- oder abmeldet. Dies kann auf zwei verschiedene Arten erfolgen:

- Der {{httpheader("Set-Login")}} HTTP-Antwort-Header kann in einer obersten Navigation oder einer gleichartigen Unterressourcenanfrage gesetzt werden:

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

### Wie sich der Anmeldestatus auf den federierten Anmeldefluss auswirkt

Wenn ein [RP eine federierte Anmeldung versucht](/de/docs/Web/API/FedCM_API/RP_sign-in), wird der Anmeldestatus überprüft:

- Wenn der Anmeldestatus `"logged-in"` ist, wird eine Anfrage an den [Endpunkt der Kontoliste](#der_endpunkt_der_kontoliste) des IdP gestellt und verfügbare Konten zur Anmeldung werden dem Benutzer im vom Browser bereitgestellten FedCM-Dialog angezeigt.
- Wenn der Anmeldestatus `"logged-out"` ist, wird das von der FedCM `get()`-Anfrage zurückgegebene Versprechen abgelehnt, ohne eine Anfrage an den Endpunkt der Kontoliste zu stellen. In einem solchen Fall liegt es am Entwickler, den Fluss zu handhaben, beispielsweise indem der Benutzer aufgefordert wird, sich bei einem geeigneten IdP anzumelden.
- Wenn der Anmeldestatus `"unknown"` ist, wird eine Anfrage an den Endpunkt der Kontoliste des IdP gestellt und der Anmeldestatus wird abhängig von der Antwort aktualisiert:
  - Wenn der Endpunkt eine Liste verfügbarer Konten zur Anmeldung zurückgibt, wird der Status auf `"logged-in"` aktualisiert und die Anmeldeoptionen werden dem Benutzer im vom Browser bereitgestellten FedCM-Dialog angezeigt.
  - Wenn der Endpunkt keine Konten zurückgibt, wird der Status auf `"logged-out"` aktualisiert; das von der FedCM `get()`-Anfrage zurückgegebene Versprechen wird dann abgelehnt.

### Was passiert, wenn der Browser- und der IdP-Anmeldestatus nicht synchron sind?

Trotz der Tatsache, dass die Login Status API dem Browser den Anmeldestatus des IdP mitteilt, können der Browser und der IdP nicht synchron werden. Beispielsweise könnten die IdP-Sitzungen ablaufen, was bedeutet, dass alle Benutzerkonten abgemeldet werden, aber der Anmeldestatus immer noch auf `"logged-in"` gesetzt ist (die Anwendung war nicht in der Lage, den Anmeldestatus auf `"logged-out"` zu setzen). In einem solchen Fall wird, wenn eine federierte Anmeldung versucht wird, eine Anfrage an den Endpunkt der Kontoliste des IdP gestellt, aber keine verfügbaren Konten werden zurückgegeben, da die Sitzung nicht mehr verfügbar ist.

Wenn dies auftritt, kann der Browser einem Benutzer dynamisch erlauben, sich beim IdP anzumelden, indem die Anmeldeseite des IdP in einem Dialog geöffnet wird (die Anmelde-URL befindet sich in der [Konfigurationsdatei](#bereitstellung_einer_konfigurationsdatei_und_endpunkte) `login_url` des IdP). Die genaue Natur dieses Flusses liegt beim Browser; zum Beispiel behandelt [Chrome es so](https://developers.google.com/privacy-sandbox/blog/fedcm-chrome-120-updates#what_if_the_user_session_expires_let_the_user_sign_in_through_a_dynamic_login_flow).

Sobald der Benutzer beim IdP angemeldet ist, sollte der IdP:

- Den Browser darüber informieren, dass der Benutzer angemeldet ist, indem er [den Anmeldestatus einstellt](#festlegung_des_anmeldestatus) auf `"logged-in"`.
- Den Anmeldedialog schließen, indem die Methode [`IdentityProvider.close()`](/de/docs/Web/API/IdentityProvider/close_static) aufgerufen wird.

## Siehe auch

- [Federated Credential Management API](https://developers.google.com/privacy-sandbox/cookies/fedcm) auf developers.google.com (2023)
