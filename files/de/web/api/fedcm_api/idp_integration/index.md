---
title: Identitätsanbieter-Integration mit FedCM
slug: Web/API/FedCM_API/IDP_integration
l10n:
  sourceCommit: 8cd7f0fdcb2ea8d53ec7dae071eb2eb76bf5bfaf
---

{{DefaultAPISidebar("FedCM API")}}

Dieser Artikel beschreibt alle Schritte, die ein {{Glossary("Identity_provider", "Identitätsanbieter")}} (IdP) unternehmen muss, um sich in die Federated Credential Management (FedCM) API zu integrieren.

## Schritte zur IdP-Integration

Um sich in FedCM zu integrieren, muss ein IdP Folgendes tun:

1. [Bereitstellung einer well-known Datei](#bereitstellung_einer_well-known_datei) zur Identifizierung des IdPs.
2. [Bereitstellung einer Konfigurationsdatei und Endpunkte](#bereitstellung_einer_konfigurationsdatei_und_endpunkte) für die Kontoliste und die Ausstellung von Assertionen (und optional Client-Metadaten).
3. [Aktualisierung des Anmeldestatus](#aktualisieren_des_anmeldestatus_mithilfe_der_login_status_api) über die Login Status API.

## Bereitstellung einer well-known Datei

Es besteht ein potenzielles Datenschutzproblem, bei dem ein [IdP in der Lage ist festzustellen, ob ein Benutzer ohne ausdrückliche Zustimmung eine vertrauende Partei (RP) besucht hat](https://github.com/w3c-fedid/FedCM/issues/230). Dies hat Implikationen für das Tracking, daher ist ein IdP verpflichtet, eine well-known Datei bereitzustellen, um seine Identität zu verifizieren und dieses Problem zu entschärfen.

Die well-known Datei wird über eine unautorisierte [`GET`](/de/docs/Web/HTTP/Reference/Methods/GET)-Anfrage angefordert, die keine Weiterleitungen folgt. Dies verhindert effektiv, dass der IdP erfährt, wer die Anfrage gestellt hat und welche {{Glossary("Relying_party", "RP")}} versucht, sich zu verbinden.

Die well-known Datei muss vom [eTLD+1](https://web.dev/articles/same-site-same-origin#site) des IdPs unter `/.well-known/web-identity` bereitgestellt werden. Zum Beispiel, wenn die IdP-Endpunkte unter `https://accounts.idp.example/` bereitgestellt werden, müssen sie eine well-known Datei unter `https://idp.example/.well-known/web-identity` bereitstellen. Der Inhalt der well-known Datei sollte die folgende JSON-Struktur haben:

```json
{
  "provider_urls": ["https://accounts.idp.example/config.json"]
}
```

Das `provider_urls` Feld sollte ein Array von URLs enthalten, die auf gültige IdP-Konfigurationsdateien verweisen, die von RPs zur Interaktion mit dem IdP verwendet werden können. Die Länge des Arrays ist derzeit auf eins begrenzt.

## Der `Sec-Fetch-Dest` HTTP-Header

Alle vom Browser über FedCM gesendeten Anfragen enthalten einen `{{httpheader("Sec-Fetch-Dest")}}: webidentity` Header. Alle IdP-Endpunkte, die autorisierte Anfragen empfangen (d.h. `accounts_endpoint` und `id_assertion_endpoint`), müssen bestätigen, dass dieser Header enthalten ist, um {{Glossary("CSRF", "CSRF")}}-Angriffe zu verhindern.

## Bereitstellung einer Konfigurationsdatei und Endpunkte

Die IdP-Konfigurationsdatei bietet eine Liste der Endpunkte, die der Browser benötigt, um den Identitätsföderationsablauf zu verarbeiten und die Anmeldungen zu verwalten. Die Endpunkte müssen ursprungsgleich mit der Konfiguration sein.

Der Browser fordert die Konfigurationsdatei über die [`GET`](/de/docs/Web/HTTP/Reference/Methods/GET)-Methode an, die keine Weiterleitungen folgt. Dies verhindert effektiv, dass der IdP erfährt, wer die Anfrage gestellt hat und welche RP versucht, sich zu verbinden.

Die Konfigurationsdatei (bereitgestellt unter `https://accounts.idp.example/config.json` in unserem Beispiel) sollte die folgende JSON-Struktur haben:

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
  - : Die URL des Kontolisten-Endpunkts, der eine Liste von Konten zurückgibt, bei denen der Benutzer derzeit beim IdP angemeldet ist. Der Browser verwendet diese, um eine Liste von Anmeldeoptionen zu erstellen, die dem Benutzer in der vom Browser bereitgestellten FedCM-Benutzeroberfläche angezeigt werden.
- `account_label` {{optional_inline}}
  - : Ein String, der, falls enthalten, einen Bezeichner für eine Teilmenge von Konten angibt, die zurückgegeben werden sollten, wenn dieser IdP für die föderierte Authentifizierung verwendet wird. Wenn eine `get()`-Anfrage gestellt wird, werden nur Konten zurückgegeben, die diesen String in ihren `label_hints` Parametern enthalten, vom [Kontolisten-Endpunkt](#der_kontolisten-endpunkt).
- `supports_use_other_account` {{optional_inline}}
  - : Ein boolescher Wert, der standardmäßig auf `false` gesetzt ist; wenn auf `true` gesetzt, bedeutet dies, dass Benutzer sich mit einem anderen Konto anmelden können als dem, bei dem sie derzeit angemeldet sind (wenn der IdP mehrere Konten unterstützt). Dies gilt nur für `get()`-Aufrufe, die den [Aktivmodus](/de/docs/Web/API/IdentityCredentialRequestOptions#active) angeben.
    > [!NOTE]
    > In der Browser-Anmelde-UI wird dies voraussichtlich als eine Art "Anderes Konto wählen"-Button erscheinen.
- `client_metadata_endpoint` {{optional_inline}}
  - : Die URL für den Client-Metadaten-Endpunkt, der URLs bereitstellt, die auf die Metadaten des RPs und die Seiten der Nutzungsbedingungen verweisen, die in der FedCM-Benutzeroberfläche verwendet werden sollen.
- `disconnect_endpoint` {{optional_inline}}
  - : Die URL des Disconnect-Endpunkts, der vom RP verwendet wird, um die Verbindung zum IdP zu trennen, über die [`IdentityCredential.disconnect()`](/de/docs/Web/API/IdentityCredential/disconnect_static)-Methode.
- `id_assertion_endpoint`
  - : Die URL des ID-Assertion-Endpunkts, der bei Übermittlung gültiger Benutzeranmeldeinformationen mit einem Validierungstoken antworten sollte, das der RP zur Validierung der Authentifizierung verwenden kann.
- `login_url`
  - : Die URL der Anmeldeseite, damit der Benutzer sich beim IdP anmelden kann.
- `branding` {{optional_inline}}
  - : Enthält Markeninformationen, die in der vom Browser bereitgestellten FedCM-Benutzeroberfläche verwendet werden, um deren Erscheinungsbild nach Wunsch des IdP anzupassen. Die bereitgestellte Symbolgröße muss im Passivmodus größer oder gleich `25` (`25px`) und im Aktivmodus größer oder gleich `40` (`40px`) sein (siehe [Aktivmodus versus Passivmodus](/de/docs/Web/API/FedCM_API/RP_sign-in#active_versus_passive_mode) für mehr Details).

Die folgende Tabelle fasst die verschiedenen Anfragen zusammen, die von der FedCM-API gestellt werden:

| Endpunkt/Ressource         | Methode | Mit Anmeldedaten (mit Cookies) | Enthält {{httpheader("Origin")}} |
| -------------------------- | ------- | ------------------------------ | -------------------------------- |
| `well-known`/`config.json` | `GET`   | Nein                           | Nein                             |
| `accounts_endpoint`        | `GET`   | Ja                             | Nein                             |
| `client_metadata_endpoint` | `GET`   | Nein                           | Ja                               |
| `disconnect_endpoint`      | `POST`  | Ja                             | Ja                               |
| `id_assertion_endpoint`    | `POST`  | Ja                             | Ja                               |

> [!NOTE]
> Eine Beschreibung des FedCM-Ablaufs, in dem auf diese Endpunkte zugegriffen wird, finden Sie unter [FedCM Anmeldeablauf](/de/docs/Web/API/FedCM_API/RP_sign-in#fedcm_sign-in_flow).

> [!NOTE]
> Keine der von der FedCM-API gestellten Anfragen an die hier beschriebenen Endpunkte ermöglicht es, Weiterleitungen zu folgen, aus Datenschutzgründen.

### Der Kontolisten-Endpunkt

Der Browser sendet autorisierte Anfragen (d.h. mit einem Cookie, das den Benutzer identifiziert, der angemeldet ist) an diesen Endpunkt über die `GET`-Methode. Die Anfrage hat keinen `client_id` Parameter, {{httpheader("Origin")}} Header oder {{httpheader("Referer")}} Header. Dies verhindert effektiv, dass der IdP erfährt, zu welcher RP der Benutzer sich anmelden möchte. Die zurückgegebene Liste von Konten ist RP-unabhängig.

Beispiel:

```http
GET /accounts.php HTTP/1.1
Host: idp.example
Accept: application/json
Cookie: 0x23223
Sec-Fetch-Dest: webidentity
```

Die Antwort auf eine erfolgreiche Anfrage gibt eine Liste aller IdP-Konten zurück, bei denen der Benutzer derzeit angemeldet ist (nicht auf eine bestimmte RP bezogen), mit einer JSON-Struktur, die der folgenden entspricht:

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
      "domain_hints": ["rp1.example.com", "rp3.example.com"],
      "label_hints": ["developer", "admin"],
      "login_hints": ["elaina_maduro", "elaina_maduro@idp.example"]
    },
    {
      "id": "elly",
      "given_name": "Elly",
      "name": "Elly",
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

Dazu gehören folgende Informationen:

- `id`
  - : Die eindeutige ID des Benutzers.
- `name`
  - : Der Nachname des Benutzers.
- `email`
  - : Die E-Mail-Adresse des Benutzers.
- `given_name` {{optional_inline}}
  - : Der Vorname des Benutzers.
- `picture` {{optional_inline}}
  - : Die URL des Avatar-Bildes des Benutzers.
- `approved_clients` {{optional_inline}}
  - : Ein Array von RP-Clients, bei denen der Benutzer registriert ist.
- `domain_hints` {{optional_inline}}
  - : Ein Array von Domains, mit denen das Konto verbunden ist. Die RP kann einen `get()` Aufruf machen, der eine [`domainHint`](/de/docs/Web/API/IdentityCredentialRequestOptions#domainhint)-Eigenschaft enthält, um die zurückgegebenen Konten nach Domain zu filtern.
- `label_hints` {{optional_inline}}
  - : Ein Array von Strings, die Labels angeben, die Kontentypen definieren, mit denen das Konto identifiziert wird. Wenn die Konfigurationsdatei ein [`account_label`](#account_label) angibt, werden nur Konten, die dieses Label in ihren `label_hints` enthalten, vom Kontolisten-Endpunkt zurückgegeben.
- `login_hints` {{optional_inline}}
  - : Ein Array von Strings, die das Konto darstellen. Diese Strings werden verwendet, um die Liste der Kontooptionen zu filtern, die der Browser dem Benutzer zur Anmeldung anbietet. Dies tritt auf, wenn die `loginHint`-Eigenschaft innerhalb von [`identity.providers`](/de/docs/Web/API/IdentityCredentialRequestOptions#providers) in einem zugehörigen `get()`-Aufruf bereitgestellt wird. Jedes Konto mit einem String in seinem `login_hints` Array, das dem bereitgestellten `loginHint` entspricht, wird einbezogen.

> [!NOTE]
> Wenn der Benutzer bei keinen IdP-Konten angemeldet ist, sollte der Endpunkt mit [HTTP 401 (Unauthorized)](/de/docs/Web/HTTP/Reference/Status/401) antworten.

### Der Client-Metadaten-Endpunkt

Der Browser sendet nicht autorisierte Anfragen an diesen Endpunkt über die `GET`-Methode, wobei die `clientId` in den `get()` Aufruf als Parameter übergeben wird.

Beispiel:

```http
GET /client_metadata.php?client_id=1234 HTTP/1.1
Host: idp.example
Origin: https://rp.example/
Accept: application/json
Sec-Fetch-Dest: webidentity
```

Die Antwort auf eine erfolgreiche Anfrage enthält URLs, die auf die Metadaten des RPs und die Seiten der Nutzungsbedingungen verweisen, die in der vom Browser bereitgestellten FedCM-Benutzeroberfläche verwendet werden sollen. Diese sollte der unten angegebenen JSON-Struktur folgen:

```json
{
  "privacy_policy_url": "https://rp.example/privacy_policy.html",
  "terms_of_service_url": "https://rp.example/terms_of_service.html"
}
```

### Der Disconnect-Endpunkt

Indem [`IdentityCredential.disconnect()`](/de/docs/Web/API/IdentityCredential/disconnect_static) aufgerufen wird, sendet der Browser eine Cross-Origin-{{httpmethod("POST")}} Anfrage mit Cookies und einem {{httpheader("Content-Type")}} von `application/x-www-form-urlencoded` an den Disconnect-Endpunkt mit den folgenden Informationen:

- `account_hint`
  - : Ein String, der einen Kontohinweis angibt, den der IdP verwendet, um das zu trennende Konto zu identifizieren.
- `client_id`
  - : Ein String, der die Client-ID der RP angibt.

Beispiel:

```http
POST /disconnect HTTP/1.1
Host: idp.example
Origin: rp.example
Content-Type: application/x-www-form-urlencoded
Cookie: 0x123
Sec-Fetch-Dest: webidentity

account_hint=account456&client_id=rp123
```

Beim Empfang der Anfrage sollte der IdP-Server:

1. Auf die Anfrage mit [CORS (Cross-Origin Resource Sharing)](/de/docs/Web/HTTP/Guides/CORS) antworten.
2. Überprüfen, dass die Anfrage einen {{httpheader("Sec-Fetch-Dest")}} HTTP-Header mit der Anweisung `webidentity` enthält.
3. Den {{httpheader("Origin")}} Header mit dem von der `client_id` bestimmten RP-Origin abgleichen. Das Versprechen ablehnen, wenn sie nicht übereinstimmen.
4. Das Konto finden, das dem `account_hint` entspricht.
5. Das Benutzerkonto von der Liste der verbundenen RP-Konten trennen.
6. Mit dem identifizierten `account_id` des Benutzers im JSON-Format antworten:

   ```json
   {
     "account_id": "account456"
   }
   ```

> [!NOTE]
> Wenn der IdP alle mit der RP verbundenen Konten trennen möchte, kann es einen String übergeben, der mit keinem `account_id` übereinstimmt, zum Beispiel `"account_id": "*"`.

### Der ID-Assertion-Endpunkt

Der Browser sendet autorisierte Anfragen an diesen Endpunkt über die [`POST`](/de/docs/Web/HTTP/Reference/Methods/POST)-Methode mit einem Content-Type von `application/x-www-form-urlencoded`. Die Anfrage enthält auch eine Nutzlast mit Details über den Anmeldeversuch und das zu validierende Konto.

Der Anruf könnte so aussehen:

```http
POST /assertion.php HTTP/1.1
Host: idp.example
Origin: https://rp.example/
Content-Type: application/x-www-form-urlencoded
Cookie: 0x23223
Sec-Fetch-Dest: webidentity
account_id=123&client_id=client1234&nonce=Ct60bD&disclosure_text_shown=true&is_auto_selected=true
```

Eine Anfrage an diesen Endpunkt wird als Ergebnis der Wahl eines Kontos zur Anmeldung durch den Benutzer in der relevanten Browser-UI gesendet. Wenn gültige Benutzeranmeldeinformationen gesendet werden, sollte dieser Endpunkt mit einem Validierungstoken antworten, das der RP verwenden kann, um den Benutzer auf seinem eigenen Server zu validieren, gemäß den von dem IdP angebotenen Anweisungen zur Identitätsföderation. Sobald der RP den Benutzer validiert hat, kann er ihn anmelden, zum Dienst registrieren usw.

```json
{
  "token": "***********"
}
```

Die Anfrage-Nutzlast enthält die folgenden Parameter:

- `client_id`
  - : Die Client-ID des RPs (die mit dem `clientId` der ursprünglichen `get()`-Anfrage übereinstimmt).
- `account_id`
  - : Die eindeutige ID des Benutzerkontos, das angemeldet werden soll (die mit der `id` des Benutzers aus der Antwort des Kontolisten-Endpunkts übereinstimmt).
- `nonce` {{optional_inline}}
  - : Der Anfragenonce, bereitgestellt vom RP.
- `disclosure_text_shown`
  - : Ein String von `"true"` oder `"false"`, der angibt, ob der Offenlegungstext angezeigt wurde oder nicht. Der Offenlegungstext ist die dem Benutzer angezeigte Information (die die Links zu den Nutzungsbedingungen und Datenschutzrichtlinien enthalten kann, falls bereitgestellt), wenn der Benutzer beim IdP angemeldet ist, aber kein spezifisches Konto auf der aktuellen RP hat (in diesem Fall müsste er wählen, "Fortfahren als..." seine IdP-Identität und dann ein entsprechendes Konto auf der RP erstellen).
- `is_auto_selected`
  - : Ein String von `"true"` oder `"false"`, der angibt, ob die Authentifikationsvalidierungsanfrage als Ergebnis einer [automatischen Neuauthentifizierung](/de/docs/Web/API/FedCM_API/RP_sign-in#auto-reauthentication) ausgestellt wurde, d.h. ohne Benutzermediation. Dies kann auftreten, wenn der [`get()`](/de/docs/Web/API/CredentialsContainer/get)-Aufruf mit einer [`mediation`](/de/docs/Web/API/CredentialsContainer/get#mediation)-Optionswert von `"optional"` oder `"silent"` ausgestellt wird. Es ist nützlich, dass der IdP weiß, ob eine automatische Neuanmeldung erfolgt ist, etwa für Leistungsbewertungen und bei höherem Sicherheitsbedürfnis. Zum Beispiel könnte der IdP einen Fehlercode zurückgeben, der dem RP mitteilt, dass eine explizite Benutzermedierung (`mediation="required"`) erforderlich ist.

> [!NOTE]
> Wenn der [`get()`](/de/docs/Web/API/CredentialsContainer/get)-Aufruf erfolgreich ist, wird der Wert `is_auto_selected` auch dem RP über die [`IdentityCredential.isAutoSelected`](/de/docs/Web/API/IdentityCredential/isAutoSelected)-Eigenschaft mitgeteilt.

#### CORS-Header für den ID-Assertion-Endpunkt

Die Antwort des ID-Assertion-Endpunkts muss die Header {{httpheader("Access-Control-Allow-Origin")}} und {{httpheader("Access-Control-Allow-Credentials")}} einschließen, und `Access-Control-Allow-Origin` muss den Ursprung des Anfragenden einschließen:

```http
Access-Control-Allow-Origin: https://rp.example
Access-Control-Allow-Credentials: true
```

Beachten Sie, dass `Access-Control-Allow-Origin` auf den spezifischen Ursprung des Anfragenden (die RP) gesetzt werden muss und nicht der Platzhalterwert `*` sein kann.

Ohne diese Header schlägt die Anfrage mit einem Netzwerkfehler fehl.

#### ID-Assertion-Fehlerantworten

Wenn der IdP kein Token ausgeben kann — zum Beispiel, wenn der Client nicht autorisiert ist — antwortet der ID-Assertion-Endpunkt mit einer Fehlerantwort, die Informationen über die Art des Fehlers enthält. Beispiel:

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
  - : Ein String. Dies kann entweder ein bekannter Fehler aus der [OAuth 2.0 spezifizierten Fehlerliste](https://datatracker.ietf.org/doc/html/rfc6749#section-4.1.2.1) oder ein beliebiger String sein.
- `url` {{optional_inline}}
  - : Eine URL. Dies sollte eine Webseite sein, die menschenlesbare Informationen über den Fehler enthält, die den Benutzern angezeigt werden, wie zum Beispiel, wie der Fehler behoben werden kann oder wie der Kundendienst kontaktiert wird. Die URL muss das gleiche Site-Setting wie die Konfigurations-URL des IdPs haben.

Diese Informationen können auf verschiedene Arten verwendet werden:

- Der Browser kann dem Benutzer eine benutzerdefinierte Benutzeroberfläche anzeigen, die ihm mitteilt, was schief gelaufen ist (siehe die [Chrome-Dokumentation](https://privacysandbox.google.com/blog/fedcm-chrome-120-updates#error-api) für ein Beispiel). Beachten Sie, dass, wenn die Anfrage fehlschlug, weil der IdP-Server nicht verfügbar ist, kann er offensichtlich keine Informationen zurückgeben. In solchen Fällen meldet der Browser dies über eine generische Nachricht.
- Der zugehörige RP-[[`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) Aufruf, der zur Anmeldung verwendet wird, wird sein Versprechen mit einem `IdentityCredentialError` ablehnen, der die Fehlerinformationen enthält. Eine RP kann diesen Fehler abfangen und dann die benutzerdefinierte Benutzeroberfläche des Browsers mit einigen Informationen folgen, um dem Benutzer zu helfen, bei einem zukünftigen Anmeldeversuch erfolgreich zu sein.

## Aktualisieren des Anmeldestatus mithilfe der Login Status API

Die **Login Status API** erlaubt einem IdP, einem Browser seinen Anmeldestatus (Sign-In-Status) in diesem bestimmten Browser mitzuteilen — damit meinen wir "ob Benutzer im aktuellen Browser beim IdP angemeldet sind oder nicht". Der Browser speichert diesen Status für jeden IdP; die FedCM-API verwendet ihn dann, um die Anzahl der Anfragen an den IdP zu reduzieren (da es keine Zeit verschwenden muss, Accounts anzufordern, wenn keine Benutzer beim IdP angemeldet sind). Außerdem wird [möglichen Timing-Angriffen](https://github.com/w3c-fedid/FedCM/issues/447) vorgebeugt.

Für jeden bekannten IdP (identifiziert durch seine Konfigurations-URL) behält der Browser eine Tri-Status-Variable bei, die den Anmeldestatus mit drei möglichen Werten darstellt:

- `"logged-in"`: Der IdP hat mindestens ein Benutzerkonto angemeldet. Beachten Sie, dass zu diesem Zeitpunkt RP und Browser nicht wissen, welcher Benutzer das ist. Informationen zu spezifischen Benutzern werden später im FedCM-Ablauf vom [`accounts_endpoint`](#der_kontolisten-endpunkt) des IdPs zurückgegeben.
- `"logged-out"`: Alle Konten des IdPs sind derzeit abgemeldet.
- `"unknown"`: Der Anmeldestatus dieses IdPs ist nicht bekannt. Dies ist der Standardwert.

### Festlegen des Anmeldestatus

Der IdP sollte seinen Anmeldestatus aktualisieren, wenn sich ein Benutzer beim IdP anmeldet oder abmeldet. Dies kann auf zwei verschiedene Arten erfolgen:

- Der {{httpheader("Set-Login")}} HTTP-Antwort-Header kann in einer Top-Level-Navigation oder bei einer same-origin Subressource-Anfrage festgelegt werden:

  ```http
  Set-Login: logged-in

  Set-Login: logged-out
  ```

- Die [`Navigator.login.setStatus()`](/de/docs/Web/API/NavigatorLogin/setStatus)-Methode kann aus dem IdP-Ursprung aufgerufen werden:

  ```js
  /* Set logged-in status */
  navigator.login.setStatus("logged-in");

  /* Set logged-out status */
  navigator.login.setStatus("logged-out");
  ```

### Wie sich der Anmeldestatus auf den föderierten Anmeldeablauf auswirkt

Wenn eine [RP eine föderierte Anmeldung versucht](/de/docs/Web/API/FedCM_API/RP_sign-in), wird der Anmeldestatus überprüft:

- Wenn der Anmeldestatus eines IdP `"logged-in"` ist, wird eine Anfrage an den Kontenlisten-Endpunkt gestellt und dem Benutzer werden verfügbare Konten zur Anmeldung im FedCM-Dialog des Browsers angezeigt.
- Wenn alle Anmeldestatus der IdPs `"logged-out"` sind, wird das von der FedCM-`get()`-Anfrage zurückgegebene Versprechen abgelehnt, ohne eine Anfrage an den Kontenlisten-Endpunkt zu stellen. In einem solchen Fall liegt es am Entwickler, den Ablauf zu steuern, zum Beispiel indem er den Benutzer auffordert, sich bei einem geeigneten IdP anzumelden.
- Wenn der Anmeldestatus eines IdP `"unknown"` ist, wird eine Anfrage an den Kontenlisten-Endpunkt gestellt und der Anmeldestatus abhängig von der Antwort aktualisiert:
  - Wenn der Endpunkt eine Liste verfügbarer Konten zur Anmeldung zurückgibt, den Status auf `"logged-in"` aktualisieren und die Anmeldeoptionen im Browser-FedCM-Dialog anzeigen.
  - Wenn der Endpunkt keine Konten zurückgibt, den Status auf `"logged-out"` aktualisieren; das von der FedCM-`get()`-Anfrage zurückgegebene Versprechen wird abgelehnt, wenn keine anderen `logged-in` IdPs verfügbar sind.

### Was passiert, wenn der Browser und der IdP-Anmeldestatus asynchron werden?

Trotz der Login Status API, die den Browser über den IdP-Anmeldestatus informiert, ist es möglich, dass der Browser und ein IdP asynchron werden. Zum Beispiel können die Sitzungen des IdPs ablaufen, was bedeutet, dass alle Benutzerkonten abgemeldet sind, aber der Anmeldestatus immer noch auf `"logged-in"` gesetzt ist (die Anwendung konnte den Anmeldestatus nicht auf `"logged-out"` setzen). In einem solchen Fall wird bei einem Versuch der föderierten Anmeldung eine Anfrage an den Kontenlisten-Endpunkt des IdPs gestellt, aber es werden keine verfügbaren Konten zurückgegeben, da die Sitzung nicht mehr verfügbar ist.

Wenn dies eintritt, kann der Browser dem Benutzer dynamisch erlauben, sich beim IdP anzumelden, indem er die Seite zur IdP-Anmeldung in einem Dialog (die Anmelde-URL ist in der [Konfigurationsdatei](#bereitstellung_einer_konfigurationsdatei_und_endpunkte) des IdPs unter `login_url` zu finden). Die genaue Art dieses Ablaufs liegt beim Browser; zum Beispiel [handhabt Chrome dies so](https://privacysandbox.google.com/blog/fedcm-chrome-120-updates#what_if_the_user_session_expires_let_the_user_sign_in_through_a_dynamic_login_flow).

Sobald sich der Benutzer beim IdP angemeldet hat, sollte der IdP:

- Den Browser darüber informieren, dass der Benutzer angemeldet ist, indem er den [Anmeldestatus](#festlegen_des_anmeldestatus) auf `"logged-in"` setzt.
- Den Anmeldedialog über das Aufrufen der [`IdentityProvider.close()`](/de/docs/Web/API/IdentityProvider/close_static)-Methode schließen.

## Siehe auch

- [Federated Credential Management API](https://privacysandbox.google.com/cookies/fedcm) auf privacysandbox.google.com (2023)
