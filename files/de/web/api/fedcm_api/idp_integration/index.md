---
title: Integration eines Identitätsanbieters mit FedCM
slug: Web/API/FedCM_API/IDP_integration
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{DefaultAPISidebar("FedCM API")}}

Dieser Artikel beschreibt alle Schritte, die ein Identitätsanbieter (IdP) unternehmen muss, um sich in die Federated Credential Management (FedCM)-API zu integrieren.

## Schritte zur Integration des IdP

Um sich mit FedCM zu integrieren, muss ein IdP Folgendes tun:

1. [Bereitstellung einer bekannten Datei](#bereitstellung_einer_bekannten_datei), um den IdP zu identifizieren.
2. [Bereitstellung einer Konfigurationsdatei und Endpunkte](#bereitstellung_einer_konfigurationsdatei_und_endpunkte) für die Kontenliste und die Ausstellung von Bestätigungen (und optional, Client-Metadaten).
3. [Aktualisierung seines Anmeldestatus](#aktualisieren_des_anmeldestatus_über_die_login_status_api) über die Login Status API.

## Bereitstellung einer bekannten Datei

Es gibt ein mögliches Datenschutzproblem, bei dem ein [IdP in der Lage ist, herauszufinden, ob ein Benutzer ein RP ohne ausdrückliche Zustimmung besucht hat](https://github.com/w3c-fedid/FedCM/issues/230). Dies hat Auswirkungen auf das Tracking, weshalb ein IdP verpflichtet ist, eine gut bekannte Datei bereitzustellen, um seine Identität zu überprüfen und dieses Problem zu mildern.

Die gut bekannte Datei wird über eine unbeglaubigte [`GET`](/de/docs/Web/HTTP/Reference/Methods/GET)-Anfrage angefordert, die keine Umleitungen folgt. Dies verhindert effektiv, dass der IdP erfährt, wer die Anfrage gestellt hat und welches RP die Verbindung herstellen möchte.

Die gut bekannte Datei muss über die [eTLD+1](https://web.dev/articles/same-site-same-origin#site) des IdP unter `/.well-known/web-identity` bereitgestellt werden. Wenn die IdP-Endpunkte beispielsweise unter `https://accounts.idp.example/` bereitgestellt werden, müssen sie eine gut bekannte Datei unter `https://idp.example/.well-known/web-identity` bereitstellen. Der Inhalt der gut bekannten Datei sollte die folgende JSON-Struktur haben:

```json
{
  "provider_urls": ["https://accounts.idp.example/config.json"]
}
```

Das Mitglied `provider_urls` sollte ein Array von URLs enthalten, die auf gültige IdP-Konfigurationsdateien verweisen, die von den RPs verwendet werden können, um mit dem IdP zu interagieren. Die Arraylänge ist derzeit auf eins begrenzt.

## Der HTTP-Header `Sec-Fetch-Dest`

Alle Anfragen, die vom Browser über FedCM gesendet werden, enthalten einen Header `{{httpheader("Sec-Fetch-Dest")}}: webidentity`. Alle IdP-Endpunkte, die beglaubigte Anfragen erhalten (d.h. `accounts_endpoint` und `id_assertion_endpoint`), müssen bestätigen, dass dieser Header enthalten ist, um sich gegen {{Glossary("CSRF", "CSRF")}}-Angriffe zu schützen.

## Bereitstellung einer Konfigurationsdatei und Endpunkte

Die IdP-Konfigurationsdatei bietet eine Liste der Endpunkte, die der Browser benötigt, um den Identitätsfederationsablauf zu verarbeiten und die Anmeldungen zu verwalten. Die Endpunkte müssen gleichen Ursprungs wie die Konfiguration sein.

Der Browser fordert die Konfigurationsdatei über die Methode [`GET`](/de/docs/Web/HTTP/Reference/Methods/GET) an, die keine Umleitungen folgt. Dies verhindert effektiv, dass der IdP erfährt, wer die Anfrage gestellt hat und welches RP die Verbindung herstellen möchte.

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
  - : Die URL für den Endpunkt der Kontenliste, der eine Liste von Konten zurückgibt, bei denen der Benutzer derzeit beim IdP angemeldet ist. Der Browser verwendet diese, um eine Liste von Anmeldeoptionen zu erstellen, die dem Benutzer in der vom Browser bereitgestellten FedCM-Benutzeroberfläche angezeigt werden.
- `client_metadata_endpoint` {{optional_inline}}
  - : Die URL für den Endpunkt der Client-Metadaten, der URLs zu den Metadaten und den Seiten mit den Nutzungsbedingungen des RP bereitstellt, die in der FedCM-Benutzeroberfläche verwendet werden sollen.
- `id_assertion_endpoint`
  - : Die URL für den ID-Bestätigungsendpunkt, der bei Übergabe gültiger Benutzeranmeldeinformationen mit einem Bestätigungstoken antworten sollte, das das RP zur Bestätigung der Authentifizierung verwenden kann.
- `login_url`
  - : Die URL der Anmeldeseite, auf der der Benutzer sich beim IdP anmelden kann.
- `branding` {{optional_inline}}
  - : Beinhaltet Markierungsinformationen, die in der vom Browser bereitgestellten FedCM-Benutzeroberfläche verwendet werden, um das Aussehen nach den Wünschen des IdP anzupassen.

Die folgende Tabelle fasst die verschiedenen Anfragen zusammen, die von der FedCM-API gesendet werden:

| Endpunkt/Ressource         | Methode | Beglaubigt (mit Cookies) | Enthält {{httpheader("Origin")}} |
| -------------------------- | ------- | ------------------------ | -------------------------------- |
| `well-known`/`config.json` | `GET`   | Nein                     | Nein                             |
| `accounts_endpoint`        | `GET`   | Ja                       | Nein                             |
| `client_metadata_endpoint` | `GET`   | Nein                     | Ja                               |
| `id_assertion_endpoint`    | `POST`  | Ja                       | Ja                               |

> [!NOTE]
> Für eine Beschreibung des FedCM-Ablaufs, in dem diese Endpunkte aufgerufen werden, siehe [FedCM-Anmeldeablauf](/de/docs/Web/API/FedCM_API/RP_sign-in#fedcm_sign-in_flow).

> [!NOTE]
> Keine der von der FedCM-API zu den hier beschriebenen Endpunkten gesendeten Anfragen erlaubt das Folgen von Umleitungen, aus Datenschutzgründen.

### Der Endpunkt der Kontenliste

Der Browser sendet beglaubigte Anfragen (d.h. mit einem Cookie, das den Benutzer identifiziert, der angemeldet ist) über die `GET`-Methode an diesen Endpunkt. Die Anfrage enthält keinen `client_id`-Parameter, {{httpheader("Origin")}}-Header oder {{httpheader("Referer")}}-Header. Dies verhindert effektiv, dass der IdP erfährt, bei welchem RP der Benutzer sich anzumelden versucht. Die Liste der zurückgegebenen Konten ist RP-agnostisch.

Zum Beispiel:

```http
GET /accounts.php HTTP/1.1
Host: idp.example
Accept: application/json
Cookie: 0x23223
Sec-Fetch-Dest: webidentity
```

Die Antwort auf eine erfolgreiche Anfrage gibt eine Liste aller IdP-Konten zurück, bei denen der Benutzer derzeit angemeldet ist (nicht spezifisch für ein bestimmtes RP), mit einer JSON-Struktur, die der folgenden entspricht:

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

Diese beinhaltet folgende Informationen:

- `id`
  - : Die eindeutige ID des Benutzers.
- `name`
  - : Der Familienname des Benutzers.
- `email`
  - : Die E-Mail-Adresse des Benutzers.
- `given_name` {{optional_inline}}
  - : Der Vorname des Benutzers.
- `picture` {{optional_inline}}
  - : Die URL des Avatarbildes des Benutzers.
- `approved_clients` {{optional_inline}}
  - : Ein Array von RP-Clients, bei denen der Benutzer sich registriert hat.
- `login_hints` {{optional_inline}}
  - : Ein Array von Strings, die das Konto repräsentieren. Diese Strings werden verwendet, um die Liste der Kontooptionen zu filtern, die der Browser dem Benutzer zur Anmeldung anbietet. Dies passiert, wenn die Eigenschaft `loginHint` innerhalb von [`identity.providers`](/de/docs/Web/API/CredentialsContainer/get#providers_2) in einem verwandten `get()`-Aufruf bereitgestellt wird. Jedes Konto mit einem String in seinem `login_hints`-Array, das dem bereitgestellten `loginHint` entspricht, wird einbezogen.

> [!NOTE]
> Wenn der Benutzer bei keinem IdP-Konten angemeldet ist, sollte der Endpunkt mit [HTTP 401 (Unauthorized)](/de/docs/Web/HTTP/Reference/Status/401) antworten.

### Der Endpunkt der Client-Metadaten

Der Browser sendet unbeglaubigte Anfragen über die `GET`-Methode an diesen Endpunkt, wobei der `clientId`-Parameter in den `get()`-Aufruf übergeben wird.

Zum Beispiel:

```http
GET /client_metadata.php?client_id=1234 HTTP/1.1
Host: idp.example
Origin: https://rp.example/
Accept: application/json
Sec-Fetch-Dest: webidentity
```

Die Antwort auf eine erfolgreiche Anfrage enthält URLs, die auf die Metadaten und die Nutzungsbedingungen des RP verweisen, um in der vom Browser bereitgestellten FedCM-Benutzeroberfläche verwendet zu werden. Dies sollte der unten stehenden JSON-Struktur folgen:

```json
{
  "privacy_policy_url": "https://rp.example/privacy_policy.html",
  "terms_of_service_url": "https://rp.example/terms_of_service.html"
}
```

### Der ID-Bestätigungsendpunkt

Der Browser sendet beglaubigte Anfragen über die [`POST`](/de/docs/Web/HTTP/Reference/Methods/POST)-Methode an diesen Endpunkt, mit einem Inhalts-Typ von `application/x-www-form-urlencoded`. Die Anfrage enthält auch eine Nutzlast mit Details über die versuchte Anmeldung und das zu validierende Konto.

Es sollte in etwa so aussehen:

```http
POST /assertion.php HTTP/1.1
Host: idp.example
Origin: https://rp.example/
Content-Type: application/x-www-form-urlencoded
Cookie: 0x23223
Sec-Fetch-Dest: webidentity
account_id=123&client_id=client1234&nonce=Ct60bD&disclosure_text_shown=true&is_auto_selected=true
```

Eine Anfrage an diesen Endpunkt wird als Ergebnis der Auswahl eines Kontos durch den Benutzer in der entsprechenden Benutzeroberfläche des Browsers gesendet. Wenn gültige Benutzeranmeldeinformationen gesendet werden, sollte dieser Endpunkt mit einem Bestätigungstoken antworten, das das RP zur Validierung des Benutzers auf seinem eigenen Server verwenden kann, gemäß den vom IdP bereitgestellten Anweisungen zur Verwendung für die Identitätsfederation. Sobald das RP den Benutzer validiert hat, kann es ihn anmelden, zu ihrem Dienst anmelden etc.

```json
{
  "token": "***********"
}
```

Die Anfragenutzlast enthält die folgenden Parameter:

- `client_id`
  - : Der Client-Identifier des RP (entspricht dem `clientId` aus der ursprünglichen `get()`-Anfrage).
- `account_id`
  - : Die eindeutige ID des Benutzerkontos, das angemeldet werden soll (entspricht der `id` des Benutzers aus der Antwort des Kontenlistenendpunkts).
- `nonce` {{optional_inline}}
  - : Die Anfragenonce, die vom RP bereitgestellt wird.
- `disclosure_text_shown`
  - : Ein String mit `"true"` oder `"false"`, der angibt, ob der Offenlegungstext angezeigt wurde oder nicht. Der Offenlegungstext ist die dem Benutzer gezeigte Information (die die Links zu Nutzungsbedingungen und Datenschutzrichtlinien enthalten kann, falls bereitgestellt), wenn der Benutzer beim IdP angemeldet ist, aber kein Konto speziell beim aktuellen RP hat (in diesem Fall müsste er sich entscheiden, "Weiter als..." mit seiner IdP-Identität zu wählen und dann ein entsprechendes Konto beim RP zu erstellen).
- `is_auto_selected`
  - : Ein String mit `"true"` oder `"false"`, der angibt, ob die Authentifizierungsbestätigungsanfrage infolge einer [automatischen Reauthentifizierung](/de/docs/Web/API/FedCM_API/RP_sign-in#auto-reauthentication) gestellt wurde, d.h. ohne Benutzermediation. Dies kann auftreten, wenn der [`get()`](/de/docs/Web/API/CredentialsContainer/get)-Aufruf mit einer [`mediation`](/de/docs/Web/API/CredentialsContainer/get#mediation) Optionswert von `"optional"` oder `"silent"` erfolgt. Es ist nützlich für den IdP zu wissen, ob eine automatische Reauthentifizierung stattgefunden hat, um die Leistung zu bewerten und für Fälle, in denen höhere Sicherheit gewünscht wird. Der IdP könnte beispielsweise einen Fehlercode zurückgeben, der dem RP mitteilt, dass explizite Benutzermediation erforderlich ist (`mediation="required"`).

> [!NOTE]
> Wenn der [`get()`](/de/docs/Web/API/CredentialsContainer/get)-Aufruf erfolgreich ist, wird der `is_auto_selected`-Wert auch über die [`IdentityCredential.isAutoSelected`](/de/docs/Web/API/IdentityCredential/isAutoSelected)-Eigenschaft an das RP kommuniziert.

#### Fehlerantworten des ID-Bestätigungsendpunkts

Wenn der IdP kein Token ausstellen kann — zum Beispiel, wenn der Client nicht autorisiert ist — wird der ID-Bestätigungsendpunkt mit einer Fehlerantwort antworten, die Informationen über die Art des Fehlers enthält. Zum Beispiel:

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
  - : Ein String. Dies kann entweder ein bekannter Fehler aus der [OAuth 2.0 spezifizierten Fehlerliste](https://datatracker.ietf.org/doc/html/rfc6749#section-4.1.2.1) oder ein beliebiger String sein.
- `url` {{optional_inline}}
  - : Eine URL. Dies sollte eine Webseite sein, die dem Benutzer menschenlesbare Informationen über den Fehler anzeigt, z.B. wie er den Fehler beheben kann oder den Kundenservice kontaktieren kann. Die URL muss gleichseitig mit der IdP-Konfigurations-URL sein.

Diese Informationen können auf verschiedene Arten verwendet werden:

- Der Browser kann eine benutzerdefinierte Benutzeroberfläche anzeigen, die dem Benutzer mitteilt, was schief gelaufen ist (siehe die [Chrome-Dokumentation](https://developers.google.com/privacy-sandbox/blog/fedcm-chrome-120-updates#error-api) für ein Beispiel). Beachten Sie, dass, wenn die Anfrage fehlgeschlagen ist, weil der IdP-Server nicht verfügbar ist, er offensichtlich keine Informationen zurückgeben kann. In solchen Fällen wird der Browser dies über eine allgemeine Nachricht melden.
- Der zugehörige RP [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get)-Aufruf, der zur Anmeldung verwendet wurde, wird sein Versprechen mit einem `IdentityCredentialError` ablehnen, der die Fehlerinformationen enthält. Ein RP kann diesen Fehler abfangen und dann die benutzerdefinierte Benutzeroberfläche des Browsers mit einigen Informationen ergänzen, um dem Benutzer zu helfen, bei einem zukünftigen Anmeldeversuch erfolgreich zu sein.

## Aktualisieren des Anmeldestatus über die Login Status API

Die **Login Status API** ermöglicht es einem IdP, einen Browser über den Anmeldestatus (Sign-in-Status) in diesem bestimmten Browser zu informieren — damit meinen wir, "ob irgendwelche Benutzer beim IdP im aktuellen Browser angemeldet sind oder nicht". Der Browser speichert diesen Status für jeden IdP; die FedCM-API verwendet ihn dann, um die Anzahl der Anfragen, die sie an den IdP stellt, zu reduzieren (da sie keine Zeit mit der Anforderung von Konten verschwenden muss, wenn keine Benutzer beim IdP angemeldet sind). Sie mildert auch [potenzielle Timing-Angriffe](https://github.com/w3c-fedid/FedCM/issues/447).

Für jeden bekannten IdP (identifiziert durch seine Konfigurations-URL) hält der Browser eine Tri-State-Variable, die den Anmeldestatus mit drei möglichen Werten darstellt:

- `"logged-in"`: Der IdP hat mindestens ein Benutzerkonto angemeldet. Beachten Sie, dass zu diesem Zeitpunkt das RP und der Browser nicht wissen, welcher Benutzer das ist. Informationen zu bestimmten Benutzern werden in einem späteren Punkt im FedCM-Ablauf vom [`accounts_endpoint`](#der_endpunkt_der_kontenliste) des IdP zurückgegeben.
- `"logged-out"`: Alle IdP-Konten sind derzeit abgemeldet.
- `"unknown"`: Der Anmeldestatus dieses IdP ist nicht bekannt. Dies ist der Standardwert.

### Festlegen des Anmeldestatus

Der IdP sollte seinen Anmeldestatus aktualisieren, wenn sich ein Benutzer beim IdP an- oder abmeldet. Dies kann auf zwei verschiedene Arten erfolgen:

- Der {{httpheader("Set-Login")}}-HTTP-Antwort-Header kann in einer Top-Level-Navigation oder einer gleich-originellen Subressourcenanfrage gesetzt werden:

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

### Wie sich der Anmeldestatus auf den federierten Anmeldeablauf auswirkt

Wenn ein [RP eine federierte Anmeldung versucht](/de/docs/Web/API/FedCM_API/RP_sign-in), wird der Anmeldestatus überprüft:

- Wenn der Anmeldestatus `"logged-in"` ist, wird eine Anfrage an den [Endpunkt der Kontenliste](#der_endpunkt_der_kontenliste) des IdP gestellt und verfügbare Konten zur Anmeldung werden dem Benutzer im vom Browser bereitgestellten FedCM-Dialog angezeigt.
- Wenn der Anmeldestatus `"logged-out"` ist, lehnt das von der FedCM durch den `get()`-Anruf zurückgegebene Versprechen ab, ohne eine Anfrage an den Endpunkt der Kontenliste zu stellen. In einem solchen Fall liegt es am Entwickler, den Ablauf zu verwalten, etwa indem er den Benutzer auffordert, sich bei einem geeigneten IdP anzumelden.
- Wenn der Anmeldestatus `"unknown"` ist, wird eine Anfrage an den Endpunkt der Kontenliste des IdP gestellt und der Anmeldestatus wird je nach Antwort aktualisiert:
  - Wenn der Endpunkt eine Liste verfügbarer Konten zur Anmeldung zurückgibt, aktualisieren Sie den Status auf `"logged-in"` und zeigen Sie die Anmeldeoptionen dem Benutzer im vom Browser bereitgestellten FedCM-Dialog an.
  - Wenn der Endpunkt keine Konten zurückgibt, aktualisieren Sie den Status auf `"logged-out"`; das von der FedCM durch den `get()`-Anruf zurückgegebene Versprechen lehnt dann ab.

### Was passiert, wenn der Browser und der IdP-Anmeldestatus nicht synchron sind?

Trotz der Tatsache, dass die Login Status API den Browser über den Anmeldestatus des IdP informiert, kann es passieren, dass der Browser und der IdP nicht synchron sind. Beispielsweise könnten die IdP-Sitzungen ablaufen, was bedeutet, dass alle Benutzerkonten abgemeldet sind, aber der Anmeldestatus immer noch auf `"logged-in"` gesetzt ist (die Anwendung konnte den Anmeldestatus nicht auf `"logged-out"` setzen). In einem solchen Fall wird, wenn eine federierte Anmeldung versucht wird, eine Anfrage an den Endpunkt der Kontenliste des IdP gestellt, aber es werden keine verfügbaren Konten zurückgegeben, da die Sitzung nicht mehr verfügbar ist.

Wenn dies passiert, kann der Browser dem Benutzer die Möglichkeit geben, sich beim IdP anzumelden, indem er die Anmeldeseite des IdP in einem Dialog öffnet (die Anmelde-URL befindet sich in der [Konfigurationsdatei](#bereitstellung_einer_konfigurationsdatei_und_endpunkte) des IdP `login_url`). Die genaue Ausgestaltung dieses Ablaufs liegt beim Browser; zum Beispiel [geht Chrome damit so um](https://developers.google.com/privacy-sandbox/blog/fedcm-chrome-120-updates#what_if_the_user_session_expires_let_the_user_sign_in_through_a_dynamic_login_flow).

Sobald der Benutzer beim IdP angemeldet ist, sollte der IdP:

- Den Browser darüber informieren, dass der Benutzer angemeldet ist, indem er den [Anmeldestatus](/de/docs/Web/API/NavigatorLogin/setStatus) auf `"logged-in"` setzt.
- Den Anmeldedialog durch Aufrufen der Methode [`IdentityProvider.close()`](/de/docs/Web/API/IdentityProvider/close_static) schließen.

## Siehe auch

- [Federated Credential Management API](https://developers.google.com/privacy-sandbox/cookies/fedcm) auf developers.google.com (2023)
