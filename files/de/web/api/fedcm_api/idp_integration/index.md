---
title: Integration des Identitätsanbieters mit FedCM
slug: Web/API/FedCM_API/IDP_integration
l10n:
  sourceCommit: 6b7cddb9daa5e9f6f23300d90c18a0a4d3bbdda0
---

{{DefaultAPISidebar("FedCM API")}}

Dieser Artikel beschreibt alle Schritte, die ein Identitätsanbieter (IdP) unternehmen muss, um in die Federated Credential Management (FedCM) API zu integrieren.

## Schritte zur Integration des IdP

Um mit FedCM zu integrieren, muss ein IdP Folgendes tun:

1. [Eine bekannte Datei bereitstellen](#eine_bekannte_datei_bereitstellen), um den IdP zu identifizieren.
2. [Eine Konfigurationsdatei und Endpunkte bereitstellen](#eine_konfigurationsdatei_und_endpunkte_bereitstellen) für die Kontenliste und die Ausstellung von Behauptungen (und optional Client-Metadaten).
3. [Seinen Anmeldestatus aktualisieren](#anmeldestatus_mit_der_login_status_api_aktualisieren) unter Verwendung der Login Status API.

## Eine bekannte Datei bereitstellen

Es gibt ein mögliches Datenschutzproblem, bei dem ein [IdP in der Lage ist, zu erkennen, ob ein Benutzer ohne ausdrückliche Zustimmung einen RP besucht hat](https://github.com/w3c-fedid/FedCM/issues/230). Dies hat Tracking-Implikationen, daher muss ein IdP eine bekannte Datei bereitstellen, um seine Identität zu überprüfen und dieses Problem zu entschärfen.

Die bekannte Datei wird über eine nicht kredenzierte [`GET`](/de/docs/Web/HTTP/Reference/Methods/GET)-Anfrage angefordert, die keine Weiterleitungen verfolgt. Dies verhindert effektiv, dass der IdP erfährt, wer die Anfrage gestellt hat und welcher RP versucht, sich zu verbinden.

Die bekannte Datei muss vom [eTLD+1](https://web.dev/articles/same-site-same-origin#site) des IdP unter `/.well-known/web-identity` bereitgestellt werden. Zum Beispiel, wenn die IdP-Endpunkte unter `https://accounts.idp.example/` bedient werden, müssen sie eine bekannte Datei unter `https://idp.example/.well-known/web-identity` bereitstellen. Der Inhalt der bekannten Datei sollte die folgende JSON-Struktur haben:

```json
{
  "provider_urls": ["https://accounts.idp.example/config.json"]
}
```

Das `provider_urls`-Mitglied sollte ein Array von URLs enthalten, die auf gültige IdP-Konfigurationsdateien verweisen, welche von RPs zur Interaktion mit dem IdP verwendet werden können. Die Array-Länge ist derzeit auf eins begrenzt.

## Der HTTP-Header `Sec-Fetch-Dest`

Alle vom Browser über FedCM gesendeten Anfragen enthalten einen `{{httpheader("Sec-Fetch-Dest")}}: webidentity`-Header. Alle IdP-Endpunkte, die Anfragen mit Anmeldedaten erhalten (d. h. `accounts_endpoint` und `id_assertion_endpoint`), müssen bestätigen, dass dieser Header enthalten ist, um Schutz vor {{Glossary("CSRF", "CSRF")}}-Angriffen zu bieten.

## Eine Konfigurationsdatei und Endpunkte bereitstellen

Die IdP-Konfigurationsdatei enthält eine Liste der Endpunkte, die der Browser benötigt, um den Identitätsföderationsfluss zu verarbeiten und die Anmeldungen zu verwalten. Die Endpunkte müssen gleichherkunft mit der Konfiguration sein.

Der Browser stellt eine nicht kredenzierte Anfrage für die Konfigurationsdatei über die [`GET`](/de/docs/Web/HTTP/Reference/Methods/GET)-Methode, die keine Weiterleitungen verfolgt. Dies verhindert effektiv, dass der IdP erfährt, wer die Anfrage gestellt hat und welcher RP versucht, sich zu verbinden.

Die Konfigurationsdatei (in unserem Beispiel unter `https://accounts.idp.example/config.json` gehostet) sollte die folgende JSON-Struktur haben:

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
  - : Die URL für den Endpunkt der Kontenliste, die eine Liste von Konten zurückgibt, bei denen der Benutzer derzeit beim IdP angemeldet ist. Der Browser verwendet diese, um eine Liste von Anmeldeoptionen zu erstellen, die dem Benutzer in der vom Browser bereitgestellten FedCM-Benutzeroberfläche angezeigt werden.
- `client_metadata_endpoint` {{optional_inline}}
  - : Die URL für den Endpunkt der Client-Metadaten, der URLs bereitstellt, die auf die Metadaten und Servicebedingungen des RP verweisen, die in der FedCM-Benutzeroberfläche verwendet werden sollen.
- `id_assertion_endpoint`
  - : Die URL für den ID-Bestätigungsendpunkt, der bei Eingabe gültiger Benutzeranmeldeinformationen mit einem Bestätigungstoken antworten sollte, das der RP zur Authentifizierungsvalidierung verwenden kann.
- `login_url`
  - : Die URL der Anmeldeseite, über die der Benutzer sich beim IdP anmeldet.
- `branding` {{optional_inline}}
  - : Enthält Branding-Informationen, die in der vom Browser bereitgestellten FedCM-Benutzeroberfläche zur Anpassung des Aussehens gemäß den Wünschen des IdP verwendet werden.

Die folgende Tabelle fasst die verschiedenen Anfragen zusammen, die von der FedCM API gestellt werden:

| Endpunkt/Ressource         | Methode | Mit Anmeldedaten (mit Cookies) | Enthält {{httpheader("Origin")}} |
| -------------------------- | ------- | ------------------------------ | -------------------------------- |
| `well-known`/`config.json` | `GET`   | Nein                           | Nein                             |
| `accounts_endpoint`        | `GET`   | Ja                             | Nein                             |
| `client_metadata_endpoint` | `GET`   | Nein                           | Ja                               |
| `id_assertion_endpoint`    | `POST`  | Ja                             | Ja                               |

> [!NOTE]
> Für eine Beschreibung des FedCM-Flusses, in dem diese Endpunkte aufgerufen werden, siehe [FedCM-Anmeldefluss](/de/docs/Web/API/FedCM_API/RP_sign-in#fedcm_sign-in_flow).

> [!NOTE]
> Keine der Anfragen, die von der FedCM API an die hier beschriebenen Endpunkte gestellt werden, erlauben das Folgen von Weiterleitungen, aus Gründen des Datenschutzes.

### Der Endpunkt der Kontenliste

Der Browser sendet Anfragen mit Anmeldedaten (d. h. mit einem Cookie, das den angemeldeten Benutzer identifiziert) an diesen Endpunkt über die `GET`-Methode. Die Anfrage enthält keinen `client_id`-Parameter, keinen {{httpheader("Origin")}}-Header und keinen {{httpheader("Referer")}}-Header. Dies verhindert wirksam, dass der IdP erfährt, bei welchem RP der Benutzer sich anmelden möchte. Die zurückgegebene Liste der Konten ist RP-unabhängig.

Beispiel:

```http
GET /accounts.php HTTP/1.1
Host: idp.example
Accept: application/json
Cookie: 0x23223
Sec-Fetch-Dest: webidentity
```

Die Antwort auf eine erfolgreiche Anfrage gibt eine Liste aller IdP-Konten zurück, bei denen der Benutzer derzeit angemeldet ist (nicht spezifisch für ein bestimmtes RP), mit einer JSON-Struktur, die wie folgt aussieht:

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

Dies umfasst die folgenden Informationen:

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
  - : Ein Array von RP-Clients, bei denen der Benutzer registriert ist.
- `login_hints` {{optional_inline}}
  - : Ein Array von Zeichenketten, die das Konto darstellen. Diese Zeichenketten werden verwendet, um die Liste der Kontooptionen zu filtern, die der Browser dem Benutzer zur Anmeldung anbietet. Dies geschieht, wenn die Eigenschaft `loginHint` innerhalb von [`identity.providers`](/de/docs/Web/API/IdentityCredentialRequestOptions#providers) in einem entsprechenden `get()`-Aufruf bereitgestellt wird. Jedes Konto, das eine Zeichenkette in seinem `login_hints`-Array enthält, die mit dem bereitgestellten `loginHint` übereinstimmt, wird einbezogen.

> [!NOTE]
> Wenn der Benutzer bei keinem IdP-Konto angemeldet ist, sollte der Endpunkt mit [HTTP 401 (Unauthorized)](/de/docs/Web/HTTP/Reference/Status/401) antworten.

### Der Endpunkt für Client-Metadaten

Der Browser sendet nicht kredenzierte Anfragen an diesen Endpunkt mit der `GET`-Methode, wobei der `clientId` als Parameter in den `get()`-Aufruf übergeben wird.

Beispiel:

```http
GET /client_metadata.php?client_id=1234 HTTP/1.1
Host: idp.example
Origin: https://rp.example/
Accept: application/json
Sec-Fetch-Dest: webidentity
```

Die Antwort auf eine erfolgreiche Anfrage enthält URLs, die auf die Metadaten des RP und die Seiten zu den Servicebedingungen verweisen, welche in der vom Browser bereitgestellten FedCM-Benutzeroberfläche verwendet werden sollen. Diese sollte der folgenden JSON-Struktur entsprechen:

```json
{
  "privacy_policy_url": "https://rp.example/privacy_policy.html",
  "terms_of_service_url": "https://rp.example/terms_of_service.html"
}
```

### Der Endpunkt für ID-Bestätigungen

Der Browser sendet Anfragen mit Anmeldedaten an diesen Endpunkt über die [`POST`](/de/docs/Web/HTTP/Reference/Methods/POST)-Methode, mit einem Content-Typ von `application/x-www-form-urlencoded`. Die Anfrage enthält auch eine Nutzlast mit Details über den Anmeldeversuch und das zu validierende Konto.

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

Eine Anfrage an diesen Endpunkt wird als Ergebnis der Auswahl eines Kontos zur Anmeldung durch den Benutzer in der relevanten Benutzeroberfläche des Browsers gesendet. Wenn gültige Benutzeranmeldedaten gesendet werden, sollte dieser Endpunkt mit einem Validierungstoken antworten, das der RP verwenden kann, um den Benutzer auf seinem eigenen Server zu validieren, gemäß den von dem IdP, den sie für die Identitätsföderation verwenden, umrissenen Anweisungen. Sobald der RP den Benutzer validiert, können sie ihn anmelden, ihn für ihren Dienst registrieren usw.

```json
{
  "token": "***********"
}
```

Die Nutzlast der Anfrage enthält die folgenden Parameter:

- `client_id`
  - : Die Kundenkennung des RP (die mit der `clientId` des ursprünglichen `get()`-Anrufs übereinstimmt).
- `account_id`
  - : Die eindeutige ID des Benutzerkontos, das zur Anmeldung verwendet werden soll (die mit der `id` des Benutzers aus der Antwort des Endpunkts für die Kontenliste übereinstimmt).
- `nonce` {{optional_inline}}
  - : Die Anfragenonce, bereitgestellt vom RP.
- `disclosure_text_shown`
  - : Eine Zeichenkette `"true"` oder `"false"`, die anzeigt, ob der Offenlegungstext angezeigt wurde oder nicht. Der Offenlegungstext sind die dem Benutzer angezeigten Informationen (die, falls bereitgestellt, die Links zu den Servicebedingungen und Datenschutzrichtlinien enthalten können), falls der Benutzer beim IdP angemeldet ist, aber kein spezifisches Konto beim aktuellen RP hat (in welchem Fall sie dem IdP gegenüber als ihre Identität "Weiterfahren als..." wählen und dann ein entsprechendes Konto beim RP erstellen müssen).
- `is_auto_selected`
  - : Eine Zeichenkette `"true"` oder `"false"`, die anzeigt, ob die Authentifizierungsvalidierungsanfrage infolge einer [automatischen Wiederanmeldung](/de/docs/Web/API/FedCM_API/RP_sign-in#auto-reauthentication) gestellt wurde, d. h. ohne Benutzermitwirkung. Dies kann auftreten, wenn der [`get()`](/de/docs/Web/API/CredentialsContainer/get)-Anruf mit einer [`mediation`](/de/docs/Web/API/CredentialsContainer/get#mediation)-Option mit dem Wert `"optional"` oder `"silent"` ausgeführt wird. Es ist nützlich für den IdP zu wissen, ob eine automatische Wiederanmeldung erfolgt ist, um die Leistung zu bewerten und für den Fall, dass höhere Sicherheit erwünscht ist. Beispielsweise könnte der IdP einen Fehlercode zurückgeben, der dem RP mitteilt, dass eine explizite Benutzermitwirkung erforderlich ist (`mediation="required"`).

> [!NOTE]
> Wenn der [`get()`](/de/docs/Web/API/CredentialsContainer/get)-Anruf erfolgreich ist, wird der Wert `is_auto_selected` auch über die [Eigenschaft `IdentityCredential.isAutoSelected`](/de/docs/Web/API/IdentityCredential/isAutoSelected) an das RP kommuniziert.

#### CORS-Header für den ID-Bestätigungsendpunkt

Die Antwort des ID-Bestätigungsendpunkts muss die Header {{httpheader("Access-Control-Allow-Origin")}} und {{httpheader("Access-Control-Allow-Credentials")}} enthalten, und `Access-Control-Allow-Origin` muss die Herkunft des Anfragestellers einschließen:

```http
Access-Control-Allow-Origin: https://rp.example
Access-Control-Allow-Credentials: true
```

Beachten Sie, dass `Access-Control-Allow-Origin` auf die spezifische Herkunft des Anfragestellers (des RP) gesetzt sein muss und nicht der Platzhalterwert `*` sein darf.

Ohne diese Header schlägt die Anfrage mit einem Netzwerkfehler fehl.

#### Fehlerantworten des ID-Bestätigungsendpunkts

Wenn der IdP kein Token ausstellen kann — zum Beispiel, wenn der Client nicht autorisiert ist —, antwortet der ID-Bestätigungsendpunkt mit einer Fehlerantwort, die Informationen über die Art des Fehlers enthält. Zum Beispiel:

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
  - : Eine Zeichenkette. Dies kann entweder ein bekannter Fehler aus der [OAuth 2.0 spezifizierten Fehlerliste](https://datatracker.ietf.org/doc/html/rfc6749#section-4.1.2.1) oder eine beliebige Zeichenkette sein.
- `url` {{optional_inline}}
  - : Eine URL. Dies sollte eine Webseite sein, die dem Benutzer menschlich lesbare Informationen über den Fehler anzeigt, wie z. B. wie der Fehler behoben oder der Kundendienst kontaktiert werden kann. Die URL muss mit der Konfigurations-URL des IdP gleichherkunft sein.

Diese Informationen können auf mehrere Arten verwendet werden:

- Der Browser kann dem Benutzer eine benutzerdefinierte Benutzeroberfläche anzeigen, die ihm mitteilt, was schiefgelaufen ist (siehe die [Chrome-Dokumentation](https://developers.google.com/privacy-sandbox/blog/fedcm-chrome-120-updates#error-api) für ein Beispiel). Beachten Sie, dass, wenn die Anfrage aufgrund eines nicht verfügbaren IdP-Servers fehlgeschlagen ist, dieser offensichtlich keine Informationen zurückgeben kann. In solchen Fällen gibt der Browser dies durch eine generische Nachricht weiter.
- Der mit dem RP verbundene [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get)-Anruf, der zur Anmeldung verwendet wurde, wird mit einem `IdentityCredentialError`, der die Fehlerinformationen enthält, ablehnen. Ein RP kann diesen Fehler abfangen und dann nach der benutzerdefinierten Benutzeroberfläche des Browsers einige Informationen bereitstellen, die dem Benutzer helfen, bei einem zukünftigen Anmeldeversuch erfolgreich zu sein.

## Anmeldestatus mit der Login Status API aktualisieren

Die **Login Status API** ermöglicht es einem IdP, einem Browser seinen Anmeldestatus in genau diesem Browser mitzuteilen — das heißt "ob irgendwelche Benutzer derzeit im IdP auf dem aktuellen Browser angemeldet sind oder nicht". Der Browser speichert diesen Status für jeden IdP; die FedCM API nutzt diesen dann, um die Anzahl der Anfragen zu reduzieren, die sie an den IdP sendet (da keine Zeit damit verschwendet werden muss, Konten anzufordern, wenn keine Benutzer beim IdP angemeldet sind). Dies verringert auch [mögliche Timing-Angriffe](https://github.com/w3c-fedid/FedCM/issues/447).

Für jeden bekannten IdP (identifiziert durch seine Konfigurations-URL) hält der Browser eine Drei-Zustands-Variable vor, die den Anmeldestatus mit drei möglichen Werten darstellt:

- `"logged-in"`: Der IdP hat mindestens ein Benutzerkonto, bei dem der Benutzer angemeldet ist. Beachten Sie, dass der RP und der Browser in diesem Stadium nicht wissen, welcher Benutzer das ist. Informationen zu spezifischen Benutzern werden zu einem späteren Zeitpunkt im FedCM-Fluss vom [`accounts_endpoint`](#der_endpunkt_der_kontenliste) des IdP zurückgegeben.
- `"logged-out"`: Alle IdP-Konten sind derzeit abgemeldet.
- `"unknown"`: Der Anmeldestatus dieses IdP ist unbekannt. Dies ist der Standardwert.

### Anmeldestatus festlegen

Der IdP sollte seinen Anmeldestatus aktualisieren, wenn sich ein Benutzer beim IdP an- oder abmeldet. Dies kann auf zwei verschiedene Arten erfolgen:

- Der {{httpheader("Set-Login")}} HTTP-Antwortheader kann in einer Top-Level-Navigation oder einem gleichherkunftsbezogenen Unterressourcenanfrage gesetzt werden:

  ```http
  Set-Login: logged-in

  Set-Login: logged-out
  ```

- Die Methode [`Navigator.login.setStatus()`](/de/docs/Web/API/NavigatorLogin/setStatus) kann von der Herkunft des IdP aus aufgerufen werden:

  ```js
  /* Set logged-in status */
  navigator.login.setStatus("logged-in");

  /* Set logged-out status */
  navigator.login.setStatus("logged-out");
  ```

### Wie der Anmeldestatus den föderierten Anmeldeprozess beeinflusst

Wenn ein [RP versucht, sich föderiert anzumelden](/de/docs/Web/API/FedCM_API/RP_sign-in), wird der Anmeldestatus überprüft:

- Wenn der Anmeldestatus `"logged-in"` ist, wird eine Anfrage an den [Endpunkt der Kontenliste](#der_endpunkt_der_kontenliste) des IdP gestellt und verfügbare Konten zur Anmeldung werden dem Benutzer im vom Browser bereitgestellten FedCM-Dialog angezeigt.
- Wenn der Anmeldestatus `"logged-out"` ist, wird die von der FedCM-`get()`-Anfrage zurückgegebene Promise abgelehnt, ohne eine Anfrage an den Endpunkt der Kontenliste zu stellen. In einem solchen Fall liegt es am Entwickler, den Prozess zu handhaben, z. B. indem er den Benutzer auffordert, sich beim geeigneten IdP anzumelden.
- Wenn der Anmeldestatus `"unknown"` ist, wird eine Anfrage an den Endpunkt der Kontenliste des IdP gestellt und der Anmeldestatus wird abhängig von der Antwort aktualisiert:
  - Wenn der Endpunkt eine Liste verfügbarer Konten zur Anmeldung zurückgibt, wird der Status auf `"logged-in"` aktualisiert und die Anmeldeoptionen werden dem Benutzer im vom Browser bereitgestellten FedCM-Dialog angezeigt.
  - Wenn der Endpunkt keine Konten zurückgibt, wird der Status auf `"logged-out"` aktualisiert; die von der FedCM-`get()`-Anfrage zurückgegebene Promise wird dann abgelehnt.

### Was passiert, wenn der Anmeldestatus des Browsers und des IdP nicht synchron ist?

Trotz der Tatsache, dass die Login Status API dem Browser den Anmeldestatus des IdP mitteilt, ist es möglich, dass der Browser und der IdP nicht synchron sind. Beispielsweise könnten die IdP-Sitzungen ablaufen, was bedeutet, dass alle Benutzerkonten abgemeldet werden, aber der Anmeldestatus immer noch auf `"logged-in"` gesetzt ist (die Anwendung war nicht in der Lage, den Anmeldestatus auf `"logged-out"` zu setzen). In einem solchen Fall, wenn versucht wird, sich föderiert anzumelden, wird eine Anfrage an den Endpunkt der Kontenliste des IdP gestellt, aber es werden keine verfügbaren Konten zurückgegeben, da die Sitzung nicht mehr verfügbar ist.

Wenn dies geschieht, kann der Browser dynamisch einem Benutzer erlauben, sich beim IdP anzumelden, indem er die Anmeldeseite des IdP in einem Dialog öffnet (die Anmelde-URL befindet sich in der [Konfigurationsdatei](#eine_konfigurationsdatei_und_endpunkte_bereitstellen) `login_url` des IdP). Die genaue Natur dieses Prozesses liegt im Ermessen des Browsers; beispielsweise [handhabt Chrome dies so](https://developers.google.com/privacy-sandbox/blog/fedcm-chrome-120-updates#what_if_the_user_session_expires_let_the_user_sign_in_through_a_dynamic_login_flow).

Sobald der Benutzer beim IdP angemeldet ist, sollte der IdP:

- Dem Browser mitteilen, dass der Benutzer angemeldet ist, indem [der Anmeldestatus auf `"logged-in"` gesetzt wird](#anmeldestatus_festlegen).
- Den Anmeldedialog schließen, indem die Methode [`IdentityProvider.close()`](/de/docs/Web/API/IdentityProvider/close_static) aufgerufen wird.

## Siehe auch

- [Federated Credential Management API](https://developers.google.com/privacy-sandbox/cookies/fedcm) auf developers.google.com (2023)
