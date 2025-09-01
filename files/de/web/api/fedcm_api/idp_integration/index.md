---
title: Integration des Identitätsanbieters mit FedCM
slug: Web/API/FedCM_API/IDP_integration
l10n:
  sourceCommit: 3157f78e4c4131d85ff82a4d4ab7d67e91c32b69
---

{{DefaultAPISidebar("FedCM API")}}

Dieser Artikel beschreibt alle Schritte, die ein {{Glossary("Identity_provider", "Identitätsanbieter")}} (IdP) unternehmen muss, um sich in die Federated Credential Management (FedCM) API zu integrieren.

## Schritte für die IdP-Integration

Um sich in FedCM zu integrieren, muss ein IdP Folgendes tun:

1. [Stellen Sie eine wohlbekannte Datei bereit](#stellen_sie_eine_wohlbekannte_datei_bereit), um den IdP zu identifizieren.
2. [Stellen Sie eine Konfigurationsdatei und Endpunkte bereit](#stellen_sie_eine_konfigurationsdatei_und_endpunkte_bereit) für die Kontenliste und die Assertion-Erstellung (und optional, Metadaten des Clients).
3. [Aktualisieren Sie den Anmeldestatus](#aktualisieren_des_anmeldestatus_mit_der_login_status_api) mithilfe der Login Status API.

## Stellen Sie eine wohlbekannte Datei bereit

Es besteht ein potenzielles Datenschutzproblem, bei dem ein [IdP in der Lage ist, festzustellen, ob ein Benutzer ohne ausdrückliche Zustimmung eine relying party (RP) besucht hat](https://github.com/w3c-fedid/FedCM/issues/230). Dies hat Auswirkungen auf das Tracking, daher muss ein IdP eine wohlbekannte Datei zur Verfügung stellen, um seine Identität zu verifizieren und dieses Problem zu mildern.

Die wohlbekannte Datei wird über eine ungebuchte [`GET`](/de/docs/Web/HTTP/Reference/Methods/GET)-Anfrage angefordert, die keine Umleitungen verfolgt. Dies verhindert effektiv, dass der IdP erfährt, wer die Anfrage gestellt hat und welche {{Glossary("Relying_party", "RP")}} versucht, eine Verbindung herzustellen.

Die wohlbekannte Datei muss vom [eTLD+1](https://web.dev/articles/same-site-same-origin#site) des IdP unter `/.well-known/web-identity` bereitgestellt werden. Zum Beispiel, wenn die IdP-Endpunkte unter `https://accounts.idp.example/` bereitgestellt werden, müssen sie eine wohlbekannte Datei unter `https://idp.example/.well-known/web-identity` bereitstellen. Der Inhalt der wohlbekannten Datei sollte die folgende JSON-Struktur aufweisen:

```json
{
  "provider_urls": ["https://accounts.idp.example/config.json"]
}
```

Das `provider_urls`-Element sollte ein Array von URLs enthalten, das auf gültige IdP-Konfigurationsdateien verweist, die von RPs zur Interaktion mit dem IdP verwendet werden können. Die Länge des Arrays ist derzeit auf eins begrenzt.

## Der `Sec-Fetch-Dest` HTTP-Header

Alle Anfragen, die vom Browser über FedCM gesendet werden, enthalten einen `{{httpheader("Sec-Fetch-Dest")}}: webidentity` Header. Alle IdP-Endpunkte, die gebuchte Anfragen erhalten (d.h. `accounts_endpoint` und `id_assertion_endpoint`), müssen bestätigen, dass dieser Header enthalten ist, um sich gegen {{Glossary("CSRF", "CSRF")}}-Angriffe zu schützen.

## Stellen Sie eine Konfigurationsdatei und Endpunkte bereit

Die IdP-Konfigurationsdatei liefert eine Liste der Endpunkte, die der Browser benötigt, um den Identitätsföderationsfluss zu verarbeiten und die Anmeldungen zu verwalten. Die Endpunkte müssen mit der Konfiguration gemeinsam stammen.

Der Browser stellt eine ungebuchte Anfrage für die Konfigurationsdatei über die [`GET`](/de/docs/Web/HTTP/Reference/Methods/GET)-Methode, die keine Umleitungen verfolgt. Dies verhindert effektiv, dass der IdP erfährt, wer die Anfrage gemacht hat und welche RP versucht, sich zu verbinden.

Die Konfigurationsdatei (in unserem Beispiel gehostet unter `https://accounts.idp.example/config.json`) sollte die folgende JSON-Struktur aufweisen:

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
  - : Die URL für den Kontenlistenendpunkt, der eine Liste von Konten zurückgibt, bei denen der Benutzer derzeit beim IdP angemeldet ist. Der Browser verwendet diese, um eine Liste von Anmeldemöglichkeiten zu erstellen, die dem Benutzer in der vom Browser bereitgestellten FedCM-Benutzeroberfläche angezeigt werden.
- `account_label` {{optional_inline}}
  - : Ein String, der, falls enthalten, einen Bezeichner für eine Teilmenge von Konten angibt, die zurückgegeben werden sollen, wenn dieser IdP für die föderierte Authentifizierung verwendet wird. Wenn eine `get()`-Anfrage gestellt wird, werden nur Konten zurückgegeben, die diesen String in ihren `label_hints`-Parametern enthalten.
- `supports_use_other_account` {{optional_inline}}
  - : Ein boolescher Wert, der standardmäßig `false` ist; wenn auf `true` gesetzt, bedeutet es, dass Benutzer sich mit einem anderen Konto anmelden können als dem, mit dem sie derzeit angemeldet sind, wenn der IdP mehrere Konten unterstützt. Dies gilt nur für `get()`-Aufrufe, die den [aktiven Modus](/de/docs/Web/API/IdentityCredentialRequestOptions#active) angeben.
    > [!NOTE]
    > In der Anmelde-Benutzeroberfläche des Browsers wird dies wahrscheinlich als eine Art "Anderes Konto wählen"-Schaltfläche dargestellt.
- `client_metadata_endpoint` {{optional_inline}}
  - : Die URL für den Client-Metadatenendpunkt, der URLs zu den Metadaten und den Service-AGB-Seiten der RP bereitstellt, die in der FedCM-Benutzeroberfläche verwendet werden sollen.
- `disconnect_endpoint` {{optional_inline}}
  - : Die URL für den Trennungsendpunkt, der von der RP verwendet wird, um die Verbindung zum IdP über die [`IdentityCredential.disconnect()`](/de/docs/Web/API/IdentityCredential/disconnect_static)-Methode zu trennen.
- `id_assertion_endpoint`
  - : Die URL für den ID-Bestätigungsendpunkt, der bei Angabe gültiger Benutzeranmeldeinformationen ein Validierungstoken zurückgeben sollte, das die RP zur Authentifizierungsvalidierung verwenden kann.
- `login_url`
  - : Die URL der Anmeldeseite, auf der sich der Benutzer beim IdP anmelden kann.
- `branding` {{optional_inline}}
  - : Enthält Branding-Informationen, die in der vom Browser bereitgestellten FedCM-Benutzeroberfläche verwendet werden, um das Erscheinungsbild nach den Wünschen des IdPs anzupassen. Die bereitgestellte Symbolgröße muss im Passiv-Modus größer oder gleich `25` (`25px`) und im Aktiv-Modus größer oder gleich `40` (`40px`) sein (siehe [Aktiver vs. passiver Modus](/de/docs/Web/API/FedCM_API/RP_sign-in#active_versus_passive_mode) für weitere Details).

Die folgende Tabelle fasst die verschiedenen Anfragen zusammen, die von der FedCM-API gestellt werden:

| Endpunkt/Ressource         | Methode | Gekennzeichnet (mit Cookies) | Beinhaltet {{httpheader("Origin")}} |
| -------------------------- | ------- | ---------------------------- | ----------------------------------- |
| `well-known`/`config.json` | `GET`   | Nein                         | Nein                                |
| `accounts_endpoint`        | `GET`   | Ja                           | Nein                                |
| `client_metadata_endpoint` | `GET`   | Nein                         | Ja                                  |
| `disconnect_endpoint`      | `POST`  | Ja                           | Ja                                  |
| `id_assertion_endpoint`    | `POST`  | Ja                           | Ja                                  |

> [!NOTE]
> Für eine Beschreibung des FedCM-Flusses, in dem diese Endpunkte angesprochen werden, siehe [FedCM Anmeldefluss](/de/docs/Web/API/FedCM_API/RP_sign-in#fedcm_sign-in_flow).

> [!NOTE]
> Keine der vom FedCM-API erstellten Anfragen zu den hier beschriebenen Endpunkten erlaubt es, Umleitungen zu folgen, aus Datenschutzgründen.

### Der Kontenlistenendpunkt

Der Browser sendet gebuchte Anfragen (d.h. mit einem Cookie, das den angemeldeten Benutzer identifiziert) an diesen Endpunkt über die `GET`-Methode. Die Anfrage hat keinen `client_id`-Parameter, keinen {{httpheader("Origin")}}-Header oder {{httpheader("Referer")}}-Header. Dies verhindert effekt, dass der IdP erfährt, bei welcher RP der Benutzer sich anzumelden versucht. Die zurückgegebene Liste der Konten ist RP-unabhängig.

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

Dies enthält die folgenden Informationen, wobei `name`, `email`, `username` und `tel` optional sind, aber mindestens eines von ihnen muss vorhanden und nicht leer sein.

- `id`
  - : Die eindeutige ID des Benutzers.
- `name` {{optional_inline}}
  - : Der Familienname des Benutzers.
- `email` {{optional_inline}}
  - : Die E-Mail-Adresse des Benutzers.
- `tel` {{optional_inline}}
  - : Die Telefonnummer des Benutzers. Kann in jedem Format vorliegen.
- `username` {{optional_inline}}
  - : Der Benutzername des Benutzers.
- `given_name` {{optional_inline}}
  - : Der Vorname des Benutzers.
- `picture` {{optional_inline}}
  - : Die URL des Benutzeravatar-Bildes.
- `approved_clients` {{optional_inline}}
  - : Ein Array von RP-Clients, mit denen der Benutzer registriert ist.
- `domain_hints` {{optional_inline}}
  - : Ein Array von Domains, mit denen das Konto verknüpft ist. Die RP kann einen `get()`-Aufruf ausführen, der eine [`domainHint`](/de/docs/Web/API/IdentityCredentialRequestOptions#domainhint)-Eigenschaft enthält, um die zurückgegebenen Konten nach Domain zu filtern.
- `label_hints` {{optional_inline}}
  - : Ein Array von Strings, die Labels spezifizieren, die Kontotypen definieren, mit denen das Konto identifiziert wird. Wenn die Konfigurationsdatei ein [`account_label`](#account_label) angibt, werden nur Konten zurückgegeben, die dieses Label in ihren `label_hints` enthalten.
- `login_hints` {{optional_inline}}
  - : Ein Array von Strings, die das Konto repräsentieren. Diese Strings werden verwendet, um die Liste der Kontooptionen zu filtern, die der Browser dem Benutzer zur Anmeldung anbietet. Dies geschieht, wenn die `loginHint`-Eigenschaft innerhalb von [`identity.providers`](/de/docs/Web/API/IdentityCredentialRequestOptions#providers) in einem verwandten `get()`-Aufruf bereitgestellt wird. Jedes Konto, das einen passenden String in seinem `login_hints`-Array hat, wird eingeschlossen.

> [!NOTE]
> Wenn der Benutzer bei keinen IdP-Konten angemeldet ist, sollte der Endpunkt mit [HTTP 401 (Unauthorized)](/de/docs/Web/HTTP/Reference/Status/401) antworten.

### Der Client-Metadatenendpunkt

Der Browser sendet ungebuchte Anfragen an diesen Endpunkt über die `GET`-Methode, wobei der `clientId`-Wert als Parameter in den `get()`-Aufruf übergeben wird.

Zum Beispiel:

```http
GET /client_metadata.php?client_id=1234 HTTP/1.1
Host: idp.example
Origin: https://rp.example/
Accept: application/json
Sec-Fetch-Dest: webidentity
```

Die Antwort auf eine erfolgreiche Anfrage enthält URLs, die auf die Metadaten und die Service-AGB-Seiten der RP verweisen, die in der vom Browser bereitgestellten FedCM-Benutzeroberfläche verwendet werden sollen. Dies sollte der unten gezeigten JSON-Struktur folgen:

```json
{
  "privacy_policy_url": "https://rp.example/privacy_policy.html",
  "terms_of_service_url": "https://rp.example/terms_of_service.html"
}
```

### Der Trennungsendpunkt

Durch Auslösen von [`IdentityCredential.disconnect()`](/de/docs/Web/API/IdentityCredential/disconnect_static) sendet der Browser eine Cross-Origin {{httpmethod("POST")}}-Anfrage mit Cookies und einem {{httpheader("Content-Type")}} von `application/x-www-form-urlencoded` an den Trennungsendpunkt mit den folgenden Informationen:

- `account_hint`
  - : Ein String, der einen Kontohinweis spezifiziert, den der IdP zur Identifikation des zu trennenden Kontos verwendet.
- `client_id`
  - : Ein String, der den Client-Identifikator der RP spezifiziert.

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
2. Verifizieren, dass die Anfrage einen {{httpheader("Sec-Fetch-Dest")}} HTTP-Header mit einer Direktive von `webidentity` enthält.
3. Den {{httpheader("Origin")}}-Header mit dem RP-Origin abgleichen, der durch `client_id` bestimmt wird. Die Anfrage ablehnen, wenn sie nicht übereinstimmen.
4. Das Konto finden, das dem `account_hint` entspricht.
5. Das Benutzerkonto von der Liste der verbundenen RP-Konten trennen.
6. Mit der identifizierten `account_id` des Benutzers im JSON-Format antworten:

   ```json
   {
     "account_id": "account456"
   }
   ```

> [!NOTE]
> Wenn der IdP alle mit der RP verbundenen Konten trennen möchte, kann er eine Zeichenfolge übergeben, die mit keiner `account_id` übereinstimmt, zum Beispiel `"account_id": "*"`.

### Der ID-Bestätigungsendpunkt

Der Browser sendet gebuchte Anfragen an diesen Endpunkt über die [`POST`](/de/docs/Web/HTTP/Reference/Methods/POST)-Methode, mit einem Content-Type von `application/x-www-form-urlencoded`. Die Anfrage enthält auch eine Nutzlast mit Details über den versuchten Anmeldeversuch und das zu validierende Konto.

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

Eine Anfrage an diesen Endpunkt wird als Ergebnis der Benutzerwahl eines Kontos zur Anmeldung in der relevanten Benutzeroberfläche des Browsers gesendet. Bei gültigen Benutzerdaten sollte dieser Endpunkt mit einem Validierungstoken antworten, das die RP verwenden kann, um den Benutzer auf ihrem eigenen Server zu validieren, entsprechend den vom IdP festgelegten Nutzungsanweisungen für die Identitätsföderation. Sobald die RP den Benutzer validiert hat, kann sie ihn anmelden, sich bei ihrem Service registrieren usw.

```json
{
  "token": "***********"
}
```

Die Anfragenutzlast enthält die folgenden Parameter:

- `client_id`
  - : Der Client-Identifizierer der RP (der mit dem `clientId` aus der ursprünglichen `get()`-Anfrage übereinstimmt).
- `account_id`
  - : Die eindeutige ID des Benutzerkontos, das angemeldet werden soll (die mit der `id` des Benutzers aus der Antwort des Kontenlistenendpunkts übereinstimmt).
- `nonce` {{optional_inline}}
  - : Die Anfrage-Nonce, bereitgestellt durch die RP.
- `disclosure_text_shown`
  - : Ein String von `"true"` oder `"false"`, der angibt, ob der Offenlegungstext angezeigt wurde oder nicht. Der Offenlegungstext ist die dem Benutzer gezeigte Information (die, falls bereitgestellt, die Links zu den Nutzungsbedingungen und der Datenschutzerklärung enthalten kann), falls der Benutzer beim IdP angemeldet ist, aber kein spezielles Konto auf der aktuellen RP hat (in diesem Fall müsste der Benutzer wählen, "Weiter als..." seine IdP-Identität zu fahren und dann ein entsprechendes Konto auf der RP zu erstellen).
- `is_auto_selected`
  - : Ein String von `"true"` oder `"false"`, der angibt, ob die Authentifizierungsvalidierungsanfrage als Ergebnis einer [automatischen erneuten Authentifizierung](/de/docs/Web/API/FedCM_API/RP_sign-in#auto-reauthentication) ausgegeben wurde, d.h. ohne Benutzermediation. Dies kann auftreten, wenn der [`get()`](/de/docs/Web/API/CredentialsContainer/get)-Aufruf mit einem [`mediation`](/de/docs/Web/API/CredentialsContainer/get#mediation)-Optionswert von `"optional"` oder `"silent"` ausgeführt wird. Es ist nützlich für den IdP zu wissen, ob eine automatische erneute Authentifizierung stattgefunden hat, zur Leistungsüberprüfung und falls höhere Sicherheit gewünscht ist. Beispielsweise könnte der IdP einen Fehlercode zurückgeben, der der RP mitteilt, dass eine ausdrückliche Benutzermediation erforderlich ist (`mediation="required"`).

> [!NOTE]
> Wenn der [`get()`](/de/docs/Web/API/CredentialsContainer/get)-Aufruf erfolgreich ist, wird der `is_auto_selected` Wert auch über die [`IdentityCredential.isAutoSelected`](/de/docs/Web/API/IdentityCredential/isAutoSelected)-Eigenschaft an die RP kommuniziert.

#### CORS-Header für den ID-Bestätigungsendpunkt

Die Antwort des ID-Bestätigungsendpunkts muss die Header {{httpheader("Access-Control-Allow-Origin")}} und {{httpheader("Access-Control-Allow-Credentials")}} enthalten, und der `Access-Control-Allow-Origin` muss den Origin des Anfragenden einbeziehen:

```http
Access-Control-Allow-Origin: https://rp.example
Access-Control-Allow-Credentials: true
```

Beachten Sie, dass der `Access-Control-Allow-Origin` auf den spezifischen Origin des Anfragenden (die RP) gesetzt werden muss und nicht auf den Platzhalterwert `*`.

Ohne diese Header schlägt die Anfrage mit einem Netzwerkausfall fehl.

#### Fehlerantworten des ID-Bestätigungsendpunkts

Wenn der IdP kein Token ausstellen kann — zum Beispiel, wenn der Client nicht autorisiert ist — antwortet der ID-Bestätigungsendpunkt mit einer Fehlerantwort, die Informationen über die Art des Fehlers enthält. Zum Beispiel:

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
  - : Ein String. Dies kann entweder ein in der [OAuth 2.0 spezifizierten Fehlerliste](https://datatracker.ietf.org/doc/html/rfc6749#section-4.1.2.1) bekannter Fehler oder ein beliebiger String sein.
- `url` {{optional_inline}}
  - : Eine URL. Dies sollte eine Webseite sein, die dem Benutzer in menschlich lesbarer Form informiert, was falsch gelaufen ist, wie der Fehler behoben werden kann oder wie der Kundendienst kontaktieren kann. Die URL muss mit der Konfigurations-URL des IdPs gleich sein.

Diese Informationen können auf verschiedene Arten verwendet werden:

- Der Browser kann dem Benutzer eine benutzerdefinierte Benutzeroberfläche anzeigen, die ihn darüber informiert, was schiefgelaufen ist (siehe die [Chrome-Dokumentation](https://privacysandbox.google.com/blog/fedcm-chrome-120-updates#error-api) für ein Beispiel). Beachten Sie, dass, wenn die Anfrage fehlschlägt, weil der IdP-Server nicht verfügbar ist, dieser offensichtlich keine Informationen zurückgeben kann. In solchen Fällen wird der Browser dies mit einer generischen Nachricht melden.
- Der mit der assoziierten RP [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get)-Aufruf, der zum Anmeldeversuch verwendet wird, wird sein Versprechen mit einem `IdentityCredentialError` ablehnen, der die Fehlerinformationen enthält. Eine RP kann diesen Fehler abfangen und dann die benutzerdefinierte Benutzeroberfläche des Browsers mit Informationen ergänzen, um dem Benutzer zu helfen, in einem zukünftigen Anmeldeversuch erfolgreich zu sein.

## Aktualisieren des Anmeldestatus mit der Login Status API

Die **Login Status API** ermöglicht es einem IdP, einen Browser über seinen Anmeldestatus in diesem speziellen Browser zu informieren — damit ist gemeint: "ob in dem aktuellen Browser irgendwelche Benutzer beim IdP angemeldet sind oder nicht". Der Browser speichert diesen Status für jeden IdP. Die FedCM-API verwendet dann diese Information, um die Anzahl der Anfragen an den IdP zu reduzieren (da sie keine unnötige Zeit damit verbringen muss, Konten anzufordern, wenn keine Benutzer beim IdP angemeldet sind). Sie mildert auch [potenzielle Timing-Angriffe](https://github.com/w3c-fedid/FedCM/issues/447).

Für jeden bekannten IdP (identifiziert durch seine Konfigurations-URL) speichert der Browser eine dreistufige Variable, die den Anmeldestatus mit drei möglichen Werten darstellt:

- `"logged-in"`: Der IdP hat mindestens ein Benutzerkonto angemeldet. Beachten Sie, dass die RP und der Browser zu diesem Zeitpunkt noch nicht wissen, welcher Benutzer das ist. Informationen über spezifische Benutzer werden von dem [`accounts_endpoint`](#der_kontenlistenendpunkt) des IdPs zu einem späteren Zeitpunkt im FedCM-Fluss zurückgegeben.
- `"logged-out"`: Alle IdP-Konten sind derzeit abgemeldet.
- `"unknown"`: Der Anmeldestatus dieses IdPs ist nicht bekannt. Dies ist der Standardwert.

### Anmeldestatus festlegen

Der IdP sollte seinen Anmeldestatus aktualisieren, wenn sich ein Benutzer beim IdP an- oder abmeldet. Dies kann auf zwei verschiedene Arten geschehen:

- Der {{httpheader("Set-Login")}} HTTP-Antwort-Header kann bei einer Top-Level-Navigation oder einer same-origin Subressource-Anfrage gesetzt werden:

  ```http
  Set-Login: logged-in

  Set-Login: logged-out
  ```

- Die [`Navigator.login.setStatus()`](/de/docs/Web/API/NavigatorLogin/setStatus)-Methode kann vom IdP-Origin aus aufgerufen werden:

  ```js
  /* Set logged-in status */
  navigator.login.setStatus("logged-in");

  /* Set logged-out status */
  navigator.login.setStatus("logged-out");
  ```

### Wie sich der Anmeldestatus auf den föderierten Anmeldefluss auswirkt

Wenn eine [RP eine föderierte Anmeldung versucht](/de/docs/Web/API/FedCM_API/RP_sign-in), wird der Anmeldestatus überprüft:

- Wenn der Anmeldestatus eines IdPs `"logged-in"` ist, wird eine Anfrage an den [Kontenlistenendpunkt](#der_kontenlistenendpunkt) gestellt und verfügbare Konten zur Anmeldung werden dem Benutzer im vom Browser bereitgestellten FedCM-Dialog angezeigt.
- Wenn die Anmeldestatus aller IdPs `"logged-out"` sind, lehnt das von der FedCM `get()`-Anfrage zurückgegebene Versprechen ohne eine Anfrage an den Kontenlistenendpunkt ab. In einem solchen Fall liegt es am Entwickler, den Fluss zu handhaben, zum Beispiel, indem er den Benutzer auffordert, sich bei einem geeigneten IdP anzumelden.
- Wenn der Anmeldestatus eines IdPs `"unknown"` ist, wird eine Anfrage an den Kontenlistenendpunkt gestellt und der Anmeldestatus wird abhängig von der Antwort aktualisiert:
  - Wenn der Endpunkt eine Liste von verfügbaren Konten zur Anmeldung zurückgibt, wird der Status auf `"logged-in"` aktualisiert und die Anmeldeoptionen werden dem Benutzer im vom Browser bereitgestellten FedCM-Dialog angezeigt.
  - Wenn der Endpunkt keine Konten zurückgibt, wird der Status auf `"logged-out"` aktualisiert; das von der FedCM `get()`-Anfrage zurückgegebene Versprechen wird abgelehnt, wenn keine anderen `logged-in` IdPs verfügbar sind.

### Was passiert, wenn der Browser- und der IdP-Anmeldestatus nicht synchron sind?

Trotz der Login Status API, die den Browser über den Anmeldestatus des IdPs informiert, ist es möglich, dass der Browser und ein IdP nicht synchron sind. Zum Beispiel könnten die IdP-Sitzungen ablaufen, was bedeutet, dass alle Benutzerkonten abgemeldet werden, obwohl der Anmeldestatus noch auf `"logged-in"` gesetzt ist (die Anwendung war nicht in der Lage, den Anmeldestatus auf `"logged-out"` zu setzen). In einem solchen Fall, wenn eine föderierte Anmeldung versucht wird, wird eine Anfrage an den Kontenlistenendpunkt des IdPs gestellt, aber es werden keine verfügbaren Konten zurückgegeben, da die Sitzung nicht mehr verfügbar ist.

Wenn dies auftritt, kann der Browser einem Benutzer dynamisch erlauben, sich bei einem IdP anzumelden, indem die Anmeldeseite des IdPs in einem Dialog geöffnet wird (die Anmelde-URL befindet sich in der [Konfigurationsdatei](#stellen_sie_eine_konfigurationsdatei_und_endpunkte_bereit) `login_url` des IdPs). Die genaue Art dieses Flusses liegt beim Browser; zum Beispiel [handhabt Chrome es so](https://privacysandbox.google.com/blog/fedcm-chrome-120-updates#what_if_the_user_session_expires_let_the_user_sign_in_through_a_dynamic_login_flow).

Sobald der Benutzer sich beim IdP angemeldet hat, sollte der IdP:

- Dem Browser mitteilen, dass sich der Benutzer angemeldet hat, indem er den [Anmeldestatus auf](#anmeldestatus_festlegen) `"logged-in"` setzt.
- Den Anmeldedialog durch Aufrufen der [`IdentityProvider.close()`](/de/docs/Web/API/IdentityProvider/close_static)-Methode schließen.

## Weitere Informationen

- [Federated Credential Management API](https://privacysandbox.google.com/cookies/fedcm) auf privacysandbox.google.com (2023)
