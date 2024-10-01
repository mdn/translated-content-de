---
title: Identity provider integration with FedCM
slug: Web/API/FedCM_API/IDP_integration
l10n:
  sourceCommit: 2b6f99e45534ce662f842d8b4d2f7845492e353c
---

{{DefaultAPISidebar("FedCM API")}}

Dieser Artikel beschreibt alle Schritte, die ein Identitätsanbieter (IdP) unternehmen muss, um sich in die Federated Credential Management (FedCM) API zu integrieren.

## Schritte zur IdP-Integration

Um sich in FedCM zu integrieren, muss ein IdP Folgendes tun:

1. [Eine bekannte Datei bereitstellen](#eine_bekannte_datei_bereitstellen), um den IdP zu identifizieren.
2. [Eine Konfigurationsdatei und Endpunkte bereitstellen](#eine_konfigurationsdatei_und_endpunkte_bereitstellen) für die Kontenliste und die Ausstellung von Bestätigungen (und optional, Client-Metadaten).
3. [Den Anmeldestatus aktualisieren](#anmeldestatus_aktualisieren_mithilfe_der_login_status_api) mithilfe der Login Status API.

## Eine bekannte Datei bereitstellen

Es gibt ein potenzielles Datenschutzproblem, bei dem ein [IdP erkennen kann, ob ein Benutzer eine RP ohne ausdrückliche Zustimmung besucht hat](https://github.com/w3c-fedid/FedCM/issues/230). Dies hat Tracking-Auswirkungen, daher muss ein IdP eine bekannte Datei bereitstellen, um seine Identität zu verifizieren und dieses Problem zu mildern.

Die gut bekannte Datei wird über eine unautorisierte [`GET`](/de/docs/Web/HTTP/Methods/GET)-Anfrage angefordert, die keine Umleitungen verfolgt. Dies verhindert effektiv, dass der IdP erfährt, wer die Anfrage gestellt hat und welche RP eine Verbindung versucht.

Die bekannte Datei muss vom [eTLD+1](https://web.dev/articles/same-site-same-origin#site) des IdP unter `/.well-known/web-identity` bereitgestellt werden. Zum Beispiel, wenn die IdP-Endpunkte unter `https://accounts.idp.beispiel/` bereitgestellt werden, müssen sie eine bekannte Datei unter `https://idp.beispiel/.well-known/web-identity` bereitstellen. Der Inhalt der bekannten Datei sollte die folgende JSON-Struktur haben:

```json
{
  "provider_urls": ["https://accounts.idp.example/config.json"]
}
```

Das Mitglied `provider_urls` sollte ein Array von URLs enthalten, die auf gültige IdP-Konfigurationsdateien verweisen, mit denen RPs interagieren können. Die Array-Länge ist derzeit auf ein Element begrenzt.

## Der HTTP-Header `Sec-Fetch-Dest`

Alle Anfragen, die vom Browser über FedCM gesendet werden, enthalten einen `{{httpheader("Sec-Fetch-Dest")}}: webidentity`-Header. Alle IdP-Endpunkte, die autorisierte Anfragen empfangen (d.h. `accounts_endpoint` und `id_assertion_endpoint`), müssen bestätigen, dass dieser Header enthalten ist, um sich gegen {{Glossary("CSRF", "CSRF")}}-Angriffe zu schützen.

## Eine Konfigurationsdatei und Endpunkte bereitstellen

Die IdP-Konfigurationsdatei listet die Endpunkte auf, die der Browser benötigt, um den Identitätsföderationsprozess zu verarbeiten und die Anmeldungen zu verwalten. Die Endpunkte müssen mit der Konfiguration origen sein.

Der Browser macht eine unautorisierte Anfrage nach der Konfigurationsdatei über die [`GET`](/de/docs/Web/HTTP/Methods/GET)-Methode, die keine Weiterleitungen verfolgt. Dies verhindert effektiv, dass der IdP erfährt, wer die Anfrage gestellt hat und welche RP eine Verbindung versucht.

Die Konfigurationsdatei (gehostet unter `https://accounts.idp.beispiel/config.json` in unserem Beispiel) sollte die folgende JSON-Struktur haben:

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
  - : Die URL für den Kontenlisten-Endpunkt, der eine Liste von Konten zurückgibt, bei denen der Benutzer derzeit beim IdP angemeldet ist. Der Browser verwendet diese, um eine Liste von Anmeldeoptionen zu erstellen, die dem Benutzer in der browserbereitgestellten FedCM-Benutzeroberfläche angezeigt werden.
- `client_metadata_endpoint` {{optional_inline}}
  - : Die URL für den Endpunkt der Client-Metadaten, die URLs bereitstellt, die auf die Metadaten und die Nutzungsbedingungen des RP verweisen und in der FedCM-Benutzeroberfläche verwendet werden sollen.
- `id_assertion_endpoint`
  - : Die URL für den ID-Bestätigungs-Endpunkt, welcher, wenn gültige Benutzeranmeldeinformationen gesendet werden, mit einem Validierungstoken antworten sollte, das das RP verwenden kann, um die Authentifizierung zu validieren.
- `login_url`
  - : Die Anmeldeseite URL, um sich beim IdP anzumelden.
- `branding` {{optional_inline}}
  - : Enthält Markierungsinformationen, die in der vom Browser bereitgestellten FedCM-Benutzeroberfläche verwendet werden, um das Aussehen nach dem Wunsch des IdP anzupassen.

Die folgende Tabelle fasst die verschiedenen Anfragen zusammen, die von der FedCM API gemacht werden:

| Endpunkt/Ressource         | Methode | Autorisiert (mit Cookies) | Enthält {{httpheader("Origin")}} |
| -------------------------- | ------- | ------------------------- | -------------------------------- |
| `well-known`/`config.json` | `GET`   | Nein                      | Nein                             |
| `accounts_endpoint`        | `GET`   | Ja                        | Nein                             |
| `client_metadata_endpoint` | `GET`   | Nein                      | Ja                               |
| `id_assertion_endpoint`    | `POST`  | Ja                        | Ja                               |

> [!NOTE]
> Eine Beschreibung des FedCM-Flusses, in dem auf diese Endpunkte zugegriffen wird, finden Sie unter [FedCM Anmeldefluss](/de/docs/Web/API/FedCM_API/RP_sign-in#fedcm_sign-in_flow).

> [!NOTE]
> Keine der von der FedCM API an die hier detaillierten Endpunkte gesendeten Anfragen erlauben das Nachverfolgen von Weiterleitungen, um Datenschutz zu gewährleisten.

### Der Kontenlisten-Endpunkt

Der Browser sendet autorisierte Anfragen (d.h. mit einem Cookie, das den angemeldeten Benutzer identifiziert) an diesen Endpunkt über die `GET`-Methode. Die Anfrage hat kein `client_id`-Parameter, {{httpheader("Origin")}}-Header oder {{httpheader("Referer")}}-Header. Dies verhindert effektiv, dass der IdP erfährt, zu welcher RP sich der Benutzer anzumelden versucht. Die zurückgegebene Kontenliste ist RP-neutral.

Zum Beispiel:

```http
GET /accounts.php HTTP/1.1
Host: idp.example
Accept: application/json
Cookie: 0x23223
Sec-Fetch-Dest: webidentity
```

Die Antwort auf eine erfolgreiche Anfrage gibt eine Liste aller IdP-Konten zurück, mit denen der Benutzer derzeit angemeldet ist (nicht spezifisch für eine bestimmte RP), mit einer JSON-Struktur, die dem folgenden Muster entspricht:

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
  - : Der Familienname des Benutzers.
- `email`
  - : Die E-Mail-Adresse des Benutzers.
- `given_name` {{optional_inline}}
  - : Der Vorname des Benutzers.
- `picture` {{optional_inline}}
  - : Die URL des Avatarbilds des Benutzers.
- `approved_clients` {{optional_inline}}
  - : Ein Array von RP-Clients, bei denen der Benutzer registriert ist.
- `login_hints` {{optional_inline}}
  - : Ein Array von Zeichenfolgen, die das Konto darstellen. Diese Zeichenfolgen werden verwendet, um die Liste der Kontenoptionen zu filtern, die der Browser dem Benutzer zur Anmeldung anbietet. Dies erfolgt, wenn die `loginHint`-Eigenschaft innerhalb von [`identity.providers`](/de/docs/Web/API/CredentialsContainer/get#providers_2) in einem verwandten `get()`-Aufruf bereitgestellt wird. Jedes Konto mit einer Zeichenfolge in seinem `login_hints`-Array, das mit dem bereitgestellten `loginHint` übereinstimmt, wird aufgenommen.

> [!NOTE]
> Wenn der Benutzer bei keinen IdP-Konten angemeldet ist, sollte der Endpunkt mit [HTTP 401 (Unauthorized)](/de/docs/Web/HTTP/Status/401) antworten.

### Der Client-Metadaten-Endpunkt

Der Browser sendet unautorisierte Anfragen an diesen Endpunkt über die `GET`-Methode, wobei die `clientId`, die im `get()`-Aufruf übergeben wird, als Parameter dient.

Zum Beispiel:

```http
GET /client_metadata.php?client_id=1234 HTTP/1.1
Host: idp.example
Origin: https://rp.example/
Accept: application/json
Sec-Fetch-Dest: webidentity
```

Die Antwort auf eine erfolgreiche Anfrage umfasst URLs, die auf die Metadaten und Nutzungsbedingungsseiten des RP verweisen, um in der vom Browser bereitgestellten FedCM-Benutzeroberfläche verwendet zu werden. Dies sollte der unten gesehenen JSON-Struktur folgen:

```json
{
  "privacy_policy_url": "https://rp.example/privacy_policy.html",
  "terms_of_service_url": "https://rp.example/terms_of_service.html"
}
```

### Der ID-Bestätigungs-Endpunkt

Der Browser sendet autorisierte Anfragen an diesen Endpunkt über die [`POST`](/de/docs/Web/HTTP/Methods/POST)-Methode mit einem Inhaltstyp von `application/x-www-form-urlencoded`. Die Anfrage enthält auch eine Nutzlast mit Details über die versuchte Anmeldung und das zu validierende Konto.

Es sollte folgendermaßen aussehen:

```http
POST /assertion.php HTTP/1.1
Host: idp.example
Origin: https://rp.example/
Content-Type: application/x-www-form-urlencoded
Cookie: 0x23223
Sec-Fetch-Dest: webidentity
account_id=123&client_id=client1234&nonce=Ct60bD&disclosure_text_shown=true&is_auto_selected=true
```

Eine Anfrage an diesen Endpunkt wird als Ergebnis davon gesendet, dass ein Benutzer ein Konto zur Anmeldung aus der relevanten Browser-Oberfläche auswählt. Wenn gültige Benutzeranmeldeinformationen gesendet werden, sollte dieser Endpunkt mit einem Validierungstoken antworten, das das RP verwenden kann, um den Benutzer auf seinem eigenen Server zu validieren, entsprechend den von dem IdP verwendeten Anweisungen für die Identitätsföderation. Sobald das RP den Benutzer validiert, können sie ihn anmelden, ihn für ihren Dienst registrieren usw.

```json
{
  "token": "***********"
}
```

Die Anfrage-Nutzlast enthält die folgenden Parameter:

- `client_id`
  - : Die RP-Client-ID (die der `clientId` aus der ursprünglichen `get()`-Anfrage entspricht).
- `account_id`
  - : Die eindeutige ID des Benutzerkontos, das angemeldet werden soll (die der Benutzer-ID aus der Antwort des Kontenlisten-Endpunkts entspricht).
- `nonce` {{optional_inline}}
  - : Der Anfrage-Nonce, bereitgestellt vom RP.
- `disclosure_text_shown`
  - : Eine Zeichenfolge `"true"` oder `"false"`, die angibt, ob der Offenlegungstext angezeigt wurde oder nicht. Der Offenlegungstext ist die Information, die dem Benutzer gezeigt wird (welche die Nutzungsbedingungen und Datenschutzrichtlinien-Links enthalten kann, wenn bereitgestellt), wenn der Benutzer beim IdP angemeldet ist, aber kein Konto speziell bei der aktuellen RP hat (in diesem Fall müsste er sich entschließen, "Weiter machen als..." mit seiner IdP-Identität und dann ein entsprechendes Konto bei der RP erstellen).
- `is_auto_selected`
  - : Eine Zeichenfolge `"true"` oder `"false"`, die angibt, ob die Anmeldevalidierungsanfrage als Ergebnis der [automatischen Neuauthentifizierung](/de/docs/Web/API/FedCM_API/RP_sign-in#auto-reauthentication) ohne Benutzervermittlung ausgegeben wurde. Dies kann auftreten, wenn der [`get()`](/de/docs/Web/API/CredentialsContainer/get)-Aufruf mit einer [`mediation`](/de/docs/Web/API/CredentialsContainer/get#mediation)-Option von `"optional"` oder `"silent"` erfolgt. Es ist nützlich für den IdP zu wissen, ob eine automatische Neuauthentifizierung stattgefunden hat, für die Leistungsauswertung und falls höhere Sicherheit gewünscht wird. Zum Beispiel könnte der IdP einen Fehlercode zurückgeben, der dem RP mitteilt, dass es eine ausdrückliche Benutzervermittlung benötigt (`mediation="required"`).

> [!NOTE]
> Wenn der [`get()`](/de/docs/Web/API/CredentialsContainer/get)-Aufruf erfolgreich ist, wird der `is_auto_selected`-Wert auch über die `[`IdentityCredential.isAutoSelected`](/de/docs/Web/API/IdentityCredential/isAutoSelected)`-Eigenschaft dem RP mitgeteilt.

#### ID-Bestätigungs-Fehlerantworten

Wenn der IdP keinen Token ausstellen kann — zum Beispiel, wenn der Client unautorisiert ist — wird der ID-Bestätigungs-Endpunkt mit einer Fehlerantwort antworten, die Informationen über die Art des Fehlers enthält. Zum Beispiel:

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
  - : Eine Zeichenfolge. Dies kann ein bekannter Fehler aus der [OAuth 2.0 spezifizierten Fehlerliste](https://datatracker.ietf.org/doc/html/rfc6749#section-4.1.2.1) sein oder eine beliebige Zeichenfolge.
- `url` {{optional_inline}}
  - : Eine URL. Dies sollte eine Webseite sein, die menschenlesbare Informationen über den Fehler enthält, um den Benutzern zu zeigen, wie z.B. wie der Fehler behoben werden kann oder wie der Kunde kontaktiert werden kann. Die URL muss gleichseitig mit der IdP-Konfigurations-URL sein.

Diese Informationen können auf verschiedene Weisen verwendet werden:

- Der Browser kann eine benutzerdefinierte Benutzeroberfläche anzeigen, um dem Benutzer zu mitteilen, was schiefgelaufen ist (siehe die [Chrome-Dokumentation](https://developers.google.com/privacy-sandbox/blog/fedcm-chrome-120-updates#error-api) für ein Beispiel). Beachten Sie jedoch, dass der IdP-Server offensichtlich keine Informationen zurückgeben kann, wenn die Anfrage fehlschlug, weil der IdP-Server nicht verfügbar ist. In solchen Fällen wird der Browser dies über eine generische Nachricht melden.
- Der zugehörige RP [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get)-Aufruf, der zur Anmeldung verwendet wird, wird seine Promise mit einem `IdentityCredentialError` zurückweisen, der die Fehlerinformationen enthält. Ein RP kann diesen Fehler abfangen und dann die benutzerdefinierte Benutzeroberfläche des Browsers mit einigen Informationen ergänzen, um dem Benutzer zu helfen, in einem zukünftigen Anmeldeversuch erfolgreich zu sein.

## Anmeldestatus aktualisieren mithilfe der Login Status API

Die **Login Status API** ermöglicht es einem IdP, einen Browser über seinen Anmeldestatus in diesem bestimmten Browser zu informieren — damit meinen wir "ob irgendwelche Benutzer beim IdP im aktuellen Browser angemeldet sind oder nicht". Der Browser speichert diesen Zustand für jeden IdP; die FedCM-API verwendet ihn, um die Anzahl der Anfragen an den IdP zu reduzieren (weil keine Zeit mit Anfragen nach Konten verschwendet werden muss, wenn keine Benutzer beim IdP angemeldet sind). Es mildert auch [potenzielle Timing-Angriffe](https://github.com/w3c-fedid/FedCM/issues/447).

Für jeden bekannten IdP (identifiziert durch seine Konfigurations-URL) speichert der Browser eine tri-staatliche Variable, die den Anmeldestatus mit drei möglichen Werten darstellt:

- `"logged-in"`: Der IdP hat mindestens ein Benutzerkonto angemeldet. Beachten Sie, dass zu diesem Zeitpunkt das RP und der Browser nicht wissen, welcher Benutzer das ist. Informationen über spezifische Benutzer werden später im FedCM-Fluss vom [`accounts_endpoint`](#der_kontenlisten-endpunkt) des IdP zurückgegeben.
- `"logged-out"`: Alle IdP-Konten sind derzeit abgemeldet.
- `"unknown"`: Der Anmeldestatus dieses IdP ist nicht bekannt. Dies ist der Standardwert.

### Anmeldestatus setzen

Der IdP sollte seinen Anmeldestatus aktualisieren, wenn sich ein Benutzer beim IdP an- oder abmeldet. Dies kann auf zwei verschiedene Arten geschehen:

- Der {{httpheader("Set-Login")}} HTTP-Antwortheader kann in einer Top-Level-Navigation oder einer gleichartigen Subresource-Anfrage gesetzt werden:

  ```http
  Set-Login: logged-in

  Set-Login: logged-out
  ```

- Die Methode [`Navigator.login.setStatus()`](/de/docs/Web/API/NavigatorLogin/setStatus) kann von der IdP-Quelle aufgerufen werden:

  ```js
  /* Set logged-in status */
  navigator.login.setStatus("logged-in");

  /* Set logged-out status */
  navigator.login.setStatus("logged-out");
  ```

### Wie sich der Anmeldestatus auf den föderierten Anmeldefluss auswirkt

Wenn eine [RP versucht, sich föderiert anzumelden](/de/docs/Web/API/FedCM_API/RP_sign-in), wird der Anmeldestatus überprüft:

- Wenn der Anmeldestatus `"logged-in"` ist, wird eine Anfrage an den [Kontenlisten-Endpunkt](#der_kontenlisten-endpunkt) des IdP gestellt und verfügbare Konten zur Anmeldung werden dem Benutzer im browserbereitgestellten FedCM-Dialog angezeigt.
- Wenn der Anmeldestatus `"logged-out"` ist, wird die von der FedCM `get()`-Anfrage zurückgegebene Promise ohne Anfrage an den Kontenlisten-Endpunkt abgelehnt. In einem solchen Fall liegt es am Entwickler, den Ablauf zu handhaben, indem der Benutzer beispielsweise aufgefordert wird, sich bei einem geeigneten IdP anzumelden.
- Wenn der Anmeldestatus `"unknown"` ist, wird eine Anfrage an den Kontenlisten-Endpunkt des IdP gestellt und der Anmeldestatus wird basierend auf der Antwort aktualisiert:
  - Wenn der Endpunkt eine Liste verfügbarer Konten zur Anmeldung zurückgibt, aktualisieren Sie den Status auf `"logged-in"` und zeigen die Anmeldeoptionen im browserbereitgestellten FedCM-Dialog an.
  - Wenn der Endpunkt keine Konten zurückgibt, aktualisieren Sie den Status auf `"logged-out"`; die von der FedCM `get()`-Anfrage zurückgegebene Promise wird dann abgelehnt.

### Was, wenn der Anmeldestatus des Browsers und der IdP nicht synchron sind?

Trotz der Login Status API, die den Browser über den Anmeldestatus des IdP informiert, ist es möglich, dass Browser und IdP nicht synchron sind. Zum Beispiel könnten IdP-Sitzungen ablaufen, was bedeutet, dass alle Benutzerkonten abgemeldet sind, aber der Anmeldestatus weiterhin auf `"logged-in"` gesetzt ist (die Anwendung konnte den Anmeldestatus nicht auf `"logged-out"` setzen). In einem solchen Fall wird, wenn eine föderierte Anmeldung versucht wird, eine Anfrage an den Kontenlisten-Endpunkt des IdP gestellt, jedoch keine verfügbaren Konten zurückgegeben, da die Sitzung nicht mehr verfügbar ist.

Wenn dies geschieht, kann der Browser einem Benutzer dynamisch erlauben, sich durch Öffnen der Anmeldeseite des IdP in einem Dialog beim IdP anzumelden (die Anmelde-URL befindet sich in der [Konfigurationsdatei des IdP](#eine_konfigurationsdatei_und_endpunkte_bereitstellen) als `login_url`). Die genaue Natur dieses Ablaufs hängt vom Browser ab; beispielsweise [handelt Chrome es wie folgt](https://developers.google.com/privacy-sandbox/blog/fedcm-chrome-120-updates#what_if_the_user_session_expires_let_the_user_sign_in_through_a_dynamic_login_flow).

Sobald der Benutzer beim IdP angemeldet ist, sollte der IdP:

- Den Browser darüber informieren, dass der Benutzer sich angemeldet hat, indem der [Anmeldestatus gesetzt wird](#anmeldestatus_setzen) auf `"logged-in"`.
- Den Anmeldedialog durch Aufrufen der Methode [`IdentityProvider.close()`](/de/docs/Web/API/IdentityProvider/close_static) schließen.

## Siehe auch

- [Federated Credential Management API](https://developers.google.com/privacy-sandbox/cookies/fedcm) auf developers.google.com (2023)
