---
title: Integration des Identitätsanbieters mit FedCM
slug: Web/API/FedCM_API/IDP_integration
l10n:
  sourceCommit: 798f5efbce403e2366323afea025e5729b902e46
---

{{DefaultAPISidebar("FedCM API")}}

Dieser Artikel beschreibt alle Schritte, die ein {{Glossary("Identity_provider", "Identitätsanbieter")}} (IdP) durchführen muss, um sich mit der Federated Credential Management (FedCM) API zu integrieren.

## Schritte zur Integration des IdP

Um sich mit FedCM zu integrieren, muss ein IdP Folgendes tun:

1. [Eine well-known Datei bereitstellen](#eine_well-known_datei_bereitstellen), um den IdP zu identifizieren.
2. [Eine Konfigurationsdatei und Endpunkte bereitstellen](#eine_konfigurationsdatei_und_endpunkte_bereitstellen) für die Kontenliste und die Ausgabe von Identitätsnachweisen (und optional Client-Metadaten).
3. [Seinen Login-Status aktualisieren](#aktualisieren_des_anmeldestatuses_mit_der_login-status-api) mit der Login-Status-API.

## Eine well-known Datei bereitstellen

Es gibt ein potenzielles Datenschutzproblem, bei dem ein [IdP ohne ausdrückliche Zustimmung feststellen kann, ob ein Benutzer eine vertrauende Partei (RP) besucht hat](https://github.com/w3c-fedid/FedCM/issues/230). Dies hat Tracking-Auswirkungen, daher muss ein IdP eine well-known Datei bereitstellen, um seine Identität zu verifizieren und dieses Problem zu mildern.

Die well-known Datei wird über eine nicht authentifizierte [`GET`](/de/docs/Web/HTTP/Reference/Methods/GET)-Anfrage angefordert, die keine Weiterleitungen folgt. Dies verhindert effektiv, dass der IdP erfährt, wer die Anfrage gestellt hat und welche {{Glossary("Relying_party", "RP")}} versucht, eine Verbindung herzustellen.

Die well-known Datei muss vom [eTLD+1](https://web.dev/articles/same-site-same-origin#site) des IdP unter `/.well-known/web-identity` bereitgestellt werden. Zum Beispiel, wenn die IdP-Endpunkte unter `https://accounts.idp.example/` bereitgestellt werden, muss eine well-known Datei unter `https://idp.example/.well-known/web-identity` bereitgestellt werden. Der Inhalt der well-known Datei sollte die folgende JSON-Struktur haben:

```json
{
  "provider_urls": ["https://accounts.idp.example/config.json"]
}
```

Das `provider_urls`-Mitglied sollte ein Array von URLs enthalten, die auf gültige IdP-Konfigurationsdateien zeigen, die von RPs zur Interaktion mit dem IdP verwendet werden können. Die Array-Länge ist derzeit auf eins begrenzt.

## Der `Sec-Fetch-Dest` HTTP-Header

Alle über FedCM vom Browser gesendeten Anfragen enthalten einen `{{httpheader("Sec-Fetch-Dest")}}: webidentity` Header. Alle IdP-Endpunkte, die authentifizierte Anfragen erhalten (d.h. `accounts_endpoint` und `id_assertion_endpoint`), müssen sicherstellen, dass dieser Header enthalten ist, um sich gegen {{Glossary("CSRF", "CSRF")}}-Angriffe zu schützen.

## Eine Konfigurationsdatei und Endpunkte bereitstellen

Die IdP-Konfigurationsdatei enthält eine Liste der Endpunkte, die der Browser benötigt, um den Identitätsföderationsfluss zu verarbeiten und die Anmeldungen zu verwalten. Die Endpunkte müssen gleichartig mit der Konfiguration sein.

Der Browser macht eine nicht authentifizierte Anfrage für die Konfigurationsdatei über die [`GET`](/de/docs/Web/HTTP/Reference/Methods/GET)-Methode, die keine Weiterleitungen folgt. Dies verhindert effektiv, dass der IdP erfährt, wer die Anfrage gestellt hat und welche RP versucht, eine Verbindung herzustellen.

Die Konfigurationsdatei (die in unserem Beispiel unter `https://accounts.idp.example/config.json` gehostet wird) sollte die folgende JSON-Struktur haben:

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
  - : Die URL für den Kontenlisten-Endpunkt, der eine Liste von Konten zurückgibt, bei denen der Benutzer derzeit beim IdP angemeldet ist. Der Browser nutzt diese, um eine Liste von Anmeldeoptionen zu erstellen, die dem Benutzer in der vom Browser bereitgestellten FedCM-Benutzeroberfläche angezeigt werden.
- `account_label` {{optional_inline}}
  - : Ein String, der, falls enthalten, einen Bezeichner für einen Teil von Konten angibt, die zurückgegeben werden sollten, wenn dieser IdP für föderierte Authentifizierung verwendet wird. Wenn eine `get()`-Anfrage gestellt wird, werden nur Konten zurückgegeben, die diesen String in ihrem `label_hints`-Parameter enthalten.
- `supports_use_other_account` {{optional_inline}}
  - : Ein Boolean, der standardmäßig `false` ist; wenn auf `true` gesetzt, bedeutet es, dass Benutzer sich mit einem anderen Konto anmelden können als dem, mit dem sie derzeit angemeldet sind (wenn der IdP mehrere Konten unterstützt). Dies gilt nur für `get()`-Anrufe, die den [Aktivmodus](/de/docs/Web/API/IdentityCredentialRequestOptions#active) angeben.
    > [!NOTE]
    > In der Browser-Anmeldeoberfläche wird dies wahrscheinlich als eine Art "Anderes Konto wählen"-Button erscheinen.
- `client_metadata_endpoint` {{optional_inline}}
  - : Die URL für den Client-Metadaten-Endpunkt, der URLs bereitstellt, die auf die Metadatenseiten und die Nutzungsbedingungen der RP zeigen, die in der FedCM-Benutzeroberfläche verwendet werden sollen.
- `disconnect_endpoint` {{optional_inline}}
  - : Die URL für den Trennen-Endpunkt, die von der RP verwendet wird, um die Verbindung mit dem IdP über die Methode [`IdentityCredential.disconnect()`](/de/docs/Web/API/IdentityCredential/disconnect_static) zu trennen.
- `id_assertion_endpoint`
  - : Die URL für den ID-Behauptungsendpunkt, die bei gültigen Benutzeranmeldeinformationen mit einem Validierungstoken antworten soll, das die RP zur Validierung der Authentifizierung verwenden kann.
- `login_url`
  - : Die Anmeldeseite URL für den Benutzer, um sich beim IdP anzumelden.
- `branding` {{optional_inline}}
  - : Enthält Branding-Informationen, die in der vom Browser bereitgestellten FedCM-Benutzeroberfläche verwendet werden, um das Erscheinungsbild nach Wunsch des IdP anzupassen. Die bereitgestellte Icon-Größe muss im Passivmodus größer oder gleich `25` (`25px`) sein und im Aktivmodus größer oder gleich `40` (`40px`) (siehe [Aktiv- vs. Passivmodus](/de/docs/Web/API/FedCM_API/RP_sign-in#active_versus_passive_mode) für weitere Details).

Die folgende Tabelle fasst die verschiedenen Anfragen zusammen, die von der FedCM-API gemacht werden:

| Endpunkt/Ressource         | Methode | Authentifiziert (mit Cookies) | Enthält {{httpheader("Origin")}} |
| -------------------------- | ------- | ----------------------------- | -------------------------------- |
| `well-known`/`config.json` | `GET`   | Nein                          | Nein                             |
| `accounts_endpoint`        | `GET`   | Ja                            | Nein                             |
| `client_metadata_endpoint` | `GET`   | Nein                          | Ja                               |
| `disconnect_endpoint`      | `POST`  | Ja                            | Ja                               |
| `id_assertion_endpoint`    | `POST`  | Ja                            | Ja                               |

> [!NOTE]
> Für eine Beschreibung des FedCM-Flow, in dem diese Endpunkte aufgerufen werden, siehe [FedCM-Anmeldeflow](/de/docs/Web/API/FedCM_API/RP_sign-in#fedcm_sign-in_flow).

> [!NOTE]
> Keine der von der FedCM-API an die hier beschriebenen Endpunkte gesendeten Anfragen erlauben es, Weiterleitungen zu folgen, aus Datenschutzgründen.

### Der Kontenlisten-Endpunkt

Der Browser sendet authentifizierte Anfragen (d.h. mit einem Cookie, das den Benutzer identifiziert, der angemeldet ist) über die `GET`-Methode zu diesem Endpunkt. Die Anfrage hat keinen `client_id`-Parameter, {{httpheader("Origin")}}-Header oder {{httpheader("Referer")}}-Header. Dies verhindert effektiv, dass der IdP erfährt, welche RP der Benutzer versucht, sich anzumelden. Die zurückgegebene Liste von Konten ist RP-agnostisch.

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

Dies umfasst die folgenden Informationen, wobei `name`, `email`, `username` und `tel` optional sind, aber mindestens einer von ihnen muss vorhanden und nicht leer sein.

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
  - : Die URL des Avatarbildes des Benutzers.
- `approved_clients` {{optional_inline}}
  - : Ein Array von RP-Clients, mit denen der Benutzer registriert ist.
- `domain_hints` {{optional_inline}}
  - : Ein Array von Domänen, mit denen das Konto verbunden ist. Die RP kann einen `get()`-Anruf ausführen, der eine [`domainHint`](/de/docs/Web/API/IdentityCredentialRequestOptions#domainhint)-Eigenschaft enthält, um die zurückgegebenen Konten nach Domäne zu filtern.
- `label_hints` {{optional_inline}}
  - : Ein Array von Strings, das Labels angibt, die Kontotypen definieren, mit denen das Konto identifiziert wird. Wenn die Konfigurationsdatei ein [`account_label`](#account_label) angibt, werden nur Konten zurückgegeben, die dieses Label in ihren `label_hints` enthalten.
- `login_hints` {{optional_inline}}
  - : Ein Array von Strings, das das Konto darstellt. Diese Strings werden verwendet, um die Liste der Kontooptionen zu filtern, die der Browser dem Benutzer für die Anmeldung anbietet. Dies geschieht, wenn die `loginHint`-Eigenschaft innerhalb [`identity.providers`](/de/docs/Web/API/IdentityCredentialRequestOptions#providers) in einem verwandten `get()`-Anruf bereitgestellt wird. Jedes Konto mit einem String in seinem `login_hints`-Array, der mit dem bereitgestellten `loginHint` übereinstimmt, wird eingeschlossen.

> [!NOTE]
> Wenn der Benutzer bei keinem IdP-Konto angemeldet ist, sollte der Endpunkt mit [HTTP 401 (Unauthorized)](/de/docs/Web/HTTP/Reference/Status/401) antworten.

### Der Client-Metadaten-Endpunkt

Der Browser sendet nicht authentifizierte Anfragen zu diesem Endpunkt über die `GET`-Methode, wobei der `clientId`-Parameter in den `get()`-Anruf übergeben wird.

Zum Beispiel:

```http
GET /client_metadata.php?client_id=1234 HTTP/1.1
Host: idp.example
Origin: https://rp.example/
Accept: application/json
Sec-Fetch-Dest: webidentity
```

Die Antwort auf eine erfolgreiche Anfrage beinhaltet URLs, die auf die Metadatenseiten und die Nutzungsbedingungen der RP zeigen und in der vom Browser bereitgestellten FedCM-Benutzeroberfläche verwendet werden sollen. Dies sollte der folgenden JSON-Struktur entsprechen:

```json
{
  "privacy_policy_url": "https://rp.example/privacy_policy.html",
  "terms_of_service_url": "https://rp.example/terms_of_service.html"
}
```

### Der Disconnect-Endpunkt

Durch Aufrufen von [`IdentityCredential.disconnect()`](/de/docs/Web/API/IdentityCredential/disconnect_static) sendet der Browser eine cross-origin {{httpmethod("POST")}} Anfrage mit Cookies und einem {{httpheader("Content-Type")}} von `application/x-www-form-urlencoded` an den Disconnect-Endpunkt mit den folgenden Informationen:

- `account_hint`
  - : Ein String, der einen Hinweis auf ein Konto spezifiziert, den der IdP zur Identifizierung des zu trennenden Kontos verwendet.
- `client_id`
  - : Ein String, der die Client-ID der RP spezifiziert.

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

1. Mit [CORS (Cross-Origin Resource Sharing)](/de/docs/Web/HTTP/Guides/CORS) auf die Anfrage antworten.
2. Verifizieren, dass die Anfrage einen {{httpheader("Sec-Fetch-Dest")}} HTTP-Header mit einer Direktive von `webidentity` enthält.
3. Den {{httpheader("Origin")}}-Header mit dem RP-Ursprung abgleichen, der durch die `client_id` bestimmt wird. Die Abfrage ablehnen, wenn sie nicht übereinstimmen.
4. Das Konto finden, das mit dem `account_hint` übereinstimmt.
5. Das Benutzerkonto aus der Liste der mit der RP verbundenen Konten trennen.
6. Mit der identifizierten Benutzer-`account_id` im JSON-Format antworten:

   ```json
   {
     "account_id": "account456"
   }
   ```

> [!NOTE]
> Wenn der IdP alle mit der RP verknüpften Konten trennen möchte, kann er einen String übermitteln, der mit keiner `account_id` übereinstimmt, zum Beispiel `"account_id": "*"`.

### Der ID-Behauptungsendpunkt

Der Browser sendet authentifizierte Anfragen zu diesem Endpunkt über die [`POST`](/de/docs/Web/HTTP/Reference/Methods/POST) Methode, mit einem Inhaltstyp von `application/x-www-form-urlencoded`. Die Anfrage enthält ebenfalls eine Nutzlast mit Details zur versuchten Anmeldung und dem zu validierenden Konto.

Es sollte folgendermaßen aussehen:

```http
POST /assertion.php HTTP/1.1
Host: idp.example
Origin: https://rp.example/
Content-Type: application/x-www-form-urlencoded
Cookie: 0x23223
Sec-Fetch-Dest: webidentity
account_id=123&client_id=client1234&disclosure_text_shown=true&is_auto_selected=true
```

Eine Anfrage zu diesem Endpunkt wird als Ergebnis der Auswahl eines Kontos zur Anmeldung aus der entsprechenden Browser-UI gesendet. Wenn gültige Benutzeranmeldedaten gesendet werden, sollte dieser Endpunkt mit einem Validierungstoken antworten, das die RP zur Validierung des Benutzers auf ihrem eigenen Server nutzen kann, gemäß den Anweisungen des IdP zur Identitätsföderation. Sobald die RP den Benutzer validiert hat, kann sie ihn anmelden, zu ihrem Dienst registrieren usw.

```json
{
  "token": "***********"
}
```

Die Anfragelast enthält die folgenden Parameter:

- `client_id`
  - : Die Client-ID der RP (die mit der `clientId` aus der ursprünglichen `get()`-Anfrage übereinstimmt).
- `account_id`
  - : Die eindeutige ID des Benutzerkontos, das angemeldet werden soll (die mit der Benutzer-`id` aus der Antwort des Kontenlisten-Endpunkts übereinstimmt).
- `params` {{optional_inline}}
  - : Die Serialisierung des `params`-Objekts aus der ursprünglichen `get()`-Anfrage.
- `disclosure_text_shown`
  - : Ein String von `"true"` oder `"false"`, der angibt, ob der Offenlegungstext angezeigt wurde oder nicht. Der Offenlegungstext ist die dem Benutzer angezeigte Information (die auch die Links zu den Nutzungsbedingungen und zur Datenschutzerklärung enthalten kann, falls bereitgestellt), falls der Benutzer beim IdP angemeldet ist, aber kein spezifisches Konto bei der aktuellen RP hat (in welchem Fall er sich als seine IdP-Identität anmelden und dann ein entsprechendes Konto bei der RP erstellen müsste).
- `is_auto_selected`
  - : Ein String von `"true"` oder `"false"`, der angibt, ob die Authentifizierungsvalidierungsanfrage als Ergebnis einer [automatischen Wiederauthentifizierung](/de/docs/Web/API/FedCM_API/RP_sign-in#auto-reauthentication) ohne Benutzereingriff ausgestellt wurde. Dies kann passieren, wenn der [`get()`](/de/docs/Web/API/CredentialsContainer/get)-Aufruf mit einer [`mediation`](/de/docs/Web/API/CredentialsContainer/get#mediation)-Optionswert von `"optional"` oder `"silent"` ausgeführt wird. Es ist nützlich für den IdP zu wissen, ob eine automatische Wiederauthentifizierung stattfand, um die Leistung zu bewerten und im Falle eines höheren Sicherheitsbedarfs. Zum Beispiel könnte der IdP einen Fehlercode zurückgeben, der der RP mitteilt, dass eine explizite Benutzerbeteiligung erforderlich ist (`mediation="required"`).

> [!NOTE]
> Wenn der [`get()`](/de/docs/Web/API/CredentialsContainer/get)-Aufruf erfolgreich ist, wird der `is_auto_selected`-Wert auch der RP über die [`IdentityCredential.isAutoSelected`](/de/docs/Web/API/IdentityCredential/isAutoSelected)-Eigenschaft mitgeteilt.

#### CORS-Header für den ID-Behauptungsendpunkt

Die Antwort des ID-Behauptungsendpunkts muss die {{httpheader("Access-Control-Allow-Origin")}} und {{httpheader("Access-Control-Allow-Credentials")}} Header enthalten, und der `Access-Control-Allow-Origin` muss den Ursprung des Anfragenden enthalten:

```http
Access-Control-Allow-Origin: https://rp.example
Access-Control-Allow-Credentials: true
```

Beachten Sie, dass der `Access-Control-Allow-Origin` auf den spezifischen Ursprung des Anfragenden (der RP) eingestellt werden muss und nicht den Platzhalterwert `*` verwenden kann.

Ohne diese Header wird die Anfrage mit einem Netzwerkfehler fehlschlagen.

#### ID-Behauptungs-Fehlerantworten

Wenn der IdP keinen Token ausstellen kann — zum Beispiel, wenn der Client nicht autorisiert ist — antwortet der ID-Behauptungsendpunkt mit einer Fehlerantwort, die Informationen über die Art des Fehlers enthält. Zum Beispiel:

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
  - : Eine URL. Dies sollte eine Webseite sein, die Informationen über den Fehler in menschenlesbarer Form enthält, die den Benutzern angezeigt werden können, z.B. wie man den Fehler behebt oder den Kundendienst kontaktiert. Die URL muss gleichartig mit der Konfigurations-URL des IdP sein.

Diese Informationen können auf verschiedene Weise genutzt werden:

- Der Browser kann eine benutzerdefinierte Benutzeroberfläche anzeigen, die den Benutzer darüber informiert, was schiefgegangen ist (siehe die [Chrome-Dokumentation](https://privacysandbox.google.com/blog/fedcm-chrome-120-updates#error-api) für ein Beispiel). Beachten Sie, dass der IdP-Server keine Informationen zurückgeben kann, wenn die Anfrage fehlschlägt, weil der IdP-Server nicht verfügbar ist. In solchen Fällen wird der Browser dies über eine generische Nachricht melden.
- Der zugehörige RP [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get)-Aufruf, der verwendet wurde, um die Anmeldung zu versuchen, wird sein Versprechen mit einem [`IdentityCredentialError`](/de/docs/Web/API/IdentityCredentialError) ablehnen, der die Fehlerinformationen enthält. Eine RP kann diesen Fehler abfangen und dann die benutzerdefinierte Benutzeroberfläche des Browsers mit Informationen ergänzen, die dem Benutzer helfen, in einem zukünftigen Anmeldeversuch erfolgreich zu sein.

## Aktualisieren des Anmeldestatuses mit der Login-Status-API

Die **Login-Status-API** ermöglicht es einem IdP, einen Browser über seinen Anmeldestatus in diesem bestimmten Browser zu informieren — damit meinen wir, "ob Benutzer in diesem Browser beim IdP angemeldet sind oder nicht". Der Browser speichert diesen Status für jeden IdP; die FedCM-API nutzt ihn dann, um die Anzahl der Anfragen an den IdP zu reduzieren (da sie keine Konten anfordern muss, wenn keine Benutzer beim IdP angemeldet sind). Es mildert auch [potentielle Timing-Angriffe](https://github.com/w3c-fedid/FedCM/issues/447).

Für jeden bekannten IdP (identifiziert durch seine Konfigurations-URL) hält der Browser eine triviale Statusvariable, die den Anmeldestatus mit drei möglichen Werten repräsentiert:

- `"logged-in"`: Der IdP hat mindestens ein Benutzerkonto angemeldet. Beachten Sie, dass die RP und der Browser zu diesem Zeitpunkt nicht wissen, um welchen Benutzer es sich handelt. Informationen zu bestimmten Benutzern werden vom IdP-`accounts_endpoint`](#der_kontenlisten-endpunkt) zu einem späteren Zeitpunkt im FedCM-Flow zurückgegeben.
- `"logged-out"`: Alle IdP-Konten sind derzeit abgemeldet.
- `"unknown"`: Der Anmelde-Status dieses IdP ist unbekannt. Dies ist der Standardwert.

### Anmeldestatus festlegen

Der IdP sollte seinen Anmeldestatus aktualisieren, wenn sich ein Benutzer an- oder abmeldet. Dies kann auf zwei verschiedene Weisen geschehen:

- Der {{httpheader("Set-Login")}} HTTP-Antwort-Header kann in einer Top-Level-Navigation oder einer gleichartigen Subressourcenanfrage gesetzt werden:

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

### Wie sich der Anmeldestatus auf den föderierten Anmeldeflow auswirkt

Wenn eine [RP versucht, eine föderierte Anmeldung durchzuführen](/de/docs/Web/API/FedCM_API/RP_sign-in), wird der Anmeldestatus überprüft:

- Wenn der Anmeldestatus eines IdP auf `"logged-in"` gesetzt ist, wird eine Anfrage an den [Kontenlisten-Endpunkt](#der_kontenlisten-endpunkt) gesendet und verfügbare Konten zur Anmeldung werden dem Benutzer im vom Browser bereitgestellten FedCM-Dialog angezeigt.
- Wenn alle Anmeldestatus der IdPs auf `"logged-out"` gesetzt sind, wird das von der FedCM-`get()`-Anforderung zurückgegebene Versprechen abgelehnt, ohne eine Anfrage an den Kontenlisten-Endpunkt zu senden. In einem solchen Fall liegt es in der Verantwortung des Entwicklers, den Flow zu handhaben, zum Beispiel indem er den Benutzer auffordert, sich bei einem geeigneten IdP anzumelden.
- Wenn der Anmeldestatus eines IdP auf `"unknown"` gesetzt ist, wird eine Anfrage an den Kontenlisten-Endpunkt gesendet und der Login-Status wird basierend auf der Antwort aktualisiert:
  - Wenn der Endpunkt eine Liste verfügbarer Konten zur Anmeldung zurückgibt, wird der Status auf `"logged-in"` aktualisiert und die Anmeldeoptionen dem Benutzer im vom Browser bereitgestellten FedCM-Dialog angezeigt.
  - Wenn der Endpunkt keine Konten zurückgibt, wird der Status auf `"logged-out"` aktualisiert; das von der FedCM-`get()`-Anfrage zurückgegebene Versprechen wird abgelehnt, wenn keine anderen `logged-in` IdPs verfügbar sind.

### Was passiert, wenn der Anmeldestatus des Browsers und des IdP nicht synchron sind?

Obwohl die Login-Status-API den Browser über den Anmeldestatus informiert, ist es möglich, dass der Browser und ein IdP nicht synchron sind. Zum Beispiel könnten die IdP-Sitzungen ablaufen, was bedeutet, dass alle Benutzerkonten abgemeldet werden, aber der Anmeldestatus noch auf `"logged-in"` gesetzt ist (die Anwendung war nicht in der Lage, den Anmeldestatus auf `"logged-out"` zu setzen). In einem solchen Fall, wenn versucht wird, sich federiert anzumelden, wird eine Anfrage zum Kontenlisten-Endpunkt des IdP gemacht, jedoch werden keine verfügbaren Konten zurückgegeben, da die Sitzung nicht mehr verfügbar ist.

Wenn dies passiert, kann der Browser dynamisch eine Benutzeranmeldung bei einem IdP ermöglichen, indem er die Anmeldeseite des IdP in einem Dialog öffnet (die Anmelde-URL befindet sich in der [Konfigurationsdatei](#eine_konfigurationsdatei_und_endpunkte_bereitstellen) `login_url`). Die genaue Art dieses Flows liegt im Ermessen des Browsers; [Chrome handhabt es zum Beispiel so](https://privacysandbox.google.com/blog/fedcm-chrome-120-updates#what_if_the_user_session_expires_let_the_user_sign_in_through_a_dynamic_login_flow).

Sobald der Benutzer beim IdP angemeldet ist, sollte der IdP:

- Den Browser darüber informieren, dass der Benutzer angemeldet ist, indem er den [Anmeldestatus auf `"logged-in"`](#anmeldestatus_festlegen) setzt.
- Den Anmeldedialog schließen, indem er die Methode [`IdentityProvider.close()`](/de/docs/Web/API/IdentityProvider/close_static) aufruft.

## Siehe auch

- [Federated Credential Management API](https://developer.chrome.com/docs/identity/fedcm/overview) auf developer.chrome.com (2023)
