---
title: Integration des Identitätsanbieters mit FedCM
slug: Web/API/FedCM_API/IDP_integration
l10n:
  sourceCommit: 091521f3316c12449d993d6284b25e8b032b1e0c
---

{{DefaultAPISidebar("FedCM API")}}

Dieser Artikel beschreibt alle Schritte, die ein {{Glossary("Identity_provider", "Identitätsanbieter")}} (IdP) unternehmen muss, um sich in die Federated Credential Management (FedCM) API zu integrieren.

## Schritte zur IdP-Integration

Um sich in FedCM zu integrieren, muss ein IdP Folgendes tun:

1. [Eine well-known-Datei bereitstellen](#eine_well-known-datei_bereitstellen), um den IdP zu identifizieren.
2. [Eine Konfigurationsdatei und Endpunkte bereitstellen](#eine_konfigurationsdatei_und_endpunkte_bereitstellen) für die Kontenliste und die Ausstellung von Assertions (und optional Metadaten des Clients).
3. [Den Anmeldestatus aktualisieren](#anmeldestatus_mithilfe_der_login_status_api_aktualisieren) mithilfe der Login Status API.

## Eine well-known-Datei bereitstellen

Es gibt ein potenzielles Datenschutzproblem, bei dem ein [IdP in der Lage ist, herauszufinden, ob ein Nutzer eine vertrauende Partei (RP) besucht hat, ohne ausdrückliche Zustimmung](https://github.com/w3c-fedid/FedCM/issues/230). Dies hat Tracking-Auswirkungen, sodass ein IdP verpflichtet ist, eine well-known-Datei bereitzustellen, um seine Identität zu verifizieren und dieses Problem zu mindern.

Die well-known-Datei wird über eine nicht authentifizierte [`GET`](/de/docs/Web/HTTP/Reference/Methods/GET)-Anfrage angefordert, die keine Umleitungen folgt. Dies verhindert effektiv, dass der IdP erfährt, wer die Anfrage gestellt hat und welche {{Glossary("Relying_party", "RP")}} versucht sich zu verbinden.

Die well-known-Datei muss vom [eTLD+1](https://web.dev/articles/same-site-same-origin#site) des IdP unter `/.well-known/web-identity` bereitgestellt werden. Zum Beispiel, wenn die IdP-Endpunkte unter `https://accounts.idp.example/` bereitgestellt werden, müssen sie eine well-known-Datei unter `https://idp.example/.well-known/web-identity` bereitstellen. Der Inhalt der well-known-Datei sollte die folgende JSON-Struktur haben:

```json
{
  "provider_urls": ["https://accounts.idp.example/config.json"]
}
```

Das `provider_urls`-Element sollte ein Array von URLs enthalten, die auf gültige IdP-Konfigurationsdateien verweisen, die von RPs zur Interaktion mit dem IdP verwendet werden können. Die Länge des Arrays ist derzeit auf eins begrenzt.

## Der `Sec-Fetch-Dest` HTTP-Header

Alle Anfragen, die vom Browser über FedCM gesendet werden, enthalten einen `{{httpheader("Sec-Fetch-Dest")}}: webidentity`-Header. Alle IdP-Endpunkte, die authentifizierte Anfragen (d.h. `accounts_endpoint` und `id_assertion_endpoint`) empfangen, müssen bestätigen, dass dieser Header enthalten ist, um sich vor {{Glossary("CSRF", "CSRF")}}-Angriffen zu schützen.

## Eine Konfigurationsdatei und Endpunkte bereitstellen

Die IdP-Konfigurationsdatei stellt eine Liste der Endpunkte bereit, die der Browser benötigt, um den Prozess der Identitätsföderation zu verarbeiten und die Anmeldungen zu verwalten. Die Endpunkte müssen in derselben Herkunft wie die Konfiguration sein.

Der Browser stellt über die Methode [`GET`](/de/docs/Web/HTTP/Reference/Methods/GET) eine nicht authentifizierte Anfrage für die Konfigurationsdatei, die keine Umleitungen folgt. Dies verhindert effektiv, dass der IdP erfährt, wer die Anfrage gestellt hat und welche RP versucht sich zu verbinden.

Die Konfigurationsdatei (gehostet unter `https://accounts.idp.example/config.json` in unserem Beispiel) sollte die folgende JSON-Struktur haben:

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
  - : Die URL für den Endpunkt der Kontenliste, die eine Liste von Konten zurückgibt, bei denen der Nutzer derzeit beim IdP angemeldet ist. Der Browser verwendet diese, um eine Liste von Anmeldoptionen zu erstellen, die dem Nutzer in der browserseitig bereitgestellten FedCM-Benutzeroberfläche angezeigt wird.
- `account_label` {{optional_inline}}
  - : Ein String, der, falls enthalten, einen Bezeichner für eine Teilmenge von Konten angibt, die zurückgegeben werden sollen, wenn dieser IdP für föderierte Authentifizierung verwendet wird. Wenn eine `get()`-Anfrage gestellt wird, werden nur Konten, die mit diesem String in ihren `label_hints`-Parametern übereinstimmen, vom [Kontenendpunkt](#der_endpunkt_der_kontenliste) zurückgegeben.
- `supports_use_other_account` {{optional_inline}}
  - : Ein boolean, der standardmäßig `false` ist; wenn auf `true` gesetzt, bedeutet dies, dass Nutzer sich mit einem anderen Konto als dem derzeit angemeldeten Konto (wenn der IdP mehrere Konten unterstützt) anmelden können. Dies gilt nur für `get()`-Aufrufe, die [aktive Modus](/de/docs/Web/API/IdentityCredentialRequestOptions#active) angeben.
    > [!NOTE]
    > In der Browser-Anmelde-UI wird dies wahrscheinlich als eine Art "Anderes Konto auswählen"-Button angezeigt.
- `client_metadata_endpoint` {{optional_inline}}
  - : Die URL für den Endpunkt der Client-Metadaten, die URLs bereitstellt, die auf die Metadaten und die Seiten mit den Allgemeinen Geschäftsbedingungen der RP verweisen, um in der FedCM-UI verwendet zu werden.
- `disconnect_endpoint` {{optional_inline}}
  - : Die URL für den Disconnect-Endpunkt, der von der RP verwendet wird, um die Verbindung zum IdP zu trennen, über die Methode [`IdentityCredential.disconnect()`](/de/docs/Web/API/IdentityCredential/disconnect_static).
- `id_assertion_endpoint`
  - : Die URL für den ID Assertion Endpoint, der, wenn er mit gültigen Nutzeranmeldedaten gesendet wird, mit einem Validierungstoken antworten sollte, das die RP verwenden kann, um die Authentifizierung zu validieren.
- `login_url`
  - : Die URL der Anmeldeseite, auf der sich der Nutzer beim IdP anmelden kann.
- `branding` {{optional_inline}}
  - : Enthält Branding-Informationen, die in der browserseitig bereitgestellten FedCM-UI verwendet werden, um das Erscheinungsbild nach den Wünschen des IdP anzupassen. Die bereitgestellte Symbolgröße muss im passiven Modus größer oder gleich `25` (`25px`) und im aktiven Modus größer oder gleich `40` (`40px`) sein (siehe [Aktiv vs. passiver Modus](/de/docs/Web/API/FedCM_API/RP_sign-in#active_versus_passive_mode) für mehr Details).

Die folgende Tabelle fasst die unterschiedlichen Anfragen zusammen, die von der FedCM-API gestellt werden:

| Endpunkt/Ressource         | Methode | Authentifiziert (mit Cookies) | Enthält {{httpheader("Origin")}} |
| -------------------------- | ------- | ----------------------------- | -------------------------------- |
| `well-known`/`config.json` | `GET`   | Nein                          | Nein                             |
| `accounts_endpoint`        | `GET`   | Ja                            | Nein                             |
| `client_metadata_endpoint` | `GET`   | Nein                          | Ja                               |
| `disconnect_endpoint`      | `POST`  | Ja                            | Ja                               |
| `id_assertion_endpoint`    | `POST`  | Ja                            | Ja                               |

> [!NOTE]
> Für eine Beschreibung des FedCM-Flows, bei dem diese Endpunkte aufgerufen werden, siehe [FedCM Anmeldefluss](/de/docs/Web/API/FedCM_API/RP_sign-in#fedcm_sign-in_flow).

> [!NOTE]
> Keine der Anfragen, die von der FedCM-API an die hier beschriebenen Endpunkte gestellt werden, erlauben das Folgen von Umleitungen, aus Datenschutzgründen.

### Der Endpunkt der Kontenliste

Der Browser sendet authentifizierte Anfragen (d.h. mit einem Cookie, das den angemeldeten Nutzer identifiziert) an diesen Endpunkt über die `GET`-Methode. Die Anfrage enthält keinen `client_id`-Parameter, {{httpheader("Origin")}}-Header oder {{httpheader("Referer")}}-Header. Dies verhindert effektiv, dass der IdP erfährt, bei welcher RP der Nutzer sich anzumelden versucht. Die zurückgegebene Kontenliste ist RP-neutral.

Zum Beispiel:

```http
GET /accounts.php HTTP/1.1
Host: idp.example
Accept: application/json
Cookie: 0x23223
Sec-Fetch-Dest: webidentity
```

Die Antwort auf eine erfolgreiche Anfrage gibt eine Liste aller IdP-Konten zurück, bei denen der Nutzer derzeit angemeldet ist (nicht auf eine bestimmte RP beschränkt), mit einer JSON-Struktur, die dem Folgenden entspricht:

```json
{
  "accounts": [
    {
      "id": "elaina_maduro",
      "given_name": "Elaina",
      "name": "Elaina Maduro",
      "email": "elaina_maduro@idp.example",
      "tel": "+491234567890",
      "username": "elmaduro",
      "picture": "https://idp.example/profile/123",
      "approved_clients": ["123", "456", "789"],
      "domain_hints": ["rp1.example.com", "rp3.example.com"],
      "label_hints": ["developer", "admin"],
      "login_hints": ["elaina_maduro", "elaina_maduro@idp.example"]
    },
    {
      "id": "elly",
      "given_name": "Elly",
      "username": "lamaduro",
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

Dies umfasst die folgenden Informationen, wobei `name`, `email`, `username` und `tel` optional, aber mindestens einer von ihnen präsent und nicht leer sein muss.

- `id`
  - : Die eindeutige ID des Nutzers.
- `name` {{optional_inline}}
  - : Der Nachname des Nutzers.
- `email` {{optional_inline}}
  - : Die E-Mail-Adresse des Nutzers.
- `tel` {{optional_inline}}
  - : Die Telefonnummer des Nutzers. Kann in jedem Format vorliegen.
- `username` {{optional_inline}}
  - : Der Benutzername des Nutzers.
- `given_name` {{optional_inline}}
  - : Der Vorname des Nutzers.
- `picture` {{optional_inline}}
  - : Die URL des Avatars des Nutzers.
- `approved_clients` {{optional_inline}}
  - : Ein Array von RP-Clients, mit denen der Nutzer registriert ist.
- `domain_hints` {{optional_inline}}
  - : Ein Array von Domains, mit denen das Konto verknüpft ist. Die RP kann einen `get()`-Aufruf durchführen, der eine [`domainHint`](/de/docs/Web/API/IdentityCredentialRequestOptions#domainhint)-Eigenschaft enthält, um die zurückgegebenen Konten nach Domain zu filtern.
- `label_hints` {{optional_inline}}
  - : Ein Array von Strings, das Labels angibt, die Kontotypen definieren, mit denen das Konto identifiziert ist. Wenn die Konfigurationsdatei ein [`account_label`](#account_label) spezifiziert, werden nur Konten zurückgegeben, die dieses Label in ihren `label_hints` enthalten, aus dem Kontenlistenendpunkt.
- `login_hints` {{optional_inline}}
  - : Ein Array von Strings, die das Konto repräsentieren. Diese Strings werden verwendet, um die Liste der Kontooptionen zu filtern, die der Browser dem Nutzer zur Anmeldung anbietet. Dies tritt auf, wenn die `loginHint`-Eigenschaft innerhalb von [`identity.providers`](/de/docs/Web/API/IdentityCredentialRequestOptions#providers) in einem verwandten `get()`-Aufruf bereitgestellt wird. Jedes Konto mit einem String in seinem `login_hints`-Array, das mit dem bereitgestellten `loginHint` übereinstimmt, wird eingeschlossen.

> [!NOTE]
> Wenn der Nutzer in keinem IdP-Konto angemeldet ist, sollte der Endpunkt mit [HTTP 401 (Unauthorized)](/de/docs/Web/HTTP/Reference/Status/401) antworten.

### Der Client-Metadaten-Endpunkt

Der Browser sendet nicht authentifizierte Anfragen an diesen Endpunkt über die `GET`-Methode, wobei der `clientId` in den `get()`-Aufruf als Parameter eingebracht wird.

Zum Beispiel:

```http
GET /client_metadata.php?client_id=1234 HTTP/1.1
Host: idp.example
Origin: https://rp.example/
Accept: application/json
Sec-Fetch-Dest: webidentity
```

Die Antwort auf eine erfolgreiche Anfrage enthält URLs, die auf die Metadaten- und die Allgemeinen Geschäftsbedingungen-Seiten der RP verweisen, um in der browserseitig bereitgestellten FedCM-UI verwendet zu werden. Dies sollte der unten gezeigten JSON-Struktur folgen:

```json
{
  "privacy_policy_url": "https://rp.example/privacy_policy.html",
  "terms_of_service_url": "https://rp.example/terms_of_service.html"
}
```

### Der Disconnect-Endpunkt

Durch Aufrufen von [`IdentityCredential.disconnect()`](/de/docs/Web/API/IdentityCredential/disconnect_static) sendet der Browser eine übergreifende {{httpmethod("POST")}}-Anfrage mit Cookies und einem {{httpheader("Content-Type")}} von `application/x-www-form-urlencoded` an den Disconnect-Endpunkt mit den folgenden Informationen:

- `account_hint`
  - : Ein String, der einen Account-Hinweis angibt, den der IdP verwendet, um das zu trennende Konto zu identifizieren.
- `client_id`
  - : Ein String, der die Client-Kennung der RP angibt.

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

Beim Empfang der Anfrage sollte der IdP-Server:

1. Auf die Anfrage mit [CORS (Cross-Origin Resource Sharing)](/de/docs/Web/HTTP/Guides/CORS) antworten.
2. Überprüfen, dass die Anfrage einen {{httpheader("Sec-Fetch-Dest")}} HTTP-Header mit der Anweisung `webidentity` enthält.
3. Den {{httpheader("Origin")}}-Header mit der durch die `client_id` bestimmten RP-Herkunft abgleichen. Das Versprechen ablehnen, wenn sie nicht übereinstimmen.
4. Das Konto finden, das mit dem `account_hint` übereinstimmt.
5. Das Nutzerkonto aus der Liste der verbundenen Konten der RP entfernen.
6. Mit der identifizierten `account_id` des Nutzers im JSON-Format antworten:

   ```json
   {
     "account_id": "account456"
   }
   ```

> [!NOTE]
> Wenn der IdP alle mit der RP verknüpften Konten trennen möchte, kann er einen String übergeben, der mit keiner `account_id` übereinstimmt, zum Beispiel `"account_id": "*"`.

### Der ID Assertion Endpoint

Der Browser sendet authentifizierte Anfragen an diesen Endpunkt über die [`POST`](/de/docs/Web/HTTP/Reference/Methods/POST)-Methode, mit einem Inhaltstyp von `application/x-www-form-urlencoded`. Die Anfrage beinhaltet auch eine Nutzlast mit Details über die versuchte Anmeldung und das zu validierende Konto.

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

Eine Anfrage an diesen Endpunkt wird als Ergebnis der Auswahl eines Kontos für die Anmeldung durch den Nutzer in der entsprechenden Browser-UI gesendet. Wenn sie mit gültigen Nutzerdaten gesendet wird, sollte dieser Endpunkt mit einem Validierungstoken antworten, das die RP verwenden kann, um den Nutzer auf seinem eigenen Server zu validieren, gemäß den von dem von ihnen verwendeten IdP für Identitätsföderation beschriebenen Nutzungshinweisen. Sobald die RP den Nutzer validiert, können sie ihn anmelden, für ihren Dienst registrieren, etc.

```json
{
  "token": "***********"
}
```

Die Anfragenutzlast enthält die folgenden Parameter:

- `client_id`
  - : Die Client-Kennung der RP (die mit dem `clientId` aus der ursprünglichen `get()`-Anfrage übereinstimmt).
- `account_id`
  - : Die eindeutige ID des Benutzerkontos, das angemeldet werden soll (die mit der `id` des Nutzers aus der Antwort des Kontenlistenendpunkts übereinstimmt).
- `nonce` {{optional_inline}}
  - : Der Anfragenonce, bereitgestellt durch die RP.
- `disclosure_text_shown`
  - : Ein String mit `"true"` oder `"false"`, der angibt, ob der Offenlegungstext angezeigt wurde oder nicht. Der Offenlegungstext ist die dem Nutzer angezeigte Information (die, wenn bereitgestellt, Links zu den Allgemeinen Geschäftsbedingungen und der Datenschutzrichtlinie enthalten kann), wenn der Nutzer bei dem IdP angemeldet ist, aber kein spezifisches Konto bei der aktuellen RP hat (in diesem Fall müsste er wählen, seine IdP-Identität als `"Continue as..."` zu nutzen und dann ein entsprechendes Konto bei der RP zu erstellen).
- `is_auto_selected`
  - : Ein String mit `"true"` oder `"false"`, der angibt, ob die Anmeldevalidierungsanfrage aufgrund einer [automatischen Neuauthentifizierung](/de/docs/Web/API/FedCM_API/RP_sign-in#auto-reauthentication) ausgestellt wurde, d.h. ohne Nutzerintervention. Dies kann auftreten, wenn der [`get()`](/de/docs/Web/API/CredentialsContainer/get)-Aufruf mit einer [`mediation`](/de/docs/Web/API/CredentialsContainer/get#mediation)-Optionswert von `"optional"` oder `"silent"` durchgeführt wird. Es ist nützlich für den IdP zu wissen, ob eine automatische Neuauthentifizierung stattgefunden hat, für Leistungsevaluationszwecke und für den Fall, dass höhere Sicherheit gewünscht wird. Zum Beispiel könnte der IdP einen Fehlercode zurückgeben, der der RP mitteilt, dass eine explizite Nutzerintervention erforderlich ist (`mediation="required"`).

> [!NOTE]
> Wenn der [`get()`](/de/docs/Web/API/CredentialsContainer/get)-Aufruf erfolgreich ist, wird der `is_auto_selected`-Wert ebenfalls der RP über die [`IdentityCredential.isAutoSelected`](/de/docs/Web/API/IdentityCredential/isAutoSelected)-Eigenschaft mitgeteilt.

#### CORS-Header für den ID Assertion Endpoint

Die ID Assertion Endpoint-Antwort muss die {{httpheader("Access-Control-Allow-Origin")}} und {{httpheader("Access-Control-Allow-Credentials")}}-Header einschließen, und der `Access-Control-Allow-Origin` muss die Herkunft des Anfragenden umfassen:

```http
Access-Control-Allow-Origin: https://rp.example
Access-Control-Allow-Credentials: true
```

Zu beachten ist, dass der `Access-Control-Allow-Origin` auf die spezifische Herkunft des Anfragenden (der RP) gesetzt werden muss und nicht der Platzhalterwert `*` sein kann.

Ohne diese Header schlägt die Anfrage mit einem Netzfehler fehl.

#### ID Assertion Fehlerantworten

Wenn der IdP kein Token ausstellen kann — beispielsweise wenn der Client nicht autorisiert ist — antwortet der ID Assertion Endpoint mit einer Fehlerantwort, die Informationen über die Art des Fehlers enthält. Zum Beispiel:

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
  - : Eine URL. Dies sollte eine Webseite sein, die für den Nutzer lesbare Informationen über den Fehler enthält, wie z. B. wie der Fehler behoben oder der Support kontaktiert werden kann. Die URL muss innerhalb der gleichen Site wie die Konfigurations-URL des IdP sein.

Diese Informationen können auf verschiedene Weisen genutzt werden:

- Der Browser kann dem Nutzer eine benutzerdefinierte Benutzeroberfläche anzeigen, die ihn darüber informiert, was schiefgelaufen ist (siehe die [Chrome-Dokumentation](https://privacysandbox.google.com/blog/fedcm-chrome-120-updates#error-api) für ein Beispiel). Beachten Sie, dass der IdP-Server, wenn er nicht verfügbar ist, offensichtlich keine Informationen zurückgeben kann. In solchen Fällen wird der Browser dies über eine generische Nachricht melden.
- Der damit verbundene RP-Aufruf [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get), der versucht, die Anmeldung durchzuführen, wird sein Versprechen mit einem `IdentityCredentialError` zurückweisen, der die Fehlerinformationen enthält. Eine RP kann diesen Fehler abfangen und dann die benutzerdefinierte Benutzeroberfläche des Browsers mit einigen Informationen ergänzen, die dem Nutzer helfen, künftig erfolgreich eine Anmeldung zu versuchen.

## Anmeldestatus mithilfe der Login Status API aktualisieren

Die **Login Status API** ermöglicht es einem IdP, einem Browser mitzuteilen, ob er auf diesem bestimmten Browser angemeldet ist oder nicht — das bedeutet, "ob sich irgendwelche Nutzer beim IdP auf dem aktuellen Browser angemeldet haben". Der Browser speichert diesen Zustand für jeden IdP; die FedCM-API verwendet ihn dann, um die Anzahl der Anfragen an den IdP zu reduzieren (weil es keine Zeitverschwendung bedeutet, Konten abzufragen, wenn niemand beim IdP angemeldet ist). Es mildert auch [potenzielle Timing-Angriffe](https://github.com/w3c-fedid/FedCM/issues/447).

Für jeden bekannten IdP (identifiziert durch seine Konfigurations-URL) speichert der Browser eine Drei-Zustands-Variable, die den Anmeldestatus mit drei möglichen Werten repräsentiert:

- `"logged-in"`: Der IdP hat mindestens ein angemeldetes Benutzerkonto. Beachten Sie, dass in diesem Stadium die RP und der Browser nicht wissen, welcher Nutzer das ist. Informationen zu spezifischen Nutzern werden zu einem späteren Zeitpunkt im FedCM-Fluss vom [`accounts_endpoint`](#der_endpunkt_der_kontenliste) des IdP zurückgegeben.
- `"logged-out"`: Alle IdP-Konten sind derzeit abgemeldet.
- `"unknown"`: Der Anmeldestatus dieses IdP ist unbekannt. Dies ist der vorgegebene Wert.

### Anmeldestatus setzen

Der IdP sollte seinen Anmeldestatus aktualisieren, wenn ein Benutzer sich beim IdP anmeldet oder abmeldet. Dies kann auf zwei verschiedene Arten erfolgen:

- Der {{httpheader("Set-Login")}} HTTP-Antwortheader kann in einer Top-Level-Navigation oder einer gleich-originären Subressourcenanfrage gesetzt werden:

  ```http
  Set-Login: logged-in

  Set-Login: logged-out
  ```

- Die Methode [`Navigator.login.setStatus()`](/de/docs/Web/API/NavigatorLogin/setStatus) kann von der IdP-Herkunft aus aufgerufen werden:

  ```js
  /* Set logged-in status */
  navigator.login.setStatus("logged-in");

  /* Set logged-out status */
  navigator.login.setStatus("logged-out");
  ```

### Wie sich der Anmeldestatus auf den föderierten Anmeldefluss auswirkt

Wenn eine [RP eine föderierte Anmeldung versucht](/de/docs/Web/API/FedCM_API/RP_sign-in), wird der Anmeldestatus überprüft:

- Wenn der Anmeldestatus eines IdP `"logged-in"` ist, wird eine Anfrage an den [Kontenlistenendpunkt](#der_endpunkt_der_kontenliste) gestellt und verfügbare Anmeldungen zur Auswahl dem Nutzer im browserseitig bereitgestellten FedCM-Dialog angezeigt.
- Wenn alle Anmeldestatus der IdPs `"logged-out"` sind, wird das Versprechen, das von der FedCM-`get()`-Anfrage zurückgegeben wird, ohne eine Anfrage an den Kontenlistenendpunkt abzulehnen. In einem solchen Fall liegt es am Entwickler, den Fluss zu steuern, z.B. indem der Nutzer aufgefordert wird, sich bei einem geeigneten IdP anzumelden.
- Wenn der Anmeldestatus eines IdP `"unknown"` ist, wird eine Anfrage an den Kontenlistenendpunkt gestellt und der Anmeldestatus je nach Antwort aktualisiert:
  - Wenn der Endpunkt eine Liste der verfügbaren Anmeldungen zurückgibt, wird der Status auf `"logged-in"` aktualisiert und die Anmeldeoptionen werden dem Nutzer im browserseitig bereitgestellten FedCM-Dialog angezeigt.
  - Wenn der Endpunkt keine Konten zurückgibt, wird der Status auf `"logged-out"` aktualisiert; das von der FedCM-`get()`-Anfrage zurückgegebene Versprechen wird abgelehnt, wenn keine anderen `logged-in` IdPs verfügbar sind.

### Was passiert, wenn der Browser und der IdP-Anmeldestatus nicht mehr synchron sind?

Trotz der Tatsache, dass die Login Status API den Browser über den Anmeldestatus des IdP informiert, ist es möglich, dass der Browser und ein IdP nicht mehr synchron sind. Beispielsweise könnten die IdP-Sitzungen ablaufen, was dazu führt, dass alle Benutzerkonten abgemeldet sind, aber der Anmeldestatus immer noch auf `"logged-in"` gesetzt ist (die Anwendung konnte den Anmeldestatus nicht auf `"logged-out"` setzen). In einem solchen Fall wird, wenn eine föderierte Anmeldung versucht wird, eine Anfrage an den Kontenlistenendpunkt des IdP gestellt werden, aber keine verfügbaren Konten werden zurückgegeben, da die Sitzung nicht mehr verfügbar ist.

In solchen Fällen kann der Browser dynamisch einem Nutzer erlauben, sich bei einem IdP anzumelden, indem er die Anmeldeseite des IdP in einem Dialog öffnet (die Anmelde-URL befindet sich in der [Konfigurationsdatei](#eine_konfigurationsdatei_und_endpunkte_bereitstellen) des IdP im `login_url`). Die genaue Natur dieses Flows liegt beim Browser; zum Beispiel [behandelt Chrome es so](https://privacysandbox.google.com/blog/fedcm-chrome-120-updates#what_if_the_user_session_expires_let_the_user_sign_in_through_a_dynamic_login_flow).

Sobald der Nutzer beim IdP angemeldet ist, sollte der IdP:

- Den Browser darüber informieren, dass der Nutzer sich angemeldet hat, indem der [Anmeldestatus gesetzt](#anmeldestatus_setzen) auf `"logged-in"` wird.
- Den Anmeldedialog schließen, indem die Methode [`IdentityProvider.close()`](/de/docs/Web/API/IdentityProvider/close_static) aufgerufen wird.

## Siehe auch

- [Federated Credential Management API](https://privacysandbox.google.com/cookies/fedcm) auf privacysandbox.google.com (2023)
