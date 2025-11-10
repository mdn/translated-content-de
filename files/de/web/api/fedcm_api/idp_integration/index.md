---
title: Integration des Identitätsanbieters mit FedCM
slug: Web/API/FedCM_API/IDP_integration
l10n:
  sourceCommit: 6722199b4d63fad3c33db1146af380fc98b6c202
---

{{DefaultAPISidebar("FedCM API")}}

Dieser Artikel beschreibt alle Schritte, die ein {{Glossary("Identity_provider", "Identitätsanbieter")}} (IdP) unternehmen muss, um sich in die Federated Credential Management (FedCM) API zu integrieren.

## IdP-Integrationsschritte

Um sich in FedCM zu integrieren, muss ein IdP Folgendes tun:

1. [Eine well-known Datei bereitstellen](#eine_well-known_datei_bereitstellen), um den IdP zu identifizieren.
2. [Eine Konfigurationsdatei und Endpunkte bereitstellen](#eine_konfigurationsdatei_und_endpunkte_bereitstellen) für die Kontenliste und die Ausgabe von Assertionen (optional auch Client-Metadaten).
3. [Seinen Anmeldestatus aktualisieren](#aktualisieren_des_anmeldestatuses_mit_der_login_status_api) mithilfe der Login Status API.

## Eine well-known Datei bereitstellen

Es gibt ein mögliches Datenschutzproblem, bei dem ein [IdP feststellen kann, ob ein Nutzer eine relying party (RP) ohne ausdrückliche Zustimmung besucht hat](https://github.com/w3c-fedid/FedCM/issues/230). Dies hat Implikationen für das Tracking, sodass ein IdP verpflichtet ist, eine well-known Datei bereitzustellen, um seine Identität zu verifizieren und dieses Problem zu mindern.

Die well-known Datei wird über einen nicht authentifizierten [`GET`](/de/docs/Web/HTTP/Reference/Methods/GET)-Anruf angefordert, der keine Weiterleitungen verfolgt. Dies verhindert effektiv, dass der IdP erfährt, wer die Anfrage gestellt hat und welche {{Glossary("Relying_party", "RP")}} versucht, eine Verbindung herzustellen.

Die well-known Datei muss vom [eTLD+1](https://web.dev/articles/same-site-same-origin#site) des IdP unter `/.well-known/web-identity` bereitgestellt werden. Wenn zum Beispiel die IdP-Endpunkte unter `https://accounts.idp.example/` bereitgestellt werden, müssen sie eine well-known Datei unter `https://idp.example/.well-known/web-identity` bereitstellen. Der Inhalt der well-known Datei sollte die folgende JSON-Struktur haben:

```json
{
  "provider_urls": ["https://accounts.idp.example/config.json"]
}
```

Das `provider_urls`-Element sollte ein Array von URLs enthalten, das auf gültige IdP-Konfigurationsdateien verweist, die von RPs genutzt werden können, um mit dem IdP zu interagieren. Die Länge des Arrays ist aktuell auf eins begrenzt.

## Der `Sec-Fetch-Dest` HTTP-Header

Alle Anfragen, die vom Browser über FedCM gesendet werden, enthalten einen `{{httpheader("Sec-Fetch-Dest")}}: webidentity` Header. Alle IdP-Endpunkte, die authentifizierte Anfragen erhalten (d.h. `accounts_endpoint` und `id_assertion_endpoint`), müssen sicherstellen, dass dieser Header enthalten ist, um gegen {{Glossary("CSRF", "CSRF")}}-Angriffe zu schützen.

## Eine Konfigurationsdatei und Endpunkte bereitstellen

Die IdP-Konfigurationsdatei bietet eine Liste der Endpunkte, die der Browser benötigt, um den Identitätsföderationsfluss zu verarbeiten und die Anmeldungen zu verwalten. Die Endpunkte müssen ursprungsgleich mit der Konfiguration sein.

Der Browser führt eine nicht authentifizierte Anfrage für die Konfigurationsdatei über die [`GET`](/de/docs/Web/HTTP/Reference/Methods/GET)-Methode aus, die keine Weiterleitungen verfolgt. Dies verhindert effektiv, dass der IdP erfährt, wer die Anfrage gestellt hat und welche RP versucht, eine Verbindung herzustellen.

Die Konfigurationsdatei (beispielsweise gehostet unter `https://accounts.idp.example/config.json`) sollte die folgende JSON-Struktur haben:

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
  - : Die URL für den Endpunkt der Kontenliste, der eine Liste von Konten zurückgibt, bei denen der Nutzer derzeit beim IdP angemeldet ist. Der Browser verwendet diese, um eine Liste von Anmeldeoptionen zu erstellen, die dem Nutzer in der browserbereitgestellten FedCM-Benutzeroberfläche angezeigt wird.
- `account_label` {{optional_inline}}
  - : Ein String, der, falls vorhanden, einen Identifikator für eine Teilmenge von Konten angibt, die zurückgegeben werden sollen, wenn dieser IdP für die föderierte Authentifizierung verwendet wird. Wenn ein `get()`-Anruf gemacht wird, werden nur Konten zurückgegeben, die in ihren `label_hints`-Parametern mit diesem String übereinstimmen, von dem [Kontenendpunkt](#der_kontenliste-endpunkt).
- `supports_use_other_account` {{optional_inline}}
  - : Ein boolescher Wert, der standardmäßig `false` ist; wenn er auf `true` gesetzt ist, bedeutet dies, dass Benutzer sich mit einem anderen Konto anmelden können als dem, mit dem sie derzeit angemeldet sind (wenn der IdP mehrere Konten unterstützt). Dies gilt nur für `get()`-Anrufe, die den [aktiven Modus](/de/docs/Web/API/IdentityCredentialRequestOptions#active) angeben.
    > [!NOTE]
    > In der Anmeldeoberfläche des Browsers wird dies wahrscheinlich als eine Art "Anderes Konto wählen"-Schaltfläche erscheinen.
- `client_metadata_endpoint` {{optional_inline}}
  - : Die URL für den Client-Metadatenendpunkt, der URLs zu den Metadatenseiten und den Nutzungsbedingungen der RP bereitstellt, die in der FedCM-Benutzeroberfläche verwendet werden sollen.
- `disconnect_endpoint` {{optional_inline}}
  - : Die URL für den Disconnect-Endpunkt, der von der RP verwendet wird, um die Verbindung zum IdP über die [`IdentityCredential.disconnect()`](/de/docs/Web/API/IdentityCredential/disconnect_static)-Methode zu trennen.
- `id_assertion_endpoint`
  - : Die URL für den ID-Assertions-Endpunkt, der bei Empfang gültiger Benutzeranmeldeinformationen mit einem Validierungstoken antworten sollte, das die RP verwenden kann, um die Authentifizierung zu validieren.
- `login_url`
  - : Die Anmeldeseiten-URL, über die sich der Nutzer beim IdP anmelden kann.
- `branding` {{optional_inline}}
  - : Enthält Branding-Informationen, die in der browserbereitgestellten FedCM-Benutzeroberfläche verwendet werden, um deren Erscheinungsbild nach Wunsch des IdP anzupassen. Die bereitgestellte Symbolgröße muss mindestens `25` (`25px`) im passiven Modus und mindestens `40` (`40px`) im aktiven Modus sein (siehe [Aktiver versus passiver Modus](/de/docs/Web/API/FedCM_API/RP_sign-in#active_versus_passive_mode) für weitere Details).

Die folgende Tabelle fasst die verschiedenen Anfragen zusammen, die von der FedCM API gemacht werden:

| Endpunkt/Ressource         | Methode | Mit Anmeldedaten (mit Cookies) | Enthält {{httpheader("Origin")}} |
| -------------------------- | ------- | ------------------------------ | -------------------------------- |
| `well-known`/`config.json` | `GET`   | Nein                           | Nein                             |
| `accounts_endpoint`        | `GET`   | Ja                             | Nein                             |
| `client_metadata_endpoint` | `GET`   | Nein                           | Ja                               |
| `disconnect_endpoint`      | `POST`  | Ja                             | Ja                               |
| `id_assertion_endpoint`    | `POST`  | Ja                             | Ja                               |

> [!NOTE]
> Eine Beschreibung des FedCM-Ablaufs, bei dem diese Endpunkte aufgerufen werden, finden Sie unter [FedCM-Anmeldevorgang](/de/docs/Web/API/FedCM_API/RP_sign-in#fedcm_sign-in_flow).

> [!NOTE]
> Keine der von der FedCM API an die hier beschriebenen Endpunkte gestellten Anfragen ermöglicht es aus Datenschutzgründen, Weiterleitungen zu folgen.

### Der Kontenliste-Endpunkt

Der Browser sendet authentifizierte Anfragen (d.h. mit einem Cookie, das den angemeldeten Benutzer identifiziert) an diesen Endpunkt über die `GET`-Methode. Die Anfrage hat keinen `client_id`-Parameter, {{httpheader("Origin")}}-Header oder {{httpheader("Referer")}}-Header. Dies verhindert effektiv, dass der IdP erfährt, bei welcher RP der Nutzer sich anmelden möchte. Die zurückgegebene Kontenliste ist RP-agnostisch.

Zum Beispiel:

```http
GET /accounts.php HTTP/1.1
Host: idp.example
Accept: application/json
Cookie: 0x23223
Sec-Fetch-Dest: webidentity
```

Die Antwort auf eine erfolgreiche Anfrage gibt eine Liste aller IdP-Konten zurück, bei denen der Nutzer derzeit angemeldet ist (nicht spezifisch für eine bestimmte RP), mit einer JSON-Struktur, die der folgenden entspricht:

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

Dies umfasst die folgenden Informationen, wobei `name`, `email`, `username` und `tel` optional sind, aber mindestens eines von ihnen vorhanden und nicht leer sein muss.

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
  - : Die URL des Benutzer-Avatar-Bildes.
- `approved_clients` {{optional_inline}}
  - : Ein Array von RP-Clients, bei denen der Benutzer registriert ist.
- `domain_hints` {{optional_inline}}
  - : Ein Array von Domains, mit denen das Konto verknüpft ist. Die RP kann einen `get()`-Anruf mit einer [`domainHint`](/de/docs/Web/API/IdentityCredentialRequestOptions#domainhint)-Eigenschaft machen, um die zurückgegebenen Konten nach Domain zu filtern.
- `label_hints` {{optional_inline}}
  - : Ein Array von Strings, die Labels spezifizieren, die Kontotypen definieren, mit denen das Konto identifiziert wird. Wenn die Konfigurationsdatei einen [`account_label`](#account_label) angibt, werden nur Konten zurückgegeben, die dieses Label in ihren `label_hints` enthalten.
- `login_hints` {{optional_inline}}
  - : Ein Array von Strings, die das Konto darstellen. Diese Strings werden verwendet, um die Liste der Kontooptionen zu filtern, die der Browser dem Benutzer zum Anmelden anbietet. Dies geschieht, wenn die `loginHint`-Eigenschaft innerhalb von [`identity.providers`](/de/docs/Web/API/IdentityCredentialRequestOptions#providers) in einem zugehörigen `get()`-Anruf bereitgestellt wird. Jedes Konto mit einem String in seinem `login_hints`-Array, der mit dem bereitgestellten `loginHint` übereinstimmt, wird eingeschlossen.

> [!NOTE]
> Wenn der Benutzer in keinem IdP-Konto angemeldet ist, sollte der Endpunkt mit [HTTP 401 (Unauthorized)](/de/docs/Web/HTTP/Reference/Status/401) antworten.

### Der Client-Metadatenendpunkt

Der Browser sendet unautorisierte Anfragen an diesen Endpunkt über die `GET`-Methode, wobei der `clientId` im `get()`-Anruf als Parameter übergeben wird.

Zum Beispiel:

```http
GET /client_metadata.php?client_id=1234 HTTP/1.1
Host: idp.example
Origin: https://rp.example/
Accept: application/json
Sec-Fetch-Dest: webidentity
```

Die Antwort auf eine erfolgreiche Anfrage enthält URLs, die auf die Metadaten- und Nutzungsbedingungen der RP-Seiten verweisen, die in der browserbereitgestellten FedCM-Benutzeroberfläche verwendet werden sollen. Dies sollte der folgenden JSON-Struktur entsprechen:

```json
{
  "privacy_policy_url": "https://rp.example/privacy_policy.html",
  "terms_of_service_url": "https://rp.example/terms_of_service.html"
}
```

### Der Disconnect-Endpunkt

Durch Aufrufen von [`IdentityCredential.disconnect()`](/de/docs/Web/API/IdentityCredential/disconnect_static) sendet der Browser eine Cross-Origin-{{httpmethod("POST")}}-Anfrage mit Cookies und einem {{httpheader("Content-Type")}} von `application/x-www-form-urlencoded` an den Disconnect-Endpunkt mit den folgenden Informationen:

- `account_hint`
  - : Ein String, der einen Konto-Hinweis angibt, den der IdP verwendet, um das Konto zu identifizieren, das getrennt werden soll.
- `client_id`
  - : Ein String, der den Client-Identifikator der RP angibt.

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

Beim Empfangen der Anfrage sollte der IdP-Server:

1. Auf die Anfrage mit [CORS (Cross-Origin Resource Sharing)](/de/docs/Web/HTTP/Guides/CORS) antworten.
2. Überprüfen, ob die Anfrage einen {{httpheader("Sec-Fetch-Dest")}} HTTP-Header mit der Direktive `webidentity` enthält.
3. Den {{httpheader("Origin")}}-Header gegen den RP-Ursprung, der durch die `client_id` bestimmt wird, abgleichen. Das Versprechen wird abgelehnt, wenn sie nicht übereinstimmen.
4. Das Konto finden, das dem `account_hint` entspricht.
5. Das Benutzerkonto von der Liste der verbundenen Konten der RP trennen.
6. Mit der identifizierten `account_id` des Benutzers im JSON-Format antworten:

   ```json
   {
     "account_id": "account456"
   }
   ```

> [!NOTE]
> Wenn der IdP alle mit der RP verbundenen Konten trennen möchte, kann er einen String übergeben, der mit keiner `account_id` übereinstimmt, zum Beispiel `"account_id": "*"`.

### Der ID-Assertions-Endpunkt

Der Browser sendet authentifizierte Anfragen an diesen Endpunkt über die [`POST`](/de/docs/Web/HTTP/Reference/Methods/POST)-Methode, mit einem Inhaltstyp von `application/x-www-form-urlencoded`. Die Anfrage enthält auch eine Nutzlast mit Details über den Anmeldeversuch und das Konto, das validiert werden soll.

Es sollte etwa so aussehen:

```http
POST /assertion.php HTTP/1.1
Host: idp.example
Origin: https://rp.example/
Content-Type: application/x-www-form-urlencoded
Cookie: 0x23223
Sec-Fetch-Dest: webidentity
account_id=123&client_id=client1234&nonce=Ct60bD&disclosure_text_shown=true&is_auto_selected=true
```

Eine Anfrage an diesen Endpunkt wird als Ergebnis der Benutzerwahl eines Kontos zum Anmelden in der relevanten Browser-Benutzeroberfläche gesendet. Wenn gültige Benutzeranmeldeinformationen gesendet werden, sollte dieser Endpunkt mit einem Validierungstoken antworten, das die RP verwenden kann, um den Benutzer auf ihrem eigenen Server zu validieren, gemäß den Anweisungen, die vom IdP für die Identitätsföderation bereitgestellt werden. Sobald die RP den Benutzer validiert hat, kann sie ihn anmelden oder ihn bei ihrem Dienst registrieren usw.

```json
{
  "token": "***********"
}
```

Die Anfrage-Nutzlast enthält die folgenden Parameter:

- `client_id`
  - : Der Client-Identifikator der RP (der mit dem `clientId` aus dem ursprünglichen `get()`-Anruf übereinstimmt).
- `account_id`
  - : Die eindeutige ID des Benutzerkontos, das angemeldet werden soll (die mit der `id` des Benutzers aus der Antwort des Kontenlisten-Endpunkts übereinstimmt).
- `nonce` {{optional_inline}}
  - : Die Anforderungs-Nonce, die von der RP bereitgestellt wird.
- `disclosure_text_shown`
  - : Ein String `"true"` oder `"false"`, der angibt, ob der Offenlegungstext angezeigt wurde oder nicht. Der Offenlegungstext ist die dem Benutzer angezeigte Information (die Links zu den Nutzungsbedingungen und der Datenschutzrichtlinie enthalten kann, falls vorhanden), wenn der Benutzer beim IdP angemeldet ist, aber kein spezielles Konto auf der aktuellen RP hat (in diesem Fall müsste er "Fortfahren als..." seine IdP-Identität wählen und dann ein entsprechendes Konto auf der RP erstellen).
- `is_auto_selected`
  - : Ein String `"true"` oder `"false"`, der angibt, ob die Authentifizierungsvalidierungsanfrage als Ergebnis der [automatischen Neuauthentifizierung](/de/docs/Web/API/FedCM_API/RP_sign-in#auto-reauthentication) durchgeführt wurde, d.h. ohne Benutzermediation. Dies kann auftreten, wenn der [`get()`](/de/docs/Web/API/CredentialsContainer/get)-Anruf mit einer [`mediation`](/de/docs/Web/API/CredentialsContainer/get#mediation)-Option von `"optional"` oder `"silent"` gestellt wird. Es ist nützlich für den IdP zu wissen, ob eine automatische Neuauthentifizierung stattgefunden hat, um die Leistung zu bewerten und für den Fall, dass höhere Sicherheit gewünscht wird. Beispielsweise könnte der IdP einen Fehlercode zurückgeben, der der RP mitteilt, dass eine explizite Benutzermediation erforderlich ist (`mediation="required"`).

> [!NOTE]
> Wenn der [`get()`](/de/docs/Web/API/CredentialsContainer/get)-Anruf erfolgreich ist, wird der `is_auto_selected`-Wert auch der RP über die [`IdentityCredential.isAutoSelected`](/de/docs/Web/API/IdentityCredential/isAutoSelected)-Eigenschaft mitgeteilt.

#### CORS-Header für den ID-Assertions-Endpunkt

Die Antwort des ID-Assertions-Endpunkts muss die {{httpheader("Access-Control-Allow-Origin")}}- und {{httpheader("Access-Control-Allow-Credentials")}}-Header enthalten, und der `Access-Control-Allow-Origin` muss den Ursprung des Anfragestellers beinhalten:

```http
Access-Control-Allow-Origin: https://rp.example
Access-Control-Allow-Credentials: true
```

Beachten Sie, dass der `Access-Control-Allow-Origin` auf den spezifischen Ursprung des Anfragestellers (der RP) gesetzt werden muss und nicht der Platzhalterwert `*` sein darf.

Ohne diese Header wird die Anfrage mit einem Netzwerksfehler fehlschlagen.

#### Fehlerantworten des ID-Assertions-Endpunkts

Wenn der IdP kein Token ausstellen kann — zum Beispiel, wenn der Client nicht autorisiert ist — antwortet der ID-Assertions-Endpunkt mit einer Fehlerantwort, die Informationen über die Art des Fehlers enthält. Zum Beispiel:

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
  - : Ein String. Dies kann entweder ein bekannter Fehler aus der [OAuth 2.0 spezifizierten Fehlerliste](https://datatracker.ietf.org/doc/html/rfc6749#section-4.1.2.1) sein oder ein beliebiger String.
- `url` {{optional_inline}}
  - : Eine URL. Dies sollte eine Webseite sein, die menschenlesbare Informationen über den Fehler enthält, die den Benutzern angezeigt werden, z.B. wie der Fehler behoben werden kann oder wie der Kundendienst kontaktiert werden kann. Die URL muss ursprungsgleich mit der Konfigurations-URL des IdP sein.

Diese Informationen können auf verschiedene Arten verwendet werden:

- Der Browser kann dem Benutzer eine benutzerdefinierte Benutzeroberfläche anzeigen, die ihm mitteilt, was schief gelaufen ist (siehe die [Chrome-Dokumentation](https://privacysandbox.google.com/blog/fedcm-chrome-120-updates#error-api) für ein Beispiel). Beachten Sie, dass, wenn die Anfrage fehlgeschlagen ist, weil der IdP-Server nicht verfügbar ist, er offensichtlich keine Informationen zurückgeben kann. In solchen Fällen wird der Browser dies über eine generische Nachricht melden.
- Der zugehörige RP-`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get)-Anruf, der zur Anmeldeversuchung verwendet wurde, wird das Versprechen mit einem [`IdentityCredentialError`](/de/docs/Web/API/IdentityCredentialError) ablehnen, der die Fehlerinformationen enthält. Eine RP kann diesen Fehler abfangen und dann die vom Browser bereitgestellte benutzerdefinierte Benutzeroberfläche mit einigen Informationen ergänzen, um dem Benutzer zu helfen, bei einem zukünftigen Anmeldeversuch erfolgreich zu sein.

## Aktualisieren des Anmeldestatuses mit der Login Status API

Die **Login Status API** ermöglicht es einem IdP, einem Browser mitzuteilen, ob er einen Anmeldestatus in diesem speziellen Browser hat — damit meinen wir, "ob irgendwelche Benutzer beim IdP in dem aktuellen Browser angemeldet sind oder nicht". Der Browser speichert diesen Status für jeden IdP; die FedCM API verwendet ihn dann, um die Anzahl der Anfragen an den IdP zu reduzieren (da es nicht notwendig ist, Konten anzufordern, wenn keine Benutzer beim IdP angemeldet sind). Es mindert auch [potenzielle Timing-Angriffe](https://github.com/w3c-fedid/FedCM/issues/447).

Für jeden bekannten IdP (identifiziert durch seine Konfigurations-URL) führt der Browser eine Drei-Zustand-Variable, die den Anmeldestatus mit drei möglichen Werten darstellt:

- `"logged-in"`: Der IdP hat mindestens ein Benutzerkonto angemeldet. Beachten Sie, dass zu diesem Zeitpunkt RP und Browser nicht wissen, welcher Benutzer das ist. Informationen zu spezifischen Benutzern werden später im FedCM-Ablauf vom IdP-`accounts_endpoint` zurückgegeben.
- `"logged-out"`: Alle IdP-Konten sind derzeit abgemeldet.
- `"unknown"`: Der Anmeldestatus dieses IdP ist nicht bekannt. Dies ist der Standardwert.

### Festlegen des Anmeldestatus

Der IdP sollte seinen Anmeldestatus aktualisieren, wenn sich ein Benutzer beim IdP anmeldet oder abmeldet. Dies kann auf zwei verschiedene Arten geschehen:

- Der {{httpheader("Set-Login")}} HTTP-Antwort-Header kann in einer obersten Navigation oder einer ursprungsgleichen Subressource-Anfrage gesetzt werden:

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

### Wie der Anmeldestatus den föderierten Anmeldevorgang beeinflusst

Wenn ein [RP eine föderierte Anmeldung versucht](/de/docs/Web/API/FedCM_API/RP_sign-in), wird der Anmeldestatus überprüft:

- Wenn der Anmeldestatus eines IdP `"logged-in"` ist, wird eine Anfrage an den [Kontenlisten-Endpunkt](#der_kontenliste-endpunkt) gesendet und verfügbare Konten zur Anmeldung werden dem Benutzer im browserbereitgestellten FedCM-Dialog angezeigt.
- Wenn alle Anmeldestatus der IdPs `"logged-out"` sind, wird das Versprechen, das von der FedCM `get()`-Anfrage zurückgegeben wird, abgelehnt, ohne eine Anfrage an den Kontenlisten-Endpunkt zu senden. In einem solchen Fall liegt es an dem Entwickler, den Ablauf zu handhaben, zum Beispiel indem er den Benutzer auffordert, sich bei einem geeigneten IdP anzumelden.
- Wenn der Anmeldestatus eines IdP `"unknown"` ist, wird eine Anfrage an den Kontenlisten-Endpunkt gesendet und der Anmeldestatus je nach Antwort aktualisiert:
  - Wenn der Endpunkt eine Liste verfügbarer Konten zur Anmeldung zurückgibt, aktualisieren Sie den Status auf `"logged-in"` und zeigen Sie die Anmeldeoptionen dem Benutzer im browserbereitgestellten FedCM-Dialog an.
  - Wenn der Endpunkt keine Konten zurückgibt, aktualisieren Sie den Status auf `"logged-out"`; das Versprechen, das von der FedCM `get()`-Anfrage zurückgegeben wird, wird abgelehnt, wenn keine anderen `logged-in` IdPs verfügbar sind.

### Was passiert, wenn der Browser- und IdP-Anmeldestatus nicht synchronisiert sind?

Trotz der Möglichkeit der Login Status API, den Browser über den IdP-Anmeldestatus zu informieren, ist es möglich, dass der Browser und ein IdP nicht synchron sind. Beispielsweise können die IdP-Sitzungen ablaufen, was bedeutet, dass alle Benutzerkonten abgemeldet werden, aber der Anmeldestatus immer noch auf `"logged-in"` gesetzt ist (die Anwendung konnte den Anmeldestatus nicht auf `"logged-out"` setzen). In einem solchen Fall, wenn eine föderierte Anmeldung versucht wird, wird eine Anfrage an den Kontenlisten-Endpunkt des IdP gestellt, aber keine verfügbaren Konten werden zurückgegeben, da die Sitzung nicht mehr verfügbar ist.

In einem solchen Fall kann der Browser einem Benutzer dynamisch ermöglichen, sich bei einem IdP anzumelden, indem er die Anmeldeseite des IdP in einem Dialog öffnet (die Anmelde-URL befindet sich in der [Konfigurationsdatei des IdP](#eine_konfigurationsdatei_und_endpunkte_bereitstellen) `login_url`). Die genaue Art dieses Ablaufs liegt im Ermessen des Browsers; beispielsweise behandelt [Chrome es wie folgt](https://privacysandbox.google.com/blog/fedcm-chrome-120-updates#what_if_the_user_session_expires_let_the_user_sign_in_through_a_dynamic_login_flow).

Sobald der Benutzer beim IdP angemeldet ist, sollte der IdP:

- Den Browser darüber informieren, dass der Benutzer angemeldet wurde, indem [der Anmeldestatus gut](#festlegen_des_anmeldestatus) auf `"logged-in"` gesetzt wird.
- Den Anmeldedialog schließen, indem die [`IdentityProvider.close()`](/de/docs/Web/API/IdentityProvider/close_static)-Methode aufgerufen wird.

## Siehe auch

- [Federated Credential Management API](https://developer.chrome.com/docs/identity/fedcm/overview) auf developer.chrome.com (2023)
