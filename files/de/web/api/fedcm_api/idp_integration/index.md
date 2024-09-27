---
title: Identitätsanbieter-Integration mit FedCM
slug: Web/API/FedCM_API/IDP_integration
l10n:
  sourceCommit: 2b6f99e45534ce662f842d8b4d2f7845492e353c
---

{{DefaultAPISidebar("FedCM API")}}

Dieser Artikel beschreibt alle Schritte, die ein Identitätsanbieter (IdP) unternehmen muss, um sich in die Federated Credential Management (FedCM) API zu integrieren.

## IdP-Integrationsschritte

Um sich mit FedCM zu integrieren, muss ein IdP Folgendes tun:

1. [Bereitstellen einer Well-Known-Datei](#bereitstellen_einer_well-known-datei), um den IdP zu identifizieren.
2. [Bereitstellen einer Konfigurationsdatei und Endpunkte](#bereitstellen_einer_konfigurationsdatei_und_endpunkte) für die Kontenliste und die Ausgabe von Bestätigungen (und optional, Client-Metadaten).
3. [Aktualisieren des Anmeldestatus](#anmeldestatus_aktualisieren_mit_der_login_status_api) mithilfe der Login Status API.

## Bereitstellen einer Well-Known-Datei

Es gibt ein potenzielles Datenschutzproblem, bei dem ein [IdP herausfinden kann, ob ein Benutzer eine RP besucht hat, ohne ausdrückliche Zustimmung](https://github.com/w3c-fedid/FedCM/issues/230). Dies hat Auswirkungen auf das Tracking, daher muss ein IdP eine Well-Known-Datei bereitstellen, um seine Identität zu verifizieren und dieses Problem zu mildern.

Die Well-Known-Datei wird über eine unberechtigte [`GET`](/de/docs/Web/HTTP/Methods/GET)-Anfrage angefordert, die keine Weiterleitungen folgt. Dies verhindert effektiv, dass der IdP erfährt, wer die Anfrage gestellt hat und welche RP versucht, eine Verbindung herzustellen.

Die Well-Known-Datei muss vom [eTLD+1](https://web.dev/articles/same-site-same-origin#site) des IdP unter `/.well-known/web-identity` bereitgestellt werden. Wenn die IdP-Endpunkte beispielsweise unter `https://accounts.idp.example/` bereitgestellt werden, müssen sie eine Well-Known-Datei unter `https://idp.example/.well-known/web-identity` bereitstellen. Der Inhalt der Well-Known-Datei sollte die folgende JSON-Struktur aufweisen:

```json
{
  "provider_urls": ["https://accounts.idp.example/config.json"]
}
```

Das `provider_urls`-Element sollte ein Array von URLs enthalten, die auf gültige IdP-Konfigurationsdateien verweisen, die von RPs verwendet werden können, um mit dem IdP zu interagieren. Die Array-Länge ist derzeit auf eins begrenzt.

## Der `Sec-Fetch-Dest` HTTP-Header

Alle Anfragen, die vom Browser über FedCM gesendet werden, beinhalten einen `{{httpheader("Sec-Fetch-Dest")}}: webidentity`-Header. Alle IdP-Endpunkte, die berechtigte Anfragen erhalten (d.h. `accounts_endpoint` und `id_assertion_endpoint`), müssen bestätigen, dass dieser Header enthalten ist, um sich gegen [CSRF](/de/docs/Glossary/CSRF)-Angriffe zu schützen.

## Bereitstellen einer Konfigurationsdatei und Endpunkte

Die IdP-Konfigurationsdatei bietet eine Liste der Endpunkte, die der Browser benötigt, um den Identitätsfederations-Flow zu verarbeiten und die Anmeldungen zu verwalten. Die Endpunkte müssen gleiche Herkunft mit der Konfiguration haben.

Der Browser stellt eine unberechtigte Anfrage für die Konfigurationsdatei über die [`GET`](/de/docs/Web/HTTP/Methods/GET)-Methode, die keine Weiterleitungen folgt. Dies verhindert effektiv, dass der IdP erfährt, wer die Anfrage gestellt hat und welche RP versucht, eine Verbindung herzustellen.

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
  - : Die URL für den Endpunkt der Kontenliste, die eine Liste der Konten zurückgibt, bei denen der Benutzer derzeit beim IdP angemeldet ist. Der Browser verwendet diese, um eine Liste von Anmeldeoptionen zu erstellen, die dem Benutzer in der vom Browser bereitgestellten FedCM-Benutzeroberfläche angezeigt werden.
- `client_metadata_endpoint` {{optional_inline}}
  - : Die URL für den Metadaten-Endpunkt des Clients, die URLs zur Verfügung stellt, die auf die Metadaten- und Nutzungsbedingungsseiten des RP verweisen, die in der FedCM-Benutzeroberfläche verwendet werden sollen.
- `id_assertion_endpoint`
  - : Die URL für den ID-Bestätigungs-Endpunkt, die bei gültigen Benutzeranmeldeinformationen mit einem Bestätigungstoken antworten sollte, das die RP verwenden kann, um die Authentifizierung zu validieren.
- `login_url`
  - : Die URL der Anmeldeseite, auf der sich der Benutzer beim IdP anmelden kann.
- `branding` {{optional_inline}}
  - : Beinhaltet Branding-Informationen, die in der vom Browser bereitgestellten FedCM-Benutzeroberfläche verwendet werden, um das Erscheinungsbild nach den Wünschen des IdP zu gestalten.

Die folgende Tabelle fasst die verschiedenen Anfragen zusammen, die von der FedCM-API gemacht werden:

| Endpunkt/Ressource         | Methode | Berechtigt (mit Cookies) | Beinhaltet {{httpheader("Origin")}} |
| -------------------------- | ------- | ------------------------ | ----------------------------------- |
| `well-known`/`config.json` | `GET`   | Nein                     | Nein                                |
| `accounts_endpoint`        | `GET`   | Ja                       | Nein                                |
| `client_metadata_endpoint` | `GET`   | Nein                     | Ja                                  |
| `id_assertion_endpoint`    | `POST`  | Ja                       | Ja                                  |

> [!NOTE]
> Für eine Beschreibung des FedCM-Ablaufs, in dem auf diese Endpunkte zugegriffen wird, siehe [FedCM-Anmeldeablauf](/de/docs/Web/API/FedCM_API/RP_sign-in#fedcm_sign-in_flow).

> [!NOTE]
> Keine der Anfragen, die von der FedCM-API an die hier beschriebenen Endpunkte gemacht werden, erlauben aus Datenschutzgründen das Folgen von Weiterleitungen.

### Der Kontenlisten-Endpunkt

Der Browser sendet beglaubigte Anfragen (d.h. mit einem Cookie, das den angemeldeten Benutzer identifiziert) über die `GET`-Methode an diesen Endpunkt. Die Anfrage hat keinen `client_id`-Parameter, keinen {{httpheader("Origin")}}-Header und keinen {{httpheader("Referer")}}-Header. Dies verhindert effektiv, dass der IdP erfährt, bei welcher RP der Benutzer sich anmelden möchte. Die zurückgegebene Liste von Konten ist RP-unabhängig.

Zum Beispiel:

```http
GET /accounts.php HTTP/1.1
Host: idp.example
Accept: application/json
Cookie: 0x23223
Sec-Fetch-Dest: webidentity
```

Die Antwort auf eine erfolgreiche Anfrage gibt eine Liste aller IdP-Konten zurück, bei denen der Benutzer derzeit angemeldet ist (nicht spezifisch für eine bestimmte RP), mit einer JSON-Struktur, die wie folgt aussieht:

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
  - : Ein Array von Strings, die das Konto darstellen. Diese Strings werden verwendet, um die Liste der Kontooptionen zu filtern, die der Browser dem Benutzer zur Anmeldung anbietet. Dies geschieht, wenn die `loginHint`-Eigenschaft innerhalb [`identity.providers`](/de/docs/Web/API/CredentialsContainer/get#providers_2) in einem verwandten `get()`-Aufruf bereitgestellt wird. Jedes Konto mit einem String in seinem `login_hints`-Array, der mit dem bereitgestellten `loginHint` übereinstimmt, wird einbezogen.

> [!NOTE]
> Wenn der Benutzer bei keinem IdP-Konto angemeldet ist, sollte der Endpunkt mit [HTTP 401 (Unauthorized)](/de/docs/Web/HTTP/Status/401) antworten.

### Der Client-Metadaten-Endpunkt

Der Browser sendet unberechtigte Anfragen an diesen Endpunkt über die `GET`-Methode, wobei die `clientId`, die in den `get()`-Aufruf übergeben wird, als Parameter verwendet wird.

Zum Beispiel:

```http
GET /client_metadata.php?client_id=1234 HTTP/1.1
Host: idp.example
Origin: https://rp.example/
Accept: application/json
Sec-Fetch-Dest: webidentity
```

Die Antwort auf eine erfolgreiche Anfrage umfasst URLs, die auf die Metadaten- und Nutzungsbedingungsseiten des RP verweisen, die in der vom Browser bereitgestellten FedCM-Benutzeroberfläche verwendet werden sollen. Dies sollte der unten gezeigten JSON-Struktur folgen:

```json
{
  "privacy_policy_url": "https://rp.example/privacy_policy.html",
  "terms_of_service_url": "https://rp.example/terms_of_service.html"
}
```

### Der ID-Bestätigungs-Endpunkt

Der Browser sendet beglaubigte Anfragen an diesen Endpunkt über die [`POST`](/de/docs/Web/HTTP/Methods/POST)-Methode, mit einem Inhaltstyp von `application/x-www-form-urlencoded`. Die Anfrage beinhaltet auch eine Nutzlast mit Details über den versuchten Anmeldevorgang und das zu validierende Konto.

Sie sollte in etwa so aussehen:

```http
POST /assertion.php HTTP/1.1
Host: idp.example
Origin: https://rp.example/
Content-Type: application/x-www-form-urlencoded
Cookie: 0x23223
Sec-Fetch-Dest: webidentity
account_id=123&client_id=client1234&nonce=Ct60bD&disclosure_text_shown=true&is_auto_selected=true
```

Eine Anfrage an diesen Endpunkt wird gesendet, wenn der Benutzer einen Account zum Anmelden aus der entsprechenden Browser-Oberfläche auswählt. Bei gültigen Benutzeranmeldeinformationen sollte dieser Endpunkt mit einem Bestätigungstoken antworten, das die RP verwenden kann, um den Benutzer auf ihrem eigenen Server zu validieren, gemäß den vom IdP festgelegten Anweisungen zur Nutzung des Token im Rahmen der Identitätsfederation. Sobald die RP den Benutzer validiert hat, kann sie ihn anmelden, in ihren Dienst aufnehmen usw.

```json
{
  "token": "***********"
}
```

Die Anfragenutzlast enthält die folgenden Parameter:

- `client_id`
  - : Die Clientkennung der RP (die mit der `clientId` aus der ursprünglichen `get()`-Anfrage übereinstimmt).
- `account_id`
  - : Die eindeutige ID des Benutzerkontos, das angemeldet werden soll (die mit der Benutzer-`id` aus der Antwort des Kontenlisten-Endpunkts übereinstimmt).
- `nonce` {{optional_inline}}
  - : Der Anfragenonce, bereitgestellt von der RP.
- `disclosure_text_shown`
  - : Ein String von `"true"` oder `"false"`, der angibt, ob der Offenlegungstext angezeigt wurde oder nicht. Der Offenlegungstext ist die dem Benutzer angezeigte Information (die auch Links zu den Nutzungsbedingungen und der Datenschutzrichtlinie enthalten kann, falls bereitgestellt), wenn der Benutzer beim IdP angemeldet ist, aber kein spezielles Konto bei der aktuellen RP hat (in diesem Fall müsste er wählen, ob er "Fortfahren als..." seine IdP-Identität verwenden und dann ein entsprechendes Konto bei der RP erstellen möchte).
- `is_auto_selected`
  - : Ein String von `"true"` oder `"false"`, der angibt, ob die Anmeldeüberprüfungsanfrage als Ergebnis einer [automatischen Neuauthentifizierung](/de/docs/Web/API/FedCM_API/RP_sign-in#auto-reauthentication) ausgegeben wurde, d.h. ohne Vermittlung des Benutzers. Dies kann vorkommen, wenn der [`get()`](/de/docs/Web/API/CredentialsContainer/get)-Aufruf mit einem [`mediation`](/de/docs/Web/API/CredentialsContainer/get#mediation)-Optionswert von `"optional"` oder `"silent"` ausgeführt wird. Es ist nützlich für den IdP zu wissen, ob eine automatische Neuauthentifizierung erfolgte, um die Leistung zu bewerten und falls höhere Sicherheit gewünscht wird. Zum Beispiel könnte der IdP einen Fehlercode zurückgeben, der der RP mitteilt, dass eine ausdrückliche Benutzervermittlung erforderlich ist (`mediation="required"`).

> [!NOTE]
> Wenn der [`get()`](/de/docs/Web/API/CredentialsContainer/get)-Aufruf erfolgreich ist, wird der `is_auto_selected`-Wert auch über die [`IdentityCredential.isAutoSelected`](/de/docs/Web/API/IdentityCredential/isAutoSelected)-Eigenschaft an die RP kommuniziert.

#### ID-Bestätigungs-Fehlerantworten

Wenn der IdP kein Token ausstellen kann — zum Beispiel wenn der Client nicht autorisiert ist — wird der ID-Bestätigungs-Endpunkt mit einer Fehlerantwort antworten, die Informationen über die Art des Fehlers enthält. Zum Beispiel:

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
  - : Ein String. Dies kann entweder ein bekannter Fehler aus der [im OAuth 2.0 spezifizierten Fehlerliste](https://datatracker.ietf.org/doc/html/rfc6749#section-4.1.2.1) oder ein beliebiger String sein.
- `url` {{optional_inline}}
  - : Eine URL. Dies sollte eine Webseite sein, die menschenlesbare Informationen über den Fehler enthält, die den Benutzern angezeigt werden, wie z.B. wie der Fehler behoben werden kann oder wie der Kundenservice kontaktiert werden kann. Die URL muss die gleiche Seite wie die IdP-Konfigurations-URL haben.

Diese Informationen können auf verschiedene Weise verwendet werden:

- Der Browser kann eine benutzerdefinierte Benutzeroberfläche anzeigen, die dem Benutzer mitteilt, was schiefgegangen ist (siehe die [Chrome-Dokumentation](https://developers.google.com/privacy-sandbox/blog/fedcm-chrome-120-updates#error-api) für ein Beispiel). Beachten Sie, dass, wenn die Anfrage fehlschlug, weil der IdP-Server nicht verfügbar ist, natürlich keine Informationen zurückgegeben werden können. In solchen Fällen wird der Browser dies über eine generische Nachricht melden.
- Der zugehörige RP-`navigator.credentials.get()`-Aufruf, der zur Versuchsanmeldung verwendet wurde, wird sein Versprechen mit einem `IdentityCredentialError` ablehnen, der die Fehlerinformationen enthält. Eine RP kann diesen Fehler abfangen und dann die benutzerdefinierte Benutzeroberfläche des Browsers mit einigen Informationen ergänzen, um dem Benutzer zu helfen, bei einem zukünftigen Anmeldeversuch erfolgreich zu sein.

## Anmeldestatus aktualisieren mit der Login Status API

Die **Login Status API** erlaubt einem IdP, einen Browser über seinen Anmeldestatus in diesem bestimmten Browser zu informieren — damit meinen wir "ob irgendwelche Benutzer im aktuellen Browser beim IdP angemeldet sind oder nicht". Der Browser speichert diesen Zustand für jeden IdP; die FedCM-API nutzt ihn dann, um die Anzahl der Anfragen an den IdP zu reduzieren (da sie keine Zeit verschwenden muss, Anfragen zu stellen, wenn beim IdP keine Benutzer angemeldet sind). Es mildert auch [potenzielle Timing-Angriffe](https://github.com/w3c-fedid/FedCM/issues/447).

Für jeden bekannten IdP (identifiziert durch seine Konfigurations-URL) behält der Browser eine Drei-Zustands-Variable bei, die den Anmeldestatus mit drei möglichen Werten darstellt:

- `"logged-in"`: Der IdP hat mindestens ein Benutzerkonto angemeldet. Beachten Sie, dass zu diesem Zeitpunkt RP und Browser nicht wissen, welcher Benutzer das ist. Informationen zu bestimmten Benutzern werden zu einem späteren Punkt im FedCM-Ablauf vom IdP-`accounts_endpoint` zurückgegeben.
- `"logged-out"`: Alle IdP-Konten sind derzeit abgemeldet.
- `"unknown"`: Der Anmeldestatus dieses IdP ist nicht bekannt. Dies ist der Standardwert.

### Anmeldestatus festlegen

Der IdP sollte seinen Anmeldestatus aktualisieren, wenn sich ein Benutzer beim IdP anmeldet oder abmeldet. Dies kann auf zwei verschiedene Arten erfolgen:

- Der {{httpheader("Set-Login")}} HTTP-Antwort-Header kann in einer Top-Level-Navigation oder einer gleichgerichteten Subresource-Anfrage gesetzt werden:

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

### Wie der Anmeldestatus den föderierten Anmeldeablauf beeinflusst

Wenn eine [RP einen föderierten Anmeldeversuch unternimmt](/de/docs/Web/API/FedCM_API/RP_sign-in), wird der Anmeldestatus geprüft:

- Wenn der Anmeldestatus `"logged-in"` ist, wird eine Anfrage an den IdP-`accounts list endpoint` gestellt und verfügbare Konten zur Anmeldung werden dem Benutzer im vom Browser bereitgestellten FedCM-Dialog angezeigt.
- Wenn der Anmeldestatus `"logged-out"` ist, wird das Promise von der FedCM-`get()`-Anfrage ohne eine Anfrage an den `accounts list endpoint` abgelehnt. In einem solchen Fall liegt es am Entwickler, den Ablauf zu steuern, beispielsweise indem der Benutzer aufgefordert wird, sich bei einem geeigneten IdP anzumelden.
- Wenn der Anmeldestatus `"unknown"` ist, wird eine Anfrage an den `accounts list endpoint` des IdP gestellt und der Anmeldestatus basierend auf der Antwort aktualisiert:
  - Wenn der Endpunkt eine Liste verfügbarer Konten zur Anmeldung zurückgibt, wird der Status auf `"logged-in"` aktualisiert und die Anmeldeoptionen werden dem Benutzer im vom Browser bereitgestellten FedCM-Dialog angezeigt.
  - Wenn der Endpunkt keine Konten zurückgibt, wird der Status auf `"logged-out"` aktualisiert; das Promise von der FedCM-`get()`-Anfrage wird dann abgelehnt.

### Was passiert, wenn der Browser- und der IdP-Anmeldestatus nicht mehr synchron sind?

Trotz der Tatsache, dass die Login Status API den Browser über den Anmeldestatus des IdP informiert, ist es möglich, dass der Browser und der IdP asynchron werden. Beispielsweise könnten die IdP-Sitzungen ablaufen, was bedeutet, dass alle Benutzerkonten sich abmelden, aber der Anmeldestatus weiterhin auf `"logged-in"` gesetzt ist (die Anwendung konnte den Anmeldestatus nicht auf `"logged-out"` setzen). In einem solchen Fall, wenn ein föderierter Anmeldeversuch unternommen wird, wird eine Anfrage an den `accounts list endpoint` des IdP gesendet, aber es werden keine verfügbaren Konten zurückgegeben, da die Sitzung nicht mehr verfügbar ist.

Wenn dies geschieht, kann der Browser den Benutzer dynamisch beim IdP anmelden lassen, indem er die Anmeldeseite des IdP in einem Dialog öffnet (die Anmelde-URL ist in der [Konfigurationsdatei des IdP](#bereitstellen_einer_konfigurationsdatei_und_endpunkte) `login_url` zu finden). Die genaue Natur dieses Ablaufs liegt beim Browser; zum Beispiel [handhabt Chrome es so](https://developers.google.com/privacy-sandbox/blog/fedcm-chrome-120-updates#what_if_the_user_session_expires_let_the_user_sign_in_through_a_dynamic_login_flow).

Nachdem sich der Benutzer beim IdP angemeldet hat, sollte der IdP:

- Den Browser darüber informieren, dass der Benutzer angemeldet ist, indem der [Anmeldestatus](#anmeldestatus_festlegen) auf `"logged-in"` gesetzt wird.
- Den Anmeldedialog schließen, indem die [`IdentityProvider.close()`](/de/docs/Web/API/IdentityProvider/close_static)-Methode aufgerufen wird.

## Siehe auch

- [Federated Credential Management API](https://developers.google.com/privacy-sandbox/cookies/fedcm) auf developers.google.com (2023)
