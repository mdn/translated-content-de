---
title: Integration des Identitätsanbieters mit FedCM
slug: Web/API/FedCM_API/IDP_integration
l10n:
  sourceCommit: cf41a29c212c730c1beef36d6bf3474ebbfc6162
---

{{DefaultAPISidebar("FedCM API")}}

Dieser Artikel beschreibt alle Schritte, die ein Identitätsanbieter (IdP) unternehmen muss, um sich mit der Federated Credential Management (FedCM) API zu integrieren.

## Schritte zur IdP-Integration

Um sich mit FedCM zu integrieren, muss ein IdP das Folgende tun:

1. [Bereitstellung einer bekannten Datei](#bereitstellung_einer_bekannten_datei), um den IdP zu identifizieren.
2. [Bereitstellung einer Konfigurationsdatei und Endpunkten](#bereitstellung_einer_konfigurationsdatei_und_endpunkten) für die Kontenliste und die Ausstellung von Assertions (und optional Client-Metadaten).
3. [Aktualisieren seines Anmeldestatus](#aktualisieren_des_anmeldestatus_mit_der_login_status_api) mithilfe der Login Status API.

## Bereitstellung einer bekannten Datei

Es gibt ein potenzielles Datenschutzproblem, bei dem ein [IdP möglicherweise feststellen kann, ob ein Benutzer eine RP ohne ausdrückliche Zustimmung besucht hat](https://github.com/w3c-fedid/FedCM/issues/230). Dies hat Tracking-Auswirkungen, daher muss ein IdP eine bekannte Datei bereitstellen, um seine Identität zu verifizieren und dieses Problem zu entschärfen.

Die bekannte Datei wird über eine nicht authentifizierte [`GET`](/de/docs/Web/HTTP/Reference/Methods/GET)-Anfrage angefordert, die keine Weiterleitungen verfolgt. Dies verhindert effektiv, dass der IdP erfährt, wer die Anfrage gestellt hat und welche RP versucht, eine Verbindung herzustellen.

Die bekannte Datei muss vom [eTLD+1](https://web.dev/articles/same-site-same-origin#site) des IdP unter `/.well-known/web-identity` bereitgestellt werden. Wenn beispielsweise die Endpunkte des IdP unter `https://accounts.idp.example/` bereitgestellt werden, müssen sie eine bekannte Datei unter `https://idp.example/.well-known/web-identity` bereitstellen. Der Inhalt der bekannten Datei sollte die folgende JSON-Struktur haben:

```json
{
  "provider_urls": ["https://accounts.idp.example/config.json"]
}
```

Das `provider_urls`-Element sollte ein Array von URLs enthalten, die auf gültige IdP-Konfigurationsdateien verweisen, die von RPs zur Interaktion mit dem IdP verwendet werden können. Die Länge des Arrays ist derzeit auf eins begrenzt.

## Der `Sec-Fetch-Dest` HTTP-Header

Alle Anfragen, die vom Browser über FedCM gesendet werden, enthalten einen `{{httpheader("Sec-Fetch-Dest")}}: webidentity`-Header. Alle IdP-Endpunkte, die authentifizierte Anfragen erhalten (d.h. `accounts_endpoint` und `id_assertion_endpoint`), müssen bestätigen, dass dieser Header enthalten ist, um sich gegen {{Glossary("CSRF", "CSRF")}}-Angriffe zu schützen.

## Bereitstellung einer Konfigurationsdatei und Endpunkten

Die IdP-Konfigurationsdatei enthält eine Liste der Endpunkte, die der Browser benötigt, um den Identitätsföderationsablauf zu verarbeiten und die Anmeldungen zu verwalten. Die Endpunkte müssen gleichherkunftlich mit der Konfiguration sein.

Der Browser stellt eine nicht authentifizierte Anfrage für die Konfigurationsdatei über die [`GET`](/de/docs/Web/HTTP/Reference/Methods/GET)-Methode, die keine Weiterleitungen verfolgt. Dies verhindert effektiv, dass der IdP erfährt, wer die Anfrage gestellt hat und welche RP versucht, eine Verbindung herzustellen.

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
  - : Die URL für den Kontenlisten-Endpunkt, die eine Liste der Konten zurückgibt, bei denen der Benutzer derzeit am IdP angemeldet ist. Der Browser verwendet diese Liste, um eine Liste von Anmeldeoptionen zu erstellen, die dem Benutzer in der vom Browser bereitgestellten FedCM-Benutzeroberfläche angezeigt werden.
- `client_metadata_endpoint` {{optional_inline}}
  - : Die URL für den Client-Metadaten-Endpunkt, der URLs bereitstellt, die auf die Metadaten- und Servicebedingungen-Seiten des RP verweisen, um in der FedCM-Benutzeroberfläche verwendet zu werden.
- `id_assertion_endpoint`
  - : Die URL für den ID-Assertions-Endpunkt, der, wenn er gültige Benutzeranmeldeinformationen erhält, mit einem Validierungstoken antworten sollte, das die RP zur Validierung der Authentifizierung verwenden kann.
- `login_url`
  - : Die URL der Anmeldeseite, damit sich der Benutzer beim IdP anmelden kann.
- `branding` {{optional_inline}}
  - : Enthält Informationen zur Markenbildung, die in der vom Browser bereitgestellten FedCM-Benutzeroberfläche verwendet werden, um deren Erscheinungsbild nach den Wünschen des IdP anzupassen.

Die folgende Tabelle fasst die verschiedenen Anfragen zusammen, die von der FedCM-API gestellt werden:

| Endpoint/Ressource         | Methode | Authentifiziert (mit Cookies) | Enthält {{httpheader("Origin")}} |
| -------------------------- | ------- | ----------------------------- | -------------------------------- |
| `well-known`/`config.json` | `GET`   | Nein                          | Nein                             |
| `accounts_endpoint`        | `GET`   | Ja                            | Nein                             |
| `client_metadata_endpoint` | `GET`   | Nein                          | Ja                               |
| `id_assertion_endpoint`    | `POST`  | Ja                            | Ja                               |

> [!NOTE]
> Für eine Beschreibung des FedCM-Ablaufs, in dem diese Endpunkte aufgerufen werden, siehe [FedCM-Anmeldeablauf](/de/docs/Web/API/FedCM_API/RP_sign-in#fedcm_sign-in_flow).

> [!NOTE]
> Keine der von der FedCM-API zu den hier beschriebenen Endpunkten gesendeten Anfragen erlaubt das Folgen von Weiterleitungen, aus Datenschutzgründen.

### Der Kontenlisten-Endpunkt

Der Browser sendet authentifizierte Anfragen (d.h. mit einem Cookie, das den Benutzer identifiziert, der angemeldet ist) an diesen Endpunkt über die `GET`-Methode. Die Anfrage hat keinen `client_id`-Parameter, {{httpheader("Origin")}}-Header oder {{httpheader("Referer")}}-Header. Dies verhindert effektiv, dass der IdP erfährt, welche RP der Benutzer versuchen will, sich anzumelden. Die zurückgegebene Liste der Konten ist RP-unabhängig.

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
      "id": "elaina_maduro",
      "given_name": "Elaina",
      "name": "Elaina Maduro",
      "email": "elaina_maduro@idp.example",
      "picture": "https://idp.example/profile/123",
      "approved_clients": ["123", "456", "789"],
      "login_hints": ["elaina_maduro", "elaina_maduro@idp.example"]
    },
    {
      "id": "elly",
      "given_name": "Elly",
      "name": "Elly",
      "email": "Elly@idp.example",
      "picture": "https://idp.example/profile/456",
      "approved_clients": ["abc", "def", "ghi"],
      "login_hints": ["elly", "elly@idp.example"]
    }
  ]
}
```

Dies beinhaltet die folgenden Informationen:

- `id`
  - : Die eindeutige ID des Benutzers.
- `name`
  - : Der Nachname des Benutzers.
- `email`
  - : Die E-Mail-Adresse des Benutzers.
- `given_name` {{optional_inline}}
  - : Der Vorname des Benutzers.
- `picture` {{optional_inline}}
  - : Die URL des Avatarbildes des Benutzers.
- `approved_clients` {{optional_inline}}
  - : Ein Array von RP-Clients, bei denen sich der Benutzer registriert hat.
- `login_hints` {{optional_inline}}
  - : Ein Array von Zeichenfolgen, die das Konto darstellen. Diese Zeichenfolgen werden verwendet, um die Liste der Kontooptionen zu filtern, die der Browser dem Benutzer zum Anmelden anbietet. Dies geschieht, wenn die `loginHint`-Eigenschaft innerhalb [`identity.providers`](/de/docs/Web/API/IdentityCredentialRequestOptions#providers) in einem verwandten `get()`-Aufruf bereitgestellt wird. Jedes Konto mit einer Zeichenfolge in seinem `login_hints`-Array, die der bereitgestellten `loginHint` entspricht, wird aufgenommen.

> [!NOTE]
> Wenn der Benutzer in keinem IdP-Konto angemeldet ist, sollte der Endpunkt mit [HTTP 401 (Unauthorized)](/de/docs/Web/HTTP/Reference/Status/401) antworten.

### Der Client-Metadaten-Endpunkt

Der Browser sendet nicht authentifizierte Anfragen an diesen Endpunkt über die `GET`-Methode, wobei die `clientId` als Parameter in den `get()`-Aufruf übergeben wird.

Zum Beispiel:

```http
GET /client_metadata.php?client_id=1234 HTTP/1.1
Host: idp.example
Origin: https://rp.example/
Accept: application/json
Sec-Fetch-Dest: webidentity
```

Die Antwort auf eine erfolgreiche Anfrage enthält URLs, die auf die Metadaten- und Servicebedingungen-Seiten des RP verweisen und in der vom Browser bereitgestellten FedCM-Benutzeroberfläche verwendet werden sollen. Dies sollte der unten gezeigten JSON-Struktur folgen:

```json
{
  "privacy_policy_url": "https://rp.example/privacy_policy.html",
  "terms_of_service_url": "https://rp.example/terms_of_service.html"
}
```

### Der ID-Assertion-Endpunkt

Der Browser sendet authentifizierte Anfragen an diesen Endpunkt über die [`POST`](/de/docs/Web/HTTP/Reference/Methods/POST)-Methode, mit einem Content-Typ von `application/x-www-form-urlencoded`. Die Anfrage enthält auch eine Nutzlast mit Details über die versuchte Anmeldung und das Konto, das validiert werden soll.

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

Eine Anfrage an diesen Endpunkt wird als Ergebnis der Auswahl eines Kontos zur Anmeldung von der relevanten Browser-Benutzeroberfläche gesendet. Bei Übermittlung gültiger Benutzeranmeldeinformationen sollte dieser Endpunkt mit einem Validierungstoken antworten, das die RP verwenden kann, um den Benutzer auf ihrem eigenen Server zu validieren, gemäß den Nutzungsanweisungen, die vom IdP bereitgestellt werden. Sobald die RP den Benutzer validiert, können sie diesen anmelden, zu ihrem Dienst registrieren usw.

```json
{
  "token": "***********"
}
```

Die Anfrage-Nutzlast enthält die folgenden Parameter:

- `client_id`
  - : Die Client-Kennung der RP (die der `clientId` aus der ursprünglichen `get()`-Anfrage entspricht).
- `account_id`
  - : Die eindeutige ID des Benutzerkontos, das angemeldet werden soll (die der `id` des Benutzers aus der Antwort des Kontenlisten-Endpunkts entspricht).
- `nonce` {{optional_inline}}
  - : Der Anforderungs-Nonce, bereitgestellt von der RP.
- `disclosure_text_shown`
  - : Eine Zeichenfolge von `"true"` oder `"false"`, die angibt, ob der Offenlegungstext angezeigt wurde oder nicht. Der Offenlegungstext ist die dem Benutzer angezeigte Information (die die Links zu den Servicebedingungen und zur Datenschutzerklärung enthalten kann, falls bereitgestellt), wenn der Benutzer bei der IdP angemeldet ist, jedoch kein spezielles Konto auf der aktuellen RP hat (in diesem Fall müssen sie sich entscheiden, als ihre IdP-Identität „weiterzumachen“ und dann ein entsprechendes Konto auf der RP zu erstellen).
- `is_auto_selected`
  - : Eine Zeichenfolge von `"true"` oder `"false"`, die angibt, ob die Anmeldeverifizierungsanfrage aufgrund einer [automatischen erneuten Authentifizierung](/de/docs/Web/API/FedCM_API/RP_sign-in#auto-reauthentication) gestellt wurde, d.h. ohne Benutzereingabe. Dies kann auftreten, wenn der [`get()`](/de/docs/Web/API/CredentialsContainer/get)-Aufruf mit einem [`mediation`](/de/docs/Web/API/CredentialsContainer/get#mediation)-Optionswert von `"optional"` oder `"silent"` ausgeführt wird. Es ist nützlich für den IdP zu wissen, ob eine automatische Authentifizierung erfolgte, um die Leistung zu bewerten und um gegebenenfalls höhere Sicherheit zu gewährleisten. Der IdP könnte beispielsweise einen Fehlercode zurückgeben, der der RP mitteilt, dass er eine ausdrückliche Benutzervermittlung erfordert (`mediation="required"`).

> [!NOTE]
> Wenn der [`get()`](/de/docs/Web/API/CredentialsContainer/get)-Aufruf erfolgreich ist, wird der `is_auto_selected`-Wert auch an die RP über die [`IdentityCredential.isAutoSelected`](/de/docs/Web/API/IdentityCredential/isAutoSelected)-Eigenschaft kommuniziert.

#### CORS-Header für den ID-Assertion-Endpunkt

Die Antwort des ID-Assertion-Endpunkts muss die Header {{httpheader("Access-Control-Allow-Origin")}} und {{httpheader("Access-Control-Allow-Credentials")}} enthalten, und das `Access-Control-Allow-Origin` muss den Ursprung des Anfragenden enthalten:

```http
Access-Control-Allow-Origin: https://rp.example
Access-Control-Allow-Credentials: true
```

Beachten Sie, dass das `Access-Control-Allow-Origin` auf den spezifischen Ursprung des Anfragenden (der RP) festgelegt werden muss und nicht auf den Jokerwert `*` gesetzt werden kann.

Ohne diese Header wird die Anfrage mit einem Netzwerkfehler fehlschlagen.

#### ID-Assertion-Fehlerantworten

Wenn der IdP kein Token ausstellen kann - zum Beispiel wenn der Client nicht autorisiert ist -, wird der ID-Assertion-Endpunkt mit einer Fehlerantwort antworten, die Informationen über die Art des Fehlers enthält. Zum Beispiel:

```json
{
  "error": {
    "code": "access_denied",
    "url": "https://idp.example/error?type=access_denied"
  }
}
```

Die Fehlerantwort-Felder sind wie folgt:

- `code` {{optional_inline}}
  - : Eine Zeichenfolge. Dies kann entweder ein bekannter Fehler aus der [OAuth 2.0-spezifizierten Fehlerliste](https://datatracker.ietf.org/doc/html/rfc6749#section-4.1.2.1) oder eine beliebige Zeichenfolge sein.
- `url` {{optional_inline}}
  - : Eine URL. Dies sollte eine Webseite sein, die menschenlesbare Informationen über den Fehler enthält, die den Benutzern angezeigt werden können, wie z. B. Anweisungen zur Behebung des Fehlers oder zur Kontaktaufnahme mit dem Kundenservice. Die URL muss gleichherkunftlich mit der Konfigurations-URL des IdP sein.

Diese Informationen können auf verschiedene Arten verwendet werden:

- Der Browser kann eine benutzerdefinierte Benutzeroberfläche anzeigen, die den Benutzer darüber informiert, was schiefgelaufen ist (siehe die [Chrome-Dokumentation](https://privacysandbox.google.com/blog/fedcm-chrome-120-updates#error-api) für ein Beispiel). Beachten Sie, dass, wenn die Anfrage aufgrund eines nicht verfügbaren IdP-Servers fehlschlägt, dieser offensichtlich keine Informationen zurückgeben kann. In solchen Fällen wird der Browser dies über eine generische Nachricht melden.
- Der zugehörige RP [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get)-Aufruf, der zur Anmeldeversuchung verwendet wird, wird sein Versprechen mit einem `IdentityCredentialError` ablehnen, der die Fehlerinformationen enthält. Eine RP kann diesen Fehler abfangen und dann die benutzerdefinierte Benutzeroberfläche des Browsers mit einigen Informationen ergänzen, um dem Benutzer zu helfen, bei einem zukünftigen Anmeldeversuch erfolgreich zu sein.

## Aktualisieren des Anmeldestatus mit der Login Status API

Die **Login Status API** ermöglicht es einem IdP, einem Browser seinen Anmeldestatus (Anmeldezustand) in diesem bestimmten Browser mitzuteilen - dabei geht es darum, "ob irgendwelche Benutzer im aktuellen Browser beim IdP angemeldet sind oder nicht". Der Browser speichert diesen Zustand für jeden IdP; die FedCM API nutzt diesen dann, um die Anzahl der Anfragen an den IdP zu reduzieren (da keine Zeit für Anfragen zu Konten verschwendet werden muss, wenn keine Benutzer beim IdP angemeldet sind). Sie entschärft auch [mögliche Timing-Angriffe](https://github.com/w3c-fedid/FedCM/issues/447).

Für jeden bekannten IdP (identifiziert durch seine Konfigurations-URL) behält der Browser eine Drei-Zustand-Variable bei, die den Anmeldezustand mit drei möglichen Werten darstellt:

- `"logged-in"`: Der IdP hat mindestens ein Benutzerkonto angemeldet. Beachten Sie, dass die RP und der Browser zu diesem Zeitpunkt nicht wissen, welcher Benutzer dies ist. Informationen zu spezifischen Benutzern werden zu einem späteren Zeitpunkt im FedCM-Ablauf vom [`accounts_endpoint`](#der_kontenlisten-endpunkt) des IdP zurückgegeben.
- `"logged-out"`: Alle IdP-Konten sind derzeit abgemeldet.
- `"unknown"`: Der Anmeldestatus dieser IdP ist nicht bekannt. Dies ist der Standardwert.

### Einstellen des Anmeldestatus

Der IdP sollte seinen Anmeldestatus aktualisieren, wenn ein Benutzer sich beim IdP anmeldet oder abmeldet. Dies kann auf zwei verschiedene Arten erfolgen:

- Der {{httpheader("Set-Login")}} HTTP-Antwort-Header kann in einer Top-Level-Navigation oder einer gleichherkunftlichen Subressourcen-Anfrage gesetzt werden:

  ```http
  Set-Login: logged-in

  Set-Login: logged-out
  ```

- Die [`Navigator.login.setStatus()`](/de/docs/Web/API/NavigatorLogin/setStatus)-Methode kann vom IdP-Ursprung aufgerufen werden:

  ```js
  /* Set logged-in status */
  navigator.login.setStatus("logged-in");

  /* Set logged-out status */
  navigator.login.setStatus("logged-out");
  ```

### Wie sich der Anmeldestatus auf den föderierten Anmeldeablauf auswirkt

Wenn ein [RP einen föderierten Anmeldeversuch unternimmt](/de/docs/Web/API/FedCM_API/RP_sign-in), wird der Anmeldestatus überprüft:

- Wenn der Anmeldestatus `"logged-in"` ist, wird eine Anfrage an den [Kontenlisten-Endpunkt des IdP](#der_kontenlisten-endpunkt) gestellt und die verfügbaren Konten zur Anmeldung werden dem Benutzer im vom Browser bereitgestellten FedCM-Dialog angezeigt.
- Wenn der Anmeldestatus `"logged-out"` ist, lehnt der von der FedCM-`get()`-Anfrage zurückgegebene Promise ab, ohne eine Anfrage an den Kontenlisten-Endpunkt zu stellen. In einem solchen Fall liegt es am Entwickler, den Ablauf zu steuern, z. B. indem der Benutzer aufgefordert wird, sich bei einem geeigneten IdP anzumelden.
- Wenn der Anmeldestatus `"unknown"` ist, wird eine Anfrage an den Kontenlisten-Endpunkt des IdP gestellt und der Anmeldestatus basierend auf der Antwort aktualisiert:
  - Wenn der Endpunkt eine Liste verfügbarer Konten zur Anmeldung zurückgibt, wird der Status auf `"logged-in"` aktualisiert und die Anmeldeoptionen werden dem Benutzer im vom Browser bereitgestellten FedCM-Dialog angezeigt.
  - Wenn der Endpunkt keine Konten zurückgibt, wird der Status auf `"logged-out"` aktualisiert; die von der FedCM-`get()`-Anfrage zurückgegebene Promise wird dann abgelehnt.

### Was passiert, wenn der Anmeldestatus von Browser und IdP nicht synchron ist?

Trotz der Tatsache, dass die Login Status API dem Browser den Anmeldestatus des IdP mitteilt, ist es möglich, dass der Browser und der IdP nicht synchron sind. Beispielsweise können IdP-Sitzungen ablaufen, was bedeutet, dass alle Benutzerkonten abgemeldet werden, aber der Anmeldestatus immer noch auf `"logged-in"` gesetzt ist (die Anwendung konnte den Anmeldestatus nicht auf `"logged-out"` setzen). In einem solchen Fall wird bei einem Versuch der föderierten Anmeldung eine Anfrage an den Kontenlisten-Endpunkt des IdP gestellt, es werden jedoch keine verfügbaren Konten zurückgegeben, da die Sitzung nicht mehr verfügbar ist.

Wenn dies geschieht, kann der Browser dynamisch dem Benutzer ermöglichen, sich beim IdP anzumelden, indem er die Anmeldeseite des IdP in einem Dialog öffnet (die Anmelde-URL ist in der [Konfigurationsdatei des IdP](#bereitstellung_einer_konfigurationsdatei_und_endpunkten) `login_url` zu finden). Die genaue Art dieses Ablaufs liegt im Ermessen des Browsers; zum Beispiel [handhabt Chrome dies so](https://privacysandbox.google.com/blog/fedcm-chrome-120-updates#what_if_the_user_session_expires_let_the_user_sign_in_through_a_dynamic_login_flow).

Sobald der Benutzer sich beim IdP angemeldet hat, sollte der IdP:

- Den Browser darüber informieren, dass der Benutzer sich angemeldet hat, indem er [den Anmeldestatus auf `"logged-in"` setzt](#einstellen_des_anmeldestatus).
- Den Anmelde-Dialog durch Aufruf der [`IdentityProvider.close()`](/de/docs/Web/API/IdentityProvider/close_static)-Methode schließen.

## Siehe auch

- [Federated Credential Management API](https://privacysandbox.google.com/cookies/fedcm) auf privacysandbox.google.com (2023)
